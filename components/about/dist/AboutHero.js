"use client";
"use strict";
exports.__esModule = true;
var dynamic_1 = require("next/dynamic");
var react_1 = require("motion/react");
var lucide_react_1 = require("lucide-react");
var AboutScene = dynamic_1["default"](function () { return Promise.resolve().then(function () { return require("@/components/about/AboutScene"); }); }, {
    ssr: false,
    loading: function () { return (React.createElement("div", { className: "flex h-[420px] items-center justify-center sm:h-[520px]" },
        React.createElement("div", { className: "h-24 w-24 rounded-full bg-[var(--color-primary)]/10 blur-2xl animate-pulse" }))); }
});
var principles = [
    {
        icon: lucide_react_1.Compass,
        label: "Purpose",
        text: "Invest around real financial goals."
    },
    {
        icon: lucide_react_1.ShieldCheck,
        label: "Discipline",
        text: "Build decisions around long-term thinking."
    },
    {
        icon: lucide_react_1.Sparkles,
        label: "Clarity",
        text: "Make investing easier to understand."
    },
];
function AboutHero() {
    return (React.createElement("section", { className: "relative min-h-screen overflow-hidden bg-[var(--color-dark)] pt-24" },
        React.createElement("div", { className: "pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[var(--color-secondary)]/30 blur-[130px]" }),
        React.createElement("div", { className: "pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[var(--color-primary)]/10 blur-[140px]" }),
        React.createElement("div", { className: "pointer-events-none absolute inset-0 opacity-[0.035]" },
            React.createElement("div", { className: "h-full w-full", style: {
                    backgroundImage: "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
                    backgroundSize: "70px 70px"
                } })),
        React.createElement("div", { className: "container-width relative" },
            React.createElement("div", { className: "grid min-h-[calc(100vh-96px)] items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]" },
                React.createElement("div", { className: "relative z-10 py-20" },
                    React.createElement(react_1.motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, className: "mb-7 flex items-center gap-3" },
                        React.createElement("span", { className: "h-[2px] w-10 bg-[var(--color-primary)]" }),
                        React.createElement("span", { className: "text-xs font-bold uppercase tracking-[0.24em] text-[var(--color-primary)]" }, "About Bellis Capital")),
                    React.createElement(react_1.motion.h1, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.08 }, className: "max-w-3xl text-5xl font-bold leading-[0.98] tracking-[-0.045em] text-white sm:text-6xl lg:text-[72px]" },
                        "Wealth is not",
                        React.createElement("br", null),
                        React.createElement("span", { className: "text-white" }, "just a number.")),
                    React.createElement(react_1.motion.p, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, delay: 0.2 }, className: "mt-7 max-w-xl text-base leading-8 text-white/60 sm:text-lg" }, "It is the freedom to make choices, the confidence to plan ahead, and the discipline to stay invested through changing markets."),
                    React.createElement(react_1.motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, delay: 0.32 }, className: "mt-10 grid max-w-xl gap-3 sm:grid-cols-3" }, principles.map(function (item) {
                        var Icon = item.icon;
                        return (React.createElement("div", { key: item.label, className: "rounded-2xl border border-white/10 bg-white/[0.055] p-4 backdrop-blur-xl" },
                            React.createElement(Icon, { size: 18, className: "text-[var(--color-primary)]" }),
                            React.createElement("p", { className: "mt-4 text-xs font-bold uppercase tracking-[0.12em] text-white" }, item.label),
                            React.createElement("p", { className: "mt-2 text-xs leading-5 text-white/40" }, item.text)));
                    }))),
                React.createElement(react_1.motion.div, { initial: {
                        opacity: 0,
                        scale: 0.88,
                        rotate: -3
                    }, animate: {
                        opacity: 1,
                        scale: 1,
                        rotate: 0
                    }, transition: {
                        duration: 1.1,
                        delay: 0.15
                    }, className: "relative" },
                    React.createElement(AboutScene, null),
                    React.createElement(react_1.motion.div, { initial: { opacity: 0, scale: 0.85 }, animate: { opacity: 1, scale: 1 }, transition: {
                            duration: 0.8,
                            delay: 0.55
                        }, className: "pointer-events-none absolute inset-0 z-10 flex items-center justify-center" },
                        React.createElement("div", { className: "flex h-[150px] w-[150px] flex-col items-center justify-center rounded-full border-2 border-white/80 bg-[var(--color-dark)] shadow-[0_0_60px_rgba(255,255,255,0.3)] backdrop-blur-xl sm:h-[190px] sm:w-[190px]" },
                            React.createElement("div", { className: "absolute inset-4 rounded-full border border-white/40 bg-white/10 shadow-inner" }),
                            React.createElement("div", { className: "relative z-10 text-center" },
                                React.createElement("p", { className: "text-[10px] font-bold uppercase tracking-[0.3em] text-white" }, "Bellis"),
                                React.createElement("p", { className: "mt-2 font-serif text-3xl italic text-[var(--text-color-primary)] sm:text-4xl" }, "Capital"),
                                React.createElement("div", { className: "mx-auto mt-4 h-px w-10 bg-white/70" }),
                                React.createElement("p", { className: "mt-3 text-[8px] uppercase tracking-[0.22em] text-white/60" }, "Wealth \u2022 Strategy")))),
                    React.createElement(react_1.motion.div, { initial: { opacity: 0, x: 30 }, animate: { opacity: 1, x: 0 }, transition: {
                            duration: 0.7,
                            delay: 0.9
                        }, className: "absolute right-0 top-[16%] hidden rounded-2xl border border-white/10 bg-[var(--color-dark)]/75 px-5 py-4 shadow-2xl backdrop-blur-xl sm:block" },
                        React.createElement("p", { className: "text-[9px] uppercase tracking-[0.2em] text-white/35" }, "Our Philosophy"),
                        React.createElement("p", { className: "mt-1 text-sm font-semibold text-white" }, "Strategy over noise.")),
                    React.createElement(react_1.motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: {
                            duration: 0.7,
                            delay: 1.05
                        }, className: "absolute bottom-[12%] left-0 hidden rounded-2xl border border-white/10 bg-white/[0.07] px-5 py-4 shadow-2xl backdrop-blur-xl sm:block" },
                        React.createElement("p", { className: "text-[9px] uppercase tracking-[0.2em] text-white/35" }, "Long-Term Thinking"),
                        React.createElement("p", { className: "mt-1 text-sm font-semibold text-white" }, "Small decisions. Compounded over time.")))),
            React.createElement(react_1.motion.a, { href: "#story", initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 1.3 }, className: "absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/30 lg:flex" },
                React.createElement("span", { className: "text-[10px] uppercase tracking-[0.25em]" }, "Explore our story"),
                React.createElement(react_1.motion.div, { animate: { y: [0, 6, 0] }, transition: {
                        duration: 1.5,
                        repeat: Infinity
                    } },
                    React.createElement(lucide_react_1.ArrowDown, { size: 15, className: "text-[var(--color-primary)]" }))))));
}
exports["default"] = AboutHero;
