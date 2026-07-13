let s = null;
const a = (e) => {
  s = e;
}, t = (e) => (...n) => s[e](...n), l = t("useState"), u = t("useEffect"), i = t("useContext"), f = t("useCallback"), d = t("useMemo"), m = t("useRef"), y = t("useLayoutEffect"), g = t("useImperativeHandle"), E = t("useDebugValue"), p = t("useDeferredValue"), x = t("useTransition"), C = t("useId"), R = t("useSyncExternalStore"), S = t("useInsertionEffect"), b = t("forwardRef"), h = t("memo"), _ = t("createContext"), w = t("createElement"), P = t("cloneElement"), v = t("isValidElement"), I = t("createRef"), F = t("createFactory"), M = t("lazy"), T = t("startTransition"), V = new Proxy({}, { get: (e, n) => s.Fragment[n] }), z = new Proxy({}, { get: (e, n) => s.StrictMode[n] }), D = new Proxy({}, { get: (e, n) => s.Suspense[n] }), k = new Proxy({}, { get: (e, n) => s.Profiler[n] }), L = {
  map: (e, n) => s.Children.map(e, n),
  forEach: (e, n) => s.Children.forEach(e, n),
  count: (e) => s.Children.count(e),
  only: (e) => s.Children.only(e),
  toArray: (e) => s.Children.toArray(e)
}, j = new Proxy({}, {
  get(e, n) {
    if (s)
      return s[n];
  }
}), A = "18.2.0", H = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Children: L,
  Fragment: V,
  Profiler: k,
  StrictMode: z,
  Suspense: D,
  cloneElement: P,
  createContext: _,
  createElement: w,
  createFactory: F,
  createRef: I,
  default: j,
  forwardRef: b,
  isValidElement: v,
  lazy: M,
  memo: h,
  setReact: a,
  startTransition: T,
  useCallback: f,
  useContext: i,
  useDebugValue: E,
  useDeferredValue: p,
  useEffect: u,
  useId: C,
  useImperativeHandle: g,
  useInsertionEffect: S,
  useLayoutEffect: y,
  useMemo: d,
  useRef: m,
  useState: l,
  useSyncExternalStore: R,
  useTransition: x,
  version: A
}, Symbol.toStringTag, { value: "Module" }));
let o;
const O = (e) => {
  o = e.React, a(e.React), window.__pluginFetch = e.fetch.bind(e);
  const n = o.lazy(() => import("./MonitoringTab-XfCudelK.js")), r = (c) => o.createElement(
    o.Suspense,
    { fallback: o.createElement("div", { style: { padding: "20px" } }, "Loading Plugin...") },
    o.createElement(n, c)
  );
  e.registerExtension({
    type: "clusterDetailTab",
    label: "Monitoring",
    path: "monitoring",
    component: r
  });
};
export {
  L as C,
  V as F,
  H as R,
  j as a,
  _ as b,
  P as c,
  w as d,
  i as e,
  b as f,
  u as g,
  g as h,
  v as i,
  y as j,
  d as k,
  m as l,
  h as m,
  l as n,
  R as o,
  O as r,
  f as u,
  A as v
};
