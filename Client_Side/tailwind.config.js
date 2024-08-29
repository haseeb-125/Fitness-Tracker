/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-bg': '#ffffff',
        'light-text': '#000000',
        'dark-bg': '#1a202c',
        'dark-text': '#ffffff',
      
      },
      fontFamily: {
        'display': ['Oswald'],
      'body': ['"Open Sans"'],

      }
    },
  },
  plugins: [],
}
