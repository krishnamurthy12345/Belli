"use client";

import { motion } from "motion/react";
import {
  CheckCircle2,
  MessageCircle,
  ShieldCheck,
  UserRound,
} from "lucide-react";

const points = [
  {
    icon: UserRound,
    title: "Personal Approach",
    text: "Your financial goals and circumstances are different, so the conversation starts with understanding you.",
  },
  {
    icon: MessageCircle,
    title: "Clear Communication",
    text: "We aim to make investment conversations straightforward and easy to follow.",
  },
  {
    icon: ShieldCheck,
    title: "Responsible Thinking",
    text: "Investment decisions should consider risk, time horizon and the purpose behind the money.",
  },
];

export default function WhyBellis() {
  return (
    <section className="section-padding bg-white">
      <div className="container-width">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1fr] lg:gap-24">
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative min-h-[450px] overflow-hidden rounded-[32px] bg-[#0B3D2E] p-8 sm:p-10">
              <div className="absolute right-[-80px] top-[-80px] h-64 w-64 rounded-full border border-white/10" />
              <div className="absolute bottom-[-100px] left-[-100px] h-72 w-72 rounded-full border border-[#D4AF37]/10" />

              {/* Grid */}
              <div className="absolute inset-0 opacity-[0.06]">
                <div
                  className="h-full w-full"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
                    backgroundSize: "48px 48px",
                  }}
                />
              </div>

              <div className="relative flex h-full min-h-[370px] flex-col justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
                    The Bellis Approach
                  </p>

                  <h3 className="mt-6 max-w-sm text-3xl font-bold leading-tight text-white sm:text-4xl">
                    Simple principles.
                    <br />
                    Thoughtful decisions.
                  </h3>
                </div>

                <div className="space-y-3">
                  {[
                    "Understand",
                    "Plan",
                    "Invest",
                    "Review",
                  ].map((step, index) => (
                    <div
                      key={step}
                      className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                    >
                      <span className="text-xs font-bold text-[#D4AF37]">
                        0{index + 1}
                      </span>

                      <span className="text-sm font-medium text-white/75">
                        {step}
                      </span>

                      {index < 3 && (
                        <span className="ml-auto h-1.5 w-1.5 rounded-full bg-white/25" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="gold-line" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B08D28]">
                Why Bellis
              </span>
            </div>

            <h2 className="text-4xl font-bold leading-tight tracking-tight text-[#10231C] sm:text-5xl">
              More than an investment.
              <br />
              <span className="gradient-text">A relationship.</span>
            </h2>

            <p className="mt-6 text-base leading-7 text-[#53635C]">
              The right investment journey is not only about selecting
              products. It is about having a clear process and staying
              connected to the goals behind your money.
            </p>

            <div className="mt-8 space-y-6">
              {points.map((point) => {
                const Icon = point.icon;

                return (
                  <div
                    key={point.title}
                    className="flex gap-4"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EAF4EE] text-[#0B3D2E]">
                      <Icon size={20} />
                    </div>

                    <div>
                      <h3 className="font-bold text-[#10231C]">
                        {point.title}
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-[#697971]">
                        {point.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-9 flex items-center gap-2 text-sm font-medium text-[#0B3D2E]">
              <CheckCircle2 size={18} />
              Goal-focused. Transparent. Long-term.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}