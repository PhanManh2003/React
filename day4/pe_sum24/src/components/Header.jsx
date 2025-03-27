import React, { useContext } from "react";
import AppContext from "../provider/Context";
import { Link } from "react-router-dom";

function Header() {
  const { genres } = useContext(AppContext);
  return (
    <>
      <hr></hr>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ul style={{ display: "flex", listStyle: "none", margin: "0px auto" }}>
          {genres.map((genre) => (
            <li className="text-uppercase me-3">
              <Link to={`/movie/?genre=${genre}`}>{genre}</Link>
            </li>
          ))}
        </ul>
        <hr></hr>
      </div>
      <hr></hr>
    </>
  );
}

export default Header;
