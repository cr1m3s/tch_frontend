import { withThemeFromJSXProvider } from "@storybook/addon-styling";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, light } from "../src/styles";
import { withRouter } from "storybook-addon-react-router-v6";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  withRouter,
  withThemeFromJSXProvider({
    GlobalStyles,
    themes: {
      light,
    },
    defaultTheme: "light",
    Provider: ThemeProvider,
  }),
];
