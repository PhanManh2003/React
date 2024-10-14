import React from 'react';
import { useContext } from 'react';
import MyContext from './provider/Context';
function Navbar() {
  const { count, setCount, fiterCheck, setFilterCheck } = useContext(MyContext);

  return (
    <div>
      <h1>navbar có count : {count}</h1>
      <div>{fiterCheck}</div>
    </div>
  )
}

export default Navbar