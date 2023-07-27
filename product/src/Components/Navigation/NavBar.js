import React from 'react'
import {Link} from "react-router-dom"

import SearchBar from '../SearchBar/SearchBar'
import "./NavBar.css"

export default function NavBar() {
  return (
    <div className='navbar'>
      <nav>
        <SearchBar />
        <Link to="/">
          <h1>All</h1>
        </Link>
        <Link to="/men-clothing">
            <h1>Men's clothing</h1>
        </Link>
        <Link to="/women-clothing">
            <h1>Women's clothing</h1>
        </Link>
        <Link to="/jewelery">
          <h1>Jeweleries</h1>
        </Link>
        <Link to="/electronics">
            <h1>Electronics</h1>
        </Link>
      </nav>
      
    </div>
  )
}
