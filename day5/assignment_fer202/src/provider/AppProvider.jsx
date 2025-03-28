import React from "react";
import { useState, useEffect } from "react";
import AppContext from "./Context";
import axios from "axios";
function AppProvider({ children }) {
  const [users, setUsers] = useState([]); // users
  const [products, setProducts] = useState([]); // products
  const [comments, setComments] = useState([]); // comments
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    // Kiểm tra localStorage khi khởi tạo
    const savedAuth = localStorage.getItem("isAuthenticated");
    return savedAuth === "true"; // Trả về true nếu đã được xác thực ( localStorage chỉ lưu trữ dữ liệu dưới dạng chuỗi.)
  });

  const [role, setRole] = useState(() => {
    // Kiểm tra localStorage khi khởi tạo
    return localStorage.getItem("role") ? localStorage.getItem("role") : null;
  });

  // Cập nhật localStorage khi state thay đổi
  useEffect(() => {
    localStorage.setItem("isAuthenticated", isAuthenticated);
    localStorage.setItem("role", role);
  }, [isAuthenticated, role]);

  // fetch data users từ API
  useEffect(() => {
    const fetchFunction = async () => {
      try {
        const response = await axios.get("http://localhost:9999/users");
        setUsers(response.data);
        const resProduct = await axios.get("http://localhost:9999/products");
        setProducts(resProduct.data);
        const resComment = await axios.get("http://localhost:9999/comments");
        setComments(resComment.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchFunction();
  }, []);

  const data = {
    isAuthenticated,
    role,
    setIsAuthenticated,
    setRole,
    users,
    setUsers,
    products,
    setProducts,
    comments,
    setComments,
  };
  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
}

export default AppProvider;
