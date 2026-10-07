"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, ShieldCheck } from "lucide-react";
import { useRef } from "react";

export default function InvestmentScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  /* =========================================
     SCROLL TRANSFORMATIONS
  ========================================= */

  // Main title zooms slightly while scrolling
  const titleScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1.25]
  );

  // Main content moves upward
  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -120]
  );

  // Video scales for cinematic effect
  const videoScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1.12]
  );

  // Subtitle fades away
  const subtitleOpacity = useTransform(
    scrollYProgress,
    [0, 0.6],
    [1, 0]
  );

  // Decorative text moves in opposite direction
  const backgroundTextX = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "-12%"]
  );

  return (
    <section
      ref={containerRef}
      className="
        relative
        h-[680px]
        w-full
        overflow-hidden
        bg-[#071C16]
        sm:h-[760px]
        lg:h-[820px]
      "
    >
      {/* =========================================
          BACKGROUND VIDEO
      ========================================= */}

      <motion.video
        src="/videos/gold.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        style={{
          scale: videoScale,
        }}
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
        "
      />

      {/* =========================================
          CINEMATIC OVERLAY
      ========================================= */}

      <div
        className="
          absolute
          inset-0
          bg-[#04130F]/45
        "
      />

      {/* =========================================
          GOLD LIGHT GLOW
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#D4AF37]/10
          blur-[120px]
        "
      />

      {/* =========================================
          LARGE BACKGROUND TEXT
      ========================================= */}

      <motion.div
        style={{
          x: backgroundTextX,
        }}
        className="
          pointer-events-none
          absolute
          left-0
          top-[18%]
          whitespace-nowrap
          text-[100px]
          font-semibold
          tracking-[-0.06em]
          text-white/[0.035]
          sm:text-[160px]
          lg:text-[220px]
        "
      >
        CAPITAL
      </motion.div>

      {/* =========================================
          TOP LABEL
      ========================================= */}

      <div
        className="
          absolute
          left-0
          right-0
          top-0
          z-20
          mx-auto
          flex
          max-w-7xl
          items-center
          justify-between
          px-6
          py-7
          sm:px-10
          lg:px-16
        "
      >
        {/* Logo */}
        <motion.div
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            text-sm
            font-semibold
            tracking-[0.3em]
            text-white
            sm:text-base
          "
        >
          BELLIS
          <span className="text-[#D4AF37]">
            {" "}CAPITAL
          </span>
        </motion.div>

        
      </div>

      {/* =========================================
          MAIN CONTENT
      ========================================= */}

      <motion.div
        style={{
          y: contentY,
        }}
        className="
          relative
          z-10
          mx-auto
          flex
          h-full
          max-w-7xl
          items-center
          px-6
          pt-20
          sm:px-10
          lg:px-16
        "
      >
        <div className="max-w-4xl">

          {/* Small heading */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.25,
            }}
            className="
              mb-6
              flex
              items-center
              gap-3
            "
          >
            <div
              className="
                h-px
                w-10
                bg-[#D4AF37]
                sm:w-16
              "
            />

            <span
              className="
                text-xs
                font-medium
                uppercase
                tracking-[0.28em]
                text-[#D4AF37]
                sm:text-sm
              "
            >
              Strategic Wealth Management
            </span>
          </motion.div>

          {/* =====================================
              MAIN TITLE
          ===================================== */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 60,
              scale: 0.92,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 1.1,
              delay: 0.35,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{
              scale: titleScale,
            }}
            className="
              origin-left
              text-[54px]
              font-light
              leading-[0.92]
              tracking-[-0.055em]
              text-white
              sm:text-[78px]
              md:text-[96px]
              lg:text-[118px]
            "
          >
            Capital
            <br />

            <span
              className="
                font-semibold
                text-[#D4AF37]
              "
            >
              With Purpose.
            </span>
          </motion.h1>

          {/* =====================================
              DESCRIPTION
          ===================================== */}

          <motion.p
            style={{
              opacity: subtitleOpacity,
            }}
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.65,
            }}
            className="
              mt-8
              max-w-xl
              text-base
              leading-7
              text-white/70
              sm:text-lg
              sm:leading-8
            "
          >
            Bellis Capital combines disciplined investment
            strategies, long-term thinking, and intelligent
            capital allocation to help build lasting value.
          </motion.p>

          {/* =====================================
              BUTTONS
          ===================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.8,
            }}
            className="
              mt-9
              flex
              flex-col
              gap-3
              sm:flex-row
              sm:items-center
            "
          >
            {/* Primary */}
            <Link
              href="/contact"
              className="
                group
                inline-flex
                h-14
                items-center
                justify-center
                gap-3
                rounded-full
                bg-[#D4AF37]
                px-7
                text-sm
                font-semibold
                text-[#071C16]
                transition-all
                duration-300
                hover:bg-[#E5C65A]
                hover:shadow-[0_0_40px_rgba(212,175,55,0.25)]
              "
            >
              Explore Our Approach

              <ArrowUpRight
                className="
                  h-4
                  w-4
                  transition-transform
                  duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </Link>

            {/* Secondary */}
            <Link
              href="/about"
              className="
                group
                inline-flex
                h-14
                items-center
                justify-center
                gap-3
                rounded-full
                border
                border-white/20
                bg-white/5
                px-7
                text-sm
                font-medium
                text-white
                backdrop-blur-md
                transition-all
                duration-300
                hover:border-[#D4AF37]/50
                hover:bg-white/10
              "
            >
              Discover Bellis

              <span
                className="
                  h-1
                  w-1
                  rounded-full
                  bg-[#D4AF37]
                "
              />
            </Link>
          </motion.div>

          {/* =====================================
              TRUST INDICATOR
          ===================================== */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 1,
              delay: 1.1,
            }}
            className="
              mt-9
              flex
              items-center
              gap-3
              text-xs
              text-white/50
            "
          >
            <ShieldCheck
              className="h-4 w-4 text-[#D4AF37]"
            />

            <span>
              Disciplined. Transparent. Long-term focused.
            </span>
          </motion.div>
        </div>
      </motion.div>

      {/* =========================================
          BOTTOM SCROLL INDICATOR
      ========================================= */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
          delay: 1.4,
        }}
        className="
          absolute
          bottom-8
          left-1/2
          z-20
          -translate-x-1/2
        "
      >
        <motion.div
          animate={{
            y: [0, 7, 0],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            flex
            flex-col
            items-center
            gap-2
          "
        >
          <span
            className="
              text-[9px]
              uppercase
              tracking-[0.3em]
              text-white/40
            "
          >
            Scroll
          </span>

          <ArrowDown
            className="
              h-4
              w-4
              text-[#D4AF37]
            "
          />
        </motion.div>
      </motion.div>

      {/* =========================================
          BOTTOM GRADIENT
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          right-0
          z-10
          h-32
          bg-gradient-to-t
          from-[#071C16]
          to-transparent
        "
      />
    </section>
  );
}
