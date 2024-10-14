import React, { useContext } from "react";
import Content from "./components/Content";
import MyContext from "./components/provider/Context";
import LearnUseEffect from "./components/LearnUseEffect";
function App() {
  // nhận giá trị từ provider
  const { count, setCount } = useContext(MyContext);

  return (
    <div className="container-fluid">
      {/* <div className="row">
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
      </div> */}


      {/* {count}
      <hr></hr>
      <button onClick={() => setCount(count + 1)}>Tăng</button>
      <hr></hr>
      <Content /> */}

      <LearnUseEffect />
    </div>
  );
}

export default App;
