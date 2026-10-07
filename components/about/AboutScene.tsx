"use client";

import { motion } from "motion/react";

export default function AboutScene() {
  return (
    <div className="relative h-[420px] w-full overflow-hidden sm:h-[520px]">
      {/* Background glow */}
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0B3D2E]/10 blur-[90px]" />

      {/* Orbit 1 */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 h-[230px] w-[230px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#D4AF37]/40"
      >
        <span className="absolute -right-1 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.8)]" />
      </motion.div>

      {/* Orbit 2 */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 h-[310px] w-[170px] -translate-x-1/2 -translate-y-1/2 rotate-[35deg] rounded-[50%] border border-[#D4AF37]/30"
      >
        <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#D4AF37] shadow-[0_0_18px_rgba(212,175,55,0.9)]" />
      </motion.div>

      {/* Orbit 3 */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 h-[360px] w-[200px] -translate-x-1/2 -translate-y-1/2 rotate-[-45deg] rounded-[50%] border border-[#0B3D2E]/25"
      >
        <span className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[#0B3D2E]" />
      </motion.div>

      {/* Central core */}
      <motion.div
        animate={{
          y: [0, -12, 0],
          rotate: [0, 4, -4, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center"
      >
        {/* Outer glow */}
        <div className="absolute inset-0 rounded-full bg-[#D4AF37]/10 blur-2xl" />

        {/* Core */}
        <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-[#D4AF37]/50 bg-[#0B3D2E] shadow-[0_0_50px_rgba(212,175,55,0.2)]">
          <div className="h-12 w-12 rounded-full border border-[#D4AF37]/40 bg-[#123F31] shadow-[inset_0_0_25px_rgba(212,175,55,0.15)]" />

          <div className="absolute h-3 w-3 rounded-full bg-[#D4AF37] shadow-[0_0_25px_rgba(212,175,55,1)]" />
        </div>
      </motion.div>

      {/* Floating nodes */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[18%] top-[25%] h-2 w-2 rounded-full bg-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.8)]"
      />

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[18%] top-[35%] h-2.5 w-2.5 rounded-full bg-[#D4AF37] shadow-[0_0_18px_rgba(212,175,55,0.8)]"
      />

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[22%] left-[28%] h-1.5 w-1.5 rounded-full bg-[#0B3D2E]"
      />

      {/* Small decorative particles */}
      <div className="absolute left-[25%] top-[18%] h-1 w-1 rounded-full bg-[#D4AF37]/60" />
      <div className="absolute right-[28%] top-[20%] h-1 w-1 rounded-full bg-[#D4AF37]/50" />
      <div className="absolute bottom-[20%] right-[24%] h-1 w-1 rounded-full bg-[#0B3D2E]/50" />
    </div>
  );
}