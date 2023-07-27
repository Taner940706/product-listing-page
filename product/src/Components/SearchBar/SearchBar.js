import React from 'react'
import "./SearchBar.css"

export default function SearchBar() {
  return (
    <div className='search-bar'>
        <label htmlFor="search">Search:</label>
      <input type="text" id="search" placeholder='Search your product here' />
    </div>
  )
}
