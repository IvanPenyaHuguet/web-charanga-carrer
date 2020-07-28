module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  theme: {
    screens: {
      xs: { max: "480px" },
      sm: { min: "481px", max: "768px" },
      md: { min: "769px", max: "1024px" },
      lg: { min: "1025px" },
      xssm: { max: "768px" },
      smmd: { min: "481px", max: "1024px" },
      mdlg: { min: "769px" },
    },

    container: {
      center: true,
    },
    extend: {
      colors: {
        logo1: "#b0dde4",
        logo1d: "red",
        //logo1d: "#286fb4",
        //logo2: "#009cad",
        logo2: "white",
        logo3: "#00878a",
        cta: "#6421e4",
        lightgray: "#a8a8a8",
        darkgray: "#707070",
        advise: "#ffc740",
        darkblue: "#141c3a",
        black: "black",
        white: "white",
        background: "#fafafa",
        error: "#da0101",
        overlay: "#00000028",
        unselected: "#eeeeee",
        alert: {
          info: "#7472ff",
          warn: "#f8ec81",
          error: "#ff7272",
          success: "#b0fc8f",
        },
      },
    },
  },
  variants: {},
};