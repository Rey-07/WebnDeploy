/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "gradient-primary": `linear-gradient(to right, ${theme(
          "colors.pink"
        )}, ${theme("colors.orange")})`,
      }),
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        "my-custom-grey1": "rgb(15,23,42)",
        "my-custom-grey2": "rgb(30,41,59)",
        "my-custom-grey3": "rgb(22,33,61)",
        "my-custom-grey4": "rgb(148,163,184)",
        "my-custom-yellow": "rgb(251,191,36)",
        "my-custom-yellow2": "rgb(250,174,15)",
        "my-custom-pink": "rgb(103,24,57)",
        "my-custom-pink2": "rgb(255,231,231)",
        "my-custom-cream": "rgb(255,246,210)",
        "my-custom-pink3": "rgb(255,217,217)",
        "my-blue": "rgb(8,102,255)",
        "my-blue1": "rgb(10,102,194)",
        "my-blue2": "rgb(31,111,139)",
      },
    },
    container: {
      center: true,
      padding: {
        Default: "20px",
        md: "40px",
      },
    },
  },
  plugins: [],
};
