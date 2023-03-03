/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundColor: ({
        primary: '#1d9fea',
        secondary: '#203a85',
        tertiary: '#ffb885',
        quaternary: '#ff7e38'
      }),
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
      }
    }
  },
  plugins: []
}
