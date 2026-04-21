"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { steps } from "@/data/steps";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-20 lg:py-28 bg-white overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.04),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <p className="text-xs font-semibold font-body text-brand-blue tracking-widest uppercase mb-3">
            The Process
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-navy-900 leading-tight mb-5">
            Live in 14 days.
            <span className="text-brand-blue"> Measurable ROI</span> in 90.
          </h2>
          <p className="text-base sm:text-lg text-gray-500 font-body leading-relaxed">
            Our structured four-step methodology takes you from assessment to
            measurable outcomes without disrupting your business operations.
          </p>
        </AnimatedSection>

        {/* Desktop: Timeline */}
        <div className="hidden lg:block relative">
          {/* Connector line */}
          <div className="absolute top-[60px] left-[12.5%] right-[12.5%] h-px">
            <div className="w-full h-full bg-gradient-to-r from-brand-blue/20 via-brand-blue/60 to-brand-blue/20" />
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 bg-brand-blue origin-left"
              style={{ height: "2px", top: "-1px" }}
            />
          </div>

          <div className="grid grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col items-center text-center group"
              >
                {/* Circle node */}
                <div className="relative mb-8">
                  <div className="w-[52px] h-[52px] rounded-full bg-navy-900 border-4 border-white shadow-lg flex items-center justify-center relative z-10 group-hover:bg-brand-blue transition-colors duration-300">
                    <span className="text-sm font-bold font-display text-white">{step.number}</span>
                  </div>
                  <div className="absolute inset-0 rounded-full bg-brand-blue/20 scale-0 group-hover:scale-150 transition-transform duration-500 opacity-50" />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-base font-bold font-display text-navy-900 group-hover:text-brand-blue transition-colors duration-200">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-500 font-body leading-relaxed">
                    {step.description}
                  </p>
                  <p className="text-xs text-gray-400 font-body leading-relaxed border-t border-gray-100 pt-3">
                    {step.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: Vertical stack */}
        <div className="lg:hidden space-y-0">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex gap-5 pb-10 last:pb-0"
            >
              {/* Vertical connector */}
              {index < steps.length - 1 && (
                <div className="absolute left-6 top-14 bottom-0 w-px bg-gradient-to-b from-brand-blue/40 to-transparent" />
              )}

              {/* Number */}
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-navy-900 flex items-center justify-center shadow-md z-10">
                <span className="text-sm font-bold font-display text-white">{step.number}</span>
              </div>

              {/* Content */}
              <div className="flex-1 pt-1 space-y-2">
                <h3 className="text-base font-bold font-display text-navy-900">{step.title}</h3>
                <p className="text-sm text-gray-500 font-body leading-relaxed">{step.description}</p>
                <p className="text-xs text-gray-400 font-body leading-relaxed">{step.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
