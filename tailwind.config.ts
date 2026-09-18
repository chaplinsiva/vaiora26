import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAFCFF",
        foreground: "#090D16",
        cyber: {
          50: "#F0F9FF",
          100: "#E0F2FE",
          200: "#BAE6FD",
          300: "#7DD3FC",
          400: "#38BDF8",
          500: "#0EA5E9",
          600: "#0284C7",
          cyan: "#00F0FF",
          neon: "#00E5FF",
          electric: "#2563EB",
          deep: "#0B132B",
          dark: "#080E1A",
          slate: "#1E293B",
        },
      },
      boxShadow: {
        "neon-cyan": "0 0 20px -3px rgba(0, 229, 255, 0.45), 0 0 8px -1px rgba(0, 229, 255, 0.35)",
        "neon-cyan-lg": "0 0 35px -2px rgba(0, 229, 255, 0.6), 0 0 15px -1px rgba(0, 229, 255, 0.4)",
        "neon-blue": "0 0 25px -4px rgba(37, 99, 235, 0.45), 0 0 10px -2px rgba(37, 99, 235, 0.3)",
        "glass": "0 8px 32px 0 rgba(14, 165, 233, 0.08)",
        "glass-hover": "0 12px 40px 0 rgba(0, 229, 255, 0.18)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulseSlow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite alternate",
        "scanline": "scanline 8s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseSlow: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
        glowPulse: {
          "0%": { filter: "drop-shadow(0 0 15px rgba(0, 229, 255, 0.4))" },
          "100%": { filter: "drop-shadow(0 0 35px rgba(0, 229, 255, 0.85))" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(1000%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
