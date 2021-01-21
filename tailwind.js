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
    textcolor: () => ({
      textPrimary: "#383B20",
      textactioncolor: "#648F54",
    }),

    extend: {
      height: {
        h5: "5vh",
        h30: "30vh",
        "25px": "20px",
      },
      width: {
        w45: "45%",
        "25px": "20px",
      },
      spacing: {
        w30: "30%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
