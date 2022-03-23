import MainTemplate from "components/templates/MainTemplate/MainTemplate";
import { Routes, Route, useLocation } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import Login from "./Login/Login";
import RequireAuth from "helpers/RequireAuth";
import { AnimatePresence } from "framer-motion";

const Root = () => {
  const location = useLocation();

  return (
    <MainTemplate>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />
          <Route
            path="/invoice/:id"
            element={
              <RequireAuth>
                <div>Invoice view</div>
              </RequireAuth>
            }
          />
        </Routes>
      </AnimatePresence>
    </MainTemplate>
  );
};

export default Root;
