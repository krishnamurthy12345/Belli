"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Menu, X } from "lucide-react";
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
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when pathname changes
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`
        fixed
        left-0
        right-0
        top-0
        z-50
        transition-all
        duration-300
        ${
          scrolled
            ? "border-b border-white/10 bg-[var(--color-secondary)] py-3 shadow-xl shadow-black/20 backdrop-blur-xl"
            : "border-b border-white/5 bg-[var(--color-secondary)] py-4 backdrop-blur-md"
        }
      `}
    >
      <div
        className="
          mx-auto
          flex
          max-w-7xl
          items-center
          justify-between
          px-6
          sm:px-10
          lg:px-16
        "
      >
        {/* =================================================
            LOGO
        ================================================= */}
        <Link
          href="/"
          className="group flex items-center gap-3.5"
          aria-label="Bellis Capital Home"
        >
          <div
            className="
              relative
              flex
              h-11
              w-11
              items-center
              justify-center
              overflow-hidden
              rounded-xl
              border
              border-[#EF1454]/30
              bg-white
              p-1
              shadow-[0_4px_20px_rgba(0,0,0,0.25)]
              transition-all
              duration-300
              group-hover:scale-105
              group-hover:border-[#EF1454]/70
            "
          >
            <img
              src="/images/bellis-logo.jpeg"
              alt="Bellis Capital Logo"
              className="h-full w-full object-contain"
            />
          </div>

          <div>
            <div
              className="
                text-base
                font-bold
                tracking-tight
                text-white
                transition-colors
                duration-300
                group-hover:text-[#EF1454]
                sm:text-lg
              "
            >
              BELLIS{" "}
              <span className="text-[#EF1454]">
                CAPITAL
              </span>
            </div>

            <div
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-[0.22em]
                text-[var(--color-primary)]
              "
            >
              Wealth and Health
            </div>
          </div>
        </Link>

        {/* =================================================
            DESKTOP NAVIGATION LINKS
        ================================================= */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  relative
                  rounded-full
                  px-5
                  py-2
                  text-sm
                  font-semibold
                  transition-all
                  duration-300
                  ${
                    active
                      ? "bg-white/10 text-white shadow-inner"
                      : "text-white/80 hover:bg-white/5 hover:text-white"
                  }
                `}
              >
                {item.label}

                {active && (
                  <motion.span
                    layoutId="navbar-active-indicator"
                    className="absolute bottom-1 left-5 right-5 h-[2px] rounded-full bg-[#EF1454]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* =================================================
            DESKTOP CTA BUTTON
        ================================================= */}
        <div className="hidden items-center gap-4 md:flex">
          <Link
              href="/contact#contact-details"            className="
              group
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-[#EF1454]
              px-5
              py-2.5
              text-xs
              font-bold
              uppercase
              tracking-[0.12em]
              text-white
              shadow-lg
              shadow-[#EF1454]/25
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#FF477A]
              hover:shadow-[#EF1454]/40
            "
          >
            <span>Get Started</span>
            <ArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* =================================================
            MOBILE HAMBURGER BUTTON
        ================================================= */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
          className="
            flex
            h-11
            w-11
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
            md:hidden
          "
        >
          {mobileOpen ? (
            <X size={22} className="text-[#EF1454]" />
          ) : (
            <Menu size={22} />
          )}
        </button>
      </div>

      {/* =================================================
          MOBILE MENU ACCORDION
      ================================================= */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="
              overflow-hidden
              border-b
              border-white/10
              bg-[#0B1D31]/98
              px-6
              pb-6
              pt-2
              backdrop-blur-2xl
              md:hidden
            "
          >
            <div className="space-y-2 pt-2">
              {navItems.map((item) => {
                const active = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`
                      flex
                      h-12
                      w-full
                      items-center
                      justify-between
                      rounded-xl
                      px-4
                      text-sm
                      font-semibold
                      transition-all
                      duration-300
                      ${
                        active
                          ? "bg-[#EF1454]/15 text-[#EF1454]"
                          : "text-white/80 hover:bg-white/5 hover:text-white"
                      }
                    `}
                  >
                    <span>{item.label}</span>
                    <ArrowRight
                      size={16}
                      className={active ? "text-[#EF1454]" : "text-white/30"}
                    />
                  </Link>
                );
              })}
            </div>

            <div className="my-4 h-px bg-white/10" />

            <Link
              href="/contact#contact-details"
              onClick={() => setMobileOpen(false)}
              className="
                flex
                h-12
                w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-[#EF1454]
                text-sm
                font-bold
                text-white
                shadow-lg
                shadow-[#EF1454]/30
                transition-all
                duration-300
                hover:bg-[#FF477A]
              "
            >
              <span>Get Started</span>
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
