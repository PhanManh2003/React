import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import ListMovie from './ListMovie'

function Home() {
  return (
   <div className="container">
      <div className="row">
        <h1 style={{ textAlign: "center" }}>React Application</h1>
        <div className="col-md-12">
          <Header />
        </div>
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9">
          {/* <Routes>
            <Route path="/" element={<ListStudent />} />
            <Route path="/student" element={<ListStudent/>}/>
            <Route path="/student/:stdId" element={<GradeDetail/>}/>
          </Routes> */}
          <ListMovie />
        </div>
      </div>
    </div>
  )
}

export default Home
