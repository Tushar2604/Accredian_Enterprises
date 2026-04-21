"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CounterCard } from "@/components/ui/CounterCard";
import { stats } from "@/data/stats";

export function Stats() {
  return (
    <section className="relative py-16 lg:py-20 bg-navy-900 overflow-hidden">
      {/* Top border glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-brand-blue/60 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent" />

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.4),transparent_70%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <p className="text-xs font-semibold font-body text-brand-blue tracking-widest uppercase mb-3">
            By the Numbers
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-white">
            The platform enterprises trust
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-4">
          {stats.map((stat, i) => (
            <CounterCard
              key={stat.id}
              stat={stat}
              delay={i * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
