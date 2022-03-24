import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "providers/AuthProvider";
import Loader from "components/molecules/Loader/Loader";

function RequireAuth({ children }: { children: JSX.Element }) {
  const { user, isAuthLoading } = useAuth();
  const location = useLocation();

  if (isAuthLoading) {
    return <Loader />;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default RequireAuth;
