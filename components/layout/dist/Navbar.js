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
    var _a = react_1.useState(false), open = _a[0], setOpen = _a[1];
    var pathname = navigation_1.usePathname();
    return (React.createElement(React.Fragment, null,
        React.createElement(react_2.motion.button, { type: "button", onClick: function () { return setOpen(function (prev) { return !prev; }); }, "aria-label": open ? "Close navigation" : "Open navigation", "aria-expanded": open, initial: {
                opacity: 0,
                y: -20,
                scale: 0.9
            }, animate: {
                opacity: 1,
                y: 0,
                scale: 1
            }, transition: {
                duration: 0.5,
                delay: 0.2
            }, className: "\r\n          fixed\r\n          left-1/2\r\n          top-5\r\n          z-[100]\r\n          -translate-x-1/2\r\n\r\n          flex\r\n          items-center\r\n          justify-center\r\n\r\n          h-14\r\n          w-24\r\n\r\n          rounded-full\r\n          border\r\n          border-emerald-400/30\r\n          bg-[#10231C]/95\r\n\r\n          text-sm\r\n          font-semibold\r\n          tracking-wide\r\n          text-white\r\n\r\n          shadow-2xl\r\n          shadow-black/30\r\n\r\n          backdrop-blur-xl\r\n\r\n          transition-all\r\n          duration-300\r\n\r\n          hover:scale-105\r\n          hover:border-emerald-400/60\r\n          hover:bg-[#16382B]\r\n        " }, open ? (React.createElement(lucide_react_1.X, { size: 20, className: "text-emerald-400" })) : (React.createElement(lucide_react_1.ChevronDown, { size: 20, className: "text-emerald-400" }))),
        React.createElement(react_2.AnimatePresence, null, open && (React.createElement(react_2.motion.header, { initial: {
                opacity: 0,
                y: -30,
                scale: 0.96
            }, animate: {
                opacity: 1,
                y: 0,
                scale: 1
            }, exit: {
                opacity: 0,
                y: -30,
                scale: 0.96
            }, transition: {
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1]
            }, className: "\r\n              fixed\r\n              left-4\r\n              right-4\r\n              top-[82px]\r\n              z-[90]\r\n\r\n              hidden\r\n              md:block\r\n\r\n              md:left-8\r\n              md:right-8\r\n            " },
            React.createElement("nav", { className: "\r\n                mx-auto\r\n                flex\r\n                h-[68px]\r\n                max-w-7xl\r\n                items-center\r\n                justify-between\r\n\r\n                rounded-2xl\r\n                border\r\n                border-white/10\r\n\r\n                bg-[#10231C]/95\r\n\r\n                px-4\r\n                shadow-2xl\r\n                shadow-black/20\r\n\r\n                backdrop-blur-2xl\r\n\r\n                sm:px-6\r\n              " },
                React.createElement(link_1["default"], { href: "/", onClick: function () { return setOpen(false); }, className: "\r\n                  group\r\n                  flex\r\n                  items-center\r\n                  gap-3\r\n                " },
                    React.createElement("div", { className: "\r\n                    relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-[#D4AF37]/30 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-all duration-300 group-hover:border-[#D4AF37]/70\r\n                  " },
                        React.createElement("img", { src: "/images/bellis-logo.jpeg", alt: "Bellis Capital", className: "\r\n                     object-contain p-1.5 transition-transform duration-500 group-hover:scale-105\r\n                    " })),
                    React.createElement("div", null,
                        React.createElement("p", { className: "\r\n                      font-serif\r\n                      text-[15px]\r\n                      font-bold\r\n                      tracking-tight\r\n                      text-[#dda115]\r\n                    " },
                            "Bellis",
                            " ",
                            React.createElement("span", { className: "text-[#dda115]" }, "Capital")),
                        React.createElement("p", { className: "\r\n                      hidden\r\n                      text-[8px]\r\n                      uppercase\r\n                      tracking-[0.2em]\r\n                      text-white\r\n                      sm:block\r\n                    " }, "Wealth & Health"))),
                React.createElement("div", { className: "flex items-center gap-2" }, navItems.map(function (item) {
                    var active = pathname === item.href;
                    return (React.createElement(link_1["default"], { key: item.href, href: item.href, onClick: function () { return setOpen(false); }, className: "\n                        relative\n                        rounded-xl\n                        px-4\n                        py-2\n                        text-sm\n                        font-medium\n                        transition-all\n                        duration-300\n\n                        " + (active
                            ? "bg-emerald-400/10 text-emerald-300"
                            : "text-white/60 hover:bg-white/5 hover:text-white") + "\n                      " },
                        item.label,
                        active && (React.createElement(react_2.motion.span, { layoutId: "active-nav", className: "\r\n                            absolute\r\n                            bottom-0\r\n                            left-4\r\n                            right-4\r\n                            h-[2px]\r\n                            rounded-full\r\n                            bg-emerald-400\r\n                          " }))));
                })),
                React.createElement("button", { type: "button", onClick: function () { return setOpen(false); }, "aria-label": "Close navigation", className: "\r\n                  flex\r\n                  h-10\r\n                  w-10\r\n                  items-center\r\n                  justify-center\r\n                  rounded-xl\r\n                  border\r\n                  border-white/10\r\n                  bg-white/5\r\n                  text-white\r\n                  transition-all\r\n                  duration-300\r\n                  hover:bg-white/10\r\n                " },
                    React.createElement(lucide_react_1.X, { size: 20 })))))),
        React.createElement(react_2.AnimatePresence, null, open && (React.createElement(react_2.motion.div, { initial: {
                opacity: 0,
                y: -15,
                scale: 0.98
            }, animate: {
                opacity: 1,
                y: 0,
                scale: 1
            }, exit: {
                opacity: 0,
                y: -15,
                scale: 0.98
            }, transition: {
                duration: 0.3,
                ease: "easeOut"
            }, className: "\r\n              fixed\r\n              left-4\r\n              right-4\r\n              top-[82px]\r\n              z-[95]\r\n\r\n              overflow-hidden\r\n\r\n              rounded-2xl\r\n              border\r\n              border-white/10\r\n\r\n              bg-[#10231C]/98\r\n\r\n              p-4\r\n\r\n              shadow-[0_25px_80px_rgba(0,0,0,0.45)]\r\n\r\n              backdrop-blur-2xl\r\n\r\n              md:hidden\r\n            " },
            React.createElement("div", { className: "space-y-2" }, navItems.map(function (item) {
                var active = pathname === item.href;
                return (React.createElement(link_1["default"], { key: item.href, href: item.href, onClick: function () { return setOpen(false); }, className: "\n                      group\n                      flex\n                      h-14\n                      w-full\n                      items-center\n                      justify-between\n                      rounded-xl\n                      px-5\n\n                      text-base\n                      font-semibold\n\n                      transition-all\n                      duration-300\n\n                      " + (active
                        ? "bg-emerald-400/10 text-emerald-300"
                        : "text-white/70 hover:bg-white/5 hover:text-white") + "\n                    " },
                    React.createElement("span", null, item.label),
                    React.createElement(lucide_react_1.ArrowRight, { size: 18, className: "\n                        transition-all\n                        duration-300\n\n                        " + (active
                            ? "text-emerald-400"
                            : "text-white/30 group-hover:translate-x-1 group-hover:text-white") + "\n                      " })));
            })),
            React.createElement("div", { className: "my-4 h-px bg-white/10" }),
            React.createElement(link_1["default"], { href: "/contact", onClick: function () { return setOpen(false); }, className: "\r\n                flex\r\n                h-14\r\n                w-full\r\n                items-center\r\n                justify-center\r\n                gap-3\r\n\r\n                rounded-xl\r\n\r\n                bg-emerald-400\r\n\r\n                text-base\r\n                font-bold\r\n                text-[#10231C]\r\n\r\n                transition-all\r\n                duration-300\r\n\r\n                hover:bg-emerald-300\r\n                active:scale-[0.98]\r\n              " },
                React.createElement("span", null, "Start Your Journey"),
                React.createElement(lucide_react_1.ArrowRight, { size: 19 })))))));
}
exports["default"] = Navbar;
