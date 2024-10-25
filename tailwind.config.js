/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lexend: ["Lexend", "sans-serif"],
        dmSans: ["DM Sans", "sans-serif"],
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
        "3xl": "1600px",
      },
      backgroundImage: {
        cta: "url('../img/cta.png')",
      },
      colors: {
        skyBlue: "#257BEB",
        midnightBlue: "#172C54",
        deepGray: "#111827",
        lavenderGray: "#D4D2E3",
        pearlGray: "#F8F8FA",
        vibrantGreen: "#3CC261",
        lightLavender: "#D9DBE9",
        mutedLavender: "#BAB5D0",
        paleLavender: "#E6E5EF",
        softLilac: "#EFF0F6",
        mutedPurple: "#5D5A88",
        vibrantOrange: "#EF7C00",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
