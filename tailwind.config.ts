import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#060D1A",
          900: "#0F1B2D",
          800: "#152236",
          700: "#1C2E47",
          600: "#243858",
        },
        brand: {
          blue: "#2563EB",
          "blue-light": "#3B82F6",
          "blue-dark": "#1D4ED8",
          cyan: "#06B6D4",
          "cyan-light": "#22D3EE",
        },
        accent: {
          gold: "#F59E0B",
          emerald: "#10B981",
        },
      },
      fontFamily: {
        display: ["var(--font-sora)", "system-ui", "sans-serif"],
        body: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-mesh":
          "radial-gradient(at 40% 20%, hsla(228,80%,30%,0.6) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(220,70%,20%,0.5) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(240,80%,25%,0.4) 0px, transparent 50%), radial-gradient(at 80% 50%, hsla(210,70%,40%,0.3) 0px, transparent 50%), radial-gradient(at 0% 100%, hsla(228,75%,20%,0.5) 0px, transparent 50%)",
        "hero-grid":
          "linear-gradient(rgba(37,99,235,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "60px 60px",
      },
      animation: {
        "marquee-left": "marquee-left 30s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        "marquee-left": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(37,99,235,0.3)" },
          "100%": { boxShadow: "0 0 40px rgba(37,99,235,0.7)" },
        },
      },
      boxShadow: {
        "card-hover": "0 20px 60px rgba(37,99,235,0.15)",
        "blue-glow": "0 0 40px rgba(37,99,235,0.4)",
        "inner-blue": "inset 0 1px 0 rgba(37,99,235,0.2)",
      },
      transitionTimingFunction: {
        spring: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      },
    },
  },
  plugins: [],
};

export default config;
