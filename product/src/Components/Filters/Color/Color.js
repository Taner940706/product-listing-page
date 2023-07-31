import React from 'react'
import Inputs from '../../Inputs'
import './Color.css'

export default function Color(handleChangeEvent) {
  return (
    <div className='sidebar-color-picker'>
     <Inputs
     handleChangeEvent={handleChangeEvent}
     value="white"
     title="White"
     name="name1"
     color="white" />

<Inputs
     handleChangeEvent={handleChangeEvent}
     value="black"
     title="Black"
     name="name1"
     color="black" />

<Inputs
     handleChangeEvent={handleChangeEvent}
     value="red"
     title="Red"
     name="name1"
     color="red" />
    </div>
    
  )
}
