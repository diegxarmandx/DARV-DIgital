import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#070B14",
          900: "#0A1220",
          800: "#111D34",
          700: "#172844"
        },
        accent: {
          DEFAULT: "#2F7BFF",
          light: "#58A6FF",
          soft: "#1F4BAA"
        },
        mist: {
          300: "#BAC5DB",
          200: "#D6DDF0",
          100: "#ECF1FC"
        },
        teal: {
          soft: "#19B7B7"
        }
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(47,123,255,0.25), 0 22px 65px -25px rgba(47,123,255,0.65)",
        card: "0 20px 45px -30px rgba(0, 0, 0, 0.85)"
      },
      backgroundImage: {
        "hero-grid": "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
