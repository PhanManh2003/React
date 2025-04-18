import React from "react";

// con của app
// làm sao để nó có thể nhận được tham số từ app truyền qua
// component con nhận đối số từ component cha thông qua props , props là 1 object


/** Khi Children nhận được, object truyền vào sẽ trông như thế này:
 *{
    props: {
       count: 0,
       handleIncrease: () => {},
       handleDecrease: () => {}
     } 
  }
 */
function Children( {props} ) {
  const { count, handleIncrease, handleDecrease } = props; // destructuring
 
  return (
    <div>
      <h1>Count :{count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
}

export default Children;
