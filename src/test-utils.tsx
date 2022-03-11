import { FC, ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import ThemesProvider from "providers/ThemesProvider";
import { BrowserRouter } from "react-router-dom";

const AllTheProviders: FC = ({ children }) => {
  return (
    <BrowserRouter>
      <ThemesProvider>{children}</ThemesProvider>
    </BrowserRouter>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
