import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import ThemesProvider from "./ThemesProvider";
import AuthProvider from "./AuthProvider";

type AppProvidersProps = {
  children: ReactNode;
};

const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <BrowserRouter>
      <ThemesProvider>
        <AuthProvider>{children}</AuthProvider>
      </ThemesProvider>
    </BrowserRouter>
  );
};

export default AppProviders;
