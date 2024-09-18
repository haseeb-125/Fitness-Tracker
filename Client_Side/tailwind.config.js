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
        customgray: '#262626',
      },
      width: {
        '112': '28rem',
        '144': '36rem', // Add your custom width
      },
      fontFamily: { 
          oswald: ['Oswald', 'sans-serif'], // Add the Oswald font here
      },
      boxShadow: {
        'custom-light': '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)', // Custom shadow
      },
    },
  },
  plugins: [],
}
