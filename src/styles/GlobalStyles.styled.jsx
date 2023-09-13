import { withThemeFromJSXProvider } from '@storybook/addon-styling';

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,400;6..12,600&display=swap');  *, *::after, *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body, button, input, textarea, select {
    font-family: 'Nunito Sans', sans-serif;
  }
`;
export const decorators = [
  withThemeFromJSXProvider({
    GlobalStyles,
  }),
];