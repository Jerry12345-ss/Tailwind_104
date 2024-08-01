/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors : {
        'primary' : '#ff7800',
        'secondary' : '#ff9100',
        'link' : '#1654b9',
        'link_hover' : '#659ffa'
      },
      screens: {
        '1xl' : '1280px'
      }
    },
  },
  plugins: [],
}

