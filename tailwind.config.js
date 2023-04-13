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
        primary: '#161925',
        secondary: '#DFD260',
        offWhite: '#f5f5f5',
      },
      fontFamily: {
        averia: ['var(--font-averia)'],
        roboto: ['var(--font-roboto)'],
      },
      gridTemplateColumns: {
        fluidText: 'repeat(auto-fit,minmax(1rem,1fr))',
        fluid: 'repeat(auto-fit,minmax(10rem,1fr))',
      },
    },
  },
  plugins: [],
};
