/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Raleway", "Helvetica", "Arial", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#d6ff41",
        secondary: "#171717",
        tertiary: "#292929",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
