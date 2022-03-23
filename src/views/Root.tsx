import MainTemplate from "components/templates/MainTemplate/MainTemplate";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import Login from "./Login/Login";
import RequireAuth from "helpers/RequireAuth";
import { AnimatePresence } from "framer-motion";

const Root = () => {
  return (
    <MainTemplate>
      <AnimatePresence exitBeforeEnter>
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
      </AnimatePresence>
    </MainTemplate>
  );
};

export default Root;
