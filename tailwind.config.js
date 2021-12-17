module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#00B0FF",
          200: "#009ee8",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
