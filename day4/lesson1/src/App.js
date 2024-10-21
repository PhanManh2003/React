import { Route, Routes } from "react-router-dom";
import { useContext } from "react";
import AppContext from "./provider/Context";
import HomePage from "./components/HomePage";
import GradeDetail from "./components/GradeDetail";
import SearchName from "./components/SearchName";
import SearchNavbar from "./components/SearchNavbar";
import ListStudent from "./components/ListStudent";
function App() {
  const { students } = useContext(AppContext);
  console.log(students);

  return (
    <div className="container-fluid">
      <div className="row">
        <h1 style={{ textAlign: "center" }}>Student Management</h1>
        <div className="col-md-12">
          <SearchName />
        </div>
        <div className="col-md-3">
          <SearchNavbar />
        </div>
        <div className="col-md-9">
          <Routes>
            <Route path="/" element={<ListStudent />} />
            <Route path="/student" element={<ListStudent/>}/>
            <Route path="/student/:stdId" element={<GradeDetail/>}/>
          </Routes>
        </div>
      </div>
      <hr></hr>
      <h5 style={{ textAlign: "center" }}>Copyright: HE172481</h5>
    </div>
  );
}

export default App;
