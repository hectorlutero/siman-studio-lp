import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      colors: {
        oxford: {
          100: "#00040c",
          200: "#010818",
          300: "#010c24",
          400: "#01102f",
          500: "#02153d",
          600: "#053192",
          700: "#074fe9",
          800: "#5186fa",
          900: "#a8c3fc",
          DEFAULT: "#02153d",
        },
        tekhelet: {
          100: "#0f0719",
          200: "#1e0e31",
          300: "#2e154a",
          400: "#3d1c63",
          500: "#4b227a",
          600: "#6e32b2",
          700: "#915ad1",
          800: "#b691e0",
          900: "#dac8f0",
          DEFAULT: "#4b227a",
        },
        munsell: {
          100: "#001f24",
          200: "#003e47",
          300: "#015c6b",
          400: "#017b8e",
          500: "#0197af",
          600: "#01d3f4",
          700: "#39e4fe",
          800: "#7bedfe",
          900: "#bdf6ff",
          DEFAULT: "#0197af",
        },
        turquoise: {
          100: "#00302a",
          200: "#006053",
          300: "#00907d",
          400: "#00c0a6",
          500: "#00eed0",
          600: "#27ffe2",
          700: "#5dffe9",
          800: "#93fff1",
          900: "#c9fff8",
          DEFAULT: "#00eed0",
        },
        white: {
          100: "#333333",
          200: "#666666",
          300: "#999999",
          400: "#cccccc",
          500: "#ffffff",
          600: "#ffffff",
          700: "#ffffff",
          800: "#ffffff",
          900: "#ffffff",
          DEFAULT: "#ffffff",
        },
      },
    },
  },
  plugins: [],
};

export default config;
