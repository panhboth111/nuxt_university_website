const colors = require("tailwindcss/colors");
module.exports = {
  purge: [],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        hero: "42rem",
        hero_img: "30rem",
        hero_article: "32rem",
        home_about: "28rem",
        partner: "30rem",
        about_mission: "34rem",
      },
      width: {
        hero_text: "36rem",
        home_about: "54rem",
      },
      maxHeight: {
        trending: "80vh",
      },
      minHeight: {
        trending: "80vh",
      },
      gridTemplateColumns: {
        home_products: "2fr 5fr",
        home_articles_x: "5fr 2fr",
        home_contact: "1fr 2fr",
      },
    },
    colors: {
      ...colors,
      primary: "#b61536",
    },
  },
  plugins: [],
};
