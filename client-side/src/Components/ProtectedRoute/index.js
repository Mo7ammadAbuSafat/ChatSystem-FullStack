import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import AuthContext from "../Contexts/AuthProvider";

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContext);
  let location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to="/sign-in" state={{ from: location }} replace />;
  }
  return children;
};

export default ProtectedRoute;
