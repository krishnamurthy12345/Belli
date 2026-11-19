"use client";
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("motion/react");
var react_2 = require("react");
var lucide_react_1 = require("lucide-react");
var link_1 = require("next/link");
var react_toastify_1 = require("react-toastify");
require("react-toastify/dist/ReactToastify.css");
var contactItems = [
    {
        icon: lucide_react_1.Mail,
        label: "Email Inquiry",
        value: "belliscapitalofficial@gmail.com",
        href: "mailto:belliscapitalofficial@gmail.com"
    },
    {
        icon: lucide_react_1.Phone,
        label: "Direct Call",
        value: "+91 94889 74620",
        href: "tel:+919488974620"
    },
    {
        icon: lucide_react_1.MapPin,
        label: "Headquarters",
        value: "Coimbatore, Tamil Nadu, India",
        href: "https://maps.app.goo.gl/gMkDZVo4oSWv3dHH9"
    }
];
function ContactExperience() {
    var _this = this;
    var _a = react_2.useState({
        fullName: "",
        phone: "",
        email: "",
        requirements: "",
        comments: ""
    }), formData = _a[0], setFormData = _a[1];
    var _b = react_2.useState(false), isSubmitting = _b[0], setIsSubmitting = _b[1];
    var _c = react_2.useState(false), isSubmitted = _c[0], setIsSubmitted = _c[1];
    var handleChange = function (e) {
        var _a;
        setFormData(__assign(__assign({}, formData), (_a = {}, _a[e.target.name] = e.target.value, _a)));
    };
    var handleSubmit = function (e) { return __awaiter(_this, void 0, void 0, function () {
        var FORM_URL, formBody, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    setIsSubmitting(true);
                    setIsSubmitted(false);
                    FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSf19cGLsqzW0M0USNK5gx5KuuLxnJCO0v7ulPHrsfub3W1X2g/formResponse";
                    formBody = new URLSearchParams();
                    // Google Form field IDs
                    formBody.append("entry.918414218", formData.fullName);
                    formBody.append("entry.906267862", formData.phone);
                    formBody.append("entry.1521013559", formData.email);
                    formBody.append("entry.1857973263", formData.requirements);
                    formBody.append("entry.1477974961", formData.comments);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, fetch(FORM_URL, {
                            method: "POST",
                            mode: "no-cors",
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded"
                            },
                            body: formBody.toString()
                        })];
                case 2:
                    _a.sent();
                    // Google Forms does not expose the response because of no-cors.
                    // If fetch completes, treat it as submitted.
                    setIsSubmitting(false);
                    setIsSubmitted(true);
                    react_toastify_1.toast.success("Thank you! Your request has been submitted successfully.");
                    setFormData({
                        fullName: "",
                        phone: "",
                        email: "",
                        requirements: "",
                        comments: ""
                    });
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error("Submission error:", error_1);
                    setIsSubmitting(false);
                    setIsSubmitted(false);
                    // Error Toast
                    react_toastify_1.toast.error("Something went wrong. Please try again.");
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement("main", { className: "min-h-screen overflow-hidden bg-[var(--color-light)]" },
        React.createElement(react_toastify_1.ToastContainer, { position: "top-right", autoClose: 3000, hideProgressBar: false, newestOnTop: true, closeOnClick: true, pauseOnHover: true, draggable: true, theme: "colored" }),
        React.createElement("section", { className: "relative overflow-hidden bg-[var(--color-dark)] pt-32" },
            React.createElement("div", { className: "pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[var(--color-secondary)]/30 blur-[130px]" }),
            React.createElement("div", { className: "pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[var(--color-primary)]/10 blur-[130px]" }),
            React.createElement("div", { className: "pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-dark)]/50 blur-[140px]" }),
            React.createElement("div", { className: "pointer-events-none absolute right-[15%] top-[20%] h-1.5 w-1.5 rounded-full bg-white/40" }),
            React.createElement("div", { className: "container-width relative" },
                React.createElement("div", { className: "grid min-h-[calc(100vh-128px)] items-center gap-12 pb-20 lg:grid-cols-[0.9fr_1.1fr]" },
                    React.createElement(react_1.motion.div, { initial: {
                            opacity: 0,
                            x: -30
                        }, animate: {
                            opacity: 1,
                            x: 0
                        }, transition: {
                            duration: 0.8
                        }, className: "relative z-10" },
                        React.createElement("div", { className: "flex items-center gap-3" },
                            React.createElement("span", { className: "h-[2px] w-10 bg-[var(--color-primary)]" }),
                            React.createElement("span", { className: "text-xs font-bold uppercase tracking-[0.24em] text-[var(--color-primary)]" }, "Let's Connect")),
                        React.createElement("h1", { className: "mt-7 text-5xl font-bold leading-[0.98] tracking-[-0.045em] text-white sm:text-6xl lg:text-[70px]" },
                            "Your next",
                            React.createElement("br", null),
                            "financial chapter",
                            React.createElement("br", null),
                            React.createElement("span", { className: "text-white" }, "starts here.")),
                        React.createElement("p", { className: "mt-7 max-w-xl text-base leading-8 text-white/60 sm:text-lg" }, "Whether you are building your first investment plan, managing an established portfolio, or planning for long-term financial goals, Bellis Capital provides structured guidance with clarity and discipline."),
                        React.createElement("div", { className: "mt-9 flex flex-wrap gap-3" },
                            React.createElement("a", { href: "#contact-details", className: "group inline-flex items-center gap-2 rounded-full bg-[var(--bg-color-light)] text-[var(--bg-color-dark)] px-7 py-4 text-sm font-bold text-[var(--color-dark)] transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--bg-color-primary)]" },
                                "Start a Conversation",
                                React.createElement(lucide_react_1.ArrowRight, { size: 17, className: "transition-transform duration-300 group-hover:translate-x-1" })),
                            React.createElement(link_1["default"], { href: "/about", className: "inline-flex items-center gap-2 rounded-full bg-[var(--bg-color-light)] border border-white/15 text-[var(--bg-color-dark)] px-7 py-4 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--bg-color-primary)]" },
                                React.createElement(lucide_react_1.MessageCircle, { size: 16 }),
                                "Why Bellis")),
                        React.createElement("div", { className: "mt-8 flex items-center gap-3" },
                            React.createElement("div", { className: "h-2 w-2 rounded-full bg-[var(--color-primary)] shadow-[0_0_12px_rgba(227,0,69,0.7)]" }),
                            React.createElement("p", { className: "text-xs uppercase tracking-[0.18em] text-white/35" }, "Wealth \u2022 Strategy \u2022 Clarity"))),
                    React.createElement(react_1.motion.div, { initial: {
                            opacity: 0,
                            x: 30,
                            scale: 0.92
                        }, animate: {
                            opacity: 1,
                            x: 0,
                            scale: 1
                        }, transition: {
                            duration: 1,
                            delay: 0.15
                        }, className: "relative flex min-h-[430px] items-center justify-center sm:min-h-[520px]" },
                        React.createElement("div", { className: "absolute h-[380px] w-[380px] rounded-full bg-white/15 blur-[120px]" }),
                        React.createElement("div", { className: "absolute h-[240px] w-[240px] rounded-full bg-white/25 blur-[70px]" }),
                        React.createElement(react_1.motion.div, { animate: {
                                rotate: 360
                            }, transition: {
                                duration: 35,
                                repeat: Infinity,
                                ease: "linear"
                            }, className: "absolute h-[370px] w-[370px] rounded-full border-2 border-white/60 shadow-[0_0_30px_rgba(255,255,255,0.2)] sm:h-[460px] sm:w-[460px]" },
                            React.createElement("span", { className: "absolute -left-2.5 top-1/2 h-5 w-5 -translate-y-1/2 rounded-full bg-white shadow-[0_0_25px_white,0_0_50px_white] ring-4 ring-white/30" }),
                            React.createElement("span", { className: "absolute -right-1 top-[28%] h-3 w-3 rounded-full bg-white shadow-[0_0_15px_white] ring-2 ring-white/60" })),
                        React.createElement(react_1.motion.div, { animate: {
                                rotate: -360
                            }, transition: {
                                duration: 24,
                                repeat: Infinity,
                                ease: "linear"
                            }, className: "absolute h-[280px] w-[280px] rounded-full border border-white/50 sm:h-[350px] sm:w-[350px]" },
                            React.createElement("span", { className: "absolute right-[10%] top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-white shadow-[0_0_20px_white] ring-2 ring-white/70" }),
                            React.createElement("span", { className: "absolute left-[15%] bottom-[20%] h-2 w-2 rounded-full bg-white shadow-[0_0_10px_white]" })),
                        React.createElement(react_1.motion.div, { animate: {
                                rotate: 360
                            }, transition: {
                                duration: 16,
                                repeat: Infinity,
                                ease: "linear"
                            }, className: "absolute h-[190px] w-[190px] rounded-full border-2 border-white/70 sm:h-[240px] sm:w-[240px]" },
                            React.createElement("span", { className: "absolute left-[12%] top-[15%] h-3 w-3 rounded-full bg-white shadow-[0_0_15px_white]" })),
                        React.createElement(react_1.motion.div, { animate: {
                                y: [0, -10, 0]
                            }, transition: {
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }, className: "relative z-10 flex h-[190px] w-[190px] flex-col items-center justify-center rounded-full border-2 border-white/80 bg-[var(--color-dark)] shadow-[0_0_60px_rgba(255,255,255,0.3)] backdrop-blur-xl sm:h-[220px] sm:w-[220px]" },
                            React.createElement("div", { className: "absolute inset-4 rounded-full border border-white/40 bg-white/10 shadow-inner" }),
                            React.createElement("div", { className: "relative z-10 text-center" },
                                React.createElement("p", { className: "text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--text-col)]" }, "Bellis"),
                                React.createElement("p", { className: "mt-2 font-serif text-3xl italic text-[var(--text-color-primary)] sm:text-4xl" }, "Capital"),
                                React.createElement("div", { className: "mx-auto mt-4 h-px w-10 bg-white/70" }),
                                React.createElement("p", { className: "mt-3 text-[8px] uppercase tracking-[0.22em] text-white/60" }, "Wealth \u2022 Strategy"))),
                        React.createElement(react_1.motion.div, { initial: {
                                opacity: 0,
                                x: 25
                            }, animate: {
                                opacity: 1,
                                x: 0
                            }, transition: {
                                duration: 0.7,
                                delay: 0.9
                            }, className: "absolute right-0 top-[12%] z-20 rounded-2xl border border-white/10 bg-white/[0.07] px-5 py-4 shadow-2xl backdrop-blur-xl" },
                            React.createElement("p", { className: "text-[9px] uppercase tracking-[0.2em] text-white/35" }, "Direct Advisory"),
                            React.createElement("p", { className: "mt-1 text-sm font-semibold text-white" }, "One conversation at a time.")),
                        React.createElement(react_1.motion.div, { initial: {
                                opacity: 0,
                                y: 20
                            }, animate: {
                                opacity: 1,
                                y: 0
                            }, transition: {
                                duration: 0.7,
                                delay: 1.05
                            }, className: "absolute bottom-[8%] left-0 z-20 rounded-2xl border border-white/10 bg-[var(--color-dark)]/90 px-5 py-4 shadow-2xl backdrop-blur-xl" },
                            React.createElement("p", { className: "text-[9px] uppercase tracking-[0.2em] text-white/35" }, "Bellis Capital"),
                            React.createElement("p", { className: "mt-1 text-sm font-semibold text-white" }, "Wealth \u2022 Strategy \u2022 Clarity")))))),
        React.createElement("section", { id: "contact-details", className: "section-padding bg-[var(--color-light)]" },
            React.createElement("div", { className: "container-width" },
                React.createElement("div", { className: "grid gap-12 lg:grid-cols-[0.7fr_1.3fr]" },
                    React.createElement(react_1.motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.3 } },
                        React.createElement("div", { className: "gold-line" }),
                        React.createElement("p", { className: "mt-5 text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-dark)]/50" }, "Contact Details"),
                        React.createElement("h2", { className: "mt-4 text-4xl font-bold tracking-[-0.04em] text-[var(--color-dark)] sm:text-5xl" },
                            "Let's make the",
                            React.createElement("br", null),
                            React.createElement("span", { className: "text-[var(--color-dark)]" }, "conversation useful.")),
                        React.createElement("p", { className: "mt-5 max-w-md text-sm leading-7 text-[var(--text-color-muted)]" }, "Use the details below to connect with the Bellis Capital team and begin a conversation around your financial goals."),
                        React.createElement("div", { className: "mt-8 flex flex-col gap-4" }, contactItems.map(function (item, index) {
                            var Icon = item.icon;
                            return (React.createElement(react_1.motion.a, { key: item.label, href: item.href, initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.4, delay: index * 0.1 }, className: "group flex items-center gap-4 rounded-2xl border border-[var(--border-color)] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)]/50 hover:shadow-md" },
                                React.createElement("div", { className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-dark)] text-[var(--bg-color-light)] transition-all group-hover:bg-[var(--color-primary)] group-hover:text-[var(--color-dark)]" },
                                    React.createElement(Icon, { size: 20 })),
                                React.createElement("div", null,
                                    React.createElement("p", { className: "text-[10px] font-bold uppercase tracking-wider text-[var(--text-color-muted)]/60" }, item.label),
                                    React.createElement("p", { className: "text-sm font-semibold text-[var(--color-dark)]" }, item.value))));
                        })),
                        React.createElement("div", { className: "mt-8 flex items-center gap-3" },
                            React.createElement("a", { href: "https://wa.me/919488974620", target: "_blank", rel: "noreferrer", className: "group inline-flex items-center gap-2 rounded-xl bg-[var(--color-dark)] px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--color-primary)]" },
                                React.createElement(lucide_react_1.MessageCircle, { size: 16, className: "text-[var(--bg-color-light)] " }),
                                "WhatsApp"),
                            React.createElement("a", { href: "https://www.youtube.com/@belliscapital", target: "_blank", rel: "noreferrer", "aria-label": "Bellis Capital YouTube", className: "flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border-color)] bg-white text-[var(--text-color-muted)] shadow-sm transition-all hover:bg-[var(--color-dark)] hover:text-[var(--color-primary)]" },
                                React.createElement("svg", { className: "h-5 w-5 fill-current", viewBox: "0 0 24 24" },
                                    React.createElement("path", { d: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" }))),
                            React.createElement("a", { href: "https://www.linkedin.com/in/raja-sekar-8a3a78113", target: "_blank", rel: "noreferrer", "aria-label": "LinkedIn", className: "flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border-color)] bg-white text-[var(--text-color-muted)] shadow-sm transition-all hover:bg-[var(--color-dark)] hover:text-[var(--color-primary)]" },
                                React.createElement("svg", { className: "h-5 w-5 fill-current", viewBox: "0 0 24 24" },
                                    React.createElement("path", { d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" }))),
                            React.createElement("a", { href: "https://www.instagram.com/belliscapital/", target: "_blank", rel: "noreferrer", "aria-label": "Bellis Capital Instagram", className: "flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border-color)] bg-white text-[var(--text-color-muted)] shadow-sm transition-all hover:bg-[var(--color-dark)] hover:text-[var(--color-primary)]" },
                                React.createElement("svg", { className: "h-5 w-5 fill-current", viewBox: "0 0 24 24", "aria-hidden": "true" },
                                    React.createElement("path", { d: "M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm5.25-3.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z" }))))),
                    React.createElement(react_1.motion.div, { initial: { opacity: 0, y: 25 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.2 }, transition: { duration: 0.6 }, className: "rounded-[28px] border border-[var(--border-color)] bg-white p-8 shadow-[0_20px_50px_rgba(10,10,10,0.06)] sm:p-10" },
                        React.createElement("p", { className: "text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-dark)]" }, "Begin Your Journey"),
                        React.createElement("h3", { className: "mt-2 text-2xl font-bold text-[var(--color-dark)] sm:text-3xl" }, "Request an Advisory Call"),
                        React.createElement("p", { className: "mt-1 text-xs text-[var(--text-color-muted)]" }, "Share a few details and our team will connect with you."),
                        React.createElement("form", { onSubmit: handleSubmit, className: "mt-6 flex flex-col gap-4" },
                            React.createElement("div", null,
                                React.createElement("label", { className: "block text-[10px] font-bold uppercase tracking-wider text-[var(--text-color-muted)]" }, "Full Name"),
                                React.createElement("input", { type: "text", name: "fullName", value: formData.fullName, onChange: handleChange, placeholder: "John Doe", required: true, className: "mt-1 w-full rounded-xl border border-[var(--border-color)] bg-[var(--color-light)] px-4 py-3 text-sm text-[var(--color-dark)] outline-none transition-all placeholder:text-[var(--text-color-muted)]/40 focus:border-[var(--color-primary)] focus:bg-white" })),
                            React.createElement("div", { className: "grid gap-4 sm:grid-cols-2" },
                                React.createElement("div", null,
                                    React.createElement("label", { className: "block text-[10px] font-bold uppercase tracking-wider text-[var(--text-color-muted)]" }, "Phone Number"),
                                    React.createElement("input", { type: "tel", name: "phone", value: formData.phone, onChange: handleChange, placeholder: "+91 98765 43210", required: true, className: "mt-1 w-full rounded-xl border border-[var(--border-color)] bg-[var(--color-light)] px-4 py-3 text-sm text-[var(--color-dark)] outline-none transition-all placeholder:text-[var(--text-color-muted)]/40 focus:border-[var(--color-primary)] focus:bg-white" })),
                                React.createElement("div", null,
                                    React.createElement("label", { className: "block text-[10px] font-bold uppercase tracking-wider text-[var(--text-color-muted)]" }, "Email Address"),
                                    React.createElement("input", { type: "email", name: "email", value: formData.email, onChange: handleChange, placeholder: "john@example.com", required: true, className: "mt-1 w-full rounded-xl border border-[var(--border-color)] bg-[var(--color-light)] px-4 py-3 text-sm text-[var(--color-dark)] outline-none transition-all placeholder:text-[var(--text-color-muted)]/40 focus:border-[var(--color-primary)] focus:bg-white" }))),
                            React.createElement("div", null,
                                React.createElement("label", { className: "block text-[10px] font-bold uppercase tracking-wider text-[var(--text-color-muted)]" }, "Requirements"),
                                React.createElement("textarea", { name: "requirements", rows: 3, value: formData.requirements, onChange: handleChange, placeholder: "Tell us your financial requirements...", required: true, className: "mt-1 w-full rounded-xl border border-[var(--border-color)] bg-[var(--color-light)] px-4 py-3 text-sm text-[var(--color-dark)] outline-none transition-all placeholder:text-[var(--text-color-muted)]/40 focus:border-[var(--color-primary)] focus:bg-white" })),
                            React.createElement("div", null,
                                React.createElement("label", { className: "block text-[10px] font-bold uppercase tracking-wider text-[var(--text-color-muted)]" }, "Comments"),
                                React.createElement("textarea", { name: "comments", rows: 3, value: formData.comments, onChange: handleChange, placeholder: "Add any additional comments...", className: "mt-1 w-full rounded-xl border border-[var(--border-color)] bg-[var(--color-light)] px-4 py-3 text-sm text-[var(--color-dark)] outline-none transition-all placeholder:text-[var(--text-color-muted)]/40 focus:border-[var(--color-primary)] focus:bg-white" })),
                            React.createElement("button", { type: "submit", disabled: isSubmitting, className: "group mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-dark)] py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-[var(--color-primary)] hover:text-white hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70" },
                                isSubmitting ? "Submitting..." : "Submit Request",
                                React.createElement(lucide_react_1.Send, { size: 15, className: "text-[var(--color-primary)] transition-colors duration-300 group-hover:text-white" }))))))),
        React.createElement("section", { className: "relative overflow-hidden bg-[var(--color-dark)] py-24" },
            React.createElement("div", { className: "pointer-events-none absolute left-1/2 top-0 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-[var(--color-secondary)]/30 blur-[120px]" }),
            React.createElement("div", { className: "pointer-events-none absolute bottom-[-150px] right-[-100px] h-[350px] w-[350px] rounded-full bg-[var(--color-primary)]/[0.06] blur-[100px]" }),
            React.createElement("div", { className: "container-width relative text-center" },
                React.createElement(react_1.motion.div, { initial: {
                        opacity: 0,
                        y: 20
                    }, whileInView: {
                        opacity: 1,
                        y: 0
                    }, viewport: {
                        once: true
                    } },
                    React.createElement("p", { className: "text-xs font-bold uppercase tracking-[0.25em] text-[var(--color-primary)]" }, "Begin with clarity"),
                    React.createElement("h2", { className: "mx-auto mt-5 max-w-3xl text-4xl font-bold tracking-[-0.04em] text-white sm:text-6xl" }, "The right strategy starts with the right conversation."),
                    React.createElement("p", { className: "mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/45" }, "Start by sharing what matters to you. The investment journey can follow from there."),
                    React.createElement("a", { href: "mailto:belliscapitalofficial@gmail.com", className: "mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold text-[var(--color-dark)] transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--bg-color-dark)] hover:text-white outline hover:border-[var(--bg-color-light)]" },
                        "Get in Touch",
                        React.createElement(lucide_react_1.ArrowRight, { size: 17 })))))));
}
exports["default"] = ContactExperience;
