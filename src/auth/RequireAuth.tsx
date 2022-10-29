import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../config/firebase.config";
import Loadings from "../common/Loading/Loadings";
import VerifyUser from "./VerifyUser";

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  /**
   * * when user load or error
   */
  if (loading) {
    return <Loadings />;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // if (!user || !admin) {
  //   signOut(auth);
  //   return <Navigate to="/login" state={{ from: location }} replace />;
  // }
  // if (user && !admin) {
  //   return <VerifyUser />;
  // }
  /**
   * * verify user method
   */
  if (user.providerData[0]?.providerId === "password" && !user.emailVerified) {
    return <VerifyUser />;
  }

  return children;
};

export default RequireAuth;
