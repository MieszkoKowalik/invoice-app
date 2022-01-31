import MainTemplate from "components/templates/MainTemplate/MainTemplate";
import ThemesProvider from "providers/ThemesProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from "providers/AuthProvider";
import Login from "./Login/Login";

function Root() {
  return (
    <BrowserRouter>
      <ThemesProvider>
        <AuthProvider>
          <MainTemplate>
            <Routes>
              <Route path="/login" element={<Login />} />
            </Routes>
          </MainTemplate>
        </AuthProvider>
      </ThemesProvider>
    </BrowserRouter>
  );
}

export default Root;
