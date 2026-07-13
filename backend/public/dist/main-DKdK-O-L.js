let s = null;
const a = (e) => {
  s = e;
}, t = (e) => (...n) => s[e](...n), c = t("useState"), r = t("useEffect"), l = t("useContext"), u = t("useCallback"), i = t("useMemo"), f = t("useRef"), d = t("useLayoutEffect"), m = t("useImperativeHandle"), y = t("useDebugValue"), g = t("useDeferredValue"), E = t("useTransition"), C = t("useId"), x = t("useSyncExternalStore"), R = t("useInsertionEffect"), h = t("forwardRef"), p = t("memo"), S = t("createContext"), b = t("createElement"), _ = t("cloneElement"), w = t("isValidElement"), P = t("createRef"), I = t("createFactory"), v = t("lazy"), F = t("startTransition"), M = new Proxy({}, { get: (e, n) => s.Fragment[n] }), T = new Proxy({}, { get: (e, n) => s.StrictMode[n] }), V = new Proxy({}, { get: (e, n) => s.Suspense[n] }), z = new Proxy({}, { get: (e, n) => s.Profiler[n] }), D = {
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
}), k = "18.2.0", L = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Children: D,
  Fragment: M,
  Profiler: z,
  StrictMode: T,
  Suspense: V,
  cloneElement: _,
  createContext: S,
  createElement: b,
  createFactory: I,
  createRef: P,
  default: j,
  forwardRef: h,
  isValidElement: w,
  lazy: v,
  memo: p,
  setReact: a,
  startTransition: F,
  useCallback: u,
  useContext: l,
  useDebugValue: y,
  useDeferredValue: g,
  useEffect: r,
  useId: C,
  useImperativeHandle: m,
  useInsertionEffect: R,
  useLayoutEffect: d,
  useMemo: i,
  useRef: f,
  useState: c,
  useSyncExternalStore: x,
  useTransition: E,
  version: k
}, Symbol.toStringTag, { value: "Module" }));
let o;
const A = (e) => {
  o = e.React, a(e.React), window.__pluginFetch = e.fetch.bind(e);
  const n = o.lazy(() => import("./MonitoringTab-DpdtzOxi.js"));
  e.registerExtension({
    type: "clusterDetailTab",
    label: "Monitoring",
    path: "monitoring",
    component: n
  });
};
export {
  D as C,
  M as F,
  L as R,
  j as a,
  S as b,
  _ as c,
  b as d,
  l as e,
  h as f,
  r as g,
  m as h,
  w as i,
  d as j,
  i as k,
  f as l,
  p as m,
  c as n,
  x as o,
  A as r,
  u,
  k as v
};
