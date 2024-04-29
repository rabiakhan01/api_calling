/** @type {import('tailwindcss').Config} */
import { secondaryColor } from './src/utils/styles/color'
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'secondaryColor': secondaryColor,
      }
    },
  },
  plugins: [],
}
