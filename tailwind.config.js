/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './src/app/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        title: 'Inter_700Bold',
        body: 'Inter_400Regular',
        alt: 'RobotoCondensed_400Regular',
      },

      colors: {
        gray: {
          50: '#eaeaea',
          100: '#bebebf',
          200: '#9e9ea0',
          300: '#727275',
          400: '#56565a',
          500: '#2c2c31',
          600: '#28282d',
          700: '#1f1f23',
          800: '#18181b',
          900: '#121215',
        },
      },
    },
    plugins: [],
  },
}
