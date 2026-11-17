"use client";

import { motion } from "motion/react";
import {
  BarChart3,
  Layers3,
  ShieldCheck,
  Timer,
} from "lucide-react";

const philosophy = [
  {
    number: "01",
    icon: TargetIcon,
    title: "Start with the Goal",
    description:
      "Understand the purpose behind the investment before deciding where the money should go.",
  },
  {
    number: "02",
    icon: Layers3,
    title: "Build with Structure",
    description:
      "Create an investment approach that considers time horizon, priorities and diversification.",
  },
  {
    number: "03",
    icon: Timer,
    title: "Think Long Term",
    description:
      "Give investments enough time and avoid allowing short-term noise to drive every decision.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Review & Adapt",
    description:
      "Financial circumstances change. A thoughtful plan should be reviewed and adjusted when needed.",
  },
];

function TargetIcon({ size = 20 }: { size?: number }) {
  return <BarChart3 size={size} />;
}

export default function InvestmentPhilosophy() {
  return (
    <section className="section-padding overflow-hidden bg-[var(--color-light)]">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="gold-line" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">
              Our Philosophy
            </span>

            <span className="gold-line" />
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-[var(--color-dark)] sm:text-5xl">
            A framework built for{" "}
            <span className="gradient-text">the long term.</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-[var(--text-color-muted)]">
            We believe a strong investment process starts before the first
            investment is made.
          </p>
        </motion.div>

        <div className="relative mt-16">
          {/* Connecting line */}
          <div className="absolute left-[10%] right-[10%] top-8 hidden h-px bg-[var(--border-color)] lg:block" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {philosophy.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.1,
                  }}
                  className="relative"
                >
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-[var(--border-color)] bg-white text-[var(--color-dark)] shadow-sm">
                    <Icon size={22} />
                  </div>

                  <p className="mt-7 text-xs font-bold tracking-[0.15em] text-[var(--color-primary)]">
                    {item.number}
                  </p>

                  <h3 className="mt-2 text-xl font-bold text-[var(--color-dark)]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[var(--text-color-muted)]">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}