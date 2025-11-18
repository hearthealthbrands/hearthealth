/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/_includes/**/*.{html,js,njk}", // Now correctly scans layouts
    "./src/content/**/*.{html,js,njk}",  // Now correctly scans content pages
    "./src/*.{html,js,njk}"              // Now correctly scans root files inside src (like index.html, if applicable)
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