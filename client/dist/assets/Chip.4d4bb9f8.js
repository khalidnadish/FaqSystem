import{a4 as q,j as O,k as G,l as J,s as U,m as e,y as p,n as u,r as b,u as Q,o as X,w as Y,p as Z,t as E,q as g,a as h}from"./index.3512a218.js";var w=q(O("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel");function aa(a){return G("MuiChip",a)}const oa=J("MuiChip",["root","sizeSmall","sizeMedium","colorPrimary","colorSecondary","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","focusVisible"]);var l=oa;const la=["avatar","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant"],ea=a=>{const{classes:o,disabled:i,size:r,color:t,onDelete:C,clickable:n,variant:s}=a,$={root:["root",s,i&&"disabled",`size${e(r)}`,`color${e(t)}`,n&&"clickable",n&&`clickableColor${e(t)}`,C&&"deletable",C&&`deletableColor${e(t)}`,`${s}${e(t)}`],label:["label",`label${e(r)}`],avatar:["avatar",`avatar${e(r)}`,`avatarColor${e(t)}`],icon:["icon",`icon${e(r)}`,`iconColor${e(t)}`],deleteIcon:["deleteIcon",`deleteIcon${e(r)}`,`deleteIconColor${e(t)}`,`deleteIconOutlinedColor${e(t)}`]};return Z($,aa,o)},ra=U("div",{name:"MuiChip",slot:"Root",overridesResolver:(a,o)=>{const{ownerState:i}=a,{color:r,clickable:t,onDelete:C,size:n,variant:s}=i;return[{[`& .${l.avatar}`]:o.avatar},{[`& .${l.avatar}`]:o[`avatar${e(n)}`]},{[`& .${l.avatar}`]:o[`avatarColor${e(r)}`]},{[`& .${l.icon}`]:o.icon},{[`& .${l.icon}`]:o[`icon${e(n)}`]},{[`& .${l.icon}`]:o[`iconColor${e(r)}`]},{[`& .${l.deleteIcon}`]:o.deleteIcon},{[`& .${l.deleteIcon}`]:o[`deleteIcon${e(n)}`]},{[`& .${l.deleteIcon}`]:o[`deleteIconColor${e(r)}`]},{[`& .${l.deleteIcon}`]:o[`deleteIconOutlinedColor${e(r)}`]},o.root,o[`size${e(n)}`],o[`color${e(r)}`],t&&o.clickable,t&&r!=="default"&&o[`clickableColor${e(r)})`],C&&o.deletable,C&&r!=="default"&&o[`deletableColor${e(r)}`],o[s],s==="outlined"&&o[`outlined${e(r)}`]]}})(({theme:a,ownerState:o})=>{const i=p(a.palette.text.primary,.26),r=a.palette.mode==="light"?a.palette.grey[700]:a.palette.grey[300];return u({maxWidth:"100%",fontFamily:a.typography.fontFamily,fontSize:a.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:(a.vars||a).palette.text.primary,backgroundColor:(a.vars||a).palette.action.selected,borderRadius:32/2,whiteSpace:"nowrap",transition:a.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box",[`&.${l.disabled}`]:{opacity:(a.vars||a).palette.action.disabledOpacity,pointerEvents:"none"},[`& .${l.avatar}`]:{marginLeft:5,marginRight:-6,width:24,height:24,color:a.vars?a.vars.palette.Chip.defaultAvatarColor:r,fontSize:a.typography.pxToRem(12)},[`& .${l.avatarColorPrimary}`]:{color:(a.vars||a).palette.primary.contrastText,backgroundColor:(a.vars||a).palette.primary.dark},[`& .${l.avatarColorSecondary}`]:{color:(a.vars||a).palette.secondary.contrastText,backgroundColor:(a.vars||a).palette.secondary.dark},[`& .${l.avatarSmall}`]:{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:a.typography.pxToRem(10)},[`& .${l.icon}`]:u({color:a.vars?a.vars.palette.Chip.defaultIconColor:r,marginLeft:5,marginRight:-6},o.size==="small"&&{fontSize:18,marginLeft:4,marginRight:-4},o.color!=="default"&&{color:"inherit"}),[`& .${l.deleteIcon}`]:u({WebkitTapHighlightColor:"transparent",color:a.vars?`rgba(${a.vars.palette.text.primaryChannel} / 0.26)`:i,fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:a.vars?`rgba(${a.vars.palette.text.primaryChannel} / 0.4)`:p(i,.4)}},o.size==="small"&&{fontSize:16,marginRight:4,marginLeft:-4},o.color!=="default"&&{color:a.vars?`rgba(${a.vars.palette[o.color].contrastTextChannel} / 0.7)`:p(a.palette[o.color].contrastText,.7),"&:hover, &:active":{color:(a.vars||a).palette[o.color].contrastText}})},o.size==="small"&&{height:24},o.color!=="default"&&{backgroundColor:(a.vars||a).palette[o.color].main,color:(a.vars||a).palette[o.color].contrastText},o.onDelete&&{[`&.${l.focusVisible}`]:{backgroundColor:a.vars?`rgba(${a.vars.palette.action.selectedChannel} / calc(${a.vars.palette.action.selectedOpacity+a.vars.palette.action.focusOpacity}))`:p(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)}},o.onDelete&&o.color!=="default"&&{[`&.${l.focusVisible}`]:{backgroundColor:(a.vars||a).palette[o.color].dark}})},({theme:a,ownerState:o})=>u({},o.clickable&&{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:a.vars?`rgba(${a.vars.palette.action.selectedChannel} / calc(${a.vars.palette.action.selectedOpacity+a.vars.palette.action.hoverOpacity}))`:p(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity)},[`&.${l.focusVisible}`]:{backgroundColor:a.vars?`rgba(${a.vars.palette.action.selectedChannel} / calc(${a.vars.palette.action.selectedOpacity+a.vars.palette.action.focusOpacity}))`:p(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)},"&:active":{boxShadow:(a.vars||a).shadows[1]}},o.clickable&&o.color!=="default"&&{[`&:hover, &.${l.focusVisible}`]:{backgroundColor:(a.vars||a).palette[o.color].dark}}),({theme:a,ownerState:o})=>u({},o.variant==="outlined"&&{backgroundColor:"transparent",border:a.vars?`1px solid ${a.vars.palette.Chip.defaultBorder}`:`1px solid ${a.palette.mode==="light"?a.palette.grey[400]:a.palette.grey[700]}`,[`&.${l.clickable}:hover`]:{backgroundColor:(a.vars||a).palette.action.hover},[`&.${l.focusVisible}`]:{backgroundColor:(a.vars||a).palette.action.focus},[`& .${l.avatar}`]:{marginLeft:4},[`& .${l.avatarSmall}`]:{marginLeft:2},[`& .${l.icon}`]:{marginLeft:4},[`& .${l.iconSmall}`]:{marginLeft:2},[`& .${l.deleteIcon}`]:{marginRight:5},[`& .${l.deleteIconSmall}`]:{marginRight:3}},o.variant==="outlined"&&o.color!=="default"&&{color:(a.vars||a).palette[o.color].main,border:`1px solid ${a.vars?`rgba(${a.vars.palette[o.color].mainChannel} / 0.7)`:p(a.palette[o.color].main,.7)}`,[`&.${l.clickable}:hover`]:{backgroundColor:a.vars?`rgba(${a.vars.palette[o.color].mainChannel} / ${a.vars.palette.action.hoverOpacity})`:p(a.palette[o.color].main,a.palette.action.hoverOpacity)},[`&.${l.focusVisible}`]:{backgroundColor:a.vars?`rgba(${a.vars.palette[o.color].mainChannel} / ${a.vars.palette.action.focusOpacity})`:p(a.palette[o.color].main,a.palette.action.focusOpacity)},[`& .${l.deleteIcon}`]:{color:a.vars?`rgba(${a.vars.palette[o.color].mainChannel} / 0.7)`:p(a.palette[o.color].main,.7),"&:hover, &:active":{color:(a.vars||a).palette[o.color].main}}})),ca=U("span",{name:"MuiChip",slot:"Label",overridesResolver:(a,o)=>{const{ownerState:i}=a,{size:r}=i;return[o.label,o[`label${e(r)}`]]}})(({ownerState:a})=>u({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},a.size==="small"&&{paddingLeft:8,paddingRight:8}));function S(a){return a.key==="Backspace"||a.key==="Delete"}const ta=b.exports.forwardRef(function(o,i){const r=Q({props:o,name:"MuiChip"}),{avatar:t,className:C,clickable:n,color:s="default",component:$,deleteIcon:f,disabled:R=!1,icon:y,label:j,onClick:P,onDelete:v,onKeyDown:m,onKeyUp:D,size:L="medium",variant:T="filled"}=r,B=X(r,la),k=b.exports.useRef(null),W=Y(k,i),N=c=>{c.stopPropagation(),v&&v(c)},F=c=>{c.currentTarget===c.target&&S(c)&&c.preventDefault(),m&&m(c)},_=c=>{c.currentTarget===c.target&&(v&&S(c)?v(c):c.key==="Escape"&&k.current&&k.current.blur()),D&&D(c)},x=n!==!1&&P?!0:n,A=L==="small",I=x||v?E:$||"div",z=u({},r,{component:I,disabled:R,size:L,color:s,onDelete:!!v,clickable:x,variant:T}),d=ea(z),H=I===E?u({component:$||"div",focusVisibleClassName:d.focusVisible},v&&{disableRipple:!0}):{};let V=null;if(v){const c=g(s!=="default"&&(T==="outlined"?d[`deleteIconOutlinedColor${e(s)}`]:d[`deleteIconColor${e(s)}`]),A&&d.deleteIconSmall);V=f&&b.exports.isValidElement(f)?b.exports.cloneElement(f,{className:g(f.props.className,d.deleteIcon,c),onClick:N}):O(w,{className:g(d.deleteIcon,c),onClick:N})}let M=null;t&&b.exports.isValidElement(t)&&(M=b.exports.cloneElement(t,{className:g(d.avatar,t.props.className)}));let K=null;return y&&b.exports.isValidElement(y)&&(K=b.exports.cloneElement(y,{className:g(d.icon,y.props.className)})),h(ra,u({as:I,className:g(d.root,C),disabled:x&&R?!0:void 0,onClick:P,onKeyDown:F,onKeyUp:_,ref:W,ownerState:z},H,B,{children:[M||K,O(ca,{className:g(d.label),ownerState:z,children:j}),V]}))});var na=ta;export{na as C};
