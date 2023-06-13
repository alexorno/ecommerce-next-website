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


   const onAdd = (product, quantity) => {

    const checkProductInCart = cartItems.find((item) => item._id === product._id);
    
    if(checkProductInCart) {
      cartItems.map((cartProduct) => {
        if(cartProduct._id === product._id) {
          cartProduct.quantity = cartProduct.quantity + quantity
        }
      })
      
    } else {
      product.quantity = quantity;
      setCartItems([...cartItems, { ...product }]);

    }

    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);
    setQty(1)
    toast.success(`${qty} ${product.name} added to the cart.`);
  } 

  const onRemove = (product) => {
    foundProduct = cartItems.find((item) => item._id === product._id)
    const newCartItems = cartItems.filter((item) => item._id !== product._id)

    setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price * foundProduct.quantity)
    setTotalQuantities(prevTotalQuantities => prevTotalQuantities - foundProduct.quantity)
    setCartItems(newCartItems)


  }

  const toggleCartItemQuantity = (id,value) => {
    const duplicateCartItems = [...cartItems];
    console.log(cartItems)
    if(value === 'inc'){
      duplicateCartItems.map(item => {
        if(item._id === id){
          item.quantity++;
          setTotalPrice(prevTotalPrice => prevTotalPrice + item.price);
          setTotalQuantities(prevTotalQuantities => prevTotalQuantities + 1);
        }
      })
    } else if (value === 'dec') {
      const foundProduct = cartItems.find((item) => item._id === id);
        if(foundProduct.quantity > 1){
          duplicateCartItems.map(item => {
            if(item._id === id){
              item.quantity--;
              setTotalPrice(prevTotalPrice => prevTotalPrice - item.price);
              setTotalQuantities(prevTotalQuantities => prevTotalQuantities - 1);
            }
          })
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
    if(localStorage.getItem('items')){
      const data = localStorage.getItem('items')
      const storageTotalPrice = localStorage.getItem('itemsTotalPrice')
      const storageQty = localStorage.getItem('itemsTotalQty')

      setCartItems(JSON.parse(data))
      setTotalPrice(JSON.parse(storageTotalPrice))
      setTotalQuantities(JSON.parse(storageQty))
    }
  }, [])

  useEffect(() => {
      localStorage.setItem('items', JSON.stringify(cartItems))
      localStorage.setItem('itemsTotalPrice', JSON.stringify(totalPrice))
      localStorage.setItem('itemsTotalQty', JSON.stringify(totalQuantities))
  }, [cartItems, totalQuantities, totalPrice])

  return (
    <Context.Provider
    value={{ showCart, setShowCart, cartItems, totalPrice, totalQuantities, qty, incQty, decQty, onAdd, toggleCartItemQuantity, onRemove, setCartItems, setTotalPrice, setTotalQuantities
      }} >

      {children}
    </Context.Provider>
  )
};

export const useStateContext = () => useContext(Context);
