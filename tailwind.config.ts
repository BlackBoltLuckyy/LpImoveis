import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      // Cores vêm dos tokens em src/index.css (:root)
      colors: {
        branco: "rgb(var(--branco-rgb) / <alpha-value>)",
        superficie: { DEFAULT: "var(--superficie)", 2: "var(--superficie-2)", 3: "var(--superficie-3)" },
        linha: { DEFAULT: "var(--linha)", forte: "var(--linha-forte)", input: "var(--linha-input)" },
        tinta: {
          DEFAULT: "rgb(var(--tinta-rgb) / <alpha-value>)",
          2: "var(--tinta-2)",
          3: "var(--tinta-3)",
          "sobre-ouro": "var(--tinta-sobre-ouro)",
        },
        ouro: { DEFAULT: "rgb(var(--ouro-rgb) / <alpha-value>)", texto: "var(--ouro-texto)", escuro: "var(--ouro-escuro)" },
        bronze: "rgb(var(--bronze-rgb) / <alpha-value>)",
        champanhe: "var(--champanhe)",
        verde: { whats: "var(--verde-whats)", texto: "var(--verde-texto)", claro: "var(--verde-claro)" },
        creme: { DEFAULT: "rgb(var(--creme-rgb) / <alpha-value>)", 2: "var(--creme-2)" },
      },
      fontFamily: {
        sans: ["var(--fonte)"],
        destaque: ["var(--fonte-destaque)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
