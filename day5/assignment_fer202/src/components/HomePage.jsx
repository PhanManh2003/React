import React from "react";
import Header from "./Header";
import { useContext } from "react";
import AppContext from "../provider/Context";
import { Link } from "react-router-dom";
function HomePage() {
  const { products } = useContext(AppContext);
  return (
    <div style={{ width: "1140px", margin: "0px auto" }}>
      <Header />
      <h1 className="text-center">Our Products</h1>
      <ul
        className="d-flex"
        style={{
          justifyContent: "space-between",
          flexWrap: "wrap",
          listStyle: "none",
          padding: "0",
        }}
      >
        {products.map((product) => (
          <li key={product.id} style={{padding: '5px'}}>
            <div className="card" style={{ width: "18rem", minHeight: '450px', position: 'relative' }}>
              <Link to={`/homepage/${product.id}`}>
                <img src={product.image} className="card-img-top" alt="..." />
              </Link>
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text" style={{
                  position: 'absolute', bottom: '50px'
                }}>Giá: <span style={{fontWeight: 'bold'}}>{product.price}</span> </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
