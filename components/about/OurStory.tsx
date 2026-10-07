"use client";

import { motion } from "motion/react";
import Image from "next/image";
import {
  ArrowUpRight,
  CircleDot,
  LineChart,
  Target,
} from "lucide-react";

const milestones = [
  {
    number: "01",
    title: "Understand",
    text: "Every financial journey starts with understanding where you are and where you want to go.",
    icon: Target,
  },
  {
    number: "02",
    title: "Design",
    text: "A thoughtful strategy connects your goals with an investment approach built for the long term.",
    icon: LineChart,
  },
  {
    number: "03",
    title: "Evolve",
    text: "As your goals and circumstances change, your strategy should have room to evolve with you.",
    icon: CircleDot,
  },
];

export default function OurStory() {
  return (
    <section
      id="story"
      className="section-padding relative overflow-hidden bg-[#F8FAF8]"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute right-[-200px] top-20 h-[450px] w-[450px] rounded-full bg-[#D4AF37]/[0.06] blur-[120px]" />

      <div className="pointer-events-none absolute bottom-20 left-[-180px] h-[400px] w-[400px] rounded-full bg-[#0B3D2E]/[0.05] blur-[120px]" />

      <div className="container-width relative z-10">
        {/* =====================================================
            FOUNDER INTRO
        ===================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mb-24 overflow-hidden rounded-[36px] border border-[#DDE5E0] bg-white shadow-[0_25px_80px_rgba(16,35,28,0.07)]"
        >
          <div className="grid items-center lg:grid-cols-[0.8fr_1.2fr]">
            {/* =================================================
                FOUNDER IMAGE
            ================================================= */}

            <div className="relative min-h-[420px] overflow-hidden rounded-[30px] border-2 border-[#D4AF37]/70 bg-[#0B3D2E] p-2 shadow-[0_25px_70px_rgba(16,35,28,0.18)] sm:min-h-[500px]">
              {/* Inner Image Frame Container */}
              <div className="relative h-full min-h-[404px] w-full overflow-hidden rounded-[24px] sm:min-h-[484px]">

                {/* Base Image */}
                <Image
                  src="/images/rajasekar.jpeg"
                  alt="Raja Sekar - Founder of Bellis Capital"
                  fill
                  priority
                  className="object-cover object-center transition-transform duration-[1200ms] hover:scale-105"
                />

                {/* Dark Gradient Overlay for Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#071C16]/90 via-[#071C16]/25 to-[#071C16]/10" />

                {/* Inner Gold Inset Border Line (All 4 Sides) */}
                <div className="pointer-events-none absolute inset-4 z-10 rounded-[18px] border border-[#D4AF37]/50" />

                {/* Corner Decorative Accents */}
                <div className="pointer-events-none absolute left-6 top-6 z-20 h-6 w-6 border-l-2 border-t-2 border-[#D4AF37]" />
                <div className="pointer-events-none absolute bottom-6 right-6 z-20 h-6 w-6 border-b-2 border-r-2 border-[#D4AF37]" />

                {/* Gold Vertical Accent Line */}
                <div className="pointer-events-none absolute bottom-12 left-10 top-12 z-20 w-[2px] bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent" />

                {/* Founder Name & Info Overlay */}
                <div className="absolute bottom-8 left-14 z-20">
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D4AF37]">
                    Bellis Capital
                  </p>

                  <h3 className="mt-2 font-serif text-3xl text-white">
                    Raja Sekar
                  </h3>

                  <p className="mt-1 text-sm text-white/70">
                    Founder &amp; Wealth Strategist
                  </p>
                </div>
              </div>
            </div>
            {/* =================================================
                FOUNDER INTRODUCTION
            ================================================= */}
            <div className="relative p-8 sm:p-12 lg:p-16">
              <div className="absolute right-10 top-10 h-20 w-20 rounded-full bg-[#D4AF37]/[0.08] blur-2xl" />

              <div className="relative">
                <div className="gold-line" />

                <p className="mt-5 text-xs font-bold uppercase tracking-[0.22em] text-[#8D7125]">
                  The Founder
                </p>

                <h2 className="mt-4 max-w-xl font-serif text-4xl leading-[1.05] tracking-[-0.03em] text-[#10231C] sm:text-5xl">
                  Building wealth with
                  <br />
                  <span className="italic text-[#0B3D2E]">
                    purpose and perspective.
                  </span>
                </h2>

                <p className="mt-7 max-w-xl text-base leading-8 text-[#53635C]">
                  Raja Sekar is the founder of{" "}
                  <span className="font-semibold text-[#10231C]">
                    Bellis Capital
                  </span>
                  , focused on helping individuals and families bring greater
                  structure and clarity to their financial journey.
                </p>

                <p className="mt-5 max-w-xl text-base leading-8 text-[#53635C]">
                  His approach combines understanding, thoughtful investment
                  planning, and a long-term perspective to help clients make
                  financial decisions with greater confidence.
                </p>

                {/* Founder highlights */}
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-[#E4EBE7] bg-[#F8FAF8] p-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#8D7125]">
                      Focus
                    </p>

                    <p className="mt-2 text-sm font-semibold text-[#10231C]">
                      Long-Term Wealth
                    </p>
                  </div>

                  <div className="rounded-2xl border border-[#E4EBE7] bg-[#F8FAF8] p-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#8D7125]">
                      Philosophy
                    </p>

                    <p className="mt-2 text-sm font-semibold text-[#10231C]">
                      Clarity Over Complexity
                    </p>
                  </div>
                </div>

                {/* Social buttons */}
                <div className="mt-8 flex gap-3">
                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/raja-sekar-8a3a78113"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#E4EBE7] bg-white text-[#53635C] shadow-sm transition-all hover:bg-[#0B3D2E] hover:text-[#D4AF37]"
                  >
                    <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>

                  {/* YouTube */}
                  <a
                    href="https://www.youtube.com/@belliscapital"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Bellis Capital YouTube"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#E4EBE7] bg-white text-[#53635C] shadow-sm transition-all hover:bg-[#0B3D2E] hover:text-[#D4AF37]"
                  >
                    <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                </a>
              </div>
            </div>
          </div>
      </div>
    </motion.div>

        {/* =====================================================
            OUR STORY
        ===================================================== */}
  <div className="grid gap-16 lg:grid-cols-[0.75fr_1.25fr]">
    {/* LEFT */}
    <div className="lg:sticky lg:top-32 lg:h-fit">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className="gold-line" />

        <p className="mt-5 text-xs font-bold uppercase tracking-[0.22em] text-[#0B3D2E]/50">
          The Bellis Approach
        </p>

        <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-[#10231C] sm:text-5xl">
          From financial
          <br />
          <span className="text-[#0B3D2E]">
            complexity to clarity.
          </span>
        </h2>

        <p className="mt-6 max-w-md text-base leading-7 text-[#53635C]">
          Investing can feel complicated. Our approach is to bring
          structure to the journey so that decisions feel intentional
          rather than reactive.
        </p>

        {/* Founder quote */}
        <div className="mt-10 border-l-2 border-[#D4AF37] pl-5">
          <p className="font-serif text-xl italic leading-8 text-[#10231C]">
            “A good financial strategy should bring clarity to your
            decisions, not complexity.”
          </p>

          <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#8D7125]">
            — Raja Sekar
          </p>
        </div>
      </motion.div>
    </div>

    {/* RIGHT */}
    <div className="space-y-5">
      {milestones.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.number}
            initial={{
              opacity: 0,
              x: 35,
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
              duration: 0.65,
              delay: index * 0.12,
            }}
            className="group relative overflow-hidden rounded-[28px] border border-[#E4EBE7] bg-white p-7 shadow-[0_20px_60px_rgba(16,35,28,0.05)] transition-shadow duration-500 hover:shadow-[0_25px_70px_rgba(16,35,28,0.09)] sm:p-9"
          >
            {/* Gold glow */}
            <div className="absolute right-0 top-0 h-40 w-40 translate-x-1/3 -translate-y-1/3 rounded-full bg-[#D4AF37]/[0.07] blur-3xl transition-transform duration-700 group-hover:scale-150" />

            <div className="relative flex gap-6">
              {/* Icon */}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0B3D2E] text-[#D4AF37] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                <Icon size={20} />
              </div>

              <div className="flex-1">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
                      {item.number}
                    </p>

                    <h3 className="mt-2 text-2xl font-bold tracking-tight text-[#10231C]">
                      {item.title}
                    </h3>
                  </div>

                  <ArrowUpRight
                    size={20}
                    className="text-[#10231C]/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#D4AF37]"
                  />
                </div>

                <p className="mt-4 max-w-xl text-sm leading-7 text-[#53635C]">
                  {item.text}
                </p>
              </div>
            </div>

            {/* Bottom hover line */}
            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#D4AF37] transition-all duration-700 group-hover:w-full" />
          </motion.div>
        );
      })}
    </div>
  </div>
      </div >
    </section >
  );
}