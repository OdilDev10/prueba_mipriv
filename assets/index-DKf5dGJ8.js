import{c as o,n as Y,o as Z,d as N,p as T,l as ee,x as F,r as B,v as re,b as H,R as te,C as q,D as ae,_ as W}from"./index-BpbnlELu.js";import{d as ne,g as oe,m as le,u as A,o as se}from"./index-C2H-i-4x.js";import{F as ie,f as ce,W as de}from"./index-B2ImQXrH.js";var ue=["prefixCls","className","style","checked","disabled","defaultChecked","type","title","onChange"],be=o.forwardRef(function(e,r){var t=e.prefixCls,a=t===void 0?"rc-checkbox":t,i=e.className,E=e.style,v=e.checked,h=e.disabled,$=e.defaultChecked,g=$===void 0?!1:$,u=e.type,C=u===void 0?"checkbox":u,_=e.title,s=e.onChange,S=Y(e,ue),m=o.useRef(null),b=ne(g,{value:v}),n=Z(b,2),O=n[0],I=n[1];o.useImperativeHandle(r,function(){return{focus:function(c){var p;(p=m.current)===null||p===void 0||p.focus(c)},blur:function(){var c;(c=m.current)===null||c===void 0||c.blur()},input:m.current}});var x=N(a,i,T(T({},"".concat(a,"-checked"),O),"".concat(a,"-disabled"),h)),f=function(c){h||("checked"in e||I(c.target.checked),s==null||s({target:F(F({},e),{},{type:C,checked:c.target.checked}),stopPropagation:function(){c.stopPropagation()},preventDefault:function(){c.preventDefault()},nativeEvent:c.nativeEvent}))};return o.createElement("span",{className:x,title:_,style:E},o.createElement("input",ee({},S,{className:"".concat(a,"-input"),ref:m,onChange:f,disabled:h,checked:!!O,type:C})),o.createElement("span",{className:"".concat(a,"-inner")}))});const fe=e=>{const{checkboxCls:r}=e,t=`${r}-wrapper`;return[{[`${r}-group`]:Object.assign(Object.assign({},B(e)),{display:"inline-flex",flexWrap:"wrap",columnGap:e.marginXS,[`> ${e.antCls}-row`]:{flex:1}}),[t]:Object.assign(Object.assign({},B(e)),{display:"inline-flex",alignItems:"baseline",cursor:"pointer","&:after":{display:"inline-block",width:0,overflow:"hidden",content:"'\\a0'"},[`& + ${t}`]:{marginInlineStart:0},[`&${t}-in-form-item`]:{'input[type="checkbox"]':{width:14,height:14}}}),[r]:Object.assign(Object.assign({},B(e)),{position:"relative",whiteSpace:"nowrap",lineHeight:1,cursor:"pointer",borderRadius:e.borderRadiusSM,alignSelf:"center",[`${r}-input`]:{position:"absolute",inset:0,zIndex:1,cursor:"pointer",opacity:0,margin:0,[`&:focus-visible + ${r}-inner`]:Object.assign({},re(e))},[`${r}-inner`]:{boxSizing:"border-box",display:"block",width:e.checkboxSize,height:e.checkboxSize,direction:"ltr",backgroundColor:e.colorBgContainer,border:`${H(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,borderCollapse:"separate",transition:`all ${e.motionDurationSlow}`,"&:after":{boxSizing:"border-box",position:"absolute",top:"50%",insetInlineStart:"25%",display:"table",width:e.calc(e.checkboxSize).div(14).mul(5).equal(),height:e.calc(e.checkboxSize).div(14).mul(8).equal(),border:`${H(e.lineWidthBold)} solid ${e.colorWhite}`,borderTop:0,borderInlineStart:0,transform:"rotate(45deg) scale(0) translate(-50%,-50%)",opacity:0,content:'""',transition:`all ${e.motionDurationFast} ${e.motionEaseInBack}, opacity ${e.motionDurationFast}`}},"& + span":{paddingInlineStart:e.paddingXS,paddingInlineEnd:e.paddingXS}})},{[`
        ${t}:not(${t}-disabled),
        ${r}:not(${r}-disabled)
      `]:{[`&:hover ${r}-inner`]:{borderColor:e.colorPrimary}},[`${t}:not(${t}-disabled)`]:{[`&:hover ${r}-checked:not(${r}-disabled) ${r}-inner`]:{backgroundColor:e.colorPrimaryHover,borderColor:"transparent"},[`&:hover ${r}-checked:not(${r}-disabled):after`]:{borderColor:e.colorPrimaryHover}}},{[`${r}-checked`]:{[`${r}-inner`]:{backgroundColor:e.colorPrimary,borderColor:e.colorPrimary,"&:after":{opacity:1,transform:"rotate(45deg) scale(1) translate(-50%,-50%)",transition:`all ${e.motionDurationMid} ${e.motionEaseOutBack} ${e.motionDurationFast}`}}},[`
        ${t}-checked:not(${t}-disabled),
        ${r}-checked:not(${r}-disabled)
      `]:{[`&:hover ${r}-inner`]:{backgroundColor:e.colorPrimaryHover,borderColor:"transparent"}}},{[r]:{"&-indeterminate":{[`${r}-inner`]:{backgroundColor:e.colorBgContainer,borderColor:e.colorBorder,"&:after":{top:"50%",insetInlineStart:"50%",width:e.calc(e.fontSizeLG).div(2).equal(),height:e.calc(e.fontSizeLG).div(2).equal(),backgroundColor:e.colorPrimary,border:0,transform:"translate(-50%, -50%) scale(1)",opacity:1,content:'""'}}}}},{[`${t}-disabled`]:{cursor:"not-allowed"},[`${r}-disabled`]:{[`&, ${r}-input`]:{cursor:"not-allowed",pointerEvents:"none"},[`${r}-inner`]:{background:e.colorBgContainerDisabled,borderColor:e.colorBorder,"&:after":{borderColor:e.colorTextDisabled}},"&:after":{display:"none"},"& + span":{color:e.colorTextDisabled},[`&${r}-indeterminate ${r}-inner::after`]:{background:e.colorTextDisabled}}}]};function pe(e,r){const t=le(r,{checkboxCls:`.${e}`,checkboxSize:r.controlInteractiveSize});return[fe(t)]}const L=oe("Checkbox",(e,r)=>{let{prefixCls:t}=r;return[pe(t,e)]}),he=te.createContext(null),X=he;var me=function(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,a=Object.getOwnPropertySymbols(e);i<a.length;i++)r.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(t[a[i]]=e[a[i]]);return t};const ve=(e,r)=>{var t;const{prefixCls:a,className:i,rootClassName:E,children:v,indeterminate:h=!1,style:$,onMouseEnter:g,onMouseLeave:u,skipGroup:C=!1,disabled:_}=e,s=me(e,["prefixCls","className","rootClassName","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup","disabled"]),{getPrefixCls:S,direction:m,checkbox:b}=o.useContext(q),n=o.useContext(X),{isFormItemInput:O}=o.useContext(ie),I=o.useContext(ae),x=(t=(n==null?void 0:n.disabled)||_)!==null&&t!==void 0?t:I,f=o.useRef(s.value);o.useEffect(()=>{n==null||n.registerValue(s.value)},[]),o.useEffect(()=>{if(!C)return s.value!==f.current&&(n==null||n.cancelValue(f.current),n==null||n.registerValue(s.value),f.current=s.value),()=>n==null?void 0:n.cancelValue(s.value)},[s.value]);const d=S("checkbox",a),c=A(d),[p,j,k]=L(d,c),y=Object.assign({},s);n&&!C&&(y.onChange=function(){s.onChange&&s.onChange.apply(s,arguments),n.toggleOption&&n.toggleOption({label:v,value:s.value})},y.name=n.name,y.checked=n.value.includes(s.value));const V=N(`${d}-wrapper`,{[`${d}-rtl`]:m==="rtl",[`${d}-wrapper-checked`]:y.checked,[`${d}-wrapper-disabled`]:x,[`${d}-wrapper-in-form-item`]:O},b==null?void 0:b.className,i,E,k,c,j),R=N({[`${d}-indeterminate`]:h},ce,j),D=h?"mixed":void 0;return p(o.createElement(de,{component:"Checkbox",disabled:x},o.createElement("label",{className:V,style:Object.assign(Object.assign({},b==null?void 0:b.style),$),onMouseEnter:g,onMouseLeave:u},o.createElement(be,Object.assign({"aria-checked":D},y,{prefixCls:d,className:R,disabled:x,ref:r})),v!==void 0&&o.createElement("span",null,v))))},ge=o.forwardRef(ve),K=ge;var Ce=function(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,a=Object.getOwnPropertySymbols(e);i<a.length;i++)r.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(t[a[i]]=e[a[i]]);return t};const xe=o.forwardRef((e,r)=>{const{defaultValue:t,children:a,options:i=[],prefixCls:E,className:v,rootClassName:h,style:$,onChange:g}=e,u=Ce(e,["defaultValue","children","options","prefixCls","className","rootClassName","style","onChange"]),{getPrefixCls:C,direction:_}=o.useContext(q),[s,S]=o.useState(u.value||t||[]),[m,b]=o.useState([]);o.useEffect(()=>{"value"in u&&S(u.value||[])},[u.value]);const n=o.useMemo(()=>i.map(l=>typeof l=="string"||typeof l=="number"?{label:l,value:l}:l),[i]),O=l=>{b(w=>w.filter(P=>P!==l))},I=l=>{b(w=>[].concat(W(w),[l]))},x=l=>{const w=s.indexOf(l.value),P=W(s);w===-1?P.push(l.value):P.splice(w,1),"value"in u||S(P),g==null||g(P.filter(z=>m.includes(z)).sort((z,J)=>{const Q=n.findIndex(G=>G.value===z),U=n.findIndex(G=>G.value===J);return Q-U}))},f=C("checkbox",E),d=`${f}-group`,c=A(f),[p,j,k]=L(f,c),y=se(u,["value","disabled"]),V=i.length?n.map(l=>o.createElement(K,{prefixCls:f,key:l.value.toString(),disabled:"disabled"in l?l.disabled:u.disabled,value:l.value,checked:s.includes(l.value),onChange:l.onChange,className:`${d}-item`,style:l.style,title:l.title,id:l.id,required:l.required},l.label)):a,R={toggleOption:x,value:s,disabled:u.disabled,name:u.name,registerValue:I,cancelValue:O},D=N(d,{[`${d}-rtl`]:_==="rtl"},v,h,k,c,j);return p(o.createElement("div",Object.assign({className:D,style:$},y,{ref:r}),o.createElement(X.Provider,{value:R},V)))}),ye=xe,M=K;M.Group=ye;M.__ANT_CHECKBOX=!0;const we=M;export{we as C,be as a,pe as g};