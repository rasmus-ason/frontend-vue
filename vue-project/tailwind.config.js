/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  purge: [
    './public/**/*.html',
    './src/**/*.html',
    './src/**/*.vue',
  ],
  
}
