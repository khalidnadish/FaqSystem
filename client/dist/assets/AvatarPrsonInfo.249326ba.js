import{k,l as R,s as T,n as g,r as v,u as D,o as G,p as I,j as e,q as F,a as n,B as s,G as i,F as b,a6 as _,A as y,T as h}from"./index.cd13aaad.js";import{C as l}from"./Chip.40423109.js";import{D as f}from"./Divider.fa45e189.js";import{B as c,G as B}from"./antd.ecc08398.js";import{d as N}from"./FaqCards.5535c048.js";import{T as w}from"./Tooltip.82164194.js";import{V as j}from"./index.esm.00da1d53.js";import{u as O}from"./useAxiosToGetData.92cd78d2.js";import"./dividerClasses.6d8aee9f.js";import"./Favorite.2f8d0d2d.js";import"./CardContent.ce352cf2.js";import"./CardHeader.95e06777.js";import"./Badge.c07f745a.js";function U(o){return k("MuiCardMedia",o)}R("MuiCardMedia",["root","media","img"]);const E=["children","className","component","image","src","style"],V=o=>{const{classes:r,isMediaComponent:t,isImageComponent:a}=o;return I({root:["root",t&&"media",a&&"img"]},U,r)},q=T("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(o,r)=>{const{ownerState:t}=o,{isMediaComponent:a,isImageComponent:d}=t;return[r.root,a&&r.media,d&&r.img]}})(({ownerState:o})=>g({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},o.isMediaComponent&&{width:"100%"},o.isImageComponent&&{objectFit:"cover"})),$=["video","audio","picture","iframe","img"],H=["picture","img"],Q=v.exports.forwardRef(function(r,t){const a=D({props:r,name:"MuiCardMedia"}),{children:d,className:p,component:m="div",image:u,src:P,style:C}=a,S=G(a,E),x=$.indexOf(m)!==-1,A=!x&&u?g({backgroundImage:`url("${u}")`},C):C,M=g({},a,{component:m,isMediaComponent:x,isImageComponent:H.indexOf(m)!==-1}),z=V(M);return e(q,g({className:F(z.root,p),as:m,role:!x&&u?"img":void 0,ref:t,style:A,ownerState:M,src:x?u||P:void 0},S,{children:d}))});var J=Q;const L=({})=>e(l,{color:"warning",size:"small",sx:{width:"100%",borderRadius:"8px"},label:"Reporting"}),W=({})=>e(l,{color:"warning",size:"small",sx:{width:"100%",borderRadius:"8px"},label:"Vote"}),K=({dataIsLoading:o})=>n(s,{sx:{width:"100%",padding:"5px"},children:[e(f,{sx:{marginBottom:"10px",marginTop:"10px"},children:"hepl pls!"}),n(i,{container:!0,spacing:1,children:[e(i,{item:!0,xs:12,children:o&&e(L,{})}),e(i,{item:!0,xs:12,children:o&&e(W,{})})]})]}),X=({})=>e(l,{color:"warning",size:"small",sx:{width:"100%",borderRadius:"8px"},label:"Message"}),Y=({})=>e(l,{color:"warning",size:"small",sx:{width:"100%",borderRadius:"8px"},label:"Follw"}),Z=({dataIsLoading:o})=>n(s,{sx:{width:"100%",padding:"5px"},children:[e(f,{sx:{marginBottom:"10px",marginTop:"10px"},children:"Take Action"}),n(i,{container:!0,spacing:1,children:[e(i,{item:!0,xs:12,children:o&&e(Y,{})}),e(i,{item:!0,xs:12,children:o&&e(X,{})})]})]}),ee=({following:o})=>e(c,{count:o,offset:[0,0],status:"blue",children:e(l,{color:"primary",sx:{padding:"10px","& .MuiChip-label":{color:"background.paper",fontSize:"1rem",padding:"5px",margin:"5px"}},label:"Following"})}),oe=({follower:o})=>e(c,{count:o,offset:[0,0],status:"blue",children:e(l,{color:"primary",sx:{padding:"10px","& .MuiChip-label":{color:"background.paper",fontSize:"1rem",padding:"5px",margin:"5px"}},label:"Followers"})}),re=({answer:o})=>e(c,{count:o,offset:[-10,1],status:"blue",children:e(w,{title:"Reply count",children:e(l,{color:"info",size:"large",variant:"outlined",icon:e(N,{size:25}),label:"A",sx:{padding:"10px","& .MuiChip-label":{color:"info.main",fontSize:"1rem",padding:"5px",margin:"5px"}}})})}),te=({quastion:o})=>e(c,{count:o,offset:[-10,1],status:"primary",children:e(w,{title:"Posted Msg",children:e(l,{color:"warning",size:"large",variant:"outlined",icon:e(B,{size:25}),label:"Q",sx:{padding:"10px","& .MuiChip-label":{color:"warning.main",fontSize:"1rem",padding:"5px",margin:"5px"}}})})}),ie=({showModal:o,setShowModal:r,children:t})=>e(b,{children:e(_,{open:o,onClose:()=>r(!1),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:t})}),ne={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,minHeight:"30vh",bgcolor:"background.paper",border:"2px solid ",borderColor:"primary.light",boxShadow:24,borderRadius:"8px"},ae={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"100%",bgcolor:"warning.main",boxShadow:6,height:"60px",color:"background.paper"},se=({avatarSrc:o,username:r,cr_date:t})=>e(s,{sx:ne,children:e(s,{sx:{position:"relative"},children:n(s,{sx:ae,children:[e(y,{sx:{width:"80px",height:"80px",position:"absolute",top:"-40px",left:"15px",border:"7px solid white"},src:o}),n(s,{sx:{position:"absolute",left:"110px"},children:[e(h,{children:r}),e(h,{children:t})]}),e(s,{mt:10,children:e(l,{label:"sdsd1",color:"primary"})})]})})}),le=({category:o,avatarSrc:r,username:t,cr_date:a})=>{console.log(r,t,a);const[d,p]=v.exports.useState(!1);return n(b,{children:[e(c,{count:o,offset:[-10,1],status:"success",children:e(w,{title:"Group Joining",children:e(l,{color:"success",onClick:()=>p(!0),icon:e(j,{size:25}),label:"G",variant:"outlined",sx:{padding:"10px","& .MuiChip-label":{color:"success.main",fontSize:"1rem",padding:"5px",margin:"5px"}}})})}),d&&e(ie,{setShowModal:p,showModal:d,children:e(se,{avatarSrc:r,username:t,cr_date:a})})]})},de=({avatar:o})=>e(y,{src:o,"aria-label":"recipe",sx:{width:"80px",height:"80px",position:"absolute",top:"-20px",right:"15px",border:"4px solid white"}}),ce=({Username:o,joinindDate:r})=>n(s,{sx:{postion:"absolute",top:"10px",right:"10px",bgcolor:"warning.main",color:"background.paper",padding:"3px",display:"flex",flexDirection:"column",alignItems:"flex-start"},children:[e(h,{variant:"body2",children:o}),n(h,{variant:"caption",children:[" ",new Date(r).toDateString()," "]})]});function Pe({userid:o}){const{data:r,dataIsLoading:t}=O(`http://localhost:3001/person/${o}`);return n(b,{children:[t&&e(J,{component:"img",height:"194",image:r[0].avatar,alt:"Paella dish"}),n(s,{sx:{position:"relative"},children:[t&&e(de,{avatar:r[0].avatar}),t&&e(ce,{Username:r[0].username,joinindDate:r[0].create_time})]}),n(s,{sx:{padding:"10px",width:"280px",margin:"auto",mt:0},children:[e(f,{sx:{marginBottom:"10px"},children:"Info"}),n(i,{container:!0,spacing:1,children:[e(i,{item:!0,xs:4,children:t&&e(le,{category:r[0].category,avatarSrc:r[0].avatar,username:r[0].username,cr_date:r[0].create_time})}),e(i,{item:!0,xs:4,children:t&&e(te,{quastion:r[0].quastion})}),e(i,{item:!0,xs:4,children:t&&e(re,{answer:r[0].answer})}),e(i,{item:!0,xs:12,children:n(i,{container:!0,direction:"row",mt:1,children:[e(i,{item:!0,xs:6,children:t&&e(oe,{follower:r[0].follower})}),e(i,{item:!0,xs:6,children:t&&e(ee,{following:r[0].following1})})]})})]}),e(Z,{dataIsLoading:t}),e(K,{dataIsLoading:t})]})]})}export{Pe as default};
