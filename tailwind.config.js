/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0366ff",
        secondary: "#1a191f",
        tertiary: "#24242e",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
