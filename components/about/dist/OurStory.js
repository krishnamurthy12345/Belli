"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("motion/react");
var image_1 = require("next/image");
var lucide_react_1 = require("lucide-react");
var milestones = [
    {
        number: "01",
        title: "Understand",
        text: "Every financial journey starts with understanding where you are and where you want to go.",
        icon: lucide_react_1.Target
    },
    {
        number: "02",
        title: "Design",
        text: "A thoughtful strategy connects your goals with an investment approach built for the long term.",
        icon: lucide_react_1.LineChart
    },
    {
        number: "03",
        title: "Evolve",
        text: "As your goals and circumstances change, your strategy should have room to evolve with you.",
        icon: lucide_react_1.CircleDot
    },
];
function OurStory() {
    return (React.createElement("section", { id: "story", className: "section-padding relative overflow-hidden bg-[var(--color-light)]" },
        React.createElement("div", { className: "pointer-events-none absolute right-[-200px] top-20 h-[450px] w-[450px] rounded-full bg-[var(--color-primary)]/[0.06] blur-[120px]" }),
        React.createElement("div", { className: "pointer-events-none absolute bottom-20 left-[-180px] h-[400px] w-[400px] rounded-full bg-[var(--color-dark)]/[0.05] blur-[120px]" }),
        React.createElement("div", { className: "container-width relative z-10" },
            React.createElement(react_1.motion.div, { initial: { opacity: 0, y: 35 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.2 }, transition: { duration: 0.8 }, className: "mb-24 overflow-hidden rounded-[36px] border border-[var(--border-color)] bg-white shadow-[0_25px_80px_rgba(10,10,10,0.07)]" },
                React.createElement("div", { className: "grid items-stretch md:grid-cols-[0.85fr_1.15fr] lg:grid-cols-[0.8fr_1.2fr]" },
                    React.createElement("div", { className: "relative h-[480px] w-full overflow-hidden rounded-[30px] border-2 border-[var(--color-primary)]/70 bg-[#0B1D31] p-2 shadow-[0_25px_70px_rgba(10,10,10,0.18)] sm:h-[540px] md:h-full md:min-h-[520px]" },
                        React.createElement("div", { className: "relative h-full w-full overflow-hidden rounded-[24px]" },
                            React.createElement(image_1["default"], { src: "/images/rajasekar.jpeg", alt: "Raja Sekar - Founder of Bellis Capital", fill: true, priority: true, className: "object-cover object-top transition-transform duration-[1200ms] hover:scale-105" }),
                            React.createElement("div", { className: "absolute inset-0 bg-gradient-to-t from-[#0B1D31]/95 via-[#0B1D31]/30 to-transparent" }),
                            React.createElement("div", { className: "pointer-events-none absolute inset-4 z-10 rounded-[18px] border border-[var(--color-primary)]/50" }),
                            React.createElement("div", { className: "pointer-events-none absolute left-6 top-6 z-20 h-6 w-6 border-l-2 border-t-2 border-[var(--color-primary)]" }),
                            React.createElement("div", { className: "pointer-events-none absolute bottom-6 right-6 z-20 h-6 w-6 border-b-2 border-r-2 border-[var(--color-primary)]" }),
                            React.createElement("div", { className: "pointer-events-none absolute bottom-12 left-8 top-12 z-20 hidden w-[2px] bg-gradient-to-b from-transparent via-[var(--color-primary)] to-transparent sm:block" }),
                            React.createElement("div", { className: "absolute bottom-6 left-6 z-20 sm:bottom-8 sm:left-12" },
                                React.createElement("p", { className: "text-[10px] font-bold uppercase tracking-[0.3em] text-white" }, "Bellis Capital"),
                                React.createElement("h3", { className: "mt-2 font-serif text-2xl text-white sm:text-3xl" }, "Raja Sekar"),
                                React.createElement("p", { className: "mt-1 text-xs text-white/70 sm:text-sm" }, "Founder & Wealth Strategist")))),
                    React.createElement("div", { className: "relative p-6 sm:p-10 md:p-10 lg:p-16" },
                        React.createElement("div", { className: "absolute right-10 top-10 h-20 w-20 rounded-full bg-[var(--color-primary)]/[0.08] blur-2xl" }),
                        React.createElement("div", { className: "relative" },
                            React.createElement("div", { className: "gold-line" }),
                            React.createElement("p", { className: "mt-5 text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-secondary)]" }, "The Founder"),
                            React.createElement("h2", { className: "mt-4 max-w-xl font-serif text-4xl leading-[1.05] tracking-[-0.03em] text-[var(--color-dark)] sm:text-5xl" },
                                "Building wealth with",
                                React.createElement("br", null),
                                React.createElement("span", { className: "italic text-[var(--color-dark)]" }, "purpose and perspective.")),
                            React.createElement("p", { className: "mt-7 max-w-xl text-base leading-8 text-[var(--text-color-muted)]" },
                                "Raja Sekar is the founder of",
                                " ",
                                React.createElement("span", { className: "font-semibold text-[var(--color-dark)]" }, "Bellis Capital"),
                                ", focused on helping individuals and families bring greater structure and clarity to their financial journey."),
                            React.createElement("p", { className: "mt-5 max-w-xl text-base leading-8 text-[var(--text-color-muted)]" }, "His approach combines understanding, thoughtful investment planning, and a long-term perspective to help clients make financial decisions with greater confidence."),
                            React.createElement("div", { className: "mt-8 grid gap-4 sm:grid-cols-2" },
                                React.createElement("div", { className: "rounded-2xl border border-[var(--border-color)] bg-[var(--color-light)] p-5" },
                                    React.createElement("p", { className: "text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--color-secondary)]" }, "Focus"),
                                    React.createElement("p", { className: "mt-2 text-sm font-semibold text-[var(--color-dark)]" }, "Long-Term Wealth")),
                                React.createElement("div", { className: "rounded-2xl border border-[var(--border-color)] bg-[var(--color-light)] p-5" },
                                    React.createElement("p", { className: "text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--color-secondary)]" }, "Philosophy"),
                                    React.createElement("p", { className: "mt-2 text-sm font-semibold text-[var(--color-dark)]" }, "Clarity Over Complexity"))),
                            React.createElement("div", { className: "mt-8 flex gap-3" },
                                React.createElement("a", { href: "https://www.linkedin.com/in/raja-sekar-8a3a78113", target: "_blank", rel: "noreferrer", "aria-label": "LinkedIn", className: "flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border-color)] bg-white text-[var(--text-color-muted)] shadow-sm transition-all hover:bg-[var(--color-dark)] hover:text-[var(--color-primary)]" },
                                    React.createElement("svg", { className: "h-5 w-5 fill-current", viewBox: "0 0 24 24" },
                                        React.createElement("path", { d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" }))),
                                React.createElement("a", { href: "https://www.youtube.com/@belliscapital", target: "_blank", rel: "noreferrer", "aria-label": "Bellis Capital YouTube", className: "flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border-color)] bg-white text-[var(--text-color-muted)] shadow-sm transition-all hover:bg-[var(--color-dark)] hover:text-[var(--color-primary)]" },
                                    React.createElement("svg", { className: "h-5 w-5 fill-current", viewBox: "0 0 24 24" },
                                        React.createElement("path", { d: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" }))),
                                React.createElement("a", { href: "https://www.instagram.com/belliscapital/", target: "_blank", rel: "noreferrer", "aria-label": "Bellis Capital Instagram", className: "flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border-color)] bg-white text-[var(--text-color-muted)] shadow-sm transition-all hover:bg-[var(--color-dark)] hover:text-[var(--color-primary)]" },
                                    React.createElement("svg", { className: "h-5 w-5 fill-current", viewBox: "0 0 24 24", "aria-hidden": "true" },
                                        React.createElement("path", { d: "M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm5.25-3.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z" })))))))),
            React.createElement("div", { className: "grid gap-16 lg:grid-cols-[0.75fr_1.25fr]" },
                React.createElement("div", { className: "lg:sticky lg:top-32 lg:h-fit" },
                    React.createElement(react_1.motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.3 }, transition: { duration: 0.6 } },
                        React.createElement("div", { className: "gold-line" }),
                        React.createElement("p", { className: "mt-5 text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-dark)]/50" }, "The Bellis Approach"),
                        React.createElement("h2", { className: "mt-4 text-4xl font-bold tracking-[-0.04em] text-[var(--color-dark)] sm:text-5xl" },
                            "From financial",
                            React.createElement("br", null),
                            React.createElement("span", { className: "text-[var(--color-dark)]" }, "complexity to clarity.")),
                        React.createElement("p", { className: "mt-6 max-w-md text-base leading-7 text-[var(--text-color-muted)]" }, "Investing can feel complicated. Our approach is to bring structure to the journey so that decisions feel intentional rather than reactive."),
                        React.createElement("div", { className: "mt-10 border-l-2 border-[var(--color-primary)] pl-5" },
                            React.createElement("p", { className: "font-serif text-xl italic leading-8 text-[var(--color-dark)]" }, "\u201CA good financial strategy should bring clarity to your decisions, not complexity.\u201D"),
                            React.createElement("p", { className: "mt-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--color-secondary)]" }, "\u2014 Raja Sekar")))),
                React.createElement("div", { className: "space-y-5" }, milestones.map(function (item, index) {
                    var Icon = item.icon;
                    return (React.createElement(react_1.motion.div, { key: item.number, initial: {
                            opacity: 0,
                            x: 35
                        }, whileInView: {
                            opacity: 1,
                            x: 0
                        }, viewport: {
                            once: true,
                            amount: 0.3
                        }, transition: {
                            duration: 0.65,
                            delay: index * 0.12
                        }, className: "group relative overflow-hidden rounded-[28px] border border-[var(--border-color)] bg-white p-7 shadow-[0_20px_60px_rgba(10,10,10,0.05)] transition-shadow duration-500 hover:shadow-[0_25px_70px_rgba(10,10,10,0.09)] sm:p-9" },
                        React.createElement("div", { className: "absolute right-0 top-0 h-40 w-40 translate-x-1/3 -translate-y-1/3 rounded-full bg-[var(--color-primary)]/[0.07] blur-3xl transition-transform duration-700 group-hover:scale-150" }),
                        React.createElement("div", { className: "relative flex gap-6" },
                            React.createElement("div", { className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-dark)] text-[var(--color-primary)] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3" },
                                React.createElement(Icon, { size: 20 })),
                            React.createElement("div", { className: "flex-1" },
                                React.createElement("div", { className: "flex items-start justify-between gap-4" },
                                    React.createElement("div", null,
                                        React.createElement("p", { className: "text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]" }, item.number),
                                        React.createElement("h3", { className: "mt-2 text-2xl font-bold tracking-tight text-[var(--color-dark)]" }, item.title)),
                                    React.createElement(lucide_react_1.ArrowUpRight, { size: 20, className: "text-[var(--color-dark)]/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--color-primary)]" })),
                                React.createElement("p", { className: "mt-4 max-w-xl text-sm leading-7 text-[var(--text-color-muted)]" }, item.text))),
                        React.createElement("div", { className: "absolute bottom-0 left-0 h-[2px] w-0 bg-[var(--color-primary)] transition-all duration-700 group-hover:w-full" })));
                }))))));
}
exports["default"] = OurStory;
