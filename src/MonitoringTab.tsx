import type { ClusterDetailTabProps } from '@openeverest/plugin-sdk';
import { LineChart } from '@mui/x-charts/LineChart';
import { Select, MenuItem, FormControl, InputLabel, Box, CircularProgress, Typography, Paper } from '@mui/material';
import React from 'react';

type TimeRange = '1h' | '6h' | '24h' | '7d';

const PREDEFINED_METRICS = {
  cpu: { label: 'CPU Usage', query: 'sum(rate(node_cpu_seconds_total{mode!="idle"}[5m])) by (instance)' },
  ram: { label: 'RAM Usage', query: '100 * (1 - ((node_memory_MemFree_bytes + node_memory_Cached_bytes + node_memory_Buffers_bytes) / node_memory_MemTotal_bytes))' },
  disk: { label: 'Disk Usage', query: '100 - (node_filesystem_avail_bytes{fstype=~"ext4|xfs"} / node_filesystem_size_bytes{fstype=~"ext4|xfs"} * 100)' },
};

export const pluginFetch = (input: string, init?: RequestInit): Promise<Response> => {
    // We will pass this from main.tsx somehow. Or we can just use the global window.fetch.
    // Wait, pluginFetch is required to have the correct auth headers!
    return (window as any).__pluginFetch(input, init);
};

const MetricChart = ({ namespace, instanceName, metricQuery, metricLabel, timeRange }: { namespace: string, instanceName: string, metricQuery: string, metricLabel: string, timeRange: TimeRange }) => {
  const [data, setData] = React.useState<any>(null);
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);

  const fetchMetrics = React.useCallback(async () => {
    try {
      setLoading(true);
      const now = Math.floor(Date.now() / 1000);
      let start = now;
      let step = 60; // 1m

      if (timeRange === '1h') { start = now - 3600; step = 60; }
      else if (timeRange === '6h') { start = now - 3600 * 6; step = 300; }
      else if (timeRange === '24h') { start = now - 3600 * 24; step = 1200; }
      else if (timeRange === '7d') { start = now - 3600 * 24 * 7; step = 7200; }

      const params = new URLSearchParams({
        query: metricQuery,
        start: start.toString(),
        end: now.toString(),
        step: step.toString()
      });

      const resp = await pluginFetch(`/api/namespaces/${namespace}/database-clusters/${instanceName}/monitoring/metrics?${params}`);
      if (!resp.ok) {
        throw new Error(`Failed to fetch metrics: ${resp.statusText}`);
      }
      
      const json = await resp.json();
      if (json.status !== 'success') {
        throw new Error(`Prometheus error: ${json.error}`);
      }

      const seriesData = json.data.result.map((series: any) => ({
        label: series.metric.pod || series.metric.instance || 'Total',
        data: series.values.map((v: any) => parseFloat(v[1])),
        timestamps: series.values.map((v: any) => new Date(v[0] * 1000)),
      }));

      setData(seriesData);
      setError(null);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [namespace, instanceName, metricQuery, timeRange]);

  React.useEffect(() => {
    fetchMetrics();
    const interval = setInterval(fetchMetrics, 30000); // refresh every 30s
    return () => clearInterval(interval);
  }, [fetchMetrics]);

  if (error) {
    return (
      <Box sx={{ p: 2, bgcolor: '#ffebee', color: '#c62828', borderRadius: 1 }}>
        <Typography variant="body2">{error}</Typography>
      </Box>
    );
  }

  if (loading && !data) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 300 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!data || data.length === 0) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 300 }}>
        <Typography variant="body1" color="text.secondary">No data available for {metricLabel}</Typography>
      </Box>
    );
  }

  const xLabels = data[0].timestamps;

  return (
    <Box sx={{ width: '100%', height: 300 }}>
      <LineChart
        xAxis={[{ data: xLabels, scaleType: 'time' }]}
        series={data.map((s: any) => ({
          data: s.data,
          label: s.label,
          showMark: false,
          curve: 'linear',
        }))}
        margin={{ top: 20, right: 20, bottom: 30, left: 50 }}
      />
    </Box>
  );
};

export default function MonitoringTab(props: any) {
  const [timeRange, setTimeRange] = React.useState<TimeRange>('1h');
  const [customMetric, setCustomMetric] = React.useState<string>('cpu');

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', gap: 2, mb: 4, alignItems: 'center' }}>
        <FormControl size="small" sx={{ minWidth: 200 }}>
          <InputLabel>Metric</InputLabel>
          <Select
            value={customMetric}
            label="Metric"
            onChange={(e: any) => setCustomMetric(e.target.value)}
          >
            {Object.entries(PREDEFINED_METRICS).map(([key, { label }]) => (
              <MenuItem key={key} value={key}>{label}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl size="small" sx={{ minWidth: 120 }}>
          <InputLabel>Time Range</InputLabel>
          <Select
            value={timeRange}
            label="Time Range"
            onChange={(e: any) => setTimeRange(e.target.value as TimeRange)}
          >
            <MenuItem value="1h">Last 1 hour</MenuItem>
            <MenuItem value="6h">Last 6 hours</MenuItem>
            <MenuItem value="24h">Last 24 hours</MenuItem>
            <MenuItem value="7d">Last 7 days</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>
        <Paper sx={{ p: 2, elevation: 1 }}>
          <Typography variant="h6" gutterBottom>CPU Usage</Typography>
          <MetricChart
            namespace={props.cluster?.metadata?.namespace || 'my-special-place'}
            instanceName={props.cluster?.metadata?.name || 'test-db-cluster'}
            metricQuery={PREDEFINED_METRICS.cpu.query}
            metricLabel={PREDEFINED_METRICS.cpu.label}
            timeRange={timeRange}
          />
        </Paper>
        <Paper sx={{ p: 2, elevation: 1 }}>
          <Typography variant="h6" gutterBottom>RAM Usage</Typography>
          <MetricChart
            namespace={props.cluster?.metadata?.namespace || 'my-special-place'}
            instanceName={props.cluster?.metadata?.name || 'test-db-cluster'}
            metricQuery={PREDEFINED_METRICS.ram.query}
            metricLabel={PREDEFINED_METRICS.ram.label}
            timeRange={timeRange}
          />
        </Paper>
        <Paper sx={{ p: 2, elevation: 1 }}>
          <Typography variant="h6" gutterBottom>Disk Usage</Typography>
          <MetricChart
            namespace={props.cluster?.metadata?.namespace || 'my-special-place'}
            instanceName={props.cluster?.metadata?.name || 'test-db-cluster'}
            metricQuery={PREDEFINED_METRICS.disk.query}
            metricLabel={PREDEFINED_METRICS.disk.label}
            timeRange={timeRange}
          />
        </Paper>
        <Paper sx={{ p: 2, elevation: 1 }}>
          <Typography variant="h6" gutterBottom>Custom Selected: {PREDEFINED_METRICS[customMetric as keyof typeof PREDEFINED_METRICS].label}</Typography>
          <MetricChart
            namespace={props.cluster?.metadata?.namespace || 'my-special-place'}
            instanceName={props.cluster?.metadata?.name || 'test-db-cluster'}
            metricQuery={PREDEFINED_METRICS[customMetric as keyof typeof PREDEFINED_METRICS].query}
            metricLabel={PREDEFINED_METRICS[customMetric as keyof typeof PREDEFINED_METRICS].label}
            timeRange={timeRange}
          />
        </Paper>
      </Box>
    </Box>
  );
}
