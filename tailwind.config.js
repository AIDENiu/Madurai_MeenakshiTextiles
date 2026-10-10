/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          dark: '#4A151D',
          DEFAULT: '#6D1F2A',
          light: '#9B2D3C',
        },
        gold: {
          light: '#E0C788',
          DEFAULT: '#C5A059',
          dark: '#B08B40', /* generated */
        },
        ivory: {
          DEFAULT: '#FDFBF7',
          dark: '#F3EFE6',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}
