import{x as w,c as t,i as M,C as D,l as k}from"./index-BpbnlELu.js";import{d as T,A as L}from"./index-C2H-i-4x.js";var j=`accept acceptCharset accessKey action allowFullScreen allowTransparency
    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge
    charSet checked classID className colSpan cols content contentEditable contextMenu
    controls coords crossOrigin data dateTime default defer dir disabled download draggable
    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder
    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity
    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media
    mediaGroup method min minLength multiple muted name noValidate nonce open
    optimum pattern placeholder poster preload radioGroup readOnly rel required
    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected
    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style
    summary tabIndex target title type useMap value width wmode wrap`,z=`onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`,I="".concat(j," ").concat(z).split(/[\s\n]+/),R="aria-",W="data-";function f(o,e){return o.indexOf(e)===0}function $(o){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n;e===!1?n={aria:!0,data:!0,attr:!0}:e===!0?n={aria:!0}:n=w({},e);var r={};return Object.keys(o).forEach(function(a){(n.aria&&(a==="role"||f(a,R))||n.data&&f(a,W)||n.attr&&I.includes(a))&&(r[a]=o[a])}),r}function A(o){return e=>t.createElement(M,{theme:{token:{motion:!1,zIndexPopupBase:0}}},t.createElement(o,Object.assign({},e)))}const q=(o,e,n,r)=>A(c=>{const{prefixCls:v,style:C}=c,l=t.useRef(null),[P,y]=t.useState(0),[b,S]=t.useState(0),[u,O]=T(!1,{value:c.open}),{getPrefixCls:x}=t.useContext(D),p=x(e||"select",v);t.useEffect(()=>{if(O(!0),typeof ResizeObserver<"u"){const g=new ResizeObserver(s=>{const i=s[0].target;y(i.offsetHeight+8),S(i.offsetWidth)}),m=setInterval(()=>{var s;const i=n?`.${n(p)}`:`.${p}-dropdown`,h=(s=l.current)===null||s===void 0?void 0:s.querySelector(i);h&&(clearInterval(m),g.observe(h))},10);return()=>{clearInterval(m),g.disconnect()}}},[]);let d=Object.assign(Object.assign({},c),{style:Object.assign(Object.assign({},C),{margin:0}),open:u,visible:u,getPopupContainer:()=>l.current});r&&(d=r(d));const E={paddingBottom:P,position:"relative",minWidth:b};return t.createElement("div",{ref:l,style:E},t.createElement(o,Object.assign({},d)))});var B={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"};const H=B;var F=function(e,n){return t.createElement(L,k({},e,{ref:n,icon:H}))};const N=t.forwardRef(F);export{N as C,q as g,$ as p,A as w};
