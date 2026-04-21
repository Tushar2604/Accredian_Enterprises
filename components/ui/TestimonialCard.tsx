import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Testimonial } from "@/lib/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

const avatarColors: Record<string, string> = {
  PS: "from-violet-500 to-purple-600",
  VN: "from-blue-500 to-cyan-600",
  AK: "from-emerald-500 to-teal-600",
  RM: "from-orange-500 to-red-600",
  DJ: "from-pink-500 to-rose-600",
  AB: "from-indigo-500 to-blue-600",
};

export function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  const gradientClass = avatarColors[testimonial.avatar] ?? "from-brand-blue to-brand-blue-dark";

  return (
    <div
      className={cn(
        "flex flex-col gap-5 p-7 rounded-2xl",
        "bg-white border border-gray-100 shadow-sm",
        "h-full",
        className
      )}
    >
      <div className="flex items-center gap-1">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-accent-gold text-accent-gold" />
        ))}
      </div>

      <blockquote className="text-sm text-gray-600 font-body leading-relaxed flex-1">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
        <div
          className={cn(
            "w-10 h-10 rounded-full bg-gradient-to-br flex items-center justify-center flex-shrink-0",
            gradientClass
          )}
        >
          <span className="text-xs font-bold text-white">{testimonial.avatar}</span>
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-navy-900 font-display truncate">
            {testimonial.author}
          </p>
          <p className="text-xs text-gray-500 font-body truncate">
            {testimonial.role} · {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
}
