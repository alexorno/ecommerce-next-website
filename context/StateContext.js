import React, { createContext, useContext, useState, useEffect } from "react";

import { toast } from 'react-hot-toast';


const Context = createContext();

export const StateContext = ({ children }) => {

  

  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalQuantities, setTotalQuantities] = useState(0)
  const [qty, setQty] = useState(1);

  let foundProduct;
  let index;

  
  

  

  // useEffect(() => {
  //   const data = window.localStorage.getItem('cartItems');
  //   if ( data !== null ) setCartItems(data);
  //   console.log(data)
  // },[]);




   const onAdd = (product, quantity) => {

    const checkProductInCart = cartItems.find((item) => item._id === product._id);
    
    if(checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if(cartProduct._id === product._id) return {
          ...cartProduct,
          quantity: cartProduct.quantity + quantity
        }
      })
      
      setCartItems(updatedCartItems);
      

    } else {
      product.quantity = quantity;
      
      setCartItems([...cartItems, { ...product }]);

    }

    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);
    setQty(1)
    toast.success(`${qty} ${product.name} added to the cart.`);

    // localStorage.setItem('cartItems', JSON.stringify(cartItems))
  } 

  const onRemove = (product) => {
    foundProduct = cartItems.find((item) => item._id === product._id)
    const newCartItems = cartItems.filter((item) => item._id !== product._id)

    setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price * foundProduct.quantity)
    setTotalQuantities(prevTotalQuantities => prevTotalQuantities - foundProduct.quantity)
    setCartItems(newCartItems)


  }

  const toggleCartItemQuantity = (id,value) => {
    foundProduct = cartItems.find((item) => item._id === id)
    index = cartItems.findIndex((product) => product._id === id)
    const newCartItems = cartItems.filter((item) => item._id !== id)

    if(value === 'inc'){
      setCartItems( [ ...newCartItems, { ...foundProduct, quantity: foundProduct.quantity + 1} ])
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price)
      setTotalQuantities(prevTotalQuantities => prevTotalQuantities + 1)

    } else if (value === 'dec') {
        if(foundProduct.quantity > 1){
          setCartItems( [ ...newCartItems, { ...foundProduct, quantity: foundProduct.quantity - 1} ])
          setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price)
          setTotalQuantities(prevTotalQuantities => prevTotalQuantities - 1)
      }
    }

  }

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  }

  const decQty = () => {
    setQty((prevQty) => {
    if(prevQty - 1 < 1) return 1;
    
    return prevQty - 1;
  });
  };


    useEffect(() => {
      if(cartItems.length !== 0){
      // console.log(cartItems)
          localStorage.setItem('cartItems', JSON.stringify(cartItems))
          const data = localStorage.getItem('cartItems')
          console.log('get item parse', JSON.parse(data))
      }else{
      }
    },[cartItems])

    useEffect(() => {
      const data = localStorage.getItem('cartItems') || 0
    for (let i = 0; i < 1; i++) {
      console.log('get item parse', JSON.parse(data)[i])
      onAdd(JSON.parse(data)[i], qty)
      }
      
    }, [])

  
  


  return (
    <Context.Provider
    value={{ showCart, setShowCart, cartItems, totalPrice, totalQuantities, qty, incQty, decQty, onAdd, toggleCartItemQuantity, onRemove, setCartItems, setTotalPrice, setTotalQuantities
      }} >

      {children}
    </Context.Provider>
  )
};

export const useStateContext = () => useContext(Context);
