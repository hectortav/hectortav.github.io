import{r as c,e as _,T as G,u as U,c as V,j as p,E as Z,B as K,b as ee,d as te,f as ne,a as I,C as re}from"./index.bc2d066b.js";import{L as be,O as we}from"./index.bc2d066b.js";import{C as ye}from"./index.e5db6ef5.js";function j(r,n,o){var t,i,s,l,a;n==null&&(n=100);function e(){var f=Date.now()-l;f<n&&f>=0?t=setTimeout(e,n-f):(t=null,o||(a=r.apply(s,i),s=i=null))}var u=function(){s=this,i=arguments,l=Date.now();var f=o&&!t;return t||(t=setTimeout(e,n)),f&&(a=r.apply(s,i),s=i=null),a};return u.clear=function(){t&&(clearTimeout(t),t=null)},u.flush=function(){t&&(a=r.apply(s,i),s=i=null,clearTimeout(t),t=null)},u}j.debounce=j;var q=j;function oe(r){let{debounce:n,scroll:o,polyfill:t,offsetSize:i}=r===void 0?{debounce:0,scroll:!1,offsetSize:!1}:r;const s=t||(typeof window>"u"?class{}:window.ResizeObserver);if(!s)throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");const[l,a]=c.exports.useState({left:0,top:0,width:0,height:0,bottom:0,right:0,x:0,y:0}),e=c.exports.useRef({element:null,scrollContainers:null,resizeObserver:null,lastBounds:l}),u=n?typeof n=="number"?n:n.scroll:null,f=n?typeof n=="number"?n:n.resize:null,h=c.exports.useRef(!1);c.exports.useEffect(()=>(h.current=!0,()=>void(h.current=!1)));const[b,g,v]=c.exports.useMemo(()=>{const d=()=>{if(!e.current.element)return;const{left:R,top:O,width:D,height:k,bottom:B,right:E,x:z,y:S}=e.current.element.getBoundingClientRect(),m={left:R,top:O,width:D,height:k,bottom:B,right:E,x:z,y:S};e.current.element instanceof HTMLElement&&i&&(m.height=e.current.element.offsetHeight,m.width=e.current.element.offsetWidth),Object.freeze(m),h.current&&!ue(e.current.lastBounds,m)&&a(e.current.lastBounds=m)};return[d,f?q(d,f):d,u?q(d,u):d]},[a,i,u,f]);function w(){e.current.scrollContainers&&(e.current.scrollContainers.forEach(d=>d.removeEventListener("scroll",v,!0)),e.current.scrollContainers=null),e.current.resizeObserver&&(e.current.resizeObserver.disconnect(),e.current.resizeObserver=null)}function y(){!e.current.element||(e.current.resizeObserver=new s(v),e.current.resizeObserver.observe(e.current.element),o&&e.current.scrollContainers&&e.current.scrollContainers.forEach(d=>d.addEventListener("scroll",v,{capture:!0,passive:!0})))}const M=d=>{!d||d===e.current.element||(w(),e.current.element=d,e.current.scrollContainers=F(d),y())};return ce(v,Boolean(o)),se(g),c.exports.useEffect(()=>{w(),y()},[o,v,g]),c.exports.useEffect(()=>w,[]),[M,l,b]}function se(r){c.exports.useEffect(()=>{const n=r;return window.addEventListener("resize",n),()=>void window.removeEventListener("resize",n)},[r])}function ce(r,n){c.exports.useEffect(()=>{if(n){const o=r;return window.addEventListener("scroll",o,{capture:!0,passive:!0}),()=>void window.removeEventListener("scroll",o,!0)}},[r,n])}function F(r){const n=[];if(!r||r===document.body)return n;const{overflow:o,overflowX:t,overflowY:i}=window.getComputedStyle(r);return[o,t,i].some(s=>s==="auto"||s==="scroll")&&n.push(r),[...n,...F(r.parentElement)]}const ie=["x","y","top","bottom","left","right","width","height"],ue=(r,n)=>ie.every(o=>r[o]===n[o]),T={onClick:["click",!1],onContextMenu:["contextmenu",!1],onDoubleClick:["dblclick",!1],onWheel:["wheel",!0],onPointerDown:["pointerdown",!0],onPointerUp:["pointerup",!0],onPointerLeave:["pointerleave",!0],onPointerMove:["pointermove",!0],onPointerCancel:["pointercancel",!0],onLostPointerCapture:["lostpointercapture",!0]};function le(r){const{handlePointer:n}=ne(r);return{priority:1,enabled:!0,compute(o,t,i){t.pointer.set(o.offsetX/t.size.width*2-1,-(o.offsetY/t.size.height)*2+1),t.raycaster.setFromCamera(t.pointer,t.camera)},connected:void 0,handlers:Object.keys(T).reduce((o,t)=>({...o,[t]:n(t)}),{}),connect:o=>{var t;const{set:i,events:s}=r.getState();s.disconnect==null||s.disconnect(),i(l=>({events:{...l.events,connected:o}})),Object.entries((t=s.handlers)!=null?t:[]).forEach(([l,a])=>{const[e,u]=T[l];o.addEventListener(e,a,{passive:u})})},disconnect:()=>{const{set:o,events:t}=r.getState();if(t.connected){var i;Object.entries((i=t.handlers)!=null?i:[]).forEach(([s,l])=>{if(t&&t.connected instanceof HTMLElement){const[a]=T[s];t.connected.removeEventListener(a,l)}}),o(s=>({events:{...s.events,connected:void 0}}))}}}}const ae=c.exports.forwardRef(function({children:n,fallback:o,resize:t,style:i,gl:s,events:l=le,eventSource:a,eventPrefix:e,shadows:u,linear:f,flat:h,legacy:b,orthographic:g,frameloop:v,dpr:w,performance:y,raycaster:M,camera:d,onPointerMissed:R,onCreated:O,...D},k){c.exports.useMemo(()=>_(G),[]);const[B,E]=oe({scroll:!0,debounce:{scroll:50,resize:0},...t}),z=c.exports.useRef(null),S=c.exports.useRef(null),[m,$]=c.exports.useState(null);c.exports.useImperativeHandle(k,()=>z.current);const W=U(R),[Y,X]=c.exports.useState(!1),[H,A]=c.exports.useState(!1);if(Y)throw Y;if(H)throw H;const L=c.exports.useRef(null);return E.width>0&&E.height>0&&m&&(L.current||(L.current=V(m)),L.current.configure({gl:s,events:l,shadows:u,linear:f,flat:h,legacy:b,orthographic:g,frameloop:v,dpr:w,performance:y,raycaster:M,camera:d,size:E,onPointerMissed:(...C)=>W.current==null?void 0:W.current(...C),onCreated:C=>{C.events.connect==null||C.events.connect(a||S.current),e&&C.setEvents({compute:(N,x)=>{const J=N[e+"X"],Q=N[e+"Y"];x.pointer.set(J/x.size.width*2-1,-(Q/x.size.height)*2+1),x.raycaster.setFromCamera(x.pointer,x.camera)}}),O==null||O(C)}}),L.current.render(p(Z,{set:A,children:p(c.exports.Suspense,{fallback:p(K,{set:X}),children:n})}))),ee(()=>{$(z.current)},[]),c.exports.useEffect(()=>{if(m)return()=>te(m)},[m]),p("div",{ref:S,style:{position:"relative",width:"100%",height:"100%",overflow:"hidden",...i},...D,children:p("div",{ref:B,style:{width:"100%",height:"100%"},children:p("canvas",{ref:z,style:{display:"block"},children:o})})})});async function fe(r,n,o,t){if(r===void 0)return;const i={Authorization:`bearer ${r}`},s={query:`query {
            user(login: "${n}") {
              contributionsCollection(from: "${o}", to: "${t}") {
                contributionCalendar {
                  colors
                  totalContributions
                  weeks {
                    contributionDays {
                      color
                      contributionCount
                      date
                      weekday
                    }
                  }
                }
              }
            }
          }`};return await(await fetch("https://api.github.com/graphql",{method:"POST",body:JSON.stringify(s),headers:i})).json()}const P=["#d82a0d","#d68d10","#f3d529","#d8f656","#fddcb2"],pe=()=>{const[r,n]=c.exports.useState([]),[o,t]=c.exports.useState({}),[i,s]=c.exports.useState(12);c.exports.useEffect(()=>{const e=new Date;e.setDate(e.getDate()-1),e.setFullYear(e.getFullYear()-1);const u=new Date;u.setDate(u.getDate()-1),fe("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","hectortav",e.toISOString(),u.toISOString()).then(({data:f})=>{const h=f.user.contributionsCollection.contributionCalendar,b=h.weeks.reduce((w,{contributionDays:y})=>w.concat(y),[]);n(b);const g={};let v=0;h.colors.forEach(w=>{g[w]=P[v],v++}),t(g)}).catch(()=>{})},[]);const l=typeof window<"u",a=()=>{const e=l?window.innerWidth:null,u=l?window.innerHeight:null;return{width:e,height:u}};return c.exports.useEffect(()=>{if(l){const{width:e}=a(),u=(f,h,b)=>h-b===0?35:Math.min(Math.max(35+(f-b)*(12-35)/(h-b),12),35);if(e===null)return;s(u(e,1024,600))}},[l]),p("div",{style:{width:"100%",height:"300px"},children:I(ae,{camera:{position:[0,0,i]},children:[p(re,{}),p("ambientLight",{color:"#ffffff",intensity:.08}),p("hemisphereLight",{color:"#ffffff",groundColor:"#080820",intensity:.9}),r.map((e,u)=>{const f=Math.floor(u/7)*1-26,h=7-Math.floor(u%7)*1-4;return I("mesh",{position:[f,h,0],rotation:[Math.PI*.5,0,0],children:[p("cylinderBufferGeometry",{attach:"geometry",args:[.3,.3,.01,20]}),p("meshStandardMaterial",{attach:"material",color:o[e.color]||P[P.length-1]})]},e.date)})]})})};export{ye as Carousel,pe as Contributions,be as Layout,we as OrigamiBoat};
