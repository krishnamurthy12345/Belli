"use client";
"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var framer_motion_1 = require("framer-motion");
var lucide_react_1 = require("lucide-react");
var react_1 = require("react");
function InvestmentScene() {
    var containerRef = react_1.useRef(null);
    var videoRef = react_1.useRef(null);
    react_1.useEffect(function () {
        if (videoRef.current) {
            videoRef.current.defaultMuted = true;
            videoRef.current.muted = true;
            videoRef.current.play()["catch"](function () {
                // Autoplay policy fallback
            });
        }
    }, []);
    var scrollYProgress = framer_motion_1.useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    }).scrollYProgress;
    /* =========================================
       SCROLL TRANSFORMATIONS
    ========================================= */
    // Main title zooms slightly while scrolling
    var titleScale = framer_motion_1.useTransform(scrollYProgress, [0, 1], [1, 1.25]);
    // Main content moves upward
    var contentY = framer_motion_1.useTransform(scrollYProgress, [0, 1], [0, -120]);
    // Video scales for cinematic effect
    var videoScale = framer_motion_1.useTransform(scrollYProgress, [0, 1], [1, 1.12]);
    // Subtitle fades away
    var subtitleOpacity = framer_motion_1.useTransform(scrollYProgress, [0, 0.6], [1, 0]);
    // Decorative text moves in opposite direction
    var backgroundTextX = framer_motion_1.useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
    return (React.createElement("section", { ref: containerRef, className: "\n relative\n        h-[680px]\n        w-full\n        overflow-hidden\n        bg-[#0B1D31]\n        sm:h-[760px]\n        lg:h-[820px]\n      " },
        React.createElement(framer_motion_1.motion.video, { ref: videoRef, autoPlay: true, loop: true, muted: true, playsInline: true, preload: "auto", style: {
                scale: videoScale
            }, className: "\n          absolute\n          inset-0\n          h-full\n          w-full\n          object-cover\n        " },
            React.createElement("source", { src: "/videos/gold.mp4", type: "video/mp4" })),
        React.createElement("div", { className: "\n          pointer-events-none\n          absolute\n          inset-0\n          bg-gradient-to-r\n          from-transparent\n          via-[#071522]/5\n          to-[#071522]/85\n        " }),
        React.createElement("div", { className: "\n          pointer-events-none\n          absolute\n          inset-0\n          bg-gradient-to-t\n          from-[#0B1D31]\n          via-transparent\n          to-[#071522]/40\n        " }),
        React.createElement("div", { className: "\n          pointer-events-none\n          absolute\n          left-1/2\n          top-1/2\n          h-[500px]\n          w-[500px]\n          -translate-x-1/2\n          -translate-y-1/2\n          rounded-full\n          bg-[#EF1454]/10\n          blur-[120px]\n        " }),
        React.createElement(framer_motion_1.motion.div, { style: {
                x: backgroundTextX
            }, className: "\n          pointer-events-none\n          absolute\n          left-0\n          top-[18%]\n          whitespace-nowrap\n          text-[100px]\n          font-semibold\n          tracking-[-0.06em]\n          text-white/[0.035]\n          sm:text-[160px]\n          lg:text-[220px]\n        " }, "BELLIS CAPITAL"),
        React.createElement(framer_motion_1.motion.div, { style: {
                y: contentY
            }, className: "\n          relative\n          z-10\n          mx-auto\n          flex\n          h-full\n          max-w-7xl\n          items-center\n          px-6\n          pt-20\n          sm:px-10\n          lg:px-16\n        " },
            React.createElement("div", { className: "max-w-4xl" },
                React.createElement(framer_motion_1.motion.div, { initial: {
                        opacity: 0,
                        y: 30
                    }, animate: {
                        opacity: 1,
                        y: 0
                    }, transition: {
                        duration: 0.8,
                        delay: 0.25
                    }, className: "\n              mb-6\n              flex\n              items-center\n              gap-3\n            " },
                    React.createElement("div", { className: "\n                h-px\n                w-10\n                bg-[#168BD2]\n                sm:w-16\n              " }),
                    React.createElement("span", { className: "\n                text-xs\n                font-bold\n                uppercase\n                tracking-[0.28em]\n                text-[var(--text-color-primary)]\n                sm:text-sm\n              " }, "Strategic Wealth Management")),
                React.createElement(framer_motion_1.motion.h1, { initial: {
                        opacity: 0,
                        y: 60,
                        scale: 0.92
                    }, animate: {
                        opacity: 1,
                        y: 0,
                        scale: 1
                    }, transition: {
                        duration: 1.1,
                        delay: 0.35,
                        ease: [0.16, 1, 0.3, 1]
                    }, style: {
                        scale: titleScale
                    }, className: "\n              origin-left\n              text-[54px]\n              font-light\n              leading-[0.92]\n              tracking-[-0.055em]\n              text-white\n              sm:text-[78px]\n              md:text-[96px]\n              lg:text-[118px]\n            " },
                    "Capital",
                    React.createElement("br", null),
                    React.createElement("span", { className: "\n                font-light\n                text-white\n              " }, "With Purpose.")),
                React.createElement(framer_motion_1.motion.p, { style: {
                        opacity: subtitleOpacity
                    }, initial: {
                        opacity: 0,
                        y: 30
                    }, animate: {
                        opacity: 1,
                        y: 0
                    }, transition: {
                        duration: 0.8,
                        delay: 0.65
                    }, className: "\n              mt-8\n              max-w-xl\n              text-base\n              leading-7\n              text-white/70\n              sm:text-lg\n              sm:leading-8\n            " }, "Bellis Capital combines disciplined investment strategies, long-term thinking, and intelligent capital allocation to help build lasting value."),
                React.createElement(framer_motion_1.motion.div, { initial: {
                        opacity: 0,
                        y: 30
                    }, animate: {
                        opacity: 1,
                        y: 0
                    }, transition: {
                        duration: 0.8,
                        delay: 0.8
                    }, className: "\n              mt-9\n              flex\n              flex-col\n              gap-3\n              sm:flex-row\n              sm:items-center\n            " },
                    React.createElement(link_1["default"], { href: "/contact", className: "\n                group\n                inline-flex\n                h-14\n                items-center\n                justify-center\n                gap-3\n                rounded-full\n                bg-[var(--bg-color-dark)]\n                px-7\n                text-sm\n                font-semibold\n                text-whi\n                transition-all\n                duration-300\n                hover:bg-[var(--bg-color-secondary)]\n                hover:shadow-[0_0_40px_rgba(239,20,84,0.25)]\n                hover:text-white\n              " },
                        "Explore Our Approach",
                        React.createElement(lucide_react_1.ArrowUpRight, { className: "\n                  h-4\n                  w-4\n                  transition-transform\n                  duration-300\n                  group-hover:-translate-y-0.5\n                  group-hover:translate-x-0.5\n                " })),
                    React.createElement(link_1["default"], { href: "/about", className: "\n                group\n                inline-flex\n                h-14\n                items-center\n                justify-center\n                gap-3\n                rounded-full\n                border\n                border-white/20\n                bg-white/5\n                px-7\n                text-sm\n                font-medium\n                text-white\n                backdrop-blur-md\n                transition-all\n                duration-300\n                hover:border[var(--bg-color-dark)]\n                hover:bg-[var(--bg-color-secondary)]\n              " },
                        "Discover Bellis",
                        React.createElement(lucide_react_1.ArrowUpRight, { className: "\n                  h-4\n                  w-4\n                  transition-transform\n                  duration-300\n                  group-hover:-translate-y-0.5\n                  group-hover:translate-x-0.5\n                " }))),
                React.createElement(framer_motion_1.motion.div, { initial: {
                        opacity: 0
                    }, animate: {
                        opacity: 1
                    }, transition: {
                        duration: 1,
                        delay: 1.1
                    }, className: "\n              mt-9\n              flex\n              items-center\n              gap-3\n              text-xs\n              text-white/50\n            " },
                    React.createElement(lucide_react_1.ShieldCheck, { className: "h-4 w-4 text-[#168BD2]" }),
                    React.createElement("span", null, "Disciplined. Transparent. Long-term focused.")))),
        React.createElement(framer_motion_1.motion.div, { initial: {
                opacity: 0
            }, animate: {
                opacity: 1
            }, transition: {
                duration: 1,
                delay: 1.4
            }, className: "\n          absolute\n          bottom-8\n          left-1/2\n          z-20\n          -translate-x-1/2\n        " },
            React.createElement(framer_motion_1.motion.div, { animate: {
                    y: [0, 7, 0]
                }, transition: {
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }, className: "\n            flex\n            flex-col\n            items-center\n            gap-2\n          " },
                React.createElement("span", { className: "\n              text-[9px]\n              uppercase\n              tracking-[0.3em]\n              text-white/40\n            " }, "Scroll"),
                React.createElement(lucide_react_1.ArrowDown, { className: "\n              h-4\n              w-4\n              text-[#EF1454]\n            " }))),
        React.createElement("div", { className: "\n          pointer-events-none\n          absolute\n          bottom-0\n          left-0\n          right-0\n          z-10\n          h-32\n          bg-gradient-to-t\n          from-[#0B1D31]\n          to-transparent\n        " })));
}
exports["default"] = InvestmentScene;
