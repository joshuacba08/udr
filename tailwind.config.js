import { mtConfig } from "@material-tailwind/react";

/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",

    "./src/**/*.{js,ts,jsx,tsx}",

    "./node_modules/@material-tailwind/react/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#3179bd",
        secondary: "#ffffff",
        error: "#e91248",
        success: "#35b890",
        warning: "#ffb503",
      },
      fontFamily: {
        "gt-walsheim": ["GT Walsheim", "sans-serif"],
      },
    },
  },

  plugins: [mtConfig],
};
