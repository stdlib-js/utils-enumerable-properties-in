// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r,e=void 0!==Object.getOwnPropertySymbols,t=Object,n=t.getOwnPropertySymbols;r=e?function(r){return n(t(r))}:function(){return[]};var o=r,i=void 0!==Object.getOwnPropertyNames,u=t.getOwnPropertyNames;function a(r){return Object.keys(Object(r))}var c=void 0!==Object.keys,f="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function l(){return f&&"symbol"==typeof Symbol.toStringTag}var s=Object.prototype.toString,p=Object.prototype.hasOwnProperty;function g(r,e){return null!=r&&p.call(r,e)}var y,b="function"==typeof Symbol?Symbol:void 0,d="function"==typeof b?b.toStringTag:"",h=l()?function(r){var e,t,n;if(null==r)return s.call(r);t=r[d],e=g(r,d);try{r[d]=void 0}catch(e){return s.call(r)}return n=s.call(r),e?r[d]=t:delete r[d],n}:function(r){return s.call(r)};function v(r){return"[object Arguments]"===h(r)}y=function(){return v(arguments)}();var w=y,m="function"==typeof Object.defineProperty?Object.defineProperty:null,j=Object.defineProperty;function O(r){return"number"==typeof r}function S(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function E(r,e,t){var n=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+S(o):S(o)+r,n&&(r="-"+r)),r}var _=String.prototype.toLowerCase,T=String.prototype.toUpperCase;function k(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!O(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=E(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=E(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===T.call(r.specifier)?T.call(t):_.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function x(r){return"string"==typeof r}var I=Math.abs,P=String.prototype.toLowerCase,A=String.prototype.toUpperCase,V=String.prototype.replace,F=/e\+(\d)$/,B=/e-(\d)$/,N=/^(\d+)$/,C=/^(\d+)e/,L=/\.0$/,$=/\.0*e/,R=/(\..*[^0])0*e/;function G(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!O(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":I(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=V.call(t,R,"$1e"),t=V.call(t,$,"e"),t=V.call(t,L,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=V.call(t,F,"e+0$1"),t=V.call(t,B,"e-0$1"),r.alternate&&(t=V.call(t,N,"$1."),t=V.call(t,C,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===A.call(r.specifier)?A.call(t):P.call(t)}function M(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function W(r,e,t){var n=e-r.length;return n<0?r:r=t?r+M(n):M(n)+r}var X=String.fromCharCode,Z=isNaN,U=Array.isArray;function Y(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function H(r){var e,t,n,o,i,u,a,c,f;if(!U(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",a=1,c=0;c<r.length;c++)if(x(n=r[c]))u+=n;else{if(e=void 0!==n.precision,!(n=Y(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(a=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(o=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[a],10),a+=1,Z(n.width))throw new TypeError("the argument for * width at position "+a+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[a],10),a+=1,Z(n.precision))throw new TypeError("the argument for * precision at position "+a+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[a],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=k(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!Z(n.arg)){if((i=parseInt(n.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Z(i)?String(n.arg):X(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=G(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=E(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=W(n.arg,n.width,n.padRight)),u+=n.arg||"",a+=1}return u}var z=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function D(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function q(r){var e,t,n,o;for(t=[],o=0,n=z.exec(r);n;)(e=r.slice(o,z.lastIndex-n[0].length)).length&&t.push(e),t.push(D(n)),o=z.lastIndex,n=z.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function J(r){return"string"==typeof r}function K(r){var e,t,n;if(!J(r))throw new TypeError(K("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=q(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return H.apply(null,t)}var Q,rr=Object.prototype,er=rr.toString,tr=rr.__defineGetter__,nr=rr.__defineSetter__,or=rr.__lookupGetter__,ir=rr.__lookupSetter__;Q=function(){try{return m({},"x",{}),!0}catch(r){return!1}}()?j:function(r,e,t){var n,o,i,u;if("object"!=typeof r||null===r||"[object Array]"===er.call(r))throw new TypeError(K("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===er.call(t))throw new TypeError(K("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(or.call(r,e)||ir.call(r,e)?(n=r.__proto__,r.__proto__=rr,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,u="set"in t,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&tr&&tr.call(r,e,t.get),u&&nr&&nr.call(r,e,t.set),r};var ur=Q;function ar(r,e,t){ur(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function cr(r){return"string"==typeof r}var fr=String.prototype.valueOf,lr=l();function sr(r){return"object"==typeof r&&(r instanceof String||(lr?function(r){try{return fr.call(r),!0}catch(r){return!1}}(r):"[object String]"===h(r)))}function pr(r){return cr(r)||sr(r)}function gr(r){return"number"==typeof r}ar(pr,"isPrimitive",cr),ar(pr,"isObject",sr);var yr=Number,br=yr.prototype.toString,dr=l();function hr(r){return"object"==typeof r&&(r instanceof yr||(dr?function(r){try{return br.call(r),!0}catch(r){return!1}}(r):"[object Number]"===h(r)))}function vr(r){return gr(r)||hr(r)}function wr(r){return r!=r}function mr(r){return gr(r)&&wr(r)}function jr(r){return hr(r)&&wr(r.valueOf())}function Or(r){return mr(r)||jr(r)}ar(vr,"isPrimitive",gr),ar(vr,"isObject",hr),ar(Or,"isPrimitive",mr),ar(Or,"isObject",jr);var Sr=Number.POSITIVE_INFINITY,Er=yr.NEGATIVE_INFINITY,_r=Math.floor;function Tr(r){return _r(r)===r}function kr(r){return r<Sr&&r>Er&&Tr(r)}function xr(r){return gr(r)&&kr(r)}function Ir(r){return hr(r)&&kr(r.valueOf())}function Pr(r){return xr(r)||Ir(r)}ar(Pr,"isPrimitive",xr),ar(Pr,"isObject",Ir);var Ar,Vr=Object.prototype.propertyIsEnumerable,Fr=!Vr.call("beep","0");function Br(r,e){var t;return null!=r&&(!(t=Vr.call(r,e))&&Fr&&pr(r)?!mr(e=+e)&&xr(e)&&e>=0&&e<r.length:t)}Ar=Array.isArray?Array.isArray:function(r){return"[object Array]"===h(r)};var Nr,Cr=Ar;Nr=w?v:function(r){return null!==r&&"object"==typeof r&&!Cr(r)&&"number"==typeof r.length&&Tr(r.length)&&r.length>=0&&r.length<=4294967295&&g(r,"callee")&&!Br(r,"callee")};var Lr=Nr,$r=Array.prototype.slice;function Rr(r){return null!==r&&"object"==typeof r}var Gr=function(r){if("function"!=typeof r)throw new TypeError(K("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Cr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Rr);ar(Rr,"isObjectLikeArray",Gr);var Mr=Br((function(){}),"prototype"),Wr=!Br({toString:null},"toString");function Xr(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&Tr(r.length)&&r.length>=0&&r.length<=9007199254740991}function Zr(r,e,t){var n,o;if(!Xr(r)&&!cr(r))throw new TypeError(K("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(n=r.length))return-1;if(3===arguments.length){if(!xr(t))throw new TypeError(K("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;o=t}else(o=n+t)<0&&(o=0)}else o=0;if(Or(e)){for(;o<n;o++)if(Or(r[o]))return o}else for(;o<n;o++)if(r[o]===e)return o;return-1}var Ur=/./;function Yr(r){return"boolean"==typeof r}var Hr=Boolean,zr=Boolean.prototype.toString,Dr=l();function qr(r){return"object"==typeof r&&(r instanceof Hr||(Dr?function(r){try{return zr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===h(r)))}function Jr(r){return Yr(r)||qr(r)}function Kr(){return new Function("return this;")()}ar(Jr,"isPrimitive",Yr),ar(Jr,"isObject",qr);var Qr="object"==typeof self?self:null,re="object"==typeof window?window:null,ee="object"==typeof globalThis?globalThis:null,te=function(r){if(arguments.length){if(!Yr(r))throw new TypeError(K("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Kr()}if(ee)return ee;if(Qr)return Qr;if(re)return re;throw new Error("unexpected error. Unable to resolve global object.")}(),ne=te.document&&te.document.childNodes,oe=Int8Array;function ie(){return/^\s*function\s*([^(]*)/i}var ue=/^\s*function\s*([^(]*)/i;function ae(r){var e,t,n,o;if(("Object"===(t=h(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=ue.exec(n.toString()))return e[1]}return Rr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}ar(ie,"REGEXP",ue);var ce="function"==typeof Ur||"object"==typeof oe||"function"==typeof ne?function(r){return ae(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"==(e=typeof r)?ae(r).toLowerCase():e};function fe(r){return r.constructor&&r.constructor.prototype===r}var le,se=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],pe="undefined"==typeof window?void 0:window,ge=function(){var r;if("undefined"===ce(pe))return!1;for(r in pe)try{-1===Zr(se,r)&&g(pe,r)&&null!==pe[r]&&"object"===ce(pe[r])&&fe(pe[r])}catch(r){return!0}return!1}(),ye="undefined"!=typeof window,be=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];le=c?function(){return 2!==(a(arguments)||"").length}(1,2)?function(r){return Lr(r)?a($r.call(r)):a(r)}:a:function(r){var e,t,n,o,i,u,a;if(o=[],Lr(r)){for(a=0;a<r.length;a++)o.push(a.toString());return o}if("string"==typeof r){if(r.length>0&&!g(r,"0"))for(a=0;a<r.length;a++)o.push(a.toString())}else{if(0==(n="function"==typeof r)&&!Rr(r))return o;t=Mr&&n}for(i in r)t&&"prototype"===i||!g(r,i)||o.push(String(i));if(Wr)for(e=function(r){if(!1===ye&&!ge)return fe(r);try{return fe(r)}catch(r){return!1}}(r),a=0;a<be.length;a++)u=be[a],e&&"constructor"===u||!g(r,u)||o.push(String(u));return o};var de,he=le;de=i?function(r){return u(t(r))}:function(r){return he(t(r))};var ve=de,we=/./;function me(r){return"boolean"==typeof r}var je=Boolean.prototype.toString,Oe=l();function Se(r){return"object"==typeof r&&(r instanceof Hr||(Oe?function(r){try{return je.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===h(r)))}function Ee(r){return me(r)||Se(r)}function _e(){return new Function("return this;")()}ar(Ee,"isPrimitive",me),ar(Ee,"isObject",Se);var Te="object"==typeof self?self:null,ke="object"==typeof window?window:null,xe="object"==typeof globalThis?globalThis:null,Ie=function(r){if(arguments.length){if(!me(r))throw new TypeError(K("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return _e()}if(xe)return xe;if(Te)return Te;if(ke)return ke;throw new Error("unexpected error. Unable to resolve global object.")}(),Pe=Ie.document&&Ie.document.childNodes,Ae=Int8Array;function Ve(){return/^\s*function\s*([^(]*)/i}var Fe=/^\s*function\s*([^(]*)/i;function Be(r){return null!==r&&"object"==typeof r}ar(Ve,"REGEXP",Fe);var Ne=function(r){if("function"!=typeof r)throw new TypeError(K("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Cr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Be);function Ce(r){var e,t,n,o;if(("Object"===(t=h(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Fe.exec(n.toString()))return e[1]}return Be(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}ar(Be,"isObjectLikeArray",Ne);var Le,$e,Re="function"==typeof we||"object"==typeof Ae||"function"==typeof Pe?function(r){return Ce(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"==(e=typeof r)?Ce(r).toLowerCase():e},Ge=Object.getPrototypeOf;$e=Object.getPrototypeOf,Le="function"===Re($e)?Ge:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===h(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Me=Le;function We(r){return null==r?null:(r=t(r),Me(r))}return function(r){var e,n,i,u,a,c;if(null==r)return[];i=t(r),e={},n=[];do{for(u=ve(i),c=0;c<u.length;c++)!1===g(e,a=u[c])&&Br(i,a)&&n.push(a),e[a]=!0;for(u=o(i),c=0;c<u.length;c++)!1===g(e,a=u[c])&&Br(i,a)&&n.push(a),e[a]=!0;i=We(i)}while(i);return n}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).enumerablePropertiesIn=e();
//# sourceMappingURL=browser.js.map
