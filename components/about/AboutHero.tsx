"use client";

import dynamic from "next/dynamic";
import { motion } from "motion/react";
import {
  ArrowDown,
  Compass,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const AboutScene = dynamic(
  () => import("@/components/about/AboutScene"),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[420px] items-center justify-center sm:h-[520px]">
        <div className="h-24 w-24 rounded-full bg-[#D4AF37]/10 blur-2xl animate-pulse" />
      </div>
    ),
  }
);

const principles = [
  {
    icon: Compass,
    label: "Purpose",
    text: "Invest around real financial goals.",
  },
  {
    icon: ShieldCheck,
    label: "Discipline",
    text: "Build decisions around long-term thinking.",
  },
  {
    icon: Sparkles,
    label: "Clarity",
    text: "Make investing easier to understand.",
  },
];

export default function AboutHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0B3D2E] pt-24">
      <div className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[#1B5E48]/30 blur-[130px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#D4AF37]/10 blur-[140px]" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      <div className="container-width relative">
        <div className="grid min-h-[calc(100vh-96px)] items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative z-10 py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-7 flex items-center gap-3"
            >
              <span className="h-[2px] w-10 bg-[#D4AF37]" />

              <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#D4AF37]">
                About Bellis Capital
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.08 }}
              className="max-w-3xl text-5xl font-bold leading-[0.98] tracking-[-0.045em] text-white sm:text-6xl lg:text-[72px]"
            >
              Wealth is not
              <br />
              <span className="text-[#D4AF37]">
                just a number.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-7 max-w-xl text-base leading-8 text-white/60 sm:text-lg"
            >
              It is the freedom to make choices, the confidence
              to plan ahead, and the discipline to stay invested
              through changing markets.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.32 }}
              className="mt-10 grid max-w-xl gap-3 sm:grid-cols-3"
            >
              {principles.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-white/[0.055] p-4 backdrop-blur-xl"
                  >
                    <Icon
                      size={18}
                      className="text-[#D4AF37]"
                    />

                    <p className="mt-4 text-xs font-bold uppercase tracking-[0.12em] text-white">
                      {item.label}
                    </p>

                    <p className="mt-2 text-xs leading-5 text-white/40">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </motion.div>
          </div>

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.88,
              rotate: -3,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0,
            }}
            transition={{
              duration: 1.1,
              delay: 0.15,
            }}
            className="relative"
          >
            <AboutScene />

            {/* Bellis Capital Center Branding */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.55,
              }}
              className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center"
            >
              <div className="flex h-[150px] w-[150px] flex-col items-center justify-center rounded-full border border-[#D4AF37]/40 bg-[#10231C]/80 shadow-[0_0_70px_rgba(212,175,55,0.15)] backdrop-blur-xl sm:h-[190px] sm:w-[190px]">

                <div className="absolute inset-4 rounded-full bg-[#0B3D2E]/80 shadow-inner" />

                <div className="relative z-10 text-center">
                  <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#D4AF37]">
                    Bellis
                  </p>

                  <p className="mt-2 font-serif text-3xl italic text-white sm:text-4xl">
                    Capital
                  </p>

                  <div className="mx-auto mt-4 h-px w-10 bg-[#D4AF37]" />

                  <p className="mt-3 text-[8px] uppercase tracking-[0.22em] text-white/40">
                    Wealth • Strategy
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Existing Philosophy Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.9,
              }}
              className="absolute right-0 top-[16%] hidden rounded-2xl border border-white/10 bg-[#10231C]/75 px-5 py-4 shadow-2xl backdrop-blur-xl sm:block"
            >
              <p className="text-[9px] uppercase tracking-[0.2em] text-white/35">
                Our Philosophy
              </p>

              <p className="mt-1 text-sm font-semibold text-white">
                Strategy over noise.
              </p>
            </motion.div>

            {/* Existing Long-Term Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 1.05,
              }}
              className="absolute bottom-[12%] left-0 hidden rounded-2xl border border-white/10 bg-white/[0.07] px-5 py-4 shadow-2xl backdrop-blur-xl sm:block"
            >
              <p className="text-[9px] uppercase tracking-[0.2em] text-white/35">
                Long-Term Thinking
              </p>

              <p className="mt-1 text-sm font-semibold text-white">
                Small decisions. Compounded over time.
              </p>
            </motion.div>
          </motion.div>
        </div>

        <motion.a
          href="#story"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/30 lg:flex"
        >
          <span className="text-[10px] uppercase tracking-[0.25em]">
            Explore our story
          </span>

          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          >
            <ArrowDown
              size={15}
              className="text-[#D4AF37]"
            />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
}