/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        "mobile-m": "375px",
        "mobile-l": "425px",
      },
      colors: {
        secondary: "#FAFAFA",
        alternative: "#EAECEF",
        black: {
          light: "#1E2329",
          main: "#333333",
          dark: "#0C0E12",
        },
        gold: {
          light: "#FAD338",
          main: "#F2BC07",
          dark: "#F0B90B",
        },
        error: {
          light: "#f6685e",
          main: "#f44336",
          dark: "#aa2e25",
        },
      },
    },
  },
  plugins: [],
};
