"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { partners } from "@/data/partners";

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  iit: { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-100" },
  iim: { bg: "bg-purple-50", text: "text-purple-700", border: "border-purple-100" },
  global: { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-100" },
  tech: { bg: "bg-orange-50", text: "text-orange-700", border: "border-orange-100" },
};

const categoryLabels: Record<string, string> = {
  iit: "IIT",
  iim: "IIM",
  global: "Global",
  tech: "Industry",
};

export function Partners() {
  const doubled = [...partners, ...partners];

  return (
    <section id="partners" className="relative py-20 lg:py-24 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-semibold font-body text-brand-blue tracking-widest uppercase mb-3">
            Academic & Industry Partners
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-navy-900 leading-tight mb-4">
            Built on world-class
            <span className="text-brand-blue"> institutions.</span>
          </h2>
          <p className="text-base text-gray-500 font-body">
            Our programs are co-designed and certified by India&apos;s most prestigious academic
            institutions and global technology leaders.
          </p>
        </AnimatedSection>

        {/* Marquee */}
        <div className="relative overflow-hidden">
          {/* Left fade */}
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
          {/* Right fade */}
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />

          <div className="flex animate-marquee-left gap-4" style={{ width: "max-content" }}>
            {doubled.map((partner, i) => {
              const colors = categoryColors[partner.category];
              return (
                <div
                  key={`${partner.id}-${i}`}
                  className={`
                    flex-shrink-0 flex items-center gap-3 px-5 py-3.5 rounded-2xl border
                    ${colors.bg} ${colors.border}
                    hover:shadow-md transition-shadow duration-200 cursor-default
                    min-w-[160px]
                  `}
                >
                  <div
                    className={`w-9 h-9 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center flex-shrink-0`}
                  >
                    <span className={`text-xs font-black font-display ${colors.text}`}>
                      {partner.abbr.slice(0, 3)}
                    </span>
                  </div>
                  <div>
                    <p className={`text-xs font-bold font-display ${colors.text} leading-tight`}>
                      {partner.name}
                    </p>
                    <p className="text-[10px] text-gray-400 font-body mt-0.5">
                      {categoryLabels[partner.category]}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Partner count callout */}
        <AnimatedSection delay={0.2} className="mt-14">
          <div className="bg-navy-900 rounded-3xl p-8 lg:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-center">
              <div className="md:col-span-2 space-y-3">
                <h3 className="text-2xl lg:text-3xl font-bold font-display text-white">
                  Academic excellence meets industry relevance.
                </h3>
                <p className="text-sm lg:text-base text-white/60 font-body leading-relaxed">
                  Every program on our platform carries the credential of a top-tier institution.
                  No fluff. No self-certification. Real university partnerships, real accreditation.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-col gap-4">
                <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
                  <p className="text-3xl font-bold font-display text-white">50+</p>
                  <p className="text-xs text-white/50 font-body mt-1">Partner Institutions</p>
                </div>
                <div className="flex-1 bg-brand-blue/20 border border-brand-blue/30 rounded-2xl p-5 text-center">
                  <p className="text-3xl font-bold font-display text-white">200+</p>
                  <p className="text-xs text-white/50 font-body mt-1">Certified Programs</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
