const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#0B0D17',
          secondary: '#D0D6F9',
        },
      },
      fontFamily: {
        sans: ['Barlow', ...defaultTheme.fontFamily.sans],
        serif: ['Bellefair', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
};
