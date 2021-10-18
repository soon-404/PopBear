module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        "bearBig": "40rem",
        "bearSmall": "20rem",
      },
      height: {
        "bearBig": "40rem",
        "bearSmall": "20rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
