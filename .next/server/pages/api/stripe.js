"use strict";
(() => {
var exports = {};
exports.id = 475;
exports.ids = [475];
exports.modules = {

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 9847:
/***/ ((module) => {

module.exports = require("react-icons/ai");

/***/ }),

/***/ 1946:
/***/ ((module) => {

module.exports = require("react-icons/ti");

/***/ }),

/***/ 8174:
/***/ ((module) => {

module.exports = require("stripe");

/***/ }),

/***/ 6201:
/***/ ((module) => {

module.exports = import("react-hot-toast");;

/***/ }),

/***/ 6441:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7262);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_ti__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1946);
/* harmony import */ var react_icons_ti__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_ti__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6201);
/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3984);
/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2946);
/* harmony import */ var _lib_getStripe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9709);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_4__, _context_StateContext__WEBPACK_IMPORTED_MODULE_5__]);
([react_hot_toast__WEBPACK_IMPORTED_MODULE_4__, _context_StateContext__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const Cart = () => {
  const cartRef = useRef();
  const closeRef = useRef(null);
  const {
    totalPrice,
    totalQuantities,
    cartItems,
    showCart,
    setShowCart,
    toggleCartItemQuantity,
    onRemove
  } = useStateContext();

  const handleCheckout = async () => {
    const stripe = await getStripe();
    const response = await fetch('/api/stripe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        cartItems
      })
    });

    if (response.statusCode === 500) {
      return;
    } else {}

    ;
    const data = await response.json();
    toast.loading('Redirecting...');
    stripe.redirectToCheckout({
      sessionId: data.id
    });
  };

  const closeOpenMenus = e => {
    if (closeRef.current && showCart && !closeRef.current.contains(e.target)) {
      setShowCart(false);
    }
  };

  document.addEventListener('mousedown', closeOpenMenus);
  return /*#__PURE__*/React.createElement("div", {
    className: "cart-wrapper",
    ref: cartRef
  }, /*#__PURE__*/React.createElement("div", {
    className: "cart-container",
    ref: closeRef
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "cart-heading",
    onClick: () => setShowCart(false)
  }, /*#__PURE__*/React.createElement(AiOutlineLeft, null), /*#__PURE__*/React.createElement("span", {
    className: "heading"
  }, "Your Cart"), /*#__PURE__*/React.createElement("span", {
    className: "cart-num-items"
  }, "(", totalQuantities, " items)")), cartItems.length < 1 && /*#__PURE__*/React.createElement("div", {
    className: "empty-cart"
  }, /*#__PURE__*/React.createElement(AiOutlineShopping, {
    size: 150
  }), /*#__PURE__*/React.createElement("h3", null, "Your shopping bag is empty"), /*#__PURE__*/React.createElement(Link, {
    href: "/"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setShowCart(false),
    className: "btn"
  }, "Continue Shopping"))), /*#__PURE__*/React.createElement("div", {
    className: "product-container"
  }, cartItems.length >= 1 && cartItems.map(item => /*#__PURE__*/React.createElement("div", {
    className: "product",
    key: item._id
  }, /*#__PURE__*/React.createElement("img", {
    src: urlFor(item?.image[0]),
    className: "cart-product-image"
  }), /*#__PURE__*/React.createElement("div", {
    className: "item-desc"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex top"
  }, /*#__PURE__*/React.createElement("h5", null, item.name), /*#__PURE__*/React.createElement("h4", null, "$", item.price)), /*#__PURE__*/React.createElement("div", {
    className: "flex bottom"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "quantity-desc"
  }, /*#__PURE__*/React.createElement("span", {
    className: "minus",
    onClick: () => toggleCartItemQuantity(item._id, 'dec')
  }, /*#__PURE__*/React.createElement(AiOutlineMinus, null)), /*#__PURE__*/React.createElement("span", {
    className: "num",
    onClick: ""
  }, item.quantity), /*#__PURE__*/React.createElement("span", {
    className: "plus",
    onClick: () => toggleCartItemQuantity(item._id, 'inc')
  }, /*#__PURE__*/React.createElement(AiOutlinePlus, null)))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "remove-item",
    onClick: () => onRemove(item)
  }, /*#__PURE__*/React.createElement(TiDeleteOutline, null))))))), cartItems.length >= 1 && /*#__PURE__*/React.createElement("div", {
    className: "cart-bottom"
  }, /*#__PURE__*/React.createElement("div", {
    className: "total"
  }, /*#__PURE__*/React.createElement("h3", null, "Subtotal:"), /*#__PURE__*/React.createElement("h3", null, "$", totalPrice)), /*#__PURE__*/React.createElement("div", {
    className: "btn-container"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn",
    onClick: handleCheckout
  }, "Pay with Stripe")))));
};

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Cart)));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6038:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_1__);



const Footer = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: "footer-container"
  }, /*#__PURE__*/React.createElement("p", null, "2022 All Right Reserved"), /*#__PURE__*/React.createElement("p", {
    className: "icon"
  }, /*#__PURE__*/React.createElement(AiFillInstagram, null), /*#__PURE__*/React.createElement(AiOutlineTwitter, null)));
};

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Footer)));

/***/ }),

/***/ 2845:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7262);
/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2946);




const FooterBanner = ({
  footerBanner: {
    discount,
    largeText1,
    largeText2,
    saleTime,
    smallText,
    midText,
    desc,
    product,
    image,
    buttonText,
    slug
  }
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: "footer-banner-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "banner-desc"
  }, /*#__PURE__*/React.createElement("div", {
    className: "left"
  }, /*#__PURE__*/React.createElement("p", null, " ", discount), /*#__PURE__*/React.createElement("h3", null, largeText1), /*#__PURE__*/React.createElement("h3", null, largeText2), /*#__PURE__*/React.createElement("p", null, saleTime)), /*#__PURE__*/React.createElement("div", {
    className: "right"
  }, /*#__PURE__*/React.createElement("p", null, smallText), /*#__PURE__*/React.createElement("h3", null, midText), /*#__PURE__*/React.createElement("p", null, desc, " "), /*#__PURE__*/React.createElement(Link, {
    href: `/product/${product}`
  }, /*#__PURE__*/React.createElement("button", {
    type: "button"
  }, buttonText))), /*#__PURE__*/React.createElement("img", {
    src: urlFor(image),
    alt: image,
    style: {
      'opacity': '0.5'
    },
    className: "footer-banner-image"
  })));
};

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (FooterBanner)));

/***/ }),

/***/ 9926:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7262);
/* harmony import */ var _lib_client_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2946);




const HeroBanner = ({
  heroBanner
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: "hero-banner-container"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "beats-solo"
  }, heroBanner.smallText), /*#__PURE__*/React.createElement("h3", null, heroBanner.midText), /*#__PURE__*/React.createElement("h1", null, heroBanner.largeText), /*#__PURE__*/React.createElement("img", {
    src: urlFor(heroBanner.image),
    alt: "img",
    className: "hero-banner-image",
    height: 'auto'
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Link, {
    href: `/product/${heroBanner.product}`
  }, /*#__PURE__*/React.createElement("button", {
    type: "button"
  }, heroBanner.buttonText)), /*#__PURE__*/React.createElement("div", {
    className: "desc"
  }, /*#__PURE__*/React.createElement("h5", null, "DESCRIPTION"), /*#__PURE__*/React.createElement("p", null, heroBanner.desc))));
};

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (HeroBanner)));

/***/ }),

/***/ 8362:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6038);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6742);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Navbar__WEBPACK_IMPORTED_MODULE_3__]);
_Navbar__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const Layout = ({
  children
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: "layout"
  }, /*#__PURE__*/React.createElement(Head, null, /*#__PURE__*/React.createElement("title", null, "'E-commerce shop'")), /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement(Navbar, null)), /*#__PURE__*/React.createElement("main", {
    className: "main-container"
  }, children), /*#__PURE__*/React.createElement("footer", null, /*#__PURE__*/React.createElement(Footer, null)));
};

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Layout)));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6742:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7262);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3984);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5781);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_StateContext__WEBPACK_IMPORTED_MODULE_3__, ___WEBPACK_IMPORTED_MODULE_4__]);
([_context_StateContext__WEBPACK_IMPORTED_MODULE_3__, ___WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const Navbar = () => {
  const {
    showCart,
    setShowCart,
    totalQuantities
  } = useStateContext();
  return /*#__PURE__*/React.createElement("div", {
    className: "navbar-container"
  }, /*#__PURE__*/React.createElement("p", {
    className: "logo"
  }, /*#__PURE__*/React.createElement(Link, {
    href: "/"
  }, "LOGO")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "product-button"
  }, /*#__PURE__*/React.createElement(Link, {
    href: "/productspage"
  }, " Productss ")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "cart-icon",
    onClick: () => setShowCart(true)
  }, /*#__PURE__*/React.createElement(AiOutlineShopping, null), /*#__PURE__*/React.createElement("span", {
    className: "cart-item-qty"
  }, totalQuantities)), showCart && /*#__PURE__*/React.createElement(Cart, null));
};

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Navbar)));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2257:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7262);
/* harmony import */ var _lib_client_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2946);




const Product = ({
  product: {
    price,
    image,
    slug,
    name
  }
}) => {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Link, {
    href: `/product/${slug.current}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "product-card"
  }, /*#__PURE__*/React.createElement("img", {
    src: urlFor(image && image[0]),
    alt: slug.current,
    width: 350
  }), /*#__PURE__*/React.createElement("p", {
    className: "product-name"
  }, name), /*#__PURE__*/React.createElement("p", {
    className: "product-price"
  }, "$", price))));
};

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Product)));

/***/ }),

/***/ 5781:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6038);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8362);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6742);
/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2257);
/* harmony import */ var _FooterBanner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2845);
/* harmony import */ var _HeroBanner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9926);
/* harmony import */ var _Cart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6441);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Layout__WEBPACK_IMPORTED_MODULE_1__, _Navbar__WEBPACK_IMPORTED_MODULE_2__, _Cart__WEBPACK_IMPORTED_MODULE_6__]);
([_Layout__WEBPACK_IMPORTED_MODULE_1__, _Navbar__WEBPACK_IMPORTED_MODULE_2__, _Cart__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3984:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony exports StateContext, useStateContext */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6201);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_1__]);
react_hot_toast__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const Context = /*#__PURE__*/(/* unused pure expression or super */ null && (createContext()));
const StateContext = ({
  children
}) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);
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
    toast.success(`${qty} ${product.name} added to the cart.`); // localStorage.setItem('cartItems', JSON.stringify(cartItems))
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

  useEffect(() => {
    if (cartItems.length !== 0) {
      localStorage.setItem('items', JSON.stringify(cartItems));
      localStorage.setItem('itemsTotalPrice', JSON.stringify(totalPrice));
      localStorage.setItem('itemsTotalQty', JSON.stringify(totalQuantities));
    }
  });
  useEffect(() => {
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
  return /*#__PURE__*/React.createElement(Context.Provider, {
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
const useStateContext = () => useContext(Context);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2946:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: client, urlFor

;// CONCATENATED MODULE: external "@sanity/client"
const client_namespaceObject = require("@sanity/client");
var client_default = /*#__PURE__*/__webpack_require__.n(client_namespaceObject);
;// CONCATENATED MODULE: external "@sanity/image-url"
const image_url_namespaceObject = require("@sanity/image-url");
var image_url_default = /*#__PURE__*/__webpack_require__.n(image_url_namespaceObject);
;// CONCATENATED MODULE: ./lib/client.js


const client = client_default()({
  projectId: '0gvd6dxs',
  dataset: 'production',
  apiVersion: '2022-09-21',
  useCdn: true,
  token: "skkgyUJ6CBLzimpd26aKvvgL74650mXkbXGurnQAIDrIxVgGVbAn6qUmo0b1CnIzR4CfLlFjcbpcXNDBHCU53VeOoaZ30ms7KXIf2baTSlYpSR4BpMuRlxEihrqncOL6r0FnESB1uVBqYl8qLegY0tXCsHTZbvKdqa48DGvfPx3RfIpRXqv4"
});
const builder = image_url_default()(client);
const urlFor = source => builder.image(source);

/***/ }),

/***/ 9709:
/***/ (() => {


// UNUSED EXPORTS: default

;// CONCATENATED MODULE: external "@stripe/stripe-js"
const stripe_js_namespaceObject = require("@stripe/stripe-js");
;// CONCATENATED MODULE: ./lib/getStripe.js

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe('pk_test_51LuBeoGpyr3WOjkTIDJmGwHFzA16tKJvNHQH67SwHzXDSSxyKFtSKFZk7vsc20lbyPbkXypsze6utJopFPTBrNcq00NGLsRUfS');
  }

  return stripePromise;
};

/* harmony default export */ const lib_getStripe = ((/* unused pure expression or super */ null && (getStripe)));

/***/ }),

/***/ 3266:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8174);
/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stripe__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5781);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_1__]);
_components__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const stripe = new (stripe__WEBPACK_IMPORTED_MODULE_0___default())("sk_test_51LuBeoGpyr3WOjkTtG1dW6Dm6k5ytCFVMZWeph1CoffxNhJHQbpgPO8X2Oe6l5zxVwSskmjrqrPsnm8PX4fokH0C008mIJCmS2");
async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const params = {
        shipping_address_collection: {
          allowed_countries: ['US', 'CA']
        },
        submit_type: 'pay',
        mode: 'payment',
        payment_method_types: ['card'],
        billing_address_collection: 'auto',
        shipping_options: [{
          shipping_rate: 'shr_1LuCHcGpyr3WOjkTdi0ljv9J'
        }],
        line_items: req.body.cartItems.map(item => {
          const img = item.image[0].asset._ref;
          const newImage = img.replace('image-', 'https://cdn.sanity.io/images/29bp97fp/production/').replace('-webp', '.webp');
          return {
            price_data: {
              currency: 'usd',
              product_data: {
                name: item.name,
                images: [newImage]
              },
              unit_amount: item.price * 100
            },
            adjustable_quantity: {
              enabled: true,
              minimum: 1
            },
            quantity: item.quantity
          };
        }),
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/canceled`
      }; // Create Checkout Sessions from body params.

      const session = await stripe.checkout.sessions.create(params);
      res.status(200).json(session);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [262], () => (__webpack_exec__(3266)));
module.exports = __webpack_exports__;

})();