(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[35],{5241:function(a,b,c){"use strict";c.r(b),c.d(b,{"__N_SSP":function(){return f}});var d=c(7294);c(1664);var e=c(1914);c(2130);var f=!0;b.default=({products:a})=>{const[b,c]=(0,d.useState)("none"),f=()=>{if("none"==b)return a.map(a=>d.createElement(e.xs,{key:a._id,product:a}));if("asc"==b){const c=[...a].sort((a,b)=>a.price-b.price);return c.map(a=>d.createElement(e.xs,{key:a._id,product:a}))}{if("des"!=b)return["error"];const f=[...a].sort((a,b)=>b.price-a.price);return f.map(a=>d.createElement(e.xs,{key:a._id,product:a}))}};return d.createElement(d.Fragment,null,d.createElement("div",{className:"products-page-container"},d.createElement("div",{className:"products-preferences"},d.createElement("select",{className:"sort-select",onChange:a=>{c(a.target.value),f()}},d.createElement("option",{value:"none"},"None"),d.createElement("option",{value:"asc"},"Least price"),d.createElement("option",{value:"des"},"Max Price"))),d.createElement("div",{className:"products-list",filter:b},f())))}},2929:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/productspage",function(){return c(5241)}])}},function(a){a.O(0,[888,774,179],function(){return a(a.s=2929)}),_N_E=a.O()}])