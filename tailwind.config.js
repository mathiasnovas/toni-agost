/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["W95FA"],
      },
      colors: {
        primary: {
          DEFAULT: "#FF00BE",
          500: "#C490D1",
          400: "#FF00BE",
          300: "#FFCDFA",
        },
        secondary: {
          DEFAULT: "#07F0FF",
          400: "#07F0FF",
        },
      },
      backgroundImage: {
        "desktop-picture": "url('/images/bg2.png')",
      },
    },
  },
  plugins: [],
};
