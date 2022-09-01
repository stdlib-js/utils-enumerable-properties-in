// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t,r=void 0!==Object.getOwnPropertySymbols,e=Object.getOwnPropertySymbols;t=r?function(t){return e(Object(t))}:function(){return[]};var n=t,o=void 0!==Object.getOwnPropertyNames,u=Object.getOwnPropertyNames;function i(t){return Object.keys(Object(t))}var c=void 0!==Object.keys;var f="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function l(){return f&&"symbol"==typeof Symbol.toStringTag}var a=Object.prototype.toString;var p=Object.prototype.hasOwnProperty;function y(t,r){return null!=t&&p.call(t,r)}var s="function"==typeof Symbol?Symbol.toStringTag:"";var b=l()?function(t){var r,e,n;if(null==t)return a.call(t);e=t[s],r=y(t,s);try{t[s]=void 0}catch(r){return a.call(t)}return n=a.call(t),r?t[s]=e:delete t[s],n}:function(t){return a.call(t)};function v(t){return"[object Arguments]"===b(t)}var g=function(){return v(arguments)}(),d="function"==typeof Object.defineProperty?Object.defineProperty:null;var j,h=Object.defineProperty,m=Object.prototype,w=m.toString,O=m.__defineGetter__,_=m.__defineSetter__,S=m.__lookupGetter__,P=m.__lookupSetter__;j=function(){try{return d({},"x",{}),!0}catch(t){return!1}}()?h:function(t,r,e){var n,o,u,i;if("object"!=typeof t||null===t||"[object Array]"===w.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===w.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((o="value"in e)&&(S.call(t,r)||P.call(t,r)?(n=t.__proto__,t.__proto__=m,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),u="get"in e,i="set"in e,o&&(u||i))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return u&&O&&O.call(t,r,e.get),i&&_&&_.call(t,r,e.set),t};var E=j;function I(t,r,e){E(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function T(t){return"string"==typeof t}var A=String.prototype.valueOf;var N=l();function k(t){return"object"==typeof t&&(t instanceof String||(N?function(t){try{return A.call(t),!0}catch(t){return!1}}(t):"[object String]"===b(t)))}function B(t){return T(t)||k(t)}function V(t){return"number"==typeof t}I(B,"isPrimitive",T),I(B,"isObject",k);var x=Number,F=x.prototype.toString;var L=l();function G(t){return"object"==typeof t&&(t instanceof x||(L?function(t){try{return F.call(t),!0}catch(t){return!1}}(t):"[object Number]"===b(t)))}function Y(t){return V(t)||G(t)}function C(t){return t!=t}function M(t){return V(t)&&C(t)}function X(t){return G(t)&&C(t.valueOf())}function H(t){return M(t)||X(t)}I(Y,"isPrimitive",V),I(Y,"isObject",G),I(H,"isPrimitive",M),I(H,"isObject",X);var W=Number.POSITIVE_INFINITY,D=x.NEGATIVE_INFINITY,R=Math.floor;function U(t){return R(t)===t}function q(t){return t<W&&t>D&&U(t)}function z(t){return V(t)&&q(t)}function J(t){return G(t)&&q(t.valueOf())}function K(t){return z(t)||J(t)}I(K,"isPrimitive",z),I(K,"isObject",J);var Q=Object.prototype.propertyIsEnumerable;var Z,$=!Q.call("beep","0");function tt(t,r){var e;return null!=t&&(!(e=Q.call(t,r))&&$&&B(t)?!M(r=+r)&&z(r)&&r>=0&&r<t.length:e)}Z=Array.isArray?Array.isArray:function(t){return"[object Array]"===b(t)};var rt,et=Z;rt=g?v:function(t){return null!==t&&"object"==typeof t&&!et(t)&&"number"==typeof t.length&&U(t.length)&&t.length>=0&&t.length<=4294967295&&y(t,"callee")&&!tt(t,"callee")};var nt=rt,ot=Array.prototype.slice;function ut(t){return null!==t&&"object"==typeof t}var it=function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!et(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(ut);I(ut,"isObjectLikeArray",it);var ct=tt((function(){}),"prototype"),ft=!tt({toString:null},"toString");function lt(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&U(t.length)&&t.length>=0&&t.length<=9007199254740991}function at(t,r,e){var n,o;if(!lt(t)&&!T(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(n=t.length))return-1;if(3===arguments.length){if(!z(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=n)return-1;o=e}else(o=n+e)<0&&(o=0)}else o=0;if(H(r)){for(;o<n;o++)if(H(t[o]))return o}else for(;o<n;o++)if(t[o]===r)return o;return-1}var pt=/./;function yt(t){return"boolean"==typeof t}var st=Boolean.prototype.toString;var bt=l();function vt(t){return"object"==typeof t&&(t instanceof Boolean||(bt?function(t){try{return st.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===b(t)))}function gt(t){return yt(t)||vt(t)}function dt(){return new Function("return this;")()}I(gt,"isPrimitive",yt),I(gt,"isObject",vt);var jt="object"==typeof self?self:null,ht="object"==typeof window?window:null,mt="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},wt="object"==typeof mt?mt:null;var Ot=function(t){if(arguments.length){if(!yt(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return dt()}if(jt)return jt;if(ht)return ht;if(wt)return wt;throw new Error("unexpected error. Unable to resolve global object.")}(),_t=Ot.document&&Ot.document.childNodes,St=Int8Array;function Pt(){return/^\s*function\s*([^(]*)/i}var Et=/^\s*function\s*([^(]*)/i;function It(t){var r,e,n,o;if(("Object"===(e=b(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=Et.exec(n.toString()))return r[1]}return ut(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}I(Pt,"REGEXP",Et);var Tt="function"==typeof pt||"object"==typeof St||"function"==typeof _t?function(t){return It(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?It(t).toLowerCase():r};function At(t){return t.constructor&&t.constructor.prototype===t}var Nt=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],kt="undefined"==typeof window?void 0:window;var Bt=function(){var t;if("undefined"===Tt(kt))return!1;for(t in kt)try{-1===at(Nt,t)&&y(kt,t)&&null!==kt[t]&&"object"===Tt(kt[t])&&At(kt[t])}catch(t){return!0}return!1}(),Vt="undefined"!=typeof window;var xt,Ft=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];xt=c?function(){return 2!==(i(arguments)||"").length}(1,2)?function(t){return nt(t)?i(ot.call(t)):i(t)}:i:function(t){var r,e,n,o,u,i,c;if(o=[],nt(t)){for(c=0;c<t.length;c++)o.push(c.toString());return o}if("string"==typeof t){if(t.length>0&&!y(t,"0"))for(c=0;c<t.length;c++)o.push(c.toString())}else{if(!1==(n="function"==typeof t)&&!ut(t))return o;e=ct&&n}for(u in t)e&&"prototype"===u||!y(t,u)||o.push(String(u));if(ft)for(r=function(t){if(!1===Vt&&!Bt)return At(t);try{return At(t)}catch(t){return!1}}(t),c=0;c<Ft.length;c++)i=Ft[c],r&&"constructor"===i||!y(t,i)||o.push(String(i));return o};var Lt,Gt=xt;Lt=o?function(t){return u(Object(t))}:function(t){return Gt(Object(t))};var Yt=Lt;var Ct,Mt,Xt=Object.getPrototypeOf;Mt=Object.getPrototypeOf,Ct="function"===Tt(Mt)?Xt:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===b(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var Ht=Ct;function Wt(t){return null==t?null:(t=Object(t),Ht(t))}function Dt(t){var r,e,o,u,i,c;if(null==t)return[];o=Object(t),r={},e=[];do{for(u=Yt(o),c=0;c<u.length;c++)!1===y(r,i=u[c])&&tt(o,i)&&e.push(i),r[i]=!0;for(u=n(o),c=0;c<u.length;c++)!1===y(r,i=u[c])&&tt(o,i)&&e.push(i),r[i]=!0;o=Wt(o)}while(o);return e}export{Dt as default};
//# sourceMappingURL=mod.js.map
