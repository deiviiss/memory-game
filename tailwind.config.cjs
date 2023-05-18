/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

const CardAnimation = plugin(function ({ addUtilities }) {
  addUtilities({
    '.rotate-y-180': {
      transform: 'rotateY(180deg)'
    },
    '.preserve-3d': {
      transformStyle: 'preserve-3d'
    },
    '.perspective': {
      perspective: '1000px'
    },
    '.backface-hidden': {
      backfaceVisibility: 'hidden'
    }
  })
})

const NavActive = plugin(function ({ addUtilities }) {
  addUtilities({
    '.active': {
      textDecorationLine: 'underline',
      textDecorationStyle: 'solid',
      textDecorationColor: '#090030',
      textDecorationThickness: '2px',
      '&:hover': {
        textDecorationColor: '#FEFBE9'
      },
      textUnderlineOffset: '4px'
    }
  })
})

module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      screens: {
        xs: '380px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px'
      },
      fontFamily: {
        Edu: ['Edu NSW ACT Foundation', 'cursive']
      },
      colors: {
        primary: '#090030',
        secondary: '#FEFBE9'
      },
      textColor: {
        primary: '#090030',
        secondary: '#FEFBE9'
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(to top, #4481eb 0%, #04befe 100%)',
        'secondary-gradient': 'linear-gradient(to top, #1e3c72 0%, #1e3c72 1%, #2a5298 100%)',
        'modal-gradient': 'linear-gradient(to top, #ffa366 0%, #f4cda5 100%)',
        'card-gradient': 'linear-gradient(to right, #870000, #190a05)', // The Strain uigradients
        'dark-primary-gradient': 'linear-gradient(to right, #0f0c29, #302b63, #24243e)', // Lawrecium uigradients
        'dark-secondary-gradient': 'linear-gradient(to right, #005c97, #363795)', // Clear Sky uigradients
        'dark-modal-gradient': 'linear-gradient(to right, #200122, #6f0000)' // Love and liberty uigradients
      }
    }
  },
  plugins: [
    CardAnimation, NavActive
  ]
}
