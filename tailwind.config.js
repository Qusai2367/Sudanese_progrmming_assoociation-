/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff6b3d',
      },
      screens: {
        'md': '850px',
        'xs': {'max': '400px'},
      },
    },
  },
  plugins: [],
}

