"use client";

import { useEffect, useRef } from "react";
import { useCounterAnimation } from "@/hooks/useCounterAnimation";
import { useScrollTrigger } from "@/hooks/useScrollTrigger";
import { cn } from "@/lib/utils";
import type { Stat } from "@/lib/types";

interface CounterCardProps {
  stat: Stat;
  delay?: number;
  className?: string;
}

export function CounterCard({ stat, delay = 0, className }: CounterCardProps) {
  const { ref, isInView } = useScrollTrigger<HTMLDivElement>({ threshold: 0.3 });
  const { count, startAnimation } = useCounterAnimation({
    end: stat.value,
    duration: 2200,
    delay,
  });
  const hasStarted = useRef(false);

  useEffect(() => {
    if (isInView && !hasStarted.current) {
      hasStarted.current = true;
      startAnimation();
    }
  }, [isInView, startAnimation]);

  const displayValue =
    stat.value >= 1000
      ? `${Math.round(count / 1000)}K`
      : count.toString();

  return (
    <div
      ref={ref}
      className={cn(
        "group relative flex flex-col items-center justify-center p-6 rounded-2xl",
        "bg-white/5 border border-white/10 backdrop-blur-sm",
        "hover:bg-white/8 hover:border-brand-blue/30 transition-all duration-300",
        className
      )}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative text-center">
        <div className="flex items-baseline justify-center gap-0.5 mb-1">
          <span className="text-4xl lg:text-5xl font-display font-bold text-white tabular-nums tracking-tight">
            {displayValue}
          </span>
          <span className="text-2xl lg:text-3xl font-display font-bold text-brand-blue">
            {stat.suffix}
          </span>
        </div>
        <p className="text-sm font-semibold text-white/90 font-body">{stat.label}</p>
        <p className="text-xs text-white/50 font-body mt-0.5">{stat.description}</p>
      </div>
    </div>
  );
}
