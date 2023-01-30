/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {

      colors: {
        /* Primary Colors*/
        'primary-red': '#E63036',
        'primary-grey': '#F4F4F4',
        'primary-black':'#010101',

        /* Color Categories*/
        'cat-environment': '#E2F1E8',
        'cat-world': '#F1DADA',
        'cat-economy': '#F0E2F1',
        'cat-policy': '#F1F1E2',
      },

      boxShadow: {
        'primary': '-2px 2px 0 0 rgba(0,0,0)'
      },

      screens: {
        'mobile': '390px',
        'desktop': '1440px',
      },

      fontFamily: {
        anybody: ['Anybody', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
      },

      fontSize: {
        /* Font Size Commons */
        'categories': '10px',
        'authors-name': '14px',
        'date-article': '10px',

        /*Font Size Mobile */
        'mob-xs': '14px',
        'mob-s': '16px',
        'mob-m': '20px',
        'mob-l': '24px',

        /*Font Size Desktop */
        'desk-xs': '18px',
        'desk-s': '24px',
        'desk-m': '32px',
        'desk-l': '40px',
      },
    },
  },
  plugins: [],
}
