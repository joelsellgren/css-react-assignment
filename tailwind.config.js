/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      darkGrey: "#69707D",
      orange: "#FF7E1B",
      white: '#ffffff',
      offWhite: '#F6F8FD',
      transparent: 'transparent'
    },
    extend: {},
  },
  plugins: [],
}