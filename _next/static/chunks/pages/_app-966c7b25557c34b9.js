(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1780:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(8510)}])},8045:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(u){i=!0,o=u}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function o(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}t.default=function(e){var t=e.src,n=e.sizes,o=e.unoptimized,s=void 0!==o&&o,d=e.priority,f=void 0!==d&&d,h=e.loading,b=e.lazyBoundary,w=void 0===b?"200px":b,A=e.className,x=e.quality,j=e.width,k=e.height,_=e.objectFit,E=e.objectPosition,I=e.onLoadingComplete,P=e.loader,D=void 0===P?z:P,N=e.placeholder,R=void 0===N?"empty":N,M=e.blurDataURL,q=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,["src","sizes","unoptimized","priority","loading","lazyBoundary","className","quality","width","height","objectFit","objectPosition","onLoadingComplete","loader","placeholder","blurDataURL"]),L=n?"responsive":"intrinsic";"layout"in q&&(q.layout&&(L=q.layout),delete q.layout);var C="";if(function(e){return"object"===typeof e&&(v(e)||function(e){return void 0!==e.src}(e))}(t)){var T=v(t)?t.default:t;if(!T.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(T)));if(M=M||T.blurDataURL,C=T.src,(!L||"fill"!==L)&&(k=k||T.height,j=j||T.width,!T.height||!T.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(T)))}t="string"===typeof t?t:C;var W=S(j),B=S(k),U=S(x),H=!f&&("lazy"===h||"undefined"===typeof h);(t.startsWith("data:")||t.startsWith("blob:"))&&(s=!0,H=!1);g.has(t)&&(H=!1);0;var F,V=i(l.useIntersection({rootMargin:w,disabled:!H}),2),J=V[0],X=V[1],G=!H||X,Q={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},K={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},Y=!1,Z={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:_,objectPosition:E},$="blur"===R?{filter:"blur(20px)",backgroundSize:_||"cover",backgroundImage:'url("'.concat(M,'")'),backgroundPosition:E||"0% 0%"}:{};if("fill"===L)Q.display="block",Q.position="absolute",Q.top=0,Q.left=0,Q.bottom=0,Q.right=0;else if("undefined"!==typeof W&&"undefined"!==typeof B){var ee=B/W,te=isNaN(ee)?"100%":"".concat(100*ee,"%");"responsive"===L?(Q.display="block",Q.position="relative",Y=!0,K.paddingTop=te):"intrinsic"===L?(Q.display="inline-block",Q.position="relative",Q.maxWidth="100%",Y=!0,K.maxWidth="100%",F='<svg width="'.concat(W,'" height="').concat(B,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===L&&(Q.display="inline-block",Q.position="relative",Q.width=W,Q.height=B)}else 0;var ne={src:m,srcSet:void 0,sizes:void 0};G&&(ne=O({src:t,unoptimized:s,layout:L,width:W,quality:U,sizes:n,loader:D}));var re=t;0;0;var ie=(r(y={},"imagesrcset",ne.srcSet),r(y,"imagesizes",ne.sizes),y);return a.default.createElement("span",{style:Q},Y?a.default.createElement("span",{style:K},F?a.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:"data:image/svg+xml;base64,".concat(u.toBase64(F))}):null):null,a.default.createElement("img",Object.assign({},q,ne,{decoding:"async","data-nimg":L,className:A,ref:function(e){J(e),function(e,t,n,r,i){if(!e)return;var o=function(){e.src!==m&&("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if("blur"===r&&(e.style.filter="none",e.style.backgroundSize="none",e.style.backgroundImage="none"),g.add(t),i){var n=e.naturalWidth,o=e.naturalHeight;i({naturalWidth:n,naturalHeight:o})}}))};e.complete?o():e.onload=o}(e,re,0,R,I)},style:p({},Z,$)})),a.default.createElement("noscript",null,a.default.createElement("img",Object.assign({},q,O({src:t,unoptimized:s,layout:L,width:W,quality:U,sizes:n,loader:D}),{decoding:"async","data-nimg":L,style:Z,className:A,loading:h||"lazy"}))),f?a.default.createElement(c.default,null,a.default.createElement("link",Object.assign({key:"__nimg-"+ne.src+ne.srcSet+ne.sizes,rel:"preload",as:"image",href:ne.srcSet?void 0:ne.src},ie))):null)};var a=f(n(7294)),c=f(n(5443)),u=n(6978),s=n(5809),l=n(7190);function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e){return e&&e.__esModule?e:{default:e}}function p(e){for(var t=arguments,n=function(n){var r=null!=t[n]?t[n]:{},i=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),i.forEach((function(t){d(e,t,r[t])}))},r=1;r<arguments.length;r++)n(r);return e}var g=new Set,m=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var h=new Map([["default",function(e){var t=e.root,n=e.src,r=e.width,i=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(i||75)}],["imgix",function(e){var t=e.root,n=e.src,r=e.width,i=e.quality,o=new URL("".concat(t).concat(_(n))),a=o.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||r.toString()),i&&a.set("q",i.toString());return o.href}],["cloudinary",function(e){var t=e.root,n=e.src,r=e.width,i=e.quality,o=["f_auto","c_limit","w_"+r,"q_"+(i||"auto")].join(",")+"/";return"".concat(t).concat(o).concat(_(n))}],["akamai",function(e){var t=e.root,n=e.src,r=e.width;return"".concat(t).concat(_(n),"?imwidth=").concat(r)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function v(e){return void 0!==e.default}var y,b={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default"}||s.imageConfigDefault,w=b.deviceSizes,A=b.imageSizes,x=b.loader,j=b.path,k=(b.domains,o(w).concat(o(A)));function O(e){var t=e.src,n=e.unoptimized,r=e.layout,i=e.width,a=e.quality,c=e.sizes,u=e.loader;if(n)return{src:t,srcSet:void 0,sizes:void 0};var s=function(e,t,n){if(n&&("fill"===t||"responsive"===t)){for(var r,i=/(^|\s)(1?\d?\d)vw/g,a=[];r=i.exec(n);r)a.push(parseInt(r[2]));if(a.length){var c,u=.01*(c=Math).min.apply(c,o(a));return{widths:k.filter((function(e){return e>=w[0]*u})),kind:"w"}}return{widths:k,kind:"w"}}return"number"!==typeof e||"fill"===t||"responsive"===t?{widths:w,kind:"w"}:{widths:o(new Set([e,2*e].map((function(e){return k.find((function(t){return t>=e}))||k[k.length-1]})))),kind:"x"}}(i,r,c),l=s.widths,d=s.kind,f=l.length-1;return{sizes:c||"w"!==d?c:"100vw",srcSet:l.map((function(e,n){return"".concat(u({src:t,quality:a,width:e})," ").concat("w"===d?e:n+1).concat(d)})).join(", "),src:u({src:t,quality:a,width:l[f]})}}function S(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function z(e){var t=h.get(x);if(t)return t(p({root:j},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(s.VALID_LOADERS.join(", "),". Received: ").concat(x))}function _(e){return"/"===e[0]?e.slice(1):e}w.sort((function(e,t){return e-t})),k.sort((function(e,t){return e-t}))},7190:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(u){i=!0,o=u}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,u=i.useRef(),s=r(i.useState(!1),2),l=s[0],d=s[1],f=i.useCallback((function(e){u.current&&(u.current(),u.current=void 0),n||l||e&&e.tagName&&(u.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:i,elements:r}),n}(n),i=r.id,o=r.observer,a=r.elements;return a.set(e,t),o.observe(e),function(){a.delete(e),o.unobserve(e),0===a.size&&(o.disconnect(),c.delete(i))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,l]);return i.useEffect((function(){if(!a&&!l){var e=o.requestIdleCallback((function(){return d(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[l]),[f,l]};var i=n(7294),o=n(9311),a="undefined"!==typeof IntersectionObserver;var c=new Map},6978:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.toBase64=function(e){return window.btoa(e)}},8510:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var r=n(5666),i=n.n(r),o=n(5893),a=n(7294),c=(n(7395),n(5675));function u(e,t,n,r,i,o,a){try{var c=e[o](a),u=c.value}catch(s){return void n(s)}c.done?t(u):Promise.resolve(u).then(r,i)}function s(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var o=e.apply(t,n);function a(e){u(o,r,i,a,c,"next",e)}function c(e){u(o,r,i,a,c,"throw",e)}a(void 0)}))}}var l=800,d=600;function f(){var e=(0,a.useRef)(null);return(0,a.useEffect)((function(){function t(){return n.apply(this,arguments)}function n(){return(n=s(i().mark((function t(){var n,r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.current.width=l,e.current.height=d,!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){t.next=8;break}return t.next=5,navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:"user",width:l,height:d}});case 5:return n=t.sent,e.current.srcObject=n,t.abrupt("return",new Promise((function(t){e.current.onloadedmetadata=function(){t(e.current)}})));case 8:return r="This browser does not support video capture, or this device does not have a camera",alert(r),t.abrupt("return",Promise.reject(r));case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function r(){return(r=s(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t();case 2:return(n=e.sent).play(),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){r.apply(this,arguments)}()}),[]),(0,o.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},children:(0,o.jsxs)("div",{className:"video-wrapper",children:[(0,o.jsx)("video",{className:"video",playsInline:!0,ref:e}),(0,o.jsx)(c.default,{src:"/tiger.jpg",alt:"Avatar",className:"image",width:l,height:d})]})})}},7395:function(){},5809:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"]}},5675:function(e,t,n){e.exports=n(8045)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1780),t(387)}));var n=e.O();_N_E=n}]);