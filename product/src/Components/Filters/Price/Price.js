import React, { useState } from 'react'
import "./Price.css"

export default function Price() {

  const [selectedRangeValue, setSelectedRangeValue] = useState(0)

  return (
    <div className='slide-container'>
      <input type="range" min="1" max="100" className='slider' id="myRange" value={selectedRangeValue} onChange={(e) => setSelectedRangeValue(e.target.value)} />
      <p>Price: <span id="price-value">{selectedRangeValue} $</span></p>
</div>
  )
}
