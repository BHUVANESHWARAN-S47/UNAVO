/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2ECC71',
          50: '#E8F8EF',
          100: '#D1F1DF',
          200: '#A3E3BF',
          300: '#75D59F',
          400: '#47C77F',
          500: '#2ECC71',
          600: '#25A35A',
          700: '#1C7A44',
          800: '#13512D',
          900: '#0A2917',
        },
        accent: {
          DEFAULT: '#27AE60',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
