module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        "bearBig": "30rem",
        "bearSmall": "20rem",
      },
      height: {
        "bearBig": "30rem",
        "bearSmall": "20rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
