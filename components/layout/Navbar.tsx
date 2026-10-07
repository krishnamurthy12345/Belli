"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowRight,
  ChevronDown,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* =====================================================
          CENTER DROPDOWN / MOBILE TOGGLE BUTTON
      ====================================================== */}

      <motion.button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        initial={{
          opacity: 0,
          y: -20,
          scale: 0.9,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.5,
          delay: 0.2,
        }}
        className="
          fixed
          left-1/2
          top-5
          z-[100]
          -translate-x-1/2

          flex
          items-center
          justify-center

          h-14
          w-24

          rounded-full
          border
          border-emerald-400/30
          bg-[#10231C]/95

          text-sm
          font-semibold
          tracking-wide
          text-white

          shadow-2xl
          shadow-black/30

          backdrop-blur-xl

          transition-all
          duration-300

          hover:scale-105
          hover:border-emerald-400/60
          hover:bg-[#16382B]
        "
      >
        {open ? (
          <X
            size={20}
            className="text-emerald-400"
          />
        ) : (
          <ChevronDown
            size={20}
            className="text-emerald-400"
          />
        )}

        {/* Emerald glow */}
       
      </motion.button>

      {/* =====================================================
          DESKTOP NAVBAR DROPDOWN
          IMPORTANT:
          hidden on mobile
          visible from md and above
      ====================================================== */}

      <AnimatePresence>
        {open && (
          <motion.header
            initial={{
              opacity: 0,
              y: -30,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -30,
              scale: 0.96,
            }}
            transition={{
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              fixed
              left-4
              right-4
              top-[82px]
              z-[90]

              hidden
              md:block

              md:left-8
              md:right-8
            "
          >
            <nav
              className="
                mx-auto
                flex
                h-[68px]
                max-w-7xl
                items-center
                justify-between

                rounded-2xl
                border
                border-white/10

                bg-[#10231C]/95

                px-4
                shadow-2xl
                shadow-black/20

                backdrop-blur-2xl

                sm:px-6
              "
            >
              {/* =================================================
                  LOGO
              ================================================= */}

              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="
                  group
                  flex
                  items-center
                  gap-3
                "
              >
                <div
                  className="
                    relative
                    h-12
                    w-12
                    shrink-0
                    overflow-hidden
                    rounded-xl
                    bg-white
                  "
                >
                  <img
                    src="/images/bellis-logo.jpeg"
                    alt="Bellis Capital"
                    className="
                      h-full
                      w-full
                      object-cover
                    "
                  />
                </div>

                <div>
                  <p
                    className="
                      font-serif
                      text-[15px]
                      font-bold
                      tracking-tight
                      text-[#dda115]
                    "
                  >
                    Bellis{" "}
                    <span className="text-[#dda115]">
                      Capital
                    </span>
                  </p>

                  <p
                    className="
                      hidden
                      text-[8px]
                      uppercase
                      tracking-[0.2em]
                      text-white
                      sm:block
                    "
                  >
                    Wealth & Health
                  </p>
                </div>
              </Link>

              {/* =================================================
                  DESKTOP NAVIGATION
              ================================================= */}

              <div className="flex items-center gap-2">
                {navItems.map((item) => {
                  const active = pathname === item.href;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`
                        relative
                        rounded-xl
                        px-4
                        py-2
                        text-sm
                        font-medium
                        transition-all
                        duration-300

                        ${
                          active
                            ? "bg-emerald-400/10 text-emerald-300"
                            : "text-white/60 hover:bg-white/5 hover:text-white"
                        }
                      `}
                    >
                      {item.label}

                      {active && (
                        <motion.span
                          layoutId="active-nav"
                          className="
                            absolute
                            bottom-0
                            left-4
                            right-4
                            h-[2px]
                            rounded-full
                            bg-emerald-400
                          "
                        />
                      )}
                    </Link>
                  );
                })}
              </div>

              {/* =================================================
                  DESKTOP CLOSE
              ================================================= */}

              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close navigation"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/10
                  bg-white/5
                  text-white
                  transition-all
                  duration-300
                  hover:bg-white/10
                "
              >
                <X size={20} />
              </button>
            </nav>
          </motion.header>
        )}
      </AnimatePresence>

      {/* =====================================================
          MOBILE NAVIGATION
          Only visible below md
      ====================================================== */}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: -15,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -15,
              scale: 0.98,
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
            className="
              fixed
              left-4
              right-4
              top-[82px]
              z-[95]

              overflow-hidden

              rounded-2xl
              border
              border-white/10

              bg-[#10231C]/98

              p-4

              shadow-[0_25px_80px_rgba(0,0,0,0.45)]

              backdrop-blur-2xl

              md:hidden
            "
          >
            {/* =================================================
                MOBILE LINKS
            ================================================= */}

            <div className="space-y-2">
              {navItems.map((item) => {
                const active = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`
                      group
                      flex
                      h-14
                      w-full
                      items-center
                      justify-between
                      rounded-xl
                      px-5

                      text-base
                      font-semibold

                      transition-all
                      duration-300

                      ${
                        active
                          ? "bg-emerald-400/10 text-emerald-300"
                          : "text-white/70 hover:bg-white/5 hover:text-white"
                      }
                    `}
                  >
                    <span>
                      {item.label}
                    </span>

                    <ArrowRight
                      size={18}
                      className={`
                        transition-all
                        duration-300

                        ${
                          active
                            ? "text-emerald-400"
                            : "text-white/30 group-hover:translate-x-1 group-hover:text-white"
                        }
                      `}
                    />
                  </Link>
                );
              })}
            </div>

            {/* =================================================
                DIVIDER
            ================================================= */}

            <div className="my-4 h-px bg-white/10" />

            {/* =================================================
                MOBILE CTA
            ================================================= */}

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="
                flex
                h-14
                w-full
                items-center
                justify-center
                gap-3

                rounded-xl

                bg-emerald-400

                text-base
                font-bold
                text-[#10231C]

                transition-all
                duration-300

                hover:bg-emerald-300
                active:scale-[0.98]
              "
            >
              <span>
                Start Your Journey
              </span>

              <ArrowRight size={19} />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}