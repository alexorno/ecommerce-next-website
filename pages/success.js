import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import {BsCartCheckFill} from 'react-icons/bs';
import useRouter from 'next/router';

import {useStateContext} from '../context/StateContext';
import Utils from '../lib/utils'

const Success = () => {
const { setCartItems, setTotalPrice, setTotalQuantities} = useStateContext()

const [order, setOrder] = useState(null)

useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
})

  return (
    <>
    <div className='success-wrapper'>
        <div className='success'>
            <p className='icon'>
                <BsCartCheckFill/>
            </p>
        
        <h2>
            Thanks for your order!
        </h2>
        <p className='email-msg'>Check your email for the receipt</p>
        <p className='description'>
            If you have any questions, please, contact us via <a className='email' href='mailto:clientalexu@gmail.com'>clientalexu@gmail.com</a>
        </p>
        <Link href='/'>
            <button type='button' className='btn'>
                Continue shopping
            </button>
        </Link>
        </div>
        
    </div>
    <Utils />

    </>
  )
}

export default Success