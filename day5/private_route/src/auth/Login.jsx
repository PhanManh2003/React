// Login.js
import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AppContext from "../provider/Context";

const Login = () => {
  const { users } = useContext(AppContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setIsAuthenticated, setRole } = useContext(AppContext);

  const handleLogin = (e) => {
    e.preventDefault();

    // Kiểm tra thông tin đăng nhập và gán vai trò dựa trên tên đăng nhập
    if (username === "admin" && password === "123") {
      setIsAuthenticated(true);
      setRole("admin");
      navigate("/admin"); // Điều hướng tới trang quản trị
    } else if (
      users.some(
        (user) => user.username === username && user.password === password
      )
    ) {
      setIsAuthenticated(true);
      setRole("user");
      navigate("/homepage"); // Điều hướng tới trang chủ
    } else {
      alert("Sai tên đăng nhập hoặc mật khẩu");
    }
  };

  return (
    <div>
      <form
        onSubmit={handleLogin}
        style={{ width: "600px", margin: "50px auto" }}
      >
        <fieldset>
          <legend>Login</legend>
          <input
            required
            className="form-control mb-2"
            type="text"
            placeholder="Tên đăng nhập"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            required
            className="form-control mb-2"
            type="password"
            placeholder="Mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btn btn-primary" type="submit">
            Đăng nhập
          </button>
          <Link to="/register" style={{ marginLeft: "400px" }}>
            Đăng kí
          </Link>
        </fieldset>
      </form>
    </div>
  );
};

export default Login;
