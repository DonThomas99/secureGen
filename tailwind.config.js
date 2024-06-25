/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
    require('flowbite/plugin')
  ],
  daisyui:{
    darkTheme:"light",
    base:false
  }
}