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
    fontSize: {
      xs: [".75rem", "1rem"],
      sm: [".875rem", "1.25rem"],
      base: ["1rem", "1.5rem"],
      lg: ["1.125rem", "1.75rem"],
      xl: ["1.25rem", "1.75rem"],
      "2xl": ["1.5rem", "2rem"],
      "3xl": ["1.875rem", "2.25rem"],
      "4xl": ["2.25rem", "2.5rem"],
      "5xl": ["3rem", "1"],
      "6xl": ["3.75rem", "1"],
      "7xl": ["4.5rem", "1"],
      "8xl": ["6rem", "1"],
      "10xl": ["8rem", "1"],
    },
    extend: {
      colors: {
        background: "#18122B",
        baseText: "#FFFFFF",
        highlitedText: "#EC7272",
        violetText: "#7B53EE",
        linkText: "#EA2D2E",
        backgroundCard: "#1A0D4650",
      },
      backgroundImage: {
        hero: "url('/src/assets/bg_hero.svg')",
        home: "url('/src/assets/sec_home.svg')",
        about: "url('/src/assets/sec_about.svg')",
        project: "url('/src/assets/sec_project.svg')"
      },
      fontFamily: {
        bebas: ["Bebas Neue", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        dynapuff: ["DynaPuff", "cursive"],
        dancing: ["Dancing Script", "cursive"],
        jolly: ["Jolly Lodger", "cursive"],
      },
      animation: {
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-2%)" },
        },
      },
    },
  },
  plugins: [],
}