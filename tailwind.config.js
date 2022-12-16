/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E8572",
        btnHover: "#249D87",
        yellow: "#F5C841",
        grey: "#B5B6B6"
      },
      fontFamily: {
        mukta: ["Mukta", "sans-serif"],
        noto: ["Noto Serif", "serif"]
      },
      boxShadow: {
        grey: "0px 2px 4px rgba(0, 0, 0, 0.16)"
      },
      backgroundImage: {
        welcome: "url('../public/images/welcome.png')",
        home: "url  ('../public/images/home.png')"
      }
    }
  },
  plugins: []
};
