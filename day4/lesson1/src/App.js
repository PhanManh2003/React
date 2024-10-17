import { Route, Routes } from "react-router-dom";
import { useContext } from "react";
import AppContext from "./provider/Context";
import HomePage from "./components/HomePage";

function App() {
  const { students } = useContext(AppContext);
  console.log(students);

  return (
    <div className="container-fluid">
        <HomePage />
        <hr></hr>
        <h5 style={{ textAlign: "center" }}>Copyright: HE172481</h5>
    </div>
  );
}

export default App;
