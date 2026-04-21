"use client";

import { useState, useEffect, useRef } from "react";

interface UseCounterAnimationOptions {
  end: number;
  duration?: number;
  delay?: number;
  easingFn?: (t: number) => number;
}

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

export function useCounterAnimation({
  end,
  duration = 2000,
  delay = 0,
  easingFn = easeOutExpo,
}: UseCounterAnimationOptions) {
  const [count, setCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const rafRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  const startAnimation = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    const timeoutId = setTimeout(() => {
      const animate = (timestamp: number) => {
        if (!startTimeRef.current) {
          startTimeRef.current = timestamp;
        }

        const elapsed = timestamp - startTimeRef.current;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easingFn(progress);
        const currentValue = Math.round(easedProgress * end);

        setCount(currentValue);

        if (progress < 1) {
          rafRef.current = requestAnimationFrame(animate);
        } else {
          setCount(end);
          startTimeRef.current = null;
        }
      };

      rafRef.current = requestAnimationFrame(animate);
    }, delay);

    return () => clearTimeout(timeoutId);
  };

  useEffect(() => {
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return { count, startAnimation };
}
