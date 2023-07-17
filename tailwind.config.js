/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      fontFamily: {
        poppins: ['var(--font-poppins)'],
      },
      colors: {
        dark: '#241926',
        darkless: '#2c212e',
        light: '#fffdfa',
        lightless: '#ede9ed',
        accent: '#7f2f8e',
        primary: {
          '50': '#ffffe7',
          '100': '#fdffc1',
          '200': '#fffe86',
          '300': '#fff641',
          '400': '#ffe80d',
          '500': '#ffd900', // base
          '600': '#d1a000',
          '700': '#a67202',
          '800': '#89590a',
          '900': '#74490f',
          '950': '#442604',
        },
        secondary: {
          '50': '#fbf8fb',
          '100': '#f6f0f7',
          '200': '#ebdfef',
          '300': '#dcc6e1',
          '400': '#c7a3cf',
          '500': '#ad7eb7',
          '600': '#905f9a',
          '700': '#754b7c', //base
          '800': '#634068',
          '900': '#533857',
          '950': '#331c36',
        },
        tertiary: {
          '50': '#f0fdfa',
          '100': '#cdfaf1',
          '200': '#9af5e3',
          '300': '#48e5cd', //base
          '400': '#2fd2bf',
          '500': '#16b6a5',
          '600': '#0f9288',
          '700': '#10756d',
          '800': '#125d58',
          '900': '#144d49',
          '950': '#052e2e',
        },
        gray: {
          '100': '#f1edf1',
          '300': '#dfd6e1',
          '500': '#c2b3c6',
          '700': '#423644',
          '900': '#241d25', //base
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
