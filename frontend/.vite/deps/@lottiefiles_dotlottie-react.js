import {
  require_react
} from "./chunk-QTVD6AVW.js";
import {
  __toESM
} from "./chunk-PR4QN5HX.js";

// node_modules/@lottiefiles/dotlottie-react/dist/index.js
var import_react = __toESM(require_react());
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM2 = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var require_debounce = __commonJS({
  "../../node_modules/.pnpm/debounce@2.0.0/node_modules/debounce/index.js"(exports, module) {
    function debounce3(function_, wait = 100, options = {}) {
      if (typeof function_ !== "function") {
        throw new TypeError(`Expected the first parameter to be a function, got \`${typeof function_}\`.`);
      }
      if (wait < 0) {
        throw new RangeError("`wait` must not be negative.");
      }
      const { immediate } = typeof options === "boolean" ? { immediate: options } : options;
      let storedContext;
      let storedArguments;
      let timeoutId;
      let timestamp;
      let result;
      function later() {
        const last = Date.now() - timestamp;
        if (last < wait && last >= 0) {
          timeoutId = setTimeout(later, wait - last);
        } else {
          timeoutId = void 0;
          if (!immediate) {
            const callContext = storedContext;
            const callArguments = storedArguments;
            storedContext = void 0;
            storedArguments = void 0;
            result = function_.apply(callContext, callArguments);
          }
        }
      }
      const debounced = function(...arguments_) {
        if (storedContext && this !== storedContext) {
          throw new Error("Debounced method called with different contexts.");
        }
        storedContext = this;
        storedArguments = arguments_;
        timestamp = Date.now();
        const callNow = immediate && !timeoutId;
        if (!timeoutId) {
          timeoutId = setTimeout(later, wait);
        }
        if (callNow) {
          const callContext = storedContext;
          const callArguments = storedArguments;
          storedContext = void 0;
          storedArguments = void 0;
          result = function_.apply(callContext, callArguments);
        }
        return result;
      };
      debounced.clear = () => {
        if (!timeoutId) {
          return;
        }
        clearTimeout(timeoutId);
        timeoutId = void 0;
      };
      debounced.flush = () => {
        if (!timeoutId) {
          return;
        }
        const callContext = storedContext;
        const callArguments = storedArguments;
        storedContext = void 0;
        storedArguments = void 0;
        result = function_.apply(callContext, callArguments);
        clearTimeout(timeoutId);
        timeoutId = void 0;
      };
      return debounced;
    }
    module.exports.debounce = debounce3;
    module.exports = debounce3;
  }
});
var JC = Object.defineProperty;
var fC = (r, C, i) => C in r ? JC(r, C, { enumerable: true, configurable: true, writable: true, value: i }) : r[C] = i;
var Z = (r, C, i) => fC(r, typeof C != "symbol" ? C + "" : C, i);
var _I = class {
  requestAnimationFrame(C) {
    return requestAnimationFrame(C);
  }
  cancelAnimationFrame(C) {
    cancelAnimationFrame(C);
  }
};
var $I = class {
  constructor() {
    Z(this, "_lastHandleId", 0);
    Z(this, "_lastImmediate", null);
  }
  requestAnimationFrame(C) {
    return this._lastHandleId >= Number.MAX_SAFE_INTEGER && (this._lastHandleId = 0), this._lastHandleId += 1, this._lastImmediate = setImmediate(() => {
      C(Date.now());
    }), this._lastHandleId;
  }
  cancelAnimationFrame(C) {
    this._lastImmediate && clearImmediate(this._lastImmediate);
  }
};
var VI = class {
  constructor() {
    Z(this, "_strategy");
    this._strategy = typeof requestAnimationFrame == "function" ? new _I() : new $I();
  }
  requestAnimationFrame(C) {
    return this._strategy.requestAnimationFrame(C);
  }
  cancelAnimationFrame(C) {
    this._strategy.cancelAnimationFrame(C);
  }
};
var M = typeof window < "u" && typeof window.document < "u";
var wI = new Uint8Array([80, 75, 3, 4]);
var Eg = ["v", "ip", "op", "layers", "fr", "w", "h"];
var qI = "0.30.2";
var Ig = "@lottiefiles/dotlottie-web";
var TC = (() => {
  var _a;
  var r = typeof document < "u" ? (_a = document.currentScript) == null ? void 0 : _a.src : void 0;
  return function(C = {}) {
    var i = C, d, B, f = new Promise((I, g) => {
      d = I, B = g;
    }), P = Object.assign({}, i), T = "./this.program", v = "";
    typeof document < "u" && document.currentScript && (v = document.currentScript.src), r && (v = r), v.startsWith("blob:") ? v = "" : v = v.substr(0, v.replace(/[?#].*/, "").lastIndexOf("/") + 1);
    var $ = i.print || console.log.bind(console), q = i.printErr || console.error.bind(console);
    Object.assign(i, P), P = null, i.thisProgram && (T = i.thisProgram);
    var iI;
    i.wasmBinary && (iI = i.wasmBinary);
    var ZI, og = false, Q, y, II, eI, w, K, ng, ag;
    function lg() {
      var I = ZI.buffer;
      i.HEAP8 = Q = new Int8Array(I), i.HEAP16 = II = new Int16Array(I), i.HEAPU8 = y = new Uint8Array(I), i.HEAPU16 = eI = new Uint16Array(I), i.HEAP32 = w = new Int32Array(I), i.HEAPU32 = K = new Uint32Array(I), i.HEAPF32 = ng = new Float32Array(I), i.HEAPF64 = ag = new Float64Array(I);
    }
    var sg = [], dg = [], cg = [];
    function Og() {
      var I = i.preRun.shift();
      sg.unshift(I);
    }
    var j = 0, tI = null;
    function bI(I) {
      var _a2;
      throw (_a2 = i.onAbort) == null ? void 0 : _a2.call(i, I), I = "Aborted(" + I + ")", q(I), og = true, I = new WebAssembly.RuntimeError(I + ". Build with -sASSERTIONS for more info."), B(I), I;
    }
    var Gg = (I) => I.startsWith("data:application/octet-stream;base64,"), gI;
    if (gI = "DotLottiePlayer.wasm", !Gg(gI)) {
      var rg = gI;
      gI = i.locateFile ? i.locateFile(rg, v) : v + rg;
    }
    function hg(I) {
      if (I == gI && iI)
        return new Uint8Array(iI);
      throw "both async and sync fetching of the wasm failed";
    }
    function _g(I) {
      return iI || typeof fetch != "function" ? Promise.resolve().then(() => hg(I)) : fetch(I, { credentials: "same-origin" }).then((g) => {
        if (!g.ok)
          throw `failed to load wasm binary file at '${I}'`;
        return g.arrayBuffer();
      }).catch(() => hg(I));
    }
    function Zg(I, g, A) {
      return _g(I).then((e) => WebAssembly.instantiate(e, g)).then(A, (e) => {
        q(`failed to asynchronously prepare wasm: ${e}`), bI(e);
      });
    }
    function $g(I, g) {
      var A = gI;
      return iI || typeof WebAssembly.instantiateStreaming != "function" || Gg(A) || typeof fetch != "function" ? Zg(A, I, g) : fetch(A, { credentials: "same-origin" }).then((e) => WebAssembly.instantiateStreaming(e, I).then(g, function(t) {
        return q(`wasm streaming compile failed: ${t}`), q("falling back to ArrayBuffer instantiation"), Zg(A, I, g);
      }));
    }
    var HI = (I) => {
      for (; 0 < I.length; )
        I.shift()(i);
    }, bg = typeof TextDecoder < "u" ? new TextDecoder("utf8") : void 0, x = (I, g, A) => {
      var e = g + A;
      for (A = g; I[A] && !(A >= e); )
        ++A;
      if (16 < A - g && I.buffer && bg)
        return bg.decode(I.subarray(g, A));
      for (e = ""; g < A; ) {
        var t = I[g++];
        if (t & 128) {
          var o = I[g++] & 63;
          if ((t & 224) == 192)
            e += String.fromCharCode((t & 31) << 6 | o);
          else {
            var l = I[g++] & 63;
            t = (t & 240) == 224 ? (t & 15) << 12 | o << 6 | l : (t & 7) << 18 | o << 12 | l << 6 | I[g++] & 63, 65536 > t ? e += String.fromCharCode(t) : (t -= 65536, e += String.fromCharCode(55296 | t >> 10, 56320 | t & 1023));
          }
        } else
          e += String.fromCharCode(t);
      }
      return e;
    };
    class qg {
      constructor(g) {
        this.ya = g - 24;
      }
    }
    var ug = 0, mg = (I) => {
      for (var g = 0, A = 0; A < I.length; ++A) {
        var e = I.charCodeAt(A);
        127 >= e ? g++ : 2047 >= e ? g += 2 : 55296 <= e && 57343 >= e ? (g += 4, ++A) : g += 3;
      }
      return g;
    }, Bg = (I, g, A, e) => {
      if (0 < e) {
        e = A + e - 1;
        for (var t = 0; t < I.length; ++t) {
          var o = I.charCodeAt(t);
          if (55296 <= o && 57343 >= o) {
            var l = I.charCodeAt(++t);
            o = 65536 + ((o & 1023) << 10) | l & 1023;
          }
          if (127 >= o) {
            if (A >= e)
              break;
            g[A++] = o;
          } else {
            if (2047 >= o) {
              if (A + 1 >= e)
                break;
              g[A++] = 192 | o >> 6;
            } else {
              if (65535 >= o) {
                if (A + 2 >= e)
                  break;
                g[A++] = 224 | o >> 12;
              } else {
                if (A + 3 >= e)
                  break;
                g[A++] = 240 | o >> 18, g[A++] = 128 | o >> 12 & 63;
              }
              g[A++] = 128 | o >> 6 & 63;
            }
            g[A++] = 128 | o & 63;
          }
        }
        g[A] = 0;
      }
    }, uI = {}, vI = (I) => {
      for (; I.length; ) {
        var g = I.pop();
        I.pop()(g);
      }
    };
    function oI(I) {
      return this.fromWireType(K[I >> 2]);
    }
    var CI = {}, O = {}, mI = {}, nI, U = (I, g, A) => {
      function e(a) {
        if (a = A(a), a.length !== I.length)
          throw new nI("Mismatched type converter count");
        for (var c = 0; c < I.length; ++c)
          k(I[c], a[c]);
      }
      I.forEach(function(a) {
        mI[a] = g;
      });
      var t = Array(g.length), o = [], l = 0;
      g.forEach((a, c) => {
        O.hasOwnProperty(a) ? t[c] = O[a] : (o.push(a), CI.hasOwnProperty(a) || (CI[a] = []), CI[a].push(() => {
          t[c] = O[a], ++l, l === o.length && e(t);
        }));
      }), o.length === 0 && e(t);
    }, pg, V = (I) => {
      for (var g = ""; y[I]; )
        g += pg[y[I++]];
      return g;
    }, u;
    function gC(I, g, A = {}) {
      var e = g.name;
      if (!I)
        throw new u(`type "${e}" must have a positive integer typeid pointer`);
      if (O.hasOwnProperty(I)) {
        if (A.ib)
          return;
        throw new u(`Cannot register type '${e}' twice`);
      }
      O[I] = g, delete mI[I], CI.hasOwnProperty(I) && (g = CI[I], delete CI[I], g.forEach((t) => t()));
    }
    function k(I, g, A = {}) {
      if (!("argPackAdvance" in g))
        throw new TypeError("registerType registeredInstance requires argPackAdvance");
      return gC(I, g, A);
    }
    var kI = (I) => {
      throw new u(I.ma.za.xa.name + " instance already deleted");
    }, FI = false, Wg = () => {
    }, Kg = (I, g, A) => g === A ? I : A.Ca === void 0 ? null : (I = Kg(I, g, A.Ca), I === null ? null : A.ab(I)), yg = {}, aI = [], LI = () => {
      for (; aI.length; ) {
        var I = aI.pop();
        I.ma.Ka = false, I.delete();
      }
    }, lI, sI = {}, CC = (I, g) => {
      if (g === void 0)
        throw new u("ptr should not be undefined");
      for (; I.Ca; )
        g = I.Na(g), I = I.Ca;
      return sI[g];
    }, BI = (I, g) => {
      if (!g.za || !g.ya)
        throw new nI("makeClassHandle requires ptr and ptrType");
      if (!!g.Da != !!g.Aa)
        throw new nI("Both smartPtrType and smartPtr must be specified");
      return g.count = { value: 1 }, dI(Object.create(I, { ma: { value: g, writable: true } }));
    }, dI = (I) => typeof FinalizationRegistry > "u" ? (dI = (g) => g, I) : (FI = new FinalizationRegistry((g) => {
      g = g.ma, --g.count.value, g.count.value === 0 && (g.Aa ? g.Da.Fa(g.Aa) : g.za.xa.Fa(g.ya));
    }), dI = (g) => {
      var A = g.ma;
      return A.Aa && FI.register(g, { ma: A }, g), g;
    }, Wg = (g) => {
      FI.unregister(g);
    }, dI(I));
    function pI() {
    }
    var cI = (I, g) => Object.defineProperty(g, "name", { value: I }), Yg = (I, g, A) => {
      if (I[g].Ba === void 0) {
        var e = I[g];
        I[g] = function(...t) {
          if (!I[g].Ba.hasOwnProperty(t.length))
            throw new u(`Function '${A}' called with an invalid number of arguments (${t.length}) - expects one of (${I[g].Ba})!`);
          return I[g].Ba[t.length].apply(this, t);
        }, I[g].Ba = [], I[g].Ba[e.Oa] = e;
      }
    }, NI = (I, g, A) => {
      if (i.hasOwnProperty(I)) {
        if (A === void 0 || i[I].Ba !== void 0 && i[I].Ba[A] !== void 0)
          throw new u(`Cannot register public name '${I}' twice`);
        if (Yg(i, I, I), i.hasOwnProperty(A))
          throw new u(`Cannot register multiple overloads of a function with the same number of arguments (${A})!`);
        i[I].Ba[A] = g;
      } else
        i[I] = g, A !== void 0 && (i[I].vb = A);
    }, AC = (I) => {
      if (I === void 0)
        return "_unknown";
      I = I.replace(/[^a-zA-Z0-9_]/g, "$");
      var g = I.charCodeAt(0);
      return 48 <= g && 57 >= g ? `_${I}` : I;
    };
    function iC(I, g, A, e, t, o, l, a) {
      this.name = I, this.constructor = g, this.La = A, this.Fa = e, this.Ca = t, this.cb = o, this.Na = l, this.ab = a, this.kb = [];
    }
    var JI = (I, g, A) => {
      for (; g !== A; ) {
        if (!g.Na)
          throw new u(`Expected null or instance of ${A.name}, got an instance of ${g.name}`);
        I = g.Na(I), g = g.Ca;
      }
      return I;
    };
    function eC(I, g) {
      if (g === null) {
        if (this.Ta)
          throw new u(`null is not a valid ${this.name}`);
        return 0;
      }
      if (!g.ma)
        throw new u(`Cannot pass "${UI(g)}" as a ${this.name}`);
      if (!g.ma.ya)
        throw new u(`Cannot pass deleted object as a pointer of type ${this.name}`);
      return JI(g.ma.ya, g.ma.za.xa, this.xa);
    }
    function tC(I, g) {
      if (g === null) {
        if (this.Ta)
          throw new u(`null is not a valid ${this.name}`);
        if (this.Qa) {
          var A = this.Ua();
          return I !== null && I.push(this.Fa, A), A;
        }
        return 0;
      }
      if (!g || !g.ma)
        throw new u(`Cannot pass "${UI(g)}" as a ${this.name}`);
      if (!g.ma.ya)
        throw new u(`Cannot pass deleted object as a pointer of type ${this.name}`);
      if (!this.Pa && g.ma.za.Pa)
        throw new u(`Cannot convert argument of type ${g.ma.Da ? g.ma.Da.name : g.ma.za.name} to parameter type ${this.name}`);
      if (A = JI(g.ma.ya, g.ma.za.xa, this.xa), this.Qa) {
        if (g.ma.Aa === void 0)
          throw new u("Passing raw pointer to smart pointer is illegal");
        switch (this.pb) {
          case 0:
            if (g.ma.Da === this)
              A = g.ma.Aa;
            else
              throw new u(`Cannot convert argument of type ${g.ma.Da ? g.ma.Da.name : g.ma.za.name} to parameter type ${this.name}`);
            break;
          case 1:
            A = g.ma.Aa;
            break;
          case 2:
            if (g.ma.Da === this)
              A = g.ma.Aa;
            else {
              var e = g.clone();
              A = this.lb(A, KI(() => e.delete())), I !== null && I.push(this.Fa, A);
            }
            break;
          default:
            throw new u("Unsupporting sharing policy");
        }
      }
      return A;
    }
    function oC(I, g) {
      if (g === null) {
        if (this.Ta)
          throw new u(`null is not a valid ${this.name}`);
        return 0;
      }
      if (!g.ma)
        throw new u(`Cannot pass "${UI(g)}" as a ${this.name}`);
      if (!g.ma.ya)
        throw new u(`Cannot pass deleted object as a pointer of type ${this.name}`);
      if (g.ma.za.Pa)
        throw new u(`Cannot convert argument of type ${g.ma.za.name} to parameter type ${this.name}`);
      return JI(g.ma.ya, g.ma.za.xa, this.xa);
    }
    function GI(I, g, A, e, t, o, l, a, c, s, G) {
      this.name = I, this.xa = g, this.Ta = A, this.Pa = e, this.Qa = t, this.jb = o, this.pb = l, this.Za = a, this.Ua = c, this.lb = s, this.Fa = G, t || g.Ca !== void 0 ? this.toWireType = tC : (this.toWireType = e ? eC : oC, this.Ea = null);
    }
    var Sg = (I, g, A) => {
      if (!i.hasOwnProperty(I))
        throw new nI("Replacing nonexistent public symbol");
      i[I].Ba !== void 0 && A !== void 0 ? i[I].Ba[A] = g : (i[I] = g, i[I].Oa = A);
    }, H, nC = (I, g, A = []) => (I.includes("j") ? (I = I.replace(/p/g, "i"), g = (0, i["dynCall_" + I])(g, ...A)) : g = H.get(g)(...A), g), aC = (I, g) => (...A) => nC(I, g, A), R = (I, g) => {
      I = V(I);
      var A = I.includes("j") ? aC(I, g) : H.get(g);
      if (typeof A != "function")
        throw new u(`unknown function pointer with signature ${I}: ${g}`);
      return A;
    }, Vg, wg = (I) => {
      I = Jg(I);
      var g = V(I);
      return E(I), g;
    }, WI = (I, g) => {
      function A(o) {
        t[o] || O[o] || (mI[o] ? mI[o].forEach(A) : (e.push(o), t[o] = true));
      }
      var e = [], t = {};
      throw g.forEach(A), new Vg(`${I}: ` + e.map(wg).join([", "]));
    }, fI = (I, g) => {
      for (var A = [], e = 0; e < I; e++)
        A.push(K[g + 4 * e >> 2]);
      return A;
    };
    function lC(I) {
      for (var g = 1; g < I.length; ++g)
        if (I[g] !== null && I[g].Ea === void 0)
          return true;
      return false;
    }
    function TI(I, g, A, e, t) {
      var o = g.length;
      if (2 > o)
        throw new u("argTypes array size mismatch! Must at least get return value and 'this' types!");
      var l = g[1] !== null && A !== null, a = lC(g), c = g[0].name !== "void", s = o - 2, G = Array(s), m = [], p = [];
      return cI(I, function(...n) {
        if (n.length !== s)
          throw new u(`function ${I} called with ${n.length} arguments, expected ${s}`);
        if (p.length = 0, m.length = l ? 2 : 1, m[0] = t, l) {
          var h = g[1].toWireType(p, this);
          m[1] = h;
        }
        for (var b = 0; b < s; ++b)
          G[b] = g[b + 2].toWireType(p, n[b]), m.push(G[b]);
        if (n = e(...m), a)
          vI(p);
        else
          for (b = l ? 1 : 2; b < g.length; b++) {
            var S = b === 1 ? h : G[b - 2];
            g[b].Ea !== null && g[b].Ea(S);
          }
        return h = c ? g[0].fromWireType(n) : void 0, h;
      });
    }
    var Rg = (I) => {
      I = I.trim();
      let g = I.indexOf("(");
      return g !== -1 ? I.substr(0, g) : I;
    }, DI = [], D = [], EI = (I) => {
      9 < I && --D[I + 1] === 0 && (D[I] = void 0, DI.push(I));
    }, MI = (I) => {
      if (!I)
        throw new u("Cannot use deleted val. handle = " + I);
      return D[I];
    }, KI = (I) => {
      switch (I) {
        case void 0:
          return 2;
        case null:
          return 4;
        case true:
          return 6;
        case false:
          return 8;
        default:
          let g = DI.pop() || D.length;
          return D[g] = I, D[g + 1] = 1, g;
      }
    }, Xg = { name: "emscripten::val", fromWireType: (I) => {
      var g = MI(I);
      return EI(I), g;
    }, toWireType: (I, g) => KI(g), argPackAdvance: 8, readValueFromPointer: oI, Ea: null }, sC = (I, g, A) => {
      switch (g) {
        case 1:
          return A ? function(e) {
            return this.fromWireType(Q[e]);
          } : function(e) {
            return this.fromWireType(y[e]);
          };
        case 2:
          return A ? function(e) {
            return this.fromWireType(II[e >> 1]);
          } : function(e) {
            return this.fromWireType(eI[e >> 1]);
          };
        case 4:
          return A ? function(e) {
            return this.fromWireType(w[e >> 2]);
          } : function(e) {
            return this.fromWireType(K[e >> 2]);
          };
        default:
          throw new TypeError(`invalid integer width (${g}): ${I}`);
      }
    }, PI = (I, g) => {
      var A = O[I];
      if (A === void 0)
        throw I = `${g} has unknown type ${wg(I)}`, new u(I);
      return A;
    }, UI = (I) => {
      if (I === null)
        return "null";
      var g = typeof I;
      return g === "object" || g === "array" || g === "function" ? I.toString() : "" + I;
    }, dC = (I, g) => {
      switch (g) {
        case 4:
          return function(A) {
            return this.fromWireType(ng[A >> 2]);
          };
        case 8:
          return function(A) {
            return this.fromWireType(ag[A >> 3]);
          };
        default:
          throw new TypeError(`invalid float width (${g}): ${I}`);
      }
    }, cC = (I, g, A) => {
      switch (g) {
        case 1:
          return A ? (e) => Q[e] : (e) => y[e];
        case 2:
          return A ? (e) => II[e >> 1] : (e) => eI[e >> 1];
        case 4:
          return A ? (e) => w[e >> 2] : (e) => K[e >> 2];
        default:
          throw new TypeError(`invalid integer width (${g}): ${I}`);
      }
    }, Hg = typeof TextDecoder < "u" ? new TextDecoder("utf-16le") : void 0, GC = (I, g) => {
      for (var A = I >> 1, e = A + g / 2; !(A >= e) && eI[A]; )
        ++A;
      if (A <<= 1, 32 < A - I && Hg)
        return Hg.decode(y.subarray(I, A));
      for (A = "", e = 0; !(e >= g / 2); ++e) {
        var t = II[I + 2 * e >> 1];
        if (t == 0)
          break;
        A += String.fromCharCode(t);
      }
      return A;
    }, rC = (I, g, A) => {
      if (A ?? (A = 2147483647), 2 > A)
        return 0;
      A -= 2;
      var e = g;
      A = A < 2 * I.length ? A / 2 : I.length;
      for (var t = 0; t < A; ++t)
        II[g >> 1] = I.charCodeAt(t), g += 2;
      return II[g >> 1] = 0, g - e;
    }, hC = (I) => 2 * I.length, ZC = (I, g) => {
      for (var A = 0, e = ""; !(A >= g / 4); ) {
        var t = w[I + 4 * A >> 2];
        if (t == 0)
          break;
        ++A, 65536 <= t ? (t -= 65536, e += String.fromCharCode(55296 | t >> 10, 56320 | t & 1023)) : e += String.fromCharCode(t);
      }
      return e;
    }, bC = (I, g, A) => {
      if (A ?? (A = 2147483647), 4 > A)
        return 0;
      var e = g;
      A = e + A - 4;
      for (var t = 0; t < I.length; ++t) {
        var o = I.charCodeAt(t);
        if (55296 <= o && 57343 >= o) {
          var l = I.charCodeAt(++t);
          o = 65536 + ((o & 1023) << 10) | l & 1023;
        }
        if (w[g >> 2] = o, g += 4, g + 4 > A)
          break;
      }
      return w[g >> 2] = 0, g - e;
    }, uC = (I) => {
      for (var g = 0, A = 0; A < I.length; ++A) {
        var e = I.charCodeAt(A);
        55296 <= e && 57343 >= e && ++A, g += 4;
      }
      return g;
    }, zI = [], mC = (I) => {
      var g = zI.length;
      return zI.push(I), g;
    }, BC = (I, g) => {
      for (var A = Array(I), e = 0; e < I; ++e)
        A[e] = PI(K[g + 4 * e >> 2], "parameter " + e);
      return A;
    }, pC = Reflect.construct, QI = {}, vg = () => {
      if (!jI) {
        var I = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _: T || "./this.program" }, g;
        for (g in QI)
          QI[g] === void 0 ? delete I[g] : I[g] = QI[g];
        var A = [];
        for (g in I)
          A.push(`${g}=${I[g]}`);
        jI = A;
      }
      return jI;
    }, jI, WC = [null, [], []], KC = () => {
      if (typeof crypto == "object" && typeof crypto.getRandomValues == "function")
        return (I) => crypto.getRandomValues(I);
      bI("initRandomDevice");
    }, kg = (I) => (kg = KC())(I), yI = (I) => I % 4 === 0 && (I % 100 !== 0 || I % 400 === 0), Fg = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Lg = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    function yC(I) {
      var g = Array(mg(I) + 1);
      return Bg(I, g, 0, g.length), g;
    }
    var YC = (I, g, A, e) => {
      function t(n, h, b) {
        for (n = typeof n == "number" ? n.toString() : n || ""; n.length < h; )
          n = b[0] + n;
        return n;
      }
      function o(n, h) {
        return t(n, h, "0");
      }
      function l(n, h) {
        function b(z) {
          return 0 > z ? -1 : 0 < z ? 1 : 0;
        }
        var S;
        return (S = b(n.getFullYear() - h.getFullYear())) === 0 && (S = b(n.getMonth() - h.getMonth())) === 0 && (S = b(n.getDate() - h.getDate())), S;
      }
      function a(n) {
        switch (n.getDay()) {
          case 0:
            return new Date(n.getFullYear() - 1, 11, 29);
          case 1:
            return n;
          case 2:
            return new Date(n.getFullYear(), 0, 3);
          case 3:
            return new Date(n.getFullYear(), 0, 2);
          case 4:
            return new Date(n.getFullYear(), 0, 1);
          case 5:
            return new Date(n.getFullYear() - 1, 11, 31);
          case 6:
            return new Date(n.getFullYear() - 1, 11, 30);
        }
      }
      function c(n) {
        var h = n.Ia;
        for (n = new Date(new Date(n.Ja + 1900, 0, 1).getTime()); 0 < h; ) {
          var b = n.getMonth(), S = (yI(n.getFullYear()) ? Fg : Lg)[b];
          if (h > S - n.getDate())
            h -= S - n.getDate() + 1, n.setDate(1), 11 > b ? n.setMonth(b + 1) : (n.setMonth(0), n.setFullYear(n.getFullYear() + 1));
          else {
            n.setDate(n.getDate() + h);
            break;
          }
        }
        return b = new Date(n.getFullYear() + 1, 0, 4), h = a(new Date(n.getFullYear(), 0, 4)), b = a(b), 0 >= l(h, n) ? 0 >= l(b, n) ? n.getFullYear() + 1 : n.getFullYear() : n.getFullYear() - 1;
      }
      var s = K[e + 40 >> 2];
      e = { sb: w[e >> 2], rb: w[e + 4 >> 2], Ra: w[e + 8 >> 2], Va: w[e + 12 >> 2], Sa: w[e + 16 >> 2], Ja: w[e + 20 >> 2], Ga: w[e + 24 >> 2], Ia: w[e + 28 >> 2], wb: w[e + 32 >> 2], qb: w[e + 36 >> 2], tb: s && s ? x(y, s) : "" }, A = A ? x(y, A) : "", s = { "%c": "%a %b %d %H:%M:%S %Y", "%D": "%m/%d/%y", "%F": "%Y-%m-%d", "%h": "%b", "%r": "%I:%M:%S %p", "%R": "%H:%M", "%T": "%H:%M:%S", "%x": "%m/%d/%y", "%X": "%H:%M:%S", "%Ec": "%c", "%EC": "%C", "%Ex": "%m/%d/%y", "%EX": "%H:%M:%S", "%Ey": "%y", "%EY": "%Y", "%Od": "%d", "%Oe": "%e", "%OH": "%H", "%OI": "%I", "%Om": "%m", "%OM": "%M", "%OS": "%S", "%Ou": "%u", "%OU": "%U", "%OV": "%V", "%Ow": "%w", "%OW": "%W", "%Oy": "%y" };
      for (var G in s)
        A = A.replace(new RegExp(G, "g"), s[G]);
      var m = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), p = "January February March April May June July August September October November December".split(" ");
      s = { "%a": (n) => m[n.Ga].substring(0, 3), "%A": (n) => m[n.Ga], "%b": (n) => p[n.Sa].substring(0, 3), "%B": (n) => p[n.Sa], "%C": (n) => o((n.Ja + 1900) / 100 | 0, 2), "%d": (n) => o(n.Va, 2), "%e": (n) => t(n.Va, 2, " "), "%g": (n) => c(n).toString().substring(2), "%G": c, "%H": (n) => o(n.Ra, 2), "%I": (n) => (n = n.Ra, n == 0 ? n = 12 : 12 < n && (n -= 12), o(n, 2)), "%j": (n) => {
        for (var h = 0, b = 0; b <= n.Sa - 1; h += (yI(n.Ja + 1900) ? Fg : Lg)[b++])
          ;
        return o(n.Va + h, 3);
      }, "%m": (n) => o(n.Sa + 1, 2), "%M": (n) => o(n.rb, 2), "%n": () => `
`, "%p": (n) => 0 <= n.Ra && 12 > n.Ra ? "AM" : "PM", "%S": (n) => o(n.sb, 2), "%t": () => "	", "%u": (n) => n.Ga || 7, "%U": (n) => o(Math.floor((n.Ia + 7 - n.Ga) / 7), 2), "%V": (n) => {
        var h = Math.floor((n.Ia + 7 - (n.Ga + 6) % 7) / 7);
        if (2 >= (n.Ga + 371 - n.Ia - 2) % 7 && h++, h)
          h == 53 && (b = (n.Ga + 371 - n.Ia) % 7, b == 4 || b == 3 && yI(n.Ja) || (h = 1));
        else {
          h = 52;
          var b = (n.Ga + 7 - n.Ia - 1) % 7;
          (b == 4 || b == 5 && yI(n.Ja % 400 - 1)) && h++;
        }
        return o(h, 2);
      }, "%w": (n) => n.Ga, "%W": (n) => o(Math.floor((n.Ia + 7 - (n.Ga + 6) % 7) / 7), 2), "%y": (n) => (n.Ja + 1900).toString().substring(2), "%Y": (n) => n.Ja + 1900, "%z": (n) => {
        n = n.qb;
        var h = 0 <= n;
        return n = Math.abs(n) / 60, (h ? "+" : "-") + ("0000" + (n / 60 * 100 + n % 60)).slice(-4);
      }, "%Z": (n) => n.tb, "%%": () => "%" }, A = A.replace(/%%/g, "\0\0");
      for (G in s)
        A.includes(G) && (A = A.replace(new RegExp(G, "g"), s[G](e)));
      return A = A.replace(/\0\0/g, "%"), G = yC(A), G.length > g ? 0 : (Q.set(G, I), G.length - 1);
    };
    nI = i.InternalError = class extends Error {
      constructor(I) {
        super(I), this.name = "InternalError";
      }
    };
    for (var Ng = Array(256), YI = 0; 256 > YI; ++YI)
      Ng[YI] = String.fromCharCode(YI);
    pg = Ng, u = i.BindingError = class extends Error {
      constructor(I) {
        super(I), this.name = "BindingError";
      }
    }, Object.assign(pI.prototype, { isAliasOf: function(I) {
      if (!(this instanceof pI && I instanceof pI))
        return false;
      var g = this.ma.za.xa, A = this.ma.ya;
      I.ma = I.ma;
      var e = I.ma.za.xa;
      for (I = I.ma.ya; g.Ca; )
        A = g.Na(A), g = g.Ca;
      for (; e.Ca; )
        I = e.Na(I), e = e.Ca;
      return g === e && A === I;
    }, clone: function() {
      if (this.ma.ya || kI(this), this.ma.Ma)
        return this.ma.count.value += 1, this;
      var I = dI, g = Object, A = g.create, e = Object.getPrototypeOf(this), t = this.ma;
      return I = I(A.call(g, e, { ma: { value: { count: t.count, Ka: t.Ka, Ma: t.Ma, ya: t.ya, za: t.za, Aa: t.Aa, Da: t.Da } } })), I.ma.count.value += 1, I.ma.Ka = false, I;
    }, delete() {
      if (this.ma.ya || kI(this), this.ma.Ka && !this.ma.Ma)
        throw new u("Object already scheduled for deletion");
      Wg(this);
      var I = this.ma;
      --I.count.value, I.count.value === 0 && (I.Aa ? I.Da.Fa(I.Aa) : I.za.xa.Fa(I.ya)), this.ma.Ma || (this.ma.Aa = void 0, this.ma.ya = void 0);
    }, isDeleted: function() {
      return !this.ma.ya;
    }, deleteLater: function() {
      if (this.ma.ya || kI(this), this.ma.Ka && !this.ma.Ma)
        throw new u("Object already scheduled for deletion");
      return aI.push(this), aI.length === 1 && lI && lI(LI), this.ma.Ka = true, this;
    } }), i.getInheritedInstanceCount = () => Object.keys(sI).length, i.getLiveInheritedInstances = () => {
      var I = [], g;
      for (g in sI)
        sI.hasOwnProperty(g) && I.push(sI[g]);
      return I;
    }, i.flushPendingDeletes = LI, i.setDelayFunction = (I) => {
      lI = I, aI.length && lI && lI(LI);
    }, Object.assign(GI.prototype, { eb(I) {
      return this.Za && (I = this.Za(I)), I;
    }, Xa(I) {
      var _a2;
      (_a2 = this.Fa) == null ? void 0 : _a2.call(this, I);
    }, argPackAdvance: 8, readValueFromPointer: oI, fromWireType: function(I) {
      function g() {
        return this.Qa ? BI(this.xa.La, { za: this.jb, ya: A, Da: this, Aa: I }) : BI(this.xa.La, { za: this, ya: I });
      }
      var A = this.eb(I);
      if (!A)
        return this.Xa(I), null;
      var e = CC(this.xa, A);
      if (e !== void 0)
        return e.ma.count.value === 0 ? (e.ma.ya = A, e.ma.Aa = I, e.clone()) : (e = e.clone(), this.Xa(I), e);
      if (e = this.xa.cb(A), e = yg[e], !e)
        return g.call(this);
      e = this.Pa ? e.$a : e.pointerType;
      var t = Kg(A, this.xa, e.xa);
      return t === null ? g.call(this) : this.Qa ? BI(e.xa.La, { za: e, ya: t, Da: this, Aa: I }) : BI(e.xa.La, { za: e, ya: t });
    } }), Vg = i.UnboundTypeError = ((I, g) => {
      var A = cI(g, function(e) {
        this.name = g, this.message = e, e = Error(e).stack, e !== void 0 && (this.stack = this.toString() + `
` + e.replace(/^Error(:[^\n]*)?\n/, ""));
      });
      return A.prototype = Object.create(I.prototype), A.prototype.constructor = A, A.prototype.toString = function() {
        return this.message === void 0 ? this.name : `${this.name}: ${this.message}`;
      }, A;
    })(Error, "UnboundTypeError"), D.push(0, 1, void 0, 1, null, 1, true, 1, false, 1), i.count_emval_handles = () => D.length / 2 - 5 - DI.length;
    var SC = { c: (I, g, A, e) => {
      bI(`Assertion failed: ${I ? x(y, I) : ""}, at: ` + [g ? g ? x(y, g) : "" : "unknown filename", A, e ? e ? x(y, e) : "" : "unknown function"]);
    }, m: (I, g, A) => {
      var e = new qg(I);
      throw K[e.ya + 16 >> 2] = 0, K[e.ya + 4 >> 2] = g, K[e.ya + 8 >> 2] = A, ug = I, ug;
    }, B: function() {
      return 0;
    }, P: () => {
    }, M: () => {
    }, R: function() {
      return 0;
    }, N: () => {
    }, A: function() {
    }, O: () => {
    }, v: (I) => {
      var g = uI[I];
      delete uI[I];
      var A = g.Ua, e = g.Fa, t = g.Ya, o = t.map((l) => l.hb).concat(t.map((l) => l.nb));
      U([I], o, (l) => {
        var a = {};
        return t.forEach((c, s) => {
          var G = l[s], m = c.fb, p = c.gb, n = l[s + t.length], h = c.mb, b = c.ob;
          a[c.bb] = { read: (S) => G.fromWireType(m(p, S)), write: (S, z) => {
            var X = [];
            h(b, S, n.toWireType(X, z)), vI(X);
          } };
        }), [{ name: g.name, fromWireType: (c) => {
          var s = {}, G;
          for (G in a)
            s[G] = a[G].read(c);
          return e(c), s;
        }, toWireType: (c, s) => {
          for (var G in a)
            if (!(G in s))
              throw new TypeError(`Missing field: "${G}"`);
          var m = A();
          for (G in a)
            a[G].write(m, s[G]);
          return c !== null && c.push(e, m), m;
        }, argPackAdvance: 8, readValueFromPointer: oI, Ea: e }];
      });
    }, I: () => {
    }, Y: (I, g, A, e) => {
      g = V(g), k(I, { name: g, fromWireType: function(t) {
        return !!t;
      }, toWireType: function(t, o) {
        return o ? A : e;
      }, argPackAdvance: 8, readValueFromPointer: function(t) {
        return this.fromWireType(y[t]);
      }, Ea: null });
    }, r: (I, g, A, e, t, o, l, a, c, s, G, m, p) => {
      G = V(G), o = R(t, o), a && (a = R(l, a)), s && (s = R(c, s)), p = R(m, p);
      var n = AC(G);
      NI(n, function() {
        WI(`Cannot construct ${G} due to unbound types`, [e]);
      }), U([I, g, A], e ? [e] : [], (h) => {
        if (h = h[0], e)
          var b = h.xa, S = b.La;
        else
          S = pI.prototype;
        h = cI(G, function(...OI) {
          if (Object.getPrototypeOf(this) !== z)
            throw new u("Use 'new' to construct " + G);
          if (X.Ha === void 0)
            throw new u(G + " has no accessible constructor");
          var Dg = X.Ha[OI.length];
          if (Dg === void 0)
            throw new u(`Tried to invoke ctor of ${G} with invalid number of parameters (${OI.length}) - expected (${Object.keys(X.Ha).toString()}) parameters instead!`);
          return Dg.apply(this, OI);
        });
        var z = Object.create(S, { constructor: { value: h } });
        h.prototype = z;
        var X = new iC(G, h, z, p, b, o, a, s);
        if (X.Ca) {
          var rI;
          (rI = X.Ca).Wa ?? (rI.Wa = []), X.Ca.Wa.push(X);
        }
        return b = new GI(G, X, true, false, false), rI = new GI(G + "*", X, false, false, false), S = new GI(G + " const*", X, false, true, false), yg[I] = { pointerType: rI, $a: S }, Sg(n, h), [b, rI, S];
      });
    }, q: (I, g, A, e, t, o) => {
      var l = fI(g, A);
      t = R(e, t), U([], [I], (a) => {
        a = a[0];
        var c = `constructor ${a.name}`;
        if (a.xa.Ha === void 0 && (a.xa.Ha = []), a.xa.Ha[g - 1] !== void 0)
          throw new u(`Cannot register multiple constructors with identical number of parameters (${g - 1}) for class '${a.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);
        return a.xa.Ha[g - 1] = () => {
          WI(`Cannot construct ${a.name} due to unbound types`, l);
        }, U([], l, (s) => (s.splice(1, 0, null), a.xa.Ha[g - 1] = TI(c, s, null, t, o), [])), [];
      });
    }, f: (I, g, A, e, t, o, l, a) => {
      var c = fI(A, e);
      g = V(g), g = Rg(g), o = R(t, o), U([], [I], (s) => {
        function G() {
          WI(`Cannot call ${m} due to unbound types`, c);
        }
        s = s[0];
        var m = `${s.name}.${g}`;
        g.startsWith("@@") && (g = Symbol[g.substring(2)]), a && s.xa.kb.push(g);
        var p = s.xa.La, n = p[g];
        return n === void 0 || n.Ba === void 0 && n.className !== s.name && n.Oa === A - 2 ? (G.Oa = A - 2, G.className = s.name, p[g] = G) : (Yg(p, g, m), p[g].Ba[A - 2] = G), U([], c, (h) => (h = TI(m, h, s, o, l), p[g].Ba === void 0 ? (h.Oa = A - 2, p[g] = h) : p[g].Ba[A - 2] = h, [])), [];
      });
    }, X: (I) => k(I, Xg), x: (I, g, A, e) => {
      function t() {
      }
      g = V(g), t.values = {}, k(I, { name: g, constructor: t, fromWireType: function(o) {
        return this.constructor.values[o];
      }, toWireType: (o, l) => l.value, argPackAdvance: 8, readValueFromPointer: sC(g, A, e), Ea: null }), NI(g, t);
    }, k: (I, g, A) => {
      var e = PI(I, "enum");
      g = V(g), I = e.constructor, e = Object.create(e.constructor.prototype, { value: { value: A }, constructor: { value: cI(`${e.name}_${g}`, function() {
      }) } }), I.values[A] = e, I[g] = e;
    }, C: (I, g, A) => {
      g = V(g), k(I, { name: g, fromWireType: (e) => e, toWireType: (e, t) => t, argPackAdvance: 8, readValueFromPointer: dC(g, A), Ea: null });
    }, E: (I, g, A, e, t, o) => {
      var l = fI(g, A);
      I = V(I), I = Rg(I), t = R(e, t), NI(I, function() {
        WI(`Cannot call ${I} due to unbound types`, l);
      }, g - 1), U([], l, (a) => (Sg(I, TI(I, [a[0], null].concat(a.slice(1)), null, t, o), g - 1), []));
    }, l: (I, g, A, e, t) => {
      if (g = V(g), t === -1 && (t = 4294967295), t = (a) => a, e === 0) {
        var o = 32 - 8 * A;
        t = (a) => a << o >>> o;
      }
      var l = g.includes("unsigned") ? function(a, c) {
        return c >>> 0;
      } : function(a, c) {
        return c;
      };
      k(I, { name: g, fromWireType: t, toWireType: l, argPackAdvance: 8, readValueFromPointer: cC(g, A, e !== 0), Ea: null });
    }, g: (I, g, A) => {
      function e(o) {
        return new t(Q.buffer, K[o + 4 >> 2], K[o >> 2]);
      }
      var t = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][g];
      A = V(A), k(I, { name: A, fromWireType: e, argPackAdvance: 8, readValueFromPointer: e }, { ib: true });
    }, w: (I) => {
      k(I, Xg);
    }, ca: (I, g, A, e, t, o, l, a, c, s, G, m) => {
      A = V(A), o = R(t, o), a = R(l, a), s = R(c, s), m = R(G, m), U([I], [g], (p) => (p = p[0], [new GI(A, p.xa, false, false, true, p, e, o, a, s, m)]));
    }, D: (I, g) => {
      g = V(g);
      var A = g === "std::string";
      k(I, { name: g, fromWireType: function(e) {
        var t = K[e >> 2], o = e + 4;
        if (A)
          for (var l = o, a = 0; a <= t; ++a) {
            var c = o + a;
            if (a == t || y[c] == 0) {
              if (l = l ? x(y, l, c - l) : "", s === void 0)
                var s = l;
              else
                s += "\0", s += l;
              l = c + 1;
            }
          }
        else {
          for (s = Array(t), a = 0; a < t; ++a)
            s[a] = String.fromCharCode(y[o + a]);
          s = s.join("");
        }
        return E(e), s;
      }, toWireType: function(e, t) {
        t instanceof ArrayBuffer && (t = new Uint8Array(t));
        var o = typeof t == "string";
        if (!(o || t instanceof Uint8Array || t instanceof Uint8ClampedArray || t instanceof Int8Array))
          throw new u("Cannot pass non-string to std::string");
        var l = A && o ? mg(t) : t.length, a = xI(4 + l + 1), c = a + 4;
        if (K[a >> 2] = l, A && o)
          Bg(t, y, c, l + 1);
        else if (o)
          for (o = 0; o < l; ++o) {
            var s = t.charCodeAt(o);
            if (255 < s)
              throw E(c), new u("String has UTF-16 code units that do not fit in 8 bits");
            y[c + o] = s;
          }
        else
          for (o = 0; o < l; ++o)
            y[c + o] = t[o];
        return e !== null && e.push(E, a), a;
      }, argPackAdvance: 8, readValueFromPointer: oI, Ea(e) {
        E(e);
      } });
    }, u: (I, g, A) => {
      if (A = V(A), g === 2)
        var e = GC, t = rC, o = hC, l = (a) => eI[a >> 1];
      else
        g === 4 && (e = ZC, t = bC, o = uC, l = (a) => K[a >> 2]);
      k(I, { name: A, fromWireType: (a) => {
        for (var c = K[a >> 2], s, G = a + 4, m = 0; m <= c; ++m) {
          var p = a + 4 + m * g;
          (m == c || l(p) == 0) && (G = e(G, p - G), s === void 0 ? s = G : (s += "\0", s += G), G = p + g);
        }
        return E(a), s;
      }, toWireType: (a, c) => {
        if (typeof c != "string")
          throw new u(`Cannot pass non-string to C++ string type ${A}`);
        var s = o(c), G = xI(4 + s + g);
        return K[G >> 2] = s / g, t(c, G + 4, s + g), a !== null && a.push(E, G), G;
      }, argPackAdvance: 8, readValueFromPointer: oI, Ea(a) {
        E(a);
      } });
    }, s: (I, g, A, e, t, o) => {
      uI[I] = { name: V(g), Ua: R(A, e), Fa: R(t, o), Ya: [] };
    }, j: (I, g, A, e, t, o, l, a, c, s) => {
      uI[I].Ya.push({ bb: V(g), hb: A, fb: R(e, t), gb: o, nb: l, mb: R(a, c), ob: s });
    }, Z: (I, g) => {
      g = V(g), k(I, { ub: true, name: g, argPackAdvance: 0, fromWireType: () => {
      }, toWireType: () => {
      } });
    }, J: () => {
      throw 1 / 0;
    }, aa: (I, g, A, e) => (I = zI[I], g = MI(g), I(null, g, A, e)), F: EI, $: (I, g, A) => {
      var e = BC(I, g), t = e.shift();
      I--;
      var o = Array(I);
      return g = `methodCaller<(${e.map((l) => l.name).join(", ")}) => ${t.name}>`, mC(cI(g, (l, a, c, s) => {
        for (var G = 0, m = 0; m < I; ++m)
          o[m] = e[m].readValueFromPointer(s + G), G += e[m].argPackAdvance;
        return a = A === 1 ? pC(a, o) : a.apply(l, o), l = [], a = t.toWireType(l, a), l.length && (K[c >> 2] = KI(l)), a;
      }));
    }, ba: (I) => {
      9 < I && (D[I + 1] += 1);
    }, _: (I) => {
      var g = MI(I);
      vI(g), EI(I);
    }, o: (I, g) => (I = PI(I, "_emval_take_value"), I = I.readValueFromPointer(g), KI(I)), W: () => {
      bI("");
    }, V: () => performance.now(), L: (I) => {
      var g = y.length;
      if (I >>>= 0, 2147483648 < I)
        return false;
      for (var A = 1; 4 >= A; A *= 2) {
        var e = g * (1 + 0.2 / A);
        e = Math.min(e, I + 100663296);
        var t = Math;
        e = Math.max(I, e);
        I: {
          t = (t.min.call(t, 2147483648, e + (65536 - e % 65536) % 65536) - ZI.buffer.byteLength + 65535) / 65536;
          try {
            ZI.grow(t), lg();
            var o = 1;
            break I;
          } catch {
          }
          o = void 0;
        }
        if (o)
          return true;
      }
      return false;
    }, S: (I, g) => {
      var A = 0;
      return vg().forEach((e, t) => {
        var o = g + A;
        for (t = K[I + 4 * t >> 2] = o, o = 0; o < e.length; ++o)
          Q[t++] = e.charCodeAt(o);
        Q[t] = 0, A += e.length + 1;
      }), 0;
    }, T: (I, g) => {
      var A = vg();
      K[I >> 2] = A.length;
      var e = 0;
      return A.forEach((t) => e += t.length + 1), K[g >> 2] = e, 0;
    }, t: () => 52, z: () => 52, H: function() {
      return 70;
    }, Q: (I, g, A, e) => {
      for (var t = 0, o = 0; o < A; o++) {
        var l = K[g >> 2], a = K[g + 4 >> 2];
        g += 8;
        for (var c = 0; c < a; c++) {
          var s = y[l + c], G = WC[I];
          s === 0 || s === 10 ? ((I === 1 ? $ : q)(x(G, 0)), G.length = 0) : G.push(s);
        }
        t += a;
      }
      return K[e >> 2] = t, 0;
    }, U: (I, g) => (kg(y.subarray(I, I + g)), 0), i: HC, d: XC, e: RC, p: vC, y: LC, b: VC, a: wC, h: FC, n: kC, G: NC, K: (I, g, A, e) => YC(I, g, A, e) }, Y = function() {
      var _a2;
      function I(A) {
        var _a3;
        return Y = A.exports, ZI = Y.da, lg(), H = Y.ha, dg.unshift(Y.ea), j--, (_a3 = i.monitorRunDependencies) == null ? void 0 : _a3.call(i, j), j == 0 && (tI && (A = tI, tI = null, A())), Y;
      }
      var g = { a: SC };
      if (j++, (_a2 = i.monitorRunDependencies) == null ? void 0 : _a2.call(i, j), i.instantiateWasm)
        try {
          return i.instantiateWasm(g, I);
        } catch (A) {
          q(`Module.instantiateWasm callback failed with error: ${A}`), B(A);
        }
      return $g(g, function(A) {
        I(A.instance);
      }).catch(B), {};
    }(), xI = (I) => (xI = Y.fa)(I), Jg = (I) => (Jg = Y.ga)(I), E = (I) => (E = Y.ia)(I), F = (I, g) => (F = Y.ja)(I, g), L = (I) => (L = Y.ka)(I), N = () => (N = Y.la)();
    i.dynCall_iijj = (I, g, A, e, t, o) => (i.dynCall_iijj = Y.na)(I, g, A, e, t, o), i.dynCall_vijj = (I, g, A, e, t, o) => (i.dynCall_vijj = Y.oa)(I, g, A, e, t, o), i.dynCall_jiii = (I, g, A, e) => (i.dynCall_jiii = Y.pa)(I, g, A, e), i.dynCall_jii = (I, g, A) => (i.dynCall_jii = Y.qa)(I, g, A);
    var fg = i.dynCall_viiij = (I, g, A, e, t, o) => (fg = i.dynCall_viiij = Y.ra)(I, g, A, e, t, o);
    i.dynCall_jiji = (I, g, A, e, t) => (i.dynCall_jiji = Y.sa)(I, g, A, e, t), i.dynCall_viijii = (I, g, A, e, t, o, l) => (i.dynCall_viijii = Y.ta)(I, g, A, e, t, o, l), i.dynCall_iiiiij = (I, g, A, e, t, o, l) => (i.dynCall_iiiiij = Y.ua)(I, g, A, e, t, o, l), i.dynCall_iiiiijj = (I, g, A, e, t, o, l, a, c) => (i.dynCall_iiiiijj = Y.va)(I, g, A, e, t, o, l, a, c), i.dynCall_iiiiiijj = (I, g, A, e, t, o, l, a, c, s) => (i.dynCall_iiiiiijj = Y.wa)(I, g, A, e, t, o, l, a, c, s);
    function VC(I, g) {
      var A = N();
      try {
        H.get(I)(g);
      } catch (e) {
        if (L(A), e !== e + 0)
          throw e;
        F(1, 0);
      }
    }
    function wC(I, g, A) {
      var e = N();
      try {
        H.get(I)(g, A);
      } catch (t) {
        if (L(e), t !== t + 0)
          throw t;
        F(1, 0);
      }
    }
    function RC(I, g, A, e) {
      var t = N();
      try {
        return H.get(I)(g, A, e);
      } catch (o) {
        if (L(t), o !== o + 0)
          throw o;
        F(1, 0);
      }
    }
    function XC(I, g, A) {
      var e = N();
      try {
        return H.get(I)(g, A);
      } catch (t) {
        if (L(e), t !== t + 0)
          throw t;
        F(1, 0);
      }
    }
    function HC(I, g) {
      var A = N();
      try {
        return H.get(I)(g);
      } catch (e) {
        if (L(A), e !== e + 0)
          throw e;
        F(1, 0);
      }
    }
    function vC(I, g, A, e, t, o) {
      var l = N();
      try {
        return H.get(I)(g, A, e, t, o);
      } catch (a) {
        if (L(l), a !== a + 0)
          throw a;
        F(1, 0);
      }
    }
    function kC(I, g, A, e, t) {
      var o = N();
      try {
        H.get(I)(g, A, e, t);
      } catch (l) {
        if (L(o), l !== l + 0)
          throw l;
        F(1, 0);
      }
    }
    function FC(I, g, A, e) {
      var t = N();
      try {
        H.get(I)(g, A, e);
      } catch (o) {
        if (L(t), o !== o + 0)
          throw o;
        F(1, 0);
      }
    }
    function LC(I) {
      var g = N();
      try {
        H.get(I)();
      } catch (A) {
        if (L(g), A !== A + 0)
          throw A;
        F(1, 0);
      }
    }
    function NC(I, g, A, e, t, o) {
      var l = N();
      try {
        fg(I, g, A, e, t, o);
      } catch (a) {
        if (L(l), a !== a + 0)
          throw a;
        F(1, 0);
      }
    }
    var SI;
    tI = function I() {
      SI || Tg(), SI || (tI = I);
    };
    function Tg() {
      function I() {
        if (!SI && (SI = true, i.calledRun = true, !og)) {
          if (HI(dg), d(i), i.onRuntimeInitialized && i.onRuntimeInitialized(), i.postRun)
            for (typeof i.postRun == "function" && (i.postRun = [i.postRun]); i.postRun.length; ) {
              var g = i.postRun.shift();
              cg.unshift(g);
            }
          HI(cg);
        }
      }
      if (!(0 < j)) {
        if (i.preRun)
          for (typeof i.preRun == "function" && (i.preRun = [i.preRun]); i.preRun.length; )
            Og();
        HI(sg), 0 < j || (i.setStatus ? (i.setStatus("Running..."), setTimeout(function() {
          setTimeout(function() {
            i.setStatus("");
          }, 1), I();
        }, 1)) : I());
      }
    }
    if (i.preInit)
      for (typeof i.preInit == "function" && (i.preInit = [i.preInit]); 0 < i.preInit.length; )
        i.preInit.pop()();
    return Tg(), f;
  };
})();
var Mg = TC;
var _ = class {
  constructor() {
    throw new Error("RendererLoader is a static class and cannot be instantiated.");
  }
  static async _tryLoad(C) {
    return await Mg({ locateFile: () => C });
  }
  static async _loadWithBackup() {
    return this._ModulePromise || (this._ModulePromise = this._tryLoad(this._wasmURL).catch(async (C) => {
      let i = `https://unpkg.com/${Ig}@${qI}/dist/dotlottie-player.wasm`;
      console.warn(`Primary WASM load failed from ${this._wasmURL}. Error: ${C.message}`), console.warn(`Attempting to load WASM from backup URL: ${i}`);
      try {
        return await this._tryLoad(i);
      } catch (d) {
        throw console.error(`Primary WASM URL failed: ${C.message}`), console.error(`Backup WASM URL failed: ${d.message}`), new Error("WASM loading failed from all sources.");
      }
    })), this._ModulePromise;
  }
  static async load() {
    return this._loadWithBackup();
  }
  static setWasmUrl(C) {
    this._wasmURL = C, this._ModulePromise = null;
  }
};
Z(_, "_ModulePromise", null), Z(_, "_wasmURL", `https://cdn.jsdelivr.net/npm/${Ig}@${qI}/dist/dotlottie-player.wasm`);
var AI = class {
  constructor() {
    Z(this, "_eventListeners", /* @__PURE__ */ new Map());
  }
  addEventListener(C, i) {
    let d = this._eventListeners.get(C);
    d || (d = /* @__PURE__ */ new Set(), this._eventListeners.set(C, d)), d.add(i);
  }
  removeEventListener(C, i) {
    let d = this._eventListeners.get(C);
    d && (i ? (d.delete(i), d.size === 0 && this._eventListeners.delete(C)) : this._eventListeners.delete(C));
  }
  dispatch(C) {
    var _a;
    (_a = this._eventListeners.get(C.type)) == null ? void 0 : _a.forEach((d) => d(C));
  }
  removeAllEventListeners() {
    this._eventListeners.clear();
  }
};
function DC(r) {
  return /^#([\da-f]{6}|[\da-f]{8})$/iu.test(r);
}
function Ug(r) {
  if (!DC(r))
    return 0;
  let C = r.replace("#", "");
  return C = C.length === 6 ? `${C}ff` : C, parseInt(C, 16);
}
function gg(r) {
  if (r.byteLength < 4)
    return false;
  let C = new Uint8Array(r.slice(0, wI.byteLength));
  for (let i = 0; i < wI.length; i += 1)
    if (wI[i] !== C[i])
      return false;
  return true;
}
function Pg(r) {
  return Eg.every((C) => Object.prototype.hasOwnProperty.call(r, C));
}
function Cg(r) {
  if (typeof r == "string")
    try {
      return Pg(JSON.parse(r));
    } catch {
      return false;
    }
  else
    return Pg(r);
}
var Ag = (r, C) => r === "reverse" ? C.Mode.Reverse : r === "bounce" ? C.Mode.Bounce : r === "reverse-bounce" ? C.Mode.ReverseBounce : C.Mode.Forward;
var ig = (r, C) => r === "contain" ? C.Fit.Contain : r === "cover" ? C.Fit.Cover : r === "fill" ? C.Fit.Fill : r === "fit-height" ? C.Fit.FitHeight : r === "fit-width" ? C.Fit.FitWidth : C.Fit.None;
var eg = (r, C) => {
  let i = new C.VectorFloat();
  return i.push_back(r[0]), i.push_back(r[1]), i;
};
var tg = (r, C) => {
  let i = new C.VectorFloat();
  return r.length !== 2 || (i.push_back(r[0]), i.push_back(r[1])), i;
};
var W = class W2 {
  constructor(C) {
    Z(this, "_canvas");
    Z(this, "_context", null);
    Z(this, "_eventManager");
    Z(this, "_animationFrameId", null);
    Z(this, "_frameManager");
    Z(this, "_dotLottieCore", null);
    Z(this, "_renderConfig", {});
    Z(this, "_isFrozen", false);
    Z(this, "_backgroundColor", null);
    Z(this, "_pointerUpMethod");
    Z(this, "_pointerDownMethod");
    Z(this, "_pointerMoveMethod");
    Z(this, "_pointerEnterMethod");
    Z(this, "_pointerExitMethod");
    Z(this, "_onCompleteMethod");
    this._canvas = C.canvas, this._context = this._canvas.getContext("2d"), this._eventManager = new AI(), this._frameManager = new VI(), this._renderConfig = C.renderConfig ?? {}, _.load().then((i) => {
      W2._wasmModule = i, this._dotLottieCore = new i.DotLottiePlayer({ autoplay: C.autoplay ?? false, backgroundColor: 0, loopAnimation: C.loop ?? false, mode: Ag(C.mode ?? "forward", i), segment: tg(C.segment ?? [], i), speed: C.speed ?? 1, useFrameInterpolation: C.useFrameInterpolation ?? true, marker: C.marker ?? "", layout: C.layout ? { align: eg(C.layout.align, i), fit: ig(C.layout.fit, i) } : i.createDefaultLayout() }), this._eventManager.dispatch({ type: "ready" }), C.data ? this._loadFromData(C.data) : C.src && this._loadFromSrc(C.src), C.backgroundColor && this.setBackgroundColor(C.backgroundColor);
    }).catch((i) => {
      this._eventManager.dispatch({ type: "loadError", error: new Error(`Failed to load wasm module: ${i}`) });
    }), this._pointerUpMethod = this._onPointerUp.bind(this), this._pointerDownMethod = this._onPointerDown.bind(this), this._pointerMoveMethod = this._onPointerMove.bind(this), this._pointerEnterMethod = this._onPointerEnter.bind(this), this._pointerExitMethod = this._onPointerLeave.bind(this), this._onCompleteMethod = this._onComplete.bind(this);
  }
  _dispatchError(C) {
    console.error(C), this._eventManager.dispatch({ type: "loadError", error: new Error(C) });
  }
  async _fetchData(C) {
    let i = await fetch(C);
    if (!i.ok)
      throw new Error(`Failed to fetch animation data from URL: ${C}. ${i.status}: ${i.statusText}`);
    let d = await i.arrayBuffer();
    return gg(d) ? d : new TextDecoder().decode(d);
  }
  _loadFromData(C) {
    if (this._dotLottieCore === null)
      return;
    let i = this._canvas.width, d = this._canvas.height, B = false;
    if (typeof C == "string") {
      if (!Cg(C)) {
        this._dispatchError("Invalid Lottie JSON string: The provided string does not conform to the Lottie JSON format.");
        return;
      }
      B = this._dotLottieCore.loadAnimationData(C, i, d);
    } else if (C instanceof ArrayBuffer) {
      if (!gg(C)) {
        this._dispatchError("Invalid dotLottie ArrayBuffer: The provided ArrayBuffer does not conform to the dotLottie format.");
        return;
      }
      B = this._dotLottieCore.loadDotLottieData(C, i, d);
    } else if (typeof C == "object") {
      if (!Cg(C)) {
        this._dispatchError("Invalid Lottie JSON object: The provided object does not conform to the Lottie JSON format.");
        return;
      }
      B = this._dotLottieCore.loadAnimationData(JSON.stringify(C), i, d);
    } else {
      this._dispatchError(`Unsupported data type for animation data. Expected: 
          - string (Lottie JSON),
          - ArrayBuffer (dotLottie),
          - object (Lottie JSON). 
          Received: ${typeof C}`);
      return;
    }
    B ? (this._eventManager.dispatch({ type: "load" }), M && this.resize(), this._eventManager.dispatch({ type: "frame", currentFrame: this._dotLottieCore.currentFrame() }), this._render(), this._dotLottieCore.config().autoplay && (this._dotLottieCore.play(), this._dotLottieCore.isPlaying() ? (this._eventManager.dispatch({ type: "play" }), this._animationFrameId = this._frameManager.requestAnimationFrame(this._draw.bind(this))) : console.error("something went wrong, the animation was suppose to autoplay"))) : this._dispatchError("Failed to load animation data");
  }
  _loadFromSrc(C) {
    this._fetchData(C).then((i) => this._loadFromData(i)).catch((i) => this._dispatchError(`Failed to load animation data from URL: ${C}. ${i}`));
  }
  get activeAnimationId() {
    var _a;
    return (_a = this._dotLottieCore) == null ? void 0 : _a.activeAnimationId();
  }
  get activeThemeId() {
    var _a;
    return (_a = this._dotLottieCore) == null ? void 0 : _a.activeThemeId();
  }
  get layout() {
    var _a;
    let C = (_a = this._dotLottieCore) == null ? void 0 : _a.config().layout;
    if (C)
      return { align: [C.align.get(0), C.align.get(1)], fit: (() => {
        var _a2, _b, _c, _d, _e, _f;
        switch (C.fit) {
          case ((_a2 = W2._wasmModule) == null ? void 0 : _a2.Fit.Contain):
            return "contain";
          case ((_b = W2._wasmModule) == null ? void 0 : _b.Fit.Cover):
            return "cover";
          case ((_c = W2._wasmModule) == null ? void 0 : _c.Fit.Fill):
            return "fill";
          case ((_d = W2._wasmModule) == null ? void 0 : _d.Fit.FitHeight):
            return "fit-height";
          case ((_e = W2._wasmModule) == null ? void 0 : _e.Fit.FitWidth):
            return "fit-width";
          case ((_f = W2._wasmModule) == null ? void 0 : _f.Fit.None):
            return "none";
          default:
            return "contain";
        }
      })() };
  }
  get marker() {
    var _a;
    return (_a = this._dotLottieCore) == null ? void 0 : _a.config().marker;
  }
  get manifest() {
    var _a;
    try {
      let C = (_a = this._dotLottieCore) == null ? void 0 : _a.manifestString();
      if (this._dotLottieCore === null || !C)
        return null;
      let i = JSON.parse(C);
      return Object.keys(i).length === 0 ? null : i;
    } catch {
      return null;
    }
  }
  get renderConfig() {
    return this._renderConfig;
  }
  get segment() {
    var _a;
    let C = (_a = this._dotLottieCore) == null ? void 0 : _a.config().segment;
    if (C && C.size() === 2)
      return [C.get(0), C.get(1)];
  }
  get loop() {
    var _a;
    return ((_a = this._dotLottieCore) == null ? void 0 : _a.config().loopAnimation) ?? false;
  }
  get mode() {
    var _a, _b, _c, _d;
    let C = (_a = this._dotLottieCore) == null ? void 0 : _a.config().mode;
    return C === ((_b = W2._wasmModule) == null ? void 0 : _b.Mode.Reverse) ? "reverse" : C === ((_c = W2._wasmModule) == null ? void 0 : _c.Mode.Bounce) ? "bounce" : C === ((_d = W2._wasmModule) == null ? void 0 : _d.Mode.ReverseBounce) ? "reverse-bounce" : "forward";
  }
  get isFrozen() {
    return this._isFrozen;
  }
  get backgroundColor() {
    return this._backgroundColor ?? "";
  }
  get autoplay() {
    var _a;
    return ((_a = this._dotLottieCore) == null ? void 0 : _a.config().autoplay) ?? false;
  }
  get useFrameInterpolation() {
    var _a;
    return ((_a = this._dotLottieCore) == null ? void 0 : _a.config().useFrameInterpolation) ?? false;
  }
  get speed() {
    var _a;
    return ((_a = this._dotLottieCore) == null ? void 0 : _a.config().speed) ?? 0;
  }
  get isReady() {
    return this._dotLottieCore !== null;
  }
  get isLoaded() {
    var _a;
    return ((_a = this._dotLottieCore) == null ? void 0 : _a.isLoaded()) ?? false;
  }
  get isPlaying() {
    var _a;
    return ((_a = this._dotLottieCore) == null ? void 0 : _a.isPlaying()) ?? false;
  }
  get isPaused() {
    var _a;
    return ((_a = this._dotLottieCore) == null ? void 0 : _a.isPaused()) ?? false;
  }
  get isStopped() {
    var _a;
    return ((_a = this._dotLottieCore) == null ? void 0 : _a.isStopped()) ?? false;
  }
  get currentFrame() {
    var _a;
    return ((_a = this._dotLottieCore) == null ? void 0 : _a.currentFrame()) ?? 0;
  }
  get loopCount() {
    var _a;
    return ((_a = this._dotLottieCore) == null ? void 0 : _a.loopCount()) ?? 0;
  }
  get totalFrames() {
    var _a;
    return ((_a = this._dotLottieCore) == null ? void 0 : _a.totalFrames()) ?? 0;
  }
  get duration() {
    var _a;
    return ((_a = this._dotLottieCore) == null ? void 0 : _a.duration()) ?? 0;
  }
  get segmentDuration() {
    var _a;
    return ((_a = this._dotLottieCore) == null ? void 0 : _a.segmentDuration()) ?? 0;
  }
  get canvas() {
    return this._canvas;
  }
  load(C) {
    this._dotLottieCore === null || W2._wasmModule === null || (this._dotLottieCore.setConfig({ autoplay: C.autoplay ?? false, backgroundColor: 0, loopAnimation: C.loop ?? false, mode: Ag(C.mode ?? "forward", W2._wasmModule), segment: tg(C.segment ?? [], W2._wasmModule), speed: C.speed ?? 1, useFrameInterpolation: C.useFrameInterpolation ?? true, marker: C.marker ?? "", layout: C.layout ? { align: eg(C.layout.align, W2._wasmModule), fit: ig(C.layout.fit, W2._wasmModule) } : W2._wasmModule.createDefaultLayout() }), C.data ? this._loadFromData(C.data) : C.src && this._loadFromSrc(C.src), this.setBackgroundColor(C.backgroundColor ?? ""));
  }
  _render() {
    if (this._dotLottieCore === null || this._context === null)
      return false;
    if (this._dotLottieCore.render()) {
      let i = this._dotLottieCore.buffer(), d = new Uint8ClampedArray(i, 0, this._canvas.width * this._canvas.height * 4), B = null;
      return typeof ImageData > "u" ? (B = this._context.createImageData(this._canvas.width, this._canvas.height), B.data.set(d)) : B = new ImageData(d, this._canvas.width, this._canvas.height), this._context.putImageData(B, 0, 0), this._eventManager.dispatch({ type: "render", currentFrame: this._dotLottieCore.currentFrame() }), true;
    }
    return false;
  }
  _draw() {
    if (this._dotLottieCore === null || this._context === null || !this._dotLottieCore.isPlaying())
      return;
    let C = this._dotLottieCore.requestFrame();
    this._dotLottieCore.setFrame(C) && (this._eventManager.dispatch({ type: "frame", currentFrame: this._dotLottieCore.currentFrame() }), this._render() && this._dotLottieCore.isComplete() && (this._dotLottieCore.config().loopAnimation ? this._eventManager.dispatch({ type: "loop", loopCount: this._dotLottieCore.loopCount() }) : this._eventManager.dispatch({ type: "complete" }))), this._animationFrameId = this._frameManager.requestAnimationFrame(this._draw.bind(this));
  }
  play() {
    if (this._dotLottieCore === null)
      return;
    (this._dotLottieCore.play() || this._dotLottieCore.isPlaying()) && (this._isFrozen = false, this._eventManager.dispatch({ type: "play" }), this._animationFrameId = this._frameManager.requestAnimationFrame(this._draw.bind(this)));
  }
  pause() {
    if (this._dotLottieCore === null)
      return;
    (this._dotLottieCore.pause() || this._dotLottieCore.isPaused()) && this._eventManager.dispatch({ type: "pause" });
  }
  stop() {
    if (this._dotLottieCore === null)
      return;
    this._dotLottieCore.stop() && (this._eventManager.dispatch({ type: "frame", currentFrame: this._dotLottieCore.currentFrame() }), this._render(), this._eventManager.dispatch({ type: "stop" }));
  }
  setFrame(C) {
    if (this._dotLottieCore === null || C < 0 || C > this._dotLottieCore.totalFrames())
      return;
    this._dotLottieCore.seek(C) && (this._eventManager.dispatch({ type: "frame", currentFrame: this._dotLottieCore.currentFrame() }), this._render());
  }
  setSpeed(C) {
    this._dotLottieCore !== null && this._dotLottieCore.setConfig({ ...this._dotLottieCore.config(), speed: C });
  }
  setBackgroundColor(C) {
    this._dotLottieCore !== null && (M && this._canvas instanceof HTMLCanvasElement ? this._canvas.style.backgroundColor = C : this._dotLottieCore.setConfig({ ...this._dotLottieCore.config(), backgroundColor: Ug(C) }), this._backgroundColor = C);
  }
  setLoop(C) {
    this._dotLottieCore !== null && this._dotLottieCore.setConfig({ ...this._dotLottieCore.config(), loopAnimation: C });
  }
  setUseFrameInterpolation(C) {
    this._dotLottieCore !== null && this._dotLottieCore.setConfig({ ...this._dotLottieCore.config(), useFrameInterpolation: C });
  }
  addEventListener(C, i) {
    this._eventManager.addEventListener(C, i);
  }
  removeEventListener(C, i) {
    this._eventManager.removeEventListener(C, i);
  }
  destroy() {
    var _a;
    (_a = this._dotLottieCore) == null ? void 0 : _a.delete(), this._dotLottieCore = null, this._context = null, this._eventManager.dispatch({ type: "destroy" }), this._eventManager.removeAllEventListeners(), this._cleanupStateMachineListeners();
  }
  freeze() {
    this._animationFrameId !== null && (this._frameManager.cancelAnimationFrame(this._animationFrameId), this._animationFrameId = null, this._isFrozen = true, this._eventManager.dispatch({ type: "freeze" }));
  }
  unfreeze() {
    this._animationFrameId === null && (this._animationFrameId = this._frameManager.requestAnimationFrame(this._draw.bind(this)), this._isFrozen = false, this._eventManager.dispatch({ type: "unfreeze" }));
  }
  resize() {
    var _a;
    if (M && this._canvas instanceof HTMLCanvasElement) {
      let i = this._renderConfig.devicePixelRatio || window.devicePixelRatio || 1, { height: d, width: B } = this._canvas.getBoundingClientRect();
      this._canvas.width = B * i, this._canvas.height = d * i;
    }
    ((_a = this._dotLottieCore) == null ? void 0 : _a.resize(this._canvas.width, this._canvas.height)) && this._render();
  }
  setSegment(C, i) {
    this._dotLottieCore === null || W2._wasmModule === null || this._dotLottieCore.setConfig({ ...this._dotLottieCore.config(), segment: tg([C, i], W2._wasmModule) });
  }
  setMode(C) {
    this._dotLottieCore === null || W2._wasmModule === null || this._dotLottieCore.setConfig({ ...this._dotLottieCore.config(), mode: Ag(C, W2._wasmModule) });
  }
  setRenderConfig(C) {
    this._renderConfig = C;
  }
  loadAnimation(C) {
    if (this._dotLottieCore === null || this._dotLottieCore.activeAnimationId() === C)
      return;
    this._dotLottieCore.loadAnimation(C, this._canvas.width, this._canvas.height) ? (this._eventManager.dispatch({ type: "load" }), this.resize()) : this._eventManager.dispatch({ type: "loadError", error: new Error(`Failed to animation :${C}`) });
  }
  setMarker(C) {
    this._dotLottieCore !== null && this._dotLottieCore.setConfig({ ...this._dotLottieCore.config(), marker: C });
  }
  markers() {
    var _a;
    let C = (_a = this._dotLottieCore) == null ? void 0 : _a.markers();
    if (C) {
      let i = [];
      for (let d = 0; d < C.size(); d += 1) {
        let B = C.get(d);
        i.push({ name: B.name, time: B.time, duration: B.duration });
      }
      return i;
    }
    return [];
  }
  loadTheme(C) {
    if (this._dotLottieCore === null)
      return false;
    let i = this._dotLottieCore.loadTheme(C);
    return this._render(), i;
  }
  loadThemeData(C) {
    if (this._dotLottieCore === null)
      return false;
    let i = this._dotLottieCore.loadThemeData(C);
    return this._render(), i;
  }
  setLayout(C) {
    this._dotLottieCore === null || W2._wasmModule === null || this._dotLottieCore.setConfig({ ...this._dotLottieCore.config(), layout: { align: eg(C.align, W2._wasmModule), fit: ig(C.fit, W2._wasmModule) } });
  }
  setViewport(C, i, d, B) {
    return this._dotLottieCore === null ? false : this._dotLottieCore.setViewport(C, i, d, B);
  }
  static setWasmUrl(C) {
    _.setWasmUrl(C);
  }
  loadStateMachine(C) {
    var _a;
    return ((_a = this._dotLottieCore) == null ? void 0 : _a.loadStateMachine(C)) ?? false;
  }
  startStateMachine() {
    var _a;
    let C = ((_a = this._dotLottieCore) == null ? void 0 : _a.startStateMachine()) ?? false;
    return C && this._setupStateMachineListeners(), C;
  }
  stopStateMachine() {
    var _a;
    let C = ((_a = this._dotLottieCore) == null ? void 0 : _a.stopStateMachine()) ?? false;
    return C && this._cleanupStateMachineListeners(), C;
  }
  _getPointerPosition(C) {
    let i = this._canvas.getBoundingClientRect(), d = this._canvas.width / i.width, B = this._canvas.height / i.height, f = this._renderConfig.devicePixelRatio || window.devicePixelRatio || 1, P = (C.clientX - i.left) * d / f, T = (C.clientY - i.top) * B / f;
    return { x: P, y: T };
  }
  _onPointerUp(C) {
    let { x: i, y: d } = this._getPointerPosition(C);
    this.postStateMachineEvent(`OnPointerUp: ${i} ${d}`);
  }
  _onPointerDown(C) {
    let { x: i, y: d } = this._getPointerPosition(C);
    this.postStateMachineEvent(`OnPointerDown: ${i} ${d}`);
  }
  _onPointerMove(C) {
    let { x: i, y: d } = this._getPointerPosition(C);
    this.postStateMachineEvent(`OnPointerMove: ${i} ${d}`);
  }
  _onPointerEnter(C) {
    let { x: i, y: d } = this._getPointerPosition(C);
    this.postStateMachineEvent(`OnPointerEnter: ${i} ${d}`);
  }
  _onPointerLeave(C) {
    let { x: i, y: d } = this._getPointerPosition(C);
    this.postStateMachineEvent(`OnPointerExit: ${i} ${d}`);
  }
  _onComplete() {
    this.postStateMachineEvent("OnComplete");
  }
  postStateMachineEvent(C) {
    var _a;
    let i = ((_a = this._dotLottieCore) == null ? void 0 : _a.postEventPayload(C)) ?? 1;
    return i === 2 ? this.play() : i === 3 ? this.pause() : i === 4 && this._render(), i;
  }
  getStateMachineListeners() {
    if (!this._dotLottieCore)
      return [];
    let C = this._dotLottieCore.stateMachineFrameworkSetup(), i = [];
    for (let d = 0; d < C.size(); d += 1)
      i.push(C.get(d));
    return i;
  }
  _setupStateMachineListeners() {
    if (M && this._canvas instanceof HTMLCanvasElement && this._dotLottieCore !== null && this.isLoaded) {
      let C = this.getStateMachineListeners();
      C.includes("PointerUp") && this._canvas.addEventListener("pointerup", this._pointerUpMethod), C.includes("PointerDown") && this._canvas.addEventListener("pointerdown", this._pointerDownMethod), C.includes("PointerMove") && this._canvas.addEventListener("pointermove", this._pointerMoveMethod), C.includes("PointerEnter") && this._canvas.addEventListener("pointerenter", this._pointerEnterMethod), C.includes("PointerExit") && this._canvas.addEventListener("pointerleave", this._pointerExitMethod), C.includes("Complete") && this.addEventListener("complete", this._onCompleteMethod);
    }
  }
  _cleanupStateMachineListeners() {
    M && this._canvas instanceof HTMLCanvasElement && (this._canvas.removeEventListener("pointerup", this._pointerUpMethod), this._canvas.removeEventListener("pointerdown", this._pointerDownMethod), this._canvas.removeEventListener("pointermove", this._pointerMoveMethod), this._canvas.removeEventListener("pointerenter", this._pointerEnterMethod), this._canvas.removeEventListener("pointerleave", this._pointerExitMethod), this.removeEventListener("complete", this._onCompleteMethod));
  }
  loadStateMachineData(C) {
    var _a;
    return ((_a = this._dotLottieCore) == null ? void 0 : _a.loadStateMachineData(C)) ?? false;
  }
  animationSize() {
    var _a, _b;
    let C = ((_a = this._dotLottieCore) == null ? void 0 : _a.animationSize().get(0)) ?? 0, i = ((_b = this._dotLottieCore) == null ? void 0 : _b.animationSize().get(1)) ?? 0;
    return { width: C, height: i };
  }
  setStateMachineBooleanContext(C, i) {
    var _a;
    return ((_a = this._dotLottieCore) == null ? void 0 : _a.setStateMachineBooleanContext(C, i)) ?? false;
  }
  setStateMachineNumericContext(C, i) {
    var _a;
    return ((_a = this._dotLottieCore) == null ? void 0 : _a.setStateMachineNumericContext(C, i)) ?? false;
  }
  setStateMachineStringContext(C, i) {
    var _a;
    return ((_a = this._dotLottieCore) == null ? void 0 : _a.setStateMachineStringContext(C, i)) ?? false;
  }
};
Z(W, "_wasmModule", null);
var zg = W;
var hI = class extends Worker {
  constructor() {
    super("data:application/javascript;base64,InVzZSBzdHJpY3QiOwooKCkgPT4gewogIHZhciBfX2RlZlByb3AgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7CiAgdmFyIF9fZGVmTm9ybWFsUHJvcCA9IChvYmosIGtleSwgdmFsdWUpID0+IGtleSBpbiBvYmogPyBfX2RlZlByb3Aob2JqLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSwgdmFsdWUgfSkgOiBvYmpba2V5XSA9IHZhbHVlOwogIHZhciBfX3B1YmxpY0ZpZWxkID0gKG9iaiwga2V5LCB2YWx1ZSkgPT4gX19kZWZOb3JtYWxQcm9wKG9iaiwgdHlwZW9mIGtleSAhPT0gInN5bWJvbCIgPyBrZXkgKyAiIiA6IGtleSwgdmFsdWUpOwoKICAvLyBzcmMvYW5pbWF0aW9uLWZyYW1lLW1hbmFnZXIudHMKICB2YXIgV2ViQW5pbWF0aW9uRnJhbWVTdHJhdGVneSA9IGNsYXNzIHsKICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShjYWxsYmFjaykgewogICAgICByZXR1cm4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNhbGxiYWNrKTsKICAgIH0KICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGlkKSB7CiAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGlkKTsKICAgIH0KICB9OwogIHZhciBOb2RlQW5pbWF0aW9uRnJhbWVTdHJhdGVneSA9IGNsYXNzIHsKICAgIGNvbnN0cnVjdG9yKCkgewogICAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsICJfbGFzdEhhbmRsZUlkIiwgMCk7CiAgICAgIF9fcHVibGljRmllbGQodGhpcywgIl9sYXN0SW1tZWRpYXRlIiwgbnVsbCk7CiAgICB9CiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2FsbGJhY2spIHsKICAgICAgaWYgKHRoaXMuX2xhc3RIYW5kbGVJZCA+PSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUikgewogICAgICAgIHRoaXMuX2xhc3RIYW5kbGVJZCA9IDA7CiAgICAgIH0KICAgICAgdGhpcy5fbGFzdEhhbmRsZUlkICs9IDE7CiAgICAgIHRoaXMuX2xhc3RJbW1lZGlhdGUgPSBzZXRJbW1lZGlhdGUoKCkgPT4gewogICAgICAgIGNhbGxiYWNrKERhdGUubm93KCkpOwogICAgICB9KTsKICAgICAgcmV0dXJuIHRoaXMuX2xhc3RIYW5kbGVJZDsKICAgIH0KICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKF9pZCkgewogICAgICBpZiAodGhpcy5fbGFzdEltbWVkaWF0ZSkgewogICAgICAgIGNsZWFySW1tZWRpYXRlKHRoaXMuX2xhc3RJbW1lZGlhdGUpOwogICAgICB9CiAgICB9CiAgfTsKICB2YXIgQW5pbWF0aW9uRnJhbWVNYW5hZ2VyID0gY2xhc3MgewogICAgY29uc3RydWN0b3IoKSB7CiAgICAgIF9fcHVibGljRmllbGQodGhpcywgIl9zdHJhdGVneSIpOwogICAgICB0aGlzLl9zdHJhdGVneSA9IHR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPT09ICJmdW5jdGlvbiIgPyBuZXcgV2ViQW5pbWF0aW9uRnJhbWVTdHJhdGVneSgpIDogbmV3IE5vZGVBbmltYXRpb25GcmFtZVN0cmF0ZWd5KCk7CiAgICB9CiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2FsbGJhY2spIHsKICAgICAgcmV0dXJuIHRoaXMuX3N0cmF0ZWd5LnJlcXVlc3RBbmltYXRpb25GcmFtZShjYWxsYmFjayk7CiAgICB9CiAgICBjYW5jZWxBbmltYXRpb25GcmFtZShpZCkgewogICAgICB0aGlzLl9zdHJhdGVneS5jYW5jZWxBbmltYXRpb25GcmFtZShpZCk7CiAgICB9CiAgfTsKCiAgLy8gc3JjL2NvbnN0YW50cy50cwogIHZhciBJU19CUk9XU0VSID0gdHlwZW9mIHdpbmRvdyAhPT0gInVuZGVmaW5lZCIgJiYgdHlwZW9mIHdpbmRvdy5kb2N1bWVudCAhPT0gInVuZGVmaW5lZCI7CiAgdmFyIFpJUF9TSUdOQVRVUkUgPSBuZXcgVWludDhBcnJheShbODAsIDc1LCAzLCA0XSk7CiAgdmFyIExPVFRJRV9KU09OX01BTkRBVE9SWV9GSUVMRFMgPSBbInYiLCAiaXAiLCAib3AiLCAibGF5ZXJzIiwgImZyIiwgInciLCAiaCJdOwogIHZhciBQQUNLQUdFX1ZFUlNJT04gPSAiMC4zMC4yIjsKICB2YXIgUEFDS0FHRV9OQU1FID0gIkBsb3R0aWVmaWxlcy9kb3Rsb3R0aWUtd2ViIjsKCiAgLy8gc3JjL2NvcmUvZG90bG90dGllLXBsYXllci5qcwogIHZhciBjcmVhdGVEb3RMb3R0aWVQbGF5ZXJNb2R1bGUgPSAoKCkgPT4gewogICAgdmFyIF9zY3JpcHREaXIgPSB0eXBlb2YgZG9jdW1lbnQgIT0gInVuZGVmaW5lZCIgPyBkb2N1bWVudC5jdXJyZW50U2NyaXB0Py5zcmMgOiB2b2lkIDA7CiAgICByZXR1cm4gZnVuY3Rpb24obW9kdWxlQXJnID0ge30pIHsKICAgICAgdmFyIGsgPSBtb2R1bGVBcmcsIGFhLCBiYSwgcmVhZHlQcm9taXNlID0gbmV3IFByb21pc2UoKGEsIGIpID0+IHsKICAgICAgICBhYSA9IGE7CiAgICAgICAgYmEgPSBiOwogICAgICB9KSwgY2EgPSBPYmplY3QuYXNzaWduKHt9LCBrKSwgZGEgPSAiLi90aGlzLnByb2dyYW0iLCB0ID0gIiI7CiAgICAgICJ1bmRlZmluZWQiICE9IHR5cGVvZiBkb2N1bWVudCAmJiBkb2N1bWVudC5jdXJyZW50U2NyaXB0ICYmICh0ID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmMpOwogICAgICBfc2NyaXB0RGlyICYmICh0ID0gX3NjcmlwdERpcik7CiAgICAgIHQuc3RhcnRzV2l0aCgiYmxvYjoiKSA/IHQgPSAiIiA6IHQgPSB0LnN1YnN0cigwLCB0LnJlcGxhY2UoL1s/I10uKi8sICIiKS5sYXN0SW5kZXhPZigiLyIpICsgMSk7CiAgICAgIHZhciBlYSA9IGsucHJpbnQgfHwgY29uc29sZS5sb2cuYmluZChjb25zb2xlKSwgdyA9IGsucHJpbnRFcnIgfHwgY29uc29sZS5lcnJvci5iaW5kKGNvbnNvbGUpOwogICAgICBPYmplY3QuYXNzaWduKGssIGNhKTsKICAgICAgY2EgPSBudWxsOwogICAgICBrLnRoaXNQcm9ncmFtICYmIChkYSA9IGsudGhpc1Byb2dyYW0pOwogICAgICB2YXIgeDsKICAgICAgay53YXNtQmluYXJ5ICYmICh4ID0gay53YXNtQmluYXJ5KTsKICAgICAgdmFyIGZhLCBoYSA9IGZhbHNlLCB5LCBBLCBCLCBDLCBFLCBGLCBqYSwga2E7CiAgICAgIGZ1bmN0aW9uIGxhKCkgewogICAgICAgIHZhciBhID0gZmEuYnVmZmVyOwogICAgICAgIGsuSEVBUDggPSB5ID0gbmV3IEludDhBcnJheShhKTsKICAgICAgICBrLkhFQVAxNiA9IEIgPSBuZXcgSW50MTZBcnJheShhKTsKICAgICAgICBrLkhFQVBVOCA9IEEgPSBuZXcgVWludDhBcnJheShhKTsKICAgICAgICBrLkhFQVBVMTYgPSBDID0gbmV3IFVpbnQxNkFycmF5KGEpOwogICAgICAgIGsuSEVBUDMyID0gRSA9IG5ldyBJbnQzMkFycmF5KGEpOwogICAgICAgIGsuSEVBUFUzMiA9IEYgPSBuZXcgVWludDMyQXJyYXkoYSk7CiAgICAgICAgay5IRUFQRjMyID0gamEgPSBuZXcgRmxvYXQzMkFycmF5KGEpOwogICAgICAgIGsuSEVBUEY2NCA9IGthID0gbmV3IEZsb2F0NjRBcnJheShhKTsKICAgICAgfQogICAgICB2YXIgbWEgPSBbXSwgbmEgPSBbXSwgb2EgPSBbXTsKICAgICAgZnVuY3Rpb24gcGEoKSB7CiAgICAgICAgdmFyIGEgPSBrLnByZVJ1bi5zaGlmdCgpOwogICAgICAgIG1hLnVuc2hpZnQoYSk7CiAgICAgIH0KICAgICAgdmFyIEcgPSAwLCBxYSA9IG51bGwsIEggPSBudWxsOwogICAgICBmdW5jdGlvbiByYShhKSB7CiAgICAgICAgay5vbkFib3J0Py4oYSk7CiAgICAgICAgYSA9ICJBYm9ydGVkKCIgKyBhICsgIikiOwogICAgICAgIHcoYSk7CiAgICAgICAgaGEgPSB0cnVlOwogICAgICAgIGEgPSBuZXcgV2ViQXNzZW1ibHkuUnVudGltZUVycm9yKGEgKyAiLiBCdWlsZCB3aXRoIC1zQVNTRVJUSU9OUyBmb3IgbW9yZSBpbmZvLiIpOwogICAgICAgIGJhKGEpOwogICAgICAgIHRocm93IGE7CiAgICAgIH0KICAgICAgdmFyIHNhID0gKGEpID0+IGEuc3RhcnRzV2l0aCgiZGF0YTphcHBsaWNhdGlvbi9vY3RldC1zdHJlYW07YmFzZTY0LCIpLCBJOwogICAgICBJID0gIkRvdExvdHRpZVBsYXllci53YXNtIjsKICAgICAgaWYgKCFzYShJKSkgewogICAgICAgIHZhciB0YSA9IEk7CiAgICAgICAgSSA9IGsubG9jYXRlRmlsZSA/IGsubG9jYXRlRmlsZSh0YSwgdCkgOiB0ICsgdGE7CiAgICAgIH0KICAgICAgZnVuY3Rpb24gdWEoYSkgewogICAgICAgIGlmIChhID09IEkgJiYgeCkgcmV0dXJuIG5ldyBVaW50OEFycmF5KHgpOwogICAgICAgIHRocm93ICJib3RoIGFzeW5jIGFuZCBzeW5jIGZldGNoaW5nIG9mIHRoZSB3YXNtIGZhaWxlZCI7CiAgICAgIH0KICAgICAgZnVuY3Rpb24gdmEoYSkgewogICAgICAgIHJldHVybiB4IHx8ICJmdW5jdGlvbiIgIT0gdHlwZW9mIGZldGNoID8gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB1YShhKSkgOiBmZXRjaChhLCB7IGNyZWRlbnRpYWxzOiAic2FtZS1vcmlnaW4iIH0pLnRoZW4oKGIpID0+IHsKICAgICAgICAgIGlmICghYi5vaykgdGhyb3cgYGZhaWxlZCB0byBsb2FkIHdhc20gYmluYXJ5IGZpbGUgYXQgJyR7YX0nYDsKICAgICAgICAgIHJldHVybiBiLmFycmF5QnVmZmVyKCk7CiAgICAgICAgfSkuY2F0Y2goKCkgPT4gdWEoYSkpOwogICAgICB9CiAgICAgIGZ1bmN0aW9uIHdhKGEsIGIsIGMpIHsKICAgICAgICByZXR1cm4gdmEoYSkudGhlbigoZCkgPT4gV2ViQXNzZW1ibHkuaW5zdGFudGlhdGUoZCwgYikpLnRoZW4oYywgKGQpID0+IHsKICAgICAgICAgIHcoYGZhaWxlZCB0byBhc3luY2hyb25vdXNseSBwcmVwYXJlIHdhc206ICR7ZH1gKTsKICAgICAgICAgIHJhKGQpOwogICAgICAgIH0pOwogICAgICB9CiAgICAgIGZ1bmN0aW9uIHhhKGEsIGIpIHsKICAgICAgICB2YXIgYyA9IEk7CiAgICAgICAgcmV0dXJuIHggfHwgImZ1bmN0aW9uIiAhPSB0eXBlb2YgV2ViQXNzZW1ibHkuaW5zdGFudGlhdGVTdHJlYW1pbmcgfHwgc2EoYykgfHwgImZ1bmN0aW9uIiAhPSB0eXBlb2YgZmV0Y2ggPyB3YShjLCBhLCBiKSA6IGZldGNoKGMsIHsgY3JlZGVudGlhbHM6ICJzYW1lLW9yaWdpbiIgfSkudGhlbigKICAgICAgICAgIChkKSA9PiBXZWJBc3NlbWJseS5pbnN0YW50aWF0ZVN0cmVhbWluZyhkLCBhKS50aGVuKGIsIGZ1bmN0aW9uKGUpIHsKICAgICAgICAgICAgdyhgd2FzbSBzdHJlYW1pbmcgY29tcGlsZSBmYWlsZWQ6ICR7ZX1gKTsKICAgICAgICAgICAgdygiZmFsbGluZyBiYWNrIHRvIEFycmF5QnVmZmVyIGluc3RhbnRpYXRpb24iKTsKICAgICAgICAgICAgcmV0dXJuIHdhKGMsIGEsIGIpOwogICAgICAgICAgfSkKICAgICAgICApOwogICAgICB9CiAgICAgIHZhciB5YSA9IChhKSA9PiB7CiAgICAgICAgZm9yICg7IDAgPCBhLmxlbmd0aDsgKSBhLnNoaWZ0KCkoayk7CiAgICAgIH0sIHphID0gInVuZGVmaW5lZCIgIT0gdHlwZW9mIFRleHREZWNvZGVyID8gbmV3IFRleHREZWNvZGVyKCJ1dGY4IikgOiB2b2lkIDAsIEogPSAoYSwgYiwgYykgPT4gewogICAgICAgIHZhciBkID0gYiArIGM7CiAgICAgICAgZm9yIChjID0gYjsgYVtjXSAmJiAhKGMgPj0gZCk7ICkgKytjOwogICAgICAgIGlmICgxNiA8IGMgLSBiICYmIGEuYnVmZmVyICYmIHphKSByZXR1cm4gemEuZGVjb2RlKGEuc3ViYXJyYXkoYiwgYykpOwogICAgICAgIGZvciAoZCA9ICIiOyBiIDwgYzsgKSB7CiAgICAgICAgICB2YXIgZSA9IGFbYisrXTsKICAgICAgICAgIGlmIChlICYgMTI4KSB7CiAgICAgICAgICAgIHZhciBmID0gYVtiKytdICYgNjM7CiAgICAgICAgICAgIGlmICgxOTIgPT0gKGUgJiAyMjQpKSBkICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKGUgJiAzMSkgPDwgNiB8IGYpOwogICAgICAgICAgICBlbHNlIHsKICAgICAgICAgICAgICB2YXIgbCA9IGFbYisrXSAmIDYzOwogICAgICAgICAgICAgIGUgPSAyMjQgPT0gKGUgJiAyNDApID8gKGUgJiAxNSkgPDwgMTIgfCBmIDw8IDYgfCBsIDogKGUgJiA3KSA8PCAxOCB8IGYgPDwgMTIgfCBsIDw8IDYgfCBhW2IrK10gJiA2MzsKICAgICAgICAgICAgICA2NTUzNiA+IGUgPyBkICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoZSkgOiAoZSAtPSA2NTUzNiwgZCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDU1Mjk2IHwgZSA+PiAxMCwgNTYzMjAgfCBlICYgMTAyMykpOwogICAgICAgICAgICB9CiAgICAgICAgICB9IGVsc2UgZCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGUpOwogICAgICAgIH0KICAgICAgICByZXR1cm4gZDsKICAgICAgfTsKICAgICAgY2xhc3MgQWEgewogICAgICAgIGNvbnN0cnVjdG9yKGEpIHsKICAgICAgICAgIHRoaXMueWEgPSBhIC0gMjQ7CiAgICAgICAgfQogICAgICB9CiAgICAgIHZhciBCYSA9IDAsIENhID0gMCwgRGEgPSAoYSkgPT4gewogICAgICAgIGZvciAodmFyIGIgPSAwLCBjID0gMDsgYyA8IGEubGVuZ3RoOyArK2MpIHsKICAgICAgICAgIHZhciBkID0gYS5jaGFyQ29kZUF0KGMpOwogICAgICAgICAgMTI3ID49IGQgPyBiKysgOiAyMDQ3ID49IGQgPyBiICs9IDIgOiA1NTI5NiA8PSBkICYmIDU3MzQzID49IGQgPyAoYiArPSA0LCArK2MpIDogYiArPSAzOwogICAgICAgIH0KICAgICAgICByZXR1cm4gYjsKICAgICAgfSwgRWEgPSAoYSwgYiwgYywgZCkgPT4gewogICAgICAgIGlmICgwIDwgZCkgewogICAgICAgICAgZCA9IGMgKyBkIC0gMTsKICAgICAgICAgIGZvciAodmFyIGUgPSAwOyBlIDwgYS5sZW5ndGg7ICsrZSkgewogICAgICAgICAgICB2YXIgZiA9IGEuY2hhckNvZGVBdChlKTsKICAgICAgICAgICAgaWYgKDU1Mjk2IDw9IGYgJiYgNTczNDMgPj0gZikgewogICAgICAgICAgICAgIHZhciBsID0gYS5jaGFyQ29kZUF0KCsrZSk7CiAgICAgICAgICAgICAgZiA9IDY1NTM2ICsgKChmICYgMTAyMykgPDwgMTApIHwgbCAmIDEwMjM7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgaWYgKDEyNyA+PSBmKSB7CiAgICAgICAgICAgICAgaWYgKGMgPj0gZCkgYnJlYWs7CiAgICAgICAgICAgICAgYltjKytdID0gZjsKICAgICAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgICBpZiAoMjA0NyA+PSBmKSB7CiAgICAgICAgICAgICAgICBpZiAoYyArIDEgPj0gZCkgYnJlYWs7CiAgICAgICAgICAgICAgICBiW2MrK10gPSAxOTIgfCBmID4+IDY7CiAgICAgICAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgICAgIGlmICg2NTUzNSA+PSBmKSB7CiAgICAgICAgICAgICAgICAgIGlmIChjICsgMiA+PSBkKSBicmVhazsKICAgICAgICAgICAgICAgICAgYltjKytdID0gMjI0IHwgZiA+PiAxMjsKICAgICAgICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgICAgICAgIGlmIChjICsgMyA+PSBkKSBicmVhazsKICAgICAgICAgICAgICAgICAgYltjKytdID0gMjQwIHwgZiA+PiAxODsKICAgICAgICAgICAgICAgICAgYltjKytdID0gMTI4IHwgZiA+PiAxMiAmIDYzOwogICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgYltjKytdID0gMTI4IHwgZiA+PiA2ICYgNjM7CiAgICAgICAgICAgICAgfQogICAgICAgICAgICAgIGJbYysrXSA9IDEyOCB8IGYgJiA2MzsKICAgICAgICAgICAgfQogICAgICAgICAgfQogICAgICAgICAgYltjXSA9IDA7CiAgICAgICAgfQogICAgICB9LCBGYSA9IHt9LCBHYSA9IChhKSA9PiB7CiAgICAgICAgZm9yICg7IGEubGVuZ3RoOyApIHsKICAgICAgICAgIHZhciBiID0gYS5wb3AoKTsKICAgICAgICAgIGEucG9wKCkoYik7CiAgICAgICAgfQogICAgICB9OwogICAgICBmdW5jdGlvbiBLKGEpIHsKICAgICAgICByZXR1cm4gdGhpcy5mcm9tV2lyZVR5cGUoRlthID4+IDJdKTsKICAgICAgfQogICAgICB2YXIgTCA9IHt9LCBNID0ge30sIEhhID0ge30sIElhLCBQID0gKGEsIGIsIGMpID0+IHsKICAgICAgICBmdW5jdGlvbiBkKGgpIHsKICAgICAgICAgIGggPSBjKGgpOwogICAgICAgICAgaWYgKGgubGVuZ3RoICE9PSBhLmxlbmd0aCkgdGhyb3cgbmV3IElhKCJNaXNtYXRjaGVkIHR5cGUgY29udmVydGVyIGNvdW50Iik7CiAgICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IGEubGVuZ3RoOyArK24pIE8oYVtuXSwgaFtuXSk7CiAgICAgICAgfQogICAgICAgIGEuZm9yRWFjaChmdW5jdGlvbihoKSB7CiAgICAgICAgICBIYVtoXSA9IGI7CiAgICAgICAgfSk7CiAgICAgICAgdmFyIGUgPSBBcnJheShiLmxlbmd0aCksIGYgPSBbXSwgbCA9IDA7CiAgICAgICAgYi5mb3JFYWNoKChoLCBuKSA9PiB7CiAgICAgICAgICBNLmhhc093blByb3BlcnR5KGgpID8gZVtuXSA9IE1baF0gOiAoZi5wdXNoKGgpLCBMLmhhc093blByb3BlcnR5KGgpIHx8IChMW2hdID0gW10pLCBMW2hdLnB1c2goKCkgPT4gewogICAgICAgICAgICBlW25dID0gTVtoXTsKICAgICAgICAgICAgKytsOwogICAgICAgICAgICBsID09PSBmLmxlbmd0aCAmJiBkKGUpOwogICAgICAgICAgfSkpOwogICAgICAgIH0pOwogICAgICAgIDAgPT09IGYubGVuZ3RoICYmIGQoZSk7CiAgICAgIH0sIEphLCBRID0gKGEpID0+IHsKICAgICAgICBmb3IgKHZhciBiID0gIiI7IEFbYV07ICkgYiArPSBKYVtBW2ErK11dOwogICAgICAgIHJldHVybiBiOwogICAgICB9LCBSOwogICAgICBmdW5jdGlvbiBLYShhLCBiLCBjID0ge30pIHsKICAgICAgICB2YXIgZCA9IGIubmFtZTsKICAgICAgICBpZiAoIWEpIHRocm93IG5ldyBSKGB0eXBlICIke2R9IiBtdXN0IGhhdmUgYSBwb3NpdGl2ZSBpbnRlZ2VyIHR5cGVpZCBwb2ludGVyYCk7CiAgICAgICAgaWYgKE0uaGFzT3duUHJvcGVydHkoYSkpIHsKICAgICAgICAgIGlmIChjLmliKSByZXR1cm47CiAgICAgICAgICB0aHJvdyBuZXcgUihgQ2Fubm90IHJlZ2lzdGVyIHR5cGUgJyR7ZH0nIHR3aWNlYCk7CiAgICAgICAgfQogICAgICAgIE1bYV0gPSBiOwogICAgICAgIGRlbGV0ZSBIYVthXTsKICAgICAgICBMLmhhc093blByb3BlcnR5KGEpICYmIChiID0gTFthXSwgZGVsZXRlIExbYV0sIGIuZm9yRWFjaCgoZSkgPT4gZSgpKSk7CiAgICAgIH0KICAgICAgZnVuY3Rpb24gTyhhLCBiLCBjID0ge30pIHsKICAgICAgICBpZiAoISgiYXJnUGFja0FkdmFuY2UiIGluIGIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCJyZWdpc3RlclR5cGUgcmVnaXN0ZXJlZEluc3RhbmNlIHJlcXVpcmVzIGFyZ1BhY2tBZHZhbmNlIik7CiAgICAgICAgcmV0dXJuIEthKGEsIGIsIGMpOwogICAgICB9CiAgICAgIHZhciBMYSA9IChhKSA9PiB7CiAgICAgICAgdGhyb3cgbmV3IFIoYS5tYS56YS54YS5uYW1lICsgIiBpbnN0YW5jZSBhbHJlYWR5IGRlbGV0ZWQiKTsKICAgICAgfSwgTWEgPSBmYWxzZSwgT2EgPSAoKSA9PiB7CiAgICAgIH0sIFBhID0gKGEsIGIsIGMpID0+IHsKICAgICAgICBpZiAoYiA9PT0gYykgcmV0dXJuIGE7CiAgICAgICAgaWYgKHZvaWQgMCA9PT0gYy5DYSkgcmV0dXJuIG51bGw7CiAgICAgICAgYSA9IFBhKGEsIGIsIGMuQ2EpOwogICAgICAgIHJldHVybiBudWxsID09PSBhID8gbnVsbCA6IGMuYWIoYSk7CiAgICAgIH0sIFFhID0ge30sIFJhID0gW10sIFNhID0gKCkgPT4gewogICAgICAgIGZvciAoOyBSYS5sZW5ndGg7ICkgewogICAgICAgICAgdmFyIGEgPSBSYS5wb3AoKTsKICAgICAgICAgIGEubWEuS2EgPSBmYWxzZTsKICAgICAgICAgIGFbImRlbGV0ZSJdKCk7CiAgICAgICAgfQogICAgICB9LCBUYSwgVWEgPSB7fSwgVmEgPSAoYSwgYikgPT4gewogICAgICAgIGlmICh2b2lkIDAgPT09IGIpIHRocm93IG5ldyBSKCJwdHIgc2hvdWxkIG5vdCBiZSB1bmRlZmluZWQiKTsKICAgICAgICBmb3IgKDsgYS5DYTsgKSBiID0gYS5OYShiKSwgYSA9IGEuQ2E7CiAgICAgICAgcmV0dXJuIFVhW2JdOwogICAgICB9LCBYYSA9IChhLCBiKSA9PiB7CiAgICAgICAgaWYgKCFiLnphIHx8ICFiLnlhKSB0aHJvdyBuZXcgSWEoIm1ha2VDbGFzc0hhbmRsZSByZXF1aXJlcyBwdHIgYW5kIHB0clR5cGUiKTsKICAgICAgICBpZiAoISFiLkRhICE9PSAhIWIuQWEpIHRocm93IG5ldyBJYSgiQm90aCBzbWFydFB0clR5cGUgYW5kIHNtYXJ0UHRyIG11c3QgYmUgc3BlY2lmaWVkIik7CiAgICAgICAgYi5jb3VudCA9IHsgdmFsdWU6IDEgfTsKICAgICAgICByZXR1cm4gV2EoT2JqZWN0LmNyZWF0ZShhLCB7IG1hOiB7IHZhbHVlOiBiLCB3cml0YWJsZTogdHJ1ZSB9IH0pKTsKICAgICAgfSwgV2EgPSAoYSkgPT4gewogICAgICAgIGlmICgidW5kZWZpbmVkIiA9PT0gdHlwZW9mIEZpbmFsaXphdGlvblJlZ2lzdHJ5KSByZXR1cm4gV2EgPSAoYikgPT4gYiwgYTsKICAgICAgICBNYSA9IG5ldyBGaW5hbGl6YXRpb25SZWdpc3RyeSgoYikgPT4gewogICAgICAgICAgYiA9IGIubWE7CiAgICAgICAgICAtLWIuY291bnQudmFsdWU7CiAgICAgICAgICAwID09PSBiLmNvdW50LnZhbHVlICYmIChiLkFhID8gYi5EYS5GYShiLkFhKSA6IGIuemEueGEuRmEoYi55YSkpOwogICAgICAgIH0pOwogICAgICAgIFdhID0gKGIpID0+IHsKICAgICAgICAgIHZhciBjID0gYi5tYTsKICAgICAgICAgIGMuQWEgJiYgTWEucmVnaXN0ZXIoYiwgeyBtYTogYyB9LCBiKTsKICAgICAgICAgIHJldHVybiBiOwogICAgICAgIH07CiAgICAgICAgT2EgPSAoYikgPT4gewogICAgICAgICAgTWEudW5yZWdpc3RlcihiKTsKICAgICAgICB9OwogICAgICAgIHJldHVybiBXYShhKTsKICAgICAgfTsKICAgICAgZnVuY3Rpb24gWWEoKSB7CiAgICAgIH0KICAgICAgdmFyIFphID0gKGEsIGIpID0+IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShiLCAibmFtZSIsIHsgdmFsdWU6IGEgfSksICRhID0gKGEsIGIsIGMpID0+IHsKICAgICAgICBpZiAodm9pZCAwID09PSBhW2JdLkJhKSB7CiAgICAgICAgICB2YXIgZCA9IGFbYl07CiAgICAgICAgICBhW2JdID0gZnVuY3Rpb24oLi4uZSkgewogICAgICAgICAgICBpZiAoIWFbYl0uQmEuaGFzT3duUHJvcGVydHkoZS5sZW5ndGgpKQogICAgICAgICAgICAgIHRocm93IG5ldyBSKAogICAgICAgICAgICAgICAgYEZ1bmN0aW9uICcke2N9JyBjYWxsZWQgd2l0aCBhbiBpbnZhbGlkIG51bWJlciBvZiBhcmd1bWVudHMgKCR7ZS5sZW5ndGh9KSAtIGV4cGVjdHMgb25lIG9mICgke2FbYl0uQmF9KSFgCiAgICAgICAgICAgICAgKTsKICAgICAgICAgICAgcmV0dXJuIGFbYl0uQmFbZS5sZW5ndGhdLmFwcGx5KHRoaXMsIGUpOwogICAgICAgICAgfTsKICAgICAgICAgIGFbYl0uQmEgPSBbXTsKICAgICAgICAgIGFbYl0uQmFbZC5PYV0gPSBkOwogICAgICAgIH0KICAgICAgfSwgYWIgPSAoYSwgYiwgYykgPT4gewogICAgICAgIGlmIChrLmhhc093blByb3BlcnR5KGEpKSB7CiAgICAgICAgICBpZiAodm9pZCAwID09PSBjIHx8IHZvaWQgMCAhPT0ga1thXS5CYSAmJiB2b2lkIDAgIT09IGtbYV0uQmFbY10pCiAgICAgICAgICAgIHRocm93IG5ldyBSKGBDYW5ub3QgcmVnaXN0ZXIgcHVibGljIG5hbWUgJyR7YX0nIHR3aWNlYCk7CiAgICAgICAgICAkYShrLCBhLCBhKTsKICAgICAgICAgIGlmIChrLmhhc093blByb3BlcnR5KGMpKQogICAgICAgICAgICB0aHJvdyBuZXcgUihgQ2Fubm90IHJlZ2lzdGVyIG11bHRpcGxlIG92ZXJsb2FkcyBvZiBhIGZ1bmN0aW9uIHdpdGggdGhlIHNhbWUgbnVtYmVyIG9mIGFyZ3VtZW50cyAoJHtjfSkhYCk7CiAgICAgICAgICBrW2FdLkJhW2NdID0gYjsKICAgICAgICB9IGVsc2Uga1thXSA9IGIsIHZvaWQgMCAhPT0gYyAmJiAoa1thXS52YiA9IGMpOwogICAgICB9LCBiYiA9IChhKSA9PiB7CiAgICAgICAgaWYgKHZvaWQgMCA9PT0gYSkgcmV0dXJuICJfdW5rbm93biI7CiAgICAgICAgYSA9IGEucmVwbGFjZSgvW15hLXpBLVowLTlfXS9nLCAiJCIpOwogICAgICAgIHZhciBiID0gYS5jaGFyQ29kZUF0KDApOwogICAgICAgIHJldHVybiA0OCA8PSBiICYmIDU3ID49IGIgPyBgXyR7YX1gIDogYTsKICAgICAgfTsKICAgICAgZnVuY3Rpb24gY2IoYSwgYiwgYywgZCwgZSwgZiwgbCwgaCkgewogICAgICAgIHRoaXMubmFtZSA9IGE7CiAgICAgICAgdGhpcy5jb25zdHJ1Y3RvciA9IGI7CiAgICAgICAgdGhpcy5MYSA9IGM7CiAgICAgICAgdGhpcy5GYSA9IGQ7CiAgICAgICAgdGhpcy5DYSA9IGU7CiAgICAgICAgdGhpcy5jYiA9IGY7CiAgICAgICAgdGhpcy5OYSA9IGw7CiAgICAgICAgdGhpcy5hYiA9IGg7CiAgICAgICAgdGhpcy5rYiA9IFtdOwogICAgICB9CiAgICAgIHZhciBkYiA9IChhLCBiLCBjKSA9PiB7CiAgICAgICAgZm9yICg7IGIgIT09IGM7ICkgewogICAgICAgICAgaWYgKCFiLk5hKSB0aHJvdyBuZXcgUihgRXhwZWN0ZWQgbnVsbCBvciBpbnN0YW5jZSBvZiAke2MubmFtZX0sIGdvdCBhbiBpbnN0YW5jZSBvZiAke2IubmFtZX1gKTsKICAgICAgICAgIGEgPSBiLk5hKGEpOwogICAgICAgICAgYiA9IGIuQ2E7CiAgICAgICAgfQogICAgICAgIHJldHVybiBhOwogICAgICB9OwogICAgICBmdW5jdGlvbiBlYihhLCBiKSB7CiAgICAgICAgaWYgKG51bGwgPT09IGIpIHsKICAgICAgICAgIGlmICh0aGlzLlRhKSB0aHJvdyBuZXcgUihgbnVsbCBpcyBub3QgYSB2YWxpZCAke3RoaXMubmFtZX1gKTsKICAgICAgICAgIHJldHVybiAwOwogICAgICAgIH0KICAgICAgICBpZiAoIWIubWEpIHRocm93IG5ldyBSKGBDYW5ub3QgcGFzcyAiJHtmYihiKX0iIGFzIGEgJHt0aGlzLm5hbWV9YCk7CiAgICAgICAgaWYgKCFiLm1hLnlhKSB0aHJvdyBuZXcgUihgQ2Fubm90IHBhc3MgZGVsZXRlZCBvYmplY3QgYXMgYSBwb2ludGVyIG9mIHR5cGUgJHt0aGlzLm5hbWV9YCk7CiAgICAgICAgcmV0dXJuIGRiKGIubWEueWEsIGIubWEuemEueGEsIHRoaXMueGEpOwogICAgICB9CiAgICAgIGZ1bmN0aW9uIGdiKGEsIGIpIHsKICAgICAgICBpZiAobnVsbCA9PT0gYikgewogICAgICAgICAgaWYgKHRoaXMuVGEpIHRocm93IG5ldyBSKGBudWxsIGlzIG5vdCBhIHZhbGlkICR7dGhpcy5uYW1lfWApOwogICAgICAgICAgaWYgKHRoaXMuUWEpIHsKICAgICAgICAgICAgdmFyIGMgPSB0aGlzLlVhKCk7CiAgICAgICAgICAgIG51bGwgIT09IGEgJiYgYS5wdXNoKHRoaXMuRmEsIGMpOwogICAgICAgICAgICByZXR1cm4gYzsKICAgICAgICAgIH0KICAgICAgICAgIHJldHVybiAwOwogICAgICAgIH0KICAgICAgICBpZiAoIWIgfHwgIWIubWEpIHRocm93IG5ldyBSKGBDYW5ub3QgcGFzcyAiJHtmYihiKX0iIGFzIGEgJHt0aGlzLm5hbWV9YCk7CiAgICAgICAgaWYgKCFiLm1hLnlhKSB0aHJvdyBuZXcgUihgQ2Fubm90IHBhc3MgZGVsZXRlZCBvYmplY3QgYXMgYSBwb2ludGVyIG9mIHR5cGUgJHt0aGlzLm5hbWV9YCk7CiAgICAgICAgaWYgKCF0aGlzLlBhICYmIGIubWEuemEuUGEpCiAgICAgICAgICB0aHJvdyBuZXcgUigKICAgICAgICAgICAgYENhbm5vdCBjb252ZXJ0IGFyZ3VtZW50IG9mIHR5cGUgJHtiLm1hLkRhID8gYi5tYS5EYS5uYW1lIDogYi5tYS56YS5uYW1lfSB0byBwYXJhbWV0ZXIgdHlwZSAke3RoaXMubmFtZX1gCiAgICAgICAgICApOwogICAgICAgIGMgPSBkYihiLm1hLnlhLCBiLm1hLnphLnhhLCB0aGlzLnhhKTsKICAgICAgICBpZiAodGhpcy5RYSkgewogICAgICAgICAgaWYgKHZvaWQgMCA9PT0gYi5tYS5BYSkgdGhyb3cgbmV3IFIoIlBhc3NpbmcgcmF3IHBvaW50ZXIgdG8gc21hcnQgcG9pbnRlciBpcyBpbGxlZ2FsIik7CiAgICAgICAgICBzd2l0Y2ggKHRoaXMucGIpIHsKICAgICAgICAgICAgY2FzZSAwOgogICAgICAgICAgICAgIGlmIChiLm1hLkRhID09PSB0aGlzKSBjID0gYi5tYS5BYTsKICAgICAgICAgICAgICBlbHNlCiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUigKICAgICAgICAgICAgICAgICAgYENhbm5vdCBjb252ZXJ0IGFyZ3VtZW50IG9mIHR5cGUgJHtiLm1hLkRhID8gYi5tYS5EYS5uYW1lIDogYi5tYS56YS5uYW1lfSB0byBwYXJhbWV0ZXIgdHlwZSAke3RoaXMubmFtZX1gCiAgICAgICAgICAgICAgICApOwogICAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgICBjYXNlIDE6CiAgICAgICAgICAgICAgYyA9IGIubWEuQWE7CiAgICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICAgIGNhc2UgMjoKICAgICAgICAgICAgICBpZiAoYi5tYS5EYSA9PT0gdGhpcykgYyA9IGIubWEuQWE7CiAgICAgICAgICAgICAgZWxzZSB7CiAgICAgICAgICAgICAgICB2YXIgZCA9IGIuY2xvbmUoKTsKICAgICAgICAgICAgICAgIGMgPSB0aGlzLmxiKAogICAgICAgICAgICAgICAgICBjLAogICAgICAgICAgICAgICAgICBoYigoKSA9PiBkWyJkZWxldGUiXSgpKQogICAgICAgICAgICAgICAgKTsKICAgICAgICAgICAgICAgIG51bGwgIT09IGEgJiYgYS5wdXNoKHRoaXMuRmEsIGMpOwogICAgICAgICAgICAgIH0KICAgICAgICAgICAgICBicmVhazsKICAgICAgICAgICAgZGVmYXVsdDoKICAgICAgICAgICAgICB0aHJvdyBuZXcgUigiVW5zdXBwb3J0aW5nIHNoYXJpbmcgcG9saWN5Iik7CiAgICAgICAgICB9CiAgICAgICAgfQogICAgICAgIHJldHVybiBjOwogICAgICB9CiAgICAgIGZ1bmN0aW9uIGliKGEsIGIpIHsKICAgICAgICBpZiAobnVsbCA9PT0gYikgewogICAgICAgICAgaWYgKHRoaXMuVGEpIHRocm93IG5ldyBSKGBudWxsIGlzIG5vdCBhIHZhbGlkICR7dGhpcy5uYW1lfWApOwogICAgICAgICAgcmV0dXJuIDA7CiAgICAgICAgfQogICAgICAgIGlmICghYi5tYSkgdGhyb3cgbmV3IFIoYENhbm5vdCBwYXNzICIke2ZiKGIpfSIgYXMgYSAke3RoaXMubmFtZX1gKTsKICAgICAgICBpZiAoIWIubWEueWEpIHRocm93IG5ldyBSKGBDYW5ub3QgcGFzcyBkZWxldGVkIG9iamVjdCBhcyBhIHBvaW50ZXIgb2YgdHlwZSAke3RoaXMubmFtZX1gKTsKICAgICAgICBpZiAoYi5tYS56YS5QYSkgdGhyb3cgbmV3IFIoYENhbm5vdCBjb252ZXJ0IGFyZ3VtZW50IG9mIHR5cGUgJHtiLm1hLnphLm5hbWV9IHRvIHBhcmFtZXRlciB0eXBlICR7dGhpcy5uYW1lfWApOwogICAgICAgIHJldHVybiBkYihiLm1hLnlhLCBiLm1hLnphLnhhLCB0aGlzLnhhKTsKICAgICAgfQogICAgICBmdW5jdGlvbiBqYihhLCBiLCBjLCBkLCBlLCBmLCBsLCBoLCBuLCBtLCBwKSB7CiAgICAgICAgdGhpcy5uYW1lID0gYTsKICAgICAgICB0aGlzLnhhID0gYjsKICAgICAgICB0aGlzLlRhID0gYzsKICAgICAgICB0aGlzLlBhID0gZDsKICAgICAgICB0aGlzLlFhID0gZTsKICAgICAgICB0aGlzLmpiID0gZjsKICAgICAgICB0aGlzLnBiID0gbDsKICAgICAgICB0aGlzLlphID0gaDsKICAgICAgICB0aGlzLlVhID0gbjsKICAgICAgICB0aGlzLmxiID0gbTsKICAgICAgICB0aGlzLkZhID0gcDsKICAgICAgICBlIHx8IHZvaWQgMCAhPT0gYi5DYSA/IHRoaXMudG9XaXJlVHlwZSA9IGdiIDogKHRoaXMudG9XaXJlVHlwZSA9IGQgPyBlYiA6IGliLCB0aGlzLkVhID0gbnVsbCk7CiAgICAgIH0KICAgICAgdmFyIGtiID0gKGEsIGIsIGMpID0+IHsKICAgICAgICBpZiAoIWsuaGFzT3duUHJvcGVydHkoYSkpIHRocm93IG5ldyBJYSgiUmVwbGFjaW5nIG5vbmV4aXN0ZW50IHB1YmxpYyBzeW1ib2wiKTsKICAgICAgICB2b2lkIDAgIT09IGtbYV0uQmEgJiYgdm9pZCAwICE9PSBjID8ga1thXS5CYVtjXSA9IGIgOiAoa1thXSA9IGIsIGtbYV0uT2EgPSBjKTsKICAgICAgfSwgUywgbGIgPSAoYSwgYiwgYyA9IFtdKSA9PiB7CiAgICAgICAgYS5pbmNsdWRlcygiaiIpID8gKGEgPSBhLnJlcGxhY2UoL3AvZywgImkiKSwgYiA9ICgwLCBrWyJkeW5DYWxsXyIgKyBhXSkoYiwgLi4uYykpIDogYiA9IFMuZ2V0KGIpKC4uLmMpOwogICAgICAgIHJldHVybiBiOwogICAgICB9LCBtYiA9IChhLCBiKSA9PiAoLi4uYykgPT4gbGIoYSwgYiwgYyksIFQgPSAoYSwgYikgPT4gewogICAgICAgIGEgPSBRKGEpOwogICAgICAgIHZhciBjID0gYS5pbmNsdWRlcygiaiIpID8gbWIoYSwgYikgOiBTLmdldChiKTsKICAgICAgICBpZiAoImZ1bmN0aW9uIiAhPSB0eXBlb2YgYykgdGhyb3cgbmV3IFIoYHVua25vd24gZnVuY3Rpb24gcG9pbnRlciB3aXRoIHNpZ25hdHVyZSAke2F9OiAke2J9YCk7CiAgICAgICAgcmV0dXJuIGM7CiAgICAgIH0sIG5iLCBwYiA9IChhKSA9PiB7CiAgICAgICAgYSA9IG9iKGEpOwogICAgICAgIHZhciBiID0gUShhKTsKICAgICAgICBVKGEpOwogICAgICAgIHJldHVybiBiOwogICAgICB9LCBxYiA9IChhLCBiKSA9PiB7CiAgICAgICAgZnVuY3Rpb24gYyhmKSB7CiAgICAgICAgICBlW2ZdIHx8IE1bZl0gfHwgKEhhW2ZdID8gSGFbZl0uZm9yRWFjaChjKSA6IChkLnB1c2goZiksIGVbZl0gPSB0cnVlKSk7CiAgICAgICAgfQogICAgICAgIHZhciBkID0gW10sIGUgPSB7fTsKICAgICAgICBiLmZvckVhY2goYyk7CiAgICAgICAgdGhyb3cgbmV3IG5iKGAke2F9OiBgICsgZC5tYXAocGIpLmpvaW4oWyIsICJdKSk7CiAgICAgIH0sIHJiID0gKGEsIGIpID0+IHsKICAgICAgICBmb3IgKHZhciBjID0gW10sIGQgPSAwOyBkIDwgYTsgZCsrKSBjLnB1c2goRltiICsgNCAqIGQgPj4gMl0pOwogICAgICAgIHJldHVybiBjOwogICAgICB9OwogICAgICBmdW5jdGlvbiBzYihhKSB7CiAgICAgICAgZm9yICh2YXIgYiA9IDE7IGIgPCBhLmxlbmd0aDsgKytiKSBpZiAobnVsbCAhPT0gYVtiXSAmJiB2b2lkIDAgPT09IGFbYl0uRWEpIHJldHVybiB0cnVlOwogICAgICAgIHJldHVybiBmYWxzZTsKICAgICAgfQogICAgICBmdW5jdGlvbiB0YihhLCBiLCBjLCBkLCBlKSB7CiAgICAgICAgdmFyIGYgPSBiLmxlbmd0aDsKICAgICAgICBpZiAoMiA+IGYpIHRocm93IG5ldyBSKCJhcmdUeXBlcyBhcnJheSBzaXplIG1pc21hdGNoISBNdXN0IGF0IGxlYXN0IGdldCByZXR1cm4gdmFsdWUgYW5kICd0aGlzJyB0eXBlcyEiKTsKICAgICAgICB2YXIgbCA9IG51bGwgIT09IGJbMV0gJiYgbnVsbCAhPT0gYywgaCA9IHNiKGIpLCBuID0gInZvaWQiICE9PSBiWzBdLm5hbWUsIG0gPSBmIC0gMiwgcCA9IEFycmF5KG0pLCB1ID0gW10sIHYgPSBbXTsKICAgICAgICByZXR1cm4gWmEoYSwgZnVuY3Rpb24oLi4uZykgewogICAgICAgICAgaWYgKGcubGVuZ3RoICE9PSBtKSB0aHJvdyBuZXcgUihgZnVuY3Rpb24gJHthfSBjYWxsZWQgd2l0aCAke2cubGVuZ3RofSBhcmd1bWVudHMsIGV4cGVjdGVkICR7bX1gKTsKICAgICAgICAgIHYubGVuZ3RoID0gMDsKICAgICAgICAgIHUubGVuZ3RoID0gbCA/IDIgOiAxOwogICAgICAgICAgdVswXSA9IGU7CiAgICAgICAgICBpZiAobCkgewogICAgICAgICAgICB2YXIgcSA9IGJbMV0udG9XaXJlVHlwZSh2LCB0aGlzKTsKICAgICAgICAgICAgdVsxXSA9IHE7CiAgICAgICAgICB9CiAgICAgICAgICBmb3IgKHZhciByID0gMDsgciA8IG07ICsrcikgcFtyXSA9IGJbciArIDJdLnRvV2lyZVR5cGUodiwgZ1tyXSksIHUucHVzaChwW3JdKTsKICAgICAgICAgIGcgPSBkKC4uLnUpOwogICAgICAgICAgaWYgKGgpIEdhKHYpOwogICAgICAgICAgZWxzZQogICAgICAgICAgICBmb3IgKHIgPSBsID8gMSA6IDI7IHIgPCBiLmxlbmd0aDsgcisrKSB7CiAgICAgICAgICAgICAgdmFyIHogPSAxID09PSByID8gcSA6IHBbciAtIDJdOwogICAgICAgICAgICAgIG51bGwgIT09IGJbcl0uRWEgJiYgYltyXS5FYSh6KTsKICAgICAgICAgICAgfQogICAgICAgICAgcSA9IG4gPyBiWzBdLmZyb21XaXJlVHlwZShnKSA6IHZvaWQgMDsKICAgICAgICAgIHJldHVybiBxOwogICAgICAgIH0pOwogICAgICB9CiAgICAgIHZhciB1YiA9IChhKSA9PiB7CiAgICAgICAgYSA9IGEudHJpbSgpOwogICAgICAgIGNvbnN0IGIgPSBhLmluZGV4T2YoIigiKTsKICAgICAgICByZXR1cm4gLTEgIT09IGIgPyBhLnN1YnN0cigwLCBiKSA6IGE7CiAgICAgIH0sIHZiID0gW10sIFYgPSBbXSwgd2IgPSAoYSkgPT4gewogICAgICAgIDkgPCBhICYmIDAgPT09IC0tVlthICsgMV0gJiYgKFZbYV0gPSB2b2lkIDAsIHZiLnB1c2goYSkpOwogICAgICB9LCB5YiA9IChhKSA9PiB7CiAgICAgICAgaWYgKCFhKSB0aHJvdyBuZXcgUigiQ2Fubm90IHVzZSBkZWxldGVkIHZhbC4gaGFuZGxlID0gIiArIGEpOwogICAgICAgIHJldHVybiBWW2FdOwogICAgICB9LCBoYiA9IChhKSA9PiB7CiAgICAgICAgc3dpdGNoIChhKSB7CiAgICAgICAgICBjYXNlIHZvaWQgMDoKICAgICAgICAgICAgcmV0dXJuIDI7CiAgICAgICAgICBjYXNlIG51bGw6CiAgICAgICAgICAgIHJldHVybiA0OwogICAgICAgICAgY2FzZSB0cnVlOgogICAgICAgICAgICByZXR1cm4gNjsKICAgICAgICAgIGNhc2UgZmFsc2U6CiAgICAgICAgICAgIHJldHVybiA4OwogICAgICAgICAgZGVmYXVsdDoKICAgICAgICAgICAgY29uc3QgYiA9IHZiLnBvcCgpIHx8IFYubGVuZ3RoOwogICAgICAgICAgICBWW2JdID0gYTsKICAgICAgICAgICAgVltiICsgMV0gPSAxOwogICAgICAgICAgICByZXR1cm4gYjsKICAgICAgICB9CiAgICAgIH0sIHpiID0gewogICAgICAgIG5hbWU6ICJlbXNjcmlwdGVuOjp2YWwiLAogICAgICAgIGZyb21XaXJlVHlwZTogKGEpID0+IHsKICAgICAgICAgIHZhciBiID0geWIoYSk7CiAgICAgICAgICB3YihhKTsKICAgICAgICAgIHJldHVybiBiOwogICAgICAgIH0sCiAgICAgICAgdG9XaXJlVHlwZTogKGEsIGIpID0+IGhiKGIpLAogICAgICAgIGFyZ1BhY2tBZHZhbmNlOiA4LAogICAgICAgIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBLLAogICAgICAgIEVhOiBudWxsCiAgICAgIH0sIEFiID0gKGEsIGIsIGMpID0+IHsKICAgICAgICBzd2l0Y2ggKGIpIHsKICAgICAgICAgIGNhc2UgMToKICAgICAgICAgICAgcmV0dXJuIGMgPyBmdW5jdGlvbihkKSB7CiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZnJvbVdpcmVUeXBlKHlbZF0pOwogICAgICAgICAgICB9IDogZnVuY3Rpb24oZCkgewogICAgICAgICAgICAgIHJldHVybiB0aGlzLmZyb21XaXJlVHlwZShBW2RdKTsKICAgICAgICAgICAgfTsKICAgICAgICAgIGNhc2UgMjoKICAgICAgICAgICAgcmV0dXJuIGMgPyBmdW5jdGlvbihkKSB7CiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZnJvbVdpcmVUeXBlKEJbZCA+PiAxXSk7CiAgICAgICAgICAgIH0gOiBmdW5jdGlvbihkKSB7CiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZnJvbVdpcmVUeXBlKENbZCA+PiAxXSk7CiAgICAgICAgICAgIH07CiAgICAgICAgICBjYXNlIDQ6CiAgICAgICAgICAgIHJldHVybiBjID8gZnVuY3Rpb24oZCkgewogICAgICAgICAgICAgIHJldHVybiB0aGlzLmZyb21XaXJlVHlwZShFW2QgPj4gMl0pOwogICAgICAgICAgICB9IDogZnVuY3Rpb24oZCkgewogICAgICAgICAgICAgIHJldHVybiB0aGlzLmZyb21XaXJlVHlwZShGW2QgPj4gMl0pOwogICAgICAgICAgICB9OwogICAgICAgICAgZGVmYXVsdDoKICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgaW52YWxpZCBpbnRlZ2VyIHdpZHRoICgke2J9KTogJHthfWApOwogICAgICAgIH0KICAgICAgfSwgQmIgPSAoYSwgYikgPT4gewogICAgICAgIHZhciBjID0gTVthXTsKICAgICAgICBpZiAodm9pZCAwID09PSBjKSB0aHJvdyBhID0gYCR7Yn0gaGFzIHVua25vd24gdHlwZSAke3BiKGEpfWAsIG5ldyBSKGEpOwogICAgICAgIHJldHVybiBjOwogICAgICB9LCBmYiA9IChhKSA9PiB7CiAgICAgICAgaWYgKG51bGwgPT09IGEpIHJldHVybiAibnVsbCI7CiAgICAgICAgdmFyIGIgPSB0eXBlb2YgYTsKICAgICAgICByZXR1cm4gIm9iamVjdCIgPT09IGIgfHwgImFycmF5IiA9PT0gYiB8fCAiZnVuY3Rpb24iID09PSBiID8gYS50b1N0cmluZygpIDogIiIgKyBhOwogICAgICB9LCBDYiA9IChhLCBiKSA9PiB7CiAgICAgICAgc3dpdGNoIChiKSB7CiAgICAgICAgICBjYXNlIDQ6CiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbihjKSB7CiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZnJvbVdpcmVUeXBlKGphW2MgPj4gMl0pOwogICAgICAgICAgICB9OwogICAgICAgICAgY2FzZSA4OgogICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oYykgewogICAgICAgICAgICAgIHJldHVybiB0aGlzLmZyb21XaXJlVHlwZShrYVtjID4+IDNdKTsKICAgICAgICAgICAgfTsKICAgICAgICAgIGRlZmF1bHQ6CiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYGludmFsaWQgZmxvYXQgd2lkdGggKCR7Yn0pOiAke2F9YCk7CiAgICAgICAgfQogICAgICB9LCBEYiA9IChhLCBiLCBjKSA9PiB7CiAgICAgICAgc3dpdGNoIChiKSB7CiAgICAgICAgICBjYXNlIDE6CiAgICAgICAgICAgIHJldHVybiBjID8gKGQpID0+IHlbZF0gOiAoZCkgPT4gQVtkXTsKICAgICAgICAgIGNhc2UgMjoKICAgICAgICAgICAgcmV0dXJuIGMgPyAoZCkgPT4gQltkID4+IDFdIDogKGQpID0+IENbZCA+PiAxXTsKICAgICAgICAgIGNhc2UgNDoKICAgICAgICAgICAgcmV0dXJuIGMgPyAoZCkgPT4gRVtkID4+IDJdIDogKGQpID0+IEZbZCA+PiAyXTsKICAgICAgICAgIGRlZmF1bHQ6CiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYGludmFsaWQgaW50ZWdlciB3aWR0aCAoJHtifSk6ICR7YX1gKTsKICAgICAgICB9CiAgICAgIH0sIEViID0gInVuZGVmaW5lZCIgIT0gdHlwZW9mIFRleHREZWNvZGVyID8gbmV3IFRleHREZWNvZGVyKCJ1dGYtMTZsZSIpIDogdm9pZCAwLCBGYiA9IChhLCBiKSA9PiB7CiAgICAgICAgdmFyIGMgPSBhID4+IDE7CiAgICAgICAgZm9yICh2YXIgZCA9IGMgKyBiIC8gMjsgIShjID49IGQpICYmIENbY107ICkgKytjOwogICAgICAgIGMgPDw9IDE7CiAgICAgICAgaWYgKDMyIDwgYyAtIGEgJiYgRWIpIHJldHVybiBFYi5kZWNvZGUoQS5zdWJhcnJheShhLCBjKSk7CiAgICAgICAgYyA9ICIiOwogICAgICAgIGZvciAoZCA9IDA7ICEoZCA+PSBiIC8gMik7ICsrZCkgewogICAgICAgICAgdmFyIGUgPSBCW2EgKyAyICogZCA+PiAxXTsKICAgICAgICAgIGlmICgwID09IGUpIGJyZWFrOwogICAgICAgICAgYyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGUpOwogICAgICAgIH0KICAgICAgICByZXR1cm4gYzsKICAgICAgfSwgR2IgPSAoYSwgYiwgYykgPT4gewogICAgICAgIGMgPz8gKGMgPSAyMTQ3NDgzNjQ3KTsKICAgICAgICBpZiAoMiA+IGMpIHJldHVybiAwOwogICAgICAgIGMgLT0gMjsKICAgICAgICB2YXIgZCA9IGI7CiAgICAgICAgYyA9IGMgPCAyICogYS5sZW5ndGggPyBjIC8gMiA6IGEubGVuZ3RoOwogICAgICAgIGZvciAodmFyIGUgPSAwOyBlIDwgYzsgKytlKSBCW2IgPj4gMV0gPSBhLmNoYXJDb2RlQXQoZSksIGIgKz0gMjsKICAgICAgICBCW2IgPj4gMV0gPSAwOwogICAgICAgIHJldHVybiBiIC0gZDsKICAgICAgfSwgSGIgPSAoYSkgPT4gMiAqIGEubGVuZ3RoLCBJYiA9IChhLCBiKSA9PiB7CiAgICAgICAgZm9yICh2YXIgYyA9IDAsIGQgPSAiIjsgIShjID49IGIgLyA0KTsgKSB7CiAgICAgICAgICB2YXIgZSA9IEVbYSArIDQgKiBjID4+IDJdOwogICAgICAgICAgaWYgKDAgPT0gZSkgYnJlYWs7CiAgICAgICAgICArK2M7CiAgICAgICAgICA2NTUzNiA8PSBlID8gKGUgLT0gNjU1MzYsIGQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSg1NTI5NiB8IGUgPj4gMTAsIDU2MzIwIHwgZSAmIDEwMjMpKSA6IGQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShlKTsKICAgICAgICB9CiAgICAgICAgcmV0dXJuIGQ7CiAgICAgIH0sIEpiID0gKGEsIGIsIGMpID0+IHsKICAgICAgICBjID8/IChjID0gMjE0NzQ4MzY0Nyk7CiAgICAgICAgaWYgKDQgPiBjKSByZXR1cm4gMDsKICAgICAgICB2YXIgZCA9IGI7CiAgICAgICAgYyA9IGQgKyBjIC0gNDsKICAgICAgICBmb3IgKHZhciBlID0gMDsgZSA8IGEubGVuZ3RoOyArK2UpIHsKICAgICAgICAgIHZhciBmID0gYS5jaGFyQ29kZUF0KGUpOwogICAgICAgICAgaWYgKDU1Mjk2IDw9IGYgJiYgNTczNDMgPj0gZikgewogICAgICAgICAgICB2YXIgbCA9IGEuY2hhckNvZGVBdCgrK2UpOwogICAgICAgICAgICBmID0gNjU1MzYgKyAoKGYgJiAxMDIzKSA8PCAxMCkgfCBsICYgMTAyMzsKICAgICAgICAgIH0KICAgICAgICAgIEVbYiA+PiAyXSA9IGY7CiAgICAgICAgICBiICs9IDQ7CiAgICAgICAgICBpZiAoYiArIDQgPiBjKSBicmVhazsKICAgICAgICB9CiAgICAgICAgRVtiID4+IDJdID0gMDsKICAgICAgICByZXR1cm4gYiAtIGQ7CiAgICAgIH0sIEtiID0gKGEpID0+IHsKICAgICAgICBmb3IgKHZhciBiID0gMCwgYyA9IDA7IGMgPCBhLmxlbmd0aDsgKytjKSB7CiAgICAgICAgICB2YXIgZCA9IGEuY2hhckNvZGVBdChjKTsKICAgICAgICAgIDU1Mjk2IDw9IGQgJiYgNTczNDMgPj0gZCAmJiArK2M7CiAgICAgICAgICBiICs9IDQ7CiAgICAgICAgfQogICAgICAgIHJldHVybiBiOwogICAgICB9LCBMYiA9IFtdLCBNYiA9IChhKSA9PiB7CiAgICAgICAgdmFyIGIgPSBMYi5sZW5ndGg7CiAgICAgICAgTGIucHVzaChhKTsKICAgICAgICByZXR1cm4gYjsKICAgICAgfSwgTmIgPSAoYSwgYikgPT4gewogICAgICAgIGZvciAodmFyIGMgPSBBcnJheShhKSwgZCA9IDA7IGQgPCBhOyArK2QpIGNbZF0gPSBCYihGW2IgKyA0ICogZCA+PiAyXSwgInBhcmFtZXRlciAiICsgZCk7CiAgICAgICAgcmV0dXJuIGM7CiAgICAgIH0sIE9iID0gUmVmbGVjdC5jb25zdHJ1Y3QsIFBiID0ge30sIFJiID0gKCkgPT4gewogICAgICAgIGlmICghUWIpIHsKICAgICAgICAgIHZhciBhID0gewogICAgICAgICAgICBVU0VSOiAid2ViX3VzZXIiLAogICAgICAgICAgICBMT0dOQU1FOiAid2ViX3VzZXIiLAogICAgICAgICAgICBQQVRIOiAiLyIsCiAgICAgICAgICAgIFBXRDogIi8iLAogICAgICAgICAgICBIT01FOiAiL2hvbWUvd2ViX3VzZXIiLAogICAgICAgICAgICBMQU5HOiAoIm9iamVjdCIgPT0gdHlwZW9mIG5hdmlnYXRvciAmJiBuYXZpZ2F0b3IubGFuZ3VhZ2VzICYmIG5hdmlnYXRvci5sYW5ndWFnZXNbMF0gfHwgIkMiKS5yZXBsYWNlKAogICAgICAgICAgICAgICItIiwKICAgICAgICAgICAgICAiXyIKICAgICAgICAgICAgKSArICIuVVRGLTgiLAogICAgICAgICAgICBfOiBkYSB8fCAiLi90aGlzLnByb2dyYW0iCiAgICAgICAgICB9LCBiOwogICAgICAgICAgZm9yIChiIGluIFBiKSB2b2lkIDAgPT09IFBiW2JdID8gZGVsZXRlIGFbYl0gOiBhW2JdID0gUGJbYl07CiAgICAgICAgICB2YXIgYyA9IFtdOwogICAgICAgICAgZm9yIChiIGluIGEpIGMucHVzaChgJHtifT0ke2FbYl19YCk7CiAgICAgICAgICBRYiA9IGM7CiAgICAgICAgfQogICAgICAgIHJldHVybiBRYjsKICAgICAgfSwgUWIsIFNiID0gW251bGwsIFtdLCBbXV0sIFRiID0gKCkgPT4gewogICAgICAgIGlmICgib2JqZWN0IiA9PSB0eXBlb2YgY3J5cHRvICYmICJmdW5jdGlvbiIgPT0gdHlwZW9mIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMpCiAgICAgICAgICByZXR1cm4gKGEpID0+IGNyeXB0by5nZXRSYW5kb21WYWx1ZXMoYSk7CiAgICAgICAgcmEoImluaXRSYW5kb21EZXZpY2UiKTsKICAgICAgfSwgVWIgPSAoYSkgPT4gKFViID0gVGIoKSkoYSksIFZiID0gKGEpID0+IDAgPT09IGEgJSA0ICYmICgwICE9PSBhICUgMTAwIHx8IDAgPT09IGEgJSA0MDApLCBXYiA9IFszMSwgMjksIDMxLCAzMCwgMzEsIDMwLCAzMSwgMzEsIDMwLCAzMSwgMzAsIDMxXSwgWGIgPSBbMzEsIDI4LCAzMSwgMzAsIDMxLCAzMCwgMzEsIDMxLCAzMCwgMzEsIDMwLCAzMV07CiAgICAgIGZ1bmN0aW9uIFliKGEpIHsKICAgICAgICB2YXIgYiA9IEFycmF5KERhKGEpICsgMSk7CiAgICAgICAgRWEoYSwgYiwgMCwgYi5sZW5ndGgpOwogICAgICAgIHJldHVybiBiOwogICAgICB9CiAgICAgIHZhciBaYiA9IChhLCBiLCBjLCBkKSA9PiB7CiAgICAgICAgZnVuY3Rpb24gZShnLCBxLCByKSB7CiAgICAgICAgICBmb3IgKGcgPSAibnVtYmVyIiA9PSB0eXBlb2YgZyA/IGcudG9TdHJpbmcoKSA6IGcgfHwgIiI7IGcubGVuZ3RoIDwgcTsgKSBnID0gclswXSArIGc7CiAgICAgICAgICByZXR1cm4gZzsKICAgICAgICB9CiAgICAgICAgZnVuY3Rpb24gZihnLCBxKSB7CiAgICAgICAgICByZXR1cm4gZShnLCBxLCAiMCIpOwogICAgICAgIH0KICAgICAgICBmdW5jdGlvbiBsKGcsIHEpIHsKICAgICAgICAgIGZ1bmN0aW9uIHIoTikgewogICAgICAgICAgICByZXR1cm4gMCA+IE4gPyAtMSA6IDAgPCBOID8gMSA6IDA7CiAgICAgICAgICB9CiAgICAgICAgICB2YXIgejsKICAgICAgICAgIDAgPT09ICh6ID0gcihnLmdldEZ1bGxZZWFyKCkgLSBxLmdldEZ1bGxZZWFyKCkpKSAmJiAwID09PSAoeiA9IHIoZy5nZXRNb250aCgpIC0gcS5nZXRNb250aCgpKSkgJiYgKHogPSByKGcuZ2V0RGF0ZSgpIC0gcS5nZXREYXRlKCkpKTsKICAgICAgICAgIHJldHVybiB6OwogICAgICAgIH0KICAgICAgICBmdW5jdGlvbiBoKGcpIHsKICAgICAgICAgIHN3aXRjaCAoZy5nZXREYXkoKSkgewogICAgICAgICAgICBjYXNlIDA6CiAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGcuZ2V0RnVsbFllYXIoKSAtIDEsIDExLCAyOSk7CiAgICAgICAgICAgIGNhc2UgMToKICAgICAgICAgICAgICByZXR1cm4gZzsKICAgICAgICAgICAgY2FzZSAyOgogICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShnLmdldEZ1bGxZZWFyKCksIDAsIDMpOwogICAgICAgICAgICBjYXNlIDM6CiAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGcuZ2V0RnVsbFllYXIoKSwgMCwgMik7CiAgICAgICAgICAgIGNhc2UgNDoKICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoZy5nZXRGdWxsWWVhcigpLCAwLCAxKTsKICAgICAgICAgICAgY2FzZSA1OgogICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShnLmdldEZ1bGxZZWFyKCkgLSAxLCAxMSwgMzEpOwogICAgICAgICAgICBjYXNlIDY6CiAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGcuZ2V0RnVsbFllYXIoKSAtIDEsIDExLCAzMCk7CiAgICAgICAgICB9CiAgICAgICAgfQogICAgICAgIGZ1bmN0aW9uIG4oZykgewogICAgICAgICAgdmFyIHEgPSBnLklhOwogICAgICAgICAgZm9yIChnID0gbmV3IERhdGUobmV3IERhdGUoZy5KYSArIDE5MDAsIDAsIDEpLmdldFRpbWUoKSk7IDAgPCBxOyApIHsKICAgICAgICAgICAgdmFyIHIgPSBnLmdldE1vbnRoKCksIHogPSAoVmIoZy5nZXRGdWxsWWVhcigpKSA/IFdiIDogWGIpW3JdOwogICAgICAgICAgICBpZiAocSA+IHogLSBnLmdldERhdGUoKSkKICAgICAgICAgICAgICBxIC09IHogLSBnLmdldERhdGUoKSArIDEsIGcuc2V0RGF0ZSgxKSwgMTEgPiByID8gZy5zZXRNb250aChyICsgMSkgOiAoZy5zZXRNb250aCgwKSwgZy5zZXRGdWxsWWVhcihnLmdldEZ1bGxZZWFyKCkgKyAxKSk7CiAgICAgICAgICAgIGVsc2UgewogICAgICAgICAgICAgIGcuc2V0RGF0ZShnLmdldERhdGUoKSArIHEpOwogICAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgICB9CiAgICAgICAgICB9CiAgICAgICAgICByID0gbmV3IERhdGUoZy5nZXRGdWxsWWVhcigpICsgMSwgMCwgNCk7CiAgICAgICAgICBxID0gaChuZXcgRGF0ZShnLmdldEZ1bGxZZWFyKCksIDAsIDQpKTsKICAgICAgICAgIHIgPSBoKHIpOwogICAgICAgICAgcmV0dXJuIDAgPj0gbChxLCBnKSA/IDAgPj0gbChyLCBnKSA/IGcuZ2V0RnVsbFllYXIoKSArIDEgOiBnLmdldEZ1bGxZZWFyKCkgOiBnLmdldEZ1bGxZZWFyKCkgLSAxOwogICAgICAgIH0KICAgICAgICB2YXIgbSA9IEZbZCArIDQwID4+IDJdOwogICAgICAgIGQgPSB7CiAgICAgICAgICBzYjogRVtkID4+IDJdLAogICAgICAgICAgcmI6IEVbZCArIDQgPj4gMl0sCiAgICAgICAgICBSYTogRVtkICsgOCA+PiAyXSwKICAgICAgICAgIFZhOiBFW2QgKyAxMiA+PiAyXSwKICAgICAgICAgIFNhOiBFW2QgKyAxNiA+PiAyXSwKICAgICAgICAgIEphOiBFW2QgKyAyMCA+PiAyXSwKICAgICAgICAgIEdhOiBFW2QgKyAyNCA+PiAyXSwKICAgICAgICAgIElhOiBFW2QgKyAyOCA+PiAyXSwKICAgICAgICAgIHdiOiBFW2QgKyAzMiA+PiAyXSwKICAgICAgICAgIHFiOiBFW2QgKyAzNiA+PiAyXSwKICAgICAgICAgIHRiOiBtID8gbSA/IEooQSwgbSkgOiAiIiA6ICIiCiAgICAgICAgfTsKICAgICAgICBjID0gYyA/IEooQSwgYykgOiAiIjsKICAgICAgICBtID0gewogICAgICAgICAgIiVjIjogIiVhICViICVkICVIOiVNOiVTICVZIiwKICAgICAgICAgICIlRCI6ICIlbS8lZC8leSIsCiAgICAgICAgICAiJUYiOiAiJVktJW0tJWQiLAogICAgICAgICAgIiVoIjogIiViIiwKICAgICAgICAgICIlciI6ICIlSTolTTolUyAlcCIsCiAgICAgICAgICAiJVIiOiAiJUg6JU0iLAogICAgICAgICAgIiVUIjogIiVIOiVNOiVTIiwKICAgICAgICAgICIleCI6ICIlbS8lZC8leSIsCiAgICAgICAgICAiJVgiOiAiJUg6JU06JVMiLAogICAgICAgICAgIiVFYyI6ICIlYyIsCiAgICAgICAgICAiJUVDIjogIiVDIiwKICAgICAgICAgICIlRXgiOiAiJW0vJWQvJXkiLAogICAgICAgICAgIiVFWCI6ICIlSDolTTolUyIsCiAgICAgICAgICAiJUV5IjogIiV5IiwKICAgICAgICAgICIlRVkiOiAiJVkiLAogICAgICAgICAgIiVPZCI6ICIlZCIsCiAgICAgICAgICAiJU9lIjogIiVlIiwKICAgICAgICAgICIlT0giOiAiJUgiLAogICAgICAgICAgIiVPSSI6ICIlSSIsCiAgICAgICAgICAiJU9tIjogIiVtIiwKICAgICAgICAgICIlT00iOiAiJU0iLAogICAgICAgICAgIiVPUyI6ICIlUyIsCiAgICAgICAgICAiJU91IjogIiV1IiwKICAgICAgICAgICIlT1UiOiAiJVUiLAogICAgICAgICAgIiVPViI6ICIlViIsCiAgICAgICAgICAiJU93IjogIiV3IiwKICAgICAgICAgICIlT1ciOiAiJVciLAogICAgICAgICAgIiVPeSI6ICIleSIKICAgICAgICB9OwogICAgICAgIGZvciAodmFyIHAgaW4gbSkgYyA9IGMucmVwbGFjZShuZXcgUmVnRXhwKHAsICJnIiksIG1bcF0pOwogICAgICAgIHZhciB1ID0gIlN1bmRheSBNb25kYXkgVHVlc2RheSBXZWRuZXNkYXkgVGh1cnNkYXkgRnJpZGF5IFNhdHVyZGF5Ii5zcGxpdCgiICIpLCB2ID0gIkphbnVhcnkgRmVicnVhcnkgTWFyY2ggQXByaWwgTWF5IEp1bmUgSnVseSBBdWd1c3QgU2VwdGVtYmVyIE9jdG9iZXIgTm92ZW1iZXIgRGVjZW1iZXIiLnNwbGl0KCIgIik7CiAgICAgICAgbSA9IHsKICAgICAgICAgICIlYSI6IChnKSA9PiB1W2cuR2FdLnN1YnN0cmluZygwLCAzKSwKICAgICAgICAgICIlQSI6IChnKSA9PiB1W2cuR2FdLAogICAgICAgICAgIiViIjogKGcpID0+IHZbZy5TYV0uc3Vic3RyaW5nKDAsIDMpLAogICAgICAgICAgIiVCIjogKGcpID0+IHZbZy5TYV0sCiAgICAgICAgICAiJUMiOiAoZykgPT4gZigoZy5KYSArIDE5MDApIC8gMTAwIHwgMCwgMiksCiAgICAgICAgICAiJWQiOiAoZykgPT4gZihnLlZhLCAyKSwKICAgICAgICAgICIlZSI6IChnKSA9PiBlKGcuVmEsIDIsICIgIiksCiAgICAgICAgICAiJWciOiAoZykgPT4gbihnKS50b1N0cmluZygpLnN1YnN0cmluZygyKSwKICAgICAgICAgICIlRyI6IG4sCiAgICAgICAgICAiJUgiOiAoZykgPT4gZihnLlJhLCAyKSwKICAgICAgICAgICIlSSI6IChnKSA9PiB7CiAgICAgICAgICAgIGcgPSBnLlJhOwogICAgICAgICAgICAwID09IGcgPyBnID0gMTIgOiAxMiA8IGcgJiYgKGcgLT0gMTIpOwogICAgICAgICAgICByZXR1cm4gZihnLCAyKTsKICAgICAgICAgIH0sCiAgICAgICAgICAiJWoiOiAoZykgPT4gewogICAgICAgICAgICBmb3IgKHZhciBxID0gMCwgciA9IDA7IHIgPD0gZy5TYSAtIDE7IHEgKz0gKFZiKGcuSmEgKyAxOTAwKSA/IFdiIDogWGIpW3IrK10pIDsKICAgICAgICAgICAgcmV0dXJuIGYoZy5WYSArIHEsIDMpOwogICAgICAgICAgfSwKICAgICAgICAgICIlbSI6IChnKSA9PiBmKGcuU2EgKyAxLCAyKSwKICAgICAgICAgICIlTSI6IChnKSA9PiBmKGcucmIsIDIpLAogICAgICAgICAgIiVuIjogKCkgPT4gIlxuIiwKICAgICAgICAgICIlcCI6IChnKSA9PiAwIDw9IGcuUmEgJiYgMTIgPiBnLlJhID8gIkFNIiA6ICJQTSIsCiAgICAgICAgICAiJVMiOiAoZykgPT4gZihnLnNiLCAyKSwKICAgICAgICAgICIldCI6ICgpID0+ICIJIiwKICAgICAgICAgICIldSI6IChnKSA9PiBnLkdhIHx8IDcsCiAgICAgICAgICAiJVUiOiAoZykgPT4gZihNYXRoLmZsb29yKChnLklhICsgNyAtIGcuR2EpIC8gNyksIDIpLAogICAgICAgICAgIiVWIjogKGcpID0+IHsKICAgICAgICAgICAgdmFyIHEgPSBNYXRoLmZsb29yKChnLklhICsgNyAtIChnLkdhICsgNikgJSA3KSAvIDcpOwogICAgICAgICAgICAyID49IChnLkdhICsgMzcxIC0gZy5JYSAtIDIpICUgNyAmJiBxKys7CiAgICAgICAgICAgIGlmIChxKSA1MyA9PSBxICYmIChyID0gKGcuR2EgKyAzNzEgLSBnLklhKSAlIDcsIDQgPT0gciB8fCAzID09IHIgJiYgVmIoZy5KYSkgfHwgKHEgPSAxKSk7CiAgICAgICAgICAgIGVsc2UgewogICAgICAgICAgICAgIHEgPSA1MjsKICAgICAgICAgICAgICB2YXIgciA9IChnLkdhICsgNyAtIGcuSWEgLSAxKSAlIDc7CiAgICAgICAgICAgICAgKDQgPT0gciB8fCA1ID09IHIgJiYgVmIoZy5KYSAlIDQwMCAtIDEpKSAmJiBxKys7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgcmV0dXJuIGYocSwgMik7CiAgICAgICAgICB9LAogICAgICAgICAgIiV3IjogKGcpID0+IGcuR2EsCiAgICAgICAgICAiJVciOiAoZykgPT4gZihNYXRoLmZsb29yKChnLklhICsgNyAtIChnLkdhICsgNikgJSA3KSAvIDcpLCAyKSwKICAgICAgICAgICIleSI6IChnKSA9PiAoZy5KYSArIDE5MDApLnRvU3RyaW5nKCkuc3Vic3RyaW5nKDIpLAogICAgICAgICAgIiVZIjogKGcpID0+IGcuSmEgKyAxOTAwLAogICAgICAgICAgIiV6IjogKGcpID0+IHsKICAgICAgICAgICAgZyA9IGcucWI7CiAgICAgICAgICAgIHZhciBxID0gMCA8PSBnOwogICAgICAgICAgICBnID0gTWF0aC5hYnMoZykgLyA2MDsKICAgICAgICAgICAgcmV0dXJuIChxID8gIisiIDogIi0iKSArIFN0cmluZygiMDAwMCIgKyAoZyAvIDYwICogMTAwICsgZyAlIDYwKSkuc2xpY2UoLTQpOwogICAgICAgICAgfSwKICAgICAgICAgICIlWiI6IChnKSA9PiBnLnRiLAogICAgICAgICAgIiUlIjogKCkgPT4gIiUiCiAgICAgICAgfTsKICAgICAgICBjID0gYy5yZXBsYWNlKC8lJS9nLCAiXDBcMCIpOwogICAgICAgIGZvciAocCBpbiBtKSBjLmluY2x1ZGVzKHApICYmIChjID0gYy5yZXBsYWNlKG5ldyBSZWdFeHAocCwgImciKSwgbVtwXShkKSkpOwogICAgICAgIGMgPSBjLnJlcGxhY2UoL1wwXDAvZywgIiUiKTsKICAgICAgICBwID0gWWIoYyk7CiAgICAgICAgaWYgKHAubGVuZ3RoID4gYikgcmV0dXJuIDA7CiAgICAgICAgeS5zZXQocCwgYSk7CiAgICAgICAgcmV0dXJuIHAubGVuZ3RoIC0gMTsKICAgICAgfTsKICAgICAgSWEgPSBrLkludGVybmFsRXJyb3IgPSBjbGFzcyBleHRlbmRzIEVycm9yIHsKICAgICAgICBjb25zdHJ1Y3RvcihhKSB7CiAgICAgICAgICBzdXBlcihhKTsKICAgICAgICAgIHRoaXMubmFtZSA9ICJJbnRlcm5hbEVycm9yIjsKICAgICAgICB9CiAgICAgIH07CiAgICAgIGZvciAodmFyICRiID0gQXJyYXkoMjU2KSwgYWMgPSAwOyAyNTYgPiBhYzsgKythYykgJGJbYWNdID0gU3RyaW5nLmZyb21DaGFyQ29kZShhYyk7CiAgICAgIEphID0gJGI7CiAgICAgIFIgPSBrLkJpbmRpbmdFcnJvciA9IGNsYXNzIGV4dGVuZHMgRXJyb3IgewogICAgICAgIGNvbnN0cnVjdG9yKGEpIHsKICAgICAgICAgIHN1cGVyKGEpOwogICAgICAgICAgdGhpcy5uYW1lID0gIkJpbmRpbmdFcnJvciI7CiAgICAgICAgfQogICAgICB9OwogICAgICBPYmplY3QuYXNzaWduKFlhLnByb3RvdHlwZSwgewogICAgICAgIGlzQWxpYXNPZjogZnVuY3Rpb24oYSkgewogICAgICAgICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFlhICYmIGEgaW5zdGFuY2VvZiBZYSkpIHJldHVybiBmYWxzZTsKICAgICAgICAgIHZhciBiID0gdGhpcy5tYS56YS54YSwgYyA9IHRoaXMubWEueWE7CiAgICAgICAgICBhLm1hID0gYS5tYTsKICAgICAgICAgIHZhciBkID0gYS5tYS56YS54YTsKICAgICAgICAgIGZvciAoYSA9IGEubWEueWE7IGIuQ2E7ICkgYyA9IGIuTmEoYyksIGIgPSBiLkNhOwogICAgICAgICAgZm9yICg7IGQuQ2E7ICkgYSA9IGQuTmEoYSksIGQgPSBkLkNhOwogICAgICAgICAgcmV0dXJuIGIgPT09IGQgJiYgYyA9PT0gYTsKICAgICAgICB9LAogICAgICAgIGNsb25lOiBmdW5jdGlvbigpIHsKICAgICAgICAgIHRoaXMubWEueWEgfHwgTGEodGhpcyk7CiAgICAgICAgICBpZiAodGhpcy5tYS5NYSkgcmV0dXJuIHRoaXMubWEuY291bnQudmFsdWUgKz0gMSwgdGhpczsKICAgICAgICAgIHZhciBhID0gV2EsIGIgPSBPYmplY3QsIGMgPSBiLmNyZWF0ZSwgZCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKSwgZSA9IHRoaXMubWE7CiAgICAgICAgICBhID0gYSgKICAgICAgICAgICAgYy5jYWxsKGIsIGQsIHsKICAgICAgICAgICAgICBtYTogeyB2YWx1ZTogeyBjb3VudDogZS5jb3VudCwgS2E6IGUuS2EsIE1hOiBlLk1hLCB5YTogZS55YSwgemE6IGUuemEsIEFhOiBlLkFhLCBEYTogZS5EYSB9IH0KICAgICAgICAgICAgfSkKICAgICAgICAgICk7CiAgICAgICAgICBhLm1hLmNvdW50LnZhbHVlICs9IDE7CiAgICAgICAgICBhLm1hLkthID0gZmFsc2U7CiAgICAgICAgICByZXR1cm4gYTsKICAgICAgICB9LAogICAgICAgIFsiZGVsZXRlIl0oKSB7CiAgICAgICAgICB0aGlzLm1hLnlhIHx8IExhKHRoaXMpOwogICAgICAgICAgaWYgKHRoaXMubWEuS2EgJiYgIXRoaXMubWEuTWEpIHRocm93IG5ldyBSKCJPYmplY3QgYWxyZWFkeSBzY2hlZHVsZWQgZm9yIGRlbGV0aW9uIik7CiAgICAgICAgICBPYSh0aGlzKTsKICAgICAgICAgIHZhciBhID0gdGhpcy5tYTsKICAgICAgICAgIC0tYS5jb3VudC52YWx1ZTsKICAgICAgICAgIDAgPT09IGEuY291bnQudmFsdWUgJiYgKGEuQWEgPyBhLkRhLkZhKGEuQWEpIDogYS56YS54YS5GYShhLnlhKSk7CiAgICAgICAgICB0aGlzLm1hLk1hIHx8ICh0aGlzLm1hLkFhID0gdm9pZCAwLCB0aGlzLm1hLnlhID0gdm9pZCAwKTsKICAgICAgICB9LAogICAgICAgIGlzRGVsZXRlZDogZnVuY3Rpb24oKSB7CiAgICAgICAgICByZXR1cm4gIXRoaXMubWEueWE7CiAgICAgICAgfSwKICAgICAgICBkZWxldGVMYXRlcjogZnVuY3Rpb24oKSB7CiAgICAgICAgICB0aGlzLm1hLnlhIHx8IExhKHRoaXMpOwogICAgICAgICAgaWYgKHRoaXMubWEuS2EgJiYgIXRoaXMubWEuTWEpIHRocm93IG5ldyBSKCJPYmplY3QgYWxyZWFkeSBzY2hlZHVsZWQgZm9yIGRlbGV0aW9uIik7CiAgICAgICAgICBSYS5wdXNoKHRoaXMpOwogICAgICAgICAgMSA9PT0gUmEubGVuZ3RoICYmIFRhICYmIFRhKFNhKTsKICAgICAgICAgIHRoaXMubWEuS2EgPSB0cnVlOwogICAgICAgICAgcmV0dXJuIHRoaXM7CiAgICAgICAgfQogICAgICB9KTsKICAgICAgay5nZXRJbmhlcml0ZWRJbnN0YW5jZUNvdW50ID0gKCkgPT4gT2JqZWN0LmtleXMoVWEpLmxlbmd0aDsKICAgICAgay5nZXRMaXZlSW5oZXJpdGVkSW5zdGFuY2VzID0gKCkgPT4gewogICAgICAgIHZhciBhID0gW10sIGI7CiAgICAgICAgZm9yIChiIGluIFVhKSBVYS5oYXNPd25Qcm9wZXJ0eShiKSAmJiBhLnB1c2goVWFbYl0pOwogICAgICAgIHJldHVybiBhOwogICAgICB9OwogICAgICBrLmZsdXNoUGVuZGluZ0RlbGV0ZXMgPSBTYTsKICAgICAgay5zZXREZWxheUZ1bmN0aW9uID0gKGEpID0+IHsKICAgICAgICBUYSA9IGE7CiAgICAgICAgUmEubGVuZ3RoICYmIFRhICYmIFRhKFNhKTsKICAgICAgfTsKICAgICAgT2JqZWN0LmFzc2lnbihqYi5wcm90b3R5cGUsIHsKICAgICAgICBlYihhKSB7CiAgICAgICAgICB0aGlzLlphICYmIChhID0gdGhpcy5aYShhKSk7CiAgICAgICAgICByZXR1cm4gYTsKICAgICAgICB9LAogICAgICAgIFhhKGEpIHsKICAgICAgICAgIHRoaXMuRmE/LihhKTsKICAgICAgICB9LAogICAgICAgIGFyZ1BhY2tBZHZhbmNlOiA4LAogICAgICAgIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBLLAogICAgICAgIGZyb21XaXJlVHlwZTogZnVuY3Rpb24oYSkgewogICAgICAgICAgZnVuY3Rpb24gYigpIHsKICAgICAgICAgICAgcmV0dXJuIHRoaXMuUWEgPyBYYSh0aGlzLnhhLkxhLCB7IHphOiB0aGlzLmpiLCB5YTogYywgRGE6IHRoaXMsIEFhOiBhIH0pIDogWGEodGhpcy54YS5MYSwgeyB6YTogdGhpcywgeWE6IGEgfSk7CiAgICAgICAgICB9CiAgICAgICAgICB2YXIgYyA9IHRoaXMuZWIoYSk7CiAgICAgICAgICBpZiAoIWMpIHJldHVybiB0aGlzLlhhKGEpLCBudWxsOwogICAgICAgICAgdmFyIGQgPSBWYSh0aGlzLnhhLCBjKTsKICAgICAgICAgIGlmICh2b2lkIDAgIT09IGQpIHsKICAgICAgICAgICAgaWYgKDAgPT09IGQubWEuY291bnQudmFsdWUpIHJldHVybiBkLm1hLnlhID0gYywgZC5tYS5BYSA9IGEsIGQuY2xvbmUoKTsKICAgICAgICAgICAgZCA9IGQuY2xvbmUoKTsKICAgICAgICAgICAgdGhpcy5YYShhKTsKICAgICAgICAgICAgcmV0dXJuIGQ7CiAgICAgICAgICB9CiAgICAgICAgICBkID0gdGhpcy54YS5jYihjKTsKICAgICAgICAgIGQgPSBRYVtkXTsKICAgICAgICAgIGlmICghZCkgcmV0dXJuIGIuY2FsbCh0aGlzKTsKICAgICAgICAgIGQgPSB0aGlzLlBhID8gZC4kYSA6IGQucG9pbnRlclR5cGU7CiAgICAgICAgICB2YXIgZSA9IFBhKGMsIHRoaXMueGEsIGQueGEpOwogICAgICAgICAgcmV0dXJuIG51bGwgPT09IGUgPyBiLmNhbGwodGhpcykgOiB0aGlzLlFhID8gWGEoZC54YS5MYSwgeyB6YTogZCwgeWE6IGUsIERhOiB0aGlzLCBBYTogYSB9KSA6IFhhKGQueGEuTGEsIHsgemE6IGQsIHlhOiBlIH0pOwogICAgICAgIH0KICAgICAgfSk7CiAgICAgIG5iID0gay5VbmJvdW5kVHlwZUVycm9yID0gKChhLCBiKSA9PiB7CiAgICAgICAgdmFyIGMgPSBaYShiLCBmdW5jdGlvbihkKSB7CiAgICAgICAgICB0aGlzLm5hbWUgPSBiOwogICAgICAgICAgdGhpcy5tZXNzYWdlID0gZDsKICAgICAgICAgIGQgPSBFcnJvcihkKS5zdGFjazsKICAgICAgICAgIHZvaWQgMCAhPT0gZCAmJiAodGhpcy5zdGFjayA9IHRoaXMudG9TdHJpbmcoKSArICJcbiIgKyBkLnJlcGxhY2UoL15FcnJvcig6W15cbl0qKT9cbi8sICIiKSk7CiAgICAgICAgfSk7CiAgICAgICAgYy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKGEucHJvdG90eXBlKTsKICAgICAgICBjLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGM7CiAgICAgICAgYy5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHsKICAgICAgICAgIHJldHVybiB2b2lkIDAgPT09IHRoaXMubWVzc2FnZSA/IHRoaXMubmFtZSA6IGAke3RoaXMubmFtZX06ICR7dGhpcy5tZXNzYWdlfWA7CiAgICAgICAgfTsKICAgICAgICByZXR1cm4gYzsKICAgICAgfSkoRXJyb3IsICJVbmJvdW5kVHlwZUVycm9yIik7CiAgICAgIFYucHVzaCgwLCAxLCB2b2lkIDAsIDEsIG51bGwsIDEsIHRydWUsIDEsIGZhbHNlLCAxKTsKICAgICAgay5jb3VudF9lbXZhbF9oYW5kbGVzID0gKCkgPT4gVi5sZW5ndGggLyAyIC0gNSAtIHZiLmxlbmd0aDsKICAgICAgdmFyIG1jID0gewogICAgICAgIGM6IChhLCBiLCBjLCBkKSA9PiB7CiAgICAgICAgICByYSgKICAgICAgICAgICAgYEFzc2VydGlvbiBmYWlsZWQ6ICR7YSA/IEooQSwgYSkgOiAiIn0sIGF0OiBgICsgW2IgPyBiID8gSihBLCBiKSA6ICIiIDogInVua25vd24gZmlsZW5hbWUiLCBjLCBkID8gZCA/IEooQSwgZCkgOiAiIiA6ICJ1bmtub3duIGZ1bmN0aW9uIl0KICAgICAgICAgICk7CiAgICAgICAgfSwKICAgICAgICBtOiAoYSwgYiwgYykgPT4gewogICAgICAgICAgdmFyIGQgPSBuZXcgQWEoYSk7CiAgICAgICAgICBGW2QueWEgKyAxNiA+PiAyXSA9IDA7CiAgICAgICAgICBGW2QueWEgKyA0ID4+IDJdID0gYjsKICAgICAgICAgIEZbZC55YSArIDggPj4gMl0gPSBjOwogICAgICAgICAgQmEgPSBhOwogICAgICAgICAgQ2ErKzsKICAgICAgICAgIHRocm93IEJhOwogICAgICAgIH0sCiAgICAgICAgQjogZnVuY3Rpb24oKSB7CiAgICAgICAgICByZXR1cm4gMDsKICAgICAgICB9LAogICAgICAgIFA6ICgpID0+IHsKICAgICAgICB9LAogICAgICAgIE06ICgpID0+IHsKICAgICAgICB9LAogICAgICAgIFI6IGZ1bmN0aW9uKCkgewogICAgICAgICAgcmV0dXJuIDA7CiAgICAgICAgfSwKICAgICAgICBOOiAoKSA9PiB7CiAgICAgICAgfSwKICAgICAgICBBOiBmdW5jdGlvbigpIHsKICAgICAgICB9LAogICAgICAgIE86ICgpID0+IHsKICAgICAgICB9LAogICAgICAgIHY6IChhKSA9PiB7CiAgICAgICAgICB2YXIgYiA9IEZhW2FdOwogICAgICAgICAgZGVsZXRlIEZhW2FdOwogICAgICAgICAgdmFyIGMgPSBiLlVhLCBkID0gYi5GYSwgZSA9IGIuWWEsIGYgPSBlLm1hcCgobCkgPT4gbC5oYikuY29uY2F0KGUubWFwKChsKSA9PiBsLm5iKSk7CiAgICAgICAgICBQKFthXSwgZiwgKGwpID0+IHsKICAgICAgICAgICAgdmFyIGggPSB7fTsKICAgICAgICAgICAgZS5mb3JFYWNoKChuLCBtKSA9PiB7CiAgICAgICAgICAgICAgdmFyIHAgPSBsW21dLCB1ID0gbi5mYiwgdiA9IG4uZ2IsIGcgPSBsW20gKyBlLmxlbmd0aF0sIHEgPSBuLm1iLCByID0gbi5vYjsKICAgICAgICAgICAgICBoW24uYmJdID0gewogICAgICAgICAgICAgICAgcmVhZDogKHopID0+IHAuZnJvbVdpcmVUeXBlKHUodiwgeikpLAogICAgICAgICAgICAgICAgd3JpdGU6ICh6LCBOKSA9PiB7CiAgICAgICAgICAgICAgICAgIHZhciBEID0gW107CiAgICAgICAgICAgICAgICAgIHEociwgeiwgZy50b1dpcmVUeXBlKEQsIE4pKTsKICAgICAgICAgICAgICAgICAgR2EoRCk7CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgfTsKICAgICAgICAgICAgfSk7CiAgICAgICAgICAgIHJldHVybiBbCiAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgbmFtZTogYi5uYW1lLAogICAgICAgICAgICAgICAgZnJvbVdpcmVUeXBlOiAobikgPT4gewogICAgICAgICAgICAgICAgICB2YXIgbSA9IHt9LCBwOwogICAgICAgICAgICAgICAgICBmb3IgKHAgaW4gaCkgbVtwXSA9IGhbcF0ucmVhZChuKTsKICAgICAgICAgICAgICAgICAgZChuKTsKICAgICAgICAgICAgICAgICAgcmV0dXJuIG07CiAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgICAgdG9XaXJlVHlwZTogKG4sIG0pID0+IHsKICAgICAgICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBoKSBpZiAoIShwIGluIG0pKSB0aHJvdyBuZXcgVHlwZUVycm9yKGBNaXNzaW5nIGZpZWxkOiAiJHtwfSJgKTsKICAgICAgICAgICAgICAgICAgdmFyIHUgPSBjKCk7CiAgICAgICAgICAgICAgICAgIGZvciAocCBpbiBoKSBoW3BdLndyaXRlKHUsIG1bcF0pOwogICAgICAgICAgICAgICAgICBudWxsICE9PSBuICYmIG4ucHVzaChkLCB1KTsKICAgICAgICAgICAgICAgICAgcmV0dXJuIHU7CiAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgICAgYXJnUGFja0FkdmFuY2U6IDgsCiAgICAgICAgICAgICAgICByZWFkVmFsdWVGcm9tUG9pbnRlcjogSywKICAgICAgICAgICAgICAgIEVhOiBkCiAgICAgICAgICAgICAgfQogICAgICAgICAgICBdOwogICAgICAgICAgfSk7CiAgICAgICAgfSwKICAgICAgICBJOiAoKSA9PiB7CiAgICAgICAgfSwKICAgICAgICBZOiAoYSwgYiwgYywgZCkgPT4gewogICAgICAgICAgYiA9IFEoYik7CiAgICAgICAgICBPKGEsIHsKICAgICAgICAgICAgbmFtZTogYiwKICAgICAgICAgICAgZnJvbVdpcmVUeXBlOiBmdW5jdGlvbihlKSB7CiAgICAgICAgICAgICAgcmV0dXJuICEhZTsKICAgICAgICAgICAgfSwKICAgICAgICAgICAgdG9XaXJlVHlwZTogZnVuY3Rpb24oZSwgZikgewogICAgICAgICAgICAgIHJldHVybiBmID8gYyA6IGQ7CiAgICAgICAgICAgIH0sCiAgICAgICAgICAgIGFyZ1BhY2tBZHZhbmNlOiA4LAogICAgICAgICAgICByZWFkVmFsdWVGcm9tUG9pbnRlcjogZnVuY3Rpb24oZSkgewogICAgICAgICAgICAgIHJldHVybiB0aGlzLmZyb21XaXJlVHlwZShBW2VdKTsKICAgICAgICAgICAgfSwKICAgICAgICAgICAgRWE6IG51bGwKICAgICAgICAgIH0pOwogICAgICAgIH0sCiAgICAgICAgcjogKGEsIGIsIGMsIGQsIGUsIGYsIGwsIGgsIG4sIG0sIHAsIHUsIHYpID0+IHsKICAgICAgICAgIHAgPSBRKHApOwogICAgICAgICAgZiA9IFQoZSwgZik7CiAgICAgICAgICBoICYmIChoID0gVChsLCBoKSk7CiAgICAgICAgICBtICYmIChtID0gVChuLCBtKSk7CiAgICAgICAgICB2ID0gVCh1LCB2KTsKICAgICAgICAgIHZhciBnID0gYmIocCk7CiAgICAgICAgICBhYihnLCBmdW5jdGlvbigpIHsKICAgICAgICAgICAgcWIoYENhbm5vdCBjb25zdHJ1Y3QgJHtwfSBkdWUgdG8gdW5ib3VuZCB0eXBlc2AsIFtkXSk7CiAgICAgICAgICB9KTsKICAgICAgICAgIFAoW2EsIGIsIGNdLCBkID8gW2RdIDogW10sIChxKSA9PiB7CiAgICAgICAgICAgIHEgPSBxWzBdOwogICAgICAgICAgICBpZiAoZCkgewogICAgICAgICAgICAgIHZhciByID0gcS54YTsKICAgICAgICAgICAgICB2YXIgeiA9IHIuTGE7CiAgICAgICAgICAgIH0gZWxzZSB6ID0gWWEucHJvdG90eXBlOwogICAgICAgICAgICBxID0gWmEocCwgZnVuY3Rpb24oLi4uTmEpIHsKICAgICAgICAgICAgICBpZiAoT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpICE9PSBOKSB0aHJvdyBuZXcgUigiVXNlICduZXcnIHRvIGNvbnN0cnVjdCAiICsgcCk7CiAgICAgICAgICAgICAgaWYgKHZvaWQgMCA9PT0gRC5IYSkgdGhyb3cgbmV3IFIocCArICIgaGFzIG5vIGFjY2Vzc2libGUgY29uc3RydWN0b3IiKTsKICAgICAgICAgICAgICB2YXIgeGIgPSBELkhhW05hLmxlbmd0aF07CiAgICAgICAgICAgICAgaWYgKHZvaWQgMCA9PT0geGIpCiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUigKICAgICAgICAgICAgICAgICAgYFRyaWVkIHRvIGludm9rZSBjdG9yIG9mICR7cH0gd2l0aCBpbnZhbGlkIG51bWJlciBvZiBwYXJhbWV0ZXJzICgke05hLmxlbmd0aH0pIC0gZXhwZWN0ZWQgKCR7T2JqZWN0LmtleXMoRC5IYSkudG9TdHJpbmcoKX0pIHBhcmFtZXRlcnMgaW5zdGVhZCFgCiAgICAgICAgICAgICAgICApOwogICAgICAgICAgICAgIHJldHVybiB4Yi5hcHBseSh0aGlzLCBOYSk7CiAgICAgICAgICAgIH0pOwogICAgICAgICAgICB2YXIgTiA9IE9iamVjdC5jcmVhdGUoeiwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogcSB9IH0pOwogICAgICAgICAgICBxLnByb3RvdHlwZSA9IE47CiAgICAgICAgICAgIHZhciBEID0gbmV3IGNiKHAsIHEsIE4sIHYsIHIsIGYsIGgsIG0pOwogICAgICAgICAgICBpZiAoRC5DYSkgewogICAgICAgICAgICAgIHZhciBpYTsKICAgICAgICAgICAgICAoaWEgPSBELkNhKS5XYSA/PyAoaWEuV2EgPSBbXSk7CiAgICAgICAgICAgICAgRC5DYS5XYS5wdXNoKEQpOwogICAgICAgICAgICB9CiAgICAgICAgICAgIHIgPSBuZXcgamIocCwgRCwgdHJ1ZSwgZmFsc2UsIGZhbHNlKTsKICAgICAgICAgICAgaWEgPSBuZXcgamIocCArICIqIiwgRCwgZmFsc2UsIGZhbHNlLCBmYWxzZSk7CiAgICAgICAgICAgIHogPSBuZXcgamIocCArICIgY29uc3QqIiwgRCwgZmFsc2UsIHRydWUsIGZhbHNlKTsKICAgICAgICAgICAgUWFbYV0gPSB7IHBvaW50ZXJUeXBlOiBpYSwgJGE6IHogfTsKICAgICAgICAgICAga2IoZywgcSk7CiAgICAgICAgICAgIHJldHVybiBbciwgaWEsIHpdOwogICAgICAgICAgfSk7CiAgICAgICAgfSwKICAgICAgICBxOiAoYSwgYiwgYywgZCwgZSwgZikgPT4gewogICAgICAgICAgdmFyIGwgPSByYihiLCBjKTsKICAgICAgICAgIGUgPSBUKGQsIGUpOwogICAgICAgICAgUChbXSwgW2FdLCAoaCkgPT4gewogICAgICAgICAgICBoID0gaFswXTsKICAgICAgICAgICAgdmFyIG4gPSBgY29uc3RydWN0b3IgJHtoLm5hbWV9YDsKICAgICAgICAgICAgdm9pZCAwID09PSBoLnhhLkhhICYmIChoLnhhLkhhID0gW10pOwogICAgICAgICAgICBpZiAodm9pZCAwICE9PSBoLnhhLkhhW2IgLSAxXSkKICAgICAgICAgICAgICB0aHJvdyBuZXcgUigKICAgICAgICAgICAgICAgIGBDYW5ub3QgcmVnaXN0ZXIgbXVsdGlwbGUgY29uc3RydWN0b3JzIHdpdGggaWRlbnRpY2FsIG51bWJlciBvZiBwYXJhbWV0ZXJzICgke2IgLSAxfSkgZm9yIGNsYXNzICcke2gubmFtZX0nISBPdmVybG9hZCByZXNvbHV0aW9uIGlzIGN1cnJlbnRseSBvbmx5IHBlcmZvcm1lZCB1c2luZyB0aGUgcGFyYW1ldGVyIGNvdW50LCBub3QgYWN0dWFsIHR5cGUgaW5mbyFgCiAgICAgICAgICAgICAgKTsKICAgICAgICAgICAgaC54YS5IYVtiIC0gMV0gPSAoKSA9PiB7CiAgICAgICAgICAgICAgcWIoYENhbm5vdCBjb25zdHJ1Y3QgJHtoLm5hbWV9IGR1ZSB0byB1bmJvdW5kIHR5cGVzYCwgbCk7CiAgICAgICAgICAgIH07CiAgICAgICAgICAgIFAoW10sIGwsIChtKSA9PiB7CiAgICAgICAgICAgICAgbS5zcGxpY2UoMSwgMCwgbnVsbCk7CiAgICAgICAgICAgICAgaC54YS5IYVtiIC0gMV0gPSB0YihuLCBtLCBudWxsLCBlLCBmKTsKICAgICAgICAgICAgICByZXR1cm4gW107CiAgICAgICAgICAgIH0pOwogICAgICAgICAgICByZXR1cm4gW107CiAgICAgICAgICB9KTsKICAgICAgICB9LAogICAgICAgIGY6IChhLCBiLCBjLCBkLCBlLCBmLCBsLCBoKSA9PiB7CiAgICAgICAgICB2YXIgbiA9IHJiKGMsIGQpOwogICAgICAgICAgYiA9IFEoYik7CiAgICAgICAgICBiID0gdWIoYik7CiAgICAgICAgICBmID0gVChlLCBmKTsKICAgICAgICAgIFAoW10sIFthXSwgKG0pID0+IHsKICAgICAgICAgICAgZnVuY3Rpb24gcCgpIHsKICAgICAgICAgICAgICBxYihgQ2Fubm90IGNhbGwgJHt1fSBkdWUgdG8gdW5ib3VuZCB0eXBlc2AsIG4pOwogICAgICAgICAgICB9CiAgICAgICAgICAgIG0gPSBtWzBdOwogICAgICAgICAgICB2YXIgdSA9IGAke20ubmFtZX0uJHtifWA7CiAgICAgICAgICAgIGIuc3RhcnRzV2l0aCgiQEAiKSAmJiAoYiA9IFN5bWJvbFtiLnN1YnN0cmluZygyKV0pOwogICAgICAgICAgICBoICYmIG0ueGEua2IucHVzaChiKTsKICAgICAgICAgICAgdmFyIHYgPSBtLnhhLkxhLCBnID0gdltiXTsKICAgICAgICAgICAgdm9pZCAwID09PSBnIHx8IHZvaWQgMCA9PT0gZy5CYSAmJiBnLmNsYXNzTmFtZSAhPT0gbS5uYW1lICYmIGcuT2EgPT09IGMgLSAyID8gKHAuT2EgPSBjIC0gMiwgcC5jbGFzc05hbWUgPSBtLm5hbWUsIHZbYl0gPSBwKSA6ICgkYSh2LCBiLCB1KSwgdltiXS5CYVtjIC0gMl0gPSBwKTsKICAgICAgICAgICAgUChbXSwgbiwgKHEpID0+IHsKICAgICAgICAgICAgICBxID0gdGIodSwgcSwgbSwgZiwgbCk7CiAgICAgICAgICAgICAgdm9pZCAwID09PSB2W2JdLkJhID8gKHEuT2EgPSBjIC0gMiwgdltiXSA9IHEpIDogdltiXS5CYVtjIC0gMl0gPSBxOwogICAgICAgICAgICAgIHJldHVybiBbXTsKICAgICAgICAgICAgfSk7CiAgICAgICAgICAgIHJldHVybiBbXTsKICAgICAgICAgIH0pOwogICAgICAgIH0sCiAgICAgICAgWDogKGEpID0+IE8oYSwgemIpLAogICAgICAgIHg6IChhLCBiLCBjLCBkKSA9PiB7CiAgICAgICAgICBmdW5jdGlvbiBlKCkgewogICAgICAgICAgfQogICAgICAgICAgYiA9IFEoYik7CiAgICAgICAgICBlLnZhbHVlcyA9IHt9OwogICAgICAgICAgTyhhLCB7CiAgICAgICAgICAgIG5hbWU6IGIsCiAgICAgICAgICAgIGNvbnN0cnVjdG9yOiBlLAogICAgICAgICAgICBmcm9tV2lyZVR5cGU6IGZ1bmN0aW9uKGYpIHsKICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci52YWx1ZXNbZl07CiAgICAgICAgICAgIH0sCiAgICAgICAgICAgIHRvV2lyZVR5cGU6IChmLCBsKSA9PiBsLnZhbHVlLAogICAgICAgICAgICBhcmdQYWNrQWR2YW5jZTogOCwKICAgICAgICAgICAgcmVhZFZhbHVlRnJvbVBvaW50ZXI6IEFiKGIsIGMsIGQpLAogICAgICAgICAgICBFYTogbnVsbAogICAgICAgICAgfSk7CiAgICAgICAgICBhYihiLCBlKTsKICAgICAgICB9LAogICAgICAgIGs6IChhLCBiLCBjKSA9PiB7CiAgICAgICAgICB2YXIgZCA9IEJiKGEsICJlbnVtIik7CiAgICAgICAgICBiID0gUShiKTsKICAgICAgICAgIGEgPSBkLmNvbnN0cnVjdG9yOwogICAgICAgICAgZCA9IE9iamVjdC5jcmVhdGUoZC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHsKICAgICAgICAgICAgdmFsdWU6IHsgdmFsdWU6IGMgfSwKICAgICAgICAgICAgY29uc3RydWN0b3I6IHsgdmFsdWU6IFphKGAke2QubmFtZX1fJHtifWAsIGZ1bmN0aW9uKCkgewogICAgICAgICAgICB9KSB9CiAgICAgICAgICB9KTsKICAgICAgICAgIGEudmFsdWVzW2NdID0gZDsKICAgICAgICAgIGFbYl0gPSBkOwogICAgICAgIH0sCiAgICAgICAgQzogKGEsIGIsIGMpID0+IHsKICAgICAgICAgIGIgPSBRKGIpOwogICAgICAgICAgTyhhLCB7CiAgICAgICAgICAgIG5hbWU6IGIsCiAgICAgICAgICAgIGZyb21XaXJlVHlwZTogKGQpID0+IGQsCiAgICAgICAgICAgIHRvV2lyZVR5cGU6IChkLCBlKSA9PiBlLAogICAgICAgICAgICBhcmdQYWNrQWR2YW5jZTogOCwKICAgICAgICAgICAgcmVhZFZhbHVlRnJvbVBvaW50ZXI6IENiKGIsIGMpLAogICAgICAgICAgICBFYTogbnVsbAogICAgICAgICAgfSk7CiAgICAgICAgfSwKICAgICAgICBFOiAoYSwgYiwgYywgZCwgZSwgZikgPT4gewogICAgICAgICAgdmFyIGwgPSByYihiLCBjKTsKICAgICAgICAgIGEgPSBRKGEpOwogICAgICAgICAgYSA9IHViKGEpOwogICAgICAgICAgZSA9IFQoZCwgZSk7CiAgICAgICAgICBhYigKICAgICAgICAgICAgYSwKICAgICAgICAgICAgZnVuY3Rpb24oKSB7CiAgICAgICAgICAgICAgcWIoYENhbm5vdCBjYWxsICR7YX0gZHVlIHRvIHVuYm91bmQgdHlwZXNgLCBsKTsKICAgICAgICAgICAgfSwKICAgICAgICAgICAgYiAtIDEKICAgICAgICAgICk7CiAgICAgICAgICBQKFtdLCBsLCAoaCkgPT4gewogICAgICAgICAgICBrYihhLCB0YihhLCBbaFswXSwgbnVsbF0uY29uY2F0KGguc2xpY2UoMSkpLCBudWxsLCBlLCBmKSwgYiAtIDEpOwogICAgICAgICAgICByZXR1cm4gW107CiAgICAgICAgICB9KTsKICAgICAgICB9LAogICAgICAgIGw6IChhLCBiLCBjLCBkLCBlKSA9PiB7CiAgICAgICAgICBiID0gUShiKTsKICAgICAgICAgIC0xID09PSBlICYmIChlID0gNDI5NDk2NzI5NSk7CiAgICAgICAgICBlID0gKGgpID0+IGg7CiAgICAgICAgICBpZiAoMCA9PT0gZCkgewogICAgICAgICAgICB2YXIgZiA9IDMyIC0gOCAqIGM7CiAgICAgICAgICAgIGUgPSAoaCkgPT4gaCA8PCBmID4+PiBmOwogICAgICAgICAgfQogICAgICAgICAgdmFyIGwgPSBiLmluY2x1ZGVzKCJ1bnNpZ25lZCIpID8gZnVuY3Rpb24oaCwgbikgewogICAgICAgICAgICByZXR1cm4gbiA+Pj4gMDsKICAgICAgICAgIH0gOiBmdW5jdGlvbihoLCBuKSB7CiAgICAgICAgICAgIHJldHVybiBuOwogICAgICAgICAgfTsKICAgICAgICAgIE8oYSwgewogICAgICAgICAgICBuYW1lOiBiLAogICAgICAgICAgICBmcm9tV2lyZVR5cGU6IGUsCiAgICAgICAgICAgIHRvV2lyZVR5cGU6IGwsCiAgICAgICAgICAgIGFyZ1BhY2tBZHZhbmNlOiA4LAogICAgICAgICAgICByZWFkVmFsdWVGcm9tUG9pbnRlcjogRGIoYiwgYywgMCAhPT0gZCksCiAgICAgICAgICAgIEVhOiBudWxsCiAgICAgICAgICB9KTsKICAgICAgICB9LAogICAgICAgIGc6IChhLCBiLCBjKSA9PiB7CiAgICAgICAgICBmdW5jdGlvbiBkKGYpIHsKICAgICAgICAgICAgcmV0dXJuIG5ldyBlKHkuYnVmZmVyLCBGW2YgKyA0ID4+IDJdLCBGW2YgPj4gMl0pOwogICAgICAgICAgfQogICAgICAgICAgdmFyIGUgPSBbSW50OEFycmF5LCBVaW50OEFycmF5LCBJbnQxNkFycmF5LCBVaW50MTZBcnJheSwgSW50MzJBcnJheSwgVWludDMyQXJyYXksIEZsb2F0MzJBcnJheSwgRmxvYXQ2NEFycmF5XVtiXTsKICAgICAgICAgIGMgPSBRKGMpOwogICAgICAgICAgTyhhLCB7IG5hbWU6IGMsIGZyb21XaXJlVHlwZTogZCwgYXJnUGFja0FkdmFuY2U6IDgsIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBkIH0sIHsgaWI6IHRydWUgfSk7CiAgICAgICAgfSwKICAgICAgICB3OiAoYSkgPT4gewogICAgICAgICAgTyhhLCB6Yik7CiAgICAgICAgfSwKICAgICAgICBjYTogKGEsIGIsIGMsIGQsIGUsIGYsIGwsIGgsIG4sIG0sIHAsIHUpID0+IHsKICAgICAgICAgIGMgPSBRKGMpOwogICAgICAgICAgZiA9IFQoZSwgZik7CiAgICAgICAgICBoID0gVChsLCBoKTsKICAgICAgICAgIG0gPSBUKG4sIG0pOwogICAgICAgICAgdSA9IFQocCwgdSk7CiAgICAgICAgICBQKFthXSwgW2JdLCAodikgPT4gewogICAgICAgICAgICB2ID0gdlswXTsKICAgICAgICAgICAgcmV0dXJuIFtuZXcgamIoYywgdi54YSwgZmFsc2UsIGZhbHNlLCB0cnVlLCB2LCBkLCBmLCBoLCBtLCB1KV07CiAgICAgICAgICB9KTsKICAgICAgICB9LAogICAgICAgIEQ6IChhLCBiKSA9PiB7CiAgICAgICAgICBiID0gUShiKTsKICAgICAgICAgIHZhciBjID0gInN0ZDo6c3RyaW5nIiA9PT0gYjsKICAgICAgICAgIE8oYSwgewogICAgICAgICAgICBuYW1lOiBiLAogICAgICAgICAgICBmcm9tV2lyZVR5cGU6IGZ1bmN0aW9uKGQpIHsKICAgICAgICAgICAgICB2YXIgZSA9IEZbZCA+PiAyXSwgZiA9IGQgKyA0OwogICAgICAgICAgICAgIGlmIChjKQogICAgICAgICAgICAgICAgZm9yICh2YXIgbCA9IGYsIGggPSAwOyBoIDw9IGU7ICsraCkgewogICAgICAgICAgICAgICAgICB2YXIgbiA9IGYgKyBoOwogICAgICAgICAgICAgICAgICBpZiAoaCA9PSBlIHx8IDAgPT0gQVtuXSkgewogICAgICAgICAgICAgICAgICAgIGwgPSBsID8gSihBLCBsLCBuIC0gbCkgOiAiIjsKICAgICAgICAgICAgICAgICAgICBpZiAodm9pZCAwID09PSBtKSB2YXIgbSA9IGw7CiAgICAgICAgICAgICAgICAgICAgZWxzZSBtICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoMCksIG0gKz0gbDsKICAgICAgICAgICAgICAgICAgICBsID0gbiArIDE7CiAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICBlbHNlIHsKICAgICAgICAgICAgICAgIG0gPSBBcnJheShlKTsKICAgICAgICAgICAgICAgIGZvciAoaCA9IDA7IGggPCBlOyArK2gpIG1baF0gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKEFbZiArIGhdKTsKICAgICAgICAgICAgICAgIG0gPSBtLmpvaW4oIiIpOwogICAgICAgICAgICAgIH0KICAgICAgICAgICAgICBVKGQpOwogICAgICAgICAgICAgIHJldHVybiBtOwogICAgICAgICAgICB9LAogICAgICAgICAgICB0b1dpcmVUeXBlOiBmdW5jdGlvbihkLCBlKSB7CiAgICAgICAgICAgICAgZSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyICYmIChlID0gbmV3IFVpbnQ4QXJyYXkoZSkpOwogICAgICAgICAgICAgIHZhciBmID0gInN0cmluZyIgPT0gdHlwZW9mIGU7CiAgICAgICAgICAgICAgaWYgKCEoZiB8fCBlIGluc3RhbmNlb2YgVWludDhBcnJheSB8fCBlIGluc3RhbmNlb2YgVWludDhDbGFtcGVkQXJyYXkgfHwgZSBpbnN0YW5jZW9mIEludDhBcnJheSkpCiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUigiQ2Fubm90IHBhc3Mgbm9uLXN0cmluZyB0byBzdGQ6OnN0cmluZyIpOwogICAgICAgICAgICAgIHZhciBsID0gYyAmJiBmID8gRGEoZSkgOiBlLmxlbmd0aDsKICAgICAgICAgICAgICB2YXIgaCA9IGJjKDQgKyBsICsgMSksIG4gPSBoICsgNDsKICAgICAgICAgICAgICBGW2ggPj4gMl0gPSBsOwogICAgICAgICAgICAgIGlmIChjICYmIGYpIEVhKGUsIEEsIG4sIGwgKyAxKTsKICAgICAgICAgICAgICBlbHNlIGlmIChmKQogICAgICAgICAgICAgICAgZm9yIChmID0gMDsgZiA8IGw7ICsrZikgewogICAgICAgICAgICAgICAgICB2YXIgbSA9IGUuY2hhckNvZGVBdChmKTsKICAgICAgICAgICAgICAgICAgaWYgKDI1NSA8IG0pIHRocm93IFUobiksIG5ldyBSKCJTdHJpbmcgaGFzIFVURi0xNiBjb2RlIHVuaXRzIHRoYXQgZG8gbm90IGZpdCBpbiA4IGJpdHMiKTsKICAgICAgICAgICAgICAgICAgQVtuICsgZl0gPSBtOwogICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgIGVsc2UgZm9yIChmID0gMDsgZiA8IGw7ICsrZikgQVtuICsgZl0gPSBlW2ZdOwogICAgICAgICAgICAgIG51bGwgIT09IGQgJiYgZC5wdXNoKFUsIGgpOwogICAgICAgICAgICAgIHJldHVybiBoOwogICAgICAgICAgICB9LAogICAgICAgICAgICBhcmdQYWNrQWR2YW5jZTogOCwKICAgICAgICAgICAgcmVhZFZhbHVlRnJvbVBvaW50ZXI6IEssCiAgICAgICAgICAgIEVhKGQpIHsKICAgICAgICAgICAgICBVKGQpOwogICAgICAgICAgICB9CiAgICAgICAgICB9KTsKICAgICAgICB9LAogICAgICAgIHU6IChhLCBiLCBjKSA9PiB7CiAgICAgICAgICBjID0gUShjKTsKICAgICAgICAgIGlmICgyID09PSBiKSB7CiAgICAgICAgICAgIHZhciBkID0gRmI7CiAgICAgICAgICAgIHZhciBlID0gR2I7CiAgICAgICAgICAgIHZhciBmID0gSGI7CiAgICAgICAgICAgIHZhciBsID0gKGgpID0+IENbaCA+PiAxXTsKICAgICAgICAgIH0gZWxzZSA0ID09PSBiICYmIChkID0gSWIsIGUgPSBKYiwgZiA9IEtiLCBsID0gKGgpID0+IEZbaCA+PiAyXSk7CiAgICAgICAgICBPKGEsIHsKICAgICAgICAgICAgbmFtZTogYywKICAgICAgICAgICAgZnJvbVdpcmVUeXBlOiAoaCkgPT4gewogICAgICAgICAgICAgIGZvciAodmFyIG4gPSBGW2ggPj4gMl0sIG0sIHAgPSBoICsgNCwgdSA9IDA7IHUgPD0gbjsgKyt1KSB7CiAgICAgICAgICAgICAgICB2YXIgdiA9IGggKyA0ICsgdSAqIGI7CiAgICAgICAgICAgICAgICBpZiAodSA9PSBuIHx8IDAgPT0gbCh2KSkKICAgICAgICAgICAgICAgICAgcCA9IGQocCwgdiAtIHApLCB2b2lkIDAgPT09IG0gPyBtID0gcCA6IChtICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoMCksIG0gKz0gcCksIHAgPSB2ICsgYjsKICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgVShoKTsKICAgICAgICAgICAgICByZXR1cm4gbTsKICAgICAgICAgICAgfSwKICAgICAgICAgICAgdG9XaXJlVHlwZTogKGgsIG4pID0+IHsKICAgICAgICAgICAgICBpZiAoInN0cmluZyIgIT0gdHlwZW9mIG4pIHRocm93IG5ldyBSKGBDYW5ub3QgcGFzcyBub24tc3RyaW5nIHRvIEMrKyBzdHJpbmcgdHlwZSAke2N9YCk7CiAgICAgICAgICAgICAgdmFyIG0gPSBmKG4pLCBwID0gYmMoNCArIG0gKyBiKTsKICAgICAgICAgICAgICBGW3AgPj4gMl0gPSBtIC8gYjsKICAgICAgICAgICAgICBlKG4sIHAgKyA0LCBtICsgYik7CiAgICAgICAgICAgICAgbnVsbCAhPT0gaCAmJiBoLnB1c2goVSwgcCk7CiAgICAgICAgICAgICAgcmV0dXJuIHA7CiAgICAgICAgICAgIH0sCiAgICAgICAgICAgIGFyZ1BhY2tBZHZhbmNlOiA4LAogICAgICAgICAgICByZWFkVmFsdWVGcm9tUG9pbnRlcjogSywKICAgICAgICAgICAgRWEoaCkgewogICAgICAgICAgICAgIFUoaCk7CiAgICAgICAgICAgIH0KICAgICAgICAgIH0pOwogICAgICAgIH0sCiAgICAgICAgczogKGEsIGIsIGMsIGQsIGUsIGYpID0+IHsKICAgICAgICAgIEZhW2FdID0geyBuYW1lOiBRKGIpLCBVYTogVChjLCBkKSwgRmE6IFQoZSwgZiksIFlhOiBbXSB9OwogICAgICAgIH0sCiAgICAgICAgajogKGEsIGIsIGMsIGQsIGUsIGYsIGwsIGgsIG4sIG0pID0+IHsKICAgICAgICAgIEZhW2FdLllhLnB1c2goeyBiYjogUShiKSwgaGI6IGMsIGZiOiBUKGQsIGUpLCBnYjogZiwgbmI6IGwsIG1iOiBUKGgsIG4pLCBvYjogbSB9KTsKICAgICAgICB9LAogICAgICAgIFo6IChhLCBiKSA9PiB7CiAgICAgICAgICBiID0gUShiKTsKICAgICAgICAgIE8oYSwgeyB1YjogdHJ1ZSwgbmFtZTogYiwgYXJnUGFja0FkdmFuY2U6IDAsIGZyb21XaXJlVHlwZTogKCkgPT4gewogICAgICAgICAgfSwgdG9XaXJlVHlwZTogKCkgPT4gewogICAgICAgICAgfSB9KTsKICAgICAgICB9LAogICAgICAgIEo6ICgpID0+IHsKICAgICAgICAgIHRocm93IEluZmluaXR5OwogICAgICAgIH0sCiAgICAgICAgYWE6IChhLCBiLCBjLCBkKSA9PiB7CiAgICAgICAgICBhID0gTGJbYV07CiAgICAgICAgICBiID0geWIoYik7CiAgICAgICAgICByZXR1cm4gYShudWxsLCBiLCBjLCBkKTsKICAgICAgICB9LAogICAgICAgIEY6IHdiLAogICAgICAgICQ6IChhLCBiLCBjKSA9PiB7CiAgICAgICAgICB2YXIgZCA9IE5iKGEsIGIpLCBlID0gZC5zaGlmdCgpOwogICAgICAgICAgYS0tOwogICAgICAgICAgdmFyIGYgPSBBcnJheShhKTsKICAgICAgICAgIGIgPSBgbWV0aG9kQ2FsbGVyPCgke2QubWFwKChsKSA9PiBsLm5hbWUpLmpvaW4oIiwgIil9KSA9PiAke2UubmFtZX0+YDsKICAgICAgICAgIHJldHVybiBNYigKICAgICAgICAgICAgWmEoYiwgKGwsIGgsIG4sIG0pID0+IHsKICAgICAgICAgICAgICBmb3IgKHZhciBwID0gMCwgdSA9IDA7IHUgPCBhOyArK3UpIGZbdV0gPSBkW3VdLnJlYWRWYWx1ZUZyb21Qb2ludGVyKG0gKyBwKSwgcCArPSBkW3VdLmFyZ1BhY2tBZHZhbmNlOwogICAgICAgICAgICAgIGggPSAxID09PSBjID8gT2IoaCwgZikgOiBoLmFwcGx5KGwsIGYpOwogICAgICAgICAgICAgIGwgPSBbXTsKICAgICAgICAgICAgICBoID0gZS50b1dpcmVUeXBlKGwsIGgpOwogICAgICAgICAgICAgIGwubGVuZ3RoICYmIChGW24gPj4gMl0gPSBoYihsKSk7CiAgICAgICAgICAgICAgcmV0dXJuIGg7CiAgICAgICAgICAgIH0pCiAgICAgICAgICApOwogICAgICAgIH0sCiAgICAgICAgYmE6IChhKSA9PiB7CiAgICAgICAgICA5IDwgYSAmJiAoVlthICsgMV0gKz0gMSk7CiAgICAgICAgfSwKICAgICAgICBfOiAoYSkgPT4gewogICAgICAgICAgdmFyIGIgPSB5YihhKTsKICAgICAgICAgIEdhKGIpOwogICAgICAgICAgd2IoYSk7CiAgICAgICAgfSwKICAgICAgICBvOiAoYSwgYikgPT4gewogICAgICAgICAgYSA9IEJiKGEsICJfZW12YWxfdGFrZV92YWx1ZSIpOwogICAgICAgICAgYSA9IGEucmVhZFZhbHVlRnJvbVBvaW50ZXIoYik7CiAgICAgICAgICByZXR1cm4gaGIoYSk7CiAgICAgICAgfSwKICAgICAgICBXOiAoKSA9PiB7CiAgICAgICAgICByYSgiIik7CiAgICAgICAgfSwKICAgICAgICBWOiAoKSA9PiBwZXJmb3JtYW5jZS5ub3coKSwKICAgICAgICBMOiAoYSkgPT4gewogICAgICAgICAgdmFyIGIgPSBBLmxlbmd0aDsKICAgICAgICAgIGEgPj4+PSAwOwogICAgICAgICAgaWYgKDIxNDc0ODM2NDggPCBhKSByZXR1cm4gZmFsc2U7CiAgICAgICAgICBmb3IgKHZhciBjID0gMTsgNCA+PSBjOyBjICo9IDIpIHsKICAgICAgICAgICAgdmFyIGQgPSBiICogKDEgKyAwLjIgLyBjKTsKICAgICAgICAgICAgZCA9IE1hdGgubWluKGQsIGEgKyAxMDA2NjMyOTYpOwogICAgICAgICAgICB2YXIgZSA9IE1hdGg7CiAgICAgICAgICAgIGQgPSBNYXRoLm1heChhLCBkKTsKICAgICAgICAgICAgYTogewogICAgICAgICAgICAgIGUgPSAoZS5taW4uY2FsbChlLCAyMTQ3NDgzNjQ4LCBkICsgKDY1NTM2IC0gZCAlIDY1NTM2KSAlIDY1NTM2KSAtIGZhLmJ1ZmZlci5ieXRlTGVuZ3RoICsgNjU1MzUpIC8gNjU1MzY7CiAgICAgICAgICAgICAgdHJ5IHsKICAgICAgICAgICAgICAgIGZhLmdyb3coZSk7CiAgICAgICAgICAgICAgICBsYSgpOwogICAgICAgICAgICAgICAgdmFyIGYgPSAxOwogICAgICAgICAgICAgICAgYnJlYWsgYTsKICAgICAgICAgICAgICB9IGNhdGNoIChsKSB7CiAgICAgICAgICAgICAgfQogICAgICAgICAgICAgIGYgPSB2b2lkIDA7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgaWYgKGYpIHJldHVybiB0cnVlOwogICAgICAgICAgfQogICAgICAgICAgcmV0dXJuIGZhbHNlOwogICAgICAgIH0sCiAgICAgICAgUzogKGEsIGIpID0+IHsKICAgICAgICAgIHZhciBjID0gMDsKICAgICAgICAgIFJiKCkuZm9yRWFjaCgoZCwgZSkgPT4gewogICAgICAgICAgICB2YXIgZiA9IGIgKyBjOwogICAgICAgICAgICBlID0gRlthICsgNCAqIGUgPj4gMl0gPSBmOwogICAgICAgICAgICBmb3IgKGYgPSAwOyBmIDwgZC5sZW5ndGg7ICsrZikgeVtlKytdID0gZC5jaGFyQ29kZUF0KGYpOwogICAgICAgICAgICB5W2VdID0gMDsKICAgICAgICAgICAgYyArPSBkLmxlbmd0aCArIDE7CiAgICAgICAgICB9KTsKICAgICAgICAgIHJldHVybiAwOwogICAgICAgIH0sCiAgICAgICAgVDogKGEsIGIpID0+IHsKICAgICAgICAgIHZhciBjID0gUmIoKTsKICAgICAgICAgIEZbYSA+PiAyXSA9IGMubGVuZ3RoOwogICAgICAgICAgdmFyIGQgPSAwOwogICAgICAgICAgYy5mb3JFYWNoKChlKSA9PiBkICs9IGUubGVuZ3RoICsgMSk7CiAgICAgICAgICBGW2IgPj4gMl0gPSBkOwogICAgICAgICAgcmV0dXJuIDA7CiAgICAgICAgfSwKICAgICAgICB0OiAoKSA9PiA1MiwKICAgICAgICB6OiAoKSA9PiA1MiwKICAgICAgICBIOiBmdW5jdGlvbigpIHsKICAgICAgICAgIHJldHVybiA3MDsKICAgICAgICB9LAogICAgICAgIFE6IChhLCBiLCBjLCBkKSA9PiB7CiAgICAgICAgICBmb3IgKHZhciBlID0gMCwgZiA9IDA7IGYgPCBjOyBmKyspIHsKICAgICAgICAgICAgdmFyIGwgPSBGW2IgPj4gMl0sIGggPSBGW2IgKyA0ID4+IDJdOwogICAgICAgICAgICBiICs9IDg7CiAgICAgICAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgaDsgbisrKSB7CiAgICAgICAgICAgICAgdmFyIG0gPSBBW2wgKyBuXSwgcCA9IFNiW2FdOwogICAgICAgICAgICAgIDAgPT09IG0gfHwgMTAgPT09IG0gPyAoKDEgPT09IGEgPyBlYSA6IHcpKEoocCwgMCkpLCBwLmxlbmd0aCA9IDApIDogcC5wdXNoKG0pOwogICAgICAgICAgICB9CiAgICAgICAgICAgIGUgKz0gaDsKICAgICAgICAgIH0KICAgICAgICAgIEZbZCA+PiAyXSA9IGU7CiAgICAgICAgICByZXR1cm4gMDsKICAgICAgICB9LAogICAgICAgIFU6IChhLCBiKSA9PiB7CiAgICAgICAgICBVYihBLnN1YmFycmF5KGEsIGEgKyBiKSk7CiAgICAgICAgICByZXR1cm4gMDsKICAgICAgICB9LAogICAgICAgIGk6IGNjLAogICAgICAgIGQ6IGRjLAogICAgICAgIGU6IGVjLAogICAgICAgIHA6IGZjLAogICAgICAgIHk6IGdjLAogICAgICAgIGI6IGhjLAogICAgICAgIGE6IGljLAogICAgICAgIGg6IGpjLAogICAgICAgIG46IGtjLAogICAgICAgIEc6IGxjLAogICAgICAgIEs6IChhLCBiLCBjLCBkKSA9PiBaYihhLCBiLCBjLCBkKQogICAgICB9LCBXID0gZnVuY3Rpb24oKSB7CiAgICAgICAgZnVuY3Rpb24gYShjKSB7CiAgICAgICAgICBXID0gYy5leHBvcnRzOwogICAgICAgICAgZmEgPSBXLmRhOwogICAgICAgICAgbGEoKTsKICAgICAgICAgIFMgPSBXLmhhOwogICAgICAgICAgbmEudW5zaGlmdChXLmVhKTsKICAgICAgICAgIEctLTsKICAgICAgICAgIGsubW9uaXRvclJ1bkRlcGVuZGVuY2llcz8uKEcpOwogICAgICAgICAgMCA9PSBHICYmIChudWxsICE9PSBxYSAmJiAoY2xlYXJJbnRlcnZhbChxYSksIHFhID0gbnVsbCksIEggJiYgKGMgPSBILCBIID0gbnVsbCwgYygpKSk7CiAgICAgICAgICByZXR1cm4gVzsKICAgICAgICB9CiAgICAgICAgdmFyIGIgPSB7IGE6IG1jIH07CiAgICAgICAgRysrOwogICAgICAgIGsubW9uaXRvclJ1bkRlcGVuZGVuY2llcz8uKEcpOwogICAgICAgIGlmIChrLmluc3RhbnRpYXRlV2FzbSkKICAgICAgICAgIHRyeSB7CiAgICAgICAgICAgIHJldHVybiBrLmluc3RhbnRpYXRlV2FzbShiLCBhKTsKICAgICAgICAgIH0gY2F0Y2ggKGMpIHsKICAgICAgICAgICAgdyhgTW9kdWxlLmluc3RhbnRpYXRlV2FzbSBjYWxsYmFjayBmYWlsZWQgd2l0aCBlcnJvcjogJHtjfWApLCBiYShjKTsKICAgICAgICAgIH0KICAgICAgICB4YShiLCBmdW5jdGlvbihjKSB7CiAgICAgICAgICBhKGMuaW5zdGFuY2UpOwogICAgICAgIH0pLmNhdGNoKGJhKTsKICAgICAgICByZXR1cm4ge307CiAgICAgIH0oKSwgYmMgPSAoYSkgPT4gKGJjID0gVy5mYSkoYSksIG9iID0gKGEpID0+IChvYiA9IFcuZ2EpKGEpLCBVID0gKGEpID0+IChVID0gVy5pYSkoYSksIFggPSAoYSwgYikgPT4gKFggPSBXLmphKShhLCBiKSwgWSA9IChhKSA9PiAoWSA9IFcua2EpKGEpLCBaID0gKCkgPT4gKFogPSBXLmxhKSgpOwogICAgICBrLmR5bkNhbGxfaWlqaiA9IChhLCBiLCBjLCBkLCBlLCBmKSA9PiAoay5keW5DYWxsX2lpamogPSBXLm5hKShhLCBiLCBjLCBkLCBlLCBmKTsKICAgICAgay5keW5DYWxsX3ZpamogPSAoYSwgYiwgYywgZCwgZSwgZikgPT4gKGsuZHluQ2FsbF92aWpqID0gVy5vYSkoYSwgYiwgYywgZCwgZSwgZik7CiAgICAgIGsuZHluQ2FsbF9qaWlpID0gKGEsIGIsIGMsIGQpID0+IChrLmR5bkNhbGxfamlpaSA9IFcucGEpKGEsIGIsIGMsIGQpOwogICAgICBrLmR5bkNhbGxfamlpID0gKGEsIGIsIGMpID0+IChrLmR5bkNhbGxfamlpID0gVy5xYSkoYSwgYiwgYyk7CiAgICAgIHZhciBuYyA9IGsuZHluQ2FsbF92aWlpaiA9IChhLCBiLCBjLCBkLCBlLCBmKSA9PiAobmMgPSBrLmR5bkNhbGxfdmlpaWogPSBXLnJhKShhLCBiLCBjLCBkLCBlLCBmKTsKICAgICAgay5keW5DYWxsX2ppamkgPSAoYSwgYiwgYywgZCwgZSkgPT4gKGsuZHluQ2FsbF9qaWppID0gVy5zYSkoYSwgYiwgYywgZCwgZSk7CiAgICAgIGsuZHluQ2FsbF92aWlqaWkgPSAoYSwgYiwgYywgZCwgZSwgZiwgbCkgPT4gKGsuZHluQ2FsbF92aWlqaWkgPSBXLnRhKShhLCBiLCBjLCBkLCBlLCBmLCBsKTsKICAgICAgay5keW5DYWxsX2lpaWlpaiA9IChhLCBiLCBjLCBkLCBlLCBmLCBsKSA9PiAoay5keW5DYWxsX2lpaWlpaiA9IFcudWEpKGEsIGIsIGMsIGQsIGUsIGYsIGwpOwogICAgICBrLmR5bkNhbGxfaWlpaWlqaiA9IChhLCBiLCBjLCBkLCBlLCBmLCBsLCBoLCBuKSA9PiAoay5keW5DYWxsX2lpaWlpamogPSBXLnZhKShhLCBiLCBjLCBkLCBlLCBmLCBsLCBoLCBuKTsKICAgICAgay5keW5DYWxsX2lpaWlpaWpqID0gKGEsIGIsIGMsIGQsIGUsIGYsIGwsIGgsIG4sIG0pID0+IChrLmR5bkNhbGxfaWlpaWlpamogPSBXLndhKShhLCBiLCBjLCBkLCBlLCBmLCBsLCBoLCBuLCBtKTsKICAgICAgZnVuY3Rpb24gaGMoYSwgYikgewogICAgICAgIHZhciBjID0gWigpOwogICAgICAgIHRyeSB7CiAgICAgICAgICBTLmdldChhKShiKTsKICAgICAgICB9IGNhdGNoIChkKSB7CiAgICAgICAgICBZKGMpOwogICAgICAgICAgaWYgKGQgIT09IGQgKyAwKSB0aHJvdyBkOwogICAgICAgICAgWCgxLCAwKTsKICAgICAgICB9CiAgICAgIH0KICAgICAgZnVuY3Rpb24gaWMoYSwgYiwgYykgewogICAgICAgIHZhciBkID0gWigpOwogICAgICAgIHRyeSB7CiAgICAgICAgICBTLmdldChhKShiLCBjKTsKICAgICAgICB9IGNhdGNoIChlKSB7CiAgICAgICAgICBZKGQpOwogICAgICAgICAgaWYgKGUgIT09IGUgKyAwKSB0aHJvdyBlOwogICAgICAgICAgWCgxLCAwKTsKICAgICAgICB9CiAgICAgIH0KICAgICAgZnVuY3Rpb24gZWMoYSwgYiwgYywgZCkgewogICAgICAgIHZhciBlID0gWigpOwogICAgICAgIHRyeSB7CiAgICAgICAgICByZXR1cm4gUy5nZXQoYSkoYiwgYywgZCk7CiAgICAgICAgfSBjYXRjaCAoZikgewogICAgICAgICAgWShlKTsKICAgICAgICAgIGlmIChmICE9PSBmICsgMCkgdGhyb3cgZjsKICAgICAgICAgIFgoMSwgMCk7CiAgICAgICAgfQogICAgICB9CiAgICAgIGZ1bmN0aW9uIGRjKGEsIGIsIGMpIHsKICAgICAgICB2YXIgZCA9IFooKTsKICAgICAgICB0cnkgewogICAgICAgICAgcmV0dXJuIFMuZ2V0KGEpKGIsIGMpOwogICAgICAgIH0gY2F0Y2ggKGUpIHsKICAgICAgICAgIFkoZCk7CiAgICAgICAgICBpZiAoZSAhPT0gZSArIDApIHRocm93IGU7CiAgICAgICAgICBYKDEsIDApOwogICAgICAgIH0KICAgICAgfQogICAgICBmdW5jdGlvbiBjYyhhLCBiKSB7CiAgICAgICAgdmFyIGMgPSBaKCk7CiAgICAgICAgdHJ5IHsKICAgICAgICAgIHJldHVybiBTLmdldChhKShiKTsKICAgICAgICB9IGNhdGNoIChkKSB7CiAgICAgICAgICBZKGMpOwogICAgICAgICAgaWYgKGQgIT09IGQgKyAwKSB0aHJvdyBkOwogICAgICAgICAgWCgxLCAwKTsKICAgICAgICB9CiAgICAgIH0KICAgICAgZnVuY3Rpb24gZmMoYSwgYiwgYywgZCwgZSwgZikgewogICAgICAgIHZhciBsID0gWigpOwogICAgICAgIHRyeSB7CiAgICAgICAgICByZXR1cm4gUy5nZXQoYSkoYiwgYywgZCwgZSwgZik7CiAgICAgICAgfSBjYXRjaCAoaCkgewogICAgICAgICAgWShsKTsKICAgICAgICAgIGlmIChoICE9PSBoICsgMCkgdGhyb3cgaDsKICAgICAgICAgIFgoMSwgMCk7CiAgICAgICAgfQogICAgICB9CiAgICAgIGZ1bmN0aW9uIGtjKGEsIGIsIGMsIGQsIGUpIHsKICAgICAgICB2YXIgZiA9IFooKTsKICAgICAgICB0cnkgewogICAgICAgICAgUy5nZXQoYSkoYiwgYywgZCwgZSk7CiAgICAgICAgfSBjYXRjaCAobCkgewogICAgICAgICAgWShmKTsKICAgICAgICAgIGlmIChsICE9PSBsICsgMCkgdGhyb3cgbDsKICAgICAgICAgIFgoMSwgMCk7CiAgICAgICAgfQogICAgICB9CiAgICAgIGZ1bmN0aW9uIGpjKGEsIGIsIGMsIGQpIHsKICAgICAgICB2YXIgZSA9IFooKTsKICAgICAgICB0cnkgewogICAgICAgICAgUy5nZXQoYSkoYiwgYywgZCk7CiAgICAgICAgfSBjYXRjaCAoZikgewogICAgICAgICAgWShlKTsKICAgICAgICAgIGlmIChmICE9PSBmICsgMCkgdGhyb3cgZjsKICAgICAgICAgIFgoMSwgMCk7CiAgICAgICAgfQogICAgICB9CiAgICAgIGZ1bmN0aW9uIGdjKGEpIHsKICAgICAgICB2YXIgYiA9IFooKTsKICAgICAgICB0cnkgewogICAgICAgICAgUy5nZXQoYSkoKTsKICAgICAgICB9IGNhdGNoIChjKSB7CiAgICAgICAgICBZKGIpOwogICAgICAgICAgaWYgKGMgIT09IGMgKyAwKSB0aHJvdyBjOwogICAgICAgICAgWCgxLCAwKTsKICAgICAgICB9CiAgICAgIH0KICAgICAgZnVuY3Rpb24gbGMoYSwgYiwgYywgZCwgZSwgZikgewogICAgICAgIHZhciBsID0gWigpOwogICAgICAgIHRyeSB7CiAgICAgICAgICBuYyhhLCBiLCBjLCBkLCBlLCBmKTsKICAgICAgICB9IGNhdGNoIChoKSB7CiAgICAgICAgICBZKGwpOwogICAgICAgICAgaWYgKGggIT09IGggKyAwKSB0aHJvdyBoOwogICAgICAgICAgWCgxLCAwKTsKICAgICAgICB9CiAgICAgIH0KICAgICAgdmFyIG9jOwogICAgICBIID0gZnVuY3Rpb24gcGMoKSB7CiAgICAgICAgb2MgfHwgcWMoKTsKICAgICAgICBvYyB8fCAoSCA9IHBjKTsKICAgICAgfTsKICAgICAgZnVuY3Rpb24gcWMoKSB7CiAgICAgICAgZnVuY3Rpb24gYSgpIHsKICAgICAgICAgIGlmICghb2MgJiYgKG9jID0gdHJ1ZSwgay5jYWxsZWRSdW4gPSB0cnVlLCAhaGEpKSB7CiAgICAgICAgICAgIHlhKG5hKTsKICAgICAgICAgICAgYWEoayk7CiAgICAgICAgICAgIGlmIChrLm9uUnVudGltZUluaXRpYWxpemVkKSBrLm9uUnVudGltZUluaXRpYWxpemVkKCk7CiAgICAgICAgICAgIGlmIChrLnBvc3RSdW4pCiAgICAgICAgICAgICAgZm9yICgiZnVuY3Rpb24iID09IHR5cGVvZiBrLnBvc3RSdW4gJiYgKGsucG9zdFJ1biA9IFtrLnBvc3RSdW5dKTsgay5wb3N0UnVuLmxlbmd0aDsgKSB7CiAgICAgICAgICAgICAgICB2YXIgYiA9IGsucG9zdFJ1bi5zaGlmdCgpOwogICAgICAgICAgICAgICAgb2EudW5zaGlmdChiKTsKICAgICAgICAgICAgICB9CiAgICAgICAgICAgIHlhKG9hKTsKICAgICAgICAgIH0KICAgICAgICB9CiAgICAgICAgaWYgKCEoMCA8IEcpKSB7CiAgICAgICAgICBpZiAoay5wcmVSdW4pIGZvciAoImZ1bmN0aW9uIiA9PSB0eXBlb2Ygay5wcmVSdW4gJiYgKGsucHJlUnVuID0gW2sucHJlUnVuXSk7IGsucHJlUnVuLmxlbmd0aDsgKSBwYSgpOwogICAgICAgICAgeWEobWEpOwogICAgICAgICAgMCA8IEcgfHwgKGsuc2V0U3RhdHVzID8gKGsuc2V0U3RhdHVzKCJSdW5uaW5nLi4uIiksIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7CiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7CiAgICAgICAgICAgICAgay5zZXRTdGF0dXMoIiIpOwogICAgICAgICAgICB9LCAxKTsKICAgICAgICAgICAgYSgpOwogICAgICAgICAgfSwgMSkpIDogYSgpKTsKICAgICAgICB9CiAgICAgIH0KICAgICAgaWYgKGsucHJlSW5pdCkKICAgICAgICBmb3IgKCJmdW5jdGlvbiIgPT0gdHlwZW9mIGsucHJlSW5pdCAmJiAoay5wcmVJbml0ID0gW2sucHJlSW5pdF0pOyAwIDwgay5wcmVJbml0Lmxlbmd0aDsgKSBrLnByZUluaXQucG9wKCkoKTsKICAgICAgcWMoKTsKICAgICAgcmV0dXJuIHJlYWR5UHJvbWlzZTsKICAgIH07CiAgfSkoKTsKICB2YXIgZG90bG90dGllX3BsYXllcl9kZWZhdWx0ID0gY3JlYXRlRG90TG90dGllUGxheWVyTW9kdWxlOwoKICAvLyBzcmMvY29yZS9kb3Rsb3R0aWUtd2FzbS1sb2FkZXIudHMKICB2YXIgRG90TG90dGllV2FzbUxvYWRlciA9IGNsYXNzIHsKICAgIGNvbnN0cnVjdG9yKCkgewogICAgICB0aHJvdyBuZXcgRXJyb3IoIlJlbmRlcmVyTG9hZGVyIGlzIGEgc3RhdGljIGNsYXNzIGFuZCBjYW5ub3QgYmUgaW5zdGFudGlhdGVkLiIpOwogICAgfQogICAgc3RhdGljIGFzeW5jIF90cnlMb2FkKHVybCkgewogICAgICBjb25zdCBtb2R1bGUgPSBhd2FpdCBkb3Rsb3R0aWVfcGxheWVyX2RlZmF1bHQoeyBsb2NhdGVGaWxlOiAoKSA9PiB1cmwgfSk7CiAgICAgIHJldHVybiBtb2R1bGU7CiAgICB9CiAgICAvKioKICAgICAqIFRyaWVzIHRvIGxvYWQgdGhlIFdBU00gbW9kdWxlIGZyb20gdGhlIHByaW1hcnkgVVJMLCBmYWxsaW5nIGJhY2sgdG8gYSBiYWNrdXAgVVJMIGlmIG5lY2Vzc2FyeS4KICAgICAqIFRocm93cyBhbiBlcnJvciBpZiBib3RoIFVSTHMgZmFpbCB0byBsb2FkIHRoZSBtb2R1bGUuCiAgICAgKiBAcmV0dXJucyBQcm9taXNlPE1vZHVsZT4gLSBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB0byB0aGUgbG9hZGVkIG1vZHVsZS4KICAgICAqLwogICAgc3RhdGljIGFzeW5jIF9sb2FkV2l0aEJhY2t1cCgpIHsKICAgICAgaWYgKCF0aGlzLl9Nb2R1bGVQcm9taXNlKSB7CiAgICAgICAgdGhpcy5fTW9kdWxlUHJvbWlzZSA9IHRoaXMuX3RyeUxvYWQodGhpcy5fd2FzbVVSTCkuY2F0Y2goYXN5bmMgKGluaXRpYWxFcnJvcikgPT4gewogICAgICAgICAgY29uc3QgYmFja3VwVXJsID0gYGh0dHBzOi8vdW5wa2cuY29tLyR7UEFDS0FHRV9OQU1FfUAke1BBQ0tBR0VfVkVSU0lPTn0vZGlzdC9kb3Rsb3R0aWUtcGxheWVyLndhc21gOwogICAgICAgICAgY29uc29sZS53YXJuKGBQcmltYXJ5IFdBU00gbG9hZCBmYWlsZWQgZnJvbSAke3RoaXMuX3dhc21VUkx9LiBFcnJvcjogJHtpbml0aWFsRXJyb3IubWVzc2FnZX1gKTsKICAgICAgICAgIGNvbnNvbGUud2FybihgQXR0ZW1wdGluZyB0byBsb2FkIFdBU00gZnJvbSBiYWNrdXAgVVJMOiAke2JhY2t1cFVybH1gKTsKICAgICAgICAgIHRyeSB7CiAgICAgICAgICAgIHJldHVybiBhd2FpdCB0aGlzLl90cnlMb2FkKGJhY2t1cFVybCk7CiAgICAgICAgICB9IGNhdGNoIChiYWNrdXBFcnJvcikgewogICAgICAgICAgICBjb25zb2xlLmVycm9yKGBQcmltYXJ5IFdBU00gVVJMIGZhaWxlZDogJHtpbml0aWFsRXJyb3IubWVzc2FnZX1gKTsKICAgICAgICAgICAgY29uc29sZS5lcnJvcihgQmFja3VwIFdBU00gVVJMIGZhaWxlZDogJHtiYWNrdXBFcnJvci5tZXNzYWdlfWApOwogICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIldBU00gbG9hZGluZyBmYWlsZWQgZnJvbSBhbGwgc291cmNlcy4iKTsKICAgICAgICAgIH0KICAgICAgICB9KTsKICAgICAgfQogICAgICByZXR1cm4gdGhpcy5fTW9kdWxlUHJvbWlzZTsKICAgIH0KICAgIC8qKgogICAgICogUHVibGljIG1ldGhvZCB0byBsb2FkIHRoZSBXZWJBc3NlbWJseSBtb2R1bGUuCiAgICAgKiBVdGlsaXplcyBhIHByaW1hcnkgYW5kIGJhY2t1cCBVUkwgZm9yIHJvYnVzdG5lc3MuCiAgICAgKiBAcmV0dXJucyBQcm9taXNlPE1vZHVsZT4gLSBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB0byB0aGUgbG9hZGVkIG1vZHVsZS4KICAgICAqLwogICAgc3RhdGljIGFzeW5jIGxvYWQoKSB7CiAgICAgIHJldHVybiB0aGlzLl9sb2FkV2l0aEJhY2t1cCgpOwogICAgfQogICAgLyoqCiAgICAgKiBTZXRzIGEgbmV3IFVSTCBmb3IgdGhlIFdBU00gZmlsZSBhbmQgaW52YWxpZGF0ZXMgdGhlIGN1cnJlbnQgbW9kdWxlIHByb21pc2UuCiAgICAgKgogICAgICogQHBhcmFtIHN0cmluZyAtICBUaGUgbmV3IFVSTCBmb3IgdGhlIFdBU00gZmlsZS4KICAgICAqLwogICAgc3RhdGljIHNldFdhc21VcmwodXJsKSB7CiAgICAgIHRoaXMuX3dhc21VUkwgPSB1cmw7CiAgICAgIHRoaXMuX01vZHVsZVByb21pc2UgPSBudWxsOwogICAgfQogIH07CiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvbgogIF9fcHVibGljRmllbGQoRG90TG90dGllV2FzbUxvYWRlciwgIl9Nb2R1bGVQcm9taXNlIiwgbnVsbCk7CiAgLy8gVVJMIGZvciB0aGUgV0FTTSBmaWxlLCBjb25zdHJ1Y3RlZCB1c2luZyBwYWNrYWdlIGluZm9ybWF0aW9uCiAgX19wdWJsaWNGaWVsZChEb3RMb3R0aWVXYXNtTG9hZGVyLCAiX3dhc21VUkwiLCBgaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS8ke1BBQ0tBR0VfTkFNRX1AJHtQQUNLQUdFX1ZFUlNJT059L2Rpc3QvZG90bG90dGllLXBsYXllci53YXNtYCk7CgogIC8vIHNyYy9ldmVudC1tYW5hZ2VyLnRzCiAgdmFyIEV2ZW50TWFuYWdlciA9IGNsYXNzIHsKICAgIGNvbnN0cnVjdG9yKCkgewogICAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsICJfZXZlbnRMaXN0ZW5lcnMiLCAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpKTsKICAgIH0KICAgIGFkZEV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHsKICAgICAgbGV0IGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50TGlzdGVuZXJzLmdldCh0eXBlKTsKICAgICAgaWYgKCFsaXN0ZW5lcnMpIHsKICAgICAgICBsaXN0ZW5lcnMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpOwogICAgICAgIHRoaXMuX2V2ZW50TGlzdGVuZXJzLnNldCh0eXBlLCBsaXN0ZW5lcnMpOwogICAgICB9CiAgICAgIGxpc3RlbmVycy5hZGQobGlzdGVuZXIpOwogICAgfQogICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikgewogICAgICBjb25zdCBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudExpc3RlbmVycy5nZXQodHlwZSk7CiAgICAgIGlmICghbGlzdGVuZXJzKSByZXR1cm47CiAgICAgIGlmIChsaXN0ZW5lcikgewogICAgICAgIGxpc3RlbmVycy5kZWxldGUobGlzdGVuZXIpOwogICAgICAgIGlmIChsaXN0ZW5lcnMuc2l6ZSA9PT0gMCkgewogICAgICAgICAgdGhpcy5fZXZlbnRMaXN0ZW5lcnMuZGVsZXRlKHR5cGUpOwogICAgICAgIH0KICAgICAgfSBlbHNlIHsKICAgICAgICB0aGlzLl9ldmVudExpc3RlbmVycy5kZWxldGUodHlwZSk7CiAgICAgIH0KICAgIH0KICAgIGRpc3BhdGNoKGV2ZW50KSB7CiAgICAgIGNvbnN0IGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50TGlzdGVuZXJzLmdldChldmVudC50eXBlKTsKICAgICAgbGlzdGVuZXJzPy5mb3JFYWNoKChsaXN0ZW5lcikgPT4gbGlzdGVuZXIoZXZlbnQpKTsKICAgIH0KICAgIHJlbW92ZUFsbEV2ZW50TGlzdGVuZXJzKCkgewogICAgICB0aGlzLl9ldmVudExpc3RlbmVycy5jbGVhcigpOwogICAgfQogIH07CgogIC8vIHNyYy91dGlscy50cwogIGZ1bmN0aW9uIGlzSGV4Q29sb3IoY29sb3IpIHsKICAgIHJldHVybiAvXiMoW1xkYS1mXXs2fXxbXGRhLWZdezh9KSQvaXUudGVzdChjb2xvcik7CiAgfQogIGZ1bmN0aW9uIGhleFN0cmluZ1RvUkdCQUludChjb2xvckhleCkgewogICAgaWYgKCFpc0hleENvbG9yKGNvbG9ySGV4KSkgewogICAgICByZXR1cm4gMDsKICAgIH0KICAgIGxldCBoZXggPSBjb2xvckhleC5yZXBsYWNlKCIjIiwgIiIpOwogICAgaGV4ID0gaGV4Lmxlbmd0aCA9PT0gNiA/IGAke2hleH1mZmAgOiBoZXg7CiAgICByZXR1cm4gcGFyc2VJbnQoaGV4LCAxNik7CiAgfQogIGZ1bmN0aW9uIGlzRG90TG90dGllKGZpbGVEYXRhKSB7CiAgICBpZiAoZmlsZURhdGEuYnl0ZUxlbmd0aCA8IDQpIHsKICAgICAgcmV0dXJuIGZhbHNlOwogICAgfQogICAgY29uc3QgZmlsZVNpZ25hdHVyZSA9IG5ldyBVaW50OEFycmF5KGZpbGVEYXRhLnNsaWNlKDAsIFpJUF9TSUdOQVRVUkUuYnl0ZUxlbmd0aCkpOwogICAgZm9yIChsZXQgaSA9IDA7IGkgPCBaSVBfU0lHTkFUVVJFLmxlbmd0aDsgaSArPSAxKSB7CiAgICAgIGlmIChaSVBfU0lHTkFUVVJFW2ldICE9PSBmaWxlU2lnbmF0dXJlW2ldKSB7CiAgICAgICAgcmV0dXJuIGZhbHNlOwogICAgICB9CiAgICB9CiAgICByZXR1cm4gdHJ1ZTsKICB9CiAgZnVuY3Rpb24gaXNMb3R0aWVKU09OKGpzb24pIHsKICAgIHJldHVybiBMT1RUSUVfSlNPTl9NQU5EQVRPUllfRklFTERTLmV2ZXJ5KChmaWVsZCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGpzb24sIGZpZWxkKSk7CiAgfQogIGZ1bmN0aW9uIGlzTG90dGllKGZpbGVEYXRhKSB7CiAgICBpZiAodHlwZW9mIGZpbGVEYXRhID09PSAic3RyaW5nIikgewogICAgICB0cnkgewogICAgICAgIHJldHVybiBpc0xvdHRpZUpTT04oSlNPTi5wYXJzZShmaWxlRGF0YSkpOwogICAgICB9IGNhdGNoIChfZSkgewogICAgICAgIHJldHVybiBmYWxzZTsKICAgICAgfQogICAgfSBlbHNlIHsKICAgICAgcmV0dXJuIGlzTG90dGllSlNPTihmaWxlRGF0YSk7CiAgICB9CiAgfQoKICAvLyBzcmMvZG90bG90dGllLnRzCiAgdmFyIGNyZWF0ZUNvcmVNb2RlID0gKG1vZGUsIG1vZHVsZSkgPT4gewogICAgaWYgKG1vZGUgPT09ICJyZXZlcnNlIikgewogICAgICByZXR1cm4gbW9kdWxlLk1vZGUuUmV2ZXJzZTsKICAgIH0gZWxzZSBpZiAobW9kZSA9PT0gImJvdW5jZSIpIHsKICAgICAgcmV0dXJuIG1vZHVsZS5Nb2RlLkJvdW5jZTsKICAgIH0gZWxzZSBpZiAobW9kZSA9PT0gInJldmVyc2UtYm91bmNlIikgewogICAgICByZXR1cm4gbW9kdWxlLk1vZGUuUmV2ZXJzZUJvdW5jZTsKICAgIH0gZWxzZSB7CiAgICAgIHJldHVybiBtb2R1bGUuTW9kZS5Gb3J3YXJkOwogICAgfQogIH07CiAgdmFyIGNyZWF0ZUNvcmVGaXQgPSAoZml0LCBtb2R1bGUpID0+IHsKICAgIGlmIChmaXQgPT09ICJjb250YWluIikgewogICAgICByZXR1cm4gbW9kdWxlLkZpdC5Db250YWluOwogICAgfSBlbHNlIGlmIChmaXQgPT09ICJjb3ZlciIpIHsKICAgICAgcmV0dXJuIG1vZHVsZS5GaXQuQ292ZXI7CiAgICB9IGVsc2UgaWYgKGZpdCA9PT0gImZpbGwiKSB7CiAgICAgIHJldHVybiBtb2R1bGUuRml0LkZpbGw7CiAgICB9IGVsc2UgaWYgKGZpdCA9PT0gImZpdC1oZWlnaHQiKSB7CiAgICAgIHJldHVybiBtb2R1bGUuRml0LkZpdEhlaWdodDsKICAgIH0gZWxzZSBpZiAoZml0ID09PSAiZml0LXdpZHRoIikgewogICAgICByZXR1cm4gbW9kdWxlLkZpdC5GaXRXaWR0aDsKICAgIH0gZWxzZSB7CiAgICAgIHJldHVybiBtb2R1bGUuRml0Lk5vbmU7CiAgICB9CiAgfTsKICB2YXIgY3JlYXRlQ29yZUFsaWduID0gKGFsaWduLCBtb2R1bGUpID0+IHsKICAgIGNvbnN0IGNvcmVBbGlnbiA9IG5ldyBtb2R1bGUuVmVjdG9yRmxvYXQoKTsKICAgIGNvcmVBbGlnbi5wdXNoX2JhY2soYWxpZ25bMF0pOwogICAgY29yZUFsaWduLnB1c2hfYmFjayhhbGlnblsxXSk7CiAgICByZXR1cm4gY29yZUFsaWduOwogIH07CiAgdmFyIGNyZWF0ZUNvcmVTZWdtZW50ID0gKHNlZ21lbnQsIG1vZHVsZSkgPT4gewogICAgY29uc3QgY29yZXNlZ21lbnQgPSBuZXcgbW9kdWxlLlZlY3RvckZsb2F0KCk7CiAgICBpZiAoc2VnbWVudC5sZW5ndGggIT09IDIpIHJldHVybiBjb3Jlc2VnbWVudDsKICAgIGNvcmVzZWdtZW50LnB1c2hfYmFjayhzZWdtZW50WzBdKTsKICAgIGNvcmVzZWdtZW50LnB1c2hfYmFjayhzZWdtZW50WzFdKTsKICAgIHJldHVybiBjb3Jlc2VnbWVudDsKICB9OwogIHZhciBfRG90TG90dGllID0gY2xhc3MgX0RvdExvdHRpZSB7CiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHsKICAgICAgX19wdWJsaWNGaWVsZCh0aGlzLCAiX2NhbnZhcyIpOwogICAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsICJfY29udGV4dCIsIG51bGwpOwogICAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsICJfZXZlbnRNYW5hZ2VyIik7CiAgICAgIF9fcHVibGljRmllbGQodGhpcywgIl9hbmltYXRpb25GcmFtZUlkIiwgbnVsbCk7CiAgICAgIF9fcHVibGljRmllbGQodGhpcywgIl9mcmFtZU1hbmFnZXIiKTsKICAgICAgX19wdWJsaWNGaWVsZCh0aGlzLCAiX2RvdExvdHRpZUNvcmUiLCBudWxsKTsKICAgICAgX19wdWJsaWNGaWVsZCh0aGlzLCAiX3JlbmRlckNvbmZpZyIsIHt9KTsKICAgICAgX19wdWJsaWNGaWVsZCh0aGlzLCAiX2lzRnJvemVuIiwgZmFsc2UpOwogICAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsICJfYmFja2dyb3VuZENvbG9yIiwgbnVsbCk7CiAgICAgIF9fcHVibGljRmllbGQodGhpcywgIl9wb2ludGVyVXBNZXRob2QiKTsKICAgICAgX19wdWJsaWNGaWVsZCh0aGlzLCAiX3BvaW50ZXJEb3duTWV0aG9kIik7CiAgICAgIF9fcHVibGljRmllbGQodGhpcywgIl9wb2ludGVyTW92ZU1ldGhvZCIpOwogICAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsICJfcG9pbnRlckVudGVyTWV0aG9kIik7CiAgICAgIF9fcHVibGljRmllbGQodGhpcywgIl9wb2ludGVyRXhpdE1ldGhvZCIpOwogICAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsICJfb25Db21wbGV0ZU1ldGhvZCIpOwogICAgICB0aGlzLl9jYW52YXMgPSBjb25maWcuY2FudmFzOwogICAgICB0aGlzLl9jb250ZXh0ID0gdGhpcy5fY2FudmFzLmdldENvbnRleHQoIjJkIik7CiAgICAgIHRoaXMuX2V2ZW50TWFuYWdlciA9IG5ldyBFdmVudE1hbmFnZXIoKTsKICAgICAgdGhpcy5fZnJhbWVNYW5hZ2VyID0gbmV3IEFuaW1hdGlvbkZyYW1lTWFuYWdlcigpOwogICAgICB0aGlzLl9yZW5kZXJDb25maWcgPSBjb25maWcucmVuZGVyQ29uZmlnID8/IHt9OwogICAgICBEb3RMb3R0aWVXYXNtTG9hZGVyLmxvYWQoKS50aGVuKChtb2R1bGUpID0+IHsKICAgICAgICBfRG90TG90dGllLl93YXNtTW9kdWxlID0gbW9kdWxlOwogICAgICAgIHRoaXMuX2RvdExvdHRpZUNvcmUgPSBuZXcgbW9kdWxlLkRvdExvdHRpZVBsYXllcih7CiAgICAgICAgICBhdXRvcGxheTogY29uZmlnLmF1dG9wbGF5ID8/IGZhbHNlLAogICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAwLAogICAgICAgICAgbG9vcEFuaW1hdGlvbjogY29uZmlnLmxvb3AgPz8gZmFsc2UsCiAgICAgICAgICBtb2RlOiBjcmVhdGVDb3JlTW9kZShjb25maWcubW9kZSA/PyAiZm9yd2FyZCIsIG1vZHVsZSksCiAgICAgICAgICBzZWdtZW50OiBjcmVhdGVDb3JlU2VnbWVudChjb25maWcuc2VnbWVudCA/PyBbXSwgbW9kdWxlKSwKICAgICAgICAgIHNwZWVkOiBjb25maWcuc3BlZWQgPz8gMSwKICAgICAgICAgIHVzZUZyYW1lSW50ZXJwb2xhdGlvbjogY29uZmlnLnVzZUZyYW1lSW50ZXJwb2xhdGlvbiA/PyB0cnVlLAogICAgICAgICAgbWFya2VyOiBjb25maWcubWFya2VyID8/ICIiLAogICAgICAgICAgbGF5b3V0OiBjb25maWcubGF5b3V0ID8gewogICAgICAgICAgICBhbGlnbjogY3JlYXRlQ29yZUFsaWduKGNvbmZpZy5sYXlvdXQuYWxpZ24sIG1vZHVsZSksCiAgICAgICAgICAgIGZpdDogY3JlYXRlQ29yZUZpdChjb25maWcubGF5b3V0LmZpdCwgbW9kdWxlKQogICAgICAgICAgfSA6IG1vZHVsZS5jcmVhdGVEZWZhdWx0TGF5b3V0KCkKICAgICAgICB9KTsKICAgICAgICB0aGlzLl9ldmVudE1hbmFnZXIuZGlzcGF0Y2goeyB0eXBlOiAicmVhZHkiIH0pOwogICAgICAgIGlmIChjb25maWcuZGF0YSkgewogICAgICAgICAgdGhpcy5fbG9hZEZyb21EYXRhKGNvbmZpZy5kYXRhKTsKICAgICAgICB9IGVsc2UgaWYgKGNvbmZpZy5zcmMpIHsKICAgICAgICAgIHRoaXMuX2xvYWRGcm9tU3JjKGNvbmZpZy5zcmMpOwogICAgICAgIH0KICAgICAgICBpZiAoY29uZmlnLmJhY2tncm91bmRDb2xvcikgewogICAgICAgICAgdGhpcy5zZXRCYWNrZ3JvdW5kQ29sb3IoY29uZmlnLmJhY2tncm91bmRDb2xvcik7CiAgICAgICAgfQogICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHsKICAgICAgICB0aGlzLl9ldmVudE1hbmFnZXIuZGlzcGF0Y2goewogICAgICAgICAgdHlwZTogImxvYWRFcnJvciIsCiAgICAgICAgICBlcnJvcjogbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCB3YXNtIG1vZHVsZTogJHtlcnJvcn1gKQogICAgICAgIH0pOwogICAgICB9KTsKICAgICAgdGhpcy5fcG9pbnRlclVwTWV0aG9kID0gdGhpcy5fb25Qb2ludGVyVXAuYmluZCh0aGlzKTsKICAgICAgdGhpcy5fcG9pbnRlckRvd25NZXRob2QgPSB0aGlzLl9vblBvaW50ZXJEb3duLmJpbmQodGhpcyk7CiAgICAgIHRoaXMuX3BvaW50ZXJNb3ZlTWV0aG9kID0gdGhpcy5fb25Qb2ludGVyTW92ZS5iaW5kKHRoaXMpOwogICAgICB0aGlzLl9wb2ludGVyRW50ZXJNZXRob2QgPSB0aGlzLl9vblBvaW50ZXJFbnRlci5iaW5kKHRoaXMpOwogICAgICB0aGlzLl9wb2ludGVyRXhpdE1ldGhvZCA9IHRoaXMuX29uUG9pbnRlckxlYXZlLmJpbmQodGhpcyk7CiAgICAgIHRoaXMuX29uQ29tcGxldGVNZXRob2QgPSB0aGlzLl9vbkNvbXBsZXRlLmJpbmQodGhpcyk7CiAgICB9CiAgICBfZGlzcGF0Y2hFcnJvcihtZXNzYWdlKSB7CiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7CiAgICAgIHRoaXMuX2V2ZW50TWFuYWdlci5kaXNwYXRjaCh7IHR5cGU6ICJsb2FkRXJyb3IiLCBlcnJvcjogbmV3IEVycm9yKG1lc3NhZ2UpIH0pOwogICAgfQogICAgYXN5bmMgX2ZldGNoRGF0YShzcmMpIHsKICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChzcmMpOwogICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7CiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gZmV0Y2ggYW5pbWF0aW9uIGRhdGEgZnJvbSBVUkw6ICR7c3JjfS4gJHtyZXNwb25zZS5zdGF0dXN9OiAke3Jlc3BvbnNlLnN0YXR1c1RleHR9YCk7CiAgICAgIH0KICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmFycmF5QnVmZmVyKCk7CiAgICAgIGlmIChpc0RvdExvdHRpZShkYXRhKSkgewogICAgICAgIHJldHVybiBkYXRhOwogICAgICB9CiAgICAgIHJldHVybiBuZXcgVGV4dERlY29kZXIoKS5kZWNvZGUoZGF0YSk7CiAgICB9CiAgICBfbG9hZEZyb21EYXRhKGRhdGEpIHsKICAgICAgaWYgKHRoaXMuX2RvdExvdHRpZUNvcmUgPT09IG51bGwpIHJldHVybjsKICAgICAgY29uc3Qgd2lkdGggPSB0aGlzLl9jYW52YXMud2lkdGg7CiAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuX2NhbnZhcy5oZWlnaHQ7CiAgICAgIGxldCBsb2FkZWQgPSBmYWxzZTsKICAgICAgaWYgKHR5cGVvZiBkYXRhID09PSAic3RyaW5nIikgewogICAgICAgIGlmICghaXNMb3R0aWUoZGF0YSkpIHsKICAgICAgICAgIHRoaXMuX2Rpc3BhdGNoRXJyb3IoCiAgICAgICAgICAgICJJbnZhbGlkIExvdHRpZSBKU09OIHN0cmluZzogVGhlIHByb3ZpZGVkIHN0cmluZyBkb2VzIG5vdCBjb25mb3JtIHRvIHRoZSBMb3R0aWUgSlNPTiBmb3JtYXQuIgogICAgICAgICAgKTsKICAgICAgICAgIHJldHVybjsKICAgICAgICB9CiAgICAgICAgbG9hZGVkID0gdGhpcy5fZG90TG90dGllQ29yZS5sb2FkQW5pbWF0aW9uRGF0YShkYXRhLCB3aWR0aCwgaGVpZ2h0KTsKICAgICAgfSBlbHNlIGlmIChkYXRhIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHsKICAgICAgICBpZiAoIWlzRG90TG90dGllKGRhdGEpKSB7CiAgICAgICAgICB0aGlzLl9kaXNwYXRjaEVycm9yKAogICAgICAgICAgICAiSW52YWxpZCBkb3RMb3R0aWUgQXJyYXlCdWZmZXI6IFRoZSBwcm92aWRlZCBBcnJheUJ1ZmZlciBkb2VzIG5vdCBjb25mb3JtIHRvIHRoZSBkb3RMb3R0aWUgZm9ybWF0LiIKICAgICAgICAgICk7CiAgICAgICAgICByZXR1cm47CiAgICAgICAgfQogICAgICAgIGxvYWRlZCA9IHRoaXMuX2RvdExvdHRpZUNvcmUubG9hZERvdExvdHRpZURhdGEoZGF0YSwgd2lkdGgsIGhlaWdodCk7CiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGRhdGEgPT09ICJvYmplY3QiKSB7CiAgICAgICAgaWYgKCFpc0xvdHRpZShkYXRhKSkgewogICAgICAgICAgdGhpcy5fZGlzcGF0Y2hFcnJvcigKICAgICAgICAgICAgIkludmFsaWQgTG90dGllIEpTT04gb2JqZWN0OiBUaGUgcHJvdmlkZWQgb2JqZWN0IGRvZXMgbm90IGNvbmZvcm0gdG8gdGhlIExvdHRpZSBKU09OIGZvcm1hdC4iCiAgICAgICAgICApOwogICAgICAgICAgcmV0dXJuOwogICAgICAgIH0KICAgICAgICBsb2FkZWQgPSB0aGlzLl9kb3RMb3R0aWVDb3JlLmxvYWRBbmltYXRpb25EYXRhKEpTT04uc3RyaW5naWZ5KGRhdGEpLCB3aWR0aCwgaGVpZ2h0KTsKICAgICAgfSBlbHNlIHsKICAgICAgICB0aGlzLl9kaXNwYXRjaEVycm9yKAogICAgICAgICAgYFVuc3VwcG9ydGVkIGRhdGEgdHlwZSBmb3IgYW5pbWF0aW9uIGRhdGEuIEV4cGVjdGVkOiAKICAgICAgICAgIC0gc3RyaW5nIChMb3R0aWUgSlNPTiksCiAgICAgICAgICAtIEFycmF5QnVmZmVyIChkb3RMb3R0aWUpLAogICAgICAgICAgLSBvYmplY3QgKExvdHRpZSBKU09OKS4gCiAgICAgICAgICBSZWNlaXZlZDogJHt0eXBlb2YgZGF0YX1gCiAgICAgICAgKTsKICAgICAgICByZXR1cm47CiAgICAgIH0KICAgICAgaWYgKGxvYWRlZCkgewogICAgICAgIHRoaXMuX2V2ZW50TWFuYWdlci5kaXNwYXRjaCh7IHR5cGU6ICJsb2FkIiB9KTsKICAgICAgICBpZiAoSVNfQlJPV1NFUikgewogICAgICAgICAgdGhpcy5yZXNpemUoKTsKICAgICAgICB9CiAgICAgICAgdGhpcy5fZXZlbnRNYW5hZ2VyLmRpc3BhdGNoKHsKICAgICAgICAgIHR5cGU6ICJmcmFtZSIsCiAgICAgICAgICBjdXJyZW50RnJhbWU6IHRoaXMuX2RvdExvdHRpZUNvcmUuY3VycmVudEZyYW1lKCkKICAgICAgICB9KTsKICAgICAgICB0aGlzLl9yZW5kZXIoKTsKICAgICAgICBpZiAodGhpcy5fZG90TG90dGllQ29yZS5jb25maWcoKS5hdXRvcGxheSkgewogICAgICAgICAgdGhpcy5fZG90TG90dGllQ29yZS5wbGF5KCk7CiAgICAgICAgICBpZiAodGhpcy5fZG90TG90dGllQ29yZS5pc1BsYXlpbmcoKSkgewogICAgICAgICAgICB0aGlzLl9ldmVudE1hbmFnZXIuZGlzcGF0Y2goeyB0eXBlOiAicGxheSIgfSk7CiAgICAgICAgICAgIHRoaXMuX2FuaW1hdGlvbkZyYW1lSWQgPSB0aGlzLl9mcmFtZU1hbmFnZXIucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuX2RyYXcuYmluZCh0aGlzKSk7CiAgICAgICAgICB9IGVsc2UgewogICAgICAgICAgICBjb25zb2xlLmVycm9yKCJzb21ldGhpbmcgd2VudCB3cm9uZywgdGhlIGFuaW1hdGlvbiB3YXMgc3VwcG9zZSB0byBhdXRvcGxheSIpOwogICAgICAgICAgfQogICAgICAgIH0KICAgICAgfSBlbHNlIHsKICAgICAgICB0aGlzLl9kaXNwYXRjaEVycm9yKCJGYWlsZWQgdG8gbG9hZCBhbmltYXRpb24gZGF0YSIpOwogICAgICB9CiAgICB9CiAgICBfbG9hZEZyb21TcmMoc3JjKSB7CiAgICAgIHRoaXMuX2ZldGNoRGF0YShzcmMpLnRoZW4oKGRhdGEpID0+IHRoaXMuX2xvYWRGcm9tRGF0YShkYXRhKSkuY2F0Y2goKGVycm9yKSA9PiB0aGlzLl9kaXNwYXRjaEVycm9yKGBGYWlsZWQgdG8gbG9hZCBhbmltYXRpb24gZGF0YSBmcm9tIFVSTDogJHtzcmN9LiAke2Vycm9yfWApKTsKICAgIH0KICAgIGdldCBhY3RpdmVBbmltYXRpb25JZCgpIHsKICAgICAgcmV0dXJuIHRoaXMuX2RvdExvdHRpZUNvcmU/LmFjdGl2ZUFuaW1hdGlvbklkKCk7CiAgICB9CiAgICBnZXQgYWN0aXZlVGhlbWVJZCgpIHsKICAgICAgcmV0dXJuIHRoaXMuX2RvdExvdHRpZUNvcmU/LmFjdGl2ZVRoZW1lSWQoKTsKICAgIH0KICAgIGdldCBsYXlvdXQoKSB7CiAgICAgIGNvbnN0IGxheW91dCA9IHRoaXMuX2RvdExvdHRpZUNvcmU/LmNvbmZpZygpLmxheW91dDsKICAgICAgaWYgKGxheW91dCkgewogICAgICAgIHJldHVybiB7CiAgICAgICAgICBhbGlnbjogW2xheW91dC5hbGlnbi5nZXQoMCksIGxheW91dC5hbGlnbi5nZXQoMSldLAogICAgICAgICAgZml0OiAoKCkgPT4gewogICAgICAgICAgICBzd2l0Y2ggKGxheW91dC5maXQpIHsKICAgICAgICAgICAgICBjYXNlIF9Eb3RMb3R0aWUuX3dhc21Nb2R1bGU/LkZpdC5Db250YWluOgogICAgICAgICAgICAgICAgcmV0dXJuICJjb250YWluIjsKICAgICAgICAgICAgICBjYXNlIF9Eb3RMb3R0aWUuX3dhc21Nb2R1bGU/LkZpdC5Db3ZlcjoKICAgICAgICAgICAgICAgIHJldHVybiAiY292ZXIiOwogICAgICAgICAgICAgIGNhc2UgX0RvdExvdHRpZS5fd2FzbU1vZHVsZT8uRml0LkZpbGw6CiAgICAgICAgICAgICAgICByZXR1cm4gImZpbGwiOwogICAgICAgICAgICAgIGNhc2UgX0RvdExvdHRpZS5fd2FzbU1vZHVsZT8uRml0LkZpdEhlaWdodDoKICAgICAgICAgICAgICAgIHJldHVybiAiZml0LWhlaWdodCI7CiAgICAgICAgICAgICAgY2FzZSBfRG90TG90dGllLl93YXNtTW9kdWxlPy5GaXQuRml0V2lkdGg6CiAgICAgICAgICAgICAgICByZXR1cm4gImZpdC13aWR0aCI7CiAgICAgICAgICAgICAgY2FzZSBfRG90TG90dGllLl93YXNtTW9kdWxlPy5GaXQuTm9uZToKICAgICAgICAgICAgICAgIHJldHVybiAibm9uZSI7CiAgICAgICAgICAgICAgZGVmYXVsdDoKICAgICAgICAgICAgICAgIHJldHVybiAiY29udGFpbiI7CiAgICAgICAgICAgIH0KICAgICAgICAgIH0pKCkKICAgICAgICB9OwogICAgICB9CiAgICAgIHJldHVybiB2b2lkIDA7CiAgICB9CiAgICBnZXQgbWFya2VyKCkgewogICAgICBjb25zdCBtYXJrZXIgPSB0aGlzLl9kb3RMb3R0aWVDb3JlPy5jb25maWcoKS5tYXJrZXI7CiAgICAgIHJldHVybiBtYXJrZXI7CiAgICB9CiAgICBnZXQgbWFuaWZlc3QoKSB7CiAgICAgIHRyeSB7CiAgICAgICAgY29uc3QgbWFuaWZlc3QgPSB0aGlzLl9kb3RMb3R0aWVDb3JlPy5tYW5pZmVzdFN0cmluZygpOwogICAgICAgIGlmICh0aGlzLl9kb3RMb3R0aWVDb3JlID09PSBudWxsIHx8ICFtYW5pZmVzdCkgcmV0dXJuIG51bGw7CiAgICAgICAgY29uc3QgbWFuaWZlc3RKc29uID0gSlNPTi5wYXJzZShtYW5pZmVzdCk7CiAgICAgICAgaWYgKE9iamVjdC5rZXlzKG1hbmlmZXN0SnNvbikubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbDsKICAgICAgICByZXR1cm4gbWFuaWZlc3RKc29uOwogICAgICB9IGNhdGNoIChfZXJyKSB7CiAgICAgICAgcmV0dXJuIG51bGw7CiAgICAgIH0KICAgIH0KICAgIGdldCByZW5kZXJDb25maWcoKSB7CiAgICAgIHJldHVybiB0aGlzLl9yZW5kZXJDb25maWc7CiAgICB9CiAgICBnZXQgc2VnbWVudCgpIHsKICAgICAgY29uc3Qgc2VnbWVudCA9IHRoaXMuX2RvdExvdHRpZUNvcmU/LmNvbmZpZygpLnNlZ21lbnQ7CiAgICAgIGlmIChzZWdtZW50ICYmIHNlZ21lbnQuc2l6ZSgpID09PSAyKSB7CiAgICAgICAgcmV0dXJuIFtzZWdtZW50LmdldCgwKSwgc2VnbWVudC5nZXQoMSldOwogICAgICB9CiAgICAgIHJldHVybiB2b2lkIDA7CiAgICB9CiAgICBnZXQgbG9vcCgpIHsKICAgICAgcmV0dXJuIHRoaXMuX2RvdExvdHRpZUNvcmU/LmNvbmZpZygpLmxvb3BBbmltYXRpb24gPz8gZmFsc2U7CiAgICB9CiAgICBnZXQgbW9kZSgpIHsKICAgICAgY29uc3QgbW9kZSA9IHRoaXMuX2RvdExvdHRpZUNvcmU/LmNvbmZpZygpLm1vZGU7CiAgICAgIGlmIChtb2RlID09PSBfRG90TG90dGllLl93YXNtTW9kdWxlPy5Nb2RlLlJldmVyc2UpIHsKICAgICAgICByZXR1cm4gInJldmVyc2UiOwogICAgICB9IGVsc2UgaWYgKG1vZGUgPT09IF9Eb3RMb3R0aWUuX3dhc21Nb2R1bGU/Lk1vZGUuQm91bmNlKSB7CiAgICAgICAgcmV0dXJuICJib3VuY2UiOwogICAgICB9IGVsc2UgaWYgKG1vZGUgPT09IF9Eb3RMb3R0aWUuX3dhc21Nb2R1bGU/Lk1vZGUuUmV2ZXJzZUJvdW5jZSkgewogICAgICAgIHJldHVybiAicmV2ZXJzZS1ib3VuY2UiOwogICAgICB9IGVsc2UgewogICAgICAgIHJldHVybiAiZm9yd2FyZCI7CiAgICAgIH0KICAgIH0KICAgIGdldCBpc0Zyb3plbigpIHsKICAgICAgcmV0dXJuIHRoaXMuX2lzRnJvemVuOwogICAgfQogICAgZ2V0IGJhY2tncm91bmRDb2xvcigpIHsKICAgICAgcmV0dXJuIHRoaXMuX2JhY2tncm91bmRDb2xvciA/PyAiIjsKICAgIH0KICAgIGdldCBhdXRvcGxheSgpIHsKICAgICAgcmV0dXJuIHRoaXMuX2RvdExvdHRpZUNvcmU/LmNvbmZpZygpLmF1dG9wbGF5ID8/IGZhbHNlOwogICAgfQogICAgZ2V0IHVzZUZyYW1lSW50ZXJwb2xhdGlvbigpIHsKICAgICAgcmV0dXJuIHRoaXMuX2RvdExvdHRpZUNvcmU/LmNvbmZpZygpLnVzZUZyYW1lSW50ZXJwb2xhdGlvbiA/PyBmYWxzZTsKICAgIH0KICAgIGdldCBzcGVlZCgpIHsKICAgICAgcmV0dXJuIHRoaXMuX2RvdExvdHRpZUNvcmU/LmNvbmZpZygpLnNwZWVkID8/IDA7CiAgICB9CiAgICBnZXQgaXNSZWFkeSgpIHsKICAgICAgcmV0dXJuIHRoaXMuX2RvdExvdHRpZUNvcmUgIT09IG51bGw7CiAgICB9CiAgICBnZXQgaXNMb2FkZWQoKSB7CiAgICAgIHJldHVybiB0aGlzLl9kb3RMb3R0aWVDb3JlPy5pc0xvYWRlZCgpID8/IGZhbHNlOwogICAgfQogICAgZ2V0IGlzUGxheWluZygpIHsKICAgICAgcmV0dXJuIHRoaXMuX2RvdExvdHRpZUNvcmU/LmlzUGxheWluZygpID8/IGZhbHNlOwogICAgfQogICAgZ2V0IGlzUGF1c2VkKCkgewogICAgICByZXR1cm4gdGhpcy5fZG90TG90dGllQ29yZT8uaXNQYXVzZWQoKSA/PyBmYWxzZTsKICAgIH0KICAgIGdldCBpc1N0b3BwZWQoKSB7CiAgICAgIHJldHVybiB0aGlzLl9kb3RMb3R0aWVDb3JlPy5pc1N0b3BwZWQoKSA/PyBmYWxzZTsKICAgIH0KICAgIGdldCBjdXJyZW50RnJhbWUoKSB7CiAgICAgIHJldHVybiB0aGlzLl9kb3RMb3R0aWVDb3JlPy5jdXJyZW50RnJhbWUoKSA/PyAwOwogICAgfQogICAgZ2V0IGxvb3BDb3VudCgpIHsKICAgICAgcmV0dXJuIHRoaXMuX2RvdExvdHRpZUNvcmU/Lmxvb3BDb3VudCgpID8/IDA7CiAgICB9CiAgICBnZXQgdG90YWxGcmFtZXMoKSB7CiAgICAgIHJldHVybiB0aGlzLl9kb3RMb3R0aWVDb3JlPy50b3RhbEZyYW1lcygpID8/IDA7CiAgICB9CiAgICBnZXQgZHVyYXRpb24oKSB7CiAgICAgIHJldHVybiB0aGlzLl9kb3RMb3R0aWVDb3JlPy5kdXJhdGlvbigpID8/IDA7CiAgICB9CiAgICBnZXQgc2VnbWVudER1cmF0aW9uKCkgewogICAgICByZXR1cm4gdGhpcy5fZG90TG90dGllQ29yZT8uc2VnbWVudER1cmF0aW9uKCkgPz8gMDsKICAgIH0KICAgIGdldCBjYW52YXMoKSB7CiAgICAgIHJldHVybiB0aGlzLl9jYW52YXM7CiAgICB9CiAgICBsb2FkKGNvbmZpZykgewogICAgICBpZiAodGhpcy5fZG90TG90dGllQ29yZSA9PT0gbnVsbCB8fCBfRG90TG90dGllLl93YXNtTW9kdWxlID09PSBudWxsKSByZXR1cm47CiAgICAgIHRoaXMuX2RvdExvdHRpZUNvcmUuc2V0Q29uZmlnKHsKICAgICAgICBhdXRvcGxheTogY29uZmlnLmF1dG9wbGF5ID8/IGZhbHNlLAogICAgICAgIGJhY2tncm91bmRDb2xvcjogMCwKICAgICAgICBsb29wQW5pbWF0aW9uOiBjb25maWcubG9vcCA/PyBmYWxzZSwKICAgICAgICBtb2RlOiBjcmVhdGVDb3JlTW9kZShjb25maWcubW9kZSA/PyAiZm9yd2FyZCIsIF9Eb3RMb3R0aWUuX3dhc21Nb2R1bGUpLAogICAgICAgIHNlZ21lbnQ6IGNyZWF0ZUNvcmVTZWdtZW50KGNvbmZpZy5zZWdtZW50ID8/IFtdLCBfRG90TG90dGllLl93YXNtTW9kdWxlKSwKICAgICAgICBzcGVlZDogY29uZmlnLnNwZWVkID8/IDEsCiAgICAgICAgdXNlRnJhbWVJbnRlcnBvbGF0aW9uOiBjb25maWcudXNlRnJhbWVJbnRlcnBvbGF0aW9uID8/IHRydWUsCiAgICAgICAgbWFya2VyOiBjb25maWcubWFya2VyID8/ICIiLAogICAgICAgIGxheW91dDogY29uZmlnLmxheW91dCA/IHsKICAgICAgICAgIGFsaWduOiBjcmVhdGVDb3JlQWxpZ24oY29uZmlnLmxheW91dC5hbGlnbiwgX0RvdExvdHRpZS5fd2FzbU1vZHVsZSksCiAgICAgICAgICBmaXQ6IGNyZWF0ZUNvcmVGaXQoY29uZmlnLmxheW91dC5maXQsIF9Eb3RMb3R0aWUuX3dhc21Nb2R1bGUpCiAgICAgICAgfSA6IF9Eb3RMb3R0aWUuX3dhc21Nb2R1bGUuY3JlYXRlRGVmYXVsdExheW91dCgpCiAgICAgIH0pOwogICAgICBpZiAoY29uZmlnLmRhdGEpIHsKICAgICAgICB0aGlzLl9sb2FkRnJvbURhdGEoY29uZmlnLmRhdGEpOwogICAgICB9IGVsc2UgaWYgKGNvbmZpZy5zcmMpIHsKICAgICAgICB0aGlzLl9sb2FkRnJvbVNyYyhjb25maWcuc3JjKTsKICAgICAgfQogICAgICB0aGlzLnNldEJhY2tncm91bmRDb2xvcihjb25maWcuYmFja2dyb3VuZENvbG9yID8/ICIiKTsKICAgIH0KICAgIF9yZW5kZXIoKSB7CiAgICAgIGlmICh0aGlzLl9kb3RMb3R0aWVDb3JlID09PSBudWxsIHx8IHRoaXMuX2NvbnRleHQgPT09IG51bGwpIHJldHVybiBmYWxzZTsKICAgICAgY29uc3QgcmVuZGVyZWQgPSB0aGlzLl9kb3RMb3R0aWVDb3JlLnJlbmRlcigpOwogICAgICBpZiAocmVuZGVyZWQpIHsKICAgICAgICBjb25zdCBidWZmZXIgPSB0aGlzLl9kb3RMb3R0aWVDb3JlLmJ1ZmZlcigpOwogICAgICAgIGNvbnN0IGNsYW1wZWRCdWZmZXIgPSBuZXcgVWludDhDbGFtcGVkQXJyYXkoYnVmZmVyLCAwLCB0aGlzLl9jYW52YXMud2lkdGggKiB0aGlzLl9jYW52YXMuaGVpZ2h0ICogNCk7CiAgICAgICAgbGV0IGltYWdlRGF0YSA9IG51bGw7CiAgICAgICAgaWYgKHR5cGVvZiBJbWFnZURhdGEgPT09ICJ1bmRlZmluZWQiKSB7CiAgICAgICAgICBpbWFnZURhdGEgPSB0aGlzLl9jb250ZXh0LmNyZWF0ZUltYWdlRGF0YSh0aGlzLl9jYW52YXMud2lkdGgsIHRoaXMuX2NhbnZhcy5oZWlnaHQpOwogICAgICAgICAgaW1hZ2VEYXRhLmRhdGEuc2V0KGNsYW1wZWRCdWZmZXIpOwogICAgICAgIH0gZWxzZSB7CiAgICAgICAgICBpbWFnZURhdGEgPSBuZXcgSW1hZ2VEYXRhKGNsYW1wZWRCdWZmZXIsIHRoaXMuX2NhbnZhcy53aWR0aCwgdGhpcy5fY2FudmFzLmhlaWdodCk7CiAgICAgICAgfQogICAgICAgIHRoaXMuX2NvbnRleHQucHV0SW1hZ2VEYXRhKGltYWdlRGF0YSwgMCwgMCk7CiAgICAgICAgdGhpcy5fZXZlbnRNYW5hZ2VyLmRpc3BhdGNoKHsKICAgICAgICAgIHR5cGU6ICJyZW5kZXIiLAogICAgICAgICAgY3VycmVudEZyYW1lOiB0aGlzLl9kb3RMb3R0aWVDb3JlLmN1cnJlbnRGcmFtZSgpCiAgICAgICAgfSk7CiAgICAgICAgcmV0dXJuIHRydWU7CiAgICAgIH0KICAgICAgcmV0dXJuIGZhbHNlOwogICAgfQogICAgX2RyYXcoKSB7CiAgICAgIGlmICh0aGlzLl9kb3RMb3R0aWVDb3JlID09PSBudWxsIHx8IHRoaXMuX2NvbnRleHQgPT09IG51bGwgfHwgIXRoaXMuX2RvdExvdHRpZUNvcmUuaXNQbGF5aW5nKCkpIHJldHVybjsKICAgICAgY29uc3QgbmV4dEZyYW1lID0gdGhpcy5fZG90TG90dGllQ29yZS5yZXF1ZXN0RnJhbWUoKTsKICAgICAgY29uc3QgdXBkYXRlZCA9IHRoaXMuX2RvdExvdHRpZUNvcmUuc2V0RnJhbWUobmV4dEZyYW1lKTsKICAgICAgaWYgKHVwZGF0ZWQpIHsKICAgICAgICB0aGlzLl9ldmVudE1hbmFnZXIuZGlzcGF0Y2goewogICAgICAgICAgdHlwZTogImZyYW1lIiwKICAgICAgICAgIGN1cnJlbnRGcmFtZTogdGhpcy5fZG90TG90dGllQ29yZS5jdXJyZW50RnJhbWUoKQogICAgICAgIH0pOwogICAgICAgIGNvbnN0IHJlbmRlcmVkID0gdGhpcy5fcmVuZGVyKCk7CiAgICAgICAgaWYgKHJlbmRlcmVkKSB7CiAgICAgICAgICBpZiAodGhpcy5fZG90TG90dGllQ29yZS5pc0NvbXBsZXRlKCkpIHsKICAgICAgICAgICAgaWYgKHRoaXMuX2RvdExvdHRpZUNvcmUuY29uZmlnKCkubG9vcEFuaW1hdGlvbikgewogICAgICAgICAgICAgIHRoaXMuX2V2ZW50TWFuYWdlci5kaXNwYXRjaCh7CiAgICAgICAgICAgICAgICB0eXBlOiAibG9vcCIsCiAgICAgICAgICAgICAgICBsb29wQ291bnQ6IHRoaXMuX2RvdExvdHRpZUNvcmUubG9vcENvdW50KCkKICAgICAgICAgICAgICB9KTsKICAgICAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgICB0aGlzLl9ldmVudE1hbmFnZXIuZGlzcGF0Y2goeyB0eXBlOiAiY29tcGxldGUiIH0pOwogICAgICAgICAgICB9CiAgICAgICAgICB9CiAgICAgICAgfQogICAgICB9CiAgICAgIHRoaXMuX2FuaW1hdGlvbkZyYW1lSWQgPSB0aGlzLl9mcmFtZU1hbmFnZXIucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuX2RyYXcuYmluZCh0aGlzKSk7CiAgICB9CiAgICBwbGF5KCkgewogICAgICBpZiAodGhpcy5fZG90TG90dGllQ29yZSA9PT0gbnVsbCkgcmV0dXJuOwogICAgICBjb25zdCBvayA9IHRoaXMuX2RvdExvdHRpZUNvcmUucGxheSgpOwogICAgICBpZiAob2sgfHwgdGhpcy5fZG90TG90dGllQ29yZS5pc1BsYXlpbmcoKSkgewogICAgICAgIHRoaXMuX2lzRnJvemVuID0gZmFsc2U7CiAgICAgICAgdGhpcy5fZXZlbnRNYW5hZ2VyLmRpc3BhdGNoKHsgdHlwZTogInBsYXkiIH0pOwogICAgICAgIHRoaXMuX2FuaW1hdGlvbkZyYW1lSWQgPSB0aGlzLl9mcmFtZU1hbmFnZXIucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuX2RyYXcuYmluZCh0aGlzKSk7CiAgICAgIH0KICAgIH0KICAgIHBhdXNlKCkgewogICAgICBpZiAodGhpcy5fZG90TG90dGllQ29yZSA9PT0gbnVsbCkgcmV0dXJuOwogICAgICBjb25zdCBvayA9IHRoaXMuX2RvdExvdHRpZUNvcmUucGF1c2UoKTsKICAgICAgaWYgKG9rIHx8IHRoaXMuX2RvdExvdHRpZUNvcmUuaXNQYXVzZWQoKSkgewogICAgICAgIHRoaXMuX2V2ZW50TWFuYWdlci5kaXNwYXRjaCh7IHR5cGU6ICJwYXVzZSIgfSk7CiAgICAgIH0KICAgIH0KICAgIHN0b3AoKSB7CiAgICAgIGlmICh0aGlzLl9kb3RMb3R0aWVDb3JlID09PSBudWxsKSByZXR1cm47CiAgICAgIGNvbnN0IG9rID0gdGhpcy5fZG90TG90dGllQ29yZS5zdG9wKCk7CiAgICAgIGlmIChvaykgewogICAgICAgIHRoaXMuX2V2ZW50TWFuYWdlci5kaXNwYXRjaCh7IHR5cGU6ICJmcmFtZSIsIGN1cnJlbnRGcmFtZTogdGhpcy5fZG90TG90dGllQ29yZS5jdXJyZW50RnJhbWUoKSB9KTsKICAgICAgICB0aGlzLl9yZW5kZXIoKTsKICAgICAgICB0aGlzLl9ldmVudE1hbmFnZXIuZGlzcGF0Y2goeyB0eXBlOiAic3RvcCIgfSk7CiAgICAgIH0KICAgIH0KICAgIHNldEZyYW1lKGZyYW1lKSB7CiAgICAgIGlmICh0aGlzLl9kb3RMb3R0aWVDb3JlID09PSBudWxsKSByZXR1cm47CiAgICAgIGlmIChmcmFtZSA8IDAgfHwgZnJhbWUgPiB0aGlzLl9kb3RMb3R0aWVDb3JlLnRvdGFsRnJhbWVzKCkpIHJldHVybjsKICAgICAgY29uc3Qgb2sgPSB0aGlzLl9kb3RMb3R0aWVDb3JlLnNlZWsoZnJhbWUpOwogICAgICBpZiAob2spIHsKICAgICAgICB0aGlzLl9ldmVudE1hbmFnZXIuZGlzcGF0Y2goeyB0eXBlOiAiZnJhbWUiLCBjdXJyZW50RnJhbWU6IHRoaXMuX2RvdExvdHRpZUNvcmUuY3VycmVudEZyYW1lKCkgfSk7CiAgICAgICAgdGhpcy5fcmVuZGVyKCk7CiAgICAgIH0KICAgIH0KICAgIHNldFNwZWVkKHNwZWVkKSB7CiAgICAgIGlmICh0aGlzLl9kb3RMb3R0aWVDb3JlID09PSBudWxsKSByZXR1cm47CiAgICAgIHRoaXMuX2RvdExvdHRpZUNvcmUuc2V0Q29uZmlnKHsKICAgICAgICAuLi50aGlzLl9kb3RMb3R0aWVDb3JlLmNvbmZpZygpLAogICAgICAgIHNwZWVkCiAgICAgIH0pOwogICAgfQogICAgc2V0QmFja2dyb3VuZENvbG9yKGNvbG9yKSB7CiAgICAgIGlmICh0aGlzLl9kb3RMb3R0aWVDb3JlID09PSBudWxsKSByZXR1cm47CiAgICAgIGlmIChJU19CUk9XU0VSICYmIHRoaXMuX2NhbnZhcyBpbnN0YW5jZW9mIEhUTUxDYW52YXNFbGVtZW50KSB7CiAgICAgICAgdGhpcy5fY2FudmFzLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yOwogICAgICB9IGVsc2UgewogICAgICAgIHRoaXMuX2RvdExvdHRpZUNvcmUuc2V0Q29uZmlnKHsKICAgICAgICAgIC4uLnRoaXMuX2RvdExvdHRpZUNvcmUuY29uZmlnKCksCiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGhleFN0cmluZ1RvUkdCQUludChjb2xvcikKICAgICAgICB9KTsKICAgICAgfQogICAgICB0aGlzLl9iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcjsKICAgIH0KICAgIHNldExvb3AobG9vcCkgewogICAgICBpZiAodGhpcy5fZG90TG90dGllQ29yZSA9PT0gbnVsbCkgcmV0dXJuOwogICAgICB0aGlzLl9kb3RMb3R0aWVDb3JlLnNldENvbmZpZyh7CiAgICAgICAgLi4udGhpcy5fZG90TG90dGllQ29yZS5jb25maWcoKSwKICAgICAgICBsb29wQW5pbWF0aW9uOiBsb29wCiAgICAgIH0pOwogICAgfQogICAgc2V0VXNlRnJhbWVJbnRlcnBvbGF0aW9uKHVzZUZyYW1lSW50ZXJwb2xhdGlvbikgewogICAgICBpZiAodGhpcy5fZG90TG90dGllQ29yZSA9PT0gbnVsbCkgcmV0dXJuOwogICAgICB0aGlzLl9kb3RMb3R0aWVDb3JlLnNldENvbmZpZyh7CiAgICAgICAgLi4udGhpcy5fZG90TG90dGllQ29yZS5jb25maWcoKSwKICAgICAgICB1c2VGcmFtZUludGVycG9sYXRpb24KICAgICAgfSk7CiAgICB9CiAgICBhZGRFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7CiAgICAgIHRoaXMuX2V2ZW50TWFuYWdlci5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKTsKICAgIH0KICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHsKICAgICAgdGhpcy5fZXZlbnRNYW5hZ2VyLnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpOwogICAgfQogICAgZGVzdHJveSgpIHsKICAgICAgdGhpcy5fZG90TG90dGllQ29yZT8uZGVsZXRlKCk7CiAgICAgIHRoaXMuX2RvdExvdHRpZUNvcmUgPSBudWxsOwogICAgICB0aGlzLl9jb250ZXh0ID0gbnVsbDsKICAgICAgdGhpcy5fZXZlbnRNYW5hZ2VyLmRpc3BhdGNoKHsKICAgICAgICB0eXBlOiAiZGVzdHJveSIKICAgICAgfSk7CiAgICAgIHRoaXMuX2V2ZW50TWFuYWdlci5yZW1vdmVBbGxFdmVudExpc3RlbmVycygpOwogICAgICB0aGlzLl9jbGVhbnVwU3RhdGVNYWNoaW5lTGlzdGVuZXJzKCk7CiAgICB9CiAgICBmcmVlemUoKSB7CiAgICAgIGlmICh0aGlzLl9hbmltYXRpb25GcmFtZUlkID09PSBudWxsKSByZXR1cm47CiAgICAgIHRoaXMuX2ZyYW1lTWFuYWdlci5jYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLl9hbmltYXRpb25GcmFtZUlkKTsKICAgICAgdGhpcy5fYW5pbWF0aW9uRnJhbWVJZCA9IG51bGw7CiAgICAgIHRoaXMuX2lzRnJvemVuID0gdHJ1ZTsKICAgICAgdGhpcy5fZXZlbnRNYW5hZ2VyLmRpc3BhdGNoKHsgdHlwZTogImZyZWV6ZSIgfSk7CiAgICB9CiAgICB1bmZyZWV6ZSgpIHsKICAgICAgaWYgKHRoaXMuX2FuaW1hdGlvbkZyYW1lSWQgIT09IG51bGwpIHJldHVybjsKICAgICAgdGhpcy5fYW5pbWF0aW9uRnJhbWVJZCA9IHRoaXMuX2ZyYW1lTWFuYWdlci5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5fZHJhdy5iaW5kKHRoaXMpKTsKICAgICAgdGhpcy5faXNGcm96ZW4gPSBmYWxzZTsKICAgICAgdGhpcy5fZXZlbnRNYW5hZ2VyLmRpc3BhdGNoKHsgdHlwZTogInVuZnJlZXplIiB9KTsKICAgIH0KICAgIHJlc2l6ZSgpIHsKICAgICAgaWYgKElTX0JST1dTRVIgJiYgdGhpcy5fY2FudmFzIGluc3RhbmNlb2YgSFRNTENhbnZhc0VsZW1lbnQpIHsKICAgICAgICBjb25zdCBkcHIgPSB0aGlzLl9yZW5kZXJDb25maWcuZGV2aWNlUGl4ZWxSYXRpbyB8fCB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxOwogICAgICAgIGNvbnN0IHsgaGVpZ2h0OiBjbGllbnRIZWlnaHQsIHdpZHRoOiBjbGllbnRXaWR0aCB9ID0gdGhpcy5fY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpOwogICAgICAgIHRoaXMuX2NhbnZhcy53aWR0aCA9IGNsaWVudFdpZHRoICogZHByOwogICAgICAgIHRoaXMuX2NhbnZhcy5oZWlnaHQgPSBjbGllbnRIZWlnaHQgKiBkcHI7CiAgICAgIH0KICAgICAgY29uc3Qgb2sgPSB0aGlzLl9kb3RMb3R0aWVDb3JlPy5yZXNpemUodGhpcy5fY2FudmFzLndpZHRoLCB0aGlzLl9jYW52YXMuaGVpZ2h0KTsKICAgICAgaWYgKG9rKSB7CiAgICAgICAgdGhpcy5fcmVuZGVyKCk7CiAgICAgIH0KICAgIH0KICAgIHNldFNlZ21lbnQoc3RhcnRGcmFtZSwgZW5kRnJhbWUpIHsKICAgICAgaWYgKHRoaXMuX2RvdExvdHRpZUNvcmUgPT09IG51bGwgfHwgX0RvdExvdHRpZS5fd2FzbU1vZHVsZSA9PT0gbnVsbCkgcmV0dXJuOwogICAgICB0aGlzLl9kb3RMb3R0aWVDb3JlLnNldENvbmZpZyh7CiAgICAgICAgLi4udGhpcy5fZG90TG90dGllQ29yZS5jb25maWcoKSwKICAgICAgICBzZWdtZW50OiBjcmVhdGVDb3JlU2VnbWVudChbc3RhcnRGcmFtZSwgZW5kRnJhbWVdLCBfRG90TG90dGllLl93YXNtTW9kdWxlKQogICAgICB9KTsKICAgIH0KICAgIHNldE1vZGUobW9kZSkgewogICAgICBpZiAodGhpcy5fZG90TG90dGllQ29yZSA9PT0gbnVsbCB8fCBfRG90TG90dGllLl93YXNtTW9kdWxlID09PSBudWxsKSByZXR1cm47CiAgICAgIHRoaXMuX2RvdExvdHRpZUNvcmUuc2V0Q29uZmlnKHsKICAgICAgICAuLi50aGlzLl9kb3RMb3R0aWVDb3JlLmNvbmZpZygpLAogICAgICAgIG1vZGU6IGNyZWF0ZUNvcmVNb2RlKG1vZGUsIF9Eb3RMb3R0aWUuX3dhc21Nb2R1bGUpCiAgICAgIH0pOwogICAgfQogICAgc2V0UmVuZGVyQ29uZmlnKGNvbmZpZykgewogICAgICB0aGlzLl9yZW5kZXJDb25maWcgPSBjb25maWc7CiAgICB9CiAgICBsb2FkQW5pbWF0aW9uKGFuaW1hdGlvbklkKSB7CiAgICAgIGlmICh0aGlzLl9kb3RMb3R0aWVDb3JlID09PSBudWxsIHx8IHRoaXMuX2RvdExvdHRpZUNvcmUuYWN0aXZlQW5pbWF0aW9uSWQoKSA9PT0gYW5pbWF0aW9uSWQpIHJldHVybjsKICAgICAgY29uc3QgbG9hZGVkID0gdGhpcy5fZG90TG90dGllQ29yZS5sb2FkQW5pbWF0aW9uKGFuaW1hdGlvbklkLCB0aGlzLl9jYW52YXMud2lkdGgsIHRoaXMuX2NhbnZhcy5oZWlnaHQpOwogICAgICBpZiAobG9hZGVkKSB7CiAgICAgICAgdGhpcy5fZXZlbnRNYW5hZ2VyLmRpc3BhdGNoKHsgdHlwZTogImxvYWQiIH0pOwogICAgICAgIHRoaXMucmVzaXplKCk7CiAgICAgIH0gZWxzZSB7CiAgICAgICAgdGhpcy5fZXZlbnRNYW5hZ2VyLmRpc3BhdGNoKHsKICAgICAgICAgIHR5cGU6ICJsb2FkRXJyb3IiLAogICAgICAgICAgZXJyb3I6IG5ldyBFcnJvcihgRmFpbGVkIHRvIGFuaW1hdGlvbiA6JHthbmltYXRpb25JZH1gKQogICAgICAgIH0pOwogICAgICB9CiAgICB9CiAgICBzZXRNYXJrZXIobWFya2VyKSB7CiAgICAgIGlmICh0aGlzLl9kb3RMb3R0aWVDb3JlID09PSBudWxsKSByZXR1cm47CiAgICAgIHRoaXMuX2RvdExvdHRpZUNvcmUuc2V0Q29uZmlnKHsKICAgICAgICAuLi50aGlzLl9kb3RMb3R0aWVDb3JlLmNvbmZpZygpLAogICAgICAgIG1hcmtlcgogICAgICB9KTsKICAgIH0KICAgIG1hcmtlcnMoKSB7CiAgICAgIGNvbnN0IG1hcmtlcnMgPSB0aGlzLl9kb3RMb3R0aWVDb3JlPy5tYXJrZXJzKCk7CiAgICAgIGlmIChtYXJrZXJzKSB7CiAgICAgICAgY29uc3QgcmVzdWx0ID0gW107CiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXJrZXJzLnNpemUoKTsgaSArPSAxKSB7CiAgICAgICAgICBjb25zdCBtYXJrZXIgPSBtYXJrZXJzLmdldChpKTsKICAgICAgICAgIHJlc3VsdC5wdXNoKHsKICAgICAgICAgICAgbmFtZTogbWFya2VyLm5hbWUsCiAgICAgICAgICAgIHRpbWU6IG1hcmtlci50aW1lLAogICAgICAgICAgICBkdXJhdGlvbjogbWFya2VyLmR1cmF0aW9uCiAgICAgICAgICB9KTsKICAgICAgICB9CiAgICAgICAgcmV0dXJuIHJlc3VsdDsKICAgICAgfQogICAgICByZXR1cm4gW107CiAgICB9CiAgICBsb2FkVGhlbWUodGhlbWVJZCkgewogICAgICBpZiAodGhpcy5fZG90TG90dGllQ29yZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlOwogICAgICBjb25zdCBsb2FkZWQgPSB0aGlzLl9kb3RMb3R0aWVDb3JlLmxvYWRUaGVtZSh0aGVtZUlkKTsKICAgICAgdGhpcy5fcmVuZGVyKCk7CiAgICAgIHJldHVybiBsb2FkZWQ7CiAgICB9CiAgICBsb2FkVGhlbWVEYXRhKHRoZW1lRGF0YSkgewogICAgICBpZiAodGhpcy5fZG90TG90dGllQ29yZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlOwogICAgICBjb25zdCBsb2FkZWQgPSB0aGlzLl9kb3RMb3R0aWVDb3JlLmxvYWRUaGVtZURhdGEodGhlbWVEYXRhKTsKICAgICAgdGhpcy5fcmVuZGVyKCk7CiAgICAgIHJldHVybiBsb2FkZWQ7CiAgICB9CiAgICBzZXRMYXlvdXQobGF5b3V0KSB7CiAgICAgIGlmICh0aGlzLl9kb3RMb3R0aWVDb3JlID09PSBudWxsIHx8IF9Eb3RMb3R0aWUuX3dhc21Nb2R1bGUgPT09IG51bGwpIHJldHVybjsKICAgICAgdGhpcy5fZG90TG90dGllQ29yZS5zZXRDb25maWcoewogICAgICAgIC4uLnRoaXMuX2RvdExvdHRpZUNvcmUuY29uZmlnKCksCiAgICAgICAgbGF5b3V0OiB7CiAgICAgICAgICBhbGlnbjogY3JlYXRlQ29yZUFsaWduKGxheW91dC5hbGlnbiwgX0RvdExvdHRpZS5fd2FzbU1vZHVsZSksCiAgICAgICAgICBmaXQ6IGNyZWF0ZUNvcmVGaXQobGF5b3V0LmZpdCwgX0RvdExvdHRpZS5fd2FzbU1vZHVsZSkKICAgICAgICB9CiAgICAgIH0pOwogICAgfQogICAgc2V0Vmlld3BvcnQoeCwgeSwgd2lkdGgsIGhlaWdodCkgewogICAgICBpZiAodGhpcy5fZG90TG90dGllQ29yZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlOwogICAgICByZXR1cm4gdGhpcy5fZG90TG90dGllQ29yZS5zZXRWaWV3cG9ydCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTsKICAgIH0KICAgIHN0YXRpYyBzZXRXYXNtVXJsKHVybCkgewogICAgICBEb3RMb3R0aWVXYXNtTG9hZGVyLnNldFdhc21VcmwodXJsKTsKICAgIH0KICAgIGxvYWRTdGF0ZU1hY2hpbmUoc3RhdGVNYWNoaW5lSWQpIHsKICAgICAgcmV0dXJuIHRoaXMuX2RvdExvdHRpZUNvcmU/LmxvYWRTdGF0ZU1hY2hpbmUoc3RhdGVNYWNoaW5lSWQpID8/IGZhbHNlOwogICAgfQogICAgc3RhcnRTdGF0ZU1hY2hpbmUoKSB7CiAgICAgIGNvbnN0IHN0YXJ0ZWQgPSB0aGlzLl9kb3RMb3R0aWVDb3JlPy5zdGFydFN0YXRlTWFjaGluZSgpID8/IGZhbHNlOwogICAgICBpZiAoc3RhcnRlZCkgewogICAgICAgIHRoaXMuX3NldHVwU3RhdGVNYWNoaW5lTGlzdGVuZXJzKCk7CiAgICAgIH0KICAgICAgcmV0dXJuIHN0YXJ0ZWQ7CiAgICB9CiAgICBzdG9wU3RhdGVNYWNoaW5lKCkgewogICAgICBjb25zdCBzdG9wcGVkID0gdGhpcy5fZG90TG90dGllQ29yZT8uc3RvcFN0YXRlTWFjaGluZSgpID8/IGZhbHNlOwogICAgICBpZiAoc3RvcHBlZCkgewogICAgICAgIHRoaXMuX2NsZWFudXBTdGF0ZU1hY2hpbmVMaXN0ZW5lcnMoKTsKICAgICAgfQogICAgICByZXR1cm4gc3RvcHBlZDsKICAgIH0KICAgIF9nZXRQb2ludGVyUG9zaXRpb24oZXZlbnQpIHsKICAgICAgY29uc3QgcmVjdCA9IHRoaXMuX2NhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTsKICAgICAgY29uc3Qgc2NhbGVYID0gdGhpcy5fY2FudmFzLndpZHRoIC8gcmVjdC53aWR0aDsKICAgICAgY29uc3Qgc2NhbGVZID0gdGhpcy5fY2FudmFzLmhlaWdodCAvIHJlY3QuaGVpZ2h0OwogICAgICBjb25zdCBkZXZpY2VQaXhlbFJhdGlvID0gdGhpcy5fcmVuZGVyQ29uZmlnLmRldmljZVBpeGVsUmF0aW8gfHwgd2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMTsKICAgICAgY29uc3QgeCA9IChldmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0KSAqIHNjYWxlWCAvIGRldmljZVBpeGVsUmF0aW87CiAgICAgIGNvbnN0IHkgPSAoZXZlbnQuY2xpZW50WSAtIHJlY3QudG9wKSAqIHNjYWxlWSAvIGRldmljZVBpeGVsUmF0aW87CiAgICAgIHJldHVybiB7CiAgICAgICAgeCwKICAgICAgICB5CiAgICAgIH07CiAgICB9CiAgICBfb25Qb2ludGVyVXAoZXZlbnQpIHsKICAgICAgY29uc3QgeyB4LCB5IH0gPSB0aGlzLl9nZXRQb2ludGVyUG9zaXRpb24oZXZlbnQpOwogICAgICB0aGlzLnBvc3RTdGF0ZU1hY2hpbmVFdmVudChgT25Qb2ludGVyVXA6ICR7eH0gJHt5fWApOwogICAgfQogICAgX29uUG9pbnRlckRvd24oZXZlbnQpIHsKICAgICAgY29uc3QgeyB4LCB5IH0gPSB0aGlzLl9nZXRQb2ludGVyUG9zaXRpb24oZXZlbnQpOwogICAgICB0aGlzLnBvc3RTdGF0ZU1hY2hpbmVFdmVudChgT25Qb2ludGVyRG93bjogJHt4fSAke3l9YCk7CiAgICB9CiAgICBfb25Qb2ludGVyTW92ZShldmVudCkgewogICAgICBjb25zdCB7IHgsIHkgfSA9IHRoaXMuX2dldFBvaW50ZXJQb3NpdGlvbihldmVudCk7CiAgICAgIHRoaXMucG9zdFN0YXRlTWFjaGluZUV2ZW50KGBPblBvaW50ZXJNb3ZlOiAke3h9ICR7eX1gKTsKICAgIH0KICAgIF9vblBvaW50ZXJFbnRlcihldmVudCkgewogICAgICBjb25zdCB7IHgsIHkgfSA9IHRoaXMuX2dldFBvaW50ZXJQb3NpdGlvbihldmVudCk7CiAgICAgIHRoaXMucG9zdFN0YXRlTWFjaGluZUV2ZW50KGBPblBvaW50ZXJFbnRlcjogJHt4fSAke3l9YCk7CiAgICB9CiAgICBfb25Qb2ludGVyTGVhdmUoZXZlbnQpIHsKICAgICAgY29uc3QgeyB4LCB5IH0gPSB0aGlzLl9nZXRQb2ludGVyUG9zaXRpb24oZXZlbnQpOwogICAgICB0aGlzLnBvc3RTdGF0ZU1hY2hpbmVFdmVudChgT25Qb2ludGVyRXhpdDogJHt4fSAke3l9YCk7CiAgICB9CiAgICBfb25Db21wbGV0ZSgpIHsKICAgICAgdGhpcy5wb3N0U3RhdGVNYWNoaW5lRXZlbnQoIk9uQ29tcGxldGUiKTsKICAgIH0KICAgIC8qKgogICAgICogQGV4cGVyaW1lbnRhbAogICAgICogQHBhcmFtIGV2ZW50IC0gVGhlIGV2ZW50IHRvIGJlIHBvc3RlZCB0byB0aGUgc3RhdGUgbWFjaGluZQogICAgICogQHJldHVybnMgYm9vbGVhbiAtIHRydWUgaWYgdGhlIGV2ZW50IHdhcyBwb3N0ZWQgc3VjY2Vzc2Z1bGx5LCBmYWxzZSBvdGhlcndpc2UKICAgICAqLwogICAgcG9zdFN0YXRlTWFjaGluZUV2ZW50KGV2ZW50KSB7CiAgICAgIGNvbnN0IHJ0ID0gdGhpcy5fZG90TG90dGllQ29yZT8ucG9zdEV2ZW50UGF5bG9hZChldmVudCkgPz8gMTsKICAgICAgaWYgKHJ0ID09PSAyKSB7CiAgICAgICAgdGhpcy5wbGF5KCk7CiAgICAgIH0gZWxzZSBpZiAocnQgPT09IDMpIHsKICAgICAgICB0aGlzLnBhdXNlKCk7CiAgICAgIH0gZWxzZSBpZiAocnQgPT09IDQpIHsKICAgICAgICB0aGlzLl9yZW5kZXIoKTsKICAgICAgfQogICAgICByZXR1cm4gcnQ7CiAgICB9CiAgICBnZXRTdGF0ZU1hY2hpbmVMaXN0ZW5lcnMoKSB7CiAgICAgIGlmICghdGhpcy5fZG90TG90dGllQ29yZSkgcmV0dXJuIFtdOwogICAgICBjb25zdCBsaXN0ZW5lcnNWZWN0b3IgPSB0aGlzLl9kb3RMb3R0aWVDb3JlLnN0YXRlTWFjaGluZUZyYW1ld29ya1NldHVwKCk7CiAgICAgIGNvbnN0IGxpc3RlbmVycyA9IFtdOwogICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RlbmVyc1ZlY3Rvci5zaXplKCk7IGkgKz0gMSkgewogICAgICAgIGxpc3RlbmVycy5wdXNoKGxpc3RlbmVyc1ZlY3Rvci5nZXQoaSkpOwogICAgICB9CiAgICAgIHJldHVybiBsaXN0ZW5lcnM7CiAgICB9CiAgICBfc2V0dXBTdGF0ZU1hY2hpbmVMaXN0ZW5lcnMoKSB7CiAgICAgIGlmIChJU19CUk9XU0VSICYmIHRoaXMuX2NhbnZhcyBpbnN0YW5jZW9mIEhUTUxDYW52YXNFbGVtZW50ICYmIHRoaXMuX2RvdExvdHRpZUNvcmUgIT09IG51bGwgJiYgdGhpcy5pc0xvYWRlZCkgewogICAgICAgIGNvbnN0IGxpc3RlbmVycyA9IHRoaXMuZ2V0U3RhdGVNYWNoaW5lTGlzdGVuZXJzKCk7CiAgICAgICAgaWYgKGxpc3RlbmVycy5pbmNsdWRlcygiUG9pbnRlclVwIikpIHsKICAgICAgICAgIHRoaXMuX2NhbnZhcy5hZGRFdmVudExpc3RlbmVyKCJwb2ludGVydXAiLCB0aGlzLl9wb2ludGVyVXBNZXRob2QpOwogICAgICAgIH0KICAgICAgICBpZiAobGlzdGVuZXJzLmluY2x1ZGVzKCJQb2ludGVyRG93biIpKSB7CiAgICAgICAgICB0aGlzLl9jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcigicG9pbnRlcmRvd24iLCB0aGlzLl9wb2ludGVyRG93bk1ldGhvZCk7CiAgICAgICAgfQogICAgICAgIGlmIChsaXN0ZW5lcnMuaW5jbHVkZXMoIlBvaW50ZXJNb3ZlIikpIHsKICAgICAgICAgIHRoaXMuX2NhbnZhcy5hZGRFdmVudExpc3RlbmVyKCJwb2ludGVybW92ZSIsIHRoaXMuX3BvaW50ZXJNb3ZlTWV0aG9kKTsKICAgICAgICB9CiAgICAgICAgaWYgKGxpc3RlbmVycy5pbmNsdWRlcygiUG9pbnRlckVudGVyIikpIHsKICAgICAgICAgIHRoaXMuX2NhbnZhcy5hZGRFdmVudExpc3RlbmVyKCJwb2ludGVyZW50ZXIiLCB0aGlzLl9wb2ludGVyRW50ZXJNZXRob2QpOwogICAgICAgIH0KICAgICAgICBpZiAobGlzdGVuZXJzLmluY2x1ZGVzKCJQb2ludGVyRXhpdCIpKSB7CiAgICAgICAgICB0aGlzLl9jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcigicG9pbnRlcmxlYXZlIiwgdGhpcy5fcG9pbnRlckV4aXRNZXRob2QpOwogICAgICAgIH0KICAgICAgICBpZiAobGlzdGVuZXJzLmluY2x1ZGVzKCJDb21wbGV0ZSIpKSB7CiAgICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoImNvbXBsZXRlIiwgdGhpcy5fb25Db21wbGV0ZU1ldGhvZCk7CiAgICAgICAgfQogICAgICB9CiAgICB9CiAgICBfY2xlYW51cFN0YXRlTWFjaGluZUxpc3RlbmVycygpIHsKICAgICAgaWYgKElTX0JST1dTRVIgJiYgdGhpcy5fY2FudmFzIGluc3RhbmNlb2YgSFRNTENhbnZhc0VsZW1lbnQpIHsKICAgICAgICB0aGlzLl9jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcigicG9pbnRlcnVwIiwgdGhpcy5fcG9pbnRlclVwTWV0aG9kKTsKICAgICAgICB0aGlzLl9jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcigicG9pbnRlcmRvd24iLCB0aGlzLl9wb2ludGVyRG93bk1ldGhvZCk7CiAgICAgICAgdGhpcy5fY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoInBvaW50ZXJtb3ZlIiwgdGhpcy5fcG9pbnRlck1vdmVNZXRob2QpOwogICAgICAgIHRoaXMuX2NhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCJwb2ludGVyZW50ZXIiLCB0aGlzLl9wb2ludGVyRW50ZXJNZXRob2QpOwogICAgICAgIHRoaXMuX2NhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCJwb2ludGVybGVhdmUiLCB0aGlzLl9wb2ludGVyRXhpdE1ldGhvZCk7CiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCJjb21wbGV0ZSIsIHRoaXMuX29uQ29tcGxldGVNZXRob2QpOwogICAgICB9CiAgICB9CiAgICBsb2FkU3RhdGVNYWNoaW5lRGF0YShzdGF0ZU1hY2hpbmVEYXRhKSB7CiAgICAgIHJldHVybiB0aGlzLl9kb3RMb3R0aWVDb3JlPy5sb2FkU3RhdGVNYWNoaW5lRGF0YShzdGF0ZU1hY2hpbmVEYXRhKSA/PyBmYWxzZTsKICAgIH0KICAgIGFuaW1hdGlvblNpemUoKSB7CiAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy5fZG90TG90dGllQ29yZT8uYW5pbWF0aW9uU2l6ZSgpLmdldCgwKSA/PyAwOwogICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLl9kb3RMb3R0aWVDb3JlPy5hbmltYXRpb25TaXplKCkuZ2V0KDEpID8/IDA7CiAgICAgIHJldHVybiB7CiAgICAgICAgd2lkdGgsCiAgICAgICAgaGVpZ2h0CiAgICAgIH07CiAgICB9CiAgICBzZXRTdGF0ZU1hY2hpbmVCb29sZWFuQ29udGV4dChuYW1lLCB2YWx1ZSkgewogICAgICByZXR1cm4gdGhpcy5fZG90TG90dGllQ29yZT8uc2V0U3RhdGVNYWNoaW5lQm9vbGVhbkNvbnRleHQobmFtZSwgdmFsdWUpID8/IGZhbHNlOwogICAgfQogICAgc2V0U3RhdGVNYWNoaW5lTnVtZXJpY0NvbnRleHQobmFtZSwgdmFsdWUpIHsKICAgICAgcmV0dXJuIHRoaXMuX2RvdExvdHRpZUNvcmU/LnNldFN0YXRlTWFjaGluZU51bWVyaWNDb250ZXh0KG5hbWUsIHZhbHVlKSA/PyBmYWxzZTsKICAgIH0KICAgIHNldFN0YXRlTWFjaGluZVN0cmluZ0NvbnRleHQobmFtZSwgdmFsdWUpIHsKICAgICAgcmV0dXJuIHRoaXMuX2RvdExvdHRpZUNvcmU/LnNldFN0YXRlTWFjaGluZVN0cmluZ0NvbnRleHQobmFtZSwgdmFsdWUpID8/IGZhbHNlOwogICAgfQogIH07CiAgX19wdWJsaWNGaWVsZChfRG90TG90dGllLCAiX3dhc21Nb2R1bGUiLCBudWxsKTsKICB2YXIgRG90TG90dGllID0gX0RvdExvdHRpZTsKCiAgLy8gc3JjL3dvcmtlci9kb3Rsb3R0aWUud29ya2VyLnRzCiAgdmFyIGluc3RhbmNlc01hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7CiAgdmFyIGV2ZW50SGFuZGxlck1hcCA9IHsKICAgIHJlYWR5OiAoaW5zdGFuY2VJZCkgPT4gKGV2ZW50KSA9PiB7CiAgICAgIGNvbnN0IHJlc3BvbnNlID0gewogICAgICAgIGlkOiAiIiwKICAgICAgICBtZXRob2Q6ICJvblJlYWR5IiwKICAgICAgICByZXN1bHQ6IHsKICAgICAgICAgIGluc3RhbmNlSWQsCiAgICAgICAgICBldmVudAogICAgICAgIH0KICAgICAgfTsKICAgICAgc2VsZi5wb3N0TWVzc2FnZShyZXNwb25zZSk7CiAgICB9LAogICAgY29tcGxldGU6IChpbnN0YW5jZUlkKSA9PiAoZXZlbnQpID0+IHsKICAgICAgY29uc3QgcmVzcG9uc2UgPSB7CiAgICAgICAgaWQ6ICIiLAogICAgICAgIG1ldGhvZDogIm9uQ29tcGxldGUiLAogICAgICAgIHJlc3VsdDogewogICAgICAgICAgaW5zdGFuY2VJZCwKICAgICAgICAgIGV2ZW50CiAgICAgICAgfQogICAgICB9OwogICAgICBzZWxmLnBvc3RNZXNzYWdlKHJlc3BvbnNlKTsKICAgIH0sCiAgICBsb2FkOiAoaW5zdGFuY2VJZCkgPT4gKGV2ZW50KSA9PiB7CiAgICAgIGNvbnN0IGxvYWRFdmVudCA9IGV2ZW50OwogICAgICBjb25zdCByZXNwb25zZSA9IHsKICAgICAgICBpZDogIiIsCiAgICAgICAgbWV0aG9kOiAib25Mb2FkIiwKICAgICAgICByZXN1bHQ6IHsKICAgICAgICAgIGluc3RhbmNlSWQsCiAgICAgICAgICBldmVudDogbG9hZEV2ZW50CiAgICAgICAgfQogICAgICB9OwogICAgICBzZWxmLnBvc3RNZXNzYWdlKHJlc3BvbnNlKTsKICAgIH0sCiAgICBsb2FkRXJyb3I6IChpbnN0YW5jZUlkKSA9PiAoZXZlbnQpID0+IHsKICAgICAgY29uc3QgbG9hZEVycm9yRXZlbnQgPSBldmVudDsKICAgICAgY29uc3QgcmVzcG9uc2UgPSB7CiAgICAgICAgaWQ6ICIiLAogICAgICAgIG1ldGhvZDogIm9uTG9hZEVycm9yIiwKICAgICAgICByZXN1bHQ6IHsKICAgICAgICAgIGluc3RhbmNlSWQsCiAgICAgICAgICBldmVudDogbG9hZEVycm9yRXZlbnQKICAgICAgICB9CiAgICAgIH07CiAgICAgIHNlbGYucG9zdE1lc3NhZ2UocmVzcG9uc2UpOwogICAgfSwKICAgIGxvb3A6IChpbnN0YW5jZUlkKSA9PiAoZXZlbnQpID0+IHsKICAgICAgY29uc3QgbG9vcEV2ZW50ID0gZXZlbnQ7CiAgICAgIGNvbnN0IHJlc3BvbnNlID0gewogICAgICAgIGlkOiAiIiwKICAgICAgICBtZXRob2Q6ICJvbkxvb3AiLAogICAgICAgIHJlc3VsdDogewogICAgICAgICAgaW5zdGFuY2VJZCwKICAgICAgICAgIGV2ZW50OiBsb29wRXZlbnQKICAgICAgICB9CiAgICAgIH07CiAgICAgIHNlbGYucG9zdE1lc3NhZ2UocmVzcG9uc2UpOwogICAgfSwKICAgIHBsYXk6IChpbnN0YW5jZUlkKSA9PiAoZXZlbnQpID0+IHsKICAgICAgY29uc3QgcGxheUV2ZW50ID0gZXZlbnQ7CiAgICAgIGNvbnN0IHJlc3BvbnNlID0gewogICAgICAgIGlkOiAiIiwKICAgICAgICBtZXRob2Q6ICJvblBsYXkiLAogICAgICAgIHJlc3VsdDogewogICAgICAgICAgaW5zdGFuY2VJZCwKICAgICAgICAgIGV2ZW50OiBwbGF5RXZlbnQKICAgICAgICB9CiAgICAgIH07CiAgICAgIHNlbGYucG9zdE1lc3NhZ2UocmVzcG9uc2UpOwogICAgfSwKICAgIHBhdXNlOiAoaW5zdGFuY2VJZCkgPT4gKGV2ZW50KSA9PiB7CiAgICAgIGNvbnN0IHBhdXNlRXZlbnQgPSBldmVudDsKICAgICAgY29uc3QgcmVzcG9uc2UgPSB7CiAgICAgICAgaWQ6ICIiLAogICAgICAgIG1ldGhvZDogIm9uUGF1c2UiLAogICAgICAgIHJlc3VsdDogewogICAgICAgICAgaW5zdGFuY2VJZCwKICAgICAgICAgIGV2ZW50OiBwYXVzZUV2ZW50CiAgICAgICAgfQogICAgICB9OwogICAgICBzZWxmLnBvc3RNZXNzYWdlKHJlc3BvbnNlKTsKICAgIH0sCiAgICBzdG9wOiAoaW5zdGFuY2VJZCkgPT4gKGV2ZW50KSA9PiB7CiAgICAgIGNvbnN0IHN0b3BFdmVudCA9IGV2ZW50OwogICAgICBjb25zdCByZXNwb25zZSA9IHsKICAgICAgICBpZDogIiIsCiAgICAgICAgbWV0aG9kOiAib25TdG9wIiwKICAgICAgICByZXN1bHQ6IHsKICAgICAgICAgIGluc3RhbmNlSWQsCiAgICAgICAgICBldmVudDogc3RvcEV2ZW50CiAgICAgICAgfQogICAgICB9OwogICAgICBzZWxmLnBvc3RNZXNzYWdlKHJlc3BvbnNlKTsKICAgIH0sCiAgICBmcmFtZTogKGluc3RhbmNlSWQpID0+IChldmVudCkgPT4gewogICAgICBjb25zdCBmcmFtZUV2ZW50ID0gZXZlbnQ7CiAgICAgIGNvbnN0IHJlc3BvbnNlID0gewogICAgICAgIGlkOiAiIiwKICAgICAgICBtZXRob2Q6ICJvbkZyYW1lIiwKICAgICAgICByZXN1bHQ6IHsKICAgICAgICAgIGluc3RhbmNlSWQsCiAgICAgICAgICBldmVudDogZnJhbWVFdmVudAogICAgICAgIH0KICAgICAgfTsKICAgICAgc2VsZi5wb3N0TWVzc2FnZShyZXNwb25zZSk7CiAgICB9LAogICAgcmVuZGVyOiAoaW5zdGFuY2VJZCkgPT4gKGV2ZW50KSA9PiB7CiAgICAgIGNvbnN0IHJlbmRlckV2ZW50ID0gZXZlbnQ7CiAgICAgIGNvbnN0IHJlc3BvbnNlID0gewogICAgICAgIGlkOiAiIiwKICAgICAgICBtZXRob2Q6ICJvblJlbmRlciIsCiAgICAgICAgcmVzdWx0OiB7CiAgICAgICAgICBpbnN0YW5jZUlkLAogICAgICAgICAgZXZlbnQ6IHJlbmRlckV2ZW50CiAgICAgICAgfQogICAgICB9OwogICAgICBzZWxmLnBvc3RNZXNzYWdlKHJlc3BvbnNlKTsKICAgIH0sCiAgICBmcmVlemU6IChpbnN0YW5jZUlkKSA9PiAoZXZlbnQpID0+IHsKICAgICAgY29uc3QgZnJlZXplRXZlbnQgPSBldmVudDsKICAgICAgY29uc3QgcmVzcG9uc2UgPSB7CiAgICAgICAgaWQ6ICIiLAogICAgICAgIG1ldGhvZDogIm9uRnJlZXplIiwKICAgICAgICByZXN1bHQ6IHsKICAgICAgICAgIGluc3RhbmNlSWQsCiAgICAgICAgICBldmVudDogZnJlZXplRXZlbnQKICAgICAgICB9CiAgICAgIH07CiAgICAgIHNlbGYucG9zdE1lc3NhZ2UocmVzcG9uc2UpOwogICAgfSwKICAgIHVuZnJlZXplOiAoaW5zdGFuY2VJZCkgPT4gKGV2ZW50KSA9PiB7CiAgICAgIGNvbnN0IHVuZnJlZXplRXZlbnQgPSBldmVudDsKICAgICAgY29uc3QgcmVzcG9uc2UgPSB7CiAgICAgICAgaWQ6ICIiLAogICAgICAgIG1ldGhvZDogIm9uVW5mcmVlemUiLAogICAgICAgIHJlc3VsdDogewogICAgICAgICAgaW5zdGFuY2VJZCwKICAgICAgICAgIGV2ZW50OiB1bmZyZWV6ZUV2ZW50CiAgICAgICAgfQogICAgICB9OwogICAgICBzZWxmLnBvc3RNZXNzYWdlKHJlc3BvbnNlKTsKICAgIH0sCiAgICBkZXN0cm95OiAoaW5zdGFuY2VJZCkgPT4gKGV2ZW50KSA9PiB7CiAgICAgIGNvbnN0IGRlc3Ryb3lFdmVudCA9IGV2ZW50OwogICAgICBjb25zdCByZXNwb25zZSA9IHsKICAgICAgICBpZDogIiIsCiAgICAgICAgbWV0aG9kOiAib25EZXN0cm95IiwKICAgICAgICByZXN1bHQ6IHsKICAgICAgICAgIGluc3RhbmNlSWQsCiAgICAgICAgICBldmVudDogZGVzdHJveUV2ZW50CiAgICAgICAgfQogICAgICB9OwogICAgICBzZWxmLnBvc3RNZXNzYWdlKHJlc3BvbnNlKTsKICAgIH0KICB9OwogIHZhciBjb21tYW5kcyA9IHsKICAgIGdldERvdExvdHRpZUluc3RhbmNlU3RhdGUocmVxdWVzdCkgewogICAgICBjb25zdCBpbnN0YW5jZUlkID0gcmVxdWVzdC5wYXJhbXMuaW5zdGFuY2VJZDsKICAgICAgY29uc3QgaW5zdGFuY2UgPSBpbnN0YW5jZXNNYXAuZ2V0KGluc3RhbmNlSWQpOwogICAgICBpZiAoIWluc3RhbmNlKSB7CiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnN0YW5jZSB3aXRoIGlkICR7aW5zdGFuY2VJZH0gZG9lcyBub3QgZXhpc3QuYCk7CiAgICAgIH0KICAgICAgY29uc3Qgc3RhdGUgPSB7CiAgICAgICAgaXNMb2FkZWQ6IGluc3RhbmNlLmlzTG9hZGVkLAogICAgICAgIGlzUGF1c2VkOiBpbnN0YW5jZS5pc1BhdXNlZCwKICAgICAgICBpc1BsYXlpbmc6IGluc3RhbmNlLmlzUGxheWluZywKICAgICAgICBpc1N0b3BwZWQ6IGluc3RhbmNlLmlzU3RvcHBlZCwKICAgICAgICBpc0Zyb3plbjogaW5zdGFuY2UuaXNGcm96ZW4sCiAgICAgICAgbG9vcDogaW5zdGFuY2UubG9vcCwKICAgICAgICBtb2RlOiBpbnN0YW5jZS5tb2RlLAogICAgICAgIHNwZWVkOiBpbnN0YW5jZS5zcGVlZCwKICAgICAgICBjdXJyZW50RnJhbWU6IGluc3RhbmNlLmN1cnJlbnRGcmFtZSwKICAgICAgICB0b3RhbEZyYW1lczogaW5zdGFuY2UudG90YWxGcmFtZXMsCiAgICAgICAgZHVyYXRpb246IGluc3RhbmNlLmR1cmF0aW9uLAogICAgICAgIHVzZUZyYW1lSW50ZXJwb2xhdGlvbjogaW5zdGFuY2UudXNlRnJhbWVJbnRlcnBvbGF0aW9uLAogICAgICAgIHJlbmRlckNvbmZpZzogaW5zdGFuY2UucmVuZGVyQ29uZmlnLAogICAgICAgIG1hcmtlcjogaW5zdGFuY2UubWFya2VyLAogICAgICAgIGJhY2tncm91bmRDb2xvcjogaW5zdGFuY2UuYmFja2dyb3VuZENvbG9yLAogICAgICAgIG1hcmtlcnM6IGluc3RhbmNlLm1hcmtlcnMoKSwKICAgICAgICBhY3RpdmVBbmltYXRpb25JZDogaW5zdGFuY2UuYWN0aXZlQW5pbWF0aW9uSWQsCiAgICAgICAgYWN0aXZlVGhlbWVJZDogaW5zdGFuY2UuYWN0aXZlVGhlbWVJZCwKICAgICAgICBhdXRvcGxheTogaW5zdGFuY2UuYXV0b3BsYXksCiAgICAgICAgc2VnbWVudDogaW5zdGFuY2Uuc2VnbWVudCwKICAgICAgICBsYXlvdXQ6IGluc3RhbmNlLmxheW91dCwKICAgICAgICBzZWdtZW50RHVyYXRpb246IGluc3RhbmNlLnNlZ21lbnREdXJhdGlvbiwKICAgICAgICBpc1JlYWR5OiBpbnN0YW5jZS5pc1JlYWR5LAogICAgICAgIG1hbmlmZXN0OiBpbnN0YW5jZS5tYW5pZmVzdAogICAgICB9OwogICAgICByZXR1cm4gewogICAgICAgIHN0YXRlCiAgICAgIH07CiAgICB9LAogICAgc2V0TGF5b3V0KHJlcXVlc3QpIHsKICAgICAgY29uc3QgaW5zdGFuY2VJZCA9IHJlcXVlc3QucGFyYW1zLmluc3RhbmNlSWQ7CiAgICAgIGNvbnN0IGxheW91dCA9IHJlcXVlc3QucGFyYW1zLmxheW91dDsKICAgICAgY29uc3QgaW5zdGFuY2UgPSBpbnN0YW5jZXNNYXAuZ2V0KGluc3RhbmNlSWQpOwogICAgICBpZiAoIWluc3RhbmNlKSB7CiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnN0YW5jZSB3aXRoIGlkICR7aW5zdGFuY2VJZH0gZG9lcyBub3QgZXhpc3QuYCk7CiAgICAgIH0KICAgICAgaW5zdGFuY2Uuc2V0TGF5b3V0KGxheW91dCk7CiAgICAgIHJldHVybiB7CiAgICAgICAgc3VjY2VzczogdHJ1ZQogICAgICB9OwogICAgfSwKICAgIGdldFN0YXRlTWFjaGluZUxpc3RlbmVycyhyZXF1ZXN0KSB7CiAgICAgIGNvbnN0IGluc3RhbmNlSWQgPSByZXF1ZXN0LnBhcmFtcy5pbnN0YW5jZUlkOwogICAgICBjb25zdCBpbnN0YW5jZSA9IGluc3RhbmNlc01hcC5nZXQoaW5zdGFuY2VJZCk7CiAgICAgIGlmICghaW5zdGFuY2UpIHsKICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEluc3RhbmNlIHdpdGggaWQgJHtpbnN0YW5jZUlkfSBkb2VzIG5vdCBleGlzdC5gKTsKICAgICAgfQogICAgICByZXR1cm4gaW5zdGFuY2UuZ2V0U3RhdGVNYWNoaW5lTGlzdGVuZXJzKCk7CiAgICB9LAogICAgcG9zdFN0YXRlTWFjaGluZUV2ZW50KHJlcXVlc3QpIHsKICAgICAgY29uc3QgaW5zdGFuY2VJZCA9IHJlcXVlc3QucGFyYW1zLmluc3RhbmNlSWQ7CiAgICAgIGNvbnN0IGV2ZW50ID0gcmVxdWVzdC5wYXJhbXMuZXZlbnQ7CiAgICAgIGNvbnN0IGluc3RhbmNlID0gaW5zdGFuY2VzTWFwLmdldChpbnN0YW5jZUlkKTsKICAgICAgaWYgKCFpbnN0YW5jZSkgewogICAgICAgIHRocm93IG5ldyBFcnJvcihgSW5zdGFuY2Ugd2l0aCBpZCAke2luc3RhbmNlSWR9IGRvZXMgbm90IGV4aXN0LmApOwogICAgICB9CiAgICAgIHJldHVybiBpbnN0YW5jZS5wb3N0U3RhdGVNYWNoaW5lRXZlbnQoZXZlbnQpOwogICAgfSwKICAgIHN0YXJ0U3RhdGVNYWNoaW5lKHJlcXVlc3QpIHsKICAgICAgY29uc3QgaW5zdGFuY2VJZCA9IHJlcXVlc3QucGFyYW1zLmluc3RhbmNlSWQ7CiAgICAgIGNvbnN0IGluc3RhbmNlID0gaW5zdGFuY2VzTWFwLmdldChpbnN0YW5jZUlkKTsKICAgICAgaWYgKCFpbnN0YW5jZSkgewogICAgICAgIHRocm93IG5ldyBFcnJvcihgSW5zdGFuY2Ugd2l0aCBpZCAke2luc3RhbmNlSWR9IGRvZXMgbm90IGV4aXN0LmApOwogICAgICB9CiAgICAgIHJldHVybiBpbnN0YW5jZS5zdGFydFN0YXRlTWFjaGluZSgpOwogICAgfSwKICAgIHN0b3BTdGF0ZU1hY2hpbmUocmVxdWVzdCkgewogICAgICBjb25zdCBpbnN0YW5jZUlkID0gcmVxdWVzdC5wYXJhbXMuaW5zdGFuY2VJZDsKICAgICAgY29uc3QgaW5zdGFuY2UgPSBpbnN0YW5jZXNNYXAuZ2V0KGluc3RhbmNlSWQpOwogICAgICBpZiAoIWluc3RhbmNlKSB7CiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnN0YW5jZSB3aXRoIGlkICR7aW5zdGFuY2VJZH0gZG9lcyBub3QgZXhpc3QuYCk7CiAgICAgIH0KICAgICAgcmV0dXJuIGluc3RhbmNlLnN0b3BTdGF0ZU1hY2hpbmUoKTsKICAgIH0sCiAgICBsb2FkU3RhdGVNYWNoaW5lKHJlcXVlc3QpIHsKICAgICAgY29uc3QgaW5zdGFuY2VJZCA9IHJlcXVlc3QucGFyYW1zLmluc3RhbmNlSWQ7CiAgICAgIGNvbnN0IHN0YXRlTWFjaGluZUlkID0gcmVxdWVzdC5wYXJhbXMuc3RhdGVNYWNoaW5lSWQ7CiAgICAgIGNvbnN0IGluc3RhbmNlID0gaW5zdGFuY2VzTWFwLmdldChpbnN0YW5jZUlkKTsKICAgICAgaWYgKCFpbnN0YW5jZSkgewogICAgICAgIHRocm93IG5ldyBFcnJvcihgSW5zdGFuY2Ugd2l0aCBpZCAke2luc3RhbmNlSWR9IGRvZXMgbm90IGV4aXN0LmApOwogICAgICB9CiAgICAgIHJldHVybiBpbnN0YW5jZS5sb2FkU3RhdGVNYWNoaW5lKHN0YXRlTWFjaGluZUlkKTsKICAgIH0sCiAgICBsb2FkU3RhdGVNYWNoaW5lRGF0YShyZXF1ZXN0KSB7CiAgICAgIGNvbnN0IGluc3RhbmNlSWQgPSByZXF1ZXN0LnBhcmFtcy5pbnN0YW5jZUlkOwogICAgICBjb25zdCBzdGF0ZU1hY2hpbmVEYXRhID0gcmVxdWVzdC5wYXJhbXMuc3RhdGVNYWNoaW5lRGF0YTsKICAgICAgY29uc3QgaW5zdGFuY2UgPSBpbnN0YW5jZXNNYXAuZ2V0KGluc3RhbmNlSWQpOwogICAgICBpZiAoIWluc3RhbmNlKSB7CiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnN0YW5jZSB3aXRoIGlkICR7aW5zdGFuY2VJZH0gZG9lcyBub3QgZXhpc3QuYCk7CiAgICAgIH0KICAgICAgcmV0dXJuIGluc3RhbmNlLmxvYWRTdGF0ZU1hY2hpbmVEYXRhKHN0YXRlTWFjaGluZURhdGEpOwogICAgfSwKICAgIGNyZWF0ZTogKHJlcXVlc3QpID0+IHsKICAgICAgY29uc3QgaW5zdGFuY2VJZCA9IHJlcXVlc3QucGFyYW1zLmluc3RhbmNlSWQ7CiAgICAgIGNvbnN0IGNvbmZpZyA9IHJlcXVlc3QucGFyYW1zLmNvbmZpZzsKICAgICAgY29uc3Qgd2lkdGggPSByZXF1ZXN0LnBhcmFtcy53aWR0aDsKICAgICAgY29uc3QgaGVpZ2h0ID0gcmVxdWVzdC5wYXJhbXMuaGVpZ2h0OwogICAgICBpZiAoaW5zdGFuY2VzTWFwLmhhcyhpbnN0YW5jZUlkKSkgewogICAgICAgIHRocm93IG5ldyBFcnJvcihgSW5zdGFuY2Ugd2l0aCBpZCAke2luc3RhbmNlSWR9IGFscmVhZHkgZXhpc3RzLmApOwogICAgICB9CiAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IERvdExvdHRpZShjb25maWcpOwogICAgICBpbnN0YW5jZS5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0OwogICAgICBpbnN0YW5jZS5jYW52YXMud2lkdGggPSB3aWR0aDsKICAgICAgaW5zdGFuY2VzTWFwLnNldChpbnN0YW5jZUlkLCBpbnN0YW5jZSk7CiAgICAgIGNvbnN0IGV2ZW50cyA9IFsKICAgICAgICAiY29tcGxldGUiLAogICAgICAgICJmcmFtZSIsCiAgICAgICAgImxvYWQiLAogICAgICAgICJsb2FkRXJyb3IiLAogICAgICAgICJsb29wIiwKICAgICAgICAicGF1c2UiLAogICAgICAgICJwbGF5IiwKICAgICAgICAic3RvcCIsCiAgICAgICAgImRlc3Ryb3kiLAogICAgICAgICJmcmVlemUiLAogICAgICAgICJ1bmZyZWV6ZSIsCiAgICAgICAgInJlbmRlciIsCiAgICAgICAgInJlYWR5IgogICAgICBdOwogICAgICBldmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHsKICAgICAgICBpbnN0YW5jZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBldmVudEhhbmRsZXJNYXBbZXZlbnRdKGluc3RhbmNlSWQpKTsKICAgICAgfSk7CiAgICAgIHJldHVybiB7CiAgICAgICAgaW5zdGFuY2VJZAogICAgICB9OwogICAgfSwKICAgIGRlc3Ryb3k6IChyZXF1ZXN0KSA9PiB7CiAgICAgIGNvbnN0IGluc3RhbmNlSWQgPSByZXF1ZXN0LnBhcmFtcy5pbnN0YW5jZUlkOwogICAgICBjb25zdCBpbnN0YW5jZSA9IGluc3RhbmNlc01hcC5nZXQoaW5zdGFuY2VJZCk7CiAgICAgIGlmICghaW5zdGFuY2UpIHJldHVybjsKICAgICAgaW5zdGFuY2UuZGVzdHJveSgpOwogICAgICBpbnN0YW5jZXNNYXAuZGVsZXRlKGluc3RhbmNlSWQpOwogICAgfSwKICAgIGZyZWV6ZTogKHJlcXVlc3QpID0+IHsKICAgICAgY29uc3QgaW5zdGFuY2VJZCA9IHJlcXVlc3QucGFyYW1zLmluc3RhbmNlSWQ7CiAgICAgIGNvbnN0IGluc3RhbmNlID0gaW5zdGFuY2VzTWFwLmdldChpbnN0YW5jZUlkKTsKICAgICAgaWYgKCFpbnN0YW5jZSkgewogICAgICAgIHRocm93IG5ldyBFcnJvcihgSW5zdGFuY2Ugd2l0aCBpZCAke2luc3RhbmNlSWR9IGRvZXMgbm90IGV4aXN0LmApOwogICAgICB9CiAgICAgIGluc3RhbmNlLmZyZWV6ZSgpOwogICAgfSwKICAgIGxvYWQ6IChyZXF1ZXN0KSA9PiB7CiAgICAgIGNvbnN0IGluc3RhbmNlSWQgPSByZXF1ZXN0LnBhcmFtcy5pbnN0YW5jZUlkOwogICAgICBjb25zdCBjb25maWcgPSByZXF1ZXN0LnBhcmFtcy5jb25maWc7CiAgICAgIGNvbnN0IGluc3RhbmNlID0gaW5zdGFuY2VzTWFwLmdldChpbnN0YW5jZUlkKTsKICAgICAgaWYgKCFpbnN0YW5jZSkgewogICAgICAgIHRocm93IG5ldyBFcnJvcihgSW5zdGFuY2Ugd2l0aCBpZCAke2luc3RhbmNlSWR9IGRvZXMgbm90IGV4aXN0LmApOwogICAgICB9CiAgICAgIGluc3RhbmNlLmxvYWQoY29uZmlnKTsKICAgIH0sCiAgICBsb2FkQW5pbWF0aW9uOiAocmVxdWVzdCkgPT4gewogICAgICBjb25zdCBpbnN0YW5jZUlkID0gcmVxdWVzdC5wYXJhbXMuaW5zdGFuY2VJZDsKICAgICAgY29uc3QgYW5pbWF0aW9uSWQgPSByZXF1ZXN0LnBhcmFtcy5hbmltYXRpb25JZDsKICAgICAgY29uc3QgaW5zdGFuY2UgPSBpbnN0YW5jZXNNYXAuZ2V0KGluc3RhbmNlSWQpOwogICAgICBpZiAoIWluc3RhbmNlKSB7CiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnN0YW5jZSB3aXRoIGlkICR7aW5zdGFuY2VJZH0gZG9lcyBub3QgZXhpc3QuYCk7CiAgICAgIH0KICAgICAgaW5zdGFuY2UubG9hZEFuaW1hdGlvbihhbmltYXRpb25JZCk7CiAgICB9LAogICAgbG9hZFRoZW1lOiAocmVxdWVzdCkgPT4gewogICAgICBjb25zdCBpbnN0YW5jZUlkID0gcmVxdWVzdC5wYXJhbXMuaW5zdGFuY2VJZDsKICAgICAgY29uc3QgdGhlbWVJZCA9IHJlcXVlc3QucGFyYW1zLnRoZW1lSWQ7CiAgICAgIGNvbnN0IGluc3RhbmNlID0gaW5zdGFuY2VzTWFwLmdldChpbnN0YW5jZUlkKTsKICAgICAgaWYgKCFpbnN0YW5jZSkgewogICAgICAgIHRocm93IG5ldyBFcnJvcihgSW5zdGFuY2Ugd2l0aCBpZCAke2luc3RhbmNlSWR9IGRvZXMgbm90IGV4aXN0LmApOwogICAgICB9CiAgICAgIHJldHVybiBpbnN0YW5jZS5sb2FkVGhlbWUodGhlbWVJZCk7CiAgICB9LAogICAgbG9hZFRoZW1lRGF0YTogKHJlcXVlc3QpID0+IHsKICAgICAgY29uc3QgaW5zdGFuY2VJZCA9IHJlcXVlc3QucGFyYW1zLmluc3RhbmNlSWQ7CiAgICAgIGNvbnN0IHRoZW1lRGF0YSA9IHJlcXVlc3QucGFyYW1zLnRoZW1lRGF0YTsKICAgICAgY29uc3QgaW5zdGFuY2UgPSBpbnN0YW5jZXNNYXAuZ2V0KGluc3RhbmNlSWQpOwogICAgICBpZiAoIWluc3RhbmNlKSB7CiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnN0YW5jZSB3aXRoIGlkICR7aW5zdGFuY2VJZH0gZG9lcyBub3QgZXhpc3QuYCk7CiAgICAgIH0KICAgICAgcmV0dXJuIGluc3RhbmNlLmxvYWRUaGVtZURhdGEodGhlbWVEYXRhKTsKICAgIH0sCiAgICBwYXVzZTogKHJlcXVlc3QpID0+IHsKICAgICAgY29uc3QgaW5zdGFuY2VJZCA9IHJlcXVlc3QucGFyYW1zLmluc3RhbmNlSWQ7CiAgICAgIGNvbnN0IGluc3RhbmNlID0gaW5zdGFuY2VzTWFwLmdldChpbnN0YW5jZUlkKTsKICAgICAgaWYgKCFpbnN0YW5jZSkgewogICAgICAgIHRocm93IG5ldyBFcnJvcihgSW5zdGFuY2Ugd2l0aCBpZCAke2luc3RhbmNlSWR9IGRvZXMgbm90IGV4aXN0LmApOwogICAgICB9CiAgICAgIHJldHVybiBpbnN0YW5jZS5wYXVzZSgpOwogICAgfSwKICAgIHBsYXk6IChyZXF1ZXN0KSA9PiB7CiAgICAgIGNvbnN0IGluc3RhbmNlSWQgPSByZXF1ZXN0LnBhcmFtcy5pbnN0YW5jZUlkOwogICAgICBjb25zdCBpbnN0YW5jZSA9IGluc3RhbmNlc01hcC5nZXQoaW5zdGFuY2VJZCk7CiAgICAgIGlmICghaW5zdGFuY2UpIHsKICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEluc3RhbmNlIHdpdGggaWQgJHtpbnN0YW5jZUlkfSBkb2VzIG5vdCBleGlzdC5gKTsKICAgICAgfQogICAgICByZXR1cm4gaW5zdGFuY2UucGxheSgpOwogICAgfSwKICAgIHJlc2l6ZTogKHJlcXVlc3QpID0+IHsKICAgICAgY29uc3QgaW5zdGFuY2VJZCA9IHJlcXVlc3QucGFyYW1zLmluc3RhbmNlSWQ7CiAgICAgIGNvbnN0IHdpZHRoID0gcmVxdWVzdC5wYXJhbXMud2lkdGg7CiAgICAgIGNvbnN0IGhlaWdodCA9IHJlcXVlc3QucGFyYW1zLmhlaWdodDsKICAgICAgY29uc3QgaW5zdGFuY2UgPSBpbnN0YW5jZXNNYXAuZ2V0KGluc3RhbmNlSWQpOwogICAgICBpZiAoIWluc3RhbmNlKSB7CiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnN0YW5jZSB3aXRoIGlkICR7aW5zdGFuY2VJZH0gZG9lcyBub3QgZXhpc3QuYCk7CiAgICAgIH0KICAgICAgaW5zdGFuY2UuY2FudmFzLmhlaWdodCA9IGhlaWdodDsKICAgICAgaW5zdGFuY2UuY2FudmFzLndpZHRoID0gd2lkdGg7CiAgICAgIGluc3RhbmNlLnJlc2l6ZSgpOwogICAgICByZXR1cm4gewogICAgICAgIHN1Y2Nlc3M6IHRydWUKICAgICAgfTsKICAgIH0sCiAgICBzZXRCYWNrZ3JvdW5kQ29sb3I6IChyZXF1ZXN0KSA9PiB7CiAgICAgIGNvbnN0IGluc3RhbmNlSWQgPSByZXF1ZXN0LnBhcmFtcy5pbnN0YW5jZUlkOwogICAgICBjb25zdCBiYWNrZ3JvdW5kQ29sb3IgPSByZXF1ZXN0LnBhcmFtcy5iYWNrZ3JvdW5kQ29sb3I7CiAgICAgIGNvbnN0IGluc3RhbmNlID0gaW5zdGFuY2VzTWFwLmdldChpbnN0YW5jZUlkKTsKICAgICAgaWYgKCFpbnN0YW5jZSkgewogICAgICAgIHRocm93IG5ldyBFcnJvcihgSW5zdGFuY2Ugd2l0aCBpZCAke2luc3RhbmNlSWR9IGRvZXMgbm90IGV4aXN0LmApOwogICAgICB9CiAgICAgIGluc3RhbmNlLnNldEJhY2tncm91bmRDb2xvcihiYWNrZ3JvdW5kQ29sb3IpOwogICAgfSwKICAgIHNldEZyYW1lOiAocmVxdWVzdCkgPT4gewogICAgICBjb25zdCBpbnN0YW5jZUlkID0gcmVxdWVzdC5wYXJhbXMuaW5zdGFuY2VJZDsKICAgICAgY29uc3QgZnJhbWUgPSByZXF1ZXN0LnBhcmFtcy5mcmFtZTsKICAgICAgY29uc3QgaW5zdGFuY2UgPSBpbnN0YW5jZXNNYXAuZ2V0KGluc3RhbmNlSWQpOwogICAgICBpZiAoIWluc3RhbmNlKSB7CiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnN0YW5jZSB3aXRoIGlkICR7aW5zdGFuY2VJZH0gZG9lcyBub3QgZXhpc3QuYCk7CiAgICAgIH0KICAgICAgaW5zdGFuY2Uuc2V0RnJhbWUoZnJhbWUpOwogICAgfSwKICAgIHNldE1vZGU6IChyZXF1ZXN0KSA9PiB7CiAgICAgIGNvbnN0IGluc3RhbmNlSWQgPSByZXF1ZXN0LnBhcmFtcy5pbnN0YW5jZUlkOwogICAgICBjb25zdCBtb2RlID0gcmVxdWVzdC5wYXJhbXMubW9kZTsKICAgICAgY29uc3QgaW5zdGFuY2UgPSBpbnN0YW5jZXNNYXAuZ2V0KGluc3RhbmNlSWQpOwogICAgICBpZiAoIWluc3RhbmNlKSB7CiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnN0YW5jZSB3aXRoIGlkICR7aW5zdGFuY2VJZH0gZG9lcyBub3QgZXhpc3QuYCk7CiAgICAgIH0KICAgICAgaW5zdGFuY2Uuc2V0TW9kZShtb2RlKTsKICAgIH0sCiAgICBzZXRSZW5kZXJDb25maWc6IChyZXF1ZXN0KSA9PiB7CiAgICAgIGNvbnN0IGluc3RhbmNlSWQgPSByZXF1ZXN0LnBhcmFtcy5pbnN0YW5jZUlkOwogICAgICBjb25zdCByZW5kZXJDb25maWcgPSByZXF1ZXN0LnBhcmFtcy5yZW5kZXJDb25maWc7CiAgICAgIGNvbnN0IGluc3RhbmNlID0gaW5zdGFuY2VzTWFwLmdldChpbnN0YW5jZUlkKTsKICAgICAgaWYgKCFpbnN0YW5jZSkgewogICAgICAgIHRocm93IG5ldyBFcnJvcihgSW5zdGFuY2Ugd2l0aCBpZCAke2luc3RhbmNlSWR9IGRvZXMgbm90IGV4aXN0LmApOwogICAgICB9CiAgICAgIGluc3RhbmNlLnNldFJlbmRlckNvbmZpZyhyZW5kZXJDb25maWcpOwogICAgfSwKICAgIHNldFNlZ21lbnQ6IChyZXF1ZXN0KSA9PiB7CiAgICAgIGNvbnN0IGluc3RhbmNlSWQgPSByZXF1ZXN0LnBhcmFtcy5pbnN0YW5jZUlkOwogICAgICBjb25zdCBzZWdtZW50ID0gcmVxdWVzdC5wYXJhbXMuc2VnbWVudDsKICAgICAgY29uc3QgaW5zdGFuY2UgPSBpbnN0YW5jZXNNYXAuZ2V0KGluc3RhbmNlSWQpOwogICAgICBpZiAoIWluc3RhbmNlKSB7CiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnN0YW5jZSB3aXRoIGlkICR7aW5zdGFuY2VJZH0gZG9lcyBub3QgZXhpc3QuYCk7CiAgICAgIH0KICAgICAgaW5zdGFuY2Uuc2V0U2VnbWVudChzZWdtZW50WzBdLCBzZWdtZW50WzFdKTsKICAgIH0sCiAgICBzZXRTcGVlZDogKHJlcXVlc3QpID0+IHsKICAgICAgY29uc3QgaW5zdGFuY2VJZCA9IHJlcXVlc3QucGFyYW1zLmluc3RhbmNlSWQ7CiAgICAgIGNvbnN0IHNwZWVkID0gcmVxdWVzdC5wYXJhbXMuc3BlZWQ7CiAgICAgIGNvbnN0IGluc3RhbmNlID0gaW5zdGFuY2VzTWFwLmdldChpbnN0YW5jZUlkKTsKICAgICAgaWYgKCFpbnN0YW5jZSkgewogICAgICAgIHRocm93IG5ldyBFcnJvcihgSW5zdGFuY2Ugd2l0aCBpZCAke2luc3RhbmNlSWR9IGRvZXMgbm90IGV4aXN0LmApOwogICAgICB9CiAgICAgIGluc3RhbmNlLnNldFNwZWVkKHNwZWVkKTsKICAgIH0sCiAgICBzZXRVc2VGcmFtZUludGVycG9sYXRpb246IChyZXF1ZXN0KSA9PiB7CiAgICAgIGNvbnN0IGluc3RhbmNlSWQgPSByZXF1ZXN0LnBhcmFtcy5pbnN0YW5jZUlkOwogICAgICBjb25zdCB1c2VGcmFtZUludGVycG9sYXRpb24gPSByZXF1ZXN0LnBhcmFtcy51c2VGcmFtZUludGVycG9sYXRpb247CiAgICAgIGNvbnN0IGluc3RhbmNlID0gaW5zdGFuY2VzTWFwLmdldChpbnN0YW5jZUlkKTsKICAgICAgaWYgKCFpbnN0YW5jZSkgewogICAgICAgIHRocm93IG5ldyBFcnJvcihgSW5zdGFuY2Ugd2l0aCBpZCAke2luc3RhbmNlSWR9IGRvZXMgbm90IGV4aXN0LmApOwogICAgICB9CiAgICAgIGluc3RhbmNlLnNldFVzZUZyYW1lSW50ZXJwb2xhdGlvbih1c2VGcmFtZUludGVycG9sYXRpb24pOwogICAgfSwKICAgIHNldFdhc21Vcmw6IChyZXF1ZXN0KSA9PiB7CiAgICAgIERvdExvdHRpZS5zZXRXYXNtVXJsKHJlcXVlc3QucGFyYW1zLnVybCk7CiAgICB9LAogICAgc3RvcDogKHJlcXVlc3QpID0+IHsKICAgICAgY29uc3QgaW5zdGFuY2VJZCA9IHJlcXVlc3QucGFyYW1zLmluc3RhbmNlSWQ7CiAgICAgIGNvbnN0IGluc3RhbmNlID0gaW5zdGFuY2VzTWFwLmdldChpbnN0YW5jZUlkKTsKICAgICAgaWYgKCFpbnN0YW5jZSkgewogICAgICAgIHRocm93IG5ldyBFcnJvcihgSW5zdGFuY2Ugd2l0aCBpZCAke2luc3RhbmNlSWR9IGRvZXMgbm90IGV4aXN0LmApOwogICAgICB9CiAgICAgIGluc3RhbmNlLnN0b3AoKTsKICAgIH0sCiAgICB1bmZyZWV6ZTogKHJlcXVlc3QpID0+IHsKICAgICAgY29uc3QgaW5zdGFuY2VJZCA9IHJlcXVlc3QucGFyYW1zLmluc3RhbmNlSWQ7CiAgICAgIGNvbnN0IGluc3RhbmNlID0gaW5zdGFuY2VzTWFwLmdldChpbnN0YW5jZUlkKTsKICAgICAgaWYgKCFpbnN0YW5jZSkgewogICAgICAgIHRocm93IG5ldyBFcnJvcihgSW5zdGFuY2Ugd2l0aCBpZCAke2luc3RhbmNlSWR9IGRvZXMgbm90IGV4aXN0LmApOwogICAgICB9CiAgICAgIGluc3RhbmNlLnVuZnJlZXplKCk7CiAgICB9LAogICAgc2V0Vmlld3BvcnQocmVxdWVzdCkgewogICAgICBjb25zdCBpbnN0YW5jZUlkID0gcmVxdWVzdC5wYXJhbXMuaW5zdGFuY2VJZDsKICAgICAgY29uc3QgeCA9IHJlcXVlc3QucGFyYW1zLng7CiAgICAgIGNvbnN0IHkgPSByZXF1ZXN0LnBhcmFtcy55OwogICAgICBjb25zdCB3aWR0aCA9IHJlcXVlc3QucGFyYW1zLndpZHRoOwogICAgICBjb25zdCBoZWlnaHQgPSByZXF1ZXN0LnBhcmFtcy5oZWlnaHQ7CiAgICAgIGNvbnN0IGluc3RhbmNlID0gaW5zdGFuY2VzTWFwLmdldChpbnN0YW5jZUlkKTsKICAgICAgaWYgKCFpbnN0YW5jZSkgewogICAgICAgIHRocm93IG5ldyBFcnJvcihgSW5zdGFuY2Ugd2l0aCBpZCAke2luc3RhbmNlSWR9IGRvZXMgbm90IGV4aXN0LmApOwogICAgICB9CiAgICAgIHJldHVybiBpbnN0YW5jZS5zZXRWaWV3cG9ydCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTsKICAgIH0sCiAgICBzZXRNYXJrZXIocmVxdWVzdCkgewogICAgICBjb25zdCBpbnN0YW5jZUlkID0gcmVxdWVzdC5wYXJhbXMuaW5zdGFuY2VJZDsKICAgICAgY29uc3QgbWFya2VyID0gcmVxdWVzdC5wYXJhbXMubWFya2VyOwogICAgICBjb25zdCBpbnN0YW5jZSA9IGluc3RhbmNlc01hcC5nZXQoaW5zdGFuY2VJZCk7CiAgICAgIGlmICghaW5zdGFuY2UpIHsKICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEluc3RhbmNlIHdpdGggaWQgJHtpbnN0YW5jZUlkfSBkb2VzIG5vdCBleGlzdC5gKTsKICAgICAgfQogICAgICBpbnN0YW5jZS5zZXRNYXJrZXIobWFya2VyKTsKICAgICAgcmV0dXJuIHsKICAgICAgICBzdWNjZXNzOiB0cnVlCiAgICAgIH07CiAgICB9LAogICAgc2V0TG9vcChyZXF1ZXN0KSB7CiAgICAgIGNvbnN0IGluc3RhbmNlSWQgPSByZXF1ZXN0LnBhcmFtcy5pbnN0YW5jZUlkOwogICAgICBjb25zdCBsb29wID0gcmVxdWVzdC5wYXJhbXMubG9vcDsKICAgICAgY29uc3QgaW5zdGFuY2UgPSBpbnN0YW5jZXNNYXAuZ2V0KGluc3RhbmNlSWQpOwogICAgICBpZiAoIWluc3RhbmNlKSB7CiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnN0YW5jZSB3aXRoIGlkICR7aW5zdGFuY2VJZH0gZG9lcyBub3QgZXhpc3QuYCk7CiAgICAgIH0KICAgICAgaW5zdGFuY2Uuc2V0TG9vcChsb29wKTsKICAgICAgcmV0dXJuIHsKICAgICAgICBzdWNjZXNzOiB0cnVlCiAgICAgIH07CiAgICB9CiAgfTsKICBmdW5jdGlvbiBleGVjdXRlQ29tbWFuZChycGNSZXF1ZXN0KSB7CiAgICBjb25zdCBtZXRob2QgPSBycGNSZXF1ZXN0Lm1ldGhvZDsKICAgIGlmICh0eXBlb2YgY29tbWFuZHNbbWV0aG9kXSA9PT0gImZ1bmN0aW9uIikgewogICAgICByZXR1cm4gY29tbWFuZHNbbWV0aG9kXShycGNSZXF1ZXN0KTsKICAgIH0gZWxzZSB7CiAgICAgIHRocm93IG5ldyBFcnJvcihgTWV0aG9kICR7bWV0aG9kfSBpcyBub3QgaW1wbGVtZW50ZWQgaW4gY29tbWFuZHMuYCk7CiAgICB9CiAgfQogIHNlbGYub25tZXNzYWdlID0gKGV2ZW50KSA9PiB7CiAgICB0cnkgewogICAgICBjb25zdCByZXN1bHQgPSBleGVjdXRlQ29tbWFuZChldmVudC5kYXRhKTsKICAgICAgY29uc3QgcmVzcG9uc2UgPSB7CiAgICAgICAgaWQ6IGV2ZW50LmRhdGEuaWQsCiAgICAgICAgbWV0aG9kOiBldmVudC5kYXRhLm1ldGhvZCwKICAgICAgICByZXN1bHQKICAgICAgfTsKICAgICAgc2VsZi5wb3N0TWVzc2FnZShyZXNwb25zZSk7CiAgICB9IGNhdGNoIChlcnJvcikgewogICAgICBjb25zdCBlcnJvclJlc3BvbnNlID0gewogICAgICAgIGlkOiBldmVudC5kYXRhLmlkLAogICAgICAgIG1ldGhvZDogZXZlbnQuZGF0YS5tZXRob2QsCiAgICAgICAgZXJyb3I6IGVycm9yLm1lc3NhZ2UKICAgICAgfTsKICAgICAgc2VsZi5wb3N0TWVzc2FnZShlcnJvclJlc3BvbnNlKTsKICAgIH0KICB9OwogIHZhciBkdW1teSA9ICIiOwogIHZhciBkb3Rsb3R0aWVfd29ya2VyX2RlZmF1bHQgPSBkdW1teTsKfSkoKTsK", { type: "classic" });
  }
};
var RI = class {
  constructor() {
    Z(this, "_workers", /* @__PURE__ */ new Map());
    Z(this, "_animationWorkerMap", /* @__PURE__ */ new Map());
  }
  getWorker(C) {
    return this._workers.has(C) || this._workers.set(C, new hI()), this._workers.get(C);
  }
  assignAnimationToWorker(C, i) {
    this._animationWorkerMap.set(C, i);
  }
  unassignAnimationFromWorker(C) {
    this._animationWorkerMap.delete(C);
  }
  sendMessage(C, i, d) {
    this.getWorker(C).postMessage(i, d || []);
  }
  terminateWorker(C) {
    let i = this._workers.get(C);
    i && (i.terminate(), this._workers.delete(C));
  }
};
function Qg(r) {
  if (r instanceof OffscreenCanvas)
    return { width: r.width, height: r.height };
  let { height: C, width: i } = r.getBoundingClientRect();
  return { width: i * window.devicePixelRatio, height: C * window.devicePixelRatio };
}
function jg() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
}
var J = class J2 {
  constructor(C) {
    Z(this, "_eventManager", new AI());
    Z(this, "_id");
    Z(this, "_worker");
    Z(this, "_canvas");
    Z(this, "_dotLottieInstanceState", { markers: [], autoplay: false, backgroundColor: "", currentFrame: 0, duration: 0, loop: false, mode: "forward", segment: [0, 0], segmentDuration: 0, speed: 1, totalFrames: 0, isLoaded: false, isPlaying: false, isPaused: false, isStopped: true, isFrozen: false, useFrameInterpolation: false, renderConfig: { devicePixelRatio: window.devicePixelRatio }, activeAnimationId: "", activeThemeId: "", layout: void 0, marker: void 0, isReady: false, manifest: null });
    Z(this, "_created", false);
    Z(this, "_pointerUpMethod");
    Z(this, "_pointerDownMethod");
    Z(this, "_pointerMoveMethod");
    Z(this, "_pointerEnterMethod");
    Z(this, "_pointerExitMethod");
    Z(this, "_onCompleteMethod");
    this._canvas = C.canvas, this._id = `dotlottie-${jg()}`;
    let i = C.workerId || "defaultWorker";
    this._worker = J2._workerManager.getWorker(i), J2._workerManager.assignAnimationToWorker(this._id, i), J2._wasmUrl && this._sendMessage("setWasmUrl", { url: J2._wasmUrl }), this._create(C), this._worker.addEventListener("message", this._handleWorkerEvent.bind(this)), this._pointerUpMethod = this._onPointerUp.bind(this), this._pointerDownMethod = this._onPointerDown.bind(this), this._pointerMoveMethod = this._onPointerMove.bind(this), this._pointerEnterMethod = this._onPointerEnter.bind(this), this._pointerExitMethod = this._onPointerLeave.bind(this), this._onCompleteMethod = this._onComplete.bind(this);
  }
  async _handleWorkerEvent(C) {
    let i = C.data;
    i.id || (i.method === "onLoad" && i.result.instanceId === this._id && (await this._updateDotLottieInstanceState(), this._eventManager.dispatch(i.result.event)), i.method === "onComplete" && i.result.instanceId === this._id && (await this._updateDotLottieInstanceState(), this._eventManager.dispatch(i.result.event)), i.method === "onDestroy" && i.result.instanceId === this._id && this._eventManager.dispatch(i.result.event), i.method === "onUnfreeze" && i.result.instanceId === this._id && (await this._updateDotLottieInstanceState(), this._dotLottieInstanceState.isFrozen = false, this._eventManager.dispatch(i.result.event)), i.method === "onFrame" && i.result.instanceId === this._id && (this._dotLottieInstanceState.currentFrame = i.result.event.currentFrame, this._eventManager.dispatch(i.result.event)), i.method === "onRender" && i.result.instanceId === this._id && this._eventManager.dispatch(i.result.event), i.method === "onFreeze" && i.result.instanceId === this._id && (await this._updateDotLottieInstanceState(), this._eventManager.dispatch(i.result.event)), i.method === "onPause" && i.result.instanceId === this._id && (await this._updateDotLottieInstanceState(), this._eventManager.dispatch(i.result.event)), i.method === "onPlay" && i.result.instanceId === this._id && (await this._updateDotLottieInstanceState(), this._eventManager.dispatch(i.result.event)), i.method === "onStop" && i.result.instanceId === this._id && (await this._updateDotLottieInstanceState(), this._eventManager.dispatch(i.result.event)), i.method === "onLoadError" && i.result.instanceId === this._id && (await this._updateDotLottieInstanceState(), this._eventManager.dispatch(i.result.event)), i.method === "onReady" && i.result.instanceId === this._id && (await this._updateDotLottieInstanceState(), this._eventManager.dispatch(i.result.event)));
  }
  async _create(C) {
    let i;
    this._canvas instanceof HTMLCanvasElement ? i = this._canvas.transferControlToOffscreen() : i = this._canvas;
    let { instanceId: d } = await this._sendMessage("create", { instanceId: this._id, config: { ...C, canvas: i }, ...Qg(this._canvas) }, [i]);
    if (d !== this._id)
      throw new Error("Instance ID mismatch");
    this._created = true, await this._updateDotLottieInstanceState();
  }
  get isLoaded() {
    return this._dotLottieInstanceState.isLoaded;
  }
  get isPlaying() {
    return this._dotLottieInstanceState.isPlaying;
  }
  get isPaused() {
    return this._dotLottieInstanceState.isPaused;
  }
  get isStopped() {
    return this._dotLottieInstanceState.isStopped;
  }
  get currentFrame() {
    return this._dotLottieInstanceState.currentFrame;
  }
  get isFrozen() {
    return this._dotLottieInstanceState.isFrozen;
  }
  get segmentDuration() {
    return this._dotLottieInstanceState.segmentDuration;
  }
  get totalFrames() {
    return this._dotLottieInstanceState.totalFrames;
  }
  get segment() {
    return this._dotLottieInstanceState.segment;
  }
  get speed() {
    return this._dotLottieInstanceState.speed;
  }
  get duration() {
    return this._dotLottieInstanceState.duration;
  }
  get isReady() {
    return this._dotLottieInstanceState.isReady;
  }
  get mode() {
    return this._dotLottieInstanceState.mode;
  }
  get canvas() {
    return this._canvas;
  }
  get autoplay() {
    return this._dotLottieInstanceState.autoplay;
  }
  get backgroundColor() {
    return this._dotLottieInstanceState.backgroundColor;
  }
  get loop() {
    return this._dotLottieInstanceState.loop;
  }
  get useFrameInterpolation() {
    return this._dotLottieInstanceState.useFrameInterpolation;
  }
  get renderConfig() {
    return this._dotLottieInstanceState.renderConfig;
  }
  get manifest() {
    return this._dotLottieInstanceState.manifest;
  }
  get activeAnimationId() {
    return this._dotLottieInstanceState.activeAnimationId;
  }
  get marker() {
    return this._dotLottieInstanceState.marker;
  }
  get activeThemeId() {
    return this._dotLottieInstanceState.activeThemeId;
  }
  get layout() {
    return this._dotLottieInstanceState.layout;
  }
  async play() {
    this._created && (await this._sendMessage("play", { instanceId: this._id }), await this._updateDotLottieInstanceState());
  }
  async pause() {
    this._created && (await this._sendMessage("pause", { instanceId: this._id }), await this._updateDotLottieInstanceState());
  }
  async stop() {
    this._created && (await this._sendMessage("stop", { instanceId: this._id }), await this._updateDotLottieInstanceState());
  }
  async setSpeed(C) {
    this._created && (await this._sendMessage("setSpeed", { instanceId: this._id, speed: C }), await this._updateDotLottieInstanceState());
  }
  async setMode(C) {
    this._created && (await this._sendMessage("setMode", { instanceId: this._id, mode: C }), await this._updateDotLottieInstanceState());
  }
  async setFrame(C) {
    this._created && (await this._sendMessage("setFrame", { frame: C, instanceId: this._id }), await this._updateDotLottieInstanceState());
  }
  async setSegment(C, i) {
    this._created && (await this._sendMessage("setSegment", { instanceId: this._id, segment: [C, i] }), await this._updateDotLottieInstanceState());
  }
  async setRenderConfig(C) {
    this._created && (await this._sendMessage("setRenderConfig", { instanceId: this._id, renderConfig: C }), await this._updateDotLottieInstanceState());
  }
  async setUseFrameInterpolation(C) {
    this._created && (await this._sendMessage("setUseFrameInterpolation", { instanceId: this._id, useFrameInterpolation: C }), await this._updateDotLottieInstanceState());
  }
  async loadTheme(C) {
    if (!this._created)
      return false;
    let i = this._sendMessage("loadTheme", { instanceId: this._id, themeId: C });
    return await this._updateDotLottieInstanceState(), i;
  }
  async load(C) {
    this._created && (await this._sendMessage("load", { config: C, instanceId: this._id }), await this._updateDotLottieInstanceState());
  }
  async setLoop(C) {
    this._created && (await this._sendMessage("setLoop", { instanceId: this._id, loop: C }), await this._updateDotLottieInstanceState());
  }
  async resize() {
    if (!this._created)
      return;
    let { height: C, width: i } = Qg(this._canvas);
    this._canvas.width = i, this._canvas.height = C, await this._sendMessage("resize", { height: C, instanceId: this._id, width: i }), await this._updateDotLottieInstanceState();
  }
  async destroy() {
    this._created && (this._created = false, await this._sendMessage("destroy", { instanceId: this._id }), this._cleanupStateMachineListeners(), J2._workerManager.unassignAnimationFromWorker(this._id), this._eventManager.removeAllEventListeners());
  }
  async freeze() {
    this._created && (await this._sendMessage("freeze", { instanceId: this._id }), await this._updateDotLottieInstanceState());
  }
  async unfreeze() {
    this._created && (await this._sendMessage("unfreeze", { instanceId: this._id }), await this._updateDotLottieInstanceState());
  }
  async setBackgroundColor(C) {
    this._created && (await this._sendMessage("setBackgroundColor", { instanceId: this._id, backgroundColor: C }), await this._updateDotLottieInstanceState());
  }
  async loadAnimation(C) {
    this._created && (await this._sendMessage("loadAnimation", { animationId: C, instanceId: this._id }), await this._updateDotLottieInstanceState());
  }
  async setLayout(C) {
    this._created && (await this._sendMessage("setLayout", { instanceId: this._id, layout: C }), await this._updateDotLottieInstanceState());
  }
  async _updateDotLottieInstanceState() {
    if (!this._created)
      return;
    let C = await this._sendMessage("getDotLottieInstanceState", { instanceId: this._id });
    this._dotLottieInstanceState = C.state;
  }
  markers() {
    return this._dotLottieInstanceState.markers;
  }
  async setMarker(C) {
    this._created && (await this._sendMessage("setMarker", { instanceId: this._id, marker: C }), await this._updateDotLottieInstanceState());
  }
  async loadThemeData(C) {
    if (!this._created)
      return false;
    let i = await this._sendMessage("loadThemeData", { instanceId: this._id, themeData: C });
    return await this._updateDotLottieInstanceState(), i;
  }
  async setViewport(C, i, d, B) {
    return this._created ? this._sendMessage("setViewport", { x: C, y: i, width: d, height: B, instanceId: this._id }) : false;
  }
  async _sendMessage(C, i, d) {
    let B = { id: `dotlottie-request-${jg()}`, method: C, params: i };
    return this._worker.postMessage(B, d || []), new Promise((f, P) => {
      let T = (v) => {
        let $ = v.data;
        $.id === B.id && (this._worker.removeEventListener("message", T), $.error ? P(new Error(`Failed to execute method ${C}: ${$.error}`)) : f($.result));
      };
      this._worker.addEventListener("message", T);
    });
  }
  addEventListener(C, i) {
    this._eventManager.addEventListener(C, i);
  }
  removeEventListener(C, i) {
    this._eventManager.removeEventListener(C, i);
  }
  static setWasmUrl(C) {
    J2._wasmUrl = C;
  }
  async loadStateMachine(C) {
    if (!this._created)
      return false;
    let i = await this._sendMessage("loadStateMachine", { instanceId: this._id, stateMachineId: C });
    return await this._updateDotLottieInstanceState(), i;
  }
  async loadStateMachineData(C) {
    if (!this._created)
      return false;
    let i = await this._sendMessage("loadStateMachineData", { instanceId: this._id, stateMachineData: C });
    return await this._updateDotLottieInstanceState(), i;
  }
  async startStateMachine() {
    if (!this._created)
      return false;
    this._setupStateMachineListeners();
    let C = await this._sendMessage("startStateMachine", { instanceId: this._id });
    return await this._updateDotLottieInstanceState(), C;
  }
  async stopStateMachine() {
    return this._created ? (this._cleanupStateMachineListeners(), this._sendMessage("stopStateMachine", { instanceId: this._id })) : false;
  }
  async postStateMachineEvent(C) {
    return this._created ? this._sendMessage("postStateMachineEvent", { event: C, instanceId: this._id }) : 1;
  }
  async getStateMachineListeners() {
    return this._created ? this._sendMessage("getStateMachineListeners", { instanceId: this._id }) : [];
  }
  _getPointerPosition(C) {
    let i = this._canvas.getBoundingClientRect(), d = this._canvas.width / i.width, B = this._canvas.height / i.height, f = this._dotLottieInstanceState.renderConfig.devicePixelRatio || window.devicePixelRatio || 1, P = (C.clientX - i.left) * d / f, T = (C.clientY - i.top) * B / f;
    return { x: P, y: T };
  }
  _onPointerUp(C) {
    let { x: i, y: d } = this._getPointerPosition(C);
    this.postStateMachineEvent(`OnPointerUp: ${i} ${d}`);
  }
  _onPointerDown(C) {
    let { x: i, y: d } = this._getPointerPosition(C);
    this.postStateMachineEvent(`OnPointerDown: ${i} ${d}`);
  }
  _onPointerMove(C) {
    let { x: i, y: d } = this._getPointerPosition(C);
    this.postStateMachineEvent(`OnPointerMove: ${i} ${d}`);
  }
  _onPointerEnter(C) {
    let { x: i, y: d } = this._getPointerPosition(C);
    this.postStateMachineEvent(`OnPointerEnter: ${i} ${d}`);
  }
  _onPointerLeave(C) {
    let { x: i, y: d } = this._getPointerPosition(C);
    this.postStateMachineEvent(`OnPointerExit: ${i} ${d}`);
  }
  _onComplete() {
    this.postStateMachineEvent("OnComplete");
  }
  async _setupStateMachineListeners() {
    if (M && this._canvas instanceof HTMLCanvasElement && this.isLoaded) {
      let C = await this._sendMessage("getStateMachineListeners", { instanceId: this._id });
      C.includes("PointerUp") && this._canvas.addEventListener("pointerup", this._pointerUpMethod), C.includes("PointerDown") && this._canvas.addEventListener("pointerdown", this._pointerDownMethod), C.includes("PointerMove") && this._canvas.addEventListener("pointermove", this._pointerMoveMethod), C.includes("PointerEnter") && this._canvas.addEventListener("pointerenter", this._pointerEnterMethod), C.includes("PointerExit") && this._canvas.addEventListener("pointerleave", this._pointerExitMethod), C.includes("Complete") && this.addEventListener("complete", this._onCompleteMethod);
    }
  }
  _cleanupStateMachineListeners() {
    M && this._canvas instanceof HTMLCanvasElement && (this._canvas.removeEventListener("pointerup", this._pointerUpMethod), this._canvas.removeEventListener("pointerdown", this._pointerDownMethod), this._canvas.removeEventListener("pointermove", this._pointerMoveMethod), this._canvas.removeEventListener("pointerenter", this._pointerEnterMethod), this._canvas.removeEventListener("pointerleave", this._pointerExitMethod), this.removeEventListener("complete", this._onCompleteMethod));
  }
};
Z(J, "_workerManager", new RI()), Z(J, "_wasmUrl", "");
var xg = J;
var import_debounce = __toESM2(require_debounce(), 1);
function DotLottieComponent({
  children,
  className = "",
  setCanvasRef,
  setContainerRef,
  style,
  ...rest
}) {
  const containerStyle = {
    width: "100%",
    height: "100%",
    lineHeight: 0,
    ...style
  };
  return import_react.default.createElement("div", { ref: setContainerRef, className, ...!className && { style: containerStyle } }, import_react.default.createElement(
    "canvas",
    {
      ref: setCanvasRef,
      style: {
        width: "100%",
        height: "100%"
      },
      ...rest
    },
    children
  ));
}
var isServerSide = () => typeof window === "undefined";
var useDotLottie = (config) => {
  const [dotLottie, setDotLottie] = (0, import_react.useState)(null);
  const dotLottieRef = (0, import_react.useRef)(null);
  const configRef = (0, import_react.useRef)(config);
  const canvasRef = (0, import_react.useRef)(null);
  const containerRef = (0, import_react.useRef)(null);
  dotLottieRef.current = dotLottie;
  configRef.current = config;
  const hoverHandler = (0, import_react.useCallback)((event) => {
    var _a, _b;
    if (!((_a = configRef.current) == null ? void 0 : _a.playOnHover) || !((_b = dotLottieRef.current) == null ? void 0 : _b.isLoaded))
      return;
    if (event.type === "mouseenter") {
      dotLottieRef.current.play();
    } else if (event.type === "mouseleave") {
      dotLottieRef.current.pause();
    }
  }, []);
  const intersectionObserver = (0, import_react.useMemo)(() => {
    if (isServerSide())
      return null;
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        var _a, _b;
        if (entry.isIntersecting) {
          (_a = dotLottieRef.current) == null ? void 0 : _a.unfreeze();
        } else {
          (_b = dotLottieRef.current) == null ? void 0 : _b.freeze();
        }
      });
    };
    return new IntersectionObserver(observerCallback, {
      threshold: 0
    });
  }, []);
  const resizeObserver = (0, import_react.useMemo)(() => {
    if (isServerSide())
      return null;
    const observerCallback = (0, import_debounce.default)(() => {
      var _a, _b;
      if ((_a = configRef.current) == null ? void 0 : _a.autoResizeCanvas) {
        (_b = dotLottieRef.current) == null ? void 0 : _b.resize();
      }
    }, 150);
    return new ResizeObserver(observerCallback);
  }, []);
  const setCanvasRef = (0, import_react.useCallback)((canvas) => {
    canvasRef.current = canvas;
  }, []);
  const setContainerRef = (0, import_react.useCallback)((container) => {
    containerRef.current = container;
  }, []);
  const Component = (0, import_react.useCallback)(
    (props) => {
      return import_react.default.createElement(DotLottieComponent, { setContainerRef, setCanvasRef, ...props });
    },
    [setCanvasRef, setContainerRef]
  );
  (0, import_react.useEffect)(() => {
    const canvas = canvasRef.current;
    let dotLottieInstance = null;
    if (canvas) {
      dotLottieInstance = new zg({
        ...configRef.current,
        canvas
      });
      const initialEntry = canvas.getBoundingClientRect();
      if (initialEntry.top >= 0 && initialEntry.left >= 0 && initialEntry.bottom <= (window.innerHeight || document.documentElement.clientHeight) && initialEntry.right <= (window.innerWidth || document.documentElement.clientWidth)) {
        dotLottieInstance.unfreeze();
      } else {
        dotLottieInstance.freeze();
      }
      intersectionObserver == null ? void 0 : intersectionObserver.observe(canvas);
      if (config == null ? void 0 : config.autoResizeCanvas) {
        resizeObserver == null ? void 0 : resizeObserver.observe(canvas);
      }
      canvas.addEventListener("mouseenter", hoverHandler);
      canvas.addEventListener("mouseleave", hoverHandler);
      setDotLottie(dotLottieInstance);
    }
    return () => {
      dotLottieInstance == null ? void 0 : dotLottieInstance.destroy();
      setDotLottie(null);
      resizeObserver == null ? void 0 : resizeObserver.disconnect();
      intersectionObserver == null ? void 0 : intersectionObserver.disconnect();
      canvas == null ? void 0 : canvas.removeEventListener("mouseenter", hoverHandler);
      canvas == null ? void 0 : canvas.removeEventListener("mouseleave", hoverHandler);
    };
  }, [intersectionObserver, resizeObserver, hoverHandler]);
  (0, import_react.useEffect)(() => {
    if (!dotLottieRef.current)
      return;
    if (typeof (config == null ? void 0 : config.speed) === "number" && config.speed !== dotLottieRef.current.speed) {
      dotLottieRef.current.setSpeed(config.speed);
    }
  }, [config == null ? void 0 : config.speed]);
  (0, import_react.useEffect)(() => {
    if (!dotLottieRef.current)
      return;
    if (typeof (config == null ? void 0 : config.mode) === "string" && config.mode !== dotLottieRef.current.mode) {
      dotLottieRef.current.setMode(config.mode);
    }
  }, [config == null ? void 0 : config.mode]);
  (0, import_react.useEffect)(() => {
    if (!dotLottieRef.current)
      return;
    if (typeof (config == null ? void 0 : config.loop) === "boolean" && config.loop !== dotLottieRef.current.loop) {
      dotLottieRef.current.setLoop(config.loop);
    }
  }, [config == null ? void 0 : config.loop]);
  (0, import_react.useEffect)(() => {
    if (!dotLottieRef.current)
      return;
    if (typeof (config == null ? void 0 : config.useFrameInterpolation) === "boolean" && config.useFrameInterpolation !== dotLottieRef.current.useFrameInterpolation) {
      dotLottieRef.current.setUseFrameInterpolation(config.useFrameInterpolation);
    }
  }, [config == null ? void 0 : config.useFrameInterpolation]);
  (0, import_react.useEffect)(() => {
    if (!dotLottieRef.current)
      return;
    if (typeof (config == null ? void 0 : config.segment) === "object" && Array.isArray(config.segment) && // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    config.segment.length === 2) {
      const startFrame = config.segment[0];
      const endFrame = config.segment[1];
      dotLottieRef.current.setSegment(startFrame, endFrame);
    }
  }, [config == null ? void 0 : config.segment]);
  (0, import_react.useEffect)(() => {
    if (!dotLottieRef.current)
      return;
    if (typeof (config == null ? void 0 : config.backgroundColor) === "string" && config.backgroundColor !== dotLottieRef.current.backgroundColor) {
      dotLottieRef.current.setBackgroundColor(config.backgroundColor);
    }
  }, [config == null ? void 0 : config.backgroundColor]);
  (0, import_react.useEffect)(() => {
    if (!dotLottieRef.current)
      return;
    if (typeof (config == null ? void 0 : config.renderConfig) === "object") {
      dotLottieRef.current.setRenderConfig(config.renderConfig);
    }
  }, [JSON.stringify(config == null ? void 0 : config.renderConfig)]);
  (0, import_react.useEffect)(() => {
    if (!dotLottieRef.current)
      return;
    if (typeof (config == null ? void 0 : config.data) === "string" || (config == null ? void 0 : config.data) instanceof ArrayBuffer) {
      dotLottieRef.current.load({
        data: config.data,
        ...configRef.current || {}
      });
    }
  }, [config == null ? void 0 : config.data]);
  (0, import_react.useEffect)(() => {
    if (!dotLottieRef.current)
      return;
    if (typeof (config == null ? void 0 : config.src) === "string") {
      dotLottieRef.current.load({
        src: config.src,
        ...configRef.current || {}
      });
    }
  }, [config == null ? void 0 : config.src]);
  (0, import_react.useEffect)(() => {
    if (!dotLottieRef.current)
      return;
    if (typeof (config == null ? void 0 : config.marker) === "string") {
      dotLottieRef.current.setMarker(config.marker);
    }
  }, [config == null ? void 0 : config.marker]);
  (0, import_react.useEffect)(() => {
    if (!resizeObserver)
      return;
    if ((config == null ? void 0 : config.autoResizeCanvas) && canvasRef.current) {
      resizeObserver.observe(canvasRef.current);
    } else {
      resizeObserver.disconnect();
    }
  }, [config == null ? void 0 : config.autoResizeCanvas, resizeObserver]);
  (0, import_react.useEffect)(() => {
    if (!dotLottieRef.current)
      return;
    if (dotLottieRef.current.isLoaded && (config == null ? void 0 : config.animationId) && dotLottieRef.current.activeAnimationId !== config.animationId) {
      dotLottieRef.current.loadAnimation(config.animationId);
    }
  }, [config == null ? void 0 : config.animationId]);
  (0, import_react.useEffect)(() => {
    if (!dotLottieRef.current)
      return;
    if (dotLottieRef.current.isLoaded && dotLottieRef.current.activeThemeId !== (config == null ? void 0 : config.themeId)) {
      dotLottieRef.current.loadTheme((config == null ? void 0 : config.themeId) || "");
    }
  }, [config == null ? void 0 : config.themeId]);
  (0, import_react.useEffect)(() => {
    if (!dotLottieRef.current)
      return;
    if (dotLottieRef.current.isLoaded) {
      dotLottieRef.current.loadThemeData((config == null ? void 0 : config.themeData) || "");
    }
  }, [config == null ? void 0 : config.themeData]);
  return {
    dotLottie,
    setCanvasRef,
    setContainerRef,
    canvas: canvasRef.current,
    container: containerRef.current,
    DotLottieComponent: Component
  };
};
var useIsomorphicLayoutEffect = typeof window !== "undefined" ? import_react.useLayoutEffect : import_react.useEffect;
function useStableCallback(callback) {
  const callbackContainer = (0, import_react.useRef)(callback);
  useIsomorphicLayoutEffect(() => {
    callbackContainer.current = callback;
  });
  return (0, import_react.useCallback)((...args) => callbackContainer.current(...args), [callbackContainer]);
}
var DotLottieReact = ({
  animationId,
  autoResizeCanvas = true,
  autoplay,
  backgroundColor,
  data,
  dotLottieRefCallback,
  loop,
  marker,
  mode,
  playOnHover,
  renderConfig,
  segment,
  speed,
  src,
  themeData,
  themeId,
  useFrameInterpolation,
  ...props
}) => {
  const { DotLottieComponent: DotLottieComponent2, dotLottie } = useDotLottie({
    data,
    mode,
    speed,
    src,
    autoplay,
    loop,
    segment,
    renderConfig,
    backgroundColor,
    useFrameInterpolation,
    playOnHover,
    autoResizeCanvas,
    marker,
    themeId,
    animationId,
    themeData
  });
  const stableDotLottieRefCallback = typeof dotLottieRefCallback === "function" ? useStableCallback(dotLottieRefCallback) : void 0;
  import_react.default.useEffect(() => {
    if (typeof stableDotLottieRefCallback === "function") {
      stableDotLottieRefCallback(dotLottie);
    }
  }, [stableDotLottieRefCallback, dotLottie]);
  return import_react.default.createElement(DotLottieComponent2, { ...props });
};
var import_debounce2 = __toESM2(require_debounce(), 1);
function DotLottieWorkerComponent({
  children,
  className = "",
  setCanvasRef,
  setContainerRef,
  style,
  ...rest
}) {
  const containerStyle = {
    width: "100%",
    height: "100%",
    lineHeight: 0,
    ...style
  };
  return import_react.default.createElement("div", { ref: setContainerRef, className, ...!className && { style: containerStyle } }, import_react.default.createElement(
    "canvas",
    {
      ref: setCanvasRef,
      style: {
        width: "100%",
        height: "100%"
      },
      ...rest
    },
    children
  ));
}
var isServerSide2 = () => typeof window === "undefined";
var useDotLottieWorker = (config) => {
  const [dotLottie, setDotLottie] = (0, import_react.useState)(null);
  const dotLottieRef = (0, import_react.useRef)(null);
  const configRef = (0, import_react.useRef)(config);
  const canvasRef = (0, import_react.useRef)(null);
  const containerRef = (0, import_react.useRef)(null);
  dotLottieRef.current = dotLottie;
  configRef.current = config;
  const hoverHandler = (0, import_react.useCallback)((event) => {
    var _a, _b;
    if (!((_a = configRef.current) == null ? void 0 : _a.playOnHover) || !((_b = dotLottieRef.current) == null ? void 0 : _b.isLoaded))
      return;
    if (event.type === "mouseenter") {
      dotLottieRef.current.play();
    } else if (event.type === "mouseleave") {
      dotLottieRef.current.pause();
    }
  }, []);
  const intersectionObserver = (0, import_react.useMemo)(() => {
    if (isServerSide2())
      return null;
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        var _a, _b;
        if (entry.isIntersecting) {
          (_a = dotLottieRef.current) == null ? void 0 : _a.unfreeze();
        } else {
          (_b = dotLottieRef.current) == null ? void 0 : _b.freeze();
        }
      });
    };
    return new IntersectionObserver(observerCallback, {
      threshold: 0
    });
  }, []);
  const resizeObserver = (0, import_react.useMemo)(() => {
    if (isServerSide2())
      return null;
    const observerCallback = (0, import_debounce2.default)(() => {
      var _a, _b;
      if ((_a = configRef.current) == null ? void 0 : _a.autoResizeCanvas) {
        (_b = dotLottieRef.current) == null ? void 0 : _b.resize();
      }
    }, 150);
    return new ResizeObserver(observerCallback);
  }, []);
  const setCanvasRef = (0, import_react.useCallback)((canvas) => {
    canvasRef.current = canvas;
  }, []);
  const setContainerRef = (0, import_react.useCallback)((container) => {
    containerRef.current = container;
  }, []);
  const Component = (0, import_react.useCallback)(
    (props) => {
      return import_react.default.createElement(DotLottieWorkerComponent, { setContainerRef, setCanvasRef, ...props });
    },
    [setCanvasRef, setContainerRef]
  );
  (0, import_react.useEffect)(() => {
    const canvas = canvasRef.current;
    let dotLottieInstance = null;
    if (canvas) {
      dotLottieInstance = new xg({
        ...configRef.current,
        canvas
      });
      const initialEntry = canvas.getBoundingClientRect();
      if (initialEntry.top >= 0 && initialEntry.left >= 0 && initialEntry.bottom <= (window.innerHeight || document.documentElement.clientHeight) && initialEntry.right <= (window.innerWidth || document.documentElement.clientWidth)) {
        dotLottieInstance.unfreeze();
      } else {
        dotLottieInstance.freeze();
      }
      intersectionObserver == null ? void 0 : intersectionObserver.observe(canvas);
      if (config == null ? void 0 : config.autoResizeCanvas) {
        resizeObserver == null ? void 0 : resizeObserver.observe(canvas);
      }
      canvas.addEventListener("mouseenter", hoverHandler);
      canvas.addEventListener("mouseleave", hoverHandler);
      setDotLottie(dotLottieInstance);
    }
    return () => {
      dotLottieInstance == null ? void 0 : dotLottieInstance.destroy();
      setDotLottie(null);
      resizeObserver == null ? void 0 : resizeObserver.disconnect();
      intersectionObserver == null ? void 0 : intersectionObserver.disconnect();
      canvas == null ? void 0 : canvas.removeEventListener("mouseenter", hoverHandler);
      canvas == null ? void 0 : canvas.removeEventListener("mouseleave", hoverHandler);
    };
  }, [intersectionObserver, resizeObserver, hoverHandler]);
  (0, import_react.useEffect)(() => {
    if (!dotLottieRef.current)
      return;
    if (typeof (config == null ? void 0 : config.speed) === "number" && config.speed !== dotLottieRef.current.speed) {
      dotLottieRef.current.setSpeed(config.speed);
    }
  }, [config == null ? void 0 : config.speed]);
  (0, import_react.useEffect)(() => {
    if (!dotLottieRef.current)
      return;
    if (typeof (config == null ? void 0 : config.mode) === "string" && config.mode !== dotLottieRef.current.mode) {
      dotLottieRef.current.setMode(config.mode);
    }
  }, [config == null ? void 0 : config.mode]);
  (0, import_react.useEffect)(() => {
    if (!dotLottieRef.current)
      return;
    if (typeof (config == null ? void 0 : config.loop) === "boolean" && config.loop !== dotLottieRef.current.loop) {
      dotLottieRef.current.setLoop(config.loop);
    }
  }, [config == null ? void 0 : config.loop]);
  (0, import_react.useEffect)(() => {
    if (!dotLottieRef.current)
      return;
    if (typeof (config == null ? void 0 : config.useFrameInterpolation) === "boolean" && config.useFrameInterpolation !== dotLottieRef.current.useFrameInterpolation) {
      dotLottieRef.current.setUseFrameInterpolation(config.useFrameInterpolation);
    }
  }, [config == null ? void 0 : config.useFrameInterpolation]);
  (0, import_react.useEffect)(() => {
    if (!dotLottieRef.current)
      return;
    if (typeof (config == null ? void 0 : config.segment) === "object" && Array.isArray(config.segment) && // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    config.segment.length === 2) {
      const startFrame = config.segment[0];
      const endFrame = config.segment[1];
      dotLottieRef.current.setSegment(startFrame, endFrame);
    }
  }, [config == null ? void 0 : config.segment]);
  (0, import_react.useEffect)(() => {
    if (!dotLottieRef.current)
      return;
    if (typeof (config == null ? void 0 : config.backgroundColor) === "string" && config.backgroundColor !== dotLottieRef.current.backgroundColor) {
      dotLottieRef.current.setBackgroundColor(config.backgroundColor);
    }
  }, [config == null ? void 0 : config.backgroundColor]);
  (0, import_react.useEffect)(() => {
    if (!dotLottieRef.current)
      return;
    if (typeof (config == null ? void 0 : config.renderConfig) === "object") {
      dotLottieRef.current.setRenderConfig(config.renderConfig);
    }
  }, [JSON.stringify(config == null ? void 0 : config.renderConfig)]);
  (0, import_react.useEffect)(() => {
    if (!dotLottieRef.current)
      return;
    if (typeof (config == null ? void 0 : config.data) === "string" || (config == null ? void 0 : config.data) instanceof ArrayBuffer) {
      dotLottieRef.current.load({
        data: config.data,
        ...configRef.current || {}
      });
    }
  }, [config == null ? void 0 : config.data]);
  (0, import_react.useEffect)(() => {
    if (!dotLottieRef.current)
      return;
    if (typeof (config == null ? void 0 : config.src) === "string") {
      dotLottieRef.current.load({
        src: config.src,
        ...configRef.current || {}
      });
    }
  }, [config == null ? void 0 : config.src]);
  (0, import_react.useEffect)(() => {
    if (!dotLottieRef.current)
      return;
    if (typeof (config == null ? void 0 : config.marker) === "string") {
      dotLottieRef.current.setMarker(config.marker);
    }
  }, [config == null ? void 0 : config.marker]);
  (0, import_react.useEffect)(() => {
    if (!resizeObserver)
      return;
    if ((config == null ? void 0 : config.autoResizeCanvas) && canvasRef.current) {
      resizeObserver.observe(canvasRef.current);
    } else {
      resizeObserver.disconnect();
    }
  }, [config == null ? void 0 : config.autoResizeCanvas, resizeObserver]);
  (0, import_react.useEffect)(() => {
    if (!dotLottieRef.current)
      return;
    if (dotLottieRef.current.isLoaded && (config == null ? void 0 : config.animationId) && dotLottieRef.current.activeAnimationId !== config.animationId) {
      dotLottieRef.current.loadAnimation(config.animationId);
    }
  }, [config == null ? void 0 : config.animationId]);
  (0, import_react.useEffect)(() => {
    if (!dotLottieRef.current)
      return;
    if (dotLottieRef.current.isLoaded && dotLottieRef.current.activeThemeId !== (config == null ? void 0 : config.themeId)) {
      dotLottieRef.current.loadTheme((config == null ? void 0 : config.themeId) || "");
    }
  }, [config == null ? void 0 : config.themeId]);
  (0, import_react.useEffect)(() => {
    if (!dotLottieRef.current)
      return;
    if (dotLottieRef.current.isLoaded) {
      dotLottieRef.current.loadThemeData((config == null ? void 0 : config.themeData) || "");
    }
  }, [config == null ? void 0 : config.themeData]);
  return {
    dotLottie,
    setCanvasRef,
    setContainerRef,
    canvas: canvasRef.current,
    container: containerRef.current,
    DotLottieComponent: Component
  };
};
var DotLottieWorkerReact = ({
  animationId,
  autoResizeCanvas = true,
  autoplay,
  backgroundColor,
  data,
  dotLottieRefCallback,
  loop,
  marker,
  mode,
  playOnHover,
  renderConfig,
  segment,
  speed,
  src,
  themeData,
  themeId,
  useFrameInterpolation,
  workerId,
  ...props
}) => {
  const { DotLottieComponent: DotLottieComponent2, dotLottie } = useDotLottieWorker({
    workerId,
    data,
    mode,
    speed,
    src,
    autoplay,
    loop,
    segment,
    renderConfig,
    backgroundColor,
    useFrameInterpolation,
    playOnHover,
    autoResizeCanvas,
    marker,
    themeId,
    animationId,
    themeData
  });
  const stableDotLottieRefCallback = typeof dotLottieRefCallback === "function" ? useStableCallback(dotLottieRefCallback) : void 0;
  import_react.default.useEffect(() => {
    if (typeof stableDotLottieRefCallback === "function") {
      stableDotLottieRefCallback(dotLottie);
    }
  }, [stableDotLottieRefCallback, dotLottie]);
  return import_react.default.createElement(DotLottieComponent2, { ...props });
};
var setWasmUrl = (url) => {
  xg.setWasmUrl(url);
  zg.setWasmUrl(url);
};
export {
  DotLottieReact,
  DotLottieWorkerReact,
  setWasmUrl,
  useDotLottie,
  useDotLottieWorker
};
//# sourceMappingURL=@lottiefiles_dotlottie-react.js.map
