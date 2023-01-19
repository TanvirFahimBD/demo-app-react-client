import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <p>Loading ...</p>;
  }

  if (user?.uid) {
    return children;
  }

  return <Navigate to="/log-in" state={{ from: location }} replace />;
};

export default PrivateRoute;
