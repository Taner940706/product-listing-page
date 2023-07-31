import React from 'react'

export default function Inputs({handleColorChange, value, title, name, color}) {
  return (
       <label className='color-label-title'>
        <input onChange={handleColorChange}  type="radio" value={value} name={name} style={{accentColor: color}}/>
        <span></span>{title}
      </label>
  );
};
