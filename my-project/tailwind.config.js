/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'osens':['Open Sans', 'sans-serif']
      },
      maxWidth:{
        'container':"1320px"
      },
    },
  },
  plugins: [],
}