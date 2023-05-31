(function(){const A=document.createElement("link").relList;if(A&&A.supports&&A.supports("modulepreload"))return;for(const C of document.querySelectorAll('link[rel="modulepreload"]'))g(C);new MutationObserver(C=>{for(const B of C)if(B.type==="childList")for(const i of B.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&g(i)}).observe(document,{childList:!0,subtree:!0});function I(C){const B={};return C.integrity&&(B.integrity=C.integrity),C.referrerPolicy&&(B.referrerPolicy=C.referrerPolicy),C.crossOrigin==="use-credentials"?B.credentials="include":C.crossOrigin==="anonymous"?B.credentials="omit":B.credentials="same-origin",B}function g(C){if(C.ep)return;C.ep=!0;const B=I(C);fetch(C.href,B)}})();function lg(){}function _E(Q,A){for(const I in A)Q[I]=A[I];return Q}function Bd(Q){return!!Q&&(typeof Q=="object"||typeof Q=="function")&&typeof Q.then=="function"}function _S(Q){return Q()}function ml(){return Object.create(null)}function eo(Q){Q.forEach(_S)}function ss(Q){return typeof Q=="function"}function BC(Q,A){return Q!=Q?A==A:Q!==A||Q&&typeof Q=="object"||typeof Q=="function"}function Qd(Q){return Object.keys(Q).length===0}function $r(Q,...A){if(Q==null)return lg;const I=Q.subscribe(...A);return I.unsubscribe?()=>I.unsubscribe():I}function jS(Q){let A;return $r(Q,I=>A=I)(),A}function cQ(Q,A,I){Q.$$.on_destroy.push($r(A,I))}function BB(Q,A,I,g){if(Q){const C=VS(Q,A,I,g);return Q[0](C)}}function VS(Q,A,I,g){return Q[1]&&g?_E(I.ctx.slice(),Q[1](g(A))):I.ctx}function QB(Q,A,I,g){if(Q[2]&&g){const C=Q[2](g(I));if(A.dirty===void 0)return C;if(typeof C=="object"){const B=[],i=Math.max(A.dirty.length,C.length);for(let E=0;E<i;E+=1)B[E]=A.dirty[E]|C[E];return B}return A.dirty|C}return A.dirty}function iB(Q,A,I,g,C,B){if(C){const i=VS(A,I,g,B);Q.p(i,C)}}function EB(Q){if(Q.ctx.length>32){const A=[],I=Q.ctx.length/32;for(let g=0;g<I;g++)A[g]=-1;return A}return-1}function Ar(Q){const A={};for(const I in Q)I[0]!=="$"&&(A[I]=Q[I]);return A}function Wa(Q,A){const I={};A=new Set(A);for(const g in Q)!A.has(g)&&g[0]!=="$"&&(I[g]=Q[g]);return I}function id(Q,A,I){return Q.set(I),A}function Ed(Q){return Q&&ss(Q.destroy)?Q.destroy:lg}function Jg(Q,A,I){Q.insertBefore(A,I||null)}function Ng(Q){Q.parentNode&&Q.parentNode.removeChild(Q)}function XS(Q){return document.createElement(Q)}function zS(Q){return document.createTextNode(Q)}function LC(){return zS(" ")}function qe(){return zS("")}function $S(Q,A,I){I==null?Q.removeAttribute(A):Q.getAttribute(A)!==I&&Q.setAttribute(A,I)}function od(Q){return Array.from(Q.childNodes)}let ae;function DQ(Q){ae=Q}function lQ(){if(!ae)throw new Error("Function called outside component initialization");return ae}function fe(Q){lQ().$$.on_mount.push(Q)}function Sg(Q){lQ().$$.on_destroy.push(Q)}function GB(Q,A){return lQ().$$.context.set(Q,A),A}function MC(Q){return lQ().$$.context.get(Q)}const YE=[],se=[];let vE=[];const Ir=[],Ay=Promise.resolve();let gr=!1;function Iy(){gr||(gr=!0,Ay.then(Ih))}function Ah(){return Iy(),Ay}function Cr(Q){vE.push(Q)}function ed(Q){Ir.push(Q)}const CD=new Set;let sE=0;function Ih(){if(sE!==0)return;const Q=ae;do{try{for(;sE<YE.length;){const A=YE[sE];sE++,DQ(A),td(A.$$)}}catch(A){throw YE.length=0,sE=0,A}for(DQ(null),YE.length=0,sE=0;se.length;)se.pop()();for(let A=0;A<vE.length;A+=1){const I=vE[A];CD.has(I)||(CD.add(I),I())}vE.length=0}while(YE.length);for(;Ir.length;)Ir.pop()();gr=!1,CD.clear(),DQ(Q)}function td(Q){if(Q.fragment!==null){Q.update(),eo(Q.before_update);const A=Q.dirty;Q.dirty=[-1],Q.fragment&&Q.fragment.p(Q.ctx,A),Q.after_update.forEach(Cr)}}function ad(Q){const A=[],I=[];vE.forEach(g=>Q.indexOf(g)===-1?A.push(g):I.push(g)),I.forEach(g=>g()),vE=A}const La=new Set;let Fi;function PQ(){Fi={r:0,c:[],p:Fi}}function ZQ(){Fi.r||eo(Fi.c),Fi=Fi.p}function bA(Q,A){Q&&Q.i&&(La.delete(Q),Q.i(A))}function PA(Q,A,I,g){if(Q&&Q.o){if(La.has(Q))return;La.add(Q),Fi.c.push(()=>{La.delete(Q),g&&(I&&Q.d(1),g())}),Q.o(A)}else g&&g()}function sd(Q,A){const I=A.token={};function g(C,B,i,E){if(A.token!==I)return;A.resolved=E;let e=A.ctx;i!==void 0&&(e=e.slice(),e[i]=E);const t=C&&(A.current=C)(e);let s=!1;A.block&&(A.blocks?A.blocks.forEach((n,D)=>{D!==B&&n&&(PQ(),PA(n,1,1,()=>{A.blocks[D]===n&&(A.blocks[D]=null)}),ZQ())}):A.block.d(1),t.c(),bA(t,1),t.m(A.mount(),A.anchor),s=!0),A.block=t,A.blocks&&(A.blocks[B]=t),s&&Ih()}if(Bd(Q)){const C=lQ();if(Q.then(B=>{DQ(C),g(A.then,1,A.value,B),DQ(null)},B=>{if(DQ(C),g(A.catch,2,A.error,B),DQ(null),!A.hasCatch)throw B}),A.current!==A.pending)return g(A.pending,0),!0}else{if(A.current!==A.then)return g(A.then,1,A.value,Q),!0;A.resolved=Q}}function nd(Q,A,I){const g=A.slice(),{resolved:C}=Q;Q.current===Q.then&&(g[Q.value]=C),Q.current===Q.catch&&(g[Q.error]=C),Q.block.p(g,I)}function Dd(Q,A){const I={},g={},C={$$scope:1};let B=Q.length;for(;B--;){const i=Q[B],E=A[B];if(E){for(const e in i)e in E||(g[e]=1);for(const e in E)C[e]||(I[e]=E[e],C[e]=1);Q[B]=E}else for(const e in i)C[e]=1}for(const i in g)i in I||(I[i]=void 0);return I}function rd(Q){return typeof Q=="object"&&Q!==null?Q:{}}function hd(Q,A,I){const g=Q.$$.props[A];g!==void 0&&(Q.$$.bound[g]=I,I(Q.$$.ctx[g]))}function LI(Q){Q&&Q.c()}function pI(Q,A,I,g){const{fragment:C,after_update:B}=Q.$$;C&&C.m(A,I),g||Cr(()=>{const i=Q.$$.on_mount.map(_S).filter(ss);Q.$$.on_destroy?Q.$$.on_destroy.push(...i):eo(i),Q.$$.on_mount=[]}),B.forEach(Cr)}function qI(Q,A){const I=Q.$$;I.fragment!==null&&(ad(I.after_update),eo(I.on_destroy),I.fragment&&I.fragment.d(A),I.on_destroy=I.fragment=null,I.ctx=[])}function cd(Q,A){Q.$$.dirty[0]===-1&&(YE.push(Q),Iy(),Q.$$.dirty.fill(0)),Q.$$.dirty[A/31|0]|=1<<A%31}function rC(Q,A,I,g,C,B,i,E=[-1]){const e=ae;DQ(Q);const t=Q.$$={fragment:null,ctx:[],props:B,update:lg,not_equal:C,bound:ml(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(A.context||(e?e.$$.context:[])),callbacks:ml(),dirty:E,skip_bound:!1,root:A.target||e.$$.root};i&&i(t.root);let s=!1;if(t.ctx=I?I(Q,A.props||{},(n,D,...r)=>{const w=r.length?r[0]:D;return t.ctx&&C(t.ctx[n],t.ctx[n]=w)&&(!t.skip_bound&&t.bound[n]&&t.bound[n](w),s&&cd(Q,n)),D}):[],t.update(),s=!0,eo(t.before_update),t.fragment=g?g(t.ctx):!1,A.target){if(A.hydrate){const n=od(A.target);t.fragment&&t.fragment.l(n),n.forEach(Ng)}else t.fragment&&t.fragment.c();A.intro&&bA(Q.$$.fragment),pI(Q,A.target,A.anchor,A.customElement),Ih()}DQ(e)}class hC{$destroy(){qI(this,1),this.$destroy=lg}$on(A,I){if(!ss(I))return lg;const g=this.$$.callbacks[A]||(this.$$.callbacks[A]=[]);return g.push(I),()=>{const C=g.indexOf(I);C!==-1&&g.splice(C,1)}}$set(A){this.$$set&&!Qd(A)&&(this.$$.skip_bound=!0,this.$$set(A),this.$$.skip_bound=!1)}}const nE=[];function gh(Q,A){return{subscribe:jg(Q,A).subscribe}}function jg(Q,A=lg){let I;const g=new Set;function C(E){if(BC(Q,E)&&(Q=E,I)){const e=!nE.length;for(const t of g)t[1](),nE.push(t,Q);if(e){for(let t=0;t<nE.length;t+=2)nE[t][0](nE[t+1]);nE.length=0}}}function B(E){C(E(Q))}function i(E,e=lg){const t=[E,e];return g.add(t),g.size===1&&(I=A(C)||lg),E(Q),()=>{g.delete(t),g.size===0&&I&&(I(),I=null)}}return{set:C,update:B,subscribe:i}}function ns(Q,A,I){const g=!Array.isArray(Q),C=g?[Q]:Q,B=A.length<2;return gh(I,i=>{let E=!1;const e=[];let t=0,s=lg;const n=()=>{if(t)return;s();const r=A(g?e[0]:e,i);B?i(r):s=ss(r)?r:lg},D=C.map((r,w)=>$r(r,G=>{e[w]=G,t&=~(1<<w),E&&n()},()=>{t|=1<<w}));return E=!0,n(),function(){eo(D),s(),E=!1}})}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ds="152",ki={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Mi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},gy=0,Br=1,Cy=2,wd=3,ld=0,Ch=1,rs=2,qB=3,xB=0,DC=1,lB=2,Gd=2,rQ=0,fi=1,Qr=2,ir=3,Er=4,By=5,Ni=100,Qy=101,iy=102,or=103,er=104,Ey=200,oy=201,ey=202,ty=203,Bh=204,Qh=205,ay=206,sy=207,ny=208,Dy=209,ry=210,hy=0,cy=1,wy=2,_a=3,ly=4,Gy=5,Sy=6,yy=7,ue=0,ky=1,My=2,HB=0,Uy=1,Ny=2,Ky=3,ih=4,Fy=5,hs=300,WQ=301,_Q=302,ne=303,De=304,to=306,jQ=1e3,Wg=1001,jE=1002,wg=1003,re=1004,Sd=1004,PE=1005,yd=1005,Bg=1006,cs=1007,kd=1007,SB=1008,Md=1008,gC=1009,Ry=1010,Jy=1011,Eh=1012,dy=1013,xQ=1014,YC=1015,mB=1016,py=1017,qy=1018,ui=1020,fy=1021,Og=1023,uy=1024,Ly=1025,OQ=1026,mi=1027,HE=1028,Yy=1029,mE=1030,Hy=1031,my=1033,Ce=33776,Ya=33777,Ha=33778,Be=33779,ja=35840,tr=35841,Va=35842,ar=35843,oh=36196,Xa=37492,za=37496,$a=37808,sr=37809,nr=37810,Dr=37811,rr=37812,hr=37813,cr=37814,wr=37815,lr=37816,Gr=37817,Sr=37818,yr=37819,kr=37820,Mr=37821,Qe=36492,by=36283,Ur=36284,Nr=36285,Kr=36286,Ty=2200,xy=2201,Oy=2202,VE=2300,bi=2301,ma=2302,Ri=2400,Ji=2401,he=2402,ws=2500,eh=2501,vy=0,th=1,As=2,ce=3e3,hQ=3001,Py=3200,Zy=3201,gi=0,Wy=1,bB="",QI="srgb",CB="srgb-linear",ah="display-p3",Ud=0,ba=7680,Nd=7681,Kd=7682,Fd=7683,Rd=34055,Jd=34056,dd=5386,pd=512,qd=513,fd=514,ud=515,Ld=516,Yd=517,Hd=518,_y=519,we=35044,md=35048,bd=35040,Td=35045,xd=35049,Od=35041,vd=35046,Pd=35050,Zd=35042,Wd="100",Fr="300 es",Is=1035;class ZB{addEventListener(A,I){this._listeners===void 0&&(this._listeners={});const g=this._listeners;g[A]===void 0&&(g[A]=[]),g[A].indexOf(I)===-1&&g[A].push(I)}hasEventListener(A,I){if(this._listeners===void 0)return!1;const g=this._listeners;return g[A]!==void 0&&g[A].indexOf(I)!==-1}removeEventListener(A,I){if(this._listeners===void 0)return;const C=this._listeners[A];if(C!==void 0){const B=C.indexOf(I);B!==-1&&C.splice(B,1)}}dispatchEvent(A){if(this._listeners===void 0)return;const g=this._listeners[A.type];if(g!==void 0){A.target=this;const C=g.slice(0);for(let B=0,i=C.length;B<i;B++)C[B].call(this,A);A.target=null}}}const $g=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let bl=1234567;const Li=Math.PI/180,XE=180/Math.PI;function bC(){const Q=Math.random()*4294967295|0,A=Math.random()*4294967295|0,I=Math.random()*4294967295|0,g=Math.random()*4294967295|0;return($g[Q&255]+$g[Q>>8&255]+$g[Q>>16&255]+$g[Q>>24&255]+"-"+$g[A&255]+$g[A>>8&255]+"-"+$g[A>>16&15|64]+$g[A>>24&255]+"-"+$g[I&63|128]+$g[I>>8&255]+"-"+$g[I>>16&255]+$g[I>>24&255]+$g[g&255]+$g[g>>8&255]+$g[g>>16&255]+$g[g>>24&255]).toLowerCase()}function Gg(Q,A,I){return Math.max(A,Math.min(I,Q))}function sh(Q,A){return(Q%A+A)%A}function _d(Q,A,I,g,C){return g+(Q-A)*(C-g)/(I-A)}function jd(Q,A,I){return Q!==A?(I-Q)/(A-Q):0}function ie(Q,A,I){return(1-I)*Q+I*A}function Vd(Q,A,I,g){return ie(Q,A,1-Math.exp(-I*g))}function Xd(Q,A=1){return A-Math.abs(sh(Q,A*2)-A)}function zd(Q,A,I){return Q<=A?0:Q>=I?1:(Q=(Q-A)/(I-A),Q*Q*(3-2*Q))}function $d(Q,A,I){return Q<=A?0:Q>=I?1:(Q=(Q-A)/(I-A),Q*Q*Q*(Q*(Q*6-15)+10))}function Ap(Q,A){return Q+Math.floor(Math.random()*(A-Q+1))}function Ip(Q,A){return Q+Math.random()*(A-Q)}function gp(Q){return Q*(.5-Math.random())}function Cp(Q){Q!==void 0&&(bl=Q);let A=bl+=1831565813;return A=Math.imul(A^A>>>15,A|1),A^=A+Math.imul(A^A>>>7,A|61),((A^A>>>14)>>>0)/4294967296}function Bp(Q){return Q*Li}function Qp(Q){return Q*XE}function Rr(Q){return(Q&Q-1)===0&&Q!==0}function jy(Q){return Math.pow(2,Math.ceil(Math.log(Q)/Math.LN2))}function Vy(Q){return Math.pow(2,Math.floor(Math.log(Q)/Math.LN2))}function ip(Q,A,I,g,C){const B=Math.cos,i=Math.sin,E=B(I/2),e=i(I/2),t=B((A+g)/2),s=i((A+g)/2),n=B((A-g)/2),D=i((A-g)/2),r=B((g-A)/2),w=i((g-A)/2);switch(C){case"XYX":Q.set(E*s,e*n,e*D,E*t);break;case"YZY":Q.set(e*D,E*s,e*n,E*t);break;case"ZXZ":Q.set(e*n,e*D,E*s,E*t);break;case"XZX":Q.set(E*s,e*w,e*r,E*t);break;case"YXY":Q.set(e*r,E*s,e*w,E*t);break;case"ZYZ":Q.set(e*w,e*r,E*s,E*t);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+C)}}function HC(Q,A){switch(A.constructor){case Float32Array:return Q;case Uint16Array:return Q/65535;case Uint8Array:return Q/255;case Int16Array:return Math.max(Q/32767,-1);case Int8Array:return Math.max(Q/127,-1);default:throw new Error("Invalid component type.")}}function kI(Q,A){switch(A.constructor){case Float32Array:return Q;case Uint16Array:return Math.round(Q*65535);case Uint8Array:return Math.round(Q*255);case Int16Array:return Math.round(Q*32767);case Int8Array:return Math.round(Q*127);default:throw new Error("Invalid component type.")}}const Xy={DEG2RAD:Li,RAD2DEG:XE,generateUUID:bC,clamp:Gg,euclideanModulo:sh,mapLinear:_d,inverseLerp:jd,lerp:ie,damp:Vd,pingpong:Xd,smoothstep:zd,smootherstep:$d,randInt:Ap,randFloat:Ip,randFloatSpread:gp,seededRandom:Cp,degToRad:Bp,radToDeg:Qp,isPowerOfTwo:Rr,ceilPowerOfTwo:jy,floorPowerOfTwo:Vy,setQuaternionFromProperEuler:ip,normalize:kI,denormalize:HC};class rA{constructor(A=0,I=0){rA.prototype.isVector2=!0,this.x=A,this.y=I}get width(){return this.x}set width(A){this.x=A}get height(){return this.y}set height(A){this.y=A}set(A,I){return this.x=A,this.y=I,this}setScalar(A){return this.x=A,this.y=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y)}copy(A){return this.x=A.x,this.y=A.y,this}add(A){return this.x+=A.x,this.y+=A.y,this}addScalar(A){return this.x+=A,this.y+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this}subScalar(A){return this.x-=A,this.y-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this}multiply(A){return this.x*=A.x,this.y*=A.y,this}multiplyScalar(A){return this.x*=A,this.y*=A,this}divide(A){return this.x/=A.x,this.y/=A.y,this}divideScalar(A){return this.multiplyScalar(1/A)}applyMatrix3(A){const I=this.x,g=this.y,C=A.elements;return this.x=C[0]*I+C[3]*g+C[6],this.y=C[1]*I+C[4]*g+C[7],this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(A){return this.x*A.x+this.y*A.y}cross(A){return this.x*A.y-this.y*A.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(A){const I=Math.sqrt(this.lengthSq()*A.lengthSq());if(I===0)return Math.PI/2;const g=this.dot(A)/I;return Math.acos(Gg(g,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const I=this.x-A.x,g=this.y-A.y;return I*I+g*g}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this}equals(A){return A.x===this.x&&A.y===this.y}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this}rotateAround(A,I){const g=Math.cos(I),C=Math.sin(I),B=this.x-A.x,i=this.y-A.y;return this.x=B*g-i*C+A.x,this.y=B*C+i*g+A.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}let mI=class zy{constructor(){zy.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(A,I,g,C,B,i,E,e,t){const s=this.elements;return s[0]=A,s[1]=C,s[2]=E,s[3]=I,s[4]=B,s[5]=e,s[6]=g,s[7]=i,s[8]=t,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(A){const I=this.elements,g=A.elements;return I[0]=g[0],I[1]=g[1],I[2]=g[2],I[3]=g[3],I[4]=g[4],I[5]=g[5],I[6]=g[6],I[7]=g[7],I[8]=g[8],this}extractBasis(A,I,g){return A.setFromMatrix3Column(this,0),I.setFromMatrix3Column(this,1),g.setFromMatrix3Column(this,2),this}setFromMatrix4(A){const I=A.elements;return this.set(I[0],I[4],I[8],I[1],I[5],I[9],I[2],I[6],I[10]),this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,I){const g=A.elements,C=I.elements,B=this.elements,i=g[0],E=g[3],e=g[6],t=g[1],s=g[4],n=g[7],D=g[2],r=g[5],w=g[8],G=C[0],l=C[3],c=C[6],k=C[1],y=C[4],M=C[7],N=C[2],R=C[5],d=C[8];return B[0]=i*G+E*k+e*N,B[3]=i*l+E*y+e*R,B[6]=i*c+E*M+e*d,B[1]=t*G+s*k+n*N,B[4]=t*l+s*y+n*R,B[7]=t*c+s*M+n*d,B[2]=D*G+r*k+w*N,B[5]=D*l+r*y+w*R,B[8]=D*c+r*M+w*d,this}multiplyScalar(A){const I=this.elements;return I[0]*=A,I[3]*=A,I[6]*=A,I[1]*=A,I[4]*=A,I[7]*=A,I[2]*=A,I[5]*=A,I[8]*=A,this}determinant(){const A=this.elements,I=A[0],g=A[1],C=A[2],B=A[3],i=A[4],E=A[5],e=A[6],t=A[7],s=A[8];return I*i*s-I*E*t-g*B*s+g*E*e+C*B*t-C*i*e}invert(){const A=this.elements,I=A[0],g=A[1],C=A[2],B=A[3],i=A[4],E=A[5],e=A[6],t=A[7],s=A[8],n=s*i-E*t,D=E*e-s*B,r=t*B-i*e,w=I*n+g*D+C*r;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const G=1/w;return A[0]=n*G,A[1]=(C*t-s*g)*G,A[2]=(E*g-C*i)*G,A[3]=D*G,A[4]=(s*I-C*e)*G,A[5]=(C*B-E*I)*G,A[6]=r*G,A[7]=(g*e-t*I)*G,A[8]=(i*I-g*B)*G,this}transpose(){let A;const I=this.elements;return A=I[1],I[1]=I[3],I[3]=A,A=I[2],I[2]=I[6],I[6]=A,A=I[5],I[5]=I[7],I[7]=A,this}getNormalMatrix(A){return this.setFromMatrix4(A).invert().transpose()}transposeIntoArray(A){const I=this.elements;return A[0]=I[0],A[1]=I[3],A[2]=I[6],A[3]=I[1],A[4]=I[4],A[5]=I[7],A[6]=I[2],A[7]=I[5],A[8]=I[8],this}setUvTransform(A,I,g,C,B,i,E){const e=Math.cos(B),t=Math.sin(B);return this.set(g*e,g*t,-g*(e*i+t*E)+i+A,-C*t,C*e,-C*(-t*i+e*E)+E+I,0,0,1),this}scale(A,I){return this.premultiply(BD.makeScale(A,I)),this}rotate(A){return this.premultiply(BD.makeRotation(-A)),this}translate(A,I){return this.premultiply(BD.makeTranslation(A,I)),this}makeTranslation(A,I){return this.set(1,0,A,0,1,I,0,0,1),this}makeRotation(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,-g,0,g,I,0,0,0,1),this}makeScale(A,I){return this.set(A,0,0,0,I,0,0,0,1),this}equals(A){const I=this.elements,g=A.elements;for(let C=0;C<9;C++)if(I[C]!==g[C])return!1;return!0}fromArray(A,I=0){for(let g=0;g<9;g++)this.elements[g]=A[g+I];return this}toArray(A=[],I=0){const g=this.elements;return A[I]=g[0],A[I+1]=g[1],A[I+2]=g[2],A[I+3]=g[3],A[I+4]=g[4],A[I+5]=g[5],A[I+6]=g[6],A[I+7]=g[7],A[I+8]=g[8],A}clone(){return new this.constructor().fromArray(this.elements)}};const BD=new mI;function $y(Q){for(let A=Q.length-1;A>=0;--A)if(Q[A]>=65535)return!0;return!1}const Ep={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function bE(Q,A){return new Ep[Q](A)}function le(Q){return document.createElementNS("http://www.w3.org/1999/xhtml",Q)}const Tl={};function Ee(Q){Q in Tl||(Tl[Q]=!0,console.warn(Q))}function ZE(Q){return Q<.04045?Q*.0773993808:Math.pow(Q*.9478672986+.0521327014,2.4)}function QD(Q){return Q<.0031308?Q*12.92:1.055*Math.pow(Q,.41666)-.055}const op=new mI().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),ep=new mI().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function tp(Q){return Q.convertSRGBToLinear().applyMatrix3(ep)}function ap(Q){return Q.applyMatrix3(op).convertLinearToSRGB()}const sp={[CB]:Q=>Q,[QI]:Q=>Q.convertSRGBToLinear(),[ah]:tp},np={[CB]:Q=>Q,[QI]:Q=>Q.convertLinearToSRGB(),[ah]:ap},fC={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(Q){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!Q},get workingColorSpace(){return CB},set workingColorSpace(Q){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(Q,A,I){if(this.enabled===!1||A===I||!A||!I)return Q;const g=sp[A],C=np[I];if(g===void 0||C===void 0)throw new Error(`Unsupported color space conversion, "${A}" to "${I}".`);return C(g(Q))},fromWorkingColorSpace:function(Q,A){return this.convert(Q,this.workingColorSpace,A)},toWorkingColorSpace:function(Q,A){return this.convert(Q,A,this.workingColorSpace)}};let DE;class nh{static getDataURL(A){if(/^data:/i.test(A.src)||typeof HTMLCanvasElement>"u")return A.src;let I;if(A instanceof HTMLCanvasElement)I=A;else{DE===void 0&&(DE=le("canvas")),DE.width=A.width,DE.height=A.height;const g=DE.getContext("2d");A instanceof ImageData?g.putImageData(A,0,0):g.drawImage(A,0,0,A.width,A.height),I=DE}return I.width>2048||I.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",A),I.toDataURL("image/jpeg",.6)):I.toDataURL("image/png")}static sRGBToLinear(A){if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const I=le("canvas");I.width=A.width,I.height=A.height;const g=I.getContext("2d");g.drawImage(A,0,0,A.width,A.height);const C=g.getImageData(0,0,A.width,A.height),B=C.data;for(let i=0;i<B.length;i++)B[i]=ZE(B[i]/255)*255;return g.putImageData(C,0,0),I}else if(A.data){const I=A.data.slice(0);for(let g=0;g<I.length;g++)I instanceof Uint8Array||I instanceof Uint8ClampedArray?I[g]=Math.floor(ZE(I[g]/255)*255):I[g]=ZE(I[g]);return{data:I,width:A.width,height:A.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),A}}class di{constructor(A=null){this.isSource=!0,this.uuid=bC(),this.data=A,this.version=0}set needsUpdate(A){A===!0&&this.version++}toJSON(A){const I=A===void 0||typeof A=="string";if(!I&&A.images[this.uuid]!==void 0)return A.images[this.uuid];const g={uuid:this.uuid,url:""},C=this.data;if(C!==null){let B;if(Array.isArray(C)){B=[];for(let i=0,E=C.length;i<E;i++)C[i].isDataTexture?B.push(iD(C[i].image)):B.push(iD(C[i]))}else B=iD(C);g.url=B}return I||(A.images[this.uuid]=g),g}}function iD(Q){return typeof HTMLImageElement<"u"&&Q instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&Q instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&Q instanceof ImageBitmap?nh.getDataURL(Q):Q.data?{data:Array.from(Q.data),width:Q.width,height:Q.height,type:Q.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Dp=0;class sg extends ZB{constructor(A=sg.DEFAULT_IMAGE,I=sg.DEFAULT_MAPPING,g=Wg,C=Wg,B=Bg,i=SB,E=Og,e=gC,t=sg.DEFAULT_ANISOTROPY,s=bB){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dp++}),this.uuid=bC(),this.name="",this.source=new di(A),this.mipmaps=[],this.mapping=I,this.channel=0,this.wrapS=g,this.wrapT=C,this.magFilter=B,this.minFilter=i,this.anisotropy=t,this.format=E,this.internalFormat=null,this.type=e,this.offset=new rA(0,0),this.repeat=new rA(1,1),this.center=new rA(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mI,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof s=="string"?this.colorSpace=s:(Ee("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=s===hQ?QI:bB),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(A=null){this.source.data=A}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(A){return this.name=A.name,this.source=A.source,this.mipmaps=A.mipmaps.slice(0),this.mapping=A.mapping,this.channel=A.channel,this.wrapS=A.wrapS,this.wrapT=A.wrapT,this.magFilter=A.magFilter,this.minFilter=A.minFilter,this.anisotropy=A.anisotropy,this.format=A.format,this.internalFormat=A.internalFormat,this.type=A.type,this.offset.copy(A.offset),this.repeat.copy(A.repeat),this.center.copy(A.center),this.rotation=A.rotation,this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrix.copy(A.matrix),this.generateMipmaps=A.generateMipmaps,this.premultiplyAlpha=A.premultiplyAlpha,this.flipY=A.flipY,this.unpackAlignment=A.unpackAlignment,this.colorSpace=A.colorSpace,this.userData=JSON.parse(JSON.stringify(A.userData)),this.needsUpdate=!0,this}toJSON(A){const I=A===void 0||typeof A=="string";if(!I&&A.textures[this.uuid]!==void 0)return A.textures[this.uuid];const g={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(A).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(g.userData=this.userData),I||(A.textures[this.uuid]=g),g}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(A){if(this.mapping!==hs)return A;if(A.applyMatrix3(this.matrix),A.x<0||A.x>1)switch(this.wrapS){case jQ:A.x=A.x-Math.floor(A.x);break;case Wg:A.x=A.x<0?0:1;break;case jE:Math.abs(Math.floor(A.x)%2)===1?A.x=Math.ceil(A.x)-A.x:A.x=A.x-Math.floor(A.x);break}if(A.y<0||A.y>1)switch(this.wrapT){case jQ:A.y=A.y-Math.floor(A.y);break;case Wg:A.y=A.y<0?0:1;break;case jE:Math.abs(Math.floor(A.y)%2)===1?A.y=Math.ceil(A.y)-A.y:A.y=A.y-Math.floor(A.y);break}return this.flipY&&(A.y=1-A.y),A}set needsUpdate(A){A===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ee("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===QI?hQ:ce}set encoding(A){Ee("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=A===hQ?QI:bB}}sg.DEFAULT_IMAGE=null;sg.DEFAULT_MAPPING=hs;sg.DEFAULT_ANISOTROPY=1;class XI{constructor(A=0,I=0,g=0,C=1){XI.prototype.isVector4=!0,this.x=A,this.y=I,this.z=g,this.w=C}get width(){return this.z}set width(A){this.z=A}get height(){return this.w}set height(A){this.w=A}set(A,I,g,C){return this.x=A,this.y=I,this.z=g,this.w=C,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this.w=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setW(A){return this.w=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;case 2:this.z=I;break;case 3:this.w=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this.w=A.w!==void 0?A.w:1,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this.w+=A.w,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this.w+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this.z=A.z+I.z,this.w=A.w+I.w,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this.z+=A.z*I,this.w+=A.w*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this.w-=A.w,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this.w-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this.z=A.z-I.z,this.w=A.w-I.w,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this.w*=A.w,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this.w*=A,this}applyMatrix4(A){const I=this.x,g=this.y,C=this.z,B=this.w,i=A.elements;return this.x=i[0]*I+i[4]*g+i[8]*C+i[12]*B,this.y=i[1]*I+i[5]*g+i[9]*C+i[13]*B,this.z=i[2]*I+i[6]*g+i[10]*C+i[14]*B,this.w=i[3]*I+i[7]*g+i[11]*C+i[15]*B,this}divideScalar(A){return this.multiplyScalar(1/A)}setAxisAngleFromQuaternion(A){this.w=2*Math.acos(A.w);const I=Math.sqrt(1-A.w*A.w);return I<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=A.x/I,this.y=A.y/I,this.z=A.z/I),this}setAxisAngleFromRotationMatrix(A){let I,g,C,B;const e=A.elements,t=e[0],s=e[4],n=e[8],D=e[1],r=e[5],w=e[9],G=e[2],l=e[6],c=e[10];if(Math.abs(s-D)<.01&&Math.abs(n-G)<.01&&Math.abs(w-l)<.01){if(Math.abs(s+D)<.1&&Math.abs(n+G)<.1&&Math.abs(w+l)<.1&&Math.abs(t+r+c-3)<.1)return this.set(1,0,0,0),this;I=Math.PI;const y=(t+1)/2,M=(r+1)/2,N=(c+1)/2,R=(s+D)/4,d=(n+G)/4,L=(w+l)/4;return y>M&&y>N?y<.01?(g=0,C=.707106781,B=.707106781):(g=Math.sqrt(y),C=R/g,B=d/g):M>N?M<.01?(g=.707106781,C=0,B=.707106781):(C=Math.sqrt(M),g=R/C,B=L/C):N<.01?(g=.707106781,C=.707106781,B=0):(B=Math.sqrt(N),g=d/B,C=L/B),this.set(g,C,B,I),this}let k=Math.sqrt((l-w)*(l-w)+(n-G)*(n-G)+(D-s)*(D-s));return Math.abs(k)<.001&&(k=1),this.x=(l-w)/k,this.y=(n-G)/k,this.z=(D-s)/k,this.w=Math.acos((t+r+c-1)/2),this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this.w=Math.min(this.w,A.w),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this.w=Math.max(this.w,A.w),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this.z=Math.max(A.z,Math.min(I.z,this.z)),this.w=Math.max(A.w,Math.min(I.w,this.w)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this.z=Math.max(A,Math.min(I,this.z)),this.w=Math.max(A,Math.min(I,this.w)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z+this.w*A.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this.z+=(A.z-this.z)*I,this.w+=(A.w-this.w)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this.z=A.z+(I.z-A.z)*g,this.w=A.w+(I.w-A.w)*g,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z&&A.w===this.w}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this.z=A[I+2],this.w=A[I+3],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A[I+2]=this.z,A[I+3]=this.w,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this.z=A.getZ(I),this.w=A.getW(I),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yB extends ZB{constructor(A=1,I=1,g={}){super(),this.isWebGLRenderTarget=!0,this.width=A,this.height=I,this.depth=1,this.scissor=new XI(0,0,A,I),this.scissorTest=!1,this.viewport=new XI(0,0,A,I);const C={width:A,height:I,depth:1};g.encoding!==void 0&&(Ee("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),g.colorSpace=g.encoding===hQ?QI:bB),this.texture=new sg(C,g.mapping,g.wrapS,g.wrapT,g.magFilter,g.minFilter,g.format,g.type,g.anisotropy,g.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=g.generateMipmaps!==void 0?g.generateMipmaps:!1,this.texture.internalFormat=g.internalFormat!==void 0?g.internalFormat:null,this.texture.minFilter=g.minFilter!==void 0?g.minFilter:Bg,this.depthBuffer=g.depthBuffer!==void 0?g.depthBuffer:!0,this.stencilBuffer=g.stencilBuffer!==void 0?g.stencilBuffer:!1,this.depthTexture=g.depthTexture!==void 0?g.depthTexture:null,this.samples=g.samples!==void 0?g.samples:0}setSize(A,I,g=1){(this.width!==A||this.height!==I||this.depth!==g)&&(this.width=A,this.height=I,this.depth=g,this.texture.image.width=A,this.texture.image.height=I,this.texture.image.depth=g,this.dispose()),this.viewport.set(0,0,A,I),this.scissor.set(0,0,A,I)}clone(){return new this.constructor().copy(this)}copy(A){this.width=A.width,this.height=A.height,this.depth=A.depth,this.scissor.copy(A.scissor),this.scissorTest=A.scissorTest,this.viewport.copy(A.viewport),this.texture=A.texture.clone(),this.texture.isRenderTargetTexture=!0;const I=Object.assign({},A.texture.image);return this.texture.source=new di(I),this.depthBuffer=A.depthBuffer,this.stencilBuffer=A.stencilBuffer,A.depthTexture!==null&&(this.depthTexture=A.depthTexture.clone()),this.samples=A.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ls extends sg{constructor(A=null,I=1,g=1,C=1){super(null),this.isDataArrayTexture=!0,this.image={data:A,width:I,height:g,depth:C},this.magFilter=wg,this.minFilter=wg,this.wrapR=Wg,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rp extends yB{constructor(A=1,I=1,g=1){super(A,I),this.isWebGLArrayRenderTarget=!0,this.depth=g,this.texture=new ls(null,A,I,g),this.texture.isRenderTargetTexture=!0}}class Gs extends sg{constructor(A=null,I=1,g=1,C=1){super(null),this.isData3DTexture=!0,this.image={data:A,width:I,height:g,depth:C},this.magFilter=wg,this.minFilter=wg,this.wrapR=Wg,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hp extends yB{constructor(A=1,I=1,g=1){super(A,I),this.isWebGL3DRenderTarget=!0,this.depth=g,this.texture=new Gs(null,A,I,g),this.texture.isRenderTargetTexture=!0}}class cp extends yB{constructor(A=1,I=1,g=1,C={}){super(A,I,C),this.isWebGLMultipleRenderTargets=!0;const B=this.texture;this.texture=[];for(let i=0;i<g;i++)this.texture[i]=B.clone(),this.texture[i].isRenderTargetTexture=!0}setSize(A,I,g=1){if(this.width!==A||this.height!==I||this.depth!==g){this.width=A,this.height=I,this.depth=g;for(let C=0,B=this.texture.length;C<B;C++)this.texture[C].image.width=A,this.texture[C].image.height=I,this.texture[C].image.depth=g;this.dispose()}return this.viewport.set(0,0,A,I),this.scissor.set(0,0,A,I),this}copy(A){this.dispose(),this.width=A.width,this.height=A.height,this.depth=A.depth,this.scissor.copy(A.scissor),this.scissorTest=A.scissorTest,this.viewport.copy(A.viewport),this.depthBuffer=A.depthBuffer,this.stencilBuffer=A.stencilBuffer,A.depthTexture!==null&&(this.depthTexture=A.depthTexture.clone()),this.texture.length=0;for(let I=0,g=A.texture.length;I<g;I++)this.texture[I]=A.texture[I].clone(),this.texture[I].isRenderTargetTexture=!0;return this}}class ng{constructor(A=0,I=0,g=0,C=1){this.isQuaternion=!0,this._x=A,this._y=I,this._z=g,this._w=C}static slerpFlat(A,I,g,C,B,i,E){let e=g[C+0],t=g[C+1],s=g[C+2],n=g[C+3];const D=B[i+0],r=B[i+1],w=B[i+2],G=B[i+3];if(E===0){A[I+0]=e,A[I+1]=t,A[I+2]=s,A[I+3]=n;return}if(E===1){A[I+0]=D,A[I+1]=r,A[I+2]=w,A[I+3]=G;return}if(n!==G||e!==D||t!==r||s!==w){let l=1-E;const c=e*D+t*r+s*w+n*G,k=c>=0?1:-1,y=1-c*c;if(y>Number.EPSILON){const N=Math.sqrt(y),R=Math.atan2(N,c*k);l=Math.sin(l*R)/N,E=Math.sin(E*R)/N}const M=E*k;if(e=e*l+D*M,t=t*l+r*M,s=s*l+w*M,n=n*l+G*M,l===1-E){const N=1/Math.sqrt(e*e+t*t+s*s+n*n);e*=N,t*=N,s*=N,n*=N}}A[I]=e,A[I+1]=t,A[I+2]=s,A[I+3]=n}static multiplyQuaternionsFlat(A,I,g,C,B,i){const E=g[C],e=g[C+1],t=g[C+2],s=g[C+3],n=B[i],D=B[i+1],r=B[i+2],w=B[i+3];return A[I]=E*w+s*n+e*r-t*D,A[I+1]=e*w+s*D+t*n-E*r,A[I+2]=t*w+s*r+E*D-e*n,A[I+3]=s*w-E*n-e*D-t*r,A}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get w(){return this._w}set w(A){this._w=A,this._onChangeCallback()}set(A,I,g,C){return this._x=A,this._y=I,this._z=g,this._w=C,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(A){return this._x=A.x,this._y=A.y,this._z=A.z,this._w=A.w,this._onChangeCallback(),this}setFromEuler(A,I){const g=A._x,C=A._y,B=A._z,i=A._order,E=Math.cos,e=Math.sin,t=E(g/2),s=E(C/2),n=E(B/2),D=e(g/2),r=e(C/2),w=e(B/2);switch(i){case"XYZ":this._x=D*s*n+t*r*w,this._y=t*r*n-D*s*w,this._z=t*s*w+D*r*n,this._w=t*s*n-D*r*w;break;case"YXZ":this._x=D*s*n+t*r*w,this._y=t*r*n-D*s*w,this._z=t*s*w-D*r*n,this._w=t*s*n+D*r*w;break;case"ZXY":this._x=D*s*n-t*r*w,this._y=t*r*n+D*s*w,this._z=t*s*w+D*r*n,this._w=t*s*n-D*r*w;break;case"ZYX":this._x=D*s*n-t*r*w,this._y=t*r*n+D*s*w,this._z=t*s*w-D*r*n,this._w=t*s*n+D*r*w;break;case"YZX":this._x=D*s*n+t*r*w,this._y=t*r*n+D*s*w,this._z=t*s*w-D*r*n,this._w=t*s*n-D*r*w;break;case"XZY":this._x=D*s*n-t*r*w,this._y=t*r*n-D*s*w,this._z=t*s*w+D*r*n,this._w=t*s*n+D*r*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+i)}return I!==!1&&this._onChangeCallback(),this}setFromAxisAngle(A,I){const g=I/2,C=Math.sin(g);return this._x=A.x*C,this._y=A.y*C,this._z=A.z*C,this._w=Math.cos(g),this._onChangeCallback(),this}setFromRotationMatrix(A){const I=A.elements,g=I[0],C=I[4],B=I[8],i=I[1],E=I[5],e=I[9],t=I[2],s=I[6],n=I[10],D=g+E+n;if(D>0){const r=.5/Math.sqrt(D+1);this._w=.25/r,this._x=(s-e)*r,this._y=(B-t)*r,this._z=(i-C)*r}else if(g>E&&g>n){const r=2*Math.sqrt(1+g-E-n);this._w=(s-e)/r,this._x=.25*r,this._y=(C+i)/r,this._z=(B+t)/r}else if(E>n){const r=2*Math.sqrt(1+E-g-n);this._w=(B-t)/r,this._x=(C+i)/r,this._y=.25*r,this._z=(e+s)/r}else{const r=2*Math.sqrt(1+n-g-E);this._w=(i-C)/r,this._x=(B+t)/r,this._y=(e+s)/r,this._z=.25*r}return this._onChangeCallback(),this}setFromUnitVectors(A,I){let g=A.dot(I)+1;return g<Number.EPSILON?(g=0,Math.abs(A.x)>Math.abs(A.z)?(this._x=-A.y,this._y=A.x,this._z=0,this._w=g):(this._x=0,this._y=-A.z,this._z=A.y,this._w=g)):(this._x=A.y*I.z-A.z*I.y,this._y=A.z*I.x-A.x*I.z,this._z=A.x*I.y-A.y*I.x,this._w=g),this.normalize()}angleTo(A){return 2*Math.acos(Math.abs(Gg(this.dot(A),-1,1)))}rotateTowards(A,I){const g=this.angleTo(A);if(g===0)return this;const C=Math.min(1,I/g);return this.slerp(A,C),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(A){return this._x*A._x+this._y*A._y+this._z*A._z+this._w*A._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let A=this.length();return A===0?(this._x=0,this._y=0,this._z=0,this._w=1):(A=1/A,this._x=this._x*A,this._y=this._y*A,this._z=this._z*A,this._w=this._w*A),this._onChangeCallback(),this}multiply(A){return this.multiplyQuaternions(this,A)}premultiply(A){return this.multiplyQuaternions(A,this)}multiplyQuaternions(A,I){const g=A._x,C=A._y,B=A._z,i=A._w,E=I._x,e=I._y,t=I._z,s=I._w;return this._x=g*s+i*E+C*t-B*e,this._y=C*s+i*e+B*E-g*t,this._z=B*s+i*t+g*e-C*E,this._w=i*s-g*E-C*e-B*t,this._onChangeCallback(),this}slerp(A,I){if(I===0)return this;if(I===1)return this.copy(A);const g=this._x,C=this._y,B=this._z,i=this._w;let E=i*A._w+g*A._x+C*A._y+B*A._z;if(E<0?(this._w=-A._w,this._x=-A._x,this._y=-A._y,this._z=-A._z,E=-E):this.copy(A),E>=1)return this._w=i,this._x=g,this._y=C,this._z=B,this;const e=1-E*E;if(e<=Number.EPSILON){const r=1-I;return this._w=r*i+I*this._w,this._x=r*g+I*this._x,this._y=r*C+I*this._y,this._z=r*B+I*this._z,this.normalize(),this._onChangeCallback(),this}const t=Math.sqrt(e),s=Math.atan2(t,E),n=Math.sin((1-I)*s)/t,D=Math.sin(I*s)/t;return this._w=i*n+this._w*D,this._x=g*n+this._x*D,this._y=C*n+this._y*D,this._z=B*n+this._z*D,this._onChangeCallback(),this}slerpQuaternions(A,I,g){return this.copy(A).slerp(I,g)}random(){const A=Math.random(),I=Math.sqrt(1-A),g=Math.sqrt(A),C=2*Math.PI*Math.random(),B=2*Math.PI*Math.random();return this.set(I*Math.cos(C),g*Math.sin(B),g*Math.cos(B),I*Math.sin(C))}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._w===this._w}fromArray(A,I=0){return this._x=A[I],this._y=A[I+1],this._z=A[I+2],this._w=A[I+3],this._onChangeCallback(),this}toArray(A=[],I=0){return A[I]=this._x,A[I+1]=this._y,A[I+2]=this._z,A[I+3]=this._w,A}fromBufferAttribute(A,I){return this._x=A.getX(I),this._y=A.getY(I),this._z=A.getZ(I),this._w=A.getW(I),this}toJSON(){return this.toArray()}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class f{constructor(A=0,I=0,g=0){f.prototype.isVector3=!0,this.x=A,this.y=I,this.z=g}set(A,I,g){return g===void 0&&(g=this.z),this.x=A,this.y=I,this.z=g,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;case 2:this.z=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this.z=A.z+I.z,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this.z+=A.z*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this.z=A.z-I.z,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this}multiplyVectors(A,I){return this.x=A.x*I.x,this.y=A.y*I.y,this.z=A.z*I.z,this}applyEuler(A){return this.applyQuaternion(xl.setFromEuler(A))}applyAxisAngle(A,I){return this.applyQuaternion(xl.setFromAxisAngle(A,I))}applyMatrix3(A){const I=this.x,g=this.y,C=this.z,B=A.elements;return this.x=B[0]*I+B[3]*g+B[6]*C,this.y=B[1]*I+B[4]*g+B[7]*C,this.z=B[2]*I+B[5]*g+B[8]*C,this}applyNormalMatrix(A){return this.applyMatrix3(A).normalize()}applyMatrix4(A){const I=this.x,g=this.y,C=this.z,B=A.elements,i=1/(B[3]*I+B[7]*g+B[11]*C+B[15]);return this.x=(B[0]*I+B[4]*g+B[8]*C+B[12])*i,this.y=(B[1]*I+B[5]*g+B[9]*C+B[13])*i,this.z=(B[2]*I+B[6]*g+B[10]*C+B[14])*i,this}applyQuaternion(A){const I=this.x,g=this.y,C=this.z,B=A.x,i=A.y,E=A.z,e=A.w,t=e*I+i*C-E*g,s=e*g+E*I-B*C,n=e*C+B*g-i*I,D=-B*I-i*g-E*C;return this.x=t*e+D*-B+s*-E-n*-i,this.y=s*e+D*-i+n*-B-t*-E,this.z=n*e+D*-E+t*-i-s*-B,this}project(A){return this.applyMatrix4(A.matrixWorldInverse).applyMatrix4(A.projectionMatrix)}unproject(A){return this.applyMatrix4(A.projectionMatrixInverse).applyMatrix4(A.matrixWorld)}transformDirection(A){const I=this.x,g=this.y,C=this.z,B=A.elements;return this.x=B[0]*I+B[4]*g+B[8]*C,this.y=B[1]*I+B[5]*g+B[9]*C,this.z=B[2]*I+B[6]*g+B[10]*C,this.normalize()}divide(A){return this.x/=A.x,this.y/=A.y,this.z/=A.z,this}divideScalar(A){return this.multiplyScalar(1/A)}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this.z=Math.max(A.z,Math.min(I.z,this.z)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this.z=Math.max(A,Math.min(I,this.z)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this.z+=(A.z-this.z)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this.z=A.z+(I.z-A.z)*g,this}cross(A){return this.crossVectors(this,A)}crossVectors(A,I){const g=A.x,C=A.y,B=A.z,i=I.x,E=I.y,e=I.z;return this.x=C*e-B*E,this.y=B*i-g*e,this.z=g*E-C*i,this}projectOnVector(A){const I=A.lengthSq();if(I===0)return this.set(0,0,0);const g=A.dot(this)/I;return this.copy(A).multiplyScalar(g)}projectOnPlane(A){return ED.copy(this).projectOnVector(A),this.sub(ED)}reflect(A){return this.sub(ED.copy(A).multiplyScalar(2*this.dot(A)))}angleTo(A){const I=Math.sqrt(this.lengthSq()*A.lengthSq());if(I===0)return Math.PI/2;const g=this.dot(A)/I;return Math.acos(Gg(g,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const I=this.x-A.x,g=this.y-A.y,C=this.z-A.z;return I*I+g*g+C*C}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)+Math.abs(this.z-A.z)}setFromSpherical(A){return this.setFromSphericalCoords(A.radius,A.phi,A.theta)}setFromSphericalCoords(A,I,g){const C=Math.sin(I)*A;return this.x=C*Math.sin(g),this.y=Math.cos(I)*A,this.z=C*Math.cos(g),this}setFromCylindrical(A){return this.setFromCylindricalCoords(A.radius,A.theta,A.y)}setFromCylindricalCoords(A,I,g){return this.x=A*Math.sin(I),this.y=g,this.z=A*Math.cos(I),this}setFromMatrixPosition(A){const I=A.elements;return this.x=I[12],this.y=I[13],this.z=I[14],this}setFromMatrixScale(A){const I=this.setFromMatrixColumn(A,0).length(),g=this.setFromMatrixColumn(A,1).length(),C=this.setFromMatrixColumn(A,2).length();return this.x=I,this.y=g,this.z=C,this}setFromMatrixColumn(A,I){return this.fromArray(A.elements,I*4)}setFromMatrix3Column(A,I){return this.fromArray(A.elements,I*3)}setFromEuler(A){return this.x=A._x,this.y=A._y,this.z=A._z,this}setFromColor(A){return this.x=A.r,this.y=A.g,this.z=A.b,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this.z=A[I+2],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A[I+2]=this.z,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this.z=A.getZ(I),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const A=(Math.random()-.5)*2,I=Math.random()*Math.PI*2,g=Math.sqrt(1-A**2);return this.x=g*Math.cos(I),this.y=g*Math.sin(I),this.z=A,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ED=new f,xl=new ng;class kB{constructor(A=new f(1/0,1/0,1/0),I=new f(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=A,this.max=I}set(A,I){return this.min.copy(A),this.max.copy(I),this}setFromArray(A){this.makeEmpty();for(let I=0,g=A.length;I<g;I+=3)this.expandByPoint(BQ.fromArray(A,I));return this}setFromBufferAttribute(A){this.makeEmpty();for(let I=0,g=A.count;I<g;I++)this.expandByPoint(BQ.fromBufferAttribute(A,I));return this}setFromPoints(A){this.makeEmpty();for(let I=0,g=A.length;I<g;I++)this.expandByPoint(A[I]);return this}setFromCenterAndSize(A,I){const g=BQ.copy(I).multiplyScalar(.5);return this.min.copy(A).sub(g),this.max.copy(A).add(g),this}setFromObject(A,I=!1){return this.makeEmpty(),this.expandByObject(A,I)}clone(){return new this.constructor().copy(this)}copy(A){return this.min.copy(A.min),this.max.copy(A.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(A){return this.isEmpty()?A.set(0,0,0):A.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(A){return this.isEmpty()?A.set(0,0,0):A.subVectors(this.max,this.min)}expandByPoint(A){return this.min.min(A),this.max.max(A),this}expandByVector(A){return this.min.sub(A),this.max.add(A),this}expandByScalar(A){return this.min.addScalar(-A),this.max.addScalar(A),this}expandByObject(A,I=!1){if(A.updateWorldMatrix(!1,!1),A.boundingBox!==void 0)A.boundingBox===null&&A.computeBoundingBox(),rE.copy(A.boundingBox),rE.applyMatrix4(A.matrixWorld),this.union(rE);else{const C=A.geometry;if(C!==void 0)if(I&&C.attributes!==void 0&&C.attributes.position!==void 0){const B=C.attributes.position;for(let i=0,E=B.count;i<E;i++)BQ.fromBufferAttribute(B,i).applyMatrix4(A.matrixWorld),this.expandByPoint(BQ)}else C.boundingBox===null&&C.computeBoundingBox(),rE.copy(C.boundingBox),rE.applyMatrix4(A.matrixWorld),this.union(rE)}const g=A.children;for(let C=0,B=g.length;C<B;C++)this.expandByObject(g[C],I);return this}containsPoint(A){return!(A.x<this.min.x||A.x>this.max.x||A.y<this.min.y||A.y>this.max.y||A.z<this.min.z||A.z>this.max.z)}containsBox(A){return this.min.x<=A.min.x&&A.max.x<=this.max.x&&this.min.y<=A.min.y&&A.max.y<=this.max.y&&this.min.z<=A.min.z&&A.max.z<=this.max.z}getParameter(A,I){return I.set((A.x-this.min.x)/(this.max.x-this.min.x),(A.y-this.min.y)/(this.max.y-this.min.y),(A.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(A){return!(A.max.x<this.min.x||A.min.x>this.max.x||A.max.y<this.min.y||A.min.y>this.max.y||A.max.z<this.min.z||A.min.z>this.max.z)}intersectsSphere(A){return this.clampPoint(A.center,BQ),BQ.distanceToSquared(A.center)<=A.radius*A.radius}intersectsPlane(A){let I,g;return A.normal.x>0?(I=A.normal.x*this.min.x,g=A.normal.x*this.max.x):(I=A.normal.x*this.max.x,g=A.normal.x*this.min.x),A.normal.y>0?(I+=A.normal.y*this.min.y,g+=A.normal.y*this.max.y):(I+=A.normal.y*this.max.y,g+=A.normal.y*this.min.y),A.normal.z>0?(I+=A.normal.z*this.min.z,g+=A.normal.z*this.max.z):(I+=A.normal.z*this.max.z,g+=A.normal.z*this.min.z),I<=-A.constant&&g>=-A.constant}intersectsTriangle(A){if(this.isEmpty())return!1;this.getCenter(mo),Wt.subVectors(this.max,mo),hE.subVectors(A.a,mo),cE.subVectors(A.b,mo),wE.subVectors(A.c,mo),qQ.subVectors(cE,hE),fQ.subVectors(wE,cE),Di.subVectors(hE,wE);let I=[0,-qQ.z,qQ.y,0,-fQ.z,fQ.y,0,-Di.z,Di.y,qQ.z,0,-qQ.x,fQ.z,0,-fQ.x,Di.z,0,-Di.x,-qQ.y,qQ.x,0,-fQ.y,fQ.x,0,-Di.y,Di.x,0];return!oD(I,hE,cE,wE,Wt)||(I=[1,0,0,0,1,0,0,0,1],!oD(I,hE,cE,wE,Wt))?!1:(_t.crossVectors(qQ,fQ),I=[_t.x,_t.y,_t.z],oD(I,hE,cE,wE,Wt))}clampPoint(A,I){return I.copy(A).clamp(this.min,this.max)}distanceToPoint(A){return this.clampPoint(A,BQ).distanceTo(A)}getBoundingSphere(A){return this.isEmpty()?A.makeEmpty():(this.getCenter(A.center),A.radius=this.getSize(BQ).length()*.5),A}intersect(A){return this.min.max(A.min),this.max.min(A.max),this.isEmpty()&&this.makeEmpty(),this}union(A){return this.min.min(A.min),this.max.max(A.max),this}applyMatrix4(A){return this.isEmpty()?this:(CQ[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(A),CQ[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(A),CQ[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(A),CQ[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(A),CQ[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(A),CQ[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(A),CQ[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(A),CQ[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(A),this.setFromPoints(CQ),this)}translate(A){return this.min.add(A),this.max.add(A),this}equals(A){return A.min.equals(this.min)&&A.max.equals(this.max)}}const CQ=[new f,new f,new f,new f,new f,new f,new f,new f],BQ=new f,rE=new kB,hE=new f,cE=new f,wE=new f,qQ=new f,fQ=new f,Di=new f,mo=new f,Wt=new f,_t=new f,ri=new f;function oD(Q,A,I,g,C){for(let B=0,i=Q.length-3;B<=i;B+=3){ri.fromArray(Q,B);const E=C.x*Math.abs(ri.x)+C.y*Math.abs(ri.y)+C.z*Math.abs(ri.z),e=A.dot(ri),t=I.dot(ri),s=g.dot(ri);if(Math.max(-Math.max(e,t,s),Math.min(e,t,s))>E)return!1}return!0}const wp=new kB,bo=new f,eD=new f;class MB{constructor(A=new f,I=-1){this.center=A,this.radius=I}set(A,I){return this.center.copy(A),this.radius=I,this}setFromPoints(A,I){const g=this.center;I!==void 0?g.copy(I):wp.setFromPoints(A).getCenter(g);let C=0;for(let B=0,i=A.length;B<i;B++)C=Math.max(C,g.distanceToSquared(A[B]));return this.radius=Math.sqrt(C),this}copy(A){return this.center.copy(A.center),this.radius=A.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(A){return A.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(A){return A.distanceTo(this.center)-this.radius}intersectsSphere(A){const I=this.radius+A.radius;return A.center.distanceToSquared(this.center)<=I*I}intersectsBox(A){return A.intersectsSphere(this)}intersectsPlane(A){return Math.abs(A.distanceToPoint(this.center))<=this.radius}clampPoint(A,I){const g=this.center.distanceToSquared(A);return I.copy(A),g>this.radius*this.radius&&(I.sub(this.center).normalize(),I.multiplyScalar(this.radius).add(this.center)),I}getBoundingBox(A){return this.isEmpty()?(A.makeEmpty(),A):(A.set(this.center,this.center),A.expandByScalar(this.radius),A)}applyMatrix4(A){return this.center.applyMatrix4(A),this.radius=this.radius*A.getMaxScaleOnAxis(),this}translate(A){return this.center.add(A),this}expandByPoint(A){if(this.isEmpty())return this.center.copy(A),this.radius=0,this;bo.subVectors(A,this.center);const I=bo.lengthSq();if(I>this.radius*this.radius){const g=Math.sqrt(I),C=(g-this.radius)*.5;this.center.addScaledVector(bo,C/g),this.radius+=C}return this}union(A){return A.isEmpty()?this:this.isEmpty()?(this.copy(A),this):(this.center.equals(A.center)===!0?this.radius=Math.max(this.radius,A.radius):(eD.subVectors(A.center,this.center).setLength(A.radius),this.expandByPoint(bo.copy(A.center).add(eD)),this.expandByPoint(bo.copy(A.center).sub(eD))),this)}equals(A){return A.center.equals(this.center)&&A.radius===this.radius}clone(){return new this.constructor().copy(this)}}const QQ=new f,tD=new f,jt=new f,uQ=new f,aD=new f,Vt=new f,sD=new f;class Le{constructor(A=new f,I=new f(0,0,-1)){this.origin=A,this.direction=I}set(A,I){return this.origin.copy(A),this.direction.copy(I),this}copy(A){return this.origin.copy(A.origin),this.direction.copy(A.direction),this}at(A,I){return I.copy(this.origin).addScaledVector(this.direction,A)}lookAt(A){return this.direction.copy(A).sub(this.origin).normalize(),this}recast(A){return this.origin.copy(this.at(A,QQ)),this}closestPointToPoint(A,I){I.subVectors(A,this.origin);const g=I.dot(this.direction);return g<0?I.copy(this.origin):I.copy(this.origin).addScaledVector(this.direction,g)}distanceToPoint(A){return Math.sqrt(this.distanceSqToPoint(A))}distanceSqToPoint(A){const I=QQ.subVectors(A,this.origin).dot(this.direction);return I<0?this.origin.distanceToSquared(A):(QQ.copy(this.origin).addScaledVector(this.direction,I),QQ.distanceToSquared(A))}distanceSqToSegment(A,I,g,C){tD.copy(A).add(I).multiplyScalar(.5),jt.copy(I).sub(A).normalize(),uQ.copy(this.origin).sub(tD);const B=A.distanceTo(I)*.5,i=-this.direction.dot(jt),E=uQ.dot(this.direction),e=-uQ.dot(jt),t=uQ.lengthSq(),s=Math.abs(1-i*i);let n,D,r,w;if(s>0)if(n=i*e-E,D=i*E-e,w=B*s,n>=0)if(D>=-w)if(D<=w){const G=1/s;n*=G,D*=G,r=n*(n+i*D+2*E)+D*(i*n+D+2*e)+t}else D=B,n=Math.max(0,-(i*D+E)),r=-n*n+D*(D+2*e)+t;else D=-B,n=Math.max(0,-(i*D+E)),r=-n*n+D*(D+2*e)+t;else D<=-w?(n=Math.max(0,-(-i*B+E)),D=n>0?-B:Math.min(Math.max(-B,-e),B),r=-n*n+D*(D+2*e)+t):D<=w?(n=0,D=Math.min(Math.max(-B,-e),B),r=D*(D+2*e)+t):(n=Math.max(0,-(i*B+E)),D=n>0?B:Math.min(Math.max(-B,-e),B),r=-n*n+D*(D+2*e)+t);else D=i>0?-B:B,n=Math.max(0,-(i*D+E)),r=-n*n+D*(D+2*e)+t;return g&&g.copy(this.origin).addScaledVector(this.direction,n),C&&C.copy(tD).addScaledVector(jt,D),r}intersectSphere(A,I){QQ.subVectors(A.center,this.origin);const g=QQ.dot(this.direction),C=QQ.dot(QQ)-g*g,B=A.radius*A.radius;if(C>B)return null;const i=Math.sqrt(B-C),E=g-i,e=g+i;return e<0?null:E<0?this.at(e,I):this.at(E,I)}intersectsSphere(A){return this.distanceSqToPoint(A.center)<=A.radius*A.radius}distanceToPlane(A){const I=A.normal.dot(this.direction);if(I===0)return A.distanceToPoint(this.origin)===0?0:null;const g=-(this.origin.dot(A.normal)+A.constant)/I;return g>=0?g:null}intersectPlane(A,I){const g=this.distanceToPlane(A);return g===null?null:this.at(g,I)}intersectsPlane(A){const I=A.distanceToPoint(this.origin);return I===0||A.normal.dot(this.direction)*I<0}intersectBox(A,I){let g,C,B,i,E,e;const t=1/this.direction.x,s=1/this.direction.y,n=1/this.direction.z,D=this.origin;return t>=0?(g=(A.min.x-D.x)*t,C=(A.max.x-D.x)*t):(g=(A.max.x-D.x)*t,C=(A.min.x-D.x)*t),s>=0?(B=(A.min.y-D.y)*s,i=(A.max.y-D.y)*s):(B=(A.max.y-D.y)*s,i=(A.min.y-D.y)*s),g>i||B>C||((B>g||isNaN(g))&&(g=B),(i<C||isNaN(C))&&(C=i),n>=0?(E=(A.min.z-D.z)*n,e=(A.max.z-D.z)*n):(E=(A.max.z-D.z)*n,e=(A.min.z-D.z)*n),g>e||E>C)||((E>g||g!==g)&&(g=E),(e<C||C!==C)&&(C=e),C<0)?null:this.at(g>=0?g:C,I)}intersectsBox(A){return this.intersectBox(A,QQ)!==null}intersectTriangle(A,I,g,C,B){aD.subVectors(I,A),Vt.subVectors(g,A),sD.crossVectors(aD,Vt);let i=this.direction.dot(sD),E;if(i>0){if(C)return null;E=1}else if(i<0)E=-1,i=-i;else return null;uQ.subVectors(this.origin,A);const e=E*this.direction.dot(Vt.crossVectors(uQ,Vt));if(e<0)return null;const t=E*this.direction.dot(aD.cross(uQ));if(t<0||e+t>i)return null;const s=-E*uQ.dot(sD);return s<0?null:this.at(s/i,B)}applyMatrix4(A){return this.origin.applyMatrix4(A),this.direction.transformDirection(A),this}equals(A){return A.origin.equals(this.origin)&&A.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class sI{constructor(){sI.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(A,I,g,C,B,i,E,e,t,s,n,D,r,w,G,l){const c=this.elements;return c[0]=A,c[4]=I,c[8]=g,c[12]=C,c[1]=B,c[5]=i,c[9]=E,c[13]=e,c[2]=t,c[6]=s,c[10]=n,c[14]=D,c[3]=r,c[7]=w,c[11]=G,c[15]=l,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sI().fromArray(this.elements)}copy(A){const I=this.elements,g=A.elements;return I[0]=g[0],I[1]=g[1],I[2]=g[2],I[3]=g[3],I[4]=g[4],I[5]=g[5],I[6]=g[6],I[7]=g[7],I[8]=g[8],I[9]=g[9],I[10]=g[10],I[11]=g[11],I[12]=g[12],I[13]=g[13],I[14]=g[14],I[15]=g[15],this}copyPosition(A){const I=this.elements,g=A.elements;return I[12]=g[12],I[13]=g[13],I[14]=g[14],this}setFromMatrix3(A){const I=A.elements;return this.set(I[0],I[3],I[6],0,I[1],I[4],I[7],0,I[2],I[5],I[8],0,0,0,0,1),this}extractBasis(A,I,g){return A.setFromMatrixColumn(this,0),I.setFromMatrixColumn(this,1),g.setFromMatrixColumn(this,2),this}makeBasis(A,I,g){return this.set(A.x,I.x,g.x,0,A.y,I.y,g.y,0,A.z,I.z,g.z,0,0,0,0,1),this}extractRotation(A){const I=this.elements,g=A.elements,C=1/lE.setFromMatrixColumn(A,0).length(),B=1/lE.setFromMatrixColumn(A,1).length(),i=1/lE.setFromMatrixColumn(A,2).length();return I[0]=g[0]*C,I[1]=g[1]*C,I[2]=g[2]*C,I[3]=0,I[4]=g[4]*B,I[5]=g[5]*B,I[6]=g[6]*B,I[7]=0,I[8]=g[8]*i,I[9]=g[9]*i,I[10]=g[10]*i,I[11]=0,I[12]=0,I[13]=0,I[14]=0,I[15]=1,this}makeRotationFromEuler(A){const I=this.elements,g=A.x,C=A.y,B=A.z,i=Math.cos(g),E=Math.sin(g),e=Math.cos(C),t=Math.sin(C),s=Math.cos(B),n=Math.sin(B);if(A.order==="XYZ"){const D=i*s,r=i*n,w=E*s,G=E*n;I[0]=e*s,I[4]=-e*n,I[8]=t,I[1]=r+w*t,I[5]=D-G*t,I[9]=-E*e,I[2]=G-D*t,I[6]=w+r*t,I[10]=i*e}else if(A.order==="YXZ"){const D=e*s,r=e*n,w=t*s,G=t*n;I[0]=D+G*E,I[4]=w*E-r,I[8]=i*t,I[1]=i*n,I[5]=i*s,I[9]=-E,I[2]=r*E-w,I[6]=G+D*E,I[10]=i*e}else if(A.order==="ZXY"){const D=e*s,r=e*n,w=t*s,G=t*n;I[0]=D-G*E,I[4]=-i*n,I[8]=w+r*E,I[1]=r+w*E,I[5]=i*s,I[9]=G-D*E,I[2]=-i*t,I[6]=E,I[10]=i*e}else if(A.order==="ZYX"){const D=i*s,r=i*n,w=E*s,G=E*n;I[0]=e*s,I[4]=w*t-r,I[8]=D*t+G,I[1]=e*n,I[5]=G*t+D,I[9]=r*t-w,I[2]=-t,I[6]=E*e,I[10]=i*e}else if(A.order==="YZX"){const D=i*e,r=i*t,w=E*e,G=E*t;I[0]=e*s,I[4]=G-D*n,I[8]=w*n+r,I[1]=n,I[5]=i*s,I[9]=-E*s,I[2]=-t*s,I[6]=r*n+w,I[10]=D-G*n}else if(A.order==="XZY"){const D=i*e,r=i*t,w=E*e,G=E*t;I[0]=e*s,I[4]=-n,I[8]=t*s,I[1]=D*n+G,I[5]=i*s,I[9]=r*n-w,I[2]=w*n-r,I[6]=E*s,I[10]=G*n+D}return I[3]=0,I[7]=0,I[11]=0,I[12]=0,I[13]=0,I[14]=0,I[15]=1,this}makeRotationFromQuaternion(A){return this.compose(lp,A,Gp)}lookAt(A,I,g){const C=this.elements;return pC.subVectors(A,I),pC.lengthSq()===0&&(pC.z=1),pC.normalize(),LQ.crossVectors(g,pC),LQ.lengthSq()===0&&(Math.abs(g.z)===1?pC.x+=1e-4:pC.z+=1e-4,pC.normalize(),LQ.crossVectors(g,pC)),LQ.normalize(),Xt.crossVectors(pC,LQ),C[0]=LQ.x,C[4]=Xt.x,C[8]=pC.x,C[1]=LQ.y,C[5]=Xt.y,C[9]=pC.y,C[2]=LQ.z,C[6]=Xt.z,C[10]=pC.z,this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,I){const g=A.elements,C=I.elements,B=this.elements,i=g[0],E=g[4],e=g[8],t=g[12],s=g[1],n=g[5],D=g[9],r=g[13],w=g[2],G=g[6],l=g[10],c=g[14],k=g[3],y=g[7],M=g[11],N=g[15],R=C[0],d=C[4],L=C[8],F=C[12],u=C[1],W=C[5],$=C[9],H=C[13],v=C[2],IA=C[6],oA=C[10],gA=C[14],iA=C[3],MA=C[7],lA=C[11],mA=C[15];return B[0]=i*R+E*u+e*v+t*iA,B[4]=i*d+E*W+e*IA+t*MA,B[8]=i*L+E*$+e*oA+t*lA,B[12]=i*F+E*H+e*gA+t*mA,B[1]=s*R+n*u+D*v+r*iA,B[5]=s*d+n*W+D*IA+r*MA,B[9]=s*L+n*$+D*oA+r*lA,B[13]=s*F+n*H+D*gA+r*mA,B[2]=w*R+G*u+l*v+c*iA,B[6]=w*d+G*W+l*IA+c*MA,B[10]=w*L+G*$+l*oA+c*lA,B[14]=w*F+G*H+l*gA+c*mA,B[3]=k*R+y*u+M*v+N*iA,B[7]=k*d+y*W+M*IA+N*MA,B[11]=k*L+y*$+M*oA+N*lA,B[15]=k*F+y*H+M*gA+N*mA,this}multiplyScalar(A){const I=this.elements;return I[0]*=A,I[4]*=A,I[8]*=A,I[12]*=A,I[1]*=A,I[5]*=A,I[9]*=A,I[13]*=A,I[2]*=A,I[6]*=A,I[10]*=A,I[14]*=A,I[3]*=A,I[7]*=A,I[11]*=A,I[15]*=A,this}determinant(){const A=this.elements,I=A[0],g=A[4],C=A[8],B=A[12],i=A[1],E=A[5],e=A[9],t=A[13],s=A[2],n=A[6],D=A[10],r=A[14],w=A[3],G=A[7],l=A[11],c=A[15];return w*(+B*e*n-C*t*n-B*E*D+g*t*D+C*E*r-g*e*r)+G*(+I*e*r-I*t*D+B*i*D-C*i*r+C*t*s-B*e*s)+l*(+I*t*n-I*E*r-B*i*n+g*i*r+B*E*s-g*t*s)+c*(-C*E*s-I*e*n+I*E*D+C*i*n-g*i*D+g*e*s)}transpose(){const A=this.elements;let I;return I=A[1],A[1]=A[4],A[4]=I,I=A[2],A[2]=A[8],A[8]=I,I=A[6],A[6]=A[9],A[9]=I,I=A[3],A[3]=A[12],A[12]=I,I=A[7],A[7]=A[13],A[13]=I,I=A[11],A[11]=A[14],A[14]=I,this}setPosition(A,I,g){const C=this.elements;return A.isVector3?(C[12]=A.x,C[13]=A.y,C[14]=A.z):(C[12]=A,C[13]=I,C[14]=g),this}invert(){const A=this.elements,I=A[0],g=A[1],C=A[2],B=A[3],i=A[4],E=A[5],e=A[6],t=A[7],s=A[8],n=A[9],D=A[10],r=A[11],w=A[12],G=A[13],l=A[14],c=A[15],k=n*l*t-G*D*t+G*e*r-E*l*r-n*e*c+E*D*c,y=w*D*t-s*l*t-w*e*r+i*l*r+s*e*c-i*D*c,M=s*G*t-w*n*t+w*E*r-i*G*r-s*E*c+i*n*c,N=w*n*e-s*G*e-w*E*D+i*G*D+s*E*l-i*n*l,R=I*k+g*y+C*M+B*N;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const d=1/R;return A[0]=k*d,A[1]=(G*D*B-n*l*B-G*C*r+g*l*r+n*C*c-g*D*c)*d,A[2]=(E*l*B-G*e*B+G*C*t-g*l*t-E*C*c+g*e*c)*d,A[3]=(n*e*B-E*D*B-n*C*t+g*D*t+E*C*r-g*e*r)*d,A[4]=y*d,A[5]=(s*l*B-w*D*B+w*C*r-I*l*r-s*C*c+I*D*c)*d,A[6]=(w*e*B-i*l*B-w*C*t+I*l*t+i*C*c-I*e*c)*d,A[7]=(i*D*B-s*e*B+s*C*t-I*D*t-i*C*r+I*e*r)*d,A[8]=M*d,A[9]=(w*n*B-s*G*B-w*g*r+I*G*r+s*g*c-I*n*c)*d,A[10]=(i*G*B-w*E*B+w*g*t-I*G*t-i*g*c+I*E*c)*d,A[11]=(s*E*B-i*n*B-s*g*t+I*n*t+i*g*r-I*E*r)*d,A[12]=N*d,A[13]=(s*G*C-w*n*C+w*g*D-I*G*D-s*g*l+I*n*l)*d,A[14]=(w*E*C-i*G*C-w*g*e+I*G*e+i*g*l-I*E*l)*d,A[15]=(i*n*C-s*E*C+s*g*e-I*n*e-i*g*D+I*E*D)*d,this}scale(A){const I=this.elements,g=A.x,C=A.y,B=A.z;return I[0]*=g,I[4]*=C,I[8]*=B,I[1]*=g,I[5]*=C,I[9]*=B,I[2]*=g,I[6]*=C,I[10]*=B,I[3]*=g,I[7]*=C,I[11]*=B,this}getMaxScaleOnAxis(){const A=this.elements,I=A[0]*A[0]+A[1]*A[1]+A[2]*A[2],g=A[4]*A[4]+A[5]*A[5]+A[6]*A[6],C=A[8]*A[8]+A[9]*A[9]+A[10]*A[10];return Math.sqrt(Math.max(I,g,C))}makeTranslation(A,I,g){return this.set(1,0,0,A,0,1,0,I,0,0,1,g,0,0,0,1),this}makeRotationX(A){const I=Math.cos(A),g=Math.sin(A);return this.set(1,0,0,0,0,I,-g,0,0,g,I,0,0,0,0,1),this}makeRotationY(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,0,g,0,0,1,0,0,-g,0,I,0,0,0,0,1),this}makeRotationZ(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,-g,0,0,g,I,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(A,I){const g=Math.cos(I),C=Math.sin(I),B=1-g,i=A.x,E=A.y,e=A.z,t=B*i,s=B*E;return this.set(t*i+g,t*E-C*e,t*e+C*E,0,t*E+C*e,s*E+g,s*e-C*i,0,t*e-C*E,s*e+C*i,B*e*e+g,0,0,0,0,1),this}makeScale(A,I,g){return this.set(A,0,0,0,0,I,0,0,0,0,g,0,0,0,0,1),this}makeShear(A,I,g,C,B,i){return this.set(1,g,B,0,A,1,i,0,I,C,1,0,0,0,0,1),this}compose(A,I,g){const C=this.elements,B=I._x,i=I._y,E=I._z,e=I._w,t=B+B,s=i+i,n=E+E,D=B*t,r=B*s,w=B*n,G=i*s,l=i*n,c=E*n,k=e*t,y=e*s,M=e*n,N=g.x,R=g.y,d=g.z;return C[0]=(1-(G+c))*N,C[1]=(r+M)*N,C[2]=(w-y)*N,C[3]=0,C[4]=(r-M)*R,C[5]=(1-(D+c))*R,C[6]=(l+k)*R,C[7]=0,C[8]=(w+y)*d,C[9]=(l-k)*d,C[10]=(1-(D+G))*d,C[11]=0,C[12]=A.x,C[13]=A.y,C[14]=A.z,C[15]=1,this}decompose(A,I,g){const C=this.elements;let B=lE.set(C[0],C[1],C[2]).length();const i=lE.set(C[4],C[5],C[6]).length(),E=lE.set(C[8],C[9],C[10]).length();this.determinant()<0&&(B=-B),A.x=C[12],A.y=C[13],A.z=C[14],nB.copy(this);const t=1/B,s=1/i,n=1/E;return nB.elements[0]*=t,nB.elements[1]*=t,nB.elements[2]*=t,nB.elements[4]*=s,nB.elements[5]*=s,nB.elements[6]*=s,nB.elements[8]*=n,nB.elements[9]*=n,nB.elements[10]*=n,I.setFromRotationMatrix(nB),g.x=B,g.y=i,g.z=E,this}makePerspective(A,I,g,C,B,i){const E=this.elements,e=2*B/(I-A),t=2*B/(g-C),s=(I+A)/(I-A),n=(g+C)/(g-C),D=-(i+B)/(i-B),r=-2*i*B/(i-B);return E[0]=e,E[4]=0,E[8]=s,E[12]=0,E[1]=0,E[5]=t,E[9]=n,E[13]=0,E[2]=0,E[6]=0,E[10]=D,E[14]=r,E[3]=0,E[7]=0,E[11]=-1,E[15]=0,this}makeOrthographic(A,I,g,C,B,i){const E=this.elements,e=1/(I-A),t=1/(g-C),s=1/(i-B),n=(I+A)*e,D=(g+C)*t,r=(i+B)*s;return E[0]=2*e,E[4]=0,E[8]=0,E[12]=-n,E[1]=0,E[5]=2*t,E[9]=0,E[13]=-D,E[2]=0,E[6]=0,E[10]=-2*s,E[14]=-r,E[3]=0,E[7]=0,E[11]=0,E[15]=1,this}equals(A){const I=this.elements,g=A.elements;for(let C=0;C<16;C++)if(I[C]!==g[C])return!1;return!0}fromArray(A,I=0){for(let g=0;g<16;g++)this.elements[g]=A[g+I];return this}toArray(A=[],I=0){const g=this.elements;return A[I]=g[0],A[I+1]=g[1],A[I+2]=g[2],A[I+3]=g[3],A[I+4]=g[4],A[I+5]=g[5],A[I+6]=g[6],A[I+7]=g[7],A[I+8]=g[8],A[I+9]=g[9],A[I+10]=g[10],A[I+11]=g[11],A[I+12]=g[12],A[I+13]=g[13],A[I+14]=g[14],A[I+15]=g[15],A}}const lE=new f,nB=new sI,lp=new f(0,0,0),Gp=new f(1,1,1),LQ=new f,Xt=new f,pC=new f,Ol=new sI,vl=new ng;class Pi{constructor(A=0,I=0,g=0,C=Pi.DEFAULT_ORDER){this.isEuler=!0,this._x=A,this._y=I,this._z=g,this._order=C}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get order(){return this._order}set order(A){this._order=A,this._onChangeCallback()}set(A,I,g,C=this._order){return this._x=A,this._y=I,this._z=g,this._order=C,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(A){return this._x=A._x,this._y=A._y,this._z=A._z,this._order=A._order,this._onChangeCallback(),this}setFromRotationMatrix(A,I=this._order,g=!0){const C=A.elements,B=C[0],i=C[4],E=C[8],e=C[1],t=C[5],s=C[9],n=C[2],D=C[6],r=C[10];switch(I){case"XYZ":this._y=Math.asin(Gg(E,-1,1)),Math.abs(E)<.9999999?(this._x=Math.atan2(-s,r),this._z=Math.atan2(-i,B)):(this._x=Math.atan2(D,t),this._z=0);break;case"YXZ":this._x=Math.asin(-Gg(s,-1,1)),Math.abs(s)<.9999999?(this._y=Math.atan2(E,r),this._z=Math.atan2(e,t)):(this._y=Math.atan2(-n,B),this._z=0);break;case"ZXY":this._x=Math.asin(Gg(D,-1,1)),Math.abs(D)<.9999999?(this._y=Math.atan2(-n,r),this._z=Math.atan2(-i,t)):(this._y=0,this._z=Math.atan2(e,B));break;case"ZYX":this._y=Math.asin(-Gg(n,-1,1)),Math.abs(n)<.9999999?(this._x=Math.atan2(D,r),this._z=Math.atan2(e,B)):(this._x=0,this._z=Math.atan2(-i,t));break;case"YZX":this._z=Math.asin(Gg(e,-1,1)),Math.abs(e)<.9999999?(this._x=Math.atan2(-s,t),this._y=Math.atan2(-n,B)):(this._x=0,this._y=Math.atan2(E,r));break;case"XZY":this._z=Math.asin(-Gg(i,-1,1)),Math.abs(i)<.9999999?(this._x=Math.atan2(D,t),this._y=Math.atan2(E,B)):(this._x=Math.atan2(-s,r),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+I)}return this._order=I,g===!0&&this._onChangeCallback(),this}setFromQuaternion(A,I,g){return Ol.makeRotationFromQuaternion(A),this.setFromRotationMatrix(Ol,I,g)}setFromVector3(A,I=this._order){return this.set(A.x,A.y,A.z,I)}reorder(A){return vl.setFromEuler(this),this.setFromQuaternion(vl,A)}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._order===this._order}fromArray(A){return this._x=A[0],this._y=A[1],this._z=A[2],A[3]!==void 0&&(this._order=A[3]),this._onChangeCallback(),this}toArray(A=[],I=0){return A[I]=this._x,A[I+1]=this._y,A[I+2]=this._z,A[I+3]=this._order,A}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pi.DEFAULT_ORDER="XYZ";class Ss{constructor(){this.mask=1}set(A){this.mask=(1<<A|0)>>>0}enable(A){this.mask|=1<<A|0}enableAll(){this.mask=-1}toggle(A){this.mask^=1<<A|0}disable(A){this.mask&=~(1<<A|0)}disableAll(){this.mask=0}test(A){return(this.mask&A.mask)!==0}isEnabled(A){return(this.mask&(1<<A|0))!==0}}let Sp=0;const Pl=new f,GE=new ng,iQ=new sI,zt=new f,To=new f,yp=new f,kp=new ng,Zl=new f(1,0,0),Wl=new f(0,1,0),_l=new f(0,0,1),Mp={type:"added"},jl={type:"removed"};class YI extends ZB{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=bC(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=YI.DEFAULT_UP.clone();const A=new f,I=new Pi,g=new ng,C=new f(1,1,1);function B(){g.setFromEuler(I,!1)}function i(){I.setFromQuaternion(g,void 0,!1)}I._onChange(B),g._onChange(i),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:A},rotation:{configurable:!0,enumerable:!0,value:I},quaternion:{configurable:!0,enumerable:!0,value:g},scale:{configurable:!0,enumerable:!0,value:C},modelViewMatrix:{value:new sI},normalMatrix:{value:new mI}}),this.matrix=new sI,this.matrixWorld=new sI,this.matrixAutoUpdate=YI.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=YI.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Ss,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(A){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(A),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(A){return this.quaternion.premultiply(A),this}setRotationFromAxisAngle(A,I){this.quaternion.setFromAxisAngle(A,I)}setRotationFromEuler(A){this.quaternion.setFromEuler(A,!0)}setRotationFromMatrix(A){this.quaternion.setFromRotationMatrix(A)}setRotationFromQuaternion(A){this.quaternion.copy(A)}rotateOnAxis(A,I){return GE.setFromAxisAngle(A,I),this.quaternion.multiply(GE),this}rotateOnWorldAxis(A,I){return GE.setFromAxisAngle(A,I),this.quaternion.premultiply(GE),this}rotateX(A){return this.rotateOnAxis(Zl,A)}rotateY(A){return this.rotateOnAxis(Wl,A)}rotateZ(A){return this.rotateOnAxis(_l,A)}translateOnAxis(A,I){return Pl.copy(A).applyQuaternion(this.quaternion),this.position.add(Pl.multiplyScalar(I)),this}translateX(A){return this.translateOnAxis(Zl,A)}translateY(A){return this.translateOnAxis(Wl,A)}translateZ(A){return this.translateOnAxis(_l,A)}localToWorld(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(this.matrixWorld)}worldToLocal(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(iQ.copy(this.matrixWorld).invert())}lookAt(A,I,g){A.isVector3?zt.copy(A):zt.set(A,I,g);const C=this.parent;this.updateWorldMatrix(!0,!1),To.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?iQ.lookAt(To,zt,this.up):iQ.lookAt(zt,To,this.up),this.quaternion.setFromRotationMatrix(iQ),C&&(iQ.extractRotation(C.matrixWorld),GE.setFromRotationMatrix(iQ),this.quaternion.premultiply(GE.invert()))}add(A){if(arguments.length>1){for(let I=0;I<arguments.length;I++)this.add(arguments[I]);return this}return A===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",A),this):(A&&A.isObject3D?(A.parent!==null&&A.parent.remove(A),A.parent=this,this.children.push(A),A.dispatchEvent(Mp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",A),this)}remove(A){if(arguments.length>1){for(let g=0;g<arguments.length;g++)this.remove(arguments[g]);return this}const I=this.children.indexOf(A);return I!==-1&&(A.parent=null,this.children.splice(I,1),A.dispatchEvent(jl)),this}removeFromParent(){const A=this.parent;return A!==null&&A.remove(this),this}clear(){for(let A=0;A<this.children.length;A++){const I=this.children[A];I.parent=null,I.dispatchEvent(jl)}return this.children.length=0,this}attach(A){return this.updateWorldMatrix(!0,!1),iQ.copy(this.matrixWorld).invert(),A.parent!==null&&(A.parent.updateWorldMatrix(!0,!1),iQ.multiply(A.parent.matrixWorld)),A.applyMatrix4(iQ),this.add(A),A.updateWorldMatrix(!1,!0),this}getObjectById(A){return this.getObjectByProperty("id",A)}getObjectByName(A){return this.getObjectByProperty("name",A)}getObjectByProperty(A,I){if(this[A]===I)return this;for(let g=0,C=this.children.length;g<C;g++){const i=this.children[g].getObjectByProperty(A,I);if(i!==void 0)return i}}getObjectsByProperty(A,I){let g=[];this[A]===I&&g.push(this);for(let C=0,B=this.children.length;C<B;C++){const i=this.children[C].getObjectsByProperty(A,I);i.length>0&&(g=g.concat(i))}return g}getWorldPosition(A){return this.updateWorldMatrix(!0,!1),A.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(To,A,yp),A}getWorldScale(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(To,kp,A),A}getWorldDirection(A){this.updateWorldMatrix(!0,!1);const I=this.matrixWorld.elements;return A.set(I[8],I[9],I[10]).normalize()}raycast(){}traverse(A){A(this);const I=this.children;for(let g=0,C=I.length;g<C;g++)I[g].traverse(A)}traverseVisible(A){if(this.visible===!1)return;A(this);const I=this.children;for(let g=0,C=I.length;g<C;g++)I[g].traverseVisible(A)}traverseAncestors(A){const I=this.parent;I!==null&&(A(I),I.traverseAncestors(A))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(A){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||A)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,A=!0);const I=this.children;for(let g=0,C=I.length;g<C;g++){const B=I[g];(B.matrixWorldAutoUpdate===!0||A===!0)&&B.updateMatrixWorld(A)}}updateWorldMatrix(A,I){const g=this.parent;if(A===!0&&g!==null&&g.matrixWorldAutoUpdate===!0&&g.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),I===!0){const C=this.children;for(let B=0,i=C.length;B<i;B++){const E=C[B];E.matrixWorldAutoUpdate===!0&&E.updateWorldMatrix(!1,!0)}}}toJSON(A){const I=A===void 0||typeof A=="string",g={};I&&(A={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},g.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const C={};C.uuid=this.uuid,C.type=this.type,this.name!==""&&(C.name=this.name),this.castShadow===!0&&(C.castShadow=!0),this.receiveShadow===!0&&(C.receiveShadow=!0),this.visible===!1&&(C.visible=!1),this.frustumCulled===!1&&(C.frustumCulled=!1),this.renderOrder!==0&&(C.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(C.userData=this.userData),C.layers=this.layers.mask,C.matrix=this.matrix.toArray(),C.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(C.matrixAutoUpdate=!1),this.isInstancedMesh&&(C.type="InstancedMesh",C.count=this.count,C.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(C.instanceColor=this.instanceColor.toJSON()));function B(E,e){return E[e.uuid]===void 0&&(E[e.uuid]=e.toJSON(A)),e.uuid}if(this.isScene)this.background&&(this.background.isColor?C.background=this.background.toJSON():this.background.isTexture&&(C.background=this.background.toJSON(A).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(C.environment=this.environment.toJSON(A).uuid);else if(this.isMesh||this.isLine||this.isPoints){C.geometry=B(A.geometries,this.geometry);const E=this.geometry.parameters;if(E!==void 0&&E.shapes!==void 0){const e=E.shapes;if(Array.isArray(e))for(let t=0,s=e.length;t<s;t++){const n=e[t];B(A.shapes,n)}else B(A.shapes,e)}}if(this.isSkinnedMesh&&(C.bindMode=this.bindMode,C.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(B(A.skeletons,this.skeleton),C.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const E=[];for(let e=0,t=this.material.length;e<t;e++)E.push(B(A.materials,this.material[e]));C.material=E}else C.material=B(A.materials,this.material);if(this.children.length>0){C.children=[];for(let E=0;E<this.children.length;E++)C.children.push(this.children[E].toJSON(A).object)}if(this.animations.length>0){C.animations=[];for(let E=0;E<this.animations.length;E++){const e=this.animations[E];C.animations.push(B(A.animations,e))}}if(I){const E=i(A.geometries),e=i(A.materials),t=i(A.textures),s=i(A.images),n=i(A.shapes),D=i(A.skeletons),r=i(A.animations),w=i(A.nodes);E.length>0&&(g.geometries=E),e.length>0&&(g.materials=e),t.length>0&&(g.textures=t),s.length>0&&(g.images=s),n.length>0&&(g.shapes=n),D.length>0&&(g.skeletons=D),r.length>0&&(g.animations=r),w.length>0&&(g.nodes=w)}return g.object=C,g;function i(E){const e=[];for(const t in E){const s=E[t];delete s.metadata,e.push(s)}return e}}clone(A){return new this.constructor().copy(this,A)}copy(A,I=!0){if(this.name=A.name,this.up.copy(A.up),this.position.copy(A.position),this.rotation.order=A.rotation.order,this.quaternion.copy(A.quaternion),this.scale.copy(A.scale),this.matrix.copy(A.matrix),this.matrixWorld.copy(A.matrixWorld),this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrixWorldNeedsUpdate=A.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=A.matrixWorldAutoUpdate,this.layers.mask=A.layers.mask,this.visible=A.visible,this.castShadow=A.castShadow,this.receiveShadow=A.receiveShadow,this.frustumCulled=A.frustumCulled,this.renderOrder=A.renderOrder,this.animations=A.animations,this.userData=JSON.parse(JSON.stringify(A.userData)),I===!0)for(let g=0;g<A.children.length;g++){const C=A.children[g];this.add(C.clone())}return this}}YI.DEFAULT_UP=new f(0,1,0);YI.DEFAULT_MATRIX_AUTO_UPDATE=!0;YI.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const DB=new f,EQ=new f,nD=new f,oQ=new f,SE=new f,yE=new f,Vl=new f,DD=new f,rD=new f,hD=new f;let $t=!1;class kC{constructor(A=new f,I=new f,g=new f){this.a=A,this.b=I,this.c=g}static getNormal(A,I,g,C){C.subVectors(g,I),DB.subVectors(A,I),C.cross(DB);const B=C.lengthSq();return B>0?C.multiplyScalar(1/Math.sqrt(B)):C.set(0,0,0)}static getBarycoord(A,I,g,C,B){DB.subVectors(C,I),EQ.subVectors(g,I),nD.subVectors(A,I);const i=DB.dot(DB),E=DB.dot(EQ),e=DB.dot(nD),t=EQ.dot(EQ),s=EQ.dot(nD),n=i*t-E*E;if(n===0)return B.set(-2,-1,-1);const D=1/n,r=(t*e-E*s)*D,w=(i*s-E*e)*D;return B.set(1-r-w,w,r)}static containsPoint(A,I,g,C){return this.getBarycoord(A,I,g,C,oQ),oQ.x>=0&&oQ.y>=0&&oQ.x+oQ.y<=1}static getUV(A,I,g,C,B,i,E,e){return $t===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),$t=!0),this.getInterpolation(A,I,g,C,B,i,E,e)}static getInterpolation(A,I,g,C,B,i,E,e){return this.getBarycoord(A,I,g,C,oQ),e.setScalar(0),e.addScaledVector(B,oQ.x),e.addScaledVector(i,oQ.y),e.addScaledVector(E,oQ.z),e}static isFrontFacing(A,I,g,C){return DB.subVectors(g,I),EQ.subVectors(A,I),DB.cross(EQ).dot(C)<0}set(A,I,g){return this.a.copy(A),this.b.copy(I),this.c.copy(g),this}setFromPointsAndIndices(A,I,g,C){return this.a.copy(A[I]),this.b.copy(A[g]),this.c.copy(A[C]),this}setFromAttributeAndIndices(A,I,g,C){return this.a.fromBufferAttribute(A,I),this.b.fromBufferAttribute(A,g),this.c.fromBufferAttribute(A,C),this}clone(){return new this.constructor().copy(this)}copy(A){return this.a.copy(A.a),this.b.copy(A.b),this.c.copy(A.c),this}getArea(){return DB.subVectors(this.c,this.b),EQ.subVectors(this.a,this.b),DB.cross(EQ).length()*.5}getMidpoint(A){return A.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(A){return kC.getNormal(this.a,this.b,this.c,A)}getPlane(A){return A.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(A,I){return kC.getBarycoord(A,this.a,this.b,this.c,I)}getUV(A,I,g,C,B){return $t===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),$t=!0),kC.getInterpolation(A,this.a,this.b,this.c,I,g,C,B)}getInterpolation(A,I,g,C,B){return kC.getInterpolation(A,this.a,this.b,this.c,I,g,C,B)}containsPoint(A){return kC.containsPoint(A,this.a,this.b,this.c)}isFrontFacing(A){return kC.isFrontFacing(this.a,this.b,this.c,A)}intersectsBox(A){return A.intersectsTriangle(this)}closestPointToPoint(A,I){const g=this.a,C=this.b,B=this.c;let i,E;SE.subVectors(C,g),yE.subVectors(B,g),DD.subVectors(A,g);const e=SE.dot(DD),t=yE.dot(DD);if(e<=0&&t<=0)return I.copy(g);rD.subVectors(A,C);const s=SE.dot(rD),n=yE.dot(rD);if(s>=0&&n<=s)return I.copy(C);const D=e*n-s*t;if(D<=0&&e>=0&&s<=0)return i=e/(e-s),I.copy(g).addScaledVector(SE,i);hD.subVectors(A,B);const r=SE.dot(hD),w=yE.dot(hD);if(w>=0&&r<=w)return I.copy(B);const G=r*t-e*w;if(G<=0&&t>=0&&w<=0)return E=t/(t-w),I.copy(g).addScaledVector(yE,E);const l=s*w-r*n;if(l<=0&&n-s>=0&&r-w>=0)return Vl.subVectors(B,C),E=(n-s)/(n-s+(r-w)),I.copy(C).addScaledVector(Vl,E);const c=1/(l+G+D);return i=G*c,E=D*c,I.copy(g).addScaledVector(SE,i).addScaledVector(yE,E)}equals(A){return A.a.equals(this.a)&&A.b.equals(this.b)&&A.c.equals(this.c)}}let Up=0;class Lg extends ZB{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Up++}),this.uuid=bC(),this.name="",this.type="Material",this.blending=fi,this.side=xB,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Bh,this.blendDst=Qh,this.blendEquation=Ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=_a,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_y,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ba,this.stencilZFail=ba,this.stencilZPass=ba,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(A){this._alphaTest>0!=A>0&&this.version++,this._alphaTest=A}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(A){if(A!==void 0)for(const I in A){const g=A[I];if(g===void 0){console.warn(`THREE.Material: parameter '${I}' has value of undefined.`);continue}const C=this[I];if(C===void 0){console.warn(`THREE.Material: '${I}' is not a property of THREE.${this.type}.`);continue}C&&C.isColor?C.set(g):C&&C.isVector3&&g&&g.isVector3?C.copy(g):this[I]=g}}toJSON(A){const I=A===void 0||typeof A=="string";I&&(A={textures:{},images:{}});const g={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};g.uuid=this.uuid,g.type=this.type,this.name!==""&&(g.name=this.name),this.color&&this.color.isColor&&(g.color=this.color.getHex()),this.roughness!==void 0&&(g.roughness=this.roughness),this.metalness!==void 0&&(g.metalness=this.metalness),this.sheen!==void 0&&(g.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(g.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(g.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(g.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(g.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(g.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(g.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(g.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(g.shininess=this.shininess),this.clearcoat!==void 0&&(g.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(g.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(g.clearcoatMap=this.clearcoatMap.toJSON(A).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(g.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(A).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(g.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(A).uuid,g.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(g.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(g.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(g.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(g.iridescenceMap=this.iridescenceMap.toJSON(A).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(g.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(A).uuid),this.map&&this.map.isTexture&&(g.map=this.map.toJSON(A).uuid),this.matcap&&this.matcap.isTexture&&(g.matcap=this.matcap.toJSON(A).uuid),this.alphaMap&&this.alphaMap.isTexture&&(g.alphaMap=this.alphaMap.toJSON(A).uuid),this.lightMap&&this.lightMap.isTexture&&(g.lightMap=this.lightMap.toJSON(A).uuid,g.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(g.aoMap=this.aoMap.toJSON(A).uuid,g.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(g.bumpMap=this.bumpMap.toJSON(A).uuid,g.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(g.normalMap=this.normalMap.toJSON(A).uuid,g.normalMapType=this.normalMapType,g.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(g.displacementMap=this.displacementMap.toJSON(A).uuid,g.displacementScale=this.displacementScale,g.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(g.roughnessMap=this.roughnessMap.toJSON(A).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(g.metalnessMap=this.metalnessMap.toJSON(A).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(g.emissiveMap=this.emissiveMap.toJSON(A).uuid),this.specularMap&&this.specularMap.isTexture&&(g.specularMap=this.specularMap.toJSON(A).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(g.specularIntensityMap=this.specularIntensityMap.toJSON(A).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(g.specularColorMap=this.specularColorMap.toJSON(A).uuid),this.envMap&&this.envMap.isTexture&&(g.envMap=this.envMap.toJSON(A).uuid,this.combine!==void 0&&(g.combine=this.combine)),this.envMapIntensity!==void 0&&(g.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(g.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(g.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(g.gradientMap=this.gradientMap.toJSON(A).uuid),this.transmission!==void 0&&(g.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(g.transmissionMap=this.transmissionMap.toJSON(A).uuid),this.thickness!==void 0&&(g.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(g.thicknessMap=this.thicknessMap.toJSON(A).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(g.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(g.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(g.size=this.size),this.shadowSide!==null&&(g.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(g.sizeAttenuation=this.sizeAttenuation),this.blending!==fi&&(g.blending=this.blending),this.side!==xB&&(g.side=this.side),this.vertexColors&&(g.vertexColors=!0),this.opacity<1&&(g.opacity=this.opacity),this.transparent===!0&&(g.transparent=this.transparent),g.depthFunc=this.depthFunc,g.depthTest=this.depthTest,g.depthWrite=this.depthWrite,g.colorWrite=this.colorWrite,g.stencilWrite=this.stencilWrite,g.stencilWriteMask=this.stencilWriteMask,g.stencilFunc=this.stencilFunc,g.stencilRef=this.stencilRef,g.stencilFuncMask=this.stencilFuncMask,g.stencilFail=this.stencilFail,g.stencilZFail=this.stencilZFail,g.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(g.rotation=this.rotation),this.polygonOffset===!0&&(g.polygonOffset=!0),this.polygonOffsetFactor!==0&&(g.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(g.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(g.linewidth=this.linewidth),this.dashSize!==void 0&&(g.dashSize=this.dashSize),this.gapSize!==void 0&&(g.gapSize=this.gapSize),this.scale!==void 0&&(g.scale=this.scale),this.dithering===!0&&(g.dithering=!0),this.alphaTest>0&&(g.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(g.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(g.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(g.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(g.wireframe=this.wireframe),this.wireframeLinewidth>1&&(g.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(g.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(g.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(g.flatShading=this.flatShading),this.visible===!1&&(g.visible=!1),this.toneMapped===!1&&(g.toneMapped=!1),this.fog===!1&&(g.fog=!1),Object.keys(this.userData).length>0&&(g.userData=this.userData);function C(B){const i=[];for(const E in B){const e=B[E];delete e.metadata,i.push(e)}return i}if(I){const B=C(A.textures),i=C(A.images);B.length>0&&(g.textures=B),i.length>0&&(g.images=i)}return g}clone(){return new this.constructor().copy(this)}copy(A){this.name=A.name,this.blending=A.blending,this.side=A.side,this.vertexColors=A.vertexColors,this.opacity=A.opacity,this.transparent=A.transparent,this.blendSrc=A.blendSrc,this.blendDst=A.blendDst,this.blendEquation=A.blendEquation,this.blendSrcAlpha=A.blendSrcAlpha,this.blendDstAlpha=A.blendDstAlpha,this.blendEquationAlpha=A.blendEquationAlpha,this.depthFunc=A.depthFunc,this.depthTest=A.depthTest,this.depthWrite=A.depthWrite,this.stencilWriteMask=A.stencilWriteMask,this.stencilFunc=A.stencilFunc,this.stencilRef=A.stencilRef,this.stencilFuncMask=A.stencilFuncMask,this.stencilFail=A.stencilFail,this.stencilZFail=A.stencilZFail,this.stencilZPass=A.stencilZPass,this.stencilWrite=A.stencilWrite;const I=A.clippingPlanes;let g=null;if(I!==null){const C=I.length;g=new Array(C);for(let B=0;B!==C;++B)g[B]=I[B].clone()}return this.clippingPlanes=g,this.clipIntersection=A.clipIntersection,this.clipShadows=A.clipShadows,this.shadowSide=A.shadowSide,this.colorWrite=A.colorWrite,this.precision=A.precision,this.polygonOffset=A.polygonOffset,this.polygonOffsetFactor=A.polygonOffsetFactor,this.polygonOffsetUnits=A.polygonOffsetUnits,this.dithering=A.dithering,this.alphaTest=A.alphaTest,this.alphaToCoverage=A.alphaToCoverage,this.premultipliedAlpha=A.premultipliedAlpha,this.forceSinglePass=A.forceSinglePass,this.visible=A.visible,this.toneMapped=A.toneMapped,this.userData=JSON.parse(JSON.stringify(A.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(A){A===!0&&this.version++}}const Ak={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rB={h:0,s:0,l:0},Aa={h:0,s:0,l:0};function cD(Q,A,I){return I<0&&(I+=1),I>1&&(I-=1),I<1/6?Q+(A-Q)*6*I:I<1/2?A:I<2/3?Q+(A-Q)*6*(2/3-I):Q}let LA=class{constructor(A,I,g){return this.isColor=!0,this.r=1,this.g=1,this.b=1,I===void 0&&g===void 0?this.set(A):this.setRGB(A,I,g)}set(A){return A&&A.isColor?this.copy(A):typeof A=="number"?this.setHex(A):typeof A=="string"&&this.setStyle(A),this}setScalar(A){return this.r=A,this.g=A,this.b=A,this}setHex(A,I=QI){return A=Math.floor(A),this.r=(A>>16&255)/255,this.g=(A>>8&255)/255,this.b=(A&255)/255,fC.toWorkingColorSpace(this,I),this}setRGB(A,I,g,C=fC.workingColorSpace){return this.r=A,this.g=I,this.b=g,fC.toWorkingColorSpace(this,C),this}setHSL(A,I,g,C=fC.workingColorSpace){if(A=sh(A,1),I=Gg(I,0,1),g=Gg(g,0,1),I===0)this.r=this.g=this.b=g;else{const B=g<=.5?g*(1+I):g+I-g*I,i=2*g-B;this.r=cD(i,B,A+1/3),this.g=cD(i,B,A),this.b=cD(i,B,A-1/3)}return fC.toWorkingColorSpace(this,C),this}setStyle(A,I=QI){function g(B){B!==void 0&&parseFloat(B)<1&&console.warn("THREE.Color: Alpha component of "+A+" will be ignored.")}let C;if(C=/^(\w+)\(([^\)]*)\)/.exec(A)){let B;const i=C[1],E=C[2];switch(i){case"rgb":case"rgba":if(B=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(E))return g(B[4]),this.setRGB(Math.min(255,parseInt(B[1],10))/255,Math.min(255,parseInt(B[2],10))/255,Math.min(255,parseInt(B[3],10))/255,I);if(B=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(E))return g(B[4]),this.setRGB(Math.min(100,parseInt(B[1],10))/100,Math.min(100,parseInt(B[2],10))/100,Math.min(100,parseInt(B[3],10))/100,I);break;case"hsl":case"hsla":if(B=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(E))return g(B[4]),this.setHSL(parseFloat(B[1])/360,parseFloat(B[2])/100,parseFloat(B[3])/100,I);break;default:console.warn("THREE.Color: Unknown color model "+A)}}else if(C=/^\#([A-Fa-f\d]+)$/.exec(A)){const B=C[1],i=B.length;if(i===3)return this.setRGB(parseInt(B.charAt(0),16)/15,parseInt(B.charAt(1),16)/15,parseInt(B.charAt(2),16)/15,I);if(i===6)return this.setHex(parseInt(B,16),I);console.warn("THREE.Color: Invalid hex color "+A)}else if(A&&A.length>0)return this.setColorName(A,I);return this}setColorName(A,I=QI){const g=Ak[A.toLowerCase()];return g!==void 0?this.setHex(g,I):console.warn("THREE.Color: Unknown color "+A),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(A){return this.r=A.r,this.g=A.g,this.b=A.b,this}copySRGBToLinear(A){return this.r=ZE(A.r),this.g=ZE(A.g),this.b=ZE(A.b),this}copyLinearToSRGB(A){return this.r=QD(A.r),this.g=QD(A.g),this.b=QD(A.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(A=QI){return fC.fromWorkingColorSpace(AC.copy(this),A),Math.round(Gg(AC.r*255,0,255))*65536+Math.round(Gg(AC.g*255,0,255))*256+Math.round(Gg(AC.b*255,0,255))}getHexString(A=QI){return("000000"+this.getHex(A).toString(16)).slice(-6)}getHSL(A,I=fC.workingColorSpace){fC.fromWorkingColorSpace(AC.copy(this),I);const g=AC.r,C=AC.g,B=AC.b,i=Math.max(g,C,B),E=Math.min(g,C,B);let e,t;const s=(E+i)/2;if(E===i)e=0,t=0;else{const n=i-E;switch(t=s<=.5?n/(i+E):n/(2-i-E),i){case g:e=(C-B)/n+(C<B?6:0);break;case C:e=(B-g)/n+2;break;case B:e=(g-C)/n+4;break}e/=6}return A.h=e,A.s=t,A.l=s,A}getRGB(A,I=fC.workingColorSpace){return fC.fromWorkingColorSpace(AC.copy(this),I),A.r=AC.r,A.g=AC.g,A.b=AC.b,A}getStyle(A=QI){fC.fromWorkingColorSpace(AC.copy(this),A);const I=AC.r,g=AC.g,C=AC.b;return A!==QI?`color(${A} ${I.toFixed(3)} ${g.toFixed(3)} ${C.toFixed(3)})`:`rgb(${Math.round(I*255)},${Math.round(g*255)},${Math.round(C*255)})`}offsetHSL(A,I,g){return this.getHSL(rB),rB.h+=A,rB.s+=I,rB.l+=g,this.setHSL(rB.h,rB.s,rB.l),this}add(A){return this.r+=A.r,this.g+=A.g,this.b+=A.b,this}addColors(A,I){return this.r=A.r+I.r,this.g=A.g+I.g,this.b=A.b+I.b,this}addScalar(A){return this.r+=A,this.g+=A,this.b+=A,this}sub(A){return this.r=Math.max(0,this.r-A.r),this.g=Math.max(0,this.g-A.g),this.b=Math.max(0,this.b-A.b),this}multiply(A){return this.r*=A.r,this.g*=A.g,this.b*=A.b,this}multiplyScalar(A){return this.r*=A,this.g*=A,this.b*=A,this}lerp(A,I){return this.r+=(A.r-this.r)*I,this.g+=(A.g-this.g)*I,this.b+=(A.b-this.b)*I,this}lerpColors(A,I,g){return this.r=A.r+(I.r-A.r)*g,this.g=A.g+(I.g-A.g)*g,this.b=A.b+(I.b-A.b)*g,this}lerpHSL(A,I){this.getHSL(rB),A.getHSL(Aa);const g=ie(rB.h,Aa.h,I),C=ie(rB.s,Aa.s,I),B=ie(rB.l,Aa.l,I);return this.setHSL(g,C,B),this}setFromVector3(A){return this.r=A.x,this.g=A.y,this.b=A.z,this}applyMatrix3(A){const I=this.r,g=this.g,C=this.b,B=A.elements;return this.r=B[0]*I+B[3]*g+B[6]*C,this.g=B[1]*I+B[4]*g+B[7]*C,this.b=B[2]*I+B[5]*g+B[8]*C,this}equals(A){return A.r===this.r&&A.g===this.g&&A.b===this.b}fromArray(A,I=0){return this.r=A[I],this.g=A[I+1],this.b=A[I+2],this}toArray(A=[],I=0){return A[I]=this.r,A[I+1]=this.g,A[I+2]=this.b,A}fromBufferAttribute(A,I){return this.r=A.getX(I),this.g=A.getY(I),this.b=A.getZ(I),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const AC=new LA;LA.NAMES=Ak;class mC extends Lg{constructor(A){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new LA(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ue,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.map=A.map,this.lightMap=A.lightMap,this.lightMapIntensity=A.lightMapIntensity,this.aoMap=A.aoMap,this.aoMapIntensity=A.aoMapIntensity,this.specularMap=A.specularMap,this.alphaMap=A.alphaMap,this.envMap=A.envMap,this.combine=A.combine,this.reflectivity=A.reflectivity,this.refractionRatio=A.refractionRatio,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.wireframeLinecap=A.wireframeLinecap,this.wireframeLinejoin=A.wireframeLinejoin,this.fog=A.fog,this}}const nQ=Np();function Np(){const Q=new ArrayBuffer(4),A=new Float32Array(Q),I=new Uint32Array(Q),g=new Uint32Array(512),C=new Uint32Array(512);for(let e=0;e<256;++e){const t=e-127;t<-27?(g[e]=0,g[e|256]=32768,C[e]=24,C[e|256]=24):t<-14?(g[e]=1024>>-t-14,g[e|256]=1024>>-t-14|32768,C[e]=-t-1,C[e|256]=-t-1):t<=15?(g[e]=t+15<<10,g[e|256]=t+15<<10|32768,C[e]=13,C[e|256]=13):t<128?(g[e]=31744,g[e|256]=64512,C[e]=24,C[e|256]=24):(g[e]=31744,g[e|256]=64512,C[e]=13,C[e|256]=13)}const B=new Uint32Array(2048),i=new Uint32Array(64),E=new Uint32Array(64);for(let e=1;e<1024;++e){let t=e<<13,s=0;for(;!(t&8388608);)t<<=1,s-=8388608;t&=-8388609,s+=947912704,B[e]=t|s}for(let e=1024;e<2048;++e)B[e]=939524096+(e-1024<<13);for(let e=1;e<31;++e)i[e]=e<<23;i[31]=1199570944,i[32]=2147483648;for(let e=33;e<63;++e)i[e]=2147483648+(e-32<<23);i[63]=3347054592;for(let e=1;e<64;++e)e!==32&&(E[e]=1024);return{floatView:A,uint32View:I,baseTable:g,shiftTable:C,mantissaTable:B,exponentTable:i,offsetTable:E}}function yC(Q){Math.abs(Q)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),Q=Gg(Q,-65504,65504),nQ.floatView[0]=Q;const A=nQ.uint32View[0],I=A>>23&511;return nQ.baseTable[I]+((A&8388607)>>nQ.shiftTable[I])}function Ie(Q){const A=Q>>10;return nQ.uint32View[0]=nQ.mantissaTable[nQ.offsetTable[A]+(Q&1023)]+nQ.exponentTable[A],nQ.floatView[0]}const Kp={toHalfFloat:yC,fromHalfFloat:Ie},Fg=new f,Ia=new rA;class OI{constructor(A,I,g=!1){if(Array.isArray(A))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=A,this.itemSize=I,this.count=A!==void 0?A.length/I:0,this.normalized=g,this.usage=we,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(A){A===!0&&this.version++}setUsage(A){return this.usage=A,this}copy(A){return this.name=A.name,this.array=new A.array.constructor(A.array),this.itemSize=A.itemSize,this.count=A.count,this.normalized=A.normalized,this.usage=A.usage,this}copyAt(A,I,g){A*=this.itemSize,g*=I.itemSize;for(let C=0,B=this.itemSize;C<B;C++)this.array[A+C]=I.array[g+C];return this}copyArray(A){return this.array.set(A),this}applyMatrix3(A){if(this.itemSize===2)for(let I=0,g=this.count;I<g;I++)Ia.fromBufferAttribute(this,I),Ia.applyMatrix3(A),this.setXY(I,Ia.x,Ia.y);else if(this.itemSize===3)for(let I=0,g=this.count;I<g;I++)Fg.fromBufferAttribute(this,I),Fg.applyMatrix3(A),this.setXYZ(I,Fg.x,Fg.y,Fg.z);return this}applyMatrix4(A){for(let I=0,g=this.count;I<g;I++)Fg.fromBufferAttribute(this,I),Fg.applyMatrix4(A),this.setXYZ(I,Fg.x,Fg.y,Fg.z);return this}applyNormalMatrix(A){for(let I=0,g=this.count;I<g;I++)Fg.fromBufferAttribute(this,I),Fg.applyNormalMatrix(A),this.setXYZ(I,Fg.x,Fg.y,Fg.z);return this}transformDirection(A){for(let I=0,g=this.count;I<g;I++)Fg.fromBufferAttribute(this,I),Fg.transformDirection(A),this.setXYZ(I,Fg.x,Fg.y,Fg.z);return this}set(A,I=0){return this.array.set(A,I),this}getX(A){let I=this.array[A*this.itemSize];return this.normalized&&(I=HC(I,this.array)),I}setX(A,I){return this.normalized&&(I=kI(I,this.array)),this.array[A*this.itemSize]=I,this}getY(A){let I=this.array[A*this.itemSize+1];return this.normalized&&(I=HC(I,this.array)),I}setY(A,I){return this.normalized&&(I=kI(I,this.array)),this.array[A*this.itemSize+1]=I,this}getZ(A){let I=this.array[A*this.itemSize+2];return this.normalized&&(I=HC(I,this.array)),I}setZ(A,I){return this.normalized&&(I=kI(I,this.array)),this.array[A*this.itemSize+2]=I,this}getW(A){let I=this.array[A*this.itemSize+3];return this.normalized&&(I=HC(I,this.array)),I}setW(A,I){return this.normalized&&(I=kI(I,this.array)),this.array[A*this.itemSize+3]=I,this}setXY(A,I,g){return A*=this.itemSize,this.normalized&&(I=kI(I,this.array),g=kI(g,this.array)),this.array[A+0]=I,this.array[A+1]=g,this}setXYZ(A,I,g,C){return A*=this.itemSize,this.normalized&&(I=kI(I,this.array),g=kI(g,this.array),C=kI(C,this.array)),this.array[A+0]=I,this.array[A+1]=g,this.array[A+2]=C,this}setXYZW(A,I,g,C,B){return A*=this.itemSize,this.normalized&&(I=kI(I,this.array),g=kI(g,this.array),C=kI(C,this.array),B=kI(B,this.array)),this.array[A+0]=I,this.array[A+1]=g,this.array[A+2]=C,this.array[A+3]=B,this}onUpload(A){return this.onUploadCallback=A,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const A={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(A.name=this.name),this.usage!==we&&(A.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(A.updateRange=this.updateRange),A}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Fp extends OI{constructor(A,I,g){super(new Int8Array(A),I,g)}}class Rp extends OI{constructor(A,I,g){super(new Uint8Array(A),I,g)}}class Jp extends OI{constructor(A,I,g){super(new Uint8ClampedArray(A),I,g)}}class dp extends OI{constructor(A,I,g){super(new Int16Array(A),I,g)}}class Dh extends OI{constructor(A,I,g){super(new Uint16Array(A),I,g)}}class pp extends OI{constructor(A,I,g){super(new Int32Array(A),I,g)}}class rh extends OI{constructor(A,I,g){super(new Uint32Array(A),I,g)}}class qp extends OI{constructor(A,I,g){super(new Uint16Array(A),I,g),this.isFloat16BufferAttribute=!0}getX(A){let I=Ie(this.array[A*this.itemSize]);return this.normalized&&(I=HC(I,this.array)),I}setX(A,I){return this.normalized&&(I=kI(I,this.array)),this.array[A*this.itemSize]=yC(I),this}getY(A){let I=Ie(this.array[A*this.itemSize+1]);return this.normalized&&(I=HC(I,this.array)),I}setY(A,I){return this.normalized&&(I=kI(I,this.array)),this.array[A*this.itemSize+1]=yC(I),this}getZ(A){let I=Ie(this.array[A*this.itemSize+2]);return this.normalized&&(I=HC(I,this.array)),I}setZ(A,I){return this.normalized&&(I=kI(I,this.array)),this.array[A*this.itemSize+2]=yC(I),this}getW(A){let I=Ie(this.array[A*this.itemSize+3]);return this.normalized&&(I=HC(I,this.array)),I}setW(A,I){return this.normalized&&(I=kI(I,this.array)),this.array[A*this.itemSize+3]=yC(I),this}setXY(A,I,g){return A*=this.itemSize,this.normalized&&(I=kI(I,this.array),g=kI(g,this.array)),this.array[A+0]=yC(I),this.array[A+1]=yC(g),this}setXYZ(A,I,g,C){return A*=this.itemSize,this.normalized&&(I=kI(I,this.array),g=kI(g,this.array),C=kI(C,this.array)),this.array[A+0]=yC(I),this.array[A+1]=yC(g),this.array[A+2]=yC(C),this}setXYZW(A,I,g,C,B){return A*=this.itemSize,this.normalized&&(I=kI(I,this.array),g=kI(g,this.array),C=kI(C,this.array),B=kI(B,this.array)),this.array[A+0]=yC(I),this.array[A+1]=yC(g),this.array[A+2]=yC(C),this.array[A+3]=yC(B),this}}class _A extends OI{constructor(A,I,g){super(new Float32Array(A),I,g)}}class fp extends OI{constructor(A,I,g){super(new Float64Array(A),I,g)}}let up=0;const XC=new sI,wD=new YI,kE=new f,qC=new kB,xo=new kB,xg=new f;class GI extends ZB{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=bC(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(A){return Array.isArray(A)?this.index=new($y(A)?rh:Dh)(A,1):this.index=A,this}getAttribute(A){return this.attributes[A]}setAttribute(A,I){return this.attributes[A]=I,this}deleteAttribute(A){return delete this.attributes[A],this}hasAttribute(A){return this.attributes[A]!==void 0}addGroup(A,I,g=0){this.groups.push({start:A,count:I,materialIndex:g})}clearGroups(){this.groups=[]}setDrawRange(A,I){this.drawRange.start=A,this.drawRange.count=I}applyMatrix4(A){const I=this.attributes.position;I!==void 0&&(I.applyMatrix4(A),I.needsUpdate=!0);const g=this.attributes.normal;if(g!==void 0){const B=new mI().getNormalMatrix(A);g.applyNormalMatrix(B),g.needsUpdate=!0}const C=this.attributes.tangent;return C!==void 0&&(C.transformDirection(A),C.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(A){return XC.makeRotationFromQuaternion(A),this.applyMatrix4(XC),this}rotateX(A){return XC.makeRotationX(A),this.applyMatrix4(XC),this}rotateY(A){return XC.makeRotationY(A),this.applyMatrix4(XC),this}rotateZ(A){return XC.makeRotationZ(A),this.applyMatrix4(XC),this}translate(A,I,g){return XC.makeTranslation(A,I,g),this.applyMatrix4(XC),this}scale(A,I,g){return XC.makeScale(A,I,g),this.applyMatrix4(XC),this}lookAt(A){return wD.lookAt(A),wD.updateMatrix(),this.applyMatrix4(wD.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(kE).negate(),this.translate(kE.x,kE.y,kE.z),this}setFromPoints(A){const I=[];for(let g=0,C=A.length;g<C;g++){const B=A[g];I.push(B.x,B.y,B.z||0)}return this.setAttribute("position",new _A(I,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kB);const A=this.attributes.position,I=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new f(-1/0,-1/0,-1/0),new f(1/0,1/0,1/0));return}if(A!==void 0){if(this.boundingBox.setFromBufferAttribute(A),I)for(let g=0,C=I.length;g<C;g++){const B=I[g];qC.setFromBufferAttribute(B),this.morphTargetsRelative?(xg.addVectors(this.boundingBox.min,qC.min),this.boundingBox.expandByPoint(xg),xg.addVectors(this.boundingBox.max,qC.max),this.boundingBox.expandByPoint(xg)):(this.boundingBox.expandByPoint(qC.min),this.boundingBox.expandByPoint(qC.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new MB);const A=this.attributes.position,I=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new f,1/0);return}if(A){const g=this.boundingSphere.center;if(qC.setFromBufferAttribute(A),I)for(let B=0,i=I.length;B<i;B++){const E=I[B];xo.setFromBufferAttribute(E),this.morphTargetsRelative?(xg.addVectors(qC.min,xo.min),qC.expandByPoint(xg),xg.addVectors(qC.max,xo.max),qC.expandByPoint(xg)):(qC.expandByPoint(xo.min),qC.expandByPoint(xo.max))}qC.getCenter(g);let C=0;for(let B=0,i=A.count;B<i;B++)xg.fromBufferAttribute(A,B),C=Math.max(C,g.distanceToSquared(xg));if(I)for(let B=0,i=I.length;B<i;B++){const E=I[B],e=this.morphTargetsRelative;for(let t=0,s=E.count;t<s;t++)xg.fromBufferAttribute(E,t),e&&(kE.fromBufferAttribute(A,t),xg.add(kE)),C=Math.max(C,g.distanceToSquared(xg))}this.boundingSphere.radius=Math.sqrt(C),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const A=this.index,I=this.attributes;if(A===null||I.position===void 0||I.normal===void 0||I.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const g=A.array,C=I.position.array,B=I.normal.array,i=I.uv.array,E=C.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new OI(new Float32Array(4*E),4));const e=this.getAttribute("tangent").array,t=[],s=[];for(let u=0;u<E;u++)t[u]=new f,s[u]=new f;const n=new f,D=new f,r=new f,w=new rA,G=new rA,l=new rA,c=new f,k=new f;function y(u,W,$){n.fromArray(C,u*3),D.fromArray(C,W*3),r.fromArray(C,$*3),w.fromArray(i,u*2),G.fromArray(i,W*2),l.fromArray(i,$*2),D.sub(n),r.sub(n),G.sub(w),l.sub(w);const H=1/(G.x*l.y-l.x*G.y);isFinite(H)&&(c.copy(D).multiplyScalar(l.y).addScaledVector(r,-G.y).multiplyScalar(H),k.copy(r).multiplyScalar(G.x).addScaledVector(D,-l.x).multiplyScalar(H),t[u].add(c),t[W].add(c),t[$].add(c),s[u].add(k),s[W].add(k),s[$].add(k))}let M=this.groups;M.length===0&&(M=[{start:0,count:g.length}]);for(let u=0,W=M.length;u<W;++u){const $=M[u],H=$.start,v=$.count;for(let IA=H,oA=H+v;IA<oA;IA+=3)y(g[IA+0],g[IA+1],g[IA+2])}const N=new f,R=new f,d=new f,L=new f;function F(u){d.fromArray(B,u*3),L.copy(d);const W=t[u];N.copy(W),N.sub(d.multiplyScalar(d.dot(W))).normalize(),R.crossVectors(L,W);const H=R.dot(s[u])<0?-1:1;e[u*4]=N.x,e[u*4+1]=N.y,e[u*4+2]=N.z,e[u*4+3]=H}for(let u=0,W=M.length;u<W;++u){const $=M[u],H=$.start,v=$.count;for(let IA=H,oA=H+v;IA<oA;IA+=3)F(g[IA+0]),F(g[IA+1]),F(g[IA+2])}}computeVertexNormals(){const A=this.index,I=this.getAttribute("position");if(I!==void 0){let g=this.getAttribute("normal");if(g===void 0)g=new OI(new Float32Array(I.count*3),3),this.setAttribute("normal",g);else for(let D=0,r=g.count;D<r;D++)g.setXYZ(D,0,0,0);const C=new f,B=new f,i=new f,E=new f,e=new f,t=new f,s=new f,n=new f;if(A)for(let D=0,r=A.count;D<r;D+=3){const w=A.getX(D+0),G=A.getX(D+1),l=A.getX(D+2);C.fromBufferAttribute(I,w),B.fromBufferAttribute(I,G),i.fromBufferAttribute(I,l),s.subVectors(i,B),n.subVectors(C,B),s.cross(n),E.fromBufferAttribute(g,w),e.fromBufferAttribute(g,G),t.fromBufferAttribute(g,l),E.add(s),e.add(s),t.add(s),g.setXYZ(w,E.x,E.y,E.z),g.setXYZ(G,e.x,e.y,e.z),g.setXYZ(l,t.x,t.y,t.z)}else for(let D=0,r=I.count;D<r;D+=3)C.fromBufferAttribute(I,D+0),B.fromBufferAttribute(I,D+1),i.fromBufferAttribute(I,D+2),s.subVectors(i,B),n.subVectors(C,B),s.cross(n),g.setXYZ(D+0,s.x,s.y,s.z),g.setXYZ(D+1,s.x,s.y,s.z),g.setXYZ(D+2,s.x,s.y,s.z);this.normalizeNormals(),g.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const A=this.attributes.normal;for(let I=0,g=A.count;I<g;I++)xg.fromBufferAttribute(A,I),xg.normalize(),A.setXYZ(I,xg.x,xg.y,xg.z)}toNonIndexed(){function A(E,e){const t=E.array,s=E.itemSize,n=E.normalized,D=new t.constructor(e.length*s);let r=0,w=0;for(let G=0,l=e.length;G<l;G++){E.isInterleavedBufferAttribute?r=e[G]*E.data.stride+E.offset:r=e[G]*s;for(let c=0;c<s;c++)D[w++]=t[r++]}return new OI(D,s,n)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const I=new GI,g=this.index.array,C=this.attributes;for(const E in C){const e=C[E],t=A(e,g);I.setAttribute(E,t)}const B=this.morphAttributes;for(const E in B){const e=[],t=B[E];for(let s=0,n=t.length;s<n;s++){const D=t[s],r=A(D,g);e.push(r)}I.morphAttributes[E]=e}I.morphTargetsRelative=this.morphTargetsRelative;const i=this.groups;for(let E=0,e=i.length;E<e;E++){const t=i[E];I.addGroup(t.start,t.count,t.materialIndex)}return I}toJSON(){const A={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(A.uuid=this.uuid,A.type=this.type,this.name!==""&&(A.name=this.name),Object.keys(this.userData).length>0&&(A.userData=this.userData),this.parameters!==void 0){const e=this.parameters;for(const t in e)e[t]!==void 0&&(A[t]=e[t]);return A}A.data={attributes:{}};const I=this.index;I!==null&&(A.data.index={type:I.array.constructor.name,array:Array.prototype.slice.call(I.array)});const g=this.attributes;for(const e in g){const t=g[e];A.data.attributes[e]=t.toJSON(A.data)}const C={};let B=!1;for(const e in this.morphAttributes){const t=this.morphAttributes[e],s=[];for(let n=0,D=t.length;n<D;n++){const r=t[n];s.push(r.toJSON(A.data))}s.length>0&&(C[e]=s,B=!0)}B&&(A.data.morphAttributes=C,A.data.morphTargetsRelative=this.morphTargetsRelative);const i=this.groups;i.length>0&&(A.data.groups=JSON.parse(JSON.stringify(i)));const E=this.boundingSphere;return E!==null&&(A.data.boundingSphere={center:E.center.toArray(),radius:E.radius}),A}clone(){return new this.constructor().copy(this)}copy(A){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const I={};this.name=A.name;const g=A.index;g!==null&&this.setIndex(g.clone(I));const C=A.attributes;for(const t in C){const s=C[t];this.setAttribute(t,s.clone(I))}const B=A.morphAttributes;for(const t in B){const s=[],n=B[t];for(let D=0,r=n.length;D<r;D++)s.push(n[D].clone(I));this.morphAttributes[t]=s}this.morphTargetsRelative=A.morphTargetsRelative;const i=A.groups;for(let t=0,s=i.length;t<s;t++){const n=i[t];this.addGroup(n.start,n.count,n.materialIndex)}const E=A.boundingBox;E!==null&&(this.boundingBox=E.clone());const e=A.boundingSphere;return e!==null&&(this.boundingSphere=e.clone()),this.drawRange.start=A.drawRange.start,this.drawRange.count=A.drawRange.count,this.userData=A.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xl=new sI,pB=new Le,ga=new MB,zl=new f,ME=new f,UE=new f,NE=new f,lD=new f,Ca=new f,Ba=new rA,Qa=new rA,ia=new rA,$l=new f,AG=new f,IG=new f,Ea=new f,oa=new f;class ug extends YI{constructor(A=new GI,I=new mC){super(),this.isMesh=!0,this.type="Mesh",this.geometry=A,this.material=I,this.updateMorphTargets()}copy(A,I){return super.copy(A,I),A.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=A.morphTargetInfluences.slice()),A.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},A.morphTargetDictionary)),this.material=A.material,this.geometry=A.geometry,this}updateMorphTargets(){const I=this.geometry.morphAttributes,g=Object.keys(I);if(g.length>0){const C=I[g[0]];if(C!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let B=0,i=C.length;B<i;B++){const E=C[B].name||String(B);this.morphTargetInfluences.push(0),this.morphTargetDictionary[E]=B}}}}getVertexPosition(A,I){const g=this.geometry,C=g.attributes.position,B=g.morphAttributes.position,i=g.morphTargetsRelative;I.fromBufferAttribute(C,A);const E=this.morphTargetInfluences;if(B&&E){Ca.set(0,0,0);for(let e=0,t=B.length;e<t;e++){const s=E[e],n=B[e];s!==0&&(lD.fromBufferAttribute(n,A),i?Ca.addScaledVector(lD,s):Ca.addScaledVector(lD.sub(I),s))}I.add(Ca)}return I}raycast(A,I){const g=this.geometry,C=this.material,B=this.matrixWorld;C!==void 0&&(g.boundingSphere===null&&g.computeBoundingSphere(),ga.copy(g.boundingSphere),ga.applyMatrix4(B),pB.copy(A.ray).recast(A.near),!(ga.containsPoint(pB.origin)===!1&&(pB.intersectSphere(ga,zl)===null||pB.origin.distanceToSquared(zl)>(A.far-A.near)**2))&&(Xl.copy(B).invert(),pB.copy(A.ray).applyMatrix4(Xl),!(g.boundingBox!==null&&pB.intersectsBox(g.boundingBox)===!1)&&this._computeIntersections(A,I)))}_computeIntersections(A,I){let g;const C=this.geometry,B=this.material,i=C.index,E=C.attributes.position,e=C.attributes.uv,t=C.attributes.uv1,s=C.attributes.normal,n=C.groups,D=C.drawRange;if(i!==null)if(Array.isArray(B))for(let r=0,w=n.length;r<w;r++){const G=n[r],l=B[G.materialIndex],c=Math.max(G.start,D.start),k=Math.min(i.count,Math.min(G.start+G.count,D.start+D.count));for(let y=c,M=k;y<M;y+=3){const N=i.getX(y),R=i.getX(y+1),d=i.getX(y+2);g=ea(this,l,A,pB,e,t,s,N,R,d),g&&(g.faceIndex=Math.floor(y/3),g.face.materialIndex=G.materialIndex,I.push(g))}}else{const r=Math.max(0,D.start),w=Math.min(i.count,D.start+D.count);for(let G=r,l=w;G<l;G+=3){const c=i.getX(G),k=i.getX(G+1),y=i.getX(G+2);g=ea(this,B,A,pB,e,t,s,c,k,y),g&&(g.faceIndex=Math.floor(G/3),I.push(g))}}else if(E!==void 0)if(Array.isArray(B))for(let r=0,w=n.length;r<w;r++){const G=n[r],l=B[G.materialIndex],c=Math.max(G.start,D.start),k=Math.min(E.count,Math.min(G.start+G.count,D.start+D.count));for(let y=c,M=k;y<M;y+=3){const N=y,R=y+1,d=y+2;g=ea(this,l,A,pB,e,t,s,N,R,d),g&&(g.faceIndex=Math.floor(y/3),g.face.materialIndex=G.materialIndex,I.push(g))}}else{const r=Math.max(0,D.start),w=Math.min(E.count,D.start+D.count);for(let G=r,l=w;G<l;G+=3){const c=G,k=G+1,y=G+2;g=ea(this,B,A,pB,e,t,s,c,k,y),g&&(g.faceIndex=Math.floor(G/3),I.push(g))}}}}function Lp(Q,A,I,g,C,B,i,E){let e;if(A.side===DC?e=g.intersectTriangle(i,B,C,!0,E):e=g.intersectTriangle(C,B,i,A.side===xB,E),e===null)return null;oa.copy(E),oa.applyMatrix4(Q.matrixWorld);const t=I.ray.origin.distanceTo(oa);return t<I.near||t>I.far?null:{distance:t,point:oa.clone(),object:Q}}function ea(Q,A,I,g,C,B,i,E,e,t){Q.getVertexPosition(E,ME),Q.getVertexPosition(e,UE),Q.getVertexPosition(t,NE);const s=Lp(Q,A,I,g,ME,UE,NE,Ea);if(s){C&&(Ba.fromBufferAttribute(C,E),Qa.fromBufferAttribute(C,e),ia.fromBufferAttribute(C,t),s.uv=kC.getInterpolation(Ea,ME,UE,NE,Ba,Qa,ia,new rA)),B&&(Ba.fromBufferAttribute(B,E),Qa.fromBufferAttribute(B,e),ia.fromBufferAttribute(B,t),s.uv1=kC.getInterpolation(Ea,ME,UE,NE,Ba,Qa,ia,new rA),s.uv2=s.uv1),i&&($l.fromBufferAttribute(i,E),AG.fromBufferAttribute(i,e),IG.fromBufferAttribute(i,t),s.normal=kC.getInterpolation(Ea,ME,UE,NE,$l,AG,IG,new f),s.normal.dot(g.direction)>0&&s.normal.multiplyScalar(-1));const n={a:E,b:e,c:t,normal:new f,materialIndex:0};kC.getNormal(ME,UE,NE,n.normal),s.face=n}return s}class GQ extends GI{constructor(A=1,I=1,g=1,C=1,B=1,i=1){super(),this.type="BoxGeometry",this.parameters={width:A,height:I,depth:g,widthSegments:C,heightSegments:B,depthSegments:i};const E=this;C=Math.floor(C),B=Math.floor(B),i=Math.floor(i);const e=[],t=[],s=[],n=[];let D=0,r=0;w("z","y","x",-1,-1,g,I,A,i,B,0),w("z","y","x",1,-1,g,I,-A,i,B,1),w("x","z","y",1,1,A,g,I,C,i,2),w("x","z","y",1,-1,A,g,-I,C,i,3),w("x","y","z",1,-1,A,I,g,C,B,4),w("x","y","z",-1,-1,A,I,-g,C,B,5),this.setIndex(e),this.setAttribute("position",new _A(t,3)),this.setAttribute("normal",new _A(s,3)),this.setAttribute("uv",new _A(n,2));function w(G,l,c,k,y,M,N,R,d,L,F){const u=M/d,W=N/L,$=M/2,H=N/2,v=R/2,IA=d+1,oA=L+1;let gA=0,iA=0;const MA=new f;for(let lA=0;lA<oA;lA++){const mA=lA*W-H;for(let FA=0;FA<IA;FA++){const EA=FA*u-$;MA[G]=EA*k,MA[l]=mA*y,MA[c]=v,t.push(MA.x,MA.y,MA.z),MA[G]=0,MA[l]=0,MA[c]=R>0?1:-1,s.push(MA.x,MA.y,MA.z),n.push(FA/d),n.push(1-lA/L),gA+=1}}for(let lA=0;lA<L;lA++)for(let mA=0;mA<d;mA++){const FA=D+mA+IA*lA,EA=D+mA+IA*(lA+1),GA=D+(mA+1)+IA*(lA+1),RA=D+(mA+1)+IA*lA;e.push(FA,EA,RA),e.push(EA,GA,RA),iA+=6}E.addGroup(r,iA,F),r+=iA,D+=gA}}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new GQ(A.width,A.height,A.depth,A.widthSegments,A.heightSegments,A.depthSegments)}}function zE(Q){const A={};for(const I in Q){A[I]={};for(const g in Q[I]){const C=Q[I][g];C&&(C.isColor||C.isMatrix3||C.isMatrix4||C.isVector2||C.isVector3||C.isVector4||C.isTexture||C.isQuaternion)?C.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),A[I][g]=null):A[I][g]=C.clone():Array.isArray(C)?A[I][g]=C.slice():A[I][g]=C}}return A}function sC(Q){const A={};for(let I=0;I<Q.length;I++){const g=zE(Q[I]);for(const C in g)A[C]=g[C]}return A}function Yp(Q){const A=[];for(let I=0;I<Q.length;I++)A.push(Q[I].clone());return A}function Ik(Q){return Q.getRenderTarget()===null?Q.outputColorSpace:CB}const gk={clone:zE,merge:sC};var Hp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class OB extends Lg{constructor(A){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hp,this.fragmentShader=mp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,A!==void 0&&this.setValues(A)}copy(A){return super.copy(A),this.fragmentShader=A.fragmentShader,this.vertexShader=A.vertexShader,this.uniforms=zE(A.uniforms),this.uniformsGroups=Yp(A.uniformsGroups),this.defines=Object.assign({},A.defines),this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.fog=A.fog,this.lights=A.lights,this.clipping=A.clipping,this.extensions=Object.assign({},A.extensions),this.glslVersion=A.glslVersion,this}toJSON(A){const I=super.toJSON(A);I.glslVersion=this.glslVersion,I.uniforms={};for(const C in this.uniforms){const i=this.uniforms[C].value;i&&i.isTexture?I.uniforms[C]={type:"t",value:i.toJSON(A).uuid}:i&&i.isColor?I.uniforms[C]={type:"c",value:i.getHex()}:i&&i.isVector2?I.uniforms[C]={type:"v2",value:i.toArray()}:i&&i.isVector3?I.uniforms[C]={type:"v3",value:i.toArray()}:i&&i.isVector4?I.uniforms[C]={type:"v4",value:i.toArray()}:i&&i.isMatrix3?I.uniforms[C]={type:"m3",value:i.toArray()}:i&&i.isMatrix4?I.uniforms[C]={type:"m4",value:i.toArray()}:I.uniforms[C]={value:i}}Object.keys(this.defines).length>0&&(I.defines=this.defines),I.vertexShader=this.vertexShader,I.fragmentShader=this.fragmentShader,I.lights=this.lights,I.clipping=this.clipping;const g={};for(const C in this.extensions)this.extensions[C]===!0&&(g[C]=!0);return Object.keys(g).length>0&&(I.extensions=g),I}}class Ye extends YI{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new sI,this.projectionMatrix=new sI,this.projectionMatrixInverse=new sI}copy(A,I){return super.copy(A,I),this.matrixWorldInverse.copy(A.matrixWorldInverse),this.projectionMatrix.copy(A.projectionMatrix),this.projectionMatrixInverse.copy(A.projectionMatrixInverse),this}getWorldDirection(A){this.updateWorldMatrix(!0,!1);const I=this.matrixWorld.elements;return A.set(-I[8],-I[9],-I[10]).normalize()}updateMatrixWorld(A){super.updateMatrixWorld(A),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(A,I){super.updateWorldMatrix(A,I),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class fg extends Ye{constructor(A=50,I=1,g=.1,C=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=A,this.zoom=1,this.near=g,this.far=C,this.focus=10,this.aspect=I,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(A,I){return super.copy(A,I),this.fov=A.fov,this.zoom=A.zoom,this.near=A.near,this.far=A.far,this.focus=A.focus,this.aspect=A.aspect,this.view=A.view===null?null:Object.assign({},A.view),this.filmGauge=A.filmGauge,this.filmOffset=A.filmOffset,this}setFocalLength(A){const I=.5*this.getFilmHeight()/A;this.fov=XE*2*Math.atan(I),this.updateProjectionMatrix()}getFocalLength(){const A=Math.tan(Li*.5*this.fov);return .5*this.getFilmHeight()/A}getEffectiveFOV(){return XE*2*Math.atan(Math.tan(Li*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(A,I,g,C,B,i){this.aspect=A/I,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=I,this.view.offsetX=g,this.view.offsetY=C,this.view.width=B,this.view.height=i,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=this.near;let I=A*Math.tan(Li*.5*this.fov)/this.zoom,g=2*I,C=this.aspect*g,B=-.5*C;const i=this.view;if(this.view!==null&&this.view.enabled){const e=i.fullWidth,t=i.fullHeight;B+=i.offsetX*C/e,I-=i.offsetY*g/t,C*=i.width/e,g*=i.height/t}const E=this.filmOffset;E!==0&&(B+=A*E/this.getFilmWidth()),this.projectionMatrix.makePerspective(B,B+C,I,I-g,A,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const I=super.toJSON(A);return I.object.fov=this.fov,I.object.zoom=this.zoom,I.object.near=this.near,I.object.far=this.far,I.object.focus=this.focus,I.object.aspect=this.aspect,this.view!==null&&(I.object.view=Object.assign({},this.view)),I.object.filmGauge=this.filmGauge,I.object.filmOffset=this.filmOffset,I}}const KE=-90,FE=1;class Ck extends YI{constructor(A,I,g){super(),this.type="CubeCamera",this.renderTarget=g;const C=new fg(KE,FE,A,I);C.layers=this.layers,C.up.set(0,1,0),C.lookAt(1,0,0),this.add(C);const B=new fg(KE,FE,A,I);B.layers=this.layers,B.up.set(0,1,0),B.lookAt(-1,0,0),this.add(B);const i=new fg(KE,FE,A,I);i.layers=this.layers,i.up.set(0,0,-1),i.lookAt(0,1,0),this.add(i);const E=new fg(KE,FE,A,I);E.layers=this.layers,E.up.set(0,0,1),E.lookAt(0,-1,0),this.add(E);const e=new fg(KE,FE,A,I);e.layers=this.layers,e.up.set(0,1,0),e.lookAt(0,0,1),this.add(e);const t=new fg(KE,FE,A,I);t.layers=this.layers,t.up.set(0,1,0),t.lookAt(0,0,-1),this.add(t)}update(A,I){this.parent===null&&this.updateMatrixWorld();const g=this.renderTarget,[C,B,i,E,e,t]=this.children,s=A.getRenderTarget(),n=A.toneMapping,D=A.xr.enabled;A.toneMapping=HB,A.xr.enabled=!1;const r=g.texture.generateMipmaps;g.texture.generateMipmaps=!1,A.setRenderTarget(g,0),A.render(I,C),A.setRenderTarget(g,1),A.render(I,B),A.setRenderTarget(g,2),A.render(I,i),A.setRenderTarget(g,3),A.render(I,E),A.setRenderTarget(g,4),A.render(I,e),g.texture.generateMipmaps=r,A.setRenderTarget(g,5),A.render(I,t),A.setRenderTarget(s),A.toneMapping=n,A.xr.enabled=D,g.texture.needsPMREMUpdate=!0}}class He extends sg{constructor(A,I,g,C,B,i,E,e,t,s){A=A!==void 0?A:[],I=I!==void 0?I:WQ,super(A,I,g,C,B,i,E,e,t,s),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(A){this.image=A}}class Bk extends yB{constructor(A=1,I={}){super(A,A,I),this.isWebGLCubeRenderTarget=!0;const g={width:A,height:A,depth:1},C=[g,g,g,g,g,g];I.encoding!==void 0&&(Ee("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),I.colorSpace=I.encoding===hQ?QI:bB),this.texture=new He(C,I.mapping,I.wrapS,I.wrapT,I.magFilter,I.minFilter,I.format,I.type,I.anisotropy,I.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=I.generateMipmaps!==void 0?I.generateMipmaps:!1,this.texture.minFilter=I.minFilter!==void 0?I.minFilter:Bg}fromEquirectangularTexture(A,I){this.texture.type=I.type,this.texture.colorSpace=I.colorSpace,this.texture.generateMipmaps=I.generateMipmaps,this.texture.minFilter=I.minFilter,this.texture.magFilter=I.magFilter;const g={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},C=new GQ(5,5,5),B=new OB({name:"CubemapFromEquirect",uniforms:zE(g.uniforms),vertexShader:g.vertexShader,fragmentShader:g.fragmentShader,side:DC,blending:rQ});B.uniforms.tEquirect.value=I;const i=new ug(C,B),E=I.minFilter;return I.minFilter===SB&&(I.minFilter=Bg),new Ck(1,10,this).update(A,i),I.minFilter=E,i.geometry.dispose(),i.material.dispose(),this}clear(A,I,g,C){const B=A.getRenderTarget();for(let i=0;i<6;i++)A.setRenderTarget(this,i),A.clear(I,g,C);A.setRenderTarget(B)}}const GD=new f,bp=new f,Tp=new mI;class bQ{constructor(A=new f(1,0,0),I=0){this.isPlane=!0,this.normal=A,this.constant=I}set(A,I){return this.normal.copy(A),this.constant=I,this}setComponents(A,I,g,C){return this.normal.set(A,I,g),this.constant=C,this}setFromNormalAndCoplanarPoint(A,I){return this.normal.copy(A),this.constant=-I.dot(this.normal),this}setFromCoplanarPoints(A,I,g){const C=GD.subVectors(g,I).cross(bp.subVectors(A,I)).normalize();return this.setFromNormalAndCoplanarPoint(C,A),this}copy(A){return this.normal.copy(A.normal),this.constant=A.constant,this}normalize(){const A=1/this.normal.length();return this.normal.multiplyScalar(A),this.constant*=A,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(A){return this.normal.dot(A)+this.constant}distanceToSphere(A){return this.distanceToPoint(A.center)-A.radius}projectPoint(A,I){return I.copy(A).addScaledVector(this.normal,-this.distanceToPoint(A))}intersectLine(A,I){const g=A.delta(GD),C=this.normal.dot(g);if(C===0)return this.distanceToPoint(A.start)===0?I.copy(A.start):null;const B=-(A.start.dot(this.normal)+this.constant)/C;return B<0||B>1?null:I.copy(A.start).addScaledVector(g,B)}intersectsLine(A){const I=this.distanceToPoint(A.start),g=this.distanceToPoint(A.end);return I<0&&g>0||g<0&&I>0}intersectsBox(A){return A.intersectsPlane(this)}intersectsSphere(A){return A.intersectsPlane(this)}coplanarPoint(A){return A.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(A,I){const g=I||Tp.getNormalMatrix(A),C=this.coplanarPoint(GD).applyMatrix4(A),B=this.normal.applyMatrix3(g).normalize();return this.constant=-C.dot(B),this}translate(A){return this.constant-=A.dot(this.normal),this}equals(A){return A.normal.equals(this.normal)&&A.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hi=new MB,ta=new f;class ys{constructor(A=new bQ,I=new bQ,g=new bQ,C=new bQ,B=new bQ,i=new bQ){this.planes=[A,I,g,C,B,i]}set(A,I,g,C,B,i){const E=this.planes;return E[0].copy(A),E[1].copy(I),E[2].copy(g),E[3].copy(C),E[4].copy(B),E[5].copy(i),this}copy(A){const I=this.planes;for(let g=0;g<6;g++)I[g].copy(A.planes[g]);return this}setFromProjectionMatrix(A){const I=this.planes,g=A.elements,C=g[0],B=g[1],i=g[2],E=g[3],e=g[4],t=g[5],s=g[6],n=g[7],D=g[8],r=g[9],w=g[10],G=g[11],l=g[12],c=g[13],k=g[14],y=g[15];return I[0].setComponents(E-C,n-e,G-D,y-l).normalize(),I[1].setComponents(E+C,n+e,G+D,y+l).normalize(),I[2].setComponents(E+B,n+t,G+r,y+c).normalize(),I[3].setComponents(E-B,n-t,G-r,y-c).normalize(),I[4].setComponents(E-i,n-s,G-w,y-k).normalize(),I[5].setComponents(E+i,n+s,G+w,y+k).normalize(),this}intersectsObject(A){if(A.boundingSphere!==void 0)A.boundingSphere===null&&A.computeBoundingSphere(),hi.copy(A.boundingSphere).applyMatrix4(A.matrixWorld);else{const I=A.geometry;I.boundingSphere===null&&I.computeBoundingSphere(),hi.copy(I.boundingSphere).applyMatrix4(A.matrixWorld)}return this.intersectsSphere(hi)}intersectsSprite(A){return hi.center.set(0,0,0),hi.radius=.7071067811865476,hi.applyMatrix4(A.matrixWorld),this.intersectsSphere(hi)}intersectsSphere(A){const I=this.planes,g=A.center,C=-A.radius;for(let B=0;B<6;B++)if(I[B].distanceToPoint(g)<C)return!1;return!0}intersectsBox(A){const I=this.planes;for(let g=0;g<6;g++){const C=I[g];if(ta.x=C.normal.x>0?A.max.x:A.min.x,ta.y=C.normal.y>0?A.max.y:A.min.y,ta.z=C.normal.z>0?A.max.z:A.min.z,C.distanceToPoint(ta)<0)return!1}return!0}containsPoint(A){const I=this.planes;for(let g=0;g<6;g++)if(I[g].distanceToPoint(A)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Qk(){let Q=null,A=!1,I=null,g=null;function C(B,i){I(B,i),g=Q.requestAnimationFrame(C)}return{start:function(){A!==!0&&I!==null&&(g=Q.requestAnimationFrame(C),A=!0)},stop:function(){Q.cancelAnimationFrame(g),A=!1},setAnimationLoop:function(B){I=B},setContext:function(B){Q=B}}}function xp(Q,A){const I=A.isWebGL2,g=new WeakMap;function C(t,s){const n=t.array,D=t.usage,r=Q.createBuffer();Q.bindBuffer(s,r),Q.bufferData(s,n,D),t.onUploadCallback();let w;if(n instanceof Float32Array)w=Q.FLOAT;else if(n instanceof Uint16Array)if(t.isFloat16BufferAttribute)if(I)w=Q.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else w=Q.UNSIGNED_SHORT;else if(n instanceof Int16Array)w=Q.SHORT;else if(n instanceof Uint32Array)w=Q.UNSIGNED_INT;else if(n instanceof Int32Array)w=Q.INT;else if(n instanceof Int8Array)w=Q.BYTE;else if(n instanceof Uint8Array)w=Q.UNSIGNED_BYTE;else if(n instanceof Uint8ClampedArray)w=Q.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+n);return{buffer:r,type:w,bytesPerElement:n.BYTES_PER_ELEMENT,version:t.version}}function B(t,s,n){const D=s.array,r=s.updateRange;Q.bindBuffer(n,t),r.count===-1?Q.bufferSubData(n,0,D):(I?Q.bufferSubData(n,r.offset*D.BYTES_PER_ELEMENT,D,r.offset,r.count):Q.bufferSubData(n,r.offset*D.BYTES_PER_ELEMENT,D.subarray(r.offset,r.offset+r.count)),r.count=-1),s.onUploadCallback()}function i(t){return t.isInterleavedBufferAttribute&&(t=t.data),g.get(t)}function E(t){t.isInterleavedBufferAttribute&&(t=t.data);const s=g.get(t);s&&(Q.deleteBuffer(s.buffer),g.delete(t))}function e(t,s){if(t.isGLBufferAttribute){const D=g.get(t);(!D||D.version<t.version)&&g.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version});return}t.isInterleavedBufferAttribute&&(t=t.data);const n=g.get(t);n===void 0?g.set(t,C(t,s)):n.version<t.version&&(B(n.buffer,t,s),n.version=t.version)}return{get:i,remove:E,update:e}}class ao extends GI{constructor(A=1,I=1,g=1,C=1){super(),this.type="PlaneGeometry",this.parameters={width:A,height:I,widthSegments:g,heightSegments:C};const B=A/2,i=I/2,E=Math.floor(g),e=Math.floor(C),t=E+1,s=e+1,n=A/E,D=I/e,r=[],w=[],G=[],l=[];for(let c=0;c<s;c++){const k=c*D-i;for(let y=0;y<t;y++){const M=y*n-B;w.push(M,-k,0),G.push(0,0,1),l.push(y/E),l.push(1-c/e)}}for(let c=0;c<e;c++)for(let k=0;k<E;k++){const y=k+t*c,M=k+t*(c+1),N=k+1+t*(c+1),R=k+1+t*c;r.push(y,M,R),r.push(M,N,R)}this.setIndex(r),this.setAttribute("position",new _A(w,3)),this.setAttribute("normal",new _A(G,3)),this.setAttribute("uv",new _A(l,2))}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new ao(A.width,A.height,A.widthSegments,A.heightSegments)}}var Op=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Zp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,_p=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jp="vec3 transformed = vec3( position );",Vp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,zp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,$p=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Aq=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Iq=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gq=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cq=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bq=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qq=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,iq=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Eq=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,oq=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,eq=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,tq=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,aq=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sq=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nq=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dq=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rq="gl_FragColor = linearToOutputTexel( gl_FragColor );",hq=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cq=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,wq=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,lq=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Gq=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sq=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,yq=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kq=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mq=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Uq=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nq=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Kq=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Fq=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rq=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jq=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dq=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,pq=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,qq=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fq=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,uq=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Lq=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yq=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif`,Hq=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,mq=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,bq=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Tq=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,xq=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Oq=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vq=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Pq=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Zq=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,Wq=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_q=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,jq=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vq=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xq=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zq=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$q=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Af=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,If=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,gf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,Cf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Bf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ef=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,of=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ef=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,tf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,af=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Df=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,rf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,yf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,kf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Mf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Uf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Nf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Kf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ff=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Rf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,df=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,qf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,ff=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,uf=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Lf=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Yf=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Hf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Tf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Of=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Pf=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Zf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Wf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,_f=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,jf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Xf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$f=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Au=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Iu=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gu=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cu=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Bu=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qu=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,iu=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Eu=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ou=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eu=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,tu=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,au=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,su=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nu=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Du=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ru=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hu=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,cu=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,yI={alphamap_fragment:Op,alphamap_pars_fragment:vp,alphatest_fragment:Pp,alphatest_pars_fragment:Zp,aomap_fragment:Wp,aomap_pars_fragment:_p,begin_vertex:jp,beginnormal_vertex:Vp,bsdfs:Xp,iridescence_fragment:zp,bumpmap_pars_fragment:$p,clipping_planes_fragment:Aq,clipping_planes_pars_fragment:Iq,clipping_planes_pars_vertex:gq,clipping_planes_vertex:Cq,color_fragment:Bq,color_pars_fragment:Qq,color_pars_vertex:iq,color_vertex:Eq,common:oq,cube_uv_reflection_fragment:eq,defaultnormal_vertex:tq,displacementmap_pars_vertex:aq,displacementmap_vertex:sq,emissivemap_fragment:nq,emissivemap_pars_fragment:Dq,encodings_fragment:rq,encodings_pars_fragment:hq,envmap_fragment:cq,envmap_common_pars_fragment:wq,envmap_pars_fragment:lq,envmap_pars_vertex:Gq,envmap_physical_pars_fragment:pq,envmap_vertex:Sq,fog_vertex:yq,fog_pars_vertex:kq,fog_fragment:Mq,fog_pars_fragment:Uq,gradientmap_pars_fragment:Nq,lightmap_fragment:Kq,lightmap_pars_fragment:Fq,lights_lambert_fragment:Rq,lights_lambert_pars_fragment:Jq,lights_pars_begin:dq,lights_toon_fragment:qq,lights_toon_pars_fragment:fq,lights_phong_fragment:uq,lights_phong_pars_fragment:Lq,lights_physical_fragment:Yq,lights_physical_pars_fragment:Hq,lights_fragment_begin:mq,lights_fragment_maps:bq,lights_fragment_end:Tq,logdepthbuf_fragment:xq,logdepthbuf_pars_fragment:Oq,logdepthbuf_pars_vertex:vq,logdepthbuf_vertex:Pq,map_fragment:Zq,map_pars_fragment:Wq,map_particle_fragment:_q,map_particle_pars_fragment:jq,metalnessmap_fragment:Vq,metalnessmap_pars_fragment:Xq,morphcolor_vertex:zq,morphnormal_vertex:$q,morphtarget_pars_vertex:Af,morphtarget_vertex:If,normal_fragment_begin:gf,normal_fragment_maps:Cf,normal_pars_fragment:Bf,normal_pars_vertex:Qf,normal_vertex:Ef,normalmap_pars_fragment:of,clearcoat_normal_fragment_begin:ef,clearcoat_normal_fragment_maps:tf,clearcoat_pars_fragment:af,iridescence_pars_fragment:sf,output_fragment:nf,packing:Df,premultiplied_alpha_fragment:rf,project_vertex:hf,dithering_fragment:cf,dithering_pars_fragment:wf,roughnessmap_fragment:lf,roughnessmap_pars_fragment:Gf,shadowmap_pars_fragment:Sf,shadowmap_pars_vertex:yf,shadowmap_vertex:kf,shadowmask_pars_fragment:Mf,skinbase_vertex:Uf,skinning_pars_vertex:Nf,skinning_vertex:Kf,skinnormal_vertex:Ff,specularmap_fragment:Rf,specularmap_pars_fragment:Jf,tonemapping_fragment:df,tonemapping_pars_fragment:pf,transmission_fragment:qf,transmission_pars_fragment:ff,uv_pars_fragment:uf,uv_pars_vertex:Lf,uv_vertex:Yf,worldpos_vertex:Hf,background_vert:mf,background_frag:bf,backgroundCube_vert:Tf,backgroundCube_frag:xf,cube_vert:Of,cube_frag:vf,depth_vert:Pf,depth_frag:Zf,distanceRGBA_vert:Wf,distanceRGBA_frag:_f,equirect_vert:jf,equirect_frag:Vf,linedashed_vert:Xf,linedashed_frag:zf,meshbasic_vert:$f,meshbasic_frag:Au,meshlambert_vert:Iu,meshlambert_frag:gu,meshmatcap_vert:Cu,meshmatcap_frag:Bu,meshnormal_vert:Qu,meshnormal_frag:iu,meshphong_vert:Eu,meshphong_frag:ou,meshphysical_vert:eu,meshphysical_frag:tu,meshtoon_vert:au,meshtoon_frag:su,points_vert:nu,points_frag:Du,shadow_vert:ru,shadow_frag:hu,sprite_vert:cu,sprite_frag:wu},fA={common:{diffuse:{value:new LA(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new mI},alphaMap:{value:null},alphaMapTransform:{value:new mI},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new mI}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new mI}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new mI}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new mI},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new mI},normalScale:{value:new rA(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new mI},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new mI}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new mI}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new mI}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new LA(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new LA(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new mI}},sprite:{diffuse:{value:new LA(16777215)},opacity:{value:1},center:{value:new rA(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new mI},alphaMap:{value:null},alphaTest:{value:0}}},wB={basic:{uniforms:sC([fA.common,fA.specularmap,fA.envmap,fA.aomap,fA.lightmap,fA.fog]),vertexShader:yI.meshbasic_vert,fragmentShader:yI.meshbasic_frag},lambert:{uniforms:sC([fA.common,fA.specularmap,fA.envmap,fA.aomap,fA.lightmap,fA.emissivemap,fA.bumpmap,fA.normalmap,fA.displacementmap,fA.fog,fA.lights,{emissive:{value:new LA(0)}}]),vertexShader:yI.meshlambert_vert,fragmentShader:yI.meshlambert_frag},phong:{uniforms:sC([fA.common,fA.specularmap,fA.envmap,fA.aomap,fA.lightmap,fA.emissivemap,fA.bumpmap,fA.normalmap,fA.displacementmap,fA.fog,fA.lights,{emissive:{value:new LA(0)},specular:{value:new LA(1118481)},shininess:{value:30}}]),vertexShader:yI.meshphong_vert,fragmentShader:yI.meshphong_frag},standard:{uniforms:sC([fA.common,fA.envmap,fA.aomap,fA.lightmap,fA.emissivemap,fA.bumpmap,fA.normalmap,fA.displacementmap,fA.roughnessmap,fA.metalnessmap,fA.fog,fA.lights,{emissive:{value:new LA(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:yI.meshphysical_vert,fragmentShader:yI.meshphysical_frag},toon:{uniforms:sC([fA.common,fA.aomap,fA.lightmap,fA.emissivemap,fA.bumpmap,fA.normalmap,fA.displacementmap,fA.gradientmap,fA.fog,fA.lights,{emissive:{value:new LA(0)}}]),vertexShader:yI.meshtoon_vert,fragmentShader:yI.meshtoon_frag},matcap:{uniforms:sC([fA.common,fA.bumpmap,fA.normalmap,fA.displacementmap,fA.fog,{matcap:{value:null}}]),vertexShader:yI.meshmatcap_vert,fragmentShader:yI.meshmatcap_frag},points:{uniforms:sC([fA.points,fA.fog]),vertexShader:yI.points_vert,fragmentShader:yI.points_frag},dashed:{uniforms:sC([fA.common,fA.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:yI.linedashed_vert,fragmentShader:yI.linedashed_frag},depth:{uniforms:sC([fA.common,fA.displacementmap]),vertexShader:yI.depth_vert,fragmentShader:yI.depth_frag},normal:{uniforms:sC([fA.common,fA.bumpmap,fA.normalmap,fA.displacementmap,{opacity:{value:1}}]),vertexShader:yI.meshnormal_vert,fragmentShader:yI.meshnormal_frag},sprite:{uniforms:sC([fA.sprite,fA.fog]),vertexShader:yI.sprite_vert,fragmentShader:yI.sprite_frag},background:{uniforms:{uvTransform:{value:new mI},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:yI.background_vert,fragmentShader:yI.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:yI.backgroundCube_vert,fragmentShader:yI.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:yI.cube_vert,fragmentShader:yI.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:yI.equirect_vert,fragmentShader:yI.equirect_frag},distanceRGBA:{uniforms:sC([fA.common,fA.displacementmap,{referencePosition:{value:new f},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:yI.distanceRGBA_vert,fragmentShader:yI.distanceRGBA_frag},shadow:{uniforms:sC([fA.lights,fA.fog,{color:{value:new LA(0)},opacity:{value:1}}]),vertexShader:yI.shadow_vert,fragmentShader:yI.shadow_frag}};wB.physical={uniforms:sC([wB.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new mI},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new mI},clearcoatNormalScale:{value:new rA(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new mI},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new mI},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new mI},sheen:{value:0},sheenColor:{value:new LA(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new mI},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new mI},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new mI},transmissionSamplerSize:{value:new rA},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new mI},attenuationDistance:{value:0},attenuationColor:{value:new LA(0)},specularColor:{value:new LA(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new mI},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new mI}}]),vertexShader:yI.meshphysical_vert,fragmentShader:yI.meshphysical_frag};const aa={r:0,b:0,g:0};function lu(Q,A,I,g,C,B,i){const E=new LA(0);let e=B===!0?0:1,t,s,n=null,D=0,r=null;function w(l,c){let k=!1,y=c.isScene===!0?c.background:null;switch(y&&y.isTexture&&(y=(c.backgroundBlurriness>0?I:A).get(y)),y===null?G(E,e):y&&y.isColor&&(G(y,1),k=!0),Q.xr.getEnvironmentBlendMode()){case"opaque":k=!0;break;case"additive":g.buffers.color.setClear(0,0,0,1,i),k=!0;break;case"alpha-blend":g.buffers.color.setClear(0,0,0,0,i),k=!0;break}(Q.autoClear||k)&&Q.clear(Q.autoClearColor,Q.autoClearDepth,Q.autoClearStencil),y&&(y.isCubeTexture||y.mapping===to)?(s===void 0&&(s=new ug(new GQ(1,1,1),new OB({name:"BackgroundCubeMaterial",uniforms:zE(wB.backgroundCube.uniforms),vertexShader:wB.backgroundCube.vertexShader,fragmentShader:wB.backgroundCube.fragmentShader,side:DC,depthTest:!1,depthWrite:!1,fog:!1})),s.geometry.deleteAttribute("normal"),s.geometry.deleteAttribute("uv"),s.onBeforeRender=function(R,d,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(s.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),C.update(s)),s.material.uniforms.envMap.value=y,s.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,s.material.uniforms.backgroundBlurriness.value=c.backgroundBlurriness,s.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,s.material.toneMapped=y.colorSpace!==QI,(n!==y||D!==y.version||r!==Q.toneMapping)&&(s.material.needsUpdate=!0,n=y,D=y.version,r=Q.toneMapping),s.layers.enableAll(),l.unshift(s,s.geometry,s.material,0,0,null)):y&&y.isTexture&&(t===void 0&&(t=new ug(new ao(2,2),new OB({name:"BackgroundMaterial",uniforms:zE(wB.background.uniforms),vertexShader:wB.background.vertexShader,fragmentShader:wB.background.fragmentShader,side:xB,depthTest:!1,depthWrite:!1,fog:!1})),t.geometry.deleteAttribute("normal"),Object.defineProperty(t.material,"map",{get:function(){return this.uniforms.t2D.value}}),C.update(t)),t.material.uniforms.t2D.value=y,t.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,t.material.toneMapped=y.colorSpace!==QI,y.matrixAutoUpdate===!0&&y.updateMatrix(),t.material.uniforms.uvTransform.value.copy(y.matrix),(n!==y||D!==y.version||r!==Q.toneMapping)&&(t.material.needsUpdate=!0,n=y,D=y.version,r=Q.toneMapping),t.layers.enableAll(),l.unshift(t,t.geometry,t.material,0,0,null))}function G(l,c){l.getRGB(aa,Ik(Q)),g.buffers.color.setClear(aa.r,aa.g,aa.b,c,i)}return{getClearColor:function(){return E},setClearColor:function(l,c=1){E.set(l),e=c,G(E,e)},getClearAlpha:function(){return e},setClearAlpha:function(l){e=l,G(E,e)},render:w}}function Gu(Q,A,I,g){const C=Q.getParameter(Q.MAX_VERTEX_ATTRIBS),B=g.isWebGL2?null:A.get("OES_vertex_array_object"),i=g.isWebGL2||B!==null,E={},e=l(null);let t=e,s=!1;function n(v,IA,oA,gA,iA){let MA=!1;if(i){const lA=G(gA,oA,IA);t!==lA&&(t=lA,r(t.object)),MA=c(v,gA,oA,iA),MA&&k(v,gA,oA,iA)}else{const lA=IA.wireframe===!0;(t.geometry!==gA.id||t.program!==oA.id||t.wireframe!==lA)&&(t.geometry=gA.id,t.program=oA.id,t.wireframe=lA,MA=!0)}iA!==null&&I.update(iA,Q.ELEMENT_ARRAY_BUFFER),(MA||s)&&(s=!1,L(v,IA,oA,gA),iA!==null&&Q.bindBuffer(Q.ELEMENT_ARRAY_BUFFER,I.get(iA).buffer))}function D(){return g.isWebGL2?Q.createVertexArray():B.createVertexArrayOES()}function r(v){return g.isWebGL2?Q.bindVertexArray(v):B.bindVertexArrayOES(v)}function w(v){return g.isWebGL2?Q.deleteVertexArray(v):B.deleteVertexArrayOES(v)}function G(v,IA,oA){const gA=oA.wireframe===!0;let iA=E[v.id];iA===void 0&&(iA={},E[v.id]=iA);let MA=iA[IA.id];MA===void 0&&(MA={},iA[IA.id]=MA);let lA=MA[gA];return lA===void 0&&(lA=l(D()),MA[gA]=lA),lA}function l(v){const IA=[],oA=[],gA=[];for(let iA=0;iA<C;iA++)IA[iA]=0,oA[iA]=0,gA[iA]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:IA,enabledAttributes:oA,attributeDivisors:gA,object:v,attributes:{},index:null}}function c(v,IA,oA,gA){const iA=t.attributes,MA=IA.attributes;let lA=0;const mA=oA.getAttributes();for(const FA in mA)if(mA[FA].location>=0){const GA=iA[FA];let RA=MA[FA];if(RA===void 0&&(FA==="instanceMatrix"&&v.instanceMatrix&&(RA=v.instanceMatrix),FA==="instanceColor"&&v.instanceColor&&(RA=v.instanceColor)),GA===void 0||GA.attribute!==RA||RA&&GA.data!==RA.data)return!0;lA++}return t.attributesNum!==lA||t.index!==gA}function k(v,IA,oA,gA){const iA={},MA=IA.attributes;let lA=0;const mA=oA.getAttributes();for(const FA in mA)if(mA[FA].location>=0){let GA=MA[FA];GA===void 0&&(FA==="instanceMatrix"&&v.instanceMatrix&&(GA=v.instanceMatrix),FA==="instanceColor"&&v.instanceColor&&(GA=v.instanceColor));const RA={};RA.attribute=GA,GA&&GA.data&&(RA.data=GA.data),iA[FA]=RA,lA++}t.attributes=iA,t.attributesNum=lA,t.index=gA}function y(){const v=t.newAttributes;for(let IA=0,oA=v.length;IA<oA;IA++)v[IA]=0}function M(v){N(v,0)}function N(v,IA){const oA=t.newAttributes,gA=t.enabledAttributes,iA=t.attributeDivisors;oA[v]=1,gA[v]===0&&(Q.enableVertexAttribArray(v),gA[v]=1),iA[v]!==IA&&((g.isWebGL2?Q:A.get("ANGLE_instanced_arrays"))[g.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](v,IA),iA[v]=IA)}function R(){const v=t.newAttributes,IA=t.enabledAttributes;for(let oA=0,gA=IA.length;oA<gA;oA++)IA[oA]!==v[oA]&&(Q.disableVertexAttribArray(oA),IA[oA]=0)}function d(v,IA,oA,gA,iA,MA){g.isWebGL2===!0&&(oA===Q.INT||oA===Q.UNSIGNED_INT)?Q.vertexAttribIPointer(v,IA,oA,iA,MA):Q.vertexAttribPointer(v,IA,oA,gA,iA,MA)}function L(v,IA,oA,gA){if(g.isWebGL2===!1&&(v.isInstancedMesh||gA.isInstancedBufferGeometry)&&A.get("ANGLE_instanced_arrays")===null)return;y();const iA=gA.attributes,MA=oA.getAttributes(),lA=IA.defaultAttributeValues;for(const mA in MA){const FA=MA[mA];if(FA.location>=0){let EA=iA[mA];if(EA===void 0&&(mA==="instanceMatrix"&&v.instanceMatrix&&(EA=v.instanceMatrix),mA==="instanceColor"&&v.instanceColor&&(EA=v.instanceColor)),EA!==void 0){const GA=EA.normalized,RA=EA.itemSize,qA=I.get(EA);if(qA===void 0)continue;const P=qA.buffer,AI=qA.type,II=qA.bytesPerElement;if(EA.isInterleavedBufferAttribute){const KA=EA.data,vA=KA.stride,SA=EA.offset;if(KA.isInstancedInterleavedBuffer){for(let sA=0;sA<FA.locationSize;sA++)N(FA.location+sA,KA.meshPerAttribute);v.isInstancedMesh!==!0&&gA._maxInstanceCount===void 0&&(gA._maxInstanceCount=KA.meshPerAttribute*KA.count)}else for(let sA=0;sA<FA.locationSize;sA++)M(FA.location+sA);Q.bindBuffer(Q.ARRAY_BUFFER,P);for(let sA=0;sA<FA.locationSize;sA++)d(FA.location+sA,RA/FA.locationSize,AI,GA,vA*II,(SA+RA/FA.locationSize*sA)*II)}else{if(EA.isInstancedBufferAttribute){for(let KA=0;KA<FA.locationSize;KA++)N(FA.location+KA,EA.meshPerAttribute);v.isInstancedMesh!==!0&&gA._maxInstanceCount===void 0&&(gA._maxInstanceCount=EA.meshPerAttribute*EA.count)}else for(let KA=0;KA<FA.locationSize;KA++)M(FA.location+KA);Q.bindBuffer(Q.ARRAY_BUFFER,P);for(let KA=0;KA<FA.locationSize;KA++)d(FA.location+KA,RA/FA.locationSize,AI,GA,RA*II,RA/FA.locationSize*KA*II)}}else if(lA!==void 0){const GA=lA[mA];if(GA!==void 0)switch(GA.length){case 2:Q.vertexAttrib2fv(FA.location,GA);break;case 3:Q.vertexAttrib3fv(FA.location,GA);break;case 4:Q.vertexAttrib4fv(FA.location,GA);break;default:Q.vertexAttrib1fv(FA.location,GA)}}}}R()}function F(){$();for(const v in E){const IA=E[v];for(const oA in IA){const gA=IA[oA];for(const iA in gA)w(gA[iA].object),delete gA[iA];delete IA[oA]}delete E[v]}}function u(v){if(E[v.id]===void 0)return;const IA=E[v.id];for(const oA in IA){const gA=IA[oA];for(const iA in gA)w(gA[iA].object),delete gA[iA];delete IA[oA]}delete E[v.id]}function W(v){for(const IA in E){const oA=E[IA];if(oA[v.id]===void 0)continue;const gA=oA[v.id];for(const iA in gA)w(gA[iA].object),delete gA[iA];delete oA[v.id]}}function $(){H(),s=!0,t!==e&&(t=e,r(t.object))}function H(){e.geometry=null,e.program=null,e.wireframe=!1}return{setup:n,reset:$,resetDefaultState:H,dispose:F,releaseStatesOfGeometry:u,releaseStatesOfProgram:W,initAttributes:y,enableAttribute:M,disableUnusedAttributes:R}}function Su(Q,A,I,g){const C=g.isWebGL2;let B;function i(t){B=t}function E(t,s){Q.drawArrays(B,t,s),I.update(s,B,1)}function e(t,s,n){if(n===0)return;let D,r;if(C)D=Q,r="drawArraysInstanced";else if(D=A.get("ANGLE_instanced_arrays"),r="drawArraysInstancedANGLE",D===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}D[r](B,t,s,n),I.update(s,B,n)}this.setMode=i,this.render=E,this.renderInstances=e}function yu(Q,A,I){let g;function C(){if(g!==void 0)return g;if(A.has("EXT_texture_filter_anisotropic")===!0){const d=A.get("EXT_texture_filter_anisotropic");g=Q.getParameter(d.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else g=0;return g}function B(d){if(d==="highp"){if(Q.getShaderPrecisionFormat(Q.VERTEX_SHADER,Q.HIGH_FLOAT).precision>0&&Q.getShaderPrecisionFormat(Q.FRAGMENT_SHADER,Q.HIGH_FLOAT).precision>0)return"highp";d="mediump"}return d==="mediump"&&Q.getShaderPrecisionFormat(Q.VERTEX_SHADER,Q.MEDIUM_FLOAT).precision>0&&Q.getShaderPrecisionFormat(Q.FRAGMENT_SHADER,Q.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const i=typeof WebGL2RenderingContext<"u"&&Q.constructor.name==="WebGL2RenderingContext";let E=I.precision!==void 0?I.precision:"highp";const e=B(E);e!==E&&(console.warn("THREE.WebGLRenderer:",E,"not supported, using",e,"instead."),E=e);const t=i||A.has("WEBGL_draw_buffers"),s=I.logarithmicDepthBuffer===!0,n=Q.getParameter(Q.MAX_TEXTURE_IMAGE_UNITS),D=Q.getParameter(Q.MAX_VERTEX_TEXTURE_IMAGE_UNITS),r=Q.getParameter(Q.MAX_TEXTURE_SIZE),w=Q.getParameter(Q.MAX_CUBE_MAP_TEXTURE_SIZE),G=Q.getParameter(Q.MAX_VERTEX_ATTRIBS),l=Q.getParameter(Q.MAX_VERTEX_UNIFORM_VECTORS),c=Q.getParameter(Q.MAX_VARYING_VECTORS),k=Q.getParameter(Q.MAX_FRAGMENT_UNIFORM_VECTORS),y=D>0,M=i||A.has("OES_texture_float"),N=y&&M,R=i?Q.getParameter(Q.MAX_SAMPLES):0;return{isWebGL2:i,drawBuffers:t,getMaxAnisotropy:C,getMaxPrecision:B,precision:E,logarithmicDepthBuffer:s,maxTextures:n,maxVertexTextures:D,maxTextureSize:r,maxCubemapSize:w,maxAttributes:G,maxVertexUniforms:l,maxVaryings:c,maxFragmentUniforms:k,vertexTextures:y,floatFragmentTextures:M,floatVertexTextures:N,maxSamples:R}}function ku(Q){const A=this;let I=null,g=0,C=!1,B=!1;const i=new bQ,E=new mI,e={value:null,needsUpdate:!1};this.uniform=e,this.numPlanes=0,this.numIntersection=0,this.init=function(n,D){const r=n.length!==0||D||g!==0||C;return C=D,g=n.length,r},this.beginShadows=function(){B=!0,s(null)},this.endShadows=function(){B=!1},this.setGlobalState=function(n,D){I=s(n,D,0)},this.setState=function(n,D,r){const w=n.clippingPlanes,G=n.clipIntersection,l=n.clipShadows,c=Q.get(n);if(!C||w===null||w.length===0||B&&!l)B?s(null):t();else{const k=B?0:g,y=k*4;let M=c.clippingState||null;e.value=M,M=s(w,D,y,r);for(let N=0;N!==y;++N)M[N]=I[N];c.clippingState=M,this.numIntersection=G?this.numPlanes:0,this.numPlanes+=k}};function t(){e.value!==I&&(e.value=I,e.needsUpdate=g>0),A.numPlanes=g,A.numIntersection=0}function s(n,D,r,w){const G=n!==null?n.length:0;let l=null;if(G!==0){if(l=e.value,w!==!0||l===null){const c=r+G*4,k=D.matrixWorldInverse;E.getNormalMatrix(k),(l===null||l.length<c)&&(l=new Float32Array(c));for(let y=0,M=r;y!==G;++y,M+=4)i.copy(n[y]).applyMatrix4(k,E),i.normal.toArray(l,M),l[M+3]=i.constant}e.value=l,e.needsUpdate=!0}return A.numPlanes=G,A.numIntersection=0,l}}function Mu(Q){let A=new WeakMap;function I(i,E){return E===ne?i.mapping=WQ:E===De&&(i.mapping=_Q),i}function g(i){if(i&&i.isTexture&&i.isRenderTargetTexture===!1){const E=i.mapping;if(E===ne||E===De)if(A.has(i)){const e=A.get(i).texture;return I(e,i.mapping)}else{const e=i.image;if(e&&e.height>0){const t=new Bk(e.height/2);return t.fromEquirectangularTexture(Q,i),A.set(i,t),i.addEventListener("dispose",C),I(t.texture,i.mapping)}else return null}}return i}function C(i){const E=i.target;E.removeEventListener("dispose",C);const e=A.get(E);e!==void 0&&(A.delete(E),e.dispose())}function B(){A=new WeakMap}return{get:g,dispose:B}}class me extends Ye{constructor(A=-1,I=1,g=1,C=-1,B=.1,i=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=A,this.right=I,this.top=g,this.bottom=C,this.near=B,this.far=i,this.updateProjectionMatrix()}copy(A,I){return super.copy(A,I),this.left=A.left,this.right=A.right,this.top=A.top,this.bottom=A.bottom,this.near=A.near,this.far=A.far,this.zoom=A.zoom,this.view=A.view===null?null:Object.assign({},A.view),this}setViewOffset(A,I,g,C,B,i){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=I,this.view.offsetX=g,this.view.offsetY=C,this.view.width=B,this.view.height=i,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=(this.right-this.left)/(2*this.zoom),I=(this.top-this.bottom)/(2*this.zoom),g=(this.right+this.left)/2,C=(this.top+this.bottom)/2;let B=g-A,i=g+A,E=C+I,e=C-I;if(this.view!==null&&this.view.enabled){const t=(this.right-this.left)/this.view.fullWidth/this.zoom,s=(this.top-this.bottom)/this.view.fullHeight/this.zoom;B+=t*this.view.offsetX,i=B+t*this.view.width,E-=s*this.view.offsetY,e=E-s*this.view.height}this.projectionMatrix.makeOrthographic(B,i,E,e,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const I=super.toJSON(A);return I.object.zoom=this.zoom,I.object.left=this.left,I.object.right=this.right,I.object.top=this.top,I.object.bottom=this.bottom,I.object.near=this.near,I.object.far=this.far,this.view!==null&&(I.object.view=Object.assign({},this.view)),I}}const TE=4,gG=[.125,.215,.35,.446,.526,.582],Ki=20,SD=new me,CG=new LA;let yD=null;const Ui=(1+Math.sqrt(5))/2,RE=1/Ui,BG=[new f(1,1,1),new f(-1,1,1),new f(1,1,-1),new f(-1,1,-1),new f(0,Ui,RE),new f(0,Ui,-RE),new f(RE,0,Ui),new f(-RE,0,Ui),new f(Ui,RE,0),new f(-Ui,RE,0)];class Jr{constructor(A){this._renderer=A,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(A,I=0,g=.1,C=100){yD=this._renderer.getRenderTarget(),this._setSize(256);const B=this._allocateTargets();return B.depthBuffer=!0,this._sceneToCubeUV(A,g,C,B),I>0&&this._blur(B,0,0,I),this._applyPMREM(B),this._cleanup(B),B}fromEquirectangular(A,I=null){return this._fromTexture(A,I)}fromCubemap(A,I=null){return this._fromTexture(A,I)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=EG(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=iG(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(A){this._lodMax=Math.floor(Math.log2(A)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let A=0;A<this._lodPlanes.length;A++)this._lodPlanes[A].dispose()}_cleanup(A){this._renderer.setRenderTarget(yD),A.scissorTest=!1,sa(A,0,0,A.width,A.height)}_fromTexture(A,I){A.mapping===WQ||A.mapping===_Q?this._setSize(A.image.length===0?16:A.image[0].width||A.image[0].image.width):this._setSize(A.image.width/4),yD=this._renderer.getRenderTarget();const g=I||this._allocateTargets();return this._textureToCubeUV(A,g),this._applyPMREM(g),this._cleanup(g),g}_allocateTargets(){const A=3*Math.max(this._cubeSize,112),I=4*this._cubeSize,g={magFilter:Bg,minFilter:Bg,generateMipmaps:!1,type:mB,format:Og,colorSpace:CB,depthBuffer:!1},C=QG(A,I,g);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==A||this._pingPongRenderTarget.height!==I){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=QG(A,I,g);const{_lodMax:B}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Uu(B)),this._blurMaterial=Nu(B,A,I)}return C}_compileMaterial(A){const I=new ug(this._lodPlanes[0],A);this._renderer.compile(I,SD)}_sceneToCubeUV(A,I,g,C){const E=new fg(90,1,I,g),e=[1,-1,1,1,1,1],t=[1,1,1,-1,-1,-1],s=this._renderer,n=s.autoClear,D=s.toneMapping;s.getClearColor(CG),s.toneMapping=HB,s.autoClear=!1;const r=new mC({name:"PMREM.Background",side:DC,depthWrite:!1,depthTest:!1}),w=new ug(new GQ,r);let G=!1;const l=A.background;l?l.isColor&&(r.color.copy(l),A.background=null,G=!0):(r.color.copy(CG),G=!0);for(let c=0;c<6;c++){const k=c%3;k===0?(E.up.set(0,e[c],0),E.lookAt(t[c],0,0)):k===1?(E.up.set(0,0,e[c]),E.lookAt(0,t[c],0)):(E.up.set(0,e[c],0),E.lookAt(0,0,t[c]));const y=this._cubeSize;sa(C,k*y,c>2?y:0,y,y),s.setRenderTarget(C),G&&s.render(w,E),s.render(A,E)}w.geometry.dispose(),w.material.dispose(),s.toneMapping=D,s.autoClear=n,A.background=l}_textureToCubeUV(A,I){const g=this._renderer,C=A.mapping===WQ||A.mapping===_Q;C?(this._cubemapMaterial===null&&(this._cubemapMaterial=EG()),this._cubemapMaterial.uniforms.flipEnvMap.value=A.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=iG());const B=C?this._cubemapMaterial:this._equirectMaterial,i=new ug(this._lodPlanes[0],B),E=B.uniforms;E.envMap.value=A;const e=this._cubeSize;sa(I,0,0,3*e,2*e),g.setRenderTarget(I),g.render(i,SD)}_applyPMREM(A){const I=this._renderer,g=I.autoClear;I.autoClear=!1;for(let C=1;C<this._lodPlanes.length;C++){const B=Math.sqrt(this._sigmas[C]*this._sigmas[C]-this._sigmas[C-1]*this._sigmas[C-1]),i=BG[(C-1)%BG.length];this._blur(A,C-1,C,B,i)}I.autoClear=g}_blur(A,I,g,C,B){const i=this._pingPongRenderTarget;this._halfBlur(A,i,I,g,C,"latitudinal",B),this._halfBlur(i,A,g,g,C,"longitudinal",B)}_halfBlur(A,I,g,C,B,i,E){const e=this._renderer,t=this._blurMaterial;i!=="latitudinal"&&i!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const s=3,n=new ug(this._lodPlanes[C],t),D=t.uniforms,r=this._sizeLods[g]-1,w=isFinite(B)?Math.PI/(2*r):2*Math.PI/(2*Ki-1),G=B/w,l=isFinite(B)?1+Math.floor(s*G):Ki;l>Ki&&console.warn(`sigmaRadians, ${B}, is too large and will clip, as it requested ${l} samples when the maximum is set to ${Ki}`);const c=[];let k=0;for(let d=0;d<Ki;++d){const L=d/G,F=Math.exp(-L*L/2);c.push(F),d===0?k+=F:d<l&&(k+=2*F)}for(let d=0;d<c.length;d++)c[d]=c[d]/k;D.envMap.value=A.texture,D.samples.value=l,D.weights.value=c,D.latitudinal.value=i==="latitudinal",E&&(D.poleAxis.value=E);const{_lodMax:y}=this;D.dTheta.value=w,D.mipInt.value=y-g;const M=this._sizeLods[C],N=3*M*(C>y-TE?C-y+TE:0),R=4*(this._cubeSize-M);sa(I,N,R,3*M,2*M),e.setRenderTarget(I),e.render(n,SD)}}function Uu(Q){const A=[],I=[],g=[];let C=Q;const B=Q-TE+1+gG.length;for(let i=0;i<B;i++){const E=Math.pow(2,C);I.push(E);let e=1/E;i>Q-TE?e=gG[i-Q+TE-1]:i===0&&(e=0),g.push(e);const t=1/(E-2),s=-t,n=1+t,D=[s,s,n,s,n,n,s,s,n,n,s,n],r=6,w=6,G=3,l=2,c=1,k=new Float32Array(G*w*r),y=new Float32Array(l*w*r),M=new Float32Array(c*w*r);for(let R=0;R<r;R++){const d=R%3*2/3-1,L=R>2?0:-1,F=[d,L,0,d+2/3,L,0,d+2/3,L+1,0,d,L,0,d+2/3,L+1,0,d,L+1,0];k.set(F,G*w*R),y.set(D,l*w*R);const u=[R,R,R,R,R,R];M.set(u,c*w*R)}const N=new GI;N.setAttribute("position",new OI(k,G)),N.setAttribute("uv",new OI(y,l)),N.setAttribute("faceIndex",new OI(M,c)),A.push(N),C>TE&&C--}return{lodPlanes:A,sizeLods:I,sigmas:g}}function QG(Q,A,I){const g=new yB(Q,A,I);return g.texture.mapping=to,g.texture.name="PMREM.cubeUv",g.scissorTest=!0,g}function sa(Q,A,I,g,C){Q.viewport.set(A,I,g,C),Q.scissor.set(A,I,g,C)}function Nu(Q,A,I){const g=new Float32Array(Ki),C=new f(0,1,0);return new OB({name:"SphericalGaussianBlur",defines:{n:Ki,CUBEUV_TEXEL_WIDTH:1/A,CUBEUV_TEXEL_HEIGHT:1/I,CUBEUV_MAX_MIP:`${Q}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:g},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:C}},vertexShader:hh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:rQ,depthTest:!1,depthWrite:!1})}function iG(){return new OB({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:rQ,depthTest:!1,depthWrite:!1})}function EG(){return new OB({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:rQ,depthTest:!1,depthWrite:!1})}function hh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ku(Q){let A=new WeakMap,I=null;function g(E){if(E&&E.isTexture){const e=E.mapping,t=e===ne||e===De,s=e===WQ||e===_Q;if(t||s)if(E.isRenderTargetTexture&&E.needsPMREMUpdate===!0){E.needsPMREMUpdate=!1;let n=A.get(E);return I===null&&(I=new Jr(Q)),n=t?I.fromEquirectangular(E,n):I.fromCubemap(E,n),A.set(E,n),n.texture}else{if(A.has(E))return A.get(E).texture;{const n=E.image;if(t&&n&&n.height>0||s&&n&&C(n)){I===null&&(I=new Jr(Q));const D=t?I.fromEquirectangular(E):I.fromCubemap(E);return A.set(E,D),E.addEventListener("dispose",B),D.texture}else return null}}}return E}function C(E){let e=0;const t=6;for(let s=0;s<t;s++)E[s]!==void 0&&e++;return e===t}function B(E){const e=E.target;e.removeEventListener("dispose",B);const t=A.get(e);t!==void 0&&(A.delete(e),t.dispose())}function i(){A=new WeakMap,I!==null&&(I.dispose(),I=null)}return{get:g,dispose:i}}function Fu(Q){const A={};function I(g){if(A[g]!==void 0)return A[g];let C;switch(g){case"WEBGL_depth_texture":C=Q.getExtension("WEBGL_depth_texture")||Q.getExtension("MOZ_WEBGL_depth_texture")||Q.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":C=Q.getExtension("EXT_texture_filter_anisotropic")||Q.getExtension("MOZ_EXT_texture_filter_anisotropic")||Q.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":C=Q.getExtension("WEBGL_compressed_texture_s3tc")||Q.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||Q.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":C=Q.getExtension("WEBGL_compressed_texture_pvrtc")||Q.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:C=Q.getExtension(g)}return A[g]=C,C}return{has:function(g){return I(g)!==null},init:function(g){g.isWebGL2?I("EXT_color_buffer_float"):(I("WEBGL_depth_texture"),I("OES_texture_float"),I("OES_texture_half_float"),I("OES_texture_half_float_linear"),I("OES_standard_derivatives"),I("OES_element_index_uint"),I("OES_vertex_array_object"),I("ANGLE_instanced_arrays")),I("OES_texture_float_linear"),I("EXT_color_buffer_half_float"),I("WEBGL_multisampled_render_to_texture")},get:function(g){const C=I(g);return C===null&&console.warn("THREE.WebGLRenderer: "+g+" extension not supported."),C}}}function Ru(Q,A,I,g){const C={},B=new WeakMap;function i(n){const D=n.target;D.index!==null&&A.remove(D.index);for(const w in D.attributes)A.remove(D.attributes[w]);D.removeEventListener("dispose",i),delete C[D.id];const r=B.get(D);r&&(A.remove(r),B.delete(D)),g.releaseStatesOfGeometry(D),D.isInstancedBufferGeometry===!0&&delete D._maxInstanceCount,I.memory.geometries--}function E(n,D){return C[D.id]===!0||(D.addEventListener("dispose",i),C[D.id]=!0,I.memory.geometries++),D}function e(n){const D=n.attributes;for(const w in D)A.update(D[w],Q.ARRAY_BUFFER);const r=n.morphAttributes;for(const w in r){const G=r[w];for(let l=0,c=G.length;l<c;l++)A.update(G[l],Q.ARRAY_BUFFER)}}function t(n){const D=[],r=n.index,w=n.attributes.position;let G=0;if(r!==null){const k=r.array;G=r.version;for(let y=0,M=k.length;y<M;y+=3){const N=k[y+0],R=k[y+1],d=k[y+2];D.push(N,R,R,d,d,N)}}else{const k=w.array;G=w.version;for(let y=0,M=k.length/3-1;y<M;y+=3){const N=y+0,R=y+1,d=y+2;D.push(N,R,R,d,d,N)}}const l=new($y(D)?rh:Dh)(D,1);l.version=G;const c=B.get(n);c&&A.remove(c),B.set(n,l)}function s(n){const D=B.get(n);if(D){const r=n.index;r!==null&&D.version<r.version&&t(n)}else t(n);return B.get(n)}return{get:E,update:e,getWireframeAttribute:s}}function Ju(Q,A,I,g){const C=g.isWebGL2;let B;function i(D){B=D}let E,e;function t(D){E=D.type,e=D.bytesPerElement}function s(D,r){Q.drawElements(B,r,E,D*e),I.update(r,B,1)}function n(D,r,w){if(w===0)return;let G,l;if(C)G=Q,l="drawElementsInstanced";else if(G=A.get("ANGLE_instanced_arrays"),l="drawElementsInstancedANGLE",G===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}G[l](B,r,E,D*e,w),I.update(r,B,w)}this.setMode=i,this.setIndex=t,this.render=s,this.renderInstances=n}function du(Q){const A={geometries:0,textures:0},I={frame:0,calls:0,triangles:0,points:0,lines:0};function g(B,i,E){switch(I.calls++,i){case Q.TRIANGLES:I.triangles+=E*(B/3);break;case Q.LINES:I.lines+=E*(B/2);break;case Q.LINE_STRIP:I.lines+=E*(B-1);break;case Q.LINE_LOOP:I.lines+=E*B;break;case Q.POINTS:I.points+=E*B;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",i);break}}function C(){I.frame++,I.calls=0,I.triangles=0,I.points=0,I.lines=0}return{memory:A,render:I,programs:null,autoReset:!0,reset:C,update:g}}function pu(Q,A){return Q[0]-A[0]}function qu(Q,A){return Math.abs(A[1])-Math.abs(Q[1])}function fu(Q,A,I){const g={},C=new Float32Array(8),B=new WeakMap,i=new XI,E=[];for(let t=0;t<8;t++)E[t]=[t,0];function e(t,s,n){const D=t.morphTargetInfluences;if(A.isWebGL2===!0){const w=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,G=w!==void 0?w.length:0;let l=B.get(s);if(l===void 0||l.count!==G){let IA=function(){H.dispose(),B.delete(s),s.removeEventListener("dispose",IA)};var r=IA;l!==void 0&&l.texture.dispose();const y=s.morphAttributes.position!==void 0,M=s.morphAttributes.normal!==void 0,N=s.morphAttributes.color!==void 0,R=s.morphAttributes.position||[],d=s.morphAttributes.normal||[],L=s.morphAttributes.color||[];let F=0;y===!0&&(F=1),M===!0&&(F=2),N===!0&&(F=3);let u=s.attributes.position.count*F,W=1;u>A.maxTextureSize&&(W=Math.ceil(u/A.maxTextureSize),u=A.maxTextureSize);const $=new Float32Array(u*W*4*G),H=new ls($,u,W,G);H.type=YC,H.needsUpdate=!0;const v=F*4;for(let oA=0;oA<G;oA++){const gA=R[oA],iA=d[oA],MA=L[oA],lA=u*W*4*oA;for(let mA=0;mA<gA.count;mA++){const FA=mA*v;y===!0&&(i.fromBufferAttribute(gA,mA),$[lA+FA+0]=i.x,$[lA+FA+1]=i.y,$[lA+FA+2]=i.z,$[lA+FA+3]=0),M===!0&&(i.fromBufferAttribute(iA,mA),$[lA+FA+4]=i.x,$[lA+FA+5]=i.y,$[lA+FA+6]=i.z,$[lA+FA+7]=0),N===!0&&(i.fromBufferAttribute(MA,mA),$[lA+FA+8]=i.x,$[lA+FA+9]=i.y,$[lA+FA+10]=i.z,$[lA+FA+11]=MA.itemSize===4?i.w:1)}}l={count:G,texture:H,size:new rA(u,W)},B.set(s,l),s.addEventListener("dispose",IA)}let c=0;for(let y=0;y<D.length;y++)c+=D[y];const k=s.morphTargetsRelative?1:1-c;n.getUniforms().setValue(Q,"morphTargetBaseInfluence",k),n.getUniforms().setValue(Q,"morphTargetInfluences",D),n.getUniforms().setValue(Q,"morphTargetsTexture",l.texture,I),n.getUniforms().setValue(Q,"morphTargetsTextureSize",l.size)}else{const w=D===void 0?0:D.length;let G=g[s.id];if(G===void 0||G.length!==w){G=[];for(let M=0;M<w;M++)G[M]=[M,0];g[s.id]=G}for(let M=0;M<w;M++){const N=G[M];N[0]=M,N[1]=D[M]}G.sort(qu);for(let M=0;M<8;M++)M<w&&G[M][1]?(E[M][0]=G[M][0],E[M][1]=G[M][1]):(E[M][0]=Number.MAX_SAFE_INTEGER,E[M][1]=0);E.sort(pu);const l=s.morphAttributes.position,c=s.morphAttributes.normal;let k=0;for(let M=0;M<8;M++){const N=E[M],R=N[0],d=N[1];R!==Number.MAX_SAFE_INTEGER&&d?(l&&s.getAttribute("morphTarget"+M)!==l[R]&&s.setAttribute("morphTarget"+M,l[R]),c&&s.getAttribute("morphNormal"+M)!==c[R]&&s.setAttribute("morphNormal"+M,c[R]),C[M]=d,k+=d):(l&&s.hasAttribute("morphTarget"+M)===!0&&s.deleteAttribute("morphTarget"+M),c&&s.hasAttribute("morphNormal"+M)===!0&&s.deleteAttribute("morphNormal"+M),C[M]=0)}const y=s.morphTargetsRelative?1:1-k;n.getUniforms().setValue(Q,"morphTargetBaseInfluence",y),n.getUniforms().setValue(Q,"morphTargetInfluences",C)}}return{update:e}}function uu(Q,A,I,g){let C=new WeakMap;function B(e){const t=g.render.frame,s=e.geometry,n=A.get(e,s);return C.get(n)!==t&&(A.update(n),C.set(n,t)),e.isInstancedMesh&&(e.hasEventListener("dispose",E)===!1&&e.addEventListener("dispose",E),I.update(e.instanceMatrix,Q.ARRAY_BUFFER),e.instanceColor!==null&&I.update(e.instanceColor,Q.ARRAY_BUFFER)),n}function i(){C=new WeakMap}function E(e){const t=e.target;t.removeEventListener("dispose",E),I.remove(t.instanceMatrix),t.instanceColor!==null&&I.remove(t.instanceColor)}return{update:B,dispose:i}}const ik=new sg,Ek=new ls,ok=new Gs,ek=new He,oG=[],eG=[],tG=new Float32Array(16),aG=new Float32Array(9),sG=new Float32Array(4);function so(Q,A,I){const g=Q[0];if(g<=0||g>0)return Q;const C=A*I;let B=oG[C];if(B===void 0&&(B=new Float32Array(C),oG[C]=B),A!==0){g.toArray(B,0);for(let i=1,E=0;i!==A;++i)E+=I,Q[i].toArray(B,E)}return B}function Yg(Q,A){if(Q.length!==A.length)return!1;for(let I=0,g=Q.length;I<g;I++)if(Q[I]!==A[I])return!1;return!0}function Hg(Q,A){for(let I=0,g=A.length;I<g;I++)Q[I]=A[I]}function ks(Q,A){let I=eG[A];I===void 0&&(I=new Int32Array(A),eG[A]=I);for(let g=0;g!==A;++g)I[g]=Q.allocateTextureUnit();return I}function Lu(Q,A){const I=this.cache;I[0]!==A&&(Q.uniform1f(this.addr,A),I[0]=A)}function Yu(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(Q.uniform2f(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(Yg(I,A))return;Q.uniform2fv(this.addr,A),Hg(I,A)}}function Hu(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(Q.uniform3f(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else if(A.r!==void 0)(I[0]!==A.r||I[1]!==A.g||I[2]!==A.b)&&(Q.uniform3f(this.addr,A.r,A.g,A.b),I[0]=A.r,I[1]=A.g,I[2]=A.b);else{if(Yg(I,A))return;Q.uniform3fv(this.addr,A),Hg(I,A)}}function mu(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(Q.uniform4f(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(Yg(I,A))return;Q.uniform4fv(this.addr,A),Hg(I,A)}}function bu(Q,A){const I=this.cache,g=A.elements;if(g===void 0){if(Yg(I,A))return;Q.uniformMatrix2fv(this.addr,!1,A),Hg(I,A)}else{if(Yg(I,g))return;sG.set(g),Q.uniformMatrix2fv(this.addr,!1,sG),Hg(I,g)}}function Tu(Q,A){const I=this.cache,g=A.elements;if(g===void 0){if(Yg(I,A))return;Q.uniformMatrix3fv(this.addr,!1,A),Hg(I,A)}else{if(Yg(I,g))return;aG.set(g),Q.uniformMatrix3fv(this.addr,!1,aG),Hg(I,g)}}function xu(Q,A){const I=this.cache,g=A.elements;if(g===void 0){if(Yg(I,A))return;Q.uniformMatrix4fv(this.addr,!1,A),Hg(I,A)}else{if(Yg(I,g))return;tG.set(g),Q.uniformMatrix4fv(this.addr,!1,tG),Hg(I,g)}}function Ou(Q,A){const I=this.cache;I[0]!==A&&(Q.uniform1i(this.addr,A),I[0]=A)}function vu(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(Q.uniform2i(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(Yg(I,A))return;Q.uniform2iv(this.addr,A),Hg(I,A)}}function Pu(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(Q.uniform3i(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else{if(Yg(I,A))return;Q.uniform3iv(this.addr,A),Hg(I,A)}}function Zu(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(Q.uniform4i(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(Yg(I,A))return;Q.uniform4iv(this.addr,A),Hg(I,A)}}function Wu(Q,A){const I=this.cache;I[0]!==A&&(Q.uniform1ui(this.addr,A),I[0]=A)}function _u(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(Q.uniform2ui(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(Yg(I,A))return;Q.uniform2uiv(this.addr,A),Hg(I,A)}}function ju(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(Q.uniform3ui(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else{if(Yg(I,A))return;Q.uniform3uiv(this.addr,A),Hg(I,A)}}function Vu(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(Q.uniform4ui(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(Yg(I,A))return;Q.uniform4uiv(this.addr,A),Hg(I,A)}}function Xu(Q,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(Q.uniform1i(this.addr,C),g[0]=C),I.setTexture2D(A||ik,C)}function zu(Q,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(Q.uniform1i(this.addr,C),g[0]=C),I.setTexture3D(A||ok,C)}function $u(Q,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(Q.uniform1i(this.addr,C),g[0]=C),I.setTextureCube(A||ek,C)}function AL(Q,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(Q.uniform1i(this.addr,C),g[0]=C),I.setTexture2DArray(A||Ek,C)}function IL(Q){switch(Q){case 5126:return Lu;case 35664:return Yu;case 35665:return Hu;case 35666:return mu;case 35674:return bu;case 35675:return Tu;case 35676:return xu;case 5124:case 35670:return Ou;case 35667:case 35671:return vu;case 35668:case 35672:return Pu;case 35669:case 35673:return Zu;case 5125:return Wu;case 36294:return _u;case 36295:return ju;case 36296:return Vu;case 35678:case 36198:case 36298:case 36306:case 35682:return Xu;case 35679:case 36299:case 36307:return zu;case 35680:case 36300:case 36308:case 36293:return $u;case 36289:case 36303:case 36311:case 36292:return AL}}function gL(Q,A){Q.uniform1fv(this.addr,A)}function CL(Q,A){const I=so(A,this.size,2);Q.uniform2fv(this.addr,I)}function BL(Q,A){const I=so(A,this.size,3);Q.uniform3fv(this.addr,I)}function QL(Q,A){const I=so(A,this.size,4);Q.uniform4fv(this.addr,I)}function iL(Q,A){const I=so(A,this.size,4);Q.uniformMatrix2fv(this.addr,!1,I)}function EL(Q,A){const I=so(A,this.size,9);Q.uniformMatrix3fv(this.addr,!1,I)}function oL(Q,A){const I=so(A,this.size,16);Q.uniformMatrix4fv(this.addr,!1,I)}function eL(Q,A){Q.uniform1iv(this.addr,A)}function tL(Q,A){Q.uniform2iv(this.addr,A)}function aL(Q,A){Q.uniform3iv(this.addr,A)}function sL(Q,A){Q.uniform4iv(this.addr,A)}function nL(Q,A){Q.uniform1uiv(this.addr,A)}function DL(Q,A){Q.uniform2uiv(this.addr,A)}function rL(Q,A){Q.uniform3uiv(this.addr,A)}function hL(Q,A){Q.uniform4uiv(this.addr,A)}function cL(Q,A,I){const g=this.cache,C=A.length,B=ks(I,C);Yg(g,B)||(Q.uniform1iv(this.addr,B),Hg(g,B));for(let i=0;i!==C;++i)I.setTexture2D(A[i]||ik,B[i])}function wL(Q,A,I){const g=this.cache,C=A.length,B=ks(I,C);Yg(g,B)||(Q.uniform1iv(this.addr,B),Hg(g,B));for(let i=0;i!==C;++i)I.setTexture3D(A[i]||ok,B[i])}function lL(Q,A,I){const g=this.cache,C=A.length,B=ks(I,C);Yg(g,B)||(Q.uniform1iv(this.addr,B),Hg(g,B));for(let i=0;i!==C;++i)I.setTextureCube(A[i]||ek,B[i])}function GL(Q,A,I){const g=this.cache,C=A.length,B=ks(I,C);Yg(g,B)||(Q.uniform1iv(this.addr,B),Hg(g,B));for(let i=0;i!==C;++i)I.setTexture2DArray(A[i]||Ek,B[i])}function SL(Q){switch(Q){case 5126:return gL;case 35664:return CL;case 35665:return BL;case 35666:return QL;case 35674:return iL;case 35675:return EL;case 35676:return oL;case 5124:case 35670:return eL;case 35667:case 35671:return tL;case 35668:case 35672:return aL;case 35669:case 35673:return sL;case 5125:return nL;case 36294:return DL;case 36295:return rL;case 36296:return hL;case 35678:case 36198:case 36298:case 36306:case 35682:return cL;case 35679:case 36299:case 36307:return wL;case 35680:case 36300:case 36308:case 36293:return lL;case 36289:case 36303:case 36311:case 36292:return GL}}class yL{constructor(A,I,g){this.id=A,this.addr=g,this.cache=[],this.setValue=IL(I.type)}}class kL{constructor(A,I,g){this.id=A,this.addr=g,this.cache=[],this.size=I.size,this.setValue=SL(I.type)}}class ML{constructor(A){this.id=A,this.seq=[],this.map={}}setValue(A,I,g){const C=this.seq;for(let B=0,i=C.length;B!==i;++B){const E=C[B];E.setValue(A,I[E.id],g)}}}const kD=/(\w+)(\])?(\[|\.)?/g;function nG(Q,A){Q.seq.push(A),Q.map[A.id]=A}function UL(Q,A,I){const g=Q.name,C=g.length;for(kD.lastIndex=0;;){const B=kD.exec(g),i=kD.lastIndex;let E=B[1];const e=B[2]==="]",t=B[3];if(e&&(E=E|0),t===void 0||t==="["&&i+2===C){nG(I,t===void 0?new yL(E,Q,A):new kL(E,Q,A));break}else{let n=I.map[E];n===void 0&&(n=new ML(E),nG(I,n)),I=n}}}class Ta{constructor(A,I){this.seq=[],this.map={};const g=A.getProgramParameter(I,A.ACTIVE_UNIFORMS);for(let C=0;C<g;++C){const B=A.getActiveUniform(I,C),i=A.getUniformLocation(I,B.name);UL(B,i,this)}}setValue(A,I,g,C){const B=this.map[I];B!==void 0&&B.setValue(A,g,C)}setOptional(A,I,g){const C=I[g];C!==void 0&&this.setValue(A,g,C)}static upload(A,I,g,C){for(let B=0,i=I.length;B!==i;++B){const E=I[B],e=g[E.id];e.needsUpdate!==!1&&E.setValue(A,e.value,C)}}static seqWithValue(A,I){const g=[];for(let C=0,B=A.length;C!==B;++C){const i=A[C];i.id in I&&g.push(i)}return g}}function DG(Q,A,I){const g=Q.createShader(A);return Q.shaderSource(g,I),Q.compileShader(g),g}let NL=0;function KL(Q,A){const I=Q.split(`
`),g=[],C=Math.max(A-6,0),B=Math.min(A+6,I.length);for(let i=C;i<B;i++){const E=i+1;g.push(`${E===A?">":" "} ${E}: ${I[i]}`)}return g.join(`
`)}function FL(Q){switch(Q){case CB:return["Linear","( value )"];case QI:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",Q),["Linear","( value )"]}}function rG(Q,A,I){const g=Q.getShaderParameter(A,Q.COMPILE_STATUS),C=Q.getShaderInfoLog(A).trim();if(g&&C==="")return"";const B=/ERROR: 0:(\d+)/.exec(C);if(B){const i=parseInt(B[1]);return I.toUpperCase()+`

`+C+`

`+KL(Q.getShaderSource(A),i)}else return C}function RL(Q,A){const I=FL(A);return"vec4 "+Q+"( vec4 value ) { return LinearTo"+I[0]+I[1]+"; }"}function JL(Q,A){let I;switch(A){case Uy:I="Linear";break;case Ny:I="Reinhard";break;case Ky:I="OptimizedCineon";break;case ih:I="ACESFilmic";break;case Fy:I="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",A),I="Linear"}return"vec3 "+Q+"( vec3 color ) { return "+I+"ToneMapping( color ); }"}function dL(Q){return[Q.extensionDerivatives||Q.envMapCubeUVHeight||Q.bumpMap||Q.normalMapTangentSpace||Q.clearcoatNormalMap||Q.flatShading||Q.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(Q.extensionFragDepth||Q.logarithmicDepthBuffer)&&Q.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",Q.extensionDrawBuffers&&Q.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(Q.extensionShaderTextureLOD||Q.envMap||Q.transmission)&&Q.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ge).join(`
`)}function pL(Q){const A=[];for(const I in Q){const g=Q[I];g!==!1&&A.push("#define "+I+" "+g)}return A.join(`
`)}function qL(Q,A){const I={},g=Q.getProgramParameter(A,Q.ACTIVE_ATTRIBUTES);for(let C=0;C<g;C++){const B=Q.getActiveAttrib(A,C),i=B.name;let E=1;B.type===Q.FLOAT_MAT2&&(E=2),B.type===Q.FLOAT_MAT3&&(E=3),B.type===Q.FLOAT_MAT4&&(E=4),I[i]={type:B.type,location:Q.getAttribLocation(A,i),locationSize:E}}return I}function ge(Q){return Q!==""}function hG(Q,A){const I=A.numSpotLightShadows+A.numSpotLightMaps-A.numSpotLightShadowsWithMaps;return Q.replace(/NUM_DIR_LIGHTS/g,A.numDirLights).replace(/NUM_SPOT_LIGHTS/g,A.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,A.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,I).replace(/NUM_RECT_AREA_LIGHTS/g,A.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,A.numPointLights).replace(/NUM_HEMI_LIGHTS/g,A.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,A.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,A.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,A.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,A.numPointLightShadows)}function cG(Q,A){return Q.replace(/NUM_CLIPPING_PLANES/g,A.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,A.numClippingPlanes-A.numClipIntersection)}const fL=/^[ \t]*#include +<([\w\d./]+)>/gm;function dr(Q){return Q.replace(fL,uL)}function uL(Q,A){const I=yI[A];if(I===void 0)throw new Error("Can not resolve #include <"+A+">");return dr(I)}const LL=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wG(Q){return Q.replace(LL,YL)}function YL(Q,A,I,g){let C="";for(let B=parseInt(A);B<parseInt(I);B++)C+=g.replace(/\[\s*i\s*\]/g,"[ "+B+" ]").replace(/UNROLLED_LOOP_INDEX/g,B);return C}function lG(Q){let A="precision "+Q.precision+` float;
precision `+Q.precision+" int;";return Q.precision==="highp"?A+=`
#define HIGH_PRECISION`:Q.precision==="mediump"?A+=`
#define MEDIUM_PRECISION`:Q.precision==="lowp"&&(A+=`
#define LOW_PRECISION`),A}function HL(Q){let A="SHADOWMAP_TYPE_BASIC";return Q.shadowMapType===Ch?A="SHADOWMAP_TYPE_PCF":Q.shadowMapType===rs?A="SHADOWMAP_TYPE_PCF_SOFT":Q.shadowMapType===qB&&(A="SHADOWMAP_TYPE_VSM"),A}function mL(Q){let A="ENVMAP_TYPE_CUBE";if(Q.envMap)switch(Q.envMapMode){case WQ:case _Q:A="ENVMAP_TYPE_CUBE";break;case to:A="ENVMAP_TYPE_CUBE_UV";break}return A}function bL(Q){let A="ENVMAP_MODE_REFLECTION";if(Q.envMap)switch(Q.envMapMode){case _Q:A="ENVMAP_MODE_REFRACTION";break}return A}function TL(Q){let A="ENVMAP_BLENDING_NONE";if(Q.envMap)switch(Q.combine){case ue:A="ENVMAP_BLENDING_MULTIPLY";break;case ky:A="ENVMAP_BLENDING_MIX";break;case My:A="ENVMAP_BLENDING_ADD";break}return A}function xL(Q){const A=Q.envMapCubeUVHeight;if(A===null)return null;const I=Math.log2(A)-2,g=1/A;return{texelWidth:1/(3*Math.max(Math.pow(2,I),7*16)),texelHeight:g,maxMip:I}}function OL(Q,A,I,g){const C=Q.getContext(),B=I.defines;let i=I.vertexShader,E=I.fragmentShader;const e=HL(I),t=mL(I),s=bL(I),n=TL(I),D=xL(I),r=I.isWebGL2?"":dL(I),w=pL(B),G=C.createProgram();let l,c,k=I.glslVersion?"#version "+I.glslVersion+`
`:"";I.isRawShaderMaterial?(l=[w].filter(ge).join(`
`),l.length>0&&(l+=`
`),c=[r,w].filter(ge).join(`
`),c.length>0&&(c+=`
`)):(l=[lG(I),"#define SHADER_NAME "+I.shaderName,w,I.instancing?"#define USE_INSTANCING":"",I.instancingColor?"#define USE_INSTANCING_COLOR":"",I.useFog&&I.fog?"#define USE_FOG":"",I.useFog&&I.fogExp2?"#define FOG_EXP2":"",I.map?"#define USE_MAP":"",I.envMap?"#define USE_ENVMAP":"",I.envMap?"#define "+s:"",I.lightMap?"#define USE_LIGHTMAP":"",I.aoMap?"#define USE_AOMAP":"",I.bumpMap?"#define USE_BUMPMAP":"",I.normalMap?"#define USE_NORMALMAP":"",I.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",I.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",I.displacementMap?"#define USE_DISPLACEMENTMAP":"",I.emissiveMap?"#define USE_EMISSIVEMAP":"",I.clearcoatMap?"#define USE_CLEARCOATMAP":"",I.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",I.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",I.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",I.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",I.specularMap?"#define USE_SPECULARMAP":"",I.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",I.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",I.roughnessMap?"#define USE_ROUGHNESSMAP":"",I.metalnessMap?"#define USE_METALNESSMAP":"",I.alphaMap?"#define USE_ALPHAMAP":"",I.transmission?"#define USE_TRANSMISSION":"",I.transmissionMap?"#define USE_TRANSMISSIONMAP":"",I.thicknessMap?"#define USE_THICKNESSMAP":"",I.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",I.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",I.mapUv?"#define MAP_UV "+I.mapUv:"",I.alphaMapUv?"#define ALPHAMAP_UV "+I.alphaMapUv:"",I.lightMapUv?"#define LIGHTMAP_UV "+I.lightMapUv:"",I.aoMapUv?"#define AOMAP_UV "+I.aoMapUv:"",I.emissiveMapUv?"#define EMISSIVEMAP_UV "+I.emissiveMapUv:"",I.bumpMapUv?"#define BUMPMAP_UV "+I.bumpMapUv:"",I.normalMapUv?"#define NORMALMAP_UV "+I.normalMapUv:"",I.displacementMapUv?"#define DISPLACEMENTMAP_UV "+I.displacementMapUv:"",I.metalnessMapUv?"#define METALNESSMAP_UV "+I.metalnessMapUv:"",I.roughnessMapUv?"#define ROUGHNESSMAP_UV "+I.roughnessMapUv:"",I.clearcoatMapUv?"#define CLEARCOATMAP_UV "+I.clearcoatMapUv:"",I.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+I.clearcoatNormalMapUv:"",I.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+I.clearcoatRoughnessMapUv:"",I.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+I.iridescenceMapUv:"",I.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+I.iridescenceThicknessMapUv:"",I.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+I.sheenColorMapUv:"",I.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+I.sheenRoughnessMapUv:"",I.specularMapUv?"#define SPECULARMAP_UV "+I.specularMapUv:"",I.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+I.specularColorMapUv:"",I.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+I.specularIntensityMapUv:"",I.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+I.transmissionMapUv:"",I.thicknessMapUv?"#define THICKNESSMAP_UV "+I.thicknessMapUv:"",I.vertexTangents?"#define USE_TANGENT":"",I.vertexColors?"#define USE_COLOR":"",I.vertexAlphas?"#define USE_COLOR_ALPHA":"",I.vertexUv1s?"#define USE_UV1":"",I.vertexUv2s?"#define USE_UV2":"",I.vertexUv3s?"#define USE_UV3":"",I.pointsUvs?"#define USE_POINTS_UV":"",I.flatShading?"#define FLAT_SHADED":"",I.skinning?"#define USE_SKINNING":"",I.morphTargets?"#define USE_MORPHTARGETS":"",I.morphNormals&&I.flatShading===!1?"#define USE_MORPHNORMALS":"",I.morphColors&&I.isWebGL2?"#define USE_MORPHCOLORS":"",I.morphTargetsCount>0&&I.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",I.morphTargetsCount>0&&I.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+I.morphTextureStride:"",I.morphTargetsCount>0&&I.isWebGL2?"#define MORPHTARGETS_COUNT "+I.morphTargetsCount:"",I.doubleSided?"#define DOUBLE_SIDED":"",I.flipSided?"#define FLIP_SIDED":"",I.shadowMapEnabled?"#define USE_SHADOWMAP":"",I.shadowMapEnabled?"#define "+e:"",I.sizeAttenuation?"#define USE_SIZEATTENUATION":"",I.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",I.logarithmicDepthBuffer&&I.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ge).join(`
`),c=[r,lG(I),"#define SHADER_NAME "+I.shaderName,w,I.useFog&&I.fog?"#define USE_FOG":"",I.useFog&&I.fogExp2?"#define FOG_EXP2":"",I.map?"#define USE_MAP":"",I.matcap?"#define USE_MATCAP":"",I.envMap?"#define USE_ENVMAP":"",I.envMap?"#define "+t:"",I.envMap?"#define "+s:"",I.envMap?"#define "+n:"",D?"#define CUBEUV_TEXEL_WIDTH "+D.texelWidth:"",D?"#define CUBEUV_TEXEL_HEIGHT "+D.texelHeight:"",D?"#define CUBEUV_MAX_MIP "+D.maxMip+".0":"",I.lightMap?"#define USE_LIGHTMAP":"",I.aoMap?"#define USE_AOMAP":"",I.bumpMap?"#define USE_BUMPMAP":"",I.normalMap?"#define USE_NORMALMAP":"",I.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",I.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",I.emissiveMap?"#define USE_EMISSIVEMAP":"",I.clearcoat?"#define USE_CLEARCOAT":"",I.clearcoatMap?"#define USE_CLEARCOATMAP":"",I.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",I.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",I.iridescence?"#define USE_IRIDESCENCE":"",I.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",I.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",I.specularMap?"#define USE_SPECULARMAP":"",I.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",I.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",I.roughnessMap?"#define USE_ROUGHNESSMAP":"",I.metalnessMap?"#define USE_METALNESSMAP":"",I.alphaMap?"#define USE_ALPHAMAP":"",I.alphaTest?"#define USE_ALPHATEST":"",I.sheen?"#define USE_SHEEN":"",I.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",I.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",I.transmission?"#define USE_TRANSMISSION":"",I.transmissionMap?"#define USE_TRANSMISSIONMAP":"",I.thicknessMap?"#define USE_THICKNESSMAP":"",I.vertexTangents?"#define USE_TANGENT":"",I.vertexColors||I.instancingColor?"#define USE_COLOR":"",I.vertexAlphas?"#define USE_COLOR_ALPHA":"",I.vertexUv1s?"#define USE_UV1":"",I.vertexUv2s?"#define USE_UV2":"",I.vertexUv3s?"#define USE_UV3":"",I.pointsUvs?"#define USE_POINTS_UV":"",I.gradientMap?"#define USE_GRADIENTMAP":"",I.flatShading?"#define FLAT_SHADED":"",I.doubleSided?"#define DOUBLE_SIDED":"",I.flipSided?"#define FLIP_SIDED":"",I.shadowMapEnabled?"#define USE_SHADOWMAP":"",I.shadowMapEnabled?"#define "+e:"",I.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",I.useLegacyLights?"#define LEGACY_LIGHTS":"",I.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",I.logarithmicDepthBuffer&&I.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",I.toneMapping!==HB?"#define TONE_MAPPING":"",I.toneMapping!==HB?yI.tonemapping_pars_fragment:"",I.toneMapping!==HB?JL("toneMapping",I.toneMapping):"",I.dithering?"#define DITHERING":"",I.opaque?"#define OPAQUE":"",yI.encodings_pars_fragment,RL("linearToOutputTexel",I.outputColorSpace),I.useDepthPacking?"#define DEPTH_PACKING "+I.depthPacking:"",`
`].filter(ge).join(`
`)),i=dr(i),i=hG(i,I),i=cG(i,I),E=dr(E),E=hG(E,I),E=cG(E,I),i=wG(i),E=wG(E),I.isWebGL2&&I.isRawShaderMaterial!==!0&&(k=`#version 300 es
`,l=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+l,c=["#define varying in",I.glslVersion===Fr?"":"layout(location = 0) out highp vec4 pc_fragColor;",I.glslVersion===Fr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);const y=k+l+i,M=k+c+E,N=DG(C,C.VERTEX_SHADER,y),R=DG(C,C.FRAGMENT_SHADER,M);if(C.attachShader(G,N),C.attachShader(G,R),I.index0AttributeName!==void 0?C.bindAttribLocation(G,0,I.index0AttributeName):I.morphTargets===!0&&C.bindAttribLocation(G,0,"position"),C.linkProgram(G),Q.debug.checkShaderErrors){const F=C.getProgramInfoLog(G).trim(),u=C.getShaderInfoLog(N).trim(),W=C.getShaderInfoLog(R).trim();let $=!0,H=!0;if(C.getProgramParameter(G,C.LINK_STATUS)===!1)if($=!1,typeof Q.debug.onShaderError=="function")Q.debug.onShaderError(C,G,N,R);else{const v=rG(C,N,"vertex"),IA=rG(C,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+C.getError()+" - VALIDATE_STATUS "+C.getProgramParameter(G,C.VALIDATE_STATUS)+`

Program Info Log: `+F+`
`+v+`
`+IA)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(u===""||W==="")&&(H=!1);H&&(this.diagnostics={runnable:$,programLog:F,vertexShader:{log:u,prefix:l},fragmentShader:{log:W,prefix:c}})}C.deleteShader(N),C.deleteShader(R);let d;this.getUniforms=function(){return d===void 0&&(d=new Ta(C,G)),d};let L;return this.getAttributes=function(){return L===void 0&&(L=qL(C,G)),L},this.destroy=function(){g.releaseStatesOfProgram(this),C.deleteProgram(G),this.program=void 0},this.name=I.shaderName,this.id=NL++,this.cacheKey=A,this.usedTimes=1,this.program=G,this.vertexShader=N,this.fragmentShader=R,this}let vL=0;class PL{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(A){const I=A.vertexShader,g=A.fragmentShader,C=this._getShaderStage(I),B=this._getShaderStage(g),i=this._getShaderCacheForMaterial(A);return i.has(C)===!1&&(i.add(C),C.usedTimes++),i.has(B)===!1&&(i.add(B),B.usedTimes++),this}remove(A){const I=this.materialCache.get(A);for(const g of I)g.usedTimes--,g.usedTimes===0&&this.shaderCache.delete(g.code);return this.materialCache.delete(A),this}getVertexShaderID(A){return this._getShaderStage(A.vertexShader).id}getFragmentShaderID(A){return this._getShaderStage(A.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(A){const I=this.materialCache;let g=I.get(A);return g===void 0&&(g=new Set,I.set(A,g)),g}_getShaderStage(A){const I=this.shaderCache;let g=I.get(A);return g===void 0&&(g=new ZL(A),I.set(A,g)),g}}class ZL{constructor(A){this.id=vL++,this.code=A,this.usedTimes=0}}function WL(Q,A,I,g,C,B,i){const E=new Ss,e=new PL,t=[],s=C.isWebGL2,n=C.logarithmicDepthBuffer,D=C.vertexTextures;let r=C.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function G(F){return F===1?"uv1":F===2?"uv2":F===3?"uv3":"uv"}function l(F,u,W,$,H){const v=$.fog,IA=H.geometry,oA=F.isMeshStandardMaterial?$.environment:null,gA=(F.isMeshStandardMaterial?I:A).get(F.envMap||oA),iA=gA&&gA.mapping===to?gA.image.height:null,MA=w[F.type];F.precision!==null&&(r=C.getMaxPrecision(F.precision),r!==F.precision&&console.warn("THREE.WebGLProgram.getParameters:",F.precision,"not supported, using",r,"instead."));const lA=IA.morphAttributes.position||IA.morphAttributes.normal||IA.morphAttributes.color,mA=lA!==void 0?lA.length:0;let FA=0;IA.morphAttributes.position!==void 0&&(FA=1),IA.morphAttributes.normal!==void 0&&(FA=2),IA.morphAttributes.color!==void 0&&(FA=3);let EA,GA,RA,qA;if(MA){const _I=wB[MA];EA=_I.vertexShader,GA=_I.fragmentShader}else EA=F.vertexShader,GA=F.fragmentShader,e.update(F),RA=e.getVertexShaderID(F),qA=e.getFragmentShaderID(F);const P=Q.getRenderTarget(),AI=H.isInstancedMesh===!0,II=!!F.map,KA=!!F.matcap,vA=!!gA,SA=!!F.aoMap,sA=!!F.lightMap,hA=!!F.bumpMap,YA=!!F.normalMap,JA=!!F.displacementMap,WA=!!F.emissiveMap,gI=!!F.metalnessMap,$A=!!F.roughnessMap,tI=F.clearcoat>0,nI=F.iridescence>0,m=F.sheen>0,q=F.transmission>0,QA=tI&&!!F.clearcoatMap,yA=tI&&!!F.clearcoatNormalMap,NA=tI&&!!F.clearcoatRoughnessMap,dA=nI&&!!F.iridescenceMap,T=nI&&!!F.iridescenceThicknessMap,DA=m&&!!F.sheenColorMap,CA=m&&!!F.sheenRoughnessMap,pA=!!F.specularMap,xA=!!F.specularColorMap,jA=!!F.specularIntensityMap,HA=q&&!!F.transmissionMap,ZA=q&&!!F.thicknessMap,aI=!!F.gradientMap,cI=!!F.alphaMap,ig=F.alphaTest>0,Z=!!F.extensions,eA=!!IA.attributes.uv1,UA=!!IA.attributes.uv2,TA=!!IA.attributes.uv3;return{isWebGL2:s,shaderID:MA,shaderName:F.type,vertexShader:EA,fragmentShader:GA,defines:F.defines,customVertexShaderID:RA,customFragmentShaderID:qA,isRawShaderMaterial:F.isRawShaderMaterial===!0,glslVersion:F.glslVersion,precision:r,instancing:AI,instancingColor:AI&&H.instanceColor!==null,supportsVertexTextures:D,outputColorSpace:P===null?Q.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:CB,map:II,matcap:KA,envMap:vA,envMapMode:vA&&gA.mapping,envMapCubeUVHeight:iA,aoMap:SA,lightMap:sA,bumpMap:hA,normalMap:YA,displacementMap:D&&JA,emissiveMap:WA,normalMapObjectSpace:YA&&F.normalMapType===Wy,normalMapTangentSpace:YA&&F.normalMapType===gi,metalnessMap:gI,roughnessMap:$A,clearcoat:tI,clearcoatMap:QA,clearcoatNormalMap:yA,clearcoatRoughnessMap:NA,iridescence:nI,iridescenceMap:dA,iridescenceThicknessMap:T,sheen:m,sheenColorMap:DA,sheenRoughnessMap:CA,specularMap:pA,specularColorMap:xA,specularIntensityMap:jA,transmission:q,transmissionMap:HA,thicknessMap:ZA,gradientMap:aI,opaque:F.transparent===!1&&F.blending===fi,alphaMap:cI,alphaTest:ig,combine:F.combine,mapUv:II&&G(F.map.channel),aoMapUv:SA&&G(F.aoMap.channel),lightMapUv:sA&&G(F.lightMap.channel),bumpMapUv:hA&&G(F.bumpMap.channel),normalMapUv:YA&&G(F.normalMap.channel),displacementMapUv:JA&&G(F.displacementMap.channel),emissiveMapUv:WA&&G(F.emissiveMap.channel),metalnessMapUv:gI&&G(F.metalnessMap.channel),roughnessMapUv:$A&&G(F.roughnessMap.channel),clearcoatMapUv:QA&&G(F.clearcoatMap.channel),clearcoatNormalMapUv:yA&&G(F.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:NA&&G(F.clearcoatRoughnessMap.channel),iridescenceMapUv:dA&&G(F.iridescenceMap.channel),iridescenceThicknessMapUv:T&&G(F.iridescenceThicknessMap.channel),sheenColorMapUv:DA&&G(F.sheenColorMap.channel),sheenRoughnessMapUv:CA&&G(F.sheenRoughnessMap.channel),specularMapUv:pA&&G(F.specularMap.channel),specularColorMapUv:xA&&G(F.specularColorMap.channel),specularIntensityMapUv:jA&&G(F.specularIntensityMap.channel),transmissionMapUv:HA&&G(F.transmissionMap.channel),thicknessMapUv:ZA&&G(F.thicknessMap.channel),alphaMapUv:cI&&G(F.alphaMap.channel),vertexTangents:YA&&!!IA.attributes.tangent,vertexColors:F.vertexColors,vertexAlphas:F.vertexColors===!0&&!!IA.attributes.color&&IA.attributes.color.itemSize===4,vertexUv1s:eA,vertexUv2s:UA,vertexUv3s:TA,pointsUvs:H.isPoints===!0&&!!IA.attributes.uv&&(II||cI),fog:!!v,useFog:F.fog===!0,fogExp2:v&&v.isFogExp2,flatShading:F.flatShading===!0,sizeAttenuation:F.sizeAttenuation===!0,logarithmicDepthBuffer:n,skinning:H.isSkinnedMesh===!0,morphTargets:IA.morphAttributes.position!==void 0,morphNormals:IA.morphAttributes.normal!==void 0,morphColors:IA.morphAttributes.color!==void 0,morphTargetsCount:mA,morphTextureStride:FA,numDirLights:u.directional.length,numPointLights:u.point.length,numSpotLights:u.spot.length,numSpotLightMaps:u.spotLightMap.length,numRectAreaLights:u.rectArea.length,numHemiLights:u.hemi.length,numDirLightShadows:u.directionalShadowMap.length,numPointLightShadows:u.pointShadowMap.length,numSpotLightShadows:u.spotShadowMap.length,numSpotLightShadowsWithMaps:u.numSpotLightShadowsWithMaps,numClippingPlanes:i.numPlanes,numClipIntersection:i.numIntersection,dithering:F.dithering,shadowMapEnabled:Q.shadowMap.enabled&&W.length>0,shadowMapType:Q.shadowMap.type,toneMapping:F.toneMapped?Q.toneMapping:HB,useLegacyLights:Q.useLegacyLights,premultipliedAlpha:F.premultipliedAlpha,doubleSided:F.side===lB,flipSided:F.side===DC,useDepthPacking:F.depthPacking>=0,depthPacking:F.depthPacking||0,index0AttributeName:F.index0AttributeName,extensionDerivatives:Z&&F.extensions.derivatives===!0,extensionFragDepth:Z&&F.extensions.fragDepth===!0,extensionDrawBuffers:Z&&F.extensions.drawBuffers===!0,extensionShaderTextureLOD:Z&&F.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:s||g.has("EXT_frag_depth"),rendererExtensionDrawBuffers:s||g.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:s||g.has("EXT_shader_texture_lod"),customProgramCacheKey:F.customProgramCacheKey()}}function c(F){const u=[];if(F.shaderID?u.push(F.shaderID):(u.push(F.customVertexShaderID),u.push(F.customFragmentShaderID)),F.defines!==void 0)for(const W in F.defines)u.push(W),u.push(F.defines[W]);return F.isRawShaderMaterial===!1&&(k(u,F),y(u,F),u.push(Q.outputColorSpace)),u.push(F.customProgramCacheKey),u.join()}function k(F,u){F.push(u.precision),F.push(u.outputColorSpace),F.push(u.envMapMode),F.push(u.envMapCubeUVHeight),F.push(u.mapUv),F.push(u.alphaMapUv),F.push(u.lightMapUv),F.push(u.aoMapUv),F.push(u.bumpMapUv),F.push(u.normalMapUv),F.push(u.displacementMapUv),F.push(u.emissiveMapUv),F.push(u.metalnessMapUv),F.push(u.roughnessMapUv),F.push(u.clearcoatMapUv),F.push(u.clearcoatNormalMapUv),F.push(u.clearcoatRoughnessMapUv),F.push(u.iridescenceMapUv),F.push(u.iridescenceThicknessMapUv),F.push(u.sheenColorMapUv),F.push(u.sheenRoughnessMapUv),F.push(u.specularMapUv),F.push(u.specularColorMapUv),F.push(u.specularIntensityMapUv),F.push(u.transmissionMapUv),F.push(u.thicknessMapUv),F.push(u.combine),F.push(u.fogExp2),F.push(u.sizeAttenuation),F.push(u.morphTargetsCount),F.push(u.morphAttributeCount),F.push(u.numDirLights),F.push(u.numPointLights),F.push(u.numSpotLights),F.push(u.numSpotLightMaps),F.push(u.numHemiLights),F.push(u.numRectAreaLights),F.push(u.numDirLightShadows),F.push(u.numPointLightShadows),F.push(u.numSpotLightShadows),F.push(u.numSpotLightShadowsWithMaps),F.push(u.shadowMapType),F.push(u.toneMapping),F.push(u.numClippingPlanes),F.push(u.numClipIntersection),F.push(u.depthPacking)}function y(F,u){E.disableAll(),u.isWebGL2&&E.enable(0),u.supportsVertexTextures&&E.enable(1),u.instancing&&E.enable(2),u.instancingColor&&E.enable(3),u.matcap&&E.enable(4),u.envMap&&E.enable(5),u.normalMapObjectSpace&&E.enable(6),u.normalMapTangentSpace&&E.enable(7),u.clearcoat&&E.enable(8),u.iridescence&&E.enable(9),u.alphaTest&&E.enable(10),u.vertexColors&&E.enable(11),u.vertexAlphas&&E.enable(12),u.vertexUv1s&&E.enable(13),u.vertexUv2s&&E.enable(14),u.vertexUv3s&&E.enable(15),u.vertexTangents&&E.enable(16),F.push(E.mask),E.disableAll(),u.fog&&E.enable(0),u.useFog&&E.enable(1),u.flatShading&&E.enable(2),u.logarithmicDepthBuffer&&E.enable(3),u.skinning&&E.enable(4),u.morphTargets&&E.enable(5),u.morphNormals&&E.enable(6),u.morphColors&&E.enable(7),u.premultipliedAlpha&&E.enable(8),u.shadowMapEnabled&&E.enable(9),u.useLegacyLights&&E.enable(10),u.doubleSided&&E.enable(11),u.flipSided&&E.enable(12),u.useDepthPacking&&E.enable(13),u.dithering&&E.enable(14),u.transmission&&E.enable(15),u.sheen&&E.enable(16),u.opaque&&E.enable(17),u.pointsUvs&&E.enable(18),F.push(E.mask)}function M(F){const u=w[F.type];let W;if(u){const $=wB[u];W=gk.clone($.uniforms)}else W=F.uniforms;return W}function N(F,u){let W;for(let $=0,H=t.length;$<H;$++){const v=t[$];if(v.cacheKey===u){W=v,++W.usedTimes;break}}return W===void 0&&(W=new OL(Q,u,F,B),t.push(W)),W}function R(F){if(--F.usedTimes===0){const u=t.indexOf(F);t[u]=t[t.length-1],t.pop(),F.destroy()}}function d(F){e.remove(F)}function L(){e.dispose()}return{getParameters:l,getProgramCacheKey:c,getUniforms:M,acquireProgram:N,releaseProgram:R,releaseShaderCache:d,programs:t,dispose:L}}function _L(){let Q=new WeakMap;function A(B){let i=Q.get(B);return i===void 0&&(i={},Q.set(B,i)),i}function I(B){Q.delete(B)}function g(B,i,E){Q.get(B)[i]=E}function C(){Q=new WeakMap}return{get:A,remove:I,update:g,dispose:C}}function jL(Q,A){return Q.groupOrder!==A.groupOrder?Q.groupOrder-A.groupOrder:Q.renderOrder!==A.renderOrder?Q.renderOrder-A.renderOrder:Q.material.id!==A.material.id?Q.material.id-A.material.id:Q.z!==A.z?Q.z-A.z:Q.id-A.id}function GG(Q,A){return Q.groupOrder!==A.groupOrder?Q.groupOrder-A.groupOrder:Q.renderOrder!==A.renderOrder?Q.renderOrder-A.renderOrder:Q.z!==A.z?A.z-Q.z:Q.id-A.id}function SG(){const Q=[];let A=0;const I=[],g=[],C=[];function B(){A=0,I.length=0,g.length=0,C.length=0}function i(n,D,r,w,G,l){let c=Q[A];return c===void 0?(c={id:n.id,object:n,geometry:D,material:r,groupOrder:w,renderOrder:n.renderOrder,z:G,group:l},Q[A]=c):(c.id=n.id,c.object=n,c.geometry=D,c.material=r,c.groupOrder=w,c.renderOrder=n.renderOrder,c.z=G,c.group=l),A++,c}function E(n,D,r,w,G,l){const c=i(n,D,r,w,G,l);r.transmission>0?g.push(c):r.transparent===!0?C.push(c):I.push(c)}function e(n,D,r,w,G,l){const c=i(n,D,r,w,G,l);r.transmission>0?g.unshift(c):r.transparent===!0?C.unshift(c):I.unshift(c)}function t(n,D){I.length>1&&I.sort(n||jL),g.length>1&&g.sort(D||GG),C.length>1&&C.sort(D||GG)}function s(){for(let n=A,D=Q.length;n<D;n++){const r=Q[n];if(r.id===null)break;r.id=null,r.object=null,r.geometry=null,r.material=null,r.group=null}}return{opaque:I,transmissive:g,transparent:C,init:B,push:E,unshift:e,finish:s,sort:t}}function VL(){let Q=new WeakMap;function A(g,C){const B=Q.get(g);let i;return B===void 0?(i=new SG,Q.set(g,[i])):C>=B.length?(i=new SG,B.push(i)):i=B[C],i}function I(){Q=new WeakMap}return{get:A,dispose:I}}function XL(){const Q={};return{get:function(A){if(Q[A.id]!==void 0)return Q[A.id];let I;switch(A.type){case"DirectionalLight":I={direction:new f,color:new LA};break;case"SpotLight":I={position:new f,direction:new f,color:new LA,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":I={position:new f,color:new LA,distance:0,decay:0};break;case"HemisphereLight":I={direction:new f,skyColor:new LA,groundColor:new LA};break;case"RectAreaLight":I={color:new LA,position:new f,halfWidth:new f,halfHeight:new f};break}return Q[A.id]=I,I}}}function zL(){const Q={};return{get:function(A){if(Q[A.id]!==void 0)return Q[A.id];let I;switch(A.type){case"DirectionalLight":I={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rA};break;case"SpotLight":I={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rA};break;case"PointLight":I={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rA,shadowCameraNear:1,shadowCameraFar:1e3};break}return Q[A.id]=I,I}}}let $L=0;function AY(Q,A){return(A.castShadow?2:0)-(Q.castShadow?2:0)+(A.map?1:0)-(Q.map?1:0)}function IY(Q,A){const I=new XL,g=zL(),C={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let s=0;s<9;s++)C.probe.push(new f);const B=new f,i=new sI,E=new sI;function e(s,n){let D=0,r=0,w=0;for(let W=0;W<9;W++)C.probe[W].set(0,0,0);let G=0,l=0,c=0,k=0,y=0,M=0,N=0,R=0,d=0,L=0;s.sort(AY);const F=n===!0?Math.PI:1;for(let W=0,$=s.length;W<$;W++){const H=s[W],v=H.color,IA=H.intensity,oA=H.distance,gA=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)D+=v.r*IA*F,r+=v.g*IA*F,w+=v.b*IA*F;else if(H.isLightProbe)for(let iA=0;iA<9;iA++)C.probe[iA].addScaledVector(H.sh.coefficients[iA],IA);else if(H.isDirectionalLight){const iA=I.get(H);if(iA.color.copy(H.color).multiplyScalar(H.intensity*F),H.castShadow){const MA=H.shadow,lA=g.get(H);lA.shadowBias=MA.bias,lA.shadowNormalBias=MA.normalBias,lA.shadowRadius=MA.radius,lA.shadowMapSize=MA.mapSize,C.directionalShadow[G]=lA,C.directionalShadowMap[G]=gA,C.directionalShadowMatrix[G]=H.shadow.matrix,M++}C.directional[G]=iA,G++}else if(H.isSpotLight){const iA=I.get(H);iA.position.setFromMatrixPosition(H.matrixWorld),iA.color.copy(v).multiplyScalar(IA*F),iA.distance=oA,iA.coneCos=Math.cos(H.angle),iA.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),iA.decay=H.decay,C.spot[c]=iA;const MA=H.shadow;if(H.map&&(C.spotLightMap[d]=H.map,d++,MA.updateMatrices(H),H.castShadow&&L++),C.spotLightMatrix[c]=MA.matrix,H.castShadow){const lA=g.get(H);lA.shadowBias=MA.bias,lA.shadowNormalBias=MA.normalBias,lA.shadowRadius=MA.radius,lA.shadowMapSize=MA.mapSize,C.spotShadow[c]=lA,C.spotShadowMap[c]=gA,R++}c++}else if(H.isRectAreaLight){const iA=I.get(H);iA.color.copy(v).multiplyScalar(IA),iA.halfWidth.set(H.width*.5,0,0),iA.halfHeight.set(0,H.height*.5,0),C.rectArea[k]=iA,k++}else if(H.isPointLight){const iA=I.get(H);if(iA.color.copy(H.color).multiplyScalar(H.intensity*F),iA.distance=H.distance,iA.decay=H.decay,H.castShadow){const MA=H.shadow,lA=g.get(H);lA.shadowBias=MA.bias,lA.shadowNormalBias=MA.normalBias,lA.shadowRadius=MA.radius,lA.shadowMapSize=MA.mapSize,lA.shadowCameraNear=MA.camera.near,lA.shadowCameraFar=MA.camera.far,C.pointShadow[l]=lA,C.pointShadowMap[l]=gA,C.pointShadowMatrix[l]=H.shadow.matrix,N++}C.point[l]=iA,l++}else if(H.isHemisphereLight){const iA=I.get(H);iA.skyColor.copy(H.color).multiplyScalar(IA*F),iA.groundColor.copy(H.groundColor).multiplyScalar(IA*F),C.hemi[y]=iA,y++}}k>0&&(A.isWebGL2||Q.has("OES_texture_float_linear")===!0?(C.rectAreaLTC1=fA.LTC_FLOAT_1,C.rectAreaLTC2=fA.LTC_FLOAT_2):Q.has("OES_texture_half_float_linear")===!0?(C.rectAreaLTC1=fA.LTC_HALF_1,C.rectAreaLTC2=fA.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),C.ambient[0]=D,C.ambient[1]=r,C.ambient[2]=w;const u=C.hash;(u.directionalLength!==G||u.pointLength!==l||u.spotLength!==c||u.rectAreaLength!==k||u.hemiLength!==y||u.numDirectionalShadows!==M||u.numPointShadows!==N||u.numSpotShadows!==R||u.numSpotMaps!==d)&&(C.directional.length=G,C.spot.length=c,C.rectArea.length=k,C.point.length=l,C.hemi.length=y,C.directionalShadow.length=M,C.directionalShadowMap.length=M,C.pointShadow.length=N,C.pointShadowMap.length=N,C.spotShadow.length=R,C.spotShadowMap.length=R,C.directionalShadowMatrix.length=M,C.pointShadowMatrix.length=N,C.spotLightMatrix.length=R+d-L,C.spotLightMap.length=d,C.numSpotLightShadowsWithMaps=L,u.directionalLength=G,u.pointLength=l,u.spotLength=c,u.rectAreaLength=k,u.hemiLength=y,u.numDirectionalShadows=M,u.numPointShadows=N,u.numSpotShadows=R,u.numSpotMaps=d,C.version=$L++)}function t(s,n){let D=0,r=0,w=0,G=0,l=0;const c=n.matrixWorldInverse;for(let k=0,y=s.length;k<y;k++){const M=s[k];if(M.isDirectionalLight){const N=C.directional[D];N.direction.setFromMatrixPosition(M.matrixWorld),B.setFromMatrixPosition(M.target.matrixWorld),N.direction.sub(B),N.direction.transformDirection(c),D++}else if(M.isSpotLight){const N=C.spot[w];N.position.setFromMatrixPosition(M.matrixWorld),N.position.applyMatrix4(c),N.direction.setFromMatrixPosition(M.matrixWorld),B.setFromMatrixPosition(M.target.matrixWorld),N.direction.sub(B),N.direction.transformDirection(c),w++}else if(M.isRectAreaLight){const N=C.rectArea[G];N.position.setFromMatrixPosition(M.matrixWorld),N.position.applyMatrix4(c),E.identity(),i.copy(M.matrixWorld),i.premultiply(c),E.extractRotation(i),N.halfWidth.set(M.width*.5,0,0),N.halfHeight.set(0,M.height*.5,0),N.halfWidth.applyMatrix4(E),N.halfHeight.applyMatrix4(E),G++}else if(M.isPointLight){const N=C.point[r];N.position.setFromMatrixPosition(M.matrixWorld),N.position.applyMatrix4(c),r++}else if(M.isHemisphereLight){const N=C.hemi[l];N.direction.setFromMatrixPosition(M.matrixWorld),N.direction.transformDirection(c),l++}}}return{setup:e,setupView:t,state:C}}function yG(Q,A){const I=new IY(Q,A),g=[],C=[];function B(){g.length=0,C.length=0}function i(n){g.push(n)}function E(n){C.push(n)}function e(n){I.setup(g,n)}function t(n){I.setupView(g,n)}return{init:B,state:{lightsArray:g,shadowsArray:C,lights:I},setupLights:e,setupLightsView:t,pushLight:i,pushShadow:E}}function gY(Q,A){let I=new WeakMap;function g(B,i=0){const E=I.get(B);let e;return E===void 0?(e=new yG(Q,A),I.set(B,[e])):i>=E.length?(e=new yG(Q,A),E.push(e)):e=E[i],e}function C(){I=new WeakMap}return{get:g,dispose:C}}class ch extends Lg{constructor(A){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Py,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(A)}copy(A){return super.copy(A),this.depthPacking=A.depthPacking,this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this}}class wh extends Lg{constructor(A){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(A)}copy(A){return super.copy(A),this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this}}const CY=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,BY=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
`);this.workerSourceURL=URL.createObjectURL(new Blob([i]))}),this.decoderPending}_getWorker(A,I){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const C=new Worker(this.workerSourceURL);C._callbacks={},C._taskCosts={},C._taskLoad=0,C.postMessage({type:"init",decoderConfig:this.decoderConfig}),C.onmessage=function(B){const i=B.data;switch(i.type){case"decode":C._callbacks[i.id].resolve(i);break;case"error":C._callbacks[i.id].reject(i);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+i.type+'"')}},this.workerPool.push(C)}else this.workerPool.sort(function(C,B){return C._taskLoad>B._taskLoad?-1:1});const g=this.workerPool[this.workerPool.length-1];return g._taskCosts[A]=I,g._taskLoad+=I,g})}_releaseTask(A,I){A._taskLoad-=A._taskCosts[I],delete A._callbacks[I],delete A._taskCosts[I]}debug(){console.log("Task load: ",this.workerPool.map(A=>A._taskLoad))}dispose(){for(let A=0;A<this.workerPool.length;++A)this.workerPool[A].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function iT(){let Q,A;onmessage=function(i){const E=i.data;switch(E.type){case"init":Q=E.decoderConfig,A=new Promise(function(s){Q.onModuleLoaded=function(n){s({draco:n})},DracoDecoderModule(Q)});break;case"decode":const e=E.buffer,t=E.taskConfig;A.then(s=>{const n=s.draco,D=new n.Decoder;try{const r=I(n,D,new Int8Array(e),t),w=r.attributes.map(G=>G.array.buffer);r.index&&w.push(r.index.array.buffer),self.postMessage({type:"decode",id:E.id,geometry:r},w)}catch(r){console.error(r),self.postMessage({type:"error",id:E.id,error:r.message})}finally{n.destroy(D)}});break}};function I(i,E,e,t){const s=t.attributeIDs,n=t.attributeTypes;let D,r;const w=E.GetEncodedGeometryType(e);if(w===i.TRIANGULAR_MESH)D=new i.Mesh,r=E.DecodeArrayToMesh(e,e.byteLength,D);else if(w===i.POINT_CLOUD)D=new i.PointCloud,r=E.DecodeArrayToPointCloud(e,e.byteLength,D);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!r.ok()||D.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+r.error_msg());const G={index:null,attributes:[]};for(const l in s){const c=self[n[l]];let k,y;if(t.useUniqueIDs)y=s[l],k=E.GetAttributeByUniqueId(D,y);else{if(y=E.GetAttributeId(D,i[s[l]]),y===-1)continue;k=E.GetAttribute(D,y)}const M=C(i,E,D,l,c,k);l==="color"&&(M.vertexColorSpace=t.vertexColorSpace),G.attributes.push(M)}return w===i.TRIANGULAR_MESH&&(G.index=g(i,E,D)),i.destroy(D),G}function g(i,E,e){const s=e.num_faces()*3,n=s*4,D=i._malloc(n);E.GetTrianglesUInt32Array(e,n,D);const r=new Uint32Array(i.HEAPF32.buffer,D,s).slice();return i._free(D),{array:r,itemSize:1}}function C(i,E,e,t,s,n){const D=n.num_components(),w=e.num_points()*D,G=w*s.BYTES_PER_ELEMENT,l=B(i,s),c=i._malloc(G);E.GetAttributeDataArrayForAllPoints(e,n,l,G,c);const k=new s(i.HEAPF32.buffer,c,w).slice();return i._free(c),{name:t,array:k,itemSize:D}}function B(i,E){switch(E){case Float32Array:return i.DT_FLOAT32;case Int8Array:return i.DT_INT8;case Int16Array:return i.DT_INT16;case Int32Array:return i.DT_INT32;case Uint8Array:return i.DT_UINT8;case Uint16Array:return i.DT_UINT16;case Uint32Array:return i.DT_UINT32}}}function pS(Q,A){if(A===vy)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),Q;if(A===As||A===th){let I=Q.getIndex();if(I===null){const i=[],E=Q.getAttribute("position");if(E!==void 0){for(let e=0;e<E.count;e++)i.push(e);Q.setIndex(i),I=Q.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),Q}const g=I.count-2,C=[];if(A===As)for(let i=1;i<=g;i++)C.push(I.getX(0)),C.push(I.getX(i)),C.push(I.getX(i+1));else for(let i=0;i<g;i++)i%2===0?(C.push(I.getX(i)),C.push(I.getX(i+1)),C.push(I.getX(i+2))):(C.push(I.getX(i+2)),C.push(I.getX(i+1)),C.push(I.getX(i)));C.length/3!==g&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const B=Q.clone();return B.setIndex(C),B.clearGroups(),B}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",A),Q}class ET extends iC{constructor(A){super(A),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(I){return new sT(I)}),this.register(function(I){return new lT(I)}),this.register(function(I){return new GT(I)}),this.register(function(I){return new ST(I)}),this.register(function(I){return new DT(I)}),this.register(function(I){return new rT(I)}),this.register(function(I){return new hT(I)}),this.register(function(I){return new cT(I)}),this.register(function(I){return new aT(I)}),this.register(function(I){return new wT(I)}),this.register(function(I){return new nT(I)}),this.register(function(I){return new eT(I)}),this.register(function(I){return new yT(I)}),this.register(function(I){return new kT(I)})}load(A,I,g,C){const B=this;let i;this.resourcePath!==""?i=this.resourcePath:this.path!==""?i=this.path:i=Co.extractUrlBase(A),this.manager.itemStart(A);const E=function(t){C?C(t):console.error(t),B.manager.itemError(A),B.manager.itemEnd(A)},e=new CC(this.manager);e.setPath(this.path),e.setResponseType("arraybuffer"),e.setRequestHeader(this.requestHeader),e.setWithCredentials(this.withCredentials),e.load(A,function(t){try{B.parse(t,i,function(s){I(s),B.manager.itemEnd(A)},E)}catch(s){E(s)}},g,E)}setDRACOLoader(A){return this.dracoLoader=A,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(A){return this.ktx2Loader=A,this}setMeshoptDecoder(A){return this.meshoptDecoder=A,this}register(A){return this.pluginCallbacks.indexOf(A)===-1&&this.pluginCallbacks.push(A),this}unregister(A){return this.pluginCallbacks.indexOf(A)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(A),1),this}parse(A,I,g,C){let B;const i={},E={},e=new TextDecoder;if(typeof A=="string")B=JSON.parse(A);else if(A instanceof ArrayBuffer)if(e.decode(new Uint8Array(A,0,4))===PM){try{i[TI.KHR_BINARY_GLTF]=new MT(A)}catch(n){C&&C(n);return}B=JSON.parse(i[TI.KHR_BINARY_GLTF].content)}else B=JSON.parse(e.decode(A));else B=A;if(B.asset===void 0||B.asset.version[0]<2){C&&C(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const t=new YT(B,{path:I||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});t.fileLoader.setRequestHeader(this.requestHeader);for(let s=0;s<this.pluginCallbacks.length;s++){const n=this.pluginCallbacks[s](t);E[n.name]=n,i[n.name]=!0}if(B.extensionsUsed)for(let s=0;s<B.extensionsUsed.length;++s){const n=B.extensionsUsed[s],D=B.extensionsRequired||[];switch(n){case TI.KHR_MATERIALS_UNLIT:i[n]=new tT;break;case TI.KHR_DRACO_MESH_COMPRESSION:i[n]=new UT(B,this.dracoLoader);break;case TI.KHR_TEXTURE_TRANSFORM:i[n]=new NT;break;case TI.KHR_MESH_QUANTIZATION:i[n]=new KT;break;default:D.indexOf(n)>=0&&E[n]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+n+'".')}}t.setExtensions(i),t.setPlugins(E),t.parse(g,C)}parseAsync(A,I){const g=this;return new Promise(function(C,B){g.parse(A,I,C,B)})}}function oT(){let Q={};return{get:function(A){return Q[A]},add:function(A,I){Q[A]=I},remove:function(A){delete Q[A]},removeAll:function(){Q={}}}}const TI={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class eT{constructor(A){this.parser=A,this.name=TI.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const A=this.parser,I=this.parser.json.nodes||[];for(let g=0,C=I.length;g<C;g++){const B=I[g];B.extensions&&B.extensions[this.name]&&B.extensions[this.name].light!==void 0&&A._addNodeRef(this.cache,B.extensions[this.name].light)}}_loadLight(A){const I=this.parser,g="light:"+A;let C=I.cache.get(g);if(C)return C;const B=I.json,e=((B.extensions&&B.extensions[this.name]||{}).lights||[])[A];let t;const s=new LA(16777215);e.color!==void 0&&s.fromArray(e.color);const n=e.range!==void 0?e.range:0;switch(e.type){case"directional":t=new Th(s),t.target.position.set(0,0,-1),t.add(t.target);break;case"point":t=new bh(s),t.distance=n;break;case"spot":t=new mh(s),t.distance=n,e.spot=e.spot||{},e.spot.innerConeAngle=e.spot.innerConeAngle!==void 0?e.spot.innerConeAngle:0,e.spot.outerConeAngle=e.spot.outerConeAngle!==void 0?e.spot.outerConeAngle:Math.PI/4,t.angle=e.spot.outerConeAngle,t.penumbra=1-e.spot.innerConeAngle/e.spot.outerConeAngle,t.target.position.set(0,0,-1),t.add(t.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+e.type)}return t.position.set(0,0,0),t.decay=2,TQ(t,e),e.intensity!==void 0&&(t.intensity=e.intensity),t.name=I.createUniqueName(e.name||"light_"+A),C=Promise.resolve(t),I.cache.add(g,C),C}getDependency(A,I){if(A==="light")return this._loadLight(I)}createNodeAttachment(A){const I=this,g=this.parser,B=g.json.nodes[A],E=(B.extensions&&B.extensions[this.name]||{}).light;return E===void 0?null:this._loadLight(E).then(function(e){return g._getNodeRef(I.cache,E,e)})}}class tT{constructor(){this.name=TI.KHR_MATERIALS_UNLIT}getMaterialType(){return mC}extendParams(A,I,g){const C=[];A.color=new LA(1,1,1),A.opacity=1;const B=I.pbrMetallicRoughness;if(B){if(Array.isArray(B.baseColorFactor)){const i=B.baseColorFactor;A.color.fromArray(i),A.opacity=i[3]}B.baseColorTexture!==void 0&&C.push(g.assignTexture(A,"map",B.baseColorTexture,QI))}return Promise.all(C)}}class aT{constructor(A){this.parser=A,this.name=TI.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(A,I){const C=this.parser.json.materials[A];if(!C.extensions||!C.extensions[this.name])return Promise.resolve();const B=C.extensions[this.name].emissiveStrength;return B!==void 0&&(I.emissiveIntensity=B),Promise.resolve()}}class sT{constructor(A){this.parser=A,this.name=TI.KHR_MATERIALS_CLEARCOAT}getMaterialType(A){const g=this.parser.json.materials[A];return!g.extensions||!g.extensions[this.name]?null:yQ}extendMaterialParams(A,I){const g=this.parser,C=g.json.materials[A];if(!C.extensions||!C.extensions[this.name])return Promise.resolve();const B=[],i=C.extensions[this.name];if(i.clearcoatFactor!==void 0&&(I.clearcoat=i.clearcoatFactor),i.clearcoatTexture!==void 0&&B.push(g.assignTexture(I,"clearcoatMap",i.clearcoatTexture)),i.clearcoatRoughnessFactor!==void 0&&(I.clearcoatRoughness=i.clearcoatRoughnessFactor),i.clearcoatRoughnessTexture!==void 0&&B.push(g.assignTexture(I,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture)),i.clearcoatNormalTexture!==void 0&&(B.push(g.assignTexture(I,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0)){const E=i.clearcoatNormalTexture.scale;I.clearcoatNormalScale=new rA(E,E)}return Promise.all(B)}}class nT{constructor(A){this.parser=A,this.name=TI.KHR_MATERIALS_IRIDESCENCE}getMaterialType(A){const g=this.parser.json.materials[A];return!g.extensions||!g.extensions[this.name]?null:yQ}extendMaterialParams(A,I){const g=this.parser,C=g.json.materials[A];if(!C.extensions||!C.extensions[this.name])return Promise.resolve();const B=[],i=C.extensions[this.name];return i.iridescenceFactor!==void 0&&(I.iridescence=i.iridescenceFactor),i.iridescenceTexture!==void 0&&B.push(g.assignTexture(I,"iridescenceMap",i.iridescenceTexture)),i.iridescenceIor!==void 0&&(I.iridescenceIOR=i.iridescenceIor),I.iridescenceThicknessRange===void 0&&(I.iridescenceThicknessRange=[100,400]),i.iridescenceThicknessMinimum!==void 0&&(I.iridescenceThicknessRange[0]=i.iridescenceThicknessMinimum),i.iridescenceThicknessMaximum!==void 0&&(I.iridescenceThicknessRange[1]=i.iridescenceThicknessMaximum),i.iridescenceThicknessTexture!==void 0&&B.push(g.assignTexture(I,"iridescenceThicknessMap",i.iridescenceThicknessTexture)),Promise.all(B)}}class DT{constructor(A){this.parser=A,this.name=TI.KHR_MATERIALS_SHEEN}getMaterialType(A){const g=this.parser.json.materials[A];return!g.extensions||!g.extensions[this.name]?null:yQ}extendMaterialParams(A,I){const g=this.parser,C=g.json.materials[A];if(!C.extensions||!C.extensions[this.name])return Promise.resolve();const B=[];I.sheenColor=new LA(0,0,0),I.sheenRoughness=0,I.sheen=1;const i=C.extensions[this.name];return i.sheenColorFactor!==void 0&&I.sheenColor.fromArray(i.sheenColorFactor),i.sheenRoughnessFactor!==void 0&&(I.sheenRoughness=i.sheenRoughnessFactor),i.sheenColorTexture!==void 0&&B.push(g.assignTexture(I,"sheenColorMap",i.sheenColorTexture,QI)),i.sheenRoughnessTexture!==void 0&&B.push(g.assignTexture(I,"sheenRoughnessMap",i.sheenRoughnessTexture)),Promise.all(B)}}class rT{constructor(A){this.parser=A,this.name=TI.KHR_MATERIALS_TRANSMISSION}getMaterialType(A){const g=this.parser.json.materials[A];return!g.extensions||!g.extensions[this.name]?null:yQ}extendMaterialParams(A,I){const g=this.parser,C=g.json.materials[A];if(!C.extensions||!C.extensions[this.name])return Promise.resolve();const B=[],i=C.extensions[this.name];return i.transmissionFactor!==void 0&&(I.transmission=i.transmissionFactor),i.transmissionTexture!==void 0&&B.push(g.assignTexture(I,"transmissionMap",i.transmissionTexture)),Promise.all(B)}}class hT{constructor(A){this.parser=A,this.name=TI.KHR_MATERIALS_VOLUME}getMaterialType(A){const g=this.parser.json.materials[A];return!g.extensions||!g.extensions[this.name]?null:yQ}extendMaterialParams(A,I){const g=this.parser,C=g.json.materials[A];if(!C.extensions||!C.extensions[this.name])return Promise.resolve();const B=[],i=C.extensions[this.name];I.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0&&B.push(g.assignTexture(I,"thicknessMap",i.thicknessTexture)),I.attenuationDistance=i.attenuationDistance||1/0;const E=i.attenuationColor||[1,1,1];return I.attenuationColor=new LA(E[0],E[1],E[2]),Promise.all(B)}}class cT{constructor(A){this.parser=A,this.name=TI.KHR_MATERIALS_IOR}getMaterialType(A){const g=this.parser.json.materials[A];return!g.extensions||!g.extensions[this.name]?null:yQ}extendMaterialParams(A,I){const C=this.parser.json.materials[A];if(!C.extensions||!C.extensions[this.name])return Promise.resolve();const B=C.extensions[this.name];return I.ior=B.ior!==void 0?B.ior:1.5,Promise.resolve()}}class wT{constructor(A){this.parser=A,this.name=TI.KHR_MATERIALS_SPECULAR}getMaterialType(A){const g=this.parser.json.materials[A];return!g.extensions||!g.extensions[this.name]?null:yQ}extendMaterialParams(A,I){const g=this.parser,C=g.json.materials[A];if(!C.extensions||!C.extensions[this.name])return Promise.resolve();const B=[],i=C.extensions[this.name];I.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0&&B.push(g.assignTexture(I,"specularIntensityMap",i.specularTexture));const E=i.specularColorFactor||[1,1,1];return I.specularColor=new LA(E[0],E[1],E[2]),i.specularColorTexture!==void 0&&B.push(g.assignTexture(I,"specularColorMap",i.specularColorTexture,QI)),Promise.all(B)}}class lT{constructor(A){this.parser=A,this.name=TI.KHR_TEXTURE_BASISU}loadTexture(A){const I=this.parser,g=I.json,C=g.textures[A];if(!C.extensions||!C.extensions[this.name])return null;const B=C.extensions[this.name],i=I.options.ktx2Loader;if(!i){if(g.extensionsRequired&&g.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return I.loadTextureImage(A,B.source,i)}}class GT{constructor(A){this.parser=A,this.name=TI.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(A){const I=this.name,g=this.parser,C=g.json,B=C.textures[A];if(!B.extensions||!B.extensions[I])return null;const i=B.extensions[I],E=C.images[i.source];let e=g.textureLoader;if(E.uri){const t=g.options.manager.getHandler(E.uri);t!==null&&(e=t)}return this.detectSupport().then(function(t){if(t)return g.loadTextureImage(A,i.source,e);if(C.extensionsRequired&&C.extensionsRequired.indexOf(I)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return g.loadTexture(A)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(A){const I=new Image;I.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",I.onload=I.onerror=function(){A(I.height===1)}})),this.isSupported}}class ST{constructor(A){this.parser=A,this.name=TI.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(A){const I=this.name,g=this.parser,C=g.json,B=C.textures[A];if(!B.extensions||!B.extensions[I])return null;const i=B.extensions[I],E=C.images[i.source];let e=g.textureLoader;if(E.uri){const t=g.options.manager.getHandler(E.uri);t!==null&&(e=t)}return this.detectSupport().then(function(t){if(t)return g.loadTextureImage(A,i.source,e);if(C.extensionsRequired&&C.extensionsRequired.indexOf(I)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return g.loadTexture(A)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(A){const I=new Image;I.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",I.onload=I.onerror=function(){A(I.height===1)}})),this.isSupported}}class yT{constructor(A){this.name=TI.EXT_MESHOPT_COMPRESSION,this.parser=A}loadBufferView(A){const I=this.parser.json,g=I.bufferViews[A];if(g.extensions&&g.extensions[this.name]){const C=g.extensions[this.name],B=this.parser.getDependency("buffer",C.buffer),i=this.parser.options.meshoptDecoder;if(!i||!i.supported){if(I.extensionsRequired&&I.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return B.then(function(E){const e=C.byteOffset||0,t=C.byteLength||0,s=C.count,n=C.byteStride,D=new Uint8Array(E,e,t);return i.decodeGltfBufferAsync?i.decodeGltfBufferAsync(s,n,D,C.mode,C.filter).then(function(r){return r.buffer}):i.ready.then(function(){const r=new ArrayBuffer(s*n);return i.decodeGltfBuffer(new Uint8Array(r),s,n,D,C.mode,C.filter),r})})}else return null}}class kT{constructor(A){this.name=TI.EXT_MESH_GPU_INSTANCING,this.parser=A}createNodeMesh(A){const I=this.parser.json,g=I.nodes[A];if(!g.extensions||!g.extensions[this.name]||g.mesh===void 0)return null;const C=I.meshes[g.mesh];for(const t of C.primitives)if(t.mode!==AB.TRIANGLES&&t.mode!==AB.TRIANGLE_STRIP&&t.mode!==AB.TRIANGLE_FAN&&t.mode!==void 0)return null;const i=g.extensions[this.name].attributes,E=[],e={};for(const t in i)E.push(this.parser.getDependency("accessor",i[t]).then(s=>(e[t]=s,e[t])));return E.length<1?null:(E.push(this.parser.createNodeMesh(A)),Promise.all(E).then(t=>{const s=t.pop(),n=s.isGroup?s.children:[s],D=t[0].count,r=[];for(const w of n){const G=new sI,l=new f,c=new ng,k=new f(1,1,1),y=new kh(w.geometry,w.material,D);for(let M=0;M<D;M++)e.TRANSLATION&&l.fromBufferAttribute(e.TRANSLATION,M),e.ROTATION&&c.fromBufferAttribute(e.ROTATION,M),e.SCALE&&k.fromBufferAttribute(e.SCALE,M),y.setMatrixAt(M,G.compose(l,c,k));for(const M in e)M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&w.geometry.setAttribute(M,e[M]);YI.prototype.copy.call(y,w),this.parser.assignFinalMaterial(y),r.push(y)}return s.isGroup?(s.clear(),s.add(...r),s):r[0]}))}}const PM="glTF",jo=12,qS={JSON:1313821514,BIN:5130562};class MT{constructor(A){this.name=TI.KHR_BINARY_GLTF,this.content=null,this.body=null;const I=new DataView(A,0,jo),g=new TextDecoder;if(this.header={magic:g.decode(new Uint8Array(A.slice(0,4))),version:I.getUint32(4,!0),length:I.getUint32(8,!0)},this.header.magic!==PM)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const C=this.header.length-jo,B=new DataView(A,jo);let i=0;for(;i<C;){const E=B.getUint32(i,!0);i+=4;const e=B.getUint32(i,!0);if(i+=4,e===qS.JSON){const t=new Uint8Array(A,jo+i,E);this.content=g.decode(t)}else if(e===qS.BIN){const t=jo+i;this.body=A.slice(t,t+E)}i+=E}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class UT{constructor(A,I){if(!I)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=TI.KHR_DRACO_MESH_COMPRESSION,this.json=A,this.dracoLoader=I,this.dracoLoader.preload()}decodePrimitive(A,I){const g=this.json,C=this.dracoLoader,B=A.extensions[this.name].bufferView,i=A.extensions[this.name].attributes,E={},e={},t={};for(const s in i){const n=Vr[s]||s.toLowerCase();E[n]=i[s]}for(const s in A.attributes){const n=Vr[s]||s.toLowerCase();if(i[s]!==void 0){const D=g.accessors[A.attributes[s]],r=WE[D.componentType];t[n]=r.name,e[n]=D.normalized===!0}}return I.getDependency("bufferView",B).then(function(s){return new Promise(function(n){C.decodeDracoFile(s,function(D){for(const r in D.attributes){const w=D.attributes[r],G=e[r];G!==void 0&&(w.normalized=G)}n(D)},E,t)})})}}class NT{constructor(){this.name=TI.KHR_TEXTURE_TRANSFORM}extendTexture(A,I){return(I.texCoord===void 0||I.texCoord===A.channel)&&I.offset===void 0&&I.rotation===void 0&&I.scale===void 0||(A=A.clone(),I.texCoord!==void 0&&(A.channel=I.texCoord),I.offset!==void 0&&A.offset.fromArray(I.offset),I.rotation!==void 0&&(A.rotation=I.rotation),I.scale!==void 0&&A.repeat.fromArray(I.scale),A.needsUpdate=!0),A}}class KT{constructor(){this.name=TI.KHR_MESH_QUANTIZATION}}class ZM extends ho{constructor(A,I,g,C){super(A,I,g,C)}copySampleValue_(A){const I=this.resultBuffer,g=this.sampleValues,C=this.valueSize,B=A*C*3+C;for(let i=0;i!==C;i++)I[i]=g[B+i];return I}interpolate_(A,I,g,C){const B=this.resultBuffer,i=this.sampleValues,E=this.valueSize,e=E*2,t=E*3,s=C-I,n=(g-I)/s,D=n*n,r=D*n,w=A*t,G=w-t,l=-2*r+3*D,c=r-D,k=1-l,y=c-D+n;for(let M=0;M!==E;M++){const N=i[G+M+E],R=i[G+M+e]*s,d=i[w+M+E],L=i[w+M]*s;B[M]=k*N+y*R+l*d+c*L}return B}}const FT=new ng;class RT extends ZM{interpolate_(A,I,g,C){const B=super.interpolate_(A,I,g,C);return FT.fromArray(B).normalize().toArray(B),B}}const AB={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},WE={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},fS={9728:wg,9729:Bg,9984:re,9985:cs,9986:PE,9987:SB},uS={33071:Wg,33648:jE,10497:jQ},bD={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Vr={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},mQ={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},JT={CUBICSPLINE:void 0,LINEAR:bi,STEP:VE},TD={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function dT(Q){return Q.DefaultMaterial===void 0&&(Q.DefaultMaterial=new At({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:xB})),Q.DefaultMaterial}function Vo(Q,A,I){for(const g in I.extensions)Q[g]===void 0&&(A.userData.gltfExtensions=A.userData.gltfExtensions||{},A.userData.gltfExtensions[g]=I.extensions[g])}function TQ(Q,A){A.extras!==void 0&&(typeof A.extras=="object"?Object.assign(Q.userData,A.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+A.extras))}function pT(Q,A,I){let g=!1,C=!1,B=!1;for(let t=0,s=A.length;t<s;t++){const n=A[t];if(n.POSITION!==void 0&&(g=!0),n.NORMAL!==void 0&&(C=!0),n.COLOR_0!==void 0&&(B=!0),g&&C&&B)break}if(!g&&!C&&!B)return Promise.resolve(Q);const i=[],E=[],e=[];for(let t=0,s=A.length;t<s;t++){const n=A[t];if(g){const D=n.POSITION!==void 0?I.getDependency("accessor",n.POSITION):Q.attributes.position;i.push(D)}if(C){const D=n.NORMAL!==void 0?I.getDependency("accessor",n.NORMAL):Q.attributes.normal;E.push(D)}if(B){const D=n.COLOR_0!==void 0?I.getDependency("accessor",n.COLOR_0):Q.attributes.color;e.push(D)}}return Promise.all([Promise.all(i),Promise.all(E),Promise.all(e)]).then(function(t){const s=t[0],n=t[1],D=t[2];return g&&(Q.morphAttributes.position=s),C&&(Q.morphAttributes.normal=n),B&&(Q.morphAttributes.color=D),Q.morphTargetsRelative=!0,Q})}function qT(Q,A){if(Q.updateMorphTargets(),A.weights!==void 0)for(let I=0,g=A.weights.length;I<g;I++)Q.morphTargetInfluences[I]=A.weights[I];if(A.extras&&Array.isArray(A.extras.targetNames)){const I=A.extras.targetNames;if(Q.morphTargetInfluences.length===I.length){Q.morphTargetDictionary={};for(let g=0,C=I.length;g<C;g++)Q.morphTargetDictionary[I[g]]=g}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function fT(Q){const A=Q.extensions&&Q.extensions[TI.KHR_DRACO_MESH_COMPRESSION];let I;return A?I="draco:"+A.bufferView+":"+A.indices+":"+LS(A.attributes):I=Q.indices+":"+LS(Q.attributes)+":"+Q.mode,I}function LS(Q){let A="";const I=Object.keys(Q).sort();for(let g=0,C=I.length;g<C;g++)A+=I[g]+":"+Q[I[g]]+";";return A}function Xr(Q){switch(Q){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function uT(Q){return Q.search(/\.jpe?g($|\?)/i)>0||Q.search(/^data\:image\/jpeg/)===0?"image/jpeg":Q.search(/\.webp($|\?)/i)>0||Q.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const LT=new sI;class YT{constructor(A={},I={}){this.json=A,this.extensions={},this.plugins={},this.options=I,this.cache=new oT,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let g=!1,C=!1,B=-1;typeof navigator<"u"&&(g=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,C=navigator.userAgent.indexOf("Firefox")>-1,B=C?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||g||C&&B<98?this.textureLoader=new Yh(this.options.manager):this.textureLoader=new Wk(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new CC(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(A){this.extensions=A}setPlugins(A){this.plugins=A}parse(A,I){const g=this,C=this.json,B=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(i){return i._markDefs&&i._markDefs()}),Promise.all(this._invokeAll(function(i){return i.beforeRoot&&i.beforeRoot()})).then(function(){return Promise.all([g.getDependencies("scene"),g.getDependencies("animation"),g.getDependencies("camera")])}).then(function(i){const E={scene:i[0][C.scene||0],scenes:i[0],animations:i[1],cameras:i[2],asset:C.asset,parser:g,userData:{}};Vo(B,E,C),TQ(E,C),Promise.all(g._invokeAll(function(e){return e.afterRoot&&e.afterRoot(E)})).then(function(){A(E)})}).catch(I)}_markDefs(){const A=this.json.nodes||[],I=this.json.skins||[],g=this.json.meshes||[];for(let C=0,B=I.length;C<B;C++){const i=I[C].joints;for(let E=0,e=i.length;E<e;E++)A[i[E]].isBone=!0}for(let C=0,B=A.length;C<B;C++){const i=A[C];i.mesh!==void 0&&(this._addNodeRef(this.meshCache,i.mesh),i.skin!==void 0&&(g[i.mesh].isSkinnedMesh=!0)),i.camera!==void 0&&this._addNodeRef(this.cameraCache,i.camera)}}_addNodeRef(A,I){I!==void 0&&(A.refs[I]===void 0&&(A.refs[I]=A.uses[I]=0),A.refs[I]++)}_getNodeRef(A,I,g){if(A.refs[I]<=1)return g;const C=g.clone(),B=(i,E)=>{const e=this.associations.get(i);e!=null&&this.associations.set(E,e);for(const[t,s]of i.children.entries())B(s,E.children[t])};return B(g,C),C.name+="_instance_"+A.uses[I]++,C}_invokeOne(A){const I=Object.values(this.plugins);I.push(this);for(let g=0;g<I.length;g++){const C=A(I[g]);if(C)return C}return null}_invokeAll(A){const I=Object.values(this.plugins);I.unshift(this);const g=[];for(let C=0;C<I.length;C++){const B=A(I[C]);B&&g.push(B)}return g}getDependency(A,I){const g=A+":"+I;let C=this.cache.get(g);if(!C){switch(A){case"scene":C=this.loadScene(I);break;case"node":C=this._invokeOne(function(B){return B.loadNode&&B.loadNode(I)});break;case"mesh":C=this._invokeOne(function(B){return B.loadMesh&&B.loadMesh(I)});break;case"accessor":C=this.loadAccessor(I);break;case"bufferView":C=this._invokeOne(function(B){return B.loadBufferView&&B.loadBufferView(I)});break;case"buffer":C=this.loadBuffer(I);break;case"material":C=this._invokeOne(function(B){return B.loadMaterial&&B.loadMaterial(I)});break;case"texture":C=this._invokeOne(function(B){return B.loadTexture&&B.loadTexture(I)});break;case"skin":C=this.loadSkin(I);break;case"animation":C=this._invokeOne(function(B){return B.loadAnimation&&B.loadAnimation(I)});break;case"camera":C=this.loadCamera(I);break;default:if(C=this._invokeOne(function(B){return B!=this&&B.getDependency&&B.getDependency(A,I)}),!C)throw new Error("Unknown type: "+A);break}this.cache.add(g,C)}return C}getDependencies(A){let I=this.cache.get(A);if(!I){const g=this,C=this.json[A+(A==="mesh"?"es":"s")]||[];I=Promise.all(C.map(function(B,i){return g.getDependency(A,i)})),this.cache.add(A,I)}return I}loadBuffer(A){const I=this.json.buffers[A],g=this.fileLoader;if(I.type&&I.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+I.type+" buffer type is not supported.");if(I.uri===void 0&&A===0)return Promise.resolve(this.extensions[TI.KHR_BINARY_GLTF].body);const C=this.options;return new Promise(function(B,i){g.load(Co.resolveURL(I.uri,C.path),B,void 0,function(){i(new Error('THREE.GLTFLoader: Failed to load buffer "'+I.uri+'".'))})})}loadBufferView(A){const I=this.json.bufferViews[A];return this.getDependency("buffer",I.buffer).then(function(g){const C=I.byteLength||0,B=I.byteOffset||0;return g.slice(B,B+C)})}loadAccessor(A){const I=this,g=this.json,C=this.json.accessors[A];if(C.bufferView===void 0&&C.sparse===void 0){const i=bD[C.type],E=WE[C.componentType],e=C.normalized===!0,t=new E(C.count*i);return Promise.resolve(new OI(t,i,e))}const B=[];return C.bufferView!==void 0?B.push(this.getDependency("bufferView",C.bufferView)):B.push(null),C.sparse!==void 0&&(B.push(this.getDependency("bufferView",C.sparse.indices.bufferView)),B.push(this.getDependency("bufferView",C.sparse.values.bufferView))),Promise.all(B).then(function(i){const E=i[0],e=bD[C.type],t=WE[C.componentType],s=t.BYTES_PER_ELEMENT,n=s*e,D=C.byteOffset||0,r=C.bufferView!==void 0?g.bufferViews[C.bufferView].byteStride:void 0,w=C.normalized===!0;let G,l;if(r&&r!==n){const c=Math.floor(D/r),k="InterleavedBuffer:"+C.bufferView+":"+C.componentType+":"+c+":"+C.count;let y=I.cache.get(k);y||(G=new t(E,c*r,C.count*r/s),y=new be(G,r/s),I.cache.add(k,y)),l=new VQ(y,e,D%r/s,w)}else E===null?G=new t(C.count*e):G=new t(E,D,C.count*e),l=new OI(G,e,w);if(C.sparse!==void 0){const c=bD.SCALAR,k=WE[C.sparse.indices.componentType],y=C.sparse.indices.byteOffset||0,M=C.sparse.values.byteOffset||0,N=new k(i[1],y,C.sparse.count*c),R=new t(i[2],M,C.sparse.count*e);E!==null&&(l=new OI(l.array.slice(),l.itemSize,l.normalized));for(let d=0,L=N.length;d<L;d++){const F=N[d];if(l.setX(F,R[d*e]),e>=2&&l.setY(F,R[d*e+1]),e>=3&&l.setZ(F,R[d*e+2]),e>=4&&l.setW(F,R[d*e+3]),e>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return l})}loadTexture(A){const I=this.json,g=this.options,B=I.textures[A].source,i=I.images[B];let E=this.textureLoader;if(i.uri){const e=g.manager.getHandler(i.uri);e!==null&&(E=e)}return this.loadTextureImage(A,B,E)}loadTextureImage(A,I,g){const C=this,B=this.json,i=B.textures[A],E=B.images[I],e=(E.uri||E.bufferView)+":"+i.sampler;if(this.textureCache[e])return this.textureCache[e];const t=this.loadImageSource(I,g).then(function(s){s.flipY=!1,s.name=i.name||E.name||"",s.name===""&&typeof E.uri=="string"&&E.uri.startsWith("data:image/")===!1&&(s.name=E.uri);const D=(B.samplers||{})[i.sampler]||{};return s.magFilter=fS[D.magFilter]||Bg,s.minFilter=fS[D.minFilter]||SB,s.wrapS=uS[D.wrapS]||jQ,s.wrapT=uS[D.wrapT]||jQ,C.associations.set(s,{textures:A}),s}).catch(function(){return null});return this.textureCache[e]=t,t}loadImageSource(A,I){const g=this,C=this.json,B=this.options;if(this.sourceCache[A]!==void 0)return this.sourceCache[A].then(n=>n.clone());const i=C.images[A],E=self.URL||self.webkitURL;let e=i.uri||"",t=!1;if(i.bufferView!==void 0)e=g.getDependency("bufferView",i.bufferView).then(function(n){t=!0;const D=new Blob([n],{type:i.mimeType});return e=E.createObjectURL(D),e});else if(i.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+A+" is missing URI and bufferView");const s=Promise.resolve(e).then(function(n){return new Promise(function(D,r){let w=D;I.isImageBitmapLoader===!0&&(w=function(G){const l=new sg(G);l.needsUpdate=!0,D(l)}),I.load(Co.resolveURL(n,B.path),w,void 0,r)})}).then(function(n){return t===!0&&E.revokeObjectURL(e),n.userData.mimeType=i.mimeType||uT(i.uri),n}).catch(function(n){throw console.error("THREE.GLTFLoader: Couldn't load texture",e),n});return this.sourceCache[A]=s,s}assignTexture(A,I,g,C){const B=this;return this.getDependency("texture",g.index).then(function(i){if(!i)return null;if(g.texCoord!==void 0&&g.texCoord>0&&(i=i.clone(),i.channel=g.texCoord),B.extensions[TI.KHR_TEXTURE_TRANSFORM]){const E=g.extensions!==void 0?g.extensions[TI.KHR_TEXTURE_TRANSFORM]:void 0;if(E){const e=B.associations.get(i);i=B.extensions[TI.KHR_TEXTURE_TRANSFORM].extendTexture(i,E),B.associations.set(i,e)}}return C!==void 0&&(i.colorSpace=C),A[I]=i,i})}assignFinalMaterial(A){const I=A.geometry;let g=A.material;const C=I.attributes.tangent===void 0,B=I.attributes.color!==void 0,i=I.attributes.normal===void 0;if(A.isPoints){const E="PointsMaterial:"+g.uuid;let e=this.cache.get(E);e||(e=new Ks,Lg.prototype.copy.call(e,g),e.color.copy(g.color),e.map=g.map,e.sizeAttenuation=!1,this.cache.add(E,e)),g=e}else if(A.isLine){const E="LineBasicMaterial:"+g.uuid;let e=this.cache.get(E);e||(e=new QC,Lg.prototype.copy.call(e,g),e.color.copy(g.color),e.map=g.map,this.cache.add(E,e)),g=e}if(C||B||i){let E="ClonedMaterial:"+g.uuid+":";C&&(E+="derivative-tangents:"),B&&(E+="vertex-colors:"),i&&(E+="flat-shading:");let e=this.cache.get(E);e||(e=g.clone(),B&&(e.vertexColors=!0),i&&(e.flatShading=!0),C&&(e.normalScale&&(e.normalScale.y*=-1),e.clearcoatNormalScale&&(e.clearcoatNormalScale.y*=-1)),this.cache.add(E,e),this.associations.set(e,this.associations.get(g))),g=e}A.material=g}getMaterialType(){return At}loadMaterial(A){const I=this,g=this.json,C=this.extensions,B=g.materials[A];let i;const E={},e=B.extensions||{},t=[];if(e[TI.KHR_MATERIALS_UNLIT]){const n=C[TI.KHR_MATERIALS_UNLIT];i=n.getMaterialType(),t.push(n.extendParams(E,B,I))}else{const n=B.pbrMetallicRoughness||{};if(E.color=new LA(1,1,1),E.opacity=1,Array.isArray(n.baseColorFactor)){const D=n.baseColorFactor;E.color.fromArray(D),E.opacity=D[3]}n.baseColorTexture!==void 0&&t.push(I.assignTexture(E,"map",n.baseColorTexture,QI)),E.metalness=n.metallicFactor!==void 0?n.metallicFactor:1,E.roughness=n.roughnessFactor!==void 0?n.roughnessFactor:1,n.metallicRoughnessTexture!==void 0&&(t.push(I.assignTexture(E,"metalnessMap",n.metallicRoughnessTexture)),t.push(I.assignTexture(E,"roughnessMap",n.metallicRoughnessTexture))),i=this._invokeOne(function(D){return D.getMaterialType&&D.getMaterialType(A)}),t.push(Promise.all(this._invokeAll(function(D){return D.extendMaterialParams&&D.extendMaterialParams(A,E)})))}B.doubleSided===!0&&(E.side=lB);const s=B.alphaMode||TD.OPAQUE;if(s===TD.BLEND?(E.transparent=!0,E.depthWrite=!1):(E.transparent=!1,s===TD.MASK&&(E.alphaTest=B.alphaCutoff!==void 0?B.alphaCutoff:.5)),B.normalTexture!==void 0&&i!==mC&&(t.push(I.assignTexture(E,"normalMap",B.normalTexture)),E.normalScale=new rA(1,1),B.normalTexture.scale!==void 0)){const n=B.normalTexture.scale;E.normalScale.set(n,n)}return B.occlusionTexture!==void 0&&i!==mC&&(t.push(I.assignTexture(E,"aoMap",B.occlusionTexture)),B.occlusionTexture.strength!==void 0&&(E.aoMapIntensity=B.occlusionTexture.strength)),B.emissiveFactor!==void 0&&i!==mC&&(E.emissive=new LA().fromArray(B.emissiveFactor)),B.emissiveTexture!==void 0&&i!==mC&&t.push(I.assignTexture(E,"emissiveMap",B.emissiveTexture,QI)),Promise.all(t).then(function(){const n=new i(E);return B.name&&(n.name=B.name),TQ(n,B),I.associations.set(n,{materials:A}),B.extensions&&Vo(C,n,B),n})}createUniqueName(A){const I=bI.sanitizeNodeName(A||"");let g=I;for(let C=1;this.nodeNamesUsed[g];++C)g=I+"_"+C;return this.nodeNamesUsed[g]=!0,g}loadGeometries(A){const I=this,g=this.extensions,C=this.primitiveCache;function B(E){return g[TI.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(E,I).then(function(e){return YS(e,E,I)})}const i=[];for(let E=0,e=A.length;E<e;E++){const t=A[E],s=fT(t),n=C[s];if(n)i.push(n.promise);else{let D;t.extensions&&t.extensions[TI.KHR_DRACO_MESH_COMPRESSION]?D=B(t):D=YS(new GI,t,I),C[s]={primitive:t,promise:D},i.push(D)}}return Promise.all(i)}loadMesh(A){const I=this,g=this.json,C=this.extensions,B=g.meshes[A],i=B.primitives,E=[];for(let e=0,t=i.length;e<t;e++){const s=i[e].material===void 0?dT(this.cache):this.getDependency("material",i[e].material);E.push(s)}return E.push(I.loadGeometries(i)),Promise.all(E).then(function(e){const t=e.slice(0,e.length-1),s=e[e.length-1],n=[];for(let r=0,w=s.length;r<w;r++){const G=s[r],l=i[r];let c;const k=t[r];if(l.mode===AB.TRIANGLES||l.mode===AB.TRIANGLE_STRIP||l.mode===AB.TRIANGLE_FAN||l.mode===void 0)c=B.isSkinnedMesh===!0?new yh(G,k):new ug(G,k),c.isSkinnedMesh===!0&&c.normalizeSkinWeights(),l.mode===AB.TRIANGLE_STRIP?c.geometry=pS(c.geometry,th):l.mode===AB.TRIANGLE_FAN&&(c.geometry=pS(c.geometry,As));else if(l.mode===AB.LINES)c=new UB(G,k);else if(l.mode===AB.LINE_STRIP)c=new wQ(G,k);else if(l.mode===AB.LINE_LOOP)c=new Mh(G,k);else if(l.mode===AB.POINTS)c=new Uh(G,k);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+l.mode);Object.keys(c.geometry.morphAttributes).length>0&&qT(c,B),c.name=I.createUniqueName(B.name||"mesh_"+A),TQ(c,B),l.extensions&&Vo(C,c,l),I.assignFinalMaterial(c),n.push(c)}for(let r=0,w=n.length;r<w;r++)I.associations.set(n[r],{meshes:A,primitives:r});if(n.length===1)return n[0];const D=new LB;I.associations.set(D,{meshes:A});for(let r=0,w=n.length;r<w;r++)D.add(n[r]);return D})}loadCamera(A){let I;const g=this.json.cameras[A],C=g[g.type];if(!C){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return g.type==="perspective"?I=new fg(Xy.radToDeg(C.yfov),C.aspectRatio||1,C.znear||1,C.zfar||2e6):g.type==="orthographic"&&(I=new me(-C.xmag,C.xmag,C.ymag,-C.ymag,C.znear,C.zfar)),g.name&&(I.name=this.createUniqueName(g.name)),TQ(I,g),Promise.resolve(I)}loadSkin(A){const I=this.json.skins[A],g=[];for(let C=0,B=I.joints.length;C<B;C++)g.push(this._loadNodeShallow(I.joints[C]));return I.inverseBindMatrices!==void 0?g.push(this.getDependency("accessor",I.inverseBindMatrices)):g.push(null),Promise.all(g).then(function(C){const B=C.pop(),i=C,E=[],e=[];for(let t=0,s=i.length;t<s;t++){const n=i[t];if(n){E.push(n);const D=new sI;B!==null&&D.fromArray(B.array,t*16),e.push(D)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',I.joints[t])}return new Te(E,e)})}loadAnimation(A){const g=this.json.animations[A],C=g.name?g.name:"animation_"+A,B=[],i=[],E=[],e=[],t=[];for(let s=0,n=g.channels.length;s<n;s++){const D=g.channels[s],r=g.samplers[D.sampler],w=D.target,G=w.node,l=g.parameters!==void 0?g.parameters[r.input]:r.input,c=g.parameters!==void 0?g.parameters[r.output]:r.output;w.node!==void 0&&(B.push(this.getDependency("node",G)),i.push(this.getDependency("accessor",l)),E.push(this.getDependency("accessor",c)),e.push(r),t.push(w))}return Promise.all([Promise.all(B),Promise.all(i),Promise.all(E),Promise.all(e),Promise.all(t)]).then(function(s){const n=s[0],D=s[1],r=s[2],w=s[3],G=s[4],l=[];for(let c=0,k=n.length;c<k;c++){const y=n[c],M=D[c],N=r[c],R=w[c],d=G[c];if(y===void 0)continue;y.updateMatrix();let L;switch(mQ[d.path]){case mQ.weights:L=Ao;break;case mQ.rotation:L=XQ;break;case mQ.position:case mQ.scale:default:L=Io;break}const F=y.name?y.name:y.uuid,u=R.interpolation!==void 0?JT[R.interpolation]:bi,W=[];mQ[d.path]===mQ.weights?y.traverse(function(H){H.morphTargetInfluences&&W.push(H.name?H.name:H.uuid)}):W.push(F);let $=N.array;if(N.normalized){const H=Xr($.constructor),v=new Float32Array($.length);for(let IA=0,oA=$.length;IA<oA;IA++)v[IA]=$[IA]*H;$=v}for(let H=0,v=W.length;H<v;H++){const IA=new L(W[H]+"."+mQ[d.path],M.array,$,u);R.interpolation==="CUBICSPLINE"&&(IA.createInterpolant=function(gA){const iA=this instanceof XQ?RT:ZM;return new iA(this.times,this.values,this.getValueSize()/3,gA)},IA.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),l.push(IA)}}return new go(C,void 0,l)})}createNodeMesh(A){const I=this.json,g=this,C=I.nodes[A];return C.mesh===void 0?null:g.getDependency("mesh",C.mesh).then(function(B){const i=g._getNodeRef(g.meshCache,C.mesh,B);return C.weights!==void 0&&i.traverse(function(E){if(E.isMesh)for(let e=0,t=C.weights.length;e<t;e++)E.morphTargetInfluences[e]=C.weights[e]}),i})}loadNode(A){const I=this.json,g=this,C=I.nodes[A],B=g._loadNodeShallow(A),i=[],E=C.children||[];for(let t=0,s=E.length;t<s;t++)i.push(g.getDependency("node",E[t]));const e=C.skin===void 0?Promise.resolve(null):g.getDependency("skin",C.skin);return Promise.all([B,Promise.all(i),e]).then(function(t){const s=t[0],n=t[1],D=t[2];D!==null&&s.traverse(function(r){r.isSkinnedMesh&&r.bind(D,LT)});for(let r=0,w=n.length;r<w;r++)s.add(n[r]);return s})}_loadNodeShallow(A){const I=this.json,g=this.extensions,C=this;if(this.nodeCache[A]!==void 0)return this.nodeCache[A];const B=I.nodes[A],i=B.name?C.createUniqueName(B.name):"",E=[],e=C._invokeOne(function(t){return t.createNodeMesh&&t.createNodeMesh(A)});return e&&E.push(e),B.camera!==void 0&&E.push(C.getDependency("camera",B.camera).then(function(t){return C._getNodeRef(C.cameraCache,B.camera,t)})),C._invokeAll(function(t){return t.createNodeAttachment&&t.createNodeAttachment(A)}).forEach(function(t){E.push(t)}),this.nodeCache[A]=Promise.all(E).then(function(t){let s;if(B.isBone===!0?s=new Ns:t.length>1?s=new LB:t.length===1?s=t[0]:s=new YI,s!==t[0])for(let n=0,D=t.length;n<D;n++)s.add(t[n]);if(B.name&&(s.userData.name=B.name,s.name=i),TQ(s,B),B.extensions&&Vo(g,s,B),B.matrix!==void 0){const n=new sI;n.fromArray(B.matrix),s.applyMatrix4(n)}else B.translation!==void 0&&s.position.fromArray(B.translation),B.rotation!==void 0&&s.quaternion.fromArray(B.rotation),B.scale!==void 0&&s.scale.fromArray(B.scale);return C.associations.has(s)||C.associations.set(s,{}),C.associations.get(s).nodes=A,s}),this.nodeCache[A]}loadScene(A){const I=this.extensions,g=this.json.scenes[A],C=this,B=new LB;g.name&&(B.name=C.createUniqueName(g.name)),TQ(B,g),g.extensions&&Vo(I,B,g);const i=g.nodes||[],E=[];for(let e=0,t=i.length;e<t;e++)E.push(C.getDependency("node",i[e]));return Promise.all(E).then(function(e){for(let s=0,n=e.length;s<n;s++)B.add(e[s]);const t=s=>{const n=new Map;for(const[D,r]of C.associations)(D instanceof Lg||D instanceof sg)&&n.set(D,r);return s.traverse(D=>{const r=C.associations.get(D);r!=null&&n.set(D,r)}),n};return C.associations=t(B),B})}}function HT(Q,A,I){const g=A.attributes,C=new kB;if(g.POSITION!==void 0){const E=I.json.accessors[g.POSITION],e=E.min,t=E.max;if(e!==void 0&&t!==void 0){if(C.set(new f(e[0],e[1],e[2]),new f(t[0],t[1],t[2])),E.normalized){const s=Xr(WE[E.componentType]);C.min.multiplyScalar(s),C.max.multiplyScalar(s)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const B=A.targets;if(B!==void 0){const E=new f,e=new f;for(let t=0,s=B.length;t<s;t++){const n=B[t];if(n.POSITION!==void 0){const D=I.json.accessors[n.POSITION],r=D.min,w=D.max;if(r!==void 0&&w!==void 0){if(e.setX(Math.max(Math.abs(r[0]),Math.abs(w[0]))),e.setY(Math.max(Math.abs(r[1]),Math.abs(w[1]))),e.setZ(Math.max(Math.abs(r[2]),Math.abs(w[2]))),D.normalized){const G=Xr(WE[D.componentType]);e.multiplyScalar(G)}E.max(e)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}C.expandByVector(E)}Q.boundingBox=C;const i=new MB;C.getCenter(i.center),i.radius=C.min.distanceTo(C.max)/2,Q.boundingSphere=i}function YS(Q,A,I){const g=A.attributes,C=[];function B(i,E){return I.getDependency("accessor",i).then(function(e){Q.setAttribute(E,e)})}for(const i in g){const E=Vr[i]||i.toLowerCase();E in Q.attributes||C.push(B(g[i],E))}if(A.indices!==void 0&&!Q.index){const i=I.getDependency("accessor",A.indices).then(function(E){Q.setIndex(E)});C.push(i)}return TQ(Q,A),HT(Q,A,I),Promise.all(C).then(function(){return A.targets!==void 0?pT(Q,A.targets,I):Q})}class mT{constructor(A=4){this.pool=A,this.queue=[],this.workers=[],this.workersResolve=[],this.workerStatus=0}_initWorker(A){if(!this.workers[A]){const I=this.workerCreator();I.addEventListener("message",this._onMessage.bind(this,A)),this.workers[A]=I}}_getIdleWorker(){for(let A=0;A<this.pool;A++)if(!(this.workerStatus&1<<A))return A;return-1}_onMessage(A,I){const g=this.workersResolve[A];if(g&&g(I),this.queue.length){const{resolve:C,msg:B,transfer:i}=this.queue.shift();this.workersResolve[A]=C,this.workers[A].postMessage(B,i)}else this.workerStatus^=1<<A}setWorkerCreator(A){this.workerCreator=A}setWorkerLimit(A){this.pool=A}postMessage(A,I){return new Promise(g=>{const C=this._getIdleWorker();C!==-1?(this._initWorker(C),this.workerStatus|=1<<C,this.workersResolve[C]=g,this.workers[C].postMessage(A,I)):this.queue.push({resolve:g,msg:A,transfer:I})})}dispose(){this.workers.forEach(A=>A.terminate()),this.workersResolve.length=0,this.workers.length=0,this.queue.length=0,this.workerStatus=0}}const bT=0,TT=2,xT=1,OT=2,vT=0,WM=9,rc=15,_M=16,hc=22,jM=37,cc=43,VM=76,XM=83,zM=97,$M=100,AU=103,IU=109;class PT{constructor(){this.vkFormat=0,this.typeSize=1,this.pixelWidth=0,this.pixelHeight=0,this.pixelDepth=0,this.layerCount=0,this.faceCount=1,this.supercompressionScheme=0,this.levels=[],this.dataFormatDescriptor=[{vendorId:0,descriptorType:0,descriptorBlockSize:0,versionNumber:2,colorModel:0,colorPrimaries:1,transferFunction:2,flags:0,texelBlockDimension:[0,0,0,0],bytesPlane:[0,0,0,0,0,0,0,0],samples:[]}],this.keyValue={},this.globalData=null}}class Xo{constructor(A,I,g,C){this._dataView=new DataView(A.buffer,A.byteOffset+I,g),this._littleEndian=C,this._offset=0}_nextUint8(){const A=this._dataView.getUint8(this._offset);return this._offset+=1,A}_nextUint16(){const A=this._dataView.getUint16(this._offset,this._littleEndian);return this._offset+=2,A}_nextUint32(){const A=this._dataView.getUint32(this._offset,this._littleEndian);return this._offset+=4,A}_nextUint64(){const A=this._dataView.getUint32(this._offset,this._littleEndian)+4294967296*this._dataView.getUint32(this._offset+4,this._littleEndian);return this._offset+=8,A}_nextInt32(){const A=this._dataView.getInt32(this._offset,this._littleEndian);return this._offset+=4,A}_skip(A){return this._offset+=A,this}_scan(A,I=0){const g=this._offset;let C=0;for(;this._dataView.getUint8(this._offset)!==I&&C<A;)C++,this._offset++;return C<A&&this._offset++,new Uint8Array(this._dataView.buffer,this._dataView.byteOffset+g,C)}}const aC=[171,75,84,88,32,50,48,187,13,10,26,10];function HS(Q){return typeof TextDecoder<"u"?new TextDecoder().decode(Q):Buffer.from(Q).toString("utf8")}function ZT(Q){const A=new Uint8Array(Q.buffer,Q.byteOffset,aC.length);if(A[0]!==aC[0]||A[1]!==aC[1]||A[2]!==aC[2]||A[3]!==aC[3]||A[4]!==aC[4]||A[5]!==aC[5]||A[6]!==aC[6]||A[7]!==aC[7]||A[8]!==aC[8]||A[9]!==aC[9]||A[10]!==aC[10]||A[11]!==aC[11])throw new Error("Missing KTX 2.0 identifier.");const I=new PT,g=17*Uint32Array.BYTES_PER_ELEMENT,C=new Xo(Q,aC.length,g,!0);I.vkFormat=C._nextUint32(),I.typeSize=C._nextUint32(),I.pixelWidth=C._nextUint32(),I.pixelHeight=C._nextUint32(),I.pixelDepth=C._nextUint32(),I.layerCount=C._nextUint32(),I.faceCount=C._nextUint32();const B=C._nextUint32();I.supercompressionScheme=C._nextUint32();const i=C._nextUint32(),E=C._nextUint32(),e=C._nextUint32(),t=C._nextUint32(),s=C._nextUint64(),n=C._nextUint64(),D=new Xo(Q,aC.length+g,3*B*8,!0);for(let gA=0;gA<B;gA++)I.levels.push({levelData:new Uint8Array(Q.buffer,Q.byteOffset+D._nextUint64(),D._nextUint64()),uncompressedByteLength:D._nextUint64()});const r=new Xo(Q,i,E,!0),w={vendorId:r._skip(4)._nextUint16(),descriptorType:r._nextUint16(),versionNumber:r._nextUint16(),descriptorBlockSize:r._nextUint16(),colorModel:r._nextUint8(),colorPrimaries:r._nextUint8(),transferFunction:r._nextUint8(),flags:r._nextUint8(),texelBlockDimension:[r._nextUint8(),r._nextUint8(),r._nextUint8(),r._nextUint8()],bytesPlane:[r._nextUint8(),r._nextUint8(),r._nextUint8(),r._nextUint8(),r._nextUint8(),r._nextUint8(),r._nextUint8(),r._nextUint8()],samples:[]},G=(w.descriptorBlockSize/4-6)/4;for(let gA=0;gA<G;gA++){const iA={bitOffset:r._nextUint16(),bitLength:r._nextUint8(),channelType:r._nextUint8(),samplePosition:[r._nextUint8(),r._nextUint8(),r._nextUint8(),r._nextUint8()],sampleLower:-1/0,sampleUpper:1/0};64&iA.channelType?(iA.sampleLower=r._nextInt32(),iA.sampleUpper=r._nextInt32()):(iA.sampleLower=r._nextUint32(),iA.sampleUpper=r._nextUint32()),w.samples[gA]=iA}I.dataFormatDescriptor.length=0,I.dataFormatDescriptor.push(w);const l=new Xo(Q,e,t,!0);for(;l._offset<t;){const gA=l._nextUint32(),iA=l._scan(gA),MA=HS(iA),lA=l._scan(gA-iA.byteLength);I.keyValue[MA]=MA.match(/^ktx/i)?HS(lA):lA,l._offset%4&&l._skip(4-l._offset%4)}if(n<=0)return I;const c=new Xo(Q,s,n,!0),k=c._nextUint16(),y=c._nextUint16(),M=c._nextUint32(),N=c._nextUint32(),R=c._nextUint32(),d=c._nextUint32(),L=[];for(let gA=0;gA<B;gA++)L.push({imageFlags:c._nextUint32(),rgbSliceByteOffset:c._nextUint32(),rgbSliceByteLength:c._nextUint32(),alphaSliceByteOffset:c._nextUint32(),alphaSliceByteLength:c._nextUint32()});const F=s+c._offset,u=F+M,W=u+N,$=W+R,H=new Uint8Array(Q.buffer,Q.byteOffset+F,M),v=new Uint8Array(Q.buffer,Q.byteOffset+u,N),IA=new Uint8Array(Q.buffer,Q.byteOffset+W,R),oA=new Uint8Array(Q.buffer,Q.byteOffset+$,d);return I.globalData={endpointCount:k,selectorCount:y,imageDescs:L,endpointsData:H,selectorsData:v,tablesData:IA,extendedData:oA},I}let xD,aQ,zr;const OD={env:{emscripten_notify_memory_growth:function(Q){zr=new Uint8Array(aQ.exports.memory.buffer)}}};class WT{init(){return xD||(xD=typeof fetch<"u"?fetch("data:application/wasm;base64,"+mS).then(A=>A.arrayBuffer()).then(A=>WebAssembly.instantiate(A,OD)).then(this._init):WebAssembly.instantiate(Buffer.from(mS,"base64"),OD).then(this._init),xD)}_init(A){aQ=A.instance,OD.env.emscripten_notify_memory_growth(0)}decode(A,I=0){if(!aQ)throw new Error("ZSTDDecoder: Await .init() before decoding.");const g=A.byteLength,C=aQ.exports.malloc(g);zr.set(A,C),I=I||Number(aQ.exports.ZSTD_findDecompressedSize(C,g));const B=aQ.exports.malloc(I),i=aQ.exports.ZSTD_decompress(B,I,C,g),E=zr.slice(B,B+i);return aQ.exports.free(C),aQ.exports.free(B),E}}const mS="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IAMNACAEQQNxBEADQCACRQ0FIAAgAkF/aiICaiIDIAEgAmotAAA6AAAgA0EDcQ0ACwsgAkEDTQ0AA0AgACACQXxqIgJqIAEgAmooAgA2AgAgAkEDSw0ACwsgAkUNAgNAIAAgAkF/aiICaiABIAJqLQAAOgAAIAINAAsMAgsgAkEDTQ0AIAIhBANAIAMgASgCADYCACABQQRqIQEgA0EEaiEDIARBfGoiBEEDSw0ACyACQQNxIQILIAJFDQADQCADIAEtAAA6AAAgA0EBaiEDIAFBAWohASACQX9qIgINAAsLIAAL8wICAn8BfgJAIAJFDQAgACACaiIDQX9qIAE6AAAgACABOgAAIAJBA0kNACADQX5qIAE6AAAgACABOgABIANBfWogAToAACAAIAE6AAIgAkEHSQ0AIANBfGogAToAACAAIAE6AAMgAkEJSQ0AIABBACAAa0EDcSIEaiIDIAFB/wFxQYGChAhsIgE2AgAgAyACIARrQXxxIgRqIgJBfGogATYCACAEQQlJDQAgAyABNgIIIAMgATYCBCACQXhqIAE2AgAgAkF0aiABNgIAIARBGUkNACADIAE2AhggAyABNgIUIAMgATYCECADIAE2AgwgAkFwaiABNgIAIAJBbGogATYCACACQWhqIAE2AgAgAkFkaiABNgIAIAQgA0EEcUEYciIEayICQSBJDQAgAa0iBUIghiAFhCEFIAMgBGohAQNAIAEgBTcDGCABIAU3AxAgASAFNwMIIAEgBTcDACABQSBqIQEgAkFgaiICQR9LDQALCyAACy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAIajYCACADCy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAFajYCACADCx8AIAAgASACKAIEEAg2AgAgARAEGiAAIAJBCGo2AgQLCAAgAGdBH3MLugUBDX8jAEEQayIKJAACfyAEQQNNBEAgCkEANgIMIApBDGogAyAEEAsaIAAgASACIApBDGpBBBAVIgBBbCAAEAMbIAAgACAESxsMAQsgAEEAIAEoAgBBAXRBAmoQECENQVQgAygAACIGQQ9xIgBBCksNABogAiAAQQVqNgIAIAMgBGoiAkF8aiEMIAJBeWohDiACQXtqIRAgAEEGaiELQQQh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ASIDNgLE4AEgACgCvOABIQQgACABNgK84AEgACABIAJqNgK44AEgACABIAQgA2tqNgLA4AELpgEBAX8gACAAKALs4QEQFjYCyOABIABCADcD+OABIABCADcDuOABIABBwOABakIANwMAIABBqNAAaiIBQYyAgOAANgIAIABBADYCmOIBIABCADcDiOEBIABCAzcDgOEBIABBrNABakHgEikCADcCACAAQbTQAWpB6BIoAgA2AgAgACABNgIMIAAgAEGYIGo2AgggACAAQaAwajYCBCAAIABBEGo2AgALYQEBf0G4fyEDAkAgAUEDSQ0AIAIgABAhIgFBA3YiADYCCCACIAFBAXE2AgQgAiABQQF2QQNxIgM2AgACQCADQX9qIgFBAksNAAJAIAFBAWsOAgEAAgtBbA8LIAAhAwsgAwsMACAAIAEgAkEAEC4LiAQCA38CfiADEBYhBCAAQQBBKBAQIQAgBCACSwRAIAQPCyABRQRAQX8PCwJAAkAgA0EBRg0AIAEoAAAiBkGo6r5pRg0AQXYhAyAGQXBxQdDUtMIBRw0BQQghAyACQQhJDQEgAEEAQSgQECEAIAEoAAQhASAAQQE2AhQgACABrTcDAEEADwsgASACIAMQLyIDIAJLDQAgACADNgIYQXIhAyABIARqIgVBf2otAAAiAkEIcQ0AIAJBIHEiBkUEQEFwIQMgBS0AACIFQacBSw0BIAVBB3GtQgEgBUEDdkEKaq2GIgdCA4h+IAd8IQggBEEBaiEECyACQQZ2IQMgAkECdiEFAkAgAkEDcUF/aiICQQJLBEBBACECDAELAkACQAJAIAJBAWsOAgECAAsgASAEai0AACECIARBAWohBAwCCyABIARqLwAAIQIgBEECaiEEDAELIAEgBGooAAAhAiAEQQRqIQQLIAVBAXEhBQJ+AkACQAJAIANBf2oiA0ECTQRAIANBAWsOAgIDAQtCfyAGRQ0DGiABIARqMQAADAMLIAEgBGovAACtQoACfAwCCyABIARqKAAArQwBCyABIARqKQAACyEHIAAgBTYCICAAIAI2AhwgACAHNwMAQQAhAyAAQQA2AhQgACAHIAggBhsiBzcDCCAAIAdCgIAIIAdCgIAIVBs+AhALIAMLWwEBf0G4fyEDIAIQFiICIAFNBH8gACACakF/ai0AACIAQQNxQQJ0QaAeaigC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C0Egak8NAQsgByAHKQNoNwMQIAcgBykDYDcDCCAEIA0gB0EIaiAHQdwAaiAPIA4gESAQEB4hCwwBCyACIARqIQggBCAKEAcgAkERTwRAIARBEGohAgNAIAIgCkEQaiIKEAcgAkEQaiICIAhJDQALCyAIIAlrIQIgByATNgJcIAkgCCAOa0sEQCAJIAggEWtLBEBBbCELDAILIBAgAiAOayICaiIKIANqIBBNBEAgCCAKIAMQDxoMAgsgCCAKQQAgAmsQDyEIIAcgAiADaiIDNgJkIAggAmshCCAOIQILIAlBEE8EQCADIAhqIQMDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALDAELAkAgCUEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgCUECdCIDQcAeaigCAGoiAhAXIAIgA0HgHmooAgBrIQIgBygCZCEDDAELIAggAhAMCyADQQlJDQAgAyAIaiEDIAhBCGoiCCACQQhqIgJrQQ9MBEADQCAIIAIQDCACQQhqIQIgCEEIaiIIIANJDQAMAgALAAsDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALCyAHQRhqEAQaIAsgDCALEAMiAhshDCAEIAQgC2ogAhshBCAFQX9qIgUNAAsgDBADDQFBbCEMIAdBGGoQBEECSQ0BQQAhCANAIAhBA0cEQCAAIAhBAnQiAmpBrNABaiACIAdqKAJENgIAIAhBAWohCAwBCwsgBygCXCEIC0G6fyEMIA8gCGsiACANIARrSw0AIAQEfyAEIAggABALIABqBUEACyABayEMCyAHQfAAaiQAIAwLkRcCFn8FfiMAQdABayIHJAAgByAAKALw4QEiCDYCvAEgASACaiESIAggACgCgOIBaiETAkACQCAFRQRAIAEhAwwBCyAAKALE4AEhESAAKALA4AEhFSAAKAK84AEhDyAAQQE2AozhAUEAIQgDQCAIQQNHBEAgByAIQQJ0IgJqIAAgAmpBrNABaigCADYCVCAIQQFqIQgMAQsLIAcgETYCZCAHIA82AmAgByABIA9rNgJoQWwhECAHQShqIAMgBBAGEAMNASAFQQQgBUEESBshFyAHQTxqIAdBKGogACgCABATIAdBxABqIAdBKGogACgCCBATIAdBzABqIAdB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IAdB0AFqJAAgEAslACAAQgA3AgAgAEEAOwEIIABBADoACyAAIAE2AgwgACACOgAKC7QFAQN/IwBBMGsiBCQAIABB/wFqIgVBfWohBgJAIAMvAQIEQCAEQRhqIAEgAhAGIgIQAw0BIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahASOgAAIAMgBEEIaiAEQRhqEBI6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0FIAEgBEEQaiAEQRhqEBI6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBSABIARBCGogBEEYahASOgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEjoAACABIAJqIABrIQIMAwsgAyAEQRBqIARBGGoQEjoAAiADIARBCGogBEEYahASOgADIANBBGohAwwAAAsACyAEQRhqIAEgAhAGIgIQAw0AIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahAROgAAIAMgBEEIaiAEQRhqEBE6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0EIAEgBEEQaiAEQRhqEBE6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBCABIARBCGogBEEYahAROgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEToAACABIAJqIABrIQIMAgsgAyAEQRBqIARBGGoQEToAAiADIARBCGogBEEYahAROgADIANBBGohAwwAAAsACyAEQTBqJAAgAgtpAQF/An8CQAJAIAJBB00NACABKAAAQbfIwuF+Rw0AIAAgASgABDYCmOIBQWIgAEEQaiABIAIQPiIDEAMNAhogAEKBgICAEDcDiOEBIAAgASADaiACIANrECoMAQsgACABIAIQKgtBAAsLrQMBBn8jAEGAAWsiAyQAQWIhCAJAIAJBCUkNACAAQZjQAGogAUEIaiIEIAJBeGogAEGY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wOABCwutAgIEfwF+IwBBQGoiBCQAAkACQCACQQhJDQAgASgAAEFwcUHQ1LTCAUcNACABIAIQIiEBIABCADcDCCAAQQA2AgQgACABNgIADAELIARBGGogASACEC0iAxADBEAgACADEBoMAQsgAwRAIABBuH8QGgwBCyACIAQoAjAiA2shAiABIANqIQMDQAJAIAAgAyACIARBCGoQLCIFEAMEfyAFBSACIAVBA2oiBU8NAUG4fwsQGgwCCyAGQQFqIQYgAiAFayECIAMgBWohAyAEKAIMRQ0ACyAEKAI4BEAgAkEDTQRAIABBuH8QGgwCCyADQQRqIQMLIAQoAighAiAEKQMYIQcgAEEANgIEIAAgAyABazYCACAAIAIgBmytIAcgB0J/URs3AwgLIARBQGskAAslAQF/IwBBEGsiAiQAIAIgACABEFEgAigCACEAIAJBEGokACAAC30BBH8jAEGQBGsiBCQAIARB/wE2AggCQCAEQRBqIARBCGogBEEMaiABIAIQFSIGEAMEQCAGIQUMAQtBVCEFIAQoAgwiB0EGSw0AIAMgBEEQaiAEKAIIIAcQQSIFEAMNACAAIAEgBmogAiAGayADEDwhBQsgBEGQBGokACAFC4cBAgJ/An5BABAWIQMCQANAIAEgA08EQAJAIAAoAABBcHFB0NS0wgFGBEAgACABECIiAhADRQ0BQn4PCyAAIAEQVSIEQn1WDQMgBCAFfCIFIARUIQJCfiEEIAINAyAAIAEQUiICEAMNAwsgASACayEBIAAgAmohAAwBCwtCfiAFIAEbIQQLIAQLPwIBfwF+IwBBMGsiAiQAAn5CfiACQQhqIAAgARAtDQAaQgAgAigCHEEBRg0AGiACKQMICyEDIAJBMGokACADC40BAQJ/IwBBMGsiASQAAkAgAEUNACAAKAKI4gENACABIABB/OEBaigCADYCKCABIAApAvThATcDICAAEDAgACgCqOIBIQIgASABKAIoNgIYIAEgASkDIDcDECACIAFBEGoQGyAAQQA2AqjiASABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALKgECfyMAQRBrIgAkACAAQQA2AgggAEIANwMAIAAQWCEBIABBEGokACABC4cBAQN/IwBBEGsiAiQAAkAgACgCAEUgACgCBEVzDQAgAiAAKAIINgIIIAIgACkCADcDAAJ/IAIoAgAiAQRAIAIoAghBqOMJIAERBQAMAQtBqOMJECgLIgFFDQAgASAAKQIANwL04QEgAUH84QFqIAAoAgg2AgAgARBZIAEhAwsgAkEQaiQAIAMLywEBAn8jAEEgayIBJAAgAEGBgIDAADYCtOIBIABBADYCiOIBIABBADYC7OEBIABCADcDkOIBIABBADYCpOMJIABBADYC3OIBIABCADcCzOIBIABBADYCvOIBIABBADYCxOABIABCADcCnOIBIABBpOIBakIANwIAIABBrOIBakEANgIAIAFCADcCECABQgA3AhggASABKQMYNwMIIAEgASkDEDcDACABKAIIQQh2QQFxIQIgAEEANgLg4gEgACACNgKM4gEgAUEgaiQAC3YBA38jAEEwayIBJAAgAARAIAEgAEHE0AFqIgIoAgA2AiggASAAKQK80AE3AyAgACgCACEDIAEgAigCADYCGCABIAApArzQATcDECADIAFBEGoQGyABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALzAEBAX8gACABKAK00AE2ApjiASAAIAEoAgQiAjYCwOABIAAgAjYCvOABIAAgAiABKAIIaiICNgK44AEgACACNgLE4AEgASgCuNABBEAgAEKBgICAEDcDiOEBIAAgAUGk0ABqNgIMIAAgAUGUIGo2AgggACABQZwwajYCBCAAIAFBDGo2AgAgAEGs0AFqIAFBqNABaigCADYCACAAQbDQAWogAUGs0AFqKAIANgIAIABBtNABaiABQbDQAWooAgA2AgAPCyAAQgA3A4jhAQs7ACACRQRAQbp/DwsgBEUEQEFsDwsgAiAEEGAEQCAAIAEgAiADIAQgBRBhDwsgACABIAIgAyAEIAUQZQtGAQF/IwBBEGsiBSQAIAVBCGogBBAOAn8gBS0ACQRAIAAgASACIAMgBBAyDAELIAAgASACIAMgBBA0CyEAIAVBEGokACAACzQAIAAgAyAEIAUQNiIFEAMEQCAFDwsgBSAESQR/IAEgAiADIAVqIAQgBWsgABA1BUG4fwsLRgEBfyMAQRBrIgUkACAFQQhqIAQQDgJ/IAUtAAkEQCAAIAEgAiADIAQQYgwBCyAAIAEgAiADIAQQNQshACAFQRBqJAAgAAtZAQF/QQ8hAiABIABJBEAgAUEE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",vD=new WeakMap;let PD=0,ZD;class YB extends iC{constructor(A){super(A),this.transcoderPath="",this.transcoderBinary=null,this.transcoderPending=null,this.workerPool=new mT,this.workerSourceURL="",this.workerConfig=null,typeof MSC_TRANSCODER<"u"&&console.warn('THREE.KTX2Loader: Please update to latest "basis_transcoder". "msc_basis_transcoder" is no longer supported in three.js r125+.')}setTranscoderPath(A){return this.transcoderPath=A,this}setWorkerLimit(A){return this.workerPool.setWorkerLimit(A),this}detectSupport(A){return A.isWebGPURenderer===!0?this.workerConfig={astcSupported:A.hasFeature("texture-compression-astc"),etc1Supported:!1,etc2Supported:A.hasFeature("texture-compression-etc2"),dxtSupported:A.hasFeature("texture-compression-bc"),bptcSupported:!1,pvrtcSupported:!1}:(this.workerConfig={astcSupported:A.extensions.has("WEBGL_compressed_texture_astc"),etc1Supported:A.extensions.has("WEBGL_compressed_texture_etc1"),etc2Supported:A.extensions.has("WEBGL_compressed_texture_etc"),dxtSupported:A.extensions.has("WEBGL_compressed_texture_s3tc"),bptcSupported:A.extensions.has("EXT_texture_compression_bptc"),pvrtcSupported:A.extensions.has("WEBGL_compressed_texture_pvrtc")||A.extensions.has("WEBKIT_WEBGL_compressed_texture_pvrtc")},A.capabilities.isWebGL2&&(this.workerConfig.etc1Supported=!1)),this}init(){if(!this.transcoderPending){const A=new CC(this.manager);A.setPath(this.transcoderPath),A.setWithCredentials(this.withCredentials);const I=A.loadAsync("basis_transcoder.js"),g=new CC(this.manager);g.setPath(this.transcoderPath),g.setResponseType("arraybuffer"),g.setWithCredentials(this.withCredentials);const C=g.loadAsync("basis_transcoder.wasm");this.transcoderPending=Promise.all([I,C]).then(([B,i])=>{const E=YB.BasisWorker.toString(),e=["/* constants */","let _EngineFormat = "+JSON.stringify(YB.EngineFormat),"let _TranscoderFormat = "+JSON.stringify(YB.TranscoderFormat),"let _BasisFormat = "+JSON.stringify(YB.BasisFormat),"/* basis_transcoder.js */",B,"/* worker */",E.substring(E.indexOf("{")+1,E.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([e])),this.transcoderBinary=i,this.workerPool.setWorkerCreator(()=>{const t=new Worker(this.workerSourceURL),s=this.transcoderBinary.slice(0);return t.postMessage({type:"init",config:this.workerConfig,transcoderBinary:s},[s]),t})}),PD>0&&console.warn("THREE.KTX2Loader: Multiple active KTX2 loaders may cause performance issues. Use a single KTX2Loader instance, or call .dispose() on old instances."),PD++}return this.transcoderPending}load(A,I,g,C){if(this.workerConfig===null)throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");const B=new CC(this.manager);B.setResponseType("arraybuffer"),B.setWithCredentials(this.withCredentials),B.load(A,i=>{if(vD.has(i))return vD.get(i).promise.then(I).catch(C);this._createTexture(i).then(E=>I?I(E):null).catch(C)},g,C)}_createTextureFrom(A,I){const{mipmaps:g,width:C,height:B,format:i,type:E,error:e,dfdTransferFn:t,dfdFlags:s}=A;if(E==="error")return Promise.reject(e);const n=I.layerCount>1?new ck(g,C,B,I.layerCount,i,gC):new Fs(g,C,B,i,gC);return n.minFilter=g.length===1?Bg:SB,n.magFilter=Bg,n.generateMipmaps=!1,n.needsUpdate=!0,n.colorSpace=t===OT?QI:bB,n.premultiplyAlpha=!!(s&xT),n}async _createTexture(A,I={}){const g=ZT(new Uint8Array(A));if(g.vkFormat!==vT)return jT(g);const C=I,B=this.init().then(()=>this.workerPool.postMessage({type:"transcode",buffer:A,taskConfig:C},[A])).then(i=>this._createTextureFrom(i.data,g));return vD.set(A,{promise:B}),B}dispose(){return this.workerPool.dispose(),this.workerSourceURL&&URL.revokeObjectURL(this.workerSourceURL),PD--,this}}YB.BasisFormat={ETC1S:0,UASTC_4x4:1};YB.TranscoderFormat={ETC1:0,ETC2:1,BC1:2,BC3:3,BC4:4,BC5:5,BC7_M6_OPAQUE_ONLY:6,BC7_M5:7,PVRTC1_4_RGB:8,PVRTC1_4_RGBA:9,ASTC_4x4:10,ATC_RGB:11,ATC_RGBA_INTERPOLATED_ALPHA:12,RGBA32:13,RGB565:14,BGR565:15,RGBA4444:16};YB.EngineFormat={RGBAFormat:Og,RGBA_ASTC_4x4_Format:$a,RGBA_BPTC_Format:Qe,RGBA_ETC2_EAC_Format:za,RGBA_PVRTC_4BPPV1_Format:Va,RGBA_S3TC_DXT5_Format:Be,RGB_ETC1_Format:oh,RGB_ETC2_Format:Xa,RGB_PVRTC_4BPPV1_Format:ja,RGB_S3TC_DXT1_Format:Ce};YB.BasisWorker=function(){let Q,A,I;const g=_EngineFormat,C=_TranscoderFormat,B=_BasisFormat;self.addEventListener("message",function(w){const G=w.data;switch(G.type){case"init":Q=G.config,i(G.transcoderBinary);break;case"transcode":A.then(()=>{try{const{width:l,height:c,hasAlpha:k,mipmaps:y,format:M,dfdTransferFn:N,dfdFlags:R}=E(G.buffer),d=[];for(let L=0;L<y.length;++L)d.push(y[L].data.buffer);self.postMessage({type:"transcode",id:G.id,width:l,height:c,hasAlpha:k,mipmaps:y,format:M,dfdTransferFn:N,dfdFlags:R},d)}catch(l){console.error(l),self.postMessage({type:"error",id:G.id,error:l.message})}});break}});function i(w){A=new Promise(G=>{I={wasmBinary:w,onRuntimeInitialized:G},BASIS(I)}).then(()=>{I.initializeBasis(),I.KTX2File===void 0&&console.warn("THREE.KTX2Loader: Please update Basis Universal transcoder.")})}function E(w){const G=new I.KTX2File(new Uint8Array(w));function l(){G.close(),G.delete()}if(!G.isValid())throw l(),new Error("THREE.KTX2Loader:	Invalid or unsupported .ktx2 file");const c=G.isUASTC()?B.UASTC_4x4:B.ETC1S,k=G.getWidth(),y=G.getHeight(),M=G.getLayers()||1,N=G.getLevels(),R=G.getHasAlpha(),d=G.getDFDTransferFunc(),L=G.getDFDFlags(),{transcoderFormat:F,engineFormat:u}=n(c,k,y,R);if(!k||!y||!N)throw l(),new Error("THREE.KTX2Loader:	Invalid texture");if(!G.startTranscoding())throw l(),new Error("THREE.KTX2Loader: .startTranscoding failed");const W=[];for(let $=0;$<N;$++){const H=[];let v,IA;for(let oA=0;oA<M;oA++){const gA=G.getImageLevelInfo($,oA,0);v=gA.origWidth<4?gA.origWidth:gA.width,IA=gA.origHeight<4?gA.origHeight:gA.height;const iA=new Uint8Array(G.getImageTranscodedSizeInBytes($,oA,0,F));if(!G.transcodeImage(iA,$,oA,0,F,0,-1,-1))throw l(),new Error("THREE.KTX2Loader: .transcodeImage failed.");H.push(iA)}W.push({data:r(H),width:v,height:IA})}return l(),{width:k,height:y,hasAlpha:R,mipmaps:W,format:u,dfdTransferFn:d,dfdFlags:L}}const e=[{if:"astcSupported",basisFormat:[B.UASTC_4x4],transcoderFormat:[C.ASTC_4x4,C.ASTC_4x4],engineFormat:[g.RGBA_ASTC_4x4_Format,g.RGBA_ASTC_4x4_Format],priorityETC1S:1/0,priorityUASTC:1,needsPowerOfTwo:!1},{if:"bptcSupported",basisFormat:[B.ETC1S,B.UASTC_4x4],transcoderFormat:[C.BC7_M5,C.BC7_M5],engineFormat:[g.RGBA_BPTC_Format,g.RGBA_BPTC_Format],priorityETC1S:3,priorityUASTC:2,needsPowerOfTwo:!1},{if:"dxtSupported",basisFormat:[B.ETC1S,B.UASTC_4x4],transcoderFormat:[C.BC1,C.BC3],engineFormat:[g.RGB_S3TC_DXT1_Format,g.RGBA_S3TC_DXT5_Format],priorityETC1S:4,priorityUASTC:5,needsPowerOfTwo:!1},{if:"etc2Supported",basisFormat:[B.ETC1S,B.UASTC_4x4],transcoderFormat:[C.ETC1,C.ETC2],engineFormat:[g.RGB_ETC2_Format,g.RGBA_ETC2_EAC_Format],priorityETC1S:1,priorityUASTC:3,needsPowerOfTwo:!1},{if:"etc1Supported",basisFormat:[B.ETC1S,B.UASTC_4x4],transcoderFormat:[C.ETC1],engineFormat:[g.RGB_ETC1_Format],priorityETC1S:2,priorityUASTC:4,needsPowerOfTwo:!1},{if:"pvrtcSupported",basisFormat:[B.ETC1S,B.UASTC_4x4],transcoderFormat:[C.PVRTC1_4_RGB,C.PVRTC1_4_RGBA],engineFormat:[g.RGB_PVRTC_4BPPV1_Format,g.RGBA_PVRTC_4BPPV1_Format],priorityETC1S:5,priorityUASTC:6,needsPowerOfTwo:!0}],t=e.sort(function(w,G){return w.priorityETC1S-G.priorityETC1S}),s=e.sort(function(w,G){return w.priorityUASTC-G.priorityUASTC});function n(w,G,l,c){let k,y;const M=w===B.ETC1S?t:s;for(let N=0;N<M.length;N++){const R=M[N];if(Q[R.if]&&R.basisFormat.includes(w)&&!(c&&R.transcoderFormat.length<2)&&!(R.needsPowerOfTwo&&!(D(G)&&D(l))))return k=R.transcoderFormat[c?1:0],y=R.engineFormat[c?1:0],{transcoderFormat:k,engineFormat:y}}return console.warn("THREE.KTX2Loader: No suitable compressed texture format found. Decoding to RGBA32."),k=C.RGBA32,y=g.RGBAFormat,{transcoderFormat:k,engineFormat:y}}function D(w){return w<=2?!0:(w&w-1)===0&&w!==0}function r(w){let G=0;for(let k=0;k<w.length;k++){const y=w[k];G+=y.byteLength}const l=new Uint8Array(G);let c=0;for(let k=0;k<w.length;k++){const y=w[k];l.set(y,c),c+=y.byteLength}return l}};const bS={[IU]:Og,[zM]:Og,[jM]:Og,[cc]:Og,[AU]:mE,[XM]:mE,[_M]:mE,[hc]:mE,[$M]:HE,[VM]:HE,[rc]:HE,[WM]:HE},WD={[IU]:YC,[zM]:mB,[jM]:gC,[cc]:gC,[AU]:YC,[XM]:mB,[_M]:gC,[hc]:gC,[$M]:YC,[VM]:mB,[rc]:gC,[WM]:gC},_T={[cc]:QI,[hc]:QI,[rc]:QI};async function jT(Q){const{vkFormat:A,pixelWidth:I,pixelHeight:g,pixelDepth:C}=Q;if(bS[A]===void 0)throw new Error("THREE.KTX2Loader: Unsupported vkFormat.");const B=Q.levels[0];let i,E;if(Q.supercompressionScheme===bT)i=B.levelData;else if(Q.supercompressionScheme===TT)ZD||(ZD=new Promise(async t=>{const s=new WT;await s.init(),t(s)})),i=(await ZD).decode(B.levelData,B.uncompressedByteLength);else throw new Error("THREE.KTX2Loader: Unsupported supercompressionScheme.");WD[A]===YC?E=new Float32Array(i.buffer,i.byteOffset,i.byteLength/Float32Array.BYTES_PER_ELEMENT):WD[A]===mB?E=new Uint16Array(i.buffer,i.byteOffset,i.byteLength/Uint16Array.BYTES_PER_ELEMENT):E=i;const e=C===0?new Yi(E,I,g):new Gs(E,I,g,C);return e.type=WD[A],e.format=bS[A],e.colorSpace=_T[A]||bB,e.needsUpdate=!0,Promise.resolve(e)}const VT=Q=>{const A={nodes:{},materials:{}};return Q&&Q.traverse(I=>{I.name&&(A.nodes[I.name]=I),I.material&&!A.materials[I.material.name]&&(A.materials[I.material.name]=I.material)}),A};function gU(Q,A){const{renderer:I}=ji(),g=typeof Q=="string"?A:Q,C=QM(ET,{extend(E){if(g!=null&&g.useDraco){const e=typeof g.useDraco=="string"?g.useDraco:"https://www.gstatic.com/draco/versioned/decoders/1.4.3/",t=new QT().setDecoderPath(e);E.setDRACOLoader(t)}if(g!=null&&g.useMeshopt&&E.setMeshoptDecoder(BT),g!=null&&g.ktxTranscoderPath&&I){const e=new YB;e.setTranscoderPath(g==null?void 0:g.ktxTranscoderPath),e.detectSupport(I),E.setKTX2Loader(e)}}}),B=E=>C.load(E,{transform(e){return{...e,...VT(e.scene)}}}),i=typeof Q=="string"?Q:void 0;return i?B(i):{load:B}}const TS=(Q,A)=>QM(Yh,A).load(Q);new f;new f;new f;var zo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},as={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */as.exports;(function(Q,A){(function(){var I,g="4.17.21",C=200,B="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",i="Expected a function",E="Invalid `variable` option passed into `_.template`",e="__lodash_hash_undefined__",t=500,s="__lodash_placeholder__",n=1,D=2,r=4,w=1,G=2,l=1,c=2,k=4,y=8,M=16,N=32,R=64,d=128,L=256,F=512,u=30,W="...",$=800,H=16,v=1,IA=2,oA=3,gA=1/0,iA=9007199254740991,MA=17976931348623157e292,lA=0/0,mA=4294967295,FA=mA-1,EA=mA>>>1,GA=[["ary",d],["bind",l],["bindKey",c],["curry",y],["curryRight",M],["flip",F],["partial",N],["partialRight",R],["rearg",L]],RA="[object Arguments]",qA="[object Array]",P="[object AsyncFunction]",AI="[object Boolean]",II="[object Date]",KA="[object DOMException]",vA="[object Error]",SA="[object Function]",sA="[object GeneratorFunction]",hA="[object Map]",YA="[object Number]",JA="[object Null]",WA="[object Object]",gI="[object Promise]",$A="[object Proxy]",tI="[object RegExp]",nI="[object Set]",m="[object String]",q="[object Symbol]",QA="[object Undefined]",yA="[object WeakMap]",NA="[object WeakSet]",dA="[object ArrayBuffer]",T="[object DataView]",DA="[object Float32Array]",CA="[object Float64Array]",pA="[object Int8Array]",xA="[object Int16Array]",jA="[object Int32Array]",HA="[object Uint8Array]",ZA="[object Uint8ClampedArray]",aI="[object Uint16Array]",cI="[object Uint32Array]",ig=/\b__p \+= '';/g,Z=/\b(__p \+=) '' \+/g,eA=/(__e\(.*?\)|\b__t\)) \+\n'';/g,UA=/&(?:amp|lt|gt|quot|#39);/g,TA=/[&<>"']/g,zA=RegExp(UA.source),_I=RegExp(TA.source),jI=/<%-([\s\S]+?)%>/g,bg=/<%([\s\S]+?)%>/g,oB=/<%=([\s\S]+?)%>/g,Eg=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,cC=/^\w*$/,TC=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,kQ=/[\\^$.*+?()[\]{}|]/g,Qt=RegExp(kQ.source),wo=/^\s+/,Ps=/\s/,Zs=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Y=/\{\n\/\* \[wrapped with (.+)\] \*/,AA=/,? & /,tA=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,z=/[()=,{}\[\]\/\s]/,nA=/\\(\\)?/g,CI=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,BI=/\w*$/,DI=/^[-+]0x[0-9a-f]+$/i,wI=/^0b[01]+$/i,UI=/^\[object .+?Constructor\]$/,NI=/^0o[0-7]+$/i,FI=/^(?:0|[1-9]\d*)$/,PI=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Kg=/($^)/,UC=/['\n\r\u2028\u2029\\]/g,xC="\\ud800-\\udfff",Dg="\\u0300-\\u036f",fI="\\ufe20-\\ufe2f",lo="\\u20d0-\\u20ff",yg=Dg+fI+lo,FB="\\u2700-\\u27bf",Go="a-z\\xdf-\\xf6\\xf8-\\xff",Bi="\\xac\\xb1\\xd7\\xf7",So="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",vg="\\u2000-\\u206f",WB=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Vi="A-Z\\xc0-\\xd6\\xd8-\\xde",Vg="\\ufe0e\\ufe0f",Xi=Bi+So+vg+WB,yo="['’]",it="["+xC+"]",Gc="["+Xi+"]",Et="["+yg+"]",Sc="\\d+",QU="["+FB+"]",yc="["+Go+"]",kc="[^"+xC+Xi+Sc+FB+Go+Vi+"]",Ws="\\ud83c[\\udffb-\\udfff]",iU="(?:"+Et+"|"+Ws+")",Mc="[^"+xC+"]",_s="(?:\\ud83c[\\udde6-\\uddff]){2}",js="[\\ud800-\\udbff][\\udc00-\\udfff]",zi="["+Vi+"]",Uc="\\u200d",Nc="(?:"+yc+"|"+kc+")",EU="(?:"+zi+"|"+kc+")",Kc="(?:"+yo+"(?:d|ll|m|re|s|t|ve))?",Fc="(?:"+yo+"(?:D|LL|M|RE|S|T|VE))?",Rc=iU+"?",Jc="["+Vg+"]?",oU="(?:"+Uc+"(?:"+[Mc,_s,js].join("|")+")"+Jc+Rc+")*",eU="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",tU="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",dc=Jc+Rc+oU,aU="(?:"+[QU,_s,js].join("|")+")"+dc,sU="(?:"+[Mc+Et+"?",Et,_s,js,it].join("|")+")",nU=RegExp(yo,"g"),DU=RegExp(Et,"g"),Vs=RegExp(Ws+"(?="+Ws+")|"+sU+dc,"g"),rU=RegExp([zi+"?"+yc+"+"+Kc+"(?="+[Gc,zi,"$"].join("|")+")",EU+"+"+Fc+"(?="+[Gc,zi+Nc,"$"].join("|")+")",zi+"?"+Nc+"+"+Kc,zi+"+"+Fc,tU,eU,Sc,aU].join("|"),"g"),hU=RegExp("["+Uc+xC+yg+Vg+"]"),cU=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,wU=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],lU=-1,gg={};gg[DA]=gg[CA]=gg[pA]=gg[xA]=gg[jA]=gg[HA]=gg[ZA]=gg[aI]=gg[cI]=!0,gg[RA]=gg[qA]=gg[dA]=gg[AI]=gg[T]=gg[II]=gg[vA]=gg[SA]=gg[hA]=gg[YA]=gg[WA]=gg[tI]=gg[nI]=gg[m]=gg[yA]=!1;var Ag={};Ag[RA]=Ag[qA]=Ag[dA]=Ag[T]=Ag[AI]=Ag[II]=Ag[DA]=Ag[CA]=Ag[pA]=Ag[xA]=Ag[jA]=Ag[hA]=Ag[YA]=Ag[WA]=Ag[tI]=Ag[nI]=Ag[m]=Ag[q]=Ag[HA]=Ag[ZA]=Ag[aI]=Ag[cI]=!0,Ag[vA]=Ag[SA]=Ag[yA]=!1;var GU={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},SU={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},yU={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},kU={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},MU=parseFloat,UU=parseInt,pc=typeof zo=="object"&&zo&&zo.Object===Object&&zo,NU=typeof self=="object"&&self&&self.Object===Object&&self,Pg=pc||NU||Function("return this")(),Xs=A&&!A.nodeType&&A,Qi=Xs&&!0&&Q&&!Q.nodeType&&Q,qc=Qi&&Qi.exports===Xs,zs=qc&&pc.process,OC=function(){try{var _=Qi&&Qi.require&&Qi.require("util").types;return _||zs&&zs.binding&&zs.binding("util")}catch{}}(),fc=OC&&OC.isArrayBuffer,uc=OC&&OC.isDate,Lc=OC&&OC.isMap,Yc=OC&&OC.isRegExp,Hc=OC&&OC.isSet,mc=OC&&OC.isTypedArray;function NC(_,aA,BA){switch(BA.length){case 0:return _.call(aA);case 1:return _.call(aA,BA[0]);case 2:return _.call(aA,BA[0],BA[1]);case 3:return _.call(aA,BA[0],BA[1],BA[2])}return _.apply(aA,BA)}function KU(_,aA,BA,OA){for(var rI=-1,vI=_==null?0:_.length;++rI<vI;){var dg=_[rI];aA(OA,dg,BA(dg),_)}return OA}function vC(_,aA){for(var BA=-1,OA=_==null?0:_.length;++BA<OA&&aA(_[BA],BA,_)!==!1;);return _}function FU(_,aA){for(var BA=_==null?0:_.length;BA--&&aA(_[BA],BA,_)!==!1;);return _}function bc(_,aA){for(var BA=-1,OA=_==null?0:_.length;++BA<OA;)if(!aA(_[BA],BA,_))return!1;return!0}function MQ(_,aA){for(var BA=-1,OA=_==null?0:_.length,rI=0,vI=[];++BA<OA;){var dg=_[BA];aA(dg,BA,_)&&(vI[rI++]=dg)}return vI}function ot(_,aA){var BA=_==null?0:_.length;return!!BA&&$i(_,aA,0)>-1}function $s(_,aA,BA){for(var OA=-1,rI=_==null?0:_.length;++OA<rI;)if(BA(aA,_[OA]))return!0;return!1}function Qg(_,aA){for(var BA=-1,OA=_==null?0:_.length,rI=Array(OA);++BA<OA;)rI[BA]=aA(_[BA],BA,_);return rI}function UQ(_,aA){for(var BA=-1,OA=aA.length,rI=_.length;++BA<OA;)_[rI+BA]=aA[BA];return _}function An(_,aA,BA,OA){var rI=-1,vI=_==null?0:_.length;for(OA&&vI&&(BA=_[++rI]);++rI<vI;)BA=aA(BA,_[rI],rI,_);return BA}function RU(_,aA,BA,OA){var rI=_==null?0:_.length;for(OA&&rI&&(BA=_[--rI]);rI--;)BA=aA(BA,_[rI],rI,_);return BA}function In(_,aA){for(var BA=-1,OA=_==null?0:_.length;++BA<OA;)if(aA(_[BA],BA,_))return!0;return!1}var JU=gn("length");function dU(_){return _.split("")}function pU(_){return _.match(tA)||[]}function Tc(_,aA,BA){var OA;return BA(_,function(rI,vI,dg){if(aA(rI,vI,dg))return OA=vI,!1}),OA}function et(_,aA,BA,OA){for(var rI=_.length,vI=BA+(OA?1:-1);OA?vI--:++vI<rI;)if(aA(_[vI],vI,_))return vI;return-1}function $i(_,aA,BA){return aA===aA?vU(_,aA,BA):et(_,xc,BA)}function qU(_,aA,BA,OA){for(var rI=BA-1,vI=_.length;++rI<vI;)if(OA(_[rI],aA))return rI;return-1}function xc(_){return _!==_}function Oc(_,aA){var BA=_==null?0:_.length;return BA?Bn(_,aA)/BA:lA}function gn(_){return function(aA){return aA==null?I:aA[_]}}function Cn(_){return function(aA){return _==null?I:_[aA]}}function vc(_,aA,BA,OA,rI){return rI(_,function(vI,dg,$I){BA=OA?(OA=!1,vI):aA(BA,vI,dg,$I)}),BA}function fU(_,aA){var BA=_.length;for(_.sort(aA);BA--;)_[BA]=_[BA].value;return _}function Bn(_,aA){for(var BA,OA=-1,rI=_.length;++OA<rI;){var vI=aA(_[OA]);vI!==I&&(BA=BA===I?vI:BA+vI)}return BA}function Qn(_,aA){for(var BA=-1,OA=Array(_);++BA<_;)OA[BA]=aA(BA);return OA}function uU(_,aA){return Qg(aA,function(BA){return[BA,_[BA]]})}function Pc(_){return _&&_.slice(0,jc(_)+1).replace(wo,"")}function KC(_){return function(aA){return _(aA)}}function En(_,aA){return Qg(aA,function(BA){return _[BA]})}function ko(_,aA){return _.has(aA)}function Zc(_,aA){for(var BA=-1,OA=_.length;++BA<OA&&$i(aA,_[BA],0)>-1;);return BA}function Wc(_,aA){for(var BA=_.length;BA--&&$i(aA,_[BA],0)>-1;);return BA}function LU(_,aA){for(var BA=_.length,OA=0;BA--;)_[BA]===aA&&++OA;return OA}var YU=Cn(GU),HU=Cn(SU);function mU(_){return"\\"+kU[_]}function bU(_,aA){return _==null?I:_[aA]}function AE(_){return hU.test(_)}function TU(_){return cU.test(_)}function xU(_){for(var aA,BA=[];!(aA=_.next()).done;)BA.push(aA.value);return BA}function on(_){var aA=-1,BA=Array(_.size);return _.forEach(function(OA,rI){BA[++aA]=[rI,OA]}),BA}function _c(_,aA){return function(BA){return _(aA(BA))}}function NQ(_,aA){for(var BA=-1,OA=_.length,rI=0,vI=[];++BA<OA;){var dg=_[BA];(dg===aA||dg===s)&&(_[BA]=s,vI[rI++]=BA)}return vI}function tt(_){var aA=-1,BA=Array(_.size);return _.forEach(function(OA){BA[++aA]=OA}),BA}function OU(_){var aA=-1,BA=Array(_.size);return _.forEach(function(OA){BA[++aA]=[OA,OA]}),BA}function vU(_,aA,BA){for(var OA=BA-1,rI=_.length;++OA<rI;)if(_[OA]===aA)return OA;return-1}function PU(_,aA,BA){for(var OA=BA+1;OA--;)if(_[OA]===aA)return OA;return OA}function IE(_){return AE(_)?WU(_):JU(_)}function eB(_){return AE(_)?_U(_):dU(_)}function jc(_){for(var aA=_.length;aA--&&Ps.test(_.charAt(aA)););return aA}var ZU=Cn(yU);function WU(_){for(var aA=Vs.lastIndex=0;Vs.test(_);)++aA;return aA}function _U(_){return _.match(Vs)||[]}function jU(_){return _.match(rU)||[]}var VU=function _(aA){aA=aA==null?Pg:gE.defaults(Pg.Object(),aA,gE.pick(Pg,wU));var BA=aA.Array,OA=aA.Date,rI=aA.Error,vI=aA.Function,dg=aA.Math,$I=aA.Object,en=aA.RegExp,XU=aA.String,PC=aA.TypeError,at=BA.prototype,zU=vI.prototype,CE=$I.prototype,st=aA["__core-js_shared__"],nt=zU.toString,VI=CE.hasOwnProperty,$U=0,Vc=function(){var o=/[^.]+$/.exec(st&&st.keys&&st.keys.IE_PROTO||"");return o?"Symbol(src)_1."+o:""}(),Dt=CE.toString,A0=nt.call($I),I0=Pg._,g0=en("^"+nt.call(VI).replace(kQ,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),rt=qc?aA.Buffer:I,KQ=aA.Symbol,ht=aA.Uint8Array,Xc=rt?rt.allocUnsafe:I,ct=_c($I.getPrototypeOf,$I),zc=$I.create,$c=CE.propertyIsEnumerable,wt=at.splice,Aw=KQ?KQ.isConcatSpreadable:I,Mo=KQ?KQ.iterator:I,ii=KQ?KQ.toStringTag:I,lt=function(){try{var o=ai($I,"defineProperty");return o({},"",{}),o}catch{}}(),C0=aA.clearTimeout!==Pg.clearTimeout&&aA.clearTimeout,B0=OA&&OA.now!==Pg.Date.now&&OA.now,Q0=aA.setTimeout!==Pg.setTimeout&&aA.setTimeout,Gt=dg.ceil,St=dg.floor,tn=$I.getOwnPropertySymbols,i0=rt?rt.isBuffer:I,Iw=aA.isFinite,E0=at.join,o0=_c($I.keys,$I),pg=dg.max,Xg=dg.min,e0=OA.now,t0=aA.parseInt,gw=dg.random,a0=at.reverse,an=ai(aA,"DataView"),Uo=ai(aA,"Map"),sn=ai(aA,"Promise"),BE=ai(aA,"Set"),No=ai(aA,"WeakMap"),Ko=ai($I,"create"),yt=No&&new No,QE={},s0=si(an),n0=si(Uo),D0=si(sn),r0=si(BE),h0=si(No),kt=KQ?KQ.prototype:I,Fo=kt?kt.valueOf:I,Cw=kt?kt.toString:I;function J(o){if(rg(o)&&!hI(o)&&!(o instanceof uI)){if(o instanceof ZC)return o;if(VI.call(o,"__wrapped__"))return Bl(o)}return new ZC(o)}var iE=function(){function o(){}return function(a){if(!og(a))return{};if(zc)return zc(a);o.prototype=a;var h=new o;return o.prototype=I,h}}();function Mt(){}function ZC(o,a){this.__wrapped__=o,this.__actions__=[],this.__chain__=!!a,this.__index__=0,this.__values__=I}J.templateSettings={escape:jI,evaluate:bg,interpolate:oB,variable:"",imports:{_:J}},J.prototype=Mt.prototype,J.prototype.constructor=J,ZC.prototype=iE(Mt.prototype),ZC.prototype.constructor=ZC;function uI(o){this.__wrapped__=o,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=mA,this.__views__=[]}function c0(){var o=new uI(this.__wrapped__);return o.__actions__=wC(this.__actions__),o.__dir__=this.__dir__,o.__filtered__=this.__filtered__,o.__iteratees__=wC(this.__iteratees__),o.__takeCount__=this.__takeCount__,o.__views__=wC(this.__views__),o}function w0(){if(this.__filtered__){var o=new uI(this);o.__dir__=-1,o.__filtered__=!0}else o=this.clone(),o.__dir__*=-1;return o}function l0(){var o=this.__wrapped__.value(),a=this.__dir__,h=hI(o),S=a<0,K=h?o.length:0,p=dN(0,K,this.__views__),b=p.start,x=p.end,j=x-b,cA=S?x:b-1,wA=this.__iteratees__,kA=wA.length,uA=0,VA=Xg(j,this.__takeCount__);if(!h||!S&&K==j&&VA==j)return Kw(o,this.__actions__);var oI=[];A:for(;j--&&uA<VA;){cA+=a;for(var SI=-1,eI=o[cA];++SI<kA;){var JI=wA[SI],HI=JI.iteratee,JC=JI.type,eC=HI(eI);if(JC==IA)eI=eC;else if(!eC){if(JC==v)continue A;break A}}oI[uA++]=eI}return oI}uI.prototype=iE(Mt.prototype),uI.prototype.constructor=uI;function Ei(o){var a=-1,h=o==null?0:o.length;for(this.clear();++a<h;){var S=o[a];this.set(S[0],S[1])}}function G0(){this.__data__=Ko?Ko(null):{},this.size=0}function S0(o){var a=this.has(o)&&delete this.__data__[o];return this.size-=a?1:0,a}function y0(o){var a=this.__data__;if(Ko){var h=a[o];return h===e?I:h}return VI.call(a,o)?a[o]:I}function k0(o){var a=this.__data__;return Ko?a[o]!==I:VI.call(a,o)}function M0(o,a){var h=this.__data__;return this.size+=this.has(o)?0:1,h[o]=Ko&&a===I?e:a,this}Ei.prototype.clear=G0,Ei.prototype.delete=S0,Ei.prototype.get=y0,Ei.prototype.has=k0,Ei.prototype.set=M0;function _B(o){var a=-1,h=o==null?0:o.length;for(this.clear();++a<h;){var S=o[a];this.set(S[0],S[1])}}function U0(){this.__data__=[],this.size=0}function N0(o){var a=this.__data__,h=Ut(a,o);if(h<0)return!1;var S=a.length-1;return h==S?a.pop():wt.call(a,h,1),--this.size,!0}function K0(o){var a=this.__data__,h=Ut(a,o);return h<0?I:a[h][1]}function F0(o){return Ut(this.__data__,o)>-1}function R0(o,a){var h=this.__data__,S=Ut(h,o);return S<0?(++this.size,h.push([o,a])):h[S][1]=a,this}_B.prototype.clear=U0,_B.prototype.delete=N0,_B.prototype.get=K0,_B.prototype.has=F0,_B.prototype.set=R0;function jB(o){var a=-1,h=o==null?0:o.length;for(this.clear();++a<h;){var S=o[a];this.set(S[0],S[1])}}function J0(){this.size=0,this.__data__={hash:new Ei,map:new(Uo||_B),string:new Ei}}function d0(o){var a=Yt(this,o).delete(o);return this.size-=a?1:0,a}function p0(o){return Yt(this,o).get(o)}function q0(o){return Yt(this,o).has(o)}function f0(o,a){var h=Yt(this,o),S=h.size;return h.set(o,a),this.size+=h.size==S?0:1,this}jB.prototype.clear=J0,jB.prototype.delete=d0,jB.prototype.get=p0,jB.prototype.has=q0,jB.prototype.set=f0;function oi(o){var a=-1,h=o==null?0:o.length;for(this.__data__=new jB;++a<h;)this.add(o[a])}function u0(o){return this.__data__.set(o,e),this}function L0(o){return this.__data__.has(o)}oi.prototype.add=oi.prototype.push=u0,oi.prototype.has=L0;function tB(o){var a=this.__data__=new _B(o);this.size=a.size}function Y0(){this.__data__=new _B,this.size=0}function H0(o){var a=this.__data__,h=a.delete(o);return this.size=a.size,h}function m0(o){return this.__data__.get(o)}function b0(o){return this.__data__.has(o)}function T0(o,a){var h=this.__data__;if(h instanceof _B){var S=h.__data__;if(!Uo||S.length<C-1)return S.push([o,a]),this.size=++h.size,this;h=this.__data__=new jB(S)}return h.set(o,a),this.size=h.size,this}tB.prototype.clear=Y0,tB.prototype.delete=H0,tB.prototype.get=m0,tB.prototype.has=b0,tB.prototype.set=T0;function Bw(o,a){var h=hI(o),S=!h&&ni(o),K=!h&&!S&&pQ(o),p=!h&&!S&&!K&&tE(o),b=h||S||K||p,x=b?Qn(o.length,XU):[],j=x.length;for(var cA in o)(a||VI.call(o,cA))&&!(b&&(cA=="length"||K&&(cA=="offset"||cA=="parent")||p&&(cA=="buffer"||cA=="byteLength"||cA=="byteOffset")||$B(cA,j)))&&x.push(cA);return x}function Qw(o){var a=o.length;return a?o[kn(0,a-1)]:I}function x0(o,a){return Ht(wC(o),ei(a,0,o.length))}function O0(o){return Ht(wC(o))}function nn(o,a,h){(h!==I&&!aB(o[a],h)||h===I&&!(a in o))&&VB(o,a,h)}function Ro(o,a,h){var S=o[a];(!(VI.call(o,a)&&aB(S,h))||h===I&&!(a in o))&&VB(o,a,h)}function Ut(o,a){for(var h=o.length;h--;)if(aB(o[h][0],a))return h;return-1}function v0(o,a,h,S){return FQ(o,function(K,p,b){a(S,K,h(K),b)}),S}function iw(o,a){return o&&JB(a,Tg(a),o)}function P0(o,a){return o&&JB(a,GC(a),o)}function VB(o,a,h){a=="__proto__"&&lt?lt(o,a,{configurable:!0,enumerable:!0,value:h,writable:!0}):o[a]=h}function Dn(o,a){for(var h=-1,S=a.length,K=BA(S),p=o==null;++h<S;)K[h]=p?I:_n(o,a[h]);return K}function ei(o,a,h){return o===o&&(h!==I&&(o=o<=h?o:h),a!==I&&(o=o>=a?o:a)),o}function WC(o,a,h,S,K,p){var b,x=a&n,j=a&D,cA=a&r;if(h&&(b=K?h(o,S,K,p):h(o)),b!==I)return b;if(!og(o))return o;var wA=hI(o);if(wA){if(b=qN(o),!x)return wC(o,b)}else{var kA=zg(o),uA=kA==SA||kA==sA;if(pQ(o))return Jw(o,x);if(kA==WA||kA==RA||uA&&!K){if(b=j||uA?{}:jw(o),!x)return j?yN(o,P0(b,o)):SN(o,iw(b,o))}else{if(!Ag[kA])return K?o:{};b=fN(o,kA,x)}}p||(p=new tB);var VA=p.get(o);if(VA)return VA;p.set(o,b),Ml(o)?o.forEach(function(eI){b.add(WC(eI,a,h,eI,o,p))}):yl(o)&&o.forEach(function(eI,JI){b.set(JI,WC(eI,a,h,JI,o,p))});var oI=cA?j?fn:qn:j?GC:Tg,SI=wA?I:oI(o);return vC(SI||o,function(eI,JI){SI&&(JI=eI,eI=o[JI]),Ro(b,JI,WC(eI,a,h,JI,o,p))}),b}function Z0(o){var a=Tg(o);return function(h){return Ew(h,o,a)}}function Ew(o,a,h){var S=h.length;if(o==null)return!S;for(o=$I(o);S--;){var K=h[S],p=a[K],b=o[K];if(b===I&&!(K in o)||!p(b))return!1}return!0}function ow(o,a,h){if(typeof o!="function")throw new PC(i);return Yo(function(){o.apply(I,h)},a)}function Jo(o,a,h,S){var K=-1,p=ot,b=!0,x=o.length,j=[],cA=a.length;if(!x)return j;h&&(a=Qg(a,KC(h))),S?(p=$s,b=!1):a.length>=C&&(p=ko,b=!1,a=new oi(a));A:for(;++K<x;){var wA=o[K],kA=h==null?wA:h(wA);if(wA=S||wA!==0?wA:0,b&&kA===kA){for(var uA=cA;uA--;)if(a[uA]===kA)continue A;j.push(wA)}else p(a,kA,S)||j.push(wA)}return j}var FQ=uw(RB),ew=uw(hn,!0);function W0(o,a){var h=!0;return FQ(o,function(S,K,p){return h=!!a(S,K,p),h}),h}function Nt(o,a,h){for(var S=-1,K=o.length;++S<K;){var p=o[S],b=a(p);if(b!=null&&(x===I?b===b&&!RC(b):h(b,x)))var x=b,j=p}return j}function _0(o,a,h,S){var K=o.length;for(h=lI(h),h<0&&(h=-h>K?0:K+h),S=S===I||S>K?K:lI(S),S<0&&(S+=K),S=h>S?0:Nl(S);h<S;)o[h++]=a;return o}function tw(o,a){var h=[];return FQ(o,function(S,K,p){a(S,K,p)&&h.push(S)}),h}function Zg(o,a,h,S,K){var p=-1,b=o.length;for(h||(h=LN),K||(K=[]);++p<b;){var x=o[p];a>0&&h(x)?a>1?Zg(x,a-1,h,S,K):UQ(K,x):S||(K[K.length]=x)}return K}var rn=Lw(),aw=Lw(!0);function RB(o,a){return o&&rn(o,a,Tg)}function hn(o,a){return o&&aw(o,a,Tg)}function Kt(o,a){return MQ(a,function(h){return AQ(o[h])})}function ti(o,a){a=JQ(a,o);for(var h=0,S=a.length;o!=null&&h<S;)o=o[dB(a[h++])];return h&&h==S?o:I}function sw(o,a,h){var S=a(o);return hI(o)?S:UQ(S,h(o))}function EC(o){return o==null?o===I?QA:JA:ii&&ii in $I(o)?JN(o):ON(o)}function cn(o,a){return o>a}function j0(o,a){return o!=null&&VI.call(o,a)}function V0(o,a){return o!=null&&a in $I(o)}function X0(o,a,h){return o>=Xg(a,h)&&o<pg(a,h)}function wn(o,a,h){for(var S=h?$s:ot,K=o[0].length,p=o.length,b=p,x=BA(p),j=1/0,cA=[];b--;){var wA=o[b];b&&a&&(wA=Qg(wA,KC(a))),j=Xg(wA.length,j),x[b]=!h&&(a||K>=120&&wA.length>=120)?new oi(b&&wA):I}wA=o[0];var kA=-1,uA=x[0];A:for(;++kA<K&&cA.length<j;){var VA=wA[kA],oI=a?a(VA):VA;if(VA=h||VA!==0?VA:0,!(uA?ko(uA,oI):S(cA,oI,h))){for(b=p;--b;){var SI=x[b];if(!(SI?ko(SI,oI):S(o[b],oI,h)))continue A}uA&&uA.push(oI),cA.push(VA)}}return cA}function z0(o,a,h,S){return RB(o,function(K,p,b){a(S,h(K),p,b)}),S}function po(o,a,h){a=JQ(a,o),o=$w(o,a);var S=o==null?o:o[dB(jC(a))];return S==null?I:NC(S,o,h)}function nw(o){return rg(o)&&EC(o)==RA}function $0(o){return rg(o)&&EC(o)==dA}function AN(o){return rg(o)&&EC(o)==II}function qo(o,a,h,S,K){return o===a?!0:o==null||a==null||!rg(o)&&!rg(a)?o!==o&&a!==a:IN(o,a,h,S,qo,K)}function IN(o,a,h,S,K,p){var b=hI(o),x=hI(a),j=b?qA:zg(o),cA=x?qA:zg(a);j=j==RA?WA:j,cA=cA==RA?WA:cA;var wA=j==WA,kA=cA==WA,uA=j==cA;if(uA&&pQ(o)){if(!pQ(a))return!1;b=!0,wA=!1}if(uA&&!wA)return p||(p=new tB),b||tE(o)?Zw(o,a,h,S,K,p):FN(o,a,j,h,S,K,p);if(!(h&w)){var VA=wA&&VI.call(o,"__wrapped__"),oI=kA&&VI.call(a,"__wrapped__");if(VA||oI){var SI=VA?o.value():o,eI=oI?a.value():a;return p||(p=new tB),K(SI,eI,h,S,p)}}return uA?(p||(p=new tB),RN(o,a,h,S,K,p)):!1}function gN(o){return rg(o)&&zg(o)==hA}function ln(o,a,h,S){var K=h.length,p=K,b=!S;if(o==null)return!p;for(o=$I(o);K--;){var x=h[K];if(b&&x[2]?x[1]!==o[x[0]]:!(x[0]in o))return!1}for(;++K<p;){x=h[K];var j=x[0],cA=o[j],wA=x[1];if(b&&x[2]){if(cA===I&&!(j in o))return!1}else{var kA=new tB;if(S)var uA=S(cA,wA,j,o,a,kA);if(!(uA===I?qo(wA,cA,w|G,S,kA):uA))return!1}}return!0}function Dw(o){if(!og(o)||HN(o))return!1;var a=AQ(o)?g0:UI;return a.test(si(o))}function CN(o){return rg(o)&&EC(o)==tI}function BN(o){return rg(o)&&zg(o)==nI}function QN(o){return rg(o)&&vt(o.length)&&!!gg[EC(o)]}function rw(o){return typeof o=="function"?o:o==null?SC:typeof o=="object"?hI(o)?ww(o[0],o[1]):cw(o):Yl(o)}function Gn(o){if(!Lo(o))return o0(o);var a=[];for(var h in $I(o))VI.call(o,h)&&h!="constructor"&&a.push(h);return a}function iN(o){if(!og(o))return xN(o);var a=Lo(o),h=[];for(var S in o)S=="constructor"&&(a||!VI.call(o,S))||h.push(S);return h}function Sn(o,a){return o<a}function hw(o,a){var h=-1,S=lC(o)?BA(o.length):[];return FQ(o,function(K,p,b){S[++h]=a(K,p,b)}),S}function cw(o){var a=Ln(o);return a.length==1&&a[0][2]?Xw(a[0][0],a[0][1]):function(h){return h===o||ln(h,o,a)}}function ww(o,a){return Hn(o)&&Vw(a)?Xw(dB(o),a):function(h){var S=_n(h,o);return S===I&&S===a?jn(h,o):qo(a,S,w|G)}}function Ft(o,a,h,S,K){o!==a&&rn(a,function(p,b){if(K||(K=new tB),og(p))EN(o,a,b,h,Ft,S,K);else{var x=S?S(bn(o,b),p,b+"",o,a,K):I;x===I&&(x=p),nn(o,b,x)}},GC)}function EN(o,a,h,S,K,p,b){var x=bn(o,h),j=bn(a,h),cA=b.get(j);if(cA){nn(o,h,cA);return}var wA=p?p(x,j,h+"",o,a,b):I,kA=wA===I;if(kA){var uA=hI(j),VA=!uA&&pQ(j),oI=!uA&&!VA&&tE(j);wA=j,uA||VA||oI?hI(x)?wA=x:kg(x)?wA=wC(x):VA?(kA=!1,wA=Jw(j,!0)):oI?(kA=!1,wA=dw(j,!0)):wA=[]:Ho(j)||ni(j)?(wA=x,ni(x)?wA=Kl(x):(!og(x)||AQ(x))&&(wA=jw(j))):kA=!1}kA&&(b.set(j,wA),K(wA,j,S,p,b),b.delete(j)),nn(o,h,wA)}function lw(o,a){var h=o.length;if(h)return a+=a<0?h:0,$B(a,h)?o[a]:I}function Gw(o,a,h){a.length?a=Qg(a,function(p){return hI(p)?function(b){return ti(b,p.length===1?p[0]:p)}:p}):a=[SC];var S=-1;a=Qg(a,KC(iI()));var K=hw(o,function(p,b,x){var j=Qg(a,function(cA){return cA(p)});return{criteria:j,index:++S,value:p}});return fU(K,function(p,b){return GN(p,b,h)})}function oN(o,a){return Sw(o,a,function(h,S){return jn(o,S)})}function Sw(o,a,h){for(var S=-1,K=a.length,p={};++S<K;){var b=a[S],x=ti(o,b);h(x,b)&&fo(p,JQ(b,o),x)}return p}function eN(o){return function(a){return ti(a,o)}}function yn(o,a,h,S){var K=S?qU:$i,p=-1,b=a.length,x=o;for(o===a&&(a=wC(a)),h&&(x=Qg(o,KC(h)));++p<b;)for(var j=0,cA=a[p],wA=h?h(cA):cA;(j=K(x,wA,j,S))>-1;)x!==o&&wt.call(x,j,1),wt.call(o,j,1);return o}function yw(o,a){for(var h=o?a.length:0,S=h-1;h--;){var K=a[h];if(h==S||K!==p){var p=K;$B(K)?wt.call(o,K,1):Nn(o,K)}}return o}function kn(o,a){return o+St(gw()*(a-o+1))}function tN(o,a,h,S){for(var K=-1,p=pg(Gt((a-o)/(h||1)),0),b=BA(p);p--;)b[S?p:++K]=o,o+=h;return b}function Mn(o,a){var h="";if(!o||a<1||a>iA)return h;do a%2&&(h+=o),a=St(a/2),a&&(o+=o);while(a);return h}function KI(o,a){return Tn(zw(o,a,SC),o+"")}function aN(o){return Qw(aE(o))}function sN(o,a){var h=aE(o);return Ht(h,ei(a,0,h.length))}function fo(o,a,h,S){if(!og(o))return o;a=JQ(a,o);for(var K=-1,p=a.length,b=p-1,x=o;x!=null&&++K<p;){var j=dB(a[K]),cA=h;if(j==="__proto__"||j==="constructor"||j==="prototype")return o;if(K!=b){var wA=x[j];cA=S?S(wA,j,x):I,cA===I&&(cA=og(wA)?wA:$B(a[K+1])?[]:{})}Ro(x,j,cA),x=x[j]}return o}var kw=yt?function(o,a){return yt.set(o,a),o}:SC,nN=lt?function(o,a){return lt(o,"toString",{configurable:!0,enumerable:!1,value:Xn(a),writable:!0})}:SC;function DN(o){return Ht(aE(o))}function _C(o,a,h){var S=-1,K=o.length;a<0&&(a=-a>K?0:K+a),h=h>K?K:h,h<0&&(h+=K),K=a>h?0:h-a>>>0,a>>>=0;for(var p=BA(K);++S<K;)p[S]=o[S+a];return p}function rN(o,a){var h;return FQ(o,function(S,K,p){return h=a(S,K,p),!h}),!!h}function Rt(o,a,h){var S=0,K=o==null?S:o.length;if(typeof a=="number"&&a===a&&K<=EA){for(;S<K;){var p=S+K>>>1,b=o[p];b!==null&&!RC(b)&&(h?b<=a:b<a)?S=p+1:K=p}return K}return Un(o,a,SC,h)}function Un(o,a,h,S){var K=0,p=o==null?0:o.length;if(p===0)return 0;a=h(a);for(var b=a!==a,x=a===null,j=RC(a),cA=a===I;K<p;){var wA=St((K+p)/2),kA=h(o[wA]),uA=kA!==I,VA=kA===null,oI=kA===kA,SI=RC(kA);if(b)var eI=S||oI;else cA?eI=oI&&(S||uA):x?eI=oI&&uA&&(S||!VA):j?eI=oI&&uA&&!VA&&(S||!SI):VA||SI?eI=!1:eI=S?kA<=a:kA<a;eI?K=wA+1:p=wA}return Xg(p,FA)}function Mw(o,a){for(var h=-1,S=o.length,K=0,p=[];++h<S;){var b=o[h],x=a?a(b):b;if(!h||!aB(x,j)){var j=x;p[K++]=b===0?0:b}}return p}function Uw(o){return typeof o=="number"?o:RC(o)?lA:+o}function FC(o){if(typeof o=="string")return o;if(hI(o))return Qg(o,FC)+"";if(RC(o))return Cw?Cw.call(o):"";var a=o+"";return a=="0"&&1/o==-gA?"-0":a}function RQ(o,a,h){var S=-1,K=ot,p=o.length,b=!0,x=[],j=x;if(h)b=!1,K=$s;else if(p>=C){var cA=a?null:NN(o);if(cA)return tt(cA);b=!1,K=ko,j=new oi}else j=a?[]:x;A:for(;++S<p;){var wA=o[S],kA=a?a(wA):wA;if(wA=h||wA!==0?wA:0,b&&kA===kA){for(var uA=j.length;uA--;)if(j[uA]===kA)continue A;a&&j.push(kA),x.push(wA)}else K(j,kA,h)||(j!==x&&j.push(kA),x.push(wA))}return x}function Nn(o,a){return a=JQ(a,o),o=$w(o,a),o==null||delete o[dB(jC(a))]}function Nw(o,a,h,S){return fo(o,a,h(ti(o,a)),S)}function Jt(o,a,h,S){for(var K=o.length,p=S?K:-1;(S?p--:++p<K)&&a(o[p],p,o););return h?_C(o,S?0:p,S?p+1:K):_C(o,S?p+1:0,S?K:p)}function Kw(o,a){var h=o;return h instanceof uI&&(h=h.value()),An(a,function(S,K){return K.func.apply(K.thisArg,UQ([S],K.args))},h)}function Kn(o,a,h){var S=o.length;if(S<2)return S?RQ(o[0]):[];for(var K=-1,p=BA(S);++K<S;)for(var b=o[K],x=-1;++x<S;)x!=K&&(p[K]=Jo(p[K]||b,o[x],a,h));return RQ(Zg(p,1),a,h)}function Fw(o,a,h){for(var S=-1,K=o.length,p=a.length,b={};++S<K;){var x=S<p?a[S]:I;h(b,o[S],x)}return b}function Fn(o){return kg(o)?o:[]}function Rn(o){return typeof o=="function"?o:SC}function JQ(o,a){return hI(o)?o:Hn(o,a)?[o]:Cl(ZI(o))}var hN=KI;function dQ(o,a,h){var S=o.length;return h=h===I?S:h,!a&&h>=S?o:_C(o,a,h)}var Rw=C0||function(o){return Pg.clearTimeout(o)};function Jw(o,a){if(a)return o.slice();var h=o.length,S=Xc?Xc(h):new o.constructor(h);return o.copy(S),S}function Jn(o){var a=new o.constructor(o.byteLength);return new ht(a).set(new ht(o)),a}function cN(o,a){var h=a?Jn(o.buffer):o.buffer;return new o.constructor(h,o.byteOffset,o.byteLength)}function wN(o){var a=new o.constructor(o.source,BI.exec(o));return a.lastIndex=o.lastIndex,a}function lN(o){return Fo?$I(Fo.call(o)):{}}function dw(o,a){var h=a?Jn(o.buffer):o.buffer;return new o.constructor(h,o.byteOffset,o.length)}function pw(o,a){if(o!==a){var h=o!==I,S=o===null,K=o===o,p=RC(o),b=a!==I,x=a===null,j=a===a,cA=RC(a);if(!x&&!cA&&!p&&o>a||p&&b&&j&&!x&&!cA||S&&b&&j||!h&&j||!K)return 1;if(!S&&!p&&!cA&&o<a||cA&&h&&K&&!S&&!p||x&&h&&K||!b&&K||!j)return-1}return 0}function GN(o,a,h){for(var S=-1,K=o.criteria,p=a.criteria,b=K.length,x=h.length;++S<b;){var j=pw(K[S],p[S]);if(j){if(S>=x)return j;var cA=h[S];return j*(cA=="desc"?-1:1)}}return o.index-a.index}function qw(o,a,h,S){for(var K=-1,p=o.length,b=h.length,x=-1,j=a.length,cA=pg(p-b,0),wA=BA(j+cA),kA=!S;++x<j;)wA[x]=a[x];for(;++K<b;)(kA||K<p)&&(wA[h[K]]=o[K]);for(;cA--;)wA[x++]=o[K++];return wA}function fw(o,a,h,S){for(var K=-1,p=o.length,b=-1,x=h.length,j=-1,cA=a.length,wA=pg(p-x,0),kA=BA(wA+cA),uA=!S;++K<wA;)kA[K]=o[K];for(var VA=K;++j<cA;)kA[VA+j]=a[j];for(;++b<x;)(uA||K<p)&&(kA[VA+h[b]]=o[K++]);return kA}function wC(o,a){var h=-1,S=o.length;for(a||(a=BA(S));++h<S;)a[h]=o[h];return a}function JB(o,a,h,S){var K=!h;h||(h={});for(var p=-1,b=a.length;++p<b;){var x=a[p],j=S?S(h[x],o[x],x,h,o):I;j===I&&(j=o[x]),K?VB(h,x,j):Ro(h,x,j)}return h}function SN(o,a){return JB(o,Yn(o),a)}function yN(o,a){return JB(o,Ww(o),a)}function dt(o,a){return function(h,S){var K=hI(h)?KU:v0,p=a?a():{};return K(h,o,iI(S,2),p)}}function EE(o){return KI(function(a,h){var S=-1,K=h.length,p=K>1?h[K-1]:I,b=K>2?h[2]:I;for(p=o.length>3&&typeof p=="function"?(K--,p):I,b&&oC(h[0],h[1],b)&&(p=K<3?I:p,K=1),a=$I(a);++S<K;){var x=h[S];x&&o(a,x,S,p)}return a})}function uw(o,a){return function(h,S){if(h==null)return h;if(!lC(h))return o(h,S);for(var K=h.length,p=a?K:-1,b=$I(h);(a?p--:++p<K)&&S(b[p],p,b)!==!1;);return h}}function Lw(o){return function(a,h,S){for(var K=-1,p=$I(a),b=S(a),x=b.length;x--;){var j=b[o?x:++K];if(h(p[j],j,p)===!1)break}return a}}function kN(o,a,h){var S=a&l,K=uo(o);function p(){var b=this&&this!==Pg&&this instanceof p?K:o;return b.apply(S?h:this,arguments)}return p}function Yw(o){return function(a){a=ZI(a);var h=AE(a)?eB(a):I,S=h?h[0]:a.charAt(0),K=h?dQ(h,1).join(""):a.slice(1);return S[o]()+K}}function oE(o){return function(a){return An(ul(fl(a).replace(nU,"")),o,"")}}function uo(o){return function(){var a=arguments;switch(a.length){case 0:return new o;case 1:return new o(a[0]);case 2:return new o(a[0],a[1]);case 3:return new o(a[0],a[1],a[2]);case 4:return new o(a[0],a[1],a[2],a[3]);case 5:return new o(a[0],a[1],a[2],a[3],a[4]);case 6:return new o(a[0],a[1],a[2],a[3],a[4],a[5]);case 7:return new o(a[0],a[1],a[2],a[3],a[4],a[5],a[6])}var h=iE(o.prototype),S=o.apply(h,a);return og(S)?S:h}}function MN(o,a,h){var S=uo(o);function K(){for(var p=arguments.length,b=BA(p),x=p,j=eE(K);x--;)b[x]=arguments[x];var cA=p<3&&b[0]!==j&&b[p-1]!==j?[]:NQ(b,j);if(p-=cA.length,p<h)return xw(o,a,pt,K.placeholder,I,b,cA,I,I,h-p);var wA=this&&this!==Pg&&this instanceof K?S:o;return NC(wA,this,b)}return K}function Hw(o){return function(a,h,S){var K=$I(a);if(!lC(a)){var p=iI(h,3);a=Tg(a),h=function(x){return p(K[x],x,K)}}var b=o(a,h,S);return b>-1?K[p?a[b]:b]:I}}function mw(o){return zB(function(a){var h=a.length,S=h,K=ZC.prototype.thru;for(o&&a.reverse();S--;){var p=a[S];if(typeof p!="function")throw new PC(i);if(K&&!b&&Lt(p)=="wrapper")var b=new ZC([],!0)}for(S=b?S:h;++S<h;){p=a[S];var x=Lt(p),j=x=="wrapper"?un(p):I;j&&mn(j[0])&&j[1]==(d|y|N|L)&&!j[4].length&&j[9]==1?b=b[Lt(j[0])].apply(b,j[3]):b=p.length==1&&mn(p)?b[x]():b.thru(p)}return function(){var cA=arguments,wA=cA[0];if(b&&cA.length==1&&hI(wA))return b.plant(wA).value();for(var kA=0,uA=h?a[kA].apply(this,cA):wA;++kA<h;)uA=a[kA].call(this,uA);return uA}})}function pt(o,a,h,S,K,p,b,x,j,cA){var wA=a&d,kA=a&l,uA=a&c,VA=a&(y|M),oI=a&F,SI=uA?I:uo(o);function eI(){for(var JI=arguments.length,HI=BA(JI),JC=JI;JC--;)HI[JC]=arguments[JC];if(VA)var eC=eE(eI),dC=LU(HI,eC);if(S&&(HI=qw(HI,S,K,VA)),p&&(HI=fw(HI,p,b,VA)),JI-=dC,VA&&JI<cA){var Mg=NQ(HI,eC);return xw(o,a,pt,eI.placeholder,h,HI,Mg,x,j,cA-JI)}var sB=kA?h:this,gQ=uA?sB[o]:o;return JI=HI.length,x?HI=vN(HI,x):oI&&JI>1&&HI.reverse(),wA&&j<JI&&(HI.length=j),this&&this!==Pg&&this instanceof eI&&(gQ=SI||uo(gQ)),gQ.apply(sB,HI)}return eI}function bw(o,a){return function(h,S){return z0(h,o,a(S),{})}}function qt(o,a){return function(h,S){var K;if(h===I&&S===I)return a;if(h!==I&&(K=h),S!==I){if(K===I)return S;typeof h=="string"||typeof S=="string"?(h=FC(h),S=FC(S)):(h=Uw(h),S=Uw(S)),K=o(h,S)}return K}}function dn(o){return zB(function(a){return a=Qg(a,KC(iI())),KI(function(h){var S=this;return o(a,function(K){return NC(K,S,h)})})})}function ft(o,a){a=a===I?" ":FC(a);var h=a.length;if(h<2)return h?Mn(a,o):a;var S=Mn(a,Gt(o/IE(a)));return AE(a)?dQ(eB(S),0,o).join(""):S.slice(0,o)}function UN(o,a,h,S){var K=a&l,p=uo(o);function b(){for(var x=-1,j=arguments.length,cA=-1,wA=S.length,kA=BA(wA+j),uA=this&&this!==Pg&&this instanceof b?p:o;++cA<wA;)kA[cA]=S[cA];for(;j--;)kA[cA++]=arguments[++x];return NC(uA,K?h:this,kA)}return b}function Tw(o){return function(a,h,S){return S&&typeof S!="number"&&oC(a,h,S)&&(h=S=I),a=IQ(a),h===I?(h=a,a=0):h=IQ(h),S=S===I?a<h?1:-1:IQ(S),tN(a,h,S,o)}}function ut(o){return function(a,h){return typeof a=="string"&&typeof h=="string"||(a=VC(a),h=VC(h)),o(a,h)}}function xw(o,a,h,S,K,p,b,x,j,cA){var wA=a&y,kA=wA?b:I,uA=wA?I:b,VA=wA?p:I,oI=wA?I:p;a|=wA?N:R,a&=~(wA?R:N),a&k||(a&=~(l|c));var SI=[o,a,K,VA,kA,oI,uA,x,j,cA],eI=h.apply(I,SI);return mn(o)&&Al(eI,SI),eI.placeholder=S,Il(eI,o,a)}function pn(o){var a=dg[o];return function(h,S){if(h=VC(h),S=S==null?0:Xg(lI(S),292),S&&Iw(h)){var K=(ZI(h)+"e").split("e"),p=a(K[0]+"e"+(+K[1]+S));return K=(ZI(p)+"e").split("e"),+(K[0]+"e"+(+K[1]-S))}return a(h)}}var NN=BE&&1/tt(new BE([,-0]))[1]==gA?function(o){return new BE(o)}:AD;function Ow(o){return function(a){var h=zg(a);return h==hA?on(a):h==nI?OU(a):uU(a,o(a))}}function XB(o,a,h,S,K,p,b,x){var j=a&c;if(!j&&typeof o!="function")throw new PC(i);var cA=S?S.length:0;if(cA||(a&=~(N|R),S=K=I),b=b===I?b:pg(lI(b),0),x=x===I?x:lI(x),cA-=K?K.length:0,a&R){var wA=S,kA=K;S=K=I}var uA=j?I:un(o),VA=[o,a,h,S,K,wA,kA,p,b,x];if(uA&&TN(VA,uA),o=VA[0],a=VA[1],h=VA[2],S=VA[3],K=VA[4],x=VA[9]=VA[9]===I?j?0:o.length:pg(VA[9]-cA,0),!x&&a&(y|M)&&(a&=~(y|M)),!a||a==l)var oI=kN(o,a,h);else a==y||a==M?oI=MN(o,a,x):(a==N||a==(l|N))&&!K.length?oI=UN(o,a,h,S):oI=pt.apply(I,VA);var SI=uA?kw:Al;return Il(SI(oI,VA),o,a)}function vw(o,a,h,S){return o===I||aB(o,CE[h])&&!VI.call(S,h)?a:o}function Pw(o,a,h,S,K,p){return og(o)&&og(a)&&(p.set(a,o),Ft(o,a,I,Pw,p),p.delete(a)),o}function KN(o){return Ho(o)?I:o}function Zw(o,a,h,S,K,p){var b=h&w,x=o.length,j=a.length;if(x!=j&&!(b&&j>x))return!1;var cA=p.get(o),wA=p.get(a);if(cA&&wA)return cA==a&&wA==o;var kA=-1,uA=!0,VA=h&G?new oi:I;for(p.set(o,a),p.set(a,o);++kA<x;){var oI=o[kA],SI=a[kA];if(S)var eI=b?S(SI,oI,kA,a,o,p):S(oI,SI,kA,o,a,p);if(eI!==I){if(eI)continue;uA=!1;break}if(VA){if(!In(a,function(JI,HI){if(!ko(VA,HI)&&(oI===JI||K(oI,JI,h,S,p)))return VA.push(HI)})){uA=!1;break}}else if(!(oI===SI||K(oI,SI,h,S,p))){uA=!1;break}}return p.delete(o),p.delete(a),uA}function FN(o,a,h,S,K,p,b){switch(h){case T:if(o.byteLength!=a.byteLength||o.byteOffset!=a.byteOffset)return!1;o=o.buffer,a=a.buffer;case dA:return!(o.byteLength!=a.byteLength||!p(new ht(o),new ht(a)));case AI:case II:case YA:return aB(+o,+a);case vA:return o.name==a.name&&o.message==a.message;case tI:case m:return o==a+"";case hA:var x=on;case nI:var j=S&w;if(x||(x=tt),o.size!=a.size&&!j)return!1;var cA=b.get(o);if(cA)return cA==a;S|=G,b.set(o,a);var wA=Zw(x(o),x(a),S,K,p,b);return b.delete(o),wA;case q:if(Fo)return Fo.call(o)==Fo.call(a)}return!1}function RN(o,a,h,S,K,p){var b=h&w,x=qn(o),j=x.length,cA=qn(a),wA=cA.length;if(j!=wA&&!b)return!1;for(var kA=j;kA--;){var uA=x[kA];if(!(b?uA in a:VI.call(a,uA)))return!1}var VA=p.get(o),oI=p.get(a);if(VA&&oI)return VA==a&&oI==o;var SI=!0;p.set(o,a),p.set(a,o);for(var eI=b;++kA<j;){uA=x[kA];var JI=o[uA],HI=a[uA];if(S)var JC=b?S(HI,JI,uA,a,o,p):S(JI,HI,uA,o,a,p);if(!(JC===I?JI===HI||K(JI,HI,h,S,p):JC)){SI=!1;break}eI||(eI=uA=="constructor")}if(SI&&!eI){var eC=o.constructor,dC=a.constructor;eC!=dC&&"constructor"in o&&"constructor"in a&&!(typeof eC=="function"&&eC instanceof eC&&typeof dC=="function"&&dC instanceof dC)&&(SI=!1)}return p.delete(o),p.delete(a),SI}function zB(o){return Tn(zw(o,I,El),o+"")}function qn(o){return sw(o,Tg,Yn)}function fn(o){return sw(o,GC,Ww)}var un=yt?function(o){return yt.get(o)}:AD;function Lt(o){for(var a=o.name+"",h=QE[a],S=VI.call(QE,a)?h.length:0;S--;){var K=h[S],p=K.func;if(p==null||p==o)return K.name}return a}function eE(o){var a=VI.call(J,"placeholder")?J:o;return a.placeholder}function iI(){var o=J.iteratee||zn;return o=o===zn?rw:o,arguments.length?o(arguments[0],arguments[1]):o}function Yt(o,a){var h=o.__data__;return YN(a)?h[typeof a=="string"?"string":"hash"]:h.map}function Ln(o){for(var a=Tg(o),h=a.length;h--;){var S=a[h],K=o[S];a[h]=[S,K,Vw(K)]}return a}function ai(o,a){var h=bU(o,a);return Dw(h)?h:I}function JN(o){var a=VI.call(o,ii),h=o[ii];try{o[ii]=I;var S=!0}catch{}var K=Dt.call(o);return S&&(a?o[ii]=h:delete o[ii]),K}var Yn=tn?function(o){return o==null?[]:(o=$I(o),MQ(tn(o),function(a){return $c.call(o,a)}))}:ID,Ww=tn?function(o){for(var a=[];o;)UQ(a,Yn(o)),o=ct(o);return a}:ID,zg=EC;(an&&zg(new an(new ArrayBuffer(1)))!=T||Uo&&zg(new Uo)!=hA||sn&&zg(sn.resolve())!=gI||BE&&zg(new BE)!=nI||No&&zg(new No)!=yA)&&(zg=function(o){var a=EC(o),h=a==WA?o.constructor:I,S=h?si(h):"";if(S)switch(S){case s0:return T;case n0:return hA;case D0:return gI;case r0:return nI;case h0:return yA}return a});function dN(o,a,h){for(var S=-1,K=h.length;++S<K;){var p=h[S],b=p.size;switch(p.type){case"drop":o+=b;break;case"dropRight":a-=b;break;case"take":a=Xg(a,o+b);break;case"takeRight":o=pg(o,a-b);break}}return{start:o,end:a}}function pN(o){var a=o.match(Y);return a?a[1].split(AA):[]}function _w(o,a,h){a=JQ(a,o);for(var S=-1,K=a.length,p=!1;++S<K;){var b=dB(a[S]);if(!(p=o!=null&&h(o,b)))break;o=o[b]}return p||++S!=K?p:(K=o==null?0:o.length,!!K&&vt(K)&&$B(b,K)&&(hI(o)||ni(o)))}function qN(o){var a=o.length,h=new o.constructor(a);return a&&typeof o[0]=="string"&&VI.call(o,"index")&&(h.index=o.index,h.input=o.input),h}function jw(o){return typeof o.constructor=="function"&&!Lo(o)?iE(ct(o)):{}}function fN(o,a,h){var S=o.constructor;switch(a){case dA:return Jn(o);case AI:case II:return new S(+o);case T:return cN(o,h);case DA:case CA:case pA:case xA:case jA:case HA:case ZA:case aI:case cI:return dw(o,h);case hA:return new S;case YA:case m:return new S(o);case tI:return wN(o);case nI:return new S;case q:return lN(o)}}function uN(o,a){var h=a.length;if(!h)return o;var S=h-1;return a[S]=(h>1?"& ":"")+a[S],a=a.join(h>2?", ":" "),o.replace(Zs,`{
/* [wrapped with `+a+`] */
`)}function LN(o){return hI(o)||ni(o)||!!(Aw&&o&&o[Aw])}function $B(o,a){var h=typeof o;return a=a??iA,!!a&&(h=="number"||h!="symbol"&&FI.test(o))&&o>-1&&o%1==0&&o<a}function oC(o,a,h){if(!og(h))return!1;var S=typeof a;return(S=="number"?lC(h)&&$B(a,h.length):S=="string"&&a in h)?aB(h[a],o):!1}function Hn(o,a){if(hI(o))return!1;var h=typeof o;return h=="number"||h=="symbol"||h=="boolean"||o==null||RC(o)?!0:cC.test(o)||!Eg.test(o)||a!=null&&o in $I(a)}function YN(o){var a=typeof o;return a=="string"||a=="number"||a=="symbol"||a=="boolean"?o!=="__proto__":o===null}function mn(o){var a=Lt(o),h=J[a];if(typeof h!="function"||!(a in uI.prototype))return!1;if(o===h)return!0;var S=un(h);return!!S&&o===S[0]}function HN(o){return!!Vc&&Vc in o}var mN=st?AQ:gD;function Lo(o){var a=o&&o.constructor,h=typeof a=="function"&&a.prototype||CE;return o===h}function Vw(o){return o===o&&!og(o)}function Xw(o,a){return function(h){return h==null?!1:h[o]===a&&(a!==I||o in $I(h))}}function bN(o){var a=xt(o,function(S){return h.size===t&&h.clear(),S}),h=a.cache;return a}function TN(o,a){var h=o[1],S=a[1],K=h|S,p=K<(l|c|d),b=S==d&&h==y||S==d&&h==L&&o[7].length<=a[8]||S==(d|L)&&a[7].length<=a[8]&&h==y;if(!(p||b))return o;S&l&&(o[2]=a[2],K|=h&l?0:k);var x=a[3];if(x){var j=o[3];o[3]=j?qw(j,x,a[4]):x,o[4]=j?NQ(o[3],s):a[4]}return x=a[5],x&&(j=o[5],o[5]=j?fw(j,x,a[6]):x,o[6]=j?NQ(o[5],s):a[6]),x=a[7],x&&(o[7]=x),S&d&&(o[8]=o[8]==null?a[8]:Xg(o[8],a[8])),o[9]==null&&(o[9]=a[9]),o[0]=a[0],o[1]=K,o}function xN(o){var a=[];if(o!=null)for(var h in $I(o))a.push(h);return a}function ON(o){return Dt.call(o)}function zw(o,a,h){return a=pg(a===I?o.length-1:a,0),function(){for(var S=arguments,K=-1,p=pg(S.length-a,0),b=BA(p);++K<p;)b[K]=S[a+K];K=-1;for(var x=BA(a+1);++K<a;)x[K]=S[K];return x[a]=h(b),NC(o,this,x)}}function $w(o,a){return a.length<2?o:ti(o,_C(a,0,-1))}function vN(o,a){for(var h=o.length,S=Xg(a.length,h),K=wC(o);S--;){var p=a[S];o[S]=$B(p,h)?K[p]:I}return o}function bn(o,a){if(!(a==="constructor"&&typeof o[a]=="function")&&a!="__proto__")return o[a]}var Al=gl(kw),Yo=Q0||function(o,a){return Pg.setTimeout(o,a)},Tn=gl(nN);function Il(o,a,h){var S=a+"";return Tn(o,uN(S,PN(pN(S),h)))}function gl(o){var a=0,h=0;return function(){var S=e0(),K=H-(S-h);if(h=S,K>0){if(++a>=$)return arguments[0]}else a=0;return o.apply(I,arguments)}}function Ht(o,a){var h=-1,S=o.length,K=S-1;for(a=a===I?S:a;++h<a;){var p=kn(h,K),b=o[p];o[p]=o[h],o[h]=b}return o.length=a,o}var Cl=bN(function(o){var a=[];return o.charCodeAt(0)===46&&a.push(""),o.replace(TC,function(h,S,K,p){a.push(K?p.replace(nA,"$1"):S||h)}),a});function dB(o){if(typeof o=="string"||RC(o))return o;var a=o+"";return a=="0"&&1/o==-gA?"-0":a}function si(o){if(o!=null){try{return nt.call(o)}catch{}try{return o+""}catch{}}return""}function PN(o,a){return vC(GA,function(h){var S="_."+h[0];a&h[1]&&!ot(o,S)&&o.push(S)}),o.sort()}function Bl(o){if(o instanceof uI)return o.clone();var a=new ZC(o.__wrapped__,o.__chain__);return a.__actions__=wC(o.__actions__),a.__index__=o.__index__,a.__values__=o.__values__,a}function ZN(o,a,h){(h?oC(o,a,h):a===I)?a=1:a=pg(lI(a),0);var S=o==null?0:o.length;if(!S||a<1)return[];for(var K=0,p=0,b=BA(Gt(S/a));K<S;)b[p++]=_C(o,K,K+=a);return b}function WN(o){for(var a=-1,h=o==null?0:o.length,S=0,K=[];++a<h;){var p=o[a];p&&(K[S++]=p)}return K}function _N(){var o=arguments.length;if(!o)return[];for(var a=BA(o-1),h=arguments[0],S=o;S--;)a[S-1]=arguments[S];return UQ(hI(h)?wC(h):[h],Zg(a,1))}var jN=KI(function(o,a){return kg(o)?Jo(o,Zg(a,1,kg,!0)):[]}),VN=KI(function(o,a){var h=jC(a);return kg(h)&&(h=I),kg(o)?Jo(o,Zg(a,1,kg,!0),iI(h,2)):[]}),XN=KI(function(o,a){var h=jC(a);return kg(h)&&(h=I),kg(o)?Jo(o,Zg(a,1,kg,!0),I,h):[]});function zN(o,a,h){var S=o==null?0:o.length;return S?(a=h||a===I?1:lI(a),_C(o,a<0?0:a,S)):[]}function $N(o,a,h){var S=o==null?0:o.length;return S?(a=h||a===I?1:lI(a),a=S-a,_C(o,0,a<0?0:a)):[]}function AK(o,a){return o&&o.length?Jt(o,iI(a,3),!0,!0):[]}function IK(o,a){return o&&o.length?Jt(o,iI(a,3),!0):[]}function gK(o,a,h,S){var K=o==null?0:o.length;return K?(h&&typeof h!="number"&&oC(o,a,h)&&(h=0,S=K),_0(o,a,h,S)):[]}function Ql(o,a,h){var S=o==null?0:o.length;if(!S)return-1;var K=h==null?0:lI(h);return K<0&&(K=pg(S+K,0)),et(o,iI(a,3),K)}function il(o,a,h){var S=o==null?0:o.length;if(!S)return-1;var K=S-1;return h!==I&&(K=lI(h),K=h<0?pg(S+K,0):Xg(K,S-1)),et(o,iI(a,3),K,!0)}function El(o){var a=o==null?0:o.length;return a?Zg(o,1):[]}function CK(o){var a=o==null?0:o.length;return a?Zg(o,gA):[]}function BK(o,a){var h=o==null?0:o.length;return h?(a=a===I?1:lI(a),Zg(o,a)):[]}function QK(o){for(var a=-1,h=o==null?0:o.length,S={};++a<h;){var K=o[a];S[K[0]]=K[1]}return S}function ol(o){return o&&o.length?o[0]:I}function iK(o,a,h){var S=o==null?0:o.length;if(!S)return-1;var K=h==null?0:lI(h);return K<0&&(K=pg(S+K,0)),$i(o,a,K)}function EK(o){var a=o==null?0:o.length;return a?_C(o,0,-1):[]}var oK=KI(function(o){var a=Qg(o,Fn);return a.length&&a[0]===o[0]?wn(a):[]}),eK=KI(function(o){var a=jC(o),h=Qg(o,Fn);return a===jC(h)?a=I:h.pop(),h.length&&h[0]===o[0]?wn(h,iI(a,2)):[]}),tK=KI(function(o){var a=jC(o),h=Qg(o,Fn);return a=typeof a=="function"?a:I,a&&h.pop(),h.length&&h[0]===o[0]?wn(h,I,a):[]});function aK(o,a){return o==null?"":E0.call(o,a)}function jC(o){var a=o==null?0:o.length;return a?o[a-1]:I}function sK(o,a,h){var S=o==null?0:o.length;if(!S)return-1;var K=S;return h!==I&&(K=lI(h),K=K<0?pg(S+K,0):Xg(K,S-1)),a===a?PU(o,a,K):et(o,xc,K,!0)}function nK(o,a){return o&&o.length?lw(o,lI(a)):I}var DK=KI(el);function el(o,a){return o&&o.length&&a&&a.length?yn(o,a):o}function rK(o,a,h){return o&&o.length&&a&&a.length?yn(o,a,iI(h,2)):o}function hK(o,a,h){return o&&o.length&&a&&a.length?yn(o,a,I,h):o}var cK=zB(function(o,a){var h=o==null?0:o.length,S=Dn(o,a);return yw(o,Qg(a,function(K){return $B(K,h)?+K:K}).sort(pw)),S});function wK(o,a){var h=[];if(!(o&&o.length))return h;var S=-1,K=[],p=o.length;for(a=iI(a,3);++S<p;){var b=o[S];a(b,S,o)&&(h.push(b),K.push(S))}return yw(o,K),h}function xn(o){return o==null?o:a0.call(o)}function lK(o,a,h){var S=o==null?0:o.length;return S?(h&&typeof h!="number"&&oC(o,a,h)?(a=0,h=S):(a=a==null?0:lI(a),h=h===I?S:lI(h)),_C(o,a,h)):[]}function GK(o,a){return Rt(o,a)}function SK(o,a,h){return Un(o,a,iI(h,2))}function yK(o,a){var h=o==null?0:o.length;if(h){var S=Rt(o,a);if(S<h&&aB(o[S],a))return S}return-1}function kK(o,a){return Rt(o,a,!0)}function MK(o,a,h){return Un(o,a,iI(h,2),!0)}function UK(o,a){var h=o==null?0:o.length;if(h){var S=Rt(o,a,!0)-1;if(aB(o[S],a))return S}return-1}function NK(o){return o&&o.length?Mw(o):[]}function KK(o,a){return o&&o.length?Mw(o,iI(a,2)):[]}function FK(o){var a=o==null?0:o.length;return a?_C(o,1,a):[]}function RK(o,a,h){return o&&o.length?(a=h||a===I?1:lI(a),_C(o,0,a<0?0:a)):[]}function JK(o,a,h){var S=o==null?0:o.length;return S?(a=h||a===I?1:lI(a),a=S-a,_C(o,a<0?0:a,S)):[]}function dK(o,a){return o&&o.length?Jt(o,iI(a,3),!1,!0):[]}function pK(o,a){return o&&o.length?Jt(o,iI(a,3)):[]}var qK=KI(function(o){return RQ(Zg(o,1,kg,!0))}),fK=KI(function(o){var a=jC(o);return kg(a)&&(a=I),RQ(Zg(o,1,kg,!0),iI(a,2))}),uK=KI(function(o){var a=jC(o);return a=typeof a=="function"?a:I,RQ(Zg(o,1,kg,!0),I,a)});function LK(o){return o&&o.length?RQ(o):[]}function YK(o,a){return o&&o.length?RQ(o,iI(a,2)):[]}function HK(o,a){return a=typeof a=="function"?a:I,o&&o.length?RQ(o,I,a):[]}function On(o){if(!(o&&o.length))return[];var a=0;return o=MQ(o,function(h){if(kg(h))return a=pg(h.length,a),!0}),Qn(a,function(h){return Qg(o,gn(h))})}function tl(o,a){if(!(o&&o.length))return[];var h=On(o);return a==null?h:Qg(h,function(S){return NC(a,I,S)})}var mK=KI(function(o,a){return kg(o)?Jo(o,a):[]}),bK=KI(function(o){return Kn(MQ(o,kg))}),TK=KI(function(o){var a=jC(o);return kg(a)&&(a=I),Kn(MQ(o,kg),iI(a,2))}),xK=KI(function(o){var a=jC(o);return a=typeof a=="function"?a:I,Kn(MQ(o,kg),I,a)}),OK=KI(On);function vK(o,a){return Fw(o||[],a||[],Ro)}function PK(o,a){return Fw(o||[],a||[],fo)}var ZK=KI(function(o){var a=o.length,h=a>1?o[a-1]:I;return h=typeof h=="function"?(o.pop(),h):I,tl(o,h)});function al(o){var a=J(o);return a.__chain__=!0,a}function WK(o,a){return a(o),o}function mt(o,a){return a(o)}var _K=zB(function(o){var a=o.length,h=a?o[0]:0,S=this.__wrapped__,K=function(p){return Dn(p,o)};return a>1||this.__actions__.length||!(S instanceof uI)||!$B(h)?this.thru(K):(S=S.slice(h,+h+(a?1:0)),S.__actions__.push({func:mt,args:[K],thisArg:I}),new ZC(S,this.__chain__).thru(function(p){return a&&!p.length&&p.push(I),p}))});function jK(){return al(this)}function VK(){return new ZC(this.value(),this.__chain__)}function XK(){this.__values__===I&&(this.__values__=Ul(this.value()));var o=this.__index__>=this.__values__.length,a=o?I:this.__values__[this.__index__++];return{done:o,value:a}}function zK(){return this}function $K(o){for(var a,h=this;h instanceof Mt;){var S=Bl(h);S.__index__=0,S.__values__=I,a?K.__wrapped__=S:a=S;var K=S;h=h.__wrapped__}return K.__wrapped__=o,a}function AF(){var o=this.__wrapped__;if(o instanceof uI){var a=o;return this.__actions__.length&&(a=new uI(this)),a=a.reverse(),a.__actions__.push({func:mt,args:[xn],thisArg:I}),new ZC(a,this.__chain__)}return this.thru(xn)}function IF(){return Kw(this.__wrapped__,this.__actions__)}var gF=dt(function(o,a,h){VI.call(o,h)?++o[h]:VB(o,h,1)});function CF(o,a,h){var S=hI(o)?bc:W0;return h&&oC(o,a,h)&&(a=I),S(o,iI(a,3))}function BF(o,a){var h=hI(o)?MQ:tw;return h(o,iI(a,3))}var QF=Hw(Ql),iF=Hw(il);function EF(o,a){return Zg(bt(o,a),1)}function oF(o,a){return Zg(bt(o,a),gA)}function eF(o,a,h){return h=h===I?1:lI(h),Zg(bt(o,a),h)}function sl(o,a){var h=hI(o)?vC:FQ;return h(o,iI(a,3))}function nl(o,a){var h=hI(o)?FU:ew;return h(o,iI(a,3))}var tF=dt(function(o,a,h){VI.call(o,h)?o[h].push(a):VB(o,h,[a])});function aF(o,a,h,S){o=lC(o)?o:aE(o),h=h&&!S?lI(h):0;var K=o.length;return h<0&&(h=pg(K+h,0)),Pt(o)?h<=K&&o.indexOf(a,h)>-1:!!K&&$i(o,a,h)>-1}var sF=KI(function(o,a,h){var S=-1,K=typeof a=="function",p=lC(o)?BA(o.length):[];return FQ(o,function(b){p[++S]=K?NC(a,b,h):po(b,a,h)}),p}),nF=dt(function(o,a,h){VB(o,h,a)});function bt(o,a){var h=hI(o)?Qg:hw;return h(o,iI(a,3))}function DF(o,a,h,S){return o==null?[]:(hI(a)||(a=a==null?[]:[a]),h=S?I:h,hI(h)||(h=h==null?[]:[h]),Gw(o,a,h))}var rF=dt(function(o,a,h){o[h?0:1].push(a)},function(){return[[],[]]});function hF(o,a,h){var S=hI(o)?An:vc,K=arguments.length<3;return S(o,iI(a,4),h,K,FQ)}function cF(o,a,h){var S=hI(o)?RU:vc,K=arguments.length<3;return S(o,iI(a,4),h,K,ew)}function wF(o,a){var h=hI(o)?MQ:tw;return h(o,Ot(iI(a,3)))}function lF(o){var a=hI(o)?Qw:aN;return a(o)}function GF(o,a,h){(h?oC(o,a,h):a===I)?a=1:a=lI(a);var S=hI(o)?x0:sN;return S(o,a)}function SF(o){var a=hI(o)?O0:DN;return a(o)}function yF(o){if(o==null)return 0;if(lC(o))return Pt(o)?IE(o):o.length;var a=zg(o);return a==hA||a==nI?o.size:Gn(o).length}function kF(o,a,h){var S=hI(o)?In:rN;return h&&oC(o,a,h)&&(a=I),S(o,iI(a,3))}var MF=KI(function(o,a){if(o==null)return[];var h=a.length;return h>1&&oC(o,a[0],a[1])?a=[]:h>2&&oC(a[0],a[1],a[2])&&(a=[a[0]]),Gw(o,Zg(a,1),[])}),Tt=B0||function(){return Pg.Date.now()};function UF(o,a){if(typeof a!="function")throw new PC(i);return o=lI(o),function(){if(--o<1)return a.apply(this,arguments)}}function Dl(o,a,h){return a=h?I:a,a=o&&a==null?o.length:a,XB(o,d,I,I,I,I,a)}function rl(o,a){var h;if(typeof a!="function")throw new PC(i);return o=lI(o),function(){return--o>0&&(h=a.apply(this,arguments)),o<=1&&(a=I),h}}var vn=KI(function(o,a,h){var S=l;if(h.length){var K=NQ(h,eE(vn));S|=N}return XB(o,S,a,h,K)}),hl=KI(function(o,a,h){var S=l|c;if(h.length){var K=NQ(h,eE(hl));S|=N}return XB(a,S,o,h,K)});function cl(o,a,h){a=h?I:a;var S=XB(o,y,I,I,I,I,I,a);return S.placeholder=cl.placeholder,S}function wl(o,a,h){a=h?I:a;var S=XB(o,M,I,I,I,I,I,a);return S.placeholder=wl.placeholder,S}function ll(o,a,h){var S,K,p,b,x,j,cA=0,wA=!1,kA=!1,uA=!0;if(typeof o!="function")throw new PC(i);a=VC(a)||0,og(h)&&(wA=!!h.leading,kA="maxWait"in h,p=kA?pg(VC(h.maxWait)||0,a):p,uA="trailing"in h?!!h.trailing:uA);function VA(Mg){var sB=S,gQ=K;return S=K=I,cA=Mg,b=o.apply(gQ,sB),b}function oI(Mg){return cA=Mg,x=Yo(JI,a),wA?VA(Mg):b}function SI(Mg){var sB=Mg-j,gQ=Mg-cA,Hl=a-sB;return kA?Xg(Hl,p-gQ):Hl}function eI(Mg){var sB=Mg-j,gQ=Mg-cA;return j===I||sB>=a||sB<0||kA&&gQ>=p}function JI(){var Mg=Tt();if(eI(Mg))return HI(Mg);x=Yo(JI,SI(Mg))}function HI(Mg){return x=I,uA&&S?VA(Mg):(S=K=I,b)}function JC(){x!==I&&Rw(x),cA=0,S=j=K=x=I}function eC(){return x===I?b:HI(Tt())}function dC(){var Mg=Tt(),sB=eI(Mg);if(S=arguments,K=this,j=Mg,sB){if(x===I)return oI(j);if(kA)return Rw(x),x=Yo(JI,a),VA(j)}return x===I&&(x=Yo(JI,a)),b}return dC.cancel=JC,dC.flush=eC,dC}var NF=KI(function(o,a){return ow(o,1,a)}),KF=KI(function(o,a,h){return ow(o,VC(a)||0,h)});function FF(o){return XB(o,F)}function xt(o,a){if(typeof o!="function"||a!=null&&typeof a!="function")throw new PC(i);var h=function(){var S=arguments,K=a?a.apply(this,S):S[0],p=h.cache;if(p.has(K))return p.get(K);var b=o.apply(this,S);return h.cache=p.set(K,b)||p,b};return h.cache=new(xt.Cache||jB),h}xt.Cache=jB;function Ot(o){if(typeof o!="function")throw new PC(i);return function(){var a=arguments;switch(a.length){case 0:return!o.call(this);case 1:return!o.call(this,a[0]);case 2:return!o.call(this,a[0],a[1]);case 3:return!o.call(this,a[0],a[1],a[2])}return!o.apply(this,a)}}function RF(o){return rl(2,o)}var JF=hN(function(o,a){a=a.length==1&&hI(a[0])?Qg(a[0],KC(iI())):Qg(Zg(a,1),KC(iI()));var h=a.length;return KI(function(S){for(var K=-1,p=Xg(S.length,h);++K<p;)S[K]=a[K].call(this,S[K]);return NC(o,this,S)})}),Pn=KI(function(o,a){var h=NQ(a,eE(Pn));return XB(o,N,I,a,h)}),Gl=KI(function(o,a){var h=NQ(a,eE(Gl));return XB(o,R,I,a,h)}),dF=zB(function(o,a){return XB(o,L,I,I,I,a)});function pF(o,a){if(typeof o!="function")throw new PC(i);return a=a===I?a:lI(a),KI(o,a)}function qF(o,a){if(typeof o!="function")throw new PC(i);return a=a==null?0:pg(lI(a),0),KI(function(h){var S=h[a],K=dQ(h,0,a);return S&&UQ(K,S),NC(o,this,K)})}function fF(o,a,h){var S=!0,K=!0;if(typeof o!="function")throw new PC(i);return og(h)&&(S="leading"in h?!!h.leading:S,K="trailing"in h?!!h.trailing:K),ll(o,a,{leading:S,maxWait:a,trailing:K})}function uF(o){return Dl(o,1)}function LF(o,a){return Pn(Rn(a),o)}function YF(){if(!arguments.length)return[];var o=arguments[0];return hI(o)?o:[o]}function HF(o){return WC(o,r)}function mF(o,a){return a=typeof a=="function"?a:I,WC(o,r,a)}function bF(o){return WC(o,n|r)}function TF(o,a){return a=typeof a=="function"?a:I,WC(o,n|r,a)}function xF(o,a){return a==null||Ew(o,a,Tg(a))}function aB(o,a){return o===a||o!==o&&a!==a}var OF=ut(cn),vF=ut(function(o,a){return o>=a}),ni=nw(function(){return arguments}())?nw:function(o){return rg(o)&&VI.call(o,"callee")&&!$c.call(o,"callee")},hI=BA.isArray,PF=fc?KC(fc):$0;function lC(o){return o!=null&&vt(o.length)&&!AQ(o)}function kg(o){return rg(o)&&lC(o)}function ZF(o){return o===!0||o===!1||rg(o)&&EC(o)==AI}var pQ=i0||gD,WF=uc?KC(uc):AN;function _F(o){return rg(o)&&o.nodeType===1&&!Ho(o)}function jF(o){if(o==null)return!0;if(lC(o)&&(hI(o)||typeof o=="string"||typeof o.splice=="function"||pQ(o)||tE(o)||ni(o)))return!o.length;var a=zg(o);if(a==hA||a==nI)return!o.size;if(Lo(o))return!Gn(o).length;for(var h in o)if(VI.call(o,h))return!1;return!0}function VF(o,a){return qo(o,a)}function XF(o,a,h){h=typeof h=="function"?h:I;var S=h?h(o,a):I;return S===I?qo(o,a,I,h):!!S}function Zn(o){if(!rg(o))return!1;var a=EC(o);return a==vA||a==KA||typeof o.message=="string"&&typeof o.name=="string"&&!Ho(o)}function zF(o){return typeof o=="number"&&Iw(o)}function AQ(o){if(!og(o))return!1;var a=EC(o);return a==SA||a==sA||a==P||a==$A}function Sl(o){return typeof o=="number"&&o==lI(o)}function vt(o){return typeof o=="number"&&o>-1&&o%1==0&&o<=iA}function og(o){var a=typeof o;return o!=null&&(a=="object"||a=="function")}function rg(o){return o!=null&&typeof o=="object"}var yl=Lc?KC(Lc):gN;function $F(o,a){return o===a||ln(o,a,Ln(a))}function AR(o,a,h){return h=typeof h=="function"?h:I,ln(o,a,Ln(a),h)}function IR(o){return kl(o)&&o!=+o}function gR(o){if(mN(o))throw new rI(B);return Dw(o)}function CR(o){return o===null}function BR(o){return o==null}function kl(o){return typeof o=="number"||rg(o)&&EC(o)==YA}function Ho(o){if(!rg(o)||EC(o)!=WA)return!1;var a=ct(o);if(a===null)return!0;var h=VI.call(a,"constructor")&&a.constructor;return typeof h=="function"&&h instanceof h&&nt.call(h)==A0}var Wn=Yc?KC(Yc):CN;function QR(o){return Sl(o)&&o>=-iA&&o<=iA}var Ml=Hc?KC(Hc):BN;function Pt(o){return typeof o=="string"||!hI(o)&&rg(o)&&EC(o)==m}function RC(o){return typeof o=="symbol"||rg(o)&&EC(o)==q}var tE=mc?KC(mc):QN;function iR(o){return o===I}function ER(o){return rg(o)&&zg(o)==yA}function oR(o){return rg(o)&&EC(o)==NA}var eR=ut(Sn),tR=ut(function(o,a){return o<=a});function Ul(o){if(!o)return[];if(lC(o))return Pt(o)?eB(o):wC(o);if(Mo&&o[Mo])return xU(o[Mo]());var a=zg(o),h=a==hA?on:a==nI?tt:aE;return h(o)}function IQ(o){if(!o)return o===0?o:0;if(o=VC(o),o===gA||o===-gA){var a=o<0?-1:1;return a*MA}return o===o?o:0}function lI(o){var a=IQ(o),h=a%1;return a===a?h?a-h:a:0}function Nl(o){return o?ei(lI(o),0,mA):0}function VC(o){if(typeof o=="number")return o;if(RC(o))return lA;if(og(o)){var a=typeof o.valueOf=="function"?o.valueOf():o;o=og(a)?a+"":a}if(typeof o!="string")return o===0?o:+o;o=Pc(o);var h=wI.test(o);return h||NI.test(o)?UU(o.slice(2),h?2:8):DI.test(o)?lA:+o}function Kl(o){return JB(o,GC(o))}function aR(o){return o?ei(lI(o),-iA,iA):o===0?o:0}function ZI(o){return o==null?"":FC(o)}var sR=EE(function(o,a){if(Lo(a)||lC(a)){JB(a,Tg(a),o);return}for(var h in a)VI.call(a,h)&&Ro(o,h,a[h])}),Fl=EE(function(o,a){JB(a,GC(a),o)}),Zt=EE(function(o,a,h,S){JB(a,GC(a),o,S)}),nR=EE(function(o,a,h,S){JB(a,Tg(a),o,S)}),DR=zB(Dn);function rR(o,a){var h=iE(o);return a==null?h:iw(h,a)}var hR=KI(function(o,a){o=$I(o);var h=-1,S=a.length,K=S>2?a[2]:I;for(K&&oC(a[0],a[1],K)&&(S=1);++h<S;)for(var p=a[h],b=GC(p),x=-1,j=b.length;++x<j;){var cA=b[x],wA=o[cA];(wA===I||aB(wA,CE[cA])&&!VI.call(o,cA))&&(o[cA]=p[cA])}return o}),cR=KI(function(o){return o.push(I,Pw),NC(Rl,I,o)});function wR(o,a){return Tc(o,iI(a,3),RB)}function lR(o,a){return Tc(o,iI(a,3),hn)}function GR(o,a){return o==null?o:rn(o,iI(a,3),GC)}function SR(o,a){return o==null?o:aw(o,iI(a,3),GC)}function yR(o,a){return o&&RB(o,iI(a,3))}function kR(o,a){return o&&hn(o,iI(a,3))}function MR(o){return o==null?[]:Kt(o,Tg(o))}function UR(o){return o==null?[]:Kt(o,GC(o))}function _n(o,a,h){var S=o==null?I:ti(o,a);return S===I?h:S}function NR(o,a){return o!=null&&_w(o,a,j0)}function jn(o,a){return o!=null&&_w(o,a,V0)}var KR=bw(function(o,a,h){a!=null&&typeof a.toString!="function"&&(a=Dt.call(a)),o[a]=h},Xn(SC)),FR=bw(function(o,a,h){a!=null&&typeof a.toString!="function"&&(a=Dt.call(a)),VI.call(o,a)?o[a].push(h):o[a]=[h]},iI),RR=KI(po);function Tg(o){return lC(o)?Bw(o):Gn(o)}function GC(o){return lC(o)?Bw(o,!0):iN(o)}function JR(o,a){var h={};return a=iI(a,3),RB(o,function(S,K,p){VB(h,a(S,K,p),S)}),h}function dR(o,a){var h={};return a=iI(a,3),RB(o,function(S,K,p){VB(h,K,a(S,K,p))}),h}var pR=EE(function(o,a,h){Ft(o,a,h)}),Rl=EE(function(o,a,h,S){Ft(o,a,h,S)}),qR=zB(function(o,a){var h={};if(o==null)return h;var S=!1;a=Qg(a,function(p){return p=JQ(p,o),S||(S=p.length>1),p}),JB(o,fn(o),h),S&&(h=WC(h,n|D|r,KN));for(var K=a.length;K--;)Nn(h,a[K]);return h});function fR(o,a){return Jl(o,Ot(iI(a)))}var uR=zB(function(o,a){return o==null?{}:oN(o,a)});function Jl(o,a){if(o==null)return{};var h=Qg(fn(o),function(S){return[S]});return a=iI(a),Sw(o,h,function(S,K){return a(S,K[0])})}function LR(o,a,h){a=JQ(a,o);var S=-1,K=a.length;for(K||(K=1,o=I);++S<K;){var p=o==null?I:o[dB(a[S])];p===I&&(S=K,p=h),o=AQ(p)?p.call(o):p}return o}function YR(o,a,h){return o==null?o:fo(o,a,h)}function HR(o,a,h,S){return S=typeof S=="function"?S:I,o==null?o:fo(o,a,h,S)}var dl=Ow(Tg),pl=Ow(GC);function mR(o,a,h){var S=hI(o),K=S||pQ(o)||tE(o);if(a=iI(a,4),h==null){var p=o&&o.constructor;K?h=S?new p:[]:og(o)?h=AQ(p)?iE(ct(o)):{}:h={}}return(K?vC:RB)(o,function(b,x,j){return a(h,b,x,j)}),h}function bR(o,a){return o==null?!0:Nn(o,a)}function TR(o,a,h){return o==null?o:Nw(o,a,Rn(h))}function xR(o,a,h,S){return S=typeof S=="function"?S:I,o==null?o:Nw(o,a,Rn(h),S)}function aE(o){return o==null?[]:En(o,Tg(o))}function OR(o){return o==null?[]:En(o,GC(o))}function vR(o,a,h){return h===I&&(h=a,a=I),h!==I&&(h=VC(h),h=h===h?h:0),a!==I&&(a=VC(a),a=a===a?a:0),ei(VC(o),a,h)}function PR(o,a,h){return a=IQ(a),h===I?(h=a,a=0):h=IQ(h),o=VC(o),X0(o,a,h)}function ZR(o,a,h){if(h&&typeof h!="boolean"&&oC(o,a,h)&&(a=h=I),h===I&&(typeof a=="boolean"?(h=a,a=I):typeof o=="boolean"&&(h=o,o=I)),o===I&&a===I?(o=0,a=1):(o=IQ(o),a===I?(a=o,o=0):a=IQ(a)),o>a){var S=o;o=a,a=S}if(h||o%1||a%1){var K=gw();return Xg(o+K*(a-o+MU("1e-"+((K+"").length-1))),a)}return kn(o,a)}var WR=oE(function(o,a,h){return a=a.toLowerCase(),o+(h?ql(a):a)});function ql(o){return Vn(ZI(o).toLowerCase())}function fl(o){return o=ZI(o),o&&o.replace(PI,YU).replace(DU,"")}function _R(o,a,h){o=ZI(o),a=FC(a);var S=o.length;h=h===I?S:ei(lI(h),0,S);var K=h;return h-=a.length,h>=0&&o.slice(h,K)==a}function jR(o){return o=ZI(o),o&&_I.test(o)?o.replace(TA,HU):o}function VR(o){return o=ZI(o),o&&Qt.test(o)?o.replace(kQ,"\\$&"):o}var XR=oE(function(o,a,h){return o+(h?"-":"")+a.toLowerCase()}),zR=oE(function(o,a,h){return o+(h?" ":"")+a.toLowerCase()}),$R=Yw("toLowerCase");function AJ(o,a,h){o=ZI(o),a=lI(a);var S=a?IE(o):0;if(!a||S>=a)return o;var K=(a-S)/2;return ft(St(K),h)+o+ft(Gt(K),h)}function IJ(o,a,h){o=ZI(o),a=lI(a);var S=a?IE(o):0;return a&&S<a?o+ft(a-S,h):o}function gJ(o,a,h){o=ZI(o),a=lI(a);var S=a?IE(o):0;return a&&S<a?ft(a-S,h)+o:o}function CJ(o,a,h){return h||a==null?a=0:a&&(a=+a),t0(ZI(o).replace(wo,""),a||0)}function BJ(o,a,h){return(h?oC(o,a,h):a===I)?a=1:a=lI(a),Mn(ZI(o),a)}function QJ(){var o=arguments,a=ZI(o[0]);return o.length<3?a:a.replace(o[1],o[2])}var iJ=oE(function(o,a,h){return o+(h?"_":"")+a.toLowerCase()});function EJ(o,a,h){return h&&typeof h!="number"&&oC(o,a,h)&&(a=h=I),h=h===I?mA:h>>>0,h?(o=ZI(o),o&&(typeof a=="string"||a!=null&&!Wn(a))&&(a=FC(a),!a&&AE(o))?dQ(eB(o),0,h):o.split(a,h)):[]}var oJ=oE(function(o,a,h){return o+(h?" ":"")+Vn(a)});function eJ(o,a,h){return o=ZI(o),h=h==null?0:ei(lI(h),0,o.length),a=FC(a),o.slice(h,h+a.length)==a}function tJ(o,a,h){var S=J.templateSettings;h&&oC(o,a,h)&&(a=I),o=ZI(o),a=Zt({},a,S,vw);var K=Zt({},a.imports,S.imports,vw),p=Tg(K),b=En(K,p),x,j,cA=0,wA=a.interpolate||Kg,kA="__p += '",uA=en((a.escape||Kg).source+"|"+wA.source+"|"+(wA===oB?CI:Kg).source+"|"+(a.evaluate||Kg).source+"|$","g"),VA="//# sourceURL="+(VI.call(a,"sourceURL")?(a.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++lU+"]")+`
`;o.replace(uA,function(eI,JI,HI,JC,eC,dC){return HI||(HI=JC),kA+=o.slice(cA,dC).replace(UC,mU),JI&&(x=!0,kA+=`' +
__e(`+JI+`) +
'`),eC&&(j=!0,kA+=`';
`+eC+`;
__p += '`),HI&&(kA+=`' +
((__t = (`+HI+`)) == null ? '' : __t) +
'`),cA=dC+eI.length,eI}),kA+=`';
`;var oI=VI.call(a,"variable")&&a.variable;if(!oI)kA=`with (obj) {
`+kA+`
}
`;else if(z.test(oI))throw new rI(E);kA=(j?kA.replace(ig,""):kA).replace(Z,"$1").replace(eA,"$1;"),kA="function("+(oI||"obj")+`) {
`+(oI?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(x?", __e = _.escape":"")+(j?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+kA+`return __p
}`;var SI=Ll(function(){return vI(p,VA+"return "+kA).apply(I,b)});if(SI.source=kA,Zn(SI))throw SI;return SI}function aJ(o){return ZI(o).toLowerCase()}function sJ(o){return ZI(o).toUpperCase()}function nJ(o,a,h){if(o=ZI(o),o&&(h||a===I))return Pc(o);if(!o||!(a=FC(a)))return o;var S=eB(o),K=eB(a),p=Zc(S,K),b=Wc(S,K)+1;return dQ(S,p,b).join("")}function DJ(o,a,h){if(o=ZI(o),o&&(h||a===I))return o.slice(0,jc(o)+1);if(!o||!(a=FC(a)))return o;var S=eB(o),K=Wc(S,eB(a))+1;return dQ(S,0,K).join("")}function rJ(o,a,h){if(o=ZI(o),o&&(h||a===I))return o.replace(wo,"");if(!o||!(a=FC(a)))return o;var S=eB(o),K=Zc(S,eB(a));return dQ(S,K).join("")}function hJ(o,a){var h=u,S=W;if(og(a)){var K="separator"in a?a.separator:K;h="length"in a?lI(a.length):h,S="omission"in a?FC(a.omission):S}o=ZI(o);var p=o.length;if(AE(o)){var b=eB(o);p=b.length}if(h>=p)return o;var x=h-IE(S);if(x<1)return S;var j=b?dQ(b,0,x).join(""):o.slice(0,x);if(K===I)return j+S;if(b&&(x+=j.length-x),Wn(K)){if(o.slice(x).search(K)){var cA,wA=j;for(K.global||(K=en(K.source,ZI(BI.exec(K))+"g")),K.lastIndex=0;cA=K.exec(wA);)var kA=cA.index;j=j.slice(0,kA===I?x:kA)}}else if(o.indexOf(FC(K),x)!=x){var uA=j.lastIndexOf(K);uA>-1&&(j=j.slice(0,uA))}return j+S}function cJ(o){return o=ZI(o),o&&zA.test(o)?o.replace(UA,ZU):o}var wJ=oE(function(o,a,h){return o+(h?" ":"")+a.toUpperCase()}),Vn=Yw("toUpperCase");function ul(o,a,h){return o=ZI(o),a=h?I:a,a===I?TU(o)?jU(o):pU(o):o.match(a)||[]}var Ll=KI(function(o,a){try{return NC(o,I,a)}catch(h){return Zn(h)?h:new rI(h)}}),lJ=zB(function(o,a){return vC(a,function(h){h=dB(h),VB(o,h,vn(o[h],o))}),o});function GJ(o){var a=o==null?0:o.length,h=iI();return o=a?Qg(o,function(S){if(typeof S[1]!="function")throw new PC(i);return[h(S[0]),S[1]]}):[],KI(function(S){for(var K=-1;++K<a;){var p=o[K];if(NC(p[0],this,S))return NC(p[1],this,S)}})}function SJ(o){return Z0(WC(o,n))}function Xn(o){return function(){return o}}function yJ(o,a){return o==null||o!==o?a:o}var kJ=mw(),MJ=mw(!0);function SC(o){return o}function zn(o){return rw(typeof o=="function"?o:WC(o,n))}function UJ(o){return cw(WC(o,n))}function NJ(o,a){return ww(o,WC(a,n))}var KJ=KI(function(o,a){return function(h){return po(h,o,a)}}),FJ=KI(function(o,a){return function(h){return po(o,h,a)}});function $n(o,a,h){var S=Tg(a),K=Kt(a,S);h==null&&!(og(a)&&(K.length||!S.length))&&(h=a,a=o,o=this,K=Kt(a,Tg(a)));var p=!(og(h)&&"chain"in h)||!!h.chain,b=AQ(o);return vC(K,function(x){var j=a[x];o[x]=j,b&&(o.prototype[x]=function(){var cA=this.__chain__;if(p||cA){var wA=o(this.__wrapped__),kA=wA.__actions__=wC(this.__actions__);return kA.push({func:j,args:arguments,thisArg:o}),wA.__chain__=cA,wA}return j.apply(o,UQ([this.value()],arguments))})}),o}function RJ(){return Pg._===this&&(Pg._=I0),this}function AD(){}function JJ(o){return o=lI(o),KI(function(a){return lw(a,o)})}var dJ=dn(Qg),pJ=dn(bc),qJ=dn(In);function Yl(o){return Hn(o)?gn(dB(o)):eN(o)}function fJ(o){return function(a){return o==null?I:ti(o,a)}}var uJ=Tw(),LJ=Tw(!0);function ID(){return[]}function gD(){return!1}function YJ(){return{}}function HJ(){return""}function mJ(){return!0}function bJ(o,a){if(o=lI(o),o<1||o>iA)return[];var h=mA,S=Xg(o,mA);a=iI(a),o-=mA;for(var K=Qn(S,a);++h<o;)a(h);return K}function TJ(o){return hI(o)?Qg(o,dB):RC(o)?[o]:wC(Cl(ZI(o)))}function xJ(o){var a=++$U;return ZI(o)+a}var OJ=qt(function(o,a){return o+a},0),vJ=pn("ceil"),PJ=qt(function(o,a){return o/a},1),ZJ=pn("floor");function WJ(o){return o&&o.length?Nt(o,SC,cn):I}function _J(o,a){return o&&o.length?Nt(o,iI(a,2),cn):I}function jJ(o){return Oc(o,SC)}function VJ(o,a){return Oc(o,iI(a,2))}function XJ(o){return o&&o.length?Nt(o,SC,Sn):I}function zJ(o,a){return o&&o.length?Nt(o,iI(a,2),Sn):I}var $J=qt(function(o,a){return o*a},1),Ad=pn("round"),Id=qt(function(o,a){return o-a},0);function gd(o){return o&&o.length?Bn(o,SC):0}function Cd(o,a){return o&&o.length?Bn(o,iI(a,2)):0}return J.after=UF,J.ary=Dl,J.assign=sR,J.assignIn=Fl,J.assignInWith=Zt,J.assignWith=nR,J.at=DR,J.before=rl,J.bind=vn,J.bindAll=lJ,J.bindKey=hl,J.castArray=YF,J.chain=al,J.chunk=ZN,J.compact=WN,J.concat=_N,J.cond=GJ,J.conforms=SJ,J.constant=Xn,J.countBy=gF,J.create=rR,J.curry=cl,J.curryRight=wl,J.debounce=ll,J.defaults=hR,J.defaultsDeep=cR,J.defer=NF,J.delay=KF,J.difference=jN,J.differenceBy=VN,J.differenceWith=XN,J.drop=zN,J.dropRight=$N,J.dropRightWhile=AK,J.dropWhile=IK,J.fill=gK,J.filter=BF,J.flatMap=EF,J.flatMapDeep=oF,J.flatMapDepth=eF,J.flatten=El,J.flattenDeep=CK,J.flattenDepth=BK,J.flip=FF,J.flow=kJ,J.flowRight=MJ,J.fromPairs=QK,J.functions=MR,J.functionsIn=UR,J.groupBy=tF,J.initial=EK,J.intersection=oK,J.intersectionBy=eK,J.intersectionWith=tK,J.invert=KR,J.invertBy=FR,J.invokeMap=sF,J.iteratee=zn,J.keyBy=nF,J.keys=Tg,J.keysIn=GC,J.map=bt,J.mapKeys=JR,J.mapValues=dR,J.matches=UJ,J.matchesProperty=NJ,J.memoize=xt,J.merge=pR,J.mergeWith=Rl,J.method=KJ,J.methodOf=FJ,J.mixin=$n,J.negate=Ot,J.nthArg=JJ,J.omit=qR,J.omitBy=fR,J.once=RF,J.orderBy=DF,J.over=dJ,J.overArgs=JF,J.overEvery=pJ,J.overSome=qJ,J.partial=Pn,J.partialRight=Gl,J.partition=rF,J.pick=uR,J.pickBy=Jl,J.property=Yl,J.propertyOf=fJ,J.pull=DK,J.pullAll=el,J.pullAllBy=rK,J.pullAllWith=hK,J.pullAt=cK,J.range=uJ,J.rangeRight=LJ,J.rearg=dF,J.reject=wF,J.remove=wK,J.rest=pF,J.reverse=xn,J.sampleSize=GF,J.set=YR,J.setWith=HR,J.shuffle=SF,J.slice=lK,J.sortBy=MF,J.sortedUniq=NK,J.sortedUniqBy=KK,J.split=EJ,J.spread=qF,J.tail=FK,J.take=RK,J.takeRight=JK,J.takeRightWhile=dK,J.takeWhile=pK,J.tap=WK,J.throttle=fF,J.thru=mt,J.toArray=Ul,J.toPairs=dl,J.toPairsIn=pl,J.toPath=TJ,J.toPlainObject=Kl,J.transform=mR,J.unary=uF,J.union=qK,J.unionBy=fK,J.unionWith=uK,J.uniq=LK,J.uniqBy=YK,J.uniqWith=HK,J.unset=bR,J.unzip=On,J.unzipWith=tl,J.update=TR,J.updateWith=xR,J.values=aE,J.valuesIn=OR,J.without=mK,J.words=ul,J.wrap=LF,J.xor=bK,J.xorBy=TK,J.xorWith=xK,J.zip=OK,J.zipObject=vK,J.zipObjectDeep=PK,J.zipWith=ZK,J.entries=dl,J.entriesIn=pl,J.extend=Fl,J.extendWith=Zt,$n(J,J),J.add=OJ,J.attempt=Ll,J.camelCase=WR,J.capitalize=ql,J.ceil=vJ,J.clamp=vR,J.clone=HF,J.cloneDeep=bF,J.cloneDeepWith=TF,J.cloneWith=mF,J.conformsTo=xF,J.deburr=fl,J.defaultTo=yJ,J.divide=PJ,J.endsWith=_R,J.eq=aB,J.escape=jR,J.escapeRegExp=VR,J.every=CF,J.find=QF,J.findIndex=Ql,J.findKey=wR,J.findLast=iF,J.findLastIndex=il,J.findLastKey=lR,J.floor=ZJ,J.forEach=sl,J.forEachRight=nl,J.forIn=GR,J.forInRight=SR,J.forOwn=yR,J.forOwnRight=kR,J.get=_n,J.gt=OF,J.gte=vF,J.has=NR,J.hasIn=jn,J.head=ol,J.identity=SC,J.includes=aF,J.indexOf=iK,J.inRange=PR,J.invoke=RR,J.isArguments=ni,J.isArray=hI,J.isArrayBuffer=PF,J.isArrayLike=lC,J.isArrayLikeObject=kg,J.isBoolean=ZF,J.isBuffer=pQ,J.isDate=WF,J.isElement=_F,J.isEmpty=jF,J.isEqual=VF,J.isEqualWith=XF,J.isError=Zn,J.isFinite=zF,J.isFunction=AQ,J.isInteger=Sl,J.isLength=vt,J.isMap=yl,J.isMatch=$F,J.isMatchWith=AR,J.isNaN=IR,J.isNative=gR,J.isNil=BR,J.isNull=CR,J.isNumber=kl,J.isObject=og,J.isObjectLike=rg,J.isPlainObject=Ho,J.isRegExp=Wn,J.isSafeInteger=QR,J.isSet=Ml,J.isString=Pt,J.isSymbol=RC,J.isTypedArray=tE,J.isUndefined=iR,J.isWeakMap=ER,J.isWeakSet=oR,J.join=aK,J.kebabCase=XR,J.last=jC,J.lastIndexOf=sK,J.lowerCase=zR,J.lowerFirst=$R,J.lt=eR,J.lte=tR,J.max=WJ,J.maxBy=_J,J.mean=jJ,J.meanBy=VJ,J.min=XJ,J.minBy=zJ,J.stubArray=ID,J.stubFalse=gD,J.stubObject=YJ,J.stubString=HJ,J.stubTrue=mJ,J.multiply=$J,J.nth=nK,J.noConflict=RJ,J.noop=AD,J.now=Tt,J.pad=AJ,J.padEnd=IJ,J.padStart=gJ,J.parseInt=CJ,J.random=ZR,J.reduce=hF,J.reduceRight=cF,J.repeat=BJ,J.replace=QJ,J.result=LR,J.round=Ad,J.runInContext=_,J.sample=lF,J.size=yF,J.snakeCase=iJ,J.some=kF,J.sortedIndex=GK,J.sortedIndexBy=SK,J.sortedIndexOf=yK,J.sortedLastIndex=kK,J.sortedLastIndexBy=MK,J.sortedLastIndexOf=UK,J.startCase=oJ,J.startsWith=eJ,J.subtract=Id,J.sum=gd,J.sumBy=Cd,J.template=tJ,J.times=bJ,J.toFinite=IQ,J.toInteger=lI,J.toLength=Nl,J.toLower=aJ,J.toNumber=VC,J.toSafeInteger=aR,J.toString=ZI,J.toUpper=sJ,J.trim=nJ,J.trimEnd=DJ,J.trimStart=rJ,J.truncate=hJ,J.unescape=cJ,J.uniqueId=xJ,J.upperCase=wJ,J.upperFirst=Vn,J.each=sl,J.eachRight=nl,J.first=ol,$n(J,function(){var o={};return RB(J,function(a,h){VI.call(J.prototype,h)||(o[h]=a)}),o}(),{chain:!1}),J.VERSION=g,vC(["bind","bindKey","curry","curryRight","partial","partialRight"],function(o){J[o].placeholder=J}),vC(["drop","take"],function(o,a){uI.prototype[o]=function(h){h=h===I?1:pg(lI(h),0);var S=this.__filtered__&&!a?new uI(this):this.clone();return S.__filtered__?S.__takeCount__=Xg(h,S.__takeCount__):S.__views__.push({size:Xg(h,mA),type:o+(S.__dir__<0?"Right":"")}),S},uI.prototype[o+"Right"]=function(h){return this.reverse()[o](h).reverse()}}),vC(["filter","map","takeWhile"],function(o,a){var h=a+1,S=h==v||h==oA;uI.prototype[o]=function(K){var p=this.clone();return p.__iteratees__.push({iteratee:iI(K,3),type:h}),p.__filtered__=p.__filtered__||S,p}}),vC(["head","last"],function(o,a){var h="take"+(a?"Right":"");uI.prototype[o]=function(){return this[h](1).value()[0]}}),vC(["initial","tail"],function(o,a){var h="drop"+(a?"":"Right");uI.prototype[o]=function(){return this.__filtered__?new uI(this):this[h](1)}}),uI.prototype.compact=function(){return this.filter(SC)},uI.prototype.find=function(o){return this.filter(o).head()},uI.prototype.findLast=function(o){return this.reverse().find(o)},uI.prototype.invokeMap=KI(function(o,a){return typeof o=="function"?new uI(this):this.map(function(h){return po(h,o,a)})}),uI.prototype.reject=function(o){return this.filter(Ot(iI(o)))},uI.prototype.slice=function(o,a){o=lI(o);var h=this;return h.__filtered__&&(o>0||a<0)?new uI(h):(o<0?h=h.takeRight(-o):o&&(h=h.drop(o)),a!==I&&(a=lI(a),h=a<0?h.dropRight(-a):h.take(a-o)),h)},uI.prototype.takeRightWhile=function(o){return this.reverse().takeWhile(o).reverse()},uI.prototype.toArray=function(){return this.take(mA)},RB(uI.prototype,function(o,a){var h=/^(?:filter|find|map|reject)|While$/.test(a),S=/^(?:head|last)$/.test(a),K=J[S?"take"+(a=="last"?"Right":""):a],p=S||/^find/.test(a);K&&(J.prototype[a]=function(){var b=this.__wrapped__,x=S?[1]:arguments,j=b instanceof uI,cA=x[0],wA=j||hI(b),kA=function(JI){var HI=K.apply(J,UQ([JI],x));return S&&uA?HI[0]:HI};wA&&h&&typeof cA=="function"&&cA.length!=1&&(j=wA=!1);var uA=this.__chain__,VA=!!this.__actions__.length,oI=p&&!uA,SI=j&&!VA;if(!p&&wA){b=SI?b:new uI(this);var eI=o.apply(b,x);return eI.__actions__.push({func:mt,args:[kA],thisArg:I}),new ZC(eI,uA)}return oI&&SI?o.apply(this,x):(eI=this.thru(kA),oI?S?eI.value()[0]:eI.value():eI)})}),vC(["pop","push","shift","sort","splice","unshift"],function(o){var a=at[o],h=/^(?:push|sort|unshift)$/.test(o)?"tap":"thru",S=/^(?:pop|shift)$/.test(o);J.prototype[o]=function(){var K=arguments;if(S&&!this.__chain__){var p=this.value();return a.apply(hI(p)?p:[],K)}return this[h](function(b){return a.apply(hI(b)?b:[],K)})}}),RB(uI.prototype,function(o,a){var h=J[a];if(h){var S=h.name+"";VI.call(QE,S)||(QE[S]=[]),QE[S].push({name:a,func:h})}}),QE[pt(I,c).name]=[{name:"wrapper",func:I}],uI.prototype.clone=c0,uI.prototype.reverse=w0,uI.prototype.value=l0,J.prototype.at=_K,J.prototype.chain=jK,J.prototype.commit=VK,J.prototype.next=XK,J.prototype.plant=$K,J.prototype.reverse=AF,J.prototype.toJSON=J.prototype.valueOf=J.prototype.value=IF,J.prototype.first=J.prototype.head,Mo&&(J.prototype[Mo]=zK),J},gE=VU();Qi?((Qi.exports=gE)._=gE,Xs._=gE):Pg._=gE}).call(zo)})(as,as.exports);as.exports;const XT=()=>rb("threlte-controls",{orbitControls:jg(void 0)}),xS={type:"change"},_D={type:"start"},OS={type:"end"};let zT=class extends ZB{constructor(A,I){super(),this.object=A,this.domElement=I,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new f,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ki.ROTATE,MIDDLE:ki.DOLLY,RIGHT:ki.PAN},this.touches={ONE:Mi.ROTATE,TWO:Mi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return E.phi},this.getAzimuthalAngle=function(){return E.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(T){T.addEventListener("keydown",tI),this._domElementKeyEvents=T},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",tI),this._domElementKeyEvents=null},this.saveState=function(){g.target0.copy(g.target),g.position0.copy(g.object.position),g.zoom0=g.object.zoom},this.reset=function(){g.target.copy(g.target0),g.object.position.copy(g.position0),g.object.zoom=g.zoom0,g.object.updateProjectionMatrix(),g.dispatchEvent(xS),g.update(),B=C.NONE},this.update=function(){const T=new f,DA=new ng().setFromUnitVectors(A.up,new f(0,1,0)),CA=DA.clone().invert(),pA=new f,xA=new ng,jA=2*Math.PI;return function(){const ZA=g.object.position;T.copy(ZA).sub(g.target),T.applyQuaternion(DA),E.setFromVector3(T),g.autoRotate&&B===C.NONE&&F(d()),g.enableDamping?(E.theta+=e.theta*g.dampingFactor,E.phi+=e.phi*g.dampingFactor):(E.theta+=e.theta,E.phi+=e.phi);let aI=g.minAzimuthAngle,cI=g.maxAzimuthAngle;return isFinite(aI)&&isFinite(cI)&&(aI<-Math.PI?aI+=jA:aI>Math.PI&&(aI-=jA),cI<-Math.PI?cI+=jA:cI>Math.PI&&(cI-=jA),aI<=cI?E.theta=Math.max(aI,Math.min(cI,E.theta)):E.theta=E.theta>(aI+cI)/2?Math.max(aI,E.theta):Math.min(cI,E.theta)),E.phi=Math.max(g.minPolarAngle,Math.min(g.maxPolarAngle,E.phi)),E.makeSafe(),E.radius*=t,E.radius=Math.max(g.minDistance,Math.min(g.maxDistance,E.radius)),g.enableDamping===!0?g.target.addScaledVector(s,g.dampingFactor):g.target.add(s),T.setFromSpherical(E),T.applyQuaternion(CA),ZA.copy(g.target).add(T),g.object.lookAt(g.target),g.enableDamping===!0?(e.theta*=1-g.dampingFactor,e.phi*=1-g.dampingFactor,s.multiplyScalar(1-g.dampingFactor)):(e.set(0,0,0),s.set(0,0,0)),t=1,n||pA.distanceToSquared(g.object.position)>i||8*(1-xA.dot(g.object.quaternion))>i?(g.dispatchEvent(xS),pA.copy(g.object.position),xA.copy(g.object.quaternion),n=!1,!0):!1}}(),this.dispose=function(){g.domElement.removeEventListener("contextmenu",q),g.domElement.removeEventListener("pointerdown",hA),g.domElement.removeEventListener("pointercancel",JA),g.domElement.removeEventListener("wheel",$A),g.domElement.removeEventListener("pointermove",YA),g.domElement.removeEventListener("pointerup",JA),g._domElementKeyEvents!==null&&(g._domElementKeyEvents.removeEventListener("keydown",tI),g._domElementKeyEvents=null)};const g=this,C={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let B=C.NONE;const i=1e-6,E=new Yr,e=new Yr;let t=1;const s=new f;let n=!1;const D=new rA,r=new rA,w=new rA,G=new rA,l=new rA,c=new rA,k=new rA,y=new rA,M=new rA,N=[],R={};function d(){return 2*Math.PI/60/60*g.autoRotateSpeed}function L(){return Math.pow(.95,g.zoomSpeed)}function F(T){e.theta-=T}function u(T){e.phi-=T}const W=function(){const T=new f;return function(CA,pA){T.setFromMatrixColumn(pA,0),T.multiplyScalar(-CA),s.add(T)}}(),$=function(){const T=new f;return function(CA,pA){g.screenSpacePanning===!0?T.setFromMatrixColumn(pA,1):(T.setFromMatrixColumn(pA,0),T.crossVectors(g.object.up,T)),T.multiplyScalar(CA),s.add(T)}}(),H=function(){const T=new f;return function(CA,pA){const xA=g.domElement;if(g.object.isPerspectiveCamera){const jA=g.object.position;T.copy(jA).sub(g.target);let HA=T.length();HA*=Math.tan(g.object.fov/2*Math.PI/180),W(2*CA*HA/xA.clientHeight,g.object.matrix),$(2*pA*HA/xA.clientHeight,g.object.matrix)}else g.object.isOrthographicCamera?(W(CA*(g.object.right-g.object.left)/g.object.zoom/xA.clientWidth,g.object.matrix),$(pA*(g.object.top-g.object.bottom)/g.object.zoom/xA.clientHeight,g.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),g.enablePan=!1)}}();function v(T){g.object.isPerspectiveCamera?t/=T:g.object.isOrthographicCamera?(g.object.zoom=Math.max(g.minZoom,Math.min(g.maxZoom,g.object.zoom*T)),g.object.updateProjectionMatrix(),n=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),g.enableZoom=!1)}function IA(T){g.object.isPerspectiveCamera?t*=T:g.object.isOrthographicCamera?(g.object.zoom=Math.max(g.minZoom,Math.min(g.maxZoom,g.object.zoom/T)),g.object.updateProjectionMatrix(),n=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),g.enableZoom=!1)}function oA(T){D.set(T.clientX,T.clientY)}function gA(T){k.set(T.clientX,T.clientY)}function iA(T){G.set(T.clientX,T.clientY)}function MA(T){r.set(T.clientX,T.clientY),w.subVectors(r,D).multiplyScalar(g.rotateSpeed);const DA=g.domElement;F(2*Math.PI*w.x/DA.clientHeight),u(2*Math.PI*w.y/DA.clientHeight),D.copy(r),g.update()}function lA(T){y.set(T.clientX,T.clientY),M.subVectors(y,k),M.y>0?v(L()):M.y<0&&IA(L()),k.copy(y),g.update()}function mA(T){l.set(T.clientX,T.clientY),c.subVectors(l,G).multiplyScalar(g.panSpeed),H(c.x,c.y),G.copy(l),g.update()}function FA(T){T.deltaY<0?IA(L()):T.deltaY>0&&v(L()),g.update()}function EA(T){let DA=!1;switch(T.code){case g.keys.UP:T.ctrlKey||T.metaKey||T.shiftKey?u(2*Math.PI*g.rotateSpeed/g.domElement.clientHeight):H(0,g.keyPanSpeed),DA=!0;break;case g.keys.BOTTOM:T.ctrlKey||T.metaKey||T.shiftKey?u(-2*Math.PI*g.rotateSpeed/g.domElement.clientHeight):H(0,-g.keyPanSpeed),DA=!0;break;case g.keys.LEFT:T.ctrlKey||T.metaKey||T.shiftKey?F(2*Math.PI*g.rotateSpeed/g.domElement.clientHeight):H(g.keyPanSpeed,0),DA=!0;break;case g.keys.RIGHT:T.ctrlKey||T.metaKey||T.shiftKey?F(-2*Math.PI*g.rotateSpeed/g.domElement.clientHeight):H(-g.keyPanSpeed,0),DA=!0;break}DA&&(T.preventDefault(),g.update())}function GA(){if(N.length===1)D.set(N[0].pageX,N[0].pageY);else{const T=.5*(N[0].pageX+N[1].pageX),DA=.5*(N[0].pageY+N[1].pageY);D.set(T,DA)}}function RA(){if(N.length===1)G.set(N[0].pageX,N[0].pageY);else{const T=.5*(N[0].pageX+N[1].pageX),DA=.5*(N[0].pageY+N[1].pageY);G.set(T,DA)}}function qA(){const T=N[0].pageX-N[1].pageX,DA=N[0].pageY-N[1].pageY,CA=Math.sqrt(T*T+DA*DA);k.set(0,CA)}function P(){g.enableZoom&&qA(),g.enablePan&&RA()}function AI(){g.enableZoom&&qA(),g.enableRotate&&GA()}function II(T){if(N.length==1)r.set(T.pageX,T.pageY);else{const CA=dA(T),pA=.5*(T.pageX+CA.x),xA=.5*(T.pageY+CA.y);r.set(pA,xA)}w.subVectors(r,D).multiplyScalar(g.rotateSpeed);const DA=g.domElement;F(2*Math.PI*w.x/DA.clientHeight),u(2*Math.PI*w.y/DA.clientHeight),D.copy(r)}function KA(T){if(N.length===1)l.set(T.pageX,T.pageY);else{const DA=dA(T),CA=.5*(T.pageX+DA.x),pA=.5*(T.pageY+DA.y);l.set(CA,pA)}c.subVectors(l,G).multiplyScalar(g.panSpeed),H(c.x,c.y),G.copy(l)}function vA(T){const DA=dA(T),CA=T.pageX-DA.x,pA=T.pageY-DA.y,xA=Math.sqrt(CA*CA+pA*pA);y.set(0,xA),M.set(0,Math.pow(y.y/k.y,g.zoomSpeed)),v(M.y),k.copy(y)}function SA(T){g.enableZoom&&vA(T),g.enablePan&&KA(T)}function sA(T){g.enableZoom&&vA(T),g.enableRotate&&II(T)}function hA(T){g.enabled!==!1&&(N.length===0&&(g.domElement.setPointerCapture(T.pointerId),g.domElement.addEventListener("pointermove",YA),g.domElement.addEventListener("pointerup",JA)),QA(T),T.pointerType==="touch"?nI(T):WA(T))}function YA(T){g.enabled!==!1&&(T.pointerType==="touch"?m(T):gI(T))}function JA(T){yA(T),N.length===0&&(g.domElement.releasePointerCapture(T.pointerId),g.domElement.removeEventListener("pointermove",YA),g.domElement.removeEventListener("pointerup",JA)),g.dispatchEvent(OS),B=C.NONE}function WA(T){let DA;switch(T.button){case 0:DA=g.mouseButtons.LEFT;break;case 1:DA=g.mouseButtons.MIDDLE;break;case 2:DA=g.mouseButtons.RIGHT;break;default:DA=-1}switch(DA){case ki.DOLLY:if(g.enableZoom===!1)return;gA(T),B=C.DOLLY;break;case ki.ROTATE:if(T.ctrlKey||T.metaKey||T.shiftKey){if(g.enablePan===!1)return;iA(T),B=C.PAN}else{if(g.enableRotate===!1)return;oA(T),B=C.ROTATE}break;case ki.PAN:if(T.ctrlKey||T.metaKey||T.shiftKey){if(g.enableRotate===!1)return;oA(T),B=C.ROTATE}else{if(g.enablePan===!1)return;iA(T),B=C.PAN}break;default:B=C.NONE}B!==C.NONE&&g.dispatchEvent(_D)}function gI(T){switch(B){case C.ROTATE:if(g.enableRotate===!1)return;MA(T);break;case C.DOLLY:if(g.enableZoom===!1)return;lA(T);break;case C.PAN:if(g.enablePan===!1)return;mA(T);break}}function $A(T){g.enabled===!1||g.enableZoom===!1||B!==C.NONE||(T.preventDefault(),g.dispatchEvent(_D),FA(T),g.dispatchEvent(OS))}function tI(T){g.enabled===!1||g.enablePan===!1||EA(T)}function nI(T){switch(NA(T),N.length){case 1:switch(g.touches.ONE){case Mi.ROTATE:if(g.enableRotate===!1)return;GA(),B=C.TOUCH_ROTATE;break;case Mi.PAN:if(g.enablePan===!1)return;RA(),B=C.TOUCH_PAN;break;default:B=C.NONE}break;case 2:switch(g.touches.TWO){case Mi.DOLLY_PAN:if(g.enableZoom===!1&&g.enablePan===!1)return;P(),B=C.TOUCH_DOLLY_PAN;break;case Mi.DOLLY_ROTATE:if(g.enableZoom===!1&&g.enableRotate===!1)return;AI(),B=C.TOUCH_DOLLY_ROTATE;break;default:B=C.NONE}break;default:B=C.NONE}B!==C.NONE&&g.dispatchEvent(_D)}function m(T){switch(NA(T),B){case C.TOUCH_ROTATE:if(g.enableRotate===!1)return;II(T),g.update();break;case C.TOUCH_PAN:if(g.enablePan===!1)return;KA(T),g.update();break;case C.TOUCH_DOLLY_PAN:if(g.enableZoom===!1&&g.enablePan===!1)return;SA(T),g.update();break;case C.TOUCH_DOLLY_ROTATE:if(g.enableZoom===!1&&g.enableRotate===!1)return;sA(T),g.update();break;default:B=C.NONE}}function q(T){g.enabled!==!1&&T.preventDefault()}function QA(T){N.push(T)}function yA(T){delete R[T.pointerId];for(let DA=0;DA<N.length;DA++)if(N[DA].pointerId==T.pointerId){N.splice(DA,1);return}}function NA(T){let DA=R[T.pointerId];DA===void 0&&(DA=new rA,R[T.pointerId]=DA),DA.set(T.pageX,T.pageY)}function dA(T){const DA=T.pointerId===N[0].pointerId?N[1]:N[0];return R[DA.pointerId]}g.domElement.addEventListener("contextmenu",q),g.domElement.addEventListener("pointerdown",hA),g.domElement.addEventListener("pointercancel",JA),g.domElement.addEventListener("wheel",$A,{passive:!1}),this.update()}};const $T=Q=>({ref:Q&1}),vS=Q=>({ref:Q[0]});function A2(Q){let A;const I=Q[7].default,g=BB(I,Q,Q[10],vS);return{c(){g&&g.c()},m(C,B){g&&g.m(C,B),A=!0},p(C,B){g&&g.p&&(!A||B&1025)&&iB(g,I,C,C[10],A?QB(I,C[10],B,$T):EB(C[10]),vS)},i(C){A||(bA(g,C),A=!0)},o(C){PA(g,C),A=!1},d(C){g&&g.d(C)}}}function I2(Q){let A,I;const g=[{is:Q[0]},Q[6]];let C={$$slots:{default:[A2,({ref:B})=>({0:B}),({ref:B})=>B?1:0]},$$scope:{ctx:Q}};for(let B=0;B<g.length;B+=1)C=_E(C,g[B]);return A=new _g({props:C}),Q[8](A),A.$on("change",Q[3]),A.$on("create",Q[9]),{c(){LI(A.$$.fragment)},m(B,i){pI(A,B,i),I=!0},p(B,[i]){const E=i&65?Dd(g,[i&1&&{is:B[0]},i&64&&rd(B[6])]):{};i&1025&&(E.$$scope={dirty:i,ctx:B}),A.$set(E)},i(B){I||(bA(A.$$.fragment,B),I=!0)},o(B){PA(A.$$.fragment,B),I=!1},d(B){Q[8](null),qI(A,B)}}}function g2(Q,A,I){const g=["ref"];let C=Wa(A,g),B,i,{$$slots:E={},$$scope:e}=A;const t=zk();cQ(Q,t,y=>I(11,B=y));const{renderer:s,invalidate:n}=ji();if(!s)throw new Error("Threlte Context missing: Is <OrbitControls> a child of <Canvas>?");if(!(B instanceof Ye))throw new Error("Parent missing: <OrbitControls> need to be a child of a <Camera>");const D=new zT(B,s.domElement),{start:r,stop:w}=BM(()=>D.update(),{autostart:!1,debugFrameloopMessage:"OrbitControls: updating controls"}),G=hb();cQ(Q,G,y=>I(1,i=y));const{orbitControls:l}=XT();function c(y){se[y?"unshift":"push"](()=>{i=y,G.set(i)})}const k=({ref:y,cleanup:M})=>{l.set(y),M(()=>{l.set(void 0)})};return Q.$$set=y=>{A=_E(_E({},A),Ar(y)),I(6,C=Wa(A,g)),"$$scope"in y&&I(10,e=y.$$scope)},Q.$$.update=()=>{C.autoRotate||C.enableDamping?r():w()},[D,i,t,n,G,l,C,E,c,k,e]}class C2 extends hC{constructor(A){super(),rC(this,A,g2,I2,BC,{ref:0})}get ref(){return this.$$.ctx[0]}}new sI;new sI;new ug;function $o(Q,A,I){return Math.max(A,Math.min(I,Q))}function B2(Q,A){return(Q%A+A)%A}function jD(Q,A,I){return(1-I)*Q+I*A}const sQ="srgb",wc="srgb-linear",CU="display-p3";class Bt{constructor(){Bt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(A,I,g,C,B,i,E,e,t){const s=this.elements;return s[0]=A,s[1]=C,s[2]=E,s[3]=I,s[4]=B,s[5]=e,s[6]=g,s[7]=i,s[8]=t,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(A){const I=this.elements,g=A.elements;return I[0]=g[0],I[1]=g[1],I[2]=g[2],I[3]=g[3],I[4]=g[4],I[5]=g[5],I[6]=g[6],I[7]=g[7],I[8]=g[8],this}extractBasis(A,I,g){return A.setFromMatrix3Column(this,0),I.setFromMatrix3Column(this,1),g.setFromMatrix3Column(this,2),this}setFromMatrix4(A){const I=A.elements;return this.set(I[0],I[4],I[8],I[1],I[5],I[9],I[2],I[6],I[10]),this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,I){const g=A.elements,C=I.elements,B=this.elements,i=g[0],E=g[3],e=g[6],t=g[1],s=g[4],n=g[7],D=g[2],r=g[5],w=g[8],G=C[0],l=C[3],c=C[6],k=C[1],y=C[4],M=C[7],N=C[2],R=C[5],d=C[8];return B[0]=i*G+E*k+e*N,B[3]=i*l+E*y+e*R,B[6]=i*c+E*M+e*d,B[1]=t*G+s*k+n*N,B[4]=t*l+s*y+n*R,B[7]=t*c+s*M+n*d,B[2]=D*G+r*k+w*N,B[5]=D*l+r*y+w*R,B[8]=D*c+r*M+w*d,this}multiplyScalar(A){const I=this.elements;return I[0]*=A,I[3]*=A,I[6]*=A,I[1]*=A,I[4]*=A,I[7]*=A,I[2]*=A,I[5]*=A,I[8]*=A,this}determinant(){const A=this.elements,I=A[0],g=A[1],C=A[2],B=A[3],i=A[4],E=A[5],e=A[6],t=A[7],s=A[8];return I*i*s-I*E*t-g*B*s+g*E*e+C*B*t-C*i*e}invert(){const A=this.elements,I=A[0],g=A[1],C=A[2],B=A[3],i=A[4],E=A[5],e=A[6],t=A[7],s=A[8],n=s*i-E*t,D=E*e-s*B,r=t*B-i*e,w=I*n+g*D+C*r;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const G=1/w;return A[0]=n*G,A[1]=(C*t-s*g)*G,A[2]=(E*g-C*i)*G,A[3]=D*G,A[4]=(s*I-C*e)*G,A[5]=(C*B-E*I)*G,A[6]=r*G,A[7]=(g*e-t*I)*G,A[8]=(i*I-g*B)*G,this}transpose(){let A;const I=this.elements;return A=I[1],I[1]=I[3],I[3]=A,A=I[2],I[2]=I[6],I[6]=A,A=I[5],I[5]=I[7],I[7]=A,this}getNormalMatrix(A){return this.setFromMatrix4(A).invert().transpose()}transposeIntoArray(A){const I=this.elements;return A[0]=I[0],A[1]=I[3],A[2]=I[6],A[3]=I[1],A[4]=I[4],A[5]=I[7],A[6]=I[2],A[7]=I[5],A[8]=I[8],this}setUvTransform(A,I,g,C,B,i,E){const e=Math.cos(B),t=Math.sin(B);return this.set(g*e,g*t,-g*(e*i+t*E)+i+A,-C*t,C*e,-C*(-t*i+e*E)+E+I,0,0,1),this}scale(A,I){return this.premultiply(VD.makeScale(A,I)),this}rotate(A){return this.premultiply(VD.makeRotation(-A)),this}translate(A,I){return this.premultiply(VD.makeTranslation(A,I)),this}makeTranslation(A,I){return this.set(1,0,A,0,1,I,0,0,1),this}makeRotation(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,-g,0,g,I,0,0,0,1),this}makeScale(A,I){return this.set(A,0,0,0,I,0,0,0,1),this}equals(A){const I=this.elements,g=A.elements;for(let C=0;C<9;C++)if(I[C]!==g[C])return!1;return!0}fromArray(A,I=0){for(let g=0;g<9;g++)this.elements[g]=A[g+I];return this}toArray(A=[],I=0){const g=this.elements;return A[I]=g[0],A[I+1]=g[1],A[I+2]=g[2],A[I+3]=g[3],A[I+4]=g[4],A[I+5]=g[5],A[I+6]=g[6],A[I+7]=g[7],A[I+8]=g[8],A}clone(){return new this.constructor().fromArray(this.elements)}}const VD=new Bt;function XD(Q){return Q<.04045?Q*.0773993808:Math.pow(Q*.9478672986+.0521327014,2.4)}function zD(Q){return Q<.0031308?Q*12.92:1.055*Math.pow(Q,.41666)-.055}const Q2=new Bt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),i2=new Bt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function E2(Q){return Q.convertSRGBToLinear().applyMatrix3(i2)}function o2(Q){return Q.applyMatrix3(Q2).convertLinearToSRGB()}const e2={[wc]:Q=>Q,[sQ]:Q=>Q.convertSRGBToLinear(),[CU]:E2},t2={[wc]:Q=>Q,[sQ]:Q=>Q.convertLinearToSRGB(),[CU]:o2},hB={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(Q){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!Q},get workingColorSpace(){return wc},set workingColorSpace(Q){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(Q,A,I){if(this.enabled===!1||A===I||!A||!I)return Q;const g=e2[A],C=t2[I];if(g===void 0||C===void 0)throw new Error(`Unsupported color space conversion, "${A}" to "${I}".`);return C(g(Q))},fromWorkingColorSpace:function(Q,A){return this.convert(Q,this.workingColorSpace,A)},toWorkingColorSpace:function(Q,A){return this.convert(Q,A,this.workingColorSpace)}},BU={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cB={h:0,s:0,l:0},ua={h:0,s:0,l:0};function $D(Q,A,I){return I<0&&(I+=1),I>1&&(I-=1),I<1/6?Q+(A-Q)*6*I:I<1/2?A:I<2/3?Q+(A-Q)*6*(2/3-I):Q}class lc{constructor(A,I,g){return this.isColor=!0,this.r=1,this.g=1,this.b=1,I===void 0&&g===void 0?this.set(A):this.setRGB(A,I,g)}set(A){return A&&A.isColor?this.copy(A):typeof A=="number"?this.setHex(A):typeof A=="string"&&this.setStyle(A),this}setScalar(A){return this.r=A,this.g=A,this.b=A,this}setHex(A,I=sQ){return A=Math.floor(A),this.r=(A>>16&255)/255,this.g=(A>>8&255)/255,this.b=(A&255)/255,hB.toWorkingColorSpace(this,I),this}setRGB(A,I,g,C=hB.workingColorSpace){return this.r=A,this.g=I,this.b=g,hB.toWorkingColorSpace(this,C),this}setHSL(A,I,g,C=hB.workingColorSpace){if(A=B2(A,1),I=$o(I,0,1),g=$o(g,0,1),I===0)this.r=this.g=this.b=g;else{const B=g<=.5?g*(1+I):g+I-g*I,i=2*g-B;this.r=$D(i,B,A+1/3),this.g=$D(i,B,A),this.b=$D(i,B,A-1/3)}return hB.toWorkingColorSpace(this,C),this}setStyle(A,I=sQ){function g(B){B!==void 0&&parseFloat(B)<1&&console.warn("THREE.Color: Alpha component of "+A+" will be ignored.")}let C;if(C=/^(\w+)\(([^\)]*)\)/.exec(A)){let B;const i=C[1],E=C[2];switch(i){case"rgb":case"rgba":if(B=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(E))return g(B[4]),this.setRGB(Math.min(255,parseInt(B[1],10))/255,Math.min(255,parseInt(B[2],10))/255,Math.min(255,parseInt(B[3],10))/255,I);if(B=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(E))return g(B[4]),this.setRGB(Math.min(100,parseInt(B[1],10))/100,Math.min(100,parseInt(B[2],10))/100,Math.min(100,parseInt(B[3],10))/100,I);break;case"hsl":case"hsla":if(B=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(E))return g(B[4]),this.setHSL(parseFloat(B[1])/360,parseFloat(B[2])/100,parseFloat(B[3])/100,I);break;default:console.warn("THREE.Color: Unknown color model "+A)}}else if(C=/^\#([A-Fa-f\d]+)$/.exec(A)){const B=C[1],i=B.length;if(i===3)return this.setRGB(parseInt(B.charAt(0),16)/15,parseInt(B.charAt(1),16)/15,parseInt(B.charAt(2),16)/15,I);if(i===6)return this.setHex(parseInt(B,16),I);console.warn("THREE.Color: Invalid hex color "+A)}else if(A&&A.length>0)return this.setColorName(A,I);return this}setColorName(A,I=sQ){const g=BU[A.toLowerCase()];return g!==void 0?this.setHex(g,I):console.warn("THREE.Color: Unknown color "+A),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(A){return this.r=A.r,this.g=A.g,this.b=A.b,this}copySRGBToLinear(A){return this.r=XD(A.r),this.g=XD(A.g),this.b=XD(A.b),this}copyLinearToSRGB(A){return this.r=zD(A.r),this.g=zD(A.g),this.b=zD(A.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(A=sQ){return hB.fromWorkingColorSpace(IC.copy(this),A),Math.round($o(IC.r*255,0,255))*65536+Math.round($o(IC.g*255,0,255))*256+Math.round($o(IC.b*255,0,255))}getHexString(A=sQ){return("000000"+this.getHex(A).toString(16)).slice(-6)}getHSL(A,I=hB.workingColorSpace){hB.fromWorkingColorSpace(IC.copy(this),I);const g=IC.r,C=IC.g,B=IC.b,i=Math.max(g,C,B),E=Math.min(g,C,B);let e,t;const s=(E+i)/2;if(E===i)e=0,t=0;else{const n=i-E;switch(t=s<=.5?n/(i+E):n/(2-i-E),i){case g:e=(C-B)/n+(C<B?6:0);break;case C:e=(B-g)/n+2;break;case B:e=(g-C)/n+4;break}e/=6}return A.h=e,A.s=t,A.l=s,A}getRGB(A,I=hB.workingColorSpace){return hB.fromWorkingColorSpace(IC.copy(this),I),A.r=IC.r,A.g=IC.g,A.b=IC.b,A}getStyle(A=sQ){hB.fromWorkingColorSpace(IC.copy(this),A);const I=IC.r,g=IC.g,C=IC.b;return A!==sQ?`color(${A} ${I.toFixed(3)} ${g.toFixed(3)} ${C.toFixed(3)})`:`rgb(${Math.round(I*255)},${Math.round(g*255)},${Math.round(C*255)})`}offsetHSL(A,I,g){return this.getHSL(cB),cB.h+=A,cB.s+=I,cB.l+=g,this.setHSL(cB.h,cB.s,cB.l),this}add(A){return this.r+=A.r,this.g+=A.g,this.b+=A.b,this}addColors(A,I){return this.r=A.r+I.r,this.g=A.g+I.g,this.b=A.b+I.b,this}addScalar(A){return this.r+=A,this.g+=A,this.b+=A,this}sub(A){return this.r=Math.max(0,this.r-A.r),this.g=Math.max(0,this.g-A.g),this.b=Math.max(0,this.b-A.b),this}multiply(A){return this.r*=A.r,this.g*=A.g,this.b*=A.b,this}multiplyScalar(A){return this.r*=A,this.g*=A,this.b*=A,this}lerp(A,I){return this.r+=(A.r-this.r)*I,this.g+=(A.g-this.g)*I,this.b+=(A.b-this.b)*I,this}lerpColors(A,I,g){return this.r=A.r+(I.r-A.r)*g,this.g=A.g+(I.g-A.g)*g,this.b=A.b+(I.b-A.b)*g,this}lerpHSL(A,I){this.getHSL(cB),A.getHSL(ua);const g=jD(cB.h,ua.h,I),C=jD(cB.s,ua.s,I),B=jD(cB.l,ua.l,I);return this.setHSL(g,C,B),this}setFromVector3(A){return this.r=A.x,this.g=A.y,this.b=A.z,this}applyMatrix3(A){const I=this.r,g=this.g,C=this.b,B=A.elements;return this.r=B[0]*I+B[3]*g+B[6]*C,this.g=B[1]*I+B[4]*g+B[7]*C,this.b=B[2]*I+B[5]*g+B[8]*C,this}equals(A){return A.r===this.r&&A.g===this.g&&A.b===this.b}fromArray(A,I=0){return this.r=A[I],this.g=A[I+1],this.b=A[I+2],this}toArray(A=[],I=0){return A[I]=this.r,A[I+1]=this.g,A[I+2]=this.b,A}fromBufferAttribute(A,I){return this.r=A.getX(I),this.g=A.getY(I),this.b=A.getZ(I),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const IC=new lc;lc.NAMES=BU;const Ae=new f;function zC(Q,A,I,g,C,B){const i=2*Math.PI*C/4,E=Math.max(B-2*C,0),e=Math.PI/4;Ae.copy(A),Ae[g]=0,Ae.normalize();const t=.5*i/(i+E),s=1-Ae.angleTo(Q)/e;return Math.sign(Ae[I])===1?s*t:E/(i+E)+t+t*(1-s)}class a2 extends GQ{constructor(A=1,I=1,g=1,C=2,B=.1){if(C=C*2+1,B=Math.min(A/2,I/2,g/2,B),super(1,1,1,C,C,C),C===1)return;const i=this.toNonIndexed();this.index=null,this.attributes.position=i.attributes.position,this.attributes.normal=i.attributes.normal,this.attributes.uv=i.attributes.uv;const E=new f,e=new f,t=new f(A,I,g).divideScalar(2).subScalar(B),s=this.attributes.position.array,n=this.attributes.normal.array,D=this.attributes.uv.array,r=s.length/6,w=new f,G=.5/C;for(let l=0,c=0;l<s.length;l+=3,c+=2)switch(E.fromArray(s,l),e.copy(E),e.x-=Math.sign(e.x)*G,e.y-=Math.sign(e.y)*G,e.z-=Math.sign(e.z)*G,e.normalize(),s[l+0]=t.x*Math.sign(E.x)+e.x*B,s[l+1]=t.y*Math.sign(E.y)+e.y*B,s[l+2]=t.z*Math.sign(E.z)+e.z*B,n[l+0]=e.x,n[l+1]=e.y,n[l+2]=e.z,Math.floor(l/r)){case 0:w.set(1,0,0),D[c+0]=zC(w,e,"z","y",B,g),D[c+1]=1-zC(w,e,"y","z",B,I);break;case 1:w.set(-1,0,0),D[c+0]=1-zC(w,e,"z","y",B,g),D[c+1]=1-zC(w,e,"y","z",B,I);break;case 2:w.set(0,1,0),D[c+0]=1-zC(w,e,"x","z",B,A),D[c+1]=zC(w,e,"z","x",B,g);break;case 3:w.set(0,-1,0),D[c+0]=1-zC(w,e,"x","z",B,A),D[c+1]=1-zC(w,e,"z","x",B,g);break;case 4:w.set(0,0,1),D[c+0]=1-zC(w,e,"x","y",B,A),D[c+1]=1-zC(w,e,"y","x",B,I);break;case 5:w.set(0,0,-1),D[c+0]=zC(w,e,"x","y",B,A),D[c+1]=1-zC(w,e,"y","x",B,I);break}}}function PS(Q){Q[1]=Q[3][0],Q[2]=Q[3][1]}function s2(Q){return{c:lg,m:lg,p:lg,i:lg,o:lg,d:lg}}function n2(Q){PS(Q);let A,I;return A=new _g.MeshPhongMaterial({props:{map:Q[1],normalMap:Q[2],shininess:1e3}}),{c(){LI(A.$$.fragment)},m(g,C){pI(A,g,C),I=!0},p(g,C){PS(g)},i(g){I||(bA(A.$$.fragment,g),I=!0)},o(g){PA(A.$$.fragment,g),I=!1},d(g){qI(A,g)}}}function D2(Q){return{c:lg,m:lg,p:lg,i:lg,o:lg,d:lg}}function r2(Q){let A,I,g,C;A=new _g.RoundedBoxGeometry({props:{args:[50,.75,10,1,1]}});let B={ctx:Q,current:null,token:null,hasCatch:!1,pending:D2,then:n2,catch:s2,value:3,blocks:[,,,]};return sd(Promise.all(Q[0]),B),{c(){LI(A.$$.fragment),I=LC(),g=qe(),B.block.c()},m(i,E){pI(A,i,E),Jg(i,I,E),Jg(i,g,E),B.block.m(i,B.anchor=E),B.mount=()=>g.parentNode,B.anchor=g,C=!0},p(i,E){Q=i,nd(B,Q,E)},i(i){C||(bA(A.$$.fragment,i),bA(B.block),C=!0)},o(i){PA(A.$$.fragment,i);for(let E=0;E<3;E+=1){const e=B.blocks[E];PA(e)}C=!1},d(i){qI(A,i),i&&Ng(I),i&&Ng(g),B.block.d(i),B.token=null,B=null}}}function h2(Q){let A,I;return A=new _g.Mesh({props:{receiveShadow:!0,$$slots:{default:[r2]},$$scope:{ctx:Q}}}),{c(){LI(A.$$.fragment)},m(g,C){pI(A,g,C),I=!0},p(g,C){const B={};C&16&&(B.$$scope={dirty:C,ctx:g}),A.$set(B)},i(g){I||(bA(A.$$.fragment,g),I=!0)},o(g){PA(A.$$.fragment,g),I=!1},d(g){qI(A,g)}}}function c2(Q){let A,I;return A=new Dc({props:{shape:"cuboid",$$slots:{default:[h2]},$$scope:{ctx:Q}}}),{c(){LI(A.$$.fragment)},m(g,C){pI(A,g,C),I=!0},p(g,C){const B={};C&16&&(B.$$scope={dirty:C,ctx:g}),A.$set(B)},i(g){I||(bA(A.$$.fragment,g),I=!0)},o(g){PA(A.$$.fragment,g),I=!1},d(g){qI(A,g)}}}function w2(Q){let A,I;return A=new _g.Group({props:{position:[0,-1.5,0],$$slots:{default:[c2]},$$scope:{ctx:Q}}}),{c(){LI(A.$$.fragment)},m(g,C){pI(A,g,C),I=!0},p(g,[C]){const B={};C&16&&(B.$$scope={dirty:C,ctx:g}),A.$set(B)},i(g){I||(bA(A.$$.fragment,g),I=!0)},o(g){PA(A.$$.fragment,g),I=!1},d(g){qI(A,g)}}}function l2(Q){return sb({RoundedBoxGeometry:a2}),[[TS("wood/Wood09_1K_BaseColor.png"),TS("wood/Wood09_1K_Normal.png")]]}class G2 extends hC{constructor(A){super(),rC(this,A,l2,w2,BC,{})}}function ZS(Q){let A,I;return A=new _g.Group({props:{position:[-2,10,2],rotation:[.3,0,.3],scale:[1,1,1],$$slots:{default:[k2]},$$scope:{ctx:Q}}}),{c(){LI(A.$$.fragment)},m(g,C){pI(A,g,C),I=!0},p(g,C){const B={};C&19&&(B.$$scope={dirty:C,ctx:g}),A.$set(B)},i(g){I||(bA(A.$$.fragment,g),I=!0)},o(g){PA(A.$$.fragment,g),I=!1},d(g){qI(A,g)}}}function S2(Q){let A,I,g,C,B,i,E,e,t;A=new _g.Mesh({props:{castShadow:!0,geometry:Q[1].nodes.Scene.children[0].geometry,material:Q[1].nodes.Scene.children[0].material}}),g=new _g.RectAreaLight({props:{args:[16753920,1,1.8,.05],position:[3.26,.21,0],rotation:[0,Math.PI/2,.035]}}),B=new _g.RectAreaLight({props:{args:[16753920,1,1.8,.05],position:[-3.26,.21,0],rotation:[0,-Math.PI/2,-.035]}});function s(D){Q[3](D)}let n={args:[16753920,2,6.3,1.8],position:[0,.2,0],rotation:[Math.PI/2,0,0]};return Q[0]!==void 0&&(n.ref=Q[0]),E=new _g.RectAreaLight({props:n}),se.push(()=>hd(E,"ref",s)),{c(){LI(A.$$.fragment),I=LC(),LI(g.$$.fragment),C=LC(),LI(B.$$.fragment),i=LC(),LI(E.$$.fragment)},m(D,r){pI(A,D,r),Jg(D,I,r),pI(g,D,r),Jg(D,C,r),pI(B,D,r),Jg(D,i,r),pI(E,D,r),t=!0},p(D,r){const w={};r&2&&(w.geometry=D[1].nodes.Scene.children[0].geometry),r&2&&(w.material=D[1].nodes.Scene.children[0].material),A.$set(w);const G={};!e&&r&1&&(e=!0,G.ref=D[0],ed(()=>e=!1)),E.$set(G)},i(D){t||(bA(A.$$.fragment,D),bA(g.$$.fragment,D),bA(B.$$.fragment,D),bA(E.$$.fragment,D),t=!0)},o(D){PA(A.$$.fragment,D),PA(g.$$.fragment,D),PA(B.$$.fragment,D),PA(E.$$.fragment,D),t=!1},d(D){qI(A,D),D&&Ng(I),qI(g,D),D&&Ng(C),qI(B,D),D&&Ng(i),qI(E,D)}}}function y2(Q){let A,I;return A=new Dc({props:{$$slots:{default:[S2]},$$scope:{ctx:Q}}}),{c(){LI(A.$$.fragment)},m(g,C){pI(A,g,C),I=!0},p(g,C){const B={};C&19&&(B.$$scope={dirty:C,ctx:g}),A.$set(B)},i(g){I||(bA(A.$$.fragment,g),I=!0)},o(g){PA(A.$$.fragment,g),I=!1},d(g){qI(A,g)}}}function k2(Q){let A,I;return A=new vM({props:{$$slots:{default:[y2]},$$scope:{ctx:Q}}}),{c(){LI(A.$$.fragment)},m(g,C){pI(A,g,C),I=!0},p(g,C){const B={};C&19&&(B.$$scope={dirty:C,ctx:g}),A.$set(B)},i(g){I||(bA(A.$$.fragment,g),I=!0)},o(g){PA(A.$$.fragment,g),I=!1},d(g){qI(A,g)}}}function M2(Q){let A,I,g=Q[1]&&ZS(Q);return{c(){g&&g.c(),A=qe()},m(C,B){g&&g.m(C,B),Jg(C,A,B),I=!0},p(C,[B]){C[1]?g?(g.p(C,B),B&2&&bA(g,1)):(g=ZS(C),g.c(),bA(g,1),g.m(A.parentNode,A)):g&&(PQ(),PA(g,1,1,()=>{g=null}),ZQ())},i(C){I||(bA(g),I=!0)},o(C){PA(g),I=!1},d(C){g&&g.d(C),C&&Ng(A)}}}function U2(Q,A,I){let g;const C=gU("keyboard.glb");cQ(Q,C,E=>I(1,g=E));let B;function i(E){B=E,I(0,B)}return[B,g,C,i]}class N2 extends hC{constructor(A){super(),rC(this,A,U2,M2,BC,{})}}function WS(Q){let A,I;return A=new _g.Group({props:{position:[4,10,2],rotation:[.3,0,.3],scale:[1,1,1],$$slots:{default:[R2]},$$scope:{ctx:Q}}}),{c(){LI(A.$$.fragment)},m(g,C){pI(A,g,C),I=!0},p(g,C){const B={};C&5&&(B.$$scope={dirty:C,ctx:g}),A.$set(B)},i(g){I||(bA(A.$$.fragment,g),I=!0)},o(g){PA(A.$$.fragment,g),I=!1},d(g){qI(A,g)}}}function K2(Q){let A,I,g,C,B,i;return A=new _g.Mesh({props:{castShadow:!0,geometry:Q[0].nodes.Scene.children[0].children[0].geometry,material:Q[0].nodes.Scene.children[0].children[0].material}}),g=new _g.Mesh({props:{castShadow:!0,geometry:Q[0].nodes.Scene.children[0].children[1].geometry,material:Q[0].nodes.Scene.children[0].children[1].material}}),B=new _g.Mesh({props:{castShadow:!0,geometry:Q[0].nodes.Scene.children[0].children[2].geometry,material:Q[0].nodes.Scene.children[0].children[2].material}}),{c(){LI(A.$$.fragment),I=LC(),LI(g.$$.fragment),C=LC(),LI(B.$$.fragment)},m(E,e){pI(A,E,e),Jg(E,I,e),pI(g,E,e),Jg(E,C,e),pI(B,E,e),i=!0},p(E,e){const t={};e&1&&(t.geometry=E[0].nodes.Scene.children[0].children[0].geometry),e&1&&(t.material=E[0].nodes.Scene.children[0].children[0].material),A.$set(t);const s={};e&1&&(s.geometry=E[0].nodes.Scene.children[0].children[1].geometry),e&1&&(s.material=E[0].nodes.Scene.children[0].children[1].material),g.$set(s);const n={};e&1&&(n.geometry=E[0].nodes.Scene.children[0].children[2].geometry),e&1&&(n.material=E[0].nodes.Scene.children[0].children[2].material),B.$set(n)},i(E){i||(bA(A.$$.fragment,E),bA(g.$$.fragment,E),bA(B.$$.fragment,E),i=!0)},o(E){PA(A.$$.fragment,E),PA(g.$$.fragment,E),PA(B.$$.fragment,E),i=!1},d(E){qI(A,E),E&&Ng(I),qI(g,E),E&&Ng(C),qI(B,E)}}}function F2(Q){let A,I;return A=new Dc({props:{$$slots:{default:[K2]},$$scope:{ctx:Q}}}),{c(){LI(A.$$.fragment)},m(g,C){pI(A,g,C),I=!0},p(g,C){const B={};C&5&&(B.$$scope={dirty:C,ctx:g}),A.$set(B)},i(g){I||(bA(A.$$.fragment,g),I=!0)},o(g){PA(A.$$.fragment,g),I=!1},d(g){qI(A,g)}}}function R2(Q){let A,I;return A=new vM({props:{$$slots:{default:[F2]},$$scope:{ctx:Q}}}),{c(){LI(A.$$.fragment)},m(g,C){pI(A,g,C),I=!0},p(g,C){const B={};C&5&&(B.$$scope={dirty:C,ctx:g}),A.$set(B)},i(g){I||(bA(A.$$.fragment,g),I=!0)},o(g){PA(A.$$.fragment,g),I=!1},d(g){qI(A,g)}}}function J2(Q){let A,I,g=Q[0]&&WS(Q);return{c(){g&&g.c(),A=qe()},m(C,B){g&&g.m(C,B),Jg(C,A,B),I=!0},p(C,[B]){C[0]?g?(g.p(C,B),B&1&&bA(g,1)):(g=WS(C),g.c(),bA(g,1),g.m(A.parentNode,A)):g&&(PQ(),PA(g,1,1,()=>{g=null}),ZQ())},i(C){I||(bA(g),I=!0)},o(C){PA(g),I=!1},d(C){g&&g.d(C),C&&Ng(A)}}}function d2(Q,A,I){let g;const C=gU("mouse.glb");return cQ(Q,C,B=>I(0,g=B)),[g,C]}class p2 extends hC{constructor(A){super(),rC(this,A,d2,J2,BC,{})}}function q2(Q){let A,I;return A=new C2({}),{c(){LI(A.$$.fragment)},m(g,C){pI(A,g,C),I=!0},i(g){I||(bA(A.$$.fragment,g),I=!0)},o(g){PA(A.$$.fragment,g),I=!1},d(g){qI(A,g)}}}function f2(Q){let A,I,g,C,B,i,E,e,t,s,n,D;return A=new _g.HemisphereLight({props:{args:["#4A4E69","#080820",2]}}),g=new _g.PointLight({props:{args:["#F2E9E4",3,15],position:[8,4,-2],castShadow:!0}}),B=new _g.PerspectiveCamera({props:{makeDefault:!0,position:[0,4,10],$$slots:{default:[q2]},$$scope:{ctx:Q}}}),E=new N2({}),t=new p2({}),n=new G2({}),{c(){LI(A.$$.fragment),I=LC(),LI(g.$$.fragment),C=LC(),LI(B.$$.fragment),i=LC(),LI(E.$$.fragment),e=LC(),LI(t.$$.fragment),s=LC(),LI(n.$$.fragment)},m(r,w){pI(A,r,w),Jg(r,I,w),pI(g,r,w),Jg(r,C,w),pI(B,r,w),Jg(r,i,w),pI(E,r,w),Jg(r,e,w),pI(t,r,w),Jg(r,s,w),pI(n,r,w),D=!0},p(r,[w]){const G={};w&2&&(G.$$scope={dirty:w,ctx:r}),B.$set(G)},i(r){D||(bA(A.$$.fragment,r),bA(g.$$.fragment,r),bA(B.$$.fragment,r),bA(E.$$.fragment,r),bA(t.$$.fragment,r),bA(n.$$.fragment,r),D=!0)},o(r){PA(A.$$.fragment,r),PA(g.$$.fragment,r),PA(B.$$.fragment,r),PA(E.$$.fragment,r),PA(t.$$.fragment,r),PA(n.$$.fragment,r),D=!1},d(r){qI(A,r),r&&Ng(I),qI(g,r),r&&Ng(C),qI(B,r),r&&Ng(i),qI(E,r),r&&Ng(e),qI(t,r),r&&Ng(s),qI(n,r)}}}function u2(Q){const{scene:A}=ji();return A.background=new lc("#22223B"),[]}class L2 extends hC{constructor(A){super(),rC(this,A,u2,f2,BC,{})}}function Y2(Q){let A,I;return A=new L2({}),{c(){LI(A.$$.fragment)},m(g,C){pI(A,g,C),I=!0},i(g){I||(bA(A.$$.fragment,g),I=!0)},o(g){PA(A.$$.fragment,g),I=!1},d(g){qI(A,g)}}}function H2(Q){let A,I;return A=new mb({props:{$$slots:{default:[Y2]},$$scope:{ctx:Q}}}),{c(){LI(A.$$.fragment)},m(g,C){pI(A,g,C),I=!0},p(g,C){const B={};C&1&&(B.$$scope={dirty:C,ctx:g}),A.$set(B)},i(g){I||(bA(A.$$.fragment,g),I=!0)},o(g){PA(A.$$.fragment,g),I=!1},d(g){qI(A,g)}}}function m2(Q){let A,I,g;return I=new ab({props:{$$slots:{default:[H2]},$$scope:{ctx:Q}}}),{c(){A=XS("main"),LI(I.$$.fragment),$S(A,"class","w-full h-100vh")},m(C,B){Jg(C,A,B),pI(I,A,null),g=!0},p(C,[B]){const i={};B&1&&(i.$$scope={dirty:B,ctx:C}),I.$set(i)},i(C){g||(bA(I.$$.fragment,C),g=!0)},o(C){PA(I.$$.fragment,C),g=!1},d(C){C&&Ng(A),qI(I)}}}class b2 extends hC{constructor(A){super(),rC(this,A,null,m2,BC,{})}}new b2({target:document.getElementById("app")});