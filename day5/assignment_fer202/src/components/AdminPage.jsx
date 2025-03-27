import React, { useContext, useState } from "react";
import AppContext from "../provider/Context";
import Header from "./Header";
import axios from "axios";
function AdminPage() {
  const { products,setProducts } = useContext(AppContext);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5; // Number of products per page

  // Calculate indexes for the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Total pages for pagination
  const totalPages = Math.ceil(products.length / productsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Handle Previous and Next
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

  // delete
  const handleDelete = async (prodId) => {
    const isConfirm = window.confirm('Want to delele?');
    if(!isConfirm) return;

    try {
        // 1. Xóa product
        const deleteResponse =  await axios.delete(`http://localhost:9999/products/${prodId}`);
        // cập nhật lại state
        const newProducts = products.filter((product) => product.id !== prodId);
        setProducts(newProducts);
 
        // 2. Xóa comment liên quan đến product
        //Get all comments related to this product
    const commentResponse = await axios.get("http://localhost:9999/comments?productId=" + prodId);
    const relatedComments = commentResponse.data;

      // 
      for (const comment of relatedComments) {
        await axios.delete(
          `http://localhost:9999/comments/${comment.id}`
        );
      }

    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="container">
      <Header/>
      <div style={{ width: "900px", margin: "15px auto" }}>
        <h3 style={{ textAlign: "center" }}>Products List</h3>
        <table className="table table-striped table-bordered table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentProducts.map((product, index) => (
              <tr key={index}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    // onClick={() => handleEdit(product.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    style={{ marginLeft: "10px" }}
                    onClick={() => handleDelete(product.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination with Bootstrap */}
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

export default AdminPage;

{
  /**
  1. [...Array(totalPages).keys()]
Array(totalPages): Tạo một mảng có độ dài là totalPages. Mỗi phần tử trong mảng này có giá trị là undefined.

.keys(): Phương thức .keys() trên mảng trả về một iterable cho các chỉ mục của mảng (từ 0 đến totalPages - 1).

[...Array(totalPages).keys()]: Sử dụng toán tử spread (...)
 để chuyển iterable thành một mảng số từ 0 đến totalPages - 1.

Ví dụ: nếu totalPages là 5, [...Array(totalPages).keys()] sẽ trả về [0, 1, 2, 3, 4]. */
}
