// tailwind.config.ts
import type { Config } from "tailwindcss";
import animatePlugin from "tailwindcss-animate";

const config: Config = {
  // 1. Use a string here
  darkMode: "class",

  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],

  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      /* …your fontFamily, colors, animations, etc… */
    },
  },

  plugins: [
    // 2. Use the imported plugin instead of require()
    animatePlugin,

    // your custom utilities still work:
    ({ addUtilities }) => {
      addUtilities({
        ".perspective": { perspective: "1000px" },
        ".preserve-3d": { transformStyle: "preserve-3d" },
        ".backface-hidden": { backfaceVisibility: "hidden" },
        ".rotate-y-180": { transform: "rotateY(180deg)" },
      });
    },
  ],
};

export default config;
