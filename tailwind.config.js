/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**.{html,js}"],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        black: "#0E0F10",
        blue: "#1860EB",
        yellow: "#F59607",
        gray300: "#808080",
        grayPlaceholder: "#7A838D",
        grayLabel: "#555B62",
        green: "#10AB4E",
        border: "#D0D0D0",
        input: "#EAEBED"
      },
      fontSize: {
        sm10: "0.625rem",
        sm12: "0.75rem",
        sm14: "0.875rem",
        sub24: "1.5rem",
        sub32: "2rem",
        sub40: "2.5rem",
        sub48: "3rem",
        sub56: "3.5rem",
        caption16: "1rem",
        caption18: "1.125rem",
        body14: "0.875rem",
        body16: "1rem",
        body18: "1.125rem",
        body20: "1.25rem",
        button16: "1rem",
        button18: "1.125rem",
        head24: "1.5rem",
        head32: "2rem",
        head40: "2.5rem",
        head48: "3rem",
        head56: "3.5rem",
        head64: "4rem",
      },
      fontFamily: {
        poppins: "Poppins",
        inter: "Inter",
      },
    },
  },
  plugins: [],
}