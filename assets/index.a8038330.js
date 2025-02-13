(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function z(){}const is=n=>n;function fa(n,e){for(const t in e)n[t]=e[t];return n}function rg(n){return!!n&&(typeof n=="object"||typeof n=="function")&&typeof n.then=="function"}function yh(n){return n()}function Vl(){return Object.create(null)}function Ae(n){n.forEach(yh)}function on(n){return typeof n=="function"}function _e(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}let Ss;function Ie(n,e){return Ss||(Ss=document.createElement("a")),Ss.href=e,n===Ss.href}function og(n){return Object.keys(n).length===0}function vh(n,...e){if(n==null)return z;const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function xl(n){let e;return vh(n,t=>e=t)(),e}function ot(n,e,t){n.$$.on_destroy.push(vh(e,t))}function _h(n,e,t,i){if(n){const s=wh(n,e,t,i);return n[0](s)}}function wh(n,e,t,i){return n[1]&&i?fa(t.ctx.slice(),n[1](i(e))):t.ctx}function bh(n,e,t,i){if(n[2]&&i){const s=n[2](i(t));if(e.dirty===void 0)return s;if(typeof s=="object"){const r=[],o=Math.max(e.dirty.length,s.length);for(let l=0;l<o;l+=1)r[l]=e.dirty[l]|s[l];return r}return e.dirty|s}return e.dirty}function Ih(n,e,t,i,s,r){if(s){const o=wh(e,t,i,r);n.p(o,s)}}function Th(n){if(n.ctx.length>32){const e=[],t=n.ctx.length/32;for(let i=0;i<t;i++)e[i]=-1;return e}return-1}function vn(n,e,t){return n.set(t),e}function Bl(n){const e=typeof n=="string"&&n.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[n,"px"]}const Eh=typeof window<"u";let Er=Eh?()=>window.performance.now():()=>Date.now(),da=Eh?n=>requestAnimationFrame(n):z;const Hn=new Set;function Ch(n){Hn.forEach(e=>{e.c(n)||(Hn.delete(e),e.f())}),Hn.size!==0&&da(Ch)}function Cr(n){let e;return Hn.size===0&&da(Ch),{promise:new Promise(t=>{Hn.add(e={c:n,f:t})}),abort(){Hn.delete(e)}}}const ag=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function E(n,e){n.appendChild(e)}function Mh(n){if(!n)return document;const e=n.getRootNode?n.getRootNode():n.ownerDocument;return e&&e.host?e:n.ownerDocument}function lg(n){const e=I("style");return ug(Mh(n),e),e.sheet}function ug(n,e){return E(n.head||n,e),e.sheet}function b(n,e,t){n.insertBefore(e,t||null)}function w(n){n.parentNode&&n.parentNode.removeChild(n)}function yt(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function I(n){return document.createElement(n)}function Ns(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function Y(n){return document.createTextNode(n)}function P(){return Y(" ")}function Ue(){return Y("")}function H(n,e,t,i){return n.addEventListener(e,t,i),()=>n.removeEventListener(e,t,i)}function kh(n){return function(e){return e.preventDefault(),n.call(this,e)}}function m(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function pa(n){return n===""?null:+n}function cg(n){return Array.from(n.childNodes)}function ge(n,e){e=""+e,n.data!==e&&(n.data=e)}function hg(n,e){e=""+e,n.wholeText!==e&&(n.data=e)}function rt(n,e){n.value=e==null?"":e}function ne(n,e,t,i){t==null?n.style.removeProperty(e):n.style.setProperty(e,t,i?"important":"")}function ye(n,e,t){n.classList[t?"add":"remove"](e)}function Sh(n,e,{bubbles:t=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(n,t,i,e),s}function ql(n,e){return new n(e)}const Zs=new Map;let er=0;function fg(n){let e=5381,t=n.length;for(;t--;)e=(e<<5)-e^n.charCodeAt(t);return e>>>0}function dg(n,e){const t={stylesheet:lg(e),rules:{}};return Zs.set(n,t),t}function Pi(n,e,t,i,s,r,o,l=0){const a=16.666/i;let u=`{
`;for(let _=0;_<=1;_+=a){const T=e+(t-e)*r(_);u+=_*100+`%{${o(T,1-T)}}
`}const c=u+`100% {${o(t,1-t)}}
}`,h=`__svelte_${fg(c)}_${l}`,d=Mh(n),{stylesheet:f,rules:p}=Zs.get(d)||dg(d,n);p[h]||(p[h]=!0,f.insertRule(`@keyframes ${h} ${c}`,f.cssRules.length));const v=n.style.animation||"";return n.style.animation=`${v?`${v}, `:""}${h} ${i}ms linear ${s}ms 1 both`,er+=1,h}function Ri(n,e){const t=(n.style.animation||"").split(", "),i=t.filter(e?r=>r.indexOf(e)<0:r=>r.indexOf("__svelte")===-1),s=t.length-i.length;s&&(n.style.animation=i.join(", "),er-=s,er||pg())}function pg(){da(()=>{er||(Zs.forEach(n=>{const{ownerNode:e}=n.stylesheet;e&&w(e)}),Zs.clear())})}function gg(n,e,t,i){if(!e)return z;const s=n.getBoundingClientRect();if(e.left===s.left&&e.right===s.right&&e.top===s.top&&e.bottom===s.bottom)return z;const{delay:r=0,duration:o=300,easing:l=is,start:a=Er()+r,end:u=a+o,tick:c=z,css:h}=t(n,{from:e,to:s},i);let d=!0,f=!1,p;function v(){h&&(p=Pi(n,0,1,o,r,l,h)),r||(f=!0)}function _(){h&&Ri(n,p),d=!1}return Cr(T=>{if(!f&&T>=a&&(f=!0),f&&T>=u&&(c(1,0),_()),!d)return!1;if(f){const y=T-a,C=0+1*l(y/o);c(C,1-C)}return!0}),v(),c(0,1),_}function mg(n){const e=getComputedStyle(n);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:t,height:i}=e,s=n.getBoundingClientRect();n.style.position="absolute",n.style.width=t,n.style.height=i,yg(n,s)}}function yg(n,e){const t=n.getBoundingClientRect();if(e.left!==t.left||e.top!==t.top){const i=getComputedStyle(n),s=i.transform==="none"?"":i.transform;n.style.transform=`${s} translate(${e.left-t.left}px, ${e.top-t.top}px)`}}let ji;function Lt(n){ji=n}function Mr(){if(!ji)throw new Error("Function called outside component initialization");return ji}function ga(n){Mr().$$.on_mount.push(n)}function Nh(n){Mr().$$.on_destroy.push(n)}function Ah(){const n=Mr();return(e,t,{cancelable:i=!1}={})=>{const s=n.$$.callbacks[e];if(s){const r=Sh(e,t,{cancelable:i});return s.slice().forEach(o=>{o.call(n,r)}),!r.defaultPrevented}return!0}}function vg(n,e){const t=n.$$.callbacks[e.type];t&&t.slice().forEach(i=>i.call(this,e))}const Vn=[],ee=[];let $n=[];const Ao=[],_g=Promise.resolve();let Do=!1;function wg(){Do||(Do=!0,_g.then(ma))}function at(n){$n.push(n)}function he(n){Ao.push(n)}const oo=new Set;let jn=0;function ma(){if(jn!==0)return;const n=ji;do{try{for(;jn<Vn.length;){const e=Vn[jn];jn++,Lt(e),bg(e.$$)}}catch(e){throw Vn.length=0,jn=0,e}for(Lt(null),Vn.length=0,jn=0;ee.length;)ee.pop()();for(let e=0;e<$n.length;e+=1){const t=$n[e];oo.has(t)||(oo.add(t),t())}$n.length=0}while(Vn.length);for(;Ao.length;)Ao.pop()();Do=!1,oo.clear(),Lt(n)}function bg(n){if(n.fragment!==null){n.update(),Ae(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(at)}}function Ig(n){const e=[],t=[];$n.forEach(i=>n.indexOf(i)===-1?e.push(i):t.push(i)),t.forEach(i=>i()),$n=e}let _i;function ya(){return _i||(_i=Promise.resolve(),_i.then(()=>{_i=null})),_i}function _n(n,e,t){n.dispatchEvent(Sh(`${e?"intro":"outro"}${t}`))}const qs=new Set;let Tt;function tt(){Tt={r:0,c:[],p:Tt}}function nt(){Tt.r||Ae(Tt.c),Tt=Tt.p}function F(n,e){n&&n.i&&(qs.delete(n),n.i(e))}function q(n,e,t,i){if(n&&n.o){if(qs.has(n))return;qs.add(n),Tt.c.push(()=>{qs.delete(n),i&&(t&&n.d(1),i())}),n.o(e)}else i&&i()}const va={duration:0};function _a(n,e,t){const i={direction:"in"};let s=e(n,t,i),r=!1,o,l,a=0;function u(){o&&Ri(n,o)}function c(){const{delay:d=0,duration:f=300,easing:p=is,tick:v=z,css:_}=s||va;_&&(o=Pi(n,0,1,f,d,p,_,a++)),v(0,1);const T=Er()+d,y=T+f;l&&l.abort(),r=!0,at(()=>_n(n,!0,"start")),l=Cr(C=>{if(r){if(C>=y)return v(1,0),_n(n,!0,"end"),u(),r=!1;if(C>=T){const S=p((C-T)/f);v(S,1-S)}}return r})}let h=!1;return{start(){h||(h=!0,Ri(n),on(s)?(s=s(i),ya().then(c)):c())},invalidate(){h=!1},end(){r&&(u(),r=!1)}}}function Tg(n,e,t){const i={direction:"out"};let s=e(n,t,i),r=!0,o;const l=Tt;l.r+=1;function a(){const{delay:u=0,duration:c=300,easing:h=is,tick:d=z,css:f}=s||va;f&&(o=Pi(n,1,0,c,u,h,f));const p=Er()+u,v=p+c;at(()=>_n(n,!1,"start")),Cr(_=>{if(r){if(_>=v)return d(0,1),_n(n,!1,"end"),--l.r||Ae(l.c),!1;if(_>=p){const T=h((_-p)/c);d(1-T,T)}}return r})}return on(s)?ya().then(()=>{s=s(i),a()}):a(),{end(u){u&&s.tick&&s.tick(1,0),r&&(o&&Ri(n,o),r=!1)}}}function Zn(n,e,t,i){const s={direction:"both"};let r=e(n,t,s),o=i?0:1,l=null,a=null,u=null;function c(){u&&Ri(n,u)}function h(f,p){const v=f.b-o;return p*=Math.abs(v),{a:o,b:f.b,d:v,duration:p,start:f.start,end:f.start+p,group:f.group}}function d(f){const{delay:p=0,duration:v=300,easing:_=is,tick:T=z,css:y}=r||va,C={start:Er()+p,b:f};f||(C.group=Tt,Tt.r+=1),l||a?a=C:(y&&(c(),u=Pi(n,o,f,v,p,_,y)),f&&T(0,1),l=h(C,v),at(()=>_n(n,f,"start")),Cr(S=>{if(a&&S>a.start&&(l=h(a,v),a=null,_n(n,l.b,"start"),y&&(c(),u=Pi(n,o,l.b,l.duration,0,_,r.css))),l){if(S>=l.end)T(o=l.b,1-o),_n(n,l.b,"end"),a||(l.b?c():--l.group.r||Ae(l.group.c)),l=null;else if(S>=l.start){const M=S-l.start;o=l.a+l.d*_(M/l.duration),T(o,1-o)}}return!!(l||a)}))}return{run(f){on(r)?ya().then(()=>{r=r(s),d(f)}):d(f)},end(){c(),l=a=null}}}function In(n,e){const t=e.token={};function i(s,r,o,l){if(e.token!==t)return;e.resolved=l;let a=e.ctx;o!==void 0&&(a=a.slice(),a[o]=l);const u=s&&(e.current=s)(a);let c=!1;e.block&&(e.blocks?e.blocks.forEach((h,d)=>{d!==r&&h&&(tt(),q(h,1,1,()=>{e.blocks[d]===h&&(e.blocks[d]=null)}),nt())}):e.block.d(1),u.c(),F(u,1),u.m(e.mount(),e.anchor),c=!0),e.block=u,e.blocks&&(e.blocks[r]=u),c&&ma()}if(rg(n)){const s=Mr();if(n.then(r=>{Lt(s),i(e.then,1,e.value,r),Lt(null)},r=>{if(Lt(s),i(e.catch,2,e.error,r),Lt(null),!e.hasCatch)throw r}),e.current!==e.pending)return i(e.pending,0),!0}else{if(e.current!==e.then)return i(e.then,1,e.value,n),!0;e.resolved=n}}function kr(n,e,t){const i=e.slice(),{resolved:s}=n;n.current===n.then&&(i[n.value]=s),n.current===n.catch&&(i[n.error]=s),n.block.p(i,t)}function Ui(n,e){n.d(1),e.delete(n.key)}function Dh(n,e){q(n,1,1,()=>{e.delete(n.key)})}function Eg(n,e){n.f(),Ui(n,e)}function Tn(n,e,t,i,s,r,o,l,a,u,c,h){let d=n.length,f=r.length,p=d;const v={};for(;p--;)v[n[p].key]=p;const _=[],T=new Map,y=new Map,C=[];for(p=f;p--;){const k=h(s,r,p),N=t(k);let g=o.get(N);g?i&&C.push(()=>g.p(k,e)):(g=u(N,k),g.c()),T.set(N,_[p]=g),N in v&&y.set(N,Math.abs(p-v[N]))}const S=new Set,M=new Set;function R(k){F(k,1),k.m(l,c),o.set(k.key,k),c=k.first,f--}for(;d&&f;){const k=_[f-1],N=n[d-1],g=k.key,A=N.key;k===N?(c=k.first,d--,f--):T.has(A)?!o.has(g)||S.has(g)?R(k):M.has(A)?d--:y.get(g)>y.get(A)?(M.add(g),R(k)):(S.add(A),d--):(a(N,o),d--)}for(;d--;){const k=n[d];T.has(k.key)||a(k,o)}for(;f;)R(_[f-1]);return Ae(C),_}function Lh(n,e){const t={},i={},s={$$scope:1};let r=n.length;for(;r--;){const o=n[r],l=e[r];if(l){for(const a in o)a in l||(i[a]=1);for(const a in l)s[a]||(t[a]=l[a],s[a]=1);n[r]=l}else for(const a in o)s[a]=1}for(const o in i)o in t||(t[o]=void 0);return t}function Oh(n){return typeof n=="object"&&n!==null?n:{}}function ue(n,e,t){const i=n.$$.props[e];i!==void 0&&(n.$$.bound[i]=t,t(n.$$.ctx[i]))}function oe(n){n&&n.c()}function se(n,e,t,i){const{fragment:s,after_update:r}=n.$$;s&&s.m(e,t),i||at(()=>{const o=n.$$.on_mount.map(yh).filter(on);n.$$.on_destroy?n.$$.on_destroy.push(...o):Ae(o),n.$$.on_mount=[]}),r.forEach(at)}function re(n,e){const t=n.$$;t.fragment!==null&&(Ig(t.after_update),Ae(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function Cg(n,e){n.$$.dirty[0]===-1&&(Vn.push(n),wg(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function we(n,e,t,i,s,r,o,l=[-1]){const a=ji;Lt(n);const u=n.$$={fragment:null,ctx:[],props:r,update:z,not_equal:s,bound:Vl(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:Vl(),dirty:l,skip_bound:!1,root:e.target||a.$$.root};o&&o(u.root);let c=!1;if(u.ctx=t?t(n,e.props||{},(h,d,...f)=>{const p=f.length?f[0]:d;return u.ctx&&s(u.ctx[h],u.ctx[h]=p)&&(!u.skip_bound&&u.bound[h]&&u.bound[h](p),c&&Cg(n,h)),d}):[],u.update(),c=!0,Ae(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){const h=cg(e.target);u.fragment&&u.fragment.l(h),h.forEach(w)}else u.fragment&&u.fragment.c();e.intro&&F(n.$$.fragment),se(n,e.target,e.anchor,e.customElement),ma()}Lt(a)}class be{$destroy(){re(this,1),this.$destroy=z}$on(e,t){if(!on(t))return z;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(t),()=>{const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!og(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const As=(n,e)=>{let t=[];for(let s=0;s<10;s++)t.push(r=>r%10==s);for(let s=0;s<10;s++)t.push(r=>r.toString()[0]==s);for(let s=0;s<10;s++)t.push(r=>r.toString().includes(s));for(let s=0;s<10;s++)t.push(r=>{let o=r.toString();return o.length===1?o[0]==s:o[0]+o[1]==s});for(let s=0;s<10;s++)t.push(r=>{let o=r.toString();return o.length===1?o[0]==s:Math.abs(o[0]-o[1])==s});let i=[];for(let s=0;s<e;s++)i.push(t[Math.floor(n*(s+1)*1654)%t.length]);return i},Ds=n=>{var e=n+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296},Un=[];function an(n,e=z){let t;const i=new Set;function s(l){if(_e(n,l)&&(n=l,t)){const a=!Un.length;for(const u of i)u[1](),Un.push(u,n);if(a){for(let u=0;u<Un.length;u+=2)Un[u][0](Un[u+1]);Un.length=0}}}function r(l){s(l(n))}function o(l,a=z){const u=[l,a];return i.add(u),i.size===1&&(t=e(s)||z),l(n),()=>{i.delete(u),i.size===0&&t&&(t(),t=null)}}return{set:s,update:r,subscribe:o}}const Ph=3,Hl=parseInt(localStorage.getItem("version"))||null;(Hl===null||Hl<Ph)&&localStorage.clear();localStorage.setItem("version",Ph.toString());const Mg=JSON.parse(localStorage.getItem("notes"))||[{name:"First note",content:"You can see all your notes by click load note or you can cycle through them using the + and - buttons",date:new Date("February 18, 2022 03:24:34")},{name:"Second note",content:"The rules of the game like to change",date:new Date("February 18, 2022 03:25:10")},{name:"Third note",content:"You can move this window anywhere and then pin it with the little pin icon.<br/><br/>Maybe write the rules of the game here but you know do whatever you want as long as I get paid",date:new Date("February 18, 2022 03:26:16")}],Ht=an(Mg);Ht.subscribe(n=>{localStorage.setItem("notes",JSON.stringify(n))});const kg=JSON.parse(localStorage.getItem("score"))||0,en=an(kg);en.subscribe(n=>{localStorage.setItem("score",JSON.stringify(n))});const Sg=JSON.parse(localStorage.getItem("usedSeeds"))||[],tr=an(Sg);tr.subscribe(n=>{localStorage.setItem("usedSeeds",JSON.stringify(n))});window.hackScore=n=>en.set(n);const Rh={gameSettings:{rulesCount:3,seed:Math.floor(Math.random()*1e6)},renderSize:150,baseNumberSize:.3,displayShadows:!0,runMouseOver:!0,scanLines:!0,crtFilter:!0},Ng=JSON.parse(localStorage.getItem("settings"))||Rh,ct=an(Ng);ct.subscribe(n=>{localStorage.setItem("settings",JSON.stringify(n))});const Ag="/assets/skip.f34fe554.svg";function Sr(n){const e=n-1;return e*e*e+1}function nr(n,{delay:e=0,duration:t=400,easing:i=is}={}){const s=+getComputedStyle(n).opacity;return{delay:e,duration:t,easing:i,css:r=>`opacity: ${r*s}`}}function Dg(n,{delay:e=0,duration:t=400,easing:i=Sr,x:s=0,y:r=0,opacity:o=0}={}){const l=getComputedStyle(n),a=+l.opacity,u=l.transform==="none"?"":l.transform,c=a*(1-o),[h,d]=Bl(s),[f,p]=Bl(r);return{delay:e,duration:t,easing:i,css:(v,_)=>`
			transform: ${u} translate(${(1-v)*h}${d}, ${(1-v)*f}${p});
			opacity: ${a-c*_}`}}function $l(n,{delay:e=0,duration:t=400,easing:i=Sr,axis:s="y"}={}){const r=getComputedStyle(n),o=+r.opacity,l=s==="y"?"height":"width",a=parseFloat(r[l]),u=s==="y"?["top","bottom"]:["left","right"],c=u.map(T=>`${T[0].toUpperCase()}${T.slice(1)}`),h=parseFloat(r[`padding${c[0]}`]),d=parseFloat(r[`padding${c[1]}`]),f=parseFloat(r[`margin${c[0]}`]),p=parseFloat(r[`margin${c[1]}`]),v=parseFloat(r[`border${c[0]}Width`]),_=parseFloat(r[`border${c[1]}Width`]);return{delay:e,duration:t,easing:i,css:T=>`overflow: hidden;opacity: ${Math.min(T*20,1)*o};${l}: ${T*a}px;padding-${u[0]}: ${T*h}px;padding-${u[1]}: ${T*d}px;margin-${u[0]}: ${T*f}px;margin-${u[1]}: ${T*p}px;border-${u[0]}-width: ${T*v}px;border-${u[1]}-width: ${T*_}px;`}}function wa(n,{delay:e=0,duration:t=400,easing:i=Sr,start:s=0,opacity:r=0}={}){const o=getComputedStyle(n),l=+o.opacity,a=o.transform==="none"?"":o.transform,u=1-s,c=l*(1-r);return{delay:e,duration:t,easing:i,css:(h,d)=>`
			transform: ${a} scale(${1-u*d});
			opacity: ${l-c*d}
		`}}const Lg="/assets/pin.46b8cbd1.svg";const Og=n=>({}),Gl=n=>({class:"content"});function Ql(n){let e,t,i,s,r,o,l,a,u,c,h,d,f,p,v,_,T,y=n[3]&&Kl(n);const C=n[15].default,S=_h(C,n,n[14],Gl);return{c(){e=I("main"),t=I("div"),i=I("div"),s=I("div"),r=I("div"),o=P(),y&&y.c(),l=P(),a=I("div"),u=Y(n[2]),c=P(),h=I("div"),S&&S.c(),m(r,"class","close-button svelte-sloknb"),m(a,"class","window-title svelte-sloknb"),m(s,"class","toolbar svelte-sloknb"),m(h,"class","popup svelte-sloknb"),ne(i,"--popup-background",n[4]),m(i,"class","popup-container svelte-sloknb"),ye(i,"centered",n[5]),m(t,"class","svelte-sloknb"),ye(t,"background",!n[1])},m(M,R){b(M,e,R),E(e,t),E(t,i),E(i,s),E(s,r),E(s,o),y&&y.m(s,null),E(s,l),E(s,a),E(a,u),n[17](a),n[18](s),E(i,c),E(i,h),S&&S.m(h,null),n[19](i),v=!0,_||(T=[H(r,"click",n[9]),H(s,"pointerdown",n[11]),H(t,"pointerdown",n[21])],_=!0)},p(M,R){n=M,n[3]?y?y.p(n,R):(y=Kl(n),y.c(),y.m(s,l)):y&&(y.d(1),y=null),(!v||R&4)&&ge(u,n[2]),S&&S.p&&(!v||R&16384)&&Ih(S,C,n,n[14],v?bh(C,n[14],R,Og):Th(n[14]),Gl),(!v||R&16)&&ne(i,"--popup-background",n[4]),(!v||R&32)&&ye(i,"centered",n[5]),(!v||R&2)&&ye(t,"background",!n[1])},i(M){v||(F(S,M),at(()=>{!v||(f&&f.end(1),d=_a(i,Dg,{y:50,duration:200}),d.start())}),at(()=>{!v||(p||(p=Zn(t,nr,{duration:200},!0)),p.run(1))}),v=!0)},o(M){q(S,M),d&&d.invalidate(),f=Tg(i,wa,{duration:150,easing:n[20]}),p||(p=Zn(t,nr,{duration:200},!1)),p.run(0),v=!1},d(M){M&&w(e),y&&y.d(),n[17](null),n[18](null),S&&S.d(M),n[19](null),M&&f&&f.end(),M&&p&&p.end(),_=!1,Ae(T)}}}function Kl(n){let e,t,i,s;return{c(){e=I("img"),m(e,"class","pin-button svelte-sloknb"),Ie(e.src,t=Lg)||m(e,"src",t),m(e,"alt","Pin icon"),m(e,"draggable","false"),ye(e,"dark",n[1])},m(r,o){b(r,e,o),i||(s=H(e,"click",n[16]),i=!0)},p(r,o){o&2&&ye(e,"dark",r[1])},d(r){r&&w(e),i=!1,s()}}}function Pg(n){let e,t,i,s,r=n[0]&&Ql(n);return{c(){r&&r.c(),e=Ue()},m(o,l){r&&r.m(o,l),b(o,e,l),t=!0,i||(s=[H(window,"keydown",n[10]),H(window,"pointerup",n[12]),H(window,"pointermove",n[13])],i=!0)},p(o,[l]){o[0]?r?(r.p(o,l),l&1&&F(r,1)):(r=Ql(o),r.c(),F(r,1),r.m(e.parentNode,e)):r&&(tt(),q(r,1,1,()=>{r=null}),nt())},i(o){t||(F(r),t=!0)},o(o){q(r),t=!1},d(o){r&&r.d(o),o&&w(e),i=!1,Ae(s)}}}function Rg(n,e,t){let{$$slots:i={},$$scope:s}=e;const r=Ah();let{visible:o=!0}=e,{title:l="New window"}=e,{pinnable:a=!0}=e,{isPinned:u=!1}=e,{backgroundColor:c="#abaab8"}=e,{centered:h=!1}=e;function d(){t(0,o=!1),r("exit")}let f=null,p=null,v=null,_=!1,T=[0,0];const y=j=>{if(j.key==="Escape"){d();return}};function C(j){j.target!==p&&j.target!==v||(_=!0,T=[j.offsetX,j.offsetY])}function S(j){_=!1}function M(j){!_||u||t(6,f.style.transform=`translate(calc(${j.clientX-T[0]+f.clientWidth}px - 50vw),calc(${j.clientY-T[1]}px - 50vh))`,f)}const R=()=>t(1,u=!u);function k(j){ee[j?"unshift":"push"](()=>{v=j,t(8,v)})}function N(j){ee[j?"unshift":"push"](()=>{p=j,t(7,p)})}function g(j){ee[j?"unshift":"push"](()=>{f=j,t(6,f)})}const A=j=>Math.sqrt(Math.pow(j,5)),L=j=>{j.target===j.currentTarget&&d()};return n.$$set=j=>{"visible"in j&&t(0,o=j.visible),"title"in j&&t(2,l=j.title),"pinnable"in j&&t(3,a=j.pinnable),"isPinned"in j&&t(1,u=j.isPinned),"backgroundColor"in j&&t(4,c=j.backgroundColor),"centered"in j&&t(5,h=j.centered),"$$scope"in j&&t(14,s=j.$$scope)},[o,u,l,a,c,h,f,p,v,d,y,C,S,M,s,i,R,k,N,g,A,L]}class qe extends be{constructor(e){super(),we(this,e,Rg,Pg,_e,{visible:0,title:2,pinnable:3,isPinned:1,backgroundColor:4,centered:5})}}function jg(n){let e,t,i,s,r,o;return{c(){e=I("label"),t=Y(n[3]),i=P(),s=I("input"),m(s,"type","number"),m(s,"max",n[1]),m(s,"min",n[2]),s.readOnly=n[4]},m(l,a){b(l,e,a),E(e,t),E(e,i),E(e,s),rt(s,n[0]),n[8](s),r||(o=[H(s,"input",n[7]),H(s,"change",n[6])],r=!0)},p(l,[a]){a&8&&ge(t,l[3]),a&2&&m(s,"max",l[1]),a&4&&m(s,"min",l[2]),a&16&&(s.readOnly=l[4]),a&1&&pa(s.value)!==l[0]&&rt(s,l[0])},i:z,o:z,d(l){l&&w(e),n[8](null),r=!1,Ae(o)}}}function Ug(n,e,t){let{value:i}=e,{max:s=null}=e,{min:r=null}=e,{label:o=""}=e,{readonly:l=!1}=e,a;function u(d){if(isNaN(parseInt(i))){t(0,i=r|0);return}s===null||r===null||(a.value>s&&t(0,i=s),a.value<r&&t(0,i=r))}function c(){i=pa(this.value),t(0,i)}function h(d){ee[d?"unshift":"push"](()=>{a=d,t(5,a)})}return n.$$set=d=>{"value"in d&&t(0,i=d.value),"max"in d&&t(1,s=d.max),"min"in d&&t(2,r=d.min),"label"in d&&t(3,o=d.label),"readonly"in d&&t(4,l=d.readonly)},[i,s,r,o,l,a,u,c,h]}class Lo extends be{constructor(e){super(),we(this,e,Ug,jg,_e,{value:0,max:1,min:2,label:3,readonly:4})}}function Yl(n){let e,t,i,s,r,o=n[3].join(", ")+"",l,a;return{c(){e=I("div"),t=I("p"),t.textContent="Seed already done. You will not recieve any score.",i=P(),s=I("p"),r=Y("You have also used these seeds: "),l=Y(o)},m(u,c){b(u,e,c),E(e,t),E(e,i),E(e,s),E(s,r),E(s,l)},p(u,c){c&8&&o!==(o=u[3].join(", ")+"")&&ge(l,o)},i(u){a||at(()=>{a=_a(e,wa,{}),a.start()})},o:z,d(u){u&&w(e)}}}function Fg(n){let e,t,i,s,r,o,l,a,u,c,h,d,f,p,v,_=n[3].includes(n[1]),T,y,C,S,M,R,k;function N(D){n[6](D)}let g={label:"Rules:",max:100,min:1};n[0]!==void 0&&(g.value=n[0]),i=new Lo({props:g}),ee.push(()=>ue(i,"value",N));function A(D){n[7](D)}let L={label:"Seed:",max:1e6,min:-1e6};n[1]!==void 0&&(L.value=n[1]),l=new Lo({props:L}),ee.push(()=>ue(l,"value",A));let j=_&&Yl(n);return{c(){e=I("h1"),e.textContent="New board",t=P(),oe(i.$$.fragment),r=I("br"),o=P(),oe(l.$$.fragment),u=I("br"),c=P(),h=I("div"),d=Y("Cost:"),f=I("span"),p=Y(n[2]),v=P(),j&&j.c(),T=P(),y=I("button"),C=Y("New game"),ne(f,"color",n[4]<n[2]?"red":"green"),y.disabled=S=n[4]<n[2]},m(D,G){b(D,e,G),b(D,t,G),se(i,D,G),b(D,r,G),b(D,o,G),se(l,D,G),b(D,u,G),b(D,c,G),b(D,h,G),E(h,d),E(h,f),E(f,p),E(h,v),j&&j.m(h,null),b(D,T,G),b(D,y,G),E(y,C),M=!0,R||(k=H(y,"click",n[5]),R=!0)},p(D,[G]){const x={};!s&&G&1&&(s=!0,x.value=D[0],he(()=>s=!1)),i.$set(x);const le={};!a&&G&2&&(a=!0,le.value=D[1],he(()=>a=!1)),l.$set(le),(!M||G&4)&&ge(p,D[2]),(!M||G&20)&&ne(f,"color",D[4]<D[2]?"red":"green"),G&10&&(_=D[3].includes(D[1])),_?j?(j.p(D,G),G&10&&F(j,1)):(j=Yl(D),j.c(),F(j,1),j.m(h,null)):j&&(j.d(1),j=null),(!M||G&20&&S!==(S=D[4]<D[2]))&&(y.disabled=S)},i(D){M||(F(i.$$.fragment,D),F(l.$$.fragment,D),F(j),M=!0)},o(D){q(i.$$.fragment,D),q(l.$$.fragment,D),M=!1},d(D){D&&w(e),D&&w(t),re(i,D),D&&w(r),D&&w(o),re(l,D),D&&w(u),D&&w(c),D&&w(h),j&&j.d(),D&&w(T),D&&w(y),R=!1,k()}}}function zg(n,e,t){let i,s,r;ot(n,tr,f=>t(3,i=f)),ot(n,en,f=>t(4,s=f)),ot(n,ct,f=>t(8,r=f));const o=Ah();function l(){s<c||(i.includes(r.gameSettings.seed)||vn(tr,i=[...i,r.gameSettings.seed],i),vn(en,s=s-c,s),o("newGame",{seed:u,ruleCount:a}))}let a=1,u=0,c=0;function h(f){a=f,t(0,a)}function d(f){u=f,t(1,u)}return n.$$.update=()=>{n.$$.dirty&15&&(t(2,c=Math.log(a)*3+25*(a-1)),u!==0&&t(2,c+=100),i.includes(u)&&t(2,c=0),t(2,c=Math.floor(c)))},[a,u,c,i,s,l,h,d]}class Vg extends be{constructor(e){super(),we(this,e,zg,Fg,_e,{})}}function Wl(n,e,t){const i=n.slice();return i[35]=e[t],i[37]=t,i}function Jl(n,e,t){const i=n.slice();return i[38]=e[t],i[40]=t,i}function Xl(n){let e,t,i,s=n[38].text+"",r,o,l;function a(...h){return n[17](n[37],n[40],...h)}function u(...h){return n[18](n[37],n[40],...h)}function c(...h){return n[19](n[37],n[40],...h)}return{c(){e=I("div"),t=I("div"),i=I("div"),r=Y(s),m(i,"class","square empty svelte-roo0ey"),ne(i,"transform-origin","top center"),ne(i,"transform","scale("+n[38].scale+")"),ne(i,"filter","drop-shadow("+n[38].dropshadow),ye(i,"used",n[38].used),m(t,"class","svelte-roo0ey"),ye(t,"selected",n[38].selected),m(e,"class","svelte-roo0ey"),ye(e,"dark",n[38].selected)},m(h,d){b(h,e,d),E(e,t),E(t,i),E(i,r),o||(l=[H(t,"pointerdown",a),H(t,"pointerover",u),H(t,"pointerup",c),H(t,"gotpointercapture",qg)],o=!0)},p(h,d){n=h,d[0]&2&&s!==(s=n[38].text+"")&&ge(r,s),d[0]&2&&ne(i,"transform","scale("+n[38].scale+")"),d[0]&2&&ne(i,"filter","drop-shadow("+n[38].dropshadow),d[0]&2&&ye(i,"used",n[38].used),d[0]&2&&ye(t,"selected",n[38].selected),d[0]&2&&ye(e,"dark",n[38].selected)},d(h){h&&w(e),o=!1,Ae(l)}}}function Zl(n){let e,t,i=n[35],s=[];for(let r=0;r<i.length;r+=1)s[r]=Xl(Jl(n,i,r));return{c(){e=I("div");for(let r=0;r<s.length;r+=1)s[r].c();t=P(),m(e,"class","row svelte-roo0ey")},m(r,o){b(r,e,o);for(let l=0;l<s.length;l+=1)s[l]&&s[l].m(e,null);E(e,t)},p(r,o){if(o[0]&1794){i=r[35];let l;for(l=0;l<i.length;l+=1){const a=Jl(r,i,l);s[l]?s[l].p(a,o):(s[l]=Xl(a),s[l].c(),s[l].m(e,t))}for(;l<s.length;l+=1)s[l].d(1);s.length=i.length}},d(r){r&&w(e),yt(s,r)}}}function xg(n){let e,t;return e=new Vg({}),e.$on("newGame",n[6]),{c(){oe(e.$$.fragment)},m(i,s){se(e,i,s),t=!0},p:z,i(i){t||(F(e.$$.fragment,i),t=!0)},o(i){q(e.$$.fragment,i),t=!1},d(i){re(e,i)}}}function Bg(n){let e,t,i,s,r,o,l,a,u,c,h,d,f,p,v,_,T,y,C,S,M,R,k=n[1],N=[];for(let L=0;L<k.length;L+=1)N[L]=Zl(Wl(n,k,L));function g(L){n[22](L)}let A={title:"New board",pinnable:!1,centered:!0,$$slots:{default:[xg]},$$scope:{ctx:n}};return n[0]!==void 0&&(A.visible=n[0]),y=new qe({props:A}),ee.push(()=>ue(y,"visible",g)),{c(){e=I("div"),t=I("p"),i=Y("Rules:"),s=Y(n[3]),r=P(),o=I("p"),l=Y(n[4]),a=Y("% complete; score: "),u=Y(n[5]),c=P(),h=I("div"),d=I("img"),p=P(),v=I("div"),_=I("div");for(let L=0;L<N.length;L+=1)N[L].c();T=P(),oe(y.$$.fragment),m(t,"class","tcenter svelte-roo0ey"),ne(t,"font-size","1rem"),m(o,"class","tcenter svelte-roo0ey"),Ie(d.src,f=Ag)||m(d,"src",f),m(d,"alt","New Board"),m(h,"class","tcenter svelte-roo0ey"),ne(h,"cursor","pointer"),m(v,"class","center svelte-roo0ey"),m(e,"class","main svelte-roo0ey")},m(L,j){b(L,e,j),E(e,t),E(t,i),E(t,s),E(e,r),E(e,o),E(o,l),E(o,a),E(o,u),E(e,c),E(e,h),E(h,d),E(e,p),E(e,v),E(v,_);for(let D=0;D<N.length;D+=1)N[D]&&N[D].m(_,null);n[20](_),b(L,T,j),se(y,L,j),S=!0,M||(R=[H(window,"pointerup",n[11]),H(t,"click",n[7]),H(d,"click",n[16]),H(e,"pointermove",n[21])],M=!0)},p(L,j){if((!S||j[0]&8)&&ge(s,L[3]),(!S||j[0]&16)&&ge(l,L[4]),(!S||j[0]&32)&&ge(u,L[5]),j[0]&1794){k=L[1];let G;for(G=0;G<k.length;G+=1){const x=Wl(L,k,G);N[G]?N[G].p(x,j):(N[G]=Zl(x),N[G].c(),N[G].m(_,null))}for(;G<N.length;G+=1)N[G].d(1);N.length=k.length}const D={};j[1]&1024&&(D.$$scope={dirty:j,ctx:L}),!C&&j[0]&1&&(C=!0,D.visible=L[0],he(()=>C=!1)),y.$set(D)},i(L){S||(F(y.$$.fragment,L),S=!0)},o(L){q(y.$$.fragment,L),S=!1},d(L){L&&w(e),yt(N,L),n[20](null),L&&w(T),re(y,L),M=!1,Ae(R)}}}let Fn=18;function ao(n,e){let t=!1;return e.forEach(i=>{i(n)&&(t=!0)}),t}function qg(n){n.target.releasePointerCapture(n.pointerId)}function Hg(n,e,t){let i,s,r,o,l,a,u,c,h;ot(n,ct,W=>t(15,u=W)),ot(n,en,W=>t(5,c=W)),ot(n,tr,W=>t(29,h=W));let d=!1,f,p=0,v=0;function _(W){let Te=[...Array(Fn)].map((He,me)=>[...Array(Fn)].map((Pe,pt)=>Math.floor(Ds(W+me+pt*W*Ds(me+pt*me)*1e3)*100))),ke=0;return Te.map(He=>{He.forEach(me=>{ao(me,As(W,i))&&ke++})}),ke}function T(W=!1){t(1,f=[...Array(Fn)].map((Te,ke)=>[...Array(Fn)].map((He,me)=>({x:me,y:ke,text:Math.floor(Ds(u.gameSettings.seed+ke+me*u.gameSettings.seed*Ds(ke+me*ke)*1e3)*100),selected:!1,used:!1,scale:1,dropshadow:"none"})))),t(13,p=0),t(14,v=_(u.gameSettings.seed)),console.log(`Created board with seed: ${u.gameSettings.seed}
Solvable squares: %c${v}`,v===0?"color:red;":"color:green;"),W||D({pageX:99999,pageY:99999})}ga(()=>{T(!0),D({pageX:99999,pageY:99999})});const y=ct.subscribe(()=>T(!1));Nh(y);function C(W){vn(ct,u.gameSettings.rulesCount=W.detail.ruleCount,u),W.detail.seed!==0?vn(ct,u.gameSettings.seed=W.detail.seed,u):vn(ct,u.gameSettings.seed=Math.floor(Math.random()*1e5),u),t(0,d=!1),T(!1)}function S(){As(u.gameSettings.seed,i).forEach(W=>{console.log(W.toString())})}let M=[],R=!1;const k=[[-1,0],[1,0],[0,1],[0,-1]];function N(W,Te,ke){R=!0,M.push(f[W][Te]),t(1,f[W][Te].selected=!0,f)}function g(W,Te,ke){if(M.length<=0||!R)return;let He=k.map(Pe=>{try{return M.includes(f[W+Pe[0]][Te+Pe[1]])}catch{return!1}}),me=!1;He.forEach(Pe=>{Pe&&(me=!0)}),me&&!M.includes(f[W][Te])&&(M.push(f[W][Te]),t(1,f[W][Te].selected=!0,f))}function A(W,Te,ke){let He=!0;if(M.forEach(me=>{ao(me.text,As(u.gameSettings.seed,i))||(He=!1)}),He){let me=0;M.forEach(Pe=>{ao(Pe.text,As(u.gameSettings.seed,i))&&(Pe.used||(Pe.used=!0,me++))}),h.includes(u.gameSettings.seed)||en.set(c+me*me),t(13,p+=me)}if(ke!==null&&D(ke),p>=v){const me=u;console.log("RANDOM???"),me.gameSettings.seed=Math.random()*1e6,ct.set(me)}f.forEach(me=>{me.forEach(Pe=>Pe.selected=!1)})}function L(W){R=!1,M=[],f.forEach(Te=>{Te.forEach(ke=>ke.selected=!1)})}let j=null;function D(W){if(!a){t(1,f=f.map(lt=>lt.map(fn=>{let B=fn;return B.scale=1,B.dropshadow="none",B})));return}const Te=W.pageX,ke=W.pageY,He=j.offsetLeft,me=j.offsetTop,Pe=j.childNodes[0].childNodes[0].clientWidth/4,pt=j.childNodes[0].childNodes[0].clientHeight/4,vi=He+Pe-Te,Ms=me+pt-ke;for(let lt=0;lt<Fn;lt++){const fn=lt*40+Ms;for(let B=0;B<Fn;B++){const fe=B*40+vi,Rn=Math.hypot(fe,fn);if(Rn>r){t(1,f[lt][B].scale=o,f);continue}let ks=Math.pow(6,Rn*-.004+.5);if(f[lt][B].used&&(ks/=2),l){const sg=f[lt][B].dropshadow;Rn<100?t(1,f[lt][B].dropshadow=`${fe/3}px ${fn/3}px ${ks}px rgba(255, 255, 255, ${ks-1.3}))`,f):sg!=="0px 0px"&&t(1,f[lt][B].dropshadow="0px 0px",f)}t(1,f[lt][B].scale=(Math.round(ks*100)/100).toFixed(1),f)}}}const G=()=>t(0,d=!0),x=(W,Te,ke)=>N(W,Te),le=(W,Te,ke)=>g(W,Te),Bt=(W,Te,ke)=>A(W,Te,ke);function cn(W){ee[W?"unshift":"push"](()=>{j=W,t(2,j)})}const hn=W=>D(W);function Cs(W){d=W,t(0,d)}return n.$$.update=()=>{n.$$.dirty[0]&32768&&t(3,i=u.gameSettings.rulesCount),n.$$.dirty[0]&24576&&t(4,s=Math.round(p/v*100)),n.$$.dirty[0]&32768&&(r=u.renderSize),n.$$.dirty[0]&32768&&(o=u.baseNumberSize),n.$$.dirty[0]&32768&&(l=u.displayShadows),n.$$.dirty[0]&32768&&(a=u.runMouseOver)},[d,f,j,i,s,c,C,S,N,g,A,L,D,p,v,u,G,x,le,Bt,cn,hn,Cs]}class $g extends be{constructor(e){super(),we(this,e,Hg,Bg,_e,{},null,[-1,-1])}}function Gg(n){let e,t,i;const s=n[3].default,r=_h(s,n,n[2],null);return{c(){e=I("main"),t=I("div"),r&&r.c(),m(t,"class","main svelte-1g58oi0"),ye(t,"scanlines",n[0]),ye(t,"filter",n[1])},m(o,l){b(o,e,l),E(e,t),r&&r.m(t,null),i=!0},p(o,[l]){r&&r.p&&(!i||l&4)&&Ih(r,s,o,o[2],i?bh(s,o[2],l,null):Th(o[2]),null),(!i||l&1)&&ye(t,"scanlines",o[0]),(!i||l&2)&&ye(t,"filter",o[1])},i(o){i||(F(r,o),i=!0)},o(o){q(r,o),i=!1},d(o){o&&w(e),r&&r.d(o)}}}function Qg(n,e,t){let{$$slots:i={},$$scope:s}=e,{scanlinesOn:r=!0}=e,{filterOn:o=!0}=e;return n.$$set=l=>{"scanlinesOn"in l&&t(0,r=l.scanlinesOn),"filterOn"in l&&t(1,o=l.filterOn),"$$scope"in l&&t(2,s=l.$$scope)},[r,o,s,i]}class Kg extends be{constructor(e){super(),we(this,e,Qg,Gg,_e,{scanlinesOn:0,filterOn:1})}}function eu(n,e,t){const i=n.slice();return i[20]=e[t],i[21]=e,i[22]=t,i}function tu(n,e){let t,i,s=e[20].name+"",r,o,l,a=nu(e[20].date)+"",u,c,h,d,f,p,v,_,T;function y(){e[10].call(i,e[21],e[22])}function C(){return e[11](e[22])}function S(){return e[12](e[20])}return{key:n,first:null,c(){t=I("tr"),i=I("td"),r=Y(s),o=P(),l=I("td"),u=Y(a),c=P(),h=I("td"),d=I("button"),d.textContent="Select",f=P(),p=I("button"),p.textContent="Delete",v=P(),m(i,"class","item svelte-17rcb2a"),m(i,"contenteditable","true"),e[20].name===void 0&&at(y),m(l,"class","item svelte-17rcb2a"),m(d,"class","item svelte-17rcb2a"),m(p,"class","item svelte-17rcb2a"),m(t,"class","row svelte-17rcb2a"),this.first=t},m(M,R){b(M,t,R),E(t,i),E(i,r),e[20].name!==void 0&&(i.innerHTML=e[20].name),E(t,o),E(t,l),E(l,u),E(t,c),E(t,h),E(h,d),E(h,f),E(h,p),E(t,v),_||(T=[H(i,"input",y),H(d,"click",C),H(p,"click",S)],_=!0)},p(M,R){e=M,R&16&&s!==(s=e[20].name+"")&&hg(r,s),R&16&&e[20].name!==i.innerHTML&&(i.innerHTML=e[20].name),R&16&&a!==(a=nu(e[20].date)+"")&&ge(u,a)},d(M){M&&w(t),_=!1,Ae(T)}}}function Yg(n){let e,t,i,s=[],r=new Map,o=n[4];const l=a=>new Date(a[20].date).getTime();for(let a=0;a<o.length;a+=1){let u=eu(n,o,a),c=l(u);r.set(c,s[a]=tu(c,u))}return{c(){e=I("table"),t=I("tr"),t.innerHTML=`<th class="item svelte-17rcb2a">Name</th> 
          <th class="item svelte-17rcb2a">Date</th> 
          
          <th class="item svelte-17rcb2a">Options</th>`,i=P();for(let a=0;a<s.length;a+=1)s[a].c();m(t,"class","row svelte-17rcb2a"),m(e,"class","container svelte-17rcb2a")},m(a,u){b(a,e,u),E(e,t),E(e,i);for(let c=0;c<s.length;c+=1)s[c]&&s[c].m(e,null)},p(a,u){u&344&&(o=a[4],s=Tn(s,u,l,1,a,o,r,e,Ui,tu,null,eu))},d(a){a&&w(e);for(let u=0;u<s.length;u+=1)s[u].d()}}}function Wg(n){let e,t,i,s,r,o,l,a,u,c,h;return{c(){e=I("button"),e.textContent="New note",t=P(),i=I("button"),i.textContent="Load note",s=P(),r=I("button"),r.textContent="-",o=P(),l=I("button"),l.textContent="+",a=P(),u=I("div"),m(u,"class","text-editor svelte-17rcb2a"),m(u,"contenteditable","true"),n[4][n[5][0].appInfo.selectedNote].content===void 0&&at(()=>n[17].call(u))},m(d,f){b(d,e,f),b(d,t,f),b(d,i,f),b(d,s,f),b(d,r,f),b(d,o,f),b(d,l,f),b(d,a,f),b(d,u,f),n[4][n[5][0].appInfo.selectedNote].content!==void 0&&(u.innerHTML=n[4][n[5][0].appInfo.selectedNote].content),c||(h=[H(e,"click",n[7]),H(i,"click",n[14]),H(r,"click",n[15]),H(l,"click",n[16]),H(u,"input",n[17])],c=!0)},p(d,f){f&48&&d[4][d[5][0].appInfo.selectedNote].content!==u.innerHTML&&(u.innerHTML=d[4][d[5][0].appInfo.selectedNote].content)},d(d){d&&w(e),d&&w(t),d&&w(i),d&&w(s),d&&w(r),d&&w(o),d&&w(l),d&&w(a),d&&w(u),c=!1,Ae(h)}}}function Jg(n){let e,t,i,s,r,o,l,a;function u(p){n[13](p)}let c={title:"Load note",$$slots:{default:[Yg]},$$scope:{ctx:n}};n[3]!==void 0&&(c.visible=n[3]),t=new qe({props:c}),ee.push(()=>ue(t,"visible",u));function h(p){n[18](p)}function d(p){n[19](p)}let f={title:n[2],$$slots:{default:[Wg]},$$scope:{ctx:n}};return n[0]!==void 0&&(f.visible=n[0]),n[1]!==void 0&&(f.isPinned=n[1]),r=new qe({props:f}),ee.push(()=>ue(r,"visible",h)),ee.push(()=>ue(r,"isPinned",d)),{c(){e=I("div"),oe(t.$$.fragment),s=P(),oe(r.$$.fragment),ne(e,"z-index","3")},m(p,v){b(p,e,v),se(t,e,null),b(p,s,v),se(r,p,v),a=!0},p(p,[v]){const _={};v&8388632&&(_.$$scope={dirty:v,ctx:p}),!i&&v&8&&(i=!0,_.visible=p[3],he(()=>i=!1)),t.$set(_);const T={};v&4&&(T.title=p[2]),v&8388664&&(T.$$scope={dirty:v,ctx:p}),!o&&v&1&&(o=!0,T.visible=p[0],he(()=>o=!1)),!l&&v&2&&(l=!0,T.isPinned=p[1],he(()=>l=!1)),r.$set(T)},i(p){a||(F(t.$$.fragment,p),F(r.$$.fragment,p),a=!0)},o(p){q(t.$$.fragment,p),q(r.$$.fragment,p),a=!1},d(p){p&&w(e),re(t),p&&w(s),re(r,p)}}}function nu(n){n=new Date(n);function e(a,u){for(a=a.toString();a.length<u;)a="0"+a;return a}let t=e(n.getHours(),2),i=e(n.getMinutes(),2),s=e(n.getSeconds(),2),r=e(n.getDate(),2),o=e(n.getMonth()+1,2),l=n.getFullYear();return`${r}/${o}/${l} ${t}:${i}:${s}`}function Xg(n,e,t){let i,s;ot(n,Ht,k=>t(4,i=k)),ot(n,dt,k=>t(5,s=k));let{visible:r=!1}=e,{isPinned:o=!1}=e,{title:l="New window"}=e,a=!1;function u(k){let N=s;N[0].appInfo.selectedNote=k,dt.set(N)}function c(){let k={name:"new note ("+i.length+")",content:"",date:new Date};Ht.set([...i,k]),u(i.length-1)}function h(k){if(!(i.length<=1))for(Ht.set(i.filter(N=>new Date(N.date).getTime()!==new Date(k.date).getTime()));s[0].appInfo.selectedNote>=i.length;)u(s[0].appInfo.selectedNote-1)}function d(k){let N=s[0].appInfo.selectedNote+k;N>=i.length||N<0||u(N)}function f(k,N){k[N].name=this.innerHTML,Ht.set(i)}const p=k=>{u(k),t(3,a=!1)},v=k=>h(k);function _(k){a=k,t(3,a)}const T=()=>t(3,a=!0),y=()=>d(-1),C=()=>d(1);function S(){i[s[0].appInfo.selectedNote].content=this.innerHTML,Ht.set(i)}function M(k){r=k,t(0,r)}function R(k){o=k,t(1,o)}return n.$$set=k=>{"visible"in k&&t(0,r=k.visible),"isPinned"in k&&t(1,o=k.isPinned),"title"in k&&t(2,l=k.title)},[r,o,l,a,i,s,u,c,h,d,f,p,v,_,T,y,C,S,M,R]}class Zg extends be{constructor(e){super(),we(this,e,Xg,Jg,_e,{visible:0,isPinned:1,title:2})}}function iu(n,e,t){const i=n.slice();return i[3]=e[t],i}function em(n){let e,t;return{c(){e=I("div"),t=Y(n[0]),m(e,"class","svelte-qi44sg")},m(i,s){b(i,e,s),E(e,t)},p(i,s){s&1&&ge(t,i[0])},d(i){i&&w(e)}}}function tm(n){let e,t,i=n[1].join(" ")+"",s,r,o,l,a;return{c(){e=I("div"),t=I("div"),s=Y(i),r=P(),o=I("div"),l=I("div"),a=Y(n[0]),m(t,"class","top svelte-qi44sg"),m(e,"class","svelte-qi44sg"),m(l,"class","bottom svelte-qi44sg"),m(o,"class","svelte-qi44sg")},m(u,c){b(u,e,c),E(e,t),E(t,s),b(u,r,c),b(u,o,c),E(o,l),E(l,a)},p(u,c){c&2&&i!==(i=u[1].join(" ")+"")&&ge(s,i),c&1&&ge(a,u[0])},d(u){u&&w(e),u&&w(r),u&&w(o)}}}function su(n){let e,t=n[3].value+"",i,s,r,o;return{c(){e=I("button"),i=Y(t),m(e,"id",s=n[3].id),m(e,"class","svelte-qi44sg")},m(l,a){b(l,e,a),E(e,i),r||(o=H(e,"click",function(){on(n[3].func)&&n[3].func.apply(this,arguments)}),r=!0)},p(l,a){n=l,a&4&&t!==(t=n[3].value+"")&&ge(i,t),a&4&&s!==(s=n[3].id)&&m(e,"id",s)},d(l){l&&w(e),r=!1,o()}}}function nm(n){let e,t,i;function s(u,c){return u[0]!=="err"?tm:em}let r=s(n),o=r(n),l=n[2],a=[];for(let u=0;u<l.length;u+=1)a[u]=su(iu(n,l,u));return{c(){e=I("div"),t=I("div"),o.c(),i=P();for(let u=0;u<a.length;u+=1)a[u].c();m(t,"id","display"),m(t,"class","svelte-qi44sg"),m(e,"class","calculator svelte-qi44sg")},m(u,c){b(u,e,c),E(e,t),o.m(t,null),E(e,i);for(let h=0;h<a.length;h+=1)a[h]&&a[h].m(e,null)},p(u,[c]){if(r===(r=s(u))&&o?o.p(u,c):(o.d(1),o=r(u),o&&(o.c(),o.m(t,null))),c&4){l=u[2];let h;for(h=0;h<l.length;h+=1){const d=iu(u,l,h);a[h]?a[h].p(d,c):(a[h]=su(d),a[h].c(),a[h].m(e,null))}for(;h<a.length;h+=1)a[h].d(1);a.length=l.length}},i:z,o:z,d(u){u&&w(e),o.d(),yt(a,u)}}}function im(n,e,t){let{total:i}=e,{totalArr:s}=e,{buttons:r}=e;return n.$$set=o=>{"total"in o&&t(0,i=o.total),"totalArr"in o&&t(1,s=o.totalArr),"buttons"in o&&t(2,r=o.buttons)},[i,s,r]}class sm extends be{constructor(e){super(),we(this,e,im,nm,_e,{total:0,totalArr:1,buttons:2})}}function rm(n){let e,t,i,s,r;return t=new sm({props:{total:n[1],buttons:n[3],totalArr:n[0]}}),{c(){e=P(),oe(t.$$.fragment)},m(o,l){b(o,e,l),se(t,o,l),i=!0,s||(r=H(document.body,"keydown",n[2]),s=!0)},p(o,[l]){const a={};l&2&&(a.total=o[1]),l&1&&(a.totalArr=o[0]),t.$set(a)},i(o){i||(F(t.$$.fragment,o),i=!0)},o(o){q(t.$$.fragment,o),i=!1},d(o){o&&w(e),re(t,o),s=!1,r()}}}function om(n,e,t){let i,s=[],r=0,o=!1;function l(T){const y={"+"(M,R){return(M+R).toPrecision(9)/1},"-"(M,R){return(M-R).toPrecision(9)/1},x(M,R){return(M*R).toPrecision(9)/1},"/"(M,R){return(M/R).toPrecision(9)/1}};s[s.length-3]==="="&&t(0,s=[r,T]);let C=s.length,S=s[C-3];C===4?t(1,r=y[S](Number(s[0]),Number(s[2]))):C>5&&C%2===0&&t(1,r=y[S](Number(r),Number(s[C-2])))}function a(T){o=!1,i?s[s.length-1].indexOf(".")===-1&&s[s.length-1]==="0"?t(0,s[s.length-1]=T.target.innerText,s):t(0,s[s.length-1]=s[s.length-1]+T.target.innerText,s):(s[s.length-1]==="="&&d(),s.push(T.target.innerText)),s.length===1&&t(1,r=parseFloat(s[0])),t(0,s),t(1,r)}function u(T){s.length&&r!=="err"?isNaN(s[s.length-1])?s[s.length-1]==="="?t(0,s=[r,T.target.innerText]):t(0,s[s.length-1]=T.target.innerText,s):(s.push(T.target.innerText),l(T.target.innerText)):r==="err"?(t(1,r=0),t(0,s=["0",T.target.innerText])):(s.push(r),s.push(T.target.innerText)),t(0,s),t(1,r)}function c(){s.length>2&&(s[s.length-1]!=="="?i?s.push("="):t(0,s[s.length-1]="=",s):t(0,s=[r,s[s.length-3],s[s.length-2],"="]),l(),t(0,s),t(1,r))}function h(){let T=s[s.length-1];isNaN(T)?(T==="="&&d(),s.push("0."),r==="err"&&t(1,r="0."),t(0,s),t(1,r)):T.indexOf(".")===-1&&t(0,s[s.length-1]=s[s.length-1]+".",s)}function d(){t(0,s=[]),t(1,r=0)}function f(){i?(t(0,s[s.length-1]=0-s[s.length-1],s),s.length===1&&t(1,r=s[s.length-1])):s[s.length-1]==="="&&(t(1,r=0-r),t(0,s=[r]))}function p(){(s[s.length-1]==="="||r==="err")&&(o=!0),o?(o=!1,t(0,s=[]),t(1,r=0)):(o=!0,i&&(s.pop(),t(0,s),t(1,r)))}function v(T){let y={target:{innerText:T.key}};if(T.key==="*"&&(y.target.innerText="x"),!isNaN(T.key))a(y);else if(["+","-","/","*"].indexOf(T.key)>-1)u(y);else switch(T.key){case"Enter":T.preventDefault(),c();break;case"Backspace":p();break;case"Delete":d();break;case".":h();break}}let _=[{value:"ac",func:d,id:"ac"},{value:"c",func:p,id:"clear"},{value:"+/-",func:f,id:"neg"},{value:"/",func:u,id:"divide"},{value:"x",func:u,id:"multiply"},{value:"-",func:u,id:"minus"},{value:"7",func:a,id:"seven"},{value:"8",func:a,id:"eight"},{value:"9",func:a,id:"nine"},{value:"+",func:u,id:"add"},{value:"4",func:a,id:"four"},{value:"5",func:a,id:"five"},{value:"6",func:a,id:"six"},{value:"1",func:a,id:"one"},{value:"2",func:a,id:"two"},{value:"3",func:a,id:"three"},{value:"=",func:c,id:"equal"},{value:"0",func:a,id:"zero"},{value:".",func:h,id:"decimal"}];return n.$$.update=()=>{n.$$.dirty&2&&(r>Number.MAX_VALUE||r<-Number.MAX_VALUE)&&(t(1,r="err"),t(0,s=[])),n.$$.dirty&1&&(i=s[s.length-1]&&!isNaN(s[s.length-1]))},[s,r,v,_]}class am extends be{constructor(e){super(),we(this,e,om,rm,_e,{})}}function lm(n){let e,t,i,s;return e=new am({}),{c(){oe(e.$$.fragment),t=P(),i=I("a"),i.textContent="Credit",m(i,"href","https://codesandbox.io/s/svelte-calculator-9icog?file=/Components/Calculator/Display.svelte:0-1841")},m(r,o){se(e,r,o),b(r,t,o),b(r,i,o),s=!0},p:z,i(r){s||(F(e.$$.fragment,r),s=!0)},o(r){q(e.$$.fragment,r),s=!1},d(r){re(e,r),r&&w(t),r&&w(i)}}}function um(n){let e,t,i,s;function r(a){n[3](a)}function o(a){n[4](a)}let l={title:n[2],centered:!0,$$slots:{default:[lm]},$$scope:{ctx:n}};return n[0]!==void 0&&(l.visible=n[0]),n[1]!==void 0&&(l.isPinned=n[1]),e=new qe({props:l}),ee.push(()=>ue(e,"visible",r)),ee.push(()=>ue(e,"isPinned",o)),{c(){oe(e.$$.fragment)},m(a,u){se(e,a,u),s=!0},p(a,[u]){const c={};u&4&&(c.title=a[2]),u&32&&(c.$$scope={dirty:u,ctx:a}),!t&&u&1&&(t=!0,c.visible=a[0],he(()=>t=!1)),!i&&u&2&&(i=!0,c.isPinned=a[1],he(()=>i=!1)),e.$set(c)},i(a){s||(F(e.$$.fragment,a),s=!0)},o(a){q(e.$$.fragment,a),s=!1},d(a){re(e,a)}}}function cm(n,e,t){let{visible:i=!1}=e,{title:s="New window"}=e,{isPinned:r=!1}=e;function o(a){i=a,t(0,i)}function l(a){r=a,t(1,r)}return n.$$set=a=>{"visible"in a&&t(0,i=a.visible),"title"in a&&t(2,s=a.title),"isPinned"in a&&t(1,r=a.isPinned)},[i,r,s,o,l]}class hm extends be{constructor(e){super(),we(this,e,cm,um,_e,{visible:0,title:2,isPinned:1})}}function jh(n){return Object.fromEntries([...Array(n*n).keys()].map(e=>[e.toString(),"#000000"]))}const Uh=60,Fh=an(Uh),Ti=an("#ff3e00"),zh=an(jh(Uh));function ru(n,e,t){const i=n.slice();return i[8]=e[t],i[10]=t,i}function ou(n){let e,t,i,s;return{c(){e=I("div"),m(e,"id",n[10].toString()),m(e,"class","block svelte-z2u40q"),m(e,"style",t=`background-color: ${n[1][n[10].toString()]}`)},m(r,o){b(r,e,o),i||(s=[H(e,"mouseup",n[3]),H(e,"mousedown",n[4]),H(e,"mouseenter",n[6])],i=!0)},p(r,o){o&2&&t!==(t=`background-color: ${r[1][r[10].toString()]}`)&&m(e,"style",t)},d(r){r&&w(e),i=!1,Ae(s)}}}function fm(n){let e,t=Object.entries(n[1]),i=[];for(let s=0;s<t.length;s+=1)i[s]=ou(ru(n,t,s));return{c(){e=I("div");for(let s=0;s<i.length;s+=1)i[s].c();m(e,"class","canvas svelte-z2u40q"),ne(e,"--gridSize",n[2])},m(s,r){b(s,e,r);for(let o=0;o<i.length;o+=1)i[o]&&i[o].m(e,null)},p(s,[r]){if(r&59){t=Object.entries(s[1]);let o;for(o=0;o<t.length;o+=1){const l=ru(s,t,o);i[o]?i[o].p(l,r):(i[o]=ou(l),i[o].c(),i[o].m(e,null))}for(;o<i.length;o+=1)i[o].d(1);i.length=t.length}r&4&&ne(e,"--gridSize",s[2])},i:z,o:z,d(s){s&&w(e),yt(i,s)}}}function dm(n,e,t){let i,s=!1,r,o;Ti.subscribe(h=>{t(0,i=h)}),zh.subscribe(h=>{t(1,r=h)}),Fh.subscribe(h=>{t(2,o=h)});function l(h){s=!1}function a(h){return s=!0,u(h,i)}function u(h,d){if(s){const f=h.currentTarget.getAttribute("id");t(1,r={...r,[f]:d})}}return[i,r,o,l,a,u,h=>u(h,i)]}class pm extends be{constructor(e){super(),we(this,e,dm,fm,_e,{})}}function gm(n){let e,t,i,s,r,o,l,a,u,c,h,d;return{c(){e=I("div"),t=I("button"),i=P(),s=I("button"),r=P(),o=I("button"),l=P(),a=I("button"),u=P(),c=I("button"),c.textContent="clear",ne(t,"--bg-color","#ff3e00"),m(t,"class","svelte-fqpk6a"),ne(s,"--bg-color","red"),m(s,"class","svelte-fqpk6a"),ne(o,"--bg-color","green"),m(o,"class","svelte-fqpk6a"),ne(a,"--bg-color","blue"),m(a,"class","svelte-fqpk6a"),m(c,"class","clear svelte-fqpk6a"),ne(c,"--bg-color","#ff3e00"),m(e,"class","menu svelte-fqpk6a")},m(f,p){b(f,e,p),E(e,t),E(e,i),E(e,s),E(e,r),E(e,o),E(e,l),E(e,a),E(e,u),E(e,c),h||(d=[H(t,"click",n[1]),H(s,"click",n[2]),H(o,"click",n[3]),H(a,"click",n[4]),H(c,"click",n[5])],h=!0)},p:z,i:z,o:z,d(f){f&&w(e),h=!1,Ae(d)}}}function mm(n,e,t){let i;return Fh.subscribe(u=>{t(0,i=u)}),[i,()=>Ti.set("#ff3e00"),()=>Ti.set("red"),()=>Ti.set("green"),()=>Ti.set("blue"),()=>zh.set(jh(i))]}class ym extends be{constructor(e){super(),we(this,e,mm,gm,_e,{})}}function vm(n){let e,t,i,s,r,o,l,a;return e=new ym({}),i=new pm({}),{c(){oe(e.$$.fragment),t=P(),oe(i.$$.fragment),s=P(),r=I("br"),o=P(),l=I("a"),l.textContent="Credit",m(l,"href","https://github.com/gspasov/paint")},m(u,c){se(e,u,c),b(u,t,c),se(i,u,c),b(u,s,c),b(u,r,c),b(u,o,c),b(u,l,c),a=!0},p:z,i(u){a||(F(e.$$.fragment,u),F(i.$$.fragment,u),a=!0)},o(u){q(e.$$.fragment,u),q(i.$$.fragment,u),a=!1},d(u){re(e,u),u&&w(t),re(i,u),u&&w(s),u&&w(r),u&&w(o),u&&w(l)}}}function _m(n){let e,t,i,s;function r(a){n[3](a)}function o(a){n[4](a)}let l={title:n[2],$$slots:{default:[vm]},$$scope:{ctx:n}};return n[0]!==void 0&&(l.visible=n[0]),n[1]!==void 0&&(l.isPinned=n[1]),e=new qe({props:l}),ee.push(()=>ue(e,"visible",r)),ee.push(()=>ue(e,"isPinned",o)),{c(){oe(e.$$.fragment)},m(a,u){se(e,a,u),s=!0},p(a,[u]){const c={};u&4&&(c.title=a[2]),u&32&&(c.$$scope={dirty:u,ctx:a}),!t&&u&1&&(t=!0,c.visible=a[0],he(()=>t=!1)),!i&&u&2&&(i=!0,c.isPinned=a[1],he(()=>i=!1)),e.$set(c)},i(a){s||(F(e.$$.fragment,a),s=!0)},o(a){q(e.$$.fragment,a),s=!1},d(a){re(e,a)}}}function wm(n,e,t){let{visible:i=!1}=e,{title:s="New window"}=e,{isPinned:r=!1}=e;function o(a){i=a,t(0,i)}function l(a){r=a,t(1,r)}return n.$$set=a=>{"visible"in a&&t(0,i=a.visible),"title"in a&&t(2,s=a.title),"isPinned"in a&&t(1,r=a.isPinned)},[i,r,s,o,l]}class bm extends be{constructor(e){super(),we(this,e,wm,_m,_e,{visible:0,title:2,isPinned:1})}}function Im(n){let e,t,i,s,r,o,l,a,u,c,h,d,f,p,v,_,T,y,C,S,M,R,k,N,g,A,L,j,D,G,x,le=n[3].gameSettings.rulesCount+"",Bt,cn,hn,Cs,W=n[3].gameSettings.seed+"",Te,ke,He,me,Pe,pt,vi,Ms;function lt(B){n[5](B)}let fn={label:"Rendering sphere size:",min:50};return n[3].renderSize!==void 0&&(fn.value=n[3].renderSize),e=new Lo({props:fn}),ee.push(()=>ue(e,"value",lt)),{c(){oe(e.$$.fragment),i=I("br"),s=P(),r=I("label"),o=Y(`Base number size:
    `),l=I("input"),a=I("br"),u=P(),c=I("label"),h=Y(`Display shadows:
    `),d=I("input"),f=I("br"),p=P(),v=I("label"),_=Y(`Change number size:
    `),T=I("input"),y=I("br"),C=P(),S=I("label"),M=Y(`Scanlines:
    `),R=I("input"),k=I("br"),N=P(),g=I("label"),A=Y(`Filter:
    `),L=I("input"),j=I("br"),D=P(),G=I("p"),x=Y("Rules:"),Bt=Y(le),cn=P(),hn=I("p"),Cs=Y("Seed:"),Te=Y(W),ke=P(),He=I("button"),He.textContent="Apply settings",me=P(),Pe=I("button"),Pe.textContent="Reset",m(l,"type","range"),m(l,"min","0"),m(l,"max","0.9"),m(l,"step","0.05"),m(d,"type","checkbox"),m(T,"type","checkbox"),m(R,"type","checkbox"),m(L,"type","checkbox")},m(B,fe){se(e,B,fe),b(B,i,fe),b(B,s,fe),b(B,r,fe),E(r,o),E(r,l),rt(l,n[3].baseNumberSize),E(r,a),b(B,u,fe),b(B,c,fe),E(c,h),E(c,d),d.checked=n[3].displayShadows,E(c,f),b(B,p,fe),b(B,v,fe),E(v,_),E(v,T),T.checked=n[3].runMouseOver,E(v,y),b(B,C,fe),b(B,S,fe),E(S,M),E(S,R),R.checked=n[3].scanLines,E(S,k),b(B,N,fe),b(B,g,fe),E(g,A),E(g,L),L.checked=n[3].crtFilter,E(g,j),b(B,D,fe),b(B,G,fe),E(G,x),E(G,Bt),b(B,cn,fe),b(B,hn,fe),E(hn,Cs),E(hn,Te),b(B,ke,fe),b(B,He,fe),b(B,me,fe),b(B,Pe,fe),pt=!0,vi||(Ms=[H(l,"change",n[6]),H(l,"input",n[6]),H(d,"change",n[7]),H(T,"change",n[8]),H(R,"change",n[9]),H(L,"change",n[10]),H(He,"click",n[11]),H(Pe,"click",n[4])],vi=!0)},p(B,fe){const Rn={};!t&&fe&8&&(t=!0,Rn.value=B[3].renderSize,he(()=>t=!1)),e.$set(Rn),fe&8&&rt(l,B[3].baseNumberSize),fe&8&&(d.checked=B[3].displayShadows),fe&8&&(T.checked=B[3].runMouseOver),fe&8&&(R.checked=B[3].scanLines),fe&8&&(L.checked=B[3].crtFilter),(!pt||fe&8)&&le!==(le=B[3].gameSettings.rulesCount+"")&&ge(Bt,le),(!pt||fe&8)&&W!==(W=B[3].gameSettings.seed+"")&&ge(Te,W)},i(B){pt||(F(e.$$.fragment,B),pt=!0)},o(B){q(e.$$.fragment,B),pt=!1},d(B){re(e,B),B&&w(i),B&&w(s),B&&w(r),B&&w(u),B&&w(c),B&&w(p),B&&w(v),B&&w(C),B&&w(S),B&&w(N),B&&w(g),B&&w(D),B&&w(G),B&&w(cn),B&&w(hn),B&&w(ke),B&&w(He),B&&w(me),B&&w(Pe),vi=!1,Ae(Ms)}}}function Tm(n){let e,t,i,s;function r(a){n[12](a)}function o(a){n[13](a)}let l={title:n[2],$$slots:{default:[Im]},$$scope:{ctx:n}};return n[0]!==void 0&&(l.visible=n[0]),n[1]!==void 0&&(l.isPinned=n[1]),e=new qe({props:l}),ee.push(()=>ue(e,"visible",r)),ee.push(()=>ue(e,"isPinned",o)),e.$on("exit",n[14]),{c(){oe(e.$$.fragment)},m(a,u){se(e,a,u),s=!0},p(a,[u]){const c={};u&4&&(c.title=a[2]),u&32776&&(c.$$scope={dirty:u,ctx:a}),!t&&u&1&&(t=!0,c.visible=a[0],he(()=>t=!1)),!i&&u&2&&(i=!0,c.isPinned=a[1],he(()=>i=!1)),e.$set(c)},i(a){s||(F(e.$$.fragment,a),s=!0)},o(a){q(e.$$.fragment,a),s=!1},d(a){re(e,a)}}}function Em(n,e,t){let{visible:i=!1}=e,{title:s="New window"}=e,{isPinned:r=!1}=e,o=JSON.parse(JSON.stringify(xl(ct)));function l(){const y=o.gameSettings;t(3,o=JSON.parse(JSON.stringify(Rh))),t(3,o.gameSettings=y,o)}function a(y){n.$$.not_equal(o.renderSize,y)&&(o.renderSize=y,t(3,o))}function u(){o.baseNumberSize=pa(this.value),t(3,o)}function c(){o.displayShadows=this.checked,t(3,o)}function h(){o.runMouseOver=this.checked,t(3,o)}function d(){o.scanLines=this.checked,t(3,o)}function f(){o.crtFilter=this.checked,t(3,o)}const p=()=>ct.set(o);function v(y){i=y,t(0,i)}function _(y){r=y,t(1,r)}const T=()=>t(3,o=JSON.parse(JSON.stringify(xl(ct))));return n.$$set=y=>{"visible"in y&&t(0,i=y.visible),"title"in y&&t(2,s=y.title),"isPinned"in y&&t(1,r=y.isPinned)},[i,r,s,o,l,a,u,c,h,d,f,p,v,_,T]}class Cm extends be{constructor(e){super(),we(this,e,Em,Tm,_e,{visible:0,title:2,isPinned:1})}}const Mm="/assets/arrow-down.5ab4ad63.svg";function au(n,e,t){const i=n.slice();return i[18]=e[t],i}function lu(n){let e,t,i=ir(n[18])+"",s,r,o,l=n[18].description.slice(0,23)+"...",a,u;return{c(){e=I("div"),t=I("span"),s=Y(i),r=P(),o=I("span"),m(t,"class","app-price svelte-phterc"),m(o,"class","app-description svelte-phterc")},m(c,h){b(c,e,h),E(e,t),E(t,s),E(e,r),E(e,o),o.innerHTML=l,u=!0},p(c,h){(!u||h&112)&&i!==(i=ir(c[18])+"")&&ge(s,i),(!u||h&112)&&l!==(l=c[18].description.slice(0,23)+"...")&&(o.innerHTML=l)},i(c){u||(at(()=>{!u||(a||(a=Zn(e,nr,{duration:300},!0)),a.run(1))}),u=!0)},o(c){a||(a=Zn(e,nr,{duration:300},!1)),a.run(0),u=!1},d(c){c&&w(e),c&&a&&a.end()}}}function uu(n){let e,t,i=n[18].description+"",s,r,o;function l(c,h){return c[18].unlocked?Am:c[3][c[18].id].purchased?c[3][c[18].id].installing?Sm:km:Nm}let a=l(n),u=a(n);return{c(){e=I("div"),t=I("div"),s=P(),u.c(),ne(t,"margin-bottom","10px"),m(e,"class","app-dropdown svelte-phterc")},m(c,h){b(c,e,h),E(e,t),t.innerHTML=i,E(e,s),u.m(e,null),o=!0},p(c,h){(!o||h&112)&&i!==(i=c[18].description+"")&&(t.innerHTML=i),a===(a=l(c))&&u?u.p(c,h):(u.d(1),u=a(c),u&&(u.c(),u.m(e,null)))},i(c){o||(at(()=>{!o||(r||(r=Zn(e,$l,{},!0)),r.run(1))}),o=!0)},o(c){r||(r=Zn(e,$l,{},!1)),r.run(0),o=!1},d(c){c&&w(e),u.d(),c&&r&&r.end()}}}function km(n){let e,t,i,s;function r(...o){return n[14](n[18],...o)}return{c(){e=I("button"),e.textContent="Install",t=I("br"),m(e,"class","svelte-phterc")},m(o,l){b(o,e,l),b(o,t,l),i||(s=H(e,"click",r),i=!0)},p(o,l){n=o},d(o){o&&w(e),o&&w(t),i=!1,s()}}}function Sm(n){let e,t;return{c(){e=I("progress"),e.value=t=n[3][n[18].id].installProgress},m(i,s){b(i,e,s)},p(i,s){s&120&&t!==(t=i[3][i[18].id].installProgress)&&(e.value=t)},d(i){i&&w(e)}}}function Nm(n){let e,t=ir(n[18])+"",i,s,r;function o(){return n[13](n[18])}return{c(){e=I("button"),i=Y(t),m(e,"class","svelte-phterc")},m(l,a){b(l,e,a),E(e,i),s||(r=H(e,"click",o),s=!0)},p(l,a){n=l,a&112&&t!==(t=ir(n[18])+"")&&ge(i,t)},d(l){l&&w(e),s=!1,r()}}}function Am(n){let e;return{c(){e=I("button"),e.textContent="Unlocked",e.disabled=!0,ne(e,"cursor","not-allowed"),m(e,"class","svelte-phterc")},m(t,i){b(t,e,i)},p:z,d(t){t&&w(e)}}}function cu(n,e){let t,i,s,r,o,l,a,u=e[18].title+"",c,h,d,f,p,v,_,T,y,C,S,M,R=!e[3][e[18].id].dropdown&&lu(e);function k(){return e[12](e[18])}let N=e[3][e[18].id].dropdown&&uu(e);return{key:n,first:null,c(){t=I("div"),i=I("div"),s=I("img"),l=P(),a=I("span"),c=Y(u),h=P(),d=I("div"),f=I("img"),_=P(),R&&R.c(),T=P(),N&&N.c(),y=P(),m(s,"class","app-icon svelte-phterc"),Ie(s.src,r=e[18].image)||m(s,"src",r),m(s,"alt",o="icon for "+e[18].title),m(s,"draggable","false"),m(a,"class","app-title svelte-phterc"),m(f,"draggable","false"),Ie(f.src,p=Mm)||m(f,"src",p),m(f,"alt",v="icon for "+e[18].title),m(f,"class","svelte-phterc"),ye(f,"upside-down",e[3][e[18].id].dropdown),m(d,"class","app-arrow svelte-phterc"),m(i,"class","app-container svelte-phterc"),ne(t,"position","static"),this.first=t},m(g,A){b(g,t,A),E(t,i),E(i,s),E(i,l),E(i,a),E(a,c),E(i,h),E(i,d),E(d,f),E(i,_),R&&R.m(i,null),E(t,T),N&&N.m(t,null),E(t,y),C=!0,S||(M=H(i,"click",k),S=!0)},p(g,A){e=g,(!C||A&112&&!Ie(s.src,r=e[18].image))&&m(s,"src",r),(!C||A&112&&o!==(o="icon for "+e[18].title))&&m(s,"alt",o),(!C||A&112)&&u!==(u=e[18].title+"")&&ge(c,u),(!C||A&112&&v!==(v="icon for "+e[18].title))&&m(f,"alt",v),(!C||A&120)&&ye(f,"upside-down",e[3][e[18].id].dropdown),e[3][e[18].id].dropdown?R&&(tt(),q(R,1,1,()=>{R=null}),nt()):R?(R.p(e,A),A&120&&F(R,1)):(R=lu(e),R.c(),F(R,1),R.m(i,null)),e[3][e[18].id].dropdown?N?(N.p(e,A),A&120&&F(N,1)):(N=uu(e),N.c(),F(N,1),N.m(t,y)):N&&(tt(),q(N,1,1,()=>{N=null}),nt())},i(g){C||(F(R),F(N),C=!0)},o(g){q(R),q(N),C=!1},d(g){g&&w(t),R&&R.d(),N&&N.d(),S=!1,M()}}}function Dm(n){let e,t,i,s,r,o,l,a,u,c,h=[],d=new Map,f,p,v,_,T=n[6].filter(n[11]).sort(hu);const y=C=>C[18].id;for(let C=0;C<T.length;C+=1){let S=au(n,T,C),M=y(S);d.set(M,h[C]=cu(M,S))}return{c(){e=I("label"),t=Y(`Search:
    `),i=I("input"),s=P(),r=I("br"),o=P(),l=I("label"),a=Y(`Only not installed:
    `),u=I("input"),c=P();for(let C=0;C<h.length;C+=1)h[C].c();f=Ue(),m(i,"type","text"),m(u,"type","checkbox")},m(C,S){b(C,e,S),E(e,t),E(e,i),rt(i,n[4]),b(C,s,S),b(C,r,S),b(C,o,S),b(C,l,S),E(l,a),E(l,u),u.checked=n[5],b(C,c,S);for(let M=0;M<h.length;M+=1)h[M]&&h[M].m(C,S);b(C,f,S),p=!0,v||(_=[H(i,"input",n[9]),H(u,"change",n[10])],v=!0)},p(C,S){S&16&&i.value!==C[4]&&rt(i,C[4]),S&32&&(u.checked=C[5]),S&504&&(T=C[6].filter(C[11]).sort(hu),tt(),h=Tn(h,S,y,1,C,T,d,f.parentNode,Dh,cu,f,au),nt())},i(C){if(!p){for(let S=0;S<T.length;S+=1)F(h[S]);p=!0}},o(C){for(let S=0;S<h.length;S+=1)q(h[S]);p=!1},d(C){C&&w(e),C&&w(s),C&&w(r),C&&w(o),C&&w(l),C&&w(c);for(let S=0;S<h.length;S+=1)h[S].d(C);C&&w(f),v=!1,Ae(_)}}}function Lm(n){let e,t,i,s;function r(a){n[15](a)}function o(a){n[16](a)}let l={title:n[2],backgroundColor:" #e9f2f2",$$slots:{default:[Dm]},$$scope:{ctx:n}};return n[0]!==void 0&&(l.visible=n[0]),n[1]!==void 0&&(l.isPinned=n[1]),e=new qe({props:l}),ee.push(()=>ue(e,"visible",r)),ee.push(()=>ue(e,"isPinned",o)),{c(){oe(e.$$.fragment)},m(a,u){se(e,a,u),s=!0},p(a,[u]){const c={};u&4&&(c.title=a[2]),u&2097272&&(c.$$scope={dirty:u,ctx:a}),!t&&u&1&&(t=!0,c.visible=a[0],he(()=>t=!1)),!i&&u&2&&(i=!0,c.isPinned=a[1],he(()=>i=!1)),e.$set(c)},i(a){s||(F(e.$$.fragment,a),s=!0)},o(a){q(e.$$.fragment,a),s=!1},d(a){re(e,a)}}}function ir(n){return n.unlocked?"Installed":n.cost<=0?"Free":"Price: "+n.cost}const hu=(n,e)=>n.title.localeCompare(e.title);function Om(n,e,t){let i,s;ot(n,dt,M=>t(6,i=M)),ot(n,en,M=>t(17,s=M));let{visible:r=!1}=e,{title:o="New window"}=e,{isPinned:l=!1}=e;const a=i.map(M=>({id:M.id,dropdown:!1,purchased:!1,installing:!1,installProgress:0}));function u(M){M.cost>s||(en.set(s-M.cost),t(3,a[M.id].purchased=!0,a))}function c(M,R){t(3,a[R.id].installing=!0,a);const k=Math.floor(Math.random()*7e3)+1e3;let N=0;const g=150,A=setInterval(()=>{N+=g,t(3,a[R.id].installProgress=N/k,a)},g);setTimeout(()=>{const L=i;L[R.id].unlocked=!0,dt.set(L),clearInterval(A)},k)}let h="",d=!1;function f(){h=this.value,t(4,h)}function p(){d=this.checked,t(5,d)}const v=M=>d?M.title.toLowerCase().includes(h.toLowerCase())&&!M.unlocked:M.title.toLowerCase().includes(h.toLowerCase()),_=M=>t(3,a[M.id].dropdown=!a[M.id].dropdown,a),T=M=>u(M),y=(M,R)=>{c(R,M)};function C(M){r=M,t(0,r)}function S(M){l=M,t(1,l)}return n.$$set=M=>{"visible"in M&&t(0,r=M.visible),"title"in M&&t(2,o=M.title),"isPinned"in M&&t(1,l=M.isPinned)},[r,l,o,a,h,d,i,u,c,f,p,v,_,T,y,C,S]}class Pm extends be{constructor(e){super(),we(this,e,Om,Lm,_e,{visible:0,title:2,isPinned:1})}}const Rm="/assets/loading.192f8f28.svg";function jm(n){let e,t;return{c(){e=I("iframe"),m(e,"width","560"),m(e,"height","315"),Ie(e.src,t="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?controls=0")||m(e,"src",t),m(e,"title","YouTube video player"),m(e,"frameborder","0"),m(e,"allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"),e.allowFullscreen=!0},m(i,s){b(i,e,s)},p:z,d(i){i&&w(e)}}}function Um(n){let e,t,i,s,r,o;return{c(){e=I("img"),i=P(),s=I("div"),r=Y("Loading"),o=I("span"),Ie(e.src,t=Rm)||m(e,"src",t),m(e,"alt","Loading"),m(e,"draggable","false"),m(e,"class","svelte-ydhvkf")},m(l,a){b(l,e,a),b(l,i,a),b(l,s,a),E(s,r),E(s,o),n[7](o)},p:z,d(l){l&&w(e),l&&w(i),l&&w(s),n[7](null)}}}function Fm(n){let e,t,i,s,r;function o(u,c){if(u[3])return Um;if(u[4])return jm}let l=o(n),a=l&&l(n);return{c(){e=I("form"),e.innerHTML='<input type="url" placeholder="Search with Bang! or enter address" style="width: 300px;"/>',t=P(),a&&a.c(),i=Ue()},m(u,c){b(u,e,c),b(u,t,c),a&&a.m(u,c),b(u,i,c),s||(r=H(e,"submit",kh(n[6])),s=!0)},p(u,c){l===(l=o(u))&&a?a.p(u,c):(a&&a.d(1),a=l&&l(u),a&&(a.c(),a.m(i.parentNode,i)))},d(u){u&&w(e),u&&w(t),a&&a.d(u),u&&w(i),s=!1,r()}}}function zm(n){let e,t,i,s;function r(a){n[8](a)}function o(a){n[9](a)}let l={title:n[2],$$slots:{default:[Fm]},$$scope:{ctx:n}};return n[0]!==void 0&&(l.visible=n[0]),n[1]!==void 0&&(l.isPinned=n[1]),e=new qe({props:l}),ee.push(()=>ue(e,"visible",r)),ee.push(()=>ue(e,"isPinned",o)),{c(){oe(e.$$.fragment)},m(a,u){se(e,a,u),s=!0},p(a,[u]){const c={};u&4&&(c.title=a[2]),u&1080&&(c.$$scope={dirty:u,ctx:a}),!t&&u&1&&(t=!0,c.visible=a[0],he(()=>t=!1)),!i&&u&2&&(i=!0,c.isPinned=a[1],he(()=>i=!1)),e.$set(c)},i(a){s||(F(e.$$.fragment,a),s=!0)},o(a){q(e.$$.fragment,a),s=!1},d(a){re(e,a)}}}function Vm(n,e,t){let{visible:i=!1}=e,{title:s="New window"}=e,{isPinned:r=!1}=e,o=!1,l=!1,a=null;function u(){t(3,o=!0);const f=120*1e3,p=1e3;let v=0;const _=setInterval(()=>{const T=".";t(5,a.innerHTML=T.repeat(v),a),v++},p);setTimeout(()=>{clearInterval(_),t(4,l=!0),t(3,o=!1)},f)}function c(f){ee[f?"unshift":"push"](()=>{a=f,t(5,a)})}function h(f){i=f,t(0,i)}function d(f){r=f,t(1,r)}return n.$$set=f=>{"visible"in f&&t(0,i=f.visible),"title"in f&&t(2,s=f.title),"isPinned"in f&&t(1,r=f.isPinned)},[i,r,s,o,l,a,u,c,h,d]}class xm extends be{constructor(e){super(),we(this,e,Vm,zm,_e,{visible:0,title:2,isPinned:1})}}function Bm(n){let e,t,i,s,r,o,l;return{c(){e=I("span"),t=I("img"),s=P(),r=Y(n[0]),Ie(t.src,i=n[3])||m(t,"src",i),m(t,"alt","icon for type "+n[2]),m(t,"class","svelte-1i36pyn"),m(e,"style",n[4]),m(e,"class","svelte-1i36pyn")},m(a,u){b(a,e,u),E(e,t),E(e,s),E(e,r),o||(l=H(e,"click",function(){on(n[1])&&n[1].apply(this,arguments)}),o=!0)},p(a,[u]){n=a,u&1&&ge(r,n[0])},i:z,o:z,d(a){a&&w(e),o=!1,l()}}}function qm(n,e,t){let{name:i}=e,{clickEvent:s=null}=e,{path:r="kul"}=e;r="bruh";let o=i.slice(i.lastIndexOf(".")+1),l=`/icons/${o}.svg`,a=s===null?"":"cursor:pointer;";return n.$$set=u=>{"name"in u&&t(0,i=u.name),"clickEvent"in u&&t(1,s=u.clickEvent),"path"in u&&t(5,r=u.path)},[i,s,o,l,a,r]}class Hm extends be{constructor(e){super(),we(this,e,qm,Bm,_e,{name:0,clickEvent:1,path:5})}}function fu(n,e,t){const i=n.slice();return i[4]=e[t],i}function du(n){let e,t,i=n[2],s=[];for(let o=0;o<i.length;o+=1)s[o]=pu(fu(n,i,o));const r=o=>q(s[o],1,1,()=>{s[o]=null});return{c(){e=I("ul");for(let o=0;o<s.length;o+=1)s[o].c();m(e,"class","svelte-q493jd")},m(o,l){b(o,e,l);for(let a=0;a<s.length;a+=1)s[a]&&s[a].m(e,null);t=!0},p(o,l){if(l&4){i=o[2];let a;for(a=0;a<i.length;a+=1){const u=fu(o,i,a);s[a]?(s[a].p(u,l),F(s[a],1)):(s[a]=pu(u),s[a].c(),F(s[a],1),s[a].m(e,null))}for(tt(),a=i.length;a<s.length;a+=1)r(a);nt()}},i(o){if(!t){for(let l=0;l<i.length;l+=1)F(s[l]);t=!0}},o(o){s=s.filter(Boolean);for(let l=0;l<s.length;l+=1)q(s[l]);t=!1},d(o){o&&w(e),yt(s,o)}}}function $m(n){let e,t;const i=[n[4]];let s={};for(let r=0;r<i.length;r+=1)s=fa(s,i[r]);return e=new Hm({props:s}),{c(){oe(e.$$.fragment)},m(r,o){se(e,r,o),t=!0},p(r,o){const l=o&4?Lh(i,[Oh(r[4])]):{};e.$set(l)},i(r){t||(F(e.$$.fragment,r),t=!0)},o(r){q(e.$$.fragment,r),t=!1},d(r){re(e,r)}}}function Gm(n){let e,t;const i=[n[4]];let s={};for(let r=0;r<i.length;r+=1)s=fa(s,i[r]);return e=new Vh({props:s}),{c(){oe(e.$$.fragment)},m(r,o){se(e,r,o),t=!0},p(r,o){const l=o&4?Lh(i,[Oh(r[4])]):{};e.$set(l)},i(r){t||(F(e.$$.fragment,r),t=!0)},o(r){q(e.$$.fragment,r),t=!1},d(r){re(e,r)}}}function pu(n){let e,t,i,s,r;const o=[Gm,$m],l=[];function a(u,c){return u[4].files?0:1}return t=a(n),i=l[t]=o[t](n),{c(){e=I("li"),i.c(),s=P(),m(e,"class","svelte-q493jd")},m(u,c){b(u,e,c),l[t].m(e,null),E(e,s),r=!0},p(u,c){let h=t;t=a(u),t===h?l[t].p(u,c):(tt(),q(l[h],1,1,()=>{l[h]=null}),nt(),i=l[t],i?i.p(u,c):(i=l[t]=o[t](u),i.c()),F(i,1),i.m(e,s))},i(u){r||(F(i),r=!0)},o(u){q(i),r=!1},d(u){u&&w(e),l[t].d()}}}function Qm(n){let e,t,i,s,r,o,l,a=n[0]&&du(n);return{c(){e=I("span"),t=Y(n[1]),i=P(),a&&a.c(),s=Ue(),m(e,"class","svelte-q493jd"),ye(e,"expanded",n[0])},m(u,c){b(u,e,c),E(e,t),b(u,i,c),a&&a.m(u,c),b(u,s,c),r=!0,o||(l=H(e,"click",n[3]),o=!0)},p(u,[c]){(!r||c&2)&&ge(t,u[1]),(!r||c&1)&&ye(e,"expanded",u[0]),u[0]?a?(a.p(u,c),c&1&&F(a,1)):(a=du(u),a.c(),F(a,1),a.m(s.parentNode,s)):a&&(tt(),q(a,1,1,()=>{a=null}),nt())},i(u){r||(F(a),r=!0)},o(u){q(a),r=!1},d(u){u&&w(e),u&&w(i),a&&a.d(u),u&&w(s),o=!1,l()}}}function Km(n,e,t){let{expanded:i=!1}=e,{name:s}=e,{files:r}=e;function o(){t(0,i=!i)}return n.$$set=l=>{"expanded"in l&&t(0,i=l.expanded),"name"in l&&t(1,s=l.name),"files"in l&&t(2,r=l.files)},[i,s,r,o]}class Vh extends be{constructor(e){super(),we(this,e,Km,Qm,_e,{expanded:0,name:1,files:2})}}const Ym='[{"name":"App.svelte","path":"App.svelte"},{"name":"assets","files":[{"name":"arrow-down.svg","path":"assets/arrow-down.svg"},{"name":"arrow-up.svg","path":"assets/arrow-up.svg"},{"name":"bin.svg","path":"assets/bin.svg"},{"name":"download.svg","path":"assets/download.svg"},{"name":"enter.svg","path":"assets/enter.svg"},{"name":"folderStuff","files":[{"name":"folder.svg","path":"assets/folderStuff/folder.svg"},{"name":"ogg-file-svgrepo-com.svg","path":"assets/folderStuff/ogg-file-svgrepo-com.svg"},{"name":"open-folder.svg","path":"assets/folderStuff/open-folder.svg"},{"name":"svg.svg","path":"assets/folderStuff/svg.svg"}]},{"name":"Icons","files":[{"name":"about.svg","path":"assets/Icons/about.svg"},{"name":"calculator.svg","path":"assets/Icons/calculator.svg"},{"name":"calendar.svg","path":"assets/Icons/calendar.svg"},{"name":"chat.svg","path":"assets/Icons/chat.svg"},{"name":"folder.svg","path":"assets/Icons/folder.svg"},{"name":"internet.svg","path":"assets/Icons/internet.svg"},{"name":"note.svg","path":"assets/Icons/note.svg"},{"name":"paint.svg","path":"assets/Icons/paint.svg"},{"name":"settings.svg","path":"assets/Icons/settings.svg"},{"name":"store.svg","path":"assets/Icons/store.svg"},{"name":"verge.svg","path":"assets/Icons/verge.svg"}]},{"name":"loading.svg","path":"assets/loading.svg"},{"name":"pin-bad.svg","path":"assets/pin-bad.svg"},{"name":"pin.svg","path":"assets/pin.svg"},{"name":"skip.svg","path":"assets/skip.svg"},{"name":"sounds","files":[{"name":"cool beat.wav","path":"assets/sounds/cool beat.wav"},{"name":"kytaravec.wav","path":"assets/sounds/kytaravec.wav"},{"name":"pop.ogg","path":"assets/sounds/pop.ogg"}]},{"name":"svelte.png","path":"assets/svelte.png"},{"name":"windows.svg","path":"assets/windows.svg"}]},{"name":"lib","files":[{"name":"Board.svelte","path":"lib/Board.svelte"},{"name":"BoardStarter.svelte","path":"lib/BoardStarter.svelte"},{"name":"Counter.svelte","path":"lib/Counter.svelte"},{"name":"CrtFilter.svelte","path":"lib/CrtFilter.svelte"},{"name":"Dashboard.svelte","path":"lib/Dashboard.svelte"},{"name":"DashboardApps","files":[{"name":"About.svelte","path":"lib/DashboardApps/About.svelte"},{"name":"Calculator","files":[{"name":"Calc.svelte","path":"lib/DashboardApps/Calculator/Calc.svelte"},{"name":"Display.svelte","path":"lib/DashboardApps/Calculator/Display.svelte"}]},{"name":"Calculator.svelte","path":"lib/DashboardApps/Calculator.svelte"},{"name":"Calendar","files":[{"name":"Arrow.svelte","path":"lib/DashboardApps/Calendar/Arrow.svelte"},{"name":"CalendarApp.svelte","path":"lib/DashboardApps/Calendar/CalendarApp.svelte"}]},{"name":"Calendar.svelte","path":"lib/DashboardApps/Calendar.svelte"},{"name":"Chat","files":[{"name":"Channel.svelte","path":"lib/DashboardApps/Chat/Channel.svelte"}]},{"name":"Chat.svelte","path":"lib/DashboardApps/Chat.svelte"},{"name":"FileExplorer.svelte","path":"lib/DashboardApps/FileExplorer.svelte"},{"name":"Folders","files":[{"name":"File.svelte","path":"lib/DashboardApps/Folders/File.svelte"},{"name":"Folder.svelte","path":"lib/DashboardApps/Folders/Folder.svelte"},{"name":"PrismJS.svelte","path":"lib/DashboardApps/Folders/PrismJS.svelte"},{"name":"srcLocations.js","path":"lib/DashboardApps/Folders/srcLocations.js"},{"name":"textFromFileTreeOutput.json","path":"lib/DashboardApps/Folders/textFromFileTreeOutput.json"}]},{"name":"Internet.svelte","path":"lib/DashboardApps/Internet.svelte"},{"name":"Notepad.svelte","path":"lib/DashboardApps/Notepad.svelte"},{"name":"Paint","files":[{"name":"Canvas.svelte","path":"lib/DashboardApps/Paint/Canvas.svelte"},{"name":"Menu.svelte","path":"lib/DashboardApps/Paint/Menu.svelte"},{"name":"paintStores.js","path":"lib/DashboardApps/Paint/paintStores.js"},{"name":"utils.js","path":"lib/DashboardApps/Paint/utils.js"}]},{"name":"Paint.svelte","path":"lib/DashboardApps/Paint.svelte"},{"name":"Settings.svelte","path":"lib/DashboardApps/Settings.svelte"},{"name":"Store.svelte","path":"lib/DashboardApps/Store.svelte"},{"name":"Verge.svelte","path":"lib/DashboardApps/Verge.svelte"},{"name":"__DashboardAppExample.svelte","path":"lib/DashboardApps/__DashboardAppExample.svelte"}]},{"name":"Mark.svelte","path":"lib/Mark.svelte"},{"name":"mulberry.js","path":"lib/mulberry.js"},{"name":"Popup.svelte","path":"lib/Popup.svelte"},{"name":"Rules.js","path":"lib/Rules.js"},{"name":"Util","files":[{"name":"NumberInput.svelte","path":"lib/Util/NumberInput.svelte"}]}]},{"name":"main.js","path":"main.js"},{"name":"scripts","files":[{"name":"textFromFileTree.ts","path":"scripts/textFromFileTree.ts"}]},{"name":"stores","files":[{"name":"appsStore.js","path":"stores/appsStore.js"},{"name":"localStorage.js","path":"stores/localStorage.js"}]},{"name":"vite-env.d.ts","path":"vite-env.d.ts"}]',gu=JSON.parse(Ym),ba="/assets/download.1643b725.svg",{document:mu}=ag;function Wm(n){let e,t,i,s,r,o,l,a,u,c,h;return{c(){e=I("link"),t=I("link"),i=P(),s=I("div"),r=I("h2"),o=Y(n[2]),l=P(),a=I("pre"),u=I("code"),c=Y(n[1]),m(e,"rel","stylesheet"),m(e,"href","https://fonts.googleapis.com/css?family=Open+Sans:400,700"),m(e,"type","text/css"),m(t,"rel","stylesheet"),m(t,"href","https://tutsplus.github.io/syntax-highlighter-demos/highlighters/Prism/prism_okaidia.css"),m(u,"class",h="language-"+n[0]),m(s,"class","w3-container")},m(d,f){E(mu.head,e),E(mu.head,t),b(d,i,f),b(d,s,f),E(s,r),E(r,o),E(s,l),E(s,a),E(a,u),E(u,c)},p(d,[f]){f&4&&ge(o,d[2]),f&2&&ge(c,d[1]),f&1&&h!==(h="language-"+d[0])&&m(u,"class",h)},i:z,o:z,d(d){w(e),w(t),d&&w(i),d&&w(s)}}}function Jm(n,e,t){let{language:i}=e,{code:s}=e,{header:r}=e;return ga(()=>{let o=document.createElement("script");o.src="https://tutsplus.github.io/syntax-highlighter-demos/highlighters/Prism/prism.js",document.head.append(o),o.onload=function(){let l=!1,a,u;u=`https://prismjs.com/components/prism-${i}.js`,l=!0,l==!0?(a=document.createElement("script"),a.src=u,a.async=!0,document.head.append(a),a.onload=()=>{Prism.highlightAll()}):Prism.highlightAll()}}),n.$$set=o=>{"language"in o&&t(0,i=o.language),"code"in o&&t(1,s=o.code),"header"in o&&t(2,r=o.header)},[i,s,r]}class Xm extends be{constructor(e){super(),we(this,e,Jm,Wm,_e,{language:0,code:1,header:2})}}function yu(n,e,t){const i=n.slice();return i[28]=e[t],i[29]=e,i[30]=t,i}function vu(n,e,t){const i=n.slice();return i[31]=e[t],i[32]=e,i[33]=t,i}function _u(n,e,t){const i=n.slice();return i[34]=e[t],i[35]=e,i[36]=t,i}function Zm(n){let e,t;return e=new Vh({props:{name:"Home",files:n[7],expanded:!0}}),{c(){oe(e.$$.fragment)},m(i,s){se(e,i,s),t=!0},p(i,s){const r={};s[0]&128&&(r.files=i[7]),e.$set(r)},i(i){t||(F(e.$$.fragment,i),t=!0)},o(i){q(e.$$.fragment,i),t=!1},d(i){re(e,i)}}}function ey(n){return{c:z,m:z,p:z,i:z,o:z,d:z}}function ty(n){let e,t,i,s={ctx:n,current:null,token:null,hasCatch:!1,pending:sy,then:iy,catch:ny,value:38,blocks:[,,,]};return In(t=n[37].text(),s),{c(){e=Ue(),s.block.c()},m(r,o){b(r,e,o),s.block.m(r,s.anchor=o),s.mount=()=>e.parentNode,s.anchor=e,i=!0},p(r,o){n=r,s.ctx=n,o[0]&8&&t!==(t=n[37].text())&&In(t,s)||kr(s,n,o)},i(r){i||(F(s.block),i=!0)},o(r){for(let o=0;o<3;o+=1){const l=s.blocks[o];q(l)}i=!1},d(r){r&&w(e),s.block.d(r),s.token=null,s=null}}}function ny(n){return{c:z,m:z,p:z,i:z,o:z,d:z}}function iy(n){let e,t,i,s,r,o,l;return e=new Xm({props:{language:n[34].language,code:n[38],header:n[34].title.slice(n[34].title.lastIndexOf("/")+1)}}),{c(){oe(e.$$.fragment),t=P(),i=I("a"),s=I("img"),Ie(s.src,r=ba)||m(s,"src",r),m(s,"alt","Download"),m(s,"width","20"),ne(i,"position","absolute"),ne(i,"bottom","0%"),ne(i,"left","50%"),m(i,"href",o=window.URL.createObjectURL(n[34].src)),m(i,"download","")},m(a,u){se(e,a,u),b(a,t,u),b(a,i,u),E(i,s),l=!0},p(a,u){const c={};u[0]&8&&(c.language=a[34].language),u[0]&8&&(c.code=a[38]),u[0]&8&&(c.header=a[34].title.slice(a[34].title.lastIndexOf("/")+1)),e.$set(c),(!l||u[0]&8&&o!==(o=window.URL.createObjectURL(a[34].src)))&&m(i,"href",o)},i(a){l||(F(e.$$.fragment,a),l=!0)},o(a){q(e.$$.fragment,a),l=!1},d(a){re(e,a),a&&w(t),a&&w(i)}}}function sy(n){let e;return{c(){e=I("p"),e.textContent="Loading file..."},m(t,i){b(t,e,i)},p:z,i:z,o:z,d(t){t&&w(e)}}}function ry(n){let e;return{c(){e=I("p"),e.textContent="Downloading file..."},m(t,i){b(t,e,i)},p:z,i:z,o:z,d(t){t&&w(e)}}}function oy(n){let e,t,i,s={ctx:n,current:null,token:null,hasCatch:!1,pending:ry,then:ty,catch:ey,value:37,blocks:[,,,]};return In(t=fetch(n[34].srcPath),s),{c(){e=Ue(),s.block.c()},m(r,o){b(r,e,o),s.block.m(r,s.anchor=o),s.mount=()=>e.parentNode,s.anchor=e,i=!0},p(r,o){n=r,s.ctx=n,o[0]&8&&t!==(t=fetch(n[34].srcPath))&&In(t,s)||kr(s,n,o)},i(r){i||(F(s.block),i=!0)},o(r){for(let o=0;o<3;o+=1){const l=s.blocks[o];q(l)}i=!1},d(r){r&&w(e),s.block.d(r),s.token=null,s=null}}}function wu(n){let e,t,i;function s(o){n[10](o,n[34])}let r={title:n[34].title,$$slots:{default:[oy]},$$scope:{ctx:n}};return n[34].visible!==void 0&&(r.visible=n[34].visible),e=new qe({props:r}),ee.push(()=>ue(e,"visible",s)),{c(){oe(e.$$.fragment)},m(o,l){se(e,o,l),i=!0},p(o,l){n=o;const a={};l[0]&8&&(a.title=n[34].title),l[0]&8|l[1]&256&&(a.$$scope={dirty:l,ctx:n}),!t&&l[0]&8&&(t=!0,a.visible=n[34].visible,he(()=>t=!1)),e.$set(a)},i(o){i||(F(e.$$.fragment,o),i=!0)},o(o){q(e.$$.fragment,o),i=!1},d(o){re(e,o)}}}function ay(n){let e,t,i,s,r,o,l,a;return{c(){e=I("img"),s=P(),r=I("a"),o=I("img"),Ie(e.src,t=n[31].source)||m(e,"src",t),m(e,"alt",i="Icon for "+n[31].source),ne(e,"width","100%"),ne(e,"height","100%"),Ie(o.src,l=ba)||m(o,"src",l),m(o,"alt","Download"),m(o,"width","20"),ne(r,"position","absolute"),ne(r,"bottom","0%"),ne(r,"left","50%"),m(r,"href",a=n[31].source),m(r,"download","")},m(u,c){b(u,e,c),b(u,s,c),b(u,r,c),E(r,o)},p(u,c){c[0]&16&&!Ie(e.src,t=u[31].source)&&m(e,"src",t),c[0]&16&&i!==(i="Icon for "+u[31].source)&&m(e,"alt",i),c[0]&16&&a!==(a=u[31].source)&&m(r,"href",a)},d(u){u&&w(e),u&&w(s),u&&w(r)}}}function bu(n){let e,t,i;function s(o){n[11](o,n[31])}let r={title:n[31].title,$$slots:{default:[ay]},$$scope:{ctx:n}};return n[31].visible!==void 0&&(r.visible=n[31].visible),e=new qe({props:r}),ee.push(()=>ue(e,"visible",s)),{c(){oe(e.$$.fragment)},m(o,l){se(e,o,l),i=!0},p(o,l){n=o;const a={};l[0]&16&&(a.title=n[31].title),l[0]&16|l[1]&256&&(a.$$scope={dirty:l,ctx:n}),!t&&l[0]&16&&(t=!0,a.visible=n[31].visible,he(()=>t=!1)),e.$set(a)},i(o){i||(F(e.$$.fragment,o),i=!0)},o(o){q(e.$$.fragment,o),i=!1},d(o){re(e,o)}}}function ly(n){let e,t,i,s,r,o,l,a,u;return{c(){e=I("audio"),t=I("source"),s=Y(`
			Your browser does not support the audio element.`),r=P(),o=I("a"),l=I("img"),Ie(t.src,i=n[28].source)||m(t,"src",i),m(t,"type","audio/ogg"),e.controls=!0,Ie(l.src,a=ba)||m(l,"src",a),m(l,"alt","Download"),m(l,"width","20"),ne(o,"position","absolute"),ne(o,"bottom","0%"),ne(o,"left","50%"),m(o,"href",u=n[28].source),m(o,"download","")},m(c,h){b(c,e,h),E(e,t),E(e,s),b(c,r,h),b(c,o,h),E(o,l)},p(c,h){h[0]&32&&!Ie(t.src,i=c[28].source)&&m(t,"src",i),h[0]&32&&u!==(u=c[28].source)&&m(o,"href",u)},d(c){c&&w(e),c&&w(r),c&&w(o)}}}function Iu(n){let e,t,i;function s(o){n[12](o,n[28])}let r={title:n[28].title,$$slots:{default:[ly]},$$scope:{ctx:n}};return n[28].visible!==void 0&&(r.visible=n[28].visible),e=new qe({props:r}),ee.push(()=>ue(e,"visible",s)),{c(){oe(e.$$.fragment)},m(o,l){se(e,o,l),i=!0},p(o,l){n=o;const a={};l[0]&32&&(a.title=n[28].title),l[0]&32|l[1]&256&&(a.$$scope={dirty:l,ctx:n}),!t&&l[0]&32&&(t=!0,a.visible=n[28].visible,he(()=>t=!1)),e.$set(a)},i(o){i||(F(e.$$.fragment,o),i=!0)},o(o){q(e.$$.fragment,o),i=!1},d(o){re(e,o)}}}function uy(n){let e,t,i,s,r;return{c(){e=I("p"),e.textContent="A fatal error has occured",t=P(),i=I("button"),i.textContent="Okay :)"},m(o,l){b(o,e,l),b(o,t,l),b(o,i,l),s||(r=H(i,"click",n[13]),s=!0)},p:z,d(o){o&&w(e),o&&w(t),o&&w(i),s=!1,r()}}}function cy(n){let e,t,i,s,r,o,l,a,u,c;function h(g){n[8](g)}function d(g){n[9](g)}let f={title:n[2],$$slots:{default:[Zm]},$$scope:{ctx:n}};n[0]!==void 0&&(f.visible=n[0]),n[1]!==void 0&&(f.isPinned=n[1]),e=new qe({props:f}),ee.push(()=>ue(e,"visible",h)),ee.push(()=>ue(e,"isPinned",d));let p=n[3],v=[];for(let g=0;g<p.length;g+=1)v[g]=wu(_u(n,p,g));const _=g=>q(v[g],1,1,()=>{v[g]=null});let T=n[4],y=[];for(let g=0;g<T.length;g+=1)y[g]=bu(vu(n,T,g));const C=g=>q(y[g],1,1,()=>{y[g]=null});let S=n[5],M=[];for(let g=0;g<S.length;g+=1)M[g]=Iu(yu(n,S,g));const R=g=>q(M[g],1,1,()=>{M[g]=null});function k(g){n[14](g)}let N={title:"Error",centered:!0,$$slots:{default:[uy]},$$scope:{ctx:n}};return n[6]!==void 0&&(N.visible=n[6]),a=new qe({props:N}),ee.push(()=>ue(a,"visible",k)),{c(){oe(e.$$.fragment),s=P();for(let g=0;g<v.length;g+=1)v[g].c();r=P();for(let g=0;g<y.length;g+=1)y[g].c();o=P();for(let g=0;g<M.length;g+=1)M[g].c();l=P(),oe(a.$$.fragment)},m(g,A){se(e,g,A),b(g,s,A);for(let L=0;L<v.length;L+=1)v[L]&&v[L].m(g,A);b(g,r,A);for(let L=0;L<y.length;L+=1)y[L]&&y[L].m(g,A);b(g,o,A);for(let L=0;L<M.length;L+=1)M[L]&&M[L].m(g,A);b(g,l,A),se(a,g,A),c=!0},p(g,A){const L={};if(A[0]&4&&(L.title=g[2]),A[0]&128|A[1]&256&&(L.$$scope={dirty:A,ctx:g}),!t&&A[0]&1&&(t=!0,L.visible=g[0],he(()=>t=!1)),!i&&A[0]&2&&(i=!0,L.isPinned=g[1],he(()=>i=!1)),e.$set(L),A[0]&8){p=g[3];let D;for(D=0;D<p.length;D+=1){const G=_u(g,p,D);v[D]?(v[D].p(G,A),F(v[D],1)):(v[D]=wu(G),v[D].c(),F(v[D],1),v[D].m(r.parentNode,r))}for(tt(),D=p.length;D<v.length;D+=1)_(D);nt()}if(A[0]&16){T=g[4];let D;for(D=0;D<T.length;D+=1){const G=vu(g,T,D);y[D]?(y[D].p(G,A),F(y[D],1)):(y[D]=bu(G),y[D].c(),F(y[D],1),y[D].m(o.parentNode,o))}for(tt(),D=T.length;D<y.length;D+=1)C(D);nt()}if(A[0]&32){S=g[5];let D;for(D=0;D<S.length;D+=1){const G=yu(g,S,D);M[D]?(M[D].p(G,A),F(M[D],1)):(M[D]=Iu(G),M[D].c(),F(M[D],1),M[D].m(l.parentNode,l))}for(tt(),D=S.length;D<M.length;D+=1)R(D);nt()}const j={};A[1]&256&&(j.$$scope={dirty:A,ctx:g}),!u&&A[0]&64&&(u=!0,j.visible=g[6],he(()=>u=!1)),a.$set(j)},i(g){if(!c){F(e.$$.fragment,g);for(let A=0;A<p.length;A+=1)F(v[A]);for(let A=0;A<T.length;A+=1)F(y[A]);for(let A=0;A<S.length;A+=1)F(M[A]);F(a.$$.fragment,g),c=!0}},o(g){q(e.$$.fragment,g),v=v.filter(Boolean);for(let A=0;A<v.length;A+=1)q(v[A]);y=y.filter(Boolean);for(let A=0;A<y.length;A+=1)q(y[A]);M=M.filter(Boolean);for(let A=0;A<M.length;A+=1)q(M[A]);q(a.$$.fragment,g),c=!1},d(g){re(e,g),g&&w(s),yt(v,g),g&&w(r),yt(y,g),g&&w(o),yt(M,g),g&&w(l),re(a,g)}}}function hy(n,e,t){let i,s;ot(n,dt,x=>t(15,i=x)),ot(n,Ht,x=>t(16,s=x));let{visible:r=!1}=e,{title:o="New window"}=e,{isPinned:l=!1}=e;function a(x){if(x!==void 0){if(x.files===void 0){x.clickEvent=()=>f(x.path);return}x.files.forEach(le=>{a(le)})}}a({files:gu});const u=["svg","png","jpeg","jpg","gif"],c=["wav","mp3","ogg"],h={svelte:"javascript",js:"javascript",ts:"typescript",json:"json"};let d=[];async function f(x){const le="https://raw.githubusercontent.com/Pesopes/disjuncture/master/src/"+x,cn=await(await fetch(le)).blob();if(u.includes(x.slice(x.lastIndexOf(".")+1))){_(le,x.slice(x.lastIndexOf("/")+1));return}if(c.includes(x.slice(x.lastIndexOf(".")+1))){y(le,x.slice(x.lastIndexOf("/")+1));return}t(3,d=[...d,{src:cn,srcPath:le,type:"fileType",visible:!0,title:x,language:h[x.slice(x.lastIndexOf(".")+1)]}])}function p(x){let le=i;le[0].visible=!0,le[0].isPinned=!1,le[0].appInfo.selectedNote=s.findIndex(Bt=>Bt.date===x),dt.set(le)}let v=[];function _(x,le){t(4,v=[...v,{source:x,title:le,visible:!0}])}let T=[];function y(x,le){t(5,T=[...T,{source:x,title:le,visible:!0}])}let C=!1;function S(){t(6,C=!0)}let M=null;function R(){t(7,M=[{name:"My notes",files:s.map(x=>({name:x.name+".txt",clickEvent:()=>p(x.date)}))},{name:"Src",files:gu},{name:"System 123",files:[{name:"!Important",files:[{name:"100456",files:[{name:"vsjitsj\u010Dink\u010Dong.dll"}]},{name:"104251",files:[{name:"somethingImportant.dll"},{name:"pooPoo.dll"}]},{name:"633859",files:[{name:"633859",files:[{name:"20220707",files:[{name:"124572",files:[{name:"SoManyFolders.dll"}]}]}]}]},{name:"696541",files:[{name:"humvibibib.dll"},{name:"indondondondond.dll"}]},{name:"amdtedds.dll"},{name:"appDDDS.dll"},{name:"aticds64.dll"},{name:"DOnoot_opE_N\u{1F911}.dll",clickEvent:S},{name:"mscvcp.dll"},{name:"NPSM.dll"},{name:"nshts.dll"},{name:"Svelte.dll"},{name:"Setupapi.dll"},{name:"Luxen.ApplicationModel.Store.TestingFramework.dll"}]},{name:"Icons",files:i.map(x=>({name:x.image.slice(x.image.lastIndexOf("/")+1),clickEvent:()=>_(x.image,x.image.slice(x.image.lastIndexOf("/")+1))}))},{name:"Sounds",files:[{name:"pop.ogg",clickEvent:()=>f("assets/sounds/pop.ogg")}]}]},{name:"Music",files:[{name:"kytaravec.wav",clickEvent:()=>f("assets/sounds/kytaravec.wav")},{name:"cool beat.wav",clickEvent:()=>f("assets/sounds/cool beat.wav")}]}])}R();let k=Ht.subscribe(()=>R());Nh(k);function N(x){r=x,t(0,r)}function g(x){l=x,t(1,l)}function A(x,le){n.$$.not_equal(le.visible,x)&&(le.visible=x,t(3,d))}function L(x,le){n.$$.not_equal(le.visible,x)&&(le.visible=x,t(4,v))}function j(x,le){n.$$.not_equal(le.visible,x)&&(le.visible=x,t(5,T))}const D=()=>window.close();function G(x){C=x,t(6,C)}return n.$$set=x=>{"visible"in x&&t(0,r=x.visible),"title"in x&&t(2,o=x.title),"isPinned"in x&&t(1,l=x.isPinned)},[r,l,o,d,v,T,C,M,N,g,A,L,j,D,G]}class fy extends be{constructor(e){super(),we(this,e,hy,cy,_e,{visible:0,title:2,isPinned:1},null,[-1,-1])}}function dy(n){let e,t,i,s,r,o,l,a,u,c,h;return{c(){e=I("h1"),e.textContent="About",t=P(),i=I("img"),r=P(),o=I("p"),o.innerHTML='Source code on <a href="https://github.com/Pesopes/disjuncture">Github</a>',l=P(),a=I("img"),c=P(),h=I("p"),h.innerHTML='Icons from <a href="https://www.svgrepo.com/">Svg repo</a>',Ie(i.src,s="https://www.svgrepo.com/show/341847/github.svg")||m(i,"src",s),m(i,"alt","github logo"),m(i,"width","20"),Ie(a.src,u="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4wLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL1RSLzIwMDEvUkVDLVNWRy0yMDAxMDkwNC9EVEQvc3ZnMTAuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4wIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHdpZHRoPSI3M3B4IiBoZWlnaHQ9IjIyLjEyNXB4IiB2aWV3Qm94PSIwIDAgNzMgMjIuMTI1IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA3MyAyMi4xMjUiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHJlY3QgeD0iNTQuMzk2IiB5PSIwLjU2MyIgZmlsbD0iIzZCOUJEMiIgd2lkdGg9IjE4LjAyMSIgaGVpZ2h0PSIyMS4xMDQiLz4NCjxnPg0KCTxwYXRoIGZpbGw9IiM1NzU4ODAiIGQ9Ik0wLjQ2NywxOC43NDhjMCwwLjAxNywwLjEyNS0wLjE0MywwLjM3NC0wLjQ3OWMwLjI0OS0wLjMzNCwwLjUyOS0wLjcsMC44MzgtMS4wOTYNCgkJYzAuMzYxLTAuNDY0LDAuNzc0LTAuOTg5LDEuMjM4LTEuNTc0YzAuNDY0LDAuMzI3LDAuOTM4LDAuNjE5LDEuNDE5LDAuODc3YzAuNDEzLDAuMjI0LDAuODYsMC40MjIsMS4zNDIsMC41OTMNCgkJYzAuNDgxLDAuMTcyLDAuOTM4LDAuMjU4LDEuMzY4LDAuMjU4YzAuMjU4LDAsMC41Mi0wLjAzOSwwLjc4Ny0wLjExNmMwLjI2Ny0wLjA3NywwLjUwNy0wLjE4NSwwLjcyMy0wLjMyMg0KCQljMC4yMTUtMC4xMzgsMC4zOTEtMC4zMDEsMC41MjktMC40OWMwLjEzNy0wLjE4OSwwLjIwNi0wLjM5NiwwLjIwNi0wLjYxOWMwLTAuNTMzLTAuMzAxLTEuMDAyLTAuOTAzLTEuNDA2DQoJCWMtMC42MDItMC40MDQtMS4zNDEtMC43NzgtMi4yMTktMS4xMjNjLTAuNTUxLTAuMjIzLTEuMTIyLTAuNTAzLTEuNzE2LTAuODM4Yy0wLjU5My0wLjMzNS0xLjEzNS0wLjczOS0xLjYyNS0xLjIxMg0KCQljLTAuNDktMC40NzMtMC44OS0xLjAxOS0xLjItMS42MzljLTAuMzEtMC42MTktMC40NjQtMS4zMTUtMC40NjQtMi4wODljMC0wLjc0LDAuMTI1LTEuNDQ1LDAuMzc1LTIuMTE2DQoJCWMwLjI0OS0wLjY3MSwwLjYyMy0xLjI2NCwxLjEyMi0xLjc4YzAuNDk5LTAuNTE2LDEuMTE4LTAuOTI0LDEuODU3LTEuMjI2QzUuMjU3LDIuMDUxLDYuMTI1LDEuOSw3LjEyMywxLjkNCgkJYzAuNzc0LDAsMS40NzksMC4wOTUsMi4xMTYsMC4yODRjMC42MzYsMC4xODksMS4yMTIsMC40MTMsMS43MjksMC42NzFjMC41MTYsMC4yNTgsMC45NjIsMC41MjksMS4zNDEsMC44MTMNCgkJYzAuMzc4LDAuMjg0LDAuNjk3LDAuNTIxLDAuOTU1LDAuNzA5TDEwLjg5LDcuNjAyYy0wLjA1MS0wLjAzNC0wLjIwMi0wLjE0Mi0wLjQ1MS0wLjMyM2MtMC4yNS0wLjE4MS0wLjU1NS0wLjM3LTAuOTE2LTAuNTY3DQoJCVM4Ljc1Nyw2LjMzMyw4LjMxLDYuMTdDNy44NjIsNi4wMDcsNy4zOTgsNS45MjUsNi45MTcsNS45MjVjLTAuNDY0LDAtMC44NjksMC4xMjUtMS4yMTIsMC4zNzRjLTAuMzQ0LDAuMjUtMC41MTYsMC41NDYtMC41MTYsMC44OQ0KCQljMCwwLjQ4MiwwLjIyOCwwLjkxNiwwLjY4NCwxLjMwM2MwLjQ1NiwwLjM4NywxLjIsMC43ODcsMi4yMzIsMS4yYzAuNDk5LDAuMjA2LDEuMDUzLDAuNDY0LDEuNjY0LDAuNzc0DQoJCWMwLjYxLDAuMzEsMS4xNzgsMC42OTYsMS43MDMsMS4xNjFjMC41MjQsMC40NjQsMC45NjMsMS4wMTksMS4zMTYsMS42NjRzMC41MjksMS40MDYsMC41MjksMi4yODNjMCwwLjY3MS0wLjEzOSwxLjM0Ni0wLjQxMywyLjAyNQ0KCQljLTAuMjc1LDAuNjgtMC42NzYsMS4yOTktMS4yLDEuODU3Yy0wLjUyNSwwLjU1OS0xLjE2NiwxLjAxNi0xLjkyMiwxLjM2N2MtMC43NTcsMC4zNTMtMS42MDgsMC41MjktMi41NTQsMC41MjkNCgkJYy0wLjg0MywwLTEuNjQ3LTAuMTEyLTIuNDEyLTAuMzM2QzQuMDQ4LDIwLjc5NSwzLjM2LDIwLjUzMiwyLjc1LDIwLjIzYy0wLjYxMS0wLjMwMS0xLjExOC0wLjU5My0xLjUyMi0wLjg3Nw0KCQlDMC44MjMsMTkuMDcsMC41NywxOC44NjgsMC40NjcsMTguNzQ4eiIvPg0KCTxwYXRoIGZpbGw9IiM1NzU4ODAiIGQ9Ik0xNS41ODYsMi41OTdoNC40NjNsNC4yODMsOS44MDRsNC4yODMtOS44MDRoNC40NjNsLTguNzQ2LDE4Ljc4MkwxNS41ODYsMi41OTd6Ii8+DQoJPHBhdGggZmlsbD0iIzU3NTg4MCIgZD0iTTUwLjY3NCwxNC42NDZjLTAuMDg2LDEuMjU1LTAuNDM4LDIuMzc0LTEuMDU4LDMuMzU0Yy0wLjI1OCwwLjQxMy0wLjU5LDAuODIxLTAuOTkzLDEuMjI1DQoJCWMtMC40MDQsMC40MDQtMC45MDMsMC43NjYtMS40OTYsMS4wODRjLTAuNTk0LDAuMzE4LTEuMjksMC41NzEtMi4wOSwwLjc2MXMtMS43MjUsMC4yODQtMi43NzQsMC4yODQNCgkJYy0xLjM0MSwwLTIuNjAyLTAuMjU0LTMuNzc5LTAuNzYyYy0xLjE3OS0wLjUwNy0yLjIwNy0xLjIwMy0zLjA4OC0yLjA5Yy0wLjg4MS0wLjg4NS0xLjU3My0xLjkxNy0yLjA3Ny0zLjA5Ng0KCQljLTAuNTA0LTEuMTc4LTAuNzU2LTIuNDM4LTAuNzU2LTMuNzc5YzAtMS4zNDIsMC4yNTItMi42MDIsMC43NTYtMy43OHMxLjE5Ni0yLjIxLDIuMDc3LTMuMDk2YzAuODgxLTAuODg2LDEuOTA5LTEuNTgyLDMuMDg4LTIuMDkNCgkJQzM5LjY2MSwyLjE1NCw0MC45MjIsMS45LDQyLjI2MywxLjljMS4zNDIsMCwyLjYwMiwwLjI1NywzLjc4LDAuNzdjMS4xNzgsMC41MTMsMi4yMDYsMS4yMDUsMy4wODMsMi4wNzZsLTIuODM4LDIuODMxDQoJCWMtMC41MTctMC40OTktMS4xMTgtMC44OTgtMS44MDYtMS4yYy0wLjY4OC0wLjMwMS0xLjQyOS0wLjQ1Mi0yLjIyLTAuNDUycy0xLjUzLDAuMTQ3LTIuMjE5LDAuNDQxDQoJCWMtMC42ODgsMC4yOTQtMS4yOSwwLjctMS44MDYsMS4yMThjLTAuNTE2LDAuNTE4LTAuOTIsMS4xMjMtMS4yMTMsMS44MTRjLTAuMjkyLDAuNjkxLTAuNDM4LDEuNDM0LTAuNDM4LDIuMjI5DQoJCXMwLjE0NiwxLjUzOCwwLjQzOCwyLjIyOWMwLjI5MywwLjY5MSwwLjY5NywxLjI5NiwxLjIxMywxLjgxNGMwLjUxNiwwLjUxOSwxLjExOCwwLjkyNCwxLjgwNiwxLjIxOA0KCQljMC42ODgsMC4yOTQsMS40MjgsMC40NDEsMi4yMTksMC40NDFjMS4xMDEsMCwxLjk0OC0wLjEzOSwyLjU0Mi0wLjQxN2MwLjU5My0wLjI3OCwxLjAyNy0wLjU5LDEuMzAzLTAuOTM4DQoJCWMwLjMxLTAuMzk5LDAuNDktMC44NTEsMC41NDItMS4zNTRoLTQuMzg3di00LjAyNWg4LjQxMVYxNC42NDZ6Ii8+DQo8L2c+DQo8Zz4NCgk8cGF0aCBmaWxsPSIjRjdGN0Y3IiBkPSJNNTkuNTYzLDguMDUzaC0wLjc0djIuMDNoLTEuNTZ2LTdoMy4wNWMwLjM0LDAsMC42NjIsMC4wNjUsMC45NjUsMC4xOTVzMC41NjYsMC4zMDcsMC43OSwwLjUyOQ0KCQljMC4yMjQsMC4yMjQsMC4zOTksMC40ODcsMC41MywwLjc5YzAuMTMsMC4zMDQsMC4xOTUsMC42MjUsMC4xOTUsMC45NjZjMCwwLjI2Ny0wLjA0MSwwLjUyLTAuMTIxLDAuNzZzLTAuMTg5LDAuNDYyLTAuMzMsMC42NjUNCgkJYy0wLjEzOSwwLjIwMy0wLjMwNywwLjM4My0wLjUsMC41NGMtMC4xOTMsMC4xNTYtMC40MDYsMC4yNzgtMC42MzksMC4zNjRsMS41OSwyLjE5aC0xLjkyTDU5LjU2Myw4LjA1M3ogTTU4LjgyMiw2LjU4M2gxLjQ5DQoJCWMwLjE0MSwwLDAuMjcxLTAuMDI2LDAuMzk1LTAuMDhjMC4xMjMtMC4wNTMsMC4yMzItMC4xMjcsMC4zMjYtMC4yMmMwLjA5My0wLjA5NCwwLjE2Ni0wLjIwMiwwLjIxOS0wLjMyNQ0KCQljMC4wNTQtMC4xMjMsMC4wOC0wLjI1NSwwLjA4LTAuMzk1YzAtMC4yNjEtMC4wODgtMC40ODUtMC4yNjUtMC42NzZjLTAuMTc3LTAuMTg5LTAuMzg4LTAuMzAxLTAuNjM1LTAuMzM1aC0xLjYxVjYuNTgzeiIvPg0KPC9nPg0KPGc+DQoJPHBhdGggZmlsbD0iI0Y3RjdGNyIgZD0iTTY2LjY1Niw4LjUyM2gzLjI2N3YxLjU2aC00Ljk4OXYtN2g0Ljk4OXYxLjU2aC0zLjI2N3YxLjA5MWgyLjcyN3YxLjU2aC0yLjcyN1Y4LjUyM3oiLz4NCjwvZz4NCjxnPg0KCTxwYXRoIGZpbGw9IiNGN0Y3RjciIGQ9Ik02Mi41ODQsMTQuODk3YzAsMC4zNC0wLjA2NCwwLjY2MS0wLjE5NSwwLjk2NWMtMC4xMywwLjMwMy0wLjMwNywwLjU2OC0wLjUyOSwwLjc5NQ0KCQljLTAuMjI0LDAuMjI3LTAuNDg3LDAuNDA0LTAuNzkxLDAuNTM1Yy0wLjMwMywwLjEzLTAuNjI1LDAuMTk0LTAuOTY1LDAuMTk0aC0xLjQ5djIuMDNoLTEuNTU5di03aDMuMDQ5DQoJCWMwLjM0LDAsMC42NjIsMC4wNjUsMC45NjUsMC4xOTVjMC4zMDQsMC4xMywwLjU2NywwLjMwNywwLjc5MSwwLjUyOWMwLjIyMywwLjIyNCwwLjM5OSwwLjQ4NywwLjUyOSwwLjc5DQoJCUM2Mi41MiwxNC4yMzUsNjIuNTg0LDE0LjU1Nyw2Mi41ODQsMTQuODk3eiBNNTguNjEzLDE1LjkxN2gxLjQ5YzAuMTQxLDAsMC4yNzEtMC4wMjYsMC4zOTYtMC4wOA0KCQljMC4xMjMtMC4wNTMsMC4yMzEtMC4xMjcsMC4zMjUtMC4yMmMwLjA5NC0wLjA5NCwwLjE2Ni0wLjIwMiwwLjIyLTAuMzI1czAuMDgtMC4yNTUsMC4wOC0wLjM5NWMwLTAuMjYxLTAuMDg5LTAuNDg1LTAuMjY1LTAuNjc2DQoJCWMtMC4xNzgtMC4xODktMC4zODktMC4zMDEtMC42MzUtMC4zMzVoLTEuNjExVjE1LjkxN3oiLz4NCjwvZz4NCjxnPg0KCTxwYXRoIGZpbGw9IiNGN0Y3RjciIGQ9Ik02NC4xNTYsMTUuODIzYzAtMC41MTcsMC4wODgtMC45OTksMC4yNjYtMS40NWMwLjE3OC0wLjQ1LDAuNDItMC44NDIsMC43MjctMS4xNzVzMC42NjYtMC41OTYsMS4wNzgtMC43ODkNCgkJYzAuNDEyLTAuMTkyLDAuODU0LTAuMjg5LDEuMzIyLTAuMjg5YzAuNDc3LDAsMC45MjIsMC4wOTcsMS4zMzYsMC4yODljMC40MTYsMC4xOTMsMC43NzcsMC40NTYsMS4wODQsMC43ODkNCgkJczAuNTQ5LDAuNzI1LDAuNzI3LDEuMTc1YzAuMTc4LDAuNDUxLDAuMjY2LDAuOTM0LDAuMjY2LDEuNDVjMCwwLjUwOS0wLjA4OCwwLjk4Ny0wLjI2NiwxLjQzNXMtMC40MiwwLjgzOC0wLjcyNywxLjE3MQ0KCQlzLTAuNjY4LDAuNTk2LTEuMDg0LDAuNzg4Yy0wLjQxNCwwLjE5Mi0wLjg1OSwwLjI4OS0xLjMzNiwwLjI4OWMtMC40NjksMC0wLjkxLTAuMDk3LTEuMzIyLTAuMjg5cy0wLjc3MS0wLjQ1NS0xLjA3OC0wLjc4OA0KCQlzLTAuNTQ5LTAuNzI0LTAuNzI3LTEuMTcxUzY0LjE1NiwxNi4zMzIsNjQuMTU2LDE1LjgyM3ogTTY1LjU2NiwxNS44MjNjMCwwLjMwMiwwLjA1MywwLjU4NCwwLjE1OCwwLjg0Ng0KCQljMC4xMDUsMC4yNjMsMC4yNDgsMC40OSwwLjQyNiwwLjY4NGMwLjE3OCwwLjE5NCwwLjM4OSwwLjM0NywwLjYyOSwwLjQ1OGMwLjI0MiwwLjExMSwwLjQ5OCwwLjE2NywwLjc3LDAuMTY3DQoJCWMwLjI3OSwwLDAuNTM5LTAuMDU2LDAuNzg1LTAuMTY3YzAuMjQ0LTAuMTExLDAuNDU3LTAuMjY0LDAuNjM3LTAuNDU4YzAuMTgyLTAuMTkzLDAuMzI0LTAuNDIxLDAuNDI2LTAuNjg0DQoJCWMwLjEwNC0wLjI2MiwwLjE1NC0wLjU0NCwwLjE1NC0wLjg0NnMtMC4wNTEtMC41ODQtMC4xNTQtMC44NDdjLTAuMTAyLTAuMjYyLTAuMjQ0LTAuNDkyLTAuNDI2LTAuNjg4DQoJCWMtMC4xOC0wLjE5Ny0wLjM5My0wLjM1My0wLjYzNy0wLjQ2OGMtMC4yNDYtMC4xMTQtMC41MDYtMC4xNzItMC43ODUtMC4xNzJjLTAuMjcxLDAtMC41MjcsMC4wNTgtMC43NywwLjE3Mg0KCQljLTAuMjQsMC4xMTUtMC40NTEsMC4yNzEtMC42MjksMC40NjhjLTAuMTc4LDAuMTk2LTAuMzIsMC40MjctMC40MjYsMC42ODhDNjUuNjE5LDE1LjIzOSw2NS41NjYsMTUuNTIxLDY1LjU2NiwxNS44MjN6Ii8+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==")||m(a,"src",u),m(a,"alt","svg repo logo"),m(a,"width","40")},m(d,f){b(d,e,f),b(d,t,f),b(d,i,f),b(d,r,f),b(d,o,f),b(d,l,f),b(d,a,f),b(d,c,f),b(d,h,f)},p:z,d(d){d&&w(e),d&&w(t),d&&w(i),d&&w(r),d&&w(o),d&&w(l),d&&w(a),d&&w(c),d&&w(h)}}}function py(n){let e,t,i,s;function r(a){n[3](a)}function o(a){n[4](a)}let l={title:n[2],centered:!0,$$slots:{default:[dy]},$$scope:{ctx:n}};return n[0]!==void 0&&(l.visible=n[0]),n[1]!==void 0&&(l.isPinned=n[1]),e=new qe({props:l}),ee.push(()=>ue(e,"visible",r)),ee.push(()=>ue(e,"isPinned",o)),{c(){oe(e.$$.fragment)},m(a,u){se(e,a,u),s=!0},p(a,[u]){const c={};u&4&&(c.title=a[2]),u&32&&(c.$$scope={dirty:u,ctx:a}),!t&&u&1&&(t=!0,c.visible=a[0],he(()=>t=!1)),!i&&u&2&&(i=!0,c.isPinned=a[1],he(()=>i=!1)),e.$set(c)},i(a){s||(F(e.$$.fragment,a),s=!0)},o(a){q(e.$$.fragment,a),s=!1},d(a){re(e,a)}}}function gy(n,e,t){let{visible:i=!1}=e,{title:s="New window"}=e,{isPinned:r=!1}=e;function o(a){i=a,t(0,i)}function l(a){r=a,t(1,r)}return n.$$set=a=>{"visible"in a&&t(0,i=a.visible),"title"in a&&t(2,s=a.title),"isPinned"in a&&t(1,r=a.isPinned)},[i,r,s,o,l]}class my extends be{constructor(e){super(),we(this,e,gy,py,_e,{visible:0,title:2,isPinned:1})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xh=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},yy=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],o=n[t++],l=n[t++],a=((s&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[i++]=String.fromCharCode(55296+(a>>10)),e[i++]=String.fromCharCode(56320+(a&1023))}else{const r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Bh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,l=o?n[s+1]:0,a=s+2<n.length,u=a?n[s+2]:0,c=r>>2,h=(r&3)<<4|l>>4;let d=(l&15)<<2|u>>6,f=u&63;a||(f=64,o||(d=64)),i.push(t[c],t[h],t[d],t[f])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(xh(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):yy(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const u=s<n.length?t[n.charAt(s)]:64;++s;const h=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||l==null||u==null||h==null)throw new vy;const d=r<<2|l>>4;if(i.push(d),u!==64){const f=l<<4&240|u>>2;if(i.push(f),h!==64){const p=u<<6&192|h;i.push(p)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class vy extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _y=function(n){const e=xh(n);return Bh.encodeByteArray(e,!0)},sr=function(n){return _y(n).replace(/\./g,"")},qh=function(n){try{return Bh.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const by=()=>wy().__FIREBASE_DEFAULTS__,Iy=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Ty=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&qh(n[1]);return e&&JSON.parse(e)},Ia=()=>{try{return by()||Iy()||Ty()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Hh=n=>{var e,t;return(t=(e=Ia())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Ey=n=>{const e=Hh(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},$h=()=>{var n;return(n=Ia())===null||n===void 0?void 0:n.config},Gh=n=>{var e;return(e=Ia())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cy{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function My(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n),l="";return[sr(JSON.stringify(t)),sr(JSON.stringify(o)),l].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ky(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Xe())}function Sy(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Ny(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ay(){const n=Xe();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Dy(){try{return typeof indexedDB=="object"}catch{return!1}}function Ly(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oy="FirebaseError";class xt extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=Oy,Object.setPrototypeOf(this,xt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ss.prototype.create)}}class ss{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?Py(r,i):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new xt(s,l,i)}}function Py(n,e){return n.replace(Ry,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Ry=/\{\$([^}]+)}/g;function jy(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function rr(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],o=e[s];if(Tu(r)&&Tu(o)){if(!rr(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function Tu(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rs(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Uy(n,e){const t=new Fy(n,e);return t.subscribe.bind(t)}class Fy{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");zy(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=lo),s.error===void 0&&(s.error=lo),s.complete===void 0&&(s.complete=lo);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function zy(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function lo(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(n){return n&&n._delegate?n._delegate:n}class En{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new Cy;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(By(e))try{this.getOrInitializeService({instanceIdentifier:dn})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=dn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=dn){return this.instances.has(e)}getOptions(e=dn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);i===l&&o.resolve(s)}return s}onInit(e,t){var i;const s=this.normalizeInstanceIdentifier(t),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(!!i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:xy(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=dn){return this.component?this.component.multipleInstances?e:dn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function xy(n){return n===dn?void 0:n}function By(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Vy(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var de;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(de||(de={}));const Hy={debug:de.DEBUG,verbose:de.VERBOSE,info:de.INFO,warn:de.WARN,error:de.ERROR,silent:de.SILENT},$y=de.INFO,Gy={[de.DEBUG]:"log",[de.VERBOSE]:"log",[de.INFO]:"info",[de.WARN]:"warn",[de.ERROR]:"error"},Qy=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=Gy[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ta{constructor(e){this.name=e,this._logLevel=$y,this._logHandler=Qy,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in de))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Hy[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,de.DEBUG,...e),this._logHandler(this,de.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,de.VERBOSE,...e),this._logHandler(this,de.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,de.INFO,...e),this._logHandler(this,de.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,de.WARN,...e),this._logHandler(this,de.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,de.ERROR,...e),this._logHandler(this,de.ERROR,...e)}}const Ky=(n,e)=>e.some(t=>n instanceof t);let Eu,Cu;function Yy(){return Eu||(Eu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Wy(){return Cu||(Cu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Qh=new WeakMap,Oo=new WeakMap,Kh=new WeakMap,uo=new WeakMap,Ea=new WeakMap;function Jy(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(Yt(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Qh.set(t,n)}).catch(()=>{}),Ea.set(e,n),e}function Xy(n){if(Oo.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Oo.set(n,e)}let Po={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Oo.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Kh.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Yt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Zy(n){Po=n(Po)}function e0(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(co(this),e,...t);return Kh.set(i,e.sort?e.sort():[e]),Yt(i)}:Wy().includes(n)?function(...e){return n.apply(co(this),e),Yt(Qh.get(this))}:function(...e){return Yt(n.apply(co(this),e))}}function t0(n){return typeof n=="function"?e0(n):(n instanceof IDBTransaction&&Xy(n),Ky(n,Yy())?new Proxy(n,Po):n)}function Yt(n){if(n instanceof IDBRequest)return Jy(n);if(uo.has(n))return uo.get(n);const e=t0(n);return e!==n&&(uo.set(n,e),Ea.set(e,n)),e}const co=n=>Ea.get(n);function n0(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(n,e),l=Yt(o);return i&&o.addEventListener("upgradeneeded",a=>{i(Yt(o.result),a.oldVersion,a.newVersion,Yt(o.transaction),a)}),t&&o.addEventListener("blocked",a=>t(a.oldVersion,a.newVersion,a)),l.then(a=>{r&&a.addEventListener("close",()=>r()),s&&a.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const i0=["get","getKey","getAll","getAllKeys","count"],s0=["put","add","delete","clear"],ho=new Map;function Mu(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ho.get(e))return ho.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=s0.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||i0.includes(t)))return;const r=async function(o,...l){const a=this.transaction(o,s?"readwrite":"readonly");let u=a.store;return i&&(u=u.index(l.shift())),(await Promise.all([u[t](...l),s&&a.done]))[0]};return ho.set(e,r),r}Zy(n=>({...n,get:(e,t,i)=>Mu(e,t)||n.get(e,t,i),has:(e,t)=>!!Mu(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(o0(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function o0(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ro="@firebase/app",ku="0.9.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cn=new Ta("@firebase/app"),a0="@firebase/app-compat",l0="@firebase/analytics-compat",u0="@firebase/analytics",c0="@firebase/app-check-compat",h0="@firebase/app-check",f0="@firebase/auth",d0="@firebase/auth-compat",p0="@firebase/database",g0="@firebase/database-compat",m0="@firebase/functions",y0="@firebase/functions-compat",v0="@firebase/installations",_0="@firebase/installations-compat",w0="@firebase/messaging",b0="@firebase/messaging-compat",I0="@firebase/performance",T0="@firebase/performance-compat",E0="@firebase/remote-config",C0="@firebase/remote-config-compat",M0="@firebase/storage",k0="@firebase/storage-compat",S0="@firebase/firestore",N0="@firebase/firestore-compat",A0="firebase",D0="9.23.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jo="[DEFAULT]",L0={[Ro]:"fire-core",[a0]:"fire-core-compat",[u0]:"fire-analytics",[l0]:"fire-analytics-compat",[h0]:"fire-app-check",[c0]:"fire-app-check-compat",[f0]:"fire-auth",[d0]:"fire-auth-compat",[p0]:"fire-rtdb",[g0]:"fire-rtdb-compat",[m0]:"fire-fn",[y0]:"fire-fn-compat",[v0]:"fire-iid",[_0]:"fire-iid-compat",[w0]:"fire-fcm",[b0]:"fire-fcm-compat",[I0]:"fire-perf",[T0]:"fire-perf-compat",[E0]:"fire-rc",[C0]:"fire-rc-compat",[M0]:"fire-gcs",[k0]:"fire-gcs-compat",[S0]:"fire-fst",[N0]:"fire-fst-compat","fire-js":"fire-js",[A0]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or=new Map,Uo=new Map;function O0(n,e){try{n.container.addComponent(e)}catch(t){Cn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ei(n){const e=n.name;if(Uo.has(e))return Cn.debug(`There were multiple attempts to register component ${e}.`),!1;Uo.set(e,n);for(const t of or.values())O0(t,n);return!0}function Ca(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P0={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Wt=new ss("app","Firebase",P0);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R0{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new En("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Wt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ui=D0;function Yh(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:jo,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw Wt.create("bad-app-name",{appName:String(s)});if(t||(t=$h()),!t)throw Wt.create("no-options");const r=or.get(s);if(r){if(rr(t,r.options)&&rr(i,r.config))return r;throw Wt.create("duplicate-app",{appName:s})}const o=new qy(s);for(const a of Uo.values())o.addComponent(a);const l=new R0(t,i,o);return or.set(s,l),l}function Wh(n=jo){const e=or.get(n);if(!e&&n===jo&&$h())return Yh();if(!e)throw Wt.create("no-app",{appName:n});return e}function Jt(n,e,t){var i;let s=(i=L0[n])!==null&&i!==void 0?i:n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${s}" with version "${e}":`];r&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Cn.warn(l.join(" "));return}ei(new En(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j0="firebase-heartbeat-database",U0=1,Fi="firebase-heartbeat-store";let fo=null;function Jh(){return fo||(fo=n0(j0,U0,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Fi)}}}).catch(n=>{throw Wt.create("idb-open",{originalErrorMessage:n.message})})),fo}async function F0(n){try{return await(await Jh()).transaction(Fi).objectStore(Fi).get(Xh(n))}catch(e){if(e instanceof xt)Cn.warn(e.message);else{const t=Wt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Cn.warn(t.message)}}}async function Su(n,e){try{const i=(await Jh()).transaction(Fi,"readwrite");await i.objectStore(Fi).put(e,Xh(n)),await i.done}catch(t){if(t instanceof xt)Cn.warn(t.message);else{const i=Wt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Cn.warn(i.message)}}}function Xh(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z0=1024,V0=30*24*60*60*1e3;class x0{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new q0(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Nu();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=V0}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Nu(),{heartbeatsToSend:t,unsentEntries:i}=B0(this._heartbeatsCache.heartbeats),s=sr(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Nu(){return new Date().toISOString().substring(0,10)}function B0(n,e=z0){const t=[];let i=n.slice();for(const s of n){const r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),Au(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Au(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class q0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Dy()?Ly().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await F0(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Su(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Su(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Au(n){return sr(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H0(n){ei(new En("platform-logger",e=>new r0(e),"PRIVATE")),ei(new En("heartbeat",e=>new x0(e),"PRIVATE")),Jt(Ro,ku,n),Jt(Ro,ku,"esm2017"),Jt("fire-js","")}H0("");var $0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},V,Ma=Ma||{},Z=$0||self;function Nr(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function os(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function G0(n){return Object.prototype.hasOwnProperty.call(n,po)&&n[po]||(n[po]=++Q0)}var po="closure_uid_"+(1e9*Math.random()>>>0),Q0=0;function K0(n,e,t){return n.call.apply(n.bind,arguments)}function Y0(n,e,t){if(!n)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),n.apply(e,s)}}return function(){return n.apply(e,arguments)}}function Ye(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ye=K0:Ye=Y0,Ye.apply(null,arguments)}function Ls(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var i=t.slice();return i.push.apply(i,arguments),n.apply(this,i)}}function ze(n,e){function t(){}t.prototype=e.prototype,n.$=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.ac=function(i,s,r){for(var o=Array(arguments.length-2),l=2;l<arguments.length;l++)o[l-2]=arguments[l];return e.prototype[s].apply(i,o)}}function ln(){this.s=this.s,this.o=this.o}var W0=0;ln.prototype.s=!1;ln.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),W0!=0)&&G0(this)};ln.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Zh=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1};function ka(n){const e=n.length;if(0<e){const t=Array(e);for(let i=0;i<e;i++)t[i]=n[i];return t}return[]}function Du(n,e){for(let t=1;t<arguments.length;t++){const i=arguments[t];if(Nr(i)){const s=n.length||0,r=i.length||0;n.length=s+r;for(let o=0;o<r;o++)n[s+o]=i[o]}else n.push(i)}}function We(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}We.prototype.h=function(){this.defaultPrevented=!0};var J0=function(){if(!Z.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{Z.addEventListener("test",()=>{},e),Z.removeEventListener("test",()=>{},e)}catch{}return n}();function zi(n){return/^[\s\xa0]*$/.test(n)}function Ar(){var n=Z.navigator;return n&&(n=n.userAgent)?n:""}function It(n){return Ar().indexOf(n)!=-1}function Sa(n){return Sa[" "](n),n}Sa[" "]=function(){};function X0(n,e){var t=Hv;return Object.prototype.hasOwnProperty.call(t,n)?t[n]:t[n]=e(n)}var Z0=It("Opera"),ti=It("Trident")||It("MSIE"),ef=It("Edge"),Fo=ef||ti,tf=It("Gecko")&&!(Ar().toLowerCase().indexOf("webkit")!=-1&&!It("Edge"))&&!(It("Trident")||It("MSIE"))&&!It("Edge"),ev=Ar().toLowerCase().indexOf("webkit")!=-1&&!It("Edge");function nf(){var n=Z.document;return n?n.documentMode:void 0}var zo;e:{var go="",mo=function(){var n=Ar();if(tf)return/rv:([^\);]+)(\)|;)/.exec(n);if(ef)return/Edge\/([\d\.]+)/.exec(n);if(ti)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(ev)return/WebKit\/(\S+)/.exec(n);if(Z0)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(mo&&(go=mo?mo[1]:""),ti){var yo=nf();if(yo!=null&&yo>parseFloat(go)){zo=String(yo);break e}}zo=go}var Vo;if(Z.document&&ti){var Lu=nf();Vo=Lu||parseInt(zo,10)||void 0}else Vo=void 0;var tv=Vo;function Vi(n,e){if(We.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,i=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(tf){e:{try{Sa(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:nv[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&Vi.$.h.call(this)}}ze(Vi,We);var nv={2:"touch",3:"pen",4:"mouse"};Vi.prototype.h=function(){Vi.$.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var as="closure_listenable_"+(1e6*Math.random()|0),iv=0;function sv(n,e,t,i,s){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!i,this.la=s,this.key=++iv,this.fa=this.ia=!1}function Dr(n){n.fa=!0,n.listener=null,n.proxy=null,n.src=null,n.la=null}function Na(n,e,t){for(const i in n)e.call(t,n[i],i,n)}function rv(n,e){for(const t in n)e.call(void 0,n[t],t,n)}function sf(n){const e={};for(const t in n)e[t]=n[t];return e}const Ou="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function rf(n,e){let t,i;for(let s=1;s<arguments.length;s++){i=arguments[s];for(t in i)n[t]=i[t];for(let r=0;r<Ou.length;r++)t=Ou[r],Object.prototype.hasOwnProperty.call(i,t)&&(n[t]=i[t])}}function Lr(n){this.src=n,this.g={},this.h=0}Lr.prototype.add=function(n,e,t,i,s){var r=n.toString();n=this.g[r],n||(n=this.g[r]=[],this.h++);var o=Bo(n,e,i,s);return-1<o?(e=n[o],t||(e.ia=!1)):(e=new sv(e,this.src,r,!!i,s),e.ia=t,n.push(e)),e};function xo(n,e){var t=e.type;if(t in n.g){var i=n.g[t],s=Zh(i,e),r;(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Dr(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function Bo(n,e,t,i){for(var s=0;s<n.length;++s){var r=n[s];if(!r.fa&&r.listener==e&&r.capture==!!t&&r.la==i)return s}return-1}var Aa="closure_lm_"+(1e6*Math.random()|0),vo={};function of(n,e,t,i,s){if(i&&i.once)return lf(n,e,t,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)of(n,e[r],t,i,s);return null}return t=Oa(t),n&&n[as]?n.O(e,t,os(i)?!!i.capture:!!i,s):af(n,e,t,!1,i,s)}function af(n,e,t,i,s,r){if(!e)throw Error("Invalid event type");var o=os(s)?!!s.capture:!!s,l=La(n);if(l||(n[Aa]=l=new Lr(n)),t=l.add(e,t,i,o,r),t.proxy)return t;if(i=ov(),t.proxy=i,i.src=n,i.listener=t,n.addEventListener)J0||(s=o),s===void 0&&(s=!1),n.addEventListener(e.toString(),i,s);else if(n.attachEvent)n.attachEvent(cf(e.toString()),i);else if(n.addListener&&n.removeListener)n.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return t}function ov(){function n(t){return e.call(n.src,n.listener,t)}const e=av;return n}function lf(n,e,t,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)lf(n,e[r],t,i,s);return null}return t=Oa(t),n&&n[as]?n.P(e,t,os(i)?!!i.capture:!!i,s):af(n,e,t,!0,i,s)}function uf(n,e,t,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)uf(n,e[r],t,i,s);else i=os(i)?!!i.capture:!!i,t=Oa(t),n&&n[as]?(n=n.i,e=String(e).toString(),e in n.g&&(r=n.g[e],t=Bo(r,t,i,s),-1<t&&(Dr(r[t]),Array.prototype.splice.call(r,t,1),r.length==0&&(delete n.g[e],n.h--)))):n&&(n=La(n))&&(e=n.g[e.toString()],n=-1,e&&(n=Bo(e,t,i,s)),(t=-1<n?e[n]:null)&&Da(t))}function Da(n){if(typeof n!="number"&&n&&!n.fa){var e=n.src;if(e&&e[as])xo(e.i,n);else{var t=n.type,i=n.proxy;e.removeEventListener?e.removeEventListener(t,i,n.capture):e.detachEvent?e.detachEvent(cf(t),i):e.addListener&&e.removeListener&&e.removeListener(i),(t=La(e))?(xo(t,n),t.h==0&&(t.src=null,e[Aa]=null)):Dr(n)}}}function cf(n){return n in vo?vo[n]:vo[n]="on"+n}function av(n,e){if(n.fa)n=!0;else{e=new Vi(e,this);var t=n.listener,i=n.la||n.src;n.ia&&Da(n),n=t.call(i,e)}return n}function La(n){return n=n[Aa],n instanceof Lr?n:null}var _o="__closure_events_fn_"+(1e9*Math.random()>>>0);function Oa(n){return typeof n=="function"?n:(n[_o]||(n[_o]=function(e){return n.handleEvent(e)}),n[_o])}function Fe(){ln.call(this),this.i=new Lr(this),this.S=this,this.J=null}ze(Fe,ln);Fe.prototype[as]=!0;Fe.prototype.removeEventListener=function(n,e,t,i){uf(this,n,e,t,i)};function Be(n,e){var t,i=n.J;if(i)for(t=[];i;i=i.J)t.push(i);if(n=n.S,i=e.type||e,typeof e=="string")e=new We(e,n);else if(e instanceof We)e.target=e.target||n;else{var s=e;e=new We(i,n),rf(e,s)}if(s=!0,t)for(var r=t.length-1;0<=r;r--){var o=e.g=t[r];s=Os(o,i,!0,e)&&s}if(o=e.g=n,s=Os(o,i,!0,e)&&s,s=Os(o,i,!1,e)&&s,t)for(r=0;r<t.length;r++)o=e.g=t[r],s=Os(o,i,!1,e)&&s}Fe.prototype.N=function(){if(Fe.$.N.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],i=0;i<t.length;i++)Dr(t[i]);delete n.g[e],n.h--}}this.J=null};Fe.prototype.O=function(n,e,t,i){return this.i.add(String(n),e,!1,t,i)};Fe.prototype.P=function(n,e,t,i){return this.i.add(String(n),e,!0,t,i)};function Os(n,e,t,i){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.fa&&o.capture==t){var l=o.listener,a=o.la||o.src;o.ia&&xo(n.i,o),s=l.call(a,i)!==!1&&s}}return s&&!i.defaultPrevented}var Pa=Z.JSON.stringify;class lv{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function uv(){var n=Ra;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class cv{constructor(){this.h=this.g=null}add(e,t){const i=hf.get();i.set(e,t),this.h?this.h.next=i:this.g=i,this.h=i}}var hf=new lv(()=>new hv,n=>n.reset());class hv{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function fv(n){var e=1;n=n.split(":");const t=[];for(;0<e&&n.length;)t.push(n.shift()),e--;return n.length&&t.push(n.join(":")),t}function dv(n){Z.setTimeout(()=>{throw n},0)}let xi,Bi=!1,Ra=new cv,ff=()=>{const n=Z.Promise.resolve(void 0);xi=()=>{n.then(pv)}};var pv=()=>{for(var n;n=uv();){try{n.h.call(n.g)}catch(t){dv(t)}var e=hf;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}Bi=!1};function Or(n,e){Fe.call(this),this.h=n||1,this.g=e||Z,this.j=Ye(this.qb,this),this.l=Date.now()}ze(Or,Fe);V=Or.prototype;V.ga=!1;V.T=null;V.qb=function(){if(this.ga){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-n):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Be(this,"tick"),this.ga&&(ja(this),this.start()))}};V.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ja(n){n.ga=!1,n.T&&(n.g.clearTimeout(n.T),n.T=null)}V.N=function(){Or.$.N.call(this),ja(this),delete this.g};function Ua(n,e,t){if(typeof n=="function")t&&(n=Ye(n,t));else if(n&&typeof n.handleEvent=="function")n=Ye(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Z.setTimeout(n,e||0)}function df(n){n.g=Ua(()=>{n.g=null,n.i&&(n.i=!1,df(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class gv extends ln{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:df(this)}N(){super.N(),this.g&&(Z.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function qi(n){ln.call(this),this.h=n,this.g={}}ze(qi,ln);var Pu=[];function pf(n,e,t,i){Array.isArray(t)||(t&&(Pu[0]=t.toString()),t=Pu);for(var s=0;s<t.length;s++){var r=of(e,t[s],i||n.handleEvent,!1,n.h||n);if(!r)break;n.g[r.key]=r}}function gf(n){Na(n.g,function(e,t){this.g.hasOwnProperty(t)&&Da(e)},n),n.g={}}qi.prototype.N=function(){qi.$.N.call(this),gf(this)};qi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Pr(){this.g=!0}Pr.prototype.Ea=function(){this.g=!1};function mv(n,e,t,i,s,r){n.info(function(){if(n.g)if(r)for(var o="",l=r.split("&"),a=0;a<l.length;a++){var u=l[a].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+`
`+t+`
`+o})}function yv(n,e,t,i,s,r,o){n.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+`
`+t+`
`+r+" "+o})}function qn(n,e,t,i){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+_v(n,t)+(i?" "+i:"")})}function vv(n,e){n.info(function(){return"TIMEOUT: "+e})}Pr.prototype.info=function(){};function _v(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var i=t[n];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Pa(t)}catch{return e}}var Dn={},Ru=null;function Rr(){return Ru=Ru||new Fe}Dn.Ta="serverreachability";function mf(n){We.call(this,Dn.Ta,n)}ze(mf,We);function Hi(n){const e=Rr();Be(e,new mf(e))}Dn.STAT_EVENT="statevent";function yf(n,e){We.call(this,Dn.STAT_EVENT,n),this.stat=e}ze(yf,We);function et(n){const e=Rr();Be(e,new yf(e,n))}Dn.Ua="timingevent";function vf(n,e){We.call(this,Dn.Ua,n),this.size=e}ze(vf,We);function ls(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return Z.setTimeout(function(){n()},e)}var jr={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},_f={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Fa(){}Fa.prototype.h=null;function ju(n){return n.h||(n.h=n.i())}function wf(){}var us={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function za(){We.call(this,"d")}ze(za,We);function Va(){We.call(this,"c")}ze(Va,We);var qo;function Ur(){}ze(Ur,Fa);Ur.prototype.g=function(){return new XMLHttpRequest};Ur.prototype.i=function(){return{}};qo=new Ur;function cs(n,e,t,i){this.l=n,this.j=e,this.m=t,this.W=i||1,this.U=new qi(this),this.P=wv,n=Fo?125:void 0,this.V=new Or(n),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new bf}function bf(){this.i=null,this.g="",this.h=!1}var wv=45e3,Ho={},ar={};V=cs.prototype;V.setTimeout=function(n){this.P=n};function $o(n,e,t){n.L=1,n.v=zr(jt(e)),n.s=t,n.S=!0,If(n,null)}function If(n,e){n.G=Date.now(),hs(n),n.A=jt(n.v);var t=n.A,i=n.W;Array.isArray(i)||(i=[String(i)]),Af(t.i,"t",i),n.C=0,t=n.l.J,n.h=new bf,n.g=Jf(n.l,t?e:null,!n.s),0<n.O&&(n.M=new gv(Ye(n.Pa,n,n.g),n.O)),pf(n.U,n.g,"readystatechange",n.nb),e=n.I?sf(n.I):{},n.s?(n.u||(n.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.ha(n.A,n.u,n.s,e)):(n.u="GET",n.g.ha(n.A,n.u,null,e)),Hi(),mv(n.j,n.u,n.A,n.m,n.W,n.s)}V.nb=function(n){n=n.target;const e=this.M;e&&Et(n)==3?e.l():this.Pa(n)};V.Pa=function(n){try{if(n==this.g)e:{const c=Et(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||Fo||this.g&&(this.h.h||this.g.ja()||Vu(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?Hi(3):Hi(2)),Fr(this);var t=this.g.da();this.ca=t;t:if(Tf(this)){var i=Vu(this.g);n="";var s=i.length,r=Et(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){pn(this),Ni(this);var o="";break t}this.h.i=new Z.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,n+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.splice(0,s),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=t==200,yv(this.j,this.u,this.A,this.m,this.W,c,t),this.i){if(this.aa&&!this.K){t:{if(this.g){var l,a=this.g;if((l=a.g?a.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!zi(l)){var u=l;break t}}u=null}if(t=u)qn(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Go(this,t);else{this.i=!1,this.o=3,et(12),pn(this),Ni(this);break e}}this.S?(Ef(this,c,o),Fo&&this.i&&c==3&&(pf(this.U,this.V,"tick",this.mb),this.V.start())):(qn(this.j,this.m,o,null),Go(this,o)),c==4&&pn(this),this.i&&!this.J&&(c==4?Qf(this.l,this):(this.i=!1,hs(this)))}else xv(this.g),t==400&&0<o.indexOf("Unknown SID")?(this.o=3,et(12)):(this.o=0,et(13)),pn(this),Ni(this)}}}catch{}finally{}};function Tf(n){return n.g?n.u=="GET"&&n.L!=2&&n.l.Ha:!1}function Ef(n,e,t){let i=!0,s;for(;!n.J&&n.C<t.length;)if(s=bv(n,t),s==ar){e==4&&(n.o=4,et(14),i=!1),qn(n.j,n.m,null,"[Incomplete Response]");break}else if(s==Ho){n.o=4,et(15),qn(n.j,n.m,t,"[Invalid Chunk]"),i=!1;break}else qn(n.j,n.m,s,null),Go(n,s);Tf(n)&&s!=ar&&s!=Ho&&(n.h.g="",n.C=0),e!=4||t.length!=0||n.h.h||(n.o=1,et(16),i=!1),n.i=n.i&&i,i?0<t.length&&!n.ba&&(n.ba=!0,e=n.l,e.g==n&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+t.length),Ga(e),e.M=!0,et(11))):(qn(n.j,n.m,t,"[Invalid Chunked Response]"),pn(n),Ni(n))}V.mb=function(){if(this.g){var n=Et(this.g),e=this.g.ja();this.C<e.length&&(Fr(this),Ef(this,n,e),this.i&&n!=4&&hs(this))}};function bv(n,e){var t=n.C,i=e.indexOf(`
`,t);return i==-1?ar:(t=Number(e.substring(t,i)),isNaN(t)?Ho:(i+=1,i+t>e.length?ar:(e=e.slice(i,i+t),n.C=i+t,e)))}V.cancel=function(){this.J=!0,pn(this)};function hs(n){n.Y=Date.now()+n.P,Cf(n,n.P)}function Cf(n,e){if(n.B!=null)throw Error("WatchDog timer not null");n.B=ls(Ye(n.lb,n),e)}function Fr(n){n.B&&(Z.clearTimeout(n.B),n.B=null)}V.lb=function(){this.B=null;const n=Date.now();0<=n-this.Y?(vv(this.j,this.A),this.L!=2&&(Hi(),et(17)),pn(this),this.o=2,Ni(this)):Cf(this,this.Y-n)};function Ni(n){n.l.H==0||n.J||Qf(n.l,n)}function pn(n){Fr(n);var e=n.M;e&&typeof e.sa=="function"&&e.sa(),n.M=null,ja(n.V),gf(n.U),n.g&&(e=n.g,n.g=null,e.abort(),e.sa())}function Go(n,e){try{var t=n.l;if(t.H!=0&&(t.g==n||Qo(t.i,n))){if(!n.K&&Qo(t.i,n)&&t.H==3){try{var i=t.Ja.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0){e:if(!t.u){if(t.g)if(t.g.G+3e3<n.G)cr(t),Br(t);else break e;$a(t),et(18)}}else t.Fa=s[1],0<t.Fa-t.V&&37500>s[2]&&t.G&&t.A==0&&!t.v&&(t.v=ls(Ye(t.ib,t),6e3));if(1>=Of(t.i)&&t.oa){try{t.oa()}catch{}t.oa=void 0}}else gn(t,11)}else if((n.K||t.g==n)&&cr(t),!zi(e))for(s=t.Ja.g.parse(e),e=0;e<s.length;e++){let u=s[e];if(t.V=u[0],u=u[1],t.H==2)if(u[0]=="c"){t.K=u[1],t.pa=u[2];const c=u[3];c!=null&&(t.ra=c,t.l.info("VER="+t.ra));const h=u[4];h!=null&&(t.Ga=h,t.l.info("SVER="+t.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(i=1.5*d,t.L=i,t.l.info("backChannelRequestTimeoutMs_="+i)),i=t;const f=n.g;if(f){const p=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var r=i.i;r.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(xa(r,r.h),r.h=null))}if(i.F){const v=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(i.Da=v,Ee(i.I,i.F,v))}}t.H=3,t.h&&t.h.Ba(),t.ca&&(t.S=Date.now()-n.G,t.l.info("Handshake RTT: "+t.S+"ms")),i=t;var o=n;if(i.wa=Wf(i,i.J?i.pa:null,i.Y),o.K){Pf(i.i,o);var l=o,a=i.L;a&&l.setTimeout(a),l.B&&(Fr(l),hs(l)),i.g=o}else $f(i);0<t.j.length&&qr(t)}else u[0]!="stop"&&u[0]!="close"||gn(t,7);else t.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?gn(t,7):Ha(t):u[0]!="noop"&&t.h&&t.h.Aa(u),t.A=0)}}Hi(4)}catch{}}function Iv(n){if(n.Z&&typeof n.Z=="function")return n.Z();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(Nr(n)){for(var e=[],t=n.length,i=0;i<t;i++)e.push(n[i]);return e}e=[],t=0;for(i in n)e[t++]=n[i];return e}function Tv(n){if(n.ta&&typeof n.ta=="function")return n.ta();if(!n.Z||typeof n.Z!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(Nr(n)||typeof n=="string"){var e=[];n=n.length;for(var t=0;t<n;t++)e.push(t);return e}e=[],t=0;for(const i in n)e[t++]=i;return e}}}function Mf(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(Nr(n)||typeof n=="string")Array.prototype.forEach.call(n,e,void 0);else for(var t=Tv(n),i=Iv(n),s=i.length,r=0;r<s;r++)e.call(void 0,i[r],t&&t[r],n)}var kf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ev(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var i=n[t].indexOf("="),s=null;if(0<=i){var r=n[t].substring(0,i);s=n[t].substring(i+1)}else r=n[t];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function wn(n){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof wn){this.h=n.h,lr(this,n.j),this.s=n.s,this.g=n.g,ur(this,n.m),this.l=n.l;var e=n.i,t=new $i;t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),Uu(this,t),this.o=n.o}else n&&(e=String(n).match(kf))?(this.h=!1,lr(this,e[1]||"",!0),this.s=Ei(e[2]||""),this.g=Ei(e[3]||"",!0),ur(this,e[4]),this.l=Ei(e[5]||"",!0),Uu(this,e[6]||"",!0),this.o=Ei(e[7]||"")):(this.h=!1,this.i=new $i(null,this.h))}wn.prototype.toString=function(){var n=[],e=this.j;e&&n.push(Ci(e,Fu,!0),":");var t=this.g;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(Ci(e,Fu,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.g&&t.charAt(0)!="/"&&n.push("/"),n.push(Ci(t,t.charAt(0)=="/"?kv:Mv,!0))),(t=this.i.toString())&&n.push("?",t),(t=this.o)&&n.push("#",Ci(t,Nv)),n.join("")};function jt(n){return new wn(n)}function lr(n,e,t){n.j=t?Ei(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function ur(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function Uu(n,e,t){e instanceof $i?(n.i=e,Av(n.i,n.h)):(t||(e=Ci(e,Sv)),n.i=new $i(e,n.h))}function Ee(n,e,t){n.i.set(e,t)}function zr(n){return Ee(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function Ei(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function Ci(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,Cv),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function Cv(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var Fu=/[#\/\?@]/g,Mv=/[#\?:]/g,kv=/[#\?]/g,Sv=/[#\?@]/g,Nv=/#/g;function $i(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function un(n){n.g||(n.g=new Map,n.h=0,n.i&&Ev(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}V=$i.prototype;V.add=function(n,e){un(this),this.i=null,n=ci(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function Sf(n,e){un(n),e=ci(n,e),n.g.has(e)&&(n.i=null,n.h-=n.g.get(e).length,n.g.delete(e))}function Nf(n,e){return un(n),e=ci(n,e),n.g.has(e)}V.forEach=function(n,e){un(this),this.g.forEach(function(t,i){t.forEach(function(s){n.call(e,s,i,this)},this)},this)};V.ta=function(){un(this);const n=Array.from(this.g.values()),e=Array.from(this.g.keys()),t=[];for(let i=0;i<e.length;i++){const s=n[i];for(let r=0;r<s.length;r++)t.push(e[i])}return t};V.Z=function(n){un(this);let e=[];if(typeof n=="string")Nf(this,n)&&(e=e.concat(this.g.get(ci(this,n))));else{n=Array.from(this.g.values());for(let t=0;t<n.length;t++)e=e.concat(n[t])}return e};V.set=function(n,e){return un(this),this.i=null,n=ci(this,n),Nf(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};V.get=function(n,e){return n?(n=this.Z(n),0<n.length?String(n[0]):e):e};function Af(n,e,t){Sf(n,e),0<t.length&&(n.i=null,n.g.set(ci(n,e),ka(t)),n.h+=t.length)}V.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],e=Array.from(this.g.keys());for(var t=0;t<e.length;t++){var i=e[t];const r=encodeURIComponent(String(i)),o=this.Z(i);for(i=0;i<o.length;i++){var s=r;o[i]!==""&&(s+="="+encodeURIComponent(String(o[i]))),n.push(s)}}return this.i=n.join("&")};function ci(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function Av(n,e){e&&!n.j&&(un(n),n.i=null,n.g.forEach(function(t,i){var s=i.toLowerCase();i!=s&&(Sf(this,i),Af(this,s,t))},n)),n.j=e}var Dv=class{constructor(n,e){this.g=n,this.map=e}};function Df(n){this.l=n||Lv,Z.PerformanceNavigationTiming?(n=Z.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(Z.g&&Z.g.Ka&&Z.g.Ka()&&Z.g.Ka().ec),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Lv=10;function Lf(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function Of(n){return n.h?1:n.g?n.g.size:0}function Qo(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function xa(n,e){n.g?n.g.add(e):n.h=e}function Pf(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}Df.prototype.cancel=function(){if(this.i=Rf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function Rf(n){if(n.h!=null)return n.i.concat(n.h.F);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.F);return e}return ka(n.i)}var Ov=class{stringify(n){return Z.JSON.stringify(n,void 0)}parse(n){return Z.JSON.parse(n,void 0)}};function Pv(){this.g=new Ov}function Rv(n,e,t){const i=t||"";try{Mf(n,function(s,r){let o=s;os(s)&&(o=Pa(s)),e.push(i+r+"="+encodeURIComponent(o))})}catch(s){throw e.push(i+"type="+encodeURIComponent("_badmap")),s}}function jv(n,e){const t=new Pr;if(Z.Image){const i=new Image;i.onload=Ls(Ps,t,i,"TestLoadImage: loaded",!0,e),i.onerror=Ls(Ps,t,i,"TestLoadImage: error",!1,e),i.onabort=Ls(Ps,t,i,"TestLoadImage: abort",!1,e),i.ontimeout=Ls(Ps,t,i,"TestLoadImage: timeout",!1,e),Z.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=n}else e(!1)}function Ps(n,e,t,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch{}}function fs(n){this.l=n.fc||null,this.j=n.ob||!1}ze(fs,Fa);fs.prototype.g=function(){return new Vr(this.l,this.j)};fs.prototype.i=function(n){return function(){return n}}({});function Vr(n,e){Fe.call(this),this.F=n,this.u=e,this.m=void 0,this.readyState=Ba,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ze(Vr,Fe);var Ba=0;V=Vr.prototype;V.open=function(n,e){if(this.readyState!=Ba)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,Gi(this)};V.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.F||Z).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};V.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ds(this)),this.readyState=Ba};V.$a=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,Gi(this)),this.g&&(this.readyState=3,Gi(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof Z.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;jf(this)}else n.text().then(this.Za.bind(this),this.ka.bind(this))};function jf(n){n.j.read().then(n.Xa.bind(n)).catch(n.ka.bind(n))}V.Xa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?ds(this):Gi(this),this.readyState==3&&jf(this)}};V.Za=function(n){this.g&&(this.response=this.responseText=n,ds(this))};V.Ya=function(n){this.g&&(this.response=n,ds(this))};V.ka=function(){this.g&&ds(this)};function ds(n){n.readyState=4,n.l=null,n.j=null,n.A=null,Gi(n)}V.setRequestHeader=function(n,e){this.v.append(n,e)};V.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};V.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function Gi(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(Vr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var Uv=Z.JSON.parse;function Ne(n){Fe.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Uf,this.L=this.M=!1}ze(Ne,Fe);var Uf="",Fv=/^https?$/i,zv=["POST","PUT"];V=Ne.prototype;V.Oa=function(n){this.M=n};V.ha=function(n,e,t,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+n);e=e?e.toUpperCase():"GET",this.I=n,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():qo.g(),this.C=this.u?ju(this.u):ju(qo),this.g.onreadystatechange=Ye(this.La,this);try{this.G=!0,this.g.open(e,String(n),!0),this.G=!1}catch(r){zu(this,r);return}if(n=t||"",t=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)t.set(s,i[s]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const r of i.keys())t.set(r,i.get(r));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(t.keys()).find(r=>r.toLowerCase()=="content-type"),s=Z.FormData&&n instanceof Z.FormData,!(0<=Zh(zv,e))||i||s||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of t)this.g.setRequestHeader(r,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Vf(this),0<this.B&&((this.L=Vv(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ye(this.ua,this)):this.A=Ua(this.ua,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(r){zu(this,r)}};function Vv(n){return ti&&typeof n.timeout=="number"&&n.ontimeout!==void 0}V.ua=function(){typeof Ma<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Be(this,"timeout"),this.abort(8))};function zu(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,Ff(n),xr(n)}function Ff(n){n.F||(n.F=!0,Be(n,"complete"),Be(n,"error"))}V.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,Be(this,"complete"),Be(this,"abort"),xr(this))};V.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),xr(this,!0)),Ne.$.N.call(this)};V.La=function(){this.s||(this.G||this.v||this.l?zf(this):this.kb())};V.kb=function(){zf(this)};function zf(n){if(n.h&&typeof Ma<"u"&&(!n.C[1]||Et(n)!=4||n.da()!=2)){if(n.v&&Et(n)==4)Ua(n.La,0,n);else if(Be(n,"readystatechange"),Et(n)==4){n.h=!1;try{const o=n.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var i;if(i=o===0){var s=String(n.I).match(kf)[1]||null;!s&&Z.self&&Z.self.location&&(s=Z.self.location.protocol.slice(0,-1)),i=!Fv.test(s?s.toLowerCase():"")}t=i}if(t)Be(n,"complete"),Be(n,"success");else{n.m=6;try{var r=2<Et(n)?n.g.statusText:""}catch{r=""}n.j=r+" ["+n.da()+"]",Ff(n)}}finally{xr(n)}}}}function xr(n,e){if(n.g){Vf(n);const t=n.g,i=n.C[0]?()=>{}:null;n.g=null,n.C=null,e||Be(n,"ready");try{t.onreadystatechange=i}catch{}}}function Vf(n){n.g&&n.L&&(n.g.ontimeout=null),n.A&&(Z.clearTimeout(n.A),n.A=null)}V.isActive=function(){return!!this.g};function Et(n){return n.g?n.g.readyState:0}V.da=function(){try{return 2<Et(this)?this.g.status:-1}catch{return-1}};V.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};V.Wa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),Uv(e)}};function Vu(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.K){case Uf:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function xv(n){const e={};n=(n.g&&2<=Et(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let i=0;i<n.length;i++){if(zi(n[i]))continue;var t=fv(n[i]);const s=t[0];if(t=t[1],typeof t!="string")continue;t=t.trim();const r=e[s]||[];e[s]=r,r.push(t)}rv(e,function(i){return i.join(", ")})}V.Ia=function(){return this.m};V.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function xf(n){let e="";return Na(n,function(t,i){e+=i,e+=":",e+=t,e+=`\r
`}),e}function qa(n,e,t){e:{for(i in t){var i=!1;break e}i=!0}i||(t=xf(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):Ee(n,e,t))}function wi(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function Bf(n){this.Ga=0,this.j=[],this.l=new Pr,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=wi("failFast",!1,n),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=wi("baseRetryDelayMs",5e3,n),this.hb=wi("retryDelaySeedMs",1e4,n),this.eb=wi("forwardChannelMaxRetries",2,n),this.xa=wi("forwardChannelRequestTimeoutMs",2e4,n),this.va=n&&n.xmlHttpFactory||void 0,this.Ha=n&&n.dc||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.i=new Df(n&&n.concurrentRequestLimit),this.Ja=new Pv,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=n&&n.bc||!1,n&&n.Ea&&this.l.Ea(),n&&n.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&n&&n.detectBufferingProxy||!1,this.qa=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.qa=n.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}V=Bf.prototype;V.ra=8;V.H=1;function Ha(n){if(qf(n),n.H==3){var e=n.W++,t=jt(n.I);if(Ee(t,"SID",n.K),Ee(t,"RID",e),Ee(t,"TYPE","terminate"),ps(n,t),e=new cs(n,n.l,e),e.L=2,e.v=zr(jt(t)),t=!1,Z.navigator&&Z.navigator.sendBeacon)try{t=Z.navigator.sendBeacon(e.v.toString(),"")}catch{}!t&&Z.Image&&(new Image().src=e.v,t=!0),t||(e.g=Jf(e.l,null),e.g.ha(e.v)),e.G=Date.now(),hs(e)}Yf(n)}function Br(n){n.g&&(Ga(n),n.g.cancel(),n.g=null)}function qf(n){Br(n),n.u&&(Z.clearTimeout(n.u),n.u=null),cr(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&Z.clearTimeout(n.m),n.m=null)}function qr(n){if(!Lf(n.i)&&!n.m){n.m=!0;var e=n.Na;xi||ff(),Bi||(xi(),Bi=!0),Ra.add(e,n),n.C=0}}function Bv(n,e){return Of(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.j=e.F.concat(n.j),!0):n.H==1||n.H==2||n.C>=(n.cb?0:n.eb)?!1:(n.m=ls(Ye(n.Na,n,e),Kf(n,n.C)),n.C++,!0)}V.Na=function(n){if(this.m)if(this.m=null,this.H==1){if(!n){this.W=Math.floor(1e5*Math.random()),n=this.W++;const s=new cs(this,this.l,n);let r=this.s;if(this.U&&(r?(r=sf(r),rf(r,this.U)):r=this.U),this.o!==null||this.O||(s.I=r,r=null),this.P)e:{for(var e=0,t=0;t<this.j.length;t++){t:{var i=this.j[t];if("__data__"in i.map&&(i=i.map.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=t;break e}if(e===4096||t===this.j.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=Hf(this,s,e),t=jt(this.I),Ee(t,"RID",n),Ee(t,"CVER",22),this.F&&Ee(t,"X-HTTP-Session-Id",this.F),ps(this,t),r&&(this.O?e="headers="+encodeURIComponent(String(xf(r)))+"&"+e:this.o&&qa(t,this.o,r)),xa(this.i,s),this.bb&&Ee(t,"TYPE","init"),this.P?(Ee(t,"$req",e),Ee(t,"SID","null"),s.aa=!0,$o(s,t,null)):$o(s,t,e),this.H=2}}else this.H==3&&(n?xu(this,n):this.j.length==0||Lf(this.i)||xu(this))};function xu(n,e){var t;e?t=e.m:t=n.W++;const i=jt(n.I);Ee(i,"SID",n.K),Ee(i,"RID",t),Ee(i,"AID",n.V),ps(n,i),n.o&&n.s&&qa(i,n.o,n.s),t=new cs(n,n.l,t,n.C+1),n.o===null&&(t.I=n.s),e&&(n.j=e.F.concat(n.j)),e=Hf(n,t,1e3),t.setTimeout(Math.round(.5*n.xa)+Math.round(.5*n.xa*Math.random())),xa(n.i,t),$o(t,i,e)}function ps(n,e){n.na&&Na(n.na,function(t,i){Ee(e,i,t)}),n.h&&Mf({},function(t,i){Ee(e,i,t)})}function Hf(n,e,t){t=Math.min(n.j.length,t);var i=n.h?Ye(n.h.Va,n.h,n):null;e:{var s=n.j;let r=-1;for(;;){const o=["count="+t];r==-1?0<t?(r=s[0].g,o.push("ofs="+r)):r=0:o.push("ofs="+r);let l=!0;for(let a=0;a<t;a++){let u=s[a].g;const c=s[a].map;if(u-=r,0>u)r=Math.max(0,s[a].g-100),l=!1;else try{Rv(c,o,"req"+u+"_")}catch{i&&i(c)}}if(l){i=o.join("&");break e}}}return n=n.j.splice(0,t),e.F=n,i}function $f(n){if(!n.g&&!n.u){n.ba=1;var e=n.Ma;xi||ff(),Bi||(xi(),Bi=!0),Ra.add(e,n),n.A=0}}function $a(n){return n.g||n.u||3<=n.A?!1:(n.ba++,n.u=ls(Ye(n.Ma,n),Kf(n,n.A)),n.A++,!0)}V.Ma=function(){if(this.u=null,Gf(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var n=2*this.S;this.l.info("BP detection timer enabled: "+n),this.B=ls(Ye(this.jb,this),n)}};V.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,et(10),Br(this),Gf(this))};function Ga(n){n.B!=null&&(Z.clearTimeout(n.B),n.B=null)}function Gf(n){n.g=new cs(n,n.l,"rpc",n.ba),n.o===null&&(n.g.I=n.s),n.g.O=0;var e=jt(n.wa);Ee(e,"RID","rpc"),Ee(e,"SID",n.K),Ee(e,"AID",n.V),Ee(e,"CI",n.G?"0":"1"),!n.G&&n.qa&&Ee(e,"TO",n.qa),Ee(e,"TYPE","xmlhttp"),ps(n,e),n.o&&n.s&&qa(e,n.o,n.s),n.L&&n.g.setTimeout(n.L);var t=n.g;n=n.pa,t.L=1,t.v=zr(jt(e)),t.s=null,t.S=!0,If(t,n)}V.ib=function(){this.v!=null&&(this.v=null,Br(this),$a(this),et(19))};function cr(n){n.v!=null&&(Z.clearTimeout(n.v),n.v=null)}function Qf(n,e){var t=null;if(n.g==e){cr(n),Ga(n),n.g=null;var i=2}else if(Qo(n.i,e))t=e.F,Pf(n.i,e),i=1;else return;if(n.H!=0){if(e.i)if(i==1){t=e.s?e.s.length:0,e=Date.now()-e.G;var s=n.C;i=Rr(),Be(i,new vf(i,t)),qr(n)}else $f(n);else if(s=e.o,s==3||s==0&&0<e.ca||!(i==1&&Bv(n,e)||i==2&&$a(n)))switch(t&&0<t.length&&(e=n.i,e.i=e.i.concat(t)),s){case 1:gn(n,5);break;case 4:gn(n,10);break;case 3:gn(n,6);break;default:gn(n,2)}}}function Kf(n,e){let t=n.ab+Math.floor(Math.random()*n.hb);return n.isActive()||(t*=2),t*e}function gn(n,e){if(n.l.info("Error code "+e),e==2){var t=null;n.h&&(t=null);var i=Ye(n.pb,n);t||(t=new wn("//www.google.com/images/cleardot.gif"),Z.location&&Z.location.protocol=="http"||lr(t,"https"),zr(t)),jv(t.toString(),i)}else et(2);n.H=0,n.h&&n.h.za(e),Yf(n),qf(n)}V.pb=function(n){n?(this.l.info("Successfully pinged google.com"),et(2)):(this.l.info("Failed to ping google.com"),et(1))};function Yf(n){if(n.H=0,n.ma=[],n.h){const e=Rf(n.i);(e.length!=0||n.j.length!=0)&&(Du(n.ma,e),Du(n.ma,n.j),n.i.i.length=0,ka(n.j),n.j.length=0),n.h.ya()}}function Wf(n,e,t){var i=t instanceof wn?jt(t):new wn(t);if(i.g!="")e&&(i.g=e+"."+i.g),ur(i,i.m);else{var s=Z.location;i=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var r=new wn(null);i&&lr(r,i),e&&(r.g=e),s&&ur(r,s),t&&(r.l=t),i=r}return t=n.F,e=n.Da,t&&e&&Ee(i,t,e),Ee(i,"VER",n.ra),ps(n,i),i}function Jf(n,e,t){if(e&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&n.Ha&&!n.va?new Ne(new fs({ob:!0})):new Ne(n.va),e.Oa(n.J),e}V.isActive=function(){return!!this.h&&this.h.isActive(this)};function Xf(){}V=Xf.prototype;V.Ba=function(){};V.Aa=function(){};V.za=function(){};V.ya=function(){};V.isActive=function(){return!0};V.Va=function(){};function hr(){if(ti&&!(10<=Number(tv)))throw Error("Environmental error: no available transport.")}hr.prototype.g=function(n,e){return new ut(n,e)};function ut(n,e){Fe.call(this),this.g=new Bf(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(n?n["X-WebChannel-Client-Profile"]=e.Ca:n={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=n,(n=e&&e.cc)&&!zi(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!zi(e)&&(this.g.F=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new hi(this)}ze(ut,Fe);ut.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var n=this.g,e=this.l,t=this.h||void 0;et(0),n.Y=e,n.na=t||{},n.G=n.aa,n.I=Wf(n,null,n.Y),qr(n)};ut.prototype.close=function(){Ha(this.g)};ut.prototype.u=function(n){var e=this.g;if(typeof n=="string"){var t={};t.__data__=n,n=t}else this.v&&(t={},t.__data__=Pa(n),n=t);e.j.push(new Dv(e.fb++,n)),e.H==3&&qr(e)};ut.prototype.N=function(){this.g.h=null,delete this.j,Ha(this.g),delete this.g,ut.$.N.call(this)};function Zf(n){za.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}ze(Zf,za);function ed(){Va.call(this),this.status=1}ze(ed,Va);function hi(n){this.g=n}ze(hi,Xf);hi.prototype.Ba=function(){Be(this.g,"a")};hi.prototype.Aa=function(n){Be(this.g,new Zf(n))};hi.prototype.za=function(n){Be(this.g,new ed)};hi.prototype.ya=function(){Be(this.g,"b")};function qv(){this.blockSize=-1}function _t(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}ze(_t,qv);_t.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function wo(n,e,t){t||(t=0);var i=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)i[s]=e.charCodeAt(t++)|e.charCodeAt(t++)<<8|e.charCodeAt(t++)<<16|e.charCodeAt(t++)<<24;else for(s=0;16>s;++s)i[s]=e[t++]|e[t++]<<8|e[t++]<<16|e[t++]<<24;e=n.g[0],t=n.g[1],s=n.g[2];var r=n.g[3],o=e+(r^t&(s^r))+i[0]+3614090360&4294967295;e=t+(o<<7&4294967295|o>>>25),o=r+(s^e&(t^s))+i[1]+3905402710&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(t^r&(e^t))+i[2]+606105819&4294967295,s=r+(o<<17&4294967295|o>>>15),o=t+(e^s&(r^e))+i[3]+3250441966&4294967295,t=s+(o<<22&4294967295|o>>>10),o=e+(r^t&(s^r))+i[4]+4118548399&4294967295,e=t+(o<<7&4294967295|o>>>25),o=r+(s^e&(t^s))+i[5]+1200080426&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(t^r&(e^t))+i[6]+2821735955&4294967295,s=r+(o<<17&4294967295|o>>>15),o=t+(e^s&(r^e))+i[7]+4249261313&4294967295,t=s+(o<<22&4294967295|o>>>10),o=e+(r^t&(s^r))+i[8]+1770035416&4294967295,e=t+(o<<7&4294967295|o>>>25),o=r+(s^e&(t^s))+i[9]+2336552879&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(t^r&(e^t))+i[10]+4294925233&4294967295,s=r+(o<<17&4294967295|o>>>15),o=t+(e^s&(r^e))+i[11]+2304563134&4294967295,t=s+(o<<22&4294967295|o>>>10),o=e+(r^t&(s^r))+i[12]+1804603682&4294967295,e=t+(o<<7&4294967295|o>>>25),o=r+(s^e&(t^s))+i[13]+4254626195&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(t^r&(e^t))+i[14]+2792965006&4294967295,s=r+(o<<17&4294967295|o>>>15),o=t+(e^s&(r^e))+i[15]+1236535329&4294967295,t=s+(o<<22&4294967295|o>>>10),o=e+(s^r&(t^s))+i[1]+4129170786&4294967295,e=t+(o<<5&4294967295|o>>>27),o=r+(t^s&(e^t))+i[6]+3225465664&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^t&(r^e))+i[11]+643717713&4294967295,s=r+(o<<14&4294967295|o>>>18),o=t+(r^e&(s^r))+i[0]+3921069994&4294967295,t=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(t^s))+i[5]+3593408605&4294967295,e=t+(o<<5&4294967295|o>>>27),o=r+(t^s&(e^t))+i[10]+38016083&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^t&(r^e))+i[15]+3634488961&4294967295,s=r+(o<<14&4294967295|o>>>18),o=t+(r^e&(s^r))+i[4]+3889429448&4294967295,t=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(t^s))+i[9]+568446438&4294967295,e=t+(o<<5&4294967295|o>>>27),o=r+(t^s&(e^t))+i[14]+3275163606&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^t&(r^e))+i[3]+4107603335&4294967295,s=r+(o<<14&4294967295|o>>>18),o=t+(r^e&(s^r))+i[8]+1163531501&4294967295,t=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(t^s))+i[13]+2850285829&4294967295,e=t+(o<<5&4294967295|o>>>27),o=r+(t^s&(e^t))+i[2]+4243563512&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^t&(r^e))+i[7]+1735328473&4294967295,s=r+(o<<14&4294967295|o>>>18),o=t+(r^e&(s^r))+i[12]+2368359562&4294967295,t=s+(o<<20&4294967295|o>>>12),o=e+(t^s^r)+i[5]+4294588738&4294967295,e=t+(o<<4&4294967295|o>>>28),o=r+(e^t^s)+i[8]+2272392833&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^t)+i[11]+1839030562&4294967295,s=r+(o<<16&4294967295|o>>>16),o=t+(s^r^e)+i[14]+4259657740&4294967295,t=s+(o<<23&4294967295|o>>>9),o=e+(t^s^r)+i[1]+2763975236&4294967295,e=t+(o<<4&4294967295|o>>>28),o=r+(e^t^s)+i[4]+1272893353&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^t)+i[7]+4139469664&4294967295,s=r+(o<<16&4294967295|o>>>16),o=t+(s^r^e)+i[10]+3200236656&4294967295,t=s+(o<<23&4294967295|o>>>9),o=e+(t^s^r)+i[13]+681279174&4294967295,e=t+(o<<4&4294967295|o>>>28),o=r+(e^t^s)+i[0]+3936430074&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^t)+i[3]+3572445317&4294967295,s=r+(o<<16&4294967295|o>>>16),o=t+(s^r^e)+i[6]+76029189&4294967295,t=s+(o<<23&4294967295|o>>>9),o=e+(t^s^r)+i[9]+3654602809&4294967295,e=t+(o<<4&4294967295|o>>>28),o=r+(e^t^s)+i[12]+3873151461&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^t)+i[15]+530742520&4294967295,s=r+(o<<16&4294967295|o>>>16),o=t+(s^r^e)+i[2]+3299628645&4294967295,t=s+(o<<23&4294967295|o>>>9),o=e+(s^(t|~r))+i[0]+4096336452&4294967295,e=t+(o<<6&4294967295|o>>>26),o=r+(t^(e|~s))+i[7]+1126891415&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~t))+i[14]+2878612391&4294967295,s=r+(o<<15&4294967295|o>>>17),o=t+(r^(s|~e))+i[5]+4237533241&4294967295,t=s+(o<<21&4294967295|o>>>11),o=e+(s^(t|~r))+i[12]+1700485571&4294967295,e=t+(o<<6&4294967295|o>>>26),o=r+(t^(e|~s))+i[3]+2399980690&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~t))+i[10]+4293915773&4294967295,s=r+(o<<15&4294967295|o>>>17),o=t+(r^(s|~e))+i[1]+2240044497&4294967295,t=s+(o<<21&4294967295|o>>>11),o=e+(s^(t|~r))+i[8]+1873313359&4294967295,e=t+(o<<6&4294967295|o>>>26),o=r+(t^(e|~s))+i[15]+4264355552&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~t))+i[6]+2734768916&4294967295,s=r+(o<<15&4294967295|o>>>17),o=t+(r^(s|~e))+i[13]+1309151649&4294967295,t=s+(o<<21&4294967295|o>>>11),o=e+(s^(t|~r))+i[4]+4149444226&4294967295,e=t+(o<<6&4294967295|o>>>26),o=r+(t^(e|~s))+i[11]+3174756917&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~t))+i[2]+718787259&4294967295,s=r+(o<<15&4294967295|o>>>17),o=t+(r^(s|~e))+i[9]+3951481745&4294967295,n.g[0]=n.g[0]+e&4294967295,n.g[1]=n.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,n.g[2]=n.g[2]+s&4294967295,n.g[3]=n.g[3]+r&4294967295}_t.prototype.j=function(n,e){e===void 0&&(e=n.length);for(var t=e-this.blockSize,i=this.m,s=this.h,r=0;r<e;){if(s==0)for(;r<=t;)wo(this,n,r),r+=this.blockSize;if(typeof n=="string"){for(;r<e;)if(i[s++]=n.charCodeAt(r++),s==this.blockSize){wo(this,i),s=0;break}}else for(;r<e;)if(i[s++]=n[r++],s==this.blockSize){wo(this,i),s=0;break}}this.h=s,this.i+=e};_t.prototype.l=function(){var n=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);n[0]=128;for(var e=1;e<n.length-8;++e)n[e]=0;var t=8*this.i;for(e=n.length-8;e<n.length;++e)n[e]=t&255,t/=256;for(this.j(n),n=Array(16),e=t=0;4>e;++e)for(var i=0;32>i;i+=8)n[t++]=this.g[e]>>>i&255;return n};function ve(n,e){this.h=e;for(var t=[],i=!0,s=n.length-1;0<=s;s--){var r=n[s]|0;i&&r==e||(t[s]=r,i=!1)}this.g=t}var Hv={};function Qa(n){return-128<=n&&128>n?X0(n,function(e){return new ve([e|0],0>e?-1:0)}):new ve([n|0],0>n?-1:0)}function Ct(n){if(isNaN(n)||!isFinite(n))return Gn;if(0>n)return xe(Ct(-n));for(var e=[],t=1,i=0;n>=t;i++)e[i]=n/t|0,t*=Ko;return new ve(e,0)}function td(n,e){if(n.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(n.charAt(0)=="-")return xe(td(n.substring(1),e));if(0<=n.indexOf("-"))throw Error('number format error: interior "-" character');for(var t=Ct(Math.pow(e,8)),i=Gn,s=0;s<n.length;s+=8){var r=Math.min(8,n.length-s),o=parseInt(n.substring(s,s+r),e);8>r?(r=Ct(Math.pow(e,r)),i=i.R(r).add(Ct(o))):(i=i.R(t),i=i.add(Ct(o)))}return i}var Ko=4294967296,Gn=Qa(0),Yo=Qa(1),Bu=Qa(16777216);V=ve.prototype;V.ea=function(){if(ht(this))return-xe(this).ea();for(var n=0,e=1,t=0;t<this.g.length;t++){var i=this.D(t);n+=(0<=i?i:Ko+i)*e,e*=Ko}return n};V.toString=function(n){if(n=n||10,2>n||36<n)throw Error("radix out of range: "+n);if(Ot(this))return"0";if(ht(this))return"-"+xe(this).toString(n);for(var e=Ct(Math.pow(n,6)),t=this,i="";;){var s=dr(t,e).g;t=fr(t,s.R(e));var r=((0<t.g.length?t.g[0]:t.h)>>>0).toString(n);if(t=s,Ot(t))return r+i;for(;6>r.length;)r="0"+r;i=r+i}};V.D=function(n){return 0>n?0:n<this.g.length?this.g[n]:this.h};function Ot(n){if(n.h!=0)return!1;for(var e=0;e<n.g.length;e++)if(n.g[e]!=0)return!1;return!0}function ht(n){return n.h==-1}V.X=function(n){return n=fr(this,n),ht(n)?-1:Ot(n)?0:1};function xe(n){for(var e=n.g.length,t=[],i=0;i<e;i++)t[i]=~n.g[i];return new ve(t,~n.h).add(Yo)}V.abs=function(){return ht(this)?xe(this):this};V.add=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],i=0,s=0;s<=e;s++){var r=i+(this.D(s)&65535)+(n.D(s)&65535),o=(r>>>16)+(this.D(s)>>>16)+(n.D(s)>>>16);i=o>>>16,r&=65535,o&=65535,t[s]=o<<16|r}return new ve(t,t[t.length-1]&-2147483648?-1:0)};function fr(n,e){return n.add(xe(e))}V.R=function(n){if(Ot(this)||Ot(n))return Gn;if(ht(this))return ht(n)?xe(this).R(xe(n)):xe(xe(this).R(n));if(ht(n))return xe(this.R(xe(n)));if(0>this.X(Bu)&&0>n.X(Bu))return Ct(this.ea()*n.ea());for(var e=this.g.length+n.g.length,t=[],i=0;i<2*e;i++)t[i]=0;for(i=0;i<this.g.length;i++)for(var s=0;s<n.g.length;s++){var r=this.D(i)>>>16,o=this.D(i)&65535,l=n.D(s)>>>16,a=n.D(s)&65535;t[2*i+2*s]+=o*a,Rs(t,2*i+2*s),t[2*i+2*s+1]+=r*a,Rs(t,2*i+2*s+1),t[2*i+2*s+1]+=o*l,Rs(t,2*i+2*s+1),t[2*i+2*s+2]+=r*l,Rs(t,2*i+2*s+2)}for(i=0;i<e;i++)t[i]=t[2*i+1]<<16|t[2*i];for(i=e;i<2*e;i++)t[i]=0;return new ve(t,0)};function Rs(n,e){for(;(n[e]&65535)!=n[e];)n[e+1]+=n[e]>>>16,n[e]&=65535,e++}function bi(n,e){this.g=n,this.h=e}function dr(n,e){if(Ot(e))throw Error("division by zero");if(Ot(n))return new bi(Gn,Gn);if(ht(n))return e=dr(xe(n),e),new bi(xe(e.g),xe(e.h));if(ht(e))return e=dr(n,xe(e)),new bi(xe(e.g),e.h);if(30<n.g.length){if(ht(n)||ht(e))throw Error("slowDivide_ only works with positive integers.");for(var t=Yo,i=e;0>=i.X(n);)t=qu(t),i=qu(i);var s=zn(t,1),r=zn(i,1);for(i=zn(i,2),t=zn(t,2);!Ot(i);){var o=r.add(i);0>=o.X(n)&&(s=s.add(t),r=o),i=zn(i,1),t=zn(t,1)}return e=fr(n,s.R(e)),new bi(s,e)}for(s=Gn;0<=n.X(e);){for(t=Math.max(1,Math.floor(n.ea()/e.ea())),i=Math.ceil(Math.log(t)/Math.LN2),i=48>=i?1:Math.pow(2,i-48),r=Ct(t),o=r.R(e);ht(o)||0<o.X(n);)t-=i,r=Ct(t),o=r.R(e);Ot(r)&&(r=Yo),s=s.add(r),n=fr(n,o)}return new bi(s,n)}V.gb=function(n){return dr(this,n).h};V.and=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],i=0;i<e;i++)t[i]=this.D(i)&n.D(i);return new ve(t,this.h&n.h)};V.or=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],i=0;i<e;i++)t[i]=this.D(i)|n.D(i);return new ve(t,this.h|n.h)};V.xor=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],i=0;i<e;i++)t[i]=this.D(i)^n.D(i);return new ve(t,this.h^n.h)};function qu(n){for(var e=n.g.length+1,t=[],i=0;i<e;i++)t[i]=n.D(i)<<1|n.D(i-1)>>>31;return new ve(t,n.h)}function zn(n,e){var t=e>>5;e%=32;for(var i=n.g.length-t,s=[],r=0;r<i;r++)s[r]=0<e?n.D(r+t)>>>e|n.D(r+t+1)<<32-e:n.D(r+t);return new ve(s,n.h)}hr.prototype.createWebChannel=hr.prototype.g;ut.prototype.send=ut.prototype.u;ut.prototype.open=ut.prototype.m;ut.prototype.close=ut.prototype.close;jr.NO_ERROR=0;jr.TIMEOUT=8;jr.HTTP_ERROR=6;_f.COMPLETE="complete";wf.EventType=us;us.OPEN="a";us.CLOSE="b";us.ERROR="c";us.MESSAGE="d";Fe.prototype.listen=Fe.prototype.O;Ne.prototype.listenOnce=Ne.prototype.P;Ne.prototype.getLastError=Ne.prototype.Sa;Ne.prototype.getLastErrorCode=Ne.prototype.Ia;Ne.prototype.getStatus=Ne.prototype.da;Ne.prototype.getResponseJson=Ne.prototype.Wa;Ne.prototype.getResponseText=Ne.prototype.ja;Ne.prototype.send=Ne.prototype.ha;Ne.prototype.setWithCredentials=Ne.prototype.Oa;_t.prototype.digest=_t.prototype.l;_t.prototype.reset=_t.prototype.reset;_t.prototype.update=_t.prototype.j;ve.prototype.add=ve.prototype.add;ve.prototype.multiply=ve.prototype.R;ve.prototype.modulo=ve.prototype.gb;ve.prototype.compare=ve.prototype.X;ve.prototype.toNumber=ve.prototype.ea;ve.prototype.toString=ve.prototype.toString;ve.prototype.getBits=ve.prototype.D;ve.fromNumber=Ct;ve.fromString=td;var $v=function(){return new hr},Gv=function(){return Rr()},bo=jr,Qv=_f,Kv=Dn,Hu={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Yv=fs,js=wf,Wv=Ne,Jv=_t,Qn=ve;const $u="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ge.UNAUTHENTICATED=new Ge(null),Ge.GOOGLE_CREDENTIALS=new Ge("google-credentials-uid"),Ge.FIRST_PARTY=new Ge("first-party-uid"),Ge.MOCK_USER=new Ge("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fi="9.23.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn=new Ta("@firebase/firestore");function Gu(){return Mn.logLevel}function Q(n,...e){if(Mn.logLevel<=de.DEBUG){const t=e.map(Ka);Mn.debug(`Firestore (${fi}): ${n}`,...t)}}function Ut(n,...e){if(Mn.logLevel<=de.ERROR){const t=e.map(Ka);Mn.error(`Firestore (${fi}): ${n}`,...t)}}function ni(n,...e){if(Mn.logLevel<=de.WARN){const t=e.map(Ka);Mn.warn(`Firestore (${fi}): ${n}`,...t)}}function Ka(n){if(typeof n=="string")return n;try{return e=n,JSON.stringify(e)}catch{return n}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(n="Unexpected state"){const e=`FIRESTORE (${fi}) INTERNAL ASSERTION FAILED: `+n;throw Ut(e),new Error(e)}function Me(n,e){n||J()}function ie(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends xt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Xv{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ge.UNAUTHENTICATED))}shutdown(){}}class Zv{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class e_{constructor(e){this.t=e,this.currentUser=Ge.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let i=this.i;const s=a=>this.i!==i?(i=this.i,t(a)):Promise.resolve();let r=new Xt;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Xt,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const a=r;e.enqueueRetryable(async()=>{await a.promise,await s(this.currentUser)})},l=a=>{Q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=a,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(a=>l(a)),setTimeout(()=>{if(!this.auth){const a=this.t.getImmediate({optional:!0});a?l(a):(Q("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Xt)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(i=>this.i!==e?(Q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Me(typeof i.accessToken=="string"),new nd(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Me(e===null||typeof e=="string"),new Ge(e)}}class t_{constructor(e,t,i){this.h=e,this.l=t,this.m=i,this.type="FirstParty",this.user=Ge.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class n_{constructor(e,t,i){this.h=e,this.l=t,this.m=i}getToken(){return Promise.resolve(new t_(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable(()=>t(Ge.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class i_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class s_{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,t){const i=r=>{r.error!=null&&Q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.T;return this.T=r.token,Q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>i(r))};const s=r=>{Q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.I.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.I.getImmediate({optional:!0});r?s(r):Q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Me(typeof t.token=="string"),this.T=t.token,new i_(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r_(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=r_(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<t&&(i+=e.charAt(s[r]%e.length))}return i}}function pe(n,e){return n<e?-1:n>e?1:0}function ii(n,e,t){return n.length===e.length&&n.every((i,s)=>t(i,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new $(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new $(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new $(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Re.fromMillis(Date.now())}static fromDate(e){return Re.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*t));return new Re(t,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?pe(this.nanoseconds,e.nanoseconds):pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.timestamp=e}static fromTimestamp(e){return new te(e)}static min(){return new te(new Re(0,0))}static max(){return new te(new Re(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e,t,i){t===void 0?t=0:t>e.length&&J(),i===void 0?i=e.length-t:i>e.length-t&&J(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return Qi.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Qi?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let s=0;s<i;s++){const r=e.get(s),o=t.get(s);if(r<o)return-1;if(r>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Ce extends Qi{construct(e,t,i){return new Ce(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new $(O.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(s=>s.length>0))}return new Ce(t)}static emptyPath(){return new Ce([])}}const o_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ke extends Qi{construct(e,t,i){return new Ke(e,t,i)}static isValidIdentifier(e){return o_.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ke.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ke(["__name__"])}static fromServerFormat(e){const t=[];let i="",s=0;const r=()=>{if(i.length===0)throw new $(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new $(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const a=e[s+1];if(a!=="\\"&&a!=="."&&a!=="`")throw new $(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=a,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(i+=l,s++):(r(),s++)}if(r(),o)throw new $(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ke(t)}static emptyPath(){return new Ke([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(Ce.fromString(e))}static fromName(e){return new K(Ce.fromString(e).popFirst(5))}static empty(){return new K(Ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ce.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ce.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new Ce(e.slice()))}}function a_(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,s=te.fromTimestamp(i===1e9?new Re(t+1,0):new Re(t,i));return new tn(s,K.empty(),e)}function l_(n){return new tn(n.readTime,n.key,-1)}class tn{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new tn(te.min(),K.empty(),-1)}static max(){return new tn(te.max(),K.empty(),-1)}}function u_(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=K.comparator(n.documentKey,e.documentKey),t!==0?t:pe(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class h_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gs(n){if(n.code!==O.FAILED_PRECONDITION||n.message!==c_)throw n;Q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&J(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new U((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(t,r).next(i,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof U?t:U.resolve(t)}catch(t){return U.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):U.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):U.reject(t)}static resolve(e){return new U((t,i)=>{t(e)})}static reject(e){return new U((t,i)=>{i(e)})}static waitFor(e){return new U((t,i)=>{let s=0,r=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++r,o&&r===s&&t()},a=>i(a))}),o=!0,r===s&&t()})}static or(e){let t=U.resolve(!1);for(const i of e)t=t.next(s=>s?U.resolve(s):i());return t}static forEach(e,t){const i=[];return e.forEach((s,r)=>{i.push(t.call(this,s,r))}),this.waitFor(i)}static mapArray(e,t){return new U((i,s)=>{const r=e.length,o=new Array(r);let l=0;for(let a=0;a<r;a++){const u=a;t(e[u]).next(c=>{o[u]=c,++l,l===r&&i(o)},c=>s(c))}})}static doWhile(e,t){return new U((i,s)=>{const r=()=>{e()===!0?t().next(()=>{r()},s):i()};r()})}}function ms(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ot(i),this.ut=i=>t.writeSequenceNumber(i))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Ya.ct=-1;function Hr(n){return n==null}function pr(n){return n===0&&1/n==-1/0}function f_(n){return typeof n=="number"&&Number.isInteger(n)&&!pr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qu(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function di(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function sd(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e,t){this.comparator=e,this.root=t||Ve.EMPTY}insert(e,t){return new Se(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ve.BLACK,null,null))}remove(e){return new Se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ve.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return t+i.left.size;s<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){const e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Us(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Us(this.root,e,this.comparator,!1)}getReverseIterator(){return new Us(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Us(this.root,e,this.comparator,!0)}}class Us{constructor(e,t,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?i(e.key,t):1,t&&s&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ve{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i!=null?i:Ve.RED,this.left=s!=null?s:Ve.EMPTY,this.right=r!=null?r:Ve.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,s,r){return new Ve(e!=null?e:this.key,t!=null?t:this.value,i!=null?i:this.color,s!=null?s:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ve.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Ve.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw J();const e=this.left.check();if(e!==this.right.check())throw J();return e+(this.isRed()?0:1)}}Ve.EMPTY=null,Ve.RED=!0,Ve.BLACK=!1;Ve.EMPTY=new class{constructor(){this.size=0}get key(){throw J()}get value(){throw J()}get color(){throw J()}get left(){throw J()}get right(){throw J()}copy(n,e,t,i,s){return this}insert(n,e,t){return new Ve(n,e)}remove(n,e){return this}isEmpty(){return!0}inorderTraversal(n){return!1}reverseTraversal(n){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.comparator=e,this.data=new Se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ku(this.data.getIterator())}getIteratorFrom(e){return new Ku(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(i=>{t=t.add(i)}),t}isEqual(e){if(!(e instanceof Je)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Je(this.comparator);return t.data=e,t}}class Ku{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.fields=e,e.sort(Ke.comparator)}static empty(){return new mt([])}unionWith(e){let t=new Je(Ke.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new mt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ii(this.fields,e.fields,(t,i)=>t.isEqual(i))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new rd("Invalid base64 string: "+s):s}}(e);return new Ze(t)}static fromUint8Array(e){const t=function(i){let s="";for(let r=0;r<i.length;++r)s+=String.fromCharCode(i[r]);return s}(e);return new Ze(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let i=0;i<e.length;i++)t[i]=e.charCodeAt(i);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ze.EMPTY_BYTE_STRING=new Ze("");const d_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function nn(n){if(Me(!!n),typeof n=="string"){let e=0;const t=d_.exec(n);if(Me(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:Le(n.seconds),nanos:Le(n.nanos)}}function Le(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function kn(n){return typeof n=="string"?Ze.fromBase64String(n):Ze.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wa(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Ja(n){const e=n.mapValue.fields.__previous_value__;return Wa(e)?Ja(e):e}function Ki(n){const e=nn(n.mapValue.fields.__local_write_time__.timestampValue);return new Re(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_{constructor(e,t,i,s,r,o,l,a,u){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=a,this.useFetchStreams=u}}class Yi{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Yi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Yi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fs={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Sn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Wa(n)?4:g_(n)?9007199254740991:10:J()}function At(n,e){if(n===e)return!0;const t=Sn(n);if(t!==Sn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Ki(n).isEqual(Ki(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const r=nn(i.timestampValue),o=nn(s.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return kn(i.bytesValue).isEqual(kn(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return Le(i.geoPointValue.latitude)===Le(s.geoPointValue.latitude)&&Le(i.geoPointValue.longitude)===Le(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Le(i.integerValue)===Le(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const r=Le(i.doubleValue),o=Le(s.doubleValue);return r===o?pr(r)===pr(o):isNaN(r)&&isNaN(o)}return!1}(n,e);case 9:return ii(n.arrayValue.values||[],e.arrayValue.values||[],At);case 10:return function(i,s){const r=i.mapValue.fields||{},o=s.mapValue.fields||{};if(Qu(r)!==Qu(o))return!1;for(const l in r)if(r.hasOwnProperty(l)&&(o[l]===void 0||!At(r[l],o[l])))return!1;return!0}(n,e);default:return J()}}function Wi(n,e){return(n.values||[]).find(t=>At(t,e))!==void 0}function si(n,e){if(n===e)return 0;const t=Sn(n),i=Sn(e);if(t!==i)return pe(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return pe(n.booleanValue,e.booleanValue);case 2:return function(s,r){const o=Le(s.integerValue||s.doubleValue),l=Le(r.integerValue||r.doubleValue);return o<l?-1:o>l?1:o===l?0:isNaN(o)?isNaN(l)?0:-1:1}(n,e);case 3:return Yu(n.timestampValue,e.timestampValue);case 4:return Yu(Ki(n),Ki(e));case 5:return pe(n.stringValue,e.stringValue);case 6:return function(s,r){const o=kn(s),l=kn(r);return o.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(s,r){const o=s.split("/"),l=r.split("/");for(let a=0;a<o.length&&a<l.length;a++){const u=pe(o[a],l[a]);if(u!==0)return u}return pe(o.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,r){const o=pe(Le(s.latitude),Le(r.latitude));return o!==0?o:pe(Le(s.longitude),Le(r.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(s,r){const o=s.values||[],l=r.values||[];for(let a=0;a<o.length&&a<l.length;++a){const u=si(o[a],l[a]);if(u)return u}return pe(o.length,l.length)}(n.arrayValue,e.arrayValue);case 10:return function(s,r){if(s===Fs.mapValue&&r===Fs.mapValue)return 0;if(s===Fs.mapValue)return 1;if(r===Fs.mapValue)return-1;const o=s.fields||{},l=Object.keys(o),a=r.fields||{},u=Object.keys(a);l.sort(),u.sort();for(let c=0;c<l.length&&c<u.length;++c){const h=pe(l[c],u[c]);if(h!==0)return h;const d=si(o[l[c]],a[u[c]]);if(d!==0)return d}return pe(l.length,u.length)}(n.mapValue,e.mapValue);default:throw J()}}function Yu(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return pe(n,e);const t=nn(n),i=nn(e),s=pe(t.seconds,i.seconds);return s!==0?s:pe(t.nanos,i.nanos)}function ri(n){return Wo(n)}function Wo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(i){const s=nn(i);return`time(${s.seconds},${s.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?kn(n.bytesValue).toBase64():"referenceValue"in n?(t=n.referenceValue,K.fromName(t).toString()):"geoPointValue"in n?`geo(${(e=n.geoPointValue).latitude},${e.longitude})`:"arrayValue"in n?function(i){let s="[",r=!0;for(const o of i.values||[])r?r=!1:s+=",",s+=Wo(o);return s+"]"}(n.arrayValue):"mapValue"in n?function(i){const s=Object.keys(i.fields||{}).sort();let r="{",o=!0;for(const l of s)o?o=!1:r+=",",r+=`${l}:${Wo(i.fields[l])}`;return r+"}"}(n.mapValue):J();var e,t}function Wu(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Jo(n){return!!n&&"integerValue"in n}function Xa(n){return!!n&&"arrayValue"in n}function Ju(n){return!!n&&"nullValue"in n}function Xu(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Hs(n){return!!n&&"mapValue"in n}function Ai(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return di(n.mapValue.fields,(t,i)=>e.mapValue.fields[t]=Ai(i)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ai(n.arrayValue.values[t]);return e}return Object.assign({},n)}function g_(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.value=e}static empty(){return new ft({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!Hs(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ai(t)}setAll(e){let t=Ke.emptyPath(),i={},s=[];e.forEach((o,l)=>{if(!t.isImmediateParentOf(l)){const a=this.getFieldsMap(t);this.applyChanges(a,i,s),i={},s=[],t=l.popLast()}o?i[l.lastSegment()]=Ai(o):s.push(l.lastSegment())});const r=this.getFieldsMap(t);this.applyChanges(r,i,s)}delete(e){const t=this.field(e.popLast());Hs(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return At(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=t.mapValue.fields[e.get(i)];Hs(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,i){di(t,(s,r)=>e[s]=r);for(const s of i)delete e[s]}clone(){return new ft(Ai(this.value))}}function od(n){const e=[];return di(n.fields,(t,i)=>{const s=new Ke([t]);if(Hs(i)){const r=od(i.mapValue).fields;if(r.length===0)e.push(s);else for(const o of r)e.push(s.child(o))}else e.push(s)}),new mt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e,t,i,s,r,o,l){this.key=e,this.documentType=t,this.version=i,this.readTime=s,this.createTime=r,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Qe(e,0,te.min(),te.min(),te.min(),ft.empty(),0)}static newFoundDocument(e,t,i,s){return new Qe(e,1,t,te.min(),i,s,0)}static newNoDocument(e,t){return new Qe(e,2,t,te.min(),te.min(),ft.empty(),0)}static newUnknownDocument(e,t){return new Qe(e,3,t,te.min(),te.min(),ft.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ft.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ft.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Qe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Qe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e,t){this.position=e,this.inclusive=t}}function Zu(n,e,t){let i=0;for(let s=0;s<n.position.length;s++){const r=e[s],o=n.position[s];if(r.field.isKeyField()?i=K.comparator(K.fromName(o.referenceValue),t.key):i=si(o,t.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return i}function ec(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!At(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e,t="asc"){this.field=e,this.dir=t}}function m_(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{}class Oe extends ad{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new v_(e,t,i):t==="array-contains"?new b_(e,i):t==="in"?new I_(e,i):t==="not-in"?new T_(e,i):t==="array-contains-any"?new E_(e,i):new Oe(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new __(e,i):new w_(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(si(t,this.value)):t!==null&&Sn(this.value)===Sn(t)&&this.matchesComparison(si(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return J()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class wt extends ad{constructor(e,t){super(),this.filters=e,this.op=t,this.lt=null}static create(e,t){return new wt(e,t)}matches(e){return ld(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(t=>t.isInequality());return e!==null?e.field:null}ft(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function ld(n){return n.op==="and"}function ud(n){return y_(n)&&ld(n)}function y_(n){for(const e of n.filters)if(e instanceof wt)return!1;return!0}function Xo(n){if(n instanceof Oe)return n.field.canonicalString()+n.op.toString()+ri(n.value);if(ud(n))return n.filters.map(e=>Xo(e)).join(",");{const e=n.filters.map(t=>Xo(t)).join(",");return`${n.op}(${e})`}}function cd(n,e){return n instanceof Oe?function(t,i){return i instanceof Oe&&t.op===i.op&&t.field.isEqual(i.field)&&At(t.value,i.value)}(n,e):n instanceof wt?function(t,i){return i instanceof wt&&t.op===i.op&&t.filters.length===i.filters.length?t.filters.reduce((s,r,o)=>s&&cd(r,i.filters[o]),!0):!1}(n,e):void J()}function hd(n){return n instanceof Oe?function(e){return`${e.field.canonicalString()} ${e.op} ${ri(e.value)}`}(n):n instanceof wt?function(e){return e.op.toString()+" {"+e.getFilters().map(hd).join(" ,")+"}"}(n):"Filter"}class v_ extends Oe{constructor(e,t,i){super(e,t,i),this.key=K.fromName(i.referenceValue)}matches(e){const t=K.comparator(e.key,this.key);return this.matchesComparison(t)}}class __ extends Oe{constructor(e,t){super(e,"in",t),this.keys=fd("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class w_ extends Oe{constructor(e,t){super(e,"not-in",t),this.keys=fd("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function fd(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(i=>K.fromName(i.referenceValue))}class b_ extends Oe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Xa(t)&&Wi(t.arrayValue,this.value)}}class I_ extends Oe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Wi(this.value.arrayValue,t)}}class T_ extends Oe{constructor(e,t){super(e,"not-in",t)}matches(e){if(Wi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Wi(this.value.arrayValue,t)}}class E_ extends Oe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Xa(t)||!t.arrayValue.values)&&t.arrayValue.values.some(i=>Wi(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(e,t=null,i=[],s=[],r=null,o=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=o,this.endAt=l,this.dt=null}}function tc(n,e=null,t=[],i=[],s=null,r=null,o=null){return new C_(n,e,t,i,s,r,o)}function Za(n){const e=ie(n);if(e.dt===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(i=>Xo(i)).join(","),t+="|ob:",t+=e.orderBy.map(i=>function(s){return s.field.canonicalString()+s.dir}(i)).join(","),Hr(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(i=>ri(i)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(i=>ri(i)).join(",")),e.dt=t}return e.dt}function el(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!m_(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!cd(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!ec(n.startAt,e.startAt)&&ec(n.endAt,e.endAt)}function Zo(n){return K.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e,t=null,i=[],s=[],r=null,o="F",l=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=o,this.startAt=l,this.endAt=a,this.wt=null,this._t=null,this.startAt,this.endAt}}function M_(n,e,t,i,s,r,o,l){return new pi(n,e,t,i,s,r,o,l)}function $r(n){return new pi(n)}function nc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function tl(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function Gr(n){for(const e of n.filters){const t=e.getFirstInequalityField();if(t!==null)return t}return null}function dd(n){return n.collectionGroup!==null}function Yn(n){const e=ie(n);if(e.wt===null){e.wt=[];const t=Gr(e),i=tl(e);if(t!==null&&i===null)t.isKeyField()||e.wt.push(new Kn(t)),e.wt.push(new Kn(Ke.keyField(),"asc"));else{let s=!1;for(const r of e.explicitOrderBy)e.wt.push(r),r.field.isKeyField()&&(s=!0);if(!s){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new Kn(Ke.keyField(),r))}}}return e.wt}function Ft(n){const e=ie(n);if(!e._t)if(e.limitType==="F")e._t=tc(e.path,e.collectionGroup,Yn(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const r of Yn(e)){const o=r.dir==="desc"?"asc":"desc";t.push(new Kn(r.field,o))}const i=e.endAt?new gr(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new gr(e.startAt.position,e.startAt.inclusive):null;e._t=tc(e.path,e.collectionGroup,t,e.filters,e.limit,i,s)}return e._t}function ea(n,e){e.getFirstInequalityField(),Gr(n);const t=n.filters.concat([e]);return new pi(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function ta(n,e,t){return new pi(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Qr(n,e){return el(Ft(n),Ft(e))&&n.limitType===e.limitType}function pd(n){return`${Za(Ft(n))}|lt:${n.limitType}`}function na(n){return`Query(target=${function(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(i=>hd(i)).join(", ")}]`),Hr(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(i=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(i)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(i=>ri(i)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(i=>ri(i)).join(",")),`Target(${t})`}(Ft(n))}; limitType=${n.limitType})`}function Kr(n,e){return e.isFoundDocument()&&function(t,i){const s=i.key.path;return t.collectionGroup!==null?i.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(s):K.isDocumentKey(t.path)?t.path.isEqual(s):t.path.isImmediateParentOf(s)}(n,e)&&function(t,i){for(const s of Yn(t))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(t,i){for(const s of t.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(t,i){return!(t.startAt&&!function(s,r,o){const l=Zu(s,r,o);return s.inclusive?l<=0:l<0}(t.startAt,Yn(t),i)||t.endAt&&!function(s,r,o){const l=Zu(s,r,o);return s.inclusive?l>=0:l>0}(t.endAt,Yn(t),i))}(n,e)}function k_(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function gd(n){return(e,t)=>{let i=!1;for(const s of Yn(n)){const r=S_(s,e,t);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function S_(n,e,t){const i=n.field.isKeyField()?K.comparator(e.key,t.key):function(s,r,o){const l=r.data.field(s),a=o.data.field(s);return l!==null&&a!==null?si(l,a):J()}(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return J()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,e))return r}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),s=this.inner[i];if(s===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return void(s[r]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[t]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(e){di(this.inner,(t,i)=>{for(const[s,r]of i)e(s,r)})}isEmpty(){return sd(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N_=new Se(K.comparator);function zt(){return N_}const md=new Se(K.comparator);function Mi(...n){let e=md;for(const t of n)e=e.insert(t.key,t);return e}function yd(n){let e=md;return n.forEach((t,i)=>e=e.insert(t,i.overlayedDocument)),e}function mn(){return Di()}function vd(){return Di()}function Di(){return new gi(n=>n.toString(),(n,e)=>n.isEqual(e))}const A_=new Se(K.comparator),D_=new Je(K.comparator);function ae(...n){let e=D_;for(const t of n)e=e.add(t);return e}const L_=new Je(pe);function O_(){return L_}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _d(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:pr(e)?"-0":e}}function wd(n){return{integerValue:""+n}}function P_(n,e){return f_(e)?wd(e):_d(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(){this._=void 0}}function R_(n,e,t){return n instanceof Ji?function(i,s){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Wa(s)&&(s=Ja(s)),s&&(r.fields.__previous_value__=s),{mapValue:r}}(t,e):n instanceof Xi?Id(n,e):n instanceof Zi?Td(n,e):function(i,s){const r=bd(i,s),o=ic(r)+ic(i.gt);return Jo(r)&&Jo(i.gt)?wd(o):_d(i.serializer,o)}(n,e)}function j_(n,e,t){return n instanceof Xi?Id(n,e):n instanceof Zi?Td(n,e):t}function bd(n,e){return n instanceof mr?Jo(t=e)||function(i){return!!i&&"doubleValue"in i}(t)?e:{integerValue:0}:null;var t}class Ji extends Yr{}class Xi extends Yr{constructor(e){super(),this.elements=e}}function Id(n,e){const t=Ed(e);for(const i of n.elements)t.some(s=>At(s,i))||t.push(i);return{arrayValue:{values:t}}}class Zi extends Yr{constructor(e){super(),this.elements=e}}function Td(n,e){let t=Ed(e);for(const i of n.elements)t=t.filter(s=>!At(s,i));return{arrayValue:{values:t}}}class mr extends Yr{constructor(e,t){super(),this.serializer=e,this.gt=t}}function ic(n){return Le(n.integerValue||n.doubleValue)}function Ed(n){return Xa(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(e,t){this.field=e,this.transform=t}}function F_(n,e){return n.field.isEqual(e.field)&&function(t,i){return t instanceof Xi&&i instanceof Xi||t instanceof Zi&&i instanceof Zi?ii(t.elements,i.elements,At):t instanceof mr&&i instanceof mr?At(t.gt,i.gt):t instanceof Ji&&i instanceof Ji}(n.transform,e.transform)}class z_{constructor(e,t){this.version=e,this.transformResults=t}}class vt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new vt}static exists(e){return new vt(void 0,e)}static updateTime(e){return new vt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function $s(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Wr{}function Cd(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new nl(n.key,vt.none()):new ys(n.key,n.data,vt.none());{const t=n.data,i=ft.empty();let s=new Je(Ke.comparator);for(let r of e.fields)if(!s.has(r)){let o=t.field(r);o===null&&r.length>1&&(r=r.popLast(),o=t.field(r)),o===null?i.delete(r):i.set(r,o),s=s.add(r)}return new Ln(n.key,i,new mt(s.toArray()),vt.none())}}function V_(n,e,t){n instanceof ys?function(i,s,r){const o=i.value.clone(),l=rc(i.fieldTransforms,s,r.transformResults);o.setAll(l),s.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(n,e,t):n instanceof Ln?function(i,s,r){if(!$s(i.precondition,s))return void s.convertToUnknownDocument(r.version);const o=rc(i.fieldTransforms,s,r.transformResults),l=s.data;l.setAll(Md(i)),l.setAll(o),s.convertToFoundDocument(r.version,l).setHasCommittedMutations()}(n,e,t):function(i,s,r){s.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,t)}function Li(n,e,t,i){return n instanceof ys?function(s,r,o,l){if(!$s(s.precondition,r))return o;const a=s.value.clone(),u=oc(s.fieldTransforms,l,r);return a.setAll(u),r.convertToFoundDocument(r.version,a).setHasLocalMutations(),null}(n,e,t,i):n instanceof Ln?function(s,r,o,l){if(!$s(s.precondition,r))return o;const a=oc(s.fieldTransforms,l,r),u=r.data;return u.setAll(Md(s)),u.setAll(a),r.convertToFoundDocument(r.version,u).setHasLocalMutations(),o===null?null:o.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(c=>c.field))}(n,e,t,i):function(s,r,o){return $s(s.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(n,e,t)}function x_(n,e){let t=null;for(const i of n.fieldTransforms){const s=e.data.field(i.field),r=bd(i.transform,s||null);r!=null&&(t===null&&(t=ft.empty()),t.set(i.field,r))}return t||null}function sc(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(t,i){return t===void 0&&i===void 0||!(!t||!i)&&ii(t,i,(s,r)=>F_(s,r))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class ys extends Wr{constructor(e,t,i,s=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ln extends Wr{constructor(e,t,i,s,r=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Md(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}}),e}function rc(n,e,t){const i=new Map;Me(n.length===t.length);for(let s=0;s<t.length;s++){const r=n[s],o=r.transform,l=e.data.field(r.field);i.set(r.field,j_(o,l,t[s]))}return i}function oc(n,e,t){const i=new Map;for(const s of n){const r=s.transform,o=t.data.field(s.field);i.set(s.field,R_(r,o,e))}return i}class nl extends Wr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class B_ extends Wr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_{constructor(e,t,i,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(e.key)&&V_(r,e,i[s])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=Li(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=Li(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=vd();return this.mutations.forEach(s=>{const r=e.get(s.key),o=r.overlayedDocument;let l=this.applyToLocalView(o,r.mutatedFields);l=t.has(s.key)?null:l;const a=Cd(o,l);a!==null&&i.set(s.key,a),o.isValidDocument()||o.convertToNoDocument(te.min())}),i}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ae())}isEqual(e){return this.batchId===e.batchId&&ii(this.mutations,e.mutations,(t,i)=>sc(t,i))&&ii(this.baseMutations,e.baseMutations,(t,i)=>sc(t,i))}}class il{constructor(e,t,i,s){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=s}static from(e,t,i){Me(e.mutations.length===i.length);let s=A_;const r=e.mutations;for(let o=0;o<r.length;o++)s=s.insert(r[o].key,i[o].version);return new il(e,t,i,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var De,ce;function G_(n){switch(n){default:return J();case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0}}function kd(n){if(n===void 0)return Ut("GRPC error has no .code"),O.UNKNOWN;switch(n){case De.OK:return O.OK;case De.CANCELLED:return O.CANCELLED;case De.UNKNOWN:return O.UNKNOWN;case De.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case De.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case De.INTERNAL:return O.INTERNAL;case De.UNAVAILABLE:return O.UNAVAILABLE;case De.UNAUTHENTICATED:return O.UNAUTHENTICATED;case De.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case De.NOT_FOUND:return O.NOT_FOUND;case De.ALREADY_EXISTS:return O.ALREADY_EXISTS;case De.PERMISSION_DENIED:return O.PERMISSION_DENIED;case De.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case De.ABORTED:return O.ABORTED;case De.OUT_OF_RANGE:return O.OUT_OF_RANGE;case De.UNIMPLEMENTED:return O.UNIMPLEMENTED;case De.DATA_LOSS:return O.DATA_LOSS;default:return J()}}(ce=De||(De={}))[ce.OK=0]="OK",ce[ce.CANCELLED=1]="CANCELLED",ce[ce.UNKNOWN=2]="UNKNOWN",ce[ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ce[ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ce[ce.NOT_FOUND=5]="NOT_FOUND",ce[ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",ce[ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",ce[ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",ce[ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ce[ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ce[ce.ABORTED=10]="ABORTED",ce[ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",ce[ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",ce[ce.INTERNAL=13]="INTERNAL",ce[ce.UNAVAILABLE=14]="UNAVAILABLE",ce[ce.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return zs}static getOrCreateInstance(){return zs===null&&(zs=new sl),zs}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(t=>t(e))}}let zs=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q_(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K_=new Qn([4294967295,4294967295],0);function ac(n){const e=Q_().encode(n),t=new Jv;return t.update(e),new Uint8Array(t.digest())}function lc(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),s=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new Qn([t,i],0),new Qn([s,r],0)]}class rl{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new ki(`Invalid padding: ${t}`);if(i<0)throw new ki(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new ki(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new ki(`Invalid padding when bitmap length is 0: ${t}`);this.It=8*e.length-t,this.Tt=Qn.fromNumber(this.It)}Et(e,t,i){let s=e.add(t.multiply(Qn.fromNumber(i)));return s.compare(K_)===1&&(s=new Qn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const t=ac(e),[i,s]=lc(t);for(let r=0;r<this.hashCount;r++){const o=this.Et(i,s,r);if(!this.At(o))return!1}return!0}static create(e,t,i){const s=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new rl(r,s,t);return i.forEach(l=>o.insert(l)),o}insert(e){if(this.It===0)return;const t=ac(e),[i,s]=lc(t);for(let r=0;r<this.hashCount;r++){const o=this.Et(i,s,r);this.Rt(o)}}Rt(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class ki extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e,t,i,s,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const s=new Map;return s.set(e,vs.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new Jr(te.min(),s,new Se(pe),zt(),ae())}}class vs{constructor(e,t,i,s,r){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new vs(i,t,ae(),ae(),ae())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e,t,i,s){this.Pt=e,this.removedTargetIds=t,this.key=i,this.bt=s}}class Sd{constructor(e,t){this.targetId=e,this.Vt=t}}class Nd{constructor(e,t,i=Ze.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=s}}class uc{constructor(){this.St=0,this.Dt=hc(),this.Ct=Ze.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=ae(),t=ae(),i=ae();return this.Dt.forEach((s,r)=>{switch(r){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:i=i.add(s);break;default:J()}}),new vs(this.Ct,this.xt,e,t,i)}Ft(){this.Nt=!1,this.Dt=hc()}Bt(e,t){this.Nt=!0,this.Dt=this.Dt.insert(e,t)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class Y_{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=zt(),this.zt=cc(),this.Wt=new Se(pe)}Ht(e){for(const t of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(t,e.bt):this.Yt(t,e.key,e.bt);for(const t of e.removedTargetIds)this.Yt(t,e.key,e.bt)}Xt(e){this.forEachTarget(e,t=>{const i=this.Zt(t);switch(e.state){case 0:this.te(t)&&i.$t(e.resumeToken);break;case 1:i.Ut(),i.kt||i.Ft(),i.$t(e.resumeToken);break;case 2:i.Ut(),i.kt||this.removeTarget(t);break;case 3:this.te(t)&&(i.Kt(),i.$t(e.resumeToken));break;case 4:this.te(t)&&(this.ee(t),i.$t(e.resumeToken));break;default:J()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Qt.forEach((i,s)=>{this.te(s)&&t(s)})}ne(e){var t;const i=e.targetId,s=e.Vt.count,r=this.se(i);if(r){const o=r.target;if(Zo(o))if(s===0){const l=new K(o.path);this.Yt(i,l,Qe.newNoDocument(l,te.min()))}else Me(s===1);else{const l=this.ie(i);if(l!==s){const a=this.re(e,l);if(a!==0){this.ee(i);const u=a===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(i,u)}(t=sl.instance)===null||t===void 0||t.notifyOnExistenceFilterMismatch(function(u,c,h){var d,f,p,v,_,T;const y={localCacheCount:c,existenceFilterCount:h.count},C=h.unchangedNames;return C&&(y.bloomFilter={applied:u===0,hashCount:(d=C==null?void 0:C.hashCount)!==null&&d!==void 0?d:0,bitmapLength:(v=(p=(f=C==null?void 0:C.bits)===null||f===void 0?void 0:f.bitmap)===null||p===void 0?void 0:p.length)!==null&&v!==void 0?v:0,padding:(T=(_=C==null?void 0:C.bits)===null||_===void 0?void 0:_.padding)!==null&&T!==void 0?T:0}),y}(a,l,e.Vt))}}}}re(e,t){const{unchangedNames:i,count:s}=e.Vt;if(!i||!i.bits)return 1;const{bits:{bitmap:r="",padding:o=0},hashCount:l=0}=i;let a,u;try{a=kn(r).toUint8Array()}catch(c){if(c instanceof rd)return ni("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw c}try{u=new rl(a,o,l)}catch(c){return ni(c instanceof ki?"BloomFilter error: ":"Applying bloom filter failed: ",c),1}return u.It===0?1:s!==t-this.oe(e.targetId,u)?2:0}oe(e,t){const i=this.Gt.getRemoteKeysForTarget(e);let s=0;return i.forEach(r=>{const o=this.Gt.ue(),l=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;t.vt(l)||(this.Yt(e,r,null),s++)}),s}ce(e){const t=new Map;this.Qt.forEach((r,o)=>{const l=this.se(o);if(l){if(r.current&&Zo(l.target)){const a=new K(l.target.path);this.jt.get(a)!==null||this.ae(o,a)||this.Yt(o,a,Qe.newNoDocument(a,e))}r.Mt&&(t.set(o,r.Ot()),r.Ft())}});let i=ae();this.zt.forEach((r,o)=>{let l=!0;o.forEachWhile(a=>{const u=this.se(a);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(i=i.add(r))}),this.jt.forEach((r,o)=>o.setReadTime(e));const s=new Jr(e,t,this.Wt,this.jt,i);return this.jt=zt(),this.zt=cc(),this.Wt=new Se(pe),s}Jt(e,t){if(!this.te(e))return;const i=this.ae(e,t.key)?2:0;this.Zt(e).Bt(t.key,i),this.jt=this.jt.insert(t.key,t),this.zt=this.zt.insert(t.key,this.he(t.key).add(e))}Yt(e,t,i){if(!this.te(e))return;const s=this.Zt(e);this.ae(e,t)?s.Bt(t,1):s.Lt(t),this.zt=this.zt.insert(t,this.he(t).delete(e)),i&&(this.jt=this.jt.insert(t,i))}removeTarget(e){this.Qt.delete(e)}ie(e){const t=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let t=this.Qt.get(e);return t||(t=new uc,this.Qt.set(e,t)),t}he(e){let t=this.zt.get(e);return t||(t=new Je(pe),this.zt=this.zt.insert(e,t)),t}te(e){const t=this.se(e)!==null;return t||Q("WatchChangeAggregator","Detected inactive target",e),t}se(e){const t=this.Qt.get(e);return t&&t.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new uc),this.Gt.getRemoteKeysForTarget(e).forEach(t=>{this.Yt(e,t,null)})}ae(e,t){return this.Gt.getRemoteKeysForTarget(e).has(t)}}function cc(){return new Se(K.comparator)}function hc(){return new Se(K.comparator)}const W_=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),J_=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),X_=(()=>({and:"AND",or:"OR"}))();class Z_{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ia(n,e){return n.useProto3Json||Hr(e)?e:{value:e}}function yr(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ad(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function ew(n,e){return yr(n,e.toTimestamp())}function Mt(n){return Me(!!n),te.fromTimestamp(function(e){const t=nn(e);return new Re(t.seconds,t.nanos)}(n))}function ol(n,e){return function(t){return new Ce(["projects",t.projectId,"databases",t.database])}(n).child("documents").child(e).canonicalString()}function Dd(n){const e=Ce.fromString(n);return Me(Rd(e)),e}function sa(n,e){return ol(n.databaseId,e.path)}function Io(n,e){const t=Dd(e);if(t.get(1)!==n.databaseId.projectId)throw new $(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new $(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new K(Ld(t))}function ra(n,e){return ol(n.databaseId,e)}function tw(n){const e=Dd(n);return e.length===4?Ce.emptyPath():Ld(e)}function oa(n){return new Ce(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Ld(n){return Me(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function fc(n,e,t){return{name:sa(n,e),fields:t.value.mapValue.fields}}function nw(n,e){let t;if("targetChange"in e){e.targetChange;const i=function(a){return a==="NO_CHANGE"?0:a==="ADD"?1:a==="REMOVE"?2:a==="CURRENT"?3:a==="RESET"?4:J()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],r=function(a,u){return a.useProto3Json?(Me(u===void 0||typeof u=="string"),Ze.fromBase64String(u||"")):(Me(u===void 0||u instanceof Uint8Array),Ze.fromUint8Array(u||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(a){const u=a.code===void 0?O.UNKNOWN:kd(a.code);return new $(u,a.message||"")}(o);t=new Nd(i,s,r,l||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=Io(n,i.document.name),r=Mt(i.document.updateTime),o=i.document.createTime?Mt(i.document.createTime):te.min(),l=new ft({mapValue:{fields:i.document.fields}}),a=Qe.newFoundDocument(s,r,o,l),u=i.targetIds||[],c=i.removedTargetIds||[];t=new Gs(u,c,a.key,a)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=Io(n,i.document),r=i.readTime?Mt(i.readTime):te.min(),o=Qe.newNoDocument(s,r),l=i.removedTargetIds||[];t=new Gs([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=Io(n,i.document),r=i.removedTargetIds||[];t=new Gs([],r,s,null)}else{if(!("filter"in e))return J();{e.filter;const i=e.filter;i.targetId;const{count:s=0,unchangedNames:r}=i,o=new $_(s,r),l=i.targetId;t=new Sd(l,o)}}return t}function iw(n,e){let t;if(e instanceof ys)t={update:fc(n,e.key,e.value)};else if(e instanceof nl)t={delete:sa(n,e.key)};else if(e instanceof Ln)t={update:fc(n,e.key,e.data),updateMask:fw(e.fieldMask)};else{if(!(e instanceof B_))return J();t={verify:sa(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(i=>function(s,r){const o=r.transform;if(o instanceof Ji)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Xi)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Zi)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof mr)return{fieldPath:r.field.canonicalString(),increment:o.gt};throw J()}(0,i))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:ew(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:J()}(n,e.precondition)),t}function sw(n,e){return n&&n.length>0?(Me(e!==void 0),n.map(t=>function(i,s){let r=i.updateTime?Mt(i.updateTime):Mt(s);return r.isEqual(te.min())&&(r=Mt(s)),new z_(r,i.transformResults||[])}(t,e))):[]}function rw(n,e){return{documents:[ra(n,e.path)]}}function ow(n,e){const t={structuredQuery:{}},i=e.path;e.collectionGroup!==null?(t.parent=ra(n,i),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=ra(n,i.popLast()),t.structuredQuery.from=[{collectionId:i.lastSegment()}]);const s=function(a){if(a.length!==0)return Pd(wt.create(a,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const r=function(a){if(a.length!==0)return a.map(u=>function(c){return{field:xn(c.field),direction:uw(c.dir)}}(u))}(e.orderBy);r&&(t.structuredQuery.orderBy=r);const o=ia(n,e.limit);var l;return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt={before:(l=e.startAt).inclusive,values:l.position}),e.endAt&&(t.structuredQuery.endAt=function(a){return{before:!a.inclusive,values:a.position}}(e.endAt)),t}function aw(n){let e=tw(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let s=null;if(i>0){Me(i===1);const c=t.from[0];c.allDescendants?s=c.collectionId:e=e.child(c.collectionId)}let r=[];t.where&&(r=function(c){const h=Od(c);return h instanceof wt&&ud(h)?h.getFilters():[h]}(t.where));let o=[];t.orderBy&&(o=t.orderBy.map(c=>function(h){return new Kn(Bn(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let l=null;t.limit&&(l=function(c){let h;return h=typeof c=="object"?c.value:c,Hr(h)?null:h}(t.limit));let a=null;t.startAt&&(a=function(c){const h=!!c.before,d=c.values||[];return new gr(d,h)}(t.startAt));let u=null;return t.endAt&&(u=function(c){const h=!c.before,d=c.values||[];return new gr(d,h)}(t.endAt)),M_(e,s,o,r,l,"F",a,u)}function lw(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return J()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Od(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Bn(e.unaryFilter.field);return Oe.create(t,"==",{doubleValue:NaN});case"IS_NULL":const i=Bn(e.unaryFilter.field);return Oe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Bn(e.unaryFilter.field);return Oe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Bn(e.unaryFilter.field);return Oe.create(r,"!=",{nullValue:"NULL_VALUE"});default:return J()}}(n):n.fieldFilter!==void 0?function(e){return Oe.create(Bn(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return J()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return wt.create(e.compositeFilter.filters.map(t=>Od(t)),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return J()}}(e.compositeFilter.op))}(n):J()}function uw(n){return W_[n]}function cw(n){return J_[n]}function hw(n){return X_[n]}function xn(n){return{fieldPath:n.canonicalString()}}function Bn(n){return Ke.fromServerFormat(n.fieldPath)}function Pd(n){return n instanceof Oe?function(e){if(e.op==="=="){if(Xu(e.value))return{unaryFilter:{field:xn(e.field),op:"IS_NAN"}};if(Ju(e.value))return{unaryFilter:{field:xn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Xu(e.value))return{unaryFilter:{field:xn(e.field),op:"IS_NOT_NAN"}};if(Ju(e.value))return{unaryFilter:{field:xn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:xn(e.field),op:cw(e.op),value:e.value}}}(n):n instanceof wt?function(e){const t=e.getFilters().map(i=>Pd(i));return t.length===1?t[0]:{compositeFilter:{op:hw(e.op),filters:t}}}(n):J()}function fw(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Rd(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e,t,i,s,r=te.min(),o=te.min(),l=Ze.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=a}withSequenceNumber(e){return new Kt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Kt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Kt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Kt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dw{constructor(e){this.fe=e}}function pw(n){const e=aw({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ta(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{constructor(){this.rn=new mw}addToCollectionParentIndex(e,t){return this.rn.add(t),U.resolve()}getCollectionParents(e,t){return U.resolve(this.rn.getEntries(t))}addFieldIndex(e,t){return U.resolve()}deleteFieldIndex(e,t){return U.resolve()}getDocumentsMatchingTarget(e,t){return U.resolve(null)}getIndexType(e,t){return U.resolve(0)}getFieldIndexes(e,t){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,t){return U.resolve(tn.min())}getMinOffsetFromCollectionGroup(e,t){return U.resolve(tn.min())}updateCollectionGroup(e,t,i){return U.resolve()}updateIndexEntries(e,t){return U.resolve()}}class mw{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),s=this.index[t]||new Je(Ce.comparator),r=!s.has(i);return this.index[t]=s.add(i),r}has(e){const t=e.lastSegment(),i=e.popLast(),s=this.index[t];return s&&s.has(i)}getEntries(e){return(this.index[e]||new Je(Ce.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new oi(0)}static Mn(){return new oi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{constructor(){this.changes=new gi(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Qe.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?U.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vw{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _w{constructor(e,t,i,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=s}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(i=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(i!==null&&Li(i.mutation,s,mt.empty(),Re.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.getLocalViewOfDocuments(e,i,ae()).next(()=>i))}getLocalViewOfDocuments(e,t,i=ae()){const s=mn();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,i).next(r=>{let o=Mi();return r.forEach((l,a)=>{o=o.insert(l,a.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const i=mn();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,ae()))}populateOverlays(e,t,i){const s=[];return i.forEach(r=>{t.has(r)||s.push(r)}),this.documentOverlayCache.getOverlays(e,s).next(r=>{r.forEach((o,l)=>{t.set(o,l)})})}computeViews(e,t,i,s){let r=zt();const o=Di(),l=Di();return t.forEach((a,u)=>{const c=i.get(u.key);s.has(u.key)&&(c===void 0||c.mutation instanceof Ln)?r=r.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),Li(c.mutation,u,c.mutation.getFieldMask(),Re.now())):o.set(u.key,mt.empty())}),this.recalculateAndSaveOverlays(e,r).next(a=>(a.forEach((u,c)=>o.set(u,c)),t.forEach((u,c)=>{var h;return l.set(u,new vw(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),l))}recalculateAndSaveOverlays(e,t){const i=Di();let s=new Se((o,l)=>o-l),r=ae();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const l of o)l.keys().forEach(a=>{const u=t.get(a);if(u===null)return;let c=i.get(a)||mt.empty();c=l.applyToLocalView(u,c),i.set(a,c);const h=(s.get(l.batchId)||ae()).add(a);s=s.insert(l.batchId,h)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const a=l.getNext(),u=a.key,c=a.value,h=vd();c.forEach(d=>{if(!r.has(d)){const f=Cd(t.get(d),i.get(d));f!==null&&h.set(d,f),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return U.waitFor(o)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,t,i){return function(s){return K.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):dd(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i):this.getDocumentsMatchingCollectionQuery(e,t,i)}getNextDocuments(e,t,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,s).next(r=>{const o=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,s-r.size):U.resolve(mn());let l=-1,a=r;return o.next(u=>U.forEach(u,(c,h)=>(l<h.largestBatchId&&(l=h.largestBatchId),r.get(c)?U.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{a=a.insert(c,d)}))).next(()=>this.populateOverlays(e,u,r)).next(()=>this.computeViews(e,a,u,ae())).next(c=>({batchId:l,changes:yd(c)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new K(t)).next(i=>{let s=Mi();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,i){const s=t.collectionGroup;let r=Mi();return this.indexManager.getCollectionParents(e,s).next(o=>U.forEach(o,l=>{const a=function(u,c){return new pi(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(t,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,a,i).next(u=>{u.forEach((c,h)=>{r=r.insert(c,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,t,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next(r=>(s=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,s))).next(r=>{s.forEach((l,a)=>{const u=a.getKey();r.get(u)===null&&(r=r.insert(u,Qe.newInvalidDocument(u)))});let o=Mi();return r.forEach((l,a)=>{const u=s.get(l);u!==void 0&&Li(u.mutation,a,mt.empty(),Re.now()),Kr(t,a)&&(o=o.insert(l,a))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ww{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,t){return U.resolve(this.cs.get(t))}saveBundleMetadata(e,t){var i;return this.cs.set(t.id,{id:(i=t).id,version:i.version,createTime:Mt(i.createTime)}),U.resolve()}getNamedQuery(e,t){return U.resolve(this.hs.get(t))}saveNamedQuery(e,t){return this.hs.set(t.name,function(i){return{name:i.name,query:pw(i.bundledQuery),readTime:Mt(i.readTime)}}(t)),U.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bw{constructor(){this.overlays=new Se(K.comparator),this.ls=new Map}getOverlay(e,t){return U.resolve(this.overlays.get(t))}getOverlays(e,t){const i=mn();return U.forEach(t,s=>this.getOverlay(e,s).next(r=>{r!==null&&i.set(s,r)})).next(()=>i)}saveOverlays(e,t,i){return i.forEach((s,r)=>{this.we(e,t,r)}),U.resolve()}removeOverlaysForBatchId(e,t,i){const s=this.ls.get(i);return s!==void 0&&(s.forEach(r=>this.overlays=this.overlays.remove(r)),this.ls.delete(i)),U.resolve()}getOverlaysForCollection(e,t,i){const s=mn(),r=t.length+1,o=new K(t.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const a=l.getNext().value,u=a.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===r&&a.largestBatchId>i&&s.set(a.getKey(),a)}return U.resolve(s)}getOverlaysForCollectionGroup(e,t,i,s){let r=new Se((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>i){let c=r.get(u.largestBatchId);c===null&&(c=mn(),r=r.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const l=mn(),a=r.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach((u,c)=>l.set(u,c)),!(l.size()>=s)););return U.resolve(l)}we(e,t,i){const s=this.overlays.get(i.key);if(s!==null){const o=this.ls.get(s.largestBatchId).delete(i.key);this.ls.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new H_(t,i));let r=this.ls.get(t);r===void 0&&(r=ae(),this.ls.set(t,r)),this.ls.set(t,r.add(i.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(){this.fs=new Je(je.ds),this.ws=new Je(je._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,t){const i=new je(e,t);this.fs=this.fs.add(i),this.ws=this.ws.add(i)}gs(e,t){e.forEach(i=>this.addReference(i,t))}removeReference(e,t){this.ys(new je(e,t))}ps(e,t){e.forEach(i=>this.removeReference(i,t))}Is(e){const t=new K(new Ce([])),i=new je(t,e),s=new je(t,e+1),r=[];return this.ws.forEachInRange([i,s],o=>{this.ys(o),r.push(o.key)}),r}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const t=new K(new Ce([])),i=new je(t,e),s=new je(t,e+1);let r=ae();return this.ws.forEachInRange([i,s],o=>{r=r.add(o.key)}),r}containsKey(e){const t=new je(e,0),i=this.fs.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class je{constructor(e,t){this.key=e,this.As=t}static ds(e,t){return K.comparator(e.key,t.key)||pe(e.As,t.As)}static _s(e,t){return pe(e.As,t.As)||K.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iw{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.vs=1,this.Rs=new Je(je.ds)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,s){const r=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new q_(r,t,i,s);this.mutationQueue.push(o);for(const l of s)this.Rs=this.Rs.add(new je(l.key,r)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return U.resolve(o)}lookupMutationBatch(e,t){return U.resolve(this.Ps(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,s=this.bs(i),r=s<0?0:s;return U.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new je(t,0),s=new je(t,Number.POSITIVE_INFINITY),r=[];return this.Rs.forEachInRange([i,s],o=>{const l=this.Ps(o.As);r.push(l)}),U.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new Je(pe);return t.forEach(s=>{const r=new je(s,0),o=new je(s,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([r,o],l=>{i=i.add(l.As)})}),U.resolve(this.Vs(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,s=i.length+1;let r=i;K.isDocumentKey(r)||(r=r.child(""));const o=new je(new K(r),0);let l=new Je(pe);return this.Rs.forEachWhile(a=>{const u=a.key.path;return!!i.isPrefixOf(u)&&(u.length===s&&(l=l.add(a.As)),!0)},o),U.resolve(this.Vs(l))}Vs(e){const t=[];return e.forEach(i=>{const s=this.Ps(i);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){Me(this.Ss(t.batchId,"removed")===0),this.mutationQueue.shift();let i=this.Rs;return U.forEach(t.mutations,s=>{const r=new je(s.key,t.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Rs=i})}Cn(e){}containsKey(e,t){const i=new je(t,0),s=this.Rs.firstAfterOrEqual(i);return U.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}Ss(e,t){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const t=this.bs(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tw{constructor(e){this.Ds=e,this.docs=new Se(K.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,s=this.docs.get(i),r=s?s.size:0,o=this.Ds(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return U.resolve(i?i.document.mutableCopy():Qe.newInvalidDocument(t))}getEntries(e,t){let i=zt();return t.forEach(s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.mutableCopy():Qe.newInvalidDocument(s))}),U.resolve(i)}getDocumentsMatchingQuery(e,t,i,s){let r=zt();const o=t.path,l=new K(o.child("")),a=this.docs.getIteratorFrom(l);for(;a.hasNext();){const{key:u,value:{document:c}}=a.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||u_(l_(c),i)<=0||(s.has(c.key)||Kr(t,c))&&(r=r.insert(c.key,c.mutableCopy()))}return U.resolve(r)}getAllFromCollectionGroup(e,t,i,s){J()}Cs(e,t){return U.forEach(this.docs,i=>t(i))}newChangeBuffer(e){return new Ew(this)}getSize(e){return U.resolve(this.size)}}class Ew extends yw{constructor(e){super(),this.os=e}applyChanges(e){const t=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?t.push(this.os.addEntry(e,s)):this.os.removeEntry(i)}),U.waitFor(t)}getFromCache(e,t){return this.os.getEntry(e,t)}getAllFromCache(e,t){return this.os.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cw{constructor(e){this.persistence=e,this.xs=new gi(t=>Za(t),el),this.lastRemoteSnapshotVersion=te.min(),this.highestTargetId=0,this.Ns=0,this.ks=new al,this.targetCount=0,this.Ms=oi.kn()}forEachTarget(e,t){return this.xs.forEach((i,s)=>t(s)),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.Ns&&(this.Ns=t),U.resolve()}Fn(e){this.xs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ms=new oi(t),this.highestTargetId=t),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,t){return this.Fn(t),this.targetCount+=1,U.resolve()}updateTargetData(e,t){return this.Fn(t),U.resolve()}removeTargetData(e,t){return this.xs.delete(t.target),this.ks.Is(t.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,t,i){let s=0;const r=[];return this.xs.forEach((o,l)=>{l.sequenceNumber<=t&&i.get(l.targetId)===null&&(this.xs.delete(o),r.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),U.waitFor(r).next(()=>s)}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,t){const i=this.xs.get(t)||null;return U.resolve(i)}addMatchingKeys(e,t,i){return this.ks.gs(t,i),U.resolve()}removeMatchingKeys(e,t,i){this.ks.ps(t,i);const s=this.persistence.referenceDelegate,r=[];return s&&t.forEach(o=>{r.push(s.markPotentiallyOrphaned(e,o))}),U.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.ks.Is(t),U.resolve()}getMatchingKeysForTargetId(e,t){const i=this.ks.Es(t);return U.resolve(i)}containsKey(e,t){return U.resolve(this.ks.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mw{constructor(e,t){this.$s={},this.overlays={},this.Os=new Ya(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new Cw(this),this.indexManager=new gw,this.remoteDocumentCache=function(i){return new Tw(i)}(i=>this.referenceDelegate.Ls(i)),this.serializer=new dw(t),this.qs=new ww(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new bw,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.$s[e.toKey()];return i||(i=new Iw(t,this.referenceDelegate),this.$s[e.toKey()]=i),i}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,t,i){Q("MemoryPersistence","Starting transaction:",e);const s=new kw(this.Os.next());return this.referenceDelegate.Us(),i(s).next(r=>this.referenceDelegate.Ks(s).next(()=>r)).toPromise().then(r=>(s.raiseOnCommittedEvent(),r))}Gs(e,t){return U.or(Object.values(this.$s).map(i=>()=>i.containsKey(e,t)))}}class kw extends h_{constructor(e){super(),this.currentSequenceNumber=e}}class ll{constructor(e){this.persistence=e,this.Qs=new al,this.js=null}static zs(e){return new ll(e)}get Ws(){if(this.js)return this.js;throw J()}addReference(e,t,i){return this.Qs.addReference(i,t),this.Ws.delete(i.toString()),U.resolve()}removeReference(e,t,i){return this.Qs.removeReference(i,t),this.Ws.add(i.toString()),U.resolve()}markPotentiallyOrphaned(e,t){return this.Ws.add(t.toString()),U.resolve()}removeTarget(e,t){this.Qs.Is(t.targetId).forEach(s=>this.Ws.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(r=>this.Ws.add(r.toString()))}).next(()=>i.removeTargetData(e,t))}Us(){this.js=new Set}Ks(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.Ws,i=>{const s=K.fromPath(i);return this.Hs(e,s).next(r=>{r||t.removeEntry(s,te.min())})}).next(()=>(this.js=null,t.apply(e)))}updateLimboDocument(e,t){return this.Hs(e,t).next(i=>{i?this.Ws.delete(t.toString()):this.Ws.add(t.toString())})}Ls(e){return 0}Hs(e,t){return U.or([()=>U.resolve(this.Qs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gs(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(e,t,i,s){this.targetId=e,this.fromCache=t,this.Fi=i,this.Bi=s}static Li(e,t){let i=ae(),s=ae();for(const r of t.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new ul(e,t.fromCache,i,s)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw{constructor(){this.qi=!1}initialize(e,t){this.Ui=e,this.indexManager=t,this.qi=!0}getDocumentsMatchingQuery(e,t,i,s){return this.Ki(e,t).next(r=>r||this.Gi(e,t,s,i)).next(r=>r||this.Qi(e,t))}Ki(e,t){if(nc(t))return U.resolve(null);let i=Ft(t);return this.indexManager.getIndexType(e,i).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=ta(t,null,"F"),i=Ft(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next(r=>{const o=ae(...r);return this.Ui.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,i).next(a=>{const u=this.ji(t,l);return this.zi(t,u,o,a.readTime)?this.Ki(e,ta(t,null,"F")):this.Wi(e,u,t,a)}))})))}Gi(e,t,i,s){return nc(t)||s.isEqual(te.min())?this.Qi(e,t):this.Ui.getDocuments(e,i).next(r=>{const o=this.ji(t,r);return this.zi(t,o,i,s)?this.Qi(e,t):(Gu()<=de.DEBUG&&Q("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),na(t)),this.Wi(e,o,t,a_(s,-1)))})}ji(e,t){let i=new Je(gd(e));return t.forEach((s,r)=>{Kr(e,r)&&(i=i.add(r))}),i}zi(e,t,i,s){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const r=e.limitType==="F"?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}Qi(e,t){return Gu()<=de.DEBUG&&Q("QueryEngine","Using full collection scan to execute query:",na(t)),this.Ui.getDocumentsMatchingQuery(e,t,tn.min())}Wi(e,t,i,s){return this.Ui.getDocumentsMatchingQuery(e,i,s).next(r=>(t.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw{constructor(e,t,i,s){this.persistence=e,this.Hi=t,this.serializer=s,this.Ji=new Se(pe),this.Yi=new gi(r=>Za(r),el),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(i)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new _w(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ji))}}function Aw(n,e,t,i){return new Nw(n,e,t,i)}async function jd(n,e){const t=ie(n);return await t.persistence.runTransaction("Handle user change","readonly",i=>{let s;return t.mutationQueue.getAllMutationBatches(i).next(r=>(s=r,t.tr(e),t.mutationQueue.getAllMutationBatches(i))).next(r=>{const o=[],l=[];let a=ae();for(const u of s){o.push(u.batchId);for(const c of u.mutations)a=a.add(c.key)}for(const u of r){l.push(u.batchId);for(const c of u.mutations)a=a.add(c.key)}return t.localDocuments.getDocuments(i,a).next(u=>({er:u,removedBatchIds:o,addedBatchIds:l}))})})}function Dw(n,e){const t=ie(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=e.batch.keys(),r=t.Zi.newChangeBuffer({trackRemovals:!0});return function(o,l,a,u){const c=a.batch,h=c.keys();let d=U.resolve();return h.forEach(f=>{d=d.next(()=>u.getEntry(l,f)).next(p=>{const v=a.docVersions.get(f);Me(v!==null),p.version.compareTo(v)<0&&(c.applyToRemoteDocument(p,a),p.isValidDocument()&&(p.setReadTime(a.commitVersion),u.addEntry(p)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(l,c))}(t,i,e,r).next(()=>r.apply(i)).next(()=>t.mutationQueue.performConsistencyCheck(i)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(i,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(o){let l=ae();for(let a=0;a<o.mutationResults.length;++a)o.mutationResults[a].transformResults.length>0&&(l=l.add(o.batch.mutations[a].key));return l}(e))).next(()=>t.localDocuments.getDocuments(i,s))})}function Ud(n){const e=ie(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Bs.getLastRemoteSnapshotVersion(t))}function Lw(n,e){const t=ie(n),i=e.snapshotVersion;let s=t.Ji;return t.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=t.Zi.newChangeBuffer({trackRemovals:!0});s=t.Ji;const l=[];e.targetChanges.forEach((c,h)=>{const d=s.get(h);if(!d)return;l.push(t.Bs.removeMatchingKeys(r,c.removedDocuments,h).next(()=>t.Bs.addMatchingKeys(r,c.addedDocuments,h)));let f=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(Ze.EMPTY_BYTE_STRING,te.min()).withLastLimboFreeSnapshotVersion(te.min()):c.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(c.resumeToken,i)),s=s.insert(h,f),function(p,v,_){return p.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:_.addedDocuments.size+_.modifiedDocuments.size+_.removedDocuments.size>0}(d,f,c)&&l.push(t.Bs.updateTargetData(r,f))});let a=zt(),u=ae();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(r,c))}),l.push(Ow(r,o,e.documentUpdates).next(c=>{a=c.nr,u=c.sr})),!i.isEqual(te.min())){const c=t.Bs.getLastRemoteSnapshotVersion(r).next(h=>t.Bs.setTargetsMetadata(r,r.currentSequenceNumber,i));l.push(c)}return U.waitFor(l).next(()=>o.apply(r)).next(()=>t.localDocuments.getLocalViewOfDocuments(r,a,u)).next(()=>a)}).then(r=>(t.Ji=s,r))}function Ow(n,e,t){let i=ae(),s=ae();return t.forEach(r=>i=i.add(r)),e.getEntries(n,i).next(r=>{let o=zt();return t.forEach((l,a)=>{const u=r.get(l);a.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(l)),a.isNoDocument()&&a.version.isEqual(te.min())?(e.removeEntry(l,a.readTime),o=o.insert(l,a)):!u.isValidDocument()||a.version.compareTo(u.version)>0||a.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(a),o=o.insert(l,a)):Q("LocalStore","Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",a.version)}),{nr:o,sr:s}})}function Pw(n,e){const t=ie(n);return t.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function Rw(n,e){const t=ie(n);return t.persistence.runTransaction("Allocate target","readwrite",i=>{let s;return t.Bs.getTargetData(i,e).next(r=>r?(s=r,U.resolve(s)):t.Bs.allocateTargetId(i).next(o=>(s=new Kt(e,o,"TargetPurposeListen",i.currentSequenceNumber),t.Bs.addTargetData(i,s).next(()=>s))))}).then(i=>{const s=t.Ji.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Ji=t.Ji.insert(i.targetId,i),t.Yi.set(e,i.targetId)),i})}async function aa(n,e,t){const i=ie(n),s=i.Ji.get(e),r=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",r,o=>i.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!ms(o))throw o;Q("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}i.Ji=i.Ji.remove(e),i.Yi.delete(s.target)}function dc(n,e,t){const i=ie(n);let s=te.min(),r=ae();return i.persistence.runTransaction("Execute query","readonly",o=>function(l,a,u){const c=ie(l),h=c.Yi.get(u);return h!==void 0?U.resolve(c.Ji.get(h)):c.Bs.getTargetData(a,u)}(i,o,Ft(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,i.Bs.getMatchingKeysForTargetId(o,l.targetId).next(a=>{r=a})}).next(()=>i.Hi.getDocumentsMatchingQuery(o,e,t?s:te.min(),t?r:ae())).next(l=>(jw(i,k_(e),l),{documents:l,ir:r})))}function jw(n,e,t){let i=n.Xi.get(e)||te.min();t.forEach((s,r)=>{r.readTime.compareTo(i)>0&&(i=r.readTime)}),n.Xi.set(e,i)}class pc{constructor(){this.activeTargetIds=O_()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Uw{constructor(){this.Hr=new pc,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,t,i){this.Jr[e]=t}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new pc,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fw{Yr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){Q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){Q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vs=null;function To(){return Vs===null?Vs=268435456+Math.round(2147483648*Math.random()):Vs++,"0x"+Vs.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vw{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $e="WebChannelConnection";class xw extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.mo=t+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,t,i,s,r){const o=To(),l=this.To(e,t);Q("RestConnection",`Sending RPC '${e}' ${o}:`,l,i);const a={};return this.Eo(a,s,r),this.Ao(e,l,a,i).then(u=>(Q("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw ni("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",l,"request:",i),u})}vo(e,t,i,s,r,o){return this.Io(e,t,i,s,r)}Eo(e,t,i){e["X-Goog-Api-Client"]="gl-js/ fire/"+fi,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,r)=>e[r]=s),i&&i.headers.forEach((s,r)=>e[r]=s)}To(e,t){const i=zw[e];return`${this.mo}/v1/${t}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,t,i,s){const r=To();return new Promise((o,l)=>{const a=new Wv;a.setWithCredentials(!0),a.listenOnce(Qv.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case bo.NO_ERROR:const c=a.getResponseJson();Q($e,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(c)),o(c);break;case bo.TIMEOUT:Q($e,`RPC '${e}' ${r} timed out`),l(new $(O.DEADLINE_EXCEEDED,"Request time out"));break;case bo.HTTP_ERROR:const h=a.getStatus();if(Q($e,`RPC '${e}' ${r} failed with status:`,h,"response text:",a.getResponseText()),h>0){let d=a.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const p=function(v){const _=v.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(_)>=0?_:O.UNKNOWN}(f.status);l(new $(p,f.message))}else l(new $(O.UNKNOWN,"Server responded with status "+a.getStatus()))}else l(new $(O.UNAVAILABLE,"Connection failed."));break;default:J()}}finally{Q($e,`RPC '${e}' ${r} completed.`)}});const u=JSON.stringify(s);Q($e,`RPC '${e}' ${r} sending request:`,s),a.send(t,"POST",u,i,15)})}Ro(e,t,i){const s=To(),r=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=$v(),l=Gv(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(a.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(a.xmlHttpFactory=new Yv({})),this.Eo(a.initMessageHeaders,t,i),a.encodeInitMessageHeaders=!0;const c=r.join("");Q($e,`Creating RPC '${e}' stream ${s}: ${c}`,a);const h=o.createWebChannel(c,a);let d=!1,f=!1;const p=new Vw({ro:_=>{f?Q($e,`Not sending because RPC '${e}' stream ${s} is closed:`,_):(d||(Q($e,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),Q($e,`RPC '${e}' stream ${s} sending:`,_),h.send(_))},oo:()=>h.close()}),v=(_,T,y)=>{_.listen(T,C=>{try{y(C)}catch(S){setTimeout(()=>{throw S},0)}})};return v(h,js.EventType.OPEN,()=>{f||Q($e,`RPC '${e}' stream ${s} transport opened.`)}),v(h,js.EventType.CLOSE,()=>{f||(f=!0,Q($e,`RPC '${e}' stream ${s} transport closed`),p.wo())}),v(h,js.EventType.ERROR,_=>{f||(f=!0,ni($e,`RPC '${e}' stream ${s} transport errored:`,_),p.wo(new $(O.UNAVAILABLE,"The operation could not be completed")))}),v(h,js.EventType.MESSAGE,_=>{var T;if(!f){const y=_.data[0];Me(!!y);const C=y,S=C.error||((T=C[0])===null||T===void 0?void 0:T.error);if(S){Q($e,`RPC '${e}' stream ${s} received error:`,S);const M=S.status;let R=function(N){const g=De[N];if(g!==void 0)return kd(g)}(M),k=S.message;R===void 0&&(R=O.INTERNAL,k="Unknown error status: "+M+" with message "+S.message),f=!0,p.wo(new $(R,k)),h.close()}else Q($e,`RPC '${e}' stream ${s} received:`,y),p._o(y)}}),v(l,Kv.STAT_EVENT,_=>{_.stat===Hu.PROXY?Q($e,`RPC '${e}' stream ${s} detected buffering proxy`):_.stat===Hu.NOPROXY&&Q($e,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{p.fo()},0),p}}function Eo(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xr(n){return new Z_(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(e,t,i=1e3,s=1.5,r=6e4){this.ii=e,this.timerId=t,this.Po=i,this.bo=s,this.Vo=r,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const t=Math.floor(this.So+this.ko()),i=Math.max(0,Date.now()-this.Co),s=Math.max(0,t-i);s>0&&Q("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.So} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,s,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(e,t,i,s,r,o,l,a){this.ii=e,this.$o=i,this.Oo=s,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=a,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new Fd(e,t)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,t){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():t&&t.code===O.RESOURCE_EXHAUSTED?(Ut(t.toString()),Ut("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):t&&t.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(t)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),t=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.Fo===t&&this.Zo(i,s)},i=>{e(()=>{const s=new $(O.UNKNOWN,"Fetching auth token failed: "+i.message);return this.tu(s)})})}Zo(e,t){const i=this.Xo(this.Fo);this.stream=this.eu(e,t),this.stream.uo(()=>{i(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(s=>{i(()=>this.tu(s))}),this.stream.onMessage(s=>{i(()=>this.onMessage(s))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return Q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return t=>{this.ii.enqueueAndForget(()=>this.Fo===e?t():(Q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Bw extends zd{constructor(e,t,i,s,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,s,o),this.serializer=r}eu(e,t){return this.connection.Ro("Listen",e,t)}onMessage(e){this.qo.reset();const t=nw(this.serializer,e),i=function(s){if(!("targetChange"in s))return te.min();const r=s.targetChange;return r.targetIds&&r.targetIds.length?te.min():r.readTime?Mt(r.readTime):te.min()}(e);return this.listener.nu(t,i)}su(e){const t={};t.database=oa(this.serializer),t.addTarget=function(s,r){let o;const l=r.target;if(o=Zo(l)?{documents:rw(s,l)}:{query:ow(s,l)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0){o.resumeToken=Ad(s,r.resumeToken);const a=ia(s,r.expectedCount);a!==null&&(o.expectedCount=a)}else if(r.snapshotVersion.compareTo(te.min())>0){o.readTime=yr(s,r.snapshotVersion.toTimestamp());const a=ia(s,r.expectedCount);a!==null&&(o.expectedCount=a)}return o}(this.serializer,e);const i=lw(this.serializer,e);i&&(t.labels=i),this.Wo(t)}iu(e){const t={};t.database=oa(this.serializer),t.removeTarget=e,this.Wo(t)}}class qw extends zd{constructor(e,t,i,s,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,s,o),this.serializer=r,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,t){return this.connection.Ro("Write",e,t)}onMessage(e){if(Me(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const t=sw(e.writeResults,e.commitTime),i=Mt(e.commitTime);return this.listener.cu(i,t)}return Me(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=oa(this.serializer),this.Wo(e)}uu(e){const t={streamToken:this.lastStreamToken,writes:e.map(i=>iw(this.serializer,i))};this.Wo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hw extends class{}{constructor(e,t,i,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=s,this.lu=!1}fu(){if(this.lu)throw new $(O.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,t,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,r])=>this.connection.Io(e,t,i,s,r)).catch(s=>{throw s.name==="FirebaseError"?(s.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new $(O.UNKNOWN,s.toString())})}vo(e,t,i,s){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.vo(e,t,i,r,o,s)).catch(r=>{throw r.name==="FirebaseError"?(r.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new $(O.UNKNOWN,r.toString())})}terminate(){this.lu=!0}}class $w{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(Ut(t),this.mu=!1):Q("OnlineStateTracker",t)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gw{constructor(e,t,i,s,r){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=r,this.Pu.Yr(o=>{i.enqueueAndForget(async()=>{On(this)&&(Q("RemoteStore","Restarting streams for network reachability change."),await async function(l){const a=ie(l);a.vu.add(4),await _s(a),a.bu.set("Unknown"),a.vu.delete(4),await Zr(a)}(this))})}),this.bu=new $w(i,s)}}async function Zr(n){if(On(n))for(const e of n.Ru)await e(!0)}async function _s(n){for(const e of n.Ru)await e(!1)}function Vd(n,e){const t=ie(n);t.Au.has(e.targetId)||(t.Au.set(e.targetId,e),fl(t)?hl(t):mi(t).Ko()&&cl(t,e))}function xd(n,e){const t=ie(n),i=mi(t);t.Au.delete(e),i.Ko()&&Bd(t,e),t.Au.size===0&&(i.Ko()?i.jo():On(t)&&t.bu.set("Unknown"))}function cl(n,e){if(n.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(te.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}mi(n).su(e)}function Bd(n,e){n.Vu.qt(e),mi(n).iu(e)}function hl(n){n.Vu=new Y_({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),le:e=>n.Au.get(e)||null,ue:()=>n.datastore.serializer.databaseId}),mi(n).start(),n.bu.gu()}function fl(n){return On(n)&&!mi(n).Uo()&&n.Au.size>0}function On(n){return ie(n).vu.size===0}function qd(n){n.Vu=void 0}async function Qw(n){n.Au.forEach((e,t)=>{cl(n,e)})}async function Kw(n,e){qd(n),fl(n)?(n.bu.Iu(e),hl(n)):n.bu.set("Unknown")}async function Yw(n,e,t){if(n.bu.set("Online"),e instanceof Nd&&e.state===2&&e.cause)try{await async function(i,s){const r=s.cause;for(const o of s.targetIds)i.Au.has(o)&&(await i.remoteSyncer.rejectListen(o,r),i.Au.delete(o),i.Vu.removeTarget(o))}(n,e)}catch(i){Q("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await vr(n,i)}else if(e instanceof Gs?n.Vu.Ht(e):e instanceof Sd?n.Vu.ne(e):n.Vu.Xt(e),!t.isEqual(te.min()))try{const i=await Ud(n.localStore);t.compareTo(i)>=0&&await function(s,r){const o=s.Vu.ce(r);return o.targetChanges.forEach((l,a)=>{if(l.resumeToken.approximateByteSize()>0){const u=s.Au.get(a);u&&s.Au.set(a,u.withResumeToken(l.resumeToken,r))}}),o.targetMismatches.forEach((l,a)=>{const u=s.Au.get(l);if(!u)return;s.Au.set(l,u.withResumeToken(Ze.EMPTY_BYTE_STRING,u.snapshotVersion)),Bd(s,l);const c=new Kt(u.target,l,a,u.sequenceNumber);cl(s,c)}),s.remoteSyncer.applyRemoteEvent(o)}(n,t)}catch(i){Q("RemoteStore","Failed to raise snapshot:",i),await vr(n,i)}}async function vr(n,e,t){if(!ms(e))throw e;n.vu.add(1),await _s(n),n.bu.set("Offline"),t||(t=()=>Ud(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{Q("RemoteStore","Retrying IndexedDB access"),await t(),n.vu.delete(1),await Zr(n)})}function Hd(n,e){return e().catch(t=>vr(n,t,e))}async function eo(n){const e=ie(n),t=sn(e);let i=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;Ww(e);)try{const s=await Pw(e.localStore,i);if(s===null){e.Eu.length===0&&t.jo();break}i=s.batchId,Jw(e,s)}catch(s){await vr(e,s)}$d(e)&&Gd(e)}function Ww(n){return On(n)&&n.Eu.length<10}function Jw(n,e){n.Eu.push(e);const t=sn(n);t.Ko()&&t.ou&&t.uu(e.mutations)}function $d(n){return On(n)&&!sn(n).Uo()&&n.Eu.length>0}function Gd(n){sn(n).start()}async function Xw(n){sn(n).hu()}async function Zw(n){const e=sn(n);for(const t of n.Eu)e.uu(t.mutations)}async function e1(n,e,t){const i=n.Eu.shift(),s=il.from(i,e,t);await Hd(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await eo(n)}async function t1(n,e){e&&sn(n).ou&&await async function(t,i){if(s=i.code,G_(s)&&s!==O.ABORTED){const r=t.Eu.shift();sn(t).Qo(),await Hd(t,()=>t.remoteSyncer.rejectFailedWrite(r.batchId,i)),await eo(t)}var s}(n,e),$d(n)&&Gd(n)}async function mc(n,e){const t=ie(n);t.asyncQueue.verifyOperationInProgress(),Q("RemoteStore","RemoteStore received new credentials");const i=On(t);t.vu.add(3),await _s(t),i&&t.bu.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.vu.delete(3),await Zr(t)}async function n1(n,e){const t=ie(n);e?(t.vu.delete(2),await Zr(t)):e||(t.vu.add(2),await _s(t),t.bu.set("Unknown"))}function mi(n){return n.Su||(n.Su=function(e,t,i){const s=ie(e);return s.fu(),new Bw(t,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{uo:Qw.bind(null,n),ao:Kw.bind(null,n),nu:Yw.bind(null,n)}),n.Ru.push(async e=>{e?(n.Su.Qo(),fl(n)?hl(n):n.bu.set("Unknown")):(await n.Su.stop(),qd(n))})),n.Su}function sn(n){return n.Du||(n.Du=function(e,t,i){const s=ie(e);return s.fu(),new qw(t,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{uo:Xw.bind(null,n),ao:t1.bind(null,n),au:Zw.bind(null,n),cu:e1.bind(null,n)}),n.Ru.push(async e=>{e?(n.Du.Qo(),await eo(n)):(await n.Du.stop(),n.Eu.length>0&&(Q("RemoteStore",`Stopping write stream with ${n.Eu.length} pending writes`),n.Eu=[]))})),n.Du}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(e,t,i,s,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new Xt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,t,i,s,r){const o=Date.now()+i,l=new dl(e,t,o,s,r);return l.start(i),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function pl(n,e){if(Ut("AsyncQueue",`${e}: ${n}`),ms(n))return new $(O.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e){this.comparator=e?(t,i)=>e(t,i)||K.comparator(t.key,i.key):(t,i)=>K.comparator(t.key,i.key),this.keyedMap=Mi(),this.sortedSet=new Se(this.comparator)}static emptySet(e){return new Wn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,i)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Wn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,r=i.getNext().key;if(!s.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new Wn;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(){this.Cu=new Se(K.comparator)}track(e){const t=e.doc.key,i=this.Cu.get(t);i?e.type!==0&&i.type===3?this.Cu=this.Cu.insert(t,e):e.type===3&&i.type!==1?this.Cu=this.Cu.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.Cu=this.Cu.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.Cu=this.Cu.remove(t):e.type===1&&i.type===2?this.Cu=this.Cu.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):J():this.Cu=this.Cu.insert(t,e)}xu(){const e=[];return this.Cu.inorderTraversal((t,i)=>{e.push(i)}),e}}class ai{constructor(e,t,i,s,r,o,l,a,u){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=a,this.hasCachedResults=u}static fromInitialDocuments(e,t,i,s,r){const o=[];return t.forEach(l=>{o.push({type:0,doc:l})}),new ai(e,t,Wn.emptySet(t),o,i,s,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Qr(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==i[s].type||!t[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i1{constructor(){this.Nu=void 0,this.listeners=[]}}class s1{constructor(){this.queries=new gi(e=>pd(e),Qr),this.onlineState="Unknown",this.ku=new Set}}async function Qd(n,e){const t=ie(n),i=e.query;let s=!1,r=t.queries.get(i);if(r||(s=!0,r=new i1),s)try{r.Nu=await t.onListen(i)}catch(o){const l=pl(o,`Initialization of query '${na(e.query)}' failed`);return void e.onError(l)}t.queries.set(i,r),r.listeners.push(e),e.Mu(t.onlineState),r.Nu&&e.$u(r.Nu)&&gl(t)}async function Kd(n,e){const t=ie(n),i=e.query;let s=!1;const r=t.queries.get(i);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),s=r.listeners.length===0)}if(s)return t.queries.delete(i),t.onUnlisten(i)}function r1(n,e){const t=ie(n);let i=!1;for(const s of e){const r=s.query,o=t.queries.get(r);if(o){for(const l of o.listeners)l.$u(s)&&(i=!0);o.Nu=s}}i&&gl(t)}function o1(n,e,t){const i=ie(n),s=i.queries.get(e);if(s)for(const r of s.listeners)r.onError(t);i.queries.delete(e)}function gl(n){n.ku.forEach(e=>{e.next()})}class Yd{constructor(e,t,i){this.query=e,this.Ou=t,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=i||{}}$u(e){if(!this.options.includeMetadataChanges){const i=[];for(const s of e.docChanges)s.type!==3&&i.push(s);e=new ai(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),t=!0):this.qu(e,this.onlineState)&&(this.Uu(e),t=!0),this.Bu=e,t}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let t=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),t=!0),t}qu(e,t){if(!e.fromCache)return!0;const i=t!=="Offline";return(!this.options.Ku||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const t=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Uu(e){e=ai.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(e){this.key=e}}class Jd{constructor(e){this.key=e}}class a1{constructor(e,t){this.query=e,this.Yu=t,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=ae(),this.mutatedKeys=ae(),this.tc=gd(e),this.ec=new Wn(this.tc)}get nc(){return this.Yu}sc(e,t){const i=t?t.ic:new yc,s=t?t.ec:this.ec;let r=t?t.mutatedKeys:this.mutatedKeys,o=s,l=!1;const a=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((c,h)=>{const d=s.get(c),f=Kr(this.query,h)?h:null,p=!!d&&this.mutatedKeys.has(d.key),v=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let _=!1;d&&f?d.data.isEqual(f.data)?p!==v&&(i.track({type:3,doc:f}),_=!0):this.rc(d,f)||(i.track({type:2,doc:f}),_=!0,(a&&this.tc(f,a)>0||u&&this.tc(f,u)<0)&&(l=!0)):!d&&f?(i.track({type:0,doc:f}),_=!0):d&&!f&&(i.track({type:1,doc:d}),_=!0,(a||u)&&(l=!0)),_&&(f?(o=o.add(f),r=v?r.add(c):r.delete(c)):(o=o.delete(c),r=r.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),r=r.delete(c.key),i.track({type:1,doc:c})}return{ec:o,ic:i,zi:l,mutatedKeys:r}}rc(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i){const s=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const r=e.ic.xu();r.sort((u,c)=>function(h,d){const f=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return J()}};return f(h)-f(d)}(u.type,c.type)||this.tc(u.doc,c.doc)),this.oc(i);const o=t?this.uc():[],l=this.Zu.size===0&&this.current?1:0,a=l!==this.Xu;return this.Xu=l,r.length!==0||a?{snapshot:new ai(this.query,e.ec,s,r,e.mutatedKeys,l===0,a,!1,!!i&&i.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new yc,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(t=>this.Yu=this.Yu.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Yu=this.Yu.delete(t)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=ae(),this.ec.forEach(i=>{this.ac(i.key)&&(this.Zu=this.Zu.add(i.key))});const t=[];return e.forEach(i=>{this.Zu.has(i)||t.push(new Jd(i))}),this.Zu.forEach(i=>{e.has(i)||t.push(new Wd(i))}),t}hc(e){this.Yu=e.ir,this.Zu=ae();const t=this.sc(e.documents);return this.applyChanges(t,!0)}lc(){return ai.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class l1{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class u1{constructor(e){this.key=e,this.fc=!1}}class c1{constructor(e,t,i,s,r,o){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new gi(l=>pd(l),Qr),this._c=new Map,this.mc=new Set,this.gc=new Se(K.comparator),this.yc=new Map,this.Ic=new al,this.Tc={},this.Ec=new Map,this.Ac=oi.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function h1(n,e){const t=b1(n);let i,s;const r=t.wc.get(e);if(r)i=r.targetId,t.sharedClientState.addLocalQueryTarget(i),s=r.view.lc();else{const o=await Rw(t.localStore,Ft(e)),l=t.sharedClientState.addLocalQueryTarget(o.targetId);i=o.targetId,s=await f1(t,e,i,l==="current",o.resumeToken),t.isPrimaryClient&&Vd(t.remoteStore,o)}return s}async function f1(n,e,t,i,s){n.Rc=(h,d,f)=>async function(p,v,_,T){let y=v.view.sc(_);y.zi&&(y=await dc(p.localStore,v.query,!1).then(({documents:M})=>v.view.sc(M,y)));const C=T&&T.targetChanges.get(v.targetId),S=v.view.applyChanges(y,p.isPrimaryClient,C);return _c(p,v.targetId,S.cc),S.snapshot}(n,h,d,f);const r=await dc(n.localStore,e,!0),o=new a1(e,r.ir),l=o.sc(r.documents),a=vs.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",s),u=o.applyChanges(l,n.isPrimaryClient,a);_c(n,t,u.cc);const c=new l1(e,t,o);return n.wc.set(e,c),n._c.has(t)?n._c.get(t).push(e):n._c.set(t,[e]),u.snapshot}async function d1(n,e){const t=ie(n),i=t.wc.get(e),s=t._c.get(i.targetId);if(s.length>1)return t._c.set(i.targetId,s.filter(r=>!Qr(r,e))),void t.wc.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(i.targetId),t.sharedClientState.isActiveQueryTarget(i.targetId)||await aa(t.localStore,i.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(i.targetId),xd(t.remoteStore,i.targetId),la(t,i.targetId)}).catch(gs)):(la(t,i.targetId),await aa(t.localStore,i.targetId,!0))}async function p1(n,e,t){const i=I1(n);try{const s=await function(r,o){const l=ie(r),a=Re.now(),u=o.reduce((d,f)=>d.add(f.key),ae());let c,h;return l.persistence.runTransaction("Locally write mutations","readwrite",d=>{let f=zt(),p=ae();return l.Zi.getEntries(d,u).next(v=>{f=v,f.forEach((_,T)=>{T.isValidDocument()||(p=p.add(_))})}).next(()=>l.localDocuments.getOverlayedDocuments(d,f)).next(v=>{c=v;const _=[];for(const T of o){const y=x_(T,c.get(T.key).overlayedDocument);y!=null&&_.push(new Ln(T.key,y,od(y.value.mapValue),vt.exists(!0)))}return l.mutationQueue.addMutationBatch(d,a,_,o)}).next(v=>{h=v;const _=v.applyToLocalDocumentSet(c,p);return l.documentOverlayCache.saveOverlays(d,v.batchId,_)})}).then(()=>({batchId:h.batchId,changes:yd(c)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(s.batchId),function(r,o,l){let a=r.Tc[r.currentUser.toKey()];a||(a=new Se(pe)),a=a.insert(o,l),r.Tc[r.currentUser.toKey()]=a}(i,s.batchId,t),await ws(i,s.changes),await eo(i.remoteStore)}catch(s){const r=pl(s,"Failed to persist write");t.reject(r)}}async function Xd(n,e){const t=ie(n);try{const i=await Lw(t.localStore,e);e.targetChanges.forEach((s,r)=>{const o=t.yc.get(r);o&&(Me(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.fc=!0:s.modifiedDocuments.size>0?Me(o.fc):s.removedDocuments.size>0&&(Me(o.fc),o.fc=!1))}),await ws(t,i,e)}catch(i){await gs(i)}}function vc(n,e,t){const i=ie(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const s=[];i.wc.forEach((r,o)=>{const l=o.view.Mu(e);l.snapshot&&s.push(l.snapshot)}),function(r,o){const l=ie(r);l.onlineState=o;let a=!1;l.queries.forEach((u,c)=>{for(const h of c.listeners)h.Mu(o)&&(a=!0)}),a&&gl(l)}(i.eventManager,e),s.length&&i.dc.nu(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function g1(n,e,t){const i=ie(n);i.sharedClientState.updateQueryState(e,"rejected",t);const s=i.yc.get(e),r=s&&s.key;if(r){let o=new Se(K.comparator);o=o.insert(r,Qe.newNoDocument(r,te.min()));const l=ae().add(r),a=new Jr(te.min(),new Map,new Se(pe),o,l);await Xd(i,a),i.gc=i.gc.remove(r),i.yc.delete(e),ml(i)}else await aa(i.localStore,e,!1).then(()=>la(i,e,t)).catch(gs)}async function m1(n,e){const t=ie(n),i=e.batch.batchId;try{const s=await Dw(t.localStore,e);ep(t,i,null),Zd(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await ws(t,s)}catch(s){await gs(s)}}async function y1(n,e,t){const i=ie(n);try{const s=await function(r,o){const l=ie(r);return l.persistence.runTransaction("Reject batch","readwrite-primary",a=>{let u;return l.mutationQueue.lookupMutationBatch(a,o).next(c=>(Me(c!==null),u=c.keys(),l.mutationQueue.removeMutationBatch(a,c))).next(()=>l.mutationQueue.performConsistencyCheck(a)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(a,u,o)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(a,u)).next(()=>l.localDocuments.getDocuments(a,u))})}(i.localStore,e);ep(i,e,t),Zd(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await ws(i,s)}catch(s){await gs(s)}}function Zd(n,e){(n.Ec.get(e)||[]).forEach(t=>{t.resolve()}),n.Ec.delete(e)}function ep(n,e,t){const i=ie(n);let s=i.Tc[i.currentUser.toKey()];if(s){const r=s.get(e);r&&(t?r.reject(t):r.resolve(),s=s.remove(e)),i.Tc[i.currentUser.toKey()]=s}}function la(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n._c.get(e))n.wc.delete(i),t&&n.dc.Pc(i,t);n._c.delete(e),n.isPrimaryClient&&n.Ic.Is(e).forEach(i=>{n.Ic.containsKey(i)||tp(n,i)})}function tp(n,e){n.mc.delete(e.path.canonicalString());const t=n.gc.get(e);t!==null&&(xd(n.remoteStore,t),n.gc=n.gc.remove(e),n.yc.delete(t),ml(n))}function _c(n,e,t){for(const i of t)i instanceof Wd?(n.Ic.addReference(i.key,e),v1(n,i)):i instanceof Jd?(Q("SyncEngine","Document no longer in limbo: "+i.key),n.Ic.removeReference(i.key,e),n.Ic.containsKey(i.key)||tp(n,i.key)):J()}function v1(n,e){const t=e.key,i=t.path.canonicalString();n.gc.get(t)||n.mc.has(i)||(Q("SyncEngine","New document in limbo: "+t),n.mc.add(i),ml(n))}function ml(n){for(;n.mc.size>0&&n.gc.size<n.maxConcurrentLimboResolutions;){const e=n.mc.values().next().value;n.mc.delete(e);const t=new K(Ce.fromString(e)),i=n.Ac.next();n.yc.set(i,new u1(t)),n.gc=n.gc.insert(t,i),Vd(n.remoteStore,new Kt(Ft($r(t.path)),i,"TargetPurposeLimboResolution",Ya.ct))}}async function ws(n,e,t){const i=ie(n),s=[],r=[],o=[];i.wc.isEmpty()||(i.wc.forEach((l,a)=>{o.push(i.Rc(a,e,t).then(u=>{if((u||t)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(a.targetId,u!=null&&u.fromCache?"not-current":"current"),u){s.push(u);const c=ul.Li(a.targetId,u);r.push(c)}}))}),await Promise.all(o),i.dc.nu(s),await async function(l,a){const u=ie(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>U.forEach(a,h=>U.forEach(h.Fi,d=>u.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>U.forEach(h.Bi,d=>u.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!ms(c))throw c;Q("LocalStore","Failed to update sequence numbers: "+c)}for(const c of a){const h=c.targetId;if(!c.fromCache){const d=u.Ji.get(h),f=d.snapshotVersion,p=d.withLastLimboFreeSnapshotVersion(f);u.Ji=u.Ji.insert(h,p)}}}(i.localStore,r))}async function _1(n,e){const t=ie(n);if(!t.currentUser.isEqual(e)){Q("SyncEngine","User change. New user:",e.toKey());const i=await jd(t.localStore,e);t.currentUser=e,function(s,r){s.Ec.forEach(o=>{o.forEach(l=>{l.reject(new $(O.CANCELLED,r))})}),s.Ec.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await ws(t,i.er)}}function w1(n,e){const t=ie(n),i=t.yc.get(e);if(i&&i.fc)return ae().add(i.key);{let s=ae();const r=t._c.get(e);if(!r)return s;for(const o of r){const l=t.wc.get(o);s=s.unionWith(l.view.nc)}return s}}function b1(n){const e=ie(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Xd.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=w1.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=g1.bind(null,e),e.dc.nu=r1.bind(null,e.eventManager),e.dc.Pc=o1.bind(null,e.eventManager),e}function I1(n){const e=ie(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=m1.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=y1.bind(null,e),e}class wc{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Xr(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return Aw(this.persistence,new Sw,e.initialUser,this.serializer)}createPersistence(e){return new Mw(ll.zs,this.serializer)}createSharedClientState(e){return new Uw}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class T1{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>vc(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=_1.bind(null,this.syncEngine),await n1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new s1}createDatastore(e){const t=Xr(e.databaseInfo.databaseId),i=(s=e.databaseInfo,new xw(s));var s;return function(r,o,l,a){return new Hw(r,o,l,a)}(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return t=this.localStore,i=this.datastore,s=e.asyncQueue,r=l=>vc(this.syncEngine,l,0),o=gc.D()?new gc:new Fw,new Gw(t,i,s,r,o);var t,i,s,r,o}createSyncEngine(e,t){return function(i,s,r,o,l,a,u){const c=new c1(i,s,r,o,l,a);return u&&(c.vc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=ie(e);Q("RemoteStore","RemoteStore shutting down."),t.vu.add(5),await _s(t),t.Pu.shutdown(),t.bu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):Ut("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E1{constructor(e,t,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=s,this.user=Ge.UNAUTHENTICATED,this.clientId=id.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async r=>{Q("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(i,r=>(Q("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new $(O.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Xt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=pl(t,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function Co(n,e){n.asyncQueue.verifyOperationInProgress(),Q("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener(async s=>{i.isEqual(s)||(await jd(e.localStore,s),i=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function bc(n,e){n.asyncQueue.verifyOperationInProgress();const t=await M1(n);Q("FirestoreClient","Initializing OnlineComponentProvider");const i=await n.getConfiguration();await e.initialize(t,i),n.setCredentialChangeListener(s=>mc(e.remoteStore,s)),n.setAppCheckTokenChangeListener((s,r)=>mc(e.remoteStore,r)),n._onlineComponents=e}function C1(n){return n.name==="FirebaseError"?n.code===O.FAILED_PRECONDITION||n.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function M1(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){Q("FirestoreClient","Using user provided OfflineComponentProvider");try{await Co(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!C1(t))throw t;ni("Error using user provided cache. Falling back to memory cache: "+t),await Co(n,new wc)}}else Q("FirestoreClient","Using default OfflineComponentProvider"),await Co(n,new wc);return n._offlineComponents}async function ip(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(Q("FirestoreClient","Using user provided OnlineComponentProvider"),await bc(n,n._uninitializedComponentsProvider._online)):(Q("FirestoreClient","Using default OnlineComponentProvider"),await bc(n,new T1))),n._onlineComponents}function k1(n){return ip(n).then(e=>e.syncEngine)}async function ua(n){const e=await ip(n),t=e.eventManager;return t.onListen=h1.bind(null,e.syncEngine),t.onUnlisten=d1.bind(null,e.syncEngine),t}function S1(n,e,t={}){const i=new Xt;return n.asyncQueue.enqueueAndForget(async()=>function(s,r,o,l,a){const u=new np({next:h=>{r.enqueueAndForget(()=>Kd(s,c));const d=h.docs.has(o);!d&&h.fromCache?a.reject(new $(O.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&l&&l.source==="server"?a.reject(new $(O.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):a.resolve(h)},error:h=>a.reject(h)}),c=new Yd($r(o.path),u,{includeMetadataChanges:!0,Ku:!0});return Qd(s,c)}(await ua(n),n.asyncQueue,e,t,i)),i.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sp(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rp(n,e,t){if(!t)throw new $(O.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function N1(n,e,t,i){if(e===!0&&i===!0)throw new $(O.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Tc(n){if(!K.isDocumentKey(n))throw new $(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Ec(n){if(K.isDocumentKey(n))throw new $(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function to(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":J()}function kt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new $(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=to(n);throw new $(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new $(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new $(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}N1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=sp((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new $(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new $(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new $(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,i=e.experimentalLongPollingOptions,t.timeoutSeconds===i.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var t,i}}class no{constructor(e,t,i,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Cc({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new $(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new $(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Cc(e),e.credentials!==void 0&&(this._authCredentials=function(t){if(!t)return new Xv;switch(t.type){case"firstParty":return new n_(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new $(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Ic.get(e);t&&(Q("ComponentProvider","Removing Datastore"),Ic.delete(e),t.terminate())}(this),Promise.resolve()}}function A1(n,e,t,i={}){var s;const r=(n=kt(n,no))._getSettings(),o=`${e}:${t}`;if(r.host!=="firestore.googleapis.com"&&r.host!==o&&ni("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),i.mockUserToken){let l,a;if(typeof i.mockUserToken=="string")l=i.mockUserToken,a=Ge.MOCK_USER;else{l=My(i.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const u=i.mockUserToken.sub||i.mockUserToken.user_id;if(!u)throw new $(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Ge(u)}n._authCredentials=new Zv(new nd(l,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Zt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new it(this.firestore,e,this._key)}}class Pn{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Pn(this.firestore,e,this._query)}}class Zt extends Pn{constructor(e,t,i){super(e,t,$r(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new it(this.firestore,null,new K(e))}withConverter(e){return new Zt(this.firestore,e,this._path)}}function Mc(n,e,...t){if(n=st(n),rp("collection","path",e),n instanceof no){const i=Ce.fromString(e,...t);return Ec(i),new Zt(n,null,i)}{if(!(n instanceof it||n instanceof Zt))throw new $(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Ce.fromString(e,...t));return Ec(i),new Zt(n.firestore,null,i)}}function bt(n,e,...t){if(n=st(n),arguments.length===1&&(e=id.A()),rp("doc","path",e),n instanceof no){const i=Ce.fromString(e,...t);return Tc(i),new it(n,null,new K(i))}{if(!(n instanceof it||n instanceof Zt))throw new $(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Ce.fromString(e,...t));return Tc(i),new it(n.firestore,n instanceof Zt?n.converter:null,new K(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D1{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new Fd(this,"async_queue_retry"),this.Xc=()=>{const t=Eo();t&&Q("AsyncQueue","Visibility state changed to "+t.visibilityState),this.qo.Mo()};const e=Eo();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const t=Eo();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const t=new Xt;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!ms(e))throw e;Q("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const t=this.Gc.then(()=>(this.Hc=!0,e().catch(i=>{this.Wc=i,this.Hc=!1;const s=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(i);throw Ut("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.Hc=!1,i))));return this.Gc=t,t}enqueueAfterDelay(e,t,i){this.Zc(),this.Yc.indexOf(e)>-1&&(t=0);const s=dl.createAndSchedule(this,e,t,i,r=>this.na(r));return this.zc.push(s),s}Zc(){this.Wc&&J()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const t of this.zc)if(t.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(const t of this.zc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const t=this.zc.indexOf(e);this.zc.splice(t,1)}}function kc(n){return function(e,t){if(typeof e!="object"||e===null)return!1;const i=e;for(const s of t)if(s in i&&typeof i[s]=="function")return!0;return!1}(n,["next","error","complete"])}class Nn extends no{constructor(e,t,i,s){super(e,t,i,s),this.type="firestore",this._queue=new D1,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||op(this),this._firestoreClient.terminate()}}function L1(n,e){const t=typeof n=="object"?n:Wh(),i=typeof n=="string"?n:e||"(default)",s=Ca(t,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=Ey("firestore");r&&A1(s,...r)}return s}function yl(n){return n._firestoreClient||op(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function op(n){var e,t,i;const s=n._freezeSettings(),r=function(o,l,a,u){return new p_(o,l,a,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,sp(u.experimentalLongPollingOptions),u.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._firestoreClient=new E1(n._authCredentials,n._appCheckCredentials,n._queue,r),((t=s.cache)===null||t===void 0?void 0:t._offlineComponentProvider)&&((i=s.cache)===null||i===void 0?void 0:i._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.cache.kind,_offline:s.cache._offlineComponentProvider,_online:s.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e){this._byteString=e}static fromBase64String(e){try{return new li(Ze.fromBase64String(e))}catch(t){throw new $(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new li(Ze.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new $(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ke(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new $(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new $(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return pe(this._lat,e._lat)||pe(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O1=/^__.*__$/;class P1{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new Ln(e,this.data,this.fieldMask,t,this.fieldTransforms):new ys(e,this.data,t,this.fieldTransforms)}}function ap(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw J()}}class bl{constructor(e,t,i,s,r,o){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=s,r===void 0&&this.ua(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new bl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.aa({path:i,la:!1});return s.fa(e),s}da(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.aa({path:i,la:!1});return s.ua(),s}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return _r(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(ap(this.ca)&&O1.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class R1{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||Xr(e)}ya(e,t,i,s=!1){return new bl({ca:e,methodName:t,ga:i,path:Ke.emptyPath(),la:!1,ma:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Il(n){const e=n._freezeSettings(),t=Xr(n._databaseId);return new R1(n._databaseId,!!e.ignoreUndefinedProperties,t)}function lp(n,e,t,i,s,r={}){const o=n.ya(r.merge||r.mergeFields?2:0,e,t,s);hp("Data must be an object, but it was:",o,i);const l=up(i,o);let a,u;if(r.merge)a=new mt(o.fieldMask),u=o.fieldTransforms;else if(r.mergeFields){const c=[];for(const h of r.mergeFields){const d=U1(e,h,t);if(!o.contains(d))throw new $(O.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);z1(c,d)||c.push(d)}a=new mt(c),u=o.fieldTransforms.filter(h=>a.covers(h.field))}else a=null,u=o.fieldTransforms;return new P1(new ft(l),a,u)}class Tl extends _l{_toFieldTransform(e){return new U_(e.path,new Ji)}isEqual(e){return e instanceof Tl}}function j1(n,e,t,i=!1){return El(t,n.ya(i?4:3,e))}function El(n,e){if(cp(n=st(n)))return hp("Unsupported field value:",e,n),up(n,e);if(n instanceof _l)return function(t,i){if(!ap(i.ca))throw i._a(`${t._methodName}() can only be used with update() and set()`);if(!i.path)throw i._a(`${t._methodName}() is not currently supported inside arrays`);const s=t._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(t,i){const s=[];let r=0;for(const o of t){let l=El(o,i.wa(r));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),r++}return{arrayValue:{values:s}}}(n,e)}return function(t,i){if((t=st(t))===null)return{nullValue:"NULL_VALUE"};if(typeof t=="number")return P_(i.serializer,t);if(typeof t=="boolean")return{booleanValue:t};if(typeof t=="string")return{stringValue:t};if(t instanceof Date){const s=Re.fromDate(t);return{timestampValue:yr(i.serializer,s)}}if(t instanceof Re){const s=new Re(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:yr(i.serializer,s)}}if(t instanceof wl)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof li)return{bytesValue:Ad(i.serializer,t._byteString)};if(t instanceof it){const s=i.databaseId,r=t.firestore._databaseId;if(!r.isEqual(s))throw i._a(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:ol(t.firestore._databaseId||i.databaseId,t._key.path)}}throw i._a(`Unsupported field value: ${to(t)}`)}(n,e)}function up(n,e){const t={};return sd(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):di(n,(i,s)=>{const r=El(s,e.ha(i));r!=null&&(t[i]=r)}),{mapValue:{fields:t}}}function cp(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Re||n instanceof wl||n instanceof li||n instanceof it||n instanceof _l)}function hp(n,e,t){if(!cp(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const i=to(t);throw i==="an object"?e._a(n+" a custom object"):e._a(n+" "+i)}}function U1(n,e,t){if((e=st(e))instanceof vl)return e._internalPath;if(typeof e=="string")return fp(n,e);throw _r("Field path arguments must be of type string or ",n,!1,void 0,t)}const F1=new RegExp("[~\\*/\\[\\]]");function fp(n,e,t){if(e.search(F1)>=0)throw _r(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new vl(...e.split("."))._internalPath}catch{throw _r(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function _r(n,e,t,i,s){const r=i&&!i.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let a="";return(r||o)&&(a+=" (found",r&&(a+=` in field ${i}`),o&&(a+=` in document ${s}`),a+=")"),new $(O.INVALID_ARGUMENT,l+n+a)}function z1(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{constructor(e,t,i,s,r){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new it(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new V1(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Cl("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class V1 extends dp{data(){return super.data()}}function Cl(n,e){return typeof e=="string"?fp(n,e):e instanceof vl?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x1(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new $(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ml{}class pp extends Ml{}function B1(n,e,...t){let i=[];e instanceof Ml&&i.push(e),i=i.concat(t),function(s){const r=s.filter(l=>l instanceof Sl).length,o=s.filter(l=>l instanceof kl).length;if(r>1||r>0&&o>0)throw new $(O.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const s of i)n=s._apply(n);return n}class kl extends pp{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new kl(e,t,i)}_apply(e){const t=this._parse(e);return gp(e._query,t),new Pn(e.firestore,e.converter,ea(e._query,t))}_parse(e){const t=Il(e.firestore);return function(s,r,o,l,a,u,c){let h;if(a.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new $(O.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Nc(c,u);const d=[];for(const f of c)d.push(Sc(l,s,f));h={arrayValue:{values:d}}}else h=Sc(l,s,c)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Nc(c,u),h=j1(o,r,c,u==="in"||u==="not-in");return Oe.create(a,u,h)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class Sl extends Ml{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Sl(e,t)}_parse(e){const t=this._queryConstraints.map(i=>i._parse(e)).filter(i=>i.getFilters().length>0);return t.length===1?t[0]:wt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let r=i;const o=s.getFlattenedFilters();for(const l of o)gp(r,l),r=ea(r,l)}(e._query,t),new Pn(e.firestore,e.converter,ea(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Nl extends pp{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Nl(e,t)}_apply(e){const t=function(i,s,r){if(i.startAt!==null)throw new $(O.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new $(O.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Kn(s,r);return function(l,a){if(tl(l)===null){const u=Gr(l);u!==null&&mp(l,u,a.field)}}(i,o),o}(e._query,this._field,this._direction);return new Pn(e.firestore,e.converter,function(i,s){const r=i.explicitOrderBy.concat([s]);return new pi(i.path,i.collectionGroup,r,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,t))}}function q1(n,e="asc"){const t=e,i=Cl("orderBy",n);return Nl._create(i,t)}function Sc(n,e,t){if(typeof(t=st(t))=="string"){if(t==="")throw new $(O.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!dd(e)&&t.indexOf("/")!==-1)throw new $(O.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(Ce.fromString(t));if(!K.isDocumentKey(i))throw new $(O.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return Wu(n,new K(i))}if(t instanceof it)return Wu(n,t._key);throw new $(O.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${to(t)}.`)}function Nc(n,e){if(!Array.isArray(n)||n.length===0)throw new $(O.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function gp(n,e){if(e.isInequality()){const i=Gr(n),s=e.field;if(i!==null&&!i.isEqual(s))throw new $(O.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${i.toString()}' and '${s.toString()}'`);const r=tl(n);r!==null&&mp(n,s,r)}const t=function(i,s){for(const r of i)for(const o of r.getFlattenedFilters())if(s.indexOf(o.op)>=0)return o.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new $(O.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new $(O.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function mp(n,e,t){if(!t.isEqual(e))throw new $(O.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${t.toString()}' instead.`)}class H1{convertValue(e,t="none"){switch(Sn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(kn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw J()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return di(e,(s,r)=>{i[s]=this.convertValue(r,t)}),i}convertGeoPoint(e){return new wl(Le(e.latitude),Le(e.longitude))}convertArray(e,t){return(e.values||[]).map(i=>this.convertValue(i,t))}convertServerTimestamp(e,t){switch(t){case"previous":const i=Ja(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(Ki(e));default:return null}}convertTimestamp(e){const t=nn(e);return new Re(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=Ce.fromString(e);Me(Rd(i));const s=new Yi(i.get(1),i.get(3)),r=new K(i.popFirst(5));return s.isEqual(t)||Ut(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yp(n,e,t){let i;return i=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class vp extends dp{constructor(e,t,i,s,r,o){super(e,t,i,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Qs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(Cl("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}}class Qs extends vp{data(e={}){return super.data(e)}}class $1{constructor(e,t,i,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Si(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(i=>{e.call(t,new Qs(this._firestore,this._userDataWriter,i.key,i,new Si(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new $(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let r=0;return i._snapshot.docChanges.map(o=>{const l=new Qs(i._firestore,i._userDataWriter,o.doc.key,o.doc,new Si(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter);return o.doc,{type:"added",doc:l,oldIndex:-1,newIndex:r++}})}{let r=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const l=new Qs(i._firestore,i._userDataWriter,o.doc.key,o.doc,new Si(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter);let a=-1,u=-1;return o.type!==0&&(a=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),u=r.indexOf(o.doc.key)),{type:G1(o.type),doc:l,oldIndex:a,newIndex:u}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function G1(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return J()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ks(n){n=kt(n,it);const e=kt(n.firestore,Nn);return S1(yl(e),n._key).then(t=>wp(e,n,t))}class _p extends H1{constructor(e){super(),this.firestore=e}convertBytes(e){return new li(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new it(this.firestore,null,t)}}function xs(n,e,t){n=kt(n,it);const i=kt(n.firestore,Nn),s=yp(n.converter,e,t);return Al(i,[lp(Il(i),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,vt.none())])}function Q1(n){return Al(kt(n.firestore,Nn),[new nl(n._key,vt.none())])}function K1(n,e){const t=kt(n.firestore,Nn),i=bt(n),s=yp(n.converter,e);return Al(t,[lp(Il(n.firestore),"addDoc",i._key,s,n.converter!==null,{}).toMutation(i._key,vt.exists(!1))]).then(()=>i)}function Y1(n,...e){var t,i,s;n=st(n);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||kc(e[o])||(r=e[o],o++);const l={includeMetadataChanges:r.includeMetadataChanges};if(kc(e[o])){const h=e[o];e[o]=(t=h.next)===null||t===void 0?void 0:t.bind(h),e[o+1]=(i=h.error)===null||i===void 0?void 0:i.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let a,u,c;if(n instanceof it)u=kt(n.firestore,Nn),c=$r(n._key.path),a={next:h=>{e[o]&&e[o](wp(u,n,h))},error:e[o+1],complete:e[o+2]};else{const h=kt(n,Pn);u=kt(h.firestore,Nn),c=h._query;const d=new _p(u);a={next:f=>{e[o]&&e[o](new $1(u,d,h,f))},error:e[o+1],complete:e[o+2]},x1(n._query)}return function(h,d,f,p){const v=new np(p),_=new Yd(d,v,f);return h.asyncQueue.enqueueAndForget(async()=>Qd(await ua(h),_)),()=>{v.Dc(),h.asyncQueue.enqueueAndForget(async()=>Kd(await ua(h),_))}}(yl(u),c,l,a)}function Al(n,e){return function(t,i){const s=new Xt;return t.asyncQueue.enqueueAndForget(async()=>p1(await k1(t),i,s)),s.promise}(yl(n),e)}function wp(n,e,t){const i=t.docs.get(e._key),s=new _p(n);return new vp(n,s,e._key,i,new Si(t.hasPendingWrites,t.fromCache),e.converter)}function W1(){return new Tl("serverTimestamp")}(function(n,e=!0){(function(t){fi=t})(ui),ei(new En("firestore",(t,{instanceIdentifier:i,options:s})=>{const r=t.getProvider("app").getImmediate(),o=new Nn(new e_(t.getProvider("auth-internal")),new s_(t.getProvider("app-check-internal")),function(l,a){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new $(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Yi(l.options.projectId,a)}(r,i),r);return s=Object.assign({useFetchStreams:e},s),o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),Jt($u,"3.13.0",n),Jt($u,"3.13.0","esm2017")})();const J1="/assets/bin.5b335aaf.svg",bp="/assets/enter.a43c20c1.svg";function X1(n,{from:e,to:t},i={}){const s=getComputedStyle(n),r=s.transform==="none"?"":s.transform,[o,l]=s.transformOrigin.split(" ").map(parseFloat),a=e.left+e.width*o/t.width-(t.left+o),u=e.top+e.height*l/t.height-(t.top+l),{delay:c=0,duration:h=f=>Math.sqrt(f)*120,easing:d=Sr}=i;return{delay:c,duration:on(h)?h(Math.sqrt(a*a+u*u)):h,easing:d,css:(f,p)=>{const v=p*a,_=p*u,T=f+p*e.width/t.width,y=f+p*e.height/t.height;return`transform: ${r} translate(${v}px, ${_}px) scale(${T}, ${y});`}}}function Ac(n,e,t){const i=n.slice();return i[15]=e[t].id,i[16]=e[t].sentBy,i[17]=e[t].sentByName,i[18]=e[t].sentByIdentifier,i[19]=e[t].text,i[20]=e[t].sentByProfilePic,i}function Dc(n){let e,t,i,s;function r(){return n[9](n[15],n[16])}return{c(){e=I("img"),m(e,"class","message-bin svelte-16kii77"),Ie(e.src,t=J1)||m(e,"src",t),m(e,"alt","delete message"),ne(e,"cursor","pointer")},m(o,l){b(o,e,l),i||(s=H(e,"click",r),i=!0)},p(o,l){n=o},d(o){o&&w(e),i=!1,s()}}}function Lc(n,e){let t,i,s,r,o,l,a,u,c=e[17]+"",h,d,f=e[18]+"",p,v,_,T,y=e[19]+"",C,S,M,R,k,N=z,g=e[0]===e[16]&&Dc(e);return{key:n,first:null,c(){t=I("div"),i=I("div"),s=I("img"),l=P(),a=I("abbr"),u=I("div"),h=Y(c),d=Y(`
          @`),p=Y(f),_=P(),T=I("div"),C=Y(y),S=P(),g&&g.c(),M=P(),m(s,"class","message-profile svelte-16kii77"),m(s,"width","25"),Ie(s.src,r="chatProfilePictures/"+e[20]+".svg")||m(s,"src",r),m(s,"alt",o="profile picture number:"+e[20]),m(u,"class","message-sender svelte-16kii77"),m(a,"title",v=e[16]),m(i,"class","message-header svelte-16kii77"),m(T,"class","message-content svelte-16kii77"),m(t,"class","message"),this.first=t},m(A,L){b(A,t,L),E(t,i),E(i,s),E(i,l),E(i,a),E(a,u),E(u,h),E(u,d),E(u,p),E(t,_),E(t,T),E(T,C),E(T,S),g&&g.m(T,null),E(t,M)},p(A,L){e=A,L&8&&!Ie(s.src,r="chatProfilePictures/"+e[20]+".svg")&&m(s,"src",r),L&8&&o!==(o="profile picture number:"+e[20])&&m(s,"alt",o),L&8&&c!==(c=e[17]+"")&&ge(h,c),L&8&&f!==(f=e[18]+"")&&ge(p,f),L&8&&v!==(v=e[16])&&m(a,"title",v),L&8&&y!==(y=e[19]+"")&&ge(C,y),e[0]===e[16]?g?g.p(e,L):(g=Dc(e),g.c(),g.m(T,null)):g&&(g.d(1),g=null)},r(){k=t.getBoundingClientRect()},f(){mg(t),N()},a(){N(),N=gg(t,k,X1,{duration:200})},i(A){R||at(()=>{R=_a(t,wa,{}),R.start()})},o:z,d(A){A&&w(t),g&&g.d()}}}function Z1(n){return{c:z,m:z,p:z,d:z}}function eb(n){let e,t,i,s,r,o,l;return{c(){e=I("input"),t=P(),i=I("button"),s=I("img"),m(e,"type","text"),m(e,"placeholder","Enter your message"),ne(s,"vertical-align","middle"),Ie(s.src,r=bp)||m(s,"src",r),m(s,"alt","enter"),m(s,"width","20"),m(i,"type","submit"),ne(i,"justify-content","center"),ne(i,"padding","0px 15px")},m(a,u){b(a,e,u),rt(e,n[2]),b(a,t,u),b(a,i,u),E(i,s),o||(l=H(e,"input",n[11]),o=!0)},p(a,u){u&4&&e.value!==a[2]&&rt(e,a[2])},d(a){a&&w(e),a&&w(t),a&&w(i),o=!1,l()}}}function tb(n){let e,t,i,s,r;return{c(){e=I("input"),t=P(),i=I("button"),s=I("img"),m(e,"type","text"),e.disabled=!0,ne(s,"vertical-align","middle"),Ie(s.src,r=bp)||m(s,"src",r),m(s,"alt","enter"),m(s,"width","20"),m(i,"type","submit"),ne(i,"justify-content","center"),ne(i,"padding","0px 15px"),i.disabled=!0},m(o,l){b(o,e,l),b(o,t,l),b(o,i,l),E(i,s)},p:z,d(o){o&&w(e),o&&w(t),o&&w(i)}}}function nb(n){let e,t=[],i=new Map,s,r,o,l,a,u=n[3];const c=d=>d[15];for(let d=0;d<u.length;d+=1){let f=Ac(n,u,d),p=c(f);i.set(p,t[d]=Lc(p,f))}let h={ctx:n,current:null,token:null,hasCatch:!1,pending:tb,then:eb,catch:Z1};return In(o=n[4],h),{c(){e=I("div");for(let d=0;d<t.length;d+=1)t[d].c();s=P(),r=I("form"),h.block.c(),ne(e,"text-align","left"),ne(e,"justify-content","left"),ne(e,"min-width","30em"),m(e,"class","chat svelte-16kii77")},m(d,f){b(d,e,f);for(let p=0;p<t.length;p+=1)t[p]&&t[p].m(e,null);n[10](e),b(d,s,f),b(d,r,f),h.block.m(r,h.anchor=null),h.mount=()=>r,h.anchor=null,l||(a=H(r,"submit",kh(n[12])),l=!0)},p(d,[f]){if(n=d,f&73){u=n[3];for(let p=0;p<t.length;p+=1)t[p].r();t=Tn(t,f,c,1,n,u,i,e,Eg,Lc,null,Ac);for(let p=0;p<t.length;p+=1)t[p].a()}h.ctx=n,f&16&&o!==(o=n[4])&&In(o,h)||kr(h,n,f)},i(d){for(let f=0;f<u.length;f+=1)F(t[f])},o:z,d(d){d&&w(e);for(let f=0;f<t.length;f+=1)t[f].d();n[10](null),d&&w(s),d&&w(r),h.block.d(),h.token=null,h=null,l=!1,a()}}}function ib(n,e,t){let{db:i}=e,{uid:s}=e,{profileImage:r=1}=e,o;function l(){t(1,o.scrollTop=o.scrollHeight,o)}ga(()=>{setTimeout(()=>{l()},400)});let a="";async function u(){if(a!==""){try{const y=bt(i,"users",s),C=await Ks(y);let S="",M="";if(C.exists()){const k=C.data();S=k.name,M=k.identifier}else console.log("No such document!");const R=await K1(Mc(i,"messages"),{text:a,createdAt:W1(),sentBy:s,sentByName:S,sentByIdentifier:M,sentByProfilePic:r});console.log("Message sent with ID: ",R.id)}catch(y){console.error("Error adding document: ",y)}t(2,a=""),l()}}function c(y){return Y1(B1(Mc(i,"messages"),q1("createdAt","asc")),C=>{const S=C.docs.map(M=>({id:M.id,...M.data()}));y(S)})}async function h(y,C){s===C&&await Q1(bt(i,"messages",y))}let d=[];c(y=>{t(3,d=y),console.log("NOW"),setTimeout(()=>{l()},200)});let f=null;const p=(y,C)=>h(y,C);function v(y){ee[y?"unshift":"push"](()=>{o=y,t(1,o)})}function _(){a=this.value,t(2,a)}const T=()=>t(4,f=u());return n.$$set=y=>{"db"in y&&t(7,i=y.db),"uid"in y&&t(0,s=y.uid),"profileImage"in y&&t(8,r=y.profileImage)},[s,o,a,d,f,u,h,i,r,p,v,_,T]}class sb extends be{constructor(e){super(),we(this,e,ib,nb,_e,{db:7,uid:0,profileImage:8})}}var rb="firebase",ob="9.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Jt(rb,ob,"app");function Dl(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(n);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(n,i[s])&&(t[i[s]]=n[i[s]]);return t}function Ip(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ab=Ip,Tp=new ss("auth","Firebase",Ip());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr=new Ta("@firebase/auth");function lb(n,...e){wr.logLevel<=de.WARN&&wr.warn(`Auth (${ui}): ${n}`,...e)}function Ys(n,...e){wr.logLevel<=de.ERROR&&wr.error(`Auth (${ui}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(n,...e){throw Ll(n,...e)}function St(n,...e){return Ll(n,...e)}function Ep(n,e,t){const i=Object.assign(Object.assign({},ab()),{[e]:t});return new ss("auth","Firebase",i).create(e,{appName:n.name})}function ub(n,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&Dt(n,"argument-error"),Ep(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ll(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return Tp.create(n,...e)}function X(n,e,...t){if(!n)throw Ll(e,...t)}function Pt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Ys(e),new Error(e)}function Vt(n,e){n||Pt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ca(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function cb(){return Oc()==="http:"||Oc()==="https:"}function Oc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(cb()||Sy()||"connection"in navigator)?navigator.onLine:!0}function fb(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e,t){this.shortDelay=e,this.longDelay=t,Vt(t>e,"Short delay should be less than long delay!"),this.isMobile=ky()||Ny()}get(){return hb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ol(n,e){Vt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Pt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Pt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Pt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const db={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pb=new bs(3e4,6e4);function Pl(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Is(n,e,t,i,s={}){return Mp(n,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const l=rs(Object.assign({key:n.config.apiKey},o)).slice(1),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/json",n.languageCode&&(a["X-Firebase-Locale"]=n.languageCode),Cp.fetch()(Sp(n,n.config.apiHost,t,l),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},r))})}async function Mp(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},db),e);try{const s=new gb(n),r=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Bs(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const l=r.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw Bs(n,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw Bs(n,"email-already-in-use",o);if(a==="USER_DISABLED")throw Bs(n,"user-disabled",o);const c=i[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Ep(n,c,u);Dt(n,c)}}catch(s){if(s instanceof xt)throw s;Dt(n,"network-request-failed",{message:String(s)})}}async function kp(n,e,t,i,s={}){const r=await Is(n,e,t,i,s);return"mfaPendingCredential"in r&&Dt(n,"multi-factor-auth-required",{_serverResponse:r}),r}function Sp(n,e,t,i){const s=`${e}${t}?${i}`;return n.config.emulator?Ol(n.config,s):`${n.config.apiScheme}://${s}`}class gb{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(St(this.auth,"network-request-failed")),pb.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Bs(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=St(n,e,i);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mb(n,e){return Is(n,"POST","/v1/accounts:delete",e)}async function yb(n,e){return Is(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oi(n){if(!!n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function vb(n,e=!1){const t=st(n),i=await t.getIdToken(e),s=Rl(i);X(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:Oi(Mo(s.auth_time)),issuedAtTime:Oi(Mo(s.iat)),expirationTime:Oi(Mo(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Mo(n){return Number(n)*1e3}function Rl(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Ys("JWT malformed, contained fewer than 3 sections"),null;try{const s=qh(t);return s?JSON.parse(s):(Ys("Failed to decode base64 JWT payload"),null)}catch(s){return Ys("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function _b(n){const e=Rl(n);return X(e,"internal-error"),X(typeof e.exp<"u","internal-error"),X(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function es(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof xt&&wb(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function wb({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Oi(this.lastLoginAt),this.creationTime=Oi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ts(n){var e;const t=n.auth,i=await n.getIdToken(),s=await es(n,yb(t,{idToken:i}));X(s==null?void 0:s.users.length,t,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Eb(r.providerUserInfo):[],l=Tb(n.providerData,o),a=n.isAnonymous,u=!(n.email&&r.passwordHash)&&!(l!=null&&l.length),c=a?u:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:l,metadata:new Np(r.createdAt,r.lastLoginAt),isAnonymous:c};Object.assign(n,h)}async function Ib(n){const e=st(n);await ts(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Tb(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function Eb(n){return n.map(e=>{var{providerId:t}=e,i=Dl(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cb(n,e){const t=await Mp(n,{},async()=>{const i=rs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=n.config,o=Sp(n,s,"/v1/token",`key=${r}`),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Cp.fetch()(o,{method:"POST",headers:l,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken<"u","internal-error"),X(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):_b(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return X(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:r}=await Cb(e,t);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:r}=t,o=new ns;return i&&(X(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(X(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(X(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ns,this.toJSON())}_performRefresh(){return Pt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(n,e){X(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class bn{constructor(e){var{uid:t,auth:i,stsTokenManager:s}=e,r=Dl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new bb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Np(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await es(this,this.stsTokenManager.getToken(this.auth,e));return X(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return vb(this,e)}reload(){return Ib(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new bn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await ts(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await es(this,mb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,s,r,o,l,a,u,c;const h=(i=t.displayName)!==null&&i!==void 0?i:void 0,d=(s=t.email)!==null&&s!==void 0?s:void 0,f=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,p=(o=t.photoURL)!==null&&o!==void 0?o:void 0,v=(l=t.tenantId)!==null&&l!==void 0?l:void 0,_=(a=t._redirectEventId)!==null&&a!==void 0?a:void 0,T=(u=t.createdAt)!==null&&u!==void 0?u:void 0,y=(c=t.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:C,emailVerified:S,isAnonymous:M,providerData:R,stsTokenManager:k}=t;X(C&&k,e,"internal-error");const N=ns.fromJSON(this.name,k);X(typeof C=="string",e,"internal-error"),qt(h,e.name),qt(d,e.name),X(typeof S=="boolean",e,"internal-error"),X(typeof M=="boolean",e,"internal-error"),qt(f,e.name),qt(p,e.name),qt(v,e.name),qt(_,e.name),qt(T,e.name),qt(y,e.name);const g=new bn({uid:C,auth:e,email:d,emailVerified:S,displayName:h,isAnonymous:M,photoURL:p,phoneNumber:f,tenantId:v,stsTokenManager:N,createdAt:T,lastLoginAt:y});return R&&Array.isArray(R)&&(g.providerData=R.map(A=>Object.assign({},A))),_&&(g._redirectEventId=_),g}static async _fromIdTokenResponse(e,t,i=!1){const s=new ns;s.updateFromServerResponse(t);const r=new bn({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await ts(r),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pc=new Map;function Rt(n){Vt(n instanceof Function,"Expected a class definition");let e=Pc.get(n);return e?(Vt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Pc.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ap.type="NONE";const Rc=Ap;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ws(n,e,t){return`firebase:${n}:${e}:${t}`}class Jn{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=Ws(this.userKey,s.apiKey,r),this.fullPersistenceKey=Ws("persistence",s.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?bn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Jn(Rt(Rc),e,i);const s=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let r=s[0]||Rt(Rc);const o=Ws(i,e.config.apiKey,e.name);let l=null;for(const u of t)try{const c=await u._get(o);if(c){const h=bn._fromJSON(e,c);u!==r&&(l=h),r=u;break}}catch{}const a=s.filter(u=>u._shouldAllowMigration);return!r._shouldAllowMigration||!a.length?new Jn(r,e,i):(r=a[0],l&&await r._set(o,l.toJSON()),await Promise.all(t.map(async u=>{if(u!==r)try{await u._remove(o)}catch{}})),new Jn(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jc(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Op(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Dp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Rp(e))return"Blackberry";if(jp(e))return"Webos";if(jl(e))return"Safari";if((e.includes("chrome/")||Lp(e))&&!e.includes("edge/"))return"Chrome";if(Pp(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Dp(n=Xe()){return/firefox\//i.test(n)}function jl(n=Xe()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Lp(n=Xe()){return/crios\//i.test(n)}function Op(n=Xe()){return/iemobile/i.test(n)}function Pp(n=Xe()){return/android/i.test(n)}function Rp(n=Xe()){return/blackberry/i.test(n)}function jp(n=Xe()){return/webos/i.test(n)}function io(n=Xe()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Mb(n=Xe()){var e;return io(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function kb(){return Ay()&&document.documentMode===10}function Up(n=Xe()){return io(n)||Pp(n)||jp(n)||Rp(n)||/windows phone/i.test(n)||Op(n)}function Sb(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fp(n,e=[]){let t;switch(n){case"Browser":t=jc(Xe());break;case"Worker":t=`${jc(Xe())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ui}/${i}`}async function zp(n,e){return Is(n,"GET","/v2/recaptchaConfig",Pl(n,e))}function Uc(n){return n!==void 0&&n.enterprise!==void 0}class Vp{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(t=>t.provider==="EMAIL_PASSWORD_PROVIDER"&&t.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nb(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function xp(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const r=St("internal-error");r.customData=s,t(r)},i.type="text/javascript",i.charset="UTF-8",Nb().appendChild(i)})}function Ab(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const Db="https://www.google.com/recaptcha/enterprise.js?render=",Lb="recaptcha-enterprise",Ob="NO_RECAPTCHA";class Pb{constructor(e){this.type=Lb,this.auth=yi(e)}async verify(e="verify",t=!1){async function i(r){if(!t){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,l)=>{zp(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new Vp(a);return r.tenantId==null?r._agentRecaptchaConfig=u:r._tenantRecaptchaConfigs[r.tenantId]=u,o(u.siteKey)}}).catch(a=>{l(a)})})}function s(r,o,l){const a=window.grecaptcha;Uc(a)?a.enterprise.ready(()=>{a.enterprise.execute(r,{action:e}).then(u=>{o(u)}).catch(()=>{o(Ob)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{i(this.auth).then(l=>{if(!t&&Uc(window.grecaptcha))s(l,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}xp(Db+l).then(()=>{s(l,r,o)}).catch(a=>{o(a)})}}).catch(l=>{o(l)})})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=r=>new Promise((o,l)=>{try{const a=e(r);o(a)}catch(a){l(a)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jb{constructor(e,t,i,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Fc(this),this.idTokenSubscription=new Fc(this),this.beforeStateQueue=new Rb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Tp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Rt(t)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await Jn.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=s==null?void 0:s._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a==null?void 0:a.user)&&(s=a.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ts(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=fb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?st(e):null;return t&&X(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Rt(e))})}async initializeRecaptchaConfig(){const e=await zp(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new Vp(e);this.tenantId==null?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled&&new Pb(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ss("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Rt(e)||this._popupRedirectResolver;X(t,this,"argument-error"),this.redirectPersistenceManager=await Jn.create(this,[Rt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return X(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof t=="function"?e.addObserver(t,i,s):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Fp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&lb(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function yi(n){return st(n)}class Fc{constructor(e){this.auth=e,this.observer=null,this.addObserver=Uy(t=>this.observer=t)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ub(n,e){const t=Ca(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),r=t.getOptions();if(rr(r,e!=null?e:{}))return s;Dt(s,"already-initialized")}return t.initialize({options:e})}function Fb(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Rt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function zb(n,e,t){const i=yi(n);X(i._canInitEmulator,i,"emulator-config-failed"),X(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!!(t!=null&&t.disableWarnings),r=Bp(e),{host:o,port:l}=Vb(e),a=l===null?"":`:${l}`;i.config.emulator={url:`${r}//${o}${a}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:l,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||xb()}function Bp(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Vb(n){const e=Bp(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:zc(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:zc(o)}}}function zc(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function xb(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Pt("not implemented")}_getIdTokenResponse(e){return Pt("not implemented")}_linkToIdToken(e,t){return Pt("not implemented")}_getReauthenticationResolver(e){return Pt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xn(n,e){return kp(n,"POST","/v1/accounts:signInWithIdp",Pl(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bb="http://localhost";class An extends qp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new An(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Dt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=t,r=Dl(t,["providerId","signInMethod"]);if(!i||!s)return null;const o=new An(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Xn(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Xn(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Xn(e,t)}buildRequest(){const e={requestUri:Bb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=rs(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts extends Ul{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t extends Ts{constructor(){super("facebook.com")}static credential(e){return An._fromParams({providerId:$t.PROVIDER_ID,signInMethod:$t.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $t.credentialFromTaggedObject(e)}static credentialFromError(e){return $t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $t.credential(e.oauthAccessToken)}catch{return null}}}$t.FACEBOOK_SIGN_IN_METHOD="facebook.com";$t.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt extends Ts{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return An._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return gt.credentialFromTaggedObject(e)}static credentialFromError(e){return gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return gt.credential(t,i)}catch{return null}}}gt.GOOGLE_SIGN_IN_METHOD="google.com";gt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt extends Ts{constructor(){super("github.com")}static credential(e){return An._fromParams({providerId:Gt.PROVIDER_ID,signInMethod:Gt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gt.credentialFromTaggedObject(e)}static credentialFromError(e){return Gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gt.credential(e.oauthAccessToken)}catch{return null}}}Gt.GITHUB_SIGN_IN_METHOD="github.com";Gt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt extends Ts{constructor(){super("twitter.com")}static credential(e,t){return An._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Qt.credentialFromTaggedObject(e)}static credentialFromError(e){return Qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Qt.credential(t,i)}catch{return null}}}Qt.TWITTER_SIGN_IN_METHOD="twitter.com";Qt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qb(n,e){return kp(n,"POST","/v1/accounts:signUp",Pl(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const r=await bn._fromIdTokenResponse(e,i,s),o=Vc(i);return new rn({user:r,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=Vc(i);return new rn({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function Vc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xc(n){var e;const t=yi(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new rn({user:t.currentUser,providerId:null,operationType:"signIn"});const i=await qb(t,{returnSecureToken:!0}),s=await rn._fromIdTokenResponse(t,"signIn",i,!0);return await t._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br extends xt{constructor(e,t,i,s){var r;super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,br.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new br(e,t,i,s)}}function Hp(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?br._fromErrorAndOperation(n,r,e,i):r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hb(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}async function $p(n,e,t=!1){const i=await es(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return rn._forOperation(n,"link",i)}async function $b(n,e,t){await ts(e);const i=Hb(e.providerData),s=n===!1?"provider-already-linked":"no-such-provider";X(i.has(t)===n,e.auth,s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gb(n,e,t=!1){const{auth:i}=n,s="reauthenticate";try{const r=await es(n,Hp(i,s,e,n),t);X(r.idToken,i,"internal-error");const o=Rl(r.idToken);X(o,i,"internal-error");const{sub:l}=o;return X(n.uid===l,i,"user-mismatch"),rn._forOperation(n,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Dt(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qb(n,e,t=!1){const i="signIn",s=await Hp(n,i,e),r=await rn._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(r.user),r}async function Kb(n,e){const t=st(n);return await $b(!1,t,e.providerId),$p(t,e)}function Yb(n,e,t,i){return st(n).onIdTokenChanged(e,t,i)}function Wb(n,e,t){return st(n).beforeAuthStateChanged(e,t)}function ko(n,e,t,i){return st(n).onAuthStateChanged(e,t,i)}const Ir="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gp{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ir,"1"),this.storage.removeItem(Ir),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jb(){const n=Xe();return jl(n)||io(n)}const Xb=1e3,Zb=10;class Qp extends Gp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Jb()&&Sb(),this.fallbackToPolling=Up(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const i=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!t)return}const s=()=>{const o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);kb()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Zb):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},Xb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Qp.type="LOCAL";const eI=Qp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp extends Gp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Kp.type="SESSION";const Yp=Kp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tI(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new so(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:r}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const l=Array.from(o).map(async u=>u(t.origin,r)),a=await tI(l);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:a})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}so.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fl(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((l,a)=>{const u=Fl("",20);s.port1.start();const c=setTimeout(()=>{a(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),r=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),l(d.data.response);break;default:clearTimeout(c),clearTimeout(r),a(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(){return window}function iI(n){Nt().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wp(){return typeof Nt().WorkerGlobalScope<"u"&&typeof Nt().importScripts=="function"}async function sI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function rI(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function oI(){return Wp()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jp="firebaseLocalStorageDb",aI=1,Tr="firebaseLocalStorage",Xp="fbase_key";class Es{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ro(n,e){return n.transaction([Tr],e?"readwrite":"readonly").objectStore(Tr)}function lI(){const n=indexedDB.deleteDatabase(Jp);return new Es(n).toPromise()}function ha(){const n=indexedDB.open(Jp,aI);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Tr,{keyPath:Xp})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Tr)?e(i):(i.close(),await lI(),e(await ha()))})})}async function Bc(n,e,t){const i=ro(n,!0).put({[Xp]:e,value:t});return new Es(i).toPromise()}async function uI(n,e){const t=ro(n,!1).get(e),i=await new Es(t).toPromise();return i===void 0?null:i.value}function qc(n,e){const t=ro(n,!0).delete(e);return new Es(t).toPromise()}const cI=800,hI=3;class Zp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ha(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>hI)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Wp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=so._getInstance(oI()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await sI(),!this.activeServiceWorker)return;this.sender=new nI(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);!i||((e=i[0])===null||e===void 0?void 0:e.fulfilled)&&((t=i[0])===null||t===void 0?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||rI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ha();return await Bc(e,Ir,"1"),await qc(e,Ir),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Bc(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>uI(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>qc(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=ro(s,!1).getAll();return new Es(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),cI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Zp.type="LOCAL";const fI=Zp;new bs(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eg(n,e){return e?Rt(e):(X(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl extends qp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Xn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Xn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Xn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function dI(n){return Qb(n.auth,new zl(n),n.bypassAuthState)}function pI(n){const{auth:e,user:t}=n;return X(t,e,"internal-error"),Gb(t,new zl(n),n.bypassAuthState)}async function gI(n){const{auth:e,user:t}=n;return X(t,e,"internal-error"),$p(t,new zl(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(e,t,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:r,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return dI;case"linkViaPopup":case"linkViaRedirect":return gI;case"reauthViaPopup":case"reauthViaRedirect":return pI;default:Dt(this.auth,"internal-error")}}resolve(e){Vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mI=new bs(2e3,1e4);async function yI(n,e,t){const i=yi(n);ub(n,e,Ul);const s=eg(i,t);return new yn(i,"signInViaPopup",e,s).executeNotNull()}class yn extends tg{constructor(e,t,i,s,r){super(e,t,s,r),this.provider=i,this.authWindow=null,this.pollId=null,yn.currentPopupAction&&yn.currentPopupAction.cancel(),yn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){Vt(this.filter.length===1,"Popup operations only handle one event");const e=Fl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(St(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(St(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,yn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(St(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,mI.get())};e()}}yn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vI="pendingRedirect",Js=new Map;class _I extends tg{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Js.get(this.auth._key());if(!e){try{const i=await wI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Js.set(this.auth._key(),e)}return this.bypassAuthState||Js.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function wI(n,e){const t=TI(e),i=II(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}function bI(n,e){Js.set(n._key(),e)}function II(n){return Rt(n._redirectPersistence)}function TI(n){return Ws(vI,n.config.apiKey,n.name)}async function EI(n,e,t=!1){const i=yi(n),s=eg(i,e),o=await new _I(i,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CI=10*60*1e3;class MI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!kI(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!ng(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(St(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=CI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Hc(e))}saveEventToCache(e){this.cachedEventUids.add(Hc(e)),this.lastProcessedEventTime=Date.now()}}function Hc(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function ng({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function kI(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ng(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SI(n,e={}){return Is(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,AI=/^https?/;async function DI(n){if(n.config.emulator)return;const{authorizedDomains:e}=await SI(n);for(const t of e)try{if(LI(t))return}catch{}Dt(n,"unauthorized-domain")}function LI(n){const e=ca(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!AI.test(t))return!1;if(NI.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OI=new bs(3e4,6e4);function $c(){const n=Nt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function PI(n){return new Promise((e,t)=>{var i,s,r;function o(){$c(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{$c(),t(St(n,"network-request-failed"))},timeout:OI.get()})}if(!((s=(i=Nt().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=Nt().gapi)===null||r===void 0)&&r.load)o();else{const l=Ab("iframefcb");return Nt()[l]=()=>{gapi.load?o():t(St(n,"network-request-failed"))},xp(`https://apis.google.com/js/api.js?onload=${l}`).catch(a=>t(a))}}).catch(e=>{throw Xs=null,e})}let Xs=null;function RI(n){return Xs=Xs||PI(n),Xs}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jI=new bs(5e3,15e3),UI="__/auth/iframe",FI="emulator/auth/iframe",zI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},VI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function xI(n){const e=n.config;X(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Ol(e,FI):`https://${n.config.authDomain}/${UI}`,i={apiKey:e.apiKey,appName:n.name,v:ui},s=VI.get(n.config.apiHost);s&&(i.eid=s);const r=n._getFrameworks();return r.length&&(i.fw=r.join(",")),`${t}?${rs(i).slice(1)}`}async function BI(n){const e=await RI(n),t=Nt().gapi;return X(t,n,"internal-error"),e.open({where:document.body,url:xI(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:zI,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=St(n,"network-request-failed"),l=Nt().setTimeout(()=>{r(o)},jI.get());function a(){Nt().clearTimeout(l),s(i)}i.ping(a).then(a,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},HI=500,$I=600,GI="_blank",QI="http://localhost";class Gc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function KI(n,e,t,i=HI,s=$I){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let l="";const a=Object.assign(Object.assign({},qI),{width:i.toString(),height:s.toString(),top:r,left:o}),u=Xe().toLowerCase();t&&(l=Lp(u)?GI:t),Dp(u)&&(e=e||QI,a.scrollbars="yes");const c=Object.entries(a).reduce((d,[f,p])=>`${d}${f}=${p},`,"");if(Mb(u)&&l!=="_self")return YI(e||"",l),new Gc(null);const h=window.open(e||"",l,c);X(h,n,"popup-blocked");try{h.focus()}catch{}return new Gc(h)}function YI(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WI="__/auth/handler",JI="emulator/auth/handler",XI=encodeURIComponent("fac");async function Qc(n,e,t,i,s,r){X(n.config.authDomain,n,"auth-domain-config-required"),X(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:ui,eventId:s};if(e instanceof Ul){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",jy(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(r||{}))o[c]=h}if(e instanceof Ts){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}n.tenantId&&(o.tid=n.tenantId);const l=o;for(const c of Object.keys(l))l[c]===void 0&&delete l[c];const a=await n._getAppCheckToken(),u=a?`#${XI}=${encodeURIComponent(a)}`:"";return`${ZI(n)}?${rs(l).slice(1)}${u}`}function ZI({config:n}){return n.emulator?Ol(n,JI):`https://${n.authDomain}/${WI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const So="webStorageSupport";class eT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Yp,this._completeRedirectFn=EI,this._overrideRedirectResult=bI}async _openPopup(e,t,i,s){var r;Vt((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Qc(e,t,i,ca(),s);return KI(e,o,Fl())}async _openRedirect(e,t,i,s){await this._originValidation(e);const r=await Qc(e,t,i,ca(),s);return iI(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:r}=this.eventManagers[t];return s?Promise.resolve(s):(Vt(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await BI(e),i=new MI(e);return t.register("authEvent",s=>(X(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(So,{type:So},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[So];o!==void 0&&t(!!o),Dt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=DI(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Up()||jl()||io()}}const tT=eT;var Kc="@firebase/auth",Yc="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);!t||(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iT(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function sT(n){ei(new En("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=i.options;X(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const a={apiKey:o,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Fp(n)},u=new jb(i,s,r,a);return Fb(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),ei(new En("auth-internal",e=>{const t=yi(e.getProvider("auth").getImmediate());return(i=>new nT(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Jt(Kc,Yc,iT(n)),Jt(Kc,Yc,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rT=5*60,oT=Gh("authIdTokenMaxAge")||rT;let Wc=null;const aT=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>oT)return;const s=t==null?void 0:t.token;Wc!==s&&(Wc=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function No(n=Wh()){const e=Ca(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Ub(n,{popupRedirectResolver:tT,persistence:[fI,eI,Yp]}),i=Gh("authTokenSyncURL");if(i){const r=aT(i);Wb(t,r,()=>r(t.currentUser)),Yb(t,o=>r(o))}const s=Hh("auth");return s&&zb(t,`http://${s}`),t}sT("Browser");function Jc(n,e,t){const i=n.slice();return i[22]=e[t],i}function lT(n){return{c:z,m:z,p:z,i:z,o:z,d:z}}function uT(n){let e,t,i,s;const r=[hT,cT],o=[];function l(a,u){return a[6]?1:0}return e=l(n),t=o[e]=r[e](n),{c(){t.c(),i=Ue()},m(a,u){o[e].m(a,u),b(a,i,u),s=!0},p(a,u){let c=e;e=l(a),e===c?o[e].p(a,u):(tt(),q(o[c],1,1,()=>{o[c]=null}),nt(),t=o[e],t?t.p(a,u):(t=o[e]=r[e](a),t.c()),F(t,1),t.m(i.parentNode,i))},i(a){s||(F(t),s=!0)},o(a){q(t),s=!1},d(a){o[e].d(a),a&&w(i)}}}function cT(n){let e,t,i,s,r,o;return i=new sb({props:{profileImage:n[3],db:n[9],uid:n[7]}}),{c(){e=I("button"),e.textContent="SIGN OUT",t=P(),oe(i.$$.fragment)},m(l,a){b(l,e,a),b(l,t,a),se(i,l,a),s=!0,r||(o=H(e,"click",n[17]),r=!0)},p(l,a){const u={};a&8&&(u.profileImage=l[3]),a&128&&(u.uid=l[7]),i.$set(u)},i(l){s||(F(i.$$.fragment,l),s=!0)},o(l){q(i.$$.fragment,l),s=!1},d(l){l&&w(e),l&&w(t),re(i,l),r=!1,o()}}}function hT(n){let e,t,i,s,r,o,l,a,u,c,h,d,f,p,v,_,T,y,C,S,M,R,k=Array.from({length:Zc},eh),N=[];for(let g=0;g<k.length;g+=1)N[g]=Xc(Jc(n,k,g));return{c(){e=I("p"),e.innerHTML="<i>Do not share any sensitive information here okay?</i>",t=P(),i=I("label"),s=Y(`Permanent  name (You can't change this!): 
        `),r=I("input"),o=P(),l=I("br"),a=P(),u=I("label"),c=Y(`Display name:
        `),h=I("input"),d=P(),f=I("br"),p=P();for(let g=0;g<N.length;g+=1)N[g].c();v=P(),_=I("br"),T=P(),y=I("button"),y.textContent="LOGIN",C=P(),S=I("button"),S.textContent="UPGRADE LOGIN",m(r,"type","text"),m(r,"maxlength","20"),r.disabled=!0,m(h,"type","text"),m(h,"maxlength","20")},m(g,A){b(g,e,A),b(g,t,A),b(g,i,A),E(i,s),E(i,r),rt(r,n[5]),n[14](r),E(i,o),b(g,l,A),b(g,a,A),b(g,u,A),E(u,c),E(u,h),rt(h,n[4]),b(g,d,A),b(g,f,A),b(g,p,A);for(let L=0;L<N.length;L+=1)N[L]&&N[L].m(g,A);b(g,v,A),b(g,_,A),b(g,T,A),b(g,y,A),b(g,C,A),b(g,S,A),M||(R=[H(r,"input",n[13]),H(h,"input",n[15]),H(y,"click",n[11]),H(S,"click",n[12])],M=!0)},p(g,A){if(A&32&&r.value!==g[5]&&rt(r,g[5]),A&16&&h.value!==g[4]&&rt(h,g[4]),A&8){k=Array.from({length:Zc},eh);let L;for(L=0;L<k.length;L+=1){const j=Jc(g,k,L);N[L]?N[L].p(j,A):(N[L]=Xc(j),N[L].c(),N[L].m(v.parentNode,v))}for(;L<N.length;L+=1)N[L].d(1);N.length=k.length}},i:z,o:z,d(g){g&&w(e),g&&w(t),g&&w(i),n[14](null),g&&w(l),g&&w(a),g&&w(u),g&&w(d),g&&w(f),g&&w(p),yt(N,g),g&&w(v),g&&w(_),g&&w(T),g&&w(y),g&&w(C),g&&w(S),M=!1,Ae(R)}}}function Xc(n){let e,t,i,s;function r(){return n[16](n[22])}return{c(){e=I("img"),m(e,"draggable","false"),m(e,"class","profile-pic svelte-1fdh6t0"),m(e,"width","25"),Ie(e.src,t="chatProfilePictures/"+(n[22]+1)+".svg")||m(e,"src",t),m(e,"alt","profile picture number: "+(n[22]+1)),ye(e,"selected-profile-pic",n[3]===n[22]+1)},m(o,l){b(o,e,l),i||(s=H(e,"click",r),i=!0)},p(o,l){n=o,l&8&&ye(e,"selected-profile-pic",n[3]===n[22]+1)},d(o){o&&w(e),i=!1,s()}}}function fT(n){let e;return{c(){e=I("p"),e.textContent="Loading user..."},m(t,i){b(t,e,i)},p:z,i:z,o:z,d(t){t&&w(e)}}}function dT(n){let e,t,i={ctx:n,current:null,token:null,hasCatch:!1,pending:fT,then:uT,catch:lT,blocks:[,,,]};return In(n[10](),i),{c(){e=Ue(),i.block.c()},m(s,r){b(s,e,r),i.block.m(s,i.anchor=r),i.mount=()=>e.parentNode,i.anchor=e,t=!0},p(s,r){n=s,kr(i,n,r)},i(s){t||(F(i.block),t=!0)},o(s){for(let r=0;r<3;r+=1){const o=i.blocks[r];q(o)}t=!1},d(s){s&&w(e),i.block.d(s),i.token=null,i=null}}}function pT(n){let e,t,i,s;function r(a){n[18](a)}function o(a){n[19](a)}let l={title:n[2],centered:!0,$$slots:{default:[dT]},$$scope:{ctx:n}};return n[0]!==void 0&&(l.visible=n[0]),n[1]!==void 0&&(l.isPinned=n[1]),e=new qe({props:l}),ee.push(()=>ue(e,"visible",r)),ee.push(()=>ue(e,"isPinned",o)),{c(){oe(e.$$.fragment)},m(a,u){se(e,a,u),s=!0},p(a,[u]){const c={};u&4&&(c.title=a[2]),u&33554936&&(c.$$scope={dirty:u,ctx:a}),!t&&u&1&&(t=!0,c.visible=a[0],he(()=>t=!1)),!i&&u&2&&(i=!0,c.isPinned=a[1],he(()=>i=!1)),e.$set(c)},i(a){s||(F(e.$$.fragment,a),s=!0)},o(a){q(e.$$.fragment,a),s=!1},d(a){re(e,a)}}}const Zc=7,eh=(n,e)=>e;function gT(n,e,t){let{visible:i=!1}=e,{title:s="New window"}=e,{isPinned:r=!1}=e,o=2;const a=Yh({apiKey:"AIzaSyDfTlyymXdtHDP1i_WfqjA_nA_i07lhDbw",authDomain:"nodisjuncture.firebaseapp.com",projectId:"nodisjuncture",storageBucket:"nodisjuncture.appspot.com",messagingSenderId:"1033748997874",appId:"1:1033748997874:web:17429a28993f3e08ca926b",measurementId:"G-4VMFZLJ0QN"}),u=L1(a);let c="",h="",d=!1,f="error",p;async function v(){const g=No();try{await xc(g)}catch(A){console.error("Error logging in: ",A)}ko(g,async A=>{if(A){t(7,f=A.uid),console.log("SIGN IN??",f);const L=bt(u,"users",f),j=await Ks(L);if(j.exists()){const D=j.data();t(4,c=D.name),t(5,h=D.identifier)}else t(8,p.disabled=!1,p),console.log("No such document!")}else console.log("Signed out :(")})}async function _(){const g=No();try{await xc(g)}catch(A){console.error("Error logging in: ",A)}ko(g,async A=>{if(A){t(7,f=A.uid),console.log("SIGN IN??",f);const L=bt(u,"users",f);(await Ks(L)).exists()?console.log("No such document!"):await xs(bt(u,"users",f),{identifier:h},{merge:!0}),await xs(bt(u,"users",f),{name:c},{merge:!0}),t(6,d=!0)}else console.log("Signed out :(")})}async function T(){const g=No(),A=new gt;yI(g,A).then(L=>{const j=gt.credentialFromResult(L);Kb(g.currentUser,j).then(G=>{const x=G.user;console.log("Anonymous account successfully upgraded",x)}).catch(G=>{console.log("Error upgrading anonymous account",G)}),j.accessToken;const D=L.user;console.log(D),ko(g,async G=>{if(G){t(7,f=G.uid),console.log("SIGN IN??",f);const x=bt(u,"users",f);(await Ks(x)).exists()?console.log("No such document!"):await xs(bt(u,"users",f),{identifier:h},{merge:!0}),await xs(bt(u,"users",f),{name:c},{merge:!0}),t(6,d=!0)}else console.log("Signed out :(")})}).catch(L=>{L.code,L.message,L.customData.email,gt.credentialFromError(L)})}window.loginUpgrading=T;function y(){h=this.value,t(5,h)}function C(g){ee[g?"unshift":"push"](()=>{p=g,t(8,p)})}function S(){c=this.value,t(4,c)}const M=g=>t(3,o=g+1),R=()=>t(6,d=!1);function k(g){i=g,t(0,i)}function N(g){r=g,t(1,r)}return n.$$set=g=>{"visible"in g&&t(0,i=g.visible),"title"in g&&t(2,s=g.title),"isPinned"in g&&t(1,r=g.isPinned)},[i,r,s,o,c,h,d,f,p,u,v,_,T,y,C,S,M,R,k,N]}class mT extends be{constructor(e){super(),we(this,e,gT,pT,_e,{visible:0,title:2,isPinned:1})}}function th(n,e,t){const i=n.slice();return i[13]=e[t],i[14]=e,i[15]=t,i}function nh(n,e,t){const i=n.slice();return i[13]=e[t],i}function ih(n){let e,t,i,s,r,o;function l(){return n[7](n[13])}function a(){return n[8](n[13])}return{c(){e=I("div"),t=I("button"),t.textContent="SELECT",i=P(),s=I("button"),s.textContent="CLOSE"},m(u,c){b(u,e,c),E(e,t),E(e,i),E(e,s),r||(o=[H(t,"click",l),H(s,"click",a)],r=!0)},p(u,c){n=u},d(u){u&&w(e),r=!1,Ae(o)}}}function sh(n){let e,t,i,s,r,o,l,a;function u(){n[9].call(e,n[14],n[15])}return{c(){e=I("input"),t=I("br"),i=P(),s=I("iframe"),m(e,"type","url"),Ie(s.src,r=n[13].url)||m(s,"src",r),m(s,"title",o=n[13].name),m(s,"class","svelte-dsetw")},m(c,h){b(c,e,h),rt(e,n[13].url),b(c,t,h),b(c,i,h),b(c,s,h),l||(a=H(e,"input",u),l=!0)},p(c,h){n=c,h&16&&e.value!==n[13].url&&rt(e,n[13].url),h&16&&!Ie(s.src,r=n[13].url)&&m(s,"src",r),h&16&&o!==(o=n[13].name)&&m(s,"title",o)},d(c){c&&w(e),c&&w(t),c&&w(i),c&&w(s),l=!1,a()}}}function rh(n){let e,t=n[3]===n[13].id&&sh(n);return{c(){t&&t.c(),e=Ue()},m(i,s){t&&t.m(i,s),b(i,e,s)},p(i,s){i[3]===i[13].id?t?t.p(i,s):(t=sh(i),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(i){t&&t.d(i),i&&w(e)}}}function yT(n){let e,t,i,s,r,o,l,a,u,c=n[4],h=[];for(let p=0;p<c.length;p+=1)h[p]=ih(nh(n,c,p));let d=n[4],f=[];for(let p=0;p<d.length;p+=1)f[p]=rh(th(n,d,p));return{c(){e=I("button"),e.textContent="NEW",t=I("br"),i=P();for(let p=0;p<h.length;p+=1)h[p].c();s=P(),r=I("br"),o=P();for(let p=0;p<f.length;p+=1)f[p].c();l=Ue()},m(p,v){b(p,e,v),b(p,t,v),b(p,i,v);for(let _=0;_<h.length;_+=1)h[_]&&h[_].m(p,v);b(p,s,v),b(p,r,v),b(p,o,v);for(let _=0;_<f.length;_+=1)f[_]&&f[_].m(p,v);b(p,l,v),a||(u=H(e,"click",n[5]),a=!0)},p(p,v){if(v&88){c=p[4];let _;for(_=0;_<c.length;_+=1){const T=nh(p,c,_);h[_]?h[_].p(T,v):(h[_]=ih(T),h[_].c(),h[_].m(s.parentNode,s))}for(;_<h.length;_+=1)h[_].d(1);h.length=c.length}if(v&24){d=p[4];let _;for(_=0;_<d.length;_+=1){const T=th(p,d,_);f[_]?f[_].p(T,v):(f[_]=rh(T),f[_].c(),f[_].m(l.parentNode,l))}for(;_<f.length;_+=1)f[_].d(1);f.length=d.length}},d(p){p&&w(e),p&&w(t),p&&w(i),yt(h,p),p&&w(s),p&&w(r),p&&w(o),yt(f,p),p&&w(l),a=!1,u()}}}function vT(n){let e,t,i,s;function r(a){n[10](a)}function o(a){n[11](a)}let l={title:n[2],$$slots:{default:[yT]},$$scope:{ctx:n}};return n[0]!==void 0&&(l.visible=n[0]),n[1]!==void 0&&(l.isPinned=n[1]),e=new qe({props:l}),ee.push(()=>ue(e,"visible",r)),ee.push(()=>ue(e,"isPinned",o)),{c(){oe(e.$$.fragment)},m(a,u){se(e,a,u),s=!0},p(a,[u]){const c={};u&4&&(c.title=a[2]),u&262168&&(c.$$scope={dirty:u,ctx:a}),!t&&u&1&&(t=!0,c.visible=a[0],he(()=>t=!1)),!i&&u&2&&(i=!0,c.isPinned=a[1],he(()=>i=!1)),e.$set(c)},i(a){s||(F(e.$$.fragment,a),s=!0)},o(a){q(e.$$.fragment,a),s=!1},d(a){re(e,a)}}}function _T(n,e,t){let{visible:i=!1}=e,{title:s="New window"}=e,{isPinned:r=!1}=e,o=0,l=0,a=[{id:0,name:"test",favicon:"https://stackoverflow.com/favicon.ico",url:"https://disjuncture.web.app/"}];function u(){t(4,a=[...a,{id:++l,name:"test",favicon:"https://stackoverflow.com/favicon.ico",url:"https://disjuncture.web.app/"}]),console.log(a)}function c(_){o===_&&t(3,o=a[0].id),t(4,a=a.filter(T=>T.id!==_))}const h=_=>t(3,o=_.id),d=_=>c(_.id);function f(_,T){_[T].url=this.value,t(4,a)}function p(_){i=_,t(0,i)}function v(_){r=_,t(1,r)}return n.$$set=_=>{"visible"in _&&t(0,i=_.visible),"title"in _&&t(2,s=_.title),"isPinned"in _&&t(1,r=_.isPinned)},[i,r,s,o,a,u,c,h,d,f,p,v]}class wT extends be{constructor(e){super(),we(this,e,_T,vT,_e,{visible:0,title:2,isPinned:1})}}function Ii(n,e){for(var t=0,i=0,s,r=[],o=new Date(n||new Date),l=o.getFullYear(),a=o.getMonth(),u=new Date(l,a,1-(e|0)).getDay(),c=new Date(l,a+1,0).getDate();t<c;){for(i=0,s=Array(7);i<7;){for(;i<u;)s[i++]=0;s[i++]=++t>c?0:t,u=0}r.push(s)}return r}function bT(n){let e,t,i,s,r,o;return{c(){e=Ns("svg"),t=Ns("path"),i=Ns("path"),s=Ns("path"),m(t,"fill","#c4d9fd"),m(t,"d","M0 256c0 141.2 114.8 256 256 256V0A256.3 256.3 0 000 256z"),m(i,"fill","#c4d9fd"),m(i,"d","M256 0v512c141.2 0 256-114.8 256-256S397.2 0 256 0z"),m(s,"fill","#5286fa"),m(s,"d","M226 115.4a23.3 23.3 0 00-33 33L300.7 256 193 363.7a23.3 23.3 0 1033 32.9l124-124.1a23.3 23.3 0 000-33l-124-124z"),m(e,"xmlns","http://www.w3.org/2000/svg"),m(e,"viewBox","0 0 512 512"),m(e,"class","svelte-18ya01c"),ye(e,"left",n[0])},m(l,a){b(l,e,a),E(e,t),E(e,i),E(e,s),r||(o=H(e,"click",n[1]),r=!0)},p(l,[a]){a&1&&ye(e,"left",l[0])},i:z,o:z,d(l){l&&w(e),r=!1,o()}}}function IT(n,e,t){let{left:i=!1}=e;function s(r){vg.call(this,n,r)}return n.$$set=r=>{"left"in r&&t(0,i=r.left)},[i,s]}class oh extends be{constructor(e){super(),we(this,e,IT,bT,_e,{left:0})}}function ah(n,e,t){const i=n.slice();return i[15]=e[t],i[17]=t,i}function lh(n,e,t){const i=n.slice();return i[18]=e[t],i[20]=t,i}function uh(n,e,t){const i=n.slice();return i[21]=e[t],i[23]=t,i}function ch(n,e){let t,i=e[3][(e[23]+e[2])%7]+"",s;return{key:n,first:null,c(){t=I("span"),s=Y(i),m(t,"class","label svelte-1h4fyir"),this.first=t},m(r,o){b(r,t,o),E(t,s)},p(r,o){e=r,o&12&&i!==(i=e[3][(e[23]+e[2])%7]+"")&&ge(s,i)},d(r){r&&w(t)}}}function hh(n){let e=[],t=new Map,i,s={length:7};const r=o=>o[20];for(let o=0;o<s.length;o+=1){let l=lh(n,s,o),a=r(l);t.set(a,e[o]=fh(a,l))}return{c(){for(let o=0;o<e.length;o+=1)e[o].c();i=Ue()},m(o,l){for(let a=0;a<e.length;a+=1)e[a]&&e[a].m(o,l);b(o,i,l)},p(o,l){l&1248&&(s={length:7},e=Tn(e,l,r,1,o,s,t,i.parentNode,Ui,fh,i,lh))},d(o){for(let l=0;l<e.length;l+=1)e[l].d(o);o&&w(i)}}}function TT(n){let e,t=n[7][0][n[20]]+"",i;return{c(){e=I("span"),i=Y(t),m(e,"class","date other svelte-1h4fyir")},m(s,r){b(s,e,r),E(e,i)},p(s,r){r&128&&t!==(t=s[7][0][s[20]]+"")&&ge(i,t)},d(s){s&&w(e)}}}function ET(n){let e,t=n[5][n[5].length-1][n[20]]+"",i;return{c(){e=I("span"),i=Y(t),m(e,"class","date other svelte-1h4fyir")},m(s,r){b(s,e,r),E(e,i)},p(s,r){r&32&&t!==(t=s[5][s[5].length-1][s[20]]+"")&&ge(i,t)},d(s){s&&w(e)}}}function CT(n){let e,t=n[6][n[17]][n[20]]+"",i,s;return{c(){e=I("span"),i=Y(t),s=P(),m(e,"class","date svelte-1h4fyir"),ye(e,"today",n[10](n[6][n[17]][n[20]]))},m(r,o){b(r,e,o),E(e,i),E(e,s)},p(r,o){o&64&&t!==(t=r[6][r[17]][r[20]]+"")&&ge(i,t),o&1088&&ye(e,"today",r[10](r[6][r[17]][r[20]]))},d(r){r&&w(e)}}}function fh(n,e){let t,i;function s(l,a){return l[6][l[17]][l[20]]!=0?CT:l[17]<1?ET:TT}let r=s(e),o=r(e);return{key:n,first:null,c(){t=Ue(),o.c(),i=Ue(),this.first=t},m(l,a){b(l,t,a),o.m(l,a),b(l,i,a)},p(l,a){e=l,r===(r=s(e))&&o?o.p(e,a):(o.d(1),o=r(e),o&&(o.c(),o.m(i.parentNode,i)))},d(l){l&&w(t),o.d(l),l&&w(i)}}}function dh(n,e){let t,i,s=e[6][e[17]]&&hh(e);return{key:n,first:null,c(){t=Ue(),s&&s.c(),i=Ue(),this.first=t},m(r,o){b(r,t,o),s&&s.m(r,o),b(r,i,o)},p(r,o){e=r,e[6][e[17]]?s?s.p(e,o):(s=hh(e),s.c(),s.m(i.parentNode,i)):s&&(s.d(1),s=null)},d(r){r&&w(t),s&&s.d(r),r&&w(i)}}}function MT(n){let e,t,i,s,r=n[4][n[1]]+"",o,l,a,u,c,h,d,f=[],p=new Map,v,_=[],T=new Map,y;t=new oh({props:{left:!0}}),t.$on("click",n[8]),c=new oh({}),c.$on("click",n[9]);let C=n[3];const S=k=>k[21];for(let k=0;k<C.length;k+=1){let N=uh(n,C,k),g=S(N);p.set(g,f[k]=ch(g,N))}let M={length:6};const R=k=>k[17];for(let k=0;k<M.length;k+=1){let N=ah(n,M,k),g=R(N);T.set(g,_[k]=dh(g,N))}return{c(){e=I("header"),oe(t.$$.fragment),i=P(),s=I("h4"),o=Y(r),l=P(),a=Y(n[0]),u=P(),oe(c.$$.fragment),h=P(),d=I("div");for(let k=0;k<f.length;k+=1)f[k].c();v=P();for(let k=0;k<_.length;k+=1)_[k].c();m(s,"class","svelte-1h4fyir"),m(e,"class","svelte-1h4fyir"),m(d,"class","month svelte-1h4fyir")},m(k,N){b(k,e,N),se(t,e,null),E(e,i),E(e,s),E(s,o),E(s,l),E(s,a),E(e,u),se(c,e,null),b(k,h,N),b(k,d,N);for(let g=0;g<f.length;g+=1)f[g]&&f[g].m(d,null);E(d,v);for(let g=0;g<_.length;g+=1)_[g]&&_[g].m(d,null);y=!0},p(k,[N]){(!y||N&18)&&r!==(r=k[4][k[1]]+"")&&ge(o,r),(!y||N&1)&&ge(a,k[0]),N&12&&(C=k[3],f=Tn(f,N,S,1,k,C,p,d,Ui,ch,v,uh)),N&1248&&(M={length:6},_=Tn(_,N,R,1,k,M,T,d,Ui,dh,null,ah))},i(k){y||(F(t.$$.fragment,k),F(c.$$.fragment,k),y=!0)},o(k){q(t.$$.fragment,k),q(c.$$.fragment,k),y=!1},d(k){k&&w(e),re(t),re(c),k&&w(h),k&&w(d);for(let N=0;N<f.length;N+=1)f[N].d();for(let N=0;N<_.length;N+=1)_[N].d()}}}function kT(n,e,t){let i,s,r,{year:o=2019}=e,{month:l=0}=e,{offset:a=0}=e,{today:u=null}=e,{labels:c=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]}=e,{months:h=["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sep","Oct","Nov","Dec"]}=e,d=Ii(new Date(o,l-1),a),f=Ii(new Date(o,l),a),p=Ii(new Date(o,l+1),a);function v(){t(6,[f,p]=[d,f],f,t(7,p)),t(1,--l)<0&&(t(1,l=11),t(0,o--,o)),t(5,d=Ii(new Date(o,l-1),a))}function _(){t(5,[d,f]=[f,p],d,t(6,f)),t(1,++l)>11&&(t(1,l=0),t(0,o++,o)),t(7,p=Ii(new Date(o,l+1),a))}function T(y){return u&&s===o&&i===l&&r===y}return n.$$set=y=>{"year"in y&&t(0,o=y.year),"month"in y&&t(1,l=y.month),"offset"in y&&t(2,a=y.offset),"today"in y&&t(11,u=y.today),"labels"in y&&t(3,c=y.labels),"months"in y&&t(4,h=y.months)},n.$$.update=()=>{n.$$.dirty&2048&&(i=u&&u.getMonth()),n.$$.dirty&2048&&(s=u&&u.getFullYear()),n.$$.dirty&2048&&(r=u&&u.getDate())},[o,l,a,c,h,d,f,p,v,_,T,u]}class ST extends be{constructor(e){super(),we(this,e,kT,MT,_e,{year:0,month:1,offset:2,today:11,labels:3,months:4})}}function NT(n){let e,t,i,s;return e=new ST({props:{today:n[3],year:2020}}),{c(){oe(e.$$.fragment),t=P(),i=I("a"),i.textContent="Credit",m(i,"href","https://svelte.dev/repl/cb4d121decc54cc98e312d5b83c96df7?version=3.17.2")},m(r,o){se(e,r,o),b(r,t,o),b(r,i,o),s=!0},p:z,i(r){s||(F(e.$$.fragment,r),s=!0)},o(r){q(e.$$.fragment,r),s=!1},d(r){re(e,r),r&&w(t),r&&w(i)}}}function AT(n){let e,t,i,s;function r(a){n[4](a)}function o(a){n[5](a)}let l={title:n[2],$$slots:{default:[NT]},$$scope:{ctx:n}};return n[0]!==void 0&&(l.visible=n[0]),n[1]!==void 0&&(l.isPinned=n[1]),e=new qe({props:l}),ee.push(()=>ue(e,"visible",r)),ee.push(()=>ue(e,"isPinned",o)),{c(){oe(e.$$.fragment)},m(a,u){se(e,a,u),s=!0},p(a,[u]){const c={};u&4&&(c.title=a[2]),u&64&&(c.$$scope={dirty:u,ctx:a}),!t&&u&1&&(t=!0,c.visible=a[0],he(()=>t=!1)),!i&&u&2&&(i=!0,c.isPinned=a[1],he(()=>i=!1)),e.$set(c)},i(a){s||(F(e.$$.fragment,a),s=!0)},o(a){q(e.$$.fragment,a),s=!1},d(a){re(e,a)}}}function DT(n,e,t){let{visible:i=!1}=e,{title:s="New window"}=e,{isPinned:r=!1}=e;const o=new Date;function l(u){i=u,t(0,i)}function a(u){r=u,t(1,r)}return n.$$set=u=>{"visible"in u&&t(0,i=u.visible),"title"in u&&t(2,s=u.title),"isPinned"in u&&t(1,r=u.isPinned)},[i,r,s,o,l,a]}class LT extends be{constructor(e){super(),we(this,e,DT,AT,_e,{visible:0,title:2,isPinned:1})}}const OT="/assets/note.545f3988.svg",PT="/assets/calculator.ff83fb1a.svg",RT="/assets/paint.02d3e2f1.svg",jT="/assets/settings.8c674a8f.svg",UT="/assets/store.ef2619a5.svg",FT="/assets/internet.c1a61a93.svg",zT="/assets/folder.5ef263f7.svg",VT="/assets/about.c8d6b0e2.svg",xT="/assets/chat.930772bd.svg",BT="/assets/verge.d55593a7.svg",qT="/assets/calendar.6fe16692.svg",HT=`
Browse through your computer with ease. <br/>
Who knows what you will find in there. <br/>
Additionally comes with a built-in:
<ul style="text-align:left;">
  <li>Sound viewer</li>
  <li>Image viewer</li>
  <li>Code viewer</li>
</ul>
`,ig=[{id:0,visible:!1,isPinned:!1,unlocked:!0,cost:0,title:"Notepad",component:Zg,image:OT,description:"This is the basic note taking app.",appInfo:{selectedNote:0}},{id:1,visible:!1,isPinned:!1,unlocked:!1,cost:50,title:"Calculator",component:hm,image:PT,description:"A calculator app of your dreams. It can add and even multiply!"},{id:2,visible:!1,isPinned:!1,unlocked:!1,cost:100,title:"Paint",component:bm,image:RT,description:"Embrace your inner artist with this paint program. Up to 4 breathtaking colours will make your dreams come to life."},{id:3,visible:!1,isPinned:!1,unlocked:!0,cost:0,title:"Settings",component:Cm,image:jT,description:"Customize your Luxen\u2122 experience to your liking."},{id:4,visible:!1,isPinned:!1,unlocked:!0,cost:0,title:"Store",component:Pm,image:UT,description:"Wait you are using this app right now aren't you?"},{id:5,visible:!1,isPinned:!1,unlocked:!1,cost:10,title:"Internet explurer",component:xm,image:FT,description:"The only good web browser available."},{id:6,visible:!1,isPinned:!1,unlocked:!1,cost:200,title:"File explurer",component:fy,image:zT,description:HT},{id:7,visible:!1,isPinned:!1,unlocked:!1,cost:0,title:"About",component:my,image:VT,description:"Get some information about this computer.<br/>Free of charge you just have to install it."},{id:8,visible:!1,isPinned:!1,unlocked:!1,cost:10,title:"Chat",component:mT,image:xT,description:"Chat with other disjunctors!"},{id:9,visible:!1,isPinned:!1,unlocked:!1,cost:9999,title:"Verge",component:wT,image:BT,description:"Luxen\u2122 is introducing the browser made for the future. Based on silverium it's up to \u221E times faster than Internet explurer."},{id:10,visible:!1,isPinned:!1,unlocked:!1,cost:175,title:"Calendar",component:LT,image:qT,description:"Keep track of time with this awesome calendar app."}],$T=JSON.parse(localStorage.getItem("apps"))||ig,dt=an($T.map((n,e)=>({...ig[e],...n})));dt.subscribe(n=>{localStorage.setItem("apps",JSON.stringify(n))});function ph(n,e,t){const i=n.slice();return i[4]=e[t].id,i[5]=e[t].visible,i[6]=e[t].isPinned,i[7]=e[t].unlocked,i[8]=e[t].title,i[9]=e[t].component,i[10]=e[t].image,i[11]=e,i[12]=t,i}function gh(n){let e,t,i,s,r,o,l,a,u,c,h,d;function f(){return n[1](n[5],n[11],n[12],n[6])}function p(y){n[2](y,n[5],n[11],n[12])}function v(y){n[3](y,n[6],n[11],n[12])}var _=n[9];function T(y){let C={title:y[8]};return y[5]!==void 0&&(C.visible=y[5]),y[6]!==void 0&&(C.isPinned=y[6]),{props:C}}return _&&(o=ql(_,T(n)),ee.push(()=>ue(o,"visible",p)),ee.push(()=>ue(o,"isPinned",v))),{c(){e=I("div"),t=I("img"),r=P(),o&&oe(o.$$.fragment),u=Ue(),m(t,"draggable","false"),m(t,"class","app-item-image svelte-ecb89x"),Ie(t.src,i=n[10])||m(t,"src",i),m(t,"alt",s="icon for "+n[8]),ye(t,"upside-bop-class",!n[5]),ye(t,"bop-class",n[5]),m(e,"class","app-item svelte-ecb89x")},m(y,C){b(y,e,C),E(e,t),b(y,r,C),o&&se(o,y,C),b(y,u,C),c=!0,h||(d=H(e,"click",f),h=!0)},p(y,C){n=y,(!c||C&1&&!Ie(t.src,i=n[10]))&&m(t,"src",i),(!c||C&1&&s!==(s="icon for "+n[8]))&&m(t,"alt",s),(!c||C&1)&&ye(t,"upside-bop-class",!n[5]),(!c||C&1)&&ye(t,"bop-class",n[5]);const S={};if(C&1&&(S.title=n[8]),!l&&C&1&&(l=!0,S.visible=n[5],he(()=>l=!1)),!a&&C&1&&(a=!0,S.isPinned=n[6],he(()=>a=!1)),C&1&&_!==(_=n[9])){if(o){tt();const M=o;q(M.$$.fragment,1,0,()=>{re(M,1)}),nt()}_?(o=ql(_,T(n)),ee.push(()=>ue(o,"visible",p)),ee.push(()=>ue(o,"isPinned",v)),oe(o.$$.fragment),F(o.$$.fragment,1),se(o,u.parentNode,u)):o=null}else _&&o.$set(S)},i(y){c||(o&&F(o.$$.fragment,y),c=!0)},o(y){o&&q(o.$$.fragment,y),c=!1},d(y){y&&w(e),y&&w(r),y&&w(u),o&&re(o,y),h=!1,d()}}}function mh(n,e){let t,i,s,r=e[7]&&gh(e);return{key:n,first:null,c(){t=Ue(),r&&r.c(),i=Ue(),this.first=t},m(o,l){b(o,t,l),r&&r.m(o,l),b(o,i,l),s=!0},p(o,l){e=o,e[7]?r?(r.p(e,l),l&1&&F(r,1)):(r=gh(e),r.c(),F(r,1),r.m(i.parentNode,i)):r&&(tt(),q(r,1,1,()=>{r=null}),nt())},i(o){s||(F(r),s=!0)},o(o){q(r),s=!1},d(o){o&&w(t),r&&r.d(o),o&&w(i)}}}function GT(n){let e,t=[],i=new Map,s,r=n[0];const o=l=>l[4];for(let l=0;l<r.length;l+=1){let a=ph(n,r,l),u=o(a);i.set(u,t[l]=mh(u,a))}return{c(){e=I("div");for(let l=0;l<t.length;l+=1)t[l].c();m(e,"class","board svelte-ecb89x")},m(l,a){b(l,e,a);for(let u=0;u<t.length;u+=1)t[u]&&t[u].m(e,null);s=!0},p(l,[a]){a&1&&(r=l[0],tt(),t=Tn(t,a,o,1,l,r,i,e,Dh,mh,null,ph),nt())},i(l){if(!s){for(let a=0;a<r.length;a+=1)F(t[a]);s=!0}},o(l){for(let a=0;a<t.length;a+=1)q(t[a]);s=!1},d(l){l&&w(e);for(let a=0;a<t.length;a+=1)t[a].d()}}}function QT(n,e,t){let i;ot(n,dt,l=>t(0,i=l));const s=(l,a,u,c)=>{vn(dt,a[u].visible=!0,i),vn(dt,a[u].isPinned=!1,i)};function r(l,a,u,c){u[c].visible=l,dt.set(i)}function o(l,a,u,c){u[c].isPinned=l,dt.set(i)}return[i,s,r,o]}class KT extends be{constructor(e){super(),we(this,e,QT,GT,_e,{})}}const YT="/assets/windows.09be7475.svg";function WT(n){let e,t,i,s;return e=new $g({}),i=new KT({}),{c(){oe(e.$$.fragment),t=P(),oe(i.$$.fragment)},m(r,o){se(e,r,o),b(r,t,o),se(i,r,o),s=!0},i(r){s||(F(e.$$.fragment,r),F(i.$$.fragment,r),s=!0)},o(r){q(e.$$.fragment,r),q(i.$$.fragment,r),s=!1},d(r){re(e,r),r&&w(t),re(i,r)}}}function JT(n){let e,t,i,s,r,o,l,a;return l=new Kg({props:{filterOn:n[0].crtFilter,scanlinesOn:n[0].scanLines,$$slots:{default:[WT]},$$scope:{ctx:n}}}),{c(){e=I("link"),t=I("meta"),i=I("meta"),s=I("meta"),r=P(),o=I("main"),oe(l.$$.fragment),m(e,"rel","icon"),m(e,"href",YT),m(t,"name","description"),m(t,"content","A simple gui based browser game. Collect all the good numbers that satisfy the rules."),m(i,"name","keywords"),m(i,"content","Severance, game"),m(s,"name","author"),m(s,"content","Pesopes")},m(u,c){E(document.head,e),E(document.head,t),E(document.head,i),E(document.head,s),b(u,r,c),b(u,o,c),se(l,o,null),a=!0},p(u,[c]){const h={};c&1&&(h.filterOn=u[0].crtFilter),c&1&&(h.scanlinesOn=u[0].scanLines),c&2&&(h.$$scope={dirty:c,ctx:u}),l.$set(h)},i(u){a||(F(l.$$.fragment,u),a=!0)},o(u){q(l.$$.fragment,u),a=!1},d(u){w(e),w(t),w(i),w(s),u&&w(r),u&&w(o),re(l)}}}function XT(n,e,t){let i;return ot(n,ct,s=>t(0,i=s)),[i]}class ZT extends be{constructor(e){super(),we(this,e,XT,JT,_e,{})}}new ZT({target:document.getElementById("app")});
