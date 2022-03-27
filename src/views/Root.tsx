import Login from "./Login/Login";
import { useAuth } from "providers/AuthProvider";
import Loader from "components/molecules/Loader/Loader";
import AuthenticatedApp from "./AuthenticatedApp/AuthenticatedApp";

const Root = () => {
  const { user, isAuthLoading } = useAuth();

  if (isAuthLoading) {
    return <Loader />;
  }

  return <>{user ? <AuthenticatedApp /> : <Login key="login" />}</>;
};

export default Root;
