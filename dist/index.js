var e,n;e=self,n=function(){return(()=>{var e={794:(e,n)=>{var t=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();n.nW=function(e){var n=function(e,n,t){if(void 0===t){var r=h.encode(e),o=n(r.length);return a().subarray(o,o+r.length).set(r),l=r.length,o}for(var i=e.length,s=n(i),f=a(),u=0;u<i;u++){var c=e.charCodeAt(u);if(c>127)break;f[s+u]=c}if(u!==i){0!==u&&(e=e.slice(u)),s=t(s,i,i=u+3*e.length);var w=a().subarray(s+u,s+i);u+=d(e,w).written}return l=u,s}(e,r.__wbindgen_malloc,r.__wbindgen_realloc),t=l,o=r.create_hash(n,t);return p.__wrap(o)},n.I8=function(e,n){ArrayBuffer.isView(n)||(n=new Uint8Array(n)),w(e,p);var t,o,i,s=(t=n,o=r.__wbindgen_malloc,i=o(1*t.length),a().set(t,i/1),l=t.length,i),f=l;r.update_hash(e.ptr,s,f)},n.Zg=function(e){try{var n=r.__wbindgen_export_2.value-16;r.__wbindgen_export_2.value=n,w(e,p),r.digest_hash(n,e.ptr);var t=b()[n/4+0],o=b()[n/4+1],i=(s=t,f=o,a().subarray(s/1,s/1+f)).slice();return r.__wbindgen_free(t,1*o),i}finally{r.__wbindgen_export_2.value+=16}var s,f};var r=void 0,o=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});o.decode();var i=null;function a(){return null!==i&&i.buffer===r.memory.buffer||(i=new Uint8Array(r.memory.buffer)),i}function s(e,n){return o.decode(a().subarray(e,e+n))}var f=new Array(32).fill(void 0);f.push(void 0,null,!0,!1);var u=f.length;function c(e){var n=function(e){return f[e]}(e);return function(e){e<36||(f[e]=u,u=e)}(e),n}var l=0,h=new TextEncoder("utf-8"),d="function"==typeof h.encodeInto?function(e,n){return h.encodeInto(e,n)}:function(e,n){var t=h.encode(e);return n.set(t),{read:e.length,written:t.length}};function w(e,n){if(!(e instanceof n))throw new Error("expected instance of "+n.name);return e.ptr}var y=null;function b(){return null!==y&&y.buffer===r.memory.buffer||(y=new Int32Array(r.memory.buffer)),y}var p=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}return t(e,[{key:"free",value:function(){var e=this.ptr;this.ptr=0,r.__wbg_denohash_free(e)}}],[{key:"__wrap",value:function(n){var t=Object.create(e.prototype);return t.ptr=n,t}}]),e}();n.ZP=async function e(n){var t={wbg:{}};t.wbg.__wbindgen_string_new=function(e,n){return function(e){u===f.length&&f.push(f.length+1);var n=u;return u=f[n],f[n]=e,n}(s(e,n))},t.wbg.__wbindgen_throw=function(e,n){throw new Error(s(e,n))},t.wbg.__wbindgen_rethrow=function(e){throw c(e)},("string"==typeof n||"function"==typeof Request&&n instanceof Request||"function"==typeof URL&&n instanceof URL)&&(n=fetch(n));var o=await async function(e,n){if("function"==typeof Response&&e instanceof Response){if("function"==typeof WebAssembly.instantiateStreaming)try{return await WebAssembly.instantiateStreaming(e,n)}catch(n){if("application/wasm"==e.headers.get("Content-Type"))throw n;console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",n)}var t=await e.arrayBuffer();return await WebAssembly.instantiate(t,n)}var r=await WebAssembly.instantiate(e,n);return r instanceof WebAssembly.Instance?{instance:r,module:e}:r}(await n,t),i=o.instance,a=o.module;return r=i.exports,e.__wbindgen_wasm_module=a,r}},72:(e,n,t)=>{t.r(n),t.d(n,{default:()=>f});var r=t(794);const o=(new TextEncoder).encode("0123456789abcdef");function i(e){return(new TextDecoder).decode(function(e){const n=new Uint8Array(2*e.length);for(let t=0;t<n.length;t++){const r=e[t];n[2*t]=o[r>>4],n[2*t+1]=o[15&r]}return n}(e))}const a=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","+","/"];!async function(){await(0,r.ZP)("https://staticiot.cdn.bcebos.com/union/hash_bg.wasm")}();const s="hash: `data` is invalid type",f=class{constructor(e){this._hash=(0,r.nW)(e),this._digested=!1}update(e){let n;if("string"==typeof e)n=(new TextEncoder).encode(e);else{if("object"!=typeof e)throw new Error(s);if(!(e instanceof ArrayBuffer||ArrayBuffer.isView(e)))throw new Error(s);n=new Uint8Array(e)}return(0,r.I8)(this._hash,n),this}end(e,n){if("object"!=typeof e)throw new Error(s);if("object"!=typeof e[0])throw new Error(s);let t=this,o=0;return this.fiber((function*(){for(;o<e.length;)(0,r.I8)(t._hash,e[o++]),yield;const i=t.toString();n(i)}))(),this}digest(){if(this._digested)throw new Error("hash: already digested");return this._digested=!0,(0,r.Zg)(this._hash)}toString(e="hex"){const n=new Uint8Array(this.digest());switch(e){case"hex":return i(n);case"base64":return function(e){const n="string"==typeof e?(new TextEncoder).encode(e):e instanceof Uint8Array?e:new Uint8Array(e);let t,r="";const o=n.length;for(t=2;t<o;t+=3)r+=a[n[t-2]>>2],r+=a[(3&n[t-2])<<4|n[t-1]>>4],r+=a[(15&n[t-1])<<2|n[t]>>6],r+=a[63&n[t]];return t===o+1&&(r+=a[n[t-2]>>2],r+=a[(3&n[t-2])<<4],r+="=="),t===o&&(r+=a[n[t-2]>>2],r+=a[(3&n[t-2])<<4|n[t-1]>>4],r+=a[(15&n[t-1])<<2],r+="="),r}(n);default:throw new Error("hash: invalid format")}}fiber(e){if("function"==typeof e&&(e=e()),e&&"function"==typeof e.next)return function n(){const t=performance.now();let r=null;do{r=e.next()}while(!r.done&&performance.now()-t<50);r.done||setTimeout(n)}}}}},n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{}};return e[r](o,o.exports,t),o.exports}return t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t(72)})()},"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports["wasm-hash"]=n():e["wasm-hash"]=n();