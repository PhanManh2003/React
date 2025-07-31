import React, { useContext, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Login from "./auth/Login";
import AdminPrivateRoute from "./privateRoutes/AdminPrivateRoute";
import UserPrivateRoute from "./privateRoutes/UserPrivateRoute";
import AdminPage from "./components/AdminPage";
import HomePage from "./components/HomePage";
import AppContext from "./provider/Context";
import ProductDetail from "./components/ProductDetail";
function App() {
  const { isAuthenticated, role } = useContext(AppContext);

  // sửa lỗi khi đã đăng nhập và sửa thủ công URL là /login hoặc / thì phải reload lại URL về như cũ (hompage hoặc admin)
  // sửa lỗi khi đã đăng nhập và sửa thủ công URL là /register thì reload về URL cũ (hompage hoặc admin)
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // đã đăng nhập rồi thì không cho vào trang login và register nữa
    if (isAuthenticated) {
      if (
        role === "admin" &&
        (location.pathname === "/" || location.pathname === "/login")
      ) {
        navigate("/admin", { replace: true });
      } else if (
        role === "user" &&
        (location.pathname === "/" || location.pathname === "/login")
      ) {
        navigate("/homepage", { replace: true }); // replace: true để không lưu vào history stack, ko thể back lại bằng trình duyệt
      }
    }
  }, [location.pathname, isAuthenticated, role, navigate]);

  return (
    <Routes>
      {/* Route cho URL mặc định */}
      <Route path="/" element={<Login />} />

      {/* Route cho trang đăng nhập */}
      <Route path="/login" element={<Login />} />
      {/* Route cho trang đăng ký */}
      <Route
        path="/admin"
        element={
          <AdminPrivateRoute>
            {/* PrivateRoute đóng vai trò như 1 người kiểm tra trước khi cho AdminPage dc render ra */}
            <AdminPage />
          </AdminPrivateRoute>
        }
      />
      {/* Route cho trang homepage, user và admin đều có thể truy cập */}
      <Route
        path="/homepage"
        element={
          <UserPrivateRoute>
            <HomePage />
          </UserPrivateRoute>
        }
      />

      <Route
        path="/homepage/:prodId"
        element={
          <UserPrivateRoute>
            <ProductDetail />
          </UserPrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
