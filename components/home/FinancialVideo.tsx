"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export default function FinancialVideo() {
  return (
    <section className="relative overflow-hidden bg-[#f4f9f7] py-24">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-[#1B5E48]/30 blur-[140px]" />

      <div className="container-width relative">
        <div className="grid min-h-[560px] overflow-hidden rounded-[32px] border border-white/10 bg-[#0B3D2E] lg:grid-cols-2">

          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}
          <div className="relative flex items-center px-7 py-14 sm:px-12 lg:px-16">

            {/* Decorative glow */}
            <div className="pointer-events-none absolute -left-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#D4AF37]/5 blur-[100px]" />

            {/* Grid */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
              <div
                className="h-full w-full"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
                  backgroundSize: "65px 65px",
                }}
              />
            </div>

            <motion.div
              initial={{
                opacity: 0,
                x: -30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              className="relative z-10 max-w-xl"
            >
              {/* Eyebrow */}
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[#D4AF37]" />

                <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#D4AF37]">
                  Market Intelligence
                </span>
              </div>

              {/* Heading */}
              <h2 className="mt-6 text-4xl font-bold leading-[1.03] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                Read the Market.
                <br />
                <span className="text-[#D4AF37]">
                  Invest with Clarity.
                </span>
              </h2>

              {/* Description */}
              <p className="mt-6 max-w-lg text-sm leading-7 text-white/55 sm:text-base">
                Understand market movements and investment trends through
                a clearer view of financial data, helping you make informed
                decisions with confidence.
              </p>

              {/* Bottom branding */}
              <div className="mt-9 flex items-center gap-4">
                <div className="h-px w-12 bg-[#D4AF37]/60" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/40">
                  Bellis Capital
                </span>
              </div>
            </motion.div>
          </div>

          {/* =====================================================
              RIGHT VIDEO
          ===================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.96,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
            }}
            className="relative min-h-[380px] overflow-hidden lg:min-h-full"
          >
            {/* Video */}
            <video
              src="/videos/chart.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Very subtle video tint */}
            <div className="pointer-events-none absolute inset-0 bg-[#0B3D2E]/10" />

            {/* Right-side fade */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0B3D2E]/40 to-transparent" />

            {/* Video border */}
            <div className="pointer-events-none absolute inset-5 rounded-[24px] border border-white/10" />

            {/* Video label */}
            <div className="absolute bottom-7 left-7 flex items-center gap-3 rounded-full border border-white/10 bg-[#071C16]/70 px-4 py-2.5 backdrop-blur-xl">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#D4AF37]" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/70">
                Market Overview
              </span>
            </div>

            {/* Arrow */}
            <div className="absolute right-7 top-7 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-[#071C16]/50 text-[#D4AF37] backdrop-blur-xl">
              <ArrowUpRight size={17} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}