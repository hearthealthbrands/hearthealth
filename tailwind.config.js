/** @type {import('tailwindcss').Config} */
module.exports = {
  // Specific paths to avoid scanning node_modules
  content: [
    "./*.{html,js}",       // Scans files in the root (index.html, brands.html, script.js)
    "./content/**/*.html"  // Scans files in the content folder
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