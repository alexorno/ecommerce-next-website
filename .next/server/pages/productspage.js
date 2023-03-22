"use strict";
(() => {
var exports = {};
exports.id = 35;
exports.ids = [35];
exports.modules = {

/***/ 5241:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1938);
/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2130);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_2__]);
_components__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



 // import styles from '../styles/globals.css'

const ProductsPage = ({
  products
}) => {
  const [sort, setSort] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('none');

  const sortChoose = () => {
    if (sort == 'none') {
      return products.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components__WEBPACK_IMPORTED_MODULE_2__/* .Product */ .xs, {
        key: item._id,
        product: item
      }));
    } else if (sort == 'asc') {
      const sortedArrAscend = [...products].sort((a, b) => {
        return a.price - b.price;
      });
      return sortedArrAscend.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components__WEBPACK_IMPORTED_MODULE_2__/* .Product */ .xs, {
        key: item._id,
        product: item
      }));
    } else if (sort == 'des') {
      const sortedArrDescend = [...products].sort((a, b) => {
        return b.price - a.price;
      });
      return sortedArrDescend.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components__WEBPACK_IMPORTED_MODULE_2__/* .Product */ .xs, {
        key: item._id,
        product: item
      }));
    } else {
      return ['error'];
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "products-page-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "products-preferences"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    className: "sort-select",
    onChange: e => {
      setSort(e.target.value), sortChoose();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "none"
  }, "None"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "asc"
  }, "Least price"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "des"
  }, "Max Price"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "products-list",
    filter: sort
  }, sortChoose())));
};

const getServerSideProps = async () => {
  const query = `*[_type == "product"]`;
  const products = await _lib_client__WEBPACK_IMPORTED_MODULE_3__/* .client.fetch */ .L.fetch(query);
  return {
    props: {
      products
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductsPage);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1097:
/***/ ((module) => {

module.exports = require("@sanity/client");

/***/ }),

/***/ 1791:
/***/ ((module) => {

module.exports = require("@sanity/image-url");

/***/ }),

/***/ 943:
/***/ ((module) => {

module.exports = require("@stripe/stripe-js");

/***/ }),

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

/***/ 6201:
/***/ ((module) => {

module.exports = import("react-hot-toast");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [400,664,547,53], () => (__webpack_exec__(5241)));
module.exports = __webpack_exports__;

})();