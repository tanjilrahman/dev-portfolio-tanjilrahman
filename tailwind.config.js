/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f7e060",
        secondary: "#161817",
        tertiary: "#272725",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
