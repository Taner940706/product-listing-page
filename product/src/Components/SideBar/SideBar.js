import React from 'react'
import "./SideBar.css"
import Color from "../Filters/Color/Color"
import Price from "../Filters/Price/Price"


export default function SideBar() {
  return (
    <>
    <section className='left-sidebar-container'>
        <span>Filter</span>
        <Price />
        <Color />
    </section>
    </>
  )
}
