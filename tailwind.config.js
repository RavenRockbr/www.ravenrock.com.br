/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        blueweb: "#3EBEFF",
        purpleweb: "#7E3EFF",
        indigoweb: "#3B3EFF",
        darkbg: "#1F1F1F",
        darkbg2: "#121212",
      }
    }
  },
  plugins: [],
}