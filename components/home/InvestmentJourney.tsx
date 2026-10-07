"use client";

import { motion } from "motion/react";
import {
  ArrowRight,
  BarChart3,
  Compass,
  Eye,
  LineChart,
  Target,
} from "lucide-react";

const journeySteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand your current financial position, priorities and investment objectives.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Plan",
    description:
      "Create an investment approach based on your goals, timeframe and financial needs.",
    icon: Target,
  },
  {
    number: "03",
    title: "Invest",
    description:
      "Choose suitable investment solutions and build a disciplined investment habit.",
    icon: BarChart3,
  },
  {
    number: "04",
    title: "Track",
    description:
      "Review your investments periodically and stay aligned with your financial goals.",
    icon: Eye,
  },
  {
    number: "05",
    title: "Grow",
    description:
      "Stay consistent, make informed adjustments and work towards your long-term goals.",
    icon: LineChart,
  },
];

export default function InvestmentJourney() {
  return (
    <section id="journey" className="section-padding overflow-hidden bg-[#F8FAF8]">
      <div className="container-width">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="gold-line mx-auto mb-5" />

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8D7125]">
              Your Investment Journey
            </p>

            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#10231C] sm:text-5xl">
              From where you are
              <br />
              to where you want to be.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#697971]">
              Building wealth is a journey. A clear process can help you
              stay focused, disciplined and connected to the goals that
              matter to you.
            </p>
          </motion.div>
        </div>

        {/* Journey */}
        <div className="relative mt-16">
          {/* Desktop connecting line */}
          <div className="absolute left-[10%] right-[10%] top-[42px] hidden h-px bg-[#D7E1DB] lg:block">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
              }}
              className="h-full origin-left bg-[#B08D28]"
            />
          </div>

          {/* Mobile connecting line */}
          <div className="absolute bottom-8 left-[25px] top-8 w-px bg-[#D7E1DB] lg:hidden">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
              }}
              className="h-full origin-top bg-[#B08D28]"
            />
          </div>

          <div className="grid gap-8 lg:grid-cols-5 lg:gap-4">
            {journeySteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.12,
                  }}
                  className="relative flex gap-5 lg:block lg:text-center"
                >
                  {/* Number/Icon */}
                  <div className="relative z-10 flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full border border-[#D7E1DB] bg-[#F8FAF8]">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0B3D2E] shadow-sm transition-all duration-300 hover:bg-[#0B3D2E] hover:text-white">
                      <Icon size={19} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-0 lg:pt-7">
                    <p className="text-[11px] font-bold tracking-[0.18em] text-[#B08D28]">
                      STEP {step.number}
                    </p>

                    <h3 className="mt-2 text-xl font-semibold text-[#10231C]">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[#697971] lg:px-2">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA panel */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="relative mt-20 overflow-hidden rounded-3xl bg-[#0B3D2E] px-7 py-8 sm:px-10"
        >
          <div className="absolute -right-20 -top-28 h-64 w-64 rounded-full border border-[#D4AF37]/20" />

          <div className="absolute -bottom-40 left-1/3 h-72 w-72 rounded-full border border-white/10" />

          <div className="relative flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
                Start with a conversation
              </p>

              <h3 className="mt-2 max-w-2xl text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Your financial goals deserve a clear plan.
              </h3>
            </div>

            <a
              href="/contact"
              className="group flex shrink-0 items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#0B3D2E] transition-all duration-300 hover:-translate-y-1 hover:bg-[#F5F7F5]"
            >
              Get Started
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}