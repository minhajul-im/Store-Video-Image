/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        fontReg: ["Regular"],
        fontMed: ["Medium"],
        fontBold: ["Bold"],
      },
      colors: {
        BG: {
          main: "var(--bg-main)",
        },

        TX: {
          main: "var(--text-main)",
        },
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "100%",
          md: "95%",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1440px",
        },
      },
    },
  },
  plugins: [],
};
