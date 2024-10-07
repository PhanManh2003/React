import { useState } from "react";
import Children from "./components/ConApp";
function App() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };
  const handleDecrease = () => {
    if (count === 0) return;
    setCount(count - 1);
  };

  return (
    <div className="container">
      {/* <h1>Count :{count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button> */}
      <Children props={{ count, setCount, handleIncrease, handleDecrease }} />
    </div>
  );
}

export default App;
