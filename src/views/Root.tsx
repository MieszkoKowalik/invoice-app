import MainTemplate from "components/templates/MainTemplate/MainTemplate";
import ThemesProvider from "providers/ThemesProvider";
import { BrowserRouter } from "react-router-dom";
import Login from "./Login/Login";

function Root() {
  return (
    <BrowserRouter>
      <ThemesProvider>
        <MainTemplate>
          <Login></Login>
        </MainTemplate>
      </ThemesProvider>
    </BrowserRouter>
  );
}

export default Root;
