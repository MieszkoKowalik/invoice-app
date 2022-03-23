import MainTemplate from "components/templates/MainTemplate/MainTemplate";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import Login from "./Login/Login";
import RequireAuth from "helpers/RequireAuth";

const Root = () => {
  return (
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
  );
};

export default Root;
