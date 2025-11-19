/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,njk,js}"], // Look for classes in your source folder
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Matches your Google Font import
      },
    },
  },
  plugins: [],
}