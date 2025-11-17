/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./_includes/**/*.{html,js,njk}", // Scan layouts and partials
    "./content/**/*.{html,js,njk}",   // Scan content pages
    "./*.{html,js,njk}"                // Scan root files like index.html
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}