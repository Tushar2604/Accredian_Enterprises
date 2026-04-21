"use client";

import {
  GraduationCap,
  LayoutDashboard,
  Users,
  BookOpen,
  GitBranch,
  Award,
  Zap,
  Link,
  LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { Feature } from "@/lib/types";

const iconMap: Record<string, LucideIcon> = {
  GraduationCap,
  LayoutDashboard,
  Users,
  BookOpen,
  GitBranch,
  Award,
  Zap,
  Link,
};

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

export function FeatureCard({ feature, index }: FeatureCardProps) {
  const Icon = iconMap[feature.icon] ?? GraduationCap;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.6,
        delay: (index % 4) * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
      className={cn(
        "group relative flex flex-col gap-4 p-6 rounded-2xl cursor-default",
        "border transition-all duration-300",
        feature.highlight
          ? "bg-brand-blue/10 border-brand-blue/40 shadow-[0_0_30px_rgba(37,99,235,0.1)]"
          : "bg-white border-gray-100 hover:border-brand-blue/20",
        "hover:shadow-card-hover"
      )}
    >
      {feature.highlight && (
        <div className="absolute -top-3 -right-3">
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-brand-blue text-white shadow-blue-glow">
            Popular
          </span>
        </div>
      )}

      <div
        className={cn(
          "inline-flex items-center justify-center w-12 h-12 rounded-xl",
          "transition-all duration-300 group-hover:scale-110",
          feature.highlight
            ? "bg-brand-blue text-white"
            : "bg-navy-900/8 text-navy-900 group-hover:bg-brand-blue group-hover:text-white"
        )}
      >
        <Icon className="w-6 h-6" />
      </div>

      <div className="flex flex-col gap-2">
        <h3
          className={cn(
            "text-base font-semibold font-display leading-snug",
            feature.highlight ? "text-navy-900" : "text-navy-900"
          )}
        >
          {feature.title}
        </h3>
        <p className="text-sm text-gray-500 font-body leading-relaxed">
          {feature.description}
        </p>
      </div>

      <div
        className={cn(
          "mt-auto pt-3 border-t flex items-center gap-1 text-xs font-semibold transition-all duration-200",
          feature.highlight
            ? "border-brand-blue/20 text-brand-blue"
            : "border-gray-100 text-gray-300 group-hover:text-brand-blue group-hover:border-brand-blue/20"
        )}
      >
        <span>Learn more</span>
        <svg
          className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </motion.div>
  );
}
