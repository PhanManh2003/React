import React, { useContext, useState } from "react";
import Logout from "../auth/Logout";
import AppContext from "../provider/Context";

function AdminPage() {
  const { users } = useContext(AppContext);

  // State cho phân trang
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5; // Số người dùng trên mỗi trang

  // Lấy đúng người dùng trên mỗi trang
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  // Tổng số trang
  const totalPages = Math.ceil(users.length / usersPerPage);

  // Xử lý khi chuyển trang
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Xử lý khi nhấn nút Previous và Next
  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      <p>Welcome to AdminPage</p>
      <Logout />
      <div style={{ width: "900px", margin: "0px auto" }}>
        <h3 style={{ textAlign: "center" }}>Users List</h3>
        <table className="table table-striped table-bordered table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user, index) => (
              <tr key={index}>
                <td>{indexOfFirstUser + index + 1}</td>
                <td>{user.username}</td>
                <td>{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Phân trang với Bootstrap */}
        <nav
          aria-label="Page navigation example"
          style={{ textAlign: "center", marginTop: "20px" }}
        >
          <ul className="pagination justify-content-center">
            <li className="page-item">
              <button
                className="page-link"
                onClick={handlePrevious}
                disabled={currentPage === 1}
              >
                Previous
              </button>
            </li>
            {[...Array(totalPages).keys()].map((page) => (
              <li
                key={page + 1}
                className={`page-item ${
                  page + 1 === currentPage ? "active" : ""
                }`}
              >
                <button
                  className="page-link"
                  onClick={() => handlePageChange(page + 1)}
                >
                  {page + 1}
                </button>
              </li>
            ))}
            <li className="page-item">
              <button
                className="page-link"
                onClick={handleNext}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

{
  /**
  1. [...Array(totalPages).keys()]
Array(totalPages): Tạo một mảng có độ dài là totalPages. Mỗi phần tử trong mảng này có giá trị là undefined.

.keys(): Phương thức .keys() trên mảng trả về một iterable cho các chỉ mục của mảng (từ 0 đến totalPages - 1).

[...Array(totalPages).keys()]: Sử dụng toán tử spread (...)
 để chuyển iterable thành một mảng số từ 0 đến totalPages - 1.

Ví dụ: nếu totalPages là 5, [...Array(totalPages).keys()] sẽ trả về [0, 1, 2, 3, 4]. */
}
export default AdminPage;
