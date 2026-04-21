"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { features } from "@/data/features";

export function Features() {
  return (
    <section id="features" className="relative py-20 lg:py-28 bg-gray-50 overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-brand-blue/3 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-brand-cyan/3 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-semibold font-body text-brand-blue tracking-widest uppercase mb-3">
            Platform Capabilities
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-navy-900 leading-tight mb-5">
            Everything your L&D team
            <span className="text-brand-blue"> needs to scale.</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-500 font-body leading-relaxed">
            From curriculum design to analytics — Accredian Enterprise is the operating
            system for ambitious learning organizations.
          </p>
        </AnimatedSection>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>

        {/* Bottom CTA strip */}
        <AnimatedSection delay={0.3} className="mt-14 text-center">
          <p className="text-sm text-gray-400 font-body mb-4">
            Ready to see it all in action?
          </p>
          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold font-body text-white bg-navy-900 rounded-2xl hover:bg-navy-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Request a Platform Demo
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </AnimatedSection>
      </div>
    </section>
  );
}
