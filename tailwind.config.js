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
        customYellow: "#F5C841",
        customYellow2: "#FBE9B3",
        grey: "#B5B6B6",
        green: "#176455",
        darkGrey: "#6D6D6D"
      },
      fontFamily: {
        mukta: ["Work San", "sans-serif"],
        noto: ["Noto Serif", "serif"]
      },
      boxShadow: {
        grey: "0px 2px 4px rgba(0, 0, 0, 0.16)",
        red: "0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3)",
        lightgrey:
          "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3)",
        tripcard:
          "0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3)",
        yetAnotherGrey:
          "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
        lastGrey: "0px 1px 3px 1px rgba(0, 0, 0, 0.15)"
      },
      backgroundImage: {
        welcome: "url('../public/images/welcome.png')",
        home: "url('../public/images/home.png')",
        invite: "url('../public/images/withFriends.png')"
      }
    }
  },
  plugins: []
};
