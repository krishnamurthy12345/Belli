"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

const footerLinks = {
  Strategies: [
    { label: "Multi-Asset SIPs", href: "/sip" },
    { label: "Equity NFO Advisory", href: "/mutual-funds" },
    { label: "Fixed Income Alternatives", href: "/mutual-funds" },
    { label: "Portfolio Review & Rebalancing", href: "/about" },
  ],

  Education: [
    { label: "Mutual Fund Vlogs", href: "/#education" },
    { label: "Market Intelligence", href: "/#education" },
    { label: "SIP Return Calculators", href: "/calculators" },
    { label: "Economic Outlook", href: "/#education" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#10231C] text-white">
      {/* =====================================================
          BACKGROUND EFFECTS
      ====================================================== */}

      <div className="pointer-events-none absolute -left-40 top-20 h-[350px] w-[350px] rounded-full bg-[#0B3D2E]/40 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-[400px] w-[400px] rounded-full bg-[#D4AF37]/[0.05] blur-[130px]" />

      <div className="relative z-10 container-width">
        {/* =====================================================
            MAIN FOOTER
        ====================================================== */}

        <div className="grid gap-12 border-b border-white/10 py-16 md:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_0.8fr_1fr]">
          {/* =================================================
              BRAND
          ================================================= */}

          <div>
            <Link
              href="/"
              aria-label="Bellis Capital Home"
              className="group inline-flex items-center gap-3"
            >
              {/* Logo */}
              <div className="relative">
                <div className="absolute -inset-2 rounded-2xl bg-[#D4AF37]/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-[#D4AF37]/30 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-all duration-300 group-hover:border-[#D4AF37]/70">
                  <Image
                    src="/images/bellis-logo.jpeg"
                    alt="Bellis Capital Logo"
                    fill
                    priority
                    sizes="56px"
                    className="object-contain p-1.5 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Brand name */}
              <div>
                <div className="text-xl font-extrabold leading-none tracking-tight text-white transition-colors duration-300 group-hover:text-[#D4AF37]">
                  BELLI'S{" "}
                  <span className="font-serif font-normal italic text-[#D4AF37]">
                    CAPITAL
                  </span>
                </div>

                <div className="mt-1 text-[9px] font-bold uppercase tracking-[0.2em] text-white/45">
                  Wealth and Health
                </div>
              </div>
            </Link>

            {/* Description */}
            <p className="mt-6 max-w-sm text-sm leading-7 text-white/50">
              SEBI-aligned wealth management and mutual fund advisory dedicated
              to systematic capital compounding and disciplined portfolio
              management.
            </p>

            {/* Accent */}
            <div className="mt-7 flex items-center gap-2">
              <span className="h-[2px] w-10 rounded-full bg-[#D4AF37]" />

              <span className="h-2 w-2 animate-pulse rounded-full bg-[#D4AF37]" />
            </div>

            {/* CTA */}
            <Link
              href="/contact"
              className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#D4AF37]"
            >
              Start a conversation

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* =================================================
              STRATEGIES
          ================================================= */}

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
              Strategies
            </h3>

            <ul className="mt-6 space-y-4">
              {footerLinks.Strategies.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center text-sm text-white/50 transition-all duration-300 hover:translate-x-1 hover:text-white"
                  >
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* =================================================
              EDUCATION
          ================================================= */}

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
              Education
            </h3>

            <ul className="mt-6 space-y-4">
              {footerLinks.Education.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="inline-flex text-sm text-white/50 transition-all duration-300 hover:translate-x-1 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* =================================================
              DIRECT ADVISORY
          ================================================= */}

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
              Direct Advisory
            </h3>

            <div className="mt-6 space-y-5">
              {/* Email */}
              <a
                href="mailto:belliscapitalofficial@gmail.com"
                className="group flex items-start gap-3"
              >
                <Mail
                  size={17}
                  className="mt-0.5 shrink-0 text-[#D4AF37]"
                />

                <span className="break-all text-sm leading-6 text-white/50 transition-colors duration-300 group-hover:text-white">
                  belliscapitalofficial@gmail.com
                </span>
              </a>

              {/* Phone */}
              <a
                href="tel:+919488974620"
                className="group flex items-center gap-3"
              >
                <Phone
                  size={17}
                  className="shrink-0 text-[#D4AF37]"
                />

                <span className="text-sm text-white/50 transition-colors duration-300 group-hover:text-white">
                  +91 94889 74620
                </span>
              </a>

              {/* Location */}
              <div className="flex items-start gap-3">
                <MapPin
                  size={17}
                  className="mt-0.5 shrink-0 text-[#D4AF37]"
                />

                <p className="text-sm leading-6 text-white/50">
                  Coimbatore
                  <br />
                  Tamil Nadu, India
                </p>
              </div>

              {/* CTA */}
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 border-b border-[#D4AF37] pb-1 pt-2 text-xs font-bold uppercase tracking-[0.16em] text-[#D4AF37] transition-all duration-300 hover:border-white hover:text-white"
              >
                Book Advisory Call

                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* =====================================================
            DISCLAIMER
        ====================================================== */}

        <div className="border-b border-white/10 py-8">
          <div className="rounded-2xl border border-white/10 bg-[#0B3D2E]/40 p-5">
            <p className="text-justify text-[10px] leading-relaxed text-white/40">
              <span className="font-bold text-[#D4AF37]">Disclaimer:</span>{" "}
              Mutual Fund investments are subject to market risks, read all
              scheme-related documents carefully. The information provided on
              this website is for educational and informational purposes only
              and does not constitute financial advice. Past performance is not
              indicative of future results.
            </p>
          </div>
        </div>

        {/* =====================================================
            BOTTOM BAR
        ====================================================== */}

        <div className="flex flex-col gap-4 py-7 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Belli&apos;s Capital. All rights
            reserved.
          </p>

          <div className="flex gap-6">
            <Link
              href="#"
              className="transition-colors duration-300 hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="#"
              className="transition-colors duration-300 hover:text-white"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}