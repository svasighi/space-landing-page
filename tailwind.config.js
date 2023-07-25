const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          sm: '600px',
          md: '728px',
          lg: '984px',
          xl: '1240px',
          '2xl': '1496px',
        },
      },
      colors: {
        brand: {
          primary: '#0B0D17',
          secondary: '#D0D6F9',
        },
      },
      backgroundImage: {
        'home-mobile': 'url(images/home/background-home-mobile.jpg)',
        'home-tablet': 'url(images/home/background-home-tablet.jpg)',
        'home-desktop': 'url(images/home/background-home-desktop.jpg)',

        'crew-mobile': 'url(images/crew/background-crew-mobile.jpg)',
        'crew-tablet': 'url(images/crew/background-crew-tablet.jpg)',
        'crew-desktop': 'url(images/crew/background-crew-desktop.jpg)',

        'destination-mobile':
          'url(images/destination/background-destination-mobile.jpg)',
        'destination-tablet':
          'url(images/destination/background-destination-tablet.jpg)',
        'destination-desktop':
          'url(images/destination/background-destination-desktop.jpg)',

        'technology-mobile':
          'url(images/technology/background-technology-mobile.jpg)',
        'technology-tablet':
          'url(images/technology/background-technology-tablet.jpg)',
        'technology-desktop':
          'url(images/technology/background-technology-desktop.jpg)',
      },
      fontFamily: {
        sans: ['Barlow', ...defaultTheme.fontFamily.sans],
        serif: ['Bellefair', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
};
