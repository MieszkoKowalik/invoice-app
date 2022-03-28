import { AnimatePresence } from "framer-motion";
import { useLocation, Routes, Route } from "react-router-dom";
import InvoiceView from "views/InvoiceView/InvoiceView";
import Dashboard from "../Dashboard/Dashboard";

type AuthenticatedAppProps = {};

const AuthenticatedApp = (props: AuthenticatedAppProps) => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/invoice/:id" element={<InvoiceView />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AuthenticatedApp;
