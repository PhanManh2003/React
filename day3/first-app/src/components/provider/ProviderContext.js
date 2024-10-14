import React from "react";
import { useState, useEffect } from "react";
import MyContext from "./Context";
import App from "../../App";

function ProviderContext({ children }) {
  const [count, setCount] = useState(0);
  const [filterCheck, setFilterCheck] = useState("Manh dep trai");
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setProducts(json));
    console.log("hello");

    //   return () => {
    //     second
    //   }
  }, []);
  const data = {
    count,
    setCount,
    filterCheck,
    setFilterCheck,
    products,
    setProducts,
  };

  return (
    <MyContext.Provider value={data}>
      {children}
      {/* App.js  */}
    </MyContext.Provider>
  );
}

export default ProviderContext;
