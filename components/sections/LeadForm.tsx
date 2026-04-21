"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { leadFormSchema, type LeadFormSchema } from "@/lib/validations";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { cn } from "@/lib/utils";

const teamSizes = [
  { value: "1-10", label: "1 – 10 employees" },
  { value: "11-50", label: "11 – 50 employees" },
  { value: "51-200", label: "51 – 200 employees" },
  { value: "201-500", label: "201 – 500 employees" },
  { value: "501-1000", label: "501 – 1,000 employees" },
  { value: "1000+", label: "1,000+ employees" },
];

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

function FormInput({ label, error, className, ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium font-body text-navy-900">
        {label}
      </label>
      <input
        className={cn(
          "px-4 py-3 rounded-xl border text-sm font-body bg-white text-navy-900",
          "placeholder:text-gray-400 outline-none transition-all duration-200",
          "focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10",
          error
            ? "border-red-400 bg-red-50"
            : "border-gray-200 hover:border-gray-300",
          className
        )}
        {...props}
      />
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs text-red-500 font-body"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
}

export function LeadForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LeadFormSchema>({
    resolver: zodResolver(leadFormSchema),
  });

  const onSubmit = async (data: LeadFormSchema) => {
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message ?? "Submission failed");
      }

      setIsSubmitted(true);
      toast.success("Request received! Our enterprise team will be in touch within 24 hours.", {
        duration: 5000,
      });
      reset();
    } catch (err) {
      const message = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      toast.error(message);
    }
  };

  return (
    <section id="contact" className="relative py-20 lg:py-28 bg-navy-900 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.15),transparent_70%)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-brand-blue/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Copy */}
          <AnimatedSection direction="left">
            <div className="space-y-6 lg:sticky lg:top-24">
              <div>
                <p className="text-xs font-semibold font-body text-brand-blue tracking-widest uppercase mb-3">
                  Get in Touch
                </p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white leading-tight">
                  Let&apos;s build your
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue-light to-brand-cyan-light">
                    {" "}learning future
                  </span>{" "}
                  together.
                </h2>
              </div>

              <p className="text-base text-white/60 font-body leading-relaxed">
                Fill in the form and one of our enterprise L&D consultants will reach out
                within 24 hours to understand your needs and schedule a personalized demo.
              </p>

              {/* Benefit list */}
              <ul className="space-y-4">
                {[
                  "Free 30-min platform walkthrough with your use case",
                  "Custom program recommendation for your industry",
                  "Pricing tailored to your team size and scope",
                  "No commitment, no spam — just a conversation",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-cyan flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-white/70 font-body">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Contact info */}
              <div className="pt-4 border-t border-white/10 space-y-2">
                <p className="text-xs text-white/40 font-body">Or reach us directly:</p>
                <a
                  href="mailto:enterprise@accredian.com"
                  className="text-sm text-brand-blue-light hover:text-white transition-colors duration-200 font-body"
                >
                  enterprise@accredian.com
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* Right: Form */}
          <AnimatedSection direction="right" delay={0.15}>
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-10 text-center space-y-5"
              >
                <div className="w-16 h-16 rounded-full bg-accent-emerald/20 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8 text-accent-emerald" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-display text-white mb-2">
                    You&apos;re on the list!
                  </h3>
                  <p className="text-sm text-white/60 font-body leading-relaxed">
                    Our enterprise team will contact you within 24 hours to schedule
                    your personalized demo session.
                  </p>
                </div>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-sm text-brand-blue-light hover:text-white transition-colors duration-200 font-body"
                >
                  Submit another request →
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl space-y-5"
                noValidate
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FormInput
                    label="Full Name *"
                    placeholder="Priya Sharma"
                    error={errors.fullName?.message}
                    {...register("fullName")}
                  />
                  <FormInput
                    label="Work Email *"
                    type="email"
                    placeholder="priya@company.com"
                    error={errors.workEmail?.message}
                    {...register("workEmail")}
                  />
                </div>

                <FormInput
                  label="Company Name *"
                  placeholder="Acme Corp"
                  error={errors.companyName?.message}
                  {...register("companyName")}
                />

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium font-body text-navy-900">
                    Team Size *
                  </label>
                  <select
                    className={cn(
                      "px-4 py-3 rounded-xl border text-sm font-body bg-white text-navy-900",
                      "outline-none transition-all duration-200",
                      "focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10",
                      errors.teamSize
                        ? "border-red-400 bg-red-50"
                        : "border-gray-200 hover:border-gray-300"
                    )}
                    defaultValue=""
                    {...register("teamSize")}
                  >
                    <option value="" disabled>
                      Select team size
                    </option>
                    {teamSizes.map((size) => (
                      <option key={size.value} value={size.value}>
                        {size.label}
                      </option>
                    ))}
                  </select>
                  {errors.teamSize && (
                    <motion.p
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-xs text-red-500 font-body"
                    >
                      {errors.teamSize.message}
                    </motion.p>
                  )}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium font-body text-navy-900">
                    Message{" "}
                    <span className="text-gray-400 font-normal">(optional)</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your L&D goals, skill gaps, or timeline..."
                    className={cn(
                      "px-4 py-3 rounded-xl border text-sm font-body bg-white text-navy-900",
                      "placeholder:text-gray-400 outline-none transition-all duration-200 resize-none",
                      "focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10",
                      errors.message
                        ? "border-red-400 bg-red-50"
                        : "border-gray-200 hover:border-gray-300"
                    )}
                    {...register("message")}
                  />
                  {errors.message && (
                    <motion.p
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-xs text-red-500 font-body"
                    >
                      {errors.message.message}
                    </motion.p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "w-full flex items-center justify-center gap-2.5 py-4 rounded-2xl",
                    "text-sm font-semibold font-body text-white transition-all duration-200",
                    isSubmitting
                      ? "bg-brand-blue/70 cursor-not-allowed"
                      : "bg-brand-blue hover:bg-brand-blue-dark shadow-blue-glow hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:scale-[1.01] active:scale-[0.99]"
                  )}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Request a Free Demo
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-xs text-center text-gray-400 font-body">
                  By submitting, you agree to our{" "}
                  <a href="#" className="text-brand-blue hover:underline">
                    Privacy Policy
                  </a>
                  . No spam, ever.
                </p>
              </form>
            )}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
