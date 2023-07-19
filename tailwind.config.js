/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateRows: {
        layout: 'auto 1fr auto',
      },
      backgroundImage: {
        'banner-img': `url(''))`,
      },
    },
  },
  plugins: [],
};
