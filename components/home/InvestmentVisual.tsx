"use client";

import { motion } from "motion/react";
import {
  ArrowUpRight,
  BarChart3,
  CircleDollarSign,
  Target,
} from "lucide-react";

const cards = [
  {
    icon: Target,
    label: "Goals",
    value: "Plan",
  },
  {
    icon: BarChart3,
    label: "Strategy",
    value: "Build",
  },
  {
    icon: CircleDollarSign,
    label: "Future",
    value: "Grow",
  },
];

export default function InvestmentVisual() {
  return (
    <section className="section-padding relative overflow-hidden bg-[#F8FAF8]">
      <div className="pointer-events-none absolute left-[-180px] top-1/3 h-[400px] w-[400px] rounded-full bg-[#0B3D2E]/[0.04] blur-[100px]" />

      <div className="container-width">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          {/* VISUAL */}
          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.8,
            }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] bg-[#0B3D2E]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('/media/financial-future.jpg')",
                }}
              />

              <div className="absolute inset-0 bg-[#0B3D2E]/55" />

              <div className="absolute inset-0 bg-gradient-to-br from-[#0B3D2E]/20 via-transparent to-[#10231C]/90" />

              {/* ANIMATED GRID */}
              <motion.div
                animate={{
                  backgroundPosition: [
                    "0px 0px",
                    "70px 70px",
                  ],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 opacity-[0.08]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
                  backgroundSize: "70px 70px",
                }}
              />

              {/* GROWTH LINE */}
              <svg
                viewBox="0 0 500 280"
                className="absolute bottom-0 left-0 h-full w-full"
                preserveAspectRatio="none"
              >
                <motion.path
                  d="M0 250 C70 240 90 205 145 215 C205 230 215 160 275 170 C335 180 350 90 405 110 C440 120 455 55 500 25"
                  fill="none"
                  stroke="#D4AF37"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{
                    pathLength: 0,
                  }}
                  whileInView={{
                    pathLength: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 2.2,
                    ease: "easeInOut",
                  }}
                />
              </svg>

              {/* GLOW */}
              <div className="absolute bottom-12 right-10 h-32 w-32 rounded-full bg-[#D4AF37]/20 blur-3xl" />

              <div className="absolute bottom-7 left-7">
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                  The bigger picture
                </p>

                <p className="mt-2 text-2xl font-bold text-white">
                  Strategy creates direction.
                </p>
              </div>
            </div>

            {/* FLOATING CARD */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-6 right-6 rounded-2xl border border-white/10 bg-[#10231C] p-5 shadow-2xl sm:right-10"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D4AF37] text-[#10231C]">
                  <ArrowUpRight size={18} />
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-[0.18em] text-white/35">
                    Direction
                  </p>

                  <p className="mt-1 text-sm font-bold text-white">
                    Forward
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* CONTENT */}
          <div>
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
            >
              <div className="gold-line" />

              <p className="mt-5 text-xs font-bold uppercase tracking-[0.22em] text-[#0B3D2E]/50">
                Investing with intention
              </p>

              <h2 className="mt-4 text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-[#10231C] sm:text-5xl">
                Your money should
                <br />
                have a
                <span className="text-[#0B3D2E]">
                  {" "}purpose.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-[#53635C]">
                Investing is not simply about selecting a product.
                It is about understanding your destination,
                building a strategy and staying focused as the
                journey unfolds.
              </p>
            </motion.div>

            <div className="mt-9 space-y-3">
              {cards.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.label}
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
                    }}
                    transition={{
                      delay: index * 0.12,
                    }}
                    className="group flex items-center justify-between rounded-2xl border border-[#E4EBE7] bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0B3D2E] text-[#D4AF37]">
                        <Icon size={18} />
                      </div>

                      <div>
                        <p className="text-xs text-[#53635C]/60">
                          {item.label}
                        </p>

                        <p className="mt-1 text-sm font-bold text-[#10231C]">
                          {item.value}
                        </p>
                      </div>
                    </div>

                    <ArrowUpRight
                      size={17}
                      className="text-[#10231C]/20 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#D4AF37]"
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}