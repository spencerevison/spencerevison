const Color = require("color");
const lighten = (clr, val) => Color(clr).lighten(val).rgb().string();
const darken = (clr, val) => Color(clr).darken(val).rgb().string();

const colors = {
  primary: "#4C1D95",
  secondary: "#9B63C8",
  tertiary: "#F4A5AE",
  quaternary: "#F5D7E3",
  black: "#18191f",
};

module.exports = {
  purge: ["./src/**/*.js", "./public/page-data/**/*.json"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          lighter: lighten(colors.primary, 0.5),
          light: lighten(colors.primary, 0.25),
          DEFAULT: colors.primary,
          dark: darken(colors.primary, 0.25),
          darker: darken(colors.primary, 0.5),
        },
        secondary: {
          lighter: lighten(colors.secondary, 0.5),
          light: lighten(colors.secondary, 0.25),
          DEFAULT: colors.secondary,
          dark: darken(colors.secondary, 0.25),
          darker: darken(colors.secondary, 0.5),
        },
        tertiary: {
          lighter: lighten(colors.tertiary, 0.5),
          light: lighten(colors.tertiary, 0.25),
          DEFAULT: colors.tertiary,
          dark: darken(colors.tertiary, 0.25),
          darker: darken(colors.tertiary, 0.5),
        },
        quaternary: {
          lighter: lighten(colors.quaternary, 0.5),
          light: lighten(colors.quaternary, 0.25),
          DEFAULT: colors.quaternary,
          dark: darken(colors.quaternary, 0.25),
          darker: darken(colors.quaternary, 0.5),
        },
        black: colors.black,
        highlight: lighten(colors.primary, 0.5),
      },
      fontFamily: {
        sans: ["Roboto", "Helvetica", "Arial", "sans-serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      gridTemplateRows: {
        layout: "auto 1fr auto;",
      },
      fontWeight: {
        normal: 300,
        semibold: 500,
        extrabold: 900,
      },
      height: {
        "screen/2": "50vh",
        "screen/3": "33.33vh",
        "screen/4": "25vh",
        "screen/5": "20vh",
        120: "30rem",
        140: "35rem",
        160: "40rem",
        200: "50rem",
        280: "70rem",
        360: "90rem",
        480: "120rem",
        "screen-nav-xs": "calc(100vh - 56px)",
        "screen-nav-md": "calc(100vh - 72px)",
      },
      width: {
        "screen/2": "50vw",
        "screen/3": "33.33vw",
        "screen/4": "25vw",
        "screen/5": "20vw",
        120: "30rem",
        140: "35rem",
        160: "40rem",
        200: "50rem",
        280: "70rem",
        360: "90rem",
        480: "120rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
