import{k as R,l as N,s as c,n,r as P,u as M,o as w,p as S,T as l,j as i,a as v,q as j}from"./index.cd13aaad.js";function A(a){return R("MuiCardHeader",a)}const U=N("MuiCardHeader",["root","avatar","action","content","title","subheader"]);var C=U;const $=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],k=a=>{const{classes:e}=a;return S({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},A,e)},_=c("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(a,e)=>n({[`& .${C.title}`]:e.title,[`& .${C.subheader}`]:e.subheader},e.root)})({display:"flex",alignItems:"center",padding:16}),q=c("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(a,e)=>e.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),B=c("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(a,e)=>e.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),I=c("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(a,e)=>e.content})({flex:"1 1 auto"}),L=P.exports.forwardRef(function(e,h){const p=M({props:e,name:"MuiCardHeader"}),{action:m,avatar:d,className:b,component:y="div",disableTypography:u=!1,subheader:g,subheaderTypographyProps:H,title:f,titleTypographyProps:x}=p,T=w(p,$),r=n({},p,{component:y,disableTypography:u}),t=k(r);let s=f;s!=null&&s.type!==l&&!u&&(s=i(l,n({variant:d?"body2":"h5",className:t.title,component:"span",display:"block"},x,{children:s})));let o=g;return o!=null&&o.type!==l&&!u&&(o=i(l,n({variant:d?"body2":"body1",className:t.subheader,color:"text.secondary",component:"span",display:"block"},H,{children:o}))),v(_,n({className:j(t.root,b),as:y,ref:h,ownerState:r},T,{children:[d&&i(q,{className:t.avatar,ownerState:r,children:d}),v(I,{className:t.content,ownerState:r,children:[s,o]}),m&&i(B,{className:t.action,ownerState:r,children:m})]}))});var z=L;export{z as C};