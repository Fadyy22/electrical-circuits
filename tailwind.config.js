/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './**/*.html', './**/*.js'],
  theme: {
    extend: {
      colors: {
        darkSlateGray: '#2C3E50',
        lightGray: '#ECF0F1',
        silver: '#BDC3C7',
        mediumBlue: '#3498DB',
      }
    },
  },
  plugins: [],
};
