/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'osans':['Open Sans', 'sans-serif'],
        'popps':['Poppins', 'sans-serif']
      },
      maxWidth:{
        'container':"1040px"
      },
      backgroundColor:{
        mediumClr:"#6C6C6C",
      },
    },
  },
  plugins: [],
}