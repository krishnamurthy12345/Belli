"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("motion/react");
var lucide_react_1 = require("lucide-react");
var link_1 = require("next/link");
var navigation_1 = require("next/navigation");
var navItems = [
    {
        label: "Home",
        href: "/"
    },
    {
        label: "About",
        href: "/about"
    },
    {
        label: "Contact",
        href: "/contact"
    },
];
function Navbar() {
    var _a = react_1.useState(false), mobileOpen = _a[0], setMobileOpen = _a[1];
    var _b = react_1.useState(false), scrolled = _b[0], setScrolled = _b[1];
    var pathname = navigation_1.usePathname();
    react_1.useEffect(function () {
        var handleScroll = function () {
            setScrolled(window.scrollY > 20);
        };
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return function () { return window.removeEventListener("scroll", handleScroll); };
    }, []);
    // Close mobile menu when pathname changes
    react_1.useEffect(function () {
        setMobileOpen(false);
    }, [pathname]);
    return (React.createElement("header", { className: "\n        fixed\n        left-0\n        right-0\n        top-0\n        z-50\n        transition-all\n        duration-300\n        " + (scrolled
            ? "border-b border-white/10 bg-[var(--color-secondary)] py-3 shadow-xl shadow-black/20 backdrop-blur-xl"
            : "border-b border-white/5 bg-[var(--color-secondary)] py-4 backdrop-blur-md") + "\n      " },
        React.createElement("div", { className: "\n          mx-auto\n          flex\n          max-w-7xl\n          items-center\n          justify-between\n          px-6\n          sm:px-10\n          lg:px-16\n        " },
            React.createElement(link_1["default"], { href: "/", className: "group flex items-center gap-3.5", "aria-label": "Bellis Capital Home" },
                React.createElement("div", { className: "\n              relative\n              flex\n              h-11\n              w-11\n              items-center\n              justify-center\n              overflow-hidden\n              rounded-xl\n              border\n              border-[#EF1454]/30\n              bg-white\n              p-1\n              shadow-[0_4px_20px_rgba(0,0,0,0.25)]\n              transition-all\n              duration-300\n              group-hover:scale-105\n              group-hover:border-[#EF1454]/70\n            " },
                    React.createElement("img", { src: "/images/bellis-logo.jpeg", alt: "Bellis Capital Logo", className: "h-full w-full object-contain" })),
                React.createElement("div", null,
                    React.createElement("div", { className: "\n                text-base\n                font-bold\n                tracking-tight\n                text-white\n                transition-colors\n                duration-300\n                group-hover:text-[#EF1454]\n                sm:text-lg\n              " },
                        "BELLIS",
                        " ",
                        React.createElement("span", { className: "text-[#EF1454]" }, "CAPITAL")),
                    React.createElement("div", { className: "\n                text-[9px]\n                font-bold\n                uppercase\n                tracking-[0.22em]\n                text-[var(--color-primary)]\n              " }, "Wealth and Health"))),
            React.createElement("nav", { className: "hidden items-center gap-1 md:flex" }, navItems.map(function (item) {
                var active = pathname === item.href;
                return (React.createElement(link_1["default"], { key: item.href, href: item.href, className: "\n                  relative\n                  rounded-full\n                  px-5\n                  py-2\n                  text-sm\n                  font-semibold\n                  transition-all\n                  duration-300\n                  " + (active
                        ? "bg-white/10 text-white shadow-inner"
                        : "text-white/80 hover:bg-white/5 hover:text-white") + "\n                " },
                    item.label,
                    active && (React.createElement(react_2.motion.span, { layoutId: "navbar-active-indicator", className: "absolute bottom-1 left-5 right-5 h-[2px] rounded-full bg-[#EF1454]", transition: { type: "spring", stiffness: 380, damping: 30 } }))));
            })),
            React.createElement("div", { className: "hidden items-center gap-4 md:flex" },
                React.createElement(link_1["default"], { href: "/contact#contact-details", className: "\n              group\n              inline-flex\n              items-center\n              gap-2\n              rounded-full\n              bg-[#EF1454]\n              px-5\n              py-2.5\n              text-xs\n              font-bold\n              uppercase\n              tracking-[0.12em]\n              text-white\n              shadow-lg\n              shadow-[#EF1454]/25\n              transition-all\n              duration-300\n              hover:-translate-y-0.5\n              hover:bg-[#FF477A]\n              hover:shadow-[#EF1454]/40\n            " },
                    React.createElement("span", null, "Get Started"),
                    React.createElement(lucide_react_1.ArrowRight, { size: 14, className: "transition-transform duration-300 group-hover:translate-x-1" }))),
            React.createElement("button", { type: "button", onClick: function () { return setMobileOpen(function (prev) { return !prev; }); }, "aria-label": mobileOpen ? "Close navigation menu" : "Open navigation menu", "aria-expanded": mobileOpen, className: "\n            flex\n            h-11\n            w-11\n            items-center\n            justify-center\n            rounded-xl\n            border\n            border-white/10\n            bg-white/5\n            text-white\n            transition-all\n            duration-300\n            hover:bg-white/10\n            md:hidden\n          " }, mobileOpen ? (React.createElement(lucide_react_1.X, { size: 22, className: "text-[#EF1454]" })) : (React.createElement(lucide_react_1.Menu, { size: 22 })))),
        React.createElement(react_2.AnimatePresence, null, mobileOpen && (React.createElement(react_2.motion.div, { initial: { opacity: 0, height: 0 }, animate: { opacity: 1, height: "auto" }, exit: { opacity: 0, height: 0 }, transition: { duration: 0.25, ease: "easeInOut" }, className: "\n              overflow-hidden\n              border-b\n              border-white/10\n              bg-[#0B1D31]/98\n              px-6\n              pb-6\n              pt-2\n              backdrop-blur-2xl\n              md:hidden\n            " },
            React.createElement("div", { className: "space-y-2 pt-2" }, navItems.map(function (item) {
                var active = pathname === item.href;
                return (React.createElement(link_1["default"], { key: item.href, href: item.href, onClick: function () { return setMobileOpen(false); }, className: "\n                      flex\n                      h-12\n                      w-full\n                      items-center\n                      justify-between\n                      rounded-xl\n                      px-4\n                      text-sm\n                      font-semibold\n                      transition-all\n                      duration-300\n                      " + (active
                        ? "bg-[#EF1454]/15 text-[#EF1454]"
                        : "text-white/80 hover:bg-white/5 hover:text-white") + "\n                    " },
                    React.createElement("span", null, item.label),
                    React.createElement(lucide_react_1.ArrowRight, { size: 16, className: active ? "text-[#EF1454]" : "text-white/30" })));
            })),
            React.createElement("div", { className: "my-4 h-px bg-white/10" }),
            React.createElement(link_1["default"], { href: "/contact#contact-details", onClick: function () { return setMobileOpen(false); }, className: "\n                flex\n                h-12\n                w-full\n                items-center\n                justify-center\n                gap-2\n                rounded-xl\n                bg-[#EF1454]\n                text-sm\n                font-bold\n                text-white\n                shadow-lg\n                shadow-[#EF1454]/30\n                transition-all\n                duration-300\n                hover:bg-[#FF477A]\n              " },
                React.createElement("span", null, "Get Started"),
                React.createElement(lucide_react_1.ArrowRight, { size: 16 })))))));
}
exports["default"] = Navbar;
