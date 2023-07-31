import React from 'react'
import {FaHotjar} from "react-icons/fa"
// import {AiFillStar} from "react-icons/ai"
import {TbDiscount2, TbShoppingCartX} from "react-icons/tb"


export default function Cards({title, price, description, category, image, rating}) {
  return (
    <section className='card'>
          <div className='badges'>
          <FaHotjar />
          <TbDiscount2 />
          </div>
            <span className='card-title'>{title}</span>
          <div className='card-tumbnail'>
          <img  src={image} alt='Card tumbnail'/>
          </div>
          <section className='card-details'>
            <span className='card-category'>{category}</span>
            <span className='card-description'>{description}</span>
            {rating} {rating} {rating}
          </section>
          <section className='card-footer'>
            <div className='card-price'>
              <del>300</del> {price}
            </div>
            <div className='card-cart'>
              <TbShoppingCartX />
            </div>
          </section>
        </section>
  )
}
