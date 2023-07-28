import React from 'react'
import "./Price.css"

export default function Price() {
  return (
    <div className='slide-container'>
      <input type="range" min="1" max="100" className='slider' id="myRange" />
      <p>Value: <span id="price-value">88$</span></p>
</div>
  )
}
