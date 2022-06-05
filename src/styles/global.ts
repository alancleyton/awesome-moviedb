import { createGlobalStyle } from 'styled-components';
import { ThemeType } from './theme';

export default createGlobalStyle<{ theme: ThemeType }>`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html, body {
    padding: 0;
    margin: 0;
    border: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  body {
    min-height: 100vh;
    font-family: ${props => props.theme.font.roboto};
    font-size: ${props => props.theme.fontSize.base};
    font-weight: ${props => props.theme.fontWeight.heavy};
    color: ${props => props.theme.color.dark};
    background-color: ${props => props.theme.color.darkSlateBlue100};
    line-height: 1;
    scroll-behavior: smooth;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
  }

  h1, h2, h3, h4, h5, h6, span, p, small, a, em, strong {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  button:focus,
  button:active,
  input:focus,
  input:active,
  textarea:focus,
  textarea:active {
    outline: none;
    box-shadow: none;
  }

  ol, ul {
    list-style: none;
  }
  
  a {
    text-decoration: none;
  }
`;
