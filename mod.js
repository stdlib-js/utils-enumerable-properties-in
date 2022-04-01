// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){if(r.__esModule)return r;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(e){var n=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(t,e,n.get?n:{enumerable:!0,get:function(){return r[e]}})})),t}var t=void 0!==Object.getOwnPropertySymbols,e=Object.getOwnPropertySymbols;var n=t?function(r){return e(Object(r))}:function(){return[]},o=void 0!==Object.getOwnPropertyNames,i=Object.getOwnPropertyNames;var u=function(r){return i(Object(r))};var c=function(r){return Object.keys(Object(r))},a=c;var f=function(){return function(){return 2!==(a(arguments)||"").length}(1,2)},l=void 0!==Object.keys;var v=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var p=function(){return v&&"symbol"==typeof Symbol.toStringTag},s=Object.prototype.toString,y=s;var b=function(r){return y.call(r)},g=Object.prototype.hasOwnProperty;var j=function(r,t){return null!=r&&g.call(r,t)},m="function"==typeof Symbol?Symbol.toStringTag:"",O=j,h=m,d=s;var w=b,_=function(r){var t,e,n;if(null==r)return d.call(r);e=r[h],t=O(r,h);try{r[h]=void 0}catch(t){return d.call(r)}return n=d.call(r),t?r[h]=e:delete r[h],n},P=p()?_:w,S=P;var E=function(r){return"[object Arguments]"===S(r)},I=E;var T=function(){return I(arguments)}(),A="function"==typeof Object.defineProperty?Object.defineProperty:null;var N=function(){try{return A({},"x",{}),!0}catch(r){return!1}},k=Object.defineProperty,B=Object.prototype,V=B.toString,x=B.__defineGetter__,F=B.__defineSetter__,G=B.__lookupGetter__,L=B.__lookupSetter__;var M=function(r,t,e){var n,o,i,u;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===V.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((o="value"in e)&&(G.call(r,t)||L.call(r,t)?(n=r.__proto__,r.__proto__=B,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,u="set"in e,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&x&&x.call(r,t,e.get),u&&F&&F.call(r,t,e.set),r},X=k,Y=M,C=N()?X:Y;var D=function(r,t,e){C(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})},H=D;var R=function(r){return"string"==typeof r},W=String.prototype.valueOf;var z=P,U=function(r){try{return W.call(r),!0}catch(r){return!1}},q=p();var J=function(r){return"object"==typeof r&&(r instanceof String||(q?U(r):"[object String]"===z(r)))},K=R,Q=J;var Z=H,$=function(r){return K(r)||Q(r)},rr=J;Z($,"isPrimitive",R),Z($,"isObject",rr);var tr=$;var er=function(r){return"number"==typeof r},nr=Number,or=nr.prototype.toString;var ir=P,ur=nr,cr=function(r){try{return or.call(r),!0}catch(r){return!1}},ar=p();var fr=function(r){return"object"==typeof r&&(r instanceof ur||(ar?cr(r):"[object Number]"===ir(r)))},lr=er,vr=fr;var pr=H,sr=function(r){return lr(r)||vr(r)},yr=fr;pr(sr,"isPrimitive",er),pr(sr,"isObject",yr);var br=sr;var gr=function(r){return r!=r},jr=br.isPrimitive,mr=gr;var Or=function(r){return jr(r)&&mr(r)},hr=br.isObject,dr=gr;var wr=function(r){return hr(r)&&dr(r.valueOf())},_r=Or,Pr=wr;var Sr=H,Er=function(r){return _r(r)||Pr(r)},Ir=wr;Sr(Er,"isPrimitive",Or),Sr(Er,"isObject",Ir);var Tr=Er,Ar=Number.POSITIVE_INFINITY,Nr=nr.NEGATIVE_INFINITY,kr=Math.floor;var Br=function(r){return kr(r)===r},Vr=Ar,xr=Nr,Fr=Br;var Gr=function(r){return r<Vr&&r>xr&&Fr(r)},Lr=br.isPrimitive,Mr=Gr;var Xr=function(r){return Lr(r)&&Mr(r)},Yr=br.isObject,Cr=Gr;var Dr=function(r){return Yr(r)&&Cr(r.valueOf())},Hr=Xr,Rr=Dr;var Wr=H,zr=function(r){return Hr(r)||Rr(r)},Ur=Dr;Wr(zr,"isPrimitive",Xr),Wr(zr,"isObject",Ur);var qr,Jr=zr,Kr=Object.prototype.propertyIsEnumerable;qr=!Kr.call("beep","0");var Qr=tr,Zr=Tr.isPrimitive,$r=Jr.isPrimitive,rt=Kr,tt=qr;var et=function(r,t){var e;return null!=r&&(!(e=rt.call(r,t))&&tt&&Qr(r)?!Zr(t=+t)&&$r(t)&&t>=0&&t<r.length:e)},nt=et,ot=P;var it=Array.isArray?Array.isArray:function(r){return"[object Array]"===ot(r)},ut=j,ct=nt,at=it,ft=Br;var lt=T?E:function(r){return null!==r&&"object"==typeof r&&!at(r)&&"number"==typeof r.length&&ft(r.length)&&r.length>=0&&r.length<=4294967295&&ut(r,"callee")&&!ct(r,"callee")},vt=lt,pt=c,st=Array.prototype.slice;var yt=function(r){return vt(r)?pt(st.call(r)):pt(r)},bt=it;var gt=function(r){return null!==r&&"object"==typeof r};H(gt,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!bt(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(gt));var jt=gt;var mt=nt((function(){}),"prototype"),Ot=!nt({toString:null},"toString"),ht=Br;var dt=Tr,wt=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&ht(r.length)&&r.length>=0&&r.length<=9007199254740991},_t=tr.isPrimitive,Pt=Jr.isPrimitive;var St=function(r,t,e){var n,o;if(!wt(r)&&!_t(r))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+r+"`.");if(0===(n=r.length))return-1;if(3===arguments.length){if(!Pt(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=n)return-1;o=e}else(o=n+e)<0&&(o=0)}else o=0;if(dt(t)){for(;o<n;o++)if(dt(r[o]))return o}else for(;o<n;o++)if(r[o]===t)return o;return-1},Et=/./;var It=function(r){return"boolean"==typeof r},Tt=Boolean.prototype.toString;var At=P,Nt=function(r){try{return Tt.call(r),!0}catch(r){return!1}},kt=p();var Bt=function(r){return"object"==typeof r&&(r instanceof Boolean||(kt?Nt(r):"[object Boolean]"===At(r)))},Vt=It,xt=Bt;var Ft=H,Gt=function(r){return Vt(r)||xt(r)},Lt=Bt;Ft(Gt,"isPrimitive",It),Ft(Gt,"isObject",Lt);var Mt="object"==typeof self?self:null,Xt="object"==typeof window?window:null,Yt=Gt.isPrimitive,Ct=function(){return new Function("return this;")()},Dt=Mt,Ht=Xt,Rt=r(Object.freeze({__proto__:null}));var Wt=function(r){if(arguments.length){if(!Yt(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return Ct()}if(Dt)return Dt;if(Ht)return Ht;if(Rt)return Rt;throw new Error("unexpected error. Unable to resolve global object.")},zt=Wt(),Ut=zt.document&&zt.document.childNodes,qt=Int8Array,Jt=Et,Kt=Ut,Qt=qt;var Zt=function(){return"function"==typeof Jt||"object"==typeof Qt||"function"==typeof Kt};var $t=function(){return/^\s*function\s*([^(]*)/i},re=$t;H(re,"REGEXP",$t());var te=jt;var ee=P,ne=re.REGEXP,oe=function(r){return te(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var ie=function(r){var t,e,n;if(("Object"===(e=ee(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=ne.exec(n.toString()))return t[1]}return oe(r)?"Buffer":e},ue=ie;var ce=ie;var ae=function(r){var t;return null===r?"null":"object"===(t=typeof r)?ue(r).toLowerCase():t},fe=function(r){return ce(r).toLowerCase()},le=Zt()?fe:ae;var ve,pe=function(r){return r.constructor&&r.constructor.prototype===r},se="undefined"==typeof window?void 0:window,ye=j,be=St,ge=le,je=pe,me=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Oe=se;ve=function(){var r;if("undefined"===ge(Oe))return!1;for(r in Oe)try{-1===be(me,r)&&ye(Oe,r)&&null!==Oe[r]&&"object"===ge(Oe[r])&&je(Oe[r])}catch(r){return!0}return!1}();var he="undefined"!=typeof window,de=ve,we=pe,_e=he;var Pe=jt,Se=j,Ee=lt,Ie=mt,Te=Ot,Ae=function(r){if(!1===_e&&!de)return we(r);try{return we(r)}catch(r){return!1}},Ne=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var ke=c,Be=yt,Ve=function(r){var t,e,n,o,i,u,c;if(o=[],Ee(r)){for(c=0;c<r.length;c++)o.push(c.toString());return o}if("string"==typeof r){if(r.length>0&&!Se(r,"0"))for(c=0;c<r.length;c++)o.push(c.toString())}else{if(!1===(n="function"==typeof r)&&!Pe(r))return o;e=Ie&&n}for(i in r)e&&"prototype"===i||!Se(r,i)||o.push(String(i));if(Te)for(t=Ae(r),c=0;c<Ne.length;c++)u=Ne[c],t&&"constructor"===u||!Se(r,u)||o.push(String(u));return o},xe=l?f()?Be:ke:Ve;var Fe=o?u:function(r){return xe(Object(r))},Ge=le;var Le=function(r){return"function"===Ge(r)},Me=Object.getPrototypeOf;var Xe=function(r){return r.__proto__},Ye=P,Ce=Xe;var De=function(r){var t=Ce(r);return t||null===t?t:"[object Function]"===Ye(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null},He=Me,Re=De,We=Le(Object.getPrototypeOf)?He:Re;var ze=n,Ue=Fe,qe=function(r){return null==r?null:(r=Object(r),We(r))},Je=j,Ke=nt;var Qe=function(r){var t,e,n,o,i,u;if(null==r)return[];n=Object(r),t={},e=[];do{for(o=Ue(n),u=0;u<o.length;u++)i=o[u],!1===Je(t,i)&&Ke(n,i)&&e.push(i),t[i]=!0;for(o=ze(n),u=0;u<o.length;u++)i=o[u],!1===Je(t,i)&&Ke(n,i)&&e.push(i),t[i]=!0;n=qe(n)}while(n);return e},Ze=Qe;export{Ze as default};
//# sourceMappingURL=mod.js.map
