"use client";

import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-light)] py-24 sm:py-28">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full border border-white/10" />

      <div className="pointer-events-none absolute -right-40 -bottom-40 h-[500px] w-[500px] rounded-full border border-[var(--color-secondary)]/20" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-primary)]/15 blur-3xl" />

      <div className="container-width relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border-color)] bg-[var(--color-secondary)]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-secondary)]">
            <Sparkles size={14} />
            Your next chapter starts here
          </div>

          <h2 className="text-4xl font-bold leading-tight tracking-tight text-[var(--text-color)] sm:text-5xl lg:text-6xl">
            Your financial goals deserve a{" "}
            <span className="text-[var(--color-primary)]">clear plan.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[var(--text-color-muted)] sm:text-lg">
            Whether you are starting your first SIP or planning for long-term
            wealth, take the next step with a strategy built around your goals.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-primary)] px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90 hover:shadow-xl hover:shadow-[var(--color-primary)]/20"
            >
              Start Your Investment Journey

              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/mutual-funds"
              className="inline-flex items-center justify-center rounded-full border border-[var(--border-color)] bg-white px-7 py-3.5 text-sm font-semibold text-[var(--text-color)] transition-all duration-300 hover:border-[var(--color-secondary)] hover:text-[var(--color-secondary)]"
            >
              Explore Investments
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}