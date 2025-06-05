/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        libre: ['"Libre Baskerville"', 'serif'],
        figtree: ['Figtree', 'sans-serif'],
      },
      colors: {
        'tiffany-blue': '#77cbb9',
        'moonstone': '#75b8c8',
        'feldgrau': '#506c64',
        'silver': '#cdd3d5',
        'licorice': '#1a1a1a',
      },
    },
  },
  plugins: [],
}
