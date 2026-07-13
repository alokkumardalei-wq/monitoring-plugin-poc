var NM = Object.defineProperty;
var DM = (e, t, n) => t in e ? NM(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var pe = (e, t, n) => DM(e, typeof t != "symbol" ? t + "" : t, n);
import { d as dr, j as dw, R as ns, b as Bt, f as ce, e as gt, F as He, l as V, i as Zn, g as fe, k as Se, u as le, n as Le, C as rs, c as bo, v as fw, o as zM, h as Rs, m as FM, a as to } from "./main-CUeOSRht.js";
const M = (e, t, n) => {
  const { children: r, ...o } = t || {};
  return dr(e, { ...o, key: n }, r);
}, oe = M;
function L() {
  return L = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, L.apply(null, arguments);
}
function BM(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(r) {
    var o = Object.getOwnPropertyDescriptor(e, r);
    Object.defineProperty(n, r, o.get ? o : {
      enumerable: !0,
      get: function() {
        return e[r];
      }
    });
  }), n;
}
function zr(e, ...t) {
  const n = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((r) => n.searchParams.append("args[]", r)), `Minified MUI error #${e}; visit ${n} for the full message.`;
}
const _s = "$$material";
function UM(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function HM(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var WM = /* @__PURE__ */ function() {
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
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(HM(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = UM(o);
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
}(), Dt = "-ms-", uc = "-moz-", Oe = "-webkit-", pw = "comm", Zg = "rule", Jg = "decl", GM = "@import", hw = "@keyframes", VM = "@layer", jM = Math.abs, hd = String.fromCharCode, YM = Object.assign;
function KM(e, t) {
  return At(e, 0) ^ 45 ? (((t << 2 ^ At(e, 0)) << 2 ^ At(e, 1)) << 2 ^ At(e, 2)) << 2 ^ At(e, 3) : 0;
}
function gw(e) {
  return e.trim();
}
function XM(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function $e(e, t, n) {
  return e.replace(t, n);
}
function vh(e, t) {
  return e.indexOf(t);
}
function At(e, t) {
  return e.charCodeAt(t) | 0;
}
function Ua(e, t, n) {
  return e.slice(t, n);
}
function lr(e) {
  return e.length;
}
function em(e) {
  return e.length;
}
function au(e, t) {
  return t.push(e), e;
}
function qM(e, t) {
  return e.map(t).join("");
}
var gd = 1, os = 1, mw = 0, un = 0, pt = 0, Os = "";
function md(e, t, n, r, o, i, s) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: gd, column: os, length: s, return: "" };
}
function Ks(e, t) {
  return YM(md("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function QM() {
  return pt;
}
function ZM() {
  return pt = un > 0 ? At(Os, --un) : 0, os--, pt === 10 && (os = 1, gd--), pt;
}
function mn() {
  return pt = un < mw ? At(Os, un++) : 0, os++, pt === 10 && (os = 1, gd++), pt;
}
function fr() {
  return At(Os, un);
}
function Wu() {
  return un;
}
function Sl(e, t) {
  return Ua(Os, e, t);
}
function Ha(e) {
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
function yw(e) {
  return gd = os = 1, mw = lr(Os = e), un = 0, [];
}
function vw(e) {
  return Os = "", e;
}
function Gu(e) {
  return gw(Sl(un - 1, xh(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function JM(e) {
  for (; (pt = fr()) && pt < 33; )
    mn();
  return Ha(e) > 2 || Ha(pt) > 3 ? "" : " ";
}
function eE(e, t) {
  for (; --t && mn() && !(pt < 48 || pt > 102 || pt > 57 && pt < 65 || pt > 70 && pt < 97); )
    ;
  return Sl(e, Wu() + (t < 6 && fr() == 32 && mn() == 32));
}
function xh(e) {
  for (; mn(); )
    switch (pt) {
      case e:
        return un;
      case 34:
      case 39:
        e !== 34 && e !== 39 && xh(pt);
        break;
      case 40:
        e === 41 && xh(e);
        break;
      case 92:
        mn();
        break;
    }
  return un;
}
function tE(e, t) {
  for (; mn() && e + pt !== 57; )
    if (e + pt === 84 && fr() === 47)
      break;
  return "/*" + Sl(t, un - 1) + "*" + hd(e === 47 ? e : mn());
}
function nE(e) {
  for (; !Ha(fr()); )
    mn();
  return Sl(e, un);
}
function rE(e) {
  return vw(Vu("", null, null, null, [""], e = yw(e), 0, [0], e));
}
function Vu(e, t, n, r, o, i, s, a, l) {
  for (var u = 0, c = 0, d = s, p = 0, f = 0, h = 0, g = 1, x = 1, y = 1, m = 0, v = "", C = o, b = i, S = r, k = v; x; )
    switch (h = m, m = mn()) {
      case 40:
        if (h != 108 && At(k, d - 1) == 58) {
          vh(k += $e(Gu(m), "&", "&\f"), "&\f") != -1 && (y = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        k += Gu(m);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        k += JM(h);
        break;
      case 92:
        k += eE(Wu() - 1, 7);
        continue;
      case 47:
        switch (fr()) {
          case 42:
          case 47:
            au(oE(tE(mn(), Wu()), t, n), l);
            break;
          default:
            k += "/";
        }
        break;
      case 123 * g:
        a[u++] = lr(k) * y;
      case 125 * g:
      case 59:
      case 0:
        switch (m) {
          case 0:
          case 125:
            x = 0;
          case 59 + c:
            y == -1 && (k = $e(k, /\f/g, "")), f > 0 && lr(k) - d && au(f > 32 ? av(k + ";", r, n, d - 1) : av($e(k, " ", "") + ";", r, n, d - 2), l);
            break;
          case 59:
            k += ";";
          default:
            if (au(S = sv(k, t, n, u, c, o, a, v, C = [], b = [], d), i), m === 123)
              if (c === 0)
                Vu(k, t, S, S, C, i, d, a, b);
              else
                switch (p === 99 && At(k, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Vu(e, S, S, r && au(sv(e, S, S, 0, 0, o, a, v, o, C = [], d), b), o, b, d, a, r ? C : b);
                    break;
                  default:
                    Vu(k, S, S, S, [""], b, 0, a, b);
                }
        }
        u = c = f = 0, g = y = 1, v = k = "", d = s;
        break;
      case 58:
        d = 1 + lr(k), f = h;
      default:
        if (g < 1) {
          if (m == 123)
            --g;
          else if (m == 125 && g++ == 0 && ZM() == 125)
            continue;
        }
        switch (k += hd(m), m * g) {
          case 38:
            y = c > 0 ? 1 : (k += "\f", -1);
            break;
          case 44:
            a[u++] = (lr(k) - 1) * y, y = 1;
            break;
          case 64:
            fr() === 45 && (k += Gu(mn())), p = fr(), c = d = lr(v = k += nE(Wu())), m++;
            break;
          case 45:
            h === 45 && lr(k) == 2 && (g = 0);
        }
    }
  return i;
}
function sv(e, t, n, r, o, i, s, a, l, u, c) {
  for (var d = o - 1, p = o === 0 ? i : [""], f = em(p), h = 0, g = 0, x = 0; h < r; ++h)
    for (var y = 0, m = Ua(e, d + 1, d = jM(g = s[h])), v = e; y < f; ++y)
      (v = gw(g > 0 ? p[y] + " " + m : $e(m, /&\f/g, p[y]))) && (l[x++] = v);
  return md(e, t, n, o === 0 ? Zg : a, l, u, c);
}
function oE(e, t, n) {
  return md(e, t, n, pw, hd(QM()), Ua(e, 2, -2), 0);
}
function av(e, t, n, r) {
  return md(e, t, n, Jg, Ua(e, 0, r), Ua(e, r + 1, -1), r);
}
function Gi(e, t) {
  for (var n = "", r = em(e), o = 0; o < r; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function iE(e, t, n, r) {
  switch (e.type) {
    case VM:
      if (e.children.length) break;
    case GM:
    case Jg:
      return e.return = e.return || e.value;
    case pw:
      return "";
    case hw:
      return e.return = e.value + "{" + Gi(e.children, r) + "}";
    case Zg:
      e.value = e.props.join(",");
  }
  return lr(n = Gi(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function sE(e) {
  var t = em(e);
  return function(n, r, o, i) {
    for (var s = "", a = 0; a < t; a++)
      s += e[a](n, r, o, i) || "";
    return s;
  };
}
function aE(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function xw(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var lE = function(t, n, r) {
  for (var o = 0, i = 0; o = i, i = fr(), o === 38 && i === 12 && (n[r] = 1), !Ha(i); )
    mn();
  return Sl(t, un);
}, uE = function(t, n) {
  var r = -1, o = 44;
  do
    switch (Ha(o)) {
      case 0:
        o === 38 && fr() === 12 && (n[r] = 1), t[r] += lE(un - 1, n, r);
        break;
      case 2:
        t[r] += Gu(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = fr() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += hd(o);
    }
  while (o = mn());
  return t;
}, cE = function(t, n) {
  return vw(uE(yw(t), n));
}, lv = /* @__PURE__ */ new WeakMap(), dE = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r) return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !lv.get(r)) && !o) {
      lv.set(t, !0);
      for (var i = [], s = cE(n, i), a = r.props, l = 0, u = 0; l < s.length; l++)
        for (var c = 0; c < a.length; c++, u++)
          t.props[u] = i[l] ? s[l].replace(/&\f/g, a[c]) : a[c] + " " + s[l];
    }
  }
}, fE = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function Cw(e, t) {
  switch (KM(e, t)) {
    case 5103:
      return Oe + "print-" + e + e;
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
      return Oe + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Oe + e + uc + e + Dt + e + e;
    case 6828:
    case 4268:
      return Oe + e + Dt + e + e;
    case 6165:
      return Oe + e + Dt + "flex-" + e + e;
    case 5187:
      return Oe + e + $e(e, /(\w+).+(:[^]+)/, Oe + "box-$1$2" + Dt + "flex-$1$2") + e;
    case 5443:
      return Oe + e + Dt + "flex-item-" + $e(e, /flex-|-self/, "") + e;
    case 4675:
      return Oe + e + Dt + "flex-line-pack" + $e(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return Oe + e + Dt + $e(e, "shrink", "negative") + e;
    case 5292:
      return Oe + e + Dt + $e(e, "basis", "preferred-size") + e;
    case 6060:
      return Oe + "box-" + $e(e, "-grow", "") + Oe + e + Dt + $e(e, "grow", "positive") + e;
    case 4554:
      return Oe + $e(e, /([^-])(transform)/g, "$1" + Oe + "$2") + e;
    case 6187:
      return $e($e($e(e, /(zoom-|grab)/, Oe + "$1"), /(image-set)/, Oe + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return $e(e, /(image-set\([^]*)/, Oe + "$1$`$1");
    case 4968:
      return $e($e(e, /(.+:)(flex-)?(.*)/, Oe + "box-pack:$3" + Dt + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Oe + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return $e(e, /(.+)-inline(.+)/, Oe + "$1$2") + e;
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
      if (lr(e) - 1 - t > 6) switch (At(e, t + 1)) {
        case 109:
          if (At(e, t + 4) !== 45) break;
        case 102:
          return $e(e, /(.+:)(.+)-([^]+)/, "$1" + Oe + "$2-$3$1" + uc + (At(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~vh(e, "stretch") ? Cw($e(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    case 4949:
      if (At(e, t + 1) !== 115) break;
    case 6444:
      switch (At(e, lr(e) - 3 - (~vh(e, "!important") && 10))) {
        case 107:
          return $e(e, ":", ":" + Oe) + e;
        case 101:
          return $e(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Oe + (At(e, 14) === 45 ? "inline-" : "") + "box$3$1" + Oe + "$2$3$1" + Dt + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (At(e, t + 11)) {
        case 114:
          return Oe + e + Dt + $e(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Oe + e + Dt + $e(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Oe + e + Dt + $e(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Oe + e + Dt + e + e;
  }
  return e;
}
var pE = function(t, n, r, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case Jg:
      t.return = Cw(t.value, t.length);
      break;
    case hw:
      return Gi([Ks(t, {
        value: $e(t.value, "@", "@" + Oe)
      })], o);
    case Zg:
      if (t.length) return qM(t.props, function(i) {
        switch (XM(i, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return Gi([Ks(t, {
              props: [$e(i, /:(read-\w+)/, ":" + uc + "$1")]
            })], o);
          case "::placeholder":
            return Gi([Ks(t, {
              props: [$e(i, /:(plac\w+)/, ":" + Oe + "input-$1")]
            }), Ks(t, {
              props: [$e(i, /:(plac\w+)/, ":" + uc + "$1")]
            }), Ks(t, {
              props: [$e(i, /:(plac\w+)/, Dt + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, hE = [pE], gE = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(g) {
      var x = g.getAttribute("data-emotion");
      x.indexOf(" ") !== -1 && (document.head.appendChild(g), g.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || hE, i = {}, s, a = [];
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
  var l, u = [dE, fE];
  {
    var c, d = [iE, aE(function(g) {
      c.insert(g);
    })], p = sE(u.concat(o, d)), f = function(x) {
      return Gi(rE(x), p);
    };
    l = function(x, y, m, v) {
      c = m, f(x ? x + "{" + y.styles + "}" : y.styles), v && (h.inserted[y.name] = !0);
    };
  }
  var h = {
    key: n,
    sheet: new WM({
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
}, ww = { exports: {} }, Fe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bt = typeof Symbol == "function" && Symbol.for, tm = bt ? Symbol.for("react.element") : 60103, nm = bt ? Symbol.for("react.portal") : 60106, yd = bt ? Symbol.for("react.fragment") : 60107, vd = bt ? Symbol.for("react.strict_mode") : 60108, xd = bt ? Symbol.for("react.profiler") : 60114, Cd = bt ? Symbol.for("react.provider") : 60109, wd = bt ? Symbol.for("react.context") : 60110, rm = bt ? Symbol.for("react.async_mode") : 60111, Sd = bt ? Symbol.for("react.concurrent_mode") : 60111, bd = bt ? Symbol.for("react.forward_ref") : 60112, kd = bt ? Symbol.for("react.suspense") : 60113, mE = bt ? Symbol.for("react.suspense_list") : 60120, Id = bt ? Symbol.for("react.memo") : 60115, Td = bt ? Symbol.for("react.lazy") : 60116, yE = bt ? Symbol.for("react.block") : 60121, vE = bt ? Symbol.for("react.fundamental") : 60117, xE = bt ? Symbol.for("react.responder") : 60118, CE = bt ? Symbol.for("react.scope") : 60119;
function Cn(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case tm:
        switch (e = e.type, e) {
          case rm:
          case Sd:
          case yd:
          case xd:
          case vd:
          case kd:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case wd:
              case bd:
              case Td:
              case Id:
              case Cd:
                return e;
              default:
                return t;
            }
        }
      case nm:
        return t;
    }
  }
}
function Sw(e) {
  return Cn(e) === Sd;
}
Fe.AsyncMode = rm;
Fe.ConcurrentMode = Sd;
Fe.ContextConsumer = wd;
Fe.ContextProvider = Cd;
Fe.Element = tm;
Fe.ForwardRef = bd;
Fe.Fragment = yd;
Fe.Lazy = Td;
Fe.Memo = Id;
Fe.Portal = nm;
Fe.Profiler = xd;
Fe.StrictMode = vd;
Fe.Suspense = kd;
Fe.isAsyncMode = function(e) {
  return Sw(e) || Cn(e) === rm;
};
Fe.isConcurrentMode = Sw;
Fe.isContextConsumer = function(e) {
  return Cn(e) === wd;
};
Fe.isContextProvider = function(e) {
  return Cn(e) === Cd;
};
Fe.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === tm;
};
Fe.isForwardRef = function(e) {
  return Cn(e) === bd;
};
Fe.isFragment = function(e) {
  return Cn(e) === yd;
};
Fe.isLazy = function(e) {
  return Cn(e) === Td;
};
Fe.isMemo = function(e) {
  return Cn(e) === Id;
};
Fe.isPortal = function(e) {
  return Cn(e) === nm;
};
Fe.isProfiler = function(e) {
  return Cn(e) === xd;
};
Fe.isStrictMode = function(e) {
  return Cn(e) === vd;
};
Fe.isSuspense = function(e) {
  return Cn(e) === kd;
};
Fe.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === yd || e === Sd || e === xd || e === vd || e === kd || e === mE || typeof e == "object" && e !== null && (e.$$typeof === Td || e.$$typeof === Id || e.$$typeof === Cd || e.$$typeof === wd || e.$$typeof === bd || e.$$typeof === vE || e.$$typeof === xE || e.$$typeof === CE || e.$$typeof === yE);
};
Fe.typeOf = Cn;
ww.exports = Fe;
var wE = ww.exports, bw = wE, SE = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, bE = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, kw = {};
kw[bw.ForwardRef] = SE;
kw[bw.Memo] = bE;
var kE = !0;
function Iw(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (r += o + " ");
  }), r;
}
var om = function(t, n, r) {
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
  kE === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
}, im = function(t, n, r) {
  om(t, n, r);
  var o = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var i = n;
    do
      t.insert(n === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function IE(e) {
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
var TE = {
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
}, PE = /[A-Z]|^ms/g, ME = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Tw = function(t) {
  return t.charCodeAt(1) === 45;
}, uv = function(t) {
  return t != null && typeof t != "boolean";
}, yp = /* @__PURE__ */ xw(function(e) {
  return Tw(e) ? e : e.replace(PE, "-$&").toLowerCase();
}), cv = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(ME, function(r, o, i) {
          return ur = {
            name: o,
            styles: i,
            next: ur
          }, o;
        });
  }
  return TE[t] !== 1 && !Tw(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
function Wa(e, t, n) {
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
        return ur = {
          name: o.name,
          styles: o.styles,
          next: ur
        }, o.name;
      var i = n;
      if (i.styles !== void 0) {
        var s = i.next;
        if (s !== void 0)
          for (; s !== void 0; )
            ur = {
              name: s.name,
              styles: s.styles,
              next: ur
            }, s = s.next;
        var a = i.styles + ";";
        return a;
      }
      return EE(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var l = ur, u = n(e);
        return ur = l, Wa(e, t, u);
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
function EE(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      r += Wa(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var s = n[i];
      if (typeof s != "object") {
        var a = s;
        t != null && t[a] !== void 0 ? r += i + "{" + t[a] + "}" : uv(a) && (r += yp(i) + ":" + cv(i, a) + ";");
      } else if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0))
        for (var l = 0; l < s.length; l++)
          uv(s[l]) && (r += yp(i) + ":" + cv(i, s[l]) + ";");
      else {
        var u = Wa(e, t, s);
        switch (i) {
          case "animation":
          case "animationName": {
            r += yp(i) + ":" + u + ";";
            break;
          }
          default:
            r += i + "{" + u + "}";
        }
      }
    }
  return r;
}
var dv = /label:\s*([^\s;{]+)\s*(;|$)/g, ur;
function bl(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, o = "";
  ur = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    r = !1, o += Wa(n, t, i);
  else {
    var s = i;
    o += s[0];
  }
  for (var a = 1; a < e.length; a++)
    if (o += Wa(n, t, e[a]), r) {
      var l = i;
      o += l[a];
    }
  dv.lastIndex = 0;
  for (var u = "", c; (c = dv.exec(o)) !== null; )
    u += "-" + c[1];
  var d = IE(o) + u;
  return {
    name: d,
    styles: o,
    next: ur
  };
}
var AE = function(t) {
  return t();
}, Pw = ns.useInsertionEffect ? ns.useInsertionEffect : !1, Mw = Pw || AE, fv = Pw || dw, Ew = /* @__PURE__ */ Bt(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ gE({
    key: "css"
  }) : null
);
Ew.Provider;
var sm = function(t) {
  return /* @__PURE__ */ ce(function(n, r) {
    var o = gt(Ew);
    return t(n, o, r);
  });
}, Pd = /* @__PURE__ */ Bt({}), am = {}.hasOwnProperty, Ch = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", RE = function(t, n) {
  var r = {};
  for (var o in n)
    am.call(n, o) && (r[o] = n[o]);
  return r[Ch] = t, r;
}, _E = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return om(n, r, o), Mw(function() {
    return im(n, r, o);
  }), null;
}, OE = /* @__PURE__ */ sm(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var o = e[Ch], i = [r], s = "";
  typeof e.className == "string" ? s = Iw(t.registered, i, e.className) : e.className != null && (s = e.className + " ");
  var a = bl(i, void 0, gt(Pd));
  s += t.key + "-" + a.name;
  var l = {};
  for (var u in e)
    am.call(e, u) && u !== "css" && u !== Ch && (l[u] = e[u]);
  return l.className = s, n && (l.ref = n), /* @__PURE__ */ dr(He, null, /* @__PURE__ */ dr(_E, {
    cache: t,
    serialized: a,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ dr(o, l));
}), $E = OE, pv = function(t, n) {
  var r = arguments;
  if (n == null || !am.call(n, "css"))
    return dr.apply(void 0, r);
  var o = r.length, i = new Array(o);
  i[0] = $E, i[1] = RE(t, n);
  for (var s = 2; s < o; s++)
    i[s] = r[s];
  return dr.apply(null, i);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(pv || (pv = {}));
var LE = /* @__PURE__ */ sm(function(e, t) {
  var n = e.styles, r = bl([n], void 0, gt(Pd)), o = V();
  return fv(function() {
    var i = t.key + "-global", s = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), a = !1, l = document.querySelector('style[data-emotion="' + i + " " + r.name + '"]');
    return t.sheet.tags.length && (s.before = t.sheet.tags[0]), l !== null && (a = !0, l.setAttribute("data-emotion", i), s.hydrate([l])), o.current = [s, a], function() {
      s.flush();
    };
  }, [t]), fv(function() {
    var i = o.current, s = i[0], a = i[1];
    if (a) {
      i[1] = !1;
      return;
    }
    if (r.next !== void 0 && im(t, r.next, !0), s.tags.length) {
      var l = s.tags[s.tags.length - 1].nextElementSibling;
      s.before = l, s.flush();
    }
    t.insert("", r, s, !1);
  }, [t, r.name]), null;
});
function Ga() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return bl(t);
}
function kl() {
  var e = Ga.apply(void 0, arguments), t = "animation-" + e.name;
  return {
    name: t,
    styles: "@keyframes " + t + "{" + e.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}
var NE = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, DE = /* @__PURE__ */ xw(
  function(e) {
    return NE.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), zE = DE, FE = function(t) {
  return t !== "theme";
}, hv = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? zE : FE;
}, gv = function(t, n, r) {
  var o;
  if (n) {
    var i = n.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(s) {
      return t.__emotion_forwardProp(s) && i(s);
    } : i;
  }
  return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
}, BE = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return om(n, r, o), Mw(function() {
    return im(n, r, o);
  }), null;
}, UE = function e(t, n) {
  var r = t.__emotion_real === t, o = r && t.__emotion_base || t, i, s;
  n !== void 0 && (i = n.label, s = n.target);
  var a = gv(t, n, r), l = a || hv(o), u = !l("as");
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
    var g = sm(function(x, y, m) {
      var v = u && x.as || o, C = "", b = [], S = x;
      if (x.theme == null) {
        S = {};
        for (var k in x)
          S[k] = x[k];
        S.theme = gt(Pd);
      }
      typeof x.className == "string" ? C = Iw(y.registered, b, x.className) : x.className != null && (C = x.className + " ");
      var I = bl(d.concat(b), y.registered, S);
      C += y.key + "-" + I.name, s !== void 0 && (C += " " + s);
      var $ = u && a === void 0 ? hv(v) : l, O = {};
      for (var R in x)
        u && R === "as" || $(R) && (O[R] = x[R]);
      return O.className = C, m && (O.ref = m), /* @__PURE__ */ dr(He, null, /* @__PURE__ */ dr(BE, {
        cache: y,
        serialized: I,
        isStringTag: typeof v == "string"
      }), /* @__PURE__ */ dr(v, O));
    });
    return g.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", g.defaultProps = t.defaultProps, g.__emotion_real = g, g.__emotion_base = o, g.__emotion_styles = d, g.__emotion_forwardProp = a, Object.defineProperty(g, "toString", {
      value: function() {
        return "." + s;
      }
    }), g.withComponent = function(x, y) {
      var m = e(x, L({}, n, y, {
        shouldForwardProp: gv(g, y, !0)
      }));
      return m.apply(void 0, d);
    }, g;
  };
}, HE = [
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
], wh = UE.bind(null);
HE.forEach(function(e) {
  wh[e] = wh(e);
});
function WE(e) {
  return e == null || Object.keys(e).length === 0;
}
function GE(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e;
  return /* @__PURE__ */ M(LE, {
    styles: typeof t == "function" ? (o) => t(WE(o) ? n : o) : t
  });
}
function Aw(e, t) {
  return wh(e, t);
}
function VE(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const mv = [];
function lo(e) {
  return mv[0] = e, bl(mv);
}
var Rw = { exports: {} }, Be = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lm = Symbol.for("react.transitional.element"), um = Symbol.for("react.portal"), Md = Symbol.for("react.fragment"), Ed = Symbol.for("react.strict_mode"), Ad = Symbol.for("react.profiler"), Rd = Symbol.for("react.consumer"), _d = Symbol.for("react.context"), Od = Symbol.for("react.forward_ref"), $d = Symbol.for("react.suspense"), Ld = Symbol.for("react.suspense_list"), Nd = Symbol.for("react.memo"), Dd = Symbol.for("react.lazy"), jE = Symbol.for("react.view_transition"), YE = Symbol.for("react.client.reference");
function Fn(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case lm:
        switch (e = e.type, e) {
          case Md:
          case Ad:
          case Ed:
          case $d:
          case Ld:
          case jE:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case _d:
              case Od:
              case Dd:
              case Nd:
                return e;
              case Rd:
                return e;
              default:
                return t;
            }
        }
      case um:
        return t;
    }
  }
}
Be.ContextConsumer = Rd;
Be.ContextProvider = _d;
Be.Element = lm;
Be.ForwardRef = Od;
Be.Fragment = Md;
Be.Lazy = Dd;
Be.Memo = Nd;
Be.Portal = um;
Be.Profiler = Ad;
Be.StrictMode = Ed;
Be.Suspense = $d;
Be.SuspenseList = Ld;
Be.isContextConsumer = function(e) {
  return Fn(e) === Rd;
};
Be.isContextProvider = function(e) {
  return Fn(e) === _d;
};
Be.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === lm;
};
Be.isForwardRef = function(e) {
  return Fn(e) === Od;
};
Be.isFragment = function(e) {
  return Fn(e) === Md;
};
Be.isLazy = function(e) {
  return Fn(e) === Dd;
};
Be.isMemo = function(e) {
  return Fn(e) === Nd;
};
Be.isPortal = function(e) {
  return Fn(e) === um;
};
Be.isProfiler = function(e) {
  return Fn(e) === Ad;
};
Be.isStrictMode = function(e) {
  return Fn(e) === Ed;
};
Be.isSuspense = function(e) {
  return Fn(e) === $d;
};
Be.isSuspenseList = function(e) {
  return Fn(e) === Ld;
};
Be.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Md || e === Ad || e === Ed || e === $d || e === Ld || typeof e == "object" && e !== null && (e.$$typeof === Dd || e.$$typeof === Nd || e.$$typeof === _d || e.$$typeof === Rd || e.$$typeof === Od || e.$$typeof === YE || e.getModuleId !== void 0);
};
Be.typeOf = Fn;
Rw.exports = Be;
var _w = Rw.exports;
function Mr(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Ow(e) {
  if (/* @__PURE__ */ Zn(e) || _w.isValidElementType(e) || !Mr(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = Ow(e[n]);
  }), t;
}
function Xt(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? {
    ...e
  } : e;
  return Mr(e) && Mr(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ Zn(t[o]) || _w.isValidElementType(t[o]) ? r[o] = t[o] : Mr(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && Mr(e[o]) ? r[o] = Xt(e[o], t[o], n) : n.clone ? r[o] = Mr(t[o]) ? Ow(t[o]) : t[o] : r[o] = t[o];
  }), r;
}
const KE = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => ({
    ...n,
    [r.key]: r.val
  }), {});
};
function $w(e) {
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
  } = e, i = KE(t), s = Object.keys(i);
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
const yv = /min-width:\s*([0-9.]+)/;
function vv(e, t) {
  if (!e.containerQueries || !XE(t))
    return t;
  const n = [];
  for (const o in t)
    o.startsWith("@container") && n.push(o);
  n.sort((o, i) => {
    var s, a;
    return +(((s = o.match(yv)) == null ? void 0 : s[1]) || 0) - +(((a = i.match(yv)) == null ? void 0 : a[1]) || 0);
  });
  const r = t;
  for (let o = 0; o < n.length; o += 1) {
    const i = n[o], s = r[i];
    delete r[i], r[i] = s;
  }
  return r;
}
function XE(e) {
  for (const t in e)
    if (t.startsWith("@container"))
      return !0;
  return !1;
}
function Lw(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((n) => t.startsWith(`@${n}`)) || !!t.match(/^@\d/));
}
function qE(e, t) {
  const n = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!n)
    return null;
  const [, r, o] = n, i = Number.isNaN(+r) ? r || 0 : +r;
  return e.containerQueries(o).up(i);
}
function QE(e) {
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
const ZE = {
  borderRadius: 4
};
function Nw(e) {
  if (e == null)
    return !0;
  for (const t in e)
    return !1;
  return !0;
}
function Vi(e, t) {
  const n = Array.isArray(t), r = Array.isArray(e);
  return rA(t) ? t : oA(e) ? is(t) : n && r ? tA(e, t) : n !== r ? is(t) : iA(e, t);
}
function JE(e) {
  let t = 0;
  const n = e.length, r = new Array(n);
  for (t = 0; t < n; t += 1)
    r[t] = is(e[t]);
  return r;
}
function eA(e) {
  const t = {};
  for (const n in e)
    n === "__proto__" || n === "constructor" || n === "prototype" || (t[n] = is(e[n]));
  return t;
}
function tA(e, t) {
  const n = e.length;
  for (let r = 0; r < t.length; r += 1)
    e[n + r] = is(t[r]);
  return e;
}
function nA(e) {
  return typeof e == "object" && e !== null && !(e instanceof RegExp) && !(e instanceof Date);
}
function rA(e) {
  return typeof e != "object" || e === null;
}
function oA(e) {
  return typeof e != "object" || e === null || e instanceof RegExp || e instanceof Date;
}
function is(e) {
  return nA(e) ? Array.isArray(e) ? JE(e) : eA(e) : e;
}
function iA(e, t) {
  for (const n in t)
    n === "__proto__" || n === "constructor" || n === "prototype" || (n in e ? e[n] = Vi(e[n], t[n]) : e[n] = is(t[n]));
  return e;
}
const sA = {}, zd = {
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
}, cc = $w({
  values: zd
}), aA = {
  containerQueries: (e) => ({
    up: (t) => {
      let n = typeof t == "number" ? t : zd[t] || t;
      return typeof n == "number" && (n = `${n}px`), e ? `@container ${e} (min-width:${n})` : `@container (min-width:${n})`;
    }
  })
};
function $s(e, t, n) {
  const r = {};
  return Fd(r, e.theme, t, (o, i, s) => {
    const a = n(i, s);
    o ? r[o] = a : Vi(r, a);
  });
}
function Fd(e, t, n, r) {
  if (t ?? (t = sA), Array.isArray(n)) {
    const o = t.breakpoints ?? cc;
    for (let i = 0; i < n.length; i += 1)
      vp(e, o.up(o.keys[i]), n[i], void 0, r);
    return e;
  }
  if (typeof n == "object") {
    const o = t.breakpoints ?? cc, i = o.values ?? zd;
    for (const s in n)
      if (Lw(o.keys, s)) {
        const a = qE(t.containerQueries ? t : aA, s);
        a && vp(e, a, n[s], s, r);
      } else if (s in i) {
        const a = o.up(s);
        vp(e, a, n[s], s, r);
      } else {
        const a = s;
        e[a] = n[a];
      }
    return e;
  }
  return r(void 0, n), e;
}
function vp(e, t, n, r, o) {
  e[t] ?? (e[t] = {}), o(t, n, r);
}
function lA(e = cc) {
  const {
    internal_mediaKeys: t
  } = e, n = {};
  for (let r = 0; r < t.length; r += 1)
    n[t[r]] = {};
  return n;
}
function xv(e, t) {
  const n = e.internal_mediaKeys;
  for (let r = 0; r < n.length; r += 1) {
    const o = n[r];
    Nw(t[o]) && delete t[o];
  }
  return t;
}
function uA(e, t) {
  if (Array.isArray(t))
    return !0;
  if (typeof t == "object" && t !== null) {
    for (let r = 0; r < e.keys.length; r += 1)
      if (e.keys[r] in t)
        return !0;
    const n = Object.keys(t);
    for (let r = 0; r < n.length; r += 1)
      if (Lw(e.keys, n[r]))
        return !0;
  }
  return !1;
}
function Re(e) {
  if (typeof e != "string")
    throw new Error(zr(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Dw(e, t, n, r) {
  let o;
  return typeof e == "function" ? o = e(n) : Array.isArray(e) ? o = e[n] || n : typeof n == "string" ? o = Bd(e, n, !0, r) || n : o = n, t && (o = t(o, n, e)), o;
}
function Bd(e, t, n = !0, r = void 0) {
  if (!e || !t)
    return null;
  const o = t.split(".");
  if (e.vars && n) {
    const i = Cv(e.vars, o, r);
    if (i != null)
      return i;
  }
  return Cv(e, o, r);
}
function Cv(e, t, n = void 0) {
  let r, o = e, i = 0;
  for (; i < t.length; ) {
    if (o == null)
      return o;
    r = o, o = o[t[i]], i += 1;
  }
  if (n && o === void 0) {
    const s = t[t.length - 1], a = `${n}${s === "default" ? "" : Re(s)}`;
    return r == null ? void 0 : r[a];
  }
  return o;
}
function at(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: o
  } = e, i = (s) => {
    if (s[t] == null)
      return null;
    const a = s[t], l = s.theme, u = Bd(l, r) || {};
    return $s(s, a, (d) => {
      const p = Dw(u, o, d, t);
      return n === !1 ? p : {
        [n]: p
      };
    });
  };
  return i.propTypes = {}, i.filterProps = [t], i;
}
const cA = {
  internal_cache: {}
}, dc = {
  m: "margin",
  p: "padding"
}, wv = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Sv = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Va = {};
for (const e in dc)
  Va[e] = [dc[e]];
for (const e in dc)
  for (const t in wv) {
    const n = dc[e], r = wv[t], o = Array.isArray(r) ? r.map((i) => n + i) : [n + r];
    Va[e + t] = o;
  }
for (const e in Sv)
  Va[e] = Va[Sv[e]];
const cm = /* @__PURE__ */ new Set(["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"]), dm = /* @__PURE__ */ new Set(["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"]);
[...cm, ...dm];
function Il(e, t, n, r) {
  const o = Bd(e, t, !0) ?? n;
  return typeof o == "number" || typeof o == "string" ? (i) => typeof i == "string" ? i : typeof o == "string" ? o.startsWith("var(") && i === 0 ? 0 : o.startsWith("var(") && i === 1 ? o : `calc(${i} * ${o})` : o * i : Array.isArray(o) ? (i) => {
    if (typeof i == "string")
      return i;
    const s = Math.abs(i), a = o[s];
    return i >= 0 ? a : typeof a == "number" ? -a : typeof a == "string" && a.startsWith("var(") ? `calc(-1 * ${a})` : `-${a}`;
  } : typeof o == "function" ? o : () => {
  };
}
function fm(e) {
  return Il(e, "spacing", 8);
}
function Tl(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
const bv = [""];
function zw(e, t) {
  var i;
  const n = e.theme ?? cA, r = ((i = n == null ? void 0 : n.internal_cache) == null ? void 0 : i.unarySpacing) ?? fm(n), o = {};
  for (const s in e) {
    if (!t.has(s))
      continue;
    const a = Va[s] ?? (bv[0] = s, bv), l = e[s];
    Fd(o, e.theme, l, (u, c) => {
      const d = u ? o[u] : o;
      for (let p = 0; p < a.length; p += 1)
        d[a[p]] = Tl(r, c);
    });
  }
  return o;
}
function pm(e) {
  return zw(e, cm);
}
pm.propTypes = {};
pm.filterProps = cm;
const dt = pm;
function hm(e) {
  return zw(e, dm);
}
hm.propTypes = {};
hm.filterProps = dm;
const ft = hm;
function Fw(e = 8, t = fm({
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
function Ud(...e) {
  const t = e.reduce((r, o) => (o.filterProps.forEach((i) => {
    r[i] = o;
  }), r), {}), n = (r) => {
    const o = {};
    for (const i in r)
      t[i] && Vi(o, t[i](r));
    return o;
  };
  return n.propTypes = {}, n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), []), n;
}
function In(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Bn(e, t) {
  return at({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const dA = Bn("border", In), fA = Bn("borderTop", In), pA = Bn("borderRight", In), hA = Bn("borderBottom", In), gA = Bn("borderLeft", In), mA = Bn("borderColor"), yA = Bn("borderTopColor"), vA = Bn("borderRightColor"), xA = Bn("borderBottomColor"), CA = Bn("borderLeftColor"), wA = Bn("outline", In), SA = Bn("outlineColor"), Hd = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Il(e.theme, "shape.borderRadius", 4), n = (r) => ({
      borderRadius: Tl(t, r)
    });
    return $s(e, e.borderRadius, n);
  }
  return null;
};
Hd.propTypes = {};
Hd.filterProps = ["borderRadius"];
Ud(dA, fA, pA, hA, gA, mA, yA, vA, xA, CA, Hd, wA, SA);
const Wd = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Il(e.theme, "spacing", 8), n = (r) => ({
      gap: Tl(t, r)
    });
    return $s(e, e.gap, n);
  }
  return null;
};
Wd.propTypes = {};
Wd.filterProps = ["gap"];
const Gd = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Il(e.theme, "spacing", 8), n = (r) => ({
      columnGap: Tl(t, r)
    });
    return $s(e, e.columnGap, n);
  }
  return null;
};
Gd.propTypes = {};
Gd.filterProps = ["columnGap"];
const Vd = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Il(e.theme, "spacing", 8), n = (r) => ({
      rowGap: Tl(t, r)
    });
    return $s(e, e.rowGap, n);
  }
  return null;
};
Vd.propTypes = {};
Vd.filterProps = ["rowGap"];
const bA = at({
  prop: "gridColumn"
}), kA = at({
  prop: "gridRow"
}), IA = at({
  prop: "gridAutoFlow"
}), TA = at({
  prop: "gridAutoColumns"
}), PA = at({
  prop: "gridAutoRows"
}), MA = at({
  prop: "gridTemplateColumns"
}), EA = at({
  prop: "gridTemplateRows"
}), AA = at({
  prop: "gridTemplateAreas"
}), RA = at({
  prop: "gridArea"
});
Ud(Wd, Gd, Vd, bA, kA, IA, TA, PA, MA, EA, AA, RA);
function ji(e, t) {
  return t === "grey" ? t : e;
}
const _A = at({
  prop: "color",
  themeKey: "palette",
  transform: ji
}), OA = at({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: ji
}), $A = at({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: ji
});
Ud(_A, OA, $A);
const LA = zd;
function hn(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const NA = at({
  prop: "width",
  transform: hn
}), gm = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var o, i, s, a, l;
      const r = ((s = (i = (o = e.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : i.values) == null ? void 0 : s[n]) || LA[n];
      return r ? ((l = (a = e.theme) == null ? void 0 : a.breakpoints) == null ? void 0 : l.unit) !== "px" ? {
        maxWidth: `${r}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: r
      } : {
        maxWidth: hn(n)
      };
    };
    return $s(e, e.maxWidth, t);
  }
  return null;
};
gm.filterProps = ["maxWidth"];
const DA = at({
  prop: "minWidth",
  transform: hn
}), zA = at({
  prop: "height",
  transform: hn
}), FA = at({
  prop: "maxHeight",
  transform: hn
}), BA = at({
  prop: "minHeight",
  transform: hn
});
at({
  prop: "size",
  cssProperty: "width",
  transform: hn
});
at({
  prop: "size",
  cssProperty: "height",
  transform: hn
});
const UA = at({
  prop: "boxSizing"
});
Ud(NA, gm, DA, zA, FA, BA, UA);
const jd = {
  // borders
  border: {
    themeKey: "borders",
    transform: In
  },
  borderTop: {
    themeKey: "borders",
    transform: In
  },
  borderRight: {
    themeKey: "borders",
    transform: In
  },
  borderBottom: {
    themeKey: "borders",
    transform: In
  },
  borderLeft: {
    themeKey: "borders",
    transform: In
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
    transform: In
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Hd
  },
  // palette
  color: {
    themeKey: "palette",
    transform: ji
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: ji
  },
  backgroundColor: {
    themeKey: "palette",
    transform: ji
  },
  // spacing
  p: {
    style: ft
  },
  pt: {
    style: ft
  },
  pr: {
    style: ft
  },
  pb: {
    style: ft
  },
  pl: {
    style: ft
  },
  px: {
    style: ft
  },
  py: {
    style: ft
  },
  padding: {
    style: ft
  },
  paddingTop: {
    style: ft
  },
  paddingRight: {
    style: ft
  },
  paddingBottom: {
    style: ft
  },
  paddingLeft: {
    style: ft
  },
  paddingX: {
    style: ft
  },
  paddingY: {
    style: ft
  },
  paddingInline: {
    style: ft
  },
  paddingInlineStart: {
    style: ft
  },
  paddingInlineEnd: {
    style: ft
  },
  paddingBlock: {
    style: ft
  },
  paddingBlockStart: {
    style: ft
  },
  paddingBlockEnd: {
    style: ft
  },
  m: {
    style: dt
  },
  mt: {
    style: dt
  },
  mr: {
    style: dt
  },
  mb: {
    style: dt
  },
  ml: {
    style: dt
  },
  mx: {
    style: dt
  },
  my: {
    style: dt
  },
  margin: {
    style: dt
  },
  marginTop: {
    style: dt
  },
  marginRight: {
    style: dt
  },
  marginBottom: {
    style: dt
  },
  marginLeft: {
    style: dt
  },
  marginX: {
    style: dt
  },
  marginY: {
    style: dt
  },
  marginInline: {
    style: dt
  },
  marginInlineStart: {
    style: dt
  },
  marginInlineEnd: {
    style: dt
  },
  marginBlock: {
    style: dt
  },
  marginBlockStart: {
    style: dt
  },
  marginBlockEnd: {
    style: dt
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
    style: Wd
  },
  rowGap: {
    style: Vd
  },
  columnGap: {
    style: Gd
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
    transform: hn
  },
  maxWidth: {
    style: gm
  },
  minWidth: {
    transform: hn
  },
  height: {
    transform: hn
  },
  maxHeight: {
    transform: hn
  },
  minHeight: {
    transform: hn
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
}, HA = {};
function WA() {
  function e(t) {
    if (!t.sx)
      return null;
    const {
      sx: n,
      theme: r = HA,
      nested: o
    } = t, i = r.unstable_sxConfig ?? jd, s = {
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
      const c = r.breakpoints ?? cc, d = lA(c);
      for (const p in u) {
        const f = GA(u[p], r);
        if (f != null) {
          if (typeof f != "object") {
            kv(d, p, f, r, i);
            continue;
          }
          if (i[p]) {
            kv(d, p, f, r, i);
            continue;
          }
          uA(c, f) ? Fd(d, t.theme, f, (h, g) => {
            d[h][p] = g;
          }) : (s.sx = f, d[p] = e(s));
        }
      }
      return !o && r.modularCssLayers ? {
        "@layer sx": vv(r, xv(c, d))
      } : vv(r, xv(c, d));
    }
    return Array.isArray(n) ? n.map(a) : a(n);
  }
  return e.filterProps = ["sx"], e;
}
const ss = WA();
function kv(e, t, n, r, o) {
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
    Vi(e, a({
      [t]: n,
      theme: r
    }));
    return;
  }
  const {
    cssProperty: l = t,
    transform: u
  } = i, c = Bd(r, s);
  Fd(e, r, n, (d, p) => {
    const f = Dw(c, u, p, t);
    l === !1 ? Vi(d ? e[d] : e, f) : d ? e[d][l] = f : e[l] = f;
  });
}
function GA(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function VA(e, t) {
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
function Yd(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: o,
    shape: i = {},
    ...s
  } = e, a = $w(n), l = Fw(o);
  let u = Xt({
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
      ...ZE,
      ...i
    }
  }, s);
  return u = QE(u), u.applyStyles = VA, u = t.reduce((c, d) => Xt(c, d), u), u.unstable_sxConfig = {
    ...jd,
    ...s == null ? void 0 : s.unstable_sxConfig
  }, u.unstable_sx = function(d) {
    return ss({
      sx: d,
      theme: this
    });
  }, u.internal_cache = {}, u;
}
function jA(e) {
  return Object.keys(e).length === 0;
}
function Bw(e = null) {
  const t = gt(Pd);
  return !t || jA(t) ? e : t;
}
const YA = Yd();
function Pl(e = YA) {
  return Bw(e);
}
function xp(e) {
  const t = lo(e);
  return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
}
function KA({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const r = Pl(n), o = t && r[t] || r;
  let i = typeof e == "function" ? e(o) : e;
  return o.modularCssLayers && (Array.isArray(i) ? i = i.map((s) => xp(typeof s == "function" ? s(o) : s)) : i = xp(i)), /* @__PURE__ */ M(GE, {
    styles: i
  });
}
const Iv = (e) => e, XA = () => {
  let e = Iv;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Iv;
    }
  };
}, Uw = XA();
function Hw(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Hw(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function ie() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Hw(e)) && (r && (r += " "), r += t);
  return r;
}
function qA(e = {}) {
  const {
    themeId: t,
    defaultTheme: n,
    defaultClassName: r = "MuiBox-root",
    generateClassName: o
  } = e, i = Aw("div", {
    shouldForwardProp: (a) => a !== "theme" && a !== "sx" && a !== "as"
  })(ss);
  return /* @__PURE__ */ ce(function(l, u) {
    const c = Pl(n), {
      className: d,
      component: p = "div",
      ...f
    } = l;
    return /* @__PURE__ */ M(i, {
      as: p,
      ref: u,
      className: ie(d, o ? o(r) : r),
      theme: t && c[t] || c,
      ...f
    });
  });
}
const QA = {
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
function be(e, t, n = "Mui") {
  const r = QA[t];
  return r ? `${n}-${r}` : `${Uw.generate(e)}-${t}`;
}
function he(e, t, n = "Mui") {
  const r = {};
  return t.forEach((o) => {
    r[o] = be(e, o, n);
  }), r;
}
function Ww(e) {
  const {
    variants: t,
    ...n
  } = e, r = {
    variants: t,
    style: lo(n),
    isProcessed: !0
  };
  return r.style === n || t && t.forEach((o) => {
    typeof o.style != "function" && (o.style = lo(o.style));
  }), r;
}
const ZA = Yd();
function ju(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function Go(e, t) {
  return t && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${t}{${String(e.styles)}}`), e;
}
function JA(e) {
  return e ? (t, n) => n[e] : null;
}
function e2(e, t, n) {
  e.theme = Nw(e.theme) ? n : e.theme[t] || e.theme;
}
function Yu(e, t, n) {
  const r = typeof t == "function" ? t(e) : t;
  if (Array.isArray(r))
    return r.flatMap((o) => Yu(e, o, n));
  if (Array.isArray(r == null ? void 0 : r.variants)) {
    let o;
    if (r.isProcessed)
      o = n ? Go(r.style, n) : r.style;
    else {
      const {
        variants: i,
        ...s
      } = r;
      o = n ? Go(lo(s), n) : s;
    }
    return Gw(e, r.variants, [o], n);
  }
  return r != null && r.isProcessed ? n ? Go(lo(r.style), n) : r.style : n ? Go(lo(r), n) : r;
}
function Gw(e, t, n = [], r = void 0) {
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
    }), n.push(r ? Go(lo(a.style(o)), r) : a.style(o))) : n.push(r ? Go(lo(a.style), r) : a.style);
  }
  return n;
}
function Vw(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = ZA,
    rootShouldForwardProp: r = ju,
    slotShouldForwardProp: o = ju
  } = e;
  function i(a) {
    e2(a, t, n);
  }
  return (a, l = {}) => {
    VE(a, (S) => S.filter((k) => k !== ss));
    const {
      name: u,
      slot: c,
      skipVariantsResolver: d,
      skipSx: p,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: f = JA(r2(c)),
      ...h
    } = l, g = u && u.startsWith("Mui") || c ? "components" : "custom", x = d !== void 0 ? d : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      c && c !== "Root" && c !== "root" || !1
    ), y = p || !1;
    let m = ju;
    c === "Root" || c === "root" ? m = r : c ? m = o : n2(a) && (m = void 0);
    const v = Aw(a, {
      shouldForwardProp: m,
      label: t2(),
      ...h
    }), C = (S) => {
      if (S.__emotion_real === S)
        return S;
      if (typeof S == "function")
        return function(I) {
          return Yu(I, S, I.theme.modularCssLayers ? g : void 0);
        };
      if (Mr(S)) {
        const k = Ww(S);
        return function($) {
          return k.variants ? Yu($, k, $.theme.modularCssLayers ? g : void 0) : $.theme.modularCssLayers ? Go(k.style, g) : k.style;
        };
      }
      return S;
    }, b = (...S) => {
      const k = [], I = S.map(C), $ = [];
      if (k.push(i), u && f && $.push(function(E) {
        var N, A;
        const P = (A = (N = E.theme.components) == null ? void 0 : N[u]) == null ? void 0 : A.styleOverrides;
        if (!P)
          return null;
        const _ = {};
        for (const D in P)
          _[D] = Yu(E, P[D], E.theme.modularCssLayers ? "theme" : void 0);
        return f(E, _);
      }), u && !x && $.push(function(E) {
        var _, N;
        const T = E.theme, P = (N = (_ = T == null ? void 0 : T.components) == null ? void 0 : _[u]) == null ? void 0 : N.variants;
        return P ? Gw(E, P, [], E.theme.modularCssLayers ? "theme" : void 0) : null;
      }), y || $.push(ss), Array.isArray(I[0])) {
        const w = I.shift(), E = new Array(k.length).fill(""), T = new Array($.length).fill("");
        let P;
        P = [...E, ...w, ...T], P.raw = [...E, ...w.raw, ...T], k.unshift(P);
      }
      const O = [...k, ...I, ...$], R = v(...O);
      return a.muiName && (R.muiName = a.muiName), R;
    };
    return v.withConfig && (b.withConfig = v.withConfig), b;
  };
}
function t2(e, t) {
  return void 0;
}
function n2(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function r2(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
const o2 = Vw();
function vo(e, t, n = !1) {
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
              r[i][u] = vo(s[u], a[u], n);
            }
        }
      } else i === "className" && n && t.className !== void 0 ? r.className = ie(e == null ? void 0 : e.className, t == null ? void 0 : t.className) : i === "style" && n && t.style ? r.style = {
        ...e == null ? void 0 : e.style,
        ...t == null ? void 0 : t.style
      } : r[i] === void 0 && (r[i] = e[i]);
    }
  return r;
}
function jw(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  return !t || !t.components || !t.components[n] || !t.components[n].defaultProps ? r : vo(t.components[n].defaultProps, r);
}
function Yw(e) {
  const {
    props: t,
    name: n,
    defaultTheme: r,
    themeId: o
  } = e;
  let i = Pl(r);
  return o && (i = i[o] || i), jw({
    theme: i,
    name: n,
    props: t
  });
}
const we = typeof window < "u" ? dw : fe;
function i2(e, t, n, r, o) {
  const [i, s] = Le(() => o && n ? n(e).matches : r ? r(e).matches : t);
  return we(() => {
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
const s2 = {
  ...ns
}, Kw = s2.useSyncExternalStore;
function a2(e, t, n, r, o) {
  const i = le(() => t, [t]), s = Se(() => {
    if (o && n)
      return () => n(e).matches;
    if (r !== null) {
      const {
        matches: c
      } = r(e);
      return () => c;
    }
    return i;
  }, [i, e, r, o, n]), [a, l] = Se(() => {
    if (n === null)
      return [i, () => () => {
      }];
    const c = n(e);
    return [() => c.matches, (d) => (c.addEventListener("change", d), () => {
      c.removeEventListener("change", d);
    })];
  }, [i, n, e]);
  return Kw(l, a, s);
}
function Xw(e = {}) {
  const {
    themeId: t
  } = e;
  return function(r, o = {}) {
    let i = Bw();
    i && t && (i = i[t] || i);
    const a = typeof window < "u" && typeof window.matchMedia < "u" ? window.matchMedia : null, {
      defaultMatches: l = !1,
      matchMedia: u,
      ssrMatchMedia: c = null,
      noSsr: d = !1
    } = jw({
      name: "MuiUseMediaQuery",
      props: o,
      theme: i
    }), p = Se(() => u !== void 0 ? u : a === null ? null : a.bind(window), [u, a]);
    let f = typeof r == "function" ? r(i) : r;
    return f = f.replace(/^@media( ?)/m, ""), f.includes("print") && console.warn(["MUI: You have provided a `print` query to the `useMediaQuery` hook.", "Using the print media query to modify print styles can lead to unexpected results.", "Consider using the `displayPrint` field in the `sx` prop instead.", "More information about `displayPrint` on our docs: https://mui.com/system/display/#display-in-print."].join(`
`)), (Kw !== void 0 ? a2 : i2)(f, l, p, c, d);
  };
}
Xw();
function l2(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
function mm(e, t = 0, n = 1) {
  return l2(e, t, n);
}
function u2(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((r) => r + r)), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, o) => o < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function xo(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return xo(u2(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(n))
    throw new Error(zr(9, e));
  let r = e.substring(t + 1, e.length - 1), o;
  if (n === "color") {
    if (r = r.split(" "), o = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(zr(10, o));
  } else
    r = r.split(",");
  return r = r.map((i) => parseFloat(i)), {
    type: n,
    values: r,
    colorSpace: o
  };
}
const c2 = (e) => {
  const t = xo(e);
  return t.values.slice(0, 3).map((n, r) => t.type.includes("hsl") && r !== 0 ? `${n}%` : n).join(" ");
}, ma = (e, t) => {
  try {
    return c2(e);
  } catch {
    return e;
  }
};
function Kd(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: r
  } = e;
  return t.includes("rgb") ? r = r.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.includes("color") ? r = `${n} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function qw(e) {
  e = xo(e);
  const {
    values: t
  } = e, n = t[0], r = t[1] / 100, o = t[2] / 100, i = r * Math.min(o, 1 - o), s = (u, c = (u + n / 30) % 12) => o - i * Math.max(Math.min(c - 3, 9 - c, 1), -1);
  let a = "rgb";
  const l = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (a += "a", l.push(t[3])), Kd({
    type: a,
    values: l
  });
}
function Sh(e) {
  e = xo(e);
  let t = e.type === "hsl" || e.type === "hsla" ? xo(qw(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function d2(e, t) {
  const n = Sh(e), r = Sh(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function fc(e, t) {
  return e = xo(e), t = mm(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Kd(e);
}
function Do(e, t, n) {
  try {
    return fc(e, t);
  } catch {
    return e;
  }
}
function Xd(e, t) {
  if (e = xo(e), t = mm(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return Kd(e);
}
function Ne(e, t, n) {
  try {
    return Xd(e, t);
  } catch {
    return e;
  }
}
function qd(e, t) {
  if (e = xo(e), t = mm(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return Kd(e);
}
function De(e, t, n) {
  try {
    return qd(e, t);
  } catch {
    return e;
  }
}
function f2(e, t = 0.15) {
  return Sh(e) > 0.5 ? Xd(e, t) : qd(e, t);
}
function lu(e, t, n) {
  try {
    return f2(e, t);
  } catch {
    return e;
  }
}
const p2 = /* @__PURE__ */ Bt(), Ls = () => gt(p2) ?? !1, h2 = /* @__PURE__ */ Bt(void 0);
function g2(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  if (!t || !t.components || !t.components[n])
    return r;
  const o = t.components[n];
  return o.defaultProps ? vo(o.defaultProps, r, t.components.mergeClassNameAndStyle) : !o.styleOverrides && !o.variants ? vo(o, r, t.components.mergeClassNameAndStyle) : r;
}
function m2({
  props: e,
  name: t
}) {
  const n = gt(h2);
  return g2({
    props: e,
    name: t,
    theme: {
      components: n
    }
  });
}
let Tv = 0;
function y2(e) {
  const [t, n] = Le(e), r = e || t;
  return fe(() => {
    t == null && (Tv += 1, n(`mui-${Tv}`));
  }, [t]), r;
}
const v2 = {
  ...ns
}, Pv = v2.useId;
function Co(e) {
  if (Pv !== void 0) {
    const t = Pv();
    return e ?? t;
  }
  return y2(e);
}
const Mv = {
  theme: void 0
};
function x2(e) {
  let t, n;
  return function(o) {
    let i = t;
    return (i === void 0 || o.theme !== n) && (Mv.theme = o.theme, i = Ww(e(Mv)), t = i, n = o.theme), i;
  };
}
function C2(e = "") {
  function t(...r) {
    if (!r.length)
      return "";
    const o = r[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...r.slice(1))})` : `, ${o}`;
  }
  return (r, ...o) => `var(--${e ? `${e}-` : ""}${r}${t(...o)})`;
}
const Ev = (e, t, n, r = []) => {
  let o = e;
  t.forEach((i, s) => {
    s === t.length - 1 ? Array.isArray(o) ? o[Number(i)] = n : o && typeof o == "object" && (o[i] = n) : o && typeof o == "object" && (o[i] || (o[i] = r.includes(i) ? [] : {}), o = o[i]);
  });
}, w2 = (e, t, n) => {
  function r(o, i = [], s = []) {
    Object.entries(o).forEach(([a, l]) => {
      (!n || n && !n([...i, a])) && l != null && (typeof l == "object" && Object.keys(l).length > 0 ? r(l, [...i, a], Array.isArray(l) ? [...s, a] : s) : t([...i, a], l, s));
    });
  }
  r(e);
}, S2 = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((r) => e.includes(r)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function Cp(e, t) {
  const {
    prefix: n,
    shouldSkipGeneratingVar: r
  } = t || {}, o = {}, i = {}, s = {};
  return w2(
    e,
    (a, l, u) => {
      if ((typeof l == "string" || typeof l == "number") && (!r || !r(a, l))) {
        const c = `--${n ? `${n}-` : ""}${a.join("-")}`, d = S2(a, l);
        Object.assign(o, {
          [c]: d
        }), Ev(i, a, `var(${c})`, u), Ev(s, a, `var(${c}, ${d})`, u);
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
function b2(e, t = {}) {
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
  } = Cp(u, t);
  let f = p;
  const h = {}, {
    [l]: g,
    ...x
  } = s;
  if (Object.entries(x || {}).forEach(([C, b]) => {
    const {
      vars: S,
      css: k,
      varsWithDefaults: I
    } = Cp(b, t);
    f = Xt(f, I), h[C] = {
      css: k,
      vars: S
    };
  }), g) {
    const {
      css: C,
      vars: b,
      varsWithDefaults: S
    } = Cp(g, t);
    f = Xt(f, S), h[l] = {
      css: C,
      vars: b
    };
  }
  function y(C, b) {
    var k, I;
    let S = o;
    if (o === "class" && (S = ".%s"), o === "data" && (S = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (S = `[${o}="%s"]`), C) {
      if (S === "media")
        return e.defaultColorScheme === C ? ":root" : {
          [`@media (prefers-color-scheme: ${((I = (k = s[C]) == null ? void 0 : k.palette) == null ? void 0 : I.mode) || C})`]: {
            ":root": b
          }
        };
      if (S)
        return e.defaultColorScheme === C ? `:root, ${S.replace("%s", String(C))}` : S.replace("%s", String(C));
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
        vars: b
      }]) => {
        C = Xt(C, b);
      }), C;
    },
    generateStyleSheets: () => {
      var $, O;
      const C = [], b = e.defaultColorScheme || "light";
      function S(R, w) {
        Object.keys(w).length && C.push(typeof R == "string" ? {
          [R]: {
            ...w
          }
        } : R);
      }
      S(n(void 0, {
        ...d
      }), d);
      const {
        [b]: k,
        ...I
      } = h;
      if (k) {
        const {
          css: R
        } = k, w = (O = ($ = s[b]) == null ? void 0 : $.palette) == null ? void 0 : O.mode, E = !r && w ? {
          colorScheme: w,
          ...R
        } : {
          ...R
        };
        S(n(b, {
          ...E
        }), E);
      }
      return Object.entries(I).forEach(([R, {
        css: w
      }]) => {
        var P, _;
        const E = (_ = (P = s[R]) == null ? void 0 : P.palette) == null ? void 0 : _.mode, T = !r && E ? {
          colorScheme: E,
          ...w
        } : {
          ...w
        };
        S(n(R, {
          ...T
        }), T);
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
function k2(e) {
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
function Ku(e, t) {
  var n, r, o;
  return /* @__PURE__ */ Zn(e) && t.indexOf(
    // For server components `muiName` is available in element.type._payload.value.muiName
    // relevant info - https://github.com/react/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    e.type.muiName ?? ((o = (r = (n = e.type) == null ? void 0 : n._payload) == null ? void 0 : r.value) == null ? void 0 : o.muiName)
  ) !== -1;
}
const I2 = (e, t) => e.filter((n) => t.includes(n)), Ns = (e, t, n) => {
  const r = e.keys[0];
  Array.isArray(t) ? t.forEach((o, i) => {
    n((s, a) => {
      i <= e.keys.length - 1 && (i === 0 ? Object.assign(s, a) : s[e.up(e.keys[i])] = a);
    }, o);
  }) : t && typeof t == "object" ? (Object.keys(t).length > e.keys.length ? e.keys : I2(e.keys, Object.keys(t))).forEach((i) => {
    if (e.keys.includes(i)) {
      const s = t[i];
      s !== void 0 && n((a, l) => {
        r === i ? Object.assign(a, l) : a[e.up(i)] = l;
      }, s);
    }
  }) : (typeof t == "number" || typeof t == "string") && n((o, i) => {
    Object.assign(o, i);
  }, t);
};
function pc(e) {
  return `--Grid-${e}Spacing`;
}
function Qd(e) {
  return `--Grid-parent-${e}Spacing`;
}
const Av = "--Grid-columns", Yi = "--Grid-parent-columns", T2 = ({
  theme: e,
  ownerState: t
}) => {
  const n = {};
  return Ns(e.breakpoints, t.size, (r, o) => {
    let i = {};
    o === "grow" && (i = {
      flexBasis: 0,
      flexGrow: 1,
      maxWidth: "100%"
    }), o === "auto" && (i = {
      flexBasis: "auto",
      flexGrow: 0,
      flexShrink: 0,
      maxWidth: "none",
      width: "auto"
    }), typeof o == "number" && (i = {
      flexGrow: 0,
      flexBasis: "auto",
      width: `calc(100% * ${o} / var(${Yi}) - (var(${Yi}) - ${o}) * (var(${Qd("column")}) / var(${Yi})))`
    }), r(n, i);
  }), n;
}, P2 = ({
  theme: e,
  ownerState: t
}) => {
  const n = {};
  return Ns(e.breakpoints, t.offset, (r, o) => {
    let i = {};
    o === "auto" && (i = {
      marginLeft: "auto"
    }), typeof o == "number" && (i = {
      marginLeft: o === 0 ? "0px" : `calc(100% * ${o} / var(${Yi}) + var(${Qd("column")}) * ${o} / var(${Yi}))`
    }), r(n, i);
  }), n;
}, M2 = ({
  theme: e,
  ownerState: t
}) => {
  if (!t.container)
    return {};
  const n = {
    [Av]: 12
  };
  return Ns(e.breakpoints, t.columns, (r, o) => {
    const i = o ?? 12;
    r(n, {
      [Av]: i,
      "> *": {
        [Yi]: i
      }
    });
  }), n;
}, E2 = ({
  theme: e,
  ownerState: t
}) => {
  if (!t.container)
    return {};
  const n = {};
  return Ns(e.breakpoints, t.rowSpacing, (r, o) => {
    var s;
    const i = typeof o == "string" ? o : (s = e.spacing) == null ? void 0 : s.call(e, o);
    r(n, {
      [pc("row")]: i,
      "> *": {
        [Qd("row")]: i
      }
    });
  }), n;
}, A2 = ({
  theme: e,
  ownerState: t
}) => {
  if (!t.container)
    return {};
  const n = {};
  return Ns(e.breakpoints, t.columnSpacing, (r, o) => {
    var s;
    const i = typeof o == "string" ? o : (s = e.spacing) == null ? void 0 : s.call(e, o);
    r(n, {
      [pc("column")]: i,
      "> *": {
        [Qd("column")]: i
      }
    });
  }), n;
}, R2 = ({
  theme: e,
  ownerState: t
}) => {
  if (!t.container)
    return {};
  const n = {};
  return Ns(e.breakpoints, t.direction, (r, o) => {
    r(n, {
      flexDirection: o
    });
  }), n;
}, _2 = ({
  ownerState: e
}) => ({
  minWidth: 0,
  boxSizing: "border-box",
  ...e.container && {
    display: "flex",
    flexWrap: "wrap",
    ...e.wrap && e.wrap !== "wrap" && {
      flexWrap: e.wrap
    },
    gap: `var(${pc("row")}) var(${pc("column")})`
  }
}), O2 = (e) => {
  const t = [];
  return Object.entries(e).forEach(([n, r]) => {
    r !== !1 && r !== void 0 && t.push(`grid-${n}-${String(r)}`);
  }), t;
}, $2 = (e, t = "xs") => {
  function n(r) {
    return r === void 0 ? !1 : typeof r == "string" && !Number.isNaN(Number(r)) || typeof r == "number" && r > 0;
  }
  if (n(e))
    return [`spacing-${t}-${String(e)}`];
  if (typeof e == "object" && !Array.isArray(e)) {
    const r = [];
    return Object.entries(e).forEach(([o, i]) => {
      n(i) && r.push(`spacing-${o}-${String(i)}`);
    }), r;
  }
  return [];
}, L2 = (e) => e === void 0 ? [] : typeof e == "object" ? Object.entries(e).map(([t, n]) => `direction-${t}-${n}`) : [`direction-xs-${String(e)}`], N2 = Yd(), D2 = o2("div", {
  name: "MuiGrid",
  slot: "Root"
});
function z2(e) {
  return Yw({
    props: e,
    name: "MuiGrid",
    defaultTheme: N2
  });
}
function F2(e = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent: t = D2,
    useThemeProps: n = z2,
    useTheme: r = Pl,
    componentName: o = "MuiGrid"
  } = e, i = (u, c) => {
    const {
      container: d,
      direction: p,
      spacing: f,
      wrap: h,
      size: g
    } = u, x = {
      root: ["root", d && "container", h !== "wrap" && `wrap-xs-${String(h)}`, ...L2(p), ...O2(g), ...d ? $2(f, c.breakpoints.keys[0]) : []]
    };
    return ve(x, (y) => be(o, y), {});
  };
  function s(u, c, d = () => !0) {
    const p = {};
    return u === null || (Array.isArray(u) ? u.forEach((f, h) => {
      f !== null && d(f) && c.keys[h] && (p[c.keys[h]] = f);
    }) : typeof u == "object" ? Object.keys(u).forEach((f) => {
      const h = u[f];
      h != null && d(h) && (p[f] = h);
    }) : p[c.keys[0]] = u), p;
  }
  const a = t(M2, A2, E2, T2, R2, _2, P2), l = /* @__PURE__ */ ce(function(c, d) {
    const p = r(), h = n(c), {
      className: g,
      children: x,
      columns: y = 12,
      container: m = !1,
      component: v = "div",
      direction: C = "row",
      wrap: b = "wrap",
      size: S = {},
      offset: k = {},
      spacing: I = 0,
      rowSpacing: $ = I,
      columnSpacing: O = I,
      unstable_level: R = 0,
      ...w
    } = h, E = s(S, p.breakpoints, (U) => U !== !1), T = s(k, p.breakpoints), P = c.columns ?? (R ? void 0 : y), _ = c.spacing ?? (R ? void 0 : I), N = c.rowSpacing ?? c.spacing ?? (R ? void 0 : $), A = c.columnSpacing ?? c.spacing ?? (R ? void 0 : O), D = {
      ...h,
      level: R,
      columns: P,
      container: m,
      direction: C,
      wrap: b,
      spacing: _,
      rowSpacing: N,
      columnSpacing: A,
      size: E,
      offset: T
    }, z = i(D, p);
    return /* @__PURE__ */ M(a, {
      ref: d,
      as: v,
      ownerState: D,
      className: ie(z.root, g),
      ...w,
      children: rs.map(x, (U) => {
        var W;
        return /* @__PURE__ */ Zn(U) && Ku(U, ["Grid"]) && m && U.props.container ? /* @__PURE__ */ bo(U, {
          unstable_level: ((W = U.props) == null ? void 0 : W.unstable_level) ?? R + 1
        }) : U;
      })
    });
  });
  return l.muiName = "Grid", l;
}
const ja = {
  black: "#000",
  white: "#fff"
}, B2 = {
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
}, Ci = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, wi = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, Xs = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, Si = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, bi = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, ki = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
};
function Qw() {
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
      paper: ja.white,
      default: ja.white
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
const Zw = Qw();
function Jw() {
  return {
    text: {
      primary: ja.white,
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
      active: ja.white,
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
const bh = Jw();
function Rv(e, t, n, r) {
  const o = r.light || r, i = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = qd(e.main, o) : t === "dark" && (e.dark = Xd(e.main, i)));
}
function _v(e, t, n, r, o) {
  const i = o.light || o, s = o.dark || o * 1.5;
  t[n] || (t.hasOwnProperty(r) ? t[n] = t[r] : n === "light" ? t.light = `color-mix(in ${e}, ${t.main}, #fff ${(i * 100).toFixed(0)}%)` : n === "dark" && (t.dark = `color-mix(in ${e}, ${t.main}, #000 ${(s * 100).toFixed(0)}%)`));
}
function U2(e = "light") {
  return e === "dark" ? {
    main: Si[200],
    light: Si[50],
    dark: Si[400]
  } : {
    main: Si[700],
    light: Si[400],
    dark: Si[800]
  };
}
function H2(e = "light") {
  return e === "dark" ? {
    main: Ci[200],
    light: Ci[50],
    dark: Ci[400]
  } : {
    main: Ci[500],
    light: Ci[300],
    dark: Ci[700]
  };
}
function W2(e = "light") {
  return e === "dark" ? {
    main: wi[500],
    light: wi[300],
    dark: wi[700]
  } : {
    main: wi[700],
    light: wi[400],
    dark: wi[800]
  };
}
function G2(e = "light") {
  return e === "dark" ? {
    main: bi[400],
    light: bi[300],
    dark: bi[700]
  } : {
    main: bi[700],
    light: bi[500],
    dark: bi[900]
  };
}
function V2(e = "light") {
  return e === "dark" ? {
    main: ki[400],
    light: ki[300],
    dark: ki[700]
  } : {
    main: ki[800],
    light: ki[500],
    dark: ki[900]
  };
}
function j2(e = "light") {
  return e === "dark" ? {
    main: Xs[400],
    light: Xs[300],
    dark: Xs[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Xs[500],
    dark: Xs[900]
  };
}
function Y2(e) {
  return `oklch(from ${e} var(--__l) 0 h / var(--__a))`;
}
function ym(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: r = 0.2,
    colorSpace: o,
    ...i
  } = e, s = e.primary || U2(t), a = e.secondary || H2(t), l = e.error || W2(t), u = e.info || G2(t), c = e.success || V2(t), d = e.warning || j2(t);
  function p(x) {
    return o ? Y2(x) : d2(x, bh.text.primary) >= n ? bh.text.primary : Zw.text.primary;
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
      throw new Error(zr(11, y ? ` (${y})` : "", m));
    if (typeof x.main != "string")
      throw new Error(zr(12, y ? ` (${y})` : "", JSON.stringify(x.main)));
    return o ? (_v(o, x, "light", v, r), _v(o, x, "dark", C, r)) : (Rv(x, "light", v, r), Rv(x, "dark", C, r)), x.contrastText || (x.contrastText = p(x.main)), x;
  };
  let h;
  return t === "light" ? h = Qw() : t === "dark" && (h = Jw()), Xt({
    // A collection of common colors.
    common: {
      ...ja
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
    grey: B2,
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
function K2(e) {
  const t = {};
  return Object.entries(e).forEach((r) => {
    const [o, i] = r;
    typeof i == "object" && (t[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), t;
}
function X2(e, t) {
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
function q2(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Ov = {
  textTransform: "uppercase"
}, $v = '"Roboto", "Helvetica", "Arial", sans-serif';
function Q2(e, t) {
  const {
    fontFamily: n = $v,
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
    ...n === $v ? {
      letterSpacing: `${q2(v / y)}em`
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
    button: h(s, 14, 1.75, 0.4, Ov),
    caption: h(i, 12, 1.66, 0.4),
    overline: h(i, 12, 2.66, 1, Ov),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Xt({
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
const Z2 = 0.2, J2 = 0.14, eR = 0.12;
function Ke(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Z2})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${J2})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${eR})`].join(",");
}
const tR = ["none", Ke(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Ke(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Ke(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Ke(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Ke(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Ke(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Ke(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Ke(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Ke(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Ke(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Ke(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Ke(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Ke(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Ke(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Ke(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Ke(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Ke(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Ke(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Ke(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Ke(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Ke(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Ke(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Ke(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Ke(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], nR = ["all"], rR = {}, oR = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, iR = {
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
function Lv(e) {
  return `${Math.round(e)}ms`;
}
function sR(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function aR(e) {
  const t = {
    ...e
  };
  delete t.reducedMotion;
  const n = {
    ...oR,
    ...t.easing
  }, r = {
    ...iR,
    ...t.duration
  }, o = (s = nR, a = rR) => {
    const {
      duration: l = r.standard,
      easing: u = n.easeInOut,
      delay: c = 0,
      ...d
    } = a;
    return (Array.isArray(s) ? s : [s]).map((p) => `${p} ${typeof l == "string" ? l : Lv(l)} ${u} ${typeof c == "string" ? c : Lv(c)}`).join(",");
  }, i = t.create ?? o;
  return {
    getAutoHeightDuration: sR,
    create: i,
    ...t,
    easing: n,
    duration: r
  };
}
const lR = {};
function uR(e = lR) {
  return {
    reducedMotion: "never",
    ...e
  };
}
const cR = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function dR(e) {
  return Mr(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function eS(e = {}) {
  const t = {
    ...e
  };
  function n(r) {
    const o = Object.entries(r);
    for (let i = 0; i < o.length; i++) {
      const [s, a] = o[i];
      !dR(a) || s.startsWith("unstable_") || s.startsWith("internal_") ? delete r[s] : Mr(a) && (r[s] = {
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
function Nv(e) {
  return typeof e == "number" ? `${(e * 100).toFixed(0)}%` : `calc((${e}) * 100%)`;
}
const fR = (e) => {
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
function pR(e) {
  Object.assign(e, {
    alpha(t, n) {
      const r = this || e;
      return r.colorSpace ? `oklch(from ${t} l c h / ${typeof n == "string" ? `calc(${n})` : n})` : r.vars ? `rgba(${t.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, "var(--$1Channel)")} / ${typeof n == "string" ? `calc(${n})` : n})` : fc(t, fR(n));
    },
    lighten(t, n) {
      const r = this || e;
      return r.colorSpace ? `color-mix(in ${r.colorSpace}, ${t}, #fff ${Nv(n)})` : qd(t, n);
    },
    darken(t, n) {
      const r = this || e;
      return r.colorSpace ? `color-mix(in ${r.colorSpace}, ${t}, #000 ${Nv(n)})` : Xd(t, n);
    }
  });
}
function kh(e = {}, ...t) {
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
    throw new Error(zr(22));
  const p = ym({
    ...i,
    colorSpace: c
  }), f = Yd(e);
  let h = Xt(f, {
    mixins: X2(f.breakpoints, r),
    palette: p,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: tR.slice(),
    typography: Q2(p, l),
    motion: uR(s),
    transitions: aR(a),
    zIndex: {
      ...cR
    }
  });
  return h = Xt(h, d), h = t.reduce((g, x) => Xt(g, x), h), delete h.transitions.reducedMotion, h.unstable_sxConfig = {
    ...jd,
    ...d == null ? void 0 : d.unstable_sxConfig
  }, h.unstable_sx = function(x) {
    return ss({
      sx: x,
      theme: this
    });
  }, h.toRuntimeSource = eS, pR(h), h;
}
function Ih(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const hR = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const n = Ih(t);
  return `linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`;
});
function tS(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function nS(e) {
  return e === "dark" ? hR : [];
}
function gR(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: n,
    overlays: r,
    colorSpace: o,
    ...i
  } = e, s = ym({
    ...t,
    colorSpace: o
  });
  return {
    palette: s,
    opacity: {
      ...tS(s.mode),
      ...n
    },
    overlays: r || nS(s.mode),
    ...i
  };
}
function mR(e) {
  var t;
  return e[0] === "motion" || !!e[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const yR = (e) => [...[...Array(25)].map((t, n) => `--${e ? `${e}-` : ""}overlays-${n}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], vR = (e) => (t, n) => {
  const r = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const s = {};
      return yR(e.cssVarPrefix).forEach((a) => {
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
function xR(e, t) {
  t.forEach((n) => {
    e[n] || (e[n] = {});
  });
}
function F(e, t, n) {
  !e[t] && n && (e[t] = n);
}
function ya(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : qw(e);
}
function kr(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = ma(ya(e[t])));
}
function CR(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const rr = (e) => {
  try {
    return e();
  } catch {
  }
}, wR = (e = "mui") => C2(e);
function wp(e, t, n, r, o) {
  if (!n)
    return;
  n = n === !0 ? {} : n;
  const i = o === "dark" ? "dark" : "light";
  if (!r) {
    t[o] = gR({
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
  } = kh({
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
      ...tS(i),
      ...n == null ? void 0 : n.opacity
    },
    overlays: (n == null ? void 0 : n.overlays) || nS(i)
  }, a;
}
function SR(e = {}, ...t) {
  const {
    colorSchemes: n = {
      light: !0
    },
    defaultColorScheme: r,
    disableCssColorScheme: o = !1,
    cssVarPrefix: i = "mui",
    nativeColor: s = !1,
    shouldSkipGeneratingVar: a = mR,
    colorSchemeSelector: l = n.light && n.dark ? "media" : void 0,
    rootSelector: u = ":root",
    ...c
  } = e, d = Object.keys(n)[0], p = r || (n.light && d !== "light" ? "light" : d), f = wR(i), {
    [p]: h,
    light: g,
    dark: x,
    ...y
  } = n, m = {
    ...y
  };
  let v = h;
  if ((p === "dark" && !("dark" in n) || p === "light" && !("light" in n)) && (v = !0), !v)
    throw new Error(zr(21, p));
  let C;
  s && (C = "oklch");
  const b = wp(C, m, v, c, p);
  g && !m.light && wp(C, m, g, void 0, "light"), x && !m.dark && wp(C, m, x, void 0, "dark");
  let S = {
    defaultColorScheme: p,
    ...b,
    cssVarPrefix: i,
    colorSchemeSelector: l,
    rootSelector: u,
    getCssVar: f,
    colorSchemes: m,
    font: {
      ...K2(b.typography),
      ...b.font
    },
    spacing: CR(c.spacing)
  };
  Object.keys(S.colorSchemes).forEach((R) => {
    const w = S.colorSchemes[R].palette, E = (P) => {
      const _ = P.split("-"), N = _[1], A = _[2];
      return f(P, w[N][A]);
    };
    w.mode === "light" && (F(w.common, "background", "#fff"), F(w.common, "onBackground", "#000")), w.mode === "dark" && (F(w.common, "background", "#000"), F(w.common, "onBackground", "#fff"));
    function T(P, _, N) {
      if (C) {
        let A;
        return P === Do && (A = `transparent ${((1 - N) * 100).toFixed(0)}%`), P === Ne && (A = `#000 ${(N * 100).toFixed(0)}%`), P === De && (A = `#fff ${(N * 100).toFixed(0)}%`), `color-mix(in ${C}, ${_}, ${A})`;
      }
      return P(_, N);
    }
    if (xR(w, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), w.mode === "light") {
      F(w.Alert, "errorColor", T(Ne, s ? f("palette-error-light") : w.error.light, 0.6)), F(w.Alert, "infoColor", T(Ne, s ? f("palette-info-light") : w.info.light, 0.6)), F(w.Alert, "successColor", T(Ne, s ? f("palette-success-light") : w.success.light, 0.6)), F(w.Alert, "warningColor", T(Ne, s ? f("palette-warning-light") : w.warning.light, 0.6)), F(w.Alert, "errorFilledBg", E("palette-error-main")), F(w.Alert, "infoFilledBg", E("palette-info-main")), F(w.Alert, "successFilledBg", E("palette-success-main")), F(w.Alert, "warningFilledBg", E("palette-warning-main")), F(w.Alert, "errorFilledColor", rr(() => w.getContrastText(w.error.main))), F(w.Alert, "infoFilledColor", rr(() => w.getContrastText(w.info.main))), F(w.Alert, "successFilledColor", rr(() => w.getContrastText(w.success.main))), F(w.Alert, "warningFilledColor", rr(() => w.getContrastText(w.warning.main))), F(w.Alert, "errorStandardBg", T(De, s ? f("palette-error-light") : w.error.light, 0.9)), F(w.Alert, "infoStandardBg", T(De, s ? f("palette-info-light") : w.info.light, 0.9)), F(w.Alert, "successStandardBg", T(De, s ? f("palette-success-light") : w.success.light, 0.9)), F(w.Alert, "warningStandardBg", T(De, s ? f("palette-warning-light") : w.warning.light, 0.9)), F(w.Alert, "errorIconColor", E("palette-error-main")), F(w.Alert, "infoIconColor", E("palette-info-main")), F(w.Alert, "successIconColor", E("palette-success-main")), F(w.Alert, "warningIconColor", E("palette-warning-main")), F(w.AppBar, "defaultBg", E("palette-grey-100")), F(w.Avatar, "defaultBg", E("palette-grey-400")), F(w.Button, "inheritContainedBg", E("palette-grey-300")), F(w.Button, "inheritContainedHoverBg", E("palette-grey-A100")), F(w.Chip, "defaultBorder", E("palette-grey-400")), F(w.Chip, "defaultAvatarColor", E("palette-grey-700")), F(w.Chip, "defaultIconColor", E("palette-grey-700")), F(w.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), F(w.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), F(w.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), F(w.LinearProgress, "primaryBg", T(De, s ? f("palette-primary-main") : w.primary.main, 0.62)), F(w.LinearProgress, "secondaryBg", T(De, s ? f("palette-secondary-main") : w.secondary.main, 0.62)), F(w.LinearProgress, "errorBg", T(De, s ? f("palette-error-main") : w.error.main, 0.62)), F(w.LinearProgress, "infoBg", T(De, s ? f("palette-info-main") : w.info.main, 0.62)), F(w.LinearProgress, "successBg", T(De, s ? f("palette-success-main") : w.success.main, 0.62)), F(w.LinearProgress, "warningBg", T(De, s ? f("palette-warning-light") : w.warning.main, 0.62)), F(w.Skeleton, "bg", C ? T(Do, s ? f("palette-text-primary") : w.text.primary, 0.11) : `rgba(${E("palette-text-primaryChannel")} / 0.11)`), F(w.Slider, "primaryTrack", T(De, s ? f("palette-primary-main") : w.primary.main, 0.62)), F(w.Slider, "secondaryTrack", T(De, s ? f("palette-secondary-main") : w.secondary.main, 0.62)), F(w.Slider, "errorTrack", T(De, s ? f("palette-error-main") : w.error.main, 0.62)), F(w.Slider, "infoTrack", T(De, s ? f("palette-info-main") : w.info.main, 0.62)), F(w.Slider, "successTrack", T(De, s ? f("palette-success-main") : w.success.main, 0.62)), F(w.Slider, "warningTrack", T(De, s ? f("palette-warning-main") : w.warning.main, 0.62));
      const P = C ? T(Ne, s ? f("palette-background-default") : w.background.default, 0.6825) : lu(w.background.default, 0.8);
      F(w.SnackbarContent, "bg", P), F(w.SnackbarContent, "color", rr(() => C ? bh.text.primary : w.getContrastText(P))), F(w.SpeedDialAction, "fabHoverBg", lu(w.background.paper, 0.15)), F(w.StepConnector, "border", E("palette-grey-400")), F(w.StepContent, "border", E("palette-grey-400")), F(w.Switch, "defaultColor", E("palette-common-white")), F(w.Switch, "defaultDisabledColor", E("palette-grey-100")), F(w.Switch, "primaryDisabledColor", T(De, s ? f("palette-primary-main") : w.primary.main, 0.62)), F(w.Switch, "secondaryDisabledColor", T(De, s ? f("palette-secondary-main") : w.secondary.main, 0.62)), F(w.Switch, "errorDisabledColor", T(De, s ? f("palette-error-main") : w.error.main, 0.62)), F(w.Switch, "infoDisabledColor", T(De, s ? f("palette-info-main") : w.info.main, 0.62)), F(w.Switch, "successDisabledColor", T(De, s ? f("palette-success-main") : w.success.main, 0.62)), F(w.Switch, "warningDisabledColor", T(De, s ? f("palette-warning-main") : w.warning.main, 0.62)), F(w.TableCell, "border", T(De, Do(s ? f("palette-divider") : w.divider, 1), 0.88)), F(w.Tooltip, "bg", T(Do, s ? f("palette-grey-700") : w.grey[700], 0.92));
    }
    if (w.mode === "dark") {
      F(w.Alert, "errorColor", T(De, s ? f("palette-error-light") : w.error.light, 0.6)), F(w.Alert, "infoColor", T(De, s ? f("palette-info-light") : w.info.light, 0.6)), F(w.Alert, "successColor", T(De, s ? f("palette-success-light") : w.success.light, 0.6)), F(w.Alert, "warningColor", T(De, s ? f("palette-warning-light") : w.warning.light, 0.6)), F(w.Alert, "errorFilledBg", E("palette-error-dark")), F(w.Alert, "infoFilledBg", E("palette-info-dark")), F(w.Alert, "successFilledBg", E("palette-success-dark")), F(w.Alert, "warningFilledBg", E("palette-warning-dark")), F(w.Alert, "errorFilledColor", rr(() => w.getContrastText(w.error.dark))), F(w.Alert, "infoFilledColor", rr(() => w.getContrastText(w.info.dark))), F(w.Alert, "successFilledColor", rr(() => w.getContrastText(w.success.dark))), F(w.Alert, "warningFilledColor", rr(() => w.getContrastText(w.warning.dark))), F(w.Alert, "errorStandardBg", T(Ne, s ? f("palette-error-light") : w.error.light, 0.9)), F(w.Alert, "infoStandardBg", T(Ne, s ? f("palette-info-light") : w.info.light, 0.9)), F(w.Alert, "successStandardBg", T(Ne, s ? f("palette-success-light") : w.success.light, 0.9)), F(w.Alert, "warningStandardBg", T(Ne, s ? f("palette-warning-light") : w.warning.light, 0.9)), F(w.Alert, "errorIconColor", E("palette-error-main")), F(w.Alert, "infoIconColor", E("palette-info-main")), F(w.Alert, "successIconColor", E("palette-success-main")), F(w.Alert, "warningIconColor", E("palette-warning-main")), F(w.AppBar, "defaultBg", E("palette-grey-900")), F(w.AppBar, "darkBg", E("palette-background-paper")), F(w.AppBar, "darkColor", E("palette-text-primary")), F(w.Avatar, "defaultBg", E("palette-grey-600")), F(w.Button, "inheritContainedBg", E("palette-grey-800")), F(w.Button, "inheritContainedHoverBg", E("palette-grey-700")), F(w.Chip, "defaultBorder", E("palette-grey-700")), F(w.Chip, "defaultAvatarColor", E("palette-grey-300")), F(w.Chip, "defaultIconColor", E("palette-grey-300")), F(w.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), F(w.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), F(w.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), F(w.LinearProgress, "primaryBg", T(Ne, s ? f("palette-primary-main") : w.primary.main, 0.5)), F(w.LinearProgress, "secondaryBg", T(Ne, s ? f("palette-secondary-main") : w.secondary.main, 0.5)), F(w.LinearProgress, "errorBg", T(Ne, s ? f("palette-error-main") : w.error.main, 0.5)), F(w.LinearProgress, "infoBg", T(Ne, s ? f("palette-info-main") : w.info.main, 0.5)), F(w.LinearProgress, "successBg", T(Ne, s ? f("palette-success-main") : w.success.main, 0.5)), F(w.LinearProgress, "warningBg", T(Ne, s ? f("palette-warning-main") : w.warning.main, 0.5)), F(w.Skeleton, "bg", C ? T(Do, s ? f("palette-text-primary") : w.text.primary, 0.13) : `rgba(${E("palette-text-primaryChannel")} / 0.13)`), F(w.Slider, "primaryTrack", T(Ne, s ? f("palette-primary-main") : w.primary.main, 0.5)), F(w.Slider, "secondaryTrack", T(Ne, s ? f("palette-secondary-main") : w.secondary.main, 0.5)), F(w.Slider, "errorTrack", T(Ne, s ? f("palette-error-main") : w.error.main, 0.5)), F(w.Slider, "infoTrack", T(Ne, s ? f("palette-info-main") : w.info.main, 0.5)), F(w.Slider, "successTrack", T(Ne, s ? f("palette-success-main") : w.success.main, 0.5)), F(w.Slider, "warningTrack", T(Ne, s ? f("palette-warning-light") : w.warning.main, 0.5));
      const P = C ? T(De, s ? f("palette-background-default") : w.background.default, 0.985) : lu(w.background.default, 0.98);
      F(w.SnackbarContent, "bg", P), F(w.SnackbarContent, "color", rr(() => C ? Zw.text.primary : w.getContrastText(P))), F(w.SpeedDialAction, "fabHoverBg", lu(w.background.paper, 0.15)), F(w.StepConnector, "border", E("palette-grey-600")), F(w.StepContent, "border", E("palette-grey-600")), F(w.Switch, "defaultColor", E("palette-grey-300")), F(w.Switch, "defaultDisabledColor", E("palette-grey-600")), F(w.Switch, "primaryDisabledColor", T(Ne, s ? f("palette-primary-main") : w.primary.main, 0.55)), F(w.Switch, "secondaryDisabledColor", T(Ne, s ? f("palette-secondary-main") : w.secondary.main, 0.55)), F(w.Switch, "errorDisabledColor", T(Ne, s ? f("palette-error-main") : w.error.main, 0.55)), F(w.Switch, "infoDisabledColor", T(Ne, s ? f("palette-info-main") : w.info.main, 0.55)), F(w.Switch, "successDisabledColor", T(Ne, s ? f("palette-success-main") : w.success.main, 0.55)), F(w.Switch, "warningDisabledColor", T(Ne, s ? f("palette-warning-light") : w.warning.main, 0.55)), F(w.TableCell, "border", T(Ne, Do(s ? f("palette-divider") : w.divider, 1), 0.68)), F(w.Tooltip, "bg", T(Do, s ? f("palette-grey-700") : w.grey[700], 0.92));
    }
    s || (kr(w.background, "default"), kr(w.background, "paper"), kr(w.common, "background"), kr(w.common, "onBackground"), kr(w, "divider")), Object.keys(w).forEach((P) => {
      const _ = w[P];
      P !== "tonalOffset" && !s && _ && typeof _ == "object" && (_.main && F(w[P], "mainChannel", ma(ya(_.main))), _.light && F(w[P], "lightChannel", ma(ya(_.light))), _.dark && F(w[P], "darkChannel", ma(ya(_.dark))), _.contrastText && F(w[P], "contrastTextChannel", ma(ya(_.contrastText))), P === "text" && (kr(w[P], "primary"), kr(w[P], "secondary")), P === "action" && (_.active && kr(w[P], "active"), _.selected && kr(w[P], "selected")));
    });
  }), S = t.reduce((R, w) => Xt(R, w), S);
  const k = {
    prefix: i,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: a,
    getSelector: vR(S),
    enableContrastVars: s
  }, {
    vars: I,
    generateThemeVars: $,
    generateStyleSheets: O
  } = b2(S, k);
  return S.vars = I, Object.entries(S.colorSchemes[S.defaultColorScheme]).forEach(([R, w]) => {
    S[R] = w;
  }), S.generateThemeVars = $, S.generateStyleSheets = O, S.generateSpacing = function() {
    return Fw(c.spacing, fm(this));
  }, S.getColorSchemeSelector = k2(l), S.spacing = S.generateSpacing(), S.shouldSkipGeneratingVar = a, S.unstable_sxConfig = {
    ...jd,
    ...c == null ? void 0 : c.unstable_sxConfig
  }, S.unstable_sx = function(w) {
    return ss({
      sx: w,
      theme: this
    });
  }, S.internal_cache = {}, S.toRuntimeSource = eS, S;
}
function Dv(e, t, n) {
  e.colorSchemes && n && (e.colorSchemes[t] = {
    ...n !== !0 && n,
    palette: ym({
      ...n === !0 ? {} : n.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function rS(e = {}, ...t) {
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
      return kh(e, ...t);
    let c = n;
    "palette" in e || u[a] && (u[a] !== !0 ? c = u[a].palette : a === "dark" && (c = {
      mode: "dark"
    }));
    const d = kh({
      ...e,
      palette: c
    }, ...t);
    return d.defaultColorScheme = a, d.colorSchemes = u, d.palette.mode === "light" && (d.colorSchemes.light = {
      ...u.light !== !0 && u.light,
      palette: d.palette
    }, Dv(d, "dark", u.dark)), d.palette.mode === "dark" && (d.colorSchemes.dark = {
      ...u.dark !== !0 && u.dark,
      palette: d.palette
    }, Dv(d, "light", u.light)), d;
  }
  return !n && !("light" in u) && a === "light" && (u.light = !0), SR({
    ...s,
    colorSchemes: u,
    defaultColorScheme: a,
    ...typeof r != "boolean" && r
  }, ...t);
}
function hc(e) {
  return typeof e == "string";
}
function oS(e, t = 166) {
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
function ot(...e) {
  const t = V(void 0), n = le((r) => {
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
  return Se(() => e.every((r) => r == null) ? null : (r) => {
    t.current && (t.current(), t.current = void 0), r != null && (t.current = n(r));
  }, e);
}
function ge(e) {
  const t = V(e);
  return we(() => {
    t.current = e;
  }), V((...n) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...n)
  )).current;
}
function St(e) {
  return e && e.ownerDocument || document;
}
function vr(e) {
  return St(e).defaultView || window;
}
function uu(e) {
  return parseInt(e, 10) || 0;
}
const bR = {
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
function kR(e) {
  for (const t in e)
    return !1;
  return !0;
}
function zv(e) {
  return kR(e) || e.outerHeightStyle === 0 && !e.overflowing;
}
const IR = /* @__PURE__ */ ce(function(t, n) {
  const {
    onChange: r,
    maxRows: o,
    minRows: i = 1,
    style: s,
    value: a,
    ...l
  } = t, {
    current: u
  } = V(a != null), c = V(null), d = ot(n, c), p = V(null), f = V(null), h = le(() => {
    const v = c.current, C = f.current;
    if (!v || !C)
      return;
    const S = vr(v).getComputedStyle(v);
    if (S.width === "0px")
      return {
        outerHeightStyle: 0,
        overflowing: !1
      };
    C.style.width = S.width, C.value = v.value || t.placeholder || "x", C.value.slice(-1) === `
` && (C.value += " ");
    const k = S.boxSizing, I = uu(S.paddingBottom) + uu(S.paddingTop), $ = uu(S.borderBottomWidth) + uu(S.borderTopWidth), O = C.scrollHeight;
    C.value = "x";
    const R = C.scrollHeight;
    let w = O;
    i && (w = Math.max(Number(i) * R, w)), o && (w = Math.min(Number(o) * R, w)), w = Math.max(w, R);
    const E = w + (k === "border-box" ? I + $ : 0), T = Math.abs(w - O) <= 1;
    return {
      outerHeightStyle: E,
      overflowing: T
    };
  }, [o, i, t.placeholder]), g = ge(() => {
    const v = c.current, C = h();
    if (!v || !C || zv(C))
      return !1;
    const b = C.outerHeightStyle;
    return p.current != null && p.current !== b;
  }), x = le(() => {
    const v = c.current, C = h();
    if (!v || !C || zv(C))
      return;
    const b = C.outerHeightStyle;
    p.current !== b && (p.current = b, v.style.height = `${b}px`), v.style.overflow = C.overflowing ? "hidden" : "";
  }, [h]), y = V(-1);
  return we(() => {
    const v = oS(x), C = c == null ? void 0 : c.current;
    if (!C)
      return;
    const b = vr(C);
    b.addEventListener("resize", v);
    let S;
    return typeof ResizeObserver < "u" && (S = new ResizeObserver(() => {
      g() && (S.unobserve(C), cancelAnimationFrame(y.current), x(), y.current = requestAnimationFrame(() => {
        S.observe(C);
      }));
    }), S.observe(C)), () => {
      v.clear(), cancelAnimationFrame(y.current), b.removeEventListener("resize", v), S && S.disconnect();
    };
  }, [h, x, g]), we(() => {
    x();
  }), /* @__PURE__ */ oe(He, {
    children: [/* @__PURE__ */ M("textarea", {
      value: a,
      onChange: (v) => {
        u || x();
        const C = v.target, b = C.value.length, S = C.value.endsWith(`
`), k = C.selectionStart === b;
        S && k && C.setSelectionRange(b, b), r && r(v);
      },
      ref: d,
      rows: i,
      style: s,
      ...l
    }), /* @__PURE__ */ M("textarea", {
      "aria-hidden": !0,
      className: t.className,
      readOnly: !0,
      ref: f,
      tabIndex: -1,
      style: {
        ...bR.shadow,
        ...s,
        paddingTop: 0,
        paddingBottom: 0
      }
    })]
  });
}), vm = /* @__PURE__ */ Bt(void 0);
function Ml({
  props: e,
  states: t
}) {
  const n = gt(vm), r = {};
  return t.forEach((o) => {
    const i = e[o];
    r[o] = i === void 0 && n ? n[o] : i;
  }), [r, n];
}
const Zd = rS();
function Qt() {
  const e = Pl(Zd);
  return e[_s] || e;
}
function TR(e) {
  return /* @__PURE__ */ M(KA, {
    ...e,
    defaultTheme: Zd,
    themeId: _s
  });
}
function iS(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Un = (e) => iS(e) && e !== "classes", K = Vw({
  themeId: _s,
  defaultTheme: Zd,
  rootShouldForwardProp: Un
});
function PR(e) {
  return function(n) {
    return (
      // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
      /* @__PURE__ */ M(TR, {
        styles: typeof e == "function" ? (r) => e({
          theme: r,
          ...n
        }) : e
      })
    );
  };
}
const je = x2;
function We(e) {
  return m2(e);
}
function Er(e) {
  var n;
  let t = e.activeElement;
  for (; ((n = t == null ? void 0 : t.shadowRoot) == null ? void 0 : n.activeElement) != null; )
    t = t.shadowRoot.activeElement;
  return t;
}
function Fv(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function gc(e, t = !1) {
  return e && (Fv(e.value) && e.value !== "" || t && Fv(e.defaultValue) && e.defaultValue !== "");
}
function MR(e) {
  return e.startAdornment;
}
function ER(e) {
  return be("MuiInputBase", e);
}
const as = he("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputTypeSearch"]), AR = {
  transition: "none"
};
function RR(e, t) {
  return e === "always" ? t : e === "system" ? {
    "@media (prefers-reduced-motion: reduce)": t
  } : null;
}
const xm = (e) => e.scrollTop, sS = {}, _R = ["all"], OR = {};
function Tn(e, t) {
  return (n) => {
    if (t) {
      const r = e.current;
      n === void 0 ? t(r) : t(r, n);
    }
  };
}
function aS(e, t, n, r, o, i) {
  const s = e === "exited" && !t ? r : n[e] || n.exited;
  return o || i ? {
    ...s,
    ...o,
    ...i
  } : s;
}
function mc(e, t) {
  const {
    timeout: n,
    easing: r,
    style: o = sS
  } = e;
  return {
    duration: o.transitionDuration ?? (typeof n == "number" ? n : n[t.mode] || 0),
    easing: o.transitionTimingFunction ?? (typeof r == "object" ? r[t.mode] : r),
    delay: o.transitionDelay
  };
}
function Cm(e, t) {
  var r;
  const n = t ?? AR;
  return RR((r = e.motion) == null ? void 0 : r.reducedMotion, n);
}
function vt(e, t = _R, n = OR) {
  var s, a;
  const r = (a = (s = e.transitions) == null ? void 0 : s.create) == null ? void 0 : a.call(s, t, n), o = Cm(e);
  if (r === void 0)
    return o ?? sS;
  const i = {
    transition: r
  };
  return o ? {
    ...i,
    ...o
  } : i;
}
var Bv;
const Th = "mui-auto-fill", yc = "mui-auto-fill-cancel", Jd = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.formControl && t.formControl, n.startAdornment && t.adornedStart, n.endAdornment && t.adornedEnd, n.error && t.error, n.size === "small" && t.sizeSmall, n.multiline && t.multiline, n.color && t[`color${Re(n.color)}`], n.fullWidth && t.fullWidth, n.hiddenLabel && t.hiddenLabel];
}, ef = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.input, n.type === "search" && t.inputTypeSearch];
}, $R = (e) => {
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
    root: ["root", `color${Re(n)}`, r && "disabled", o && "error", l && "fullWidth", s && "focused", a && "formControl", p && p !== "medium" && `size${Re(p)}`, c && "multiline", f && "adornedStart", i && "adornedEnd", u && "hiddenLabel", d && "readOnly"],
    input: ["input", r && "disabled", h === "search" && "inputTypeSearch", d && "readOnly"]
  };
  return ve(g, ER, t);
}, tf = K("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: Jd
})(je(({
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
  [`&.${as.disabled}`]: {
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
}))), nf = K("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: ef
})(je(({
  theme: e
}) => {
  const t = e.palette.mode === "light", n = {
    color: "currentColor",
    ...e.vars ? {
      opacity: e.vars.opacity.inputPlaceholder
    } : {
      opacity: t ? 0.42 : 0.5
    },
    ...vt(e, "opacity", {
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
    [`label[data-shrink=false] + .${as.formControl} &`]: {
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
    [`&.${as.disabled}`]: {
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
        animationName: yc,
        animationDuration: "10ms",
        "&:-webkit-autofill": {
          animationDuration: "5000s",
          animationName: Th
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
})), Uv = PR({
  // Keep keyframes non-empty for Emotion production builds. Animation properties are ignored
  // inside keyframes, avoiding the visible display animation triggered by Chrome 117+.
  [`@keyframes ${Th}`]: {
    from: {
      animationName: Th
    }
  },
  [`@keyframes ${yc}`]: {
    from: {
      animationName: yc
    }
  }
}), wm = /* @__PURE__ */ ce(function(t, n) {
  const r = We({
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
    maxRows: b,
    minRows: S,
    multiline: k = !1,
    name: I,
    onBlur: $,
    onChange: O,
    onClick: R,
    onFocus: w,
    onKeyDown: E,
    onKeyUp: T,
    placeholder: P,
    readOnly: _,
    renderSuffix: N,
    rows: A,
    size: D,
    slotProps: z = {},
    slots: U = {},
    startAdornment: W,
    type: q = "text",
    value: J,
    ...ae
  } = r, ee = m.value != null ? m.value : J, {
    current: ne
  } = V(ee != null), Z = V(), H = le((Ce) => {
  }, []), X = ot(Z, v, m.ref, H), [re, B] = Le(!1), [ue, Q] = Ml({
    props: r,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  ue.focused = Q ? Q.focused : re, fe(() => {
    !Q && d && re && (B(!1), $ && $());
  }, [Q, d, re, $]);
  const Ie = Q && Q.onFilled, xe = Q && Q.onEmpty, Te = le((Ce) => {
    gc(Ce) ? Ie && Ie() : xe && xe();
  }, [Ie, xe]);
  we(() => {
    ne && Te({
      value: ee
    });
  }, [ee, Te, ne]), we(() => {
    if (!a)
      return;
    const Ce = Z.current;
    if (!Ce)
      return;
    const Vt = St(Ce), $t = Er(Vt), Ys = $t == null || $t === Vt.body || $t === Vt.documentElement;
    Ce === $t ? Q && Q.onFocus ? Q.onFocus() : B(!0) : Ys && Ce.focus();
  }, [a]);
  const Mt = (Ce) => {
    w && w(Ce), m.onFocus && m.onFocus(Ce), Q && Q.onFocus ? Q.onFocus(Ce) : B(!0);
  }, Ye = (Ce) => {
    $ && $(Ce), m.onBlur && m.onBlur(Ce), Q && Q.onBlur ? Q.onBlur(Ce) : B(!1);
  }, Wt = (Ce, ...Vt) => {
    if (!ne) {
      const $t = Ce.target || Z.current;
      if ($t == null)
        throw new Error(zr(1));
      Te({
        value: $t.value
      });
    }
    m.onChange && m.onChange(Ce, ...Vt), O && O(Ce, ...Vt);
  };
  fe(() => {
    Te(Z.current);
  }, []);
  const Gt = (Ce) => {
    Z.current && Ce.currentTarget === Ce.target && Z.current.focus(), R && R(Ce);
  };
  let fn = y, ut = m;
  k && fn === "input" && (A ? ut = {
    type: void 0,
    minRows: A,
    maxRows: A,
    ...ut
  } : ut = {
    type: void 0,
    maxRows: b,
    minRows: S,
    ...ut
  }, fn = IR);
  const br = (Ce) => {
    Te(Ce.animationName === yc ? Z.current : {
      value: "x"
    });
  };
  fe(() => {
    Q && Q.setAdornedStart(!!W);
  }, [Q, W]);
  const nr = {
    ...r,
    color: ue.color || "primary",
    disabled: ue.disabled,
    endAdornment: f,
    error: ue.error,
    focused: ue.focused,
    formControl: Q,
    fullWidth: g,
    hiddenLabel: ue.hiddenLabel,
    multiline: k,
    size: ue.size,
    startAdornment: W,
    type: q
  }, Ot = $R(nr), Qe = U.root || tf, ct = z.root || {}, Lo = U.input || nf;
  return ut = {
    ...ut,
    ...z.input
  }, /* @__PURE__ */ oe(He, {
    children: [!p && typeof Uv == "function" && // For Emotion/Styled-components, InputGlobalStyles will be a function
    // For Pigment CSS, this has no effect because the InputGlobalStyles will be null.
    (Bv || (Bv = /* @__PURE__ */ M(Uv, {}))), /* @__PURE__ */ oe(Qe, {
      ...ct,
      ref: n,
      onClick: Gt,
      ...ae,
      ...!hc(Qe) && {
        ownerState: {
          ...nr,
          ...ct.ownerState
        }
      },
      className: ie(Ot.root, ct.className, l, _ && "MuiInputBase-readOnly"),
      children: [W, /* @__PURE__ */ M(vm.Provider, {
        value: null,
        children: /* @__PURE__ */ M(Lo, {
          "aria-invalid": ue.error,
          "aria-describedby": o,
          "aria-label": i,
          autoComplete: s,
          autoFocus: a,
          defaultValue: c,
          disabled: ue.disabled,
          id: x,
          onAnimationStart: br,
          name: I,
          placeholder: P,
          readOnly: _,
          required: ue.required,
          rows: A,
          value: ee,
          onKeyDown: E,
          onKeyUp: T,
          type: q,
          ...ut,
          ...!hc(Lo) && {
            as: fn,
            ownerState: {
              ...nr,
              ...ut.ownerState
            }
          },
          ref: X,
          className: ie(Ot.input, ut.className, _ && "MuiInputBase-readOnly"),
          onBlur: Ye,
          onChange: Wt,
          onFocus: Mt
        })
      }), f, N ? N({
        ...ue,
        startAdornment: W
      }) : null]
    })]
  });
});
function LR(e) {
  return be("MuiFilledInput", e);
}
const zo = {
  ...as,
  ...he("MuiFilledInput", ["root", "underline", "input", "adornedStart", "adornedEnd", "sizeSmall", "multiline", "hiddenLabel"])
};
function NR(e) {
  return be("MuiFormLabel", e);
}
const Ia = he("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]);
function DR(e) {
  return be("MuiInput", e);
}
const qs = {
  ...as,
  ...he("MuiInput", ["root", "underline", "input"])
};
function zR(e) {
  return be("MuiMenuItem", e);
}
const Qs = he("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]);
function FR(e) {
  return be("MuiNativeSelect", e);
}
const Sm = he("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]);
function BR(e) {
  return be("MuiOutlinedInput", e);
}
const or = {
  ...as,
  ...he("MuiOutlinedInput", ["root", "notchedOutline", "input"])
};
function UR(e) {
  return be("MuiToggleButton", e);
}
const Vo = he("MuiToggleButton", ["root", "disabled", "selected", "standard", "primary", "secondary", "sizeSmall", "sizeMedium", "sizeLarge", "fullWidth"]);
function cn({
  props: e,
  name: t
}) {
  return Yw({
    props: e,
    name: t,
    defaultTheme: Zd,
    themeId: _s
  });
}
function ke(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
function lS(e, t, n) {
  return e === void 0 || hc(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...n
    }
  };
}
function uS(e, t) {
  const n = e.charCodeAt(2);
  return e[0] === "o" && e[1] === "n" && n >= 65 && n <= 90 && typeof t == "function";
}
function cS(e) {
  if (e === void 0)
    return {};
  const t = {};
  for (const n of Object.keys(e))
    uS(n, e[n]) && (t[n] = e[n]);
  return t;
}
function Hv(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    t[n] = e[n];
  }), t;
}
function dS(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: o,
    className: i
  } = e;
  if (!t) {
    const f = ie(n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className), h = {
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
  const s = cS({
    ...o,
    ...r
  }), a = Hv(r), l = Hv(o), u = t(s), c = ie(u == null ? void 0 : u.className, n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className), d = {
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
function fS(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function xr(e) {
  var d;
  const {
    elementType: t,
    externalSlotProps: n,
    ownerState: r,
    skipResolvingSlotProps: o = !1,
    ...i
  } = e, s = o ? {} : fS(n, r), {
    props: a,
    internalRef: l
  } = dS({
    ...i,
    externalSlotProps: s
  }), u = ot(l, s == null ? void 0 : s.ref, (d = e.additionalProps) == null ? void 0 : d.ref);
  return lS(t, {
    ...a,
    ref: u
  }, r);
}
function Me(e, ...t) {
  const n = new URL("https://mui.com/x/production-error");
  return n.searchParams.set("code", e.toString()), t.forEach((r) => n.searchParams.append("args[]", r)), `MUI X error #${e}; visit ${n} for the full message.`;
}
var vc = /* @__PURE__ */ Symbol("NOT_FOUND");
function HR(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function")
    throw new TypeError(t);
}
function WR(e, t = "expected all items to be functions, instead received the following types: ") {
  if (!e.every((n) => typeof n == "function")) {
    const n = e.map(
      (r) => typeof r == "function" ? `function ${r.name || "unnamed"}()` : typeof r
    ).join(", ");
    throw new TypeError(`${t}[${n}]`);
  }
}
var Wv = (e) => Array.isArray(e) ? e : [e];
function GR(e) {
  const t = Array.isArray(e[0]) ? e[0] : e;
  return WR(
    t,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), t;
}
function VR(e, t) {
  const n = [], { length: r } = e;
  for (let o = 0; o < r; o++)
    n.push(e[o].apply(null, t));
  return n;
}
function jR(e) {
  let t;
  return {
    get(n) {
      return t && e(t.key, n) ? t.value : vc;
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
function YR(e, t) {
  let n = [];
  function r(a) {
    const l = n.findIndex((u) => t(a, u.key));
    if (l > -1) {
      const u = n[l];
      return l > 0 && (n.splice(l, 1), n.unshift(u)), u.value;
    }
    return vc;
  }
  function o(a, l) {
    r(a) === vc && (n.unshift({ key: a, value: l }), n.length > e && n.pop());
  }
  function i() {
    return n;
  }
  function s() {
    n = [];
  }
  return { get: r, put: o, getEntries: i, clear: s };
}
var KR = (e, t) => e === t;
function XR(e) {
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
function qR(e, t) {
  const n = typeof t == "object" ? t : { equalityCheck: t }, {
    equalityCheck: r = KR,
    maxSize: o = 1,
    resultEqualityCheck: i
  } = n, s = XR(r);
  let a = 0;
  const l = o <= 1 ? jR(s) : YR(o, s);
  function u() {
    let c = l.get(arguments);
    if (c === vc) {
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
var QR = class {
  constructor(e) {
    this.value = e;
  }
  deref() {
    return this.value;
  }
}, ZR = () => typeof WeakRef > "u" ? QR : WeakRef, pS = /* @__PURE__ */ ZR(), JR = 0, Gv = 1;
function cu() {
  return {
    s: JR,
    v: void 0,
    o: null,
    p: null
  };
}
function e_(e) {
  return e instanceof pS ? e.deref() : e;
}
function t_(e, t = {}) {
  let n = cu();
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
        g === void 0 ? (a = cu(), h.set(f, a)) : a = g;
      } else {
        let h = a.p;
        h === null && (a.p = h = /* @__PURE__ */ new Map());
        const g = h.get(f);
        g === void 0 ? (a = cu(), h.set(f, a)) : a = g;
      }
    }
    const u = a;
    let c;
    if (a.s === Gv)
      c = a.v;
    else if (c = e.apply(null, arguments), i++, r) {
      const d = e_(o);
      d != null && r(d, c) && (c = d, i !== 0 && i--), o = typeof c == "object" && c !== null || typeof c == "function" ? /* @__PURE__ */ new pS(c) : c;
    }
    return u.s = Gv, u.v = c, c;
  }
  return s.clearCache = () => {
    n = cu(), s.resetResultsCount();
  }, s.resultsCount = () => i, s.resetResultsCount = () => {
    i = 0;
  }, s;
}
function n_(e, ...t) {
  const n = typeof e == "function" ? {
    memoize: e,
    memoizeOptions: t
  } : e, r = (...o) => {
    let i = 0, s = 0, a, l = {}, u = o.pop();
    typeof u == "object" && (l = u, u = o.pop()), HR(
      u,
      `createSelector expects an output function after the inputs, but received: [${typeof u}]`
    );
    const c = {
      ...n,
      ...l
    }, {
      memoize: d,
      memoizeOptions: p = [],
      argsMemoize: f = t_,
      argsMemoizeOptions: h = []
    } = c, g = Wv(p), x = Wv(h), y = GR(o), m = d(function() {
      return i++, u.apply(
        null,
        arguments
      );
    }, ...g), v = f(function() {
      s++;
      const b = VR(
        y,
        arguments
      );
      return a = m.apply(null, b), a;
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
const r_ = n_({
  memoize: qR,
  memoizeOptions: {
    maxSize: 1,
    equalityCheck: Object.is
  }
}), j = (e, t, n, r, o, i, s, a, ...l) => {
  if (l.length > 0)
    throw new Error(Me(179));
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
    throw new Error(Me(180));
  return u;
}, El = (e) => (...t) => {
  const n = /* @__PURE__ */ new WeakMap();
  let r = 1;
  const o = t[t.length - 1], i = t.length - 1 || 1, s = Math.max(o.length - i, 0);
  if (s > 3)
    throw new Error(Me(181));
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
          throw new Error(Me(182));
      }
      e && (g = [...g, e]), f = r_(...g), f.selectorArgs = x, n.set(p, f);
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
}, de = El();
var hS = { exports: {} }, gS = {};
const bm = /* @__PURE__ */ BM(ns);
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ls = bm;
function o_(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var i_ = typeof Object.is == "function" ? Object.is : o_, s_ = ls.useState, a_ = ls.useEffect, l_ = ls.useLayoutEffect, u_ = ls.useDebugValue;
function c_(e, t) {
  var n = t(), r = s_({ inst: { value: n, getSnapshot: t } }), o = r[0].inst, i = r[1];
  return l_(
    function() {
      o.value = n, o.getSnapshot = t, Sp(o) && i({ inst: o });
    },
    [e, n, t]
  ), a_(
    function() {
      return Sp(o) && i({ inst: o }), e(function() {
        Sp(o) && i({ inst: o });
      });
    },
    [e]
  ), u_(n), n;
}
function Sp(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !i_(e, n);
  } catch {
    return !0;
  }
}
function d_(e, t) {
  return t();
}
var f_ = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? d_ : c_;
gS.useSyncExternalStore = ls.useSyncExternalStore !== void 0 ? ls.useSyncExternalStore : f_;
hS.exports = gS;
var mS = hS.exports, yS = { exports: {} }, vS = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rf = bm, p_ = mS;
function h_(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var g_ = typeof Object.is == "function" ? Object.is : h_, m_ = p_.useSyncExternalStore, y_ = rf.useRef, v_ = rf.useEffect, x_ = rf.useMemo, C_ = rf.useDebugValue;
vS.useSyncExternalStoreWithSelector = function(e, t, n, r, o) {
  var i = y_(null);
  if (i.current === null) {
    var s = { hasValue: !1, value: null };
    i.current = s;
  } else s = i.current;
  i = x_(
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
        if (h = d, g_(c, f)) return h;
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
  var a = m_(e, i[0], i[1]);
  return v_(
    function() {
      s.hasValue = !0, s.value = a;
    },
    [a]
  ), C_(a), a;
};
yS.exports = vS;
var w_ = yS.exports;
const xS = parseInt(fw, 10), S_ = xS >= 19, b_ = S_ ? I_ : T_;
function k_(e, t, n, r, o) {
  return b_(e, t, n, r, o);
}
function I_(e, t, n, r, o) {
  const i = le(() => t(e.getSnapshot(), n, r, o), [e, t, n, r, o]);
  return mS.useSyncExternalStore(e.subscribe, i, i);
}
function T_(e, t, n, r, o) {
  return w_.useSyncExternalStoreWithSelector(e.subscribe, e.getSnapshot, e.getSnapshot, (i) => t(i, n, r, o));
}
const Vv = {};
function Al(e, t) {
  const n = V(Vv);
  return n.current === Vv && (n.current = e(t)), n;
}
const P_ = [];
function km(e) {
  fe(e, P_);
}
const M_ = () => {
};
function E_(e, t, n) {
  const r = Al(A_, {
    store: e,
    selector: t
  }).current;
  r.effect = n, km(r.onMount);
}
function A_(e) {
  const {
    store: t,
    selector: n
  } = e;
  let r = n(t.state);
  const o = {
    effect: M_,
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
class Im {
  constructor(t) {
    pe(this, "subscribe", (t) => (this.listeners.add(t), () => {
      this.listeners.delete(t);
    }));
    /**
     * Returns the current state snapshot. Meant for usage with `useSyncExternalStore`.
     * If you want to access the state, use the `state` property instead.
     */
    pe(this, "getSnapshot", () => this.state);
    pe(this, "use", (t, n, r, o) => k_(this, t, n, r, o));
    this.state = t, this.listeners = /* @__PURE__ */ new Set(), this.updateTick = 0;
  }
  // HACK: `any` fixes adding listeners that accept partial state.
  // Internal state to handle recursive `setState()` calls
  static create(t) {
    return new Im(t);
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
        this.setState(L({}, this.state, t));
        return;
      }
  }
  set(t, n) {
    Object.is(this.state[t], n) || this.setState(L({}, this.state, {
      [t]: n
    }));
  }
}
const of = ({
  params: e,
  store: t
}) => {
  fe(() => {
    t.set("animation", L({}, t.state.animation, {
      skip: e.skipAnimation
    }));
  }, [t, e.skipAnimation]);
  const n = le(() => {
    let r = !1;
    return t.set("animation", L({}, t.state.animation, {
      skipAnimationRequests: t.state.animation.skipAnimationRequests + 1
    })), () => {
      r || (r = !0, t.set("animation", L({}, t.state.animation, {
        skipAnimationRequests: t.state.animation.skipAnimationRequests - 1
      })));
    };
  }, [t]);
  return we(() => {
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
of.params = {
  skipAnimation: !0
};
of.getDefaultizedParams = ({
  params: e
}) => L({}, e, {
  skipAnimation: e.skipAnimation ?? !1
});
of.getInitialState = ({
  skipAnimation: e
}) => ({
  animation: {
    skip: e,
    // By initializing the skipAnimationRequests to 1, we ensure that the animation is always skipped
    skipAnimationRequests: 0
  }
});
const R_ = (e) => e.animation, __ = j(R_, (e) => e.skip || e.skipAnimationRequests > 0);
function Tm(e, t) {
  const n = V(!0);
  fe(() => {
    if (n.current) {
      n.current = !1;
      return;
    }
    return e();
  }, t);
}
const Pm = "DEFAULT_X_AXIS_KEY", O_ = "DEFAULT_Y_AXIS_KEY", $_ = {
  top: 20,
  bottom: 20,
  left: 20,
  right: 20
}, Mm = 45, Em = 25, di = 20, Hn = (e) => {
  var t;
  return (t = e.cartesianAxis) == null ? void 0 : t.x;
}, er = (e) => {
  var t;
  return (t = e.cartesianAxis) == null ? void 0 : t.y;
}, Ds = (e) => {
  var t;
  return ((t = e.cartesianAxis) == null ? void 0 : t.axesGap) ?? 0;
};
function CS() {
  return typeof window > "u";
}
const oo = /* @__PURE__ */ new Map(), wS = 2e3, L_ = /* @__PURE__ */ new Set(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height", "top", "left", "fontSize", "padding", "margin", "paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom"]);
function Am(e, t) {
  return L_.has(e) && t === +t ? `${t}px` : t;
}
const N_ = /([A-Z])/g;
function Rm(e) {
  return String(e).replace(N_, (t) => `-${t.toLowerCase()}`);
}
function SS(e) {
  let t = "";
  for (const n in e)
    if (Object.hasOwn(e, n)) {
      const r = n, o = e[r];
      if (o === void 0)
        continue;
      t += `${Rm(r)}:${Am(r, o)};`;
    }
  return t;
}
const Rl = (e, t = {}) => {
  if (e == null || CS())
    return {
      width: 0,
      height: 0
    };
  const n = String(e), r = SS(t), o = `${n}-${r}`, i = oo.get(o);
  if (i)
    return i;
  try {
    const s = IS(), a = document.createElementNS("http://www.w3.org/2000/svg", "text");
    Object.keys(t).map((u) => (a.style[Rm(u)] = Am(u, t[u]), u)), a.textContent = n, s.replaceChildren(a);
    const l = kS(a);
    return oo.set(o, l), oo.size + 1 > wS && oo.clear(), l;
  } catch {
    return {
      width: 0,
      height: 0
    };
  }
};
function bS(e, t = {}) {
  if (CS())
    return new Map(Array.from(e).map((l) => [l, {
      width: 0,
      height: 0
    }]));
  const n = /* @__PURE__ */ new Map(), r = [], o = SS(t);
  for (const l of e) {
    const u = `${l}-${o}`, c = oo.get(u);
    c ? n.set(l, c) : r.push(l);
  }
  const i = IS(), s = L({}, t);
  Object.keys(s).map((l) => (i.style[Rm(l)] = Am(l, s[l]), l));
  const a = [];
  for (const l of r) {
    const u = document.createElementNS("http://www.w3.org/2000/svg", "text");
    u.textContent = `${l}`, a.push(u);
  }
  i.replaceChildren(...a);
  for (let l = 0; l < r.length; l += 1) {
    const u = r[l], c = i.children[l], d = kS(c), p = `${u}-${o}`;
    oo.set(p, d), n.set(u, d);
  }
  return oo.size + 1 > wS && oo.clear(), n;
}
function kS(e) {
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
let Jt = null;
function IS() {
  return Jt === null && (Jt = document.createElementNS("http://www.w3.org/2000/svg", "svg"), Jt.setAttribute("aria-hidden", "true"), Jt.style.position = "absolute", Jt.style.top = "-20000px", Jt.style.left = "0", Jt.style.padding = "0", Jt.style.margin = "0", Jt.style.border = "none", Jt.style.pointerEvents = "none", Jt.style.visibility = "hidden", Jt.style.contain = "strict", document.body.appendChild(Jt)), Jt;
}
const io = (e, t) => e === void 0 ? t : Math.PI * e / 180, TS = typeof window < "u" && "Intl" in window && "Segmenter" in Intl ? (
  // eslint-disable-next-line compat/compat
  new Intl.Segmenter(void 0, {
    granularity: "grapheme"
  })
) : null;
function D_(e) {
  return e.length;
}
function z_(e) {
  const t = TS.segment(e);
  let n = 0;
  for (const r of t)
    n += 1;
  return n;
}
const PS = TS ? z_ : D_;
function Xu(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function F_(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function _m(e) {
  let t, n, r;
  e.length !== 2 ? (t = Xu, n = (a, l) => Xu(e(a), l), r = (a, l) => e(a) - l) : (t = e === Xu || e === F_ ? e : B_, n = e, r = e);
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
function B_() {
  return 0;
}
function U_(e) {
  return e === null ? NaN : +e;
}
const H_ = _m(Xu), MS = H_.right;
_m(U_).center;
class xc extends Map {
  constructor(t, n = V_) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: n } }), t != null) for (const [r, o] of t) this.set(r, o);
  }
  get(t) {
    return super.get(jv(this, t));
  }
  has(t) {
    return super.has(jv(this, t));
  }
  set(t, n) {
    return super.set(W_(this, t), n);
  }
  delete(t) {
    return super.delete(G_(this, t));
  }
}
function jv({ _intern: e, _key: t }, n) {
  const r = t(n);
  return e.has(r) ? e.get(r) : n;
}
function W_({ _intern: e, _key: t }, n) {
  const r = t(n);
  return e.has(r) ? e.get(r) : (e.set(r, n), n);
}
function G_({ _intern: e, _key: t }, n) {
  const r = t(n);
  return e.has(r) && (n = e.get(r), e.delete(r)), n;
}
function V_(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
const j_ = Math.sqrt(50), Y_ = Math.sqrt(10), K_ = Math.sqrt(2);
function Cc(e, t, n) {
  const r = (t - e) / Math.max(0, n), o = Math.floor(Math.log10(r)), i = r / Math.pow(10, o), s = i >= j_ ? 10 : i >= Y_ ? 5 : i >= K_ ? 2 : 1;
  let a, l, u;
  return o < 0 ? (u = Math.pow(10, -o) / s, a = Math.round(e * u), l = Math.round(t * u), a / u < e && ++a, l / u > t && --l, u = -u) : (u = Math.pow(10, o) * s, a = Math.round(e / u), l = Math.round(t / u), a * u < e && ++a, l * u > t && --l), l < a && 0.5 <= n && n < 2 ? Cc(e, t, n * 2) : [a, l, u];
}
function Ph(e, t, n) {
  if (t = +t, e = +e, n = +n, !(n > 0)) return [];
  if (e === t) return [e];
  const r = t < e, [o, i, s] = r ? Cc(t, e, n) : Cc(e, t, n);
  if (!(i >= o)) return [];
  const a = i - o + 1, l = new Array(a);
  if (r)
    if (s < 0) for (let u = 0; u < a; ++u) l[u] = (i - u) / -s;
    else for (let u = 0; u < a; ++u) l[u] = (i - u) * s;
  else if (s < 0) for (let u = 0; u < a; ++u) l[u] = (o + u) / -s;
  else for (let u = 0; u < a; ++u) l[u] = (o + u) * s;
  return l;
}
function Mh(e, t, n) {
  return t = +t, e = +e, n = +n, Cc(e, t, n)[2];
}
function Eh(e, t, n) {
  t = +t, e = +e, n = +n;
  const r = t < e, o = r ? Mh(t, e, n) : Mh(e, t, n);
  return (r ? -1 : 1) * (o < 0 ? 1 / -o : o);
}
function ko(e, t) {
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
function Om(e, t) {
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
const Yv = Symbol("implicit");
function Ya() {
  var e = new xc(), t = [], n = [], r = Yv;
  function o(i) {
    let s = e.get(i);
    if (s === void 0) {
      if (r !== Yv) return r;
      e.set(i, s = t.push(i) - 1);
    }
    return n[s % n.length];
  }
  return o.domain = function(i) {
    if (!arguments.length) return t.slice();
    t = [], e = new xc();
    for (const s of i)
      e.has(s) || e.set(s, t.push(s) - 1);
    return o;
  }, o.range = function(i) {
    return arguments.length ? (n = Array.from(i), o) : n.slice();
  }, o.unknown = function(i) {
    return arguments.length ? (r = i, o) : r;
  }, o.copy = function() {
    return Ya(t, n).unknown(r);
  }, ko.apply(o, arguments), o;
}
function $m(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function ES(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function _l() {
}
var Ka = 0.7, wc = 1 / Ka, Ki = "\\s*([+-]?\\d+)\\s*", Xa = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", pr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", X_ = /^#([0-9a-f]{3,8})$/, q_ = new RegExp(`^rgb\\(${Ki},${Ki},${Ki}\\)$`), Q_ = new RegExp(`^rgb\\(${pr},${pr},${pr}\\)$`), Z_ = new RegExp(`^rgba\\(${Ki},${Ki},${Ki},${Xa}\\)$`), J_ = new RegExp(`^rgba\\(${pr},${pr},${pr},${Xa}\\)$`), eO = new RegExp(`^hsl\\(${Xa},${pr},${pr}\\)$`), tO = new RegExp(`^hsla\\(${Xa},${pr},${pr},${Xa}\\)$`), Kv = {
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
$m(_l, qa, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Xv,
  // Deprecated! Use color.formatHex.
  formatHex: Xv,
  formatHex8: nO,
  formatHsl: rO,
  formatRgb: qv,
  toString: qv
});
function Xv() {
  return this.rgb().formatHex();
}
function nO() {
  return this.rgb().formatHex8();
}
function rO() {
  return AS(this).formatHsl();
}
function qv() {
  return this.rgb().formatRgb();
}
function qa(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = X_.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Qv(t) : n === 3 ? new tn(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? du(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? du(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = q_.exec(e)) ? new tn(t[1], t[2], t[3], 1) : (t = Q_.exec(e)) ? new tn(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Z_.exec(e)) ? du(t[1], t[2], t[3], t[4]) : (t = J_.exec(e)) ? du(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = eO.exec(e)) ? ex(t[1], t[2] / 100, t[3] / 100, 1) : (t = tO.exec(e)) ? ex(t[1], t[2] / 100, t[3] / 100, t[4]) : Kv.hasOwnProperty(e) ? Qv(Kv[e]) : e === "transparent" ? new tn(NaN, NaN, NaN, 0) : null;
}
function Qv(e) {
  return new tn(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function du(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new tn(e, t, n, r);
}
function oO(e) {
  return e instanceof _l || (e = qa(e)), e ? (e = e.rgb(), new tn(e.r, e.g, e.b, e.opacity)) : new tn();
}
function Ah(e, t, n, r) {
  return arguments.length === 1 ? oO(e) : new tn(e, t, n, r ?? 1);
}
function tn(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
$m(tn, Ah, ES(_l, {
  brighter(e) {
    return e = e == null ? wc : Math.pow(wc, e), new tn(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Ka : Math.pow(Ka, e), new tn(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new tn(Qo(this.r), Qo(this.g), Qo(this.b), Sc(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Zv,
  // Deprecated! Use color.formatHex.
  formatHex: Zv,
  formatHex8: iO,
  formatRgb: Jv,
  toString: Jv
}));
function Zv() {
  return `#${jo(this.r)}${jo(this.g)}${jo(this.b)}`;
}
function iO() {
  return `#${jo(this.r)}${jo(this.g)}${jo(this.b)}${jo((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Jv() {
  const e = Sc(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Qo(this.r)}, ${Qo(this.g)}, ${Qo(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Sc(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Qo(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function jo(e) {
  return e = Qo(e), (e < 16 ? "0" : "") + e.toString(16);
}
function ex(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Xn(e, t, n, r);
}
function AS(e) {
  if (e instanceof Xn) return new Xn(e.h, e.s, e.l, e.opacity);
  if (e instanceof _l || (e = qa(e)), !e) return new Xn();
  if (e instanceof Xn) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), s = NaN, a = i - o, l = (i + o) / 2;
  return a ? (t === i ? s = (n - r) / a + (n < r) * 6 : n === i ? s = (r - t) / a + 2 : s = (t - n) / a + 4, a /= l < 0.5 ? i + o : 2 - i - o, s *= 60) : a = l > 0 && l < 1 ? 0 : s, new Xn(s, a, l, e.opacity);
}
function sO(e, t, n, r) {
  return arguments.length === 1 ? AS(e) : new Xn(e, t, n, r ?? 1);
}
function Xn(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
$m(Xn, sO, ES(_l, {
  brighter(e) {
    return e = e == null ? wc : Math.pow(wc, e), new Xn(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Ka : Math.pow(Ka, e), new Xn(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new tn(
      bp(e >= 240 ? e - 240 : e + 120, o, r),
      bp(e, o, r),
      bp(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new Xn(tx(this.h), fu(this.s), fu(this.l), Sc(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Sc(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${tx(this.h)}, ${fu(this.s) * 100}%, ${fu(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function tx(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function fu(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function bp(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const Lm = (e) => () => e;
function aO(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function lO(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function uO(e) {
  return (e = +e) == 1 ? RS : function(t, n) {
    return n - t ? lO(t, n, e) : Lm(isNaN(t) ? n : t);
  };
}
function RS(e, t) {
  var n = t - e;
  return n ? aO(e, n) : Lm(isNaN(e) ? t : e);
}
const nx = function e(t) {
  var n = uO(t);
  function r(o, i) {
    var s = n((o = Ah(o)).r, (i = Ah(i)).r), a = n(o.g, i.g), l = n(o.b, i.b), u = RS(o.opacity, i.opacity);
    return function(c) {
      return o.r = s(c), o.g = a(c), o.b = l(c), o.opacity = u(c), o + "";
    };
  }
  return r.gamma = e, r;
}(1);
function cO(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), o;
  return function(i) {
    for (o = 0; o < n; ++o) r[o] = e[o] * (1 - i) + t[o] * i;
    return r;
  };
}
function dO(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function fO(e, t) {
  var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, o = new Array(r), i = new Array(n), s;
  for (s = 0; s < r; ++s) o[s] = sf(e[s], t[s]);
  for (; s < n; ++s) i[s] = t[s];
  return function(a) {
    for (s = 0; s < r; ++s) i[s] = o[s](a);
    return i;
  };
}
function Nm(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(r) {
    return n.setTime(e * (1 - r) + t * r), n;
  };
}
function us(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function pO(e, t) {
  var n = {}, r = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? n[o] = sf(e[o], t[o]) : r[o] = t[o];
  return function(i) {
    for (o in n) r[o] = n[o](i);
    return r;
  };
}
var Rh = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, kp = new RegExp(Rh.source, "g");
function hO(e) {
  return function() {
    return e;
  };
}
function gO(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Dm(e, t) {
  var n = Rh.lastIndex = kp.lastIndex = 0, r, o, i, s = -1, a = [], l = [];
  for (e = e + "", t = t + ""; (r = Rh.exec(e)) && (o = kp.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), a[s] ? a[s] += i : a[++s] = i), (r = r[0]) === (o = o[0]) ? a[s] ? a[s] += o : a[++s] = o : (a[++s] = null, l.push({ i: s, x: us(r, o) })), n = kp.lastIndex;
  return n < t.length && (i = t.slice(n), a[s] ? a[s] += i : a[++s] = i), a.length < 2 ? l[0] ? gO(l[0].x) : hO(t) : (t = l.length, function(u) {
    for (var c = 0, d; c < t; ++c) a[(d = l[c]).i] = d.x(u);
    return a.join("");
  });
}
function sf(e, t) {
  var n = typeof t, r;
  return t == null || n === "boolean" ? Lm(t) : (n === "number" ? us : n === "string" ? (r = qa(t)) ? (t = r, nx) : Dm : t instanceof qa ? nx : t instanceof Date ? Nm : dO(t) ? cO : Array.isArray(t) ? fO : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? pO : us)(e, t);
}
function _S(e, t) {
  return e = +e, t = +t, function(n) {
    return Math.round(e * (1 - n) + t * n);
  };
}
function mO(e) {
  return function() {
    return e;
  };
}
function yO(e) {
  return +e;
}
var rx = [0, 1];
function En(e) {
  return e;
}
function _h(e, t) {
  return (t -= e = +e) ? function(n) {
    return (n - e) / t;
  } : mO(isNaN(t) ? NaN : 0.5);
}
function vO(e, t) {
  var n;
  return e > t && (n = e, e = t, t = n), function(r) {
    return Math.max(e, Math.min(t, r));
  };
}
function xO(e, t, n) {
  var r = e[0], o = e[1], i = t[0], s = t[1];
  return o < r ? (r = _h(o, r), i = n(s, i)) : (r = _h(r, o), i = n(i, s)), function(a) {
    return i(r(a));
  };
}
function CO(e, t, n) {
  var r = Math.min(e.length, t.length) - 1, o = new Array(r), i = new Array(r), s = -1;
  for (e[r] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++s < r; )
    o[s] = _h(e[s], e[s + 1]), i[s] = n(t[s], t[s + 1]);
  return function(a) {
    var l = MS(e, a, 1, r) - 1;
    return i[l](o[l](a));
  };
}
function Ol(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function af() {
  var e = rx, t = rx, n = sf, r, o, i, s = En, a, l, u;
  function c() {
    var p = Math.min(e.length, t.length);
    return s !== En && (s = vO(e[0], e[p - 1])), a = p > 2 ? CO : xO, l = u = null, d;
  }
  function d(p) {
    return p == null || isNaN(p = +p) ? i : (l || (l = a(e.map(r), t, n)))(r(s(p)));
  }
  return d.invert = function(p) {
    return s(o((u || (u = a(t, e.map(r), us)))(p)));
  }, d.domain = function(p) {
    return arguments.length ? (e = Array.from(p, yO), c()) : e.slice();
  }, d.range = function(p) {
    return arguments.length ? (t = Array.from(p), c()) : t.slice();
  }, d.rangeRound = function(p) {
    return t = Array.from(p), n = _S, c();
  }, d.clamp = function(p) {
    return arguments.length ? (s = p ? !0 : En, c()) : s !== En;
  }, d.interpolate = function(p) {
    return arguments.length ? (n = p, c()) : n;
  }, d.unknown = function(p) {
    return arguments.length ? (i = p, d) : i;
  }, function(p, f) {
    return r = p, o = f, c();
  };
}
function OS() {
  return af()(En, En);
}
function wO(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function bc(e, t) {
  if (!isFinite(e) || e === 0) return null;
  var n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e"), r = e.slice(0, n);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +e.slice(n + 1)
  ];
}
function cs(e) {
  return e = bc(Math.abs(e)), e ? e[1] : NaN;
}
function SO(e, t) {
  return function(n, r) {
    for (var o = n.length, i = [], s = 0, a = e[0], l = 0; o > 0 && a > 0 && (l + a + 1 > r && (a = Math.max(1, r - l)), i.push(n.substring(o -= a, o + a)), !((l += a + 1) > r)); )
      a = e[s = (s + 1) % e.length];
    return i.reverse().join(t);
  };
}
function bO(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(n) {
      return e[+n];
    });
  };
}
var kO = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Qa(e) {
  if (!(t = kO.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new zm({
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
Qa.prototype = zm.prototype;
function zm(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
zm.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function IO(e) {
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
var kc;
function TO(e, t) {
  var n = bc(e, t);
  if (!n) return kc = void 0, e.toPrecision(t);
  var r = n[0], o = n[1], i = o - (kc = Math.max(-8, Math.min(8, Math.floor(o / 3))) * 3) + 1, s = r.length;
  return i === s ? r : i > s ? r + new Array(i - s + 1).join("0") : i > 0 ? r.slice(0, i) + "." + r.slice(i) : "0." + new Array(1 - i).join("0") + bc(e, Math.max(0, t + i - 1))[0];
}
function ox(e, t) {
  var n = bc(e, t);
  if (!n) return e + "";
  var r = n[0], o = n[1];
  return o < 0 ? "0." + new Array(-o).join("0") + r : r.length > o + 1 ? r.slice(0, o + 1) + "." + r.slice(o + 1) : r + new Array(o - r.length + 2).join("0");
}
const ix = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: wO,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => ox(e * 100, t),
  r: ox,
  s: TO,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function sx(e) {
  return e;
}
var ax = Array.prototype.map, lx = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function PO(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? sx : SO(ax.call(e.grouping, Number), e.thousands + ""), n = e.currency === void 0 ? "" : e.currency[0] + "", r = e.currency === void 0 ? "" : e.currency[1] + "", o = e.decimal === void 0 ? "." : e.decimal + "", i = e.numerals === void 0 ? sx : bO(ax.call(e.numerals, String)), s = e.percent === void 0 ? "%" : e.percent + "", a = e.minus === void 0 ? "−" : e.minus + "", l = e.nan === void 0 ? "NaN" : e.nan + "";
  function u(d, p) {
    d = Qa(d);
    var f = d.fill, h = d.align, g = d.sign, x = d.symbol, y = d.zero, m = d.width, v = d.comma, C = d.precision, b = d.trim, S = d.type;
    S === "n" ? (v = !0, S = "g") : ix[S] || (C === void 0 && (C = 12), b = !0, S = "g"), (y || f === "0" && h === "=") && (y = !0, f = "0", h = "=");
    var k = (p && p.prefix !== void 0 ? p.prefix : "") + (x === "$" ? n : x === "#" && /[boxX]/.test(S) ? "0" + S.toLowerCase() : ""), I = (x === "$" ? r : /[%p]/.test(S) ? s : "") + (p && p.suffix !== void 0 ? p.suffix : ""), $ = ix[S], O = /[defgprs%]/.test(S);
    C = C === void 0 ? 6 : /[gprs]/.test(S) ? Math.max(1, Math.min(21, C)) : Math.max(0, Math.min(20, C));
    function R(w) {
      var E = k, T = I, P, _, N;
      if (S === "c")
        T = $(w) + T, w = "";
      else {
        w = +w;
        var A = w < 0 || 1 / w < 0;
        if (w = isNaN(w) ? l : $(Math.abs(w), C), b && (w = IO(w)), A && +w == 0 && g !== "+" && (A = !1), E = (A ? g === "(" ? g : a : g === "-" || g === "(" ? "" : g) + E, T = (S === "s" && !isNaN(w) && kc !== void 0 ? lx[8 + kc / 3] : "") + T + (A && g === "(" ? ")" : ""), O) {
          for (P = -1, _ = w.length; ++P < _; )
            if (N = w.charCodeAt(P), 48 > N || N > 57) {
              T = (N === 46 ? o + w.slice(P + 1) : w.slice(P)) + T, w = w.slice(0, P);
              break;
            }
        }
      }
      v && !y && (w = t(w, 1 / 0));
      var D = E.length + w.length + T.length, z = D < m ? new Array(m - D + 1).join(f) : "";
      switch (v && y && (w = t(z + w, z.length ? m - T.length : 1 / 0), z = ""), h) {
        case "<":
          w = E + w + T + z;
          break;
        case "=":
          w = E + z + w + T;
          break;
        case "^":
          w = z.slice(0, D = z.length >> 1) + E + w + T + z.slice(D);
          break;
        default:
          w = z + E + w + T;
          break;
      }
      return i(w);
    }
    return R.toString = function() {
      return d + "";
    }, R;
  }
  function c(d, p) {
    var f = Math.max(-8, Math.min(8, Math.floor(cs(p) / 3))) * 3, h = Math.pow(10, -f), g = u((d = Qa(d), d.type = "f", d), { suffix: lx[8 + f / 3] });
    return function(x) {
      return g(h * x);
    };
  }
  return {
    format: u,
    formatPrefix: c
  };
}
var pu, Fm, $S;
MO({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function MO(e) {
  return pu = PO(e), Fm = pu.format, $S = pu.formatPrefix, pu;
}
function EO(e) {
  return Math.max(0, -cs(Math.abs(e)));
}
function AO(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(cs(t) / 3))) * 3 - cs(Math.abs(e)));
}
function RO(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, cs(t) - cs(e)) + 1;
}
function _O(e, t, n, r) {
  var o = Eh(e, t, n), i;
  switch (r = Qa(r ?? ",f"), r.type) {
    case "s": {
      var s = Math.max(Math.abs(e), Math.abs(t));
      return r.precision == null && !isNaN(i = AO(o, s)) && (r.precision = i), $S(r, s);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(i = RO(o, Math.max(Math.abs(e), Math.abs(t)))) && (r.precision = i - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(i = EO(o)) && (r.precision = i - (r.type === "%") * 2);
      break;
    }
  }
  return Fm(r);
}
function lf(e) {
  var t = e.domain;
  return e.ticks = function(n) {
    var r = t();
    return Ph(r[0], r[r.length - 1], n ?? 10);
  }, e.tickFormat = function(n, r) {
    var o = t();
    return _O(o[0], o[o.length - 1], n ?? 10, r);
  }, e.nice = function(n) {
    n == null && (n = 10);
    var r = t(), o = 0, i = r.length - 1, s = r[o], a = r[i], l, u, c = 10;
    for (a < s && (u = s, s = a, a = u, u = o, o = i, i = u); c-- > 0; ) {
      if (u = Mh(s, a, n), u === l)
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
function Bm() {
  var e = OS();
  return e.copy = function() {
    return Ol(e, Bm());
  }, ko.apply(e, arguments), lf(e);
}
function LS(e, t) {
  e = e.slice();
  var n = 0, r = e.length - 1, o = e[n], i = e[r], s;
  return i < o && (s = n, n = r, r = s, s = o, o = i, i = s), e[n] = t.floor(o), e[r] = t.ceil(i), e;
}
function ux(e) {
  return Math.log(e);
}
function cx(e) {
  return Math.exp(e);
}
function OO(e) {
  return -Math.log(-e);
}
function $O(e) {
  return -Math.exp(-e);
}
function LO(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function NO(e) {
  return e === 10 ? LO : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function DO(e) {
  return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function dx(e) {
  return (t, n) => -e(-t, n);
}
function NS(e) {
  const t = e(ux, cx), n = t.domain;
  let r = 10, o, i;
  function s() {
    return o = DO(r), i = NO(r), n()[0] < 0 ? (o = dx(o), i = dx(i), e(OO, $O)) : e(ux, cx), t;
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
      y.length * 2 < x && (y = Ph(u, c, x));
    } else
      y = Ph(p, f, Math.min(f - p, x)).map(i);
    return d ? y.reverse() : y;
  }, t.tickFormat = (a, l) => {
    if (a == null && (a = 10), l == null && (l = r === 10 ? "s" : ","), typeof l != "function" && (!(r % 1) && (l = Qa(l)).precision == null && (l.trim = !0), l = Fm(l)), a === 1 / 0) return l;
    const u = Math.max(1, r * a / t.ticks().length);
    return (c) => {
      let d = c / i(Math.round(o(c)));
      return d * r < r - 0.5 && (d *= r), d <= u ? l(c) : "";
    };
  }, t.nice = () => n(LS(n(), {
    floor: (a) => i(Math.floor(o(a))),
    ceil: (a) => i(Math.ceil(o(a)))
  })), t;
}
function Ic() {
  const e = NS(af()).domain([1, 10]);
  return e.copy = () => Ol(e, Ic()).base(e.base()), ko.apply(e, arguments), e;
}
function fx(e) {
  return function(t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e));
  };
}
function px(e) {
  return function(t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
  };
}
function zO(e) {
  var t = 1, n = e(fx(t), px(t));
  return n.constant = function(r) {
    return arguments.length ? e(fx(t = +r), px(t)) : t;
  }, lf(n);
}
function DS() {
  var e = zO(af());
  return e.copy = function() {
    return Ol(e, DS()).constant(e.constant());
  }, ko.apply(e, arguments);
}
function hx(e) {
  return function(t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function FO(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function BO(e) {
  return e < 0 ? -e * e : e * e;
}
function zS(e) {
  var t = e(En, En), n = 1;
  function r() {
    return n === 1 ? e(En, En) : n === 0.5 ? e(FO, BO) : e(hx(n), hx(1 / n));
  }
  return t.exponent = function(o) {
    return arguments.length ? (n = +o, r()) : n;
  }, lf(t);
}
function Um() {
  var e = zS(af());
  return e.copy = function() {
    return Ol(e, Um()).exponent(e.exponent());
  }, ko.apply(e, arguments), e;
}
function UO() {
  return Um.apply(null, arguments).exponent(0.5);
}
function Hm() {
  var e = [0.5], t = [0, 1], n, r = 1;
  function o(i) {
    return i != null && i <= i ? t[MS(e, i, 0, r)] : n;
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
    return Hm().domain(e).range(t).unknown(n);
  }, ko.apply(o, arguments);
}
const Ip = /* @__PURE__ */ new Date(), Tp = /* @__PURE__ */ new Date();
function xt(e, t, n, r) {
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
  }, o.filter = (i) => xt((s) => {
    if (s >= s) for (; e(s), !i(s); ) s.setTime(s - 1);
  }, (s, a) => {
    if (s >= s)
      if (a < 0) for (; ++a <= 0; )
        for (; t(s, -1), !i(s); )
          ;
      else for (; --a >= 0; )
        for (; t(s, 1), !i(s); )
          ;
  }), n && (o.count = (i, s) => (Ip.setTime(+i), Tp.setTime(+s), e(Ip), e(Tp), Math.floor(n(Ip, Tp))), o.every = (i) => (i = Math.floor(i), !isFinite(i) || !(i > 0) ? null : i > 1 ? o.filter(r ? (s) => r(s) % i === 0 : (s) => o.count(0, s) % i === 0) : o)), o;
}
const Tc = xt(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
Tc.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? xt((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, n) => {
  t.setTime(+t + n * e);
}, (t, n) => (n - t) / e) : Tc);
Tc.range;
const Ar = 1e3, An = Ar * 60, Rr = An * 60, Fr = Rr * 24, Wm = Fr * 7, gx = Fr * 30, Pp = Fr * 365, Yo = xt((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * Ar);
}, (e, t) => (t - e) / Ar, (e) => e.getUTCSeconds());
Yo.range;
const Gm = xt((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Ar);
}, (e, t) => {
  e.setTime(+e + t * An);
}, (e, t) => (t - e) / An, (e) => e.getMinutes());
Gm.range;
const Vm = xt((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * An);
}, (e, t) => (t - e) / An, (e) => e.getUTCMinutes());
Vm.range;
const jm = xt((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Ar - e.getMinutes() * An);
}, (e, t) => {
  e.setTime(+e + t * Rr);
}, (e, t) => (t - e) / Rr, (e) => e.getHours());
jm.range;
const Ym = xt((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * Rr);
}, (e, t) => (t - e) / Rr, (e) => e.getUTCHours());
Ym.range;
const $l = xt(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * An) / Fr,
  (e) => e.getDate() - 1
);
$l.range;
const uf = xt((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Fr, (e) => e.getUTCDate() - 1);
uf.range;
const FS = xt((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Fr, (e) => Math.floor(e / Fr));
FS.range;
function fi(e) {
  return xt((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setDate(t.getDate() + n * 7);
  }, (t, n) => (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * An) / Wm);
}
const cf = fi(0), Pc = fi(1), HO = fi(2), WO = fi(3), ds = fi(4), GO = fi(5), VO = fi(6);
cf.range;
Pc.range;
HO.range;
WO.range;
ds.range;
GO.range;
VO.range;
function pi(e) {
  return xt((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setUTCDate(t.getUTCDate() + n * 7);
  }, (t, n) => (n - t) / Wm);
}
const df = pi(0), Mc = pi(1), jO = pi(2), YO = pi(3), fs = pi(4), KO = pi(5), XO = pi(6);
df.range;
Mc.range;
jO.range;
YO.range;
fs.range;
KO.range;
XO.range;
const Km = xt((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
Km.range;
const Xm = xt((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
Xm.range;
const Br = xt((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
Br.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : xt((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, n) => {
  t.setFullYear(t.getFullYear() + n * e);
});
Br.range;
const Ur = xt((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
Ur.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : xt((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, n) => {
  t.setUTCFullYear(t.getUTCFullYear() + n * e);
});
Ur.range;
function BS(e, t, n, r, o, i) {
  const s = [
    [Yo, 1, Ar],
    [Yo, 5, 5 * Ar],
    [Yo, 15, 15 * Ar],
    [Yo, 30, 30 * Ar],
    [i, 1, An],
    [i, 5, 5 * An],
    [i, 15, 15 * An],
    [i, 30, 30 * An],
    [o, 1, Rr],
    [o, 3, 3 * Rr],
    [o, 6, 6 * Rr],
    [o, 12, 12 * Rr],
    [r, 1, Fr],
    [r, 2, 2 * Fr],
    [n, 1, Wm],
    [t, 1, gx],
    [t, 3, 3 * gx],
    [e, 1, Pp]
  ];
  function a(u, c, d) {
    const p = c < u;
    p && ([u, c] = [c, u]);
    const f = d && typeof d.range == "function" ? d : l(u, c, d), h = f ? f.range(u, +c + 1) : [];
    return p ? h.reverse() : h;
  }
  function l(u, c, d) {
    const p = Math.abs(c - u) / d, f = _m(([, , x]) => x).right(s, p);
    if (f === s.length) return e.every(Eh(u / Pp, c / Pp, d));
    if (f === 0) return Tc.every(Math.max(Eh(u, c, d), 1));
    const [h, g] = s[p / s[f - 1][2] < s[f][2] / p ? f - 1 : f];
    return h.every(g);
  }
  return [a, l];
}
const [qO, QO] = BS(Ur, Xm, df, FS, Ym, Vm), [ZO, JO] = BS(Br, Km, cf, $l, jm, Gm);
function Mp(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Ep(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function Zs(e, t, n) {
  return { y: e, m: t, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function e$(e) {
  var t = e.dateTime, n = e.date, r = e.time, o = e.periods, i = e.days, s = e.shortDays, a = e.months, l = e.shortMonths, u = Js(o), c = ea(o), d = Js(i), p = ea(i), f = Js(s), h = ea(s), g = Js(a), x = ea(a), y = Js(l), m = ea(l), v = {
    a: N,
    A,
    b: D,
    B: z,
    c: null,
    d: wx,
    e: wx,
    f: b$,
    g: O$,
    G: L$,
    H: C$,
    I: w$,
    j: S$,
    L: US,
    m: k$,
    M: I$,
    p: U,
    q: W,
    Q: kx,
    s: Ix,
    S: T$,
    u: P$,
    U: M$,
    V: E$,
    w: A$,
    W: R$,
    x: null,
    X: null,
    y: _$,
    Y: $$,
    Z: N$,
    "%": bx
  }, C = {
    a: q,
    A: J,
    b: ae,
    B: ee,
    c: null,
    d: Sx,
    e: Sx,
    f: B$,
    g: q$,
    G: Z$,
    H: D$,
    I: z$,
    j: F$,
    L: WS,
    m: U$,
    M: H$,
    p: ne,
    q: Z,
    Q: kx,
    s: Ix,
    S: W$,
    u: G$,
    U: V$,
    V: j$,
    w: Y$,
    W: K$,
    x: null,
    X: null,
    y: X$,
    Y: Q$,
    Z: J$,
    "%": bx
  }, b = {
    a: O,
    A: R,
    b: w,
    B: E,
    c: T,
    d: xx,
    e: xx,
    f: m$,
    g: vx,
    G: yx,
    H: Cx,
    I: Cx,
    j: f$,
    L: g$,
    m: d$,
    M: p$,
    p: $,
    q: c$,
    Q: v$,
    s: x$,
    S: h$,
    u: i$,
    U: s$,
    V: a$,
    w: o$,
    W: l$,
    x: P,
    X: _,
    y: vx,
    Y: yx,
    Z: u$,
    "%": y$
  };
  v.x = S(n, v), v.X = S(r, v), v.c = S(t, v), C.x = S(n, C), C.X = S(r, C), C.c = S(t, C);
  function S(H, X) {
    return function(re) {
      var B = [], ue = -1, Q = 0, Ie = H.length, xe, Te, Mt;
      for (re instanceof Date || (re = /* @__PURE__ */ new Date(+re)); ++ue < Ie; )
        H.charCodeAt(ue) === 37 && (B.push(H.slice(Q, ue)), (Te = mx[xe = H.charAt(++ue)]) != null ? xe = H.charAt(++ue) : Te = xe === "e" ? " " : "0", (Mt = X[xe]) && (xe = Mt(re, Te)), B.push(xe), Q = ue + 1);
      return B.push(H.slice(Q, ue)), B.join("");
    };
  }
  function k(H, X) {
    return function(re) {
      var B = Zs(1900, void 0, 1), ue = I(B, H, re += "", 0), Q, Ie;
      if (ue != re.length) return null;
      if ("Q" in B) return new Date(B.Q);
      if ("s" in B) return new Date(B.s * 1e3 + ("L" in B ? B.L : 0));
      if (X && !("Z" in B) && (B.Z = 0), "p" in B && (B.H = B.H % 12 + B.p * 12), B.m === void 0 && (B.m = "q" in B ? B.q : 0), "V" in B) {
        if (B.V < 1 || B.V > 53) return null;
        "w" in B || (B.w = 1), "Z" in B ? (Q = Ep(Zs(B.y, 0, 1)), Ie = Q.getUTCDay(), Q = Ie > 4 || Ie === 0 ? Mc.ceil(Q) : Mc(Q), Q = uf.offset(Q, (B.V - 1) * 7), B.y = Q.getUTCFullYear(), B.m = Q.getUTCMonth(), B.d = Q.getUTCDate() + (B.w + 6) % 7) : (Q = Mp(Zs(B.y, 0, 1)), Ie = Q.getDay(), Q = Ie > 4 || Ie === 0 ? Pc.ceil(Q) : Pc(Q), Q = $l.offset(Q, (B.V - 1) * 7), B.y = Q.getFullYear(), B.m = Q.getMonth(), B.d = Q.getDate() + (B.w + 6) % 7);
      } else ("W" in B || "U" in B) && ("w" in B || (B.w = "u" in B ? B.u % 7 : "W" in B ? 1 : 0), Ie = "Z" in B ? Ep(Zs(B.y, 0, 1)).getUTCDay() : Mp(Zs(B.y, 0, 1)).getDay(), B.m = 0, B.d = "W" in B ? (B.w + 6) % 7 + B.W * 7 - (Ie + 5) % 7 : B.w + B.U * 7 - (Ie + 6) % 7);
      return "Z" in B ? (B.H += B.Z / 100 | 0, B.M += B.Z % 100, Ep(B)) : Mp(B);
    };
  }
  function I(H, X, re, B) {
    for (var ue = 0, Q = X.length, Ie = re.length, xe, Te; ue < Q; ) {
      if (B >= Ie) return -1;
      if (xe = X.charCodeAt(ue++), xe === 37) {
        if (xe = X.charAt(ue++), Te = b[xe in mx ? X.charAt(ue++) : xe], !Te || (B = Te(H, re, B)) < 0) return -1;
      } else if (xe != re.charCodeAt(B++))
        return -1;
    }
    return B;
  }
  function $(H, X, re) {
    var B = u.exec(X.slice(re));
    return B ? (H.p = c.get(B[0].toLowerCase()), re + B[0].length) : -1;
  }
  function O(H, X, re) {
    var B = f.exec(X.slice(re));
    return B ? (H.w = h.get(B[0].toLowerCase()), re + B[0].length) : -1;
  }
  function R(H, X, re) {
    var B = d.exec(X.slice(re));
    return B ? (H.w = p.get(B[0].toLowerCase()), re + B[0].length) : -1;
  }
  function w(H, X, re) {
    var B = y.exec(X.slice(re));
    return B ? (H.m = m.get(B[0].toLowerCase()), re + B[0].length) : -1;
  }
  function E(H, X, re) {
    var B = g.exec(X.slice(re));
    return B ? (H.m = x.get(B[0].toLowerCase()), re + B[0].length) : -1;
  }
  function T(H, X, re) {
    return I(H, t, X, re);
  }
  function P(H, X, re) {
    return I(H, n, X, re);
  }
  function _(H, X, re) {
    return I(H, r, X, re);
  }
  function N(H) {
    return s[H.getDay()];
  }
  function A(H) {
    return i[H.getDay()];
  }
  function D(H) {
    return l[H.getMonth()];
  }
  function z(H) {
    return a[H.getMonth()];
  }
  function U(H) {
    return o[+(H.getHours() >= 12)];
  }
  function W(H) {
    return 1 + ~~(H.getMonth() / 3);
  }
  function q(H) {
    return s[H.getUTCDay()];
  }
  function J(H) {
    return i[H.getUTCDay()];
  }
  function ae(H) {
    return l[H.getUTCMonth()];
  }
  function ee(H) {
    return a[H.getUTCMonth()];
  }
  function ne(H) {
    return o[+(H.getUTCHours() >= 12)];
  }
  function Z(H) {
    return 1 + ~~(H.getUTCMonth() / 3);
  }
  return {
    format: function(H) {
      var X = S(H += "", v);
      return X.toString = function() {
        return H;
      }, X;
    },
    parse: function(H) {
      var X = k(H += "", !1);
      return X.toString = function() {
        return H;
      }, X;
    },
    utcFormat: function(H) {
      var X = S(H += "", C);
      return X.toString = function() {
        return H;
      }, X;
    },
    utcParse: function(H) {
      var X = k(H += "", !0);
      return X.toString = function() {
        return H;
      }, X;
    }
  };
}
var mx = { "-": "", _: " ", 0: "0" }, kt = /^\s*\d+/, t$ = /^%/, n$ = /[\\^$*+?|[\]().{}]/g;
function _e(e, t, n) {
  var r = e < 0 ? "-" : "", o = (r ? -e : e) + "", i = o.length;
  return r + (i < n ? new Array(n - i + 1).join(t) + o : o);
}
function r$(e) {
  return e.replace(n$, "\\$&");
}
function Js(e) {
  return new RegExp("^(?:" + e.map(r$).join("|") + ")", "i");
}
function ea(e) {
  return new Map(e.map((t, n) => [t.toLowerCase(), n]));
}
function o$(e, t, n) {
  var r = kt.exec(t.slice(n, n + 1));
  return r ? (e.w = +r[0], n + r[0].length) : -1;
}
function i$(e, t, n) {
  var r = kt.exec(t.slice(n, n + 1));
  return r ? (e.u = +r[0], n + r[0].length) : -1;
}
function s$(e, t, n) {
  var r = kt.exec(t.slice(n, n + 2));
  return r ? (e.U = +r[0], n + r[0].length) : -1;
}
function a$(e, t, n) {
  var r = kt.exec(t.slice(n, n + 2));
  return r ? (e.V = +r[0], n + r[0].length) : -1;
}
function l$(e, t, n) {
  var r = kt.exec(t.slice(n, n + 2));
  return r ? (e.W = +r[0], n + r[0].length) : -1;
}
function yx(e, t, n) {
  var r = kt.exec(t.slice(n, n + 4));
  return r ? (e.y = +r[0], n + r[0].length) : -1;
}
function vx(e, t, n) {
  var r = kt.exec(t.slice(n, n + 2));
  return r ? (e.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), n + r[0].length) : -1;
}
function u$(e, t, n) {
  var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
  return r ? (e.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), n + r[0].length) : -1;
}
function c$(e, t, n) {
  var r = kt.exec(t.slice(n, n + 1));
  return r ? (e.q = r[0] * 3 - 3, n + r[0].length) : -1;
}
function d$(e, t, n) {
  var r = kt.exec(t.slice(n, n + 2));
  return r ? (e.m = r[0] - 1, n + r[0].length) : -1;
}
function xx(e, t, n) {
  var r = kt.exec(t.slice(n, n + 2));
  return r ? (e.d = +r[0], n + r[0].length) : -1;
}
function f$(e, t, n) {
  var r = kt.exec(t.slice(n, n + 3));
  return r ? (e.m = 0, e.d = +r[0], n + r[0].length) : -1;
}
function Cx(e, t, n) {
  var r = kt.exec(t.slice(n, n + 2));
  return r ? (e.H = +r[0], n + r[0].length) : -1;
}
function p$(e, t, n) {
  var r = kt.exec(t.slice(n, n + 2));
  return r ? (e.M = +r[0], n + r[0].length) : -1;
}
function h$(e, t, n) {
  var r = kt.exec(t.slice(n, n + 2));
  return r ? (e.S = +r[0], n + r[0].length) : -1;
}
function g$(e, t, n) {
  var r = kt.exec(t.slice(n, n + 3));
  return r ? (e.L = +r[0], n + r[0].length) : -1;
}
function m$(e, t, n) {
  var r = kt.exec(t.slice(n, n + 6));
  return r ? (e.L = Math.floor(r[0] / 1e3), n + r[0].length) : -1;
}
function y$(e, t, n) {
  var r = t$.exec(t.slice(n, n + 1));
  return r ? n + r[0].length : -1;
}
function v$(e, t, n) {
  var r = kt.exec(t.slice(n));
  return r ? (e.Q = +r[0], n + r[0].length) : -1;
}
function x$(e, t, n) {
  var r = kt.exec(t.slice(n));
  return r ? (e.s = +r[0], n + r[0].length) : -1;
}
function wx(e, t) {
  return _e(e.getDate(), t, 2);
}
function C$(e, t) {
  return _e(e.getHours(), t, 2);
}
function w$(e, t) {
  return _e(e.getHours() % 12 || 12, t, 2);
}
function S$(e, t) {
  return _e(1 + $l.count(Br(e), e), t, 3);
}
function US(e, t) {
  return _e(e.getMilliseconds(), t, 3);
}
function b$(e, t) {
  return US(e, t) + "000";
}
function k$(e, t) {
  return _e(e.getMonth() + 1, t, 2);
}
function I$(e, t) {
  return _e(e.getMinutes(), t, 2);
}
function T$(e, t) {
  return _e(e.getSeconds(), t, 2);
}
function P$(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function M$(e, t) {
  return _e(cf.count(Br(e) - 1, e), t, 2);
}
function HS(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? ds(e) : ds.ceil(e);
}
function E$(e, t) {
  return e = HS(e), _e(ds.count(Br(e), e) + (Br(e).getDay() === 4), t, 2);
}
function A$(e) {
  return e.getDay();
}
function R$(e, t) {
  return _e(Pc.count(Br(e) - 1, e), t, 2);
}
function _$(e, t) {
  return _e(e.getFullYear() % 100, t, 2);
}
function O$(e, t) {
  return e = HS(e), _e(e.getFullYear() % 100, t, 2);
}
function $$(e, t) {
  return _e(e.getFullYear() % 1e4, t, 4);
}
function L$(e, t) {
  var n = e.getDay();
  return e = n >= 4 || n === 0 ? ds(e) : ds.ceil(e), _e(e.getFullYear() % 1e4, t, 4);
}
function N$(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + _e(t / 60 | 0, "0", 2) + _e(t % 60, "0", 2);
}
function Sx(e, t) {
  return _e(e.getUTCDate(), t, 2);
}
function D$(e, t) {
  return _e(e.getUTCHours(), t, 2);
}
function z$(e, t) {
  return _e(e.getUTCHours() % 12 || 12, t, 2);
}
function F$(e, t) {
  return _e(1 + uf.count(Ur(e), e), t, 3);
}
function WS(e, t) {
  return _e(e.getUTCMilliseconds(), t, 3);
}
function B$(e, t) {
  return WS(e, t) + "000";
}
function U$(e, t) {
  return _e(e.getUTCMonth() + 1, t, 2);
}
function H$(e, t) {
  return _e(e.getUTCMinutes(), t, 2);
}
function W$(e, t) {
  return _e(e.getUTCSeconds(), t, 2);
}
function G$(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function V$(e, t) {
  return _e(df.count(Ur(e) - 1, e), t, 2);
}
function GS(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? fs(e) : fs.ceil(e);
}
function j$(e, t) {
  return e = GS(e), _e(fs.count(Ur(e), e) + (Ur(e).getUTCDay() === 4), t, 2);
}
function Y$(e) {
  return e.getUTCDay();
}
function K$(e, t) {
  return _e(Mc.count(Ur(e) - 1, e), t, 2);
}
function X$(e, t) {
  return _e(e.getUTCFullYear() % 100, t, 2);
}
function q$(e, t) {
  return e = GS(e), _e(e.getUTCFullYear() % 100, t, 2);
}
function Q$(e, t) {
  return _e(e.getUTCFullYear() % 1e4, t, 4);
}
function Z$(e, t) {
  var n = e.getUTCDay();
  return e = n >= 4 || n === 0 ? fs(e) : fs.ceil(e), _e(e.getUTCFullYear() % 1e4, t, 4);
}
function J$() {
  return "+0000";
}
function bx() {
  return "%";
}
function kx(e) {
  return +e;
}
function Ix(e) {
  return Math.floor(+e / 1e3);
}
var Ii, VS, jS;
eL({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function eL(e) {
  return Ii = e$(e), VS = Ii.format, Ii.parse, jS = Ii.utcFormat, Ii.utcParse, Ii;
}
function tL(e) {
  return new Date(e);
}
function nL(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function qm(e, t, n, r, o, i, s, a, l, u) {
  var c = OS(), d = c.invert, p = c.domain, f = u(".%L"), h = u(":%S"), g = u("%I:%M"), x = u("%I %p"), y = u("%a %d"), m = u("%b %d"), v = u("%B"), C = u("%Y");
  function b(S) {
    return (l(S) < S ? f : a(S) < S ? h : s(S) < S ? g : i(S) < S ? x : r(S) < S ? o(S) < S ? y : m : n(S) < S ? v : C)(S);
  }
  return c.invert = function(S) {
    return new Date(d(S));
  }, c.domain = function(S) {
    return arguments.length ? p(Array.from(S, nL)) : p().map(tL);
  }, c.ticks = function(S) {
    var k = p();
    return e(k[0], k[k.length - 1], S ?? 10);
  }, c.tickFormat = function(S, k) {
    return k == null ? b : u(k);
  }, c.nice = function(S) {
    var k = p();
    return (!S || typeof S.range != "function") && (S = t(k[0], k[k.length - 1], S ?? 10)), S ? p(LS(k, S)) : c;
  }, c.copy = function() {
    return Ol(c, qm(e, t, n, r, o, i, s, a, l, u));
  }, c;
}
function YS() {
  return ko.apply(qm(ZO, JO, Br, Km, cf, $l, jm, Gm, Yo, VS).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function rL() {
  return ko.apply(qm(qO, QO, Ur, Xm, df, uf, Ym, Vm, Yo, jS).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
function Qm() {
  var e = 0, t = 1, n, r, o, i, s = En, a = !1, l;
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
  return u.range = c(sf), u.rangeRound = c(_S), u.unknown = function(d) {
    return arguments.length ? (l = d, u) : l;
  }, function(d) {
    return i = d, n = d(e), r = d(t), o = n === r ? 0 : 1 / (r - n), u;
  };
}
function Zm(e, t) {
  return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown());
}
function Ec() {
  var e = lf(Qm()(En));
  return e.copy = function() {
    return Zm(e, Ec());
  }, Om.apply(e, arguments);
}
function KS() {
  var e = NS(Qm()).domain([1, 10]);
  return e.copy = function() {
    return Zm(e, KS()).base(e.base());
  }, Om.apply(e, arguments);
}
function XS() {
  var e = zS(Qm());
  return e.copy = function() {
    return Zm(e, XS()).exponent(e.exponent());
  }, Om.apply(e, arguments);
}
function oL() {
  return XS.apply(null, arguments).exponent(0.5);
}
function Tx(e) {
  return Array.isArray(e) ? JSON.stringify(e) : typeof e == "object" && e !== null ? e.valueOf() : e;
}
function qS(e) {
  let t = e ? e.index : new xc(void 0, Tx), n = e ? e.domain : [], r = e ? e.r0 : 0, o = e ? e.r1 : 1, i = e ? e.isRound : !1, s = e ? e.paddingInner : 0, a = e ? e.paddingOuter : 0, l = e ? e.align : 0.5, u, c, d = !1, p = 0;
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
    n = [], t = new xc(void 0, Tx);
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
  }, f.copy = () => qS({
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
function ff(...e) {
  const t = qS(), [n, r] = e;
  return e.length > 1 ? (t.domain(n), t.range(r)) : n && t.range(n), t;
}
function Jm(...e) {
  const t = ff(...e).paddingInner(1), n = t.copy;
  return t.padding = t.paddingOuter, delete t.paddingInner, delete t.paddingOuter, t.copy = () => {
    const r = n();
    return r.padding = r.paddingOuter, delete r.paddingInner, delete r.paddingOuter, r.copy = t.copy, r;
  }, t;
}
function QS(...e) {
  const t = DS(...e), n = t.ticks, {
    negativeScale: r,
    linearScale: o,
    positiveScale: i
  } = iL(t);
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
    const l = t.constant(), [u, c] = t.domain(), d = c - u, p = r.domain(), f = p[1] - p[0], g = (d === 0 ? 0 : f / d) * s, x = o.domain(), y = x[1] - x[0], v = (d === 0 ? 0 : y / d) * s, C = i.domain(), b = C[1] - C[0], k = (d === 0 ? 0 : b / d) * s, I = r.tickFormat(g, a), $ = o.tickFormat(v, a), O = i.tickFormat(k, a);
    return (R) => /* eslint-disable-next-line no-nested-ternary */ (R.valueOf() <= -l ? I : R.valueOf() >= l ? O : $)(R);
  }, t.copy = () => QS(t.domain(), t.range()).constant(t.constant()), t;
}
function iL(e) {
  const t = e.constant(), n = e.domain(), r = [n[0], Math.min(n[1], -t)], o = Ic(r, e.range()), i = [Math.max(n[0], -t), Math.min(n[1], t)], s = Bm(i, e.range()), a = [Math.max(n[0], t), n[1]], l = Ic(a, e.range());
  return {
    negativeScale: o,
    linearScale: s,
    positiveScale: l
  };
}
function Ll(e, t, n) {
  switch (e) {
    case "log":
      return Ic(t, n);
    case "pow":
      return Um(t, n);
    case "sqrt":
      return UO(t, n);
    case "time":
      return YS(t, n);
    case "utc":
      return rL(t, n);
    case "symlog":
      return QS(t, n);
    default:
      return Bm(t, n);
  }
}
const ZS = 4, Ac = 20, JS = 6, Oh = 2, sL = 4;
function aL(e) {
  return "groups" in e && Array.isArray(e.groups) && e.groups.length > 0;
}
function lL(e, t) {
  const n = /* @__PURE__ */ new Set();
  for (let r = 0; r < e.length; r += 1) {
    const o = e[r], i = t.getValue(o, r);
    n.add(`${i}`);
  }
  return Array.from(n);
}
const Ap = 5;
function Px(e) {
  const t = e.split(`
`);
  return Math.max(...t.map((n) => PS(n)));
}
function eb(e) {
  if (e.length <= Ap)
    return e;
  const t = [];
  let n = 1, r = null;
  for (const o of e) {
    const i = o.split(`
`).length;
    i > n && (n = i, r = o);
    const s = Px(o);
    if (t.length < Ap || s > t[0].length) {
      const a = t.findIndex((l) => l.length > s);
      t.splice(a === -1 ? t.length : a, 0, {
        label: o,
        length: s
      }), t.length > Ap && t.shift();
    }
  }
  return r !== null && t.find((o) => o.label === r) === void 0 && t.push({
    label: r,
    length: Px(r)
  }), t.map((o) => o.label);
}
function uL(e, t) {
  const {
    valueFormatter: n,
    scaleType: r,
    data: o
  } = e;
  if (r === "band" || r === "point") {
    if (!o || o.length === 0)
      return [];
    const p = r === "band" ? ff(o, [0, 1]) : Jm(o, [0, 1]), f = o.map((h) => n ? n(h, {
      location: "tick",
      scale: p,
      defaultTickLabel: `${h}`
    }) : `${h}`);
    return eb(f);
  }
  const i = t ? t.domain[0] : 0, s = t ? t.domain[1] : 100, a = (t == null ? void 0 : t.tickNumber) ?? 2, u = Ll(r ?? "linear", [i, s], [0, 1]), c = i === s ? [i] : [i, s], d = u.tickFormat(a);
  return c.map((p) => {
    const f = d(p);
    return n ? n(p, {
      location: "tick",
      scale: u,
      defaultTickLabel: f
    }) : f;
  });
}
function tb(e, t) {
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
  const r = bS(n, t);
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
function nb(e, t, n, r) {
  if (!n || n % 180 === 0)
    return r === "x" ? t : e;
  if (n % 90 === 0)
    return r === "x" ? e : t;
  const o = io(Math.abs(n)), i = Math.cos(o), s = Math.sin(o);
  return r === "x" ? Math.abs(e * s) + Math.abs(t * i) : Math.abs(e * i) + Math.abs(t * s);
}
function cL(e, t) {
  const {
    groups: n,
    data: r,
    tickSize: o,
    tickLabelStyle: i
  } = e, s = !!e.label;
  if (!r || r.length === 0)
    return {
      size: Ac
    };
  const a = [], l = [], u = o ?? JS;
  for (let f = 0; f < n.length; f += 1) {
    const h = n[f], g = eb(lL(r, h)), x = L({}, i, h.tickLabelStyle), y = x == null ? void 0 : x.angle, {
      maxWidth: m,
      maxHeight: v
    } = tb(g, x);
    if (m === 0 && v === 0)
      return;
    const C = nb(m, v, y, t);
    l.push(C);
    const b = h.tickSize;
    if (b !== void 0)
      a.push(b);
    else if (f === 0)
      a.push(u);
    else {
      const S = a[f - 1] + Oh + l[f - 1] + sL;
      a.push(S + u);
    }
  }
  const c = n.length - 1;
  let d = a[c] + Oh + l[c];
  return s && (d += di), d += ZS, {
    size: Math.max(Math.ceil(d), Ac),
    groupTickSizes: a
  };
}
function rb(e) {
  const {
    axis: t,
    direction: n,
    domain: r
  } = e;
  if (aL(t))
    return cL(t, n);
  const o = t.tickLabelStyle, i = t.tickSize ?? JS, s = !!t.label, a = o == null ? void 0 : o.angle, l = uL(t, r);
  if (l.length === 0)
    return {
      size: Ac
    };
  const {
    maxWidth: u,
    maxHeight: c
  } = tb(l, o);
  if (u === 0 && c === 0)
    return;
  const d = nb(u, c, a, n);
  let p = i + Oh + d;
  return s && (p += di), p += ZS, {
    size: Math.max(Math.ceil(p), Ac)
  };
}
const ob = ({
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
      throw new Error(Me(34, u));
    if (o[s.type].series[u] = l, o[s.type].seriesOrder.push(u), i.has(u))
      throw new Error(Me(35, u));
    i.set(u, s.type);
  }), {
    defaultizedSeries: o,
    idToType: i
  };
}, dL = (e, t, n, r) => {
  const o = {};
  return Object.keys(t).forEach((i) => {
    var a, l;
    const s = e[i];
    s !== void 0 && (o[i] = ((l = (a = t[i]) == null ? void 0 : a.seriesProcessor) == null ? void 0 : l.call(a, s, n, r)) ?? s);
  }), o;
}, fL = (e, t, n) => {
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
}, e0 = (e, t) => {
  var r;
  const n = (r = e[t.type]) == null ? void 0 : r.identifierSerializer;
  if (!n)
    throw new Error(Me(43, t.type));
  return n(t);
}, ib = (e, t) => {
  var r;
  const n = (r = e[t.type]) == null ? void 0 : r.identifierCleaner;
  if (!n)
    throw new Error(Me(42, t.type));
  return n(t);
}, pf = ({
  store: e
}) => {
  const t = ge((r) => e0(e.state.seriesConfig.config, r)), n = ge(function(o) {
    return ib(e.state.seriesConfig.config, o);
  });
  return {
    instance: {
      serializeIdentifier: t,
      cleanIdentifier: n
    }
  };
};
pf.params = {
  seriesConfig: !0
};
pf.getDefaultizedParams = ({
  params: e
}) => L({}, e, {
  seriesConfig: e.seriesConfig ?? {}
});
pf.getInitialState = ({
  seriesConfig: e
}) => ({
  seriesConfig: {
    config: e
  }
});
const pL = (e) => e.seriesConfig, lt = j(pL, (e) => e.config), hL = (e) => e.visibilityManager, sb = /* @__PURE__ */ new Map(), gL = j(hL, (e) => (e == null ? void 0 : e.visibilityMap) ?? sb), mL = (e, t) => (n) => {
  const r = e0(t, n);
  return !e.has(r);
}, t0 = de(gL, lt, mL), ab = (e, t) => {
  const n = /* @__PURE__ */ new Map();
  return e && e.forEach((r) => {
    const o = e0(t, r);
    n.set(o, r);
  }), n;
}, yL = ["#4254FB", "#FFB422", "#FA4F58", "#0DBEFF", "#22BF75", "#FA83B4", "#FF7511"], vL = ["#495AFB", "#FFC758", "#F35865", "#30C8FF", "#44CE8D", "#F286B3", "#FF8C39"], lb = (e) => e === "dark" ? vL : yL;
function hf(e) {
  function t(n) {
    if (n.type !== void 0)
      return n;
    const r = e.series.idToType.get(n.seriesId);
    if (r === void 0)
      throw new Error(Me(36, n.seriesId));
    return L({}, n, {
      type: r
    });
  }
  return t;
}
const gf = ({
  params: e,
  store: t
}) => {
  const {
    series: n,
    dataset: r,
    theme: o,
    colors: i
  } = e;
  return Tm(() => {
    const {
      defaultizedSeries: a,
      idToType: l
    } = ob({
      series: n,
      colors: typeof i == "function" ? i(o) : i,
      theme: o,
      seriesConfig: t.state.seriesConfig.config
    });
    t.set("series", L({}, t.state.series, {
      defaultizedSeries: a,
      idToType: l,
      dataset: r
    }));
  }, [i, r, n, o, t]), {
    instance: {
      identifierWithType: hf(t.state)
    }
  };
};
gf.params = {
  dataset: !0,
  series: !0,
  colors: !0,
  theme: !0
};
const xL = [];
gf.getDefaultizedParams = ({
  params: e
}) => {
  var t;
  return L({}, e, {
    series: (t = e.series) != null && t.length ? e.series : xL,
    colors: e.colors ?? lb,
    theme: e.theme ?? "light"
  });
};
gf.getInitialState = ({
  series: e = [],
  colors: t,
  theme: n,
  dataset: r
}, o) => {
  const i = o.seriesConfig.config, {
    defaultizedSeries: s,
    idToType: a
  } = ob({
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
const mf = ({
  store: e,
  params: t,
  instance: n
}) => {
  Tm(() => {
    t.hiddenItems !== void 0 && e.set("visibilityManager", L({}, e.state.visibilityManager, {
      visibilityMap: ab(t.hiddenItems.map((s) => n.identifierWithType(s, "visibility")), e.state.seriesConfig.config)
    }));
  }, [e, n, t.hiddenItems]);
  const r = ge((s) => {
    var p;
    const a = e.state.visibilityManager.visibilityMap, l = n.identifierWithType(s, "visibility"), u = n.serializeIdentifier(l);
    if (a.has(u))
      return;
    const c = new Map(a);
    c.set(u, l), e.set("visibilityManager", L({}, e.state.visibilityManager, {
      visibilityMap: c
    }));
    const d = Array.from(c.values());
    (p = t.onHiddenItemsChange) == null || p.call(t, d);
  }), o = ge((s) => {
    var d;
    const a = e.state.visibilityManager.visibilityMap, l = n.identifierWithType(s, "visibility"), u = n.serializeIdentifier(l);
    if (!a.has(u))
      return;
    const c = new Map(a);
    c.delete(u), e.set("visibilityManager", L({}, e.state.visibilityManager, {
      visibilityMap: c
    })), (d = t.onHiddenItemsChange) == null || d.call(t, Array.from(c.values()));
  }), i = ge((s) => {
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
mf.getInitialState = (e, t) => {
  const n = t.seriesConfig.config, r = e.hiddenItems ?? e.initialHiddenItems;
  return {
    visibilityManager: {
      visibilityMap: r ? ab(r.map((o) => hf(t)(o)), n) : sb,
      isControlled: e.hiddenItems !== void 0
    }
  };
};
mf.params = {
  onHiddenItemsChange: !0,
  hiddenItems: !0,
  initialHiddenItems: !0
};
const ub = (e) => e.series, cb = j(ub, (e) => e.defaultizedSeries), CL = j(ub, (e) => e.dataset), Ae = de(cb, lt, CL, t0, function(t, n, r, o) {
  return dL(t, n, r, o);
}), wL = de(lt, Ae, (e, t) => function(r) {
  for (const o in t) {
    if (!Object.hasOwn(t, o))
      continue;
    const i = t[o];
    if (i != null && i.series && i.series[r])
      return e[o];
  }
  return null;
});
function Io(e) {
  return e.scaleType === "band";
}
function To(e) {
  return e.scaleType === "point";
}
function SL(e) {
  return e.scaleType !== "point" && e.scaleType !== "band";
}
function bL(e) {
  return e.scaleType === "symlog";
}
let Mx, Ex;
class kL {
  constructor() {
    pe(this, "types", /* @__PURE__ */ new Set());
    if (Mx)
      throw new Error(Me(24));
    Mx = this.types;
  }
  addType(t) {
    this.types.add(t);
  }
  getTypes() {
    return this.types;
  }
}
class IL {
  constructor() {
    pe(this, "types", /* @__PURE__ */ new Set());
    if (Ex)
      throw new Error(Me(25));
    Ex = this.types;
  }
  addType(t) {
    this.types.add(t);
  }
  getTypes() {
    return this.types;
  }
}
const yf = new kL();
yf.addType("bar");
yf.addType("line");
yf.addType("scatter");
const db = new IL();
db.addType("radar");
function n0(e) {
  return yf.getTypes().has(e);
}
function Za(e) {
  return n0(e.type);
}
const TL = (e, t, n, r, o, i, s) => {
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
function vf(e, t, n, r, o, i) {
  const s = Object.keys(n).filter(n0);
  let a = [1 / 0, -1 / 0];
  for (const l of s) {
    const [u, c] = TL(l, e, t, n, r, o, i);
    a = [Math.min(a[0], u), Math.max(a[1], c)];
  }
  return Number.isNaN(a[0]) || Number.isNaN(a[1]) ? [1 / 0, -1 / 0] : a;
}
const fb = {}, pb = de(Hn, Ae, lt, function(t, n, r) {
  const o = {};
  let i = !1;
  return t == null || t.forEach((s, a) => {
    !Io(s) && !To(s) && (o[s.id] = vf(s, "x", r, a, n), i = !0);
  }), i ? o : fb;
}), hb = de(er, Ae, lt, function(t, n, r) {
  const o = {};
  let i = !1;
  return t == null || t.forEach((s, a) => {
    !Io(s) && !To(s) && (o[s.id] = vf(s, "y", r, a, n), i = !0);
  }), i ? o : fb;
}), gb = (e, t, n, r) => {
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
function r0(e, t, n) {
  const {
    tickMaxStep: r,
    tickMinStep: o,
    tickNumber: i
  } = e, s = o === void 0 ? 999 : Math.floor(Math.abs(t[1] - t[0]) / o), a = r === void 0 ? 2 : Math.ceil(Math.abs(t[1] - t[0]) / r);
  return Math.min(s, Math.max(a, i ?? n));
}
function PL(e, t) {
  return t[1] - t[0] === 0 ? 1 : e / ((t[1] - t[0]) / 100);
}
function o0(e) {
  return Math.floor(Math.abs(e) / 50);
}
function mb(e, t, n) {
  return Ll(e ?? "linear", t, [0, 1]).nice(n).domain();
}
function ML(e, t, n, r, [o, i], s) {
  const a = gb(e, t, n, r);
  let l = vb(e, o, i);
  if (typeof a == "function") {
    const {
      min: c,
      max: d
    } = a(o.valueOf(), i.valueOf());
    l[0] = c, l[1] = d;
  }
  const u = r0(e, l, s);
  return a === "nice" && (l = mb(e.scaleType, l, u)), l = ["min" in e ? e.min ?? l[0] : l[0], "max" in e ? e.max ?? l[1] : l[1]], {
    domain: l,
    tickNumber: u
  };
}
function yb(e, t, n, r, [o, i], s) {
  const a = gb(e, t, n, r);
  let l = vb(e, o, i);
  if (typeof a == "function") {
    const {
      min: u,
      max: c
    } = a(o.valueOf(), i.valueOf());
    l[0] = u, l[1] = c;
  }
  return a === "nice" && (l = mb(e.scaleType, l, s)), [e.min ?? l[0], e.max ?? l[1]];
}
function vb(e, t, n) {
  let r = t, o = n;
  return "max" in e && e.max != null && e.max < t && (r = e.max), "min" in e && e.min != null && e.min > n && (o = e.min), !("min" in e) && !("max" in e) ? [r, o] : [e.min ?? r, e.max ?? o];
}
function xf(e, t, n, r, o) {
  const i = {};
  return e == null || e.forEach((s, a) => {
    var c, d;
    const l = s;
    if (Io(l) || To(l)) {
      i[l.id] = {
        domain: l.data
      }, l.ordinalTimeTicks !== void 0 && (i[l.id].tickNumber = r0(l, [(c = l.data) == null ? void 0 : c.find((p) => p !== null), (d = l.data) == null ? void 0 : d.findLast((p) => p !== null)], n));
      return;
    }
    const u = r[l.id];
    u && (i[l.id] = ML(l, o, a, t, u, n));
  }), i;
}
const xb = 8, Cb = {}, EL = de(Hn, Ae, pb, function(t, n, r) {
  const o = xf(t, n, xb, r, "x");
  return Object.keys(o).length > 0 ? o : Cb;
}), AL = de(er, Ae, hb, function(t, n, r) {
  const o = xf(t, n, xb, r, "y");
  return Object.keys(o).length > 0 ? o : Cb;
}), wb = (e) => e.dimensions.width && e.dimensions.height, Sb = {}, Cf = {}, bb = de(Hn, wb, EL, function(t, n, r) {
  if (!(t == null ? void 0 : t.some((s) => s.height === "auto")) || !n)
    return Cf;
  const i = {};
  for (let s = 0; s < ((t == null ? void 0 : t.length) ?? 0); s += 1) {
    const a = t[s];
    if (a.height === "auto") {
      const l = rb({
        axis: a,
        direction: "x",
        domain: r[a.id]
      });
      l !== void 0 && (i[a.id] = l);
    }
  }
  return i;
}), i0 = de(bb, function(t) {
  if (t === Cf)
    return Sb;
  const n = {};
  for (const [r, o] of Object.entries(t))
    n[r] = o.size;
  return n;
}), kb = de(er, wb, AL, function(t, n, r) {
  if (!(t == null ? void 0 : t.some((s) => s.width === "auto")) || !n)
    return Cf;
  const i = {};
  for (let s = 0; s < ((t == null ? void 0 : t.length) ?? 0); s += 1) {
    const a = t[s];
    if (a.width === "auto") {
      const l = rb({
        axis: a,
        direction: "y",
        domain: r[a.id]
      });
      l !== void 0 && (i[a.id] = l);
    }
  }
  return i;
}), s0 = de(kb, function(t) {
  if (t === Cf)
    return Sb;
  const n = {};
  for (const [r, o] of Object.entries(t))
    n[r] = o.size;
  return n;
});
function RL(e) {
  return Em + (e.label ? di : 0);
}
function _L(e) {
  return Mm + (e.label ? di : 0);
}
function Ib(e, t, n, r) {
  var s;
  let o = 0, i = 0;
  for (const a of e ?? []) {
    if (a.position !== n)
      continue;
    let l;
    a.height === "auto" ? l = r[a.id] ?? RL(a) : l = a.height ?? 0, o += l + ((s = a.zoom) != null && s.slider.enabled ? a.zoom.slider.size : 0), i += 1;
  }
  return o + t * Math.max(0, i - 1);
}
function Tb(e, t, n, r) {
  var s;
  let o = 0, i = 0;
  for (const a of e ?? []) {
    if (a.position !== n)
      continue;
    let l;
    a.width === "auto" ? l = r[a.id] ?? _L(a) : l = a.width ?? 0, o += l + ((s = a.zoom) != null && s.slider.enabled ? a.zoom.slider.size : 0), i += 1;
  }
  return o + t * Math.max(0, i - 1);
}
const OL = j(er, Ds, s0, function(t, n, r) {
  return Tb(t, n, "left", r);
}), $L = j(er, Ds, s0, function(t, n, r) {
  return Tb(t, n, "right", r);
}), LL = j(Hn, Ds, i0, function(t, n, r) {
  return Ib(t, n, "top", r);
}), NL = j(Hn, Ds, i0, function(t, n, r) {
  return Ib(t, n, "bottom", r);
}), DL = de(OL, $L, LL, NL, function(t, n, r, o) {
  return {
    left: t,
    right: n,
    top: r,
    bottom: o
  };
}), Nl = (e) => e.dimensions, zL = (e) => e.dimensions.margin, dn = de(Nl, zL, DL, function({
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
}), FL = j(Nl, (e) => e.width), BL = j(Nl, (e) => e.height), Pb = j(Nl, (e) => e.propsWidth), Mb = j(Nl, (e) => e.propsHeight);
function UL(e, t) {
  return typeof e == "number" ? {
    top: e,
    bottom: e,
    left: e,
    right: e
  } : t ? L({}, t, e) : e;
}
const HL = 10, wf = ({
  params: e,
  store: t,
  instance: n
}) => {
  const {
    chartsLayerContainerRef: r
  } = n, o = e.width !== void 0 && e.height !== void 0, i = V({
    displayError: !1,
    initialCompute: !0,
    computeRun: 0
  }), [s, a] = Le(0), [l, u] = Le(0), c = le(() => {
    const g = r == null ? void 0 : r.current;
    if (!g)
      return {};
    const y = vr(g).getComputedStyle(g), m = Math.floor(parseFloat(y.height)) || 0, v = Math.floor(parseFloat(y.width)) || 0;
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
  Tm(() => {
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
  ]), fe(() => {
    i.current.displayError = !0;
  }, []), we(() => {
    if (o || !i.current.initialCompute || i.current.computeRun > HL)
      return;
    const g = c();
    g.width !== s || g.height !== l ? (i.current.computeRun += 1, g.width !== void 0 && a(g.width), g.height !== void 0 && u(g.height)) : i.current.initialCompute && (i.current.initialCompute = !1);
  }, [l, s, c, o]), we(() => {
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
  const d = t.use(dn), p = le((g) => g >= d.left - 1 && g <= d.left + d.width, [d.left, d.width]), f = le((g) => g >= d.top - 1 && g <= d.top + d.height, [d.height, d.top]);
  return {
    instance: {
      isPointInside: le((g, x, y) => y && "closest" in y && y.closest("[data-drawing-container]") ? !0 : p(g) && f(x), [p, f]),
      isXInside: p,
      isYInside: f
    }
  };
};
wf.params = {
  width: !0,
  height: !0,
  margin: !0
};
wf.getDefaultizedParams = ({
  params: e
}) => L({}, e, {
  margin: UL(e.margin, $_)
});
wf.getInitialState = ({
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
const Eb = () => {
  const e = V(null), t = V(null);
  return {
    instance: {
      chartsLayerContainerRef: e,
      chartRootRef: t
    }
  };
};
Eb.params = {};
const a0 = ({
  params: e,
  store: t
}) => (we(() => {
  t.set("experimentalFeatures", e.experimentalFeatures);
}, [t, e.experimentalFeatures]), {});
a0.params = {
  experimentalFeatures: !0
};
a0.getInitialState = ({
  experimentalFeatures: e
}) => ({
  experimentalFeatures: e
});
const Dl = (e, t) => {
  var n;
  return (n = e.experimentalFeatures) == null ? void 0 : n[t];
};
let Ax = 0;
const WL = () => (Ax += 1, `mui-chart-${Ax}`), l0 = ({
  params: e,
  store: t
}) => (fe(() => {
  e.id === void 0 || e.id === t.state.id.providedChartId && t.state.id.chartId !== void 0 || t.set("id", L({}, t.state.id, {
    chartId: e.id ?? WL()
  }));
}, [t, e.id]), {});
l0.params = {
  id: !0
};
l0.getInitialState = ({
  id: e
}) => ({
  id: {
    chartId: e,
    providedChartId: e
  }
});
const GL = (e) => e.id, VL = j(GL, (e) => e.chartId), jL = de(Ae, lt, dn, function(t, n, r) {
  return fL(t, n, r);
});
function Rx(e, ...t) {
  const n = new URL("https://mui.com/x/production-error");
  return n.searchParams.set("code", e.toString()), t.forEach((r) => n.searchParams.append("args[]", r)), `MUI X error #${e}; visit ${n} for the full message.`;
}
const YL = {
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
class KL {
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
    pe(this, "customData", {});
    /**
     * Handle option change events
     * @param event Custom event with new options in the detail property
     */
    pe(this, "handleOptionsChange", (t) => {
      t && t.detail && this.updateOptions(t.detail);
    });
    /**
     * Handle state change events
     * @param event Custom event with new state values in the detail property
     */
    pe(this, "handleStateChange", (t) => {
      t && t.detail && this.updateState(t.detail);
    });
    if (!t || !t.name)
      throw new Error(Rx(164));
    if (t.name in YL)
      throw new Error(Rx(165, t.name));
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
    return r ? L({}, n, r) : n;
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
class XL {
  constructor() {
    /** Map of elements to their active gestures */
    pe(this, "activeGestures", /* @__PURE__ */ new Map());
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
function qL() {
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
  userAgent: QL,
  platform: ZL,
  maxTouchPoints: JL
} = qL(), eN = QL.toLowerCase(), Ja = ZL.toLowerCase(), Ab = /^i(os$|p)/.test(Ja) || Ja === "macintel" && JL > 1, _x = "android";
Ja === _x || eN.includes(_x);
const tN = !Ab && Ja.startsWith("mac");
Ja.startsWith("win");
const nN = tN || Ab;
class rN {
  /**
   * Create a new KeyboardManager instance
   */
  constructor() {
    pe(this, "pressedKeys", /* @__PURE__ */ new Set());
    /**
     * Handle keydown events
     */
    pe(this, "handleKeyDown", (t) => {
      this.pressedKeys.add(t.key);
    });
    /**
     * Handle keyup events
     */
    pe(this, "handleKeyUp", (t) => {
      this.pressedKeys.delete(t.key);
    });
    /**
     * Clear all pressed keys
     */
    pe(this, "clearKeys", () => {
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
    return !t || t.length === 0 ? !0 : t.every((n) => n === "ControlOrMeta" ? nN ? this.pressedKeys.has("Meta") : this.pressedKeys.has("Control") : this.pressedKeys.has(n));
  }
  /**
   * Cleanup method to remove event listeners
   */
  destroy() {
    typeof window < "u" && (window.removeEventListener("keydown", this.handleKeyDown), window.removeEventListener("keyup", this.handleKeyUp), window.removeEventListener("blur", this.clearKeys)), this.clearKeys();
  }
}
class oN {
  constructor(t) {
    /** Root element where pointer events are captured */
    /** CSS touch-action property value applied to the root element */
    /** Whether to use passive event listeners */
    /** Whether to prevent interrupt events like blur or contextmenu */
    pe(this, "preventEventInterruption", !0);
    /** Map of all currently active pointers by their pointerId */
    pe(this, "pointers", /* @__PURE__ */ new Map());
    /** Set of registered gesture handlers that receive pointer events */
    pe(this, "gestureHandlers", /* @__PURE__ */ new Set());
    /**
     * Handle events that should interrupt all gestures.
     * This clears all active pointers and notifies handlers with a pointercancel-like event.
     *
     * @param event - The event that triggered the interruption (blur or contextmenu)
     */
    pe(this, "handleInterruptEvents", (t) => {
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
          const s = L({}, i, {
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
    pe(this, "handlePointerEvent", (t) => {
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
class iN {
  /**
   * Create a new GestureManager instance to coordinate gesture recognition
   *
   * @param options - Configuration options for the gesture manager
   */
  constructor(t) {
    /** Repository of gesture templates that can be cloned for specific elements */
    pe(this, "gestureTemplates", /* @__PURE__ */ new Map());
    /** Maps DOM elements to their active gesture instances */
    pe(this, "elementGestureMap", /* @__PURE__ */ new Map());
    pe(this, "activeGesturesRegistry", new XL());
    pe(this, "keyboardManager", new rN());
    this.pointerManager = new oN({
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
class Sf extends KL {
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
    pe(this, "unregisterHandler", null);
    /** The original target element when the gesture began, used to prevent limbo state if target is removed */
    pe(this, "originalTarget", null);
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
function _r(e) {
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
function bf(e, t) {
  return `${e}${t === "ongoing" ? "" : t.charAt(0).toUpperCase() + t.slice(1)}`;
}
const hu = 1e-5, Qr = 1e-5, Ox = 0.15;
function sN(e, t) {
  const n = t.x - e.x, r = t.y - e.y, o = {
    vertical: null,
    horizontal: null,
    mainAxis: null
  }, i = aN(t, e), s = Math.abs(n) > Math.abs(r) ? "horizontal" : "vertical", a = i || s === "horizontal" ? hu : Ox, l = i ? hu : s === "horizontal" ? Ox : hu;
  return Math.abs(n) > a && (o.horizontal = n > 0 ? "right" : "left"), Math.abs(r) > l && (o.vertical = r > 0 ? "down" : "up"), o.mainAxis = i ? "diagonal" : s, o;
}
function aN(e, t) {
  const n = t.x - e.x, r = t.y - e.y, o = Math.atan2(r, n) * 180 / Math.PI;
  return o >= -45 + Qr && o <= -22.5 + Qr || o >= 22.5 + Qr && o <= 45 + Qr || o >= 135 + Qr && o <= 157.5 + Qr || o >= -157.5 + Qr && o <= -135 + Qr;
}
function lN(e, t) {
  if (!e.vertical && !e.horizontal)
    return !1;
  if (t.length === 0)
    return !0;
  const n = e.vertical === null || t.includes(e.vertical), r = e.horizontal === null || t.includes(e.horizontal);
  return n && r;
}
class u0 extends Sf {
  /**
   * Movement threshold in pixels that must be exceeded before the gesture activates.
   * Higher values reduce false positive gesture detection for small movements.
   */
  constructor(n) {
    super(n);
    pe(this, "state", {
      lastPosition: null
    });
    /**
     * Handle pointer enter events for a specific element
     * @param event The original pointer event
     */
    pe(this, "handleElementEnter", (n) => {
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
    pe(this, "handleElementLeave", (n) => {
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
    pe(this, "handlePointerEvent", (n, r) => {
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
    return new u0(L({
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
    const s = this.state.lastPosition || _r(o), a = this.gesturesRegistry.getActiveGestures(n), l = {
      gestureName: this.name,
      centroid: s,
      target: i.target,
      srcEvent: i,
      phase: r,
      pointers: o,
      timeStamp: i.timeStamp,
      activeGestures: a,
      customData: this.customData
    }, u = bf(this.name, r), c = new CustomEvent(u, {
      bubbles: !0,
      cancelable: !0,
      composed: !0,
      detail: l
    });
    n.dispatchEvent(c);
  }
}
class Rc extends Sf {
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
    pe(this, "state", {
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
    pe(this, "handlePointerEvent", (n, r) => {
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
            }), this.originalTarget = i, this.state.startCentroid = _r(s), this.state.lastCentroid = L({}, this.state.startCentroid);
          else if (this.state.startCentroid && this.state.lastCentroid) {
            const l = this.state.lastCentroid, u = _r(s), c = u.x - l.x, d = u.y - l.y;
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
            const l = _r(s), u = l.x - this.state.startCentroid.x, c = l.y - this.state.startCentroid.y, d = Math.sqrt(u * u + c * c), p = sN(this.state.lastCentroid ?? this.state.startCentroid, l), f = this.state.lastCentroid ? l.x - this.state.lastCentroid.x : 0, h = this.state.lastCentroid ? l.y - this.state.lastCentroid.y : 0;
            !this.state.movementThresholdReached && d >= this.threshold && lN(p, this.direction) ? (this.state.movementThresholdReached = !0, this.isActive = !0, this.state.lastDeltas = {
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
                const u = _r(l), c = u.x - this.state.lastCentroid.x, d = u.y - this.state.lastCentroid.y;
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
    return new Rc(L({
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
    this.isActive = !1, this.state = L({}, this.state, {
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
    }, x = bf(this.name, r), y = new CustomEvent(x, {
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
class c0 extends Sf {
  /**
   * Duration in milliseconds required to hold before the press gesture is recognized
   */
  /**
   * Maximum distance a pointer can move for a gesture to still be considered a press
   */
  constructor(n) {
    super(n);
    pe(this, "state", {
      startCentroid: null,
      lastPosition: null,
      timerId: null,
      startTime: 0,
      pressThresholdReached: !1
    });
    /**
     * Handle pointer events for the press gesture
     */
    pe(this, "handlePointerEvent", (n, r) => {
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
          !this.isActive && !this.state.startCentroid && (this.state.startCentroid = _r(s), this.state.lastPosition = L({}, this.state.startCentroid), this.state.startTime = r.timeStamp, this.isActive = !0, this.originalTarget = i, this.clearPressTimer(), this.state.timerId = setTimeout(() => {
            if (this.isActive && this.state.startCentroid) {
              this.state.pressThresholdReached = !0;
              const a = this.state.lastPosition;
              this.emitPressEvent(i, "start", s, r, a), this.emitPressEvent(i, "ongoing", s, r, a);
            }
          }, this.duration));
          break;
        case "pointermove":
          if (this.isActive && this.state.startCentroid) {
            const a = _r(s);
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
    return new c0(L({
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
    this.clearPressTimer(), this.isActive = !1, this.state = L({}, this.state, {
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
    }, c = bf(this.name, r), d = new CustomEvent(c, {
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
class d0 extends Sf {
  /**
   * Maximum distance a pointer can move for a gesture to still be considered a tap
   */
  /**
   * Number of consecutive taps to detect
   */
  constructor(n) {
    super(n);
    pe(this, "state", {
      startCentroid: null,
      currentTapCount: 0,
      lastTapTime: 0,
      lastPosition: null,
      multiTapResetTimeoutId: null
    });
    /**
     * Handle pointer events for the tap gesture
     */
    pe(this, "handlePointerEvent", (n, r) => {
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
          this.isActive || (this.state.startCentroid = _r(s), this.state.lastPosition = L({}, this.state.startCentroid), this.isActive = !0, this.originalTarget = i);
          break;
        case "pointermove":
          if (this.isActive && this.state.startCentroid) {
            const a = _r(s);
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
    return new d0(L({
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
      }, l = bf(this.name, "cancel"), u = new CustomEvent(l, {
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
const Ti = (e) => e.preventDefault(), f0 = ({
  instance: e
}) => {
  const {
    chartsLayerContainerRef: t
  } = e, n = V(null);
  fe(() => {
    const s = t.current;
    n.current || (n.current = new iN({
      gestures: [
        // We separate the zoom gestures from the gestures that are not zoom related
        // This allows us to configure the zoom gestures based on the zoom configuration.
        new Rc({
          name: "pan",
          threshold: 0,
          maxPointers: 1
        }),
        new u0({
          name: "move",
          preventIf: ["pan", "zoomPinch", "zoomPan"]
        }),
        new d0({
          name: "tap",
          preventIf: ["pan", "zoomPinch", "zoomPan"]
        }),
        new c0({
          name: "quickPress",
          duration: 50
        }),
        new Rc({
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
  const r = le((s, a, l) => {
    const u = t.current;
    return u == null || u.addEventListener(s, a, l), {
      cleanup: () => u == null ? void 0 : u.removeEventListener(s, a, l)
    };
  }, [t]), o = le((s, a) => {
    const l = t.current, u = n.current;
    !u || !l || u.setGestureOptions(s, l, a ?? {});
  }, [t, n]);
  fe(() => {
    const s = t.current;
    return s == null || s.addEventListener("gesturestart", Ti), s == null || s.addEventListener("gesturechange", Ti), s == null || s.addEventListener("gestureend", Ti), () => {
      s == null || s.removeEventListener("gesturestart", Ti), s == null || s.removeEventListener("gesturechange", Ti), s == null || s.removeEventListener("gestureend", Ti);
    };
  }, [t]);
  const i = le((s) => {
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
f0.params = {};
f0.getInitialState = () => ({});
const uN = [Eb, l0, pf, a0, wf, gf, f0, of], cN = ["apiRef"], dN = (e) => {
  let {
    plugins: t
  } = e, n = ke(e.props, cN);
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
let $x = 0;
function fN(e, t) {
  const n = Co(), r = Se(() => [...uN, ...e], [e]), o = dN({
    plugins: r,
    props: t
  });
  o.id = o.id ?? n;
  const s = V({}).current, a = hN(t.apiRef), l = V(null);
  if (l.current == null) {
    $x += 1;
    const d = {
      cacheKey: {
        id: $x
      }
    };
    r.forEach((p) => {
      p.getInitialState && Object.assign(d, p.getInitialState(o, d));
    }), l.current = new Im(d);
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
    contextValue: Se(() => ({
      store: l.current,
      publicAPI: a.current,
      instance: s
    }), [s, a])
  };
}
function pN(e) {
  return e.current == null && (e.current = {}), e;
}
function hN(e) {
  const t = V({});
  return e ? pN(e) : t;
}
const Rb = /* @__PURE__ */ Bt(null), _c = () => {
}, _b = 4, Ob = 20 + 2 * _b, gN = 40 + 2 * _b, mN = "hover", p0 = (e, t, n) => {
  const r = n ?? !1;
  return e === "y" && (t === "band" || t === "point") ? !r : r;
}, gu = {
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
    size: Ob,
    showTooltip: mN
  }
}, h0 = (e, t, n, r) => {
  var o;
  if (e)
    return e === !0 ? L({
      axisId: t,
      axisDirection: n
    }, gu, {
      reverse: r ?? !1
    }) : L({
      axisId: t,
      axisDirection: n
    }, gu, {
      reverse: r ?? !1
    }, e, {
      slider: L({}, gu.slider, {
        size: ((o = e.slider) == null ? void 0 : o.preview) ?? gu.slider.preview ? gN : Ob
      }, e.slider)
    });
};
function $b(e, t, n) {
  const r = {
    top: 0,
    bottom: 0,
    none: 0
  };
  return (e && e.length > 0 ? e : [{
    id: Pm,
    scaleType: "linear"
  }]).map((s, a) => {
    var g;
    const l = s.dataKey, u = a === 0 ? "bottom" : "none", c = s.position ?? u, d = Em + (s.label ? di : 0), p = s.id ?? `defaultized-x-axis-${a}`, f = s.height ?? d, h = L({
      offset: r[c]
    }, s, {
      id: p,
      position: c,
      height: f,
      zoom: h0(s.zoom, p, "x", p0("x", s.scaleType, s.reverse))
    });
    if (c !== "none") {
      const x = f === "auto" ? d : f;
      r[c] += x + n, (g = h.zoom) != null && g.slider.enabled && (r[c] += h.zoom.slider.size);
    }
    if (s.data !== void 0 || l === void 0 && !s.valueGetter)
      return h;
    if (t === void 0)
      throw new Error(Me(37));
    return L({}, h, {
      data: s.valueGetter ? t.map((x) => s.valueGetter(x)) : t.map((x) => x[l])
    });
  });
}
function Lb(e, t, n) {
  const r = {
    right: 0,
    left: 0,
    none: 0
  };
  return (e && e.length > 0 ? e : [{
    id: O_,
    scaleType: "linear"
  }]).map((s, a) => {
    var g;
    const l = s.dataKey, u = a === 0 ? "left" : "none", c = s.position ?? u, d = Mm + (s.label ? di : 0), p = s.id ?? `defaultized-y-axis-${a}`, f = s.width ?? d, h = L({
      offset: r[c]
    }, s, {
      id: p,
      position: c,
      width: f,
      zoom: h0(s.zoom, p, "y", p0("y", s.scaleType, s.reverse))
    });
    if (c !== "none") {
      const x = f === "auto" ? d : f;
      r[c] += x + n, (g = h.zoom) != null && g.slider.enabled && (r[c] += h.zoom.slider.size);
    }
    if (s.data !== void 0 || l === void 0 && !s.valueGetter)
      return h;
    if (t === void 0)
      throw new Error(Me(38));
    return L({}, h, {
      data: s.valueGetter ? t.map((x) => s.valueGetter(x)) : t.map((x) => x[l])
    });
  });
}
function yN(e, t) {
  return function(r, o) {
    if (o.location === "tick") {
      const i = o.scale.domain();
      return i[0] === i[1] ? o.scale.tickFormat(1)(r) : o.scale.tickFormat(e)(r);
    }
    return o.location === "zoom-slider-tooltip" ? t.tickFormat(2)(r) : `${r}`;
  };
}
function Nb(e) {
  return e.type === "piecewise" ? Hm(e.thresholds, e.colors).unknown(e.unknownColor ?? null) : Ec([e.min ?? 0, e.max ?? 100], e.color).unknown(e.unknownColor ?? null);
}
function ps(e) {
  return e.values ? Ya(e.values, e.colors).unknown(e.unknownColor ?? null) : Ya(e.colors.map((t, n) => n), e.colors).unknown(e.unknownColor ?? null);
}
function Xi(e) {
  return e.type === "ordinal" ? ps(e) : Nb(e);
}
const Oc = (e) => (e == null ? void 0 : e[0]) instanceof Date;
function $h(e, t, n) {
  const r = YS(e, t);
  return (o, {
    location: i
  }) => i === "tick" ? r.tickFormat(n)(o) : `${o.toLocaleString()}`;
}
const vN = (e, t, n, r) => {
  const o = /* @__PURE__ */ new Set();
  return Object.keys(t).filter(n0).forEach((s) => {
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
function st(e) {
  return e.bandwidth !== void 0;
}
function Db(e) {
  return st(e) && e.paddingOuter !== void 0;
}
function xN(e, t, n) {
  const r = t === "x" ? [e.left, e.left + e.width] : [e.top + e.height, e.top];
  return n ? [r[1], r[0]] : r;
}
function CN(e, t) {
  return e.step() * t < 0.1;
}
function zb(e, t, n) {
  const r = n === "x" ? e.height : e.width;
  if (r === "auto") {
    const o = t == null ? void 0 : t[e.id];
    return o !== void 0 ? o : (n === "x" ? Em : Mm) + (e.label ? di : 0);
  }
  return r ?? 0;
}
const wN = 0.2, SN = 0.1;
function bN(e, t, n, r) {
  const o = {}, i = {};
  for (const s of e) {
    const a = s.position;
    if (a && (o[a] ?? (o[a] = 0), i[s.id] = o[a], a !== "none")) {
      const l = zb(s, t, n);
      o[a] += l + r;
      const u = s.zoom;
      u != null && u.slider.enabled && (o[a] += u.slider.size);
    }
  }
  return i;
}
function Fb({
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
  const c = vN(i, o, n, r[0].id), d = bN(r, l, i, u), p = {};
  return r.forEach((f) => {
    const h = f, g = e[h.id], x = s == null ? void 0 : s.get(h.id), y = x ? [x.start, x.end] : [0, 100], m = xN(t, i, h.reverse ?? !1), v = a[h.id].tickNumber, C = !h.ignoreTooltip && c.has(h.id), b = PL(v, y), S = zb(h, l, i), k = h.data ?? [], I = d[h.id] ?? h.offset ?? 0;
    if (st(g)) {
      const R = i === "y" ? [m[1], m[0]] : m;
      if (Db(g) && Io(h)) {
        const w = h.categoryGapRatio ?? wN, E = CN(g, w), T = E ? 0 : w, P = E ? 0 : h.barGapRatio ?? SN;
        p[h.id] = L({
          categoryGapRatio: T,
          barGapRatio: P,
          triggerTooltip: C
        }, h, {
          offset: I
        }, i === "x" ? {
          height: S
        } : {
          width: S
        }, {
          data: k,
          /* Doing this here is technically wrong, but acceptable in practice.
           * In theory, this should be done in the normalized scale selector, but then we'd need that selector to depend
           * on the zoom range, which would void its goal (which is to be independent of zoom).
           * Since we only ignore gap ratios when they're practically invisible, the small errors caused by this
           * discrepancy will hopefully not be noticeable. */
          scale: E ? g.copy().padding(0) : g,
          tickNumber: b,
          colorScale: h.colorMap && (h.colorMap.type === "ordinal" ? ps(L({
            values: h.data
          }, h.colorMap)) : Xi(h.colorMap))
        });
      }
      if (To(h) && (p[h.id] = L({
        triggerTooltip: C
      }, h, {
        offset: I
      }, i === "x" ? {
        height: S
      } : {
        width: S
      }, {
        data: k,
        scale: g,
        tickNumber: b,
        colorScale: h.colorMap && (h.colorMap.type === "ordinal" ? ps(L({
          values: h.data
        }, h.colorMap)) : Xi(h.colorMap))
      })), Oc(h.data)) {
        const w = $h(h.data, R, h.tickNumber);
        p[h.id].valueFormatter = h.valueFormatter ?? w;
      }
      return;
    }
    if (h.scaleType === "band" || h.scaleType === "point")
      return;
    const $ = h, O = $.scaleType ?? "linear";
    p[h.id] = L({
      triggerTooltip: C
    }, $, {
      offset: I
    }, i === "x" ? {
      height: S
    } : {
      width: S
    }, {
      data: k,
      scaleType: O,
      scale: g,
      tickNumber: b,
      colorScale: $.colorMap && Nb($.colorMap),
      valueFormatter: h.valueFormatter ?? yN(b, Ll(O, m.map((R) => g.invert(R)), m))
    });
  }), {
    axis: p,
    axisIds: r.map(({
      id: f
    }) => f)
  };
}
function kN(e) {
  return e != null;
}
function IN(e, t, n, r) {
  const o = (e == null ? void 0 : e.length) ?? 0, i = Math.floor(t * o / 100), s = Math.ceil(n * o / 100);
  return function(l, u) {
    return (l[r] ?? (e == null ? void 0 : e[u])) == null ? !0 : u >= i && u < s;
  };
}
function TN(e, t, n, r, o) {
  const i = e[0].valueOf(), s = e[1].valueOf(), a = i + t * (s - i) / 100, l = i + n * (s - i) / 100;
  return function(c, d) {
    const p = c[r] ?? (o == null ? void 0 : o[d]);
    return p == null ? !0 : p >= a && p <= l;
  };
}
const PN = (e) => ({
  currentAxisId: t,
  seriesXAxisId: n,
  seriesYAxisId: r,
  isDefaultAxis: o
}) => (i, s) => {
  var u, c;
  return !(t === n ? r : n) || o ? ((c = (u = Object.values(e ?? {}))[0]) == null ? void 0 : c.call(u, i, s)) ?? !0 : [r, n].filter((d) => d !== t).map((d) => e[d ?? ""]).filter(kN).every((d) => d(i, s));
}, Lx = (e) => (t = []) => t.reduce((n, r) => {
  const {
    zoom: o,
    id: i,
    reverse: s,
    scaleType: a
  } = r, l = h0(o, i, e, p0(e, a, s));
  return l && (n[i] = l), n;
}, {}), MN = 0.2;
function Bb(e, t, n) {
  const r = t === "x" ? [e.left, e.left + e.width] : [e.top + e.height, e.top];
  return n.reverse ? [r[1], r[0]] : r;
}
const Nx = /* @__PURE__ */ new WeakMap();
function Dx(e, t, n) {
  let r = Nx.get(e);
  r || (r = /* @__PURE__ */ new Map(), Nx.set(e, r));
  let o = r.get(t);
  return o || (o = n(), r.set(t, o)), o;
}
function Ub(e, t) {
  const n = [0, 1];
  if (Io(e)) {
    const i = e.categoryGapRatio ?? MN;
    return Dx(t, `band:${i}`, () => ff(t, n).paddingInner(i).paddingOuter(i / 2));
  }
  if (To(e))
    return Dx(t, "point", () => Jm(t, n));
  const r = e.scaleType ?? "linear", o = Ll(r, t, n);
  return bL(e) && e.constant != null && o.constant(e.constant), o;
}
const Hb = (e, t) => {
  const n = e[1] - e[0], r = t[1] - t[0], o = e[0] - t[0] * n / r, i = e[1] + (100 - t[1]) * n / r;
  return [o, i];
};
class EN {
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
const zx = [Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array], Rp = 3;
class g0 {
  /**
   * Recreate a Flatbush index from raw `ArrayBuffer` or `SharedArrayBuffer` data.
   * @param {ArrayBufferLike} data
   * @param {number} [byteOffset=0] byte offset to the start of the Flatbush buffer in the referenced ArrayBuffer.
   * @returns {Flatbush} index
   */
  static from(t, n = 0) {
    if (n % 8 !== 0)
      throw new Error(Me(13));
    if (!t || t.byteLength === void 0 || t.buffer)
      throw new Error(Me(14));
    const [r, o] = new Uint8Array(t, n + 0, 2);
    if (r !== 251)
      throw new Error(Me(15));
    const i = o >> 4;
    if (i !== Rp)
      throw new Error(Me(16, i, Rp));
    const s = zx[o & 15];
    if (!s)
      throw new Error(Me(17));
    const [a] = new Uint16Array(t, n + 2, 1), [l] = new Uint32Array(t, n + 4, 1);
    return new g0(l, a, s, void 0, t, n);
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
      throw new Error(Me(18));
    if (isNaN(t) || t <= 0)
      throw new Error(Me(19, t));
    this.numItems = +t, this.nodeSize = Math.min(Math.max(+n, 2), 65535), this.byteOffset = s;
    let a = t, l = a;
    this._levelBounds = [a * 4];
    do
      a = Math.ceil(a / this.nodeSize), l += a, this._levelBounds.push(l * 4);
    while (a !== 1);
    this.ArrayType = r, this.IndexArrayType = l < 16384 ? Uint16Array : Uint32Array;
    const u = zx.indexOf(r), c = l * 4 * r.BYTES_PER_ELEMENT;
    if (u < 0)
      throw new Error(Me(20, r));
    if (i)
      this.data = i, this._boxes = new r(i, s + 8, l * 4), this._indices = new this.IndexArrayType(i, s + 8 + c, l), this._pos = l * 4, this.minX = this._boxes[this._pos - 4], this.minY = this._boxes[this._pos - 3], this.maxX = this._boxes[this._pos - 2], this.maxY = this._boxes[this._pos - 1];
    else {
      const d = this.data = new o(8 + c + l * this.IndexArrayType.BYTES_PER_ELEMENT);
      this._boxes = new r(d, 8, l * 4), this._indices = new this.IndexArrayType(d, 8 + c, l), this._pos = 0, this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = -1 / 0, this.maxY = -1 / 0, new Uint8Array(d, 0, 2).set([251, (Rp << 4) + u]), new Uint16Array(d, 2, 1)[0] = n, new Uint32Array(d, 4, 1)[0] = t;
    }
    this._queue = new EN();
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
      throw new Error(Me(21, this._pos >> 2, this.numItems));
    const t = this._boxes;
    if (this.numItems <= this.nodeSize) {
      t[this._pos++] = this.minX, t[this._pos++] = this.minY, t[this._pos++] = this.maxX, t[this._pos++] = this.maxY;
      return;
    }
    const n = this.maxX - this.minX || 1, r = this.maxY - this.minY || 1, o = new Uint32Array(this.numItems), i = 65535;
    for (let s = 0, a = 0; s < this.numItems; s++) {
      const l = t[a++], u = t[a++], c = t[a++], d = t[a++], p = Math.floor(i * ((l + c) / 2 - this.minX) / n), f = Math.floor(i * ((u + d) / 2 - this.minY) / r);
      o[s] = _N(p, f);
    }
    Lh(o, t, this._indices, 0, this.numItems - 1, this.nodeSize);
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
      throw new Error(Me(22));
    let s = this._boxes.length - 4;
    const a = [], l = [];
    for (; s !== void 0; ) {
      const u = Math.min(s + this.nodeSize * 4, Fx(s, this._levelBounds));
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
  neighbors(t, n, r = 1 / 0, o = 1 / 0, i, s = AN) {
    if (this._pos !== this._boxes.length)
      throw new Error(Me(23));
    let a = this._boxes.length - 4;
    const l = this._queue, u = [];
    e: for (; a !== void 0; ) {
      const c = Math.min(a + this.nodeSize * 4, Fx(a, this._levelBounds));
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
function AN(e, t) {
  return e * e + t * t;
}
function Fx(e, t) {
  let n = 0, r = t.length - 1;
  for (; n < r; ) {
    const o = n + r >> 1;
    t[o] > e ? r = o : n = o + 1;
  }
  return t[n];
}
function Lh(e, t, n, r, o, i) {
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
    RN(e, t, n, d, p);
  }
  Lh(e, t, n, r, p, i), Lh(e, t, n, p + 1, o, i);
}
function RN(e, t, n, r, o) {
  const i = e[r];
  e[r] = e[o], e[o] = i;
  const s = 4 * r, a = 4 * o, l = t[s], u = t[s + 1], c = t[s + 2], d = t[s + 3];
  t[s] = t[a], t[s + 1] = t[a + 1], t[s + 2] = t[a + 2], t[s + 3] = t[a + 3], t[a] = l, t[a + 1] = u, t[a + 2] = c, t[a + 3] = d;
  const p = n[r];
  n[r] = n[o], n[o] = p;
}
function _N(e, t) {
  let n = e ^ t, r = 65535 ^ n, o = 65535 ^ (e | t), i = e & (t ^ 65535), s = n | r >> 1, a = n >> 1 ^ n, l = o >> 1 ^ r & i >> 1 ^ o, u = n & o >> 1 ^ i >> 1 ^ i;
  n = s, r = a, o = l, i = u, s = n & n >> 2 ^ r & r >> 2, a = n & r >> 2 ^ r & (n ^ r) >> 2, l ^= n & o >> 2 ^ r & i >> 2, u ^= r & o >> 2 ^ (n ^ r) & i >> 2, n = s, r = a, o = l, i = u, s = n & n >> 4 ^ r & r >> 4, a = n & r >> 4 ^ r & (n ^ r) >> 4, l ^= n & o >> 4 ^ r & i >> 4, u ^= r & o >> 4 ^ (n ^ r) & i >> 4, n = s, r = a, o = l, i = u, l ^= n & o >> 8 ^ r & i >> 8, u ^= r & o >> 8 ^ (n ^ r) & i >> 8, n = l ^ l >> 1, r = u ^ u >> 1;
  let c = e ^ t, d = r | 65535 ^ (c | n);
  return c = (c | c << 8) & 16711935, c = (c | c << 4) & 252645135, c = (c | c << 2) & 858993459, c = (c | c << 1) & 1431655765, d = (d | d << 8) & 16711935, d = (d | d << 4) & 252645135, d = (d | d << 2) & 858993459, d = (d | d << 1) & 1431655765, (d << 1 | c) >>> 0;
}
const ON = (e) => typeof e.size == "function";
function _p(e) {
  const [t, n] = e;
  return (r) => {
    const o = Math.max(Math.min(r, 1), 0);
    return t + o * (n - t);
  };
}
function $N(e) {
  if (e.type === "piecewise")
    return Hm(e.thresholds, e.sizes);
  if (ON(e))
    return Ec([e.min ?? 0, e.max ?? 100], e.size);
  switch (e.interpolator ?? "sqrt") {
    case "log":
      return KS([e.min ?? 0, e.max ?? 100], _p(e.size));
    case "linear":
      return Ec([e.min ?? 0, e.max ?? 100], _p(e.size));
    case "sqrt":
    default:
      return oL([e.min ?? 0, e.max ?? 100], _p(e.size));
  }
}
function Wb(e) {
  return e.values ? Ya(e.values, e.sizes).unknown(e.unknownSize ?? null) : Ya(e.sizes.map((t, n) => n), e.sizes).unknown(e.unknownSize ?? null);
}
function LN(e) {
  return e.type === "ordinal" ? Wb(e) : $N(e);
}
function Bx(e, t) {
  return e.id !== void 0 ? e : L({
    id: t
  }, e);
}
function Ux(e) {
  return e.colorMap ? L({}, e, {
    colorScale: e.colorMap.type === "ordinal" && e.data ? ps(L({
      values: e.data
    }, e.colorMap)) : Xi(e.colorMap.type === "continuous" ? L({
      min: e.min,
      max: e.max
    }, e.colorMap) : e.colorMap)
  }) : e;
}
function Hx(e) {
  return e.sizeMap ? L({}, e, {
    sizeScale: e.sizeMap.type === "ordinal" ? Wb(L({
      values: e.data
    }, e.sizeMap)) : LN(e.sizeMap.type === "continuous" ? L({
      min: e.min,
      max: e.max
    }, e.sizeMap) : e.sizeMap)
  }) : e;
}
function Gb(e, t) {
  if (!e || e.length === 0)
    return {
      axis: {},
      axisIds: []
    };
  const n = {}, r = [];
  return e.forEach((o, i) => {
    const s = o.dataKey, a = o.id ?? `defaultized-z-axis-${i}`;
    if (o.data !== void 0 || s === void 0 && !o.valueGetter) {
      n[a] = Hx(Ux(Bx(o, a))), r.push(a);
      return;
    }
    if (t === void 0)
      throw new Error(Me(41));
    n[a] = Hx(Ux(Bx(L({}, o, {
      data: o.valueGetter ? t.map((l) => o.valueGetter(l)) : t.map((l) => l[s])
    }), a))), r.push(a);
  }), {
    axis: n,
    axisIds: r
  };
}
const zl = ({
  params: e,
  store: t
}) => {
  const {
    zAxis: n,
    dataset: r
  } = e, o = V(!0);
  return fe(() => {
    if (o.current) {
      o.current = !1;
      return;
    }
    t.set("zAxis", Gb(n, r));
  }, [n, r, t]), {};
};
zl.params = {
  zAxis: !0,
  dataset: !0
};
zl.getInitialState = (e) => ({
  zAxis: Gb(e.zAxis, e.dataset)
});
const NN = (e) => e, Vb = j(NN, (e) => e.zAxis), DN = (e, t) => {
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
}, zN = (e) => {
  const t = /* @__PURE__ */ new Map();
  return e.forEach((n) => {
    t.set(n.axisId, n);
  }), t;
}, jb = (e) => e.zoom, kf = j(jb, (e) => e == null ? void 0 : e.isInteracting), Po = de(jb, function(t) {
  return (t == null ? void 0 : t.zoomData) && zN(t == null ? void 0 : t.zoomData);
}), Wx = j(Po, (e, t) => e == null ? void 0 : e.get(t)), Fl = de(Hn, er, function(t, n) {
  return L({}, Lx("x")(t), Lx("y")(n));
});
j(Fl, (e, t) => e[t]);
const FN = j(dn, function(t) {
  return o0(t.width);
}), BN = j(dn, function(t) {
  return o0(t.height);
}), m0 = de(Hn, Ae, FN, pb, function(t, n, r, o) {
  const i = xf(t, n, r, o, "x");
  return {
    axes: t,
    domains: i
  };
}), y0 = de(er, Ae, BN, hb, function(t, n, r, o) {
  const i = xf(t, n, r, o, "y");
  return {
    axes: t,
    domains: i
  };
}), Yb = de(Po, Fl, m0, y0, function(t, n, {
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
      l[d.id] = IN(d.data, p.start, p.end, f);
    else {
      const {
        domain: h
      } = f === "x" ? o[d.id] : s[d.id];
      l[d.id] = TN(
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
    return PN(l);
}), UN = de(Ae, lt, Po, Fl, Yb, m0, function(t, n, r, o, i, {
  axes: s,
  domains: a
}) {
  const l = {};
  return s == null || s.forEach((u, c) => {
    const d = a[u.id].domain;
    if (Io(u) || To(u)) {
      l[u.id] = d;
      return;
    }
    const p = r == null ? void 0 : r.get(u.id), f = o == null ? void 0 : o[u.id], h = p === void 0 && !f ? i : void 0;
    if (!h) {
      l[u.id] = d;
      return;
    }
    const g = a[u.id].tickNumber, x = vf(u, "x", n, c, t, h);
    l[u.id] = yb(u, "x", c, t, x, g);
  }), l;
}), HN = de(Ae, lt, Po, Fl, Yb, y0, function(t, n, r, o, i, {
  axes: s,
  domains: a
}) {
  const l = {};
  return s == null || s.forEach((u, c) => {
    const d = a[u.id].domain;
    if (Io(u) || To(u)) {
      l[u.id] = d;
      return;
    }
    const p = r == null ? void 0 : r.get(u.id), f = o == null ? void 0 : o[u.id], h = p === void 0 && !f ? i : void 0;
    if (!h) {
      l[u.id] = d;
      return;
    }
    const g = a[u.id].tickNumber, x = vf(u, "y", n, c, t, h);
    l[u.id] = yb(u, "y", c, t, x, g);
  }), l;
}), Kb = de(Hn, UN, function(t, n) {
  const r = {};
  return t == null || t.forEach((o) => {
    const i = o, s = n[i.id];
    r[i.id] = Ub(i, s);
  }), r;
}), Xb = de(er, HN, function(t, n) {
  const r = {};
  return t == null || t.forEach((o) => {
    const i = o, s = n[i.id];
    r[i.id] = Ub(i, s);
  }), r;
}), WN = de(Hn, Kb, dn, Po, function(t, n, r, o) {
  const i = {};
  return t == null || t.forEach((s) => {
    const a = s, l = o == null ? void 0 : o.get(a.id), u = l ? [l.start, l.end] : [0, 100], c = Bb(r, "x", a), d = n[a.id].copy(), p = Hb(c, u);
    d.range(p), i[a.id] = d;
  }), i;
}), GN = de(er, Xb, dn, Po, function(t, n, r, o) {
  const i = {};
  return t == null || t.forEach((s) => {
    const a = s, l = o == null ? void 0 : o.get(a.id), u = l ? [l.start, l.end] : [0, 100], c = Bb(r, "y", a), d = n[a.id].copy(), p = st(d) ? c.reverse() : c, f = Hb(p, u);
    d.range(f), i[a.id] = d;
  }), i;
}), It = de(dn, Ae, lt, Po, m0, WN, i0, Ds, function(t, n, r, o, {
  axes: i,
  domains: s
}, a, l, u) {
  return Fb({
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
}), Tt = de(dn, Ae, lt, Po, y0, GN, s0, Ds, function(t, n, r, o, {
  axes: i,
  domains: s
}, a, l, u) {
  return Fb({
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
j(It, Tt, (e, t, n) => (e == null ? void 0 : e.axis[n]) ?? (t == null ? void 0 : t.axis[n]));
j(Hn, er, (e, t, n) => {
  const r = (e == null ? void 0 : e.find((o) => o.id === n)) ?? (t == null ? void 0 : t.find((o) => o.id === n)) ?? null;
  if (r)
    return r;
});
const VN = j(Hn, (e) => e[0].id), jN = j(er, (e) => e[0].id), YN = /* @__PURE__ */ new Map(), KN = () => YN, XN = de(Ae, Kb, Xb, VN, jN, Vb, function(t, n, r, o, i, s) {
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
    const x = new g0(f.length), y = u[p.sizeAxisId ?? c[0]], m = !y || !y.sizeScale, v = m ? p.markerSize ?? 0 : DN(p, y);
    let C = m ? v : 0;
    const b = n[h], S = r[g];
    for (let k = 0; k < f.length; k += 1)
      m || (C = Math.max(C, v(k))), x.add(b(f[k].x), S(f[k].y));
    x.finish(), l.set(d, {
      flatbush: x,
      getItemRadius: v,
      maxItemRadius: C
    });
  }), l;
});
function Nr(e) {
  return e instanceof Date ? e.getTime() : e;
}
function v0(e, t) {
  return e.findIndex((n, r) => {
    const o = Nr(n);
    return o > t && (r === 0 || Math.abs(t - o) <= Math.abs(t - Nr(e[r - 1]))) || o <= t && (r === e.length - 1 || Math.abs(t - o) < Math.abs(t - Nr(e[r + 1])));
  });
}
function Hr(e, t) {
  const {
    scale: n,
    data: r,
    reverse: o
  } = e;
  if (!st(n)) {
    if (r === void 0)
      return -1;
    const s = Nr(n.invert(t));
    return v0(r, s);
  }
  const i = n.bandwidth() === 0 ? Math.floor((t - Math.min(...n.range()) + n.step() / 2) / n.step()) : Math.floor((t - Math.min(...n.range())) / n.step());
  return i < 0 || i >= r.length ? -1 : o ? r.length - 1 - i : i;
}
function Gx(e, t, n, r) {
  if (!st(e)) {
    if (r === null) {
      const o = e.invert(n);
      return Number.isNaN(o) ? null : o;
    }
    return t[r];
  }
  return r === null || r < 0 || r >= t.length ? null : t[r];
}
function hs(e, t) {
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
const Bl = ({
  store: e
}) => {
  const t = ge(function() {
    e.update({
      interaction: L({}, e.state.interaction, {
        pointer: null
      })
    });
  }), n = ge(function(a) {
    e.state.interaction.lastUpdate !== a && e.set("interaction", L({}, e.state.interaction, {
      lastUpdate: a
    }));
  }), r = ge(function(a) {
    e.set("interaction", L({}, e.state.interaction, {
      pointer: a,
      lastUpdate: a !== null ? "pointer" : e.state.interaction.lastUpdate
    }));
  }), o = ge(function(a) {
    e.set("interaction", L({}, e.state.interaction, {
      pointerType: a.pointerType
    }));
  }), i = ge(function() {
    e.set("interaction", L({}, e.state.interaction, {
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
Bl.getInitialState = () => ({
  interaction: {
    item: null,
    pointer: null,
    lastUpdate: "pointer",
    pointerType: null
  }
});
Bl.params = {};
const If = (e) => e.interaction, qN = j(If, (e) => e !== void 0), qb = j(If, (e) => (e == null ? void 0 : e.pointer) ?? null), zs = j(qb, (e) => e && e.x), Fs = j(qb, (e) => e && e.y), Kr = j(If, (e) => e == null ? void 0 : e.lastUpdate), QN = j(If, (e) => (e == null ? void 0 : e.pointerType) ?? null);
function Nh(e, t, n = t.axisIds[0]) {
  return Array.isArray(n) ? n.map((r) => Hr(t.axis[r], e)) : Hr(t.axis[n], e);
}
const Qb = (e, t, n) => {
  if (e === null)
    return null;
  const r = Nh(e, t, n);
  return r === -1 ? null : r;
}, x0 = j(zs, It, Qb), C0 = j(Fs, Tt, Qb), ZN = j(zs, Fs, It, Tt, (e, t, n, r) => [...e === null ? [] : n.axisIds.map((o) => ({
  axisId: o,
  dataIndex: Nh(e, n, o)
})), ...t === null ? [] : r.axisIds.map((o) => ({
  axisId: o,
  dataIndex: Nh(t, r, o)
}))].filter((o) => o.dataIndex !== null && o.dataIndex >= 0));
function Zb(e, t, n, r = t.axisIds[0]) {
  return Array.isArray(r) ? r.map((o, i) => {
    const s = t.axis[o];
    return Gx(s.scale, s.data, e, n[i]);
  }) : Gx(t.axis[r].scale, t.axis[r].data, e, n);
}
const JN = j(zs, It, x0, (e, t, n, r) => e === null || t.axisIds.length === 0 ? null : Zb(e, t, n, r)), eD = j(Fs, Tt, C0, (e, t, n, r) => e === null || t.axisIds.length === 0 ? null : Zb(e, t, n, r));
function tD(e) {
  return e.setPointerCoordinate !== void 0;
}
const nD = /* @__PURE__ */ new Set(["bar", "rangeBar", "line"]), Bs = ({
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
  } = e, c = t.use(Ae), d = t.use(qN), {
    axis: p,
    axisIds: f
  } = t.use(It), {
    axis: h,
    axisIds: g
  } = t.use(Tt);
  _c({
    controlled: e.highlightedAxis
  }), _c({
    controlled: e.tooltipAxis
  }), we(() => {
    e.highlightedAxis !== void 0 && t.set("controlledCartesianAxisHighlight", e.highlightedAxis);
  }, [t, e.highlightedAxis]), we(() => {
    e.tooltipAxis !== void 0 && t.set("controlledCartesianAxisTooltip", e.tooltipAxis);
  }, [t, e.tooltipAxis]);
  const x = V(!0);
  fe(() => {
    if (x.current) {
      x.current = !1;
      return;
    }
    t.set("cartesianAxis", {
      axesGap: u,
      x: $b(o, s, u),
      y: Lb(i, s, u)
    });
  }, [o, i, s, u, t]);
  const y = f[0], m = g[0];
  E_(t, ZN, (C, b) => {
    if (!(!a && !l) && !Object.is(C, b)) {
      if (C.length !== b.length) {
        a == null || a(b), l == null || l(b);
        return;
      }
      C != null && C.some(({
        axisId: S,
        dataIndex: k
      }, I) => b[I].axisId !== S || b[I].dataIndex !== k) && (a == null || a(b), l == null || l(b));
    }
  });
  const v = tD(n);
  return fe(() => {
    const C = r.current;
    if (!d || !v || !C || e.disableAxisListener)
      return () => {
      };
    const b = n.addInteractionListener("moveEnd", (w) => {
      w.detail.activeGestures.pan || n.cleanInteraction();
    }), S = n.addInteractionListener("panEnd", (w) => {
      w.detail.activeGestures.move || n.cleanInteraction();
    }), k = n.addInteractionListener("quickPressEnd", (w) => {
      !w.detail.activeGestures.move && !w.detail.activeGestures.pan && n.cleanInteraction();
    }), I = (w) => {
      var _;
      const E = w.detail.srcEvent, T = w.detail.target, P = hs(C, E);
      if (w.detail.srcEvent.buttons >= 1 && (T != null && T.hasPointerCapture(w.detail.srcEvent.pointerId)) && !(T != null && T.closest("[data-charts-zoom-slider]")) && (T == null || T.releasePointerCapture(w.detail.srcEvent.pointerId)), !n.isPointInside(P.x, P.y, T)) {
        (_ = n.cleanInteraction) == null || _.call(n);
        return;
      }
      n.setPointerCoordinate(P);
    }, $ = n.addInteractionListener("move", I), O = n.addInteractionListener("pan", I), R = n.addInteractionListener("quickPress", I);
    return () => {
      $.cleanup(), b.cleanup(), O.cleanup(), S.cleanup(), R.cleanup(), k.cleanup();
    };
  }, [r, t, p, y, h, m, n, e.disableAxisListener, d, v]), fe(() => {
    const C = r.current, b = e.onAxisClick;
    if (C === null || !b)
      return () => {
      };
    const S = n.addInteractionListener("tap", (k) => {
      let I = null, $ = !1;
      const O = hs(C, k.detail.srcEvent), R = Hr(p[y], O.x);
      $ = R !== -1, I = $ ? R : Hr(h[m], O.y);
      const w = $ ? f[0] : g[0];
      if (I == null || I === -1)
        return;
      const E = ($ ? p : h)[w].data[I], T = {};
      Object.keys(c).filter((P) => nD.has(P)).forEach((P) => {
        const _ = c[P];
        _ == null || _.seriesOrder.forEach((N) => {
          const A = _.series[N], D = A.xAxisId, z = A.yAxisId, U = $ ? D : z;
          (U === void 0 || U === w) && (T[N] = A.data[I]);
        });
      }), b(k.detail.srcEvent, {
        dataIndex: I,
        axisValue: E,
        seriesValues: T
      });
    });
    return () => {
      S.cleanup();
    };
  }, [e.onAxisClick, c, r, p, f, h, g, y, m, n]), {};
};
Bs.params = {
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
Bs.getDefaultizedParams = ({
  params: e
}) => L({}, e, {
  axesGap: e.axesGap ?? 0,
  colors: e.colors ?? lb,
  theme: e.theme ?? "light",
  defaultizedXAxis: $b(e.xAxis, e.dataset, e.axesGap ?? 0),
  defaultizedYAxis: Lb(e.yAxis, e.dataset, e.axesGap ?? 0)
});
Bs.getInitialState = (e) => L({
  cartesianAxis: {
    axesGap: e.axesGap,
    x: e.defaultizedXAxis,
    y: e.defaultizedYAxis
  }
}, e.highlightedAxis === void 0 ? {} : {
  controlledCartesianAxisHighlight: e.highlightedAxis
});
const rD = Object.is;
function w0(e, t) {
  if (e === t)
    return !0;
  if (!(e instanceof Object) || !(t instanceof Object))
    return !1;
  let n = 0, r = 0;
  for (const o in e)
    if (n += 1, !rD(e[o], t[o]) || !(o in t))
      return !1;
  for (const o in t)
    r += 1;
  return n === r;
}
const Us = (e) => e.keyboardNavigation;
j(Us, (e, t) => (e == null ? void 0 : e.isFocused) === !0 && (e == null ? void 0 : e.item) != null && w0(e.item, t));
const oD = j(Us, (e) => (e == null ? void 0 : e.isFocused) === !0 && (e == null ? void 0 : e.item) != null), S0 = j(Us, (e) => (e == null ? void 0 : e.isFocused) === !0 ? (e == null ? void 0 : e.item) ?? null : null), iD = j(Us, (e) => (e == null ? void 0 : e.item) ?? null), sD = j(Us, (e) => !!(e != null && e.enabled)), Jb = (e) => (t, n, r) => {
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
}, b0 = j(S0, It, Ae, Jb("x")), k0 = j(S0, Tt, Ae, Jb("y")), ek = de(Us, function(t) {
  if ((t == null ? void 0 : t.isFocused) !== !0 || (t == null ? void 0 : t.item) == null)
    return null;
  const {
    type: n,
    seriesId: r
  } = t.item;
  return n === void 0 || r === void 0 ? null : t.item;
}), Sr = (e) => e.brush;
j(Sr, (e) => e == null ? void 0 : e.start);
j(Sr, (e) => e == null ? void 0 : e.current);
const aD = j(Sr, (e) => {
  var t;
  return ((t = e == null ? void 0 : e.start) == null ? void 0 : t.x) ?? null;
}), lD = j(Sr, (e) => {
  var t;
  return ((t = e == null ? void 0 : e.start) == null ? void 0 : t.y) ?? null;
}), uD = j(Sr, (e) => {
  var t;
  return ((t = e == null ? void 0 : e.current) == null ? void 0 : t.x) ?? null;
}), cD = j(Sr, (e) => {
  var t;
  return ((t = e == null ? void 0 : e.current) == null ? void 0 : t.y) ?? null;
});
de(aD, lD, uD, cD, (e, t, n, r) => e === null || t === null || n === null || r === null ? null : {
  start: {
    x: e,
    y: t
  },
  current: {
    x: n,
    y: r
  }
});
const dD = j(Ae, (e) => {
  let t = !1, n = !1;
  return e && Object.entries(e).forEach(([r, o]) => {
    Object.values(o.series).some((i) => i.layout === "horizontal") && (t = !0), r === "scatter" && o.seriesOrder.length > 0 && (n = !0);
  }), n ? "xy" : t ? "y" : "x";
}), fD = j(Fl, function(t) {
  let n = !1, r = !1;
  return Object.values(t).forEach((o) => {
    o.axisDirection === "y" && (r = !0), o.axisDirection === "x" && (n = !0);
  }), n && r ? "xy" : r ? "y" : n ? "x" : null;
});
j(dD, fD, (e, t) => t ?? e);
const tk = j(Sr, (e) => (e == null ? void 0 : e.enabled) || (e == null ? void 0 : e.isZoomBrushEnabled)), nk = j(tk, Sr, (e, t) => e && (t == null ? void 0 : t.start) !== null && (t == null ? void 0 : t.current) !== null), Tf = j(Sr, nk, (e, t) => t && (e == null ? void 0 : e.preventHighlight)), pD = j(Sr, nk, (e, t) => t && (e == null ? void 0 : e.preventTooltip)), Ul = ({
  store: e,
  instance: t,
  params: n
}) => {
  const {
    chartsLayerContainerRef: r
  } = t, o = e.use(tk);
  we(() => {
    e.set("brush", L({}, e.state.brush, {
      enabled: n.brushConfig.enabled,
      preventTooltip: n.brushConfig.preventTooltip,
      preventHighlight: n.brushConfig.preventHighlight
    }));
  }, [e, n.brushConfig.enabled, n.brushConfig.preventTooltip, n.brushConfig.preventHighlight]);
  const i = ge(function(u) {
    e.set("brush", L({}, e.state.brush, {
      start: e.state.brush.start ?? u,
      current: u
    }));
  }), s = ge(function() {
    e.set("brush", L({}, e.state.brush, {
      start: null,
      current: null
    }));
  }), a = ge(function(u) {
    e.state.brush.isZoomBrushEnabled !== u && e.set("brush", L({}, e.state.brush, {
      isZoomBrushEnabled: u
    }));
  });
  return fe(() => {
    const l = r.current;
    if (l === null || !o)
      return () => {
      };
    const u = (g) => {
      var y;
      if ((y = g.detail.target) != null && y.closest("[data-charts-zoom-slider]"))
        return;
      const x = hs(l, {
        clientX: g.detail.initialCentroid.x,
        clientY: g.detail.initialCentroid.y
      });
      i(x);
    }, c = (g) => {
      const x = hs(l, {
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
Ul.params = {
  brushConfig: !0
};
Ul.getDefaultizedParams = ({
  params: e
}) => {
  var t, n, r;
  return L({}, e, {
    brushConfig: {
      enabled: ((t = e == null ? void 0 : e.brushConfig) == null ? void 0 : t.enabled) ?? !1,
      preventTooltip: ((n = e == null ? void 0 : e.brushConfig) == null ? void 0 : n.preventTooltip) ?? !0,
      preventHighlight: ((r = e == null ? void 0 : e.brushConfig) == null ? void 0 : r.preventHighlight) ?? !0
    }
  });
};
Ul.getInitialState = (e) => ({
  brush: {
    enabled: e.brushConfig.enabled,
    isZoomBrushEnabled: !1,
    preventTooltip: e.brushConfig.preventTooltip,
    preventHighlight: e.brushConfig.preventHighlight,
    start: null,
    current: null
  }
});
function rk(e, t, n) {
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
const Hs = (e) => e.controlledCartesianAxisHighlight, ok = (e, t, n, r, o, i) => {
  if (i)
    return [];
  if (n !== void 0)
    return n.filter((l) => t.axis[l.axisId] !== void 0).map((l) => l);
  const s = e !== null && {
    axisId: t.axisIds[0],
    dataIndex: e
  }, a = r != null && r;
  return rk(o, s, a);
}, ik = de(x0, It, Hs, b0, Kr, Tf, ok);
de(C0, Tt, Hs, k0, Kr, Tf, ok);
const sk = (e, t, n, r, o, i, s) => {
  var c, d;
  if (s)
    return [];
  if (r !== void 0)
    return r.map((p) => {
      var f, h;
      return L({}, p, {
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
  const l = o != null && ((d = (c = n.axis[o.axisId]) == null ? void 0 : c.data) == null ? void 0 : d[o.dataIndex]), u = o != null && l != null && L({}, o, {
    value: l
  });
  return rk(i, a, u);
}, hD = de(x0, JN, It, Hs, b0, Kr, Tf, sk), gD = de(C0, eD, Tt, Hs, k0, Kr, Tf, sk), ak = (e, t) => e === void 0 ? [t.axis[t.axisIds[0]]] : e.map((r) => t.axis[r.axisId] ?? null).filter((r) => r !== null);
j(Hs, It, ak);
j(Hs, Tt, ak);
function lk(e, t, n) {
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
function mD(e, t) {
  return e.bandwidth() === 0 ? Math.floor((t - Math.min(...e.range()) + e.step() / 2) / e.step()) : Math.floor((t - Math.min(...e.range())) / e.step());
}
function yD(e, t, n) {
  var f;
  if (!Db(e.scale))
    return -1;
  const r = mD(e.scale, n), {
    barWidth: o,
    offset: i
  } = lk(e.scale.bandwidth(), t.groupNumber, e.barGapRatio), s = t.groupIndex * (o + i), a = (f = e.data) == null ? void 0 : f[r];
  if (a == null)
    return -1;
  const l = e.scale(a);
  if (l == null)
    return -1;
  const u = l + s, c = u + o, d = Math.min(u, c), p = Math.max(u, c);
  return n >= d && n <= p ? r : -1;
}
const vD = j(It, Tt, Ae, function({
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
      const x = (a ?? {})[g], y = x.xAxisId ?? u, m = x.yAxisId ?? c, v = t[y], C = r[m], b = x.layout === "horizontal" ? C : v, S = x.layout === "horizontal" ? v : C, k = x.layout === "horizontal" ? s.y : s.x, I = x.layout === "horizontal" ? s.x : s.y, $ = yD(b, {
        groupNumber: l.length,
        groupIndex: p
      }, k);
      if ($ === -1)
        continue;
      const O = x.visibleStackedData[$], R = S.scale(O[0]), w = S.scale(O[1]);
      if (R == null || w == null)
        continue;
      const E = Math.min(R, w), T = Math.max(R, w);
      I >= E && I <= T && (d = {
        seriesId: g,
        dataIndex: $
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
function Zo(e, t) {
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
        if (!Zo(e[i], t[i]))
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
        if (!Zo(s[1], t.get(s[0])))
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
      if (!Zo(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Cr(e) {
  if (st(e))
    return (n) => (e(n) ?? 0) + e.bandwidth() / 2;
  const t = e.domain();
  return t[0] === t[1] ? (n) => n === t[0] ? e(n) : NaN : (n) => e(n);
}
const uk = (e) => e.controlledCartesianAxisTooltip, gs = [];
function ck(e, t) {
  if (e === void 0)
    return gs;
  const n = t.axis[e.axisId];
  return n != null && n.triggerTooltip ? [e] : gs;
}
const I0 = El({
  memoizeOptions: {
    // Keep the same reference if array content is the same.
    // If possible, avoid this pattern by creating selectors that
    // uses string/number as arguments.
    resultEqualityCheck: Zo
  }
})(uk, zs, It, Kr, b0, (e, t, n, r, o) => {
  if (e !== void 0) {
    if (e.length === 0)
      return gs;
    const i = new Set(n.axisIds), s = e.filter(({
      axisId: a
    }) => i.has(a));
    return s.length === e.length ? e : s;
  }
  return r === "keyboard" ? ck(o, n) : t === null ? gs : n.axisIds.filter((i) => n.axis[i].triggerTooltip).map((i) => ({
    axisId: i,
    dataIndex: Hr(n.axis[i], t)
  })).filter(({
    dataIndex: i
  }) => i >= 0);
}), T0 = El({
  memoizeOptions: {
    // Keep the same reference if array content is the same.
    // If possible, avoid this pattern by creating selectors that
    // uses string/number as arguments.
    resultEqualityCheck: Zo
  }
})(uk, Fs, Tt, Kr, k0, (e, t, n, r, o) => {
  if (e !== void 0) {
    if (e.length === 0)
      return gs;
    const i = new Set(n.axisIds), s = e.filter(({
      axisId: a
    }) => i.has(a));
    return s.length === e.length ? e : s;
  }
  return r === "keyboard" ? ck(o, n) : t === null ? gs : n.axisIds.filter((i) => n.axis[i].triggerTooltip).map((i) => ({
    axisId: i,
    dataIndex: Hr(n.axis[i], t)
  })).filter(({
    dataIndex: i
  }) => i >= 0);
}), xD = j(I0, T0, (e, t) => e.length > 0 || t.length > 0);
function Vx(e, t) {
  var i;
  const n = t.axis[e.axisId];
  if (!n)
    return null;
  const r = (i = n.data) == null ? void 0 : i[e.dataIndex];
  if (r == null)
    return null;
  const o = Cr(n.scale)(r);
  return o === void 0 ? null : o;
}
const CD = de(I0, T0, It, Tt, dn, function(t, n, r, o, i, s) {
  if (t.length === 0 && n.length === 0)
    return null;
  if (t.length > 0) {
    const a = Vx(t[0], r);
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
    const a = Vx(n[0], o);
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
}), Hl = ({
  store: e,
  params: t,
  instance: n
}) => {
  _c({
    controlled: t.tooltipItem
  }), we(() => {
    if (e.state.tooltip.item !== t.tooltipItem) {
      const i = t.tooltipItem ? n.identifierWithType(t.tooltipItem, "seriesItem") : null;
      (e.state.tooltip.item === null || i === null ? i !== e.state.tooltip.item : n.serializeIdentifier(e.state.tooltip.item) !== n.serializeIdentifier(i)) && e.set("tooltip", L({}, e.state.tooltip, {
        item: i
      }));
    }
  }, [e, n, t.tooltipItem]);
  const r = ge(function(s) {
    var l;
    const a = e.state.tooltip.item;
    if (a !== null && (!s || n.serializeIdentifier(a) === n.serializeIdentifier(n.identifierWithType(s, "seriesItem")))) {
      (l = t.onTooltipItemChange) == null || l.call(t, null), e.state.tooltip.itemIsControlled || e.set("tooltip", L({}, e.state.tooltip, {
        item: null
      }));
      return;
    }
  });
  return {
    instance: {
      setTooltipItem: ge(function(s) {
        var a;
        w0(e.state.tooltip.item, s) || ((a = t.onTooltipItemChange) == null || a.call(t, s), e.state.tooltip.itemIsControlled || e.set("tooltip", L({}, e.state.tooltip, {
          item: s
        })));
      }),
      removeTooltipItem: r
    }
  };
};
Hl.getInitialState = (e, t) => ({
  tooltip: {
    itemIsControlled: e.tooltipItem !== void 0,
    item: e.tooltipItem == null ? null : hf(t)(
      // Need some as because the generic SeriesType can't be propagated to plugins methods.
      e.tooltipItem
    )
  }
});
Hl.params = {
  tooltipItem: !0,
  onTooltipItemChange: !0
};
const Pf = ({
  params: e,
  store: t,
  instance: n
}) => {
  const {
    chartsLayerContainerRef: r
  } = n;
  return fe(() => {
    const o = r.current;
    if (!o || e.disableKeyboardNavigation)
      return;
    function i(l) {
      const u = l.currentTarget, c = l.relatedTarget;
      u && c instanceof Node && !u.contains(c) && t.state.keyboardNavigation.isFocused && t.set("keyboardNavigation", L({}, t.state.keyboardNavigation, {
        isFocused: !1
      }));
    }
    function s() {
      t.state.keyboardNavigation.isFocused || t.update(L({}, t.state.highlight && {
        highlight: L({}, t.state.highlight, {
          lastUpdate: "keyboard"
        })
      }, t.state.interaction && {
        interaction: L({}, t.state.interaction, {
          lastUpdate: "keyboard"
        })
      }, {
        keyboardNavigation: L({}, t.state.keyboardNavigation, {
          isFocused: !0
        })
      }));
    }
    function a(l) {
      var f, h;
      let u = t.state.keyboardNavigation.item;
      const c = lt(t.state);
      let d = u == null ? void 0 : u.type;
      if (!d && (d = Object.keys(cb(t.state)).find((g) => c[g] !== void 0), d === void 0))
        return;
      const p = (h = (f = c[d]) == null ? void 0 : f.keyboardFocusHandler) == null ? void 0 : h.call(f, l);
      p && (u = p(u, t.state), u !== t.state.keyboardNavigation.item && (l.preventDefault(), t.update(L({}, t.state.highlight && {
        highlight: L({}, t.state.highlight, {
          lastUpdate: "keyboard"
        })
      }, t.state.interaction && {
        interaction: L({}, t.state.interaction, {
          lastUpdate: "keyboard"
        })
      }, {
        keyboardNavigation: L({}, t.state.keyboardNavigation, {
          item: u
        })
      }))));
    }
    return o.addEventListener("keydown", a), o.addEventListener("focusout", i), o.addEventListener("focusin", s), () => {
      o.removeEventListener("keydown", a), o.removeEventListener("focusout", i), o.removeEventListener("focusin", s);
    };
  }, [r, e.disableKeyboardNavigation, t]), we(() => {
    t.set("keyboardNavigation", L({}, t.state.keyboardNavigation, {
      enabled: !e.disableKeyboardNavigation
    }));
  }, [t, e.disableKeyboardNavigation]), {};
};
Pf.getInitialState = (e) => ({
  keyboardNavigation: {
    item: null,
    isFocused: !1,
    enabled: !e.disableKeyboardNavigation
  }
});
Pf.params = {
  disableKeyboardNavigation: !0
};
function Wl(e) {
  return db.getTypes().has(e);
}
function jx(e) {
  return Wl(e.type);
}
const wD = (e, t, n, r, o, i, s) => {
  var f;
  const a = r === "rotation" ? o[t].rotationExtremumGetter : o[t].radiusExtremumGetter, l = ((f = s[t]) == null ? void 0 : f.series) ?? {}, [u, c] = (a == null ? void 0 : a({
    series: l,
    axis: n,
    axisIndex: i,
    isDefaultAxis: i === 0
  })) ?? [1 / 0, -1 / 0], [d, p] = e;
  return [Math.min(u, d), Math.max(c, p)];
}, SD = (e, t, n, r, o) => {
  const s = Object.keys(n).filter(Wl).reduce((a, l) => wD(a, l, e, t, n, r, o), [1 / 0, -1 / 0]);
  return Number.isNaN(s[0]) || Number.isNaN(s[1]) ? [1 / 0, -1 / 0] : s;
}, bD = (e, t, n, r) => {
  const o = /* @__PURE__ */ new Set();
  return Object.keys(t).filter(Wl).forEach((s) => {
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
function Jo(e, t) {
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
  throw new Error(Me(26, e));
}
const dk = 1e-3;
function kD(e, t, n) {
  if (t === "rotation") {
    const s = [io(n.startAngle, 0), io(n.endAngle, 2 * Math.PI)], a = s[1] - s[0], l = a >= Math.PI * 2 - dk;
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
    range: [o === void 0 ? 0 : Jo(o, r), i === void 0 ? r : Jo(i, r)],
    isFullCircle: !1
  };
}
const ID = 0.2, TD = 0.1;
function fk({
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
  const i = bD(o, r, t, n[0].id), s = {};
  return n.forEach((a, l) => {
    const u = a, {
      range: c,
      isFullCircle: d
    } = kD(e, o, u), [p, f] = SD(u, o, r, l, t), h = !u.ignoreTooltip && i.has(u.id), g = u.data ?? [];
    if (Io(u)) {
      const O = u.categoryGapRatio ?? ID, R = u.barGapRatio ?? TD;
      if (s[u.id] = L({
        offset: 0,
        categoryGapRatio: O,
        barGapRatio: R,
        triggerTooltip: h
      }, u, {
        data: g,
        scale: ff(u.data, c).paddingInner(O).paddingOuter(O / 2),
        tickNumber: u.data.length,
        colorScale: u.colorMap && (u.colorMap.type === "ordinal" ? ps(L({
          values: u.data
        }, u.colorMap)) : Xi(u.colorMap)),
        isFullCircle: d
      }), Oc(u.data)) {
        const w = $h(u.data, c, u.tickNumber);
        s[u.id].valueFormatter = u.valueFormatter ?? w;
      }
    }
    if (To(u) && (s[u.id] = L({
      offset: 0,
      triggerTooltip: h
    }, u, {
      data: g,
      scale: Jm(u.data, c),
      tickNumber: u.data.length,
      colorScale: u.colorMap && (u.colorMap.type === "ordinal" ? ps(L({
        values: u.data
      }, u.colorMap)) : Xi(u.colorMap)),
      isFullCircle: d
    }), Oc(u.data))) {
      const O = $h(u.data, c, u.tickNumber);
      s[u.id].valueFormatter = u.valueFormatter ?? O;
    }
    if (!SL(u))
      return;
    const x = u.scaleType ?? "linear", y = u.domainLimit ?? "nice", m = [u.min ?? p, u.max ?? f];
    if (typeof y == "function") {
      const {
        min: O,
        max: R
      } = y(p, f);
      m[0] = O, m[1] = R;
    }
    const v = o === "rotation" ? 180 / 3 : 1, C = u.tickNumber ?? r0(u, m, o0(v * Math.abs(c[1] - c[0]))), b = Ll(x, m, c), S = y === "nice" ? b.nice(C) : b, [k, I] = S.domain(), $ = [u.min ?? k, u.max ?? I];
    s[u.id] = L({
      offset: 0,
      triggerTooltip: h
    }, u, {
      data: g,
      scaleType: x,
      scale: S.domain($),
      tickNumber: C,
      colorScale: u.colorMap && Xi(u.colorMap),
      isFullCircle: d
    });
  }), {
    axis: s,
    axisIds: n.map(({
      id: a
    }) => a)
  };
}
const pk = (e) => e.polarAxis, hk = j(pk, (e) => e == null ? void 0 : e.rotation), PD = j(pk, (e) => e == null ? void 0 : e.radius), Mo = de(hk, dn, Ae, lt, (e, t, n, r) => fk({
  drawingArea: t,
  formattedSeries: n,
  axis: e,
  seriesConfig: r,
  axisDirection: "rotation"
})), Eo = de(PD, dn, Ae, lt, (e, t, n, r) => fk({
  drawingArea: t,
  formattedSeries: n,
  axis: e,
  seriesConfig: r,
  axisDirection: "radius"
}));
function MD(e) {
  return {
    cx: e.left + e.width / 2,
    cy: e.top + e.height / 2
  };
}
const gk = de(dn, MD), ED = (e) => e.tooltip, mk = j(ED, (e) => (e == null ? void 0 : e.item) ?? null), AD = j(mk, (e) => e !== null), Mf = j(Kr, mk, ek, (e, t, n) => e === "keyboard" ? n : t ?? null), RD = j(Kr, AD, oD, (e, t, n) => e === "keyboard" ? n : t), _D = de(Mf, It, Tt, Mo, Eo, Ae, function(t, {
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
  }, d = Za(u) ? u.xAxisId ?? r[0] : void 0, p = Za(u) ? u.yAxisId ?? i[0] : void 0;
  return d !== void 0 && (c.x = n[d]), p !== void 0 && (c.y = o[p]), c;
}), OD = de(Mf, dn, lt, Ae, jL, _D, function(t, n, r, o, i, s, a) {
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
}), Gl = ({
  store: e,
  params: t,
  instance: n
}) => {
  _c({
    controlled: t.highlightedItem
  }), we(() => {
    if (t.highlightedItem !== void 0 && e.state.highlight.item !== t.highlightedItem) {
      if (t.highlightedItem === null) {
        e.set("highlight", L({}, e.state.highlight, {
          item: null
        }));
        return;
      }
      const i = n.identifierWithType(t.highlightedItem, "highlightItem"), s = n.cleanIdentifier(i, "highlightItem");
      e.set("highlight", L({}, e.state.highlight, {
        item: s
      }));
    }
  }, [e, t.highlightedItem, n]);
  const r = ge(() => {
    var s;
    (s = t.onHighlightChange) == null || s.call(t, null);
    const i = e.state.highlight;
    i.item === null || i.isControlled || e.set("highlight", {
      item: null,
      lastUpdate: "pointer",
      isControlled: !1
    });
  }), o = ge((i) => {
    var u;
    const s = e.state.highlight, a = n.identifierWithType(i, "highlightItem"), l = n.cleanIdentifier(a, "highlightItem");
    w0(s.item, l) || ((u = t.onHighlightChange) == null || u.call(t, l), !s.isControlled && e.set("highlight", {
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
Gl.getInitialState = (e, t) => ({
  highlight: {
    item: e.highlightedItem == null ? e.highlightedItem : ib(t.seriesConfig.config, hf(t)(
      // Need some as because the generic SeriesType can't be propagated to plugins methods.
      e.highlightedItem
    )),
    lastUpdate: "pointer",
    isControlled: e.highlightedItem !== void 0
  }
});
Gl.params = {
  highlightedItem: !0,
  onHighlightChange: !0
};
const $D = [zl, Hl, Bl, Bs, Gl];
function LD(e) {
  const {
    children: t,
    plugins: n = $D,
    pluginParams: r = {}
  } = e, {
    contextValue: o
  } = fN(n, r);
  return /* @__PURE__ */ M(Rb.Provider, {
    value: o,
    children: t
  });
}
const Pt = () => {
  const e = gt(Rb);
  if (e == null)
    throw new Error(Me(30));
  return e;
};
function ND(e) {
  "hasPointerCapture" in e.currentTarget && e.currentTarget.hasPointerCapture(e.pointerId) && e.currentTarget.releasePointerCapture(e.pointerId);
}
const Ef = (e) => {
  const {
    instance: t
  } = Pt(), n = V(!1), r = ge(() => {
    n.current = !0, t.setLastUpdateSource("pointer"), t.setTooltipItem(e), t.setHighlight(e);
  }), o = ge(() => {
    n.current = !1, t.removeTooltipItem(e), t.clearHighlight();
  });
  return fe(() => () => {
    n.current && o();
  }, [o]), Se(() => ({
    onPointerEnter: r,
    onPointerLeave: o,
    onPointerDown: ND
  }), [r, o]);
};
function me() {
  const e = Pt();
  if (!e)
    throw new Error(Me(32));
  return e.store;
}
function P0(e, t, n) {
  return (e == null ? void 0 : e.highlight) === "series" && (t == null ? void 0 : t.seriesId) === n;
}
function DD(e, t, n) {
  return P0(e, t, n) ? !1 : (e == null ? void 0 : e.fade) === "global" && t != null || (e == null ? void 0 : e.fade) === "series" && (t == null ? void 0 : t.seriesId) === n;
}
function yk(e, t, n) {
  return (e == null ? void 0 : e.highlight) === "item" && (t == null ? void 0 : t.seriesId) === n ? t.dataIndex : null;
}
function zD(e, t, n) {
  return P0(e, t, n) || yk(e, t, n) === (t == null ? void 0 : t.dataIndex) ? null : ((e == null ? void 0 : e.fade) === "series" || (e == null ? void 0 : e.fade) === "global") && (t == null ? void 0 : t.seriesId) === n ? t.dataIndex : null;
}
const FD = (e) => e.highlight, BD = de(Ae, (e) => {
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
}), Ws = de(FD, ek, function(t, n) {
  return t.isControlled || t.lastUpdate === "pointer" ? t.item : n;
}), Vl = j(BD, Ws, function(t, n) {
  var o;
  if (!n)
    return null;
  const r = (o = t[n.type]) == null ? void 0 : o.get(n.seriesId);
  return r === void 0 ? null : r;
}), UD = () => "none", HD = de(Vl, Ws, lt, function(t, n, r) {
  if (n === null || t === null)
    return UD;
  const o = r[n.type], i = o.isHighlightedCreator(t, n), s = o.isFadedCreator(t, n);
  return (a) => i(a) ? "highlighted" : s(a) ? "faded" : "none";
});
function vk(e) {
  return HD(e);
}
const WD = de(vk, function(t, n) {
  return t(n);
});
function GD(e, t) {
  return WD(e, t);
}
j(Vl, Ws, function(t, n, r) {
  return P0(t, n, r);
});
j(Vl, Ws, function(t, n, r) {
  return DD(t, n, r);
});
j(Vl, Ws, function(t, n, r) {
  return zD(t, n, r);
});
j(Vl, Ws, function(t, n, r) {
  return yk(t, n, r);
});
function VD() {
  return !1;
}
function Af(e, t) {
  return !e || !t ? VD : function(r) {
    return r ? e.highlight === "series" ? r.seriesId === t.seriesId : e.highlight === "item" ? r.dataIndex === t.dataIndex && r.seriesId === t.seriesId : !1 : !1;
  };
}
function jD() {
  return !1;
}
function Rf(e, t) {
  return !e || !t ? jD : function(r) {
    return r ? e.fade === "series" ? r.seriesId === t.seriesId && r.dataIndex !== t.dataIndex : e.fade === "global" ? r.seriesId !== t.seriesId || r.dataIndex !== t.dataIndex : !1 : !1;
  };
}
function xk(e) {
  return me().use(GD, e);
}
function Yx(e) {
  return e;
}
const { cbrt: Op, sqrt: $p, PI: Pi } = Math, YD = (e, t, n, r, o) => {
  const i = t + n * e, s = i ** 2 + r;
  if (s > 0) {
    const c = $p(s);
    return Op(i + c) + Op(i - c) - o;
  }
  const a = Op($p(i * i - s)), l = i ? Math.atan($p(-s) / i) : -Pi / 2;
  let u;
  return n < 0 ? u = (i > 0 ? 2 * Pi : Pi) - l : o < 0 ? u = (i > 0 ? 2 * Pi : -3 * Pi) + l : u = (i > 0 ? 0 : Pi) + l, 2 * a * Math.cos(u / 3) - o;
}, KD = (e, t, n, r) => ((t * e + 3 * n) * e + r) * e;
function Ck(e, t, n, r) {
  if (!(0 <= e && e <= 1 && 0 <= n && n <= 1))
    throw new Error("bezier x values must be in [0, 1] range");
  if (e === t && n === r)
    return Yx;
  const o = 6 * (3 * e - 3 * n + 1), i = 6 * (n - 2 * e), s = 3 * e, a = o * o, l = i * i, u = i / o, c = 3 * i * s / a - l * i / (a * o), d = 2 * s / o - l / a, p = d * d * d, f = 3 / o, h = 3 * t - 3 * r + 1, g = r - 2 * t, x = 3 * t, y = o ? YD : Yx;
  return function(v) {
    return v === 0 || v === 1 ? v : KD(y(v, c, f, p, u), h, g, x);
  };
}
const Gs = 300, jl = "cubic-bezier(0.66, 0, 0.34, 1)", XD = Ck(0.66, 0, 0.34, 1);
var ms = 0, va = 0, ta = 0, wk = 1e3, $c, xa, Lc = 0, oi = 0, _f = 0, el = typeof performance == "object" && performance.now ? performance : Date, Sk = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function M0() {
  return oi || (Sk(qD), oi = el.now() + _f);
}
function qD() {
  oi = 0;
}
function Nc() {
  this._call = this._time = this._next = null;
}
Nc.prototype = bk.prototype = {
  constructor: Nc,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? M0() : +n) + (t == null ? 0 : +t), !this._next && xa !== this && (xa ? xa._next = this : $c = this, xa = this), this._call = e, this._time = n, Dh();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Dh());
  }
};
function bk(e, t, n) {
  var r = new Nc();
  return r.restart(e, t, n), r;
}
function QD() {
  M0(), ++ms;
  for (var e = $c, t; e; )
    (t = oi - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --ms;
}
function Kx() {
  oi = (Lc = el.now()) + _f, ms = va = 0;
  try {
    QD();
  } finally {
    ms = 0, JD(), oi = 0;
  }
}
function ZD() {
  var e = el.now(), t = e - Lc;
  t > wk && (_f -= t, Lc = e);
}
function JD() {
  for (var e, t = $c, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : $c = n);
  xa = e, Dh(r);
}
function Dh(e) {
  if (!ms) {
    va && (va = clearTimeout(va));
    var t = e - oi;
    t > 24 ? (e < 1 / 0 && (va = setTimeout(Kx, e - el.now() - _f)), ta && (ta = clearInterval(ta))) : (ta || (Lc = el.now(), ta = setInterval(ZD, wk)), ms = 1, Sk(Kx));
  }
}
function e5(e, t, n) {
  var r = new Nc();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
let t5 = class {
  /**
   * Create a new ResumableTransition.
   * @param duration Duration in milliseconds
   * @param easingFn The easing function
   * @param onTick Callback function called on each animation frame with the eased time in range [0, 1].
   */
  constructor(t, n, r) {
    pe(this, "elapsed", 0);
    pe(this, "transitionTimer", null);
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
    const t = M0() - this.elapsed;
    return this.transitionTimer = bk((n) => this.timerCallback(n), 0, t), this;
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
    return this.stop(), e5(() => this.timerCallback(this.duration)), this;
  }
};
function n5(e, t) {
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
function r5(e, {
  createInterpolator: t,
  applyProps: n,
  skip: r,
  initialProps: o = e
}) {
  const i = V(o), s = V(null), a = V(null), l = V(e);
  we(() => {
    l.current = e;
  }, [e]), we(() => {
    var d;
    r && ((d = s.current) == null || d.finish(), s.current = null, a.current = null, i.current = e);
  }, [e, r]);
  const u = le((d) => {
    const p = i.current, f = t(p, e);
    s.current = new t5(Gs, XD, (h) => {
      const g = f(h);
      i.current = g, n(d, g);
    });
  }, [n, t, e]);
  return [le((d) => {
    var f, h, g, x;
    if (d === null) {
      (f = s.current) == null || f.stop();
      return;
    }
    const p = a.current;
    if (p === d) {
      if (n5(l.current, e)) {
        (h = s.current) == null || h.resume();
        return;
      }
      (g = s.current) == null || g.stop();
    }
    p && ((x = s.current) == null || x.stop()), a.current = d, (s.current || !r) && u(d);
  }, [u, e, r]), i.current];
}
function kk(e, {
  createInterpolator: t,
  transformProps: n,
  applyProps: r,
  skip: o,
  initialProps: i = e,
  ref: s
}) {
  const a = n ?? ((d) => d), [l, u] = r5(e, {
    initialProps: i,
    createInterpolator: t,
    applyProps: (d, p) => r(d, a(p)),
    skip: o
  }), c = n(o ? e : u);
  return L({}, c, {
    ref: ot(l, s)
  });
}
function o5(e) {
  return kk({
    d: e.d
  }, {
    createInterpolator: (t, n) => {
      const r = Dm(t.d, n.d);
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
function Ik(e) {
  return e.replace(" ", "_");
}
function Wn() {
  return me().use(dn);
}
function Yl() {
  return me().use(VL);
}
const i5 = (e) => (t, n) => Math.atan2(t - e.cx, e.cy - n);
function Of(e) {
  return (e % 360 + 360) % 360;
}
const Lp = 2 * Math.PI;
function Np(e) {
  return (e % Lp + Lp) % Lp;
}
function Xx(e, t) {
  const {
    scale: n,
    data: r,
    reverse: o,
    isFullCircle: i
  } = e, [s, a] = n.range(), l = Np(t - s), u = Np(a - s);
  if (!i && l > u)
    return -1;
  if (!st(n)) {
    if (r === void 0)
      return -1;
    const d = s + Np(t - s), p = Nr(n.invert(d));
    return v0(r, p);
  }
  if (!r)
    return -1;
  let c;
  return n.bandwidth() === 0 ? (c = Math.floor((l + n.step() / 2) / n.step()), i && (c = c % r.length)) : c = Math.floor(l / n.step()), c < 0 || c >= r.length ? -1 : o ? r.length - 1 - c : c;
}
function qx(e, t) {
  const {
    scale: n,
    data: r,
    reverse: o
  } = e;
  if (!st(n)) {
    if (r === void 0)
      return -1;
    const a = Nr(n.invert(t));
    return v0(r, a);
  }
  if (!r)
    return -1;
  let i;
  const s = t - Math.min(...n.range());
  return n.bandwidth() === 0 ? i = Math.floor((s + n.step() / 2) / n.step()) : i = Math.floor(s / n.step()), i < 0 || i >= r.length ? -1 : o ? r.length - 1 - i : i;
}
const $f = (e, t) => t, Lf = (e, t) => t;
function Nf(e, t, n, r) {
  if (r === "rotation") {
    const i = t;
    return Array.isArray(n) ? n.map((s) => Xx(i.axis[s], e)) : Xx(i.axis[n], e);
  }
  const o = t;
  return Array.isArray(n) ? n.map((i) => qx(o.axis[i], e)) : qx(o.axis[n], e);
}
const Tk = j(zs, Fs, gk, (e, t, n) => e === null || t === null ? null : i5(n)(e, t)), s5 = j(Tk, Mo, $f, (e, t, n) => e === null ? null : Nf(e, t, n ?? t.axisIds[0], "rotation")), Pk = j(Tk, Mo, Lf, (e, t, n) => e === null ? null : Nf(e, t, n ?? t.axisIds, "rotation"));
j(Mo, s5, $f, (e, t, n) => {
  var o;
  if (n = n ?? e.axisIds[0], t === null || t === -1 || e.axisIds.length === 0)
    return null;
  const r = (o = e.axis[n]) == null ? void 0 : o.data;
  return r ? r[t] : null;
});
j(Mo, Pk, Lf, (e, t, n) => (n = n ?? e.axisIds, t === null ? null : n.map((r, o) => {
  var s;
  const i = t[o];
  return i === -1 ? null : (s = e.axis[r].data) == null ? void 0 : s[i];
})));
const Mk = El({
  memoizeOptions: {
    // Keep the same reference if array content is the same.
    // If possible, avoid this pattern by creating selectors that
    // uses string/number as arguments.
    resultEqualityCheck: Zo
  }
})(Pk, Mo, (e, t) => e === null ? [] : t.axisIds.map((n, r) => ({
  axisId: n,
  dataIndex: e[r]
})).filter(({
  axisId: n,
  dataIndex: r
}) => t.axis[n].triggerTooltip && r >= 0)), Ek = j(zs, Fs, gk, (e, t, n) => e === null || t === null ? null : Math.sqrt((e - n.cx) ** 2 + (t - n.cy) ** 2)), a5 = j(Ek, Eo, $f, (e, t, n) => e === null ? null : Nf(e, t, n ?? t.axisIds[0], "radius")), Ak = j(Ek, Eo, Lf, (e, t, n) => e === null ? null : Nf(e, t, n ?? t.axisIds, "radius"));
j(Eo, a5, $f, (e, t, n) => {
  var o;
  if (n = n ?? e.axisIds[0], t === null || t === -1 || e.axisIds.length === 0)
    return null;
  const r = (o = e.axis[n]) == null ? void 0 : o.data;
  return r ? r[t] : null;
});
j(Eo, Ak, Lf, (e, t, n) => (n = n ?? e.axisIds, t === null ? null : n.map((r, o) => {
  var s;
  const i = t[o];
  return i === -1 ? null : (s = e.axis[r].data) == null ? void 0 : s[i];
})));
const Rk = El({
  memoizeOptions: {
    // Keep the same reference if array content is the same.
    // If possible, avoid this pattern by creating selectors that
    // uses string/number as arguments.
    resultEqualityCheck: Zo
  }
})(Ak, Eo, (e, t) => e === null ? [] : t.axisIds.map((n, r) => ({
  axisId: n,
  dataIndex: e[r]
})).filter(({
  axisId: n,
  dataIndex: r
}) => t.axis[n].triggerTooltip && r >= 0)), l5 = j(Mk, Rk, (e, t) => e.length > 0 || t.length > 0);
function Ut() {
  const e = me(), {
    axis: t,
    axisIds: n
  } = e.use(It);
  return {
    xAxis: t,
    xAxisIds: n
  };
}
function Ht() {
  const e = me(), {
    axis: t,
    axisIds: n
  } = e.use(Tt);
  return {
    yAxis: t,
    yAxisIds: n
  };
}
function u5(e) {
  const t = me(), {
    axis: n,
    axisIds: r
  } = t.use(It), o = r[0];
  return n[o];
}
function c5(e) {
  const t = me(), {
    axis: n,
    axisIds: r
  } = t.use(Tt), o = r[0];
  return n[o];
}
function E0() {
  const e = me(), {
    axis: t,
    axisIds: n
  } = e.use(Mo);
  return {
    rotationAxis: t,
    rotationAxisIds: n
  };
}
function A0() {
  const e = me(), {
    axis: t,
    axisIds: n
  } = e.use(Eo);
  return {
    radiusAxis: t,
    radiusAxisIds: n
  };
}
function d5(e) {
  const t = me(), {
    axis: n,
    axisIds: r
  } = t.use(Mo), o = r[0];
  return n[o];
}
function f5(e) {
  const t = me(), {
    axis: n,
    axisIds: r
  } = t.use(Eo), o = r[0];
  return n[o];
}
function R0() {
  const e = me(), {
    axis: t,
    axisIds: n
  } = e.use(Vb) ?? {
    axis: {},
    axisIds: []
  };
  return {
    zAxis: t,
    zAxisIds: n
  };
}
function _0() {
  const {
    instance: e
  } = Pt();
  return e.chartsLayerContainerRef;
}
function Kl() {
  return me().use(Ae);
}
const _k = j(Ae, (e, t) => e[t]);
de(Ae, (e, t, n) => {
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
const p5 = (e) => me().use(_k, e);
function Xl() {
  return p5("line");
}
function h5() {
  return me().use(vk);
}
function g5(e, t) {
  return Object.keys(e).flatMap((n) => {
    const r = t[n].legendGetter;
    return r === void 0 ? [] : r(e[n]);
  });
}
function m5() {
  const e = Kl(), n = me().use(lt);
  return {
    items: g5(e, n)
  };
}
function O0() {
  const e = Yl();
  return le((t) => `${e}-gradient-${t}`, [e]);
}
function y5() {
  const e = Yl();
  return le((t) => `${e}-gradient-${t}-object-bound`, [e]);
}
function v5(e) {
  return kk({
    d: e.d
  }, {
    createInterpolator: (t, n) => {
      const r = Dm(t.d, n.d);
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
function Pe(e) {
  return function() {
    return e;
  };
}
const Ok = Math.cos, Dc = Math.sin, tr = Math.sqrt, Qx = 1e-12, zc = Math.PI, ei = 2 * zc, zh = Math.PI, Fh = 2 * zh, Uo = 1e-6, x5 = Fh - Uo;
function $k(e) {
  this._ += e[0];
  for (let t = 1, n = e.length; t < n; ++t)
    this._ += arguments[t] + e[t];
}
function C5(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return $k;
  const n = 10 ** t;
  return function(r) {
    this._ += r[0];
    for (let o = 1, i = r.length; o < i; ++o)
      this._ += Math.round(arguments[o] * n) / n + r[o];
  };
}
class w5 {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? $k : C5(t);
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
    else if (p > Uo) if (!(Math.abs(d * l - u * c) > Uo) || !i)
      this._append`L${this._x1 = t},${this._y1 = n}`;
    else {
      let f = r - s, h = o - a, g = l * l + u * u, x = f * f + h * h, y = Math.sqrt(g), m = Math.sqrt(p), v = i * Math.tan((zh - Math.acos((g + p - x) / (2 * y * m))) / 2), C = v / m, b = v / y;
      Math.abs(C - 1) > Uo && this._append`L${t + C * c},${n + C * d}`, this._append`A${i},${i},0,0,${+(d * f > c * h)},${this._x1 = t + b * l},${this._y1 = n + b * u}`;
    }
  }
  arc(t, n, r, o, i, s) {
    if (t = +t, n = +n, r = +r, s = !!s, r < 0) throw new Error(`negative radius: ${r}`);
    let a = r * Math.cos(o), l = r * Math.sin(o), u = t + a, c = n + l, d = 1 ^ s, p = s ? o - i : i - o;
    this._x1 === null ? this._append`M${u},${c}` : (Math.abs(this._x1 - u) > Uo || Math.abs(this._y1 - c) > Uo) && this._append`L${u},${c}`, r && (p < 0 && (p = p % Fh + Fh), p > x5 ? this._append`A${r},${r},0,1,${d},${t - a},${n - l}A${r},${r},0,1,${d},${this._x1 = u},${this._y1 = c}` : p > Uo && this._append`A${r},${r},0,${+(p >= zh)},${d},${this._x1 = t + r * Math.cos(i)},${this._y1 = n + r * Math.sin(i)}`);
  }
  rect(t, n, r, o) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +n}h${r = +r}v${+o}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function $0(e) {
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
  }, () => new w5(t);
}
function Df(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Lk(e) {
  this._context = e;
}
Lk.prototype = {
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
function L0(e) {
  return new Lk(e);
}
function Nk(e) {
  return e[0];
}
function Dk(e) {
  return e[1];
}
function zk(e, t) {
  var n = Pe(!0), r = null, o = L0, i = null, s = $0(a);
  e = typeof e == "function" ? e : e === void 0 ? Nk : Pe(e), t = typeof t == "function" ? t : t === void 0 ? Dk : Pe(t);
  function a(l) {
    var u, c = (l = Df(l)).length, d, p = !1, f;
    for (r == null && (i = o(f = s())), u = 0; u <= c; ++u)
      !(u < c && n(d = l[u], u, l)) === p && ((p = !p) ? i.lineStart() : i.lineEnd()), p && i.point(+e(d, u, l), +t(d, u, l));
    if (f) return i = null, f + "" || null;
  }
  return a.x = function(l) {
    return arguments.length ? (e = typeof l == "function" ? l : Pe(+l), a) : e;
  }, a.y = function(l) {
    return arguments.length ? (t = typeof l == "function" ? l : Pe(+l), a) : t;
  }, a.defined = function(l) {
    return arguments.length ? (n = typeof l == "function" ? l : Pe(!!l), a) : n;
  }, a.curve = function(l) {
    return arguments.length ? (o = l, r != null && (i = o(r)), a) : o;
  }, a.context = function(l) {
    return arguments.length ? (l == null ? r = i = null : i = o(r = l), a) : r;
  }, a;
}
function S5(e, t, n) {
  var r = null, o = Pe(!0), i = null, s = L0, a = null, l = $0(u);
  e = typeof e == "function" ? e : e === void 0 ? Nk : Pe(+e), t = typeof t == "function" ? t : Pe(t === void 0 ? 0 : +t), n = typeof n == "function" ? n : n === void 0 ? Dk : Pe(+n);
  function u(d) {
    var p, f, h, g = (d = Df(d)).length, x, y = !1, m, v = new Array(g), C = new Array(g);
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
    return zk().defined(o).curve(s).context(i);
  }
  return u.x = function(d) {
    return arguments.length ? (e = typeof d == "function" ? d : Pe(+d), r = null, u) : e;
  }, u.x0 = function(d) {
    return arguments.length ? (e = typeof d == "function" ? d : Pe(+d), u) : e;
  }, u.x1 = function(d) {
    return arguments.length ? (r = d == null ? null : typeof d == "function" ? d : Pe(+d), u) : r;
  }, u.y = function(d) {
    return arguments.length ? (t = typeof d == "function" ? d : Pe(+d), n = null, u) : t;
  }, u.y0 = function(d) {
    return arguments.length ? (t = typeof d == "function" ? d : Pe(+d), u) : t;
  }, u.y1 = function(d) {
    return arguments.length ? (n = d == null ? null : typeof d == "function" ? d : Pe(+d), u) : n;
  }, u.lineX0 = u.lineY0 = function() {
    return c().x(e).y(t);
  }, u.lineY1 = function() {
    return c().x(e).y(n);
  }, u.lineX1 = function() {
    return c().x(r).y(t);
  }, u.defined = function(d) {
    return arguments.length ? (o = typeof d == "function" ? d : Pe(!!d), u) : o;
  }, u.curve = function(d) {
    return arguments.length ? (s = d, i != null && (a = s(i)), u) : s;
  }, u.context = function(d) {
    return arguments.length ? (d == null ? i = a = null : a = s(i = d), u) : i;
  }, u;
}
function b5(e, t) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function k5(e) {
  return e;
}
function I5() {
  var e = k5, t = b5, n = null, r = Pe(0), o = Pe(ei), i = Pe(0);
  function s(a) {
    var l, u = (a = Df(a)).length, c, d, p = 0, f = new Array(u), h = new Array(u), g = +r.apply(this, arguments), x = Math.min(ei, Math.max(-ei, o.apply(this, arguments) - g)), y, m = Math.min(Math.abs(x) / u, i.apply(this, arguments)), v = m * (x < 0 ? -1 : 1), C;
    for (l = 0; l < u; ++l)
      (C = h[f[l] = l] = +e(a[l], l, a)) > 0 && (p += C);
    for (t != null ? f.sort(function(b, S) {
      return t(h[b], h[S]);
    }) : n != null && f.sort(function(b, S) {
      return n(a[b], a[S]);
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
    return arguments.length ? (e = typeof a == "function" ? a : Pe(+a), s) : e;
  }, s.sortValues = function(a) {
    return arguments.length ? (t = a, n = null, s) : t;
  }, s.sort = function(a) {
    return arguments.length ? (n = a, t = null, s) : n;
  }, s.startAngle = function(a) {
    return arguments.length ? (r = typeof a == "function" ? a : Pe(+a), s) : r;
  }, s.endAngle = function(a) {
    return arguments.length ? (o = typeof a == "function" ? a : Pe(+a), s) : o;
  }, s.padAngle = function(a) {
    return arguments.length ? (i = typeof a == "function" ? a : Pe(+a), s) : i;
  }, s;
}
class Fk {
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
function T5(e) {
  return new Fk(e, !0);
}
function P5(e) {
  return new Fk(e, !1);
}
const Bk = {
  draw(e, t) {
    const n = tr(t / zc);
    e.moveTo(n, 0), e.arc(0, 0, n, 0, ei);
  }
}, M5 = {
  draw(e, t) {
    const n = tr(t / 5) / 2;
    e.moveTo(-3 * n, -n), e.lineTo(-n, -n), e.lineTo(-n, -3 * n), e.lineTo(n, -3 * n), e.lineTo(n, -n), e.lineTo(3 * n, -n), e.lineTo(3 * n, n), e.lineTo(n, n), e.lineTo(n, 3 * n), e.lineTo(-n, 3 * n), e.lineTo(-n, n), e.lineTo(-3 * n, n), e.closePath();
  }
}, Uk = tr(1 / 3), E5 = Uk * 2, A5 = {
  draw(e, t) {
    const n = tr(t / E5), r = n * Uk;
    e.moveTo(0, -n), e.lineTo(r, 0), e.lineTo(0, n), e.lineTo(-r, 0), e.closePath();
  }
}, R5 = {
  draw(e, t) {
    const n = tr(t), r = -n / 2;
    e.rect(r, r, n, n);
  }
}, _5 = 0.8908130915292852, Hk = Dc(zc / 10) / Dc(7 * zc / 10), O5 = Dc(ei / 10) * Hk, $5 = -Ok(ei / 10) * Hk, L5 = {
  draw(e, t) {
    const n = tr(t * _5), r = O5 * n, o = $5 * n;
    e.moveTo(0, -n), e.lineTo(r, o);
    for (let i = 1; i < 5; ++i) {
      const s = ei * i / 5, a = Ok(s), l = Dc(s);
      e.lineTo(l * n, -a * n), e.lineTo(a * r - l * o, l * r + a * o);
    }
    e.closePath();
  }
}, Dp = tr(3), N5 = {
  draw(e, t) {
    const n = -tr(t / (Dp * 3));
    e.moveTo(0, n * 2), e.lineTo(-Dp * n, -n), e.lineTo(Dp * n, -n), e.closePath();
  }
}, bn = -0.5, kn = tr(3) / 2, Bh = 1 / tr(12), D5 = (Bh / 2 + 1) * 3, z5 = {
  draw(e, t) {
    const n = tr(t / D5), r = n / 2, o = n * Bh, i = r, s = n * Bh + n, a = -i, l = s;
    e.moveTo(r, o), e.lineTo(i, s), e.lineTo(a, l), e.lineTo(bn * r - kn * o, kn * r + bn * o), e.lineTo(bn * i - kn * s, kn * i + bn * s), e.lineTo(bn * a - kn * l, kn * a + bn * l), e.lineTo(bn * r + kn * o, bn * o - kn * r), e.lineTo(bn * i + kn * s, bn * s - kn * i), e.lineTo(bn * a + kn * l, bn * l - kn * a), e.closePath();
  }
}, N0 = [
  Bk,
  M5,
  A5,
  R5,
  L5,
  N5,
  z5
];
function D0(e, t) {
  let n = null, r = $0(o);
  e = typeof e == "function" ? e : Pe(e || Bk), t = typeof t == "function" ? t : Pe(t === void 0 ? 64 : +t);
  function o() {
    let i;
    if (n || (n = i = r()), e.apply(this, arguments).draw(n, +t.apply(this, arguments)), i) return n = null, i + "" || null;
  }
  return o.type = function(i) {
    return arguments.length ? (e = typeof i == "function" ? i : Pe(i), o) : e;
  }, o.size = function(i) {
    return arguments.length ? (t = typeof i == "function" ? i : Pe(+i), o) : t;
  }, o.context = function(i) {
    return arguments.length ? (n = i ?? null, o) : n;
  }, o;
}
function Zx(e, t, n) {
  e._context.bezierCurveTo(
    e._x1 + e._k * (e._x2 - e._x0),
    e._y1 + e._k * (e._y2 - e._y0),
    e._x2 + e._k * (e._x1 - t),
    e._y2 + e._k * (e._y1 - n),
    e._x2,
    e._y2
  );
}
function z0(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
z0.prototype = {
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
        Zx(this, this._x1, this._y1);
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
        Zx(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
(function e(t) {
  function n(r) {
    return new z0(r, t);
  }
  return n.tension = function(r) {
    return e(+r);
  }, n;
})(0);
function F5(e, t, n) {
  var r = e._x1, o = e._y1, i = e._x2, s = e._y2;
  if (e._l01_a > Qx) {
    var a = 2 * e._l01_2a + 3 * e._l01_a * e._l12_a + e._l12_2a, l = 3 * e._l01_a * (e._l01_a + e._l12_a);
    r = (r * a - e._x0 * e._l12_2a + e._x2 * e._l01_2a) / l, o = (o * a - e._y0 * e._l12_2a + e._y2 * e._l01_2a) / l;
  }
  if (e._l23_a > Qx) {
    var u = 2 * e._l23_2a + 3 * e._l23_a * e._l12_a + e._l12_2a, c = 3 * e._l23_a * (e._l23_a + e._l12_a);
    i = (i * u + e._x1 * e._l23_2a - t * e._l12_2a) / c, s = (s * u + e._y1 * e._l23_2a - n * e._l12_2a) / c;
  }
  e._context.bezierCurveTo(r, o, i, s, e._x2, e._y2);
}
function Wk(e, t) {
  this._context = e, this._alpha = t;
}
Wk.prototype = {
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
        F5(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const B5 = function e(t) {
  function n(r) {
    return t ? new Wk(r, t) : new z0(r, 0);
  }
  return n.alpha = function(r) {
    return e(+r);
  }, n;
}(0.5);
function Jx(e) {
  return e < 0 ? -1 : 1;
}
function e1(e, t, n) {
  var r = e._x1 - e._x0, o = t - e._x1, i = (e._y1 - e._y0) / (r || o < 0 && -0), s = (n - e._y1) / (o || r < 0 && -0), a = (i * o + s * r) / (r + o);
  return (Jx(i) + Jx(s)) * Math.min(Math.abs(i), Math.abs(s), 0.5 * Math.abs(a)) || 0;
}
function t1(e, t) {
  var n = e._x1 - e._x0;
  return n ? (3 * (e._y1 - e._y0) / n - t) / 2 : t;
}
function zp(e, t, n) {
  var r = e._x0, o = e._y0, i = e._x1, s = e._y1, a = (i - r) / 3;
  e._context.bezierCurveTo(r + a, o + a * t, i - a, s - a * n, i, s);
}
function Fc(e) {
  this._context = e;
}
Fc.prototype = {
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
        zp(this, this._t0, t1(this, this._t0));
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
          this._point = 3, zp(this, t1(this, n = e1(this, e, t)), n);
          break;
        default:
          zp(this, this._t0, n = e1(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = n;
    }
  }
};
function Gk(e) {
  this._context = new Vk(e);
}
(Gk.prototype = Object.create(Fc.prototype)).point = function(e, t) {
  Fc.prototype.point.call(this, t, e);
};
function Vk(e) {
  this._context = e;
}
Vk.prototype = {
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
function n1(e) {
  return new Fc(e);
}
function U5(e) {
  return new Gk(e);
}
function jk(e) {
  this._context = e;
}
jk.prototype = {
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
        for (var r = r1(e), o = r1(t), i = 0, s = 1; s < n; ++i, ++s)
          this._context.bezierCurveTo(r[0][i], o[0][i], r[1][i], o[1][i], e[s], t[s]);
    (this._line || this._line !== 0 && n === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
function r1(e) {
  var t, n = e.length - 1, r, o = new Array(n), i = new Array(n), s = new Array(n);
  for (o[0] = 0, i[0] = 2, s[0] = e[0] + 2 * e[1], t = 1; t < n - 1; ++t) o[t] = 1, i[t] = 4, s[t] = 4 * e[t] + 2 * e[t + 1];
  for (o[n - 1] = 2, i[n - 1] = 7, s[n - 1] = 8 * e[n - 1] + e[n], t = 1; t < n; ++t) r = o[t] / i[t - 1], i[t] -= r, s[t] -= r * s[t - 1];
  for (o[n - 1] = s[n - 1] / i[n - 1], t = n - 2; t >= 0; --t) o[t] = (s[t] - o[t + 1]) / i[t];
  for (i[n - 1] = (e[n] + o[n - 1]) / 2, t = 0; t < n - 1; ++t) i[t] = 2 * e[t + 1] - o[t + 1];
  return [o, i];
}
function H5(e) {
  return new jk(e);
}
function zf(e, t) {
  this._context = e, this._t = t;
}
zf.prototype = {
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
function W5(e) {
  return new zf(e, 0.5);
}
function G5(e) {
  return new zf(e, 0);
}
function V5(e) {
  return new zf(e, 1);
}
function ys(e, t) {
  if ((s = e.length) > 1)
    for (var n = 1, r, o, i = e[t[0]], s, a = i.length; n < s; ++n)
      for (o = i, i = e[t[n]], r = 0; r < a; ++r)
        i[r][1] += i[r][0] = isNaN(o[r][1]) ? o[r][0] : o[r][1];
}
function vs(e) {
  for (var t = e.length, n = new Array(t); --t >= 0; ) n[t] = t;
  return n;
}
function j5(e, t) {
  return e[t];
}
function Y5(e) {
  const t = [];
  return t.key = e, t;
}
function Bc() {
  var e = Pe([]), t = vs, n = ys, r = j5;
  function o(i) {
    var s = Array.from(e.apply(this, arguments), Y5), a, l = s.length, u = -1, c;
    for (const d of i)
      for (a = 0, ++u; a < l; ++a)
        (s[a][u] = [0, +r(d, s[a].key, u, i)]).data = d;
    for (a = 0, c = Df(t(s)); a < l; ++a)
      s[c[a]].index = a;
    return n(s, c), s;
  }
  return o.keys = function(i) {
    return arguments.length ? (e = typeof i == "function" ? i : Pe(Array.from(i)), o) : e;
  }, o.value = function(i) {
    return arguments.length ? (r = typeof i == "function" ? i : Pe(+i), o) : r;
  }, o.order = function(i) {
    return arguments.length ? (t = i == null ? vs : typeof i == "function" ? i : Pe(Array.from(i)), o) : t;
  }, o.offset = function(i) {
    return arguments.length ? (n = i ?? ys, o) : n;
  }, o;
}
function K5(e, t) {
  if ((r = e.length) > 0) {
    for (var n, r, o = 0, i = e[0].length, s; o < i; ++o) {
      for (s = n = 0; n < r; ++n) s += e[n][o][1] || 0;
      if (s) for (n = 0; n < r; ++n) e[n][o][1] /= s;
    }
    ys(e, t);
  }
}
function X5(e, t) {
  if ((o = e.length) > 0) {
    for (var n = 0, r = e[t[0]], o, i = r.length; n < i; ++n) {
      for (var s = 0, a = 0; s < o; ++s) a += e[s][n][1] || 0;
      r[n][1] += r[n][0] = -a / 2;
    }
    ys(e, t);
  }
}
function q5(e, t) {
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
    o[r - 1][1] += o[r - 1][0] = n, ys(e, t);
  }
}
function Yk(e) {
  var t = e.map(Q5);
  return vs(e).sort(function(n, r) {
    return t[n] - t[r];
  });
}
function Q5(e) {
  for (var t = -1, n = 0, r = e.length, o, i = -1 / 0; ++t < r; ) (o = +e[t][1]) > i && (i = o, n = t);
  return n;
}
function Kk(e) {
  var t = e.map(Xk);
  return vs(e).sort(function(n, r) {
    return t[n] - t[r];
  });
}
function Xk(e) {
  for (var t = 0, n = -1, r = e.length, o; ++n < r; ) (o = +e[n][1]) && (t += o);
  return t;
}
function Z5(e) {
  return Kk(e).reverse();
}
function J5(e) {
  var t = e.length, n, r, o = e.map(Xk), i = Yk(e), s = 0, a = 0, l = [], u = [];
  for (n = 0; n < t; ++n)
    r = i[n], s < a ? (s += o[r], l.push(r)) : (a += o[r], u.push(r));
  return u.reverse().concat(l);
}
function ez(e) {
  return vs(e).reverse();
}
function tz() {
  const {
    instance: e
  } = Pt();
  return e.chartRootRef;
}
const nz = {
  "image/png": "PNG",
  "image/jpeg": "JPEG",
  "image/webp": "WebP"
}, rz = (e) => ({
  components: {
    MuiChartsLocalizationProvider: {
      defaultProps: {
        localeText: L({}, e)
      }
    }
  }
}), qk = {
  // Overlay
  loading: "Loading data…",
  noData: "No data to display",
  // Toolbar
  zoomIn: "Zoom in",
  zoomOut: "Zoom out",
  toolbarExport: "Export",
  // Toolbar Export Menu
  toolbarExportPrint: "Print",
  toolbarExportImage: (e) => `Export as ${nz[e] ?? e}`,
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
}, oz = qk;
rz(qk);
const iz = ["localeText"], Uh = /* @__PURE__ */ Bt(null);
function sz(e) {
  const {
    localeText: t
  } = e, n = ke(e, iz), {
    localeText: r
  } = gt(Uh) ?? {
    localeText: void 0
  }, o = cn({
    // We don't want to pass the `localeText` prop to the theme, that way it will always return the theme value,
    // We will then merge this theme value with our value manually
    props: n,
    name: "MuiChartsLocalizationProvider"
  }), {
    children: i,
    localeText: s
  } = o, a = Se(() => L({}, oz, s, r, t), [s, r, t]), l = Se(() => ({
    localeText: a
  }), [a]);
  return /* @__PURE__ */ M(Uh.Provider, {
    value: l,
    children: i
  });
}
const F0 = () => {
  const e = gt(Uh);
  if (e === null)
    throw new Error(Me(12));
  return e;
};
function az() {
  return me().use(S0);
}
function Qk(e) {
  return be("MuiChartsAxis", e);
}
const mu = he("MuiChartsAxis", ["root", "line", "tickContainer", "tick", "tickLabel", "label", "directionX", "directionY", "top", "bottom", "left", "right"]), Zk = (e) => {
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
  }, Qk, t);
}, Hh = 3, lz = 4, Jk = {
  disableLine: !1,
  disableTicks: !1,
  tickSize: 6,
  tickLabelMinGap: 4
};
function B0(e) {
  return typeof e == "number" && !Number.isFinite(e);
}
function uz(e, t) {
  return Math.abs(t.getFullYear() - e.getFullYear());
}
function o1(e, t) {
  return Math.abs(t.getFullYear() * 12 + t.getMonth() - 12 * e.getFullYear() - e.getMonth());
}
function na(e, t) {
  return Math.abs(t.getTime() - e.getTime()) / (1e3 * 60 * 60 * 24);
}
function cz(e, t) {
  return Math.abs(t.getTime() - e.getTime()) / (1e3 * 60 * 60);
}
const dz = {
  years: {
    getTickNumber: uz,
    isTick: (e, t) => t.getFullYear() !== e.getFullYear(),
    format: (e) => e.getFullYear().toString()
  },
  quarterly: {
    getTickNumber: (e, t) => Math.floor(o1(e, t) / 3),
    isTick: (e, t) => t.getMonth() !== e.getMonth() && t.getMonth() % 3 === 0,
    format: new Intl.DateTimeFormat("default", {
      month: "short"
    }).format
  },
  months: {
    getTickNumber: o1,
    isTick: (e, t) => t.getMonth() !== e.getMonth(),
    format: new Intl.DateTimeFormat("default", {
      month: "short"
    }).format
  },
  biweekly: {
    getTickNumber: (e, t) => na(e, t) / 14,
    isTick: (e, t) => (t.getDay() < e.getDay() || na(t, e) > 7) && Math.floor(t.getDate() / 7) % 2 === 1,
    format: new Intl.DateTimeFormat("default", {
      day: "numeric"
    }).format
  },
  weeks: {
    getTickNumber: (e, t) => na(e, t) / 7,
    isTick: (e, t) => t.getDay() < e.getDay() || na(t, e) >= 7,
    format: new Intl.DateTimeFormat("default", {
      day: "numeric"
    }).format
  },
  days: {
    getTickNumber: na,
    isTick: (e, t) => t.getDate() !== e.getDate(),
    format: new Intl.DateTimeFormat("default", {
      day: "numeric"
    }).format
  },
  hours: {
    getTickNumber: cz,
    isTick: (e, t) => t.getHours() !== e.getHours(),
    format: new Intl.DateTimeFormat("default", {
      hour: "2-digit",
      minute: "2-digit"
    }).format
  }
}, Wh = {
  start: 0,
  extremities: 0,
  end: 1,
  middle: 0.5
};
function Ai(e, t, n) {
  return e(t) - (e.step() - e.bandwidth()) / 2 + Wh[n] * e.step();
}
function fz(e, t, n) {
  const r = Math.abs(t[1] - t[0]), o = Math.ceil(e.length / (r / n));
  return Number.isNaN(o) || o <= 1 ? e : e.filter((i, s) => s % o === 0);
}
function pz(e, t, n, r, o) {
  if (n.length === 0)
    return [];
  const i = r.range()[0] > r.range()[1], s = e.findIndex((f) => o(Ai(r, f, i ? "start" : "end"))), a = e.findLastIndex((f) => o(Ai(r, f, i ? "end" : "start"))), l = e[0], u = e[e.length - 1];
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
function hz(e) {
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
  if (u !== void 0 && Oc(t.domain()) && st(t)) {
    const g = t.domain();
    if (g.length === 0 || g.length === 1)
      return [];
    const x = "middle";
    return pz(g, n, u.map((m) => typeof m == "string" ? dz[m] : m), t, l).map(({
      index: m,
      formatter: v
    }) => {
      const C = g[m], b = v(C);
      return {
        value: C,
        formattedValue: b,
        offset: Ai(t, C, x),
        labelOffset: 0
      };
    });
  }
  const c = i ?? "extremities";
  if (st(t)) {
    const g = t.domain(), x = s ?? "middle";
    let y = g;
    if (typeof o == "object" && o != null ? y = o : (typeof o == "function" && (y = y.filter(o)), a !== void 0 && a > 0 && (y = fz(y, t.range(), a))), y.length === 0)
      return [];
    if (t.bandwidth() > 0) {
      const m = t.range()[0] > t.range()[1], v = y.findIndex((b) => l(Ai(t, b, m ? "start" : "end"))), C = y.findLastIndex((b) => l(Ai(t, b, m ? "end" : "start")));
      return [...y.slice(v, C + 1).map((b) => {
        const S = `${b}`;
        return {
          value: b,
          formattedValue: (r == null ? void 0 : r(b, {
            location: "tick",
            scale: t,
            tickNumber: n,
            defaultTickLabel: S
          })) ?? S,
          offset: Ai(t, b, c),
          labelOffset: x === "tick" ? 0 : t.step() * (Wh[x] - Wh[c])
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
  if (t.domain().some(B0))
    return [];
  const p = s, f = typeof o == "object" ? o : gz(t, n), h = [];
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
function gz(e, t) {
  const n = e.domain();
  return n[0] === n[1] ? [n[0]] : e.ticks(t);
}
const mz = () => !0, yz = (e) => (t) => Math.abs(e.range()[0] - t) < Math.PI * 2 - dk;
function vz(e, t, n) {
  switch (t) {
    case "rotation":
      return yz(e);
    case "radius":
      return (r) => r >= 1;
    case "x":
      return n.isXInside;
    case "y":
      return n.isYInside;
    default:
      return mz;
  }
}
function Ff(e) {
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
  } = Pt();
  return Se(() => hz({
    scale: t,
    tickNumber: n,
    tickPlacement: i,
    tickInterval: o,
    tickLabelPlacement: s,
    tickSpacing: a,
    valueFormatter: r,
    isInside: vz(t, l, c),
    ordinalTimeTicks: u
  }), [t, n, i, o, s, a, r, l, c, u]);
}
const eI = he("MuiAppearingMask", ["animate"]), xz = K("rect", {
  slot: "internal",
  shouldForwardProp: void 0
})({
  animationName: "animate-width",
  animationTimingFunction: jl,
  animationDuration: "0s",
  [`&.${eI.animate}`]: {
    animationDuration: `${Gs}ms`
  },
  "@keyframes animate-width": {
    from: {
      width: 0
    }
  }
});
function tI(e) {
  const t = Wn(), n = Yl(), r = Ik(`${n}-${e.seriesId}`);
  return /* @__PURE__ */ oe(He, {
    children: [/* @__PURE__ */ M("clipPath", {
      id: r,
      children: /* @__PURE__ */ M(xz, {
        className: e.skipAnimation ? "" : eI.animate,
        x: 0,
        y: 0,
        width: t.left + t.width + t.right,
        height: t.top + t.height + t.bottom
      })
    }), /* @__PURE__ */ M("g", {
      clipPath: `url(#${r})`,
      children: e.children
    })]
  });
}
const Cz = ["skipAnimation", "ownerState"];
function wz(e) {
  const {
    skipAnimation: t,
    ownerState: n
  } = e, r = ke(e, Cz), o = o5(e);
  return /* @__PURE__ */ M(tI, {
    skipAnimation: t,
    seriesId: `${n.seriesId}-area-clip`,
    children: /* @__PURE__ */ M("path", L({
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
function Sz(e) {
  return be("MuiLineChart", e);
}
const Bf = he("MuiLineChart", ["area", "line", "mark", "markAnimate", "highlight", "areaPlot", "linePlot", "markPlot"]), Ao = (e) => {
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
  }, Sz, n);
}, bz = ["seriesId", "classes", "color", "gradientId", "slots", "slotProps", "onClick"];
function kz(e) {
  const {
    seriesId: t,
    classes: n,
    color: r,
    gradientId: o,
    slots: i,
    slotProps: s,
    onClick: a
  } = e, l = ke(e, bz), c = me().use(Dl, "enablePositionBasedPointerInteraction"), d = Se(() => ({
    type: "line",
    seriesId: t
  }), [t]), p = Ef(d), f = xk(d), h = f === "highlighted", g = f === "faded", x = {
    seriesId: t,
    classes: n,
    color: r,
    gradientId: o,
    isFaded: g,
    isHighlighted: h
  }, y = Ao(x), m = (i == null ? void 0 : i.area) ?? wz, v = xr({
    elementType: m,
    externalSlotProps: s == null ? void 0 : s.area,
    additionalProps: L({}, c ? {} : p, {
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
  return /* @__PURE__ */ M(m, L({}, l, v));
}
function U0(e) {
  const n = me().use(__);
  return e || n;
}
function H0() {
  return me().use(kf);
}
function W0(e) {
  switch (e) {
    case "catmullRom":
      return B5.alpha(0.5);
    case "linear":
      return L0;
    case "monotoneX":
      return n1;
    case "monotoneY":
      return U5;
    case "natural":
      return H5;
    case "step":
      return W5;
    case "stepBefore":
      return G5;
    case "stepAfter":
      return V5;
    case "bumpY":
      return P5;
    case "bumpX":
      return T5;
    default:
      return n1;
  }
}
function Iz(e, t) {
  const n = Xl(), r = Ut().xAxisIds[0], o = Ht().yAxisIds[0], i = O0();
  return Se(() => {
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
          curve: b,
          strictStepCurve: S,
          area: k
        } = a[f];
        if (!k || !(h in e) || !(g in t))
          continue;
        const I = e[h].scale, $ = Cr(I), O = t[g].scale, R = e[h].data, w = t[g].colorScale && i(g) || e[h].colorScale && i(h) || void 0, E = (b == null ? void 0 : b.includes("step")) && !S && st(I), T = (R == null ? void 0 : R.flatMap((A, D) => {
          const z = m[D] == null;
          if (E) {
            const U = [{
              x: A,
              y: x[D],
              nullData: z,
              isExtension: !1
            }];
            return !z && (D === 0 || m[D - 1] == null) && U.unshift({
              x: (I(A) ?? 0) - (I.step() - I.bandwidth()) / 2,
              y: x[D],
              nullData: z,
              isExtension: !0
            }), !z && (D === m.length - 1 || m[D + 1] == null) && U.push({
              x: (I(A) ?? 0) + (I.step() + I.bandwidth()) / 2,
              y: x[D],
              nullData: z,
              isExtension: !0
            }), U;
          }
          return {
            x: A,
            y: x[D],
            nullData: z
          };
        })) ?? [], P = v ? T.filter((A) => !A.nullData) : T, N = S5().x((A) => A.isExtension ? A.x : $(A.x)).defined((A) => v || !A.nullData || !!A.isExtension).y0((A) => {
          if (typeof C == "number")
            return O(C);
          if (C === "max")
            return O.range()[1];
          if (C === "min")
            return O.range()[0];
          const D = A.y && O(A.y[0]);
          return Number.isNaN(D) ? O.range()[0] : D;
        }).y1((A) => A.y && O(A.y[1])).curve(W0(b))(P) || "";
        u.push({
          area: a[f].area,
          color: a[f].color,
          gradientId: w,
          d: N,
          seriesId: f
        });
      }
    }
    return u;
  }, [n, r, o, e, t, i]);
}
const Tz = ["slots", "slotProps", "onItemClick", "skipAnimation", "className"], Pz = K("g", {
  name: "MuiAreaPlot",
  slot: "Root"
})({
  [`& .${Bf.area}`]: {
    transitionProperty: "opacity, fill",
    transitionDuration: `${Gs}ms`,
    transitionTimingFunction: jl
  }
}), Mz = () => {
  const {
    xAxis: e
  } = Ut(), {
    yAxis: t
  } = Ht();
  return Iz(e, t);
};
function Ez(e) {
  const {
    slots: t,
    slotProps: n,
    onItemClick: r,
    skipAnimation: o,
    className: i
  } = e, s = ke(e, Tz), a = H0(), l = U0(a || o), u = Mz(), c = Ao();
  return /* @__PURE__ */ M(Pz, L({
    className: ie(c.areaPlot, i)
  }, s, {
    children: u.map(({
      d,
      seriesId: p,
      color: f,
      area: h,
      gradientId: g
    }) => !!h && /* @__PURE__ */ M(kz, {
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
const Az = ["skipAnimation", "ownerState"], Rz = /* @__PURE__ */ ce(function(t, n) {
  const {
    skipAnimation: r,
    ownerState: o
  } = t, i = ke(t, Az), s = v5({
    d: t.d,
    skipAnimation: r,
    ref: n
  }), a = o.isFaded ? 0.3 : 1;
  return /* @__PURE__ */ M(tI, {
    skipAnimation: r,
    seriesId: `${o.seriesId}-line-clip`,
    children: /* @__PURE__ */ M("path", L({
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
}), _z = ["seriesId", "classes", "color", "gradientId", "slots", "slotProps", "onClick", "hidden"];
function Oz(e) {
  const {
    seriesId: t,
    classes: n,
    color: r,
    gradientId: o,
    slots: i,
    slotProps: s,
    onClick: a,
    hidden: l
  } = e, u = ke(e, _z), d = me().use(Dl, "enablePositionBasedPointerInteraction"), p = Se(() => ({
    type: "line",
    seriesId: t
  }), [t]), f = Ef(p), h = xk(p), g = h === "highlighted", x = h === "faded", y = {
    seriesId: t,
    classes: n,
    color: r,
    gradientId: o,
    isFaded: x,
    isHighlighted: g,
    hidden: l
  }, m = Ao(), v = (i == null ? void 0 : i.line) ?? Rz, C = xr({
    elementType: v,
    externalSlotProps: s == null ? void 0 : s.line,
    additionalProps: L({}, d ? {} : f, {
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
  return /* @__PURE__ */ M(v, L({}, u, C));
}
function $z(e, t) {
  const n = Xl(), r = Ut().xAxisIds[0], o = Ht().yAxisIds[0], i = O0();
  return Se(() => {
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
        const b = e[f].scale, S = Cr(b), k = t[h].scale, I = e[f].data, $ = t[h].colorScale && i(h) || e[f].colorScale && i(f) || void 0, O = (v == null ? void 0 : v.includes("step")) && !C && st(b), R = (I == null ? void 0 : I.flatMap((_, N) => {
          const A = y[N] == null;
          if (O) {
            const D = [{
              x: _,
              y: x[N],
              nullData: A,
              isExtension: !1
            }];
            return !A && (N === 0 || y[N - 1] == null) && D.unshift({
              x: (b(_) ?? 0) - (b.step() - b.bandwidth()) / 2,
              y: x[N],
              nullData: A,
              isExtension: !0
            }), !A && (N === y.length - 1 || y[N + 1] == null) && D.push({
              x: (b(_) ?? 0) + (b.step() + b.bandwidth()) / 2,
              y: x[N],
              nullData: A,
              isExtension: !0
            }), D;
          }
          return {
            x: _,
            y: x[N],
            nullData: A
          };
        })) ?? [], w = m ? R.filter((_) => !_.nullData) : R, E = a[p].hidden, P = zk().x((_) => _.isExtension ? _.x : S(_.x)).defined((_) => m || !_.nullData || !!_.isExtension).y((_) => k(E ? _.y[0] : _.y[1])).curve(W0(v))(w) || "";
        u.push({
          color: a[p].color,
          gradientId: $,
          d: P,
          seriesId: p,
          hidden: a[p].hidden
        });
      }
    }
    return u;
  }, [n, r, o, e, t, i]);
}
const Lz = ["slots", "slotProps", "skipAnimation", "onItemClick", "className"], Nz = K("g", {
  name: "MuiLinePlot",
  slot: "Root"
})({
  [`& .${Bf.line}`]: {
    transitionProperty: "opacity, fill",
    transitionDuration: `${Gs}ms`,
    transitionTimingFunction: jl
  }
}), Dz = () => {
  const {
    xAxis: e
  } = Ut(), {
    yAxis: t
  } = Ht();
  return $z(e, t);
};
function zz(e) {
  const {
    slots: t,
    slotProps: n,
    skipAnimation: r,
    onItemClick: o,
    className: i
  } = e, s = ke(e, Lz), a = H0(), l = U0(a || r), u = Dz(), c = Ao();
  return /* @__PURE__ */ M(Nz, L({
    className: ie(c.linePlot, i)
  }, s, {
    children: u.map(({
      d,
      seriesId: p,
      color: f,
      gradientId: h,
      hidden: g
    }) => /* @__PURE__ */ M(Oz, {
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
const Fz = ["x", "y", "seriesId", "classes", "color", "dataIndex", "onClick", "skipAnimation", "isFaded", "isHighlighted", "shape", "hidden"], Bz = K("circle", {
  slot: "internal",
  shouldForwardProp: void 0
})({
  [`&.${Bf.markAnimate}`]: {
    transitionDuration: `${Gs}ms`,
    transitionProperty: "cx, cy, opacity",
    transitionTimingFunction: jl
  }
});
function Uz(e) {
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
  } = e, p = ke(e, Fz), h = me().use(Dl, "enablePositionBasedPointerInteraction"), g = Ef({
    type: "line",
    seriesId: r,
    dataIndex: s
  }), x = Qt(), y = Ao({
    skipAnimation: l,
    classes: o
  });
  return /* @__PURE__ */ M(Bz, L({}, p, h ? {} : g, {
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
function G0(e) {
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
const Hz = ["x", "y", "seriesId", "classes", "color", "shape", "dataIndex", "onClick", "skipAnimation", "isFaded", "isHighlighted", "hidden", "style"], Wz = K("path", {
  name: "MuiMarkElement",
  slot: "Root"
})(({
  theme: e
}) => ({
  fill: (e.vars || e).palette.background.paper,
  [`&.${Bf.markAnimate}`]: {
    transitionDuration: `${Gs}ms`,
    transitionProperty: "transform, transform-origin, opacity",
    transitionTimingFunction: jl
  }
}));
function Gz(e) {
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
  } = e, h = ke(e, Hz), x = me().use(Dl, "enablePositionBasedPointerInteraction"), y = Ef({
    type: "line",
    seriesId: r,
    dataIndex: a
  }), m = {
    seriesId: r,
    classes: o,
    isHighlighted: d,
    isFaded: c,
    skipAnimation: u
  }, v = Ao({
    skipAnimation: u,
    classes: o
  });
  return /* @__PURE__ */ M(Wz, L({}, h, x ? {} : y, {
    style: L({}, f, {
      transform: `translate(${t}px, ${n}px)`,
      transformOrigin: `${t}px ${n}px`
    }),
    ownerState: m,
    className: v.mark,
    d: D0(N0[G0(s)])(),
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
function nI(e) {
  return e.colorGetter ? e.colorGetter : () => e.color;
}
function rI(e) {
  const {
    series: t,
    valueColorScale: n,
    categoryColorScale: r,
    categoryValues: o
  } = e, i = nI(t);
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
const V0 = (e, t, n) => rI({
  series: e,
  valueColorScale: n == null ? void 0 : n.colorScale,
  categoryColorScale: t == null ? void 0 : t.colorScale,
  categoryValues: t == null ? void 0 : t.data
});
function Vz(e, t) {
  const n = Xl(), r = Ut().xAxisIds[0], o = Ht().yAxisIds[0], i = Yl(), {
    instance: s
  } = Pt();
  return Se(() => {
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
        const b = Cr(e[h].scale), S = t[g].scale, k = e[h].data, I = Ik(`${i}-${f}-line-clip`), $ = V0(l[f], e[h], t[g]), O = [];
        if (k)
          for (let R = 0; R < k.length; R += 1) {
            const w = k[R], E = y[R] == null ? null : x[R][1];
            if (E === null)
              continue;
            const T = S(C ? x[R][0] : E), P = b(w);
            s.isPointInside(P, T) && (m !== !0 && !m({
              x: P,
              y: T,
              index: R,
              position: w,
              value: E
            }) || O.push({
              x: P,
              y: T,
              index: R,
              color: $(R)
            }));
          }
        c.push({
          seriesId: f,
          clipId: I,
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
const jz = ["slots", "slotProps", "skipAnimation", "onItemClick", "className"], Yz = K("g", {
  name: "MuiMarkPlot",
  slot: "Root"
})({});
function Kz(e) {
  const {
    slots: t,
    slotProps: n,
    skipAnimation: r,
    onItemClick: o,
    className: i
  } = e, s = ke(e, jz), a = H0(), l = U0(a || r), {
    xAxis: u
  } = Ut(), {
    yAxis: c
  } = Ht(), {
    store: d
  } = Pt(), p = h5(), f = d.use(ik), h = Se(() => {
    const y = {};
    for (const {
      dataIndex: m,
      axisId: v
    } of f)
      y[v] === void 0 ? y[v] = /* @__PURE__ */ new Set([m]) : y[v].add(m);
    return y;
  }, [f]), g = Vz(u, c), x = Ao();
  return /* @__PURE__ */ M(Yz, L({
    className: ie(x.markPlot, i)
  }, s, {
    children: g.map(({
      seriesId: y,
      clipId: m,
      shape: v,
      xAxisId: C,
      marks: b,
      hidden: S
    }) => {
      const k = (t == null ? void 0 : t.mark) ?? (v === "circle" ? Uz : Gz), $ = p({
        type: "line",
        seriesId: y
      }), O = $ === "highlighted", R = $ === "faded";
      return /* @__PURE__ */ M("g", {
        clipPath: `url(#${m})`,
        "data-series": y,
        children: b.map(({
          x: w,
          y: E,
          index: T,
          color: P
        }) => {
          var _;
          return /* @__PURE__ */ M(k, L({
            seriesId: y,
            dataIndex: T,
            shape: v,
            color: P,
            x: w,
            y: E,
            skipAnimation: l,
            onClick: o && ((N) => o(N, {
              type: "line",
              seriesId: y,
              dataIndex: T
            })),
            isHighlighted: ((_ = h[C]) == null ? void 0 : _.has(T)) || O,
            isFaded: R,
            hidden: S
          }, n == null ? void 0 : n.mark), `${y}-${T}`);
        })
      }, y);
    })
  }));
}
const Xz = () => () => {
}, qz = () => !0, Qz = () => !1;
function Uf() {
  return zM(Xz, qz, Qz);
}
function Zz(e = !1) {
  const [t, n] = Le(!1);
  return we(() => {
    e || n(!0);
  }, [e]), fe(() => {
    e && n(!0);
  }, [e]), t;
}
function Jz(e) {
  return e * (Math.PI / 180);
}
const oI = typeof window < "u" && "Intl" in window && "Segmenter" in Intl ? (
  // eslint-disable-next-line compat/compat
  new Intl.Segmenter(void 0, {
    granularity: "grapheme"
  })
) : null;
function eF(e, t) {
  return e.slice(0, t);
}
function tF(e, t) {
  const n = oI.segment(e);
  let r = "", o = 0;
  for (const i of n)
    if (r += i.segment, o += 1, o >= t)
      break;
  return r;
}
const nF = oI ? tF : eF, i1 = "…";
function iI(e, t) {
  const {
    width: n,
    height: r,
    measureText: o
  } = t, i = Jz(t.angle), s = o(e), a = Math.abs(s.width * Math.cos(i)) + Math.abs(s.height * Math.sin(i)), l = Math.abs(s.width * Math.sin(i)) + Math.abs(s.height * Math.cos(i));
  return a <= n && l <= r;
}
function sI(e, t) {
  if (t(e))
    return e;
  let n = e, r = 1, o = 1 / 2;
  const i = PS(e);
  let s = i, a = i, l = null;
  do {
    if (a = s, s = Math.floor(i * o), s === 0)
      break;
    n = nF(e, s).trim();
    const u = t(n + i1);
    r += 1, u ? (l = n, o += 1 / 2 ** r) : o -= 1 / 2 ** r;
  } while (Math.abs(s - a) !== 1);
  return l ? l + i1 : "";
}
function rF(e, t, n, r, o) {
  const i = /* @__PURE__ */ new Map(), s = Of((o == null ? void 0 : o.angle) ?? 0);
  let a = 1, l = 1;
  (o == null ? void 0 : o.textAnchor) === "start" ? (a = 1 / 0, l = 1) : (o == null ? void 0 : o.textAnchor) === "end" ? (a = 1, l = 1 / 0) : (a = 2, l = 2), s > 90 && s < 270 && ([a, l] = [l, a]), r && ([a, l] = [l, a]);
  for (const u of e)
    if (u.formattedValue) {
      const c = Math.min((u.offset + u.labelOffset) * a, (t.left + t.width + t.right - u.offset - u.labelOffset) * l), d = (p) => iI(p, {
        width: c,
        height: n,
        angle: s,
        measureText: (f) => Rl(f, o)
      });
      i.set(u, sI(u.formattedValue.toString(), d));
    }
  return i;
}
const s1 = 5;
function oF(e, t, n = 0) {
  const r = Math.min(Math.abs(n) % 180, Math.abs(Math.abs(n) % 180 - 180) % 180);
  if (r < s1)
    return e;
  if (r > 90 - s1)
    return t;
  const o = io(r), i = Math.atan2(t, e);
  return o < i ? e / Math.cos(o) : t / Math.sin(o);
}
function iF(e, {
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
  }), c = aF(u, t);
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
    } = i ? sF(c, d) : {
      width: 0,
      height: 0
    }, m = oF(x, y, t == null ? void 0 : t.angle), v = g - l * m / 2;
    return p > 0 && l * v < l * (a + r) ? !1 : (a = g + l * m / 2, !0);
  }));
}
function sF(e, t) {
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
function aF(e, t) {
  const n = /* @__PURE__ */ new Set();
  for (const r of e)
    r.formattedValue && r.formattedValue.split(`
`).forEach((o) => n.add(o));
  return bS(n, t);
}
function lF({
  style: e,
  needsComputation: t,
  text: n
}) {
  return n.split(`
`).map((r) => L({
    text: r
  }, t ? Rl(r, e) : {
    width: 0,
    height: 0
  }));
}
const uF = ["x", "y", "style", "text", "ownerState"], cF = ["angle", "textAnchor", "dominantBaseline"];
function Hf(e) {
  const {
    x: t,
    y: n,
    style: r,
    text: o
  } = e, i = ke(e, uF), s = r ?? {}, {
    angle: a,
    textAnchor: l,
    dominantBaseline: u
  } = s, c = ke(s, cF), d = Uf(), p = Se(() => lF({
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
  return /* @__PURE__ */ M("text", L({}, i, {
    transform: a ? `rotate(${a}, ${t}, ${n})` : void 0,
    x: t,
    y: n,
    textAnchor: l,
    dominantBaseline: u,
    style: c,
    children: p.map((h, g) => /* @__PURE__ */ M("tspan", {
      x: t,
      dy: `${g === 0 ? f : p[0].height}px`,
      dominantBaseline: u,
      children: h.text
    }, g))
  }));
}
function aI(e) {
  const t = Of(e);
  return t <= 30 || t >= 330 || t <= 210 && t >= 150 ? "middle" : t <= 180 ? "end" : "start";
}
function lI(e) {
  const t = Of(e);
  return t <= 30 || t >= 330 ? "hanging" : t <= 210 && t >= 150 ? "auto" : "central";
}
function uI(e) {
  switch (e) {
    case "start":
      return "end";
    case "end":
      return "start";
    default:
      return e;
  }
}
const dF = ["scale", "tickNumber", "reverse"];
function cI(e) {
  const {
    xAxis: t,
    xAxisIds: n
  } = Ut(), r = t[e.axisId ?? n[0]], {
    scale: o,
    tickNumber: i,
    reverse: s
  } = r, a = ke(r, dF), l = cn({
    props: L({}, a, e),
    name: "MuiChartsXAxis"
  }), u = L({}, Jk, l), {
    position: c,
    tickLabelStyle: d,
    slots: p,
    slotProps: f
  } = u, h = Qt(), g = Ls(), x = Zk(u), y = c === "bottom" ? 1 : -1, m = (p == null ? void 0 : p.axisTick) ?? "line", v = (p == null ? void 0 : p.axisTickLabel) ?? Hf, C = aI((c === "bottom" ? 0 : 180) - ((d == null ? void 0 : d.angle) ?? 0)), b = lI((c === "bottom" ? 0 : 180) - ((d == null ? void 0 : d.angle) ?? 0)), S = xr({
    elementType: v,
    // @ts-expect-error `useSlotProps` applies `WithCommonProps` with adds a `style: React.CSSProperties` prop automatically.
    externalSlotProps: f == null ? void 0 : f.axisTickLabel,
    // @ts-expect-error `useSlotProps` applies `WithCommonProps` with adds a `style: React.CSSProperties` prop automatically.
    additionalProps: {
      style: L({}, h.typography.caption, {
        fontSize: 12,
        lineHeight: 1.25,
        textAnchor: g ? uI(C) : C,
        dominantBaseline: b
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
    axisTickLabelProps: S,
    reverse: s
  };
}
function fF(e) {
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
  } = cI(e), p = Ls(), f = Zz(), {
    disableTicks: h,
    tickSize: g,
    valueFormatter: x,
    slotProps: y,
    tickInterval: m,
    tickLabelInterval: v,
    tickPlacement: C,
    tickLabelPlacement: b,
    tickLabelMinGap: S,
    tickSpacing: k,
    height: I
  } = o, $ = Wn(), {
    instance: O
  } = Pt(), R = Uf(), w = h ? 4 : g, E = Ff({
    scale: r,
    tickNumber: i,
    valueFormatter: x,
    tickInterval: m,
    tickPlacement: C,
    tickLabelPlacement: b,
    tickSpacing: k,
    direction: "x",
    ordinalTimeTicks: n
  }), T = iF(E, {
    tickLabelStyle: c.style,
    tickLabelInterval: v,
    tickLabelMinGap: S,
    reverse: d,
    isMounted: f,
    isXInside: O.isXInside
  }), P = Math.max(0, I - (t > 0 ? t + lz : 0) - w - Hh), _ = R ? rF(T, $, P, p, c.style) : new Map(Array.from(T).map((N) => [N, N.formattedValue]));
  return /* @__PURE__ */ M(He, {
    children: E.map((N, A) => {
      const {
        offset: D,
        labelOffset: z
      } = N, U = z ?? 0, W = s * (w + Hh), q = O.isXInside(D), J = _.get(N), ae = T.has(N);
      return /* @__PURE__ */ oe("g", {
        transform: `translate(${D}, 0)`,
        className: a.tickContainer,
        children: [!h && q && /* @__PURE__ */ M(l, L({
          y2: s * w,
          className: a.tick
        }, y == null ? void 0 : y.axisTick)), J !== void 0 && ae && /* @__PURE__ */ M(u, L({
          x: U,
          y: W
        }, c, {
          text: J
        }))]
      }, A);
    })
  });
}
const ra = {
  start: 0,
  extremities: 0,
  end: 1,
  middle: 0.5,
  tick: 0
};
function dI(e) {
  const {
    scale: t,
    tickInterval: n,
    tickLabelPlacement: r = "middle",
    tickPlacement: o = "extremities",
    groups: i
  } = e;
  return Se(() => {
    const s = t.domain(), a = typeof n == "function" && s.filter(n) || typeof n == "object" && n || s;
    if (t.bandwidth() > 0) {
      const l = a1(a, i, o, r, t);
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
    return a1(a, i, o, r, t);
  }, [t, n, i, o, r]);
}
function a1(e, t, n, r, o) {
  const i = [], s = /* @__PURE__ */ new Map();
  let a = 0;
  for (let l = 0; l < t.length; l += 1)
    for (let u = 0; u < e.length; u += 1) {
      const c = e[u], d = t[l].getValue(c, u), p = i[i.length - 1];
      if ((p == null ? void 0 : p.value) !== d || (p == null ? void 0 : p.groupIndex) !== l) {
        a = 1;
        const h = st(o) ? o(c) - (o.step() - o.bandwidth()) / 2 + ra[n] * o.step() : o(c), g = o.step() * a * (ra[r] - ra[n]);
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
        const h = o.step() * a * (ra[r] - ra[n]);
        p.labelOffset = h;
      }
    }
  return i;
}
const l1 = {
  tickSize: 6
}, fI = (e, t, n, r) => {
  const o = e[t] ?? {}, i = n ?? l1.tickSize, s = i * t * 2 + i;
  return L({}, l1, o, {
    tickSize: (r == null ? void 0 : r[t]) ?? o.tickSize ?? s
  });
};
function pF(e) {
  const {
    xScale: t,
    defaultizedProps: n,
    positionSign: r,
    classes: o,
    Tick: i,
    TickLabel: s,
    axisTickLabelProps: a
  } = cI(e);
  if (!st(t))
    throw new Error(Me(8));
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
  } = Pt(), v = me().use(bb), C = x ? v[x] : void 0, b = C == null ? void 0 : C.groupTickSizes, S = dI({
    scale: t,
    tickInterval: p,
    tickPlacement: f,
    tickLabelPlacement: h,
    groups: g
  });
  return /* @__PURE__ */ M(He, {
    children: S.map((k, I) => {
      const {
        offset: $,
        labelOffset: O
      } = k, R = O ?? 0, w = y.isXInside($), E = k.formattedValue, T = k.ignoreTick ?? !1, P = k.groupIndex ?? 0, _ = fI(g, P, u, b), N = r * _.tickSize, A = r * (_.tickSize + Hh);
      return /* @__PURE__ */ oe("g", {
        transform: `translate(${$}, 0)`,
        className: o.tickContainer,
        "data-group-index": P,
        children: [!l && !T && w && /* @__PURE__ */ M(i, L({
          y2: N,
          className: o.tick
        }, d == null ? void 0 : d.axisTick)), E !== void 0 && /* @__PURE__ */ M(s, L({
          x: R,
          y: A
        }, a, {
          style: L({}, a.style, _.tickLabelStyle),
          text: E
        }))]
      }, I);
    })
  });
}
const pI = K("g", {
  name: "MuiChartsAxis",
  slot: "Root"
})(({
  theme: e
}) => ({
  [`& .${mu.tickLabel}`]: L({}, e.typography.caption, {
    fill: (e.vars || e).palette.text.primary
  }),
  [`& .${mu.label}`]: {
    fill: (e.vars || e).palette.text.primary
  },
  [`& .${mu.line}`]: {
    stroke: (e.vars || e).palette.text.primary,
    shapeRendering: "crispEdges",
    strokeWidth: 1
  },
  [`& .${mu.tick}`]: {
    stroke: (e.vars || e).palette.text.primary,
    shapeRendering: "crispEdges"
  }
})), hF = ["axis"], gF = ["scale", "tickNumber", "reverse", "ordinalTimeTicks"], mF = K(pI, {
  name: "MuiChartsXAxis",
  slot: "Root"
})({});
function yF(e) {
  let {
    axis: t
  } = e, n = ke(e, hF);
  const {
    scale: r,
    ordinalTimeTicks: o
  } = t, i = ke(t, gF), s = cn({
    props: L({}, i, n),
    name: "MuiChartsXAxis"
  }), a = L({}, Jk, s), {
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
  } = a, m = Qt(), v = Zk(a), {
    left: C,
    top: b,
    width: S,
    height: k
  } = Wn(), I = l === "bottom" ? 1 : -1, $ = (p == null ? void 0 : p.axisLine) ?? "line", O = (p == null ? void 0 : p.axisLabel) ?? Hf, R = xr({
    elementType: O,
    // @ts-expect-error `useSlotProps` applies `WithCommonProps` with adds a `style: React.CSSProperties` prop automatically.
    externalSlotProps: f == null ? void 0 : f.axisLabel,
    // @ts-expect-error `useSlotProps` applies `WithCommonProps` with adds a `style: React.CSSProperties` prop automatically.
    additionalProps: {
      style: L({}, m.typography.body1, {
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
  const w = x ? Rl(x, R.style).height : 0, E = r.domain(), P = st(r) ? E.length === 0 : E.some(B0);
  let _ = null;
  P || (_ = "groups" in t && Array.isArray(t.groups) ? /* @__PURE__ */ M(pF, L({}, n)) : /* @__PURE__ */ M(fF, L({}, n, {
    axisLabelHeight: w,
    ordinalTimeTicks: o
  })));
  const N = {
    x: C + S / 2,
    y: I * y
  };
  return /* @__PURE__ */ oe(mF, {
    transform: `translate(0, ${l === "bottom" ? b + k + d : b - d})`,
    className: ie(v.root, u),
    "data-axis-id": a.id,
    sx: h,
    children: [!g && /* @__PURE__ */ M($, L({
      x1: C,
      x2: C + S,
      className: v.line
    }, f == null ? void 0 : f.axisLine)), _, x && /* @__PURE__ */ M("g", {
      className: v.label,
      children: /* @__PURE__ */ M(O, L({}, N, R, {
        text: x
      }))
    })]
  });
}
function vF(e) {
  const {
    xAxis: t,
    xAxisIds: n
  } = Ut(), r = t[e.axisId ?? n[0]];
  return r ? /* @__PURE__ */ M(yF, L({}, e, {
    axis: r
  })) : null;
}
function xF(e, t, n, r, o) {
  const i = /* @__PURE__ */ new Map(), s = Of((o == null ? void 0 : o.angle) ?? 0);
  let a = 1, l = 1;
  (o == null ? void 0 : o.textAnchor) === "start" ? (a = 1 / 0, l = 1) : (o == null ? void 0 : o.textAnchor) === "end" ? (a = 1, l = 1 / 0) : (a = 2, l = 2), s > 180 && ([a, l] = [l, a]), r && ([a, l] = [l, a]);
  for (const u of e)
    if (u.formattedValue) {
      const c = Math.min((u.offset + u.labelOffset) * a, (t.top + t.height + t.bottom - u.offset - u.labelOffset) * l), d = (p) => iI(p, {
        width: n,
        height: c,
        angle: s,
        measureText: (f) => Rl(f, o)
      });
      i.set(u, sI(u.formattedValue.toString(), d));
    }
  return i;
}
const hI = (e) => {
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
  }, Qk, t);
}, Gh = 2, CF = 2, gI = {
  disableLine: !1,
  disableTicks: !1,
  tickSize: 6
}, wF = ["scale", "tickNumber", "reverse"];
function mI(e) {
  const {
    yAxis: t,
    yAxisIds: n
  } = Ht(), r = t[e.axisId ?? n[0]], {
    scale: o,
    tickNumber: i
  } = r, s = ke(r, wF), a = cn({
    props: L({}, s, e),
    name: "MuiChartsYAxis"
  }), l = L({}, gI, a), {
    position: u,
    tickLabelStyle: c,
    slots: d,
    slotProps: p
  } = l, f = Qt(), h = Ls(), g = hI(l), x = u === "right" ? 1 : -1, y = typeof (c == null ? void 0 : c.fontSize) == "number" ? c.fontSize : 12, m = (d == null ? void 0 : d.axisTick) ?? "line", v = (d == null ? void 0 : d.axisTickLabel) ?? Hf, C = aI((u === "right" ? -90 : 90) - ((c == null ? void 0 : c.angle) ?? 0)), b = lI((u === "right" ? -90 : 90) - ((c == null ? void 0 : c.angle) ?? 0)), S = xr({
    elementType: v,
    // @ts-expect-error `useSlotProps` applies `WithCommonProps` with adds a `style: React.CSSProperties` prop automatically.
    externalSlotProps: p == null ? void 0 : p.axisTickLabel,
    // @ts-expect-error `useSlotProps` applies `WithCommonProps` with adds a `style: React.CSSProperties` prop automatically.
    additionalProps: {
      style: L({}, f.typography.caption, {
        fontSize: y,
        textAnchor: h ? uI(C) : C,
        dominantBaseline: b
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
    axisTickLabelProps: S
  };
}
function SF(e) {
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
  } = mI(e), d = Ls(), {
    disableTicks: p,
    tickSize: f,
    valueFormatter: h,
    slotProps: g,
    tickPlacement: x,
    tickLabelPlacement: y,
    tickInterval: m,
    tickLabelInterval: v,
    tickSpacing: C,
    width: b
  } = o, S = Wn(), {
    instance: k
  } = Pt(), I = Uf(), $ = p ? 4 : f, O = Ff({
    scale: r,
    tickNumber: i,
    valueFormatter: h,
    tickPlacement: x,
    tickLabelPlacement: y,
    tickInterval: m,
    tickSpacing: C,
    direction: "y",
    ordinalTimeTicks: n
  }), R = Math.max(0, b - (t > 0 ? t + CF : 0) - $ - Gh), w = I ? xF(O, S, R, d, c.style) : new Map(Array.from(O).map((E) => [E, E.formattedValue]));
  return /* @__PURE__ */ M(He, {
    children: O.map((E, T) => {
      const {
        offset: P,
        labelOffset: _,
        value: N
      } = E, A = s * ($ + Gh), D = _, z = typeof v == "function" && !(v != null && v(N, T)), U = k.isYInside(P), W = w.get(E);
      return U ? /* @__PURE__ */ oe("g", {
        transform: `translate(0, ${P})`,
        className: a.tickContainer,
        children: [!p && /* @__PURE__ */ M(l, L({
          x2: s * $,
          className: a.tick
        }, g == null ? void 0 : g.axisTick)), W !== void 0 && !z && /* @__PURE__ */ M(u, L({
          x: A,
          y: D,
          text: W
        }, c))]
      }, T) : null;
    })
  });
}
function bF(e) {
  const {
    yScale: t,
    defaultizedProps: n,
    positionSign: r,
    classes: o,
    Tick: i,
    TickLabel: s,
    axisTickLabelProps: a
  } = mI(e);
  if (!st(t))
    throw new Error(Me(9));
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
  } = Pt(), v = me().use(kb), C = x ? v[x] : void 0, b = C == null ? void 0 : C.groupTickSizes, S = dI({
    scale: t,
    tickInterval: p,
    tickPlacement: f,
    tickLabelPlacement: h,
    groups: g
  });
  return /* @__PURE__ */ M(He, {
    children: S.map((k, I) => {
      const {
        offset: $,
        labelOffset: O
      } = k, R = O ?? 0, w = y.isYInside($), E = k.formattedValue, T = k.ignoreTick ?? !1, P = k.groupIndex ?? 0, _ = fI(g, P, u, b), N = r * _.tickSize, A = r * (_.tickSize + Gh);
      return /* @__PURE__ */ oe("g", {
        transform: `translate(0, ${$})`,
        className: o.tickContainer,
        "data-group-index": P,
        children: [!l && !T && w && /* @__PURE__ */ M(i, L({
          x2: N,
          className: o.tick
        }, d == null ? void 0 : d.axisTick)), E !== void 0 && /* @__PURE__ */ M(s, L({
          x: A,
          y: R
        }, a, {
          style: L({}, a.style, _.tickLabelStyle),
          text: E
        }))]
      }, I);
    })
  });
}
const kF = ["axis"], IF = ["scale", "tickNumber", "reverse", "ordinalTimeTicks"], TF = K(pI, {
  name: "MuiChartsYAxis",
  slot: "Root"
})({});
function PF(e) {
  let {
    axis: t
  } = e, n = ke(e, kF);
  const {
    scale: r,
    ordinalTimeTicks: o
  } = t, i = ke(t, IF), s = Uf(), a = cn({
    props: L({}, i, n),
    name: "MuiChartsYAxis"
  }), l = L({}, gI, a), {
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
  } = l, v = Qt(), C = hI(l), {
    left: b,
    top: S,
    width: k,
    height: I
  } = Wn(), $ = u === "right" ? 1 : -1, O = (y == null ? void 0 : y.axisLine) ?? "line", R = (y == null ? void 0 : y.axisLabel) ?? Hf, w = xr({
    elementType: O,
    externalSlotProps: m == null ? void 0 : m.axisLine,
    additionalProps: {
      strokeLinecap: "square"
    },
    ownerState: {}
  }), E = xr({
    elementType: R,
    // @ts-expect-error `useSlotProps` applies `WithCommonProps` with adds a `style: React.CSSProperties` prop automatically.
    externalSlotProps: m == null ? void 0 : m.axisLabel,
    // @ts-expect-error `useSlotProps` applies `WithCommonProps` with adds a `style: React.CSSProperties` prop automatically.
    additionalProps: {
      style: L({}, v.typography.body1, {
        lineHeight: 1,
        fontSize: 14,
        angle: $ * 90,
        textAnchor: "middle",
        dominantBaseline: "text-before-edge"
      }, f)
    },
    ownerState: {}
  });
  if (u === "none")
    return null;
  const T = {
    x: $ * g,
    y: S + I / 2
  }, P = p == null ? 0 : Rl(p, E.style).height, _ = r.domain(), A = st(r) ? _.length === 0 : _.some(B0);
  let D = null;
  return A || (D = "groups" in t && Array.isArray(t.groups) ? /* @__PURE__ */ M(bF, L({}, n)) : /* @__PURE__ */ M(SF, L({}, n, {
    axisLabelHeight: P,
    ordinalTimeTicks: o
  }))), /* @__PURE__ */ oe(TF, {
    transform: `translate(${u === "right" ? b + k + h : b - h}, 0)`,
    className: ie(C.root, c),
    "data-axis-id": l.id,
    sx: x,
    children: [!d && /* @__PURE__ */ M(O, L({
      y1: S,
      y2: S + I,
      className: C.line
    }, w)), D, p && s && /* @__PURE__ */ M("g", {
      className: C.label,
      children: /* @__PURE__ */ M(R, L({}, T, E, {
        text: p
      }))
    })]
  });
}
function MF(e) {
  const {
    yAxis: t,
    yAxisIds: n
  } = Ht(), r = t[e.axisId ?? n[0]];
  return r ? /* @__PURE__ */ M(PF, L({}, e, {
    axis: r
  })) : null;
}
function EF(e) {
  const {
    slots: t,
    slotProps: n
  } = e, {
    xAxisIds: r,
    xAxis: o
  } = Ut(), {
    yAxisIds: i,
    yAxis: s
  } = Ht(), a = (t == null ? void 0 : t.xAxis) ?? vF, l = (t == null ? void 0 : t.yAxis) ?? MF;
  return /* @__PURE__ */ oe(He, {
    children: [r.map((u) => !o[u].position || o[u].position === "none" ? null : /* @__PURE__ */ M(a, {
      slots: t,
      slotProps: n,
      axisId: u
    }, u)), i.map((u) => !s[u].position || s[u].position === "none" ? null : /* @__PURE__ */ M(l, {
      slots: t,
      slotProps: n,
      axisId: u
    }, u))]
  });
}
function AF(e) {
  return typeof e.main == "string";
}
function RF(e, t = []) {
  if (!AF(e))
    return !1;
  for (const n of t)
    if (!e.hasOwnProperty(n) || typeof e[n] != "string")
      return !1;
  return !0;
}
function Xr(e = []) {
  return ([, t]) => t && RF(t, e);
}
function _F(e) {
  return be("MuiTypography", e);
}
he("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom"]);
const OF = (e) => {
  const {
    align: t,
    gutterBottom: n,
    noWrap: r,
    variant: o,
    classes: i
  } = e, s = {
    root: ["root", o, e.align !== "inherit" && `align${Re(t)}`, n && "gutterBottom", r && "noWrap"]
  };
  return ve(s, _F, i);
}, $F = K("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.variant && t[n.variant], n.align !== "inherit" && t[`align${Re(n.align)}`], n.noWrap && t.noWrap, n.gutterBottom && t.gutterBottom];
  }
})(je(({
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
    })), ...Object.entries(e.palette).filter(Xr()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        color: (e.vars || e).palette[n].main
      }
    })), ...Object.entries(((t = e.palette) == null ? void 0 : t.text) || {}).filter(([, n]) => typeof n == "string").map(([n]) => ({
      props: {
        color: `text${Re(n)}`
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
})), u1 = {
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
}, Or = /* @__PURE__ */ ce(function(t, n) {
  const r = We({
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
    variantMapping: d = u1,
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
  }, h = a || d[c] || u1[c] || "span", g = OF(f);
  return /* @__PURE__ */ M($F, {
    as: h,
    ref: n,
    className: ie(g.root, s),
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
function LF(e) {
  return be("MuiChartsTooltip", e);
}
const Ei = he("MuiChartsTooltip", ["root", "paper", "table", "row", "cell", "mark", "markContainer", "labelCell", "valueCell", "axisValueCell"]), hi = (e) => ve({
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
}, LF, e);
function NF() {
  var I;
  const e = me(), t = e.use(Mf), n = e.use(lt), r = Kl(), {
    xAxis: o,
    xAxisIds: i
  } = Ut(), {
    yAxis: s,
    yAxisIds: a
  } = Ht(), {
    zAxis: l,
    zAxisIds: u
  } = R0(), {
    rotationAxis: c,
    rotationAxisIds: d
  } = E0(), {
    radiusAxis: p,
    radiusAxisIds: f
  } = A0();
  if (!t)
    return null;
  const h = (I = r[t.type]) == null ? void 0 : I.series[t.seriesId];
  if (!h)
    return null;
  const g = Za(h) ? h.xAxisId ?? i[0] : void 0, x = Za(h) ? h.yAxisId ?? a[0] : void 0, y = jx(h) ? ("radiusAxisId" in h ? h.radiusAxisId : void 0) ?? f[0] : void 0, m = jx(h) ? ("rotationAxisId" in h ? h.rotationAxisId : void 0) ?? d[0] : void 0, v = ("colorAxisId" in h ? h.colorAxisId : void 0) ?? ("zAxisId" in h ? h.zAxisId : void 0) ?? u[0], C = (
    // eslint-disable-next-line no-nested-ternary
    m !== void 0 ? c[m] : g !== void 0 ? o[g] : void 0
  ), b = (
    // eslint-disable-next-line no-nested-ternary
    y !== void 0 ? p[y] : x !== void 0 ? s[x] : void 0
  ), S = n[h.type].colorProcessor(h, C, b, v !== void 0 ? l[v] : void 0), k = {};
  return g !== void 0 && (k.x = o[g]), x !== void 0 && (k.y = s[x]), m !== void 0 && (k.rotation = c[m]), y !== void 0 && (k.radius = p[y]), n[h.type].tooltipGetter({
    series: h,
    axesConfig: k,
    getColor: S,
    identifier: t
  });
}
const Vh = K("div", {
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
}), jh = K("table", {
  name: "MuiChartsTooltip",
  slot: "Table"
})(({
  theme: e
}) => ({
  borderSpacing: 0,
  [`& .${Ei.markContainer}`]: {
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
})), j0 = K("tr", {
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
})), xs = K(Or, {
  name: "MuiChartsTooltip",
  slot: "Cell"
})(({
  theme: e
}) => ({
  verticalAlign: "middle",
  color: (e.vars || e).palette.text.secondary,
  textAlign: "start",
  [`&.${Ei.cell}`]: {
    paddingLeft: e.spacing(1),
    paddingRight: e.spacing(1)
  },
  [`&.${Ei.labelCell}`]: {
    whiteSpace: "nowrap",
    fontWeight: e.typography.fontWeightRegular
  },
  [`&.${Ei.valueCell}, &.${Ei.axisValueCell}`]: {
    color: (e.vars || e).palette.text.primary,
    fontWeight: e.typography.fontWeightMedium
  },
  [`&.${Ei.valueCell}`]: {
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
function DF(e) {
  return be("MuiChartsLabelMark", e);
}
const yu = he("MuiChartsLabelMark", ["root", "line", "lineAndMark", "square", "circle", "fill"]), zF = (e) => {
  const {
    type: t
  } = e;
  return ve({
    root: typeof t == "function" ? ["root"] : ["root", t === "line+mark" ? "lineAndMark" : t],
    fill: ["fill"]
  }, DF, e.classes);
}, yI = (e, t, n) => /* @__PURE__ */ ce(function(o, i) {
  var p;
  const s = cn({
    props: o,
    // eslint-disable-next-line mui/material-ui-name-matches-component-name
    name: e
  }), a = typeof t.defaultProps == "function" ? t.defaultProps(s) : t.defaultProps ?? {}, l = vo(a, s), u = Qt(), c = (p = t.classesResolver) == null ? void 0 : p.call(t, l, u);
  return /* @__PURE__ */ M(/* @__PURE__ */ ce(n), L({}, l, {
    classes: c,
    ref: i
  }));
}), FF = ["type", "markShape", "color", "className", "classes"], BF = K("div", {
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
  [`&.${yu.line}`]: {
    width: 16,
    height: 8,
    alignItems: "center"
  },
  [`&.${yu.lineAndMark}`]: {
    alignItems: "center"
  },
  [`&.${yu.square}`]: {
    height: 13,
    width: 13,
    borderRadius: 2,
    overflow: "hidden"
  },
  [`&.${yu.circle}`]: {
    height: 15,
    width: 15
  },
  svg: {
    display: "block"
  }
})), tl = yI("MuiChartsLabelMark", {
  defaultProps: {
    type: "square"
  },
  classesResolver: zF
}, function(t, n) {
  const {
    type: r,
    markShape: o,
    color: i,
    className: s,
    classes: a
  } = t, l = ke(t, FF), u = r, c = Qt();
  return /* @__PURE__ */ M(BF, L({
    className: ie(a == null ? void 0 : a.root, s),
    ownerState: t,
    "aria-hidden": "true",
    ref: n
  }, l, {
    children: typeof u == "function" ? /* @__PURE__ */ M(u, {
      className: a == null ? void 0 : a.fill,
      color: i
    }) : /* @__PURE__ */ oe(He, {
      children: [r === "circle" && /* @__PURE__ */ M("svg", {
        viewBox: "0 0 15 15",
        children: /* @__PURE__ */ M("circle", {
          className: a == null ? void 0 : a.fill,
          r: "7.5",
          cx: "7.5",
          cy: "7.5",
          fill: i
        })
      }), r === "line" && /* @__PURE__ */ M("svg", {
        viewBox: "0 0 16 8",
        preserveAspectRatio: "none",
        children: /* @__PURE__ */ M("path", {
          className: a == null ? void 0 : a.fill,
          d: "M 2 4 L 14 4",
          stroke: i,
          strokeWidth: "4",
          strokeLinecap: "round",
          vectorEffect: "non-scaling-stroke"
        })
      }), r === "line+mark" && /* @__PURE__ */ oe("svg", {
        viewBox: "0 0 16 16",
        preserveAspectRatio: "none",
        children: [/* @__PURE__ */ M("path", {
          className: a == null ? void 0 : a.fill,
          d: "M 1 8 L 15 8",
          stroke: i,
          strokeWidth: 2,
          strokeLinecap: "round",
          vectorEffect: "non-scaling-stroke"
        }), o && /* @__PURE__ */ M("path", {
          d: D0(N0[G0(o)], 32)(),
          transform: "translate(8, 8) ",
          stroke: i,
          strokeWidth: 2,
          fill: (c.vars || c).palette.background.paper
        })]
      }), r !== "line" && r !== "circle" && r !== "line+mark" && /* @__PURE__ */ M("svg", {
        viewBox: "0 0 13 13",
        children: /* @__PURE__ */ M("rect", {
          className: a == null ? void 0 : a.fill,
          width: "13",
          height: "13",
          fill: i
        })
      })]
    })
  }));
});
function UF(e) {
  const {
    classes: t,
    sx: n
  } = e, r = NF(), i = me().use(lt), s = hi(t);
  if (!r)
    return null;
  const a = i[r.identifier.type], l = a && "ItemTooltipContent" in a ? a.ItemTooltipContent : null;
  if ("values" in r) {
    const {
      label: c,
      color: d,
      markType: p,
      markShape: f
    } = r, h = l ?? HF;
    return /* @__PURE__ */ M(Vh, {
      sx: n,
      className: s.paper,
      children: /* @__PURE__ */ oe(jh, {
        className: s.table,
        children: [/* @__PURE__ */ oe(Or, {
          component: "caption",
          children: [/* @__PURE__ */ M("div", {
            className: s.markContainer,
            children: /* @__PURE__ */ M(tl, {
              type: p,
              markShape: f,
              color: d,
              className: s.mark
            })
          }), c]
        }), /* @__PURE__ */ M("tbody", {
          children: /* @__PURE__ */ M(h, {
            classes: t,
            item: r
          })
        })]
      })
    });
  }
  const u = l ?? WF;
  return /* @__PURE__ */ M(Vh, {
    sx: n,
    className: s.paper,
    children: /* @__PURE__ */ M(jh, {
      className: s.table,
      children: /* @__PURE__ */ M("tbody", {
        children: /* @__PURE__ */ M(u, {
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
function HF({
  classes: e,
  item: t
}) {
  const n = hi(e);
  return /* @__PURE__ */ M(He, {
    children: t.values.map((r) => /* @__PURE__ */ oe(j0, {
      className: n.row,
      "data-series": t.identifier.seriesId,
      "data-index": t.identifier.dataIndex,
      children: [/* @__PURE__ */ M(xs, {
        className: ie(n.labelCell, n.cell),
        component: "th",
        children: r.label
      }), /* @__PURE__ */ M(xs, {
        className: ie(n.valueCell, n.cell),
        component: "td",
        children: r.formattedValue
      })]
    }, r.label))
  });
}
function WF({
  classes: e,
  item: t
}) {
  const {
    color: n,
    label: r,
    formattedValue: o,
    markType: i,
    markShape: s
  } = t, a = hi(e);
  return o == null || typeof o != "string" ? null : /* @__PURE__ */ oe(j0, {
    className: a.row,
    "data-series": t.identifier.seriesId,
    "data-index": "dataIndex" in t.identifier ? t.identifier.dataIndex : void 0,
    children: [/* @__PURE__ */ oe(xs, {
      className: ie(a.labelCell, a.cell),
      component: "th",
      children: [/* @__PURE__ */ M("div", {
        className: a.markContainer,
        children: /* @__PURE__ */ M(tl, {
          type: i,
          markShape: s,
          color: n,
          className: a.mark
        })
      }), r]
    }), /* @__PURE__ */ M(xs, {
      className: ie(a.valueCell, a.cell),
      component: "td",
      children: o
    })]
  });
}
function GF(e) {
  const n = me().use(lt);
  return Se(() => {
    const o = {};
    return Object.keys(n).forEach((i) => {
      o[i] = n[i].colorProcessor;
    }), o;
  }, [n]);
}
function $n(e, t) {
  return typeof e == "function" ? e(t) : e;
}
const VF = Xw({
  themeId: _s
});
function jF(e) {
  return e instanceof Date ? e.toUTCString() : e.toLocaleString();
}
const YF = "@media (pointer: fine)", KF = () => VF(YF, {
  defaultMatches: !0
}), Wf = /* @__PURE__ */ new Set(["bar", "line", "scatter", "rangeBar", "ohlc"]);
function vu(e, t, n) {
  var s;
  const r = ((s = e.data) == null ? void 0 : s[t]) ?? null, i = (e.valueFormatter ?? ((a) => e.scaleType === "utc" ? jF(a) : a.toLocaleString()))(r, {
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
function c1(e) {
  if (!(!("showMark" in e) || !e.showMark))
    return "shape" in e && e.shape ? e.shape : "circle";
}
function XF(e) {
  const {
    directions: t
  } = {}, n = u5(), r = c5(), o = d5(), i = f5(), s = me(), a = s.use(I0), l = s.use(T0), u = s.use(Mk), c = s.use(Rk), d = Kl(), {
    xAxis: p
  } = Ut(), {
    yAxis: f
  } = Ht(), {
    zAxis: h,
    zAxisIds: g
  } = R0(), {
    rotationAxis: x
  } = E0(), {
    radiusAxis: y
  } = A0(), m = GF(), v = s.use(t0);
  if (a.length === 0 && l.length === 0 && u.length === 0 && c.length === 0)
    return null;
  const C = [];
  return (t === void 0 || t.includes("x")) && a.forEach(({
    axisId: b,
    dataIndex: S
  }) => {
    C.push(vu(p[b], S, "x"));
  }), (t === void 0 || t.includes("y")) && l.forEach(({
    axisId: b,
    dataIndex: S
  }) => {
    C.push(vu(f[b], S, "y"));
  }), (t === void 0 || t.includes("rotation")) && u.forEach(({
    axisId: b,
    dataIndex: S
  }) => {
    C.push(vu(x[b], S, "rotation"));
  }), (t === void 0 || t.includes("radius")) && c.forEach(({
    axisId: b,
    dataIndex: S
  }) => {
    C.push(vu(y[b], S, "radius"));
  }), Object.keys(d).filter((b) => Wf.has(b)).forEach((b) => {
    const S = d[b];
    return S ? S.seriesOrder.forEach((k) => {
      var w;
      const I = S.series[k];
      if (v && !v({
        type: b,
        seriesId: k
      }))
        return;
      const $ = I.xAxisId ?? n.id, O = I.yAxisId ?? r.id, R = C.findIndex(({
        axisDirection: E,
        axisId: T
      }) => E === "x" && T === $ || E === "y" && T === O);
      if (R >= 0) {
        const E = "colorAxisId" in I && I.colorAxisId || "zAxisId" in I && I.zAxisId || g[0], {
          dataIndex: T
        } = C[R], P = ((w = m[b]) == null ? void 0 : w.call(m, I, p[$], f[O], E ? h[E] : void 0)(T)) ?? "", _ = I.data[T] ?? null, N = $n(I.label, "tooltip") ?? null;
        let A, D;
        if (b === "ohlc" && Array.isArray(_)) {
          const [z, U, W, q] = _, J = I.valueFormatter;
          A = {
            open: z,
            high: U,
            low: W,
            close: q
          }, D = {
            open: J(z, {
              dataIndex: T,
              field: "open"
            }),
            high: J(U, {
              dataIndex: T,
              field: "high"
            }),
            low: J(W, {
              dataIndex: T,
              field: "low"
            }),
            close: J(q, {
              dataIndex: T,
              field: "close"
            })
          };
        } else
          A = _, D = I.valueFormatter(_, {
            dataIndex: T
          });
        C[R].seriesItems.push({
          seriesId: k,
          color: P,
          value: A,
          formattedValue: D,
          formattedLabel: N,
          markType: I.labelMarkType,
          markShape: c1(I)
        });
      }
    }) : [];
  }), Object.keys(d).filter(Wl).forEach((b) => {
    const S = d[b];
    return S ? S.seriesOrder.forEach((k) => {
      var w;
      const I = S.series[k];
      if (v && !v({
        type: b,
        seriesId: k
      }))
        return;
      const $ = ("rotationAxisId" in I ? I.rotationAxisId : void 0) ?? (o == null ? void 0 : o.id), O = ("radiusAxisId" in I ? I.radiusAxisId : void 0) ?? (i == null ? void 0 : i.id), R = C.findIndex(({
        axisDirection: E,
        axisId: T
      }) => E === "rotation" && T === $ || E === "radius" && T === O);
      if (R >= 0) {
        const {
          dataIndex: E
        } = C[R], T = ((w = m[b]) == null ? void 0 : w.call(m, I, $ !== void 0 ? x[$] : void 0, O !== void 0 ? y[O] : void 0)(E)) ?? "", P = I.data[E] ?? null, _ = I.valueFormatter(P, {
          dataIndex: E
        }), N = $n(I.label, "tooltip") ?? null;
        C[R].seriesItems.push({
          seriesId: k,
          color: T,
          value: P,
          formattedValue: _,
          formattedLabel: N,
          markType: I.labelMarkType,
          markShape: c1(I)
        });
      }
    }) : [];
  }), C;
}
function qF(e) {
  const {
    sort: t
  } = e, n = hi(e.classes), o = me().use(wL), i = XF();
  return i === null ? null : /* @__PURE__ */ M(Vh, {
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
      return /* @__PURE__ */ oe(jh, {
        className: n.table,
        children: [l != null && !a.hideTooltip && /* @__PURE__ */ M(Or, {
          component: "caption",
          children: u
        }), /* @__PURE__ */ M("tbody", {
          children: d.map((p) => {
            const f = o(p.seriesId), h = f && "AxisTooltipContent" in f ? f.AxisTooltipContent ?? d1 : d1;
            return /* @__PURE__ */ M(h, {
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
function d1(e) {
  const t = hi(e.classes), {
    item: n
  } = e;
  return n.formattedValue == null || typeof n.formattedValue != "string" ? null : /* @__PURE__ */ oe(j0, {
    className: t.row,
    "data-series": n.seriesId,
    "data-index": "dataIndex" in n ? n.dataIndex : void 0,
    children: [/* @__PURE__ */ oe(xs, {
      className: ie(t.labelCell, t.cell),
      component: "th",
      children: [/* @__PURE__ */ M("div", {
        className: t.markContainer,
        children: /* @__PURE__ */ M(tl, {
          type: n.markType,
          markShape: n.markShape,
          color: n.color,
          className: t.mark
        })
      }), n.formattedLabel || null]
    }), /* @__PURE__ */ M(xs, {
      className: ie(t.valueCell, t.cell),
      component: "td",
      children: n.formattedValue
    })]
  });
}
var vI = { exports: {} }, wn = {}, xI = { exports: {} }, CI = {};
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
  function t(A, D) {
    var z = A.length;
    A.push(D);
    e: for (; 0 < z; ) {
      var U = z - 1 >>> 1, W = A[U];
      if (0 < o(W, D)) A[U] = D, A[z] = W, z = U;
      else break e;
    }
  }
  function n(A) {
    return A.length === 0 ? null : A[0];
  }
  function r(A) {
    if (A.length === 0) return null;
    var D = A[0], z = A.pop();
    if (z !== D) {
      A[0] = z;
      e: for (var U = 0, W = A.length, q = W >>> 1; U < q; ) {
        var J = 2 * (U + 1) - 1, ae = A[J], ee = J + 1, ne = A[ee];
        if (0 > o(ae, z)) ee < W && 0 > o(ne, ae) ? (A[U] = ne, A[ee] = z, U = ee) : (A[U] = ae, A[J] = z, U = J);
        else if (ee < W && 0 > o(ne, z)) A[U] = ne, A[ee] = z, U = ee;
        else break e;
      }
    }
    return D;
  }
  function o(A, D) {
    var z = A.sortIndex - D.sortIndex;
    return z !== 0 ? z : A.id - D.id;
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
  function v(A) {
    for (var D = n(u); D !== null; ) {
      if (D.callback === null) r(u);
      else if (D.startTime <= A) r(u), D.sortIndex = D.expirationTime, t(l, D);
      else break;
      D = n(u);
    }
  }
  function C(A) {
    if (g = !1, v(A), !h) if (n(l) !== null) h = !0, _(b);
    else {
      var D = n(u);
      D !== null && N(C, D.startTime - A);
    }
  }
  function b(A, D) {
    h = !1, g && (g = !1, y(I), I = -1), f = !0;
    var z = p;
    try {
      for (v(D), d = n(l); d !== null && (!(d.expirationTime > D) || A && !R()); ) {
        var U = d.callback;
        if (typeof U == "function") {
          d.callback = null, p = d.priorityLevel;
          var W = U(d.expirationTime <= D);
          D = e.unstable_now(), typeof W == "function" ? d.callback = W : d === n(l) && r(l), v(D);
        } else r(l);
        d = n(l);
      }
      if (d !== null) var q = !0;
      else {
        var J = n(u);
        J !== null && N(C, J.startTime - D), q = !1;
      }
      return q;
    } finally {
      d = null, p = z, f = !1;
    }
  }
  var S = !1, k = null, I = -1, $ = 5, O = -1;
  function R() {
    return !(e.unstable_now() - O < $);
  }
  function w() {
    if (k !== null) {
      var A = e.unstable_now();
      O = A;
      var D = !0;
      try {
        D = k(!0, A);
      } finally {
        D ? E() : (S = !1, k = null);
      }
    } else S = !1;
  }
  var E;
  if (typeof m == "function") E = function() {
    m(w);
  };
  else if (typeof MessageChannel < "u") {
    var T = new MessageChannel(), P = T.port2;
    T.port1.onmessage = w, E = function() {
      P.postMessage(null);
    };
  } else E = function() {
    x(w, 0);
  };
  function _(A) {
    k = A, S || (S = !0, E());
  }
  function N(A, D) {
    I = x(function() {
      A(e.unstable_now());
    }, D);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(A) {
    A.callback = null;
  }, e.unstable_continueExecution = function() {
    h || f || (h = !0, _(b));
  }, e.unstable_forceFrameRate = function(A) {
    0 > A || 125 < A ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : $ = 0 < A ? Math.floor(1e3 / A) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return p;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(l);
  }, e.unstable_next = function(A) {
    switch (p) {
      case 1:
      case 2:
      case 3:
        var D = 3;
        break;
      default:
        D = p;
    }
    var z = p;
    p = D;
    try {
      return A();
    } finally {
      p = z;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(A, D) {
    switch (A) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        A = 3;
    }
    var z = p;
    p = A;
    try {
      return D();
    } finally {
      p = z;
    }
  }, e.unstable_scheduleCallback = function(A, D, z) {
    var U = e.unstable_now();
    switch (typeof z == "object" && z !== null ? (z = z.delay, z = typeof z == "number" && 0 < z ? U + z : U) : z = U, A) {
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
    return W = z + W, A = { id: c++, callback: D, priorityLevel: A, startTime: z, expirationTime: W, sortIndex: -1 }, z > U ? (A.sortIndex = z, t(u, A), n(l) === null && A === n(u) && (g ? (y(I), I = -1) : g = !0, N(C, z - U))) : (A.sortIndex = W, t(l, A), h || f || (h = !0, _(b))), A;
  }, e.unstable_shouldYield = R, e.unstable_wrapCallback = function(A) {
    var D = p;
    return function() {
      var z = p;
      p = D;
      try {
        return A.apply(this, arguments);
      } finally {
        p = z;
      }
    };
  };
})(CI);
xI.exports = CI;
var QF = xI.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ZF = bm, vn = QF;
function G(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var wI = /* @__PURE__ */ new Set(), nl = {};
function gi(e, t) {
  Cs(e, t), Cs(e + "Capture", t);
}
function Cs(e, t) {
  for (nl[e] = t, e = 0; e < t.length; e++) wI.add(t[e]);
}
var Wr = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Yh = Object.prototype.hasOwnProperty, JF = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, f1 = {}, p1 = {};
function e3(e) {
  return Yh.call(p1, e) ? !0 : Yh.call(f1, e) ? !1 : JF.test(e) ? p1[e] = !0 : (f1[e] = !0, !1);
}
function t3(e, t, n, r) {
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
function n3(e, t, n, r) {
  if (t === null || typeof t > "u" || t3(e, t, n, r)) return !0;
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
function Zt(e, t, n, r, o, i, s) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = s;
}
var _t = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  _t[e] = new Zt(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  _t[t] = new Zt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  _t[e] = new Zt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  _t[e] = new Zt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  _t[e] = new Zt(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  _t[e] = new Zt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  _t[e] = new Zt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  _t[e] = new Zt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  _t[e] = new Zt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Y0 = /[\-:]([a-z])/g;
function K0(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Y0,
    K0
  );
  _t[t] = new Zt(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Y0, K0);
  _t[t] = new Zt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Y0, K0);
  _t[t] = new Zt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  _t[e] = new Zt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
_t.xlinkHref = new Zt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  _t[e] = new Zt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function X0(e, t, n, r) {
  var o = _t.hasOwnProperty(t) ? _t[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (n3(t, n, o, r) && (n = null), r || o === null ? e3(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var qr = ZF.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, xu = Symbol.for("react.element"), Ri = Symbol.for("react.portal"), _i = Symbol.for("react.fragment"), q0 = Symbol.for("react.strict_mode"), Kh = Symbol.for("react.profiler"), SI = Symbol.for("react.provider"), bI = Symbol.for("react.context"), Q0 = Symbol.for("react.forward_ref"), Xh = Symbol.for("react.suspense"), qh = Symbol.for("react.suspense_list"), Z0 = Symbol.for("react.memo"), Jr = Symbol.for("react.lazy"), kI = Symbol.for("react.offscreen"), h1 = Symbol.iterator;
function oa(e) {
  return e === null || typeof e != "object" ? null : (e = h1 && e[h1] || e["@@iterator"], typeof e == "function" ? e : null);
}
var tt = Object.assign, Fp;
function Ca(e) {
  if (Fp === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Fp = t && t[1] || "";
  }
  return `
` + Fp + e;
}
var Bp = !1;
function Up(e, t) {
  if (!e || Bp) return "";
  Bp = !0;
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
    Bp = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Ca(e) : "";
}
function r3(e) {
  switch (e.tag) {
    case 5:
      return Ca(e.type);
    case 16:
      return Ca("Lazy");
    case 13:
      return Ca("Suspense");
    case 19:
      return Ca("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Up(e.type, !1), e;
    case 11:
      return e = Up(e.type.render, !1), e;
    case 1:
      return e = Up(e.type, !0), e;
    default:
      return "";
  }
}
function Qh(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case _i:
      return "Fragment";
    case Ri:
      return "Portal";
    case Kh:
      return "Profiler";
    case q0:
      return "StrictMode";
    case Xh:
      return "Suspense";
    case qh:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case bI:
      return (e.displayName || "Context") + ".Consumer";
    case SI:
      return (e._context.displayName || "Context") + ".Provider";
    case Q0:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Z0:
      return t = e.displayName || null, t !== null ? t : Qh(e.type) || "Memo";
    case Jr:
      t = e._payload, e = e._init;
      try {
        return Qh(e(t));
      } catch {
      }
  }
  return null;
}
function o3(e) {
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
      return Qh(t);
    case 8:
      return t === q0 ? "StrictMode" : "Mode";
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
function wo(e) {
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
function II(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function i3(e) {
  var t = II(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function Cu(e) {
  e._valueTracker || (e._valueTracker = i3(e));
}
function TI(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = II(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Uc(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Zh(e, t) {
  var n = t.checked;
  return tt({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function g1(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = wo(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function PI(e, t) {
  t = t.checked, t != null && X0(e, "checked", t, !1);
}
function Jh(e, t) {
  PI(e, t);
  var n = wo(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? eg(e, t.type, n) : t.hasOwnProperty("defaultValue") && eg(e, t.type, wo(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function m1(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function eg(e, t, n) {
  (t !== "number" || Uc(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var wa = Array.isArray;
function qi(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + wo(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function tg(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(G(91));
  return tt({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function y1(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(G(92));
      if (wa(n)) {
        if (1 < n.length) throw Error(G(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: wo(n) };
}
function MI(e, t) {
  var n = wo(t.value), r = wo(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function v1(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function EI(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ng(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? EI(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var wu, AI = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (wu = wu || document.createElement("div"), wu.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = wu.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function rl(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Ta = {
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
}, s3 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ta).forEach(function(e) {
  s3.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Ta[t] = Ta[e];
  });
});
function RI(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Ta.hasOwnProperty(e) && Ta[e] ? ("" + t).trim() : t + "px";
}
function _I(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, o = RI(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
  }
}
var a3 = tt({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function rg(e, t) {
  if (t) {
    if (a3[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(G(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(G(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(G(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(G(62));
  }
}
function og(e, t) {
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
var ig = null;
function J0(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var sg = null, Qi = null, Zi = null;
function x1(e) {
  if (e = Zl(e)) {
    if (typeof sg != "function") throw Error(G(280));
    var t = e.stateNode;
    t && (t = Kf(t), sg(e.stateNode, e.type, t));
  }
}
function OI(e) {
  Qi ? Zi ? Zi.push(e) : Zi = [e] : Qi = e;
}
function $I() {
  if (Qi) {
    var e = Qi, t = Zi;
    if (Zi = Qi = null, x1(e), t) for (e = 0; e < t.length; e++) x1(t[e]);
  }
}
function LI(e, t) {
  return e(t);
}
function NI() {
}
var Hp = !1;
function DI(e, t, n) {
  if (Hp) return e(t, n);
  Hp = !0;
  try {
    return LI(e, t, n);
  } finally {
    Hp = !1, (Qi !== null || Zi !== null) && (NI(), $I());
  }
}
function ol(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Kf(n);
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
var ag = !1;
if (Wr) try {
  var ia = {};
  Object.defineProperty(ia, "passive", { get: function() {
    ag = !0;
  } }), window.addEventListener("test", ia, ia), window.removeEventListener("test", ia, ia);
} catch {
  ag = !1;
}
function l3(e, t, n, r, o, i, s, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Pa = !1, Hc = null, Wc = !1, lg = null, u3 = { onError: function(e) {
  Pa = !0, Hc = e;
} };
function c3(e, t, n, r, o, i, s, a, l) {
  Pa = !1, Hc = null, l3.apply(u3, arguments);
}
function d3(e, t, n, r, o, i, s, a, l) {
  if (c3.apply(this, arguments), Pa) {
    if (Pa) {
      var u = Hc;
      Pa = !1, Hc = null;
    } else throw Error(G(198));
    Wc || (Wc = !0, lg = u);
  }
}
function mi(e) {
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
function zI(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function C1(e) {
  if (mi(e) !== e) throw Error(G(188));
}
function f3(e) {
  var t = e.alternate;
  if (!t) {
    if (t = mi(e), t === null) throw Error(G(188));
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
        if (i === n) return C1(o), e;
        if (i === r) return C1(o), t;
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
function FI(e) {
  return e = f3(e), e !== null ? BI(e) : null;
}
function BI(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = BI(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var UI = vn.unstable_scheduleCallback, w1 = vn.unstable_cancelCallback, p3 = vn.unstable_shouldYield, h3 = vn.unstable_requestPaint, it = vn.unstable_now, g3 = vn.unstable_getCurrentPriorityLevel, ey = vn.unstable_ImmediatePriority, HI = vn.unstable_UserBlockingPriority, Gc = vn.unstable_NormalPriority, m3 = vn.unstable_LowPriority, WI = vn.unstable_IdlePriority, Gf = null, hr = null;
function y3(e) {
  if (hr && typeof hr.onCommitFiberRoot == "function") try {
    hr.onCommitFiberRoot(Gf, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var qn = Math.clz32 ? Math.clz32 : C3, v3 = Math.log, x3 = Math.LN2;
function C3(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (v3(e) / x3 | 0) | 0;
}
var Su = 64, bu = 4194304;
function Sa(e) {
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
function Vc(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, o = e.suspendedLanes, i = e.pingedLanes, s = n & 268435455;
  if (s !== 0) {
    var a = s & ~o;
    a !== 0 ? r = Sa(a) : (i &= s, i !== 0 && (r = Sa(i)));
  } else s = n & ~o, s !== 0 ? r = Sa(s) : i !== 0 && (r = Sa(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - qn(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function w3(e, t) {
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
function S3(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var s = 31 - qn(i), a = 1 << s, l = o[s];
    l === -1 ? (!(a & n) || a & r) && (o[s] = w3(a, t)) : l <= t && (e.expiredLanes |= a), i &= ~a;
  }
}
function ug(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function GI() {
  var e = Su;
  return Su <<= 1, !(Su & 4194240) && (Su = 64), e;
}
function Wp(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ql(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - qn(t), e[t] = n;
}
function b3(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - qn(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
  }
}
function ty(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - qn(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var ze = 0;
function VI(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var jI, ny, YI, KI, XI, cg = !1, ku = [], uo = null, co = null, fo = null, il = /* @__PURE__ */ new Map(), sl = /* @__PURE__ */ new Map(), no = [], k3 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function S1(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      uo = null;
      break;
    case "dragenter":
    case "dragleave":
      co = null;
      break;
    case "mouseover":
    case "mouseout":
      fo = null;
      break;
    case "pointerover":
    case "pointerout":
      il.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      sl.delete(t.pointerId);
  }
}
function sa(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = Zl(t), t !== null && ny(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function I3(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return uo = sa(uo, e, t, n, r, o), !0;
    case "dragenter":
      return co = sa(co, e, t, n, r, o), !0;
    case "mouseover":
      return fo = sa(fo, e, t, n, r, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return il.set(i, sa(il.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, sl.set(i, sa(sl.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function qI(e) {
  var t = Ko(e.target);
  if (t !== null) {
    var n = mi(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = zI(n), t !== null) {
          e.blockedOn = t, XI(e.priority, function() {
            YI(n);
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
function qu(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = dg(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ig = r, n.target.dispatchEvent(r), ig = null;
    } else return t = Zl(n), t !== null && ny(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function b1(e, t, n) {
  qu(e) && n.delete(t);
}
function T3() {
  cg = !1, uo !== null && qu(uo) && (uo = null), co !== null && qu(co) && (co = null), fo !== null && qu(fo) && (fo = null), il.forEach(b1), sl.forEach(b1);
}
function aa(e, t) {
  e.blockedOn === t && (e.blockedOn = null, cg || (cg = !0, vn.unstable_scheduleCallback(vn.unstable_NormalPriority, T3)));
}
function al(e) {
  function t(o) {
    return aa(o, e);
  }
  if (0 < ku.length) {
    aa(ku[0], e);
    for (var n = 1; n < ku.length; n++) {
      var r = ku[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (uo !== null && aa(uo, e), co !== null && aa(co, e), fo !== null && aa(fo, e), il.forEach(t), sl.forEach(t), n = 0; n < no.length; n++) r = no[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < no.length && (n = no[0], n.blockedOn === null); ) qI(n), n.blockedOn === null && no.shift();
}
var Ji = qr.ReactCurrentBatchConfig, jc = !0;
function P3(e, t, n, r) {
  var o = ze, i = Ji.transition;
  Ji.transition = null;
  try {
    ze = 1, ry(e, t, n, r);
  } finally {
    ze = o, Ji.transition = i;
  }
}
function M3(e, t, n, r) {
  var o = ze, i = Ji.transition;
  Ji.transition = null;
  try {
    ze = 4, ry(e, t, n, r);
  } finally {
    ze = o, Ji.transition = i;
  }
}
function ry(e, t, n, r) {
  if (jc) {
    var o = dg(e, t, n, r);
    if (o === null) Jp(e, t, r, Yc, n), S1(e, r);
    else if (I3(o, e, t, n, r)) r.stopPropagation();
    else if (S1(e, r), t & 4 && -1 < k3.indexOf(e)) {
      for (; o !== null; ) {
        var i = Zl(o);
        if (i !== null && jI(i), i = dg(e, t, n, r), i === null && Jp(e, t, r, Yc, n), i === o) break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Jp(e, t, r, null, n);
  }
}
var Yc = null;
function dg(e, t, n, r) {
  if (Yc = null, e = J0(r), e = Ko(e), e !== null) if (t = mi(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = zI(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Yc = e, null;
}
function QI(e) {
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
      switch (g3()) {
        case ey:
          return 1;
        case HI:
          return 4;
        case Gc:
        case m3:
          return 16;
        case WI:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var so = null, oy = null, Qu = null;
function ZI() {
  if (Qu) return Qu;
  var e, t = oy, n = t.length, r, o = "value" in so ? so.value : so.textContent, i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++) ;
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++) ;
  return Qu = o.slice(e, 1 < r ? 1 - r : void 0);
}
function Zu(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Iu() {
  return !0;
}
function k1() {
  return !1;
}
function Sn(e) {
  function t(n, r, o, i, s) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = s, this.currentTarget = null;
    for (var a in e) e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(i) : i[a]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Iu : k1, this.isPropagationStopped = k1, this;
  }
  return tt(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Iu);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Iu);
  }, persist: function() {
  }, isPersistent: Iu }), t;
}
var Vs = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, iy = Sn(Vs), Ql = tt({}, Vs, { view: 0, detail: 0 }), E3 = Sn(Ql), Gp, Vp, la, Vf = tt({}, Ql, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: sy, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== la && (la && e.type === "mousemove" ? (Gp = e.screenX - la.screenX, Vp = e.screenY - la.screenY) : Vp = Gp = 0, la = e), Gp);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Vp;
} }), I1 = Sn(Vf), A3 = tt({}, Vf, { dataTransfer: 0 }), R3 = Sn(A3), _3 = tt({}, Ql, { relatedTarget: 0 }), jp = Sn(_3), O3 = tt({}, Vs, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), $3 = Sn(O3), L3 = tt({}, Vs, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), N3 = Sn(L3), D3 = tt({}, Vs, { data: 0 }), T1 = Sn(D3), z3 = {
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
}, F3 = {
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
}, B3 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function U3(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = B3[e]) ? !!t[e] : !1;
}
function sy() {
  return U3;
}
var H3 = tt({}, Ql, { key: function(e) {
  if (e.key) {
    var t = z3[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Zu(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? F3[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: sy, charCode: function(e) {
  return e.type === "keypress" ? Zu(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Zu(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), W3 = Sn(H3), G3 = tt({}, Vf, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), P1 = Sn(G3), V3 = tt({}, Ql, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: sy }), j3 = Sn(V3), Y3 = tt({}, Vs, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), K3 = Sn(Y3), X3 = tt({}, Vf, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), q3 = Sn(X3), Q3 = [9, 13, 27, 32], ay = Wr && "CompositionEvent" in window, Ma = null;
Wr && "documentMode" in document && (Ma = document.documentMode);
var Z3 = Wr && "TextEvent" in window && !Ma, JI = Wr && (!ay || Ma && 8 < Ma && 11 >= Ma), M1 = " ", E1 = !1;
function eT(e, t) {
  switch (e) {
    case "keyup":
      return Q3.indexOf(t.keyCode) !== -1;
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
function tT(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Oi = !1;
function J3(e, t) {
  switch (e) {
    case "compositionend":
      return tT(t);
    case "keypress":
      return t.which !== 32 ? null : (E1 = !0, M1);
    case "textInput":
      return e = t.data, e === M1 && E1 ? null : e;
    default:
      return null;
  }
}
function eB(e, t) {
  if (Oi) return e === "compositionend" || !ay && eT(e, t) ? (e = ZI(), Qu = oy = so = null, Oi = !1, e) : null;
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
      return JI && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var tB = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function A1(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!tB[e.type] : t === "textarea";
}
function nT(e, t, n, r) {
  OI(r), t = Kc(t, "onChange"), 0 < t.length && (n = new iy("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Ea = null, ll = null;
function nB(e) {
  pT(e, 0);
}
function jf(e) {
  var t = Ni(e);
  if (TI(t)) return e;
}
function rB(e, t) {
  if (e === "change") return t;
}
var rT = !1;
if (Wr) {
  var Yp;
  if (Wr) {
    var Kp = "oninput" in document;
    if (!Kp) {
      var R1 = document.createElement("div");
      R1.setAttribute("oninput", "return;"), Kp = typeof R1.oninput == "function";
    }
    Yp = Kp;
  } else Yp = !1;
  rT = Yp && (!document.documentMode || 9 < document.documentMode);
}
function _1() {
  Ea && (Ea.detachEvent("onpropertychange", oT), ll = Ea = null);
}
function oT(e) {
  if (e.propertyName === "value" && jf(ll)) {
    var t = [];
    nT(t, ll, e, J0(e)), DI(nB, t);
  }
}
function oB(e, t, n) {
  e === "focusin" ? (_1(), Ea = t, ll = n, Ea.attachEvent("onpropertychange", oT)) : e === "focusout" && _1();
}
function iB(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return jf(ll);
}
function sB(e, t) {
  if (e === "click") return jf(t);
}
function aB(e, t) {
  if (e === "input" || e === "change") return jf(t);
}
function lB(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Jn = typeof Object.is == "function" ? Object.is : lB;
function ul(e, t) {
  if (Jn(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Yh.call(t, o) || !Jn(e[o], t[o])) return !1;
  }
  return !0;
}
function O1(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function $1(e, t) {
  var n = O1(e);
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
    n = O1(n);
  }
}
function iT(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? iT(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function sT() {
  for (var e = window, t = Uc(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Uc(e.document);
  }
  return t;
}
function ly(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function uB(e) {
  var t = sT(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && iT(n.ownerDocument.documentElement, n)) {
    if (r !== null && ly(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, i = Math.min(r.start, o);
        r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = $1(n, i);
        var s = $1(
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
var cB = Wr && "documentMode" in document && 11 >= document.documentMode, $i = null, fg = null, Aa = null, pg = !1;
function L1(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  pg || $i == null || $i !== Uc(r) || (r = $i, "selectionStart" in r && ly(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Aa && ul(Aa, r) || (Aa = r, r = Kc(fg, "onSelect"), 0 < r.length && (t = new iy("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = $i)));
}
function Tu(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Li = { animationend: Tu("Animation", "AnimationEnd"), animationiteration: Tu("Animation", "AnimationIteration"), animationstart: Tu("Animation", "AnimationStart"), transitionend: Tu("Transition", "TransitionEnd") }, Xp = {}, aT = {};
Wr && (aT = document.createElement("div").style, "AnimationEvent" in window || (delete Li.animationend.animation, delete Li.animationiteration.animation, delete Li.animationstart.animation), "TransitionEvent" in window || delete Li.transitionend.transition);
function Yf(e) {
  if (Xp[e]) return Xp[e];
  if (!Li[e]) return e;
  var t = Li[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in aT) return Xp[e] = t[n];
  return e;
}
var lT = Yf("animationend"), uT = Yf("animationiteration"), cT = Yf("animationstart"), dT = Yf("transitionend"), fT = /* @__PURE__ */ new Map(), N1 = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Ro(e, t) {
  fT.set(e, t), gi(t, [e]);
}
for (var qp = 0; qp < N1.length; qp++) {
  var Qp = N1[qp], dB = Qp.toLowerCase(), fB = Qp[0].toUpperCase() + Qp.slice(1);
  Ro(dB, "on" + fB);
}
Ro(lT, "onAnimationEnd");
Ro(uT, "onAnimationIteration");
Ro(cT, "onAnimationStart");
Ro("dblclick", "onDoubleClick");
Ro("focusin", "onFocus");
Ro("focusout", "onBlur");
Ro(dT, "onTransitionEnd");
Cs("onMouseEnter", ["mouseout", "mouseover"]);
Cs("onMouseLeave", ["mouseout", "mouseover"]);
Cs("onPointerEnter", ["pointerout", "pointerover"]);
Cs("onPointerLeave", ["pointerout", "pointerover"]);
gi("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
gi("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
gi("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
gi("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
gi("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
gi("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var ba = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), pB = new Set("cancel close invalid load scroll toggle".split(" ").concat(ba));
function D1(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, d3(r, t, void 0, e), e.currentTarget = null;
}
function pT(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var s = r.length - 1; 0 <= s; s--) {
        var a = r[s], l = a.instance, u = a.currentTarget;
        if (a = a.listener, l !== i && o.isPropagationStopped()) break e;
        D1(o, a, u), i = l;
      }
      else for (s = 0; s < r.length; s++) {
        if (a = r[s], l = a.instance, u = a.currentTarget, a = a.listener, l !== i && o.isPropagationStopped()) break e;
        D1(o, a, u), i = l;
      }
    }
  }
  if (Wc) throw e = lg, Wc = !1, lg = null, e;
}
function Ge(e, t) {
  var n = t[vg];
  n === void 0 && (n = t[vg] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (hT(t, e, 2, !1), n.add(r));
}
function Zp(e, t, n) {
  var r = 0;
  t && (r |= 4), hT(n, e, r, t);
}
var Pu = "_reactListening" + Math.random().toString(36).slice(2);
function cl(e) {
  if (!e[Pu]) {
    e[Pu] = !0, wI.forEach(function(n) {
      n !== "selectionchange" && (pB.has(n) || Zp(n, !1, e), Zp(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Pu] || (t[Pu] = !0, Zp("selectionchange", !1, t));
  }
}
function hT(e, t, n, r) {
  switch (QI(t)) {
    case 1:
      var o = P3;
      break;
    case 4:
      o = M3;
      break;
    default:
      o = ry;
  }
  n = o.bind(null, t, n, e), o = void 0, !ag || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function Jp(e, t, n, r, o) {
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
        if (s = Ko(a), s === null) return;
        if (l = s.tag, l === 5 || l === 6) {
          r = i = s;
          continue e;
        }
        a = a.parentNode;
      }
    }
    r = r.return;
  }
  DI(function() {
    var u = i, c = J0(n), d = [];
    e: {
      var p = fT.get(e);
      if (p !== void 0) {
        var f = iy, h = e;
        switch (e) {
          case "keypress":
            if (Zu(n) === 0) break e;
          case "keydown":
          case "keyup":
            f = W3;
            break;
          case "focusin":
            h = "focus", f = jp;
            break;
          case "focusout":
            h = "blur", f = jp;
            break;
          case "beforeblur":
          case "afterblur":
            f = jp;
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
            f = I1;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            f = R3;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            f = j3;
            break;
          case lT:
          case uT:
          case cT:
            f = $3;
            break;
          case dT:
            f = K3;
            break;
          case "scroll":
            f = E3;
            break;
          case "wheel":
            f = q3;
            break;
          case "copy":
          case "cut":
          case "paste":
            f = N3;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            f = P1;
        }
        var g = (t & 4) !== 0, x = !g && e === "scroll", y = g ? p !== null ? p + "Capture" : null : p;
        g = [];
        for (var m = u, v; m !== null; ) {
          v = m;
          var C = v.stateNode;
          if (v.tag === 5 && C !== null && (v = C, y !== null && (C = ol(m, y), C != null && g.push(dl(m, C, v)))), x) break;
          m = m.return;
        }
        0 < g.length && (p = new f(p, h, null, n, c), d.push({ event: p, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (p = e === "mouseover" || e === "pointerover", f = e === "mouseout" || e === "pointerout", p && n !== ig && (h = n.relatedTarget || n.fromElement) && (Ko(h) || h[Gr])) break e;
        if ((f || p) && (p = c.window === c ? c : (p = c.ownerDocument) ? p.defaultView || p.parentWindow : window, f ? (h = n.relatedTarget || n.toElement, f = u, h = h ? Ko(h) : null, h !== null && (x = mi(h), h !== x || h.tag !== 5 && h.tag !== 6) && (h = null)) : (f = null, h = u), f !== h)) {
          if (g = I1, C = "onMouseLeave", y = "onMouseEnter", m = "mouse", (e === "pointerout" || e === "pointerover") && (g = P1, C = "onPointerLeave", y = "onPointerEnter", m = "pointer"), x = f == null ? p : Ni(f), v = h == null ? p : Ni(h), p = new g(C, m + "leave", f, n, c), p.target = x, p.relatedTarget = v, C = null, Ko(c) === u && (g = new g(y, m + "enter", h, n, c), g.target = v, g.relatedTarget = x, C = g), x = C, f && h) t: {
            for (g = f, y = h, m = 0, v = g; v; v = Mi(v)) m++;
            for (v = 0, C = y; C; C = Mi(C)) v++;
            for (; 0 < m - v; ) g = Mi(g), m--;
            for (; 0 < v - m; ) y = Mi(y), v--;
            for (; m--; ) {
              if (g === y || y !== null && g === y.alternate) break t;
              g = Mi(g), y = Mi(y);
            }
            g = null;
          }
          else g = null;
          f !== null && z1(d, p, f, g, !1), h !== null && x !== null && z1(d, x, h, g, !0);
        }
      }
      e: {
        if (p = u ? Ni(u) : window, f = p.nodeName && p.nodeName.toLowerCase(), f === "select" || f === "input" && p.type === "file") var b = rB;
        else if (A1(p)) if (rT) b = aB;
        else {
          b = iB;
          var S = oB;
        }
        else (f = p.nodeName) && f.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (b = sB);
        if (b && (b = b(e, u))) {
          nT(d, b, n, c);
          break e;
        }
        S && S(e, p, u), e === "focusout" && (S = p._wrapperState) && S.controlled && p.type === "number" && eg(p, "number", p.value);
      }
      switch (S = u ? Ni(u) : window, e) {
        case "focusin":
          (A1(S) || S.contentEditable === "true") && ($i = S, fg = u, Aa = null);
          break;
        case "focusout":
          Aa = fg = $i = null;
          break;
        case "mousedown":
          pg = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          pg = !1, L1(d, n, c);
          break;
        case "selectionchange":
          if (cB) break;
        case "keydown":
        case "keyup":
          L1(d, n, c);
      }
      var k;
      if (ay) e: {
        switch (e) {
          case "compositionstart":
            var I = "onCompositionStart";
            break e;
          case "compositionend":
            I = "onCompositionEnd";
            break e;
          case "compositionupdate":
            I = "onCompositionUpdate";
            break e;
        }
        I = void 0;
      }
      else Oi ? eT(e, n) && (I = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (I = "onCompositionStart");
      I && (JI && n.locale !== "ko" && (Oi || I !== "onCompositionStart" ? I === "onCompositionEnd" && Oi && (k = ZI()) : (so = c, oy = "value" in so ? so.value : so.textContent, Oi = !0)), S = Kc(u, I), 0 < S.length && (I = new T1(I, e, null, n, c), d.push({ event: I, listeners: S }), k ? I.data = k : (k = tT(n), k !== null && (I.data = k)))), (k = Z3 ? J3(e, n) : eB(e, n)) && (u = Kc(u, "onBeforeInput"), 0 < u.length && (c = new T1("onBeforeInput", "beforeinput", null, n, c), d.push({ event: c, listeners: u }), c.data = k));
    }
    pT(d, t);
  });
}
function dl(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Kc(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = ol(e, n), i != null && r.unshift(dl(e, i, o)), i = ol(e, t), i != null && r.push(dl(e, i, o))), e = e.return;
  }
  return r;
}
function Mi(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function z1(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n, l = a.alternate, u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 && u !== null && (a = u, o ? (l = ol(n, i), l != null && s.unshift(dl(n, l, a))) : o || (l = ol(n, i), l != null && s.push(dl(n, l, a)))), n = n.return;
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var hB = /\r\n?/g, gB = /\u0000|\uFFFD/g;
function F1(e) {
  return (typeof e == "string" ? e : "" + e).replace(hB, `
`).replace(gB, "");
}
function Mu(e, t, n) {
  if (t = F1(t), F1(e) !== t && n) throw Error(G(425));
}
function Xc() {
}
var hg = null, gg = null;
function mg(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var yg = typeof setTimeout == "function" ? setTimeout : void 0, mB = typeof clearTimeout == "function" ? clearTimeout : void 0, B1 = typeof Promise == "function" ? Promise : void 0, yB = typeof queueMicrotask == "function" ? queueMicrotask : typeof B1 < "u" ? function(e) {
  return B1.resolve(null).then(e).catch(vB);
} : yg;
function vB(e) {
  setTimeout(function() {
    throw e;
  });
}
function eh(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
      if (r === 0) {
        e.removeChild(o), al(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  al(t);
}
function po(e) {
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
function U1(e) {
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
var js = Math.random().toString(36).slice(2), cr = "__reactFiber$" + js, fl = "__reactProps$" + js, Gr = "__reactContainer$" + js, vg = "__reactEvents$" + js, xB = "__reactListeners$" + js, CB = "__reactHandles$" + js;
function Ko(e) {
  var t = e[cr];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Gr] || n[cr]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = U1(e); e !== null; ) {
        if (n = e[cr]) return n;
        e = U1(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Zl(e) {
  return e = e[cr] || e[Gr], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Ni(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(G(33));
}
function Kf(e) {
  return e[fl] || null;
}
var xg = [], Di = -1;
function _o(e) {
  return { current: e };
}
function Ve(e) {
  0 > Di || (e.current = xg[Di], xg[Di] = null, Di--);
}
function Ue(e, t) {
  Di++, xg[Di] = e.current, e.current = t;
}
var So = {}, Ft = _o(So), rn = _o(!1), ii = So;
function ws(e, t) {
  var n = e.type.contextTypes;
  if (!n) return So;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, i;
  for (i in n) o[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function on(e) {
  return e = e.childContextTypes, e != null;
}
function qc() {
  Ve(rn), Ve(Ft);
}
function H1(e, t, n) {
  if (Ft.current !== So) throw Error(G(168));
  Ue(Ft, t), Ue(rn, n);
}
function gT(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(G(108, o3(e) || "Unknown", o));
  return tt({}, n, r);
}
function Qc(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || So, ii = Ft.current, Ue(Ft, e), Ue(rn, rn.current), !0;
}
function W1(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(G(169));
  n ? (e = gT(e, t, ii), r.__reactInternalMemoizedMergedChildContext = e, Ve(rn), Ve(Ft), Ue(Ft, e)) : Ve(rn), Ue(rn, n);
}
var Pr = null, Xf = !1, th = !1;
function mT(e) {
  Pr === null ? Pr = [e] : Pr.push(e);
}
function wB(e) {
  Xf = !0, mT(e);
}
function Oo() {
  if (!th && Pr !== null) {
    th = !0;
    var e = 0, t = ze;
    try {
      var n = Pr;
      for (ze = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Pr = null, Xf = !1;
    } catch (o) {
      throw Pr !== null && (Pr = Pr.slice(e + 1)), UI(ey, Oo), o;
    } finally {
      ze = t, th = !1;
    }
  }
  return null;
}
var zi = [], Fi = 0, Zc = null, Jc = 0, Pn = [], Mn = 0, si = null, $r = 1, Lr = "";
function Ho(e, t) {
  zi[Fi++] = Jc, zi[Fi++] = Zc, Zc = e, Jc = t;
}
function yT(e, t, n) {
  Pn[Mn++] = $r, Pn[Mn++] = Lr, Pn[Mn++] = si, si = e;
  var r = $r;
  e = Lr;
  var o = 32 - qn(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - qn(t) + o;
  if (30 < i) {
    var s = o - o % 5;
    i = (r & (1 << s) - 1).toString(32), r >>= s, o -= s, $r = 1 << 32 - qn(t) + o | n << o | r, Lr = i + e;
  } else $r = 1 << i | n << o | r, Lr = e;
}
function uy(e) {
  e.return !== null && (Ho(e, 1), yT(e, 1, 0));
}
function cy(e) {
  for (; e === Zc; ) Zc = zi[--Fi], zi[Fi] = null, Jc = zi[--Fi], zi[Fi] = null;
  for (; e === si; ) si = Pn[--Mn], Pn[Mn] = null, Lr = Pn[--Mn], Pn[Mn] = null, $r = Pn[--Mn], Pn[Mn] = null;
}
var yn = null, gn = null, qe = !1, Kn = null;
function vT(e, t) {
  var n = Rn(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function G1(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, yn = e, gn = po(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, yn = e, gn = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = si !== null ? { id: $r, overflow: Lr } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Rn(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, yn = e, gn = null, !0) : !1;
    default:
      return !1;
  }
}
function Cg(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function wg(e) {
  if (qe) {
    var t = gn;
    if (t) {
      var n = t;
      if (!G1(e, t)) {
        if (Cg(e)) throw Error(G(418));
        t = po(n.nextSibling);
        var r = yn;
        t && G1(e, t) ? vT(r, n) : (e.flags = e.flags & -4097 | 2, qe = !1, yn = e);
      }
    } else {
      if (Cg(e)) throw Error(G(418));
      e.flags = e.flags & -4097 | 2, qe = !1, yn = e;
    }
  }
}
function V1(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  yn = e;
}
function Eu(e) {
  if (e !== yn) return !1;
  if (!qe) return V1(e), qe = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !mg(e.type, e.memoizedProps)), t && (t = gn)) {
    if (Cg(e)) throw xT(), Error(G(418));
    for (; t; ) vT(e, t), t = po(t.nextSibling);
  }
  if (V1(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(G(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              gn = po(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      gn = null;
    }
  } else gn = yn ? po(e.stateNode.nextSibling) : null;
  return !0;
}
function xT() {
  for (var e = gn; e; ) e = po(e.nextSibling);
}
function Ss() {
  gn = yn = null, qe = !1;
}
function dy(e) {
  Kn === null ? Kn = [e] : Kn.push(e);
}
var SB = qr.ReactCurrentBatchConfig;
function ua(e, t, n) {
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
function Au(e, t) {
  throw e = Object.prototype.toString.call(t), Error(G(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function j1(e) {
  var t = e._init;
  return t(e._payload);
}
function CT(e) {
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
    return y = yo(y, m), y.index = 0, y.sibling = null, y;
  }
  function i(y, m, v) {
    return y.index = v, e ? (v = y.alternate, v !== null ? (v = v.index, v < m ? (y.flags |= 2, m) : v) : (y.flags |= 2, m)) : (y.flags |= 1048576, m);
  }
  function s(y) {
    return e && y.alternate === null && (y.flags |= 2), y;
  }
  function a(y, m, v, C) {
    return m === null || m.tag !== 6 ? (m = lh(v, y.mode, C), m.return = y, m) : (m = o(m, v), m.return = y, m);
  }
  function l(y, m, v, C) {
    var b = v.type;
    return b === _i ? c(y, m, v.props.children, C, v.key) : m !== null && (m.elementType === b || typeof b == "object" && b !== null && b.$$typeof === Jr && j1(b) === m.type) ? (C = o(m, v.props), C.ref = ua(y, m, v), C.return = y, C) : (C = ic(v.type, v.key, v.props, null, y.mode, C), C.ref = ua(y, m, v), C.return = y, C);
  }
  function u(y, m, v, C) {
    return m === null || m.tag !== 4 || m.stateNode.containerInfo !== v.containerInfo || m.stateNode.implementation !== v.implementation ? (m = uh(v, y.mode, C), m.return = y, m) : (m = o(m, v.children || []), m.return = y, m);
  }
  function c(y, m, v, C, b) {
    return m === null || m.tag !== 7 ? (m = ni(v, y.mode, C, b), m.return = y, m) : (m = o(m, v), m.return = y, m);
  }
  function d(y, m, v) {
    if (typeof m == "string" && m !== "" || typeof m == "number") return m = lh("" + m, y.mode, v), m.return = y, m;
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case xu:
          return v = ic(m.type, m.key, m.props, null, y.mode, v), v.ref = ua(y, null, m), v.return = y, v;
        case Ri:
          return m = uh(m, y.mode, v), m.return = y, m;
        case Jr:
          var C = m._init;
          return d(y, C(m._payload), v);
      }
      if (wa(m) || oa(m)) return m = ni(m, y.mode, v, null), m.return = y, m;
      Au(y, m);
    }
    return null;
  }
  function p(y, m, v, C) {
    var b = m !== null ? m.key : null;
    if (typeof v == "string" && v !== "" || typeof v == "number") return b !== null ? null : a(y, m, "" + v, C);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case xu:
          return v.key === b ? l(y, m, v, C) : null;
        case Ri:
          return v.key === b ? u(y, m, v, C) : null;
        case Jr:
          return b = v._init, p(
            y,
            m,
            b(v._payload),
            C
          );
      }
      if (wa(v) || oa(v)) return b !== null ? null : c(y, m, v, C, null);
      Au(y, v);
    }
    return null;
  }
  function f(y, m, v, C, b) {
    if (typeof C == "string" && C !== "" || typeof C == "number") return y = y.get(v) || null, a(m, y, "" + C, b);
    if (typeof C == "object" && C !== null) {
      switch (C.$$typeof) {
        case xu:
          return y = y.get(C.key === null ? v : C.key) || null, l(m, y, C, b);
        case Ri:
          return y = y.get(C.key === null ? v : C.key) || null, u(m, y, C, b);
        case Jr:
          var S = C._init;
          return f(y, m, v, S(C._payload), b);
      }
      if (wa(C) || oa(C)) return y = y.get(v) || null, c(m, y, C, b, null);
      Au(m, C);
    }
    return null;
  }
  function h(y, m, v, C) {
    for (var b = null, S = null, k = m, I = m = 0, $ = null; k !== null && I < v.length; I++) {
      k.index > I ? ($ = k, k = null) : $ = k.sibling;
      var O = p(y, k, v[I], C);
      if (O === null) {
        k === null && (k = $);
        break;
      }
      e && k && O.alternate === null && t(y, k), m = i(O, m, I), S === null ? b = O : S.sibling = O, S = O, k = $;
    }
    if (I === v.length) return n(y, k), qe && Ho(y, I), b;
    if (k === null) {
      for (; I < v.length; I++) k = d(y, v[I], C), k !== null && (m = i(k, m, I), S === null ? b = k : S.sibling = k, S = k);
      return qe && Ho(y, I), b;
    }
    for (k = r(y, k); I < v.length; I++) $ = f(k, y, I, v[I], C), $ !== null && (e && $.alternate !== null && k.delete($.key === null ? I : $.key), m = i($, m, I), S === null ? b = $ : S.sibling = $, S = $);
    return e && k.forEach(function(R) {
      return t(y, R);
    }), qe && Ho(y, I), b;
  }
  function g(y, m, v, C) {
    var b = oa(v);
    if (typeof b != "function") throw Error(G(150));
    if (v = b.call(v), v == null) throw Error(G(151));
    for (var S = b = null, k = m, I = m = 0, $ = null, O = v.next(); k !== null && !O.done; I++, O = v.next()) {
      k.index > I ? ($ = k, k = null) : $ = k.sibling;
      var R = p(y, k, O.value, C);
      if (R === null) {
        k === null && (k = $);
        break;
      }
      e && k && R.alternate === null && t(y, k), m = i(R, m, I), S === null ? b = R : S.sibling = R, S = R, k = $;
    }
    if (O.done) return n(
      y,
      k
    ), qe && Ho(y, I), b;
    if (k === null) {
      for (; !O.done; I++, O = v.next()) O = d(y, O.value, C), O !== null && (m = i(O, m, I), S === null ? b = O : S.sibling = O, S = O);
      return qe && Ho(y, I), b;
    }
    for (k = r(y, k); !O.done; I++, O = v.next()) O = f(k, y, I, O.value, C), O !== null && (e && O.alternate !== null && k.delete(O.key === null ? I : O.key), m = i(O, m, I), S === null ? b = O : S.sibling = O, S = O);
    return e && k.forEach(function(w) {
      return t(y, w);
    }), qe && Ho(y, I), b;
  }
  function x(y, m, v, C) {
    if (typeof v == "object" && v !== null && v.type === _i && v.key === null && (v = v.props.children), typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case xu:
          e: {
            for (var b = v.key, S = m; S !== null; ) {
              if (S.key === b) {
                if (b = v.type, b === _i) {
                  if (S.tag === 7) {
                    n(y, S.sibling), m = o(S, v.props.children), m.return = y, y = m;
                    break e;
                  }
                } else if (S.elementType === b || typeof b == "object" && b !== null && b.$$typeof === Jr && j1(b) === S.type) {
                  n(y, S.sibling), m = o(S, v.props), m.ref = ua(y, S, v), m.return = y, y = m;
                  break e;
                }
                n(y, S);
                break;
              } else t(y, S);
              S = S.sibling;
            }
            v.type === _i ? (m = ni(v.props.children, y.mode, C, v.key), m.return = y, y = m) : (C = ic(v.type, v.key, v.props, null, y.mode, C), C.ref = ua(y, m, v), C.return = y, y = C);
          }
          return s(y);
        case Ri:
          e: {
            for (S = v.key; m !== null; ) {
              if (m.key === S) if (m.tag === 4 && m.stateNode.containerInfo === v.containerInfo && m.stateNode.implementation === v.implementation) {
                n(y, m.sibling), m = o(m, v.children || []), m.return = y, y = m;
                break e;
              } else {
                n(y, m);
                break;
              }
              else t(y, m);
              m = m.sibling;
            }
            m = uh(v, y.mode, C), m.return = y, y = m;
          }
          return s(y);
        case Jr:
          return S = v._init, x(y, m, S(v._payload), C);
      }
      if (wa(v)) return h(y, m, v, C);
      if (oa(v)) return g(y, m, v, C);
      Au(y, v);
    }
    return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v, m !== null && m.tag === 6 ? (n(y, m.sibling), m = o(m, v), m.return = y, y = m) : (n(y, m), m = lh(v, y.mode, C), m.return = y, y = m), s(y)) : n(y, m);
  }
  return x;
}
var bs = CT(!0), wT = CT(!1), ed = _o(null), td = null, Bi = null, fy = null;
function py() {
  fy = Bi = td = null;
}
function hy(e) {
  var t = ed.current;
  Ve(ed), e._currentValue = t;
}
function Sg(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function es(e, t) {
  td = e, fy = Bi = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (nn = !0), e.firstContext = null);
}
function Ln(e) {
  var t = e._currentValue;
  if (fy !== e) if (e = { context: e, memoizedValue: t, next: null }, Bi === null) {
    if (td === null) throw Error(G(308));
    Bi = e, td.dependencies = { lanes: 0, firstContext: e };
  } else Bi = Bi.next = e;
  return t;
}
var Xo = null;
function gy(e) {
  Xo === null ? Xo = [e] : Xo.push(e);
}
function ST(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, gy(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Vr(e, r);
}
function Vr(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var eo = !1;
function my(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function bT(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Dr(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function ho(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, Ee & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, Vr(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, gy(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Vr(e, n);
}
function Ju(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, ty(e, n);
  }
}
function Y1(e, t) {
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
function nd(e, t, n, r) {
  var o = e.updateQueue;
  eo = !1;
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
              d = tt({}, d, p);
              break e;
            case 2:
              eo = !0;
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
    li |= s, e.lanes = s, e.memoizedState = d;
  }
}
function K1(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], o = r.callback;
    if (o !== null) {
      if (r.callback = null, r = n, typeof o != "function") throw Error(G(191, o));
      o.call(r);
    }
  }
}
var Jl = {}, gr = _o(Jl), pl = _o(Jl), hl = _o(Jl);
function qo(e) {
  if (e === Jl) throw Error(G(174));
  return e;
}
function yy(e, t) {
  switch (Ue(hl, t), Ue(pl, e), Ue(gr, Jl), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ng(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = ng(t, e);
  }
  Ve(gr), Ue(gr, t);
}
function ks() {
  Ve(gr), Ve(pl), Ve(hl);
}
function kT(e) {
  qo(hl.current);
  var t = qo(gr.current), n = ng(t, e.type);
  t !== n && (Ue(pl, e), Ue(gr, n));
}
function vy(e) {
  pl.current === e && (Ve(gr), Ve(pl));
}
var Je = _o(0);
function rd(e) {
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
var nh = [];
function xy() {
  for (var e = 0; e < nh.length; e++) nh[e]._workInProgressVersionPrimary = null;
  nh.length = 0;
}
var ec = qr.ReactCurrentDispatcher, rh = qr.ReactCurrentBatchConfig, ai = 0, et = null, mt = null, Ct = null, od = !1, Ra = !1, gl = 0, bB = 0;
function Lt() {
  throw Error(G(321));
}
function Cy(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Jn(e[n], t[n])) return !1;
  return !0;
}
function wy(e, t, n, r, o, i) {
  if (ai = i, et = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ec.current = e === null || e.memoizedState === null ? PB : MB, e = n(r, o), Ra) {
    i = 0;
    do {
      if (Ra = !1, gl = 0, 25 <= i) throw Error(G(301));
      i += 1, Ct = mt = null, t.updateQueue = null, ec.current = EB, e = n(r, o);
    } while (Ra);
  }
  if (ec.current = id, t = mt !== null && mt.next !== null, ai = 0, Ct = mt = et = null, od = !1, t) throw Error(G(300));
  return e;
}
function Sy() {
  var e = gl !== 0;
  return gl = 0, e;
}
function ar() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Ct === null ? et.memoizedState = Ct = e : Ct = Ct.next = e, Ct;
}
function Nn() {
  if (mt === null) {
    var e = et.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = mt.next;
  var t = Ct === null ? et.memoizedState : Ct.next;
  if (t !== null) Ct = t, mt = e;
  else {
    if (e === null) throw Error(G(310));
    mt = e, e = { memoizedState: mt.memoizedState, baseState: mt.baseState, baseQueue: mt.baseQueue, queue: mt.queue, next: null }, Ct === null ? et.memoizedState = Ct = e : Ct = Ct.next = e;
  }
  return Ct;
}
function ml(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function oh(e) {
  var t = Nn(), n = t.queue;
  if (n === null) throw Error(G(311));
  n.lastRenderedReducer = e;
  var r = mt, o = r.baseQueue, i = n.pending;
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
      if ((ai & c) === c) l !== null && (l = l.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        l === null ? (a = l = d, s = r) : l = l.next = d, et.lanes |= c, li |= c;
      }
      u = u.next;
    } while (u !== null && u !== i);
    l === null ? s = r : l.next = a, Jn(r, t.memoizedState) || (nn = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = l, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      i = o.lane, et.lanes |= i, li |= i, o = o.next;
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ih(e) {
  var t = Nn(), n = t.queue;
  if (n === null) throw Error(G(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = o = o.next;
    do
      i = e(i, s.action), s = s.next;
    while (s !== o);
    Jn(i, t.memoizedState) || (nn = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function IT() {
}
function TT(e, t) {
  var n = et, r = Nn(), o = t(), i = !Jn(r.memoizedState, o);
  if (i && (r.memoizedState = o, nn = !0), r = r.queue, by(ET.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || Ct !== null && Ct.memoizedState.tag & 1) {
    if (n.flags |= 2048, yl(9, MT.bind(null, n, r, o, t), void 0, null), wt === null) throw Error(G(349));
    ai & 30 || PT(n, t, o);
  }
  return o;
}
function PT(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = et.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, et.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function MT(e, t, n, r) {
  t.value = n, t.getSnapshot = r, AT(t) && RT(e);
}
function ET(e, t, n) {
  return n(function() {
    AT(t) && RT(e);
  });
}
function AT(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Jn(e, n);
  } catch {
    return !0;
  }
}
function RT(e) {
  var t = Vr(e, 1);
  t !== null && Qn(t, e, 1, -1);
}
function X1(e) {
  var t = ar();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ml, lastRenderedState: e }, t.queue = e, e = e.dispatch = TB.bind(null, et, e), [t.memoizedState, e];
}
function yl(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = et.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, et.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function _T() {
  return Nn().memoizedState;
}
function tc(e, t, n, r) {
  var o = ar();
  et.flags |= e, o.memoizedState = yl(1 | t, n, void 0, r === void 0 ? null : r);
}
function qf(e, t, n, r) {
  var o = Nn();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (mt !== null) {
    var s = mt.memoizedState;
    if (i = s.destroy, r !== null && Cy(r, s.deps)) {
      o.memoizedState = yl(t, n, i, r);
      return;
    }
  }
  et.flags |= e, o.memoizedState = yl(1 | t, n, i, r);
}
function q1(e, t) {
  return tc(8390656, 8, e, t);
}
function by(e, t) {
  return qf(2048, 8, e, t);
}
function OT(e, t) {
  return qf(4, 2, e, t);
}
function $T(e, t) {
  return qf(4, 4, e, t);
}
function LT(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function NT(e, t, n) {
  return n = n != null ? n.concat([e]) : null, qf(4, 4, LT.bind(null, t, e), n);
}
function ky() {
}
function DT(e, t) {
  var n = Nn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Cy(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function zT(e, t) {
  var n = Nn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Cy(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function FT(e, t, n) {
  return ai & 21 ? (Jn(n, t) || (n = GI(), et.lanes |= n, li |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, nn = !0), e.memoizedState = n);
}
function kB(e, t) {
  var n = ze;
  ze = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = rh.transition;
  rh.transition = {};
  try {
    e(!1), t();
  } finally {
    ze = n, rh.transition = r;
  }
}
function BT() {
  return Nn().memoizedState;
}
function IB(e, t, n) {
  var r = mo(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, UT(e)) HT(t, n);
  else if (n = ST(e, t, n, r), n !== null) {
    var o = qt();
    Qn(n, e, r, o), WT(n, t, r);
  }
}
function TB(e, t, n) {
  var r = mo(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (UT(e)) HT(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var s = t.lastRenderedState, a = i(s, n);
      if (o.hasEagerState = !0, o.eagerState = a, Jn(a, s)) {
        var l = t.interleaved;
        l === null ? (o.next = o, gy(t)) : (o.next = l.next, l.next = o), t.interleaved = o;
        return;
      }
    } catch {
    } finally {
    }
    n = ST(e, t, o, r), n !== null && (o = qt(), Qn(n, e, r, o), WT(n, t, r));
  }
}
function UT(e) {
  var t = e.alternate;
  return e === et || t !== null && t === et;
}
function HT(e, t) {
  Ra = od = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function WT(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, ty(e, n);
  }
}
var id = { readContext: Ln, useCallback: Lt, useContext: Lt, useEffect: Lt, useImperativeHandle: Lt, useInsertionEffect: Lt, useLayoutEffect: Lt, useMemo: Lt, useReducer: Lt, useRef: Lt, useState: Lt, useDebugValue: Lt, useDeferredValue: Lt, useTransition: Lt, useMutableSource: Lt, useSyncExternalStore: Lt, useId: Lt, unstable_isNewReconciler: !1 }, PB = { readContext: Ln, useCallback: function(e, t) {
  return ar().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Ln, useEffect: q1, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, tc(
    4194308,
    4,
    LT.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return tc(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return tc(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = ar();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = ar();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = IB.bind(null, et, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = ar();
  return e = { current: e }, t.memoizedState = e;
}, useState: X1, useDebugValue: ky, useDeferredValue: function(e) {
  return ar().memoizedState = e;
}, useTransition: function() {
  var e = X1(!1), t = e[0];
  return e = kB.bind(null, e[1]), ar().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = et, o = ar();
  if (qe) {
    if (n === void 0) throw Error(G(407));
    n = n();
  } else {
    if (n = t(), wt === null) throw Error(G(349));
    ai & 30 || PT(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, q1(ET.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, yl(9, MT.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = ar(), t = wt.identifierPrefix;
  if (qe) {
    var n = Lr, r = $r;
    n = (r & ~(1 << 32 - qn(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = gl++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = bB++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, MB = {
  readContext: Ln,
  useCallback: DT,
  useContext: Ln,
  useEffect: by,
  useImperativeHandle: NT,
  useInsertionEffect: OT,
  useLayoutEffect: $T,
  useMemo: zT,
  useReducer: oh,
  useRef: _T,
  useState: function() {
    return oh(ml);
  },
  useDebugValue: ky,
  useDeferredValue: function(e) {
    var t = Nn();
    return FT(t, mt.memoizedState, e);
  },
  useTransition: function() {
    var e = oh(ml)[0], t = Nn().memoizedState;
    return [e, t];
  },
  useMutableSource: IT,
  useSyncExternalStore: TT,
  useId: BT,
  unstable_isNewReconciler: !1
}, EB = { readContext: Ln, useCallback: DT, useContext: Ln, useEffect: by, useImperativeHandle: NT, useInsertionEffect: OT, useLayoutEffect: $T, useMemo: zT, useReducer: ih, useRef: _T, useState: function() {
  return ih(ml);
}, useDebugValue: ky, useDeferredValue: function(e) {
  var t = Nn();
  return mt === null ? t.memoizedState = e : FT(t, mt.memoizedState, e);
}, useTransition: function() {
  var e = ih(ml)[0], t = Nn().memoizedState;
  return [e, t];
}, useMutableSource: IT, useSyncExternalStore: TT, useId: BT, unstable_isNewReconciler: !1 };
function jn(e, t) {
  if (e && e.defaultProps) {
    t = tt({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function bg(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : tt({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Qf = { isMounted: function(e) {
  return (e = e._reactInternals) ? mi(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = qt(), o = mo(e), i = Dr(r, o);
  i.payload = t, n != null && (i.callback = n), t = ho(e, i, o), t !== null && (Qn(t, e, o, r), Ju(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = qt(), o = mo(e), i = Dr(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = ho(e, i, o), t !== null && (Qn(t, e, o, r), Ju(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = qt(), r = mo(e), o = Dr(n, r);
  o.tag = 2, t != null && (o.callback = t), t = ho(e, o, r), t !== null && (Qn(t, e, r, n), Ju(t, e, r));
} };
function Q1(e, t, n, r, o, i, s) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !ul(n, r) || !ul(o, i) : !0;
}
function GT(e, t, n) {
  var r = !1, o = So, i = t.contextType;
  return typeof i == "object" && i !== null ? i = Ln(i) : (o = on(t) ? ii : Ft.current, r = t.contextTypes, i = (r = r != null) ? ws(e, o) : So), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Qf, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function Z1(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Qf.enqueueReplaceState(t, t.state, null);
}
function kg(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, my(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = Ln(i) : (i = on(t) ? ii : Ft.current, o.context = ws(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (bg(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Qf.enqueueReplaceState(o, o.state, null), nd(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Is(e, t) {
  try {
    var n = "", r = t;
    do
      n += r3(r), r = r.return;
    while (r);
    var o = n;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function sh(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ig(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var AB = typeof WeakMap == "function" ? WeakMap : Map;
function VT(e, t, n) {
  n = Dr(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    ad || (ad = !0, Lg = r), Ig(e, t);
  }, n;
}
function jT(e, t, n) {
  n = Dr(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      Ig(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    Ig(e, t), typeof r != "function" && (go === null ? go = /* @__PURE__ */ new Set([this]) : go.add(this));
    var s = t.stack;
    this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
  }), n;
}
function J1(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new AB();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = GB.bind(null, e, t, n), t.then(e, e));
}
function eC(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function tC(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Dr(-1, 1), t.tag = 2, ho(n, t, 1))), n.lanes |= 1), e);
}
var RB = qr.ReactCurrentOwner, nn = !1;
function Yt(e, t, n, r) {
  t.child = e === null ? wT(t, null, n, r) : bs(t, e.child, n, r);
}
function nC(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return es(t, o), r = wy(e, t, n, r, i, o), n = Sy(), e !== null && !nn ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, jr(e, t, o)) : (qe && n && uy(t), t.flags |= 1, Yt(e, t, r, o), t.child);
}
function rC(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !_y(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, YT(e, t, i, r, o)) : (e = ic(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & o)) {
    var s = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : ul, n(s, r) && e.ref === t.ref) return jr(e, t, o);
  }
  return t.flags |= 1, e = yo(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function YT(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (ul(i, r) && e.ref === t.ref) if (nn = !1, t.pendingProps = r = i, (e.lanes & o) !== 0) e.flags & 131072 && (nn = !0);
    else return t.lanes = e.lanes, jr(e, t, o);
  }
  return Tg(e, t, n, r, o);
}
function KT(e, t, n) {
  var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ue(Hi, pn), pn |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Ue(Hi, pn), pn |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, Ue(Hi, pn), pn |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, Ue(Hi, pn), pn |= r;
  return Yt(e, t, o, n), t.child;
}
function XT(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Tg(e, t, n, r, o) {
  var i = on(n) ? ii : Ft.current;
  return i = ws(t, i), es(t, o), n = wy(e, t, n, r, i, o), r = Sy(), e !== null && !nn ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, jr(e, t, o)) : (qe && r && uy(t), t.flags |= 1, Yt(e, t, n, o), t.child);
}
function oC(e, t, n, r, o) {
  if (on(n)) {
    var i = !0;
    Qc(t);
  } else i = !1;
  if (es(t, o), t.stateNode === null) nc(e, t), GT(t, n, r), kg(t, n, r, o), r = !0;
  else if (e === null) {
    var s = t.stateNode, a = t.memoizedProps;
    s.props = a;
    var l = s.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = Ln(u) : (u = on(n) ? ii : Ft.current, u = ws(t, u));
    var c = n.getDerivedStateFromProps, d = typeof c == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    d || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== r || l !== u) && Z1(t, s, r, u), eo = !1;
    var p = t.memoizedState;
    s.state = p, nd(t, r, s, o), l = t.memoizedState, a !== r || p !== l || rn.current || eo ? (typeof c == "function" && (bg(t, n, c, r), l = t.memoizedState), (a = eo || Q1(t, n, a, r, p, l, u)) ? (d || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), s.props = r, s.state = l, s.context = u, r = a) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    s = t.stateNode, bT(e, t), a = t.memoizedProps, u = t.type === t.elementType ? a : jn(t.type, a), s.props = u, d = t.pendingProps, p = s.context, l = n.contextType, typeof l == "object" && l !== null ? l = Ln(l) : (l = on(n) ? ii : Ft.current, l = ws(t, l));
    var f = n.getDerivedStateFromProps;
    (c = typeof f == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== d || p !== l) && Z1(t, s, r, l), eo = !1, p = t.memoizedState, s.state = p, nd(t, r, s, o);
    var h = t.memoizedState;
    a !== d || p !== h || rn.current || eo ? (typeof f == "function" && (bg(t, n, f, r), h = t.memoizedState), (u = eo || Q1(t, n, u, r, p, h, l) || !1) ? (c || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, h, l), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, h, l)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = h), s.props = r, s.state = h, s.context = l, r = u) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Pg(e, t, n, r, i, o);
}
function Pg(e, t, n, r, o, i) {
  XT(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && W1(t, n, !1), jr(e, t, i);
  r = t.stateNode, RB.current = t;
  var a = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && s ? (t.child = bs(t, e.child, null, i), t.child = bs(t, null, a, i)) : Yt(e, t, a, i), t.memoizedState = r.state, o && W1(t, n, !0), t.child;
}
function qT(e) {
  var t = e.stateNode;
  t.pendingContext ? H1(e, t.pendingContext, t.pendingContext !== t.context) : t.context && H1(e, t.context, !1), yy(e, t.containerInfo);
}
function iC(e, t, n, r, o) {
  return Ss(), dy(o), t.flags |= 256, Yt(e, t, n, r), t.child;
}
var Mg = { dehydrated: null, treeContext: null, retryLane: 0 };
function Eg(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function QT(e, t, n) {
  var r = t.pendingProps, o = Je.current, i = !1, s = (t.flags & 128) !== 0, a;
  if ((a = s) || (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), a ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), Ue(Je, o & 1), e === null)
    return wg(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, s = { mode: "hidden", children: s }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = s) : i = ep(s, r, 0, null), e = ni(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Eg(n), t.memoizedState = Mg, e) : Iy(t, s));
  if (o = e.memoizedState, o !== null && (a = o.dehydrated, a !== null)) return _B(e, t, s, r, a, o, n);
  if (i) {
    i = r.fallback, s = t.mode, o = e.child, a = o.sibling;
    var l = { mode: "hidden", children: r.children };
    return !(s & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = yo(o, l), r.subtreeFlags = o.subtreeFlags & 14680064), a !== null ? i = yo(a, i) : (i = ni(i, s, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, s = e.child.memoizedState, s = s === null ? Eg(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, i.memoizedState = s, i.childLanes = e.childLanes & ~n, t.memoizedState = Mg, r;
  }
  return i = e.child, e = i.sibling, r = yo(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Iy(e, t) {
  return t = ep({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Ru(e, t, n, r) {
  return r !== null && dy(r), bs(t, e.child, null, n), e = Iy(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function _B(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = sh(Error(G(422))), Ru(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = ep({ mode: "visible", children: r.children }, o, 0, null), i = ni(i, o, s, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && bs(t, e.child, null, s), t.child.memoizedState = Eg(s), t.memoizedState = Mg, i);
  if (!(t.mode & 1)) return Ru(e, t, s, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r) var a = r.dgst;
    return r = a, i = Error(G(419)), r = sh(i, r, void 0), Ru(e, t, s, r);
  }
  if (a = (s & e.childLanes) !== 0, nn || a) {
    if (r = wt, r !== null) {
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
      o = o & (r.suspendedLanes | s) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, Vr(e, o), Qn(r, e, o, -1));
    }
    return Ry(), r = sh(Error(G(421))), Ru(e, t, s, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = VB.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, gn = po(o.nextSibling), yn = t, qe = !0, Kn = null, e !== null && (Pn[Mn++] = $r, Pn[Mn++] = Lr, Pn[Mn++] = si, $r = e.id, Lr = e.overflow, si = t), t = Iy(t, r.children), t.flags |= 4096, t);
}
function sC(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Sg(e.return, t, n);
}
function ah(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function ZT(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (Yt(e, t, r.children, n), r = Je.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && sC(e, n, t);
      else if (e.tag === 19) sC(e, n, t);
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
  if (Ue(Je, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (o) {
    case "forwards":
      for (n = t.child, o = null; n !== null; ) e = n.alternate, e !== null && rd(e) === null && (o = n), n = n.sibling;
      n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), ah(t, !1, o, n, i);
      break;
    case "backwards":
      for (n = null, o = t.child, t.child = null; o !== null; ) {
        if (e = o.alternate, e !== null && rd(e) === null) {
          t.child = o;
          break;
        }
        e = o.sibling, o.sibling = n, n = o, o = e;
      }
      ah(t, !0, n, null, i);
      break;
    case "together":
      ah(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function nc(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function jr(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), li |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(G(153));
  if (t.child !== null) {
    for (e = t.child, n = yo(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = yo(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function OB(e, t, n) {
  switch (t.tag) {
    case 3:
      qT(t), Ss();
      break;
    case 5:
      kT(t);
      break;
    case 1:
      on(t.type) && Qc(t);
      break;
    case 4:
      yy(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      Ue(ed, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (Ue(Je, Je.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? QT(e, t, n) : (Ue(Je, Je.current & 1), e = jr(e, t, n), e !== null ? e.sibling : null);
      Ue(Je, Je.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return ZT(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), Ue(Je, Je.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, KT(e, t, n);
  }
  return jr(e, t, n);
}
var JT, Ag, eP, tP;
JT = function(e, t) {
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
Ag = function() {
};
eP = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, qo(gr.current);
    var i = null;
    switch (n) {
      case "input":
        o = Zh(e, o), r = Zh(e, r), i = [];
        break;
      case "select":
        o = tt({}, o, { value: void 0 }), r = tt({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = tg(e, o), r = tg(e, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Xc);
    }
    rg(n, r);
    var s;
    n = null;
    for (u in o) if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null) if (u === "style") {
      var a = o[u];
      for (s in a) a.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
    } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (nl.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (a = o != null ? o[u] : void 0, r.hasOwnProperty(u) && l !== a && (l != null || a != null)) if (u === "style") if (a) {
        for (s in a) !a.hasOwnProperty(s) || l && l.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
        for (s in l) l.hasOwnProperty(s) && a[s] !== l[s] && (n || (n = {}), n[s] = l[s]);
      } else n || (i || (i = []), i.push(
        u,
        n
      )), n = l;
      else u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, a = a ? a.__html : void 0, l != null && a !== l && (i = i || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (i = i || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (nl.hasOwnProperty(u) ? (l != null && u === "onScroll" && Ge("scroll", e), i || a === l || (i = [])) : (i = i || []).push(u, l));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
tP = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function ca(e, t) {
  if (!qe) switch (e.tailMode) {
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
function Nt(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
  else for (o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function $B(e, t, n) {
  var r = t.pendingProps;
  switch (cy(t), t.tag) {
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
      return Nt(t), null;
    case 1:
      return on(t.type) && qc(), Nt(t), null;
    case 3:
      return r = t.stateNode, ks(), Ve(rn), Ve(Ft), xy(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Eu(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Kn !== null && (zg(Kn), Kn = null))), Ag(e, t), Nt(t), null;
    case 5:
      vy(t);
      var o = qo(hl.current);
      if (n = t.type, e !== null && t.stateNode != null) eP(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(G(166));
          return Nt(t), null;
        }
        if (e = qo(gr.current), Eu(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[cr] = t, r[fl] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              Ge("cancel", r), Ge("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Ge("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < ba.length; o++) Ge(ba[o], r);
              break;
            case "source":
              Ge("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Ge(
                "error",
                r
              ), Ge("load", r);
              break;
            case "details":
              Ge("toggle", r);
              break;
            case "input":
              g1(r, i), Ge("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, Ge("invalid", r);
              break;
            case "textarea":
              y1(r, i), Ge("invalid", r);
          }
          rg(n, i), o = null;
          for (var s in i) if (i.hasOwnProperty(s)) {
            var a = i[s];
            s === "children" ? typeof a == "string" ? r.textContent !== a && (i.suppressHydrationWarning !== !0 && Mu(r.textContent, a, e), o = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (i.suppressHydrationWarning !== !0 && Mu(
              r.textContent,
              a,
              e
            ), o = ["children", "" + a]) : nl.hasOwnProperty(s) && a != null && s === "onScroll" && Ge("scroll", r);
          }
          switch (n) {
            case "input":
              Cu(r), m1(r, i, !0);
              break;
            case "textarea":
              Cu(r), v1(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Xc);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          s = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = EI(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[cr] = t, e[fl] = r, JT(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (s = og(n, r), n) {
              case "dialog":
                Ge("cancel", e), Ge("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                Ge("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < ba.length; o++) Ge(ba[o], e);
                o = r;
                break;
              case "source":
                Ge("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                Ge(
                  "error",
                  e
                ), Ge("load", e), o = r;
                break;
              case "details":
                Ge("toggle", e), o = r;
                break;
              case "input":
                g1(e, r), o = Zh(e, r), Ge("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = tt({}, r, { value: void 0 }), Ge("invalid", e);
                break;
              case "textarea":
                y1(e, r), o = tg(e, r), Ge("invalid", e);
                break;
              default:
                o = r;
            }
            rg(n, o), a = o;
            for (i in a) if (a.hasOwnProperty(i)) {
              var l = a[i];
              i === "style" ? _I(e, l) : i === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && AI(e, l)) : i === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && rl(e, l) : typeof l == "number" && rl(e, "" + l) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (nl.hasOwnProperty(i) ? l != null && i === "onScroll" && Ge("scroll", e) : l != null && X0(e, i, l, s));
            }
            switch (n) {
              case "input":
                Cu(e), m1(e, r, !1);
                break;
              case "textarea":
                Cu(e), v1(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + wo(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? qi(e, !!r.multiple, i, !1) : r.defaultValue != null && qi(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Xc);
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
      return Nt(t), null;
    case 6:
      if (e && t.stateNode != null) tP(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(G(166));
        if (n = qo(hl.current), qo(gr.current), Eu(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[cr] = t, (i = r.nodeValue !== n) && (e = yn, e !== null)) switch (e.tag) {
            case 3:
              Mu(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Mu(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[cr] = t, t.stateNode = r;
      }
      return Nt(t), null;
    case 13:
      if (Ve(Je), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (qe && gn !== null && t.mode & 1 && !(t.flags & 128)) xT(), Ss(), t.flags |= 98560, i = !1;
        else if (i = Eu(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(G(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(G(317));
            i[cr] = t;
          } else Ss(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Nt(t), i = !1;
        } else Kn !== null && (zg(Kn), Kn = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || Je.current & 1 ? yt === 0 && (yt = 3) : Ry())), t.updateQueue !== null && (t.flags |= 4), Nt(t), null);
    case 4:
      return ks(), Ag(e, t), e === null && cl(t.stateNode.containerInfo), Nt(t), null;
    case 10:
      return hy(t.type._context), Nt(t), null;
    case 17:
      return on(t.type) && qc(), Nt(t), null;
    case 19:
      if (Ve(Je), i = t.memoizedState, i === null) return Nt(t), null;
      if (r = (t.flags & 128) !== 0, s = i.rendering, s === null) if (r) ca(i, !1);
      else {
        if (yt !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (s = rd(e), s !== null) {
            for (t.flags |= 128, ca(i, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, s = i.alternate, s === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = s.childLanes, i.lanes = s.lanes, i.child = s.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = s.memoizedProps, i.memoizedState = s.memoizedState, i.updateQueue = s.updateQueue, i.type = s.type, e = s.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return Ue(Je, Je.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && it() > Ts && (t.flags |= 128, r = !0, ca(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = rd(s), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), ca(i, !0), i.tail === null && i.tailMode === "hidden" && !s.alternate && !qe) return Nt(t), null;
        } else 2 * it() - i.renderingStartTime > Ts && n !== 1073741824 && (t.flags |= 128, r = !0, ca(i, !1), t.lanes = 4194304);
        i.isBackwards ? (s.sibling = t.child, t.child = s) : (n = i.last, n !== null ? n.sibling = s : t.child = s, i.last = s);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = it(), t.sibling = null, n = Je.current, Ue(Je, r ? n & 1 | 2 : n & 1), t) : (Nt(t), null);
    case 22:
    case 23:
      return Ay(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? pn & 1073741824 && (Nt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Nt(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(G(156, t.tag));
}
function LB(e, t) {
  switch (cy(t), t.tag) {
    case 1:
      return on(t.type) && qc(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return ks(), Ve(rn), Ve(Ft), xy(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return vy(t), null;
    case 13:
      if (Ve(Je), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(G(340));
        Ss();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return Ve(Je), null;
    case 4:
      return ks(), null;
    case 10:
      return hy(t.type._context), null;
    case 22:
    case 23:
      return Ay(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var _u = !1, zt = !1, NB = typeof WeakSet == "function" ? WeakSet : Set, te = null;
function Ui(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    rt(e, t, r);
  }
  else n.current = null;
}
function Rg(e, t, n) {
  try {
    n();
  } catch (r) {
    rt(e, t, r);
  }
}
var aC = !1;
function DB(e, t) {
  if (hg = jc, e = sT(), ly(e)) {
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
  for (gg = { focusedElem: e, selectionRange: n }, jc = !1, te = t; te !== null; ) if (t = te, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, te = e;
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
            var g = h.memoizedProps, x = h.memoizedState, y = t.stateNode, m = y.getSnapshotBeforeUpdate(t.elementType === t.type ? g : jn(t.type, g), x);
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
      rt(t, t.return, C);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, te = e;
      break;
    }
    te = t.return;
  }
  return h = aC, aC = !1, h;
}
function _a(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && Rg(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Zf(e, t) {
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
function _g(e) {
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
function nP(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, nP(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[cr], delete t[fl], delete t[vg], delete t[xB], delete t[CB])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function rP(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function lC(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || rP(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Og(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Xc));
  else if (r !== 4 && (e = e.child, e !== null)) for (Og(e, t, n), e = e.sibling; e !== null; ) Og(e, t, n), e = e.sibling;
}
function $g(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for ($g(e, t, n), e = e.sibling; e !== null; ) $g(e, t, n), e = e.sibling;
}
var Et = null, Yn = !1;
function Zr(e, t, n) {
  for (n = n.child; n !== null; ) oP(e, t, n), n = n.sibling;
}
function oP(e, t, n) {
  if (hr && typeof hr.onCommitFiberUnmount == "function") try {
    hr.onCommitFiberUnmount(Gf, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      zt || Ui(n, t);
    case 6:
      var r = Et, o = Yn;
      Et = null, Zr(e, t, n), Et = r, Yn = o, Et !== null && (Yn ? (e = Et, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Et.removeChild(n.stateNode));
      break;
    case 18:
      Et !== null && (Yn ? (e = Et, n = n.stateNode, e.nodeType === 8 ? eh(e.parentNode, n) : e.nodeType === 1 && eh(e, n), al(e)) : eh(Et, n.stateNode));
      break;
    case 4:
      r = Et, o = Yn, Et = n.stateNode.containerInfo, Yn = !0, Zr(e, t, n), Et = r, Yn = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!zt && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var i = o, s = i.destroy;
          i = i.tag, s !== void 0 && (i & 2 || i & 4) && Rg(n, t, s), o = o.next;
        } while (o !== r);
      }
      Zr(e, t, n);
      break;
    case 1:
      if (!zt && (Ui(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (a) {
        rt(n, t, a);
      }
      Zr(e, t, n);
      break;
    case 21:
      Zr(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (zt = (r = zt) || n.memoizedState !== null, Zr(e, t, n), zt = r) : Zr(e, t, n);
      break;
    default:
      Zr(e, t, n);
  }
}
function uC(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new NB()), t.forEach(function(r) {
      var o = jB.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function Gn(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var o = n[r];
    try {
      var i = e, s = t, a = s;
      e: for (; a !== null; ) {
        switch (a.tag) {
          case 5:
            Et = a.stateNode, Yn = !1;
            break e;
          case 3:
            Et = a.stateNode.containerInfo, Yn = !0;
            break e;
          case 4:
            Et = a.stateNode.containerInfo, Yn = !0;
            break e;
        }
        a = a.return;
      }
      if (Et === null) throw Error(G(160));
      oP(i, s, o), Et = null, Yn = !1;
      var l = o.alternate;
      l !== null && (l.return = null), o.return = null;
    } catch (u) {
      rt(o, t, u);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) iP(t, e), t = t.sibling;
}
function iP(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Gn(t, e), ir(e), r & 4) {
        try {
          _a(3, e, e.return), Zf(3, e);
        } catch (g) {
          rt(e, e.return, g);
        }
        try {
          _a(5, e, e.return);
        } catch (g) {
          rt(e, e.return, g);
        }
      }
      break;
    case 1:
      Gn(t, e), ir(e), r & 512 && n !== null && Ui(n, n.return);
      break;
    case 5:
      if (Gn(t, e), ir(e), r & 512 && n !== null && Ui(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          rl(o, "");
        } catch (g) {
          rt(e, e.return, g);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, s = n !== null ? n.memoizedProps : i, a = e.type, l = e.updateQueue;
        if (e.updateQueue = null, l !== null) try {
          a === "input" && i.type === "radio" && i.name != null && PI(o, i), og(a, s);
          var u = og(a, i);
          for (s = 0; s < l.length; s += 2) {
            var c = l[s], d = l[s + 1];
            c === "style" ? _I(o, d) : c === "dangerouslySetInnerHTML" ? AI(o, d) : c === "children" ? rl(o, d) : X0(o, c, d, u);
          }
          switch (a) {
            case "input":
              Jh(o, i);
              break;
            case "textarea":
              MI(o, i);
              break;
            case "select":
              var p = o._wrapperState.wasMultiple;
              o._wrapperState.wasMultiple = !!i.multiple;
              var f = i.value;
              f != null ? qi(o, !!i.multiple, f, !1) : p !== !!i.multiple && (i.defaultValue != null ? qi(
                o,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : qi(o, !!i.multiple, i.multiple ? [] : "", !1));
          }
          o[fl] = i;
        } catch (g) {
          rt(e, e.return, g);
        }
      }
      break;
    case 6:
      if (Gn(t, e), ir(e), r & 4) {
        if (e.stateNode === null) throw Error(G(162));
        o = e.stateNode, i = e.memoizedProps;
        try {
          o.nodeValue = i;
        } catch (g) {
          rt(e, e.return, g);
        }
      }
      break;
    case 3:
      if (Gn(t, e), ir(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        al(t.containerInfo);
      } catch (g) {
        rt(e, e.return, g);
      }
      break;
    case 4:
      Gn(t, e), ir(e);
      break;
    case 13:
      Gn(t, e), ir(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (My = it())), r & 4 && uC(e);
      break;
    case 22:
      if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (zt = (u = zt) || c, Gn(t, e), zt = u) : Gn(t, e), ir(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1) for (te = e, c = e.child; c !== null; ) {
          for (d = te = c; te !== null; ) {
            switch (p = te, f = p.child, p.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                _a(4, p, p.return);
                break;
              case 1:
                Ui(p, p.return);
                var h = p.stateNode;
                if (typeof h.componentWillUnmount == "function") {
                  r = p, n = p.return;
                  try {
                    t = r, h.props = t.memoizedProps, h.state = t.memoizedState, h.componentWillUnmount();
                  } catch (g) {
                    rt(r, n, g);
                  }
                }
                break;
              case 5:
                Ui(p, p.return);
                break;
              case 22:
                if (p.memoizedState !== null) {
                  dC(d);
                  continue;
                }
            }
            f !== null ? (f.return = p, te = f) : dC(d);
          }
          c = c.sibling;
        }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                o = d.stateNode, u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (a = d.stateNode, l = d.memoizedProps.style, s = l != null && l.hasOwnProperty("display") ? l.display : null, a.style.display = RI("display", s));
              } catch (g) {
                rt(e, e.return, g);
              }
            }
          } else if (d.tag === 6) {
            if (c === null) try {
              d.stateNode.nodeValue = u ? "" : d.memoizedProps;
            } catch (g) {
              rt(e, e.return, g);
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
      Gn(t, e), ir(e), r & 4 && uC(e);
      break;
    case 21:
      break;
    default:
      Gn(
        t,
        e
      ), ir(e);
  }
}
function ir(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (rP(n)) {
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
          r.flags & 32 && (rl(o, ""), r.flags &= -33);
          var i = lC(e);
          $g(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo, a = lC(e);
          Og(e, a, s);
          break;
        default:
          throw Error(G(161));
      }
    } catch (l) {
      rt(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function zB(e, t, n) {
  te = e, sP(e);
}
function sP(e, t, n) {
  for (var r = (e.mode & 1) !== 0; te !== null; ) {
    var o = te, i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || _u;
      if (!s) {
        var a = o.alternate, l = a !== null && a.memoizedState !== null || zt;
        a = _u;
        var u = zt;
        if (_u = s, (zt = l) && !u) for (te = o; te !== null; ) s = te, l = s.child, s.tag === 22 && s.memoizedState !== null ? fC(o) : l !== null ? (l.return = s, te = l) : fC(o);
        for (; i !== null; ) te = i, sP(i), i = i.sibling;
        te = o, _u = a, zt = u;
      }
      cC(e);
    } else o.subtreeFlags & 8772 && i !== null ? (i.return = o, te = i) : cC(e);
  }
}
function cC(e) {
  for (; te !== null; ) {
    var t = te;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            zt || Zf(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !zt) if (n === null) r.componentDidMount();
            else {
              var o = t.elementType === t.type ? n.memoizedProps : jn(t.type, n.memoizedProps);
              r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && K1(t, i, r);
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
              K1(t, s, n);
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
                  d !== null && al(d);
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
        zt || t.flags & 512 && _g(t);
      } catch (p) {
        rt(t, t.return, p);
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
function dC(e) {
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
function fC(e) {
  for (; te !== null; ) {
    var t = te;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Zf(4, t);
          } catch (l) {
            rt(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              rt(t, o, l);
            }
          }
          var i = t.return;
          try {
            _g(t);
          } catch (l) {
            rt(t, i, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            _g(t);
          } catch (l) {
            rt(t, s, l);
          }
      }
    } catch (l) {
      rt(t, t.return, l);
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
var FB = Math.ceil, sd = qr.ReactCurrentDispatcher, Ty = qr.ReactCurrentOwner, _n = qr.ReactCurrentBatchConfig, Ee = 0, wt = null, ht = null, Rt = 0, pn = 0, Hi = _o(0), yt = 0, vl = null, li = 0, Jf = 0, Py = 0, Oa = null, en = null, My = 0, Ts = 1 / 0, Tr = null, ad = !1, Lg = null, go = null, Ou = !1, ao = null, ld = 0, $a = 0, Ng = null, rc = -1, oc = 0;
function qt() {
  return Ee & 6 ? it() : rc !== -1 ? rc : rc = it();
}
function mo(e) {
  return e.mode & 1 ? Ee & 2 && Rt !== 0 ? Rt & -Rt : SB.transition !== null ? (oc === 0 && (oc = GI()), oc) : (e = ze, e !== 0 || (e = window.event, e = e === void 0 ? 16 : QI(e.type)), e) : 1;
}
function Qn(e, t, n, r) {
  if (50 < $a) throw $a = 0, Ng = null, Error(G(185));
  ql(e, n, r), (!(Ee & 2) || e !== wt) && (e === wt && (!(Ee & 2) && (Jf |= n), yt === 4 && ro(e, Rt)), sn(e, r), n === 1 && Ee === 0 && !(t.mode & 1) && (Ts = it() + 500, Xf && Oo()));
}
function sn(e, t) {
  var n = e.callbackNode;
  S3(e, t);
  var r = Vc(e, e === wt ? Rt : 0);
  if (r === 0) n !== null && w1(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && w1(n), t === 1) e.tag === 0 ? wB(pC.bind(null, e)) : mT(pC.bind(null, e)), yB(function() {
      !(Ee & 6) && Oo();
    }), n = null;
    else {
      switch (VI(r)) {
        case 1:
          n = ey;
          break;
        case 4:
          n = HI;
          break;
        case 16:
          n = Gc;
          break;
        case 536870912:
          n = WI;
          break;
        default:
          n = Gc;
      }
      n = hP(n, aP.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function aP(e, t) {
  if (rc = -1, oc = 0, Ee & 6) throw Error(G(327));
  var n = e.callbackNode;
  if (ts() && e.callbackNode !== n) return null;
  var r = Vc(e, e === wt ? Rt : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ud(e, r);
  else {
    t = r;
    var o = Ee;
    Ee |= 2;
    var i = uP();
    (wt !== e || Rt !== t) && (Tr = null, Ts = it() + 500, ti(e, t));
    do
      try {
        HB();
        break;
      } catch (a) {
        lP(e, a);
      }
    while (!0);
    py(), sd.current = i, Ee = o, ht !== null ? t = 0 : (wt = null, Rt = 0, t = yt);
  }
  if (t !== 0) {
    if (t === 2 && (o = ug(e), o !== 0 && (r = o, t = Dg(e, o))), t === 1) throw n = vl, ti(e, 0), ro(e, r), sn(e, it()), n;
    if (t === 6) ro(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !BB(o) && (t = ud(e, r), t === 2 && (i = ug(e), i !== 0 && (r = i, t = Dg(e, i))), t === 1)) throw n = vl, ti(e, 0), ro(e, r), sn(e, it()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(G(345));
        case 2:
          Wo(e, en, Tr);
          break;
        case 3:
          if (ro(e, r), (r & 130023424) === r && (t = My + 500 - it(), 10 < t)) {
            if (Vc(e, 0) !== 0) break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              qt(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = yg(Wo.bind(null, e, en, Tr), t);
            break;
          }
          Wo(e, en, Tr);
          break;
        case 4:
          if (ro(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - qn(r);
            i = 1 << s, s = t[s], s > o && (o = s), r &= ~i;
          }
          if (r = o, r = it() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * FB(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = yg(Wo.bind(null, e, en, Tr), r);
            break;
          }
          Wo(e, en, Tr);
          break;
        case 5:
          Wo(e, en, Tr);
          break;
        default:
          throw Error(G(329));
      }
    }
  }
  return sn(e, it()), e.callbackNode === n ? aP.bind(null, e) : null;
}
function Dg(e, t) {
  var n = Oa;
  return e.current.memoizedState.isDehydrated && (ti(e, t).flags |= 256), e = ud(e, t), e !== 2 && (t = en, en = n, t !== null && zg(t)), e;
}
function zg(e) {
  en === null ? en = e : en.push.apply(en, e);
}
function BB(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var o = n[r], i = o.getSnapshot;
        o = o.value;
        try {
          if (!Jn(i(), o)) return !1;
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
function ro(e, t) {
  for (t &= ~Py, t &= ~Jf, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - qn(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function pC(e) {
  if (Ee & 6) throw Error(G(327));
  ts();
  var t = Vc(e, 0);
  if (!(t & 1)) return sn(e, it()), null;
  var n = ud(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ug(e);
    r !== 0 && (t = r, n = Dg(e, r));
  }
  if (n === 1) throw n = vl, ti(e, 0), ro(e, t), sn(e, it()), n;
  if (n === 6) throw Error(G(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Wo(e, en, Tr), sn(e, it()), null;
}
function Ey(e, t) {
  var n = Ee;
  Ee |= 1;
  try {
    return e(t);
  } finally {
    Ee = n, Ee === 0 && (Ts = it() + 500, Xf && Oo());
  }
}
function ui(e) {
  ao !== null && ao.tag === 0 && !(Ee & 6) && ts();
  var t = Ee;
  Ee |= 1;
  var n = _n.transition, r = ze;
  try {
    if (_n.transition = null, ze = 1, e) return e();
  } finally {
    ze = r, _n.transition = n, Ee = t, !(Ee & 6) && Oo();
  }
}
function Ay() {
  pn = Hi.current, Ve(Hi);
}
function ti(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, mB(n)), ht !== null) for (n = ht.return; n !== null; ) {
    var r = n;
    switch (cy(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && qc();
        break;
      case 3:
        ks(), Ve(rn), Ve(Ft), xy();
        break;
      case 5:
        vy(r);
        break;
      case 4:
        ks();
        break;
      case 13:
        Ve(Je);
        break;
      case 19:
        Ve(Je);
        break;
      case 10:
        hy(r.type._context);
        break;
      case 22:
      case 23:
        Ay();
    }
    n = n.return;
  }
  if (wt = e, ht = e = yo(e.current, null), Rt = pn = t, yt = 0, vl = null, Py = Jf = li = 0, en = Oa = null, Xo !== null) {
    for (t = 0; t < Xo.length; t++) if (n = Xo[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var o = r.next, i = n.pending;
      if (i !== null) {
        var s = i.next;
        i.next = o, r.next = s;
      }
      n.pending = r;
    }
    Xo = null;
  }
  return e;
}
function lP(e, t) {
  do {
    var n = ht;
    try {
      if (py(), ec.current = id, od) {
        for (var r = et.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        od = !1;
      }
      if (ai = 0, Ct = mt = et = null, Ra = !1, gl = 0, Ty.current = null, n === null || n.return === null) {
        yt = 1, vl = t, ht = null;
        break;
      }
      e: {
        var i = e, s = n.return, a = n, l = t;
        if (t = Rt, a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
          var u = l, c = a, d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var p = c.alternate;
            p ? (c.updateQueue = p.updateQueue, c.memoizedState = p.memoizedState, c.lanes = p.lanes) : (c.updateQueue = null, c.memoizedState = null);
          }
          var f = eC(s);
          if (f !== null) {
            f.flags &= -257, tC(f, s, a, i, t), f.mode & 1 && J1(i, u, t), t = f, l = u;
            var h = t.updateQueue;
            if (h === null) {
              var g = /* @__PURE__ */ new Set();
              g.add(l), t.updateQueue = g;
            } else h.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              J1(i, u, t), Ry();
              break e;
            }
            l = Error(G(426));
          }
        } else if (qe && a.mode & 1) {
          var x = eC(s);
          if (x !== null) {
            !(x.flags & 65536) && (x.flags |= 256), tC(x, s, a, i, t), dy(Is(l, a));
            break e;
          }
        }
        i = l = Is(l, a), yt !== 4 && (yt = 2), Oa === null ? Oa = [i] : Oa.push(i), i = s;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var y = VT(i, l, t);
              Y1(i, y);
              break e;
            case 1:
              a = l;
              var m = i.type, v = i.stateNode;
              if (!(i.flags & 128) && (typeof m.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (go === null || !go.has(v)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var C = jT(i, a, t);
                Y1(i, C);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      dP(n);
    } catch (b) {
      t = b, ht === n && n !== null && (ht = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function uP() {
  var e = sd.current;
  return sd.current = id, e === null ? id : e;
}
function Ry() {
  (yt === 0 || yt === 3 || yt === 2) && (yt = 4), wt === null || !(li & 268435455) && !(Jf & 268435455) || ro(wt, Rt);
}
function ud(e, t) {
  var n = Ee;
  Ee |= 2;
  var r = uP();
  (wt !== e || Rt !== t) && (Tr = null, ti(e, t));
  do
    try {
      UB();
      break;
    } catch (o) {
      lP(e, o);
    }
  while (!0);
  if (py(), Ee = n, sd.current = r, ht !== null) throw Error(G(261));
  return wt = null, Rt = 0, yt;
}
function UB() {
  for (; ht !== null; ) cP(ht);
}
function HB() {
  for (; ht !== null && !p3(); ) cP(ht);
}
function cP(e) {
  var t = pP(e.alternate, e, pn);
  e.memoizedProps = e.pendingProps, t === null ? dP(e) : ht = t, Ty.current = null;
}
function dP(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = LB(n, t), n !== null) {
        n.flags &= 32767, ht = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        yt = 6, ht = null;
        return;
      }
    } else if (n = $B(n, t, pn), n !== null) {
      ht = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      ht = t;
      return;
    }
    ht = t = e;
  } while (t !== null);
  yt === 0 && (yt = 5);
}
function Wo(e, t, n) {
  var r = ze, o = _n.transition;
  try {
    _n.transition = null, ze = 1, WB(e, t, n, r);
  } finally {
    _n.transition = o, ze = r;
  }
  return null;
}
function WB(e, t, n, r) {
  do
    ts();
  while (ao !== null);
  if (Ee & 6) throw Error(G(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(G(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (b3(e, i), e === wt && (ht = wt = null, Rt = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Ou || (Ou = !0, hP(Gc, function() {
    return ts(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = _n.transition, _n.transition = null;
    var s = ze;
    ze = 1;
    var a = Ee;
    Ee |= 4, Ty.current = null, DB(e, n), iP(n, e), uB(gg), jc = !!hg, gg = hg = null, e.current = n, zB(n), h3(), Ee = a, ze = s, _n.transition = i;
  } else e.current = n;
  if (Ou && (Ou = !1, ao = e, ld = o), i = e.pendingLanes, i === 0 && (go = null), y3(n.stateNode), sn(e, it()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (ad) throw ad = !1, e = Lg, Lg = null, e;
  return ld & 1 && e.tag !== 0 && ts(), i = e.pendingLanes, i & 1 ? e === Ng ? $a++ : ($a = 0, Ng = e) : $a = 0, Oo(), null;
}
function ts() {
  if (ao !== null) {
    var e = VI(ld), t = _n.transition, n = ze;
    try {
      if (_n.transition = null, ze = 16 > e ? 16 : e, ao === null) var r = !1;
      else {
        if (e = ao, ao = null, ld = 0, Ee & 6) throw Error(G(331));
        var o = Ee;
        for (Ee |= 4, te = e.current; te !== null; ) {
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
                      _a(8, c, i);
                  }
                  var d = c.child;
                  if (d !== null) d.return = c, te = d;
                  else for (; te !== null; ) {
                    c = te;
                    var p = c.sibling, f = c.return;
                    if (nP(c), c === u) {
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
                _a(9, i, i.return);
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
                  Zf(9, a);
              }
            } catch (b) {
              rt(a, a.return, b);
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
        if (Ee = o, Oo(), hr && typeof hr.onPostCommitFiberRoot == "function") try {
          hr.onPostCommitFiberRoot(Gf, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      ze = n, _n.transition = t;
    }
  }
  return !1;
}
function hC(e, t, n) {
  t = Is(n, t), t = VT(e, t, 1), e = ho(e, t, 1), t = qt(), e !== null && (ql(e, 1, t), sn(e, t));
}
function rt(e, t, n) {
  if (e.tag === 3) hC(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      hC(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (go === null || !go.has(r))) {
        e = Is(n, e), e = jT(t, e, 1), t = ho(t, e, 1), e = qt(), t !== null && (ql(t, 1, e), sn(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function GB(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = qt(), e.pingedLanes |= e.suspendedLanes & n, wt === e && (Rt & n) === n && (yt === 4 || yt === 3 && (Rt & 130023424) === Rt && 500 > it() - My ? ti(e, 0) : Py |= n), sn(e, t);
}
function fP(e, t) {
  t === 0 && (e.mode & 1 ? (t = bu, bu <<= 1, !(bu & 130023424) && (bu = 4194304)) : t = 1);
  var n = qt();
  e = Vr(e, t), e !== null && (ql(e, t, n), sn(e, n));
}
function VB(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), fP(e, n);
}
function jB(e, t) {
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
  r !== null && r.delete(t), fP(e, n);
}
var pP;
pP = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || rn.current) nn = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return nn = !1, OB(e, t, n);
    nn = !!(e.flags & 131072);
  }
  else nn = !1, qe && t.flags & 1048576 && yT(t, Jc, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      nc(e, t), e = t.pendingProps;
      var o = ws(t, Ft.current);
      es(t, n), o = wy(null, t, r, e, o, n);
      var i = Sy();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, on(r) ? (i = !0, Qc(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, my(t), o.updater = Qf, t.stateNode = o, o._reactInternals = t, kg(t, r, e, n), t = Pg(null, t, r, !0, i, n)) : (t.tag = 0, qe && i && uy(t), Yt(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (nc(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = KB(r), e = jn(r, e), o) {
          case 0:
            t = Tg(null, t, r, e, n);
            break e;
          case 1:
            t = oC(null, t, r, e, n);
            break e;
          case 11:
            t = nC(null, t, r, e, n);
            break e;
          case 14:
            t = rC(null, t, r, jn(r.type, e), n);
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
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : jn(r, o), Tg(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : jn(r, o), oC(e, t, r, o, n);
    case 3:
      e: {
        if (qT(t), e === null) throw Error(G(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, bT(e, t), nd(t, r, null, n);
        var s = t.memoizedState;
        if (r = s.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          o = Is(Error(G(423)), t), t = iC(e, t, r, n, o);
          break e;
        } else if (r !== o) {
          o = Is(Error(G(424)), t), t = iC(e, t, r, n, o);
          break e;
        } else for (gn = po(t.stateNode.containerInfo.firstChild), yn = t, qe = !0, Kn = null, n = wT(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Ss(), r === o) {
            t = jr(e, t, n);
            break e;
          }
          Yt(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return kT(t), e === null && wg(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, s = o.children, mg(r, o) ? s = null : i !== null && mg(r, i) && (t.flags |= 32), XT(e, t), Yt(e, t, s, n), t.child;
    case 6:
      return e === null && wg(t), null;
    case 13:
      return QT(e, t, n);
    case 4:
      return yy(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = bs(t, null, r, n) : Yt(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : jn(r, o), nC(e, t, r, o, n);
    case 7:
      return Yt(e, t, t.pendingProps, n), t.child;
    case 8:
      return Yt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Yt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, s = o.value, Ue(ed, r._currentValue), r._currentValue = s, i !== null) if (Jn(i.value, s)) {
          if (i.children === o.children && !rn.current) {
            t = jr(e, t, n);
            break e;
          }
        } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
          var a = i.dependencies;
          if (a !== null) {
            s = i.child;
            for (var l = a.firstContext; l !== null; ) {
              if (l.context === r) {
                if (i.tag === 1) {
                  l = Dr(-1, n & -n), l.tag = 2;
                  var u = i.updateQueue;
                  if (u !== null) {
                    u = u.shared;
                    var c = u.pending;
                    c === null ? l.next = l : (l.next = c.next, c.next = l), u.pending = l;
                  }
                }
                i.lanes |= n, l = i.alternate, l !== null && (l.lanes |= n), Sg(
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
            s.lanes |= n, a = s.alternate, a !== null && (a.lanes |= n), Sg(s, n, t), s = i.sibling;
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
        Yt(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, es(t, n), o = Ln(o), r = r(o), t.flags |= 1, Yt(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = jn(r, t.pendingProps), o = jn(r.type, o), rC(e, t, r, o, n);
    case 15:
      return YT(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : jn(r, o), nc(e, t), t.tag = 1, on(r) ? (e = !0, Qc(t)) : e = !1, es(t, n), GT(t, r, o), kg(t, r, o, n), Pg(null, t, r, !0, e, n);
    case 19:
      return ZT(e, t, n);
    case 22:
      return KT(e, t, n);
  }
  throw Error(G(156, t.tag));
};
function hP(e, t) {
  return UI(e, t);
}
function YB(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Rn(e, t, n, r) {
  return new YB(e, t, n, r);
}
function _y(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function KB(e) {
  if (typeof e == "function") return _y(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Q0) return 11;
    if (e === Z0) return 14;
  }
  return 2;
}
function yo(e, t) {
  var n = e.alternate;
  return n === null ? (n = Rn(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function ic(e, t, n, r, o, i) {
  var s = 2;
  if (r = e, typeof e == "function") _y(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else e: switch (e) {
    case _i:
      return ni(n.children, o, i, t);
    case q0:
      s = 8, o |= 8;
      break;
    case Kh:
      return e = Rn(12, n, t, o | 2), e.elementType = Kh, e.lanes = i, e;
    case Xh:
      return e = Rn(13, n, t, o), e.elementType = Xh, e.lanes = i, e;
    case qh:
      return e = Rn(19, n, t, o), e.elementType = qh, e.lanes = i, e;
    case kI:
      return ep(n, o, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case SI:
          s = 10;
          break e;
        case bI:
          s = 9;
          break e;
        case Q0:
          s = 11;
          break e;
        case Z0:
          s = 14;
          break e;
        case Jr:
          s = 16, r = null;
          break e;
      }
      throw Error(G(130, e == null ? e : typeof e, ""));
  }
  return t = Rn(s, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t;
}
function ni(e, t, n, r) {
  return e = Rn(7, e, r, t), e.lanes = n, e;
}
function ep(e, t, n, r) {
  return e = Rn(22, e, r, t), e.elementType = kI, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function lh(e, t, n) {
  return e = Rn(6, e, null, t), e.lanes = n, e;
}
function uh(e, t, n) {
  return t = Rn(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function XB(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Wp(0), this.expirationTimes = Wp(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Wp(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function Oy(e, t, n, r, o, i, s, a, l) {
  return e = new XB(e, t, n, a, l), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Rn(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, my(i), e;
}
function qB(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Ri, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function gP(e) {
  if (!e) return So;
  e = e._reactInternals;
  e: {
    if (mi(e) !== e || e.tag !== 1) throw Error(G(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (on(t.type)) {
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
    if (on(n)) return gT(e, n, t);
  }
  return t;
}
function mP(e, t, n, r, o, i, s, a, l) {
  return e = Oy(n, r, !0, e, o, i, s, a, l), e.context = gP(null), n = e.current, r = qt(), o = mo(n), i = Dr(r, o), i.callback = t ?? null, ho(n, i, o), e.current.lanes = o, ql(e, o, r), sn(e, r), e;
}
function tp(e, t, n, r) {
  var o = t.current, i = qt(), s = mo(o);
  return n = gP(n), t.context === null ? t.context = n : t.pendingContext = n, t = Dr(i, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = ho(o, t, s), e !== null && (Qn(e, o, s, i), Ju(e, o, s)), s;
}
function cd(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function gC(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function $y(e, t) {
  gC(e, t), (e = e.alternate) && gC(e, t);
}
function QB() {
  return null;
}
var yP = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Ly(e) {
  this._internalRoot = e;
}
np.prototype.render = Ly.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(G(409));
  tp(e, t, null, null);
};
np.prototype.unmount = Ly.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    ui(function() {
      tp(null, e, null, null);
    }), t[Gr] = null;
  }
};
function np(e) {
  this._internalRoot = e;
}
np.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = KI();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < no.length && t !== 0 && t < no[n].priority; n++) ;
    no.splice(n, 0, e), n === 0 && qI(e);
  }
};
function Ny(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function rp(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function mC() {
}
function ZB(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var u = cd(s);
        i.call(u);
      };
    }
    var s = mP(t, r, e, 0, null, !1, !1, "", mC);
    return e._reactRootContainer = s, e[Gr] = s.current, cl(e.nodeType === 8 ? e.parentNode : e), ui(), s;
  }
  for (; o = e.lastChild; ) e.removeChild(o);
  if (typeof r == "function") {
    var a = r;
    r = function() {
      var u = cd(l);
      a.call(u);
    };
  }
  var l = Oy(e, 0, !1, null, null, !1, !1, "", mC);
  return e._reactRootContainer = l, e[Gr] = l.current, cl(e.nodeType === 8 ? e.parentNode : e), ui(function() {
    tp(t, l, n, r);
  }), l;
}
function op(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var a = o;
      o = function() {
        var l = cd(s);
        a.call(l);
      };
    }
    tp(t, s, e, o);
  } else s = ZB(n, t, e, o, r);
  return cd(s);
}
jI = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Sa(t.pendingLanes);
        n !== 0 && (ty(t, n | 1), sn(t, it()), !(Ee & 6) && (Ts = it() + 500, Oo()));
      }
      break;
    case 13:
      ui(function() {
        var r = Vr(e, 1);
        if (r !== null) {
          var o = qt();
          Qn(r, e, 1, o);
        }
      }), $y(e, 1);
  }
};
ny = function(e) {
  if (e.tag === 13) {
    var t = Vr(e, 134217728);
    if (t !== null) {
      var n = qt();
      Qn(t, e, 134217728, n);
    }
    $y(e, 134217728);
  }
};
YI = function(e) {
  if (e.tag === 13) {
    var t = mo(e), n = Vr(e, t);
    if (n !== null) {
      var r = qt();
      Qn(n, e, t, r);
    }
    $y(e, t);
  }
};
KI = function() {
  return ze;
};
XI = function(e, t) {
  var n = ze;
  try {
    return ze = e, t();
  } finally {
    ze = n;
  }
};
sg = function(e, t, n) {
  switch (t) {
    case "input":
      if (Jh(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Kf(r);
            if (!o) throw Error(G(90));
            TI(r), Jh(r, o);
          }
        }
      }
      break;
    case "textarea":
      MI(e, n);
      break;
    case "select":
      t = n.value, t != null && qi(e, !!n.multiple, t, !1);
  }
};
LI = Ey;
NI = ui;
var JB = { usingClientEntryPoint: !1, Events: [Zl, Ni, Kf, OI, $I, Ey] }, da = { findFiberByHostInstance: Ko, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, e4 = { bundleType: da.bundleType, version: da.version, rendererPackageName: da.rendererPackageName, rendererConfig: da.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: qr.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = FI(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: da.findFiberByHostInstance || QB, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var $u = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!$u.isDisabled && $u.supportsFiber) try {
    Gf = $u.inject(e4), hr = $u;
  } catch {
  }
}
wn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = JB;
wn.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ny(t)) throw Error(G(200));
  return qB(e, t, null, n);
};
wn.createRoot = function(e, t) {
  if (!Ny(e)) throw Error(G(299));
  var n = !1, r = "", o = yP;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = Oy(e, 1, !1, null, null, n, !1, r, o), e[Gr] = t.current, cl(e.nodeType === 8 ? e.parentNode : e), new Ly(t);
};
wn.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(G(188)) : (e = Object.keys(e).join(","), Error(G(268, e)));
  return e = FI(t), e = e === null ? null : e.stateNode, e;
};
wn.flushSync = function(e) {
  return ui(e);
};
wn.hydrate = function(e, t, n) {
  if (!rp(t)) throw Error(G(200));
  return op(null, e, t, !0, n);
};
wn.hydrateRoot = function(e, t, n) {
  if (!Ny(e)) throw Error(G(405));
  var r = n != null && n.hydratedSources || null, o = !1, i = "", s = yP;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = mP(t, null, e, 1, n ?? null, o, !1, i, s), e[Gr] = t.current, cl(e), r) for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
    n,
    o
  );
  return new np(t);
};
wn.render = function(e, t, n) {
  if (!rp(t)) throw Error(G(200));
  return op(null, e, t, !1, n);
};
wn.unmountComponentAtNode = function(e) {
  if (!rp(e)) throw Error(G(40));
  return e._reactRootContainer ? (ui(function() {
    op(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Gr] = null;
    });
  }), !0) : !1;
};
wn.unstable_batchedUpdates = Ey;
wn.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!rp(n)) throw Error(G(200));
  if (e == null || e._reactInternals === void 0) throw Error(G(38));
  return op(e, t, n, !1, r);
};
wn.version = "18.3.1-next-f1338f8080-20240426";
function vP() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(vP);
    } catch (e) {
      console.error(e);
    }
}
vP(), vI.exports = wn;
var xP = vI.exports, an = "top", Dn = "bottom", zn = "right", ln = "left", Dy = "auto", eu = [an, Dn, zn, ln], Ps = "start", xl = "end", t4 = "clippingParents", CP = "viewport", fa = "popper", n4 = "reference", yC = /* @__PURE__ */ eu.reduce(function(e, t) {
  return e.concat([t + "-" + Ps, t + "-" + xl]);
}, []), wP = /* @__PURE__ */ [].concat(eu, [Dy]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Ps, t + "-" + xl]);
}, []), r4 = "beforeRead", o4 = "read", i4 = "afterRead", s4 = "beforeMain", a4 = "main", l4 = "afterMain", u4 = "beforeWrite", c4 = "write", d4 = "afterWrite", f4 = [r4, o4, i4, s4, a4, l4, u4, c4, d4];
function wr(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function xn(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function ci(e) {
  var t = xn(e).Element;
  return e instanceof t || e instanceof Element;
}
function On(e) {
  var t = xn(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function zy(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = xn(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function p4(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, i = t.elements[n];
    !On(i) || !wr(i) || (Object.assign(i.style, r), Object.keys(o).forEach(function(s) {
      var a = o[s];
      a === !1 ? i.removeAttribute(s) : i.setAttribute(s, a === !0 ? "" : a);
    }));
  });
}
function h4(e) {
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
      !On(o) || !wr(o) || (Object.assign(o.style, a), Object.keys(i).forEach(function(l) {
        o.removeAttribute(l);
      }));
    });
  };
}
const g4 = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: p4,
  effect: h4,
  requires: ["computeStyles"]
};
function mr(e) {
  return e.split("-")[0];
}
var ri = Math.max, dd = Math.min, Ms = Math.round;
function Fg() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function SP() {
  return !/^((?!chrome|android).)*safari/i.test(Fg());
}
function Es(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), o = 1, i = 1;
  t && On(e) && (o = e.offsetWidth > 0 && Ms(r.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && Ms(r.height) / e.offsetHeight || 1);
  var s = ci(e) ? xn(e) : window, a = s.visualViewport, l = !SP() && n, u = (r.left + (l && a ? a.offsetLeft : 0)) / o, c = (r.top + (l && a ? a.offsetTop : 0)) / i, d = r.width / o, p = r.height / i;
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
function Fy(e) {
  var t = Es(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function bP(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && zy(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Yr(e) {
  return xn(e).getComputedStyle(e);
}
function m4(e) {
  return ["table", "td", "th"].indexOf(wr(e)) >= 0;
}
function $o(e) {
  return ((ci(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function ip(e) {
  return wr(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (zy(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    $o(e)
  );
}
function vC(e) {
  return !On(e) || // https://github.com/popperjs/popper-core/issues/837
  Yr(e).position === "fixed" ? null : e.offsetParent;
}
function y4(e) {
  var t = /firefox/i.test(Fg()), n = /Trident/i.test(Fg());
  if (n && On(e)) {
    var r = Yr(e);
    if (r.position === "fixed")
      return null;
  }
  var o = ip(e);
  for (zy(o) && (o = o.host); On(o) && ["html", "body"].indexOf(wr(o)) < 0; ) {
    var i = Yr(o);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function tu(e) {
  for (var t = xn(e), n = vC(e); n && m4(n) && Yr(n).position === "static"; )
    n = vC(n);
  return n && (wr(n) === "html" || wr(n) === "body" && Yr(n).position === "static") ? t : n || y4(e) || t;
}
function By(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function La(e, t, n) {
  return ri(e, dd(t, n));
}
function v4(e, t, n) {
  var r = La(e, t, n);
  return r > n ? n : r;
}
function kP() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function IP(e) {
  return Object.assign({}, kP(), e);
}
function TP(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var x4 = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, IP(typeof t != "number" ? t : TP(t, eu));
};
function C4(e) {
  var t, n = e.state, r = e.name, o = e.options, i = n.elements.arrow, s = n.modifiersData.popperOffsets, a = mr(n.placement), l = By(a), u = [ln, zn].indexOf(a) >= 0, c = u ? "height" : "width";
  if (!(!i || !s)) {
    var d = x4(o.padding, n), p = Fy(i), f = l === "y" ? an : ln, h = l === "y" ? Dn : zn, g = n.rects.reference[c] + n.rects.reference[l] - s[l] - n.rects.popper[c], x = s[l] - n.rects.reference[l], y = tu(i), m = y ? l === "y" ? y.clientHeight || 0 : y.clientWidth || 0 : 0, v = g / 2 - x / 2, C = d[f], b = m - p[c] - d[h], S = m / 2 - p[c] / 2 + v, k = La(C, S, b), I = l;
    n.modifiersData[r] = (t = {}, t[I] = k, t.centerOffset = k - S, t);
  }
}
function w4(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || bP(t.elements.popper, o) && (t.elements.arrow = o));
}
const S4 = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: C4,
  effect: w4,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function As(e) {
  return e.split("-")[1];
}
var b4 = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function k4(e, t) {
  var n = e.x, r = e.y, o = t.devicePixelRatio || 1;
  return {
    x: Ms(n * o) / o || 0,
    y: Ms(r * o) / o || 0
  };
}
function xC(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, i = e.variation, s = e.offsets, a = e.position, l = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, d = e.isFixed, p = s.x, f = p === void 0 ? 0 : p, h = s.y, g = h === void 0 ? 0 : h, x = typeof c == "function" ? c({
    x: f,
    y: g
  }) : {
    x: f,
    y: g
  };
  f = x.x, g = x.y;
  var y = s.hasOwnProperty("x"), m = s.hasOwnProperty("y"), v = ln, C = an, b = window;
  if (u) {
    var S = tu(n), k = "clientHeight", I = "clientWidth";
    if (S === xn(n) && (S = $o(n), Yr(S).position !== "static" && a === "absolute" && (k = "scrollHeight", I = "scrollWidth")), S = S, o === an || (o === ln || o === zn) && i === xl) {
      C = Dn;
      var $ = d && S === b && b.visualViewport ? b.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        S[k]
      );
      g -= $ - r.height, g *= l ? 1 : -1;
    }
    if (o === ln || (o === an || o === Dn) && i === xl) {
      v = zn;
      var O = d && S === b && b.visualViewport ? b.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        S[I]
      );
      f -= O - r.width, f *= l ? 1 : -1;
    }
  }
  var R = Object.assign({
    position: a
  }, u && b4), w = c === !0 ? k4({
    x: f,
    y: g
  }, xn(n)) : {
    x: f,
    y: g
  };
  if (f = w.x, g = w.y, l) {
    var E;
    return Object.assign({}, R, (E = {}, E[C] = m ? "0" : "", E[v] = y ? "0" : "", E.transform = (b.devicePixelRatio || 1) <= 1 ? "translate(" + f + "px, " + g + "px)" : "translate3d(" + f + "px, " + g + "px, 0)", E));
  }
  return Object.assign({}, R, (t = {}, t[C] = m ? g + "px" : "", t[v] = y ? f + "px" : "", t.transform = "", t));
}
function I4(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, i = n.adaptive, s = i === void 0 ? !0 : i, a = n.roundOffsets, l = a === void 0 ? !0 : a, u = {
    placement: mr(t.placement),
    variation: As(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, xC(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: s,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, xC(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const T4 = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: I4,
  data: {}
};
var Lu = {
  passive: !0
};
function P4(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, i = o === void 0 ? !0 : o, s = r.resize, a = s === void 0 ? !0 : s, l = xn(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && u.forEach(function(c) {
    c.addEventListener("scroll", n.update, Lu);
  }), a && l.addEventListener("resize", n.update, Lu), function() {
    i && u.forEach(function(c) {
      c.removeEventListener("scroll", n.update, Lu);
    }), a && l.removeEventListener("resize", n.update, Lu);
  };
}
const M4 = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: P4,
  data: {}
};
var E4 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function sc(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return E4[t];
  });
}
var A4 = {
  start: "end",
  end: "start"
};
function CC(e) {
  return e.replace(/start|end/g, function(t) {
    return A4[t];
  });
}
function Uy(e) {
  var t = xn(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function Hy(e) {
  return Es($o(e)).left + Uy(e).scrollLeft;
}
function R4(e, t) {
  var n = xn(e), r = $o(e), o = n.visualViewport, i = r.clientWidth, s = r.clientHeight, a = 0, l = 0;
  if (o) {
    i = o.width, s = o.height;
    var u = SP();
    (u || !u && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: a + Hy(e),
    y: l
  };
}
function _4(e) {
  var t, n = $o(e), r = Uy(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, i = ri(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = ri(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), a = -r.scrollLeft + Hy(e), l = -r.scrollTop;
  return Yr(o || n).direction === "rtl" && (a += ri(n.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
function Wy(e) {
  var t = Yr(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function PP(e) {
  return ["html", "body", "#document"].indexOf(wr(e)) >= 0 ? e.ownerDocument.body : On(e) && Wy(e) ? e : PP(ip(e));
}
function Na(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = PP(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), i = xn(r), s = o ? [i].concat(i.visualViewport || [], Wy(r) ? r : []) : r, a = t.concat(s);
  return o ? a : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    a.concat(Na(ip(s)))
  );
}
function Bg(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function O4(e, t) {
  var n = Es(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function wC(e, t, n) {
  return t === CP ? Bg(R4(e, n)) : ci(t) ? O4(t, n) : Bg(_4($o(e)));
}
function $4(e) {
  var t = Na(ip(e)), n = ["absolute", "fixed"].indexOf(Yr(e).position) >= 0, r = n && On(e) ? tu(e) : e;
  return ci(r) ? t.filter(function(o) {
    return ci(o) && bP(o, r) && wr(o) !== "body";
  }) : [];
}
function L4(e, t, n, r) {
  var o = t === "clippingParents" ? $4(e) : [].concat(t), i = [].concat(o, [n]), s = i[0], a = i.reduce(function(l, u) {
    var c = wC(e, u, r);
    return l.top = ri(c.top, l.top), l.right = dd(c.right, l.right), l.bottom = dd(c.bottom, l.bottom), l.left = ri(c.left, l.left), l;
  }, wC(e, s, r));
  return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
function MP(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? mr(r) : null, i = r ? As(r) : null, s = t.x + t.width / 2 - n.width / 2, a = t.y + t.height / 2 - n.height / 2, l;
  switch (o) {
    case an:
      l = {
        x: s,
        y: t.y - n.height
      };
      break;
    case Dn:
      l = {
        x: s,
        y: t.y + t.height
      };
      break;
    case zn:
      l = {
        x: t.x + t.width,
        y: a
      };
      break;
    case ln:
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
  var u = o ? By(o) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (i) {
      case Ps:
        l[u] = l[u] - (t[c] / 2 - n[c] / 2);
        break;
      case xl:
        l[u] = l[u] + (t[c] / 2 - n[c] / 2);
        break;
    }
  }
  return l;
}
function Cl(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, i = n.strategy, s = i === void 0 ? e.strategy : i, a = n.boundary, l = a === void 0 ? t4 : a, u = n.rootBoundary, c = u === void 0 ? CP : u, d = n.elementContext, p = d === void 0 ? fa : d, f = n.altBoundary, h = f === void 0 ? !1 : f, g = n.padding, x = g === void 0 ? 0 : g, y = IP(typeof x != "number" ? x : TP(x, eu)), m = p === fa ? n4 : fa, v = e.rects.popper, C = e.elements[h ? m : p], b = L4(ci(C) ? C : C.contextElement || $o(e.elements.popper), l, c, s), S = Es(e.elements.reference), k = MP({
    reference: S,
    element: v,
    placement: o
  }), I = Bg(Object.assign({}, v, k)), $ = p === fa ? I : S, O = {
    top: b.top - $.top + y.top,
    bottom: $.bottom - b.bottom + y.bottom,
    left: b.left - $.left + y.left,
    right: $.right - b.right + y.right
  }, R = e.modifiersData.offset;
  if (p === fa && R) {
    var w = R[o];
    Object.keys(O).forEach(function(E) {
      var T = [zn, Dn].indexOf(E) >= 0 ? 1 : -1, P = [an, Dn].indexOf(E) >= 0 ? "y" : "x";
      O[E] += w[P] * T;
    });
  }
  return O;
}
function N4(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, i = n.rootBoundary, s = n.padding, a = n.flipVariations, l = n.allowedAutoPlacements, u = l === void 0 ? wP : l, c = As(r), d = c ? a ? yC : yC.filter(function(h) {
    return As(h) === c;
  }) : eu, p = d.filter(function(h) {
    return u.indexOf(h) >= 0;
  });
  p.length === 0 && (p = d);
  var f = p.reduce(function(h, g) {
    return h[g] = Cl(e, {
      placement: g,
      boundary: o,
      rootBoundary: i,
      padding: s
    })[mr(g)], h;
  }, {});
  return Object.keys(f).sort(function(h, g) {
    return f[h] - f[g];
  });
}
function D4(e) {
  if (mr(e) === Dy)
    return [];
  var t = sc(e);
  return [CC(e), t, CC(t)];
}
function z4(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, i = o === void 0 ? !0 : o, s = n.altAxis, a = s === void 0 ? !0 : s, l = n.fallbackPlacements, u = n.padding, c = n.boundary, d = n.rootBoundary, p = n.altBoundary, f = n.flipVariations, h = f === void 0 ? !0 : f, g = n.allowedAutoPlacements, x = t.options.placement, y = mr(x), m = y === x, v = l || (m || !h ? [sc(x)] : D4(x)), C = [x].concat(v).reduce(function(J, ae) {
      return J.concat(mr(ae) === Dy ? N4(t, {
        placement: ae,
        boundary: c,
        rootBoundary: d,
        padding: u,
        flipVariations: h,
        allowedAutoPlacements: g
      }) : ae);
    }, []), b = t.rects.reference, S = t.rects.popper, k = /* @__PURE__ */ new Map(), I = !0, $ = C[0], O = 0; O < C.length; O++) {
      var R = C[O], w = mr(R), E = As(R) === Ps, T = [an, Dn].indexOf(w) >= 0, P = T ? "width" : "height", _ = Cl(t, {
        placement: R,
        boundary: c,
        rootBoundary: d,
        altBoundary: p,
        padding: u
      }), N = T ? E ? zn : ln : E ? Dn : an;
      b[P] > S[P] && (N = sc(N));
      var A = sc(N), D = [];
      if (i && D.push(_[w] <= 0), a && D.push(_[N] <= 0, _[A] <= 0), D.every(function(J) {
        return J;
      })) {
        $ = R, I = !1;
        break;
      }
      k.set(R, D);
    }
    if (I)
      for (var z = h ? 3 : 1, U = function(ae) {
        var ee = C.find(function(ne) {
          var Z = k.get(ne);
          if (Z)
            return Z.slice(0, ae).every(function(H) {
              return H;
            });
        });
        if (ee)
          return $ = ee, "break";
      }, W = z; W > 0; W--) {
        var q = U(W);
        if (q === "break") break;
      }
    t.placement !== $ && (t.modifiersData[r]._skip = !0, t.placement = $, t.reset = !0);
  }
}
const F4 = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: z4,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function SC(e, t, n) {
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
function bC(e) {
  return [an, zn, Dn, ln].some(function(t) {
    return e[t] >= 0;
  });
}
function B4(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, i = t.modifiersData.preventOverflow, s = Cl(t, {
    elementContext: "reference"
  }), a = Cl(t, {
    altBoundary: !0
  }), l = SC(s, r), u = SC(a, o, i), c = bC(l), d = bC(u);
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
const U4 = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: B4
};
function H4(e, t, n) {
  var r = mr(e), o = [ln, an].indexOf(r) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, s = i[0], a = i[1];
  return s = s || 0, a = (a || 0) * o, [ln, zn].indexOf(r) >= 0 ? {
    x: a,
    y: s
  } : {
    x: s,
    y: a
  };
}
function W4(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, i = o === void 0 ? [0, 0] : o, s = wP.reduce(function(c, d) {
    return c[d] = H4(d, t.rects, i), c;
  }, {}), a = s[t.placement], l = a.x, u = a.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = s;
}
const G4 = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: W4
};
function V4(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = MP({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const j4 = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: V4,
  data: {}
};
function Y4(e) {
  return e === "x" ? "y" : "x";
}
function K4(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, i = o === void 0 ? !0 : o, s = n.altAxis, a = s === void 0 ? !1 : s, l = n.boundary, u = n.rootBoundary, c = n.altBoundary, d = n.padding, p = n.tether, f = p === void 0 ? !0 : p, h = n.tetherOffset, g = h === void 0 ? 0 : h, x = Cl(t, {
    boundary: l,
    rootBoundary: u,
    padding: d,
    altBoundary: c
  }), y = mr(t.placement), m = As(t.placement), v = !m, C = By(y), b = Y4(C), S = t.modifiersData.popperOffsets, k = t.rects.reference, I = t.rects.popper, $ = typeof g == "function" ? g(Object.assign({}, t.rects, {
    placement: t.placement
  })) : g, O = typeof $ == "number" ? {
    mainAxis: $,
    altAxis: $
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, $), R = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, w = {
    x: 0,
    y: 0
  };
  if (S) {
    if (i) {
      var E, T = C === "y" ? an : ln, P = C === "y" ? Dn : zn, _ = C === "y" ? "height" : "width", N = S[C], A = N + x[T], D = N - x[P], z = f ? -I[_] / 2 : 0, U = m === Ps ? k[_] : I[_], W = m === Ps ? -I[_] : -k[_], q = t.elements.arrow, J = f && q ? Fy(q) : {
        width: 0,
        height: 0
      }, ae = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : kP(), ee = ae[T], ne = ae[P], Z = La(0, k[_], J[_]), H = v ? k[_] / 2 - z - Z - ee - O.mainAxis : U - Z - ee - O.mainAxis, X = v ? -k[_] / 2 + z + Z + ne + O.mainAxis : W + Z + ne + O.mainAxis, re = t.elements.arrow && tu(t.elements.arrow), B = re ? C === "y" ? re.clientTop || 0 : re.clientLeft || 0 : 0, ue = (E = R == null ? void 0 : R[C]) != null ? E : 0, Q = N + H - ue - B, Ie = N + X - ue, xe = La(f ? dd(A, Q) : A, N, f ? ri(D, Ie) : D);
      S[C] = xe, w[C] = xe - N;
    }
    if (a) {
      var Te, Mt = C === "x" ? an : ln, Ye = C === "x" ? Dn : zn, Wt = S[b], Gt = b === "y" ? "height" : "width", fn = Wt + x[Mt], ut = Wt - x[Ye], br = [an, ln].indexOf(y) !== -1, nr = (Te = R == null ? void 0 : R[b]) != null ? Te : 0, Ot = br ? fn : Wt - k[Gt] - I[Gt] - nr + O.altAxis, Qe = br ? Wt + k[Gt] + I[Gt] - nr - O.altAxis : ut, ct = f && br ? v4(Ot, Wt, Qe) : La(f ? Ot : fn, Wt, f ? Qe : ut);
      S[b] = ct, w[b] = ct - Wt;
    }
    t.modifiersData[r] = w;
  }
}
const X4 = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: K4,
  requiresIfExists: ["offset"]
};
function q4(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Q4(e) {
  return e === xn(e) || !On(e) ? Uy(e) : q4(e);
}
function Z4(e) {
  var t = e.getBoundingClientRect(), n = Ms(t.width) / e.offsetWidth || 1, r = Ms(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function J4(e, t, n) {
  n === void 0 && (n = !1);
  var r = On(t), o = On(t) && Z4(t), i = $o(t), s = Es(e, o, n), a = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((wr(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Wy(i)) && (a = Q4(t)), On(t) ? (l = Es(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : i && (l.x = Hy(i))), {
    x: s.left + a.scrollLeft - l.x,
    y: s.top + a.scrollTop - l.y,
    width: s.width,
    height: s.height
  };
}
function e6(e) {
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
function t6(e) {
  var t = e6(e);
  return f4.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function n6(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function r6(e) {
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
var kC = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function IC() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function o6(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, i = o === void 0 ? kC : o;
  return function(a, l, u) {
    u === void 0 && (u = i);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, kC, i),
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
          reference: ci(a) ? Na(a) : a.contextElement ? Na(a.contextElement) : [],
          popper: Na(l)
        };
        var v = t6(r6([].concat(r, c.options.modifiers)));
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
          if (IC(m, v)) {
            c.rects = {
              reference: J4(m, tu(v), c.options.strategy === "fixed"),
              popper: Fy(v)
            }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(O) {
              return c.modifiersData[O.name] = Object.assign({}, O.data);
            });
            for (var C = 0; C < c.orderedModifiers.length; C++) {
              if (c.reset === !0) {
                c.reset = !1, C = -1;
                continue;
              }
              var b = c.orderedModifiers[C], S = b.fn, k = b.options, I = k === void 0 ? {} : k, $ = b.name;
              typeof S == "function" && (c = S({
                state: c,
                options: I,
                name: $,
                instance: f
              }) || c);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: n6(function() {
        return new Promise(function(x) {
          f.forceUpdate(), x(c);
        });
      }),
      destroy: function() {
        g(), p = !0;
      }
    };
    if (!IC(a, l))
      return f;
    f.setOptions(u).then(function(x) {
      !p && u.onFirstUpdate && u.onFirstUpdate(x);
    });
    function h() {
      c.orderedModifiers.forEach(function(x) {
        var y = x.name, m = x.options, v = m === void 0 ? {} : m, C = x.effect;
        if (typeof C == "function") {
          var b = C({
            state: c,
            name: y,
            instance: f,
            options: v
          }), S = function() {
          };
          d.push(b || S);
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
var i6 = [M4, j4, T4, g4, G4, F4, X4, S4, U4], s6 = /* @__PURE__ */ o6({
  defaultModifiers: i6
});
function Ug(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function nu(e) {
  var t;
  return parseInt(fw, 10) >= 19 ? ((t = e == null ? void 0 : e.props) == null ? void 0 : t.ref) || null : (e == null ? void 0 : e.ref) || null;
}
function a6(e) {
  return typeof e == "function" ? e() : e;
}
const EP = /* @__PURE__ */ ce(function(t, n) {
  const {
    children: r,
    container: o,
    disablePortal: i = !1
  } = t, [s, a] = Le(null), l = ot(/* @__PURE__ */ Zn(r) ? nu(r) : null, n);
  return we(() => {
    i || a(a6(o) || document.body);
  }, [o, i]), we(() => {
    if (s && !i)
      return Ug(n, s), () => {
        Ug(n, null);
      };
  }, [n, s, i]), i ? /* @__PURE__ */ Zn(r) ? /* @__PURE__ */ bo(r, {
    ref: l
  }) : r : s && /* @__PURE__ */ xP.createPortal(r, s);
});
function l6(e) {
  return be("MuiPopper", e);
}
he("MuiPopper", ["root"]);
function u6(e, t) {
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
function AP(e) {
  return typeof e == "function" ? e() : e;
}
function c6(e) {
  return e.nodeType !== void 0;
}
const d6 = (e) => {
  const {
    classes: t
  } = e;
  return ve({
    root: ["root"]
  }, l6, t);
}, f6 = {}, p6 = /* @__PURE__ */ ce(function(t, n) {
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
  } = t, y = V(null), m = ot(y, n), v = V(null), C = ot(v, d), b = V(C);
  we(() => {
    b.current = C;
  }, [C]), Rs(d, () => v.current, []);
  const S = u6(u, i), [k, I] = Le(S), $ = Se(() => AP(r), [r]);
  fe(() => {
    v.current && v.current.forceUpdate();
  }), we(() => {
    if (!$ || !l)
      return;
    const T = (A) => {
      I(A.placement);
    };
    let P = [{
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
        state: A
      }) => {
        T(A);
      }
    }];
    a != null && (P = P.concat(a)), c && c.modifiers != null && (P = P.concat(c.modifiers));
    const _ = s6($, y.current, {
      placement: S,
      ...c,
      modifiers: P
    });
    b.current(_);
    const N = y.current;
    return () => {
      if (N) {
        const {
          style: A
        } = N, D = A.position, z = A.top, U = A.left, W = A.transform;
        _.destroy(), A.position = D, A.top = z, A.left = U, A.transform = W;
      } else
        _.destroy();
      b.current(null);
    };
  }, [$, s, a, l, c, S]);
  const O = {
    placement: k
  };
  h !== null && (O.TransitionProps = h);
  const R = d6(t), w = f.root ?? "div", E = xr({
    elementType: w,
    externalSlotProps: p.root,
    externalForwardedProps: x,
    additionalProps: {
      role: "tooltip",
      ref: m
    },
    ownerState: t,
    className: R.root
  });
  return /* @__PURE__ */ M(w, {
    ...E,
    children: typeof o == "function" ? o(O) : o
  });
}), h6 = /* @__PURE__ */ ce(function(t, n) {
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
    popperOptions: p = f6,
    popperRef: f,
    style: h,
    transition: g = !1,
    slotProps: x = {},
    slots: y = {},
    ...m
  } = t, [v, C] = Le(!0), b = () => {
    C(!1);
  }, S = () => {
    C(!0);
  };
  if (!l && !c && (!g || v))
    return null;
  let k;
  if (i)
    k = i;
  else if (r) {
    const O = AP(r);
    k = O && c6(O) ? St(O).body : St(null).body;
  }
  const I = !c && l && (!g || v) ? "none" : void 0, $ = g ? {
    in: c,
    onEnter: b,
    onExited: S
  } : void 0;
  return /* @__PURE__ */ M(EP, {
    disablePortal: a,
    container: k,
    children: /* @__PURE__ */ M(p6, {
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
        display: I,
        ...h
      },
      TransitionProps: $,
      children: o
    })
  });
}), g6 = K(h6, {
  name: "MuiPopper",
  slot: "Root"
})({}), m6 = /* @__PURE__ */ ce(function(t, n) {
  const r = Ls(), o = We({
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
  return /* @__PURE__ */ M(g6, {
    as: s,
    direction: r ? "rtl" : "ltr",
    slots: x,
    slotProps: y,
    ...v,
    ref: n
  });
});
function y6(e) {
  const {
    children: t,
    defer: n = !1,
    fallback: r = null
  } = e, [o, i] = Le(!1);
  return we(() => {
    n || i(!0);
  }, [n]), fe(() => {
    n && i(!0);
  }, [n]), o ? t : r;
}
function v6(e) {
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
function x6() {
  const e = me(), t = e.use(hk), n = e.use(Hn);
  return t !== void 0 ? "polar" : n !== void 0 ? "cartesian" : "none";
}
const C6 = ["trigger", "position", "anchor", "classes", "children"], TC = () => !1, w6 = () => null;
function S6(e, t, n) {
  return n ? TC : e === "item" ? RD : t === "polar" ? l5 : t === "cartesian" ? xD : TC;
}
const b6 = {
  item: "node",
  axis: "chart",
  none: "pointer"
}, k6 = (e, t) => {
  switch (e) {
    case "node":
      return t;
    case "chart":
      return CD;
    default:
      return w6;
  }
}, I6 = K(m6, {
  name: "MuiChartsTooltip",
  slot: "Root"
})(({
  theme: e
}) => ({
  pointerEvents: "none",
  zIndex: e.zIndex.modal
}));
function T6(e) {
  var _;
  const t = cn({
    props: e,
    name: "MuiChartsTooltipContainer"
  }), {
    trigger: n = "axis",
    position: r,
    anchor: o = "pointer",
    classes: i,
    children: s
  } = t, a = ke(t, C6), l = me(), u = _0(), [c, d] = Le(null), p = hi(i), f = l.use(QN), h = KF(), g = V(null), x = Al(() => ({
    x: 0,
    y: 0
  })), y = x6(), m = l.use(pD), v = l.use(S6(n, y, m)), S = l.use(Kr) === "keyboard" || f === null ? b6[n] : o, k = l.use(Mf), I = l.use(lt), $ = k && ((_ = I[k.type]) == null ? void 0 : _.selectorTooltipItemPosition) || OD, O = l.use(k6(S, $), t.position), R = O !== null;
  fe(() => {
    const N = u.current;
    if (N === null)
      return () => {
      };
    if (R)
      return;
    const A = v6((z, U) => {
      var W;
      x.current = {
        x: z,
        y: U
      }, (W = g.current) == null || W.update();
    }), D = (z) => {
      A(z.clientX, z.clientY);
    };
    return N.addEventListener("pointermove", D), N.addEventListener("pointerenter", D), () => {
      N.removeEventListener("pointermove", D), N.removeEventListener("pointerenter", D), A.clear();
    };
  }, [u, x, R]), we(() => {
    var N;
    R && ((N = g.current) == null || N.update());
  }, [R, O == null ? void 0 : O.x, O == null ? void 0 : O.y]);
  const w = Se(() => ({
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
  }), [x]), E = f === "mouse" || h, T = f === "touch" || !h, P = Se(() => [
    {
      name: "offset",
      options: {
        offset: () => T && !R ? [0, 64] : [0, 8]
      }
    },
    ...E ? [] : [{
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
  ], [E, R, T]);
  return n === "none" ? null : /* @__PURE__ */ oe(He, {
    children: [u.current && /* @__PURE__ */ xP.createPortal(/* @__PURE__ */ M("div", {
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
    }), u.current), /* @__PURE__ */ M(y6, {
      children: v && /* @__PURE__ */ dr(I6, L({}, a, {
        // The key is here to make sure the tooltip uses the new anchor immediately.
        key: O ? "charts-anchored" : "charts-pointer",
        className: p == null ? void 0 : p.root,
        open: v,
        placement: a.placement ?? r ?? (!R && E ? "right-start" : "top"),
        popperRef: g,
        anchorEl: O ? c : w,
        modifiers: P,
        container: a.container ?? u.current,
        popperOptions: L({}, a.popperOptions, {
          strategy: "fixed"
        })
      }), s)
    })]
  });
}
const P6 = ["classes", "trigger", "sort"];
function M6(e) {
  const {
    classes: t,
    trigger: n = "axis",
    sort: r
  } = e, o = ke(e, P6), i = hi(t);
  return /* @__PURE__ */ M(T6, L({}, o, {
    trigger: n,
    classes: t,
    children: n === "axis" ? /* @__PURE__ */ M(qF, {
      classes: i,
      sort: r
    }) : /* @__PURE__ */ M(UF, {
      classes: i
    })
  }));
}
const E6 = (e) => ({
  type: "series",
  color: e.color,
  label: e.label,
  seriesId: e.seriesId,
  dataIndex: e.dataIndex
});
function A6(e) {
  return be("MuiChartsLegend", e);
}
const R6 = (e) => {
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
  }, A6, t);
}, ch = he("MuiChartsLegend", ["root", "item", "series", "mark", "label", "vertical", "horizontal", "hidden"]), _6 = ["slots", "slotProps"], O6 = ["ownerState"], $6 = (e, t, n, r) => {
  function o(i, s) {
    var b;
    const a = cn({
      props: i,
      // eslint-disable-next-line mui/material-ui-name-matches-component-name
      name: e
    }), l = typeof n.defaultProps == "function" ? n.defaultProps(a) : n.defaultProps ?? {}, u = vo(l, a), c = u, {
      slots: d,
      slotProps: p
    } = c, f = ke(c, _6), h = Qt(), g = (b = n.classesResolver) == null ? void 0 : b.call(n, u, h), x = (d == null ? void 0 : d[t]) ?? r, y = n.propagateSlots && !(d != null && d[t]), m = xr({
      elementType: x,
      externalSlotProps: p == null ? void 0 : p[t],
      additionalProps: L({}, f, {
        classes: g
      }, y && {
        slots: d,
        slotProps: p
      }),
      ownerState: {}
    }), v = ke(m, O6), C = L({}, v);
    for (const S of n.omitProps ?? [])
      delete C[S];
    return /* @__PURE__ */ M(x, L({}, C, {
      ref: s
    }));
  }
  return /* @__PURE__ */ ce(o);
};
function L6(e) {
  return be("MuiChartsLabel", e);
}
he("MuiChartsLabel", ["root"]);
const N6 = (e) => ve({
  root: ["root"]
}, L6, e.classes), D6 = ["children", "className", "classes"], PC = yI("MuiChartsLabel", {
  classesResolver: N6
}, function(t, n) {
  const {
    children: r,
    className: o,
    classes: i
  } = t, s = ke(t, D6);
  return /* @__PURE__ */ M("span", L({
    className: ie(i == null ? void 0 : i.root, o),
    ref: n
  }, s, {
    children: r
  }));
}), z6 = ["direction", "onItemClick", "className", "classes", "toggleVisibilityOnClick"], F6 = K("ul", {
  name: "MuiChartsLegend",
  slot: "Root"
})(({
  ownerState: e,
  theme: t
}) => L({}, t.typography.caption, {
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
  [`button.${ch.series}`]: {
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
  [`& .${ch.series}`]: {
    display: e.direction === "vertical" ? "flex" : "inline-flex",
    alignItems: "center",
    gap: t.spacing(1),
    cursor: e.onItemClick || e.toggleVisibilityOnClick ? "pointer" : "default",
    [`&.${ch.hidden}`]: {
      opacity: 0.5
    }
  },
  gridArea: "legend"
})), B6 = $6("MuiChartsLegend", "legend", {
  defaultProps: {
    direction: "horizontal"
  },
  // @ts-expect-error position is used only in the slots, but it is passed to the SVG wrapper.
  // We omit it here to avoid passing to slots.
  omitProps: ["position"],
  classesResolver: R6
}, /* @__PURE__ */ ce(function(t, n) {
  const r = m5(), {
    instance: o
  } = Pt(), s = me().use(t0), {
    onItemClick: a,
    className: l,
    classes: u,
    toggleVisibilityOnClick: c
  } = t, d = ke(t, z6), p = !!(a || c), f = ge((h, g) => (x) => {
    a && h && a(x, E6(h), g), c && o.toggleItemVisibility({
      type: h.type,
      seriesId: h.seriesId,
      dataIndex: h.dataIndex
    });
  });
  return r.items.length === 0 ? null : /* @__PURE__ */ M(F6, L({
    className: ie(u == null ? void 0 : u.root, l),
    ref: n
  }, d, {
    ownerState: t,
    children: r.items.map((h, g) => {
      const x = s({
        type: h.type,
        seriesId: h.seriesId,
        dataIndex: h.dataIndex
      });
      return /* @__PURE__ */ M("li", {
        className: u == null ? void 0 : u.item,
        "data-series": h.seriesId,
        "data-index": h.dataIndex,
        children: p ? /* @__PURE__ */ oe("button", {
          className: ie(u == null ? void 0 : u.series, !x && (u == null ? void 0 : u.hidden)),
          onClick: f(h, g),
          type: "button",
          children: [/* @__PURE__ */ M(tl, {
            className: u == null ? void 0 : u.mark,
            color: h.color,
            type: h.markType,
            markShape: h.markShape
          }), /* @__PURE__ */ M(PC, {
            className: u == null ? void 0 : u.label,
            children: h.label
          })]
        }) : /* @__PURE__ */ oe("div", {
          className: ie(u == null ? void 0 : u.series, !x && (u == null ? void 0 : u.hidden)),
          children: [/* @__PURE__ */ M(tl, {
            className: u == null ? void 0 : u.mark,
            color: h.color,
            type: h.markType,
            markShape: h.markShape
          }), /* @__PURE__ */ M(PC, {
            className: u == null ? void 0 : u.label,
            children: h.label
          })]
        })
      }, `${h.seriesId}-${h.dataIndex}`);
    })
  }));
}));
function U6(e) {
  return be("MuiChartsAxisHighlight", e);
}
he("MuiChartsAxisHighlight", ["root"]);
const fd = K("path", {
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
    style: L({
      fill: "white",
      fillOpacity: 0.1
    }, e.applyStyles("light", {
      fill: "gray"
    }))
  }, {
    props: {
      axisHighlight: "line"
    },
    style: L({
      strokeDasharray: "5 2",
      stroke: "#ffffff"
    }, e.applyStyles("light", {
      stroke: "#000000"
    }))
  }]
}));
function H6(e) {
  const {
    type: t,
    classes: n
  } = e, {
    left: r,
    width: o
  } = Wn(), i = me(), s = i.use(gD), a = i.use(Tt);
  return s.length === 0 ? null : s.map(({
    axisId: l,
    value: u
  }) => {
    const d = a.axis[l].scale, p = Cr(d), f = t === "band" && u !== null && st(d);
    return /* @__PURE__ */ oe(He, {
      children: [f && d(u) !== void 0 && /* @__PURE__ */ M(fd, {
        d: `M ${r} ${d(u) - (d.step() - d.bandwidth()) / 2} l 0 ${d.step()} l ${o} 0 l 0 ${-d.step()} Z`,
        className: n.root,
        ownerState: {
          axisHighlight: "band"
        }
      }), t === "line" && u !== null && /* @__PURE__ */ M(fd, {
        d: `M ${r} ${p(u)} L ${r + o} ${p(u)}`,
        className: n.root,
        ownerState: {
          axisHighlight: "line"
        }
      })]
    }, `${l}-${u}`);
  });
}
function W6(e) {
  const {
    type: t,
    classes: n
  } = e, {
    top: r,
    height: o
  } = Wn(), i = me(), s = i.use(hD), a = i.use(It);
  return s.length === 0 ? null : s.map(({
    axisId: l,
    value: u
  }) => {
    const d = a.axis[l].scale, p = Cr(d), f = t === "band" && u !== null && st(d);
    return /* @__PURE__ */ oe(He, {
      children: [f && d(u) !== void 0 && /* @__PURE__ */ M(fd, {
        d: `M ${d(u) - (d.step() - d.bandwidth()) / 2} ${r} l ${d.step()} 0 l 0 ${o} l ${-d.step()} 0 Z`,
        className: n.root,
        ownerState: {
          axisHighlight: "band"
        }
      }), t === "line" && u !== null && /* @__PURE__ */ M(fd, {
        d: `M ${p(u)} ${r} L ${p(u)} ${r + o}`,
        className: n.root,
        ownerState: {
          axisHighlight: "line"
        }
      })]
    }, `${l}-${u}`);
  });
}
const G6 = () => ve({
  root: ["root"]
}, U6);
function V6(e) {
  const {
    x: t,
    y: n
  } = e, r = G6();
  return /* @__PURE__ */ oe(He, {
    children: [t && t !== "none" && /* @__PURE__ */ M(W6, {
      type: t,
      classes: r
    }), n && n !== "none" && /* @__PURE__ */ M(H6, {
      type: n,
      classes: r
    })]
  });
}
function j6(e) {
  const {
    id: t,
    offset: n
  } = e, {
    left: r,
    top: o,
    width: i,
    height: s
  } = Wn(), a = L({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }, n);
  return /* @__PURE__ */ M("clipPath", {
    id: t,
    children: /* @__PURE__ */ M("rect", {
      x: r - a.left,
      y: o - a.top,
      width: i + a.left + a.right,
      height: s + a.top + a.bottom
    })
  });
}
const Y6 = ["x", "y", "seriesId", "color", "shape"];
function K6(e) {
  const {
    x: t,
    y: n,
    color: r,
    shape: o
  } = e, i = ke(e, Y6), s = Ao(), a = o === "circle" ? "circle" : "path", l = o === "circle" ? {
    cx: 0,
    cy: 0,
    r: i.r === void 0 ? 5 : i.r
  } : {
    d: D0(N0[G0(o)])()
  }, u = xS > 18 ? {
    transformOrigin: `${t} ${n}`
  } : {
    "transform-origin": `${t} ${n}`
  };
  return /* @__PURE__ */ M(a, L({
    pointerEvents: "none",
    className: s.highlight,
    transform: `translate(${t} ${n})`,
    fill: r
  }, u, l, i));
}
const X6 = ["slots", "slotProps"];
function q6(e) {
  const {
    slots: t,
    slotProps: n
  } = e, r = ke(e, X6), o = Xl(), {
    xAxis: i,
    xAxisIds: s
  } = Ut(), {
    yAxis: a,
    yAxisIds: l
  } = Ht(), {
    instance: u
  } = Pt(), d = me().use(ik);
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
  const m = (t == null ? void 0 : t.lineHighlight) ?? K6;
  return /* @__PURE__ */ M("g", L({}, r, {
    children: f.flatMap(({
      ids: v
    }) => v.flatMap((C) => {
      const {
        xAxisId: b = h,
        yAxisId: S = g,
        visibleStackedData: k,
        data: I,
        disableHighlight: $,
        showMark: O,
        shape: R = "circle",
        hidden: w
      } = p[C];
      if (w)
        return null;
      const E = $ ? void 0 : y.get(b), T = O === "start" || O === "end" ? Q6(I, O) : void 0, P = E ?? T;
      if (P === void 0 || I[P] == null)
        return null;
      const _ = Cr(i[b].scale), N = a[S].scale, A = i[b].data;
      if (A === void 0)
        throw new Error(Me(10, b === Pm ? "The first `xAxis`" : `The x-axis with id "${b}"`));
      const D = _(A[P]), z = N(k[P][1]);
      if (!u.isPointInside(D, z))
        return null;
      const U = V0(p[C], i[b], a[S]);
      return /* @__PURE__ */ M(m, L({
        seriesId: C,
        color: U(P),
        x: D,
        y: z,
        shape: R
      }, n == null ? void 0 : n.lineHighlight), `${C}`);
    }))
  }));
}
function Q6(e, t) {
  if (t === "start") {
    const r = e.findIndex((o) => o != null);
    return r < 0 ? void 0 : r;
  }
  const n = e.findLastIndex((r) => r != null);
  return n < 0 ? void 0 : n;
}
function Z6(e) {
  return be("MuiChartsGrid", e);
}
const MC = he("MuiChartsGrid", ["root", "line", "horizontalLine", "verticalLine"]), J6 = K("g", {
  name: "MuiChartsGrid",
  slot: "Root",
  overridesResolver: (e, t) => [{
    [`& .${MC.verticalLine}`]: t.verticalLine
  }, {
    [`& .${MC.horizontalLine}`]: t.horizontalLine
  }, t.root]
})({}), RP = K("line", {
  name: "MuiChartsGrid",
  slot: "Line"
})(({
  theme: e
}) => ({
  stroke: (e.vars || e).palette.divider,
  shapeRendering: "crispEdges",
  strokeWidth: 1
}));
function eU(e) {
  const {
    instance: t
  } = Pt(), {
    axis: n,
    start: r,
    end: o,
    classes: i
  } = e, {
    scale: s,
    tickNumber: a,
    tickInterval: l,
    tickSpacing: u
  } = n, c = Ff({
    scale: s,
    tickNumber: a,
    tickInterval: l,
    tickSpacing: u,
    direction: "x",
    ordinalTimeTicks: "ordinalTimeTicks" in n ? n.ordinalTimeTicks : void 0
  });
  return /* @__PURE__ */ M(He, {
    children: c.map(({
      value: d,
      offset: p
    }) => {
      var f;
      return t.isXInside(p) ? /* @__PURE__ */ M(RP, {
        y1: r,
        y2: o,
        x1: p,
        x2: p,
        className: i.verticalLine
      }, `vertical-${((f = d == null ? void 0 : d.getTime) == null ? void 0 : f.call(d)) ?? d}`) : null;
    })
  });
}
function tU(e) {
  const {
    instance: t
  } = Pt(), {
    axis: n,
    start: r,
    end: o,
    classes: i
  } = e, {
    scale: s,
    tickNumber: a,
    tickInterval: l,
    tickSpacing: u
  } = n, c = Ff({
    scale: s,
    tickNumber: a,
    tickInterval: l,
    tickSpacing: u,
    direction: "y",
    ordinalTimeTicks: "ordinalTimeTicks" in n ? n.ordinalTimeTicks : void 0
  });
  return /* @__PURE__ */ M(He, {
    children: c.map(({
      value: d,
      offset: p
    }) => {
      var f;
      return t.isYInside(p) ? /* @__PURE__ */ M(RP, {
        y1: p,
        y2: p,
        x1: r,
        x2: o,
        className: i.horizontalLine
      }, `horizontal-${((f = d == null ? void 0 : d.getTime) == null ? void 0 : f.call(d)) ?? d}`) : null;
    })
  });
}
const nU = ["className", "vertical", "horizontal"], rU = ({
  classes: e
}) => ve({
  root: ["root"],
  verticalLine: ["line", "verticalLine"],
  horizontalLine: ["line", "horizontalLine"]
}, Z6, e);
function oU(e) {
  const t = cn({
    props: e,
    name: "MuiChartsGrid"
  }), n = Wn(), {
    className: r,
    vertical: o,
    horizontal: i
  } = t, s = ke(t, nU), {
    xAxis: a,
    xAxisIds: l
  } = Ut(), {
    yAxis: u,
    yAxisIds: c
  } = Ht(), d = rU(t), p = u[c[0]], f = a[l[0]];
  return /* @__PURE__ */ oe(J6, L({}, s, {
    className: ie(d.root, r),
    children: [o && /* @__PURE__ */ M(eU, {
      axis: f,
      start: n.top,
      end: n.height + n.top,
      classes: d
    }), i && /* @__PURE__ */ M(tU, {
      axis: p,
      start: n.left,
      end: n.width + n.left,
      classes: d
    })]
  }));
}
const _P = K("text", {
  slot: "internal",
  shouldForwardProp: void 0
})(({
  theme: e
}) => L({}, e.typography.body2, {
  stroke: "none",
  fill: (e.vars || e).palette.text.primary,
  shapeRendering: "crispEdges",
  textAnchor: "middle",
  dominantBaseline: "middle"
}));
function iU(e) {
  const {
    top: t,
    left: n,
    height: r,
    width: o
  } = Wn(), {
    localeText: i
  } = F0();
  return /* @__PURE__ */ M(_P, L({
    x: n + o / 2,
    y: t + r / 2
  }, e, {
    children: i.loading
  }));
}
function sU(e) {
  const {
    top: t,
    left: n,
    height: r,
    width: o
  } = Wn(), {
    localeText: i
  } = F0();
  return /* @__PURE__ */ M(_P, L({
    x: n + o / 2,
    y: t + r / 2
  }, e, {
    children: i.noData
  }));
}
function aU() {
  const e = Kl();
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
function lU(e) {
  var n, r, o, i;
  const t = aU();
  if (e.loading) {
    const s = ((n = e.slots) == null ? void 0 : n.loadingOverlay) ?? iU;
    return /* @__PURE__ */ M(s, L({}, (r = e.slotProps) == null ? void 0 : r.loadingOverlay));
  }
  if (t) {
    const s = ((o = e.slots) == null ? void 0 : o.noDataOverlay) ?? sU;
    return /* @__PURE__ */ M(s, L({}, (i = e.slotProps) == null ? void 0 : i.noDataOverlay));
  }
  return null;
}
const uU = [zl, Ul, Hl, Bl, Bs, Gl, mf, Pf], cU = ["xAxis", "yAxis", "series", "width", "height", "margin", "colors", "dataset", "sx", "onAreaClick", "onLineClick", "onMarkClick", "axisHighlight", "disableLineItemHighlight", "hideLegend", "grid", "children", "slots", "slotProps", "skipAnimation", "loading", "highlightedItem", "onHighlightChange", "className", "showToolbar", "brushConfig"], dU = (e) => {
  var ee, ne, Z, H, X;
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
    highlightedItem: b,
    onHighlightChange: S,
    className: k,
    brushConfig: I
  } = e, $ = ke(e, cU), R = `${Co()}-clip-path`, w = Se(() => r.map((re) => L({
    disableHighlight: !!h,
    type: "line"
  }, re)), [h, r]), E = L({}, $, {
    series: w,
    width: o,
    height: i,
    margin: s,
    colors: a,
    dataset: l,
    xAxis: t ?? [{
      id: Pm,
      scaleType: "point",
      data: Array.from({
        length: Math.max(...r.map((re) => (re.data ?? l ?? []).length))
      }, (re, B) => B)
    }],
    yAxis: n,
    highlightedItem: b,
    onHighlightChange: S,
    disableAxisListener: ((ee = m == null ? void 0 : m.tooltip) == null ? void 0 : ee.trigger) !== "axis" && (f == null ? void 0 : f.x) === "none" && (f == null ? void 0 : f.y) === "none",
    skipAnimation: v,
    brushConfig: I,
    plugins: uU
  }), T = {
    vertical: g == null ? void 0 : g.vertical,
    horizontal: g == null ? void 0 : g.horizontal
  }, P = {
    clipPath: `url(#${R})`
  }, _ = {
    id: R
  }, N = {
    slots: y,
    slotProps: m,
    onItemClick: c
  }, A = {
    slots: y,
    slotProps: m,
    onItemClick: d
  }, D = {
    slots: y,
    slotProps: m,
    onItemClick: p,
    skipAnimation: v
  }, z = {
    slots: y,
    slotProps: m,
    loading: C
  }, U = {
    slots: y,
    slotProps: m
  }, W = L({
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
      legendDirection: (X = (H = e.slotProps) == null ? void 0 : H.legend) == null ? void 0 : X.direction,
      hideLegend: e.hideLegend ?? !1,
      className: k
    },
    chartsContainerProps: E,
    gridProps: T,
    clipPathProps: _,
    clipPathGroupProps: P,
    areaPlotProps: N,
    linePlotProps: A,
    markPlotProps: D,
    overlayProps: z,
    chartsAxisProps: U,
    axisHighlightProps: W,
    lineHighlightPlotProps: q,
    legendProps: J,
    children: x
  };
}, fU = 50;
function pU(e, t, n, r, o, i, s, a, l, u, c = 1 / 0, d = 1, p = 0) {
  const f = n.copy(), h = r.copy();
  f.range([0, 1]), h.range([0, 1]);
  const g = function(E) {
    const T = f(t[E].x), P = h(t[E].y);
    return T >= o && T <= i && P >= s && P <= a;
  }, x = n.range()[1] - n.range()[0], y = r.range()[1] - r.range()[0], m = x * x, v = y * y;
  function C(w, E) {
    return m * w * w + v * E * E;
  }
  const b = f(EC(n, l, (w) => {
    var E;
    return (E = t[w]) == null ? void 0 : E.x;
  })), S = h(EC(r, u, (w) => {
    var E;
    return (E = t[w]) == null ? void 0 : E.y;
  }));
  if (b === void 0 || S === void 0)
    return [];
  const k = typeof p == "number", I = Number.isFinite(c) ? c * c : 1 / 0, $ = e.neighbors(b, S, k ? d : fU, I, g, C);
  if (k)
    return $;
  let O = [];
  for (const w of $) {
    const E = f(t[w].x), T = h(t[w].y), P = C(E - b, T - S);
    if (P > I)
      continue;
    const _ = Math.sqrt(P) - p(w);
    O.push({
      index: w,
      edge: _,
      centerDistSq: P
    });
  }
  O.sort((w, E) => w.edge - E.edge);
  const R = O.findLastIndex((w) => w.edge < 0);
  return R !== -1 && (O = [...O.slice(0, R + 1).sort((w, E) => w.centerDistSq - E.centerDistSq), ...O.slice(R + 1)]), O.slice(0, Math.min(O.length, d)).map((w) => w.index);
}
function EC(e, t, n) {
  if (st(e)) {
    const r = e.bandwidth() === 0 ? Math.floor((t - Math.min(...e.range()) + e.step() / 2) / e.step()) : Math.floor((t - Math.min(...e.range())) / e.step());
    return n(r);
  }
  return e.invert(t);
}
function hU(e, t) {
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
const sp = ({
  params: e,
  store: t,
  instance: n
}) => {
  var b;
  const {
    chartsLayerContainerRef: r
  } = n, {
    disableHitArea: o,
    hitAreaRadius: i,
    onItemClick: s
  } = e, a = o, l = i, {
    axis: u,
    axisIds: c
  } = t.use(It), {
    axis: d,
    axisIds: p
  } = t.use(Tt), f = t.use(kf), {
    series: h,
    seriesOrder: g
  } = ((b = t.use(Ae)) == null ? void 0 : b.scatter) ?? {}, x = t.use(f ? KN : XN), y = c[0], m = p[0];
  we(() => {
    t.set("voronoi", {
      isVoronoiEnabled: !a
    });
  }, [t, a]), fe(() => {
    if (r.current === null || a)
      return;
    const S = r.current;
    function k(_) {
      const N = hs(S, _);
      if (!n.isPointInside(N.x, N.y))
        return "outside-chart";
      let A;
      for (const D of g ?? []) {
        const z = (h ?? {})[D], U = x.get(D);
        if (!U || z.hidden)
          continue;
        const {
          flatbush: W,
          getItemRadius: q,
          maxItemRadius: J
        } = U, ae = z.xAxisId ?? y, ee = z.yAxisId ?? m, ne = Wx(t.state, ae), Z = Wx(t.state, ee), H = l === "item" ? J : l, X = ((ne == null ? void 0 : ne.start) ?? 0) / 100, re = ((ne == null ? void 0 : ne.end) ?? 100) / 100, B = ((Z == null ? void 0 : Z.start) ?? 0) / 100, ue = ((Z == null ? void 0 : Z.end) ?? 100) / 100, Q = u[ae].scale, Ie = d[ee].scale, xe = pU(W, z.data, Q, Ie, X, re, B, ue, N.x, N.y, H, 1, q)[0];
        if (xe === void 0)
          continue;
        const Te = z.data[xe], Mt = Q(Te.x), Ye = Ie(Te.y), Wt = Math.hypot(Mt - N.x, Ye - N.y), Gt = typeof q == "number" ? q : q(xe), fn = Wt - Gt;
        if (l === "item" && fn > 0)
          continue;
        const ut = {
          dataIndex: xe,
          seriesId: D,
          edgeDistance: fn,
          radius: Gt
        };
        hU(ut, A) && (A = ut);
      }
      return A === void 0 ? "no-point-found" : {
        seriesId: A.seriesId,
        dataIndex: A.dataIndex
      };
    }
    const I = n.addInteractionListener("moveEnd", (_) => {
      var N, A, D;
      _.detail.activeGestures.pan || ((N = n.cleanInteraction) == null || N.call(n), (A = n.clearHighlight) == null || A.call(n), (D = n.removeTooltipItem) == null || D.call(n));
    }), $ = n.addInteractionListener("panEnd", (_) => {
      var N, A, D;
      _.detail.activeGestures.move || ((N = n.cleanInteraction) == null || N.call(n), (A = n.clearHighlight) == null || A.call(n), (D = n.removeTooltipItem) == null || D.call(n));
    }), O = n.addInteractionListener("quickPressEnd", (_) => {
      var N, A, D;
      !_.detail.activeGestures.move && !_.detail.activeGestures.pan && ((N = n.cleanInteraction) == null || N.call(n), (A = n.clearHighlight) == null || A.call(n), (D = n.removeTooltipItem) == null || D.call(n));
    }), R = (_) => {
      var z, U, W, q, J, ae, ee, ne, Z;
      const N = k(_.detail.srcEvent);
      if (N === "outside-chart") {
        (z = n.cleanInteraction) == null || z.call(n), (U = n.clearHighlight) == null || U.call(n), (W = n.removeTooltipItem) == null || W.call(n);
        return;
      }
      if (N === "outside-voronoi-max-radius" || N === "no-point-found") {
        (q = n.removeTooltipItem) == null || q.call(n), (J = n.clearHighlight) == null || J.call(n), (ae = n.removeTooltipItem) == null || ae.call(n);
        return;
      }
      const {
        seriesId: A,
        dataIndex: D
      } = N;
      (ee = n.setTooltipItem) == null || ee.call(n, {
        type: "scatter",
        seriesId: A,
        dataIndex: D
      }), (ne = n.setLastUpdateSource) == null || ne.call(n, "pointer"), (Z = n.setHighlight) == null || Z.call(n, {
        type: "scatter",
        seriesId: A,
        dataIndex: D
      });
    }, w = n.addInteractionListener("tap", (_) => {
      const N = k(_.detail.srcEvent);
      if (typeof N != "string" && s) {
        const {
          seriesId: A,
          dataIndex: D
        } = N;
        s(_.detail.srcEvent, {
          type: "scatter",
          seriesId: A,
          dataIndex: D
        });
      }
    }), E = n.addInteractionListener("move", R), T = n.addInteractionListener("pan", R), P = n.addInteractionListener("quickPress", R);
    return () => {
      w.cleanup(), E.cleanup(), I.cleanup(), T.cleanup(), $.cleanup(), P.cleanup(), O.cleanup();
    };
  }, [r, d, u, l, s, a, n, g, h, x, y, m, t]);
  const v = ge(() => {
    t.set("voronoi", {
      isVoronoiEnabled: !0
    });
  }), C = ge(() => {
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
sp.getDefaultizedParams = ({
  params: e
}) => L({}, e, {
  disableHitArea: e.disableHitArea ?? !e.series.some((t) => t.type === "scatter")
});
sp.getInitialState = (e) => ({
  voronoi: {
    isVoronoiEnabled: !e.disableHitArea
  }
});
sp.params = {
  disableHitArea: !0,
  hitAreaRadius: !0,
  onItemClick: !0
};
const gU = 2e4, mU = 5, OP = 1e3, yU = 1e4, vU = (e, t) => {
  const n = Math.max(1, e), r = Math.max(1, t), o = Math.min(yU, Math.max(OP, Math.ceil(r / mU)));
  return Math.max(1, Math.floor(o / n));
}, $P = (e) => e.progressiveRendering, LP = j($P, (e) => e == null ? void 0 : e.plans), Hg = j($P, (e) => (e == null ? void 0 : e.revealedRounds) ?? 0);
function NP(e, t) {
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
const Gy = de(LP, Ae, function(t, n) {
  const r = /* @__PURE__ */ new Map();
  if (!t || t.size === 0)
    return {
      nBatchesBySeries: r,
      totalRounds: 0,
      batchSize: OP
    };
  let o = 0, i = 0;
  const s = /* @__PURE__ */ new Map();
  t.forEach((u) => {
    u.forEach((c) => {
      const d = NP(n, c);
      s.set(c, d), o += 1, i += d;
    });
  });
  const a = vU(o, i);
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
j(Gy, (e) => e.batchSize);
const AC = j(Gy, (e) => e.totalRounds);
function xU(e, t, n) {
  return Math.min(n ? 1 : t, e);
}
j(Gy, Hg, kf, function(t, n, r, o) {
  const i = t.nBatchesBySeries.get(o) ?? 0;
  return xU(i, n, r);
});
const CU = (e) => Dl(e, "progressiveRendering"), wU = j(Ae, CU, (e, t, n, r) => {
  if (r === "svg-single" || r === "svg-batch")
    return !1;
  if (r === "svg-progressive")
    return !0;
  if (!t)
    return !1;
  let o = 0;
  for (const i of n)
    o += NP(e, i);
  return o > gU;
});
function SU(e, t) {
  if (!e || e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n += 1)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
const DP = /* @__PURE__ */ new Map(), bU = 1, kU = 1, IU = 200, Vy = ({
  store: e
}) => {
  const t = ge((o, i, s) => {
    if (!wU(e.state, i, s))
      return;
    const a = e.state.progressiveRendering.plans.get(o);
    if (!SU(a, i)) {
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
      l.delete(o), e.set("progressiveRendering", L({}, e.state.progressiveRendering, {
        plans: l
      }));
    };
  }), n = e.use(LP) ?? DP, r = e.use(kf);
  return fe(() => {
    const o = AC(e.state);
    if (o === 0)
      return;
    if (r) {
      const d = Math.min(kU, o);
      Hg(e.state) !== d && e.set("progressiveRendering", L({}, e.state.progressiveRendering, {
        revealedRounds: d
      }));
      return;
    }
    if (typeof requestAnimationFrame != "function") {
      e.set("progressiveRendering", L({}, e.state.progressiveRendering, {
        revealedRounds: o
      }));
      return;
    }
    let i = 0, s, a = !1, l = Hg(e.state);
    function u() {
      i = requestAnimationFrame(() => {
        a || c();
      });
    }
    function c() {
      if (a)
        return;
      const d = AC(e.state);
      l = Math.min(d, l + bU), e.set("progressiveRendering", L({}, e.state.progressiveRendering, {
        revealedRounds: l
      })), l < d && u();
    }
    if (!(l >= o))
      return l > 0 ? s = setTimeout(() => {
        i = requestAnimationFrame(c);
      }, IU) : i = requestAnimationFrame(c), () => {
        a = !0, cancelAnimationFrame(i), s !== void 0 && clearTimeout(s);
      };
  }, [n, r, e]), {
    instance: {
      registerProgressivePlan: t
    }
  };
};
Vy.params = {};
Vy.getInitialState = () => ({
  progressiveRendering: {
    plans: DP,
    revealedRounds: 0
  }
});
const zP = [zl, Ul, Hl, Bl, Bs, Gl, mf, sp, Pf, Vy], TU = ["width", "height", "margin", "children", "series", "colors", "dataset", "desc", "onAxisClick", "highlightedAxis", "onHighlightedAxisChange", "tooltipAxis", "onTooltipAxisChange", "tooltipItem", "onTooltipItemChange", "disableHitArea", "hitAreaRadius", "onItemClick", "disableAxisListener", "highlightedItem", "onHighlightChange", "sx", "title", "axesGap", "xAxis", "yAxis", "zAxis", "rotationAxis", "radiusAxis", "skipAnimation", "seriesConfig", "experimentalFeatures", "plugins", "localeText", "slots", "slotProps", "disableKeyboardNavigation", "brushConfig", "onHiddenItemsChange", "hiddenItems", "initialHiddenItems"], PU = (e) => {
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
    highlightedItem: b,
    onHighlightChange: S,
    sx: k,
    title: I,
    axesGap: $,
    xAxis: O,
    yAxis: R,
    zAxis: w,
    rotationAxis: E,
    radiusAxis: T,
    skipAnimation: P,
    seriesConfig: _,
    experimentalFeatures: N,
    plugins: A,
    localeText: D,
    slots: z,
    slotProps: U,
    disableKeyboardNavigation: W,
    brushConfig: q,
    onHiddenItemsChange: J,
    hiddenItems: ae,
    initialHiddenItems: ee
  } = t, ne = ke(t, TU), Z = L({
    title: I,
    desc: u,
    sx: k
  }, ne);
  return {
    chartsDataProviderProps: {
      margin: o,
      series: s,
      colors: a,
      dataset: l,
      disableAxisListener: C,
      highlightedItem: b,
      onHighlightChange: S,
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
      axesGap: $,
      xAxis: O,
      yAxis: R,
      zAxis: w,
      rotationAxis: E,
      radiusAxis: T,
      skipAnimation: P,
      width: n,
      height: r,
      localeText: D,
      seriesConfig: _,
      experimentalFeatures: N,
      disableKeyboardNavigation: W,
      brushConfig: q,
      onHiddenItemsChange: J,
      hiddenItems: ae,
      initialHiddenItems: ee,
      plugins: A ?? zP,
      slots: z,
      slotProps: U
    },
    chartsSurfaceProps: Z,
    children: i
  };
};
function RC(...e) {
  return e.reduce((t, n) => n == null ? t : function(...o) {
    t.apply(this, o), n.apply(this, o);
  }, () => {
  });
}
function MU(e) {
  return be("MuiSvgIcon", e);
}
he("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const EU = (e) => {
  const {
    color: t,
    fontSize: n,
    classes: r
  } = e, o = {
    root: ["root", t !== "inherit" && `color${Re(t)}`, `fontSize${Re(n)}`]
  };
  return ve(o, MU, r);
}, AU = K("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "inherit" && t[`color${Re(n.color)}`], t[`fontSize${Re(n.fontSize)}`]];
  }
})(je(({
  theme: e
}) => {
  var t, n, r, o, i, s, a, l, u, c, d, p;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    flexShrink: 0,
    ...vt(e, "fill", {
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
})), Wg = /* @__PURE__ */ ce(function(t, n) {
  const r = We({
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
  } = r, h = /* @__PURE__ */ Zn(o) && o.type === "svg", g = {
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
  const y = EU(g);
  return /* @__PURE__ */ oe(AU, {
    as: a,
    className: ie(y.root, i),
    focusable: "false",
    color: u,
    "aria-hidden": d ? void 0 : !0,
    role: d ? "img" : void 0,
    ref: n,
    ...x,
    ...f,
    ...h && o.props,
    ownerState: g,
    children: [h ? o.props.children : o, d ? /* @__PURE__ */ M("title", {
      children: d
    }) : null]
  });
});
Wg.muiName = "SvgIcon";
function RU(e, t) {
  function n(r, o) {
    return /* @__PURE__ */ M(Wg, {
      "data-testid": void 0,
      ref: o,
      ...r,
      children: e
    });
  }
  return n.muiName = Wg.muiName, /* @__PURE__ */ FM(/* @__PURE__ */ ce(n));
}
function _C(e) {
  const {
    controlled: t,
    default: n,
    name: r,
    state: o = "value"
  } = e, {
    current: i
  } = V(t !== void 0), [s, a] = Le(n), l = i ? t : s, u = le((c) => {
    i || a(c);
  }, []);
  return [l, u];
}
function _U(e, t) {
  if (!e)
    return t;
  function n(s, a) {
    const l = {};
    return Object.keys(a).forEach((u) => {
      uS(u, a[u]) && typeof s[u] == "function" && (l[u] = (...c) => {
        s[u](...c), a[u](...c);
      });
    }), l;
  }
  if (typeof e == "function" || typeof t == "function")
    return (s) => {
      const a = typeof t == "function" ? t(s) : t, l = typeof e == "function" ? e({
        ...s,
        ...a
      }) : e, u = ie(s == null ? void 0 : s.className, a == null ? void 0 : a.className, l == null ? void 0 : l.className), c = n(l, a);
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
  const r = t, o = n(e, r), i = ie(r == null ? void 0 : r.className, e == null ? void 0 : e.className);
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
function OC(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
  }
  return !1;
}
function OU(e) {
  const {
    focusableWhenDisabled: t,
    disabled: n,
    composite: r = !1,
    tabIndex: o = 0,
    isNativeButton: i
  } = e, s = r && t !== !1, a = r && t === !1;
  return Se(() => {
    const u = {
      // allow Tabbing away from focusableWhenDisabled elements
      onKeyDown(c) {
        n && t && c.key !== "Tab" && c.preventDefault();
      }
    };
    return r || (u.tabIndex = o, !i && n && (u.tabIndex = t ? o : -1)), (i && (t || s) || !i && n) && (u["aria-disabled"] = n), i && (!t || a) && (u.disabled = n), u;
  }, [r, n, t, s, a, i, o]);
}
const $U = {};
function LU(e) {
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
  } = e, c = V(null), d = s === !0, p = OU({
    focusableWhenDisabled: d,
    disabled: n,
    isNativeButton: t,
    tabIndex: i
  }), f = le(() => {
    const x = c.current;
    return x == null ? t : x.tagName === "BUTTON" ? !0 : !!(x.tagName === "A" && x.href);
  }, [t]), h = Se(() => {
    const x = d ? {} : {
      tabIndex: n ? -1 : i
    };
    return t ? (x.type = r === void 0 && !o ? "button" : r, d || (x.disabled = n)) : (x.role = "button", !d && n && (x["aria-disabled"] = n)), d ? {
      ...x,
      ...p
    } : x;
  }, [n, d, p, o, t, i, r]);
  return {
    getButtonProps: le((x = $U) => {
      const {
        onClick: y,
        onKeyDown: m,
        onKeyUp: v,
        ...C
      } = x;
      return {
        ...h,
        ...C,
        onClick: (I) => {
          if (a && I.stopPropagation(), n) {
            I.preventDefault();
            return;
          }
          y == null || y(I);
        },
        onKeyDown: (I) => {
          if (d && p.onKeyDown(I), !n && (l == null || l(I), m == null || m(I), !(I.target !== I.currentTarget || f()))) {
            if (I.key === " ") {
              I.preventDefault();
              return;
            }
            I.key === "Enter" && (I.preventDefault(), I.currentTarget.click());
          }
        },
        onKeyUp: (I) => {
          n || (u == null || u(I), v == null || v(I), I.target === I.currentTarget && !f() && I.key === " " && !I.defaultPrevented && I.currentTarget.click());
        }
      };
    }, [h, n, d, p, f, l, u, a]),
    rootRef: c
  };
}
class pd {
  constructor() {
    pe(this, "mountEffect", () => {
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
    return new pd();
  }
  static use() {
    const t = Al(pd.create).current, [n, r] = Le(!1);
    return t.shouldMount = n, t.setShouldMount = r, fe(t.mountEffect, [n]), t;
  }
  mount() {
    return this.mounted || (this.mounted = DU(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
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
function NU() {
  return pd.use();
}
function DU() {
  let e, t;
  const n = new Promise((r, o) => {
    e = r, t = o;
  });
  return n.resolve = e, n.reject = t, n;
}
class jy {
  constructor() {
    pe(this, "currentId", null);
    pe(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    pe(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new jy();
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
function Da() {
  const e = Al(jy.create).current;
  return km(e.disposeEffect), e;
}
function zU(e) {
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
  } = e, [c, d] = Le(!1), p = Da(), f = V(!1), h = V(l);
  h.current = l;
  const g = l != null, x = ie(t, n.ripple, n.rippleVisible, r && n.ripplePulsate), y = {
    width: s,
    height: s,
    top: -(s / 2) + i,
    left: -(s / 2) + o
  }, m = ie(n.child, c && n.childLeaving, r && n.childPulsate);
  return !a && !c && d(!0), fe(() => {
    !a && g ? f.current || (f.current = !0, p.start(u, () => {
      var v;
      f.current = !1, (v = h.current) == null || v.call(h);
    })) : (f.current = !1, p.clear());
  }, [p, g, a, u]), /* @__PURE__ */ M("span", {
    className: x,
    style: y,
    children: /* @__PURE__ */ M("span", {
      className: m
    })
  });
}
const Kt = he("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), FP = "(prefers-reduced-motion: reduce)", FU = 0, BU = "0ms", UU = () => {
}, $C = () => !1, HU = () => !0, WU = () => UU;
function GU(e) {
  const [t, n] = Le(() => ({
    enabled: e,
    matches: e ? null : !1
  }));
  let r = t.matches;
  return t.enabled !== e && (r = null, e || (r = !1)), we(() => {
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
    const i = window.matchMedia(FP), s = () => {
      o(i.matches);
    };
    return s(), i.addEventListener("change", s), () => {
      i.removeEventListener("change", s);
    };
  }, [e, t.enabled]), r;
}
const VU = {
  ...ns
}, BP = VU.useSyncExternalStore;
function jU(e) {
  const t = e ? HU : $C, [n, r] = Se(() => {
    if (!e || typeof window > "u" || typeof window.matchMedia != "function")
      return [$C, WU];
    const o = window.matchMedia(FP);
    return [() => o.matches, (i) => (o.addEventListener("change", i), () => {
      o.removeEventListener("change", i);
    })];
  }, [e]);
  return BP(r, n, t);
}
const YU = BP !== void 0 ? jU : GU;
function Yy(e, t) {
  const n = YU(!t && e === "system"), r = !t && (e === "always" || e === "system" && n !== !1);
  return Se(() => ({
    shouldReduceMotion: r,
    getTransitionTiming(o) {
      return r ? {
        duration: FU,
        delay: BU
      } : o;
    }
  }), [r]);
}
const Gg = 550, KU = 80, Nu = {}, LC = [], XU = () => {
};
function dh(e, t) {
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
function qU({
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
const QU = kl`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, ZU = kl`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, JU = kl`
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
function e8(e) {
  if (e.motion.reducedMotion === "always")
    return null;
  const t = Ga`
    &.${Kt.rippleVisible} {
      animation-name: ${QU};
      animation-duration: ${Gg}ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
    }

    &.${Kt.ripplePulsate} {
      animation-duration: ${e.transitions.duration.shorter}ms;
    }

    & .${Kt.childLeaving} {
      animation-name: ${ZU};
      animation-duration: ${Gg}ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
    }

    & .${Kt.childPulsate} {
      animation-name: ${JU};
      animation-duration: 2500ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
      animation-iteration-count: infinite;
      animation-delay: 200ms;
    }
  `;
  return e.motion.reducedMotion === "system" ? Ga`
      @media (prefers-reduced-motion: no-preference) {
        ${t}
      }
    ` : t;
}
const t8 = K("span", {
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
}), n8 = K(zU, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${Kt.rippleVisible} {
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
  & .${Kt.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${Kt.childLeaving} {
    opacity: 0;
  }

  & .${Kt.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
  }

  ${({
  theme: e
}) => e8(e)}
`, r8 = /* @__PURE__ */ ce(function(t, n) {
  const r = We({
    props: t,
    name: "MuiTouchRipple"
  }), o = Qt(), i = Yy(o.motion.reducedMotion, !1), {
    center: s = !1,
    classes: a = Nu,
    className: l,
    ...u
  } = r, [c, d] = Le({
    items: LC,
    order: LC
  }), p = c.items, f = V(0), h = V(null), g = V(!1);
  km(() => (g.current = !0, () => {
    g.current = !1;
  })), fe(() => {
    h.current && (h.current(), h.current = null);
  }, [p]);
  const x = V(!1), y = Da(), m = V(null), v = V(null), C = ge((R) => {
    g.current && d((w) => {
      const E = w.items.filter((P) => P.key !== R), T = dh(w.order.filter((P) => P !== R), E.filter((P) => !P.exiting).map((P) => P.key));
      return {
        items: E,
        order: T
      };
    });
  }), b = ge((R) => {
    const {
      pulsate: w,
      rippleX: E,
      rippleY: T,
      rippleSize: P,
      cb: _
    } = R, N = f.current;
    f.current += 1, d((A) => {
      const D = [...A.items, {
        key: N,
        pulsate: w,
        rippleX: E,
        rippleY: T,
        rippleSize: P,
        exiting: !1
      }];
      return {
        items: D,
        order: dh(A.order, D.filter((z) => !z.exiting).map((z) => z.key))
      };
    }), h.current = _;
  }), S = ge((R = Nu, w = Nu, E = XU) => {
    const {
      pulsate: T = !1,
      center: P = s || w.pulsate,
      fakeElement: _ = !1
      // Used only by tests.
    } = w;
    if ((R == null ? void 0 : R.type) === "mousedown" && x.current) {
      x.current = !1;
      return;
    }
    (R == null ? void 0 : R.type) === "touchstart" && (x.current = !0);
    const N = _ ? null : v.current, {
      rippleX: A,
      rippleY: D,
      rippleSize: z
    } = qU({
      event: R,
      element: N,
      center: P
    });
    R != null && R.touches ? m.current === null && (m.current = () => {
      b({
        pulsate: T,
        rippleX: A,
        rippleY: D,
        rippleSize: z,
        cb: E
      });
    }, y.start(KU, () => {
      m.current && (m.current(), m.current = null);
    })) : b({
      pulsate: T,
      rippleX: A,
      rippleY: D,
      rippleSize: z,
      cb: E
    });
  }), k = ge(() => {
    S(Nu, {
      pulsate: !0
    });
  }), I = ge((R, w) => {
    if (y.clear(), (R == null ? void 0 : R.type) === "touchend" && m.current) {
      m.current(), m.current = null, y.start(0, () => {
        I(R, w);
      });
      return;
    }
    m.current = null, d((E) => {
      const T = E.items.findIndex((_) => !_.exiting);
      if (T === -1)
        return E;
      const P = E.items.slice();
      return P[T] = {
        ...P[T],
        exiting: !0
      }, {
        items: P,
        order: dh(E.order, P.filter((_) => !_.exiting).map((_) => _.key))
      };
    }), h.current = w;
  });
  Rs(n, () => ({
    pulsate: k,
    start: S,
    stop: I
  }), [k, S, I]);
  const $ = new Map(p.map((R) => [R.key, R])), O = c.order.map((R) => $.get(R)).filter(Boolean);
  return /* @__PURE__ */ M(t8, {
    className: ie(Kt.root, a.root, l),
    ref: v,
    ...u,
    children: O.map((R) => /* @__PURE__ */ M(n8, {
      classes: {
        ripple: ie(a.ripple, Kt.ripple),
        rippleVisible: ie(a.rippleVisible, Kt.rippleVisible),
        ripplePulsate: ie(a.ripplePulsate, Kt.ripplePulsate),
        child: ie(a.child, Kt.child),
        childLeaving: ie(a.childLeaving, Kt.childLeaving),
        childPulsate: ie(a.childPulsate, Kt.childPulsate)
      },
      timeout: i.shouldReduceMotion ? 0 : Gg,
      pulsate: R.pulsate,
      rippleX: R.rippleX,
      rippleY: R.rippleY,
      rippleSize: R.rippleSize,
      in: !R.exiting,
      onExited: () => C(R.key)
    }, R.key))
  });
});
function o8(e) {
  return be("MuiButtonBase", e);
}
const i8 = he("MuiButtonBase", ["root", "disabled", "focusVisible"]), s8 = (e) => {
  const {
    disabled: t,
    focusVisible: n,
    focusVisibleClassName: r,
    suppressFocusVisible: o,
    classes: i
  } = e, a = ve({
    root: ["root", t && "disabled", n && !o && "focusVisible"]
  }, o8, i);
  return n && !o && r && (a.root += ` ${r}`), a;
}, a8 = K("button", {
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
  [`&.${i8.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), ap = /* @__PURE__ */ ce(function(t, n) {
  const r = We({
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
    onContextMenu: b,
    onDragLeave: S,
    onFocus: k,
    onFocusVisible: I,
    onKeyDown: $,
    onKeyUp: O,
    onMouseDown: R,
    onMouseLeave: w,
    onMouseUp: E,
    onTouchEnd: T,
    onTouchMove: P,
    onTouchStart: _,
    tabIndex: N = 0,
    TouchRippleProps: A,
    touchRippleRef: D,
    type: z,
    ...U
  } = r, W = !!(U.href || U.to), q = !!U.formAction;
  let J = l;
  J === "button" && W && (J = y);
  const ee = m ?? (typeof J == "string" ? J === "button" : x ?? !1), ne = NU(), Z = ot(ne.ref, D), [H, X] = Le(!1);
  (u || g) && H && X(!1);
  const re = ge((nt) => {
    p && !nt.repeat && H && nt.key === " " && ne.stop(nt, () => {
      ne.start(nt);
    });
  }), B = ge((nt) => {
    p && nt.key === " " && H && !nt.defaultPrevented && ne.stop(nt, () => {
      ne.pulsate(nt);
    });
  }), {
    getButtonProps: ue,
    rootRef: Q
  } = LU({
    nativeButton: ee,
    disabled: u,
    type: z,
    hasFormAction: q,
    tabIndex: N,
    onBeforeKeyDown: re,
    onBeforeKeyUp: B
  }), {
    onClick: Ie,
    onKeyDown: xe,
    onKeyUp: Te,
    ...Mt
  } = ue({
    onClick: C,
    onKeyDown: $,
    onKeyUp: O
  });
  Rs(o, () => ({
    focusVisible: () => {
      X(!0), Q.current.focus();
    }
  }), [Q]);
  const Ye = ne.shouldMount && !c && !u;
  fe(() => {
    H && p && !c && ne.pulsate();
  }, [c, p, H, ne]);
  const Wt = Ir(ne, "start", R, d), Gt = Ir(ne, "stop", b, d), fn = Ir(ne, "stop", S, d), ut = Ir(ne, "stop", E, d), br = Ir(ne, "stop", (nt) => {
    H && nt.preventDefault(), w && w(nt);
  }, d), nr = Ir(ne, "start", _, d), Ot = Ir(ne, "stop", T, d), Qe = Ir(ne, "stop", P, d), ct = Ir(ne, "stop", (nt) => {
    OC(nt.target) || X(!1), v && v(nt);
  }, !1), Lo = ge((nt) => {
    Q.current || (Q.current = nt.currentTarget), !g && OC(nt.target) && (X(!0), I && I(nt)), k && k(nt);
  }), Ce = {};
  W && (Ce.tabIndex = u ? -1 : N, u && (Ce["aria-disabled"] = u), Ce.type = z);
  const Vt = ot(n, Q), $t = {
    ...r,
    centerRipple: i,
    component: l,
    disabled: u,
    disableRipple: c,
    disableTouchRipple: d,
    focusRipple: p,
    suppressFocusVisible: g,
    tabIndex: N,
    focusVisible: H
  }, Ys = s8($t);
  return /* @__PURE__ */ oe(a8, {
    as: J,
    className: ie(Ys.root, a),
    ownerState: $t,
    onBlur: ct,
    onClick: Ie,
    onContextMenu: Gt,
    onFocus: Lo,
    onKeyDown: xe,
    onKeyUp: Te,
    onMouseDown: Wt,
    onMouseLeave: br,
    onMouseUp: ut,
    onDragLeave: fn,
    onTouchEnd: Ot,
    onTouchMove: Qe,
    onTouchStart: nr,
    ref: Vt,
    ...W ? Ce : Mt,
    ...U,
    children: [s, Ye ? /* @__PURE__ */ M(r8, {
      ref: Z,
      center: i,
      ...A
    }) : null]
  });
});
function Ir(e, t, n, r = !1) {
  return ge((o) => (n && n(o), r || e[t](o), !0));
}
function l8(e) {
  return be("MuiCircularProgress", e);
}
he("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "track", "circle", "circleDisableShrink"]);
const Vn = 44, Vg = kl`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, jg = kl`
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
`, u8 = typeof Vg != "string" ? Ga`
        animation: ${Vg} 1.4s linear infinite;
      ` : null, c8 = typeof jg != "string" ? Ga`
        animation: ${jg} 1.4s ease-in-out infinite;
      ` : null, d8 = (e) => {
  const {
    classes: t,
    variant: n,
    color: r,
    disableShrink: o
  } = e, i = {
    root: ["root", n, `color${Re(r)}`],
    svg: ["svg"],
    track: ["track"],
    circle: ["circle", o && "circleDisableShrink"]
  };
  return ve(i, l8, t);
}, f8 = K("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`color${Re(n.color)}`]];
  }
})(je(({
  theme: e
}) => {
  const t = Cm(e, {
    animation: "none"
  });
  return {
    display: "inline-block",
    variants: [{
      props: {
        variant: "determinate"
      },
      style: {
        ...vt(e, "transform")
      }
    }, {
      props: {
        variant: "indeterminate"
      },
      style: u8 || {
        animation: `${Vg} 1.4s linear infinite`
      }
    }, ...t ? [{
      props: {
        variant: "indeterminate"
      },
      style: t
    }] : [], ...Object.entries(e.palette).filter(Xr()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        color: (e.vars || e).palette[n].main
      }
    }))]
  };
})), p8 = K("svg", {
  name: "MuiCircularProgress",
  slot: "Svg"
})({
  display: "block"
  // Keeps the progress centered
}), h8 = K("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.circle, n.disableShrink && t.circleDisableShrink];
  }
})(je(({
  theme: e
}) => {
  const t = Cm(e, {
    animation: "none"
  });
  return {
    stroke: "currentColor",
    variants: [{
      props: {
        variant: "determinate"
      },
      style: {
        ...vt(e, "stroke-dashoffset")
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
      style: c8 || {
        // At runtime for Pigment CSS, `dashAnimation` will be null and the generated keyframe will be used.
        animation: `${jg} 1.4s ease-in-out infinite`
      }
    }, ...t ? [{
      props: ({
        ownerState: n
      }) => n.variant === "indeterminate" && !n.disableShrink,
      style: t
    }] : []]
  };
})), g8 = K("circle", {
  name: "MuiCircularProgress",
  slot: "Track"
})(je(({
  theme: e
}) => ({
  stroke: "currentColor",
  opacity: (e.vars || e).palette.action.activatedOpacity
}))), Ky = /* @__PURE__ */ ce(function(t, n) {
  const r = We({
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
  }, v = d8(m), C = {}, b = {}, S = {};
  if (h === "determinate") {
    const k = 2 * Math.PI * ((Vn - p) / 2), I = y - x;
    C.strokeDasharray = k.toFixed(3), C.strokeDashoffset = I > 0 ? `${((y - f) / I * k).toFixed(3)}px` : `${k.toFixed(3)}px`, b.transform = "rotate(-90deg)", S["aria-valuenow"] = f, S["aria-valuemin"] = x, S["aria-valuemax"] = y;
  }
  return /* @__PURE__ */ M(f8, {
    className: ie(v.root, o),
    style: {
      width: c,
      height: c,
      ...b,
      ...d
    },
    ownerState: m,
    ref: n,
    role: "progressbar",
    ...S,
    ...g,
    children: /* @__PURE__ */ oe(p8, {
      className: v.svg,
      ownerState: m,
      viewBox: `${Vn / 2} ${Vn / 2} ${Vn} ${Vn}`,
      children: [a ? /* @__PURE__ */ M(g8, {
        className: v.track,
        ownerState: m,
        cx: Vn,
        cy: Vn,
        r: (Vn - p) / 2,
        fill: "none",
        strokeWidth: p,
        "aria-hidden": "true"
      }) : null, /* @__PURE__ */ M(h8, {
        className: v.circle,
        style: C,
        ownerState: m,
        cx: Vn,
        cy: Vn,
        r: (Vn - p) / 2,
        fill: "none",
        strokeWidth: p
      })]
    })
  });
});
function m8(e) {
  return be("MuiIconButton", e);
}
const NC = he("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge", "loading", "loadingIndicator", "loadingWrapper"]), y8 = (e) => {
  const {
    classes: t,
    disabled: n,
    color: r,
    edge: o,
    size: i,
    loading: s
  } = e, a = {
    root: ["root", s && "loading", n && "disabled", r !== "default" && `color${Re(r)}`, o && `edge${Re(o)}`, `size${Re(i)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  };
  return ve(a, m8, t);
}, v8 = K(ap, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.loading && t.loading, n.color !== "default" && t[`color${Re(n.color)}`], n.edge && t[`edge${Re(n.edge)}`], t[`size${Re(n.size)}`]];
  }
})(je(({
  theme: e
}) => ({
  textAlign: "center",
  flex: "0 0 auto",
  fontSize: e.typography.pxToRem(24),
  padding: 8,
  borderRadius: "50%",
  color: (e.vars || e).palette.action.active,
  ...vt(e, "background-color", {
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
})), je(({
  theme: e
}) => ({
  variants: [{
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, ...Object.entries(e.palette).filter(Xr()).map(([t]) => ({
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
  [`&.${NC.disabled}`]: {
    backgroundColor: "transparent",
    color: (e.vars || e).palette.action.disabled
  },
  [`&.${NC.loading}`]: {
    color: "transparent"
  }
}))), x8 = K("span", {
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
})), C8 = /* @__PURE__ */ ce(function(t, n) {
  const r = We({
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
  } = r, g = Co(d), x = f ?? /* @__PURE__ */ M(Ky, {
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
  }, m = y8(y);
  return /* @__PURE__ */ oe(v8, {
    id: p ? g : d,
    className: ie(m.root, s),
    centerRipple: !0,
    internalNativeButton: !0,
    focusRipple: !u,
    disabled: l || p,
    ref: n,
    ...h,
    ownerState: y,
    children: [typeof p == "boolean" && // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ M("span", {
      className: m.loadingWrapper,
      style: {
        display: "contents"
      },
      children: /* @__PURE__ */ M(x8, {
        className: m.loadingIndicator,
        ownerState: y,
        children: p && x
      })
    }), i]
  });
});
function w8(e) {
  return be("MuiButton", e);
}
const Fo = he("MuiButton", ["root", "text", "outlined", "contained", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "loading", "loadingWrapper", "loadingIconPlaceholder", "loadingIndicator", "loadingPositionCenter", "loadingPositionStart", "loadingPositionEnd"]), S8 = /* @__PURE__ */ Bt({}), b8 = /* @__PURE__ */ Bt(void 0), k8 = (e) => {
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
    root: ["root", s && "loading", i, `size${Re(o)}`, `color${Re(t)}`, n && "disableElevation", r && "fullWidth", s && `loadingPosition${Re(a)}`],
    startIcon: ["icon", "startIcon"],
    endIcon: ["icon", "endIcon"],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  }, c = ve(u, w8, l);
  return {
    ...l,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...c
  };
}, UP = [{
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
}], I8 = K(ap, {
  shouldForwardProp: (e) => Un(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`size${Re(n.size)}`], n.color === "inherit" && t.colorInherit, n.disableElevation && t.disableElevation, n.fullWidth && t.fullWidth, n.loading && t.loading];
  }
})(je(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], n = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
  return {
    ...e.typography.button,
    minWidth: 64,
    padding: "6px 16px",
    border: 0,
    borderRadius: (e.vars || e).shape.borderRadius,
    ...vt(e, ["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": {
      textDecoration: "none"
    },
    [`&.${Fo.disabled}`]: {
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
        [`&.${Fo.focusVisible}`]: {
          boxShadow: (e.vars || e).shadows[6]
        },
        [`&.${Fo.disabled}`]: {
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
        [`&.${Fo.disabled}`]: {
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
    }, ...Object.entries(e.palette).filter(Xr()).map(([r]) => ({
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
        [`&.${Fo.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${Fo.disabled}`]: {
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
        ...vt(e, ["background-color", "box-shadow", "border-color"], {
          duration: e.transitions.duration.short
        }),
        [`&.${Fo.loading}`]: {
          color: "transparent"
        }
      }
    }]
  };
})), T8 = K("span", {
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
      ...vt(e, ["opacity"], {
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
  }, ...UP]
})), P8 = K("span", {
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
      ...vt(e, ["opacity"], {
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
  }, ...UP]
})), M8 = K("span", {
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
})), DC = K("span", {
  name: "MuiButton",
  slot: "LoadingIconPlaceholder"
})({
  display: "inline-block",
  width: "1em",
  height: "1em"
}), E8 = /* @__PURE__ */ ce(function(t, n) {
  const r = gt(S8), o = gt(b8), i = vo(r, t), s = We({
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
    size: b = "medium",
    startIcon: S,
    type: k,
    variant: I = "text",
    ...$
  } = s, O = Co(y), R = v ?? /* @__PURE__ */ M(Ky, {
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
    loadingIndicator: R,
    loadingPosition: C,
    size: b,
    type: k,
    variant: I
  }, E = k8(w), T = (S || m && C === "start") && /* @__PURE__ */ M(T8, {
    className: E.startIcon,
    ownerState: w,
    children: S || /* @__PURE__ */ M(DC, {
      className: E.loadingIconPlaceholder,
      ownerState: w
    })
  }), P = (h || m && C === "end") && /* @__PURE__ */ M(P8, {
    className: E.endIcon,
    ownerState: w,
    children: h || /* @__PURE__ */ M(DC, {
      className: E.loadingIconPlaceholder,
      ownerState: w
    })
  }), _ = o || "", N = typeof m == "boolean" ? (
    // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ M("span", {
      className: E.loadingWrapper,
      style: {
        display: "contents"
      },
      children: m && /* @__PURE__ */ M(M8, {
        className: E.loadingIndicator,
        ownerState: w,
        children: R
      })
    })
  ) : null, {
    root: A,
    ...D
  } = E;
  return /* @__PURE__ */ oe(I8, {
    ownerState: w,
    className: ie(r.className, E.root, c, _),
    component: u,
    disabled: d || m,
    focusRipple: !f,
    focusVisibleClassName: ie(E.focusVisible, g),
    ref: n,
    internalNativeButton: !0,
    type: k,
    id: m ? O : y,
    ...$,
    classes: D,
    children: [T, C !== "end" && N, a, C === "end" && N, P]
  });
}), HP = /* @__PURE__ */ Bt({}), WP = /* @__PURE__ */ Bt(void 0);
function A8(e, t) {
  return t === void 0 || e === void 0 ? !1 : Array.isArray(t) ? t.includes(e) : e === t;
}
const R8 = (e) => {
  const {
    classes: t,
    fullWidth: n,
    selected: r,
    disabled: o,
    size: i,
    color: s
  } = e, a = {
    root: ["root", r && "selected", o && "disabled", n && "fullWidth", `size${Re(i)}`, s]
  };
  return ve(a, UR, t);
}, _8 = K(ap, {
  name: "MuiToggleButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[`size${Re(n.size)}`]];
  }
})(je(({
  theme: e
}) => ({
  ...e.typography.button,
  borderRadius: (e.vars || e).shape.borderRadius,
  padding: 11,
  border: `1px solid ${(e.vars || e).palette.divider}`,
  color: (e.vars || e).palette.action.active,
  [`&.${Vo.disabled}`]: {
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
      [`&.${Vo.selected}`]: {
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
  }, ...Object.entries(e.palette).filter(Xr()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      [`&.${Vo.selected}`]: {
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
}))), O8 = /* @__PURE__ */ ce(function(t, n) {
  const {
    value: r,
    ...o
  } = gt(HP), i = gt(WP), s = vo({
    ...o,
    selected: A8(t.value, r)
  }, t), a = We({
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
  }, b = R8(C), S = (I) => {
    g && (g(I, m), I.defaultPrevented) || h && h(I, m);
  }, k = i || "";
  return /* @__PURE__ */ M(_8, {
    className: ie(o.className, b.root, u, k),
    internalNativeButton: !0,
    disabled: d,
    focusRipple: !p,
    ref: n,
    onClick: S,
    onChange: h,
    value: m,
    ownerState: C,
    "aria-pressed": x,
    ...v,
    children: l
  });
});
function $8(e) {
  return rs.toArray(e).filter((t) => /* @__PURE__ */ Zn(t));
}
function L8(e) {
  return be("MuiToggleButtonGroup", e);
}
const Xe = he("MuiToggleButtonGroup", ["root", "selected", "horizontal", "vertical", "disabled", "grouped", "fullWidth", "firstButton", "lastButton", "middleButton"]), N8 = (e) => {
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
  }, L8, t);
}, D8 = K("div", {
  name: "MuiToggleButtonGroup",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${Xe.grouped}`]: t.grouped
    }, {
      [`& .${Xe.firstButton}`]: t.firstButton
    }, {
      [`& .${Xe.lastButton}`]: t.lastButton
    }, {
      [`& .${Xe.middleButton}`]: t.middleButton
    }, t.root, n.orientation === "vertical" && t.vertical, n.fullWidth && t.fullWidth];
  }
})(je(({
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
      [`& .${Xe.grouped}`]: {
        [`&.${Xe.selected} + .${Xe.grouped}.${Xe.selected}`]: {
          borderTop: 0,
          marginTop: 0
        }
      },
      [`& .${Xe.firstButton},& .${Xe.middleButton}`]: {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
      },
      [`& .${Xe.lastButton},& .${Xe.middleButton}`]: {
        marginTop: -1,
        borderTop: "1px solid transparent",
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0
      },
      [`& .${Xe.lastButton}.${Vo.disabled},& .${Xe.middleButton}.${Vo.disabled}`]: {
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
      [`& .${Xe.grouped}`]: {
        [`&.${Xe.selected} + .${Xe.grouped}.${Xe.selected}`]: {
          borderLeft: 0,
          marginLeft: 0
        }
      },
      [`& .${Xe.firstButton},& .${Xe.middleButton}`]: {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0
      },
      [`& .${Xe.lastButton},& .${Xe.middleButton}`]: {
        marginLeft: -1,
        borderLeft: "1px solid transparent",
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0
      },
      [`& .${Xe.lastButton}.${Vo.disabled},& .${Xe.middleButton}.${Vo.disabled}`]: {
        borderLeft: "1px solid transparent"
      }
    }
  }]
}))), z8 = /* @__PURE__ */ ce(function(t, n) {
  const r = We({
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
  }, x = N8(g), y = le((k, I) => {
    if (!c)
      return;
    const $ = f && f.indexOf(I);
    let O;
    f && $ >= 0 ? (O = f.slice(), O.splice($, 1)) : O = f ? f.concat(I) : [I], c(k, O);
  }, [c, f]), m = le((k, I) => {
    c && c(k, f === I ? null : I);
  }, [c, f]), v = Se(() => ({
    className: x.grouped,
    onChange: l ? m : y,
    value: f,
    size: p,
    fullWidth: u,
    color: s,
    disabled: a
  }), [x.grouped, l, m, y, f, p, u, s, a]), C = $8(o), b = C.length, S = (k) => {
    const I = k === 0, $ = k === b - 1;
    return I && $ ? "" : I ? x.firstButton : $ ? x.lastButton : x.middleButton;
  };
  return /* @__PURE__ */ M(D8, {
    role: "group",
    className: ie(x.root, i),
    ref: n,
    ownerState: g,
    ...h,
    children: /* @__PURE__ */ M(HP.Provider, {
      value: v,
      children: C.map((k, I) => /* @__PURE__ */ M(WP.Provider, {
        value: S(I),
        children: k
      }, I))
    })
  });
}), F8 = {
  baseButton: E8,
  baseIconButton: C8,
  // MUI Toggle button has an `href` prop that is not compatible with our API.
  baseToggleButton: O8,
  baseToggleButtonGroup: z8
}, B8 = {}, U8 = L({}, F8, B8), H8 = /* @__PURE__ */ Bt(null);
function W8(e) {
  const {
    slots: t,
    slotProps: n = {},
    defaultSlots: r,
    children: o
  } = e, i = Se(() => ({
    slots: L({}, r, t),
    slotProps: n
  }), [r, t, n]);
  return /* @__PURE__ */ M(H8.Provider, {
    value: i,
    children: o
  });
}
function wl(e) {
  let t = 1 / 0, n = -1 / 0;
  for (const r of e ?? [])
    r < t && (t = r), r > n && (n = r);
  return [t, n];
}
const zC = (e, t) => t === "x" ? {
  x: e,
  y: null
} : {
  x: null,
  y: e
}, GP = (e) => {
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
  return wl(i ?? []);
}, VP = (e) => (t) => {
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
    }), d = r.domainSeries === "visible" ? u : l, [p, f] = (d == null ? void 0 : d.reduce((h, g, x) => c && (!c(zC(g[0], e), x) || !c(zC(g[1], e), x)) ? h : [Math.min(...g, h[0]), Math.max(...g, h[1])], [1 / 0, -1 / 0])) ?? [1 / 0, -1 / 0];
    return [Math.min(p, s[0]), Math.max(f, s[1])];
  }, [1 / 0, -1 / 0]);
}, G8 = (e) => Object.keys(e.series).some((n) => e.series[n].layout === "horizontal") ? VP("x")(e) : GP(e), V8 = (e) => Object.keys(e.series).some((n) => e.series[n].layout === "horizontal") ? GP(e) : VP("y")(e);
function j8(e, t) {
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
const fh = {
  /**
   * Series order such that the earliest series (according to the maximum value) is at the bottom.
   * */
  appearance: Yk,
  /**
   *  Series order such that the smallest series (according to the sum of values) is at the bottom.
   * */
  ascending: Kk,
  /**
   * Series order such that the largest series (according to the sum of values) is at the bottom.
   */
  descending: Z5,
  /**
   * Series order such that the earliest series (according to the maximum value) are on the inside and the later series are on the outside. This order is recommended for streamgraphs in conjunction with the wiggle offset. See Stacked Graphs—Geometry & Aesthetics by Byron & Wattenberg for more information.
   */
  insideOut: J5,
  /**
   * Given series order [0, 1, … n - 1] where n is the number of elements in series. Thus, the stack order is given by the key accessor.
   */
  none: vs,
  /**
   * Reverse of the given series order [n - 1, n - 2, … 0] where n is the number of elements in series. Thus, the stack order is given by the reverse of the key accessor.
   */
  reverse: ez
}, ph = {
  /**
   * Applies a zero baseline and normalizes the values for each point such that the topline is always one.
   * */
  expand: K5,
  /**
   * Positive values are stacked above zero, negative values are stacked below zero, and zero values are stacked at zero.
   * */
  diverging: j8,
  /**
   * Applies a zero baseline.
   * */
  none: ys,
  /**
   * Shifts the baseline down such that the center of the streamgraph is always at zero.
   * */
  silhouette: X5,
  /**
   * Shifts the baseline so as to minimize the weighted wiggle of layers. This offset is recommended for streamgraphs in conjunction with the inside-out order. See Stacked Graphs—Geometry & Aesthetics by Bryon & Wattenberg for more information.
   * */
  wiggle: q5
}, jP = (e) => {
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
      stackingOrder: fh.none,
      stackingOffset: ph.none
    }) : i[a] === void 0 ? (i[a] = o.length, o.push({
      ids: [s],
      stackingOrder: fh[l ?? (r == null ? void 0 : r.stackOrder) ?? "none"],
      stackingOffset: ph[u ?? (r == null ? void 0 : r.stackOffset) ?? "diverging"]
    })) : (o[i[a]].ids.push(s), l !== void 0 && (o[i[a]].stackingOrder = fh[l]), u !== void 0 && (o[i[a]].stackingOffset = ph[u]));
  }), o;
}, Y8 = (e) => e == null ? "" : e.toLocaleString(), K8 = (e, t, n) => {
  const {
    seriesOrder: r,
    series: o
  } = e, i = jP(e), s = t ?? [];
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
    }), f = Bc().keys(p).value((y, m) => y[m] ?? 0).order(d).offset(c)(s), h = f.map((y) => y.index), g = () => h, x = Bc().keys(p).value((y, m) => {
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
      let b;
      C ? b = t.map((k) => C(k)) : v ? b = t.map((k) => {
        const I = k[v];
        return typeof I == "number" ? I : null;
      }) : b = o[y].data;
      const S = !(n != null && n({
        type: "bar",
        seriesId: y
      }));
      a[y] = L({
        layout: "vertical",
        labelMarkType: "square",
        minBarSize: 0,
        valueFormatter: o[y].valueFormatter ?? Y8
      }, o[y], {
        data: b,
        hidden: S,
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
function YP(e, t, n) {
  const {
    seriesOrder: r,
    series: o
  } = t;
  return r.reduce((i, s) => {
    const a = $n(o[s].label, "legend");
    return a === void 0 || i.push({
      type: e,
      markType: o[s].labelMarkType ?? n,
      seriesId: s,
      color: o[s].color,
      label: a
    }), i;
  }, []);
}
const X8 = (e) => YP("bar", e), q8 = (e, t, n) => {
  const r = e.layout === "vertical";
  return rI({
    series: e,
    valueColorScale: r ? n == null ? void 0 : n.colorScale : t == null ? void 0 : t.colorScale,
    categoryColorScale: r ? t == null ? void 0 : t.colorScale : n == null ? void 0 : n.colorScale,
    categoryValues: r ? t == null ? void 0 : t.data : n == null ? void 0 : n.data
  });
};
function KP(e, t) {
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
function XP(e, t, n, r) {
  const o = KP(e, t);
  if (o.length === 0)
    return null;
  const i = n !== void 0 && r !== void 0 ? o.findIndex((s) => s.type === n && s.seriesId === r) : -1;
  return i <= 0 ? o[o.length - 1] : o[(i - 1 + o.length) % o.length];
}
function qP(e, t) {
  return Object.keys(e).filter((n) => t.has(n)).flatMap((n) => {
    const r = e[n];
    return r.seriesOrder.filter((o) => {
      const i = r.series[o];
      return "hidden" in i && i.hidden ? !1 : i.data.length > 0 && i.data.some((s) => s != null && !(typeof s == "object" && "hidden" in s && s.hidden));
    }).map((o) => r.series[o].data.length);
  }).reduce((n, r) => Math.max(n, r), 0);
}
function QP(e, t, n, r) {
  const o = KP(e, t);
  if (o.length === 0)
    return null;
  const i = n !== void 0 && r !== void 0 ? o.findIndex((s) => s.type === n && s.seriesId === r) : -1;
  return o[(i + 1) % o.length];
}
function lp({
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
function ZP(e, t, n) {
  var o, i;
  if (t === "sankey")
    return !1;
  const r = (i = (o = e[t]) == null ? void 0 : o.series[n]) == null ? void 0 : i.data;
  return r != null && r.length > 0;
}
function JP(e, t, n) {
  var o;
  const r = (o = e[t]) == null ? void 0 : o.series[n];
  return !!(r && "hidden" in r && r.hidden);
}
function Q8(e, t = !1, n = !1) {
  return function(o, i) {
    var p, f;
    const s = Ae(i);
    let a = o == null ? void 0 : o.seriesId, l = o == null ? void 0 : o.type;
    if (!l || a == null || !ZP(s, l, a) || JP(s, l, a)) {
      const h = QP(s, e, l, a);
      if (h === null)
        return null;
      l = h.type, a = h.seriesId;
    }
    const u = n ? ((f = (p = s[l]) == null ? void 0 : p.series[a]) == null ? void 0 : f.data.length) ?? 0 : qP(s, e);
    let c = (o == null ? void 0 : o.dataIndex) == null ? 0 : o.dataIndex + 1;
    t ? c = c % u : c = Math.min(u - 1, c);
    const d = lp({
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
function Z8(e, t = !1, n = !1) {
  return function(o, i) {
    var p, f;
    const s = Ae(i);
    let a = o == null ? void 0 : o.seriesId, l = o == null ? void 0 : o.type;
    if (!l || a == null || !ZP(s, l, a) || JP(s, l, a)) {
      const h = XP(s, e, l, a);
      if (h === null)
        return null;
      l = h.type, a = h.seriesId;
    }
    const u = n ? ((f = (p = s[l]) == null ? void 0 : p.series[a]) == null ? void 0 : f.data.length) ?? 0 : qP(s, e);
    let c = (o == null ? void 0 : o.dataIndex) == null ? u - 1 : o.dataIndex - 1;
    t ? c = (u + c) % u : c = Math.max(0, c);
    const d = lp({
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
function J8(e) {
  return function(n, r) {
    const o = Ae(r);
    let i = n == null ? void 0 : n.seriesId, s = n == null ? void 0 : n.type;
    const a = QP(o, e, s, i);
    if (a === null)
      return null;
    s = a.type, i = a.seriesId;
    const l = o[s].series[i].data, u = (n == null ? void 0 : n.dataIndex) == null ? 0 : Math.min(n.dataIndex, l.length - 1), c = lp({
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
function eH(e) {
  return function(n, r) {
    const o = Ae(r);
    let i = n == null ? void 0 : n.seriesId, s = n == null ? void 0 : n.type;
    const a = XP(o, e, s, i);
    if (a === null)
      return null;
    s = a.type, i = a.seriesId;
    const l = o[s].series[i].data, u = (n == null ? void 0 : n.dataIndex) == null ? l.length - 1 : Math.min(n.dataIndex, l.length - 1), c = lp({
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
function up(e, t, n) {
  return (o) => {
    switch (o.key) {
      case "ArrowRight":
        return Q8(e, t, n);
      case "ArrowLeft":
        return Z8(e, t, n);
      case "ArrowDown":
        return eH(e);
      case "ArrowUp":
        return J8(e);
      default:
        return null;
    }
  };
}
const tH = up(Wf);
function Xy(e, t = {}) {
  const {
    series: n,
    getColor: r,
    identifier: o
  } = e;
  if (!o || o.dataIndex === void 0)
    return null;
  const i = $n(n.label, "tooltip"), s = n.data[o.dataIndex];
  if (t.skipNullValues && s == null)
    return null;
  const a = n.valueFormatter(s, {
    dataIndex: o.dataIndex
  });
  return L({
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
const nH = (e) => Xy(e, {
  skipNullValues: !0
}), rH = (e) => Object.values(e).map((t) => t.layout === "horizontal" ? {
  direction: "y",
  axisId: t.yAxisId
} : {
  direction: "x",
  axisId: t.xAxisId
});
function oH(e, t, n) {
  const r = e && t > 0, o = !e && t < 0, i = r || o;
  return n ? !i : i;
}
function iH(e) {
  const {
    verticalLayout: t,
    xAxisConfig: n,
    yAxisConfig: r,
    series: o,
    numberOfGroups: i
  } = e, s = t ? n : r, a = (t ? r.reverse : n.reverse) ?? !1, {
    barWidth: l,
    offset: u
  } = lk(s.scale.bandwidth(), i, s.barGapRatio), c = n.scale, d = r.scale;
  return function(f, h) {
    const g = h * (l + u), x = s.data[f], y = o.data[f];
    if (y == null)
      return null;
    const v = o.visibleStackedData[f].map(($) => t ? d($) : c($)), [C, b] = wl(v).map(($) => Math.round($));
    let S = 0;
    y !== 0 && (o.hidden || (S = Math.max(o.minBarSize, b - C)));
    const k = oH(t, y, a);
    let I = 0;
    return k ? I = b - S : I = C, {
      x: t ? c(x) + g : I,
      y: t ? I : d(x) + g,
      height: t ? S : l,
      width: t ? l : S
    };
  };
}
const sH = (e) => {
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
  const s = t.bar.stackingGroups.findIndex((f) => f.ids.includes(i.id)), a = iH({
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
function aH(e, t, n) {
  return L({}, e, {
    id: e.id ?? `auto-generated-id-${t}`,
    color: e.color ?? n[t % n.length]
  });
}
const lH = (e) => `Type(${e})`, uH = (e) => `Series(${e})`, cH = (e) => e === void 0 ? "" : `Index(${e})`, cp = (e) => `${lH(e.type)}${uH(e.seriesId)}${cH(e.dataIndex)}`, dp = (e) => ({
  type: e.type,
  seriesId: e.seriesId,
  dataIndex: e.dataIndex
}), dH = (e) => {
  var f, h;
  const {
    identifier: t,
    series: n,
    xAxis: r,
    yAxis: o,
    localeText: i
  } = e, s = $n(n.label, "tooltip"), a = n.data[t.dataIndex] ?? null, u = n.layout === "horizontal" ? o : r, c = ((f = u.data) == null ? void 0 : f[t.dataIndex]) ?? null, d = n.valueFormatter(a, {
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
}, fH = {
  seriesProcessor: K8,
  colorProcessor: q8,
  legendGetter: X8,
  tooltipGetter: nH,
  tooltipItemPositionGetter: sH,
  axisTooltipGetter: rH,
  xExtremumGetter: G8,
  yExtremumGetter: V8,
  getSeriesWithDefaultValues: aH,
  getItemAtPosition: vD,
  identifierSerializer: cp,
  identifierCleaner: dp,
  descriptionGetter: dH,
  keyboardFocusHandler: tH,
  isHighlightedCreator: Af,
  isFadedCreator: Rf
}, pH = (e) => {
  const {
    axis: t
  } = e;
  return wl(t.data ?? []);
};
function hH(e, t, n, r) {
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
const gH = (e) => {
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
    }), f = d && n.scaleType !== "log" && typeof t[s].baseline != "string" ? (y) => y : (y) => [y[1], y[1]], h = hH(f, c, n.domainSeries === "visible" ? u : l, p), [g, x] = h;
    return [Math.min(g, i[0]), Math.max(x, i[1])];
  }, [1 / 0, -1 / 0]);
}, FC = ["circle", "square", "diamond", "cross", "star", "triangle", "wye"], mH = (e) => e == null ? "" : e.toLocaleString();
function yH(e, t, n, r) {
  const {
    seriesOrder: o,
    series: i
  } = e, s = jP(L({}, e, {
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
    }), g = Bc().keys(h).value((v, C) => v[C] ?? 0).order(f).offset(p)(l), x = g.map((v) => v.index), y = () => x, m = Bc().keys(h).value((v, C) => {
      const b = h.indexOf(C), S = d[b];
      return n != null && n({
        type: r,
        seriesId: S
      }) ? v[C] ?? 0 : 0;
    }).order(y).offset(p)(l);
    d.forEach((v, C) => {
      const {
        dataKey: b,
        valueGetter: S
      } = i[v];
      let k;
      S ? k = t.map(($) => S($)) : b ? k = t.map(($) => {
        const O = $[b];
        return typeof O == "number" ? O : null;
      }) : k = i[v].data;
      const I = !(n != null && n({
        type: r,
        seriesId: v
      }));
      u[v] = L({
        labelMarkType: "line+mark"
      }, i[v], {
        shape: i[v].shape ?? FC[(a.get(v) ?? 0) % FC.length],
        data: k,
        valueFormatter: i[v].valueFormatter ?? mH,
        hidden: I,
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
const vH = (e, t, n) => yH(e, t, n, "line"), xH = (e) => {
  const {
    seriesOrder: t,
    series: n
  } = e;
  return t.reduce((r, o) => {
    const i = $n(n[o].label, "legend");
    return i === void 0 || r.push({
      type: "line",
      markType: n[o].labelMarkType,
      markShape: n[o].showMark ? n[o].shape ?? "circle" : void 0,
      seriesId: o,
      color: n[o].color,
      label: i
    }), r;
  }, []);
}, CH = (e) => Xy(e, {
  includeMarkShape: !0
}), wH = (e) => Object.values(e).map((t) => ({
  direction: "x",
  axisId: t.xAxisId
})), SH = (e, t, n) => L({}, e, {
  id: e.id ?? `auto-generated-id-${t}`,
  color: e.color ?? n[t % n.length],
  curve: e.curve ?? "monotoneX"
}), bH = (e) => {
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
function kH(e) {
  return "cpx1" in e;
}
class IH {
  constructor() {
    pe(this, "segments", []);
    pe(this, "cx", 0);
    pe(this, "cy", 0);
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
function TH(e, t) {
  const n = e.x1 - e.x0;
  if (n === 0)
    return e.y0;
  const r = e.y1 - e.y0;
  if (!kH(e))
    return e.y0 + r * (t - e.x0) / n;
  const o = (e.cpx1 - e.x0) / n, i = (e.cpx2 - e.x0) / n, s = r === 0 ? 0 : (e.cpy1 - e.y0) / r, a = r === 0 ? 0 : (e.cpy2 - e.y0) / r, l = Ck(o, s, i, a), u = (t - e.x0) / n;
  return e.y0 + r * l(u);
}
function hh(e, t, n) {
  if (e.length === 0)
    return null;
  if (e.length === 1)
    return e[0].y;
  const r = new IH(), i = W0(n)(r), s = e[0].x > t;
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
      return TH(c, t);
  }
  return null;
}
function BC(e, t) {
  const {
    scale: n,
    data: r
  } = e;
  if (!r || r.length === 0)
    return null;
  if (st(n)) {
    const a = Hr(e, t);
    return a === -1 ? null : Cr(e.scale)(r[a]) <= t ? a === r.length - 1 ? null : {
      left: a,
      right: a + 1
    } : a === 0 ? null : {
      left: a - 1,
      right: a
    };
  }
  const o = n.invert(t), i = Nr(o);
  let s = -1;
  for (let a = 0; a < r.length && Nr(r[a]) <= i; a += 1)
    s = a;
  return s === -1 ? null : s === r.length - 1 ? Nr(r[s]) < i ? null : {
    left: s,
    right: s
  } : {
    left: s,
    right: s + 1
  };
}
function PH(e, t, n) {
  if (typeof e == "number")
    return t(e);
  if (e === "max")
    return t.range()[1];
  if (e === "min")
    return t.range()[0];
  const r = t(n);
  return Number.isNaN(r) ? t.range()[0] : r;
}
function gh(e, t, n, r, o, i) {
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
const MH = 15;
function EH(e, t) {
  var p, f;
  if (!((p = e.experimentalFeatures) != null && p.enablePositionBasedPointerInteraction))
    return;
  const {
    axis: n,
    axisIds: r
  } = It(e), {
    axis: o,
    axisIds: i
  } = Tt(e), s = _k(e, "line");
  if (!s || s.seriesOrder.length === 0)
    return;
  const a = r[0], l = i[0];
  let u = 1 / 0, c;
  for (const h of s.seriesOrder) {
    const g = s.series[h];
    if (g.hidden)
      continue;
    const x = g.xAxisId ?? a, y = g.yAxisId ?? l, m = n[x], v = o[y], C = BC(m, t.x);
    if (!C)
      continue;
    const {
      left: b,
      right: S
    } = C, {
      visibleStackedData: k,
      data: I,
      connectNulls: $,
      curve: O
    } = g;
    if (!$ && (I[b] == null || I[S] == null))
      continue;
    const R = Hr(m, t.x);
    if (R === -1)
      continue;
    if (b === S) {
      const A = (f = k[b]) == null ? void 0 : f[1];
      if (A == null)
        continue;
      const D = v.scale(A);
      if (D == null)
        continue;
      const z = Math.abs(t.y - D);
      z < u && (u = z, c = {
        type: "line",
        seriesId: h,
        dataIndex: R
      });
      continue;
    }
    const w = m.data;
    if (!w)
      continue;
    const E = Cr(m.scale), P = gh(I, (A) => E(w[A]), (A) => {
      const D = k[A];
      return D ? v.scale(D[1]) : null;
    }, b, S, $);
    if (P.length < 2)
      continue;
    const _ = hh(P, t.x, O);
    if (_ == null)
      continue;
    const N = Math.abs(t.y - _);
    N < u && (u = N, c = {
      type: "line",
      seriesId: h,
      dataIndex: R
    });
  }
  if (c && u <= MH && !s.series[c.seriesId].area)
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
      const v = m.xAxisId ?? a, C = m.yAxisId ?? l, b = n[v], S = o[C];
      if (!b || !S)
        continue;
      const k = BC(b, t.x);
      if (!k)
        continue;
      const {
        left: I,
        right: $
      } = k, {
        visibleStackedData: O,
        data: R,
        connectNulls: w,
        baseline: E,
        curve: T
      } = m;
      if ((R[I] == null || R[$] == null) && !w)
        continue;
      const P = b.scale, _ = S.scale, N = Cr(P), A = b.data;
      if (!A)
        continue;
      const D = (ee) => N(A[ee]), z = gh(R, D, (ee) => {
        const ne = O[ee];
        return ne ? _(ne[1]) : null;
      }, I, $, w), U = gh(R, D, (ee) => {
        const ne = O[ee];
        return ne ? PH(E, _, ne[0]) : null;
      }, I, $, w);
      if (z.length < 2 || U.length < 2)
        continue;
      const W = hh(z, t.x, T), q = hh(U, t.x, T);
      if (W == null || q == null)
        continue;
      const J = Math.min(q, W), ae = Math.max(q, W);
      if (t.y >= J && t.y <= ae) {
        const ee = Hr(b, t.x);
        return {
          type: "line",
          seriesId: y,
          dataIndex: ee === -1 ? I : ee
        };
      }
    }
  }
  return c;
}
const AH = up(Wf), RH = (e) => {
  var d, p;
  const {
    identifier: t,
    series: n,
    xAxis: r,
    localeText: o
  } = e, i = $n(n.label, "tooltip"), s = t.dataIndex;
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
}, _H = {
  colorProcessor: V0,
  seriesProcessor: vH,
  legendGetter: xH,
  tooltipGetter: CH,
  tooltipItemPositionGetter: bH,
  axisTooltipGetter: wH,
  xExtremumGetter: pH,
  yExtremumGetter: gH,
  getSeriesWithDefaultValues: SH,
  getItemAtPosition: EH,
  keyboardFocusHandler: AH,
  identifierSerializer: cp,
  identifierCleaner: dp,
  descriptionGetter: RH,
  isHighlightedCreator: Af,
  isFadedCreator: Rf
}, OH = (e = "none") => {
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
}, $H = (e, t, n) => {
  const {
    seriesOrder: r,
    series: o
  } = e, i = {};
  return r.forEach((s) => {
    const a = o[s].data.filter((c, d) => n == null ? void 0 : n({
      type: "pie",
      seriesId: s,
      dataIndex: d
    })), l = I5().startAngle(io(o[s].startAngle ?? 0)).endAngle(io(o[s].endAngle ?? 360)).padAngle(io(o[s].paddingAngle ?? 0)).sortValues(OH(o[s].sortingValues ?? "none"))(a.map((c) => c.value));
    let u = 0;
    i[s] = L({
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
          const m = u > 0 ? l[u - 1].endAngle : io(o[s].startAngle ?? 0);
          h = {
            startAngle: m,
            endAngle: m,
            padAngle: 0,
            value: c.value,
            index: d
          };
        } else
          h = l[u], u += 1;
        const g = L({}, c, {
          id: p,
          hidden: f
        }, h);
        return L({
          labelMarkType: "circle"
        }, g, {
          formattedValue: ((y = (x = o[s]).valueFormatter) == null ? void 0 : y.call(x, L({}, g, {
            label: $n(g.label, "arc")
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
}, LH = (e) => (t) => e.data[t].color, NH = (e) => {
  const {
    seriesOrder: t,
    series: n
  } = e;
  return t.reduce((r, o) => (n[o].data.forEach((i, s) => {
    const a = $n(i.label, "legend");
    a !== void 0 && r.push({
      type: "pie",
      markType: i.labelMarkType ?? n[o].labelMarkType,
      seriesId: o,
      dataIndex: s,
      color: i.color,
      label: a
    });
  }), r), []);
}, DH = (e) => {
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
  const i = $n(o.label, "tooltip"), s = L({}, o, {
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
function zH(e, t) {
  const {
    height: n,
    width: r
  } = t, {
    cx: o,
    cy: i
  } = e, s = Math.min(r, n) / 2, a = Jo(o ?? "50%", r), l = Jo(i ?? "50%", n);
  return {
    cx: a,
    cy: l,
    availableRadius: s
  };
}
const FH = (e, t) => {
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
    } = zH({
      cx: a,
      cy: l
    }, {
      width: t.width,
      height: t.height
    }), p = Jo(i ?? d, d), f = Jo(o ?? 0, d), h = s === void 0 ? (f + p) / 2 : Jo(s, d);
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
}, BH = (e, t, n) => L({}, e, {
  id: e.id ?? `auto-generated-id-${t}`,
  data: e.data.map((r, o) => L({}, r, {
    color: r.color ?? n[o % n.length]
  }))
}), UH = (e) => {
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
  })), [p, f] = wl(d.map((m) => m.x)), [h, g] = wl(d.map((m) => m.y));
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
}, HH = /* @__PURE__ */ new Set(["pie"]), WH = up(HH), GH = (e) => {
  const {
    identifier: t,
    series: n,
    localeText: r
  } = e, o = n.data[t.dataIndex], i = $n(o == null ? void 0 : o.label, "tooltip"), s = (o == null ? void 0 : o.value) ?? null, a = (o == null ? void 0 : o.formattedValue) ?? "", l = n.data.reduce((u, c) => u + ((c == null ? void 0 : c.value) ?? 0), 0);
  return r.pieDescription({
    value: s,
    totalValue: l,
    formattedValue: a,
    seriesLabel: i
  });
}, VH = {
  colorProcessor: LH,
  seriesProcessor: $H,
  seriesLayout: FH,
  legendGetter: NH,
  tooltipGetter: DH,
  tooltipItemPositionGetter: UH,
  getSeriesWithDefaultValues: BH,
  keyboardFocusHandler: WH,
  identifierSerializer: cp,
  identifierCleaner: dp,
  descriptionGetter: GH,
  isHighlightedCreator: Af,
  isFadedCreator: Rf
}, jH = (e) => {
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
}, YH = (e) => {
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
function KH(e, t, n) {
  throw new Error(Me(279, e, t, n.map((r) => `"${r}"`).join(", ")));
}
const XH = ({
  series: e,
  seriesOrder: t
}, n, r) => ({
  series: Object.fromEntries(Object.entries(e).map(([i, s]) => {
    const a = s == null ? void 0 : s.datasetKeys, l = ["x", "y"].filter((c) => typeof (a == null ? void 0 : a[c]) != "string");
    s != null && s.datasetKeys && l.length > 0 && KH("Scatter", i, l);
    let u;
    return s.valueGetter ? u = (n == null ? void 0 : n.map(s.valueGetter)) ?? [] : a ? u = (n == null ? void 0 : n.map((c) => {
      const d = c[a.x], p = c[a.y], f = {
        x: d,
        y: p
      };
      return a.colorValue !== void 0 && (f.colorValue = c[a.colorValue]), a.sizeValue !== void 0 && (f.sizeValue = c[a.sizeValue]), a.z !== void 0 && (f.z = c[a.z]), a.id !== void 0 && (f.id = c[a.id]), f;
    })) ?? [] : u = s.data ?? [], [i, L({
      labelMarkType: "circle",
      markerSize: 4
    }, s, {
      preview: L({
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
}), qH = (e, t, n, r) => {
  const o = r == null ? void 0 : r.colorScale, i = n == null ? void 0 : n.colorScale, s = t == null ? void 0 : t.colorScale, a = nI(e);
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
}, QH = (e) => YP("scatter", e), ZH = (e) => Xy(e), JH = (e, t, n) => L({}, e, {
  id: e.id ?? `auto-generated-id-${t}`,
  color: e.color ?? n[t % n.length]
}), eW = (e) => {
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
}, tW = up(Wf), nW = (e) => {
  var c, d;
  const {
    identifier: t,
    series: n,
    xAxis: r,
    yAxis: o,
    localeText: i
  } = e, s = $n(n.label, "tooltip"), a = n.data[t.dataIndex], l = ((c = r.valueFormatter) == null ? void 0 : c.call(r, a == null ? void 0 : a.x, {
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
}, rW = {
  seriesProcessor: XH,
  colorProcessor: qH,
  legendGetter: QH,
  tooltipGetter: ZH,
  tooltipItemPositionGetter: eW,
  xExtremumGetter: jH,
  yExtremumGetter: YH,
  getSeriesWithDefaultValues: JH,
  keyboardFocusHandler: tW,
  identifierSerializer: cp,
  identifierCleaner: dp,
  descriptionGetter: nW,
  isHighlightedCreator: Af,
  isFadedCreator: Rf
}, oW = {
  bar: fH,
  scatter: rW,
  line: _H,
  pie: VH
}, iW = ["children", "localeText", "plugins", "slots", "slotProps", "seriesConfig"], sW = (e) => {
  const t = cn({
    props: e,
    name: "MuiChartsDataProvider"
  }), {
    children: n,
    localeText: r,
    plugins: o = zP,
    slots: i,
    slotProps: s,
    seriesConfig: a = oW
  } = t, l = ke(t, iW), u = Qt(), c = {
    plugins: o,
    pluginParams: L({
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
function aW(e) {
  const {
    children: t,
    localeText: n,
    chartProviderProps: r,
    slots: o,
    slotProps: i
  } = sW(e);
  return /* @__PURE__ */ M(LD, L({}, r, {
    children: /* @__PURE__ */ M(sz, {
      localeText: n,
      children: /* @__PURE__ */ M(W8, {
        slots: o,
        slotProps: i,
        defaultSlots: U8,
        children: t
      })
    })
  }));
}
function lW(e) {
  return be("MuiChartsSurface", e);
}
const eM = () => ve({
  root: ["root"]
}, lW);
he("MuiChartsSurface", ["root"]);
function UC(e) {
  const {
    isReversed: t,
    gradientId: n,
    size: r,
    direction: o,
    scale: i,
    colorMap: s
  } = e;
  return r <= 0 ? null : /* @__PURE__ */ M("linearGradient", {
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
      return Number.isNaN(c) ? null : /* @__PURE__ */ oe(He, {
        children: [/* @__PURE__ */ M("stop", {
          offset: c,
          stopColor: s.colors[l],
          stopOpacity: 1
        }), /* @__PURE__ */ M("stop", {
          offset: c,
          stopColor: s.colors[l + 1],
          stopOpacity: 1
        })]
      }, a.toString() + l);
    })
  });
}
const uW = 10;
function HC(e) {
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
  const d = typeof u[0] == "number" ? us(u[0], u[1]) : Nm(u[0], u[1]), p = Math.round((Math.max(...c) - Math.min(...c)) / uW), f = `${u[0]}-${u[1]}-`;
  return /* @__PURE__ */ M("linearGradient", {
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
      return v === null ? null : /* @__PURE__ */ M("stop", {
        offset: m,
        stopColor: v,
        stopOpacity: 1
      }, f + g);
    })
  });
}
const cW = 10, dW = (e) => e ? {
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
function mh(e) {
  const {
    isReversed: t,
    gradientId: n,
    colorScale: r,
    colorMap: o
  } = e, i = [o.min ?? 0, o.max ?? 100], s = typeof i[0] == "number" ? us(i[0], i[1]) : Nm(i[0], i[1]), a = cW, l = `${i[0]}-${i[1]}-`;
  return /* @__PURE__ */ M("linearGradient", L({
    id: n
  }, dW(t), {
    gradientUnits: "objectBoundingBox",
    children: Array.from({
      length: a + 1
    }, (u, c) => {
      const d = c / a, p = s(d);
      if (p === void 0)
        return null;
      const f = r(p);
      return f === null ? null : /* @__PURE__ */ M("stop", {
        offset: d,
        stopColor: f,
        stopOpacity: 1
      }, l + c);
    })
  }));
}
function fW() {
  const {
    top: e,
    height: t,
    bottom: n,
    left: r,
    width: o,
    right: i
  } = Wn(), s = e + t + n, a = r + o + i, l = O0(), u = y5(), {
    xAxis: c,
    xAxisIds: d
  } = Ut(), {
    yAxis: p,
    yAxisIds: f
  } = Ht(), {
    zAxis: h,
    zAxisIds: g
  } = R0(), x = f.filter((v) => p[v].colorMap !== void 0), y = d.filter((v) => c[v].colorMap !== void 0), m = g.filter((v) => h[v].colorMap !== void 0);
  return x.length === 0 && y.length === 0 && m.length === 0 ? null : /* @__PURE__ */ oe("defs", {
    children: [x.map((v) => {
      const C = l(v), b = u(v), {
        colorMap: S,
        scale: k,
        colorScale: I,
        reverse: $
      } = p[v];
      return (S == null ? void 0 : S.type) === "piecewise" ? /* @__PURE__ */ M(UC, {
        isReversed: !$,
        scale: k,
        colorMap: S,
        size: s,
        gradientId: C,
        direction: "y"
      }, C) : (S == null ? void 0 : S.type) === "continuous" ? /* @__PURE__ */ oe(He, {
        children: [/* @__PURE__ */ M(HC, {
          isReversed: !$,
          scale: k,
          colorScale: I,
          colorMap: S,
          size: s,
          gradientId: C,
          direction: "y"
        }), /* @__PURE__ */ M(mh, {
          isReversed: $,
          colorScale: I,
          colorMap: S,
          gradientId: b
        })]
      }, C) : null;
    }), y.map((v) => {
      const C = l(v), b = u(v), {
        colorMap: S,
        scale: k,
        reverse: I,
        colorScale: $
      } = c[v];
      return (S == null ? void 0 : S.type) === "piecewise" ? /* @__PURE__ */ M(UC, {
        isReversed: I,
        scale: k,
        colorMap: S,
        size: a,
        gradientId: C,
        direction: "x"
      }, C) : (S == null ? void 0 : S.type) === "continuous" ? /* @__PURE__ */ oe(He, {
        children: [/* @__PURE__ */ M(HC, {
          isReversed: I,
          scale: k,
          colorScale: $,
          colorMap: S,
          size: a,
          gradientId: C,
          direction: "x"
        }), /* @__PURE__ */ M(mh, {
          isReversed: I,
          colorScale: $,
          colorMap: S,
          gradientId: b
        })]
      }, C) : null;
    }), m.map((v) => {
      const C = u(v), {
        colorMap: b,
        colorScale: S
      } = h[v];
      return (b == null ? void 0 : b.type) === "continuous" ? /* @__PURE__ */ M(mh, {
        colorScale: S,
        colorMap: b,
        gradientId: C
      }, C) : null;
    })]
  });
}
function pW(e) {
  return be("MuiChartsSvgLayer", e);
}
const hW = () => ve({
  root: ["root"]
}, pW);
he("MuiChartsSvgLayer", ["root"]);
const gW = ["children", "className"], mW = K("svg", {
  name: "MuiChartsSvgLayer",
  slot: "Root"
})({
  width: "100%",
  height: "100%",
  position: "absolute",
  inset: 0
}), yW = /* @__PURE__ */ ce(function(t, n) {
  const {
    store: r
  } = Pt(), o = r.use(FL), i = r.use(BL), s = cn({
    props: t,
    name: "MuiChartsSvgLayer"
  }), {
    children: a,
    className: l
  } = s, u = ke(s, gW), c = hW(), d = i > 0 && o > 0;
  return /* @__PURE__ */ oe(mW, L({
    viewBox: `0 0 ${o} ${i}`,
    className: ie(c.root, l)
  }, u, {
    ref: n,
    "aria-hidden": !0,
    children: [/* @__PURE__ */ M(fW, {}), d && a]
  }));
});
function vW() {
  const {
    instance: e
  } = Pt(), t = _0(), n = me(), r = V(!1), o = V(void 0);
  fe(() => {
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
      const f = hs(i, p);
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
function xW() {
  var m, v;
  const e = me(), t = e.use(iD), n = e.use(lt), r = Kl(), {
    localeText: o
  } = F0(), {
    xAxis: i,
    xAxisIds: s
  } = Ut(), {
    yAxis: a,
    yAxisIds: l
  } = Ht(), {
    rotationAxis: u,
    rotationAxisIds: c
  } = E0(), {
    radiusAxis: d,
    radiusAxisIds: p
  } = A0();
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
  if (Za(g)) {
    const C = g.xAxisId ?? s[0], b = g.yAxisId ?? l[0];
    y.xAxis = i[C], y.yAxis = a[b];
  } else Wl(f) && (y.rotationAxis = u[c[0]], y.radiusAxis = d[p[0]]);
  return x(y);
}
const CW = {
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
function wW() {
  const e = xW(), t = Yl(), n = V(null), r = V(0), o = V(null);
  return fe(() => {
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
  }, [e, t]), /* @__PURE__ */ M("div", {
    role: "none",
    tabIndex: e ? void 0 : 0,
    ref: o,
    style: CW
  });
}
const SW = ["children", "title", "desc", "className"], bW = K("div", {
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
})), kW = /* @__PURE__ */ ce(function(t, n) {
  const {
    store: r,
    instance: o
  } = Pt(), i = r.use(Pb), s = r.use(Mb), a = r.use(sD);
  vW();
  const l = cn({
    props: t,
    name: "MuiChartsLayerContainer"
  }), {
    children: u,
    title: c,
    desc: d,
    className: p
  } = l, f = ke(l, SW), h = eM(), g = _0(), x = ot(g, n), y = Co();
  return (
    // `role="none"` is an alias for `role="presentation"`, but aria-query treats them differently.
    // See https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/issues/1090
    // eslint-disable-next-line jsx-a11y/role-supports-aria-props
    /* @__PURE__ */ oe(bW, L({
      ref: x,
      ownerState: {
        width: i,
        height: s
      },
      role: "none",
      "aria-label": c,
      "aria-describedby": d ? y : void 0,
      className: ie(h.root, p)
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
      children: [a && /* @__PURE__ */ M(wW, {}), d && /* @__PURE__ */ M("span", {
        id: y,
        style: {
          display: "none"
        },
        children: d
      }), u]
    }))
  );
}), IW = ["children", "className", "title", "desc"], TW = /* @__PURE__ */ ce(function(t, n) {
  const r = cn({
    props: t,
    name: "MuiChartsSurface"
  }), {
    children: o,
    className: i,
    title: s,
    desc: a
  } = r, l = ke(r, IW), u = eM();
  return /* @__PURE__ */ M(kW, {
    className: ie(u.root, i),
    ref: n,
    title: s,
    desc: a,
    children: /* @__PURE__ */ M(yW, L({}, l, {
      children: o
    }))
  });
}), WC = he("MuiChartsToolbar", ["root"]), PW = ["children", "sx", "extendVertically", "hideLegend", "legendDirection", "legendPosition"], MW = (e) => (e == null ? void 0 : e.horizontal) === "start" ? "start" : (e == null ? void 0 : e.horizontal) === "end" ? "end" : "center", EW = (e) => (e == null ? void 0 : e.vertical) === "top" ? "flex-start" : (e == null ? void 0 : e.vertical) === "bottom" ? "flex-end" : "center", AW = (e, t, n) => e ? '"chart"' : t === "vertical" ? (n == null ? void 0 : n.horizontal) === "start" ? '"legend chart"' : '"chart legend"' : (n == null ? void 0 : n.vertical) === "bottom" ? `"chart"
            "legend"` : `"legend"
          "chart"`, RW = (e = !1, t = "horizontal", n = "end", r = void 0) => {
  const o = r ? "auto" : "1fr";
  return t === "horizontal" || e ? o : n === "start" ? `auto ${o}` : `${o} auto`;
}, _W = (e = !1, t = "horizontal", n = "top") => {
  const r = "1fr";
  return t === "vertical" || e ? r : n === "bottom" ? `${r} auto` : `auto ${r}`;
}, OW = K("div", {
  name: "MuiChartsWrapper",
  slot: "Root",
  shouldForwardProp: (e) => ju(e) && e !== "extendVertically" && e !== "width"
})(({
  ownerState: e,
  width: t
}) => {
  var i, s;
  const n = RW(e.hideLegend, e.legendDirection, (i = e.legendPosition) == null ? void 0 : i.horizontal, t), r = _W(e.hideLegend, e.legendDirection, (s = e.legendPosition) == null ? void 0 : s.vertical), o = AW(e.hideLegend, e.legendDirection, e.legendPosition);
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
    [`&:has(.${WC.root})`]: {
      // Add a row for toolbar if there is one.
      gridTemplateRows: `auto ${r}`,
      gridTemplateAreas: `"${n.split(" ").map(() => "toolbar").join(" ")}"
        ${o}`
    },
    [`& .${WC.root}`]: {
      gridArea: "toolbar",
      justifySelf: "center"
    },
    justifyContent: "safe center",
    justifyItems: MW(e.legendPosition),
    alignItems: EW(e.legendPosition)
  };
}), $W = /* @__PURE__ */ ce(function(t, n) {
  const {
    children: r,
    sx: o,
    extendVertically: i,
    hideLegend: s,
    legendDirection: a,
    legendPosition: l
  } = t, u = ke(t, PW), c = tz(), d = ot(c, n), p = me(), f = p.use(Pb), h = p.use(Mb), g = Se(() => ({
    hideLegend: s,
    legendDirection: a,
    legendPosition: l
  }), [s, a, l]);
  return /* @__PURE__ */ M(OW, L({
    ref: d,
    ownerState: g,
    sx: o,
    extendVertically: i ?? h === void 0,
    width: f
  }, u, {
    children: r
  }));
}), Du = 6;
function LW() {
  const e = Qt(), t = az(), n = Xl(), {
    xAxis: r,
    xAxisIds: o
  } = Ut(), {
    yAxis: i,
    yAxisIds: s
  } = Ht();
  if (t === null || t.type !== "line" || !n)
    return null;
  const a = n.series[t.seriesId];
  if (!a || a.hidden || a.data[t.dataIndex] == null)
    return null;
  const l = a.xAxisId ?? o[0], u = a.yAxisId ?? s[0];
  return /* @__PURE__ */ M("rect", {
    fill: "none",
    stroke: (e.vars ?? e).palette.text.primary,
    strokeWidth: 2,
    x: r[l].scale(r[l].data[t.dataIndex]) - Du,
    y: i[u].scale(a.visibleStackedData[t.dataIndex][1]) - Du,
    width: 2 * Du,
    height: 2 * Du,
    rx: 3,
    ry: 3
  });
}
const NW = /* @__PURE__ */ ce(function(t, n) {
  var S, k, I, $;
  const r = cn({
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
  } = dU(r), {
    chartsDataProviderProps: m,
    chartsSurfaceProps: v
  } = PU(i), C = ((S = r.slots) == null ? void 0 : S.tooltip) ?? M6, b = (k = r.slots) == null ? void 0 : k.toolbar;
  return /* @__PURE__ */ M(aW, L({}, m, {
    children: /* @__PURE__ */ oe($W, L({}, o, {
      ref: n,
      children: [r.showToolbar && b ? /* @__PURE__ */ M(b, L({}, (I = r.slotProps) == null ? void 0 : I.toolbar)) : null, !r.hideLegend && /* @__PURE__ */ M(B6, L({}, x)), /* @__PURE__ */ oe(TW, L({}, v, {
        children: [/* @__PURE__ */ M(oU, L({}, s)), /* @__PURE__ */ oe("g", L({}, l, {
          children: [/* @__PURE__ */ M(Ez, L({}, u)), /* @__PURE__ */ M(zz, L({}, c)), /* @__PURE__ */ M(lU, L({}, p)), /* @__PURE__ */ M(V6, L({}, h))]
        })), /* @__PURE__ */ M(LW, {}), /* @__PURE__ */ M(EF, L({}, f)), /* @__PURE__ */ M("g", {
          "data-drawing-container": !0,
          children: /* @__PURE__ */ M(Kz, L({}, d))
        }), /* @__PURE__ */ M(q6, L({}, g)), /* @__PURE__ */ M(j6, L({}, a)), y]
      })), !r.loading && /* @__PURE__ */ M(C, L({}, ($ = r.slotProps) == null ? void 0 : $.tooltip))]
    }))
  }));
});
function DW(e) {
  const t = Al(() => zW(e)).current;
  return t.next = e, we(t.effect), t;
}
function zW(e) {
  const t = {
    current: e,
    next: e,
    effect: () => {
      t.current = t.next;
    }
  };
  return t;
}
const GC = to.createContext(null);
function FW(e) {
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
function BW(e) {
  if (e.autoTimeout != null)
    return e.autoTimeout;
  const t = FW(e.timeout);
  return e.currentStatus === "entering" ? e.isAppearing ? t.appear ?? t.enter ?? null : t.enter ?? null : t.exit ?? null;
}
function tM(e) {
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
  } = e, C = gt(GC), b = C && !C.isMounting ? r : n, [S, k] = Le(() => t ? b ? "exited" : "entered" : i || s ? "unmounted" : "exited"), I = V(S);
  I.current = S, t && S === "unmounted" && (I.current = "exited", k("exited"));
  const $ = V(t && b), O = V(!1), R = V(null), w = V(S), E = V(!1), T = V(u), P = DW({
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
  }), _ = le(() => {
    R.current !== null && (R.current.cancel(), R.current = null);
  }, []), N = le((W) => {
    let q = !0;
    const J = () => {
      q && (q = !1, R.current = null, W());
    };
    return J.cancel = () => {
      q = !1;
    }, R.current = J, J;
  }, []), A = le((W, q) => {
    var xe, Te;
    let J;
    const ae = () => {
      J !== void 0 && (clearTimeout(J), J = void 0);
    }, ee = N(() => {
      ae(), I.current = W, k(W);
    }), ne = ee.cancel;
    ee.cancel = () => {
      ae(), ne();
    };
    const Z = P.current.nodeRef.current, H = P.current.addEndListener, X = P.current.getAutoTimeout !== void 0, re = (Te = (xe = P.current).getAutoTimeout) == null ? void 0 : Te.call(xe), B = BW({
      currentStatus: q,
      isAppearing: E.current,
      timeout: P.current.timeout,
      autoTimeout: re
    }), ue = T.current, Q = B ?? (ue && X ? 0 : null), Ie = (Mt) => {
      J = setTimeout(ee, Mt);
    };
    if (!Z) {
      Ie(0);
      return;
    }
    if (H) {
      Q != null && Ie(ue ? 0 : Q), H.length >= 2 ? H(Z, ee) : H(ee);
      return;
    }
    Ie(ue ? 0 : B ?? 0);
  }, [N, P]), D = le((W) => {
    var ae;
    const q = P.current, J = q.parentGroup ? q.parentGroup.isMounting : W;
    if (E.current = J, !W && !q.enter) {
      I.current = "entered", k("entered");
      return;
    }
    T.current = q.reduceMotion, (ae = q.onEnter) == null || ae.call(q, J), I.current = "entering", k("entering");
  }, [P]), z = le(() => {
    var q;
    const W = P.current;
    if (!W.exit) {
      I.current = "exited", k("exited");
      return;
    }
    T.current = W.reduceMotion, (q = W.onExit) == null || q.call(W), I.current = "exiting", k("exiting");
  }, [P]), U = le((W, q) => {
    if (_(), q === "entering") {
      const J = P.current;
      if (J.mountOnEnter || J.unmountOnExit) {
        const ae = J.nodeRef.current;
        ae && xm(ae);
      }
      D(W);
    } else
      z();
  }, [_, D, z, P]);
  return we(() => (O.current = !0, $.current && ($.current = !1, U(!0, "entering")), () => {
    O.current = !1, _();
  }), [_, U]), we(() => {
    if (!O.current)
      return;
    const W = I.current;
    t ? W !== "entering" && W !== "entered" && U(!1, "entering") : W === "entering" || W === "entered" ? U(!1, "exiting") : W === "exited" && s && (I.current = "unmounted", k("unmounted"));
  }, [t, S, s, U]), we(() => {
    var J, ae, ee, ne;
    if (S === "unmounted" || w.current === "unmounted") {
      w.current = S;
      return;
    }
    if (w.current === S)
      return;
    w.current = S;
    const q = P.current;
    S === "entering" ? ((J = q.onEntering) == null || J.call(q, E.current), A("entered", "entering")) : S === "exiting" ? ((ae = q.onExiting) == null || ae.call(q), A("exited", "exiting")) : S === "entered" ? (ee = q.onEntered) == null || ee.call(q, E.current) : S === "exited" && ((ne = q.onExited) == null || ne.call(q));
  }, [P, A, S]), S === "unmounted" ? null : /* @__PURE__ */ M(GC.Provider, {
    value: null,
    children: m(S, v)
  });
}
function yr(e, t) {
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
  } = i, f = c[e] || r, h = fS(d[e], o), {
    props: {
      component: g,
      ...x
    },
    internalRef: y
  } = dS({
    className: n,
    ...l,
    externalForwardedProps: e === "root" ? p : void 0,
    externalSlotProps: h
  }), m = ot(y, h == null ? void 0 : h.ref, t.ref), v = e === "root" ? g || u : g, C = lS(f, {
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
function UW(e) {
  return be("MuiPaper", e);
}
he("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const HW = (e) => {
  const {
    square: t,
    elevation: n,
    variant: r,
    classes: o
  } = e, i = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${n}`]
  };
  return ve(i, UW, o);
}, WW = K("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], !n.square && t.rounded, n.variant === "elevation" && t[`elevation${n.elevation}`]];
  }
})(je(({
  theme: e
}) => ({
  backgroundColor: (e.vars || e).palette.background.paper,
  color: (e.vars || e).palette.text.primary,
  ...vt(e, "box-shadow"),
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
}))), ka = /* @__PURE__ */ ce(function(t, n) {
  var f;
  const r = We({
    props: t,
    name: "MuiPaper"
  }), o = Qt(), {
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
  }, p = HW(d);
  return /* @__PURE__ */ M(WW, {
    as: s,
    ownerState: d,
    className: ie(p.root, i),
    ref: n,
    ...c,
    style: {
      ...u === "elevation" && {
        "--Paper-shadow": (o.vars || o).shadows[a],
        ...o.vars && {
          "--Paper-overlay": (f = o.vars.overlays) == null ? void 0 : f[a]
        },
        ...!o.vars && o.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${fc("#fff", Ih(a))}, ${fc("#fff", Ih(a))})`
        }
      },
      ...c.style
    }
  });
});
function ac(e, t) {
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
const GW = RU(/* @__PURE__ */ M("path", {
  d: "M7 10l5 5 5-5z"
})), VW = {
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
}, jW = {
  opacity: 0,
  visibility: "hidden"
}, YW = /* @__PURE__ */ ce(function(t, n) {
  const r = Qt(), o = {
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
  } = t, C = Yy(r.motion.reducedMotion, l), b = V(null), S = ot(b, nu(a), n), k = Tn(b, f), I = Tn(b, (T, P) => {
    C.shouldReduceMotion || xm(T);
    const _ = mc({
      style: y,
      timeout: m,
      easing: u
    }, {
      mode: "enter"
    }), N = C.getTransitionTiming({
      duration: _.duration,
      delay: _.delay
    });
    T.style.transition = r.transitions.create("opacity", {
      duration: N.duration,
      easing: _.easing,
      delay: N.delay
    }), d && d(T, P);
  }), $ = Tn(b, p), O = Tn(b, x), R = Tn(b, (T) => {
    const P = mc({
      style: y,
      timeout: m,
      easing: u
    }, {
      mode: "exit"
    }), _ = C.getTransitionTiming({
      duration: P.duration,
      delay: P.delay
    });
    T.style.transition = r.transitions.create("opacity", {
      duration: _.duration,
      easing: P.easing,
      delay: _.delay
    }), h && h(T);
  }), w = Tn(b, (T) => {
    T.style.transition = "", g && g(T);
  });
  return /* @__PURE__ */ M(tM, {
    appear: s,
    in: c,
    nodeRef: b,
    onEnter: I,
    onEntered: $,
    onEntering: k,
    onExit: R,
    onExited: w,
    onExiting: O,
    addEndListener: i ? (T) => {
      i(b.current, T);
    } : void 0,
    reduceMotion: C.shouldReduceMotion,
    timeout: m,
    ...v,
    children: (T, {
      ownerState: P,
      ..._
    }) => {
      const N = aS(T, c, VW, jW, y, a.props.style);
      return /* @__PURE__ */ bo(a, {
        style: N,
        ref: S,
        ..._
      });
    }
  });
});
function KW(e) {
  return be("MuiBackdrop", e);
}
he("MuiBackdrop", ["root", "invisible"]);
const XW = (e) => {
  const {
    classes: t,
    invisible: n
  } = e;
  return ve({
    root: ["root", n && "invisible"]
  }, KW, t);
}, qW = K("div", {
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
}), QW = /* @__PURE__ */ ce(function(t, n) {
  const r = We({
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
  }, h = XW(f), g = {
    component: s,
    slots: c,
    slotProps: u
  }, [x, y] = yr("root", {
    elementType: qW,
    externalForwardedProps: g,
    className: ie(h.root, i),
    ownerState: f
  }), [m, v] = yr("transition", {
    elementType: YW,
    externalForwardedProps: g,
    ownerState: f
  });
  return /* @__PURE__ */ M(m, {
    in: l,
    timeout: d,
    ...p,
    ...v,
    children: /* @__PURE__ */ M(x, {
      ...y,
      ref: n,
      children: o
    })
  });
}), ZW = he("MuiBox", ["root"]), JW = rS(), Wi = qA({
  themeId: _s,
  defaultTheme: JW,
  defaultClassName: ZW.root,
  generateClassName: Uw.generate
});
function nM(e = window) {
  const t = e.document.documentElement.clientWidth;
  return e.innerWidth - t;
}
function eG(e) {
  const t = St(e);
  return t.body === e ? vr(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function za(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function VC(e) {
  return parseFloat(vr(e).getComputedStyle(e).paddingRight) || 0;
}
function tG(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(e.tagName), r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function jC(e, t, n, r, o) {
  const i = [t, n, ...r];
  [].forEach.call(e.children, (s) => {
    const a = !i.includes(s), l = !tG(s);
    a && l && za(s, o);
  });
}
function yh(e, t) {
  let n = -1;
  return e.some((r, o) => t(r) ? (n = o, !0) : !1), n;
}
function nG(e, t) {
  const n = [], r = e.container;
  if (!t.disableScrollLock) {
    if (eG(r)) {
      const s = nM(vr(r));
      n.push({
        value: r.style.paddingRight,
        property: "padding-right",
        el: r
      }), r.style.paddingRight = `${VC(r) + s}px`;
      const a = St(r).querySelectorAll(".mui-fixed");
      [].forEach.call(a, (l) => {
        n.push({
          value: l.style.paddingRight,
          property: "padding-right",
          el: l
        }), l.style.paddingRight = `${VC(l) + s}px`;
      });
    }
    let i;
    if (r.parentNode instanceof DocumentFragment)
      i = St(r).body;
    else {
      const s = r.parentElement, a = vr(r);
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
function rG(e) {
  const t = [];
  return [].forEach.call(e.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && t.push(n);
  }), t;
}
class oG {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && za(t.modalRef, !1);
    const o = rG(n);
    jC(n, t.mount, t.modalRef, o, !0);
    const i = yh(this.containers, (s) => s.container === n);
    return i !== -1 ? (this.containers[i].modals.push(t), r) : (this.containers.push({
      modals: [t],
      container: n,
      restore: null,
      hiddenSiblings: o
    }), r);
  }
  mount(t, n) {
    const r = yh(this.containers, (i) => i.modals.includes(t)), o = this.containers[r];
    o.restore || (o.restore = nG(o, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1)
      return r;
    const o = yh(this.containers, (s) => s.modals.includes(t)), i = this.containers[o];
    if (i.modals.splice(i.modals.indexOf(t), 1), this.modals.splice(r, 1), i.modals.length === 0)
      i.restore && i.restore(), t.modalRef && za(t.modalRef, n), jC(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1), this.containers.splice(o, 1);
    else {
      const s = i.modals[i.modals.length - 1];
      s.modalRef && za(s.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const YC = "data-mui-focusable";
function KC(e) {
  return e ? e.hasAttribute(YC) ? e : e.querySelector(`[${YC}]`) : null;
}
const iG = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function rM(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function sG(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function aG(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || sG(e));
}
function lG(e) {
  const t = [], n = [];
  return Array.from(e.querySelectorAll(iG)).forEach((r, o) => {
    const i = rM(r);
    i === -1 || !aG(r) || (i === 0 ? t.push(r) : n.push({
      documentOrder: o,
      tabIndex: i,
      node: r
    }));
  }), n.sort((r, o) => r.tabIndex === o.tabIndex ? r.documentOrder - o.documentOrder : r.tabIndex - o.tabIndex).map((r) => r.node).concat(t);
}
function uG() {
  return !0;
}
function cG(e) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: o = !1,
    getTabbable: i = lG,
    isEnabled: s = uG,
    open: a
  } = e, l = V(!1), u = V(null), c = V(null), d = V(null), p = V(null), f = V(!1), h = V(null), g = ot(nu(t), h), x = V(null);
  fe(() => {
    !a || !h.current || (f.current = !n);
  }, [n, a]), fe(() => {
    if (l.current = !1, !a || !h.current)
      return;
    const v = St(h.current), C = Er(v), b = KC(h.current) ?? h.current;
    return ac(h.current, C) || (b.hasAttribute("tabIndex") || b.setAttribute("tabIndex", "-1"), f.current && b.focus()), () => {
      !o && d.current && (l.current = !0, d.current.focus(), d.current = null);
    };
  }, [a]), fe(() => {
    if (!a || !h.current)
      return;
    const v = St(h.current), C = (k) => {
      if (x.current = k, r || !s() || k.key !== "Tab")
        return;
      const I = h.current, $ = Er(v);
      if (I === null)
        return;
      const O = KC(I);
      if ($ === I || $ === O) {
        const w = i(I);
        if (w.length === 0)
          return;
        k.preventDefault(), k.shiftKey ? w[w.length - 1].focus() : w[0].focus();
        return;
      }
      if (ac(I, $)) {
        const w = i(I), E = w.indexOf($);
        if (E === -1 || !w.some((_) => rM(_) > 0))
          return;
        k.preventDefault();
        let P = 0;
        k.shiftKey ? P = E <= 0 ? w.length - 1 : E - 1 : P = E === w.length - 1 ? 0 : E + 1, w[P].focus();
      }
    }, b = () => {
      var O, R;
      const k = h.current;
      if (k === null)
        return;
      const I = Er(v);
      if (!v.hasFocus() || !s() || l.current) {
        l.current = !1;
        return;
      }
      if (ac(k, I) || r && I !== u.current && I !== c.current)
        return;
      if (I !== p.current)
        p.current = null;
      else if (p.current !== null)
        return;
      if (!f.current)
        return;
      let $ = [];
      if ((I === u.current || I === c.current) && ($ = i(h.current)), $.length > 0) {
        const w = !!((O = x.current) != null && O.shiftKey && ((R = x.current) == null ? void 0 : R.key) === "Tab"), E = $[0], T = $[$.length - 1];
        typeof E != "string" && typeof T != "string" && (w ? T.focus() : E.focus());
      } else
        k.focus();
    };
    v.addEventListener("focusin", b), v.addEventListener("keydown", C, !0);
    const S = setInterval(() => {
      const k = Er(v);
      k && k.tagName === "BODY" && b();
    }, 50);
    return () => {
      clearInterval(S), v.removeEventListener("focusin", b), v.removeEventListener("keydown", C, !0);
    };
  }, [n, r, o, s, a, i]);
  const y = (v) => {
    d.current === null && (d.current = v.relatedTarget), f.current = !0, p.current = v.target;
    const C = t.props.onFocus;
    C && C(v);
  }, m = (v) => {
    d.current === null && (d.current = v.relatedTarget), f.current = !0;
  };
  return /* @__PURE__ */ oe(He, {
    children: [/* @__PURE__ */ M("div", {
      tabIndex: a ? 0 : -1,
      onFocus: m,
      ref: u,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ bo(t, {
      ref: g,
      onFocus: y
    }), /* @__PURE__ */ M("div", {
      tabIndex: a ? 0 : -1,
      onFocus: m,
      ref: c,
      "data-testid": "sentinelEnd"
    })]
  });
}
function dG(e) {
  return typeof e == "function" ? e() : e;
}
function fG(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const XC = () => {
}, zu = new oG();
function pG(e) {
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
  } = e, c = V({}), d = V(null), p = V(null), f = ot(p, u), [h, g] = Le(!l), x = fG(s);
  let y = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (y = !1);
  const m = () => St(d.current), v = () => (c.current.modalRef = p.current, c.current.mount = d.current, c.current), C = () => {
    zu.mount(v(), {
      disableScrollLock: n
    }), p.current && (p.current.scrollTop = 0);
  }, b = ge(() => {
    const T = dG(t) || m().body;
    zu.add(v(), T), p.current && C();
  }), S = () => zu.isTopModal(v()), k = ge((T) => {
    d.current = T, T && (l && S() ? C() : p.current && za(p.current, y));
  }), I = le(() => {
    zu.remove(v(), y);
  }, [y]);
  fe(() => () => {
    I();
  }, [I]), fe(() => {
    l ? b() : (!x || !r) && I();
  }, [l, I, x, r, b]);
  const $ = (T) => (P) => {
    var _;
    (_ = T.onKeyDown) == null || _.call(T, P), !(P.key !== "Escape" || P.which === 229 || // Wait until IME is settled.
    !S()) && (P.stopPropagation(), a && a(P, "escapeKeyDown"));
  }, O = (T) => (P) => {
    var _;
    (_ = T.onClick) == null || _.call(T, P), P.target === P.currentTarget && a && a(P, "backdropClick");
  };
  return {
    getRootProps: (T = {}) => {
      const P = cS(e);
      delete P.onTransitionEnter, delete P.onTransitionExited;
      const _ = {
        ...P,
        ...T
      };
      return {
        /*
         * Marking an element with the role presentation indicates to assistive technology
         * that this element should be ignored; it exists to support the web application and
         * is not meant for humans to interact with directly.
         * https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
         */
        role: "presentation",
        ..._,
        onKeyDown: $(_),
        ref: f
      };
    },
    getBackdropProps: (T = {}) => {
      const P = T;
      return {
        "aria-hidden": !0,
        ...P,
        onClick: O(P),
        open: l
      };
    },
    getTransitionProps: () => {
      const T = () => {
        g(!1), o && o();
      }, P = () => {
        g(!0), i && i(), r && I();
      };
      return {
        onEnter: RC(T, (s == null ? void 0 : s.props.onEnter) ?? XC),
        onExited: RC(P, (s == null ? void 0 : s.props.onExited) ?? XC)
      };
    },
    rootRef: f,
    portalRef: k,
    isTopModal: S,
    exited: h,
    hasTransition: x
  };
}
function hG(e) {
  return be("MuiModal", e);
}
he("MuiModal", ["root", "hidden", "backdrop"]);
const gG = (e) => {
  const {
    open: t,
    exited: n,
    classes: r
  } = e;
  return ve({
    root: ["root", !t && n && "hidden"],
    backdrop: ["backdrop"]
  }, hG, r);
}, mG = K("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.open && n.exited && t.hidden];
  }
})(je(({
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
}))), yG = K(QW, {
  name: "MuiModal",
  slot: "Backdrop"
})({
  zIndex: -1
}), vG = /* @__PURE__ */ ce(function(t, n) {
  const r = We({
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
    slotProps: b = {},
    slots: S = {},
    // eslint-disable-next-line react/prop-types
    theme: k,
    ...I
  } = r, $ = {
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
    getBackdropProps: R,
    getTransitionProps: w,
    portalRef: E,
    isTopModal: T,
    exited: P,
    hasTransition: _
  } = pG({
    ...$,
    rootRef: n
  }), N = {
    ...$,
    exited: P
  }, A = gG(N), D = {};
  if (a.props.tabIndex === void 0 && (D.tabIndex = "-1"), _) {
    const {
      onEnter: ae,
      onExited: ee
    } = w();
    D.onEnter = ae, D.onExited = ee;
  }
  const z = {
    slots: S,
    slotProps: b
  }, [U, W] = yr("root", {
    ref: n,
    elementType: mG,
    externalForwardedProps: {
      ...z,
      ...I,
      component: u
    },
    getSlotProps: O,
    ownerState: N,
    className: ie(i, A == null ? void 0 : A.root, !N.open && N.exited && (A == null ? void 0 : A.hidden))
  }), [q, J] = yr("backdrop", {
    elementType: yG,
    externalForwardedProps: z,
    shouldForwardComponentProp: !0,
    getSlotProps: (ae) => R({
      ...ae,
      onClick: (ee) => {
        ae != null && ae.onClick && ae.onClick(ee);
      }
    }),
    className: A == null ? void 0 : A.backdrop,
    ownerState: N
  });
  return !x && !C && (!_ || P) ? null : /* @__PURE__ */ M(EP, {
    ref: E,
    container: l,
    disablePortal: p,
    children: /* @__PURE__ */ oe(U, {
      ...W,
      children: [g ? null : /* @__PURE__ */ M(q, {
        ...J
      }), /* @__PURE__ */ M(cG, {
        disableEnforceFocus: d,
        disableAutoFocus: c,
        disableRestoreFocus: f,
        isEnabled: T,
        open: C,
        children: /* @__PURE__ */ bo(a, D)
      })]
    })
  });
}), qC = he("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "vertical", "withChildren", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]), xG = (e) => {
  const {
    classes: t,
    disableUnderline: n,
    startAdornment: r,
    endAdornment: o,
    size: i,
    hiddenLabel: s,
    multiline: a
  } = e, l = {
    root: ["root", !n && "underline", r && "adornedStart", o && "adornedEnd", i === "small" && `size${Re(i)}`, s && "hiddenLabel", a && "multiline"],
    input: ["input"]
  }, u = ve(l, LR, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...u
  };
}, CG = K(tf, {
  shouldForwardProp: (e) => Un(e) || e === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...Jd(e, t), !n.disableUnderline && t.underline];
  }
})(je(({
  theme: e
}) => {
  const t = e.palette.mode === "light", n = t ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)", r = t ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)", o = t ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)", i = t ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
  return {
    position: "relative",
    backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r,
    borderTopLeftRadius: (e.vars || e).shape.borderRadius,
    borderTopRightRadius: (e.vars || e).shape.borderRadius,
    ...vt(e, "background-color", {
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
    [`&.${zo.focused}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r
    },
    [`&.${zo.disabled}`]: {
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
          ...vt(e, "transform", {
            duration: e.transitions.duration.shorter,
            easing: e.transitions.easing.easeOut
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&.${zo.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${zo.error}`]: {
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
          ...vt(e, "border-bottom-color", {
            duration: e.transitions.duration.shorter
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&:hover:not(.${zo.disabled}, .${zo.error}):before`]: {
          borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`
        },
        [`&.${zo.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, ...Object.entries(e.palette).filter(Xr()).map(([s]) => {
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
})), wG = K(nf, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: ef
})(je(({
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
}))), oM = /* @__PURE__ */ ce(function(t, n) {
  const r = We({
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
  }, g = xG(r), x = {
    root: {
      ownerState: h
    },
    input: {
      ownerState: h
    }
  }, y = c ? Xt(x, c) : x, m = d.root ?? CG, v = d.input ?? wG;
  return /* @__PURE__ */ M(wm, {
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
oM.muiName = "Input";
function SG(e) {
  return be("MuiFormControl", e);
}
he("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const bG = (e) => {
  const {
    classes: t,
    margin: n,
    fullWidth: r
  } = e, o = {
    root: ["root", n !== "none" && `margin${Re(n)}`, r && "fullWidth"]
  };
  return ve(o, SG, t);
}, kG = K("div", {
  name: "MuiFormControl",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[`margin${Re(n.margin)}`], n.fullWidth && t.fullWidth];
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
}), QC = /* @__PURE__ */ ce(function(t, n) {
  const r = We({
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
  }, v = bG(m), [C, b] = Le(() => {
    let P = !1;
    return o && rs.forEach(o, (_) => {
      if (!Ku(_, ["Input", "Select"]))
        return;
      const N = Ku(_, ["Select"]) ? _.props.input : _;
      N && MR(N.props) && (P = !0);
    }), P;
  }), [S, k] = Le(() => {
    let P = !1;
    return o && rs.forEach(o, (_) => {
      Ku(_, ["Input", "Select"]) && (gc(_.props, !0) || gc(_.props.inputProps, !0)) && (P = !0);
    }), P;
  }), [I, $] = Le(!1);
  l && I && $(!1);
  const O = c !== void 0 && !l ? c : I;
  let R;
  V(!1);
  const w = le(() => {
    k(!0);
  }, []), E = le(() => {
    k(!1);
  }, []), T = Se(() => ({
    adornedStart: C,
    setAdornedStart: b,
    color: s,
    disabled: l,
    error: u,
    filled: S,
    focused: O,
    fullWidth: d,
    hiddenLabel: p,
    size: g,
    onBlur: () => {
      $(!1);
    },
    onFocus: () => {
      $(!0);
    },
    onEmpty: E,
    onFilled: w,
    registerEffect: R,
    required: h,
    variant: x
  }), [C, s, l, u, S, O, d, p, R, E, w, h, g, x]);
  return /* @__PURE__ */ M(vm.Provider, {
    value: T,
    children: /* @__PURE__ */ M(kG, {
      as: a,
      ownerState: m,
      className: ie(v.root, i),
      ref: n,
      ...y,
      children: o
    })
  });
}), IG = (e) => {
  const {
    classes: t,
    color: n,
    focused: r,
    disabled: o,
    error: i,
    filled: s,
    required: a
  } = e, l = {
    root: ["root", `color${Re(n)}`, o && "disabled", i && "error", s && "filled", r && "focused", a && "required"],
    asterisk: ["asterisk", i && "error"]
  };
  return ve(l, NR, t);
}, TG = K("label", {
  name: "MuiFormLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color === "secondary" && t.colorSecondary, n.filled && t.filled];
  }
})(je(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  ...e.typography.body1,
  lineHeight: "1.4375em",
  padding: 0,
  position: "relative",
  variants: [...Object.entries(e.palette).filter(Xr()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      [`&.${Ia.focused}`]: {
        color: (e.vars || e).palette[t].main
      }
    }
  })), {
    props: {},
    style: {
      [`&.${Ia.disabled}`]: {
        color: (e.vars || e).palette.text.disabled
      },
      [`&.${Ia.error}`]: {
        color: (e.vars || e).palette.error.main
      }
    }
  }]
}))), PG = K("span", {
  name: "MuiFormLabel",
  slot: "Asterisk"
})(je(({
  theme: e
}) => ({
  [`&.${Ia.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}))), MG = /* @__PURE__ */ ce(function(t, n) {
  const r = We({
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
  } = r, [h] = Ml({
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
  }, x = IG(g);
  return /* @__PURE__ */ oe(TG, {
    as: a,
    ownerState: g,
    className: ie(x.root, i),
    ref: n,
    ...f,
    children: [o, h.required && /* @__PURE__ */ oe(PG, {
      ownerState: g,
      "aria-hidden": !0,
      className: x.asterisk,
      children: [" ", "*"]
    })]
  });
}), pa = F2({
  createStyledComponent: K("div", {
    name: "MuiGrid",
    slot: "Root",
    overridesResolver: (e, t) => {
      const {
        ownerState: n
      } = e;
      return [t.root, n.container && t.container];
    }
  }),
  componentName: "MuiGrid",
  useThemeProps: (e) => We({
    props: e,
    name: "MuiGrid"
  }),
  useTheme: Qt
});
function Fa(e) {
  return `scale(${e}, ${e ** 2})`;
}
const EG = {
  entering: {
    opacity: 1,
    transform: Fa(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  },
  exiting: {
    opacity: 0,
    transform: Fa(0.75)
  },
  exited: {
    opacity: 0,
    transform: Fa(0.75)
  }
}, AG = {
  opacity: 0,
  transform: Fa(0.75),
  visibility: "hidden"
}, Yg = /* @__PURE__ */ ce(function(t, n) {
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
  } = t, m = V(null), v = Qt(), C = Yy(v.motion.reducedMotion, s), b = V(null), S = ot(b, nu(i), n), k = Tn(b, d), I = Tn(b, (T, P) => {
    C.shouldReduceMotion || xm(T);
    const {
      duration: _,
      delay: N,
      easing: A
    } = mc({
      style: g,
      timeout: x,
      easing: a
    }, {
      mode: "enter"
    });
    let D;
    x === "auto" && !C.shouldReduceMotion ? (D = v.transitions.getAutoHeightDuration(T.clientHeight), m.current = D) : (D = _, m.current = null);
    const z = C.getTransitionTiming({
      duration: D,
      delay: N
    });
    T.style.transition = [v.transitions.create("opacity", {
      duration: z.duration,
      delay: z.delay
    }), v.transitions.create("transform", {
      duration: typeof z.duration == "string" ? z.duration : z.duration * 0.666,
      delay: z.delay,
      easing: A
    })].join(","), u && u(T, P);
  }), $ = Tn(b, c), O = Tn(b, h), R = Tn(b, (T) => {
    const {
      duration: P,
      delay: _,
      easing: N
    } = mc({
      style: g,
      timeout: x,
      easing: a
    }, {
      mode: "exit"
    });
    let A;
    x === "auto" && !C.shouldReduceMotion ? (A = v.transitions.getAutoHeightDuration(T.clientHeight), m.current = A) : (A = P, m.current = null);
    const D = C.getTransitionTiming({
      duration: A,
      delay: _
    });
    T.style.transition = [v.transitions.create("opacity", {
      duration: D.duration,
      delay: D.delay
    }), v.transitions.create("transform", {
      duration: typeof D.duration == "string" ? D.duration : D.duration * 0.666,
      delay: D.delay || (typeof D.duration == "string" ? D.duration : D.duration * 0.333),
      easing: N
    })].join(","), T.style.opacity = 0, T.style.transform = Fa(0.75), p && p(T);
  }), w = Tn(b, (T) => {
    T.style.transition = "", f && f(T);
  });
  return /* @__PURE__ */ M(tM, {
    appear: o,
    in: l,
    nodeRef: b,
    onEnter: I,
    onEntered: $,
    onEntering: k,
    onExit: R,
    onExited: w,
    onExiting: O,
    addEndListener: r ? (T) => {
      r(b.current, T);
    } : void 0,
    getAutoTimeout: x === "auto" ? () => m.current : void 0,
    reduceMotion: C.shouldReduceMotion,
    timeout: x === "auto" ? null : x,
    ...y,
    children: (T, {
      ownerState: P,
      ..._
    }) => {
      const N = aS(T, l, EG, AG, g, i.props.style);
      return /* @__PURE__ */ bo(i, {
        style: N,
        ref: S,
        ..._
      });
    }
  });
});
Yg && (Yg.muiSupportAuto = !0);
function RG(e) {
  return be("MuiInputLabel", e);
}
const _G = he("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]), OG = (e) => {
  const {
    classes: t,
    disableUnderline: n
  } = e, o = ve({
    root: ["root", !n && "underline"],
    input: ["input"]
  }, DR, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...o
  };
}, $G = K(tf, {
  shouldForwardProp: (e) => Un(e) || e === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...Jd(e, t), !n.disableUnderline && t.underline];
  }
})(je(({
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
        [`label + &, .${_G.root} + &`]: {
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
          ...vt(e, "transform", {
            duration: e.transitions.duration.shorter,
            easing: e.transitions.easing.easeOut
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&.${qs.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${qs.error}`]: {
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
          ...vt(e, "border-bottom-color", {
            duration: e.transitions.duration.shorter
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&:hover:not(.${qs.disabled}, .${qs.error}):before`]: {
          borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            borderBottom: `1px solid ${n}`
          }
        },
        [`&.${qs.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, ...Object.entries(e.palette).filter(Xr()).map(([r]) => ({
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
})), LG = K(nf, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: ef
})({}), iM = /* @__PURE__ */ ce(function(t, n) {
  const r = We({
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
  } = r, f = OG(r), g = {
    root: {
      ownerState: {
        disableUnderline: o
      }
    }
  }, x = u ? Xt(u, g) : g, y = c.root ?? $G, m = c.input ?? LG;
  return /* @__PURE__ */ M(wm, {
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
iM.muiName = "Input";
const NG = (e) => {
  const {
    classes: t,
    formControl: n,
    size: r,
    shrink: o,
    disableAnimation: i,
    variant: s,
    required: a
  } = e, l = {
    root: ["root", n && "formControl", !i && "animated", o && "shrink", r && r !== "medium" && `size${Re(r)}`, s],
    asterisk: [a && "asterisk"]
  }, u = ve(l, RG, t);
  return {
    ...t,
    // forward the focused, disabled, etc. classes to the FormLabel
    ...u
  };
}, DG = K(MG, {
  shouldForwardProp: (e) => Un(e) || e === "classes",
  name: "MuiInputLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${Ia.asterisk}`]: t.asterisk
    }, t.root, n.formControl && t.formControl, n.size === "small" && t.sizeSmall, n.shrink && t.shrink, !n.disableAnimation && t.animated, n.focused && t.focused, t[n.variant]];
  }
})(je(({
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
      ...vt(e, ["color", "transform", "max-width"], {
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
}))), ZC = /* @__PURE__ */ ce(function(t, n) {
  const r = We({
    name: "MuiInputLabel",
    props: t
  }), {
    disableAnimation: o = !1,
    margin: i,
    shrink: s,
    variant: a,
    className: l,
    ...u
  } = r, [c, d] = Ml({
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
  }, h = NG(f);
  return /* @__PURE__ */ M(DG, {
    "data-shrink": p,
    ref: n,
    className: ie(h.root, l),
    ...u,
    ownerState: f,
    classes: h
  });
}), Kg = /* @__PURE__ */ Bt({});
function zG(e) {
  return be("MuiList", e);
}
he("MuiList", ["root", "padding", "dense", "subheader"]);
const FG = (e) => {
  const {
    classes: t,
    disablePadding: n,
    dense: r,
    subheader: o
  } = e;
  return ve({
    root: ["root", !n && "padding", r && "dense", o && "subheader"]
  }, zG, t);
}, BG = K("ul", {
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
}), UG = /* @__PURE__ */ ce(function(t, n) {
  const r = We({
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
  } = r, d = Se(() => ({
    dense: a
  }), [a]), p = {
    ...r,
    component: s,
    dense: a,
    disablePadding: l
  }, f = FG(p);
  return /* @__PURE__ */ M(Kg.Provider, {
    value: d,
    children: /* @__PURE__ */ oe(BG, {
      as: s,
      className: ie(f.root, i),
      ref: n,
      ownerState: p,
      ...c,
      children: [u, o]
    })
  });
}), JC = he("MuiListItemIcon", ["root", "alignItemsFlexStart"]), ew = he("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]), sM = /* @__PURE__ */ Bt(void 0);
function HG() {
  const e = gt(sM);
  if (e === void 0)
    throw new Error("MUI: RovingTabIndexContext is missing. Roving tab index items must be placed within a roving tab index provider.");
  return e;
}
const WG = Object.is;
function GG(e, t) {
  if (e === t)
    return !0;
  if (!(e instanceof Object) || !(t instanceof Object))
    return !1;
  let n = 0, r = 0;
  for (const o in e)
    if (n += 1, !WG(e[o], t[o]) || !(o in t))
      return !1;
  for (const o in t)
    r += 1;
  return n === r;
}
const VG = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown", "Home", "End"];
function jG(e) {
  const {
    activeItemId: t,
    getDefaultActiveItemId: n,
    orientation: r,
    isRtl: o = !1,
    isItemFocusable: i = Ba,
    wrap: s = !0
  } = e, [a, l] = Le(t), [u, c] = Le(t);
  let d = a;
  t !== u && (c(t), t !== void 0 && t !== a && (d = t, l(t)));
  const p = V(null), f = V(/* @__PURE__ */ new Map()), [h, g] = Le(0), x = Se(() => Xg(f.current), [h]), y = tw(d, x, i, n), m = V(y);
  m.current = y;
  const v = le(() => {
    const w = Xg(f.current), E = tw(m.current, w, i, n);
    return uM(w, E);
  }, [n, i]), C = le(() => f.current, []), b = ge((w) => {
    const E = f.current.get(w.id);
    GG(E ?? null, w) || (f.current.set(w.id, w), g((T) => T + 1));
  }), S = ge((w) => {
    f.current.delete(w) && g((E) => E + 1);
  }), k = ge((w) => {
    l(w);
  }), I = le((w) => m.current === w, []), $ = le((w, E, T, P) => {
    var A;
    const _ = Fu(f.current), N = aM(_, w, E, T, P ?? i);
    return N ? ((A = N.element) == null || A.focus(), l(N.id), N) : null;
  }, [i]), O = le((w) => ({
    onFocus: (P) => {
      const _ = Fu(f.current), N = dM(_, P.target);
      N !== -1 && l(_[N].id);
    },
    onKeyDown: (P) => {
      if (P.altKey || P.shiftKey || P.ctrlKey || P.metaKey || !VG.includes(P.key))
        return;
      let _ = r === "horizontal" ? "ArrowLeft" : "ArrowUp", N = r === "horizontal" ? "ArrowRight" : "ArrowDown";
      r === "horizontal" && o && (_ = "ArrowRight", N = "ArrowLeft");
      const A = Fu(f.current), D = Er(St(p.current)), z = D === p.current;
      let U = nw(A, D, m.current), W = "next";
      switch (P.key) {
        case _:
          W = "previous", P.preventDefault(), z && (U = A.length);
          break;
        case N:
          P.preventDefault(), z && (U = -1);
          break;
        case "Home":
          P.preventDefault(), U = -1;
          break;
        case "End":
          P.preventDefault(), W = "previous", U = A.length;
          break;
        default:
          return;
      }
      $(U, W, s);
    },
    ref: QG(w, (P) => {
      p.current = P;
    })
  }), [$, o, r, s]), R = le((w) => {
    var N;
    const E = Fu(f.current), T = Er(St(p.current)), _ = T === p.current ? -1 : nw(E, T, m.current);
    return ((N = $(_, "next", !0, w)) == null ? void 0 : N.id) ?? null;
  }, [$]);
  return Se(() => ({
    activeItemId: y,
    focusNext: R,
    getActiveItem: v,
    getContainerProps: O,
    getItemMap: C,
    isItemActive: I,
    registerItem: b,
    setActiveItemId: k,
    unregisterItem: S
  }), [y, R, v, O, C, I, b, k, S]);
}
function YG(e) {
  const t = HG(), {
    activeItemId: n,
    registerItem: r,
    unregisterItem: o
  } = t, i = V(null), s = Se(() => ({
    disabled: e.disabled ?? !1,
    element: null,
    focusableWhenDisabled: e.focusableWhenDisabled ?? !1,
    id: e.id,
    selected: e.selected ?? !1,
    textValue: e.textValue
  }), [e.disabled, e.focusableWhenDisabled, e.id, e.selected, e.textValue]), a = V(s);
  a.current = s;
  const l = le((c) => {
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
  }, [e.id, r, o]), u = ot(e.ref, l);
  return we(() => {
    i.current && r({
      ...s,
      element: i.current
    });
  }, [s, r]), we(() => {
    const c = e.id;
    return () => {
      o(c);
    };
  }, [e.id, o]), {
    ref: u,
    tabIndex: n === e.id ? 0 : -1
  };
}
function tw(e, t, n, r) {
  return e != null ? KG(e, t, n) : XG(t, n, r);
}
function KG(e, t, n) {
  var o;
  const r = cM(t, e);
  return r === -1 ? lM(t, n) : n(t[r]) ? t[r].id : ((o = aM(t, r, "next", !1, n)) == null ? void 0 : o.id) ?? null;
}
function XG(e, t, n) {
  const r = n == null ? void 0 : n(e);
  if (r != null) {
    const o = uM(e, r);
    if (o && t(o))
      return o.id;
  }
  return lM(e, t);
}
function nw(e, t, n) {
  if (t) {
    const r = dM(e, t);
    if (r !== -1)
      return r;
  }
  return cM(e, n);
}
function aM(e, t, n, r, o) {
  const i = e.length - 1;
  if (i === -1)
    return null;
  let s = !1, a = rw(t, i, n, r);
  const l = a;
  for (; a !== -1; ) {
    if (a === l) {
      if (s)
        return null;
      s = !0;
    }
    const u = e[a];
    if (!u || !o(u))
      a = rw(a, i, n, r);
    else
      return u;
  }
  return null;
}
function lM(e, t) {
  var n;
  return ((n = e.find((r) => t(r))) == null ? void 0 : n.id) ?? null;
}
function uM(e, t) {
  return t == null ? null : e.find((n) => n.id === t) ?? null;
}
function cM(e, t) {
  return t == null ? -1 : e.findIndex((n) => n.id === t);
}
function dM(e, t) {
  return t ? e.findIndex((n) => {
    var r;
    return n.element === t || ((r = n.element) == null ? void 0 : r.contains(t));
  }) : -1;
}
function Xg(e) {
  const t = Array.from(e.values());
  if (t.every((o) => o.element == null))
    return t;
  const n = t.filter(qg).sort((o, i) => qG(o.element, i.element)), r = t.filter((o) => !qg(o));
  return [...n, ...r];
}
function Fu(e) {
  return Xg(e).filter(qg);
}
function rw(e, t, n, r = !0) {
  return n === "next" ? e === t ? r ? 0 : -1 : e + 1 : e === 0 ? r ? t : -1 : e - 1;
}
function Ba(e) {
  return e.element ? e.focusableWhenDisabled ? !0 : !e.disabled && !e.element.hasAttribute("disabled") && e.element.getAttribute("aria-disabled") !== "true" && e.element.hasAttribute("tabindex") : !1;
}
function qg(e) {
  return e.element != null && e.element.isConnected;
}
function qG(e, t) {
  if (e === t)
    return 0;
  const n = e.compareDocumentPosition(t);
  return n & Node.DOCUMENT_POSITION_FOLLOWING || n & Node.DOCUMENT_POSITION_CONTAINED_BY ? -1 : n & Node.DOCUMENT_POSITION_PRECEDING || n & Node.DOCUMENT_POSITION_CONTAINS ? 1 : 0;
}
function QG(...e) {
  return (t) => {
    e.forEach((n) => {
      Ug(n ?? null, t);
    });
  };
}
function fM(e, t) {
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
function ZG(e) {
  return e ? e.type === "mousedown" || e.type === "pointerdown" || e.type === "touchstart" ? "pointer" : e.type === "keydown" || e.type === "click" && e.detail === 0 ? "keyboard" : null : null;
}
function JG(e) {
  return e == null || typeof e == "string" && !e.trim();
}
function lc(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
const pM = /* @__PURE__ */ Bt(null);
function hM() {
  return gt(pM);
}
const eV = pM.Provider, gM = /* @__PURE__ */ Bt(void 0);
function tV() {
  const e = gt(gM);
  if (e === void 0)
    throw new Error("MUI: MenuListContext is missing. MenuItems must be placed within Menu or MenuList.");
  return e;
}
function nV(e) {
  const t = (e == null ? void 0 : e.element) ?? e;
  if (!t)
    return "";
  if ((e == null ? void 0 : e.textValue) !== void 0)
    return e.textValue;
  let n = t.innerText;
  return n === void 0 && (n = t.textContent), n ?? "";
}
function mM(e, t) {
  if (t === void 0)
    return !0;
  let n = nV(e);
  return n = n.trim().toLowerCase(), n.length === 0 ? !1 : t.repeating ? n[0] === t.keys[0] : n.startsWith(t.keys.join(""));
}
function rV(e, t) {
  return mM(e, t) ? Ba(e) : !1;
}
function oV(e, t) {
  fM(e, t);
}
const iV = /* @__PURE__ */ ce(function(t, n) {
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
  } = t, f = V(null), h = V(!1), [g, x] = Le(!1), y = hM(), m = V({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  }), v = le((P) => {
    var _, N, A;
    return d === "selectedMenu" ? ((_ = P.find((D) => D.selected && Ba(D))) == null ? void 0 : _.id) ?? ((N = P.find((D) => Ba(D))) == null ? void 0 : N.id) ?? null : ((A = P.find((D) => Ba(D))) == null ? void 0 : A.id) ?? null;
  }, [d]), C = jG({
    activeItemId: void 0,
    getDefaultActiveItemId: v,
    orientation: "vertical",
    wrap: !u
  }), {
    activeItemId: b,
    focusNext: S,
    getActiveItem: k,
    getContainerProps: I,
    getItemMap: $
  } = C, O = ge((P = !1) => {
    if (!f.current || !P && h.current)
      return null;
    if (i) {
      const _ = k();
      if (_ != null && _.element) {
        const N = Array.from($().values()).some((D) => D.selected), A = d === "menu" && N && !_.selected && y == null;
        return x(A), oV(_.element, y), h.current = !0, _.element;
      }
      return o ? (x(!1), f.current.focus(), f.current) : null;
    }
    return o ? (x(!1), f.current.focus(), h.current = !0, f.current) : (x(!1), null);
  });
  we(() => {
    if (!o && !i) {
      h.current = !1, x(!1);
      return;
    }
    O();
  }, [b, i, o, O]), Rs(r, () => ({
    adjustStyleForScrollbar: (P, {
      direction: _
    }) => {
      const N = !f.current.style.width;
      if (P.clientHeight < f.current.clientHeight && N) {
        const A = `${nM(vr(P))}px`;
        f.current.style[_ === "rtl" ? "paddingLeft" : "paddingRight"] = A, f.current.style.width = `calc(100% + ${A})`;
      }
      return f.current;
    },
    focusInitialTarget: () => {
      if (!f.current)
        return null;
      const P = Er(St(f.current));
      return P && ac(f.current, P) ? P : O(!0);
    }
  }), [O]);
  const R = I(), w = ot(f, R.ref, n), E = Se(() => ({
    itemsFocusableWhenDisabled: l,
    suppressInitialFocusVisible: g,
    variant: d
  }), [l, g, d]), T = ge((P) => {
    if (g && x(!1), (P.ctrlKey || P.metaKey || P.altKey) && c) {
      c(P);
      return;
    }
    if (R.onKeyDown(P), P.key.length === 1) {
      const N = m.current, A = P.key.toLowerCase(), D = performance.now();
      N.keys.length > 0 && (D - N.lastTime > 500 ? (N.keys = [], N.repeating = !0, N.previousKeyMatched = !0) : N.repeating && A !== N.keys[0] && (N.repeating = !1)), N.lastTime = D, N.keys.push(A);
      const z = Er(St(f.current)), U = z && !N.repeating && mM(z, N);
      N.previousKeyMatched && (U || S((W) => rV(W, N)) != null) ? P.preventDefault() : N.previousKeyMatched = !1;
    }
    c && c(P);
  });
  return /* @__PURE__ */ M(UG, {
    role: "menu",
    ref: w,
    className: a,
    onKeyDown: T,
    onFocus: R.onFocus,
    tabIndex: -1,
    ...p,
    children: /* @__PURE__ */ M(gM.Provider, {
      value: E,
      children: /* @__PURE__ */ M(sM.Provider, {
        value: C,
        children: s
      })
    })
  });
});
function sV(e) {
  return be("MuiPopover", e);
}
he("MuiPopover", ["root", "paper"]);
function ow(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.height / 2 : t === "bottom" && (n = e.height), n;
}
function iw(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.width / 2 : t === "right" && (n = e.width), n;
}
function sw(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function Bu(e) {
  return typeof e == "function" ? e() : e;
}
const aV = (e) => {
  const {
    classes: t
  } = e;
  return ve({
    root: ["root"],
    paper: ["paper"]
  }, sV, t);
}, lV = K(vG, {
  name: "MuiPopover",
  slot: "Root"
})({}), yM = K(ka, {
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
}), uV = /* @__PURE__ */ ce(function(t, n) {
  const r = We({
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
    ...b
  } = r, S = V(), k = {
    ...r,
    anchorOrigin: s,
    anchorReference: l,
    elevation: f,
    marginThreshold: h,
    transformOrigin: m,
    transitionDuration: v
  }, I = aV(k), $ = le(() => {
    if (l === "anchorPosition")
      return a;
    const Z = Bu(i), X = (Z && Z.nodeType === 1 ? Z : St(S.current).body).getBoundingClientRect();
    return {
      top: X.top + ow(X, s.vertical),
      left: X.left + iw(X, s.horizontal)
    };
  }, [i, s.horizontal, s.vertical, a, l]), O = le((Z) => ({
    vertical: ow(Z, m.vertical),
    horizontal: iw(Z, m.horizontal)
  }), [m.horizontal, m.vertical]), R = le((Z) => {
    const H = {
      width: Z.offsetWidth,
      height: Z.offsetHeight
    }, X = O(H);
    if (l === "none")
      return {
        top: null,
        left: null,
        transformOrigin: sw(X)
      };
    const re = $();
    let B = re.top - X.vertical, ue = re.left - X.horizontal;
    const Q = B + H.height, Ie = ue + H.width, xe = vr(Bu(i)), Te = xe.innerHeight - h, Mt = xe.innerWidth - h;
    if (h != null && B < h) {
      const Ye = B - h;
      B -= Ye, X.vertical += Ye;
    } else if (h != null && Q > Te) {
      const Ye = Q - Te;
      B -= Ye, X.vertical += Ye;
    }
    if (h != null && ue < h) {
      const Ye = ue - h;
      ue -= Ye, X.horizontal += Ye;
    } else if (Ie > Mt) {
      const Ye = Ie - Mt;
      ue -= Ye, X.horizontal += Ye;
    }
    return {
      top: `${Math.round(B)}px`,
      left: `${Math.round(ue)}px`,
      transformOrigin: sw(X)
    };
  }, [i, l, $, O, h]), [w, E] = Le(g), T = le(() => {
    const Z = S.current;
    if (!Z)
      return;
    const H = R(Z);
    H.top != null && Z.style.setProperty("top", H.top), H.left != null && (Z.style.left = H.left), Z.style.transformOrigin = H.transformOrigin, E(!0);
  }, [R]);
  fe(() => (C && window.addEventListener("scroll", T), () => window.removeEventListener("scroll", T)), [i, C, T]);
  const P = () => {
    T();
  }, _ = () => {
    E(!1);
  };
  fe(() => {
    g && T();
  }), Rs(o, () => g ? {
    updatePosition: () => {
      T();
    }
  } : null, [g, T]), fe(() => {
    if (!g)
      return;
    const Z = oS(() => {
      T();
    }), H = vr(Bu(i));
    return H.addEventListener("resize", Z), () => {
      Z.clear(), H.removeEventListener("resize", Z);
    };
  }, [i, g, T]);
  let N = v;
  const A = {
    slots: x,
    slotProps: y
  }, [D, z] = yr("transition", {
    elementType: Yg,
    externalForwardedProps: A,
    ownerState: k,
    getSlotProps: (Z) => ({
      ...Z,
      onEntering: (H, X) => {
        var re;
        (re = Z.onEntering) == null || re.call(Z, H, X), P();
      },
      onExited: (H) => {
        var X;
        (X = Z.onExited) == null || X.call(Z, H), _();
      }
    }),
    additionalProps: {
      appear: !0,
      in: g
    }
  });
  v === "auto" && !D.muiSupportAuto && (N = void 0);
  const U = d || (i ? St(Bu(i)).body : void 0), [W, {
    slots: q,
    slotProps: J,
    ...ae
  }] = yr("root", {
    ref: n,
    elementType: lV,
    externalForwardedProps: {
      ...A,
      ...b
    },
    shouldForwardComponentProp: !0,
    additionalProps: {
      slots: {
        backdrop: x.backdrop
      },
      slotProps: {
        backdrop: _U(typeof y.backdrop == "function" ? y.backdrop(k) : y.backdrop, {
          invisible: !0
        })
      },
      container: U,
      open: g
    },
    ownerState: k,
    className: ie(I.root, c)
  }), [ee, ne] = yr("paper", {
    ref: S,
    className: I.paper,
    elementType: yM,
    externalForwardedProps: A,
    shouldForwardComponentProp: !0,
    additionalProps: {
      elevation: f,
      style: w ? void 0 : {
        opacity: 0
      }
    },
    ownerState: k
  });
  return /* @__PURE__ */ M(W, {
    ...ae,
    ...!hc(W) && {
      slots: q,
      slotProps: J,
      disableAutoFocus: p,
      disableScrollLock: C
    },
    children: /* @__PURE__ */ M(D, {
      ...z,
      timeout: N,
      children: /* @__PURE__ */ M(ee, {
        ...ne,
        children: u
      })
    })
  });
});
function cV(e) {
  return be("MuiMenu", e);
}
he("MuiMenu", ["root", "paper", "list"]);
const dV = {
  vertical: "top",
  horizontal: "right"
}, fV = {
  vertical: "top",
  horizontal: "left"
}, pV = (e) => {
  const {
    classes: t
  } = e;
  return ve({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, cV, t);
}, hV = K(uV, {
  shouldForwardProp: (e) => Un(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root"
})({}), gV = K(yM, {
  name: "MuiMenu",
  slot: "Paper"
})({
  // specZ: The maximum height of a simple menu should be one or more rows less than the view
  // height. This ensures a tappable area outside of the simple menu with which to dismiss
  // the menu.
  maxHeight: "calc(100% - 96px)",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch"
}), mV = K(iV, {
  name: "MuiMenu",
  slot: "List"
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), yV = /* @__PURE__ */ ce(function(t, n) {
  const r = We({
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
  } = r, x = Ls(), y = {
    ...r,
    autoFocus: o,
    disableAutoFocusItem: a,
    transitionDuration: d,
    variant: p
  }, m = pV(y), v = o && u, C = v && !a, b = V(null), S = (P, _) => {
    var N, A;
    b.current && (b.current.adjustStyleForScrollbar(P, {
      direction: x ? "rtl" : "ltr"
    }), v && ((A = (N = b.current).focusInitialTarget) == null || A.call(N)));
  }, k = (P) => {
    P.key === "Tab" && (P.preventDefault(), l && l(P, "tabKeyDown"));
  }, I = {
    slots: f,
    slotProps: h
  }, $ = xr({
    elementType: f.root,
    externalSlotProps: h.root,
    ownerState: y,
    className: [m.root, s]
  }), [O, R] = yr("paper", {
    className: m.paper,
    elementType: gV,
    externalForwardedProps: I,
    shouldForwardComponentProp: !0,
    ownerState: y
  }), [w, E] = yr("list", {
    className: m.list,
    elementType: mV,
    shouldForwardComponentProp: !0,
    externalForwardedProps: I,
    getSlotProps: (P) => ({
      ...P,
      onKeyDown: (_) => {
        var N;
        k(_), (N = P.onKeyDown) == null || N.call(P, _);
      }
    }),
    ownerState: y
  }), T = typeof h.transition == "function" ? h.transition(y) : h.transition;
  return /* @__PURE__ */ M(
    hV,
    {
      disableAutoFocus: o,
      onClose: l,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: x ? "right" : "left"
      },
      transformOrigin: x ? dV : fV,
      slots: {
        root: f.root,
        paper: O,
        backdrop: f.backdrop,
        transition: f.transition
      },
      slotProps: {
        root: $,
        paper: R,
        backdrop: typeof h.backdrop == "function" ? h.backdrop(y) : h.backdrop,
        transition: {
          ...T,
          onEntering: (...P) => {
            var _;
            S(...P), (_ = T == null ? void 0 : T.onEntering) == null || _.call(T, ...P);
          }
        }
      },
      open: u,
      ref: n,
      transitionDuration: d,
      ownerState: y,
      ...g,
      classes: c,
      children: /* @__PURE__ */ M(w, {
        actions: b,
        autoFocus: v,
        autoFocusItem: C,
        variant: p,
        ...E,
        children: i
      })
    }
  );
}), vV = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.dense && t.dense, n.divider && t.divider, !n.disableGutters && t.gutters];
}, xV = (e) => {
  const {
    disabled: t,
    dense: n,
    divider: r,
    disableGutters: o,
    selected: i,
    classes: s
  } = e, l = ve({
    root: ["root", n && "dense", t && "disabled", !o && "gutters", r && "divider", i && "selected"]
  }, zR, s);
  return {
    ...s,
    ...l
  };
}, CV = K(ap, {
  shouldForwardProp: (e) => Un(e) || e === "classes",
  name: "MuiMenuItem",
  slot: "Root",
  overridesResolver: vV
})(je(({
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
  [`&.${Qs.selected}`]: {
    backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity),
    [`&.${Qs.focusVisible}`]: {
      backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.focusOpacity}`)
    }
  },
  [`&.${Qs.selected}:hover`]: {
    backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.hoverOpacity}`),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity)
    }
  },
  [`&.${Qs.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${Qs.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  },
  [`& + .${qC.root}`]: {
    marginTop: e.spacing(1),
    marginBottom: e.spacing(1)
  },
  [`& + .${qC.inset}`]: {
    marginLeft: 52
  },
  [`& .${ew.root}`]: {
    marginTop: 0,
    marginBottom: 0
  },
  [`& .${ew.inset}`]: {
    paddingLeft: 36
  },
  [`& .${JC.root}`]: {
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
      [`& .${JC.root} svg`]: {
        fontSize: "1.25rem"
      }
    }
  }]
}))), ha = /* @__PURE__ */ ce(function(t, n) {
  const r = We({
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
  } = r, h = hM(), g = gt(Kg), x = Se(() => ({
    dense: s || g.dense || !1,
    disableGutters: l
  }), [g.dense, s, l]), y = tV(), m = Co(), v = y.suppressInitialFocusVisible, C = y.itemsFocusableWhenDisabled, b = V(null);
  we(() => {
    o && b.current && fM(b.current, h);
  }, [o]);
  const S = {
    ...r,
    dense: x.dense,
    divider: a,
    disableGutters: l
  }, k = xV(r), {
    root: I,
    ...$
  } = k, O = YG({
    id: m,
    ref: n,
    disabled: r.disabled,
    focusableWhenDisabled: C,
    selected: r.selected
  }), R = ot(b, O.ref);
  let w;
  return d !== void 0 ? w = d : y.variant === "selectedMenu" ? w = O.tabIndex : (!r.disabled || C) && (w = -1), /* @__PURE__ */ M(Kg.Provider, {
    value: x,
    children: /* @__PURE__ */ M(CV, {
      ref: R,
      role: c,
      tabIndex: w,
      component: i,
      internalNativeButton: !1,
      focusableWhenDisabled: C,
      suppressFocusVisible: v,
      focusVisibleClassName: ie(k.focusVisible, u),
      className: ie(k.root, p),
      ...f,
      ownerState: S,
      classes: $
    })
  });
}), wV = (e) => {
  const {
    classes: t,
    variant: n,
    disabled: r,
    multiple: o,
    open: i,
    error: s
  } = e, a = {
    select: ["select", n, r && "disabled", o && "multiple", s && "error"],
    icon: ["icon", `icon${Re(n)}`, i && "iconOpen", r && "disabled"]
  };
  return ve(a, FR, t);
}, vM = K("select", {
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
  [`&.${Sm.disabled}`]: {
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
})), SV = K(vM, {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: Un,
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.select, t[n.variant], n.error && t.error, {
      [`&.${Sm.multiple}`]: t.multiple
    }];
  }
})({}), xM = K("svg", {
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
  [`&.${Sm.disabled}`]: {
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
})), bV = K(xM, {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${Re(n.variant)}`], n.open && t.iconOpen];
  }
})({}), kV = /* @__PURE__ */ ce(function(t, n) {
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
  }, d = wV(c);
  return /* @__PURE__ */ oe(He, {
    children: [/* @__PURE__ */ M(SV, {
      ownerState: c,
      className: ie(d.select, r),
      disabled: o,
      ref: a || n,
      ...u
    }), t.multiple ? null : /* @__PURE__ */ M(bV, {
      as: s,
      ownerState: c,
      className: d.icon
    })]
  });
});
var aw;
const IV = K("fieldset", {
  name: "MuiNotchedOutlined",
  shouldForwardProp: Un
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
}), TV = K("legend", {
  name: "MuiNotchedOutlined",
  shouldForwardProp: Un
})(je(({
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
      ...vt(e, "width", {
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
      ...vt(e, "max-width", {
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
      ...vt(e, "max-width", {
        duration: 100,
        easing: e.transitions.easing.easeOut,
        delay: 50
      })
    }
  }]
})));
function PV(e) {
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
  return /* @__PURE__ */ M(IV, {
    "aria-hidden": !0,
    className: r,
    ownerState: l,
    ...s,
    children: /* @__PURE__ */ M(TV, {
      ownerState: l,
      children: a ? /* @__PURE__ */ M("span", {
        children: o
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        aw || (aw = /* @__PURE__ */ M("span", {
          className: "notranslate",
          "aria-hidden": !0,
          children: "​"
        }))
      )
    })
  });
}
const MV = (e) => {
  const {
    classes: t
  } = e, r = ve({
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  }, BR, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...r
  };
}, EV = K(tf, {
  shouldForwardProp: (e) => Un(e) || e === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: Jd
})(je(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    position: "relative",
    borderRadius: (e.vars || e).shape.borderRadius,
    [`&:hover .${or.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.text.primary
    },
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      [`&:hover .${or.notchedOutline}`]: {
        borderColor: e.vars ? e.alpha(e.vars.palette.common.onBackground, 0.23) : t
      }
    },
    [`&.${or.focused} .${or.notchedOutline}`]: {
      borderWidth: 2
    },
    variants: [...Object.entries(e.palette).filter(Xr()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        [`&.${or.focused} .${or.notchedOutline}`]: {
          borderColor: (e.vars || e).palette[n].main
        }
      }
    })), {
      props: {},
      // to override the above style
      style: {
        [`&.${or.error} .${or.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.error.main
        },
        [`&.${or.disabled} .${or.notchedOutline}`]: {
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
})), AV = K(PV, {
  name: "MuiOutlinedInput",
  slot: "NotchedOutline"
})(je(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    borderColor: e.vars ? e.alpha(e.vars.palette.common.onBackground, 0.23) : t
  };
})), RV = K(nf, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: ef
})(je(({
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
}))), CM = /* @__PURE__ */ ce(function(t, n) {
  const r = We({
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
  } = r, f = MV(r), [h, g] = Ml({
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
  }, y = u.root ?? EV, m = u.input ?? RV, [v, C] = yr("notchedOutline", {
    elementType: AV,
    className: f.notchedOutline,
    shouldForwardComponentProp: !0,
    ownerState: x,
    externalForwardedProps: {
      slots: u,
      slotProps: c
    },
    additionalProps: {
      label: s != null && s !== "" && h.required ? /* @__PURE__ */ oe(He, {
        children: [s, " ", "*"]
      }) : s
    }
  });
  return /* @__PURE__ */ M(wm, {
    slots: {
      root: y,
      input: m
    },
    slotProps: c,
    renderSuffix: (b) => /* @__PURE__ */ M(v, {
      ...C,
      notched: typeof l < "u" ? l : !!(b.startAdornment || b.filled || b.focused)
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
CM.muiName = "Input";
function wM(e) {
  return be("MuiSelect", e);
}
const ga = he("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "nativeInput", "error"]);
function _V(e) {
  return Object.prototype.hasOwnProperty.call(e.props, "value");
}
function SM(e) {
  if (typeof e == "string" || typeof e == "number")
    return String(e);
  let t = "";
  return rs.forEach(e, (n) => {
    typeof n == "string" || typeof n == "number" ? t += String(n) : /* @__PURE__ */ Zn(n) && (t += SM(n.props.children));
  }), t;
}
function OV(e, t, n = 0) {
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
function $V(e, t) {
  return !e.some((n) => n.label[0] === t && n.label[1] === t);
}
function LV(e, t) {
  const n = [];
  let r = -1;
  for (let o = 0; o < e.length; o += 1) {
    const i = e[o];
    if (!/* @__PURE__ */ Zn(i) || !_V(i) || i.props.disabled)
      continue;
    const s = SM(i.props.children).trim().toLowerCase();
    s !== "" && (r === -1 && lc(t, i.props.value) && (r = n.length), n.push({
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
var lw;
const Uu = 2, NV = 400, uw = 200, DV = 750, Bo = " ", zV = "ArrowUp", FV = "ArrowDown", BV = "Enter";
function cw(e, t) {
  var o;
  if (!t)
    return !1;
  if (e.composedPath().includes(t) || (o = e.target) != null && o.nodeType && t.contains(e.target))
    return !0;
  const r = t.getBoundingClientRect();
  return r.width === 0 && r.height === 0 ? !1 : e.clientX >= r.left - Uu && e.clientX <= r.right + Uu && e.clientY >= r.top - Uu && e.clientY <= r.bottom + Uu;
}
const UV = K(vM, {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [
      // Win specificity over the input base
      {
        [`&.${ga.select}`]: t.select
      },
      {
        [`&.${ga.select}`]: t[n.variant]
      },
      {
        [`&.${ga.error}`]: t.error
      },
      {
        [`&.${ga.multiple}`]: t.multiple
      }
    ];
  }
})({
  // Win specificity over the input base
  [`&.${ga.select}`]: {
    height: "auto",
    // Resets for multiple select with chips
    minHeight: "1.4375em",
    // Required for select\text-field height consistency
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
}), HV = K(xM, {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.open && t.iconOpen];
  }
})({}), WV = K("input", {
  shouldForwardProp: (e) => iS(e) && e !== "classes",
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
}), GV = (e) => {
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
  }, wM, t);
}, VV = /* @__PURE__ */ ce(function(t, n) {
  var tv, nv, rv, ov;
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
    onChange: b,
    onClose: S,
    onFocus: k,
    // eslint-disable-next-line react/prop-types
    onKeyDown: I,
    // eslint-disable-next-line react/prop-types
    onMouseDown: $,
    onOpen: O,
    open: R,
    readOnly: w,
    renderValue: E,
    required: T,
    SelectDisplayProps: P = {},
    tabIndex: _,
    // catching `type` from Input which makes no sense for SelectInput
    type: N,
    value: A,
    variant: D = "standard",
    ...z
  } = t, [U, W] = _C({
    controlled: A,
    default: c,
    name: "Select"
  }), [q, J] = _C({
    controlled: R,
    default: u,
    name: "Select"
  }), ae = V(null), ee = V(null), ne = V(null), Z = V(!1), H = V(!1), X = V(null), re = V(!1), B = V({
    allowSelectedMouseUp: !1,
    allowUnselectedMouseUp: !1
  }), ue = V({
    buffer: "",
    previousSearchIndex: null,
    matchedIndex: null
  }), Q = Da(), Ie = Da(), xe = Da(), [Te, Mt] = Le(null), {
    current: Ye
  } = V(R != null), [Wt, Gt] = Le(), [fn, ut] = Le(null), br = ot(n, g), nr = le((Y) => {
    ee.current = Y, Y && Mt(Y);
  }, []), Ot = Te == null ? void 0 : Te.parentNode;
  Rs(br, () => ({
    focus: () => {
      ee.current.focus();
    },
    node: ae.current,
    value: U
  }), [U]);
  const Qe = Te !== null && q, ct = le(() => {
    xe.clear(), ue.current.buffer = "", ue.current.previousSearchIndex = null, ue.current.matchedIndex = null;
  }, [xe]);
  we(() => {
    Z.current = Qe, Qe && ct();
  }, [Qe, ct]);
  const Lo = le(() => {
    Q.clear(), Ie.clear();
  }, [Q, Ie]), Ce = le(() => {
    Lo(), re.current = !1, B.current = {
      allowSelectedMouseUp: !1,
      allowUnselectedMouseUp: !1
    };
  }, [Lo]), Vt = le(() => {
    X.current && (X.current(), X.current = null);
  }, []);
  fe(() => {
    Qe || (Ce(), Vt());
  }, [Qe, Ce, Vt]), fe(() => () => {
    Ce(), Vt(), ct();
  }, [Ce, Vt, ct]), fe(() => {
    if (!Qe || !Ot || s || typeof ResizeObserver > "u")
      return;
    const Y = new ResizeObserver(() => {
      Gt(Ot.clientWidth);
    });
    return Y.observe(Ot), () => {
      Y.disconnect();
    };
  }, [Qe, Ot, s]), fe(() => {
    u && q && Te && !Ye && (Gt(s ? null : Ot.clientWidth), ee.current.focus());
  }, [Te, s]), fe(() => {
    i && ee.current.focus();
  }, [i]), fe(() => {
    if (!x)
      return;
    const Y = St(ee.current).getElementById(x);
    if (Y) {
      const se = () => {
        getSelection().isCollapsed && ee.current.focus();
      };
      return Y.addEventListener("click", se), () => {
        Y.removeEventListener("click", se);
      };
    }
  }, [x]);
  const $t = ge((Y, se) => {
    Y || (Ce(), Vt()), Y ? (ct(), ut(ZG(se)), O && O(se)) : (ut(null), S && S(se)), Ye || (Z.current = Y, Gt(s ? null : Ot.clientWidth), J(Y));
  }), Ys = () => {
    Ce(), H.current ? Ie.start(uw, () => {
      B.current.allowUnselectedMouseUp = !0, Q.start(uw, () => {
        B.current.allowSelectedMouseUp = !0;
      });
    }) : Q.start(NV, () => {
      B.current.allowSelectedMouseUp = !0, B.current.allowUnselectedMouseUp = !0;
    });
  }, nt = (Y) => {
    if ($ == null || $(Y), Y.button !== 0 || (Y.preventDefault(), !ee.current))
      return;
    ee.current.focus();
    const se = St(Y.currentTarget);
    Ys(), Vt();
    const ye = (Ze) => {
      X.current = null, ee.current && (cw(Ze, ee.current) || cw(Ze, ne.current) || !Z.current && Ye || $t(!1, Ze));
    };
    se.addEventListener("mouseup", ye, {
      capture: !0,
      once: !0
    }), X.current = () => {
      se.removeEventListener("mouseup", ye, !0);
    }, $t(!0, Y);
  }, bM = (Y) => {
    $t(!1, Y);
  }, fp = rs.toArray(a), kM = (Y) => {
    const se = fp.find((ye) => ye.props.value === Y.target.value);
    se !== void 0 && (W(se.props.value), b && b(Y, se));
  }, Qy = (Y, se, ye) => {
    if (W(ye), b) {
      const Ze = Y.nativeEvent || Y, jt = new Ze.constructor(Ze.type, Ze);
      Object.defineProperty(jt, "target", {
        writable: !0,
        value: {
          value: ye,
          name: v
        }
      }), b(jt, se);
    }
  }, IM = (Y) => (se) => {
    re.current = !1;
    let ye;
    if (se.currentTarget.hasAttribute("tabindex")) {
      if (m) {
        ye = Array.isArray(U) ? U.slice() : [];
        const Ze = U.indexOf(Y.props.value);
        Ze === -1 ? ye.push(Y.props.value) : ye.splice(Ze, 1);
      } else
        ye = Y.props.value;
      Y.props.onClick && Y.props.onClick(se), U !== ye && Qy(se, Y, ye), m || $t(!1, se);
    }
  }, TM = (Y, se) => (ye) => {
    var su, xi;
    if ((xi = (su = Y.props).onMouseUp) == null || xi.call(su, ye), re.current) {
      re.current = !1;
      return;
    }
    const Ze = !B.current.allowSelectedMouseUp && se, jt = !B.current.allowUnselectedMouseUp && !se;
    Ze || jt || ye.currentTarget.click();
  }, PM = (Y) => {
    var iv;
    const se = ue.current, ye = se.buffer !== "";
    if (Qe || m || d || Y.defaultPrevented || (iv = Y.nativeEvent) != null && iv.isComposing || Y.key.length !== 1 || Y.ctrlKey || Y.metaKey || Y.altKey || Y.key === Bo && !ye)
      return !1;
    Y.key === Bo && Y.preventDefault();
    const Ze = se.buffer === "", {
      options: jt,
      selectedIndex: su
    } = LV(fp, U);
    if (jt.length === 0)
      return Y.key !== Bo && ct(), !0;
    Ze && (se.previousSearchIndex = su);
    const xi = Y.key.toLowerCase();
    se.buffer === xi && $V(jt, xi) && (se.buffer = "", se.previousSearchIndex = se.matchedIndex), se.buffer += xi, xe.start(DV, ct);
    const gp = OV(jt, se.buffer, (se.previousSearchIndex ?? -1) + 1);
    if (gp !== -1) {
      const mp = jt[gp];
      return se.matchedIndex = gp, lc(U, mp.value) || Qy(Y, mp.child, mp.value), !0;
    }
    return Y.key !== Bo && ct(), !0;
  }, MM = (Y) => {
    if (!w) {
      const se = PM(Y), ye = Y.key === Bo || Y.key === zV || Y.key === FV || Y.key === BV;
      !se && ye && (Y.preventDefault(), $t(!0, Y)), I == null || I(Y);
    }
  }, EM = (Y) => {
    ct(), !Qe && C && (Object.defineProperty(Y, "target", {
      writable: !0,
      value: {
        value: U,
        name: v
      }
    }), C(Y));
  }, AM = (Y) => (se) => {
    var ye, Ze;
    (Ze = (ye = Y == null ? void 0 : Y.props) == null ? void 0 : ye.onKeyDown) == null || Ze.call(ye, se), se.key === Bo && se.target === se.currentTarget && !se.defaultPrevented && (se.preventDefault(), se.repeat || se.currentTarget.click());
  };
  delete z["aria-invalid"];
  let yi, Zy;
  const ru = [];
  let ou = !1, iu = !1;
  (gc({
    value: U
  }) || p) && (E ? yi = E(U) : ou = !0);
  const RM = fp.map((Y) => {
    if (!/* @__PURE__ */ Zn(Y))
      return null;
    let se;
    if (m) {
      if (!Array.isArray(U))
        throw new Error(zr(2));
      se = U.some((ye) => lc(ye, Y.props.value)), se && ou && ru.push(Y.props.children);
    } else
      se = lc(U, Y.props.value), se && ou && (Zy = Y.props.children);
    return se && (iu = !0), /* @__PURE__ */ bo(Y, {
      "aria-selected": se ? "true" : "false",
      onMouseDown: (ye) => {
        var Ze, jt;
        re.current = !0, (jt = (Ze = Y.props).onMouseDown) == null || jt.call(Ze, ye);
      },
      onPointerDown: (ye) => {
        var Ze, jt;
        re.current = !0, (jt = (Ze = Y.props).onPointerDown) == null || jt.call(Ze, ye);
      },
      onClick: IM(Y),
      onMouseUp: TM(Y, se),
      onKeyUp: (ye) => {
        ye.key === Bo && ye.preventDefault(), Y.props.onKeyUp && Y.props.onKeyUp(ye);
      },
      onKeyDown: AM(Y),
      role: "option",
      selected: se,
      value: void 0,
      // The value is most likely not a valid HTML attribute.
      "data-value": Y.props.value
      // Instead, we provide it as a data attribute.
    });
  });
  we(() => {
    H.current = iu, !Qe && !m && !iu && ct();
  }, [iu, m, Qe, ct]), ou && (m ? ru.length === 0 ? yi = null : yi = ru.reduce((Y, se, ye) => (Y.push(se), ye < ru.length - 1 && Y.push(", "), Y), []) : yi = Zy);
  let Jy = Wt;
  !s && Ye && Te && (Jy = Ot.clientWidth);
  let pp;
  typeof _ < "u" ? pp = _ : pp = d ? null : 0;
  const _M = P.id || (v ? `mui-component-select-${v}` : void 0), vi = {
    ...t,
    variant: D,
    value: U,
    open: Qe,
    error: f
  }, hp = GV(vi), No = typeof ((tv = y.slotProps) == null ? void 0 : tv.paper) == "function" ? y.slotProps.paper(vi) : (nv = y.slotProps) == null ? void 0 : nv.paper, OM = ot(No == null ? void 0 : No.ref, ne), $M = typeof ((rv = y.slotProps) == null ? void 0 : rv.list) == "function" ? y.slotProps.list(vi) : (ov = y.slotProps) == null ? void 0 : ov.list, ev = Co(), LM = Co();
  return /* @__PURE__ */ oe(He, {
    children: [/* @__PURE__ */ M(UV, {
      as: "div",
      ref: nr,
      tabIndex: pp,
      role: "combobox",
      "aria-controls": Qe ? ev : void 0,
      "aria-disabled": d ? "true" : void 0,
      "aria-expanded": Qe ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-readonly": w ? "true" : void 0,
      "aria-label": o,
      "aria-labelledby": x,
      "aria-describedby": r,
      "aria-required": T ? "true" : void 0,
      "aria-invalid": f ? "true" : void 0,
      onKeyDown: MM,
      onMouseDown: d || w ? null : nt,
      onBlur: EM,
      onFocus: k,
      ...P,
      ownerState: vi,
      className: ie(P.className, hp.select, l),
      id: _M,
      children: JG(yi) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        lw || (lw = /* @__PURE__ */ M("span", {
          className: "notranslate",
          "aria-hidden": !0,
          children: "​"
        }))
      ) : yi
    }), /* @__PURE__ */ M(WV, {
      "aria-invalid": f,
      value: Array.isArray(U) ? U.join(",") : U,
      name: v,
      ref: ae,
      "aria-hidden": !0,
      onChange: kM,
      tabIndex: -1,
      disabled: d,
      readOnly: w,
      className: hp.nativeInput,
      autoFocus: i,
      required: T,
      ...z,
      id: z.id ?? LM,
      ownerState: vi
    }), /* @__PURE__ */ M(HV, {
      as: h,
      className: hp.icon,
      ownerState: vi
    }), /* @__PURE__ */ M(eV, {
      value: fn,
      children: /* @__PURE__ */ M(yV, {
        id: `menu-${v || ""}`,
        anchorEl: Ot,
        open: Qe,
        onClose: bM,
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
            id: ev,
            ...$M
          },
          paper: {
            ...No,
            ref: OM,
            style: {
              minWidth: Jy,
              ...No == null ? void 0 : No.style
            }
          }
        },
        children: RM
      })
    })]
  });
}), jV = (e) => {
  const {
    classes: t
  } = e, r = ve({
    root: ["root"]
  }, wM, t);
  return {
    ...t,
    ...r
  };
}, qy = {
  name: "MuiSelect",
  slot: "Root",
  shouldForwardProp: (e) => Un(e) && e !== "variant"
}, YV = K(iM, qy)(""), KV = K(CM, qy)(""), XV = K(oM, qy)(""), Qg = /* @__PURE__ */ ce(function(t, n) {
  const r = We({
    name: "MuiSelect",
    props: t
  }), {
    autoWidth: o = !1,
    children: i,
    classes: s = {},
    className: a,
    defaultOpen: l = !1,
    displayEmpty: u = !1,
    IconComponent: c = GW,
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
    open: b,
    renderValue: S,
    SelectDisplayProps: k,
    variant: I = "outlined",
    ...$
  } = r, O = m ? kV : VV, [R] = Ml({
    props: r,
    states: ["variant", "error"]
  }), w = R.variant || I, E = {
    ...r,
    variant: w,
    classes: s
  }, T = jV(E), {
    root: P,
    ..._
  } = T, N = p || {
    standard: /* @__PURE__ */ M(YV, {
      ownerState: E
    }),
    outlined: /* @__PURE__ */ M(KV, {
      label: h,
      ownerState: E
    }),
    filled: /* @__PURE__ */ M(XV, {
      ownerState: E
    })
  }[w], A = ot(n, nu(N));
  return /* @__PURE__ */ M(He, {
    children: /* @__PURE__ */ bo(N, {
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent: O,
      inputProps: {
        children: i,
        error: R.error,
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
          open: b,
          renderValue: S,
          SelectDisplayProps: {
            id: d,
            ...k
          }
        },
        ...f,
        classes: f ? Xt(_, f.classes) : _,
        ...p ? p.props.inputProps : {}
      },
      ...(y && m || u) && w === "outlined" ? {
        notched: !0
      } : {},
      ref: A,
      className: ie(N.props.className, a, T.root),
      // If a custom input is provided via 'input' prop, do not allow 'variant' to be propagated to it's root element. See https://github.com/mui/material-ui/issues/33894.
      ...!p && {
        variant: w
      },
      ...$
    })
  });
});
Qg.muiName = "Select";
const sr = {
  cpu: { label: "CPU Usage", query: 'sum(rate(node_cpu_seconds_total{mode!="idle"}[5m])) by (instance)' },
  ram: { label: "RAM Usage", query: "100 * (1 - ((node_memory_MemFree_bytes + node_memory_Cached_bytes + node_memory_Buffers_bytes) / node_memory_MemTotal_bytes))" },
  disk: { label: "Disk Usage", query: '100 - (node_filesystem_avail_bytes{fstype=~"ext4|xfs"} / node_filesystem_size_bytes{fstype=~"ext4|xfs"} * 100)' }
}, qV = (e, t) => window.__pluginFetch(e, t), Hu = ({ namespace: e, instanceName: t, metricQuery: n, metricLabel: r, timeRange: o }) => {
  const [i, s] = to.useState(null), [a, l] = to.useState(null), [u, c] = to.useState(!0), d = to.useCallback(async () => {
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
      }), y = await qV(`/api/namespaces/${e}/database-clusters/${t}/monitoring/metrics?${x}`);
      if (!y.ok)
        throw new Error(`Failed to fetch metrics: ${y.statusText}`);
      const m = await y.json();
      if (m.status !== "success")
        throw new Error(`Prometheus error: ${m.error}`);
      const v = m.data.result.map((C) => ({
        label: C.metric.pod || C.metric.instance || "Total",
        data: C.values.map((b) => parseFloat(b[1])),
        timestamps: C.values.map((b) => new Date(b[0] * 1e3))
      }));
      s(v), l(null);
    } catch (f) {
      l(f.message);
    } finally {
      c(!1);
    }
  }, [e, t, n, o]);
  if (to.useEffect(() => {
    d();
    const f = setInterval(d, 3e4);
    return () => clearInterval(f);
  }, [d]), a)
    return /* @__PURE__ */ M(Wi, { sx: { p: 2, bgcolor: "#ffebee", color: "#c62828", borderRadius: 1 }, children: /* @__PURE__ */ M(Or, { variant: "body2", children: a }) });
  if (u && !i)
    return /* @__PURE__ */ M(Wi, { sx: { display: "flex", justifyContent: "center", alignItems: "center", height: 300 }, children: /* @__PURE__ */ M(Ky, {}) });
  if (!i || i.length === 0)
    return /* @__PURE__ */ M(Wi, { sx: { display: "flex", justifyContent: "center", alignItems: "center", height: 300 }, children: /* @__PURE__ */ oe(Or, { variant: "body1", color: "text.secondary", children: [
      "No data available for ",
      r
    ] }) });
  const p = i[0].timestamps;
  return /* @__PURE__ */ M(Wi, { sx: { width: "100%", height: 300 }, children: /* @__PURE__ */ M(
    NW,
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
function ej(e) {
  var i, s, a, l, u, c, d, p, f, h, g, x, y, m, v, C;
  const [t, n] = to.useState("1h"), [r, o] = to.useState("cpu");
  return /* @__PURE__ */ oe(Wi, { sx: { p: 3 }, children: [
    /* @__PURE__ */ oe(Wi, { sx: { display: "flex", gap: 2, mb: 4, alignItems: "center" }, children: [
      /* @__PURE__ */ oe(QC, { size: "small", sx: { minWidth: 200 }, children: [
        /* @__PURE__ */ M(ZC, { children: "Metric" }),
        /* @__PURE__ */ M(
          Qg,
          {
            value: r,
            label: "Metric",
            onChange: (b) => o(b.target.value),
            children: Object.entries(sr).map(([b, { label: S }]) => /* @__PURE__ */ M(ha, { value: b, children: S }, b))
          }
        )
      ] }),
      /* @__PURE__ */ oe(QC, { size: "small", sx: { minWidth: 120 }, children: [
        /* @__PURE__ */ M(ZC, { children: "Time Range" }),
        /* @__PURE__ */ oe(
          Qg,
          {
            value: t,
            label: "Time Range",
            onChange: (b) => n(b.target.value),
            children: [
              /* @__PURE__ */ M(ha, { value: "1h", children: "Last 1 hour" }),
              /* @__PURE__ */ M(ha, { value: "6h", children: "Last 6 hours" }),
              /* @__PURE__ */ M(ha, { value: "24h", children: "Last 24 hours" }),
              /* @__PURE__ */ M(ha, { value: "7d", children: "Last 7 days" })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ oe(pa, { container: !0, spacing: 3, children: [
      /* @__PURE__ */ M(pa, { item: !0, xs: 12, md: 6, children: /* @__PURE__ */ oe(ka, { sx: { p: 2, elevation: 1 }, children: [
        /* @__PURE__ */ M(Or, { variant: "h6", gutterBottom: !0, children: "CPU Usage" }),
        /* @__PURE__ */ M(
          Hu,
          {
            namespace: ((s = (i = e.cluster) == null ? void 0 : i.metadata) == null ? void 0 : s.namespace) || "my-special-place",
            instanceName: ((l = (a = e.cluster) == null ? void 0 : a.metadata) == null ? void 0 : l.name) || "test-db-cluster",
            metricQuery: sr.cpu.query,
            metricLabel: sr.cpu.label,
            timeRange: t
          }
        )
      ] }) }),
      /* @__PURE__ */ M(pa, { item: !0, xs: 12, md: 6, children: /* @__PURE__ */ oe(ka, { sx: { p: 2, elevation: 1 }, children: [
        /* @__PURE__ */ M(Or, { variant: "h6", gutterBottom: !0, children: "RAM Usage" }),
        /* @__PURE__ */ M(
          Hu,
          {
            namespace: ((c = (u = e.cluster) == null ? void 0 : u.metadata) == null ? void 0 : c.namespace) || "my-special-place",
            instanceName: ((p = (d = e.cluster) == null ? void 0 : d.metadata) == null ? void 0 : p.name) || "test-db-cluster",
            metricQuery: sr.ram.query,
            metricLabel: sr.ram.label,
            timeRange: t
          }
        )
      ] }) }),
      /* @__PURE__ */ M(pa, { item: !0, xs: 12, md: 6, children: /* @__PURE__ */ oe(ka, { sx: { p: 2, elevation: 1 }, children: [
        /* @__PURE__ */ M(Or, { variant: "h6", gutterBottom: !0, children: "Disk Usage" }),
        /* @__PURE__ */ M(
          Hu,
          {
            namespace: ((h = (f = e.cluster) == null ? void 0 : f.metadata) == null ? void 0 : h.namespace) || "my-special-place",
            instanceName: ((x = (g = e.cluster) == null ? void 0 : g.metadata) == null ? void 0 : x.name) || "test-db-cluster",
            metricQuery: sr.disk.query,
            metricLabel: sr.disk.label,
            timeRange: t
          }
        )
      ] }) }),
      /* @__PURE__ */ M(pa, { item: !0, xs: 12, md: 6, children: /* @__PURE__ */ oe(ka, { sx: { p: 2, elevation: 1 }, children: [
        /* @__PURE__ */ oe(Or, { variant: "h6", gutterBottom: !0, children: [
          "Custom Selected: ",
          sr[r].label
        ] }),
        /* @__PURE__ */ M(
          Hu,
          {
            namespace: ((m = (y = e.cluster) == null ? void 0 : y.metadata) == null ? void 0 : m.namespace) || "my-special-place",
            instanceName: ((C = (v = e.cluster) == null ? void 0 : v.metadata) == null ? void 0 : C.name) || "test-db-cluster",
            metricQuery: sr[r].query,
            metricLabel: sr[r].label,
            timeRange: t
          }
        )
      ] }) })
    ] })
  ] });
}
export {
  ej as default,
  qV as pluginFetch
};
