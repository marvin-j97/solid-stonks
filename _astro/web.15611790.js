const u={context:void 0,registry:void 0};function K(e){u.context=e}function se(){return{...u.context,id:`${u.context.id}${u.context.count++}-`,count:0}}const ie=(e,t)=>e===t,le=Symbol("solid-track"),B={equals:ie};let Q=q;const S=1,I=2,J={owned:null,cleanups:null,context:null,owner:null};var p=null;let R=null,h=null,g=null,m=null,D=0;function $(e,t){const n=h,s=p,i=e.length===0,o=i?J:{owned:null,cleanups:null,context:null,owner:t===void 0?s:t},f=i?e:()=>e(()=>E(()=>F(o)));p=o,h=null;try{return H(f,!0)}finally{h=n,p=s}}function oe(e,t){t=t?Object.assign({},B,t):B;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=i=>(typeof i=="function"&&(i=i(n.value)),Z(n,i));return[X.bind(n),s]}function Y(e,t,n){const s=P(e,t,!1,S);k(s)}function re(e,t,n){Q=he;const s=P(e,t,!1,S);(!n||!n.render)&&(s.user=!0),m?m.push(s):k(s)}function fe(e,t,n){n=n?Object.assign({},B,n):B;const s=P(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,k(s),X.bind(s)}function E(e){if(h===null)return e();const t=h;h=null;try{return e()}finally{h=t}}function Se(e){re(()=>E(e))}function ue(e){return p===null||(p.cleanups===null?p.cleanups=[e]:p.cleanups.push(e)),e}function X(){if(this.sources&&this.state)if(this.state===S)k(this);else{const e=g;g=null,H(()=>O(this),!1),g=e}if(h){const e=this.observers?this.observers.length:0;h.sources?(h.sources.push(this),h.sourceSlots.push(e)):(h.sources=[this],h.sourceSlots=[e]),this.observers?(this.observers.push(h),this.observerSlots.push(h.sources.length-1)):(this.observers=[h],this.observerSlots=[h.sources.length-1])}return this.value}function Z(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&H(()=>{for(let i=0;i<e.observers.length;i+=1){const o=e.observers[i],f=R&&R.running;f&&R.disposed.has(o),(f?!o.tState:!o.state)&&(o.pure?g.push(o):m.push(o),o.observers&&z(o)),f||(o.state=S)}if(g.length>1e6)throw g=[],new Error},!1)),t}function k(e){if(!e.fn)return;F(e);const t=p,n=h,s=D;h=p=e,ce(e,e.value,s),h=n,p=t}function ce(e,t,n){let s;try{s=e.fn(t)}catch(i){return e.pure&&(e.state=S,e.owned&&e.owned.forEach(F),e.owned=null),e.updatedAt=n+1,ee(i)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Z(e,s):e.value=s,e.updatedAt=n)}function P(e,t,n,s=S,i){const o={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:p,context:null,pure:n};return p===null||p!==J&&(p.owned?p.owned.push(o):p.owned=[o]),o}function L(e){if(e.state===0)return;if(e.state===I)return O(e);if(e.suspense&&E(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<D);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===S)k(e);else if(e.state===I){const s=g;g=null,H(()=>O(e,t[0]),!1),g=s}}function H(e,t){if(g)return e();let n=!1;t||(g=[]),m?n=!0:m=[],D++;try{const s=e();return ae(n),s}catch(s){n||(m=null),g=null,ee(s)}}function ae(e){if(g&&(q(g),g=null),e)return;const t=m;m=null,t.length&&H(()=>Q(t),!1)}function q(e){for(let t=0;t<e.length;t++)L(e[t])}function he(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:L(s)}if(u.context){if(u.count){u.effects||(u.effects=[]),u.effects.push(...e.slice(0,n));return}else u.effects&&(e=[...u.effects,...e],n+=u.effects.length,delete u.effects);K()}for(t=0;t<n;t++)L(e[t])}function O(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const s=e.sources[n];if(s.sources){const i=s.state;i===S?s!==t&&(!s.updatedAt||s.updatedAt<D)&&L(s):i===I&&O(s,t)}}}function z(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=I,n.pure?g.push(n):m.push(n),n.observers&&z(n))}}function F(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const o=i.pop(),f=n.observerSlots.pop();s<i.length&&(o.sourceSlots[f]=s,i[s]=o,n.observerSlots[s]=f)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)F(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function de(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function ee(e,t=p){throw de(e)}const pe=Symbol("fallback");function V(e){for(let t=0;t<e.length;t++)e[t]()}function ge(e,t,n={}){let s=[],i=[],o=[],f=0,l=t.length>1?[]:null;return ue(()=>V(o)),()=>{let a=e()||[],c,r;return a[le],E(()=>{let d=a.length,w,C,v,M,U,b,x,A,N;if(d===0)f!==0&&(V(o),o=[],s=[],i=[],f=0,l&&(l=[])),n.fallback&&(s=[pe],i[0]=$(ne=>(o[0]=ne,n.fallback())),f=1);else if(f===0){for(i=new Array(d),r=0;r<d;r++)s[r]=a[r],i[r]=$(y);f=d}else{for(v=new Array(d),M=new Array(d),l&&(U=new Array(d)),b=0,x=Math.min(f,d);b<x&&s[b]===a[b];b++);for(x=f-1,A=d-1;x>=b&&A>=b&&s[x]===a[A];x--,A--)v[A]=i[x],M[A]=o[x],l&&(U[A]=l[x]);for(w=new Map,C=new Array(A+1),r=A;r>=b;r--)N=a[r],c=w.get(N),C[r]=c===void 0?-1:c,w.set(N,r);for(c=b;c<=x;c++)N=s[c],r=w.get(N),r!==void 0&&r!==-1?(v[r]=i[c],M[r]=o[c],l&&(U[r]=l[c]),r=C[r],w.set(N,r)):o[c]();for(r=b;r<d;r++)r in v?(i[r]=v[r],o[r]=M[r],l&&(l[r]=U[r],l[r](r))):i[r]=$(y);i=i.slice(0,f=d),s=a.slice(0)}return i});function y(d){if(o[r]=d,l){const[w,C]=oe(r);return l[r]=C,t(a[r],w)}return t(a[r])}}}let te=!1;function ye(){te=!0}function Ce(e,t){if(te&&u.context){const n=u.context;K(se());const s=E(()=>e(t||{}));return K(n),s}return E(()=>e(t||{}))}function Ee(e){const t="fallback"in e&&{fallback:()=>e.fallback};return fe(ge(()=>e.each,e.children,t||void 0))}function we(e,t,n){let s=n.length,i=t.length,o=s,f=0,l=0,a=t[i-1].nextSibling,c=null;for(;f<i||l<o;){if(t[f]===n[l]){f++,l++;continue}for(;t[i-1]===n[o-1];)i--,o--;if(i===f){const r=o<s?l?n[l-1].nextSibling:n[o-l]:a;for(;l<o;)e.insertBefore(n[l++],r)}else if(o===l)for(;f<i;)(!c||!c.has(t[f]))&&t[f].remove(),f++;else if(t[f]===n[o-1]&&n[l]===t[i-1]){const r=t[--i].nextSibling;e.insertBefore(n[l++],t[f++].nextSibling),e.insertBefore(n[--o],r),t[i]=n[o]}else{if(!c){c=new Map;let y=l;for(;y<o;)c.set(n[y],y++)}const r=c.get(t[f]);if(r!=null)if(l<r&&r<o){let y=f,d=1,w;for(;++y<i&&y<o&&!((w=c.get(t[y]))==null||w!==r+d);)d++;if(d>r-l){const C=t[f];for(;l<r;)e.insertBefore(n[l++],C)}else e.replaceChild(n[l++],t[f++])}else f++;else t[f++].remove()}}}function be(e,t,n,s={}){let i;return $(o=>{i=o,t===document?e():xe(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{i(),t.textContent=""}}function Ne(e,t,n){let s;const i=()=>{const f=document.createElement("template");return f.innerHTML=e,n?f.content.firstChild.firstChild:f.content.firstChild},o=t?()=>E(()=>document.importNode(s||(s=i()),!0)):()=>(s||(s=i())).cloneNode(!0);return o.cloneNode=o,o}function Te(e,t){t==null?e.removeAttribute("class"):e.className=t}function xe(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return j(e,t,s,n);Y(i=>j(e,t(),i,n),s)}function Ae(e,t,n={}){u.completed=globalThis._$HY.completed,u.events=globalThis._$HY.events,u.load=globalThis._$HY.load,u.gather=i=>G(t,i),u.registry=new Map,u.context={id:n.renderId||"",count:0},G(t,n.renderId);const s=be(e,t,[...t.childNodes],n);return u.context=null,s}function ve(e){let t,n;if(!u.context||!(t=u.registry.get(n=me()))){if(u.context&&console.warn("Unable to find DOM nodes for hydration key:",n),!e)throw new Error("Unrecoverable Hydration Mismatch. No template for key: "+n);return e()}return u.completed&&u.completed.add(t),u.registry.delete(n),t}function ke(e){let t=e,n=0,s=[];if(u.context)for(;t;){if(t.nodeType===8){const i=t.nodeValue;if(i==="#")n++;else if(i==="/"){if(n===0)return[t,s];n--}}s.push(t),t=t.nextSibling}return[t,s]}function j(e,t,n,s,i){if(u.context){!n&&(n=[...e.childNodes]);let l=[];for(let a=0;a<n.length;a++){const c=n[a];c.nodeType===8&&c.data.slice(0,2)==="!$"?c.remove():l.push(c)}n=l}for(;typeof n=="function";)n=n();if(t===n)return n;const o=typeof t,f=s!==void 0;if(e=f&&n[0]&&n[0].parentNode||e,o==="string"||o==="number"){if(u.context)return n;if(o==="number"&&(t=t.toString()),f){let l=n[0];l&&l.nodeType===3?l.data=t:l=document.createTextNode(t),n=T(e,n,s,l)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||o==="boolean"){if(u.context)return n;n=T(e,n,s)}else{if(o==="function")return Y(()=>{let l=t();for(;typeof l=="function";)l=l();n=j(e,l,n,s)}),()=>n;if(Array.isArray(t)){const l=[],a=n&&Array.isArray(n);if(_(l,t,n,i))return Y(()=>n=j(e,l,n,s,!0)),()=>n;if(u.context){if(!l.length)return n;for(let c=0;c<l.length;c++)if(l[c].parentNode)return n=l}if(l.length===0){if(n=T(e,n,s),f)return n}else a?n.length===0?W(e,l,s):we(e,n,l):(n&&T(e),W(e,l));n=l}else if(t.nodeType){if(u.context&&t.parentNode)return n=f?[t]:t;if(Array.isArray(n)){if(f)return n=T(e,n,s,t);T(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}else console.warn("Unrecognized value. Skipped inserting",t)}return n}function _(e,t,n,s){let i=!1;for(let o=0,f=t.length;o<f;o++){let l=t[o],a=n&&n[o],c;if(!(l==null||l===!0||l===!1))if((c=typeof l)=="object"&&l.nodeType)e.push(l);else if(Array.isArray(l))i=_(e,l,a)||i;else if(c==="function")if(s){for(;typeof l=="function";)l=l();i=_(e,Array.isArray(l)?l:[l],Array.isArray(a)?a:[a])||i}else e.push(l),i=!0;else{const r=String(l);a&&a.nodeType===3&&a.data===r?e.push(a):e.push(document.createTextNode(r))}}return i}function W(e,t,n=null){for(let s=0,i=t.length;s<i;s++)e.insertBefore(t[s],n)}function T(e,t,n,s){if(n===void 0)return e.textContent="";const i=s||document.createTextNode("");if(t.length){let o=!1;for(let f=t.length-1;f>=0;f--){const l=t[f];if(i!==l){const a=l.parentNode===e;!o&&!f?a?e.replaceChild(i,l):e.insertBefore(i,n):a&&l.remove()}else o=!0}}else e.insertBefore(i,n);return[i]}function G(e,t){const n=e.querySelectorAll("*[data-hk]");for(let s=0;s<n.length;s++){const i=n[s],o=i.getAttribute("data-hk");(!t||o.startsWith(t))&&!u.registry.has(o)&&u.registry.set(o,i)}}function me(){const e=u.context;return`${e.id}${e.count++}`}const He=(...e)=>(ye(),Ae(...e));export{Ee as F,ke as a,Y as b,Ce as c,Te as d,oe as e,ve as g,He as h,xe as i,Se as o,be as r,u as s,Ne as t};