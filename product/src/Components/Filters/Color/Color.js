import React from 'react'
import Inputs from '../../Inputs'
import './Color.css'

export default function Color(handleChangeEvent) {
  return (
    <div className='sidebar-color-picker'>
     <Inputs
     handleChangeEvent={handleChangeEvent}
     value="white"
     title="Black"
     name="name1"
     color="black" />
    </div>
  )
}
