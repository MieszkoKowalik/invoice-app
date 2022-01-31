import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "providers/AuthProvider";

function RequireAuth({ children }: { children: JSX.Element }) {
  const { user, isAuthLoading } = useAuth();
  console.log(user);
  const location = useLocation();

  if (isAuthLoading) {
    return <div>Loading</div>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default RequireAuth;
