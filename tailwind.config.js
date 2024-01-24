/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    darkMode: "class",
    extend: {
      colors: {
        dark: "#100e17",
        white: "#FFFFFF",
        black: "#202026",
        "dark-suf": "#202026",
        "primary-green": "#0BCEAF",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      backgroundImage: {
        "home-bg-dark": "url(./assets/imgs/home_bg_dark.png)",
        "home-bg-light": "url(./assets/imgs/hero_bg_light.png)",
        "education-light": "url(./assets/imgs/education_light.png)",
        "education-dark": "url(./assets/imgs/education_dark.png)",
        "contact-light": "url(./assets/imgs/contact_bg_light.png)",
        "contact-dark": "url(./assets/imgs/contact_bg_dark.png)",
        footer: "url(./assets/imgs/footer.png)",
      },
      gridTemplateColumns: {
        3: "repeat(auto-fit,minmax(250px,1fr))",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities, theme }) {
      addUtilities({
        ".allunset": {
          all: "unset",
        },
      });
    }),
  ],
};
