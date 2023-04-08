/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        main: '#161925',
        secondary: '#DFD260',
      },
      fontFamily: {
        averia: ['var(--font-averia)'],
        roboto: ['var(--font-roboto)'],
      },
    },
  },
  plugins: [],
};
