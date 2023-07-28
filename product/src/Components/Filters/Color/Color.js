import React from 'react'
import './Color.css'

export default function Color() {
  return (
    <div className='sidebar-color-picker'>
      <label className='color-label-title'>
        <input type="radio" />
        <span></span>All
      </label>
      <label className='color-label-title'>
        <input type="radio" />
        <span></span>Black
      </label>
      <label className='color-label-title'>
        <input type="radio" />
        <span></span>Purple
      </label>
      <label className='color-label-title'>
        <input type="radio" />
        <span></span>White
      </label>
      <label className='color-label-title'>
        <input type="radio" />
        <span></span>Red
      </label>
    </div>
  )
}
