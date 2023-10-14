/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    screens: {
      sm: "425px",
      md: "768px",
      lg: "1024px",
      xl: "1366px",
      "2xl": "1440px",
      "3xl": "1920px",
    },
    extend: {
      colors: {
        background: "#18122B",
        baseText: "#FFFFFF",
        highlitedText: "#EC7272",
        violetText: "#7B53EE",
        linkText: "#EA2D2E",
      },
      backgroundImage: {
        home: "url('./src/assets/sec_home.svg')",
        about: "url('./src/assets/sec_about.svg')",
        project: "url('./src/assets/sec_project.svg')"
      },
      fontFamily: {
        bebas: ["Bebas Neue", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        dynapuff: ["DynaPuff", "cursive"],
        dancing: ["Dancing Script", "cursive"],
      },
    },
  },
  plugins: [],
}
