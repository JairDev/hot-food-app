const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      bodycolor: "#FBECCC",
      textcolor: "#383B20",
      buttoncolor: "#648F54",
      searchcolor: "#648F54"
    },
    extend: {
      height: {
        "h5": "5vh",
        "h30": "30vh"
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
