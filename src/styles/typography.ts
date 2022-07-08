export type FontsType = {
  roboto: string;
};

export type FontWeightsType = {
  light: number;
  regular: number;
  medium: number;
  semiBold: number;
  bold: number;
  extraBold: number;
  heavy: number;
};

export type FontSizesType = {
  tiny: string;
  small: string;
  base: string;
  medium: string;
  large: string;
  extraLarge: string;
  big: string;
  huge: string;
};

export const fonts: FontsType = {
  roboto: `'Roboto', sans-serif`,
};

export const fontWeights: FontWeightsType = {
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
  heavy: 900,
};

export const fontSizes: FontSizesType = {
  tiny: '0.75rem',
  small: '0.875rem',
  base: '1rem',
  medium: '1.25rem',
  large: '1.5rem',
  extraLarge: '2rem',
  big: '2.5rem',
  huge: '3rem',
};
