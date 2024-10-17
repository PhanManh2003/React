import React, { useReducer, useState } from "react";
import ListProduct from "./components/ListProduct";
import CartItem from "./components/CartItem";

// // khai báo initState
// const initState = 0;

// // khai báo action
// const UP_ACTION = "up";
// const DOWN_ACTION = "down";

// // khai báo reducer
// const reducer = (state, action) => {
//   console.log("UseRecuder bắt đầu chạy");
//   switch (action) {
//     case UP_ACTION:
//       return state + 1;
//     case DOWN_ACTION:
//       return state - 1;
//     default:
//       throw new Error("Invalid action");
//   }
// };

function App() {
  // State quản lí trạng thái của ứng dụng
  // Reducer là một hàm nhận vào 2 tham số :trạng thái hiện tại và một hành động (action) => để cập nhật trạng thái.
  // dùng useState khi state đơn giản, dùng useReducer khi state phức tạp

  // Cụ thể :
  // - khi state là number, string, null, undefined, boolean, object ( không phải object lồng nhau) thì dùng useState
  // - khi state là Array, Object lồng nhau thì dùng useReducer

  

  // const [count, dispatch] = useReducer(reducer, initState);
  return (
    <div className="container-fluid">
      {/* <h1>{count}</h1>
      <button onClick={() => dispatch(UP_ACTION)}>Increase</button>
      <button onClick={() => dispatch(DOWN_ACTION)}>Decrease</button> */}

      {/* <button onClick={()=> dispatch(
          // example
          // type: ADD_TO_CART,
          // payload: {
          //   id: 1,
          //   name: "Iphone 12",
          //   price: 1000,
          //   quantity: 1,
          // }
      ) }></button> */}

      <ListProduct />
      <hr></hr>
      <CartItem />
    </div>
  );
}

export default App;
