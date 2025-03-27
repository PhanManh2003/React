import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import AppContext from "../provider/Context";
import Header from "./Header";

function ProductDetail() {
  const { prodId } = useParams();
  const { products, comments } = useContext(AppContext);
  const product = products.find((prod) => prod.id == prodId);

  // get comment for product
   const commentList = comments.filter((c) => c.productId == prodId);
  return (
    <div className="container-fluid">
      <Header/>
      <div className="row">
        <div className="col-md-4">
          <img src={product.image} alt="" style={{width: '100%'}}/>
        </div>
        <div className="col-md-8" style={{ paddingTop: "100px" }}>
          <p style={{ fontSize: "32px" }}>
            Name: <span>{product.name}</span>{" "}
          </p>
          <p style={{ fontSize: "32px" }}>
            Price: <span>{product.price}</span>{" "}
          </p>
        </div>
        <div id="desc">
          <p>{product.description}</p>
        </div>
        <div id="comment_list">
         <ul>
            <h4>Đánh giá từ khách hàng</h4>
            {commentList?.map((c,index) => 
               (
                  <li key={index}>
                     <div>
                       <p>Content:   {c.content}</p>
                       <p>Rating: {c.rating} star</p>
                      </div>
                     </li>
               )
            )}
            </ul>
        </div>
        <div id="give_comment">
            <form action="">
               
            </form>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
