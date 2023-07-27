(() => {
  var t,
    e,
    r,
    n,
    o,
    i,
    a,
    u,
    c,
    s,
    l,
    f,
    p,
    d,
    h,
    v,
    y,
    m =
      'undefined' != typeof globalThis
        ? globalThis
        : 'undefined' != typeof self
        ? self
        : 'undefined' != typeof window
        ? window
        : 'undefined' != typeof global
        ? global
        : {},
    g = {},
    b = {},
    w = function (t) {
      return t && t.Math == Math && t;
    };
  b =
    w('object' == typeof globalThis && globalThis) ||
    w('object' == typeof window && window) ||
    w('object' == typeof self && self) ||
    w('object' == typeof m && m) ||
    (function () {
      return this;
    })() ||
    b ||
    Function('return this')();
  var E = {},
    S = {};
  E = !(S = function (t) {
    try {
      return !!t();
    } catch (t) {
      return !0;
    }
  })(function () {
    return (
      7 !=
      Object.defineProperty({}, 1, {
        get: function () {
          return 7;
        },
      })[1]
    );
  });
  var L = {},
    T = {};
  T = !S(function () {
    var t = function () {}.bind();
    return 'function' != typeof t || t.hasOwnProperty('prototype');
  });
  ('use strict');
  var j = Function.prototype.call;
  L = T
    ? j.bind(j)
    : function () {
        return j.apply(j, arguments);
      };
  var O = {}.propertyIsEnumerable,
    x = Object.getOwnPropertyDescriptor;
  e =
    x && !O.call({ 1: 2 }, 1)
      ? function (t) {
          var e = x(this, t);
          return !!e && e.enumerable;
        }
      : O;
  var I = {};
  I = function (t, e) {
    return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e };
  };
  var P = {},
    _ = {},
    k = {},
    M = Function.prototype,
    C = M.call,
    D = T && M.bind.bind(C, C),
    F = {},
    B = (k = T
      ? D
      : function (t) {
          return function () {
            return C.apply(t, arguments);
          };
        })({}.toString),
    N = k(''.slice);
  F = function (t) {
    return N(B(t), 8, -1);
  };
  var q = Object,
    A = k(''.split);
  _ = S(function () {
    return !q('z').propertyIsEnumerable(0);
  })
    ? function (t) {
        return 'String' == F(t) ? A(t, '') : q(t);
      }
    : q;
  var G = {},
    $ = {};
  $ = function (t) {
    return null == t;
  };
  var z = TypeError;
  (G = function (t) {
    if ($(t)) throw z("Can't call method on " + t);
    return t;
  }),
    (P = function (t) {
      return _(G(t));
    });
  var R = {},
    H = {},
    Y = {},
    W = {},
    Z = {},
    J = 'object' == typeof document && document.all,
    U = (Z = { all: J, IS_HTMLDDA: void 0 === J && void 0 !== J }).all;
  W = Z.IS_HTMLDDA
    ? function (t) {
        return 'function' == typeof t || t === U;
      }
    : function (t) {
        return 'function' == typeof t;
      };
  var V = Z.all;
  Y = Z.IS_HTMLDDA
    ? function (t) {
        return 'object' == typeof t ? null !== t : W(t) || t === V;
      }
    : function (t) {
        return 'object' == typeof t ? null !== t : W(t);
      };
  var K = {},
    X = {};
  X = function (t, e) {
    var r;
    return arguments.length < 2 ? (W((r = b[t])) ? r : void 0) : b[t] && b[t][e];
  };
  var Q = {};
  Q = k({}.isPrototypeOf);
  var tt = {},
    te = {},
    tr = {},
    tn = {};
  tn = ('undefined' != typeof navigator && String(navigator.userAgent)) || '';
  var to = b.process,
    ti = b.Deno,
    ta = (to && to.versions) || (ti && ti.version),
    tu = ta && ta.v8;
  tu && (n = (r = tu.split('.'))[0] > 0 && r[0] < 4 ? 1 : +(r[0] + r[1])),
    !n && tn && (!(r = tn.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = tn.match(/Chrome\/(\d+)/)) && (n = +r[1]),
    (tr = n);
  var tc = b.String;
  tt =
    (te =
      !!Object.getOwnPropertySymbols &&
      !S(function () {
        var t = Symbol();
        return !tc(t) || !(Object(t) instanceof Symbol) || (!Symbol.sham && tr && tr < 41);
      })) &&
    !Symbol.sham &&
    'symbol' == typeof Symbol.iterator;
  var ts = Object;
  K = tt
    ? function (t) {
        return 'symbol' == typeof t;
      }
    : function (t) {
        var e = X('Symbol');
        return W(e) && Q(e.prototype, ts(t));
      };
  var tl = {},
    tf = {},
    tp = {},
    td = String;
  tp = function (t) {
    try {
      return td(t);
    } catch (t) {
      return 'Object';
    }
  };
  var th = TypeError;
  (tf = function (t) {
    if (W(t)) return t;
    throw th(tp(t) + ' is not a function');
  }),
    (tl = function (t, e) {
      var r = t[e];
      return $(r) ? void 0 : tf(r);
    });
  var tv = {},
    ty = TypeError;
  tv = function (t, e) {
    var r, n;
    if (
      ('string' === e && W((r = t.toString)) && !Y((n = L(r, t)))) ||
      (W((r = t.valueOf)) && !Y((n = L(r, t)))) ||
      ('string' !== e && W((r = t.toString)) && !Y((n = L(r, t))))
    )
      return n;
    throw ty("Can't convert object to primitive value");
  };
  var tm = {},
    tg = {};
  tg = !1;
  var tb = {},
    tw = {},
    tE = Object.defineProperty;
  tw = function (t, e) {
    try {
      tE(b, t, { value: e, configurable: !0, writable: !0 });
    } catch (r) {
      b[t] = e;
    }
    return e;
  };
  var tS = '__core-js_shared__';
  (tb = b[tS] || tw(tS, {})),
    (tm = function (t, e) {
      return tb[t] || (tb[t] = void 0 !== e ? e : {});
    })('versions', []).push({
      version: '3.31.1',
      mode: tg ? 'pure' : 'global',
      copyright: '\xa9 2014-2023 Denis Pushkarev (zloirock.ru)',
      license: 'https://github.com/zloirock/core-js/blob/v3.31.1/LICENSE',
      source: 'https://github.com/zloirock/core-js',
    });
  var tL = {},
    tT = {},
    tj = Object;
  tT = function (t) {
    return tj(G(t));
  };
  var tO = k({}.hasOwnProperty);
  tL =
    Object.hasOwn ||
    function (t, e) {
      return tO(tT(t), e);
    };
  var tx = {},
    tI = 0,
    tP = Math.random(),
    t_ = k((1).toString);
  tx = function (t) {
    return 'Symbol(' + (void 0 === t ? '' : t) + ')_' + t_(++tI + tP, 36);
  };
  var tk = b.Symbol,
    tM = tm('wks'),
    tC = tt ? tk.for || tk : (tk && tk.withoutSetter) || tx,
    tD = TypeError,
    tF = (function (t) {
      return tL(tM, t) || (tM[t] = te && tL(tk, t) ? tk[t] : tC('Symbol.' + t)), tM[t];
    })('toPrimitive');
  (H = function (t, e) {
    if (!Y(t) || K(t)) return t;
    var r,
      n = tl(t, tF);
    if (n) {
      if ((void 0 === e && (e = 'default'), !Y((r = L(n, t, e))) || K(r))) return r;
      throw tD("Can't convert object to primitive value");
    }
    return void 0 === e && (e = 'number'), tv(t, e);
  }),
    (R = function (t) {
      var e = H(t, 'string');
      return K(e) ? e : e + '';
    });
  var tB = {},
    tN = {},
    tq = b.document,
    tA = Y(tq) && Y(tq.createElement);
  (tN = function (t) {
    return tA ? tq.createElement(t) : {};
  }),
    (tB =
      !E &&
      !S(function () {
        return (
          7 !=
          Object.defineProperty(tN('div'), 'a', {
            get: function () {
              return 7;
            },
          }).a
        );
      }));
  var tG = Object.getOwnPropertyDescriptor;
  t = E
    ? tG
    : function (t, r) {
        if (((t = P(t)), (r = R(r)), tB))
          try {
            return tG(t, r);
          } catch (t) {}
        if (tL(t, r)) return I(!L(e, t, r), t[r]);
      };
  var t$ = {},
    tz = {};
  tz =
    E &&
    S(function () {
      return 42 != Object.defineProperty(function () {}, 'prototype', { value: 42, writable: !1 }).prototype;
    });
  var tR = {},
    tH = String,
    tY = TypeError;
  tR = function (t) {
    if (Y(t)) return t;
    throw tY(tH(t) + ' is not an object');
  };
  var tW = TypeError,
    tZ = Object.defineProperty,
    tJ = Object.getOwnPropertyDescriptor,
    tU = 'enumerable',
    tV = 'configurable',
    tK = 'writable';
  (o = E
    ? tz
      ? function (t, e, r) {
          if (
            (tR(t), (e = R(e)), tR(r), 'function' == typeof t && 'prototype' === e && 'value' in r && tK in r && !r[tK])
          ) {
            var n = tJ(t, e);
            n &&
              n[tK] &&
              ((t[e] = r.value),
              (r = { configurable: tV in r ? r[tV] : n[tV], enumerable: tU in r ? r[tU] : n[tU], writable: !1 }));
          }
          return tZ(t, e, r);
        }
      : tZ
    : function (t, e, r) {
        if ((tR(t), (e = R(e)), tR(r), tB))
          try {
            return tZ(t, e, r);
          } catch (t) {}
        if ('get' in r || 'set' in r) throw tW('Accessors not supported');
        return 'value' in r && (t[e] = r.value), t;
      }),
    (t$ = E
      ? function (t, e, r) {
          return o(t, e, I(1, r));
        }
      : function (t, e, r) {
          return (t[e] = r), t;
        });
  var tX = {},
    tQ = {},
    t0 = Function.prototype,
    t1 = E && Object.getOwnPropertyDescriptor,
    t2 = tL(t0, 'name') && (!E || (E && t1(t0, 'name').configurable)),
    t3 = {},
    t7 = k(Function.toString);
  W(tb.inspectSource) ||
    (tb.inspectSource = function (t) {
      return t7(t);
    }),
    (t3 = tb.inspectSource);
  var t4 = {},
    t8 = {},
    t9 = b.WeakMap;
  t8 = W(t9) && /native code/.test(String(t9));
  var t5 = {},
    t6 = tm('keys');
  t5 = function (t) {
    return t6[t] || (t6[t] = tx(t));
  };
  var et = {};
  et = {};
  var ee = 'Object already initialized',
    er = b.TypeError,
    en = b.WeakMap;
  if (t8 || tb.state) {
    var eo = tb.state || (tb.state = new en());
    (eo.get = eo.get),
      (eo.has = eo.has),
      (eo.set = eo.set),
      (i = function (t, e) {
        if (eo.has(t)) throw er(ee);
        return (e.facade = t), eo.set(t, e), e;
      }),
      (a = function (t) {
        return eo.get(t) || {};
      }),
      (u = function (t) {
        return eo.has(t);
      });
  } else {
    var ei = t5('state');
    (et[ei] = !0),
      (i = function (t, e) {
        if (tL(t, ei)) throw er(ee);
        return (e.facade = t), t$(t, ei, e), e;
      }),
      (a = function (t) {
        return tL(t, ei) ? t[ei] : {};
      }),
      (u = function (t) {
        return tL(t, ei);
      });
  }
  var ea = (t4 = {
      set: i,
      get: a,
      has: u,
      enforce: function (t) {
        return u(t) ? a(t) : i(t, {});
      },
      getterFor: function (t) {
        return function (e) {
          var r;
          if (!Y(e) || (r = a(e)).type !== t) throw er('Incompatible receiver, ' + t + ' required');
          return r;
        };
      },
    }).enforce,
    eu = t4.get,
    ec = String,
    es = Object.defineProperty,
    el = k(''.slice),
    ef = k(''.replace),
    ep = k([].join),
    ed =
      E &&
      !S(function () {
        return 8 !== es(function () {}, 'length', { value: 8 }).length;
      }),
    eh = String(String).split('String'),
    ev = (tQ = function (t, e, r) {
      'Symbol(' === el(ec(e), 0, 7) && (e = '[' + ef(ec(e), /^Symbol\(([^)]*)\)/, '$1') + ']'),
        r && r.getter && (e = 'get ' + e),
        r && r.setter && (e = 'set ' + e),
        (!tL(t, 'name') || (t2 && t.name !== e)) && (E ? es(t, 'name', { value: e, configurable: !0 }) : (t.name = e)),
        ed && r && tL(r, 'arity') && t.length !== r.arity && es(t, 'length', { value: r.arity });
      try {
        r && tL(r, 'constructor') && r.constructor
          ? E && es(t, 'prototype', { writable: !1 })
          : t.prototype && (t.prototype = void 0);
      } catch (t) {}
      var n = ea(t);
      return tL(n, 'source') || (n.source = ep(eh, 'string' == typeof e ? e : '')), t;
    });
  (Function.prototype.toString = ev(function () {
    return (W(this) && eu(this).source) || t3(this);
  }, 'toString')),
    (tX = function (t, e, r, n) {
      n || (n = {});
      var i = n.enumerable,
        a = void 0 !== n.name ? n.name : e;
      if ((W(r) && tQ(r, a, n), n.global)) i ? (t[e] = r) : tw(e, r);
      else {
        try {
          n.unsafe ? t[e] && (i = !0) : delete t[e];
        } catch (t) {}
        i
          ? (t[e] = r)
          : o(t, e, { value: r, enumerable: !1, configurable: !n.nonConfigurable, writable: !n.nonWritable });
      }
      return t;
    });
  var ey = {},
    em = {},
    eg = {},
    eb = {},
    ew = {},
    eE = {},
    eS = Math.ceil,
    eL = Math.floor;
  (eE =
    Math.trunc ||
    function (t) {
      var e = +t;
      return (e > 0 ? eL : eS)(e);
    }),
    (ew = function (t) {
      var e = +t;
      return e != e || 0 === e ? 0 : eE(e);
    });
  var eT = Math.max,
    ej = Math.min;
  eb = function (t, e) {
    var r = ew(t);
    return r < 0 ? eT(r + e, 0) : ej(r, e);
  };
  var eO = {},
    ex = {},
    eI = Math.min;
  (ex = function (t) {
    return t > 0 ? eI(ew(t), 9007199254740991) : 0;
  }),
    (eO = function (t) {
      return ex(t.length);
    });
  var eP = function (t) {
      return function (e, r, n) {
        var o,
          i = P(e),
          a = eO(i),
          u = eb(n, a);
        if (t && r != r) {
          for (; a > u; ) if ((o = i[u++]) != o) return !0;
        } else for (; a > u; u++) if ((t || u in i) && i[u] === r) return t || u || 0;
        return !t && -1;
      };
    },
    e_ = { includes: eP(!0), indexOf: eP(!1) }.indexOf,
    ek = k([].push);
  eg = function (t, e) {
    var r,
      n = P(t),
      o = 0,
      i = [];
    for (r in n) !tL(et, r) && tL(n, r) && ek(i, r);
    for (; e.length > o; ) tL(n, (r = e[o++])) && (~e_(i, r) || ek(i, r));
    return i;
  };
  var eM = [
    'constructor',
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toLocaleString',
    'toString',
    'valueOf',
  ].concat('length', 'prototype');
  (c =
    Object.getOwnPropertyNames ||
    function (t) {
      return eg(t, eM);
    }),
    (s = Object.getOwnPropertySymbols);
  var eC = k([].concat);
  (em =
    X('Reflect', 'ownKeys') ||
    function (t) {
      var e = c(tR(t));
      return s ? eC(e, s(t)) : e;
    }),
    (ey = function (e, r, n) {
      for (var i = em(r), a = 0; a < i.length; a++) {
        var u = i[a];
        tL(e, u) || (n && tL(n, u)) || o(e, u, t(r, u));
      }
    });
  var eD = {},
    eF = /#|\.prototype\./,
    eB = function (t, e) {
      var r = eq[eN(t)];
      return r == eG || (r != eA && (W(e) ? S(e) : !!e));
    },
    eN = (eB.normalize = function (t) {
      return String(t).replace(eF, '.').toLowerCase();
    }),
    eq = (eB.data = {}),
    eA = (eB.NATIVE = 'N'),
    eG = (eB.POLYFILL = 'P');
  (eD = eB),
    (g = function (e, r) {
      var n,
        o,
        i,
        a,
        u,
        c = e.target,
        s = e.global,
        l = e.stat;
      if ((n = s ? b : l ? b[c] || tw(c, {}) : (b[c] || {}).prototype))
        for (o in r) {
          if (
            ((a = r[o]),
            (i = e.dontCallGetSet ? (u = t(n, o)) && u.value : n[o]),
            !eD(s ? o : c + (l ? '.' : '#') + o, e.forced) && void 0 !== i)
          ) {
            if (typeof a == typeof i) continue;
            ey(a, i);
          }
          (e.sham || (i && i.sham)) && t$(a, 'sham', !0), tX(n, o, a, e);
        }
    });
  var e$ = {},
    ez = {},
    eR = Function.prototype,
    eH = eR.apply,
    eY = eR.call;
  ez =
    ('object' == typeof Reflect && Reflect.apply) ||
    (T
      ? eY.bind(eH)
      : function () {
          return eY.apply(eH, arguments);
        });
  var eW = {},
    eZ = {},
    eJ = (eZ = function (t) {
      if ('Function' === F(t)) return k(t);
    })(eZ.bind);
  eW = function (t, e) {
    return (
      tf(t),
      void 0 === e
        ? t
        : T
        ? eJ(t, e)
        : function () {
            return t.apply(e, arguments);
          }
    );
  };
  var eU = {};
  eU = X('document', 'documentElement');
  var eV = {};
  eV = k([].slice);
  var eK = {},
    eX = TypeError;
  eK = function (t, e) {
    if (t < e) throw eX('Not enough arguments');
    return t;
  };
  var eQ = {};
  eQ = /(?:ipad|iphone|ipod).*applewebkit/i.test(tn);
  var e0 = {},
    e1 = {},
    e2 = (e1 = {});
  function e3() {
    throw Error('setTimeout has not been defined');
  }
  function e7() {
    throw Error('clearTimeout has not been defined');
  }
  function e4(t) {
    if (l === setTimeout) return setTimeout(t, 0);
    if ((l === e3 || !l) && setTimeout) return (l = setTimeout), setTimeout(t, 0);
    try {
      return l(t, 0);
    } catch (e) {
      try {
        return l.call(null, t, 0);
      } catch (e) {
        return l.call(this, t, 0);
      }
    }
  }
  !(function () {
    try {
      l = 'function' == typeof setTimeout ? setTimeout : e3;
    } catch (t) {
      l = e3;
    }
    try {
      f = 'function' == typeof clearTimeout ? clearTimeout : e7;
    } catch (t) {
      f = e7;
    }
  })();
  var e8 = [],
    e9 = !1,
    e5 = -1;
  function e6() {
    e9 && p && ((e9 = !1), p.length ? (e8 = p.concat(e8)) : (e5 = -1), e8.length && rt());
  }
  function rt() {
    if (!e9) {
      var t = e4(e6);
      e9 = !0;
      for (var e = e8.length; e; ) {
        for (p = e8, e8 = []; ++e5 < e; ) p && p[e5].run();
        (e5 = -1), (e = e8.length);
      }
      (p = null),
        (e9 = !1),
        (function (t) {
          if (f === clearTimeout) return clearTimeout(t);
          if ((f === e7 || !f) && clearTimeout) return (f = clearTimeout), clearTimeout(t);
          try {
            f(t);
          } catch (e) {
            try {
              return f.call(null, t);
            } catch (e) {
              return f.call(this, t);
            }
          }
        })(t);
    }
  }
  function re(t, e) {
    (this.fun = t), (this.array = e);
  }
  function rr() {}
  (e2.nextTick = function (t) {
    var e = Array(arguments.length - 1);
    if (arguments.length > 1) for (var r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
    e8.push(new re(t, e)), 1 !== e8.length || e9 || e4(rt);
  }),
    (re.prototype.run = function () {
      this.fun.apply(null, this.array);
    }),
    (e2.title = 'browser'),
    (e2.browser = !0),
    (e2.env = {}),
    (e2.argv = []),
    (e2.version = ''),
    (e2.versions = {}),
    (e2.on = rr),
    (e2.addListener = rr),
    (e2.once = rr),
    (e2.off = rr),
    (e2.removeListener = rr),
    (e2.removeAllListeners = rr),
    (e2.emit = rr),
    (e2.prependListener = rr),
    (e2.prependOnceListener = rr),
    (e2.listeners = function (t) {
      return [];
    }),
    (e2.binding = function (t) {
      throw Error('process.binding is not supported');
    }),
    (e2.cwd = function () {
      return '/';
    }),
    (e2.chdir = function (t) {
      throw Error('process.chdir is not supported');
    }),
    (e2.umask = function () {
      return 0;
    }),
    (e0 = void 0 !== e1 && 'process' == F(e1));
  var rn = b.setImmediate,
    ro = b.clearImmediate,
    ri = b.process,
    ra = b.Dispatch,
    ru = b.Function,
    rc = b.MessageChannel,
    rs = b.String,
    rl = 0,
    rf = {},
    rp = 'onreadystatechange';
  S(function () {
    d = b.location;
  });
  var rd = function (t) {
      if (tL(rf, t)) {
        var e = rf[t];
        delete rf[t], e();
      }
    },
    rh = function (t) {
      return function () {
        rd(t);
      };
    },
    rv = function (t) {
      rd(t.data);
    },
    ry = function (t) {
      b.postMessage(rs(t), d.protocol + '//' + d.host);
    };
  (rn && ro) ||
    ((rn = function (t) {
      eK(arguments.length, 1);
      var e = W(t) ? t : ru(t),
        r = eV(arguments, 1);
      return (
        (rf[++rl] = function () {
          ez(e, void 0, r);
        }),
        h(rl),
        rl
      );
    }),
    (ro = function (t) {
      delete rf[t];
    }),
    e0
      ? (h = function (t) {
          ri.nextTick(rh(t));
        })
      : ra && ra.now
      ? (h = function (t) {
          ra.now(rh(t));
        })
      : rc && !eQ
      ? ((y = (v = new rc()).port2), (v.port1.onmessage = rv), (h = eW(y.postMessage, y)))
      : b.addEventListener && W(b.postMessage) && !b.importScripts && d && 'file:' !== d.protocol && !S(ry)
      ? ((h = ry), b.addEventListener('message', rv, !1))
      : (h =
          rp in tN('script')
            ? function (t) {
                eU.appendChild(tN('script'))[rp] = function () {
                  eU.removeChild(this), rd(t);
                };
              }
            : function (t) {
                setTimeout(rh(t), 0);
              }));
  var rm = (e$ = { set: rn, clear: ro }).clear;
  g({ global: !0, bind: !0, enumerable: !0, forced: b.clearImmediate !== rm }, { clearImmediate: rm });
  ('use strict');
  var rg = e$.set,
    rb = {},
    rw = {};
  rw = 'function' == typeof Bun && Bun && 'string' == typeof Bun.version;
  var rE = b.Function,
    rS =
      /MSIE .\./.test(tn) ||
      (rw &&
        (function () {
          var t = b.Bun.version.split('.');
          return t.length < 3 || (0 == t[0] && (t[1] < 3 || (3 == t[1] && 0 == t[2])));
        })());
  rb = function (t, e) {
    var r = e ? 2 : 1;
    return rS
      ? function (n, o) {
          var i = eK(arguments.length, 1) > r,
            a = W(n) ? n : rE(n),
            u = i ? eV(arguments, r) : [],
            c = i
              ? function () {
                  ez(a, this, u);
                }
              : a;
          return e ? t(c, o) : t(c);
        }
      : t;
  };
  var rL = b.setImmediate ? rb(rg, !1) : rg;
  g({ global: !0, bind: !0, enumerable: !0, forced: b.setImmediate !== rL }, { setImmediate: rL });
  var rT = (function (t) {
    'use strict';
    var e,
      r = Object.prototype,
      n = r.hasOwnProperty,
      o =
        Object.defineProperty ||
        function (t, e, r) {
          t[e] = r.value;
        },
      i = 'function' == typeof Symbol ? Symbol : {},
      a = i.iterator || '@@iterator',
      u = i.asyncIterator || '@@asyncIterator',
      c = i.toStringTag || '@@toStringTag';
    function s(t, e, r) {
      return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e];
    }
    try {
      s({}, '');
    } catch (t) {
      s = function (t, e, r) {
        return (t[e] = r);
      };
    }
    function l(t, r, n, i) {
      var a,
        u,
        c = Object.create((r && r.prototype instanceof y ? r : y).prototype);
      return (
        o(c, '_invoke', {
          value:
            ((a = new x(i || [])),
            (u = p),
            function (r, o) {
              if (u === d) throw Error('Generator is already running');
              if (u === h) {
                if ('throw' === r) throw o;
                return P();
              }
              for (a.method = r, a.arg = o; ; ) {
                var i = a.delegate;
                if (i) {
                  var c = (function t(r, n) {
                    var o = n.method,
                      i = r.iterator[o];
                    if (i === e)
                      return (
                        (n.delegate = null),
                        ('throw' === o &&
                          r.iterator.return &&
                          ((n.method = 'return'), (n.arg = e), t(r, n), 'throw' === n.method)) ||
                          ('return' !== o &&
                            ((n.method = 'throw'),
                            (n.arg = TypeError("The iterator does not provide a '" + o + "' method")))),
                        v
                      );
                    var a = f(i, r.iterator, n.arg);
                    if ('throw' === a.type) return (n.method = 'throw'), (n.arg = a.arg), (n.delegate = null), v;
                    var u = a.arg;
                    return u
                      ? u.done
                        ? ((n[r.resultName] = u.value),
                          (n.next = r.nextLoc),
                          'return' !== n.method && ((n.method = 'next'), (n.arg = e)),
                          (n.delegate = null),
                          v)
                        : u
                      : ((n.method = 'throw'),
                        (n.arg = TypeError('iterator result is not an object')),
                        (n.delegate = null),
                        v);
                  })(i, a);
                  if (c) {
                    if (c === v) continue;
                    return c;
                  }
                }
                if ('next' === a.method) a.sent = a._sent = a.arg;
                else if ('throw' === a.method) {
                  if (u === p) throw ((u = h), a.arg);
                  a.dispatchException(a.arg);
                } else 'return' === a.method && a.abrupt('return', a.arg);
                u = d;
                var s = f(t, n, a);
                if ('normal' === s.type) {
                  if (((u = a.done ? h : 'suspendedYield'), s.arg === v)) continue;
                  return { value: s.arg, done: a.done };
                }
                'throw' === s.type && ((u = h), (a.method = 'throw'), (a.arg = s.arg));
              }
            }),
        }),
        c
      );
    }
    function f(t, e, r) {
      try {
        return { type: 'normal', arg: t.call(e, r) };
      } catch (t) {
        return { type: 'throw', arg: t };
      }
    }
    t.wrap = l;
    var p = 'suspendedStart',
      d = 'executing',
      h = 'completed',
      v = {};
    function y() {}
    function m() {}
    function g() {}
    var b = {};
    s(b, a, function () {
      return this;
    });
    var w = Object.getPrototypeOf,
      E = w && w(w(I([])));
    E && E !== r && n.call(E, a) && (b = E);
    var S = (g.prototype = y.prototype = Object.create(b));
    function L(t) {
      ['next', 'throw', 'return'].forEach(function (e) {
        s(t, e, function (t) {
          return this._invoke(e, t);
        });
      });
    }
    function T(t, e) {
      var r;
      o(this, '_invoke', {
        value: function (o, i) {
          function a() {
            return new e(function (r, a) {
              !(function r(o, i, a, u) {
                var c = f(t[o], t, i);
                if ('throw' === c.type) u(c.arg);
                else {
                  var s = c.arg,
                    l = s.value;
                  return l && 'object' == typeof l && n.call(l, '__await')
                    ? e.resolve(l.__await).then(
                        function (t) {
                          r('next', t, a, u);
                        },
                        function (t) {
                          r('throw', t, a, u);
                        }
                      )
                    : e.resolve(l).then(
                        function (t) {
                          (s.value = t), a(s);
                        },
                        function (t) {
                          return r('throw', t, a, u);
                        }
                      );
                }
              })(o, i, r, a);
            });
          }
          return (r = r ? r.then(a, a) : a());
        },
      });
    }
    function j(t) {
      var e = { tryLoc: t[0] };
      1 in t && (e.catchLoc = t[1]), 2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])), this.tryEntries.push(e);
    }
    function O(t) {
      var e = t.completion || {};
      (e.type = 'normal'), delete e.arg, (t.completion = e);
    }
    function x(t) {
      (this.tryEntries = [{ tryLoc: 'root' }]), t.forEach(j, this), this.reset(!0);
    }
    function I(t) {
      if (t) {
        var r = t[a];
        if (r) return r.call(t);
        if ('function' == typeof t.next) return t;
        if (!isNaN(t.length)) {
          var o = -1,
            i = function r() {
              for (; ++o < t.length; ) if (n.call(t, o)) return (r.value = t[o]), (r.done = !1), r;
              return (r.value = e), (r.done = !0), r;
            };
          return (i.next = i);
        }
      }
      return { next: P };
    }
    function P() {
      return { value: e, done: !0 };
    }
    return (
      (m.prototype = g),
      o(S, 'constructor', { value: g, configurable: !0 }),
      o(g, 'constructor', { value: m, configurable: !0 }),
      (m.displayName = s(g, c, 'GeneratorFunction')),
      (t.isGeneratorFunction = function (t) {
        var e = 'function' == typeof t && t.constructor;
        return !!e && (e === m || 'GeneratorFunction' === (e.displayName || e.name));
      }),
      (t.mark = function (t) {
        return (
          Object.setPrototypeOf ? Object.setPrototypeOf(t, g) : ((t.__proto__ = g), s(t, c, 'GeneratorFunction')),
          (t.prototype = Object.create(S)),
          t
        );
      }),
      (t.awrap = function (t) {
        return { __await: t };
      }),
      L(T.prototype),
      s(T.prototype, u, function () {
        return this;
      }),
      (t.AsyncIterator = T),
      (t.async = function (e, r, n, o, i) {
        void 0 === i && (i = Promise);
        var a = new T(l(e, r, n, o), i);
        return t.isGeneratorFunction(r)
          ? a
          : a.next().then(function (t) {
              return t.done ? t.value : a.next();
            });
      }),
      L(S),
      s(S, c, 'Generator'),
      s(S, a, function () {
        return this;
      }),
      s(S, 'toString', function () {
        return '[object Generator]';
      }),
      (t.keys = function (t) {
        var e = Object(t),
          r = [];
        for (var n in e) r.push(n);
        return (
          r.reverse(),
          function t() {
            for (; r.length; ) {
              var n = r.pop();
              if (n in e) return (t.value = n), (t.done = !1), t;
            }
            return (t.done = !0), t;
          }
        );
      }),
      (t.values = I),
      (x.prototype = {
        constructor: x,
        reset: function (t) {
          if (
            ((this.prev = 0),
            (this.next = 0),
            (this.sent = this._sent = e),
            (this.done = !1),
            (this.delegate = null),
            (this.method = 'next'),
            (this.arg = e),
            this.tryEntries.forEach(O),
            !t)
          )
            for (var r in this) 't' === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = e);
        },
        stop: function () {
          this.done = !0;
          var t = this.tryEntries[0].completion;
          if ('throw' === t.type) throw t.arg;
          return this.rval;
        },
        dispatchException: function (t) {
          if (this.done) throw t;
          var r = this;
          function o(n, o) {
            return (u.type = 'throw'), (u.arg = t), (r.next = n), o && ((r.method = 'next'), (r.arg = e)), !!o;
          }
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var a = this.tryEntries[i],
              u = a.completion;
            if ('root' === a.tryLoc) return o('end');
            if (a.tryLoc <= this.prev) {
              var c = n.call(a, 'catchLoc'),
                s = n.call(a, 'finallyLoc');
              if (c && s) {
                if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
              } else if (c) {
                if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
              } else if (s) {
                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
              } else throw Error('try statement without catch or finally');
            }
          }
        },
        abrupt: function (t, e) {
          for (var r = this.tryEntries.length - 1; r >= 0; --r) {
            var o = this.tryEntries[r];
            if (o.tryLoc <= this.prev && n.call(o, 'finallyLoc') && this.prev < o.finallyLoc) {
              var i = o;
              break;
            }
          }
          i && ('break' === t || 'continue' === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
          var a = i ? i.completion : {};
          return ((a.type = t), (a.arg = e), i)
            ? ((this.method = 'next'), (this.next = i.finallyLoc), v)
            : this.complete(a);
        },
        complete: function (t, e) {
          if ('throw' === t.type) throw t.arg;
          return (
            'break' === t.type || 'continue' === t.type
              ? (this.next = t.arg)
              : 'return' === t.type
              ? ((this.rval = this.arg = t.arg), (this.method = 'return'), (this.next = 'end'))
              : 'normal' === t.type && e && (this.next = e),
            v
          );
        },
        finish: function (t) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var r = this.tryEntries[e];
            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), O(r), v;
          }
        },
        catch: function (t) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var r = this.tryEntries[e];
            if (r.tryLoc === t) {
              var n = r.completion;
              if ('throw' === n.type) {
                var o = n.arg;
                O(r);
              }
              return o;
            }
          }
          throw Error('illegal catch attempt');
        },
        delegateYield: function (t, r, n) {
          return (
            (this.delegate = { iterator: I(t), resultName: r, nextLoc: n }), 'next' === this.method && (this.arg = e), v
          );
        },
      }),
      t
    );
  })({});
  try {
    regeneratorRuntime = rT;
  } catch (t) {
    'object' == typeof globalThis ? (globalThis.regeneratorRuntime = rT) : Function('r', 'regeneratorRuntime = r')(rT);
  }
  let rj = () => {
      let t = document.querySelector('.alert');
      t && t.parentElement.removeChild(t);
    },
    rO = (t, e) => {
      rj();
      let r = `<div class="alert alert--${t}">${e}</div>`;
      document.querySelector('body').insertAdjacentHTML('afterbegin', r), window.setTimeout(rj, 5e3);
    },
    rx = async (t, e) => {
      try {
        let r = await axios({
          method: 'POST',
          url: 'http://127.0.0.1:8000/api/v1/users/login',
          data: { email: t, password: e },
        });
        'success' === r.data.status &&
          (rO('success', 'Logged in successfully!'),
          window.setTimeout(() => {
            location.assign('/');
          }, 2e3));
      } catch (t) {
        rO('error', t.response.data.message);
      }
    },
    rI = async () => {
      try {
        let t = await axios({ method: 'GET', url: '/api/v1/users/logout' });
        'success' === t.data.status &&
          window.setTimeout(() => {
            location.assign('/');
          }, 1e3);
      } catch (t) {
        console.log(t.response), rO('error', 'Error logging out! Try again.');
      }
    },
    rP = async (t, e) => {
      try {
        let r = await axios({
          method: 'PATCH',
          url: 'password' === e ? '/api/v1/users/updateMyPassword' : '/api/v1/users/updateMe',
          data: t,
        });
        if ('success' === r.data.status && (rO('success', `${e.toUpperCase()} updated successfully!`), 'photo' === e))
          return r.data.data.user.photo;
      } catch (t) {
        rO('error', t.response.data.message);
      }
    },
    r_ = async (t) => {
      try {
        let e = await axios(`/api/v1/bookings/checkout-session/${t}`);
        console.log(e), window.location.replace(e.data.session.url);
      } catch (t) {
        console.log(t), rO('error', t);
      }
    },
    rk = document.getElementById('map'),
    rM = document.querySelector('.form--login'),
    rC = document.querySelector('.nav__el--logout'),
    rD = document.querySelector('.form-user-data'),
    rF = document.querySelector('.form__upload'),
    rB = document.querySelector('.form-user-password'),
    rN = document.getElementById('book-tour');
  if (rk) {
    let t = JSON.parse(rk.dataset.locations);
    ((t) => {
      mapboxgl.accessToken =
        'pk.eyJ1Ijoiam9uYXNzY2htZWR0bWFubiIsImEiOiJjam54ZmM5N3gwNjAzM3dtZDNxYTVlMnd2In0.ytpI7V7w7cyT1Kq5rT9Z1A';
      var e = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/jonasschmedtmann/cjvi9q8jd04mi1cpgmg7ev3dy',
        scrollZoom: !1,
      });
      let r = new mapboxgl.LngLatBounds();
      t.forEach((t) => {
        let n = document.createElement('div');
        (n.className = 'marker'),
          new mapboxgl.Marker({ element: n, anchor: 'bottom' }).setLngLat(t.coordinates).addTo(e),
          new mapboxgl.Popup({ offset: 30 })
            .setLngLat(t.coordinates)
            .setHTML(`<p>Day ${t.day}: ${t.description}</p>`)
            .addTo(e),
          r.extend(t.coordinates);
      }),
        e.fitBounds(r, { padding: { top: 200, bottom: 150, left: 100, right: 100 } });
    })(t);
  }
  rM &&
    rM.addEventListener('submit', (t) => {
      t.preventDefault();
      let e = document.getElementById('email').value,
        r = document.getElementById('password').value;
      rx(e, r);
    }),
    rC && rC.addEventListener('click', rI),
    rD &&
      rD.addEventListener('submit', async (t) => {
        t.preventDefault(), (document.querySelector('.btn--save-settings').textContent = 'Updating...');
        let e = new FormData();
        e.append('name', document.getElementById('name').value),
          e.append('email', document.getElementById('email').value),
          await rP(e, 'data'),
          (document.querySelector('.btn--save-settings').textContent = 'Save settings');
      }),
    rF &&
      rF.addEventListener('change', async (t) => {
        t.preventDefault();
        let e = new FormData();
        e.append('photo', document.getElementById('photo').files[0]);
        let r = await rP(e, 'photo');
        r &&
          (document.querySelector('.nav__user-img').setAttribute('src', `/img/users/${r}`),
          document.querySelector('.form__user-photo').setAttribute('src', `/img/users/${r}`));
      }),
    rB &&
      rB.addEventListener('submit', async (t) => {
        t.preventDefault(), (document.querySelector('.btn--save-password').textContent = 'Updating...');
        let e = document.getElementById('password-current').value,
          r = document.getElementById('password').value,
          n = document.getElementById('password-confirm').value;
        await rP({ passwordCurrent: e, password: r, passwordConfirm: n }, 'password'),
          (document.querySelector('.btn--save-password').textContent = 'Save password'),
          (document.getElementById('password-current').value = ''),
          (document.getElementById('password').value = ''),
          (document.getElementById('password-confirm').value = '');
      }),
    rN &&
      rN.addEventListener('click', (t) => {
        t.target.textContent = 'Processing...';
        let { tourId: e } = t.target.dataset;
        r_(e);
      });
})();
//# sourceMappingURL=index.js.map
