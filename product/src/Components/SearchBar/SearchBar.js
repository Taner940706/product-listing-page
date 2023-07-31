import React from 'react'
import "./SearchBar.css"

export default function SearchBar({handleChangeEvent, query}) {
  return (
    <div className='search-bar'>
        <label htmlFor="search">Search:</label>
      <input type="text" onChange={handleChangeEvent} value={query} id="search" placeholder='Search your product here' />
    </div>
  )
}
