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
        headerText: '#EAECEF',
        primaryText: '#848E9C',
        black: {
          light: "#1E2329",
          main: "#181a20",
          dark: "#0C0E11",
        },
        gold: {
          light: "#FCD535",
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
