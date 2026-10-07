"use client";

import { motion } from "motion/react";
import {
  ArrowUpRight,
  Check,
  Compass,
  HandCoins,
  ShieldCheck,
  Target,
} from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "Goal Focused",
    description:
      "Investment conversations start with your goals, timeline and priorities.",
  },
  {
    icon: Compass,
    title: "Clear Guidance",
    description:
      "Understand your options before making important investment decisions.",
  },
  {
    icon: ShieldCheck,
    title: "Long-Term Thinking",
    description:
      "Build an investment approach designed around consistency and discipline.",
  },
  {
    icon: HandCoins,
    title: "Personal Approach",
    description:
      "Investment planning can be structured around your individual financial journey.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding overflow-hidden bg-white">
      <div className="container-width">
        <div className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          {/* LEFT VISUAL */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative min-h-[520px] overflow-hidden rounded-[36px] bg-[#10231C] p-7 sm:p-10">
              {/* Decorative circles */}
              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-32 -top-32 h-[360px] w-[360px] rounded-full border border-[#D4AF37]/20"
              />

              <motion.div
                animate={{
                  scale: [1, 1.12, 1],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full border border-white/10"
              />

              {/* Grid */}
              <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                  backgroundImage:
                    "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
                  backgroundSize: "42px 42px",
                }}
              />

              <div className="relative flex h-full min-h-[460px] flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#D4AF37]" />

                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                      Your Financial Journey
                    </span>
                  </div>

                  <h3 className="mt-7 max-w-sm text-4xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-5xl">
                    Plan today.
                    <br />
                    <span className="text-[#D4AF37]">
                      Grow tomorrow.
                    </span>
                  </h3>
                </div>

                {/* Journey visual */}
                <div className="relative mt-12">
                  <div className="absolute left-[18px] top-0 h-full w-px bg-white/10" />

                  {[
                    "Understand",
                    "Plan",
                    "Invest",
                    "Review",
                  ].map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.3 + index * 0.12,
                        duration: 0.5,
                      }}
                      className="relative mb-5 flex items-center gap-5 last:mb-0"
                    >
                      <div className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-[#10231C]">
                        <div className="h-2.5 w-2.5 rounded-full bg-[#D4AF37]" />
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-white">
                          {item}
                        </p>

                        <p className="mt-0.5 text-xs text-white/40">
                          Step {index + 1}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom badge */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.8,
                    duration: 0.5,
                  }}
                  className="mt-10 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <div>
                    <p className="text-xs text-white/40">
                      Investment mindset
                    </p>

                    <p className="mt-1 text-sm font-semibold text-white">
                      Consistency over complexity
                    </p>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D4AF37] text-[#10231C]">
                    <ArrowUpRight size={18} />
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: [0, -8, 0],
              }}
              viewport={{ once: true }}
              transition={{
                opacity: {
                  duration: 0.6,
                  delay: 0.6,
                },
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="absolute -bottom-5 -right-4 rounded-2xl border border-[#E4EBE7] bg-white p-4 shadow-xl sm:-right-6"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF4EE] text-[#0B3D2E]">
                  <Check size={18} />
                </div>

                <div>
                  <p className="text-xs text-[#697971]">
                    Approach
                  </p>

                  <p className="text-sm font-bold text-[#10231C]">
                    Goal-oriented
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="gold-line mb-5" />

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8D7125]">
                Why Bellis Capital
              </p>

              <h2 className="mt-4 max-w-xl text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#10231C] sm:text-5xl">
                Investing is not just about numbers.
                <span className="gradient-text">
                  {" "}
                  It is about your goals.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-[#697971]">
                A thoughtful investment approach begins by understanding
                where you are today and where you want to be tomorrow.
                The right strategy should fit your goals, timeframe and
                financial priorities.
              </p>
            </motion.div>

            {/* Benefits */}
            <div className="mt-10">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;

                return (
                  <motion.div
                    key={benefit.title}
                    initial={{
                      opacity: 0,
                      x: 25,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.2,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    className="group flex gap-5 border-b border-[#E4EBE7] py-6 first:border-t"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F0F5F2] text-[#0B3D2E] transition-all duration-300 group-hover:bg-[#0B3D2E] group-hover:text-white">
                      <Icon size={19} />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-base font-semibold text-[#10231C]">
                        {benefit.title}
                      </h3>

                      <p className="mt-1.5 max-w-lg text-sm leading-6 text-[#697971]">
                        {benefit.description}
                      </p>
                    </div>

                    <div className="hidden h-8 w-8 shrink-0 items-center justify-center rounded-full text-[#B08D28] opacity-0 transition-all duration-300 group-hover:opacity-100 sm:flex">
                      <ArrowUpRight size={17} />
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.5,
              }}
              className="mt-8"
            >
              <a
                href="/about"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-[#0B3D2E]"
              >
                Discover our approach
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}