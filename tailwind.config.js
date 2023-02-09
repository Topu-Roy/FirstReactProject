/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/*.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Saira-Stencil-One' : 'Saira Stencil One',
        'Poly' : 'Poly , sans',
      }
    },
  },
  plugins: [],
}
