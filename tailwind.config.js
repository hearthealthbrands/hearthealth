/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,njk,js,md}"], 
  theme: {
    extend: {
      fontFamily: {
        // "Elegant" font for Headings
        serif: ['"Playfair Display"', 'serif'],
        // "Clean" font for Body text
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#60A13C', // Your specific Apple Green
          dark: '#4d8230',    // A calculated darker shade for hover states
        }
      }
    },
  },
  plugins: [],
}