import Content from "./components/Content";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <Header />
        </div>
        <div className="col-md-12 row">
          <div className="col-md-3">
             <Navbar />
          </div>
          <div className="col-md-9">
             <Content/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
