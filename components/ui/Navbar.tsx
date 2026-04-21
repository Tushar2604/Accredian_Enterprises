"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks } from "@/data/navigation";
import { useActiveSection } from "@/hooks/useScrollTrigger";

const sectionIds = ["features", "how-it-works", "testimonials", "partners"];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-navy-900/95 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-brand-blue flex items-center justify-center shadow-blue-glow group-hover:shadow-[0_0_20px_rgba(37,99,235,0.6)] transition-shadow duration-300">
                <svg viewBox="0 0 32 32" className="w-5 h-5 fill-white">
                  <path d="M8 6h16a2 2 0 0 1 2 2v4H6V8a2 2 0 0 1 2-2ZM6 14h20v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-8Zm4 3a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2H10Z" />
                </svg>
              </div>
              <div>
                <span className="text-lg font-bold font-display text-white tracking-tight">
                  Accredian
                </span>
                <span className="hidden sm:block text-[10px] font-semibold text-brand-blue/80 font-body leading-none tracking-widest uppercase -mt-0.5">
                  Enterprise
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const id = link.href.replace("#", "");
                const isActive = activeSection === id;
                return (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link.href)}
                    className={cn(
                      "relative px-4 py-2 text-sm font-medium font-body rounded-lg transition-colors duration-200",
                      isActive
                        ? "text-white"
                        : "text-white/60 hover:text-white hover:bg-white/5"
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute inset-0 rounded-lg bg-white/10 border border-white/15"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <button className="text-sm font-medium font-body text-white/70 hover:text-white transition-colors duration-200 px-4 py-2">
                Sign In
              </button>
              <button
                onClick={() => handleNavClick("#contact")}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold font-body text-white bg-brand-blue rounded-xl hover:bg-brand-blue-dark transition-all duration-200 shadow-blue-glow hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]"
              >
                Get a Demo
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden p-2 text-white/70 hover:text-white transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isMobileOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={() => setIsMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-72 bg-navy-900 border-l border-white/10 lg:hidden flex flex-col"
            >
              <div className="flex items-center justify-between p-5 border-b border-white/10">
                <span className="text-base font-bold font-display text-white">Menu</span>
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="p-1 text-white/60 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07, duration: 0.3 }}
                    onClick={() => handleNavClick(link.href)}
                    className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium font-body text-white/70 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200"
                  >
                    {link.label}
                    <ChevronRight className="w-4 h-4 text-white/30" />
                  </motion.button>
                ))}
              </nav>

              <div className="p-5 border-t border-white/10 space-y-3">
                <button className="w-full py-3 text-sm font-semibold font-body text-white/70 hover:text-white border border-white/10 rounded-xl transition-colors duration-200">
                  Sign In
                </button>
                <button
                  onClick={() => handleNavClick("#contact")}
                  className="w-full py-3 text-sm font-semibold font-body text-white bg-brand-blue rounded-xl hover:bg-brand-blue-dark transition-colors duration-200"
                >
                  Get a Demo
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
