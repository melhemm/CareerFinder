/** @type {import('tailwindcss').Config} */
const defaultThem = require("tailwindcss/defaultTheme")

module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", ...defaultThem.fontFamily.sans]
      },
      colors: {
        "brand-gray-1": "#dadce0",
        "brand-blue-1": "#1967d2",
        "brand-blue-2": "#4285f4",
        "brand-green-1": "#137333",
        "brand-gray-2": "#f8f9fa",
        "brand-gray-3": "#80868b",
      },
      boxShadow: {
        blue: "0 0 3px 3px #4285f4",
        gray: "0 1px 3px 0 rgba(60, 64, 67, .3)",
      }
    },
  },
  plugins: [],
  variants: {
    extend: {
      margin: ["first"],
    }
  }
}
