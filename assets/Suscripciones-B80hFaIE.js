import{j as t,a as j,c as v,u as b}from"./index-BpbnlELu.js";import{h as m}from"./moment-CeFr4ybl.js";import{S as s}from"./sweetalert2.all-Dt1yOzTK.js";import{H as k}from"./HeaderPages-BTGy3r9e.js";import{M as w,h as q,R as M}from"./exportExcel-mMflvqoJ.js";import{C as I}from"./CustomModal-rsF4CmYO.js";import{C as B}from"./CustomButton-BWn0J7hp.js";import{F as S}from"./index-CI73He22.js";import{A as p}from"./APPTEXT-DdBB-egC.js";import{R as r,C as c}from"./row-ByxdZ40K.js";import{B as d}from"./index-B2ImQXrH.js";import{I as u}from"./index-xFxyGTHE.js";import{C as T}from"./index-D9tmCSSW.js";import{s as H}from"./index-BgqKPYb3.js";import{S as L}from"./SearchOutlined-qRc0Biuc.js";import"./index-C2H-i-4x.js";import"./LeftOutlined-CSB5dPJR.js";import"./useForceUpdate-BYLRFGc8.js";import"./responsiveObserver-BAaQWhiZ.js";import"./CheckOutlined-D194alxk.js";import"./index-D7j2smoz.js";import"./Title-gg-o8yR0.js";import"./FileOutlined-D7BA2Wzc.js";import"./EllipsisOutlined-s7HDbncb.js";import"./reactNode-YZyB0fSW.js";import"./index-C0E5mTIL.js";import"./index-DKf5dGJ8.js";import"./index-DWBXlUQ9.js";import"./index-c1lh1W_0.js";import"./EyeOutlined-zNgE7p6U.js";import"./context-Drk5sGSy.js";const F=()=>t.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M19 19C19.5523 19 20 19.4477 20 20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20C4 19.4477 4.44772 19 5 19H19ZM18.003 3.58492L19.4151 4.99703C20.195 5.77692 20.195 7.04137 19.4151 7.82126L11.1778 16.0586C11.025 16.2114 10.8268 16.3105 10.6129 16.341L6 17L6.65899 12.3871C6.68954 12.1732 6.78864 11.975 6.94141 11.8222L15.1787 3.58492C15.9586 2.80503 17.2231 2.80503 18.003 3.58492ZM16.5909 4.99703L8.58911 12.9988L8.35399 14.646L10.0012 14.4109L18.003 6.40914L16.5909 4.99703Z",fill:"var(--priv-primary)"})}),A=()=>t.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M18 8V19C18 20.1046 17.1046 21 16 21H8C6.89543 21 6 20.1046 6 19V8H18ZM16 10H8V19H16V10ZM12 3C12.5523 3 13 3.44772 13 4V5H18C18.5523 5 19 5.44772 19 6C19 6.55228 18.5523 7 18 7H6C5.44772 7 5 6.55228 5 6C5 5.44772 5.44772 5 6 5H11V4C11 3.44772 11.4477 3 12 3Z",fill:"var(--priv-primary)"})}),dt=()=>{const g=j(),[x,n]=v.useState(!1),{locale:h}=b(),e=p[h.locale]||p.es,o=[{key:"1",name:"John",date:"2022-01-20",quantity:30,image:"https://i.pravatar.cc/150?img=3"},{key:"2",name:"Jane",date:"2022-02-15",quantity:45,image:"https://i.pravatar.cc/150?img=2"},{key:"3",name:"Alice",date:"2022-03-10",quantity:60,image:"https://i.pravatar.cc/150?img=1"},{key:"4",name:"Bob",date:"2022-04-05",quantity:20,image:"https://i.pravatar.cc/150?img=4"},{key:"5",name:"Charlie",date:"2022-05-01",quantity:55,image:"https://i.pravatar.cc/150?img=5"},{key:"6",name:"David",date:"2022-06-25",quantity:40,image:"https://i.pravatar.cc/150?img=6"},{key:"7",name:"Eva",date:"2022-07-20",quantity:75,image:"https://i.pravatar.cc/150?img=3"},{key:"8",name:"Frank",date:"2022-08-15",quantity:50,image:"https://i.pravatar.cc/150?img=3"},{key:"9",name:"Grace",date:"2022-09-10",quantity:35,image:"https://i.pravatar.cc/150?img=3"},{key:"10",name:"Harry",date:"2022-10-05",quantity:25,image:"https://i.pravatar.cc/150?img=3"},{key:"11",name:"Ivy",date:"2022-11-01",quantity:65,image:"https://i.pravatar.cc/150?img=3"},{key:"12",name:"Jack",date:"2022-12-25",quantity:42,image:"https://i.pravatar.cc/150?img=3"},{key:"13",name:"Karen",date:"2023-01-20",quantity:58,image:"https://i.pravatar.cc/150?img=3"},{key:"14",name:"Leo",date:"2023-02-15",quantity:22,image:"https://i.pravatar.cc/150?img=3"},{key:"15",name:"Mia",date:"2023-03-10",quantity:47,image:"https://i.pravatar.cc/150?img=3"}],y=[{title:e.subscriptions.columns.image,dataIndex:"image",render:(a,i)=>t.jsx("img",{src:a,alt:`Image of ${i.name}`,style:{width:50,height:50}})},{title:e.subscriptions.columns.name,dataIndex:"name",sorter:{compare:(a,i)=>a.name.localeCompare(i.name),multiple:3}},{title:e.subscriptions.columns.date,dataIndex:"date",sorter:{compare:(a,i)=>m(a.date).unix()-m(i.date).unix(),multiple:2}},{title:e.subscriptions.columns.quantity,dataIndex:"quantity",sorter:{compare:(a,i)=>a.quantity-i.quantity,multiple:1}},{title:e.subscriptions.columns.actions,dataIndex:"accion",render:(a,i)=>t.jsxs(r,{justify:"center",style:{gap:"10px"},children:[t.jsx(d,{style:{padding:"8px 6px",display:"flex",justifyContent:"center",alignItems:"center"},onClick:()=>{g(`/dashboard/suscripciones/${i.key}`)},children:t.jsx(F,{})}),t.jsx(d,{style:{padding:"8px 6px",display:"flex",justifyContent:"center",alignItems:"center"},onClick:()=>{s.fire({title:e.subscriptions.titleAlertModal,text:e.subscriptions.messageAlertModal,icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:e.subscriptions.confirmButtonText}).then(C=>{C.isConfirmed&&s.fire({title:e.subscriptions.titleModalConfirm,text:e.subscriptions.messageModalConfirm,icon:"success"})})},children:t.jsx(A,{})})]})}];let l;function f(){clearTimeout(l),l=setTimeout(()=>{H.info("This will be implemented")},600)}return t.jsxs("div",{children:[t.jsx(I,{haveOnOK:!1,haveOnCancel:!0,title:e.subscriptions.modal.title,visible:x,onClose:()=>n(!1),content:t.jsx(t.Fragment,{children:t.jsxs(r,{gutter:[20,20],style:{padding:"20px 0px"},children:[t.jsx(c,{xs:24,lg:24,children:t.jsxs(S,{name:"email",rules:[{type:"email",required:!0,message:e.subscriptions.modal.messages.emailRequired}],children:[t.jsx("label",{htmlFor:"email",style:{color:"#5A607F",fontSize:"14px",fontWeight:"400"},children:e.subscriptions.modal.labels.email}),t.jsx(u,{size:"large",style:{width:"100%"},placeholder:e.subscriptions.modal.labels.email})]})}),t.jsx(c,{xs:24,lg:24,children:t.jsx(r,{justify:"center",children:t.jsx(B,{title:t.jsxs(t.Fragment,{children:[t.jsx(w,{})," ",e.subscriptions.modal.buttons.giftSubscription]}),type:"primary",onClick:()=>{s.fire({title:e.subscriptions.modal.messages.emailSentTitle,text:e.subscriptions.modal.messages.emailSentMessage,icon:"success"})}})})})]})})}),t.jsx(k,{titlePrimaryButton:t.jsx("p",{style:{display:"flex",alignItems:"center"},children:e.subscriptions.header.exportButton}),primaryButton:!0,metodoPrimaryButton:()=>{q(o)},titlePage:e.subscriptions.header.title,giftSuscription:!0,titleGiftSuscription:e.subscriptions.header.titleGiftSubscription,metodoGiftSuscription:()=>{n(!0)}}),t.jsxs(T,{style:{width:"100%",marginTop:"20px"},children:[t.jsxs("section",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("div",{style:{display:"flex",gap:"12px"},children:t.jsx(u,{style:{minWidth:"40%",height:"40px"},size:"large",placeholder:e.subscriptions.searchPlaceholder,prefix:t.jsx(L,{}),onChange:f})}),t.jsx("div",{style:{display:"flex",gap:"12px",alignItems:"center"}})]}),t.jsx("section",{style:{marginTop:"30px"},children:t.jsx(M,{columns:y,data:o,isRowSelection:!1})})]})]})};export{dt as default};
