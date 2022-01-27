module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: true,

  theme: {
    colors: {
      primary: "#5bbdbb",
      "primary-light": "#a4dbda",
      secondary: "#e8d716",
      black: {
        100: "#202020",
        200: "#2b2b2b",
        300: "#32301f",
        400: "#eceef2",
        800: "#8799a3",
      },
      white: "#ffffff",
      purple: "#c13584",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
      oswald: ["Oswald"],
      roboto: ["Roboto"],
    },
    extend: {
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
    },
  },
  plugins: [],
};
