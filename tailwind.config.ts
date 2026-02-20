import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1A1A1A",
        secondary: "#FAF8F5",
        accent: "#B56A4A",
        warm: {
          50: "#FAF8F5",
          100: "#F5F0EB",
          200: "#E8E0D8",
          300: "#D4C8BC",
        },
        neutral: {
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#E5E5E5",
          300: "#D4D4D4",
          400: "#A3A3A3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },
        // Subtle pastel accents
        sage: {
          50: "#F0F5F1",
          100: "#DCE8DE",
          200: "#B8D1BC",
          400: "#7BA882",
          500: "#5E8F65",
        },
        rose: {
          50: "#FDF2F4",
          100: "#F9E0E5",
          200: "#F2C1CB",
          400: "#D4818F",
          500: "#C4616F",
        },
        gold: {
          50: "#FBF7EF",
          100: "#F5ECDA",
          200: "#EBDAB6",
          400: "#C9A84C",
          500: "#B8943E",
        },
        sky: {
          50: "#EFF5FA",
          100: "#DCE9F4",
          200: "#B9D4E9",
          400: "#6BA3CB",
          500: "#4D8BB8",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
