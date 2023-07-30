import React from 'react'

export default function Inputs({handleChangeEvent, value, title, name, color}) {
  return (
    <div>
       <label className='color-label-title'>
        <input onChange={handleChangeEvent} type="radio" value={value} name={name} />
        <span style={{backgroundColor: color}}></span>{title}
      </label>
    </div>
  )
}
