import React from "react";
import { useContext } from "react";
import AppContext from "../provider/Context";
function ListProduct() {
  const { sampleProducts, dispatch } = useContext(AppContext);
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>List Products</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {sampleProducts.map((p) => (
          <div key={p.id} style={{ flex: "0 1 20%", minHeight: "400px", position: 'relative' }}>
            <div>
              {" "}
              <img
                style={{ width: "%" }}
                src="https://picsum.photos/100/100"
                alt="product"
              />
              <p>
                {p.name}
                <span style={{ color: "red" }}>{p.label}</span>
              </p>
            </div>
            <div>
              <p style={{ color: "green" }}>{p.price}</p>
              <p>{p.description}</p>
            </div>
            <button
              className="btn btn-outline-primary"
              style={{ display: "block" , position: "absolute", bottom: "50px"}}
              onClick={() => dispatch({
                type: "addToCart",
                payload: p
              })}
            >
              ADD
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListProduct;
