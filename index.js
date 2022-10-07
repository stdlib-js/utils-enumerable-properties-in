// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).enumerablePropertiesIn=e()}(this,(function(){"use strict";var t,e=void 0!==Object.getOwnPropertySymbols,r=Object.getOwnPropertySymbols;t=e?function(t){return r(Object(t))}:function(){return[]};var n=t,o=void 0!==Object.getOwnPropertyNames,u=Object.getOwnPropertyNames;function i(t){return Object.keys(Object(t))}var c=void 0!==Object.keys;var f="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function l(){return f&&"symbol"==typeof Symbol.toStringTag}var a=Object.prototype.toString;var p=Object.prototype.hasOwnProperty;function s(t,e){return null!=t&&p.call(t,e)}var y="function"==typeof Symbol?Symbol.toStringTag:"";var b,v=l()?function(t){var e,r,n;if(null==t)return a.call(t);r=t[y],e=s(t,y);try{t[y]=void 0}catch(e){return a.call(t)}return n=a.call(t),e?t[y]=r:delete t[y],n}:function(t){return a.call(t)};function g(t){return"[object Arguments]"===v(t)}b=function(){return g(arguments)}();var d=b,j="function"==typeof Object.defineProperty?Object.defineProperty:null;var h,m=Object.defineProperty,w=Object.prototype,O=w.toString,_=w.__defineGetter__,S=w.__defineSetter__,P=w.__lookupGetter__,E=w.__lookupSetter__;h=function(){try{return j({},"x",{}),!0}catch(t){return!1}}()?m:function(t,e,r){var n,o,u,i;if("object"!=typeof t||null===t||"[object Array]"===O.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===O.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((o="value"in r)&&(P.call(t,e)||E.call(t,e)?(n=t.__proto__,t.__proto__=w,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),u="get"in r,i="set"in r,o&&(u||i))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return u&&_&&_.call(t,e,r.get),i&&S&&S.call(t,e,r.set),t};var I=h;function T(t,e,r){I(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function A(t){return"string"==typeof t}var N=String.prototype.valueOf;var k=l();function x(t){return"object"==typeof t&&(t instanceof String||(k?function(t){try{return N.call(t),!0}catch(t){return!1}}(t):"[object String]"===v(t)))}function B(t){return A(t)||x(t)}function V(t){return"number"==typeof t}T(B,"isPrimitive",A),T(B,"isObject",x);var F=Number,L=F.prototype.toString;var G=l();function Y(t){return"object"==typeof t&&(t instanceof F||(G?function(t){try{return L.call(t),!0}catch(t){return!1}}(t):"[object Number]"===v(t)))}function C(t){return V(t)||Y(t)}function M(t){return t!=t}function X(t){return V(t)&&M(t)}function H(t){return Y(t)&&M(t.valueOf())}function W(t){return X(t)||H(t)}T(C,"isPrimitive",V),T(C,"isObject",Y),T(W,"isPrimitive",X),T(W,"isObject",H);var D=Number.POSITIVE_INFINITY,R=F.NEGATIVE_INFINITY,U=Math.floor;function q(t){return U(t)===t}function z(t){return t<D&&t>R&&q(t)}function J(t){return V(t)&&z(t)}function K(t){return Y(t)&&z(t.valueOf())}function Q(t){return J(t)||K(t)}T(Q,"isPrimitive",J),T(Q,"isObject",K);var Z=Object.prototype.propertyIsEnumerable;var $,tt=!Z.call("beep","0");function et(t,e){var r;return null!=t&&(!(r=Z.call(t,e))&&tt&&B(t)?!X(e=+e)&&J(e)&&e>=0&&e<t.length:r)}$=Array.isArray?Array.isArray:function(t){return"[object Array]"===v(t)};var rt,nt=$;rt=d?g:function(t){return null!==t&&"object"==typeof t&&!nt(t)&&"number"==typeof t.length&&q(t.length)&&t.length>=0&&t.length<=4294967295&&s(t,"callee")&&!et(t,"callee")};var ot=rt,ut=Array.prototype.slice;function it(t){return null!==t&&"object"==typeof t}var ct=function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!nt(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(it);T(it,"isObjectLikeArray",ct);var ft=et((function(){}),"prototype"),lt=!et({toString:null},"toString");function at(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&q(t.length)&&t.length>=0&&t.length<=9007199254740991}function pt(t,e,r){var n,o;if(!at(t)&&!A(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(n=t.length))return-1;if(3===arguments.length){if(!J(r))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+r+"`.");if(r>=0){if(r>=n)return-1;o=r}else(o=n+r)<0&&(o=0)}else o=0;if(W(e)){for(;o<n;o++)if(W(t[o]))return o}else for(;o<n;o++)if(t[o]===e)return o;return-1}var st=/./;function yt(t){return"boolean"==typeof t}var bt=Boolean.prototype.toString;var vt=l();function gt(t){return"object"==typeof t&&(t instanceof Boolean||(vt?function(t){try{return bt.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===v(t)))}function dt(t){return yt(t)||gt(t)}function jt(){return new Function("return this;")()}T(dt,"isPrimitive",yt),T(dt,"isObject",gt);var ht="object"==typeof self?self:null,mt="object"==typeof window?window:null,wt="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Ot="object"==typeof wt?wt:null;var _t=function(t){if(arguments.length){if(!yt(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return jt()}if(ht)return ht;if(mt)return mt;if(Ot)return Ot;throw new Error("unexpected error. Unable to resolve global object.")}(),St=_t.document&&_t.document.childNodes,Pt=Int8Array;function Et(){return/^\s*function\s*([^(]*)/i}var It=/^\s*function\s*([^(]*)/i;function Tt(t){var e,r,n,o;if(("Object"===(r=v(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=It.exec(n.toString()))return e[1]}return it(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}T(Et,"REGEXP",It);var At="function"==typeof st||"object"==typeof Pt||"function"==typeof St?function(t){return Tt(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?Tt(t).toLowerCase():e};function Nt(t){return t.constructor&&t.constructor.prototype===t}var kt=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],xt="undefined"==typeof window?void 0:window;var Bt=function(){var t;if("undefined"===At(xt))return!1;for(t in xt)try{-1===pt(kt,t)&&s(xt,t)&&null!==xt[t]&&"object"===At(xt[t])&&Nt(xt[t])}catch(t){return!0}return!1}(),Vt="undefined"!=typeof window;var Ft,Lt=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];Ft=c?function(){return 2!==(i(arguments)||"").length}(1,2)?function(t){return ot(t)?i(ut.call(t)):i(t)}:i:function(t){var e,r,n,o,u,i,c;if(o=[],ot(t)){for(c=0;c<t.length;c++)o.push(c.toString());return o}if("string"==typeof t){if(t.length>0&&!s(t,"0"))for(c=0;c<t.length;c++)o.push(c.toString())}else{if(!1==(n="function"==typeof t)&&!it(t))return o;r=ft&&n}for(u in t)r&&"prototype"===u||!s(t,u)||o.push(String(u));if(lt)for(e=function(t){if(!1===Vt&&!Bt)return Nt(t);try{return Nt(t)}catch(t){return!1}}(t),c=0;c<Lt.length;c++)i=Lt[c],e&&"constructor"===i||!s(t,i)||o.push(String(i));return o};var Gt,Yt=Ft;Gt=o?function(t){return u(Object(t))}:function(t){return Yt(Object(t))};var Ct=Gt;var Mt,Xt,Ht=Object.getPrototypeOf;Xt=Object.getPrototypeOf,Mt="function"===At(Xt)?Ht:function(t){var e=function(t){return t.__proto__}(t);return e||null===e?e:"[object Function]"===v(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var Wt=Mt;function Dt(t){return null==t?null:(t=Object(t),Wt(t))}return function(t){var e,r,o,u,i,c;if(null==t)return[];o=Object(t),e={},r=[];do{for(u=Ct(o),c=0;c<u.length;c++)!1===s(e,i=u[c])&&et(o,i)&&r.push(i),e[i]=!0;for(u=n(o),c=0;c<u.length;c++)!1===s(e,i=u[c])&&et(o,i)&&r.push(i),e[i]=!0;o=Dt(o)}while(o);return r}}));
//# sourceMappingURL=index.js.map
