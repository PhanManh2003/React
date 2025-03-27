import React from 'react'
import { Link } from 'react-router-dom'
import Logout from '../auth/Logout'
function Header() {
  return (
    <div className='bg-success-subtle d-flex justify-content-between' >
      <div>
         <Link to='/homepage' className='text-decoration-none text-white'>
            <button className='btn btn-primary'>Home</button>
         </Link>
      </div>
      <Logout />
    </div>
  )
}

export default Header
