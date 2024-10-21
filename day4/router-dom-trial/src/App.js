import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams  } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import UserDetail from "./UserDetail";
function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/user/1">User 1</Link>
          </li>
          <li>
            <Link to="/user/2">User 2</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:id" element={<UserDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
