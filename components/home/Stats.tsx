"use client";

import { motion } from "motion/react";
import {
  ArrowUpRight,
  ShieldCheck,
  Users,
  WalletCards,
} from "lucide-react";

const stats = [
  {
    value: "10+",
    label: "Years of Experience",
    icon: ShieldCheck,
  },
  {
    value: "2,500+",
    label: "Investors Guided",
    icon: Users,
  },
  {
    value: "₹100Cr+",
    label: "Investments Managed",
    icon: WalletCards,
  },
];

export default function Stats() {
  return (
    <section className="border-y border-[#E4EBE7] bg-white py-8">
      <div className="container-width">
        <div className="grid grid-cols-1 divide-y divide-[#E4EBE7] md:grid-cols-3 md:divide-x md:divide-y-0">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="flex items-center justify-center gap-4 px-6 py-6 md:py-4"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EAF4EE] text-[#0B3D2E]">
                  <Icon size={20} />
                </div>

                <div>
                  <p className="text-xl font-bold tracking-tight text-[#10231C]">
                    {stat.value}
                  </p>

                  <p className="mt-0.5 text-xs font-medium text-[#697971]">
                    {stat.label}
                  </p>
                </div>

                <ArrowUpRight
                  size={16}
                  className="ml-auto hidden text-[#B08D28] sm:block"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}