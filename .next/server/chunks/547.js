"use strict";
exports.id = 547;
exports.ids = [547];
exports.modules = {

/***/ 5547:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ StateContext),
/* harmony export */   "F": () => (/* binding */ useStateContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6201);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_1__]);
react_hot_toast__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const Context = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
const StateContext = ({
  children
}) => {
  const [showCart, setShowCart] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [cartItems, setCartItems] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [totalPrice, setTotalPrice] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [totalQuantities, setTotalQuantities] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [qty, setQty] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  let foundProduct;
  let index; // useEffect(() => {
  //   const data = window.localStorage.getItem('cartItems');
  //   if ( data !== null ) setCartItems(data);
  //   console.log(data)
  // },[]);

  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find(item => item._id === product._id);

    if (checkProductInCart) {
      const updatedCartItems = cartItems.map(cartProduct => {
        if (cartProduct._id === product._id) return { ...cartProduct,
          quantity: cartProduct.quantity + quantity
        };
      });
      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;
      setCartItems([...cartItems, { ...product
      }]);
    }

    setTotalPrice(prevTotalPrice => prevTotalPrice + product.price * quantity);
    setTotalQuantities(prevTotalQuantities => prevTotalQuantities + quantity);
    setQty(1);
    react_hot_toast__WEBPACK_IMPORTED_MODULE_1__.toast.success(`${qty} ${product.name} added to the cart.`); // localStorage.setItem('cartItems', JSON.stringify(cartItems))
  };

  const onRemove = product => {
    foundProduct = cartItems.find(item => item._id === product._id);
    const newCartItems = cartItems.filter(item => item._id !== product._id);
    setTotalPrice(prevTotalPrice => prevTotalPrice - foundProduct.price * foundProduct.quantity);
    setTotalQuantities(prevTotalQuantities => prevTotalQuantities - foundProduct.quantity);
    setCartItems(newCartItems);
  };

  const toggleCartItemQuantity = (id, value) => {
    foundProduct = cartItems.find(item => item._id === id);
    index = cartItems.findIndex(product => product._id === id);
    const newCartItems = cartItems.filter(item => item._id !== id);

    if (value === 'inc') {
      setCartItems([...newCartItems, { ...foundProduct,
        quantity: foundProduct.quantity + 1
      }]);
      setTotalPrice(prevTotalPrice => prevTotalPrice + foundProduct.price);
      setTotalQuantities(prevTotalQuantities => prevTotalQuantities + 1);
    } else if (value === 'dec') {
      if (foundProduct.quantity > 1) {
        setCartItems([...newCartItems, { ...foundProduct,
          quantity: foundProduct.quantity - 1
        }]);
        setTotalPrice(prevTotalPrice => prevTotalPrice - foundProduct.price);
        setTotalQuantities(prevTotalQuantities => prevTotalQuantities - 1);
      }
    }
  };

  const incQty = () => {
    setQty(prevQty => prevQty + 1);
  };

  const decQty = () => {
    setQty(prevQty => {
      if (prevQty - 1 < 1) return 1;
      return prevQty - 1;
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (cartItems.length !== 0) {
      localStorage.setItem('items', JSON.stringify(cartItems));
      localStorage.setItem('itemsTotalPrice', JSON.stringify(totalPrice));
      localStorage.setItem('itemsTotalQty', JSON.stringify(totalQuantities));
    }
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (localStorage.getItem('items')) {
      const data = localStorage.getItem('items');
      const storageTotalPrice = localStorage.getItem('itemsTotalPrice');
      const storageQty = localStorage.getItem('itemsTotalQty');
      console.log('data', data);
      setCartItems(JSON.parse(data));
      setTotalPrice(JSON.parse(storageTotalPrice));
      setTotalQuantities(JSON.parse(storageQty));
    }
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Context.Provider, {
    value: {
      showCart,
      setShowCart,
      cartItems,
      totalPrice,
      totalQuantities,
      qty,
      incQty,
      decQty,
      onAdd,
      toggleCartItemQuantity,
      onRemove,
      setCartItems,
      setTotalPrice,
      setTotalQuantities
    }
  }, children);
};
const useStateContext = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;