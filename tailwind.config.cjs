/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "375px",
      },
      colors: {
        secondary: "#FAFAFA",
        alternative: "#EAECEF",
        black: {
          light: "#1E2329",
          main: "#0B0E11",
          dark: "#0C0E12",
        },
        gold: {
          light: "#FAD338",
          main: "#F2BC07",
          dark: "#F0B90B",
        },
      },
    },
  },
  plugins: [],
};
