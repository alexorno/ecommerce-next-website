import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client.js'


const Product = ({ product:{ price, image, slug, name } }) => {

  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className='product-card'>
          <img src={urlFor(image && image[0])} 
          alt={slug.current} 
          width={350} 

          
          />
          <p className='product-name'>{name}</p>
          <p className='product-price'>${price}</p>

        </div>
      </Link>
    </div>
  )
}

export default Product