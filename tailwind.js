const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: () => ({
      bodycolor: "#FBECCC",
      buttoncolor: "#648F54",
      cartBg: "#E74C3C",
    }),
    textColor: {
      primary: "#383B20",
      textactioncolor: "#648F54",
      secondary: "#FBECCC"
    },
    extend: {
      height: {
        h5: "5vh",
        h30: "30vh",
        "25px": "15px",
      },
      width: {
        w80: "80%",
        w45: "45%",
        "25px": "15px",
      },
      spacing: {
        w30: "30%",
      },
      zIndex: {
        100: 100,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
