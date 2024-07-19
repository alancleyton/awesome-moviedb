/** @type {import('tailwindcss').Config} */

const tailwindcss = require('tailwindcss');
const nesting = require('@tailwindcss/nesting')(require('postcss-nesting'));
const autoprefixer = require('autoprefixer');

module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        body: ['Libre Franklin', 'sans-serif'],
        heading: ['Oswald', 'sans-serif'],
      },
      fontSize: {
        xs: '12px',
        sm: '15px',
        md: '18px',
        lg: '24px',
        xl: '36px',
        bg: '48px',
        hg: '60px',
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        semiBold: 600,
        bold: 700,
        extraBold: 800,
        black: 900,
      },
      lineHeight: {
        body: 1.5,
        heading: 1.25,
      },
      spacing: {
        hr: '1px',
        0: '0px',
        1: '2px',
        2: '4px',
        3: '8px',
        4: '12px',
        5: '16px',
        6: '24px',
        7: '32px',
        8: '40px',
        9: '48px',
        10: '64px',
        11: '80px',
        12: '96px',
        13: '160px',
        14: '280px',
      },
      colors: {
        transparent: 'transparent',
        white: '#ffffff',
        black: '#000000',
        gray: {
          DEFAULT: '#0c0c0c',
          10: '#e7e7e7',
          20: '#cecece',
          30: '#b6b6b6',
          40: '#9e9e9e',
          50: '#868686',
          60: '#6d6d6d',
          70: '#555555',
          80: '#3d3d3d',
          90: '#242424',
          100: '#0b0b0b',
          120: '#0a0a0a',
          130: '#080808',
          140: '#070707',
          150: '#060606',
        },
        blue: {
          DEFAULT: '#5699ee',
          10: '#eef5fd',
          20: '#ddebfc',
          30: '#cce0fa',
          40: '#bbd6f8',
          50: '#abccf7',
          60: '#9ac2f5',
          70: '#89b8f3',
          80: '#78adf1',
          90: '#67a3f0',
          100: '#4d8ad6',
          120: '#457abe',
          130: '#3c6ba7',
          140: '#345c8f',
          150: '#2b4d77',
        },
        slate: {
          DEFAULT: '#0d364e',
          10: '#e7ebed',
          20: '#cfd7dc',
          30: '#b6c3ca',
          40: '#9eafb8',
          50: '#869ba7',
          60: '#6e8695',
          70: '#567283',
          80: '#3d5e71',
          90: '#254a60',
          100: '#0d364e',
          110: '#0c3146',
          120: '#0a2b3e',
          130: '#092637',
          140: '#08202f',
          150: '#071b27',
        },
        yellow: {
          DEFAULT: '#f4c418',
          10: '#fef9e8',
          20: '#fdf3d1',
          30: '#fcedba',
          40: '#fbe7a3',
          50: '#fae28c',
          60: '#f8dc74',
          70: '#f7d65d',
          80: '#f6d046',
          90: '#f5ca2f',
          100: '#dcb016',
          120: '#c39d13',
          130: '#ab8911',
          140: '#92760e',
          150: '#7a620c',
        },
        red: {
          DEFAULT: '#e7111b',
          10: '#fde7e8',
          20: '#facfd1',
          30: '#f8b8bb',
          40: '#f5a0a4',
          50: '#f3888d',
          60: '#f17076',
          70: '#ee585f',
          80: '#ec4149',
          90: '#e92932',
          100: '#d00f18',
          120: '#b90e16',
          130: '#a20c13',
          140: '#8b0a10',
          150: '#74090e',
        },
        green: {
          DEFAULT: '#25e889',
          10: '#e9fdf3',
          20: '#d3fae7',
          30: '#bef8dc',
          40: '#a8f6d0',
          50: '#abccf7',
          60: '#7cf1b8',
          70: '#66efac',
          80: '#51eda1',
          90: '#3bea95',
          100: '#21d17b',
          120: '#1eba6e',
          130: '#1aa260',
          140: '#168b52',
          150: '#137445',
        },
      },
      screens: {
        mobile: '640px',
        tablet: '768px',
        laptop: '1024px',
        desktop: '1280px',
      },
      flex: {
        1: '1 1 0%',
        2: '2 2 0%',
        3: '3 3 0%',
      },
    },
  },
  plugins: [tailwindcss, nesting, autoprefixer],
};
