/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Mj_Nissabouri_0":"Mj_Nissabouri_0",
        "tahoma":"tahoma",
        "vazir":"vazir"

      },
      screens: {
        "sm" : "640px",
        "md" : "768px",
        "lg" : "1024px",
        "xl" : "1280px",
      },
    },
  },
  plugins: [],
}

