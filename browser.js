// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e,r=void 0!==Object.getOwnPropertySymbols,t=Object,n=t.getOwnPropertySymbols;e=r?function(e){return n(t(e))}:function(){return[]};var i=e,o=void 0!==Object.getOwnPropertyNames,a=t.getOwnPropertyNames;function u(e){return Object.keys(Object(e))}var c=void 0!==Object.keys,f="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function l(){return f&&"symbol"==typeof Symbol.toStringTag}var s=Object.prototype.toString,p=Object.prototype.hasOwnProperty;function g(e,r){return null!=e&&p.call(e,r)}var y,d="function"==typeof Symbol?Symbol:void 0,h="function"==typeof d?d.toStringTag:"",b=l()?function(e){var r,t,n;if(null==e)return s.call(e);t=e[h],r=g(e,h);try{e[h]=void 0}catch(r){return s.call(e)}return n=s.call(e),r?e[h]=t:delete e[h],n}:function(e){return s.call(e)};function v(e){return"[object Arguments]"===b(e)}y=function(){return v(arguments)}();var w=y,m="function"==typeof Object.defineProperty?Object.defineProperty:null,j=Object.defineProperty;function O(e){return"number"==typeof e}function S(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function _(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+S(i):S(i)+e,n&&(e="-"+e)),e}var E=String.prototype.toLowerCase,k=String.prototype.toUpperCase;function T(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!O(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=_(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=_(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===k.call(e.specifier)?k.call(t):E.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var x=Math.abs,I=String.prototype.toLowerCase,P=String.prototype.toUpperCase,A=String.prototype.replace,V=/e\+(\d)$/,F=/e-(\d)$/,N=/^(\d+)$/,$=/^(\d+)e/,C=/\.0$/,L=/\.0*e/,B=/(\..*[^0])0*e/;function R(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!O(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":x(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=A.call(t,B,"$1e"),t=A.call(t,L,"e"),t=A.call(t,C,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=A.call(t,V,"e+0$1"),t=A.call(t,F,"e-0$1"),e.alternate&&(t=A.call(t,N,"$1."),t=A.call(t,$,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===P.call(e.specifier)?P.call(t):I.call(t)}function G(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var W=String.fromCharCode,M=isNaN,X=Array.isArray;function Z(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Y(e){var r,t,n,i,o,a,u,c,f,l,s,p,g;if(!X(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(a="",u=1,c=0;c<e.length;c++)if("string"==typeof(n=e[c]))a+=n;else{if(r=void 0!==n.precision,!(n=Z(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,M(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,M(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=T(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!M(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=M(o)?String(n.arg):W(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=R(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=_(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(l=n.arg,s=n.width,p=n.padRight,g=void 0,(g=s-l.length)<0?l:l=p?l+G(g):G(g)+l)),a+=n.arg||"",u+=1}return a}var U=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function H(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function z(e){var r,t,n,i;for(t=[],i=0,n=U.exec(e);n;)(r=e.slice(i,U.lastIndex-n[0].length)).length&&t.push(r),t.push(H(n)),i=U.lastIndex,n=U.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function D(e){var r,t;if("string"!=typeof e)throw new TypeError(D("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[z(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return Y.apply(null,r)}var q,J=Object.prototype,K=J.toString,Q=J.__defineGetter__,ee=J.__defineSetter__,re=J.__lookupGetter__,te=J.__lookupSetter__;q=function(){try{return m({},"x",{}),!0}catch(e){return!1}}()?j:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===K.call(e))throw new TypeError(D("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===K.call(t))throw new TypeError(D("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(re.call(e,r)||te.call(e,r)?(n=e.__proto__,e.__proto__=J,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&Q&&Q.call(e,r,t.get),a&&ee&&ee.call(e,r,t.set),e};var ne=q;function ie(e,r,t){ne(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function oe(e){return"string"==typeof e}var ae=String.prototype.valueOf,ue=l();function ce(e){return"object"==typeof e&&(e instanceof String||(ue?function(e){try{return ae.call(e),!0}catch(e){return!1}}(e):"[object String]"===b(e)))}function fe(e){return oe(e)||ce(e)}function le(e){return"number"==typeof e}ie(fe,"isPrimitive",oe),ie(fe,"isObject",ce);var se=Number,pe=se.prototype.toString,ge=l();function ye(e){return"object"==typeof e&&(e instanceof se||(ge?function(e){try{return pe.call(e),!0}catch(e){return!1}}(e):"[object Number]"===b(e)))}function de(e){return le(e)||ye(e)}function he(e){return e!=e}function be(e){return le(e)&&he(e)}function ve(e){return ye(e)&&he(e.valueOf())}function we(e){return be(e)||ve(e)}ie(de,"isPrimitive",le),ie(de,"isObject",ye),ie(we,"isPrimitive",be),ie(we,"isObject",ve);var me=Number.POSITIVE_INFINITY,je=se.NEGATIVE_INFINITY,Oe=Math.floor;function Se(e){return Oe(e)===e}function _e(e){return e<me&&e>je&&Se(e)}function Ee(e){return le(e)&&_e(e)}function ke(e){return ye(e)&&_e(e.valueOf())}function Te(e){return Ee(e)||ke(e)}ie(Te,"isPrimitive",Ee),ie(Te,"isObject",ke);var xe,Ie=Object.prototype.propertyIsEnumerable,Pe=!Ie.call("beep","0");function Ae(e,r){var t;return null!=e&&(!(t=Ie.call(e,r))&&Pe&&fe(e)?!be(r=+r)&&Ee(r)&&r>=0&&r<e.length:t)}xe=Array.isArray?Array.isArray:function(e){return"[object Array]"===b(e)};var Ve,Fe=xe;Ve=w?v:function(e){return null!==e&&"object"==typeof e&&!Fe(e)&&"number"==typeof e.length&&Se(e.length)&&e.length>=0&&e.length<=4294967295&&g(e,"callee")&&!Ae(e,"callee")};var Ne=Ve,$e=Array.prototype.slice;function Ce(e){return null!==e&&"object"==typeof e}var Le=function(e){if("function"!=typeof e)throw new TypeError(D("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!Fe(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(Ce);ie(Ce,"isObjectLikeArray",Le);var Be=Ae((function(){}),"prototype"),Re=!Ae({toString:null},"toString"),Ge=9007199254740991;function We(e,r,t){var n,i,o;if(!("object"==typeof(o=e)&&null!==o&&"number"==typeof o.length&&Se(o.length)&&o.length>=0&&o.length<=Ge||oe(e)))throw new TypeError(D("invalid argument. First argument must be an array-like object. Value: `%s`.",e));if(0===(n=e.length))return-1;if(3===arguments.length){if(!Ee(t))throw new TypeError(D("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;i=t}else(i=n+t)<0&&(i=0)}else i=0;if(we(r)){for(;i<n;i++)if(we(e[i]))return i}else for(;i<n;i++)if(e[i]===r)return i;return-1}var Me=/./;function Xe(e){return"boolean"==typeof e}var Ze=Boolean,Ye=Boolean.prototype.toString,Ue=l();function He(e){return"object"==typeof e&&(e instanceof Ze||(Ue?function(e){try{return Ye.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===b(e)))}function ze(e){return Xe(e)||He(e)}ie(ze,"isPrimitive",Xe),ie(ze,"isObject",He);var De="object"==typeof self?self:null,qe="object"==typeof window?window:null,Je="object"==typeof globalThis?globalThis:null,Ke=function(e){if(arguments.length){if(!Xe(e))throw new TypeError(D("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return new Function("return this;")()}if(Je)return Je;if(De)return De;if(qe)return qe;throw new Error("unexpected error. Unable to resolve global object.")}(),Qe=Ke.document&&Ke.document.childNodes,er=Int8Array;function rr(){return/^\s*function\s*([^(]*)/i}var tr=/^\s*function\s*([^(]*)/i;function nr(e){return null!==e&&"object"==typeof e}ie(rr,"REGEXP",tr);var ir=function(e){if("function"!=typeof e)throw new TypeError(D("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!Fe(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(nr);function or(e){var r,t,n,i;if(("Object"===(t=b(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=tr.exec(n.toString()))return r[1]}return nr(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}ie(nr,"isObjectLikeArray",ir);var ar="function"==typeof Me||"object"==typeof er||"function"==typeof Qe?function(e){return or(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?or(e).toLowerCase():r};function ur(e){return e.constructor&&e.constructor.prototype===e}var cr,fr=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],lr="undefined"==typeof window?void 0:window,sr=function(){var e;if("undefined"===ar(lr))return!1;for(e in lr)try{-1===We(fr,e)&&g(lr,e)&&null!==lr[e]&&"object"===ar(lr[e])&&ur(lr[e])}catch(e){return!0}return!1}(),pr="undefined"!=typeof window,gr=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];cr=c?function(){return 2!==(u(arguments)||"").length}(1,2)?function(e){return Ne(e)?u($e.call(e)):u(e)}:u:function(e){var r,t,n,i,o,a,u;if(i=[],Ne(e)){for(u=0;u<e.length;u++)i.push(u.toString());return i}if("string"==typeof e){if(e.length>0&&!g(e,"0"))for(u=0;u<e.length;u++)i.push(u.toString())}else{if(0==(n="function"==typeof e)&&!Ce(e))return i;t=Be&&n}for(o in e)t&&"prototype"===o||!g(e,o)||i.push(String(o));if(Re)for(r=function(e){if(!1===pr&&!sr)return ur(e);try{return ur(e)}catch(e){return!1}}(e),u=0;u<gr.length;u++)a=gr[u],r&&"constructor"===a||!g(e,a)||i.push(String(a));return i};var yr,dr=cr;yr=o?function(e){return a(t(e))}:function(e){return dr(t(e))};var hr,br,vr=yr,wr=Object.getPrototypeOf;br=Object.getPrototypeOf,hr="function"===ar(br)?wr:function(e){var r=function(e){return e.__proto__}(e);return r||null===r?r:"[object Function]"===b(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var mr=hr;function jr(e){return null==e?null:(e=t(e),mr(e))}return function(e){var r,n,o,a,u,c;if(null==e)return[];o=t(e),r={},n=[];do{for(a=vr(o),c=0;c<a.length;c++)!1===g(r,u=a[c])&&Ae(o,u)&&n.push(u),r[u]=!0;for(a=i(o),c=0;c<a.length;c++)!1===g(r,u=a[c])&&Ae(o,u)&&n.push(u),r[u]=!0;o=jr(o)}while(o);return n}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).enumerablePropertiesIn=r();
//# sourceMappingURL=browser.js.map
