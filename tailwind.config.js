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
        placeholder: '#43454f',
      },
      fontFamily: {
        averia: ['var(--font-averia)'],
        roboto: ['var(--font-roboto)'],
      },
      gridTemplateColumns: {
        fluidWide: 'repeat(auto-fit,minmax(25rem,1fr))',
        fluid: 'repeat(auto-fit,minmax(12rem,min-content))',
      },
    },

    screens: {
      xxxs: '330px',
      xxs: '445px',
      xs: '480px',
      sm: '640px',
      semiSm: '865px',
      md: '1000px',
      lg: '1150px',
      xl: '1280px',
      xxl: '1450px',
      xxxl: '1600px',
    },
  },
  plugins: [],
};
