import React from 'react';
import { Product, FooterBanner, HeroBanner} from "../components";
import { client } from '../lib/client.js'


const index = ({products, bannerData}) => {

  const firstThreeElements = products.slice(0, 3)
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>


      <div className='products-heading '>
        <h2>Best Selling Products</h2>
        <p>
          Landing of your choice
        </p>
      </div>

      <div className='products-container'>
        {firstThreeElements?.map((product) => 
        <Product key={product._id} product={product}/>
        )}
      </div>

      <FooterBanner footerBanner={bannerData && bannerData[0]}/>
    </>
  )
};

export const getServerSideProps = async () =>{
const query =  `*[_type == "product"]`;
const products = await client.fetch(query);

const bannerQuery =  `*[_type == "banner"]`;
const bannerData = await client.fetch(bannerQuery);

return{
  props: {products, bannerData}
}
};

export default index;