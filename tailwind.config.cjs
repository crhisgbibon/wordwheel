/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
  ],
  theme: {
    extend: {
      fontFamily:{
        f_lato: ['Lato', 'sans-serif'],
        f_rye: ['Rye', 'serif'],
        f_bungee: ['Bungee Inline', 'sans-serif'],
      },
      colors:{
        mod_dark: 'rgb(50,50,50)',
        mod_dark_light: 'rgb(75,75,75)',
        mod_light: 'rgb(250,250,250)',
      },
    },
  },
  plugins: [],
}