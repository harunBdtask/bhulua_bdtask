!(function (n, e, o) {
    "use strict";
    var s = o("html"),
            l = o("body");
    o(n).on("load", function () {
        o("html").data("textdirection"),
                setTimeout(function () {
                    s.removeClass("loading").addClass("loaded");
                }, 1200),
                o.app.menu.init(!1);
        !1 === o.app.nav.initialized && o.app.nav.init({speed: 300}),
                Unison.on("change", function (e) {
                    o.app.menu.change();
                }),
                o('[data-toggle="tooltip"]').tooltip({container: "body"}),
                0 < o(".navbar-hide-on-scroll").length &&
                (o(".navbar-hide-on-scroll.fixed-top").headroom({offset: 205, tolerance: 5, classes: {initial: "headroom", pinned: "headroom--pinned-top", unpinned: "headroom--unpinned-top"}}),
                        o(".navbar-hide-on-scroll.fixed-bottom").headroom({offset: 205, tolerance: 5, classes: {initial: "headroom", pinned: "headroom--pinned-bottom", unpinned: "headroom--unpinned-bottom"}})),
                setTimeout(function () {
                    var e;
                    o("body").hasClass("vertical-content-menu") && ((e = o(".main-menu").height()), o(".content-body").height() < e && o(".content-body").css("height", e));
                }, 500),
                o('a[data-action="collapse"]').on("click", function (e) {
            e.preventDefault(), o(this).closest(".card").children(".card-content").collapse("toggle"), o(this).closest(".card").find('[data-action="collapse"] i').toggleClass("ft-minus ft-plus");
        }),
                o('a[data-action="expand"]').on("click", function (e) {
            e.preventDefault(), o(this).closest(".card").find('[data-action="expand"] i').toggleClass("ft-maximize ft-minimize"), o(this).closest(".card").toggleClass("card-fullscreen");
        }),
                0 < o(".scrollable-container").length && o(".scrollable-container").perfectScrollbar({theme: "dark"}),
                o('a[data-action="reload"]').on("click", function () {
            o(this)
                    .closest(".card")
                    .block({message: '<div class="ft-refresh-cw icon-spin font-medium-2"></div>', timeout: 2e3, overlayCSS: {backgroundColor: "#FFF", cursor: "wait"}, css: {border: 0, padding: 0, backgroundColor: "none"}});
        }),
                o('a[data-action="close"]').on("click", function () {
            o(this).closest(".card").removeClass().slideUp("fast");
        }),
                setTimeout(function () {
                    o(".row.match-height").each(function () {
                        o(this).find(".card").not(".card .card").matchHeight();
                    });
                }, 500),
                o('.card .heading-elements a[data-action="collapse"]').on("click", function () {
            var e,
                    n = o(this).closest(".card");
            0 < parseInt(n[0].style.height, 10) ? ((e = n.css("height")), n.css("height", "").attr("data-height", e)) : n.data("height") && ((e = n.data("height")), n.css("height", e).attr("data-height", ""));
        });
        var e = l.data("menu");
        "vertical-compact-menu" != e &&
                "horizontal-menu" != e &&
                ("vertical-menu-modern" == l.data("menu")
                        ? "true" === localStorage.getItem("menuLocked") && o(".main-menu-content").find("li.active").parents("li").addClass("open")
                        : o(".main-menu-content").find("li.active").parents("li").addClass("open")),
                ("vertical-compact-menu" != e && "horizontal-menu" != e) || (o(".main-menu-content").find("li.active").parents("li:not(.nav-item)").addClass("open"), o(".main-menu-content").find("li.active").parents("li").addClass("active")),
                o(".heading-elements-toggle").on("click", function () {
            o(this).parent().children(".heading-elements").toggleClass("visible");
        });
        var n = o(".chartjs"),
                a = n.children("canvas").attr("height");
        if ((n.css("height", a), l.hasClass("boxed-layout") && (l.hasClass("vertical-overlay-menu") || l.hasClass("vertical-compact-menu")))) {
            var t = o(".main-menu").width(),
                    i = o(".app-content").position().left - t;
            l.hasClass("menu-flipped") ? o(".main-menu").css("right", i + "px") : o(".main-menu").css("left", i + "px");
        }
        o(".nav-link-search").on("click", function () {
            o(this);
            var e = o(this).siblings(".search-input");
            e.hasClass("open") ? e.removeClass("open") : e.addClass("open");
        });
    }),
            o(e).on("click", ".menu-toggle, .modern-nav-toggle", function (e) {
        return (
                e.preventDefault(),
                o.app.menu.toggle(),
                setTimeout(function () {
                    o(n).trigger("resize");
                }, 200),
                0 < o("#collapsed-sidebar").length &&
                setTimeout(function () {
                    l.hasClass("menu-expanded") || l.hasClass("menu-open") ? o("#collapsed-sidebar").prop("checked", !1) : o("#collapsed-sidebar").prop("checked", !0);
                }, 1e3),
                !1
                );
    }),
            o(e).on("click", ".open-navbar-container", function (e) {
        var n = Unison.fetch.now();
        o.app.menu.drillDownMenu(n.name);
    }),
            o(e).on("click", ".main-menu-footer .footer-toggle", function (e) {
        return e.preventDefault(), o(this).find("i").toggleClass("pe-is-i-angle-down pe-is-i-angle-up"), o(".main-menu-footer").toggleClass("footer-close footer-open"), !1;
    }),
            o(".navigation").find("li").has("ul").addClass("has-sub"),
            o(".carousel").carousel({interval: 2e3}),
            o(".nav-link-expand").on("click", function (e) {
        "undefined" != typeof screenfull && screenfull.enabled && screenfull.toggle();
    }),
            "undefined" != typeof screenfull &&
            screenfull.enabled &&
            o(e).on(screenfull.raw.fullscreenchange, function () {
        screenfull.isFullscreen ? o(".nav-link-expand").find("i").toggleClass("ft-minimize ft-maximize") : o(".nav-link-expand").find("i").toggleClass("ft-maximize ft-minimize");
    }),
            o(e).on("click", ".mega-dropdown-menu", function (e) {
        e.stopPropagation();
    }),
            o(e).ready(function () {
        o(".step-icon").each(function () {
            var e = o(this);
            0 < e.siblings("span.step").length && (e.siblings("span.step").empty(), o(this).appendTo(o(this).siblings("span.step")));
        });
    }),
            o(n).resize(function () {
        o.app.menu.manualScroller.updateHeight();
    }),
            o(".nav.nav-tabs a.dropdown-item").on("click", function () {
        var e = o(this),
                n = e.attr("href"),
                a = e.closest(".nav");
        a.find(".nav-link").removeClass("active"),
                e.closest(".nav-item").find(".nav-link").addClass("active"),
                e.closest(".dropdown-menu").find(".dropdown-item").removeClass("active"),
                e.addClass("active"),
                a.next().find(n).siblings(".tab-pane").removeClass("active in").attr("aria-expanded", !1),
                o(n).addClass("active in").attr("aria-expanded", "true");
    }),
            o("#sidebar-page-navigation").on("click", "a.nav-link", function (e) {
        e.preventDefault(), e.stopPropagation();
        var n = o(this),
                a = n.attr("href"),
                t = o(a).offset().top - 80;
        o("html, body").animate({scrollTop: t}, 0),
                setTimeout(function () {
                    n.parent(".nav-item").siblings(".nav-item").children(".nav-link").removeClass("active"), n.addClass("active");
                }, 100);
    });
})(window, document, jQuery);
