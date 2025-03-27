import React from 'react'
import { useContext } from 'react'
import AppContext from '../provider/Context';
function SearchName() {
  const {searchName, setSearchName} = useContext(AppContext);
  return (
    <div style={{textAlign: 'center'}}>
      <input type="text" placeholder="Enter name search"
       style={{width:'70%', padding:'5px'}}
       value={searchName || ''}
       onChange={(e) => {setSearchName(e.target.value)}} />
    </div>
  )
}

export default SearchName