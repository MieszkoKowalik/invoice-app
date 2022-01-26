import MainTemplate from "components/templates/MainTemplate/MainTemplate";
import ThemesProvider from "providers/ThemesProvider";
import { BrowserRouter } from "react-router-dom";

function Root() {
  return (
    <BrowserRouter>
      <ThemesProvider>
        <MainTemplate></MainTemplate>
      </ThemesProvider>
    </BrowserRouter>
  );
}

export default Root;
