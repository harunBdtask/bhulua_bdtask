!(function (e, t, n) {
    function r(e, t, n) {
        e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent("on" + t, n);
    }
    function i(e) {
        if ("keypress" == e.type) {
            var t = String.fromCharCode(e.which);
            return e.shiftKey || (t = t.toLowerCase()), t;
        }
        return l[e.which] ? l[e.which] : u[e.which] ? u[e.which] : String.fromCharCode(e.which).toLowerCase();
    }
    function o(e) {
        return "shift" == e || "ctrl" == e || "alt" == e || "meta" == e;
    }
    function a(e, t) {
        var n,
                r = [],
                i = e;
        for ("+" === i ? (i = ["+"]) : (i = (i = i.replace(/\+{2}/g, "+plus")).split("+")), n = 0; n < i.length; ++n) {
            var a = i[n];
            f[a] && (a = f[a]), t && "keypress" != t && p[a] && ((a = p[a]), r.push("shift")), o(a) && r.push(a);
        }
        if (((i = a), !(n = t))) {
            if (!s)
                for (var c in ((s = {}), l))
                    (95 < c && 112 > c) || (l.hasOwnProperty(c) && (s[l[c]] = c));
            n = s[i] ? "keydown" : "keypress";
        }
        return "keypress" == n && r.length && (n = "keydown"), {key: a, modifiers: r, action: n};
    }
    function c(e) {
        function n(e) {
            e = e || {};
            var t,
                    n = !1;
            for (t in y)
                e[t] ? (n = !0) : (y[t] = 0);
            n || (v = !1);
        }
        function s(e, t, n, r, i, a) {
            var c,
                    s = [],
                    l = n.type;
            if (!h._callbacks[e])
                return [];
            for ("keyup" == l && o(e) && (t = [e]), c = 0; c < h._callbacks[e].length; ++c) {
                var u,
                        p = h._callbacks[e][c];
                if ((r || !p.seq || y[p.seq] == p.level) && l == p.action)
                    (u = "keypress" == l && !n.metaKey && !n.ctrlKey) || ((u = p.modifiers), (u = t.sort().join(",") === u.sort().join(","))),
                            u && ((u = r && p.seq == r && p.level == a), ((!r && p.combo == i) || u) && h._callbacks[e].splice(c, 1), s.push(p));
            }
            return s;
        }
        function l(e, t, n, r) {
            h.stopCallback(t, t.target || t.srcElement, n, r) || !1 !== e(t, n) || (t.preventDefault ? t.preventDefault() : (t.returnValue = !1), t.stopPropagation ? t.stopPropagation() : (t.cancelBubble = !0));
        }
        function u(e) {
            "number" != typeof e.which && (e.which = e.keyCode);
            var t = i(e);
            t &&
                    ("keyup" == e.type && m === t
                            ? (m = !1)
                            : h.handleKey(
                                    t,
                                    (function (e) {
                                        var t = [];
                                        return e.shiftKey && t.push("shift"), e.altKey && t.push("alt"), e.ctrlKey && t.push("ctrl"), e.metaKey && t.push("meta"), t;
                                    })(e),
                                    e
                                    ));
        }
        function p(e, t, r, o) {
            function c(t) {
                return function () {
                    (v = t), ++y[e], clearTimeout(d), (d = setTimeout(n, 1e3));
                };
            }
            function s(t) {
                l(r, t, e), "keyup" !== o && (m = i(t)), setTimeout(n, 10);
            }
            for (var u = (y[e] = 0); u < t.length; ++u) {
                var p = u + 1 === t.length ? s : c(o || a(t[u + 1]).action);
                f(t[u], p, o, e, u);
            }
        }
        function f(e, t, n, r, i) {
            h._directMap[e + ":" + n] = t;
            var o = (e = e.replace(/\s+/g, " ")).split(" ");
            1 < o.length
                    ? p(e, o, t, n)
                    : ((n = a(e, n)),
                            (h._callbacks[n.key] = h._callbacks[n.key] || []),
                            s(n.key, n.modifiers, {type: n.action}, r, e, i),
                            h._callbacks[n.key][r ? "unshift" : "push"]({callback: t, modifiers: n.modifiers, action: n.action, seq: r, level: i, combo: e}));
        }
        var h = this;
        if (((e = e || t), !(h instanceof c)))
            return new c(e);
        (h.target = e), (h._callbacks = {}), (h._directMap = {});
        var d,
                y = {},
                m = !1,
                k = !1,
                v = !1;
        (h._handleKey = function (e, t, r) {
            var i,
                    a = s(e, t, r);
            t = {};
            var c = 0,
                    u = !1;
            for (i = 0; i < a.length; ++i)
                a[i].seq && (c = Math.max(c, a[i].level));
            for (i = 0; i < a.length; ++i)
                a[i].seq ? a[i].level == c && ((u = !0), (t[a[i].seq] = 1), l(a[i].callback, r, a[i].combo, a[i].seq)) : u || l(a[i].callback, r, a[i].combo);
            (a = "keypress" == r.type && k), r.type != v || o(e) || a || n(t), (k = u && "keydown" == r.type);
        }),
                (h._bindMultiple = function (e, t, n) {
                    for (var r = 0; r < e.length; ++r)
                        f(e[r], t, n);
                }),
                r(e, "keypress", u),
                r(e, "keydown", u),
                r(e, "keyup", u);
    }
    if (e) {
        var s,
                l = {
                    8: "backspace",
                    9: "tab",
                    13: "enter",
                    16: "shift",
                    17: "ctrl",
                    18: "alt",
                    20: "capslock",
                    27: "esc",
                    32: "space",
                    33: "pageup",
                    34: "pagedown",
                    35: "end",
                    36: "home",
                    37: "left",
                    38: "up",
                    39: "right",
                    40: "down",
                    45: "ins",
                    46: "del",
                    91: "meta",
                    93: "meta",
                    224: "meta",
                },
                u = {106: "*", 107: "+", 109: "-", 110: ".", 111: "/", 186: ";", 187: "=", 188: ",", 189: "-", 190: ".", 191: "/", 192: "`", 219: "[", 220: "\\", 221: "]", 222: "'"},
                p = {"~": "`", "!": "1", "@": "2", "#": "3", $: "4", "%": "5", "^": "6", "&": "7", "*": "8", "(": "9", ")": "0", _: "-", "+": "=", ":": ";", '"': "'", "<": ",", ">": ".", "?": "/", "|": "\\"},
                f = {option: "alt", command: "meta", return: "enter", escape: "esc", plus: "+", mod: /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? "meta" : "ctrl"};
        for (n = 1; 20 > n; ++n)
            l[111 + n] = "f" + n;
        for (n = 0; 9 >= n; ++n)
            l[n + 96] = n.toString();
        (c.prototype.bind = function (e, t, n) {
            return (e = e instanceof Array ? e : [e]), this._bindMultiple.call(this, e, t, n), this;
        }),
                (c.prototype.unbind = function (e, t) {
                    return this.bind.call(this, e, function () {}, t);
                }),
                (c.prototype.trigger = function (e, t) {
                    return this._directMap[e + ":" + t] && this._directMap[e + ":" + t]({}, e), this;
                }),
                (c.prototype.reset = function () {
                    return (this._callbacks = {}), (this._directMap = {}), this;
                }),
                (c.prototype.stopCallback = function (e, n) {
                    return (
                            !(
                                    -1 < (" " + n.className + " ").indexOf(" mousetrap ") ||
                                    (function e(n, r) {
                                        return null !== n && n !== t && (n === r || e(n.parentNode, r));
                                    })(n, this.target)
                                    ) &&
                            ("INPUT" == n.tagName || "SELECT" == n.tagName || "TEXTAREA" == n.tagName || n.isContentEditable)
                            );
                }),
                (c.prototype.handleKey = function () {
                    return this._handleKey.apply(this, arguments);
                }),
                (c.addKeycodes = function (e) {
                    for (var t in e)
                        e.hasOwnProperty(t) && (l[t] = e[t]);
                    s = null;
                }),
                (c.init = function () {
                    var e,
                            n = c(t);
                    for (e in n)
                        "_" !== e.charAt(0) &&
                                (c[e] = (function (e) {
                                    return function () {
                                        return n[e].apply(n, arguments);
                                    };
                                })(e));
                }),
                c.init(),
                (e.Mousetrap = c),
                "undefined" != typeof module && module.exports && (module.exports = c),
                "function" == typeof define &&
                define.amd &&
                define(function () {
                    return c;
                });
    }
})("undefined" != typeof window ? window : null, "undefined" != typeof window ? document : null);