import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: "#0b131d", 800: "#0d1621", 900: "#0a0f16" },
        gold: { DEFAULT: "#d9b578", light: "#e6c88c", dark: "#d0a25f" },
        cream: "#f6f2ea",
      },
      fontFamily: {
        sora: ["Sora", "sans-serif"],
        jakarta: ["'Plus Jakarta Sans'", "sans-serif"],
        script: ["'Marck Script'", "cursive"],
      },
    },
  },
  plugins: [],
} satisfies Config;
