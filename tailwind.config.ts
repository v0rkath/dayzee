import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        evanstontavern: ["EasternTavern-1893"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "dark-blue": "#0C1013",
        "dark-blue-sec": "#12171D",
        "dark-blue-third": "#181D23",
        "dark-sub": "#343F45",
        "dark-border": "#222A30",
        "darkest": "#0a0d11",
      },
    },
  },
  plugins: [],
} satisfies Config;
