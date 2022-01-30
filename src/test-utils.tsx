import { FC, ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import ThemesProvider from "providers/ThemesProvider";

const AllTheProviders: FC = ({ children }) => {
  return <ThemesProvider>{children}</ThemesProvider>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
