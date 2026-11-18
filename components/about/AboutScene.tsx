"use client";

import { motion } from "motion/react";

export default function AboutScene() {
  return (
    <div className="relative h-[420px] w-full overflow-hidden sm:h-[520px]">
      {/* Background Luminous White Glow */}
      <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/15 blur-[100px]" />
      <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/25 blur-[60px]" />

      {/* Orbit 1: Circular Ring (Luminous White) */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white/60 shadow-[0_0_25px_rgba(255,255,255,0.25)]"
      >
        {/* Glowing White Celestial Body */}
        <span className="absolute -right-2 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-white shadow-[0_0_25px_white,0_0_50px_white] ring-4 ring-white/30" />
      </motion.div>

      {/* Orbit 2: Tilted Ellipse (Luminous White) */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 h-[330px] w-[180px] -translate-x-1/2 -translate-y-1/2 rotate-[35deg] rounded-[50%] border-2 border-white/50"
      >
        {/* Glowing White Body */}
        <span className="absolute left-1/2 top-0 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_20px_white] ring-2 ring-white/70" />
      </motion.div>

      {/* Orbit 3: Wide Outer Ellipse (Luminous White) */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 h-[390px] w-[220px] -translate-x-1/2 -translate-y-1/2 rotate-[-45deg] rounded-[50%] border-2 border-white/40"
      >
        {/* Glowing White Body */}
        <span className="absolute bottom-0 left-1/2 h-3.5 w-3.5 -translate-x-1/2 translate-y-1/2 rounded-full bg-white shadow-[0_0_20px_white]" />
      </motion.div>

      {/* Central Core */}
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
        {/* Outer Glow */}
        <div className="absolute inset-0 rounded-full bg-white/20 blur-2xl" />

        {/* Core Ring */}
        <div className="relative flex h-24 w-24 items-center justify-center rounded-full border-2 border-white/80 bg-[var(--color-dark)] shadow-[0_0_50px_rgba(255,255,255,0.35)]">
          <div className="h-12 w-12 rounded-full border border-white/60 bg-white/20 shadow-[inset_0_0_20px_white]" />

          <div className="absolute h-3 w-3 rounded-full bg-white shadow-[0_0_20px_white]" />
        </div>
      </motion.div>

      {/* Floating White Stars & Celestial Nodes */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[16%] top-[24%] h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_18px_white]"
      />

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[16%] top-[32%] h-3 w-3 rounded-full bg-white shadow-[0_0_20px_white] ring-2 ring-white/50"
      />

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[20%] left-[26%] h-2 w-2 rounded-full bg-white shadow-[0_0_12px_white]"
      />

      {/* Small Decorative White Particles */}
      <div className="absolute left-[24%] top-[16%] h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_10px_white]" />
      <div className="absolute right-[26%] top-[18%] h-1.5 w-1.5 rounded-full bg-white/80 shadow-[0_0_8px_white]" />
      <div className="absolute bottom-[18%] right-[22%] h-2 w-2 rounded-full bg-white/90 shadow-[0_0_10px_white]" />
    </div>
  );
}
