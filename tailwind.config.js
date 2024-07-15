import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      icon: ["Lexend Deca", "sans-serif"],
    },
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      layout: {
        colors: {
          primary: {
            100: "#CAF5FD",
            200: "#96E5FB",
            300: "#61CBF3",
            400: "#3AAEE8",
            500: "#0084DA",
            600: "#0066BB",
            700: "#004C9C",
            800: "#00367E",
            900: "#002668",
            DEFAULT: "#0084DA",
            foreground: "#ffffff",
          },
        },
        focus: "#0066BB",

        disabledOpacity: "0.3",
        radius: {
          small: "4px",
          medium: "6px",
          large: "8px",
        },
        borderWidth: {
          small: "1px",
          medium: "2px",
          large: "3px",
        },
      },
      themes: {
        light: {
          colors: {
            background: "#f1f4f9",
            foreground: "#000000",
          },
        },

        dark: {
          colors: {
            background: "#14263b",
            foreground: "#eaeff4",
          },
        },
      },
    }),
  ],
};
