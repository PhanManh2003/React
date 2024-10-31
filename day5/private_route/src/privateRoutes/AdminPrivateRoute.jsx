// AdminPrivateRoute.js
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import AppContext from "../provider/Context"; 

const AdminPrivateRoute = ({ children }) => {
  const { isAuthenticated, role } = useContext(AppContext); 

  return isAuthenticated && role === "admin" ? (
    children
  ) : (
    <Navigate to="/login" />
  );
};

export default AdminPrivateRoute;
