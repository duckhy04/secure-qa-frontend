/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      'colors': {
        'dodger-blue': '#1E90FF',
        'dark-grey': '#A9A9A9',
        'canary-yellow': '#FFEF00',
        'sea-green': '#2EB857',
        'blue-violet': '#8A2BE2',
        'diamond': '#B9F2FF',
        'safety-orange': '#FF6700',
        'light-grayish-blue': '#E8F0FE',
        'fire-engine-red': '#CE2029',
      },
      backgroundImage: {
        'cucumber-water': 'linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%)',
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.no-scrollbar': {
          '-ms-overflow-style': 'none', /* IE and Edge */
          'scrollbar-width': 'none', /* Firefox */
        },
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none', /* Chrome, Safari, Edge */
        },
      });
    },
  ],
}