module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        "bearBig": "55vw",
        "bearSmall": "45vw",
      },
      height: {
        "bearBig": "50vh",
        "bearSmall": "30vh",
      },
      fontSize: {
        "headerBig": "5vw",
        "headerMed": "6vw",
        "headerSmall": "7vw",
        "scoreBig": "5vw",
        "scoreMed": "6vw",
        "scoreSmall": "7vw",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
