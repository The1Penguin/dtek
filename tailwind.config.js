module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{tsx,ts}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
}
