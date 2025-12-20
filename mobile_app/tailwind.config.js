/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.tsx", "./components/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
    colors: {
      primary: "#8C4D2A",
      primaryLight: "#D9B870",
      background: "#0F172A",
      surface: "#1A1F36",
    },
  },
  },
  plugins: [],
}