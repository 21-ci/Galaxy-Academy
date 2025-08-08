/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        alumni: ['Alumni Sans', 'sans-serif'],
      },
      colors: {
        primary: '#000000',
      },
      fontFamily: {
        alumni: ['Alumni Sans', 'sans-serif'],
      },
    },
    screens: {
      mobile: '320px',
      'mobile-big': '568px',
      tablet: '768px',
      laptop: '1200px',
      'laptop-big': '1280px',
      desktop: '1440px',
      'desktop-light': '1600px',
      'desktop-big': '1800px',
      'desktop-hard': '1920px',
    },
  },
  plugins: [],
};
