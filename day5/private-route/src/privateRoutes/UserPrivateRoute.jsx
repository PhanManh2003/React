// UserPrivateRoute.js
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import AppContext from "../provider/Context"; 

const UserPrivateRoute = ({ children }) => {
  const { isAuthenticated, role } = useContext(AppContext); 

  return isAuthenticated && (role === "user" || role === "admin") ? (
    children
  ) : (
    <Navigate to="/login" />
  );
};

export default UserPrivateRoute;
