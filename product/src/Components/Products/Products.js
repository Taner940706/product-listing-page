import React from 'react'

import "./Products.css"

export default function Products({result}) {
  return (
    <>
      <section className='card-container'>
        {result}
      </section>

    </>
  )
}
