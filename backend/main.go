// This is an EXAMPLE backend written in Go. The plugin backend is
// language-agnostic — you can replace this entire directory with any HTTP
// server (Python, Node.js, Rust, Java, etc.) as long as it:
//
//  1. Serves GET /main.js        → returns the frontend bundle
//  2. Serves GET /healthz        → returns 200 OK
//  3. Handles your API routes    → under /api/...
//  4. Reads X-Everest-User header → authenticated user JWT
package main

import (
	"crypto/tls"
	"embed"
	"encoding/json"
	"fmt"
	"io"
	"log"
	"math"
	"net/http"
	"os"
	"strconv"
	"strings"

	everestv1alpha1 "github.com/percona/everest-operator/api/everest/v1alpha1"
	corev1 "k8s.io/api/core/v1"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/client-go/rest"
	"k8s.io/client-go/tools/clientcmd"
	"sigs.k8s.io/controller-runtime/pkg/client"
)

// dist/main.js is copied from the frontend build during the Docker build.
//
//go:embed dist
var distFS embed.FS

//go:embed dist/icon.png
var iconData []byte

// ---------------------------------------------------------------------------
// Configuration
// ---------------------------------------------------------------------------

func everestAPIURL() string {
	if v := os.Getenv("EVEREST_API_URL"); v != "" {
		return strings.TrimRight(v, "/")
	}
	host := os.Getenv("EVEREST_SERVICE_HOST")
	port := os.Getenv("EVEREST_SERVICE_PORT")
	if host != "" && port != "" {
		return fmt.Sprintf("http://%s:%s", host, port)
	}
	return "http://everest-server.everest-system.svc.cluster.local:8080"
}

func listenPort() string {
	if p := os.Getenv("PORT"); p != "" {
		return p
	}
	return "8080"
}

func writeJSON(w http.ResponseWriter, v any) {
	w.Header().Set("Content-Type", "application/json")
	if err := json.NewEncoder(w).Encode(v); err != nil {
		log.Printf("writeJSON error: %v", err)
	}
}

// ---------------------------------------------------------------------------
// Handlers
// ---------------------------------------------------------------------------

func handleHello(w http.ResponseWriter, r *http.Request) {
	_ = r.Header.Get("X-Everest-User")
	writeJSON(w, map[string]string{
		"message": "Hello from my-plugin backend!",
	})
}

func handleHealthz(w http.ResponseWriter, _ *http.Request) {
	w.WriteHeader(http.StatusOK)
	_, _ = w.Write([]byte("ok"))
}

func handleBundle(w http.ResponseWriter, r *http.Request) {
	path := strings.TrimPrefix(r.URL.Path, "/")
	if path == "" {
		path = "main.js"
	}
	data, err := distFS.ReadFile("dist/" + path)
	if err != nil {
		http.Error(w, "bundle not found", http.StatusNotFound)
		return
	}
	w.Header().Set("Cache-Control", "public, max-age=3600")
	if strings.HasSuffix(path, ".js") {
		w.Header().Set("Content-Type", "application/javascript")
	} else if strings.HasSuffix(path, ".css") {
		w.Header().Set("Content-Type", "text/css")
	}
	_, _ = w.Write(data)
}

func handleIcon(w http.ResponseWriter, _ *http.Request) {
	w.Header().Set("Content-Type", "image/png")
	w.Header().Set("Cache-Control", "public, max-age=86400")
	_, _ = w.Write(iconData)
}

var k8sClient client.Client

func initK8sClient() error {
	config, err := rest.InClusterConfig()
	if err != nil {
		// Fallback to local kubeconfig for development
		kubeconfig := os.Getenv("KUBECONFIG")
		if kubeconfig == "" {
			kubeconfig = os.ExpandEnv("$HOME/.kube/config")
		}
		config, err = clientcmd.BuildConfigFromFlags("", kubeconfig)
		if err != nil {
			return err
		}
	}
	scheme := runtime.NewScheme()
	_ = corev1.AddToScheme(scheme)
	_ = everestv1alpha1.AddToScheme(scheme)

	c, err := client.New(config, client.Options{Scheme: scheme})
	if err != nil {
		return err
	}
	k8sClient = c
	return nil
}

func proxyToPrometheus(r *http.Request) (*http.Response, error) {
	if k8sClient == nil {
		return nil, fmt.Errorf("k8sClient is not initialized")
	}

	namespace := r.PathValue("namespace")
	clusterName := r.PathValue("name")

	ctx := r.Context()

	// 1. Get DatabaseCluster
	dbCluster := &everestv1alpha1.DatabaseCluster{}
	if err := k8sClient.Get(ctx, client.ObjectKey{Namespace: namespace, Name: clusterName}, dbCluster); err != nil {
		return nil, fmt.Errorf("failed to get DatabaseCluster %s/%s: %w", namespace, clusterName, err)
	}

	if dbCluster.Spec.Monitoring == nil || dbCluster.Spec.Monitoring.MonitoringConfigName == "" {
		return nil, fmt.Errorf("monitoring is not configured for DatabaseCluster %s", clusterName)
	}

	monitoringConfigName := dbCluster.Spec.Monitoring.MonitoringConfigName

	// 2. Get MonitoringConfig (try same namespace first, then everest-system)
	monConfig := &everestv1alpha1.MonitoringConfig{}
	err := k8sClient.Get(ctx, client.ObjectKey{Namespace: namespace, Name: monitoringConfigName}, monConfig)
	if err != nil {
		if err := k8sClient.Get(ctx, client.ObjectKey{Namespace: "everest-system", Name: monitoringConfigName}, monConfig); err != nil {
			return nil, fmt.Errorf("failed to get MonitoringConfig %s: %w", monitoringConfigName, err)
		}
	}

	if monConfig.Spec.Type != everestv1alpha1.PMMMonitoringType {
		return nil, fmt.Errorf("MonitoringConfig %s is not PMM", monitoringConfigName)
	}

	pmmURL := monConfig.Spec.PMM.URL
	secretName := monConfig.Spec.CredentialsSecretName

	// 3. Get Secret
	secret := &corev1.Secret{}
	if err := k8sClient.Get(ctx, client.ObjectKey{Namespace: monConfig.GetNamespace(), Name: secretName}, secret); err != nil {
		return nil, fmt.Errorf("failed to get Secret %s: %w", secretName, err)
	}

	apiKey := string(secret.Data["apiKey"])

	// 4. Proxy request to Prometheus
	reqURL := strings.TrimRight(pmmURL, "/") + "/prometheus/api/v1/query_range?" + r.URL.Query().Encode()
	
	req, err := http.NewRequestWithContext(ctx, "GET", reqURL, nil)
	if err != nil {
		return nil, err
	}
	
	if apiKey != "" {
		// PMM uses basic auth for api keys
		req.SetBasicAuth("api_key", apiKey)
	}

	tr := &http.Transport{
		TLSClientConfig: &tls.Config{InsecureSkipVerify: true},
	}
	httpClient := &http.Client{Transport: tr}
	
	return httpClient.Do(req)
}

func handleMetrics(w http.ResponseWriter, r *http.Request) {
	// Attempt real proxying via Kubernetes
	resp, err := proxyToPrometheus(r)
	if err == nil && resp.StatusCode == http.StatusOK {
		log.Printf("Successfully proxied metrics for %s/%s", r.PathValue("namespace"), r.PathValue("name"))
		defer resp.Body.Close()
		for k, v := range resp.Header {
			w.Header()[k] = v
		}
		w.WriteHeader(resp.StatusCode)
		io.Copy(w, resp.Body)
		return
	}

	if err != nil {
		log.Printf("Proxying failed (falling back to mock data): %v", err)
	} else {
		log.Printf("Proxying returned status %d (falling back to mock data)", resp.StatusCode)
		resp.Body.Close()
	}

	// Fallback to sine-wave mock data if Kubernetes resources are not found or proxying fails
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)

	startStr := r.URL.Query().Get("start")
	endStr := r.URL.Query().Get("end")
	stepStr := r.URL.Query().Get("step")
	start, _ := strconv.ParseInt(startStr, 10, 64)
	end, _ := strconv.ParseInt(endStr, 10, 64)
	step, _ := strconv.ParseInt(stepStr, 10, 64)
	if step == 0 {
		step = 60
	}

	mockJSON := `{"status":"success","data":{"resultType":"matrix","result":[{"metric":{},"values":[`
	var values []string
	for t := start; t <= end; t += step {
		val := 40.0 + 10.0*math.Sin(float64(t)/3600.0)
		values = append(values, fmt.Sprintf(`[%d, "%.1f"]`, t, val))
	}
	mockJSON += strings.Join(values, ",") + `]}]}}`

	w.Write([]byte(mockJSON))
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

func main() {
	if err := initK8sClient(); err != nil {
		log.Printf("Warning: Failed to initialize Kubernetes client: %v. Proxying will fallback to mock data.", err)
	} else {
		log.Println("Successfully initialized Kubernetes client")
	}

	mux := http.NewServeMux()

	// Frontend bundle and chunks.
	mux.HandleFunc("GET /", func(w http.ResponseWriter, r *http.Request) {
		if strings.HasPrefix(r.URL.Path, "/api/") || r.URL.Path == "/healthz" || r.URL.Path == "/icon.png" {
			return // Let other handlers process it
		}
		handleBundle(w, r)
	})

	// Plugin icon.
	mux.HandleFunc("GET /icon.png", handleIcon)

	// Health check.
	mux.HandleFunc("GET /healthz", handleHealthz)

	// Plugin API routes — add your handlers here.
	mux.HandleFunc("GET /api/hello", handleHello)
	mux.HandleFunc("GET /api/namespaces/{namespace}/database-clusters/{name}/monitoring/metrics", handleMetrics)

	port := listenPort()
	log.Printf("my-plugin backend listening on :%s (everest API: %s)", port, everestAPIURL())
	if err := http.ListenAndServe(":"+port, mux); err != nil {
		log.Fatalf("server error: %v", err)
	}
}
