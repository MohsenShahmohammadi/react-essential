import React, { useRef } from 'react'
import "./index.css"

const Search = () => {
    const searchInputRef=useRef();
  return (
    <>
        <div className='search-group'>
            <input ref={searchInputRef} type="search" className='input-search' placeholder='search your keyword and data'/>
            <button onClick={()=>alert(searchInputRef.current.value)} className='search-button'>
                search
            </button>
        </div>
    </>
  )
}

export default Search