export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "assets/styles/themes";
import GlobalStyle from "assets/styles/globalStyles";
import { MemoryRouter } from "react-router-dom";

const withMemoryRouter = (Story, context) => {
  return (
    <MemoryRouter>
      <Story {...context} />
    </MemoryRouter>
  );
};

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "light",
    toolbar: {
      icon: "circlehollow",
      items: ["light", "dark"],
      showName: true,
    },
  },
};

const themes = {
  light: lightTheme,
  dark: darkTheme,
};

const getTheme = (themeName) => {
  return themes[themeName];
};

const withThemeProvider = (Story, context) => {
  const theme = getTheme(context.globals.theme);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story {...context} />
    </ThemeProvider>
  );
};

export const decorators = [withMemoryRouter, withThemeProvider];
