import React, {useContext} from "react";
import AppContext from "../provider/Context";
function Logout() {
  const { setIsAuthenticated, setRole } = useContext(AppContext);
  const handleLogout = (e) => {
    setIsAuthenticated(false);
    setRole(null);
    window.location.href = "/login";
  };
  return (
    <div>
      <button className="btn btn-danger" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Logout;
