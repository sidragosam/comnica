/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryDark: "#31363c",
        accentGreen: {
          DEFAULT: "#29a98b",
          light: "#20876f",
          dark: "#186553",
        },
        accentPurple: "#682c5d",
      },
    },
  },
  plugins: [],
};
