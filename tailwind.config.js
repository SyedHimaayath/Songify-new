/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes : {
        'floatup' : {
          '0%' : { transform: 'translateY(20%)' },
          '100%': { transform: 'translateY(0)' }
        },
        'floatside' : {
          '0%' : { transform: 'translateX(50%)' },
          '100%' : { transform: 'translateX(0)'}
        },
        'jumpin': {
          '0%': {transform: 'translateY(20%)'},
          '75%': { transform: 'translateY(-10%)' },
          '100%': { transform: 'translateY(0)' }
        }
      },
      animation: {
        'content-box': 'floatup 0.5s ease-in',
        'artists': 'floatside 1s ease-in',
        'jumping':'jumpin 1s ease-in'
      }
    },
  },
  plugins: [],
}

