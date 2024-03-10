/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        footer: '#F8F0F4',
        header: '#DFF6F6',
        link: '#5200FF',
      },
    },
    fontFamily: {
      handlee: ['Handlee', 'regular'],
    },
  },
  plugins: [],
};
