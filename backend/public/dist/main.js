var BP = Object.defineProperty;
var jP = (e, t, n) => t in e ? BP(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var ue = (e, t, n) => jP(e, typeof t != "symbol" ? t + "" : t, n);
function UP(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i && Object.defineProperty(e, o, i.get ? i : {
            enumerable: !0,
            get: () => r[o]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
function HP(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var uw = { exports: {} }, ye = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ll = Symbol.for("react.element"), WP = Symbol.for("react.portal"), GP = Symbol.for("react.fragment"), VP = Symbol.for("react.strict_mode"), YP = Symbol.for("react.profiler"), KP = Symbol.for("react.provider"), XP = Symbol.for("react.context"), qP = Symbol.for("react.forward_ref"), QP = Symbol.for("react.suspense"), ZP = Symbol.for("react.memo"), JP = Symbol.for("react.lazy"), tv = Symbol.iterator;
function eM(e) {
  return e === null || typeof e != "object" ? null : (e = tv && e[tv] || e["@@iterator"], typeof e == "function" ? e : null);
}
var cw = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, dw = Object.assign, fw = {};
function vs(e, t, n) {
  this.props = e, this.context = t, this.refs = fw, this.updater = n || cw;
}
vs.prototype.isReactComponent = {};
vs.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
vs.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function pw() {
}
pw.prototype = vs.prototype;
function Ug(e, t, n) {
  this.props = e, this.context = t, this.refs = fw, this.updater = n || cw;
}
var Hg = Ug.prototype = new pw();
Hg.constructor = Ug;
dw(Hg, vs.prototype);
Hg.isPureReactComponent = !0;
var nv = Array.isArray, hw = Object.prototype.hasOwnProperty, Wg = { current: null }, gw = { key: !0, ref: !0, __self: !0, __source: !0 };
function mw(e, t, n) {
  var r, o = {}, i = null, s = null;
  if (t != null) for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = "" + t.key), t) hw.call(t, r) && !gw.hasOwnProperty(r) && (o[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) o.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    o.children = l;
  }
  if (e && e.defaultProps) for (r in a = e.defaultProps, a) o[r] === void 0 && (o[r] = a[r]);
  return { $$typeof: ll, type: e, key: i, ref: s, props: o, _owner: Wg.current };
}
function tM(e, t) {
  return { $$typeof: ll, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Gg(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ll;
}
function nM(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var rv = /\/+/g;
function op(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? nM("" + e.key) : t.toString(36);
}
function Au(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else switch (i) {
    case "string":
    case "number":
      s = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case ll:
        case WP:
          s = !0;
      }
  }
  if (s) return s = e, o = o(s), e = r === "" ? "." + op(s, 0) : r, nv(o) ? (n = "", e != null && (n = e.replace(rv, "$&/") + "/"), Au(o, t, n, "", function(u) {
    return u;
  })) : o != null && (Gg(o) && (o = tM(o, n + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace(rv, "$&/") + "/") + e)), t.push(o)), 1;
  if (s = 0, r = r === "" ? "." : r + ":", nv(e)) for (var a = 0; a < e.length; a++) {
    i = e[a];
    var l = r + op(i, a);
    s += Au(i, t, n, l, o);
  }
  else if (l = eM(e), typeof l == "function") for (e = l.call(e), a = 0; !(i = e.next()).done; ) i = i.value, l = r + op(i, a++), s += Au(i, t, n, l, o);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return s;
}
function Yl(e, t, n) {
  if (e == null) return e;
  var r = [], o = 0;
  return Au(e, r, "", "", function(i) {
    return t.call(n, i, o++);
  }), r;
}
function rM(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
    }, function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ht = { current: null }, Ru = { transition: null }, oM = { ReactCurrentDispatcher: Ht, ReactCurrentBatchConfig: Ru, ReactCurrentOwner: Wg };
function yw() {
  throw Error("act(...) is not supported in production builds of React.");
}
ye.Children = { map: Yl, forEach: function(e, t, n) {
  Yl(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Yl(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Yl(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Gg(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
ye.Component = vs;
ye.Fragment = GP;
ye.Profiler = YP;
ye.PureComponent = Ug;
ye.StrictMode = VP;
ye.Suspense = QP;
ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = oM;
ye.act = yw;
ye.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = dw({}, e.props), o = e.key, i = e.ref, s = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, s = Wg.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var a = e.type.defaultProps;
    for (l in t) hw.call(t, l) && !gw.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: ll, type: e.type, key: o, ref: i, props: r, _owner: s };
};
ye.createContext = function(e) {
  return e = { $$typeof: XP, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: KP, _context: e }, e.Consumer = e;
};
ye.createElement = mw;
ye.createFactory = function(e) {
  var t = mw.bind(null, e);
  return t.type = e, t;
};
ye.createRef = function() {
  return { current: null };
};
ye.forwardRef = function(e) {
  return { $$typeof: qP, render: e };
};
ye.isValidElement = Gg;
ye.lazy = function(e) {
  return { $$typeof: JP, _payload: { _status: -1, _result: e }, _init: rM };
};
ye.memo = function(e, t) {
  return { $$typeof: ZP, type: e, compare: t === void 0 ? null : t };
};
ye.startTransition = function(e) {
  var t = Ru.transition;
  Ru.transition = {};
  try {
    e();
  } finally {
    Ru.transition = t;
  }
};
ye.unstable_act = yw;
ye.useCallback = function(e, t) {
  return Ht.current.useCallback(e, t);
};
ye.useContext = function(e) {
  return Ht.current.useContext(e);
};
ye.useDebugValue = function() {
};
ye.useDeferredValue = function(e) {
  return Ht.current.useDeferredValue(e);
};
ye.useEffect = function(e, t) {
  return Ht.current.useEffect(e, t);
};
ye.useId = function() {
  return Ht.current.useId();
};
ye.useImperativeHandle = function(e, t, n) {
  return Ht.current.useImperativeHandle(e, t, n);
};
ye.useInsertionEffect = function(e, t) {
  return Ht.current.useInsertionEffect(e, t);
};
ye.useLayoutEffect = function(e, t) {
  return Ht.current.useLayoutEffect(e, t);
};
ye.useMemo = function(e, t) {
  return Ht.current.useMemo(e, t);
};
ye.useReducer = function(e, t, n) {
  return Ht.current.useReducer(e, t, n);
};
ye.useRef = function(e) {
  return Ht.current.useRef(e);
};
ye.useState = function(e) {
  return Ht.current.useState(e);
};
ye.useSyncExternalStore = function(e, t, n) {
  return Ht.current.useSyncExternalStore(e, t, n);
};
ye.useTransition = function() {
  return Ht.current.useTransition();
};
ye.version = "18.3.1";
uw.exports = ye;
var k = uw.exports;
const nr = /* @__PURE__ */ HP(k), Ta = /* @__PURE__ */ UP({
  __proto__: null,
  default: nr
}, [k]);
var ah = {}, vw = { exports: {} }, pn = {}, xw = { exports: {} }, Cw = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  function t(R, F) {
    var z = R.length;
    R.push(F);
    e: for (; 0 < z; ) {
      var H = z - 1 >>> 1, W = R[H];
      if (0 < o(W, F)) R[H] = F, R[z] = W, z = H;
      else break e;
    }
  }
  function n(R) {
    return R.length === 0 ? null : R[0];
  }
  function r(R) {
    if (R.length === 0) return null;
    var F = R[0], z = R.pop();
    if (z !== F) {
      R[0] = z;
      e: for (var H = 0, W = R.length, q = W >>> 1; H < q; ) {
        var J = 2 * (H + 1) - 1, se = R[J], ee = J + 1, ne = R[ee];
        if (0 > o(se, z)) ee < W && 0 > o(ne, se) ? (R[H] = ne, R[ee] = z, H = ee) : (R[H] = se, R[J] = z, H = J);
        else if (ee < W && 0 > o(ne, z)) R[H] = ne, R[ee] = z, H = ee;
        else break e;
      }
    }
    return F;
  }
  function o(R, F) {
    var z = R.sortIndex - F.sortIndex;
    return z !== 0 ? z : R.id - F.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function() {
      return i.now();
    };
  } else {
    var s = Date, a = s.now();
    e.unstable_now = function() {
      return s.now() - a;
    };
  }
  var l = [], u = [], c = 1, d = null, p = 3, f = !1, h = !1, g = !1, x = typeof setTimeout == "function" ? setTimeout : null, y = typeof clearTimeout == "function" ? clearTimeout : null, m = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(R) {
    for (var F = n(u); F !== null; ) {
      if (F.callback === null) r(u);
      else if (F.startTime <= R) r(u), F.sortIndex = F.expirationTime, t(l, F);
      else break;
      F = n(u);
    }
  }
  function C(R) {
    if (g = !1, v(R), !h) if (n(l) !== null) h = !0, $(S);
    else {
      var F = n(u);
      F !== null && D(C, F.startTime - R);
    }
  }
  function S(R, F) {
    h = !1, g && (g = !1, y(T), T = -1), f = !0;
    var z = p;
    try {
      for (v(F), d = n(l); d !== null && (!(d.expirationTime > F) || R && !_()); ) {
        var H = d.callback;
        if (typeof H == "function") {
          d.callback = null, p = d.priorityLevel;
          var W = H(d.expirationTime <= F);
          F = e.unstable_now(), typeof W == "function" ? d.callback = W : d === n(l) && r(l), v(F);
        } else r(l);
        d = n(l);
      }
      if (d !== null) var q = !0;
      else {
        var J = n(u);
        J !== null && D(C, J.startTime - F), q = !1;
      }
      return q;
    } finally {
      d = null, p = z, f = !1;
    }
  }
  var b = !1, I = null, T = -1, L = 5, O = -1;
  function _() {
    return !(e.unstable_now() - O < L);
  }
  function w() {
    if (I !== null) {
      var R = e.unstable_now();
      O = R;
      var F = !0;
      try {
        F = I(!0, R);
      } finally {
        F ? A() : (b = !1, I = null);
      }
    } else b = !1;
  }
  var A;
  if (typeof m == "function") A = function() {
    m(w);
  };
  else if (typeof MessageChannel < "u") {
    var P = new MessageChannel(), M = P.port2;
    P.port1.onmessage = w, A = function() {
      M.postMessage(null);
    };
  } else A = function() {
    x(w, 0);
  };
  function $(R) {
    I = R, b || (b = !0, A());
  }
  function D(R, F) {
    T = x(function() {
      R(e.unstable_now());
    }, F);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(R) {
    R.callback = null;
  }, e.unstable_continueExecution = function() {
    h || f || (h = !0, $(S));
  }, e.unstable_forceFrameRate = function(R) {
    0 > R || 125 < R ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : L = 0 < R ? Math.floor(1e3 / R) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return p;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(l);
  }, e.unstable_next = function(R) {
    switch (p) {
      case 1:
      case 2:
      case 3:
        var F = 3;
        break;
      default:
        F = p;
    }
    var z = p;
    p = F;
    try {
      return R();
    } finally {
      p = z;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(R, F) {
    switch (R) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        R = 3;
    }
    var z = p;
    p = R;
    try {
      return F();
    } finally {
      p = z;
    }
  }, e.unstable_scheduleCallback = function(R, F, z) {
    var H = e.unstable_now();
    switch (typeof z == "object" && z !== null ? (z = z.delay, z = typeof z == "number" && 0 < z ? H + z : H) : z = H, R) {
      case 1:
        var W = -1;
        break;
      case 2:
        W = 250;
        break;
      case 5:
        W = 1073741823;
        break;
      case 4:
        W = 1e4;
        break;
      default:
        W = 5e3;
    }
    return W = z + W, R = { id: c++, callback: F, priorityLevel: R, startTime: z, expirationTime: W, sortIndex: -1 }, z > H ? (R.sortIndex = z, t(u, R), n(l) === null && R === n(u) && (g ? (y(T), T = -1) : g = !0, D(C, z - H))) : (R.sortIndex = W, t(l, R), h || f || (h = !0, $(S))), R;
  }, e.unstable_shouldYield = _, e.unstable_wrapCallback = function(R) {
    var F = p;
    return function() {
      var z = p;
      p = F;
      try {
        return R.apply(this, arguments);
      } finally {
        p = z;
      }
    };
  };
})(Cw);
xw.exports = Cw;
var iM = xw.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sM = k, dn = iM;
function G(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var ww = /* @__PURE__ */ new Set(), Ea = {};
function ni(e, t) {
  Gi(e, t), Gi(e + "Capture", t);
}
function Gi(e, t) {
  for (Ea[e] = t, e = 0; e < t.length; e++) ww.add(t[e]);
}
var Ar = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), lh = Object.prototype.hasOwnProperty, aM = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ov = {}, iv = {};
function lM(e) {
  return lh.call(iv, e) ? !0 : lh.call(ov, e) ? !1 : aM.test(e) ? iv[e] = !0 : (ov[e] = !0, !1);
}
function uM(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function cM(e, t, n, r) {
  if (t === null || typeof t > "u" || uM(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null) switch (n.type) {
    case 3:
      return !t;
    case 4:
      return t === !1;
    case 5:
      return isNaN(t);
    case 6:
      return isNaN(t) || 1 > t;
  }
  return !1;
}
function Wt(e, t, n, r, o, i, s) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = s;
}
var It = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  It[e] = new Wt(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  It[t] = new Wt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  It[e] = new Wt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  It[e] = new Wt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  It[e] = new Wt(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  It[e] = new Wt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  It[e] = new Wt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  It[e] = new Wt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  It[e] = new Wt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Vg = /[\-:]([a-z])/g;
function Yg(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Vg,
    Yg
  );
  It[t] = new Wt(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Vg, Yg);
  It[t] = new Wt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Vg, Yg);
  It[t] = new Wt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  It[e] = new Wt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
It.xlinkHref = new Wt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  It[e] = new Wt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Kg(e, t, n, r) {
  var o = It.hasOwnProperty(t) ? It[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (cM(t, n, o, r) && (n = null), r || o === null ? lM(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Br = sM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Kl = Symbol.for("react.element"), wi = Symbol.for("react.portal"), bi = Symbol.for("react.fragment"), Xg = Symbol.for("react.strict_mode"), uh = Symbol.for("react.profiler"), bw = Symbol.for("react.provider"), Sw = Symbol.for("react.context"), qg = Symbol.for("react.forward_ref"), ch = Symbol.for("react.suspense"), dh = Symbol.for("react.suspense_list"), Qg = Symbol.for("react.memo"), Gr = Symbol.for("react.lazy"), kw = Symbol.for("react.offscreen"), sv = Symbol.iterator;
function Os(e) {
  return e === null || typeof e != "object" ? null : (e = sv && e[sv] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Xe = Object.assign, ip;
function ta(e) {
  if (ip === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    ip = t && t[1] || "";
  }
  return `
` + ip + e;
}
var sp = !1;
function ap(e, t) {
  if (!e || sp) return "";
  sp = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t) if (t = function() {
      throw Error();
    }, Object.defineProperty(t.prototype, "props", { set: function() {
      throw Error();
    } }), typeof Reflect == "object" && Reflect.construct) {
      try {
        Reflect.construct(t, []);
      } catch (u) {
        var r = u;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (u) {
        r = u;
      }
      e.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (var o = u.stack.split(`
`), i = r.stack.split(`
`), s = o.length - 1, a = i.length - 1; 1 <= s && 0 <= a && o[s] !== i[a]; ) a--;
      for (; 1 <= s && 0 <= a; s--, a--) if (o[s] !== i[a]) {
        if (s !== 1 || a !== 1)
          do
            if (s--, a--, 0 > a || o[s] !== i[a]) {
              var l = `
` + o[s].replace(" at new ", " at ");
              return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l;
            }
          while (1 <= s && 0 <= a);
        break;
      }
    }
  } finally {
    sp = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? ta(e) : "";
}
function dM(e) {
  switch (e.tag) {
    case 5:
      return ta(e.type);
    case 16:
      return ta("Lazy");
    case 13:
      return ta("Suspense");
    case 19:
      return ta("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = ap(e.type, !1), e;
    case 11:
      return e = ap(e.type.render, !1), e;
    case 1:
      return e = ap(e.type, !0), e;
    default:
      return "";
  }
}
function fh(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case bi:
      return "Fragment";
    case wi:
      return "Portal";
    case uh:
      return "Profiler";
    case Xg:
      return "StrictMode";
    case ch:
      return "Suspense";
    case dh:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Sw:
      return (e.displayName || "Context") + ".Consumer";
    case bw:
      return (e._context.displayName || "Context") + ".Provider";
    case qg:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Qg:
      return t = e.displayName || null, t !== null ? t : fh(e.type) || "Memo";
    case Gr:
      t = e._payload, e = e._init;
      try {
        return fh(e(t));
      } catch {
      }
  }
  return null;
}
function fM(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return fh(t);
    case 8:
      return t === Xg ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function lo(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Iw(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function pM(e) {
  var t = Iw(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var o = n.get, i = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return o.call(this);
    }, set: function(s) {
      r = "" + s, i.call(this, s);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(s) {
      r = "" + s;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function Xl(e) {
  e._valueTracker || (e._valueTracker = pM(e));
}
function Tw(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Iw(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Qu(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ph(e, t) {
  var n = t.checked;
  return Xe({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function av(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = lo(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Ew(e, t) {
  t = t.checked, t != null && Kg(e, "checked", t, !1);
}
function hh(e, t) {
  Ew(e, t);
  var n = lo(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? gh(e, t.type, n) : t.hasOwnProperty("defaultValue") && gh(e, t.type, lo(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function lv(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function gh(e, t, n) {
  (t !== "number" || Qu(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var na = Array.isArray;
function Oi(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + lo(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function mh(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(G(91));
  return Xe({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function uv(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(G(92));
      if (na(n)) {
        if (1 < n.length) throw Error(G(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: lo(n) };
}
function Pw(e, t) {
  var n = lo(t.value), r = lo(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function cv(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Mw(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function yh(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Mw(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var ql, Aw = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (ql = ql || document.createElement("div"), ql.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ql.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Pa(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var ca = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, hM = ["Webkit", "ms", "Moz", "O"];
Object.keys(ca).forEach(function(e) {
  hM.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), ca[t] = ca[e];
  });
});
function Rw(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || ca.hasOwnProperty(e) && ca[e] ? ("" + t).trim() : t + "px";
}
function _w(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, o = Rw(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
  }
}
var gM = Xe({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function vh(e, t) {
  if (t) {
    if (gM[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(G(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(G(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(G(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(G(62));
  }
}
function xh(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Ch = null;
function Zg(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var wh = null, Li = null, Ni = null;
function dv(e) {
  if (e = dl(e)) {
    if (typeof wh != "function") throw Error(G(280));
    var t = e.stateNode;
    t && (t = id(t), wh(e.stateNode, e.type, t));
  }
}
function $w(e) {
  Li ? Ni ? Ni.push(e) : Ni = [e] : Li = e;
}
function Ow() {
  if (Li) {
    var e = Li, t = Ni;
    if (Ni = Li = null, dv(e), t) for (e = 0; e < t.length; e++) dv(t[e]);
  }
}
function Lw(e, t) {
  return e(t);
}
function Nw() {
}
var lp = !1;
function Dw(e, t, n) {
  if (lp) return e(t, n);
  lp = !0;
  try {
    return Lw(e, t, n);
  } finally {
    lp = !1, (Li !== null || Ni !== null) && (Nw(), Ow());
  }
}
function Ma(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = id(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(G(231, t, typeof n));
  return n;
}
var bh = !1;
if (Ar) try {
  var Ls = {};
  Object.defineProperty(Ls, "passive", { get: function() {
    bh = !0;
  } }), window.addEventListener("test", Ls, Ls), window.removeEventListener("test", Ls, Ls);
} catch {
  bh = !1;
}
function mM(e, t, n, r, o, i, s, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var da = !1, Zu = null, Ju = !1, Sh = null, yM = { onError: function(e) {
  da = !0, Zu = e;
} };
function vM(e, t, n, r, o, i, s, a, l) {
  da = !1, Zu = null, mM.apply(yM, arguments);
}
function xM(e, t, n, r, o, i, s, a, l) {
  if (vM.apply(this, arguments), da) {
    if (da) {
      var u = Zu;
      da = !1, Zu = null;
    } else throw Error(G(198));
    Ju || (Ju = !0, Sh = u);
  }
}
function ri(e) {
  var t = e, n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 4098 && (n = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Fw(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function fv(e) {
  if (ri(e) !== e) throw Error(G(188));
}
function CM(e) {
  var t = e.alternate;
  if (!t) {
    if (t = ri(e), t === null) throw Error(G(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (r = o.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return fv(o), e;
        if (i === r) return fv(o), t;
        i = i.sibling;
      }
      throw Error(G(188));
    }
    if (n.return !== r.return) n = o, r = i;
    else {
      for (var s = !1, a = o.child; a; ) {
        if (a === n) {
          s = !0, n = o, r = i;
          break;
        }
        if (a === r) {
          s = !0, r = o, n = i;
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = i.child; a; ) {
          if (a === n) {
            s = !0, n = i, r = o;
            break;
          }
          if (a === r) {
            s = !0, r = i, n = o;
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(G(189));
      }
    }
    if (n.alternate !== r) throw Error(G(190));
  }
  if (n.tag !== 3) throw Error(G(188));
  return n.stateNode.current === n ? e : t;
}
function zw(e) {
  return e = CM(e), e !== null ? Bw(e) : null;
}
function Bw(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Bw(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var jw = dn.unstable_scheduleCallback, pv = dn.unstable_cancelCallback, wM = dn.unstable_shouldYield, bM = dn.unstable_requestPaint, Je = dn.unstable_now, SM = dn.unstable_getCurrentPriorityLevel, Jg = dn.unstable_ImmediatePriority, Uw = dn.unstable_UserBlockingPriority, ec = dn.unstable_NormalPriority, kM = dn.unstable_LowPriority, Hw = dn.unstable_IdlePriority, td = null, or = null;
function IM(e) {
  if (or && typeof or.onCommitFiberRoot == "function") try {
    or.onCommitFiberRoot(td, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Hn = Math.clz32 ? Math.clz32 : PM, TM = Math.log, EM = Math.LN2;
function PM(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (TM(e) / EM | 0) | 0;
}
var Ql = 64, Zl = 4194304;
function ra(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function tc(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, o = e.suspendedLanes, i = e.pingedLanes, s = n & 268435455;
  if (s !== 0) {
    var a = s & ~o;
    a !== 0 ? r = ra(a) : (i &= s, i !== 0 && (r = ra(i)));
  } else s = n & ~o, s !== 0 ? r = ra(s) : i !== 0 && (r = ra(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Hn(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function MM(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function AM(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var s = 31 - Hn(i), a = 1 << s, l = o[s];
    l === -1 ? (!(a & n) || a & r) && (o[s] = MM(a, t)) : l <= t && (e.expiredLanes |= a), i &= ~a;
  }
}
function kh(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Ww() {
  var e = Ql;
  return Ql <<= 1, !(Ql & 4194240) && (Ql = 64), e;
}
function up(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ul(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Hn(t), e[t] = n;
}
function RM(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Hn(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
  }
}
function em(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Hn(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var $e = 0;
function Gw(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Vw, tm, Yw, Kw, Xw, Ih = !1, Jl = [], Jr = null, eo = null, to = null, Aa = /* @__PURE__ */ new Map(), Ra = /* @__PURE__ */ new Map(), Yr = [], _M = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function hv(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Jr = null;
      break;
    case "dragenter":
    case "dragleave":
      eo = null;
      break;
    case "mouseover":
    case "mouseout":
      to = null;
      break;
    case "pointerover":
    case "pointerout":
      Aa.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ra.delete(t.pointerId);
  }
}
function Ns(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = dl(t), t !== null && tm(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function $M(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return Jr = Ns(Jr, e, t, n, r, o), !0;
    case "dragenter":
      return eo = Ns(eo, e, t, n, r, o), !0;
    case "mouseover":
      return to = Ns(to, e, t, n, r, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return Aa.set(i, Ns(Aa.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, Ra.set(i, Ns(Ra.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function qw(e) {
  var t = Oo(e.target);
  if (t !== null) {
    var n = ri(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Fw(n), t !== null) {
          e.blockedOn = t, Xw(e.priority, function() {
            Yw(n);
          });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function _u(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Th(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Ch = r, n.target.dispatchEvent(r), Ch = null;
    } else return t = dl(n), t !== null && tm(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function gv(e, t, n) {
  _u(e) && n.delete(t);
}
function OM() {
  Ih = !1, Jr !== null && _u(Jr) && (Jr = null), eo !== null && _u(eo) && (eo = null), to !== null && _u(to) && (to = null), Aa.forEach(gv), Ra.forEach(gv);
}
function Ds(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Ih || (Ih = !0, dn.unstable_scheduleCallback(dn.unstable_NormalPriority, OM)));
}
function _a(e) {
  function t(o) {
    return Ds(o, e);
  }
  if (0 < Jl.length) {
    Ds(Jl[0], e);
    for (var n = 1; n < Jl.length; n++) {
      var r = Jl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Jr !== null && Ds(Jr, e), eo !== null && Ds(eo, e), to !== null && Ds(to, e), Aa.forEach(t), Ra.forEach(t), n = 0; n < Yr.length; n++) r = Yr[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Yr.length && (n = Yr[0], n.blockedOn === null); ) qw(n), n.blockedOn === null && Yr.shift();
}
var Di = Br.ReactCurrentBatchConfig, nc = !0;
function LM(e, t, n, r) {
  var o = $e, i = Di.transition;
  Di.transition = null;
  try {
    $e = 1, nm(e, t, n, r);
  } finally {
    $e = o, Di.transition = i;
  }
}
function NM(e, t, n, r) {
  var o = $e, i = Di.transition;
  Di.transition = null;
  try {
    $e = 4, nm(e, t, n, r);
  } finally {
    $e = o, Di.transition = i;
  }
}
function nm(e, t, n, r) {
  if (nc) {
    var o = Th(e, t, n, r);
    if (o === null) xp(e, t, r, rc, n), hv(e, r);
    else if ($M(o, e, t, n, r)) r.stopPropagation();
    else if (hv(e, r), t & 4 && -1 < _M.indexOf(e)) {
      for (; o !== null; ) {
        var i = dl(o);
        if (i !== null && Vw(i), i = Th(e, t, n, r), i === null && xp(e, t, r, rc, n), i === o) break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else xp(e, t, r, null, n);
  }
}
var rc = null;
function Th(e, t, n, r) {
  if (rc = null, e = Zg(r), e = Oo(e), e !== null) if (t = ri(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Fw(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return rc = e, null;
}
function Qw(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (SM()) {
        case Jg:
          return 1;
        case Uw:
          return 4;
        case ec:
        case kM:
          return 16;
        case Hw:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Xr = null, rm = null, $u = null;
function Zw() {
  if ($u) return $u;
  var e, t = rm, n = t.length, r, o = "value" in Xr ? Xr.value : Xr.textContent, i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++) ;
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++) ;
  return $u = o.slice(e, 1 < r ? 1 - r : void 0);
}
function Ou(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function eu() {
  return !0;
}
function mv() {
  return !1;
}
function hn(e) {
  function t(n, r, o, i, s) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = s, this.currentTarget = null;
    for (var a in e) e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(i) : i[a]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? eu : mv, this.isPropagationStopped = mv, this;
  }
  return Xe(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = eu);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = eu);
  }, persist: function() {
  }, isPersistent: eu }), t;
}
var xs = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, om = hn(xs), cl = Xe({}, xs, { view: 0, detail: 0 }), DM = hn(cl), cp, dp, Fs, nd = Xe({}, cl, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: im, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Fs && (Fs && e.type === "mousemove" ? (cp = e.screenX - Fs.screenX, dp = e.screenY - Fs.screenY) : dp = cp = 0, Fs = e), cp);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : dp;
} }), yv = hn(nd), FM = Xe({}, nd, { dataTransfer: 0 }), zM = hn(FM), BM = Xe({}, cl, { relatedTarget: 0 }), fp = hn(BM), jM = Xe({}, xs, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), UM = hn(jM), HM = Xe({}, xs, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), WM = hn(HM), GM = Xe({}, xs, { data: 0 }), vv = hn(GM), VM = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, YM = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, KM = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function XM(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = KM[e]) ? !!t[e] : !1;
}
function im() {
  return XM;
}
var qM = Xe({}, cl, { key: function(e) {
  if (e.key) {
    var t = VM[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Ou(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? YM[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: im, charCode: function(e) {
  return e.type === "keypress" ? Ou(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Ou(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), QM = hn(qM), ZM = Xe({}, nd, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), xv = hn(ZM), JM = Xe({}, cl, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: im }), eA = hn(JM), tA = Xe({}, xs, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), nA = hn(tA), rA = Xe({}, nd, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), oA = hn(rA), iA = [9, 13, 27, 32], sm = Ar && "CompositionEvent" in window, fa = null;
Ar && "documentMode" in document && (fa = document.documentMode);
var sA = Ar && "TextEvent" in window && !fa, Jw = Ar && (!sm || fa && 8 < fa && 11 >= fa), Cv = " ", wv = !1;
function eb(e, t) {
  switch (e) {
    case "keyup":
      return iA.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function tb(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Si = !1;
function aA(e, t) {
  switch (e) {
    case "compositionend":
      return tb(t);
    case "keypress":
      return t.which !== 32 ? null : (wv = !0, Cv);
    case "textInput":
      return e = t.data, e === Cv && wv ? null : e;
    default:
      return null;
  }
}
function lA(e, t) {
  if (Si) return e === "compositionend" || !sm && eb(e, t) ? (e = Zw(), $u = rm = Xr = null, Si = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Jw && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var uA = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function bv(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!uA[e.type] : t === "textarea";
}
function nb(e, t, n, r) {
  $w(r), t = oc(t, "onChange"), 0 < t.length && (n = new om("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var pa = null, $a = null;
function cA(e) {
  pb(e, 0);
}
function rd(e) {
  var t = Ti(e);
  if (Tw(t)) return e;
}
function dA(e, t) {
  if (e === "change") return t;
}
var rb = !1;
if (Ar) {
  var pp;
  if (Ar) {
    var hp = "oninput" in document;
    if (!hp) {
      var Sv = document.createElement("div");
      Sv.setAttribute("oninput", "return;"), hp = typeof Sv.oninput == "function";
    }
    pp = hp;
  } else pp = !1;
  rb = pp && (!document.documentMode || 9 < document.documentMode);
}
function kv() {
  pa && (pa.detachEvent("onpropertychange", ob), $a = pa = null);
}
function ob(e) {
  if (e.propertyName === "value" && rd($a)) {
    var t = [];
    nb(t, $a, e, Zg(e)), Dw(cA, t);
  }
}
function fA(e, t, n) {
  e === "focusin" ? (kv(), pa = t, $a = n, pa.attachEvent("onpropertychange", ob)) : e === "focusout" && kv();
}
function pA(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return rd($a);
}
function hA(e, t) {
  if (e === "click") return rd(t);
}
function gA(e, t) {
  if (e === "input" || e === "change") return rd(t);
}
function mA(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Gn = typeof Object.is == "function" ? Object.is : mA;
function Oa(e, t) {
  if (Gn(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!lh.call(t, o) || !Gn(e[o], t[o])) return !1;
  }
  return !0;
}
function Iv(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Tv(e, t) {
  var n = Iv(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length, e <= t && r >= t) return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Iv(n);
  }
}
function ib(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? ib(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function sb() {
  for (var e = window, t = Qu(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Qu(e.document);
  }
  return t;
}
function am(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function yA(e) {
  var t = sb(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && ib(n.ownerDocument.documentElement, n)) {
    if (r !== null && am(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, i = Math.min(r.start, o);
        r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = Tv(n, i);
        var s = Tv(
          n,
          r
        );
        o && s && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var vA = Ar && "documentMode" in document && 11 >= document.documentMode, ki = null, Eh = null, ha = null, Ph = !1;
function Ev(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ph || ki == null || ki !== Qu(r) || (r = ki, "selectionStart" in r && am(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), ha && Oa(ha, r) || (ha = r, r = oc(Eh, "onSelect"), 0 < r.length && (t = new om("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = ki)));
}
function tu(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Ii = { animationend: tu("Animation", "AnimationEnd"), animationiteration: tu("Animation", "AnimationIteration"), animationstart: tu("Animation", "AnimationStart"), transitionend: tu("Transition", "TransitionEnd") }, gp = {}, ab = {};
Ar && (ab = document.createElement("div").style, "AnimationEvent" in window || (delete Ii.animationend.animation, delete Ii.animationiteration.animation, delete Ii.animationstart.animation), "TransitionEvent" in window || delete Ii.transitionend.transition);
function od(e) {
  if (gp[e]) return gp[e];
  if (!Ii[e]) return e;
  var t = Ii[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in ab) return gp[e] = t[n];
  return e;
}
var lb = od("animationend"), ub = od("animationiteration"), cb = od("animationstart"), db = od("transitionend"), fb = /* @__PURE__ */ new Map(), Pv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ho(e, t) {
  fb.set(e, t), ni(t, [e]);
}
for (var mp = 0; mp < Pv.length; mp++) {
  var yp = Pv[mp], xA = yp.toLowerCase(), CA = yp[0].toUpperCase() + yp.slice(1);
  ho(xA, "on" + CA);
}
ho(lb, "onAnimationEnd");
ho(ub, "onAnimationIteration");
ho(cb, "onAnimationStart");
ho("dblclick", "onDoubleClick");
ho("focusin", "onFocus");
ho("focusout", "onBlur");
ho(db, "onTransitionEnd");
Gi("onMouseEnter", ["mouseout", "mouseover"]);
Gi("onMouseLeave", ["mouseout", "mouseover"]);
Gi("onPointerEnter", ["pointerout", "pointerover"]);
Gi("onPointerLeave", ["pointerout", "pointerover"]);
ni("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
ni("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
ni("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
ni("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
ni("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
ni("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var oa = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), wA = new Set("cancel close invalid load scroll toggle".split(" ").concat(oa));
function Mv(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, xM(r, t, void 0, e), e.currentTarget = null;
}
function pb(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var s = r.length - 1; 0 <= s; s--) {
        var a = r[s], l = a.instance, u = a.currentTarget;
        if (a = a.listener, l !== i && o.isPropagationStopped()) break e;
        Mv(o, a, u), i = l;
      }
      else for (s = 0; s < r.length; s++) {
        if (a = r[s], l = a.instance, u = a.currentTarget, a = a.listener, l !== i && o.isPropagationStopped()) break e;
        Mv(o, a, u), i = l;
      }
    }
  }
  if (Ju) throw e = Sh, Ju = !1, Sh = null, e;
}
function De(e, t) {
  var n = t[$h];
  n === void 0 && (n = t[$h] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (hb(t, e, 2, !1), n.add(r));
}
function vp(e, t, n) {
  var r = 0;
  t && (r |= 4), hb(n, e, r, t);
}
var nu = "_reactListening" + Math.random().toString(36).slice(2);
function La(e) {
  if (!e[nu]) {
    e[nu] = !0, ww.forEach(function(n) {
      n !== "selectionchange" && (wA.has(n) || vp(n, !1, e), vp(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[nu] || (t[nu] = !0, vp("selectionchange", !1, t));
  }
}
function hb(e, t, n, r) {
  switch (Qw(t)) {
    case 1:
      var o = LM;
      break;
    case 4:
      o = NM;
      break;
    default:
      o = nm;
  }
  n = o.bind(null, t, n, e), o = void 0, !bh || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function xp(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var s = r.tag;
    if (s === 3 || s === 4) {
      var a = r.stateNode.containerInfo;
      if (a === o || a.nodeType === 8 && a.parentNode === o) break;
      if (s === 4) for (s = r.return; s !== null; ) {
        var l = s.tag;
        if ((l === 3 || l === 4) && (l = s.stateNode.containerInfo, l === o || l.nodeType === 8 && l.parentNode === o)) return;
        s = s.return;
      }
      for (; a !== null; ) {
        if (s = Oo(a), s === null) return;
        if (l = s.tag, l === 5 || l === 6) {
          r = i = s;
          continue e;
        }
        a = a.parentNode;
      }
    }
    r = r.return;
  }
  Dw(function() {
    var u = i, c = Zg(n), d = [];
    e: {
      var p = fb.get(e);
      if (p !== void 0) {
        var f = om, h = e;
        switch (e) {
          case "keypress":
            if (Ou(n) === 0) break e;
          case "keydown":
          case "keyup":
            f = QM;
            break;
          case "focusin":
            h = "focus", f = fp;
            break;
          case "focusout":
            h = "blur", f = fp;
            break;
          case "beforeblur":
          case "afterblur":
            f = fp;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            f = yv;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            f = zM;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            f = eA;
            break;
          case lb:
          case ub:
          case cb:
            f = UM;
            break;
          case db:
            f = nA;
            break;
          case "scroll":
            f = DM;
            break;
          case "wheel":
            f = oA;
            break;
          case "copy":
          case "cut":
          case "paste":
            f = WM;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            f = xv;
        }
        var g = (t & 4) !== 0, x = !g && e === "scroll", y = g ? p !== null ? p + "Capture" : null : p;
        g = [];
        for (var m = u, v; m !== null; ) {
          v = m;
          var C = v.stateNode;
          if (v.tag === 5 && C !== null && (v = C, y !== null && (C = Ma(m, y), C != null && g.push(Na(m, C, v)))), x) break;
          m = m.return;
        }
        0 < g.length && (p = new f(p, h, null, n, c), d.push({ event: p, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (p = e === "mouseover" || e === "pointerover", f = e === "mouseout" || e === "pointerout", p && n !== Ch && (h = n.relatedTarget || n.fromElement) && (Oo(h) || h[Rr])) break e;
        if ((f || p) && (p = c.window === c ? c : (p = c.ownerDocument) ? p.defaultView || p.parentWindow : window, f ? (h = n.relatedTarget || n.toElement, f = u, h = h ? Oo(h) : null, h !== null && (x = ri(h), h !== x || h.tag !== 5 && h.tag !== 6) && (h = null)) : (f = null, h = u), f !== h)) {
          if (g = yv, C = "onMouseLeave", y = "onMouseEnter", m = "mouse", (e === "pointerout" || e === "pointerover") && (g = xv, C = "onPointerLeave", y = "onPointerEnter", m = "pointer"), x = f == null ? p : Ti(f), v = h == null ? p : Ti(h), p = new g(C, m + "leave", f, n, c), p.target = x, p.relatedTarget = v, C = null, Oo(c) === u && (g = new g(y, m + "enter", h, n, c), g.target = v, g.relatedTarget = x, C = g), x = C, f && h) t: {
            for (g = f, y = h, m = 0, v = g; v; v = di(v)) m++;
            for (v = 0, C = y; C; C = di(C)) v++;
            for (; 0 < m - v; ) g = di(g), m--;
            for (; 0 < v - m; ) y = di(y), v--;
            for (; m--; ) {
              if (g === y || y !== null && g === y.alternate) break t;
              g = di(g), y = di(y);
            }
            g = null;
          }
          else g = null;
          f !== null && Av(d, p, f, g, !1), h !== null && x !== null && Av(d, x, h, g, !0);
        }
      }
      e: {
        if (p = u ? Ti(u) : window, f = p.nodeName && p.nodeName.toLowerCase(), f === "select" || f === "input" && p.type === "file") var S = dA;
        else if (bv(p)) if (rb) S = gA;
        else {
          S = pA;
          var b = fA;
        }
        else (f = p.nodeName) && f.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (S = hA);
        if (S && (S = S(e, u))) {
          nb(d, S, n, c);
          break e;
        }
        b && b(e, p, u), e === "focusout" && (b = p._wrapperState) && b.controlled && p.type === "number" && gh(p, "number", p.value);
      }
      switch (b = u ? Ti(u) : window, e) {
        case "focusin":
          (bv(b) || b.contentEditable === "true") && (ki = b, Eh = u, ha = null);
          break;
        case "focusout":
          ha = Eh = ki = null;
          break;
        case "mousedown":
          Ph = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ph = !1, Ev(d, n, c);
          break;
        case "selectionchange":
          if (vA) break;
        case "keydown":
        case "keyup":
          Ev(d, n, c);
      }
      var I;
      if (sm) e: {
        switch (e) {
          case "compositionstart":
            var T = "onCompositionStart";
            break e;
          case "compositionend":
            T = "onCompositionEnd";
            break e;
          case "compositionupdate":
            T = "onCompositionUpdate";
            break e;
        }
        T = void 0;
      }
      else Si ? eb(e, n) && (T = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T && (Jw && n.locale !== "ko" && (Si || T !== "onCompositionStart" ? T === "onCompositionEnd" && Si && (I = Zw()) : (Xr = c, rm = "value" in Xr ? Xr.value : Xr.textContent, Si = !0)), b = oc(u, T), 0 < b.length && (T = new vv(T, e, null, n, c), d.push({ event: T, listeners: b }), I ? T.data = I : (I = tb(n), I !== null && (T.data = I)))), (I = sA ? aA(e, n) : lA(e, n)) && (u = oc(u, "onBeforeInput"), 0 < u.length && (c = new vv("onBeforeInput", "beforeinput", null, n, c), d.push({ event: c, listeners: u }), c.data = I));
    }
    pb(d, t);
  });
}
function Na(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function oc(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = Ma(e, n), i != null && r.unshift(Na(e, i, o)), i = Ma(e, t), i != null && r.push(Na(e, i, o))), e = e.return;
  }
  return r;
}
function di(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Av(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n, l = a.alternate, u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 && u !== null && (a = u, o ? (l = Ma(n, i), l != null && s.unshift(Na(n, l, a))) : o || (l = Ma(n, i), l != null && s.push(Na(n, l, a)))), n = n.return;
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var bA = /\r\n?/g, SA = /\u0000|\uFFFD/g;
function Rv(e) {
  return (typeof e == "string" ? e : "" + e).replace(bA, `
`).replace(SA, "");
}
function ru(e, t, n) {
  if (t = Rv(t), Rv(e) !== t && n) throw Error(G(425));
}
function ic() {
}
var Mh = null, Ah = null;
function Rh(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var _h = typeof setTimeout == "function" ? setTimeout : void 0, kA = typeof clearTimeout == "function" ? clearTimeout : void 0, _v = typeof Promise == "function" ? Promise : void 0, IA = typeof queueMicrotask == "function" ? queueMicrotask : typeof _v < "u" ? function(e) {
  return _v.resolve(null).then(e).catch(TA);
} : _h;
function TA(e) {
  setTimeout(function() {
    throw e;
  });
}
function Cp(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
      if (r === 0) {
        e.removeChild(o), _a(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  _a(t);
}
function no(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function $v(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Cs = Math.random().toString(36).slice(2), rr = "__reactFiber$" + Cs, Da = "__reactProps$" + Cs, Rr = "__reactContainer$" + Cs, $h = "__reactEvents$" + Cs, EA = "__reactListeners$" + Cs, PA = "__reactHandles$" + Cs;
function Oo(e) {
  var t = e[rr];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Rr] || n[rr]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = $v(e); e !== null; ) {
        if (n = e[rr]) return n;
        e = $v(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function dl(e) {
  return e = e[rr] || e[Rr], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Ti(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(G(33));
}
function id(e) {
  return e[Da] || null;
}
var Oh = [], Ei = -1;
function go(e) {
  return { current: e };
}
function Fe(e) {
  0 > Ei || (e.current = Oh[Ei], Oh[Ei] = null, Ei--);
}
function Ne(e, t) {
  Ei++, Oh[Ei] = e.current, e.current = t;
}
var uo = {}, _t = go(uo), Xt = go(!1), Xo = uo;
function Vi(e, t) {
  var n = e.type.contextTypes;
  if (!n) return uo;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, i;
  for (i in n) o[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function qt(e) {
  return e = e.childContextTypes, e != null;
}
function sc() {
  Fe(Xt), Fe(_t);
}
function Ov(e, t, n) {
  if (_t.current !== uo) throw Error(G(168));
  Ne(_t, t), Ne(Xt, n);
}
function gb(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(G(108, fM(e) || "Unknown", o));
  return Xe({}, n, r);
}
function ac(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || uo, Xo = _t.current, Ne(_t, e), Ne(Xt, Xt.current), !0;
}
function Lv(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(G(169));
  n ? (e = gb(e, t, Xo), r.__reactInternalMemoizedMergedChildContext = e, Fe(Xt), Fe(_t), Ne(_t, e)) : Fe(Xt), Ne(Xt, n);
}
var xr = null, sd = !1, wp = !1;
function mb(e) {
  xr === null ? xr = [e] : xr.push(e);
}
function MA(e) {
  sd = !0, mb(e);
}
function mo() {
  if (!wp && xr !== null) {
    wp = !0;
    var e = 0, t = $e;
    try {
      var n = xr;
      for ($e = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      xr = null, sd = !1;
    } catch (o) {
      throw xr !== null && (xr = xr.slice(e + 1)), jw(Jg, mo), o;
    } finally {
      $e = t, wp = !1;
    }
  }
  return null;
}
var Pi = [], Mi = 0, lc = null, uc = 0, vn = [], xn = 0, qo = null, wr = 1, br = "";
function Ro(e, t) {
  Pi[Mi++] = uc, Pi[Mi++] = lc, lc = e, uc = t;
}
function yb(e, t, n) {
  vn[xn++] = wr, vn[xn++] = br, vn[xn++] = qo, qo = e;
  var r = wr;
  e = br;
  var o = 32 - Hn(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - Hn(t) + o;
  if (30 < i) {
    var s = o - o % 5;
    i = (r & (1 << s) - 1).toString(32), r >>= s, o -= s, wr = 1 << 32 - Hn(t) + o | n << o | r, br = i + e;
  } else wr = 1 << i | n << o | r, br = e;
}
function lm(e) {
  e.return !== null && (Ro(e, 1), yb(e, 1, 0));
}
function um(e) {
  for (; e === lc; ) lc = Pi[--Mi], Pi[Mi] = null, uc = Pi[--Mi], Pi[Mi] = null;
  for (; e === qo; ) qo = vn[--xn], vn[xn] = null, br = vn[--xn], vn[xn] = null, wr = vn[--xn], vn[xn] = null;
}
var un = null, ln = null, We = !1, jn = null;
function vb(e, t) {
  var n = bn(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Nv(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, un = e, ln = no(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, un = e, ln = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = qo !== null ? { id: wr, overflow: br } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = bn(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, un = e, ln = null, !0) : !1;
    default:
      return !1;
  }
}
function Lh(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Nh(e) {
  if (We) {
    var t = ln;
    if (t) {
      var n = t;
      if (!Nv(e, t)) {
        if (Lh(e)) throw Error(G(418));
        t = no(n.nextSibling);
        var r = un;
        t && Nv(e, t) ? vb(r, n) : (e.flags = e.flags & -4097 | 2, We = !1, un = e);
      }
    } else {
      if (Lh(e)) throw Error(G(418));
      e.flags = e.flags & -4097 | 2, We = !1, un = e;
    }
  }
}
function Dv(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  un = e;
}
function ou(e) {
  if (e !== un) return !1;
  if (!We) return Dv(e), We = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Rh(e.type, e.memoizedProps)), t && (t = ln)) {
    if (Lh(e)) throw xb(), Error(G(418));
    for (; t; ) vb(e, t), t = no(t.nextSibling);
  }
  if (Dv(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(G(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ln = no(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      ln = null;
    }
  } else ln = un ? no(e.stateNode.nextSibling) : null;
  return !0;
}
function xb() {
  for (var e = ln; e; ) e = no(e.nextSibling);
}
function Yi() {
  ln = un = null, We = !1;
}
function cm(e) {
  jn === null ? jn = [e] : jn.push(e);
}
var AA = Br.ReactCurrentBatchConfig;
function zs(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(G(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(G(147, e));
      var o = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(s) {
        var a = o.refs;
        s === null ? delete a[i] : a[i] = s;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string") throw Error(G(284));
    if (!n._owner) throw Error(G(290, e));
  }
  return e;
}
function iu(e, t) {
  throw e = Object.prototype.toString.call(t), Error(G(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Fv(e) {
  var t = e._init;
  return t(e._payload);
}
function Cb(e) {
  function t(y, m) {
    if (e) {
      var v = y.deletions;
      v === null ? (y.deletions = [m], y.flags |= 16) : v.push(m);
    }
  }
  function n(y, m) {
    if (!e) return null;
    for (; m !== null; ) t(y, m), m = m.sibling;
    return null;
  }
  function r(y, m) {
    for (y = /* @__PURE__ */ new Map(); m !== null; ) m.key !== null ? y.set(m.key, m) : y.set(m.index, m), m = m.sibling;
    return y;
  }
  function o(y, m) {
    return y = so(y, m), y.index = 0, y.sibling = null, y;
  }
  function i(y, m, v) {
    return y.index = v, e ? (v = y.alternate, v !== null ? (v = v.index, v < m ? (y.flags |= 2, m) : v) : (y.flags |= 2, m)) : (y.flags |= 1048576, m);
  }
  function s(y) {
    return e && y.alternate === null && (y.flags |= 2), y;
  }
  function a(y, m, v, C) {
    return m === null || m.tag !== 6 ? (m = Pp(v, y.mode, C), m.return = y, m) : (m = o(m, v), m.return = y, m);
  }
  function l(y, m, v, C) {
    var S = v.type;
    return S === bi ? c(y, m, v.props.children, C, v.key) : m !== null && (m.elementType === S || typeof S == "object" && S !== null && S.$$typeof === Gr && Fv(S) === m.type) ? (C = o(m, v.props), C.ref = zs(y, m, v), C.return = y, C) : (C = ju(v.type, v.key, v.props, null, y.mode, C), C.ref = zs(y, m, v), C.return = y, C);
  }
  function u(y, m, v, C) {
    return m === null || m.tag !== 4 || m.stateNode.containerInfo !== v.containerInfo || m.stateNode.implementation !== v.implementation ? (m = Mp(v, y.mode, C), m.return = y, m) : (m = o(m, v.children || []), m.return = y, m);
  }
  function c(y, m, v, C, S) {
    return m === null || m.tag !== 7 ? (m = Ho(v, y.mode, C, S), m.return = y, m) : (m = o(m, v), m.return = y, m);
  }
  function d(y, m, v) {
    if (typeof m == "string" && m !== "" || typeof m == "number") return m = Pp("" + m, y.mode, v), m.return = y, m;
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Kl:
          return v = ju(m.type, m.key, m.props, null, y.mode, v), v.ref = zs(y, null, m), v.return = y, v;
        case wi:
          return m = Mp(m, y.mode, v), m.return = y, m;
        case Gr:
          var C = m._init;
          return d(y, C(m._payload), v);
      }
      if (na(m) || Os(m)) return m = Ho(m, y.mode, v, null), m.return = y, m;
      iu(y, m);
    }
    return null;
  }
  function p(y, m, v, C) {
    var S = m !== null ? m.key : null;
    if (typeof v == "string" && v !== "" || typeof v == "number") return S !== null ? null : a(y, m, "" + v, C);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Kl:
          return v.key === S ? l(y, m, v, C) : null;
        case wi:
          return v.key === S ? u(y, m, v, C) : null;
        case Gr:
          return S = v._init, p(
            y,
            m,
            S(v._payload),
            C
          );
      }
      if (na(v) || Os(v)) return S !== null ? null : c(y, m, v, C, null);
      iu(y, v);
    }
    return null;
  }
  function f(y, m, v, C, S) {
    if (typeof C == "string" && C !== "" || typeof C == "number") return y = y.get(v) || null, a(m, y, "" + C, S);
    if (typeof C == "object" && C !== null) {
      switch (C.$$typeof) {
        case Kl:
          return y = y.get(C.key === null ? v : C.key) || null, l(m, y, C, S);
        case wi:
          return y = y.get(C.key === null ? v : C.key) || null, u(m, y, C, S);
        case Gr:
          var b = C._init;
          return f(y, m, v, b(C._payload), S);
      }
      if (na(C) || Os(C)) return y = y.get(v) || null, c(m, y, C, S, null);
      iu(m, C);
    }
    return null;
  }
  function h(y, m, v, C) {
    for (var S = null, b = null, I = m, T = m = 0, L = null; I !== null && T < v.length; T++) {
      I.index > T ? (L = I, I = null) : L = I.sibling;
      var O = p(y, I, v[T], C);
      if (O === null) {
        I === null && (I = L);
        break;
      }
      e && I && O.alternate === null && t(y, I), m = i(O, m, T), b === null ? S = O : b.sibling = O, b = O, I = L;
    }
    if (T === v.length) return n(y, I), We && Ro(y, T), S;
    if (I === null) {
      for (; T < v.length; T++) I = d(y, v[T], C), I !== null && (m = i(I, m, T), b === null ? S = I : b.sibling = I, b = I);
      return We && Ro(y, T), S;
    }
    for (I = r(y, I); T < v.length; T++) L = f(I, y, T, v[T], C), L !== null && (e && L.alternate !== null && I.delete(L.key === null ? T : L.key), m = i(L, m, T), b === null ? S = L : b.sibling = L, b = L);
    return e && I.forEach(function(_) {
      return t(y, _);
    }), We && Ro(y, T), S;
  }
  function g(y, m, v, C) {
    var S = Os(v);
    if (typeof S != "function") throw Error(G(150));
    if (v = S.call(v), v == null) throw Error(G(151));
    for (var b = S = null, I = m, T = m = 0, L = null, O = v.next(); I !== null && !O.done; T++, O = v.next()) {
      I.index > T ? (L = I, I = null) : L = I.sibling;
      var _ = p(y, I, O.value, C);
      if (_ === null) {
        I === null && (I = L);
        break;
      }
      e && I && _.alternate === null && t(y, I), m = i(_, m, T), b === null ? S = _ : b.sibling = _, b = _, I = L;
    }
    if (O.done) return n(
      y,
      I
    ), We && Ro(y, T), S;
    if (I === null) {
      for (; !O.done; T++, O = v.next()) O = d(y, O.value, C), O !== null && (m = i(O, m, T), b === null ? S = O : b.sibling = O, b = O);
      return We && Ro(y, T), S;
    }
    for (I = r(y, I); !O.done; T++, O = v.next()) O = f(I, y, T, O.value, C), O !== null && (e && O.alternate !== null && I.delete(O.key === null ? T : O.key), m = i(O, m, T), b === null ? S = O : b.sibling = O, b = O);
    return e && I.forEach(function(w) {
      return t(y, w);
    }), We && Ro(y, T), S;
  }
  function x(y, m, v, C) {
    if (typeof v == "object" && v !== null && v.type === bi && v.key === null && (v = v.props.children), typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Kl:
          e: {
            for (var S = v.key, b = m; b !== null; ) {
              if (b.key === S) {
                if (S = v.type, S === bi) {
                  if (b.tag === 7) {
                    n(y, b.sibling), m = o(b, v.props.children), m.return = y, y = m;
                    break e;
                  }
                } else if (b.elementType === S || typeof S == "object" && S !== null && S.$$typeof === Gr && Fv(S) === b.type) {
                  n(y, b.sibling), m = o(b, v.props), m.ref = zs(y, b, v), m.return = y, y = m;
                  break e;
                }
                n(y, b);
                break;
              } else t(y, b);
              b = b.sibling;
            }
            v.type === bi ? (m = Ho(v.props.children, y.mode, C, v.key), m.return = y, y = m) : (C = ju(v.type, v.key, v.props, null, y.mode, C), C.ref = zs(y, m, v), C.return = y, y = C);
          }
          return s(y);
        case wi:
          e: {
            for (b = v.key; m !== null; ) {
              if (m.key === b) if (m.tag === 4 && m.stateNode.containerInfo === v.containerInfo && m.stateNode.implementation === v.implementation) {
                n(y, m.sibling), m = o(m, v.children || []), m.return = y, y = m;
                break e;
              } else {
                n(y, m);
                break;
              }
              else t(y, m);
              m = m.sibling;
            }
            m = Mp(v, y.mode, C), m.return = y, y = m;
          }
          return s(y);
        case Gr:
          return b = v._init, x(y, m, b(v._payload), C);
      }
      if (na(v)) return h(y, m, v, C);
      if (Os(v)) return g(y, m, v, C);
      iu(y, v);
    }
    return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v, m !== null && m.tag === 6 ? (n(y, m.sibling), m = o(m, v), m.return = y, y = m) : (n(y, m), m = Pp(v, y.mode, C), m.return = y, y = m), s(y)) : n(y, m);
  }
  return x;
}
var Ki = Cb(!0), wb = Cb(!1), cc = go(null), dc = null, Ai = null, dm = null;
function fm() {
  dm = Ai = dc = null;
}
function pm(e) {
  var t = cc.current;
  Fe(cc), e._currentValue = t;
}
function Dh(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Fi(e, t) {
  dc = e, dm = Ai = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Yt = !0), e.firstContext = null);
}
function En(e) {
  var t = e._currentValue;
  if (dm !== e) if (e = { context: e, memoizedValue: t, next: null }, Ai === null) {
    if (dc === null) throw Error(G(308));
    Ai = e, dc.dependencies = { lanes: 0, firstContext: e };
  } else Ai = Ai.next = e;
  return t;
}
var Lo = null;
function hm(e) {
  Lo === null ? Lo = [e] : Lo.push(e);
}
function bb(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, hm(t)) : (n.next = o.next, o.next = n), t.interleaved = n, _r(e, r);
}
function _r(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Vr = !1;
function gm(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Sb(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Pr(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function ro(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, Ie & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, _r(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, hm(r)) : (t.next = o.next, o.next = t), r.interleaved = t, _r(e, n);
}
function Lu(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, em(e, n);
  }
}
function zv(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var o = null, i = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var s = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        i === null ? o = i = s : i = i.next = s, n = n.next;
      } while (n !== null);
      i === null ? o = i = t : i = i.next = t;
    } else o = i = t;
    n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: i, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function fc(e, t, n, r) {
  var o = e.updateQueue;
  Vr = !1;
  var i = o.firstBaseUpdate, s = o.lastBaseUpdate, a = o.shared.pending;
  if (a !== null) {
    o.shared.pending = null;
    var l = a, u = l.next;
    l.next = null, s === null ? i = u : s.next = u, s = l;
    var c = e.alternate;
    c !== null && (c = c.updateQueue, a = c.lastBaseUpdate, a !== s && (a === null ? c.firstBaseUpdate = u : a.next = u, c.lastBaseUpdate = l));
  }
  if (i !== null) {
    var d = o.baseState;
    s = 0, c = u = l = null, a = i;
    do {
      var p = a.lane, f = a.eventTime;
      if ((r & p) === p) {
        c !== null && (c = c.next = {
          eventTime: f,
          lane: 0,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null
        });
        e: {
          var h = e, g = a;
          switch (p = t, f = n, g.tag) {
            case 1:
              if (h = g.payload, typeof h == "function") {
                d = h.call(f, d, p);
                break e;
              }
              d = h;
              break e;
            case 3:
              h.flags = h.flags & -65537 | 128;
            case 0:
              if (h = g.payload, p = typeof h == "function" ? h.call(f, d, p) : h, p == null) break e;
              d = Xe({}, d, p);
              break e;
            case 2:
              Vr = !0;
          }
        }
        a.callback !== null && a.lane !== 0 && (e.flags |= 64, p = o.effects, p === null ? o.effects = [a] : p.push(a));
      } else f = { eventTime: f, lane: p, tag: a.tag, payload: a.payload, callback: a.callback, next: null }, c === null ? (u = c = f, l = d) : c = c.next = f, s |= p;
      if (a = a.next, a === null) {
        if (a = o.shared.pending, a === null) break;
        p = a, a = p.next, p.next = null, o.lastBaseUpdate = p, o.shared.pending = null;
      }
    } while (!0);
    if (c === null && (l = d), o.baseState = l, o.firstBaseUpdate = u, o.lastBaseUpdate = c, t = o.shared.interleaved, t !== null) {
      o = t;
      do
        s |= o.lane, o = o.next;
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    Zo |= s, e.lanes = s, e.memoizedState = d;
  }
}
function Bv(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], o = r.callback;
    if (o !== null) {
      if (r.callback = null, r = n, typeof o != "function") throw Error(G(191, o));
      o.call(r);
    }
  }
}
var fl = {}, ir = go(fl), Fa = go(fl), za = go(fl);
function No(e) {
  if (e === fl) throw Error(G(174));
  return e;
}
function mm(e, t) {
  switch (Ne(za, t), Ne(Fa, e), Ne(ir, fl), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : yh(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = yh(t, e);
  }
  Fe(ir), Ne(ir, t);
}
function Xi() {
  Fe(ir), Fe(Fa), Fe(za);
}
function kb(e) {
  No(za.current);
  var t = No(ir.current), n = yh(t, e.type);
  t !== n && (Ne(Fa, e), Ne(ir, n));
}
function ym(e) {
  Fa.current === e && (Fe(ir), Fe(Fa));
}
var Ye = go(0);
function pc(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var bp = [];
function vm() {
  for (var e = 0; e < bp.length; e++) bp[e]._workInProgressVersionPrimary = null;
  bp.length = 0;
}
var Nu = Br.ReactCurrentDispatcher, Sp = Br.ReactCurrentBatchConfig, Qo = 0, Ke = null, ut = null, pt = null, hc = !1, ga = !1, Ba = 0, RA = 0;
function Pt() {
  throw Error(G(321));
}
function xm(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Gn(e[n], t[n])) return !1;
  return !0;
}
function Cm(e, t, n, r, o, i) {
  if (Qo = i, Ke = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Nu.current = e === null || e.memoizedState === null ? LA : NA, e = n(r, o), ga) {
    i = 0;
    do {
      if (ga = !1, Ba = 0, 25 <= i) throw Error(G(301));
      i += 1, pt = ut = null, t.updateQueue = null, Nu.current = DA, e = n(r, o);
    } while (ga);
  }
  if (Nu.current = gc, t = ut !== null && ut.next !== null, Qo = 0, pt = ut = Ke = null, hc = !1, t) throw Error(G(300));
  return e;
}
function wm() {
  var e = Ba !== 0;
  return Ba = 0, e;
}
function Jn() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return pt === null ? Ke.memoizedState = pt = e : pt = pt.next = e, pt;
}
function Pn() {
  if (ut === null) {
    var e = Ke.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ut.next;
  var t = pt === null ? Ke.memoizedState : pt.next;
  if (t !== null) pt = t, ut = e;
  else {
    if (e === null) throw Error(G(310));
    ut = e, e = { memoizedState: ut.memoizedState, baseState: ut.baseState, baseQueue: ut.baseQueue, queue: ut.queue, next: null }, pt === null ? Ke.memoizedState = pt = e : pt = pt.next = e;
  }
  return pt;
}
function ja(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function kp(e) {
  var t = Pn(), n = t.queue;
  if (n === null) throw Error(G(311));
  n.lastRenderedReducer = e;
  var r = ut, o = r.baseQueue, i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var s = o.next;
      o.next = i.next, i.next = s;
    }
    r.baseQueue = o = i, n.pending = null;
  }
  if (o !== null) {
    i = o.next, r = r.baseState;
    var a = s = null, l = null, u = i;
    do {
      var c = u.lane;
      if ((Qo & c) === c) l !== null && (l = l.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        l === null ? (a = l = d, s = r) : l = l.next = d, Ke.lanes |= c, Zo |= c;
      }
      u = u.next;
    } while (u !== null && u !== i);
    l === null ? s = r : l.next = a, Gn(r, t.memoizedState) || (Yt = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = l, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      i = o.lane, Ke.lanes |= i, Zo |= i, o = o.next;
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ip(e) {
  var t = Pn(), n = t.queue;
  if (n === null) throw Error(G(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = o = o.next;
    do
      i = e(i, s.action), s = s.next;
    while (s !== o);
    Gn(i, t.memoizedState) || (Yt = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function Ib() {
}
function Tb(e, t) {
  var n = Ke, r = Pn(), o = t(), i = !Gn(r.memoizedState, o);
  if (i && (r.memoizedState = o, Yt = !0), r = r.queue, bm(Mb.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || pt !== null && pt.memoizedState.tag & 1) {
    if (n.flags |= 2048, Ua(9, Pb.bind(null, n, r, o, t), void 0, null), ht === null) throw Error(G(349));
    Qo & 30 || Eb(n, t, o);
  }
  return o;
}
function Eb(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Ke.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ke.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Pb(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Ab(t) && Rb(e);
}
function Mb(e, t, n) {
  return n(function() {
    Ab(t) && Rb(e);
  });
}
function Ab(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Gn(e, n);
  } catch {
    return !0;
  }
}
function Rb(e) {
  var t = _r(e, 1);
  t !== null && Wn(t, e, 1, -1);
}
function jv(e) {
  var t = Jn();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ja, lastRenderedState: e }, t.queue = e, e = e.dispatch = OA.bind(null, Ke, e), [t.memoizedState, e];
}
function Ua(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Ke.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ke.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function _b() {
  return Pn().memoizedState;
}
function Du(e, t, n, r) {
  var o = Jn();
  Ke.flags |= e, o.memoizedState = Ua(1 | t, n, void 0, r === void 0 ? null : r);
}
function ad(e, t, n, r) {
  var o = Pn();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (ut !== null) {
    var s = ut.memoizedState;
    if (i = s.destroy, r !== null && xm(r, s.deps)) {
      o.memoizedState = Ua(t, n, i, r);
      return;
    }
  }
  Ke.flags |= e, o.memoizedState = Ua(1 | t, n, i, r);
}
function Uv(e, t) {
  return Du(8390656, 8, e, t);
}
function bm(e, t) {
  return ad(2048, 8, e, t);
}
function $b(e, t) {
  return ad(4, 2, e, t);
}
function Ob(e, t) {
  return ad(4, 4, e, t);
}
function Lb(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Nb(e, t, n) {
  return n = n != null ? n.concat([e]) : null, ad(4, 4, Lb.bind(null, t, e), n);
}
function Sm() {
}
function Db(e, t) {
  var n = Pn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && xm(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Fb(e, t) {
  var n = Pn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && xm(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function zb(e, t, n) {
  return Qo & 21 ? (Gn(n, t) || (n = Ww(), Ke.lanes |= n, Zo |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Yt = !0), e.memoizedState = n);
}
function _A(e, t) {
  var n = $e;
  $e = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Sp.transition;
  Sp.transition = {};
  try {
    e(!1), t();
  } finally {
    $e = n, Sp.transition = r;
  }
}
function Bb() {
  return Pn().memoizedState;
}
function $A(e, t, n) {
  var r = io(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, jb(e)) Ub(t, n);
  else if (n = bb(e, t, n, r), n !== null) {
    var o = jt();
    Wn(n, e, r, o), Hb(n, t, r);
  }
}
function OA(e, t, n) {
  var r = io(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (jb(e)) Ub(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var s = t.lastRenderedState, a = i(s, n);
      if (o.hasEagerState = !0, o.eagerState = a, Gn(a, s)) {
        var l = t.interleaved;
        l === null ? (o.next = o, hm(t)) : (o.next = l.next, l.next = o), t.interleaved = o;
        return;
      }
    } catch {
    } finally {
    }
    n = bb(e, t, o, r), n !== null && (o = jt(), Wn(n, e, r, o), Hb(n, t, r));
  }
}
function jb(e) {
  var t = e.alternate;
  return e === Ke || t !== null && t === Ke;
}
function Ub(e, t) {
  ga = hc = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Hb(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, em(e, n);
  }
}
var gc = { readContext: En, useCallback: Pt, useContext: Pt, useEffect: Pt, useImperativeHandle: Pt, useInsertionEffect: Pt, useLayoutEffect: Pt, useMemo: Pt, useReducer: Pt, useRef: Pt, useState: Pt, useDebugValue: Pt, useDeferredValue: Pt, useTransition: Pt, useMutableSource: Pt, useSyncExternalStore: Pt, useId: Pt, unstable_isNewReconciler: !1 }, LA = { readContext: En, useCallback: function(e, t) {
  return Jn().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: En, useEffect: Uv, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Du(
    4194308,
    4,
    Lb.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Du(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Du(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Jn();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Jn();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = $A.bind(null, Ke, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Jn();
  return e = { current: e }, t.memoizedState = e;
}, useState: jv, useDebugValue: Sm, useDeferredValue: function(e) {
  return Jn().memoizedState = e;
}, useTransition: function() {
  var e = jv(!1), t = e[0];
  return e = _A.bind(null, e[1]), Jn().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = Ke, o = Jn();
  if (We) {
    if (n === void 0) throw Error(G(407));
    n = n();
  } else {
    if (n = t(), ht === null) throw Error(G(349));
    Qo & 30 || Eb(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, Uv(Mb.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, Ua(9, Pb.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = Jn(), t = ht.identifierPrefix;
  if (We) {
    var n = br, r = wr;
    n = (r & ~(1 << 32 - Hn(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Ba++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = RA++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, NA = {
  readContext: En,
  useCallback: Db,
  useContext: En,
  useEffect: bm,
  useImperativeHandle: Nb,
  useInsertionEffect: $b,
  useLayoutEffect: Ob,
  useMemo: Fb,
  useReducer: kp,
  useRef: _b,
  useState: function() {
    return kp(ja);
  },
  useDebugValue: Sm,
  useDeferredValue: function(e) {
    var t = Pn();
    return zb(t, ut.memoizedState, e);
  },
  useTransition: function() {
    var e = kp(ja)[0], t = Pn().memoizedState;
    return [e, t];
  },
  useMutableSource: Ib,
  useSyncExternalStore: Tb,
  useId: Bb,
  unstable_isNewReconciler: !1
}, DA = { readContext: En, useCallback: Db, useContext: En, useEffect: bm, useImperativeHandle: Nb, useInsertionEffect: $b, useLayoutEffect: Ob, useMemo: Fb, useReducer: Ip, useRef: _b, useState: function() {
  return Ip(ja);
}, useDebugValue: Sm, useDeferredValue: function(e) {
  var t = Pn();
  return ut === null ? t.memoizedState = e : zb(t, ut.memoizedState, e);
}, useTransition: function() {
  var e = Ip(ja)[0], t = Pn().memoizedState;
  return [e, t];
}, useMutableSource: Ib, useSyncExternalStore: Tb, useId: Bb, unstable_isNewReconciler: !1 };
function zn(e, t) {
  if (e && e.defaultProps) {
    t = Xe({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Fh(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : Xe({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ld = { isMounted: function(e) {
  return (e = e._reactInternals) ? ri(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = jt(), o = io(e), i = Pr(r, o);
  i.payload = t, n != null && (i.callback = n), t = ro(e, i, o), t !== null && (Wn(t, e, o, r), Lu(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = jt(), o = io(e), i = Pr(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = ro(e, i, o), t !== null && (Wn(t, e, o, r), Lu(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = jt(), r = io(e), o = Pr(n, r);
  o.tag = 2, t != null && (o.callback = t), t = ro(e, o, r), t !== null && (Wn(t, e, r, n), Lu(t, e, r));
} };
function Hv(e, t, n, r, o, i, s) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !Oa(n, r) || !Oa(o, i) : !0;
}
function Wb(e, t, n) {
  var r = !1, o = uo, i = t.contextType;
  return typeof i == "object" && i !== null ? i = En(i) : (o = qt(t) ? Xo : _t.current, r = t.contextTypes, i = (r = r != null) ? Vi(e, o) : uo), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ld, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function Wv(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ld.enqueueReplaceState(t, t.state, null);
}
function zh(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, gm(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = En(i) : (i = qt(t) ? Xo : _t.current, o.context = Vi(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Fh(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && ld.enqueueReplaceState(o, o.state, null), fc(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function qi(e, t) {
  try {
    var n = "", r = t;
    do
      n += dM(r), r = r.return;
    while (r);
    var o = n;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Tp(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Bh(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var FA = typeof WeakMap == "function" ? WeakMap : Map;
function Gb(e, t, n) {
  n = Pr(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    yc || (yc = !0, qh = r), Bh(e, t);
  }, n;
}
function Vb(e, t, n) {
  n = Pr(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      Bh(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    Bh(e, t), typeof r != "function" && (oo === null ? oo = /* @__PURE__ */ new Set([this]) : oo.add(this));
    var s = t.stack;
    this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
  }), n;
}
function Gv(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new FA();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = ZA.bind(null, e, t, n), t.then(e, e));
}
function Vv(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Yv(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Pr(-1, 1), t.tag = 2, ro(n, t, 1))), n.lanes |= 1), e);
}
var zA = Br.ReactCurrentOwner, Yt = !1;
function zt(e, t, n, r) {
  t.child = e === null ? wb(t, null, n, r) : Ki(t, e.child, n, r);
}
function Kv(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return Fi(t, o), r = Cm(e, t, n, r, i, o), n = wm(), e !== null && !Yt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, $r(e, t, o)) : (We && n && lm(t), t.flags |= 1, zt(e, t, r, o), t.child);
}
function Xv(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !Rm(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Yb(e, t, i, r, o)) : (e = ju(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & o)) {
    var s = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Oa, n(s, r) && e.ref === t.ref) return $r(e, t, o);
  }
  return t.flags |= 1, e = so(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Yb(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Oa(i, r) && e.ref === t.ref) if (Yt = !1, t.pendingProps = r = i, (e.lanes & o) !== 0) e.flags & 131072 && (Yt = !0);
    else return t.lanes = e.lanes, $r(e, t, o);
  }
  return jh(e, t, n, r, o);
}
function Kb(e, t, n) {
  var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ne(_i, sn), sn |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Ne(_i, sn), sn |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, Ne(_i, sn), sn |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, Ne(_i, sn), sn |= r;
  return zt(e, t, o, n), t.child;
}
function Xb(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function jh(e, t, n, r, o) {
  var i = qt(n) ? Xo : _t.current;
  return i = Vi(t, i), Fi(t, o), n = Cm(e, t, n, r, i, o), r = wm(), e !== null && !Yt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, $r(e, t, o)) : (We && r && lm(t), t.flags |= 1, zt(e, t, n, o), t.child);
}
function qv(e, t, n, r, o) {
  if (qt(n)) {
    var i = !0;
    ac(t);
  } else i = !1;
  if (Fi(t, o), t.stateNode === null) Fu(e, t), Wb(t, n, r), zh(t, n, r, o), r = !0;
  else if (e === null) {
    var s = t.stateNode, a = t.memoizedProps;
    s.props = a;
    var l = s.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = En(u) : (u = qt(n) ? Xo : _t.current, u = Vi(t, u));
    var c = n.getDerivedStateFromProps, d = typeof c == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    d || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== r || l !== u) && Wv(t, s, r, u), Vr = !1;
    var p = t.memoizedState;
    s.state = p, fc(t, r, s, o), l = t.memoizedState, a !== r || p !== l || Xt.current || Vr ? (typeof c == "function" && (Fh(t, n, c, r), l = t.memoizedState), (a = Vr || Hv(t, n, a, r, p, l, u)) ? (d || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), s.props = r, s.state = l, s.context = u, r = a) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    s = t.stateNode, Sb(e, t), a = t.memoizedProps, u = t.type === t.elementType ? a : zn(t.type, a), s.props = u, d = t.pendingProps, p = s.context, l = n.contextType, typeof l == "object" && l !== null ? l = En(l) : (l = qt(n) ? Xo : _t.current, l = Vi(t, l));
    var f = n.getDerivedStateFromProps;
    (c = typeof f == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== d || p !== l) && Wv(t, s, r, l), Vr = !1, p = t.memoizedState, s.state = p, fc(t, r, s, o);
    var h = t.memoizedState;
    a !== d || p !== h || Xt.current || Vr ? (typeof f == "function" && (Fh(t, n, f, r), h = t.memoizedState), (u = Vr || Hv(t, n, u, r, p, h, l) || !1) ? (c || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, h, l), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, h, l)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = h), s.props = r, s.state = h, s.context = l, r = u) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Uh(e, t, n, r, i, o);
}
function Uh(e, t, n, r, o, i) {
  Xb(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && Lv(t, n, !1), $r(e, t, i);
  r = t.stateNode, zA.current = t;
  var a = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && s ? (t.child = Ki(t, e.child, null, i), t.child = Ki(t, null, a, i)) : zt(e, t, a, i), t.memoizedState = r.state, o && Lv(t, n, !0), t.child;
}
function qb(e) {
  var t = e.stateNode;
  t.pendingContext ? Ov(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ov(e, t.context, !1), mm(e, t.containerInfo);
}
function Qv(e, t, n, r, o) {
  return Yi(), cm(o), t.flags |= 256, zt(e, t, n, r), t.child;
}
var Hh = { dehydrated: null, treeContext: null, retryLane: 0 };
function Wh(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Qb(e, t, n) {
  var r = t.pendingProps, o = Ye.current, i = !1, s = (t.flags & 128) !== 0, a;
  if ((a = s) || (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), a ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), Ne(Ye, o & 1), e === null)
    return Nh(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, s = { mode: "hidden", children: s }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = s) : i = dd(s, r, 0, null), e = Ho(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Wh(n), t.memoizedState = Hh, e) : km(t, s));
  if (o = e.memoizedState, o !== null && (a = o.dehydrated, a !== null)) return BA(e, t, s, r, a, o, n);
  if (i) {
    i = r.fallback, s = t.mode, o = e.child, a = o.sibling;
    var l = { mode: "hidden", children: r.children };
    return !(s & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = so(o, l), r.subtreeFlags = o.subtreeFlags & 14680064), a !== null ? i = so(a, i) : (i = Ho(i, s, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, s = e.child.memoizedState, s = s === null ? Wh(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, i.memoizedState = s, i.childLanes = e.childLanes & ~n, t.memoizedState = Hh, r;
  }
  return i = e.child, e = i.sibling, r = so(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function km(e, t) {
  return t = dd({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function su(e, t, n, r) {
  return r !== null && cm(r), Ki(t, e.child, null, n), e = km(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function BA(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Tp(Error(G(422))), su(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = dd({ mode: "visible", children: r.children }, o, 0, null), i = Ho(i, o, s, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && Ki(t, e.child, null, s), t.child.memoizedState = Wh(s), t.memoizedState = Hh, i);
  if (!(t.mode & 1)) return su(e, t, s, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r) var a = r.dgst;
    return r = a, i = Error(G(419)), r = Tp(i, r, void 0), su(e, t, s, r);
  }
  if (a = (s & e.childLanes) !== 0, Yt || a) {
    if (r = ht, r !== null) {
      switch (s & -s) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      o = o & (r.suspendedLanes | s) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, _r(e, o), Wn(r, e, o, -1));
    }
    return Am(), r = Tp(Error(G(421))), su(e, t, s, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = JA.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, ln = no(o.nextSibling), un = t, We = !0, jn = null, e !== null && (vn[xn++] = wr, vn[xn++] = br, vn[xn++] = qo, wr = e.id, br = e.overflow, qo = t), t = km(t, r.children), t.flags |= 4096, t);
}
function Zv(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Dh(e.return, t, n);
}
function Ep(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function Zb(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (zt(e, t, r.children, n), r = Ye.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Zv(e, n, t);
      else if (e.tag === 19) Zv(e, n, t);
      else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break e;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) break e;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    r &= 1;
  }
  if (Ne(Ye, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (o) {
    case "forwards":
      for (n = t.child, o = null; n !== null; ) e = n.alternate, e !== null && pc(e) === null && (o = n), n = n.sibling;
      n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Ep(t, !1, o, n, i);
      break;
    case "backwards":
      for (n = null, o = t.child, t.child = null; o !== null; ) {
        if (e = o.alternate, e !== null && pc(e) === null) {
          t.child = o;
          break;
        }
        e = o.sibling, o.sibling = n, n = o, o = e;
      }
      Ep(t, !0, n, null, i);
      break;
    case "together":
      Ep(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Fu(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function $r(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Zo |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(G(153));
  if (t.child !== null) {
    for (e = t.child, n = so(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = so(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function jA(e, t, n) {
  switch (t.tag) {
    case 3:
      qb(t), Yi();
      break;
    case 5:
      kb(t);
      break;
    case 1:
      qt(t.type) && ac(t);
      break;
    case 4:
      mm(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      Ne(cc, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (Ne(Ye, Ye.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Qb(e, t, n) : (Ne(Ye, Ye.current & 1), e = $r(e, t, n), e !== null ? e.sibling : null);
      Ne(Ye, Ye.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Zb(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), Ne(Ye, Ye.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Kb(e, t, n);
  }
  return $r(e, t, n);
}
var Jb, Gh, eS, tS;
Jb = function(e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
};
Gh = function() {
};
eS = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, No(ir.current);
    var i = null;
    switch (n) {
      case "input":
        o = ph(e, o), r = ph(e, r), i = [];
        break;
      case "select":
        o = Xe({}, o, { value: void 0 }), r = Xe({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = mh(e, o), r = mh(e, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ic);
    }
    vh(n, r);
    var s;
    n = null;
    for (u in o) if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null) if (u === "style") {
      var a = o[u];
      for (s in a) a.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
    } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Ea.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (a = o != null ? o[u] : void 0, r.hasOwnProperty(u) && l !== a && (l != null || a != null)) if (u === "style") if (a) {
        for (s in a) !a.hasOwnProperty(s) || l && l.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
        for (s in l) l.hasOwnProperty(s) && a[s] !== l[s] && (n || (n = {}), n[s] = l[s]);
      } else n || (i || (i = []), i.push(
        u,
        n
      )), n = l;
      else u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, a = a ? a.__html : void 0, l != null && a !== l && (i = i || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (i = i || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Ea.hasOwnProperty(u) ? (l != null && u === "onScroll" && De("scroll", e), i || a === l || (i = [])) : (i = i || []).push(u, l));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
tS = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Bs(e, t) {
  if (!We) switch (e.tailMode) {
    case "hidden":
      t = e.tail;
      for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
      n === null ? e.tail = null : n.sibling = null;
      break;
    case "collapsed":
      n = e.tail;
      for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
      r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
  }
}
function Mt(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
  else for (o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function UA(e, t, n) {
  var r = t.pendingProps;
  switch (um(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Mt(t), null;
    case 1:
      return qt(t.type) && sc(), Mt(t), null;
    case 3:
      return r = t.stateNode, Xi(), Fe(Xt), Fe(_t), vm(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (ou(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, jn !== null && (Jh(jn), jn = null))), Gh(e, t), Mt(t), null;
    case 5:
      ym(t);
      var o = No(za.current);
      if (n = t.type, e !== null && t.stateNode != null) eS(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(G(166));
          return Mt(t), null;
        }
        if (e = No(ir.current), ou(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[rr] = t, r[Da] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              De("cancel", r), De("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              De("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < oa.length; o++) De(oa[o], r);
              break;
            case "source":
              De("error", r);
              break;
            case "img":
            case "image":
            case "link":
              De(
                "error",
                r
              ), De("load", r);
              break;
            case "details":
              De("toggle", r);
              break;
            case "input":
              av(r, i), De("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, De("invalid", r);
              break;
            case "textarea":
              uv(r, i), De("invalid", r);
          }
          vh(n, i), o = null;
          for (var s in i) if (i.hasOwnProperty(s)) {
            var a = i[s];
            s === "children" ? typeof a == "string" ? r.textContent !== a && (i.suppressHydrationWarning !== !0 && ru(r.textContent, a, e), o = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (i.suppressHydrationWarning !== !0 && ru(
              r.textContent,
              a,
              e
            ), o = ["children", "" + a]) : Ea.hasOwnProperty(s) && a != null && s === "onScroll" && De("scroll", r);
          }
          switch (n) {
            case "input":
              Xl(r), lv(r, i, !0);
              break;
            case "textarea":
              Xl(r), cv(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = ic);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          s = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Mw(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[rr] = t, e[Da] = r, Jb(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (s = xh(n, r), n) {
              case "dialog":
                De("cancel", e), De("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                De("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < oa.length; o++) De(oa[o], e);
                o = r;
                break;
              case "source":
                De("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                De(
                  "error",
                  e
                ), De("load", e), o = r;
                break;
              case "details":
                De("toggle", e), o = r;
                break;
              case "input":
                av(e, r), o = ph(e, r), De("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = Xe({}, r, { value: void 0 }), De("invalid", e);
                break;
              case "textarea":
                uv(e, r), o = mh(e, r), De("invalid", e);
                break;
              default:
                o = r;
            }
            vh(n, o), a = o;
            for (i in a) if (a.hasOwnProperty(i)) {
              var l = a[i];
              i === "style" ? _w(e, l) : i === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && Aw(e, l)) : i === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && Pa(e, l) : typeof l == "number" && Pa(e, "" + l) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Ea.hasOwnProperty(i) ? l != null && i === "onScroll" && De("scroll", e) : l != null && Kg(e, i, l, s));
            }
            switch (n) {
              case "input":
                Xl(e), lv(e, r, !1);
                break;
              case "textarea":
                Xl(e), cv(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + lo(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? Oi(e, !!r.multiple, i, !1) : r.defaultValue != null && Oi(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = ic);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return Mt(t), null;
    case 6:
      if (e && t.stateNode != null) tS(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(G(166));
        if (n = No(za.current), No(ir.current), ou(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[rr] = t, (i = r.nodeValue !== n) && (e = un, e !== null)) switch (e.tag) {
            case 3:
              ru(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && ru(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[rr] = t, t.stateNode = r;
      }
      return Mt(t), null;
    case 13:
      if (Fe(Ye), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (We && ln !== null && t.mode & 1 && !(t.flags & 128)) xb(), Yi(), t.flags |= 98560, i = !1;
        else if (i = ou(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(G(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(G(317));
            i[rr] = t;
          } else Yi(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Mt(t), i = !1;
        } else jn !== null && (Jh(jn), jn = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || Ye.current & 1 ? ct === 0 && (ct = 3) : Am())), t.updateQueue !== null && (t.flags |= 4), Mt(t), null);
    case 4:
      return Xi(), Gh(e, t), e === null && La(t.stateNode.containerInfo), Mt(t), null;
    case 10:
      return pm(t.type._context), Mt(t), null;
    case 17:
      return qt(t.type) && sc(), Mt(t), null;
    case 19:
      if (Fe(Ye), i = t.memoizedState, i === null) return Mt(t), null;
      if (r = (t.flags & 128) !== 0, s = i.rendering, s === null) if (r) Bs(i, !1);
      else {
        if (ct !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (s = pc(e), s !== null) {
            for (t.flags |= 128, Bs(i, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, s = i.alternate, s === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = s.childLanes, i.lanes = s.lanes, i.child = s.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = s.memoizedProps, i.memoizedState = s.memoizedState, i.updateQueue = s.updateQueue, i.type = s.type, e = s.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return Ne(Ye, Ye.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && Je() > Qi && (t.flags |= 128, r = !0, Bs(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = pc(s), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Bs(i, !0), i.tail === null && i.tailMode === "hidden" && !s.alternate && !We) return Mt(t), null;
        } else 2 * Je() - i.renderingStartTime > Qi && n !== 1073741824 && (t.flags |= 128, r = !0, Bs(i, !1), t.lanes = 4194304);
        i.isBackwards ? (s.sibling = t.child, t.child = s) : (n = i.last, n !== null ? n.sibling = s : t.child = s, i.last = s);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Je(), t.sibling = null, n = Ye.current, Ne(Ye, r ? n & 1 | 2 : n & 1), t) : (Mt(t), null);
    case 22:
    case 23:
      return Mm(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? sn & 1073741824 && (Mt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Mt(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(G(156, t.tag));
}
function HA(e, t) {
  switch (um(t), t.tag) {
    case 1:
      return qt(t.type) && sc(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Xi(), Fe(Xt), Fe(_t), vm(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return ym(t), null;
    case 13:
      if (Fe(Ye), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(G(340));
        Yi();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return Fe(Ye), null;
    case 4:
      return Xi(), null;
    case 10:
      return pm(t.type._context), null;
    case 22:
    case 23:
      return Mm(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var au = !1, Rt = !1, WA = typeof WeakSet == "function" ? WeakSet : Set, te = null;
function Ri(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    Qe(e, t, r);
  }
  else n.current = null;
}
function Vh(e, t, n) {
  try {
    n();
  } catch (r) {
    Qe(e, t, r);
  }
}
var Jv = !1;
function GA(e, t) {
  if (Mh = nc, e = sb(), am(e)) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var o = r.anchorOffset, i = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, i.nodeType;
        } catch {
          n = null;
          break e;
        }
        var s = 0, a = -1, l = -1, u = 0, c = 0, d = e, p = null;
        t: for (; ; ) {
          for (var f; d !== n || o !== 0 && d.nodeType !== 3 || (a = s + o), d !== i || r !== 0 && d.nodeType !== 3 || (l = s + r), d.nodeType === 3 && (s += d.nodeValue.length), (f = d.firstChild) !== null; )
            p = d, d = f;
          for (; ; ) {
            if (d === e) break t;
            if (p === n && ++u === o && (a = s), p === i && ++c === r && (l = s), (f = d.nextSibling) !== null) break;
            d = p, p = d.parentNode;
          }
          d = f;
        }
        n = a === -1 || l === -1 ? null : { start: a, end: l };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ah = { focusedElem: e, selectionRange: n }, nc = !1, te = t; te !== null; ) if (t = te, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, te = e;
  else for (; te !== null; ) {
    t = te;
    try {
      var h = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (h !== null) {
            var g = h.memoizedProps, x = h.memoizedState, y = t.stateNode, m = y.getSnapshotBeforeUpdate(t.elementType === t.type ? g : zn(t.type, g), x);
            y.__reactInternalSnapshotBeforeUpdate = m;
          }
          break;
        case 3:
          var v = t.stateNode.containerInfo;
          v.nodeType === 1 ? v.textContent = "" : v.nodeType === 9 && v.documentElement && v.removeChild(v.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(G(163));
      }
    } catch (C) {
      Qe(t, t.return, C);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, te = e;
      break;
    }
    te = t.return;
  }
  return h = Jv, Jv = !1, h;
}
function ma(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && Vh(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function ud(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Yh(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : t.current = e;
  }
}
function nS(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, nS(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[rr], delete t[Da], delete t[$h], delete t[EA], delete t[PA])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function rS(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ex(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || rS(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Kh(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = ic));
  else if (r !== 4 && (e = e.child, e !== null)) for (Kh(e, t, n), e = e.sibling; e !== null; ) Kh(e, t, n), e = e.sibling;
}
function Xh(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Xh(e, t, n), e = e.sibling; e !== null; ) Xh(e, t, n), e = e.sibling;
}
var bt = null, Bn = !1;
function Hr(e, t, n) {
  for (n = n.child; n !== null; ) oS(e, t, n), n = n.sibling;
}
function oS(e, t, n) {
  if (or && typeof or.onCommitFiberUnmount == "function") try {
    or.onCommitFiberUnmount(td, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Rt || Ri(n, t);
    case 6:
      var r = bt, o = Bn;
      bt = null, Hr(e, t, n), bt = r, Bn = o, bt !== null && (Bn ? (e = bt, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : bt.removeChild(n.stateNode));
      break;
    case 18:
      bt !== null && (Bn ? (e = bt, n = n.stateNode, e.nodeType === 8 ? Cp(e.parentNode, n) : e.nodeType === 1 && Cp(e, n), _a(e)) : Cp(bt, n.stateNode));
      break;
    case 4:
      r = bt, o = Bn, bt = n.stateNode.containerInfo, Bn = !0, Hr(e, t, n), bt = r, Bn = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Rt && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var i = o, s = i.destroy;
          i = i.tag, s !== void 0 && (i & 2 || i & 4) && Vh(n, t, s), o = o.next;
        } while (o !== r);
      }
      Hr(e, t, n);
      break;
    case 1:
      if (!Rt && (Ri(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (a) {
        Qe(n, t, a);
      }
      Hr(e, t, n);
      break;
    case 21:
      Hr(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Rt = (r = Rt) || n.memoizedState !== null, Hr(e, t, n), Rt = r) : Hr(e, t, n);
      break;
    default:
      Hr(e, t, n);
  }
}
function tx(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new WA()), t.forEach(function(r) {
      var o = e2.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function Dn(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var o = n[r];
    try {
      var i = e, s = t, a = s;
      e: for (; a !== null; ) {
        switch (a.tag) {
          case 5:
            bt = a.stateNode, Bn = !1;
            break e;
          case 3:
            bt = a.stateNode.containerInfo, Bn = !0;
            break e;
          case 4:
            bt = a.stateNode.containerInfo, Bn = !0;
            break e;
        }
        a = a.return;
      }
      if (bt === null) throw Error(G(160));
      oS(i, s, o), bt = null, Bn = !1;
      var l = o.alternate;
      l !== null && (l.return = null), o.return = null;
    } catch (u) {
      Qe(o, t, u);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) iS(t, e), t = t.sibling;
}
function iS(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Dn(t, e), Xn(e), r & 4) {
        try {
          ma(3, e, e.return), ud(3, e);
        } catch (g) {
          Qe(e, e.return, g);
        }
        try {
          ma(5, e, e.return);
        } catch (g) {
          Qe(e, e.return, g);
        }
      }
      break;
    case 1:
      Dn(t, e), Xn(e), r & 512 && n !== null && Ri(n, n.return);
      break;
    case 5:
      if (Dn(t, e), Xn(e), r & 512 && n !== null && Ri(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          Pa(o, "");
        } catch (g) {
          Qe(e, e.return, g);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, s = n !== null ? n.memoizedProps : i, a = e.type, l = e.updateQueue;
        if (e.updateQueue = null, l !== null) try {
          a === "input" && i.type === "radio" && i.name != null && Ew(o, i), xh(a, s);
          var u = xh(a, i);
          for (s = 0; s < l.length; s += 2) {
            var c = l[s], d = l[s + 1];
            c === "style" ? _w(o, d) : c === "dangerouslySetInnerHTML" ? Aw(o, d) : c === "children" ? Pa(o, d) : Kg(o, c, d, u);
          }
          switch (a) {
            case "input":
              hh(o, i);
              break;
            case "textarea":
              Pw(o, i);
              break;
            case "select":
              var p = o._wrapperState.wasMultiple;
              o._wrapperState.wasMultiple = !!i.multiple;
              var f = i.value;
              f != null ? Oi(o, !!i.multiple, f, !1) : p !== !!i.multiple && (i.defaultValue != null ? Oi(
                o,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : Oi(o, !!i.multiple, i.multiple ? [] : "", !1));
          }
          o[Da] = i;
        } catch (g) {
          Qe(e, e.return, g);
        }
      }
      break;
    case 6:
      if (Dn(t, e), Xn(e), r & 4) {
        if (e.stateNode === null) throw Error(G(162));
        o = e.stateNode, i = e.memoizedProps;
        try {
          o.nodeValue = i;
        } catch (g) {
          Qe(e, e.return, g);
        }
      }
      break;
    case 3:
      if (Dn(t, e), Xn(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        _a(t.containerInfo);
      } catch (g) {
        Qe(e, e.return, g);
      }
      break;
    case 4:
      Dn(t, e), Xn(e);
      break;
    case 13:
      Dn(t, e), Xn(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (Em = Je())), r & 4 && tx(e);
      break;
    case 22:
      if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (Rt = (u = Rt) || c, Dn(t, e), Rt = u) : Dn(t, e), Xn(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1) for (te = e, c = e.child; c !== null; ) {
          for (d = te = c; te !== null; ) {
            switch (p = te, f = p.child, p.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                ma(4, p, p.return);
                break;
              case 1:
                Ri(p, p.return);
                var h = p.stateNode;
                if (typeof h.componentWillUnmount == "function") {
                  r = p, n = p.return;
                  try {
                    t = r, h.props = t.memoizedProps, h.state = t.memoizedState, h.componentWillUnmount();
                  } catch (g) {
                    Qe(r, n, g);
                  }
                }
                break;
              case 5:
                Ri(p, p.return);
                break;
              case 22:
                if (p.memoizedState !== null) {
                  rx(d);
                  continue;
                }
            }
            f !== null ? (f.return = p, te = f) : rx(d);
          }
          c = c.sibling;
        }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                o = d.stateNode, u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (a = d.stateNode, l = d.memoizedProps.style, s = l != null && l.hasOwnProperty("display") ? l.display : null, a.style.display = Rw("display", s));
              } catch (g) {
                Qe(e, e.return, g);
              }
            }
          } else if (d.tag === 6) {
            if (c === null) try {
              d.stateNode.nodeValue = u ? "" : d.memoizedProps;
            } catch (g) {
              Qe(e, e.return, g);
            }
          } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) {
            d.child.return = d, d = d.child;
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), d = d.return;
          }
          c === d && (c = null), d.sibling.return = d.return, d = d.sibling;
        }
      }
      break;
    case 19:
      Dn(t, e), Xn(e), r & 4 && tx(e);
      break;
    case 21:
      break;
    default:
      Dn(
        t,
        e
      ), Xn(e);
  }
}
function Xn(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (rS(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(G(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Pa(o, ""), r.flags &= -33);
          var i = ex(e);
          Xh(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo, a = ex(e);
          Kh(e, a, s);
          break;
        default:
          throw Error(G(161));
      }
    } catch (l) {
      Qe(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function VA(e, t, n) {
  te = e, sS(e);
}
function sS(e, t, n) {
  for (var r = (e.mode & 1) !== 0; te !== null; ) {
    var o = te, i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || au;
      if (!s) {
        var a = o.alternate, l = a !== null && a.memoizedState !== null || Rt;
        a = au;
        var u = Rt;
        if (au = s, (Rt = l) && !u) for (te = o; te !== null; ) s = te, l = s.child, s.tag === 22 && s.memoizedState !== null ? ox(o) : l !== null ? (l.return = s, te = l) : ox(o);
        for (; i !== null; ) te = i, sS(i), i = i.sibling;
        te = o, au = a, Rt = u;
      }
      nx(e);
    } else o.subtreeFlags & 8772 && i !== null ? (i.return = o, te = i) : nx(e);
  }
}
function nx(e) {
  for (; te !== null; ) {
    var t = te;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Rt || ud(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Rt) if (n === null) r.componentDidMount();
            else {
              var o = t.elementType === t.type ? n.memoizedProps : zn(t.type, n.memoizedProps);
              r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && Bv(t, i, r);
            break;
          case 3:
            var s = t.updateQueue;
            if (s !== null) {
              if (n = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  n = t.child.stateNode;
                  break;
                case 1:
                  n = t.child.stateNode;
              }
              Bv(t, s, n);
            }
            break;
          case 5:
            var a = t.stateNode;
            if (n === null && t.flags & 4) {
              n = a;
              var l = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  l.autoFocus && n.focus();
                  break;
                case "img":
                  l.src && (n.src = l.src);
              }
            }
            break;
          case 6:
            break;
          case 4:
            break;
          case 12:
            break;
          case 13:
            if (t.memoizedState === null) {
              var u = t.alternate;
              if (u !== null) {
                var c = u.memoizedState;
                if (c !== null) {
                  var d = c.dehydrated;
                  d !== null && _a(d);
                }
              }
            }
            break;
          case 19:
          case 17:
          case 21:
          case 22:
          case 23:
          case 25:
            break;
          default:
            throw Error(G(163));
        }
        Rt || t.flags & 512 && Yh(t);
      } catch (p) {
        Qe(t, t.return, p);
      }
    }
    if (t === e) {
      te = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, te = n;
      break;
    }
    te = t.return;
  }
}
function rx(e) {
  for (; te !== null; ) {
    var t = te;
    if (t === e) {
      te = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, te = n;
      break;
    }
    te = t.return;
  }
}
function ox(e) {
  for (; te !== null; ) {
    var t = te;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ud(4, t);
          } catch (l) {
            Qe(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              Qe(t, o, l);
            }
          }
          var i = t.return;
          try {
            Yh(t);
          } catch (l) {
            Qe(t, i, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Yh(t);
          } catch (l) {
            Qe(t, s, l);
          }
      }
    } catch (l) {
      Qe(t, t.return, l);
    }
    if (t === e) {
      te = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      a.return = t.return, te = a;
      break;
    }
    te = t.return;
  }
}
var YA = Math.ceil, mc = Br.ReactCurrentDispatcher, Im = Br.ReactCurrentOwner, In = Br.ReactCurrentBatchConfig, Ie = 0, ht = null, lt = null, kt = 0, sn = 0, _i = go(0), ct = 0, Ha = null, Zo = 0, cd = 0, Tm = 0, ya = null, Vt = null, Em = 0, Qi = 1 / 0, vr = null, yc = !1, qh = null, oo = null, lu = !1, qr = null, vc = 0, va = 0, Qh = null, zu = -1, Bu = 0;
function jt() {
  return Ie & 6 ? Je() : zu !== -1 ? zu : zu = Je();
}
function io(e) {
  return e.mode & 1 ? Ie & 2 && kt !== 0 ? kt & -kt : AA.transition !== null ? (Bu === 0 && (Bu = Ww()), Bu) : (e = $e, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Qw(e.type)), e) : 1;
}
function Wn(e, t, n, r) {
  if (50 < va) throw va = 0, Qh = null, Error(G(185));
  ul(e, n, r), (!(Ie & 2) || e !== ht) && (e === ht && (!(Ie & 2) && (cd |= n), ct === 4 && Kr(e, kt)), Qt(e, r), n === 1 && Ie === 0 && !(t.mode & 1) && (Qi = Je() + 500, sd && mo()));
}
function Qt(e, t) {
  var n = e.callbackNode;
  AM(e, t);
  var r = tc(e, e === ht ? kt : 0);
  if (r === 0) n !== null && pv(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && pv(n), t === 1) e.tag === 0 ? MA(ix.bind(null, e)) : mb(ix.bind(null, e)), IA(function() {
      !(Ie & 6) && mo();
    }), n = null;
    else {
      switch (Gw(r)) {
        case 1:
          n = Jg;
          break;
        case 4:
          n = Uw;
          break;
        case 16:
          n = ec;
          break;
        case 536870912:
          n = Hw;
          break;
        default:
          n = ec;
      }
      n = hS(n, aS.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function aS(e, t) {
  if (zu = -1, Bu = 0, Ie & 6) throw Error(G(327));
  var n = e.callbackNode;
  if (zi() && e.callbackNode !== n) return null;
  var r = tc(e, e === ht ? kt : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = xc(e, r);
  else {
    t = r;
    var o = Ie;
    Ie |= 2;
    var i = uS();
    (ht !== e || kt !== t) && (vr = null, Qi = Je() + 500, Uo(e, t));
    do
      try {
        qA();
        break;
      } catch (a) {
        lS(e, a);
      }
    while (!0);
    fm(), mc.current = i, Ie = o, lt !== null ? t = 0 : (ht = null, kt = 0, t = ct);
  }
  if (t !== 0) {
    if (t === 2 && (o = kh(e), o !== 0 && (r = o, t = Zh(e, o))), t === 1) throw n = Ha, Uo(e, 0), Kr(e, r), Qt(e, Je()), n;
    if (t === 6) Kr(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !KA(o) && (t = xc(e, r), t === 2 && (i = kh(e), i !== 0 && (r = i, t = Zh(e, i))), t === 1)) throw n = Ha, Uo(e, 0), Kr(e, r), Qt(e, Je()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(G(345));
        case 2:
          _o(e, Vt, vr);
          break;
        case 3:
          if (Kr(e, r), (r & 130023424) === r && (t = Em + 500 - Je(), 10 < t)) {
            if (tc(e, 0) !== 0) break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              jt(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = _h(_o.bind(null, e, Vt, vr), t);
            break;
          }
          _o(e, Vt, vr);
          break;
        case 4:
          if (Kr(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - Hn(r);
            i = 1 << s, s = t[s], s > o && (o = s), r &= ~i;
          }
          if (r = o, r = Je() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * YA(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = _h(_o.bind(null, e, Vt, vr), r);
            break;
          }
          _o(e, Vt, vr);
          break;
        case 5:
          _o(e, Vt, vr);
          break;
        default:
          throw Error(G(329));
      }
    }
  }
  return Qt(e, Je()), e.callbackNode === n ? aS.bind(null, e) : null;
}
function Zh(e, t) {
  var n = ya;
  return e.current.memoizedState.isDehydrated && (Uo(e, t).flags |= 256), e = xc(e, t), e !== 2 && (t = Vt, Vt = n, t !== null && Jh(t)), e;
}
function Jh(e) {
  Vt === null ? Vt = e : Vt.push.apply(Vt, e);
}
function KA(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var o = n[r], i = o.getSnapshot;
        o = o.value;
        try {
          if (!Gn(i(), o)) return !1;
        } catch {
          return !1;
        }
      }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return !0;
}
function Kr(e, t) {
  for (t &= ~Tm, t &= ~cd, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Hn(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function ix(e) {
  if (Ie & 6) throw Error(G(327));
  zi();
  var t = tc(e, 0);
  if (!(t & 1)) return Qt(e, Je()), null;
  var n = xc(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = kh(e);
    r !== 0 && (t = r, n = Zh(e, r));
  }
  if (n === 1) throw n = Ha, Uo(e, 0), Kr(e, t), Qt(e, Je()), n;
  if (n === 6) throw Error(G(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, _o(e, Vt, vr), Qt(e, Je()), null;
}
function Pm(e, t) {
  var n = Ie;
  Ie |= 1;
  try {
    return e(t);
  } finally {
    Ie = n, Ie === 0 && (Qi = Je() + 500, sd && mo());
  }
}
function Jo(e) {
  qr !== null && qr.tag === 0 && !(Ie & 6) && zi();
  var t = Ie;
  Ie |= 1;
  var n = In.transition, r = $e;
  try {
    if (In.transition = null, $e = 1, e) return e();
  } finally {
    $e = r, In.transition = n, Ie = t, !(Ie & 6) && mo();
  }
}
function Mm() {
  sn = _i.current, Fe(_i);
}
function Uo(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, kA(n)), lt !== null) for (n = lt.return; n !== null; ) {
    var r = n;
    switch (um(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && sc();
        break;
      case 3:
        Xi(), Fe(Xt), Fe(_t), vm();
        break;
      case 5:
        ym(r);
        break;
      case 4:
        Xi();
        break;
      case 13:
        Fe(Ye);
        break;
      case 19:
        Fe(Ye);
        break;
      case 10:
        pm(r.type._context);
        break;
      case 22:
      case 23:
        Mm();
    }
    n = n.return;
  }
  if (ht = e, lt = e = so(e.current, null), kt = sn = t, ct = 0, Ha = null, Tm = cd = Zo = 0, Vt = ya = null, Lo !== null) {
    for (t = 0; t < Lo.length; t++) if (n = Lo[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var o = r.next, i = n.pending;
      if (i !== null) {
        var s = i.next;
        i.next = o, r.next = s;
      }
      n.pending = r;
    }
    Lo = null;
  }
  return e;
}
function lS(e, t) {
  do {
    var n = lt;
    try {
      if (fm(), Nu.current = gc, hc) {
        for (var r = Ke.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        hc = !1;
      }
      if (Qo = 0, pt = ut = Ke = null, ga = !1, Ba = 0, Im.current = null, n === null || n.return === null) {
        ct = 1, Ha = t, lt = null;
        break;
      }
      e: {
        var i = e, s = n.return, a = n, l = t;
        if (t = kt, a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
          var u = l, c = a, d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var p = c.alternate;
            p ? (c.updateQueue = p.updateQueue, c.memoizedState = p.memoizedState, c.lanes = p.lanes) : (c.updateQueue = null, c.memoizedState = null);
          }
          var f = Vv(s);
          if (f !== null) {
            f.flags &= -257, Yv(f, s, a, i, t), f.mode & 1 && Gv(i, u, t), t = f, l = u;
            var h = t.updateQueue;
            if (h === null) {
              var g = /* @__PURE__ */ new Set();
              g.add(l), t.updateQueue = g;
            } else h.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              Gv(i, u, t), Am();
              break e;
            }
            l = Error(G(426));
          }
        } else if (We && a.mode & 1) {
          var x = Vv(s);
          if (x !== null) {
            !(x.flags & 65536) && (x.flags |= 256), Yv(x, s, a, i, t), cm(qi(l, a));
            break e;
          }
        }
        i = l = qi(l, a), ct !== 4 && (ct = 2), ya === null ? ya = [i] : ya.push(i), i = s;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var y = Gb(i, l, t);
              zv(i, y);
              break e;
            case 1:
              a = l;
              var m = i.type, v = i.stateNode;
              if (!(i.flags & 128) && (typeof m.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (oo === null || !oo.has(v)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var C = Vb(i, a, t);
                zv(i, C);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      dS(n);
    } catch (S) {
      t = S, lt === n && n !== null && (lt = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function uS() {
  var e = mc.current;
  return mc.current = gc, e === null ? gc : e;
}
function Am() {
  (ct === 0 || ct === 3 || ct === 2) && (ct = 4), ht === null || !(Zo & 268435455) && !(cd & 268435455) || Kr(ht, kt);
}
function xc(e, t) {
  var n = Ie;
  Ie |= 2;
  var r = uS();
  (ht !== e || kt !== t) && (vr = null, Uo(e, t));
  do
    try {
      XA();
      break;
    } catch (o) {
      lS(e, o);
    }
  while (!0);
  if (fm(), Ie = n, mc.current = r, lt !== null) throw Error(G(261));
  return ht = null, kt = 0, ct;
}
function XA() {
  for (; lt !== null; ) cS(lt);
}
function qA() {
  for (; lt !== null && !wM(); ) cS(lt);
}
function cS(e) {
  var t = pS(e.alternate, e, sn);
  e.memoizedProps = e.pendingProps, t === null ? dS(e) : lt = t, Im.current = null;
}
function dS(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = HA(n, t), n !== null) {
        n.flags &= 32767, lt = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        ct = 6, lt = null;
        return;
      }
    } else if (n = UA(n, t, sn), n !== null) {
      lt = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      lt = t;
      return;
    }
    lt = t = e;
  } while (t !== null);
  ct === 0 && (ct = 5);
}
function _o(e, t, n) {
  var r = $e, o = In.transition;
  try {
    In.transition = null, $e = 1, QA(e, t, n, r);
  } finally {
    In.transition = o, $e = r;
  }
  return null;
}
function QA(e, t, n, r) {
  do
    zi();
  while (qr !== null);
  if (Ie & 6) throw Error(G(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(G(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (RM(e, i), e === ht && (lt = ht = null, kt = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || lu || (lu = !0, hS(ec, function() {
    return zi(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = In.transition, In.transition = null;
    var s = $e;
    $e = 1;
    var a = Ie;
    Ie |= 4, Im.current = null, GA(e, n), iS(n, e), yA(Ah), nc = !!Mh, Ah = Mh = null, e.current = n, VA(n), bM(), Ie = a, $e = s, In.transition = i;
  } else e.current = n;
  if (lu && (lu = !1, qr = e, vc = o), i = e.pendingLanes, i === 0 && (oo = null), IM(n.stateNode), Qt(e, Je()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (yc) throw yc = !1, e = qh, qh = null, e;
  return vc & 1 && e.tag !== 0 && zi(), i = e.pendingLanes, i & 1 ? e === Qh ? va++ : (va = 0, Qh = e) : va = 0, mo(), null;
}
function zi() {
  if (qr !== null) {
    var e = Gw(vc), t = In.transition, n = $e;
    try {
      if (In.transition = null, $e = 16 > e ? 16 : e, qr === null) var r = !1;
      else {
        if (e = qr, qr = null, vc = 0, Ie & 6) throw Error(G(331));
        var o = Ie;
        for (Ie |= 4, te = e.current; te !== null; ) {
          var i = te, s = i.child;
          if (te.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (te = u; te !== null; ) {
                  var c = te;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ma(8, c, i);
                  }
                  var d = c.child;
                  if (d !== null) d.return = c, te = d;
                  else for (; te !== null; ) {
                    c = te;
                    var p = c.sibling, f = c.return;
                    if (nS(c), c === u) {
                      te = null;
                      break;
                    }
                    if (p !== null) {
                      p.return = f, te = p;
                      break;
                    }
                    te = f;
                  }
                }
              }
              var h = i.alternate;
              if (h !== null) {
                var g = h.child;
                if (g !== null) {
                  h.child = null;
                  do {
                    var x = g.sibling;
                    g.sibling = null, g = x;
                  } while (g !== null);
                }
              }
              te = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) s.return = i, te = s;
          else e: for (; te !== null; ) {
            if (i = te, i.flags & 2048) switch (i.tag) {
              case 0:
              case 11:
              case 15:
                ma(9, i, i.return);
            }
            var y = i.sibling;
            if (y !== null) {
              y.return = i.return, te = y;
              break e;
            }
            te = i.return;
          }
        }
        var m = e.current;
        for (te = m; te !== null; ) {
          s = te;
          var v = s.child;
          if (s.subtreeFlags & 2064 && v !== null) v.return = s, te = v;
          else e: for (s = m; te !== null; ) {
            if (a = te, a.flags & 2048) try {
              switch (a.tag) {
                case 0:
                case 11:
                case 15:
                  ud(9, a);
              }
            } catch (S) {
              Qe(a, a.return, S);
            }
            if (a === s) {
              te = null;
              break e;
            }
            var C = a.sibling;
            if (C !== null) {
              C.return = a.return, te = C;
              break e;
            }
            te = a.return;
          }
        }
        if (Ie = o, mo(), or && typeof or.onPostCommitFiberRoot == "function") try {
          or.onPostCommitFiberRoot(td, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      $e = n, In.transition = t;
    }
  }
  return !1;
}
function sx(e, t, n) {
  t = qi(n, t), t = Gb(e, t, 1), e = ro(e, t, 1), t = jt(), e !== null && (ul(e, 1, t), Qt(e, t));
}
function Qe(e, t, n) {
  if (e.tag === 3) sx(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      sx(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (oo === null || !oo.has(r))) {
        e = qi(n, e), e = Vb(t, e, 1), t = ro(t, e, 1), e = jt(), t !== null && (ul(t, 1, e), Qt(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function ZA(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = jt(), e.pingedLanes |= e.suspendedLanes & n, ht === e && (kt & n) === n && (ct === 4 || ct === 3 && (kt & 130023424) === kt && 500 > Je() - Em ? Uo(e, 0) : Tm |= n), Qt(e, t);
}
function fS(e, t) {
  t === 0 && (e.mode & 1 ? (t = Zl, Zl <<= 1, !(Zl & 130023424) && (Zl = 4194304)) : t = 1);
  var n = jt();
  e = _r(e, t), e !== null && (ul(e, t, n), Qt(e, n));
}
function JA(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), fS(e, n);
}
function e2(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(G(314));
  }
  r !== null && r.delete(t), fS(e, n);
}
var pS;
pS = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Xt.current) Yt = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Yt = !1, jA(e, t, n);
    Yt = !!(e.flags & 131072);
  }
  else Yt = !1, We && t.flags & 1048576 && yb(t, uc, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Fu(e, t), e = t.pendingProps;
      var o = Vi(t, _t.current);
      Fi(t, n), o = Cm(null, t, r, e, o, n);
      var i = wm();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, qt(r) ? (i = !0, ac(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, gm(t), o.updater = ld, t.stateNode = o, o._reactInternals = t, zh(t, r, e, n), t = Uh(null, t, r, !0, i, n)) : (t.tag = 0, We && i && lm(t), zt(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Fu(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = n2(r), e = zn(r, e), o) {
          case 0:
            t = jh(null, t, r, e, n);
            break e;
          case 1:
            t = qv(null, t, r, e, n);
            break e;
          case 11:
            t = Kv(null, t, r, e, n);
            break e;
          case 14:
            t = Xv(null, t, r, zn(r.type, e), n);
            break e;
        }
        throw Error(G(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : zn(r, o), jh(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : zn(r, o), qv(e, t, r, o, n);
    case 3:
      e: {
        if (qb(t), e === null) throw Error(G(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, Sb(e, t), fc(t, r, null, n);
        var s = t.memoizedState;
        if (r = s.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          o = qi(Error(G(423)), t), t = Qv(e, t, r, n, o);
          break e;
        } else if (r !== o) {
          o = qi(Error(G(424)), t), t = Qv(e, t, r, n, o);
          break e;
        } else for (ln = no(t.stateNode.containerInfo.firstChild), un = t, We = !0, jn = null, n = wb(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Yi(), r === o) {
            t = $r(e, t, n);
            break e;
          }
          zt(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return kb(t), e === null && Nh(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, s = o.children, Rh(r, o) ? s = null : i !== null && Rh(r, i) && (t.flags |= 32), Xb(e, t), zt(e, t, s, n), t.child;
    case 6:
      return e === null && Nh(t), null;
    case 13:
      return Qb(e, t, n);
    case 4:
      return mm(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Ki(t, null, r, n) : zt(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : zn(r, o), Kv(e, t, r, o, n);
    case 7:
      return zt(e, t, t.pendingProps, n), t.child;
    case 8:
      return zt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return zt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, s = o.value, Ne(cc, r._currentValue), r._currentValue = s, i !== null) if (Gn(i.value, s)) {
          if (i.children === o.children && !Xt.current) {
            t = $r(e, t, n);
            break e;
          }
        } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
          var a = i.dependencies;
          if (a !== null) {
            s = i.child;
            for (var l = a.firstContext; l !== null; ) {
              if (l.context === r) {
                if (i.tag === 1) {
                  l = Pr(-1, n & -n), l.tag = 2;
                  var u = i.updateQueue;
                  if (u !== null) {
                    u = u.shared;
                    var c = u.pending;
                    c === null ? l.next = l : (l.next = c.next, c.next = l), u.pending = l;
                  }
                }
                i.lanes |= n, l = i.alternate, l !== null && (l.lanes |= n), Dh(
                  i.return,
                  n,
                  t
                ), a.lanes |= n;
                break;
              }
              l = l.next;
            }
          } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
          else if (i.tag === 18) {
            if (s = i.return, s === null) throw Error(G(341));
            s.lanes |= n, a = s.alternate, a !== null && (a.lanes |= n), Dh(s, n, t), s = i.sibling;
          } else s = i.child;
          if (s !== null) s.return = i;
          else for (s = i; s !== null; ) {
            if (s === t) {
              s = null;
              break;
            }
            if (i = s.sibling, i !== null) {
              i.return = s.return, s = i;
              break;
            }
            s = s.return;
          }
          i = s;
        }
        zt(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, Fi(t, n), o = En(o), r = r(o), t.flags |= 1, zt(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = zn(r, t.pendingProps), o = zn(r.type, o), Xv(e, t, r, o, n);
    case 15:
      return Yb(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : zn(r, o), Fu(e, t), t.tag = 1, qt(r) ? (e = !0, ac(t)) : e = !1, Fi(t, n), Wb(t, r, o), zh(t, r, o, n), Uh(null, t, r, !0, e, n);
    case 19:
      return Zb(e, t, n);
    case 22:
      return Kb(e, t, n);
  }
  throw Error(G(156, t.tag));
};
function hS(e, t) {
  return jw(e, t);
}
function t2(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function bn(e, t, n, r) {
  return new t2(e, t, n, r);
}
function Rm(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function n2(e) {
  if (typeof e == "function") return Rm(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === qg) return 11;
    if (e === Qg) return 14;
  }
  return 2;
}
function so(e, t) {
  var n = e.alternate;
  return n === null ? (n = bn(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function ju(e, t, n, r, o, i) {
  var s = 2;
  if (r = e, typeof e == "function") Rm(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else e: switch (e) {
    case bi:
      return Ho(n.children, o, i, t);
    case Xg:
      s = 8, o |= 8;
      break;
    case uh:
      return e = bn(12, n, t, o | 2), e.elementType = uh, e.lanes = i, e;
    case ch:
      return e = bn(13, n, t, o), e.elementType = ch, e.lanes = i, e;
    case dh:
      return e = bn(19, n, t, o), e.elementType = dh, e.lanes = i, e;
    case kw:
      return dd(n, o, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case bw:
          s = 10;
          break e;
        case Sw:
          s = 9;
          break e;
        case qg:
          s = 11;
          break e;
        case Qg:
          s = 14;
          break e;
        case Gr:
          s = 16, r = null;
          break e;
      }
      throw Error(G(130, e == null ? e : typeof e, ""));
  }
  return t = bn(s, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t;
}
function Ho(e, t, n, r) {
  return e = bn(7, e, r, t), e.lanes = n, e;
}
function dd(e, t, n, r) {
  return e = bn(22, e, r, t), e.elementType = kw, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Pp(e, t, n) {
  return e = bn(6, e, null, t), e.lanes = n, e;
}
function Mp(e, t, n) {
  return t = bn(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function r2(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = up(0), this.expirationTimes = up(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = up(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function _m(e, t, n, r, o, i, s, a, l) {
  return e = new r2(e, t, n, a, l), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = bn(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, gm(i), e;
}
function o2(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: wi, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function gS(e) {
  if (!e) return uo;
  e = e._reactInternals;
  e: {
    if (ri(e) !== e || e.tag !== 1) throw Error(G(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (qt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(G(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (qt(n)) return gb(e, n, t);
  }
  return t;
}
function mS(e, t, n, r, o, i, s, a, l) {
  return e = _m(n, r, !0, e, o, i, s, a, l), e.context = gS(null), n = e.current, r = jt(), o = io(n), i = Pr(r, o), i.callback = t ?? null, ro(n, i, o), e.current.lanes = o, ul(e, o, r), Qt(e, r), e;
}
function fd(e, t, n, r) {
  var o = t.current, i = jt(), s = io(o);
  return n = gS(n), t.context === null ? t.context = n : t.pendingContext = n, t = Pr(i, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = ro(o, t, s), e !== null && (Wn(e, o, s, i), Lu(e, o, s)), s;
}
function Cc(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ax(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function $m(e, t) {
  ax(e, t), (e = e.alternate) && ax(e, t);
}
function i2() {
  return null;
}
var yS = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Om(e) {
  this._internalRoot = e;
}
pd.prototype.render = Om.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(G(409));
  fd(e, t, null, null);
};
pd.prototype.unmount = Om.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Jo(function() {
      fd(null, e, null, null);
    }), t[Rr] = null;
  }
};
function pd(e) {
  this._internalRoot = e;
}
pd.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Kw();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Yr.length && t !== 0 && t < Yr[n].priority; n++) ;
    Yr.splice(n, 0, e), n === 0 && qw(e);
  }
};
function Lm(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function hd(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function lx() {
}
function s2(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var u = Cc(s);
        i.call(u);
      };
    }
    var s = mS(t, r, e, 0, null, !1, !1, "", lx);
    return e._reactRootContainer = s, e[Rr] = s.current, La(e.nodeType === 8 ? e.parentNode : e), Jo(), s;
  }
  for (; o = e.lastChild; ) e.removeChild(o);
  if (typeof r == "function") {
    var a = r;
    r = function() {
      var u = Cc(l);
      a.call(u);
    };
  }
  var l = _m(e, 0, !1, null, null, !1, !1, "", lx);
  return e._reactRootContainer = l, e[Rr] = l.current, La(e.nodeType === 8 ? e.parentNode : e), Jo(function() {
    fd(t, l, n, r);
  }), l;
}
function gd(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var a = o;
      o = function() {
        var l = Cc(s);
        a.call(l);
      };
    }
    fd(t, s, e, o);
  } else s = s2(n, t, e, o, r);
  return Cc(s);
}
Vw = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = ra(t.pendingLanes);
        n !== 0 && (em(t, n | 1), Qt(t, Je()), !(Ie & 6) && (Qi = Je() + 500, mo()));
      }
      break;
    case 13:
      Jo(function() {
        var r = _r(e, 1);
        if (r !== null) {
          var o = jt();
          Wn(r, e, 1, o);
        }
      }), $m(e, 1);
  }
};
tm = function(e) {
  if (e.tag === 13) {
    var t = _r(e, 134217728);
    if (t !== null) {
      var n = jt();
      Wn(t, e, 134217728, n);
    }
    $m(e, 134217728);
  }
};
Yw = function(e) {
  if (e.tag === 13) {
    var t = io(e), n = _r(e, t);
    if (n !== null) {
      var r = jt();
      Wn(n, e, t, r);
    }
    $m(e, t);
  }
};
Kw = function() {
  return $e;
};
Xw = function(e, t) {
  var n = $e;
  try {
    return $e = e, t();
  } finally {
    $e = n;
  }
};
wh = function(e, t, n) {
  switch (t) {
    case "input":
      if (hh(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = id(r);
            if (!o) throw Error(G(90));
            Tw(r), hh(r, o);
          }
        }
      }
      break;
    case "textarea":
      Pw(e, n);
      break;
    case "select":
      t = n.value, t != null && Oi(e, !!n.multiple, t, !1);
  }
};
Lw = Pm;
Nw = Jo;
var a2 = { usingClientEntryPoint: !1, Events: [dl, Ti, id, $w, Ow, Pm] }, js = { findFiberByHostInstance: Oo, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, l2 = { bundleType: js.bundleType, version: js.version, rendererPackageName: js.rendererPackageName, rendererConfig: js.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Br.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = zw(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: js.findFiberByHostInstance || i2, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var uu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!uu.isDisabled && uu.supportsFiber) try {
    td = uu.inject(l2), or = uu;
  } catch {
  }
}
pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = a2;
pn.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Lm(t)) throw Error(G(200));
  return o2(e, t, null, n);
};
pn.createRoot = function(e, t) {
  if (!Lm(e)) throw Error(G(299));
  var n = !1, r = "", o = yS;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = _m(e, 1, !1, null, null, n, !1, r, o), e[Rr] = t.current, La(e.nodeType === 8 ? e.parentNode : e), new Om(t);
};
pn.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(G(188)) : (e = Object.keys(e).join(","), Error(G(268, e)));
  return e = zw(t), e = e === null ? null : e.stateNode, e;
};
pn.flushSync = function(e) {
  return Jo(e);
};
pn.hydrate = function(e, t, n) {
  if (!hd(t)) throw Error(G(200));
  return gd(null, e, t, !0, n);
};
pn.hydrateRoot = function(e, t, n) {
  if (!Lm(e)) throw Error(G(405));
  var r = n != null && n.hydratedSources || null, o = !1, i = "", s = yS;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = mS(t, null, e, 1, n ?? null, o, !1, i, s), e[Rr] = t.current, La(e), r) for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
    n,
    o
  );
  return new pd(t);
};
pn.render = function(e, t, n) {
  if (!hd(t)) throw Error(G(200));
  return gd(null, e, t, !1, n);
};
pn.unmountComponentAtNode = function(e) {
  if (!hd(e)) throw Error(G(40));
  return e._reactRootContainer ? (Jo(function() {
    gd(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Rr] = null;
    });
  }), !0) : !1;
};
pn.unstable_batchedUpdates = Pm;
pn.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!hd(n)) throw Error(G(200));
  if (e == null || e._reactInternals === void 0) throw Error(G(38));
  return gd(e, t, n, !1, r);
};
pn.version = "18.3.1-next-f1338f8080-20240426";
function vS() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(vS);
    } catch (e) {
      console.error(e);
    }
}
vS(), vw.exports = pn;
var Nm = vw.exports, ux = Nm;
ah.createRoot = ux.createRoot, ah.hydrateRoot = ux.hydrateRoot;
var xS = { exports: {} }, md = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var u2 = k, c2 = Symbol.for("react.element"), d2 = Symbol.for("react.fragment"), f2 = Object.prototype.hasOwnProperty, p2 = u2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, h2 = { key: !0, ref: !0, __self: !0, __source: !0 };
function CS(e, t, n) {
  var r, o = {}, i = null, s = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t) f2.call(t, r) && !h2.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: c2, type: e, key: i, ref: s, props: o, _owner: p2.current };
}
md.Fragment = d2;
md.jsx = CS;
md.jsxs = CS;
xS.exports = md;
var E = xS.exports;
function N() {
  return N = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, N.apply(null, arguments);
}
function Or(e, ...t) {
  const n = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((r) => n.searchParams.append("args[]", r)), `Minified MUI error #${e}; visit ${n} for the full message.`;
}
const ws = "$$material";
function g2(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function m2(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var y2 = /* @__PURE__ */ function() {
  function e(n) {
    var r = this;
    this._insertTag = function(o) {
      var i;
      r.tags.length === 0 ? r.insertionPoint ? i = r.insertionPoint.nextSibling : r.prepend ? i = r.container.firstChild : i = r.before : i = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(o, i), r.tags.push(o);
    }, this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, t.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(m2(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = g2(o);
      try {
        i.insertRule(r, i.cssRules.length);
      } catch {
      }
    } else
      o.appendChild(document.createTextNode(r));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(r) {
      var o;
      return (o = r.parentNode) == null ? void 0 : o.removeChild(r);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), At = "-ms-", wc = "-moz-", Me = "-webkit-", wS = "comm", Dm = "rule", Fm = "decl", v2 = "@import", bS = "@keyframes", x2 = "@layer", C2 = Math.abs, yd = String.fromCharCode, w2 = Object.assign;
function b2(e, t) {
  return St(e, 0) ^ 45 ? (((t << 2 ^ St(e, 0)) << 2 ^ St(e, 1)) << 2 ^ St(e, 2)) << 2 ^ St(e, 3) : 0;
}
function SS(e) {
  return e.trim();
}
function S2(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Ae(e, t, n) {
  return e.replace(t, n);
}
function eg(e, t) {
  return e.indexOf(t);
}
function St(e, t) {
  return e.charCodeAt(t) | 0;
}
function Wa(e, t, n) {
  return e.slice(t, n);
}
function er(e) {
  return e.length;
}
function zm(e) {
  return e.length;
}
function cu(e, t) {
  return t.push(e), e;
}
function k2(e, t) {
  return e.map(t).join("");
}
var vd = 1, Zi = 1, kS = 0, en = 0, at = 0, bs = "";
function xd(e, t, n, r, o, i, s) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: vd, column: Zi, length: s, return: "" };
}
function Us(e, t) {
  return w2(xd("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function I2() {
  return at;
}
function T2() {
  return at = en > 0 ? St(bs, --en) : 0, Zi--, at === 10 && (Zi = 1, vd--), at;
}
function cn() {
  return at = en < kS ? St(bs, en++) : 0, Zi++, at === 10 && (Zi = 1, vd++), at;
}
function sr() {
  return St(bs, en);
}
function Uu() {
  return en;
}
function pl(e, t) {
  return Wa(bs, e, t);
}
function Ga(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function IS(e) {
  return vd = Zi = 1, kS = er(bs = e), en = 0, [];
}
function TS(e) {
  return bs = "", e;
}
function Hu(e) {
  return SS(pl(en - 1, tg(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function E2(e) {
  for (; (at = sr()) && at < 33; )
    cn();
  return Ga(e) > 2 || Ga(at) > 3 ? "" : " ";
}
function P2(e, t) {
  for (; --t && cn() && !(at < 48 || at > 102 || at > 57 && at < 65 || at > 70 && at < 97); )
    ;
  return pl(e, Uu() + (t < 6 && sr() == 32 && cn() == 32));
}
function tg(e) {
  for (; cn(); )
    switch (at) {
      case e:
        return en;
      case 34:
      case 39:
        e !== 34 && e !== 39 && tg(at);
        break;
      case 40:
        e === 41 && tg(e);
        break;
      case 92:
        cn();
        break;
    }
  return en;
}
function M2(e, t) {
  for (; cn() && e + at !== 57; )
    if (e + at === 84 && sr() === 47)
      break;
  return "/*" + pl(t, en - 1) + "*" + yd(e === 47 ? e : cn());
}
function A2(e) {
  for (; !Ga(sr()); )
    cn();
  return pl(e, en);
}
function R2(e) {
  return TS(Wu("", null, null, null, [""], e = IS(e), 0, [0], e));
}
function Wu(e, t, n, r, o, i, s, a, l) {
  for (var u = 0, c = 0, d = s, p = 0, f = 0, h = 0, g = 1, x = 1, y = 1, m = 0, v = "", C = o, S = i, b = r, I = v; x; )
    switch (h = m, m = cn()) {
      case 40:
        if (h != 108 && St(I, d - 1) == 58) {
          eg(I += Ae(Hu(m), "&", "&\f"), "&\f") != -1 && (y = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        I += Hu(m);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        I += E2(h);
        break;
      case 92:
        I += P2(Uu() - 1, 7);
        continue;
      case 47:
        switch (sr()) {
          case 42:
          case 47:
            cu(_2(M2(cn(), Uu()), t, n), l);
            break;
          default:
            I += "/";
        }
        break;
      case 123 * g:
        a[u++] = er(I) * y;
      case 125 * g:
      case 59:
      case 0:
        switch (m) {
          case 0:
          case 125:
            x = 0;
          case 59 + c:
            y == -1 && (I = Ae(I, /\f/g, "")), f > 0 && er(I) - d && cu(f > 32 ? dx(I + ";", r, n, d - 1) : dx(Ae(I, " ", "") + ";", r, n, d - 2), l);
            break;
          case 59:
            I += ";";
          default:
            if (cu(b = cx(I, t, n, u, c, o, a, v, C = [], S = [], d), i), m === 123)
              if (c === 0)
                Wu(I, t, b, b, C, i, d, a, S);
              else
                switch (p === 99 && St(I, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Wu(e, b, b, r && cu(cx(e, b, b, 0, 0, o, a, v, o, C = [], d), S), o, S, d, a, r ? C : S);
                    break;
                  default:
                    Wu(I, b, b, b, [""], S, 0, a, S);
                }
        }
        u = c = f = 0, g = y = 1, v = I = "", d = s;
        break;
      case 58:
        d = 1 + er(I), f = h;
      default:
        if (g < 1) {
          if (m == 123)
            --g;
          else if (m == 125 && g++ == 0 && T2() == 125)
            continue;
        }
        switch (I += yd(m), m * g) {
          case 38:
            y = c > 0 ? 1 : (I += "\f", -1);
            break;
          case 44:
            a[u++] = (er(I) - 1) * y, y = 1;
            break;
          case 64:
            sr() === 45 && (I += Hu(cn())), p = sr(), c = d = er(v = I += A2(Uu())), m++;
            break;
          case 45:
            h === 45 && er(I) == 2 && (g = 0);
        }
    }
  return i;
}
function cx(e, t, n, r, o, i, s, a, l, u, c) {
  for (var d = o - 1, p = o === 0 ? i : [""], f = zm(p), h = 0, g = 0, x = 0; h < r; ++h)
    for (var y = 0, m = Wa(e, d + 1, d = C2(g = s[h])), v = e; y < f; ++y)
      (v = SS(g > 0 ? p[y] + " " + m : Ae(m, /&\f/g, p[y]))) && (l[x++] = v);
  return xd(e, t, n, o === 0 ? Dm : a, l, u, c);
}
function _2(e, t, n) {
  return xd(e, t, n, wS, yd(I2()), Wa(e, 2, -2), 0);
}
function dx(e, t, n, r) {
  return xd(e, t, n, Fm, Wa(e, 0, r), Wa(e, r + 1, -1), r);
}
function Bi(e, t) {
  for (var n = "", r = zm(e), o = 0; o < r; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function $2(e, t, n, r) {
  switch (e.type) {
    case x2:
      if (e.children.length) break;
    case v2:
    case Fm:
      return e.return = e.return || e.value;
    case wS:
      return "";
    case bS:
      return e.return = e.value + "{" + Bi(e.children, r) + "}";
    case Dm:
      e.value = e.props.join(",");
  }
  return er(n = Bi(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function O2(e) {
  var t = zm(e);
  return function(n, r, o, i) {
    for (var s = "", a = 0; a < t; a++)
      s += e[a](n, r, o, i) || "";
    return s;
  };
}
function L2(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function ES(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var N2 = function(t, n, r) {
  for (var o = 0, i = 0; o = i, i = sr(), o === 38 && i === 12 && (n[r] = 1), !Ga(i); )
    cn();
  return pl(t, en);
}, D2 = function(t, n) {
  var r = -1, o = 44;
  do
    switch (Ga(o)) {
      case 0:
        o === 38 && sr() === 12 && (n[r] = 1), t[r] += N2(en - 1, n, r);
        break;
      case 2:
        t[r] += Hu(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = sr() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += yd(o);
    }
  while (o = cn());
  return t;
}, F2 = function(t, n) {
  return TS(D2(IS(t), n));
}, fx = /* @__PURE__ */ new WeakMap(), z2 = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r) return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !fx.get(r)) && !o) {
      fx.set(t, !0);
      for (var i = [], s = F2(n, i), a = r.props, l = 0, u = 0; l < s.length; l++)
        for (var c = 0; c < a.length; c++, u++)
          t.props[u] = i[l] ? s[l].replace(/&\f/g, a[c]) : a[c] + " " + s[l];
    }
  }
}, B2 = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function PS(e, t) {
  switch (b2(e, t)) {
    case 5103:
      return Me + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Me + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Me + e + wc + e + At + e + e;
    case 6828:
    case 4268:
      return Me + e + At + e + e;
    case 6165:
      return Me + e + At + "flex-" + e + e;
    case 5187:
      return Me + e + Ae(e, /(\w+).+(:[^]+)/, Me + "box-$1$2" + At + "flex-$1$2") + e;
    case 5443:
      return Me + e + At + "flex-item-" + Ae(e, /flex-|-self/, "") + e;
    case 4675:
      return Me + e + At + "flex-line-pack" + Ae(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return Me + e + At + Ae(e, "shrink", "negative") + e;
    case 5292:
      return Me + e + At + Ae(e, "basis", "preferred-size") + e;
    case 6060:
      return Me + "box-" + Ae(e, "-grow", "") + Me + e + At + Ae(e, "grow", "positive") + e;
    case 4554:
      return Me + Ae(e, /([^-])(transform)/g, "$1" + Me + "$2") + e;
    case 6187:
      return Ae(Ae(Ae(e, /(zoom-|grab)/, Me + "$1"), /(image-set)/, Me + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return Ae(e, /(image-set\([^]*)/, Me + "$1$`$1");
    case 4968:
      return Ae(Ae(e, /(.+:)(flex-)?(.*)/, Me + "box-pack:$3" + At + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Me + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Ae(e, /(.+)-inline(.+)/, Me + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (er(e) - 1 - t > 6) switch (St(e, t + 1)) {
        case 109:
          if (St(e, t + 4) !== 45) break;
        case 102:
          return Ae(e, /(.+:)(.+)-([^]+)/, "$1" + Me + "$2-$3$1" + wc + (St(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~eg(e, "stretch") ? PS(Ae(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    case 4949:
      if (St(e, t + 1) !== 115) break;
    case 6444:
      switch (St(e, er(e) - 3 - (~eg(e, "!important") && 10))) {
        case 107:
          return Ae(e, ":", ":" + Me) + e;
        case 101:
          return Ae(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Me + (St(e, 14) === 45 ? "inline-" : "") + "box$3$1" + Me + "$2$3$1" + At + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (St(e, t + 11)) {
        case 114:
          return Me + e + At + Ae(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Me + e + At + Ae(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Me + e + At + Ae(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Me + e + At + e + e;
  }
  return e;
}
var j2 = function(t, n, r, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case Fm:
      t.return = PS(t.value, t.length);
      break;
    case bS:
      return Bi([Us(t, {
        value: Ae(t.value, "@", "@" + Me)
      })], o);
    case Dm:
      if (t.length) return k2(t.props, function(i) {
        switch (S2(i, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return Bi([Us(t, {
              props: [Ae(i, /:(read-\w+)/, ":" + wc + "$1")]
            })], o);
          case "::placeholder":
            return Bi([Us(t, {
              props: [Ae(i, /:(plac\w+)/, ":" + Me + "input-$1")]
            }), Us(t, {
              props: [Ae(i, /:(plac\w+)/, ":" + wc + "$1")]
            }), Us(t, {
              props: [Ae(i, /:(plac\w+)/, At + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, U2 = [j2], H2 = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(g) {
      var x = g.getAttribute("data-emotion");
      x.indexOf(" ") !== -1 && (document.head.appendChild(g), g.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || U2, i = {}, s, a = [];
  s = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(g) {
      for (var x = g.getAttribute("data-emotion").split(" "), y = 1; y < x.length; y++)
        i[x[y]] = !0;
      a.push(g);
    }
  );
  var l, u = [z2, B2];
  {
    var c, d = [$2, L2(function(g) {
      c.insert(g);
    })], p = O2(u.concat(o, d)), f = function(x) {
      return Bi(R2(x), p);
    };
    l = function(x, y, m, v) {
      c = m, f(x ? x + "{" + y.styles + "}" : y.styles), v && (h.inserted[y.name] = !0);
    };
  }
  var h = {
    key: n,
    sheet: new y2({
      key: n,
      container: s,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: i,
    registered: {},
    insert: l
  };
  return h.sheet.hydrate(a), h;
}, MS = { exports: {} }, Oe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mt = typeof Symbol == "function" && Symbol.for, Bm = mt ? Symbol.for("react.element") : 60103, jm = mt ? Symbol.for("react.portal") : 60106, Cd = mt ? Symbol.for("react.fragment") : 60107, wd = mt ? Symbol.for("react.strict_mode") : 60108, bd = mt ? Symbol.for("react.profiler") : 60114, Sd = mt ? Symbol.for("react.provider") : 60109, kd = mt ? Symbol.for("react.context") : 60110, Um = mt ? Symbol.for("react.async_mode") : 60111, Id = mt ? Symbol.for("react.concurrent_mode") : 60111, Td = mt ? Symbol.for("react.forward_ref") : 60112, Ed = mt ? Symbol.for("react.suspense") : 60113, W2 = mt ? Symbol.for("react.suspense_list") : 60120, Pd = mt ? Symbol.for("react.memo") : 60115, Md = mt ? Symbol.for("react.lazy") : 60116, G2 = mt ? Symbol.for("react.block") : 60121, V2 = mt ? Symbol.for("react.fundamental") : 60117, Y2 = mt ? Symbol.for("react.responder") : 60118, K2 = mt ? Symbol.for("react.scope") : 60119;
function gn(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Bm:
        switch (e = e.type, e) {
          case Um:
          case Id:
          case Cd:
          case bd:
          case wd:
          case Ed:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case kd:
              case Td:
              case Md:
              case Pd:
              case Sd:
                return e;
              default:
                return t;
            }
        }
      case jm:
        return t;
    }
  }
}
function AS(e) {
  return gn(e) === Id;
}
Oe.AsyncMode = Um;
Oe.ConcurrentMode = Id;
Oe.ContextConsumer = kd;
Oe.ContextProvider = Sd;
Oe.Element = Bm;
Oe.ForwardRef = Td;
Oe.Fragment = Cd;
Oe.Lazy = Md;
Oe.Memo = Pd;
Oe.Portal = jm;
Oe.Profiler = bd;
Oe.StrictMode = wd;
Oe.Suspense = Ed;
Oe.isAsyncMode = function(e) {
  return AS(e) || gn(e) === Um;
};
Oe.isConcurrentMode = AS;
Oe.isContextConsumer = function(e) {
  return gn(e) === kd;
};
Oe.isContextProvider = function(e) {
  return gn(e) === Sd;
};
Oe.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Bm;
};
Oe.isForwardRef = function(e) {
  return gn(e) === Td;
};
Oe.isFragment = function(e) {
  return gn(e) === Cd;
};
Oe.isLazy = function(e) {
  return gn(e) === Md;
};
Oe.isMemo = function(e) {
  return gn(e) === Pd;
};
Oe.isPortal = function(e) {
  return gn(e) === jm;
};
Oe.isProfiler = function(e) {
  return gn(e) === bd;
};
Oe.isStrictMode = function(e) {
  return gn(e) === wd;
};
Oe.isSuspense = function(e) {
  return gn(e) === Ed;
};
Oe.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Cd || e === Id || e === bd || e === wd || e === Ed || e === W2 || typeof e == "object" && e !== null && (e.$$typeof === Md || e.$$typeof === Pd || e.$$typeof === Sd || e.$$typeof === kd || e.$$typeof === Td || e.$$typeof === V2 || e.$$typeof === Y2 || e.$$typeof === K2 || e.$$typeof === G2);
};
Oe.typeOf = gn;
MS.exports = Oe;
var X2 = MS.exports, RS = X2, q2 = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Q2 = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, _S = {};
_S[RS.ForwardRef] = q2;
_S[RS.Memo] = Q2;
var Z2 = !0;
function $S(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (r += o + " ");
  }), r;
}
var Hm = function(t, n, r) {
  var o = t.key + "-" + n.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (r === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  Z2 === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
}, Wm = function(t, n, r) {
  Hm(t, n, r);
  var o = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var i = n;
    do
      t.insert(n === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function J2(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, n = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= /* k >>> r: */
    n >>> 24, t = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(r) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var eR = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, tR = /[A-Z]|^ms/g, nR = /_EMO_([^_]+?)_([^]*?)_EMO_/g, OS = function(t) {
  return t.charCodeAt(1) === 45;
}, px = function(t) {
  return t != null && typeof t != "boolean";
}, Ap = /* @__PURE__ */ ES(function(e) {
  return OS(e) ? e : e.replace(tR, "-$&").toLowerCase();
}), hx = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(nR, function(r, o, i) {
          return tr = {
            name: o,
            styles: i,
            next: tr
          }, o;
        });
  }
  return eR[t] !== 1 && !OS(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
function Va(e, t, n) {
  if (n == null)
    return "";
  var r = n;
  if (r.__emotion_styles !== void 0)
    return r;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      var o = n;
      if (o.anim === 1)
        return tr = {
          name: o.name,
          styles: o.styles,
          next: tr
        }, o.name;
      var i = n;
      if (i.styles !== void 0) {
        var s = i.next;
        if (s !== void 0)
          for (; s !== void 0; )
            tr = {
              name: s.name,
              styles: s.styles,
              next: tr
            }, s = s.next;
        var a = i.styles + ";";
        return a;
      }
      return rR(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var l = tr, u = n(e);
        return tr = l, Va(e, t, u);
      }
      break;
    }
  }
  var c = n;
  if (t == null)
    return c;
  var d = t[c];
  return d !== void 0 ? d : c;
}
function rR(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      r += Va(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var s = n[i];
      if (typeof s != "object") {
        var a = s;
        t != null && t[a] !== void 0 ? r += i + "{" + t[a] + "}" : px(a) && (r += Ap(i) + ":" + hx(i, a) + ";");
      } else if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0))
        for (var l = 0; l < s.length; l++)
          px(s[l]) && (r += Ap(i) + ":" + hx(i, s[l]) + ";");
      else {
        var u = Va(e, t, s);
        switch (i) {
          case "animation":
          case "animationName": {
            r += Ap(i) + ":" + u + ";";
            break;
          }
          default:
            r += i + "{" + u + "}";
        }
      }
    }
  return r;
}
var gx = /label:\s*([^\s;{]+)\s*(;|$)/g, tr;
function hl(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, o = "";
  tr = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    r = !1, o += Va(n, t, i);
  else {
    var s = i;
    o += s[0];
  }
  for (var a = 1; a < e.length; a++)
    if (o += Va(n, t, e[a]), r) {
      var l = i;
      o += l[a];
    }
  gx.lastIndex = 0;
  for (var u = "", c; (c = gx.exec(o)) !== null; )
    u += "-" + c[1];
  var d = J2(o) + u;
  return {
    name: d,
    styles: o,
    next: tr
  };
}
var oR = function(t) {
  return t();
}, LS = Ta.useInsertionEffect ? Ta.useInsertionEffect : !1, NS = LS || oR, mx = LS || k.useLayoutEffect, DS = /* @__PURE__ */ k.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ H2({
    key: "css"
  }) : null
);
DS.Provider;
var Gm = function(t) {
  return /* @__PURE__ */ k.forwardRef(function(n, r) {
    var o = k.useContext(DS);
    return t(n, o, r);
  });
}, Ad = /* @__PURE__ */ k.createContext({}), Vm = {}.hasOwnProperty, ng = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", iR = function(t, n) {
  var r = {};
  for (var o in n)
    Vm.call(n, o) && (r[o] = n[o]);
  return r[ng] = t, r;
}, sR = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return Hm(n, r, o), NS(function() {
    return Wm(n, r, o);
  }), null;
}, aR = /* @__PURE__ */ Gm(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var o = e[ng], i = [r], s = "";
  typeof e.className == "string" ? s = $S(t.registered, i, e.className) : e.className != null && (s = e.className + " ");
  var a = hl(i, void 0, k.useContext(Ad));
  s += t.key + "-" + a.name;
  var l = {};
  for (var u in e)
    Vm.call(e, u) && u !== "css" && u !== ng && (l[u] = e[u]);
  return l.className = s, n && (l.ref = n), /* @__PURE__ */ k.createElement(k.Fragment, null, /* @__PURE__ */ k.createElement(sR, {
    cache: t,
    serialized: a,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ k.createElement(o, l));
}), lR = aR, yx = function(t, n) {
  var r = arguments;
  if (n == null || !Vm.call(n, "css"))
    return k.createElement.apply(void 0, r);
  var o = r.length, i = new Array(o);
  i[0] = lR, i[1] = iR(t, n);
  for (var s = 2; s < o; s++)
    i[s] = r[s];
  return k.createElement.apply(null, i);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(yx || (yx = {}));
var uR = /* @__PURE__ */ Gm(function(e, t) {
  var n = e.styles, r = hl([n], void 0, k.useContext(Ad)), o = k.useRef();
  return mx(function() {
    var i = t.key + "-global", s = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), a = !1, l = document.querySelector('style[data-emotion="' + i + " " + r.name + '"]');
    return t.sheet.tags.length && (s.before = t.sheet.tags[0]), l !== null && (a = !0, l.setAttribute("data-emotion", i), s.hydrate([l])), o.current = [s, a], function() {
      s.flush();
    };
  }, [t]), mx(function() {
    var i = o.current, s = i[0], a = i[1];
    if (a) {
      i[1] = !1;
      return;
    }
    if (r.next !== void 0 && Wm(t, r.next, !0), s.tags.length) {
      var l = s.tags[s.tags.length - 1].nextElementSibling;
      s.before = l, s.flush();
    }
    t.insert("", r, s, !1);
  }, [t, r.name]), null;
});
function Ya() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return hl(t);
}
function gl() {
  var e = Ya.apply(void 0, arguments), t = "animation-" + e.name;
  return {
    name: t,
    styles: "@keyframes " + t + "{" + e.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}
var cR = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, dR = /* @__PURE__ */ ES(
  function(e) {
    return cR.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), fR = dR, pR = function(t) {
  return t !== "theme";
}, vx = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? fR : pR;
}, xx = function(t, n, r) {
  var o;
  if (n) {
    var i = n.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(s) {
      return t.__emotion_forwardProp(s) && i(s);
    } : i;
  }
  return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
}, hR = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return Hm(n, r, o), NS(function() {
    return Wm(n, r, o);
  }), null;
}, gR = function e(t, n) {
  var r = t.__emotion_real === t, o = r && t.__emotion_base || t, i, s;
  n !== void 0 && (i = n.label, s = n.target);
  var a = xx(t, n, r), l = a || vx(o), u = !l("as");
  return function() {
    var c = arguments, d = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && d.push("label:" + i + ";"), c[0] == null || c[0].raw === void 0)
      d.push.apply(d, c);
    else {
      var p = c[0];
      d.push(p[0]);
      for (var f = c.length, h = 1; h < f; h++)
        d.push(c[h], p[h]);
    }
    var g = Gm(function(x, y, m) {
      var v = u && x.as || o, C = "", S = [], b = x;
      if (x.theme == null) {
        b = {};
        for (var I in x)
          b[I] = x[I];
        b.theme = k.useContext(Ad);
      }
      typeof x.className == "string" ? C = $S(y.registered, S, x.className) : x.className != null && (C = x.className + " ");
      var T = hl(d.concat(S), y.registered, b);
      C += y.key + "-" + T.name, s !== void 0 && (C += " " + s);
      var L = u && a === void 0 ? vx(v) : l, O = {};
      for (var _ in x)
        u && _ === "as" || L(_) && (O[_] = x[_]);
      return O.className = C, m && (O.ref = m), /* @__PURE__ */ k.createElement(k.Fragment, null, /* @__PURE__ */ k.createElement(hR, {
        cache: y,
        serialized: T,
        isStringTag: typeof v == "string"
      }), /* @__PURE__ */ k.createElement(v, O));
    });
    return g.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", g.defaultProps = t.defaultProps, g.__emotion_real = g, g.__emotion_base = o, g.__emotion_styles = d, g.__emotion_forwardProp = a, Object.defineProperty(g, "toString", {
      value: function() {
        return "." + s;
      }
    }), g.withComponent = function(x, y) {
      var m = e(x, N({}, n, y, {
        shouldForwardProp: xx(g, y, !0)
      }));
      return m.apply(void 0, d);
    }, g;
  };
}, mR = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], rg = gR.bind(null);
mR.forEach(function(e) {
  rg[e] = rg(e);
});
function yR(e) {
  return e == null || Object.keys(e).length === 0;
}
function vR(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e, r = typeof t == "function" ? (o) => t(yR(o) ? n : o) : t;
  return /* @__PURE__ */ E.jsx(uR, {
    styles: r
  });
}
function FS(e, t) {
  return rg(e, t);
}
function xR(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const Cx = [];
function ao(e) {
  return Cx[0] = e, hl(Cx);
}
var zS = { exports: {} }, Le = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ym = Symbol.for("react.transitional.element"), Km = Symbol.for("react.portal"), Rd = Symbol.for("react.fragment"), _d = Symbol.for("react.strict_mode"), $d = Symbol.for("react.profiler"), Od = Symbol.for("react.consumer"), Ld = Symbol.for("react.context"), Nd = Symbol.for("react.forward_ref"), Dd = Symbol.for("react.suspense"), Fd = Symbol.for("react.suspense_list"), zd = Symbol.for("react.memo"), Bd = Symbol.for("react.lazy"), CR = Symbol.for("react.view_transition"), wR = Symbol.for("react.client.reference");
function _n(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Ym:
        switch (e = e.type, e) {
          case Rd:
          case $d:
          case _d:
          case Dd:
          case Fd:
          case CR:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Ld:
              case Nd:
              case Bd:
              case zd:
                return e;
              case Od:
                return e;
              default:
                return t;
            }
        }
      case Km:
        return t;
    }
  }
}
Le.ContextConsumer = Od;
Le.ContextProvider = Ld;
Le.Element = Ym;
Le.ForwardRef = Nd;
Le.Fragment = Rd;
Le.Lazy = Bd;
Le.Memo = zd;
Le.Portal = Km;
Le.Profiler = $d;
Le.StrictMode = _d;
Le.Suspense = Dd;
Le.SuspenseList = Fd;
Le.isContextConsumer = function(e) {
  return _n(e) === Od;
};
Le.isContextProvider = function(e) {
  return _n(e) === Ld;
};
Le.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ym;
};
Le.isForwardRef = function(e) {
  return _n(e) === Nd;
};
Le.isFragment = function(e) {
  return _n(e) === Rd;
};
Le.isLazy = function(e) {
  return _n(e) === Bd;
};
Le.isMemo = function(e) {
  return _n(e) === zd;
};
Le.isPortal = function(e) {
  return _n(e) === Km;
};
Le.isProfiler = function(e) {
  return _n(e) === $d;
};
Le.isStrictMode = function(e) {
  return _n(e) === _d;
};
Le.isSuspense = function(e) {
  return _n(e) === Dd;
};
Le.isSuspenseList = function(e) {
  return _n(e) === Fd;
};
Le.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Rd || e === $d || e === _d || e === Dd || e === Fd || typeof e == "object" && e !== null && (e.$$typeof === Bd || e.$$typeof === zd || e.$$typeof === Ld || e.$$typeof === Od || e.$$typeof === Nd || e.$$typeof === wR || e.getModuleId !== void 0);
};
Le.typeOf = _n;
zS.exports = Le;
var BS = zS.exports;
function Cr(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function jS(e) {
  if (/* @__PURE__ */ k.isValidElement(e) || BS.isValidElementType(e) || !Cr(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = jS(e[n]);
  }), t;
}
function Ut(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? {
    ...e
  } : e;
  return Cr(e) && Cr(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ k.isValidElement(t[o]) || BS.isValidElementType(t[o]) ? r[o] = t[o] : Cr(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && Cr(e[o]) ? r[o] = Ut(e[o], t[o], n) : n.clone ? r[o] = Cr(t[o]) ? jS(t[o]) : t[o] : r[o] = t[o];
  }), r;
}
const bR = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => ({
    ...n,
    [r.key]: r.val
  }), {});
};
function US(e) {
  const {
    values: t = {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    },
    unit: n = "px",
    step: r = 5,
    ...o
  } = e, i = bR(t), s = Object.keys(i);
  function a(f) {
    return `@media (min-width:${typeof t[f] == "number" ? t[f] : f}${n})`;
  }
  function l(f) {
    return `@media (max-width:${(typeof t[f] == "number" ? t[f] : f) - r / 100}${n})`;
  }
  function u(f, h) {
    const g = s.indexOf(h);
    return `@media (min-width:${typeof t[f] == "number" ? t[f] : f}${n}) and (max-width:${(g !== -1 && typeof t[s[g]] == "number" ? t[s[g]] : h) - r / 100}${n})`;
  }
  function c(f) {
    return s.indexOf(f) + 1 < s.length ? u(f, s[s.indexOf(f) + 1]) : a(f);
  }
  function d(f) {
    const h = s.indexOf(f);
    return h === 0 ? a(s[1]) : h === s.length - 1 ? l(s[h]) : u(f, s[s.indexOf(f) + 1]).replace("@media", "@media not all and");
  }
  const p = [];
  for (let f = 0; f < s.length; f += 1)
    p.push(a(s[f]));
  return {
    keys: s,
    values: i,
    up: a,
    down: l,
    between: u,
    only: c,
    not: d,
    unit: n,
    internal_mediaKeys: p,
    ...o
  };
}
const wx = /min-width:\s*([0-9.]+)/;
function bx(e, t) {
  if (!e.containerQueries || !SR(t))
    return t;
  const n = [];
  for (const o in t)
    o.startsWith("@container") && n.push(o);
  n.sort((o, i) => {
    var s, a;
    return +(((s = o.match(wx)) == null ? void 0 : s[1]) || 0) - +(((a = i.match(wx)) == null ? void 0 : a[1]) || 0);
  });
  const r = t;
  for (let o = 0; o < n.length; o += 1) {
    const i = n[o], s = r[i];
    delete r[i], r[i] = s;
  }
  return r;
}
function SR(e) {
  for (const t in e)
    if (t.startsWith("@container"))
      return !0;
  return !1;
}
function HS(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((n) => t.startsWith(`@${n}`)) || !!t.match(/^@\d/));
}
function kR(e, t) {
  const n = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!n)
    return null;
  const [, r, o] = n, i = Number.isNaN(+r) ? r || 0 : +r;
  return e.containerQueries(o).up(i);
}
function IR(e) {
  const t = (i, s) => i.replace("@media", s ? `@container ${s}` : "@container");
  function n(i, s) {
    i.up = (...a) => t(e.breakpoints.up(...a), s), i.down = (...a) => t(e.breakpoints.down(...a), s), i.between = (...a) => t(e.breakpoints.between(...a), s), i.only = (...a) => t(e.breakpoints.only(...a), s), i.not = (...a) => {
      const l = t(e.breakpoints.not(...a), s);
      return l.includes("not all and") ? l.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : l;
    };
  }
  const r = {}, o = (i) => (n(r, i), r);
  return n(o), {
    ...e,
    containerQueries: o
  };
}
const TR = {
  borderRadius: 4
};
function WS(e) {
  if (e == null)
    return !0;
  for (const t in e)
    return !1;
  return !0;
}
function ji(e, t) {
  const n = Array.isArray(t), r = Array.isArray(e);
  return RR(t) ? t : _R(e) ? Ji(t) : n && r ? MR(e, t) : n !== r ? Ji(t) : $R(e, t);
}
function ER(e) {
  let t = 0;
  const n = e.length, r = new Array(n);
  for (t = 0; t < n; t += 1)
    r[t] = Ji(e[t]);
  return r;
}
function PR(e) {
  const t = {};
  for (const n in e)
    n === "__proto__" || n === "constructor" || n === "prototype" || (t[n] = Ji(e[n]));
  return t;
}
function MR(e, t) {
  const n = e.length;
  for (let r = 0; r < t.length; r += 1)
    e[n + r] = Ji(t[r]);
  return e;
}
function AR(e) {
  return typeof e == "object" && e !== null && !(e instanceof RegExp) && !(e instanceof Date);
}
function RR(e) {
  return typeof e != "object" || e === null;
}
function _R(e) {
  return typeof e != "object" || e === null || e instanceof RegExp || e instanceof Date;
}
function Ji(e) {
  return AR(e) ? Array.isArray(e) ? ER(e) : PR(e) : e;
}
function $R(e, t) {
  for (const n in t)
    n === "__proto__" || n === "constructor" || n === "prototype" || (n in e ? e[n] = ji(e[n], t[n]) : e[n] = Ji(t[n]));
  return e;
}
const OR = {}, jd = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, bc = US({
  values: jd
}), LR = {
  containerQueries: (e) => ({
    up: (t) => {
      let n = typeof t == "number" ? t : jd[t] || t;
      return typeof n == "number" && (n = `${n}px`), e ? `@container ${e} (min-width:${n})` : `@container (min-width:${n})`;
    }
  })
};
function Ss(e, t, n) {
  const r = {};
  return Ud(r, e.theme, t, (o, i, s) => {
    const a = n(i, s);
    o ? r[o] = a : ji(r, a);
  });
}
function Ud(e, t, n, r) {
  if (t ?? (t = OR), Array.isArray(n)) {
    const o = t.breakpoints ?? bc;
    for (let i = 0; i < n.length; i += 1)
      Rp(e, o.up(o.keys[i]), n[i], void 0, r);
    return e;
  }
  if (typeof n == "object") {
    const o = t.breakpoints ?? bc, i = o.values ?? jd;
    for (const s in n)
      if (HS(o.keys, s)) {
        const a = kR(t.containerQueries ? t : LR, s);
        a && Rp(e, a, n[s], s, r);
      } else if (s in i) {
        const a = o.up(s);
        Rp(e, a, n[s], s, r);
      } else {
        const a = s;
        e[a] = n[a];
      }
    return e;
  }
  return r(void 0, n), e;
}
function Rp(e, t, n, r, o) {
  e[t] ?? (e[t] = {}), o(t, n, r);
}
function NR(e = bc) {
  const {
    internal_mediaKeys: t
  } = e, n = {};
  for (let r = 0; r < t.length; r += 1)
    n[t[r]] = {};
  return n;
}
function Sx(e, t) {
  const n = e.internal_mediaKeys;
  for (let r = 0; r < n.length; r += 1) {
    const o = n[r];
    WS(t[o]) && delete t[o];
  }
  return t;
}
function DR(e, t) {
  if (Array.isArray(t))
    return !0;
  if (typeof t == "object" && t !== null) {
    for (let r = 0; r < e.keys.length; r += 1)
      if (e.keys[r] in t)
        return !0;
    const n = Object.keys(t);
    for (let r = 0; r < n.length; r += 1)
      if (HS(e.keys, n[r]))
        return !0;
  }
  return !1;
}
function Ee(e) {
  if (typeof e != "string")
    throw new Error(Or(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function GS(e, t, n, r) {
  let o;
  return typeof e == "function" ? o = e(n) : Array.isArray(e) ? o = e[n] || n : typeof n == "string" ? o = Hd(e, n, !0, r) || n : o = n, t && (o = t(o, n, e)), o;
}
function Hd(e, t, n = !0, r = void 0) {
  if (!e || !t)
    return null;
  const o = t.split(".");
  if (e.vars && n) {
    const i = kx(e.vars, o, r);
    if (i != null)
      return i;
  }
  return kx(e, o, r);
}
function kx(e, t, n = void 0) {
  let r, o = e, i = 0;
  for (; i < t.length; ) {
    if (o == null)
      return o;
    r = o, o = o[t[i]], i += 1;
  }
  if (n && o === void 0) {
    const s = t[t.length - 1], a = `${n}${s === "default" ? "" : Ee(s)}`;
    return r == null ? void 0 : r[a];
  }
  return o;
}
function tt(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: o
  } = e, i = (s) => {
    if (s[t] == null)
      return null;
    const a = s[t], l = s.theme, u = Hd(l, r) || {};
    return Ss(s, a, (d) => {
      const p = GS(u, o, d, t);
      return n === !1 ? p : {
        [n]: p
      };
    });
  };
  return i.propTypes = {}, i.filterProps = [t], i;
}
const FR = {
  internal_cache: {}
}, Sc = {
  m: "margin",
  p: "padding"
}, Ix = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Tx = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Ka = {};
for (const e in Sc)
  Ka[e] = [Sc[e]];
for (const e in Sc)
  for (const t in Ix) {
    const n = Sc[e], r = Ix[t], o = Array.isArray(r) ? r.map((i) => n + i) : [n + r];
    Ka[e + t] = o;
  }
for (const e in Tx)
  Ka[e] = Ka[Tx[e]];
const Xm = /* @__PURE__ */ new Set(["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"]), qm = /* @__PURE__ */ new Set(["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"]);
[...Xm, ...qm];
function ml(e, t, n, r) {
  const o = Hd(e, t, !0) ?? n;
  return typeof o == "number" || typeof o == "string" ? (i) => typeof i == "string" ? i : typeof o == "string" ? o.startsWith("var(") && i === 0 ? 0 : o.startsWith("var(") && i === 1 ? o : `calc(${i} * ${o})` : o * i : Array.isArray(o) ? (i) => {
    if (typeof i == "string")
      return i;
    const s = Math.abs(i), a = o[s];
    return i >= 0 ? a : typeof a == "number" ? -a : typeof a == "string" && a.startsWith("var(") ? `calc(-1 * ${a})` : `-${a}`;
  } : typeof o == "function" ? o : () => {
  };
}
function Qm(e) {
  return ml(e, "spacing", 8);
}
function yl(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
const Ex = [""];
function VS(e, t) {
  var i;
  const n = e.theme ?? FR, r = ((i = n == null ? void 0 : n.internal_cache) == null ? void 0 : i.unarySpacing) ?? Qm(n), o = {};
  for (const s in e) {
    if (!t.has(s))
      continue;
    const a = Ka[s] ?? (Ex[0] = s, Ex), l = e[s];
    Ud(o, e.theme, l, (u, c) => {
      const d = u ? o[u] : o;
      for (let p = 0; p < a.length; p += 1)
        d[a[p]] = yl(r, c);
    });
  }
  return o;
}
function Zm(e) {
  return VS(e, Xm);
}
Zm.propTypes = {};
Zm.filterProps = Xm;
const it = Zm;
function Jm(e) {
  return VS(e, qm);
}
Jm.propTypes = {};
Jm.filterProps = qm;
const st = Jm;
function YS(e = 8, t = Qm({
  spacing: e
})) {
  if (e.mui)
    return e;
  const n = (...r) => (r.length === 0 ? [1] : r).map((i) => {
    const s = t(i);
    return typeof s == "number" ? `${s}px` : s;
  }).join(" ");
  return n.mui = !0, n;
}
function Wd(...e) {
  const t = e.reduce((r, o) => (o.filterProps.forEach((i) => {
    r[i] = o;
  }), r), {}), n = (r) => {
    const o = {};
    for (const i in r)
      t[i] && ji(o, t[i](r));
    return o;
  };
  return n.propTypes = {}, n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), []), n;
}
function Cn(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function $n(e, t) {
  return tt({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const zR = $n("border", Cn), BR = $n("borderTop", Cn), jR = $n("borderRight", Cn), UR = $n("borderBottom", Cn), HR = $n("borderLeft", Cn), WR = $n("borderColor"), GR = $n("borderTopColor"), VR = $n("borderRightColor"), YR = $n("borderBottomColor"), KR = $n("borderLeftColor"), XR = $n("outline", Cn), qR = $n("outlineColor"), Gd = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = ml(e.theme, "shape.borderRadius", 4), n = (r) => ({
      borderRadius: yl(t, r)
    });
    return Ss(e, e.borderRadius, n);
  }
  return null;
};
Gd.propTypes = {};
Gd.filterProps = ["borderRadius"];
Wd(zR, BR, jR, UR, HR, WR, GR, VR, YR, KR, Gd, XR, qR);
const Vd = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = ml(e.theme, "spacing", 8), n = (r) => ({
      gap: yl(t, r)
    });
    return Ss(e, e.gap, n);
  }
  return null;
};
Vd.propTypes = {};
Vd.filterProps = ["gap"];
const Yd = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = ml(e.theme, "spacing", 8), n = (r) => ({
      columnGap: yl(t, r)
    });
    return Ss(e, e.columnGap, n);
  }
  return null;
};
Yd.propTypes = {};
Yd.filterProps = ["columnGap"];
const Kd = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = ml(e.theme, "spacing", 8), n = (r) => ({
      rowGap: yl(t, r)
    });
    return Ss(e, e.rowGap, n);
  }
  return null;
};
Kd.propTypes = {};
Kd.filterProps = ["rowGap"];
const QR = tt({
  prop: "gridColumn"
}), ZR = tt({
  prop: "gridRow"
}), JR = tt({
  prop: "gridAutoFlow"
}), e_ = tt({
  prop: "gridAutoColumns"
}), t_ = tt({
  prop: "gridAutoRows"
}), n_ = tt({
  prop: "gridTemplateColumns"
}), r_ = tt({
  prop: "gridTemplateRows"
}), o_ = tt({
  prop: "gridTemplateAreas"
}), i_ = tt({
  prop: "gridArea"
});
Wd(Vd, Yd, Kd, QR, ZR, JR, e_, t_, n_, r_, o_, i_);
function Ui(e, t) {
  return t === "grey" ? t : e;
}
const s_ = tt({
  prop: "color",
  themeKey: "palette",
  transform: Ui
}), a_ = tt({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Ui
}), l_ = tt({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Ui
});
Wd(s_, a_, l_);
const u_ = jd;
function an(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const c_ = tt({
  prop: "width",
  transform: an
}), ey = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var o, i, s, a, l;
      const r = ((s = (i = (o = e.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : i.values) == null ? void 0 : s[n]) || u_[n];
      return r ? ((l = (a = e.theme) == null ? void 0 : a.breakpoints) == null ? void 0 : l.unit) !== "px" ? {
        maxWidth: `${r}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: r
      } : {
        maxWidth: an(n)
      };
    };
    return Ss(e, e.maxWidth, t);
  }
  return null;
};
ey.filterProps = ["maxWidth"];
const d_ = tt({
  prop: "minWidth",
  transform: an
}), f_ = tt({
  prop: "height",
  transform: an
}), p_ = tt({
  prop: "maxHeight",
  transform: an
}), h_ = tt({
  prop: "minHeight",
  transform: an
});
tt({
  prop: "size",
  cssProperty: "width",
  transform: an
});
tt({
  prop: "size",
  cssProperty: "height",
  transform: an
});
const g_ = tt({
  prop: "boxSizing"
});
Wd(c_, ey, d_, f_, p_, h_, g_);
const Xd = {
  // borders
  border: {
    themeKey: "borders",
    transform: Cn
  },
  borderTop: {
    themeKey: "borders",
    transform: Cn
  },
  borderRight: {
    themeKey: "borders",
    transform: Cn
  },
  borderBottom: {
    themeKey: "borders",
    transform: Cn
  },
  borderLeft: {
    themeKey: "borders",
    transform: Cn
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: Cn
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Gd
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Ui
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Ui
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Ui
  },
  // spacing
  p: {
    style: st
  },
  pt: {
    style: st
  },
  pr: {
    style: st
  },
  pb: {
    style: st
  },
  pl: {
    style: st
  },
  px: {
    style: st
  },
  py: {
    style: st
  },
  padding: {
    style: st
  },
  paddingTop: {
    style: st
  },
  paddingRight: {
    style: st
  },
  paddingBottom: {
    style: st
  },
  paddingLeft: {
    style: st
  },
  paddingX: {
    style: st
  },
  paddingY: {
    style: st
  },
  paddingInline: {
    style: st
  },
  paddingInlineStart: {
    style: st
  },
  paddingInlineEnd: {
    style: st
  },
  paddingBlock: {
    style: st
  },
  paddingBlockStart: {
    style: st
  },
  paddingBlockEnd: {
    style: st
  },
  m: {
    style: it
  },
  mt: {
    style: it
  },
  mr: {
    style: it
  },
  mb: {
    style: it
  },
  ml: {
    style: it
  },
  mx: {
    style: it
  },
  my: {
    style: it
  },
  margin: {
    style: it
  },
  marginTop: {
    style: it
  },
  marginRight: {
    style: it
  },
  marginBottom: {
    style: it
  },
  marginLeft: {
    style: it
  },
  marginX: {
    style: it
  },
  marginY: {
    style: it
  },
  marginInline: {
    style: it
  },
  marginInlineStart: {
    style: it
  },
  marginInlineEnd: {
    style: it
  },
  marginBlock: {
    style: it
  },
  marginBlockStart: {
    style: it
  },
  marginBlockEnd: {
    style: it
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: Vd
  },
  rowGap: {
    style: Kd
  },
  columnGap: {
    style: Yd
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: an
  },
  maxWidth: {
    style: ey
  },
  minWidth: {
    transform: an
  },
  height: {
    transform: an
  },
  maxHeight: {
    transform: an
  },
  minHeight: {
    transform: an
  },
  boxSizing: {},
  // typography
  font: {
    themeKey: "font"
  },
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
}, m_ = {};
function y_() {
  function e(t) {
    if (!t.sx)
      return null;
    const {
      sx: n,
      theme: r = m_,
      nested: o
    } = t, i = r.unstable_sxConfig ?? Xd, s = {
      sx: null,
      theme: r,
      nested: !0
    };
    function a(l) {
      let u = l;
      if (typeof l == "function")
        u = l(r);
      else if (typeof l != "object")
        return l;
      if (!u)
        return null;
      const c = r.breakpoints ?? bc, d = NR(c);
      for (const p in u) {
        const f = v_(u[p], r);
        if (f != null) {
          if (typeof f != "object") {
            Px(d, p, f, r, i);
            continue;
          }
          if (i[p]) {
            Px(d, p, f, r, i);
            continue;
          }
          DR(c, f) ? Ud(d, t.theme, f, (h, g) => {
            d[h][p] = g;
          }) : (s.sx = f, d[p] = e(s));
        }
      }
      return !o && r.modularCssLayers ? {
        "@layer sx": bx(r, Sx(c, d))
      } : bx(r, Sx(c, d));
    }
    return Array.isArray(n) ? n.map(a) : a(n);
  }
  return e.filterProps = ["sx"], e;
}
const es = y_();
function Px(e, t, n, r, o) {
  const i = o[t];
  if (!i) {
    e[t] = n;
    return;
  }
  if (n == null)
    return;
  const {
    themeKey: s
  } = i;
  if (s === "typography" && n === "inherit") {
    e[t] = n;
    return;
  }
  const {
    style: a
  } = i;
  if (a) {
    ji(e, a({
      [t]: n,
      theme: r
    }));
    return;
  }
  const {
    cssProperty: l = t,
    transform: u
  } = i, c = Hd(r, s);
  Ud(e, r, n, (d, p) => {
    const f = GS(c, u, p, t);
    l === !1 ? ji(d ? e[d] : e, f) : d ? e[d][l] = f : e[l] = f;
  });
}
function v_(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function x_(e, t) {
  var r;
  const n = this;
  if (n.vars) {
    if (!((r = n.colorSchemes) != null && r[e]) || typeof n.getColorSchemeSelector != "function")
      return {};
    let o = n.getColorSchemeSelector(e);
    return o === "&" ? t : ((o.includes("data-") || o.includes(".")) && (o = `*:where(${o.replace(/\s*&$/, "")}) &`), {
      [o]: t
    });
  }
  return n.palette.mode === e ? t : {};
}
function ty(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: o,
    shape: i = {},
    ...s
  } = e, a = US(n), l = YS(o);
  let u = Ut({
    breakpoints: a,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...r
    },
    spacing: l,
    shape: {
      ...TR,
      ...i
    }
  }, s);
  return u = IR(u), u.applyStyles = x_, u = t.reduce((c, d) => Ut(c, d), u), u.unstable_sxConfig = {
    ...Xd,
    ...s == null ? void 0 : s.unstable_sxConfig
  }, u.unstable_sx = function(d) {
    return es({
      sx: d,
      theme: this
    });
  }, u.internal_cache = {}, u;
}
function C_(e) {
  return Object.keys(e).length === 0;
}
function KS(e = null) {
  const t = k.useContext(Ad);
  return !t || C_(t) ? e : t;
}
const w_ = ty();
function qd(e = w_) {
  return KS(e);
}
function _p(e) {
  const t = ao(e);
  return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
}
function b_({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const r = qd(n), o = t && r[t] || r;
  let i = typeof e == "function" ? e(o) : e;
  return o.modularCssLayers && (Array.isArray(i) ? i = i.map((s) => _p(typeof s == "function" ? s(o) : s)) : i = _p(i)), /* @__PURE__ */ E.jsx(vR, {
    styles: i
  });
}
const Mx = (e) => e, S_ = () => {
  let e = Mx;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Mx;
    }
  };
}, XS = S_();
function qS(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = qS(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function oe() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = qS(e)) && (r && (r += " "), r += t);
  return r;
}
function k_(e = {}) {
  const {
    themeId: t,
    defaultTheme: n,
    defaultClassName: r = "MuiBox-root",
    generateClassName: o
  } = e, i = FS("div", {
    shouldForwardProp: (a) => a !== "theme" && a !== "sx" && a !== "as"
  })(es);
  return /* @__PURE__ */ k.forwardRef(function(l, u) {
    const c = qd(n), {
      className: d,
      component: p = "div",
      ...f
    } = l;
    return /* @__PURE__ */ E.jsx(i, {
      as: p,
      ref: u,
      className: oe(d, o ? o(r) : r),
      theme: t && c[t] || c,
      ...f
    });
  });
}
const I_ = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function Ce(e, t, n = "Mui") {
  const r = I_[t];
  return r ? `${n}-${r}` : `${XS.generate(e)}-${t}`;
}
function ce(e, t, n = "Mui") {
  const r = {};
  return t.forEach((o) => {
    r[o] = Ce(e, o, n);
  }), r;
}
function QS(e) {
  const {
    variants: t,
    ...n
  } = e, r = {
    variants: t,
    style: ao(n),
    isProcessed: !0
  };
  return r.style === n || t && t.forEach((o) => {
    typeof o.style != "function" && (o.style = ao(o.style));
  }), r;
}
const T_ = ty();
function Gu(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function Do(e, t) {
  return t && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${t}{${String(e.styles)}}`), e;
}
function E_(e) {
  return e ? (t, n) => n[e] : null;
}
function P_(e, t, n) {
  e.theme = WS(e.theme) ? n : e.theme[t] || e.theme;
}
function Vu(e, t, n) {
  const r = typeof t == "function" ? t(e) : t;
  if (Array.isArray(r))
    return r.flatMap((o) => Vu(e, o, n));
  if (Array.isArray(r == null ? void 0 : r.variants)) {
    let o;
    if (r.isProcessed)
      o = n ? Do(r.style, n) : r.style;
    else {
      const {
        variants: i,
        ...s
      } = r;
      o = n ? Do(ao(s), n) : s;
    }
    return ZS(e, r.variants, [o], n);
  }
  return r != null && r.isProcessed ? n ? Do(ao(r.style), n) : r.style : n ? Do(ao(r), n) : r;
}
function ZS(e, t, n = [], r = void 0) {
  var i;
  let o;
  e: for (let s = 0; s < t.length; s += 1) {
    const a = t[s];
    if (typeof a.props == "function") {
      if (o ?? (o = {
        ...e,
        ...e.ownerState,
        ownerState: e.ownerState
      }), !a.props(o))
        continue;
    } else
      for (const l in a.props)
        if (e[l] !== a.props[l] && ((i = e.ownerState) == null ? void 0 : i[l]) !== a.props[l])
          continue e;
    typeof a.style == "function" ? (o ?? (o = {
      ...e,
      ...e.ownerState,
      ownerState: e.ownerState
    }), n.push(r ? Do(ao(a.style(o)), r) : a.style(o))) : n.push(r ? Do(ao(a.style), r) : a.style);
  }
  return n;
}
function M_(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = T_,
    rootShouldForwardProp: r = Gu,
    slotShouldForwardProp: o = Gu
  } = e;
  function i(a) {
    P_(a, t, n);
  }
  return (a, l = {}) => {
    xR(a, (b) => b.filter((I) => I !== es));
    const {
      name: u,
      slot: c,
      skipVariantsResolver: d,
      skipSx: p,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: f = E_(__(c)),
      ...h
    } = l, g = u && u.startsWith("Mui") || c ? "components" : "custom", x = d !== void 0 ? d : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      c && c !== "Root" && c !== "root" || !1
    ), y = p || !1;
    let m = Gu;
    c === "Root" || c === "root" ? m = r : c ? m = o : R_(a) && (m = void 0);
    const v = FS(a, {
      shouldForwardProp: m,
      label: A_(),
      ...h
    }), C = (b) => {
      if (b.__emotion_real === b)
        return b;
      if (typeof b == "function")
        return function(T) {
          return Vu(T, b, T.theme.modularCssLayers ? g : void 0);
        };
      if (Cr(b)) {
        const I = QS(b);
        return function(L) {
          return I.variants ? Vu(L, I, L.theme.modularCssLayers ? g : void 0) : L.theme.modularCssLayers ? Do(I.style, g) : I.style;
        };
      }
      return b;
    }, S = (...b) => {
      const I = [], T = b.map(C), L = [];
      if (I.push(i), u && f && L.push(function(A) {
        var D, R;
        const M = (R = (D = A.theme.components) == null ? void 0 : D[u]) == null ? void 0 : R.styleOverrides;
        if (!M)
          return null;
        const $ = {};
        for (const F in M)
          $[F] = Vu(A, M[F], A.theme.modularCssLayers ? "theme" : void 0);
        return f(A, $);
      }), u && !x && L.push(function(A) {
        var $, D;
        const P = A.theme, M = (D = ($ = P == null ? void 0 : P.components) == null ? void 0 : $[u]) == null ? void 0 : D.variants;
        return M ? ZS(A, M, [], A.theme.modularCssLayers ? "theme" : void 0) : null;
      }), y || L.push(es), Array.isArray(T[0])) {
        const w = T.shift(), A = new Array(I.length).fill(""), P = new Array(L.length).fill("");
        let M;
        M = [...A, ...w, ...P], M.raw = [...A, ...w.raw, ...P], I.unshift(M);
      }
      const O = [...I, ...T, ...L], _ = v(...O);
      return a.muiName && (_.muiName = a.muiName), _;
    };
    return v.withConfig && (S.withConfig = v.withConfig), S;
  };
}
function A_(e, t) {
  return void 0;
}
function R_(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function __(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
function co(e, t, n = !1) {
  const r = {
    ...t
  };
  for (const o in e)
    if (Object.prototype.hasOwnProperty.call(e, o)) {
      const i = o;
      if (i === "components" || i === "slots")
        r[i] = {
          ...e[i],
          ...r[i]
        };
      else if (i === "componentsProps" || i === "slotProps") {
        const s = e[i], a = t[i];
        if (!a)
          r[i] = s || {};
        else if (!s)
          r[i] = a;
        else {
          r[i] = {
            ...a
          };
          for (const l in s)
            if (Object.prototype.hasOwnProperty.call(s, l)) {
              const u = l;
              r[i][u] = co(s[u], a[u], n);
            }
        }
      } else i === "className" && n && t.className !== void 0 ? r.className = oe(e == null ? void 0 : e.className, t == null ? void 0 : t.className) : i === "style" && n && t.style ? r.style = {
        ...e == null ? void 0 : e.style,
        ...t == null ? void 0 : t.style
      } : r[i] === void 0 && (r[i] = e[i]);
    }
  return r;
}
function JS(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  return !t || !t.components || !t.components[n] || !t.components[n].defaultProps ? r : co(t.components[n].defaultProps, r);
}
function $_(e) {
  const {
    props: t,
    name: n,
    defaultTheme: r,
    themeId: o
  } = e;
  let i = qd(r);
  return i = i[o] || i, JS({
    theme: i,
    name: n,
    props: t
  });
}
const me = typeof window < "u" ? k.useLayoutEffect : k.useEffect;
function O_(e, t, n, r, o) {
  const [i, s] = k.useState(() => o && n ? n(e).matches : r ? r(e).matches : t);
  return me(() => {
    if (!n)
      return;
    const a = n(e), l = () => {
      s(a.matches);
    };
    return l(), a.addEventListener("change", l), () => {
      a.removeEventListener("change", l);
    };
  }, [e, n]), i;
}
const L_ = {
  ...Ta
}, ek = L_.useSyncExternalStore;
function N_(e, t, n, r, o) {
  const i = k.useCallback(() => t, [t]), s = k.useMemo(() => {
    if (o && n)
      return () => n(e).matches;
    if (r !== null) {
      const {
        matches: c
      } = r(e);
      return () => c;
    }
    return i;
  }, [i, e, r, o, n]), [a, l] = k.useMemo(() => {
    if (n === null)
      return [i, () => () => {
      }];
    const c = n(e);
    return [() => c.matches, (d) => (c.addEventListener("change", d), () => {
      c.removeEventListener("change", d);
    })];
  }, [i, n, e]);
  return ek(l, a, s);
}
function tk(e = {}) {
  const {
    themeId: t
  } = e;
  return function(r, o = {}) {
    let i = KS();
    i && t && (i = i[t] || i);
    const a = typeof window < "u" && typeof window.matchMedia < "u" ? window.matchMedia : null, {
      defaultMatches: l = !1,
      matchMedia: u,
      ssrMatchMedia: c = null,
      noSsr: d = !1
    } = JS({
      name: "MuiUseMediaQuery",
      props: o,
      theme: i
    }), p = k.useMemo(() => u !== void 0 ? u : a === null ? null : a.bind(window), [u, a]);
    let f = typeof r == "function" ? r(i) : r;
    return f = f.replace(/^@media( ?)/m, ""), f.includes("print") && console.warn(["MUI: You have provided a `print` query to the `useMediaQuery` hook.", "Using the print media query to modify print styles can lead to unexpected results.", "Consider using the `displayPrint` field in the `sx` prop instead.", "More information about `displayPrint` on our docs: https://mui.com/system/display/#display-in-print."].join(`
`)), (ek !== void 0 ? N_ : O_)(f, l, p, c, d);
  };
}
tk();
function D_(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
function ny(e, t = 0, n = 1) {
  return D_(e, t, n);
}
function F_(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((r) => r + r)), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, o) => o < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function fo(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return fo(F_(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(n))
    throw new Error(Or(9, e));
  let r = e.substring(t + 1, e.length - 1), o;
  if (n === "color") {
    if (r = r.split(" "), o = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(Or(10, o));
  } else
    r = r.split(",");
  return r = r.map((i) => parseFloat(i)), {
    type: n,
    values: r,
    colorSpace: o
  };
}
const z_ = (e) => {
  const t = fo(e);
  return t.values.slice(0, 3).map((n, r) => t.type.includes("hsl") && r !== 0 ? `${n}%` : n).join(" ");
}, ia = (e, t) => {
  try {
    return z_(e);
  } catch {
    return e;
  }
};
function Qd(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: r
  } = e;
  return t.includes("rgb") ? r = r.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.includes("color") ? r = `${n} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function nk(e) {
  e = fo(e);
  const {
    values: t
  } = e, n = t[0], r = t[1] / 100, o = t[2] / 100, i = r * Math.min(o, 1 - o), s = (u, c = (u + n / 30) % 12) => o - i * Math.max(Math.min(c - 3, 9 - c, 1), -1);
  let a = "rgb";
  const l = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (a += "a", l.push(t[3])), Qd({
    type: a,
    values: l
  });
}
function og(e) {
  e = fo(e);
  let t = e.type === "hsl" || e.type === "hsla" ? fo(nk(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function B_(e, t) {
  const n = og(e), r = og(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function kc(e, t) {
  return e = fo(e), t = ny(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Qd(e);
}
function Eo(e, t, n) {
  try {
    return kc(e, t);
  } catch {
    return e;
  }
}
function Zd(e, t) {
  if (e = fo(e), t = ny(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return Qd(e);
}
function Re(e, t, n) {
  try {
    return Zd(e, t);
  } catch {
    return e;
  }
}
function Jd(e, t) {
  if (e = fo(e), t = ny(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return Qd(e);
}
function _e(e, t, n) {
  try {
    return Jd(e, t);
  } catch {
    return e;
  }
}
function j_(e, t = 0.15) {
  return og(e) > 0.5 ? Zd(e, t) : Jd(e, t);
}
function du(e, t, n) {
  try {
    return j_(e, t);
  } catch {
    return e;
  }
}
const U_ = /* @__PURE__ */ k.createContext(), ks = () => k.useContext(U_) ?? !1, H_ = /* @__PURE__ */ k.createContext(void 0);
function W_(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  if (!t || !t.components || !t.components[n])
    return r;
  const o = t.components[n];
  return o.defaultProps ? co(o.defaultProps, r, t.components.mergeClassNameAndStyle) : !o.styleOverrides && !o.variants ? co(o, r, t.components.mergeClassNameAndStyle) : r;
}
function G_({
  props: e,
  name: t
}) {
  const n = k.useContext(H_);
  return W_({
    props: e,
    name: t,
    theme: {
      components: n
    }
  });
}
let Ax = 0;
function V_(e) {
  const [t, n] = k.useState(e), r = e || t;
  return k.useEffect(() => {
    t == null && (Ax += 1, n(`mui-${Ax}`));
  }, [t]), r;
}
const Y_ = {
  ...Ta
}, Rx = Y_.useId;
function po(e) {
  if (Rx !== void 0) {
    const t = Rx();
    return e ?? t;
  }
  return V_(e);
}
const _x = {
  theme: void 0
};
function K_(e) {
  let t, n;
  return function(o) {
    let i = t;
    return (i === void 0 || o.theme !== n) && (_x.theme = o.theme, i = QS(e(_x)), t = i, n = o.theme), i;
  };
}
function X_(e = "") {
  function t(...r) {
    if (!r.length)
      return "";
    const o = r[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...r.slice(1))})` : `, ${o}`;
  }
  return (r, ...o) => `var(--${e ? `${e}-` : ""}${r}${t(...o)})`;
}
const $x = (e, t, n, r = []) => {
  let o = e;
  t.forEach((i, s) => {
    s === t.length - 1 ? Array.isArray(o) ? o[Number(i)] = n : o && typeof o == "object" && (o[i] = n) : o && typeof o == "object" && (o[i] || (o[i] = r.includes(i) ? [] : {}), o = o[i]);
  });
}, q_ = (e, t, n) => {
  function r(o, i = [], s = []) {
    Object.entries(o).forEach(([a, l]) => {
      (!n || n && !n([...i, a])) && l != null && (typeof l == "object" && Object.keys(l).length > 0 ? r(l, [...i, a], Array.isArray(l) ? [...s, a] : s) : t([...i, a], l, s));
    });
  }
  r(e);
}, Q_ = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((r) => e.includes(r)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function $p(e, t) {
  const {
    prefix: n,
    shouldSkipGeneratingVar: r
  } = t || {}, o = {}, i = {}, s = {};
  return q_(
    e,
    (a, l, u) => {
      if ((typeof l == "string" || typeof l == "number") && (!r || !r(a, l))) {
        const c = `--${n ? `${n}-` : ""}${a.join("-")}`, d = Q_(a, l);
        Object.assign(o, {
          [c]: d
        }), $x(i, a, `var(${c})`, u), $x(s, a, `var(${c}, ${d})`, u);
      }
    },
    (a) => a[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: o,
    vars: i,
    varsWithDefaults: s
  };
}
function Z_(e, t = {}) {
  const {
    getSelector: n = y,
    disableCssColorScheme: r,
    colorSchemeSelector: o,
    enableContrastVars: i
  } = t, {
    colorSchemes: s = {},
    components: a,
    defaultColorScheme: l = "light",
    ...u
  } = e, {
    vars: c,
    css: d,
    varsWithDefaults: p
  } = $p(u, t);
  let f = p;
  const h = {}, {
    [l]: g,
    ...x
  } = s;
  if (Object.entries(x || {}).forEach(([C, S]) => {
    const {
      vars: b,
      css: I,
      varsWithDefaults: T
    } = $p(S, t);
    f = Ut(f, T), h[C] = {
      css: I,
      vars: b
    };
  }), g) {
    const {
      css: C,
      vars: S,
      varsWithDefaults: b
    } = $p(g, t);
    f = Ut(f, b), h[l] = {
      css: C,
      vars: S
    };
  }
  function y(C, S) {
    var I, T;
    let b = o;
    if (o === "class" && (b = ".%s"), o === "data" && (b = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (b = `[${o}="%s"]`), C) {
      if (b === "media")
        return e.defaultColorScheme === C ? ":root" : {
          [`@media (prefers-color-scheme: ${((T = (I = s[C]) == null ? void 0 : I.palette) == null ? void 0 : T.mode) || C})`]: {
            ":root": S
          }
        };
      if (b)
        return e.defaultColorScheme === C ? `:root, ${b.replace("%s", String(C))}` : b.replace("%s", String(C));
    }
    return ":root";
  }
  return {
    vars: f,
    generateThemeVars: () => {
      let C = {
        ...c
      };
      return Object.entries(h).forEach(([, {
        vars: S
      }]) => {
        C = Ut(C, S);
      }), C;
    },
    generateStyleSheets: () => {
      var L, O;
      const C = [], S = e.defaultColorScheme || "light";
      function b(_, w) {
        Object.keys(w).length && C.push(typeof _ == "string" ? {
          [_]: {
            ...w
          }
        } : _);
      }
      b(n(void 0, {
        ...d
      }), d);
      const {
        [S]: I,
        ...T
      } = h;
      if (I) {
        const {
          css: _
        } = I, w = (O = (L = s[S]) == null ? void 0 : L.palette) == null ? void 0 : O.mode, A = !r && w ? {
          colorScheme: w,
          ..._
        } : {
          ..._
        };
        b(n(S, {
          ...A
        }), A);
      }
      return Object.entries(T).forEach(([_, {
        css: w
      }]) => {
        var M, $;
        const A = ($ = (M = s[_]) == null ? void 0 : M.palette) == null ? void 0 : $.mode, P = !r && A ? {
          colorScheme: A,
          ...w
        } : {
          ...w
        };
        b(n(_, {
          ...P
        }), P);
      }), i && C.push({
        ":root": {
          // use double underscore to indicate that these are private variables
          "--__l-threshold": "0.7",
          "--__l": "clamp(0, (l / var(--__l-threshold) - 1) * -infinity, 1)",
          "--__a": "clamp(0.87, (l / var(--__l-threshold) - 1) * -infinity, 1)"
          // 0.87 is the default alpha value for black text.
        }
      }), C;
    }
  };
}
function J_(e) {
  return function(n) {
    return e === "media" ? `@media (prefers-color-scheme: ${n})` : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${n}"] &` : e === "class" ? `.${n} &` : e === "data" ? `[data-${n}] &` : `${e.replace("%s", n)} &` : "&";
  };
}
function ve(e, t, n = void 0) {
  const r = {};
  for (const o in e) {
    const i = e[o];
    let s = "", a = !0;
    for (let l = 0; l < i.length; l += 1) {
      const u = i[l];
      u && (s += (a === !0 ? "" : " ") + t(u), a = !1, n && n[u] && (s += " " + n[u]));
    }
    r[o] = s;
  }
  return r;
}
function Op(e, t) {
  var n, r, o;
  return /* @__PURE__ */ k.isValidElement(e) && t.indexOf(
    // For server components `muiName` is available in element.type._payload.value.muiName
    // relevant info - https://github.com/react/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    e.type.muiName ?? ((o = (r = (n = e.type) == null ? void 0 : n._payload) == null ? void 0 : r.value) == null ? void 0 : o.muiName)
  ) !== -1;
}
const Xa = {
  black: "#000",
  white: "#fff"
}, e$ = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, fi = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, pi = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, Hs = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, hi = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, gi = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, mi = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
};
function rk() {
  return {
    // The colors used to style the text.
    text: {
      // The most important text.
      primary: "rgba(0, 0, 0, 0.87)",
      // Secondary text.
      secondary: "rgba(0, 0, 0, 0.6)",
      // Disabled text have even lower visual prominence.
      disabled: "rgba(0, 0, 0, 0.38)"
    },
    // The color used to divide different elements.
    divider: "rgba(0, 0, 0, 0.12)",
    // The background colors used to style the surfaces.
    // Consistency between these values is important.
    background: {
      paper: Xa.white,
      default: Xa.white
    },
    // The colors used to style the action elements.
    action: {
      // The color of an active action like an icon button.
      active: "rgba(0, 0, 0, 0.54)",
      // The color of an hovered action.
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      // The color of a selected action.
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      // The color of a disabled action.
      disabled: "rgba(0, 0, 0, 0.26)",
      // The background color of a disabled action.
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12
    }
  };
}
const ok = rk();
function ik() {
  return {
    text: {
      primary: Xa.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)"
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: {
      paper: "#121212",
      default: "#121212"
    },
    action: {
      active: Xa.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24
    }
  };
}
const ig = ik();
function Ox(e, t, n, r) {
  const o = r.light || r, i = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = Jd(e.main, o) : t === "dark" && (e.dark = Zd(e.main, i)));
}
function Lx(e, t, n, r, o) {
  const i = o.light || o, s = o.dark || o * 1.5;
  t[n] || (t.hasOwnProperty(r) ? t[n] = t[r] : n === "light" ? t.light = `color-mix(in ${e}, ${t.main}, #fff ${(i * 100).toFixed(0)}%)` : n === "dark" && (t.dark = `color-mix(in ${e}, ${t.main}, #000 ${(s * 100).toFixed(0)}%)`));
}
function t$(e = "light") {
  return e === "dark" ? {
    main: hi[200],
    light: hi[50],
    dark: hi[400]
  } : {
    main: hi[700],
    light: hi[400],
    dark: hi[800]
  };
}
function n$(e = "light") {
  return e === "dark" ? {
    main: fi[200],
    light: fi[50],
    dark: fi[400]
  } : {
    main: fi[500],
    light: fi[300],
    dark: fi[700]
  };
}
function r$(e = "light") {
  return e === "dark" ? {
    main: pi[500],
    light: pi[300],
    dark: pi[700]
  } : {
    main: pi[700],
    light: pi[400],
    dark: pi[800]
  };
}
function o$(e = "light") {
  return e === "dark" ? {
    main: gi[400],
    light: gi[300],
    dark: gi[700]
  } : {
    main: gi[700],
    light: gi[500],
    dark: gi[900]
  };
}
function i$(e = "light") {
  return e === "dark" ? {
    main: mi[400],
    light: mi[300],
    dark: mi[700]
  } : {
    main: mi[800],
    light: mi[500],
    dark: mi[900]
  };
}
function s$(e = "light") {
  return e === "dark" ? {
    main: Hs[400],
    light: Hs[300],
    dark: Hs[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Hs[500],
    dark: Hs[900]
  };
}
function a$(e) {
  return `oklch(from ${e} var(--__l) 0 h / var(--__a))`;
}
function ry(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: r = 0.2,
    colorSpace: o,
    ...i
  } = e, s = e.primary || t$(t), a = e.secondary || n$(t), l = e.error || r$(t), u = e.info || o$(t), c = e.success || i$(t), d = e.warning || s$(t);
  function p(x) {
    return o ? a$(x) : B_(x, ig.text.primary) >= n ? ig.text.primary : ok.text.primary;
  }
  const f = ({
    color: x,
    name: y,
    mainShade: m = 500,
    lightShade: v = 300,
    darkShade: C = 700
  }) => {
    if (x = {
      ...x
    }, !x.main && x[m] && (x.main = x[m]), !x.hasOwnProperty("main"))
      throw new Error(Or(11, y ? ` (${y})` : "", m));
    if (typeof x.main != "string")
      throw new Error(Or(12, y ? ` (${y})` : "", JSON.stringify(x.main)));
    return o ? (Lx(o, x, "light", v, r), Lx(o, x, "dark", C, r)) : (Ox(x, "light", v, r), Ox(x, "dark", C, r)), x.contrastText || (x.contrastText = p(x.main)), x;
  };
  let h;
  return t === "light" ? h = rk() : t === "dark" && (h = ik()), Ut({
    // A collection of common colors.
    common: {
      ...Xa
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: f({
      color: s,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: f({
      color: a,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: f({
      color: l,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: f({
      color: d,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: f({
      color: u,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: f({
      color: c,
      name: "success"
    }),
    // The grey colors.
    grey: e$,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: n,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: p,
    // Generate a rich color object.
    augmentColor: f,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: r,
    // The light and dark mode object.
    ...h
  }, i);
}
function l$(e) {
  const t = {};
  return Object.entries(e).forEach((r) => {
    const [o, i] = r;
    typeof i == "object" && (t[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), t;
}
function u$(e, t) {
  return {
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    },
    ...t
  };
}
function c$(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Nx = {
  textTransform: "uppercase"
}, Dx = '"Roboto", "Helvetica", "Arial", sans-serif';
function d$(e, t) {
  const {
    fontFamily: n = Dx,
    // The default font size of the Material Specification.
    fontSize: r = 14,
    // px
    fontWeightLight: o = 300,
    fontWeightRegular: i = 400,
    fontWeightMedium: s = 500,
    fontWeightBold: a = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: l = 16,
    // Apply the CSS properties to all the variants.
    allVariants: u,
    pxToRem: c,
    ...d
  } = typeof t == "function" ? t(e) : t, p = r / 14, f = c || ((x) => `${x / l * p}rem`), h = (x, y, m, v, C) => ({
    fontFamily: n,
    fontWeight: x,
    fontSize: f(y),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: m,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...n === Dx ? {
      letterSpacing: `${c$(v / y)}em`
    } : {},
    ...C,
    ...u
  }), g = {
    h1: h(o, 96, 1.167, -1.5),
    h2: h(o, 60, 1.2, -0.5),
    h3: h(i, 48, 1.167, 0),
    h4: h(i, 34, 1.235, 0.25),
    h5: h(i, 24, 1.334, 0),
    h6: h(s, 20, 1.6, 0.15),
    subtitle1: h(i, 16, 1.75, 0.15),
    subtitle2: h(s, 14, 1.57, 0.1),
    body1: h(i, 16, 1.5, 0.15),
    body2: h(i, 14, 1.43, 0.15),
    button: h(s, 14, 1.75, 0.4, Nx),
    caption: h(i, 12, 1.66, 0.4),
    overline: h(i, 12, 2.66, 1, Nx),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Ut({
    htmlFontSize: l,
    pxToRem: f,
    fontFamily: n,
    fontSize: r,
    fontWeightLight: o,
    fontWeightRegular: i,
    fontWeightMedium: s,
    fontWeightBold: a,
    ...g
  }, d, {
    clone: !1
    // No need to clone deep
  });
}
const f$ = 0.2, p$ = 0.14, h$ = 0.12;
function Ue(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${f$})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${p$})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${h$})`].join(",");
}
const g$ = ["none", Ue(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Ue(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Ue(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Ue(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Ue(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Ue(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Ue(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Ue(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Ue(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Ue(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Ue(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Ue(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Ue(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Ue(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Ue(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Ue(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Ue(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Ue(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Ue(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Ue(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Ue(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Ue(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Ue(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Ue(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], m$ = ["all"], y$ = {}, v$ = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, x$ = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function Fx(e) {
  return `${Math.round(e)}ms`;
}
function C$(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function w$(e) {
  const t = {
    ...e
  };
  delete t.reducedMotion;
  const n = {
    ...v$,
    ...t.easing
  }, r = {
    ...x$,
    ...t.duration
  }, o = (s = m$, a = y$) => {
    const {
      duration: l = r.standard,
      easing: u = n.easeInOut,
      delay: c = 0,
      ...d
    } = a;
    return (Array.isArray(s) ? s : [s]).map((p) => `${p} ${typeof l == "string" ? l : Fx(l)} ${u} ${typeof c == "string" ? c : Fx(c)}`).join(",");
  }, i = t.create ?? o;
  return {
    getAutoHeightDuration: C$,
    create: i,
    ...t,
    easing: n,
    duration: r
  };
}
const b$ = {};
function S$(e = b$) {
  return {
    reducedMotion: "never",
    ...e
  };
}
const k$ = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function I$(e) {
  return Cr(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function sk(e = {}) {
  const t = {
    ...e
  };
  function n(r) {
    const o = Object.entries(r);
    for (let i = 0; i < o.length; i++) {
      const [s, a] = o[i];
      !I$(a) || s.startsWith("unstable_") || s.startsWith("internal_") ? delete r[s] : Cr(a) && (r[s] = {
        ...a
      }, n(r[s]));
    }
  }
  return n(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.motion = { reducedMotion: 'never', ...theme.motion };
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function zx(e) {
  return typeof e == "number" ? `${(e * 100).toFixed(0)}%` : `calc((${e}) * 100%)`;
}
const T$ = (e) => {
  if (!Number.isNaN(+e))
    return +e;
  const t = e.match(/\d*\.?\d+/g);
  if (!t)
    return 0;
  let n = 0;
  for (let r = 0; r < t.length; r += 1)
    n += +t[r];
  return n;
};
function E$(e) {
  Object.assign(e, {
    alpha(t, n) {
      const r = this || e;
      return r.colorSpace ? `oklch(from ${t} l c h / ${typeof n == "string" ? `calc(${n})` : n})` : r.vars ? `rgba(${t.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, "var(--$1Channel)")} / ${typeof n == "string" ? `calc(${n})` : n})` : kc(t, T$(n));
    },
    lighten(t, n) {
      const r = this || e;
      return r.colorSpace ? `color-mix(in ${r.colorSpace}, ${t}, #fff ${zx(n)})` : Jd(t, n);
    },
    darken(t, n) {
      const r = this || e;
      return r.colorSpace ? `color-mix(in ${r.colorSpace}, ${t}, #000 ${zx(n)})` : Zd(t, n);
    }
  });
}
function sg(e = {}, ...t) {
  const {
    breakpoints: n,
    mixins: r = {},
    spacing: o,
    palette: i = {},
    motion: s = {},
    transitions: a = {},
    typography: l = {},
    shape: u,
    colorSpace: c,
    ...d
  } = e;
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateThemeVars === void 0)
    throw new Error(Or(22));
  const p = ry({
    ...i,
    colorSpace: c
  }), f = ty(e);
  let h = Ut(f, {
    mixins: u$(f.breakpoints, r),
    palette: p,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: g$.slice(),
    typography: d$(p, l),
    motion: S$(s),
    transitions: w$(a),
    zIndex: {
      ...k$
    }
  });
  return h = Ut(h, d), h = t.reduce((g, x) => Ut(g, x), h), delete h.transitions.reducedMotion, h.unstable_sxConfig = {
    ...Xd,
    ...d == null ? void 0 : d.unstable_sxConfig
  }, h.unstable_sx = function(x) {
    return es({
      sx: x,
      theme: this
    });
  }, h.toRuntimeSource = sk, E$(h), h;
}
function ag(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const P$ = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const n = ag(t);
  return `linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`;
});
function ak(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function lk(e) {
  return e === "dark" ? P$ : [];
}
function M$(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: n,
    overlays: r,
    colorSpace: o,
    ...i
  } = e, s = ry({
    ...t,
    colorSpace: o
  });
  return {
    palette: s,
    opacity: {
      ...ak(s.mode),
      ...n
    },
    overlays: r || lk(s.mode),
    ...i
  };
}
function A$(e) {
  var t;
  return e[0] === "motion" || !!e[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const R$ = (e) => [...[...Array(25)].map((t, n) => `--${e ? `${e}-` : ""}overlays-${n}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], _$ = (e) => (t, n) => {
  const r = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const s = {};
      return R$(e.cssVarPrefix).forEach((a) => {
        s[a] = n[a], delete n[a];
      }), i === "media" ? {
        [r]: n,
        "@media (prefers-color-scheme: dark)": {
          [r]: s
        }
      } : i ? {
        [i.replace("%s", t)]: s,
        [`${r}, ${i.replace("%s", t)}`]: n
      } : {
        [r]: {
          ...n,
          ...s
        }
      };
    }
    if (i && i !== "media")
      return `${r}, ${i.replace("%s", String(t))}`;
  } else if (t) {
    if (i === "media")
      return {
        [`@media (prefers-color-scheme: ${String(t)})`]: {
          [r]: n
        }
      };
    if (i)
      return i.replace("%s", String(t));
  }
  return r;
};
function $$(e, t) {
  t.forEach((n) => {
    e[n] || (e[n] = {});
  });
}
function B(e, t, n) {
  !e[t] && n && (e[t] = n);
}
function sa(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : nk(e);
}
function mr(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = ia(sa(e[t])));
}
function O$(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const qn = (e) => {
  try {
    return e();
  } catch {
  }
}, L$ = (e = "mui") => X_(e);
function Lp(e, t, n, r, o) {
  if (!n)
    return;
  n = n === !0 ? {} : n;
  const i = o === "dark" ? "dark" : "light";
  if (!r) {
    t[o] = M$({
      ...n,
      palette: {
        mode: i,
        ...n == null ? void 0 : n.palette
      },
      colorSpace: e
    });
    return;
  }
  const {
    palette: s,
    ...a
  } = sg({
    ...r,
    palette: {
      mode: i,
      ...n == null ? void 0 : n.palette
    },
    colorSpace: e
  });
  return t[o] = {
    ...n,
    palette: s,
    opacity: {
      ...ak(i),
      ...n == null ? void 0 : n.opacity
    },
    overlays: (n == null ? void 0 : n.overlays) || lk(i)
  }, a;
}
function N$(e = {}, ...t) {
  const {
    colorSchemes: n = {
      light: !0
    },
    defaultColorScheme: r,
    disableCssColorScheme: o = !1,
    cssVarPrefix: i = "mui",
    nativeColor: s = !1,
    shouldSkipGeneratingVar: a = A$,
    colorSchemeSelector: l = n.light && n.dark ? "media" : void 0,
    rootSelector: u = ":root",
    ...c
  } = e, d = Object.keys(n)[0], p = r || (n.light && d !== "light" ? "light" : d), f = L$(i), {
    [p]: h,
    light: g,
    dark: x,
    ...y
  } = n, m = {
    ...y
  };
  let v = h;
  if ((p === "dark" && !("dark" in n) || p === "light" && !("light" in n)) && (v = !0), !v)
    throw new Error(Or(21, p));
  let C;
  s && (C = "oklch");
  const S = Lp(C, m, v, c, p);
  g && !m.light && Lp(C, m, g, void 0, "light"), x && !m.dark && Lp(C, m, x, void 0, "dark");
  let b = {
    defaultColorScheme: p,
    ...S,
    cssVarPrefix: i,
    colorSchemeSelector: l,
    rootSelector: u,
    getCssVar: f,
    colorSchemes: m,
    font: {
      ...l$(S.typography),
      ...S.font
    },
    spacing: O$(c.spacing)
  };
  Object.keys(b.colorSchemes).forEach((_) => {
    const w = b.colorSchemes[_].palette, A = (M) => {
      const $ = M.split("-"), D = $[1], R = $[2];
      return f(M, w[D][R]);
    };
    w.mode === "light" && (B(w.common, "background", "#fff"), B(w.common, "onBackground", "#000")), w.mode === "dark" && (B(w.common, "background", "#000"), B(w.common, "onBackground", "#fff"));
    function P(M, $, D) {
      if (C) {
        let R;
        return M === Eo && (R = `transparent ${((1 - D) * 100).toFixed(0)}%`), M === Re && (R = `#000 ${(D * 100).toFixed(0)}%`), M === _e && (R = `#fff ${(D * 100).toFixed(0)}%`), `color-mix(in ${C}, ${$}, ${R})`;
      }
      return M($, D);
    }
    if ($$(w, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), w.mode === "light") {
      B(w.Alert, "errorColor", P(Re, s ? f("palette-error-light") : w.error.light, 0.6)), B(w.Alert, "infoColor", P(Re, s ? f("palette-info-light") : w.info.light, 0.6)), B(w.Alert, "successColor", P(Re, s ? f("palette-success-light") : w.success.light, 0.6)), B(w.Alert, "warningColor", P(Re, s ? f("palette-warning-light") : w.warning.light, 0.6)), B(w.Alert, "errorFilledBg", A("palette-error-main")), B(w.Alert, "infoFilledBg", A("palette-info-main")), B(w.Alert, "successFilledBg", A("palette-success-main")), B(w.Alert, "warningFilledBg", A("palette-warning-main")), B(w.Alert, "errorFilledColor", qn(() => w.getContrastText(w.error.main))), B(w.Alert, "infoFilledColor", qn(() => w.getContrastText(w.info.main))), B(w.Alert, "successFilledColor", qn(() => w.getContrastText(w.success.main))), B(w.Alert, "warningFilledColor", qn(() => w.getContrastText(w.warning.main))), B(w.Alert, "errorStandardBg", P(_e, s ? f("palette-error-light") : w.error.light, 0.9)), B(w.Alert, "infoStandardBg", P(_e, s ? f("palette-info-light") : w.info.light, 0.9)), B(w.Alert, "successStandardBg", P(_e, s ? f("palette-success-light") : w.success.light, 0.9)), B(w.Alert, "warningStandardBg", P(_e, s ? f("palette-warning-light") : w.warning.light, 0.9)), B(w.Alert, "errorIconColor", A("palette-error-main")), B(w.Alert, "infoIconColor", A("palette-info-main")), B(w.Alert, "successIconColor", A("palette-success-main")), B(w.Alert, "warningIconColor", A("palette-warning-main")), B(w.AppBar, "defaultBg", A("palette-grey-100")), B(w.Avatar, "defaultBg", A("palette-grey-400")), B(w.Button, "inheritContainedBg", A("palette-grey-300")), B(w.Button, "inheritContainedHoverBg", A("palette-grey-A100")), B(w.Chip, "defaultBorder", A("palette-grey-400")), B(w.Chip, "defaultAvatarColor", A("palette-grey-700")), B(w.Chip, "defaultIconColor", A("palette-grey-700")), B(w.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), B(w.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), B(w.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), B(w.LinearProgress, "primaryBg", P(_e, s ? f("palette-primary-main") : w.primary.main, 0.62)), B(w.LinearProgress, "secondaryBg", P(_e, s ? f("palette-secondary-main") : w.secondary.main, 0.62)), B(w.LinearProgress, "errorBg", P(_e, s ? f("palette-error-main") : w.error.main, 0.62)), B(w.LinearProgress, "infoBg", P(_e, s ? f("palette-info-main") : w.info.main, 0.62)), B(w.LinearProgress, "successBg", P(_e, s ? f("palette-success-main") : w.success.main, 0.62)), B(w.LinearProgress, "warningBg", P(_e, s ? f("palette-warning-light") : w.warning.main, 0.62)), B(w.Skeleton, "bg", C ? P(Eo, s ? f("palette-text-primary") : w.text.primary, 0.11) : `rgba(${A("palette-text-primaryChannel")} / 0.11)`), B(w.Slider, "primaryTrack", P(_e, s ? f("palette-primary-main") : w.primary.main, 0.62)), B(w.Slider, "secondaryTrack", P(_e, s ? f("palette-secondary-main") : w.secondary.main, 0.62)), B(w.Slider, "errorTrack", P(_e, s ? f("palette-error-main") : w.error.main, 0.62)), B(w.Slider, "infoTrack", P(_e, s ? f("palette-info-main") : w.info.main, 0.62)), B(w.Slider, "successTrack", P(_e, s ? f("palette-success-main") : w.success.main, 0.62)), B(w.Slider, "warningTrack", P(_e, s ? f("palette-warning-main") : w.warning.main, 0.62));
      const M = C ? P(Re, s ? f("palette-background-default") : w.background.default, 0.6825) : du(w.background.default, 0.8);
      B(w.SnackbarContent, "bg", M), B(w.SnackbarContent, "color", qn(() => C ? ig.text.primary : w.getContrastText(M))), B(w.SpeedDialAction, "fabHoverBg", du(w.background.paper, 0.15)), B(w.StepConnector, "border", A("palette-grey-400")), B(w.StepContent, "border", A("palette-grey-400")), B(w.Switch, "defaultColor", A("palette-common-white")), B(w.Switch, "defaultDisabledColor", A("palette-grey-100")), B(w.Switch, "primaryDisabledColor", P(_e, s ? f("palette-primary-main") : w.primary.main, 0.62)), B(w.Switch, "secondaryDisabledColor", P(_e, s ? f("palette-secondary-main") : w.secondary.main, 0.62)), B(w.Switch, "errorDisabledColor", P(_e, s ? f("palette-error-main") : w.error.main, 0.62)), B(w.Switch, "infoDisabledColor", P(_e, s ? f("palette-info-main") : w.info.main, 0.62)), B(w.Switch, "successDisabledColor", P(_e, s ? f("palette-success-main") : w.success.main, 0.62)), B(w.Switch, "warningDisabledColor", P(_e, s ? f("palette-warning-main") : w.warning.main, 0.62)), B(w.TableCell, "border", P(_e, Eo(s ? f("palette-divider") : w.divider, 1), 0.88)), B(w.Tooltip, "bg", P(Eo, s ? f("palette-grey-700") : w.grey[700], 0.92));
    }
    if (w.mode === "dark") {
      B(w.Alert, "errorColor", P(_e, s ? f("palette-error-light") : w.error.light, 0.6)), B(w.Alert, "infoColor", P(_e, s ? f("palette-info-light") : w.info.light, 0.6)), B(w.Alert, "successColor", P(_e, s ? f("palette-success-light") : w.success.light, 0.6)), B(w.Alert, "warningColor", P(_e, s ? f("palette-warning-light") : w.warning.light, 0.6)), B(w.Alert, "errorFilledBg", A("palette-error-dark")), B(w.Alert, "infoFilledBg", A("palette-info-dark")), B(w.Alert, "successFilledBg", A("palette-success-dark")), B(w.Alert, "warningFilledBg", A("palette-warning-dark")), B(w.Alert, "errorFilledColor", qn(() => w.getContrastText(w.error.dark))), B(w.Alert, "infoFilledColor", qn(() => w.getContrastText(w.info.dark))), B(w.Alert, "successFilledColor", qn(() => w.getContrastText(w.success.dark))), B(w.Alert, "warningFilledColor", qn(() => w.getContrastText(w.warning.dark))), B(w.Alert, "errorStandardBg", P(Re, s ? f("palette-error-light") : w.error.light, 0.9)), B(w.Alert, "infoStandardBg", P(Re, s ? f("palette-info-light") : w.info.light, 0.9)), B(w.Alert, "successStandardBg", P(Re, s ? f("palette-success-light") : w.success.light, 0.9)), B(w.Alert, "warningStandardBg", P(Re, s ? f("palette-warning-light") : w.warning.light, 0.9)), B(w.Alert, "errorIconColor", A("palette-error-main")), B(w.Alert, "infoIconColor", A("palette-info-main")), B(w.Alert, "successIconColor", A("palette-success-main")), B(w.Alert, "warningIconColor", A("palette-warning-main")), B(w.AppBar, "defaultBg", A("palette-grey-900")), B(w.AppBar, "darkBg", A("palette-background-paper")), B(w.AppBar, "darkColor", A("palette-text-primary")), B(w.Avatar, "defaultBg", A("palette-grey-600")), B(w.Button, "inheritContainedBg", A("palette-grey-800")), B(w.Button, "inheritContainedHoverBg", A("palette-grey-700")), B(w.Chip, "defaultBorder", A("palette-grey-700")), B(w.Chip, "defaultAvatarColor", A("palette-grey-300")), B(w.Chip, "defaultIconColor", A("palette-grey-300")), B(w.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), B(w.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), B(w.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), B(w.LinearProgress, "primaryBg", P(Re, s ? f("palette-primary-main") : w.primary.main, 0.5)), B(w.LinearProgress, "secondaryBg", P(Re, s ? f("palette-secondary-main") : w.secondary.main, 0.5)), B(w.LinearProgress, "errorBg", P(Re, s ? f("palette-error-main") : w.error.main, 0.5)), B(w.LinearProgress, "infoBg", P(Re, s ? f("palette-info-main") : w.info.main, 0.5)), B(w.LinearProgress, "successBg", P(Re, s ? f("palette-success-main") : w.success.main, 0.5)), B(w.LinearProgress, "warningBg", P(Re, s ? f("palette-warning-main") : w.warning.main, 0.5)), B(w.Skeleton, "bg", C ? P(Eo, s ? f("palette-text-primary") : w.text.primary, 0.13) : `rgba(${A("palette-text-primaryChannel")} / 0.13)`), B(w.Slider, "primaryTrack", P(Re, s ? f("palette-primary-main") : w.primary.main, 0.5)), B(w.Slider, "secondaryTrack", P(Re, s ? f("palette-secondary-main") : w.secondary.main, 0.5)), B(w.Slider, "errorTrack", P(Re, s ? f("palette-error-main") : w.error.main, 0.5)), B(w.Slider, "infoTrack", P(Re, s ? f("palette-info-main") : w.info.main, 0.5)), B(w.Slider, "successTrack", P(Re, s ? f("palette-success-main") : w.success.main, 0.5)), B(w.Slider, "warningTrack", P(Re, s ? f("palette-warning-light") : w.warning.main, 0.5));
      const M = C ? P(_e, s ? f("palette-background-default") : w.background.default, 0.985) : du(w.background.default, 0.98);
      B(w.SnackbarContent, "bg", M), B(w.SnackbarContent, "color", qn(() => C ? ok.text.primary : w.getContrastText(M))), B(w.SpeedDialAction, "fabHoverBg", du(w.background.paper, 0.15)), B(w.StepConnector, "border", A("palette-grey-600")), B(w.StepContent, "border", A("palette-grey-600")), B(w.Switch, "defaultColor", A("palette-grey-300")), B(w.Switch, "defaultDisabledColor", A("palette-grey-600")), B(w.Switch, "primaryDisabledColor", P(Re, s ? f("palette-primary-main") : w.primary.main, 0.55)), B(w.Switch, "secondaryDisabledColor", P(Re, s ? f("palette-secondary-main") : w.secondary.main, 0.55)), B(w.Switch, "errorDisabledColor", P(Re, s ? f("palette-error-main") : w.error.main, 0.55)), B(w.Switch, "infoDisabledColor", P(Re, s ? f("palette-info-main") : w.info.main, 0.55)), B(w.Switch, "successDisabledColor", P(Re, s ? f("palette-success-main") : w.success.main, 0.55)), B(w.Switch, "warningDisabledColor", P(Re, s ? f("palette-warning-light") : w.warning.main, 0.55)), B(w.TableCell, "border", P(Re, Eo(s ? f("palette-divider") : w.divider, 1), 0.68)), B(w.Tooltip, "bg", P(Eo, s ? f("palette-grey-700") : w.grey[700], 0.92));
    }
    s || (mr(w.background, "default"), mr(w.background, "paper"), mr(w.common, "background"), mr(w.common, "onBackground"), mr(w, "divider")), Object.keys(w).forEach((M) => {
      const $ = w[M];
      M !== "tonalOffset" && !s && $ && typeof $ == "object" && ($.main && B(w[M], "mainChannel", ia(sa($.main))), $.light && B(w[M], "lightChannel", ia(sa($.light))), $.dark && B(w[M], "darkChannel", ia(sa($.dark))), $.contrastText && B(w[M], "contrastTextChannel", ia(sa($.contrastText))), M === "text" && (mr(w[M], "primary"), mr(w[M], "secondary")), M === "action" && ($.active && mr(w[M], "active"), $.selected && mr(w[M], "selected")));
    });
  }), b = t.reduce((_, w) => Ut(_, w), b);
  const I = {
    prefix: i,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: a,
    getSelector: _$(b),
    enableContrastVars: s
  }, {
    vars: T,
    generateThemeVars: L,
    generateStyleSheets: O
  } = Z_(b, I);
  return b.vars = T, Object.entries(b.colorSchemes[b.defaultColorScheme]).forEach(([_, w]) => {
    b[_] = w;
  }), b.generateThemeVars = L, b.generateStyleSheets = O, b.generateSpacing = function() {
    return YS(c.spacing, Qm(this));
  }, b.getColorSchemeSelector = J_(l), b.spacing = b.generateSpacing(), b.shouldSkipGeneratingVar = a, b.unstable_sxConfig = {
    ...Xd,
    ...c == null ? void 0 : c.unstable_sxConfig
  }, b.unstable_sx = function(w) {
    return es({
      sx: w,
      theme: this
    });
  }, b.internal_cache = {}, b.toRuntimeSource = sk, b;
}
function Bx(e, t, n) {
  e.colorSchemes && n && (e.colorSchemes[t] = {
    ...n !== !0 && n,
    palette: ry({
      ...n === !0 ? {} : n.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function uk(e = {}, ...t) {
  const {
    palette: n,
    cssVariables: r = !1,
    colorSchemes: o = n ? void 0 : {
      light: !0
    },
    defaultColorScheme: i = n == null ? void 0 : n.mode,
    ...s
  } = e, a = i || "light", l = o == null ? void 0 : o[a], u = {
    ...o,
    ...n ? {
      [a]: {
        ...typeof l != "boolean" && l,
        palette: n
      }
    } : void 0
  };
  if (r === !1) {
    if (!("colorSchemes" in e))
      return sg(e, ...t);
    let c = n;
    "palette" in e || u[a] && (u[a] !== !0 ? c = u[a].palette : a === "dark" && (c = {
      mode: "dark"
    }));
    const d = sg({
      ...e,
      palette: c
    }, ...t);
    return d.defaultColorScheme = a, d.colorSchemes = u, d.palette.mode === "light" && (d.colorSchemes.light = {
      ...u.light !== !0 && u.light,
      palette: d.palette
    }, Bx(d, "dark", u.dark)), d.palette.mode === "dark" && (d.colorSchemes.dark = {
      ...u.dark !== !0 && u.dark,
      palette: d.palette
    }, Bx(d, "light", u.light)), d;
  }
  return !n && !("light" in u) && a === "light" && (u.light = !0), N$({
    ...s,
    colorSchemes: u,
    defaultColorScheme: a,
    ...typeof r != "boolean" && r
  }, ...t);
}
function Ic(e) {
  return typeof e == "string";
}
function ck(e, t = 166) {
  let n;
  function r(...o) {
    const i = () => {
      e.apply(this, o);
    };
    clearTimeout(n), n = setTimeout(i, t);
  }
  return r.clear = () => {
    clearTimeout(n);
  }, r;
}
function Ze(...e) {
  const t = k.useRef(void 0), n = k.useCallback((r) => {
    const o = e.map((i) => {
      if (i == null)
        return null;
      if (typeof i == "function") {
        const s = i, a = s(r);
        return typeof a == "function" ? a : () => {
          s(null);
        };
      }
      return i.current = r, () => {
        i.current = null;
      };
    });
    return () => {
      o.forEach((i) => i == null ? void 0 : i());
    };
  }, e);
  return k.useMemo(() => e.every((r) => r == null) ? null : (r) => {
    t.current && (t.current(), t.current = void 0), r != null && (t.current = n(r));
  }, e);
}
function de(e) {
  const t = k.useRef(e);
  return me(() => {
    t.current = e;
  }), k.useRef((...n) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...n)
  )).current;
}
function gt(e) {
  return e && e.ownerDocument || document;
}
function cr(e) {
  return gt(e).defaultView || window;
}
function fu(e) {
  return parseInt(e, 10) || 0;
}
const D$ = {
  shadow: {
    // Visibility needed to hide the extra text area on iPads
    visibility: "hidden",
    // Remove from the content flow
    position: "absolute",
    // Ignore the scrollbar width
    overflow: "hidden",
    height: 0,
    top: 0,
    left: 0,
    // Create a new layer, increase the isolation of the computed values
    transform: "translateZ(0)"
  }
};
function F$(e) {
  for (const t in e)
    return !1;
  return !0;
}
function jx(e) {
  return F$(e) || e.outerHeightStyle === 0 && !e.overflowing;
}
const z$ = /* @__PURE__ */ k.forwardRef(function(t, n) {
  const {
    onChange: r,
    maxRows: o,
    minRows: i = 1,
    style: s,
    value: a,
    ...l
  } = t, {
    current: u
  } = k.useRef(a != null), c = k.useRef(null), d = Ze(n, c), p = k.useRef(null), f = k.useRef(null), h = k.useCallback(() => {
    const v = c.current, C = f.current;
    if (!v || !C)
      return;
    const b = cr(v).getComputedStyle(v);
    if (b.width === "0px")
      return {
        outerHeightStyle: 0,
        overflowing: !1
      };
    C.style.width = b.width, C.value = v.value || t.placeholder || "x", C.value.slice(-1) === `
` && (C.value += " ");
    const I = b.boxSizing, T = fu(b.paddingBottom) + fu(b.paddingTop), L = fu(b.borderBottomWidth) + fu(b.borderTopWidth), O = C.scrollHeight;
    C.value = "x";
    const _ = C.scrollHeight;
    let w = O;
    i && (w = Math.max(Number(i) * _, w)), o && (w = Math.min(Number(o) * _, w)), w = Math.max(w, _);
    const A = w + (I === "border-box" ? T + L : 0), P = Math.abs(w - O) <= 1;
    return {
      outerHeightStyle: A,
      overflowing: P
    };
  }, [o, i, t.placeholder]), g = de(() => {
    const v = c.current, C = h();
    if (!v || !C || jx(C))
      return !1;
    const S = C.outerHeightStyle;
    return p.current != null && p.current !== S;
  }), x = k.useCallback(() => {
    const v = c.current, C = h();
    if (!v || !C || jx(C))
      return;
    const S = C.outerHeightStyle;
    p.current !== S && (p.current = S, v.style.height = `${S}px`), v.style.overflow = C.overflowing ? "hidden" : "";
  }, [h]), y = k.useRef(-1);
  me(() => {
    const v = ck(x), C = c == null ? void 0 : c.current;
    if (!C)
      return;
    const S = cr(C);
    S.addEventListener("resize", v);
    let b;
    return typeof ResizeObserver < "u" && (b = new ResizeObserver(() => {
      g() && (b.unobserve(C), cancelAnimationFrame(y.current), x(), y.current = requestAnimationFrame(() => {
        b.observe(C);
      }));
    }), b.observe(C)), () => {
      v.clear(), cancelAnimationFrame(y.current), S.removeEventListener("resize", v), b && b.disconnect();
    };
  }, [h, x, g]), me(() => {
    x();
  });
  const m = (v) => {
    u || x();
    const C = v.target, S = C.value.length, b = C.value.endsWith(`
`), I = C.selectionStart === S;
    b && I && C.setSelectionRange(S, S), r && r(v);
  };
  return /* @__PURE__ */ E.jsxs(k.Fragment, {
    children: [/* @__PURE__ */ E.jsx("textarea", {
      value: a,
      onChange: m,
      ref: d,
      rows: i,
      style: s,
      ...l
    }), /* @__PURE__ */ E.jsx("textarea", {
      "aria-hidden": !0,
      className: t.className,
      readOnly: !0,
      ref: f,
      tabIndex: -1,
      style: {
        ...D$.shadow,
        ...s,
        paddingTop: 0,
        paddingBottom: 0
      }
    })]
  });
}), oy = /* @__PURE__ */ k.createContext(void 0);
function vl({
  props: e,
  states: t
}) {
  const n = k.useContext(oy), r = {};
  return t.forEach((o) => {
    const i = e[o];
    r[o] = i === void 0 && n ? n[o] : i;
  }), [r, n];
}
const ef = uk();
function tn() {
  const e = qd(ef);
  return e[ws] || e;
}
function B$(e) {
  return /* @__PURE__ */ E.jsx(b_, {
    ...e,
    defaultTheme: ef,
    themeId: ws
  });
}
function dk(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const On = (e) => dk(e) && e !== "classes", K = M_({
  themeId: ws,
  defaultTheme: ef,
  rootShouldForwardProp: On
});
function j$(e) {
  return function(n) {
    return (
      // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
      /* @__PURE__ */ E.jsx(B$, {
        styles: typeof e == "function" ? (r) => e({
          theme: r,
          ...n
        }) : e
      })
    );
  };
}
const ze = K_;
function Be(e) {
  return G_(e);
}
function Sr(e) {
  var n;
  let t = e.activeElement;
  for (; ((n = t == null ? void 0 : t.shadowRoot) == null ? void 0 : n.activeElement) != null; )
    t = t.shadowRoot.activeElement;
  return t;
}
function Ux(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function Tc(e, t = !1) {
  return e && (Ux(e.value) && e.value !== "" || t && Ux(e.defaultValue) && e.defaultValue !== "");
}
function U$(e) {
  return e.startAdornment;
}
function H$(e) {
  return Ce("MuiInputBase", e);
}
const ts = ce("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputTypeSearch"]), W$ = {
  transition: "none"
};
function G$(e, t) {
  return e === "always" ? t : e === "system" ? {
    "@media (prefers-reduced-motion: reduce)": t
  } : null;
}
const iy = (e) => e.scrollTop, fk = {}, V$ = ["all"], Y$ = {};
function wn(e, t) {
  return (n) => {
    if (t) {
      const r = e.current;
      n === void 0 ? t(r) : t(r, n);
    }
  };
}
function pk(e, t, n, r, o, i) {
  const s = e === "exited" && !t ? r : n[e] || n.exited;
  return o || i ? {
    ...s,
    ...o,
    ...i
  } : s;
}
function Ec(e, t) {
  const {
    timeout: n,
    easing: r,
    style: o = fk
  } = e;
  return {
    duration: o.transitionDuration ?? (typeof n == "number" ? n : n[t.mode] || 0),
    easing: o.transitionTimingFunction ?? (typeof r == "object" ? r[t.mode] : r),
    delay: o.transitionDelay
  };
}
function sy(e, t) {
  var r;
  const n = t ?? W$;
  return G$((r = e.motion) == null ? void 0 : r.reducedMotion, n);
}
function dt(e, t = V$, n = Y$) {
  var s, a;
  const r = (a = (s = e.transitions) == null ? void 0 : s.create) == null ? void 0 : a.call(s, t, n), o = sy(e);
  if (r === void 0)
    return o ?? fk;
  const i = {
    transition: r
  };
  return o ? {
    ...i,
    ...o
  } : i;
}
var Hx;
const lg = "mui-auto-fill", Pc = "mui-auto-fill-cancel", tf = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.formControl && t.formControl, n.startAdornment && t.adornedStart, n.endAdornment && t.adornedEnd, n.error && t.error, n.size === "small" && t.sizeSmall, n.multiline && t.multiline, n.color && t[`color${Ee(n.color)}`], n.fullWidth && t.fullWidth, n.hiddenLabel && t.hiddenLabel];
}, nf = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.input, n.type === "search" && t.inputTypeSearch];
}, K$ = (e) => {
  const {
    classes: t,
    color: n,
    disabled: r,
    error: o,
    endAdornment: i,
    focused: s,
    formControl: a,
    fullWidth: l,
    hiddenLabel: u,
    multiline: c,
    readOnly: d,
    size: p,
    startAdornment: f,
    type: h
  } = e, g = {
    root: ["root", `color${Ee(n)}`, r && "disabled", o && "error", l && "fullWidth", s && "focused", a && "formControl", p && p !== "medium" && `size${Ee(p)}`, c && "multiline", f && "adornedStart", i && "adornedEnd", u && "hiddenLabel", d && "readOnly"],
    input: ["input", r && "disabled", h === "search" && "inputTypeSearch", d && "readOnly"]
  };
  return ve(g, H$, t);
}, rf = K("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: tf
})(ze(({
  theme: e
}) => ({
  ...e.typography.body1,
  color: (e.vars || e).palette.text.primary,
  lineHeight: "1.4375em",
  // 23px
  boxSizing: "border-box",
  // Prevent padding issue with fullWidth.
  position: "relative",
  cursor: "text",
  display: "inline-flex",
  alignItems: "center",
  [`&.${ts.disabled}`]: {
    color: (e.vars || e).palette.text.disabled,
    cursor: "default"
  },
  variants: [{
    props: ({
      ownerState: t
    }) => t.multiline,
    style: {
      padding: "4px 0 5px"
    }
  }, {
    props: ({
      ownerState: t,
      size: n
    }) => t.multiline && n === "small",
    style: {
      paddingTop: 1
    }
  }, {
    props: ({
      ownerState: t
    }) => t.fullWidth,
    style: {
      width: "100%"
    }
  }]
}))), of = K("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: nf
})(ze(({
  theme: e
}) => {
  const t = e.palette.mode === "light", n = {
    color: "currentColor",
    ...e.vars ? {
      opacity: e.vars.opacity.inputPlaceholder
    } : {
      opacity: t ? 0.42 : 0.5
    },
    ...dt(e, "opacity", {
      duration: e.transitions.duration.shorter
    })
  }, r = {
    opacity: "0 !important"
  }, o = e.vars ? {
    opacity: e.vars.opacity.inputPlaceholder
  } : {
    opacity: t ? 0.42 : 0.5
  };
  return {
    font: "inherit",
    letterSpacing: "inherit",
    color: "currentColor",
    padding: "4px 0 5px",
    border: 0,
    boxSizing: "content-box",
    background: "none",
    height: "1.4375em",
    // Reset 23pxthe native input line-height
    margin: 0,
    // Reset for Safari
    WebkitTapHighlightColor: "transparent",
    display: "block",
    // Make the flex item shrink with Firefox
    minWidth: 0,
    width: "100%",
    "&::-webkit-input-placeholder": n,
    "&::-moz-placeholder": n,
    // Firefox 19+
    "&::-ms-input-placeholder": n,
    // Edge
    "&:focus": {
      outline: 0
    },
    // Reset Firefox invalid required input style
    "&:invalid": {
      boxShadow: "none"
    },
    "&::-webkit-search-decoration": {
      // Remove the padding when type=search.
      WebkitAppearance: "none"
    },
    // Show and hide the placeholder logic
    [`label[data-shrink=false] + .${ts.formControl} &`]: {
      "&::-webkit-input-placeholder": r,
      "&::-moz-placeholder": r,
      // Firefox 19+
      "&::-ms-input-placeholder": r,
      // Edge
      "&:focus::-webkit-input-placeholder": o,
      "&:focus::-moz-placeholder": o,
      // Firefox 19+
      "&:focus::-ms-input-placeholder": o
      // Edge
    },
    [`&.${ts.disabled}`]: {
      opacity: 1,
      // Reset iOS opacity
      WebkitTextFillColor: (e.vars || e).palette.text.disabled
      // Fix opacity Safari bug
    },
    variants: [{
      props: ({
        ownerState: i
      }) => !i.disableInjectingGlobalStyles,
      style: {
        animationName: Pc,
        animationDuration: "10ms",
        "&:-webkit-autofill": {
          animationDuration: "5000s",
          animationName: lg
        }
      }
    }, {
      props: {
        size: "small"
      },
      style: {
        paddingTop: 1
      }
    }, {
      props: ({
        ownerState: i
      }) => i.multiline,
      style: {
        height: "auto",
        resize: "none",
        padding: 0,
        paddingTop: 0
      }
    }, {
      props: {
        type: "search"
      },
      style: {
        MozAppearance: "textfield"
        // Improve type search style.
      }
    }]
  };
})), Wx = j$({
  // Keep keyframes non-empty for Emotion production builds. Animation properties are ignored
  // inside keyframes, avoiding the visible display animation triggered by Chrome 117+.
  [`@keyframes ${lg}`]: {
    from: {
      animationName: lg
    }
  },
  [`@keyframes ${Pc}`]: {
    from: {
      animationName: Pc
    }
  }
}), ay = /* @__PURE__ */ k.forwardRef(function(t, n) {
  const r = Be({
    props: t,
    name: "MuiInputBase"
  }), {
    "aria-describedby": o,
    "aria-label": i,
    autoComplete: s,
    autoFocus: a,
    className: l,
    color: u,
    defaultValue: c,
    disabled: d,
    disableInjectingGlobalStyles: p,
    endAdornment: f,
    error: h,
    fullWidth: g = !1,
    id: x,
    inputComponent: y = "input",
    inputProps: m = {},
    inputRef: v,
    margin: C,
    maxRows: S,
    minRows: b,
    multiline: I = !1,
    name: T,
    onBlur: L,
    onChange: O,
    onClick: _,
    onFocus: w,
    onKeyDown: A,
    onKeyUp: P,
    placeholder: M,
    readOnly: $,
    renderSuffix: D,
    rows: R,
    size: F,
    slotProps: z = {},
    slots: H = {},
    startAdornment: W,
    type: q = "text",
    value: J,
    ...se
  } = r, ee = m.value != null ? m.value : J, {
    current: ne
  } = k.useRef(ee != null), Z = k.useRef(), U = k.useCallback((ge) => {
  }, []), X = Ze(Z, v, m.ref, U), [re, j] = k.useState(!1), [ae, Q] = vl({
    props: r,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  ae.focused = Q ? Q.focused : re, k.useEffect(() => {
    !Q && d && re && (j(!1), L && L());
  }, [Q, d, re, L]);
  const we = Q && Q.onFilled, he = Q && Q.onEmpty, be = k.useCallback((ge) => {
    Tc(ge) ? we && we() : he && he();
  }, [we, he]);
  me(() => {
    ne && be({
      value: ee
    });
  }, [ee, be, ne]), me(() => {
    if (!a)
      return;
    const ge = Z.current;
    if (!ge)
      return;
    const Dt = gt(ge), Et = Sr(Dt), $s = Et == null || Et === Dt.body || Et === Dt.documentElement;
    ge === Et ? Q && Q.onFocus ? Q.onFocus() : j(!0) : $s && ge.focus();
  }, [a]);
  const wt = (ge) => {
    w && w(ge), m.onFocus && m.onFocus(ge), Q && Q.onFocus ? Q.onFocus(ge) : j(!0);
  }, je = (ge) => {
    L && L(ge), m.onBlur && m.onBlur(ge), Q && Q.onBlur ? Q.onBlur(ge) : j(!1);
  }, Lt = (ge, ...Dt) => {
    if (!ne) {
      const Et = ge.target || Z.current;
      if (Et == null)
        throw new Error(Or(1));
      be({
        value: Et.value
      });
    }
    m.onChange && m.onChange(ge, ...Dt), O && O(ge, ...Dt);
  };
  k.useEffect(() => {
    be(Z.current);
  }, []);
  const Nt = (ge) => {
    Z.current && ge.currentTarget === ge.target && Z.current.focus(), _ && _(ge);
  };
  let on = y, rt = m;
  I && on === "input" && (R ? rt = {
    type: void 0,
    minRows: R,
    maxRows: R,
    ...rt
  } : rt = {
    type: void 0,
    maxRows: S,
    minRows: b,
    ...rt
  }, on = z$);
  const gr = (ge) => {
    be(ge.animationName === Pc ? Z.current : {
      value: "x"
    });
  };
  k.useEffect(() => {
    Q && Q.setAdornedStart(!!W);
  }, [Q, W]);
  const Kn = {
    ...r,
    color: ae.color || "primary",
    disabled: ae.disabled,
    endAdornment: f,
    error: ae.error,
    focused: ae.focused,
    formControl: Q,
    fullWidth: g,
    hiddenLabel: ae.hiddenLabel,
    multiline: I,
    size: ae.size,
    startAdornment: W,
    type: q
  }, Tt = K$(Kn), Ge = H.root || rf, ot = z.root || {}, Io = H.input || of;
  return rt = {
    ...rt,
    ...z.input
  }, /* @__PURE__ */ E.jsxs(k.Fragment, {
    children: [!p && typeof Wx == "function" && // For Emotion/Styled-components, InputGlobalStyles will be a function
    // For Pigment CSS, this has no effect because the InputGlobalStyles will be null.
    (Hx || (Hx = /* @__PURE__ */ E.jsx(Wx, {}))), /* @__PURE__ */ E.jsxs(Ge, {
      ...ot,
      ref: n,
      onClick: Nt,
      ...se,
      ...!Ic(Ge) && {
        ownerState: {
          ...Kn,
          ...ot.ownerState
        }
      },
      className: oe(Tt.root, ot.className, l, $ && "MuiInputBase-readOnly"),
      children: [W, /* @__PURE__ */ E.jsx(oy.Provider, {
        value: null,
        children: /* @__PURE__ */ E.jsx(Io, {
          "aria-invalid": ae.error,
          "aria-describedby": o,
          "aria-label": i,
          autoComplete: s,
          autoFocus: a,
          defaultValue: c,
          disabled: ae.disabled,
          id: x,
          onAnimationStart: gr,
          name: T,
          placeholder: M,
          readOnly: $,
          required: ae.required,
          rows: R,
          value: ee,
          onKeyDown: A,
          onKeyUp: P,
          type: q,
          ...rt,
          ...!Ic(Io) && {
            as: on,
            ownerState: {
              ...Kn,
              ...rt.ownerState
            }
          },
          ref: X,
          className: oe(Tt.input, rt.className, $ && "MuiInputBase-readOnly"),
          onBlur: je,
          onChange: Lt,
          onFocus: wt
        })
      }), f, D ? D({
        ...ae,
        startAdornment: W
      }) : null]
    })]
  });
});
function X$(e) {
  return Ce("MuiFilledInput", e);
}
const Po = {
  ...ts,
  ...ce("MuiFilledInput", ["root", "underline", "input", "adornedStart", "adornedEnd", "sizeSmall", "multiline", "hiddenLabel"])
};
function q$(e) {
  return Ce("MuiFormLabel", e);
}
const xa = ce("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]);
function Q$(e) {
  return Ce("MuiInput", e);
}
const Ws = {
  ...ts,
  ...ce("MuiInput", ["root", "underline", "input"])
};
function Z$(e) {
  return Ce("MuiMenuItem", e);
}
const Gs = ce("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]);
function J$(e) {
  return Ce("MuiNativeSelect", e);
}
const ly = ce("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]);
function eO(e) {
  return Ce("MuiOutlinedInput", e);
}
const Qn = {
  ...ts,
  ...ce("MuiOutlinedInput", ["root", "notchedOutline", "input"])
};
function tO(e) {
  return Ce("MuiToggleButton", e);
}
const Fo = ce("MuiToggleButton", ["root", "disabled", "selected", "standard", "primary", "secondary", "sizeSmall", "sizeMedium", "sizeLarge", "fullWidth"]);
function nn({
  props: e,
  name: t
}) {
  return $_({
    props: e,
    name: t,
    defaultTheme: ef,
    themeId: ws
  });
}
function xe(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
function hk(e, t, n) {
  return e === void 0 || Ic(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...n
    }
  };
}
function gk(e, t) {
  const n = e.charCodeAt(2);
  return e[0] === "o" && e[1] === "n" && n >= 65 && n <= 90 && typeof t == "function";
}
function mk(e) {
  if (e === void 0)
    return {};
  const t = {};
  for (const n of Object.keys(e))
    gk(n, e[n]) && (t[n] = e[n]);
  return t;
}
function Gx(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    t[n] = e[n];
  }), t;
}
function yk(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: o,
    className: i
  } = e;
  if (!t) {
    const f = oe(n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className), h = {
      ...n == null ? void 0 : n.style,
      ...o == null ? void 0 : o.style,
      ...r == null ? void 0 : r.style
    }, g = {
      ...n,
      ...o,
      ...r
    };
    return f.length > 0 && (g.className = f), Object.keys(h).length > 0 && (g.style = h), {
      props: g,
      internalRef: void 0
    };
  }
  const s = mk({
    ...o,
    ...r
  }), a = Gx(r), l = Gx(o), u = t(s), c = oe(u == null ? void 0 : u.className, n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className), d = {
    ...u == null ? void 0 : u.style,
    ...n == null ? void 0 : n.style,
    ...o == null ? void 0 : o.style,
    ...r == null ? void 0 : r.style
  }, p = {
    ...u,
    ...n,
    ...l,
    ...a
  };
  return c.length > 0 && (p.className = c), Object.keys(d).length > 0 && (p.style = d), {
    props: p,
    internalRef: u.ref
  };
}
function vk(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function dr(e) {
  var d;
  const {
    elementType: t,
    externalSlotProps: n,
    ownerState: r,
    skipResolvingSlotProps: o = !1,
    ...i
  } = e, s = o ? {} : vk(n, r), {
    props: a,
    internalRef: l
  } = yk({
    ...i,
    externalSlotProps: s
  }), u = Ze(l, s == null ? void 0 : s.ref, (d = e.additionalProps) == null ? void 0 : d.ref);
  return hk(t, {
    ...a,
    ref: u
  }, r);
}
function ke(e, ...t) {
  const n = new URL("https://mui.com/x/production-error");
  return n.searchParams.set("code", e.toString()), t.forEach((r) => n.searchParams.append("args[]", r)), `MUI X error #${e}; visit ${n} for the full message.`;
}
var Mc = /* @__PURE__ */ Symbol("NOT_FOUND");
function nO(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function")
    throw new TypeError(t);
}
function rO(e, t = "expected all items to be functions, instead received the following types: ") {
  if (!e.every((n) => typeof n == "function")) {
    const n = e.map(
      (r) => typeof r == "function" ? `function ${r.name || "unnamed"}()` : typeof r
    ).join(", ");
    throw new TypeError(`${t}[${n}]`);
  }
}
var Vx = (e) => Array.isArray(e) ? e : [e];
function oO(e) {
  const t = Array.isArray(e[0]) ? e[0] : e;
  return rO(
    t,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), t;
}
function iO(e, t) {
  const n = [], { length: r } = e;
  for (let o = 0; o < r; o++)
    n.push(e[o].apply(null, t));
  return n;
}
function sO(e) {
  let t;
  return {
    get(n) {
      return t && e(t.key, n) ? t.value : Mc;
    },
    put(n, r) {
      t = { key: n, value: r };
    },
    getEntries() {
      return t ? [t] : [];
    },
    clear() {
      t = void 0;
    }
  };
}
function aO(e, t) {
  let n = [];
  function r(a) {
    const l = n.findIndex((u) => t(a, u.key));
    if (l > -1) {
      const u = n[l];
      return l > 0 && (n.splice(l, 1), n.unshift(u)), u.value;
    }
    return Mc;
  }
  function o(a, l) {
    r(a) === Mc && (n.unshift({ key: a, value: l }), n.length > e && n.pop());
  }
  function i() {
    return n;
  }
  function s() {
    n = [];
  }
  return { get: r, put: o, getEntries: i, clear: s };
}
var lO = (e, t) => e === t;
function uO(e) {
  return function(n, r) {
    if (n === null || r === null || n.length !== r.length)
      return !1;
    const { length: o } = n;
    for (let i = 0; i < o; i++)
      if (!e(n[i], r[i]))
        return !1;
    return !0;
  };
}
function cO(e, t) {
  const n = typeof t == "object" ? t : { equalityCheck: t }, {
    equalityCheck: r = lO,
    maxSize: o = 1,
    resultEqualityCheck: i
  } = n, s = uO(r);
  let a = 0;
  const l = o <= 1 ? sO(s) : aO(o, s);
  function u() {
    let c = l.get(arguments);
    if (c === Mc) {
      if (c = e.apply(null, arguments), a++, i) {
        const p = l.getEntries().find(
          (f) => i(f.value, c)
        );
        p && (c = p.value, a !== 0 && a--);
      }
      l.put(arguments, c);
    }
    return c;
  }
  return u.clearCache = () => {
    l.clear(), u.resetResultsCount();
  }, u.resultsCount = () => a, u.resetResultsCount = () => {
    a = 0;
  }, u;
}
var dO = class {
  constructor(e) {
    this.value = e;
  }
  deref() {
    return this.value;
  }
}, fO = () => typeof WeakRef > "u" ? dO : WeakRef, xk = /* @__PURE__ */ fO(), pO = 0, Yx = 1;
function pu() {
  return {
    s: pO,
    v: void 0,
    o: null,
    p: null
  };
}
function hO(e) {
  return e instanceof xk ? e.deref() : e;
}
function gO(e, t = {}) {
  let n = pu();
  const { resultEqualityCheck: r } = t;
  let o, i = 0;
  function s() {
    let a = n;
    const { length: l } = arguments;
    for (let d = 0, p = l; d < p; d++) {
      const f = arguments[d];
      if (typeof f == "function" || typeof f == "object" && f !== null) {
        let h = a.o;
        h === null && (a.o = h = /* @__PURE__ */ new WeakMap());
        const g = h.get(f);
        g === void 0 ? (a = pu(), h.set(f, a)) : a = g;
      } else {
        let h = a.p;
        h === null && (a.p = h = /* @__PURE__ */ new Map());
        const g = h.get(f);
        g === void 0 ? (a = pu(), h.set(f, a)) : a = g;
      }
    }
    const u = a;
    let c;
    if (a.s === Yx)
      c = a.v;
    else if (c = e.apply(null, arguments), i++, r) {
      const d = hO(o);
      d != null && r(d, c) && (c = d, i !== 0 && i--), o = typeof c == "object" && c !== null || typeof c == "function" ? /* @__PURE__ */ new xk(c) : c;
    }
    return u.s = Yx, u.v = c, c;
  }
  return s.clearCache = () => {
    n = pu(), s.resetResultsCount();
  }, s.resultsCount = () => i, s.resetResultsCount = () => {
    i = 0;
  }, s;
}
function mO(e, ...t) {
  const n = typeof e == "function" ? {
    memoize: e,
    memoizeOptions: t
  } : e, r = (...o) => {
    let i = 0, s = 0, a, l = {}, u = o.pop();
    typeof u == "object" && (l = u, u = o.pop()), nO(
      u,
      `createSelector expects an output function after the inputs, but received: [${typeof u}]`
    );
    const c = {
      ...n,
      ...l
    }, {
      memoize: d,
      memoizeOptions: p = [],
      argsMemoize: f = gO,
      argsMemoizeOptions: h = []
    } = c, g = Vx(p), x = Vx(h), y = oO(o), m = d(function() {
      return i++, u.apply(
        null,
        arguments
      );
    }, ...g), v = f(function() {
      s++;
      const S = iO(
        y,
        arguments
      );
      return a = m.apply(null, S), a;
    }, ...x);
    return Object.assign(v, {
      resultFunc: u,
      memoizedResultFunc: m,
      dependencies: y,
      dependencyRecomputations: () => s,
      resetDependencyRecomputations: () => {
        s = 0;
      },
      lastResult: () => a,
      recomputations: () => i,
      resetRecomputations: () => {
        i = 0;
      },
      memoize: d,
      argsMemoize: f
    });
  };
  return Object.assign(r, {
    withTypes: () => r
  }), r;
}
const yO = mO({
  memoize: cO,
  memoizeOptions: {
    maxSize: 1,
    equalityCheck: Object.is
  }
}), V = (e, t, n, r, o, i, s, a, ...l) => {
  if (l.length > 0)
    throw new Error(ke(179));
  let u;
  if (e && t && n && r && o && i && s && a)
    u = (c, d, p, f) => {
      const h = e(c, d, p, f), g = t(c, d, p, f), x = n(c, d, p, f), y = r(c, d, p, f), m = o(c, d, p, f), v = i(c, d, p, f), C = s(c, d, p, f);
      return a(h, g, x, y, m, v, C, d, p, f);
    };
  else if (e && t && n && r && o && i && s)
    u = (c, d, p, f) => {
      const h = e(c, d, p, f), g = t(c, d, p, f), x = n(c, d, p, f), y = r(c, d, p, f), m = o(c, d, p, f), v = i(c, d, p, f);
      return s(h, g, x, y, m, v, d, p, f);
    };
  else if (e && t && n && r && o && i)
    u = (c, d, p, f) => {
      const h = e(c, d, p, f), g = t(c, d, p, f), x = n(c, d, p, f), y = r(c, d, p, f), m = o(c, d, p, f);
      return i(h, g, x, y, m, d, p, f);
    };
  else if (e && t && n && r && o)
    u = (c, d, p, f) => {
      const h = e(c, d, p, f), g = t(c, d, p, f), x = n(c, d, p, f), y = r(c, d, p, f);
      return o(h, g, x, y, d, p, f);
    };
  else if (e && t && n && r)
    u = (c, d, p, f) => {
      const h = e(c, d, p, f), g = t(c, d, p, f), x = n(c, d, p, f);
      return r(h, g, x, d, p, f);
    };
  else if (e && t && n)
    u = (c, d, p, f) => {
      const h = e(c, d, p, f), g = t(c, d, p, f);
      return n(h, g, d, p, f);
    };
  else if (e && t)
    u = (c, d, p, f) => {
      const h = e(c, d, p, f);
      return t(h, d, p, f);
    };
  else if (e)
    u = e;
  else
    throw new Error(ke(180));
  return u;
}, xl = (e) => (...t) => {
  const n = /* @__PURE__ */ new WeakMap();
  let r = 1;
  const o = t[t.length - 1], i = t.length - 1 || 1, s = Math.max(o.length - i, 0);
  if (s > 3)
    throw new Error(ke(181));
  return (l, u, c, d) => {
    let p = l.__cacheKey__;
    p || (p = {
      id: r
    }, l.__cacheKey__ = p, r += 1);
    let f = n.get(p);
    if (!f) {
      const h = t.length === 1 ? [(y) => y, o] : t;
      let g = t;
      const x = [void 0, void 0, void 0];
      switch (s) {
        case 0:
          break;
        case 1: {
          g = [...h.slice(0, -1), () => x[0], o];
          break;
        }
        case 2: {
          g = [...h.slice(0, -1), () => x[0], () => x[1], o];
          break;
        }
        case 3: {
          g = [...h.slice(0, -1), () => x[0], () => x[1], () => x[2], o];
          break;
        }
        default:
          throw new Error(ke(182));
      }
      e && (g = [...g, e]), f = yO(...g), f.selectorArgs = x, n.set(p, f);
    }
    switch (s) {
      case 3:
        f.selectorArgs[2] = d;
      case 2:
        f.selectorArgs[1] = c;
      case 1:
        f.selectorArgs[0] = u;
    }
    switch (s) {
      case 0:
        return f(l);
      case 1:
        return f(l, u);
      case 2:
        return f(l, u, c);
      case 3:
        return f(l, u, c, d);
      default:
        throw (
          /* minify-error-disabled */
          new Error("unreachable")
        );
    }
  };
}, le = xl();
var Ck = { exports: {} }, wk = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ns = k;
function vO(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var xO = typeof Object.is == "function" ? Object.is : vO, CO = ns.useState, wO = ns.useEffect, bO = ns.useLayoutEffect, SO = ns.useDebugValue;
function kO(e, t) {
  var n = t(), r = CO({ inst: { value: n, getSnapshot: t } }), o = r[0].inst, i = r[1];
  return bO(
    function() {
      o.value = n, o.getSnapshot = t, Np(o) && i({ inst: o });
    },
    [e, n, t]
  ), wO(
    function() {
      return Np(o) && i({ inst: o }), e(function() {
        Np(o) && i({ inst: o });
      });
    },
    [e]
  ), SO(n), n;
}
function Np(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !xO(e, n);
  } catch {
    return !0;
  }
}
function IO(e, t) {
  return t();
}
var TO = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? IO : kO;
wk.useSyncExternalStore = ns.useSyncExternalStore !== void 0 ? ns.useSyncExternalStore : TO;
Ck.exports = wk;
var bk = Ck.exports, Sk = { exports: {} }, kk = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sf = k, EO = bk;
function PO(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var MO = typeof Object.is == "function" ? Object.is : PO, AO = EO.useSyncExternalStore, RO = sf.useRef, _O = sf.useEffect, $O = sf.useMemo, OO = sf.useDebugValue;
kk.useSyncExternalStoreWithSelector = function(e, t, n, r, o) {
  var i = RO(null);
  if (i.current === null) {
    var s = { hasValue: !1, value: null };
    i.current = s;
  } else s = i.current;
  i = $O(
    function() {
      function l(f) {
        if (!u) {
          if (u = !0, c = f, f = r(f), o !== void 0 && s.hasValue) {
            var h = s.value;
            if (o(h, f))
              return d = h;
          }
          return d = f;
        }
        if (h = d, MO(c, f)) return h;
        var g = r(f);
        return o !== void 0 && o(h, g) ? (c = f, h) : (c = f, d = g);
      }
      var u = !1, c, d, p = n === void 0 ? null : n;
      return [
        function() {
          return l(t());
        },
        p === null ? void 0 : function() {
          return l(p());
        }
      ];
    },
    [t, n, r, o]
  );
  var a = AO(e, i[0], i[1]);
  return _O(
    function() {
      s.hasValue = !0, s.value = a;
    },
    [a]
  ), OO(a), a;
};
Sk.exports = kk;
var LO = Sk.exports;
const Ik = parseInt(k.version, 10), NO = Ik >= 19, DO = NO ? zO : BO;
function FO(e, t, n, r, o) {
  return DO(e, t, n, r, o);
}
function zO(e, t, n, r, o) {
  const i = k.useCallback(() => t(e.getSnapshot(), n, r, o), [e, t, n, r, o]);
  return bk.useSyncExternalStore(e.subscribe, i, i);
}
function BO(e, t, n, r, o) {
  return LO.useSyncExternalStoreWithSelector(e.subscribe, e.getSnapshot, e.getSnapshot, (i) => t(i, n, r, o));
}
const Kx = {};
function Cl(e, t) {
  const n = k.useRef(Kx);
  return n.current === Kx && (n.current = e(t)), n;
}
const jO = [];
function uy(e) {
  k.useEffect(e, jO);
}
const UO = () => {
};
function HO(e, t, n) {
  const r = Cl(WO, {
    store: e,
    selector: t
  }).current;
  r.effect = n, uy(r.onMount);
}
function WO(e) {
  const {
    store: t,
    selector: n
  } = e;
  let r = n(t.state);
  const o = {
    effect: UO,
    dispose: null,
    // We want a single subscription done right away and cleared on unmount only,
    // but React triggers `useOnMount` multiple times in dev, so we need to manage
    // the subscription anyway.
    subscribe: () => {
      o.dispose ?? (o.dispose = t.subscribe((i) => {
        const s = n(i);
        if (!Object.is(r, s)) {
          const a = r;
          r = s, o.effect(a, s);
        }
      }));
    },
    onMount: () => (o.subscribe(), () => {
      var i;
      (i = o.dispose) == null || i.call(o), o.dispose = null;
    })
  };
  return o.subscribe(), o;
}
class cy {
  constructor(t) {
    ue(this, "subscribe", (t) => (this.listeners.add(t), () => {
      this.listeners.delete(t);
    }));
    /**
     * Returns the current state snapshot. Meant for usage with `useSyncExternalStore`.
     * If you want to access the state, use the `state` property instead.
     */
    ue(this, "getSnapshot", () => this.state);
    ue(this, "use", (t, n, r, o) => FO(this, t, n, r, o));
    this.state = t, this.listeners = /* @__PURE__ */ new Set(), this.updateTick = 0;
  }
  // HACK: `any` fixes adding listeners that accept partial state.
  // Internal state to handle recursive `setState()` calls
  static create(t) {
    return new cy(t);
  }
  setState(t) {
    this.state = t, this.updateTick += 1;
    const n = this.updateTick, r = this.listeners.values();
    let o;
    for (; o = r.next(), !o.done; ) {
      if (n !== this.updateTick)
        return;
      const i = o.value;
      i(t);
    }
  }
  update(t) {
    for (const n in t)
      if (!Object.is(this.state[n], t[n])) {
        this.setState(N({}, this.state, t));
        return;
      }
  }
  set(t, n) {
    Object.is(this.state[t], n) || this.setState(N({}, this.state, {
      [t]: n
    }));
  }
}
const af = ({
  params: e,
  store: t
}) => {
  k.useEffect(() => {
    t.set("animation", N({}, t.state.animation, {
      skip: e.skipAnimation
    }));
  }, [t, e.skipAnimation]);
  const n = k.useCallback(() => {
    let r = !1;
    return t.set("animation", N({}, t.state.animation, {
      skipAnimationRequests: t.state.animation.skipAnimationRequests + 1
    })), () => {
      r || (r = !0, t.set("animation", N({}, t.state.animation, {
        skipAnimationRequests: t.state.animation.skipAnimationRequests - 1
      })));
    };
  }, [t]);
  return me(() => {
    if (typeof window > "u" || !(window != null && window.matchMedia))
      return;
    let o;
    const i = (a) => {
      a.matches ? o = n() : o == null || o();
    }, s = window.matchMedia("(prefers-reduced-motion)");
    return i(s), s.addEventListener("change", i), () => {
      s.removeEventListener("change", i);
    };
  }, [n, t]), {
    instance: {
      disableAnimation: n
    }
  };
};
af.params = {
  skipAnimation: !0
};
af.getDefaultizedParams = ({
  params: e
}) => N({}, e, {
  skipAnimation: e.skipAnimation ?? !1
});
af.getInitialState = ({
  skipAnimation: e
}) => ({
  animation: {
    skip: e,
    // By initializing the skipAnimationRequests to 1, we ensure that the animation is always skipped
    skipAnimationRequests: 0
  }
});
const GO = (e) => e.animation, VO = V(GO, (e) => e.skip || e.skipAnimationRequests > 0);
function dy(e, t) {
  const n = k.useRef(!0);
  k.useEffect(() => {
    if (n.current) {
      n.current = !1;
      return;
    }
    return e();
  }, t);
}
const fy = "DEFAULT_X_AXIS_KEY", YO = "DEFAULT_Y_AXIS_KEY", KO = {
  top: 20,
  bottom: 20,
  left: 20,
  right: 20
}, py = 45, hy = 25, oi = 20, Ln = (e) => {
  var t;
  return (t = e.cartesianAxis) == null ? void 0 : t.x;
}, Vn = (e) => {
  var t;
  return (t = e.cartesianAxis) == null ? void 0 : t.y;
}, Is = (e) => {
  var t;
  return ((t = e.cartesianAxis) == null ? void 0 : t.axesGap) ?? 0;
};
function Tk() {
  return typeof window > "u";
}
const Qr = /* @__PURE__ */ new Map(), Ek = 2e3, XO = /* @__PURE__ */ new Set(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height", "top", "left", "fontSize", "padding", "margin", "paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom"]);
function gy(e, t) {
  return XO.has(e) && t === +t ? `${t}px` : t;
}
const qO = /([A-Z])/g;
function my(e) {
  return String(e).replace(qO, (t) => `-${t.toLowerCase()}`);
}
function Pk(e) {
  let t = "";
  for (const n in e)
    if (Object.hasOwn(e, n)) {
      const r = n, o = e[r];
      if (o === void 0)
        continue;
      t += `${my(r)}:${gy(r, o)};`;
    }
  return t;
}
const wl = (e, t = {}) => {
  if (e == null || Tk())
    return {
      width: 0,
      height: 0
    };
  const n = String(e), r = Pk(t), o = `${n}-${r}`, i = Qr.get(o);
  if (i)
    return i;
  try {
    const s = Rk(), a = document.createElementNS("http://www.w3.org/2000/svg", "text");
    Object.keys(t).map((u) => (a.style[my(u)] = gy(u, t[u]), u)), a.textContent = n, s.replaceChildren(a);
    const l = Ak(a);
    return Qr.set(o, l), Qr.size + 1 > Ek && Qr.clear(), l;
  } catch {
    return {
      width: 0,
      height: 0
    };
  }
};
function Mk(e, t = {}) {
  if (Tk())
    return new Map(Array.from(e).map((l) => [l, {
      width: 0,
      height: 0
    }]));
  const n = /* @__PURE__ */ new Map(), r = [], o = Pk(t);
  for (const l of e) {
    const u = `${l}-${o}`, c = Qr.get(u);
    c ? n.set(l, c) : r.push(l);
  }
  const i = Rk(), s = N({}, t);
  Object.keys(s).map((l) => (i.style[my(l)] = gy(l, s[l]), l));
  const a = [];
  for (const l of r) {
    const u = document.createElementNS("http://www.w3.org/2000/svg", "text");
    u.textContent = `${l}`, a.push(u);
  }
  i.replaceChildren(...a);
  for (let l = 0; l < r.length; l += 1) {
    const u = r[l], c = i.children[l], d = Ak(c), p = `${u}-${o}`;
    Qr.set(p, d), n.set(u, d);
  }
  return Qr.size + 1 > Ek && Qr.clear(), n;
}
function Ak(e) {
  try {
    const t = e.getBBox();
    return {
      width: t.width,
      height: t.height
    };
  } catch {
    const t = e.getBoundingClientRect();
    return {
      width: t.width,
      height: t.height
    };
  }
}
let Gt = null;
function Rk() {
  return Gt === null && (Gt = document.createElementNS("http://www.w3.org/2000/svg", "svg"), Gt.setAttribute("aria-hidden", "true"), Gt.style.position = "absolute", Gt.style.top = "-20000px", Gt.style.left = "0", Gt.style.padding = "0", Gt.style.margin = "0", Gt.style.border = "none", Gt.style.pointerEvents = "none", Gt.style.visibility = "hidden", Gt.style.contain = "strict", document.body.appendChild(Gt)), Gt;
}
const Zr = (e, t) => e === void 0 ? t : Math.PI * e / 180, _k = typeof window < "u" && "Intl" in window && "Segmenter" in Intl ? (
  // eslint-disable-next-line compat/compat
  new Intl.Segmenter(void 0, {
    granularity: "grapheme"
  })
) : null;
function QO(e) {
  return e.length;
}
function ZO(e) {
  const t = _k.segment(e);
  let n = 0;
  for (const r of t)
    n += 1;
  return n;
}
const $k = _k ? ZO : QO;
function Yu(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function JO(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function yy(e) {
  let t, n, r;
  e.length !== 2 ? (t = Yu, n = (a, l) => Yu(e(a), l), r = (a, l) => e(a) - l) : (t = e === Yu || e === JO ? e : eL, n = e, r = e);
  function o(a, l, u = 0, c = a.length) {
    if (u < c) {
      if (t(l, l) !== 0) return c;
      do {
        const d = u + c >>> 1;
        n(a[d], l) < 0 ? u = d + 1 : c = d;
      } while (u < c);
    }
    return u;
  }
  function i(a, l, u = 0, c = a.length) {
    if (u < c) {
      if (t(l, l) !== 0) return c;
      do {
        const d = u + c >>> 1;
        n(a[d], l) <= 0 ? u = d + 1 : c = d;
      } while (u < c);
    }
    return u;
  }
  function s(a, l, u = 0, c = a.length) {
    const d = o(a, l, u, c - 1);
    return d > u && r(a[d - 1], l) > -r(a[d], l) ? d - 1 : d;
  }
  return { left: o, center: s, right: i };
}
function eL() {
  return 0;
}
function tL(e) {
  return e === null ? NaN : +e;
}
const nL = yy(Yu), Ok = nL.right;
yy(tL).center;
class Ac extends Map {
  constructor(t, n = iL) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: n } }), t != null) for (const [r, o] of t) this.set(r, o);
  }
  get(t) {
    return super.get(Xx(this, t));
  }
  has(t) {
    return super.has(Xx(this, t));
  }
  set(t, n) {
    return super.set(rL(this, t), n);
  }
  delete(t) {
    return super.delete(oL(this, t));
  }
}
function Xx({ _intern: e, _key: t }, n) {
  const r = t(n);
  return e.has(r) ? e.get(r) : n;
}
function rL({ _intern: e, _key: t }, n) {
  const r = t(n);
  return e.has(r) ? e.get(r) : (e.set(r, n), n);
}
function oL({ _intern: e, _key: t }, n) {
  const r = t(n);
  return e.has(r) && (n = e.get(r), e.delete(r)), n;
}
function iL(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
const sL = Math.sqrt(50), aL = Math.sqrt(10), lL = Math.sqrt(2);
function Rc(e, t, n) {
  const r = (t - e) / Math.max(0, n), o = Math.floor(Math.log10(r)), i = r / Math.pow(10, o), s = i >= sL ? 10 : i >= aL ? 5 : i >= lL ? 2 : 1;
  let a, l, u;
  return o < 0 ? (u = Math.pow(10, -o) / s, a = Math.round(e * u), l = Math.round(t * u), a / u < e && ++a, l / u > t && --l, u = -u) : (u = Math.pow(10, o) * s, a = Math.round(e / u), l = Math.round(t / u), a * u < e && ++a, l * u > t && --l), l < a && 0.5 <= n && n < 2 ? Rc(e, t, n * 2) : [a, l, u];
}
function ug(e, t, n) {
  if (t = +t, e = +e, n = +n, !(n > 0)) return [];
  if (e === t) return [e];
  const r = t < e, [o, i, s] = r ? Rc(t, e, n) : Rc(e, t, n);
  if (!(i >= o)) return [];
  const a = i - o + 1, l = new Array(a);
  if (r)
    if (s < 0) for (let u = 0; u < a; ++u) l[u] = (i - u) / -s;
    else for (let u = 0; u < a; ++u) l[u] = (i - u) * s;
  else if (s < 0) for (let u = 0; u < a; ++u) l[u] = (o + u) / -s;
  else for (let u = 0; u < a; ++u) l[u] = (o + u) * s;
  return l;
}
function cg(e, t, n) {
  return t = +t, e = +e, n = +n, Rc(e, t, n)[2];
}
function dg(e, t, n) {
  t = +t, e = +e, n = +n;
  const r = t < e, o = r ? cg(t, e, n) : cg(e, t, n);
  return (r ? -1 : 1) * (o < 0 ? 1 / -o : o);
}
function yo(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(e);
      break;
    default:
      this.range(t).domain(e);
      break;
  }
  return this;
}
function vy(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1: {
      typeof e == "function" ? this.interpolator(e) : this.range(e);
      break;
    }
    default: {
      this.domain(e), typeof t == "function" ? this.interpolator(t) : this.range(t);
      break;
    }
  }
  return this;
}
const qx = Symbol("implicit");
function qa() {
  var e = new Ac(), t = [], n = [], r = qx;
  function o(i) {
    let s = e.get(i);
    if (s === void 0) {
      if (r !== qx) return r;
      e.set(i, s = t.push(i) - 1);
    }
    return n[s % n.length];
  }
  return o.domain = function(i) {
    if (!arguments.length) return t.slice();
    t = [], e = new Ac();
    for (const s of i)
      e.has(s) || e.set(s, t.push(s) - 1);
    return o;
  }, o.range = function(i) {
    return arguments.length ? (n = Array.from(i), o) : n.slice();
  }, o.unknown = function(i) {
    return arguments.length ? (r = i, o) : r;
  }, o.copy = function() {
    return qa(t, n).unknown(r);
  }, yo.apply(o, arguments), o;
}
function xy(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function Lk(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function bl() {
}
var Qa = 0.7, _c = 1 / Qa, Hi = "\\s*([+-]?\\d+)\\s*", Za = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", ar = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", uL = /^#([0-9a-f]{3,8})$/, cL = new RegExp(`^rgb\\(${Hi},${Hi},${Hi}\\)$`), dL = new RegExp(`^rgb\\(${ar},${ar},${ar}\\)$`), fL = new RegExp(`^rgba\\(${Hi},${Hi},${Hi},${Za}\\)$`), pL = new RegExp(`^rgba\\(${ar},${ar},${ar},${Za}\\)$`), hL = new RegExp(`^hsl\\(${Za},${ar},${ar}\\)$`), gL = new RegExp(`^hsla\\(${Za},${ar},${ar},${Za}\\)$`), Qx = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
xy(bl, Ja, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Zx,
  // Deprecated! Use color.formatHex.
  formatHex: Zx,
  formatHex8: mL,
  formatHsl: yL,
  formatRgb: Jx,
  toString: Jx
});
function Zx() {
  return this.rgb().formatHex();
}
function mL() {
  return this.rgb().formatHex8();
}
function yL() {
  return Nk(this).formatHsl();
}
function Jx() {
  return this.rgb().formatRgb();
}
function Ja(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = uL.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? e1(t) : n === 3 ? new Kt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? hu(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? hu(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = cL.exec(e)) ? new Kt(t[1], t[2], t[3], 1) : (t = dL.exec(e)) ? new Kt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = fL.exec(e)) ? hu(t[1], t[2], t[3], t[4]) : (t = pL.exec(e)) ? hu(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = hL.exec(e)) ? r1(t[1], t[2] / 100, t[3] / 100, 1) : (t = gL.exec(e)) ? r1(t[1], t[2] / 100, t[3] / 100, t[4]) : Qx.hasOwnProperty(e) ? e1(Qx[e]) : e === "transparent" ? new Kt(NaN, NaN, NaN, 0) : null;
}
function e1(e) {
  return new Kt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function hu(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new Kt(e, t, n, r);
}
function vL(e) {
  return e instanceof bl || (e = Ja(e)), e ? (e = e.rgb(), new Kt(e.r, e.g, e.b, e.opacity)) : new Kt();
}
function fg(e, t, n, r) {
  return arguments.length === 1 ? vL(e) : new Kt(e, t, n, r ?? 1);
}
function Kt(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
xy(Kt, fg, Lk(bl, {
  brighter(e) {
    return e = e == null ? _c : Math.pow(_c, e), new Kt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Qa : Math.pow(Qa, e), new Kt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Kt(Wo(this.r), Wo(this.g), Wo(this.b), $c(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: t1,
  // Deprecated! Use color.formatHex.
  formatHex: t1,
  formatHex8: xL,
  formatRgb: n1,
  toString: n1
}));
function t1() {
  return `#${zo(this.r)}${zo(this.g)}${zo(this.b)}`;
}
function xL() {
  return `#${zo(this.r)}${zo(this.g)}${zo(this.b)}${zo((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function n1() {
  const e = $c(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Wo(this.r)}, ${Wo(this.g)}, ${Wo(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function $c(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Wo(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function zo(e) {
  return e = Wo(e), (e < 16 ? "0" : "") + e.toString(16);
}
function r1(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Un(e, t, n, r);
}
function Nk(e) {
  if (e instanceof Un) return new Un(e.h, e.s, e.l, e.opacity);
  if (e instanceof bl || (e = Ja(e)), !e) return new Un();
  if (e instanceof Un) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), s = NaN, a = i - o, l = (i + o) / 2;
  return a ? (t === i ? s = (n - r) / a + (n < r) * 6 : n === i ? s = (r - t) / a + 2 : s = (t - n) / a + 4, a /= l < 0.5 ? i + o : 2 - i - o, s *= 60) : a = l > 0 && l < 1 ? 0 : s, new Un(s, a, l, e.opacity);
}
function CL(e, t, n, r) {
  return arguments.length === 1 ? Nk(e) : new Un(e, t, n, r ?? 1);
}
function Un(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
xy(Un, CL, Lk(bl, {
  brighter(e) {
    return e = e == null ? _c : Math.pow(_c, e), new Un(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Qa : Math.pow(Qa, e), new Un(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new Kt(
      Dp(e >= 240 ? e - 240 : e + 120, o, r),
      Dp(e, o, r),
      Dp(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new Un(o1(this.h), gu(this.s), gu(this.l), $c(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = $c(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${o1(this.h)}, ${gu(this.s) * 100}%, ${gu(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function o1(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function gu(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Dp(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const Cy = (e) => () => e;
function wL(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function bL(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function SL(e) {
  return (e = +e) == 1 ? Dk : function(t, n) {
    return n - t ? bL(t, n, e) : Cy(isNaN(t) ? n : t);
  };
}
function Dk(e, t) {
  var n = t - e;
  return n ? wL(e, n) : Cy(isNaN(e) ? t : e);
}
const i1 = function e(t) {
  var n = SL(t);
  function r(o, i) {
    var s = n((o = fg(o)).r, (i = fg(i)).r), a = n(o.g, i.g), l = n(o.b, i.b), u = Dk(o.opacity, i.opacity);
    return function(c) {
      return o.r = s(c), o.g = a(c), o.b = l(c), o.opacity = u(c), o + "";
    };
  }
  return r.gamma = e, r;
}(1);
function kL(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), o;
  return function(i) {
    for (o = 0; o < n; ++o) r[o] = e[o] * (1 - i) + t[o] * i;
    return r;
  };
}
function IL(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function TL(e, t) {
  var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, o = new Array(r), i = new Array(n), s;
  for (s = 0; s < r; ++s) o[s] = lf(e[s], t[s]);
  for (; s < n; ++s) i[s] = t[s];
  return function(a) {
    for (s = 0; s < r; ++s) i[s] = o[s](a);
    return i;
  };
}
function wy(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(r) {
    return n.setTime(e * (1 - r) + t * r), n;
  };
}
function rs(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function EL(e, t) {
  var n = {}, r = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? n[o] = lf(e[o], t[o]) : r[o] = t[o];
  return function(i) {
    for (o in n) r[o] = n[o](i);
    return r;
  };
}
var pg = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Fp = new RegExp(pg.source, "g");
function PL(e) {
  return function() {
    return e;
  };
}
function ML(e) {
  return function(t) {
    return e(t) + "";
  };
}
function by(e, t) {
  var n = pg.lastIndex = Fp.lastIndex = 0, r, o, i, s = -1, a = [], l = [];
  for (e = e + "", t = t + ""; (r = pg.exec(e)) && (o = Fp.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), a[s] ? a[s] += i : a[++s] = i), (r = r[0]) === (o = o[0]) ? a[s] ? a[s] += o : a[++s] = o : (a[++s] = null, l.push({ i: s, x: rs(r, o) })), n = Fp.lastIndex;
  return n < t.length && (i = t.slice(n), a[s] ? a[s] += i : a[++s] = i), a.length < 2 ? l[0] ? ML(l[0].x) : PL(t) : (t = l.length, function(u) {
    for (var c = 0, d; c < t; ++c) a[(d = l[c]).i] = d.x(u);
    return a.join("");
  });
}
function lf(e, t) {
  var n = typeof t, r;
  return t == null || n === "boolean" ? Cy(t) : (n === "number" ? rs : n === "string" ? (r = Ja(t)) ? (t = r, i1) : by : t instanceof Ja ? i1 : t instanceof Date ? wy : IL(t) ? kL : Array.isArray(t) ? TL : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? EL : rs)(e, t);
}
function Fk(e, t) {
  return e = +e, t = +t, function(n) {
    return Math.round(e * (1 - n) + t * n);
  };
}
function AL(e) {
  return function() {
    return e;
  };
}
function RL(e) {
  return +e;
}
var s1 = [0, 1];
function Sn(e) {
  return e;
}
function hg(e, t) {
  return (t -= e = +e) ? function(n) {
    return (n - e) / t;
  } : AL(isNaN(t) ? NaN : 0.5);
}
function _L(e, t) {
  var n;
  return e > t && (n = e, e = t, t = n), function(r) {
    return Math.max(e, Math.min(t, r));
  };
}
function $L(e, t, n) {
  var r = e[0], o = e[1], i = t[0], s = t[1];
  return o < r ? (r = hg(o, r), i = n(s, i)) : (r = hg(r, o), i = n(i, s)), function(a) {
    return i(r(a));
  };
}
function OL(e, t, n) {
  var r = Math.min(e.length, t.length) - 1, o = new Array(r), i = new Array(r), s = -1;
  for (e[r] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++s < r; )
    o[s] = hg(e[s], e[s + 1]), i[s] = n(t[s], t[s + 1]);
  return function(a) {
    var l = Ok(e, a, 1, r) - 1;
    return i[l](o[l](a));
  };
}
function Sl(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function uf() {
  var e = s1, t = s1, n = lf, r, o, i, s = Sn, a, l, u;
  function c() {
    var p = Math.min(e.length, t.length);
    return s !== Sn && (s = _L(e[0], e[p - 1])), a = p > 2 ? OL : $L, l = u = null, d;
  }
  function d(p) {
    return p == null || isNaN(p = +p) ? i : (l || (l = a(e.map(r), t, n)))(r(s(p)));
  }
  return d.invert = function(p) {
    return s(o((u || (u = a(t, e.map(r), rs)))(p)));
  }, d.domain = function(p) {
    return arguments.length ? (e = Array.from(p, RL), c()) : e.slice();
  }, d.range = function(p) {
    return arguments.length ? (t = Array.from(p), c()) : t.slice();
  }, d.rangeRound = function(p) {
    return t = Array.from(p), n = Fk, c();
  }, d.clamp = function(p) {
    return arguments.length ? (s = p ? !0 : Sn, c()) : s !== Sn;
  }, d.interpolate = function(p) {
    return arguments.length ? (n = p, c()) : n;
  }, d.unknown = function(p) {
    return arguments.length ? (i = p, d) : i;
  }, function(p, f) {
    return r = p, o = f, c();
  };
}
function zk() {
  return uf()(Sn, Sn);
}
function LL(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function Oc(e, t) {
  if (!isFinite(e) || e === 0) return null;
  var n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e"), r = e.slice(0, n);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +e.slice(n + 1)
  ];
}
function os(e) {
  return e = Oc(Math.abs(e)), e ? e[1] : NaN;
}
function NL(e, t) {
  return function(n, r) {
    for (var o = n.length, i = [], s = 0, a = e[0], l = 0; o > 0 && a > 0 && (l + a + 1 > r && (a = Math.max(1, r - l)), i.push(n.substring(o -= a, o + a)), !((l += a + 1) > r)); )
      a = e[s = (s + 1) % e.length];
    return i.reverse().join(t);
  };
}
function DL(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(n) {
      return e[+n];
    });
  };
}
var FL = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function el(e) {
  if (!(t = FL.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new Sy({
    fill: t[1],
    align: t[2],
    sign: t[3],
    symbol: t[4],
    zero: t[5],
    width: t[6],
    comma: t[7],
    precision: t[8] && t[8].slice(1),
    trim: t[9],
    type: t[10]
  });
}
el.prototype = Sy.prototype;
function Sy(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
Sy.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function zL(e) {
  e: for (var t = e.length, n = 1, r = -1, o; n < t; ++n)
    switch (e[n]) {
      case ".":
        r = o = n;
        break;
      case "0":
        r === 0 && (r = n), o = n;
        break;
      default:
        if (!+e[n]) break e;
        r > 0 && (r = 0);
        break;
    }
  return r > 0 ? e.slice(0, r) + e.slice(o + 1) : e;
}
var Lc;
function BL(e, t) {
  var n = Oc(e, t);
  if (!n) return Lc = void 0, e.toPrecision(t);
  var r = n[0], o = n[1], i = o - (Lc = Math.max(-8, Math.min(8, Math.floor(o / 3))) * 3) + 1, s = r.length;
  return i === s ? r : i > s ? r + new Array(i - s + 1).join("0") : i > 0 ? r.slice(0, i) + "." + r.slice(i) : "0." + new Array(1 - i).join("0") + Oc(e, Math.max(0, t + i - 1))[0];
}
function a1(e, t) {
  var n = Oc(e, t);
  if (!n) return e + "";
  var r = n[0], o = n[1];
  return o < 0 ? "0." + new Array(-o).join("0") + r : r.length > o + 1 ? r.slice(0, o + 1) + "." + r.slice(o + 1) : r + new Array(o - r.length + 2).join("0");
}
const l1 = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: LL,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => a1(e * 100, t),
  r: a1,
  s: BL,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function u1(e) {
  return e;
}
var c1 = Array.prototype.map, d1 = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function jL(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? u1 : NL(c1.call(e.grouping, Number), e.thousands + ""), n = e.currency === void 0 ? "" : e.currency[0] + "", r = e.currency === void 0 ? "" : e.currency[1] + "", o = e.decimal === void 0 ? "." : e.decimal + "", i = e.numerals === void 0 ? u1 : DL(c1.call(e.numerals, String)), s = e.percent === void 0 ? "%" : e.percent + "", a = e.minus === void 0 ? "−" : e.minus + "", l = e.nan === void 0 ? "NaN" : e.nan + "";
  function u(d, p) {
    d = el(d);
    var f = d.fill, h = d.align, g = d.sign, x = d.symbol, y = d.zero, m = d.width, v = d.comma, C = d.precision, S = d.trim, b = d.type;
    b === "n" ? (v = !0, b = "g") : l1[b] || (C === void 0 && (C = 12), S = !0, b = "g"), (y || f === "0" && h === "=") && (y = !0, f = "0", h = "=");
    var I = (p && p.prefix !== void 0 ? p.prefix : "") + (x === "$" ? n : x === "#" && /[boxX]/.test(b) ? "0" + b.toLowerCase() : ""), T = (x === "$" ? r : /[%p]/.test(b) ? s : "") + (p && p.suffix !== void 0 ? p.suffix : ""), L = l1[b], O = /[defgprs%]/.test(b);
    C = C === void 0 ? 6 : /[gprs]/.test(b) ? Math.max(1, Math.min(21, C)) : Math.max(0, Math.min(20, C));
    function _(w) {
      var A = I, P = T, M, $, D;
      if (b === "c")
        P = L(w) + P, w = "";
      else {
        w = +w;
        var R = w < 0 || 1 / w < 0;
        if (w = isNaN(w) ? l : L(Math.abs(w), C), S && (w = zL(w)), R && +w == 0 && g !== "+" && (R = !1), A = (R ? g === "(" ? g : a : g === "-" || g === "(" ? "" : g) + A, P = (b === "s" && !isNaN(w) && Lc !== void 0 ? d1[8 + Lc / 3] : "") + P + (R && g === "(" ? ")" : ""), O) {
          for (M = -1, $ = w.length; ++M < $; )
            if (D = w.charCodeAt(M), 48 > D || D > 57) {
              P = (D === 46 ? o + w.slice(M + 1) : w.slice(M)) + P, w = w.slice(0, M);
              break;
            }
        }
      }
      v && !y && (w = t(w, 1 / 0));
      var F = A.length + w.length + P.length, z = F < m ? new Array(m - F + 1).join(f) : "";
      switch (v && y && (w = t(z + w, z.length ? m - P.length : 1 / 0), z = ""), h) {
        case "<":
          w = A + w + P + z;
          break;
        case "=":
          w = A + z + w + P;
          break;
        case "^":
          w = z.slice(0, F = z.length >> 1) + A + w + P + z.slice(F);
          break;
        default:
          w = z + A + w + P;
          break;
      }
      return i(w);
    }
    return _.toString = function() {
      return d + "";
    }, _;
  }
  function c(d, p) {
    var f = Math.max(-8, Math.min(8, Math.floor(os(p) / 3))) * 3, h = Math.pow(10, -f), g = u((d = el(d), d.type = "f", d), { suffix: d1[8 + f / 3] });
    return function(x) {
      return g(h * x);
    };
  }
  return {
    format: u,
    formatPrefix: c
  };
}
var mu, ky, Bk;
UL({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function UL(e) {
  return mu = jL(e), ky = mu.format, Bk = mu.formatPrefix, mu;
}
function HL(e) {
  return Math.max(0, -os(Math.abs(e)));
}
function WL(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(os(t) / 3))) * 3 - os(Math.abs(e)));
}
function GL(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, os(t) - os(e)) + 1;
}
function VL(e, t, n, r) {
  var o = dg(e, t, n), i;
  switch (r = el(r ?? ",f"), r.type) {
    case "s": {
      var s = Math.max(Math.abs(e), Math.abs(t));
      return r.precision == null && !isNaN(i = WL(o, s)) && (r.precision = i), Bk(r, s);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(i = GL(o, Math.max(Math.abs(e), Math.abs(t)))) && (r.precision = i - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(i = HL(o)) && (r.precision = i - (r.type === "%") * 2);
      break;
    }
  }
  return ky(r);
}
function cf(e) {
  var t = e.domain;
  return e.ticks = function(n) {
    var r = t();
    return ug(r[0], r[r.length - 1], n ?? 10);
  }, e.tickFormat = function(n, r) {
    var o = t();
    return VL(o[0], o[o.length - 1], n ?? 10, r);
  }, e.nice = function(n) {
    n == null && (n = 10);
    var r = t(), o = 0, i = r.length - 1, s = r[o], a = r[i], l, u, c = 10;
    for (a < s && (u = s, s = a, a = u, u = o, o = i, i = u); c-- > 0; ) {
      if (u = cg(s, a, n), u === l)
        return r[o] = s, r[i] = a, t(r);
      if (u > 0)
        s = Math.floor(s / u) * u, a = Math.ceil(a / u) * u;
      else if (u < 0)
        s = Math.ceil(s * u) / u, a = Math.floor(a * u) / u;
      else
        break;
      l = u;
    }
    return e;
  }, e;
}
function Iy() {
  var e = zk();
  return e.copy = function() {
    return Sl(e, Iy());
  }, yo.apply(e, arguments), cf(e);
}
function jk(e, t) {
  e = e.slice();
  var n = 0, r = e.length - 1, o = e[n], i = e[r], s;
  return i < o && (s = n, n = r, r = s, s = o, o = i, i = s), e[n] = t.floor(o), e[r] = t.ceil(i), e;
}
function f1(e) {
  return Math.log(e);
}
function p1(e) {
  return Math.exp(e);
}
function YL(e) {
  return -Math.log(-e);
}
function KL(e) {
  return -Math.exp(-e);
}
function XL(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function qL(e) {
  return e === 10 ? XL : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function QL(e) {
  return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function h1(e) {
  return (t, n) => -e(-t, n);
}
function Uk(e) {
  const t = e(f1, p1), n = t.domain;
  let r = 10, o, i;
  function s() {
    return o = QL(r), i = qL(r), n()[0] < 0 ? (o = h1(o), i = h1(i), e(YL, KL)) : e(f1, p1), t;
  }
  return t.base = function(a) {
    return arguments.length ? (r = +a, s()) : r;
  }, t.domain = function(a) {
    return arguments.length ? (n(a), s()) : n();
  }, t.ticks = (a) => {
    const l = n();
    let u = l[0], c = l[l.length - 1];
    const d = c < u;
    d && ([u, c] = [c, u]);
    let p = o(u), f = o(c), h, g;
    const x = a == null ? 10 : +a;
    let y = [];
    if (!(r % 1) && f - p < x) {
      if (p = Math.floor(p), f = Math.ceil(f), u > 0) {
        for (; p <= f; ++p)
          for (h = 1; h < r; ++h)
            if (g = p < 0 ? h / i(-p) : h * i(p), !(g < u)) {
              if (g > c) break;
              y.push(g);
            }
      } else for (; p <= f; ++p)
        for (h = r - 1; h >= 1; --h)
          if (g = p > 0 ? h / i(-p) : h * i(p), !(g < u)) {
            if (g > c) break;
            y.push(g);
          }
      y.length * 2 < x && (y = ug(u, c, x));
    } else
      y = ug(p, f, Math.min(f - p, x)).map(i);
    return d ? y.reverse() : y;
  }, t.tickFormat = (a, l) => {
    if (a == null && (a = 10), l == null && (l = r === 10 ? "s" : ","), typeof l != "function" && (!(r % 1) && (l = el(l)).precision == null && (l.trim = !0), l = ky(l)), a === 1 / 0) return l;
    const u = Math.max(1, r * a / t.ticks().length);
    return (c) => {
      let d = c / i(Math.round(o(c)));
      return d * r < r - 0.5 && (d *= r), d <= u ? l(c) : "";
    };
  }, t.nice = () => n(jk(n(), {
    floor: (a) => i(Math.floor(o(a))),
    ceil: (a) => i(Math.ceil(o(a)))
  })), t;
}
function Nc() {
  const e = Uk(uf()).domain([1, 10]);
  return e.copy = () => Sl(e, Nc()).base(e.base()), yo.apply(e, arguments), e;
}
function g1(e) {
  return function(t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e));
  };
}
function m1(e) {
  return function(t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
  };
}
function ZL(e) {
  var t = 1, n = e(g1(t), m1(t));
  return n.constant = function(r) {
    return arguments.length ? e(g1(t = +r), m1(t)) : t;
  }, cf(n);
}
function Hk() {
  var e = ZL(uf());
  return e.copy = function() {
    return Sl(e, Hk()).constant(e.constant());
  }, yo.apply(e, arguments);
}
function y1(e) {
  return function(t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function JL(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function eN(e) {
  return e < 0 ? -e * e : e * e;
}
function Wk(e) {
  var t = e(Sn, Sn), n = 1;
  function r() {
    return n === 1 ? e(Sn, Sn) : n === 0.5 ? e(JL, eN) : e(y1(n), y1(1 / n));
  }
  return t.exponent = function(o) {
    return arguments.length ? (n = +o, r()) : n;
  }, cf(t);
}
function Ty() {
  var e = Wk(uf());
  return e.copy = function() {
    return Sl(e, Ty()).exponent(e.exponent());
  }, yo.apply(e, arguments), e;
}
function tN() {
  return Ty.apply(null, arguments).exponent(0.5);
}
function Ey() {
  var e = [0.5], t = [0, 1], n, r = 1;
  function o(i) {
    return i != null && i <= i ? t[Ok(e, i, 0, r)] : n;
  }
  return o.domain = function(i) {
    return arguments.length ? (e = Array.from(i), r = Math.min(e.length, t.length - 1), o) : e.slice();
  }, o.range = function(i) {
    return arguments.length ? (t = Array.from(i), r = Math.min(e.length, t.length - 1), o) : t.slice();
  }, o.invertExtent = function(i) {
    var s = t.indexOf(i);
    return [e[s - 1], e[s]];
  }, o.unknown = function(i) {
    return arguments.length ? (n = i, o) : n;
  }, o.copy = function() {
    return Ey().domain(e).range(t).unknown(n);
  }, yo.apply(o, arguments);
}
const zp = /* @__PURE__ */ new Date(), Bp = /* @__PURE__ */ new Date();
function ft(e, t, n, r) {
  function o(i) {
    return e(i = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+i)), i;
  }
  return o.floor = (i) => (e(i = /* @__PURE__ */ new Date(+i)), i), o.ceil = (i) => (e(i = new Date(i - 1)), t(i, 1), e(i), i), o.round = (i) => {
    const s = o(i), a = o.ceil(i);
    return i - s < a - i ? s : a;
  }, o.offset = (i, s) => (t(i = /* @__PURE__ */ new Date(+i), s == null ? 1 : Math.floor(s)), i), o.range = (i, s, a) => {
    const l = [];
    if (i = o.ceil(i), a = a == null ? 1 : Math.floor(a), !(i < s) || !(a > 0)) return l;
    let u;
    do
      l.push(u = /* @__PURE__ */ new Date(+i)), t(i, a), e(i);
    while (u < i && i < s);
    return l;
  }, o.filter = (i) => ft((s) => {
    if (s >= s) for (; e(s), !i(s); ) s.setTime(s - 1);
  }, (s, a) => {
    if (s >= s)
      if (a < 0) for (; ++a <= 0; )
        for (; t(s, -1), !i(s); )
          ;
      else for (; --a >= 0; )
        for (; t(s, 1), !i(s); )
          ;
  }), n && (o.count = (i, s) => (zp.setTime(+i), Bp.setTime(+s), e(zp), e(Bp), Math.floor(n(zp, Bp))), o.every = (i) => (i = Math.floor(i), !isFinite(i) || !(i > 0) ? null : i > 1 ? o.filter(r ? (s) => r(s) % i === 0 : (s) => o.count(0, s) % i === 0) : o)), o;
}
const Dc = ft(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
Dc.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? ft((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, n) => {
  t.setTime(+t + n * e);
}, (t, n) => (n - t) / e) : Dc);
Dc.range;
const kr = 1e3, kn = kr * 60, Ir = kn * 60, Lr = Ir * 24, Py = Lr * 7, v1 = Lr * 30, jp = Lr * 365, Bo = ft((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * kr);
}, (e, t) => (t - e) / kr, (e) => e.getUTCSeconds());
Bo.range;
const My = ft((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * kr);
}, (e, t) => {
  e.setTime(+e + t * kn);
}, (e, t) => (t - e) / kn, (e) => e.getMinutes());
My.range;
const Ay = ft((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * kn);
}, (e, t) => (t - e) / kn, (e) => e.getUTCMinutes());
Ay.range;
const Ry = ft((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * kr - e.getMinutes() * kn);
}, (e, t) => {
  e.setTime(+e + t * Ir);
}, (e, t) => (t - e) / Ir, (e) => e.getHours());
Ry.range;
const _y = ft((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * Ir);
}, (e, t) => (t - e) / Ir, (e) => e.getUTCHours());
_y.range;
const kl = ft(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * kn) / Lr,
  (e) => e.getDate() - 1
);
kl.range;
const df = ft((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Lr, (e) => e.getUTCDate() - 1);
df.range;
const Gk = ft((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Lr, (e) => Math.floor(e / Lr));
Gk.range;
function ii(e) {
  return ft((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setDate(t.getDate() + n * 7);
  }, (t, n) => (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * kn) / Py);
}
const ff = ii(0), Fc = ii(1), nN = ii(2), rN = ii(3), is = ii(4), oN = ii(5), iN = ii(6);
ff.range;
Fc.range;
nN.range;
rN.range;
is.range;
oN.range;
iN.range;
function si(e) {
  return ft((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setUTCDate(t.getUTCDate() + n * 7);
  }, (t, n) => (n - t) / Py);
}
const pf = si(0), zc = si(1), sN = si(2), aN = si(3), ss = si(4), lN = si(5), uN = si(6);
pf.range;
zc.range;
sN.range;
aN.range;
ss.range;
lN.range;
uN.range;
const $y = ft((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
$y.range;
const Oy = ft((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
Oy.range;
const Nr = ft((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
Nr.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : ft((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, n) => {
  t.setFullYear(t.getFullYear() + n * e);
});
Nr.range;
const Dr = ft((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
Dr.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : ft((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, n) => {
  t.setUTCFullYear(t.getUTCFullYear() + n * e);
});
Dr.range;
function Vk(e, t, n, r, o, i) {
  const s = [
    [Bo, 1, kr],
    [Bo, 5, 5 * kr],
    [Bo, 15, 15 * kr],
    [Bo, 30, 30 * kr],
    [i, 1, kn],
    [i, 5, 5 * kn],
    [i, 15, 15 * kn],
    [i, 30, 30 * kn],
    [o, 1, Ir],
    [o, 3, 3 * Ir],
    [o, 6, 6 * Ir],
    [o, 12, 12 * Ir],
    [r, 1, Lr],
    [r, 2, 2 * Lr],
    [n, 1, Py],
    [t, 1, v1],
    [t, 3, 3 * v1],
    [e, 1, jp]
  ];
  function a(u, c, d) {
    const p = c < u;
    p && ([u, c] = [c, u]);
    const f = d && typeof d.range == "function" ? d : l(u, c, d), h = f ? f.range(u, +c + 1) : [];
    return p ? h.reverse() : h;
  }
  function l(u, c, d) {
    const p = Math.abs(c - u) / d, f = yy(([, , x]) => x).right(s, p);
    if (f === s.length) return e.every(dg(u / jp, c / jp, d));
    if (f === 0) return Dc.every(Math.max(dg(u, c, d), 1));
    const [h, g] = s[p / s[f - 1][2] < s[f][2] / p ? f - 1 : f];
    return h.every(g);
  }
  return [a, l];
}
const [cN, dN] = Vk(Dr, Oy, pf, Gk, _y, Ay), [fN, pN] = Vk(Nr, $y, ff, kl, Ry, My);
function Up(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Hp(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function Vs(e, t, n) {
  return { y: e, m: t, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function hN(e) {
  var t = e.dateTime, n = e.date, r = e.time, o = e.periods, i = e.days, s = e.shortDays, a = e.months, l = e.shortMonths, u = Ys(o), c = Ks(o), d = Ys(i), p = Ks(i), f = Ys(s), h = Ks(s), g = Ys(a), x = Ks(a), y = Ys(l), m = Ks(l), v = {
    a: D,
    A: R,
    b: F,
    B: z,
    c: null,
    d: k1,
    e: k1,
    f: DN,
    g: YN,
    G: XN,
    H: ON,
    I: LN,
    j: NN,
    L: Yk,
    m: FN,
    M: zN,
    p: H,
    q: W,
    Q: E1,
    s: P1,
    S: BN,
    u: jN,
    U: UN,
    V: HN,
    w: WN,
    W: GN,
    x: null,
    X: null,
    y: VN,
    Y: KN,
    Z: qN,
    "%": T1
  }, C = {
    a: q,
    A: J,
    b: se,
    B: ee,
    c: null,
    d: I1,
    e: I1,
    f: eD,
    g: cD,
    G: fD,
    H: QN,
    I: ZN,
    j: JN,
    L: Xk,
    m: tD,
    M: nD,
    p: ne,
    q: Z,
    Q: E1,
    s: P1,
    S: rD,
    u: oD,
    U: iD,
    V: sD,
    w: aD,
    W: lD,
    x: null,
    X: null,
    y: uD,
    Y: dD,
    Z: pD,
    "%": T1
  }, S = {
    a: O,
    A: _,
    b: w,
    B: A,
    c: P,
    d: b1,
    e: b1,
    f: AN,
    g: w1,
    G: C1,
    H: S1,
    I: S1,
    j: TN,
    L: MN,
    m: IN,
    M: EN,
    p: L,
    q: kN,
    Q: _N,
    s: $N,
    S: PN,
    u: xN,
    U: CN,
    V: wN,
    w: vN,
    W: bN,
    x: M,
    X: $,
    y: w1,
    Y: C1,
    Z: SN,
    "%": RN
  };
  v.x = b(n, v), v.X = b(r, v), v.c = b(t, v), C.x = b(n, C), C.X = b(r, C), C.c = b(t, C);
  function b(U, X) {
    return function(re) {
      var j = [], ae = -1, Q = 0, we = U.length, he, be, wt;
      for (re instanceof Date || (re = /* @__PURE__ */ new Date(+re)); ++ae < we; )
        U.charCodeAt(ae) === 37 && (j.push(U.slice(Q, ae)), (be = x1[he = U.charAt(++ae)]) != null ? he = U.charAt(++ae) : be = he === "e" ? " " : "0", (wt = X[he]) && (he = wt(re, be)), j.push(he), Q = ae + 1);
      return j.push(U.slice(Q, ae)), j.join("");
    };
  }
  function I(U, X) {
    return function(re) {
      var j = Vs(1900, void 0, 1), ae = T(j, U, re += "", 0), Q, we;
      if (ae != re.length) return null;
      if ("Q" in j) return new Date(j.Q);
      if ("s" in j) return new Date(j.s * 1e3 + ("L" in j ? j.L : 0));
      if (X && !("Z" in j) && (j.Z = 0), "p" in j && (j.H = j.H % 12 + j.p * 12), j.m === void 0 && (j.m = "q" in j ? j.q : 0), "V" in j) {
        if (j.V < 1 || j.V > 53) return null;
        "w" in j || (j.w = 1), "Z" in j ? (Q = Hp(Vs(j.y, 0, 1)), we = Q.getUTCDay(), Q = we > 4 || we === 0 ? zc.ceil(Q) : zc(Q), Q = df.offset(Q, (j.V - 1) * 7), j.y = Q.getUTCFullYear(), j.m = Q.getUTCMonth(), j.d = Q.getUTCDate() + (j.w + 6) % 7) : (Q = Up(Vs(j.y, 0, 1)), we = Q.getDay(), Q = we > 4 || we === 0 ? Fc.ceil(Q) : Fc(Q), Q = kl.offset(Q, (j.V - 1) * 7), j.y = Q.getFullYear(), j.m = Q.getMonth(), j.d = Q.getDate() + (j.w + 6) % 7);
      } else ("W" in j || "U" in j) && ("w" in j || (j.w = "u" in j ? j.u % 7 : "W" in j ? 1 : 0), we = "Z" in j ? Hp(Vs(j.y, 0, 1)).getUTCDay() : Up(Vs(j.y, 0, 1)).getDay(), j.m = 0, j.d = "W" in j ? (j.w + 6) % 7 + j.W * 7 - (we + 5) % 7 : j.w + j.U * 7 - (we + 6) % 7);
      return "Z" in j ? (j.H += j.Z / 100 | 0, j.M += j.Z % 100, Hp(j)) : Up(j);
    };
  }
  function T(U, X, re, j) {
    for (var ae = 0, Q = X.length, we = re.length, he, be; ae < Q; ) {
      if (j >= we) return -1;
      if (he = X.charCodeAt(ae++), he === 37) {
        if (he = X.charAt(ae++), be = S[he in x1 ? X.charAt(ae++) : he], !be || (j = be(U, re, j)) < 0) return -1;
      } else if (he != re.charCodeAt(j++))
        return -1;
    }
    return j;
  }
  function L(U, X, re) {
    var j = u.exec(X.slice(re));
    return j ? (U.p = c.get(j[0].toLowerCase()), re + j[0].length) : -1;
  }
  function O(U, X, re) {
    var j = f.exec(X.slice(re));
    return j ? (U.w = h.get(j[0].toLowerCase()), re + j[0].length) : -1;
  }
  function _(U, X, re) {
    var j = d.exec(X.slice(re));
    return j ? (U.w = p.get(j[0].toLowerCase()), re + j[0].length) : -1;
  }
  function w(U, X, re) {
    var j = y.exec(X.slice(re));
    return j ? (U.m = m.get(j[0].toLowerCase()), re + j[0].length) : -1;
  }
  function A(U, X, re) {
    var j = g.exec(X.slice(re));
    return j ? (U.m = x.get(j[0].toLowerCase()), re + j[0].length) : -1;
  }
  function P(U, X, re) {
    return T(U, t, X, re);
  }
  function M(U, X, re) {
    return T(U, n, X, re);
  }
  function $(U, X, re) {
    return T(U, r, X, re);
  }
  function D(U) {
    return s[U.getDay()];
  }
  function R(U) {
    return i[U.getDay()];
  }
  function F(U) {
    return l[U.getMonth()];
  }
  function z(U) {
    return a[U.getMonth()];
  }
  function H(U) {
    return o[+(U.getHours() >= 12)];
  }
  function W(U) {
    return 1 + ~~(U.getMonth() / 3);
  }
  function q(U) {
    return s[U.getUTCDay()];
  }
  function J(U) {
    return i[U.getUTCDay()];
  }
  function se(U) {
    return l[U.getUTCMonth()];
  }
  function ee(U) {
    return a[U.getUTCMonth()];
  }
  function ne(U) {
    return o[+(U.getUTCHours() >= 12)];
  }
  function Z(U) {
    return 1 + ~~(U.getUTCMonth() / 3);
  }
  return {
    format: function(U) {
      var X = b(U += "", v);
      return X.toString = function() {
        return U;
      }, X;
    },
    parse: function(U) {
      var X = I(U += "", !1);
      return X.toString = function() {
        return U;
      }, X;
    },
    utcFormat: function(U) {
      var X = b(U += "", C);
      return X.toString = function() {
        return U;
      }, X;
    },
    utcParse: function(U) {
      var X = I(U += "", !0);
      return X.toString = function() {
        return U;
      }, X;
    }
  };
}
var x1 = { "-": "", _: " ", 0: "0" }, yt = /^\s*\d+/, gN = /^%/, mN = /[\\^$*+?|[\]().{}]/g;
function Pe(e, t, n) {
  var r = e < 0 ? "-" : "", o = (r ? -e : e) + "", i = o.length;
  return r + (i < n ? new Array(n - i + 1).join(t) + o : o);
}
function yN(e) {
  return e.replace(mN, "\\$&");
}
function Ys(e) {
  return new RegExp("^(?:" + e.map(yN).join("|") + ")", "i");
}
function Ks(e) {
  return new Map(e.map((t, n) => [t.toLowerCase(), n]));
}
function vN(e, t, n) {
  var r = yt.exec(t.slice(n, n + 1));
  return r ? (e.w = +r[0], n + r[0].length) : -1;
}
function xN(e, t, n) {
  var r = yt.exec(t.slice(n, n + 1));
  return r ? (e.u = +r[0], n + r[0].length) : -1;
}
function CN(e, t, n) {
  var r = yt.exec(t.slice(n, n + 2));
  return r ? (e.U = +r[0], n + r[0].length) : -1;
}
function wN(e, t, n) {
  var r = yt.exec(t.slice(n, n + 2));
  return r ? (e.V = +r[0], n + r[0].length) : -1;
}
function bN(e, t, n) {
  var r = yt.exec(t.slice(n, n + 2));
  return r ? (e.W = +r[0], n + r[0].length) : -1;
}
function C1(e, t, n) {
  var r = yt.exec(t.slice(n, n + 4));
  return r ? (e.y = +r[0], n + r[0].length) : -1;
}
function w1(e, t, n) {
  var r = yt.exec(t.slice(n, n + 2));
  return r ? (e.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), n + r[0].length) : -1;
}
function SN(e, t, n) {
  var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
  return r ? (e.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), n + r[0].length) : -1;
}
function kN(e, t, n) {
  var r = yt.exec(t.slice(n, n + 1));
  return r ? (e.q = r[0] * 3 - 3, n + r[0].length) : -1;
}
function IN(e, t, n) {
  var r = yt.exec(t.slice(n, n + 2));
  return r ? (e.m = r[0] - 1, n + r[0].length) : -1;
}
function b1(e, t, n) {
  var r = yt.exec(t.slice(n, n + 2));
  return r ? (e.d = +r[0], n + r[0].length) : -1;
}
function TN(e, t, n) {
  var r = yt.exec(t.slice(n, n + 3));
  return r ? (e.m = 0, e.d = +r[0], n + r[0].length) : -1;
}
function S1(e, t, n) {
  var r = yt.exec(t.slice(n, n + 2));
  return r ? (e.H = +r[0], n + r[0].length) : -1;
}
function EN(e, t, n) {
  var r = yt.exec(t.slice(n, n + 2));
  return r ? (e.M = +r[0], n + r[0].length) : -1;
}
function PN(e, t, n) {
  var r = yt.exec(t.slice(n, n + 2));
  return r ? (e.S = +r[0], n + r[0].length) : -1;
}
function MN(e, t, n) {
  var r = yt.exec(t.slice(n, n + 3));
  return r ? (e.L = +r[0], n + r[0].length) : -1;
}
function AN(e, t, n) {
  var r = yt.exec(t.slice(n, n + 6));
  return r ? (e.L = Math.floor(r[0] / 1e3), n + r[0].length) : -1;
}
function RN(e, t, n) {
  var r = gN.exec(t.slice(n, n + 1));
  return r ? n + r[0].length : -1;
}
function _N(e, t, n) {
  var r = yt.exec(t.slice(n));
  return r ? (e.Q = +r[0], n + r[0].length) : -1;
}
function $N(e, t, n) {
  var r = yt.exec(t.slice(n));
  return r ? (e.s = +r[0], n + r[0].length) : -1;
}
function k1(e, t) {
  return Pe(e.getDate(), t, 2);
}
function ON(e, t) {
  return Pe(e.getHours(), t, 2);
}
function LN(e, t) {
  return Pe(e.getHours() % 12 || 12, t, 2);
}
function NN(e, t) {
  return Pe(1 + kl.count(Nr(e), e), t, 3);
}
function Yk(e, t) {
  return Pe(e.getMilliseconds(), t, 3);
}
function DN(e, t) {
  return Yk(e, t) + "000";
}
function FN(e, t) {
  return Pe(e.getMonth() + 1, t, 2);
}
function zN(e, t) {
  return Pe(e.getMinutes(), t, 2);
}
function BN(e, t) {
  return Pe(e.getSeconds(), t, 2);
}
function jN(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function UN(e, t) {
  return Pe(ff.count(Nr(e) - 1, e), t, 2);
}
function Kk(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? is(e) : is.ceil(e);
}
function HN(e, t) {
  return e = Kk(e), Pe(is.count(Nr(e), e) + (Nr(e).getDay() === 4), t, 2);
}
function WN(e) {
  return e.getDay();
}
function GN(e, t) {
  return Pe(Fc.count(Nr(e) - 1, e), t, 2);
}
function VN(e, t) {
  return Pe(e.getFullYear() % 100, t, 2);
}
function YN(e, t) {
  return e = Kk(e), Pe(e.getFullYear() % 100, t, 2);
}
function KN(e, t) {
  return Pe(e.getFullYear() % 1e4, t, 4);
}
function XN(e, t) {
  var n = e.getDay();
  return e = n >= 4 || n === 0 ? is(e) : is.ceil(e), Pe(e.getFullYear() % 1e4, t, 4);
}
function qN(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + Pe(t / 60 | 0, "0", 2) + Pe(t % 60, "0", 2);
}
function I1(e, t) {
  return Pe(e.getUTCDate(), t, 2);
}
function QN(e, t) {
  return Pe(e.getUTCHours(), t, 2);
}
function ZN(e, t) {
  return Pe(e.getUTCHours() % 12 || 12, t, 2);
}
function JN(e, t) {
  return Pe(1 + df.count(Dr(e), e), t, 3);
}
function Xk(e, t) {
  return Pe(e.getUTCMilliseconds(), t, 3);
}
function eD(e, t) {
  return Xk(e, t) + "000";
}
function tD(e, t) {
  return Pe(e.getUTCMonth() + 1, t, 2);
}
function nD(e, t) {
  return Pe(e.getUTCMinutes(), t, 2);
}
function rD(e, t) {
  return Pe(e.getUTCSeconds(), t, 2);
}
function oD(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function iD(e, t) {
  return Pe(pf.count(Dr(e) - 1, e), t, 2);
}
function qk(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? ss(e) : ss.ceil(e);
}
function sD(e, t) {
  return e = qk(e), Pe(ss.count(Dr(e), e) + (Dr(e).getUTCDay() === 4), t, 2);
}
function aD(e) {
  return e.getUTCDay();
}
function lD(e, t) {
  return Pe(zc.count(Dr(e) - 1, e), t, 2);
}
function uD(e, t) {
  return Pe(e.getUTCFullYear() % 100, t, 2);
}
function cD(e, t) {
  return e = qk(e), Pe(e.getUTCFullYear() % 100, t, 2);
}
function dD(e, t) {
  return Pe(e.getUTCFullYear() % 1e4, t, 4);
}
function fD(e, t) {
  var n = e.getUTCDay();
  return e = n >= 4 || n === 0 ? ss(e) : ss.ceil(e), Pe(e.getUTCFullYear() % 1e4, t, 4);
}
function pD() {
  return "+0000";
}
function T1() {
  return "%";
}
function E1(e) {
  return +e;
}
function P1(e) {
  return Math.floor(+e / 1e3);
}
var yi, Qk, Zk;
hD({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function hD(e) {
  return yi = hN(e), Qk = yi.format, yi.parse, Zk = yi.utcFormat, yi.utcParse, yi;
}
function gD(e) {
  return new Date(e);
}
function mD(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function Ly(e, t, n, r, o, i, s, a, l, u) {
  var c = zk(), d = c.invert, p = c.domain, f = u(".%L"), h = u(":%S"), g = u("%I:%M"), x = u("%I %p"), y = u("%a %d"), m = u("%b %d"), v = u("%B"), C = u("%Y");
  function S(b) {
    return (l(b) < b ? f : a(b) < b ? h : s(b) < b ? g : i(b) < b ? x : r(b) < b ? o(b) < b ? y : m : n(b) < b ? v : C)(b);
  }
  return c.invert = function(b) {
    return new Date(d(b));
  }, c.domain = function(b) {
    return arguments.length ? p(Array.from(b, mD)) : p().map(gD);
  }, c.ticks = function(b) {
    var I = p();
    return e(I[0], I[I.length - 1], b ?? 10);
  }, c.tickFormat = function(b, I) {
    return I == null ? S : u(I);
  }, c.nice = function(b) {
    var I = p();
    return (!b || typeof b.range != "function") && (b = t(I[0], I[I.length - 1], b ?? 10)), b ? p(jk(I, b)) : c;
  }, c.copy = function() {
    return Sl(c, Ly(e, t, n, r, o, i, s, a, l, u));
  }, c;
}
function Jk() {
  return yo.apply(Ly(fN, pN, Nr, $y, ff, kl, Ry, My, Bo, Qk).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function yD() {
  return yo.apply(Ly(cN, dN, Dr, Oy, pf, df, _y, Ay, Bo, Zk).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
function Ny() {
  var e = 0, t = 1, n, r, o, i, s = Sn, a = !1, l;
  function u(d) {
    return d == null || isNaN(d = +d) ? l : s(o === 0 ? 0.5 : (d = (i(d) - n) * o, a ? Math.max(0, Math.min(1, d)) : d));
  }
  u.domain = function(d) {
    return arguments.length ? ([e, t] = d, n = i(e = +e), r = i(t = +t), o = n === r ? 0 : 1 / (r - n), u) : [e, t];
  }, u.clamp = function(d) {
    return arguments.length ? (a = !!d, u) : a;
  }, u.interpolator = function(d) {
    return arguments.length ? (s = d, u) : s;
  };
  function c(d) {
    return function(p) {
      var f, h;
      return arguments.length ? ([f, h] = p, s = d(f, h), u) : [s(0), s(1)];
    };
  }
  return u.range = c(lf), u.rangeRound = c(Fk), u.unknown = function(d) {
    return arguments.length ? (l = d, u) : l;
  }, function(d) {
    return i = d, n = d(e), r = d(t), o = n === r ? 0 : 1 / (r - n), u;
  };
}
function Dy(e, t) {
  return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown());
}
function Bc() {
  var e = cf(Ny()(Sn));
  return e.copy = function() {
    return Dy(e, Bc());
  }, vy.apply(e, arguments);
}
function eI() {
  var e = Uk(Ny()).domain([1, 10]);
  return e.copy = function() {
    return Dy(e, eI()).base(e.base());
  }, vy.apply(e, arguments);
}
function tI() {
  var e = Wk(Ny());
  return e.copy = function() {
    return Dy(e, tI()).exponent(e.exponent());
  }, vy.apply(e, arguments);
}
function vD() {
  return tI.apply(null, arguments).exponent(0.5);
}
function M1(e) {
  return Array.isArray(e) ? JSON.stringify(e) : typeof e == "object" && e !== null ? e.valueOf() : e;
}
function nI(e) {
  let t = e ? e.index : new Ac(void 0, M1), n = e ? e.domain : [], r = e ? e.r0 : 0, o = e ? e.r1 : 1, i = e ? e.isRound : !1, s = e ? e.paddingInner : 0, a = e ? e.paddingOuter : 0, l = e ? e.align : 0.5, u, c, d = !1, p = 0;
  const f = (g) => {
    const x = t.get(g);
    if (x === void 0)
      return;
    const y = n.length;
    if (y === 0)
      return;
    const m = d ? y - 1 - x % y : x % y;
    return p + u * m;
  }, h = () => {
    const g = n.length;
    d = o < r;
    const x = d ? o : r, y = d ? r : o;
    u = (y - x) / Math.max(1, g - s + a * 2), i && (u = Math.floor(u));
    let m = x + (y - x - u * (g - s)) * l;
    return c = u * (1 - s), i && (m = Math.round(m), c = Math.round(c)), p = m, f;
  };
  return f.domain = function(g) {
    if (!arguments.length)
      return n.slice();
    n = [], t = new Ac(void 0, M1);
    for (const x of g)
      t.has(x) || t.set(x, n.push(x) - 1);
    return h();
  }, f.range = function(g) {
    if (!arguments.length)
      return [r, o];
    const [x, y] = g;
    return r = +x, o = +y, h();
  }, f.rangeRound = function(g) {
    const [x, y] = g;
    return r = +x, o = +y, i = !0, h();
  }, f.bandwidth = function() {
    return c;
  }, f.step = function() {
    return u;
  }, f.round = function(g) {
    return arguments.length ? (i = !!g, h()) : i;
  }, f.padding = function(g) {
    return arguments.length ? (s = Math.min(1, a = +g), h()) : s;
  }, f.paddingInner = function(g) {
    return arguments.length ? (s = Math.min(1, g), h()) : s;
  }, f.paddingOuter = function(g) {
    return arguments.length ? (a = +g, h()) : a;
  }, f.align = function(g) {
    return arguments.length ? (l = Math.max(0, Math.min(1, g)), h()) : l;
  }, f.copy = () => nI({
    index: t,
    domain: n,
    r0: r,
    r1: o,
    isRound: i,
    paddingInner: s,
    paddingOuter: a,
    align: l
  }), h(), f;
}
function hf(...e) {
  const t = nI(), [n, r] = e;
  return e.length > 1 ? (t.domain(n), t.range(r)) : n && t.range(n), t;
}
function Fy(...e) {
  const t = hf(...e).paddingInner(1), n = t.copy;
  return t.padding = t.paddingOuter, delete t.paddingInner, delete t.paddingOuter, t.copy = () => {
    const r = n();
    return r.padding = r.paddingOuter, delete r.paddingInner, delete r.paddingOuter, r.copy = t.copy, r;
  }, t;
}
function rI(...e) {
  const t = Hk(...e), n = t.ticks, {
    negativeScale: r,
    linearScale: o,
    positiveScale: i
  } = xD(t);
  return t.ticks = (s) => {
    const a = n(s), l = t.constant();
    let u = 0, c = 0, d = 0;
    a.forEach((f) => {
      f > -l && f < l && (c += 1), f <= -l && (u += 1), f >= l && (d += 1);
    });
    const p = [];
    if (u > 0 && p.push(...r.ticks(u)), c > 0) {
      const f = o.ticks(c);
      p.at(-1) === f[0] ? p.push(...f.slice(1)) : p.push(...f);
    }
    if (d > 0) {
      const f = i.ticks(d);
      p.at(-1) === f[0] ? p.push(...f.slice(1)) : p.push(...f);
    }
    return p;
  }, t.tickFormat = (s = 10, a) => {
    const l = t.constant(), [u, c] = t.domain(), d = c - u, p = r.domain(), f = p[1] - p[0], g = (d === 0 ? 0 : f / d) * s, x = o.domain(), y = x[1] - x[0], v = (d === 0 ? 0 : y / d) * s, C = i.domain(), S = C[1] - C[0], I = (d === 0 ? 0 : S / d) * s, T = r.tickFormat(g, a), L = o.tickFormat(v, a), O = i.tickFormat(I, a);
    return (_) => /* eslint-disable-next-line no-nested-ternary */ (_.valueOf() <= -l ? T : _.valueOf() >= l ? O : L)(_);
  }, t.copy = () => rI(t.domain(), t.range()).constant(t.constant()), t;
}
function xD(e) {
  const t = e.constant(), n = e.domain(), r = [n[0], Math.min(n[1], -t)], o = Nc(r, e.range()), i = [Math.max(n[0], -t), Math.min(n[1], t)], s = Iy(i, e.range()), a = [Math.max(n[0], t), n[1]], l = Nc(a, e.range());
  return {
    negativeScale: o,
    linearScale: s,
    positiveScale: l
  };
}
function Il(e, t, n) {
  switch (e) {
    case "log":
      return Nc(t, n);
    case "pow":
      return Ty(t, n);
    case "sqrt":
      return tN(t, n);
    case "time":
      return Jk(t, n);
    case "utc":
      return yD(t, n);
    case "symlog":
      return rI(t, n);
    default:
      return Iy(t, n);
  }
}
const oI = 4, jc = 20, iI = 6, gg = 2, CD = 4;
function wD(e) {
  return "groups" in e && Array.isArray(e.groups) && e.groups.length > 0;
}
function bD(e, t) {
  const n = /* @__PURE__ */ new Set();
  for (let r = 0; r < e.length; r += 1) {
    const o = e[r], i = t.getValue(o, r);
    n.add(`${i}`);
  }
  return Array.from(n);
}
const Wp = 5;
function A1(e) {
  const t = e.split(`
`);
  return Math.max(...t.map((n) => $k(n)));
}
function sI(e) {
  if (e.length <= Wp)
    return e;
  const t = [];
  let n = 1, r = null;
  for (const o of e) {
    const i = o.split(`
`).length;
    i > n && (n = i, r = o);
    const s = A1(o);
    if (t.length < Wp || s > t[0].length) {
      const a = t.findIndex((l) => l.length > s);
      t.splice(a === -1 ? t.length : a, 0, {
        label: o,
        length: s
      }), t.length > Wp && t.shift();
    }
  }
  return r !== null && t.find((o) => o.label === r) === void 0 && t.push({
    label: r,
    length: A1(r)
  }), t.map((o) => o.label);
}
function SD(e, t) {
  const {
    valueFormatter: n,
    scaleType: r,
    data: o
  } = e;
  if (r === "band" || r === "point") {
    if (!o || o.length === 0)
      return [];
    const p = r === "band" ? hf(o, [0, 1]) : Fy(o, [0, 1]), f = o.map((h) => n ? n(h, {
      location: "tick",
      scale: p,
      defaultTickLabel: `${h}`
    }) : `${h}`);
    return sI(f);
  }
  const i = t ? t.domain[0] : 0, s = t ? t.domain[1] : 100, a = (t == null ? void 0 : t.tickNumber) ?? 2, u = Il(r ?? "linear", [i, s], [0, 1]), c = i === s ? [i] : [i, s], d = u.tickFormat(a);
  return c.map((p) => {
    const f = d(p);
    return n ? n(p, {
      location: "tick",
      scale: u,
      defaultTickLabel: f
    }) : f;
  });
}
function aI(e, t) {
  if (e.length === 0)
    return {
      maxWidth: 0,
      maxHeight: 0
    };
  const n = /* @__PURE__ */ new Set();
  for (const s of e) {
    const a = s.split(`
`);
    for (const l of a)
      n.add(l);
  }
  const r = Mk(n, t);
  let o = 0, i = 0;
  for (const s of e) {
    const a = s.split(`
`);
    let l = 0, u = 0;
    for (const c of a) {
      const d = r.get(c) ?? {
        width: 0,
        height: 0
      };
      l = Math.max(l, d.width), u += d.height;
    }
    o = Math.max(o, l), i = Math.max(i, u);
  }
  return {
    maxWidth: o,
    maxHeight: i
  };
}
function lI(e, t, n, r) {
  if (!n || n % 180 === 0)
    return r === "x" ? t : e;
  if (n % 90 === 0)
    return r === "x" ? e : t;
  const o = Zr(Math.abs(n)), i = Math.cos(o), s = Math.sin(o);
  return r === "x" ? Math.abs(e * s) + Math.abs(t * i) : Math.abs(e * i) + Math.abs(t * s);
}
function kD(e, t) {
  const {
    groups: n,
    data: r,
    tickSize: o,
    tickLabelStyle: i
  } = e, s = !!e.label;
  if (!r || r.length === 0)
    return {
      size: jc
    };
  const a = [], l = [], u = o ?? iI;
  for (let f = 0; f < n.length; f += 1) {
    const h = n[f], g = sI(bD(r, h)), x = N({}, i, h.tickLabelStyle), y = x == null ? void 0 : x.angle, {
      maxWidth: m,
      maxHeight: v
    } = aI(g, x);
    if (m === 0 && v === 0)
      return;
    const C = lI(m, v, y, t);
    l.push(C);
    const S = h.tickSize;
    if (S !== void 0)
      a.push(S);
    else if (f === 0)
      a.push(u);
    else {
      const b = a[f - 1] + gg + l[f - 1] + CD;
      a.push(b + u);
    }
  }
  const c = n.length - 1;
  let d = a[c] + gg + l[c];
  return s && (d += oi), d += oI, {
    size: Math.max(Math.ceil(d), jc),
    groupTickSizes: a
  };
}
function uI(e) {
  const {
    axis: t,
    direction: n,
    domain: r
  } = e;
  if (wD(t))
    return kD(t, n);
  const o = t.tickLabelStyle, i = t.tickSize ?? iI, s = !!t.label, a = o == null ? void 0 : o.angle, l = SD(t, r);
  if (l.length === 0)
    return {
      size: jc
    };
  const {
    maxWidth: u,
    maxHeight: c
  } = aI(l, o);
  if (u === 0 && c === 0)
    return;
  const d = lI(u, c, a, n);
  let p = i + gg + d;
  return s && (p += oi), p += oI, {
    size: Math.max(Math.ceil(p), jc)
  };
}
const cI = ({
  series: e,
  colors: t,
  theme: n,
  seriesConfig: r
}) => {
  const o = {}, i = /* @__PURE__ */ new Map();
  return e.forEach((s, a) => {
    var c;
    const l = r[s.type].getSeriesWithDefaultValues(s, a, t, n), u = l.id;
    if (o[s.type] === void 0 && (o[s.type] = {
      series: {},
      seriesOrder: []
    }), ((c = o[s.type]) == null ? void 0 : c.series[u]) !== void 0)
      throw new Error(ke(34, u));
    if (o[s.type].series[u] = l, o[s.type].seriesOrder.push(u), i.has(u))
      throw new Error(ke(35, u));
    i.set(u, s.type);
  }), {
    defaultizedSeries: o,
    idToType: i
  };
}, ID = (e, t, n, r) => {
  const o = {};
  return Object.keys(t).forEach((i) => {
    var a, l;
    const s = e[i];
    s !== void 0 && (o[i] = ((l = (a = t[i]) == null ? void 0 : a.seriesProcessor) == null ? void 0 : l.call(a, s, n, r)) ?? s);
  }), o;
}, TD = (e, t, n) => {
  let r = !1;
  const o = {};
  return Object.keys(e).forEach((i) => {
    var l;
    const s = (l = t[i]) == null ? void 0 : l.seriesLayout, a = e[i];
    if (s !== void 0 && a !== void 0) {
      const u = s(a, n);
      u && u !== e[i] && (r = !0, o[i] = u);
    }
  }), r ? o : {};
}, zy = (e, t) => {
  var r;
  const n = (r = e[t.type]) == null ? void 0 : r.identifierSerializer;
  if (!n)
    throw new Error(ke(43, t.type));
  return n(t);
}, dI = (e, t) => {
  var r;
  const n = (r = e[t.type]) == null ? void 0 : r.identifierCleaner;
  if (!n)
    throw new Error(ke(42, t.type));
  return n(t);
}, gf = ({
  store: e
}) => {
  const t = de((r) => zy(e.state.seriesConfig.config, r)), n = de(function(o) {
    return dI(e.state.seriesConfig.config, o);
  });
  return {
    instance: {
      serializeIdentifier: t,
      cleanIdentifier: n
    }
  };
};
gf.params = {
  seriesConfig: !0
};
gf.getDefaultizedParams = ({
  params: e
}) => N({}, e, {
  seriesConfig: e.seriesConfig ?? {}
});
gf.getInitialState = ({
  seriesConfig: e
}) => ({
  seriesConfig: {
    config: e
  }
});
const ED = (e) => e.seriesConfig, nt = V(ED, (e) => e.config), PD = (e) => e.visibilityManager, fI = /* @__PURE__ */ new Map(), MD = V(PD, (e) => (e == null ? void 0 : e.visibilityMap) ?? fI), AD = (e, t) => (n) => {
  const r = zy(t, n);
  return !e.has(r);
}, By = le(MD, nt, AD), pI = (e, t) => {
  const n = /* @__PURE__ */ new Map();
  return e && e.forEach((r) => {
    const o = zy(t, r);
    n.set(o, r);
  }), n;
}, RD = ["#4254FB", "#FFB422", "#FA4F58", "#0DBEFF", "#22BF75", "#FA83B4", "#FF7511"], _D = ["#495AFB", "#FFC758", "#F35865", "#30C8FF", "#44CE8D", "#F286B3", "#FF8C39"], hI = (e) => e === "dark" ? _D : RD;
function mf(e) {
  function t(n) {
    if (n.type !== void 0)
      return n;
    const r = e.series.idToType.get(n.seriesId);
    if (r === void 0)
      throw new Error(ke(36, n.seriesId));
    return N({}, n, {
      type: r
    });
  }
  return t;
}
const yf = ({
  params: e,
  store: t
}) => {
  const {
    series: n,
    dataset: r,
    theme: o,
    colors: i
  } = e;
  return dy(() => {
    const {
      defaultizedSeries: a,
      idToType: l
    } = cI({
      series: n,
      colors: typeof i == "function" ? i(o) : i,
      theme: o,
      seriesConfig: t.state.seriesConfig.config
    });
    t.set("series", N({}, t.state.series, {
      defaultizedSeries: a,
      idToType: l,
      dataset: r
    }));
  }, [i, r, n, o, t]), {
    instance: {
      identifierWithType: mf(t.state)
    }
  };
};
yf.params = {
  dataset: !0,
  series: !0,
  colors: !0,
  theme: !0
};
const $D = [];
yf.getDefaultizedParams = ({
  params: e
}) => {
  var t;
  return N({}, e, {
    series: (t = e.series) != null && t.length ? e.series : $D,
    colors: e.colors ?? hI,
    theme: e.theme ?? "light"
  });
};
yf.getInitialState = ({
  series: e = [],
  colors: t,
  theme: n,
  dataset: r
}, o) => {
  const i = o.seriesConfig.config, {
    defaultizedSeries: s,
    idToType: a
  } = cI({
    series: e,
    colors: typeof t == "function" ? t(n) : t,
    theme: n,
    seriesConfig: i
  });
  return {
    series: {
      defaultizedSeries: s,
      idToType: a,
      dataset: r
    }
  };
};
const vf = ({
  store: e,
  params: t,
  instance: n
}) => {
  dy(() => {
    t.hiddenItems !== void 0 && e.set("visibilityManager", N({}, e.state.visibilityManager, {
      visibilityMap: pI(t.hiddenItems.map((s) => n.identifierWithType(s, "visibility")), e.state.seriesConfig.config)
    }));
  }, [e, n, t.hiddenItems]);
  const r = de((s) => {
    var p;
    const a = e.state.visibilityManager.visibilityMap, l = n.identifierWithType(s, "visibility"), u = n.serializeIdentifier(l);
    if (a.has(u))
      return;
    const c = new Map(a);
    c.set(u, l), e.set("visibilityManager", N({}, e.state.visibilityManager, {
      visibilityMap: c
    }));
    const d = Array.from(c.values());
    (p = t.onHiddenItemsChange) == null || p.call(t, d);
  }), o = de((s) => {
    var d;
    const a = e.state.visibilityManager.visibilityMap, l = n.identifierWithType(s, "visibility"), u = n.serializeIdentifier(l);
    if (!a.has(u))
      return;
    const c = new Map(a);
    c.delete(u), e.set("visibilityManager", N({}, e.state.visibilityManager, {
      visibilityMap: c
    })), (d = t.onHiddenItemsChange) == null || d.call(t, Array.from(c.values()));
  }), i = de((s) => {
    const a = e.state.visibilityManager.visibilityMap, l = n.identifierWithType(s, "visibility"), u = n.serializeIdentifier(l);
    a.has(u) ? o(l) : r(l);
  });
  return {
    instance: {
      hideItem: r,
      showItem: o,
      toggleItemVisibility: i
    }
  };
};
vf.getInitialState = (e, t) => {
  const n = t.seriesConfig.config, r = e.hiddenItems ?? e.initialHiddenItems;
  return {
    visibilityManager: {
      visibilityMap: r ? pI(r.map((o) => mf(t)(o)), n) : fI,
      isControlled: e.hiddenItems !== void 0
    }
  };
};
vf.params = {
  onHiddenItemsChange: !0,
  hiddenItems: !0,
  initialHiddenItems: !0
};
const gI = (e) => e.series, mI = V(gI, (e) => e.defaultizedSeries), OD = V(gI, (e) => e.dataset), Te = le(mI, nt, OD, By, function(t, n, r, o) {
  return ID(t, n, r, o);
}), LD = le(nt, Te, (e, t) => function(r) {
  for (const o in t) {
    if (!Object.hasOwn(t, o))
      continue;
    const i = t[o];
    if (i != null && i.series && i.series[r])
      return e[o];
  }
  return null;
});
function vo(e) {
  return e.scaleType === "band";
}
function xo(e) {
  return e.scaleType === "point";
}
function ND(e) {
  return e.scaleType !== "point" && e.scaleType !== "band";
}
function DD(e) {
  return e.scaleType === "symlog";
}
let R1, _1;
class FD {
  constructor() {
    ue(this, "types", /* @__PURE__ */ new Set());
    if (R1)
      throw new Error(ke(24));
    R1 = this.types;
  }
  addType(t) {
    this.types.add(t);
  }
  getTypes() {
    return this.types;
  }
}
class zD {
  constructor() {
    ue(this, "types", /* @__PURE__ */ new Set());
    if (_1)
      throw new Error(ke(25));
    _1 = this.types;
  }
  addType(t) {
    this.types.add(t);
  }
  getTypes() {
    return this.types;
  }
}
const xf = new FD();
xf.addType("bar");
xf.addType("line");
xf.addType("scatter");
const yI = new zD();
yI.addType("radar");
function jy(e) {
  return xf.getTypes().has(e);
}
function tl(e) {
  return jy(e.type);
}
const BD = (e, t, n, r, o, i, s) => {
  var u;
  const a = n === "x" ? r[e].xExtremumGetter : r[e].yExtremumGetter, l = ((u = i[e]) == null ? void 0 : u.series) ?? {};
  return (a == null ? void 0 : a({
    series: l,
    axis: t,
    axisIndex: o,
    isDefaultAxis: o === 0,
    getFilters: s
  })) ?? [1 / 0, -1 / 0];
};
function Cf(e, t, n, r, o, i) {
  const s = Object.keys(n).filter(jy);
  let a = [1 / 0, -1 / 0];
  for (const l of s) {
    const [u, c] = BD(l, e, t, n, r, o, i);
    a = [Math.min(a[0], u), Math.max(a[1], c)];
  }
  return Number.isNaN(a[0]) || Number.isNaN(a[1]) ? [1 / 0, -1 / 0] : a;
}
const vI = {}, xI = le(Ln, Te, nt, function(t, n, r) {
  const o = {};
  let i = !1;
  return t == null || t.forEach((s, a) => {
    !vo(s) && !xo(s) && (o[s.id] = Cf(s, "x", r, a, n), i = !0);
  }), i ? o : vI;
}), CI = le(Vn, Te, nt, function(t, n, r) {
  const o = {};
  let i = !1;
  return t == null || t.forEach((s, a) => {
    !vo(s) && !xo(s) && (o[s.id] = Cf(s, "y", r, a, n), i = !0);
  }), i ? o : vI;
}), wI = (e, t, n, r) => {
  var o;
  if (e.domainLimit !== void 0)
    return e.domainLimit;
  if (t === "x")
    for (const i of ((o = r.line) == null ? void 0 : o.seriesOrder) ?? []) {
      const s = r.line.series[i];
      if (s.xAxisId === e.id || s.xAxisId === void 0 && n === 0)
        return "strict";
    }
  return "nice";
};
function Uy(e, t, n) {
  const {
    tickMaxStep: r,
    tickMinStep: o,
    tickNumber: i
  } = e, s = o === void 0 ? 999 : Math.floor(Math.abs(t[1] - t[0]) / o), a = r === void 0 ? 2 : Math.ceil(Math.abs(t[1] - t[0]) / r);
  return Math.min(s, Math.max(a, i ?? n));
}
function jD(e, t) {
  return t[1] - t[0] === 0 ? 1 : e / ((t[1] - t[0]) / 100);
}
function Hy(e) {
  return Math.floor(Math.abs(e) / 50);
}
function bI(e, t, n) {
  return Il(e ?? "linear", t, [0, 1]).nice(n).domain();
}
function UD(e, t, n, r, [o, i], s) {
  const a = wI(e, t, n, r);
  let l = kI(e, o, i);
  if (typeof a == "function") {
    const {
      min: c,
      max: d
    } = a(o.valueOf(), i.valueOf());
    l[0] = c, l[1] = d;
  }
  const u = Uy(e, l, s);
  return a === "nice" && (l = bI(e.scaleType, l, u)), l = ["min" in e ? e.min ?? l[0] : l[0], "max" in e ? e.max ?? l[1] : l[1]], {
    domain: l,
    tickNumber: u
  };
}
function SI(e, t, n, r, [o, i], s) {
  const a = wI(e, t, n, r);
  let l = kI(e, o, i);
  if (typeof a == "function") {
    const {
      min: u,
      max: c
    } = a(o.valueOf(), i.valueOf());
    l[0] = u, l[1] = c;
  }
  return a === "nice" && (l = bI(e.scaleType, l, s)), [e.min ?? l[0], e.max ?? l[1]];
}
function kI(e, t, n) {
  let r = t, o = n;
  return "max" in e && e.max != null && e.max < t && (r = e.max), "min" in e && e.min != null && e.min > n && (o = e.min), !("min" in e) && !("max" in e) ? [r, o] : [e.min ?? r, e.max ?? o];
}
function wf(e, t, n, r, o) {
  const i = {};
  return e == null || e.forEach((s, a) => {
    var c, d;
    const l = s;
    if (vo(l) || xo(l)) {
      i[l.id] = {
        domain: l.data
      }, l.ordinalTimeTicks !== void 0 && (i[l.id].tickNumber = Uy(l, [(c = l.data) == null ? void 0 : c.find((p) => p !== null), (d = l.data) == null ? void 0 : d.findLast((p) => p !== null)], n));
      return;
    }
    const u = r[l.id];
    u && (i[l.id] = UD(l, o, a, t, u, n));
  }), i;
}
const II = 8, TI = {}, HD = le(Ln, Te, xI, function(t, n, r) {
  const o = wf(t, n, II, r, "x");
  return Object.keys(o).length > 0 ? o : TI;
}), WD = le(Vn, Te, CI, function(t, n, r) {
  const o = wf(t, n, II, r, "y");
  return Object.keys(o).length > 0 ? o : TI;
}), EI = (e) => e.dimensions.width && e.dimensions.height, PI = {}, bf = {}, MI = le(Ln, EI, HD, function(t, n, r) {
  if (!(t == null ? void 0 : t.some((s) => s.height === "auto")) || !n)
    return bf;
  const i = {};
  for (let s = 0; s < ((t == null ? void 0 : t.length) ?? 0); s += 1) {
    const a = t[s];
    if (a.height === "auto") {
      const l = uI({
        axis: a,
        direction: "x",
        domain: r[a.id]
      });
      l !== void 0 && (i[a.id] = l);
    }
  }
  return i;
}), Wy = le(MI, function(t) {
  if (t === bf)
    return PI;
  const n = {};
  for (const [r, o] of Object.entries(t))
    n[r] = o.size;
  return n;
}), AI = le(Vn, EI, WD, function(t, n, r) {
  if (!(t == null ? void 0 : t.some((s) => s.width === "auto")) || !n)
    return bf;
  const i = {};
  for (let s = 0; s < ((t == null ? void 0 : t.length) ?? 0); s += 1) {
    const a = t[s];
    if (a.width === "auto") {
      const l = uI({
        axis: a,
        direction: "y",
        domain: r[a.id]
      });
      l !== void 0 && (i[a.id] = l);
    }
  }
  return i;
}), Gy = le(AI, function(t) {
  if (t === bf)
    return PI;
  const n = {};
  for (const [r, o] of Object.entries(t))
    n[r] = o.size;
  return n;
});
function GD(e) {
  return hy + (e.label ? oi : 0);
}
function VD(e) {
  return py + (e.label ? oi : 0);
}
function RI(e, t, n, r) {
  var s;
  let o = 0, i = 0;
  for (const a of e ?? []) {
    if (a.position !== n)
      continue;
    let l;
    a.height === "auto" ? l = r[a.id] ?? GD(a) : l = a.height ?? 0, o += l + ((s = a.zoom) != null && s.slider.enabled ? a.zoom.slider.size : 0), i += 1;
  }
  return o + t * Math.max(0, i - 1);
}
function _I(e, t, n, r) {
  var s;
  let o = 0, i = 0;
  for (const a of e ?? []) {
    if (a.position !== n)
      continue;
    let l;
    a.width === "auto" ? l = r[a.id] ?? VD(a) : l = a.width ?? 0, o += l + ((s = a.zoom) != null && s.slider.enabled ? a.zoom.slider.size : 0), i += 1;
  }
  return o + t * Math.max(0, i - 1);
}
const YD = V(Vn, Is, Gy, function(t, n, r) {
  return _I(t, n, "left", r);
}), KD = V(Vn, Is, Gy, function(t, n, r) {
  return _I(t, n, "right", r);
}), XD = V(Ln, Is, Wy, function(t, n, r) {
  return RI(t, n, "top", r);
}), qD = V(Ln, Is, Wy, function(t, n, r) {
  return RI(t, n, "bottom", r);
}), QD = le(YD, KD, XD, qD, function(t, n, r, o) {
  return {
    left: t,
    right: n,
    top: r,
    bottom: o
  };
}), Tl = (e) => e.dimensions, ZD = (e) => e.dimensions.margin, rn = le(Tl, ZD, QD, function({
  width: t,
  height: n
}, {
  top: r,
  right: o,
  bottom: i,
  left: s
}, {
  left: a,
  right: l,
  top: u,
  bottom: c
}) {
  return {
    width: t - s - o - a - l,
    left: s + a,
    right: o + l,
    height: n - r - i - u - c,
    top: r + u,
    bottom: i + c
  };
}), JD = V(Tl, (e) => e.width), e5 = V(Tl, (e) => e.height), $I = V(Tl, (e) => e.propsWidth), OI = V(Tl, (e) => e.propsHeight);
function t5(e, t) {
  return typeof e == "number" ? {
    top: e,
    bottom: e,
    left: e,
    right: e
  } : t ? N({}, t, e) : e;
}
const n5 = 10, Sf = ({
  params: e,
  store: t,
  instance: n
}) => {
  const {
    chartsLayerContainerRef: r
  } = n, o = e.width !== void 0 && e.height !== void 0, i = k.useRef({
    displayError: !1,
    initialCompute: !0,
    computeRun: 0
  }), [s, a] = k.useState(0), [l, u] = k.useState(0), c = k.useCallback(() => {
    const g = r == null ? void 0 : r.current;
    if (!g)
      return {};
    const y = cr(g).getComputedStyle(g), m = Math.floor(parseFloat(y.height)) || 0, v = Math.floor(parseFloat(y.width)) || 0;
    return (t.state.dimensions.width !== v || t.state.dimensions.height !== m) && t.set("dimensions", {
      margin: {
        top: e.margin.top,
        right: e.margin.right,
        bottom: e.margin.bottom,
        left: e.margin.left
      },
      width: e.width ?? v,
      height: e.height ?? m,
      propsWidth: e.width,
      propsHeight: e.height
    }), {
      height: m,
      width: v
    };
  }, [
    t,
    r,
    e.height,
    e.width,
    // Margin is an object, so we need to include all the properties to prevent infinite loops.
    e.margin.left,
    e.margin.right,
    e.margin.top,
    e.margin.bottom
  ]);
  dy(() => {
    const g = e.width ?? t.state.dimensions.width, x = e.height ?? t.state.dimensions.height;
    t.set("dimensions", {
      margin: {
        top: e.margin.top,
        right: e.margin.right,
        bottom: e.margin.bottom,
        left: e.margin.left
      },
      width: g,
      height: x,
      propsHeight: e.height,
      propsWidth: e.width
    });
  }, [
    t,
    e.height,
    e.width,
    // Margin is an object, so we need to include all the properties to prevent infinite loops.
    e.margin.left,
    e.margin.right,
    e.margin.top,
    e.margin.bottom
  ]), k.useEffect(() => {
    i.current.displayError = !0;
  }, []), me(() => {
    if (o || !i.current.initialCompute || i.current.computeRun > n5)
      return;
    const g = c();
    g.width !== s || g.height !== l ? (i.current.computeRun += 1, g.width !== void 0 && a(g.width), g.height !== void 0 && u(g.height)) : i.current.initialCompute && (i.current.initialCompute = !1);
  }, [l, s, c, o]), me(() => {
    if (o)
      return () => {
      };
    c();
    const g = r.current;
    if (typeof ResizeObserver > "u")
      return () => {
      };
    let x;
    const y = new ResizeObserver(() => {
      x = requestAnimationFrame(() => {
        c();
      });
    });
    return g && y.observe(g), () => {
      x && cancelAnimationFrame(x), g && y.unobserve(g);
    };
  }, [c, o, r]);
  const d = t.use(rn), p = k.useCallback((g) => g >= d.left - 1 && g <= d.left + d.width, [d.left, d.width]), f = k.useCallback((g) => g >= d.top - 1 && g <= d.top + d.height, [d.height, d.top]);
  return {
    instance: {
      isPointInside: k.useCallback((g, x, y) => y && "closest" in y && y.closest("[data-drawing-container]") ? !0 : p(g) && f(x), [p, f]),
      isXInside: p,
      isYInside: f
    }
  };
};
Sf.params = {
  width: !0,
  height: !0,
  margin: !0
};
Sf.getDefaultizedParams = ({
  params: e
}) => N({}, e, {
  margin: t5(e.margin, KO)
});
Sf.getInitialState = ({
  width: e,
  height: t,
  margin: n
}) => ({
  dimensions: {
    margin: n,
    width: e ?? 0,
    height: t ?? 0,
    propsWidth: e,
    propsHeight: t
  }
});
const LI = () => {
  const e = k.useRef(null), t = k.useRef(null);
  return {
    instance: {
      chartsLayerContainerRef: e,
      chartRootRef: t
    }
  };
};
LI.params = {};
const Vy = ({
  params: e,
  store: t
}) => (me(() => {
  t.set("experimentalFeatures", e.experimentalFeatures);
}, [t, e.experimentalFeatures]), {});
Vy.params = {
  experimentalFeatures: !0
};
Vy.getInitialState = ({
  experimentalFeatures: e
}) => ({
  experimentalFeatures: e
});
const El = (e, t) => {
  var n;
  return (n = e.experimentalFeatures) == null ? void 0 : n[t];
};
let $1 = 0;
const r5 = () => ($1 += 1, `mui-chart-${$1}`), Yy = ({
  params: e,
  store: t
}) => (k.useEffect(() => {
  e.id === void 0 || e.id === t.state.id.providedChartId && t.state.id.chartId !== void 0 || t.set("id", N({}, t.state.id, {
    chartId: e.id ?? r5()
  }));
}, [t, e.id]), {});
Yy.params = {
  id: !0
};
Yy.getInitialState = ({
  id: e
}) => ({
  id: {
    chartId: e,
    providedChartId: e
  }
});
const o5 = (e) => e.id, i5 = V(o5, (e) => e.chartId), s5 = le(Te, nt, rn, function(t, n, r) {
  return TD(t, n, r);
});
function O1(e, ...t) {
  const n = new URL("https://mui.com/x/production-error");
  return n.searchParams.set("code", e.toString()), t.forEach((r) => n.searchParams.append("args[]", r)), `MUI X error #${e}; visit ${n} for the full message.`;
}
const a5 = {
  abort: !0,
  animationcancel: !0,
  animationend: !0,
  animationiteration: !0,
  animationstart: !0,
  auxclick: !0,
  beforeinput: !0,
  beforetoggle: !0,
  blur: !0,
  cancel: !0,
  canplay: !0,
  canplaythrough: !0,
  change: !0,
  click: !0,
  close: !0,
  command: !0,
  compositionend: !0,
  compositionstart: !0,
  compositionupdate: !0,
  contextlost: !0,
  contextmenu: !0,
  contextrestored: !0,
  copy: !0,
  cuechange: !0,
  cut: !0,
  dblclick: !0,
  drag: !0,
  dragend: !0,
  dragenter: !0,
  dragleave: !0,
  dragover: !0,
  dragstart: !0,
  drop: !0,
  durationchange: !0,
  emptied: !0,
  ended: !0,
  error: !0,
  focus: !0,
  focusin: !0,
  focusout: !0,
  formdata: !0,
  gotpointercapture: !0,
  input: !0,
  invalid: !0,
  keydown: !0,
  keypress: !0,
  keyup: !0,
  load: !0,
  loadeddata: !0,
  loadedmetadata: !0,
  loadstart: !0,
  lostpointercapture: !0,
  mousedown: !0,
  mouseenter: !0,
  mouseleave: !0,
  mousemove: !0,
  mouseout: !0,
  mouseover: !0,
  mouseup: !0,
  paste: !0,
  pause: !0,
  play: !0,
  playing: !0,
  pointercancel: !0,
  pointerdown: !0,
  pointerenter: !0,
  pointerleave: !0,
  pointermove: !0,
  pointerout: !0,
  pointerover: !0,
  pointerup: !0,
  progress: !0,
  ratechange: !0,
  reset: !0,
  resize: !0,
  scroll: !0,
  scrollend: !0,
  securitypolicyviolation: !0,
  seeked: !0,
  seeking: !0,
  select: !0,
  selectionchange: !0,
  selectstart: !0,
  slotchange: !0,
  stalled: !0,
  submit: !0,
  suspend: !0,
  timeupdate: !0,
  toggle: !0,
  touchcancel: !0,
  touchend: !0,
  touchmove: !0,
  touchstart: !0,
  transitioncancel: !0,
  transitionend: !0,
  transitionrun: !0,
  transitionstart: !0,
  volumechange: !0,
  waiting: !0,
  webkitanimationend: !0,
  webkitanimationiteration: !0,
  webkitanimationstart: !0,
  webkittransitionend: !0,
  wheel: !0,
  beforematch: !0,
  pointerrawupdate: !0
};
class l5 {
  /** Reference to the singleton PointerManager instance */
  /** Reference to the singleton ActiveGesturesRegistry instance */
  /** The DOM element this gesture is attached to */
  /** Stores the active gesture state */
  /** @internal For types. If false enables phases (xStart, x, xEnd) */
  /** @internal For types. The event type this gesture is associated with */
  /** @internal For types. The options type for this gesture */
  /** @internal For types. The options that can be changed at runtime */
  /** @internal For types. The state that can be changed at runtime */
  /**
   * Create a new gesture instance with the specified options
   *
   * @param options - Configuration options for this gesture
   */
  constructor(t) {
    /** Unique name identifying this gesture type */
    /** Whether to prevent default browser action for gesture events */
    /** Whether to stop propagation of gesture events */
    /**
     * List of gesture names that should prevent this gesture from activating when they are active.
     */
    /**
     * Array of keyboard keys that must be pressed for the gesture to be recognized.
     */
    /**
     * KeyboardManager instance for tracking key presses
     */
    /**
     * List of pointer types that can trigger this gesture.
     * If undefined, all pointer types are allowed.
     */
    /**
     * Pointer mode-specific configuration overrides.
     */
    /**
     * User-mutable data object for sharing state between gesture events
     * This object is included in all events emitted by this gesture
     */
    ue(this, "customData", {});
    /**
     * Handle option change events
     * @param event Custom event with new options in the detail property
     */
    ue(this, "handleOptionsChange", (t) => {
      t && t.detail && this.updateOptions(t.detail);
    });
    /**
     * Handle state change events
     * @param event Custom event with new state values in the detail property
     */
    ue(this, "handleStateChange", (t) => {
      t && t.detail && this.updateState(t.detail);
    });
    if (!t || !t.name)
      throw new Error(O1(164));
    if (t.name in a5)
      throw new Error(O1(165, t.name));
    this.name = t.name, this.preventDefault = t.preventDefault ?? !1, this.stopPropagation = t.stopPropagation ?? !1, this.preventIf = t.preventIf ?? [], this.requiredKeys = t.requiredKeys ?? [], this.pointerMode = t.pointerMode ?? [], this.pointerOptions = t.pointerOptions ?? {};
  }
  /**
   * Initialize the gesture by acquiring the pointer manager and gestures registry
   * Must be called before the gesture can be used
   */
  init(t, n, r, o) {
    this.element = t, this.pointerManager = n, this.gesturesRegistry = r, this.keyboardManager = o;
    const i = `${this.name}ChangeOptions`;
    this.element.addEventListener(i, this.handleOptionsChange);
    const s = `${this.name}ChangeState`;
    this.element.addEventListener(s, this.handleStateChange);
  }
  /**
   * Update the gesture options with new values
   * @param options Object containing properties to update
   */
  updateOptions(t) {
    this.preventDefault = t.preventDefault ?? this.preventDefault, this.stopPropagation = t.stopPropagation ?? this.stopPropagation, this.preventIf = t.preventIf ?? this.preventIf, this.requiredKeys = t.requiredKeys ?? this.requiredKeys, this.pointerMode = t.pointerMode ?? this.pointerMode, this.pointerOptions = t.pointerOptions ?? this.pointerOptions;
  }
  /**
   * Get the default configuration for the pointer specific options.
   * Change this function in child classes to provide different defaults.
   */
  getBaseConfig() {
    return {
      requiredKeys: this.requiredKeys
    };
  }
  /**
   * Get the effective configuration for a specific pointer mode.
   * This merges the base configuration with pointer mode-specific overrides.
   *
   * @param pointerType - The pointer type to get configuration for
   * @returns The effective configuration object
   */
  getEffectiveConfig(t, n) {
    if (t !== "mouse" && t !== "touch" && t !== "pen")
      return n;
    const r = this.pointerOptions[t];
    return r ? N({}, n, r) : n;
  }
  /**
   * Update the gesture state with new values
   * @param stateChanges Object containing state properties to update
   */
  updateState(t) {
    Object.assign(this.state, t);
  }
  /**
   * Create a deep clone of this gesture for a new element
   *
   * @param overrides - Optional configuration options that override the defaults
   * @returns A new instance of this gesture with the same configuration and any overrides applied
   */
  /**
   * Check if the event's target is or is contained within any of our registered elements
   *
   * @param event - The browser event to check
   * @returns The matching element or null if no match is found
   */
  getTargetElement(t) {
    return this.isActive || this.element === t.target || "contains" in this.element && this.element.contains(t.target) || "getRootNode" in this.element && this.element.getRootNode() instanceof ShadowRoot && t.composedPath().includes(this.element) ? this.element : null;
  }
  /** Whether the gesture is currently active */
  set isActive(t) {
    t ? this.gesturesRegistry.registerActiveGesture(this.element, this) : this.gesturesRegistry.unregisterActiveGesture(this.element, this);
  }
  /** Whether the gesture is currently active */
  get isActive() {
    return this.gesturesRegistry.isGestureActive(this.element, this) ?? !1;
  }
  /**
   * Checks if this gesture should be prevented from activating.
   *
   * @param element - The DOM element to check against
   * @param pointerType - The type of pointer triggering the gesture
   * @returns true if the gesture should be prevented, false otherwise
   */
  shouldPreventGesture(t, n) {
    const r = this.getEffectiveConfig(n, this.getBaseConfig());
    if (!this.keyboardManager.areKeysPressed(r.requiredKeys))
      return !0;
    if (this.preventIf.length === 0)
      return !1;
    const o = this.gesturesRegistry.getActiveGestures(t);
    return this.preventIf.some((i) => o[i]);
  }
  /**
   * Checks if the given pointer type is allowed for this gesture based on the pointerMode setting.
   *
   * @param pointerType - The type of pointer to check.
   * @returns true if the pointer type is allowed, false otherwise.
   */
  isPointerTypeAllowed(t) {
    return !this.pointerMode || this.pointerMode.length === 0 ? !0 : this.pointerMode.includes(t);
  }
  /**
   * Clean up the gesture and unregister any listeners
   * Call this method when the gesture is no longer needed to prevent memory leaks
   */
  destroy() {
    const t = `${this.name}ChangeOptions`;
    this.element.removeEventListener(t, this.handleOptionsChange);
    const n = `${this.name}ChangeState`;
    this.element.removeEventListener(n, this.handleStateChange);
  }
  /**
   * Reset the gesture state to its initial values
   */
}
class u5 {
  constructor() {
    /** Map of elements to their active gestures */
    ue(this, "activeGestures", /* @__PURE__ */ new Map());
  }
  /**
   * Register a gesture as active on an element
   *
   * @param element - The DOM element on which the gesture is active
   * @param gesture - The gesture instance that is active
   */
  registerActiveGesture(t, n) {
    this.activeGestures.has(t) || this.activeGestures.set(t, /* @__PURE__ */ new Set());
    const r = this.activeGestures.get(t), o = {
      gesture: n,
      element: t
    };
    r.add(o);
  }
  /**
   * Remove a gesture from the active registry
   *
   * @param element - The DOM element on which the gesture was active
   * @param gesture - The gesture instance to deactivate
   */
  unregisterActiveGesture(t, n) {
    const r = this.activeGestures.get(t);
    r && (r.forEach((o) => {
      o.gesture === n && r.delete(o);
    }), r.size === 0 && this.activeGestures.delete(t));
  }
  /**
   * Get all active gestures for a specific element
   *
   * @param element - The DOM element to query
   * @returns Array of active gesture names
   */
  getActiveGestures(t) {
    const n = this.activeGestures.get(t);
    return n ? Array.from(n).reduce((r, o) => (r[o.gesture.name] = !0, r), {}) : {};
  }
  /**
   * Check if a specific gesture is active on an element
   *
   * @param element - The DOM element to check
   * @param gesture - The gesture instance to check
   * @returns True if the gesture is active on the element, false otherwise
   */
  isGestureActive(t, n) {
    const r = this.activeGestures.get(t);
    return r ? Array.from(r).some((o) => o.gesture === n) : !1;
  }
  /**
   * Clear all active gestures from the registry
   */
  destroy() {
    this.activeGestures.clear();
  }
  /**
   * Clear all active gestures for a specific element
   *
   * @param element - The DOM element to clear
   */
  unregisterElement(t) {
    this.activeGestures.delete(t);
  }
}
function c5() {
  return typeof navigator > "u" ? {
    userAgent: "",
    platform: "",
    maxTouchPoints: 0
  } : {
    userAgent: navigator.userAgent,
    platform: navigator.platform ?? "",
    maxTouchPoints: navigator.maxTouchPoints ?? 0
  };
}
const {
  userAgent: d5,
  platform: f5,
  maxTouchPoints: p5
} = c5(), h5 = d5.toLowerCase(), nl = f5.toLowerCase(), NI = /^i(os$|p)/.test(nl) || nl === "macintel" && p5 > 1, L1 = "android";
nl === L1 || h5.includes(L1);
const g5 = !NI && nl.startsWith("mac");
nl.startsWith("win");
const m5 = g5 || NI;
class y5 {
  /**
   * Create a new KeyboardManager instance
   */
  constructor() {
    ue(this, "pressedKeys", /* @__PURE__ */ new Set());
    /**
     * Handle keydown events
     */
    ue(this, "handleKeyDown", (t) => {
      this.pressedKeys.add(t.key);
    });
    /**
     * Handle keyup events
     */
    ue(this, "handleKeyUp", (t) => {
      this.pressedKeys.delete(t.key);
    });
    /**
     * Clear all pressed keys
     */
    ue(this, "clearKeys", () => {
      this.pressedKeys.clear();
    });
    this.initialize();
  }
  /**
   * Initialize the keyboard event listeners
   */
  initialize() {
    typeof window > "u" || (window.addEventListener("keydown", this.handleKeyDown), window.addEventListener("keyup", this.handleKeyUp), window.addEventListener("blur", this.clearKeys));
  }
  /**
   * Check if a set of keys are all currently pressed
   * @param keys The keys to check
   * @returns True if all specified keys are pressed, false otherwise
   */
  areKeysPressed(t) {
    return !t || t.length === 0 ? !0 : t.every((n) => n === "ControlOrMeta" ? m5 ? this.pressedKeys.has("Meta") : this.pressedKeys.has("Control") : this.pressedKeys.has(n));
  }
  /**
   * Cleanup method to remove event listeners
   */
  destroy() {
    typeof window < "u" && (window.removeEventListener("keydown", this.handleKeyDown), window.removeEventListener("keyup", this.handleKeyUp), window.removeEventListener("blur", this.clearKeys)), this.clearKeys();
  }
}
class v5 {
  constructor(t) {
    /** Root element where pointer events are captured */
    /** CSS touch-action property value applied to the root element */
    /** Whether to use passive event listeners */
    /** Whether to prevent interrupt events like blur or contextmenu */
    ue(this, "preventEventInterruption", !0);
    /** Map of all currently active pointers by their pointerId */
    ue(this, "pointers", /* @__PURE__ */ new Map());
    /** Set of registered gesture handlers that receive pointer events */
    ue(this, "gestureHandlers", /* @__PURE__ */ new Set());
    /**
     * Handle events that should interrupt all gestures.
     * This clears all active pointers and notifies handlers with a pointercancel-like event.
     *
     * @param event - The event that triggered the interruption (blur or contextmenu)
     */
    ue(this, "handleInterruptEvents", (t) => {
      if (this.preventEventInterruption && "pointerType" in t && t.pointerType === "touch") {
        t.preventDefault();
        return;
      }
      const n = new PointerEvent("forceCancel", {
        bubbles: !1,
        cancelable: !1
      }), r = this.pointers.values().next().value;
      if (this.pointers.size > 0 && r) {
        Object.defineProperties(n, {
          clientX: {
            value: r.clientX
          },
          clientY: {
            value: r.clientY
          },
          pointerId: {
            value: r.pointerId
          },
          pointerType: {
            value: r.pointerType
          }
        });
        for (const [o, i] of this.pointers.entries()) {
          const s = N({}, i, {
            type: "forceCancel"
          });
          this.pointers.set(o, s);
        }
      }
      this.notifyHandlers(n), this.pointers.clear();
    });
    /**
     * Event handler for all pointer events.
     *
     * This method:
     * 1. Updates the internal pointers map based on the event type
     * 2. Manages pointer capture for tracking pointers outside the root element
     * 3. Notifies all registered handlers with the current state
     *
     * @param event - The original pointer event from the browser
     */
    ue(this, "handlePointerEvent", (t) => {
      const {
        type: n,
        pointerId: r
      } = t;
      if (n === "pointerdown" || n === "pointermove")
        this.pointers.set(r, this.createPointerData(t));
      else if (n === "pointerup" || n === "pointercancel" || n === "forceCancel") {
        this.pointers.set(r, this.createPointerData(t)), this.notifyHandlers(t), this.pointers.delete(r);
        return;
      }
      this.notifyHandlers(t);
    });
    this.root = // User provided root element
    t.root ?? // Fallback to document root or body, this fixes shadow DOM scenarios
    document.getRootNode({
      composed: !0
    }) ?? // Fallback to document body, for some testing environments
    document.body, this.touchAction = t.touchAction || "auto", this.passive = t.passive ?? !1, this.preventEventInterruption = t.preventEventInterruption ?? !0, this.setupEventListeners();
  }
  /**
   * Register a handler function to receive pointer events.
   *
   * The handler will be called whenever pointer events occur within the root element.
   * It receives the current map of all active pointers and the original event.
   *
   * @param {Function} handler - Function to receive pointer events and current pointer state
   * @returns {Function} An unregister function that removes this handler when called
   */
  registerGestureHandler(t) {
    return this.gestureHandlers.add(t), () => {
      this.gestureHandlers.delete(t);
    };
  }
  /**
   * Get a read-only view of the current active pointers map.
   *
   * Returns a reference to the internal pointer map. Callers must not
   * mutate the result; the type is narrowed to `ReadonlyMap` to enforce
   * this at compile time. Avoiding a per-call copy matters because this
   * is invoked on every pointer event by every active gesture handler.
   *
   * @returns The active pointers as a read-only map
   */
  getPointers() {
    return this.pointers;
  }
  /**
   * Set up event listeners for pointer events on the root element.
   *
   * This method attaches all necessary event listeners and configures
   * the CSS touch-action property on the root element.
   */
  setupEventListeners() {
    this.touchAction !== "auto" && (this.root.style.touchAction = this.touchAction), this.root.addEventListener("pointerdown", this.handlePointerEvent, {
      passive: this.passive
    }), this.root.addEventListener("pointermove", this.handlePointerEvent, {
      passive: this.passive
    }), this.root.addEventListener("pointerup", this.handlePointerEvent, {
      passive: this.passive
    }), this.root.addEventListener("pointercancel", this.handlePointerEvent, {
      passive: this.passive
    }), this.root.addEventListener("forceCancel", this.handlePointerEvent, {
      passive: this.passive
    }), this.root.addEventListener("blur", this.handleInterruptEvents), this.root.addEventListener("contextmenu", this.handleInterruptEvents);
  }
  /**
   * Notify all registered gesture handlers about a pointer event.
   *
   * Each handler receives the current map of active pointers and the original event.
   *
   * @param event - The original pointer event that triggered this notification
   */
  notifyHandlers(t) {
    this.gestureHandlers.forEach((n) => n(this.pointers, t));
  }
  /**
   * Create a normalized PointerData object from a browser PointerEvent.
   *
   * This method extracts all relevant information from the original event
   * and formats it in a consistent way for gesture recognizers to use.
   *
   * @param event - The original browser pointer event
   * @returns A new PointerData object representing this pointer
   */
  createPointerData(t) {
    return {
      pointerId: t.pointerId,
      clientX: t.clientX,
      clientY: t.clientY,
      pageX: t.pageX,
      pageY: t.pageY,
      target: t.target,
      timeStamp: t.timeStamp,
      type: t.type,
      isPrimary: t.isPrimary,
      pressure: t.pressure,
      width: t.width,
      height: t.height,
      pointerType: t.pointerType,
      srcEvent: t
    };
  }
  /**
   * Clean up all event listeners and reset the PointerManager state.
   *
   * This method should be called when the PointerManager is no longer needed
   * to prevent memory leaks. It removes all event listeners, clears the
   * internal state, and resets the singleton instance.
   */
  destroy() {
    this.root.removeEventListener("pointerdown", this.handlePointerEvent), this.root.removeEventListener("pointermove", this.handlePointerEvent), this.root.removeEventListener("pointerup", this.handlePointerEvent), this.root.removeEventListener("pointercancel", this.handlePointerEvent), this.root.removeEventListener("forceCancel", this.handlePointerEvent), this.root.removeEventListener("blur", this.handleInterruptEvents), this.root.removeEventListener("contextmenu", this.handleInterruptEvents), this.pointers.clear(), this.gestureHandlers.clear();
  }
}
class x5 {
  /**
   * Create a new GestureManager instance to coordinate gesture recognition
   *
   * @param options - Configuration options for the gesture manager
   */
  constructor(t) {
    /** Repository of gesture templates that can be cloned for specific elements */
    ue(this, "gestureTemplates", /* @__PURE__ */ new Map());
    /** Maps DOM elements to their active gesture instances */
    ue(this, "elementGestureMap", /* @__PURE__ */ new Map());
    ue(this, "activeGesturesRegistry", new u5());
    ue(this, "keyboardManager", new y5());
    this.pointerManager = new v5({
      root: t.root,
      touchAction: t.touchAction,
      passive: t.passive
    }), t.gestures && t.gestures.length > 0 && t.gestures.forEach((n) => {
      this.addGestureTemplate(n);
    });
  }
  /**
   * Add a gesture template to the manager's template registry.
   * Templates serve as prototypes that can be cloned for individual elements.
   *
   * @param gesture - The gesture instance to use as a template
   */
  addGestureTemplate(t) {
    this.gestureTemplates.set(t.name, t);
  }
  /**
   * Adds gesture templates to the manager's template registry after construction.
   *
   * This allows optional gestures to be registered lazily by the feature using
   * them, so they are only bundled when that feature is.
   *
   * @param gestures - The gesture instances to use as templates
   */
  addGestures(t) {
    t.forEach((n) => {
      this.addGestureTemplate(n);
    });
  }
  /**
   * Removes gesture templates with the provided names, unregistering them
   * from any element they are still registered on.
   *
   * @param gestureNames - The names of the gestures to remove
   */
  removeGestures(t) {
    t.forEach((n) => {
      this.elementGestureMap.forEach((r, o) => {
        this.unregisterElement(n, o);
      }), this.gestureTemplates.delete(n);
    });
  }
  /**
   * Updates the options for a specific gesture on a given element and emits a change event.
   *
   * @param gestureName - Name of the gesture whose options should be updated
   * @param element - The DOM element where the gesture is attached
   * @param options - New options to apply to the gesture
   * @returns True if the options were successfully updated, false if the gesture wasn't found
   *
   * @example
   * ```typescript
   * // Update pan gesture sensitivity on the fly
   * manager.setGestureOptions('pan', element, { threshold: 5 });
   * ```
   */
  setGestureOptions(t, n, r) {
    const o = this.elementGestureMap.get(n);
    if (!o || !o.has(t))
      return;
    const i = new CustomEvent(`${t}ChangeOptions`, {
      detail: r,
      bubbles: !1,
      cancelable: !1,
      composed: !1
    });
    n.dispatchEvent(i);
  }
  /**
   * Updates the state for a specific gesture on a given element and emits a change event.
   *
   * @param gestureName - Name of the gesture whose state should be updated
   * @param element - The DOM element where the gesture is attached
   * @param state - New state to apply to the gesture
   * @returns True if the state was successfully updated, false if the gesture wasn't found
   *
   * @example
   * ```typescript
   * // Update total delta for a turnWheel gesture
   * manager.setGestureState('turnWheel', element, { totalDeltaX: 10 });
   * ```
   */
  setGestureState(t, n, r) {
    const o = this.elementGestureMap.get(n);
    if (!o || !o.has(t))
      return;
    const i = new CustomEvent(`${t}ChangeState`, {
      detail: r,
      bubbles: !1,
      cancelable: !1,
      composed: !1
    });
    n.dispatchEvent(i);
  }
  /**
   * Register an element to recognize one or more gestures.
   *
   * This method clones the specified gesture template(s) and creates
   * gesture recognizer instance(s) specifically for the provided element.
   * The element is returned with enhanced TypeScript typing for gesture events.
   *
   * @param gestureNames - Name(s) of the gesture(s) to register (must match template names)
   * @param element - The DOM element to attach the gesture(s) to
   * @param options - Optional map of gesture-specific options to override when registering
   * @returns The same element with properly typed event listeners
   *
   * @example
   * ```typescript
   * // Register multiple gestures
   * const element = manager.registerElement(['pan', 'pinch'], myDiv);
   *
   * // Register a single gesture
   * const draggable = manager.registerElement('pan', dragHandle);
   *
   * // Register with customized options for each gesture
   * const customElement = manager.registerElement(
   *   ['pan', 'pinch', 'rotate'],
   *   myElement,
   *   {
   *     pan: { threshold: 20, direction: ['left', 'right'] },
   *     pinch: { threshold: 0.1 }
   *   }
   * );
   * ```
   */
  registerElement(t, n, r) {
    return Array.isArray(t) || (t = [t]), t.forEach((o) => {
      const i = r == null ? void 0 : r[o];
      this.registerSingleGesture(o, n, i);
    }), n;
  }
  /**
   * Internal method to register a single gesture on an element.
   *
   * @param gestureName - Name of the gesture to register
   * @param element - DOM element to attach the gesture to
   * @param options - Optional options to override the gesture template configuration
   * @returns True if the registration was successful, false otherwise
   */
  registerSingleGesture(t, n, r) {
    const o = this.gestureTemplates.get(t);
    if (!o)
      return !1;
    this.elementGestureMap.has(n) || this.elementGestureMap.set(n, /* @__PURE__ */ new Map());
    const i = this.elementGestureMap.get(n);
    i.has(t) && this.unregisterElement(t, n);
    const s = o.clone(r);
    return s.init(n, this.pointerManager, this.activeGesturesRegistry, this.keyboardManager), i.set(t, s), !0;
  }
  /**
   * Unregister a specific gesture from an element.
   * This removes the gesture recognizer and stops event emission for that gesture.
   *
   * @param gestureName - Name of the gesture to unregister
   * @param element - The DOM element to remove the gesture from
   * @returns True if the gesture was found and removed, false otherwise
   */
  unregisterElement(t, n) {
    const r = this.elementGestureMap.get(n);
    return !r || !r.has(t) ? !1 : (r.get(t).destroy(), r.delete(t), this.activeGesturesRegistry.unregisterElement(n), r.size === 0 && this.elementGestureMap.delete(n), !0);
  }
  /**
   * Unregister all gestures from an element.
   * Completely removes the element from the gesture system.
   *
   * @param element - The DOM element to remove all gestures from
   */
  unregisterAllGestures(t) {
    const n = this.elementGestureMap.get(t);
    if (n) {
      for (const [, r] of n)
        r.destroy(), this.activeGesturesRegistry.unregisterElement(t);
      this.elementGestureMap.delete(t);
    }
  }
  /**
   * Clean up all gestures and event listeners.
   * Call this method when the GestureManager is no longer needed to prevent memory leaks.
   */
  destroy() {
    for (const [t] of this.elementGestureMap)
      this.unregisterAllGestures(t);
    this.gestureTemplates.clear(), this.elementGestureMap.clear(), this.activeGesturesRegistry.destroy(), this.keyboardManager.destroy(), this.pointerManager.destroy();
  }
}
class kf extends l5 {
  /**
   * Minimum number of simultaneous pointers required to activate the gesture.
   * The gesture will not start until at least this many pointers are active.
   */
  /**
   * Maximum number of simultaneous pointers allowed for this gesture.
   * If more than this many pointers are detected, the gesture may be canceled.
   */
  constructor(n) {
    super(n);
    /** Function to unregister from the PointerManager when destroying this gesture */
    ue(this, "unregisterHandler", null);
    /** The original target element when the gesture began, used to prevent limbo state if target is removed */
    ue(this, "originalTarget", null);
    this.minPointers = n.minPointers ?? 1, this.maxPointers = n.maxPointers ?? 1 / 0;
  }
  init(n, r, o, i) {
    super.init(n, r, o, i), this.unregisterHandler = this.pointerManager.registerGestureHandler(this.handlePointerEvent);
  }
  updateOptions(n) {
    super.updateOptions(n), this.minPointers = n.minPointers ?? this.minPointers, this.maxPointers = n.maxPointers ?? this.maxPointers;
  }
  getBaseConfig() {
    return {
      requiredKeys: this.requiredKeys,
      minPointers: this.minPointers,
      maxPointers: this.maxPointers
    };
  }
  isWithinPointerCount(n, r) {
    const o = this.getEffectiveConfig(r, this.getBaseConfig());
    return n.length >= o.minPointers && n.length <= o.maxPointers;
  }
  /**
   * Handler for pointer events from the PointerManager.
   * Concrete gesture implementations must override this method to provide
   * gesture-specific logic for recognizing and tracking the gesture.
   *
   * @param pointers - Map of active pointers by pointer ID
   * @param event - The original pointer event from the browser
   */
  /**
   * Calculate the target element for the gesture based on the active pointers.
   *
   * It takes into account the original target element.
   *
   * @param pointers - Map of active pointers by pointer ID
   * @param calculatedTarget - The target element calculated from getTargetElement
   * @returns A list of relevant pointers for this gesture
   */
  getRelevantPointers(n, r) {
    return n.filter((o) => {
      if (!this.isPointerTypeAllowed(o.pointerType))
        return !1;
      const i = r === o.target || o.target === this.originalTarget || r === this.originalTarget || "contains" in r && r.contains(o.target), s = "getRootNode" in r && r.getRootNode() instanceof ShadowRoot && o.srcEvent.composedPath().includes(r);
      return i || s;
    });
  }
  destroy() {
    this.unregisterHandler && (this.unregisterHandler(), this.unregisterHandler = null), super.destroy();
  }
}
function Tr(e) {
  if (e.length === 0)
    return {
      x: 0,
      y: 0
    };
  const t = e.reduce((n, r) => (n.x += r.clientX, n.y += r.clientY, n), {
    x: 0,
    y: 0
  });
  return {
    x: t.x / e.length,
    y: t.y / e.length
  };
}
function If(e, t) {
  return `${e}${t === "ongoing" ? "" : t.charAt(0).toUpperCase() + t.slice(1)}`;
}
const yu = 1e-5, Wr = 1e-5, N1 = 0.15;
function C5(e, t) {
  const n = t.x - e.x, r = t.y - e.y, o = {
    vertical: null,
    horizontal: null,
    mainAxis: null
  }, i = w5(t, e), s = Math.abs(n) > Math.abs(r) ? "horizontal" : "vertical", a = i || s === "horizontal" ? yu : N1, l = i ? yu : s === "horizontal" ? N1 : yu;
  return Math.abs(n) > a && (o.horizontal = n > 0 ? "right" : "left"), Math.abs(r) > l && (o.vertical = r > 0 ? "down" : "up"), o.mainAxis = i ? "diagonal" : s, o;
}
function w5(e, t) {
  const n = t.x - e.x, r = t.y - e.y, o = Math.atan2(r, n) * 180 / Math.PI;
  return o >= -45 + Wr && o <= -22.5 + Wr || o >= 22.5 + Wr && o <= 45 + Wr || o >= 135 + Wr && o <= 157.5 + Wr || o >= -157.5 + Wr && o <= -135 + Wr;
}
function b5(e, t) {
  if (!e.vertical && !e.horizontal)
    return !1;
  if (t.length === 0)
    return !0;
  const n = e.vertical === null || t.includes(e.vertical), r = e.horizontal === null || t.includes(e.horizontal);
  return n && r;
}
class Ky extends kf {
  /**
   * Movement threshold in pixels that must be exceeded before the gesture activates.
   * Higher values reduce false positive gesture detection for small movements.
   */
  constructor(n) {
    super(n);
    ue(this, "state", {
      lastPosition: null
    });
    /**
     * Handle pointer enter events for a specific element
     * @param event The original pointer event
     */
    ue(this, "handleElementEnter", (n) => {
      if (n.pointerType !== "mouse" && n.pointerType !== "pen")
        return;
      const r = this.pointerManager.getPointers() || /* @__PURE__ */ new Map(), o = Array.from(r.values());
      if (this.isWithinPointerCount(o, n.pointerType)) {
        this.isActive = !0;
        const i = {
          x: n.clientX,
          y: n.clientY
        };
        this.state.lastPosition = i, this.emitMoveEvent(this.element, "start", o, n), this.emitMoveEvent(this.element, "ongoing", o, n);
      }
    });
    /**
     * Handle pointer leave events for a specific element
     * @param event The original pointer event
     */
    ue(this, "handleElementLeave", (n) => {
      if (n.pointerType !== "mouse" && n.pointerType !== "pen" || !this.isActive)
        return;
      const r = this.pointerManager.getPointers() || /* @__PURE__ */ new Map(), o = Array.from(r.values());
      this.emitMoveEvent(this.element, "end", o, n), this.resetState();
    });
    /**
     * Handle pointer events for the move gesture (only handles move events now)
     * @param pointers Map of active pointers
     * @param event The original pointer event
     */
    ue(this, "handlePointerEvent", (n, r) => {
      if (r.type !== "pointermove" || r.pointerType !== "mouse" && r.pointerType !== "pen")
        return;
      this.preventDefault && r.preventDefault(), this.stopPropagation && r.stopPropagation();
      const o = Array.from(n.values()), i = this.getTargetElement(r);
      if (!i || !this.isWithinPointerCount(o, r.pointerType))
        return;
      if (this.shouldPreventGesture(i, r.pointerType)) {
        if (!this.isActive)
          return;
        this.resetState(), this.emitMoveEvent(i, "end", o, r);
        return;
      }
      const s = {
        x: r.clientX,
        y: r.clientY
      };
      this.state.lastPosition = s, this.isActive || (this.isActive = !0, this.emitMoveEvent(i, "start", o, r)), this.emitMoveEvent(i, "ongoing", o, r);
    });
    this.threshold = n.threshold || 0;
  }
  clone(n) {
    return new Ky(N({
      name: this.name,
      preventDefault: this.preventDefault,
      stopPropagation: this.stopPropagation,
      threshold: this.threshold,
      minPointers: this.minPointers,
      maxPointers: this.maxPointers,
      requiredKeys: [...this.requiredKeys],
      pointerMode: [...this.pointerMode],
      preventIf: [...this.preventIf],
      pointerOptions: structuredClone(this.pointerOptions)
    }, n));
  }
  init(n, r, o, i) {
    super.init(n, r, o, i), this.element.addEventListener("pointerenter", this.handleElementEnter), this.element.addEventListener("pointerleave", this.handleElementLeave);
  }
  destroy() {
    this.element.removeEventListener("pointerenter", this.handleElementEnter), this.element.removeEventListener("pointerleave", this.handleElementLeave), this.resetState(), super.destroy();
  }
  updateOptions(n) {
    super.updateOptions(n);
  }
  resetState() {
    this.isActive = !1, this.state = {
      lastPosition: null
    };
  }
  /**
   * Emit move-specific events
   * @param element The DOM element the event is related to
   * @param phase The current phase of the gesture (start, ongoing, end)
   * @param pointers Array of active pointers
   * @param event The original pointer event
   */
  emitMoveEvent(n, r, o, i) {
    const s = this.state.lastPosition || Tr(o), a = this.gesturesRegistry.getActiveGestures(n), l = {
      gestureName: this.name,
      centroid: s,
      target: i.target,
      srcEvent: i,
      phase: r,
      pointers: o,
      timeStamp: i.timeStamp,
      activeGestures: a,
      customData: this.customData
    }, u = If(this.name, r), c = new CustomEvent(u, {
      bubbles: !0,
      cancelable: !0,
      composed: !0,
      detail: l
    });
    n.dispatchEvent(c);
  }
}
class Uc extends kf {
  /**
   * Movement threshold in pixels that must be exceeded before the gesture activates.
   * Higher values reduce false positive gesture detection for small movements.
   */
  /**
   * Allowed directions for the pan gesture
   * Default allows all directions
   */
  constructor(n) {
    super(n);
    ue(this, "state", {
      startPointers: /* @__PURE__ */ new Map(),
      startCentroid: null,
      lastCentroid: null,
      movementThresholdReached: !1,
      totalDeltaX: 0,
      totalDeltaY: 0,
      activeDeltaX: 0,
      activeDeltaY: 0,
      lastDirection: {
        vertical: null,
        horizontal: null,
        mainAxis: null
      },
      lastDeltas: null
    });
    /**
     * Handle pointer events for the pan gesture
     */
    ue(this, "handlePointerEvent", (n, r) => {
      var a;
      const o = Array.from(n.values());
      if (r.type === "forceCancel") {
        this.cancel(r.target, o, r);
        return;
      }
      const i = this.getTargetElement(r);
      if (!i)
        return;
      if (this.shouldPreventGesture(i, r.pointerType)) {
        this.cancel(i, o, r);
        return;
      }
      const s = this.getRelevantPointers(o, i);
      if (!this.isWithinPointerCount(s, r.pointerType)) {
        this.cancel(i, s, r);
        return;
      }
      switch (r.type) {
        case "pointerdown":
          if (!this.isActive && !this.state.startCentroid)
            s.forEach((l) => {
              this.state.startPointers.set(l.pointerId, l);
            }), this.originalTarget = i, this.state.startCentroid = Tr(s), this.state.lastCentroid = N({}, this.state.startCentroid);
          else if (this.state.startCentroid && this.state.lastCentroid) {
            const l = this.state.lastCentroid, u = Tr(s), c = u.x - l.x, d = u.y - l.y;
            this.state.startCentroid = {
              x: this.state.startCentroid.x + c,
              y: this.state.startCentroid.y + d
            }, this.state.lastCentroid = u, s.forEach((p) => {
              this.state.startPointers.has(p.pointerId) || this.state.startPointers.set(p.pointerId, p);
            });
          }
          break;
        case "pointermove":
          if (this.state.startCentroid && this.isWithinPointerCount(o, r.pointerType)) {
            const l = Tr(s), u = l.x - this.state.startCentroid.x, c = l.y - this.state.startCentroid.y, d = Math.sqrt(u * u + c * c), p = C5(this.state.lastCentroid ?? this.state.startCentroid, l), f = this.state.lastCentroid ? l.x - this.state.lastCentroid.x : 0, h = this.state.lastCentroid ? l.y - this.state.lastCentroid.y : 0;
            !this.state.movementThresholdReached && d >= this.threshold && b5(p, this.direction) ? (this.state.movementThresholdReached = !0, this.isActive = !0, this.state.lastDeltas = {
              x: f,
              y: h
            }, this.state.totalDeltaX += f, this.state.totalDeltaY += h, this.state.activeDeltaX += f, this.state.activeDeltaY += h, this.emitPanEvent(i, "start", s, r, l), this.emitPanEvent(i, "ongoing", s, r, l)) : this.state.movementThresholdReached && this.isActive && (this.state.lastDeltas = {
              x: f,
              y: h
            }, this.state.totalDeltaX += f, this.state.totalDeltaY += h, this.state.activeDeltaX += f, this.state.activeDeltaY += h, this.emitPanEvent(i, "ongoing", s, r, l)), this.state.lastCentroid = l, this.state.lastDirection = p;
          }
          break;
        case "pointerup":
        case "pointercancel":
        case "forceCancel":
          if (this.isActive && this.state.movementThresholdReached) {
            const l = s.filter((u) => u.type !== "pointerup" && u.type !== "pointercancel");
            if (this.isWithinPointerCount(l, r.pointerType)) {
              if (l.length >= 1 && this.state.lastCentroid) {
                const u = Tr(l), c = u.x - this.state.lastCentroid.x, d = u.y - this.state.lastCentroid.y;
                this.state.startCentroid = {
                  x: this.state.startCentroid.x + c,
                  y: this.state.startCentroid.y + d
                }, this.state.lastCentroid = u;
                const p = (a = s.find((f) => f.type === "pointerup" || f.type === "pointercancel")) == null ? void 0 : a.pointerId;
                p !== void 0 && this.state.startPointers.delete(p);
              }
            } else {
              const u = this.state.lastCentroid || this.state.startCentroid;
              r.type === "pointercancel" && this.emitPanEvent(i, "cancel", s, r, u), this.emitPanEvent(i, "end", s, r, u), this.resetState();
            }
          } else
            this.resetState();
          break;
      }
    });
    this.direction = n.direction || ["up", "down", "left", "right"], this.threshold = n.threshold || 0;
  }
  clone(n) {
    return new Uc(N({
      name: this.name,
      preventDefault: this.preventDefault,
      stopPropagation: this.stopPropagation,
      threshold: this.threshold,
      minPointers: this.minPointers,
      maxPointers: this.maxPointers,
      direction: [...this.direction],
      requiredKeys: [...this.requiredKeys],
      pointerMode: [...this.pointerMode],
      preventIf: [...this.preventIf],
      pointerOptions: structuredClone(this.pointerOptions)
    }, n));
  }
  destroy() {
    this.resetState(), super.destroy();
  }
  updateOptions(n) {
    super.updateOptions(n), this.direction = n.direction || this.direction, this.threshold = n.threshold ?? this.threshold;
  }
  resetState() {
    this.isActive = !1, this.state = N({}, this.state, {
      startPointers: /* @__PURE__ */ new Map(),
      startCentroid: null,
      lastCentroid: null,
      lastDeltas: null,
      activeDeltaX: 0,
      activeDeltaY: 0,
      movementThresholdReached: !1,
      lastDirection: {
        vertical: null,
        horizontal: null,
        mainAxis: null
      }
    });
  }
  /**
   * Emit pan-specific events with additional data
   */
  emitPanEvent(n, r, o, i, s) {
    var m, v;
    if (!this.state.startCentroid)
      return;
    const a = ((m = this.state.lastDeltas) == null ? void 0 : m.x) ?? 0, l = ((v = this.state.lastDeltas) == null ? void 0 : v.y) ?? 0, u = this.state.startPointers.values().next().value, c = u ? (i.timeStamp - u.timeStamp) / 1e3 : 0, d = c > 0 ? a / c : 0, p = c > 0 ? l / c : 0, f = Math.sqrt(d * d + p * p), h = this.gesturesRegistry.getActiveGestures(n), g = {
      gestureName: this.name,
      initialCentroid: this.state.startCentroid,
      centroid: s,
      target: i.target,
      srcEvent: i,
      phase: r,
      pointers: o,
      timeStamp: i.timeStamp,
      deltaX: a,
      deltaY: l,
      direction: this.state.lastDirection,
      velocityX: d,
      velocityY: p,
      velocity: f,
      totalDeltaX: this.state.totalDeltaX,
      totalDeltaY: this.state.totalDeltaY,
      activeDeltaX: this.state.activeDeltaX,
      activeDeltaY: this.state.activeDeltaY,
      activeGestures: h,
      customData: this.customData
    }, x = If(this.name, r), y = new CustomEvent(x, {
      bubbles: !0,
      cancelable: !0,
      composed: !0,
      detail: g
    });
    n.dispatchEvent(y), this.preventDefault && i.preventDefault(), this.stopPropagation && i.stopPropagation();
  }
  /**
   * Cancel the current gesture
   */
  cancel(n, r, o) {
    if (this.isActive) {
      const i = n ?? this.element;
      this.emitPanEvent(i, "cancel", r, o, this.state.lastCentroid), this.emitPanEvent(i, "end", r, o, this.state.lastCentroid);
    }
    this.resetState();
  }
}
class Xy extends kf {
  /**
   * Duration in milliseconds required to hold before the press gesture is recognized
   */
  /**
   * Maximum distance a pointer can move for a gesture to still be considered a press
   */
  constructor(n) {
    super(n);
    ue(this, "state", {
      startCentroid: null,
      lastPosition: null,
      timerId: null,
      startTime: 0,
      pressThresholdReached: !1
    });
    /**
     * Handle pointer events for the press gesture
     */
    ue(this, "handlePointerEvent", (n, r) => {
      const o = Array.from(n.values());
      if (r.type === "forceCancel") {
        this.cancelPress(r.target, o, r);
        return;
      }
      const i = this.getTargetElement(r);
      if (!i)
        return;
      if (this.shouldPreventGesture(i, r.pointerType)) {
        this.isActive && this.cancelPress(i, o, r);
        return;
      }
      const s = this.getRelevantPointers(o, i);
      if (!this.isWithinPointerCount(s, r.pointerType)) {
        this.isActive && this.cancelPress(i, s, r);
        return;
      }
      switch (r.type) {
        case "pointerdown":
          !this.isActive && !this.state.startCentroid && (this.state.startCentroid = Tr(s), this.state.lastPosition = N({}, this.state.startCentroid), this.state.startTime = r.timeStamp, this.isActive = !0, this.originalTarget = i, this.clearPressTimer(), this.state.timerId = setTimeout(() => {
            if (this.isActive && this.state.startCentroid) {
              this.state.pressThresholdReached = !0;
              const a = this.state.lastPosition;
              this.emitPressEvent(i, "start", s, r, a), this.emitPressEvent(i, "ongoing", s, r, a);
            }
          }, this.duration));
          break;
        case "pointermove":
          if (this.isActive && this.state.startCentroid) {
            const a = Tr(s);
            this.state.lastPosition = a;
            const l = a.x - this.state.startCentroid.x, u = a.y - this.state.startCentroid.y;
            Math.sqrt(l * l + u * u) > this.maxDistance && this.cancelPress(i, s, r);
          }
          break;
        case "pointerup":
          if (this.isActive) {
            if (this.state.pressThresholdReached) {
              const a = this.state.lastPosition || this.state.startCentroid;
              this.emitPressEvent(i, "end", s, r, a);
            }
            this.resetState();
          }
          break;
        case "pointercancel":
        case "forceCancel":
          this.cancelPress(i, s, r);
          break;
      }
    });
    this.duration = n.duration ?? 500, this.maxDistance = n.maxDistance ?? 10;
  }
  clone(n) {
    return new Xy(N({
      name: this.name,
      preventDefault: this.preventDefault,
      stopPropagation: this.stopPropagation,
      minPointers: this.minPointers,
      maxPointers: this.maxPointers,
      duration: this.duration,
      maxDistance: this.maxDistance,
      requiredKeys: [...this.requiredKeys],
      pointerMode: [...this.pointerMode],
      preventIf: [...this.preventIf],
      pointerOptions: structuredClone(this.pointerOptions)
    }, n));
  }
  destroy() {
    this.clearPressTimer(), this.resetState(), super.destroy();
  }
  updateOptions(n) {
    super.updateOptions(n), this.duration = n.duration ?? this.duration, this.maxDistance = n.maxDistance ?? this.maxDistance;
  }
  resetState() {
    this.clearPressTimer(), this.isActive = !1, this.state = N({}, this.state, {
      startCentroid: null,
      lastPosition: null,
      timerId: null,
      startTime: 0,
      pressThresholdReached: !1
    });
  }
  /**
   * Clear the press timer if it's active
   */
  clearPressTimer() {
    this.state.timerId !== null && (clearTimeout(this.state.timerId), this.state.timerId = null);
  }
  /**
   * Emit press-specific events with additional data
   */
  emitPressEvent(n, r, o, i, s) {
    const a = this.gesturesRegistry.getActiveGestures(n), l = i.timeStamp - this.state.startTime, u = {
      gestureName: this.name,
      centroid: s,
      target: i.target,
      srcEvent: i,
      phase: r,
      pointers: o,
      timeStamp: i.timeStamp,
      x: s.x,
      y: s.y,
      duration: l,
      activeGestures: a,
      customData: this.customData
    }, c = If(this.name, r), d = new CustomEvent(c, {
      bubbles: !0,
      cancelable: !0,
      composed: !0,
      detail: u
    });
    n.dispatchEvent(d), this.preventDefault && i.preventDefault(), this.stopPropagation && i.stopPropagation();
  }
  /**
   * Cancel the current press gesture
   */
  cancelPress(n, r, o) {
    if (this.isActive && this.state.pressThresholdReached) {
      const i = this.state.lastPosition || this.state.startCentroid;
      this.emitPressEvent(n ?? this.element, "cancel", r, o, i), this.emitPressEvent(n ?? this.element, "end", r, o, i);
    }
    this.resetState();
  }
}
class qy extends kf {
  /**
   * Maximum distance a pointer can move for a gesture to still be considered a tap
   */
  /**
   * Number of consecutive taps to detect
   */
  constructor(n) {
    super(n);
    ue(this, "state", {
      startCentroid: null,
      currentTapCount: 0,
      lastTapTime: 0,
      lastPosition: null,
      multiTapResetTimeoutId: null
    });
    /**
     * Handle pointer events for the tap gesture
     */
    ue(this, "handlePointerEvent", (n, r) => {
      const o = Array.from(n.values()), i = this.getTargetElement(r);
      if (!i)
        return;
      const s = this.getRelevantPointers(o, i);
      if (this.shouldPreventGesture(i, r.pointerType) || !this.isWithinPointerCount(s, r.pointerType)) {
        this.isActive && this.cancelTap(i, s, r);
        return;
      }
      switch (r.type) {
        case "pointerdown":
          this.isActive || (this.state.startCentroid = Tr(s), this.state.lastPosition = N({}, this.state.startCentroid), this.isActive = !0, this.originalTarget = i);
          break;
        case "pointermove":
          if (this.isActive && this.state.startCentroid) {
            const a = Tr(s);
            this.state.lastPosition = a;
            const l = a.x - this.state.startCentroid.x, u = a.y - this.state.startCentroid.y;
            Math.sqrt(l * l + u * u) > this.maxDistance && this.cancelTap(i, s, r);
          }
          break;
        case "pointerup":
          if (this.isActive) {
            this.state.currentTapCount += 1;
            const a = this.state.lastPosition || this.state.startCentroid;
            if (!a) {
              this.cancelTap(i, s, r);
              return;
            }
            this.state.currentTapCount >= this.taps ? (this.fireTapEvent(i, s, r, a), this.resetState()) : (this.state.lastTapTime = r.timeStamp, this.isActive = !1, this.state.startCentroid = null, this.state.multiTapResetTimeoutId !== null && clearTimeout(this.state.multiTapResetTimeoutId), this.state.multiTapResetTimeoutId = setTimeout(() => {
              this.state.multiTapResetTimeoutId = null, this.state.currentTapCount > 0 && this.state.currentTapCount < this.taps && (this.state.currentTapCount = 0);
            }, 300));
          }
          break;
        case "pointercancel":
        case "forceCancel":
          this.cancelTap(i, s, r);
          break;
      }
    });
    this.maxDistance = n.maxDistance ?? 10, this.taps = n.taps ?? 1;
  }
  clone(n) {
    return new qy(N({
      name: this.name,
      preventDefault: this.preventDefault,
      stopPropagation: this.stopPropagation,
      minPointers: this.minPointers,
      maxPointers: this.maxPointers,
      maxDistance: this.maxDistance,
      taps: this.taps,
      requiredKeys: [...this.requiredKeys],
      pointerMode: [...this.pointerMode],
      preventIf: [...this.preventIf],
      pointerOptions: structuredClone(this.pointerOptions)
    }, n));
  }
  destroy() {
    this.resetState(), super.destroy();
  }
  updateOptions(n) {
    super.updateOptions(n), this.maxDistance = n.maxDistance ?? this.maxDistance, this.taps = n.taps ?? this.taps;
  }
  resetState() {
    this.isActive = !1, this.state.multiTapResetTimeoutId !== null && clearTimeout(this.state.multiTapResetTimeoutId), this.state = {
      startCentroid: null,
      currentTapCount: 0,
      lastTapTime: 0,
      lastPosition: null,
      multiTapResetTimeoutId: null
    };
  }
  /**
   * Fire the main tap event when a valid tap is detected
   */
  fireTapEvent(n, r, o, i) {
    const s = this.gesturesRegistry.getActiveGestures(n), a = {
      gestureName: this.name,
      centroid: i,
      target: o.target,
      srcEvent: o,
      phase: "end",
      // The tap is complete, so we use 'end' state for the event data
      pointers: r,
      timeStamp: o.timeStamp,
      x: i.x,
      y: i.y,
      tapCount: this.state.currentTapCount,
      activeGestures: s,
      customData: this.customData
    }, l = new CustomEvent(this.name, {
      bubbles: !0,
      cancelable: !0,
      composed: !0,
      detail: a
    });
    n.dispatchEvent(l), this.preventDefault && o.preventDefault(), this.stopPropagation && o.stopPropagation();
  }
  /**
   * Cancel the current tap gesture
   */
  cancelTap(n, r, o) {
    if (this.state.startCentroid || this.state.lastPosition) {
      const i = this.state.lastPosition || this.state.startCentroid, s = this.gesturesRegistry.getActiveGestures(n), a = {
        gestureName: this.name,
        centroid: i,
        target: o.target,
        srcEvent: o,
        phase: "cancel",
        pointers: r,
        timeStamp: o.timeStamp,
        x: i.x,
        y: i.y,
        tapCount: this.state.currentTapCount,
        activeGestures: s,
        customData: this.customData
      }, l = If(this.name, "cancel"), u = new CustomEvent(l, {
        bubbles: !0,
        cancelable: !0,
        composed: !0,
        detail: a
      });
      n.dispatchEvent(u);
    }
    this.resetState();
  }
}
const vi = (e) => e.preventDefault(), Qy = ({
  instance: e
}) => {
  const {
    chartsLayerContainerRef: t
  } = e, n = k.useRef(null);
  k.useEffect(() => {
    const s = t.current;
    n.current || (n.current = new x5({
      gestures: [
        // We separate the zoom gestures from the gestures that are not zoom related
        // This allows us to configure the zoom gestures based on the zoom configuration.
        new Uc({
          name: "pan",
          threshold: 0,
          maxPointers: 1
        }),
        new Ky({
          name: "move",
          preventIf: ["pan", "zoomPinch", "zoomPan"]
        }),
        new qy({
          name: "tap",
          preventIf: ["pan", "zoomPinch", "zoomPan"]
        }),
        new Xy({
          name: "quickPress",
          duration: 50
        }),
        new Uc({
          name: "brush",
          threshold: 0,
          maxPointers: 1
        })
      ]
    }));
    const a = n.current;
    if (!(!s || !a))
      return a.registerElement(["pan", "move", "tap", "quickPress", "brush"], s), () => {
        a.unregisterAllGestures(s);
      };
  }, [t, n]);
  const r = k.useCallback((s, a, l) => {
    const u = t.current;
    return u == null || u.addEventListener(s, a, l), {
      cleanup: () => u == null ? void 0 : u.removeEventListener(s, a, l)
    };
  }, [t]), o = k.useCallback((s, a) => {
    const l = t.current, u = n.current;
    !u || !l || u.setGestureOptions(s, l, a ?? {});
  }, [t, n]);
  k.useEffect(() => {
    const s = t.current;
    return s == null || s.addEventListener("gesturestart", vi), s == null || s.addEventListener("gesturechange", vi), s == null || s.addEventListener("gestureend", vi), () => {
      s == null || s.removeEventListener("gesturestart", vi), s == null || s.removeEventListener("gesturechange", vi), s == null || s.removeEventListener("gestureend", vi);
    };
  }, [t]);
  const i = k.useCallback((s) => {
    const a = t.current, l = n.current;
    if (!l || !a)
      return () => {
      };
    const u = s.map((c) => c.name);
    return l.addGestures(s), l.registerElement(u, a), () => {
      l.removeGestures(u);
    };
  }, [t, n]);
  return {
    instance: {
      addInteractionListener: r,
      updateZoomInteractionListeners: o,
      registerGestures: i
    }
  };
};
Qy.params = {};
Qy.getInitialState = () => ({});
const S5 = [LI, Yy, gf, Vy, Sf, yf, Qy, af], k5 = ["apiRef"], I5 = (e) => {
  let {
    plugins: t
  } = e, n = xe(e.props, k5);
  const r = {};
  t.forEach((s) => {
    Object.assign(r, s.params);
  });
  const o = {};
  return Object.keys(n).forEach((s) => {
    const a = n[s];
    r[s] && (o[s] = a);
  }), t.reduce((s, a) => a.getDefaultizedParams ? a.getDefaultizedParams({
    params: s
  }) : s, o);
};
let D1 = 0;
function T5(e, t) {
  const n = po(), r = k.useMemo(() => [...S5, ...e], [e]), o = I5({
    plugins: r,
    props: t
  });
  o.id = o.id ?? n;
  const s = k.useRef({}).current, a = P5(t.apiRef), l = k.useRef(null);
  if (l.current == null) {
    D1 += 1;
    const d = {
      cacheKey: {
        id: D1
      }
    };
    r.forEach((p) => {
      p.getInitialState && Object.assign(d, p.getInitialState(o, d));
    }), l.current = new cy(d);
  }
  const u = (d) => {
    const p = d({
      instance: s,
      params: o,
      plugins: r,
      store: l.current
    });
    p.publicAPI && Object.assign(a.current, p.publicAPI), p.instance && Object.assign(s, p.instance);
  };
  return r.forEach(u), {
    contextValue: k.useMemo(() => ({
      store: l.current,
      publicAPI: a.current,
      instance: s
    }), [s, a])
  };
}
function E5(e) {
  return e.current == null && (e.current = {}), e;
}
function P5(e) {
  const t = k.useRef({});
  return e ? E5(e) : t;
}
const DI = /* @__PURE__ */ k.createContext(null), Hc = () => {
}, FI = 4, zI = 20 + 2 * FI, M5 = 40 + 2 * FI, A5 = "hover", Zy = (e, t, n) => {
  const r = n ?? !1;
  return e === "y" && (t === "band" || t === "point") ? !r : r;
}, vu = {
  minStart: 0,
  maxEnd: 100,
  step: 5,
  minSpan: 10,
  maxSpan: 100,
  panning: !0,
  filterMode: "keep",
  reverse: !1,
  slider: {
    enabled: !1,
    preview: !1,
    size: zI,
    showTooltip: A5
  }
}, Jy = (e, t, n, r) => {
  var o;
  if (e)
    return e === !0 ? N({
      axisId: t,
      axisDirection: n
    }, vu, {
      reverse: r ?? !1
    }) : N({
      axisId: t,
      axisDirection: n
    }, vu, {
      reverse: r ?? !1
    }, e, {
      slider: N({}, vu.slider, {
        size: ((o = e.slider) == null ? void 0 : o.preview) ?? vu.slider.preview ? M5 : zI
      }, e.slider)
    });
};
function BI(e, t, n) {
  const r = {
    top: 0,
    bottom: 0,
    none: 0
  };
  return (e && e.length > 0 ? e : [{
    id: fy,
    scaleType: "linear"
  }]).map((s, a) => {
    var g;
    const l = s.dataKey, u = a === 0 ? "bottom" : "none", c = s.position ?? u, d = hy + (s.label ? oi : 0), p = s.id ?? `defaultized-x-axis-${a}`, f = s.height ?? d, h = N({
      offset: r[c]
    }, s, {
      id: p,
      position: c,
      height: f,
      zoom: Jy(s.zoom, p, "x", Zy("x", s.scaleType, s.reverse))
    });
    if (c !== "none") {
      const x = f === "auto" ? d : f;
      r[c] += x + n, (g = h.zoom) != null && g.slider.enabled && (r[c] += h.zoom.slider.size);
    }
    if (s.data !== void 0 || l === void 0 && !s.valueGetter)
      return h;
    if (t === void 0)
      throw new Error(ke(37));
    return N({}, h, {
      data: s.valueGetter ? t.map((x) => s.valueGetter(x)) : t.map((x) => x[l])
    });
  });
}
function jI(e, t, n) {
  const r = {
    right: 0,
    left: 0,
    none: 0
  };
  return (e && e.length > 0 ? e : [{
    id: YO,
    scaleType: "linear"
  }]).map((s, a) => {
    var g;
    const l = s.dataKey, u = a === 0 ? "left" : "none", c = s.position ?? u, d = py + (s.label ? oi : 0), p = s.id ?? `defaultized-y-axis-${a}`, f = s.width ?? d, h = N({
      offset: r[c]
    }, s, {
      id: p,
      position: c,
      width: f,
      zoom: Jy(s.zoom, p, "y", Zy("y", s.scaleType, s.reverse))
    });
    if (c !== "none") {
      const x = f === "auto" ? d : f;
      r[c] += x + n, (g = h.zoom) != null && g.slider.enabled && (r[c] += h.zoom.slider.size);
    }
    if (s.data !== void 0 || l === void 0 && !s.valueGetter)
      return h;
    if (t === void 0)
      throw new Error(ke(38));
    return N({}, h, {
      data: s.valueGetter ? t.map((x) => s.valueGetter(x)) : t.map((x) => x[l])
    });
  });
}
function R5(e, t) {
  return function(r, o) {
    if (o.location === "tick") {
      const i = o.scale.domain();
      return i[0] === i[1] ? o.scale.tickFormat(1)(r) : o.scale.tickFormat(e)(r);
    }
    return o.location === "zoom-slider-tooltip" ? t.tickFormat(2)(r) : `${r}`;
  };
}
function UI(e) {
  return e.type === "piecewise" ? Ey(e.thresholds, e.colors).unknown(e.unknownColor ?? null) : Bc([e.min ?? 0, e.max ?? 100], e.color).unknown(e.unknownColor ?? null);
}
function as(e) {
  return e.values ? qa(e.values, e.colors).unknown(e.unknownColor ?? null) : qa(e.colors.map((t, n) => n), e.colors).unknown(e.unknownColor ?? null);
}
function Wi(e) {
  return e.type === "ordinal" ? as(e) : UI(e);
}
const Wc = (e) => (e == null ? void 0 : e[0]) instanceof Date;
function mg(e, t, n) {
  const r = Jk(e, t);
  return (o, {
    location: i
  }) => i === "tick" ? r.tickFormat(n)(o) : `${o.toLocaleString()}`;
}
const _5 = (e, t, n, r) => {
  const o = /* @__PURE__ */ new Set();
  return Object.keys(t).filter(jy).forEach((s) => {
    var u, c, d;
    const a = ((u = n[s]) == null ? void 0 : u.series) ?? {}, l = (d = (c = t[s]).axisTooltipGetter) == null ? void 0 : d.call(c, a);
    l !== void 0 && l.forEach(({
      axisId: p,
      direction: f
    }) => {
      f === e && o.add(p ?? r);
    });
  }), o;
};
function et(e) {
  return e.bandwidth !== void 0;
}
function HI(e) {
  return et(e) && e.paddingOuter !== void 0;
}
function $5(e, t, n) {
  const r = t === "x" ? [e.left, e.left + e.width] : [e.top + e.height, e.top];
  return n ? [r[1], r[0]] : r;
}
function O5(e, t) {
  return e.step() * t < 0.1;
}
function WI(e, t, n) {
  const r = n === "x" ? e.height : e.width;
  if (r === "auto") {
    const o = t == null ? void 0 : t[e.id];
    return o !== void 0 ? o : (n === "x" ? hy : py) + (e.label ? oi : 0);
  }
  return r ?? 0;
}
const L5 = 0.2, N5 = 0.1;
function D5(e, t, n, r) {
  const o = {}, i = {};
  for (const s of e) {
    const a = s.position;
    if (a && (o[a] ?? (o[a] = 0), i[s.id] = o[a], a !== "none")) {
      const l = WI(s, t, n);
      o[a] += l + r;
      const u = s.zoom;
      u != null && u.slider.enabled && (o[a] += u.slider.size);
    }
  }
  return i;
}
function GI({
  scales: e,
  drawingArea: t,
  formattedSeries: n,
  axis: r,
  seriesConfig: o,
  axisDirection: i,
  zoomMap: s,
  domains: a,
  autoSizes: l,
  axesGap: u = 0
}) {
  if (r === void 0)
    return {
      axis: {},
      axisIds: []
    };
  const c = _5(i, o, n, r[0].id), d = D5(r, l, i, u), p = {};
  return r.forEach((f) => {
    const h = f, g = e[h.id], x = s == null ? void 0 : s.get(h.id), y = x ? [x.start, x.end] : [0, 100], m = $5(t, i, h.reverse ?? !1), v = a[h.id].tickNumber, C = !h.ignoreTooltip && c.has(h.id), S = jD(v, y), b = WI(h, l, i), I = h.data ?? [], T = d[h.id] ?? h.offset ?? 0;
    if (et(g)) {
      const _ = i === "y" ? [m[1], m[0]] : m;
      if (HI(g) && vo(h)) {
        const w = h.categoryGapRatio ?? L5, A = O5(g, w), P = A ? 0 : w, M = A ? 0 : h.barGapRatio ?? N5;
        p[h.id] = N({
          categoryGapRatio: P,
          barGapRatio: M,
          triggerTooltip: C
        }, h, {
          offset: T
        }, i === "x" ? {
          height: b
        } : {
          width: b
        }, {
          data: I,
          /* Doing this here is technically wrong, but acceptable in practice.
           * In theory, this should be done in the normalized scale selector, but then we'd need that selector to depend
           * on the zoom range, which would void its goal (which is to be independent of zoom).
           * Since we only ignore gap ratios when they're practically invisible, the small errors caused by this
           * discrepancy will hopefully not be noticeable. */
          scale: A ? g.copy().padding(0) : g,
          tickNumber: S,
          colorScale: h.colorMap && (h.colorMap.type === "ordinal" ? as(N({
            values: h.data
          }, h.colorMap)) : Wi(h.colorMap))
        });
      }
      if (xo(h) && (p[h.id] = N({
        triggerTooltip: C
      }, h, {
        offset: T
      }, i === "x" ? {
        height: b
      } : {
        width: b
      }, {
        data: I,
        scale: g,
        tickNumber: S,
        colorScale: h.colorMap && (h.colorMap.type === "ordinal" ? as(N({
          values: h.data
        }, h.colorMap)) : Wi(h.colorMap))
      })), Wc(h.data)) {
        const w = mg(h.data, _, h.tickNumber);
        p[h.id].valueFormatter = h.valueFormatter ?? w;
      }
      return;
    }
    if (h.scaleType === "band" || h.scaleType === "point")
      return;
    const L = h, O = L.scaleType ?? "linear";
    p[h.id] = N({
      triggerTooltip: C
    }, L, {
      offset: T
    }, i === "x" ? {
      height: b
    } : {
      width: b
    }, {
      data: I,
      scaleType: O,
      scale: g,
      tickNumber: S,
      colorScale: L.colorMap && UI(L.colorMap),
      valueFormatter: h.valueFormatter ?? R5(S, Il(O, m.map((_) => g.invert(_)), m))
    });
  }), {
    axis: p,
    axisIds: r.map(({
      id: f
    }) => f)
  };
}
function F5(e) {
  return e != null;
}
function z5(e, t, n, r) {
  const o = (e == null ? void 0 : e.length) ?? 0, i = Math.floor(t * o / 100), s = Math.ceil(n * o / 100);
  return function(l, u) {
    return (l[r] ?? (e == null ? void 0 : e[u])) == null ? !0 : u >= i && u < s;
  };
}
function B5(e, t, n, r, o) {
  const i = e[0].valueOf(), s = e[1].valueOf(), a = i + t * (s - i) / 100, l = i + n * (s - i) / 100;
  return function(c, d) {
    const p = c[r] ?? (o == null ? void 0 : o[d]);
    return p == null ? !0 : p >= a && p <= l;
  };
}
const j5 = (e) => ({
  currentAxisId: t,
  seriesXAxisId: n,
  seriesYAxisId: r,
  isDefaultAxis: o
}) => (i, s) => {
  var u, c;
  return !(t === n ? r : n) || o ? ((c = (u = Object.values(e ?? {}))[0]) == null ? void 0 : c.call(u, i, s)) ?? !0 : [r, n].filter((d) => d !== t).map((d) => e[d ?? ""]).filter(F5).every((d) => d(i, s));
}, F1 = (e) => (t = []) => t.reduce((n, r) => {
  const {
    zoom: o,
    id: i,
    reverse: s,
    scaleType: a
  } = r, l = Jy(o, i, e, Zy(e, a, s));
  return l && (n[i] = l), n;
}, {}), U5 = 0.2;
function VI(e, t, n) {
  const r = t === "x" ? [e.left, e.left + e.width] : [e.top + e.height, e.top];
  return n.reverse ? [r[1], r[0]] : r;
}
const z1 = /* @__PURE__ */ new WeakMap();
function B1(e, t, n) {
  let r = z1.get(e);
  r || (r = /* @__PURE__ */ new Map(), z1.set(e, r));
  let o = r.get(t);
  return o || (o = n(), r.set(t, o)), o;
}
function YI(e, t) {
  const n = [0, 1];
  if (vo(e)) {
    const i = e.categoryGapRatio ?? U5;
    return B1(t, `band:${i}`, () => hf(t, n).paddingInner(i).paddingOuter(i / 2));
  }
  if (xo(e))
    return B1(t, "point", () => Fy(t, n));
  const r = e.scaleType ?? "linear", o = Il(r, t, n);
  return DD(e) && e.constant != null && o.constant(e.constant), o;
}
const KI = (e, t) => {
  const n = e[1] - e[0], r = t[1] - t[0], o = e[0] - t[0] * n / r, i = e[1] + (100 - t[1]) * n / r;
  return [o, i];
};
class H5 {
  /**
   * Creates an empty queue. If `capacity` is provided, the queue is backed by fixed-size typed
   * arrays for better performance and memory use, but can't grow beyond `capacity`. `values` uses
   * `ValuesArray` (default `Float64Array`) and `ids` uses `IdsArray` (default `Uint32Array`); pass
   * narrower constructors like `Uint16Array` if your values or ids are known to fit them.
   *
   * @param {number} [capacity]
   * @param {TypedArrayConstructor} [ValuesArray]
   * @param {TypedArrayConstructor} [IdsArray]
   */
  constructor(t = 1 / 0, n = Float64Array, r = Uint32Array) {
    const o = t !== 1 / 0;
    this.ids = o ? (
      /** @type {T[]} */
      /** @type {unknown} */
      new r(t)
    ) : [], this.values = o ? (
      /** @type {number[]} */
      /** @type {unknown} */
      new n(t)
    ) : [], this.capacity = t, this.length = 0;
  }
  /** Removes all items from the queue. */
  clear() {
    this.length = 0;
  }
  /**
   * Adds `item` to the queue with the specified `priority`.
   *
   * `priority` must be a number. Items are sorted and returned from low to high priority. Multiple items
   * with the same priority value can be added to the queue, but there is no guaranteed order between these items.
   *
   * For fixed-capacity queues, throws a `RangeError` if the queue is already full.
   *
   * @param {T} item
   * @param {number} priority
   */
  push(t, n) {
    if (this.length === this.capacity) throw new RangeError("Queue is at capacity.");
    let r = this.length++;
    for (; r > 0; ) {
      const o = r - 1 >> 1, i = this.values[o];
      if (n >= i) break;
      this.ids[r] = this.ids[o], this.values[r] = i, r = o;
    }
    this.ids[r] = t, this.values[r] = n;
  }
  /**
   * Removes and returns the item from the head of this queue, which is one of
   * the items with the lowest priority. If this queue is empty, returns `undefined`.
   */
  pop() {
    if (this.length === 0) return;
    const t = this.ids, n = this.values, r = t[0], o = --this.length;
    if (o > 0) {
      const i = t[o], s = n[o];
      let a = 0;
      const l = o >> 1;
      for (; a < l; ) {
        const u = (a << 1) + 1, c = u + 1, d = u + (+(c < o) & +(n[c] < n[u]));
        if (n[d] >= s) break;
        t[a] = t[d], n[a] = n[d], a = d;
      }
      t[a] = i, n[a] = s;
    }
    return r;
  }
  /** Returns the item from the head of this queue without removing it. If this queue is empty, returns `undefined`. */
  peek() {
    return this.length > 0 ? this.ids[0] : void 0;
  }
  /**
   * Returns the priority value of the item at the head of this queue without
   * removing it. If this queue is empty, returns `undefined`.
   */
  peekValue() {
    return this.length > 0 ? this.values[0] : void 0;
  }
  /**
   * Shrinks the internal arrays to `this.length`. No-op for queues with fixed capacity.
   *
   * `pop()` and `clear()` calls don't free memory automatically to avoid unnecessary resize operations.
   * This also means that items that have been added to the queue can't be garbage collected until
   * a new item is pushed in their place, or this method is called.
   */
  shrink() {
    Array.isArray(this.ids) && (this.ids.length = this.length), Array.isArray(this.values) && (this.values.length = this.length);
  }
}
const j1 = [Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array], Gp = 3;
class e0 {
  /**
   * Recreate a Flatbush index from raw `ArrayBuffer` or `SharedArrayBuffer` data.
   * @param {ArrayBufferLike} data
   * @param {number} [byteOffset=0] byte offset to the start of the Flatbush buffer in the referenced ArrayBuffer.
   * @returns {Flatbush} index
   */
  static from(t, n = 0) {
    if (n % 8 !== 0)
      throw new Error(ke(13));
    if (!t || t.byteLength === void 0 || t.buffer)
      throw new Error(ke(14));
    const [r, o] = new Uint8Array(t, n + 0, 2);
    if (r !== 251)
      throw new Error(ke(15));
    const i = o >> 4;
    if (i !== Gp)
      throw new Error(ke(16, i, Gp));
    const s = j1[o & 15];
    if (!s)
      throw new Error(ke(17));
    const [a] = new Uint16Array(t, n + 2, 1), [l] = new Uint32Array(t, n + 4, 1);
    return new e0(l, a, s, void 0, t, n);
  }
  /**
   * Create a Flatbush index that will hold a given number of items.
   * @param {number} numItems
   * @param {number} [nodeSize=16] Size of the tree node (16 by default).
   * @param {TypedArrayConstructor} [ArrayType=Float64Array] The array type used for coordinates storage (`Float64Array` by default).
   * @param {ArrayBufferConstructor | SharedArrayBufferConstructor} [ArrayBufferType=ArrayBuffer] The array buffer type used to store data (`ArrayBuffer` by default).
   * @param {ArrayBufferLike} [data] (Only used internally)
   * @param {number} [byteOffset=0] (Only used internally)
   */
  constructor(t, n = 16, r = Float64Array, o = ArrayBuffer, i, s = 0) {
    if (t === void 0)
      throw new Error(ke(18));
    if (isNaN(t) || t <= 0)
      throw new Error(ke(19, t));
    this.numItems = +t, this.nodeSize = Math.min(Math.max(+n, 2), 65535), this.byteOffset = s;
    let a = t, l = a;
    this._levelBounds = [a * 4];
    do
      a = Math.ceil(a / this.nodeSize), l += a, this._levelBounds.push(l * 4);
    while (a !== 1);
    this.ArrayType = r, this.IndexArrayType = l < 16384 ? Uint16Array : Uint32Array;
    const u = j1.indexOf(r), c = l * 4 * r.BYTES_PER_ELEMENT;
    if (u < 0)
      throw new Error(ke(20, r));
    if (i)
      this.data = i, this._boxes = new r(i, s + 8, l * 4), this._indices = new this.IndexArrayType(i, s + 8 + c, l), this._pos = l * 4, this.minX = this._boxes[this._pos - 4], this.minY = this._boxes[this._pos - 3], this.maxX = this._boxes[this._pos - 2], this.maxY = this._boxes[this._pos - 1];
    else {
      const d = this.data = new o(8 + c + l * this.IndexArrayType.BYTES_PER_ELEMENT);
      this._boxes = new r(d, 8, l * 4), this._indices = new this.IndexArrayType(d, 8 + c, l), this._pos = 0, this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = -1 / 0, this.maxY = -1 / 0, new Uint8Array(d, 0, 2).set([251, (Gp << 4) + u]), new Uint16Array(d, 2, 1)[0] = n, new Uint32Array(d, 4, 1)[0] = t;
    }
    this._queue = new H5();
  }
  /**
   * Add a given rectangle to the index.
   * @param {number} minX
   * @param {number} minY
   * @param {number} maxX
   * @param {number} maxY
   * @returns {number} A zero-based, incremental number that represents the newly added rectangle.
   */
  add(t, n, r = t, o = n) {
    const i = this._pos >> 2, s = this._boxes;
    return this._indices[i] = i, s[this._pos++] = t, s[this._pos++] = n, s[this._pos++] = r, s[this._pos++] = o, t < this.minX && (this.minX = t), n < this.minY && (this.minY = n), r > this.maxX && (this.maxX = r), o > this.maxY && (this.maxY = o), i;
  }
  /** Perform indexing of the added rectangles. */
  finish() {
    if (this._pos >> 2 !== this.numItems)
      throw new Error(ke(21, this._pos >> 2, this.numItems));
    const t = this._boxes;
    if (this.numItems <= this.nodeSize) {
      t[this._pos++] = this.minX, t[this._pos++] = this.minY, t[this._pos++] = this.maxX, t[this._pos++] = this.maxY;
      return;
    }
    const n = this.maxX - this.minX || 1, r = this.maxY - this.minY || 1, o = new Uint32Array(this.numItems), i = 65535;
    for (let s = 0, a = 0; s < this.numItems; s++) {
      const l = t[a++], u = t[a++], c = t[a++], d = t[a++], p = Math.floor(i * ((l + c) / 2 - this.minX) / n), f = Math.floor(i * ((u + d) / 2 - this.minY) / r);
      o[s] = V5(p, f);
    }
    yg(o, t, this._indices, 0, this.numItems - 1, this.nodeSize);
    for (let s = 0, a = 0; s < this._levelBounds.length - 1; s++) {
      const l = this._levelBounds[s];
      for (; a < l; ) {
        const u = a;
        let c = t[a++], d = t[a++], p = t[a++], f = t[a++];
        for (let h = 1; h < this.nodeSize && a < l; h++)
          c = Math.min(c, t[a++]), d = Math.min(d, t[a++]), p = Math.max(p, t[a++]), f = Math.max(f, t[a++]);
        this._indices[this._pos >> 2] = u, t[this._pos++] = c, t[this._pos++] = d, t[this._pos++] = p, t[this._pos++] = f;
      }
    }
  }
  /**
   * Search the index by a bounding box.
   * @param {number} minX
   * @param {number} minY
   * @param {number} maxX
   * @param {number} maxY
   * @param {(index: number) => boolean} [filterFn] An optional function for filtering the results.
   * @returns {number[]} An array containing the index, the x coordinate and the y coordinate of the points intersecting or touching the given bounding box.
   */
  search(t, n, r, o, i) {
    if (this._pos !== this._boxes.length)
      throw new Error(ke(22));
    let s = this._boxes.length - 4;
    const a = [], l = [];
    for (; s !== void 0; ) {
      const u = Math.min(s + this.nodeSize * 4, U1(s, this._levelBounds));
      for (let c = s; c < u; c += 4) {
        if (r < this._boxes[c] || o < this._boxes[c + 1] || t > this._boxes[c + 2] || n > this._boxes[c + 3])
          continue;
        const d = this._indices[c >> 2] | 0;
        s >= this.numItems * 4 ? a.push(d) : (i === void 0 || i(d)) && (l.push(d), l.push(this._boxes[c]), l.push(this._boxes[c + 1]));
      }
      s = a.pop();
    }
    return l;
  }
  /**
   * Search items in order of distance from the given point.
   * @param x
   * @param y
   * @param [maxResults=Infinity]
   * @param maxDistSq
   * @param [filterFn] An optional function for filtering the results.
   * @param [sqDistFn] An optional function to calculate squared distance from the point to the item.
   * @returns {number[]} An array of indices of items found.
   */
  neighbors(t, n, r = 1 / 0, o = 1 / 0, i, s = W5) {
    if (this._pos !== this._boxes.length)
      throw new Error(ke(23));
    let a = this._boxes.length - 4;
    const l = this._queue, u = [];
    e: for (; a !== void 0; ) {
      const c = Math.min(a + this.nodeSize * 4, U1(a, this._levelBounds));
      for (let d = a; d < c; d += 4) {
        const p = this._indices[d >> 2] | 0, f = this._boxes[d], h = this._boxes[d + 1], g = this._boxes[d + 2], x = this._boxes[d + 3], y = t < f ? f - t : t > g ? t - g : 0, m = n < h ? h - n : n > x ? n - x : 0, v = s(y, m);
        v > o || (a >= this.numItems * 4 ? l.push(p << 1, v) : (i === void 0 || i(p)) && l.push((p << 1) + 1, v));
      }
      for (; l.length && l.peek() & 1; )
        if (l.peekValue() > o || (u.push(l.pop() >> 1), u.length === r))
          break e;
      a = l.length ? l.pop() >> 1 : void 0;
    }
    return l.clear(), u;
  }
}
function W5(e, t) {
  return e * e + t * t;
}
function U1(e, t) {
  let n = 0, r = t.length - 1;
  for (; n < r; ) {
    const o = n + r >> 1;
    t[o] > e ? r = o : n = o + 1;
  }
  return t[n];
}
function yg(e, t, n, r, o, i) {
  if (Math.floor(r / i) >= Math.floor(o / i))
    return;
  const s = e[r], a = e[r + o >> 1], l = e[o];
  let u = l;
  const c = Math.max(s, a);
  l > c ? u = c : c === s ? u = Math.max(a, l) : c === a && (u = Math.max(s, l));
  let d = r - 1, p = o + 1;
  for (; ; ) {
    do
      d++;
    while (e[d] < u);
    do
      p--;
    while (e[p] > u);
    if (d >= p)
      break;
    G5(e, t, n, d, p);
  }
  yg(e, t, n, r, p, i), yg(e, t, n, p + 1, o, i);
}
function G5(e, t, n, r, o) {
  const i = e[r];
  e[r] = e[o], e[o] = i;
  const s = 4 * r, a = 4 * o, l = t[s], u = t[s + 1], c = t[s + 2], d = t[s + 3];
  t[s] = t[a], t[s + 1] = t[a + 1], t[s + 2] = t[a + 2], t[s + 3] = t[a + 3], t[a] = l, t[a + 1] = u, t[a + 2] = c, t[a + 3] = d;
  const p = n[r];
  n[r] = n[o], n[o] = p;
}
function V5(e, t) {
  let n = e ^ t, r = 65535 ^ n, o = 65535 ^ (e | t), i = e & (t ^ 65535), s = n | r >> 1, a = n >> 1 ^ n, l = o >> 1 ^ r & i >> 1 ^ o, u = n & o >> 1 ^ i >> 1 ^ i;
  n = s, r = a, o = l, i = u, s = n & n >> 2 ^ r & r >> 2, a = n & r >> 2 ^ r & (n ^ r) >> 2, l ^= n & o >> 2 ^ r & i >> 2, u ^= r & o >> 2 ^ (n ^ r) & i >> 2, n = s, r = a, o = l, i = u, s = n & n >> 4 ^ r & r >> 4, a = n & r >> 4 ^ r & (n ^ r) >> 4, l ^= n & o >> 4 ^ r & i >> 4, u ^= r & o >> 4 ^ (n ^ r) & i >> 4, n = s, r = a, o = l, i = u, l ^= n & o >> 8 ^ r & i >> 8, u ^= r & o >> 8 ^ (n ^ r) & i >> 8, n = l ^ l >> 1, r = u ^ u >> 1;
  let c = e ^ t, d = r | 65535 ^ (c | n);
  return c = (c | c << 8) & 16711935, c = (c | c << 4) & 252645135, c = (c | c << 2) & 858993459, c = (c | c << 1) & 1431655765, d = (d | d << 8) & 16711935, d = (d | d << 4) & 252645135, d = (d | d << 2) & 858993459, d = (d | d << 1) & 1431655765, (d << 1 | c) >>> 0;
}
const Y5 = (e) => typeof e.size == "function";
function Vp(e) {
  const [t, n] = e;
  return (r) => {
    const o = Math.max(Math.min(r, 1), 0);
    return t + o * (n - t);
  };
}
function K5(e) {
  if (e.type === "piecewise")
    return Ey(e.thresholds, e.sizes);
  if (Y5(e))
    return Bc([e.min ?? 0, e.max ?? 100], e.size);
  switch (e.interpolator ?? "sqrt") {
    case "log":
      return eI([e.min ?? 0, e.max ?? 100], Vp(e.size));
    case "linear":
      return Bc([e.min ?? 0, e.max ?? 100], Vp(e.size));
    case "sqrt":
    default:
      return vD([e.min ?? 0, e.max ?? 100], Vp(e.size));
  }
}
function XI(e) {
  return e.values ? qa(e.values, e.sizes).unknown(e.unknownSize ?? null) : qa(e.sizes.map((t, n) => n), e.sizes).unknown(e.unknownSize ?? null);
}
function X5(e) {
  return e.type === "ordinal" ? XI(e) : K5(e);
}
function H1(e, t) {
  return e.id !== void 0 ? e : N({
    id: t
  }, e);
}
function W1(e) {
  return e.colorMap ? N({}, e, {
    colorScale: e.colorMap.type === "ordinal" && e.data ? as(N({
      values: e.data
    }, e.colorMap)) : Wi(e.colorMap.type === "continuous" ? N({
      min: e.min,
      max: e.max
    }, e.colorMap) : e.colorMap)
  }) : e;
}
function G1(e) {
  return e.sizeMap ? N({}, e, {
    sizeScale: e.sizeMap.type === "ordinal" ? XI(N({
      values: e.data
    }, e.sizeMap)) : X5(e.sizeMap.type === "continuous" ? N({
      min: e.min,
      max: e.max
    }, e.sizeMap) : e.sizeMap)
  }) : e;
}
function qI(e, t) {
  if (!e || e.length === 0)
    return {
      axis: {},
      axisIds: []
    };
  const n = {}, r = [];
  return e.forEach((o, i) => {
    const s = o.dataKey, a = o.id ?? `defaultized-z-axis-${i}`;
    if (o.data !== void 0 || s === void 0 && !o.valueGetter) {
      n[a] = G1(W1(H1(o, a))), r.push(a);
      return;
    }
    if (t === void 0)
      throw new Error(ke(41));
    n[a] = G1(W1(H1(N({}, o, {
      data: o.valueGetter ? t.map((l) => o.valueGetter(l)) : t.map((l) => l[s])
    }), a))), r.push(a);
  }), {
    axis: n,
    axisIds: r
  };
}
const Pl = ({
  params: e,
  store: t
}) => {
  const {
    zAxis: n,
    dataset: r
  } = e, o = k.useRef(!0);
  return k.useEffect(() => {
    if (o.current) {
      o.current = !1;
      return;
    }
    t.set("zAxis", qI(n, r));
  }, [n, r, t]), {};
};
Pl.params = {
  zAxis: !0,
  dataset: !0
};
Pl.getInitialState = (e) => ({
  zAxis: qI(e.zAxis, e.dataset)
});
const q5 = (e) => e, QI = V(q5, (e) => e.zAxis), Q5 = (e, t) => {
  const n = t == null ? void 0 : t.sizeScale;
  return n ? (r) => {
    var i;
    if (((i = t == null ? void 0 : t.data) == null ? void 0 : i[r]) !== void 0) {
      const s = n(t.data[r]);
      if (s != null && !Number.isNaN(s))
        return s;
    }
    const o = e.data[r];
    if (o != null) {
      const s = n(o.sizeValue);
      if (s != null && !Number.isNaN(s))
        return s;
    }
    return e.markerSize;
  } : () => e.markerSize;
}, Z5 = (e) => {
  const t = /* @__PURE__ */ new Map();
  return e.forEach((n) => {
    t.set(n.axisId, n);
  }), t;
}, ZI = (e) => e.zoom, Tf = V(ZI, (e) => e == null ? void 0 : e.isInteracting), Co = le(ZI, function(t) {
  return (t == null ? void 0 : t.zoomData) && Z5(t == null ? void 0 : t.zoomData);
}), V1 = V(Co, (e, t) => e == null ? void 0 : e.get(t)), Ml = le(Ln, Vn, function(t, n) {
  return N({}, F1("x")(t), F1("y")(n));
});
V(Ml, (e, t) => e[t]);
const J5 = V(rn, function(t) {
  return Hy(t.width);
}), eF = V(rn, function(t) {
  return Hy(t.height);
}), t0 = le(Ln, Te, J5, xI, function(t, n, r, o) {
  const i = wf(t, n, r, o, "x");
  return {
    axes: t,
    domains: i
  };
}), n0 = le(Vn, Te, eF, CI, function(t, n, r, o) {
  const i = wf(t, n, r, o, "y");
  return {
    axes: t,
    domains: i
  };
}), JI = le(Co, Ml, t0, n0, function(t, n, {
  axes: r,
  domains: o
}, {
  axes: i,
  domains: s
}) {
  if (!t || !n)
    return;
  let a = !1;
  const l = {}, u = [...r ?? [], ...i ?? []];
  for (let c = 0; c < u.length; c += 1) {
    const d = u[c];
    if (!n[d.id] || n[d.id].filterMode !== "discard")
      continue;
    const p = t.get(d.id);
    if (p === void 0 || p.start <= 0 && p.end >= 100)
      continue;
    const f = c < ((r == null ? void 0 : r.length) ?? 0) ? "x" : "y";
    if (d.scaleType === "band" || d.scaleType === "point")
      l[d.id] = z5(d.data, p.start, p.end, f);
    else {
      const {
        domain: h
      } = f === "x" ? o[d.id] : s[d.id];
      l[d.id] = B5(
        // For continuous scales, the domain is always a two-value array.
        h,
        p.start,
        p.end,
        f,
        d.data
      );
    }
    a = !0;
  }
  if (a)
    return j5(l);
}), tF = le(Te, nt, Co, Ml, JI, t0, function(t, n, r, o, i, {
  axes: s,
  domains: a
}) {
  const l = {};
  return s == null || s.forEach((u, c) => {
    const d = a[u.id].domain;
    if (vo(u) || xo(u)) {
      l[u.id] = d;
      return;
    }
    const p = r == null ? void 0 : r.get(u.id), f = o == null ? void 0 : o[u.id], h = p === void 0 && !f ? i : void 0;
    if (!h) {
      l[u.id] = d;
      return;
    }
    const g = a[u.id].tickNumber, x = Cf(u, "x", n, c, t, h);
    l[u.id] = SI(u, "x", c, t, x, g);
  }), l;
}), nF = le(Te, nt, Co, Ml, JI, n0, function(t, n, r, o, i, {
  axes: s,
  domains: a
}) {
  const l = {};
  return s == null || s.forEach((u, c) => {
    const d = a[u.id].domain;
    if (vo(u) || xo(u)) {
      l[u.id] = d;
      return;
    }
    const p = r == null ? void 0 : r.get(u.id), f = o == null ? void 0 : o[u.id], h = p === void 0 && !f ? i : void 0;
    if (!h) {
      l[u.id] = d;
      return;
    }
    const g = a[u.id].tickNumber, x = Cf(u, "y", n, c, t, h);
    l[u.id] = SI(u, "y", c, t, x, g);
  }), l;
}), eT = le(Ln, tF, function(t, n) {
  const r = {};
  return t == null || t.forEach((o) => {
    const i = o, s = n[i.id];
    r[i.id] = YI(i, s);
  }), r;
}), tT = le(Vn, nF, function(t, n) {
  const r = {};
  return t == null || t.forEach((o) => {
    const i = o, s = n[i.id];
    r[i.id] = YI(i, s);
  }), r;
}), rF = le(Ln, eT, rn, Co, function(t, n, r, o) {
  const i = {};
  return t == null || t.forEach((s) => {
    const a = s, l = o == null ? void 0 : o.get(a.id), u = l ? [l.start, l.end] : [0, 100], c = VI(r, "x", a), d = n[a.id].copy(), p = KI(c, u);
    d.range(p), i[a.id] = d;
  }), i;
}), oF = le(Vn, tT, rn, Co, function(t, n, r, o) {
  const i = {};
  return t == null || t.forEach((s) => {
    const a = s, l = o == null ? void 0 : o.get(a.id), u = l ? [l.start, l.end] : [0, 100], c = VI(r, "y", a), d = n[a.id].copy(), p = et(d) ? c.reverse() : c, f = KI(p, u);
    d.range(f), i[a.id] = d;
  }), i;
}), vt = le(rn, Te, nt, Co, t0, rF, Wy, Is, function(t, n, r, o, {
  axes: i,
  domains: s
}, a, l, u) {
  return GI({
    scales: a,
    drawingArea: t,
    formattedSeries: n,
    axis: i,
    seriesConfig: r,
    axisDirection: "x",
    zoomMap: o,
    domains: s,
    autoSizes: l,
    axesGap: u
  });
}), xt = le(rn, Te, nt, Co, n0, oF, Gy, Is, function(t, n, r, o, {
  axes: i,
  domains: s
}, a, l, u) {
  return GI({
    scales: a,
    drawingArea: t,
    formattedSeries: n,
    axis: i,
    seriesConfig: r,
    axisDirection: "y",
    zoomMap: o,
    domains: s,
    autoSizes: l,
    axesGap: u
  });
});
V(vt, xt, (e, t, n) => (e == null ? void 0 : e.axis[n]) ?? (t == null ? void 0 : t.axis[n]));
V(Ln, Vn, (e, t, n) => {
  const r = (e == null ? void 0 : e.find((o) => o.id === n)) ?? (t == null ? void 0 : t.find((o) => o.id === n)) ?? null;
  if (r)
    return r;
});
const iF = V(Ln, (e) => e[0].id), sF = V(Vn, (e) => e[0].id), aF = /* @__PURE__ */ new Map(), lF = () => aF, uF = le(Te, eT, tT, iF, sF, QI, function(t, n, r, o, i, s) {
  const a = t.scatter, l = /* @__PURE__ */ new Map();
  if (!a)
    return l;
  const u = (s == null ? void 0 : s.axis) ?? {}, c = (s == null ? void 0 : s.axisIds) ?? [];
  return a.seriesOrder.forEach((d) => {
    const p = a.series[d], {
      data: f,
      xAxisId: h = o,
      yAxisId: g = i
    } = p;
    if (f.length === 0)
      return;
    const x = new e0(f.length), y = u[p.sizeAxisId ?? c[0]], m = !y || !y.sizeScale, v = m ? p.markerSize ?? 0 : Q5(p, y);
    let C = m ? v : 0;
    const S = n[h], b = r[g];
    for (let I = 0; I < f.length; I += 1)
      m || (C = Math.max(C, v(I))), x.add(S(f[I].x), b(f[I].y));
    x.finish(), l.set(d, {
      flatbush: x,
      getItemRadius: v,
      maxItemRadius: C
    });
  }), l;
});
function Mr(e) {
  return e instanceof Date ? e.getTime() : e;
}
function r0(e, t) {
  return e.findIndex((n, r) => {
    const o = Mr(n);
    return o > t && (r === 0 || Math.abs(t - o) <= Math.abs(t - Mr(e[r - 1]))) || o <= t && (r === e.length - 1 || Math.abs(t - o) < Math.abs(t - Mr(e[r + 1])));
  });
}
function Fr(e, t) {
  const {
    scale: n,
    data: r,
    reverse: o
  } = e;
  if (!et(n)) {
    if (r === void 0)
      return -1;
    const s = Mr(n.invert(t));
    return r0(r, s);
  }
  const i = n.bandwidth() === 0 ? Math.floor((t - Math.min(...n.range()) + n.step() / 2) / n.step()) : Math.floor((t - Math.min(...n.range())) / n.step());
  return i < 0 || i >= r.length ? -1 : o ? r.length - 1 - i : i;
}
function Y1(e, t, n, r) {
  if (!et(e)) {
    if (r === null) {
      const o = e.invert(n);
      return Number.isNaN(o) ? null : o;
    }
    return t[r];
  }
  return r === null || r < 0 || r >= t.length ? null : t[r];
}
function ls(e, t) {
  const n = e.getBoundingClientRect(), r = t.clientX - n.left, o = t.clientY - n.top;
  if (typeof DOMMatrix > "u")
    return {
      x: r,
      y: o,
      z: 0,
      w: 1,
      matrixTransform: () => ({
        x: r,
        y: o,
        z: 0,
        w: 1
      })
    };
  const i = getComputedStyle(e), s = new DOMMatrix(i.transform);
  return new DOMPoint(r, o).matrixTransform(s.inverse());
}
const Al = ({
  store: e
}) => {
  const t = de(function() {
    e.update({
      interaction: N({}, e.state.interaction, {
        pointer: null
      })
    });
  }), n = de(function(a) {
    e.state.interaction.lastUpdate !== a && e.set("interaction", N({}, e.state.interaction, {
      lastUpdate: a
    }));
  }), r = de(function(a) {
    e.set("interaction", N({}, e.state.interaction, {
      pointer: a,
      lastUpdate: a !== null ? "pointer" : e.state.interaction.lastUpdate
    }));
  }), o = de(function(a) {
    e.set("interaction", N({}, e.state.interaction, {
      pointerType: a.pointerType
    }));
  }), i = de(function() {
    e.set("interaction", N({}, e.state.interaction, {
      pointerType: null
    }));
  });
  return {
    instance: {
      cleanInteraction: t,
      setLastUpdateSource: n,
      setPointerCoordinate: r,
      handlePointerEnter: o,
      handlePointerLeave: i
    }
  };
};
Al.getInitialState = () => ({
  interaction: {
    item: null,
    pointer: null,
    lastUpdate: "pointer",
    pointerType: null
  }
});
Al.params = {};
const Ef = (e) => e.interaction, cF = V(Ef, (e) => e !== void 0), nT = V(Ef, (e) => (e == null ? void 0 : e.pointer) ?? null), Ts = V(nT, (e) => e && e.x), Es = V(nT, (e) => e && e.y), jr = V(Ef, (e) => e == null ? void 0 : e.lastUpdate), dF = V(Ef, (e) => (e == null ? void 0 : e.pointerType) ?? null);
function vg(e, t, n = t.axisIds[0]) {
  return Array.isArray(n) ? n.map((r) => Fr(t.axis[r], e)) : Fr(t.axis[n], e);
}
const rT = (e, t, n) => {
  if (e === null)
    return null;
  const r = vg(e, t, n);
  return r === -1 ? null : r;
}, o0 = V(Ts, vt, rT), i0 = V(Es, xt, rT), fF = V(Ts, Es, vt, xt, (e, t, n, r) => [...e === null ? [] : n.axisIds.map((o) => ({
  axisId: o,
  dataIndex: vg(e, n, o)
})), ...t === null ? [] : r.axisIds.map((o) => ({
  axisId: o,
  dataIndex: vg(t, r, o)
}))].filter((o) => o.dataIndex !== null && o.dataIndex >= 0));
function oT(e, t, n, r = t.axisIds[0]) {
  return Array.isArray(r) ? r.map((o, i) => {
    const s = t.axis[o];
    return Y1(s.scale, s.data, e, n[i]);
  }) : Y1(t.axis[r].scale, t.axis[r].data, e, n);
}
const pF = V(Ts, vt, o0, (e, t, n, r) => e === null || t.axisIds.length === 0 ? null : oT(e, t, n, r)), hF = V(Es, xt, i0, (e, t, n, r) => e === null || t.axisIds.length === 0 ? null : oT(e, t, n, r));
function gF(e) {
  return e.setPointerCoordinate !== void 0;
}
const mF = /* @__PURE__ */ new Set(["bar", "rangeBar", "line"]), Ps = ({
  params: e,
  store: t,
  instance: n
}) => {
  const {
    chartsLayerContainerRef: r
  } = n, {
    xAxis: o,
    yAxis: i,
    dataset: s,
    onHighlightedAxisChange: a,
    onTooltipAxisChange: l,
    axesGap: u
  } = e, c = t.use(Te), d = t.use(cF), {
    axis: p,
    axisIds: f
  } = t.use(vt), {
    axis: h,
    axisIds: g
  } = t.use(xt);
  Hc({
    controlled: e.highlightedAxis
  }), Hc({
    controlled: e.tooltipAxis
  }), me(() => {
    e.highlightedAxis !== void 0 && t.set("controlledCartesianAxisHighlight", e.highlightedAxis);
  }, [t, e.highlightedAxis]), me(() => {
    e.tooltipAxis !== void 0 && t.set("controlledCartesianAxisTooltip", e.tooltipAxis);
  }, [t, e.tooltipAxis]);
  const x = k.useRef(!0);
  k.useEffect(() => {
    if (x.current) {
      x.current = !1;
      return;
    }
    t.set("cartesianAxis", {
      axesGap: u,
      x: BI(o, s, u),
      y: jI(i, s, u)
    });
  }, [o, i, s, u, t]);
  const y = f[0], m = g[0];
  HO(t, fF, (C, S) => {
    if (!(!a && !l) && !Object.is(C, S)) {
      if (C.length !== S.length) {
        a == null || a(S), l == null || l(S);
        return;
      }
      C != null && C.some(({
        axisId: b,
        dataIndex: I
      }, T) => S[T].axisId !== b || S[T].dataIndex !== I) && (a == null || a(S), l == null || l(S));
    }
  });
  const v = gF(n);
  return k.useEffect(() => {
    const C = r.current;
    if (!d || !v || !C || e.disableAxisListener)
      return () => {
      };
    const S = n.addInteractionListener("moveEnd", (w) => {
      w.detail.activeGestures.pan || n.cleanInteraction();
    }), b = n.addInteractionListener("panEnd", (w) => {
      w.detail.activeGestures.move || n.cleanInteraction();
    }), I = n.addInteractionListener("quickPressEnd", (w) => {
      !w.detail.activeGestures.move && !w.detail.activeGestures.pan && n.cleanInteraction();
    }), T = (w) => {
      var $;
      const A = w.detail.srcEvent, P = w.detail.target, M = ls(C, A);
      if (w.detail.srcEvent.buttons >= 1 && (P != null && P.hasPointerCapture(w.detail.srcEvent.pointerId)) && !(P != null && P.closest("[data-charts-zoom-slider]")) && (P == null || P.releasePointerCapture(w.detail.srcEvent.pointerId)), !n.isPointInside(M.x, M.y, P)) {
        ($ = n.cleanInteraction) == null || $.call(n);
        return;
      }
      n.setPointerCoordinate(M);
    }, L = n.addInteractionListener("move", T), O = n.addInteractionListener("pan", T), _ = n.addInteractionListener("quickPress", T);
    return () => {
      L.cleanup(), S.cleanup(), O.cleanup(), b.cleanup(), _.cleanup(), I.cleanup();
    };
  }, [r, t, p, y, h, m, n, e.disableAxisListener, d, v]), k.useEffect(() => {
    const C = r.current, S = e.onAxisClick;
    if (C === null || !S)
      return () => {
      };
    const b = n.addInteractionListener("tap", (I) => {
      let T = null, L = !1;
      const O = ls(C, I.detail.srcEvent), _ = Fr(p[y], O.x);
      L = _ !== -1, T = L ? _ : Fr(h[m], O.y);
      const w = L ? f[0] : g[0];
      if (T == null || T === -1)
        return;
      const A = (L ? p : h)[w].data[T], P = {};
      Object.keys(c).filter((M) => mF.has(M)).forEach((M) => {
        const $ = c[M];
        $ == null || $.seriesOrder.forEach((D) => {
          const R = $.series[D], F = R.xAxisId, z = R.yAxisId, H = L ? F : z;
          (H === void 0 || H === w) && (P[D] = R.data[T]);
        });
      }), S(I.detail.srcEvent, {
        dataIndex: T,
        axisValue: A,
        seriesValues: P
      });
    });
    return () => {
      b.cleanup();
    };
  }, [e.onAxisClick, c, r, p, f, h, g, y, m, n]), {};
};
Ps.params = {
  xAxis: !0,
  yAxis: !0,
  dataset: !0,
  onAxisClick: !0,
  disableAxisListener: !0,
  onHighlightedAxisChange: !0,
  highlightedAxis: !0,
  onTooltipAxisChange: !0,
  tooltipAxis: !0,
  axesGap: !0
};
Ps.getDefaultizedParams = ({
  params: e
}) => N({}, e, {
  axesGap: e.axesGap ?? 0,
  colors: e.colors ?? hI,
  theme: e.theme ?? "light",
  defaultizedXAxis: BI(e.xAxis, e.dataset, e.axesGap ?? 0),
  defaultizedYAxis: jI(e.yAxis, e.dataset, e.axesGap ?? 0)
});
Ps.getInitialState = (e) => N({
  cartesianAxis: {
    axesGap: e.axesGap,
    x: e.defaultizedXAxis,
    y: e.defaultizedYAxis
  }
}, e.highlightedAxis === void 0 ? {} : {
  controlledCartesianAxisHighlight: e.highlightedAxis
});
const yF = Object.is;
function s0(e, t) {
  if (e === t)
    return !0;
  if (!(e instanceof Object) || !(t instanceof Object))
    return !1;
  let n = 0, r = 0;
  for (const o in e)
    if (n += 1, !yF(e[o], t[o]) || !(o in t))
      return !1;
  for (const o in t)
    r += 1;
  return n === r;
}
const Ms = (e) => e.keyboardNavigation;
V(Ms, (e, t) => (e == null ? void 0 : e.isFocused) === !0 && (e == null ? void 0 : e.item) != null && s0(e.item, t));
const vF = V(Ms, (e) => (e == null ? void 0 : e.isFocused) === !0 && (e == null ? void 0 : e.item) != null), a0 = V(Ms, (e) => (e == null ? void 0 : e.isFocused) === !0 ? (e == null ? void 0 : e.item) ?? null : null), xF = V(Ms, (e) => (e == null ? void 0 : e.item) ?? null), CF = V(Ms, (e) => !!(e != null && e.enabled)), iT = (e) => (t, n, r) => {
  var s;
  if (t == null || !("dataIndex" in t) || t.dataIndex === void 0)
    return;
  const o = (s = r[t.type]) == null ? void 0 : s.series[t.seriesId];
  if (!o)
    return;
  let i = e === "x" ? "xAxisId" in o && o.xAxisId : "yAxisId" in o && o.yAxisId;
  return (i === void 0 || i === !1) && (i = n.axisIds[0]), {
    axisId: i,
    dataIndex: t.dataIndex
  };
}, l0 = V(a0, vt, Te, iT("x")), u0 = V(a0, xt, Te, iT("y")), sT = le(Ms, function(t) {
  if ((t == null ? void 0 : t.isFocused) !== !0 || (t == null ? void 0 : t.item) == null)
    return null;
  const {
    type: n,
    seriesId: r
  } = t.item;
  return n === void 0 || r === void 0 ? null : t.item;
}), hr = (e) => e.brush;
V(hr, (e) => e == null ? void 0 : e.start);
V(hr, (e) => e == null ? void 0 : e.current);
const wF = V(hr, (e) => {
  var t;
  return ((t = e == null ? void 0 : e.start) == null ? void 0 : t.x) ?? null;
}), bF = V(hr, (e) => {
  var t;
  return ((t = e == null ? void 0 : e.start) == null ? void 0 : t.y) ?? null;
}), SF = V(hr, (e) => {
  var t;
  return ((t = e == null ? void 0 : e.current) == null ? void 0 : t.x) ?? null;
}), kF = V(hr, (e) => {
  var t;
  return ((t = e == null ? void 0 : e.current) == null ? void 0 : t.y) ?? null;
});
le(wF, bF, SF, kF, (e, t, n, r) => e === null || t === null || n === null || r === null ? null : {
  start: {
    x: e,
    y: t
  },
  current: {
    x: n,
    y: r
  }
});
const IF = V(Te, (e) => {
  let t = !1, n = !1;
  return e && Object.entries(e).forEach(([r, o]) => {
    Object.values(o.series).some((i) => i.layout === "horizontal") && (t = !0), r === "scatter" && o.seriesOrder.length > 0 && (n = !0);
  }), n ? "xy" : t ? "y" : "x";
}), TF = V(Ml, function(t) {
  let n = !1, r = !1;
  return Object.values(t).forEach((o) => {
    o.axisDirection === "y" && (r = !0), o.axisDirection === "x" && (n = !0);
  }), n && r ? "xy" : r ? "y" : n ? "x" : null;
});
V(IF, TF, (e, t) => t ?? e);
const aT = V(hr, (e) => (e == null ? void 0 : e.enabled) || (e == null ? void 0 : e.isZoomBrushEnabled)), lT = V(aT, hr, (e, t) => e && (t == null ? void 0 : t.start) !== null && (t == null ? void 0 : t.current) !== null), Pf = V(hr, lT, (e, t) => t && (e == null ? void 0 : e.preventHighlight)), EF = V(hr, lT, (e, t) => t && (e == null ? void 0 : e.preventTooltip)), Rl = ({
  store: e,
  instance: t,
  params: n
}) => {
  const {
    chartsLayerContainerRef: r
  } = t, o = e.use(aT);
  me(() => {
    e.set("brush", N({}, e.state.brush, {
      enabled: n.brushConfig.enabled,
      preventTooltip: n.brushConfig.preventTooltip,
      preventHighlight: n.brushConfig.preventHighlight
    }));
  }, [e, n.brushConfig.enabled, n.brushConfig.preventTooltip, n.brushConfig.preventHighlight]);
  const i = de(function(u) {
    e.set("brush", N({}, e.state.brush, {
      start: e.state.brush.start ?? u,
      current: u
    }));
  }), s = de(function() {
    e.set("brush", N({}, e.state.brush, {
      start: null,
      current: null
    }));
  }), a = de(function(u) {
    e.state.brush.isZoomBrushEnabled !== u && e.set("brush", N({}, e.state.brush, {
      isZoomBrushEnabled: u
    }));
  });
  return k.useEffect(() => {
    const l = r.current;
    if (l === null || !o)
      return () => {
      };
    const u = (g) => {
      var y;
      if ((y = g.detail.target) != null && y.closest("[data-charts-zoom-slider]"))
        return;
      const x = ls(l, {
        clientX: g.detail.initialCentroid.x,
        clientY: g.detail.initialCentroid.y
      });
      i(x);
    }, c = (g) => {
      const x = ls(l, {
        clientX: g.detail.centroid.x,
        clientY: g.detail.centroid.y
      });
      i(x);
    }, d = t.addInteractionListener("brushStart", u), p = t.addInteractionListener("brush", c), f = t.addInteractionListener("brushCancel", s), h = t.addInteractionListener("brushEnd", s);
    return () => {
      d.cleanup(), p.cleanup(), h.cleanup(), f.cleanup();
    };
  }, [r, t, e, s, i, o]), {
    instance: {
      setBrushCoordinates: i,
      clearBrush: s,
      setZoomBrushEnabled: a
    }
  };
};
Rl.params = {
  brushConfig: !0
};
Rl.getDefaultizedParams = ({
  params: e
}) => {
  var t, n, r;
  return N({}, e, {
    brushConfig: {
      enabled: ((t = e == null ? void 0 : e.brushConfig) == null ? void 0 : t.enabled) ?? !1,
      preventTooltip: ((n = e == null ? void 0 : e.brushConfig) == null ? void 0 : n.preventTooltip) ?? !0,
      preventHighlight: ((r = e == null ? void 0 : e.brushConfig) == null ? void 0 : r.preventHighlight) ?? !0
    }
  });
};
Rl.getInitialState = (e) => ({
  brush: {
    enabled: e.brushConfig.enabled,
    isZoomBrushEnabled: !1,
    preventTooltip: e.brushConfig.preventTooltip,
    preventHighlight: e.brushConfig.preventHighlight,
    start: null,
    current: null
  }
});
function uT(e, t, n) {
  if (e === "pointer") {
    if (t)
      return [t];
    if (n)
      return [n];
  }
  if (e === "keyboard") {
    if (n)
      return [n];
    if (t)
      return [t];
  }
  return [];
}
const As = (e) => e.controlledCartesianAxisHighlight, cT = (e, t, n, r, o, i) => {
  if (i)
    return [];
  if (n !== void 0)
    return n.filter((l) => t.axis[l.axisId] !== void 0).map((l) => l);
  const s = e !== null && {
    axisId: t.axisIds[0],
    dataIndex: e
  }, a = r != null && r;
  return uT(o, s, a);
}, dT = le(o0, vt, As, l0, jr, Pf, cT);
le(i0, xt, As, u0, jr, Pf, cT);
const fT = (e, t, n, r, o, i, s) => {
  var c, d;
  if (s)
    return [];
  if (r !== void 0)
    return r.map((p) => {
      var f, h;
      return N({}, p, {
        value: (h = (f = n.axis[p.axisId]) == null ? void 0 : f.data) == null ? void 0 : h[p.dataIndex]
      });
    }).filter(({
      value: p
    }) => p !== void 0);
  const a = t != null && {
    axisId: n.axisIds[0],
    value: t
  };
  a && e != null && (a.dataIndex = e);
  const l = o != null && ((d = (c = n.axis[o.axisId]) == null ? void 0 : c.data) == null ? void 0 : d[o.dataIndex]), u = o != null && l != null && N({}, o, {
    value: l
  });
  return uT(i, a, u);
}, PF = le(o0, pF, vt, As, l0, jr, Pf, fT), MF = le(i0, hF, xt, As, u0, jr, Pf, fT), pT = (e, t) => e === void 0 ? [t.axis[t.axisIds[0]]] : e.map((r) => t.axis[r.axisId] ?? null).filter((r) => r !== null);
V(As, vt, pT);
V(As, xt, pT);
function hT(e, t, n) {
  if (n === 0)
    return {
      barWidth: e / t,
      offset: 0
    };
  const r = e / (t + (t - 1) * n), o = n * r;
  return {
    barWidth: r,
    offset: o
  };
}
function AF(e, t) {
  return e.bandwidth() === 0 ? Math.floor((t - Math.min(...e.range()) + e.step() / 2) / e.step()) : Math.floor((t - Math.min(...e.range())) / e.step());
}
function RF(e, t, n) {
  var f;
  if (!HI(e.scale))
    return -1;
  const r = AF(e.scale, n), {
    barWidth: o,
    offset: i
  } = hT(e.scale.bandwidth(), t.groupNumber, e.barGapRatio), s = t.groupIndex * (o + i), a = (f = e.data) == null ? void 0 : f[r];
  if (a == null)
    return -1;
  const l = e.scale(a);
  if (l == null)
    return -1;
  const u = l + s, c = u + o, d = Math.min(u, c), p = Math.max(u, c);
  return n >= d && n <= p ? r : -1;
}
const _F = V(vt, xt, Te, function({
  axis: t,
  axisIds: n
}, {
  axis: r,
  axisIds: o
}, i, s) {
  const {
    series: a,
    stackingGroups: l = []
  } = (i == null ? void 0 : i.bar) ?? {}, u = n[0], c = o[0];
  let d;
  for (let p = 0; p < l.length; p += 1) {
    const h = l[p].ids;
    for (const g of h) {
      const x = (a ?? {})[g], y = x.xAxisId ?? u, m = x.yAxisId ?? c, v = t[y], C = r[m], S = x.layout === "horizontal" ? C : v, b = x.layout === "horizontal" ? v : C, I = x.layout === "horizontal" ? s.y : s.x, T = x.layout === "horizontal" ? s.x : s.y, L = RF(S, {
        groupNumber: l.length,
        groupIndex: p
      }, I);
      if (L === -1)
        continue;
      const O = x.visibleStackedData[L], _ = b.scale(O[0]), w = b.scale(O[1]);
      if (_ == null || w == null)
        continue;
      const A = Math.min(_, w), P = Math.max(_, w);
      T >= A && T <= P && (d = {
        seriesId: g,
        dataIndex: L
      });
    }
  }
  if (d)
    return {
      type: "bar",
      seriesId: d.seriesId,
      dataIndex: d.dataIndex
    };
});
function Go(e, t) {
  if (e === t)
    return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor)
      return !1;
    if (Array.isArray(e)) {
      const o = e.length;
      if (o !== t.length)
        return !1;
      for (let i = 0; i < o; i += 1)
        if (!Go(e[i], t[i]))
          return !1;
      return !0;
    }
    if (e instanceof Map && t instanceof Map) {
      if (e.size !== t.size)
        return !1;
      const o = Array.from(e.entries());
      for (let i = 0; i < o.length; i += 1)
        if (!t.has(o[i][0]))
          return !1;
      for (let i = 0; i < o.length; i += 1) {
        const s = o[i];
        if (!Go(s[1], t.get(s[0])))
          return !1;
      }
      return !0;
    }
    if (e instanceof Set && t instanceof Set) {
      if (e.size !== t.size)
        return !1;
      const o = Array.from(e.entries());
      for (let i = 0; i < o.length; i += 1)
        if (!t.has(o[i][0]))
          return !1;
      return !0;
    }
    if (ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      const o = e.length;
      if (o !== t.length)
        return !1;
      for (let i = 0; i < o; i += 1)
        if (e[i] !== t[i])
          return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (e.valueOf !== Object.prototype.valueOf)
      return e.valueOf() === t.valueOf();
    if (e.toString !== Object.prototype.toString)
      return e.toString() === t.toString();
    const n = Object.keys(e), r = n.length;
    if (r !== Object.keys(t).length)
      return !1;
    for (let o = 0; o < r; o += 1)
      if (!Object.prototype.hasOwnProperty.call(t, n[o]))
        return !1;
    for (let o = 0; o < r; o += 1) {
      const i = n[o];
      if (!Go(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function fr(e) {
  if (et(e))
    return (n) => (e(n) ?? 0) + e.bandwidth() / 2;
  const t = e.domain();
  return t[0] === t[1] ? (n) => n === t[0] ? e(n) : NaN : (n) => e(n);
}
const gT = (e) => e.controlledCartesianAxisTooltip, us = [];
function mT(e, t) {
  if (e === void 0)
    return us;
  const n = t.axis[e.axisId];
  return n != null && n.triggerTooltip ? [e] : us;
}
const c0 = xl({
  memoizeOptions: {
    // Keep the same reference if array content is the same.
    // If possible, avoid this pattern by creating selectors that
    // uses string/number as arguments.
    resultEqualityCheck: Go
  }
})(gT, Ts, vt, jr, l0, (e, t, n, r, o) => {
  if (e !== void 0) {
    if (e.length === 0)
      return us;
    const i = new Set(n.axisIds), s = e.filter(({
      axisId: a
    }) => i.has(a));
    return s.length === e.length ? e : s;
  }
  return r === "keyboard" ? mT(o, n) : t === null ? us : n.axisIds.filter((i) => n.axis[i].triggerTooltip).map((i) => ({
    axisId: i,
    dataIndex: Fr(n.axis[i], t)
  })).filter(({
    dataIndex: i
  }) => i >= 0);
}), d0 = xl({
  memoizeOptions: {
    // Keep the same reference if array content is the same.
    // If possible, avoid this pattern by creating selectors that
    // uses string/number as arguments.
    resultEqualityCheck: Go
  }
})(gT, Es, xt, jr, u0, (e, t, n, r, o) => {
  if (e !== void 0) {
    if (e.length === 0)
      return us;
    const i = new Set(n.axisIds), s = e.filter(({
      axisId: a
    }) => i.has(a));
    return s.length === e.length ? e : s;
  }
  return r === "keyboard" ? mT(o, n) : t === null ? us : n.axisIds.filter((i) => n.axis[i].triggerTooltip).map((i) => ({
    axisId: i,
    dataIndex: Fr(n.axis[i], t)
  })).filter(({
    dataIndex: i
  }) => i >= 0);
}), $F = V(c0, d0, (e, t) => e.length > 0 || t.length > 0);
function K1(e, t) {
  var i;
  const n = t.axis[e.axisId];
  if (!n)
    return null;
  const r = (i = n.data) == null ? void 0 : i[e.dataIndex];
  if (r == null)
    return null;
  const o = fr(n.scale)(r);
  return o === void 0 ? null : o;
}
const OF = le(c0, d0, vt, xt, rn, function(t, n, r, o, i, s) {
  if (t.length === 0 && n.length === 0)
    return null;
  if (t.length > 0) {
    const a = K1(t[0], r);
    if (a === null)
      return null;
    switch (s) {
      case "left":
      case "right":
        return {
          x: a,
          y: i.top + i.height / 2
        };
      case "bottom":
        return {
          x: a,
          y: i.top + i.height
        };
      case "top":
      default:
        return {
          x: a,
          y: i.top
        };
    }
  }
  if (n.length > 0) {
    const a = K1(n[0], o);
    if (a === null)
      return null;
    switch (s) {
      case "right":
        return {
          x: i.left + i.width / 2,
          y: a
        };
      case "bottom":
      case "top":
        return {
          x: i.left + i.width / 2,
          y: a
        };
      case "left":
      default:
        return {
          x: i.left + i.width / 2,
          y: a
        };
    }
  }
  return null;
}), _l = ({
  store: e,
  params: t,
  instance: n
}) => {
  Hc({
    controlled: t.tooltipItem
  }), me(() => {
    if (e.state.tooltip.item !== t.tooltipItem) {
      const i = t.tooltipItem ? n.identifierWithType(t.tooltipItem, "seriesItem") : null;
      (e.state.tooltip.item === null || i === null ? i !== e.state.tooltip.item : n.serializeIdentifier(e.state.tooltip.item) !== n.serializeIdentifier(i)) && e.set("tooltip", N({}, e.state.tooltip, {
        item: i
      }));
    }
  }, [e, n, t.tooltipItem]);
  const r = de(function(s) {
    var l;
    const a = e.state.tooltip.item;
    if (a !== null && (!s || n.serializeIdentifier(a) === n.serializeIdentifier(n.identifierWithType(s, "seriesItem")))) {
      (l = t.onTooltipItemChange) == null || l.call(t, null), e.state.tooltip.itemIsControlled || e.set("tooltip", N({}, e.state.tooltip, {
        item: null
      }));
      return;
    }
  });
  return {
    instance: {
      setTooltipItem: de(function(s) {
        var a;
        s0(e.state.tooltip.item, s) || ((a = t.onTooltipItemChange) == null || a.call(t, s), e.state.tooltip.itemIsControlled || e.set("tooltip", N({}, e.state.tooltip, {
          item: s
        })));
      }),
      removeTooltipItem: r
    }
  };
};
_l.getInitialState = (e, t) => ({
  tooltip: {
    itemIsControlled: e.tooltipItem !== void 0,
    item: e.tooltipItem == null ? null : mf(t)(
      // Need some as because the generic SeriesType can't be propagated to plugins methods.
      e.tooltipItem
    )
  }
});
_l.params = {
  tooltipItem: !0,
  onTooltipItemChange: !0
};
const Mf = ({
  params: e,
  store: t,
  instance: n
}) => {
  const {
    chartsLayerContainerRef: r
  } = n;
  return k.useEffect(() => {
    const o = r.current;
    if (!o || e.disableKeyboardNavigation)
      return;
    function i(l) {
      const u = l.currentTarget, c = l.relatedTarget;
      u && c instanceof Node && !u.contains(c) && t.state.keyboardNavigation.isFocused && t.set("keyboardNavigation", N({}, t.state.keyboardNavigation, {
        isFocused: !1
      }));
    }
    function s() {
      t.state.keyboardNavigation.isFocused || t.update(N({}, t.state.highlight && {
        highlight: N({}, t.state.highlight, {
          lastUpdate: "keyboard"
        })
      }, t.state.interaction && {
        interaction: N({}, t.state.interaction, {
          lastUpdate: "keyboard"
        })
      }, {
        keyboardNavigation: N({}, t.state.keyboardNavigation, {
          isFocused: !0
        })
      }));
    }
    function a(l) {
      var f, h;
      let u = t.state.keyboardNavigation.item;
      const c = nt(t.state);
      let d = u == null ? void 0 : u.type;
      if (!d && (d = Object.keys(mI(t.state)).find((g) => c[g] !== void 0), d === void 0))
        return;
      const p = (h = (f = c[d]) == null ? void 0 : f.keyboardFocusHandler) == null ? void 0 : h.call(f, l);
      p && (u = p(u, t.state), u !== t.state.keyboardNavigation.item && (l.preventDefault(), t.update(N({}, t.state.highlight && {
        highlight: N({}, t.state.highlight, {
          lastUpdate: "keyboard"
        })
      }, t.state.interaction && {
        interaction: N({}, t.state.interaction, {
          lastUpdate: "keyboard"
        })
      }, {
        keyboardNavigation: N({}, t.state.keyboardNavigation, {
          item: u
        })
      }))));
    }
    return o.addEventListener("keydown", a), o.addEventListener("focusout", i), o.addEventListener("focusin", s), () => {
      o.removeEventListener("keydown", a), o.removeEventListener("focusout", i), o.removeEventListener("focusin", s);
    };
  }, [r, e.disableKeyboardNavigation, t]), me(() => {
    t.set("keyboardNavigation", N({}, t.state.keyboardNavigation, {
      enabled: !e.disableKeyboardNavigation
    }));
  }, [t, e.disableKeyboardNavigation]), {};
};
Mf.getInitialState = (e) => ({
  keyboardNavigation: {
    item: null,
    isFocused: !1,
    enabled: !e.disableKeyboardNavigation
  }
});
Mf.params = {
  disableKeyboardNavigation: !0
};
function $l(e) {
  return yI.getTypes().has(e);
}
function X1(e) {
  return $l(e.type);
}
const LF = (e, t, n, r, o, i, s) => {
  var f;
  const a = r === "rotation" ? o[t].rotationExtremumGetter : o[t].radiusExtremumGetter, l = ((f = s[t]) == null ? void 0 : f.series) ?? {}, [u, c] = (a == null ? void 0 : a({
    series: l,
    axis: n,
    axisIndex: i,
    isDefaultAxis: i === 0
  })) ?? [1 / 0, -1 / 0], [d, p] = e;
  return [Math.min(u, d), Math.max(c, p)];
}, NF = (e, t, n, r, o) => {
  const s = Object.keys(n).filter($l).reduce((a, l) => LF(a, l, e, t, n, r, o), [1 / 0, -1 / 0]);
  return Number.isNaN(s[0]) || Number.isNaN(s[1]) ? [1 / 0, -1 / 0] : s;
}, DF = (e, t, n, r) => {
  const o = /* @__PURE__ */ new Set();
  return Object.keys(t).filter($l).forEach((s) => {
    var u, c, d;
    const a = ((u = n[s]) == null ? void 0 : u.series) ?? {}, l = (d = (c = t[s]).axisTooltipGetter) == null ? void 0 : d.call(c, a);
    l !== void 0 && l.forEach(({
      axisId: p,
      direction: f
    }) => {
      f === e && o.add(p ?? r);
    });
  }), o;
};
function Vo(e, t) {
  if (typeof e == "number")
    return e;
  if (e === "100%")
    return t;
  if (e.endsWith("%")) {
    const n = Number.parseFloat(e.slice(0, e.length - 1));
    if (!Number.isNaN(n))
      return n * t / 100;
  }
  if (e.endsWith("px")) {
    const n = Number.parseFloat(e.slice(0, e.length - 2));
    if (!Number.isNaN(n))
      return n;
  }
  throw new Error(ke(26, e));
}
const yT = 1e-3;
function FF(e, t, n) {
  if (t === "rotation") {
    const s = [Zr(n.startAngle, 0), Zr(n.endAngle, 2 * Math.PI)], a = s[1] - s[0], l = a >= Math.PI * 2 - yT;
    return n.scaleType === "point" && l && (s[1] -= a / n.data.length), {
      range: s,
      isFullCircle: l
    };
  }
  const r = Math.min(e.height, e.width) / 2, {
    minRadius: o,
    maxRadius: i
  } = n;
  return {
    range: [o === void 0 ? 0 : Vo(o, r), i === void 0 ? r : Vo(i, r)],
    isFullCircle: !1
  };
}
const zF = 0.2, BF = 0.1;
function vT({
  drawingArea: e,
  formattedSeries: t,
  axis: n,
  seriesConfig: r,
  axisDirection: o
}) {
  if (n === void 0)
    return {
      axis: {},
      axisIds: []
    };
  const i = DF(o, r, t, n[0].id), s = {};
  return n.forEach((a, l) => {
    const u = a, {
      range: c,
      isFullCircle: d
    } = FF(e, o, u), [p, f] = NF(u, o, r, l, t), h = !u.ignoreTooltip && i.has(u.id), g = u.data ?? [];
    if (vo(u)) {
      const O = u.categoryGapRatio ?? zF, _ = u.barGapRatio ?? BF;
      if (s[u.id] = N({
        offset: 0,
        categoryGapRatio: O,
        barGapRatio: _,
        triggerTooltip: h
      }, u, {
        data: g,
        scale: hf(u.data, c).paddingInner(O).paddingOuter(O / 2),
        tickNumber: u.data.length,
        colorScale: u.colorMap && (u.colorMap.type === "ordinal" ? as(N({
          values: u.data
        }, u.colorMap)) : Wi(u.colorMap)),
        isFullCircle: d
      }), Wc(u.data)) {
        const w = mg(u.data, c, u.tickNumber);
        s[u.id].valueFormatter = u.valueFormatter ?? w;
      }
    }
    if (xo(u) && (s[u.id] = N({
      offset: 0,
      triggerTooltip: h
    }, u, {
      data: g,
      scale: Fy(u.data, c),
      tickNumber: u.data.length,
      colorScale: u.colorMap && (u.colorMap.type === "ordinal" ? as(N({
        values: u.data
      }, u.colorMap)) : Wi(u.colorMap)),
      isFullCircle: d
    }), Wc(u.data))) {
      const O = mg(u.data, c, u.tickNumber);
      s[u.id].valueFormatter = u.valueFormatter ?? O;
    }
    if (!ND(u))
      return;
    const x = u.scaleType ?? "linear", y = u.domainLimit ?? "nice", m = [u.min ?? p, u.max ?? f];
    if (typeof y == "function") {
      const {
        min: O,
        max: _
      } = y(p, f);
      m[0] = O, m[1] = _;
    }
    const v = o === "rotation" ? 180 / 3 : 1, C = u.tickNumber ?? Uy(u, m, Hy(v * Math.abs(c[1] - c[0]))), S = Il(x, m, c), b = y === "nice" ? S.nice(C) : S, [I, T] = b.domain(), L = [u.min ?? I, u.max ?? T];
    s[u.id] = N({
      offset: 0,
      triggerTooltip: h
    }, u, {
      data: g,
      scaleType: x,
      scale: b.domain(L),
      tickNumber: C,
      colorScale: u.colorMap && Wi(u.colorMap),
      isFullCircle: d
    });
  }), {
    axis: s,
    axisIds: n.map(({
      id: a
    }) => a)
  };
}
const xT = (e) => e.polarAxis, CT = V(xT, (e) => e == null ? void 0 : e.rotation), jF = V(xT, (e) => e == null ? void 0 : e.radius), wo = le(CT, rn, Te, nt, (e, t, n, r) => vT({
  drawingArea: t,
  formattedSeries: n,
  axis: e,
  seriesConfig: r,
  axisDirection: "rotation"
})), bo = le(jF, rn, Te, nt, (e, t, n, r) => vT({
  drawingArea: t,
  formattedSeries: n,
  axis: e,
  seriesConfig: r,
  axisDirection: "radius"
}));
function UF(e) {
  return {
    cx: e.left + e.width / 2,
    cy: e.top + e.height / 2
  };
}
const wT = le(rn, UF), HF = (e) => e.tooltip, bT = V(HF, (e) => (e == null ? void 0 : e.item) ?? null), WF = V(bT, (e) => e !== null), Af = V(jr, bT, sT, (e, t, n) => e === "keyboard" ? n : t ?? null), GF = V(jr, WF, vF, (e, t, n) => e === "keyboard" ? n : t), VF = le(Af, vt, xt, wo, bo, Te, function(t, {
  axis: n,
  axisIds: r
}, {
  axis: o,
  axisIds: i
}, s, a, l) {
  var f;
  if (!t)
    return {};
  const u = (f = l[t.type]) == null ? void 0 : f.series[t.seriesId];
  if (!u)
    return {};
  const c = {
    rotationAxes: s,
    radiusAxes: a
  }, d = tl(u) ? u.xAxisId ?? r[0] : void 0, p = tl(u) ? u.yAxisId ?? i[0] : void 0;
  return d !== void 0 && (c.x = n[d]), p !== void 0 && (c.y = o[p]), c;
}), YF = le(Af, rn, nt, Te, s5, VF, function(t, n, r, o, i, s, a) {
  var u, c, d;
  if (!t)
    return null;
  const l = (u = o[t.type]) == null ? void 0 : u.series[t.seriesId];
  return l ? ((d = (c = r[l.type]).tooltipItemPositionGetter) == null ? void 0 : d.call(c, {
    series: o,
    seriesLayout: i,
    drawingArea: n,
    axesConfig: s,
    identifier: t,
    placement: a ?? "top"
  })) ?? null : null;
}), Ol = ({
  store: e,
  params: t,
  instance: n
}) => {
  Hc({
    controlled: t.highlightedItem
  }), me(() => {
    if (t.highlightedItem !== void 0 && e.state.highlight.item !== t.highlightedItem) {
      if (t.highlightedItem === null) {
        e.set("highlight", N({}, e.state.highlight, {
          item: null
        }));
        return;
      }
      const i = n.identifierWithType(t.highlightedItem, "highlightItem"), s = n.cleanIdentifier(i, "highlightItem");
      e.set("highlight", N({}, e.state.highlight, {
        item: s
      }));
    }
  }, [e, t.highlightedItem, n]);
  const r = de(() => {
    var s;
    (s = t.onHighlightChange) == null || s.call(t, null);
    const i = e.state.highlight;
    i.item === null || i.isControlled || e.set("highlight", {
      item: null,
      lastUpdate: "pointer",
      isControlled: !1
    });
  }), o = de((i) => {
    var u;
    const s = e.state.highlight, a = n.identifierWithType(i, "highlightItem"), l = n.cleanIdentifier(a, "highlightItem");
    s0(s.item, l) || ((u = t.onHighlightChange) == null || u.call(t, l), !s.isControlled && e.set("highlight", {
      item: l,
      lastUpdate: "pointer",
      isControlled: !1
    }));
  });
  return {
    instance: {
      clearHighlight: r,
      setHighlight: o
    }
  };
};
Ol.getInitialState = (e, t) => ({
  highlight: {
    item: e.highlightedItem == null ? e.highlightedItem : dI(t.seriesConfig.config, mf(t)(
      // Need some as because the generic SeriesType can't be propagated to plugins methods.
      e.highlightedItem
    )),
    lastUpdate: "pointer",
    isControlled: e.highlightedItem !== void 0
  }
});
Ol.params = {
  highlightedItem: !0,
  onHighlightChange: !0
};
const KF = [Pl, _l, Al, Ps, Ol];
function XF(e) {
  const {
    children: t,
    plugins: n = KF,
    pluginParams: r = {}
  } = e, {
    contextValue: o
  } = T5(n, r);
  return /* @__PURE__ */ E.jsx(DI.Provider, {
    value: o,
    children: t
  });
}
const Ct = () => {
  const e = k.useContext(DI);
  if (e == null)
    throw new Error(ke(30));
  return e;
};
function qF(e) {
  "hasPointerCapture" in e.currentTarget && e.currentTarget.hasPointerCapture(e.pointerId) && e.currentTarget.releasePointerCapture(e.pointerId);
}
const Rf = (e) => {
  const {
    instance: t
  } = Ct(), n = k.useRef(!1), r = de(() => {
    n.current = !0, t.setLastUpdateSource("pointer"), t.setTooltipItem(e), t.setHighlight(e);
  }), o = de(() => {
    n.current = !1, t.removeTooltipItem(e), t.clearHighlight();
  });
  return k.useEffect(() => () => {
    n.current && o();
  }, [o]), k.useMemo(() => ({
    onPointerEnter: r,
    onPointerLeave: o,
    onPointerDown: qF
  }), [r, o]);
};
function fe() {
  const e = Ct();
  if (!e)
    throw new Error(ke(32));
  return e.store;
}
function f0(e, t, n) {
  return (e == null ? void 0 : e.highlight) === "series" && (t == null ? void 0 : t.seriesId) === n;
}
function QF(e, t, n) {
  return f0(e, t, n) ? !1 : (e == null ? void 0 : e.fade) === "global" && t != null || (e == null ? void 0 : e.fade) === "series" && (t == null ? void 0 : t.seriesId) === n;
}
function ST(e, t, n) {
  return (e == null ? void 0 : e.highlight) === "item" && (t == null ? void 0 : t.seriesId) === n ? t.dataIndex : null;
}
function ZF(e, t, n) {
  return f0(e, t, n) || ST(e, t, n) === (t == null ? void 0 : t.dataIndex) ? null : ((e == null ? void 0 : e.fade) === "series" || (e == null ? void 0 : e.fade) === "global") && (t == null ? void 0 : t.seriesId) === n ? t.dataIndex : null;
}
const JF = (e) => e.highlight, ez = le(Te, (e) => {
  const t = {};
  return Object.keys(e).forEach((n) => {
    var o;
    t[n] = /* @__PURE__ */ new Map();
    const r = e[n];
    (o = r == null ? void 0 : r.seriesOrder) == null || o.forEach((i) => {
      var a;
      const s = r == null ? void 0 : r.series[i];
      (s == null ? void 0 : s.highlightScope) !== void 0 && ((a = t[n]) == null || a.set(i, s.highlightScope));
    });
  }), t;
}), Rs = le(JF, sT, function(t, n) {
  return t.isControlled || t.lastUpdate === "pointer" ? t.item : n;
}), Ll = V(ez, Rs, function(t, n) {
  var o;
  if (!n)
    return null;
  const r = (o = t[n.type]) == null ? void 0 : o.get(n.seriesId);
  return r === void 0 ? null : r;
}), tz = () => "none", nz = le(Ll, Rs, nt, function(t, n, r) {
  if (n === null || t === null)
    return tz;
  const o = r[n.type], i = o.isHighlightedCreator(t, n), s = o.isFadedCreator(t, n);
  return (a) => i(a) ? "highlighted" : s(a) ? "faded" : "none";
});
function kT(e) {
  return nz(e);
}
const rz = le(kT, function(t, n) {
  return t(n);
});
function oz(e, t) {
  return rz(e, t);
}
V(Ll, Rs, function(t, n, r) {
  return f0(t, n, r);
});
V(Ll, Rs, function(t, n, r) {
  return QF(t, n, r);
});
V(Ll, Rs, function(t, n, r) {
  return ZF(t, n, r);
});
V(Ll, Rs, function(t, n, r) {
  return ST(t, n, r);
});
function iz() {
  return !1;
}
function _f(e, t) {
  return !e || !t ? iz : function(r) {
    return r ? e.highlight === "series" ? r.seriesId === t.seriesId : e.highlight === "item" ? r.dataIndex === t.dataIndex && r.seriesId === t.seriesId : !1 : !1;
  };
}
function sz() {
  return !1;
}
function $f(e, t) {
  return !e || !t ? sz : function(r) {
    return r ? e.fade === "series" ? r.seriesId === t.seriesId && r.dataIndex !== t.dataIndex : e.fade === "global" ? r.seriesId !== t.seriesId || r.dataIndex !== t.dataIndex : !1 : !1;
  };
}
function IT(e) {
  return fe().use(oz, e);
}
function q1(e) {
  return e;
}
const { cbrt: Yp, sqrt: Kp, PI: xi } = Math, az = (e, t, n, r, o) => {
  const i = t + n * e, s = i ** 2 + r;
  if (s > 0) {
    const c = Kp(s);
    return Yp(i + c) + Yp(i - c) - o;
  }
  const a = Yp(Kp(i * i - s)), l = i ? Math.atan(Kp(-s) / i) : -xi / 2;
  let u;
  return n < 0 ? u = (i > 0 ? 2 * xi : xi) - l : o < 0 ? u = (i > 0 ? 2 * xi : -3 * xi) + l : u = (i > 0 ? 0 : xi) + l, 2 * a * Math.cos(u / 3) - o;
}, lz = (e, t, n, r) => ((t * e + 3 * n) * e + r) * e;
function TT(e, t, n, r) {
  if (!(0 <= e && e <= 1 && 0 <= n && n <= 1))
    throw new Error("bezier x values must be in [0, 1] range");
  if (e === t && n === r)
    return q1;
  const o = 6 * (3 * e - 3 * n + 1), i = 6 * (n - 2 * e), s = 3 * e, a = o * o, l = i * i, u = i / o, c = 3 * i * s / a - l * i / (a * o), d = 2 * s / o - l / a, p = d * d * d, f = 3 / o, h = 3 * t - 3 * r + 1, g = r - 2 * t, x = 3 * t, y = o ? az : q1;
  return function(v) {
    return v === 0 || v === 1 ? v : lz(y(v, c, f, p, u), h, g, x);
  };
}
const _s = 300, Nl = "cubic-bezier(0.66, 0, 0.34, 1)", uz = TT(0.66, 0, 0.34, 1);
var cs = 0, aa = 0, Xs = 0, ET = 1e3, Gc, la, Vc = 0, ei = 0, Of = 0, rl = typeof performance == "object" && performance.now ? performance : Date, PT = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function p0() {
  return ei || (PT(cz), ei = rl.now() + Of);
}
function cz() {
  ei = 0;
}
function Yc() {
  this._call = this._time = this._next = null;
}
Yc.prototype = MT.prototype = {
  constructor: Yc,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? p0() : +n) + (t == null ? 0 : +t), !this._next && la !== this && (la ? la._next = this : Gc = this, la = this), this._call = e, this._time = n, xg();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, xg());
  }
};
function MT(e, t, n) {
  var r = new Yc();
  return r.restart(e, t, n), r;
}
function dz() {
  p0(), ++cs;
  for (var e = Gc, t; e; )
    (t = ei - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --cs;
}
function Q1() {
  ei = (Vc = rl.now()) + Of, cs = aa = 0;
  try {
    dz();
  } finally {
    cs = 0, pz(), ei = 0;
  }
}
function fz() {
  var e = rl.now(), t = e - Vc;
  t > ET && (Of -= t, Vc = e);
}
function pz() {
  for (var e, t = Gc, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : Gc = n);
  la = e, xg(r);
}
function xg(e) {
  if (!cs) {
    aa && (aa = clearTimeout(aa));
    var t = e - ei;
    t > 24 ? (e < 1 / 0 && (aa = setTimeout(Q1, e - rl.now() - Of)), Xs && (Xs = clearInterval(Xs))) : (Xs || (Vc = rl.now(), Xs = setInterval(fz, ET)), cs = 1, PT(Q1));
  }
}
function hz(e, t, n) {
  var r = new Yc();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
let gz = class {
  /**
   * Create a new ResumableTransition.
   * @param duration Duration in milliseconds
   * @param easingFn The easing function
   * @param onTick Callback function called on each animation frame with the eased time in range [0, 1].
   */
  constructor(t, n, r) {
    ue(this, "elapsed", 0);
    ue(this, "transitionTimer", null);
    this.duration = t, this.easingFn = n, this.onTickCallback = r, this.resume();
  }
  get running() {
    return this.transitionTimer !== null;
  }
  timerCallback(t) {
    this.elapsed = Math.min(t, this.duration);
    const n = this.duration === 0 ? 1 : this.elapsed / this.duration, r = this.easingFn(n);
    this.onTickCallback(r), this.elapsed >= this.duration && this.stop();
  }
  /**
   * Resume the transition
   */
  resume() {
    if (this.running || this.elapsed >= this.duration)
      return this;
    const t = p0() - this.elapsed;
    return this.transitionTimer = MT((n) => this.timerCallback(n), 0, t), this;
  }
  /**
   * Stops the transition.
   */
  stop() {
    return this.running ? (this.transitionTimer && (this.transitionTimer.stop(), this.transitionTimer = null), this) : this;
  }
  /**
   * Immediately finishes the transition and calls the tick callback with the final value.
   */
  finish() {
    return this.stop(), hz(() => this.timerCallback(this.duration)), this;
  }
};
function mz(e, t) {
  if (Object.is(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (let o = 0; o < n.length; o += 1) {
    const i = n[o];
    if (!Object.prototype.hasOwnProperty.call(t, i) || // @ts-ignore
    !Object.is(e[i], t[i]))
      return !1;
  }
  return !0;
}
function yz(e, {
  createInterpolator: t,
  applyProps: n,
  skip: r,
  initialProps: o = e
}) {
  const i = k.useRef(o), s = k.useRef(null), a = k.useRef(null), l = k.useRef(e);
  me(() => {
    l.current = e;
  }, [e]), me(() => {
    var d;
    r && ((d = s.current) == null || d.finish(), s.current = null, a.current = null, i.current = e);
  }, [e, r]);
  const u = k.useCallback((d) => {
    const p = i.current, f = t(p, e);
    s.current = new gz(_s, uz, (h) => {
      const g = f(h);
      i.current = g, n(d, g);
    });
  }, [n, t, e]);
  return [k.useCallback((d) => {
    var f, h, g, x;
    if (d === null) {
      (f = s.current) == null || f.stop();
      return;
    }
    const p = a.current;
    if (p === d) {
      if (mz(l.current, e)) {
        (h = s.current) == null || h.resume();
        return;
      }
      (g = s.current) == null || g.stop();
    }
    p && ((x = s.current) == null || x.stop()), a.current = d, (s.current || !r) && u(d);
  }, [u, e, r]), i.current];
}
function AT(e, {
  createInterpolator: t,
  transformProps: n,
  applyProps: r,
  skip: o,
  initialProps: i = e,
  ref: s
}) {
  const a = n ?? ((d) => d), [l, u] = yz(e, {
    initialProps: i,
    createInterpolator: t,
    applyProps: (d, p) => r(d, a(p)),
    skip: o
  }), c = n(o ? e : u);
  return N({}, c, {
    ref: Ze(l, s)
  });
}
function vz(e) {
  return AT({
    d: e.d
  }, {
    createInterpolator: (t, n) => {
      const r = by(t.d, n.d);
      return (o) => ({
        d: r(o)
      });
    },
    applyProps: (t, {
      d: n
    }) => t.setAttribute("d", n),
    transformProps: (t) => t,
    skip: e.skipAnimation,
    ref: e.ref
  });
}
function RT(e) {
  return e.replace(" ", "_");
}
function Nn() {
  return fe().use(rn);
}
function Dl() {
  return fe().use(i5);
}
const xz = (e) => (t, n) => Math.atan2(t - e.cx, e.cy - n);
function Lf(e) {
  return (e % 360 + 360) % 360;
}
const Xp = 2 * Math.PI;
function qp(e) {
  return (e % Xp + Xp) % Xp;
}
function Z1(e, t) {
  const {
    scale: n,
    data: r,
    reverse: o,
    isFullCircle: i
  } = e, [s, a] = n.range(), l = qp(t - s), u = qp(a - s);
  if (!i && l > u)
    return -1;
  if (!et(n)) {
    if (r === void 0)
      return -1;
    const d = s + qp(t - s), p = Mr(n.invert(d));
    return r0(r, p);
  }
  if (!r)
    return -1;
  let c;
  return n.bandwidth() === 0 ? (c = Math.floor((l + n.step() / 2) / n.step()), i && (c = c % r.length)) : c = Math.floor(l / n.step()), c < 0 || c >= r.length ? -1 : o ? r.length - 1 - c : c;
}
function J1(e, t) {
  const {
    scale: n,
    data: r,
    reverse: o
  } = e;
  if (!et(n)) {
    if (r === void 0)
      return -1;
    const a = Mr(n.invert(t));
    return r0(r, a);
  }
  if (!r)
    return -1;
  let i;
  const s = t - Math.min(...n.range());
  return n.bandwidth() === 0 ? i = Math.floor((s + n.step() / 2) / n.step()) : i = Math.floor(s / n.step()), i < 0 || i >= r.length ? -1 : o ? r.length - 1 - i : i;
}
const Nf = (e, t) => t, Df = (e, t) => t;
function Ff(e, t, n, r) {
  if (r === "rotation") {
    const i = t;
    return Array.isArray(n) ? n.map((s) => Z1(i.axis[s], e)) : Z1(i.axis[n], e);
  }
  const o = t;
  return Array.isArray(n) ? n.map((i) => J1(o.axis[i], e)) : J1(o.axis[n], e);
}
const _T = V(Ts, Es, wT, (e, t, n) => e === null || t === null ? null : xz(n)(e, t)), Cz = V(_T, wo, Nf, (e, t, n) => e === null ? null : Ff(e, t, n ?? t.axisIds[0], "rotation")), $T = V(_T, wo, Df, (e, t, n) => e === null ? null : Ff(e, t, n ?? t.axisIds, "rotation"));
V(wo, Cz, Nf, (e, t, n) => {
  var o;
  if (n = n ?? e.axisIds[0], t === null || t === -1 || e.axisIds.length === 0)
    return null;
  const r = (o = e.axis[n]) == null ? void 0 : o.data;
  return r ? r[t] : null;
});
V(wo, $T, Df, (e, t, n) => (n = n ?? e.axisIds, t === null ? null : n.map((r, o) => {
  var s;
  const i = t[o];
  return i === -1 ? null : (s = e.axis[r].data) == null ? void 0 : s[i];
})));
const OT = xl({
  memoizeOptions: {
    // Keep the same reference if array content is the same.
    // If possible, avoid this pattern by creating selectors that
    // uses string/number as arguments.
    resultEqualityCheck: Go
  }
})($T, wo, (e, t) => e === null ? [] : t.axisIds.map((n, r) => ({
  axisId: n,
  dataIndex: e[r]
})).filter(({
  axisId: n,
  dataIndex: r
}) => t.axis[n].triggerTooltip && r >= 0)), LT = V(Ts, Es, wT, (e, t, n) => e === null || t === null ? null : Math.sqrt((e - n.cx) ** 2 + (t - n.cy) ** 2)), wz = V(LT, bo, Nf, (e, t, n) => e === null ? null : Ff(e, t, n ?? t.axisIds[0], "radius")), NT = V(LT, bo, Df, (e, t, n) => e === null ? null : Ff(e, t, n ?? t.axisIds, "radius"));
V(bo, wz, Nf, (e, t, n) => {
  var o;
  if (n = n ?? e.axisIds[0], t === null || t === -1 || e.axisIds.length === 0)
    return null;
  const r = (o = e.axis[n]) == null ? void 0 : o.data;
  return r ? r[t] : null;
});
V(bo, NT, Df, (e, t, n) => (n = n ?? e.axisIds, t === null ? null : n.map((r, o) => {
  var s;
  const i = t[o];
  return i === -1 ? null : (s = e.axis[r].data) == null ? void 0 : s[i];
})));
const DT = xl({
  memoizeOptions: {
    // Keep the same reference if array content is the same.
    // If possible, avoid this pattern by creating selectors that
    // uses string/number as arguments.
    resultEqualityCheck: Go
  }
})(NT, bo, (e, t) => e === null ? [] : t.axisIds.map((n, r) => ({
  axisId: n,
  dataIndex: e[r]
})).filter(({
  axisId: n,
  dataIndex: r
}) => t.axis[n].triggerTooltip && r >= 0)), bz = V(OT, DT, (e, t) => e.length > 0 || t.length > 0);
function $t() {
  const e = fe(), {
    axis: t,
    axisIds: n
  } = e.use(vt);
  return {
    xAxis: t,
    xAxisIds: n
  };
}
function Ot() {
  const e = fe(), {
    axis: t,
    axisIds: n
  } = e.use(xt);
  return {
    yAxis: t,
    yAxisIds: n
  };
}
function Sz(e) {
  const t = fe(), {
    axis: n,
    axisIds: r
  } = t.use(vt), o = r[0];
  return n[o];
}
function kz(e) {
  const t = fe(), {
    axis: n,
    axisIds: r
  } = t.use(xt), o = r[0];
  return n[o];
}
function h0() {
  const e = fe(), {
    axis: t,
    axisIds: n
  } = e.use(wo);
  return {
    rotationAxis: t,
    rotationAxisIds: n
  };
}
function g0() {
  const e = fe(), {
    axis: t,
    axisIds: n
  } = e.use(bo);
  return {
    radiusAxis: t,
    radiusAxisIds: n
  };
}
function Iz(e) {
  const t = fe(), {
    axis: n,
    axisIds: r
  } = t.use(wo), o = r[0];
  return n[o];
}
function Tz(e) {
  const t = fe(), {
    axis: n,
    axisIds: r
  } = t.use(bo), o = r[0];
  return n[o];
}
function m0() {
  const e = fe(), {
    axis: t,
    axisIds: n
  } = e.use(QI) ?? {
    axis: {},
    axisIds: []
  };
  return {
    zAxis: t,
    zAxisIds: n
  };
}
function y0() {
  const {
    instance: e
  } = Ct();
  return e.chartsLayerContainerRef;
}
function Fl() {
  return fe().use(Te);
}
const FT = V(Te, (e, t) => e[t]);
le(Te, (e, t, n) => {
  var o, i, s, a, l, u;
  if (n === void 0)
    return ((i = (o = e[t]) == null ? void 0 : o.seriesOrder) == null ? void 0 : i.map((c) => {
      var d;
      return (d = e[t]) == null ? void 0 : d.series[c];
    })) ?? [];
  if (!Array.isArray(n))
    return (a = (s = e[t]) == null ? void 0 : s.series) == null ? void 0 : a[n];
  const r = [];
  for (const c of n) {
    const d = (u = (l = e[t]) == null ? void 0 : l.series) == null ? void 0 : u[c];
    d && r.push(d);
  }
  return r;
});
const Ez = (e) => fe().use(FT, e);
function zl() {
  return Ez("line");
}
function Pz() {
  return fe().use(kT);
}
function Mz(e, t) {
  return Object.keys(e).flatMap((n) => {
    const r = t[n].legendGetter;
    return r === void 0 ? [] : r(e[n]);
  });
}
function Az() {
  const e = Fl(), n = fe().use(nt);
  return {
    items: Mz(e, n)
  };
}
function v0() {
  const e = Dl();
  return k.useCallback((t) => `${e}-gradient-${t}`, [e]);
}
function Rz() {
  const e = Dl();
  return k.useCallback((t) => `${e}-gradient-${t}-object-bound`, [e]);
}
function _z(e) {
  return AT({
    d: e.d
  }, {
    createInterpolator: (t, n) => {
      const r = by(t.d, n.d);
      return (o) => ({
        d: r(o)
      });
    },
    applyProps: (t, {
      d: n
    }) => t.setAttribute("d", n),
    skip: e.skipAnimation,
    transformProps: (t) => t,
    ref: e.ref
  });
}
function Se(e) {
  return function() {
    return e;
  };
}
const zT = Math.cos, Kc = Math.sin, Yn = Math.sqrt, eC = 1e-12, Xc = Math.PI, Yo = 2 * Xc, Cg = Math.PI, wg = 2 * Cg, $o = 1e-6, $z = wg - $o;
function BT(e) {
  this._ += e[0];
  for (let t = 1, n = e.length; t < n; ++t)
    this._ += arguments[t] + e[t];
}
function Oz(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return BT;
  const n = 10 ** t;
  return function(r) {
    this._ += r[0];
    for (let o = 1, i = r.length; o < i; ++o)
      this._ += Math.round(arguments[o] * n) / n + r[o];
  };
}
class Lz {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? BT : Oz(t);
  }
  moveTo(t, n) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +n}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(t, n) {
    this._append`L${this._x1 = +t},${this._y1 = +n}`;
  }
  quadraticCurveTo(t, n, r, o) {
    this._append`Q${+t},${+n},${this._x1 = +r},${this._y1 = +o}`;
  }
  bezierCurveTo(t, n, r, o, i, s) {
    this._append`C${+t},${+n},${+r},${+o},${this._x1 = +i},${this._y1 = +s}`;
  }
  arcTo(t, n, r, o, i) {
    if (t = +t, n = +n, r = +r, o = +o, i = +i, i < 0) throw new Error(`negative radius: ${i}`);
    let s = this._x1, a = this._y1, l = r - t, u = o - n, c = s - t, d = a - n, p = c * c + d * d;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = n}`;
    else if (p > $o) if (!(Math.abs(d * l - u * c) > $o) || !i)
      this._append`L${this._x1 = t},${this._y1 = n}`;
    else {
      let f = r - s, h = o - a, g = l * l + u * u, x = f * f + h * h, y = Math.sqrt(g), m = Math.sqrt(p), v = i * Math.tan((Cg - Math.acos((g + p - x) / (2 * y * m))) / 2), C = v / m, S = v / y;
      Math.abs(C - 1) > $o && this._append`L${t + C * c},${n + C * d}`, this._append`A${i},${i},0,0,${+(d * f > c * h)},${this._x1 = t + S * l},${this._y1 = n + S * u}`;
    }
  }
  arc(t, n, r, o, i, s) {
    if (t = +t, n = +n, r = +r, s = !!s, r < 0) throw new Error(`negative radius: ${r}`);
    let a = r * Math.cos(o), l = r * Math.sin(o), u = t + a, c = n + l, d = 1 ^ s, p = s ? o - i : i - o;
    this._x1 === null ? this._append`M${u},${c}` : (Math.abs(this._x1 - u) > $o || Math.abs(this._y1 - c) > $o) && this._append`L${u},${c}`, r && (p < 0 && (p = p % wg + wg), p > $z ? this._append`A${r},${r},0,1,${d},${t - a},${n - l}A${r},${r},0,1,${d},${this._x1 = u},${this._y1 = c}` : p > $o && this._append`A${r},${r},0,${+(p >= Cg)},${d},${this._x1 = t + r * Math.cos(i)},${this._y1 = n + r * Math.sin(i)}`);
  }
  rect(t, n, r, o) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +n}h${r = +r}v${+o}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function x0(e) {
  let t = 3;
  return e.digits = function(n) {
    if (!arguments.length) return t;
    if (n == null)
      t = null;
    else {
      const r = Math.floor(n);
      if (!(r >= 0)) throw new RangeError(`invalid digits: ${n}`);
      t = r;
    }
    return e;
  }, () => new Lz(t);
}
function zf(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function jT(e) {
  this._context = e;
}
jT.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(e, t);
        break;
    }
  }
};
function C0(e) {
  return new jT(e);
}
function UT(e) {
  return e[0];
}
function HT(e) {
  return e[1];
}
function WT(e, t) {
  var n = Se(!0), r = null, o = C0, i = null, s = x0(a);
  e = typeof e == "function" ? e : e === void 0 ? UT : Se(e), t = typeof t == "function" ? t : t === void 0 ? HT : Se(t);
  function a(l) {
    var u, c = (l = zf(l)).length, d, p = !1, f;
    for (r == null && (i = o(f = s())), u = 0; u <= c; ++u)
      !(u < c && n(d = l[u], u, l)) === p && ((p = !p) ? i.lineStart() : i.lineEnd()), p && i.point(+e(d, u, l), +t(d, u, l));
    if (f) return i = null, f + "" || null;
  }
  return a.x = function(l) {
    return arguments.length ? (e = typeof l == "function" ? l : Se(+l), a) : e;
  }, a.y = function(l) {
    return arguments.length ? (t = typeof l == "function" ? l : Se(+l), a) : t;
  }, a.defined = function(l) {
    return arguments.length ? (n = typeof l == "function" ? l : Se(!!l), a) : n;
  }, a.curve = function(l) {
    return arguments.length ? (o = l, r != null && (i = o(r)), a) : o;
  }, a.context = function(l) {
    return arguments.length ? (l == null ? r = i = null : i = o(r = l), a) : r;
  }, a;
}
function Nz(e, t, n) {
  var r = null, o = Se(!0), i = null, s = C0, a = null, l = x0(u);
  e = typeof e == "function" ? e : e === void 0 ? UT : Se(+e), t = typeof t == "function" ? t : Se(t === void 0 ? 0 : +t), n = typeof n == "function" ? n : n === void 0 ? HT : Se(+n);
  function u(d) {
    var p, f, h, g = (d = zf(d)).length, x, y = !1, m, v = new Array(g), C = new Array(g);
    for (i == null && (a = s(m = l())), p = 0; p <= g; ++p) {
      if (!(p < g && o(x = d[p], p, d)) === y)
        if (y = !y)
          f = p, a.areaStart(), a.lineStart();
        else {
          for (a.lineEnd(), a.lineStart(), h = p - 1; h >= f; --h)
            a.point(v[h], C[h]);
          a.lineEnd(), a.areaEnd();
        }
      y && (v[p] = +e(x, p, d), C[p] = +t(x, p, d), a.point(r ? +r(x, p, d) : v[p], n ? +n(x, p, d) : C[p]));
    }
    if (m) return a = null, m + "" || null;
  }
  function c() {
    return WT().defined(o).curve(s).context(i);
  }
  return u.x = function(d) {
    return arguments.length ? (e = typeof d == "function" ? d : Se(+d), r = null, u) : e;
  }, u.x0 = function(d) {
    return arguments.length ? (e = typeof d == "function" ? d : Se(+d), u) : e;
  }, u.x1 = function(d) {
    return arguments.length ? (r = d == null ? null : typeof d == "function" ? d : Se(+d), u) : r;
  }, u.y = function(d) {
    return arguments.length ? (t = typeof d == "function" ? d : Se(+d), n = null, u) : t;
  }, u.y0 = function(d) {
    return arguments.length ? (t = typeof d == "function" ? d : Se(+d), u) : t;
  }, u.y1 = function(d) {
    return arguments.length ? (n = d == null ? null : typeof d == "function" ? d : Se(+d), u) : n;
  }, u.lineX0 = u.lineY0 = function() {
    return c().x(e).y(t);
  }, u.lineY1 = function() {
    return c().x(e).y(n);
  }, u.lineX1 = function() {
    return c().x(r).y(t);
  }, u.defined = function(d) {
    return arguments.length ? (o = typeof d == "function" ? d : Se(!!d), u) : o;
  }, u.curve = function(d) {
    return arguments.length ? (s = d, i != null && (a = s(i)), u) : s;
  }, u.context = function(d) {
    return arguments.length ? (d == null ? i = a = null : a = s(i = d), u) : i;
  }, u;
}
function Dz(e, t) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Fz(e) {
  return e;
}
function zz() {
  var e = Fz, t = Dz, n = null, r = Se(0), o = Se(Yo), i = Se(0);
  function s(a) {
    var l, u = (a = zf(a)).length, c, d, p = 0, f = new Array(u), h = new Array(u), g = +r.apply(this, arguments), x = Math.min(Yo, Math.max(-Yo, o.apply(this, arguments) - g)), y, m = Math.min(Math.abs(x) / u, i.apply(this, arguments)), v = m * (x < 0 ? -1 : 1), C;
    for (l = 0; l < u; ++l)
      (C = h[f[l] = l] = +e(a[l], l, a)) > 0 && (p += C);
    for (t != null ? f.sort(function(S, b) {
      return t(h[S], h[b]);
    }) : n != null && f.sort(function(S, b) {
      return n(a[S], a[b]);
    }), l = 0, d = p ? (x - u * v) / p : 0; l < u; ++l, g = y)
      c = f[l], C = h[c], y = g + (C > 0 ? C * d : 0) + v, h[c] = {
        data: a[c],
        index: l,
        value: C,
        startAngle: g,
        endAngle: y,
        padAngle: m
      };
    return h;
  }
  return s.value = function(a) {
    return arguments.length ? (e = typeof a == "function" ? a : Se(+a), s) : e;
  }, s.sortValues = function(a) {
    return arguments.length ? (t = a, n = null, s) : t;
  }, s.sort = function(a) {
    return arguments.length ? (n = a, t = null, s) : n;
  }, s.startAngle = function(a) {
    return arguments.length ? (r = typeof a == "function" ? a : Se(+a), s) : r;
  }, s.endAngle = function(a) {
    return arguments.length ? (o = typeof a == "function" ? a : Se(+a), s) : o;
  }, s.padAngle = function(a) {
    return arguments.length ? (i = typeof a == "function" ? a : Se(+a), s) : i;
  }, s;
}
class GT {
  constructor(t, n) {
    this._context = t, this._x = n;
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  }
  point(t, n) {
    switch (t = +t, n = +n, this._point) {
      case 0: {
        this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
        break;
      }
      case 1:
        this._point = 2;
      default: {
        this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + t) / 2, this._y0, this._x0, n, t, n) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + n) / 2, t, this._y0, t, n);
        break;
      }
    }
    this._x0 = t, this._y0 = n;
  }
}
function Bz(e) {
  return new GT(e, !0);
}
function jz(e) {
  return new GT(e, !1);
}
const VT = {
  draw(e, t) {
    const n = Yn(t / Xc);
    e.moveTo(n, 0), e.arc(0, 0, n, 0, Yo);
  }
}, Uz = {
  draw(e, t) {
    const n = Yn(t / 5) / 2;
    e.moveTo(-3 * n, -n), e.lineTo(-n, -n), e.lineTo(-n, -3 * n), e.lineTo(n, -3 * n), e.lineTo(n, -n), e.lineTo(3 * n, -n), e.lineTo(3 * n, n), e.lineTo(n, n), e.lineTo(n, 3 * n), e.lineTo(-n, 3 * n), e.lineTo(-n, n), e.lineTo(-3 * n, n), e.closePath();
  }
}, YT = Yn(1 / 3), Hz = YT * 2, Wz = {
  draw(e, t) {
    const n = Yn(t / Hz), r = n * YT;
    e.moveTo(0, -n), e.lineTo(r, 0), e.lineTo(0, n), e.lineTo(-r, 0), e.closePath();
  }
}, Gz = {
  draw(e, t) {
    const n = Yn(t), r = -n / 2;
    e.rect(r, r, n, n);
  }
}, Vz = 0.8908130915292852, KT = Kc(Xc / 10) / Kc(7 * Xc / 10), Yz = Kc(Yo / 10) * KT, Kz = -zT(Yo / 10) * KT, Xz = {
  draw(e, t) {
    const n = Yn(t * Vz), r = Yz * n, o = Kz * n;
    e.moveTo(0, -n), e.lineTo(r, o);
    for (let i = 1; i < 5; ++i) {
      const s = Yo * i / 5, a = zT(s), l = Kc(s);
      e.lineTo(l * n, -a * n), e.lineTo(a * r - l * o, l * r + a * o);
    }
    e.closePath();
  }
}, Qp = Yn(3), qz = {
  draw(e, t) {
    const n = -Yn(t / (Qp * 3));
    e.moveTo(0, n * 2), e.lineTo(-Qp * n, -n), e.lineTo(Qp * n, -n), e.closePath();
  }
}, mn = -0.5, yn = Yn(3) / 2, bg = 1 / Yn(12), Qz = (bg / 2 + 1) * 3, Zz = {
  draw(e, t) {
    const n = Yn(t / Qz), r = n / 2, o = n * bg, i = r, s = n * bg + n, a = -i, l = s;
    e.moveTo(r, o), e.lineTo(i, s), e.lineTo(a, l), e.lineTo(mn * r - yn * o, yn * r + mn * o), e.lineTo(mn * i - yn * s, yn * i + mn * s), e.lineTo(mn * a - yn * l, yn * a + mn * l), e.lineTo(mn * r + yn * o, mn * o - yn * r), e.lineTo(mn * i + yn * s, mn * s - yn * i), e.lineTo(mn * a + yn * l, mn * l - yn * a), e.closePath();
  }
}, w0 = [
  VT,
  Uz,
  Wz,
  Gz,
  Xz,
  qz,
  Zz
];
function b0(e, t) {
  let n = null, r = x0(o);
  e = typeof e == "function" ? e : Se(e || VT), t = typeof t == "function" ? t : Se(t === void 0 ? 64 : +t);
  function o() {
    let i;
    if (n || (n = i = r()), e.apply(this, arguments).draw(n, +t.apply(this, arguments)), i) return n = null, i + "" || null;
  }
  return o.type = function(i) {
    return arguments.length ? (e = typeof i == "function" ? i : Se(i), o) : e;
  }, o.size = function(i) {
    return arguments.length ? (t = typeof i == "function" ? i : Se(+i), o) : t;
  }, o.context = function(i) {
    return arguments.length ? (n = i ?? null, o) : n;
  }, o;
}
function tC(e, t, n) {
  e._context.bezierCurveTo(
    e._x1 + e._k * (e._x2 - e._x0),
    e._y1 + e._k * (e._y2 - e._y0),
    e._x2 + e._k * (e._x1 - t),
    e._y2 + e._k * (e._y1 - n),
    e._x2,
    e._y2
  );
}
function S0(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
S0.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        tC(this, this._x1, this._y1);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2, this._x1 = e, this._y1 = t;
        break;
      case 2:
        this._point = 3;
      default:
        tC(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
(function e(t) {
  function n(r) {
    return new S0(r, t);
  }
  return n.tension = function(r) {
    return e(+r);
  }, n;
})(0);
function Jz(e, t, n) {
  var r = e._x1, o = e._y1, i = e._x2, s = e._y2;
  if (e._l01_a > eC) {
    var a = 2 * e._l01_2a + 3 * e._l01_a * e._l12_a + e._l12_2a, l = 3 * e._l01_a * (e._l01_a + e._l12_a);
    r = (r * a - e._x0 * e._l12_2a + e._x2 * e._l01_2a) / l, o = (o * a - e._y0 * e._l12_2a + e._y2 * e._l01_2a) / l;
  }
  if (e._l23_a > eC) {
    var u = 2 * e._l23_2a + 3 * e._l23_a * e._l12_a + e._l12_2a, c = 3 * e._l23_a * (e._l23_a + e._l12_a);
    i = (i * u + e._x1 * e._l23_2a - t * e._l12_2a) / c, s = (s * u + e._y1 * e._l23_2a - n * e._l12_2a) / c;
  }
  e._context.bezierCurveTo(r, o, i, s, e._x2, e._y2);
}
function XT(e, t) {
  this._context = e, this._alpha = t;
}
XT.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        this.point(this._x2, this._y2);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    if (e = +e, t = +t, this._point) {
      var n = this._x2 - e, r = this._y2 - t;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(n * n + r * r, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
      default:
        Jz(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const e3 = function e(t) {
  function n(r) {
    return t ? new XT(r, t) : new S0(r, 0);
  }
  return n.alpha = function(r) {
    return e(+r);
  }, n;
}(0.5);
function nC(e) {
  return e < 0 ? -1 : 1;
}
function rC(e, t, n) {
  var r = e._x1 - e._x0, o = t - e._x1, i = (e._y1 - e._y0) / (r || o < 0 && -0), s = (n - e._y1) / (o || r < 0 && -0), a = (i * o + s * r) / (r + o);
  return (nC(i) + nC(s)) * Math.min(Math.abs(i), Math.abs(s), 0.5 * Math.abs(a)) || 0;
}
function oC(e, t) {
  var n = e._x1 - e._x0;
  return n ? (3 * (e._y1 - e._y0) / n - t) / 2 : t;
}
function Zp(e, t, n) {
  var r = e._x0, o = e._y0, i = e._x1, s = e._y1, a = (i - r) / 3;
  e._context.bezierCurveTo(r + a, o + a * t, i - a, s - a * n, i, s);
}
function qc(e) {
  this._context = e;
}
qc.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        Zp(this, this._t0, oC(this, this._t0));
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    var n = NaN;
    if (e = +e, t = +t, !(e === this._x1 && t === this._y1)) {
      switch (this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3, Zp(this, oC(this, n = rC(this, e, t)), n);
          break;
        default:
          Zp(this, this._t0, n = rC(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = n;
    }
  }
};
function qT(e) {
  this._context = new QT(e);
}
(qT.prototype = Object.create(qc.prototype)).point = function(e, t) {
  qc.prototype.point.call(this, t, e);
};
function QT(e) {
  this._context = e;
}
QT.prototype = {
  moveTo: function(e, t) {
    this._context.moveTo(t, e);
  },
  closePath: function() {
    this._context.closePath();
  },
  lineTo: function(e, t) {
    this._context.lineTo(t, e);
  },
  bezierCurveTo: function(e, t, n, r, o, i) {
    this._context.bezierCurveTo(t, e, r, n, i, o);
  }
};
function iC(e) {
  return new qc(e);
}
function t3(e) {
  return new qT(e);
}
function ZT(e) {
  this._context = e;
}
ZT.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [], this._y = [];
  },
  lineEnd: function() {
    var e = this._x, t = this._y, n = e.length;
    if (n)
      if (this._line ? this._context.lineTo(e[0], t[0]) : this._context.moveTo(e[0], t[0]), n === 2)
        this._context.lineTo(e[1], t[1]);
      else
        for (var r = sC(e), o = sC(t), i = 0, s = 1; s < n; ++i, ++s)
          this._context.bezierCurveTo(r[0][i], o[0][i], r[1][i], o[1][i], e[s], t[s]);
    (this._line || this._line !== 0 && n === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
function sC(e) {
  var t, n = e.length - 1, r, o = new Array(n), i = new Array(n), s = new Array(n);
  for (o[0] = 0, i[0] = 2, s[0] = e[0] + 2 * e[1], t = 1; t < n - 1; ++t) o[t] = 1, i[t] = 4, s[t] = 4 * e[t] + 2 * e[t + 1];
  for (o[n - 1] = 2, i[n - 1] = 7, s[n - 1] = 8 * e[n - 1] + e[n], t = 1; t < n; ++t) r = o[t] / i[t - 1], i[t] -= r, s[t] -= r * s[t - 1];
  for (o[n - 1] = s[n - 1] / i[n - 1], t = n - 2; t >= 0; --t) o[t] = (s[t] - o[t + 1]) / i[t];
  for (i[n - 1] = (e[n] + o[n - 1]) / 2, t = 0; t < n - 1; ++t) i[t] = 2 * e[t + 1] - o[t + 1];
  return [o, i];
}
function n3(e) {
  return new ZT(e);
}
function Bf(e, t) {
  this._context = e, this._t = t;
}
Bf.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN, this._point = 0;
  },
  lineEnd: function() {
    0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y), (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      default: {
        if (this._t <= 0)
          this._context.lineTo(this._x, t), this._context.lineTo(e, t);
        else {
          var n = this._x * (1 - this._t) + e * this._t;
          this._context.lineTo(n, this._y), this._context.lineTo(n, t);
        }
        break;
      }
    }
    this._x = e, this._y = t;
  }
};
function r3(e) {
  return new Bf(e, 0.5);
}
function o3(e) {
  return new Bf(e, 0);
}
function i3(e) {
  return new Bf(e, 1);
}
function ds(e, t) {
  if ((s = e.length) > 1)
    for (var n = 1, r, o, i = e[t[0]], s, a = i.length; n < s; ++n)
      for (o = i, i = e[t[n]], r = 0; r < a; ++r)
        i[r][1] += i[r][0] = isNaN(o[r][1]) ? o[r][0] : o[r][1];
}
function fs(e) {
  for (var t = e.length, n = new Array(t); --t >= 0; ) n[t] = t;
  return n;
}
function s3(e, t) {
  return e[t];
}
function a3(e) {
  const t = [];
  return t.key = e, t;
}
function Qc() {
  var e = Se([]), t = fs, n = ds, r = s3;
  function o(i) {
    var s = Array.from(e.apply(this, arguments), a3), a, l = s.length, u = -1, c;
    for (const d of i)
      for (a = 0, ++u; a < l; ++a)
        (s[a][u] = [0, +r(d, s[a].key, u, i)]).data = d;
    for (a = 0, c = zf(t(s)); a < l; ++a)
      s[c[a]].index = a;
    return n(s, c), s;
  }
  return o.keys = function(i) {
    return arguments.length ? (e = typeof i == "function" ? i : Se(Array.from(i)), o) : e;
  }, o.value = function(i) {
    return arguments.length ? (r = typeof i == "function" ? i : Se(+i), o) : r;
  }, o.order = function(i) {
    return arguments.length ? (t = i == null ? fs : typeof i == "function" ? i : Se(Array.from(i)), o) : t;
  }, o.offset = function(i) {
    return arguments.length ? (n = i ?? ds, o) : n;
  }, o;
}
function l3(e, t) {
  if ((r = e.length) > 0) {
    for (var n, r, o = 0, i = e[0].length, s; o < i; ++o) {
      for (s = n = 0; n < r; ++n) s += e[n][o][1] || 0;
      if (s) for (n = 0; n < r; ++n) e[n][o][1] /= s;
    }
    ds(e, t);
  }
}
function u3(e, t) {
  if ((o = e.length) > 0) {
    for (var n = 0, r = e[t[0]], o, i = r.length; n < i; ++n) {
      for (var s = 0, a = 0; s < o; ++s) a += e[s][n][1] || 0;
      r[n][1] += r[n][0] = -a / 2;
    }
    ds(e, t);
  }
}
function c3(e, t) {
  if (!(!((s = e.length) > 0) || !((i = (o = e[t[0]]).length) > 0))) {
    for (var n = 0, r = 1, o, i, s; r < i; ++r) {
      for (var a = 0, l = 0, u = 0; a < s; ++a) {
        for (var c = e[t[a]], d = c[r][1] || 0, p = c[r - 1][1] || 0, f = (d - p) / 2, h = 0; h < a; ++h) {
          var g = e[t[h]], x = g[r][1] || 0, y = g[r - 1][1] || 0;
          f += x - y;
        }
        l += d, u += f * d;
      }
      o[r - 1][1] += o[r - 1][0] = n, l && (n -= u / l);
    }
    o[r - 1][1] += o[r - 1][0] = n, ds(e, t);
  }
}
function JT(e) {
  var t = e.map(d3);
  return fs(e).sort(function(n, r) {
    return t[n] - t[r];
  });
}
function d3(e) {
  for (var t = -1, n = 0, r = e.length, o, i = -1 / 0; ++t < r; ) (o = +e[t][1]) > i && (i = o, n = t);
  return n;
}
function eE(e) {
  var t = e.map(tE);
  return fs(e).sort(function(n, r) {
    return t[n] - t[r];
  });
}
function tE(e) {
  for (var t = 0, n = -1, r = e.length, o; ++n < r; ) (o = +e[n][1]) && (t += o);
  return t;
}
function f3(e) {
  return eE(e).reverse();
}
function p3(e) {
  var t = e.length, n, r, o = e.map(tE), i = JT(e), s = 0, a = 0, l = [], u = [];
  for (n = 0; n < t; ++n)
    r = i[n], s < a ? (s += o[r], l.push(r)) : (a += o[r], u.push(r));
  return u.reverse().concat(l);
}
function h3(e) {
  return fs(e).reverse();
}
function g3() {
  const {
    instance: e
  } = Ct();
  return e.chartRootRef;
}
const m3 = {
  "image/png": "PNG",
  "image/jpeg": "JPEG",
  "image/webp": "WebP"
}, y3 = (e) => ({
  components: {
    MuiChartsLocalizationProvider: {
      defaultProps: {
        localeText: N({}, e)
      }
    }
  }
}), nE = {
  // Overlay
  loading: "Loading data…",
  noData: "No data to display",
  // Toolbar
  zoomIn: "Zoom in",
  zoomOut: "Zoom out",
  toolbarExport: "Export",
  // Toolbar Export Menu
  toolbarExportPrint: "Print",
  toolbarExportImage: (e) => `Export as ${m3[e] ?? e}`,
  // Charts renderer configuration
  chartTypeBar: "Bar",
  chartTypeColumn: "Column",
  chartTypeLine: "Line",
  chartTypeArea: "Area",
  chartTypePie: "Pie",
  chartPaletteLabel: "Color palette",
  chartPaletteNameRainbowSurge: "Rainbow Surge",
  chartPaletteNameBlueberryTwilight: "Blueberry Twilight",
  chartPaletteNameMangoFusion: "Mango Fusion",
  chartPaletteNameCheerfulFiesta: "Cheerful Fiesta",
  chartPaletteNameStrawberrySky: "Strawberry Sky",
  chartPaletteNameBlue: "Blue",
  chartPaletteNameGreen: "Green",
  chartPaletteNamePurple: "Purple",
  chartPaletteNameRed: "Red",
  chartPaletteNameOrange: "Orange",
  chartPaletteNameYellow: "Yellow",
  chartPaletteNameCyan: "Cyan",
  chartPaletteNamePink: "Pink",
  chartConfigurationSectionChart: "Chart",
  chartConfigurationSectionColumns: "Columns",
  chartConfigurationSectionBars: "Bars",
  chartConfigurationSectionAxes: "Axes",
  chartConfigurationGrid: "Grid",
  chartConfigurationBorderRadius: "Border radius",
  chartConfigurationCategoryGapRatio: "Category gap ratio",
  chartConfigurationBarGapRatio: "Series gap ratio",
  chartConfigurationStacked: "Stacked",
  chartConfigurationShowToolbar: "Show toolbar",
  chartConfigurationSkipAnimation: "Skip animation",
  chartConfigurationInnerRadius: "Inner radius",
  chartConfigurationOuterRadius: "Outer radius",
  chartConfigurationColors: "Colors",
  chartConfigurationHideLegend: "Hide legend",
  chartConfigurationShowMark: "Show mark",
  chartConfigurationHeight: "Height",
  chartConfigurationWidth: "Width",
  chartConfigurationSeriesGap: "Series gap",
  chartConfigurationTickPlacement: "Tick placement",
  chartConfigurationTickLabelPlacement: "Tick label placement",
  chartConfigurationCategoriesAxisLabel: "Categories axis label",
  chartConfigurationSeriesAxisLabel: "Series axis label",
  chartConfigurationXAxisPosition: "X-axis position",
  chartConfigurationYAxisPosition: "Y-axis position",
  chartConfigurationSeriesAxisReverse: "Reverse series axis",
  chartConfigurationTooltipPlacement: "Placement",
  chartConfigurationTooltipTrigger: "Trigger",
  chartConfigurationLegendPosition: "Position",
  chartConfigurationLegendDirection: "Direction",
  chartConfigurationBarLabels: "Bar labels",
  chartConfigurationColumnLabels: "Column labels",
  chartConfigurationInterpolation: "Interpolation",
  chartConfigurationSectionTooltip: "Tooltip",
  chartConfigurationSectionLegend: "Legend",
  chartConfigurationSectionLines: "Lines",
  chartConfigurationSectionAreas: "Areas",
  chartConfigurationSectionArcs: "Arcs",
  chartConfigurationPaddingAngle: "Padding angle",
  chartConfigurationCornerRadius: "Corner radius",
  chartConfigurationArcLabels: "Arc labels",
  chartConfigurationStartAngle: "Start angle",
  chartConfigurationEndAngle: "End angle",
  chartConfigurationPieTooltipTrigger: "Trigger",
  chartConfigurationPieLegendPosition: "Position",
  chartConfigurationPieLegendDirection: "Direction",
  // Common option labels
  chartConfigurationOptionNone: "None",
  chartConfigurationOptionValue: "Value",
  chartConfigurationOptionAuto: "Auto",
  chartConfigurationOptionTop: "Top",
  chartConfigurationOptionTopLeft: "Top Left",
  chartConfigurationOptionTopRight: "Top Right",
  chartConfigurationOptionBottom: "Bottom",
  chartConfigurationOptionBottomLeft: "Bottom Left",
  chartConfigurationOptionBottomRight: "Bottom Right",
  chartConfigurationOptionLeft: "Left",
  chartConfigurationOptionRight: "Right",
  chartConfigurationOptionAxis: "Axis",
  chartConfigurationOptionItem: "Item",
  chartConfigurationOptionHorizontal: "Horizontal",
  chartConfigurationOptionVertical: "Vertical",
  chartConfigurationOptionBoth: "Both",
  chartConfigurationOptionStart: "Start",
  chartConfigurationOptionMiddle: "Middle",
  chartConfigurationOptionEnd: "End",
  chartConfigurationOptionExtremities: "Extremities",
  chartConfigurationOptionTick: "Tick",
  chartConfigurationOptionMonotoneX: "Monotone X",
  chartConfigurationOptionMonotoneY: "Monotone Y",
  chartConfigurationOptionCatmullRom: "Catmull-Rom",
  chartConfigurationOptionLinear: "Linear",
  chartConfigurationOptionNatural: "Natural",
  chartConfigurationOptionStep: "Step",
  chartConfigurationOptionStepBefore: "Step Before",
  chartConfigurationOptionStepAfter: "Step After",
  chartConfigurationOptionBumpX: "Bump X",
  chartConfigurationOptionBumpY: "Bump Y",
  // OHLC/Candlestick
  open: "Open",
  high: "High",
  low: "Low",
  close: "Close",
  // Accessibility descriptions
  a11yNoValue: "no value",
  a11yConnector: "; ",
  barDescription: function({
    value: t,
    formattedValue: n,
    formattedCategoryValue: r,
    seriesLabel: o
  }) {
    return [r, o, t === null ? this.a11yNoValue : n].filter(Boolean).join(this.a11yConnector);
  },
  lineDescription: function({
    y: t,
    formattedXValue: n,
    formattedYValue: r,
    seriesLabel: o
  }) {
    return [n, o, t === null ? this.a11yNoValue : r].filter(Boolean).join(this.a11yConnector);
  },
  scatterDescription: function({
    formattedXValue: t,
    formattedYValue: n,
    seriesLabel: r
  }) {
    return [r, t, n].filter(Boolean).join(this.a11yConnector);
  },
  pieDescription: function({
    value: t,
    formattedValue: n,
    seriesLabel: r
  }) {
    return [r, t === null ? this.a11yNoValue : n].filter(Boolean).join(this.a11yConnector);
  },
  radarDescription: function({
    value: t,
    formattedValue: n,
    formattedCategoryValue: r,
    seriesLabel: o
  }) {
    return [r, o, t === null ? this.a11yNoValue : n].filter(Boolean).join(this.a11yConnector);
  },
  funnelDescription: function({
    value: t,
    formattedValue: n,
    seriesLabel: r
  }) {
    return [r, t === null ? this.a11yNoValue : n].filter(Boolean).join(this.a11yConnector);
  },
  heatmapDescription: function({
    value: t,
    formattedValue: n,
    formattedXValue: r,
    formattedYValue: o
  }) {
    return [r, o, t === null ? this.a11yNoValue : n].filter(Boolean).join(this.a11yConnector);
  },
  sankeyNodeDescription: function({
    formattedValue: t,
    nodeLabel: n
  }) {
    return [n, t].filter(Boolean).join(this.a11yConnector);
  },
  sankeyLinkDescription: function({
    formattedValue: t,
    sourceLabel: n,
    targetLabel: r
  }) {
    return [n && r ? `${n} to ${r}` : n ?? r, t].filter(Boolean).join(this.a11yConnector);
  },
  rangeBarDescription: function({
    value: t,
    formattedValue: n,
    formattedCategoryValue: r,
    seriesLabel: o
  }) {
    return [r, o, t === null ? this.a11yNoValue : n].filter(Boolean).join(this.a11yConnector);
  },
  ohlcDescription: function({
    open: t,
    high: n,
    low: r,
    close: o,
    formattedOpen: i,
    formattedHigh: s,
    formattedLow: a,
    formattedClose: l,
    formattedDate: u,
    seriesLabel: c
  }) {
    return [u, c, t !== null && n !== null && r !== null && o !== null ? `Open: ${i ?? t}, High: ${s ?? n}, Low: ${a ?? r}, Close: ${l ?? o}` : this.a11yNoValue].filter(Boolean).join(this.a11yConnector);
  }
}, v3 = nE;
y3(nE);
const x3 = ["localeText"], Sg = /* @__PURE__ */ k.createContext(null);
function C3(e) {
  const {
    localeText: t
  } = e, n = xe(e, x3), {
    localeText: r
  } = k.useContext(Sg) ?? {
    localeText: void 0
  }, o = nn({
    // We don't want to pass the `localeText` prop to the theme, that way it will always return the theme value,
    // We will then merge this theme value with our value manually
    props: n,
    name: "MuiChartsLocalizationProvider"
  }), {
    children: i,
    localeText: s
  } = o, a = k.useMemo(() => N({}, v3, s, r, t), [s, r, t]), l = k.useMemo(() => ({
    localeText: a
  }), [a]);
  return /* @__PURE__ */ E.jsx(Sg.Provider, {
    value: l,
    children: i
  });
}
const k0 = () => {
  const e = k.useContext(Sg);
  if (e === null)
    throw new Error(ke(12));
  return e;
};
function w3() {
  return fe().use(a0);
}
function rE(e) {
  return Ce("MuiChartsAxis", e);
}
const xu = ce("MuiChartsAxis", ["root", "line", "tickContainer", "tick", "tickLabel", "label", "directionX", "directionY", "top", "bottom", "left", "right"]), oE = (e) => {
  const {
    classes: t,
    position: n
  } = e;
  return ve({
    root: ["root", "directionX", n],
    line: ["line"],
    tickContainer: ["tickContainer"],
    tick: ["tick"],
    tickLabel: ["tickLabel"],
    label: ["label"]
  }, rE, t);
}, kg = 3, b3 = 4, iE = {
  disableLine: !1,
  disableTicks: !1,
  tickSize: 6,
  tickLabelMinGap: 4
};
function I0(e) {
  return typeof e == "number" && !Number.isFinite(e);
}
function S3(e, t) {
  return Math.abs(t.getFullYear() - e.getFullYear());
}
function aC(e, t) {
  return Math.abs(t.getFullYear() * 12 + t.getMonth() - 12 * e.getFullYear() - e.getMonth());
}
function qs(e, t) {
  return Math.abs(t.getTime() - e.getTime()) / (1e3 * 60 * 60 * 24);
}
function k3(e, t) {
  return Math.abs(t.getTime() - e.getTime()) / (1e3 * 60 * 60);
}
const I3 = {
  years: {
    getTickNumber: S3,
    isTick: (e, t) => t.getFullYear() !== e.getFullYear(),
    format: (e) => e.getFullYear().toString()
  },
  quarterly: {
    getTickNumber: (e, t) => Math.floor(aC(e, t) / 3),
    isTick: (e, t) => t.getMonth() !== e.getMonth() && t.getMonth() % 3 === 0,
    format: new Intl.DateTimeFormat("default", {
      month: "short"
    }).format
  },
  months: {
    getTickNumber: aC,
    isTick: (e, t) => t.getMonth() !== e.getMonth(),
    format: new Intl.DateTimeFormat("default", {
      month: "short"
    }).format
  },
  biweekly: {
    getTickNumber: (e, t) => qs(e, t) / 14,
    isTick: (e, t) => (t.getDay() < e.getDay() || qs(t, e) > 7) && Math.floor(t.getDate() / 7) % 2 === 1,
    format: new Intl.DateTimeFormat("default", {
      day: "numeric"
    }).format
  },
  weeks: {
    getTickNumber: (e, t) => qs(e, t) / 7,
    isTick: (e, t) => t.getDay() < e.getDay() || qs(t, e) >= 7,
    format: new Intl.DateTimeFormat("default", {
      day: "numeric"
    }).format
  },
  days: {
    getTickNumber: qs,
    isTick: (e, t) => t.getDate() !== e.getDate(),
    format: new Intl.DateTimeFormat("default", {
      day: "numeric"
    }).format
  },
  hours: {
    getTickNumber: k3,
    isTick: (e, t) => t.getHours() !== e.getHours(),
    format: new Intl.DateTimeFormat("default", {
      hour: "2-digit",
      minute: "2-digit"
    }).format
  }
}, Ig = {
  start: 0,
  extremities: 0,
  end: 1,
  middle: 0.5
};
function $i(e, t, n) {
  return e(t) - (e.step() - e.bandwidth()) / 2 + Ig[n] * e.step();
}
function T3(e, t, n) {
  const r = Math.abs(t[1] - t[0]), o = Math.ceil(e.length / (r / n));
  return Number.isNaN(o) || o <= 1 ? e : e.filter((i, s) => s % o === 0);
}
function E3(e, t, n, r, o) {
  if (n.length === 0)
    return [];
  const i = r.range()[0] > r.range()[1], s = e.findIndex((f) => o($i(r, f, i ? "start" : "end"))), a = e.findLastIndex((f) => o($i(r, f, i ? "end" : "start"))), l = e[0], u = e[e.length - 1];
  if (!(l instanceof Date) || !(u instanceof Date))
    return [];
  let c = 0;
  for (let f = 0; f < n.length; f += 1)
    if (n[f].getTickNumber(l, u) !== 0) {
      c = f;
      break;
    }
  let d = c;
  for (let f = c; f < n.length; f += 1) {
    if (f === n.length - 1) {
      d = f;
      break;
    }
    const h = n[f].getTickNumber(l, u), g = n[f + 1].getTickNumber(l, u);
    if (g > t || t / h < g / t) {
      d = f;
      break;
    }
  }
  const p = [];
  for (let f = Math.max(1, s); f <= a; f += 1)
    for (let h = c; h <= d; h += 1) {
      const g = e[f - 1], x = e[f];
      if (g instanceof Date && x instanceof Date && n[h].isTick(g, x)) {
        p.push({
          index: f,
          formatter: n[h].format
        });
        break;
      }
    }
  return p;
}
function P3(e) {
  const {
    scale: t,
    tickNumber: n,
    valueFormatter: r,
    tickInterval: o,
    tickPlacement: i,
    tickLabelPlacement: s,
    tickSpacing: a,
    isInside: l,
    ordinalTimeTicks: u
  } = e;
  if (u !== void 0 && Wc(t.domain()) && et(t)) {
    const g = t.domain();
    if (g.length === 0 || g.length === 1)
      return [];
    const x = "middle";
    return E3(g, n, u.map((m) => typeof m == "string" ? I3[m] : m), t, l).map(({
      index: m,
      formatter: v
    }) => {
      const C = g[m], S = v(C);
      return {
        value: C,
        formattedValue: S,
        offset: $i(t, C, x),
        labelOffset: 0
      };
    });
  }
  const c = i ?? "extremities";
  if (et(t)) {
    const g = t.domain(), x = s ?? "middle";
    let y = g;
    if (typeof o == "object" && o != null ? y = o : (typeof o == "function" && (y = y.filter(o)), a !== void 0 && a > 0 && (y = T3(y, t.range(), a))), y.length === 0)
      return [];
    if (t.bandwidth() > 0) {
      const m = t.range()[0] > t.range()[1], v = y.findIndex((S) => l($i(t, S, m ? "start" : "end"))), C = y.findLastIndex((S) => l($i(t, S, m ? "end" : "start")));
      return [...y.slice(v, C + 1).map((S) => {
        const b = `${S}`;
        return {
          value: S,
          formattedValue: (r == null ? void 0 : r(S, {
            location: "tick",
            scale: t,
            tickNumber: n,
            defaultTickLabel: b
          })) ?? b,
          offset: $i(t, S, c),
          labelOffset: x === "tick" ? 0 : t.step() * (Ig[x] - Ig[c])
        };
      }), ...c === "extremities" && C === g.length - 1 && l(t.range()[1]) ? [{
        formattedValue: void 0,
        offset: t.range()[1],
        labelOffset: 0
      }] : []];
    }
    return y.map((m) => {
      const v = `${m}`;
      return {
        value: m,
        formattedValue: (r == null ? void 0 : r(m, {
          location: "tick",
          scale: t,
          tickNumber: n,
          defaultTickLabel: v
        })) ?? v,
        offset: t(m),
        labelOffset: 0
      };
    });
  }
  if (t.domain().some(I0))
    return [];
  const p = s, f = typeof o == "object" ? o : M3(t, n), h = [];
  for (let g = 0; g < f.length; g += 1) {
    const x = f[g], y = t(x);
    if (l(y)) {
      const m = t.tickFormat(n)(x);
      h.push({
        value: x,
        formattedValue: (r == null ? void 0 : r(x, {
          location: "tick",
          scale: t,
          tickNumber: n,
          defaultTickLabel: m
        })) ?? m,
        offset: y,
        // Allowing the label to be placed in the middle of a continuous scale is weird.
        // But it is useful in some cases, like funnel categories with a linear scale.
        labelOffset: p === "middle" ? t(f[g - 1] ?? 0) - (y + t(f[g - 1] ?? 0)) / 2 : 0
      });
    }
  }
  return h;
}
function M3(e, t) {
  const n = e.domain();
  return n[0] === n[1] ? [n[0]] : e.ticks(t);
}
const A3 = () => !0, R3 = (e) => (t) => Math.abs(e.range()[0] - t) < Math.PI * 2 - yT;
function _3(e, t, n) {
  switch (t) {
    case "rotation":
      return R3(e);
    case "radius":
      return (r) => r >= 1;
    case "x":
      return n.isXInside;
    case "y":
      return n.isYInside;
    default:
      return A3;
  }
}
function jf(e) {
  const {
    scale: t,
    tickNumber: n,
    valueFormatter: r,
    tickInterval: o,
    tickPlacement: i = "extremities",
    tickLabelPlacement: s,
    tickSpacing: a,
    direction: l,
    ordinalTimeTicks: u
  } = e, {
    instance: c
  } = Ct();
  return k.useMemo(() => P3({
    scale: t,
    tickNumber: n,
    tickPlacement: i,
    tickInterval: o,
    tickLabelPlacement: s,
    tickSpacing: a,
    valueFormatter: r,
    isInside: _3(t, l, c),
    ordinalTimeTicks: u
  }), [t, n, i, o, s, a, r, l, c, u]);
}
const sE = ce("MuiAppearingMask", ["animate"]), $3 = K("rect", {
  slot: "internal",
  shouldForwardProp: void 0
})({
  animationName: "animate-width",
  animationTimingFunction: Nl,
  animationDuration: "0s",
  [`&.${sE.animate}`]: {
    animationDuration: `${_s}ms`
  },
  "@keyframes animate-width": {
    from: {
      width: 0
    }
  }
});
function aE(e) {
  const t = Nn(), n = Dl(), r = RT(`${n}-${e.seriesId}`);
  return /* @__PURE__ */ E.jsxs(k.Fragment, {
    children: [/* @__PURE__ */ E.jsx("clipPath", {
      id: r,
      children: /* @__PURE__ */ E.jsx($3, {
        className: e.skipAnimation ? "" : sE.animate,
        x: 0,
        y: 0,
        width: t.left + t.width + t.right,
        height: t.top + t.height + t.bottom
      })
    }), /* @__PURE__ */ E.jsx("g", {
      clipPath: `url(#${r})`,
      children: e.children
    })]
  });
}
const O3 = ["skipAnimation", "ownerState"];
function L3(e) {
  const {
    skipAnimation: t,
    ownerState: n
  } = e, r = xe(e, O3), o = vz(e);
  return /* @__PURE__ */ E.jsx(aE, {
    skipAnimation: t,
    seriesId: `${n.seriesId}-area-clip`,
    children: /* @__PURE__ */ E.jsx("path", N({
      fill: n.gradientId ? `url(#${n.gradientId})` : n.color,
      filter: (
        // eslint-disable-next-line no-nested-ternary
        n.isHighlighted ? "brightness(140%)" : n.gradientId ? void 0 : "brightness(120%)"
      ),
      opacity: n.isFaded ? 0.3 : 1,
      stroke: "none",
      "data-series": n.seriesId,
      "data-highlighted": n.isHighlighted || void 0,
      "data-faded": n.isFaded || void 0
    }, r, o))
  });
}
function N3(e) {
  return Ce("MuiLineChart", e);
}
const Uf = ce("MuiLineChart", ["area", "line", "mark", "markAnimate", "highlight", "areaPlot", "linePlot", "markPlot"]), So = (e) => {
  const {
    skipAnimation: t,
    classes: n
  } = e ?? {};
  return ve({
    area: ["area"],
    line: ["line"],
    mark: ["mark", !t && "markAnimate"],
    highlight: ["highlight"],
    areaPlot: ["areaPlot"],
    linePlot: ["linePlot"],
    markPlot: ["markPlot"]
  }, N3, n);
}, D3 = ["seriesId", "classes", "color", "gradientId", "slots", "slotProps", "onClick"];
function F3(e) {
  const {
    seriesId: t,
    classes: n,
    color: r,
    gradientId: o,
    slots: i,
    slotProps: s,
    onClick: a
  } = e, l = xe(e, D3), c = fe().use(El, "enablePositionBasedPointerInteraction"), d = k.useMemo(() => ({
    type: "line",
    seriesId: t
  }), [t]), p = Rf(d), f = IT(d), h = f === "highlighted", g = f === "faded", x = {
    seriesId: t,
    classes: n,
    color: r,
    gradientId: o,
    isFaded: g,
    isHighlighted: h
  }, y = So(x), m = (i == null ? void 0 : i.area) ?? L3, v = dr({
    elementType: m,
    externalSlotProps: s == null ? void 0 : s.area,
    additionalProps: N({}, c ? {} : p, {
      onClick: a,
      cursor: a ? "pointer" : "unset",
      "data-highlighted": h || void 0,
      "data-faded": g || void 0,
      "data-series-id": t,
      "data-series": t
    }),
    className: y.area,
    ownerState: x
  });
  return /* @__PURE__ */ E.jsx(m, N({}, l, v));
}
function T0(e) {
  const n = fe().use(VO);
  return e || n;
}
function E0() {
  return fe().use(Tf);
}
function P0(e) {
  switch (e) {
    case "catmullRom":
      return e3.alpha(0.5);
    case "linear":
      return C0;
    case "monotoneX":
      return iC;
    case "monotoneY":
      return t3;
    case "natural":
      return n3;
    case "step":
      return r3;
    case "stepBefore":
      return o3;
    case "stepAfter":
      return i3;
    case "bumpY":
      return jz;
    case "bumpX":
      return Bz;
    default:
      return iC;
  }
}
function z3(e, t) {
  const n = zl(), r = $t().xAxisIds[0], o = Ot().yAxisIds[0], i = v0();
  return k.useMemo(() => {
    if (n === void 0)
      return [];
    const {
      series: a,
      stackingGroups: l
    } = n, u = [];
    for (const c of l) {
      const d = c.ids;
      for (let p = d.length - 1; p >= 0; p -= 1) {
        const f = d[p], {
          xAxisId: h = r,
          yAxisId: g = o,
          visibleStackedData: x,
          stackedData: y,
          data: m,
          connectNulls: v,
          baseline: C,
          curve: S,
          strictStepCurve: b,
          area: I
        } = a[f];
        if (!I || !(h in e) || !(g in t))
          continue;
        const T = e[h].scale, L = fr(T), O = t[g].scale, _ = e[h].data, w = t[g].colorScale && i(g) || e[h].colorScale && i(h) || void 0, A = (S == null ? void 0 : S.includes("step")) && !b && et(T), P = (_ == null ? void 0 : _.flatMap((R, F) => {
          const z = m[F] == null;
          if (A) {
            const H = [{
              x: R,
              y: x[F],
              nullData: z,
              isExtension: !1
            }];
            return !z && (F === 0 || m[F - 1] == null) && H.unshift({
              x: (T(R) ?? 0) - (T.step() - T.bandwidth()) / 2,
              y: x[F],
              nullData: z,
              isExtension: !0
            }), !z && (F === m.length - 1 || m[F + 1] == null) && H.push({
              x: (T(R) ?? 0) + (T.step() + T.bandwidth()) / 2,
              y: x[F],
              nullData: z,
              isExtension: !0
            }), H;
          }
          return {
            x: R,
            y: x[F],
            nullData: z
          };
        })) ?? [], M = v ? P.filter((R) => !R.nullData) : P, D = Nz().x((R) => R.isExtension ? R.x : L(R.x)).defined((R) => v || !R.nullData || !!R.isExtension).y0((R) => {
          if (typeof C == "number")
            return O(C);
          if (C === "max")
            return O.range()[1];
          if (C === "min")
            return O.range()[0];
          const F = R.y && O(R.y[0]);
          return Number.isNaN(F) ? O.range()[0] : F;
        }).y1((R) => R.y && O(R.y[1])).curve(P0(S))(M) || "";
        u.push({
          area: a[f].area,
          color: a[f].color,
          gradientId: w,
          d: D,
          seriesId: f
        });
      }
    }
    return u;
  }, [n, r, o, e, t, i]);
}
const B3 = ["slots", "slotProps", "onItemClick", "skipAnimation", "className"], j3 = K("g", {
  name: "MuiAreaPlot",
  slot: "Root"
})({
  [`& .${Uf.area}`]: {
    transitionProperty: "opacity, fill",
    transitionDuration: `${_s}ms`,
    transitionTimingFunction: Nl
  }
}), U3 = () => {
  const {
    xAxis: e
  } = $t(), {
    yAxis: t
  } = Ot();
  return z3(e, t);
};
function H3(e) {
  const {
    slots: t,
    slotProps: n,
    onItemClick: r,
    skipAnimation: o,
    className: i
  } = e, s = xe(e, B3), a = E0(), l = T0(a || o), u = U3(), c = So();
  return /* @__PURE__ */ E.jsx(j3, N({
    className: oe(c.areaPlot, i)
  }, s, {
    children: u.map(({
      d,
      seriesId: p,
      color: f,
      area: h,
      gradientId: g
    }) => !!h && /* @__PURE__ */ E.jsx(F3, {
      seriesId: p,
      d,
      color: f,
      gradientId: g,
      slots: t,
      slotProps: n,
      onClick: r && ((x) => r(x, {
        type: "line",
        seriesId: p
      })),
      skipAnimation: l
    }, p))
  }));
}
const W3 = ["skipAnimation", "ownerState"], G3 = /* @__PURE__ */ k.forwardRef(function(t, n) {
  const {
    skipAnimation: r,
    ownerState: o
  } = t, i = xe(t, W3), s = _z({
    d: t.d,
    skipAnimation: r,
    ref: n
  }), a = o.isFaded ? 0.3 : 1;
  return /* @__PURE__ */ E.jsx(aE, {
    skipAnimation: r,
    seriesId: `${o.seriesId}-line-clip`,
    children: /* @__PURE__ */ E.jsx("path", N({
      stroke: o.gradientId ? `url(#${o.gradientId})` : o.color,
      strokeWidth: 2,
      strokeLinejoin: "round",
      fill: "none",
      filter: o.isHighlighted ? "brightness(120%)" : void 0,
      opacity: o.hidden ? 0 : a,
      "data-series": o.seriesId,
      "data-highlighted": o.isHighlighted || void 0,
      "data-faded": o.isFaded || void 0
    }, i, s))
  });
}), V3 = ["seriesId", "classes", "color", "gradientId", "slots", "slotProps", "onClick", "hidden"];
function Y3(e) {
  const {
    seriesId: t,
    classes: n,
    color: r,
    gradientId: o,
    slots: i,
    slotProps: s,
    onClick: a,
    hidden: l
  } = e, u = xe(e, V3), d = fe().use(El, "enablePositionBasedPointerInteraction"), p = k.useMemo(() => ({
    type: "line",
    seriesId: t
  }), [t]), f = Rf(p), h = IT(p), g = h === "highlighted", x = h === "faded", y = {
    seriesId: t,
    classes: n,
    color: r,
    gradientId: o,
    isFaded: x,
    isHighlighted: g,
    hidden: l
  }, m = So(), v = (i == null ? void 0 : i.line) ?? G3, C = dr({
    elementType: v,
    externalSlotProps: s == null ? void 0 : s.line,
    additionalProps: N({}, d ? {} : f, {
      onClick: a,
      cursor: a ? "pointer" : "unset",
      "data-highlighted": g || void 0,
      "data-faded": x || void 0,
      "data-series-id": t,
      "data-series": t
    }),
    className: m.line,
    ownerState: y
  });
  return /* @__PURE__ */ E.jsx(v, N({}, u, C));
}
function K3(e, t) {
  const n = zl(), r = $t().xAxisIds[0], o = Ot().yAxisIds[0], i = v0();
  return k.useMemo(() => {
    if (n === void 0)
      return [];
    const {
      series: a,
      stackingGroups: l
    } = n, u = [];
    for (const c of l) {
      const d = c.ids;
      for (const p of d) {
        const {
          xAxisId: f = r,
          yAxisId: h = o,
          stackedData: g,
          visibleStackedData: x,
          data: y,
          connectNulls: m,
          curve: v,
          strictStepCurve: C
        } = a[p];
        if (!(f in e) || !(h in t))
          continue;
        const S = e[f].scale, b = fr(S), I = t[h].scale, T = e[f].data, L = t[h].colorScale && i(h) || e[f].colorScale && i(f) || void 0, O = (v == null ? void 0 : v.includes("step")) && !C && et(S), _ = (T == null ? void 0 : T.flatMap(($, D) => {
          const R = y[D] == null;
          if (O) {
            const F = [{
              x: $,
              y: x[D],
              nullData: R,
              isExtension: !1
            }];
            return !R && (D === 0 || y[D - 1] == null) && F.unshift({
              x: (S($) ?? 0) - (S.step() - S.bandwidth()) / 2,
              y: x[D],
              nullData: R,
              isExtension: !0
            }), !R && (D === y.length - 1 || y[D + 1] == null) && F.push({
              x: (S($) ?? 0) + (S.step() + S.bandwidth()) / 2,
              y: x[D],
              nullData: R,
              isExtension: !0
            }), F;
          }
          return {
            x: $,
            y: x[D],
            nullData: R
          };
        })) ?? [], w = m ? _.filter(($) => !$.nullData) : _, A = a[p].hidden, M = WT().x(($) => $.isExtension ? $.x : b($.x)).defined(($) => m || !$.nullData || !!$.isExtension).y(($) => I(A ? $.y[0] : $.y[1])).curve(P0(v))(w) || "";
        u.push({
          color: a[p].color,
          gradientId: L,
          d: M,
          seriesId: p,
          hidden: a[p].hidden
        });
      }
    }
    return u;
  }, [n, r, o, e, t, i]);
}
const X3 = ["slots", "slotProps", "skipAnimation", "onItemClick", "className"], q3 = K("g", {
  name: "MuiLinePlot",
  slot: "Root"
})({
  [`& .${Uf.line}`]: {
    transitionProperty: "opacity, fill",
    transitionDuration: `${_s}ms`,
    transitionTimingFunction: Nl
  }
}), Q3 = () => {
  const {
    xAxis: e
  } = $t(), {
    yAxis: t
  } = Ot();
  return K3(e, t);
};
function Z3(e) {
  const {
    slots: t,
    slotProps: n,
    skipAnimation: r,
    onItemClick: o,
    className: i
  } = e, s = xe(e, X3), a = E0(), l = T0(a || r), u = Q3(), c = So();
  return /* @__PURE__ */ E.jsx(q3, N({
    className: oe(c.linePlot, i)
  }, s, {
    children: u.map(({
      d,
      seriesId: p,
      color: f,
      gradientId: h,
      hidden: g
    }) => /* @__PURE__ */ E.jsx(Y3, {
      seriesId: p,
      d,
      color: f,
      gradientId: h,
      hidden: g,
      skipAnimation: l,
      slots: t,
      slotProps: n,
      onClick: o && ((x) => o(x, {
        type: "line",
        seriesId: p
      }))
    }, p))
  }));
}
const J3 = ["x", "y", "seriesId", "classes", "color", "dataIndex", "onClick", "skipAnimation", "isFaded", "isHighlighted", "shape", "hidden"], eB = K("circle", {
  slot: "internal",
  shouldForwardProp: void 0
})({
  [`&.${Uf.markAnimate}`]: {
    transitionDuration: `${_s}ms`,
    transitionProperty: "cx, cy, opacity",
    transitionTimingFunction: Nl
  }
});
function tB(e) {
  const {
    x: t,
    y: n,
    seriesId: r,
    classes: o,
    color: i,
    dataIndex: s,
    onClick: a,
    skipAnimation: l,
    isFaded: u = !1,
    isHighlighted: c = !1,
    hidden: d
  } = e, p = xe(e, J3), h = fe().use(El, "enablePositionBasedPointerInteraction"), g = Rf({
    type: "line",
    seriesId: r,
    dataIndex: s
  }), x = tn(), y = So({
    skipAnimation: l,
    classes: o
  });
  return /* @__PURE__ */ E.jsx(eB, N({}, p, h ? {} : g, {
    cx: t,
    cy: n,
    r: 5,
    fill: (x.vars || x).palette.background.paper,
    stroke: i,
    strokeWidth: 2,
    className: y.mark,
    onClick: a,
    cursor: a ? "pointer" : "unset",
    pointerEvents: d ? "none" : void 0,
    "data-highlighted": c || void 0,
    "data-faded": u || void 0,
    "data-series-id": r,
    "data-series": r,
    "data-index": s,
    opacity: d ? 0 : 1
  }));
}
function M0(e) {
  switch (e) {
    case "circle":
      return 0;
    case "cross":
      return 1;
    case "diamond":
      return 2;
    case "square":
      return 3;
    case "star":
      return 4;
    case "triangle":
      return 5;
    case "wye":
      return 6;
    default:
      return 0;
  }
}
const nB = ["x", "y", "seriesId", "classes", "color", "shape", "dataIndex", "onClick", "skipAnimation", "isFaded", "isHighlighted", "hidden", "style"], rB = K("path", {
  name: "MuiMarkElement",
  slot: "Root"
})(({
  theme: e
}) => ({
  fill: (e.vars || e).palette.background.paper,
  [`&.${Uf.markAnimate}`]: {
    transitionDuration: `${_s}ms`,
    transitionProperty: "transform, transform-origin, opacity",
    transitionTimingFunction: Nl
  }
}));
function oB(e) {
  const {
    x: t,
    y: n,
    seriesId: r,
    classes: o,
    color: i,
    shape: s,
    dataIndex: a,
    onClick: l,
    skipAnimation: u,
    isFaded: c = !1,
    isHighlighted: d = !1,
    hidden: p,
    style: f
  } = e, h = xe(e, nB), x = fe().use(El, "enablePositionBasedPointerInteraction"), y = Rf({
    type: "line",
    seriesId: r,
    dataIndex: a
  }), m = {
    seriesId: r,
    classes: o,
    isHighlighted: d,
    isFaded: c,
    skipAnimation: u
  }, v = So({
    skipAnimation: u,
    classes: o
  });
  return /* @__PURE__ */ E.jsx(rB, N({}, h, x ? {} : y, {
    style: N({}, f, {
      transform: `translate(${t}px, ${n}px)`,
      transformOrigin: `${t}px ${n}px`
    }),
    ownerState: m,
    className: v.mark,
    d: b0(w0[M0(s)])(),
    onClick: l,
    cursor: l ? "pointer" : "unset",
    pointerEvents: p ? "none" : void 0,
    "data-highlighted": d || void 0,
    "data-faded": c || void 0,
    "data-series-id": r,
    "data-series": r,
    "data-index": a,
    opacity: p ? 0 : 1,
    strokeWidth: 2,
    stroke: i
  }));
}
function lE(e) {
  return e.colorGetter ? e.colorGetter : () => e.color;
}
function uE(e) {
  const {
    series: t,
    valueColorScale: n,
    categoryColorScale: r,
    categoryValues: o
  } = e, i = lE(t);
  return n ? (s) => {
    if (s === void 0)
      return t.color;
    const a = t.data[s], l = n(a);
    return typeof l != "string" ? i({
      value: a,
      dataIndex: s
    }) : l;
  } : r && o ? (s) => {
    if (s === void 0)
      return t.color;
    const a = o[s], l = {
      value: t.data[s],
      dataIndex: s
    }, u = r(a);
    return typeof u != "string" ? i(l) : u;
  } : (s) => {
    if (s === void 0)
      return t.color;
    const a = t.data[s];
    return i({
      value: a,
      dataIndex: s
    });
  };
}
const A0 = (e, t, n) => uE({
  series: e,
  valueColorScale: n == null ? void 0 : n.colorScale,
  categoryColorScale: t == null ? void 0 : t.colorScale,
  categoryValues: t == null ? void 0 : t.data
});
function iB(e, t) {
  const n = zl(), r = $t().xAxisIds[0], o = Ot().yAxisIds[0], i = Dl(), {
    instance: s
  } = Ct();
  return k.useMemo(() => {
    if (n === void 0)
      return [];
    const {
      series: l,
      stackingGroups: u
    } = n, c = [];
    for (const d of u) {
      const p = d.ids;
      for (const f of p) {
        const {
          xAxisId: h = r,
          yAxisId: g = o,
          visibleStackedData: x,
          data: y,
          showMark: m,
          shape: v = "circle",
          hidden: C
        } = l[f];
        if (!m || m === "start" || m === "end" || !(h in e) || !(g in t))
          continue;
        const S = fr(e[h].scale), b = t[g].scale, I = e[h].data, T = RT(`${i}-${f}-line-clip`), L = A0(l[f], e[h], t[g]), O = [];
        if (I)
          for (let _ = 0; _ < I.length; _ += 1) {
            const w = I[_], A = y[_] == null ? null : x[_][1];
            if (A === null)
              continue;
            const P = b(C ? x[_][0] : A), M = S(w);
            s.isPointInside(M, P) && (m !== !0 && !m({
              x: M,
              y: P,
              index: _,
              position: w,
              value: A
            }) || O.push({
              x: M,
              y: P,
              index: _,
              color: L(_)
            }));
          }
        c.push({
          seriesId: f,
          clipId: T,
          shape: v,
          xAxisId: h,
          marks: O,
          hidden: C
        });
      }
    }
    return c;
  }, [n, r, o, i, e, t, s]);
}
const sB = ["slots", "slotProps", "skipAnimation", "onItemClick", "className"], aB = K("g", {
  name: "MuiMarkPlot",
  slot: "Root"
})({});
function lB(e) {
  const {
    slots: t,
    slotProps: n,
    skipAnimation: r,
    onItemClick: o,
    className: i
  } = e, s = xe(e, sB), a = E0(), l = T0(a || r), {
    xAxis: u
  } = $t(), {
    yAxis: c
  } = Ot(), {
    store: d
  } = Ct(), p = Pz(), f = d.use(dT), h = k.useMemo(() => {
    const y = {};
    for (const {
      dataIndex: m,
      axisId: v
    } of f)
      y[v] === void 0 ? y[v] = /* @__PURE__ */ new Set([m]) : y[v].add(m);
    return y;
  }, [f]), g = iB(u, c), x = So();
  return /* @__PURE__ */ E.jsx(aB, N({
    className: oe(x.markPlot, i)
  }, s, {
    children: g.map(({
      seriesId: y,
      clipId: m,
      shape: v,
      xAxisId: C,
      marks: S,
      hidden: b
    }) => {
      const I = (t == null ? void 0 : t.mark) ?? (v === "circle" ? tB : oB), L = p({
        type: "line",
        seriesId: y
      }), O = L === "highlighted", _ = L === "faded";
      return /* @__PURE__ */ E.jsx("g", {
        clipPath: `url(#${m})`,
        "data-series": y,
        children: S.map(({
          x: w,
          y: A,
          index: P,
          color: M
        }) => {
          var $;
          return /* @__PURE__ */ E.jsx(I, N({
            seriesId: y,
            dataIndex: P,
            shape: v,
            color: M,
            x: w,
            y: A,
            skipAnimation: l,
            onClick: o && ((D) => o(D, {
              type: "line",
              seriesId: y,
              dataIndex: P
            })),
            isHighlighted: (($ = h[C]) == null ? void 0 : $.has(P)) || O,
            isFaded: _,
            hidden: b
          }, n == null ? void 0 : n.mark), `${y}-${P}`);
        })
      }, y);
    })
  }));
}
const uB = () => () => {
}, cB = () => !0, dB = () => !1;
function Hf() {
  return k.useSyncExternalStore(uB, cB, dB);
}
function fB(e = !1) {
  const [t, n] = k.useState(!1);
  return me(() => {
    e || n(!0);
  }, [e]), k.useEffect(() => {
    e && n(!0);
  }, [e]), t;
}
function pB(e) {
  return e * (Math.PI / 180);
}
const cE = typeof window < "u" && "Intl" in window && "Segmenter" in Intl ? (
  // eslint-disable-next-line compat/compat
  new Intl.Segmenter(void 0, {
    granularity: "grapheme"
  })
) : null;
function hB(e, t) {
  return e.slice(0, t);
}
function gB(e, t) {
  const n = cE.segment(e);
  let r = "", o = 0;
  for (const i of n)
    if (r += i.segment, o += 1, o >= t)
      break;
  return r;
}
const mB = cE ? gB : hB, lC = "…";
function dE(e, t) {
  const {
    width: n,
    height: r,
    measureText: o
  } = t, i = pB(t.angle), s = o(e), a = Math.abs(s.width * Math.cos(i)) + Math.abs(s.height * Math.sin(i)), l = Math.abs(s.width * Math.sin(i)) + Math.abs(s.height * Math.cos(i));
  return a <= n && l <= r;
}
function fE(e, t) {
  if (t(e))
    return e;
  let n = e, r = 1, o = 1 / 2;
  const i = $k(e);
  let s = i, a = i, l = null;
  do {
    if (a = s, s = Math.floor(i * o), s === 0)
      break;
    n = mB(e, s).trim();
    const u = t(n + lC);
    r += 1, u ? (l = n, o += 1 / 2 ** r) : o -= 1 / 2 ** r;
  } while (Math.abs(s - a) !== 1);
  return l ? l + lC : "";
}
function yB(e, t, n, r, o) {
  const i = /* @__PURE__ */ new Map(), s = Lf((o == null ? void 0 : o.angle) ?? 0);
  let a = 1, l = 1;
  (o == null ? void 0 : o.textAnchor) === "start" ? (a = 1 / 0, l = 1) : (o == null ? void 0 : o.textAnchor) === "end" ? (a = 1, l = 1 / 0) : (a = 2, l = 2), s > 90 && s < 270 && ([a, l] = [l, a]), r && ([a, l] = [l, a]);
  for (const u of e)
    if (u.formattedValue) {
      const c = Math.min((u.offset + u.labelOffset) * a, (t.left + t.width + t.right - u.offset - u.labelOffset) * l), d = (p) => dE(p, {
        width: c,
        height: n,
        angle: s,
        measureText: (f) => wl(f, o)
      });
      i.set(u, fE(u.formattedValue.toString(), d));
    }
  return i;
}
const uC = 5;
function vB(e, t, n = 0) {
  const r = Math.min(Math.abs(n) % 180, Math.abs(Math.abs(n) % 180 - 180) % 180);
  if (r < uC)
    return e;
  if (r > 90 - uC)
    return t;
  const o = Zr(r), i = Math.atan2(t, e);
  return o < i ? e / Math.cos(o) : t / Math.sin(o);
}
function xB(e, {
  tickLabelStyle: t,
  tickLabelInterval: n,
  tickLabelMinGap: r,
  reverse: o,
  isMounted: i,
  isXInside: s
}) {
  if (typeof n == "function")
    return new Set(e.filter((d, p) => n(d.value, p)));
  let a = 0;
  const l = o ? -1 : 1, u = e.filter((d) => {
    const {
      offset: p,
      labelOffset: f,
      formattedValue: h
    } = d;
    if (h === "")
      return !1;
    const g = p + f;
    return s(g);
  }), c = wB(u, t);
  return new Set(u.filter((d, p) => {
    const {
      offset: f,
      labelOffset: h
    } = d, g = f + h;
    if (p > 0 && l * g < l * (a + r))
      return !1;
    const {
      width: x,
      height: y
    } = i ? CB(c, d) : {
      width: 0,
      height: 0
    }, m = vB(x, y, t == null ? void 0 : t.angle), v = g - l * m / 2;
    return p > 0 && l * v < l * (a + r) ? !1 : (a = g + l * m / 2, !0);
  }));
}
function CB(e, t) {
  if (t.formattedValue === void 0)
    return {
      width: 0,
      height: 0
    };
  let n = 0, r = 0;
  for (const o of t.formattedValue.split(`
`)) {
    const i = e.get(o);
    i && (n = Math.max(n, i.width), r += i.height);
  }
  return {
    width: n,
    height: r
  };
}
function wB(e, t) {
  const n = /* @__PURE__ */ new Set();
  for (const r of e)
    r.formattedValue && r.formattedValue.split(`
`).forEach((o) => n.add(o));
  return Mk(n, t);
}
function bB({
  style: e,
  needsComputation: t,
  text: n
}) {
  return n.split(`
`).map((r) => N({
    text: r
  }, t ? wl(r, e) : {
    width: 0,
    height: 0
  }));
}
const SB = ["x", "y", "style", "text", "ownerState"], kB = ["angle", "textAnchor", "dominantBaseline"];
function Wf(e) {
  const {
    x: t,
    y: n,
    style: r,
    text: o
  } = e, i = xe(e, SB), s = r ?? {}, {
    angle: a,
    textAnchor: l,
    dominantBaseline: u
  } = s, c = xe(s, kB), d = Hf(), p = k.useMemo(() => bB({
    style: c,
    needsComputation: d && o.includes(`
`),
    text: o
  }), [c, o, d]);
  let f;
  switch (u) {
    case "hanging":
    case "text-before-edge":
      f = 0;
      break;
    case "central":
      f = (p.length - 1) / 2 * -p[0].height;
      break;
    default:
      f = (p.length - 1) * -p[0].height;
      break;
  }
  return /* @__PURE__ */ E.jsx("text", N({}, i, {
    transform: a ? `rotate(${a}, ${t}, ${n})` : void 0,
    x: t,
    y: n,
    textAnchor: l,
    dominantBaseline: u,
    style: c,
    children: p.map((h, g) => /* @__PURE__ */ E.jsx("tspan", {
      x: t,
      dy: `${g === 0 ? f : p[0].height}px`,
      dominantBaseline: u,
      children: h.text
    }, g))
  }));
}
function pE(e) {
  const t = Lf(e);
  return t <= 30 || t >= 330 || t <= 210 && t >= 150 ? "middle" : t <= 180 ? "end" : "start";
}
function hE(e) {
  const t = Lf(e);
  return t <= 30 || t >= 330 ? "hanging" : t <= 210 && t >= 150 ? "auto" : "central";
}
function gE(e) {
  switch (e) {
    case "start":
      return "end";
    case "end":
      return "start";
    default:
      return e;
  }
}
const IB = ["scale", "tickNumber", "reverse"];
function mE(e) {
  const {
    xAxis: t,
    xAxisIds: n
  } = $t(), r = t[e.axisId ?? n[0]], {
    scale: o,
    tickNumber: i,
    reverse: s
  } = r, a = xe(r, IB), l = nn({
    props: N({}, a, e),
    name: "MuiChartsXAxis"
  }), u = N({}, iE, l), {
    position: c,
    tickLabelStyle: d,
    slots: p,
    slotProps: f
  } = u, h = tn(), g = ks(), x = oE(u), y = c === "bottom" ? 1 : -1, m = (p == null ? void 0 : p.axisTick) ?? "line", v = (p == null ? void 0 : p.axisTickLabel) ?? Wf, C = pE((c === "bottom" ? 0 : 180) - ((d == null ? void 0 : d.angle) ?? 0)), S = hE((c === "bottom" ? 0 : 180) - ((d == null ? void 0 : d.angle) ?? 0)), b = dr({
    elementType: v,
    // @ts-expect-error `useSlotProps` applies `WithCommonProps` with adds a `style: React.CSSProperties` prop automatically.
    externalSlotProps: f == null ? void 0 : f.axisTickLabel,
    // @ts-expect-error `useSlotProps` applies `WithCommonProps` with adds a `style: React.CSSProperties` prop automatically.
    additionalProps: {
      style: N({}, h.typography.caption, {
        fontSize: 12,
        lineHeight: 1.25,
        textAnchor: g ? gE(C) : C,
        dominantBaseline: S
      }, d)
    },
    className: x.tickLabel,
    ownerState: {}
  });
  return {
    xScale: o,
    defaultizedProps: u,
    tickNumber: i,
    positionSign: y,
    classes: x,
    Tick: m,
    TickLabel: v,
    axisTickLabelProps: b,
    reverse: s
  };
}
function TB(e) {
  const {
    axisLabelHeight: t,
    ordinalTimeTicks: n
  } = e, {
    xScale: r,
    defaultizedProps: o,
    tickNumber: i,
    positionSign: s,
    classes: a,
    Tick: l,
    TickLabel: u,
    axisTickLabelProps: c,
    reverse: d
  } = mE(e), p = ks(), f = fB(), {
    disableTicks: h,
    tickSize: g,
    valueFormatter: x,
    slotProps: y,
    tickInterval: m,
    tickLabelInterval: v,
    tickPlacement: C,
    tickLabelPlacement: S,
    tickLabelMinGap: b,
    tickSpacing: I,
    height: T
  } = o, L = Nn(), {
    instance: O
  } = Ct(), _ = Hf(), w = h ? 4 : g, A = jf({
    scale: r,
    tickNumber: i,
    valueFormatter: x,
    tickInterval: m,
    tickPlacement: C,
    tickLabelPlacement: S,
    tickSpacing: I,
    direction: "x",
    ordinalTimeTicks: n
  }), P = xB(A, {
    tickLabelStyle: c.style,
    tickLabelInterval: v,
    tickLabelMinGap: b,
    reverse: d,
    isMounted: f,
    isXInside: O.isXInside
  }), M = Math.max(0, T - (t > 0 ? t + b3 : 0) - w - kg), $ = _ ? yB(P, L, M, p, c.style) : new Map(Array.from(P).map((D) => [D, D.formattedValue]));
  return /* @__PURE__ */ E.jsx(k.Fragment, {
    children: A.map((D, R) => {
      const {
        offset: F,
        labelOffset: z
      } = D, H = z ?? 0, W = s * (w + kg), q = O.isXInside(F), J = $.get(D), se = P.has(D);
      return /* @__PURE__ */ E.jsxs("g", {
        transform: `translate(${F}, 0)`,
        className: a.tickContainer,
        children: [!h && q && /* @__PURE__ */ E.jsx(l, N({
          y2: s * w,
          className: a.tick
        }, y == null ? void 0 : y.axisTick)), J !== void 0 && se && /* @__PURE__ */ E.jsx(u, N({
          x: H,
          y: W
        }, c, {
          text: J
        }))]
      }, R);
    })
  });
}
const Qs = {
  start: 0,
  extremities: 0,
  end: 1,
  middle: 0.5,
  tick: 0
};
function yE(e) {
  const {
    scale: t,
    tickInterval: n,
    tickLabelPlacement: r = "middle",
    tickPlacement: o = "extremities",
    groups: i
  } = e;
  return k.useMemo(() => {
    const s = t.domain(), a = typeof n == "function" && s.filter(n) || typeof n == "object" && n || s;
    if (t.bandwidth() > 0) {
      const l = cC(a, i, o, r, t);
      return l[0] && (l[0].ignoreTick = !0), [
        {
          formattedValue: void 0,
          offset: t.range()[0],
          labelOffset: 0,
          groupIndex: i.length - 1
        },
        ...l,
        // Last tick
        {
          formattedValue: void 0,
          offset: t.range()[1],
          labelOffset: 0,
          groupIndex: i.length - 1
        }
      ];
    }
    return cC(a, i, o, r, t);
  }, [t, n, i, o, r]);
}
function cC(e, t, n, r, o) {
  const i = [], s = /* @__PURE__ */ new Map();
  let a = 0;
  for (let l = 0; l < t.length; l += 1)
    for (let u = 0; u < e.length; u += 1) {
      const c = e[u], d = t[l].getValue(c, u), p = i[i.length - 1];
      if ((p == null ? void 0 : p.value) !== d || (p == null ? void 0 : p.groupIndex) !== l) {
        a = 1;
        const h = et(o) ? o(c) - (o.step() - o.bandwidth()) / 2 + Qs[n] * o.step() : o(c), g = o.step() * a * (Qs[r] - Qs[n]);
        i.push({
          value: d,
          formattedValue: `${d}`,
          offset: h,
          groupIndex: l,
          dataIndex: u,
          ignoreTick: !1,
          labelOffset: g
        }), s.has(u) || s.set(u, /* @__PURE__ */ new Set());
        const x = s.get(u);
        for (const y of x.values())
          i[y].ignoreTick = !0;
        x.add(i.length - 1);
      } else {
        a += 1;
        const h = o.step() * a * (Qs[r] - Qs[n]);
        p.labelOffset = h;
      }
    }
  return i;
}
const dC = {
  tickSize: 6
}, vE = (e, t, n, r) => {
  const o = e[t] ?? {}, i = n ?? dC.tickSize, s = i * t * 2 + i;
  return N({}, dC, o, {
    tickSize: (r == null ? void 0 : r[t]) ?? o.tickSize ?? s
  });
};
function EB(e) {
  const {
    xScale: t,
    defaultizedProps: n,
    positionSign: r,
    classes: o,
    Tick: i,
    TickLabel: s,
    axisTickLabelProps: a
  } = mE(e);
  if (!et(t))
    throw new Error(ke(8));
  const {
    disableTicks: l,
    tickSize: u,
    valueFormatter: c,
    slotProps: d,
    tickInterval: p,
    tickPlacement: f,
    tickLabelPlacement: h
  } = n, g = n.groups, x = n.id, {
    instance: y
  } = Ct(), v = fe().use(MI), C = x ? v[x] : void 0, S = C == null ? void 0 : C.groupTickSizes, b = yE({
    scale: t,
    tickInterval: p,
    tickPlacement: f,
    tickLabelPlacement: h,
    groups: g
  });
  return /* @__PURE__ */ E.jsx(k.Fragment, {
    children: b.map((I, T) => {
      const {
        offset: L,
        labelOffset: O
      } = I, _ = O ?? 0, w = y.isXInside(L), A = I.formattedValue, P = I.ignoreTick ?? !1, M = I.groupIndex ?? 0, $ = vE(g, M, u, S), D = r * $.tickSize, R = r * ($.tickSize + kg);
      return /* @__PURE__ */ E.jsxs("g", {
        transform: `translate(${L}, 0)`,
        className: o.tickContainer,
        "data-group-index": M,
        children: [!l && !P && w && /* @__PURE__ */ E.jsx(i, N({
          y2: D,
          className: o.tick
        }, d == null ? void 0 : d.axisTick)), A !== void 0 && /* @__PURE__ */ E.jsx(s, N({
          x: _,
          y: R
        }, a, {
          style: N({}, a.style, $.tickLabelStyle),
          text: A
        }))]
      }, T);
    })
  });
}
const xE = K("g", {
  name: "MuiChartsAxis",
  slot: "Root"
})(({
  theme: e
}) => ({
  [`& .${xu.tickLabel}`]: N({}, e.typography.caption, {
    fill: (e.vars || e).palette.text.primary
  }),
  [`& .${xu.label}`]: {
    fill: (e.vars || e).palette.text.primary
  },
  [`& .${xu.line}`]: {
    stroke: (e.vars || e).palette.text.primary,
    shapeRendering: "crispEdges",
    strokeWidth: 1
  },
  [`& .${xu.tick}`]: {
    stroke: (e.vars || e).palette.text.primary,
    shapeRendering: "crispEdges"
  }
})), PB = ["axis"], MB = ["scale", "tickNumber", "reverse", "ordinalTimeTicks"], AB = K(xE, {
  name: "MuiChartsXAxis",
  slot: "Root"
})({});
function RB(e) {
  let {
    axis: t
  } = e, n = xe(e, PB);
  const {
    scale: r,
    ordinalTimeTicks: o
  } = t, i = xe(t, MB), s = nn({
    props: N({}, i, n),
    name: "MuiChartsXAxis"
  }), a = N({}, iE, s), {
    position: l,
    className: u,
    labelStyle: c,
    offset: d,
    slots: p,
    slotProps: f,
    sx: h,
    disableLine: g,
    label: x,
    height: y
  } = a, m = tn(), v = oE(a), {
    left: C,
    top: S,
    width: b,
    height: I
  } = Nn(), T = l === "bottom" ? 1 : -1, L = (p == null ? void 0 : p.axisLine) ?? "line", O = (p == null ? void 0 : p.axisLabel) ?? Wf, _ = dr({
    elementType: O,
    // @ts-expect-error `useSlotProps` applies `WithCommonProps` with adds a `style: React.CSSProperties` prop automatically.
    externalSlotProps: f == null ? void 0 : f.axisLabel,
    // @ts-expect-error `useSlotProps` applies `WithCommonProps` with adds a `style: React.CSSProperties` prop automatically.
    additionalProps: {
      style: N({}, m.typography.body1, {
        lineHeight: 1,
        fontSize: 14,
        textAnchor: "middle",
        dominantBaseline: l === "bottom" ? "text-after-edge" : "text-before-edge"
      }, c)
    },
    ownerState: {}
  });
  if (l === "none")
    return null;
  const w = x ? wl(x, _.style).height : 0, A = r.domain(), M = et(r) ? A.length === 0 : A.some(I0);
  let $ = null;
  M || ($ = "groups" in t && Array.isArray(t.groups) ? /* @__PURE__ */ E.jsx(EB, N({}, n)) : /* @__PURE__ */ E.jsx(TB, N({}, n, {
    axisLabelHeight: w,
    ordinalTimeTicks: o
  })));
  const D = {
    x: C + b / 2,
    y: T * y
  };
  return /* @__PURE__ */ E.jsxs(AB, {
    transform: `translate(0, ${l === "bottom" ? S + I + d : S - d})`,
    className: oe(v.root, u),
    "data-axis-id": a.id,
    sx: h,
    children: [!g && /* @__PURE__ */ E.jsx(L, N({
      x1: C,
      x2: C + b,
      className: v.line
    }, f == null ? void 0 : f.axisLine)), $, x && /* @__PURE__ */ E.jsx("g", {
      className: v.label,
      children: /* @__PURE__ */ E.jsx(O, N({}, D, _, {
        text: x
      }))
    })]
  });
}
function _B(e) {
  const {
    xAxis: t,
    xAxisIds: n
  } = $t(), r = t[e.axisId ?? n[0]];
  return r ? /* @__PURE__ */ E.jsx(RB, N({}, e, {
    axis: r
  })) : null;
}
function $B(e, t, n, r, o) {
  const i = /* @__PURE__ */ new Map(), s = Lf((o == null ? void 0 : o.angle) ?? 0);
  let a = 1, l = 1;
  (o == null ? void 0 : o.textAnchor) === "start" ? (a = 1 / 0, l = 1) : (o == null ? void 0 : o.textAnchor) === "end" ? (a = 1, l = 1 / 0) : (a = 2, l = 2), s > 180 && ([a, l] = [l, a]), r && ([a, l] = [l, a]);
  for (const u of e)
    if (u.formattedValue) {
      const c = Math.min((u.offset + u.labelOffset) * a, (t.top + t.height + t.bottom - u.offset - u.labelOffset) * l), d = (p) => dE(p, {
        width: n,
        height: c,
        angle: s,
        measureText: (f) => wl(f, o)
      });
      i.set(u, fE(u.formattedValue.toString(), d));
    }
  return i;
}
const CE = (e) => {
  const {
    classes: t,
    position: n
  } = e;
  return ve({
    root: ["root", "directionY", n],
    line: ["line"],
    tickContainer: ["tickContainer"],
    tick: ["tick"],
    tickLabel: ["tickLabel"],
    label: ["label"]
  }, rE, t);
}, Tg = 2, OB = 2, wE = {
  disableLine: !1,
  disableTicks: !1,
  tickSize: 6
}, LB = ["scale", "tickNumber", "reverse"];
function bE(e) {
  const {
    yAxis: t,
    yAxisIds: n
  } = Ot(), r = t[e.axisId ?? n[0]], {
    scale: o,
    tickNumber: i
  } = r, s = xe(r, LB), a = nn({
    props: N({}, s, e),
    name: "MuiChartsYAxis"
  }), l = N({}, wE, a), {
    position: u,
    tickLabelStyle: c,
    slots: d,
    slotProps: p
  } = l, f = tn(), h = ks(), g = CE(l), x = u === "right" ? 1 : -1, y = typeof (c == null ? void 0 : c.fontSize) == "number" ? c.fontSize : 12, m = (d == null ? void 0 : d.axisTick) ?? "line", v = (d == null ? void 0 : d.axisTickLabel) ?? Wf, C = pE((u === "right" ? -90 : 90) - ((c == null ? void 0 : c.angle) ?? 0)), S = hE((u === "right" ? -90 : 90) - ((c == null ? void 0 : c.angle) ?? 0)), b = dr({
    elementType: v,
    // @ts-expect-error `useSlotProps` applies `WithCommonProps` with adds a `style: React.CSSProperties` prop automatically.
    externalSlotProps: p == null ? void 0 : p.axisTickLabel,
    // @ts-expect-error `useSlotProps` applies `WithCommonProps` with adds a `style: React.CSSProperties` prop automatically.
    additionalProps: {
      style: N({}, f.typography.caption, {
        fontSize: y,
        textAnchor: h ? gE(C) : C,
        dominantBaseline: S
      }, c)
    },
    className: g.tickLabel,
    ownerState: {}
  });
  return {
    yScale: o,
    defaultizedProps: l,
    tickNumber: i,
    positionSign: x,
    classes: g,
    Tick: m,
    TickLabel: v,
    axisTickLabelProps: b
  };
}
function NB(e) {
  const {
    axisLabelHeight: t,
    ordinalTimeTicks: n
  } = e, {
    yScale: r,
    defaultizedProps: o,
    tickNumber: i,
    positionSign: s,
    classes: a,
    Tick: l,
    TickLabel: u,
    axisTickLabelProps: c
  } = bE(e), d = ks(), {
    disableTicks: p,
    tickSize: f,
    valueFormatter: h,
    slotProps: g,
    tickPlacement: x,
    tickLabelPlacement: y,
    tickInterval: m,
    tickLabelInterval: v,
    tickSpacing: C,
    width: S
  } = o, b = Nn(), {
    instance: I
  } = Ct(), T = Hf(), L = p ? 4 : f, O = jf({
    scale: r,
    tickNumber: i,
    valueFormatter: h,
    tickPlacement: x,
    tickLabelPlacement: y,
    tickInterval: m,
    tickSpacing: C,
    direction: "y",
    ordinalTimeTicks: n
  }), _ = Math.max(0, S - (t > 0 ? t + OB : 0) - L - Tg), w = T ? $B(O, b, _, d, c.style) : new Map(Array.from(O).map((A) => [A, A.formattedValue]));
  return /* @__PURE__ */ E.jsx(k.Fragment, {
    children: O.map((A, P) => {
      const {
        offset: M,
        labelOffset: $,
        value: D
      } = A, R = s * (L + Tg), F = $, z = typeof v == "function" && !(v != null && v(D, P)), H = I.isYInside(M), W = w.get(A);
      return H ? /* @__PURE__ */ E.jsxs("g", {
        transform: `translate(0, ${M})`,
        className: a.tickContainer,
        children: [!p && /* @__PURE__ */ E.jsx(l, N({
          x2: s * L,
          className: a.tick
        }, g == null ? void 0 : g.axisTick)), W !== void 0 && !z && /* @__PURE__ */ E.jsx(u, N({
          x: R,
          y: F,
          text: W
        }, c))]
      }, P) : null;
    })
  });
}
function DB(e) {
  const {
    yScale: t,
    defaultizedProps: n,
    positionSign: r,
    classes: o,
    Tick: i,
    TickLabel: s,
    axisTickLabelProps: a
  } = bE(e);
  if (!et(t))
    throw new Error(ke(9));
  const {
    disableTicks: l,
    tickSize: u,
    valueFormatter: c,
    slotProps: d,
    tickInterval: p,
    tickPlacement: f,
    tickLabelPlacement: h
  } = n, g = n.groups, x = n.id, {
    instance: y
  } = Ct(), v = fe().use(AI), C = x ? v[x] : void 0, S = C == null ? void 0 : C.groupTickSizes, b = yE({
    scale: t,
    tickInterval: p,
    tickPlacement: f,
    tickLabelPlacement: h,
    groups: g
  });
  return /* @__PURE__ */ E.jsx(k.Fragment, {
    children: b.map((I, T) => {
      const {
        offset: L,
        labelOffset: O
      } = I, _ = O ?? 0, w = y.isYInside(L), A = I.formattedValue, P = I.ignoreTick ?? !1, M = I.groupIndex ?? 0, $ = vE(g, M, u, S), D = r * $.tickSize, R = r * ($.tickSize + Tg);
      return /* @__PURE__ */ E.jsxs("g", {
        transform: `translate(0, ${L})`,
        className: o.tickContainer,
        "data-group-index": M,
        children: [!l && !P && w && /* @__PURE__ */ E.jsx(i, N({
          x2: D,
          className: o.tick
        }, d == null ? void 0 : d.axisTick)), A !== void 0 && /* @__PURE__ */ E.jsx(s, N({
          x: R,
          y: _
        }, a, {
          style: N({}, a.style, $.tickLabelStyle),
          text: A
        }))]
      }, T);
    })
  });
}
const FB = ["axis"], zB = ["scale", "tickNumber", "reverse", "ordinalTimeTicks"], BB = K(xE, {
  name: "MuiChartsYAxis",
  slot: "Root"
})({});
function jB(e) {
  let {
    axis: t
  } = e, n = xe(e, FB);
  const {
    scale: r,
    ordinalTimeTicks: o
  } = t, i = xe(t, zB), s = Hf(), a = nn({
    props: N({}, i, n),
    name: "MuiChartsYAxis"
  }), l = N({}, wE, a), {
    position: u,
    className: c,
    disableLine: d,
    label: p,
    labelStyle: f,
    offset: h,
    width: g,
    sx: x,
    slots: y,
    slotProps: m
  } = l, v = tn(), C = CE(l), {
    left: S,
    top: b,
    width: I,
    height: T
  } = Nn(), L = u === "right" ? 1 : -1, O = (y == null ? void 0 : y.axisLine) ?? "line", _ = (y == null ? void 0 : y.axisLabel) ?? Wf, w = dr({
    elementType: O,
    externalSlotProps: m == null ? void 0 : m.axisLine,
    additionalProps: {
      strokeLinecap: "square"
    },
    ownerState: {}
  }), A = dr({
    elementType: _,
    // @ts-expect-error `useSlotProps` applies `WithCommonProps` with adds a `style: React.CSSProperties` prop automatically.
    externalSlotProps: m == null ? void 0 : m.axisLabel,
    // @ts-expect-error `useSlotProps` applies `WithCommonProps` with adds a `style: React.CSSProperties` prop automatically.
    additionalProps: {
      style: N({}, v.typography.body1, {
        lineHeight: 1,
        fontSize: 14,
        angle: L * 90,
        textAnchor: "middle",
        dominantBaseline: "text-before-edge"
      }, f)
    },
    ownerState: {}
  });
  if (u === "none")
    return null;
  const P = {
    x: L * g,
    y: b + T / 2
  }, M = p == null ? 0 : wl(p, A.style).height, $ = r.domain(), R = et(r) ? $.length === 0 : $.some(I0);
  let F = null;
  return R || (F = "groups" in t && Array.isArray(t.groups) ? /* @__PURE__ */ E.jsx(DB, N({}, n)) : /* @__PURE__ */ E.jsx(NB, N({}, n, {
    axisLabelHeight: M,
    ordinalTimeTicks: o
  }))), /* @__PURE__ */ E.jsxs(BB, {
    transform: `translate(${u === "right" ? S + I + h : S - h}, 0)`,
    className: oe(C.root, c),
    "data-axis-id": l.id,
    sx: x,
    children: [!d && /* @__PURE__ */ E.jsx(O, N({
      y1: b,
      y2: b + T,
      className: C.line
    }, w)), F, p && s && /* @__PURE__ */ E.jsx("g", {
      className: C.label,
      children: /* @__PURE__ */ E.jsx(_, N({}, P, A, {
        text: p
      }))
    })]
  });
}
function UB(e) {
  const {
    yAxis: t,
    yAxisIds: n
  } = Ot(), r = t[e.axisId ?? n[0]];
  return r ? /* @__PURE__ */ E.jsx(jB, N({}, e, {
    axis: r
  })) : null;
}
function HB(e) {
  const {
    slots: t,
    slotProps: n
  } = e, {
    xAxisIds: r,
    xAxis: o
  } = $t(), {
    yAxisIds: i,
    yAxis: s
  } = Ot(), a = (t == null ? void 0 : t.xAxis) ?? _B, l = (t == null ? void 0 : t.yAxis) ?? UB;
  return /* @__PURE__ */ E.jsxs(k.Fragment, {
    children: [r.map((u) => !o[u].position || o[u].position === "none" ? null : /* @__PURE__ */ E.jsx(a, {
      slots: t,
      slotProps: n,
      axisId: u
    }, u)), i.map((u) => !s[u].position || s[u].position === "none" ? null : /* @__PURE__ */ E.jsx(l, {
      slots: t,
      slotProps: n,
      axisId: u
    }, u))]
  });
}
function WB(e) {
  return typeof e.main == "string";
}
function GB(e, t = []) {
  if (!WB(e))
    return !1;
  for (const n of t)
    if (!e.hasOwnProperty(n) || typeof e[n] != "string")
      return !1;
  return !0;
}
function Ur(e = []) {
  return ([, t]) => t && GB(t, e);
}
function VB(e) {
  return Ce("MuiTypography", e);
}
ce("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom"]);
const YB = (e) => {
  const {
    align: t,
    gutterBottom: n,
    noWrap: r,
    variant: o,
    classes: i
  } = e, s = {
    root: ["root", o, e.align !== "inherit" && `align${Ee(t)}`, n && "gutterBottom", r && "noWrap"]
  };
  return ve(s, VB, i);
}, KB = K("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.variant && t[n.variant], n.align !== "inherit" && t[`align${Ee(n.align)}`], n.noWrap && t.noWrap, n.gutterBottom && t.gutterBottom];
  }
})(ze(({
  theme: e
}) => {
  var t;
  return {
    margin: 0,
    variants: [{
      props: {
        variant: "inherit"
      },
      style: {
        // Some elements, like <button> on Chrome have default font that doesn't inherit, reset this.
        font: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit"
      }
    }, ...Object.entries(e.typography).filter(([n, r]) => n !== "inherit" && r && typeof r == "object").map(([n, r]) => ({
      props: {
        variant: n
      },
      style: r
    })), ...Object.entries(e.palette).filter(Ur()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        color: (e.vars || e).palette[n].main
      }
    })), ...Object.entries(((t = e.palette) == null ? void 0 : t.text) || {}).filter(([, n]) => typeof n == "string").map(([n]) => ({
      props: {
        color: `text${Ee(n)}`
      },
      style: {
        color: (e.vars || e).palette.text[n]
      }
    })), {
      props: ({
        ownerState: n
      }) => n.align !== "inherit",
      style: {
        textAlign: "var(--Typography-textAlign)"
      }
    }, {
      props: ({
        ownerState: n
      }) => n.noWrap,
      style: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, {
      props: ({
        ownerState: n
      }) => n.gutterBottom,
      style: {
        marginBottom: "0.35em"
      }
    }]
  };
})), fC = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  inherit: "p"
}, Er = /* @__PURE__ */ k.forwardRef(function(t, n) {
  const r = Be({
    props: t,
    name: "MuiTypography"
  }), {
    color: o,
    align: i = "inherit",
    className: s,
    component: a,
    gutterBottom: l = !1,
    noWrap: u = !1,
    variant: c = "body1",
    variantMapping: d = fC,
    ...p
  } = r, f = {
    ...r,
    align: i,
    color: o,
    className: s,
    component: a,
    gutterBottom: l,
    noWrap: u,
    variant: c,
    variantMapping: d
  }, h = a || d[c] || fC[c] || "span", g = YB(f);
  return /* @__PURE__ */ E.jsx(KB, {
    as: h,
    ref: n,
    className: oe(g.root, s),
    ...p,
    ownerState: f,
    style: {
      ...i !== "inherit" && {
        "--Typography-textAlign": i
      },
      ...p.style
    }
  });
});
function XB(e) {
  return Ce("MuiChartsTooltip", e);
}
const Ci = ce("MuiChartsTooltip", ["root", "paper", "table", "row", "cell", "mark", "markContainer", "labelCell", "valueCell", "axisValueCell"]), ai = (e) => ve({
  root: ["root"],
  paper: ["paper"],
  table: ["table"],
  row: ["row"],
  cell: ["cell"],
  mark: ["mark"],
  markContainer: ["markContainer"],
  labelCell: ["labelCell"],
  valueCell: ["valueCell"],
  axisValueCell: ["axisValueCell"]
}, XB, e);
function qB() {
  var T;
  const e = fe(), t = e.use(Af), n = e.use(nt), r = Fl(), {
    xAxis: o,
    xAxisIds: i
  } = $t(), {
    yAxis: s,
    yAxisIds: a
  } = Ot(), {
    zAxis: l,
    zAxisIds: u
  } = m0(), {
    rotationAxis: c,
    rotationAxisIds: d
  } = h0(), {
    radiusAxis: p,
    radiusAxisIds: f
  } = g0();
  if (!t)
    return null;
  const h = (T = r[t.type]) == null ? void 0 : T.series[t.seriesId];
  if (!h)
    return null;
  const g = tl(h) ? h.xAxisId ?? i[0] : void 0, x = tl(h) ? h.yAxisId ?? a[0] : void 0, y = X1(h) ? ("radiusAxisId" in h ? h.radiusAxisId : void 0) ?? f[0] : void 0, m = X1(h) ? ("rotationAxisId" in h ? h.rotationAxisId : void 0) ?? d[0] : void 0, v = ("colorAxisId" in h ? h.colorAxisId : void 0) ?? ("zAxisId" in h ? h.zAxisId : void 0) ?? u[0], C = (
    // eslint-disable-next-line no-nested-ternary
    m !== void 0 ? c[m] : g !== void 0 ? o[g] : void 0
  ), S = (
    // eslint-disable-next-line no-nested-ternary
    y !== void 0 ? p[y] : x !== void 0 ? s[x] : void 0
  ), b = n[h.type].colorProcessor(h, C, S, v !== void 0 ? l[v] : void 0), I = {};
  return g !== void 0 && (I.x = o[g]), x !== void 0 && (I.y = s[x]), m !== void 0 && (I.rotation = c[m]), y !== void 0 && (I.radius = p[y]), n[h.type].tooltipGetter({
    series: h,
    axesConfig: I,
    getColor: b,
    identifier: t
  });
}
const Eg = K("div", {
  name: "MuiChartsTooltip",
  slot: "Container",
  overridesResolver: (e, t) => t.paper
  // FIXME: Inconsistent naming with slot
})(({
  theme: e
}) => {
  var t;
  return {
    backgroundColor: (e.vars || e).palette.background.paper,
    color: (e.vars || e).palette.text.primary,
    borderRadius: (t = (e.vars || e).shape) == null ? void 0 : t.borderRadius,
    border: `solid ${(e.vars || e).palette.divider} 1px`
  };
}), Pg = K("table", {
  name: "MuiChartsTooltip",
  slot: "Table"
})(({
  theme: e
}) => ({
  borderSpacing: 0,
  [`& .${Ci.markContainer}`]: {
    display: "inline-block",
    width: `calc(20px + ${e.spacing(1.5)})`,
    verticalAlign: "middle"
  },
  "& caption": {
    borderBottom: `solid ${(e.vars || e).palette.divider} 1px`,
    padding: e.spacing(0.5, 1.5),
    textAlign: "start",
    whiteSpace: "nowrap",
    "& span": {
      marginRight: e.spacing(1.5)
    }
  }
})), R0 = K("tr", {
  name: "MuiChartsTooltip",
  slot: "Row"
})(({
  theme: e
}) => ({
  "tr:first-of-type& td": {
    paddingTop: e.spacing(0.5)
  },
  "tr:last-of-type& td": {
    paddingBottom: e.spacing(0.5)
  }
})), ps = K(Er, {
  name: "MuiChartsTooltip",
  slot: "Cell"
})(({
  theme: e
}) => ({
  verticalAlign: "middle",
  color: (e.vars || e).palette.text.secondary,
  textAlign: "start",
  [`&.${Ci.cell}`]: {
    paddingLeft: e.spacing(1),
    paddingRight: e.spacing(1)
  },
  [`&.${Ci.labelCell}`]: {
    whiteSpace: "nowrap",
    fontWeight: e.typography.fontWeightRegular
  },
  [`&.${Ci.valueCell}, &.${Ci.axisValueCell}`]: {
    color: (e.vars || e).palette.text.primary,
    fontWeight: e.typography.fontWeightMedium
  },
  [`&.${Ci.valueCell}`]: {
    paddingLeft: e.spacing(1.5),
    paddingRight: e.spacing(1.5)
  },
  "td:first-of-type&, th:first-of-type&": {
    paddingLeft: e.spacing(1.5)
  },
  "td:last-of-type&, th:last-of-type&": {
    paddingRight: e.spacing(1.5)
  }
}));
function QB(e) {
  return Ce("MuiChartsLabelMark", e);
}
const Cu = ce("MuiChartsLabelMark", ["root", "line", "lineAndMark", "square", "circle", "fill"]), ZB = (e) => {
  const {
    type: t
  } = e;
  return ve({
    root: typeof t == "function" ? ["root"] : ["root", t === "line+mark" ? "lineAndMark" : t],
    fill: ["fill"]
  }, QB, e.classes);
}, SE = (e, t, n) => /* @__PURE__ */ k.forwardRef(function(o, i) {
  var p;
  const s = nn({
    props: o,
    // eslint-disable-next-line mui/material-ui-name-matches-component-name
    name: e
  }), a = typeof t.defaultProps == "function" ? t.defaultProps(s) : t.defaultProps ?? {}, l = co(a, s), u = tn(), c = (p = t.classesResolver) == null ? void 0 : p.call(t, l, u), d = /* @__PURE__ */ k.forwardRef(n);
  return /* @__PURE__ */ E.jsx(d, N({}, l, {
    classes: c,
    ref: i
  }));
}), JB = ["type", "markShape", "color", "className", "classes"], e4 = K("div", {
  name: "MuiChartsLabelMark",
  slot: "Root"
})(() => ({
  display: "flex",
  width: 14,
  height: 14,
  "& > *": {
    width: "100%",
    height: "100%"
  },
  [`&.${Cu.line}`]: {
    width: 16,
    height: 8,
    alignItems: "center"
  },
  [`&.${Cu.lineAndMark}`]: {
    alignItems: "center"
  },
  [`&.${Cu.square}`]: {
    height: 13,
    width: 13,
    borderRadius: 2,
    overflow: "hidden"
  },
  [`&.${Cu.circle}`]: {
    height: 15,
    width: 15
  },
  svg: {
    display: "block"
  }
})), ol = SE("MuiChartsLabelMark", {
  defaultProps: {
    type: "square"
  },
  classesResolver: ZB
}, function(t, n) {
  const {
    type: r,
    markShape: o,
    color: i,
    className: s,
    classes: a
  } = t, l = xe(t, JB), u = r, c = tn();
  return /* @__PURE__ */ E.jsx(e4, N({
    className: oe(a == null ? void 0 : a.root, s),
    ownerState: t,
    "aria-hidden": "true",
    ref: n
  }, l, {
    children: typeof u == "function" ? /* @__PURE__ */ E.jsx(u, {
      className: a == null ? void 0 : a.fill,
      color: i
    }) : /* @__PURE__ */ E.jsxs(k.Fragment, {
      children: [r === "circle" && /* @__PURE__ */ E.jsx("svg", {
        viewBox: "0 0 15 15",
        children: /* @__PURE__ */ E.jsx("circle", {
          className: a == null ? void 0 : a.fill,
          r: "7.5",
          cx: "7.5",
          cy: "7.5",
          fill: i
        })
      }), r === "line" && /* @__PURE__ */ E.jsx("svg", {
        viewBox: "0 0 16 8",
        preserveAspectRatio: "none",
        children: /* @__PURE__ */ E.jsx("path", {
          className: a == null ? void 0 : a.fill,
          d: "M 2 4 L 14 4",
          stroke: i,
          strokeWidth: "4",
          strokeLinecap: "round",
          vectorEffect: "non-scaling-stroke"
        })
      }), r === "line+mark" && /* @__PURE__ */ E.jsxs("svg", {
        viewBox: "0 0 16 16",
        preserveAspectRatio: "none",
        children: [/* @__PURE__ */ E.jsx("path", {
          className: a == null ? void 0 : a.fill,
          d: "M 1 8 L 15 8",
          stroke: i,
          strokeWidth: 2,
          strokeLinecap: "round",
          vectorEffect: "non-scaling-stroke"
        }), o && /* @__PURE__ */ E.jsx("path", {
          d: b0(w0[M0(o)], 32)(),
          transform: "translate(8, 8) ",
          stroke: i,
          strokeWidth: 2,
          fill: (c.vars || c).palette.background.paper
        })]
      }), r !== "line" && r !== "circle" && r !== "line+mark" && /* @__PURE__ */ E.jsx("svg", {
        viewBox: "0 0 13 13",
        children: /* @__PURE__ */ E.jsx("rect", {
          className: a == null ? void 0 : a.fill,
          width: "13",
          height: "13",
          fill: i
        })
      })]
    })
  }));
});
function t4(e) {
  const {
    classes: t,
    sx: n
  } = e, r = qB(), i = fe().use(nt), s = ai(t);
  if (!r)
    return null;
  const a = i[r.identifier.type], l = a && "ItemTooltipContent" in a ? a.ItemTooltipContent : null;
  if ("values" in r) {
    const {
      label: c,
      color: d,
      markType: p,
      markShape: f
    } = r, h = l ?? n4;
    return /* @__PURE__ */ E.jsx(Eg, {
      sx: n,
      className: s.paper,
      children: /* @__PURE__ */ E.jsxs(Pg, {
        className: s.table,
        children: [/* @__PURE__ */ E.jsxs(Er, {
          component: "caption",
          children: [/* @__PURE__ */ E.jsx("div", {
            className: s.markContainer,
            children: /* @__PURE__ */ E.jsx(ol, {
              type: p,
              markShape: f,
              color: d,
              className: s.mark
            })
          }), c]
        }), /* @__PURE__ */ E.jsx("tbody", {
          children: /* @__PURE__ */ E.jsx(h, {
            classes: t,
            item: r
          })
        })]
      })
    });
  }
  const u = l ?? r4;
  return /* @__PURE__ */ E.jsx(Eg, {
    sx: n,
    className: s.paper,
    children: /* @__PURE__ */ E.jsx(Pg, {
      className: s.table,
      children: /* @__PURE__ */ E.jsx("tbody", {
        children: /* @__PURE__ */ E.jsx(u, {
          classes: t,
          item: (
            /* TypeScript can't guarantee that the item's series type is the same as the Content's series type,
             * so we need to cast */
            r
          )
        })
      })
    })
  });
}
function n4({
  classes: e,
  item: t
}) {
  const n = ai(e);
  return /* @__PURE__ */ E.jsx(k.Fragment, {
    children: t.values.map((r) => /* @__PURE__ */ E.jsxs(R0, {
      className: n.row,
      "data-series": t.identifier.seriesId,
      "data-index": t.identifier.dataIndex,
      children: [/* @__PURE__ */ E.jsx(ps, {
        className: oe(n.labelCell, n.cell),
        component: "th",
        children: r.label
      }), /* @__PURE__ */ E.jsx(ps, {
        className: oe(n.valueCell, n.cell),
        component: "td",
        children: r.formattedValue
      })]
    }, r.label))
  });
}
function r4({
  classes: e,
  item: t
}) {
  const {
    color: n,
    label: r,
    formattedValue: o,
    markType: i,
    markShape: s
  } = t, a = ai(e);
  return o == null || typeof o != "string" ? null : /* @__PURE__ */ E.jsxs(R0, {
    className: a.row,
    "data-series": t.identifier.seriesId,
    "data-index": "dataIndex" in t.identifier ? t.identifier.dataIndex : void 0,
    children: [/* @__PURE__ */ E.jsxs(ps, {
      className: oe(a.labelCell, a.cell),
      component: "th",
      children: [/* @__PURE__ */ E.jsx("div", {
        className: a.markContainer,
        children: /* @__PURE__ */ E.jsx(ol, {
          type: i,
          markShape: s,
          color: n,
          className: a.mark
        })
      }), r]
    }), /* @__PURE__ */ E.jsx(ps, {
      className: oe(a.valueCell, a.cell),
      component: "td",
      children: o
    })]
  });
}
function o4(e) {
  const n = fe().use(nt);
  return k.useMemo(() => {
    const o = {};
    return Object.keys(n).forEach((i) => {
      o[i] = n[i].colorProcessor;
    }), o;
  }, [n]);
}
function Mn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
const i4 = tk({
  themeId: ws
});
function s4(e) {
  return e instanceof Date ? e.toUTCString() : e.toLocaleString();
}
const a4 = "@media (pointer: fine)", l4 = () => i4(a4, {
  defaultMatches: !0
}), Gf = /* @__PURE__ */ new Set(["bar", "line", "scatter", "rangeBar", "ohlc"]);
function wu(e, t, n) {
  var s;
  const r = ((s = e.data) == null ? void 0 : s[t]) ?? null, i = (e.valueFormatter ?? ((a) => e.scaleType === "utc" ? s4(a) : a.toLocaleString()))(r, {
    location: "tooltip",
    scale: e.scale
  });
  return {
    axisDirection: n,
    axisId: e.id,
    mainAxis: e,
    dataIndex: t,
    axisValue: r,
    axisFormattedValue: i,
    seriesItems: []
  };
}
function pC(e) {
  if (!(!("showMark" in e) || !e.showMark))
    return "shape" in e && e.shape ? e.shape : "circle";
}
function u4(e) {
  const {
    directions: t
  } = {}, n = Sz(), r = kz(), o = Iz(), i = Tz(), s = fe(), a = s.use(c0), l = s.use(d0), u = s.use(OT), c = s.use(DT), d = Fl(), {
    xAxis: p
  } = $t(), {
    yAxis: f
  } = Ot(), {
    zAxis: h,
    zAxisIds: g
  } = m0(), {
    rotationAxis: x
  } = h0(), {
    radiusAxis: y
  } = g0(), m = o4(), v = s.use(By);
  if (a.length === 0 && l.length === 0 && u.length === 0 && c.length === 0)
    return null;
  const C = [];
  return (t === void 0 || t.includes("x")) && a.forEach(({
    axisId: S,
    dataIndex: b
  }) => {
    C.push(wu(p[S], b, "x"));
  }), (t === void 0 || t.includes("y")) && l.forEach(({
    axisId: S,
    dataIndex: b
  }) => {
    C.push(wu(f[S], b, "y"));
  }), (t === void 0 || t.includes("rotation")) && u.forEach(({
    axisId: S,
    dataIndex: b
  }) => {
    C.push(wu(x[S], b, "rotation"));
  }), (t === void 0 || t.includes("radius")) && c.forEach(({
    axisId: S,
    dataIndex: b
  }) => {
    C.push(wu(y[S], b, "radius"));
  }), Object.keys(d).filter((S) => Gf.has(S)).forEach((S) => {
    const b = d[S];
    return b ? b.seriesOrder.forEach((I) => {
      var w;
      const T = b.series[I];
      if (v && !v({
        type: S,
        seriesId: I
      }))
        return;
      const L = T.xAxisId ?? n.id, O = T.yAxisId ?? r.id, _ = C.findIndex(({
        axisDirection: A,
        axisId: P
      }) => A === "x" && P === L || A === "y" && P === O);
      if (_ >= 0) {
        const A = "colorAxisId" in T && T.colorAxisId || "zAxisId" in T && T.zAxisId || g[0], {
          dataIndex: P
        } = C[_], M = ((w = m[S]) == null ? void 0 : w.call(m, T, p[L], f[O], A ? h[A] : void 0)(P)) ?? "", $ = T.data[P] ?? null, D = Mn(T.label, "tooltip") ?? null;
        let R, F;
        if (S === "ohlc" && Array.isArray($)) {
          const [z, H, W, q] = $, J = T.valueFormatter;
          R = {
            open: z,
            high: H,
            low: W,
            close: q
          }, F = {
            open: J(z, {
              dataIndex: P,
              field: "open"
            }),
            high: J(H, {
              dataIndex: P,
              field: "high"
            }),
            low: J(W, {
              dataIndex: P,
              field: "low"
            }),
            close: J(q, {
              dataIndex: P,
              field: "close"
            })
          };
        } else
          R = $, F = T.valueFormatter($, {
            dataIndex: P
          });
        C[_].seriesItems.push({
          seriesId: I,
          color: M,
          value: R,
          formattedValue: F,
          formattedLabel: D,
          markType: T.labelMarkType,
          markShape: pC(T)
        });
      }
    }) : [];
  }), Object.keys(d).filter($l).forEach((S) => {
    const b = d[S];
    return b ? b.seriesOrder.forEach((I) => {
      var w;
      const T = b.series[I];
      if (v && !v({
        type: S,
        seriesId: I
      }))
        return;
      const L = ("rotationAxisId" in T ? T.rotationAxisId : void 0) ?? (o == null ? void 0 : o.id), O = ("radiusAxisId" in T ? T.radiusAxisId : void 0) ?? (i == null ? void 0 : i.id), _ = C.findIndex(({
        axisDirection: A,
        axisId: P
      }) => A === "rotation" && P === L || A === "radius" && P === O);
      if (_ >= 0) {
        const {
          dataIndex: A
        } = C[_], P = ((w = m[S]) == null ? void 0 : w.call(m, T, L !== void 0 ? x[L] : void 0, O !== void 0 ? y[O] : void 0)(A)) ?? "", M = T.data[A] ?? null, $ = T.valueFormatter(M, {
          dataIndex: A
        }), D = Mn(T.label, "tooltip") ?? null;
        C[_].seriesItems.push({
          seriesId: I,
          color: P,
          value: M,
          formattedValue: $,
          formattedLabel: D,
          markType: T.labelMarkType,
          markShape: pC(T)
        });
      }
    }) : [];
  }), C;
}
function c4(e) {
  const {
    sort: t
  } = e, n = ai(e.classes), o = fe().use(LD), i = u4();
  return i === null ? null : /* @__PURE__ */ E.jsx(Eg, {
    sx: e.sx,
    className: n.paper,
    children: i.map(({
      axisId: s,
      mainAxis: a,
      axisValue: l,
      axisFormattedValue: u,
      seriesItems: c
    }) => {
      const d = t && t !== "none" ? [...c].sort((p, f) => {
        var x, y;
        const h = (x = p.value) == null ? void 0 : x.valueOf(), g = (y = f.value) == null ? void 0 : y.valueOf();
        return typeof h != "number" ? 1 : typeof g != "number" ? -1 : t === "asc" ? h - g : g - h;
      }) : c;
      return /* @__PURE__ */ E.jsxs(Pg, {
        className: n.table,
        children: [l != null && !a.hideTooltip && /* @__PURE__ */ E.jsx(Er, {
          component: "caption",
          children: u
        }), /* @__PURE__ */ E.jsx("tbody", {
          children: d.map((p) => {
            const f = o(p.seriesId), h = f && "AxisTooltipContent" in f ? f.AxisTooltipContent ?? hC : hC;
            return /* @__PURE__ */ E.jsx(h, {
              classes: e.classes,
              item: (
                /* TypeScript can't guarantee that the item's series type is the same as the Content's series type,
                 * so we need to cast */
                p
              )
            }, p.seriesId);
          })
        })]
      }, s);
    })
  });
}
function hC(e) {
  const t = ai(e.classes), {
    item: n
  } = e;
  return n.formattedValue == null || typeof n.formattedValue != "string" ? null : /* @__PURE__ */ E.jsxs(R0, {
    className: t.row,
    "data-series": n.seriesId,
    "data-index": "dataIndex" in n ? n.dataIndex : void 0,
    children: [/* @__PURE__ */ E.jsxs(ps, {
      className: oe(t.labelCell, t.cell),
      component: "th",
      children: [/* @__PURE__ */ E.jsx("div", {
        className: t.markContainer,
        children: /* @__PURE__ */ E.jsx(ol, {
          type: n.markType,
          markShape: n.markShape,
          color: n.color,
          className: t.mark
        })
      }), n.formattedLabel || null]
    }), /* @__PURE__ */ E.jsx(ps, {
      className: oe(t.valueCell, t.cell),
      component: "td",
      children: n.formattedValue
    })]
  });
}
var Zt = "top", An = "bottom", Rn = "right", Jt = "left", _0 = "auto", Bl = [Zt, An, Rn, Jt], hs = "start", il = "end", d4 = "clippingParents", kE = "viewport", Zs = "popper", f4 = "reference", gC = /* @__PURE__ */ Bl.reduce(function(e, t) {
  return e.concat([t + "-" + hs, t + "-" + il]);
}, []), IE = /* @__PURE__ */ [].concat(Bl, [_0]).reduce(function(e, t) {
  return e.concat([t, t + "-" + hs, t + "-" + il]);
}, []), p4 = "beforeRead", h4 = "read", g4 = "afterRead", m4 = "beforeMain", y4 = "main", v4 = "afterMain", x4 = "beforeWrite", C4 = "write", w4 = "afterWrite", b4 = [p4, h4, g4, m4, y4, v4, x4, C4, w4];
function pr(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function fn(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function ti(e) {
  var t = fn(e).Element;
  return e instanceof t || e instanceof Element;
}
function Tn(e) {
  var t = fn(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function $0(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = fn(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function S4(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, i = t.elements[n];
    !Tn(i) || !pr(i) || (Object.assign(i.style, r), Object.keys(o).forEach(function(s) {
      var a = o[s];
      a === !1 ? i.removeAttribute(s) : i.setAttribute(s, a === !0 ? "" : a);
    }));
  });
}
function k4(e) {
  var t = e.state, n = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(r) {
      var o = t.elements[r], i = t.attributes[r] || {}, s = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), a = s.reduce(function(l, u) {
        return l[u] = "", l;
      }, {});
      !Tn(o) || !pr(o) || (Object.assign(o.style, a), Object.keys(i).forEach(function(l) {
        o.removeAttribute(l);
      }));
    });
  };
}
const I4 = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: S4,
  effect: k4,
  requires: ["computeStyles"]
};
function lr(e) {
  return e.split("-")[0];
}
var Ko = Math.max, Zc = Math.min, gs = Math.round;
function Mg() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function TE() {
  return !/^((?!chrome|android).)*safari/i.test(Mg());
}
function ms(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), o = 1, i = 1;
  t && Tn(e) && (o = e.offsetWidth > 0 && gs(r.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && gs(r.height) / e.offsetHeight || 1);
  var s = ti(e) ? fn(e) : window, a = s.visualViewport, l = !TE() && n, u = (r.left + (l && a ? a.offsetLeft : 0)) / o, c = (r.top + (l && a ? a.offsetTop : 0)) / i, d = r.width / o, p = r.height / i;
  return {
    width: d,
    height: p,
    top: c,
    right: u + d,
    bottom: c + p,
    left: u,
    x: u,
    y: c
  };
}
function O0(e) {
  var t = ms(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function EE(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && $0(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function zr(e) {
  return fn(e).getComputedStyle(e);
}
function T4(e) {
  return ["table", "td", "th"].indexOf(pr(e)) >= 0;
}
function ko(e) {
  return ((ti(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Vf(e) {
  return pr(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    ($0(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    ko(e)
  );
}
function mC(e) {
  return !Tn(e) || // https://github.com/popperjs/popper-core/issues/837
  zr(e).position === "fixed" ? null : e.offsetParent;
}
function E4(e) {
  var t = /firefox/i.test(Mg()), n = /Trident/i.test(Mg());
  if (n && Tn(e)) {
    var r = zr(e);
    if (r.position === "fixed")
      return null;
  }
  var o = Vf(e);
  for ($0(o) && (o = o.host); Tn(o) && ["html", "body"].indexOf(pr(o)) < 0; ) {
    var i = zr(o);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function jl(e) {
  for (var t = fn(e), n = mC(e); n && T4(n) && zr(n).position === "static"; )
    n = mC(n);
  return n && (pr(n) === "html" || pr(n) === "body" && zr(n).position === "static") ? t : n || E4(e) || t;
}
function L0(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Ca(e, t, n) {
  return Ko(e, Zc(t, n));
}
function P4(e, t, n) {
  var r = Ca(e, t, n);
  return r > n ? n : r;
}
function PE() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function ME(e) {
  return Object.assign({}, PE(), e);
}
function AE(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var M4 = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, ME(typeof t != "number" ? t : AE(t, Bl));
};
function A4(e) {
  var t, n = e.state, r = e.name, o = e.options, i = n.elements.arrow, s = n.modifiersData.popperOffsets, a = lr(n.placement), l = L0(a), u = [Jt, Rn].indexOf(a) >= 0, c = u ? "height" : "width";
  if (!(!i || !s)) {
    var d = M4(o.padding, n), p = O0(i), f = l === "y" ? Zt : Jt, h = l === "y" ? An : Rn, g = n.rects.reference[c] + n.rects.reference[l] - s[l] - n.rects.popper[c], x = s[l] - n.rects.reference[l], y = jl(i), m = y ? l === "y" ? y.clientHeight || 0 : y.clientWidth || 0 : 0, v = g / 2 - x / 2, C = d[f], S = m - p[c] - d[h], b = m / 2 - p[c] / 2 + v, I = Ca(C, b, S), T = l;
    n.modifiersData[r] = (t = {}, t[T] = I, t.centerOffset = I - b, t);
  }
}
function R4(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || EE(t.elements.popper, o) && (t.elements.arrow = o));
}
const _4 = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: A4,
  effect: R4,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function ys(e) {
  return e.split("-")[1];
}
var $4 = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function O4(e, t) {
  var n = e.x, r = e.y, o = t.devicePixelRatio || 1;
  return {
    x: gs(n * o) / o || 0,
    y: gs(r * o) / o || 0
  };
}
function yC(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, i = e.variation, s = e.offsets, a = e.position, l = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, d = e.isFixed, p = s.x, f = p === void 0 ? 0 : p, h = s.y, g = h === void 0 ? 0 : h, x = typeof c == "function" ? c({
    x: f,
    y: g
  }) : {
    x: f,
    y: g
  };
  f = x.x, g = x.y;
  var y = s.hasOwnProperty("x"), m = s.hasOwnProperty("y"), v = Jt, C = Zt, S = window;
  if (u) {
    var b = jl(n), I = "clientHeight", T = "clientWidth";
    if (b === fn(n) && (b = ko(n), zr(b).position !== "static" && a === "absolute" && (I = "scrollHeight", T = "scrollWidth")), b = b, o === Zt || (o === Jt || o === Rn) && i === il) {
      C = An;
      var L = d && b === S && S.visualViewport ? S.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        b[I]
      );
      g -= L - r.height, g *= l ? 1 : -1;
    }
    if (o === Jt || (o === Zt || o === An) && i === il) {
      v = Rn;
      var O = d && b === S && S.visualViewport ? S.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        b[T]
      );
      f -= O - r.width, f *= l ? 1 : -1;
    }
  }
  var _ = Object.assign({
    position: a
  }, u && $4), w = c === !0 ? O4({
    x: f,
    y: g
  }, fn(n)) : {
    x: f,
    y: g
  };
  if (f = w.x, g = w.y, l) {
    var A;
    return Object.assign({}, _, (A = {}, A[C] = m ? "0" : "", A[v] = y ? "0" : "", A.transform = (S.devicePixelRatio || 1) <= 1 ? "translate(" + f + "px, " + g + "px)" : "translate3d(" + f + "px, " + g + "px, 0)", A));
  }
  return Object.assign({}, _, (t = {}, t[C] = m ? g + "px" : "", t[v] = y ? f + "px" : "", t.transform = "", t));
}
function L4(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, i = n.adaptive, s = i === void 0 ? !0 : i, a = n.roundOffsets, l = a === void 0 ? !0 : a, u = {
    placement: lr(t.placement),
    variation: ys(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, yC(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: s,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, yC(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const N4 = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: L4,
  data: {}
};
var bu = {
  passive: !0
};
function D4(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, i = o === void 0 ? !0 : o, s = r.resize, a = s === void 0 ? !0 : s, l = fn(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && u.forEach(function(c) {
    c.addEventListener("scroll", n.update, bu);
  }), a && l.addEventListener("resize", n.update, bu), function() {
    i && u.forEach(function(c) {
      c.removeEventListener("scroll", n.update, bu);
    }), a && l.removeEventListener("resize", n.update, bu);
  };
}
const F4 = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: D4,
  data: {}
};
var z4 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Ku(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return z4[t];
  });
}
var B4 = {
  start: "end",
  end: "start"
};
function vC(e) {
  return e.replace(/start|end/g, function(t) {
    return B4[t];
  });
}
function N0(e) {
  var t = fn(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function D0(e) {
  return ms(ko(e)).left + N0(e).scrollLeft;
}
function j4(e, t) {
  var n = fn(e), r = ko(e), o = n.visualViewport, i = r.clientWidth, s = r.clientHeight, a = 0, l = 0;
  if (o) {
    i = o.width, s = o.height;
    var u = TE();
    (u || !u && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: a + D0(e),
    y: l
  };
}
function U4(e) {
  var t, n = ko(e), r = N0(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, i = Ko(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = Ko(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), a = -r.scrollLeft + D0(e), l = -r.scrollTop;
  return zr(o || n).direction === "rtl" && (a += Ko(n.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
function F0(e) {
  var t = zr(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function RE(e) {
  return ["html", "body", "#document"].indexOf(pr(e)) >= 0 ? e.ownerDocument.body : Tn(e) && F0(e) ? e : RE(Vf(e));
}
function wa(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = RE(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), i = fn(r), s = o ? [i].concat(i.visualViewport || [], F0(r) ? r : []) : r, a = t.concat(s);
  return o ? a : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    a.concat(wa(Vf(s)))
  );
}
function Ag(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function H4(e, t) {
  var n = ms(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function xC(e, t, n) {
  return t === kE ? Ag(j4(e, n)) : ti(t) ? H4(t, n) : Ag(U4(ko(e)));
}
function W4(e) {
  var t = wa(Vf(e)), n = ["absolute", "fixed"].indexOf(zr(e).position) >= 0, r = n && Tn(e) ? jl(e) : e;
  return ti(r) ? t.filter(function(o) {
    return ti(o) && EE(o, r) && pr(o) !== "body";
  }) : [];
}
function G4(e, t, n, r) {
  var o = t === "clippingParents" ? W4(e) : [].concat(t), i = [].concat(o, [n]), s = i[0], a = i.reduce(function(l, u) {
    var c = xC(e, u, r);
    return l.top = Ko(c.top, l.top), l.right = Zc(c.right, l.right), l.bottom = Zc(c.bottom, l.bottom), l.left = Ko(c.left, l.left), l;
  }, xC(e, s, r));
  return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
function _E(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? lr(r) : null, i = r ? ys(r) : null, s = t.x + t.width / 2 - n.width / 2, a = t.y + t.height / 2 - n.height / 2, l;
  switch (o) {
    case Zt:
      l = {
        x: s,
        y: t.y - n.height
      };
      break;
    case An:
      l = {
        x: s,
        y: t.y + t.height
      };
      break;
    case Rn:
      l = {
        x: t.x + t.width,
        y: a
      };
      break;
    case Jt:
      l = {
        x: t.x - n.width,
        y: a
      };
      break;
    default:
      l = {
        x: t.x,
        y: t.y
      };
  }
  var u = o ? L0(o) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (i) {
      case hs:
        l[u] = l[u] - (t[c] / 2 - n[c] / 2);
        break;
      case il:
        l[u] = l[u] + (t[c] / 2 - n[c] / 2);
        break;
    }
  }
  return l;
}
function sl(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, i = n.strategy, s = i === void 0 ? e.strategy : i, a = n.boundary, l = a === void 0 ? d4 : a, u = n.rootBoundary, c = u === void 0 ? kE : u, d = n.elementContext, p = d === void 0 ? Zs : d, f = n.altBoundary, h = f === void 0 ? !1 : f, g = n.padding, x = g === void 0 ? 0 : g, y = ME(typeof x != "number" ? x : AE(x, Bl)), m = p === Zs ? f4 : Zs, v = e.rects.popper, C = e.elements[h ? m : p], S = G4(ti(C) ? C : C.contextElement || ko(e.elements.popper), l, c, s), b = ms(e.elements.reference), I = _E({
    reference: b,
    element: v,
    placement: o
  }), T = Ag(Object.assign({}, v, I)), L = p === Zs ? T : b, O = {
    top: S.top - L.top + y.top,
    bottom: L.bottom - S.bottom + y.bottom,
    left: S.left - L.left + y.left,
    right: L.right - S.right + y.right
  }, _ = e.modifiersData.offset;
  if (p === Zs && _) {
    var w = _[o];
    Object.keys(O).forEach(function(A) {
      var P = [Rn, An].indexOf(A) >= 0 ? 1 : -1, M = [Zt, An].indexOf(A) >= 0 ? "y" : "x";
      O[A] += w[M] * P;
    });
  }
  return O;
}
function V4(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, i = n.rootBoundary, s = n.padding, a = n.flipVariations, l = n.allowedAutoPlacements, u = l === void 0 ? IE : l, c = ys(r), d = c ? a ? gC : gC.filter(function(h) {
    return ys(h) === c;
  }) : Bl, p = d.filter(function(h) {
    return u.indexOf(h) >= 0;
  });
  p.length === 0 && (p = d);
  var f = p.reduce(function(h, g) {
    return h[g] = sl(e, {
      placement: g,
      boundary: o,
      rootBoundary: i,
      padding: s
    })[lr(g)], h;
  }, {});
  return Object.keys(f).sort(function(h, g) {
    return f[h] - f[g];
  });
}
function Y4(e) {
  if (lr(e) === _0)
    return [];
  var t = Ku(e);
  return [vC(e), t, vC(t)];
}
function K4(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, i = o === void 0 ? !0 : o, s = n.altAxis, a = s === void 0 ? !0 : s, l = n.fallbackPlacements, u = n.padding, c = n.boundary, d = n.rootBoundary, p = n.altBoundary, f = n.flipVariations, h = f === void 0 ? !0 : f, g = n.allowedAutoPlacements, x = t.options.placement, y = lr(x), m = y === x, v = l || (m || !h ? [Ku(x)] : Y4(x)), C = [x].concat(v).reduce(function(J, se) {
      return J.concat(lr(se) === _0 ? V4(t, {
        placement: se,
        boundary: c,
        rootBoundary: d,
        padding: u,
        flipVariations: h,
        allowedAutoPlacements: g
      }) : se);
    }, []), S = t.rects.reference, b = t.rects.popper, I = /* @__PURE__ */ new Map(), T = !0, L = C[0], O = 0; O < C.length; O++) {
      var _ = C[O], w = lr(_), A = ys(_) === hs, P = [Zt, An].indexOf(w) >= 0, M = P ? "width" : "height", $ = sl(t, {
        placement: _,
        boundary: c,
        rootBoundary: d,
        altBoundary: p,
        padding: u
      }), D = P ? A ? Rn : Jt : A ? An : Zt;
      S[M] > b[M] && (D = Ku(D));
      var R = Ku(D), F = [];
      if (i && F.push($[w] <= 0), a && F.push($[D] <= 0, $[R] <= 0), F.every(function(J) {
        return J;
      })) {
        L = _, T = !1;
        break;
      }
      I.set(_, F);
    }
    if (T)
      for (var z = h ? 3 : 1, H = function(se) {
        var ee = C.find(function(ne) {
          var Z = I.get(ne);
          if (Z)
            return Z.slice(0, se).every(function(U) {
              return U;
            });
        });
        if (ee)
          return L = ee, "break";
      }, W = z; W > 0; W--) {
        var q = H(W);
        if (q === "break") break;
      }
    t.placement !== L && (t.modifiersData[r]._skip = !0, t.placement = L, t.reset = !0);
  }
}
const X4 = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: K4,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function CC(e, t, n) {
  return n === void 0 && (n = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - n.y,
    right: e.right - t.width + n.x,
    bottom: e.bottom - t.height + n.y,
    left: e.left - t.width - n.x
  };
}
function wC(e) {
  return [Zt, Rn, An, Jt].some(function(t) {
    return e[t] >= 0;
  });
}
function q4(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, i = t.modifiersData.preventOverflow, s = sl(t, {
    elementContext: "reference"
  }), a = sl(t, {
    altBoundary: !0
  }), l = CC(s, r), u = CC(a, o, i), c = wC(l), d = wC(u);
  t.modifiersData[n] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: u,
    isReferenceHidden: c,
    hasPopperEscaped: d
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": c,
    "data-popper-escaped": d
  });
}
const Q4 = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: q4
};
function Z4(e, t, n) {
  var r = lr(e), o = [Jt, Zt].indexOf(r) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, s = i[0], a = i[1];
  return s = s || 0, a = (a || 0) * o, [Jt, Rn].indexOf(r) >= 0 ? {
    x: a,
    y: s
  } : {
    x: s,
    y: a
  };
}
function J4(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, i = o === void 0 ? [0, 0] : o, s = IE.reduce(function(c, d) {
    return c[d] = Z4(d, t.rects, i), c;
  }, {}), a = s[t.placement], l = a.x, u = a.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = s;
}
const ej = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: J4
};
function tj(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = _E({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const nj = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: tj,
  data: {}
};
function rj(e) {
  return e === "x" ? "y" : "x";
}
function oj(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, i = o === void 0 ? !0 : o, s = n.altAxis, a = s === void 0 ? !1 : s, l = n.boundary, u = n.rootBoundary, c = n.altBoundary, d = n.padding, p = n.tether, f = p === void 0 ? !0 : p, h = n.tetherOffset, g = h === void 0 ? 0 : h, x = sl(t, {
    boundary: l,
    rootBoundary: u,
    padding: d,
    altBoundary: c
  }), y = lr(t.placement), m = ys(t.placement), v = !m, C = L0(y), S = rj(C), b = t.modifiersData.popperOffsets, I = t.rects.reference, T = t.rects.popper, L = typeof g == "function" ? g(Object.assign({}, t.rects, {
    placement: t.placement
  })) : g, O = typeof L == "number" ? {
    mainAxis: L,
    altAxis: L
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, L), _ = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, w = {
    x: 0,
    y: 0
  };
  if (b) {
    if (i) {
      var A, P = C === "y" ? Zt : Jt, M = C === "y" ? An : Rn, $ = C === "y" ? "height" : "width", D = b[C], R = D + x[P], F = D - x[M], z = f ? -T[$] / 2 : 0, H = m === hs ? I[$] : T[$], W = m === hs ? -T[$] : -I[$], q = t.elements.arrow, J = f && q ? O0(q) : {
        width: 0,
        height: 0
      }, se = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : PE(), ee = se[P], ne = se[M], Z = Ca(0, I[$], J[$]), U = v ? I[$] / 2 - z - Z - ee - O.mainAxis : H - Z - ee - O.mainAxis, X = v ? -I[$] / 2 + z + Z + ne + O.mainAxis : W + Z + ne + O.mainAxis, re = t.elements.arrow && jl(t.elements.arrow), j = re ? C === "y" ? re.clientTop || 0 : re.clientLeft || 0 : 0, ae = (A = _ == null ? void 0 : _[C]) != null ? A : 0, Q = D + U - ae - j, we = D + X - ae, he = Ca(f ? Zc(R, Q) : R, D, f ? Ko(F, we) : F);
      b[C] = he, w[C] = he - D;
    }
    if (a) {
      var be, wt = C === "x" ? Zt : Jt, je = C === "x" ? An : Rn, Lt = b[S], Nt = S === "y" ? "height" : "width", on = Lt + x[wt], rt = Lt - x[je], gr = [Zt, Jt].indexOf(y) !== -1, Kn = (be = _ == null ? void 0 : _[S]) != null ? be : 0, Tt = gr ? on : Lt - I[Nt] - T[Nt] - Kn + O.altAxis, Ge = gr ? Lt + I[Nt] + T[Nt] - Kn - O.altAxis : rt, ot = f && gr ? P4(Tt, Lt, Ge) : Ca(f ? Tt : on, Lt, f ? Ge : rt);
      b[S] = ot, w[S] = ot - Lt;
    }
    t.modifiersData[r] = w;
  }
}
const ij = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: oj,
  requiresIfExists: ["offset"]
};
function sj(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function aj(e) {
  return e === fn(e) || !Tn(e) ? N0(e) : sj(e);
}
function lj(e) {
  var t = e.getBoundingClientRect(), n = gs(t.width) / e.offsetWidth || 1, r = gs(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function uj(e, t, n) {
  n === void 0 && (n = !1);
  var r = Tn(t), o = Tn(t) && lj(t), i = ko(t), s = ms(e, o, n), a = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((pr(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  F0(i)) && (a = aj(t)), Tn(t) ? (l = ms(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : i && (l.x = D0(i))), {
    x: s.left + a.scrollLeft - l.x,
    y: s.top + a.scrollTop - l.y,
    width: s.width,
    height: s.height
  };
}
function cj(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(i) {
    t.set(i.name, i);
  });
  function o(i) {
    n.add(i.name);
    var s = [].concat(i.requires || [], i.requiresIfExists || []);
    s.forEach(function(a) {
      if (!n.has(a)) {
        var l = t.get(a);
        l && o(l);
      }
    }), r.push(i);
  }
  return e.forEach(function(i) {
    n.has(i.name) || o(i);
  }), r;
}
function dj(e) {
  var t = cj(e);
  return b4.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function fj(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function pj(e) {
  var t = e.reduce(function(n, r) {
    var o = n[r.name];
    return n[r.name] = o ? Object.assign({}, o, r, {
      options: Object.assign({}, o.options, r.options),
      data: Object.assign({}, o.data, r.data)
    }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var bC = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function SC() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function hj(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, i = o === void 0 ? bC : o;
  return function(a, l, u) {
    u === void 0 && (u = i);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, bC, i),
      modifiersData: {},
      elements: {
        reference: a,
        popper: l
      },
      attributes: {},
      styles: {}
    }, d = [], p = !1, f = {
      state: c,
      setOptions: function(y) {
        var m = typeof y == "function" ? y(c.options) : y;
        g(), c.options = Object.assign({}, i, c.options, m), c.scrollParents = {
          reference: ti(a) ? wa(a) : a.contextElement ? wa(a.contextElement) : [],
          popper: wa(l)
        };
        var v = dj(pj([].concat(r, c.options.modifiers)));
        return c.orderedModifiers = v.filter(function(C) {
          return C.enabled;
        }), h(), f.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!p) {
          var y = c.elements, m = y.reference, v = y.popper;
          if (SC(m, v)) {
            c.rects = {
              reference: uj(m, jl(v), c.options.strategy === "fixed"),
              popper: O0(v)
            }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(O) {
              return c.modifiersData[O.name] = Object.assign({}, O.data);
            });
            for (var C = 0; C < c.orderedModifiers.length; C++) {
              if (c.reset === !0) {
                c.reset = !1, C = -1;
                continue;
              }
              var S = c.orderedModifiers[C], b = S.fn, I = S.options, T = I === void 0 ? {} : I, L = S.name;
              typeof b == "function" && (c = b({
                state: c,
                options: T,
                name: L,
                instance: f
              }) || c);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: fj(function() {
        return new Promise(function(x) {
          f.forceUpdate(), x(c);
        });
      }),
      destroy: function() {
        g(), p = !0;
      }
    };
    if (!SC(a, l))
      return f;
    f.setOptions(u).then(function(x) {
      !p && u.onFirstUpdate && u.onFirstUpdate(x);
    });
    function h() {
      c.orderedModifiers.forEach(function(x) {
        var y = x.name, m = x.options, v = m === void 0 ? {} : m, C = x.effect;
        if (typeof C == "function") {
          var S = C({
            state: c,
            name: y,
            instance: f,
            options: v
          }), b = function() {
          };
          d.push(S || b);
        }
      });
    }
    function g() {
      d.forEach(function(x) {
        return x();
      }), d = [];
    }
    return f;
  };
}
var gj = [F4, nj, N4, I4, ej, X4, ij, _4, Q4], mj = /* @__PURE__ */ hj({
  defaultModifiers: gj
});
function Rg(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function Ul(e) {
  var t;
  return parseInt(k.version, 10) >= 19 ? ((t = e == null ? void 0 : e.props) == null ? void 0 : t.ref) || null : (e == null ? void 0 : e.ref) || null;
}
function yj(e) {
  return typeof e == "function" ? e() : e;
}
const $E = /* @__PURE__ */ k.forwardRef(function(t, n) {
  const {
    children: r,
    container: o,
    disablePortal: i = !1
  } = t, [s, a] = k.useState(null), l = Ze(/* @__PURE__ */ k.isValidElement(r) ? Ul(r) : null, n);
  if (me(() => {
    i || a(yj(o) || document.body);
  }, [o, i]), me(() => {
    if (s && !i)
      return Rg(n, s), () => {
        Rg(n, null);
      };
  }, [n, s, i]), i) {
    if (/* @__PURE__ */ k.isValidElement(r)) {
      const u = {
        ref: l
      };
      return /* @__PURE__ */ k.cloneElement(r, u);
    }
    return r;
  }
  return s && /* @__PURE__ */ Nm.createPortal(r, s);
});
function vj(e) {
  return Ce("MuiPopper", e);
}
ce("MuiPopper", ["root"]);
function xj(e, t) {
  if (t === "ltr")
    return e;
  switch (e) {
    case "bottom-end":
      return "bottom-start";
    case "bottom-start":
      return "bottom-end";
    case "top-end":
      return "top-start";
    case "top-start":
      return "top-end";
    default:
      return e;
  }
}
function OE(e) {
  return typeof e == "function" ? e() : e;
}
function Cj(e) {
  return e.nodeType !== void 0;
}
const wj = (e) => {
  const {
    classes: t
  } = e;
  return ve({
    root: ["root"]
  }, vj, t);
}, bj = {}, Sj = /* @__PURE__ */ k.forwardRef(function(t, n) {
  const {
    anchorEl: r,
    children: o,
    direction: i,
    disablePortal: s,
    modifiers: a,
    open: l,
    placement: u,
    popperOptions: c,
    popperRef: d,
    slotProps: p = {},
    slots: f = {},
    TransitionProps: h,
    // @ts-ignore internal logic
    ownerState: g,
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
    ...x
  } = t, y = k.useRef(null), m = Ze(y, n), v = k.useRef(null), C = Ze(v, d), S = k.useRef(C);
  me(() => {
    S.current = C;
  }, [C]), k.useImperativeHandle(d, () => v.current, []);
  const b = xj(u, i), [I, T] = k.useState(b), L = k.useMemo(() => OE(r), [r]);
  k.useEffect(() => {
    v.current && v.current.forceUpdate();
  }), me(() => {
    if (!L || !l)
      return;
    const P = (R) => {
      T(R.placement);
    };
    let M = [{
      name: "preventOverflow",
      options: {
        altBoundary: s
      }
    }, {
      name: "flip",
      options: {
        altBoundary: s
      }
    }, {
      name: "onUpdate",
      enabled: !0,
      phase: "afterWrite",
      fn: ({
        state: R
      }) => {
        P(R);
      }
    }];
    a != null && (M = M.concat(a)), c && c.modifiers != null && (M = M.concat(c.modifiers));
    const $ = mj(L, y.current, {
      placement: b,
      ...c,
      modifiers: M
    });
    S.current($);
    const D = y.current;
    return () => {
      if (D) {
        const {
          style: R
        } = D, F = R.position, z = R.top, H = R.left, W = R.transform;
        $.destroy(), R.position = F, R.top = z, R.left = H, R.transform = W;
      } else
        $.destroy();
      S.current(null);
    };
  }, [L, s, a, l, c, b]);
  const O = {
    placement: I
  };
  h !== null && (O.TransitionProps = h);
  const _ = wj(t), w = f.root ?? "div", A = dr({
    elementType: w,
    externalSlotProps: p.root,
    externalForwardedProps: x,
    additionalProps: {
      role: "tooltip",
      ref: m
    },
    ownerState: t,
    className: _.root
  });
  return /* @__PURE__ */ E.jsx(w, {
    ...A,
    children: typeof o == "function" ? o(O) : o
  });
}), kj = /* @__PURE__ */ k.forwardRef(function(t, n) {
  const {
    anchorEl: r,
    children: o,
    container: i,
    direction: s = "ltr",
    disablePortal: a = !1,
    keepMounted: l = !1,
    modifiers: u,
    open: c,
    placement: d = "bottom",
    popperOptions: p = bj,
    popperRef: f,
    style: h,
    transition: g = !1,
    slotProps: x = {},
    slots: y = {},
    ...m
  } = t, [v, C] = k.useState(!0), S = () => {
    C(!1);
  }, b = () => {
    C(!0);
  };
  if (!l && !c && (!g || v))
    return null;
  let I;
  if (i)
    I = i;
  else if (r) {
    const O = OE(r);
    I = O && Cj(O) ? gt(O).body : gt(null).body;
  }
  const T = !c && l && (!g || v) ? "none" : void 0, L = g ? {
    in: c,
    onEnter: S,
    onExited: b
  } : void 0;
  return /* @__PURE__ */ E.jsx($E, {
    disablePortal: a,
    container: I,
    children: /* @__PURE__ */ E.jsx(Sj, {
      anchorEl: r,
      direction: s,
      disablePortal: a,
      modifiers: u,
      ref: n,
      open: g ? !v : c,
      placement: d,
      popperOptions: p,
      popperRef: f,
      slotProps: x,
      slots: y,
      ...m,
      style: {
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display: T,
        ...h
      },
      TransitionProps: L,
      children: o
    })
  });
}), Ij = K(kj, {
  name: "MuiPopper",
  slot: "Root"
})({}), Tj = /* @__PURE__ */ k.forwardRef(function(t, n) {
  const r = ks(), o = Be({
    props: t,
    name: "MuiPopper"
  }), {
    anchorEl: i,
    component: s,
    container: a,
    disablePortal: l,
    keepMounted: u,
    modifiers: c,
    open: d,
    placement: p,
    popperOptions: f,
    popperRef: h,
    transition: g,
    slots: x,
    slotProps: y,
    ...m
  } = o, v = {
    anchorEl: i,
    container: a,
    disablePortal: l,
    keepMounted: u,
    modifiers: c,
    open: d,
    placement: p,
    popperOptions: f,
    popperRef: h,
    transition: g,
    ...m
  };
  return /* @__PURE__ */ E.jsx(Ij, {
    as: s,
    direction: r ? "rtl" : "ltr",
    slots: x,
    slotProps: y,
    ...v,
    ref: n
  });
});
function Ej(e) {
  const {
    children: t,
    defer: n = !1,
    fallback: r = null
  } = e, [o, i] = k.useState(!1);
  return me(() => {
    n || i(!0);
  }, [n]), k.useEffect(() => {
    n && i(!0);
  }, [n]), o ? t : r;
}
function Pj(e) {
  let t, n;
  const r = () => {
    n = null, e(...t);
  };
  function o(...i) {
    t = i, n || (n = requestAnimationFrame(r));
  }
  return o.clear = () => {
    n && (cancelAnimationFrame(n), n = null);
  }, o;
}
function Mj() {
  const e = fe(), t = e.use(CT), n = e.use(Ln);
  return t !== void 0 ? "polar" : n !== void 0 ? "cartesian" : "none";
}
const Aj = ["trigger", "position", "anchor", "classes", "children"], kC = () => !1, Rj = () => null;
function _j(e, t, n) {
  return n ? kC : e === "item" ? GF : t === "polar" ? bz : t === "cartesian" ? $F : kC;
}
const $j = {
  item: "node",
  axis: "chart",
  none: "pointer"
}, Oj = (e, t) => {
  switch (e) {
    case "node":
      return t;
    case "chart":
      return OF;
    default:
      return Rj;
  }
}, Lj = K(Tj, {
  name: "MuiChartsTooltip",
  slot: "Root"
})(({
  theme: e
}) => ({
  pointerEvents: "none",
  zIndex: e.zIndex.modal
}));
function Nj(e) {
  var $;
  const t = nn({
    props: e,
    name: "MuiChartsTooltipContainer"
  }), {
    trigger: n = "axis",
    position: r,
    anchor: o = "pointer",
    classes: i,
    children: s
  } = t, a = xe(t, Aj), l = fe(), u = y0(), [c, d] = k.useState(null), p = ai(i), f = l.use(dF), h = l4(), g = k.useRef(null), x = Cl(() => ({
    x: 0,
    y: 0
  })), y = Mj(), m = l.use(EF), v = l.use(_j(n, y, m)), b = l.use(jr) === "keyboard" || f === null ? $j[n] : o, I = l.use(Af), T = l.use(nt), L = I && (($ = T[I.type]) == null ? void 0 : $.selectorTooltipItemPosition) || YF, O = l.use(Oj(b, L), t.position), _ = O !== null;
  k.useEffect(() => {
    const D = u.current;
    if (D === null)
      return () => {
      };
    if (_)
      return;
    const R = Pj((z, H) => {
      var W;
      x.current = {
        x: z,
        y: H
      }, (W = g.current) == null || W.update();
    }), F = (z) => {
      R(z.clientX, z.clientY);
    };
    return D.addEventListener("pointermove", F), D.addEventListener("pointerenter", F), () => {
      D.removeEventListener("pointermove", F), D.removeEventListener("pointerenter", F), R.clear();
    };
  }, [u, x, _]), me(() => {
    var D;
    _ && ((D = g.current) == null || D.update());
  }, [_, O == null ? void 0 : O.x, O == null ? void 0 : O.y]);
  const w = k.useMemo(() => ({
    getBoundingClientRect: () => ({
      x: x.current.x,
      y: x.current.y,
      top: x.current.y,
      left: x.current.x,
      right: x.current.x,
      bottom: x.current.y,
      width: 0,
      height: 0,
      toJSON: () => ""
    })
  }), [x]), A = f === "mouse" || h, P = f === "touch" || !h, M = k.useMemo(() => [
    {
      name: "offset",
      options: {
        offset: () => P && !_ ? [0, 64] : [0, 8]
      }
    },
    ...A ? [] : [{
      name: "flip",
      options: {
        fallbackPlacements: ["top-end", "top-start", "bottom-end", "bottom"]
      }
    }],
    // Keep default behavior
    {
      name: "preventOverflow",
      options: {
        altAxis: !0
      }
    }
  ], [A, _, P]);
  return n === "none" ? null : /* @__PURE__ */ E.jsxs(k.Fragment, {
    children: [u.current && /* @__PURE__ */ Nm.createPortal(/* @__PURE__ */ E.jsx("div", {
      ref: d,
      style: {
        position: "absolute",
        display: "hidden",
        left: (O == null ? void 0 : O.x) ?? 0,
        top: (O == null ? void 0 : O.y) ?? 0,
        pointerEvents: "none",
        opacity: 0,
        // TODO: Is this true for a div as well?
        // On ios a rect with no width/height is not detectable by the popper.js
        width: 1,
        height: 1
      }
    }), u.current), /* @__PURE__ */ E.jsx(Ej, {
      children: v && /* @__PURE__ */ k.createElement(Lj, N({}, a, {
        // The key is here to make sure the tooltip uses the new anchor immediately.
        key: O ? "charts-anchored" : "charts-pointer",
        className: p == null ? void 0 : p.root,
        open: v,
        placement: a.placement ?? r ?? (!_ && A ? "right-start" : "top"),
        popperRef: g,
        anchorEl: O ? c : w,
        modifiers: M,
        container: a.container ?? u.current,
        popperOptions: N({}, a.popperOptions, {
          strategy: "fixed"
        })
      }), s)
    })]
  });
}
const Dj = ["classes", "trigger", "sort"];
function Fj(e) {
  const {
    classes: t,
    trigger: n = "axis",
    sort: r
  } = e, o = xe(e, Dj), i = ai(t);
  return /* @__PURE__ */ E.jsx(Nj, N({}, o, {
    trigger: n,
    classes: t,
    children: n === "axis" ? /* @__PURE__ */ E.jsx(c4, {
      classes: i,
      sort: r
    }) : /* @__PURE__ */ E.jsx(t4, {
      classes: i
    })
  }));
}
const zj = (e) => ({
  type: "series",
  color: e.color,
  label: e.label,
  seriesId: e.seriesId,
  dataIndex: e.dataIndex
});
function Bj(e) {
  return Ce("MuiChartsLegend", e);
}
const jj = (e) => {
  const {
    classes: t,
    direction: n
  } = e;
  return ve({
    root: ["root", n],
    item: ["item"],
    mark: ["mark"],
    label: ["label"],
    series: ["series"],
    hidden: ["hidden"]
  }, Bj, t);
}, Jp = ce("MuiChartsLegend", ["root", "item", "series", "mark", "label", "vertical", "horizontal", "hidden"]), Uj = ["slots", "slotProps"], Hj = ["ownerState"], Wj = (e, t, n, r) => {
  function o(i, s) {
    var S;
    const a = nn({
      props: i,
      // eslint-disable-next-line mui/material-ui-name-matches-component-name
      name: e
    }), l = typeof n.defaultProps == "function" ? n.defaultProps(a) : n.defaultProps ?? {}, u = co(l, a), c = u, {
      slots: d,
      slotProps: p
    } = c, f = xe(c, Uj), h = tn(), g = (S = n.classesResolver) == null ? void 0 : S.call(n, u, h), x = (d == null ? void 0 : d[t]) ?? r, y = n.propagateSlots && !(d != null && d[t]), m = dr({
      elementType: x,
      externalSlotProps: p == null ? void 0 : p[t],
      additionalProps: N({}, f, {
        classes: g
      }, y && {
        slots: d,
        slotProps: p
      }),
      ownerState: {}
    }), v = xe(m, Hj), C = N({}, v);
    for (const b of n.omitProps ?? [])
      delete C[b];
    return /* @__PURE__ */ E.jsx(x, N({}, C, {
      ref: s
    }));
  }
  return /* @__PURE__ */ k.forwardRef(o);
};
function Gj(e) {
  return Ce("MuiChartsLabel", e);
}
ce("MuiChartsLabel", ["root"]);
const Vj = (e) => ve({
  root: ["root"]
}, Gj, e.classes), Yj = ["children", "className", "classes"], IC = SE("MuiChartsLabel", {
  classesResolver: Vj
}, function(t, n) {
  const {
    children: r,
    className: o,
    classes: i
  } = t, s = xe(t, Yj);
  return /* @__PURE__ */ E.jsx("span", N({
    className: oe(i == null ? void 0 : i.root, o),
    ref: n
  }, s, {
    children: r
  }));
}), Kj = ["direction", "onItemClick", "className", "classes", "toggleVisibilityOnClick"], Xj = K("ul", {
  name: "MuiChartsLegend",
  slot: "Root"
})(({
  ownerState: e,
  theme: t
}) => N({}, t.typography.caption, {
  color: (t.vars || t).palette.text.primary,
  lineHeight: "100%",
  display: "flex",
  flexDirection: e.direction === "vertical" ? "column" : "row",
  alignItems: e.direction === "vertical" ? void 0 : "center",
  flexShrink: 0,
  gap: t.spacing(2),
  listStyleType: "none",
  paddingInlineStart: 0,
  marginBlock: t.spacing(1),
  marginInline: t.spacing(1),
  flexWrap: "wrap",
  li: {
    display: e.direction === "horizontal" ? "inline-flex" : void 0
  },
  [`button.${Jp.series}`]: {
    // Reset button styles
    background: "none",
    border: "none",
    padding: 0,
    fontFamily: "inherit",
    fontWeight: "inherit",
    fontSize: "inherit",
    letterSpacing: "inherit",
    color: "inherit"
  },
  [`& .${Jp.series}`]: {
    display: e.direction === "vertical" ? "flex" : "inline-flex",
    alignItems: "center",
    gap: t.spacing(1),
    cursor: e.onItemClick || e.toggleVisibilityOnClick ? "pointer" : "default",
    [`&.${Jp.hidden}`]: {
      opacity: 0.5
    }
  },
  gridArea: "legend"
})), qj = Wj("MuiChartsLegend", "legend", {
  defaultProps: {
    direction: "horizontal"
  },
  // @ts-expect-error position is used only in the slots, but it is passed to the SVG wrapper.
  // We omit it here to avoid passing to slots.
  omitProps: ["position"],
  classesResolver: jj
}, /* @__PURE__ */ k.forwardRef(function(t, n) {
  const r = Az(), {
    instance: o
  } = Ct(), s = fe().use(By), {
    onItemClick: a,
    className: l,
    classes: u,
    toggleVisibilityOnClick: c
  } = t, d = xe(t, Kj), p = !!(a || c), f = de((h, g) => (x) => {
    a && h && a(x, zj(h), g), c && o.toggleItemVisibility({
      type: h.type,
      seriesId: h.seriesId,
      dataIndex: h.dataIndex
    });
  });
  return r.items.length === 0 ? null : /* @__PURE__ */ E.jsx(Xj, N({
    className: oe(u == null ? void 0 : u.root, l),
    ref: n
  }, d, {
    ownerState: t,
    children: r.items.map((h, g) => {
      const x = s({
        type: h.type,
        seriesId: h.seriesId,
        dataIndex: h.dataIndex
      });
      return /* @__PURE__ */ E.jsx("li", {
        className: u == null ? void 0 : u.item,
        "data-series": h.seriesId,
        "data-index": h.dataIndex,
        children: p ? /* @__PURE__ */ E.jsxs("button", {
          className: oe(u == null ? void 0 : u.series, !x && (u == null ? void 0 : u.hidden)),
          onClick: f(h, g),
          type: "button",
          children: [/* @__PURE__ */ E.jsx(ol, {
            className: u == null ? void 0 : u.mark,
            color: h.color,
            type: h.markType,
            markShape: h.markShape
          }), /* @__PURE__ */ E.jsx(IC, {
            className: u == null ? void 0 : u.label,
            children: h.label
          })]
        }) : /* @__PURE__ */ E.jsxs("div", {
          className: oe(u == null ? void 0 : u.series, !x && (u == null ? void 0 : u.hidden)),
          children: [/* @__PURE__ */ E.jsx(ol, {
            className: u == null ? void 0 : u.mark,
            color: h.color,
            type: h.markType,
            markShape: h.markShape
          }), /* @__PURE__ */ E.jsx(IC, {
            className: u == null ? void 0 : u.label,
            children: h.label
          })]
        })
      }, `${h.seriesId}-${h.dataIndex}`);
    })
  }));
}));
function Qj(e) {
  return Ce("MuiChartsAxisHighlight", e);
}
ce("MuiChartsAxisHighlight", ["root"]);
const Jc = K("path", {
  name: "MuiChartsAxisHighlight",
  slot: "Root"
})(({
  theme: e
}) => ({
  pointerEvents: "none",
  variants: [{
    props: {
      axisHighlight: "band"
    },
    style: N({
      fill: "white",
      fillOpacity: 0.1
    }, e.applyStyles("light", {
      fill: "gray"
    }))
  }, {
    props: {
      axisHighlight: "line"
    },
    style: N({
      strokeDasharray: "5 2",
      stroke: "#ffffff"
    }, e.applyStyles("light", {
      stroke: "#000000"
    }))
  }]
}));
function Zj(e) {
  const {
    type: t,
    classes: n
  } = e, {
    left: r,
    width: o
  } = Nn(), i = fe(), s = i.use(MF), a = i.use(xt);
  return s.length === 0 ? null : s.map(({
    axisId: l,
    value: u
  }) => {
    const d = a.axis[l].scale, p = fr(d), f = t === "band" && u !== null && et(d);
    return /* @__PURE__ */ E.jsxs(k.Fragment, {
      children: [f && d(u) !== void 0 && /* @__PURE__ */ E.jsx(Jc, {
        d: `M ${r} ${d(u) - (d.step() - d.bandwidth()) / 2} l 0 ${d.step()} l ${o} 0 l 0 ${-d.step()} Z`,
        className: n.root,
        ownerState: {
          axisHighlight: "band"
        }
      }), t === "line" && u !== null && /* @__PURE__ */ E.jsx(Jc, {
        d: `M ${r} ${p(u)} L ${r + o} ${p(u)}`,
        className: n.root,
        ownerState: {
          axisHighlight: "line"
        }
      })]
    }, `${l}-${u}`);
  });
}
function Jj(e) {
  const {
    type: t,
    classes: n
  } = e, {
    top: r,
    height: o
  } = Nn(), i = fe(), s = i.use(PF), a = i.use(vt);
  return s.length === 0 ? null : s.map(({
    axisId: l,
    value: u
  }) => {
    const d = a.axis[l].scale, p = fr(d), f = t === "band" && u !== null && et(d);
    return /* @__PURE__ */ E.jsxs(k.Fragment, {
      children: [f && d(u) !== void 0 && /* @__PURE__ */ E.jsx(Jc, {
        d: `M ${d(u) - (d.step() - d.bandwidth()) / 2} ${r} l ${d.step()} 0 l 0 ${o} l ${-d.step()} 0 Z`,
        className: n.root,
        ownerState: {
          axisHighlight: "band"
        }
      }), t === "line" && u !== null && /* @__PURE__ */ E.jsx(Jc, {
        d: `M ${p(u)} ${r} L ${p(u)} ${r + o}`,
        className: n.root,
        ownerState: {
          axisHighlight: "line"
        }
      })]
    }, `${l}-${u}`);
  });
}
const e6 = () => ve({
  root: ["root"]
}, Qj);
function t6(e) {
  const {
    x: t,
    y: n
  } = e, r = e6();
  return /* @__PURE__ */ E.jsxs(k.Fragment, {
    children: [t && t !== "none" && /* @__PURE__ */ E.jsx(Jj, {
      type: t,
      classes: r
    }), n && n !== "none" && /* @__PURE__ */ E.jsx(Zj, {
      type: n,
      classes: r
    })]
  });
}
function n6(e) {
  const {
    id: t,
    offset: n
  } = e, {
    left: r,
    top: o,
    width: i,
    height: s
  } = Nn(), a = N({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }, n);
  return /* @__PURE__ */ E.jsx("clipPath", {
    id: t,
    children: /* @__PURE__ */ E.jsx("rect", {
      x: r - a.left,
      y: o - a.top,
      width: i + a.left + a.right,
      height: s + a.top + a.bottom
    })
  });
}
const r6 = ["x", "y", "seriesId", "color", "shape"];
function o6(e) {
  const {
    x: t,
    y: n,
    color: r,
    shape: o
  } = e, i = xe(e, r6), s = So(), a = o === "circle" ? "circle" : "path", l = o === "circle" ? {
    cx: 0,
    cy: 0,
    r: i.r === void 0 ? 5 : i.r
  } : {
    d: b0(w0[M0(o)])()
  }, u = Ik > 18 ? {
    transformOrigin: `${t} ${n}`
  } : {
    "transform-origin": `${t} ${n}`
  };
  return /* @__PURE__ */ E.jsx(a, N({
    pointerEvents: "none",
    className: s.highlight,
    transform: `translate(${t} ${n})`,
    fill: r
  }, u, l, i));
}
const i6 = ["slots", "slotProps"];
function s6(e) {
  const {
    slots: t,
    slotProps: n
  } = e, r = xe(e, i6), o = zl(), {
    xAxis: i,
    xAxisIds: s
  } = $t(), {
    yAxis: a,
    yAxisIds: l
  } = Ot(), {
    instance: u
  } = Ct(), d = fe().use(dT);
  if (o === void 0)
    return null;
  const {
    series: p,
    stackingGroups: f
  } = o, h = s[0], g = l[0], x = f.some(({
    ids: v
  }) => v.some((C) => p[C].showMark === "start" || p[C].showMark === "end"));
  if (d.length === 0 && !x)
    return null;
  const y = /* @__PURE__ */ new Map();
  d.forEach(({
    axisId: v,
    dataIndex: C
  }) => {
    y.set(v, C);
  });
  const m = (t == null ? void 0 : t.lineHighlight) ?? o6;
  return /* @__PURE__ */ E.jsx("g", N({}, r, {
    children: f.flatMap(({
      ids: v
    }) => v.flatMap((C) => {
      const {
        xAxisId: S = h,
        yAxisId: b = g,
        visibleStackedData: I,
        data: T,
        disableHighlight: L,
        showMark: O,
        shape: _ = "circle",
        hidden: w
      } = p[C];
      if (w)
        return null;
      const A = L ? void 0 : y.get(S), P = O === "start" || O === "end" ? a6(T, O) : void 0, M = A ?? P;
      if (M === void 0 || T[M] == null)
        return null;
      const $ = fr(i[S].scale), D = a[b].scale, R = i[S].data;
      if (R === void 0)
        throw new Error(ke(10, S === fy ? "The first `xAxis`" : `The x-axis with id "${S}"`));
      const F = $(R[M]), z = D(I[M][1]);
      if (!u.isPointInside(F, z))
        return null;
      const H = A0(p[C], i[S], a[b]);
      return /* @__PURE__ */ E.jsx(m, N({
        seriesId: C,
        color: H(M),
        x: F,
        y: z,
        shape: _
      }, n == null ? void 0 : n.lineHighlight), `${C}`);
    }))
  }));
}
function a6(e, t) {
  if (t === "start") {
    const r = e.findIndex((o) => o != null);
    return r < 0 ? void 0 : r;
  }
  const n = e.findLastIndex((r) => r != null);
  return n < 0 ? void 0 : n;
}
function l6(e) {
  return Ce("MuiChartsGrid", e);
}
const TC = ce("MuiChartsGrid", ["root", "line", "horizontalLine", "verticalLine"]), u6 = K("g", {
  name: "MuiChartsGrid",
  slot: "Root",
  overridesResolver: (e, t) => [{
    [`& .${TC.verticalLine}`]: t.verticalLine
  }, {
    [`& .${TC.horizontalLine}`]: t.horizontalLine
  }, t.root]
})({}), LE = K("line", {
  name: "MuiChartsGrid",
  slot: "Line"
})(({
  theme: e
}) => ({
  stroke: (e.vars || e).palette.divider,
  shapeRendering: "crispEdges",
  strokeWidth: 1
}));
function c6(e) {
  const {
    instance: t
  } = Ct(), {
    axis: n,
    start: r,
    end: o,
    classes: i
  } = e, {
    scale: s,
    tickNumber: a,
    tickInterval: l,
    tickSpacing: u
  } = n, c = jf({
    scale: s,
    tickNumber: a,
    tickInterval: l,
    tickSpacing: u,
    direction: "x",
    ordinalTimeTicks: "ordinalTimeTicks" in n ? n.ordinalTimeTicks : void 0
  });
  return /* @__PURE__ */ E.jsx(k.Fragment, {
    children: c.map(({
      value: d,
      offset: p
    }) => {
      var f;
      return t.isXInside(p) ? /* @__PURE__ */ E.jsx(LE, {
        y1: r,
        y2: o,
        x1: p,
        x2: p,
        className: i.verticalLine
      }, `vertical-${((f = d == null ? void 0 : d.getTime) == null ? void 0 : f.call(d)) ?? d}`) : null;
    })
  });
}
function d6(e) {
  const {
    instance: t
  } = Ct(), {
    axis: n,
    start: r,
    end: o,
    classes: i
  } = e, {
    scale: s,
    tickNumber: a,
    tickInterval: l,
    tickSpacing: u
  } = n, c = jf({
    scale: s,
    tickNumber: a,
    tickInterval: l,
    tickSpacing: u,
    direction: "y",
    ordinalTimeTicks: "ordinalTimeTicks" in n ? n.ordinalTimeTicks : void 0
  });
  return /* @__PURE__ */ E.jsx(k.Fragment, {
    children: c.map(({
      value: d,
      offset: p
    }) => {
      var f;
      return t.isYInside(p) ? /* @__PURE__ */ E.jsx(LE, {
        y1: p,
        y2: p,
        x1: r,
        x2: o,
        className: i.horizontalLine
      }, `horizontal-${((f = d == null ? void 0 : d.getTime) == null ? void 0 : f.call(d)) ?? d}`) : null;
    })
  });
}
const f6 = ["className", "vertical", "horizontal"], p6 = ({
  classes: e
}) => ve({
  root: ["root"],
  verticalLine: ["line", "verticalLine"],
  horizontalLine: ["line", "horizontalLine"]
}, l6, e);
function h6(e) {
  const t = nn({
    props: e,
    name: "MuiChartsGrid"
  }), n = Nn(), {
    className: r,
    vertical: o,
    horizontal: i
  } = t, s = xe(t, f6), {
    xAxis: a,
    xAxisIds: l
  } = $t(), {
    yAxis: u,
    yAxisIds: c
  } = Ot(), d = p6(t), p = u[c[0]], f = a[l[0]];
  return /* @__PURE__ */ E.jsxs(u6, N({}, s, {
    className: oe(d.root, r),
    children: [o && /* @__PURE__ */ E.jsx(c6, {
      axis: f,
      start: n.top,
      end: n.height + n.top,
      classes: d
    }), i && /* @__PURE__ */ E.jsx(d6, {
      axis: p,
      start: n.left,
      end: n.width + n.left,
      classes: d
    })]
  }));
}
const NE = K("text", {
  slot: "internal",
  shouldForwardProp: void 0
})(({
  theme: e
}) => N({}, e.typography.body2, {
  stroke: "none",
  fill: (e.vars || e).palette.text.primary,
  shapeRendering: "crispEdges",
  textAnchor: "middle",
  dominantBaseline: "middle"
}));
function g6(e) {
  const {
    top: t,
    left: n,
    height: r,
    width: o
  } = Nn(), {
    localeText: i
  } = k0();
  return /* @__PURE__ */ E.jsx(NE, N({
    x: n + o / 2,
    y: t + r / 2
  }, e, {
    children: i.loading
  }));
}
function m6(e) {
  const {
    top: t,
    left: n,
    height: r,
    width: o
  } = Nn(), {
    localeText: i
  } = k0();
  return /* @__PURE__ */ E.jsx(NE, N({
    x: n + o / 2,
    y: t + r / 2
  }, e, {
    children: i.noData
  }));
}
function y6() {
  const e = Fl();
  return Object.values(e).every((t) => {
    if (!t)
      return !0;
    const {
      series: n,
      seriesOrder: r
    } = t;
    return r.every((o) => {
      const i = n[o];
      return i.type === "sankey" ? i.data.links.length === 0 : i.data.length === 0;
    });
  });
}
function v6(e) {
  var n, r, o, i;
  const t = y6();
  if (e.loading) {
    const s = ((n = e.slots) == null ? void 0 : n.loadingOverlay) ?? g6;
    return /* @__PURE__ */ E.jsx(s, N({}, (r = e.slotProps) == null ? void 0 : r.loadingOverlay));
  }
  if (t) {
    const s = ((o = e.slots) == null ? void 0 : o.noDataOverlay) ?? m6;
    return /* @__PURE__ */ E.jsx(s, N({}, (i = e.slotProps) == null ? void 0 : i.noDataOverlay));
  }
  return null;
}
const x6 = [Pl, Rl, _l, Al, Ps, Ol, vf, Mf], C6 = ["xAxis", "yAxis", "series", "width", "height", "margin", "colors", "dataset", "sx", "onAreaClick", "onLineClick", "onMarkClick", "axisHighlight", "disableLineItemHighlight", "hideLegend", "grid", "children", "slots", "slotProps", "skipAnimation", "loading", "highlightedItem", "onHighlightChange", "className", "showToolbar", "brushConfig"], w6 = (e) => {
  var ee, ne, Z, U, X;
  const {
    xAxis: t,
    yAxis: n,
    series: r,
    width: o,
    height: i,
    margin: s,
    colors: a,
    dataset: l,
    sx: u,
    onAreaClick: c,
    onLineClick: d,
    onMarkClick: p,
    axisHighlight: f,
    disableLineItemHighlight: h,
    grid: g,
    children: x,
    slots: y,
    slotProps: m,
    skipAnimation: v,
    loading: C,
    highlightedItem: S,
    onHighlightChange: b,
    className: I,
    brushConfig: T
  } = e, L = xe(e, C6), _ = `${po()}-clip-path`, w = k.useMemo(() => r.map((re) => N({
    disableHighlight: !!h,
    type: "line"
  }, re)), [h, r]), A = N({}, L, {
    series: w,
    width: o,
    height: i,
    margin: s,
    colors: a,
    dataset: l,
    xAxis: t ?? [{
      id: fy,
      scaleType: "point",
      data: Array.from({
        length: Math.max(...r.map((re) => (re.data ?? l ?? []).length))
      }, (re, j) => j)
    }],
    yAxis: n,
    highlightedItem: S,
    onHighlightChange: b,
    disableAxisListener: ((ee = m == null ? void 0 : m.tooltip) == null ? void 0 : ee.trigger) !== "axis" && (f == null ? void 0 : f.x) === "none" && (f == null ? void 0 : f.y) === "none",
    skipAnimation: v,
    brushConfig: T,
    plugins: x6
  }), P = {
    vertical: g == null ? void 0 : g.vertical,
    horizontal: g == null ? void 0 : g.horizontal
  }, M = {
    clipPath: `url(#${_})`
  }, $ = {
    id: _
  }, D = {
    slots: y,
    slotProps: m,
    onItemClick: c
  }, R = {
    slots: y,
    slotProps: m,
    onItemClick: d
  }, F = {
    slots: y,
    slotProps: m,
    onItemClick: p,
    skipAnimation: v
  }, z = {
    slots: y,
    slotProps: m,
    loading: C
  }, H = {
    slots: y,
    slotProps: m
  }, W = N({
    x: "line"
  }, f), q = {
    slots: y,
    slotProps: m
  }, J = {
    slots: y,
    slotProps: m
  };
  return {
    chartsWrapperProps: {
      sx: u,
      legendPosition: (Z = (ne = e.slotProps) == null ? void 0 : ne.legend) == null ? void 0 : Z.position,
      legendDirection: (X = (U = e.slotProps) == null ? void 0 : U.legend) == null ? void 0 : X.direction,
      hideLegend: e.hideLegend ?? !1,
      className: I
    },
    chartsContainerProps: A,
    gridProps: P,
    clipPathProps: $,
    clipPathGroupProps: M,
    areaPlotProps: D,
    linePlotProps: R,
    markPlotProps: F,
    overlayProps: z,
    chartsAxisProps: H,
    axisHighlightProps: W,
    lineHighlightPlotProps: q,
    legendProps: J,
    children: x
  };
}, b6 = 50;
function S6(e, t, n, r, o, i, s, a, l, u, c = 1 / 0, d = 1, p = 0) {
  const f = n.copy(), h = r.copy();
  f.range([0, 1]), h.range([0, 1]);
  const g = function(A) {
    const P = f(t[A].x), M = h(t[A].y);
    return P >= o && P <= i && M >= s && M <= a;
  }, x = n.range()[1] - n.range()[0], y = r.range()[1] - r.range()[0], m = x * x, v = y * y;
  function C(w, A) {
    return m * w * w + v * A * A;
  }
  const S = f(EC(n, l, (w) => {
    var A;
    return (A = t[w]) == null ? void 0 : A.x;
  })), b = h(EC(r, u, (w) => {
    var A;
    return (A = t[w]) == null ? void 0 : A.y;
  }));
  if (S === void 0 || b === void 0)
    return [];
  const I = typeof p == "number", T = Number.isFinite(c) ? c * c : 1 / 0, L = e.neighbors(S, b, I ? d : b6, T, g, C);
  if (I)
    return L;
  let O = [];
  for (const w of L) {
    const A = f(t[w].x), P = h(t[w].y), M = C(A - S, P - b);
    if (M > T)
      continue;
    const $ = Math.sqrt(M) - p(w);
    O.push({
      index: w,
      edge: $,
      centerDistSq: M
    });
  }
  O.sort((w, A) => w.edge - A.edge);
  const _ = O.findLastIndex((w) => w.edge < 0);
  return _ !== -1 && (O = [...O.slice(0, _ + 1).sort((w, A) => w.centerDistSq - A.centerDistSq), ...O.slice(_ + 1)]), O.slice(0, Math.min(O.length, d)).map((w) => w.index);
}
function EC(e, t, n) {
  if (et(e)) {
    const r = e.bandwidth() === 0 ? Math.floor((t - Math.min(...e.range()) + e.step() / 2) / e.step()) : Math.floor((t - Math.min(...e.range())) / e.step());
    return n(r);
  }
  return e.invert(t);
}
function k6(e, t) {
  if (t === void 0)
    return !0;
  if (e.edgeDistance <= 0) {
    if (t.edgeDistance > 0)
      return !0;
    const n = e.edgeDistance + e.radius, r = t.edgeDistance + t.radius;
    return n < r;
  }
  return t.edgeDistance <= 0 ? !1 : e.edgeDistance < t.edgeDistance;
}
const Yf = ({
  params: e,
  store: t,
  instance: n
}) => {
  var S;
  const {
    chartsLayerContainerRef: r
  } = n, {
    disableHitArea: o,
    hitAreaRadius: i,
    onItemClick: s
  } = e, a = o, l = i, {
    axis: u,
    axisIds: c
  } = t.use(vt), {
    axis: d,
    axisIds: p
  } = t.use(xt), f = t.use(Tf), {
    series: h,
    seriesOrder: g
  } = ((S = t.use(Te)) == null ? void 0 : S.scatter) ?? {}, x = t.use(f ? lF : uF), y = c[0], m = p[0];
  me(() => {
    t.set("voronoi", {
      isVoronoiEnabled: !a
    });
  }, [t, a]), k.useEffect(() => {
    if (r.current === null || a)
      return;
    const b = r.current;
    function I($) {
      const D = ls(b, $);
      if (!n.isPointInside(D.x, D.y))
        return "outside-chart";
      let R;
      for (const F of g ?? []) {
        const z = (h ?? {})[F], H = x.get(F);
        if (!H || z.hidden)
          continue;
        const {
          flatbush: W,
          getItemRadius: q,
          maxItemRadius: J
        } = H, se = z.xAxisId ?? y, ee = z.yAxisId ?? m, ne = V1(t.state, se), Z = V1(t.state, ee), U = l === "item" ? J : l, X = ((ne == null ? void 0 : ne.start) ?? 0) / 100, re = ((ne == null ? void 0 : ne.end) ?? 100) / 100, j = ((Z == null ? void 0 : Z.start) ?? 0) / 100, ae = ((Z == null ? void 0 : Z.end) ?? 100) / 100, Q = u[se].scale, we = d[ee].scale, he = S6(W, z.data, Q, we, X, re, j, ae, D.x, D.y, U, 1, q)[0];
        if (he === void 0)
          continue;
        const be = z.data[he], wt = Q(be.x), je = we(be.y), Lt = Math.hypot(wt - D.x, je - D.y), Nt = typeof q == "number" ? q : q(he), on = Lt - Nt;
        if (l === "item" && on > 0)
          continue;
        const rt = {
          dataIndex: he,
          seriesId: F,
          edgeDistance: on,
          radius: Nt
        };
        k6(rt, R) && (R = rt);
      }
      return R === void 0 ? "no-point-found" : {
        seriesId: R.seriesId,
        dataIndex: R.dataIndex
      };
    }
    const T = n.addInteractionListener("moveEnd", ($) => {
      var D, R, F;
      $.detail.activeGestures.pan || ((D = n.cleanInteraction) == null || D.call(n), (R = n.clearHighlight) == null || R.call(n), (F = n.removeTooltipItem) == null || F.call(n));
    }), L = n.addInteractionListener("panEnd", ($) => {
      var D, R, F;
      $.detail.activeGestures.move || ((D = n.cleanInteraction) == null || D.call(n), (R = n.clearHighlight) == null || R.call(n), (F = n.removeTooltipItem) == null || F.call(n));
    }), O = n.addInteractionListener("quickPressEnd", ($) => {
      var D, R, F;
      !$.detail.activeGestures.move && !$.detail.activeGestures.pan && ((D = n.cleanInteraction) == null || D.call(n), (R = n.clearHighlight) == null || R.call(n), (F = n.removeTooltipItem) == null || F.call(n));
    }), _ = ($) => {
      var z, H, W, q, J, se, ee, ne, Z;
      const D = I($.detail.srcEvent);
      if (D === "outside-chart") {
        (z = n.cleanInteraction) == null || z.call(n), (H = n.clearHighlight) == null || H.call(n), (W = n.removeTooltipItem) == null || W.call(n);
        return;
      }
      if (D === "outside-voronoi-max-radius" || D === "no-point-found") {
        (q = n.removeTooltipItem) == null || q.call(n), (J = n.clearHighlight) == null || J.call(n), (se = n.removeTooltipItem) == null || se.call(n);
        return;
      }
      const {
        seriesId: R,
        dataIndex: F
      } = D;
      (ee = n.setTooltipItem) == null || ee.call(n, {
        type: "scatter",
        seriesId: R,
        dataIndex: F
      }), (ne = n.setLastUpdateSource) == null || ne.call(n, "pointer"), (Z = n.setHighlight) == null || Z.call(n, {
        type: "scatter",
        seriesId: R,
        dataIndex: F
      });
    }, w = n.addInteractionListener("tap", ($) => {
      const D = I($.detail.srcEvent);
      if (typeof D != "string" && s) {
        const {
          seriesId: R,
          dataIndex: F
        } = D;
        s($.detail.srcEvent, {
          type: "scatter",
          seriesId: R,
          dataIndex: F
        });
      }
    }), A = n.addInteractionListener("move", _), P = n.addInteractionListener("pan", _), M = n.addInteractionListener("quickPress", _);
    return () => {
      w.cleanup(), A.cleanup(), T.cleanup(), P.cleanup(), L.cleanup(), M.cleanup(), O.cleanup();
    };
  }, [r, d, u, l, s, a, n, g, h, x, y, m, t]);
  const v = de(() => {
    t.set("voronoi", {
      isVoronoiEnabled: !0
    });
  }), C = de(() => {
    t.set("voronoi", {
      isVoronoiEnabled: !1
    });
  });
  return {
    instance: {
      enableVoronoi: v,
      disableVoronoi: C
    }
  };
};
Yf.getDefaultizedParams = ({
  params: e
}) => N({}, e, {
  disableHitArea: e.disableHitArea ?? !e.series.some((t) => t.type === "scatter")
});
Yf.getInitialState = (e) => ({
  voronoi: {
    isVoronoiEnabled: !e.disableHitArea
  }
});
Yf.params = {
  disableHitArea: !0,
  hitAreaRadius: !0,
  onItemClick: !0
};
const I6 = 2e4, T6 = 5, DE = 1e3, E6 = 1e4, P6 = (e, t) => {
  const n = Math.max(1, e), r = Math.max(1, t), o = Math.min(E6, Math.max(DE, Math.ceil(r / T6)));
  return Math.max(1, Math.floor(o / n));
}, FE = (e) => e.progressiveRendering, zE = V(FE, (e) => e == null ? void 0 : e.plans), _g = V(FE, (e) => (e == null ? void 0 : e.revealedRounds) ?? 0);
function BE(e, t) {
  var n;
  for (const r in e) {
    if (!Object.hasOwn(e, r))
      continue;
    const o = (n = e[r]) == null ? void 0 : n.series[t];
    if (o)
      return Array.isArray(o.data) ? o.data.length : 0;
  }
  return 0;
}
const z0 = le(zE, Te, function(t, n) {
  const r = /* @__PURE__ */ new Map();
  if (!t || t.size === 0)
    return {
      nBatchesBySeries: r,
      totalRounds: 0,
      batchSize: DE
    };
  let o = 0, i = 0;
  const s = /* @__PURE__ */ new Map();
  t.forEach((u) => {
    u.forEach((c) => {
      const d = BE(n, c);
      s.set(c, d), o += 1, i += d;
    });
  });
  const a = P6(o, i);
  let l = 0;
  return s.forEach((u, c) => {
    const d = Math.max(1, Math.ceil(u / a));
    r.set(c, d), d > l && (l = d);
  }), {
    nBatchesBySeries: r,
    totalRounds: l,
    batchSize: a
  };
});
V(z0, (e) => e.batchSize);
const PC = V(z0, (e) => e.totalRounds);
function M6(e, t, n) {
  return Math.min(n ? 1 : t, e);
}
V(z0, _g, Tf, function(t, n, r, o) {
  const i = t.nBatchesBySeries.get(o) ?? 0;
  return M6(i, n, r);
});
const A6 = (e) => El(e, "progressiveRendering"), R6 = V(Te, A6, (e, t, n, r) => {
  if (r === "svg-single" || r === "svg-batch")
    return !1;
  if (r === "svg-progressive")
    return !0;
  if (!t)
    return !1;
  let o = 0;
  for (const i of n)
    o += BE(e, i);
  return o > I6;
});
function _6(e, t) {
  if (!e || e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n += 1)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
const jE = /* @__PURE__ */ new Map(), $6 = 1, O6 = 1, L6 = 200, B0 = ({
  store: e
}) => {
  const t = de((o, i, s) => {
    if (!R6(e.state, i, s))
      return;
    const a = e.state.progressiveRendering.plans.get(o);
    if (!_6(a, i)) {
      const l = new Map(e.state.progressiveRendering.plans);
      l.set(o, i), e.set("progressiveRendering", {
        plans: l,
        revealedRounds: 0
      });
    }
    return () => {
      if (!e.state.progressiveRendering.plans.has(o))
        return;
      const l = new Map(e.state.progressiveRendering.plans);
      l.delete(o), e.set("progressiveRendering", N({}, e.state.progressiveRendering, {
        plans: l
      }));
    };
  }), n = e.use(zE) ?? jE, r = e.use(Tf);
  return k.useEffect(() => {
    const o = PC(e.state);
    if (o === 0)
      return;
    if (r) {
      const d = Math.min(O6, o);
      _g(e.state) !== d && e.set("progressiveRendering", N({}, e.state.progressiveRendering, {
        revealedRounds: d
      }));
      return;
    }
    if (typeof requestAnimationFrame != "function") {
      e.set("progressiveRendering", N({}, e.state.progressiveRendering, {
        revealedRounds: o
      }));
      return;
    }
    let i = 0, s, a = !1, l = _g(e.state);
    function u() {
      i = requestAnimationFrame(() => {
        a || c();
      });
    }
    function c() {
      if (a)
        return;
      const d = PC(e.state);
      l = Math.min(d, l + $6), e.set("progressiveRendering", N({}, e.state.progressiveRendering, {
        revealedRounds: l
      })), l < d && u();
    }
    if (!(l >= o))
      return l > 0 ? s = setTimeout(() => {
        i = requestAnimationFrame(c);
      }, L6) : i = requestAnimationFrame(c), () => {
        a = !0, cancelAnimationFrame(i), s !== void 0 && clearTimeout(s);
      };
  }, [n, r, e]), {
    instance: {
      registerProgressivePlan: t
    }
  };
};
B0.params = {};
B0.getInitialState = () => ({
  progressiveRendering: {
    plans: jE,
    revealedRounds: 0
  }
});
const UE = [Pl, Rl, _l, Al, Ps, Ol, vf, Yf, Mf, B0], N6 = ["width", "height", "margin", "children", "series", "colors", "dataset", "desc", "onAxisClick", "highlightedAxis", "onHighlightedAxisChange", "tooltipAxis", "onTooltipAxisChange", "tooltipItem", "onTooltipItemChange", "disableHitArea", "hitAreaRadius", "onItemClick", "disableAxisListener", "highlightedItem", "onHighlightChange", "sx", "title", "axesGap", "xAxis", "yAxis", "zAxis", "rotationAxis", "radiusAxis", "skipAnimation", "seriesConfig", "experimentalFeatures", "plugins", "localeText", "slots", "slotProps", "disableKeyboardNavigation", "brushConfig", "onHiddenItemsChange", "hiddenItems", "initialHiddenItems"], D6 = (e) => {
  const t = e, {
    width: n,
    height: r,
    margin: o,
    children: i,
    series: s,
    colors: a,
    dataset: l,
    desc: u,
    onAxisClick: c,
    highlightedAxis: d,
    onHighlightedAxisChange: p,
    tooltipAxis: f,
    onTooltipAxisChange: h,
    tooltipItem: g,
    onTooltipItemChange: x,
    disableHitArea: y,
    hitAreaRadius: m,
    onItemClick: v,
    disableAxisListener: C,
    highlightedItem: S,
    onHighlightChange: b,
    sx: I,
    title: T,
    axesGap: L,
    xAxis: O,
    yAxis: _,
    zAxis: w,
    rotationAxis: A,
    radiusAxis: P,
    skipAnimation: M,
    seriesConfig: $,
    experimentalFeatures: D,
    plugins: R,
    localeText: F,
    slots: z,
    slotProps: H,
    disableKeyboardNavigation: W,
    brushConfig: q,
    onHiddenItemsChange: J,
    hiddenItems: se,
    initialHiddenItems: ee
  } = t, ne = xe(t, N6), Z = N({
    title: T,
    desc: u,
    sx: I
  }, ne);
  return {
    chartsDataProviderProps: {
      margin: o,
      series: s,
      colors: a,
      dataset: l,
      disableAxisListener: C,
      highlightedItem: S,
      onHighlightChange: b,
      onAxisClick: c,
      highlightedAxis: d,
      onHighlightedAxisChange: p,
      tooltipAxis: f,
      onTooltipAxisChange: h,
      tooltipItem: g,
      onTooltipItemChange: x,
      disableHitArea: y,
      hitAreaRadius: m,
      onItemClick: v,
      axesGap: L,
      xAxis: O,
      yAxis: _,
      zAxis: w,
      rotationAxis: A,
      radiusAxis: P,
      skipAnimation: M,
      width: n,
      height: r,
      localeText: F,
      seriesConfig: $,
      experimentalFeatures: D,
      disableKeyboardNavigation: W,
      brushConfig: q,
      onHiddenItemsChange: J,
      hiddenItems: se,
      initialHiddenItems: ee,
      plugins: R ?? UE,
      slots: z,
      slotProps: H
    },
    chartsSurfaceProps: Z,
    children: i
  };
};
function MC(...e) {
  return e.reduce((t, n) => n == null ? t : function(...o) {
    t.apply(this, o), n.apply(this, o);
  }, () => {
  });
}
function F6(e) {
  return Ce("MuiSvgIcon", e);
}
ce("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const z6 = (e) => {
  const {
    color: t,
    fontSize: n,
    classes: r
  } = e, o = {
    root: ["root", t !== "inherit" && `color${Ee(t)}`, `fontSize${Ee(n)}`]
  };
  return ve(o, F6, r);
}, B6 = K("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "inherit" && t[`color${Ee(n.color)}`], t[`fontSize${Ee(n.fontSize)}`]];
  }
})(ze(({
  theme: e
}) => {
  var t, n, r, o, i, s, a, l, u, c, d, p;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    flexShrink: 0,
    ...dt(e, "fill", {
      duration: (n = (t = (e.vars ?? e).transitions) == null ? void 0 : t.duration) == null ? void 0 : n.shorter
    }),
    variants: [
      {
        props: (f) => !f.hasSvgAsChild,
        style: {
          // the <svg> will define the property that has `currentColor`
          // for example heroicons uses fill="none" and stroke="currentColor"
          fill: "currentColor"
        }
      },
      {
        props: {
          fontSize: "inherit"
        },
        style: {
          fontSize: "inherit"
        }
      },
      {
        props: {
          fontSize: "small"
        },
        style: {
          fontSize: ((o = (r = e.typography) == null ? void 0 : r.pxToRem) == null ? void 0 : o.call(r, 20)) || "1.25rem"
        }
      },
      {
        props: {
          fontSize: "medium"
        },
        style: {
          fontSize: ((s = (i = e.typography) == null ? void 0 : i.pxToRem) == null ? void 0 : s.call(i, 24)) || "1.5rem"
        }
      },
      {
        props: {
          fontSize: "large"
        },
        style: {
          fontSize: ((l = (a = e.typography) == null ? void 0 : a.pxToRem) == null ? void 0 : l.call(a, 35)) || "2.1875rem"
        }
      },
      // TODO v5 deprecate color prop, v6 remove for sx
      ...Object.entries((e.vars ?? e).palette).filter(([, f]) => f && f.main).map(([f]) => {
        var h, g;
        return {
          props: {
            color: f
          },
          style: {
            color: (g = (h = (e.vars ?? e).palette) == null ? void 0 : h[f]) == null ? void 0 : g.main
          }
        };
      }),
      {
        props: {
          color: "action"
        },
        style: {
          color: (c = (u = (e.vars ?? e).palette) == null ? void 0 : u.action) == null ? void 0 : c.active
        }
      },
      {
        props: {
          color: "disabled"
        },
        style: {
          color: (p = (d = (e.vars ?? e).palette) == null ? void 0 : d.action) == null ? void 0 : p.disabled
        }
      },
      {
        props: {
          color: "inherit"
        },
        style: {
          color: void 0
        }
      }
    ]
  };
})), $g = /* @__PURE__ */ k.forwardRef(function(t, n) {
  const r = Be({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: o,
    className: i,
    color: s = "inherit",
    component: a = "svg",
    fontSize: l = "medium",
    htmlColor: u,
    inheritViewBox: c = !1,
    titleAccess: d,
    viewBox: p = "0 0 24 24",
    ...f
  } = r, h = /* @__PURE__ */ k.isValidElement(o) && o.type === "svg", g = {
    ...r,
    color: s,
    component: a,
    fontSize: l,
    instanceFontSize: t.fontSize,
    inheritViewBox: c,
    viewBox: p,
    hasSvgAsChild: h
  }, x = {};
  c || (x.viewBox = p);
  const y = z6(g);
  return /* @__PURE__ */ E.jsxs(B6, {
    as: a,
    className: oe(y.root, i),
    focusable: "false",
    color: u,
    "aria-hidden": d ? void 0 : !0,
    role: d ? "img" : void 0,
    ref: n,
    ...x,
    ...f,
    ...h && o.props,
    ownerState: g,
    children: [h ? o.props.children : o, d ? /* @__PURE__ */ E.jsx("title", {
      children: d
    }) : null]
  });
});
$g.muiName = "SvgIcon";
function j6(e, t) {
  function n(r, o) {
    return /* @__PURE__ */ E.jsx($g, {
      "data-testid": void 0,
      ref: o,
      ...r,
      children: e
    });
  }
  return n.muiName = $g.muiName, /* @__PURE__ */ k.memo(/* @__PURE__ */ k.forwardRef(n));
}
function AC(e) {
  const {
    controlled: t,
    default: n,
    name: r,
    state: o = "value"
  } = e, {
    current: i
  } = k.useRef(t !== void 0), [s, a] = k.useState(n), l = i ? t : s, u = k.useCallback((c) => {
    i || a(c);
  }, []);
  return [l, u];
}
function U6(e, t) {
  if (!e)
    return t;
  function n(s, a) {
    const l = {};
    return Object.keys(a).forEach((u) => {
      gk(u, a[u]) && typeof s[u] == "function" && (l[u] = (...c) => {
        s[u](...c), a[u](...c);
      });
    }), l;
  }
  if (typeof e == "function" || typeof t == "function")
    return (s) => {
      const a = typeof t == "function" ? t(s) : t, l = typeof e == "function" ? e({
        ...s,
        ...a
      }) : e, u = oe(s == null ? void 0 : s.className, a == null ? void 0 : a.className, l == null ? void 0 : l.className), c = n(l, a);
      return {
        ...a,
        ...l,
        ...c,
        ...!!u && {
          className: u
        },
        ...(a == null ? void 0 : a.style) && (l == null ? void 0 : l.style) && {
          style: {
            ...a.style,
            ...l.style
          }
        },
        ...(a == null ? void 0 : a.sx) && (l == null ? void 0 : l.sx) && {
          sx: [...Array.isArray(a.sx) ? a.sx : [a.sx], ...Array.isArray(l.sx) ? l.sx : [l.sx]]
        }
      };
    };
  const r = t, o = n(e, r), i = oe(r == null ? void 0 : r.className, e == null ? void 0 : e.className);
  return {
    ...t,
    ...e,
    ...o,
    ...!!i && {
      className: i
    },
    ...(r == null ? void 0 : r.style) && (e == null ? void 0 : e.style) && {
      style: {
        ...r.style,
        ...e.style
      }
    },
    ...(r == null ? void 0 : r.sx) && (e == null ? void 0 : e.sx) && {
      sx: [...Array.isArray(r.sx) ? r.sx : [r.sx], ...Array.isArray(e.sx) ? e.sx : [e.sx]]
    }
  };
}
function RC(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
  }
  return !1;
}
function H6(e) {
  const {
    focusableWhenDisabled: t,
    disabled: n,
    composite: r = !1,
    tabIndex: o = 0,
    isNativeButton: i
  } = e, s = r && t !== !1, a = r && t === !1;
  return k.useMemo(() => {
    const u = {
      // allow Tabbing away from focusableWhenDisabled elements
      onKeyDown(c) {
        n && t && c.key !== "Tab" && c.preventDefault();
      }
    };
    return r || (u.tabIndex = o, !i && n && (u.tabIndex = t ? o : -1)), (i && (t || s) || !i && n) && (u["aria-disabled"] = n), i && (!t || a) && (u.disabled = n), u;
  }, [r, n, t, s, a, i, o]);
}
const W6 = {};
function G6(e) {
  const {
    nativeButton: t,
    disabled: n,
    type: r,
    hasFormAction: o = !1,
    tabIndex: i = 0,
    focusableWhenDisabled: s,
    stopEventPropagation: a = !1,
    onBeforeKeyDown: l,
    onBeforeKeyUp: u
  } = e, c = k.useRef(null), d = s === !0, p = H6({
    focusableWhenDisabled: d,
    disabled: n,
    isNativeButton: t,
    tabIndex: i
  }), f = k.useCallback(() => {
    const x = c.current;
    return x == null ? t : x.tagName === "BUTTON" ? !0 : !!(x.tagName === "A" && x.href);
  }, [t]), h = k.useMemo(() => {
    const x = d ? {} : {
      tabIndex: n ? -1 : i
    };
    return t ? (x.type = r === void 0 && !o ? "button" : r, d || (x.disabled = n)) : (x.role = "button", !d && n && (x["aria-disabled"] = n)), d ? {
      ...x,
      ...p
    } : x;
  }, [n, d, p, o, t, i, r]);
  return {
    getButtonProps: k.useCallback((x = W6) => {
      const {
        onClick: y,
        onKeyDown: m,
        onKeyUp: v,
        ...C
      } = x;
      return {
        ...h,
        ...C,
        onClick: (T) => {
          if (a && T.stopPropagation(), n) {
            T.preventDefault();
            return;
          }
          y == null || y(T);
        },
        onKeyDown: (T) => {
          if (d && p.onKeyDown(T), !n && (l == null || l(T), m == null || m(T), !(T.target !== T.currentTarget || f()))) {
            if (T.key === " ") {
              T.preventDefault();
              return;
            }
            T.key === "Enter" && (T.preventDefault(), T.currentTarget.click());
          }
        },
        onKeyUp: (T) => {
          n || (u == null || u(T), v == null || v(T), T.target === T.currentTarget && !f() && T.key === " " && !T.defaultPrevented && T.currentTarget.click());
        }
      };
    }, [h, n, d, p, f, l, u, a]),
    rootRef: c
  };
}
class ed {
  constructor() {
    ue(this, "mountEffect", () => {
      this.shouldMount && !this.didMount && this.ref.current !== null && (this.didMount = !0, this.mounted.resolve());
    });
    this.ref = {
      current: null
    }, this.mounted = null, this.didMount = !1, this.shouldMount = !1, this.setShouldMount = null;
  }
  /** React ref to the ripple instance */
  /** If the ripple component should be mounted */
  /** Promise that resolves when the ripple component is mounted */
  /** If the ripple component has been mounted */
  /** React state hook setter */
  static create() {
    return new ed();
  }
  static use() {
    const t = Cl(ed.create).current, [n, r] = k.useState(!1);
    return t.shouldMount = n, t.setShouldMount = r, k.useEffect(t.mountEffect, [n]), t;
  }
  mount() {
    return this.mounted || (this.mounted = Y6(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
  }
  /* Ripple API */
  start(...t) {
    this.mount().then(() => {
      var n;
      return (n = this.ref.current) == null ? void 0 : n.start(...t);
    });
  }
  stop(...t) {
    this.mount().then(() => {
      var n;
      return (n = this.ref.current) == null ? void 0 : n.stop(...t);
    });
  }
  pulsate(...t) {
    this.mount().then(() => {
      var n;
      return (n = this.ref.current) == null ? void 0 : n.pulsate(...t);
    });
  }
}
function V6() {
  return ed.use();
}
function Y6() {
  let e, t;
  const n = new Promise((r, o) => {
    e = r, t = o;
  });
  return n.resolve = e, n.reject = t, n;
}
class j0 {
  constructor() {
    ue(this, "currentId", null);
    ue(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    ue(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new j0();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(t, n) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, n();
    }, t);
  }
}
function ba() {
  const e = Cl(j0.create).current;
  return uy(e.disposeEffect), e;
}
function K6(e) {
  const {
    className: t,
    classes: n,
    pulsate: r = !1,
    rippleX: o,
    rippleY: i,
    rippleSize: s,
    in: a,
    onExited: l,
    timeout: u
  } = e, [c, d] = k.useState(!1), p = ba(), f = k.useRef(!1), h = k.useRef(l);
  h.current = l;
  const g = l != null, x = oe(t, n.ripple, n.rippleVisible, r && n.ripplePulsate), y = {
    width: s,
    height: s,
    top: -(s / 2) + i,
    left: -(s / 2) + o
  }, m = oe(n.child, c && n.childLeaving, r && n.childPulsate);
  return !a && !c && d(!0), k.useEffect(() => {
    !a && g ? f.current || (f.current = !0, p.start(u, () => {
      var v;
      f.current = !1, (v = h.current) == null || v.call(h);
    })) : (f.current = !1, p.clear());
  }, [p, g, a, u]), /* @__PURE__ */ E.jsx("span", {
    className: x,
    style: y,
    children: /* @__PURE__ */ E.jsx("span", {
      className: m
    })
  });
}
const Bt = ce("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), HE = "(prefers-reduced-motion: reduce)", X6 = 0, q6 = "0ms", Q6 = () => {
}, _C = () => !1, Z6 = () => !0, J6 = () => Q6;
function eU(e) {
  const [t, n] = k.useState(() => ({
    enabled: e,
    matches: e ? null : !1
  }));
  let r = t.matches;
  return t.enabled !== e && (r = null, e || (r = !1)), me(() => {
    const o = (a) => {
      n((l) => l.enabled === e && l.matches === a ? l : {
        enabled: e,
        matches: a
      });
    };
    if (!e) {
      t.enabled && o(!1);
      return;
    }
    if (typeof window > "u" || typeof window.matchMedia != "function") {
      o(!1);
      return;
    }
    const i = window.matchMedia(HE), s = () => {
      o(i.matches);
    };
    return s(), i.addEventListener("change", s), () => {
      i.removeEventListener("change", s);
    };
  }, [e, t.enabled]), r;
}
const tU = {
  ...Ta
}, WE = tU.useSyncExternalStore;
function nU(e) {
  const t = e ? Z6 : _C, [n, r] = k.useMemo(() => {
    if (!e || typeof window > "u" || typeof window.matchMedia != "function")
      return [_C, J6];
    const o = window.matchMedia(HE);
    return [() => o.matches, (i) => (o.addEventListener("change", i), () => {
      o.removeEventListener("change", i);
    })];
  }, [e]);
  return WE(r, n, t);
}
const rU = WE !== void 0 ? nU : eU;
function U0(e, t) {
  const n = rU(!t && e === "system"), r = !t && (e === "always" || e === "system" && n !== !1);
  return k.useMemo(() => ({
    shouldReduceMotion: r,
    getTransitionTiming(o) {
      return r ? {
        duration: X6,
        delay: q6
      } : o;
    }
  }), [r]);
}
const Og = 550, oU = 80, Su = {}, $C = [], iU = () => {
};
function eh(e, t) {
  const n = new Set(t), r = /* @__PURE__ */ new Map();
  let o = [];
  for (const s of e)
    n.has(s) ? o.length > 0 && (r.set(s, o), o = []) : o.push(s);
  const i = [];
  for (const s of t) {
    const a = r.get(s);
    a && i.push(...a), i.push(s);
  }
  return i.push(...o), i;
}
function sU({
  event: e,
  element: t,
  center: n
}) {
  const r = t ? t.getBoundingClientRect() : {
    width: 0,
    height: 0,
    left: 0,
    top: 0
  };
  let o, i;
  if (n || e === void 0 || e.clientX === 0 && e.clientY === 0 || !e.clientX && !e.touches)
    o = Math.round(r.width / 2), i = Math.round(r.height / 2);
  else {
    const {
      clientX: a,
      clientY: l
    } = e.touches && e.touches.length > 0 ? e.touches[0] : e;
    o = Math.round(a - r.left), i = Math.round(l - r.top);
  }
  let s;
  if (n)
    s = Math.sqrt((2 * r.width ** 2 + r.height ** 2) / 3), s % 2 === 0 && (s += 1);
  else {
    const a = Math.max(Math.abs((t ? t.clientWidth : 0) - o), o) * 2 + 2, l = Math.max(Math.abs((t ? t.clientHeight : 0) - i), i) * 2 + 2;
    s = Math.sqrt(a ** 2 + l ** 2);
  }
  return {
    rippleX: o,
    rippleY: i,
    rippleSize: s
  };
}
const aU = gl`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, lU = gl`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, uU = gl`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`;
function cU(e) {
  if (e.motion.reducedMotion === "always")
    return null;
  const t = Ya`
    &.${Bt.rippleVisible} {
      animation-name: ${aU};
      animation-duration: ${Og}ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
    }

    &.${Bt.ripplePulsate} {
      animation-duration: ${e.transitions.duration.shorter}ms;
    }

    & .${Bt.childLeaving} {
      animation-name: ${lU};
      animation-duration: ${Og}ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
    }

    & .${Bt.childPulsate} {
      animation-name: ${uU};
      animation-duration: 2500ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
      animation-iteration-count: infinite;
      animation-delay: 200ms;
    }
  `;
  return e.motion.reducedMotion === "system" ? Ya`
      @media (prefers-reduced-motion: no-preference) {
        ${t}
      }
    ` : t;
}
const dU = K("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), fU = K(K6, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${Bt.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
  }

  /*
   * Order matters: 'child', 'childLeaving' and 'childPulsate' apply to the same
   * element with equal specificity, so the later rule wins. 'child' must come
   * before 'childLeaving' so the leaving 'opacity: 0' takes precedence. A focus
   * (pulsate) ripple keeps 'pulsateKeyframe' (no opacity animation) on exit, so
   * it relies on this static 'opacity: 0' to disappear on blur instead of
   * lingering until removal.
   */
  & .${Bt.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${Bt.childLeaving} {
    opacity: 0;
  }

  & .${Bt.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
  }

  ${({
  theme: e
}) => cU(e)}
`, pU = /* @__PURE__ */ k.forwardRef(function(t, n) {
  const r = Be({
    props: t,
    name: "MuiTouchRipple"
  }), o = tn(), i = U0(o.motion.reducedMotion, !1), {
    center: s = !1,
    classes: a = Su,
    className: l,
    ...u
  } = r, [c, d] = k.useState({
    items: $C,
    order: $C
  }), p = c.items, f = k.useRef(0), h = k.useRef(null), g = k.useRef(!1);
  uy(() => (g.current = !0, () => {
    g.current = !1;
  })), k.useEffect(() => {
    h.current && (h.current(), h.current = null);
  }, [p]);
  const x = k.useRef(!1), y = ba(), m = k.useRef(null), v = k.useRef(null), C = de((_) => {
    g.current && d((w) => {
      const A = w.items.filter((M) => M.key !== _), P = eh(w.order.filter((M) => M !== _), A.filter((M) => !M.exiting).map((M) => M.key));
      return {
        items: A,
        order: P
      };
    });
  }), S = de((_) => {
    const {
      pulsate: w,
      rippleX: A,
      rippleY: P,
      rippleSize: M,
      cb: $
    } = _, D = f.current;
    f.current += 1, d((R) => {
      const F = [...R.items, {
        key: D,
        pulsate: w,
        rippleX: A,
        rippleY: P,
        rippleSize: M,
        exiting: !1
      }];
      return {
        items: F,
        order: eh(R.order, F.filter((z) => !z.exiting).map((z) => z.key))
      };
    }), h.current = $;
  }), b = de((_ = Su, w = Su, A = iU) => {
    const {
      pulsate: P = !1,
      center: M = s || w.pulsate,
      fakeElement: $ = !1
      // Used only by tests.
    } = w;
    if ((_ == null ? void 0 : _.type) === "mousedown" && x.current) {
      x.current = !1;
      return;
    }
    (_ == null ? void 0 : _.type) === "touchstart" && (x.current = !0);
    const D = $ ? null : v.current, {
      rippleX: R,
      rippleY: F,
      rippleSize: z
    } = sU({
      event: _,
      element: D,
      center: M
    });
    _ != null && _.touches ? m.current === null && (m.current = () => {
      S({
        pulsate: P,
        rippleX: R,
        rippleY: F,
        rippleSize: z,
        cb: A
      });
    }, y.start(oU, () => {
      m.current && (m.current(), m.current = null);
    })) : S({
      pulsate: P,
      rippleX: R,
      rippleY: F,
      rippleSize: z,
      cb: A
    });
  }), I = de(() => {
    b(Su, {
      pulsate: !0
    });
  }), T = de((_, w) => {
    if (y.clear(), (_ == null ? void 0 : _.type) === "touchend" && m.current) {
      m.current(), m.current = null, y.start(0, () => {
        T(_, w);
      });
      return;
    }
    m.current = null, d((A) => {
      const P = A.items.findIndex(($) => !$.exiting);
      if (P === -1)
        return A;
      const M = A.items.slice();
      return M[P] = {
        ...M[P],
        exiting: !0
      }, {
        items: M,
        order: eh(A.order, M.filter(($) => !$.exiting).map(($) => $.key))
      };
    }), h.current = w;
  });
  k.useImperativeHandle(n, () => ({
    pulsate: I,
    start: b,
    stop: T
  }), [I, b, T]);
  const L = new Map(p.map((_) => [_.key, _])), O = c.order.map((_) => L.get(_)).filter(Boolean);
  return /* @__PURE__ */ E.jsx(dU, {
    className: oe(Bt.root, a.root, l),
    ref: v,
    ...u,
    children: O.map((_) => /* @__PURE__ */ E.jsx(fU, {
      classes: {
        ripple: oe(a.ripple, Bt.ripple),
        rippleVisible: oe(a.rippleVisible, Bt.rippleVisible),
        ripplePulsate: oe(a.ripplePulsate, Bt.ripplePulsate),
        child: oe(a.child, Bt.child),
        childLeaving: oe(a.childLeaving, Bt.childLeaving),
        childPulsate: oe(a.childPulsate, Bt.childPulsate)
      },
      timeout: i.shouldReduceMotion ? 0 : Og,
      pulsate: _.pulsate,
      rippleX: _.rippleX,
      rippleY: _.rippleY,
      rippleSize: _.rippleSize,
      in: !_.exiting,
      onExited: () => C(_.key)
    }, _.key))
  });
});
function hU(e) {
  return Ce("MuiButtonBase", e);
}
const gU = ce("MuiButtonBase", ["root", "disabled", "focusVisible"]), mU = (e) => {
  const {
    disabled: t,
    focusVisible: n,
    focusVisibleClassName: r,
    suppressFocusVisible: o,
    classes: i
  } = e, a = ve({
    root: ["root", t && "disabled", n && !o && "focusVisible"]
  }, hU, i);
  return n && !o && r && (a.root += ` ${r}`), a;
}, yU = K("button", {
  name: "MuiButtonBase",
  slot: "Root"
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${gU.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), Kf = /* @__PURE__ */ k.forwardRef(function(t, n) {
  const r = Be({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: o,
    centerRipple: i = !1,
    children: s,
    className: a,
    component: l = "button",
    disabled: u = !1,
    disableRipple: c = !1,
    disableTouchRipple: d = !1,
    focusRipple: p = !1,
    focusVisibleClassName: f,
    /* eslint-disable react/prop-types */
    // replaces internal handling in Chip, other components can opt-in individually to use this in the future
    focusableWhenDisabled: h,
    // escape hatch to suppress the focusVisible state and callback
    // used by anchored <Menu>s to to suppress focus visible styling when opened with a pointer
    suppressFocusVisible: g = !1,
    // private prop to allow native vs non-native button props to be resolved before mount
    internalNativeButton: x,
    /* eslint-enable react/prop-types */
    LinkComponent: y = "a",
    nativeButton: m,
    onBlur: v,
    onClick: C,
    onContextMenu: S,
    onDragLeave: b,
    onFocus: I,
    onFocusVisible: T,
    onKeyDown: L,
    onKeyUp: O,
    onMouseDown: _,
    onMouseLeave: w,
    onMouseUp: A,
    onTouchEnd: P,
    onTouchMove: M,
    onTouchStart: $,
    tabIndex: D = 0,
    TouchRippleProps: R,
    touchRippleRef: F,
    type: z,
    ...H
  } = r, W = !!(H.href || H.to), q = !!H.formAction;
  let J = l;
  J === "button" && W && (J = y);
  const ee = m ?? (typeof J == "string" ? J === "button" : x ?? !1), ne = V6(), Z = Ze(ne.ref, F), [U, X] = k.useState(!1);
  (u || g) && U && X(!1);
  const re = de((qe) => {
    p && !qe.repeat && U && qe.key === " " && ne.stop(qe, () => {
      ne.start(qe);
    });
  }), j = de((qe) => {
    p && qe.key === " " && U && !qe.defaultPrevented && ne.stop(qe, () => {
      ne.pulsate(qe);
    });
  }), {
    getButtonProps: ae,
    rootRef: Q
  } = G6({
    nativeButton: ee,
    disabled: u,
    type: z,
    hasFormAction: q,
    tabIndex: D,
    onBeforeKeyDown: re,
    onBeforeKeyUp: j
  }), {
    onClick: we,
    onKeyDown: he,
    onKeyUp: be,
    ...wt
  } = ae({
    onClick: C,
    onKeyDown: L,
    onKeyUp: O
  });
  k.useImperativeHandle(o, () => ({
    focusVisible: () => {
      X(!0), Q.current.focus();
    }
  }), [Q]);
  const je = ne.shouldMount && !c && !u;
  k.useEffect(() => {
    U && p && !c && ne.pulsate();
  }, [c, p, U, ne]);
  const Lt = yr(ne, "start", _, d), Nt = yr(ne, "stop", S, d), on = yr(ne, "stop", b, d), rt = yr(ne, "stop", A, d), gr = yr(ne, "stop", (qe) => {
    U && qe.preventDefault(), w && w(qe);
  }, d), Kn = yr(ne, "start", $, d), Tt = yr(ne, "stop", P, d), Ge = yr(ne, "stop", M, d), ot = yr(ne, "stop", (qe) => {
    RC(qe.target) || X(!1), v && v(qe);
  }, !1), Io = de((qe) => {
    Q.current || (Q.current = qe.currentTarget), !g && RC(qe.target) && (X(!0), T && T(qe)), I && I(qe);
  }), ge = {};
  W && (ge.tabIndex = u ? -1 : D, u && (ge["aria-disabled"] = u), ge.type = z);
  const Dt = Ze(n, Q), Et = {
    ...r,
    centerRipple: i,
    component: l,
    disabled: u,
    disableRipple: c,
    disableTouchRipple: d,
    focusRipple: p,
    suppressFocusVisible: g,
    tabIndex: D,
    focusVisible: U
  }, $s = mU(Et);
  return /* @__PURE__ */ E.jsxs(yU, {
    as: J,
    className: oe($s.root, a),
    ownerState: Et,
    onBlur: ot,
    onClick: we,
    onContextMenu: Nt,
    onFocus: Io,
    onKeyDown: he,
    onKeyUp: be,
    onMouseDown: Lt,
    onMouseLeave: gr,
    onMouseUp: rt,
    onDragLeave: on,
    onTouchEnd: Tt,
    onTouchMove: Ge,
    onTouchStart: Kn,
    ref: Dt,
    ...W ? ge : wt,
    ...H,
    children: [s, je ? /* @__PURE__ */ E.jsx(pU, {
      ref: Z,
      center: i,
      ...R
    }) : null]
  });
});
function yr(e, t, n, r = !1) {
  return de((o) => (n && n(o), r || e[t](o), !0));
}
function vU(e) {
  return Ce("MuiCircularProgress", e);
}
ce("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "track", "circle", "circleDisableShrink"]);
const Fn = 44, Lg = gl`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, Ng = gl`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`, xU = typeof Lg != "string" ? Ya`
        animation: ${Lg} 1.4s linear infinite;
      ` : null, CU = typeof Ng != "string" ? Ya`
        animation: ${Ng} 1.4s ease-in-out infinite;
      ` : null, wU = (e) => {
  const {
    classes: t,
    variant: n,
    color: r,
    disableShrink: o
  } = e, i = {
    root: ["root", n, `color${Ee(r)}`],
    svg: ["svg"],
    track: ["track"],
    circle: ["circle", o && "circleDisableShrink"]
  };
  return ve(i, vU, t);
}, bU = K("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`color${Ee(n.color)}`]];
  }
})(ze(({
  theme: e
}) => {
  const t = sy(e, {
    animation: "none"
  });
  return {
    display: "inline-block",
    variants: [{
      props: {
        variant: "determinate"
      },
      style: {
        ...dt(e, "transform")
      }
    }, {
      props: {
        variant: "indeterminate"
      },
      style: xU || {
        animation: `${Lg} 1.4s linear infinite`
      }
    }, ...t ? [{
      props: {
        variant: "indeterminate"
      },
      style: t
    }] : [], ...Object.entries(e.palette).filter(Ur()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        color: (e.vars || e).palette[n].main
      }
    }))]
  };
})), SU = K("svg", {
  name: "MuiCircularProgress",
  slot: "Svg"
})({
  display: "block"
  // Keeps the progress centered
}), kU = K("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.circle, n.disableShrink && t.circleDisableShrink];
  }
})(ze(({
  theme: e
}) => {
  const t = sy(e, {
    animation: "none"
  });
  return {
    stroke: "currentColor",
    variants: [{
      props: {
        variant: "determinate"
      },
      style: {
        ...dt(e, "stroke-dashoffset")
      }
    }, {
      props: {
        variant: "indeterminate"
      },
      style: {
        // Some default value that looks fine while waiting for the animation to kick in.
        strokeDasharray: "80px, 200px",
        strokeDashoffset: 0
        // Add the unit to fix a Edge 16 and below bug.
      }
    }, {
      props: ({
        ownerState: n
      }) => n.variant === "indeterminate" && !n.disableShrink,
      style: CU || {
        // At runtime for Pigment CSS, `dashAnimation` will be null and the generated keyframe will be used.
        animation: `${Ng} 1.4s ease-in-out infinite`
      }
    }, ...t ? [{
      props: ({
        ownerState: n
      }) => n.variant === "indeterminate" && !n.disableShrink,
      style: t
    }] : []]
  };
})), IU = K("circle", {
  name: "MuiCircularProgress",
  slot: "Track"
})(ze(({
  theme: e
}) => ({
  stroke: "currentColor",
  opacity: (e.vars || e).palette.action.activatedOpacity
}))), H0 = /* @__PURE__ */ k.forwardRef(function(t, n) {
  const r = Be({
    props: t,
    name: "MuiCircularProgress"
  }), {
    className: o,
    color: i = "primary",
    disableShrink: s = !1,
    enableTrackSlot: a = !1,
    min: l,
    max: u,
    size: c = 40,
    style: d,
    thickness: p = 3.6,
    value: f = r.min ?? 0,
    variant: h = "indeterminate",
    ...g
  } = r, x = l ?? 0, y = u ?? 100, m = {
    ...r,
    color: i,
    disableShrink: s,
    size: c,
    thickness: p,
    value: f,
    variant: h,
    enableTrackSlot: a
  }, v = wU(m), C = {}, S = {}, b = {};
  if (h === "determinate") {
    const I = 2 * Math.PI * ((Fn - p) / 2), T = y - x;
    C.strokeDasharray = I.toFixed(3), C.strokeDashoffset = T > 0 ? `${((y - f) / T * I).toFixed(3)}px` : `${I.toFixed(3)}px`, S.transform = "rotate(-90deg)", b["aria-valuenow"] = f, b["aria-valuemin"] = x, b["aria-valuemax"] = y;
  }
  return /* @__PURE__ */ E.jsx(bU, {
    className: oe(v.root, o),
    style: {
      width: c,
      height: c,
      ...S,
      ...d
    },
    ownerState: m,
    ref: n,
    role: "progressbar",
    ...b,
    ...g,
    children: /* @__PURE__ */ E.jsxs(SU, {
      className: v.svg,
      ownerState: m,
      viewBox: `${Fn / 2} ${Fn / 2} ${Fn} ${Fn}`,
      children: [a ? /* @__PURE__ */ E.jsx(IU, {
        className: v.track,
        ownerState: m,
        cx: Fn,
        cy: Fn,
        r: (Fn - p) / 2,
        fill: "none",
        strokeWidth: p,
        "aria-hidden": "true"
      }) : null, /* @__PURE__ */ E.jsx(kU, {
        className: v.circle,
        style: C,
        ownerState: m,
        cx: Fn,
        cy: Fn,
        r: (Fn - p) / 2,
        fill: "none",
        strokeWidth: p
      })]
    })
  });
});
function TU(e) {
  return Ce("MuiIconButton", e);
}
const OC = ce("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge", "loading", "loadingIndicator", "loadingWrapper"]), EU = (e) => {
  const {
    classes: t,
    disabled: n,
    color: r,
    edge: o,
    size: i,
    loading: s
  } = e, a = {
    root: ["root", s && "loading", n && "disabled", r !== "default" && `color${Ee(r)}`, o && `edge${Ee(o)}`, `size${Ee(i)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  };
  return ve(a, TU, t);
}, PU = K(Kf, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.loading && t.loading, n.color !== "default" && t[`color${Ee(n.color)}`], n.edge && t[`edge${Ee(n.edge)}`], t[`size${Ee(n.size)}`]];
  }
})(ze(({
  theme: e
}) => ({
  textAlign: "center",
  flex: "0 0 auto",
  fontSize: e.typography.pxToRem(24),
  padding: 8,
  borderRadius: "50%",
  color: (e.vars || e).palette.action.active,
  ...dt(e, "background-color", {
    duration: e.transitions.duration.shortest
  }),
  variants: [{
    props: (t) => !t.disableRipple,
    style: {
      "--IconButton-hoverBg": e.alpha((e.vars || e).palette.action.active, (e.vars || e).palette.action.hoverOpacity),
      "&:hover": {
        backgroundColor: "var(--IconButton-hoverBg)",
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    }
  }, {
    props: {
      edge: "start"
    },
    style: {
      marginLeft: -12
    }
  }, {
    props: {
      edge: "start",
      size: "small"
    },
    style: {
      marginLeft: -3
    }
  }, {
    props: {
      edge: "end"
    },
    style: {
      marginRight: -12
    }
  }, {
    props: {
      edge: "end",
      size: "small"
    },
    style: {
      marginRight: -3
    }
  }]
})), ze(({
  theme: e
}) => ({
  variants: [{
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, ...Object.entries(e.palette).filter(Ur()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main,
      "--IconButton-hoverBg": e.alpha((e.vars || e).palette[t].main, (e.vars || e).palette.action.hoverOpacity)
    }
  })), {
    props: {
      size: "small"
    },
    style: {
      padding: 5,
      fontSize: e.typography.pxToRem(18)
    }
  }, {
    props: {
      size: "large"
    },
    style: {
      padding: 12,
      fontSize: e.typography.pxToRem(28)
    }
  }],
  [`&.${OC.disabled}`]: {
    backgroundColor: "transparent",
    color: (e.vars || e).palette.action.disabled
  },
  [`&.${OC.loading}`]: {
    color: "transparent"
  }
}))), MU = K("span", {
  name: "MuiIconButton",
  slot: "LoadingIndicator"
})(({
  theme: e
}) => ({
  display: "none",
  position: "absolute",
  visibility: "visible",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: (e.vars || e).palette.action.disabled,
  variants: [{
    props: {
      loading: !0
    },
    style: {
      display: "flex"
    }
  }]
})), AU = /* @__PURE__ */ k.forwardRef(function(t, n) {
  const r = Be({
    props: t,
    name: "MuiIconButton"
  }), {
    edge: o = !1,
    children: i,
    className: s,
    color: a = "default",
    disabled: l = !1,
    disableFocusRipple: u = !1,
    size: c = "medium",
    id: d,
    loading: p = null,
    loadingIndicator: f,
    ...h
  } = r, g = po(d), x = f ?? /* @__PURE__ */ E.jsx(H0, {
    "aria-labelledby": g,
    color: "inherit",
    size: 16
  }), y = {
    ...r,
    edge: o,
    color: a,
    disabled: l,
    disableFocusRipple: u,
    loading: p,
    loadingIndicator: x,
    size: c
  }, m = EU(y);
  return /* @__PURE__ */ E.jsxs(PU, {
    id: p ? g : d,
    className: oe(m.root, s),
    centerRipple: !0,
    internalNativeButton: !0,
    focusRipple: !u,
    disabled: l || p,
    ref: n,
    ...h,
    ownerState: y,
    children: [typeof p == "boolean" && // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ E.jsx("span", {
      className: m.loadingWrapper,
      style: {
        display: "contents"
      },
      children: /* @__PURE__ */ E.jsx(MU, {
        className: m.loadingIndicator,
        ownerState: y,
        children: p && x
      })
    }), i]
  });
});
function RU(e) {
  return Ce("MuiButton", e);
}
const Mo = ce("MuiButton", ["root", "text", "outlined", "contained", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "loading", "loadingWrapper", "loadingIconPlaceholder", "loadingIndicator", "loadingPositionCenter", "loadingPositionStart", "loadingPositionEnd"]), _U = /* @__PURE__ */ k.createContext({}), $U = /* @__PURE__ */ k.createContext(void 0), OU = (e) => {
  const {
    color: t,
    disableElevation: n,
    fullWidth: r,
    size: o,
    variant: i,
    loading: s,
    loadingPosition: a,
    classes: l
  } = e, u = {
    root: ["root", s && "loading", i, `size${Ee(o)}`, `color${Ee(t)}`, n && "disableElevation", r && "fullWidth", s && `loadingPosition${Ee(a)}`],
    startIcon: ["icon", "startIcon"],
    endIcon: ["icon", "endIcon"],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  }, c = ve(u, RU, l);
  return {
    ...l,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...c
  };
}, GE = [{
  props: {
    size: "small"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 18
    }
  }
}, {
  props: {
    size: "medium"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 20
    }
  }
}, {
  props: {
    size: "large"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 22
    }
  }
}], LU = K(Kf, {
  shouldForwardProp: (e) => On(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`size${Ee(n.size)}`], n.color === "inherit" && t.colorInherit, n.disableElevation && t.disableElevation, n.fullWidth && t.fullWidth, n.loading && t.loading];
  }
})(ze(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], n = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
  return {
    ...e.typography.button,
    minWidth: 64,
    padding: "6px 16px",
    border: 0,
    borderRadius: (e.vars || e).shape.borderRadius,
    ...dt(e, ["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": {
      textDecoration: "none"
    },
    [`&.${Mo.disabled}`]: {
      color: (e.vars || e).palette.action.disabled
    },
    variants: [{
      props: {
        variant: "contained"
      },
      style: {
        color: "var(--variant-containedColor)",
        backgroundColor: "var(--variant-containedBg)",
        boxShadow: (e.vars || e).shadows[2],
        "&:hover": {
          boxShadow: (e.vars || e).shadows[4],
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            boxShadow: (e.vars || e).shadows[2]
          }
        },
        "&:active": {
          boxShadow: (e.vars || e).shadows[8]
        },
        [`&.${Mo.focusVisible}`]: {
          boxShadow: (e.vars || e).shadows[6]
        },
        [`&.${Mo.disabled}`]: {
          color: (e.vars || e).palette.action.disabled,
          boxShadow: (e.vars || e).shadows[0],
          backgroundColor: (e.vars || e).palette.action.disabledBackground
        }
      }
    }, {
      props: {
        variant: "outlined"
      },
      style: {
        padding: "5px 15px",
        border: "1px solid currentColor",
        borderColor: "var(--variant-outlinedBorder, currentColor)",
        backgroundColor: "var(--variant-outlinedBg)",
        color: "var(--variant-outlinedColor)",
        [`&.${Mo.disabled}`]: {
          border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`
        }
      }
    }, {
      props: {
        variant: "text"
      },
      style: {
        padding: "6px 8px",
        color: "var(--variant-textColor)",
        backgroundColor: "var(--variant-textBg)"
      }
    }, ...Object.entries(e.palette).filter(Ur()).map(([r]) => ({
      props: {
        color: r
      },
      style: {
        "--variant-textColor": (e.vars || e).palette[r].main,
        "--variant-outlinedColor": (e.vars || e).palette[r].main,
        "--variant-outlinedBorder": e.alpha((e.vars || e).palette[r].main, 0.5),
        "--variant-containedColor": (e.vars || e).palette[r].contrastText,
        "--variant-containedBg": (e.vars || e).palette[r].main,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": (e.vars || e).palette[r].dark,
            "--variant-textBg": e.alpha((e.vars || e).palette[r].main, (e.vars || e).palette.action.hoverOpacity),
            "--variant-outlinedBorder": (e.vars || e).palette[r].main,
            "--variant-outlinedBg": e.alpha((e.vars || e).palette[r].main, (e.vars || e).palette.action.hoverOpacity)
          }
        }
      }
    })), {
      props: {
        color: "inherit"
      },
      style: {
        color: "inherit",
        borderColor: "currentColor",
        "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedBg : t,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedHoverBg : n,
            "--variant-textBg": e.alpha((e.vars || e).palette.text.primary, (e.vars || e).palette.action.hoverOpacity),
            "--variant-outlinedBg": e.alpha((e.vars || e).palette.text.primary, (e.vars || e).palette.action.hoverOpacity)
          }
        }
      }
    }, {
      props: {
        size: "small",
        variant: "text"
      },
      style: {
        padding: "4px 5px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "text"
      },
      style: {
        padding: "8px 11px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "outlined"
      },
      style: {
        padding: "3px 9px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "outlined"
      },
      style: {
        padding: "7px 21px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "contained"
      },
      style: {
        padding: "4px 10px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "contained"
      },
      style: {
        padding: "8px 22px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        disableElevation: !0
      },
      style: {
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none"
        },
        [`&.${Mo.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${Mo.disabled}`]: {
          boxShadow: "none"
        }
      }
    }, {
      props: {
        fullWidth: !0
      },
      style: {
        width: "100%"
      }
    }, {
      props: {
        loadingPosition: "center"
      },
      style: {
        ...dt(e, ["background-color", "box-shadow", "border-color"], {
          duration: e.transitions.duration.short
        }),
        [`&.${Mo.loading}`]: {
          color: "transparent"
        }
      }
    }]
  };
})), NU = K("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.startIcon, n.loading && t.startIconLoadingStart];
  }
})(({
  theme: e
}) => ({
  display: "inherit",
  alignItems: "center",
  marginRight: 8,
  marginLeft: -4,
  "&::before": {
    content: '"\\200b"',
    width: 0,
    overflow: "hidden"
  },
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginLeft: -2
    }
  }, {
    props: {
      loadingPosition: "start",
      loading: !0
    },
    style: {
      ...dt(e, ["opacity"], {
        duration: e.transitions.duration.short
      }),
      opacity: 0
    }
  }, {
    props: {
      loadingPosition: "start",
      loading: !0,
      fullWidth: !0
    },
    style: {
      marginRight: -8
    }
  }, ...GE]
})), DU = K("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.endIcon, n.loading && t.endIconLoadingEnd];
  }
})(({
  theme: e
}) => ({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginRight: -2
    }
  }, {
    props: {
      loadingPosition: "end",
      loading: !0
    },
    style: {
      ...dt(e, ["opacity"], {
        duration: e.transitions.duration.short
      }),
      opacity: 0
    }
  }, {
    props: {
      loadingPosition: "end",
      loading: !0,
      fullWidth: !0
    },
    style: {
      marginLeft: -8
    }
  }, ...GE]
})), FU = K("span", {
  name: "MuiButton",
  slot: "LoadingIndicator"
})(({
  theme: e
}) => ({
  display: "none",
  position: "absolute",
  visibility: "visible",
  variants: [{
    props: {
      loading: !0
    },
    style: {
      display: "flex"
    }
  }, {
    props: {
      loadingPosition: "start"
    },
    style: {
      left: 14
    }
  }, {
    props: {
      loadingPosition: "start",
      size: "small"
    },
    style: {
      left: 10
    }
  }, {
    props: {
      variant: "text",
      loadingPosition: "start"
    },
    style: {
      left: 6
    }
  }, {
    props: {
      loadingPosition: "center"
    },
    style: {
      left: "50%",
      transform: "translate(-50%)",
      color: (e.vars || e).palette.action.disabled
    }
  }, {
    props: {
      loadingPosition: "end"
    },
    style: {
      right: 14
    }
  }, {
    props: {
      loadingPosition: "end",
      size: "small"
    },
    style: {
      right: 10
    }
  }, {
    props: {
      variant: "text",
      loadingPosition: "end"
    },
    style: {
      right: 6
    }
  }, {
    props: {
      loadingPosition: "start",
      fullWidth: !0
    },
    style: {
      position: "relative",
      left: -10
    }
  }, {
    props: {
      loadingPosition: "end",
      fullWidth: !0
    },
    style: {
      position: "relative",
      right: -10
    }
  }]
})), LC = K("span", {
  name: "MuiButton",
  slot: "LoadingIconPlaceholder"
})({
  display: "inline-block",
  width: "1em",
  height: "1em"
}), zU = /* @__PURE__ */ k.forwardRef(function(t, n) {
  const r = k.useContext(_U), o = k.useContext($U), i = co(r, t), s = Be({
    props: i,
    name: "MuiButton"
  }), {
    children: a,
    color: l = "primary",
    component: u = "button",
    className: c,
    disabled: d = !1,
    disableElevation: p = !1,
    disableFocusRipple: f = !1,
    endIcon: h,
    focusVisibleClassName: g,
    fullWidth: x = !1,
    id: y,
    loading: m = null,
    loadingIndicator: v,
    loadingPosition: C = "center",
    size: S = "medium",
    startIcon: b,
    type: I,
    variant: T = "text",
    ...L
  } = s, O = po(y), _ = v ?? /* @__PURE__ */ E.jsx(H0, {
    "aria-labelledby": O,
    color: "inherit",
    size: 16
  }), w = {
    ...s,
    color: l,
    component: u,
    disabled: d,
    disableElevation: p,
    disableFocusRipple: f,
    fullWidth: x,
    loading: m,
    loadingIndicator: _,
    loadingPosition: C,
    size: S,
    type: I,
    variant: T
  }, A = OU(w), P = (b || m && C === "start") && /* @__PURE__ */ E.jsx(NU, {
    className: A.startIcon,
    ownerState: w,
    children: b || /* @__PURE__ */ E.jsx(LC, {
      className: A.loadingIconPlaceholder,
      ownerState: w
    })
  }), M = (h || m && C === "end") && /* @__PURE__ */ E.jsx(DU, {
    className: A.endIcon,
    ownerState: w,
    children: h || /* @__PURE__ */ E.jsx(LC, {
      className: A.loadingIconPlaceholder,
      ownerState: w
    })
  }), $ = o || "", D = typeof m == "boolean" ? (
    // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ E.jsx("span", {
      className: A.loadingWrapper,
      style: {
        display: "contents"
      },
      children: m && /* @__PURE__ */ E.jsx(FU, {
        className: A.loadingIndicator,
        ownerState: w,
        children: _
      })
    })
  ) : null, {
    root: R,
    ...F
  } = A;
  return /* @__PURE__ */ E.jsxs(LU, {
    ownerState: w,
    className: oe(r.className, A.root, c, $),
    component: u,
    disabled: d || m,
    focusRipple: !f,
    focusVisibleClassName: oe(A.focusVisible, g),
    ref: n,
    internalNativeButton: !0,
    type: I,
    id: m ? O : y,
    ...L,
    classes: F,
    children: [P, C !== "end" && D, a, C === "end" && D, M]
  });
}), VE = /* @__PURE__ */ k.createContext({}), YE = /* @__PURE__ */ k.createContext(void 0);
function BU(e, t) {
  return t === void 0 || e === void 0 ? !1 : Array.isArray(t) ? t.includes(e) : e === t;
}
const jU = (e) => {
  const {
    classes: t,
    fullWidth: n,
    selected: r,
    disabled: o,
    size: i,
    color: s
  } = e, a = {
    root: ["root", r && "selected", o && "disabled", n && "fullWidth", `size${Ee(i)}`, s]
  };
  return ve(a, tO, t);
}, UU = K(Kf, {
  name: "MuiToggleButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[`size${Ee(n.size)}`]];
  }
})(ze(({
  theme: e
}) => ({
  ...e.typography.button,
  borderRadius: (e.vars || e).shape.borderRadius,
  padding: 11,
  border: `1px solid ${(e.vars || e).palette.divider}`,
  color: (e.vars || e).palette.action.active,
  [`&.${Fo.disabled}`]: {
    color: (e.vars || e).palette.action.disabled,
    border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`
  },
  "&:hover": {
    textDecoration: "none",
    // Reset on mouse devices
    backgroundColor: e.alpha((e.vars || e).palette.text.primary, (e.vars || e).palette.action.hoverOpacity),
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  variants: [{
    props: {
      color: "standard"
    },
    style: {
      [`&.${Fo.selected}`]: {
        color: (e.vars || e).palette.text.primary,
        backgroundColor: e.alpha((e.vars || e).palette.text.primary, (e.vars || e).palette.action.selectedOpacity),
        "&:hover": {
          backgroundColor: e.alpha((e.vars || e).palette.text.primary, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.hoverOpacity}`),
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            backgroundColor: e.alpha((e.vars || e).palette.text.primary, (e.vars || e).palette.action.selectedOpacity)
          }
        }
      }
    }
  }, ...Object.entries(e.palette).filter(Ur()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      [`&.${Fo.selected}`]: {
        color: (e.vars || e).palette[t].main,
        backgroundColor: e.alpha((e.vars || e).palette[t].main, (e.vars || e).palette.action.selectedOpacity),
        "&:hover": {
          backgroundColor: e.alpha((e.vars || e).palette[t].main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.hoverOpacity}`),
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            backgroundColor: e.alpha((e.vars || e).palette[t].main, (e.vars || e).palette.action.selectedOpacity)
          }
        }
      }
    }
  })), {
    props: {
      fullWidth: !0
    },
    style: {
      width: "100%"
    }
  }, {
    props: {
      size: "small"
    },
    style: {
      padding: 7,
      fontSize: e.typography.pxToRem(13)
    }
  }, {
    props: {
      size: "large"
    },
    style: {
      padding: 15,
      fontSize: e.typography.pxToRem(15)
    }
  }]
}))), HU = /* @__PURE__ */ k.forwardRef(function(t, n) {
  const {
    value: r,
    ...o
  } = k.useContext(VE), i = k.useContext(YE), s = co({
    ...o,
    selected: BU(t.value, r)
  }, t), a = Be({
    props: s,
    name: "MuiToggleButton"
  }), {
    children: l,
    className: u,
    color: c = "standard",
    disabled: d = !1,
    disableFocusRipple: p = !1,
    fullWidth: f = !1,
    onChange: h,
    onClick: g,
    selected: x,
    size: y = "medium",
    value: m,
    ...v
  } = a, C = {
    ...a,
    color: c,
    disabled: d,
    disableFocusRipple: p,
    fullWidth: f,
    size: y
  }, S = jU(C), b = (T) => {
    g && (g(T, m), T.defaultPrevented) || h && h(T, m);
  }, I = i || "";
  return /* @__PURE__ */ E.jsx(UU, {
    className: oe(o.className, S.root, u, I),
    internalNativeButton: !0,
    disabled: d,
    focusRipple: !p,
    ref: n,
    onClick: b,
    onChange: h,
    value: m,
    ownerState: C,
    "aria-pressed": x,
    ...v,
    children: l
  });
});
function WU(e) {
  return k.Children.toArray(e).filter((t) => /* @__PURE__ */ k.isValidElement(t));
}
function GU(e) {
  return Ce("MuiToggleButtonGroup", e);
}
const He = ce("MuiToggleButtonGroup", ["root", "selected", "horizontal", "vertical", "disabled", "grouped", "fullWidth", "firstButton", "lastButton", "middleButton"]), VU = (e) => {
  const {
    classes: t,
    orientation: n,
    fullWidth: r,
    disabled: o
  } = e;
  return ve({
    root: ["root", n, r && "fullWidth"],
    grouped: ["grouped", o && "disabled"],
    firstButton: ["firstButton"],
    lastButton: ["lastButton"],
    middleButton: ["middleButton"]
  }, GU, t);
}, YU = K("div", {
  name: "MuiToggleButtonGroup",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${He.grouped}`]: t.grouped
    }, {
      [`& .${He.firstButton}`]: t.firstButton
    }, {
      [`& .${He.lastButton}`]: t.lastButton
    }, {
      [`& .${He.middleButton}`]: t.middleButton
    }, t.root, n.orientation === "vertical" && t.vertical, n.fullWidth && t.fullWidth];
  }
})(ze(({
  theme: e
}) => ({
  display: "inline-flex",
  borderRadius: (e.vars || e).shape.borderRadius,
  variants: [{
    props: {
      orientation: "vertical"
    },
    style: {
      flexDirection: "column",
      [`& .${He.grouped}`]: {
        [`&.${He.selected} + .${He.grouped}.${He.selected}`]: {
          borderTop: 0,
          marginTop: 0
        }
      },
      [`& .${He.firstButton},& .${He.middleButton}`]: {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
      },
      [`& .${He.lastButton},& .${He.middleButton}`]: {
        marginTop: -1,
        borderTop: "1px solid transparent",
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0
      },
      [`& .${He.lastButton}.${Fo.disabled},& .${He.middleButton}.${Fo.disabled}`]: {
        borderTop: "1px solid transparent"
      }
    }
  }, {
    props: {
      fullWidth: !0
    },
    style: {
      width: "100%"
    }
  }, {
    props: {
      orientation: "horizontal"
    },
    style: {
      [`& .${He.grouped}`]: {
        [`&.${He.selected} + .${He.grouped}.${He.selected}`]: {
          borderLeft: 0,
          marginLeft: 0
        }
      },
      [`& .${He.firstButton},& .${He.middleButton}`]: {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0
      },
      [`& .${He.lastButton},& .${He.middleButton}`]: {
        marginLeft: -1,
        borderLeft: "1px solid transparent",
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0
      },
      [`& .${He.lastButton}.${Fo.disabled},& .${He.middleButton}.${Fo.disabled}`]: {
        borderLeft: "1px solid transparent"
      }
    }
  }]
}))), KU = /* @__PURE__ */ k.forwardRef(function(t, n) {
  const r = Be({
    props: t,
    name: "MuiToggleButtonGroup"
  }), {
    children: o,
    className: i,
    color: s = "standard",
    disabled: a = !1,
    exclusive: l = !1,
    fullWidth: u = !1,
    onChange: c,
    orientation: d = "horizontal",
    size: p = "medium",
    value: f,
    ...h
  } = r, g = {
    ...r,
    disabled: a,
    fullWidth: u,
    orientation: d,
    size: p
  }, x = VU(g), y = k.useCallback((I, T) => {
    if (!c)
      return;
    const L = f && f.indexOf(T);
    let O;
    f && L >= 0 ? (O = f.slice(), O.splice(L, 1)) : O = f ? f.concat(T) : [T], c(I, O);
  }, [c, f]), m = k.useCallback((I, T) => {
    c && c(I, f === T ? null : T);
  }, [c, f]), v = k.useMemo(() => ({
    className: x.grouped,
    onChange: l ? m : y,
    value: f,
    size: p,
    fullWidth: u,
    color: s,
    disabled: a
  }), [x.grouped, l, m, y, f, p, u, s, a]), C = WU(o), S = C.length, b = (I) => {
    const T = I === 0, L = I === S - 1;
    return T && L ? "" : T ? x.firstButton : L ? x.lastButton : x.middleButton;
  };
  return /* @__PURE__ */ E.jsx(YU, {
    role: "group",
    className: oe(x.root, i),
    ref: n,
    ownerState: g,
    ...h,
    children: /* @__PURE__ */ E.jsx(VE.Provider, {
      value: v,
      children: C.map((I, T) => /* @__PURE__ */ E.jsx(YE.Provider, {
        value: b(T),
        children: I
      }, T))
    })
  });
}), XU = {
  baseButton: zU,
  baseIconButton: AU,
  // MUI Toggle button has an `href` prop that is not compatible with our API.
  baseToggleButton: HU,
  baseToggleButtonGroup: KU
}, qU = {}, QU = N({}, XU, qU), ZU = /* @__PURE__ */ k.createContext(null);
function JU(e) {
  const {
    slots: t,
    slotProps: n = {},
    defaultSlots: r,
    children: o
  } = e, i = k.useMemo(() => ({
    slots: N({}, r, t),
    slotProps: n
  }), [r, t, n]);
  return /* @__PURE__ */ E.jsx(ZU.Provider, {
    value: i,
    children: o
  });
}
function al(e) {
  let t = 1 / 0, n = -1 / 0;
  for (const r of e ?? [])
    r < t && (t = r), r > n && (n = r);
  return [t, n];
}
const NC = (e, t) => t === "x" ? {
  x: e,
  y: null
} : {
  x: null,
  y: e
}, KE = (e) => {
  var s;
  const {
    axis: t,
    getFilters: n,
    isDefaultAxis: r
  } = e, o = n == null ? void 0 : n({
    currentAxisId: t.id,
    isDefaultAxis: r
  }), i = o ? (s = t.data) == null ? void 0 : s.filter((a, l) => o({
    x: null,
    y: null
  }, l)) : t.data;
  return al(i ?? []);
}, XE = (e) => (t) => {
  const {
    series: n,
    axis: r,
    getFilters: o,
    isDefaultAxis: i
  } = t;
  return Object.keys(n).filter((s) => {
    const a = e === "x" ? n[s].xAxisId : n[s].yAxisId;
    return r.domainSeries === "visible" && n[s].hidden ? !1 : a === r.id || i && a === void 0;
  }).reduce((s, a) => {
    const {
      stackedData: l,
      visibleStackedData: u
    } = n[a], c = o == null ? void 0 : o({
      currentAxisId: r.id,
      isDefaultAxis: i,
      seriesXAxisId: n[a].xAxisId,
      seriesYAxisId: n[a].yAxisId
    }), d = r.domainSeries === "visible" ? u : l, [p, f] = (d == null ? void 0 : d.reduce((h, g, x) => c && (!c(NC(g[0], e), x) || !c(NC(g[1], e), x)) ? h : [Math.min(...g, h[0]), Math.max(...g, h[1])], [1 / 0, -1 / 0])) ?? [1 / 0, -1 / 0];
    return [Math.min(p, s[0]), Math.max(f, s[1])];
  }, [1 / 0, -1 / 0]);
}, e8 = (e) => Object.keys(e.series).some((n) => e.series[n].layout === "horizontal") ? XE("x")(e) : KE(e), t8 = (e) => Object.keys(e.series).some((n) => e.series[n].layout === "horizontal") ? KE(e) : XE("y")(e);
function n8(e, t) {
  if (e.length === 0)
    return;
  const n = e.length, r = t, o = e[r[0]].length;
  for (let i = 0; i < o; i += 1) {
    let s = 0, a = 0;
    for (let l = 0; l < n; l += 1) {
      const u = e[r[l]], c = u[i], d = c[1] - c[0];
      d > 0 ? (c[0] = s, s += d, c[1] = s) : d < 0 ? (c[1] = a, a += d, c[0] = a) : c.data[u.key] > 0 ? (c[0] = s, c[1] = s) : c.data[u.key] < 0 ? (c[1] = a, c[0] = a) : (c[0] = 0, c[1] = 0);
    }
  }
}
const th = {
  /**
   * Series order such that the earliest series (according to the maximum value) is at the bottom.
   * */
  appearance: JT,
  /**
   *  Series order such that the smallest series (according to the sum of values) is at the bottom.
   * */
  ascending: eE,
  /**
   * Series order such that the largest series (according to the sum of values) is at the bottom.
   */
  descending: f3,
  /**
   * Series order such that the earliest series (according to the maximum value) are on the inside and the later series are on the outside. This order is recommended for streamgraphs in conjunction with the wiggle offset. See Stacked Graphs—Geometry & Aesthetics by Byron & Wattenberg for more information.
   */
  insideOut: p3,
  /**
   * Given series order [0, 1, … n - 1] where n is the number of elements in series. Thus, the stack order is given by the key accessor.
   */
  none: fs,
  /**
   * Reverse of the given series order [n - 1, n - 2, … 0] where n is the number of elements in series. Thus, the stack order is given by the reverse of the key accessor.
   */
  reverse: h3
}, nh = {
  /**
   * Applies a zero baseline and normalizes the values for each point such that the topline is always one.
   * */
  expand: l3,
  /**
   * Positive values are stacked above zero, negative values are stacked below zero, and zero values are stacked at zero.
   * */
  diverging: n8,
  /**
   * Applies a zero baseline.
   * */
  none: ds,
  /**
   * Shifts the baseline down such that the center of the streamgraph is always at zero.
   * */
  silhouette: u3,
  /**
   * Shifts the baseline so as to minimize the weighted wiggle of layers. This offset is recommended for streamgraphs in conjunction with the inside-out order. See Stacked Graphs—Geometry & Aesthetics by Bryon & Wattenberg for more information.
   * */
  wiggle: c3
}, qE = (e) => {
  const {
    series: t,
    seriesOrder: n,
    defaultStrategy: r
  } = e, o = [], i = {};
  return n.forEach((s) => {
    const {
      stack: a,
      stackOrder: l,
      stackOffset: u
    } = t[s];
    a === void 0 ? o.push({
      ids: [s],
      stackingOrder: th.none,
      stackingOffset: nh.none
    }) : i[a] === void 0 ? (i[a] = o.length, o.push({
      ids: [s],
      stackingOrder: th[l ?? (r == null ? void 0 : r.stackOrder) ?? "none"],
      stackingOffset: nh[u ?? (r == null ? void 0 : r.stackOffset) ?? "diverging"]
    })) : (o[i[a]].ids.push(s), l !== void 0 && (o[i[a]].stackingOrder = th[l]), u !== void 0 && (o[i[a]].stackingOffset = nh[u]));
  }), o;
}, r8 = (e) => e == null ? "" : e.toLocaleString(), o8 = (e, t, n) => {
  const {
    seriesOrder: r,
    series: o
  } = e, i = qE(e), s = t ?? [];
  r.forEach((l) => {
    const u = o[l].data;
    u !== void 0 ? u.forEach((c, d) => {
      s.length <= d ? s.push({
        [l]: c
      }) : s[d][l] = c;
    }) : o[l].valueGetter && t && t.forEach((c, d) => {
      const p = o[l].valueGetter(c);
      s.length <= d ? s.push({
        [l]: p
      }) : s[d][l] = p;
    });
  });
  const a = {};
  return i.forEach((l) => {
    const {
      ids: u,
      stackingOffset: c,
      stackingOrder: d
    } = l, p = u.map((y) => {
      const m = o[y].dataKey;
      return o[y].data === void 0 && m !== void 0 ? m : y;
    }), f = Qc().keys(p).value((y, m) => y[m] ?? 0).order(d).offset(c)(s), h = f.map((y) => y.index), g = () => h, x = Qc().keys(p).value((y, m) => {
      const v = p.indexOf(m), C = u[v];
      return n != null && n({
        type: "bar",
        seriesId: C
      }) ? y[m] ?? 0 : 0;
    }).order(g).offset(c)(s);
    u.forEach((y, m) => {
      const {
        dataKey: v,
        valueGetter: C
      } = o[y];
      let S;
      C ? S = t.map((I) => C(I)) : v ? S = t.map((I) => {
        const T = I[v];
        return typeof T == "number" ? T : null;
      }) : S = o[y].data;
      const b = !(n != null && n({
        type: "bar",
        seriesId: y
      }));
      a[y] = N({
        layout: "vertical",
        labelMarkType: "square",
        minBarSize: 0,
        valueFormatter: o[y].valueFormatter ?? r8
      }, o[y], {
        data: S,
        hidden: b,
        stackedData: f[m],
        visibleStackedData: x[m]
      });
    });
  }), {
    seriesOrder: r,
    stackingGroups: i,
    series: a
  };
};
function QE(e, t, n) {
  const {
    seriesOrder: r,
    series: o
  } = t;
  return r.reduce((i, s) => {
    const a = Mn(o[s].label, "legend");
    return a === void 0 || i.push({
      type: e,
      markType: o[s].labelMarkType ?? n,
      seriesId: s,
      color: o[s].color,
      label: a
    }), i;
  }, []);
}
const i8 = (e) => QE("bar", e), s8 = (e, t, n) => {
  const r = e.layout === "vertical";
  return uE({
    series: e,
    valueColorScale: r ? n == null ? void 0 : n.colorScale : t == null ? void 0 : t.colorScale,
    categoryColorScale: r ? t == null ? void 0 : t.colorScale : n == null ? void 0 : n.colorScale,
    categoryValues: r ? t == null ? void 0 : t.data : n == null ? void 0 : n.data
  });
};
function ZE(e, t) {
  return Object.keys(e).filter((n) => t.has(n)).flatMap((n) => {
    const r = e[n];
    return r.seriesOrder.filter((o) => {
      const i = r.series[o];
      return "hidden" in i && i.hidden ? !1 : i.data.length > 0 && i.data.some((s) => s != null);
    }).map((o) => ({
      type: n,
      seriesId: o
    }));
  });
}
function JE(e, t, n, r) {
  const o = ZE(e, t);
  if (o.length === 0)
    return null;
  const i = n !== void 0 && r !== void 0 ? o.findIndex((s) => s.type === n && s.seriesId === r) : -1;
  return i <= 0 ? o[o.length - 1] : o[(i - 1 + o.length) % o.length];
}
function eP(e, t) {
  return Object.keys(e).filter((n) => t.has(n)).flatMap((n) => {
    const r = e[n];
    return r.seriesOrder.filter((o) => {
      const i = r.series[o];
      return "hidden" in i && i.hidden ? !1 : i.data.length > 0 && i.data.some((s) => s != null && !(typeof s == "object" && "hidden" in s && s.hidden));
    }).map((o) => r.series[o].data.length);
  }).reduce((n, r) => Math.max(n, r), 0);
}
function tP(e, t, n, r) {
  const o = ZE(e, t);
  if (o.length === 0)
    return null;
  const i = n !== void 0 && r !== void 0 ? o.findIndex((s) => s.type === n && s.seriesId === r) : -1;
  return o[(i + 1) % o.length];
}
function Xf({
  processedSeries: e,
  type: t,
  seriesId: n,
  startIndex: r,
  dataLength: o,
  direction: i,
  allowCycles: s
}) {
  var d;
  if (o <= 0)
    return null;
  const a = (d = e[t]) == null ? void 0 : d.series[n];
  if (a && "hidden" in a && a.hidden)
    return null;
  const l = a == null ? void 0 : a.data, u = (p) => {
    if (!l)
      return !1;
    const f = l[p];
    return typeof f == "object" && f !== null && "hidden" in f && !!f.hidden;
  };
  let c = r;
  for (let p = 0; p < o; p += 1) {
    if (c >= 0 && c < o && !u(c))
      return c;
    if (s)
      c = (c + i + o) % o;
    else {
      const f = c + i;
      if (f < 0 || f >= o)
        return null;
      c = f;
    }
  }
  return null;
}
function nP(e, t, n) {
  var o, i;
  if (t === "sankey")
    return !1;
  const r = (i = (o = e[t]) == null ? void 0 : o.series[n]) == null ? void 0 : i.data;
  return r != null && r.length > 0;
}
function rP(e, t, n) {
  var o;
  const r = (o = e[t]) == null ? void 0 : o.series[n];
  return !!(r && "hidden" in r && r.hidden);
}
function a8(e, t = !1, n = !1) {
  return function(o, i) {
    var p, f;
    const s = Te(i);
    let a = o == null ? void 0 : o.seriesId, l = o == null ? void 0 : o.type;
    if (!l || a == null || !nP(s, l, a) || rP(s, l, a)) {
      const h = tP(s, e, l, a);
      if (h === null)
        return null;
      l = h.type, a = h.seriesId;
    }
    const u = n ? ((f = (p = s[l]) == null ? void 0 : p.series[a]) == null ? void 0 : f.data.length) ?? 0 : eP(s, e);
    let c = (o == null ? void 0 : o.dataIndex) == null ? 0 : o.dataIndex + 1;
    t ? c = c % u : c = Math.min(u - 1, c);
    const d = Xf({
      processedSeries: s,
      type: l,
      seriesId: a,
      startIndex: c,
      dataLength: u,
      direction: 1,
      allowCycles: t
    });
    return d === null ? null : {
      type: l,
      seriesId: a,
      dataIndex: d
    };
  };
}
function l8(e, t = !1, n = !1) {
  return function(o, i) {
    var p, f;
    const s = Te(i);
    let a = o == null ? void 0 : o.seriesId, l = o == null ? void 0 : o.type;
    if (!l || a == null || !nP(s, l, a) || rP(s, l, a)) {
      const h = JE(s, e, l, a);
      if (h === null)
        return null;
      l = h.type, a = h.seriesId;
    }
    const u = n ? ((f = (p = s[l]) == null ? void 0 : p.series[a]) == null ? void 0 : f.data.length) ?? 0 : eP(s, e);
    let c = (o == null ? void 0 : o.dataIndex) == null ? u - 1 : o.dataIndex - 1;
    t ? c = (u + c) % u : c = Math.max(0, c);
    const d = Xf({
      processedSeries: s,
      type: l,
      seriesId: a,
      startIndex: c,
      dataLength: u,
      direction: -1,
      allowCycles: t
    });
    return d === null ? null : {
      type: l,
      seriesId: a,
      dataIndex: d
    };
  };
}
function u8(e) {
  return function(n, r) {
    const o = Te(r);
    let i = n == null ? void 0 : n.seriesId, s = n == null ? void 0 : n.type;
    const a = tP(o, e, s, i);
    if (a === null)
      return null;
    s = a.type, i = a.seriesId;
    const l = o[s].series[i].data, u = (n == null ? void 0 : n.dataIndex) == null ? 0 : Math.min(n.dataIndex, l.length - 1), c = Xf({
      processedSeries: o,
      type: s,
      seriesId: i,
      startIndex: u,
      dataLength: l.length,
      direction: 1,
      allowCycles: !0
    });
    return c === null ? null : {
      type: s,
      seriesId: i,
      dataIndex: c
    };
  };
}
function c8(e) {
  return function(n, r) {
    const o = Te(r);
    let i = n == null ? void 0 : n.seriesId, s = n == null ? void 0 : n.type;
    const a = JE(o, e, s, i);
    if (a === null)
      return null;
    s = a.type, i = a.seriesId;
    const l = o[s].series[i].data, u = (n == null ? void 0 : n.dataIndex) == null ? l.length - 1 : Math.min(n.dataIndex, l.length - 1), c = Xf({
      processedSeries: o,
      type: s,
      seriesId: i,
      startIndex: u,
      dataLength: l.length,
      direction: -1,
      allowCycles: !0
    });
    return c === null ? null : {
      type: s,
      seriesId: i,
      dataIndex: c
    };
  };
}
function qf(e, t, n) {
  return (o) => {
    switch (o.key) {
      case "ArrowRight":
        return a8(e, t, n);
      case "ArrowLeft":
        return l8(e, t, n);
      case "ArrowDown":
        return c8(e);
      case "ArrowUp":
        return u8(e);
      default:
        return null;
    }
  };
}
const d8 = qf(Gf);
function W0(e, t = {}) {
  const {
    series: n,
    getColor: r,
    identifier: o
  } = e;
  if (!o || o.dataIndex === void 0)
    return null;
  const i = Mn(n.label, "tooltip"), s = n.data[o.dataIndex];
  if (t.skipNullValues && s == null)
    return null;
  const a = n.valueFormatter(s, {
    dataIndex: o.dataIndex
  });
  return N({
    identifier: o,
    color: r(o.dataIndex),
    label: i,
    value: s,
    formattedValue: a,
    markType: n.labelMarkType
  }, t.includeMarkShape && "showMark" in n && {
    markShape: n.showMark ? n.shape : void 0
  });
}
const f8 = (e) => W0(e, {
  skipNullValues: !0
}), p8 = (e) => Object.values(e).map((t) => t.layout === "horizontal" ? {
  direction: "y",
  axisId: t.yAxisId
} : {
  direction: "x",
  axisId: t.xAxisId
});
function h8(e, t, n) {
  const r = e && t > 0, o = !e && t < 0, i = r || o;
  return n ? !i : i;
}
function g8(e) {
  const {
    verticalLayout: t,
    xAxisConfig: n,
    yAxisConfig: r,
    series: o,
    numberOfGroups: i
  } = e, s = t ? n : r, a = (t ? r.reverse : n.reverse) ?? !1, {
    barWidth: l,
    offset: u
  } = hT(s.scale.bandwidth(), i, s.barGapRatio), c = n.scale, d = r.scale;
  return function(f, h) {
    const g = h * (l + u), x = s.data[f], y = o.data[f];
    if (y == null)
      return null;
    const v = o.visibleStackedData[f].map((L) => t ? d(L) : c(L)), [C, S] = al(v).map((L) => Math.round(L));
    let b = 0;
    y !== 0 && (o.hidden || (b = Math.max(o.minBarSize, S - C)));
    const I = h8(t, y, a);
    let T = 0;
    return I ? T = S - b : T = C, {
      x: t ? c(x) + g : T,
      y: t ? T : d(x) + g,
      height: t ? b : l,
      width: t ? l : b
    };
  };
}
const m8 = (e) => {
  var p;
  const {
    series: t,
    identifier: n,
    axesConfig: r,
    placement: o
  } = e;
  if (!n || n.dataIndex === void 0)
    return null;
  const i = (p = t.bar) == null ? void 0 : p.series[n.seriesId];
  if (t.bar == null || i == null || r.x === void 0 || r.y === void 0)
    return null;
  const s = t.bar.stackingGroups.findIndex((f) => f.ids.includes(i.id)), a = g8({
    verticalLayout: i.layout === "vertical",
    xAxisConfig: r.x,
    yAxisConfig: r.y,
    series: i,
    numberOfGroups: t.bar.stackingGroups.length
  })(n.dataIndex, s);
  if (a == null)
    return null;
  const {
    x: l,
    y: u,
    width: c,
    height: d
  } = a;
  switch (o) {
    case "right":
      return {
        x: l + c,
        y: u + d / 2
      };
    case "bottom":
      return {
        x: l + c / 2,
        y: u + d
      };
    case "left":
      return {
        x: l,
        y: u + d / 2
      };
    case "top":
    default:
      return {
        x: l + c / 2,
        y: u
      };
  }
};
function y8(e, t, n) {
  return N({}, e, {
    id: e.id ?? `auto-generated-id-${t}`,
    color: e.color ?? n[t % n.length]
  });
}
const v8 = (e) => `Type(${e})`, x8 = (e) => `Series(${e})`, C8 = (e) => e === void 0 ? "" : `Index(${e})`, Qf = (e) => `${v8(e.type)}${x8(e.seriesId)}${C8(e.dataIndex)}`, Zf = (e) => ({
  type: e.type,
  seriesId: e.seriesId,
  dataIndex: e.dataIndex
}), w8 = (e) => {
  var f, h;
  const {
    identifier: t,
    series: n,
    xAxis: r,
    yAxis: o,
    localeText: i
  } = e, s = Mn(n.label, "tooltip"), a = n.data[t.dataIndex] ?? null, u = n.layout === "horizontal" ? o : r, c = ((f = u.data) == null ? void 0 : f[t.dataIndex]) ?? null, d = n.valueFormatter(a, {
    dataIndex: t.dataIndex
  }), p = (h = u.valueFormatter) == null ? void 0 : h.call(u, c, {
    location: "tooltip",
    scale: u.scale
  });
  return i.barDescription({
    value: a,
    formattedValue: d ?? "",
    categoryValue: c,
    formattedCategoryValue: p ?? "",
    seriesLabel: s
  });
}, b8 = {
  seriesProcessor: o8,
  colorProcessor: s8,
  legendGetter: i8,
  tooltipGetter: f8,
  tooltipItemPositionGetter: m8,
  axisTooltipGetter: p8,
  xExtremumGetter: e8,
  yExtremumGetter: t8,
  getSeriesWithDefaultValues: y8,
  getItemAtPosition: _F,
  identifierSerializer: Qf,
  identifierCleaner: Zf,
  descriptionGetter: w8,
  keyboardFocusHandler: d8,
  isHighlightedCreator: _f,
  isFadedCreator: $f
}, S8 = (e) => {
  const {
    axis: t
  } = e;
  return al(t.data ?? []);
};
function k8(e, t, n, r) {
  return n.reduce((o, i, s) => {
    if (t[s] === null)
      return o;
    const [a, l] = e(i);
    return r && (!r({
      y: a,
      x: null
    }, s) || !r({
      y: l,
      x: null
    }, s)) ? o : [Math.min(a, l, o[0]), Math.max(a, l, o[1])];
  }, [1 / 0, -1 / 0]);
}
const I8 = (e) => {
  const {
    series: t,
    axis: n,
    isDefaultAxis: r,
    getFilters: o
  } = e;
  return Object.keys(t).filter((i) => {
    if (n.domainSeries === "visible" && t[i].hidden)
      return !1;
    const s = t[i].yAxisId;
    return s === n.id || r && s === void 0;
  }).reduce((i, s) => {
    const {
      area: a,
      stackedData: l,
      visibleStackedData: u,
      data: c
    } = t[s], d = a !== void 0, p = o == null ? void 0 : o({
      currentAxisId: n.id,
      isDefaultAxis: r,
      seriesXAxisId: t[s].xAxisId,
      seriesYAxisId: t[s].yAxisId
    }), f = d && n.scaleType !== "log" && typeof t[s].baseline != "string" ? (y) => y : (y) => [y[1], y[1]], h = k8(f, c, n.domainSeries === "visible" ? u : l, p), [g, x] = h;
    return [Math.min(g, i[0]), Math.max(x, i[1])];
  }, [1 / 0, -1 / 0]);
}, DC = ["circle", "square", "diamond", "cross", "star", "triangle", "wye"], T8 = (e) => e == null ? "" : e.toLocaleString();
function E8(e, t, n, r) {
  const {
    seriesOrder: o,
    series: i
  } = e, s = qE(N({}, e, {
    defaultStrategy: {
      stackOffset: "none"
    }
  })), a = /* @__PURE__ */ new Map(), l = t ?? [];
  o.forEach((c, d) => {
    a.set(c, d);
    const p = i[c].data;
    p !== void 0 ? p.forEach((f, h) => {
      l.length <= h ? l.push({
        [c]: f
      }) : l[h][c] = f;
    }) : i[c].valueGetter && t && t.forEach((f, h) => {
      const g = i[c].valueGetter(f);
      l.length <= h ? l.push({
        [c]: g
      }) : l[h][c] = g;
    });
  });
  const u = {};
  return s.forEach((c) => {
    const {
      ids: d,
      stackingOffset: p,
      stackingOrder: f
    } = c, h = d.map((v) => {
      const C = i[v].dataKey;
      return i[v].data === void 0 && C !== void 0 ? C : v;
    }), g = Qc().keys(h).value((v, C) => v[C] ?? 0).order(f).offset(p)(l), x = g.map((v) => v.index), y = () => x, m = Qc().keys(h).value((v, C) => {
      const S = h.indexOf(C), b = d[S];
      return n != null && n({
        type: r,
        seriesId: b
      }) ? v[C] ?? 0 : 0;
    }).order(y).offset(p)(l);
    d.forEach((v, C) => {
      const {
        dataKey: S,
        valueGetter: b
      } = i[v];
      let I;
      b ? I = t.map((L) => b(L)) : S ? I = t.map((L) => {
        const O = L[S];
        return typeof O == "number" ? O : null;
      }) : I = i[v].data;
      const T = !(n != null && n({
        type: r,
        seriesId: v
      }));
      u[v] = N({
        labelMarkType: "line+mark"
      }, i[v], {
        shape: i[v].shape ?? DC[(a.get(v) ?? 0) % DC.length],
        data: I,
        valueFormatter: i[v].valueFormatter ?? T8,
        hidden: T,
        stackedData: g[C],
        visibleStackedData: m[C]
      });
    });
  }), {
    seriesOrder: o,
    stackingGroups: s,
    series: u
  };
}
const P8 = (e, t, n) => E8(e, t, n, "line"), M8 = (e) => {
  const {
    seriesOrder: t,
    series: n
  } = e;
  return t.reduce((r, o) => {
    const i = Mn(n[o].label, "legend");
    return i === void 0 || r.push({
      type: "line",
      markType: n[o].labelMarkType,
      markShape: n[o].showMark ? n[o].shape ?? "circle" : void 0,
      seriesId: o,
      color: n[o].color,
      label: i
    }), r;
  }, []);
}, A8 = (e) => W0(e, {
  includeMarkShape: !0
}), R8 = (e) => Object.values(e).map((t) => ({
  direction: "x",
  axisId: t.xAxisId
})), _8 = (e, t, n) => N({}, e, {
  id: e.id ?? `auto-generated-id-${t}`,
  color: e.color ?? n[t % n.length],
  curve: e.curve ?? "monotoneX"
}), $8 = (e) => {
  var a, l;
  const {
    series: t,
    identifier: n,
    axesConfig: r
  } = e;
  if (!n || n.dataIndex === void 0)
    return null;
  const o = (a = t.line) == null ? void 0 : a.series[n.seriesId];
  if (o == null || r.x === void 0 || r.y === void 0)
    return null;
  const i = (l = r.x.data) == null ? void 0 : l[n.dataIndex], s = o.data[n.dataIndex] == null ? null : o.visibleStackedData[n.dataIndex][1];
  return i == null || s == null ? null : {
    x: r.x.scale(i),
    y: r.y.scale(s)
  };
};
function O8(e) {
  return "cpx1" in e;
}
class L8 {
  constructor() {
    ue(this, "segments", []);
    ue(this, "cx", 0);
    ue(this, "cy", 0);
  }
  moveTo(t, n) {
    this.cx = t, this.cy = n;
  }
  lineTo(t, n) {
    this.segments.push({
      x0: this.cx,
      y0: this.cy,
      x1: t,
      y1: n
    }), this.cx = t, this.cy = n;
  }
  bezierCurveTo(t, n, r, o, i, s) {
    this.segments.push({
      x0: this.cx,
      y0: this.cy,
      cpx1: t,
      cpy1: n,
      cpx2: r,
      cpy2: o,
      x1: i,
      y1: s
    }), this.cx = i, this.cy = s;
  }
  closePath() {
  }
}
function N8(e, t) {
  const n = e.x1 - e.x0;
  if (n === 0)
    return e.y0;
  const r = e.y1 - e.y0;
  if (!O8(e))
    return e.y0 + r * (t - e.x0) / n;
  const o = (e.cpx1 - e.x0) / n, i = (e.cpx2 - e.x0) / n, s = r === 0 ? 0 : (e.cpy1 - e.y0) / r, a = r === 0 ? 0 : (e.cpy2 - e.y0) / r, l = TT(o, s, i, a), u = (t - e.x0) / n;
  return e.y0 + r * l(u);
}
function rh(e, t, n) {
  if (e.length === 0)
    return null;
  if (e.length === 1)
    return e[0].y;
  const r = new L8(), i = P0(n)(r), s = e[0].x > t;
  let a = 0, l = !1;
  i.lineStart();
  for (const u of e)
    !l && u.x > t !== s && (a = Math.max(0, r.segments.length - 1), l = !0), i.point(u.x, u.y);
  i.lineEnd();
  for (let u = a; u < r.segments.length; u += 1) {
    const c = r.segments[u];
    if (t < c.x0 + 0.5 && t > c.x0 - 0.5)
      return c.y0;
    if (t < c.x1 + 0.5 && t > c.x1 - 0.5)
      return c.y1;
    const d = Math.min(c.x0, c.x1), p = Math.max(c.x0, c.x1);
    if (t >= d && t <= p)
      return N8(c, t);
  }
  return null;
}
function FC(e, t) {
  const {
    scale: n,
    data: r
  } = e;
  if (!r || r.length === 0)
    return null;
  if (et(n)) {
    const a = Fr(e, t);
    return a === -1 ? null : fr(e.scale)(r[a]) <= t ? a === r.length - 1 ? null : {
      left: a,
      right: a + 1
    } : a === 0 ? null : {
      left: a - 1,
      right: a
    };
  }
  const o = n.invert(t), i = Mr(o);
  let s = -1;
  for (let a = 0; a < r.length && Mr(r[a]) <= i; a += 1)
    s = a;
  return s === -1 ? null : s === r.length - 1 ? Mr(r[s]) < i ? null : {
    left: s,
    right: s
  } : {
    left: s,
    right: s + 1
  };
}
function D8(e, t, n) {
  if (typeof e == "number")
    return t(e);
  if (e === "max")
    return t.range()[1];
  if (e === "min")
    return t.range()[0];
  const r = t(n);
  return Number.isNaN(r) ? t.range()[0] : r;
}
function oh(e, t, n, r, o, i) {
  const s = [];
  if (i) {
    for (let u = 0; u < e.length; u += 1)
      if (e[u] != null) {
        const c = n(u);
        c != null && !Number.isNaN(c) && s.push({
          x: t(u),
          y: c
        });
      }
    return s;
  }
  let a = r;
  for (; a > 0 && e[a - 1] != null; )
    a -= 1;
  let l = o;
  for (; l < e.length - 1 && e[l + 1] != null; )
    l += 1;
  for (let u = a; u <= l; u += 1) {
    const c = n(u);
    c != null && !Number.isNaN(c) && s.push({
      x: t(u),
      y: c
    });
  }
  return s;
}
const F8 = 15;
function z8(e, t) {
  var p, f;
  if (!((p = e.experimentalFeatures) != null && p.enablePositionBasedPointerInteraction))
    return;
  const {
    axis: n,
    axisIds: r
  } = vt(e), {
    axis: o,
    axisIds: i
  } = xt(e), s = FT(e, "line");
  if (!s || s.seriesOrder.length === 0)
    return;
  const a = r[0], l = i[0];
  let u = 1 / 0, c;
  for (const h of s.seriesOrder) {
    const g = s.series[h];
    if (g.hidden)
      continue;
    const x = g.xAxisId ?? a, y = g.yAxisId ?? l, m = n[x], v = o[y], C = FC(m, t.x);
    if (!C)
      continue;
    const {
      left: S,
      right: b
    } = C, {
      visibleStackedData: I,
      data: T,
      connectNulls: L,
      curve: O
    } = g;
    if (!L && (T[S] == null || T[b] == null))
      continue;
    const _ = Fr(m, t.x);
    if (_ === -1)
      continue;
    if (S === b) {
      const R = (f = I[S]) == null ? void 0 : f[1];
      if (R == null)
        continue;
      const F = v.scale(R);
      if (F == null)
        continue;
      const z = Math.abs(t.y - F);
      z < u && (u = z, c = {
        type: "line",
        seriesId: h,
        dataIndex: _
      });
      continue;
    }
    const w = m.data;
    if (!w)
      continue;
    const A = fr(m.scale), M = oh(T, (R) => A(w[R]), (R) => {
      const F = I[R];
      return F ? v.scale(F[1]) : null;
    }, S, b, L);
    if (M.length < 2)
      continue;
    const $ = rh(M, t.x, O);
    if ($ == null)
      continue;
    const D = Math.abs(t.y - $);
    D < u && (u = D, c = {
      type: "line",
      seriesId: h,
      dataIndex: _
    });
  }
  if (c && u <= F8 && !s.series[c.seriesId].area)
    return c;
  const {
    stackingGroups: d
  } = s;
  for (let h = d.length - 1; h >= 0; h -= 1) {
    const g = d[h].ids;
    for (let x = 0; x < g.length; x += 1) {
      const y = g[x], m = s.series[y];
      if (m.hidden || !m.area)
        continue;
      const v = m.xAxisId ?? a, C = m.yAxisId ?? l, S = n[v], b = o[C];
      if (!S || !b)
        continue;
      const I = FC(S, t.x);
      if (!I)
        continue;
      const {
        left: T,
        right: L
      } = I, {
        visibleStackedData: O,
        data: _,
        connectNulls: w,
        baseline: A,
        curve: P
      } = m;
      if ((_[T] == null || _[L] == null) && !w)
        continue;
      const M = S.scale, $ = b.scale, D = fr(M), R = S.data;
      if (!R)
        continue;
      const F = (ee) => D(R[ee]), z = oh(_, F, (ee) => {
        const ne = O[ee];
        return ne ? $(ne[1]) : null;
      }, T, L, w), H = oh(_, F, (ee) => {
        const ne = O[ee];
        return ne ? D8(A, $, ne[0]) : null;
      }, T, L, w);
      if (z.length < 2 || H.length < 2)
        continue;
      const W = rh(z, t.x, P), q = rh(H, t.x, P);
      if (W == null || q == null)
        continue;
      const J = Math.min(q, W), se = Math.max(q, W);
      if (t.y >= J && t.y <= se) {
        const ee = Fr(S, t.x);
        return {
          type: "line",
          seriesId: y,
          dataIndex: ee === -1 ? T : ee
        };
      }
    }
  }
  return c;
}
const B8 = qf(Gf), j8 = (e) => {
  var d, p;
  const {
    identifier: t,
    series: n,
    xAxis: r,
    localeText: o
  } = e, i = Mn(n.label, "tooltip"), s = t.dataIndex;
  if (s === void 0)
    return "";
  const a = ((d = r.data) == null ? void 0 : d[s]) ?? null, l = n.data[s] ?? null, u = (p = r.valueFormatter) == null ? void 0 : p.call(r, a, {
    location: "tooltip",
    scale: r.scale
  }), c = n.valueFormatter(l, {
    dataIndex: s
  });
  return o.lineDescription({
    x: a,
    y: l,
    formattedXValue: u ?? "",
    formattedYValue: c ?? "",
    seriesLabel: i
  });
}, U8 = {
  colorProcessor: A0,
  seriesProcessor: P8,
  legendGetter: M8,
  tooltipGetter: A8,
  tooltipItemPositionGetter: $8,
  axisTooltipGetter: R8,
  xExtremumGetter: S8,
  yExtremumGetter: I8,
  getSeriesWithDefaultValues: _8,
  getItemAtPosition: z8,
  keyboardFocusHandler: B8,
  identifierSerializer: Qf,
  identifierCleaner: Zf,
  descriptionGetter: j8,
  isHighlightedCreator: _f,
  isFadedCreator: $f
}, H8 = (e = "none") => {
  if (typeof e == "function")
    return e;
  switch (e) {
    case "none":
      return null;
    case "desc":
      return (t, n) => n - t;
    case "asc":
      return (t, n) => t - n;
    default:
      return null;
  }
}, W8 = (e, t, n) => {
  const {
    seriesOrder: r,
    series: o
  } = e, i = {};
  return r.forEach((s) => {
    const a = o[s].data.filter((c, d) => n == null ? void 0 : n({
      type: "pie",
      seriesId: s,
      dataIndex: d
    })), l = zz().startAngle(Zr(o[s].startAngle ?? 0)).endAngle(Zr(o[s].endAngle ?? 360)).padAngle(Zr(o[s].paddingAngle ?? 0)).sortValues(H8(o[s].sortingValues ?? "none"))(a.map((c) => c.value));
    let u = 0;
    i[s] = N({
      labelMarkType: "circle",
      valueFormatter: (c) => c.value.toLocaleString()
    }, o[s], {
      data: o[s].data.map((c, d) => {
        var x, y;
        const p = c.id ?? `auto-generated-pie-id-${s}-${d}`, f = !(n != null && n({
          type: "pie",
          seriesId: s,
          dataIndex: d
        }));
        let h;
        if (f) {
          const m = u > 0 ? l[u - 1].endAngle : Zr(o[s].startAngle ?? 0);
          h = {
            startAngle: m,
            endAngle: m,
            padAngle: 0,
            value: c.value,
            index: d
          };
        } else
          h = l[u], u += 1;
        const g = N({}, c, {
          id: p,
          hidden: f
        }, h);
        return N({
          labelMarkType: "circle"
        }, g, {
          formattedValue: ((y = (x = o[s]).valueFormatter) == null ? void 0 : y.call(x, N({}, g, {
            label: Mn(g.label, "arc")
          }), {
            dataIndex: d
          })) ?? g.value.toLocaleString()
        });
      })
    });
  }), {
    seriesOrder: r,
    series: i
  };
}, G8 = (e) => (t) => e.data[t].color, V8 = (e) => {
  const {
    seriesOrder: t,
    series: n
  } = e;
  return t.reduce((r, o) => (n[o].data.forEach((i, s) => {
    const a = Mn(i.label, "legend");
    a !== void 0 && r.push({
      type: "pie",
      markType: i.labelMarkType ?? n[o].labelMarkType,
      seriesId: o,
      dataIndex: s,
      color: i.color,
      label: a
    });
  }), r), []);
}, Y8 = (e) => {
  const {
    series: t,
    getColor: n,
    identifier: r
  } = e;
  if (!r || r.dataIndex === void 0)
    return null;
  const o = t.data[r.dataIndex];
  if (o == null)
    return null;
  const i = Mn(o.label, "tooltip"), s = N({}, o, {
    label: i
  }), a = t.valueFormatter(s, {
    dataIndex: r.dataIndex
  });
  return {
    identifier: r,
    color: n(r.dataIndex),
    label: i,
    value: s,
    formattedValue: a,
    markType: o.labelMarkType ?? t.labelMarkType
  };
};
function K8(e, t) {
  const {
    height: n,
    width: r
  } = t, {
    cx: o,
    cy: i
  } = e, s = Math.min(r, n) / 2, a = Vo(o ?? "50%", r), l = Vo(i ?? "50%", n);
  return {
    cx: a,
    cy: l,
    availableRadius: s
  };
}
const X8 = (e, t) => {
  const n = {};
  for (const r of e.seriesOrder) {
    const {
      innerRadius: o,
      outerRadius: i,
      arcLabelRadius: s,
      cx: a,
      cy: l
    } = e.series[r], {
      cx: u,
      cy: c,
      availableRadius: d
    } = K8({
      cx: a,
      cy: l
    }, {
      width: t.width,
      height: t.height
    }), p = Vo(i ?? d, d), f = Vo(o ?? 0, d), h = s === void 0 ? (f + p) / 2 : Vo(s, d);
    n[r] = {
      radius: {
        available: d,
        inner: f,
        outer: p,
        label: h
      },
      center: {
        x: t.left + u,
        y: t.top + c
      }
    };
  }
  return n;
}, q8 = (e, t, n) => N({}, e, {
  id: e.id ?? `auto-generated-id-${t}`,
  data: e.data.map((r, o) => N({}, r, {
    color: r.color ?? n[o % n.length]
  }))
}), Q8 = (e) => {
  var x, y;
  const {
    series: t,
    identifier: n,
    placement: r,
    seriesLayout: o
  } = e;
  if (!n || n.dataIndex === void 0)
    return null;
  const i = (x = t.pie) == null ? void 0 : x.series[n.seriesId], s = (y = o.pie) == null ? void 0 : y[n.seriesId];
  if (i == null || s == null)
    return null;
  const {
    center: a,
    radius: l
  } = s, {
    data: u
  } = i, c = u[n.dataIndex];
  if (!c)
    return null;
  const d = [[l.inner, c.startAngle], [l.inner, c.endAngle], [l.outer, c.startAngle], [l.outer, c.endAngle]].map(([m, v]) => ({
    x: a.x + m * Math.sin(v),
    y: a.y - m * Math.cos(v)
  })), [p, f] = al(d.map((m) => m.x)), [h, g] = al(d.map((m) => m.y));
  switch (r) {
    case "bottom":
      return {
        x: (f + p) / 2,
        y: g
      };
    case "left":
      return {
        x: p,
        y: (g + h) / 2
      };
    case "right":
      return {
        x: f,
        y: (g + h) / 2
      };
    case "top":
    default:
      return {
        x: (f + p) / 2,
        y: h
      };
  }
}, Z8 = /* @__PURE__ */ new Set(["pie"]), J8 = qf(Z8), eH = (e) => {
  const {
    identifier: t,
    series: n,
    localeText: r
  } = e, o = n.data[t.dataIndex], i = Mn(o == null ? void 0 : o.label, "tooltip"), s = (o == null ? void 0 : o.value) ?? null, a = (o == null ? void 0 : o.formattedValue) ?? "", l = n.data.reduce((u, c) => u + ((c == null ? void 0 : c.value) ?? 0), 0);
  return r.pieDescription({
    value: s,
    totalValue: l,
    formattedValue: a,
    seriesLabel: i
  });
}, tH = {
  colorProcessor: G8,
  seriesProcessor: W8,
  seriesLayout: X8,
  legendGetter: V8,
  tooltipGetter: Y8,
  tooltipItemPositionGetter: Q8,
  getSeriesWithDefaultValues: q8,
  keyboardFocusHandler: J8,
  identifierSerializer: Qf,
  identifierCleaner: Zf,
  descriptionGetter: eH,
  isHighlightedCreator: _f,
  isFadedCreator: $f
}, nH = (e) => {
  const {
    series: t,
    axis: n,
    isDefaultAxis: r,
    getFilters: o
  } = e;
  let i = 1 / 0, s = -1 / 0;
  for (const a in t) {
    if (!Object.hasOwn(t, a) || n.domainSeries === "visible" && t[a].hidden)
      continue;
    const l = t[a].xAxisId;
    if (!(l === n.id || l === void 0 && r))
      continue;
    const u = o == null ? void 0 : o({
      currentAxisId: n.id,
      isDefaultAxis: r,
      seriesXAxisId: t[a].xAxisId,
      seriesYAxisId: t[a].yAxisId
    }), c = t[a].data ?? [];
    for (let d = 0; d < c.length; d += 1) {
      const p = c[d];
      u && !u(p, d) || p.x !== null && (p.x < i && (i = p.x), p.x > s && (s = p.x));
    }
  }
  return [i, s];
}, rH = (e) => {
  const {
    series: t,
    axis: n,
    isDefaultAxis: r,
    getFilters: o
  } = e;
  let i = 1 / 0, s = -1 / 0;
  for (const a in t) {
    if (!Object.hasOwn(t, a) || n.domainSeries === "visible" && t[a].hidden)
      continue;
    const l = t[a].yAxisId;
    if (!(l === n.id || l === void 0 && r))
      continue;
    const u = o == null ? void 0 : o({
      currentAxisId: n.id,
      isDefaultAxis: r,
      seriesXAxisId: t[a].xAxisId,
      seriesYAxisId: t[a].yAxisId
    }), c = t[a].data ?? [];
    for (let d = 0; d < c.length; d += 1) {
      const p = c[d];
      u && !u(p, d) || p.y !== null && (p.y < i && (i = p.y), p.y > s && (s = p.y));
    }
  }
  return [i, s];
};
function oH(e, t, n) {
  throw new Error(ke(279, e, t, n.map((r) => `"${r}"`).join(", ")));
}
const iH = ({
  series: e,
  seriesOrder: t
}, n, r) => ({
  series: Object.fromEntries(Object.entries(e).map(([i, s]) => {
    const a = s == null ? void 0 : s.datasetKeys, l = ["x", "y"].filter((c) => typeof (a == null ? void 0 : a[c]) != "string");
    s != null && s.datasetKeys && l.length > 0 && oH("Scatter", i, l);
    let u;
    return s.valueGetter ? u = (n == null ? void 0 : n.map(s.valueGetter)) ?? [] : a ? u = (n == null ? void 0 : n.map((c) => {
      const d = c[a.x], p = c[a.y], f = {
        x: d,
        y: p
      };
      return a.colorValue !== void 0 && (f.colorValue = c[a.colorValue]), a.sizeValue !== void 0 && (f.sizeValue = c[a.sizeValue]), a.z !== void 0 && (f.z = c[a.z]), a.id !== void 0 && (f.id = c[a.id]), f;
    })) ?? [] : u = s.data ?? [], [i, N({
      labelMarkType: "circle",
      markerSize: 4
    }, s, {
      preview: N({
        markerSize: 1
      }, s == null ? void 0 : s.preview),
      data: u,
      hidden: !(r != null && r({
        type: "scatter",
        seriesId: i
      })),
      valueFormatter: s.valueFormatter ?? ((c) => c && `(${c.x}, ${c.y})`)
    })];
  })),
  seriesOrder: t
}), sH = (e, t, n, r) => {
  const o = r == null ? void 0 : r.colorScale, i = n == null ? void 0 : n.colorScale, s = t == null ? void 0 : t.colorScale, a = lE(e);
  return o ? (l) => {
    var d, p;
    if (l === void 0)
      return e.color;
    if (((d = r == null ? void 0 : r.data) == null ? void 0 : d[l]) !== void 0) {
      const f = o((p = r == null ? void 0 : r.data) == null ? void 0 : p[l]);
      if (f !== null)
        return f;
    }
    const u = e.data[l], c = o(u.colorValue ?? u.z);
    return typeof c != "string" ? a({
      value: u,
      dataIndex: l
    }) : c;
  } : i ? (l) => {
    if (l === void 0)
      return e.color;
    const u = e.data[l], c = i(u.y);
    return typeof c != "string" ? a({
      value: u,
      dataIndex: l
    }) : c;
  } : s ? (l) => {
    if (l === void 0)
      return e.color;
    const u = e.data[l], c = s(u.x);
    return typeof c != "string" ? a({
      value: u,
      dataIndex: l
    }) : c;
  } : (l) => {
    if (l === void 0)
      return e.color;
    const u = e.data[l];
    return a({
      value: u,
      dataIndex: l
    });
  };
}, aH = (e) => QE("scatter", e), lH = (e) => W0(e), uH = (e, t, n) => N({}, e, {
  id: e.id ?? `auto-generated-id-${t}`,
  color: e.color ?? n[t % n.length]
}), cH = (e) => {
  var a, l, u;
  const {
    series: t,
    identifier: n,
    axesConfig: r
  } = e;
  if (!n || n.dataIndex === void 0)
    return null;
  const o = (a = t.scatter) == null ? void 0 : a.series[n.seriesId];
  if (o == null || r.x === void 0 || r.y === void 0)
    return null;
  const i = (l = o.data) == null ? void 0 : l[n.dataIndex].x, s = (u = o.data) == null ? void 0 : u[n.dataIndex].y;
  return i == null || s == null ? null : {
    x: r.x.scale(i),
    y: r.y.scale(s)
  };
}, dH = qf(Gf), fH = (e) => {
  var c, d;
  const {
    identifier: t,
    series: n,
    xAxis: r,
    yAxis: o,
    localeText: i
  } = e, s = Mn(n.label, "tooltip"), a = n.data[t.dataIndex], l = ((c = r.valueFormatter) == null ? void 0 : c.call(r, a == null ? void 0 : a.x, {
    location: "tooltip",
    scale: r.scale
  })) ?? "", u = ((d = o.valueFormatter) == null ? void 0 : d.call(o, a == null ? void 0 : a.y, {
    location: "tooltip",
    scale: o.scale
  })) ?? "";
  return i.scatterDescription({
    x: (a == null ? void 0 : a.x) ?? null,
    y: (a == null ? void 0 : a.y) ?? null,
    formattedXValue: l,
    formattedYValue: u,
    seriesLabel: s
  });
}, pH = {
  seriesProcessor: iH,
  colorProcessor: sH,
  legendGetter: aH,
  tooltipGetter: lH,
  tooltipItemPositionGetter: cH,
  xExtremumGetter: nH,
  yExtremumGetter: rH,
  getSeriesWithDefaultValues: uH,
  keyboardFocusHandler: dH,
  identifierSerializer: Qf,
  identifierCleaner: Zf,
  descriptionGetter: fH,
  isHighlightedCreator: _f,
  isFadedCreator: $f
}, hH = {
  bar: b8,
  scatter: pH,
  line: U8,
  pie: tH
}, gH = ["children", "localeText", "plugins", "slots", "slotProps", "seriesConfig"], mH = (e) => {
  const t = nn({
    props: e,
    name: "MuiChartsDataProvider"
  }), {
    children: n,
    localeText: r,
    plugins: o = UE,
    slots: i,
    slotProps: s,
    seriesConfig: a = hH
  } = t, l = xe(t, gH), u = tn(), c = {
    plugins: o,
    pluginParams: N({
      theme: u.palette.mode,
      seriesConfig: a
    }, l)
  };
  return {
    children: n,
    localeText: r,
    chartProviderProps: c,
    slots: i,
    slotProps: s
  };
};
function yH(e) {
  const {
    children: t,
    localeText: n,
    chartProviderProps: r,
    slots: o,
    slotProps: i
  } = mH(e);
  return /* @__PURE__ */ E.jsx(XF, N({}, r, {
    children: /* @__PURE__ */ E.jsx(C3, {
      localeText: n,
      children: /* @__PURE__ */ E.jsx(JU, {
        slots: o,
        slotProps: i,
        defaultSlots: QU,
        children: t
      })
    })
  }));
}
function vH(e) {
  return Ce("MuiChartsSurface", e);
}
const oP = () => ve({
  root: ["root"]
}, vH);
ce("MuiChartsSurface", ["root"]);
function zC(e) {
  const {
    isReversed: t,
    gradientId: n,
    size: r,
    direction: o,
    scale: i,
    colorMap: s
  } = e;
  return r <= 0 ? null : /* @__PURE__ */ E.jsx("linearGradient", {
    id: n,
    x1: "0",
    x2: "0",
    y1: "0",
    y2: "0",
    [`${o}${t ? 1 : 2}`]: `${r}px`,
    gradientUnits: "userSpaceOnUse",
    children: s.thresholds.map((a, l) => {
      const u = i(a);
      if (u === void 0)
        return null;
      const c = t ? 1 - u / r : u / r;
      return Number.isNaN(c) ? null : /* @__PURE__ */ E.jsxs(k.Fragment, {
        children: [/* @__PURE__ */ E.jsx("stop", {
          offset: c,
          stopColor: s.colors[l],
          stopOpacity: 1
        }), /* @__PURE__ */ E.jsx("stop", {
          offset: c,
          stopColor: s.colors[l + 1],
          stopOpacity: 1
        })]
      }, a.toString() + l);
    })
  });
}
const xH = 10;
function BC(e) {
  const {
    gradientUnits: t,
    isReversed: n,
    gradientId: r,
    size: o,
    direction: i,
    scale: s,
    colorScale: a,
    colorMap: l
  } = e, u = [l.min ?? 0, l.max ?? 100], c = u.map(s).filter((h) => h !== void 0);
  if (c.length !== 2)
    return null;
  const d = typeof u[0] == "number" ? rs(u[0], u[1]) : wy(u[0], u[1]), p = Math.round((Math.max(...c) - Math.min(...c)) / xH), f = `${u[0]}-${u[1]}-`;
  return /* @__PURE__ */ E.jsx("linearGradient", {
    id: r,
    x1: "0",
    x2: "0",
    y1: "0",
    y2: "0",
    [`${i}${n ? 1 : 2}`]: t === "objectBoundingBox" ? 1 : `${o}px`,
    gradientUnits: t ?? "userSpaceOnUse",
    children: Array.from({
      length: p + 1
    }, (h, g) => {
      const x = d(g / p);
      if (x === void 0)
        return null;
      const y = s(x);
      if (y === void 0)
        return null;
      const m = n ? 1 - y / o : y / o, v = a(x);
      return v === null ? null : /* @__PURE__ */ E.jsx("stop", {
        offset: m,
        stopColor: v,
        stopOpacity: 1
      }, f + g);
    })
  });
}
const CH = 10, wH = (e) => e ? {
  x1: "1",
  x2: "0",
  y1: "0",
  y2: "0"
} : {
  x1: "0",
  x2: "1",
  y1: "0",
  y2: "0"
};
function ih(e) {
  const {
    isReversed: t,
    gradientId: n,
    colorScale: r,
    colorMap: o
  } = e, i = [o.min ?? 0, o.max ?? 100], s = typeof i[0] == "number" ? rs(i[0], i[1]) : wy(i[0], i[1]), a = CH, l = `${i[0]}-${i[1]}-`;
  return /* @__PURE__ */ E.jsx("linearGradient", N({
    id: n
  }, wH(t), {
    gradientUnits: "objectBoundingBox",
    children: Array.from({
      length: a + 1
    }, (u, c) => {
      const d = c / a, p = s(d);
      if (p === void 0)
        return null;
      const f = r(p);
      return f === null ? null : /* @__PURE__ */ E.jsx("stop", {
        offset: d,
        stopColor: f,
        stopOpacity: 1
      }, l + c);
    })
  }));
}
function bH() {
  const {
    top: e,
    height: t,
    bottom: n,
    left: r,
    width: o,
    right: i
  } = Nn(), s = e + t + n, a = r + o + i, l = v0(), u = Rz(), {
    xAxis: c,
    xAxisIds: d
  } = $t(), {
    yAxis: p,
    yAxisIds: f
  } = Ot(), {
    zAxis: h,
    zAxisIds: g
  } = m0(), x = f.filter((v) => p[v].colorMap !== void 0), y = d.filter((v) => c[v].colorMap !== void 0), m = g.filter((v) => h[v].colorMap !== void 0);
  return x.length === 0 && y.length === 0 && m.length === 0 ? null : /* @__PURE__ */ E.jsxs("defs", {
    children: [x.map((v) => {
      const C = l(v), S = u(v), {
        colorMap: b,
        scale: I,
        colorScale: T,
        reverse: L
      } = p[v];
      return (b == null ? void 0 : b.type) === "piecewise" ? /* @__PURE__ */ E.jsx(zC, {
        isReversed: !L,
        scale: I,
        colorMap: b,
        size: s,
        gradientId: C,
        direction: "y"
      }, C) : (b == null ? void 0 : b.type) === "continuous" ? /* @__PURE__ */ E.jsxs(k.Fragment, {
        children: [/* @__PURE__ */ E.jsx(BC, {
          isReversed: !L,
          scale: I,
          colorScale: T,
          colorMap: b,
          size: s,
          gradientId: C,
          direction: "y"
        }), /* @__PURE__ */ E.jsx(ih, {
          isReversed: L,
          colorScale: T,
          colorMap: b,
          gradientId: S
        })]
      }, C) : null;
    }), y.map((v) => {
      const C = l(v), S = u(v), {
        colorMap: b,
        scale: I,
        reverse: T,
        colorScale: L
      } = c[v];
      return (b == null ? void 0 : b.type) === "piecewise" ? /* @__PURE__ */ E.jsx(zC, {
        isReversed: T,
        scale: I,
        colorMap: b,
        size: a,
        gradientId: C,
        direction: "x"
      }, C) : (b == null ? void 0 : b.type) === "continuous" ? /* @__PURE__ */ E.jsxs(k.Fragment, {
        children: [/* @__PURE__ */ E.jsx(BC, {
          isReversed: T,
          scale: I,
          colorScale: L,
          colorMap: b,
          size: a,
          gradientId: C,
          direction: "x"
        }), /* @__PURE__ */ E.jsx(ih, {
          isReversed: T,
          colorScale: L,
          colorMap: b,
          gradientId: S
        })]
      }, C) : null;
    }), m.map((v) => {
      const C = u(v), {
        colorMap: S,
        colorScale: b
      } = h[v];
      return (S == null ? void 0 : S.type) === "continuous" ? /* @__PURE__ */ E.jsx(ih, {
        colorScale: b,
        colorMap: S,
        gradientId: C
      }, C) : null;
    })]
  });
}
function SH(e) {
  return Ce("MuiChartsSvgLayer", e);
}
const kH = () => ve({
  root: ["root"]
}, SH);
ce("MuiChartsSvgLayer", ["root"]);
const IH = ["children", "className"], TH = K("svg", {
  name: "MuiChartsSvgLayer",
  slot: "Root"
})({
  width: "100%",
  height: "100%",
  position: "absolute",
  inset: 0
}), EH = /* @__PURE__ */ k.forwardRef(function(t, n) {
  const {
    store: r
  } = Ct(), o = r.use(JD), i = r.use(e5), s = nn({
    props: t,
    name: "MuiChartsSvgLayer"
  }), {
    children: a,
    className: l
  } = s, u = xe(s, IH), c = kH(), d = i > 0 && o > 0;
  return /* @__PURE__ */ E.jsxs(TH, N({
    viewBox: `0 0 ${o} ${i}`,
    className: oe(c.root, l)
  }, u, {
    ref: n,
    "aria-hidden": !0,
    children: [/* @__PURE__ */ E.jsx(bH, {}), d && a]
  }));
});
function PH() {
  const {
    instance: e
  } = Ct(), t = y0(), n = fe(), r = k.useRef(!1), o = k.useRef(void 0);
  k.useEffect(() => {
    const i = t.current;
    if (!i || !Object.values(n.state.seriesConfig.config).some((d) => d.getItemAtPosition != null))
      return;
    function a() {
      r.current = !0;
    }
    function l() {
      const d = o.current;
      d && (o.current = void 0, e.removeTooltipItem(d), e.clearHighlight());
    }
    function u() {
      r.current = !1, l();
    }
    const c = function(p) {
      var g, x;
      const f = ls(i, p);
      if (!e.isPointInside(f.x, f.y)) {
        l();
        return;
      }
      let h;
      for (const y of Object.keys(n.state.seriesConfig.config))
        if (h = (x = (g = n.state.seriesConfig.config[y]).getItemAtPosition) == null ? void 0 : x.call(g, n.state, {
          x: f.x,
          y: f.y
        }), h)
          break;
      h ? (e.setLastUpdateSource("pointer"), e.setTooltipItem(h), e.setHighlight(h), o.current = h) : l();
    };
    return i.addEventListener("pointerleave", u), i.addEventListener("pointermove", c), i.addEventListener("pointerenter", a), () => {
      i.removeEventListener("pointerenter", a), i.removeEventListener("pointermove", c), i.removeEventListener("pointerleave", u), r.current && u();
    };
  }, [e, n, t, n.state.seriesConfig.config]);
}
function MH() {
  var m, v;
  const e = fe(), t = e.use(xF), n = e.use(nt), r = Fl(), {
    localeText: o
  } = k0(), {
    xAxis: i,
    xAxisIds: s
  } = $t(), {
    yAxis: a,
    yAxisIds: l
  } = Ot(), {
    rotationAxis: u,
    rotationAxisIds: c
  } = h0(), {
    radiusAxis: d,
    radiusAxisIds: p
  } = g0();
  if (t === null)
    return null;
  const {
    type: f,
    seriesId: h
  } = t, g = (m = r[f]) == null ? void 0 : m.series[h];
  if (!g)
    return null;
  const x = (v = n[f]) == null ? void 0 : v.descriptionGetter;
  if (!x)
    return null;
  const y = {
    identifier: t,
    series: g,
    localeText: o
  };
  if (tl(g)) {
    const C = g.xAxisId ?? s[0], S = g.yAxisId ?? l[0];
    y.xAxis = i[C], y.yAxis = a[S];
  } else $l(f) && (y.rotationAxis = u[c[0]], y.radiusAxis = d[p[0]]);
  return x(y);
}
const AH = {
  borderWidth: 0,
  width: "100%",
  height: "100%",
  overflow: "hidden",
  position: "absolute",
  inset: 0,
  padding: 0,
  outline: "none",
  pointerEvents: "none"
};
function RH() {
  const e = MH(), t = Dl(), n = k.useRef(null), r = k.useRef(0), o = k.useRef(null);
  return k.useEffect(() => {
    const i = o.current;
    if (i) {
      if (i.children.length === 0) {
        for (let s = 0; s < 2; s += 1) {
          const a = document.createElement("div");
          a.setAttribute("id", s === 0 ? `voiceover-${t}-1` : `voiceover-${t}-2`), a.style.display = "none", i.appendChild(a);
        }
        for (let s = 0; s < 2; s += 1) {
          const a = document.createElement("div");
          s === (r.current + 1) % 2 && e && a.setAttribute("tabindex", "0"), a.setAttribute("role", "img"), a.setAttribute("aria-labelledby", s === 0 ? `voiceover-${t}-1` : `voiceover-${t}-2`), a.style.width = "100%", a.style.height = "100%", a.style.outline = "none", i.appendChild(a);
        }
      }
      if (e && e !== n.current) {
        n.current = e;
        const s = r.current;
        r.current = (r.current + 1) % 2;
        const a = r.current, l = i.children[2 + a], u = i.children[2 + s], c = i.children[a], d = i.children[s];
        c.textContent = e ?? "", d.textContent = e ?? "", l.setAttribute("aria-hidden", "false"), l.setAttribute("aria-labelledby", a === 0 ? `voiceover-${t}-1` : `voiceover-${t}-2`), e && l.setAttribute("tabindex", "0"), u.setAttribute("aria-hidden", "true"), u.setAttribute("aria-labelledby", a === 0 ? `voiceover-${t}-1` : `voiceover-${t}-2`), u.removeAttribute("tabindex"), l.focus();
      }
    }
  }, [e, t]), /* @__PURE__ */ E.jsx("div", {
    role: "none",
    tabIndex: e ? void 0 : 0,
    ref: o,
    style: AH
  });
}
const _H = ["children", "title", "desc", "className"], $H = K("div", {
  name: "MuiChartsLayerContainer",
  slot: "Root"
})(({
  ownerState: e
}) => ({
  width: e.width ?? "100%",
  height: e.height ?? "100%",
  display: "flex",
  position: "relative",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  touchAction: "pan-y",
  userSelect: "none",
  gridArea: "chart",
  "&:focus": {
    outline: "none"
    // By default, don't show focus outline
  }
})), OH = /* @__PURE__ */ k.forwardRef(function(t, n) {
  const {
    store: r,
    instance: o
  } = Ct(), i = r.use($I), s = r.use(OI), a = r.use(CF);
  PH();
  const l = nn({
    props: t,
    name: "MuiChartsLayerContainer"
  }), {
    children: u,
    title: c,
    desc: d,
    className: p
  } = l, f = xe(l, _H), h = oP(), g = y0(), x = Ze(g, n), y = po();
  return (
    // `role="none"` is an alias for `role="presentation"`, but aria-query treats them differently.
    // See https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/issues/1090
    // eslint-disable-next-line jsx-a11y/role-supports-aria-props
    /* @__PURE__ */ E.jsxs($H, N({
      ref: x,
      ownerState: {
        width: i,
        height: s
      },
      role: "none",
      "aria-label": c,
      "aria-describedby": d ? y : void 0,
      className: oe(h.root, p)
    }, f, {
      onPointerEnter: (m) => {
        var v, C;
        (v = f.onPointerEnter) == null || v.call(f, m), (C = o.handlePointerEnter) == null || C.call(o, m);
      },
      onPointerLeave: (m) => {
        var v, C;
        (v = f.onPointerLeave) == null || v.call(f, m), (C = o.handlePointerLeave) == null || C.call(o, m);
      },
      onClick: (m) => {
        var v, C;
        (v = f.onClick) == null || v.call(f, m), (C = o.handleClick) == null || C.call(o, m);
      },
      children: [a && /* @__PURE__ */ E.jsx(RH, {}), d && /* @__PURE__ */ E.jsx("span", {
        id: y,
        style: {
          display: "none"
        },
        children: d
      }), u]
    }))
  );
}), LH = ["children", "className", "title", "desc"], NH = /* @__PURE__ */ k.forwardRef(function(t, n) {
  const r = nn({
    props: t,
    name: "MuiChartsSurface"
  }), {
    children: o,
    className: i,
    title: s,
    desc: a
  } = r, l = xe(r, LH), u = oP();
  return /* @__PURE__ */ E.jsx(OH, {
    className: oe(u.root, i),
    ref: n,
    title: s,
    desc: a,
    children: /* @__PURE__ */ E.jsx(EH, N({}, l, {
      children: o
    }))
  });
}), jC = ce("MuiChartsToolbar", ["root"]), DH = ["children", "sx", "extendVertically", "hideLegend", "legendDirection", "legendPosition"], FH = (e) => (e == null ? void 0 : e.horizontal) === "start" ? "start" : (e == null ? void 0 : e.horizontal) === "end" ? "end" : "center", zH = (e) => (e == null ? void 0 : e.vertical) === "top" ? "flex-start" : (e == null ? void 0 : e.vertical) === "bottom" ? "flex-end" : "center", BH = (e, t, n) => e ? '"chart"' : t === "vertical" ? (n == null ? void 0 : n.horizontal) === "start" ? '"legend chart"' : '"chart legend"' : (n == null ? void 0 : n.vertical) === "bottom" ? `"chart"
            "legend"` : `"legend"
          "chart"`, jH = (e = !1, t = "horizontal", n = "end", r = void 0) => {
  const o = r ? "auto" : "1fr";
  return t === "horizontal" || e ? o : n === "start" ? `auto ${o}` : `${o} auto`;
}, UH = (e = !1, t = "horizontal", n = "top") => {
  const r = "1fr";
  return t === "vertical" || e ? r : n === "bottom" ? `${r} auto` : `auto ${r}`;
}, HH = K("div", {
  name: "MuiChartsWrapper",
  slot: "Root",
  shouldForwardProp: (e) => Gu(e) && e !== "extendVertically" && e !== "width"
})(({
  ownerState: e,
  width: t
}) => {
  var i, s;
  const n = jH(e.hideLegend, e.legendDirection, (i = e.legendPosition) == null ? void 0 : i.horizontal, t), r = UH(e.hideLegend, e.legendDirection, (s = e.legendPosition) == null ? void 0 : s.vertical), o = BH(e.hideLegend, e.legendDirection, e.legendPosition);
  return {
    variants: [{
      props: {
        extendVertically: !0
      },
      style: {
        height: "100%",
        minHeight: 0
      }
    }],
    flex: 1,
    display: "grid",
    gridTemplateColumns: n,
    gridTemplateRows: r,
    gridTemplateAreas: o,
    [`&:has(.${jC.root})`]: {
      // Add a row for toolbar if there is one.
      gridTemplateRows: `auto ${r}`,
      gridTemplateAreas: `"${n.split(" ").map(() => "toolbar").join(" ")}"
        ${o}`
    },
    [`& .${jC.root}`]: {
      gridArea: "toolbar",
      justifySelf: "center"
    },
    justifyContent: "safe center",
    justifyItems: FH(e.legendPosition),
    alignItems: zH(e.legendPosition)
  };
}), WH = /* @__PURE__ */ k.forwardRef(function(t, n) {
  const {
    children: r,
    sx: o,
    extendVertically: i,
    hideLegend: s,
    legendDirection: a,
    legendPosition: l
  } = t, u = xe(t, DH), c = g3(), d = Ze(c, n), p = fe(), f = p.use($I), h = p.use(OI), g = k.useMemo(() => ({
    hideLegend: s,
    legendDirection: a,
    legendPosition: l
  }), [s, a, l]);
  return /* @__PURE__ */ E.jsx(HH, N({
    ref: d,
    ownerState: g,
    sx: o,
    extendVertically: i ?? h === void 0,
    width: f
  }, u, {
    children: r
  }));
}), ku = 6;
function GH() {
  const e = tn(), t = w3(), n = zl(), {
    xAxis: r,
    xAxisIds: o
  } = $t(), {
    yAxis: i,
    yAxisIds: s
  } = Ot();
  if (t === null || t.type !== "line" || !n)
    return null;
  const a = n.series[t.seriesId];
  if (!a || a.hidden || a.data[t.dataIndex] == null)
    return null;
  const l = a.xAxisId ?? o[0], u = a.yAxisId ?? s[0];
  return /* @__PURE__ */ E.jsx("rect", {
    fill: "none",
    stroke: (e.vars ?? e).palette.text.primary,
    strokeWidth: 2,
    x: r[l].scale(r[l].data[t.dataIndex]) - ku,
    y: i[u].scale(a.visibleStackedData[t.dataIndex][1]) - ku,
    width: 2 * ku,
    height: 2 * ku,
    rx: 3,
    ry: 3
  });
}
const VH = /* @__PURE__ */ k.forwardRef(function(t, n) {
  var b, I, T, L;
  const r = nn({
    props: t,
    name: "MuiLineChart"
  }), {
    chartsWrapperProps: o,
    chartsContainerProps: i,
    gridProps: s,
    clipPathProps: a,
    clipPathGroupProps: l,
    areaPlotProps: u,
    linePlotProps: c,
    markPlotProps: d,
    overlayProps: p,
    chartsAxisProps: f,
    axisHighlightProps: h,
    lineHighlightPlotProps: g,
    legendProps: x,
    children: y
  } = w6(r), {
    chartsDataProviderProps: m,
    chartsSurfaceProps: v
  } = D6(i), C = ((b = r.slots) == null ? void 0 : b.tooltip) ?? Fj, S = (I = r.slots) == null ? void 0 : I.toolbar;
  return /* @__PURE__ */ E.jsx(yH, N({}, m, {
    children: /* @__PURE__ */ E.jsxs(WH, N({}, o, {
      ref: n,
      children: [r.showToolbar && S ? /* @__PURE__ */ E.jsx(S, N({}, (T = r.slotProps) == null ? void 0 : T.toolbar)) : null, !r.hideLegend && /* @__PURE__ */ E.jsx(qj, N({}, x)), /* @__PURE__ */ E.jsxs(NH, N({}, v, {
        children: [/* @__PURE__ */ E.jsx(h6, N({}, s)), /* @__PURE__ */ E.jsxs("g", N({}, l, {
          children: [/* @__PURE__ */ E.jsx(H3, N({}, u)), /* @__PURE__ */ E.jsx(Z3, N({}, c)), /* @__PURE__ */ E.jsx(v6, N({}, p)), /* @__PURE__ */ E.jsx(t6, N({}, h))]
        })), /* @__PURE__ */ E.jsx(GH, {}), /* @__PURE__ */ E.jsx(HB, N({}, f)), /* @__PURE__ */ E.jsx("g", {
          "data-drawing-container": !0,
          children: /* @__PURE__ */ E.jsx(lB, N({}, d))
        }), /* @__PURE__ */ E.jsx(s6, N({}, g)), /* @__PURE__ */ E.jsx(n6, N({}, a)), y]
      })), !r.loading && /* @__PURE__ */ E.jsx(C, N({}, (L = r.slotProps) == null ? void 0 : L.tooltip))]
    }))
  }));
});
function YH(e) {
  const t = Cl(() => KH(e)).current;
  return t.next = e, me(t.effect), t;
}
function KH(e) {
  const t = {
    current: e,
    next: e,
    effect: () => {
      t.current = t.next;
    }
  };
  return t;
}
const UC = nr.createContext(null);
function XH(e) {
  if (e == null)
    return {
      appear: void 0,
      enter: void 0,
      exit: void 0
    };
  if (typeof e == "number")
    return {
      appear: e,
      enter: e,
      exit: e
    };
  const t = e.enter, n = e.exit;
  return {
    appear: e.appear !== void 0 ? e.appear : t,
    enter: t,
    exit: n
  };
}
function qH(e) {
  if (e.autoTimeout != null)
    return e.autoTimeout;
  const t = XH(e.timeout);
  return e.currentStatus === "entering" ? e.isAppearing ? t.appear ?? t.enter ?? null : t.enter ?? null : t.exit ?? null;
}
function iP(e) {
  const {
    in: t = !1,
    appear: n = !1,
    enter: r = !0,
    exit: o = !0,
    mountOnEnter: i = !1,
    unmountOnExit: s = !1,
    timeout: a,
    addEndListener: l,
    reduceMotion: u = !1,
    getAutoTimeout: c,
    nodeRef: d,
    onEnter: p,
    onEntering: f,
    onEntered: h,
    onExit: g,
    onExiting: x,
    onExited: y,
    children: m,
    ...v
  } = e, C = k.useContext(UC), S = C && !C.isMounting ? r : n, [b, I] = k.useState(() => t ? S ? "exited" : "entered" : i || s ? "unmounted" : "exited"), T = k.useRef(b);
  T.current = b, t && b === "unmounted" && (T.current = "exited", I("exited"));
  const L = k.useRef(t && S), O = k.useRef(!1), _ = k.useRef(null), w = k.useRef(b), A = k.useRef(!1), P = k.useRef(u), M = YH({
    timeout: a,
    addEndListener: l,
    reduceMotion: u,
    getAutoTimeout: c,
    onEnter: p,
    onEntering: f,
    onEntered: h,
    onExit: g,
    onExiting: x,
    onExited: y,
    enter: r,
    exit: o,
    mountOnEnter: i,
    unmountOnExit: s,
    nodeRef: d,
    parentGroup: C
  }), $ = k.useCallback(() => {
    _.current !== null && (_.current.cancel(), _.current = null);
  }, []), D = k.useCallback((W) => {
    let q = !0;
    const J = () => {
      q && (q = !1, _.current = null, W());
    };
    return J.cancel = () => {
      q = !1;
    }, _.current = J, J;
  }, []), R = k.useCallback((W, q) => {
    var he, be;
    let J;
    const se = () => {
      J !== void 0 && (clearTimeout(J), J = void 0);
    }, ee = D(() => {
      se(), T.current = W, I(W);
    }), ne = ee.cancel;
    ee.cancel = () => {
      se(), ne();
    };
    const Z = M.current.nodeRef.current, U = M.current.addEndListener, X = M.current.getAutoTimeout !== void 0, re = (be = (he = M.current).getAutoTimeout) == null ? void 0 : be.call(he), j = qH({
      currentStatus: q,
      isAppearing: A.current,
      timeout: M.current.timeout,
      autoTimeout: re
    }), ae = P.current, Q = j ?? (ae && X ? 0 : null), we = (wt) => {
      J = setTimeout(ee, wt);
    };
    if (!Z) {
      we(0);
      return;
    }
    if (U) {
      Q != null && we(ae ? 0 : Q), U.length >= 2 ? U(Z, ee) : U(ee);
      return;
    }
    we(ae ? 0 : j ?? 0);
  }, [D, M]), F = k.useCallback((W) => {
    var se;
    const q = M.current, J = q.parentGroup ? q.parentGroup.isMounting : W;
    if (A.current = J, !W && !q.enter) {
      T.current = "entered", I("entered");
      return;
    }
    P.current = q.reduceMotion, (se = q.onEnter) == null || se.call(q, J), T.current = "entering", I("entering");
  }, [M]), z = k.useCallback(() => {
    var q;
    const W = M.current;
    if (!W.exit) {
      T.current = "exited", I("exited");
      return;
    }
    P.current = W.reduceMotion, (q = W.onExit) == null || q.call(W), T.current = "exiting", I("exiting");
  }, [M]), H = k.useCallback((W, q) => {
    if ($(), q === "entering") {
      const J = M.current;
      if (J.mountOnEnter || J.unmountOnExit) {
        const se = J.nodeRef.current;
        se && iy(se);
      }
      F(W);
    } else
      z();
  }, [$, F, z, M]);
  return me(() => (O.current = !0, L.current && (L.current = !1, H(!0, "entering")), () => {
    O.current = !1, $();
  }), [$, H]), me(() => {
    if (!O.current)
      return;
    const W = T.current;
    t ? W !== "entering" && W !== "entered" && H(!1, "entering") : W === "entering" || W === "entered" ? H(!1, "exiting") : W === "exited" && s && (T.current = "unmounted", I("unmounted"));
  }, [t, b, s, H]), me(() => {
    var J, se, ee, ne;
    if (b === "unmounted" || w.current === "unmounted") {
      w.current = b;
      return;
    }
    if (w.current === b)
      return;
    w.current = b;
    const q = M.current;
    b === "entering" ? ((J = q.onEntering) == null || J.call(q, A.current), R("entered", "entering")) : b === "exiting" ? ((se = q.onExiting) == null || se.call(q), R("exited", "exiting")) : b === "entered" ? (ee = q.onEntered) == null || ee.call(q, A.current) : b === "exited" && ((ne = q.onExited) == null || ne.call(q));
  }, [M, R, b]), b === "unmounted" ? null : /* @__PURE__ */ E.jsx(UC.Provider, {
    value: null,
    children: m(b, v)
  });
}
function ur(e, t) {
  const {
    className: n,
    elementType: r,
    ownerState: o,
    externalForwardedProps: i,
    internalForwardedProps: s,
    shouldForwardComponentProp: a = !1,
    ...l
  } = t, {
    component: u,
    slots: c = {
      [e]: void 0
    },
    slotProps: d = {
      [e]: void 0
    },
    ...p
  } = i, f = c[e] || r, h = vk(d[e], o), {
    props: {
      component: g,
      ...x
    },
    internalRef: y
  } = yk({
    className: n,
    ...l,
    externalForwardedProps: e === "root" ? p : void 0,
    externalSlotProps: h
  }), m = Ze(y, h == null ? void 0 : h.ref, t.ref), v = e === "root" ? g || u : g, C = hk(f, {
    ...e === "root" && !u && !c[e] && s,
    ...e !== "root" && !c[e] && s,
    ...x,
    ...v && !a && {
      as: v
    },
    ...v && a && {
      component: v
    },
    ref: m
  }, o);
  return [f, C];
}
function QH(e) {
  return Ce("MuiPaper", e);
}
ce("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const ZH = (e) => {
  const {
    square: t,
    elevation: n,
    variant: r,
    classes: o
  } = e, i = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${n}`]
  };
  return ve(i, QH, o);
}, JH = K("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], !n.square && t.rounded, n.variant === "elevation" && t[`elevation${n.elevation}`]];
  }
})(ze(({
  theme: e
}) => ({
  backgroundColor: (e.vars || e).palette.background.paper,
  color: (e.vars || e).palette.text.primary,
  ...dt(e, "box-shadow"),
  variants: [{
    props: ({
      ownerState: t
    }) => !t.square,
    style: {
      borderRadius: e.shape.borderRadius
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      border: `1px solid ${(e.vars || e).palette.divider}`
    }
  }, {
    props: {
      variant: "elevation"
    },
    style: {
      boxShadow: "var(--Paper-shadow)",
      backgroundImage: "var(--Paper-overlay)"
    }
  }]
}))), ua = /* @__PURE__ */ k.forwardRef(function(t, n) {
  var f;
  const r = Be({
    props: t,
    name: "MuiPaper"
  }), o = tn(), {
    className: i,
    component: s = "div",
    elevation: a = 1,
    square: l = !1,
    variant: u = "elevation",
    ...c
  } = r, d = {
    ...r,
    component: s,
    elevation: a,
    square: l,
    variant: u
  }, p = ZH(d);
  return /* @__PURE__ */ E.jsx(JH, {
    as: s,
    ownerState: d,
    className: oe(p.root, i),
    ref: n,
    ...c,
    style: {
      ...u === "elevation" && {
        "--Paper-shadow": (o.vars || o).shadows[a],
        ...o.vars && {
          "--Paper-overlay": (f = o.vars.overlays) == null ? void 0 : f[a]
        },
        ...!o.vars && o.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${kc("#fff", ag(a))}, ${kc("#fff", ag(a))})`
        }
      },
      ...c.style
    }
  });
});
function Xu(e, t) {
  var r;
  if (!e || !t)
    return !1;
  if (e.contains(t))
    return !0;
  const n = (r = t.getRootNode) == null ? void 0 : r.call(t);
  if (n && n instanceof ShadowRoot) {
    let o = t;
    for (; o; ) {
      if (e === o)
        return !0;
      o = o.parentNode ?? o.host ?? null;
    }
  }
  return !1;
}
const eW = j6(/* @__PURE__ */ E.jsx("path", {
  d: "M7 10l5 5 5-5z"
})), tW = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  },
  exiting: {
    opacity: 0
  },
  exited: {
    opacity: 0
  }
}, nW = {
  opacity: 0,
  visibility: "hidden"
}, rW = /* @__PURE__ */ k.forwardRef(function(t, n) {
  const r = tn(), o = {
    enter: r.transitions.duration.enteringScreen,
    exit: r.transitions.duration.leavingScreen
  }, {
    addEndListener: i,
    appear: s = !0,
    children: a,
    disablePrefersReducedMotion: l = !1,
    easing: u,
    in: c,
    onEnter: d,
    onEntered: p,
    onEntering: f,
    onExit: h,
    onExited: g,
    onExiting: x,
    style: y,
    timeout: m = o,
    ...v
  } = t, C = U0(r.motion.reducedMotion, l), S = k.useRef(null), b = Ze(S, Ul(a), n), I = wn(S, f), T = wn(S, (P, M) => {
    C.shouldReduceMotion || iy(P);
    const $ = Ec({
      style: y,
      timeout: m,
      easing: u
    }, {
      mode: "enter"
    }), D = C.getTransitionTiming({
      duration: $.duration,
      delay: $.delay
    });
    P.style.transition = r.transitions.create("opacity", {
      duration: D.duration,
      easing: $.easing,
      delay: D.delay
    }), d && d(P, M);
  }), L = wn(S, p), O = wn(S, x), _ = wn(S, (P) => {
    const M = Ec({
      style: y,
      timeout: m,
      easing: u
    }, {
      mode: "exit"
    }), $ = C.getTransitionTiming({
      duration: M.duration,
      delay: M.delay
    });
    P.style.transition = r.transitions.create("opacity", {
      duration: $.duration,
      easing: M.easing,
      delay: $.delay
    }), h && h(P);
  }), w = wn(S, (P) => {
    P.style.transition = "", g && g(P);
  }), A = i ? (P) => {
    i(S.current, P);
  } : void 0;
  return /* @__PURE__ */ E.jsx(iP, {
    appear: s,
    in: c,
    nodeRef: S,
    onEnter: T,
    onEntered: L,
    onEntering: I,
    onExit: _,
    onExited: w,
    onExiting: O,
    addEndListener: A,
    reduceMotion: C.shouldReduceMotion,
    timeout: m,
    ...v,
    children: (P, {
      ownerState: M,
      ...$
    }) => {
      const D = pk(P, c, tW, nW, y, a.props.style);
      return /* @__PURE__ */ k.cloneElement(a, {
        style: D,
        ref: b,
        ...$
      });
    }
  });
});
function oW(e) {
  return Ce("MuiBackdrop", e);
}
ce("MuiBackdrop", ["root", "invisible"]);
const iW = (e) => {
  const {
    classes: t,
    invisible: n
  } = e;
  return ve({
    root: ["root", n && "invisible"]
  }, oW, t);
}, sW = K("div", {
  name: "MuiBackdrop",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.invisible && t.invisible];
  }
})({
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  WebkitTapHighlightColor: "transparent",
  variants: [{
    props: {
      invisible: !0
    },
    style: {
      backgroundColor: "transparent"
    }
  }]
}), aW = /* @__PURE__ */ k.forwardRef(function(t, n) {
  const r = Be({
    props: t,
    name: "MuiBackdrop"
  }), {
    children: o,
    className: i,
    component: s = "div",
    invisible: a = !1,
    open: l,
    slotProps: u = {},
    slots: c = {},
    transitionDuration: d,
    ...p
  } = r, f = {
    ...r,
    component: s,
    invisible: a
  }, h = iW(f), g = {
    component: s,
    slots: c,
    slotProps: u
  }, [x, y] = ur("root", {
    elementType: sW,
    externalForwardedProps: g,
    className: oe(h.root, i),
    ownerState: f
  }), [m, v] = ur("transition", {
    elementType: rW,
    externalForwardedProps: g,
    ownerState: f
  });
  return /* @__PURE__ */ E.jsx(m, {
    in: l,
    timeout: d,
    ...p,
    ...v,
    children: /* @__PURE__ */ E.jsx(x, {
      ...y,
      ref: n,
      children: o
    })
  });
}), lW = ce("MuiBox", ["root"]), uW = uk(), jo = k_({
  themeId: ws,
  defaultTheme: uW,
  defaultClassName: lW.root,
  generateClassName: XS.generate
});
function sP(e = window) {
  const t = e.document.documentElement.clientWidth;
  return e.innerWidth - t;
}
function cW(e) {
  const t = gt(e);
  return t.body === e ? cr(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function Sa(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function HC(e) {
  return parseFloat(cr(e).getComputedStyle(e).paddingRight) || 0;
}
function dW(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(e.tagName), r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function WC(e, t, n, r, o) {
  const i = [t, n, ...r];
  [].forEach.call(e.children, (s) => {
    const a = !i.includes(s), l = !dW(s);
    a && l && Sa(s, o);
  });
}
function sh(e, t) {
  let n = -1;
  return e.some((r, o) => t(r) ? (n = o, !0) : !1), n;
}
function fW(e, t) {
  const n = [], r = e.container;
  if (!t.disableScrollLock) {
    if (cW(r)) {
      const s = sP(cr(r));
      n.push({
        value: r.style.paddingRight,
        property: "padding-right",
        el: r
      }), r.style.paddingRight = `${HC(r) + s}px`;
      const a = gt(r).querySelectorAll(".mui-fixed");
      [].forEach.call(a, (l) => {
        n.push({
          value: l.style.paddingRight,
          property: "padding-right",
          el: l
        }), l.style.paddingRight = `${HC(l) + s}px`;
      });
    }
    let i;
    if (r.parentNode instanceof DocumentFragment)
      i = gt(r).body;
    else {
      const s = r.parentElement, a = cr(r);
      i = (s == null ? void 0 : s.nodeName) === "HTML" && a.getComputedStyle(s).overflowY === "scroll" ? s : r;
    }
    n.push({
      value: i.style.overflow,
      property: "overflow",
      el: i
    }, {
      value: i.style.overflowX,
      property: "overflow-x",
      el: i
    }, {
      value: i.style.overflowY,
      property: "overflow-y",
      el: i
    }), i.style.overflow = "hidden";
  }
  return () => {
    n.forEach(({
      value: i,
      el: s,
      property: a
    }) => {
      i ? s.style.setProperty(a, i) : s.style.removeProperty(a);
    });
  };
}
function pW(e) {
  const t = [];
  return [].forEach.call(e.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && t.push(n);
  }), t;
}
class hW {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && Sa(t.modalRef, !1);
    const o = pW(n);
    WC(n, t.mount, t.modalRef, o, !0);
    const i = sh(this.containers, (s) => s.container === n);
    return i !== -1 ? (this.containers[i].modals.push(t), r) : (this.containers.push({
      modals: [t],
      container: n,
      restore: null,
      hiddenSiblings: o
    }), r);
  }
  mount(t, n) {
    const r = sh(this.containers, (i) => i.modals.includes(t)), o = this.containers[r];
    o.restore || (o.restore = fW(o, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1)
      return r;
    const o = sh(this.containers, (s) => s.modals.includes(t)), i = this.containers[o];
    if (i.modals.splice(i.modals.indexOf(t), 1), this.modals.splice(r, 1), i.modals.length === 0)
      i.restore && i.restore(), t.modalRef && Sa(t.modalRef, n), WC(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1), this.containers.splice(o, 1);
    else {
      const s = i.modals[i.modals.length - 1];
      s.modalRef && Sa(s.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const GC = "data-mui-focusable";
function VC(e) {
  return e ? e.hasAttribute(GC) ? e : e.querySelector(`[${GC}]`) : null;
}
const gW = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function aP(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function mW(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function yW(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || mW(e));
}
function vW(e) {
  const t = [], n = [];
  return Array.from(e.querySelectorAll(gW)).forEach((r, o) => {
    const i = aP(r);
    i === -1 || !yW(r) || (i === 0 ? t.push(r) : n.push({
      documentOrder: o,
      tabIndex: i,
      node: r
    }));
  }), n.sort((r, o) => r.tabIndex === o.tabIndex ? r.documentOrder - o.documentOrder : r.tabIndex - o.tabIndex).map((r) => r.node).concat(t);
}
function xW() {
  return !0;
}
function CW(e) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: o = !1,
    getTabbable: i = vW,
    isEnabled: s = xW,
    open: a
  } = e, l = k.useRef(!1), u = k.useRef(null), c = k.useRef(null), d = k.useRef(null), p = k.useRef(null), f = k.useRef(!1), h = k.useRef(null), g = Ze(Ul(t), h), x = k.useRef(null);
  k.useEffect(() => {
    !a || !h.current || (f.current = !n);
  }, [n, a]), k.useEffect(() => {
    if (l.current = !1, !a || !h.current)
      return;
    const v = gt(h.current), C = Sr(v), S = VC(h.current) ?? h.current;
    return Xu(h.current, C) || (S.hasAttribute("tabIndex") || S.setAttribute("tabIndex", "-1"), f.current && S.focus()), () => {
      !o && d.current && (l.current = !0, d.current.focus(), d.current = null);
    };
  }, [a]), k.useEffect(() => {
    if (!a || !h.current)
      return;
    const v = gt(h.current), C = (I) => {
      if (x.current = I, r || !s() || I.key !== "Tab")
        return;
      const T = h.current, L = Sr(v);
      if (T === null)
        return;
      const O = VC(T);
      if (L === T || L === O) {
        const w = i(T);
        if (w.length === 0)
          return;
        I.preventDefault(), I.shiftKey ? w[w.length - 1].focus() : w[0].focus();
        return;
      }
      if (Xu(T, L)) {
        const w = i(T), A = w.indexOf(L);
        if (A === -1 || !w.some(($) => aP($) > 0))
          return;
        I.preventDefault();
        let M = 0;
        I.shiftKey ? M = A <= 0 ? w.length - 1 : A - 1 : M = A === w.length - 1 ? 0 : A + 1, w[M].focus();
      }
    }, S = () => {
      var O, _;
      const I = h.current;
      if (I === null)
        return;
      const T = Sr(v);
      if (!v.hasFocus() || !s() || l.current) {
        l.current = !1;
        return;
      }
      if (Xu(I, T) || r && T !== u.current && T !== c.current)
        return;
      if (T !== p.current)
        p.current = null;
      else if (p.current !== null)
        return;
      if (!f.current)
        return;
      let L = [];
      if ((T === u.current || T === c.current) && (L = i(h.current)), L.length > 0) {
        const w = !!((O = x.current) != null && O.shiftKey && ((_ = x.current) == null ? void 0 : _.key) === "Tab"), A = L[0], P = L[L.length - 1];
        typeof A != "string" && typeof P != "string" && (w ? P.focus() : A.focus());
      } else
        I.focus();
    };
    v.addEventListener("focusin", S), v.addEventListener("keydown", C, !0);
    const b = setInterval(() => {
      const I = Sr(v);
      I && I.tagName === "BODY" && S();
    }, 50);
    return () => {
      clearInterval(b), v.removeEventListener("focusin", S), v.removeEventListener("keydown", C, !0);
    };
  }, [n, r, o, s, a, i]);
  const y = (v) => {
    d.current === null && (d.current = v.relatedTarget), f.current = !0, p.current = v.target;
    const C = t.props.onFocus;
    C && C(v);
  }, m = (v) => {
    d.current === null && (d.current = v.relatedTarget), f.current = !0;
  };
  return /* @__PURE__ */ E.jsxs(k.Fragment, {
    children: [/* @__PURE__ */ E.jsx("div", {
      tabIndex: a ? 0 : -1,
      onFocus: m,
      ref: u,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ k.cloneElement(t, {
      ref: g,
      onFocus: y
    }), /* @__PURE__ */ E.jsx("div", {
      tabIndex: a ? 0 : -1,
      onFocus: m,
      ref: c,
      "data-testid": "sentinelEnd"
    })]
  });
}
function wW(e) {
  return typeof e == "function" ? e() : e;
}
function bW(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const YC = () => {
}, Iu = new hW();
function SW(e) {
  const {
    container: t,
    disableScrollLock: n = !1,
    closeAfterTransition: r = !1,
    onTransitionEnter: o,
    onTransitionExited: i,
    children: s,
    onClose: a,
    open: l,
    rootRef: u
  } = e, c = k.useRef({}), d = k.useRef(null), p = k.useRef(null), f = Ze(p, u), [h, g] = k.useState(!l), x = bW(s);
  let y = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (y = !1);
  const m = () => gt(d.current), v = () => (c.current.modalRef = p.current, c.current.mount = d.current, c.current), C = () => {
    Iu.mount(v(), {
      disableScrollLock: n
    }), p.current && (p.current.scrollTop = 0);
  }, S = de(() => {
    const P = wW(t) || m().body;
    Iu.add(v(), P), p.current && C();
  }), b = () => Iu.isTopModal(v()), I = de((P) => {
    d.current = P, P && (l && b() ? C() : p.current && Sa(p.current, y));
  }), T = k.useCallback(() => {
    Iu.remove(v(), y);
  }, [y]);
  k.useEffect(() => () => {
    T();
  }, [T]), k.useEffect(() => {
    l ? S() : (!x || !r) && T();
  }, [l, T, x, r, S]);
  const L = (P) => (M) => {
    var $;
    ($ = P.onKeyDown) == null || $.call(P, M), !(M.key !== "Escape" || M.which === 229 || // Wait until IME is settled.
    !b()) && (M.stopPropagation(), a && a(M, "escapeKeyDown"));
  }, O = (P) => (M) => {
    var $;
    ($ = P.onClick) == null || $.call(P, M), M.target === M.currentTarget && a && a(M, "backdropClick");
  };
  return {
    getRootProps: (P = {}) => {
      const M = mk(e);
      delete M.onTransitionEnter, delete M.onTransitionExited;
      const $ = {
        ...M,
        ...P
      };
      return {
        /*
         * Marking an element with the role presentation indicates to assistive technology
         * that this element should be ignored; it exists to support the web application and
         * is not meant for humans to interact with directly.
         * https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
         */
        role: "presentation",
        ...$,
        onKeyDown: L($),
        ref: f
      };
    },
    getBackdropProps: (P = {}) => {
      const M = P;
      return {
        "aria-hidden": !0,
        ...M,
        onClick: O(M),
        open: l
      };
    },
    getTransitionProps: () => {
      const P = () => {
        g(!1), o && o();
      }, M = () => {
        g(!0), i && i(), r && T();
      };
      return {
        onEnter: MC(P, (s == null ? void 0 : s.props.onEnter) ?? YC),
        onExited: MC(M, (s == null ? void 0 : s.props.onExited) ?? YC)
      };
    },
    rootRef: f,
    portalRef: I,
    isTopModal: b,
    exited: h,
    hasTransition: x
  };
}
function kW(e) {
  return Ce("MuiModal", e);
}
ce("MuiModal", ["root", "hidden", "backdrop"]);
const IW = (e) => {
  const {
    open: t,
    exited: n,
    classes: r
  } = e;
  return ve({
    root: ["root", !t && n && "hidden"],
    backdrop: ["backdrop"]
  }, kW, r);
}, TW = K("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.open && n.exited && t.hidden];
  }
})(ze(({
  theme: e
}) => ({
  position: "fixed",
  zIndex: (e.vars || e).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  variants: [{
    props: ({
      ownerState: t
    }) => !t.open && t.exited,
    style: {
      visibility: "hidden"
    }
  }]
}))), EW = K(aW, {
  name: "MuiModal",
  slot: "Backdrop"
})({
  zIndex: -1
}), PW = /* @__PURE__ */ k.forwardRef(function(t, n) {
  const r = Be({
    name: "MuiModal",
    props: t
  }), {
    classes: o,
    className: i,
    closeAfterTransition: s = !1,
    children: a,
    container: l,
    component: u,
    disableAutoFocus: c = !1,
    disableEnforceFocus: d = !1,
    disablePortal: p = !1,
    disableRestoreFocus: f = !1,
    disableScrollLock: h = !1,
    hideBackdrop: g = !1,
    keepMounted: x = !1,
    onClose: y,
    onTransitionEnter: m,
    onTransitionExited: v,
    open: C,
    slotProps: S = {},
    slots: b = {},
    // eslint-disable-next-line react/prop-types
    theme: I,
    ...T
  } = r, L = {
    ...r,
    closeAfterTransition: s,
    disableAutoFocus: c,
    disableEnforceFocus: d,
    disablePortal: p,
    disableRestoreFocus: f,
    disableScrollLock: h,
    hideBackdrop: g,
    keepMounted: x
  }, {
    getRootProps: O,
    getBackdropProps: _,
    getTransitionProps: w,
    portalRef: A,
    isTopModal: P,
    exited: M,
    hasTransition: $
  } = SW({
    ...L,
    rootRef: n
  }), D = {
    ...L,
    exited: M
  }, R = IW(D), F = {};
  if (a.props.tabIndex === void 0 && (F.tabIndex = "-1"), $) {
    const {
      onEnter: se,
      onExited: ee
    } = w();
    F.onEnter = se, F.onExited = ee;
  }
  const z = {
    slots: b,
    slotProps: S
  }, [H, W] = ur("root", {
    ref: n,
    elementType: TW,
    externalForwardedProps: {
      ...z,
      ...T,
      component: u
    },
    getSlotProps: O,
    ownerState: D,
    className: oe(i, R == null ? void 0 : R.root, !D.open && D.exited && (R == null ? void 0 : R.hidden))
  }), [q, J] = ur("backdrop", {
    elementType: EW,
    externalForwardedProps: z,
    shouldForwardComponentProp: !0,
    getSlotProps: (se) => _({
      ...se,
      onClick: (ee) => {
        se != null && se.onClick && se.onClick(ee);
      }
    }),
    className: R == null ? void 0 : R.backdrop,
    ownerState: D
  });
  return !x && !C && (!$ || M) ? null : /* @__PURE__ */ E.jsx($E, {
    ref: A,
    container: l,
    disablePortal: p,
    children: /* @__PURE__ */ E.jsxs(H, {
      ...W,
      children: [g ? null : /* @__PURE__ */ E.jsx(q, {
        ...J
      }), /* @__PURE__ */ E.jsx(CW, {
        disableEnforceFocus: d,
        disableAutoFocus: c,
        disableRestoreFocus: f,
        isEnabled: P,
        open: C,
        children: /* @__PURE__ */ k.cloneElement(a, F)
      })]
    })
  });
}), KC = ce("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "vertical", "withChildren", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]), MW = (e) => {
  const {
    classes: t,
    disableUnderline: n,
    startAdornment: r,
    endAdornment: o,
    size: i,
    hiddenLabel: s,
    multiline: a
  } = e, l = {
    root: ["root", !n && "underline", r && "adornedStart", o && "adornedEnd", i === "small" && `size${Ee(i)}`, s && "hiddenLabel", a && "multiline"],
    input: ["input"]
  }, u = ve(l, X$, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...u
  };
}, AW = K(rf, {
  shouldForwardProp: (e) => On(e) || e === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...tf(e, t), !n.disableUnderline && t.underline];
  }
})(ze(({
  theme: e
}) => {
  const t = e.palette.mode === "light", n = t ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)", r = t ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)", o = t ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)", i = t ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
  return {
    position: "relative",
    backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r,
    borderTopLeftRadius: (e.vars || e).shape.borderRadius,
    borderTopRightRadius: (e.vars || e).shape.borderRadius,
    ...dt(e, "background-color", {
      duration: e.transitions.duration.shorter,
      easing: e.transitions.easing.easeOut
    }),
    "&:hover": {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.hoverBg : o,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r
      }
    },
    [`&.${Po.focused}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r
    },
    [`&.${Po.disabled}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.disabledBg : i
    },
    variants: [{
      props: ({
        ownerState: s
      }) => !s.disableUnderline,
      style: {
        "&::after": {
          left: 0,
          bottom: 0,
          content: '""',
          position: "absolute",
          right: 0,
          transform: "scaleX(0)",
          ...dt(e, "transform", {
            duration: e.transitions.duration.shorter,
            easing: e.transitions.easing.easeOut
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&.${Po.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${Po.error}`]: {
          "&::before, &::after": {
            borderBottomColor: (e.vars || e).palette.error.main
          }
        },
        "&::before": {
          borderBottom: `1px solid ${e.vars ? e.alpha(e.vars.palette.common.onBackground, e.vars.opacity.inputUnderline) : n}`,
          left: 0,
          bottom: 0,
          content: '""',
          position: "absolute",
          right: 0,
          ...dt(e, "border-bottom-color", {
            duration: e.transitions.duration.shorter
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&:hover:not(.${Po.disabled}, .${Po.error}):before`]: {
          borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`
        },
        [`&.${Po.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, ...Object.entries(e.palette).filter(Ur()).map(([s]) => {
      var a;
      return {
        props: {
          disableUnderline: !1,
          color: s
        },
        style: {
          "&::after": {
            borderBottom: `2px solid ${(a = (e.vars || e).palette[s]) == null ? void 0 : a.main}`
          }
        }
      };
    }), {
      props: ({
        ownerState: s
      }) => s.startAdornment,
      style: {
        paddingLeft: 12
      }
    }, {
      props: ({
        ownerState: s
      }) => s.endAdornment,
      style: {
        paddingRight: 12
      }
    }, {
      props: ({
        ownerState: s
      }) => s.multiline,
      style: {
        padding: "25px 12px 8px"
      }
    }, {
      props: ({
        ownerState: s,
        size: a
      }) => s.multiline && a === "small",
      style: {
        paddingTop: 21,
        paddingBottom: 4
      }
    }, {
      props: ({
        ownerState: s
      }) => s.multiline && s.hiddenLabel,
      style: {
        paddingTop: 16,
        paddingBottom: 17
      }
    }, {
      props: ({
        ownerState: s
      }) => s.multiline && s.hiddenLabel && s.size === "small",
      style: {
        paddingTop: 8,
        paddingBottom: 9
      }
    }]
  };
})), RW = K(of, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: nf
})(ze(({
  theme: e
}) => ({
  paddingTop: 25,
  paddingRight: 12,
  paddingBottom: 8,
  paddingLeft: 12,
  "&:-webkit-autofill": {
    ...!e.vars && {
      WebkitBoxShadow: e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
      WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
      caretColor: e.palette.mode === "light" ? null : "#fff"
    },
    borderTopLeftRadius: "inherit",
    borderTopRightRadius: "inherit",
    ...e.vars && e.applyStyles("dark", {
      WebkitBoxShadow: "0 0 0 100px #266798 inset",
      WebkitTextFillColor: "#fff",
      caretColor: "#fff"
    })
  },
  variants: [{
    props: {
      size: "small"
    },
    style: {
      paddingTop: 21,
      paddingBottom: 4
    }
  }, {
    props: ({
      ownerState: t
    }) => t.hiddenLabel,
    style: {
      paddingTop: 16,
      paddingBottom: 17
    }
  }, {
    props: ({
      ownerState: t
    }) => t.startAdornment,
    style: {
      paddingLeft: 0
    }
  }, {
    props: ({
      ownerState: t
    }) => t.endAdornment,
    style: {
      paddingRight: 0
    }
  }, {
    props: ({
      ownerState: t
    }) => t.hiddenLabel && t.size === "small",
    style: {
      paddingTop: 8,
      paddingBottom: 9
    }
  }, {
    props: ({
      ownerState: t
    }) => t.multiline,
    style: {
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: 0,
      paddingRight: 0
    }
  }]
}))), lP = /* @__PURE__ */ k.forwardRef(function(t, n) {
  const r = Be({
    props: t,
    name: "MuiFilledInput"
  }), {
    disableUnderline: o = !1,
    fullWidth: i = !1,
    hiddenLabel: s,
    // declare here to prevent spreading to DOM
    inputComponent: a = "input",
    multiline: l = !1,
    notched: u,
    // declare here to prevent spreading to DOM
    slotProps: c,
    slots: d = {},
    type: p = "text",
    ...f
  } = r, h = {
    ...r,
    disableUnderline: o,
    fullWidth: i,
    inputComponent: a,
    multiline: l,
    type: p
  }, g = MW(r), x = {
    root: {
      ownerState: h
    },
    input: {
      ownerState: h
    }
  }, y = c ? Ut(x, c) : x, m = d.root ?? AW, v = d.input ?? RW;
  return /* @__PURE__ */ E.jsx(ay, {
    slots: {
      root: m,
      input: v
    },
    slotProps: y,
    fullWidth: i,
    inputComponent: a,
    multiline: l,
    ref: n,
    type: p,
    ...f,
    classes: g
  });
});
lP.muiName = "Input";
function _W(e) {
  return Ce("MuiFormControl", e);
}
ce("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const $W = (e) => {
  const {
    classes: t,
    margin: n,
    fullWidth: r
  } = e, o = {
    root: ["root", n !== "none" && `margin${Ee(n)}`, r && "fullWidth"]
  };
  return ve(o, _W, t);
}, OW = K("div", {
  name: "MuiFormControl",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[`margin${Ee(n.margin)}`], n.fullWidth && t.fullWidth];
  }
})({
  display: "inline-flex",
  flexDirection: "column",
  position: "relative",
  // Reset fieldset default style.
  minWidth: 0,
  padding: 0,
  margin: 0,
  border: 0,
  verticalAlign: "top",
  // Fix alignment issue on Safari.
  variants: [{
    props: {
      margin: "normal"
    },
    style: {
      marginTop: 16,
      marginBottom: 8
    }
  }, {
    props: {
      margin: "dense"
    },
    style: {
      marginTop: 8,
      marginBottom: 4
    }
  }, {
    props: {
      fullWidth: !0
    },
    style: {
      width: "100%"
    }
  }]
}), XC = /* @__PURE__ */ k.forwardRef(function(t, n) {
  const r = Be({
    props: t,
    name: "MuiFormControl"
  }), {
    children: o,
    className: i,
    color: s = "primary",
    component: a = "div",
    disabled: l = !1,
    error: u = !1,
    focused: c,
    fullWidth: d = !1,
    hiddenLabel: p = !1,
    margin: f = "none",
    required: h = !1,
    size: g = "medium",
    variant: x = "outlined",
    ...y
  } = r, m = {
    ...r,
    color: s,
    component: a,
    disabled: l,
    error: u,
    fullWidth: d,
    hiddenLabel: p,
    margin: f,
    required: h,
    size: g,
    variant: x
  }, v = $W(m), [C, S] = k.useState(() => {
    let M = !1;
    return o && k.Children.forEach(o, ($) => {
      if (!Op($, ["Input", "Select"]))
        return;
      const D = Op($, ["Select"]) ? $.props.input : $;
      D && U$(D.props) && (M = !0);
    }), M;
  }), [b, I] = k.useState(() => {
    let M = !1;
    return o && k.Children.forEach(o, ($) => {
      Op($, ["Input", "Select"]) && (Tc($.props, !0) || Tc($.props.inputProps, !0)) && (M = !0);
    }), M;
  }), [T, L] = k.useState(!1);
  l && T && L(!1);
  const O = c !== void 0 && !l ? c : T;
  let _;
  k.useRef(!1);
  const w = k.useCallback(() => {
    I(!0);
  }, []), A = k.useCallback(() => {
    I(!1);
  }, []), P = k.useMemo(() => ({
    adornedStart: C,
    setAdornedStart: S,
    color: s,
    disabled: l,
    error: u,
    filled: b,
    focused: O,
    fullWidth: d,
    hiddenLabel: p,
    size: g,
    onBlur: () => {
      L(!1);
    },
    onFocus: () => {
      L(!0);
    },
    onEmpty: A,
    onFilled: w,
    registerEffect: _,
    required: h,
    variant: x
  }), [C, s, l, u, b, O, d, p, _, A, w, h, g, x]);
  return /* @__PURE__ */ E.jsx(oy.Provider, {
    value: P,
    children: /* @__PURE__ */ E.jsx(OW, {
      as: a,
      ownerState: m,
      className: oe(v.root, i),
      ref: n,
      ...y,
      children: o
    })
  });
}), LW = (e) => {
  const {
    classes: t,
    color: n,
    focused: r,
    disabled: o,
    error: i,
    filled: s,
    required: a
  } = e, l = {
    root: ["root", `color${Ee(n)}`, o && "disabled", i && "error", s && "filled", r && "focused", a && "required"],
    asterisk: ["asterisk", i && "error"]
  };
  return ve(l, q$, t);
}, NW = K("label", {
  name: "MuiFormLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color === "secondary" && t.colorSecondary, n.filled && t.filled];
  }
})(ze(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  ...e.typography.body1,
  lineHeight: "1.4375em",
  padding: 0,
  position: "relative",
  variants: [...Object.entries(e.palette).filter(Ur()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      [`&.${xa.focused}`]: {
        color: (e.vars || e).palette[t].main
      }
    }
  })), {
    props: {},
    style: {
      [`&.${xa.disabled}`]: {
        color: (e.vars || e).palette.text.disabled
      },
      [`&.${xa.error}`]: {
        color: (e.vars || e).palette.error.main
      }
    }
  }]
}))), DW = K("span", {
  name: "MuiFormLabel",
  slot: "Asterisk"
})(ze(({
  theme: e
}) => ({
  [`&.${xa.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}))), FW = /* @__PURE__ */ k.forwardRef(function(t, n) {
  const r = Be({
    props: t,
    name: "MuiFormLabel"
  }), {
    children: o,
    className: i,
    color: s,
    component: a = "label",
    disabled: l,
    error: u,
    filled: c,
    focused: d,
    required: p,
    ...f
  } = r, [h] = vl({
    props: r,
    states: ["color", "required", "focused", "disabled", "error", "filled"]
  }), g = {
    ...r,
    color: h.color || "primary",
    component: a,
    disabled: h.disabled,
    error: h.error,
    filled: h.filled,
    focused: h.focused,
    required: h.required
  }, x = LW(g);
  return /* @__PURE__ */ E.jsxs(NW, {
    as: a,
    ownerState: g,
    className: oe(x.root, i),
    ref: n,
    ...f,
    children: [o, h.required && /* @__PURE__ */ E.jsxs(DW, {
      ownerState: g,
      "aria-hidden": !0,
      className: x.asterisk,
      children: [" ", "*"]
    })]
  });
});
function ka(e) {
  return `scale(${e}, ${e ** 2})`;
}
const zW = {
  entering: {
    opacity: 1,
    transform: ka(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  },
  exiting: {
    opacity: 0,
    transform: ka(0.75)
  },
  exited: {
    opacity: 0,
    transform: ka(0.75)
  }
}, BW = {
  opacity: 0,
  transform: ka(0.75),
  visibility: "hidden"
}, Dg = /* @__PURE__ */ k.forwardRef(function(t, n) {
  const {
    addEndListener: r,
    appear: o = !0,
    children: i,
    disablePrefersReducedMotion: s = !1,
    easing: a,
    in: l,
    onEnter: u,
    onEntered: c,
    onEntering: d,
    onExit: p,
    onExited: f,
    onExiting: h,
    style: g,
    timeout: x = "auto",
    ...y
  } = t, m = k.useRef(null), v = tn(), C = U0(v.motion.reducedMotion, s), S = k.useRef(null), b = Ze(S, Ul(i), n), I = wn(S, d), T = wn(S, (P, M) => {
    C.shouldReduceMotion || iy(P);
    const {
      duration: $,
      delay: D,
      easing: R
    } = Ec({
      style: g,
      timeout: x,
      easing: a
    }, {
      mode: "enter"
    });
    let F;
    x === "auto" && !C.shouldReduceMotion ? (F = v.transitions.getAutoHeightDuration(P.clientHeight), m.current = F) : (F = $, m.current = null);
    const z = C.getTransitionTiming({
      duration: F,
      delay: D
    });
    P.style.transition = [v.transitions.create("opacity", {
      duration: z.duration,
      delay: z.delay
    }), v.transitions.create("transform", {
      duration: typeof z.duration == "string" ? z.duration : z.duration * 0.666,
      delay: z.delay,
      easing: R
    })].join(","), u && u(P, M);
  }), L = wn(S, c), O = wn(S, h), _ = wn(S, (P) => {
    const {
      duration: M,
      delay: $,
      easing: D
    } = Ec({
      style: g,
      timeout: x,
      easing: a
    }, {
      mode: "exit"
    });
    let R;
    x === "auto" && !C.shouldReduceMotion ? (R = v.transitions.getAutoHeightDuration(P.clientHeight), m.current = R) : (R = M, m.current = null);
    const F = C.getTransitionTiming({
      duration: R,
      delay: $
    });
    P.style.transition = [v.transitions.create("opacity", {
      duration: F.duration,
      delay: F.delay
    }), v.transitions.create("transform", {
      duration: typeof F.duration == "string" ? F.duration : F.duration * 0.666,
      delay: F.delay || (typeof F.duration == "string" ? F.duration : F.duration * 0.333),
      easing: D
    })].join(","), P.style.opacity = 0, P.style.transform = ka(0.75), p && p(P);
  }), w = wn(S, (P) => {
    P.style.transition = "", f && f(P);
  }), A = r ? (P) => {
    r(S.current, P);
  } : void 0;
  return /* @__PURE__ */ E.jsx(iP, {
    appear: o,
    in: l,
    nodeRef: S,
    onEnter: T,
    onEntered: L,
    onEntering: I,
    onExit: _,
    onExited: w,
    onExiting: O,
    addEndListener: A,
    getAutoTimeout: x === "auto" ? () => m.current : void 0,
    reduceMotion: C.shouldReduceMotion,
    timeout: x === "auto" ? null : x,
    ...y,
    children: (P, {
      ownerState: M,
      ...$
    }) => {
      const D = pk(P, l, zW, BW, g, i.props.style);
      return /* @__PURE__ */ k.cloneElement(i, {
        style: D,
        ref: b,
        ...$
      });
    }
  });
});
Dg && (Dg.muiSupportAuto = !0);
function jW(e) {
  return Ce("MuiInputLabel", e);
}
const UW = ce("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]), HW = (e) => {
  const {
    classes: t,
    disableUnderline: n
  } = e, o = ve({
    root: ["root", !n && "underline"],
    input: ["input"]
  }, Q$, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...o
  };
}, WW = K(rf, {
  shouldForwardProp: (e) => On(e) || e === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...tf(e, t), !n.disableUnderline && t.underline];
  }
})(ze(({
  theme: e
}) => {
  let n = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  return e.vars && (n = e.alpha(e.vars.palette.common.onBackground, e.vars.opacity.inputUnderline)), {
    position: "relative",
    variants: [{
      props: ({
        ownerState: r
      }) => r.formControl,
      style: {
        [`label + &, .${UW.root} + &`]: {
          marginTop: 16
        }
      }
    }, {
      props: ({
        ownerState: r
      }) => !r.disableUnderline,
      style: {
        "&::after": {
          left: 0,
          bottom: 0,
          content: '""',
          position: "absolute",
          right: 0,
          transform: "scaleX(0)",
          ...dt(e, "transform", {
            duration: e.transitions.duration.shorter,
            easing: e.transitions.easing.easeOut
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&.${Ws.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${Ws.error}`]: {
          "&::before, &::after": {
            borderBottomColor: (e.vars || e).palette.error.main
          }
        },
        "&::before": {
          borderBottom: `1px solid ${n}`,
          left: 0,
          bottom: 0,
          content: '""',
          position: "absolute",
          right: 0,
          ...dt(e, "border-bottom-color", {
            duration: e.transitions.duration.shorter
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&:hover:not(.${Ws.disabled}, .${Ws.error}):before`]: {
          borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            borderBottom: `1px solid ${n}`
          }
        },
        [`&.${Ws.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, ...Object.entries(e.palette).filter(Ur()).map(([r]) => ({
      props: {
        color: r,
        disableUnderline: !1
      },
      style: {
        "&::after": {
          borderBottom: `2px solid ${(e.vars || e).palette[r].main}`
        }
      }
    }))]
  };
})), GW = K(of, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: nf
})({}), uP = /* @__PURE__ */ k.forwardRef(function(t, n) {
  const r = Be({
    props: t,
    name: "MuiInput"
  }), {
    disableUnderline: o = !1,
    fullWidth: i = !1,
    inputComponent: s = "input",
    multiline: a = !1,
    notched: l,
    // declare here to prevent spreading to DOM
    slotProps: u,
    slots: c = {},
    type: d = "text",
    ...p
  } = r, f = HW(r), g = {
    root: {
      ownerState: {
        disableUnderline: o
      }
    }
  }, x = u ? Ut(u, g) : g, y = c.root ?? WW, m = c.input ?? GW;
  return /* @__PURE__ */ E.jsx(ay, {
    slots: {
      root: y,
      input: m
    },
    slotProps: x,
    fullWidth: i,
    inputComponent: s,
    multiline: a,
    ref: n,
    type: d,
    ...p,
    classes: f
  });
});
uP.muiName = "Input";
const VW = (e) => {
  const {
    classes: t,
    formControl: n,
    size: r,
    shrink: o,
    disableAnimation: i,
    variant: s,
    required: a
  } = e, l = {
    root: ["root", n && "formControl", !i && "animated", o && "shrink", r && r !== "medium" && `size${Ee(r)}`, s],
    asterisk: [a && "asterisk"]
  }, u = ve(l, jW, t);
  return {
    ...t,
    // forward the focused, disabled, etc. classes to the FormLabel
    ...u
  };
}, YW = K(FW, {
  shouldForwardProp: (e) => On(e) || e === "classes",
  name: "MuiInputLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${xa.asterisk}`]: t.asterisk
    }, t.root, n.formControl && t.formControl, n.size === "small" && t.sizeSmall, n.shrink && t.shrink, !n.disableAnimation && t.animated, n.focused && t.focused, t[n.variant]];
  }
})(ze(({
  theme: e
}) => ({
  display: "block",
  transformOrigin: "top left",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: "100%",
  variants: [{
    props: ({
      ownerState: t
    }) => t.formControl,
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      // slight alteration to spec spacing to match visual spec result
      transform: "translate(0, 20px) scale(1)"
    }
  }, {
    props: {
      size: "small"
    },
    style: {
      // Compensation for the `Input` small size style.
      transform: "translate(0, 17px) scale(1)"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.shrink,
    style: {
      transform: "translate(0, -1.5px) scale(0.75)",
      transformOrigin: "top left",
      maxWidth: "133%"
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.disableAnimation,
    style: {
      ...dt(e, ["color", "transform", "max-width"], {
        duration: e.transitions.duration.shorter,
        easing: e.transitions.easing.easeOut
      })
    }
  }, {
    props: {
      variant: "filled"
    },
    style: {
      // Chrome's autofill feature gives the input field a yellow background.
      // Since the input field is behind the label in the HTML tree,
      // the input field is drawn last and hides the label with an opaque background color.
      // zIndex: 1 will raise the label above opaque background-colors of input.
      zIndex: 1,
      pointerEvents: "none",
      transform: "translate(12px, 16px) scale(1)",
      maxWidth: "calc(100% - 24px)"
    }
  }, {
    props: {
      variant: "filled",
      size: "small"
    },
    style: {
      transform: "translate(12px, 13px) scale(1)"
    }
  }, {
    props: ({
      variant: t,
      ownerState: n
    }) => t === "filled" && n.shrink,
    style: {
      userSelect: "none",
      pointerEvents: "auto",
      transform: "translate(12px, 7px) scale(0.75)",
      maxWidth: "calc(133% - 24px)"
    }
  }, {
    props: ({
      variant: t,
      ownerState: n,
      size: r
    }) => t === "filled" && n.shrink && r === "small",
    style: {
      transform: "translate(12px, 4px) scale(0.75)"
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      // see comment above on filled.zIndex
      zIndex: 1,
      pointerEvents: "none",
      transform: "translate(14px, 16px) scale(1)",
      maxWidth: "calc(100% - 24px)"
    }
  }, {
    props: {
      variant: "outlined",
      size: "small"
    },
    style: {
      transform: "translate(14px, 9px) scale(1)"
    }
  }, {
    props: ({
      variant: t,
      ownerState: n
    }) => t === "outlined" && n.shrink,
    style: {
      userSelect: "none",
      pointerEvents: "auto",
      // Theoretically, we should have (8+5)*2/0.75 = 34px
      // but it feels a better when it bleeds a bit on the left, so 32px.
      maxWidth: "calc(133% - 32px)",
      transform: "translate(14px, -9px) scale(0.75)"
    }
  }]
}))), qC = /* @__PURE__ */ k.forwardRef(function(t, n) {
  const r = Be({
    name: "MuiInputLabel",
    props: t
  }), {
    disableAnimation: o = !1,
    margin: i,
    shrink: s,
    variant: a,
    className: l,
    ...u
  } = r, [c, d] = vl({
    props: r,
    states: ["size", "variant", "required", "focused"]
  });
  let p = s;
  typeof p > "u" && d && (p = d.filled || d.focused || d.adornedStart);
  const f = {
    ...r,
    disableAnimation: o,
    formControl: d,
    shrink: p,
    size: c.size,
    variant: c.variant,
    required: c.required,
    focused: c.focused
  }, h = VW(f);
  return /* @__PURE__ */ E.jsx(YW, {
    "data-shrink": p,
    ref: n,
    className: oe(h.root, l),
    ...u,
    ownerState: f,
    classes: h
  });
}), Fg = /* @__PURE__ */ k.createContext({});
function KW(e) {
  return Ce("MuiList", e);
}
ce("MuiList", ["root", "padding", "dense", "subheader"]);
const XW = (e) => {
  const {
    classes: t,
    disablePadding: n,
    dense: r,
    subheader: o
  } = e;
  return ve({
    root: ["root", !n && "padding", r && "dense", o && "subheader"]
  }, KW, t);
}, qW = K("ul", {
  name: "MuiList",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.disablePadding && t.padding, n.dense && t.dense, n.subheader && t.subheader];
  }
})({
  listStyle: "none",
  margin: 0,
  padding: 0,
  position: "relative",
  variants: [{
    props: ({
      ownerState: e
    }) => !e.disablePadding,
    style: {
      paddingTop: 8,
      paddingBottom: 8
    }
  }, {
    props: ({
      ownerState: e
    }) => e.subheader,
    style: {
      paddingTop: 0,
      isolation: "isolate"
      // Prevent overlap with iOS overlay scrollbars.
    }
  }]
}), QW = /* @__PURE__ */ k.forwardRef(function(t, n) {
  const r = Be({
    props: t,
    name: "MuiList"
  }), {
    children: o,
    className: i,
    component: s = "ul",
    dense: a = !1,
    disablePadding: l = !1,
    subheader: u,
    ...c
  } = r, d = k.useMemo(() => ({
    dense: a
  }), [a]), p = {
    ...r,
    component: s,
    dense: a,
    disablePadding: l
  }, f = XW(p);
  return /* @__PURE__ */ E.jsx(Fg.Provider, {
    value: d,
    children: /* @__PURE__ */ E.jsxs(qW, {
      as: s,
      className: oe(f.root, i),
      ref: n,
      ownerState: p,
      ...c,
      children: [u, o]
    })
  });
}), QC = ce("MuiListItemIcon", ["root", "alignItemsFlexStart"]), ZC = ce("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]), cP = /* @__PURE__ */ k.createContext(void 0);
function ZW() {
  const e = k.useContext(cP);
  if (e === void 0)
    throw new Error("MUI: RovingTabIndexContext is missing. Roving tab index items must be placed within a roving tab index provider.");
  return e;
}
const JW = Object.is;
function eG(e, t) {
  if (e === t)
    return !0;
  if (!(e instanceof Object) || !(t instanceof Object))
    return !1;
  let n = 0, r = 0;
  for (const o in e)
    if (n += 1, !JW(e[o], t[o]) || !(o in t))
      return !1;
  for (const o in t)
    r += 1;
  return n === r;
}
const tG = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown", "Home", "End"];
function nG(e) {
  const {
    activeItemId: t,
    getDefaultActiveItemId: n,
    orientation: r,
    isRtl: o = !1,
    isItemFocusable: i = Ia,
    wrap: s = !0
  } = e, [a, l] = k.useState(t), [u, c] = k.useState(t);
  let d = a;
  t !== u && (c(t), t !== void 0 && t !== a && (d = t, l(t)));
  const p = k.useRef(null), f = k.useRef(/* @__PURE__ */ new Map()), [h, g] = k.useState(0), x = k.useMemo(() => zg(f.current), [h]), y = JC(d, x, i, n), m = k.useRef(y);
  m.current = y;
  const v = k.useCallback(() => {
    const w = zg(f.current), A = JC(m.current, w, i, n);
    return pP(w, A);
  }, [n, i]), C = k.useCallback(() => f.current, []), S = de((w) => {
    const A = f.current.get(w.id);
    eG(A ?? null, w) || (f.current.set(w.id, w), g((P) => P + 1));
  }), b = de((w) => {
    f.current.delete(w) && g((A) => A + 1);
  }), I = de((w) => {
    l(w);
  }), T = k.useCallback((w) => m.current === w, []), L = k.useCallback((w, A, P, M) => {
    var R;
    const $ = Tu(f.current), D = dP($, w, A, P, M ?? i);
    return D ? ((R = D.element) == null || R.focus(), l(D.id), D) : null;
  }, [i]), O = k.useCallback((w) => ({
    onFocus: (M) => {
      const $ = Tu(f.current), D = gP($, M.target);
      D !== -1 && l($[D].id);
    },
    onKeyDown: (M) => {
      if (M.altKey || M.shiftKey || M.ctrlKey || M.metaKey || !tG.includes(M.key))
        return;
      let $ = r === "horizontal" ? "ArrowLeft" : "ArrowUp", D = r === "horizontal" ? "ArrowRight" : "ArrowDown";
      r === "horizontal" && o && ($ = "ArrowRight", D = "ArrowLeft");
      const R = Tu(f.current), F = Sr(gt(p.current)), z = F === p.current;
      let H = ew(R, F, m.current), W = "next";
      switch (M.key) {
        case $:
          W = "previous", M.preventDefault(), z && (H = R.length);
          break;
        case D:
          M.preventDefault(), z && (H = -1);
          break;
        case "Home":
          M.preventDefault(), H = -1;
          break;
        case "End":
          M.preventDefault(), W = "previous", H = R.length;
          break;
        default:
          return;
      }
      L(H, W, s);
    },
    ref: aG(w, (M) => {
      p.current = M;
    })
  }), [L, o, r, s]), _ = k.useCallback((w) => {
    var D;
    const A = Tu(f.current), P = Sr(gt(p.current)), $ = P === p.current ? -1 : ew(A, P, m.current);
    return ((D = L($, "next", !0, w)) == null ? void 0 : D.id) ?? null;
  }, [L]);
  return k.useMemo(() => ({
    activeItemId: y,
    focusNext: _,
    getActiveItem: v,
    getContainerProps: O,
    getItemMap: C,
    isItemActive: T,
    registerItem: S,
    setActiveItemId: I,
    unregisterItem: b
  }), [y, _, v, O, C, T, S, I, b]);
}
function rG(e) {
  const t = ZW(), {
    activeItemId: n,
    registerItem: r,
    unregisterItem: o
  } = t, i = k.useRef(null), s = k.useMemo(() => ({
    disabled: e.disabled ?? !1,
    element: null,
    focusableWhenDisabled: e.focusableWhenDisabled ?? !1,
    id: e.id,
    selected: e.selected ?? !1,
    textValue: e.textValue
  }), [e.disabled, e.focusableWhenDisabled, e.id, e.selected, e.textValue]), a = k.useRef(s);
  a.current = s;
  const l = k.useCallback((c) => {
    if (i.current = c, c == null) {
      queueMicrotask(() => {
        i.current == null && o(e.id);
      });
      return;
    }
    r({
      ...a.current,
      element: c
    });
  }, [e.id, r, o]), u = Ze(e.ref, l);
  return me(() => {
    i.current && r({
      ...s,
      element: i.current
    });
  }, [s, r]), me(() => {
    const c = e.id;
    return () => {
      o(c);
    };
  }, [e.id, o]), {
    ref: u,
    tabIndex: n === e.id ? 0 : -1
  };
}
function JC(e, t, n, r) {
  return e != null ? oG(e, t, n) : iG(t, n, r);
}
function oG(e, t, n) {
  var o;
  const r = hP(t, e);
  return r === -1 ? fP(t, n) : n(t[r]) ? t[r].id : ((o = dP(t, r, "next", !1, n)) == null ? void 0 : o.id) ?? null;
}
function iG(e, t, n) {
  const r = n == null ? void 0 : n(e);
  if (r != null) {
    const o = pP(e, r);
    if (o && t(o))
      return o.id;
  }
  return fP(e, t);
}
function ew(e, t, n) {
  if (t) {
    const r = gP(e, t);
    if (r !== -1)
      return r;
  }
  return hP(e, n);
}
function dP(e, t, n, r, o) {
  const i = e.length - 1;
  if (i === -1)
    return null;
  let s = !1, a = tw(t, i, n, r);
  const l = a;
  for (; a !== -1; ) {
    if (a === l) {
      if (s)
        return null;
      s = !0;
    }
    const u = e[a];
    if (!u || !o(u))
      a = tw(a, i, n, r);
    else
      return u;
  }
  return null;
}
function fP(e, t) {
  var n;
  return ((n = e.find((r) => t(r))) == null ? void 0 : n.id) ?? null;
}
function pP(e, t) {
  return t == null ? null : e.find((n) => n.id === t) ?? null;
}
function hP(e, t) {
  return t == null ? -1 : e.findIndex((n) => n.id === t);
}
function gP(e, t) {
  return t ? e.findIndex((n) => {
    var r;
    return n.element === t || ((r = n.element) == null ? void 0 : r.contains(t));
  }) : -1;
}
function zg(e) {
  const t = Array.from(e.values());
  if (t.every((o) => o.element == null))
    return t;
  const n = t.filter(Bg).sort((o, i) => sG(o.element, i.element)), r = t.filter((o) => !Bg(o));
  return [...n, ...r];
}
function Tu(e) {
  return zg(e).filter(Bg);
}
function tw(e, t, n, r = !0) {
  return n === "next" ? e === t ? r ? 0 : -1 : e + 1 : e === 0 ? r ? t : -1 : e - 1;
}
function Ia(e) {
  return e.element ? e.focusableWhenDisabled ? !0 : !e.disabled && !e.element.hasAttribute("disabled") && e.element.getAttribute("aria-disabled") !== "true" && e.element.hasAttribute("tabindex") : !1;
}
function Bg(e) {
  return e.element != null && e.element.isConnected;
}
function sG(e, t) {
  if (e === t)
    return 0;
  const n = e.compareDocumentPosition(t);
  return n & Node.DOCUMENT_POSITION_FOLLOWING || n & Node.DOCUMENT_POSITION_CONTAINED_BY ? -1 : n & Node.DOCUMENT_POSITION_PRECEDING || n & Node.DOCUMENT_POSITION_CONTAINS ? 1 : 0;
}
function aG(...e) {
  return (t) => {
    e.forEach((n) => {
      Rg(n ?? null, t);
    });
  };
}
function mP(e, t) {
  if (t == null) {
    e.focus();
    return;
  }
  try {
    e.focus({
      focusVisible: t === "keyboard"
    });
  } catch {
    e.focus();
  }
}
function lG(e) {
  return e ? e.type === "mousedown" || e.type === "pointerdown" || e.type === "touchstart" ? "pointer" : e.type === "keydown" || e.type === "click" && e.detail === 0 ? "keyboard" : null : null;
}
function uG(e) {
  return e == null || typeof e == "string" && !e.trim();
}
function qu(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
const yP = /* @__PURE__ */ k.createContext(null);
function vP() {
  return k.useContext(yP);
}
const cG = yP.Provider, xP = /* @__PURE__ */ k.createContext(void 0);
function dG() {
  const e = k.useContext(xP);
  if (e === void 0)
    throw new Error("MUI: MenuListContext is missing. MenuItems must be placed within Menu or MenuList.");
  return e;
}
function fG(e) {
  const t = (e == null ? void 0 : e.element) ?? e;
  if (!t)
    return "";
  if ((e == null ? void 0 : e.textValue) !== void 0)
    return e.textValue;
  let n = t.innerText;
  return n === void 0 && (n = t.textContent), n ?? "";
}
function CP(e, t) {
  if (t === void 0)
    return !0;
  let n = fG(e);
  return n = n.trim().toLowerCase(), n.length === 0 ? !1 : t.repeating ? n[0] === t.keys[0] : n.startsWith(t.keys.join(""));
}
function pG(e, t) {
  return CP(e, t) ? Ia(e) : !1;
}
function hG(e, t) {
  mP(e, t);
}
const gG = /* @__PURE__ */ k.forwardRef(function(t, n) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions: r,
    autoFocus: o = !1,
    autoFocusItem: i = !1,
    children: s,
    className: a,
    disabledItemsFocusable: l = !1,
    disableListWrap: u = !1,
    onKeyDown: c,
    variant: d = "selectedMenu",
    ...p
  } = t, f = k.useRef(null), h = k.useRef(!1), [g, x] = k.useState(!1), y = vP(), m = k.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  }), v = k.useCallback((M) => {
    var $, D, R;
    return d === "selectedMenu" ? (($ = M.find((F) => F.selected && Ia(F))) == null ? void 0 : $.id) ?? ((D = M.find((F) => Ia(F))) == null ? void 0 : D.id) ?? null : ((R = M.find((F) => Ia(F))) == null ? void 0 : R.id) ?? null;
  }, [d]), C = nG({
    activeItemId: void 0,
    getDefaultActiveItemId: v,
    orientation: "vertical",
    wrap: !u
  }), {
    activeItemId: S,
    focusNext: b,
    getActiveItem: I,
    getContainerProps: T,
    getItemMap: L
  } = C, O = de((M = !1) => {
    if (!f.current || !M && h.current)
      return null;
    if (i) {
      const $ = I();
      if ($ != null && $.element) {
        const D = Array.from(L().values()).some((F) => F.selected), R = d === "menu" && D && !$.selected && y == null;
        return x(R), hG($.element, y), h.current = !0, $.element;
      }
      return o ? (x(!1), f.current.focus(), f.current) : null;
    }
    return o ? (x(!1), f.current.focus(), h.current = !0, f.current) : (x(!1), null);
  });
  me(() => {
    if (!o && !i) {
      h.current = !1, x(!1);
      return;
    }
    O();
  }, [S, i, o, O]), k.useImperativeHandle(r, () => ({
    adjustStyleForScrollbar: (M, {
      direction: $
    }) => {
      const D = !f.current.style.width;
      if (M.clientHeight < f.current.clientHeight && D) {
        const R = `${sP(cr(M))}px`;
        f.current.style[$ === "rtl" ? "paddingLeft" : "paddingRight"] = R, f.current.style.width = `calc(100% + ${R})`;
      }
      return f.current;
    },
    focusInitialTarget: () => {
      if (!f.current)
        return null;
      const M = Sr(gt(f.current));
      return M && Xu(f.current, M) ? M : O(!0);
    }
  }), [O]);
  const _ = T(), w = Ze(f, _.ref, n), A = k.useMemo(() => ({
    itemsFocusableWhenDisabled: l,
    suppressInitialFocusVisible: g,
    variant: d
  }), [l, g, d]), P = de((M) => {
    if (g && x(!1), (M.ctrlKey || M.metaKey || M.altKey) && c) {
      c(M);
      return;
    }
    if (_.onKeyDown(M), M.key.length === 1) {
      const D = m.current, R = M.key.toLowerCase(), F = performance.now();
      D.keys.length > 0 && (F - D.lastTime > 500 ? (D.keys = [], D.repeating = !0, D.previousKeyMatched = !0) : D.repeating && R !== D.keys[0] && (D.repeating = !1)), D.lastTime = F, D.keys.push(R);
      const z = Sr(gt(f.current)), H = z && !D.repeating && CP(z, D);
      D.previousKeyMatched && (H || b((W) => pG(W, D)) != null) ? M.preventDefault() : D.previousKeyMatched = !1;
    }
    c && c(M);
  });
  return /* @__PURE__ */ E.jsx(QW, {
    role: "menu",
    ref: w,
    className: a,
    onKeyDown: P,
    onFocus: _.onFocus,
    tabIndex: -1,
    ...p,
    children: /* @__PURE__ */ E.jsx(xP.Provider, {
      value: A,
      children: /* @__PURE__ */ E.jsx(cP.Provider, {
        value: C,
        children: s
      })
    })
  });
});
function mG(e) {
  return Ce("MuiPopover", e);
}
ce("MuiPopover", ["root", "paper"]);
function nw(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.height / 2 : t === "bottom" && (n = e.height), n;
}
function rw(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.width / 2 : t === "right" && (n = e.width), n;
}
function ow(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function Eu(e) {
  return typeof e == "function" ? e() : e;
}
const yG = (e) => {
  const {
    classes: t
  } = e;
  return ve({
    root: ["root"],
    paper: ["paper"]
  }, mG, t);
}, vG = K(PW, {
  name: "MuiPopover",
  slot: "Root"
})({}), wP = K(ua, {
  name: "MuiPopover",
  slot: "Paper"
})({
  position: "absolute",
  overflowY: "auto",
  overflowX: "hidden",
  // So we see the popover when it's empty.
  // It's most likely on issue on userland.
  minWidth: 16,
  minHeight: 16,
  maxWidth: "calc(100% - 32px)",
  maxHeight: "calc(100% - 32px)",
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), xG = /* @__PURE__ */ k.forwardRef(function(t, n) {
  const r = Be({
    props: t,
    name: "MuiPopover"
  }), {
    action: o,
    anchorEl: i,
    anchorOrigin: s = {
      vertical: "top",
      horizontal: "left"
    },
    anchorPosition: a,
    anchorReference: l = "anchorEl",
    children: u,
    className: c,
    container: d,
    disableAutoFocus: p = !1,
    elevation: f = 8,
    marginThreshold: h = 16,
    open: g,
    slots: x = {},
    slotProps: y = {},
    transformOrigin: m = {
      vertical: "top",
      horizontal: "left"
    },
    transitionDuration: v = "auto",
    disableScrollLock: C = !1,
    ...S
  } = r, b = k.useRef(), I = {
    ...r,
    anchorOrigin: s,
    anchorReference: l,
    elevation: f,
    marginThreshold: h,
    transformOrigin: m,
    transitionDuration: v
  }, T = yG(I), L = k.useCallback(() => {
    if (l === "anchorPosition")
      return a;
    const Z = Eu(i), X = (Z && Z.nodeType === 1 ? Z : gt(b.current).body).getBoundingClientRect();
    return {
      top: X.top + nw(X, s.vertical),
      left: X.left + rw(X, s.horizontal)
    };
  }, [i, s.horizontal, s.vertical, a, l]), O = k.useCallback((Z) => ({
    vertical: nw(Z, m.vertical),
    horizontal: rw(Z, m.horizontal)
  }), [m.horizontal, m.vertical]), _ = k.useCallback((Z) => {
    const U = {
      width: Z.offsetWidth,
      height: Z.offsetHeight
    }, X = O(U);
    if (l === "none")
      return {
        top: null,
        left: null,
        transformOrigin: ow(X)
      };
    const re = L();
    let j = re.top - X.vertical, ae = re.left - X.horizontal;
    const Q = j + U.height, we = ae + U.width, he = cr(Eu(i)), be = he.innerHeight - h, wt = he.innerWidth - h;
    if (h != null && j < h) {
      const je = j - h;
      j -= je, X.vertical += je;
    } else if (h != null && Q > be) {
      const je = Q - be;
      j -= je, X.vertical += je;
    }
    if (h != null && ae < h) {
      const je = ae - h;
      ae -= je, X.horizontal += je;
    } else if (we > wt) {
      const je = we - wt;
      ae -= je, X.horizontal += je;
    }
    return {
      top: `${Math.round(j)}px`,
      left: `${Math.round(ae)}px`,
      transformOrigin: ow(X)
    };
  }, [i, l, L, O, h]), [w, A] = k.useState(g), P = k.useCallback(() => {
    const Z = b.current;
    if (!Z)
      return;
    const U = _(Z);
    U.top != null && Z.style.setProperty("top", U.top), U.left != null && (Z.style.left = U.left), Z.style.transformOrigin = U.transformOrigin, A(!0);
  }, [_]);
  k.useEffect(() => (C && window.addEventListener("scroll", P), () => window.removeEventListener("scroll", P)), [i, C, P]);
  const M = () => {
    P();
  }, $ = () => {
    A(!1);
  };
  k.useEffect(() => {
    g && P();
  }), k.useImperativeHandle(o, () => g ? {
    updatePosition: () => {
      P();
    }
  } : null, [g, P]), k.useEffect(() => {
    if (!g)
      return;
    const Z = ck(() => {
      P();
    }), U = cr(Eu(i));
    return U.addEventListener("resize", Z), () => {
      Z.clear(), U.removeEventListener("resize", Z);
    };
  }, [i, g, P]);
  let D = v;
  const R = {
    slots: x,
    slotProps: y
  }, [F, z] = ur("transition", {
    elementType: Dg,
    externalForwardedProps: R,
    ownerState: I,
    getSlotProps: (Z) => ({
      ...Z,
      onEntering: (U, X) => {
        var re;
        (re = Z.onEntering) == null || re.call(Z, U, X), M();
      },
      onExited: (U) => {
        var X;
        (X = Z.onExited) == null || X.call(Z, U), $();
      }
    }),
    additionalProps: {
      appear: !0,
      in: g
    }
  });
  v === "auto" && !F.muiSupportAuto && (D = void 0);
  const H = d || (i ? gt(Eu(i)).body : void 0), [W, {
    slots: q,
    slotProps: J,
    ...se
  }] = ur("root", {
    ref: n,
    elementType: vG,
    externalForwardedProps: {
      ...R,
      ...S
    },
    shouldForwardComponentProp: !0,
    additionalProps: {
      slots: {
        backdrop: x.backdrop
      },
      slotProps: {
        backdrop: U6(typeof y.backdrop == "function" ? y.backdrop(I) : y.backdrop, {
          invisible: !0
        })
      },
      container: H,
      open: g
    },
    ownerState: I,
    className: oe(T.root, c)
  }), [ee, ne] = ur("paper", {
    ref: b,
    className: T.paper,
    elementType: wP,
    externalForwardedProps: R,
    shouldForwardComponentProp: !0,
    additionalProps: {
      elevation: f,
      style: w ? void 0 : {
        opacity: 0
      }
    },
    ownerState: I
  });
  return /* @__PURE__ */ E.jsx(W, {
    ...se,
    ...!Ic(W) && {
      slots: q,
      slotProps: J,
      disableAutoFocus: p,
      disableScrollLock: C
    },
    children: /* @__PURE__ */ E.jsx(F, {
      ...z,
      timeout: D,
      children: /* @__PURE__ */ E.jsx(ee, {
        ...ne,
        children: u
      })
    })
  });
});
function CG(e) {
  return Ce("MuiMenu", e);
}
ce("MuiMenu", ["root", "paper", "list"]);
const wG = {
  vertical: "top",
  horizontal: "right"
}, bG = {
  vertical: "top",
  horizontal: "left"
}, SG = (e) => {
  const {
    classes: t
  } = e;
  return ve({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, CG, t);
}, kG = K(xG, {
  shouldForwardProp: (e) => On(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root"
})({}), IG = K(wP, {
  name: "MuiMenu",
  slot: "Paper"
})({
  // specZ: The maximum height of a simple menu should be one or more rows less than the view
  // height. This ensures a tappable area outside of the simple menu with which to dismiss
  // the menu.
  maxHeight: "calc(100% - 96px)",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch"
}), TG = K(gG, {
  name: "MuiMenu",
  slot: "List"
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), EG = /* @__PURE__ */ k.forwardRef(function(t, n) {
  const r = Be({
    props: t,
    name: "MuiMenu"
  }), {
    autoFocus: o = !0,
    children: i,
    className: s,
    disableAutoFocusItem: a = !1,
    onClose: l,
    open: u,
    PopoverClasses: c,
    transitionDuration: d = "auto",
    variant: p = "selectedMenu",
    slots: f = {},
    slotProps: h = {},
    ...g
  } = r, x = ks(), y = {
    ...r,
    autoFocus: o,
    disableAutoFocusItem: a,
    transitionDuration: d,
    variant: p
  }, m = SG(y), v = o && u, C = v && !a, S = k.useRef(null), b = (M, $) => {
    var D, R;
    S.current && (S.current.adjustStyleForScrollbar(M, {
      direction: x ? "rtl" : "ltr"
    }), v && ((R = (D = S.current).focusInitialTarget) == null || R.call(D)));
  }, I = (M) => {
    M.key === "Tab" && (M.preventDefault(), l && l(M, "tabKeyDown"));
  }, T = {
    slots: f,
    slotProps: h
  }, L = dr({
    elementType: f.root,
    externalSlotProps: h.root,
    ownerState: y,
    className: [m.root, s]
  }), [O, _] = ur("paper", {
    className: m.paper,
    elementType: IG,
    externalForwardedProps: T,
    shouldForwardComponentProp: !0,
    ownerState: y
  }), [w, A] = ur("list", {
    className: m.list,
    elementType: TG,
    shouldForwardComponentProp: !0,
    externalForwardedProps: T,
    getSlotProps: (M) => ({
      ...M,
      onKeyDown: ($) => {
        var D;
        I($), (D = M.onKeyDown) == null || D.call(M, $);
      }
    }),
    ownerState: y
  }), P = typeof h.transition == "function" ? h.transition(y) : h.transition;
  return /* @__PURE__ */ E.jsx(
    kG,
    {
      disableAutoFocus: o,
      onClose: l,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: x ? "right" : "left"
      },
      transformOrigin: x ? wG : bG,
      slots: {
        root: f.root,
        paper: O,
        backdrop: f.backdrop,
        transition: f.transition
      },
      slotProps: {
        root: L,
        paper: _,
        backdrop: typeof h.backdrop == "function" ? h.backdrop(y) : h.backdrop,
        transition: {
          ...P,
          onEntering: (...M) => {
            var $;
            b(...M), ($ = P == null ? void 0 : P.onEntering) == null || $.call(P, ...M);
          }
        }
      },
      open: u,
      ref: n,
      transitionDuration: d,
      ownerState: y,
      ...g,
      classes: c,
      children: /* @__PURE__ */ E.jsx(w, {
        actions: S,
        autoFocus: v,
        autoFocusItem: C,
        variant: p,
        ...A,
        children: i
      })
    }
  );
}), PG = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.dense && t.dense, n.divider && t.divider, !n.disableGutters && t.gutters];
}, MG = (e) => {
  const {
    disabled: t,
    dense: n,
    divider: r,
    disableGutters: o,
    selected: i,
    classes: s
  } = e, l = ve({
    root: ["root", n && "dense", t && "disabled", !o && "gutters", r && "divider", i && "selected"]
  }, Z$, s);
  return {
    ...s,
    ...l
  };
}, AG = K(Kf, {
  shouldForwardProp: (e) => On(e) || e === "classes",
  name: "MuiMenuItem",
  slot: "Root",
  overridesResolver: PG
})(ze(({
  theme: e
}) => ({
  ...e.typography.body1,
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  position: "relative",
  textDecoration: "none",
  minHeight: 48,
  paddingTop: 6,
  paddingBottom: 6,
  boxSizing: "border-box",
  whiteSpace: "nowrap",
  "&:hover": {
    textDecoration: "none",
    backgroundColor: (e.vars || e).palette.action.hover,
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  [`&.${Gs.selected}`]: {
    backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity),
    [`&.${Gs.focusVisible}`]: {
      backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.focusOpacity}`)
    }
  },
  [`&.${Gs.selected}:hover`]: {
    backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.hoverOpacity}`),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity)
    }
  },
  [`&.${Gs.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${Gs.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  },
  [`& + .${KC.root}`]: {
    marginTop: e.spacing(1),
    marginBottom: e.spacing(1)
  },
  [`& + .${KC.inset}`]: {
    marginLeft: 52
  },
  [`& .${ZC.root}`]: {
    marginTop: 0,
    marginBottom: 0
  },
  [`& .${ZC.inset}`]: {
    paddingLeft: 36
  },
  [`& .${QC.root}`]: {
    minWidth: 36
  },
  variants: [{
    props: ({
      ownerState: t
    }) => !t.disableGutters,
    style: {
      paddingLeft: 16,
      paddingRight: 16
    }
  }, {
    props: ({
      ownerState: t
    }) => t.divider,
    style: {
      borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
      backgroundClip: "padding-box"
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.dense,
    style: {
      [e.breakpoints.up("sm")]: {
        minHeight: "auto"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.dense,
    style: {
      minHeight: 32,
      // https://m2.material.io/components/menus#specs > Dense
      paddingTop: 4,
      paddingBottom: 4,
      ...e.typography.body2,
      [`& .${QC.root} svg`]: {
        fontSize: "1.25rem"
      }
    }
  }]
}))), Js = /* @__PURE__ */ k.forwardRef(function(t, n) {
  const r = Be({
    props: t,
    name: "MuiMenuItem"
  }), {
    autoFocus: o = !1,
    component: i = "li",
    dense: s = !1,
    divider: a = !1,
    disableGutters: l = !1,
    focusVisibleClassName: u,
    role: c = "menuitem",
    tabIndex: d,
    className: p,
    ...f
  } = r, h = vP(), g = k.useContext(Fg), x = k.useMemo(() => ({
    dense: s || g.dense || !1,
    disableGutters: l
  }), [g.dense, s, l]), y = dG(), m = po(), v = y.suppressInitialFocusVisible, C = y.itemsFocusableWhenDisabled, S = k.useRef(null);
  me(() => {
    o && S.current && mP(S.current, h);
  }, [o]);
  const b = {
    ...r,
    dense: x.dense,
    divider: a,
    disableGutters: l
  }, I = MG(r), {
    root: T,
    ...L
  } = I, O = rG({
    id: m,
    ref: n,
    disabled: r.disabled,
    focusableWhenDisabled: C,
    selected: r.selected
  }), _ = Ze(S, O.ref);
  let w;
  return d !== void 0 ? w = d : y.variant === "selectedMenu" ? w = O.tabIndex : (!r.disabled || C) && (w = -1), /* @__PURE__ */ E.jsx(Fg.Provider, {
    value: x,
    children: /* @__PURE__ */ E.jsx(AG, {
      ref: _,
      role: c,
      tabIndex: w,
      component: i,
      internalNativeButton: !1,
      focusableWhenDisabled: C,
      suppressFocusVisible: v,
      focusVisibleClassName: oe(I.focusVisible, u),
      className: oe(I.root, p),
      ...f,
      ownerState: b,
      classes: L
    })
  });
}), RG = (e) => {
  const {
    classes: t,
    variant: n,
    disabled: r,
    multiple: o,
    open: i,
    error: s
  } = e, a = {
    select: ["select", n, r && "disabled", o && "multiple", s && "error"],
    icon: ["icon", `icon${Ee(n)}`, i && "iconOpen", r && "disabled"]
  };
  return ve(a, J$, t);
}, bP = K("select", {
  name: "MuiNativeSelect"
})(({
  theme: e
}) => ({
  // Reset
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // When interacting quickly, the text can end up selected.
  // Native select can't be selected either.
  userSelect: "none",
  // Reset
  borderRadius: 0,
  cursor: "pointer",
  "&:focus": {
    // Reset Chrome style
    borderRadius: 0
  },
  [`&.${ly.disabled}`]: {
    cursor: "default"
  },
  "&[multiple]": {
    height: "auto"
  },
  "&:not([multiple]) option, &:not([multiple]) optgroup": {
    backgroundColor: (e.vars || e).palette.background.paper
  },
  variants: [{
    props: ({
      ownerState: t
    }) => t.variant !== "filled" && t.variant !== "outlined",
    style: {
      // Bump specificity to allow extending custom inputs
      "&&&": {
        paddingRight: 24,
        minWidth: 16
        // So it doesn't collapse.
      }
    }
  }, {
    props: {
      variant: "filled"
    },
    style: {
      "&&&": {
        paddingRight: 32
      }
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      borderRadius: (e.vars || e).shape.borderRadius,
      "&:focus": {
        borderRadius: (e.vars || e).shape.borderRadius
        // Reset the reset for Chrome style
      },
      "&&&": {
        paddingRight: 32
      }
    }
  }]
})), _G = K(bP, {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: On,
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.select, t[n.variant], n.error && t.error, {
      [`&.${ly.multiple}`]: t.multiple
    }];
  }
})({}), SP = K("svg", {
  name: "MuiNativeSelect"
})(({
  theme: e
}) => ({
  // We use a position absolute over a flexbox in order to forward the pointer events
  // to the input and to support wrapping tags..
  position: "absolute",
  right: 0,
  // Center vertically, height is 1em
  top: "calc(50% - .5em)",
  // Don't block pointer events on the select under the icon.
  pointerEvents: "none",
  color: (e.vars || e).palette.action.active,
  [`&.${ly.disabled}`]: {
    color: (e.vars || e).palette.action.disabled
  },
  variants: [{
    props: ({
      ownerState: t
    }) => t.open,
    style: {
      transform: "rotate(180deg)"
    }
  }, {
    props: {
      variant: "filled"
    },
    style: {
      right: 7
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      right: 7
    }
  }]
})), $G = K(SP, {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${Ee(n.variant)}`], n.open && t.iconOpen];
  }
})({}), OG = /* @__PURE__ */ k.forwardRef(function(t, n) {
  const {
    className: r,
    disabled: o,
    error: i,
    IconComponent: s,
    inputRef: a,
    variant: l = "standard",
    ...u
  } = t, c = {
    ...t,
    disabled: o,
    variant: l,
    error: i
  }, d = RG(c);
  return /* @__PURE__ */ E.jsxs(k.Fragment, {
    children: [/* @__PURE__ */ E.jsx(_G, {
      ownerState: c,
      className: oe(d.select, r),
      disabled: o,
      ref: a || n,
      ...u
    }), t.multiple ? null : /* @__PURE__ */ E.jsx($G, {
      as: s,
      ownerState: c,
      className: d.icon
    })]
  });
});
var iw;
const LG = K("fieldset", {
  name: "MuiNotchedOutlined",
  shouldForwardProp: On
})({
  textAlign: "left",
  position: "absolute",
  bottom: 0,
  right: 0,
  top: -5,
  left: 0,
  margin: 0,
  padding: "0 8px",
  pointerEvents: "none",
  borderRadius: "inherit",
  borderStyle: "solid",
  borderWidth: 1,
  overflow: "hidden",
  minWidth: "0%"
}), NG = K("legend", {
  name: "MuiNotchedOutlined",
  shouldForwardProp: On
})(ze(({
  theme: e
}) => ({
  float: "unset",
  // Fix conflict with bootstrap
  width: "auto",
  // Fix conflict with bootstrap
  overflow: "hidden",
  // Fix Horizontal scroll when label too long
  variants: [{
    props: ({
      ownerState: t
    }) => !t.withLabel,
    style: {
      padding: 0,
      lineHeight: "11px",
      // sync with `height` in `legend` styles
      ...dt(e, "width", {
        duration: 150,
        easing: e.transitions.easing.easeOut
      })
    }
  }, {
    props: ({
      ownerState: t
    }) => t.withLabel,
    style: {
      display: "block",
      // Fix conflict with normalize.css and sanitize.css
      padding: 0,
      height: 11,
      // sync with `lineHeight` in `legend` styles
      fontSize: "0.75em",
      visibility: "hidden",
      maxWidth: 0.01,
      ...dt(e, "max-width", {
        duration: 50,
        easing: e.transitions.easing.easeOut
      }),
      whiteSpace: "nowrap",
      "& > span": {
        paddingLeft: 5,
        paddingRight: 5,
        display: "inline-block",
        opacity: 0,
        visibility: "visible"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.withLabel && t.notched,
    style: {
      maxWidth: "100%",
      ...dt(e, "max-width", {
        duration: 100,
        easing: e.transitions.easing.easeOut,
        delay: 50
      })
    }
  }]
})));
function DG(e) {
  const {
    children: t,
    classes: n,
    className: r,
    label: o,
    notched: i,
    ...s
  } = e, a = o != null && o !== "", l = {
    ...e,
    notched: i,
    withLabel: a
  };
  return /* @__PURE__ */ E.jsx(LG, {
    "aria-hidden": !0,
    className: r,
    ownerState: l,
    ...s,
    children: /* @__PURE__ */ E.jsx(NG, {
      ownerState: l,
      children: a ? /* @__PURE__ */ E.jsx("span", {
        children: o
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        iw || (iw = /* @__PURE__ */ E.jsx("span", {
          className: "notranslate",
          "aria-hidden": !0,
          children: "​"
        }))
      )
    })
  });
}
const FG = (e) => {
  const {
    classes: t
  } = e, r = ve({
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  }, eO, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...r
  };
}, zG = K(rf, {
  shouldForwardProp: (e) => On(e) || e === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: tf
})(ze(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    position: "relative",
    borderRadius: (e.vars || e).shape.borderRadius,
    [`&:hover .${Qn.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.text.primary
    },
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      [`&:hover .${Qn.notchedOutline}`]: {
        borderColor: e.vars ? e.alpha(e.vars.palette.common.onBackground, 0.23) : t
      }
    },
    [`&.${Qn.focused} .${Qn.notchedOutline}`]: {
      borderWidth: 2
    },
    variants: [...Object.entries(e.palette).filter(Ur()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        [`&.${Qn.focused} .${Qn.notchedOutline}`]: {
          borderColor: (e.vars || e).palette[n].main
        }
      }
    })), {
      props: {},
      // to override the above style
      style: {
        [`&.${Qn.error} .${Qn.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.error.main
        },
        [`&.${Qn.disabled} .${Qn.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.action.disabled
        }
      }
    }, {
      props: ({
        ownerState: n
      }) => n.startAdornment,
      style: {
        paddingLeft: 14
      }
    }, {
      props: ({
        ownerState: n
      }) => n.endAdornment,
      style: {
        paddingRight: 14
      }
    }, {
      props: ({
        ownerState: n
      }) => n.multiline,
      style: {
        padding: "16.5px 14px"
      }
    }, {
      props: ({
        ownerState: n,
        size: r
      }) => n.multiline && r === "small",
      style: {
        padding: "8.5px 14px"
      }
    }]
  };
})), BG = K(DG, {
  name: "MuiOutlinedInput",
  slot: "NotchedOutline"
})(ze(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    borderColor: e.vars ? e.alpha(e.vars.palette.common.onBackground, 0.23) : t
  };
})), jG = K(of, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: nf
})(ze(({
  theme: e
}) => ({
  padding: "16.5px 14px",
  "&:-webkit-autofill": {
    ...!e.vars && {
      WebkitBoxShadow: e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
      WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
      caretColor: e.palette.mode === "light" ? null : "#fff"
    },
    borderRadius: "inherit",
    ...e.vars && e.applyStyles("dark", {
      WebkitBoxShadow: "0 0 0 100px #266798 inset",
      WebkitTextFillColor: "#fff",
      caretColor: "#fff"
    })
  },
  variants: [{
    props: {
      size: "small"
    },
    style: {
      padding: "8.5px 14px"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.multiline,
    style: {
      padding: 0
    }
  }, {
    props: ({
      ownerState: t
    }) => t.startAdornment,
    style: {
      paddingLeft: 0
    }
  }, {
    props: ({
      ownerState: t
    }) => t.endAdornment,
    style: {
      paddingRight: 0
    }
  }]
}))), kP = /* @__PURE__ */ k.forwardRef(function(t, n) {
  const r = Be({
    props: t,
    name: "MuiOutlinedInput"
  }), {
    fullWidth: o = !1,
    inputComponent: i = "input",
    label: s,
    multiline: a = !1,
    notched: l,
    slots: u = {},
    slotProps: c = {},
    type: d = "text",
    ...p
  } = r, f = FG(r), [h, g] = vl({
    props: r,
    states: ["color", "disabled", "error", "focused", "hiddenLabel", "size", "required"]
  }), x = {
    ...r,
    color: h.color || "primary",
    disabled: h.disabled,
    error: h.error,
    focused: h.focused,
    formControl: g,
    fullWidth: o,
    hiddenLabel: h.hiddenLabel,
    multiline: a,
    size: h.size,
    type: d
  }, y = u.root ?? zG, m = u.input ?? jG, [v, C] = ur("notchedOutline", {
    elementType: BG,
    className: f.notchedOutline,
    shouldForwardComponentProp: !0,
    ownerState: x,
    externalForwardedProps: {
      slots: u,
      slotProps: c
    },
    additionalProps: {
      label: s != null && s !== "" && h.required ? /* @__PURE__ */ E.jsxs(k.Fragment, {
        children: [s, " ", "*"]
      }) : s
    }
  });
  return /* @__PURE__ */ E.jsx(ay, {
    slots: {
      root: y,
      input: m
    },
    slotProps: c,
    renderSuffix: (S) => /* @__PURE__ */ E.jsx(v, {
      ...C,
      notched: typeof l < "u" ? l : !!(S.startAdornment || S.filled || S.focused)
    }),
    fullWidth: o,
    inputComponent: i,
    multiline: a,
    ref: n,
    type: d,
    ...p,
    classes: {
      ...f,
      notchedOutline: null
    }
  });
});
kP.muiName = "Input";
function IP(e) {
  return Ce("MuiSelect", e);
}
const ea = ce("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "nativeInput", "error"]);
function UG(e) {
  return Object.prototype.hasOwnProperty.call(e.props, "value");
}
function TP(e) {
  if (typeof e == "string" || typeof e == "number")
    return String(e);
  let t = "";
  return k.Children.forEach(e, (n) => {
    typeof n == "string" || typeof n == "number" ? t += String(n) : /* @__PURE__ */ k.isValidElement(n) && (t += TP(n.props.children));
  }), t;
}
function HG(e, t, n = 0) {
  if (e.length === 0)
    return -1;
  const r = (n % e.length + e.length) % e.length;
  for (let o = 0; o < e.length; o += 1) {
    const i = (r + o) % e.length;
    if (e[i].label.startsWith(t))
      return i;
  }
  return -1;
}
function WG(e, t) {
  return !e.some((n) => n.label[0] === t && n.label[1] === t);
}
function GG(e, t) {
  const n = [];
  let r = -1;
  for (let o = 0; o < e.length; o += 1) {
    const i = e[o];
    if (!/* @__PURE__ */ k.isValidElement(i) || !UG(i) || i.props.disabled)
      continue;
    const s = TP(i.props.children).trim().toLowerCase();
    s !== "" && (r === -1 && qu(t, i.props.value) && (r = n.length), n.push({
      child: i,
      label: s,
      value: i.props.value
    }));
  }
  return {
    options: n,
    selectedIndex: r
  };
}
var sw;
const Pu = 2, VG = 400, aw = 200, YG = 750, Ao = " ", KG = "ArrowUp", XG = "ArrowDown", qG = "Enter";
function lw(e, t) {
  var o;
  if (!t)
    return !1;
  if (e.composedPath().includes(t) || (o = e.target) != null && o.nodeType && t.contains(e.target))
    return !0;
  const r = t.getBoundingClientRect();
  return r.width === 0 && r.height === 0 ? !1 : e.clientX >= r.left - Pu && e.clientX <= r.right + Pu && e.clientY >= r.top - Pu && e.clientY <= r.bottom + Pu;
}
const QG = K(bP, {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [
      // Win specificity over the input base
      {
        [`&.${ea.select}`]: t.select
      },
      {
        [`&.${ea.select}`]: t[n.variant]
      },
      {
        [`&.${ea.error}`]: t.error
      },
      {
        [`&.${ea.multiple}`]: t.multiple
      }
    ];
  }
})({
  // Win specificity over the input base
  [`&.${ea.select}`]: {
    height: "auto",
    // Resets for multiple select with chips
    minHeight: "1.4375em",
    // Required for select\text-field height consistency
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
}), ZG = K(SP, {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.open && t.iconOpen];
  }
})({}), JG = K("input", {
  shouldForwardProp: (e) => dk(e) && e !== "classes",
  name: "MuiSelect",
  slot: "NativeInput"
})({
  bottom: 0,
  left: 0,
  position: "absolute",
  opacity: 0,
  pointerEvents: "none",
  width: "100%",
  boxSizing: "border-box"
}), eV = (e) => {
  const {
    classes: t,
    variant: n,
    disabled: r,
    multiple: o,
    open: i,
    error: s
  } = e;
  return ve({
    select: ["select", n, r && "disabled", o && "multiple", s && "error"],
    icon: ["icon", i && "iconOpen", r && "disabled"],
    nativeInput: ["nativeInput"]
  }, IP, t);
}, tV = /* @__PURE__ */ k.forwardRef(function(t, n) {
  var q0, Q0, Z0, J0;
  const {
    "aria-describedby": r,
    "aria-label": o,
    autoFocus: i,
    autoWidth: s,
    children: a,
    className: l,
    defaultOpen: u,
    defaultValue: c,
    disabled: d,
    displayEmpty: p,
    error: f = !1,
    IconComponent: h,
    inputRef: g,
    labelId: x,
    MenuProps: y = {},
    multiple: m,
    name: v,
    onBlur: C,
    onChange: S,
    onClose: b,
    onFocus: I,
    // eslint-disable-next-line react/prop-types
    onKeyDown: T,
    // eslint-disable-next-line react/prop-types
    onMouseDown: L,
    onOpen: O,
    open: _,
    readOnly: w,
    renderValue: A,
    required: P,
    SelectDisplayProps: M = {},
    tabIndex: $,
    // catching `type` from Input which makes no sense for SelectInput
    type: D,
    value: R,
    variant: F = "standard",
    ...z
  } = t, [H, W] = AC({
    controlled: R,
    default: c,
    name: "Select"
  }), [q, J] = AC({
    controlled: _,
    default: u,
    name: "Select"
  }), se = k.useRef(null), ee = k.useRef(null), ne = k.useRef(null), Z = k.useRef(!1), U = k.useRef(!1), X = k.useRef(null), re = k.useRef(!1), j = k.useRef({
    allowSelectedMouseUp: !1,
    allowUnselectedMouseUp: !1
  }), ae = k.useRef({
    buffer: "",
    previousSearchIndex: null,
    matchedIndex: null
  }), Q = ba(), we = ba(), he = ba(), [be, wt] = k.useState(null), {
    current: je
  } = k.useRef(_ != null), [Lt, Nt] = k.useState(), [on, rt] = k.useState(null), gr = Ze(n, g), Kn = k.useCallback((Y) => {
    ee.current = Y, Y && wt(Y);
  }, []), Tt = be == null ? void 0 : be.parentNode;
  k.useImperativeHandle(gr, () => ({
    focus: () => {
      ee.current.focus();
    },
    node: se.current,
    value: H
  }), [H]);
  const Ge = be !== null && q, ot = k.useCallback(() => {
    he.clear(), ae.current.buffer = "", ae.current.previousSearchIndex = null, ae.current.matchedIndex = null;
  }, [he]);
  me(() => {
    Z.current = Ge, Ge && ot();
  }, [Ge, ot]);
  const Io = k.useCallback(() => {
    Q.clear(), we.clear();
  }, [Q, we]), ge = k.useCallback(() => {
    Io(), re.current = !1, j.current = {
      allowSelectedMouseUp: !1,
      allowUnselectedMouseUp: !1
    };
  }, [Io]), Dt = k.useCallback(() => {
    X.current && (X.current(), X.current = null);
  }, []);
  k.useEffect(() => {
    Ge || (ge(), Dt());
  }, [Ge, ge, Dt]), k.useEffect(() => () => {
    ge(), Dt(), ot();
  }, [ge, Dt, ot]), k.useEffect(() => {
    if (!Ge || !Tt || s || typeof ResizeObserver > "u")
      return;
    const Y = new ResizeObserver(() => {
      Nt(Tt.clientWidth);
    });
    return Y.observe(Tt), () => {
      Y.disconnect();
    };
  }, [Ge, Tt, s]), k.useEffect(() => {
    u && q && be && !je && (Nt(s ? null : Tt.clientWidth), ee.current.focus());
  }, [be, s]), k.useEffect(() => {
    i && ee.current.focus();
  }, [i]), k.useEffect(() => {
    if (!x)
      return;
    const Y = gt(ee.current).getElementById(x);
    if (Y) {
      const ie = () => {
        getSelection().isCollapsed && ee.current.focus();
      };
      return Y.addEventListener("click", ie), () => {
        Y.removeEventListener("click", ie);
      };
    }
  }, [x]);
  const Et = de((Y, ie) => {
    Y || (ge(), Dt()), Y ? (ot(), rt(lG(ie)), O && O(ie)) : (rt(null), b && b(ie)), je || (Z.current = Y, Nt(s ? null : Tt.clientWidth), J(Y));
  }), $s = () => {
    ge(), U.current ? we.start(aw, () => {
      j.current.allowUnselectedMouseUp = !0, Q.start(aw, () => {
        j.current.allowSelectedMouseUp = !0;
      });
    }) : Q.start(VG, () => {
      j.current.allowSelectedMouseUp = !0, j.current.allowUnselectedMouseUp = !0;
    });
  }, qe = (Y) => {
    if (L == null || L(Y), Y.button !== 0 || (Y.preventDefault(), !ee.current))
      return;
    ee.current.focus();
    const ie = gt(Y.currentTarget);
    $s(), Dt();
    const pe = (Ve) => {
      X.current = null, ee.current && (lw(Ve, ee.current) || lw(Ve, ne.current) || !Z.current && je || Et(!1, Ve));
    };
    ie.addEventListener("mouseup", pe, {
      capture: !0,
      once: !0
    }), X.current = () => {
      ie.removeEventListener("mouseup", pe, !0);
    }, Et(!0, Y);
  }, EP = (Y) => {
    Et(!1, Y);
  }, Jf = k.Children.toArray(a), PP = (Y) => {
    const ie = Jf.find((pe) => pe.props.value === Y.target.value);
    ie !== void 0 && (W(ie.props.value), S && S(Y, ie));
  }, V0 = (Y, ie, pe) => {
    if (W(pe), S) {
      const Ve = Y.nativeEvent || Y, Ft = new Ve.constructor(Ve.type, Ve);
      Object.defineProperty(Ft, "target", {
        writable: !0,
        value: {
          value: pe,
          name: v
        }
      }), S(Ft, ie);
    }
  }, MP = (Y) => (ie) => {
    re.current = !1;
    let pe;
    if (ie.currentTarget.hasAttribute("tabindex")) {
      if (m) {
        pe = Array.isArray(H) ? H.slice() : [];
        const Ve = H.indexOf(Y.props.value);
        Ve === -1 ? pe.push(Y.props.value) : pe.splice(Ve, 1);
      } else
        pe = Y.props.value;
      Y.props.onClick && Y.props.onClick(ie), H !== pe && V0(ie, Y, pe), m || Et(!1, ie);
    }
  }, AP = (Y, ie) => (pe) => {
    var Vl, ci;
    if ((ci = (Vl = Y.props).onMouseUp) == null || ci.call(Vl, pe), re.current) {
      re.current = !1;
      return;
    }
    const Ve = !j.current.allowSelectedMouseUp && ie, Ft = !j.current.allowUnselectedMouseUp && !ie;
    Ve || Ft || pe.currentTarget.click();
  }, RP = (Y) => {
    var ev;
    const ie = ae.current, pe = ie.buffer !== "";
    if (Ge || m || d || Y.defaultPrevented || (ev = Y.nativeEvent) != null && ev.isComposing || Y.key.length !== 1 || Y.ctrlKey || Y.metaKey || Y.altKey || Y.key === Ao && !pe)
      return !1;
    Y.key === Ao && Y.preventDefault();
    const Ve = ie.buffer === "", {
      options: Ft,
      selectedIndex: Vl
    } = GG(Jf, H);
    if (Ft.length === 0)
      return Y.key !== Ao && ot(), !0;
    Ve && (ie.previousSearchIndex = Vl);
    const ci = Y.key.toLowerCase();
    ie.buffer === ci && WG(Ft, ci) && (ie.buffer = "", ie.previousSearchIndex = ie.matchedIndex), ie.buffer += ci, he.start(YG, ot);
    const np = HG(Ft, ie.buffer, (ie.previousSearchIndex ?? -1) + 1);
    if (np !== -1) {
      const rp = Ft[np];
      return ie.matchedIndex = np, qu(H, rp.value) || V0(Y, rp.child, rp.value), !0;
    }
    return Y.key !== Ao && ot(), !0;
  }, _P = (Y) => {
    if (!w) {
      const ie = RP(Y), pe = Y.key === Ao || Y.key === KG || Y.key === XG || Y.key === qG;
      !ie && pe && (Y.preventDefault(), Et(!0, Y)), T == null || T(Y);
    }
  }, $P = (Y) => {
    ot(), !Ge && C && (Object.defineProperty(Y, "target", {
      writable: !0,
      value: {
        value: H,
        name: v
      }
    }), C(Y));
  }, OP = (Y) => (ie) => {
    var pe, Ve;
    (Ve = (pe = Y == null ? void 0 : Y.props) == null ? void 0 : pe.onKeyDown) == null || Ve.call(pe, ie), ie.key === Ao && ie.target === ie.currentTarget && !ie.defaultPrevented && (ie.preventDefault(), ie.repeat || ie.currentTarget.click());
  };
  delete z["aria-invalid"];
  let li, Y0;
  const Hl = [];
  let Wl = !1, Gl = !1;
  (Tc({
    value: H
  }) || p) && (A ? li = A(H) : Wl = !0);
  const LP = Jf.map((Y) => {
    if (!/* @__PURE__ */ k.isValidElement(Y))
      return null;
    let ie;
    if (m) {
      if (!Array.isArray(H))
        throw new Error(Or(2));
      ie = H.some((pe) => qu(pe, Y.props.value)), ie && Wl && Hl.push(Y.props.children);
    } else
      ie = qu(H, Y.props.value), ie && Wl && (Y0 = Y.props.children);
    return ie && (Gl = !0), /* @__PURE__ */ k.cloneElement(Y, {
      "aria-selected": ie ? "true" : "false",
      onMouseDown: (pe) => {
        var Ve, Ft;
        re.current = !0, (Ft = (Ve = Y.props).onMouseDown) == null || Ft.call(Ve, pe);
      },
      onPointerDown: (pe) => {
        var Ve, Ft;
        re.current = !0, (Ft = (Ve = Y.props).onPointerDown) == null || Ft.call(Ve, pe);
      },
      onClick: MP(Y),
      onMouseUp: AP(Y, ie),
      onKeyUp: (pe) => {
        pe.key === Ao && pe.preventDefault(), Y.props.onKeyUp && Y.props.onKeyUp(pe);
      },
      onKeyDown: OP(Y),
      role: "option",
      selected: ie,
      value: void 0,
      // The value is most likely not a valid HTML attribute.
      "data-value": Y.props.value
      // Instead, we provide it as a data attribute.
    });
  });
  me(() => {
    U.current = Gl, !Ge && !m && !Gl && ot();
  }, [Gl, m, Ge, ot]), Wl && (m ? Hl.length === 0 ? li = null : li = Hl.reduce((Y, ie, pe) => (Y.push(ie), pe < Hl.length - 1 && Y.push(", "), Y), []) : li = Y0);
  let K0 = Lt;
  !s && je && be && (K0 = Tt.clientWidth);
  let ep;
  typeof $ < "u" ? ep = $ : ep = d ? null : 0;
  const NP = M.id || (v ? `mui-component-select-${v}` : void 0), ui = {
    ...t,
    variant: F,
    value: H,
    open: Ge,
    error: f
  }, tp = eV(ui), To = typeof ((q0 = y.slotProps) == null ? void 0 : q0.paper) == "function" ? y.slotProps.paper(ui) : (Q0 = y.slotProps) == null ? void 0 : Q0.paper, DP = Ze(To == null ? void 0 : To.ref, ne), FP = typeof ((Z0 = y.slotProps) == null ? void 0 : Z0.list) == "function" ? y.slotProps.list(ui) : (J0 = y.slotProps) == null ? void 0 : J0.list, X0 = po(), zP = po();
  return /* @__PURE__ */ E.jsxs(k.Fragment, {
    children: [/* @__PURE__ */ E.jsx(QG, {
      as: "div",
      ref: Kn,
      tabIndex: ep,
      role: "combobox",
      "aria-controls": Ge ? X0 : void 0,
      "aria-disabled": d ? "true" : void 0,
      "aria-expanded": Ge ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-readonly": w ? "true" : void 0,
      "aria-label": o,
      "aria-labelledby": x,
      "aria-describedby": r,
      "aria-required": P ? "true" : void 0,
      "aria-invalid": f ? "true" : void 0,
      onKeyDown: _P,
      onMouseDown: d || w ? null : qe,
      onBlur: $P,
      onFocus: I,
      ...M,
      ownerState: ui,
      className: oe(M.className, tp.select, l),
      id: NP,
      children: uG(li) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        sw || (sw = /* @__PURE__ */ E.jsx("span", {
          className: "notranslate",
          "aria-hidden": !0,
          children: "​"
        }))
      ) : li
    }), /* @__PURE__ */ E.jsx(JG, {
      "aria-invalid": f,
      value: Array.isArray(H) ? H.join(",") : H,
      name: v,
      ref: se,
      "aria-hidden": !0,
      onChange: PP,
      tabIndex: -1,
      disabled: d,
      readOnly: w,
      className: tp.nativeInput,
      autoFocus: i,
      required: P,
      ...z,
      id: z.id ?? zP,
      ownerState: ui
    }), /* @__PURE__ */ E.jsx(ZG, {
      as: h,
      className: tp.icon,
      ownerState: ui
    }), /* @__PURE__ */ E.jsx(cG, {
      value: on,
      children: /* @__PURE__ */ E.jsx(EG, {
        id: `menu-${v || ""}`,
        anchorEl: Tt,
        open: Ge,
        onClose: EP,
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "center"
        },
        transformOrigin: {
          vertical: "top",
          horizontal: "center"
        },
        ...y,
        slotProps: {
          ...y.slotProps,
          list: {
            "aria-labelledby": x,
            role: "listbox",
            "aria-multiselectable": m ? "true" : void 0,
            disableListWrap: !0,
            id: X0,
            ...FP
          },
          paper: {
            ...To,
            ref: DP,
            style: {
              minWidth: K0,
              ...To == null ? void 0 : To.style
            }
          }
        },
        children: LP
      })
    })]
  });
}), nV = (e) => {
  const {
    classes: t
  } = e, r = ve({
    root: ["root"]
  }, IP, t);
  return {
    ...t,
    ...r
  };
}, G0 = {
  name: "MuiSelect",
  slot: "Root",
  shouldForwardProp: (e) => On(e) && e !== "variant"
}, rV = K(uP, G0)(""), oV = K(kP, G0)(""), iV = K(lP, G0)(""), jg = /* @__PURE__ */ k.forwardRef(function(t, n) {
  const r = Be({
    name: "MuiSelect",
    props: t
  }), {
    autoWidth: o = !1,
    children: i,
    classes: s = {},
    className: a,
    defaultOpen: l = !1,
    displayEmpty: u = !1,
    IconComponent: c = eW,
    id: d,
    input: p,
    inputProps: f,
    label: h,
    labelId: g,
    MenuProps: x,
    multiple: y = !1,
    native: m = !1,
    onClose: v,
    onOpen: C,
    open: S,
    renderValue: b,
    SelectDisplayProps: I,
    variant: T = "outlined",
    ...L
  } = r, O = m ? OG : tV, [_] = vl({
    props: r,
    states: ["variant", "error"]
  }), w = _.variant || T, A = {
    ...r,
    variant: w,
    classes: s
  }, P = nV(A), {
    root: M,
    ...$
  } = P, D = p || {
    standard: /* @__PURE__ */ E.jsx(rV, {
      ownerState: A
    }),
    outlined: /* @__PURE__ */ E.jsx(oV, {
      label: h,
      ownerState: A
    }),
    filled: /* @__PURE__ */ E.jsx(iV, {
      ownerState: A
    })
  }[w], R = Ze(n, Ul(D));
  return /* @__PURE__ */ E.jsx(k.Fragment, {
    children: /* @__PURE__ */ k.cloneElement(D, {
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent: O,
      inputProps: {
        children: i,
        error: _.error,
        IconComponent: c,
        variant: w,
        type: void 0,
        // We render a select. We can ignore the type provided by the `Input`.
        multiple: y,
        ...m ? {
          id: d
        } : {
          autoWidth: o,
          defaultOpen: l,
          displayEmpty: u,
          labelId: g,
          MenuProps: x,
          onClose: v,
          onOpen: C,
          open: S,
          renderValue: b,
          SelectDisplayProps: {
            id: d,
            ...I
          }
        },
        ...f,
        classes: f ? Ut($, f.classes) : $,
        ...p ? p.props.inputProps : {}
      },
      ...(y && m || u) && w === "outlined" ? {
        notched: !0
      } : {},
      ref: R,
      className: oe(D.props.className, a, P.root),
      // If a custom input is provided via 'input' prop, do not allow 'variant' to be propagated to it's root element. See https://github.com/mui/material-ui/issues/33894.
      ...!p && {
        variant: w
      },
      ...L
    })
  });
});
jg.muiName = "Select";
const Zn = {
  cpu: { label: "CPU Usage", query: 'sum(rate(node_cpu_seconds_total{mode!="idle"}[5m])) by (instance)' },
  ram: { label: "RAM Usage", query: "100 * (1 - ((node_memory_MemFree_bytes + node_memory_Cached_bytes + node_memory_Buffers_bytes) / node_memory_MemTotal_bytes))" },
  disk: { label: "Disk Usage", query: '100 - (node_filesystem_avail_bytes{fstype=~"ext4|xfs"} / node_filesystem_size_bytes{fstype=~"ext4|xfs"} * 100)' }
}, sV = (e, t) => window.__pluginFetch(e, t), Mu = ({ namespace: e, instanceName: t, metricQuery: n, metricLabel: r, timeRange: o }) => {
  const [i, s] = nr.useState(null), [a, l] = nr.useState(null), [u, c] = nr.useState(!0), d = nr.useCallback(async () => {
    try {
      c(!0);
      const f = Math.floor(Date.now() / 1e3);
      let h = f, g = 60;
      o === "1h" ? (h = f - 3600, g = 60) : o === "6h" ? (h = f - 3600 * 6, g = 300) : o === "24h" ? (h = f - 3600 * 24, g = 1200) : o === "7d" && (h = f - 3600 * 24 * 7, g = 7200);
      const x = new URLSearchParams({
        query: n,
        start: h.toString(),
        end: f.toString(),
        step: g.toString()
      }), y = await sV(`/api/namespaces/${e}/database-clusters/${t}/monitoring/metrics?${x}`);
      if (!y.ok)
        throw new Error(`Failed to fetch metrics: ${y.statusText}`);
      const m = await y.json();
      if (m.status !== "success")
        throw new Error(`Prometheus error: ${m.error}`);
      const v = m.data.result.map((C) => ({
        label: C.metric.pod || C.metric.instance || "Total",
        data: C.values.map((S) => parseFloat(S[1])),
        timestamps: C.values.map((S) => new Date(S[0] * 1e3))
      }));
      s(v), l(null);
    } catch (f) {
      l(f.message);
    } finally {
      c(!1);
    }
  }, [e, t, n, o]);
  if (nr.useEffect(() => {
    d();
    const f = setInterval(d, 3e4);
    return () => clearInterval(f);
  }, [d]), a)
    return /* @__PURE__ */ E.jsx(jo, { sx: { p: 2, bgcolor: "#ffebee", color: "#c62828", borderRadius: 1 }, children: /* @__PURE__ */ E.jsx(Er, { variant: "body2", children: a }) });
  if (u && !i)
    return /* @__PURE__ */ E.jsx(jo, { sx: { display: "flex", justifyContent: "center", alignItems: "center", height: 300 }, children: /* @__PURE__ */ E.jsx(H0, {}) });
  if (!i || i.length === 0)
    return /* @__PURE__ */ E.jsx(jo, { sx: { display: "flex", justifyContent: "center", alignItems: "center", height: 300 }, children: /* @__PURE__ */ E.jsxs(Er, { variant: "body1", color: "text.secondary", children: [
      "No data available for ",
      r
    ] }) });
  const p = i[0].timestamps;
  return /* @__PURE__ */ E.jsx(jo, { sx: { width: "100%", height: 300 }, children: /* @__PURE__ */ E.jsx(
    VH,
    {
      xAxis: [{ data: p, scaleType: "time" }],
      series: i.map((f) => ({
        data: f.data,
        label: f.label,
        showMark: !1,
        curve: "linear"
      })),
      margin: { top: 20, right: 20, bottom: 30, left: 50 }
    }
  ) });
};
function aV(e) {
  var i, s, a, l, u, c, d, p, f, h, g, x, y, m, v, C;
  const [t, n] = nr.useState("1h"), [r, o] = nr.useState("cpu");
  return /* @__PURE__ */ E.jsxs(jo, { sx: { p: 3 }, children: [
    /* @__PURE__ */ E.jsxs(jo, { sx: { display: "flex", gap: 2, mb: 4, alignItems: "center" }, children: [
      /* @__PURE__ */ E.jsxs(XC, { size: "small", sx: { minWidth: 200 }, children: [
        /* @__PURE__ */ E.jsx(qC, { children: "Metric" }),
        /* @__PURE__ */ E.jsx(
          jg,
          {
            value: r,
            label: "Metric",
            onChange: (S) => o(S.target.value),
            children: Object.entries(Zn).map(([S, { label: b }]) => /* @__PURE__ */ E.jsx(Js, { value: S, children: b }, S))
          }
        )
      ] }),
      /* @__PURE__ */ E.jsxs(XC, { size: "small", sx: { minWidth: 120 }, children: [
        /* @__PURE__ */ E.jsx(qC, { children: "Time Range" }),
        /* @__PURE__ */ E.jsxs(
          jg,
          {
            value: t,
            label: "Time Range",
            onChange: (S) => n(S.target.value),
            children: [
              /* @__PURE__ */ E.jsx(Js, { value: "1h", children: "Last 1 hour" }),
              /* @__PURE__ */ E.jsx(Js, { value: "6h", children: "Last 6 hours" }),
              /* @__PURE__ */ E.jsx(Js, { value: "24h", children: "Last 24 hours" }),
              /* @__PURE__ */ E.jsx(Js, { value: "7d", children: "Last 7 days" })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ E.jsxs(jo, { sx: { display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 3 }, children: [
      /* @__PURE__ */ E.jsxs(ua, { sx: { p: 2, elevation: 1 }, children: [
        /* @__PURE__ */ E.jsx(Er, { variant: "h6", gutterBottom: !0, children: "CPU Usage" }),
        /* @__PURE__ */ E.jsx(
          Mu,
          {
            namespace: ((s = (i = e.cluster) == null ? void 0 : i.metadata) == null ? void 0 : s.namespace) || "my-special-place",
            instanceName: ((l = (a = e.cluster) == null ? void 0 : a.metadata) == null ? void 0 : l.name) || "test-db-cluster",
            metricQuery: Zn.cpu.query,
            metricLabel: Zn.cpu.label,
            timeRange: t
          }
        )
      ] }),
      /* @__PURE__ */ E.jsxs(ua, { sx: { p: 2, elevation: 1 }, children: [
        /* @__PURE__ */ E.jsx(Er, { variant: "h6", gutterBottom: !0, children: "RAM Usage" }),
        /* @__PURE__ */ E.jsx(
          Mu,
          {
            namespace: ((c = (u = e.cluster) == null ? void 0 : u.metadata) == null ? void 0 : c.namespace) || "my-special-place",
            instanceName: ((p = (d = e.cluster) == null ? void 0 : d.metadata) == null ? void 0 : p.name) || "test-db-cluster",
            metricQuery: Zn.ram.query,
            metricLabel: Zn.ram.label,
            timeRange: t
          }
        )
      ] }),
      /* @__PURE__ */ E.jsxs(ua, { sx: { p: 2, elevation: 1 }, children: [
        /* @__PURE__ */ E.jsx(Er, { variant: "h6", gutterBottom: !0, children: "Disk Usage" }),
        /* @__PURE__ */ E.jsx(
          Mu,
          {
            namespace: ((h = (f = e.cluster) == null ? void 0 : f.metadata) == null ? void 0 : h.namespace) || "my-special-place",
            instanceName: ((x = (g = e.cluster) == null ? void 0 : g.metadata) == null ? void 0 : x.name) || "test-db-cluster",
            metricQuery: Zn.disk.query,
            metricLabel: Zn.disk.label,
            timeRange: t
          }
        )
      ] }),
      /* @__PURE__ */ E.jsxs(ua, { sx: { p: 2, elevation: 1 }, children: [
        /* @__PURE__ */ E.jsxs(Er, { variant: "h6", gutterBottom: !0, children: [
          "Custom Selected: ",
          Zn[r].label
        ] }),
        /* @__PURE__ */ E.jsx(
          Mu,
          {
            namespace: ((m = (y = e.cluster) == null ? void 0 : y.metadata) == null ? void 0 : m.namespace) || "my-special-place",
            instanceName: ((C = (v = e.cluster) == null ? void 0 : v.metadata) == null ? void 0 : C.name) || "test-db-cluster",
            metricQuery: Zn[r].query,
            metricLabel: Zn[r].label,
            timeRange: t
          }
        )
      ] })
    ] })
  ] });
}
const cV = (e) => {
  window.__pluginFetch = e.fetch.bind(e);
  const t = (n) => {
    const r = e.React.useRef(null), o = e.React.useRef(null);
    return e.React.useEffect(() => {
      r.current && (o.current || (o.current = ah.createRoot(r.current)), o.current.render(nr.createElement(aV, n)));
    }, [n]), e.React.useEffect(() => () => {
      o.current && setTimeout(() => {
        o.current && o.current.unmount();
      }, 0);
    }, []), e.React.createElement("div", { ref: r, style: { width: "100%", height: "100%" } });
  };
  e.registerExtension({
    type: "clusterDetailTab",
    label: "Monitoring",
    path: "monitoring",
    component: t
  });
};
export {
  cV as default,
  cV as register
};
