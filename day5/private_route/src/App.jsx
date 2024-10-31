import React, { useContext, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";
import AdminPrivateRoute from "./privateRoutes/AdminPrivateRoute";
import UserPrivateRoute from "./privateRoutes/UserPrivateRoute";
import AdminPage from "./components/AdminPage";
import HomePage from "./components/HomePage";
import AppContext from "./provider/Context";
function App() {
  const { isAuthenticated, role } = useContext(AppContext);

  // sửa lỗi khi đã đăng nhập và sửa thủ công URL là /login hoặc / thì phải reload lại URL về như cũ (hompage hoặc admin)
  // sửa lỗi khi đã đăng nhập và sửa thủ công URL là /register thì reload về URL cũ (hompage hoặc admin)
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // đã đăng nhập
    if (isAuthenticated) {
      if (
        role === "admin" &&
        (location.pathname === "/" ||
          location.pathname === "/login" ||
          location.pathname === "/register")
      ) {
        navigate("/admin", { replace: true });
      } else if (
        role === "user" &&
        (location.pathname === "/" ||
          location.pathname === "/login" ||
          location.pathname === "/register")
      ) {
        navigate("/homepage", { replace: true });
      }
    }
  }, [location.pathname, isAuthenticated, role, navigate]);

  return (
    <Routes>
      {/* Route cho trang chính */}
      <Route
        path="/"
        element={
          isAuthenticated ? (
            role === "admin" ? (
              <AdminPage />
            ) : (
              <HomePage />
            )
          ) : (
            <Login />
          )
        }
      />

      {/* Route cho trang đăng nhập */}
      <Route
        path="/login"
        element={
          isAuthenticated ? (
            role === "admin" ? (
              <AdminPage />
            ) : (
              <HomePage />
            )
          ) : (
            <Login />
          )
        }
      />
      {/* Route cho trang đăng ký */}
      <Route
        path="/register"
        element={
          isAuthenticated ? (
            role === "admin" ? (
              <AdminPage />
            ) : (
              <HomePage />
            )
          ) : (
            <Register />
          )
        }
      />
      {/* Route cho trang quản trị, chỉ admin mới có thể truy cập */}
      <Route
        path="/admin"
        element={
          <AdminPrivateRoute>
            {" "}
            {/* PrivateRoute đóng vai trò như 1 người kiểm tra trước khi cho AdminPage dc render ra */}
            <AdminPage />
          </AdminPrivateRoute>
        }
      />
      {/* Route cho trang chủ, user và admin đều có thể truy cập */}
      <Route
        path="/homepage"
        element={
          <UserPrivateRoute>
            <HomePage />
          </UserPrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
