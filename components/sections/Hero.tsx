"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, ChevronDown } from "lucide-react";

const words = ["Workforce", "Leaders", "Innovators", "Teams"];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const lineVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8, y: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function Hero() {
  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-navy-900">
      {/* Background: gradient mesh */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-70" />

      {/* Background: grid overlay */}
      <div
        className="absolute inset-0 bg-hero-grid"
        style={{ backgroundSize: "60px 60px" }}
      />

      {/* Radial vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(6,13,26,0.8)_100%)]" />

      {/* Floating orbs */}
      <motion.div
        animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-[8%] w-72 h-72 rounded-full bg-brand-blue/20 blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ y: [20, -20, 20], x: [10, -10, 10] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/3 left-[5%] w-96 h-96 rounded-full bg-brand-cyan/10 blur-3xl pointer-events-none"
      />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6 lg:gap-8"
          >
            {/* Badge */}
            <motion.div variants={badgeVariants}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/15 border border-brand-blue/30 text-brand-blue-light text-xs font-semibold font-body tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse-slow" />
                Trusted by 500+ Enterprise Organizations
              </span>
            </motion.div>

            {/* Headline */}
            <div className="space-y-2">
              <motion.h1
                variants={lineVariants}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-display text-white leading-[1.08] tracking-tight"
              >
                Build the Skills
              </motion.h1>
              <motion.h1
                variants={lineVariants}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-display leading-[1.08] tracking-tight"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue-light via-brand-cyan-light to-brand-blue">
                  Your Enterprise
                </span>
              </motion.h1>
              <motion.h1
                variants={lineVariants}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-display text-white leading-[1.08] tracking-tight"
              >
                Needs to Win.
              </motion.h1>
            </div>

            {/* Subheadline */}
            <motion.p
              variants={lineVariants}
              className="text-base sm:text-lg text-white/60 font-body leading-relaxed max-w-xl"
            >
              India&apos;s most trusted enterprise learning platform. Partner with IITs,
              IIMs, and global universities to upskill your teams at scale — with
              measurable outcomes.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={lineVariants}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <button
                onClick={() => handleScroll("contact")}
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 text-sm font-semibold font-body text-white bg-brand-blue rounded-2xl hover:bg-brand-blue-dark transition-all duration-200 shadow-blue-glow hover:shadow-[0_0_40px_rgba(37,99,235,0.6)] hover:scale-[1.02] active:scale-[0.98]"
              >
                Schedule a Free Demo
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => handleScroll("features")}
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 text-sm font-semibold font-body text-white/80 border border-white/15 rounded-2xl hover:bg-white/5 hover:border-white/25 hover:text-white transition-all duration-200"
              >
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-brand-blue/30 transition-colors duration-200">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
                See Platform Tour
              </button>
            </motion.div>

            {/* Social proof strip */}
            <motion.div
              variants={lineVariants}
              className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2"
            >
              {[
                { icon: "🎓", label: "IIT & IIM certified" },
                { icon: "⚡", label: "Go live in 2 weeks" },
                { icon: "📊", label: "Real-time analytics" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-1.5 text-xs text-white/50 font-body"
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            <HeroDashboardIllustration />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-white/30 font-body tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function HeroDashboardIllustration() {
  return (
    <div className="relative">
      {/* Main card */}
      <motion.div
        animate={{ y: [-6, 6, -6] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative bg-navy-800/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl"
      >
        {/* Header row */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-xs text-white/40 font-body mb-1">Enterprise Dashboard</p>
            <p className="text-sm font-semibold font-display text-white">Q4 Learning Report</p>
          </div>
          <div className="px-3 py-1.5 rounded-lg bg-accent-emerald/15 border border-accent-emerald/25">
            <span className="text-xs font-semibold text-accent-emerald">↑ 34% YoY</span>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {[
            { label: "Active Learners", value: "2,847", delta: "+12%" },
            { label: "Avg. Score", value: "91.4", delta: "+5.2" },
            { label: "Completion", value: "96%", delta: "+8%" },
          ].map((s) => (
            <div key={s.label} className="bg-white/5 rounded-xl p-3 border border-white/5">
              <p className="text-xs text-white/40 font-body mb-1">{s.label}</p>
              <p className="text-lg font-bold font-display text-white">{s.value}</p>
              <p className="text-xs text-accent-emerald font-body">{s.delta}</p>
            </div>
          ))}
        </div>

        {/* Progress bars */}
        <div className="space-y-3 mb-6">
          {[
            { label: "Data Science & AI", pct: 89, color: "bg-brand-blue" },
            { label: "Product Management", pct: 76, color: "bg-brand-cyan" },
            { label: "Leadership & Strategy", pct: 92, color: "bg-accent-emerald" },
          ].map((track) => (
            <div key={track.label}>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs text-white/60 font-body">{track.label}</span>
                <span className="text-xs font-semibold text-white">{track.pct}%</span>
              </div>
              <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${track.pct}%` }}
                  transition={{ duration: 1.5, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className={`h-full rounded-full ${track.color}`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Learner avatars */}
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2">
            {["#3B82F6", "#06B6D4", "#10B981", "#F59E0B", "#8B5CF6"].map((color, i) => (
              <div
                key={i}
                className="w-7 h-7 rounded-full border-2 border-navy-800 flex items-center justify-center text-xs font-bold text-white"
                style={{ backgroundColor: color }}
              >
                {String.fromCharCode(65 + i)}
              </div>
            ))}
          </div>
          <p className="text-xs text-white/50 font-body">+2,842 learners enrolled</p>
        </div>
      </motion.div>

      {/* Floating badge 1 */}
      <motion.div
        animate={{ y: [-4, 4, -4] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -top-5 -left-8 bg-white rounded-2xl shadow-xl p-3.5 border border-gray-100"
      >
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-brand-blue flex items-center justify-center">
            <span className="text-white text-xs">🎓</span>
          </div>
          <div>
            <p className="text-xs font-semibold text-navy-900">IIT Certified</p>
            <p className="text-[10px] text-gray-400">500+ Programs</p>
          </div>
        </div>
      </motion.div>

      {/* Floating badge 2 */}
      <motion.div
        animate={{ y: [4, -4, 4] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -bottom-4 -right-6 bg-white rounded-2xl shadow-xl p-3.5 border border-gray-100"
      >
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-accent-emerald flex items-center justify-center">
            <span className="text-white text-sm">✓</span>
          </div>
          <div>
            <p className="text-xs font-semibold text-navy-900">98% Satisfaction</p>
            <p className="text-[10px] text-gray-400">Learner NPS Score</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
