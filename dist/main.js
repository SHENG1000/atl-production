/*! For license information please see main.js.LICENSE.txt */
(()=>{var e={723:(e,r,t)=>{var n=t(779);e.exports=function(e){"use strict";e=e||{};var r="";return r+="<div>\r\n    hello ",(r+=(0,n.$escape)(e.world))+"\r\n</div>"}},585:(e,r,t)=>{"use strict";var n="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==t.g?t.g:{},o=Object.create(n),i=/["&'<>]/;function s(e){return"string"!=typeof e&&(e=null==e?"":"function"==typeof e?s(e.call(e)):JSON.stringify(e)),e}o.$escape=function(e){return function(e){var r=""+e,t=i.exec(r);if(!t)return e;var n="",o=void 0,s=void 0,a=void 0;for(o=t.index,s=0;o<r.length;o++){switch(r.charCodeAt(o)){case 34:a="&#34;";break;case 38:a="&#38;";break;case 39:a="&#39;";break;case 60:a="&#60;";break;case 62:a="&#62;";break;default:continue}s!==o&&(n+=r.substring(s,o)),s=o+1,n+=a}return s!==o?n+r.substring(s,o):n}(s(e))},o.$each=function(e,r){if(Array.isArray(e))for(var t=0,n=e.length;t<n;t++)r(e[t],t);else for(var o in e)r(e[o],o)},e.exports=o},779:(e,r,t)=>{"use strict";e.exports=t(585)}},r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{}};return e[n](o,o.exports,t),o.exports}t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{"use strict";t(723)})()})();