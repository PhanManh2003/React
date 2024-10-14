import React, { useContext } from "react";
import Navbar from "./Navbar";
import MyContext from "./provider/Context";
function Content() {
  const { count, setCount, products, setProducts } = useContext(MyContext);

  return (
    <div>
      <h1>Content của count: {count}</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Navbar />
    </div>
  );
}

export default Content;
