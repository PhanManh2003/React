import React, { useContext } from "react";
import AppContext from "../provider/Context";
import { Link } from "react-router-dom";

function Sidebar() {
  const { directors } = useContext(AppContext);
  return (
    <div>
      <h3>Directors</h3>
      <ul>
        {directors.map((director) => (
          <li key={director.id}>
            <Link to={`/movie/?director-id=${director.id}`}>
              {director.fullname}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
