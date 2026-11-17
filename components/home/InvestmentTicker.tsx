"use client";

import { motion } from "motion/react";

const items = [
  "LONG-TERM THINKING",
  "GOAL-BASED INVESTING",
  "DISCIPLINE",
  "FINANCIAL CLARITY",
  "WEALTH STRATEGY",
  "CONSISTENCY",
];

export default function InvestmentTicker() {
  const content = [...items, ...items];

  return (
    <section className="overflow-hidden border-y border-[var(--color-primary)]/20 bg-[var(--color-dark)] py-5">
      <motion.div
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex w-max items-center"
      >
        {content.map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="flex items-center"
          >
            <span className="px-8 text-[11px] font-bold tracking-[0.22em] text-white/45 sm:px-12">
              {item}
            </span>

            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]" />
          </div>
        ))}
      </motion.div>
    </section>
  );
}