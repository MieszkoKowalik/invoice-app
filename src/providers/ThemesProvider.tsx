import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "assets/styles/themes";
import { createContext, ReactNode, useEffect, useState } from "react";
import GlobalStyle from "assets/styles/globalStyles";

type ThemeProvidreProps = {
  children?: ReactNode;
};

interface ThemesContextInterface {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export const ThemesContext = createContext<ThemesContextInterface>(
  {} as ThemesContextInterface
);

const ThemesProvider = ({ children }: ThemeProvidreProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("darkMode", (!isDarkMode).toString());
  };

  const setOSPreferedColorScheme = () => {
    const prefersDarkScheme = window.matchMedia(
      "(prefers-color-scheme:dark)"
    ).matches;
    if (prefersDarkScheme) {
      setIsDarkMode(true);
    }
  };

  useEffect(() => {
    const preferedColorSchemeInLS = localStorage.getItem("darkMode");
    const hasColorPreferenceInLS = typeof preferedColorSchemeInLS === "string";
    if (!hasColorPreferenceInLS) {
      setOSPreferedColorScheme();
      return;
    }
    const isDarkModeInLS = JSON.parse(preferedColorSchemeInLS);
    if (isDarkModeInLS) {
      setIsDarkMode(true);
    }
  }, []);

  return (
    <ThemesContext.Provider value={{ isDarkMode, toggleTheme }}>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </ThemesContext.Provider>
  );
};

export default ThemesProvider;
