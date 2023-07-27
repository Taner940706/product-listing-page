import React from 'react'
import {FaHotjar} from "react-icons/fa"
import {AiFillStar} from "react-icons/ai"
import {TbDiscount2, TbShoppingCartX} from "react-icons/tb"

import "./Products.css"

export default function Products() {
  return (
    <>
      <section className='card-container'>
        <section className='card'>
          <div className='badges'>
          <FaHotjar />
          <TbDiscount2 />
          </div>
            <span className='card-title'>Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket</span>
          <div className='card-tumbnail'>
          <img  src='https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg' alt='Card tumbnail'/>
          </div>
          <section className='card-details'>
            <span className='card-category'>Women's clothing</span>
            <span className='card-description'>100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides</span>
            <AiFillStar /> <AiFillStar /> <AiFillStar />
          </section>
          <section className='card-footer'>
            <div className='card-price'>
              <dev>300</dev> 280
            </div>
            <div className='card-cart'>
              <TbShoppingCartX />
            </div>
          </section>
        </section>
      </section>

    </>
  )
}
