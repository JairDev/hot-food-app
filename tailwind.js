const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      bodycolor: "#FBECCC",
      textcolor: "#383B20",
      buttoncolor: "#648F54"
    },
    extend: {
      height: {
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
      },
      spacing: {
        "w30": "30%"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
