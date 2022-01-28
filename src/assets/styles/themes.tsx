import { DefaultTheme } from "styled-components";

const theme = {
  breakpoints: {
    s: "(min-width: 576px)",
    m: "(min-width:768px)",
    l: "(min-width:1024px)",
    xl: "(min-width:1200px)",
  },
  fontSize: {
    xs: "0.6875rem",
    s: "0.75rem",
    m: "1rem",
    l: "1.25rem",
    xl: "2rem",
  },
};

export const lightTheme: DefaultTheme = {
  ...theme,
  mode: "light",
  colors: {
    primary: {
      300: "hsl(252, 100%, 75%)",
      500: "hsl(252, 94%, 67%)",
      700: "hsl(252, 94%, 63%)",
    },
    neutral: {
      50: "hsl(0, 0%, 100%)",
      100: "hsl(228, 71%, 99%)",
      200: "hsl(240, 27%, 98%)",
      300: "hsl(231, 73%, 93%)",
      400: "hsl(231, 37%, 63%)",
      500: "hsl(231, 23%, 50%)",
      600: "hsl(232, 20%, 38%)",
      700: "hsl(231, 20%, 27%)",
      800: "hsl(233, 31%, 17%)",
      900: "hsl(228, 29%, 7%)",
    },
    success: {
      100: "hsl(152,68%,96%)",
      300: "hsl(156,73%,74%)",
      500: "hsl(166,72%,28%)",
      700: "hsl(168,89%,23%)",
      900: "hsl(170,97%,15%)",
    },
    warning: {
      100: "hsl(48, 100%, 88%)",
      300: "hsl(48, 94%, 68%)",
      500: "hsl(42, 87%, 55%)",
      700: "hsl(29, 80%, 44%)",
      900: "hsl(22, 82%, 30%)",
    },
    danger: {
      100: "hsl(0, 100%, 95%)",
      300: "hsl(0, 100%, 80%)",
      500: "hsl(356, 75%, 53%)",
      700: "hsl(354, 85%, 44%)",
      900: "hsl(350, 94%, 28%)",
    },
  },
};

export const darkTheme: DefaultTheme = {
  ...theme,
  mode: "dark",

  colors: {
    primary: {
      300: "hsl(252, 94%, 63%)",
      500: "hsl(252, 94%, 67%)",
      700: "hsl(252, 100%, 75%)",
    },
    neutral: {
      50: "hsl(233, 31%, 17%)",
      100: "hsl(233, 30%, 11%)",
      200: "hsl(232, 30%, 21%)",
      300: "hsl(234, 30%, 26%)",
      400: "hsl(231, 37%, 63%)",
      500: "hsl(231, 75%, 93%)",
      600: "hsl(240, 27%, 98%)",
      700: "hsl(228, 29%, 7%)",
      800: "hsl(233, 31%, 17%)",
      900: "hsl(0, 0%, 100%)",
    },
    success: {
      100: "hsl(256, 16%, 18%)",
      300: "hsl(170, 97%, 15%)",
      500: "hsl(166, 72%, 28%)",
      700: "hsl(156, 72%, 45%)",
      900: "hsl(156, 73%, 74%)",
    },
    warning: {
      100: "hsl(256, 16%, 18%)",
      300: "hsl(42, 42%, 42%)",
      500: "hsl(42, 87%, 55%)",
      700: "hsl(48, 94%, 68%)",
      900: "hsl(48, 100%, 88%)",
    },
    danger: {
      100: "hsl(351, 56%, 7%)",
      300: "hsl(354, 84%, 18%)",
      500: "hsl(356, 75%, 53%)",
      700: "hsl(4, 85%, 62%)",
      900: "hsl(0, 100%, 80%)",
    },
  },
};
