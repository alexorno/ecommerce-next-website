"use strict";
exports.id = 53;
exports.ids = [53];
exports.modules = {

/***/ 1606:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_ti__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1946);
/* harmony import */ var react_icons_ti__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_ti__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6201);
/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5547);
/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2130);
/* harmony import */ var _lib_getStripe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6593);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_4__, _context_StateContext__WEBPACK_IMPORTED_MODULE_5__]);
([react_hot_toast__WEBPACK_IMPORTED_MODULE_4__, _context_StateContext__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const Cart = () => {
  const cartRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const closeRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const {
    totalPrice,
    totalQuantities,
    cartItems,
    showCart,
    setShowCart,
    toggleCartItemQuantity,
    onRemove
  } = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_5__/* .useStateContext */ .F)();

  const handleCheckout = async () => {
    const stripe = await (0,_lib_getStripe__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
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
    react_hot_toast__WEBPACK_IMPORTED_MODULE_4__["default"].loading('Redirecting...');
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "cart-wrapper",
    ref: cartRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "cart-container",
    ref: closeRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    className: "cart-heading",
    onClick: () => setShowCart(false)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiOutlineLeft, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "heading"
  }, "Your Cart"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "cart-num-items"
  }, "(", totalQuantities, " items)")), cartItems.length < 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "empty-cart"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiOutlineShopping, {
    size: 150
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Your shopping bag is empty"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
    href: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    onClick: () => setShowCart(false),
    className: "btn"
  }, "Continue Shopping"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "product-container"
  }, cartItems.length >= 1 && cartItems.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "product",
    key: item._id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: (0,_lib_client__WEBPACK_IMPORTED_MODULE_6__/* .urlFor */ .u)(item?.image[0]),
    className: "cart-product-image"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "item-desc"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex top"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", null, item.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "$", item.price)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "quantity-desc"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "minus",
    onClick: () => toggleCartItemQuantity(item._id, 'dec')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiOutlineMinus, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "num",
    onClick: ""
  }, item.quantity), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "plus",
    onClick: () => toggleCartItemQuantity(item._id, 'inc')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiOutlinePlus, null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    className: "remove-item",
    onClick: () => onRemove(item)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_ti__WEBPACK_IMPORTED_MODULE_3__.TiDeleteOutline, null))))))), cartItems.length >= 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "cart-bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "total"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Subtotal:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "$", totalPrice)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "btn-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    className: "btn",
    onClick: handleCheckout
  }, "Pay with Stripe")))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cart);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3489:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_1__);



const Footer = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "footer-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "2022 All Right Reserved"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "icon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_1__.AiFillInstagram, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_1__.AiOutlineTwitter, null)));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ 7671:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2130);




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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "footer-banner-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "banner-desc"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, " ", discount), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, largeText1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, largeText2), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, saleTime)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, smallText), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, midText), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, desc, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
    href: `/product/${product}`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button"
  }, buttonText))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: (0,_lib_client__WEBPACK_IMPORTED_MODULE_2__/* .urlFor */ .u)(image),
    alt: image,
    style: {
      'opacity': '0.5'
    },
    className: "footer-banner-image"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FooterBanner);

/***/ }),

/***/ 1523:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var _lib_client_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2130);




const HeroBanner = ({
  heroBanner
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "hero-banner-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "beats-solo"
  }, heroBanner.smallText), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, heroBanner.midText), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, heroBanner.largeText), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: (0,_lib_client_js__WEBPACK_IMPORTED_MODULE_2__/* .urlFor */ .u)(heroBanner.image),
    alt: "img",
    className: "hero-banner-image",
    height: 'auto'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
    href: `/product/${heroBanner.product}`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button"
  }, heroBanner.buttonText)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "desc"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", null, "DESCRIPTION"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, heroBanner.desc))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeroBanner);

/***/ }),

/***/ 193:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3489);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1053);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Navbar__WEBPACK_IMPORTED_MODULE_3__]);
_Navbar__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const Layout = ({
  children
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "layout"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_1___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title", null, "'E-commerce shop'")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Navbar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main", {
    className: "main-container"
  }, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("footer", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Footer__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, null)));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1053:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5547);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1938);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_StateContext__WEBPACK_IMPORTED_MODULE_3__, ___WEBPACK_IMPORTED_MODULE_4__]);
([_context_StateContext__WEBPACK_IMPORTED_MODULE_3__, ___WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const Navbar = () => {
  const {
    showCart,
    setShowCart,
    totalQuantities
  } = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_3__/* .useStateContext */ .F)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "navbar-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "logo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
    href: "/"
  }, "LOGO")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    className: "product-button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
    href: "/productspage"
  }, " Productss ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    className: "cart-icon",
    onClick: () => setShowCart(true)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiOutlineShopping, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "cart-item-qty"
  }, totalQuantities)), showCart && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(___WEBPACK_IMPORTED_MODULE_4__/* .Cart */ .AP, null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3693:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var _lib_client_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2130);




const Product = ({
  product: {
    price,
    image,
    slug,
    name
  }
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
    href: `/product/${slug.current}`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "product-card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: (0,_lib_client_js__WEBPACK_IMPORTED_MODULE_2__/* .urlFor */ .u)(image && image[0]),
    alt: slug.current,
    width: 350
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "product-name"
  }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "product-price"
  }, "$", price))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Product);

/***/ }),

/***/ 1938:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "xs": () => (/* reexport safe */ _Product__WEBPACK_IMPORTED_MODULE_3__.Z),
/* harmony export */   "LE": () => (/* reexport safe */ _FooterBanner__WEBPACK_IMPORTED_MODULE_4__.Z),
/* harmony export */   "yo": () => (/* reexport safe */ _HeroBanner__WEBPACK_IMPORTED_MODULE_5__.Z),
/* harmony export */   "AP": () => (/* reexport safe */ _Cart__WEBPACK_IMPORTED_MODULE_6__.Z)
/* harmony export */ });
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3489);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(193);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1053);
/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3693);
/* harmony import */ var _FooterBanner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7671);
/* harmony import */ var _HeroBanner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1523);
/* harmony import */ var _Cart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1606);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Layout__WEBPACK_IMPORTED_MODULE_1__, _Navbar__WEBPACK_IMPORTED_MODULE_2__, _Cart__WEBPACK_IMPORTED_MODULE_6__]);
([_Layout__WEBPACK_IMPORTED_MODULE_1__, _Navbar__WEBPACK_IMPORTED_MODULE_2__, _Cart__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2130:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ client),
/* harmony export */   "u": () => (/* binding */ urlFor)
/* harmony export */ });
/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1097);
/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1791);
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_1__);


const client = _sanity_client__WEBPACK_IMPORTED_MODULE_0___default()({
  projectId: '0gvd6dxs',
  dataset: 'production',
  apiVersion: '2022-09-21',
  useCdn: true,
  token: "skkgyUJ6CBLzimpd26aKvvgL74650mXkbXGurnQAIDrIxVgGVbAn6qUmo0b1CnIzR4CfLlFjcbpcXNDBHCU53VeOoaZ30ms7KXIf2baTSlYpSR4BpMuRlxEihrqncOL6r0FnESB1uVBqYl8qLegY0tXCsHTZbvKdqa48DGvfPx3RfIpRXqv4"
});
const builder = _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default()(client);
const urlFor = source => builder.image(source);

/***/ }),

/***/ 6593:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(943);
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__);

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = (0,_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__.loadStripe)('pk_test_51LuBeoGpyr3WOjkTIDJmGwHFzA16tKJvNHQH67SwHzXDSSxyKFtSKFZk7vsc20lbyPbkXypsze6utJopFPTBrNcq00NGLsRUfS');
  }

  return stripePromise;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getStripe);

/***/ })

};
;