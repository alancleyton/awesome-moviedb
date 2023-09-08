/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      body: ['Libre Franklin', 'sans-serif'],
      heading: ['Oswald', 'sans-serif'],
    },
    fontSize: {
      extraSmall: '12px',
      small: '15px',
      medium: '18px',
      large: '24px',
      extraLarge: '36px',
      big: '48px',
      huge: '60px',
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
    },
    colors: {
      white: '#ffffff',
      black: '#000000',
      dark: '#161616',
      dark900: '#2d2d2d',
      dark600: '#737373',
      dark300: '#b9b9b9',
      dark100: '#e8e8e8',
      gray: '#808080',
      gray900: '#8d8d8d',
      gray600: '#b3b3b3',
      gray300: '#d9d9d9',
      gray100: '#f2f2f2',
      azure: '#007fff',
      azure900: '#198cff',
      azure600: '#66b2ff',
      azure300: '#b3d9ff',
      azure100: '#e6f2ff',
      darkSlateBlue: '#0d364e',
      darkSlateBlue900: '#254a60',
      darkSlateBlue600: '#6e8695',
      darkSlateBlue300: '#b6c3ca',
      darkSlateBlue100: '#e7ebed',
      yellow: '#ffcf1b',
      yellow900: '#ffd432',
      yellow600: '#ffe276',
      yellow300: '#fff1BB',
      yellow100: '#fffae8',
      brown: '#8a5f00',
      brown900: '#966f19',
      brown600: '#b99f66',
      brown300: '#dccfb3',
      brown100: '#f3ffe6',
      red: '#d0312d',
      red900: '#d54642',
      red600: '#e38381',
      red300: '#f1c1c0',
      red100: '#faeaea',
    },
  },
  plugins: [],
};