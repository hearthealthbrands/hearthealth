/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/_includes/**/*.{html,js,njk}", 
    "./src/content/**/*.{html,js,njk}",  
    "./src/*.{html,js,njk}"              
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      // This centers the container by default and adds padding
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          // We stop growing after 1280px so it doesn't look "zoomed out" on big screens
          '2xl': '1280px', 
        },
      },
    },
  },
  plugins: [],
}