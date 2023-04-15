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
        fluidNarrow: 'repeat(auto-fit,minmax(11rem,1fr))',
        fluid: 'repeat(auto-fit,minmax(10rem,1fr))',
      },
    },

    screens: {
      xxs: '330px',
      xs: '450px',
      sm: '640px',
      semiSm: '865px',
      md: '1000px',
      lg: '1280px',
      xl: '1300px',
      xxl: '1450px',
      xxxl: '1640px',
    },
  },
  plugins: [],
};
