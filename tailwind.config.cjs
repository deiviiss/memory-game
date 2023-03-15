/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: '#1d9fea',
        secondary: '#203a85',
        tertiary: '#ffb885',
        quaternary: '#ff7e38'
      },
      fontFamily: {
        Amatic: ['Amatic SC', 'cursive']
      },
      textColor: {
        primary: '#1d9fea',
        secondary: '#203a85',
        tertiary: '#ffb885',
        quaternary: '#ff7e38'
      },
      ringColor: {
        primary: '#1d9fea',
        secondary: '#203a85',
        tertiary: '#ffb885',
        quaternary: '#ff7e38'
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(to top, #4481eb 0%, #04befe 100%)',
        'secondary-gradient': 'linear-gradient(to top, #1e3c72 0%, #1e3c72 1%, #2a5298 100%)',
        'modal-gradient': 'linear-gradient(to top, #1e3c72 0%, #1e3c72 1%, #2a5298 100%)',
        'card-gradient': 'linear-gradient(to top, #1e3c72 0%, #1e3c72 1%, #2a5298 100%)',
      },
    }
  },
  plugins: []
}
