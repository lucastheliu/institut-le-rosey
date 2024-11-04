import type { Config } from "tailwindcss";
import { DarkModeConfig } from "tailwindcss/types/config";
import typography from "@tailwindcss/typography";
import scrollbar from "tailwind-scrollbar";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [typography, scrollbar],
  darkMode: "false" as Partial<DarkModeConfig>,
};
export default config;
