import{g as fe,t as ie,u as me,F as he,E as pe}from"./index-CI73He22.js";import{c as a,D as ge,C as ae,a6 as be,d as ve,a7 as Fe,a8 as ye}from"./index-BpbnlELu.js";import{o as Ce,V as we,p as ce,q as de,R as xe,s as Me,t as Ee,v as Oe}from"./index-B2ImQXrH.js";import{b as Pe,u as Ie}from"./index-C2H-i-4x.js";const re=e=>typeof e=="object"&&e!=null&&e.nodeType===1,ne=(e,o)=>(!o||e!=="hidden")&&e!=="visible"&&e!=="clip",ee=(e,o)=>{if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){const l=getComputedStyle(e,null);return ne(l.overflowY,o)||ne(l.overflowX,o)||(n=>{const r=(t=>{if(!t.ownerDocument||!t.ownerDocument.defaultView)return null;try{return t.ownerDocument.defaultView.frameElement}catch{return null}})(n);return!!r&&(r.clientHeight<n.scrollHeight||r.clientWidth<n.scrollWidth)})(e)}return!1},J=(e,o,l,n,r,t,c,i)=>t<e&&c>o||t>e&&c<o?0:t<=e&&i<=l||c>=o&&i>=l?t-e-n:c>o&&i<l||t<e&&i>l?c-o+r:0,je=e=>{const o=e.parentElement;return o??(e.getRootNode().host||null)},le=(e,o)=>{var l,n,r,t;if(typeof document>"u")return[];const{scrollMode:c,block:i,inline:d,boundary:w,skipOverflowHiddenElements:T}=o,Q=typeof w=="function"?w:g=>g!==w;if(!re(e))throw new TypeError("Invalid target");const _=document.scrollingElement||document.documentElement,R=[];let f=e;for(;re(f)&&Q(f);){if(f=je(f),f===_){R.push(f);break}f!=null&&f===document.body&&ee(f)&&!ee(document.documentElement)||f!=null&&ee(f,T)&&R.push(f)}const x=(n=(l=window.visualViewport)==null?void 0:l.width)!=null?n:innerWidth,M=(t=(r=window.visualViewport)==null?void 0:r.height)!=null?t:innerHeight,{scrollX:E,scrollY:v}=window,{height:O,width:F,top:P,right:y,bottom:A,left:S}=e.getBoundingClientRect(),{top:$,right:X,bottom:H,left:Y}=(g=>{const s=window.getComputedStyle(g);return{top:parseFloat(s.scrollMarginTop)||0,right:parseFloat(s.scrollMarginRight)||0,bottom:parseFloat(s.scrollMarginBottom)||0,left:parseFloat(s.scrollMarginLeft)||0}})(e);let u=i==="start"||i==="nearest"?P-$:i==="end"?A+H:P+O/2-$+H,m=d==="center"?S+F/2-Y+X:d==="end"?y+X:S-Y;const p=[];for(let g=0;g<R.length;g++){const s=R[g],{height:V,width:L,top:q,right:b,bottom:z,left:B}=s.getBoundingClientRect();if(c==="if-needed"&&P>=0&&S>=0&&A<=M&&y<=x&&P>=q&&A<=z&&S>=B&&y<=b)return p;const W=getComputedStyle(s),D=parseInt(W.borderLeftWidth,10),h=parseInt(W.borderTopWidth,10),C=parseInt(W.borderRightWidth,10),k=parseInt(W.borderBottomWidth,10);let I=0,j=0;const K="offsetWidth"in s?s.offsetWidth-s.clientWidth-D-C:0,G="offsetHeight"in s?s.offsetHeight-s.clientHeight-h-k:0,U="offsetWidth"in s?s.offsetWidth===0?0:L/s.offsetWidth:0,Z="offsetHeight"in s?s.offsetHeight===0?0:V/s.offsetHeight:0;if(_===s)I=i==="start"?u:i==="end"?u-M:i==="nearest"?J(v,v+M,M,h,k,v+u,v+u+O,O):u-M/2,j=d==="start"?m:d==="center"?m-x/2:d==="end"?m-x:J(E,E+x,x,D,C,E+m,E+m+F,F),I=Math.max(0,I+v),j=Math.max(0,j+E);else{I=i==="start"?u-q-h:i==="end"?u-z+k+G:i==="nearest"?J(q,z,V,h,k+G,u,u+O,O):u-(q+V/2)+G/2,j=d==="start"?m-B-D:d==="center"?m-(B+L/2)+K/2:d==="end"?m-b+C+K:J(B,b,L,D,C+K,m,m+F,F);const{scrollLeft:te,scrollTop:oe}=s;I=Z===0?0:Math.max(0,Math.min(oe+I/Z,s.scrollHeight-V/Z+G)),j=U===0?0:Math.max(0,Math.min(te+j/U,s.scrollWidth-L/U+K)),u+=oe-I,m+=te-j}p.push({el:s,top:I,left:j})}return p},Ne=e=>e===!1?{block:"end",inline:"nearest"}:(o=>o===Object(o)&&Object.keys(o).length!==0)(e)?e:{block:"start",inline:"nearest"};function Re(e,o){if(!e.isConnected||!(r=>{let t=r;for(;t&&t.parentNode;){if(t.parentNode===document)return!0;t=t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}return!1})(e))return;const l=(r=>{const t=window.getComputedStyle(r);return{top:parseFloat(t.scrollMarginTop)||0,right:parseFloat(t.scrollMarginRight)||0,bottom:parseFloat(t.scrollMarginBottom)||0,left:parseFloat(t.scrollMarginLeft)||0}})(e);if((r=>typeof r=="object"&&typeof r.behavior=="function")(o))return o.behavior(le(e,o));const n=typeof o=="boolean"||o==null?void 0:o.behavior;for(const{el:r,top:t,left:c}of le(e,Ne(o))){const i=t-l.top+l.bottom,d=c-l.left+l.right;r.scroll({top:i,left:d,behavior:n})}}function se(e){return ie(e).join("_")}function ue(e){const[o]=Ce(),l=a.useRef({}),n=a.useMemo(()=>e??Object.assign(Object.assign({},o),{__INTERNAL__:{itemRef:r=>t=>{const c=se(r);t?l.current[c]=t:delete l.current[c]}},scrollToField:function(r){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const c=ie(r),i=fe(c,n.__INTERNAL__.name),d=i?document.getElementById(i):null;d&&Re(d,Object.assign({scrollMode:"if-needed",block:"nearest"},t))},getFieldInstance:r=>{const t=se(r);return l.current[t]}}),[e,o]);return[n]}var Se=function(e,o){var l={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&o.indexOf(n)<0&&(l[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)o.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(l[n[r]]=e[n[r]]);return l};const We=(e,o)=>{const l=a.useContext(ge),{getPrefixCls:n,direction:r,form:t}=a.useContext(ae),{prefixCls:c,className:i,rootClassName:d,size:w,disabled:T=l,form:Q,colon:_,labelAlign:R,labelWrap:f,labelCol:x,wrapperCol:M,hideRequiredMark:E,layout:v="horizontal",scrollToFirstError:O,requiredMark:F,onFinishFailed:P,name:y,style:A,feedbackIcons:S,variant:$}=e,X=Se(e,["prefixCls","className","rootClassName","size","disabled","form","colon","labelAlign","labelWrap","labelCol","wrapperCol","hideRequiredMark","layout","scrollToFirstError","requiredMark","onFinishFailed","name","style","feedbackIcons","variant"]),H=Pe(w),Y=a.useContext(be),u=a.useMemo(()=>F!==void 0?F:E?!1:t&&t.requiredMark!==void 0?t.requiredMark:!0,[E,F,t]),m=_??(t==null?void 0:t.colon),p=n("form",c),g=Ie(p),[s,V,L]=me(p,g),q=ve(p,`${p}-${v}`,{[`${p}-hide-required-mark`]:u===!1,[`${p}-rtl`]:r==="rtl",[`${p}-${H}`]:H},L,g,V,t==null?void 0:t.className,i,d),[b]=ue(Q),{__INTERNAL__:z}=b;z.name=y;const B=a.useMemo(()=>({name:y,labelAlign:R,labelCol:x,labelWrap:f,wrapperCol:M,vertical:v==="vertical",colon:m,requiredMark:u,itemRef:z.itemRef,form:b,feedbackIcons:S}),[y,R,x,M,v,m,u,b,S]);a.useImperativeHandle(o,()=>b);const W=(h,C)=>{if(h){let k={block:"nearest"};typeof h=="object"&&(k=h),b.scrollToField(C,k)}},D=h=>{if(P==null||P(h),h.errorFields.length){const C=h.errorFields[0].name;if(O!==void 0){W(O,C);return}t&&t.scrollToFirstError!==void 0&&W(t.scrollToFirstError,C)}};return s(a.createElement(we.Provider,{value:$},a.createElement(Fe,{disabled:T},a.createElement(ye.Provider,{value:H},a.createElement(ce,{validateMessages:Y},a.createElement(de.Provider,{value:B},a.createElement(xe,Object.assign({id:y},X,{name:y,onFinishFailed:D,form:b,style:Object.assign(Object.assign({},t==null?void 0:t.style),A),className:q}))))))))},ke=a.forwardRef(We);var Te=function(e,o){var l={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&o.indexOf(n)<0&&(l[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)o.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(l[n[r]]=e[n[r]]);return l};const _e=e=>{var{prefixCls:o,children:l}=e,n=Te(e,["prefixCls","children"]);const{getPrefixCls:r}=a.useContext(ae),t=r("form",o),c=a.useMemo(()=>({prefixCls:t,status:"error"}),[t]);return a.createElement(Me,Object.assign({},n),(i,d,w)=>a.createElement(Ee.Provider,{value:c},l(i.map(T=>Object.assign(Object.assign({},T),{fieldKey:T.key})),d,{errors:w.errors,warnings:w.warnings})))},He=_e;function Ve(){const{form:e}=a.useContext(de);return e}const N=ke;N.Item=he;N.List=He;N.ErrorList=pe;N.useForm=ue;N.useFormInstance=Ve;N.useWatch=Oe;N.Provider=ce;N.create=()=>{};export{N as F};