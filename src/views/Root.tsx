import MainTemplate from "components/templates/MainTemplate/MainTemplate";
import ThemesProvider from "providers/ThemesProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from "providers/AuthProvider";
import Dashboard from "./Dashboard/Dashboard";
import Login from "./Login/Login";
import RequireAuth from "helpers/RequireAuth";

const Root = () => {
  return (
    <BrowserRouter>
      <ThemesProvider>
        <AuthProvider>
          <MainTemplate>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route
                path="/"
                element={
                  <RequireAuth>
                    <Dashboard />
                  </RequireAuth>
                }
              />
            </Routes>
          </MainTemplate>
        </AuthProvider>
      </ThemesProvider>
    </BrowserRouter>
  );
};

export default Root;
