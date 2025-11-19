/** @type {import('tailwindcss').Config} */
module.exports = {
  // 1. Content: Added 'md' to ensure markdown files are also scanned
  content: ["./src/**/*.{html,njk,js,md}"], 
  
  theme: {
    extend: {
      // 2. Typography: Connects to your Inter font import
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      // 3. Colors: Defines your brand colors semantically
      colors: {
        primary: {
          DEFAULT: '#16a34a', // Use as "bg-primary" or "text-primary"
          dark: '#15803d',    // Use as "bg-primary-dark" or "hover:bg-primary-dark"
        }
      }
    },
  },
  plugins: [],
}