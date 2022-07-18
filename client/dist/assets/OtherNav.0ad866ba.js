import{e as A,i as G,f as R,J as T,G as i,r as n,_ as f,a as h,F as Y,j as e,B as P,P as I,E as L,I as l}from"./index.cd13aaad.js";import{F as O}from"./MyRoutes.a5acc5f9.js";import{G as j,B as s}from"./antd.ecc08398.js";import{a as C,b as D,c as E}from"./index.esm.49ca2aef.js";import{a as $,b as q}from"./index.esm.9ff3d9d2.js";import{d as Q}from"./Favorite.2f8d0d2d.js";import{V}from"./index.esm.00da1d53.js";import{u as d}from"./useAxiosToGetData.92cd78d2.js";import{C as F}from"./Chip.40423109.js";import{T as c}from"./Tooltip.82164194.js";var x={},W=G.exports;Object.defineProperty(x,"__esModule",{value:!0});var z=x.default=void 0,B=W(A),M=R,U=(0,B.default)((0,M.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility");z=x.default=U;const H=()=>{const{data:t,dataIsLoading:o}=d("/Category/CategoryCount");if(o)return t[0].GroupRecord},N=t=>{const{data:o,dataIsLoading:r}=d(`/category/CategoryCountYouFollow/${t}`);if(r)return o[0].GroupCountYouFollow},J=t=>{const{data:o,dataIsLoading:r}=d(`/user/PepoleYouFollow/${t}`);if(r)return o[0].PepoleYouFollow},K=t=>{const{data:o,dataIsLoading:r}=d(`/user/PepoleFollowinYouCount/${t}`);if(r)return o[0].PepoleYouFollow},X=t=>{const{data:o,dataIsLoading:r}=d(`/faq/favoriteQuation/${t}`);if(r)return o[0].favoritequation},u=T(i)({borderColor:"rgba(0, 0, 0, 0.12)"}),v=n.exports.lazy(()=>f(()=>import("./index.cd13aaad.js").then(function(t){return t.aE}),["assets/index.cd13aaad.js","assets/index.c555f0e5.css"])),Z=n.exports.lazy(()=>f(()=>import("./Category.151b39b6.js"),["assets/Category.151b39b6.js","assets/index.cd13aaad.js","assets/index.c555f0e5.css","assets/index.esm.49ca2aef.js","assets/MyRoutes.a5acc5f9.js","assets/index.esm.00da1d53.js","assets/useAxiosToGetData.92cd78d2.js","assets/ListSubheader.71eb7b59.js","assets/Stack.883c3380.js","assets/Chip.40423109.js","assets/ListItemText.7993ba81.js","assets/listItemTextClasses.3183a848.js"])),ee=n.exports.lazy(()=>f(()=>import("./PepoleYouFollow.1f4d3000.js"),["assets/PepoleYouFollow.1f4d3000.js","assets/index.cd13aaad.js","assets/index.c555f0e5.css","assets/MyRoutes.a5acc5f9.js","assets/index.esm.f63edcd1.js","assets/index.esm.49ca2aef.js","assets/useAxiosToGetData.92cd78d2.js","assets/Drawer.ebc2332c.js","assets/Divider.fa45e189.js","assets/dividerClasses.6d8aee9f.js","assets/Stack.883c3380.js","assets/index.esm.9ff3d9d2.js","assets/ListSubheader.71eb7b59.js","assets/Chip.40423109.js","assets/ListItemText.7993ba81.js","assets/listItemTextClasses.3183a848.js"])),_=n.exports.lazy(()=>f(()=>import("./LeftDrawer.0a0c71d0.js"),["assets/LeftDrawer.0a0c71d0.js","assets/index.cd13aaad.js","assets/index.c555f0e5.css","assets/Drawer.ebc2332c.js"]));function ve({userId:t}){const[o,r]=n.exports.useState(!1),[a,g]=n.exports.useState(!1),[w,p]=n.exports.useState("/category"),[y,m]=n.exports.useState("all"),{setFaqUrl:k,faqInfo:b}=n.exports.useContext(O),S=()=>{k("/faq")};return h(Y,{children:[e(P,{sx:{position:"relative"},children:e(I,{elevation:15,sx:{justifyContent:"space-between",padding:"10px",width:"100%",alignItems:"center",position:"absolute",top:-19},children:h(i,{container:!0,direction:"row",justifyContent:"center",alignItems:"center",spacing:1,children:[e(i,{item:!0,xs:12,md:6,children:h(i,{container:!0,direction:"row",justifyContent:"center",alignItems:"center",columns:16,children:[e(i,{item:!0,xs:5,sm:5,align:"center",children:e(te,{titleName:b.titleName})}),e(i,{item:!0,xs:5,sm:5,align:"center",children:e(oe,{conter:b.recordsCount})}),e(i,{item:!0,xs:6,sm:6,align:"center",children:e(re,{handleShowAllFAQ:S})})]})}),e(i,{item:!0,xs:12,md:6,align:"center",children:h(i,{container:!0,direction:"row",justifyContent:"center",alignItems:"center",columns:14,children:[e(i,{item:!0,xs:2,md:2,children:e(ie,{userId:t})}),e(i,{item:!0,xs:2,md:2,children:e(le,{setOpenUsers:r,setdataToshow:p,setTypeOfShow:m,userId:t})}),e(u,{item:!0,xs:2,md:2,align:"center",children:e(ae,{setOpenUsers:r,setdataToshow:p,setTypeOfShow:m,userId:t})}),e(u,{item:!0,xs:2,md:2,align:"center",children:e(ne,{})}),e(u,{item:!0,xs:2,md:2,align:"center",children:e(se,{})}),e(u,{item:!0,xs:2,md:2,align:"center",children:e(ce,{setOpenGroups:g,setdataToshow:p,setTypeOfShow:m,userId:t})}),e(u,{item:!0,xs:2,md:2,align:"center",children:e(ue,{setOpenGroups:g,setdataToshow:p,setTypeOfShow:m})})]})})]})})}),o&&e(n.exports.Suspense,{fallback:e(v,{}),children:e(_,{open:o,setOpen:r,drawerWidth:240,anchor:"left",drHight:"100vh",children:e(ee,{whatToshow:w,typeOfShow:y})})}),a&&e(n.exports.Suspense,{fallback:e(v,{}),children:e(_,{open:a,setOpen:g,drawerWidth:240,anchor:"left",drHight:"103ed 0vh",children:e(Z,{whatToshow:w,typeOfShow:y})})})]})}function te({titleName:t}){return e(F,{label:t,icon:e(C,{size:15,sx:{marginRight:{xs:"0px",sm:"0px",md:"7px"}}}),color:"primary",size:"small",sx:{color:"primary",width:"90%"},variant:"outlined"})}function oe({conter:t}){return e(F,{label:t,size:"small",icon:e(j,{size:20,style:{}}),sx:{color:"primary",width:"90%"},variant:"outlined"})}function re({handleShowAllFAQ:t}){return e(L,{color:"secondary",onClick:()=>t(),startIcon:e(z,{}),size:"small",variant:"contained",fullWidth:!0,sx:{color:"background.paper",borderRadius:28,minHeight:0,minWidth:0,padding:0},children:"Show all"})}function ie({userId:t}){return e(s,{size:"small",count:X(t),offset:[0,4],status:"success",title:"peple you track",children:e(c,{title:"Favorite Question",children:e(l,{color:"warning",size:"small",variant:"outlined",disableRipple:!0,sx:{color:"background.paper",bgcolor:"warning.dark"},children:e(Q,{fontSize:"small"})})})})}function ne({}){return e(s,{size:"small",count:999,offset:[0,5],status:"warning",children:e(c,{title:"Most populer Question",children:e(l,{color:"primary",size:"small",variant:"outlined",disableRipple:!0,sx:{color:"background.paper",bgcolor:"primary.light"},children:e(D,{})})})})}function ae({setOpenUsers:t,userId:o,setdataToshow:r,setTypeOfShow:a}){return e(s,{size:"small",count:J(o),offset:[0,5],status:"red",children:e(c,{title:"following",children:e(l,{variant:"outlined",sx:{color:"background.paper",bgcolor:"primary.light"},color:"primary",size:"small",disableRipple:!0,onClick:()=>{t(!0),r(`/user/showflower/${o}`),a("following")},children:e(E,{})})})})}function le({setOpenUsers:t,userId:o,setdataToshow:r,setTypeOfShow:a}){return e(s,{size:"small",count:K(o),offset:[0,5],status:"red",children:e(c,{title:"Followers",children:e(l,{color:"primary",size:"small",variant:"outlined",disableRipple:!0,onClick:()=>{t(!0),r(`/user/showWhosFollowing/${o}`),a("Followers")},sx:{color:"background.paper",bgcolor:"primary.light"},children:e($,{})})})})}function se({}){return e(s,{size:"small",count:20,offset:[0,5],status:"warning",children:e(c,{title:"Question's You Will Like It",children:e(l,{color:"primary",size:"small",variant:"outlined",disableRipple:!0,sx:{color:"background.paper",bgcolor:"primary.light"},children:e(q,{})})})})}function ce({setOpenGroups:t,setdataToshow:o,userId:r,setTypeOfShow:a}){return e(s,{size:"small",count:N(r),offset:[0,5],status:"blue",children:e(c,{title:"WorkSpace You Track",children:e(l,{variant:"outlined",sx:{color:"background.paper",bgcolor:"primary.light"},color:"primary",size:"small",disableRipple:!0,onClick:()=>{o(`/category/getUserCategory/${r}`),t(!0),a("tracking")},children:e(V,{})})})})}function ue({setOpenGroups:t,setdataToshow:o,setTypeOfShow:r}){return e(s,{size:"small",count:H(),offset:[0,5],status:"success",overflowCount:999,children:e(c,{title:"WorkSpace You Track",children:e(l,{variant:"outlined",sx:{color:"background.paper",bgcolor:"primary.light"},color:"primary",size:"small",disableRipple:!0,onClick:()=>{o("/category"),t(!0),r("all")},children:e(C,{})})})})}export{ve as default};
