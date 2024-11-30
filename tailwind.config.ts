import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    {
      pattern:
        /(bg|text)-(yellow|blue|emerald|amber|green|orange|cyan|red|violet|indigo|rose|stone|sky|slate|purple|zinc)-(100|700)/,
    },
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
      },
      fontSize: {
        clamp: "clamp(1rem, 5vw, 3rem)",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: "#FFFFFF",
            foreground: "#11181C",
            primary: {
              50: "#f1f4fd",
              100: "#dfe7fa",
              200: "#c5d5f8",
              300: "#9ebbf2",
              400: "#7097ea",
              500: "#4169e1",
              600: "#3957d7",
              700: "#3044c5",
              800: "#2d39a0",
              900: "#29347f",
              foreground: "#FFFFFF",
              DEFAULT: "#4169e1",
            },
            secondary: {
              DEFAULT: "#006FEE",
              foreground: "#FFFFFF",
            },
          },
        },
        dark: {
          colors: {
            background: "#000000",
            foreground: "#ECEDEE",
            primary: {
              50: "#f1f4fd",
              100: "#dfe7fa",
              200: "#c5d5f8",
              300: "#9ebbf2",
              400: "#7097ea",
              500: "#4169e1",
              600: "#3957d7",
              700: "#3044c5",
              800: "#2d39a0",
              900: "#29347f",
              foreground: "#FFFFFF",
              DEFAULT: "#4169e1",
            },
            secondary: {
              DEFAULT: "#006FEE",
              foreground: "#FFFFFF",
            },
          },
        },
      },
    }),
  ],
};
export default config;
