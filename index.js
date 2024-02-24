// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).enumerablePropertiesIn=e()}(this,(function(){"use strict";var r,e=void 0!==Object.getOwnPropertySymbols,t=Object,n=t.getOwnPropertySymbols;r=e?function(r){return n(t(r))}:function(){return[]};var o=r,i=void 0!==Object.getOwnPropertyNames,a=t.getOwnPropertyNames;function u(r){return Object.keys(Object(r))}var c=void 0!==Object.keys;var f="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function l(){return f&&"symbol"==typeof Symbol.toStringTag}var s=Object.prototype.toString;var p=Object.prototype.hasOwnProperty;function g(r,e){return null!=r&&p.call(r,e)}var y="function"==typeof Symbol?Symbol:void 0,d="function"==typeof y?y.toStringTag:"";var b,h=l()?function(r){var e,t,n;if(null==r)return s.call(r);t=r[d],e=g(r,d);try{r[d]=void 0}catch(e){return s.call(r)}return n=s.call(r),e?r[d]=t:delete r[d],n}:function(r){return s.call(r)};function v(r){return"[object Arguments]"===h(r)}b=function(){return v(arguments)}();var w=b,m="function"==typeof Object.defineProperty?Object.defineProperty:null;var j=Object.defineProperty;function O(r){return"number"==typeof r}function S(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function _(r,e,t){var n=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+S(o):S(o)+r,n&&(r="-"+r)),r}var E=String.prototype.toLowerCase,k=String.prototype.toUpperCase;function T(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!O(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=_(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=_(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===k.call(r.specifier)?k.call(t):E.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var x=Math.abs,I=String.prototype.toLowerCase,P=String.prototype.toUpperCase,A=String.prototype.replace,V=/e\+(\d)$/,F=/e-(\d)$/,N=/^(\d+)$/,$=/^(\d+)e/,C=/\.0$/,L=/\.0*e/,B=/(\..*[^0])0*e/;function R(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!O(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":x(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=A.call(t,B,"$1e"),t=A.call(t,L,"e"),t=A.call(t,C,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=A.call(t,V,"e+0$1"),t=A.call(t,F,"e-0$1"),r.alternate&&(t=A.call(t,N,"$1."),t=A.call(t,$,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===P.call(r.specifier)?P.call(t):I.call(t)}function G(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var W=String.fromCharCode,M=isNaN,X=Array.isArray;function Z(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Y(r){var e,t,n,o,i,a,u,c,f,l,s,p,g;if(!X(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,c=0;c<r.length;c++)if(n=r[c],"string"==typeof n)a+=n;else{if(e=void 0!==n.precision,!(n=Z(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(o=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,M(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,M(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=T(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!M(n.arg)){if((i=parseInt(n.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=M(i)?String(n.arg):W(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=R(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=_(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(l=n.arg,s=n.width,p=n.padRight,g=void 0,(g=s-l.length)<0?l:l=p?l+G(g):G(g)+l)),a+=n.arg||"",u+=1}return a}var U=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function H(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function z(r){var e,t,n,o;for(t=[],o=0,n=U.exec(r);n;)(e=r.slice(o,U.lastIndex-n[0].length)).length&&t.push(e),t.push(H(n)),o=U.lastIndex,n=U.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function D(r){var e,t;if("string"!=typeof r)throw new TypeError(D("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[z(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return Y.apply(null,e)}var q,J=Object.prototype,K=J.toString,Q=J.__defineGetter__,rr=J.__defineSetter__,er=J.__lookupGetter__,tr=J.__lookupSetter__;q=function(){try{return m({},"x",{}),!0}catch(r){return!1}}()?j:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===K.call(r))throw new TypeError(D("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===K.call(t))throw new TypeError(D("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(er.call(r,e)||tr.call(r,e)?(n=r.__proto__,r.__proto__=J,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&Q&&Q.call(r,e,t.get),a&&rr&&rr.call(r,e,t.set),r};var nr=q;function or(r,e,t){nr(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function ir(r){return"string"==typeof r}var ar=String.prototype.valueOf;var ur=l();function cr(r){return"object"==typeof r&&(r instanceof String||(ur?function(r){try{return ar.call(r),!0}catch(r){return!1}}(r):"[object String]"===h(r)))}function fr(r){return ir(r)||cr(r)}function lr(r){return"number"==typeof r}or(fr,"isPrimitive",ir),or(fr,"isObject",cr);var sr=Number,pr=sr.prototype.toString;var gr=l();function yr(r){return"object"==typeof r&&(r instanceof sr||(gr?function(r){try{return pr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===h(r)))}function dr(r){return lr(r)||yr(r)}function br(r){return r!=r}function hr(r){return lr(r)&&br(r)}function vr(r){return yr(r)&&br(r.valueOf())}function wr(r){return hr(r)||vr(r)}or(dr,"isPrimitive",lr),or(dr,"isObject",yr),or(wr,"isPrimitive",hr),or(wr,"isObject",vr);var mr=Number.POSITIVE_INFINITY,jr=sr.NEGATIVE_INFINITY,Or=Math.floor;function Sr(r){return Or(r)===r}function _r(r){return r<mr&&r>jr&&Sr(r)}function Er(r){return lr(r)&&_r(r)}function kr(r){return yr(r)&&_r(r.valueOf())}function Tr(r){return Er(r)||kr(r)}or(Tr,"isPrimitive",Er),or(Tr,"isObject",kr);var xr=Object.prototype.propertyIsEnumerable;var Ir,Pr=!xr.call("beep","0");function Ar(r,e){var t;return null!=r&&(!(t=xr.call(r,e))&&Pr&&fr(r)?!hr(e=+e)&&Er(e)&&e>=0&&e<r.length:t)}Ir=Array.isArray?Array.isArray:function(r){return"[object Array]"===h(r)};var Vr,Fr=Ir;Vr=w?v:function(r){return null!==r&&"object"==typeof r&&!Fr(r)&&"number"==typeof r.length&&Sr(r.length)&&r.length>=0&&r.length<=4294967295&&g(r,"callee")&&!Ar(r,"callee")};var Nr=Vr,$r=Array.prototype.slice;function Cr(r){return null!==r&&"object"==typeof r}var Lr=function(r){if("function"!=typeof r)throw new TypeError(D("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Fr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Cr);or(Cr,"isObjectLikeArray",Lr);var Br=Ar((function(){}),"prototype"),Rr=!Ar({toString:null},"toString"),Gr=9007199254740991;function Wr(r,e,t){var n,o,i;if(!(i=r,"object"==typeof i&&null!==i&&"number"==typeof i.length&&Sr(i.length)&&i.length>=0&&i.length<=Gr||ir(r)))throw new TypeError(D("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(n=r.length))return-1;if(3===arguments.length){if(!Er(t))throw new TypeError(D("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;o=t}else(o=n+t)<0&&(o=0)}else o=0;if(wr(e)){for(;o<n;o++)if(wr(r[o]))return o}else for(;o<n;o++)if(r[o]===e)return o;return-1}var Mr=/./;function Xr(r){return"boolean"==typeof r}var Zr=Boolean,Yr=Boolean.prototype.toString;var Ur=l();function Hr(r){return"object"==typeof r&&(r instanceof Zr||(Ur?function(r){try{return Yr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===h(r)))}function zr(r){return Xr(r)||Hr(r)}or(zr,"isPrimitive",Xr),or(zr,"isObject",Hr);var Dr="object"==typeof self?self:null,qr="object"==typeof window?window:null,Jr="object"==typeof global?global:null,Kr="object"==typeof globalThis?globalThis:null;var Qr=function(r){if(arguments.length){if(!Xr(r))throw new TypeError(D("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(Kr)return Kr;if(Dr)return Dr;if(qr)return qr;if(Jr)return Jr;throw new Error("unexpected error. Unable to resolve global object.")}(),re=Qr.document&&Qr.document.childNodes,ee=Int8Array;function te(){return/^\s*function\s*([^(]*)/i}var ne=/^\s*function\s*([^(]*)/i;function oe(r){return null!==r&&"object"==typeof r}or(te,"REGEXP",ne);var ie=function(r){if("function"!=typeof r)throw new TypeError(D("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Fr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(oe);function ae(r){var e,t,n,o;if(("Object"===(t=h(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=ne.exec(n.toString()))return e[1]}return oe(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}or(oe,"isObjectLikeArray",ie);var ue="function"==typeof Mr||"object"==typeof ee||"function"==typeof re?function(r){return ae(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?ae(r).toLowerCase():e};function ce(r){return r.constructor&&r.constructor.prototype===r}var fe=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],le="undefined"==typeof window?void 0:window;var se=function(){var r;if("undefined"===ue(le))return!1;for(r in le)try{-1===Wr(fe,r)&&g(le,r)&&null!==le[r]&&"object"===ue(le[r])&&ce(le[r])}catch(r){return!0}return!1}(),pe="undefined"!=typeof window;var ge,ye=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];ge=c?function(){return 2!==(u(arguments)||"").length}(1,2)?function(r){return Nr(r)?u($r.call(r)):u(r)}:u:function(r){var e,t,n,o,i,a,u;if(o=[],Nr(r)){for(u=0;u<r.length;u++)o.push(u.toString());return o}if("string"==typeof r){if(r.length>0&&!g(r,"0"))for(u=0;u<r.length;u++)o.push(u.toString())}else{if(!1==(n="function"==typeof r)&&!Cr(r))return o;t=Br&&n}for(i in r)t&&"prototype"===i||!g(r,i)||o.push(String(i));if(Rr)for(e=function(r){if(!1===pe&&!se)return ce(r);try{return ce(r)}catch(r){return!1}}(r),u=0;u<ye.length;u++)a=ye[u],e&&"constructor"===a||!g(r,a)||o.push(String(a));return o};var de,be=ge;de=i?function(r){return a(t(r))}:function(r){return be(t(r))};var he=de;var ve,we,me=Object.getPrototypeOf;we=Object.getPrototypeOf,ve="function"===ue(we)?me:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===h(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var je=ve;function Oe(r){return null==r?null:(r=t(r),je(r))}return function(r){var e,n,i,a,u,c;if(null==r)return[];i=t(r),e={},n=[];do{for(a=he(i),c=0;c<a.length;c++)!1===g(e,u=a[c])&&Ar(i,u)&&n.push(u),e[u]=!0;for(a=o(i),c=0;c<a.length;c++)!1===g(e,u=a[c])&&Ar(i,u)&&n.push(u),e[u]=!0;i=Oe(i)}while(i);return n}}));
//# sourceMappingURL=index.js.map