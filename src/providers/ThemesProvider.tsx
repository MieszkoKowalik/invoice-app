import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "assets/styles/themes";
import { createContext, ReactNode, useEffect, useState } from "react";

type Props = {
  children?: ReactNode;
};

interface ThemesContextInterface {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemesContext = createContext<ThemesContextInterface>(
  {} as ThemesContextInterface
);

const ThemesProvider = ({ children }: Props) => {
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
        {children}
      </ThemeProvider>
    </ThemesContext.Provider>
  );
};

export default ThemesProvider;
