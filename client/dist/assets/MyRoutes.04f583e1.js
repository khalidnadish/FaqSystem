import{r as c,j as d,U as me,O as ve,N as ge,R as be,_ as B,a as k,F as he,b as xe,c as ye,d as E,L as _e}from"./index.3512a218.js";const W=c.exports.createContext();W.displayName="FAQContext>>>";const Oe=e=>{const[t,n]=c.exports.useState("ALL"),[a,o]=c.exports.useState(0),[s,r]=c.exports.useState("showallFaq"),[i,u]=c.exports.useState(0),[l,b]=c.exports.useState("/faq"),[g,_]=c.exports.useState({titleName:"All Faq",recordsCount:0});return d(W.Provider,{value:{filterByCategory:t,setfilterByCategory:n,filterCode:s,setFilterCode:r,filterId:i,setFilterId:u,faqUrl:l,setFaqUrl:b,faqInfo:g,setFaqInfo:_,setFaqCount:o,faqCount:a},children:e.children})};let Te={data:""},Se=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||Te,Ae=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Ee=/\/\*[^]*?\*\/|  +/g,H=/\n+/g,O=(e,t)=>{let n="",a="",o="";for(let s in e){let r=e[s];s[0]=="@"?s[1]=="i"?n=s+" "+r+";":a+=s[1]=="f"?O(r,s):s+"{"+O(r,s[1]=="k"?"":t)+"}":typeof r=="object"?a+=O(r,t?t.replace(/([^,])+/g,i=>s.replace(/(^:.*)|([^,])+/g,u=>/&/.test(u)?u.replace(/&/g,i):i?i+" "+u:u)):s):r!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=O.p?O.p(s,r):s+":"+r+";")}return n+(t&&o?t+"{"+o+"}":o)+a},j={},Y=e=>{if(typeof e=="object"){let t="";for(let n in e)t+=n+Y(e[n]);return t}return e},je=(e,t,n,a,o)=>{let s=Y(e),r=j[s]||(j[s]=(i=>{let u=0,l=11;for(;u<i.length;)l=101*l+i.charCodeAt(u++)>>>0;return"go"+l})(s));if(!j[r]){let i=s!==e?e:(u=>{let l,b,g=[{}];for(;l=Ae.exec(u.replace(Ee,""));)l[4]?g.shift():l[3]?(b=l[3].replace(H," ").trim(),g.unshift(g[0][b]=g[0][b]||{})):g[0][l[1]]=l[2].replace(H," ").trim();return g[0]})(e);j[r]=O(o?{["@keyframes "+r]:i}:i,n?"":"."+r)}return((i,u,l)=>{u.data.indexOf(i)==-1&&(u.data=l?i+u.data:u.data+i)})(j[r],t,a),r},Pe=(e,t,n)=>e.reduce((a,o,s)=>{let r=t[s];if(r&&r.call){let i=r(n),u=i&&i.props&&i.props.className||/^go/.test(i)&&i;r=u?"."+u:i&&typeof i=="object"?i.props?"":O(i,""):i===!1?"":i}return a+o+(r==null?"":r)},"");function C(e){let t=this||{},n=e.call?e(t.p):e;return je(n.unshift?n.raw?Pe(n,[].slice.call(arguments,1),t.p):n.reduce((a,o)=>Object.assign(a,o&&o.call?o(t.p):o),{}):n,Se(t.target),t.g,t.o,t.k)}let Z,q,V;C.bind({g:1});let y=C.bind({k:1});function we(e,t,n,a){O.p=t,Z=e,q=n,V=a}function T(e,t){let n=this||{};return function(){let a=arguments;function o(s,r){let i=Object.assign({},s),u=i.className||o.className;n.p=Object.assign({theme:q&&q()},i),n.o=/ *go\d+/.test(u),i.className=C.apply(n,a)+(u?" "+u:""),t&&(i.ref=r);let l=e;return e[0]&&(l=i.as||e,delete i.as),V&&l[0]&&V(i),Z(l,i)}return t?t(o):o}}function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},f.apply(this,arguments)}function m(e,t){return t||(t=e.slice(0)),e.raw=t,e}var Re=function(t){return typeof t=="function"},U=function(t,n){return Re(t)?t(n):t},De=function(){var e=0;return function(){return(++e).toString()}}(),Ie=function(t){return function(n){n&&setTimeout(function(){var a=n.getBoundingClientRect();t(a)})}},G=function(){var e=void 0;return function(){if(e===void 0&&typeof window!="undefined"){var t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}}(),Fe=20,p;(function(e){e[e.ADD_TOAST=0]="ADD_TOAST",e[e.UPDATE_TOAST=1]="UPDATE_TOAST",e[e.UPSERT_TOAST=2]="UPSERT_TOAST",e[e.DISMISS_TOAST=3]="DISMISS_TOAST",e[e.REMOVE_TOAST=4]="REMOVE_TOAST",e[e.START_PAUSE=5]="START_PAUSE",e[e.END_PAUSE=6]="END_PAUSE"})(p||(p={}));var F=new Map,Q=function(t){if(!F.has(t)){var n=setTimeout(function(){F.delete(t),S({type:p.REMOVE_TOAST,toastId:t})},1e3);F.set(t,n)}},Me=function(t){var n=F.get(t);n&&clearTimeout(n)},$e=function e(t,n){switch(n.type){case p.ADD_TOAST:return f({},t,{toasts:[n.toast].concat(t.toasts).slice(0,Fe)});case p.UPDATE_TOAST:return n.toast.id&&Me(n.toast.id),f({},t,{toasts:t.toasts.map(function(r){return r.id===n.toast.id?f({},r,n.toast):r})});case p.UPSERT_TOAST:var a=n.toast;return t.toasts.find(function(r){return r.id===a.id})?e(t,{type:p.UPDATE_TOAST,toast:a}):e(t,{type:p.ADD_TOAST,toast:a});case p.DISMISS_TOAST:var o=n.toastId;return o?Q(o):t.toasts.forEach(function(r){Q(r.id)}),f({},t,{toasts:t.toasts.map(function(r){return r.id===o||o===void 0?f({},r,{visible:!1}):r})});case p.REMOVE_TOAST:return n.toastId===void 0?f({},t,{toasts:[]}):f({},t,{toasts:t.toasts.filter(function(r){return r.id!==n.toastId})});case p.START_PAUSE:return f({},t,{pausedAt:n.time});case p.END_PAUSE:var s=n.time-(t.pausedAt||0);return f({},t,{pausedAt:void 0,toasts:t.toasts.map(function(r){return f({},r,{pauseDuration:r.pauseDuration+s})})})}},M=[],$={toasts:[],pausedAt:void 0},S=function(t){$=$e($,t),M.forEach(function(n){n($)})},Ue={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},Ce=function(t){t===void 0&&(t={});var n=c.exports.useState($),a=n[0],o=n[1];c.exports.useEffect(function(){return M.push(o),function(){var r=M.indexOf(o);r>-1&&M.splice(r,1)}},[a]);var s=a.toasts.map(function(r){var i,u,l;return f({},t,t[r.type],r,{duration:r.duration||((i=t[r.type])==null?void 0:i.duration)||((u=t)==null?void 0:u.duration)||Ue[r.type],style:f({},t.style,(l=t[r.type])==null?void 0:l.style,r.style)})});return f({},a,{toasts:s})},Ne=function(t,n,a){return n===void 0&&(n="blank"),f({createdAt:Date.now(),visible:!0,type:n,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0},a,{id:(a==null?void 0:a.id)||De()})},P=function(t){return function(n,a){var o=Ne(n,t,a);return S({type:p.UPSERT_TOAST,toast:o}),o.id}},h=function(t,n){return P("blank")(t,n)};h.error=P("error");h.success=P("success");h.loading=P("loading");h.custom=P("custom");h.dismiss=function(e){S({type:p.DISMISS_TOAST,toastId:e})};h.remove=function(e){return S({type:p.REMOVE_TOAST,toastId:e})};h.promise=function(e,t,n){var a=h.loading(t.loading,f({},n,n==null?void 0:n.loading));return e.then(function(o){return h.success(U(t.success,o),f({id:a},n,n==null?void 0:n.success)),o}).catch(function(o){h.error(U(t.error,o),f({id:a},n,n==null?void 0:n.error))}),e};var Le=function(t){var n=Ce(t),a=n.toasts,o=n.pausedAt;c.exports.useEffect(function(){if(!o){var r=Date.now(),i=a.map(function(u){if(u.duration!==1/0){var l=(u.duration||0)+u.pauseDuration-(r-u.createdAt);if(l<0){u.visible&&h.dismiss(u.id);return}return setTimeout(function(){return h.dismiss(u.id)},l)}});return function(){i.forEach(function(u){return u&&clearTimeout(u)})}}},[a,o]);var s=c.exports.useMemo(function(){return{startPause:function(){S({type:p.START_PAUSE,time:Date.now()})},endPause:function(){o&&S({type:p.END_PAUSE,time:Date.now()})},updateHeight:function(i,u){return S({type:p.UPDATE_TOAST,toast:{id:i,height:u}})},calculateOffset:function(i,u){var l,b=u||{},g=b.reverseOrder,_=g===void 0?!1:g,v=b.gutter,w=v===void 0?8:v,R=b.defaultPosition,A=a.filter(function(x){return(x.position||R)===(i.position||R)&&x.height}),N=A.findIndex(function(x){return x.id===i.id}),D=A.filter(function(x,L){return L<N&&x.visible}).length,pe=(l=A.filter(function(x){return x.visible})).slice.apply(l,_?[D+1]:[0,D]).reduce(function(x,L){return x+(L.height||0)+w},0);return pe}}},[a,o]);return{toasts:a,handlers:s}};function J(){var e=m([`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: `,`;
  position: relative;
  transform: rotate(45deg);

  animation: `,` 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: `,` 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: `,`;
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: `,` 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`]);return J=function(){return e},e}function K(){var e=m([`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`]);return K=function(){return e},e}function X(){var e=m([`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`]);return X=function(){return e},e}function ee(){var e=m([`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`]);return ee=function(){return e},e}var ke=y(ee()),ze=y(X()),qe=y(K()),Ve=T("div")(J(),function(e){return e.primary||"#ff4b4b"},ke,ze,function(e){return e.secondary||"#fff"},qe);function te(){var e=m([`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: `,`;
  border-right-color: `,`;
  animation: `,` 1s linear infinite;
`]);return te=function(){return e},e}function ne(){var e=m([`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`]);return ne=function(){return e},e}var Be=y(ne()),He=T("div")(te(),function(e){return e.secondary||"#e0e0e0"},function(e){return e.primary||"#616161"},Be);function re(){var e=m([`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: `,`;
  position: relative;
  transform: rotate(45deg);

  animation: `,` 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: `,` 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: `,`;
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`]);return re=function(){return e},e}function ae(){var e=m([`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`]);return ae=function(){return e},e}function oe(){var e=m([`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`]);return oe=function(){return e},e}var Qe=y(oe()),We=y(ae()),Ye=T("div")(re(),function(e){return e.primary||"#61d345"},Qe,We,function(e){return e.secondary||"#fff"});function ie(){var e=m([`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: `,` 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`]);return ie=function(){return e},e}function se(){var e=m([`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`]);return se=function(){return e},e}function ue(){var e=m([`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`]);return ue=function(){return e},e}function ce(){var e=m([`
  position: absolute;
`]);return ce=function(){return e},e}var Ze=T("div")(ce()),Ge=T("div")(ue()),Je=y(se()),Ke=T("div")(ie(),Je),Xe=function(t){var n=t.toast,a=n.icon,o=n.type,s=n.iconTheme;return a!==void 0?typeof a=="string"?c.exports.createElement(Ke,null,a):a:o==="blank"?null:c.exports.createElement(Ge,null,c.exports.createElement(He,Object.assign({},s)),o!=="loading"&&c.exports.createElement(Ze,null,o==="error"?c.exports.createElement(Ve,Object.assign({},s)):c.exports.createElement(Ye,Object.assign({},s))))};function le(){var e=m([`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`]);return le=function(){return e},e}function de(){var e=m([`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`]);return de=function(){return e},e}var et=function(t){return`
0% {transform: translate3d(0,`+t*-200+`%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`},tt=function(t){return`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,`+t*-150+`%,-1px) scale(.6); opacity:0;}
`},nt="0%{opacity:0;} 100%{opacity:1;}",rt="0%{opacity:1;} 100%{opacity:0;}",at=T("div",c.exports.forwardRef)(de()),ot=T("div")(le()),it=function(t,n){var a=t.includes("top"),o=a?1:-1,s=G()?[nt,rt]:[et(o),tt(o)],r=s[0],i=s[1];return{animation:n?y(r)+" 0.35s cubic-bezier(.21,1.02,.73,1) forwards":y(i)+" 0.4s forwards cubic-bezier(.06,.71,.55,1)"}},st=c.exports.memo(function(e){var t=e.toast,n=e.position,a=e.style,o=e.children,s=t!=null&&t.height?it(t.position||n||"top-center",t.visible):{opacity:0},r=c.exports.createElement(Xe,{toast:t}),i=c.exports.createElement(ot,Object.assign({},t.ariaProps),U(t.message,t));return c.exports.createElement(at,{className:t.className,style:f({},s,a,t.style)},typeof o=="function"?o({icon:r,message:i}):c.exports.createElement(c.exports.Fragment,null,r,i))});function fe(){var e=m([`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`]);return fe=function(){return e},e}we(c.exports.createElement);var ut=function(t,n){var a=t.includes("top"),o=a?{top:0}:{bottom:0},s=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return f({left:0,right:0,display:"flex",position:"absolute",transition:G()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:"translateY("+n*(a?1:-1)+"px)"},o,s)},ct=C(fe()),I=16,lt=function(t){var n=t.reverseOrder,a=t.position,o=a===void 0?"top-center":a,s=t.toastOptions,r=t.gutter,i=t.children,u=t.containerStyle,l=t.containerClassName,b=Le(s),g=b.toasts,_=b.handlers;return c.exports.createElement("div",{style:f({position:"fixed",zIndex:9999,top:I,left:I,right:I,bottom:I,pointerEvents:"none"},u),className:l,onMouseEnter:_.startPause,onMouseLeave:_.endPause},g.map(function(v){var w=v.position||o,R=_.calculateOffset(v,{reverseOrder:n,gutter:r,defaultPosition:o}),A=ut(w,R),N=v.height?void 0:Ie(function(D){_.updateHeight(v.id,D.height)});return c.exports.createElement("div",{ref:N,className:v.visible?ct:"",key:v.id,style:A},v.type==="custom"?U(v.message,v):i?i(v):c.exports.createElement(st,{toast:v,position:w}))}))};function dt(){return d("div",{children:"Page Not Fonud"})}const ft=()=>{const{userId:e,userName:t,userAvatar:n,islogin:a}=c.exports.useContext(me);return console.log(e,t,n),a?d(ve,{}):d(ge,{to:"/login"})},z=c.exports.lazy(()=>B(()=>import("./index.3512a218.js").then(function(e){return e.aC}),[])),pt=c.exports.lazy(()=>B(()=>import("./IndexPage.621bfc94.js"),["assets/IndexPage.621bfc94.js","assets/index.3512a218.js"])),mt=c.exports.lazy(()=>B(()=>import("./FaqId.0a228795.js"),["assets/FaqId.0a228795.js","assets/index.3512a218.js","assets/index.esm.a6dbb4a0.js","assets/useAxiosToGetData.bd743963.js","assets/Toolbar.9d363c5e.js","assets/CardContent.322af4de.js","assets/CardHeader.0ca42d19.js","assets/Badge.fe8caf67.js","assets/Divider.cc3600c7.js"])),vt=()=>k(he,{children:[d(lt,{}),d(xe,{children:d(Oe,{children:k(ye,{children:[k(E,{element:d(ft,{}),children:[d(E,{index:!0,element:d(c.exports.Suspense,{fallback:d(z,{}),children:d(pt,{})})}),d(E,{path:"/FaqId/:faqid",element:d(c.exports.Suspense,{fallback:d(z,{}),children:d(mt,{})})})]}),d(E,{path:"/login",element:d(c.exports.Suspense,{fallback:d(z,{}),children:d(_e,{})})}),d(E,{path:"*",element:d(dt,{})})]})})})]});var gt=be.memo(vt),ht=Object.freeze(Object.defineProperty({__proto__:null,default:gt},Symbol.toStringTag,{value:"Module"}));export{W as F,ht as M};
