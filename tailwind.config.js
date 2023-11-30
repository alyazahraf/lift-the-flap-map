/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray': '#00000012',
        'button-gray': "#CFCFCF",
        'button-culture': "#0000004f",
        'question': '#626262'
      },
      borderRadius: {
        '4xl': '36px',
      },
    },
  },
  plugins: [],
}

