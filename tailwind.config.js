/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line no-undef
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
