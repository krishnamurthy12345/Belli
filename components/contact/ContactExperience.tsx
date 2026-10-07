"use client";

import { motion } from "motion/react";
import { useState } from "react";
import {
  ArrowRight,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import Link from "next/link";

const contactItems = [
  {
    icon: Mail,
    label: "Email Inquiry",
    value: "belliscapitalofficial@gmail.com",
    href: "mailto:belliscapitalofficial@gmail.com",
  },
  {
    icon: Phone,
    label: "Direct Call",
    value: "+91 94889 74620",
    href: "tel:+919488974620",
  },
  {
    icon: MapPin,
    label: "Headquarters",
    value: "Coimbatore, Tamil Nadu, India",
    href: "https://maps.app.goo.gl/gMkDZVo4oSWv3dHH9",
  },
];

export default function ContactExperience() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    requirements: "",
    comments: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);
    setIsSubmitted(false);

    const FORM_URL =
      "https://docs.google.com/forms/d/e/1FAIpQLSfpkeq2BZu0RhUmfMyIkwXYMaar9mOcYCkpUbD4zcYijVY4Ng/formResponse";

    const formBody = new URLSearchParams();

    // Google Form field IDs
    formBody.append("entry.1974122776", formData.fullName);
    formBody.append("entry.586523070", formData.phone);
    formBody.append("entry.431084536", formData.email);
    formBody.append("entry.1031745543", formData.requirements);
    formBody.append("entry.1589498007", formData.comments);

    try {
      await fetch(FORM_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formBody.toString(),
      });

      // Google Forms does not expose the response because of no-cors.
      // If fetch completes, treat it as submitted.
      setIsSubmitting(false);
      setIsSubmitted(true);

      setFormData({
        fullName: "",
        phone: "",
        email: "",
        requirements: "",
        comments: "",
      });
    } catch (error) {
      console.error("Submission error:", error);
      setIsSubmitting(false);
      setIsSubmitted(false);
    }
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#F8FAF8]">
      {/* ========================================================= */}
      {/* HERO */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden bg-[#0B3D2E] pt-32">
        {/* Background glow */}
        <div className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[#1B5E48]/30 blur-[130px]" />

        <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#D4AF37]/10 blur-[130px]" />

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0B3D2E]/50 blur-[140px]" />

        {/* Decorative dots */}
        <div className="pointer-events-none absolute left-[8%] top-[30%] h-2 w-2 rounded-full bg-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.8)]" />

        <div className="pointer-events-none absolute right-[15%] top-[20%] h-1.5 w-1.5 rounded-full bg-white/40" />

        <div className="container-width relative">
          <div className="grid min-h-[calc(100vh-128px)] items-center gap-12 pb-20 lg:grid-cols-[0.9fr_1.1fr]">
            {/* ===================================================== */}
            {/* LEFT */}
            {/* ===================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                x: -30,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              className="relative z-10"
            >
              {/* Label */}
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[#D4AF37]" />

                <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#D4AF37]">
                  Let&apos;s Connect
                </span>
              </div>

              {/* Heading */}
              <h1 className="mt-7 text-5xl font-bold leading-[0.98] tracking-[-0.045em] text-white sm:text-6xl lg:text-[70px]">
                Your next
                <br />
                financial chapter
                <br />
                <span className="text-[#D4AF37]">
                  starts here.
                </span>
              </h1>

              {/* Description */}
              <p className="mt-7 max-w-xl text-base leading-8 text-white/60 sm:text-lg">
                Whether you are building your first investment plan,
                managing an established portfolio, or planning for
                long-term financial goals, Bellis Capital provides
                structured guidance with clarity and discipline.
              </p>

              {/* Buttons */}
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#contact-details"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#D4AF37] px-7 py-4 text-sm font-bold text-[#10231C] transition-all duration-300 hover:-translate-y-1 hover:bg-[#E4C65B]"
                >
                  Start a Conversation

                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>

                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10"
                >
                  <MessageCircle size={16} />
                  Why Bellis
                </Link>
              </div>

              {/* Trust line */}
              <div className="mt-8 flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-[#D4AF37] shadow-[0_0_12px_rgba(212,175,55,0.7)]" />

                <p className="text-xs uppercase tracking-[0.18em] text-white/35">
                  Wealth • Strategy • Clarity
                </p>
              </div>
            </motion.div>

            {/* ===================================================== */}
            {/* RIGHT - CSS VISUAL */}
            {/* ===================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                x: 30,
                scale: 0.92,
              }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              transition={{
                duration: 1,
                delay: 0.15,
              }}
              className="relative flex min-h-[430px] items-center justify-center sm:min-h-[520px]"
            >
              {/* Large ambient glow */}
              <div className="absolute h-[360px] w-[360px] rounded-full bg-[#D4AF37]/10 blur-[100px]" />

              {/* Outer rotating ring */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 35,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute h-[370px] w-[370px] rounded-full border border-[#D4AF37]/20 sm:h-[450px] sm:w-[450px]"
              >
                <span className="absolute -left-2 top-1/2 h-4 w-4 rounded-full bg-[#D4AF37] shadow-[0_0_25px_rgba(212,175,55,0.8)]" />

                <span className="absolute -right-1 top-[28%] h-2.5 w-2.5 rounded-full bg-white/50" />
              </motion.div>

              {/* Middle ring */}
              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 24,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute h-[280px] w-[280px] rounded-full border border-white/10 sm:h-[340px] sm:w-[340px]"
              >
                <span className="absolute right-[12%] top-1/2 h-3 w-3 rounded-full bg-[#D4AF37] shadow-[0_0_18px_rgba(212,175,55,0.7)]" />
              </motion.div>

              {/* Inner ring */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 16,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute h-[190px] w-[190px] rounded-full border border-[#D4AF37]/30 sm:h-[230px] sm:w-[230px]"
              >
                <span className="absolute left-[10%] top-[15%] h-2 w-2 rounded-full bg-[#D4AF37]" />
              </motion.div>

              {/* Central card */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10 flex h-[190px] w-[190px] flex-col items-center justify-center rounded-full border border-[#D4AF37]/40 bg-[#10231C]/90 shadow-[0_0_80px_rgba(212,175,55,0.12)] backdrop-blur-xl sm:h-[220px] sm:w-[220px]"
              >
                {/* Inner glow */}
                <div className="absolute inset-5 rounded-full bg-[#0B3D2E] shadow-inner" />

                <div className="relative z-10 text-center">
                  <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#D4AF37]">
                    Bellis
                  </p>

                  <p className="mt-2 font-serif text-3xl italic text-white sm:text-4xl">
                    Capital
                  </p>

                  <div className="mx-auto mt-4 h-px w-10 bg-[#D4AF37]" />

                  <p className="mt-3 text-[8px] uppercase tracking-[0.22em] text-white/40">
                    Wealth • Strategy
                  </p>
                </div>
              </motion.div>

              {/* Floating information card */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: 25,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.9,
                }}
                className="absolute right-0 top-[12%] z-20 rounded-2xl border border-white/10 bg-white/[0.07] px-5 py-4 shadow-2xl backdrop-blur-xl"
              >
                <p className="text-[9px] uppercase tracking-[0.2em] text-white/35">
                  Direct Advisory
                </p>

                <p className="mt-1 text-sm font-semibold text-white">
                  One conversation at a time.
                </p>
              </motion.div>

              {/* Bottom card */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: 1.05,
                }}
                className="absolute bottom-[8%] left-0 z-20 rounded-2xl border border-white/10 bg-[#10231C]/90 px-5 py-4 shadow-2xl backdrop-blur-xl"
              >
                <p className="text-[9px] uppercase tracking-[0.2em] text-white/35">
                  Bellis Capital
                </p>

                <p className="mt-1 text-sm font-semibold text-white">
                  Wealth • Strategy • Clarity
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* CONTACT DETAILS & REQUEST FORM */}
      {/* ========================================================= */}

      <section id="contact-details" className="section-padding bg-[#F8FAF8]">
        <div className="container-width">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            {/* Left: Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="gold-line" />
              <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-[#0B3D2E]/50">
                Contact Details
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-[#10231C] sm:text-5xl">
                Let&apos;s make the
                <br />
                <span className="text-[#0B3D2E]">conversation useful.</span>
              </h2>

              <p className="mt-5 max-w-md text-sm leading-7 text-[#53635C]">
                Use the details below to connect with the Bellis Capital team and
                begin a conversation around your financial goals.
              </p>

              {/* Contact Cards */}
              <div className="mt-8 flex flex-col gap-4">
                {contactItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="group flex items-center gap-4 rounded-2xl border border-[#E4EBE7] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/50 hover:shadow-md"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0B3D2E] text-[#D4AF37] transition-all group-hover:bg-[#D4AF37] group-hover:text-[#10231C]">
                        <Icon size={20} />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-[#53635C]/60">
                          {item.label}
                        </p>
                        <p className="text-sm font-semibold text-[#10231C]">
                          {item.value}
                        </p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="mt-8 flex items-center gap-3">
                <a
                  href="https://wa.me/919488974620"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-xl bg-[#0B3D2E] px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#123F31]"
                >
                  <MessageCircle size={16} className="text-[#D4AF37]" />
                  WhatsApp
                </a>

                <a
                  href="https://www.youtube.com/@belliscapital"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Bellis Capital YouTube"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#E4EBE7] bg-white text-[#53635C] shadow-sm transition-all hover:bg-[#0B3D2E] hover:text-[#D4AF37]"
                >
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>

                <a
                  href="https://www.linkedin.com/in/raja-sekar-8a3a78113"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#E4EBE7] bg-white text-[#53635C] shadow-sm transition-all hover:bg-[#0B3D2E] hover:text-[#D4AF37]"
                >
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </motion.div>

            {/* Right: Request Form Card */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="rounded-[28px] border border-[#E4EBE7] bg-white p-8 shadow-[0_20px_50px_rgba(16,35,28,0.06)] sm:p-10"
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0B3D2E]">
                Begin Your Journey
              </p>
              <h3 className="mt-2 text-2xl font-bold text-[#10231C] sm:text-3xl">
                Request an Advisory Call
              </h3>
              <p className="mt-1 text-xs text-[#53635C]">
                Share a few details and our team will connect with you.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-[#53635C]">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="mt-1 w-full rounded-xl border border-[#E4EBE7] bg-[#F8FAF8] px-4 py-3 text-sm text-[#10231C] outline-none transition-all placeholder:text-[#53635C]/40 focus:border-[#D4AF37] focus:bg-white"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-[#53635C]">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      required
                      className="mt-1 w-full rounded-xl border border-[#E4EBE7] bg-[#F8FAF8] px-4 py-3 text-sm text-[#10231C] outline-none transition-all placeholder:text-[#53635C]/40 focus:border-[#D4AF37] focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-[#53635C]">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="mt-1 w-full rounded-xl border border-[#E4EBE7] bg-[#F8FAF8] px-4 py-3 text-sm text-[#10231C] outline-none transition-all placeholder:text-[#53635C]/40 focus:border-[#D4AF37] focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-[#53635C]">
                    Requirements
                  </label>
                  <textarea
                    name="requirements"
                    rows={3}
                    value={formData.requirements}
                    onChange={handleChange}
                    placeholder="Tell us your financial requirements..."
                    required
                    className="mt-1 w-full rounded-xl border border-[#E4EBE7] bg-[#F8FAF8] px-4 py-3 text-sm text-[#10231C] outline-none transition-all placeholder:text-[#53635C]/40 focus:border-[#D4AF37] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-[#53635C]">
                    Comments
                  </label>
                  <textarea
                    name="comments"
                    rows={3}
                    value={formData.comments}
                    onChange={handleChange}
                    placeholder="Add any additional comments..."
                    className="mt-1 w-full rounded-xl border border-[#E4EBE7] bg-[#F8FAF8] px-4 py-3 text-sm text-[#10231C] outline-none transition-all placeholder:text-[#53635C]/40 focus:border-[#D4AF37] focus:bg-white"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-[#0B3D2E] py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-[#123F31] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? "Submitting..." : "Submit Request"}

                  <Send size={15} className="text-[#D4AF37]" />
                </button>
                {isSubmitted && (
                  <p className="mt-2 text-center text-sm font-semibold text-[#0B3D2E]">
                    Thank you! Your request has been submitted successfully.
                  </p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* CTA */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden bg-[#10231C] py-24">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-[#1B5E48]/30 blur-[120px]" />

        <div className="pointer-events-none absolute bottom-[-150px] right-[-100px] h-[350px] w-[350px] rounded-full bg-[#D4AF37]/[0.06] blur-[100px]" />

        <div className="container-width relative text-center">
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
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
              Begin with clarity
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-bold tracking-[-0.04em] text-white sm:text-6xl">
              The right strategy starts with the right conversation.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/45">
              Start by sharing what matters to you. The investment
              journey can follow from there.
            </p>

            <a
              href="mailto:belliscapitalofficial@gmail.com"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#D4AF37] px-7 py-4 text-sm font-bold text-[#10231C] transition-all duration-300 hover:-translate-y-1 hover:bg-[#E4C65B]"
            >
              Get in Touch
              <ArrowRight size={17} />
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}