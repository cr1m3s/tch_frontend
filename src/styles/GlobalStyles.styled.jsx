import { withThemeFromJSXProvider } from '@storybook/addon-styling';

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,400;6..12,600&display=swap');  *, *::after, *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 400; 
    font-size: 18px;
    line-height: 150%;
    background-color: #FFFFFF;
    color: #111111;
    margin: 0;
    min-width: 320px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
      margin: 0;
  }

  a {
      text-decoration: none;
      color: currentColor;
  }

  ul {
      padding: 0;
      margin: 0;
  }

  li,
  ul {
      list-style: none;
  }

  button {
      font-size: 18px;
      font-weight: 700;
      line-height: 132%;
      display: block;
      cursor: pointer;
      background-color: ##0D5D74;
      border:none;
      border-radius: 10px;
      padding: 12px;
      margin: 0;
  }    

  button:hover {
      background-color: #063E55;
  } 
`;


export const decorators = [
  withThemeFromJSXProvider({
    GlobalStyles,
  }),
];