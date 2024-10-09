// import { useState } from "react";
// import Children from "./components/ConApp";
// function App() {
//   const [count, setCount] = useState(0);

//   const handleIncrease = () => {
//     setCount(count + 1);
//   };
//   const handleDecrease = () => {
//     if (count === 0) return;
//     setCount(count - 1);
//   };

//   return (
//     <div className="container">
//       {/* <h1>Count :{count}</h1>
//       <button onClick={handleIncrease}>Increase</button>
//       <button onClick={handleDecrease}>Decrease</button> */}
//       <Children props={{ count, handleIncrease, handleDecrease }} />
//     </div>
//   );
// }

// export default App;



// UseContext example
import { useState, createContext, useContext } from "react";
import ReactDOM from "react-dom/client";

// Tạo UserContext
const UserContext = createContext();

function Component1() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 />
    </UserContext.Provider>
  );
}

function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 />
    </>
  );
}

function Component5() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}

 
export default Component1;