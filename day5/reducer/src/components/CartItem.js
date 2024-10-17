import React from "react";
import { useContext } from "react";
import AppContext from "../provider/Context";

function CartItem() {
  const { state, dispatch } = useContext(AppContext);
  // state = { items : []}
  const { items } = state;

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Cart Items</h1>
      <div>
        <div className="gioHang"><h3>Số sản phẩm: {items.length}</h3></div>
        <div className="cart" style={{display: 'flex', 
            flexWrap:'wrap', justifyContent: 'flex-start'}}>
          {items.map((item) => (
            <div key={item.id} style={{flex:'0 1 30%'}}>
              <h4>Product: {item.name}</h4>
              <p>Description: {item.description}</p>
              <p>Price: {item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button className="btn btn-outline-danger"
              onClick={() => dispatch({type: "deleteItem", payload: item})}
              >Delete Product</button>
            </div>
          ))}
        </div>
      </div>
      <button 
        className="btn btn-outline-danger"
        onClick={() => dispatch({ type: "deleteAll" })}
      >
        Clear All
      </button>
    </div>
  );
}

export default CartItem;
