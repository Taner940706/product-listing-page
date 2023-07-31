import React from 'react'
import Inputs from '../../Inputs'
import './Color.css'

export default function Color({handleColorChange}) {
  return (
    <>
    <div className='sidebar-color-picker'>
     <Inputs
     handleColorChange={handleColorChange}
     value="white"
     title="White"
     name="name1"
     color="white" />

<Inputs
     handleColorChange={handleColorChange}
     value="black"
     title="Black"
     name="name1"
     color="black" />

<Inputs
     handleColorChange={handleColorChange}
     value="red"
     title="Red"
     name="name1"
     color="red" />
    </div>
    </>
  );
};
