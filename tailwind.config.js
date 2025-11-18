/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/_includes/**/*.{html,js,njk}", // Scan layouts and partials
    "./src/content/**/*.{html,js,njk}",  // Scan content pages
    "./src/*.{html,js,njk}"              // Scan root files like index.html (if they are in src)
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