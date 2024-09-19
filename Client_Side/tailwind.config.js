/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orangecolor:"#ff2929",
        blackcolor:"#0a0a0a",
        textgray:"#6c7293",
        bg_black:"#191C24",
      },
      fontFamily: { 
          oswald: ['Oswald', 'sans-serif'], // Add the Oswald font here
       }
    },
  },
  plugins: [],
}
