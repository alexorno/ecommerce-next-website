import React, {useState, useEffect} from 'react';
import Link from 'next/link'
import { Product } from '../components';
import { client, urlFor } from '../lib/client';
// import styles from '../styles/globals.css'

const ProductsPage = ({products}) => {

const [sort, setSort] = useState('none')

const sortChoose = () => {

  if(sort == 'none'){
     return products.map((item) => (
      <Product key={item._id} product={item} />
      )) 

  }else if(sort == 'asc'){
    const sortedArrAscend = [...products].sort((a,b) => {
      return a.price - b.price
    })

    return sortedArrAscend.map((item) => (
      <Product key={item._id} product={item} />
      )) 
  }else if(sort == 'des'){
    const sortedArrDescend = [...products].sort((a,b) => {
      return b.price - a.price 
    })

    return sortedArrDescend.map((item) => (
      <Product key={item._id} product={item} />
      )) 
  }else{
    return ['error']
  }
}





  return (
    <>
        <div className='products-page-container'>
          <div className='products-preferences'>
            <select className='sort-select' onChange={(e) => {setSort(e.target.value), sortChoose() } }>
              <option value='none'>None</option>
              <option value='asc'>Least price</option>
              <option value='des'>Max Price</option>
            </select>
          </div>


          <div className='products-list' filter={sort}>

              {sortChoose()}

          </div>
        </div>
    </>
  )
}

export const getServerSideProps = async () =>{
  const query =  `*[_type == "product"]`;
  const products = await client.fetch(query);
  return{
    props: {products}
  }
  };

export default ProductsPage