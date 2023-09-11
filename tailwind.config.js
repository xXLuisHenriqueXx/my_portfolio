/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroudImage: {
        'home-bg': "url('./images/sec_home.svg')"
      }
    },
  },
  plugins: [],
}