"use client";

import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "The guidance helped me understand where my money should go and how to stay consistent with my goals.",
    name: "Ananya R.",
    role: "Long-Term Investor",
  },
  {
    quote:
      "I wanted a simple way to start investing every month. The process was clear and easy to understand.",
    name: "Rahul M.",
    role: "SIP Investor",
  },
  {
    quote:
      "What I value most is having a structured approach instead of making investment decisions randomly.",
    name: "Priya S.",
    role: "Wealth Planning Client",
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="container-width">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="gold-line" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B08D28]">
              Investor Stories
            </span>

            <span className="gold-line" />
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-[#10231C] sm:text-5xl">
            Built around{" "}
            <span className="gradient-text">real goals.</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-[#53635C]">
            A thoughtful investment journey starts with understanding what
            matters to you.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: index * 0.1,
              }}
              whileHover={{ y: -6 }}
              className="group relative rounded-3xl border border-[#E4EBE7] bg-[#F8FAF8] p-7 transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(11,61,46,0.08)]"
            >
              <div className="absolute right-6 top-6 text-[#D4AF37]/25">
                <Quote size={40} />
              </div>

              {/* Stars */}
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={15}
                    className="fill-[#D4AF37] text-[#D4AF37]"
                  />
                ))}
              </div>

              <p className="relative mt-6 text-[15px] leading-7 text-[#53635C]">
                “{item.quote}”
              </p>

              <div className="mt-7 border-t border-[#E4EBE7] pt-5">
                <p className="font-semibold text-[#10231C]">{item.name}</p>

                <p className="mt-1 text-xs text-[#8A9690]">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-[#8A9690]">
          Illustrative testimonials for website design. Replace with verified
          client testimonials before publishing.
        </p>
      </div>
    </section>
  );
}