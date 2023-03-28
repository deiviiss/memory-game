/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

const CardAnimation = plugin(function ({ addUtilities }) {
  addUtilities({
    ".rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        Edu: ['Edu NSW ACT Foundation', 'cursive']
      },
      colors: {
        primary: '#090030',
        secondary: '#ffff', 
      },
      textColor: {
        primary: '#090030',
        secondary: '#ffff',
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(to top, #4481eb 0%, #04befe 100%)',
        'secondary-gradient': 'linear-gradient(to top, #1e3c72 0%, #1e3c72 1%, #2a5298 100%)',
        'modal-gradient': 'linear-gradient(to top, #1e3c72 0%, #1e3c72 1%, #2a5298 100%)',
        'card-gradient': 'linear-gradient(to top, #1e3c72 0%, #1e3c72 1%, #2a5298 100%)'
      },
      transform: (theme) => ({
        ...theme('spacing'),
        'perspective-200': 'perspective(200px)'
      }),
      rotate: (theme) => ({
        ...theme('spacing'),
        'rotateY-0': 'rotateY(0deg)',
        'rotateY-180': 'rotateY(180deg)'
      }),
      backfaceVisibility: {
        hidden: 'hidden'
      },
      transitionDuration: {
        400: '400ms'
      }
    }
  },
  plugins: [
    CardAnimation,
    function ({ addUtilities }) {
      const newUtilities = {
        '.backface-hidden': {
          'backface-visibility': 'hidden'
        }
      }
      addUtilities(newUtilities)
    }
  ]
}
