var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in o){var i=o[e];delete o[e];var n={id:e,exports:{}};return t[e]=n,i.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},e.parcelRequired7c6=i);var n=i("iQIUW");const r=document.querySelector(".form"),{delay:l,step:s,amount:d}=r.elements;function a(e,t){return new Promise(((o,i)=>{setTimeout((()=>{Math.random()>.3?o({position:e,delay:t}):i({position:e,delay:t})}),t)}))}r.addEventListener("submit",(function(e){e.preventDefault();let t=+l.value;for(let e=1;e<=+d.value;e++)a(e,t).then((e=>(n.Notify.success(`✅ Fulfilled promise ${e.position} in ${e.delay}ms`),e))).catch((e=>{n.Notify.failure(`❌ Rejected promise ${e.position} in ${e.delay}ms`)})),t+=+s.value})),n.Notify.init({position:"right-top",width:"360px",fontSize:"16px",useIcon:!1});
//# sourceMappingURL=03-promises.41f20bb7.js.map
