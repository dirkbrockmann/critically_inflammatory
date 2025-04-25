(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode('/*! tailwindcss v4.1.4 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-font-weight:initial}}}@layer theme{:root,:host{--tw-font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--tw-spacing:.25rem;--tw-container-5xl:64rem;--tw-text-2xl:1.5rem;--tw-text-2xl--line-height:calc(2/1.5);--tw-text-3xl:1.875rem;--tw-text-3xl--line-height: 1.2 ;--tw-text-5xl:3rem;--tw-text-5xl--line-height:1;--tw-font-weight-light:300}}@layer base,components;@layer utilities{.tw\\:m-8{margin:calc(var(--tw-spacing)*8)}.tw\\:grid{display:grid}.tw\\:max-w-5xl{max-width:var(--tw-container-5xl)}.tw\\:grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.tw\\:p-0{padding:calc(var(--tw-spacing)*0)}.tw\\:p-1{padding:calc(var(--tw-spacing)*1)}.tw\\:px-1{padding-inline:calc(var(--tw-spacing)*1)}.tw\\:px-8{padding-inline:calc(var(--tw-spacing)*8)}.tw\\:px-10{padding-inline:calc(var(--tw-spacing)*10)}.tw\\:font-sans{font-family:var(--tw-font-sans)}.tw\\:text-2xl{font-size:var(--tw-text-2xl);line-height:var(--tw-leading,var(--tw-text-2xl--line-height))}.tw\\:text-3xl{font-size:var(--tw-text-3xl);line-height:var(--tw-leading,var(--tw-text-3xl--line-height))}.tw\\:text-5xl{font-size:var(--tw-text-5xl);line-height:var(--tw-leading,var(--tw-text-5xl--line-height))}.tw\\:font-light{--tw-font-weight:var(--tw-font-weight-light);font-weight:var(--tw-font-weight-light)}@media (min-width:40rem){.tw\\:sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.tw\\:sm\\:gap-4{gap:calc(var(--tw-spacing)*4)}.tw\\:sm\\:p-0{padding:calc(var(--tw-spacing)*0)}}.debug-grid-16{background-image:linear-gradient(90deg,#0000ff1a 1px,#0000 1px),linear-gradient(#0000ff1a 1px,#0000 1px);background-repeat:repeat;background-size:6.25% 6.25%,6.25% 6.25%}}.explorable *,.explorable :before,.explorable :after{box-sizing:border-box}@property --tw-font-weight{syntax:"*";inherits:false}._widget_18g36_1{stroke:#969696;stroke-width:1px;cursor:pointer;pointer-events:all;stroke-opacity:1;fill-opacity:1;fill:#ccc;font-size:16px}._widget_18g36_1 ._title_18g36_12{font-size:20px;fill:#000;stroke:none;text-anchor:middle}._widget_18g36_1 ._label_18g36_19{fill:#000;stroke:none}._widget_18g36_1 ._lit_18g36_24{fill:#eee}._button_18g36_29>._symbol_18g36_29,._radio_18g36_29>._radiobutton_18g36_29>._symbol_18g36_29{fill:#fff;fill-rule:nonzero;pointer-events:none}._widget_18g36_1 ._symbol_18g36_29._selected_18g36_35,._toggle_18g36_35._selected_18g36_35,._widget_18g36_1 ._symbol_18g36_29._selected_18g36_35._lit_18g36_24{fill:#000}._widget_18g36_1 ._symbol_18g36_29._lit_18g36_24{fill:#bbb}._slider_18g36_44>._track_18g36_44,._toggle_18g36_35>._track_18g36_44{pointer-events:none}._slider_18g36_44>._track_overlay_18g36_48,._toggle_18g36_35>._track_overlay_18g36_48{pointer-events:all;cursor:pointer;fill:transparent;stroke:transparent}._slider_18g36_44>._handle_18g36_55,._toggle_18g36_35>._handle_18g36_55{fill:#fff}')),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
const Yi = {
  display_type: "canvas",
  // either svg or canvas depending on explorable
  debug: !1,
  // if set to true, draws dots on the control panel to help widget placement
  controls_border: "",
  display_border: "1px solid black",
  debug_lattice: "debug-grid-16",
  controls_grid: { nx: 12, ny: 12 },
  display_size: { width: 1005, height: 1005 },
  controls_size: { width: 480, height: 480 },
  display_class: " tw:p-0",
  controls_class: "tw:p-0",
  container_class: "tw:font-sans tw:grid tw:grid-cols-1 tw:sm:grid-cols-2 tw:sm:gap-4 tw:px-1 tw:sm:p-0 tw:m-8"
};
function jt(t, n) {
  return t == null || n == null ? NaN : t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function Ki(t, n) {
  return t == null || n == null ? NaN : n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
}
function Nr(t) {
  let n, e, r;
  t.length !== 2 ? (n = jt, e = (s, l) => jt(t(s), l), r = (s, l) => t(s) - l) : (n = t === jt || t === Ki ? t : Vi, e = t, r = t);
  function i(s, l, u = 0, f = s.length) {
    if (u < f) {
      if (n(l, l) !== 0) return f;
      do {
        const h = u + f >>> 1;
        e(s[h], l) < 0 ? u = h + 1 : f = h;
      } while (u < f);
    }
    return u;
  }
  function o(s, l, u = 0, f = s.length) {
    if (u < f) {
      if (n(l, l) !== 0) return f;
      do {
        const h = u + f >>> 1;
        e(s[h], l) <= 0 ? u = h + 1 : f = h;
      } while (u < f);
    }
    return u;
  }
  function a(s, l, u = 0, f = s.length) {
    const h = i(s, l, u, f - 1);
    return h > u && r(s[h - 1], l) > -r(s[h], l) ? h - 1 : h;
  }
  return { left: i, center: a, right: o };
}
function Vi() {
  return 0;
}
function Wi(t) {
  return t === null ? NaN : +t;
}
const Zi = Nr(jt), Ji = Zi.right;
Nr(Wi).center;
class Ce extends Map {
  constructor(n, e = to) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: e } }), n != null) for (const [r, i] of n) this.set(r, i);
  }
  get(n) {
    return super.get(ke(this, n));
  }
  has(n) {
    return super.has(ke(this, n));
  }
  set(n, e) {
    return super.set(Qi(this, n), e);
  }
  delete(n) {
    return super.delete(ji(this, n));
  }
}
function ke({ _intern: t, _key: n }, e) {
  const r = n(e);
  return t.has(r) ? t.get(r) : e;
}
function Qi({ _intern: t, _key: n }, e) {
  const r = n(e);
  return t.has(r) ? t.get(r) : (t.set(r, e), e);
}
function ji({ _intern: t, _key: n }, e) {
  const r = n(e);
  return t.has(r) && (e = t.get(r), t.delete(r)), e;
}
function to(t) {
  return t !== null && typeof t == "object" ? t.valueOf() : t;
}
const no = Math.sqrt(50), eo = Math.sqrt(10), ro = Math.sqrt(2);
function sn(t, n, e) {
  const r = (n - t) / Math.max(0, e), i = Math.floor(Math.log10(r)), o = r / Math.pow(10, i), a = o >= no ? 10 : o >= eo ? 5 : o >= ro ? 2 : 1;
  let s, l, u;
  return i < 0 ? (u = Math.pow(10, -i) / a, s = Math.round(t * u), l = Math.round(n * u), s / u < t && ++s, l / u > n && --l, u = -u) : (u = Math.pow(10, i) * a, s = Math.round(t / u), l = Math.round(n / u), s * u < t && ++s, l * u > n && --l), l < s && 0.5 <= e && e < 2 ? sn(t, n, e * 2) : [s, l, u];
}
function io(t, n, e) {
  if (n = +n, t = +t, e = +e, !(e > 0)) return [];
  if (t === n) return [t];
  const r = n < t, [i, o, a] = r ? sn(n, t, e) : sn(t, n, e);
  if (!(o >= i)) return [];
  const s = o - i + 1, l = new Array(s);
  if (r)
    if (a < 0) for (let u = 0; u < s; ++u) l[u] = (o - u) / -a;
    else for (let u = 0; u < s; ++u) l[u] = (o - u) * a;
  else if (a < 0) for (let u = 0; u < s; ++u) l[u] = (i + u) / -a;
  else for (let u = 0; u < s; ++u) l[u] = (i + u) * a;
  return l;
}
function Xn(t, n, e) {
  return n = +n, t = +t, e = +e, sn(t, n, e)[2];
}
function oo(t, n, e) {
  n = +n, t = +t, e = +e;
  const r = n < t, i = r ? Xn(n, t, e) : Xn(t, n, e);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function Yt(t, n) {
  let e;
  for (const r of t)
    r != null && (e < r || e === void 0 && r >= r) && (e = r);
  return e;
}
function ao(t, n, e) {
  t = +t, n = +n, e = (i = arguments.length) < 2 ? (n = t, t = 0, 1) : i < 3 ? 1 : +e;
  for (var r = -1, i = Math.max(0, Math.ceil((n - t) / e)) | 0, o = new Array(i); ++r < i; )
    o[r] = t + r * e;
  return o;
}
var so = { value: () => {
} };
function fe() {
  for (var t = 0, n = arguments.length, e = {}, r; t < n; ++t) {
    if (!(r = arguments[t] + "") || r in e || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    e[r] = [];
  }
  return new tn(e);
}
function tn(t) {
  this._ = t;
}
function uo(t, n) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var r = "", i = e.indexOf(".");
    if (i >= 0 && (r = e.slice(i + 1), e = e.slice(0, i)), e && !n.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    return { type: e, name: r };
  });
}
tn.prototype = fe.prototype = {
  constructor: tn,
  on: function(t, n) {
    var e = this._, r = uo(t + "", e), i, o = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++o < a; ) if ((i = (t = r[o]).type) && (i = lo(e[i], t.name))) return i;
      return;
    }
    if (n != null && typeof n != "function") throw new Error("invalid callback: " + n);
    for (; ++o < a; )
      if (i = (t = r[o]).type) e[i] = Ie(e[i], t.name, n);
      else if (n == null) for (i in e) e[i] = Ie(e[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, n = this._;
    for (var e in n) t[e] = n[e].slice();
    return new tn(t);
  },
  call: function(t, n) {
    if ((i = arguments.length - 2) > 0) for (var e = new Array(i), r = 0, i, o; r < i; ++r) e[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (o = this._[t], r = 0, i = o.length; r < i; ++r) o[r].value.apply(n, e);
  },
  apply: function(t, n, e) {
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (var r = this._[t], i = 0, o = r.length; i < o; ++i) r[i].value.apply(n, e);
  }
};
function lo(t, n) {
  for (var e = 0, r = t.length, i; e < r; ++e)
    if ((i = t[e]).name === n)
      return i.value;
}
function Ie(t, n, e) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === n) {
      t[r] = so, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return e != null && t.push({ name: n, value: e }), t;
}
var Un = "http://www.w3.org/1999/xhtml";
const Re = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Un,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function vn(t) {
  var n = t += "", e = n.indexOf(":");
  return e >= 0 && (n = t.slice(0, e)) !== "xmlns" && (t = t.slice(e + 1)), Re.hasOwnProperty(n) ? { space: Re[n], local: t } : t;
}
function fo(t) {
  return function() {
    var n = this.ownerDocument, e = this.namespaceURI;
    return e === Un && n.documentElement.namespaceURI === Un ? n.createElement(t) : n.createElementNS(e, t);
  };
}
function co(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function Or(t) {
  var n = vn(t);
  return (n.local ? co : fo)(n);
}
function ho() {
}
function ce(t) {
  return t == null ? ho : function() {
    return this.querySelector(t);
  };
}
function po(t) {
  typeof t != "function" && (t = ce(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = new Array(a), l, u, f = 0; f < a; ++f)
      (l = o[f]) && (u = t.call(l, l.__data__, f, o)) && ("__data__" in l && (u.__data__ = l.__data__), s[f] = u);
  return new I(r, this._parents);
}
function go(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function yo() {
  return [];
}
function zr(t) {
  return t == null ? yo : function() {
    return this.querySelectorAll(t);
  };
}
function _o(t) {
  return function() {
    return go(t.apply(this, arguments));
  };
}
function mo(t) {
  typeof t == "function" ? t = _o(t) : t = zr(t);
  for (var n = this._groups, e = n.length, r = [], i = [], o = 0; o < e; ++o)
    for (var a = n[o], s = a.length, l, u = 0; u < s; ++u)
      (l = a[u]) && (r.push(t.call(l, l.__data__, u, a)), i.push(l));
  return new I(r, i);
}
function Cr(t) {
  return function() {
    return this.matches(t);
  };
}
function kr(t) {
  return function(n) {
    return n.matches(t);
  };
}
var vo = Array.prototype.find;
function wo(t) {
  return function() {
    return vo.call(this.children, t);
  };
}
function bo() {
  return this.firstElementChild;
}
function xo(t) {
  return this.select(t == null ? bo : wo(typeof t == "function" ? t : kr(t)));
}
var Mo = Array.prototype.filter;
function $o() {
  return Array.from(this.children);
}
function Ao(t) {
  return function() {
    return Mo.call(this.children, t);
  };
}
function To(t) {
  return this.selectAll(t == null ? $o : Ao(typeof t == "function" ? t : kr(t)));
}
function So(t) {
  typeof t != "function" && (t = Cr(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = [], l, u = 0; u < a; ++u)
      (l = o[u]) && t.call(l, l.__data__, u, o) && s.push(l);
  return new I(r, this._parents);
}
function Ir(t) {
  return new Array(t.length);
}
function Po() {
  return new I(this._enter || this._groups.map(Ir), this._parents);
}
function un(t, n) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n;
}
un.prototype = {
  constructor: un,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, n) {
    return this._parent.insertBefore(t, n);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function Eo(t) {
  return function() {
    return t;
  };
}
function No(t, n, e, r, i, o) {
  for (var a = 0, s, l = n.length, u = o.length; a < u; ++a)
    (s = n[a]) ? (s.__data__ = o[a], r[a] = s) : e[a] = new un(t, o[a]);
  for (; a < l; ++a)
    (s = n[a]) && (i[a] = s);
}
function Oo(t, n, e, r, i, o, a) {
  var s, l, u = /* @__PURE__ */ new Map(), f = n.length, h = o.length, c = new Array(f), d;
  for (s = 0; s < f; ++s)
    (l = n[s]) && (c[s] = d = a.call(l, l.__data__, s, n) + "", u.has(d) ? i[s] = l : u.set(d, l));
  for (s = 0; s < h; ++s)
    d = a.call(t, o[s], s, o) + "", (l = u.get(d)) ? (r[s] = l, l.__data__ = o[s], u.delete(d)) : e[s] = new un(t, o[s]);
  for (s = 0; s < f; ++s)
    (l = n[s]) && u.get(c[s]) === l && (i[s] = l);
}
function zo(t) {
  return t.__data__;
}
function Co(t, n) {
  if (!arguments.length) return Array.from(this, zo);
  var e = n ? Oo : No, r = this._parents, i = this._groups;
  typeof t != "function" && (t = Eo(t));
  for (var o = i.length, a = new Array(o), s = new Array(o), l = new Array(o), u = 0; u < o; ++u) {
    var f = r[u], h = i[u], c = h.length, d = ko(t.call(f, f && f.__data__, u, r)), p = d.length, _ = s[u] = new Array(p), b = a[u] = new Array(p), y = l[u] = new Array(c);
    e(f, h, _, b, y, d, n);
    for (var x = 0, $ = 0, g, v; x < p; ++x)
      if (g = _[x]) {
        for (x >= $ && ($ = x + 1); !(v = b[$]) && ++$ < p; ) ;
        g._next = v || null;
      }
  }
  return a = new I(a, r), a._enter = s, a._exit = l, a;
}
function ko(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function Io() {
  return new I(this._exit || this._groups.map(Ir), this._parents);
}
function Ro(t, n, e) {
  var r = this.enter(), i = this, o = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), n != null && (i = n(i), i && (i = i.selection())), e == null ? o.remove() : e(o), r && i ? r.merge(i).order() : i;
}
function Fo(t) {
  for (var n = t.selection ? t.selection() : t, e = this._groups, r = n._groups, i = e.length, o = r.length, a = Math.min(i, o), s = new Array(i), l = 0; l < a; ++l)
    for (var u = e[l], f = r[l], h = u.length, c = s[l] = new Array(h), d, p = 0; p < h; ++p)
      (d = u[p] || f[p]) && (c[p] = d);
  for (; l < i; ++l)
    s[l] = e[l];
  return new I(s, this._parents);
}
function Lo() {
  for (var t = this._groups, n = -1, e = t.length; ++n < e; )
    for (var r = t[n], i = r.length - 1, o = r[i], a; --i >= 0; )
      (a = r[i]) && (o && a.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(a, o), o = a);
  return this;
}
function Do(t) {
  t || (t = Ho);
  function n(h, c) {
    return h && c ? t(h.__data__, c.__data__) : !h - !c;
  }
  for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
    for (var a = e[o], s = a.length, l = i[o] = new Array(s), u, f = 0; f < s; ++f)
      (u = a[f]) && (l[f] = u);
    l.sort(n);
  }
  return new I(i, this._parents).order();
}
function Ho(t, n) {
  return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function qo() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function Bo() {
  return Array.from(this);
}
function Xo() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
      var a = r[i];
      if (a) return a;
    }
  return null;
}
function Uo() {
  let t = 0;
  for (const n of this) ++t;
  return t;
}
function Go() {
  return !this.node();
}
function Yo(t) {
  for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
    for (var i = n[e], o = 0, a = i.length, s; o < a; ++o)
      (s = i[o]) && t.call(s, s.__data__, o, i);
  return this;
}
function Ko(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Vo(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Wo(t, n) {
  return function() {
    this.setAttribute(t, n);
  };
}
function Zo(t, n) {
  return function() {
    this.setAttributeNS(t.space, t.local, n);
  };
}
function Jo(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttribute(t) : this.setAttribute(t, e);
  };
}
function Qo(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
  };
}
function jo(t, n) {
  var e = vn(t);
  if (arguments.length < 2) {
    var r = this.node();
    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
  }
  return this.each((n == null ? e.local ? Vo : Ko : typeof n == "function" ? e.local ? Qo : Jo : e.local ? Zo : Wo)(e, n));
}
function Rr(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function ta(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function na(t, n, e) {
  return function() {
    this.style.setProperty(t, n, e);
  };
}
function ea(t, n, e) {
  return function() {
    var r = n.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
  };
}
function ra(t, n, e) {
  return arguments.length > 1 ? this.each((n == null ? ta : typeof n == "function" ? ea : na)(t, n, e ?? "")) : bt(this.node(), t);
}
function bt(t, n) {
  return t.style.getPropertyValue(n) || Rr(t).getComputedStyle(t, null).getPropertyValue(n);
}
function ia(t) {
  return function() {
    delete this[t];
  };
}
function oa(t, n) {
  return function() {
    this[t] = n;
  };
}
function aa(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? delete this[t] : this[t] = e;
  };
}
function sa(t, n) {
  return arguments.length > 1 ? this.each((n == null ? ia : typeof n == "function" ? aa : oa)(t, n)) : this.node()[t];
}
function Fr(t) {
  return t.trim().split(/^|\s+/);
}
function he(t) {
  return t.classList || new Lr(t);
}
function Lr(t) {
  this._node = t, this._names = Fr(t.getAttribute("class") || "");
}
Lr.prototype = {
  add: function(t) {
    var n = this._names.indexOf(t);
    n < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var n = this._names.indexOf(t);
    n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function Dr(t, n) {
  for (var e = he(t), r = -1, i = n.length; ++r < i; ) e.add(n[r]);
}
function Hr(t, n) {
  for (var e = he(t), r = -1, i = n.length; ++r < i; ) e.remove(n[r]);
}
function ua(t) {
  return function() {
    Dr(this, t);
  };
}
function la(t) {
  return function() {
    Hr(this, t);
  };
}
function fa(t, n) {
  return function() {
    (n.apply(this, arguments) ? Dr : Hr)(this, t);
  };
}
function ca(t, n) {
  var e = Fr(t + "");
  if (arguments.length < 2) {
    for (var r = he(this.node()), i = -1, o = e.length; ++i < o; ) if (!r.contains(e[i])) return !1;
    return !0;
  }
  return this.each((typeof n == "function" ? fa : n ? ua : la)(e, n));
}
function ha() {
  this.textContent = "";
}
function pa(t) {
  return function() {
    this.textContent = t;
  };
}
function da(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.textContent = n ?? "";
  };
}
function ga(t) {
  return arguments.length ? this.each(t == null ? ha : (typeof t == "function" ? da : pa)(t)) : this.node().textContent;
}
function ya() {
  this.innerHTML = "";
}
function _a(t) {
  return function() {
    this.innerHTML = t;
  };
}
function ma(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.innerHTML = n ?? "";
  };
}
function va(t) {
  return arguments.length ? this.each(t == null ? ya : (typeof t == "function" ? ma : _a)(t)) : this.node().innerHTML;
}
function wa() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function ba() {
  return this.each(wa);
}
function xa() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Ma() {
  return this.each(xa);
}
function $a(t) {
  var n = typeof t == "function" ? t : Or(t);
  return this.select(function() {
    return this.appendChild(n.apply(this, arguments));
  });
}
function Aa() {
  return null;
}
function Ta(t, n) {
  var e = typeof t == "function" ? t : Or(t), r = n == null ? Aa : typeof n == "function" ? n : ce(n);
  return this.select(function() {
    return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Sa() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function Pa() {
  return this.each(Sa);
}
function Ea() {
  var t = this.cloneNode(!1), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function Na() {
  var t = this.cloneNode(!0), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function Oa(t) {
  return this.select(t ? Na : Ea);
}
function za(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function Ca(t) {
  return function(n) {
    t.call(this, n, this.__data__);
  };
}
function ka(t) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var e = "", r = n.indexOf(".");
    return r >= 0 && (e = n.slice(r + 1), n = n.slice(0, r)), { type: n, name: e };
  });
}
function Ia(t) {
  return function() {
    var n = this.__on;
    if (n) {
      for (var e = 0, r = -1, i = n.length, o; e < i; ++e)
        o = n[e], (!t.type || o.type === t.type) && o.name === t.name ? this.removeEventListener(o.type, o.listener, o.options) : n[++r] = o;
      ++r ? n.length = r : delete this.__on;
    }
  };
}
function Ra(t, n, e) {
  return function() {
    var r = this.__on, i, o = Ca(n);
    if (r) {
      for (var a = 0, s = r.length; a < s; ++a)
        if ((i = r[a]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = o, i.options = e), i.value = n;
          return;
        }
    }
    this.addEventListener(t.type, o, e), i = { type: t.type, name: t.name, value: n, listener: o, options: e }, r ? r.push(i) : this.__on = [i];
  };
}
function Fa(t, n, e) {
  var r = ka(t + ""), i, o = r.length, a;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var l = 0, u = s.length, f; l < u; ++l)
        for (i = 0, f = s[l]; i < o; ++i)
          if ((a = r[i]).type === f.type && a.name === f.name)
            return f.value;
    }
    return;
  }
  for (s = n ? Ra : Ia, i = 0; i < o; ++i) this.each(s(r[i], n, e));
  return this;
}
function qr(t, n, e) {
  var r = Rr(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i);
}
function La(t, n) {
  return function() {
    return qr(this, t, n);
  };
}
function Da(t, n) {
  return function() {
    return qr(this, t, n.apply(this, arguments));
  };
}
function Ha(t, n) {
  return this.each((typeof n == "function" ? Da : La)(t, n));
}
function* qa() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length, a; i < o; ++i)
      (a = r[i]) && (yield a);
}
var Br = [null];
function I(t, n) {
  this._groups = t, this._parents = n;
}
function qt() {
  return new I([[document.documentElement]], Br);
}
function Ba() {
  return this;
}
I.prototype = qt.prototype = {
  constructor: I,
  select: po,
  selectAll: mo,
  selectChild: xo,
  selectChildren: To,
  filter: So,
  data: Co,
  enter: Po,
  exit: Io,
  join: Ro,
  merge: Fo,
  selection: Ba,
  order: Lo,
  sort: Do,
  call: qo,
  nodes: Bo,
  node: Xo,
  size: Uo,
  empty: Go,
  each: Yo,
  attr: jo,
  style: ra,
  property: sa,
  classed: ca,
  text: ga,
  html: va,
  raise: ba,
  lower: Ma,
  append: $a,
  insert: Ta,
  remove: Pa,
  clone: Oa,
  datum: za,
  on: Fa,
  dispatch: Ha,
  [Symbol.iterator]: qa
};
function P(t) {
  return typeof t == "string" ? new I([[document.querySelector(t)]], [document.documentElement]) : new I([[t]], Br);
}
function Xa(t) {
  let n;
  for (; n = t.sourceEvent; ) t = n;
  return t;
}
function Gn(t, n) {
  if (t = Xa(t), n === void 0 && (n = t.currentTarget), n) {
    var e = n.ownerSVGElement || n;
    if (e.createSVGPoint) {
      var r = e.createSVGPoint();
      return r.x = t.clientX, r.y = t.clientY, r = r.matrixTransform(n.getScreenCTM().inverse()), [r.x, r.y];
    }
    if (n.getBoundingClientRect) {
      var i = n.getBoundingClientRect();
      return [t.clientX - i.left - n.clientLeft, t.clientY - i.top - n.clientTop];
    }
  }
  return [t.pageX, t.pageY];
}
const Ua = { passive: !1 }, Ct = { capture: !0, passive: !1 };
function In(t) {
  t.stopImmediatePropagation();
}
function vt(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function Ga(t) {
  var n = t.document.documentElement, e = P(t).on("dragstart.drag", vt, Ct);
  "onselectstart" in n ? e.on("selectstart.drag", vt, Ct) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none");
}
function Ya(t, n) {
  var e = t.document.documentElement, r = P(t).on("dragstart.drag", null);
  n && (r.on("click.drag", vt, Ct), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect);
}
const Kt = (t) => () => t;
function Yn(t, {
  sourceEvent: n,
  subject: e,
  target: r,
  identifier: i,
  active: o,
  x: a,
  y: s,
  dx: l,
  dy: u,
  dispatch: f
}) {
  Object.defineProperties(this, {
    type: { value: t, enumerable: !0, configurable: !0 },
    sourceEvent: { value: n, enumerable: !0, configurable: !0 },
    subject: { value: e, enumerable: !0, configurable: !0 },
    target: { value: r, enumerable: !0, configurable: !0 },
    identifier: { value: i, enumerable: !0, configurable: !0 },
    active: { value: o, enumerable: !0, configurable: !0 },
    x: { value: a, enumerable: !0, configurable: !0 },
    y: { value: s, enumerable: !0, configurable: !0 },
    dx: { value: l, enumerable: !0, configurable: !0 },
    dy: { value: u, enumerable: !0, configurable: !0 },
    _: { value: f }
  });
}
Yn.prototype.on = function() {
  var t = this._.on.apply(this._, arguments);
  return t === this._ ? this : t;
};
function Ka(t) {
  return !t.ctrlKey && !t.button;
}
function Va() {
  return this.parentNode;
}
function Wa(t, n) {
  return n ?? { x: t.x, y: t.y };
}
function Za() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Ja() {
  var t = Ka, n = Va, e = Wa, r = Za, i = {}, o = fe("start", "drag", "end"), a = 0, s, l, u, f, h = 0;
  function c(g) {
    g.on("mousedown.drag", d).filter(r).on("touchstart.drag", b).on("touchmove.drag", y, Ua).on("touchend.drag touchcancel.drag", x).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function d(g, v) {
    if (!(f || !t.call(this, g, v))) {
      var A = $(this, n.call(this, g, v), g, v, "mouse");
      A && (P(g.view).on("mousemove.drag", p, Ct).on("mouseup.drag", _, Ct), Ga(g.view), In(g), u = !1, s = g.clientX, l = g.clientY, A("start", g));
    }
  }
  function p(g) {
    if (vt(g), !u) {
      var v = g.clientX - s, A = g.clientY - l;
      u = v * v + A * A > h;
    }
    i.mouse("drag", g);
  }
  function _(g) {
    P(g.view).on("mousemove.drag mouseup.drag", null), Ya(g.view, u), vt(g), i.mouse("end", g);
  }
  function b(g, v) {
    if (t.call(this, g, v)) {
      var A = g.changedTouches, T = n.call(this, g, v), E = A.length, X, V;
      for (X = 0; X < E; ++X)
        (V = $(this, T, g, v, A[X].identifier, A[X])) && (In(g), V("start", g, A[X]));
    }
  }
  function y(g) {
    var v = g.changedTouches, A = v.length, T, E;
    for (T = 0; T < A; ++T)
      (E = i[v[T].identifier]) && (vt(g), E("drag", g, v[T]));
  }
  function x(g) {
    var v = g.changedTouches, A = v.length, T, E;
    for (f && clearTimeout(f), f = setTimeout(function() {
      f = null;
    }, 500), T = 0; T < A; ++T)
      (E = i[v[T].identifier]) && (In(g), E("end", g, v[T]));
  }
  function $(g, v, A, T, E, X) {
    var V = o.copy(), w = Gn(X || A, v), U, N, F;
    if ((F = e.call(g, new Yn("beforestart", {
      sourceEvent: A,
      target: c,
      identifier: E,
      active: a,
      x: w[0],
      y: w[1],
      dx: 0,
      dy: 0,
      dispatch: V
    }), T)) != null)
      return U = F.x - w[0] || 0, N = F.y - w[1] || 0, function Gt(it, st, _t) {
        var R = w, kn;
        switch (it) {
          case "start":
            i[E] = Gt, kn = a++;
            break;
          case "end":
            delete i[E], --a;
          // falls through
          case "drag":
            w = Gn(_t || st, v), kn = a;
            break;
        }
        V.call(
          it,
          g,
          new Yn(it, {
            sourceEvent: st,
            subject: F,
            target: c,
            identifier: E,
            active: kn,
            x: w[0] + U,
            y: w[1] + N,
            dx: w[0] - R[0],
            dy: w[1] - R[1],
            dispatch: V
          }),
          T
        );
      };
  }
  return c.filter = function(g) {
    return arguments.length ? (t = typeof g == "function" ? g : Kt(!!g), c) : t;
  }, c.container = function(g) {
    return arguments.length ? (n = typeof g == "function" ? g : Kt(g), c) : n;
  }, c.subject = function(g) {
    return arguments.length ? (e = typeof g == "function" ? g : Kt(g), c) : e;
  }, c.touchable = function(g) {
    return arguments.length ? (r = typeof g == "function" ? g : Kt(!!g), c) : r;
  }, c.on = function() {
    var g = o.on.apply(o, arguments);
    return g === o ? c : g;
  }, c.clickDistance = function(g) {
    return arguments.length ? (h = (g = +g) * g, c) : Math.sqrt(h);
  }, c;
}
function pe(t, n, e) {
  t.prototype = n.prototype = e, e.constructor = t;
}
function Xr(t, n) {
  var e = Object.create(t.prototype);
  for (var r in n) e[r] = n[r];
  return e;
}
function Bt() {
}
var kt = 0.7, ln = 1 / kt, wt = "\\s*([+-]?\\d+)\\s*", It = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", G = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Qa = /^#([0-9a-f]{3,8})$/, ja = new RegExp(`^rgb\\(${wt},${wt},${wt}\\)$`), ts = new RegExp(`^rgb\\(${G},${G},${G}\\)$`), ns = new RegExp(`^rgba\\(${wt},${wt},${wt},${It}\\)$`), es = new RegExp(`^rgba\\(${G},${G},${G},${It}\\)$`), rs = new RegExp(`^hsl\\(${It},${G},${G}\\)$`), is = new RegExp(`^hsla\\(${It},${G},${G},${It}\\)$`), Fe = {
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
pe(Bt, ct, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Le,
  // Deprecated! Use color.formatHex.
  formatHex: Le,
  formatHex8: os,
  formatHsl: as,
  formatRgb: De,
  toString: De
});
function Le() {
  return this.rgb().formatHex();
}
function os() {
  return this.rgb().formatHex8();
}
function as() {
  return Ur(this).formatHsl();
}
function De() {
  return this.rgb().formatRgb();
}
function ct(t) {
  var n, e;
  return t = (t + "").trim().toLowerCase(), (n = Qa.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), e === 6 ? He(n) : e === 3 ? new O(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, (n & 15) << 4 | n & 15, 1) : e === 8 ? Vt(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (n & 255) / 255) : e === 4 ? Vt(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, ((n & 15) << 4 | n & 15) / 255) : null) : (n = ja.exec(t)) ? new O(n[1], n[2], n[3], 1) : (n = ts.exec(t)) ? new O(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, 1) : (n = ns.exec(t)) ? Vt(n[1], n[2], n[3], n[4]) : (n = es.exec(t)) ? Vt(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, n[4]) : (n = rs.exec(t)) ? Xe(n[1], n[2] / 100, n[3] / 100, 1) : (n = is.exec(t)) ? Xe(n[1], n[2] / 100, n[3] / 100, n[4]) : Fe.hasOwnProperty(t) ? He(Fe[t]) : t === "transparent" ? new O(NaN, NaN, NaN, 0) : null;
}
function He(t) {
  return new O(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function Vt(t, n, e, r) {
  return r <= 0 && (t = n = e = NaN), new O(t, n, e, r);
}
function ss(t) {
  return t instanceof Bt || (t = ct(t)), t ? (t = t.rgb(), new O(t.r, t.g, t.b, t.opacity)) : new O();
}
function Kn(t, n, e, r) {
  return arguments.length === 1 ? ss(t) : new O(t, n, e, r ?? 1);
}
function O(t, n, e, r) {
  this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
}
pe(O, Kn, Xr(Bt, {
  brighter(t) {
    return t = t == null ? ln : Math.pow(ln, t), new O(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? kt : Math.pow(kt, t), new O(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new O(ft(this.r), ft(this.g), ft(this.b), fn(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: qe,
  // Deprecated! Use color.formatHex.
  formatHex: qe,
  formatHex8: us,
  formatRgb: Be,
  toString: Be
}));
function qe() {
  return `#${lt(this.r)}${lt(this.g)}${lt(this.b)}`;
}
function us() {
  return `#${lt(this.r)}${lt(this.g)}${lt(this.b)}${lt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Be() {
  const t = fn(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${ft(this.r)}, ${ft(this.g)}, ${ft(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function fn(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function ft(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function lt(t) {
  return t = ft(t), (t < 16 ? "0" : "") + t.toString(16);
}
function Xe(t, n, e, r) {
  return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new H(t, n, e, r);
}
function Ur(t) {
  if (t instanceof H) return new H(t.h, t.s, t.l, t.opacity);
  if (t instanceof Bt || (t = ct(t)), !t) return new H();
  if (t instanceof H) return t;
  t = t.rgb();
  var n = t.r / 255, e = t.g / 255, r = t.b / 255, i = Math.min(n, e, r), o = Math.max(n, e, r), a = NaN, s = o - i, l = (o + i) / 2;
  return s ? (n === o ? a = (e - r) / s + (e < r) * 6 : e === o ? a = (r - n) / s + 2 : a = (n - e) / s + 4, s /= l < 0.5 ? o + i : 2 - o - i, a *= 60) : s = l > 0 && l < 1 ? 0 : a, new H(a, s, l, t.opacity);
}
function ls(t, n, e, r) {
  return arguments.length === 1 ? Ur(t) : new H(t, n, e, r ?? 1);
}
function H(t, n, e, r) {
  this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
}
pe(H, ls, Xr(Bt, {
  brighter(t) {
    return t = t == null ? ln : Math.pow(ln, t), new H(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? kt : Math.pow(kt, t), new H(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, n = isNaN(t) || isNaN(this.s) ? 0 : this.s, e = this.l, r = e + (e < 0.5 ? e : 1 - e) * n, i = 2 * e - r;
    return new O(
      Rn(t >= 240 ? t - 240 : t + 120, i, r),
      Rn(t, i, r),
      Rn(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new H(Ue(this.h), Wt(this.s), Wt(this.l), fn(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = fn(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${Ue(this.h)}, ${Wt(this.s) * 100}%, ${Wt(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function Ue(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function Wt(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function Rn(t, n, e) {
  return (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n) * 255;
}
const de = (t) => () => t;
function fs(t, n) {
  return function(e) {
    return t + e * n;
  };
}
function cs(t, n, e) {
  return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function(r) {
    return Math.pow(t + r * n, e);
  };
}
function hs(t) {
  return (t = +t) == 1 ? Gr : function(n, e) {
    return e - n ? cs(n, e, t) : de(isNaN(n) ? e : n);
  };
}
function Gr(t, n) {
  var e = n - t;
  return e ? fs(t, e) : de(isNaN(t) ? n : t);
}
const cn = function t(n) {
  var e = hs(n);
  function r(i, o) {
    var a = e((i = Kn(i)).r, (o = Kn(o)).r), s = e(i.g, o.g), l = e(i.b, o.b), u = Gr(i.opacity, o.opacity);
    return function(f) {
      return i.r = a(f), i.g = s(f), i.b = l(f), i.opacity = u(f), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function ps(t, n) {
  n || (n = []);
  var e = t ? Math.min(n.length, t.length) : 0, r = n.slice(), i;
  return function(o) {
    for (i = 0; i < e; ++i) r[i] = t[i] * (1 - o) + n[i] * o;
    return r;
  };
}
function ds(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function gs(t, n) {
  var e = n ? n.length : 0, r = t ? Math.min(e, t.length) : 0, i = new Array(r), o = new Array(e), a;
  for (a = 0; a < r; ++a) i[a] = ge(t[a], n[a]);
  for (; a < e; ++a) o[a] = n[a];
  return function(s) {
    for (a = 0; a < r; ++a) o[a] = i[a](s);
    return o;
  };
}
function ys(t, n) {
  var e = /* @__PURE__ */ new Date();
  return t = +t, n = +n, function(r) {
    return e.setTime(t * (1 - r) + n * r), e;
  };
}
function L(t, n) {
  return t = +t, n = +n, function(e) {
    return t * (1 - e) + n * e;
  };
}
function _s(t, n) {
  var e = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (n === null || typeof n != "object") && (n = {});
  for (i in n)
    i in t ? e[i] = ge(t[i], n[i]) : r[i] = n[i];
  return function(o) {
    for (i in e) r[i] = e[i](o);
    return r;
  };
}
var Vn = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Fn = new RegExp(Vn.source, "g");
function ms(t) {
  return function() {
    return t;
  };
}
function vs(t) {
  return function(n) {
    return t(n) + "";
  };
}
function Yr(t, n) {
  var e = Vn.lastIndex = Fn.lastIndex = 0, r, i, o, a = -1, s = [], l = [];
  for (t = t + "", n = n + ""; (r = Vn.exec(t)) && (i = Fn.exec(n)); )
    (o = i.index) > e && (o = n.slice(e, o), s[a] ? s[a] += o : s[++a] = o), (r = r[0]) === (i = i[0]) ? s[a] ? s[a] += i : s[++a] = i : (s[++a] = null, l.push({ i: a, x: L(r, i) })), e = Fn.lastIndex;
  return e < n.length && (o = n.slice(e), s[a] ? s[a] += o : s[++a] = o), s.length < 2 ? l[0] ? vs(l[0].x) : ms(n) : (n = l.length, function(u) {
    for (var f = 0, h; f < n; ++f) s[(h = l[f]).i] = h.x(u);
    return s.join("");
  });
}
function ge(t, n) {
  var e = typeof n, r;
  return n == null || e === "boolean" ? de(n) : (e === "number" ? L : e === "string" ? (r = ct(n)) ? (n = r, cn) : Yr : n instanceof ct ? cn : n instanceof Date ? ys : ds(n) ? ps : Array.isArray(n) ? gs : typeof n.valueOf != "function" && typeof n.toString != "function" || isNaN(n) ? _s : L)(t, n);
}
function ws(t, n) {
  return t = +t, n = +n, function(e) {
    return Math.round(t * (1 - e) + n * e);
  };
}
var Ge = 180 / Math.PI, Wn = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Kr(t, n, e, r, i, o) {
  var a, s, l;
  return (a = Math.sqrt(t * t + n * n)) && (t /= a, n /= a), (l = t * e + n * r) && (e -= t * l, r -= n * l), (s = Math.sqrt(e * e + r * r)) && (e /= s, r /= s, l /= s), t * r < n * e && (t = -t, n = -n, l = -l, a = -a), {
    translateX: i,
    translateY: o,
    rotate: Math.atan2(n, t) * Ge,
    skewX: Math.atan(l) * Ge,
    scaleX: a,
    scaleY: s
  };
}
var Zt;
function bs(t) {
  const n = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return n.isIdentity ? Wn : Kr(n.a, n.b, n.c, n.d, n.e, n.f);
}
function xs(t) {
  return t == null || (Zt || (Zt = document.createElementNS("http://www.w3.org/2000/svg", "g")), Zt.setAttribute("transform", t), !(t = Zt.transform.baseVal.consolidate())) ? Wn : (t = t.matrix, Kr(t.a, t.b, t.c, t.d, t.e, t.f));
}
function Vr(t, n, e, r) {
  function i(u) {
    return u.length ? u.pop() + " " : "";
  }
  function o(u, f, h, c, d, p) {
    if (u !== h || f !== c) {
      var _ = d.push("translate(", null, n, null, e);
      p.push({ i: _ - 4, x: L(u, h) }, { i: _ - 2, x: L(f, c) });
    } else (h || c) && d.push("translate(" + h + n + c + e);
  }
  function a(u, f, h, c) {
    u !== f ? (u - f > 180 ? f += 360 : f - u > 180 && (u += 360), c.push({ i: h.push(i(h) + "rotate(", null, r) - 2, x: L(u, f) })) : f && h.push(i(h) + "rotate(" + f + r);
  }
  function s(u, f, h, c) {
    u !== f ? c.push({ i: h.push(i(h) + "skewX(", null, r) - 2, x: L(u, f) }) : f && h.push(i(h) + "skewX(" + f + r);
  }
  function l(u, f, h, c, d, p) {
    if (u !== h || f !== c) {
      var _ = d.push(i(d) + "scale(", null, ",", null, ")");
      p.push({ i: _ - 4, x: L(u, h) }, { i: _ - 2, x: L(f, c) });
    } else (h !== 1 || c !== 1) && d.push(i(d) + "scale(" + h + "," + c + ")");
  }
  return function(u, f) {
    var h = [], c = [];
    return u = t(u), f = t(f), o(u.translateX, u.translateY, f.translateX, f.translateY, h, c), a(u.rotate, f.rotate, h, c), s(u.skewX, f.skewX, h, c), l(u.scaleX, u.scaleY, f.scaleX, f.scaleY, h, c), u = f = null, function(d) {
      for (var p = -1, _ = c.length, b; ++p < _; ) h[(b = c[p]).i] = b.x(d);
      return h.join("");
    };
  };
}
var Ms = Vr(bs, "px, ", "px)", "deg)"), $s = Vr(xs, ", ", ")", ")"), xt = 0, Et = 0, St = 0, Wr = 1e3, hn, Nt, pn = 0, ht = 0, wn = 0, Rt = typeof performance == "object" && performance.now ? performance : Date, Zr = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function bn() {
  return ht || (Zr(As), ht = Rt.now() + wn);
}
function As() {
  ht = 0;
}
function Ft() {
  this._call = this._time = this._next = null;
}
Ft.prototype = Jr.prototype = {
  constructor: Ft,
  restart: function(t, n, e) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    e = (e == null ? bn() : +e) + (n == null ? 0 : +n), !this._next && Nt !== this && (Nt ? Nt._next = this : hn = this, Nt = this), this._call = t, this._time = e, Zn();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Zn());
  }
};
function Jr(t, n, e) {
  var r = new Ft();
  return r.restart(t, n, e), r;
}
function Ts() {
  bn(), ++xt;
  for (var t = hn, n; t; )
    (n = ht - t._time) >= 0 && t._call.call(void 0, n), t = t._next;
  --xt;
}
function Ye() {
  ht = (pn = Rt.now()) + wn, xt = Et = 0;
  try {
    Ts();
  } finally {
    xt = 0, Ps(), ht = 0;
  }
}
function Ss() {
  var t = Rt.now(), n = t - pn;
  n > Wr && (wn -= n, pn = t);
}
function Ps() {
  for (var t, n = hn, e, r = 1 / 0; n; )
    n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : hn = e);
  Nt = t, Zn(r);
}
function Zn(t) {
  if (!xt) {
    Et && (Et = clearTimeout(Et));
    var n = t - ht;
    n > 24 ? (t < 1 / 0 && (Et = setTimeout(Ye, t - Rt.now() - wn)), St && (St = clearInterval(St))) : (St || (pn = Rt.now(), St = setInterval(Ss, Wr)), xt = 1, Zr(Ye));
  }
}
function Ke(t, n, e) {
  var r = new Ft();
  return n = n == null ? 0 : +n, r.restart((i) => {
    r.stop(), t(i + n);
  }, n, e), r;
}
function Es(t, n, e) {
  var r = new Ft(), i = n;
  return r._restart = r.restart, r.restart = function(o, a, s) {
    a = +a, s = s == null ? bn() : +s, r._restart(function l(u) {
      u += i, r._restart(l, i += a, s), o(u);
    }, a, s);
  }, r.restart(t, n, e), r;
}
var Ns = fe("start", "end", "cancel", "interrupt"), Os = [], Qr = 0, Ve = 1, Jn = 2, nn = 3, We = 4, Qn = 5, en = 6;
function xn(t, n, e, r, i, o) {
  var a = t.__transition;
  if (!a) t.__transition = {};
  else if (e in a) return;
  zs(t, e, {
    name: n,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: Ns,
    tween: Os,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: Qr
  });
}
function ye(t, n) {
  var e = q(t, n);
  if (e.state > Qr) throw new Error("too late; already scheduled");
  return e;
}
function K(t, n) {
  var e = q(t, n);
  if (e.state > nn) throw new Error("too late; already running");
  return e;
}
function q(t, n) {
  var e = t.__transition;
  if (!e || !(e = e[n])) throw new Error("transition not found");
  return e;
}
function zs(t, n, e) {
  var r = t.__transition, i;
  r[n] = e, e.timer = Jr(o, 0, e.time);
  function o(u) {
    e.state = Ve, e.timer.restart(a, e.delay, e.time), e.delay <= u && a(u - e.delay);
  }
  function a(u) {
    var f, h, c, d;
    if (e.state !== Ve) return l();
    for (f in r)
      if (d = r[f], d.name === e.name) {
        if (d.state === nn) return Ke(a);
        d.state === We ? (d.state = en, d.timer.stop(), d.on.call("interrupt", t, t.__data__, d.index, d.group), delete r[f]) : +f < n && (d.state = en, d.timer.stop(), d.on.call("cancel", t, t.__data__, d.index, d.group), delete r[f]);
      }
    if (Ke(function() {
      e.state === nn && (e.state = We, e.timer.restart(s, e.delay, e.time), s(u));
    }), e.state = Jn, e.on.call("start", t, t.__data__, e.index, e.group), e.state === Jn) {
      for (e.state = nn, i = new Array(c = e.tween.length), f = 0, h = -1; f < c; ++f)
        (d = e.tween[f].value.call(t, t.__data__, e.index, e.group)) && (i[++h] = d);
      i.length = h + 1;
    }
  }
  function s(u) {
    for (var f = u < e.duration ? e.ease.call(null, u / e.duration) : (e.timer.restart(l), e.state = Qn, 1), h = -1, c = i.length; ++h < c; )
      i[h].call(t, f);
    e.state === Qn && (e.on.call("end", t, t.__data__, e.index, e.group), l());
  }
  function l() {
    e.state = en, e.timer.stop(), delete r[n];
    for (var u in r) return;
    delete t.__transition;
  }
}
function Cs(t, n) {
  var e = t.__transition, r, i, o = !0, a;
  if (e) {
    n = n == null ? null : n + "";
    for (a in e) {
      if ((r = e[a]).name !== n) {
        o = !1;
        continue;
      }
      i = r.state > Jn && r.state < Qn, r.state = en, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete e[a];
    }
    o && delete t.__transition;
  }
}
function ks(t) {
  return this.each(function() {
    Cs(this, t);
  });
}
function Is(t, n) {
  var e, r;
  return function() {
    var i = K(this, t), o = i.tween;
    if (o !== e) {
      r = e = o;
      for (var a = 0, s = r.length; a < s; ++a)
        if (r[a].name === n) {
          r = r.slice(), r.splice(a, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function Rs(t, n, e) {
  var r, i;
  if (typeof e != "function") throw new Error();
  return function() {
    var o = K(this, t), a = o.tween;
    if (a !== r) {
      i = (r = a).slice();
      for (var s = { name: n, value: e }, l = 0, u = i.length; l < u; ++l)
        if (i[l].name === n) {
          i[l] = s;
          break;
        }
      l === u && i.push(s);
    }
    o.tween = i;
  };
}
function Fs(t, n) {
  var e = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = q(this.node(), e).tween, i = 0, o = r.length, a; i < o; ++i)
      if ((a = r[i]).name === t)
        return a.value;
    return null;
  }
  return this.each((n == null ? Is : Rs)(e, t, n));
}
function _e(t, n, e) {
  var r = t._id;
  return t.each(function() {
    var i = K(this, r);
    (i.value || (i.value = {}))[n] = e.apply(this, arguments);
  }), function(i) {
    return q(i, r).value[n];
  };
}
function jr(t, n) {
  var e;
  return (typeof n == "number" ? L : n instanceof ct ? cn : (e = ct(n)) ? (n = e, cn) : Yr)(t, n);
}
function Ls(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Ds(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Hs(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttribute(t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function qs(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttributeNS(t.space, t.local);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function Bs(t, n, e) {
  var r, i, o;
  return function() {
    var a, s = e(this), l;
    return s == null ? void this.removeAttribute(t) : (a = this.getAttribute(t), l = s + "", a === l ? null : a === r && l === i ? o : (i = l, o = n(r = a, s)));
  };
}
function Xs(t, n, e) {
  var r, i, o;
  return function() {
    var a, s = e(this), l;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (a = this.getAttributeNS(t.space, t.local), l = s + "", a === l ? null : a === r && l === i ? o : (i = l, o = n(r = a, s)));
  };
}
function Us(t, n) {
  var e = vn(t), r = e === "transform" ? $s : jr;
  return this.attrTween(t, typeof n == "function" ? (e.local ? Xs : Bs)(e, r, _e(this, "attr." + t, n)) : n == null ? (e.local ? Ds : Ls)(e) : (e.local ? qs : Hs)(e, r, n));
}
function Gs(t, n) {
  return function(e) {
    this.setAttribute(t, n.call(this, e));
  };
}
function Ys(t, n) {
  return function(e) {
    this.setAttributeNS(t.space, t.local, n.call(this, e));
  };
}
function Ks(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && Ys(t, o)), e;
  }
  return i._value = n, i;
}
function Vs(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && Gs(t, o)), e;
  }
  return i._value = n, i;
}
function Ws(t, n) {
  var e = "attr." + t;
  if (arguments.length < 2) return (e = this.tween(e)) && e._value;
  if (n == null) return this.tween(e, null);
  if (typeof n != "function") throw new Error();
  var r = vn(t);
  return this.tween(e, (r.local ? Ks : Vs)(r, n));
}
function Zs(t, n) {
  return function() {
    ye(this, t).delay = +n.apply(this, arguments);
  };
}
function Js(t, n) {
  return n = +n, function() {
    ye(this, t).delay = n;
  };
}
function Qs(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Zs : Js)(n, t)) : q(this.node(), n).delay;
}
function js(t, n) {
  return function() {
    K(this, t).duration = +n.apply(this, arguments);
  };
}
function tu(t, n) {
  return n = +n, function() {
    K(this, t).duration = n;
  };
}
function nu(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? js : tu)(n, t)) : q(this.node(), n).duration;
}
function eu(t, n) {
  if (typeof n != "function") throw new Error();
  return function() {
    K(this, t).ease = n;
  };
}
function ru(t) {
  var n = this._id;
  return arguments.length ? this.each(eu(n, t)) : q(this.node(), n).ease;
}
function iu(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    if (typeof e != "function") throw new Error();
    K(this, t).ease = e;
  };
}
function ou(t) {
  if (typeof t != "function") throw new Error();
  return this.each(iu(this._id, t));
}
function au(t) {
  typeof t != "function" && (t = Cr(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = [], l, u = 0; u < a; ++u)
      (l = o[u]) && t.call(l, l.__data__, u, o) && s.push(l);
  return new Q(r, this._parents, this._name, this._id);
}
function su(t) {
  if (t._id !== this._id) throw new Error();
  for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), a = new Array(r), s = 0; s < o; ++s)
    for (var l = n[s], u = e[s], f = l.length, h = a[s] = new Array(f), c, d = 0; d < f; ++d)
      (c = l[d] || u[d]) && (h[d] = c);
  for (; s < r; ++s)
    a[s] = n[s];
  return new Q(a, this._parents, this._name, this._id);
}
function uu(t) {
  return (t + "").trim().split(/^|\s+/).every(function(n) {
    var e = n.indexOf(".");
    return e >= 0 && (n = n.slice(0, e)), !n || n === "start";
  });
}
function lu(t, n, e) {
  var r, i, o = uu(n) ? ye : K;
  return function() {
    var a = o(this, t), s = a.on;
    s !== r && (i = (r = s).copy()).on(n, e), a.on = i;
  };
}
function fu(t, n) {
  var e = this._id;
  return arguments.length < 2 ? q(this.node(), e).on.on(t) : this.each(lu(e, t, n));
}
function cu(t) {
  return function() {
    var n = this.parentNode;
    for (var e in this.__transition) if (+e !== t) return;
    n && n.removeChild(this);
  };
}
function hu() {
  return this.on("end.remove", cu(this._id));
}
function pu(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = ce(t));
  for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a)
    for (var s = r[a], l = s.length, u = o[a] = new Array(l), f, h, c = 0; c < l; ++c)
      (f = s[c]) && (h = t.call(f, f.__data__, c, s)) && ("__data__" in f && (h.__data__ = f.__data__), u[c] = h, xn(u[c], n, e, c, u, q(f, e)));
  return new Q(o, this._parents, n, e);
}
function du(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = zr(t));
  for (var r = this._groups, i = r.length, o = [], a = [], s = 0; s < i; ++s)
    for (var l = r[s], u = l.length, f, h = 0; h < u; ++h)
      if (f = l[h]) {
        for (var c = t.call(f, f.__data__, h, l), d, p = q(f, e), _ = 0, b = c.length; _ < b; ++_)
          (d = c[_]) && xn(d, n, e, _, c, p);
        o.push(c), a.push(f);
      }
  return new Q(o, a, n, e);
}
var gu = qt.prototype.constructor;
function yu() {
  return new gu(this._groups, this._parents);
}
function _u(t, n) {
  var e, r, i;
  return function() {
    var o = bt(this, t), a = (this.style.removeProperty(t), bt(this, t));
    return o === a ? null : o === e && a === r ? i : i = n(e = o, r = a);
  };
}
function ti(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function mu(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = bt(this, t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function vu(t, n, e) {
  var r, i, o;
  return function() {
    var a = bt(this, t), s = e(this), l = s + "";
    return s == null && (l = s = (this.style.removeProperty(t), bt(this, t))), a === l ? null : a === r && l === i ? o : (i = l, o = n(r = a, s));
  };
}
function wu(t, n) {
  var e, r, i, o = "style." + n, a = "end." + o, s;
  return function() {
    var l = K(this, t), u = l.on, f = l.value[o] == null ? s || (s = ti(n)) : void 0;
    (u !== e || i !== f) && (r = (e = u).copy()).on(a, i = f), l.on = r;
  };
}
function bu(t, n, e) {
  var r = (t += "") == "transform" ? Ms : jr;
  return n == null ? this.styleTween(t, _u(t, r)).on("end.style." + t, ti(t)) : typeof n == "function" ? this.styleTween(t, vu(t, r, _e(this, "style." + t, n))).each(wu(this._id, t)) : this.styleTween(t, mu(t, r, n), e).on("end.style." + t, null);
}
function xu(t, n, e) {
  return function(r) {
    this.style.setProperty(t, n.call(this, r), e);
  };
}
function Mu(t, n, e) {
  var r, i;
  function o() {
    var a = n.apply(this, arguments);
    return a !== i && (r = (i = a) && xu(t, a, e)), r;
  }
  return o._value = n, o;
}
function $u(t, n, e) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (n == null) return this.tween(r, null);
  if (typeof n != "function") throw new Error();
  return this.tween(r, Mu(t, n, e ?? ""));
}
function Au(t) {
  return function() {
    this.textContent = t;
  };
}
function Tu(t) {
  return function() {
    var n = t(this);
    this.textContent = n ?? "";
  };
}
function Su(t) {
  return this.tween("text", typeof t == "function" ? Tu(_e(this, "text", t)) : Au(t == null ? "" : t + ""));
}
function Pu(t) {
  return function(n) {
    this.textContent = t.call(this, n);
  };
}
function Eu(t) {
  var n, e;
  function r() {
    var i = t.apply(this, arguments);
    return i !== e && (n = (e = i) && Pu(i)), n;
  }
  return r._value = t, r;
}
function Nu(t) {
  var n = "text";
  if (arguments.length < 1) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  return this.tween(n, Eu(t));
}
function Ou() {
  for (var t = this._name, n = this._id, e = ni(), r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, l, u = 0; u < s; ++u)
      if (l = a[u]) {
        var f = q(l, n);
        xn(l, t, e, u, a, {
          time: f.time + f.delay + f.duration,
          delay: 0,
          duration: f.duration,
          ease: f.ease
        });
      }
  return new Q(r, this._parents, t, e);
}
function zu() {
  var t, n, e = this, r = e._id, i = e.size();
  return new Promise(function(o, a) {
    var s = { value: a }, l = { value: function() {
      --i === 0 && o();
    } };
    e.each(function() {
      var u = K(this, r), f = u.on;
      f !== t && (n = (t = f).copy(), n._.cancel.push(s), n._.interrupt.push(s), n._.end.push(l)), u.on = n;
    }), i === 0 && o();
  });
}
var Cu = 0;
function Q(t, n, e, r) {
  this._groups = t, this._parents = n, this._name = e, this._id = r;
}
function ni() {
  return ++Cu;
}
var W = qt.prototype;
Q.prototype = {
  constructor: Q,
  select: pu,
  selectAll: du,
  selectChild: W.selectChild,
  selectChildren: W.selectChildren,
  filter: au,
  merge: su,
  selection: yu,
  transition: Ou,
  call: W.call,
  nodes: W.nodes,
  node: W.node,
  size: W.size,
  empty: W.empty,
  each: W.each,
  on: fu,
  attr: Us,
  attrTween: Ws,
  style: bu,
  styleTween: $u,
  text: Su,
  textTween: Nu,
  remove: hu,
  tween: Fs,
  delay: Qs,
  duration: nu,
  ease: ru,
  easeVarying: ou,
  end: zu,
  [Symbol.iterator]: W[Symbol.iterator]
};
function ku(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var Iu = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: ku
};
function Ru(t, n) {
  for (var e; !(e = t.__transition) || !(e = e[n]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${n} not found`);
  return e;
}
function Fu(t) {
  var n, e;
  t instanceof Q ? (n = t._id, t = t._name) : (n = ni(), (e = Iu).time = bn(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, l, u = 0; u < s; ++u)
      (l = a[u]) && xn(l, t, n, u, a, e || Ru(l, n));
  return new Q(r, this._parents, t, n);
}
qt.prototype.interrupt = ks;
qt.prototype.transition = Fu;
const jn = Math.PI, te = 2 * jn, ut = 1e-6, Lu = te - ut;
function ei(t) {
  this._ += t[0];
  for (let n = 1, e = t.length; n < e; ++n)
    this._ += arguments[n] + t[n];
}
function Du(t) {
  let n = Math.floor(t);
  if (!(n >= 0)) throw new Error(`invalid digits: ${t}`);
  if (n > 15) return ei;
  const e = 10 ** n;
  return function(r) {
    this._ += r[0];
    for (let i = 1, o = r.length; i < o; ++i)
      this._ += Math.round(arguments[i] * e) / e + r[i];
  };
}
class ri {
  constructor(n) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = n == null ? ei : Du(n);
  }
  moveTo(n, e) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(n, e) {
    this._append`L${this._x1 = +n},${this._y1 = +e}`;
  }
  quadraticCurveTo(n, e, r, i) {
    this._append`Q${+n},${+e},${this._x1 = +r},${this._y1 = +i}`;
  }
  bezierCurveTo(n, e, r, i, o, a) {
    this._append`C${+n},${+e},${+r},${+i},${this._x1 = +o},${this._y1 = +a}`;
  }
  arcTo(n, e, r, i, o) {
    if (n = +n, e = +e, r = +r, i = +i, o = +o, o < 0) throw new Error(`negative radius: ${o}`);
    let a = this._x1, s = this._y1, l = r - n, u = i - e, f = a - n, h = s - e, c = f * f + h * h;
    if (this._x1 === null)
      this._append`M${this._x1 = n},${this._y1 = e}`;
    else if (c > ut) if (!(Math.abs(h * l - u * f) > ut) || !o)
      this._append`L${this._x1 = n},${this._y1 = e}`;
    else {
      let d = r - a, p = i - s, _ = l * l + u * u, b = d * d + p * p, y = Math.sqrt(_), x = Math.sqrt(c), $ = o * Math.tan((jn - Math.acos((_ + c - b) / (2 * y * x))) / 2), g = $ / x, v = $ / y;
      Math.abs(g - 1) > ut && this._append`L${n + g * f},${e + g * h}`, this._append`A${o},${o},0,0,${+(h * d > f * p)},${this._x1 = n + v * l},${this._y1 = e + v * u}`;
    }
  }
  arc(n, e, r, i, o, a) {
    if (n = +n, e = +e, r = +r, a = !!a, r < 0) throw new Error(`negative radius: ${r}`);
    let s = r * Math.cos(i), l = r * Math.sin(i), u = n + s, f = e + l, h = 1 ^ a, c = a ? i - o : o - i;
    this._x1 === null ? this._append`M${u},${f}` : (Math.abs(this._x1 - u) > ut || Math.abs(this._y1 - f) > ut) && this._append`L${u},${f}`, r && (c < 0 && (c = c % te + te), c > Lu ? this._append`A${r},${r},0,1,${h},${n - s},${e - l}A${r},${r},0,1,${h},${this._x1 = u},${this._y1 = f}` : c > ut && this._append`A${r},${r},0,${+(c >= jn)},${h},${this._x1 = n + r * Math.cos(o)},${this._y1 = e + r * Math.sin(o)}`);
  }
  rect(n, e, r, i) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function B() {
  return new ri();
}
B.prototype = ri.prototype;
function Hu(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function dn(t, n) {
  if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;
  var e, r = t.slice(0, e);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(e + 1)
  ];
}
function Mt(t) {
  return t = dn(Math.abs(t)), t ? t[1] : NaN;
}
function qu(t, n) {
  return function(e, r) {
    for (var i = e.length, o = [], a = 0, s = t[0], l = 0; i > 0 && s > 0 && (l + s + 1 > r && (s = Math.max(1, r - l)), o.push(e.substring(i -= s, i + s)), !((l += s + 1) > r)); )
      s = t[a = (a + 1) % t.length];
    return o.reverse().join(n);
  };
}
function Bu(t) {
  return function(n) {
    return n.replace(/[0-9]/g, function(e) {
      return t[+e];
    });
  };
}
var Xu = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function gn(t) {
  if (!(n = Xu.exec(t))) throw new Error("invalid format: " + t);
  var n;
  return new me({
    fill: n[1],
    align: n[2],
    sign: n[3],
    symbol: n[4],
    zero: n[5],
    width: n[6],
    comma: n[7],
    precision: n[8] && n[8].slice(1),
    trim: n[9],
    type: n[10]
  });
}
gn.prototype = me.prototype;
function me(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
me.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Uu(t) {
  t: for (var n = t.length, e = 1, r = -1, i; e < n; ++e)
    switch (t[e]) {
      case ".":
        r = i = e;
        break;
      case "0":
        r === 0 && (r = e), i = e;
        break;
      default:
        if (!+t[e]) break t;
        r > 0 && (r = 0);
        break;
    }
  return r > 0 ? t.slice(0, r) + t.slice(i + 1) : t;
}
var ii;
function Gu(t, n) {
  var e = dn(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1], o = i - (ii = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, a = r.length;
  return o === a ? r : o > a ? r + new Array(o - a + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + dn(t, Math.max(0, n + o - 1))[0];
}
function Ze(t, n) {
  var e = dn(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const Je = {
  "%": (t, n) => (t * 100).toFixed(n),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: Hu,
  e: (t, n) => t.toExponential(n),
  f: (t, n) => t.toFixed(n),
  g: (t, n) => t.toPrecision(n),
  o: (t) => Math.round(t).toString(8),
  p: (t, n) => Ze(t * 100, n),
  r: Ze,
  s: Gu,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function Qe(t) {
  return t;
}
var je = Array.prototype.map, tr = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Yu(t) {
  var n = t.grouping === void 0 || t.thousands === void 0 ? Qe : qu(je.call(t.grouping, Number), t.thousands + ""), e = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", o = t.numerals === void 0 ? Qe : Bu(je.call(t.numerals, String)), a = t.percent === void 0 ? "%" : t.percent + "", s = t.minus === void 0 ? "−" : t.minus + "", l = t.nan === void 0 ? "NaN" : t.nan + "";
  function u(h) {
    h = gn(h);
    var c = h.fill, d = h.align, p = h.sign, _ = h.symbol, b = h.zero, y = h.width, x = h.comma, $ = h.precision, g = h.trim, v = h.type;
    v === "n" ? (x = !0, v = "g") : Je[v] || ($ === void 0 && ($ = 12), g = !0, v = "g"), (b || c === "0" && d === "=") && (b = !0, c = "0", d = "=");
    var A = _ === "$" ? e : _ === "#" && /[boxX]/.test(v) ? "0" + v.toLowerCase() : "", T = _ === "$" ? r : /[%p]/.test(v) ? a : "", E = Je[v], X = /[defgprs%]/.test(v);
    $ = $ === void 0 ? 6 : /[gprs]/.test(v) ? Math.max(1, Math.min(21, $)) : Math.max(0, Math.min(20, $));
    function V(w) {
      var U = A, N = T, F, Gt, it;
      if (v === "c")
        N = E(w) + N, w = "";
      else {
        w = +w;
        var st = w < 0 || 1 / w < 0;
        if (w = isNaN(w) ? l : E(Math.abs(w), $), g && (w = Uu(w)), st && +w == 0 && p !== "+" && (st = !1), U = (st ? p === "(" ? p : s : p === "-" || p === "(" ? "" : p) + U, N = (v === "s" ? tr[8 + ii / 3] : "") + N + (st && p === "(" ? ")" : ""), X) {
          for (F = -1, Gt = w.length; ++F < Gt; )
            if (it = w.charCodeAt(F), 48 > it || it > 57) {
              N = (it === 46 ? i + w.slice(F + 1) : w.slice(F)) + N, w = w.slice(0, F);
              break;
            }
        }
      }
      x && !b && (w = n(w, 1 / 0));
      var _t = U.length + w.length + N.length, R = _t < y ? new Array(y - _t + 1).join(c) : "";
      switch (x && b && (w = n(R + w, R.length ? y - N.length : 1 / 0), R = ""), d) {
        case "<":
          w = U + w + N + R;
          break;
        case "=":
          w = U + R + w + N;
          break;
        case "^":
          w = R.slice(0, _t = R.length >> 1) + U + w + N + R.slice(_t);
          break;
        default:
          w = R + U + w + N;
          break;
      }
      return o(w);
    }
    return V.toString = function() {
      return h + "";
    }, V;
  }
  function f(h, c) {
    var d = u((h = gn(h), h.type = "f", h)), p = Math.max(-8, Math.min(8, Math.floor(Mt(c) / 3))) * 3, _ = Math.pow(10, -p), b = tr[8 + p / 3];
    return function(y) {
      return d(_ * y) + b;
    };
  }
  return {
    format: u,
    formatPrefix: f
  };
}
var Jt, Mn, oi;
Ku({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Ku(t) {
  return Jt = Yu(t), Mn = Jt.format, oi = Jt.formatPrefix, Jt;
}
function Vu(t) {
  return Math.max(0, -Mt(Math.abs(t)));
}
function Wu(t, n) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Mt(n) / 3))) * 3 - Mt(Math.abs(t)));
}
function Zu(t, n) {
  return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, Mt(n) - Mt(t)) + 1;
}
function ai(t, n) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(t);
      break;
    default:
      this.range(n).domain(t);
      break;
  }
  return this;
}
const nr = Symbol("implicit");
function si() {
  var t = new Ce(), n = [], e = [], r = nr;
  function i(o) {
    let a = t.get(o);
    if (a === void 0) {
      if (r !== nr) return r;
      t.set(o, a = n.push(o) - 1);
    }
    return e[a % e.length];
  }
  return i.domain = function(o) {
    if (!arguments.length) return n.slice();
    n = [], t = new Ce();
    for (const a of o)
      t.has(a) || t.set(a, n.push(a) - 1);
    return i;
  }, i.range = function(o) {
    return arguments.length ? (e = Array.from(o), i) : e.slice();
  }, i.unknown = function(o) {
    return arguments.length ? (r = o, i) : r;
  }, i.copy = function() {
    return si(n, e).unknown(r);
  }, ai.apply(i, arguments), i;
}
function Ju(t) {
  return function() {
    return t;
  };
}
function Qu(t) {
  return +t;
}
var er = [0, 1];
function mt(t) {
  return t;
}
function ne(t, n) {
  return (n -= t = +t) ? function(e) {
    return (e - t) / n;
  } : Ju(isNaN(n) ? NaN : 0.5);
}
function ju(t, n) {
  var e;
  return t > n && (e = t, t = n, n = e), function(r) {
    return Math.max(t, Math.min(n, r));
  };
}
function tl(t, n, e) {
  var r = t[0], i = t[1], o = n[0], a = n[1];
  return i < r ? (r = ne(i, r), o = e(a, o)) : (r = ne(r, i), o = e(o, a)), function(s) {
    return o(r(s));
  };
}
function nl(t, n, e) {
  var r = Math.min(t.length, n.length) - 1, i = new Array(r), o = new Array(r), a = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++a < r; )
    i[a] = ne(t[a], t[a + 1]), o[a] = e(n[a], n[a + 1]);
  return function(s) {
    var l = Ji(t, s, 1, r) - 1;
    return o[l](i[l](s));
  };
}
function el(t, n) {
  return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function rl() {
  var t = er, n = er, e = ge, r, i, o, a = mt, s, l, u;
  function f() {
    var c = Math.min(t.length, n.length);
    return a !== mt && (a = ju(t[0], t[c - 1])), s = c > 2 ? nl : tl, l = u = null, h;
  }
  function h(c) {
    return c == null || isNaN(c = +c) ? o : (l || (l = s(t.map(r), n, e)))(r(a(c)));
  }
  return h.invert = function(c) {
    return a(i((u || (u = s(n, t.map(r), L)))(c)));
  }, h.domain = function(c) {
    return arguments.length ? (t = Array.from(c, Qu), f()) : t.slice();
  }, h.range = function(c) {
    return arguments.length ? (n = Array.from(c), f()) : n.slice();
  }, h.rangeRound = function(c) {
    return n = Array.from(c), e = ws, f();
  }, h.clamp = function(c) {
    return arguments.length ? (a = c ? !0 : mt, f()) : a !== mt;
  }, h.interpolate = function(c) {
    return arguments.length ? (e = c, f()) : e;
  }, h.unknown = function(c) {
    return arguments.length ? (o = c, h) : o;
  }, function(c, d) {
    return r = c, i = d, f();
  };
}
function il() {
  return rl()(mt, mt);
}
function ol(t, n, e, r) {
  var i = oo(t, n, e), o;
  switch (r = gn(r ?? ",f"), r.type) {
    case "s": {
      var a = Math.max(Math.abs(t), Math.abs(n));
      return r.precision == null && !isNaN(o = Wu(i, a)) && (r.precision = o), oi(r, a);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(o = Zu(i, Math.max(Math.abs(t), Math.abs(n)))) && (r.precision = o - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(o = Vu(i)) && (r.precision = o - (r.type === "%") * 2);
      break;
    }
  }
  return Mn(r);
}
function al(t) {
  var n = t.domain;
  return t.ticks = function(e) {
    var r = n();
    return io(r[0], r[r.length - 1], e ?? 10);
  }, t.tickFormat = function(e, r) {
    var i = n();
    return ol(i[0], i[i.length - 1], e ?? 10, r);
  }, t.nice = function(e) {
    e == null && (e = 10);
    var r = n(), i = 0, o = r.length - 1, a = r[i], s = r[o], l, u, f = 10;
    for (s < a && (u = a, a = s, s = u, u = i, i = o, o = u); f-- > 0; ) {
      if (u = Xn(a, s, e), u === l)
        return r[i] = a, r[o] = s, n(r);
      if (u > 0)
        a = Math.floor(a / u) * u, s = Math.ceil(s / u) * u;
      else if (u < 0)
        a = Math.ceil(a * u) / u, s = Math.floor(s * u) / u;
      else
        break;
      l = u;
    }
    return t;
  }, t;
}
function j() {
  var t = il();
  return t.copy = function() {
    return el(t, j());
  }, ai.apply(t, arguments), al(t);
}
function Ot(t, n, e) {
  this.k = t, this.x = n, this.y = e;
}
Ot.prototype = {
  constructor: Ot,
  scale: function(t) {
    return t === 1 ? this : new Ot(this.k * t, this.x, this.y);
  },
  translate: function(t, n) {
    return t === 0 & n === 0 ? this : new Ot(this.k, this.x + this.k * t, this.y + this.k * n);
  },
  apply: function(t) {
    return [t[0] * this.k + this.x, t[1] * this.k + this.y];
  },
  applyX: function(t) {
    return t * this.k + this.x;
  },
  applyY: function(t) {
    return t * this.k + this.y;
  },
  invert: function(t) {
    return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
  },
  invertX: function(t) {
    return (t - this.x) / this.k;
  },
  invertY: function(t) {
    return (t - this.y) / this.k;
  },
  rescaleX: function(t) {
    return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
  },
  rescaleY: function(t) {
    return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
Ot.prototype;
var ui = typeof global == "object" && global && global.Object === Object && global, sl = typeof self == "object" && self && self.Object === Object && self, nt = ui || sl || Function("return this")(), Y = nt.Symbol, li = Object.prototype, ul = li.hasOwnProperty, ll = li.toString, Pt = Y ? Y.toStringTag : void 0;
function fl(t) {
  var n = ul.call(t, Pt), e = t[Pt];
  try {
    t[Pt] = void 0;
    var r = !0;
  } catch {
  }
  var i = ll.call(t);
  return r && (n ? t[Pt] = e : delete t[Pt]), i;
}
var cl = Object.prototype, hl = cl.toString;
function pl(t) {
  return hl.call(t);
}
var dl = "[object Null]", gl = "[object Undefined]", rr = Y ? Y.toStringTag : void 0;
function $t(t) {
  return t == null ? t === void 0 ? gl : dl : rr && rr in Object(t) ? fl(t) : pl(t);
}
function pt(t) {
  return t != null && typeof t == "object";
}
var yl = "[object Symbol]";
function $n(t) {
  return typeof t == "symbol" || pt(t) && $t(t) == yl;
}
function At(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = Array(r); ++e < r; )
    i[e] = n(t[e], e, t);
  return i;
}
var z = Array.isArray, ir = Y ? Y.prototype : void 0, or = ir ? ir.toString : void 0;
function fi(t) {
  if (typeof t == "string")
    return t;
  if (z(t))
    return At(t, fi) + "";
  if ($n(t))
    return or ? or.call(t) : "";
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
var _l = /\s/;
function ml(t) {
  for (var n = t.length; n-- && _l.test(t.charAt(n)); )
    ;
  return n;
}
var vl = /^\s+/;
function wl(t) {
  return t && t.slice(0, ml(t) + 1).replace(vl, "");
}
function tt(t) {
  var n = typeof t;
  return t != null && (n == "object" || n == "function");
}
var ar = NaN, bl = /^[-+]0x[0-9a-f]+$/i, xl = /^0b[01]+$/i, Ml = /^0o[0-7]+$/i, $l = parseInt;
function Al(t) {
  if (typeof t == "number")
    return t;
  if ($n(t))
    return ar;
  if (tt(t)) {
    var n = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = tt(n) ? n + "" : n;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = wl(t);
  var e = xl.test(t);
  return e || Ml.test(t) ? $l(t.slice(2), e ? 2 : 8) : bl.test(t) ? ar : +t;
}
var Tl = 1 / 0, Sl = 17976931348623157e292;
function Ln(t) {
  if (!t)
    return t === 0 ? t : 0;
  if (t = Al(t), t === Tl || t === -1 / 0) {
    var n = t < 0 ? -1 : 1;
    return n * Sl;
  }
  return t === t ? t : 0;
}
function An(t) {
  return t;
}
var Pl = "[object AsyncFunction]", El = "[object Function]", Nl = "[object GeneratorFunction]", Ol = "[object Proxy]";
function ci(t) {
  if (!tt(t))
    return !1;
  var n = $t(t);
  return n == El || n == Nl || n == Pl || n == Ol;
}
var Dn = nt["__core-js_shared__"], sr = function() {
  var t = /[^.]+$/.exec(Dn && Dn.keys && Dn.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function zl(t) {
  return !!sr && sr in t;
}
var Cl = Function.prototype, kl = Cl.toString;
function gt(t) {
  if (t != null) {
    try {
      return kl.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var Il = /[\\^$.*+?()[\]{}|]/g, Rl = /^\[object .+?Constructor\]$/, Fl = Function.prototype, Ll = Object.prototype, Dl = Fl.toString, Hl = Ll.hasOwnProperty, ql = RegExp(
  "^" + Dl.call(Hl).replace(Il, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Bl(t) {
  if (!tt(t) || zl(t))
    return !1;
  var n = ci(t) ? ql : Rl;
  return n.test(gt(t));
}
function Xl(t, n) {
  return t == null ? void 0 : t[n];
}
function yt(t, n) {
  var e = Xl(t, n);
  return Bl(e) ? e : void 0;
}
var ee = yt(nt, "WeakMap");
function Ul(t, n, e) {
  switch (e.length) {
    case 0:
      return t.call(n);
    case 1:
      return t.call(n, e[0]);
    case 2:
      return t.call(n, e[0], e[1]);
    case 3:
      return t.call(n, e[0], e[1], e[2]);
  }
  return t.apply(n, e);
}
function Gl(t, n) {
  var e = -1, r = t.length;
  for (n || (n = Array(r)); ++e < r; )
    n[e] = t[e];
  return n;
}
var Yl = 800, Kl = 16, Vl = Date.now;
function Wl(t) {
  var n = 0, e = 0;
  return function() {
    var r = Vl(), i = Kl - (r - e);
    if (e = r, i > 0) {
      if (++n >= Yl)
        return arguments[0];
    } else
      n = 0;
    return t.apply(void 0, arguments);
  };
}
function Zl(t) {
  return function() {
    return t;
  };
}
var yn = function() {
  try {
    var t = yt(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}(), Jl = yn ? function(t, n) {
  return yn(t, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Zl(n),
    writable: !0
  });
} : An, Ql = Wl(Jl);
function jl(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length; ++e < r && n(t[e], e, t) !== !1; )
    ;
  return t;
}
var tf = 9007199254740991, nf = /^(?:0|[1-9]\d*)$/;
function Tn(t, n) {
  var e = typeof t;
  return n = n ?? tf, !!n && (e == "number" || e != "symbol" && nf.test(t)) && t > -1 && t % 1 == 0 && t < n;
}
function ef(t, n, e) {
  n == "__proto__" && yn ? yn(t, n, {
    configurable: !0,
    enumerable: !0,
    value: e,
    writable: !0
  }) : t[n] = e;
}
function Sn(t, n) {
  return t === n || t !== t && n !== n;
}
var rf = Object.prototype, of = rf.hasOwnProperty;
function af(t, n, e) {
  var r = t[n];
  (!(of.call(t, n) && Sn(r, e)) || e === void 0 && !(n in t)) && ef(t, n, e);
}
var ur = Math.max;
function sf(t, n, e) {
  return n = ur(n === void 0 ? t.length - 1 : n, 0), function() {
    for (var r = arguments, i = -1, o = ur(r.length - n, 0), a = Array(o); ++i < o; )
      a[i] = r[n + i];
    i = -1;
    for (var s = Array(n + 1); ++i < n; )
      s[i] = r[i];
    return s[n] = e(a), Ul(t, this, s);
  };
}
function uf(t, n) {
  return Ql(sf(t, n, An), t + "");
}
var lf = 9007199254740991;
function ve(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= lf;
}
function Tt(t) {
  return t != null && ve(t.length) && !ci(t);
}
function ff(t, n, e) {
  if (!tt(e))
    return !1;
  var r = typeof n;
  return (r == "number" ? Tt(e) && Tn(n, e.length) : r == "string" && n in e) ? Sn(e[n], t) : !1;
}
var cf = Object.prototype;
function hi(t) {
  var n = t && t.constructor, e = typeof n == "function" && n.prototype || cf;
  return t === e;
}
function pi(t, n) {
  for (var e = -1, r = Array(t); ++e < t; )
    r[e] = n(e);
  return r;
}
var hf = "[object Arguments]";
function lr(t) {
  return pt(t) && $t(t) == hf;
}
var di = Object.prototype, pf = di.hasOwnProperty, df = di.propertyIsEnumerable, we = lr(/* @__PURE__ */ function() {
  return arguments;
}()) ? lr : function(t) {
  return pt(t) && pf.call(t, "callee") && !df.call(t, "callee");
};
function gf() {
  return !1;
}
var gi = typeof exports == "object" && exports && !exports.nodeType && exports, fr = gi && typeof module == "object" && module && !module.nodeType && module, yf = fr && fr.exports === gi, cr = yf ? nt.Buffer : void 0, _f = cr ? cr.isBuffer : void 0, re = _f || gf, mf = "[object Arguments]", vf = "[object Array]", wf = "[object Boolean]", bf = "[object Date]", xf = "[object Error]", Mf = "[object Function]", $f = "[object Map]", Af = "[object Number]", Tf = "[object Object]", Sf = "[object RegExp]", Pf = "[object Set]", Ef = "[object String]", Nf = "[object WeakMap]", Of = "[object ArrayBuffer]", zf = "[object DataView]", Cf = "[object Float32Array]", kf = "[object Float64Array]", If = "[object Int8Array]", Rf = "[object Int16Array]", Ff = "[object Int32Array]", Lf = "[object Uint8Array]", Df = "[object Uint8ClampedArray]", Hf = "[object Uint16Array]", qf = "[object Uint32Array]", M = {};
M[Cf] = M[kf] = M[If] = M[Rf] = M[Ff] = M[Lf] = M[Df] = M[Hf] = M[qf] = !0;
M[mf] = M[vf] = M[Of] = M[wf] = M[zf] = M[bf] = M[xf] = M[Mf] = M[$f] = M[Af] = M[Tf] = M[Sf] = M[Pf] = M[Ef] = M[Nf] = !1;
function Bf(t) {
  return pt(t) && ve(t.length) && !!M[$t(t)];
}
function Xf(t) {
  return function(n) {
    return t(n);
  };
}
var yi = typeof exports == "object" && exports && !exports.nodeType && exports, zt = yi && typeof module == "object" && module && !module.nodeType && module, Uf = zt && zt.exports === yi, Hn = Uf && ui.process, hr = function() {
  try {
    var t = zt && zt.require && zt.require("util").types;
    return t || Hn && Hn.binding && Hn.binding("util");
  } catch {
  }
}(), pr = hr && hr.isTypedArray, _i = pr ? Xf(pr) : Bf, Gf = Object.prototype, Yf = Gf.hasOwnProperty;
function mi(t, n) {
  var e = z(t), r = !e && we(t), i = !e && !r && re(t), o = !e && !r && !i && _i(t), a = e || r || i || o, s = a ? pi(t.length, String) : [], l = s.length;
  for (var u in t)
    (n || Yf.call(t, u)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Tn(u, l))) && s.push(u);
  return s;
}
function vi(t, n) {
  return function(e) {
    return t(n(e));
  };
}
var Kf = vi(Object.keys, Object), Vf = Object.prototype, Wf = Vf.hasOwnProperty;
function Zf(t) {
  if (!hi(t))
    return Kf(t);
  var n = [];
  for (var e in Object(t))
    Wf.call(t, e) && e != "constructor" && n.push(e);
  return n;
}
function Xt(t) {
  return Tt(t) ? mi(t) : Zf(t);
}
function Jf(t) {
  var n = [];
  if (t != null)
    for (var e in Object(t))
      n.push(e);
  return n;
}
var Qf = Object.prototype, jf = Qf.hasOwnProperty;
function tc(t) {
  if (!tt(t))
    return Jf(t);
  var n = hi(t), e = [];
  for (var r in t)
    r == "constructor" && (n || !jf.call(t, r)) || e.push(r);
  return e;
}
function nc(t) {
  return Tt(t) ? mi(t, !0) : tc(t);
}
var ec = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, rc = /^\w*$/;
function be(t, n) {
  if (z(t))
    return !1;
  var e = typeof t;
  return e == "number" || e == "symbol" || e == "boolean" || t == null || $n(t) ? !0 : rc.test(t) || !ec.test(t) || n != null && t in Object(n);
}
var Lt = yt(Object, "create");
function ic() {
  this.__data__ = Lt ? Lt(null) : {}, this.size = 0;
}
function oc(t) {
  var n = this.has(t) && delete this.__data__[t];
  return this.size -= n ? 1 : 0, n;
}
var ac = "__lodash_hash_undefined__", sc = Object.prototype, uc = sc.hasOwnProperty;
function lc(t) {
  var n = this.__data__;
  if (Lt) {
    var e = n[t];
    return e === ac ? void 0 : e;
  }
  return uc.call(n, t) ? n[t] : void 0;
}
var fc = Object.prototype, cc = fc.hasOwnProperty;
function hc(t) {
  var n = this.__data__;
  return Lt ? n[t] !== void 0 : cc.call(n, t);
}
var pc = "__lodash_hash_undefined__";
function dc(t, n) {
  var e = this.__data__;
  return this.size += this.has(t) ? 0 : 1, e[t] = Lt && n === void 0 ? pc : n, this;
}
function dt(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
dt.prototype.clear = ic;
dt.prototype.delete = oc;
dt.prototype.get = lc;
dt.prototype.has = hc;
dt.prototype.set = dc;
function gc() {
  this.__data__ = [], this.size = 0;
}
function Pn(t, n) {
  for (var e = t.length; e--; )
    if (Sn(t[e][0], n))
      return e;
  return -1;
}
var yc = Array.prototype, _c = yc.splice;
function mc(t) {
  var n = this.__data__, e = Pn(n, t);
  if (e < 0)
    return !1;
  var r = n.length - 1;
  return e == r ? n.pop() : _c.call(n, e, 1), --this.size, !0;
}
function vc(t) {
  var n = this.__data__, e = Pn(n, t);
  return e < 0 ? void 0 : n[e][1];
}
function wc(t) {
  return Pn(this.__data__, t) > -1;
}
function bc(t, n) {
  var e = this.__data__, r = Pn(e, t);
  return r < 0 ? (++this.size, e.push([t, n])) : e[r][1] = n, this;
}
function et(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
et.prototype.clear = gc;
et.prototype.delete = mc;
et.prototype.get = vc;
et.prototype.has = wc;
et.prototype.set = bc;
var Dt = yt(nt, "Map");
function xc() {
  this.size = 0, this.__data__ = {
    hash: new dt(),
    map: new (Dt || et)(),
    string: new dt()
  };
}
function Mc(t) {
  var n = typeof t;
  return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
}
function En(t, n) {
  var e = t.__data__;
  return Mc(n) ? e[typeof n == "string" ? "string" : "hash"] : e.map;
}
function $c(t) {
  var n = En(this, t).delete(t);
  return this.size -= n ? 1 : 0, n;
}
function Ac(t) {
  return En(this, t).get(t);
}
function Tc(t) {
  return En(this, t).has(t);
}
function Sc(t, n) {
  var e = En(this, t), r = e.size;
  return e.set(t, n), this.size += e.size == r ? 0 : 1, this;
}
function rt(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
rt.prototype.clear = xc;
rt.prototype.delete = $c;
rt.prototype.get = Ac;
rt.prototype.has = Tc;
rt.prototype.set = Sc;
var Pc = "Expected a function";
function xe(t, n) {
  if (typeof t != "function" || n != null && typeof n != "function")
    throw new TypeError(Pc);
  var e = function() {
    var r = arguments, i = n ? n.apply(this, r) : r[0], o = e.cache;
    if (o.has(i))
      return o.get(i);
    var a = t.apply(this, r);
    return e.cache = o.set(i, a) || o, a;
  };
  return e.cache = new (xe.Cache || rt)(), e;
}
xe.Cache = rt;
var Ec = 500;
function Nc(t) {
  var n = xe(t, function(r) {
    return e.size === Ec && e.clear(), r;
  }), e = n.cache;
  return n;
}
var Oc = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, zc = /\\(\\)?/g, Cc = Nc(function(t) {
  var n = [];
  return t.charCodeAt(0) === 46 && n.push(""), t.replace(Oc, function(e, r, i, o) {
    n.push(i ? o.replace(zc, "$1") : r || e);
  }), n;
});
function Nn(t) {
  return t == null ? "" : fi(t);
}
function On(t, n) {
  return z(t) ? t : be(t, n) ? [t] : Cc(Nn(t));
}
function Ut(t) {
  if (typeof t == "string" || $n(t))
    return t;
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
function Me(t, n) {
  n = On(n, t);
  for (var e = 0, r = n.length; t != null && e < r; )
    t = t[Ut(n[e++])];
  return e && e == r ? t : void 0;
}
function kc(t, n, e) {
  var r = t == null ? void 0 : Me(t, n);
  return r === void 0 ? e : r;
}
function $e(t, n) {
  for (var e = -1, r = n.length, i = t.length; ++e < r; )
    t[i + e] = n[e];
  return t;
}
var dr = Y ? Y.isConcatSpreadable : void 0;
function Ic(t) {
  return z(t) || we(t) || !!(dr && t && t[dr]);
}
function Rc(t, n, e, r, i) {
  var o = -1, a = t.length;
  for (e || (e = Ic), i || (i = []); ++o < a; ) {
    var s = t[o];
    e(s) ? $e(i, s) : i[i.length] = s;
  }
  return i;
}
function Fc(t) {
  var n = t == null ? 0 : t.length;
  return n ? Rc(t) : [];
}
var Lc = vi(Object.getPrototypeOf, Object);
function Dc(t, n, e) {
  var r = -1, i = t.length;
  n < 0 && (n = -n > i ? 0 : i + n), e = e > i ? i : e, e < 0 && (e += i), i = n > e ? 0 : e - n >>> 0, n >>>= 0;
  for (var o = Array(i); ++r < i; )
    o[r] = t[r + n];
  return o;
}
function Hc(t, n, e) {
  var r = t.length;
  return e = e === void 0 ? r : e, Dc(t, n, e);
}
var qc = "\\ud800-\\udfff", Bc = "\\u0300-\\u036f", Xc = "\\ufe20-\\ufe2f", Uc = "\\u20d0-\\u20ff", Gc = Bc + Xc + Uc, Yc = "\\ufe0e\\ufe0f", Kc = "\\u200d", Vc = RegExp("[" + Kc + qc + Gc + Yc + "]");
function wi(t) {
  return Vc.test(t);
}
function Wc(t) {
  return t.split("");
}
var bi = "\\ud800-\\udfff", Zc = "\\u0300-\\u036f", Jc = "\\ufe20-\\ufe2f", Qc = "\\u20d0-\\u20ff", jc = Zc + Jc + Qc, th = "\\ufe0e\\ufe0f", nh = "[" + bi + "]", ie = "[" + jc + "]", oe = "\\ud83c[\\udffb-\\udfff]", eh = "(?:" + ie + "|" + oe + ")", xi = "[^" + bi + "]", Mi = "(?:\\ud83c[\\udde6-\\uddff]){2}", $i = "[\\ud800-\\udbff][\\udc00-\\udfff]", rh = "\\u200d", Ai = eh + "?", Ti = "[" + th + "]?", ih = "(?:" + rh + "(?:" + [xi, Mi, $i].join("|") + ")" + Ti + Ai + ")*", oh = Ti + Ai + ih, ah = "(?:" + [xi + ie + "?", ie, Mi, $i, nh].join("|") + ")", sh = RegExp(oe + "(?=" + oe + ")|" + ah + oh, "g");
function uh(t) {
  return t.match(sh) || [];
}
function lh(t) {
  return wi(t) ? uh(t) : Wc(t);
}
function fh(t) {
  return function(n) {
    n = Nn(n);
    var e = wi(n) ? lh(n) : void 0, r = e ? e[0] : n.charAt(0), i = e ? Hc(e, 1).join("") : n.slice(1);
    return r[t]() + i;
  };
}
var ch = fh("toUpperCase");
function hh(t) {
  return ch(Nn(t).toLowerCase());
}
function ph() {
  this.__data__ = new et(), this.size = 0;
}
function dh(t) {
  var n = this.__data__, e = n.delete(t);
  return this.size = n.size, e;
}
function gh(t) {
  return this.__data__.get(t);
}
function yh(t) {
  return this.__data__.has(t);
}
var _h = 200;
function mh(t, n) {
  var e = this.__data__;
  if (e instanceof et) {
    var r = e.__data__;
    if (!Dt || r.length < _h - 1)
      return r.push([t, n]), this.size = ++e.size, this;
    e = this.__data__ = new rt(r);
  }
  return e.set(t, n), this.size = e.size, this;
}
function J(t) {
  var n = this.__data__ = new et(t);
  this.size = n.size;
}
J.prototype.clear = ph;
J.prototype.delete = dh;
J.prototype.get = gh;
J.prototype.has = yh;
J.prototype.set = mh;
function Ae(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = 0, o = []; ++e < r; ) {
    var a = t[e];
    n(a, e, t) && (o[i++] = a);
  }
  return o;
}
function Si() {
  return [];
}
var vh = Object.prototype, wh = vh.propertyIsEnumerable, gr = Object.getOwnPropertySymbols, Pi = gr ? function(t) {
  return t == null ? [] : (t = Object(t), Ae(gr(t), function(n) {
    return wh.call(t, n);
  }));
} : Si, bh = Object.getOwnPropertySymbols, xh = bh ? function(t) {
  for (var n = []; t; )
    $e(n, Pi(t)), t = Lc(t);
  return n;
} : Si;
function Ei(t, n, e) {
  var r = n(t);
  return z(t) ? r : $e(r, e(t));
}
function yr(t) {
  return Ei(t, Xt, Pi);
}
function Mh(t) {
  return Ei(t, nc, xh);
}
var ae = yt(nt, "DataView"), se = yt(nt, "Promise"), ue = yt(nt, "Set"), _r = "[object Map]", $h = "[object Object]", mr = "[object Promise]", vr = "[object Set]", wr = "[object WeakMap]", br = "[object DataView]", Ah = gt(ae), Th = gt(Dt), Sh = gt(se), Ph = gt(ue), Eh = gt(ee), Z = $t;
(ae && Z(new ae(new ArrayBuffer(1))) != br || Dt && Z(new Dt()) != _r || se && Z(se.resolve()) != mr || ue && Z(new ue()) != vr || ee && Z(new ee()) != wr) && (Z = function(t) {
  var n = $t(t), e = n == $h ? t.constructor : void 0, r = e ? gt(e) : "";
  if (r)
    switch (r) {
      case Ah:
        return br;
      case Th:
        return _r;
      case Sh:
        return mr;
      case Ph:
        return vr;
      case Eh:
        return wr;
    }
  return n;
});
var xr = nt.Uint8Array, Nh = "__lodash_hash_undefined__";
function Oh(t) {
  return this.__data__.set(t, Nh), this;
}
function zh(t) {
  return this.__data__.has(t);
}
function _n(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.__data__ = new rt(); ++n < e; )
    this.add(t[n]);
}
_n.prototype.add = _n.prototype.push = Oh;
_n.prototype.has = zh;
function Ch(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length; ++e < r; )
    if (n(t[e], e, t))
      return !0;
  return !1;
}
function kh(t, n) {
  return t.has(n);
}
var Ih = 1, Rh = 2;
function Ni(t, n, e, r, i, o) {
  var a = e & Ih, s = t.length, l = n.length;
  if (s != l && !(a && l > s))
    return !1;
  var u = o.get(t), f = o.get(n);
  if (u && f)
    return u == n && f == t;
  var h = -1, c = !0, d = e & Rh ? new _n() : void 0;
  for (o.set(t, n), o.set(n, t); ++h < s; ) {
    var p = t[h], _ = n[h];
    if (r)
      var b = a ? r(_, p, h, n, t, o) : r(p, _, h, t, n, o);
    if (b !== void 0) {
      if (b)
        continue;
      c = !1;
      break;
    }
    if (d) {
      if (!Ch(n, function(y, x) {
        if (!kh(d, x) && (p === y || i(p, y, e, r, o)))
          return d.push(x);
      })) {
        c = !1;
        break;
      }
    } else if (!(p === _ || i(p, _, e, r, o))) {
      c = !1;
      break;
    }
  }
  return o.delete(t), o.delete(n), c;
}
function Oi(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r, i) {
    e[++n] = [i, r];
  }), e;
}
function Fh(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r) {
    e[++n] = r;
  }), e;
}
var Lh = 1, Dh = 2, Hh = "[object Boolean]", qh = "[object Date]", Bh = "[object Error]", Xh = "[object Map]", Uh = "[object Number]", Gh = "[object RegExp]", Yh = "[object Set]", Kh = "[object String]", Vh = "[object Symbol]", Wh = "[object ArrayBuffer]", Zh = "[object DataView]", Mr = Y ? Y.prototype : void 0, qn = Mr ? Mr.valueOf : void 0;
function Jh(t, n, e, r, i, o, a) {
  switch (e) {
    case Zh:
      if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
        return !1;
      t = t.buffer, n = n.buffer;
    case Wh:
      return !(t.byteLength != n.byteLength || !o(new xr(t), new xr(n)));
    case Hh:
    case qh:
    case Uh:
      return Sn(+t, +n);
    case Bh:
      return t.name == n.name && t.message == n.message;
    case Gh:
    case Kh:
      return t == n + "";
    case Xh:
      var s = Oi;
    case Yh:
      var l = r & Lh;
      if (s || (s = Fh), t.size != n.size && !l)
        return !1;
      var u = a.get(t);
      if (u)
        return u == n;
      r |= Dh, a.set(t, n);
      var f = Ni(s(t), s(n), r, i, o, a);
      return a.delete(t), f;
    case Vh:
      if (qn)
        return qn.call(t) == qn.call(n);
  }
  return !1;
}
var Qh = 1, jh = Object.prototype, tp = jh.hasOwnProperty;
function np(t, n, e, r, i, o) {
  var a = e & Qh, s = yr(t), l = s.length, u = yr(n), f = u.length;
  if (l != f && !a)
    return !1;
  for (var h = l; h--; ) {
    var c = s[h];
    if (!(a ? c in n : tp.call(n, c)))
      return !1;
  }
  var d = o.get(t), p = o.get(n);
  if (d && p)
    return d == n && p == t;
  var _ = !0;
  o.set(t, n), o.set(n, t);
  for (var b = a; ++h < l; ) {
    c = s[h];
    var y = t[c], x = n[c];
    if (r)
      var $ = a ? r(x, y, c, n, t, o) : r(y, x, c, t, n, o);
    if (!($ === void 0 ? y === x || i(y, x, e, r, o) : $)) {
      _ = !1;
      break;
    }
    b || (b = c == "constructor");
  }
  if (_ && !b) {
    var g = t.constructor, v = n.constructor;
    g != v && "constructor" in t && "constructor" in n && !(typeof g == "function" && g instanceof g && typeof v == "function" && v instanceof v) && (_ = !1);
  }
  return o.delete(t), o.delete(n), _;
}
var ep = 1, $r = "[object Arguments]", Ar = "[object Array]", Qt = "[object Object]", rp = Object.prototype, Tr = rp.hasOwnProperty;
function ip(t, n, e, r, i, o) {
  var a = z(t), s = z(n), l = a ? Ar : Z(t), u = s ? Ar : Z(n);
  l = l == $r ? Qt : l, u = u == $r ? Qt : u;
  var f = l == Qt, h = u == Qt, c = l == u;
  if (c && re(t)) {
    if (!re(n))
      return !1;
    a = !0, f = !1;
  }
  if (c && !f)
    return o || (o = new J()), a || _i(t) ? Ni(t, n, e, r, i, o) : Jh(t, n, l, e, r, i, o);
  if (!(e & ep)) {
    var d = f && Tr.call(t, "__wrapped__"), p = h && Tr.call(n, "__wrapped__");
    if (d || p) {
      var _ = d ? t.value() : t, b = p ? n.value() : n;
      return o || (o = new J()), i(_, b, e, r, o);
    }
  }
  return c ? (o || (o = new J()), np(t, n, e, r, i, o)) : !1;
}
function Te(t, n, e, r, i) {
  return t === n ? !0 : t == null || n == null || !pt(t) && !pt(n) ? t !== t && n !== n : ip(t, n, e, r, Te, i);
}
var op = 1, ap = 2;
function sp(t, n, e, r) {
  var i = e.length, o = i;
  if (t == null)
    return !o;
  for (t = Object(t); i--; ) {
    var a = e[i];
    if (a[2] ? a[1] !== t[a[0]] : !(a[0] in t))
      return !1;
  }
  for (; ++i < o; ) {
    a = e[i];
    var s = a[0], l = t[s], u = a[1];
    if (a[2]) {
      if (l === void 0 && !(s in t))
        return !1;
    } else {
      var f = new J(), h;
      if (!(h === void 0 ? Te(u, l, op | ap, r, f) : h))
        return !1;
    }
  }
  return !0;
}
function zi(t) {
  return t === t && !tt(t);
}
function up(t) {
  for (var n = Xt(t), e = n.length; e--; ) {
    var r = n[e], i = t[r];
    n[e] = [r, i, zi(i)];
  }
  return n;
}
function Ci(t, n) {
  return function(e) {
    return e == null ? !1 : e[t] === n && (n !== void 0 || t in Object(e));
  };
}
function lp(t) {
  var n = up(t);
  return n.length == 1 && n[0][2] ? Ci(n[0][0], n[0][1]) : function(e) {
    return e === t || sp(e, t, n);
  };
}
function fp(t, n) {
  return t != null && n in Object(t);
}
function ki(t, n, e) {
  n = On(n, t);
  for (var r = -1, i = n.length, o = !1; ++r < i; ) {
    var a = Ut(n[r]);
    if (!(o = t != null && e(t, a)))
      break;
    t = t[a];
  }
  return o || ++r != i ? o : (i = t == null ? 0 : t.length, !!i && ve(i) && Tn(a, i) && (z(t) || we(t)));
}
function cp(t, n) {
  return t != null && ki(t, n, fp);
}
var hp = 1, pp = 2;
function dp(t, n) {
  return be(t) && zi(n) ? Ci(Ut(t), n) : function(e) {
    var r = kc(e, t);
    return r === void 0 && r === n ? cp(e, t) : Te(n, r, hp | pp);
  };
}
function Ii(t) {
  return function(n) {
    return n == null ? void 0 : n[t];
  };
}
function gp(t) {
  return function(n) {
    return Me(n, t);
  };
}
function yp(t) {
  return be(t) ? Ii(Ut(t)) : gp(t);
}
function Se(t) {
  return typeof t == "function" ? t : t == null ? An : typeof t == "object" ? z(t) ? dp(t[0], t[1]) : lp(t) : yp(t);
}
function _p(t) {
  return function(n, e, r) {
    for (var i = -1, o = Object(n), a = r(n), s = a.length; s--; ) {
      var l = a[++i];
      if (e(o[l], l, o) === !1)
        break;
    }
    return n;
  };
}
var mp = _p();
function vp(t, n) {
  return t && mp(t, n, Xt);
}
function wp(t, n) {
  return function(e, r) {
    if (e == null)
      return e;
    if (!Tt(e))
      return t(e, r);
    for (var i = e.length, o = -1, a = Object(e); ++o < i && r(a[o], o, a) !== !1; )
      ;
    return e;
  };
}
var Pe = wp(vp);
function bp(t) {
  return pt(t) && Tt(t);
}
function xp(t) {
  return typeof t == "function" ? t : An;
}
function Ri(t, n) {
  var e = z(t) ? jl : Pe;
  return e(t, xp(n));
}
function Mp(t, n) {
  return At(n, function(e) {
    return [e, t[e]];
  });
}
function $p(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r) {
    e[++n] = [r, r];
  }), e;
}
var Ap = "[object Map]", Tp = "[object Set]";
function Sp(t) {
  return function(n) {
    var e = Z(n);
    return e == Ap ? Oi(n) : e == Tp ? $p(n) : Mp(n, t(n));
  };
}
var Fi = Sp(Xt);
function Pp(t, n) {
  var e = [];
  return Pe(t, function(r, i, o) {
    n(r, i, o) && e.push(r);
  }), e;
}
function Ep(t, n) {
  var e = z(t) ? Ae : Pp;
  return e(t, Se(n));
}
function Np(t, n) {
  var e = -1, r = Tt(t) ? Array(t.length) : [];
  return Pe(t, function(i, o, a) {
    r[++e] = n(i, o, a);
  }), r;
}
function Ht(t, n) {
  var e = z(t) ? At : Np;
  return e(t, Se(n));
}
var Op = Object.prototype, zp = Op.hasOwnProperty;
function Cp(t, n) {
  return t != null && zp.call(t, n);
}
function Li(t, n) {
  return t != null && ki(t, n, Cp);
}
function kp(t, n) {
  return At(n, function(e) {
    return t[e];
  });
}
function Ip(t) {
  return t == null ? [] : kp(t, Xt(t));
}
function Rp(t, n, e, r) {
  if (!tt(t))
    return t;
  n = On(n, t);
  for (var i = -1, o = n.length, a = o - 1, s = t; s != null && ++i < o; ) {
    var l = Ut(n[i]), u = e;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return t;
    if (i != a) {
      var f = s[l];
      u = void 0, u === void 0 && (u = tt(f) ? f : Tn(n[i + 1]) ? [] : {});
    }
    af(s, l, u), s = s[l];
  }
  return t;
}
function Fp(t, n, e) {
  for (var r = -1, i = n.length, o = {}; ++r < i; ) {
    var a = n[r], s = Me(t, a);
    e(s, a) && Rp(o, On(a, t), s);
  }
  return o;
}
function Lp(t, n) {
  if (t == null)
    return {};
  var e = At(Mh(t), function(r) {
    return [r];
  });
  return n = Se(n), Fp(t, e, function(r, i) {
    return n(r, i[0]);
  });
}
var Dp = Math.floor, Hp = Math.random;
function qp(t, n) {
  return t + Dp(Hp() * (n - t + 1));
}
var Bp = Math.ceil, Xp = Math.max;
function Up(t, n, e, r) {
  for (var i = -1, o = Xp(Bp((n - t) / (e || 1)), 0), a = Array(o); o--; )
    a[++i] = t, t += e;
  return a;
}
function Gp(t) {
  return function(n, e, r) {
    return r && typeof r != "number" && ff(n, e, r) && (e = r = void 0), n = Ln(n), e === void 0 ? (e = n, n = 0) : e = Ln(e), r = r === void 0 ? n < e ? 1 : -1 : Ln(r), Up(n, e, r);
  };
}
var Ee = Gp();
function Yp() {
  var t = arguments, n = Nn(t[0]);
  return t.length < 3 ? n : n.replace(t[1], t[2]);
}
function Di(t, n) {
  var e = -1, r = t.length, i = r - 1;
  for (n = n === void 0 ? r : n; ++e < n; ) {
    var o = qp(e, i), a = t[o];
    t[o] = t[e], t[e] = a;
  }
  return t.length = n, t;
}
function Kp(t) {
  return Di(Gl(t));
}
function Vp(t) {
  return Di(Ip(t));
}
function Sr(t) {
  var n = z(t) ? Kp : Vp;
  return n(t);
}
var Wp = Math.max;
function Zp(t) {
  if (!(t && t.length))
    return [];
  var n = 0;
  return t = Ae(t, function(e) {
    if (bp(e))
      return n = Wp(e.length, n), !0;
  }), pi(n, function(e) {
    return At(t, Ii(e));
  });
}
var mn = uf(Zp);
const Jp = (t, n, e = 12, r = 12) => {
  const i = j().domain([0, e]).range([0, t]), o = j().domain([0, r]).range([0, n]);
  return {
    points: function() {
      return Ee((e + 1) * (r + 1)).map(function(l) {
        return { m: l % (e + 1), n: Math.floor(l / (e + 1)), x: i(l % (e + 1)), y: o(Math.floor(l / (e + 1))) };
      });
    },
    position: function(l, u) {
      typeof l == "number" && (l = [l]), typeof u == "number" && (u = [u]);
      const f = Fc(Ht(u, function(h) {
        return Ht(
          l,
          function(c) {
            return { x: i(c), y: o(h) };
          }
        );
      }));
      return f.length == 1 ? f[0] : f;
    }
  };
}, Qp = "_widget_18g36_1", jp = "_label_18g36_19", td = "_lit_18g36_24", nd = "_button_18g36_29", ed = "_symbol_18g36_29", rd = "_radio_18g36_29", id = "_radiobutton_18g36_29", od = "_selected_18g36_35", ad = "_toggle_18g36_35", sd = "_slider_18g36_44", ud = "_track_18g36_44", ld = "_track_overlay_18g36_48", fd = "_handle_18g36_55", m = {
  widget: Qp,
  label: jp,
  lit: td,
  button: nd,
  symbol: ed,
  radio: rd,
  radiobutton: id,
  selected: od,
  toggle: ad,
  slider: sd,
  track: ud,
  track_overlay: ld,
  handle: fd
}, Hi = () => {
  const n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890", e = n.length;
  let r = "";
  for (let i = 0; i < 10; ++i)
    r += n[Math.floor(Math.random() * e)];
  return r;
}, Ne = (t, n, e) => {
  var r, i, o, a;
  switch (e) {
    case "top":
      r = 0, i = -n / 2 - 5, o = "middle", a = "bottom";
      break;
    case "bottom":
      r = 0, i = n / 2 + 5, o = "middle", a = "hanging";
      break;
    case "left":
      r = -t / 2 - 5, i = 0, o = "end", a = "middle";
      break;
    case "right":
      r = t / 2 + 5, i = 0, o = "start", a = "middle";
      break;
    default:
      r = 0, i = n / 2 + 5, o = "middle", a = "hanging";
  }
  return { x: r, y: i, anchor: o, valign: a };
}, cd = (t = 1) => {
  const n = B();
  return n.moveTo(t * 1, t * 0), n.lineTo(t * -0.5, t * (Math.sqrt(3) / 2)), n.lineTo(t * -0.5, t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, hd = (t = 1) => {
  const n = B(), e = 0.7;
  return n.moveTo(e * t * (1 + 0.75), e * t * 0), n.lineTo(e * t * (-0.5 + 0.75), e * t * (Math.sqrt(3) / 2)), n.lineTo(e * t * (-0.5 + 0.75), e * t * (-Math.sqrt(3) / 2)), n.closePath(), n.moveTo(e * t * (1 - 0.75), e * t * 0), n.lineTo(e * t * (-0.5 - 0.75), e * t * (Math.sqrt(3) / 2)), n.lineTo(e * t * (-0.5 - 0.75), e * t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, pd = (t = 1) => {
  const n = B();
  return n.moveTo(-t * 1, t * 0), n.lineTo(t * 0.5, t * (Math.sqrt(3) / 2)), n.lineTo(t * 0.5, t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, dd = (t = 1) => {
  const n = 0.3333333333333333, e = 0.9;
  var r = B();
  return r.moveTo(t * e, t * e), r.lineTo(t * e, t * -0.9), r.lineTo(t * (e * n), t * -0.9), r.lineTo(t * (e * n), t * e), r.closePath(), r.moveTo(-t * e, t * e), r.lineTo(-t * e, t * -0.9), r.lineTo(-t * (e * n), t * -0.9), r.lineTo(-t * (e * n), t * e), r.closePath(), r.toString();
}, gd = (t = 1) => {
  const n = B(), e = Math.PI / 2.5, r = e / 2, i = 2 * Math.PI - e / 2, o = 0.5, a = 0.6, s = 0.6, l = [t * (1 - o / 2) * Math.cos(i), t * (1 - o / 2) * Math.sin(i)], u = [t * s * Math.cos(i + Math.PI / 2), t * s * Math.sin(i + Math.PI / 2)];
  return n.moveTo(t * Math.cos(i), t * Math.sin(i)), n.arc(0, 0, t, i, r, !0), n.lineTo(t * (1 - o) * Math.cos(r), t * (1 - o) * Math.sin(r)), n.arc(0, 0, t * (1 - o), r, i, !1), n.lineTo(t * (1 - a - o / 2) * Math.cos(i), t * (1 - a - o / 2) * Math.sin(i)), n.lineTo(l[0] + u[0], l[1] + u[1]), n.lineTo(t * (1 + a - o / 2) * Math.cos(i), t * (1 + a - o / 2) * Math.sin(i)), n.closePath(), n.toString();
}, yd = (t = 1) => {
  const n = B(), e = Math.PI / 10, r = t / 2, i = Math.PI - e, o = e, a = -e, s = Math.PI + e;
  return n.arc(0, 0, r, s, a), n.lineTo(t, r * Math.sin(s)), n.lineTo(t, -t), n.lineTo(-t, -t), n.lineTo(-t, r * Math.sin(s)), n.closePath(), n.arc(0, 0, r, o, i), n.lineTo(-t, r * Math.sin(i)), n.lineTo(-t, t), n.lineTo(t, t), n.lineTo(t, r * Math.sin(i)), n.closePath(), n.toString();
}, _d = (t = 1) => {
  const n = B(), e = Math.PI / 2.5, r = e / 2 + Math.PI, i = 2 * Math.PI - e / 2 + Math.PI, o = 0.5, a = 0.6, s = -0.6;
  n.moveTo(t * Math.cos(r), t * Math.sin(r)), n.arc(0, 0, t, r, i, !1), n.lineTo(t * (1 - o) * Math.cos(i), t * (1 - o) * Math.sin(i)), n.arc(0, 0, t * (1 - o), i, r, !0), n.lineTo(t * (1 - a - o / 2) * Math.cos(r), t * (1 - a - o / 2) * Math.sin(r));
  var l = [t * (1 - o / 2) * Math.cos(r), t * (1 - o / 2) * Math.sin(r)], u = [t * s * Math.cos(r + Math.PI / 2), t * s * Math.sin(r + Math.PI / 2)];
  return n.lineTo(l[0] + u[0], l[1] + u[1]), n.lineTo(t * (1 + a - o / 2) * Math.cos(r), t * (1 + a - o / 2) * Math.sin(r)), n.closePath(), n.toString();
}, md = (t = 1) => {
  var n = B(), e = 0.9;
  return n.moveTo(t * e, t * e), n.lineTo(t * -0.9, t * e), n.lineTo(t * -0.9, t * -0.9), n.lineTo(t * e, t * -0.9), n.closePath(), n.toString();
}, vd = (t = 1) => {
  const n = B(), e = 0, r = 2 * Math.PI;
  return n.moveTo(t * Math.cos(e), t * Math.sin(e)), n.arc(0, 0, t, e, r, !0), n.closePath(), n.toString();
}, le = (t) => {
  switch (t) {
    case "play":
      return cd;
    case "forward":
      return hd;
    case "back":
      return pd;
    case "pause":
      return dd;
    case "reload":
      return gd;
    case "capture":
      return yd;
    case "rewind":
      return _d;
    case "stop":
      return md;
    case "push":
      return vd;
  }
}, Oe = () => {
  const t = "button";
  var n = Hi(), e = 50, r = 0.3, i = "round", o = { x: 0, y: 0 }, a = null, s = "bottom", l = null, u = function(p) {
  }, f = ["play"], h = 0;
  return {
    type: t,
    id: function(p) {
      return typeof p > "u" ? n : (n = p, this);
    },
    size: function(p) {
      return typeof p > "u" ? e : (e = p, this);
    },
    symbolsize: function(p) {
      return typeof p > "u" ? r : (r = p, this);
    },
    shape: function(p) {
      return typeof p > "u" ? i : (i = p, this);
    },
    position: function(p) {
      return typeof p > "u" ? o : (o = p, this);
    },
    x: function(p) {
      return typeof p > "u" ? o.x : (o.x = p, this);
    },
    y: function(p) {
      return typeof p > "u" ? o.y : (o.y = p, this);
    },
    label: function(p) {
      return typeof p > "u" ? a : (a = p, this);
    },
    labelposition: function(p) {
      return typeof p > "u" ? s : (s = p, this);
    },
    fontsize: function(p) {
      return typeof p > "u" ? l : (l = p, this);
    },
    update: function(p) {
      if (typeof p == "function")
        return u = p, this;
      u(p);
    },
    actions: function(p) {
      return typeof p > "u" ? f : (f = p, this);
    },
    value: function(p) {
      return typeof p > "u" ? h : (h = p, this);
    },
    click: function() {
      h = (h + 1) % f.length, u(), P(this.parentNode).select("." + m.symbol).attr("d", le(f[h])(r * e));
    },
    press: function(p) {
      h = (h + 1) % f.length, u(), p.select("#button_" + n).select("." + m.symbol).attr("d", le(f[h])(r * e));
    }
  };
}, wd = () => {
  const t = "slider", n = Mn(".3f");
  var e = Hi(), r = 100, i = 8, o = 10, a = !1, s = { x: 0, y: 0 }, l = "top-left", u = null, f = function(y) {
  }, h = function(y) {
  }, c = [0, 1], d = 0, p = null, _ = j().domain(c).range([0, r]).clamp(!0);
  const b = function(y, x, $ = c) {
    const g = y.select("#slider_" + e);
    _.domain($), d = x, g.selectAll("." + m.handle).transition().attr("cx", _(x)), a && g.select("." + m.label).text(p + " = " + n(d)), f(), h();
  };
  return {
    type: t,
    scale: _,
    id: function(y) {
      return typeof y > "u" ? e : (e = y, this);
    },
    label: function(y) {
      return typeof y > "u" ? p : (p = y, this);
    },
    size: function(y) {
      return typeof y > "u" ? r : (r = y, this);
    },
    girth: function(y) {
      return typeof y > "u" ? i : (i = y, this);
    },
    knob: function(y) {
      return typeof y > "u" ? o : (o = y, this);
    },
    show: function(y) {
      return typeof y > "u" ? a : (a = y, this);
    },
    position: function(y) {
      return typeof y > "u" ? s : (s = y, this);
    },
    x: function(y) {
      return typeof y > "u" ? s.x : (s.x = y, this);
    },
    y: function(y) {
      return typeof y > "u" ? s.y : (s.y = y, this);
    },
    labelposition: function(y) {
      return typeof y > "u" ? l : (l = y, this);
    },
    fontsize: function(y) {
      return typeof y > "u" ? u : (u = y, this);
    },
    update: function(y) {
      if (typeof y == "function")
        return f = y, this;
      f(y);
    },
    update_end: function(y) {
      if (typeof y == "function")
        return h = y, this;
      h(y);
    },
    range: function(y) {
      return typeof y > "u" ? c : (c = y, this);
    },
    value: function(y) {
      return typeof y > "u" ? d : (d = y, this);
    },
    reset: b,
    click: b
  };
}, bd = (t, n) => {
  const e = "button_" + t.id(), r = t.label(), i = t.labelposition(), o = document.createElementNS("http://www.w3.org/2000/svg", "g"), a = P(o).attr("class", m.widget + " " + m.button).attr("id", e).attr("transform", "translate(" + t.x() + "," + t.y() + ")");
  var s;
  if (t.shape() == "rect" ? s = a.append("rect").attr("width", t.size()).attr("height", t.size()).attr("transform", "translate(" + -t.size() / 2 + "," + -t.size() / 2 + ")").attr("rx", 5).attr("ry", 5) : s = a.append("circle").attr("r", t.size() / 2), s.attr("class", m.background).on("click", t.click).on("mouseover", function() {
    P(this).classed(m.lit, !0), P(this.parentNode).select("." + m.symbol).classed(m.lit, !0);
  }).on("mouseout", function() {
    P(this).classed(m.lit, !1), P(this.parentNode).select("." + m.symbol).classed(m.lit, !1);
  }), a.append("path").attr("d", le(t.actions()[t.value()])(t.symbolsize() * t.size())).attr("class", m.symbol), r) {
    const l = Ne(t.size(), t.size(), i);
    a.append("text").text(r).attr("class", m.label).style("text-anchor", l.anchor).style("font-size", t.fontsize()).style("alignment-baseline", l.valign).attr("transform", "translate(" + l.x + "," + l.y + ")");
  }
  return o;
}, qi = (t, n) => {
  const e = B();
  return e.moveTo(0, n / 2), e.arc(0, 0, n / 2, Math.PI / 2, 3 * Math.PI / 2, !1), e.lineTo(t, -n / 2), e.arc(t, 0, n / 2, 3 * Math.PI / 2, 2 * Math.PI + Math.PI / 2, !1), e.closePath(), e.toString();
}, xd = (t, n) => {
  const e = Mn(".3f"), r = "slider_" + t.id();
  t.labelposition();
  const i = t.range, o = t.size();
  t.label();
  const a = t.scale;
  var s;
  const l = document.createElementNS("http://www.w3.org/2000/svg", "g");
  s = P(l).attr("class", m.widget + " " + m.slider).attr("id", r).attr("transform", "translate(" + t.x() + "," + t.y() + ")"), a.domain(i()).range([0, o]).clamp(!0);
  const u = t.knob() > t.girth() ? t.knob() : t.girth() / 2;
  s.append("path").attr("d", qi(t.size(), t.girth())).attr("class", m.track), s.append("circle").attr("class", m.handle).attr("r", t.knob()).attr("cx", a(t.value())), s.append("rect").attr("width", t.size() + 2 * u).attr("height", 2 * u).attr("transform", "translate(" + -u + "," + -u + ")").attr("class", m.track_overlay).on("click", function(p) {
    const _ = Gn(p, this)[0];
    t.value(a.invert(_)), t.update(), t.update_end(), s.selectAll("." + m.handle).attr("cx", a(t.value())), t.show() && s.select("." + m.label).text(t.label() + " = " + e(t.value()));
  }).call(
    Ja().on("drag", function(p) {
      t.value(a.invert(p.x)), t.update(), s.selectAll("." + m.handle).attr("cx", a(t.value())), t.show() && s.select("." + m.label).text(t.label() + " = " + e(t.value()));
    }).on("end", function(p) {
      t.update_end();
    })
  );
  var f, h, c, d = "bottom";
  return t.fontsize && (h = t.labelposition().match(/bottom/i) != null ? Yt([t.girth() / 2, t.knob()]) + t.fontsize() / 2 : -Yt([t.girth() / 2, t.knob()]) - t.fontsize() / 2), h = t.labelposition().match(/bottom/i) != null ? Yt([t.girth() / 2, t.knob()]) + 7 : -Yt([t.girth() / 2, t.knob()]) - 7, f = t.labelposition().match(/right/i) != null ? t.size() : t.labelposition().match(/center/i) != null ? t.size() / 2 : 0, c = t.labelposition().match(/right/i) != null ? "end" : t.labelposition().match(/center/i) != null ? "middle" : "start", d = t.labelposition().match(/bottom/i) != null ? "hanging" : "top", s.append("text").text(t.show() ? t.label() + " = " + e(t.value()) : t.label()).attr("class", m.label).style("text-anchor", c).style("alignment-baseline", d).style("font-size", t.fontsize()).style("opacity", 1).attr("transform", "translate(" + f + "," + h + ")"), l;
}, Md = (t, n) => {
  const e = "toggle_" + t.id(), r = t.size(), i = t.label(), o = t.labelposition(), a = document.createElementNS("http://www.w3.org/2000/svg", "g"), s = P(a).attr("class", m.widget + " " + m.toggle).attr("id", e).attr("transform", "translate(" + (t.x() - r) + "," + t.y() + ")").classed(m.selected, t.value() == 1);
  if (s.append("path").attr("d", qi(2 * t.size(), 2 * t.size())).attr("class", m.track), s.append("circle").attr("class", m.handle).attr("r", r).attr("cx", t.value() ? 2 * r : 0), s.append("rect").attr("width", 4 * t.size()).attr("height", 2 * t.size()).attr("class", m.track_overlay).attr("transform", "translate(" + -t.size() + "," + -t.size() + ")").on("click", t.click), i) {
    const l = Ne(4 * t.size(), 2 * t.size(), o);
    s.append("text").text(i).attr("class", m.label).style("text-anchor", l.anchor).style("font-size", t.fontsize()).style("alignment-baseline", l.valign).attr("transform", "translate(" + (l.x + r) + "," + l.y + ")");
  }
  return a;
}, $d = (t, n) => {
  const e = "radio_" + t.id(), r = t.labelposition(), i = t.buttonsize(), o = t.buttonsize() * (1 - t.buttonpadding()), a = t.choices().length, s = ao(a), l = j().domain([0, a - 1]).range([0, t.size()]), u = j().domain([0, a - 1]).range([0, t.size()]), f = document.createElementNS("http://www.w3.org/2000/svg", "g"), c = P(f).attr("class", m.widget + " " + m.radio).attr("id", e).attr("transform", "translate(" + t.x() + "," + t.y() + ")").selectAll("." + m.radiobutton).data(s).enter().append("g").attr("class", m.radiobutton).attr("id", (b) => "b" + b).attr("transform", (b) => t.orientation() == "vertical" ? "translate(0," + u(b) + ")" : "translate(" + l(b) + ",0)");
  var d, p;
  t.shape() == "rect" ? (d = c.append("rect").attr("width", i).attr("height", i).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -i / 2 + "," + -i / 2 + ")"), p = c.append("rect").attr("width", o).attr("height", o).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -o / 2 + "," + -o / 2 + ")")) : (d = c.append("circle").attr("r", i / 2), p = c.append("circle").attr("r", o / 2)), d.attr("class", m.background).on("mouseover", function() {
    P(this).classed(m.lit, !0), P(this.parentNode).select("." + m.symbol).classed(m.lit, !0);
  }).on("mouseout", function() {
    P(this).classed(m.lit, !1), P(this.parentNode).select("." + m.symbol).classed(m.lit, !1);
  }), p.attr("class", m.symbol), p.filter((b) => b == t.value()).classed(m.selected, !0), c.on("click", t.click);
  const _ = Ne(t.buttonsize(), t.buttonsize(), r);
  return c.append("text").attr("class", m.label).text(function(b, y) {
    return t.choices()[y];
  }).attr("alignment-baseline", _.valign).attr("transform", "translate(" + _.x + "," + _.y + ")").style("font-size", t.fontsize()).attr("text-anchor", _.anchor), f;
}, Pr = (t, n) => {
  switch (t.type) {
    case "button":
      return bd(t);
    case "slider":
      return xd(t);
    case "radio":
      return $d(t);
    case "toggle":
      return Md(t);
  }
}, Ad = (t, n) => {
  const e = Jp(
    n.controls_size.width,
    n.controls_size.height,
    n.controls_grid.nx,
    n.controls_grid.ny
  ), r = P("#" + t).classed(n.id + " " + n.container_class, !0), i = r.append("div").attr("id", "display").attr("class", "display-panel").classed(n.display_class, !0).classed(n.debug_lattice, n.debug).append(n.display_type).attr("width", n.display_type == "canvas" ? n.display_size.width : null).attr("height", n.display_type == "canvas" ? n.display_size.height : null).attr("viewBox", n.display_type == "canvas" ? null : "0 0 " + n.display_size.width + " " + n.display_size.height).style("width", "100%"), o = r.append("div").attr("id", "controls").attr("class", "control-panel").classed(n.controls_class, !0).classed(n.debug_lattice, n.debug).append("svg").attr("viewBox", "0 0 " + n.controls_size.width + " " + n.controls_size.height);
  return typeof n.controls_border == "string" && n.controls_border.length > 0 && o.style("border", n.controls_border), typeof n.display_border == "string" && n.display_border.length > 0 && i.style("border", n.display_border), n.debug && o.selectAll(null).data(e.points).enter().append("circle").attr("r", 2).attr("transform", (a) => "translate(" + a.x + "," + a.y + ")").style("fill", "black"), { display: i, controls: o, grid: e };
}, S = {
  widgets: {
    slider_size: 400,
    slider_gap: 2,
    slider_girth: 14,
    slider_knob: 16,
    slider_anchor: { x: 1, y: 6 },
    playbutton_size: 120,
    button_size: 70,
    playbutton_anchor: { x: 3, y: 2 },
    backbutton_anchor: { x: 10, y: 2 },
    resetbutton_anchor: { x: 7, y: 2 }
  },
  simulation: {
    delay: 10,
    tree_color: "green",
    empty_color: "black"
  }
}, C = {
  N: 100,
  initial_trees: 0.01,
  burntime: 10,
  vegetation_growth_rate: {
    range: [0, 0.1],
    default: 0.05
  },
  lightning_rate: {
    range: [0, 1],
    default: 0.25
  },
  ignition_probability: {
    range: [0, 1],
    default: 0.5
  }
}, Td = (t) => Ht(
  Fi(t),
  (n) => {
    n[1].id = n[0], Li(n[1], "label") || (n[1].label = Yp(hh(n[0]), /_/g, " "));
  }
), Sd = (t) => Ht(Fi(t), (n) => n[1]), Pd = (t, n) => Ri(t, (e, r) => e.widget = n[r]), Ed = (t) => Lp(t, (n) => Li(n, "range")), ze = Ed(C);
Td(ze);
const Bi = Sd(ze), rn = Ht(
  Bi,
  (t) => wd().id(t.id).label(t.label).range(t.range).value(t.default).size(S.widgets.slider_size).girth(S.widgets.slider_girth).knob(S.widgets.slider_knob)
);
Pd(Bi, rn);
const ot = Oe().actions(["play", "pause"]), zn = Oe().actions(["back"]), Cn = Oe().actions(["rewind"]), Nd = [ot, zn, Cn], Od = (t, n) => {
  const e = n.position(S.widgets.slider_anchor.x, Ee(rn.length).map((r) => S.widgets.slider_anchor.y + S.widgets.slider_gap * r));
  rn.forEach((r, i) => r.position(e[i])), ot.position(n.position(S.widgets.playbutton_anchor.x, S.widgets.playbutton_anchor.y)).size(S.widgets.playbutton_size), Cn.position(n.position(S.widgets.backbutton_anchor.x, S.widgets.backbutton_anchor.y)).size(S.widgets.button_size), zn.position(n.position(S.widgets.resetbutton_anchor.x, S.widgets.resetbutton_anchor.y)).size(S.widgets.button_size), t.selectAll(null).data(rn).enter().append(Pr), t.selectAll(null).data(Nd).enter().append(Pr);
}, zd = (t) => {
  Ri(ze, (n) => n.widget.reset(t, n.default));
};
function Xi(t, n) {
  return [t % n, Math.floor(t / n)];
}
const Cd = {
  n4: mn([-1, 1, 0, 0], [0, 0, -1, 1]),
  n8: mn([-1, 0, 1, 1, 1, 0, -1, -1], [-1, -1, -1, 0, 1, 1, 1, 0])
};
function Bn(t, n, e = "periodic", r = "n8") {
  const i = [];
  return Cd[r].forEach((o) => {
    var a = o[1], s = o[0];
    const l = Xi(t, n), u = l[0], f = l[1], h = u + s, c = f + a;
    (e == "dirichlet" ? !(a == 0 && s == 0) && h < n && c < n && h >= 0 && c >= 0 : !(a == 0 && s == 0)) && i.push(n * ((c + n) % n) + (h + n) % n);
  }), i;
}
const kd = function(t) {
  var n = "periodic", e = 1, r = "n8";
  const i = 2 * t + 1;
  var o = e / i, a = o;
  const s = Ee(i * i).map(function(c) {
    const d = Xi(c, i);
    return {
      m: d[0],
      n: d[1],
      x: o * (d[0] + 0.5) - e / 2,
      y: a * (d[1] + 0.5) - e / 2
    };
  });
  s.forEach(function(c, d) {
    c.neighbors = Bn(d, i, n, r).map((p) => s[p]), c.cell = () => [
      { x: c.x + o / 2, y: c.y + a / 2 },
      { x: c.x - o / 2, y: c.y + a / 2 },
      { x: c.x - o / 2, y: c.y - a / 2 },
      { x: c.x + o / 2, y: c.y - a / 2 },
      { x: c.x + o / 2, y: c.y + a / 2 }
    ], c.random_interior_point = () => ({
      x: c.x + o * (Math.random() - 0.5),
      y: c.y + a * (Math.random() - 0.5)
    });
  });
  const l = function(c) {
    return typeof c < "u" ? (s.forEach(function(d) {
      d.x = (d.m + 0.5) * c / i - c / 2, d.y = (d.n + 0.5) * c / i - c / 2;
    }), e = c, o = e / i, a = e / i, this.L = e, this) : e;
  }, u = function(c) {
    return typeof c < "u" ? (s.forEach(function(d, p) {
      d.neighbors = Bn(p, i, c, r).map((_) => s[_]);
    }), n = c, s.forEach((d) => {
      d.is_boundary = n == "dirichlet" && (d.n == 0 || d.n == 2 * t || d.m == 0 || d.m == 2 * t);
    }), this) : n;
  }, f = function(c) {
    return typeof c < "u" ? (s.forEach(function(d, p) {
      d.neighbors = Bn(p, i, n, c).map((_) => s[_]);
    }), r = c, this) : r;
  }, h = function() {
    return n === "periodic" ? null : Ep(s, (c) => c.n == 0 || c.n == 2 * t || c.m == 0 || c.m == 2 * t);
  };
  return {
    type: "square",
    L: e,
    N: t,
    size: i * i,
    hood: f,
    nodes: s,
    scale: l,
    boundary: u,
    boundary_cells: h
  };
};
mn([-1, 1, 0, 0], [0, 0, -1, 1]), mn([-1, 0, 1, 1, 1, 0, -1, -1], [-1, -1, -1, 0, 1, 1, 1, 0]);
var at = [];
const Id = () => {
  C.timer = {}, C.tick = 0;
  const t = C.N;
  at = kd(t).boundary("dirichlet").nodes, at.forEach((e) => {
    Math.random() < C.initial_trees ? e.state = "tree" : e.state = "empty";
  });
}, Rd = () => {
  C.tick++;
  const t = at.filter((e) => e.state == "tree"), n = at.filter((e) => e.state == "fire");
  if (Sr(t).forEach(function(e) {
    if (Math.random() < C.vegetation_growth_rate.widget.value()) {
      const r = e.neighbors, i = r.length, o = r[Math.floor(Math.random() * i)];
      o.state == "empty" && (o.state = "tree");
    }
  }), Sr(n).forEach(function(e) {
    e.neighbors.forEach(function(r) {
      r.state == "tree" && Math.random() < C.ignition_probability.widget.value() && e.burntime == C.burntime && (r.state = "fire", r.burntime = C.burntime);
    }), e.burntime -= 1, e.burntime == 0 && (e.state = "empty");
  }), Math.random() < C.lightning_rate.widget.value()) {
    const e = at[Math.floor(Math.random() * at.length)];
    e.state == "tree" && (e.state = "fire", e.burntime = C.burntime);
  }
};
var D, on, an;
const k = j().domain([-0.5, 0.5]), Fd = j().domain([-0.5, 0.5]), Ld = si().domain(["empty", "tree"]).range([S.simulation.empty_color, S.simulation.tree_color]), Dd = j().domain([0, C.burntime]).range(["black", "red"]);
function Ui(t) {
  return t.state == "fire" ? Dd(t.burntime) : Ld(t.state);
}
const Hd = (t, n) => {
  on = n.display_size.width, an = n.display_size.height, k.range([0, on]), Fd.range([0, an]), D = t.node().getContext("2d"), D.clearRect(0, 0, on, an), at.forEach((e) => {
    const r = e.cell(), i = Ui(e);
    D.fillStyle = i, D.strokeStyle = i, D.lineWidth = 0, D.fillRect(k(r[0].x), k(r[0].y), k(r[2].x) - k(r[0].x), k(r[2].y) - k(r[0].y));
  });
}, qd = (t, n) => {
  D.clearRect(0, 0, on, an), at.forEach((e) => {
    const r = e.cell(), i = Ui(e);
    D.fillStyle = i, D.strokeStyle = i, D.lineWidth = 0, D.fillRect(k(r[0].x), k(r[0].y), k(r[2].x) - k(r[0].x), k(r[2].y) - k(r[0].y));
  });
};
function Bd(t, n) {
  Rd(), qd();
}
function Gi(t, n) {
  Id(), Hd(t, n);
}
var Er = {};
const Xd = (t, n) => {
  ot.value() == 1 ? Er = Es(() => Bd(), S.simulation.delay) : Er.stop();
}, Ud = (t, n, e) => {
  Cn.update(() => zd(n)), ot.update(() => Xd()), zn.update(() => Gi(t, e));
}, Gd = {
  name: "@explorables/critically_inflammatory",
  title: "Critically Inflammatory",
  subtitle: "A Forrest Fire Model",
  description: "This explorable illustrates, as a representative of a broad range of dynamic phenomena, a simple model for the spatial spread of forest fires and the dynamic patterns they generate.",
  author: "Dirk Brockmann (https://synosy.github.io)"
};
function Yd(t, n = Yi) {
  const e = Ad(t, n), r = e.display, i = e.controls, o = e.grid;
  return Od(i, o), Ud(r, i, n), Gi(r, n), {
    halt() {
      ot.value() === 1 && ot.press(i);
    },
    reset() {
      ot.value() === 1 && ot.press(i), Cn.press(i), zn.press(i);
    },
    config: n,
    meta: Gd
  };
}
export {
  Yi as config,
  Yd as default,
  Yd as load,
  Gd as meta
};
