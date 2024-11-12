/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#D4AF37',
        'dark-gray': '#1A1A1A',
        'light-gray': '#F5F5F5',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      height: {
        'screen-90': '90vh',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};