import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import AppContext from "../provider/Context";
function Register() {
  const { setUsers } = useContext(AppContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmitRegister = async (e) => {
    e.preventDefault();

    // Add vô Database (cần check xem username đã tồn tại chưa)
    try {
      // Validate username đã tồn tại hay chưa
      const userResponse = await axios.get("http://localhost:9999/users");
      const users = userResponse.data;
      const isExisted = users.some((user) => user.username === username);
      if (isExisted) {
        alert("Username đã tồn tại");
        return;
      }
      // Add to DB
      const newUser = {
        id: String(users.length + 1),
        username: username,
        password: password,
        role: "user",
      };
      const addResposne = await axios.post(
        "http://localhost:9999/users",
        newUser
      );
      if (addResposne.status === 201) {
        // Set lại users state
        setUsers([...users, addResposne.data]);
        // thông báo thành công
        alert("Đăng kí thành công");
        // Điều hướng về trang login
        navigate("/login");
      }
    } catch (error) {
      console.log("Lỗi: " + error.message);
    }
  };
  return (
    <div>
      <form
        onSubmit={handleSubmitRegister}
        style={{ width: "600px", margin: "50px auto" }}
      >
        <fieldset>
          <legend>Register</legend>
          <label className="form-label" htmlFor="username">
            Username
          </label>
          <input
            required
            className="form-control mb-2"
            type="text"
            name="username"
            id="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <label className="form-label" htmlFor="password">
            Password
          </label>
          <input
            required
            className="form-control mb-2"
            type="password"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">
            Đăng kí
          </button>
          <Link to="/login" style={{ marginLeft: "400px" }}>
            Đăng nhập
          </Link>
        </fieldset>
      </form>
    </div>
  );
}

export default Register;
