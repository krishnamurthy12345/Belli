"use client";

import { motion } from "motion/react";
import {
  ArrowUpRight,
  BarChart3,
  Building2,
  Coins,
  LineChart,
  PieChart,
  Shield,
} from "lucide-react";
import Link from "next/link";

const solutions = [
  {
    icon: PieChart,
    title: "Mutual Funds",
    description:
      "Diversified investment solutions designed around your financial goals and risk profile.",
    href: "/mutual-funds",
    image:
      "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1200&q=85",
  },
  {
    icon: LineChart,
    title: "Systematic Investment Plan",
    description:
      "Build disciplined investing habits by investing a fixed amount at regular intervals.",
    href: "/sip",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=85",
  },
  {
    icon: BarChart3,
    title: "Wealth Planning",
    description:
      "Create a structured financial roadmap for your short-term and long-term goals.",
    href: "/calculators",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=85",
  },
  {
    icon: Shield,
    title: "Goal-Based Investing",
    description:
      "Align your investments with important milestones such as education, home and retirement.",
    href: "/contact",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=85",
  },
  {
    icon: Coins,
    title: "Portfolio Review",
    description:
      "Understand your existing investments and identify opportunities to improve diversification.",
    href: "/contact",
    image:
      "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1200&q=85",
  },
  {
    icon: Building2,
    title: "Financial Guidance",
    description:
      "Get a clearer view of your investment choices with personalised financial guidance.",
    href: "/contact",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
  },
];

export default function InvestmentSolutions() {
  return (
    <section className="section-padding bg-[#F8FAF8]">
      <div className="container-width">

        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <motion.div
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
              duration: 0.7,
            }}
          >
            <div className="gold-line mb-5" />

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8D7125]">
              Investment Solutions
            </p>

            <h2
              className="
                mt-4
                max-w-lg
                text-4xl
                font-semibold
                leading-tight
                tracking-[-0.03em]
                text-[#10231C]
                sm:text-5xl
              "
            >
              A smarter approach to building your wealth.
            </h2>
          </motion.div>

          <motion.p
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
              duration: 0.7,
              delay: 0.15,
            }}
            className="
              max-w-xl
              text-base
              leading-7
              text-[#697971]
              lg:ml-auto
            "
          >
            Every investor has different goals, timelines and
            priorities. Explore investment solutions that can
            help you make informed decisions and stay focused
            on your financial journey.
          </motion.p>
        </div>

        {/* =====================================================
            SOLUTION CARDS
        ===================================================== */}

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;

            return (
              <motion.div
                key={solution.title}
                initial={{
                  opacity: 0,
                  y: 45,
                  scale: 0.97,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <Link
                  href={solution.href}
                  className="
                    group
                    relative
                    block
                    h-full
                    overflow-hidden
                    rounded-[28px]
                    border
                    border-[#DDE7E1]
                    bg-white
                    transition-all
                    duration-500
                    hover:-translate-y-3
                    hover:border-[#B8CDBF]
                    hover:shadow-[0_25px_70px_rgba(16,35,28,0.12)]
                  "
                >

                  {/* =================================================
                      IMAGE AREA
                  ================================================= */}

                  <div
                    className="
                      relative
                      h-[235px]
                      overflow-hidden
                      sm:h-[250px]
                    "
                  >
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        ease-out
                        group-hover:scale-110
                      "
                    />

                    {/* Dark green image overlay */}

                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-[#071C16]
                        via-[#0B3D2E]/35
                        to-transparent
                        opacity-80
                        transition-opacity
                        duration-500
                        group-hover:opacity-90
                      "
                    />

                    {/* Gold glow */}

                    <div
                      className="
                        absolute
                        -right-16
                        -top-16
                        h-40
                        w-40
                        rounded-full
                        bg-[#D4AF37]/20
                        opacity-0
                        blur-3xl
                        transition-opacity
                        duration-700
                        group-hover:opacity-100
                      "
                    />

                    {/* =================================================
                        IMAGE TOP CONTENT
                    ================================================= */}

                    <div
                      className="
                        absolute
                        left-5
                        right-5
                        top-5
                        flex
                        items-start
                        justify-between
                      "
                    >
                      {/* Icon */}

                      <div
                        className="
                          flex
                          h-12
                          w-12
                          items-center
                          justify-center
                          rounded-2xl
                          border
                          border-white/20
                          bg-[#071C16]/60
                          text-[#D4AF37]
                          shadow-lg
                          backdrop-blur-md
                          transition-all
                          duration-500
                          group-hover:scale-110
                          group-hover:border-[#D4AF37]/50
                          group-hover:bg-[#D4AF37]
                          group-hover:text-[#071C16]
                        "
                      >
                        <Icon size={21} />
                      </div>

                      {/* Arrow */}

                      <div
                        className="
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-white/20
                          bg-black/20
                          text-white
                          backdrop-blur-md
                          transition-all
                          duration-500
                          group-hover:border-[#D4AF37]
                          group-hover:bg-[#D4AF37]
                          group-hover:text-[#071C16]
                        "
                      >
                        <ArrowUpRight
                          size={17}
                          className="
                            transition-transform
                            duration-500
                            group-hover:-translate-y-0.5
                            group-hover:translate-x-0.5
                          "
                        />
                      </div>
                    </div>

                    {/* =================================================
                        IMAGE TITLE
                    ================================================= */}

                    <div
                      className="
                        absolute
                        bottom-5
                        left-6
                        right-6
                      "
                    >
                      <p
                        className="
                          mb-2
                          text-[10px]
                          font-semibold
                          uppercase
                          tracking-[0.22em]
                          text-[#D4AF37]
                        "
                      >
                        Bellis Capital
                      </p>

                      <h3
                        className="
                          text-2xl
                          font-semibold
                          tracking-[-0.03em]
                          text-white
                        "
                      >
                        {solution.title}
                      </h3>
                    </div>
                  </div>

                  {/* =================================================
                      CARD CONTENT
                  ================================================= */}

                  <div
                    className="
                      relative
                      p-6
                      sm:p-7
                    "
                  >
                    {/* Small decorative line */}

                    <div
                      className="
                        mb-5
                        h-[2px]
                        w-10
                        bg-[#D4AF37]
                        transition-all
                        duration-500
                        group-hover:w-20
                      "
                    />

                    <p
                      className="
                        text-sm
                        leading-6
                        text-[#697971]
                      "
                    >
                      {solution.description}
                    </p>

                    {/* Bottom link */}

                    <div
                      className="
                        mt-7
                        flex
                        items-center
                        justify-between
                      "
                    >
                      <span
                        className="
                          text-xs
                          font-semibold
                          uppercase
                          tracking-[0.16em]
                          text-[#0B3D2E]
                        "
                      >
                        Explore
                      </span>

                      <span
                        className="
                          text-xs
                          font-medium
                          text-[#8D7125]
                          transition-transform
                          duration-300
                          group-hover:translate-x-1
                        "
                      >
                        →
                      </span>
                    </div>
                  </div>

                  {/* =================================================
                      GOLD BOTTOM BORDER
                  ================================================= */}

                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      h-[2px]
                      w-0
                      bg-[#D4AF37]
                      transition-all
                      duration-500
                      group-hover:w-full
                    "
                  />
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* =====================================================
            BOTTOM NOTE
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
          className="
            mt-10
            flex
            items-center
            justify-center
            gap-3
            text-center
          "
        >
          <div className="h-px w-8 bg-[#D4AF37]/50" />

          <p
            className="
              text-xs
              uppercase
              tracking-[0.16em]
              text-[#8A968F]
            "
          >
            Designed around your financial journey
          </p>

          <div className="h-px w-8 bg-[#D4AF37]/50" />
        </motion.div>
      </div>
    </section>
  );
}