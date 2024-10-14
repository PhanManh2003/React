import React, { useContext, useEffect, useState } from "react";
import MyContext from "./provider/Context";

function LearnUseEffect() {
  const { products } = useContext(MyContext);
  const [productSearch, setProductSearch] = useState([]);
  const userId = 1;
  useEffect(() => {
    // tìm product cần tìm
    const listSearch = products.filter((product) => product.userId === userId);
    if (listSearch.length) {
      setProductSearch(listSearch);
    }
  }, [userId]); // khi nào dependencies thay đổi thì useEffect sẽ chạy lại

  console.log(productSearch);

  return (
    <div>
      {productSearch.map((product, index) => (
        <div key={product.id}>
          <h4>{product.title}</h4>
        </div>
      ))}
    </div>
  );
}

export default LearnUseEffect;
