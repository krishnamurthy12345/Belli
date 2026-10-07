"use client";

import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import Link from "next/link";
import SIPCalculator from "@/components/calculator/SIPCalculator";

const benefits = [
  "Start with an amount that suits you",
  "Build disciplined investing habits",
  "Benefit from long-term compounding",
  "Stay focused on your financial goals",
];

export default function SIPSection() {
  return (
    <section className="section-padding overflow-hidden bg-[#F8FAF8]">
      <div className="container-width">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="gold-line" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B08D28]">
                Start Small. Think Big.
              </span>
            </div>

            <h2 className="max-w-xl text-4xl font-bold leading-[1.08] tracking-tight text-[#10231C] sm:text-5xl">
              Make investing a{" "}
              <span className="gradient-text">monthly habit.</span>
            </h2>

            <p className="mt-6 max-w-lg text-base leading-7 text-[#53635C] sm:text-lg">
              A Systematic Investment Plan can help you invest consistently
              over time while keeping your financial goals in focus.
            </p>

            <div className="mt-8 space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.08,
                  }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    size={19}
                    className="shrink-0 text-[#0B3D2E]"
                  />

                  <span className="text-sm font-medium text-[#53635C]">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>

            <Link
              href="/sip"
              className="group mt-9 inline-flex items-center gap-2 rounded-full bg-[#0B3D2E] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1B5E48] hover:shadow-lg hover:shadow-[#0B3D2E]/15"
            >
              Explore SIP Investing
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <div className="mt-7 flex items-center gap-2 text-xs text-[#8A9690]">
              <Sparkles size={14} className="text-[#B08D28]" />
              <span>Designed for consistent, goal-focused investing</span>
            </div>
          </motion.div>

          {/* Calculator */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <SIPCalculator />
          </motion.div>
        </div>
      </div>
    </section>
  );
}