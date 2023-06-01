(function(){const A=document.createElement("link").relList;if(A&&A.supports&&A.supports("modulepreload"))return;for(const C of document.querySelectorAll('link[rel="modulepreload"]'))g(C);new MutationObserver(C=>{for(const B of C)if(B.type==="childList")for(const i of B.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&g(i)}).observe(document,{childList:!0,subtree:!0});function I(C){const B={};return C.integrity&&(B.integrity=C.integrity),C.referrerPolicy&&(B.referrerPolicy=C.referrerPolicy),C.crossOrigin==="use-credentials"?B.credentials="include":C.crossOrigin==="anonymous"?B.credentials="omit":B.credentials="same-origin",B}function g(C){if(C.ep)return;C.ep=!0;const B=I(C);fetch(C.href,B)}})();function yg(){}function FB(Q,A){for(const I in A)Q[I]=A[I];return Q}function Kd(Q){return!!Q&&(typeof Q=="object"||typeof Q=="function")&&typeof Q.then=="function"}function ly(Q){return Q()}function gG(){return Object.create(null)}function IE(Q){Q.forEach(ly)}function Ms(Q){return typeof Q=="function"}function pg(Q,A){return Q!=Q?A==A:Q!==A||Q&&typeof Q=="object"||typeof Q=="function"}let ga;function Fd(Q,A){return ga||(ga=document.createElement("a")),ga.href=A,Q===ga.href}function Rd(Q){return Object.keys(Q).length===0}function rh(Q,...A){if(Q==null)return yg;const I=Q.subscribe(...A);return I.unsubscribe?()=>I.unsubscribe():I}function wy(Q){let A;return rh(Q,I=>A=I)(),A}function dg(Q,A,I){Q.$$.on_destroy.push(rh(A,I))}function GC(Q,A,I,g){if(Q){const C=Gy(Q,A,I,g);return Q[0](C)}}function Gy(Q,A,I,g){return Q[1]&&g?FB(I.ctx.slice(),Q[1](g(A))):I.ctx}function SC(Q,A,I,g){if(Q[2]&&g){const C=Q[2](g(I));if(A.dirty===void 0)return C;if(typeof C=="object"){const B=[],i=Math.max(A.dirty.length,C.length);for(let E=0;E<i;E+=1)B[E]=A.dirty[E]|C[E];return B}return A.dirty|C}return A.dirty}function yC(Q,A,I,g,C,B){if(C){const i=Gy(A,I,g,B);Q.p(i,C)}}function kC(Q){if(Q.ctx.length>32){const A=[],I=Q.ctx.length/32;for(let g=0;g<I;g++)A[g]=-1;return A}return-1}function Cs(Q){const A={};for(const I in Q)I[0]!=="$"&&(A[I]=Q[I]);return A}function Bo(Q,A){const I={};A=new Set(A);for(const g in Q)!A.has(g)&&g[0]!=="$"&&(I[g]=Q[g]);return I}function Jd(Q,A,I){return Q.set(I),A}function Bs(Q){return Q&&Ms(Q.destroy)?Q.destroy:yg}function rr(Q,A){Q.appendChild(A)}function vI(Q,A,I){Q.insertBefore(A,I||null)}function xI(Q){Q.parentNode&&Q.parentNode.removeChild(Q)}function NQ(Q){return document.createElement(Q)}function Sy(Q){return document.createTextNode(Q)}function $g(){return Sy(" ")}function IQ(){return Sy("")}function lC(Q,A,I){I==null?Q.removeAttribute(A):Q.getAttribute(A)!==I&&Q.setAttribute(A,I)}const dd=["width","height"];function pd(Q,A){const I=Object.getOwnPropertyDescriptors(Q.__proto__);for(const g in A)A[g]==null?Q.removeAttribute(g):g==="style"?Q.style.cssText=A[g]:g==="__value"?Q.value=Q[g]=A[g]:I[g]&&I[g].set&&dd.indexOf(g)===-1?Q[g]=A[g]:lC(Q,g,A[g])}function fd(Q,A){Object.keys(A).forEach(I=>{qd(Q,I,A[I])})}function qd(Q,A,I){A in Q?Q[A]=typeof Q[A]=="boolean"&&I===""?!0:I:lC(Q,A,I)}function Qs(Q){return/-/.test(Q)?fd:pd}function ud(Q){return Array.from(Q.childNodes)}let Ge;function UQ(Q){Ge=Q}function gQ(){if(!Ge)throw new Error("Function called outside component initialization");return Ge}function Te(Q){gQ().$$.on_mount.push(Q)}function Ug(Q){gQ().$$.on_destroy.push(Q)}function KB(Q,A){return gQ().$$.context.set(Q,A),A}function dC(Q){return gQ().$$.context.get(Q)}const WE=[],PB=[];let Ao=[];const hr=[],yy=Promise.resolve();let cr=!1;function ky(){cr||(cr=!0,yy.then(ch))}function hh(){return ky(),yy}function lr(Q){Ao.push(Q)}function Ld(Q){hr.push(Q)}const hD=new Set;let yE=0;function ch(){if(yE!==0)return;const Q=Ge;do{try{for(;yE<WE.length;){const A=WE[yE];yE++,UQ(A),Yd(A.$$)}}catch(A){throw WE.length=0,yE=0,A}for(UQ(null),WE.length=0,yE=0;PB.length;)PB.pop()();for(let A=0;A<Ao.length;A+=1){const I=Ao[A];hD.has(I)||(hD.add(I),I())}Ao.length=0}while(WE.length);for(;hr.length;)hr.pop()();cr=!1,hD.clear(),UQ(Q)}function Yd(Q){if(Q.fragment!==null){Q.update(),IE(Q.before_update);const A=Q.dirty;Q.dirty=[-1],Q.fragment&&Q.fragment.p(Q.ctx,A),Q.after_update.forEach(lr)}}function Hd(Q){const A=[],I=[];Ao.forEach(g=>Q.indexOf(g)===-1?A.push(g):I.push(g)),I.forEach(g=>g()),Ao=A}const Za=new Set;let Hi;function pC(){Hi={r:0,c:[],p:Hi}}function fC(){Hi.r||IE(Hi.c),Hi=Hi.p}function MA(Q,A){Q&&Q.i&&(Za.delete(Q),Q.i(A))}function JA(Q,A,I,g){if(Q&&Q.o){if(Za.has(Q))return;Za.add(Q),Hi.c.push(()=>{Za.delete(Q),g&&(I&&Q.d(1),g())}),Q.o(A)}else g&&g()}function md(Q,A){const I=A.token={};function g(C,B,i,E){if(A.token!==I)return;A.resolved=E;let e=A.ctx;i!==void 0&&(e=e.slice(),e[i]=E);const t=C&&(A.current=C)(e);let s=!1;A.block&&(A.blocks?A.blocks.forEach((n,D)=>{D!==B&&n&&(pC(),JA(n,1,1,()=>{A.blocks[D]===n&&(A.blocks[D]=null)}),fC())}):A.block.d(1),t.c(),MA(t,1),t.m(A.mount(),A.anchor),s=!0),A.block=t,A.blocks&&(A.blocks[B]=t),s&&ch()}if(Kd(Q)){const C=gQ();if(Q.then(B=>{UQ(C),g(A.then,1,A.value,B),UQ(null)},B=>{if(UQ(C),g(A.catch,2,A.error,B),UQ(null),!A.hasCatch)throw B}),A.current!==A.pending)return g(A.pending,0),!0}else{if(A.current!==A.then)return g(A.then,1,A.value,Q),!0;A.resolved=Q}}function bd(Q,A,I){const g=A.slice(),{resolved:C}=Q;Q.current===Q.then&&(g[Q.value]=C),Q.current===Q.catch&&(g[Q.error]=C),Q.block.p(g,I)}function Us(Q,A){const I={},g={},C={$$scope:1};let B=Q.length;for(;B--;){const i=Q[B],E=A[B];if(E){for(const e in i)e in E||(g[e]=1);for(const e in E)C[e]||(I[e]=E[e],C[e]=1);Q[B]=E}else for(const e in i)C[e]=1}for(const i in g)i in I||(I[i]=void 0);return I}function My(Q){return typeof Q=="object"&&Q!==null?Q:{}}function Td(Q,A,I){const g=Q.$$.props[A];g!==void 0&&(Q.$$.bound[g]=I,I(Q.$$.ctx[g]))}function hI(Q){Q&&Q.c()}function DI(Q,A,I,g){const{fragment:C,after_update:B}=Q.$$;C&&C.m(A,I),g||lr(()=>{const i=Q.$$.on_mount.map(ly).filter(Ms);Q.$$.on_destroy?Q.$$.on_destroy.push(...i):IE(i),Q.$$.on_mount=[]}),B.forEach(lr)}function rI(Q,A){const I=Q.$$;I.fragment!==null&&(Hd(I.after_update),IE(I.on_destroy),I.fragment&&I.fragment.d(A),I.on_destroy=I.fragment=null,I.ctx=[])}function xd(Q,A){Q.$$.dirty[0]===-1&&(WE.push(Q),ky(),Q.$$.dirty.fill(0)),Q.$$.dirty[A/31|0]|=1<<A%31}function _g(Q,A,I,g,C,B,i,E=[-1]){const e=Ge;UQ(Q);const t=Q.$$={fragment:null,ctx:[],props:B,update:yg,not_equal:C,bound:gG(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(A.context||(e?e.$$.context:[])),callbacks:gG(),dirty:E,skip_bound:!1,root:A.target||e.$$.root};i&&i(t.root);let s=!1;if(t.ctx=I?I(Q,A.props||{},(n,D,...r)=>{const l=r.length?r[0]:D;return t.ctx&&C(t.ctx[n],t.ctx[n]=l)&&(!t.skip_bound&&t.bound[n]&&t.bound[n](l),s&&xd(Q,n)),D}):[],t.update(),s=!0,IE(t.before_update),t.fragment=g?g(t.ctx):!1,A.target){if(A.hydrate){const n=ud(A.target);t.fragment&&t.fragment.l(n),n.forEach(xI)}else t.fragment&&t.fragment.c();A.intro&&MA(Q.$$.fragment),DI(Q,A.target,A.anchor,A.customElement),ch()}UQ(e)}class jg{$destroy(){rI(this,1),this.$destroy=yg}$on(A,I){if(!Ms(I))return yg;const g=this.$$.callbacks[A]||(this.$$.callbacks[A]=[]);return g.push(I),()=>{const C=g.indexOf(I);C!==-1&&g.splice(C,1)}}$set(A){this.$$set&&!Rd(A)&&(this.$$.skip_bound=!0,this.$$set(A),this.$$.skip_bound=!1)}}const kE=[];function lh(Q,A){return{subscribe:ng(Q,A).subscribe}}function ng(Q,A=yg){let I;const g=new Set;function C(E){if(pg(Q,E)&&(Q=E,I)){const e=!kE.length;for(const t of g)t[1](),kE.push(t,Q);if(e){for(let t=0;t<kE.length;t+=2)kE[t][0](kE[t+1]);kE.length=0}}}function B(E){C(E(Q))}function i(E,e=yg){const t=[E,e];return g.add(t),g.size===1&&(I=A(C)||yg),E(Q),()=>{g.delete(t),g.size===0&&I&&(I(),I=null)}}return{set:C,update:B,subscribe:i}}function kB(Q,A,I){const g=!Array.isArray(Q),C=g?[Q]:Q,B=A.length<2;return lh(I,i=>{let E=!1;const e=[];let t=0,s=yg;const n=()=>{if(t)return;s();const r=A(g?e[0]:e,i);B?i(r):s=Ms(r)?r:yg},D=C.map((r,l)=>rh(r,G=>{e[l]=G,t&=~(1<<l),E&&n()},()=>{t|=1<<l}));return E=!0,n(),function(){IE(D),s(),E=!1}})}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ns="152",fi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},qi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Uy=0,wr=1,Ny=2,Od=3,vd=0,wh=1,Ks=2,TB=3,XB=0,wC=1,UB=2,Pd=2,KQ=0,vi=1,Gr=2,Sr=3,yr=4,Ky=5,Li=100,Fy=101,Ry=102,kr=103,Mr=104,Jy=200,dy=201,py=202,fy=203,Gh=204,Sh=205,qy=206,uy=207,Ly=208,Yy=209,Hy=210,my=0,by=1,Ty=2,is=3,xy=4,Oy=5,vy=6,Py=7,xe=0,Zy=1,Wy=2,WB=0,_y=1,jy=2,Vy=3,yh=4,Xy=5,Fs=300,Ii=301,gi=302,Se=303,ye=304,wo=306,Ci=1e3,AC=1001,Qo=1002,Sg=1003,ke=1004,Zd=1004,Io=1005,Wd=1005,Eg=1006,Rs=1007,_d=1007,RB=1008,jd=1008,EC=1009,zy=1010,$y=1011,kh=1012,Ak=1013,zQ=1014,PC=1015,_B=1016,Ik=1017,gk=1018,Pi=1020,Ck=1021,Wg=1023,Bk=1024,Qk=1025,$Q=1026,ji=1027,_E=1028,ik=1029,jE=1030,Ek=1031,ok=1033,se=33776,Wa=33777,_a=33778,ne=33779,Es=35840,Ur=35841,os=35842,Nr=35843,Mh=36196,es=37492,ts=37496,as=37808,Kr=37809,Fr=37810,Rr=37811,Jr=37812,dr=37813,pr=37814,fr=37815,qr=37816,ur=37817,Lr=37818,Yr=37819,Hr=37820,mr=37821,De=36492,ek=36283,br=36284,Tr=36285,xr=36286,tk=2200,ak=2201,sk=2202,io=2300,Vi=2301,ja=2302,mi=2400,bi=2401,Me=2402,Js=2500,Uh=2501,nk=0,Nh=1,ss=2,Ue=3e3,FQ=3001,Dk=3200,rk=3201,ti=0,hk=1,jB="",QI="srgb",sB="srgb-linear",Kh="display-p3",Vd=0,Va=7680,Xd=7681,zd=7682,$d=7683,Ap=34055,Ip=34056,gp=5386,Cp=512,Bp=513,Qp=514,ip=515,Ep=516,op=517,ep=518,ck=519,Ne=35044,tp=35048,ap=35040,sp=35045,np=35049,Dp=35041,rp=35046,hp=35050,cp=35042,lp="100",Or="300 es",ns=1035;class CQ{addEventListener(A,I){this._listeners===void 0&&(this._listeners={});const g=this._listeners;g[A]===void 0&&(g[A]=[]),g[A].indexOf(I)===-1&&g[A].push(I)}hasEventListener(A,I){if(this._listeners===void 0)return!1;const g=this._listeners;return g[A]!==void 0&&g[A].indexOf(I)!==-1}removeEventListener(A,I){if(this._listeners===void 0)return;const C=this._listeners[A];if(C!==void 0){const B=C.indexOf(I);B!==-1&&C.splice(B,1)}}dispatchEvent(A){if(this._listeners===void 0)return;const g=this._listeners[A.type];if(g!==void 0){A.target=this;const C=g.slice(0);for(let B=0,i=C.length;B<i;B++)C[B].call(this,A);A.target=null}}}const BC=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let CG=1234567;const Zi=Math.PI/180,Eo=180/Math.PI;function _C(){const Q=Math.random()*4294967295|0,A=Math.random()*4294967295|0,I=Math.random()*4294967295|0,g=Math.random()*4294967295|0;return(BC[Q&255]+BC[Q>>8&255]+BC[Q>>16&255]+BC[Q>>24&255]+"-"+BC[A&255]+BC[A>>8&255]+"-"+BC[A>>16&15|64]+BC[A>>24&255]+"-"+BC[I&63|128]+BC[I>>8&255]+"-"+BC[I>>16&255]+BC[I>>24&255]+BC[g&255]+BC[g>>8&255]+BC[g>>16&255]+BC[g>>24&255]).toLowerCase()}function kg(Q,A,I){return Math.max(A,Math.min(I,Q))}function Fh(Q,A){return(Q%A+A)%A}function wp(Q,A,I,g,C){return g+(Q-A)*(C-g)/(I-A)}function Gp(Q,A,I){return Q!==A?(I-Q)/(A-Q):0}function re(Q,A,I){return(1-I)*Q+I*A}function Sp(Q,A,I,g){return re(Q,A,1-Math.exp(-I*g))}function yp(Q,A=1){return A-Math.abs(Fh(Q,A*2)-A)}function kp(Q,A,I){return Q<=A?0:Q>=I?1:(Q=(Q-A)/(I-A),Q*Q*(3-2*Q))}function Mp(Q,A,I){return Q<=A?0:Q>=I?1:(Q=(Q-A)/(I-A),Q*Q*Q*(Q*(Q*6-15)+10))}function Up(Q,A){return Q+Math.floor(Math.random()*(A-Q+1))}function Np(Q,A){return Q+Math.random()*(A-Q)}function Kp(Q){return Q*(.5-Math.random())}function Fp(Q){Q!==void 0&&(CG=Q);let A=CG+=1831565813;return A=Math.imul(A^A>>>15,A|1),A^=A+Math.imul(A^A>>>7,A|61),((A^A>>>14)>>>0)/4294967296}function Rp(Q){return Q*Zi}function Jp(Q){return Q*Eo}function vr(Q){return(Q&Q-1)===0&&Q!==0}function lk(Q){return Math.pow(2,Math.ceil(Math.log(Q)/Math.LN2))}function wk(Q){return Math.pow(2,Math.floor(Math.log(Q)/Math.LN2))}function dp(Q,A,I,g,C){const B=Math.cos,i=Math.sin,E=B(I/2),e=i(I/2),t=B((A+g)/2),s=i((A+g)/2),n=B((A-g)/2),D=i((A-g)/2),r=B((g-A)/2),l=i((g-A)/2);switch(C){case"XYX":Q.set(E*s,e*n,e*D,E*t);break;case"YZY":Q.set(e*D,E*s,e*n,E*t);break;case"ZXZ":Q.set(e*n,e*D,E*s,E*t);break;case"XZX":Q.set(E*s,e*l,e*r,E*t);break;case"YXY":Q.set(e*r,E*s,e*l,E*t);break;case"ZYZ":Q.set(e*l,e*r,E*s,E*t);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+C)}}function ZC(Q,A){switch(A.constructor){case Float32Array:return Q;case Uint16Array:return Q/65535;case Uint8Array:return Q/255;case Int16Array:return Math.max(Q/32767,-1);case Int8Array:return Math.max(Q/127,-1);default:throw new Error("Invalid component type.")}}function NI(Q,A){switch(A.constructor){case Float32Array:return Q;case Uint16Array:return Math.round(Q*65535);case Uint8Array:return Math.round(Q*255);case Int16Array:return Math.round(Q*32767);case Int8Array:return Math.round(Q*127);default:throw new Error("Invalid component type.")}}const Gk={DEG2RAD:Zi,RAD2DEG:Eo,generateUUID:_C,clamp:kg,euclideanModulo:Fh,mapLinear:wp,inverseLerp:Gp,lerp:re,damp:Sp,pingpong:yp,smoothstep:kp,smootherstep:Mp,randInt:Up,randFloat:Np,randFloatSpread:Kp,seededRandom:Fp,degToRad:Rp,radToDeg:Jp,isPowerOfTwo:vr,ceilPowerOfTwo:lk,floorPowerOfTwo:wk,setQuaternionFromProperEuler:dp,normalize:NI,denormalize:ZC};class cA{constructor(A=0,I=0){cA.prototype.isVector2=!0,this.x=A,this.y=I}get width(){return this.x}set width(A){this.x=A}get height(){return this.y}set height(A){this.y=A}set(A,I){return this.x=A,this.y=I,this}setScalar(A){return this.x=A,this.y=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y)}copy(A){return this.x=A.x,this.y=A.y,this}add(A){return this.x+=A.x,this.y+=A.y,this}addScalar(A){return this.x+=A,this.y+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this}subScalar(A){return this.x-=A,this.y-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this}multiply(A){return this.x*=A.x,this.y*=A.y,this}multiplyScalar(A){return this.x*=A,this.y*=A,this}divide(A){return this.x/=A.x,this.y/=A.y,this}divideScalar(A){return this.multiplyScalar(1/A)}applyMatrix3(A){const I=this.x,g=this.y,C=A.elements;return this.x=C[0]*I+C[3]*g+C[6],this.y=C[1]*I+C[4]*g+C[7],this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(A){return this.x*A.x+this.y*A.y}cross(A){return this.x*A.y-this.y*A.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(A){const I=Math.sqrt(this.lengthSq()*A.lengthSq());if(I===0)return Math.PI/2;const g=this.dot(A)/I;return Math.acos(kg(g,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const I=this.x-A.x,g=this.y-A.y;return I*I+g*g}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this}equals(A){return A.x===this.x&&A.y===this.y}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this}rotateAround(A,I){const g=Math.cos(I),C=Math.sin(I),B=this.x-A.x,i=this.y-A.y;return this.x=B*g-i*C+A.x,this.y=B*C+i*g+A.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}let mI=class Sk{constructor(){Sk.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(A,I,g,C,B,i,E,e,t){const s=this.elements;return s[0]=A,s[1]=C,s[2]=E,s[3]=I,s[4]=B,s[5]=e,s[6]=g,s[7]=i,s[8]=t,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(A){const I=this.elements,g=A.elements;return I[0]=g[0],I[1]=g[1],I[2]=g[2],I[3]=g[3],I[4]=g[4],I[5]=g[5],I[6]=g[6],I[7]=g[7],I[8]=g[8],this}extractBasis(A,I,g){return A.setFromMatrix3Column(this,0),I.setFromMatrix3Column(this,1),g.setFromMatrix3Column(this,2),this}setFromMatrix4(A){const I=A.elements;return this.set(I[0],I[4],I[8],I[1],I[5],I[9],I[2],I[6],I[10]),this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,I){const g=A.elements,C=I.elements,B=this.elements,i=g[0],E=g[3],e=g[6],t=g[1],s=g[4],n=g[7],D=g[2],r=g[5],l=g[8],G=C[0],w=C[3],c=C[6],k=C[1],y=C[4],M=C[7],N=C[2],R=C[5],d=C[8];return B[0]=i*G+E*k+e*N,B[3]=i*w+E*y+e*R,B[6]=i*c+E*M+e*d,B[1]=t*G+s*k+n*N,B[4]=t*w+s*y+n*R,B[7]=t*c+s*M+n*d,B[2]=D*G+r*k+l*N,B[5]=D*w+r*y+l*R,B[8]=D*c+r*M+l*d,this}multiplyScalar(A){const I=this.elements;return I[0]*=A,I[3]*=A,I[6]*=A,I[1]*=A,I[4]*=A,I[7]*=A,I[2]*=A,I[5]*=A,I[8]*=A,this}determinant(){const A=this.elements,I=A[0],g=A[1],C=A[2],B=A[3],i=A[4],E=A[5],e=A[6],t=A[7],s=A[8];return I*i*s-I*E*t-g*B*s+g*E*e+C*B*t-C*i*e}invert(){const A=this.elements,I=A[0],g=A[1],C=A[2],B=A[3],i=A[4],E=A[5],e=A[6],t=A[7],s=A[8],n=s*i-E*t,D=E*e-s*B,r=t*B-i*e,l=I*n+g*D+C*r;if(l===0)return this.set(0,0,0,0,0,0,0,0,0);const G=1/l;return A[0]=n*G,A[1]=(C*t-s*g)*G,A[2]=(E*g-C*i)*G,A[3]=D*G,A[4]=(s*I-C*e)*G,A[5]=(C*B-E*I)*G,A[6]=r*G,A[7]=(g*e-t*I)*G,A[8]=(i*I-g*B)*G,this}transpose(){let A;const I=this.elements;return A=I[1],I[1]=I[3],I[3]=A,A=I[2],I[2]=I[6],I[6]=A,A=I[5],I[5]=I[7],I[7]=A,this}getNormalMatrix(A){return this.setFromMatrix4(A).invert().transpose()}transposeIntoArray(A){const I=this.elements;return A[0]=I[0],A[1]=I[3],A[2]=I[6],A[3]=I[1],A[4]=I[4],A[5]=I[7],A[6]=I[2],A[7]=I[5],A[8]=I[8],this}setUvTransform(A,I,g,C,B,i,E){const e=Math.cos(B),t=Math.sin(B);return this.set(g*e,g*t,-g*(e*i+t*E)+i+A,-C*t,C*e,-C*(-t*i+e*E)+E+I,0,0,1),this}scale(A,I){return this.premultiply(cD.makeScale(A,I)),this}rotate(A){return this.premultiply(cD.makeRotation(-A)),this}translate(A,I){return this.premultiply(cD.makeTranslation(A,I)),this}makeTranslation(A,I){return this.set(1,0,A,0,1,I,0,0,1),this}makeRotation(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,-g,0,g,I,0,0,0,1),this}makeScale(A,I){return this.set(A,0,0,0,I,0,0,0,1),this}equals(A){const I=this.elements,g=A.elements;for(let C=0;C<9;C++)if(I[C]!==g[C])return!1;return!0}fromArray(A,I=0){for(let g=0;g<9;g++)this.elements[g]=A[g+I];return this}toArray(A=[],I=0){const g=this.elements;return A[I]=g[0],A[I+1]=g[1],A[I+2]=g[2],A[I+3]=g[3],A[I+4]=g[4],A[I+5]=g[5],A[I+6]=g[6],A[I+7]=g[7],A[I+8]=g[8],A}clone(){return new this.constructor().fromArray(this.elements)}};const cD=new mI;function yk(Q){for(let A=Q.length-1;A>=0;--A)if(Q[A]>=65535)return!0;return!1}const pp={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function VE(Q,A){return new pp[Q](A)}function Ke(Q){return document.createElementNS("http://www.w3.org/1999/xhtml",Q)}const BG={};function he(Q){Q in BG||(BG[Q]=!0,console.warn(Q))}function go(Q){return Q<.04045?Q*.0773993808:Math.pow(Q*.9478672986+.0521327014,2.4)}function lD(Q){return Q<.0031308?Q*12.92:1.055*Math.pow(Q,.41666)-.055}const fp=new mI().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),qp=new mI().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function up(Q){return Q.convertSRGBToLinear().applyMatrix3(qp)}function Lp(Q){return Q.applyMatrix3(fp).convertLinearToSRGB()}const Yp={[sB]:Q=>Q,[QI]:Q=>Q.convertSRGBToLinear(),[Kh]:up},Hp={[sB]:Q=>Q,[QI]:Q=>Q.convertLinearToSRGB(),[Kh]:Lp},OC={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(Q){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!Q},get workingColorSpace(){return sB},set workingColorSpace(Q){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(Q,A,I){if(this.enabled===!1||A===I||!A||!I)return Q;const g=Yp[A],C=Hp[I];if(g===void 0||C===void 0)throw new Error(`Unsupported color space conversion, "${A}" to "${I}".`);return C(g(Q))},fromWorkingColorSpace:function(Q,A){return this.convert(Q,this.workingColorSpace,A)},toWorkingColorSpace:function(Q,A){return this.convert(Q,A,this.workingColorSpace)}};let ME;class Rh{static getDataURL(A){if(/^data:/i.test(A.src)||typeof HTMLCanvasElement>"u")return A.src;let I;if(A instanceof HTMLCanvasElement)I=A;else{ME===void 0&&(ME=Ke("canvas")),ME.width=A.width,ME.height=A.height;const g=ME.getContext("2d");A instanceof ImageData?g.putImageData(A,0,0):g.drawImage(A,0,0,A.width,A.height),I=ME}return I.width>2048||I.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",A),I.toDataURL("image/jpeg",.6)):I.toDataURL("image/png")}static sRGBToLinear(A){if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const I=Ke("canvas");I.width=A.width,I.height=A.height;const g=I.getContext("2d");g.drawImage(A,0,0,A.width,A.height);const C=g.getImageData(0,0,A.width,A.height),B=C.data;for(let i=0;i<B.length;i++)B[i]=go(B[i]/255)*255;return g.putImageData(C,0,0),I}else if(A.data){const I=A.data.slice(0);for(let g=0;g<I.length;g++)I instanceof Uint8Array||I instanceof Uint8ClampedArray?I[g]=Math.floor(go(I[g]/255)*255):I[g]=go(I[g]);return{data:I,width:A.width,height:A.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),A}}class Ti{constructor(A=null){this.isSource=!0,this.uuid=_C(),this.data=A,this.version=0}set needsUpdate(A){A===!0&&this.version++}toJSON(A){const I=A===void 0||typeof A=="string";if(!I&&A.images[this.uuid]!==void 0)return A.images[this.uuid];const g={uuid:this.uuid,url:""},C=this.data;if(C!==null){let B;if(Array.isArray(C)){B=[];for(let i=0,E=C.length;i<E;i++)C[i].isDataTexture?B.push(wD(C[i].image)):B.push(wD(C[i]))}else B=wD(C);g.url=B}return I||(A.images[this.uuid]=g),g}}function wD(Q){return typeof HTMLImageElement<"u"&&Q instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&Q instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&Q instanceof ImageBitmap?Rh.getDataURL(Q):Q.data?{data:Array.from(Q.data),width:Q.width,height:Q.height,type:Q.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let mp=0;class rg extends CQ{constructor(A=rg.DEFAULT_IMAGE,I=rg.DEFAULT_MAPPING,g=AC,C=AC,B=Eg,i=RB,E=Wg,e=EC,t=rg.DEFAULT_ANISOTROPY,s=jB){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mp++}),this.uuid=_C(),this.name="",this.source=new Ti(A),this.mipmaps=[],this.mapping=I,this.channel=0,this.wrapS=g,this.wrapT=C,this.magFilter=B,this.minFilter=i,this.anisotropy=t,this.format=E,this.internalFormat=null,this.type=e,this.offset=new cA(0,0),this.repeat=new cA(1,1),this.center=new cA(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mI,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof s=="string"?this.colorSpace=s:(he("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=s===FQ?QI:jB),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(A=null){this.source.data=A}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(A){return this.name=A.name,this.source=A.source,this.mipmaps=A.mipmaps.slice(0),this.mapping=A.mapping,this.channel=A.channel,this.wrapS=A.wrapS,this.wrapT=A.wrapT,this.magFilter=A.magFilter,this.minFilter=A.minFilter,this.anisotropy=A.anisotropy,this.format=A.format,this.internalFormat=A.internalFormat,this.type=A.type,this.offset.copy(A.offset),this.repeat.copy(A.repeat),this.center.copy(A.center),this.rotation=A.rotation,this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrix.copy(A.matrix),this.generateMipmaps=A.generateMipmaps,this.premultiplyAlpha=A.premultiplyAlpha,this.flipY=A.flipY,this.unpackAlignment=A.unpackAlignment,this.colorSpace=A.colorSpace,this.userData=JSON.parse(JSON.stringify(A.userData)),this.needsUpdate=!0,this}toJSON(A){const I=A===void 0||typeof A=="string";if(!I&&A.textures[this.uuid]!==void 0)return A.textures[this.uuid];const g={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(A).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(g.userData=this.userData),I||(A.textures[this.uuid]=g),g}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(A){if(this.mapping!==Fs)return A;if(A.applyMatrix3(this.matrix),A.x<0||A.x>1)switch(this.wrapS){case Ci:A.x=A.x-Math.floor(A.x);break;case AC:A.x=A.x<0?0:1;break;case Qo:Math.abs(Math.floor(A.x)%2)===1?A.x=Math.ceil(A.x)-A.x:A.x=A.x-Math.floor(A.x);break}if(A.y<0||A.y>1)switch(this.wrapT){case Ci:A.y=A.y-Math.floor(A.y);break;case AC:A.y=A.y<0?0:1;break;case Qo:Math.abs(Math.floor(A.y)%2)===1?A.y=Math.ceil(A.y)-A.y:A.y=A.y-Math.floor(A.y);break}return this.flipY&&(A.y=1-A.y),A}set needsUpdate(A){A===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return he("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===QI?FQ:Ue}set encoding(A){he("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=A===FQ?QI:jB}}rg.DEFAULT_IMAGE=null;rg.DEFAULT_MAPPING=Fs;rg.DEFAULT_ANISOTROPY=1;class $I{constructor(A=0,I=0,g=0,C=1){$I.prototype.isVector4=!0,this.x=A,this.y=I,this.z=g,this.w=C}get width(){return this.z}set width(A){this.z=A}get height(){return this.w}set height(A){this.w=A}set(A,I,g,C){return this.x=A,this.y=I,this.z=g,this.w=C,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this.w=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setW(A){return this.w=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;case 2:this.z=I;break;case 3:this.w=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this.w=A.w!==void 0?A.w:1,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this.w+=A.w,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this.w+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this.z=A.z+I.z,this.w=A.w+I.w,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this.z+=A.z*I,this.w+=A.w*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this.w-=A.w,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this.w-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this.z=A.z-I.z,this.w=A.w-I.w,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this.w*=A.w,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this.w*=A,this}applyMatrix4(A){const I=this.x,g=this.y,C=this.z,B=this.w,i=A.elements;return this.x=i[0]*I+i[4]*g+i[8]*C+i[12]*B,this.y=i[1]*I+i[5]*g+i[9]*C+i[13]*B,this.z=i[2]*I+i[6]*g+i[10]*C+i[14]*B,this.w=i[3]*I+i[7]*g+i[11]*C+i[15]*B,this}divideScalar(A){return this.multiplyScalar(1/A)}setAxisAngleFromQuaternion(A){this.w=2*Math.acos(A.w);const I=Math.sqrt(1-A.w*A.w);return I<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=A.x/I,this.y=A.y/I,this.z=A.z/I),this}setAxisAngleFromRotationMatrix(A){let I,g,C,B;const e=A.elements,t=e[0],s=e[4],n=e[8],D=e[1],r=e[5],l=e[9],G=e[2],w=e[6],c=e[10];if(Math.abs(s-D)<.01&&Math.abs(n-G)<.01&&Math.abs(l-w)<.01){if(Math.abs(s+D)<.1&&Math.abs(n+G)<.1&&Math.abs(l+w)<.1&&Math.abs(t+r+c-3)<.1)return this.set(1,0,0,0),this;I=Math.PI;const y=(t+1)/2,M=(r+1)/2,N=(c+1)/2,R=(s+D)/4,d=(n+G)/4,L=(l+w)/4;return y>M&&y>N?y<.01?(g=0,C=.707106781,B=.707106781):(g=Math.sqrt(y),C=R/g,B=d/g):M>N?M<.01?(g=.707106781,C=0,B=.707106781):(C=Math.sqrt(M),g=R/C,B=L/C):N<.01?(g=.707106781,C=.707106781,B=0):(B=Math.sqrt(N),g=d/B,C=L/B),this.set(g,C,B,I),this}let k=Math.sqrt((w-l)*(w-l)+(n-G)*(n-G)+(D-s)*(D-s));return Math.abs(k)<.001&&(k=1),this.x=(w-l)/k,this.y=(n-G)/k,this.z=(D-s)/k,this.w=Math.acos((t+r+c-1)/2),this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this.w=Math.min(this.w,A.w),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this.w=Math.max(this.w,A.w),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this.z=Math.max(A.z,Math.min(I.z,this.z)),this.w=Math.max(A.w,Math.min(I.w,this.w)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this.z=Math.max(A,Math.min(I,this.z)),this.w=Math.max(A,Math.min(I,this.w)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z+this.w*A.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this.z+=(A.z-this.z)*I,this.w+=(A.w-this.w)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this.z=A.z+(I.z-A.z)*g,this.w=A.w+(I.w-A.w)*g,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z&&A.w===this.w}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this.z=A[I+2],this.w=A[I+3],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A[I+2]=this.z,A[I+3]=this.w,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this.z=A.getZ(I),this.w=A.getW(I),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class JB extends CQ{constructor(A=1,I=1,g={}){super(),this.isWebGLRenderTarget=!0,this.width=A,this.height=I,this.depth=1,this.scissor=new $I(0,0,A,I),this.scissorTest=!1,this.viewport=new $I(0,0,A,I);const C={width:A,height:I,depth:1};g.encoding!==void 0&&(he("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),g.colorSpace=g.encoding===FQ?QI:jB),this.texture=new rg(C,g.mapping,g.wrapS,g.wrapT,g.magFilter,g.minFilter,g.format,g.type,g.anisotropy,g.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=g.generateMipmaps!==void 0?g.generateMipmaps:!1,this.texture.internalFormat=g.internalFormat!==void 0?g.internalFormat:null,this.texture.minFilter=g.minFilter!==void 0?g.minFilter:Eg,this.depthBuffer=g.depthBuffer!==void 0?g.depthBuffer:!0,this.stencilBuffer=g.stencilBuffer!==void 0?g.stencilBuffer:!1,this.depthTexture=g.depthTexture!==void 0?g.depthTexture:null,this.samples=g.samples!==void 0?g.samples:0}setSize(A,I,g=1){(this.width!==A||this.height!==I||this.depth!==g)&&(this.width=A,this.height=I,this.depth=g,this.texture.image.width=A,this.texture.image.height=I,this.texture.image.depth=g,this.dispose()),this.viewport.set(0,0,A,I),this.scissor.set(0,0,A,I)}clone(){return new this.constructor().copy(this)}copy(A){this.width=A.width,this.height=A.height,this.depth=A.depth,this.scissor.copy(A.scissor),this.scissorTest=A.scissorTest,this.viewport.copy(A.viewport),this.texture=A.texture.clone(),this.texture.isRenderTargetTexture=!0;const I=Object.assign({},A.texture.image);return this.texture.source=new Ti(I),this.depthBuffer=A.depthBuffer,this.stencilBuffer=A.stencilBuffer,A.depthTexture!==null&&(this.depthTexture=A.depthTexture.clone()),this.samples=A.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ds extends rg{constructor(A=null,I=1,g=1,C=1){super(null),this.isDataArrayTexture=!0,this.image={data:A,width:I,height:g,depth:C},this.magFilter=Sg,this.minFilter=Sg,this.wrapR=AC,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bp extends JB{constructor(A=1,I=1,g=1){super(A,I),this.isWebGLArrayRenderTarget=!0,this.depth=g,this.texture=new ds(null,A,I,g),this.texture.isRenderTargetTexture=!0}}class ps extends rg{constructor(A=null,I=1,g=1,C=1){super(null),this.isData3DTexture=!0,this.image={data:A,width:I,height:g,depth:C},this.magFilter=Sg,this.minFilter=Sg,this.wrapR=AC,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Tp extends JB{constructor(A=1,I=1,g=1){super(A,I),this.isWebGL3DRenderTarget=!0,this.depth=g,this.texture=new ps(null,A,I,g),this.texture.isRenderTargetTexture=!0}}class xp extends JB{constructor(A=1,I=1,g=1,C={}){super(A,I,C),this.isWebGLMultipleRenderTargets=!0;const B=this.texture;this.texture=[];for(let i=0;i<g;i++)this.texture[i]=B.clone(),this.texture[i].isRenderTargetTexture=!0}setSize(A,I,g=1){if(this.width!==A||this.height!==I||this.depth!==g){this.width=A,this.height=I,this.depth=g;for(let C=0,B=this.texture.length;C<B;C++)this.texture[C].image.width=A,this.texture[C].image.height=I,this.texture[C].image.depth=g;this.dispose()}return this.viewport.set(0,0,A,I),this.scissor.set(0,0,A,I),this}copy(A){this.dispose(),this.width=A.width,this.height=A.height,this.depth=A.depth,this.scissor.copy(A.scissor),this.scissorTest=A.scissorTest,this.viewport.copy(A.viewport),this.depthBuffer=A.depthBuffer,this.stencilBuffer=A.stencilBuffer,A.depthTexture!==null&&(this.depthTexture=A.depthTexture.clone()),this.texture.length=0;for(let I=0,g=A.texture.length;I<g;I++)this.texture[I]=A.texture[I].clone(),this.texture[I].isRenderTargetTexture=!0;return this}}class hg{constructor(A=0,I=0,g=0,C=1){this.isQuaternion=!0,this._x=A,this._y=I,this._z=g,this._w=C}static slerpFlat(A,I,g,C,B,i,E){let e=g[C+0],t=g[C+1],s=g[C+2],n=g[C+3];const D=B[i+0],r=B[i+1],l=B[i+2],G=B[i+3];if(E===0){A[I+0]=e,A[I+1]=t,A[I+2]=s,A[I+3]=n;return}if(E===1){A[I+0]=D,A[I+1]=r,A[I+2]=l,A[I+3]=G;return}if(n!==G||e!==D||t!==r||s!==l){let w=1-E;const c=e*D+t*r+s*l+n*G,k=c>=0?1:-1,y=1-c*c;if(y>Number.EPSILON){const N=Math.sqrt(y),R=Math.atan2(N,c*k);w=Math.sin(w*R)/N,E=Math.sin(E*R)/N}const M=E*k;if(e=e*w+D*M,t=t*w+r*M,s=s*w+l*M,n=n*w+G*M,w===1-E){const N=1/Math.sqrt(e*e+t*t+s*s+n*n);e*=N,t*=N,s*=N,n*=N}}A[I]=e,A[I+1]=t,A[I+2]=s,A[I+3]=n}static multiplyQuaternionsFlat(A,I,g,C,B,i){const E=g[C],e=g[C+1],t=g[C+2],s=g[C+3],n=B[i],D=B[i+1],r=B[i+2],l=B[i+3];return A[I]=E*l+s*n+e*r-t*D,A[I+1]=e*l+s*D+t*n-E*r,A[I+2]=t*l+s*r+E*D-e*n,A[I+3]=s*l-E*n-e*D-t*r,A}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get w(){return this._w}set w(A){this._w=A,this._onChangeCallback()}set(A,I,g,C){return this._x=A,this._y=I,this._z=g,this._w=C,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(A){return this._x=A.x,this._y=A.y,this._z=A.z,this._w=A.w,this._onChangeCallback(),this}setFromEuler(A,I){const g=A._x,C=A._y,B=A._z,i=A._order,E=Math.cos,e=Math.sin,t=E(g/2),s=E(C/2),n=E(B/2),D=e(g/2),r=e(C/2),l=e(B/2);switch(i){case"XYZ":this._x=D*s*n+t*r*l,this._y=t*r*n-D*s*l,this._z=t*s*l+D*r*n,this._w=t*s*n-D*r*l;break;case"YXZ":this._x=D*s*n+t*r*l,this._y=t*r*n-D*s*l,this._z=t*s*l-D*r*n,this._w=t*s*n+D*r*l;break;case"ZXY":this._x=D*s*n-t*r*l,this._y=t*r*n+D*s*l,this._z=t*s*l+D*r*n,this._w=t*s*n-D*r*l;break;case"ZYX":this._x=D*s*n-t*r*l,this._y=t*r*n+D*s*l,this._z=t*s*l-D*r*n,this._w=t*s*n+D*r*l;break;case"YZX":this._x=D*s*n+t*r*l,this._y=t*r*n+D*s*l,this._z=t*s*l-D*r*n,this._w=t*s*n-D*r*l;break;case"XZY":this._x=D*s*n-t*r*l,this._y=t*r*n-D*s*l,this._z=t*s*l+D*r*n,this._w=t*s*n+D*r*l;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+i)}return I!==!1&&this._onChangeCallback(),this}setFromAxisAngle(A,I){const g=I/2,C=Math.sin(g);return this._x=A.x*C,this._y=A.y*C,this._z=A.z*C,this._w=Math.cos(g),this._onChangeCallback(),this}setFromRotationMatrix(A){const I=A.elements,g=I[0],C=I[4],B=I[8],i=I[1],E=I[5],e=I[9],t=I[2],s=I[6],n=I[10],D=g+E+n;if(D>0){const r=.5/Math.sqrt(D+1);this._w=.25/r,this._x=(s-e)*r,this._y=(B-t)*r,this._z=(i-C)*r}else if(g>E&&g>n){const r=2*Math.sqrt(1+g-E-n);this._w=(s-e)/r,this._x=.25*r,this._y=(C+i)/r,this._z=(B+t)/r}else if(E>n){const r=2*Math.sqrt(1+E-g-n);this._w=(B-t)/r,this._x=(C+i)/r,this._y=.25*r,this._z=(e+s)/r}else{const r=2*Math.sqrt(1+n-g-E);this._w=(i-C)/r,this._x=(B+t)/r,this._y=(e+s)/r,this._z=.25*r}return this._onChangeCallback(),this}setFromUnitVectors(A,I){let g=A.dot(I)+1;return g<Number.EPSILON?(g=0,Math.abs(A.x)>Math.abs(A.z)?(this._x=-A.y,this._y=A.x,this._z=0,this._w=g):(this._x=0,this._y=-A.z,this._z=A.y,this._w=g)):(this._x=A.y*I.z-A.z*I.y,this._y=A.z*I.x-A.x*I.z,this._z=A.x*I.y-A.y*I.x,this._w=g),this.normalize()}angleTo(A){return 2*Math.acos(Math.abs(kg(this.dot(A),-1,1)))}rotateTowards(A,I){const g=this.angleTo(A);if(g===0)return this;const C=Math.min(1,I/g);return this.slerp(A,C),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(A){return this._x*A._x+this._y*A._y+this._z*A._z+this._w*A._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let A=this.length();return A===0?(this._x=0,this._y=0,this._z=0,this._w=1):(A=1/A,this._x=this._x*A,this._y=this._y*A,this._z=this._z*A,this._w=this._w*A),this._onChangeCallback(),this}multiply(A){return this.multiplyQuaternions(this,A)}premultiply(A){return this.multiplyQuaternions(A,this)}multiplyQuaternions(A,I){const g=A._x,C=A._y,B=A._z,i=A._w,E=I._x,e=I._y,t=I._z,s=I._w;return this._x=g*s+i*E+C*t-B*e,this._y=C*s+i*e+B*E-g*t,this._z=B*s+i*t+g*e-C*E,this._w=i*s-g*E-C*e-B*t,this._onChangeCallback(),this}slerp(A,I){if(I===0)return this;if(I===1)return this.copy(A);const g=this._x,C=this._y,B=this._z,i=this._w;let E=i*A._w+g*A._x+C*A._y+B*A._z;if(E<0?(this._w=-A._w,this._x=-A._x,this._y=-A._y,this._z=-A._z,E=-E):this.copy(A),E>=1)return this._w=i,this._x=g,this._y=C,this._z=B,this;const e=1-E*E;if(e<=Number.EPSILON){const r=1-I;return this._w=r*i+I*this._w,this._x=r*g+I*this._x,this._y=r*C+I*this._y,this._z=r*B+I*this._z,this.normalize(),this._onChangeCallback(),this}const t=Math.sqrt(e),s=Math.atan2(t,E),n=Math.sin((1-I)*s)/t,D=Math.sin(I*s)/t;return this._w=i*n+this._w*D,this._x=g*n+this._x*D,this._y=C*n+this._y*D,this._z=B*n+this._z*D,this._onChangeCallback(),this}slerpQuaternions(A,I,g){return this.copy(A).slerp(I,g)}random(){const A=Math.random(),I=Math.sqrt(1-A),g=Math.sqrt(A),C=2*Math.PI*Math.random(),B=2*Math.PI*Math.random();return this.set(I*Math.cos(C),g*Math.sin(B),g*Math.cos(B),I*Math.sin(C))}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._w===this._w}fromArray(A,I=0){return this._x=A[I],this._y=A[I+1],this._z=A[I+2],this._w=A[I+3],this._onChangeCallback(),this}toArray(A=[],I=0){return A[I]=this._x,A[I+1]=this._y,A[I+2]=this._z,A[I+3]=this._w,A}fromBufferAttribute(A,I){return this._x=A.getX(I),this._y=A.getY(I),this._z=A.getZ(I),this._w=A.getW(I),this}toJSON(){return this.toArray()}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class u{constructor(A=0,I=0,g=0){u.prototype.isVector3=!0,this.x=A,this.y=I,this.z=g}set(A,I,g){return g===void 0&&(g=this.z),this.x=A,this.y=I,this.z=g,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;case 2:this.z=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this.z=A.z+I.z,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this.z+=A.z*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this.z=A.z-I.z,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this}multiplyVectors(A,I){return this.x=A.x*I.x,this.y=A.y*I.y,this.z=A.z*I.z,this}applyEuler(A){return this.applyQuaternion(QG.setFromEuler(A))}applyAxisAngle(A,I){return this.applyQuaternion(QG.setFromAxisAngle(A,I))}applyMatrix3(A){const I=this.x,g=this.y,C=this.z,B=A.elements;return this.x=B[0]*I+B[3]*g+B[6]*C,this.y=B[1]*I+B[4]*g+B[7]*C,this.z=B[2]*I+B[5]*g+B[8]*C,this}applyNormalMatrix(A){return this.applyMatrix3(A).normalize()}applyMatrix4(A){const I=this.x,g=this.y,C=this.z,B=A.elements,i=1/(B[3]*I+B[7]*g+B[11]*C+B[15]);return this.x=(B[0]*I+B[4]*g+B[8]*C+B[12])*i,this.y=(B[1]*I+B[5]*g+B[9]*C+B[13])*i,this.z=(B[2]*I+B[6]*g+B[10]*C+B[14])*i,this}applyQuaternion(A){const I=this.x,g=this.y,C=this.z,B=A.x,i=A.y,E=A.z,e=A.w,t=e*I+i*C-E*g,s=e*g+E*I-B*C,n=e*C+B*g-i*I,D=-B*I-i*g-E*C;return this.x=t*e+D*-B+s*-E-n*-i,this.y=s*e+D*-i+n*-B-t*-E,this.z=n*e+D*-E+t*-i-s*-B,this}project(A){return this.applyMatrix4(A.matrixWorldInverse).applyMatrix4(A.projectionMatrix)}unproject(A){return this.applyMatrix4(A.projectionMatrixInverse).applyMatrix4(A.matrixWorld)}transformDirection(A){const I=this.x,g=this.y,C=this.z,B=A.elements;return this.x=B[0]*I+B[4]*g+B[8]*C,this.y=B[1]*I+B[5]*g+B[9]*C,this.z=B[2]*I+B[6]*g+B[10]*C,this.normalize()}divide(A){return this.x/=A.x,this.y/=A.y,this.z/=A.z,this}divideScalar(A){return this.multiplyScalar(1/A)}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this.z=Math.max(A.z,Math.min(I.z,this.z)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this.z=Math.max(A,Math.min(I,this.z)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this.z+=(A.z-this.z)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this.z=A.z+(I.z-A.z)*g,this}cross(A){return this.crossVectors(this,A)}crossVectors(A,I){const g=A.x,C=A.y,B=A.z,i=I.x,E=I.y,e=I.z;return this.x=C*e-B*E,this.y=B*i-g*e,this.z=g*E-C*i,this}projectOnVector(A){const I=A.lengthSq();if(I===0)return this.set(0,0,0);const g=A.dot(this)/I;return this.copy(A).multiplyScalar(g)}projectOnPlane(A){return GD.copy(this).projectOnVector(A),this.sub(GD)}reflect(A){return this.sub(GD.copy(A).multiplyScalar(2*this.dot(A)))}angleTo(A){const I=Math.sqrt(this.lengthSq()*A.lengthSq());if(I===0)return Math.PI/2;const g=this.dot(A)/I;return Math.acos(kg(g,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const I=this.x-A.x,g=this.y-A.y,C=this.z-A.z;return I*I+g*g+C*C}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)+Math.abs(this.z-A.z)}setFromSpherical(A){return this.setFromSphericalCoords(A.radius,A.phi,A.theta)}setFromSphericalCoords(A,I,g){const C=Math.sin(I)*A;return this.x=C*Math.sin(g),this.y=Math.cos(I)*A,this.z=C*Math.cos(g),this}setFromCylindrical(A){return this.setFromCylindricalCoords(A.radius,A.theta,A.y)}setFromCylindricalCoords(A,I,g){return this.x=A*Math.sin(I),this.y=g,this.z=A*Math.cos(I),this}setFromMatrixPosition(A){const I=A.elements;return this.x=I[12],this.y=I[13],this.z=I[14],this}setFromMatrixScale(A){const I=this.setFromMatrixColumn(A,0).length(),g=this.setFromMatrixColumn(A,1).length(),C=this.setFromMatrixColumn(A,2).length();return this.x=I,this.y=g,this.z=C,this}setFromMatrixColumn(A,I){return this.fromArray(A.elements,I*4)}setFromMatrix3Column(A,I){return this.fromArray(A.elements,I*3)}setFromEuler(A){return this.x=A._x,this.y=A._y,this.z=A._z,this}setFromColor(A){return this.x=A.r,this.y=A.g,this.z=A.b,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this.z=A[I+2],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A[I+2]=this.z,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this.z=A.getZ(I),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const A=(Math.random()-.5)*2,I=Math.random()*Math.PI*2,g=Math.sqrt(1-A**2);return this.x=g*Math.cos(I),this.y=g*Math.sin(I),this.z=A,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const GD=new u,QG=new hg;class dB{constructor(A=new u(1/0,1/0,1/0),I=new u(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=A,this.max=I}set(A,I){return this.min.copy(A),this.max.copy(I),this}setFromArray(A){this.makeEmpty();for(let I=0,g=A.length;I<g;I+=3)this.expandByPoint(rQ.fromArray(A,I));return this}setFromBufferAttribute(A){this.makeEmpty();for(let I=0,g=A.count;I<g;I++)this.expandByPoint(rQ.fromBufferAttribute(A,I));return this}setFromPoints(A){this.makeEmpty();for(let I=0,g=A.length;I<g;I++)this.expandByPoint(A[I]);return this}setFromCenterAndSize(A,I){const g=rQ.copy(I).multiplyScalar(.5);return this.min.copy(A).sub(g),this.max.copy(A).add(g),this}setFromObject(A,I=!1){return this.makeEmpty(),this.expandByObject(A,I)}clone(){return new this.constructor().copy(this)}copy(A){return this.min.copy(A.min),this.max.copy(A.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(A){return this.isEmpty()?A.set(0,0,0):A.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(A){return this.isEmpty()?A.set(0,0,0):A.subVectors(this.max,this.min)}expandByPoint(A){return this.min.min(A),this.max.max(A),this}expandByVector(A){return this.min.sub(A),this.max.add(A),this}expandByScalar(A){return this.min.addScalar(-A),this.max.addScalar(A),this}expandByObject(A,I=!1){if(A.updateWorldMatrix(!1,!1),A.boundingBox!==void 0)A.boundingBox===null&&A.computeBoundingBox(),UE.copy(A.boundingBox),UE.applyMatrix4(A.matrixWorld),this.union(UE);else{const C=A.geometry;if(C!==void 0)if(I&&C.attributes!==void 0&&C.attributes.position!==void 0){const B=C.attributes.position;for(let i=0,E=B.count;i<E;i++)rQ.fromBufferAttribute(B,i).applyMatrix4(A.matrixWorld),this.expandByPoint(rQ)}else C.boundingBox===null&&C.computeBoundingBox(),UE.copy(C.boundingBox),UE.applyMatrix4(A.matrixWorld),this.union(UE)}const g=A.children;for(let C=0,B=g.length;C<B;C++)this.expandByObject(g[C],I);return this}containsPoint(A){return!(A.x<this.min.x||A.x>this.max.x||A.y<this.min.y||A.y>this.max.y||A.z<this.min.z||A.z>this.max.z)}containsBox(A){return this.min.x<=A.min.x&&A.max.x<=this.max.x&&this.min.y<=A.min.y&&A.max.y<=this.max.y&&this.min.z<=A.min.z&&A.max.z<=this.max.z}getParameter(A,I){return I.set((A.x-this.min.x)/(this.max.x-this.min.x),(A.y-this.min.y)/(this.max.y-this.min.y),(A.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(A){return!(A.max.x<this.min.x||A.min.x>this.max.x||A.max.y<this.min.y||A.min.y>this.max.y||A.max.z<this.min.z||A.min.z>this.max.z)}intersectsSphere(A){return this.clampPoint(A.center,rQ),rQ.distanceToSquared(A.center)<=A.radius*A.radius}intersectsPlane(A){let I,g;return A.normal.x>0?(I=A.normal.x*this.min.x,g=A.normal.x*this.max.x):(I=A.normal.x*this.max.x,g=A.normal.x*this.min.x),A.normal.y>0?(I+=A.normal.y*this.min.y,g+=A.normal.y*this.max.y):(I+=A.normal.y*this.max.y,g+=A.normal.y*this.min.y),A.normal.z>0?(I+=A.normal.z*this.min.z,g+=A.normal.z*this.max.z):(I+=A.normal.z*this.max.z,g+=A.normal.z*this.min.z),I<=-A.constant&&g>=-A.constant}intersectsTriangle(A){if(this.isEmpty())return!1;this.getCenter(_o),Ca.subVectors(this.max,_o),NE.subVectors(A.a,_o),KE.subVectors(A.b,_o),FE.subVectors(A.c,_o),OQ.subVectors(KE,NE),vQ.subVectors(FE,KE),Mi.subVectors(NE,FE);let I=[0,-OQ.z,OQ.y,0,-vQ.z,vQ.y,0,-Mi.z,Mi.y,OQ.z,0,-OQ.x,vQ.z,0,-vQ.x,Mi.z,0,-Mi.x,-OQ.y,OQ.x,0,-vQ.y,vQ.x,0,-Mi.y,Mi.x,0];return!SD(I,NE,KE,FE,Ca)||(I=[1,0,0,0,1,0,0,0,1],!SD(I,NE,KE,FE,Ca))?!1:(Ba.crossVectors(OQ,vQ),I=[Ba.x,Ba.y,Ba.z],SD(I,NE,KE,FE,Ca))}clampPoint(A,I){return I.copy(A).clamp(this.min,this.max)}distanceToPoint(A){return this.clampPoint(A,rQ).distanceTo(A)}getBoundingSphere(A){return this.isEmpty()?A.makeEmpty():(this.getCenter(A.center),A.radius=this.getSize(rQ).length()*.5),A}intersect(A){return this.min.max(A.min),this.max.min(A.max),this.isEmpty()&&this.makeEmpty(),this}union(A){return this.min.min(A.min),this.max.max(A.max),this}applyMatrix4(A){return this.isEmpty()?this:(DQ[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(A),DQ[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(A),DQ[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(A),DQ[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(A),DQ[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(A),DQ[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(A),DQ[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(A),DQ[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(A),this.setFromPoints(DQ),this)}translate(A){return this.min.add(A),this.max.add(A),this}equals(A){return A.min.equals(this.min)&&A.max.equals(this.max)}}const DQ=[new u,new u,new u,new u,new u,new u,new u,new u],rQ=new u,UE=new dB,NE=new u,KE=new u,FE=new u,OQ=new u,vQ=new u,Mi=new u,_o=new u,Ca=new u,Ba=new u,Ui=new u;function SD(Q,A,I,g,C){for(let B=0,i=Q.length-3;B<=i;B+=3){Ui.fromArray(Q,B);const E=C.x*Math.abs(Ui.x)+C.y*Math.abs(Ui.y)+C.z*Math.abs(Ui.z),e=A.dot(Ui),t=I.dot(Ui),s=g.dot(Ui);if(Math.max(-Math.max(e,t,s),Math.min(e,t,s))>E)return!1}return!0}const Op=new dB,jo=new u,yD=new u;class pB{constructor(A=new u,I=-1){this.center=A,this.radius=I}set(A,I){return this.center.copy(A),this.radius=I,this}setFromPoints(A,I){const g=this.center;I!==void 0?g.copy(I):Op.setFromPoints(A).getCenter(g);let C=0;for(let B=0,i=A.length;B<i;B++)C=Math.max(C,g.distanceToSquared(A[B]));return this.radius=Math.sqrt(C),this}copy(A){return this.center.copy(A.center),this.radius=A.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(A){return A.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(A){return A.distanceTo(this.center)-this.radius}intersectsSphere(A){const I=this.radius+A.radius;return A.center.distanceToSquared(this.center)<=I*I}intersectsBox(A){return A.intersectsSphere(this)}intersectsPlane(A){return Math.abs(A.distanceToPoint(this.center))<=this.radius}clampPoint(A,I){const g=this.center.distanceToSquared(A);return I.copy(A),g>this.radius*this.radius&&(I.sub(this.center).normalize(),I.multiplyScalar(this.radius).add(this.center)),I}getBoundingBox(A){return this.isEmpty()?(A.makeEmpty(),A):(A.set(this.center,this.center),A.expandByScalar(this.radius),A)}applyMatrix4(A){return this.center.applyMatrix4(A),this.radius=this.radius*A.getMaxScaleOnAxis(),this}translate(A){return this.center.add(A),this}expandByPoint(A){if(this.isEmpty())return this.center.copy(A),this.radius=0,this;jo.subVectors(A,this.center);const I=jo.lengthSq();if(I>this.radius*this.radius){const g=Math.sqrt(I),C=(g-this.radius)*.5;this.center.addScaledVector(jo,C/g),this.radius+=C}return this}union(A){return A.isEmpty()?this:this.isEmpty()?(this.copy(A),this):(this.center.equals(A.center)===!0?this.radius=Math.max(this.radius,A.radius):(yD.subVectors(A.center,this.center).setLength(A.radius),this.expandByPoint(jo.copy(A.center).add(yD)),this.expandByPoint(jo.copy(A.center).sub(yD))),this)}equals(A){return A.center.equals(this.center)&&A.radius===this.radius}clone(){return new this.constructor().copy(this)}}const hQ=new u,kD=new u,Qa=new u,PQ=new u,MD=new u,ia=new u,UD=new u;class Oe{constructor(A=new u,I=new u(0,0,-1)){this.origin=A,this.direction=I}set(A,I){return this.origin.copy(A),this.direction.copy(I),this}copy(A){return this.origin.copy(A.origin),this.direction.copy(A.direction),this}at(A,I){return I.copy(this.origin).addScaledVector(this.direction,A)}lookAt(A){return this.direction.copy(A).sub(this.origin).normalize(),this}recast(A){return this.origin.copy(this.at(A,hQ)),this}closestPointToPoint(A,I){I.subVectors(A,this.origin);const g=I.dot(this.direction);return g<0?I.copy(this.origin):I.copy(this.origin).addScaledVector(this.direction,g)}distanceToPoint(A){return Math.sqrt(this.distanceSqToPoint(A))}distanceSqToPoint(A){const I=hQ.subVectors(A,this.origin).dot(this.direction);return I<0?this.origin.distanceToSquared(A):(hQ.copy(this.origin).addScaledVector(this.direction,I),hQ.distanceToSquared(A))}distanceSqToSegment(A,I,g,C){kD.copy(A).add(I).multiplyScalar(.5),Qa.copy(I).sub(A).normalize(),PQ.copy(this.origin).sub(kD);const B=A.distanceTo(I)*.5,i=-this.direction.dot(Qa),E=PQ.dot(this.direction),e=-PQ.dot(Qa),t=PQ.lengthSq(),s=Math.abs(1-i*i);let n,D,r,l;if(s>0)if(n=i*e-E,D=i*E-e,l=B*s,n>=0)if(D>=-l)if(D<=l){const G=1/s;n*=G,D*=G,r=n*(n+i*D+2*E)+D*(i*n+D+2*e)+t}else D=B,n=Math.max(0,-(i*D+E)),r=-n*n+D*(D+2*e)+t;else D=-B,n=Math.max(0,-(i*D+E)),r=-n*n+D*(D+2*e)+t;else D<=-l?(n=Math.max(0,-(-i*B+E)),D=n>0?-B:Math.min(Math.max(-B,-e),B),r=-n*n+D*(D+2*e)+t):D<=l?(n=0,D=Math.min(Math.max(-B,-e),B),r=D*(D+2*e)+t):(n=Math.max(0,-(i*B+E)),D=n>0?B:Math.min(Math.max(-B,-e),B),r=-n*n+D*(D+2*e)+t);else D=i>0?-B:B,n=Math.max(0,-(i*D+E)),r=-n*n+D*(D+2*e)+t;return g&&g.copy(this.origin).addScaledVector(this.direction,n),C&&C.copy(kD).addScaledVector(Qa,D),r}intersectSphere(A,I){hQ.subVectors(A.center,this.origin);const g=hQ.dot(this.direction),C=hQ.dot(hQ)-g*g,B=A.radius*A.radius;if(C>B)return null;const i=Math.sqrt(B-C),E=g-i,e=g+i;return e<0?null:E<0?this.at(e,I):this.at(E,I)}intersectsSphere(A){return this.distanceSqToPoint(A.center)<=A.radius*A.radius}distanceToPlane(A){const I=A.normal.dot(this.direction);if(I===0)return A.distanceToPoint(this.origin)===0?0:null;const g=-(this.origin.dot(A.normal)+A.constant)/I;return g>=0?g:null}intersectPlane(A,I){const g=this.distanceToPlane(A);return g===null?null:this.at(g,I)}intersectsPlane(A){const I=A.distanceToPoint(this.origin);return I===0||A.normal.dot(this.direction)*I<0}intersectBox(A,I){let g,C,B,i,E,e;const t=1/this.direction.x,s=1/this.direction.y,n=1/this.direction.z,D=this.origin;return t>=0?(g=(A.min.x-D.x)*t,C=(A.max.x-D.x)*t):(g=(A.max.x-D.x)*t,C=(A.min.x-D.x)*t),s>=0?(B=(A.min.y-D.y)*s,i=(A.max.y-D.y)*s):(B=(A.max.y-D.y)*s,i=(A.min.y-D.y)*s),g>i||B>C||((B>g||isNaN(g))&&(g=B),(i<C||isNaN(C))&&(C=i),n>=0?(E=(A.min.z-D.z)*n,e=(A.max.z-D.z)*n):(E=(A.max.z-D.z)*n,e=(A.min.z-D.z)*n),g>e||E>C)||((E>g||g!==g)&&(g=E),(e<C||C!==C)&&(C=e),C<0)?null:this.at(g>=0?g:C,I)}intersectsBox(A){return this.intersectBox(A,hQ)!==null}intersectTriangle(A,I,g,C,B){MD.subVectors(I,A),ia.subVectors(g,A),UD.crossVectors(MD,ia);let i=this.direction.dot(UD),E;if(i>0){if(C)return null;E=1}else if(i<0)E=-1,i=-i;else return null;PQ.subVectors(this.origin,A);const e=E*this.direction.dot(ia.crossVectors(PQ,ia));if(e<0)return null;const t=E*this.direction.dot(MD.cross(PQ));if(t<0||e+t>i)return null;const s=-E*PQ.dot(UD);return s<0?null:this.at(s/i,B)}applyMatrix4(A){return this.origin.applyMatrix4(A),this.direction.transformDirection(A),this}equals(A){return A.origin.equals(this.origin)&&A.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class cI{constructor(){cI.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(A,I,g,C,B,i,E,e,t,s,n,D,r,l,G,w){const c=this.elements;return c[0]=A,c[4]=I,c[8]=g,c[12]=C,c[1]=B,c[5]=i,c[9]=E,c[13]=e,c[2]=t,c[6]=s,c[10]=n,c[14]=D,c[3]=r,c[7]=l,c[11]=G,c[15]=w,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new cI().fromArray(this.elements)}copy(A){const I=this.elements,g=A.elements;return I[0]=g[0],I[1]=g[1],I[2]=g[2],I[3]=g[3],I[4]=g[4],I[5]=g[5],I[6]=g[6],I[7]=g[7],I[8]=g[8],I[9]=g[9],I[10]=g[10],I[11]=g[11],I[12]=g[12],I[13]=g[13],I[14]=g[14],I[15]=g[15],this}copyPosition(A){const I=this.elements,g=A.elements;return I[12]=g[12],I[13]=g[13],I[14]=g[14],this}setFromMatrix3(A){const I=A.elements;return this.set(I[0],I[3],I[6],0,I[1],I[4],I[7],0,I[2],I[5],I[8],0,0,0,0,1),this}extractBasis(A,I,g){return A.setFromMatrixColumn(this,0),I.setFromMatrixColumn(this,1),g.setFromMatrixColumn(this,2),this}makeBasis(A,I,g){return this.set(A.x,I.x,g.x,0,A.y,I.y,g.y,0,A.z,I.z,g.z,0,0,0,0,1),this}extractRotation(A){const I=this.elements,g=A.elements,C=1/RE.setFromMatrixColumn(A,0).length(),B=1/RE.setFromMatrixColumn(A,1).length(),i=1/RE.setFromMatrixColumn(A,2).length();return I[0]=g[0]*C,I[1]=g[1]*C,I[2]=g[2]*C,I[3]=0,I[4]=g[4]*B,I[5]=g[5]*B,I[6]=g[6]*B,I[7]=0,I[8]=g[8]*i,I[9]=g[9]*i,I[10]=g[10]*i,I[11]=0,I[12]=0,I[13]=0,I[14]=0,I[15]=1,this}makeRotationFromEuler(A){const I=this.elements,g=A.x,C=A.y,B=A.z,i=Math.cos(g),E=Math.sin(g),e=Math.cos(C),t=Math.sin(C),s=Math.cos(B),n=Math.sin(B);if(A.order==="XYZ"){const D=i*s,r=i*n,l=E*s,G=E*n;I[0]=e*s,I[4]=-e*n,I[8]=t,I[1]=r+l*t,I[5]=D-G*t,I[9]=-E*e,I[2]=G-D*t,I[6]=l+r*t,I[10]=i*e}else if(A.order==="YXZ"){const D=e*s,r=e*n,l=t*s,G=t*n;I[0]=D+G*E,I[4]=l*E-r,I[8]=i*t,I[1]=i*n,I[5]=i*s,I[9]=-E,I[2]=r*E-l,I[6]=G+D*E,I[10]=i*e}else if(A.order==="ZXY"){const D=e*s,r=e*n,l=t*s,G=t*n;I[0]=D-G*E,I[4]=-i*n,I[8]=l+r*E,I[1]=r+l*E,I[5]=i*s,I[9]=G-D*E,I[2]=-i*t,I[6]=E,I[10]=i*e}else if(A.order==="ZYX"){const D=i*s,r=i*n,l=E*s,G=E*n;I[0]=e*s,I[4]=l*t-r,I[8]=D*t+G,I[1]=e*n,I[5]=G*t+D,I[9]=r*t-l,I[2]=-t,I[6]=E*e,I[10]=i*e}else if(A.order==="YZX"){const D=i*e,r=i*t,l=E*e,G=E*t;I[0]=e*s,I[4]=G-D*n,I[8]=l*n+r,I[1]=n,I[5]=i*s,I[9]=-E*s,I[2]=-t*s,I[6]=r*n+l,I[10]=D-G*n}else if(A.order==="XZY"){const D=i*e,r=i*t,l=E*e,G=E*t;I[0]=e*s,I[4]=-n,I[8]=t*s,I[1]=D*n+G,I[5]=i*s,I[9]=r*n-l,I[2]=l*n-r,I[6]=E*s,I[10]=G*n+D}return I[3]=0,I[7]=0,I[11]=0,I[12]=0,I[13]=0,I[14]=0,I[15]=1,this}makeRotationFromQuaternion(A){return this.compose(vp,A,Pp)}lookAt(A,I,g){const C=this.elements;return TC.subVectors(A,I),TC.lengthSq()===0&&(TC.z=1),TC.normalize(),ZQ.crossVectors(g,TC),ZQ.lengthSq()===0&&(Math.abs(g.z)===1?TC.x+=1e-4:TC.z+=1e-4,TC.normalize(),ZQ.crossVectors(g,TC)),ZQ.normalize(),Ea.crossVectors(TC,ZQ),C[0]=ZQ.x,C[4]=Ea.x,C[8]=TC.x,C[1]=ZQ.y,C[5]=Ea.y,C[9]=TC.y,C[2]=ZQ.z,C[6]=Ea.z,C[10]=TC.z,this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,I){const g=A.elements,C=I.elements,B=this.elements,i=g[0],E=g[4],e=g[8],t=g[12],s=g[1],n=g[5],D=g[9],r=g[13],l=g[2],G=g[6],w=g[10],c=g[14],k=g[3],y=g[7],M=g[11],N=g[15],R=C[0],d=C[4],L=C[8],F=C[12],q=C[1],W=C[5],$=C[9],H=C[13],x=C[2],IA=C[6],eA=C[10],CA=C[14],QA=C[3],NA=C[7],SA=C[11],HA=C[15];return B[0]=i*R+E*q+e*x+t*QA,B[4]=i*d+E*W+e*IA+t*NA,B[8]=i*L+E*$+e*eA+t*SA,B[12]=i*F+E*H+e*CA+t*HA,B[1]=s*R+n*q+D*x+r*QA,B[5]=s*d+n*W+D*IA+r*NA,B[9]=s*L+n*$+D*eA+r*SA,B[13]=s*F+n*H+D*CA+r*HA,B[2]=l*R+G*q+w*x+c*QA,B[6]=l*d+G*W+w*IA+c*NA,B[10]=l*L+G*$+w*eA+c*SA,B[14]=l*F+G*H+w*CA+c*HA,B[3]=k*R+y*q+M*x+N*QA,B[7]=k*d+y*W+M*IA+N*NA,B[11]=k*L+y*$+M*eA+N*SA,B[15]=k*F+y*H+M*CA+N*HA,this}multiplyScalar(A){const I=this.elements;return I[0]*=A,I[4]*=A,I[8]*=A,I[12]*=A,I[1]*=A,I[5]*=A,I[9]*=A,I[13]*=A,I[2]*=A,I[6]*=A,I[10]*=A,I[14]*=A,I[3]*=A,I[7]*=A,I[11]*=A,I[15]*=A,this}determinant(){const A=this.elements,I=A[0],g=A[4],C=A[8],B=A[12],i=A[1],E=A[5],e=A[9],t=A[13],s=A[2],n=A[6],D=A[10],r=A[14],l=A[3],G=A[7],w=A[11],c=A[15];return l*(+B*e*n-C*t*n-B*E*D+g*t*D+C*E*r-g*e*r)+G*(+I*e*r-I*t*D+B*i*D-C*i*r+C*t*s-B*e*s)+w*(+I*t*n-I*E*r-B*i*n+g*i*r+B*E*s-g*t*s)+c*(-C*E*s-I*e*n+I*E*D+C*i*n-g*i*D+g*e*s)}transpose(){const A=this.elements;let I;return I=A[1],A[1]=A[4],A[4]=I,I=A[2],A[2]=A[8],A[8]=I,I=A[6],A[6]=A[9],A[9]=I,I=A[3],A[3]=A[12],A[12]=I,I=A[7],A[7]=A[13],A[13]=I,I=A[11],A[11]=A[14],A[14]=I,this}setPosition(A,I,g){const C=this.elements;return A.isVector3?(C[12]=A.x,C[13]=A.y,C[14]=A.z):(C[12]=A,C[13]=I,C[14]=g),this}invert(){const A=this.elements,I=A[0],g=A[1],C=A[2],B=A[3],i=A[4],E=A[5],e=A[6],t=A[7],s=A[8],n=A[9],D=A[10],r=A[11],l=A[12],G=A[13],w=A[14],c=A[15],k=n*w*t-G*D*t+G*e*r-E*w*r-n*e*c+E*D*c,y=l*D*t-s*w*t-l*e*r+i*w*r+s*e*c-i*D*c,M=s*G*t-l*n*t+l*E*r-i*G*r-s*E*c+i*n*c,N=l*n*e-s*G*e-l*E*D+i*G*D+s*E*w-i*n*w,R=I*k+g*y+C*M+B*N;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const d=1/R;return A[0]=k*d,A[1]=(G*D*B-n*w*B-G*C*r+g*w*r+n*C*c-g*D*c)*d,A[2]=(E*w*B-G*e*B+G*C*t-g*w*t-E*C*c+g*e*c)*d,A[3]=(n*e*B-E*D*B-n*C*t+g*D*t+E*C*r-g*e*r)*d,A[4]=y*d,A[5]=(s*w*B-l*D*B+l*C*r-I*w*r-s*C*c+I*D*c)*d,A[6]=(l*e*B-i*w*B-l*C*t+I*w*t+i*C*c-I*e*c)*d,A[7]=(i*D*B-s*e*B+s*C*t-I*D*t-i*C*r+I*e*r)*d,A[8]=M*d,A[9]=(l*n*B-s*G*B-l*g*r+I*G*r+s*g*c-I*n*c)*d,A[10]=(i*G*B-l*E*B+l*g*t-I*G*t-i*g*c+I*E*c)*d,A[11]=(s*E*B-i*n*B-s*g*t+I*n*t+i*g*r-I*E*r)*d,A[12]=N*d,A[13]=(s*G*C-l*n*C+l*g*D-I*G*D-s*g*w+I*n*w)*d,A[14]=(l*E*C-i*G*C-l*g*e+I*G*e+i*g*w-I*E*w)*d,A[15]=(i*n*C-s*E*C+s*g*e-I*n*e-i*g*D+I*E*D)*d,this}scale(A){const I=this.elements,g=A.x,C=A.y,B=A.z;return I[0]*=g,I[4]*=C,I[8]*=B,I[1]*=g,I[5]*=C,I[9]*=B,I[2]*=g,I[6]*=C,I[10]*=B,I[3]*=g,I[7]*=C,I[11]*=B,this}getMaxScaleOnAxis(){const A=this.elements,I=A[0]*A[0]+A[1]*A[1]+A[2]*A[2],g=A[4]*A[4]+A[5]*A[5]+A[6]*A[6],C=A[8]*A[8]+A[9]*A[9]+A[10]*A[10];return Math.sqrt(Math.max(I,g,C))}makeTranslation(A,I,g){return this.set(1,0,0,A,0,1,0,I,0,0,1,g,0,0,0,1),this}makeRotationX(A){const I=Math.cos(A),g=Math.sin(A);return this.set(1,0,0,0,0,I,-g,0,0,g,I,0,0,0,0,1),this}makeRotationY(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,0,g,0,0,1,0,0,-g,0,I,0,0,0,0,1),this}makeRotationZ(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,-g,0,0,g,I,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(A,I){const g=Math.cos(I),C=Math.sin(I),B=1-g,i=A.x,E=A.y,e=A.z,t=B*i,s=B*E;return this.set(t*i+g,t*E-C*e,t*e+C*E,0,t*E+C*e,s*E+g,s*e-C*i,0,t*e-C*E,s*e+C*i,B*e*e+g,0,0,0,0,1),this}makeScale(A,I,g){return this.set(A,0,0,0,0,I,0,0,0,0,g,0,0,0,0,1),this}makeShear(A,I,g,C,B,i){return this.set(1,g,B,0,A,1,i,0,I,C,1,0,0,0,0,1),this}compose(A,I,g){const C=this.elements,B=I._x,i=I._y,E=I._z,e=I._w,t=B+B,s=i+i,n=E+E,D=B*t,r=B*s,l=B*n,G=i*s,w=i*n,c=E*n,k=e*t,y=e*s,M=e*n,N=g.x,R=g.y,d=g.z;return C[0]=(1-(G+c))*N,C[1]=(r+M)*N,C[2]=(l-y)*N,C[3]=0,C[4]=(r-M)*R,C[5]=(1-(D+c))*R,C[6]=(w+k)*R,C[7]=0,C[8]=(l+y)*d,C[9]=(w-k)*d,C[10]=(1-(D+G))*d,C[11]=0,C[12]=A.x,C[13]=A.y,C[14]=A.z,C[15]=1,this}decompose(A,I,g){const C=this.elements;let B=RE.set(C[0],C[1],C[2]).length();const i=RE.set(C[4],C[5],C[6]).length(),E=RE.set(C[8],C[9],C[10]).length();this.determinant()<0&&(B=-B),A.x=C[12],A.y=C[13],A.z=C[14],lB.copy(this);const t=1/B,s=1/i,n=1/E;return lB.elements[0]*=t,lB.elements[1]*=t,lB.elements[2]*=t,lB.elements[4]*=s,lB.elements[5]*=s,lB.elements[6]*=s,lB.elements[8]*=n,lB.elements[9]*=n,lB.elements[10]*=n,I.setFromRotationMatrix(lB),g.x=B,g.y=i,g.z=E,this}makePerspective(A,I,g,C,B,i){const E=this.elements,e=2*B/(I-A),t=2*B/(g-C),s=(I+A)/(I-A),n=(g+C)/(g-C),D=-(i+B)/(i-B),r=-2*i*B/(i-B);return E[0]=e,E[4]=0,E[8]=s,E[12]=0,E[1]=0,E[5]=t,E[9]=n,E[13]=0,E[2]=0,E[6]=0,E[10]=D,E[14]=r,E[3]=0,E[7]=0,E[11]=-1,E[15]=0,this}makeOrthographic(A,I,g,C,B,i){const E=this.elements,e=1/(I-A),t=1/(g-C),s=1/(i-B),n=(I+A)*e,D=(g+C)*t,r=(i+B)*s;return E[0]=2*e,E[4]=0,E[8]=0,E[12]=-n,E[1]=0,E[5]=2*t,E[9]=0,E[13]=-D,E[2]=0,E[6]=0,E[10]=-2*s,E[14]=-r,E[3]=0,E[7]=0,E[11]=0,E[15]=1,this}equals(A){const I=this.elements,g=A.elements;for(let C=0;C<16;C++)if(I[C]!==g[C])return!1;return!0}fromArray(A,I=0){for(let g=0;g<16;g++)this.elements[g]=A[g+I];return this}toArray(A=[],I=0){const g=this.elements;return A[I]=g[0],A[I+1]=g[1],A[I+2]=g[2],A[I+3]=g[3],A[I+4]=g[4],A[I+5]=g[5],A[I+6]=g[6],A[I+7]=g[7],A[I+8]=g[8],A[I+9]=g[9],A[I+10]=g[10],A[I+11]=g[11],A[I+12]=g[12],A[I+13]=g[13],A[I+14]=g[14],A[I+15]=g[15],A}}const RE=new u,lB=new cI,vp=new u(0,0,0),Pp=new u(1,1,1),ZQ=new u,Ea=new u,TC=new u,iG=new cI,EG=new hg;class gE{constructor(A=0,I=0,g=0,C=gE.DEFAULT_ORDER){this.isEuler=!0,this._x=A,this._y=I,this._z=g,this._order=C}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get order(){return this._order}set order(A){this._order=A,this._onChangeCallback()}set(A,I,g,C=this._order){return this._x=A,this._y=I,this._z=g,this._order=C,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(A){return this._x=A._x,this._y=A._y,this._z=A._z,this._order=A._order,this._onChangeCallback(),this}setFromRotationMatrix(A,I=this._order,g=!0){const C=A.elements,B=C[0],i=C[4],E=C[8],e=C[1],t=C[5],s=C[9],n=C[2],D=C[6],r=C[10];switch(I){case"XYZ":this._y=Math.asin(kg(E,-1,1)),Math.abs(E)<.9999999?(this._x=Math.atan2(-s,r),this._z=Math.atan2(-i,B)):(this._x=Math.atan2(D,t),this._z=0);break;case"YXZ":this._x=Math.asin(-kg(s,-1,1)),Math.abs(s)<.9999999?(this._y=Math.atan2(E,r),this._z=Math.atan2(e,t)):(this._y=Math.atan2(-n,B),this._z=0);break;case"ZXY":this._x=Math.asin(kg(D,-1,1)),Math.abs(D)<.9999999?(this._y=Math.atan2(-n,r),this._z=Math.atan2(-i,t)):(this._y=0,this._z=Math.atan2(e,B));break;case"ZYX":this._y=Math.asin(-kg(n,-1,1)),Math.abs(n)<.9999999?(this._x=Math.atan2(D,r),this._z=Math.atan2(e,B)):(this._x=0,this._z=Math.atan2(-i,t));break;case"YZX":this._z=Math.asin(kg(e,-1,1)),Math.abs(e)<.9999999?(this._x=Math.atan2(-s,t),this._y=Math.atan2(-n,B)):(this._x=0,this._y=Math.atan2(E,r));break;case"XZY":this._z=Math.asin(-kg(i,-1,1)),Math.abs(i)<.9999999?(this._x=Math.atan2(D,t),this._y=Math.atan2(E,B)):(this._x=Math.atan2(-s,r),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+I)}return this._order=I,g===!0&&this._onChangeCallback(),this}setFromQuaternion(A,I,g){return iG.makeRotationFromQuaternion(A),this.setFromRotationMatrix(iG,I,g)}setFromVector3(A,I=this._order){return this.set(A.x,A.y,A.z,I)}reorder(A){return EG.setFromEuler(this),this.setFromQuaternion(EG,A)}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._order===this._order}fromArray(A){return this._x=A[0],this._y=A[1],this._z=A[2],A[3]!==void 0&&(this._order=A[3]),this._onChangeCallback(),this}toArray(A=[],I=0){return A[I]=this._x,A[I+1]=this._y,A[I+2]=this._z,A[I+3]=this._order,A}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gE.DEFAULT_ORDER="XYZ";class fs{constructor(){this.mask=1}set(A){this.mask=(1<<A|0)>>>0}enable(A){this.mask|=1<<A|0}enableAll(){this.mask=-1}toggle(A){this.mask^=1<<A|0}disable(A){this.mask&=~(1<<A|0)}disableAll(){this.mask=0}test(A){return(this.mask&A.mask)!==0}isEnabled(A){return(this.mask&(1<<A|0))!==0}}let Zp=0;const oG=new u,JE=new hg,cQ=new cI,oa=new u,Vo=new u,Wp=new u,_p=new hg,eG=new u(1,0,0),tG=new u(0,1,0),aG=new u(0,0,1),jp={type:"added"},sG={type:"removed"};class YI extends CQ{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zp++}),this.uuid=_C(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=YI.DEFAULT_UP.clone();const A=new u,I=new gE,g=new hg,C=new u(1,1,1);function B(){g.setFromEuler(I,!1)}function i(){I.setFromQuaternion(g,void 0,!1)}I._onChange(B),g._onChange(i),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:A},rotation:{configurable:!0,enumerable:!0,value:I},quaternion:{configurable:!0,enumerable:!0,value:g},scale:{configurable:!0,enumerable:!0,value:C},modelViewMatrix:{value:new cI},normalMatrix:{value:new mI}}),this.matrix=new cI,this.matrixWorld=new cI,this.matrixAutoUpdate=YI.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=YI.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new fs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(A){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(A),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(A){return this.quaternion.premultiply(A),this}setRotationFromAxisAngle(A,I){this.quaternion.setFromAxisAngle(A,I)}setRotationFromEuler(A){this.quaternion.setFromEuler(A,!0)}setRotationFromMatrix(A){this.quaternion.setFromRotationMatrix(A)}setRotationFromQuaternion(A){this.quaternion.copy(A)}rotateOnAxis(A,I){return JE.setFromAxisAngle(A,I),this.quaternion.multiply(JE),this}rotateOnWorldAxis(A,I){return JE.setFromAxisAngle(A,I),this.quaternion.premultiply(JE),this}rotateX(A){return this.rotateOnAxis(eG,A)}rotateY(A){return this.rotateOnAxis(tG,A)}rotateZ(A){return this.rotateOnAxis(aG,A)}translateOnAxis(A,I){return oG.copy(A).applyQuaternion(this.quaternion),this.position.add(oG.multiplyScalar(I)),this}translateX(A){return this.translateOnAxis(eG,A)}translateY(A){return this.translateOnAxis(tG,A)}translateZ(A){return this.translateOnAxis(aG,A)}localToWorld(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(this.matrixWorld)}worldToLocal(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(cQ.copy(this.matrixWorld).invert())}lookAt(A,I,g){A.isVector3?oa.copy(A):oa.set(A,I,g);const C=this.parent;this.updateWorldMatrix(!0,!1),Vo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cQ.lookAt(Vo,oa,this.up):cQ.lookAt(oa,Vo,this.up),this.quaternion.setFromRotationMatrix(cQ),C&&(cQ.extractRotation(C.matrixWorld),JE.setFromRotationMatrix(cQ),this.quaternion.premultiply(JE.invert()))}add(A){if(arguments.length>1){for(let I=0;I<arguments.length;I++)this.add(arguments[I]);return this}return A===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",A),this):(A&&A.isObject3D?(A.parent!==null&&A.parent.remove(A),A.parent=this,this.children.push(A),A.dispatchEvent(jp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",A),this)}remove(A){if(arguments.length>1){for(let g=0;g<arguments.length;g++)this.remove(arguments[g]);return this}const I=this.children.indexOf(A);return I!==-1&&(A.parent=null,this.children.splice(I,1),A.dispatchEvent(sG)),this}removeFromParent(){const A=this.parent;return A!==null&&A.remove(this),this}clear(){for(let A=0;A<this.children.length;A++){const I=this.children[A];I.parent=null,I.dispatchEvent(sG)}return this.children.length=0,this}attach(A){return this.updateWorldMatrix(!0,!1),cQ.copy(this.matrixWorld).invert(),A.parent!==null&&(A.parent.updateWorldMatrix(!0,!1),cQ.multiply(A.parent.matrixWorld)),A.applyMatrix4(cQ),this.add(A),A.updateWorldMatrix(!1,!0),this}getObjectById(A){return this.getObjectByProperty("id",A)}getObjectByName(A){return this.getObjectByProperty("name",A)}getObjectByProperty(A,I){if(this[A]===I)return this;for(let g=0,C=this.children.length;g<C;g++){const i=this.children[g].getObjectByProperty(A,I);if(i!==void 0)return i}}getObjectsByProperty(A,I){let g=[];this[A]===I&&g.push(this);for(let C=0,B=this.children.length;C<B;C++){const i=this.children[C].getObjectsByProperty(A,I);i.length>0&&(g=g.concat(i))}return g}getWorldPosition(A){return this.updateWorldMatrix(!0,!1),A.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,A,Wp),A}getWorldScale(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,_p,A),A}getWorldDirection(A){this.updateWorldMatrix(!0,!1);const I=this.matrixWorld.elements;return A.set(I[8],I[9],I[10]).normalize()}raycast(){}traverse(A){A(this);const I=this.children;for(let g=0,C=I.length;g<C;g++)I[g].traverse(A)}traverseVisible(A){if(this.visible===!1)return;A(this);const I=this.children;for(let g=0,C=I.length;g<C;g++)I[g].traverseVisible(A)}traverseAncestors(A){const I=this.parent;I!==null&&(A(I),I.traverseAncestors(A))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(A){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||A)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,A=!0);const I=this.children;for(let g=0,C=I.length;g<C;g++){const B=I[g];(B.matrixWorldAutoUpdate===!0||A===!0)&&B.updateMatrixWorld(A)}}updateWorldMatrix(A,I){const g=this.parent;if(A===!0&&g!==null&&g.matrixWorldAutoUpdate===!0&&g.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),I===!0){const C=this.children;for(let B=0,i=C.length;B<i;B++){const E=C[B];E.matrixWorldAutoUpdate===!0&&E.updateWorldMatrix(!1,!0)}}}toJSON(A){const I=A===void 0||typeof A=="string",g={};I&&(A={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},g.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const C={};C.uuid=this.uuid,C.type=this.type,this.name!==""&&(C.name=this.name),this.castShadow===!0&&(C.castShadow=!0),this.receiveShadow===!0&&(C.receiveShadow=!0),this.visible===!1&&(C.visible=!1),this.frustumCulled===!1&&(C.frustumCulled=!1),this.renderOrder!==0&&(C.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(C.userData=this.userData),C.layers=this.layers.mask,C.matrix=this.matrix.toArray(),C.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(C.matrixAutoUpdate=!1),this.isInstancedMesh&&(C.type="InstancedMesh",C.count=this.count,C.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(C.instanceColor=this.instanceColor.toJSON()));function B(E,e){return E[e.uuid]===void 0&&(E[e.uuid]=e.toJSON(A)),e.uuid}if(this.isScene)this.background&&(this.background.isColor?C.background=this.background.toJSON():this.background.isTexture&&(C.background=this.background.toJSON(A).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(C.environment=this.environment.toJSON(A).uuid);else if(this.isMesh||this.isLine||this.isPoints){C.geometry=B(A.geometries,this.geometry);const E=this.geometry.parameters;if(E!==void 0&&E.shapes!==void 0){const e=E.shapes;if(Array.isArray(e))for(let t=0,s=e.length;t<s;t++){const n=e[t];B(A.shapes,n)}else B(A.shapes,e)}}if(this.isSkinnedMesh&&(C.bindMode=this.bindMode,C.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(B(A.skeletons,this.skeleton),C.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const E=[];for(let e=0,t=this.material.length;e<t;e++)E.push(B(A.materials,this.material[e]));C.material=E}else C.material=B(A.materials,this.material);if(this.children.length>0){C.children=[];for(let E=0;E<this.children.length;E++)C.children.push(this.children[E].toJSON(A).object)}if(this.animations.length>0){C.animations=[];for(let E=0;E<this.animations.length;E++){const e=this.animations[E];C.animations.push(B(A.animations,e))}}if(I){const E=i(A.geometries),e=i(A.materials),t=i(A.textures),s=i(A.images),n=i(A.shapes),D=i(A.skeletons),r=i(A.animations),l=i(A.nodes);E.length>0&&(g.geometries=E),e.length>0&&(g.materials=e),t.length>0&&(g.textures=t),s.length>0&&(g.images=s),n.length>0&&(g.shapes=n),D.length>0&&(g.skeletons=D),r.length>0&&(g.animations=r),l.length>0&&(g.nodes=l)}return g.object=C,g;function i(E){const e=[];for(const t in E){const s=E[t];delete s.metadata,e.push(s)}return e}}clone(A){return new this.constructor().copy(this,A)}copy(A,I=!0){if(this.name=A.name,this.up.copy(A.up),this.position.copy(A.position),this.rotation.order=A.rotation.order,this.quaternion.copy(A.quaternion),this.scale.copy(A.scale),this.matrix.copy(A.matrix),this.matrixWorld.copy(A.matrixWorld),this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrixWorldNeedsUpdate=A.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=A.matrixWorldAutoUpdate,this.layers.mask=A.layers.mask,this.visible=A.visible,this.castShadow=A.castShadow,this.receiveShadow=A.receiveShadow,this.frustumCulled=A.frustumCulled,this.renderOrder=A.renderOrder,this.animations=A.animations,this.userData=JSON.parse(JSON.stringify(A.userData)),I===!0)for(let g=0;g<A.children.length;g++){const C=A.children[g];this.add(C.clone())}return this}}YI.DEFAULT_UP=new u(0,1,0);YI.DEFAULT_MATRIX_AUTO_UPDATE=!0;YI.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wB=new u,lQ=new u,ND=new u,wQ=new u,dE=new u,pE=new u,nG=new u,KD=new u,FD=new u,RD=new u;let ea=!1;class JC{constructor(A=new u,I=new u,g=new u){this.a=A,this.b=I,this.c=g}static getNormal(A,I,g,C){C.subVectors(g,I),wB.subVectors(A,I),C.cross(wB);const B=C.lengthSq();return B>0?C.multiplyScalar(1/Math.sqrt(B)):C.set(0,0,0)}static getBarycoord(A,I,g,C,B){wB.subVectors(C,I),lQ.subVectors(g,I),ND.subVectors(A,I);const i=wB.dot(wB),E=wB.dot(lQ),e=wB.dot(ND),t=lQ.dot(lQ),s=lQ.dot(ND),n=i*t-E*E;if(n===0)return B.set(-2,-1,-1);const D=1/n,r=(t*e-E*s)*D,l=(i*s-E*e)*D;return B.set(1-r-l,l,r)}static containsPoint(A,I,g,C){return this.getBarycoord(A,I,g,C,wQ),wQ.x>=0&&wQ.y>=0&&wQ.x+wQ.y<=1}static getUV(A,I,g,C,B,i,E,e){return ea===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ea=!0),this.getInterpolation(A,I,g,C,B,i,E,e)}static getInterpolation(A,I,g,C,B,i,E,e){return this.getBarycoord(A,I,g,C,wQ),e.setScalar(0),e.addScaledVector(B,wQ.x),e.addScaledVector(i,wQ.y),e.addScaledVector(E,wQ.z),e}static isFrontFacing(A,I,g,C){return wB.subVectors(g,I),lQ.subVectors(A,I),wB.cross(lQ).dot(C)<0}set(A,I,g){return this.a.copy(A),this.b.copy(I),this.c.copy(g),this}setFromPointsAndIndices(A,I,g,C){return this.a.copy(A[I]),this.b.copy(A[g]),this.c.copy(A[C]),this}setFromAttributeAndIndices(A,I,g,C){return this.a.fromBufferAttribute(A,I),this.b.fromBufferAttribute(A,g),this.c.fromBufferAttribute(A,C),this}clone(){return new this.constructor().copy(this)}copy(A){return this.a.copy(A.a),this.b.copy(A.b),this.c.copy(A.c),this}getArea(){return wB.subVectors(this.c,this.b),lQ.subVectors(this.a,this.b),wB.cross(lQ).length()*.5}getMidpoint(A){return A.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(A){return JC.getNormal(this.a,this.b,this.c,A)}getPlane(A){return A.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(A,I){return JC.getBarycoord(A,this.a,this.b,this.c,I)}getUV(A,I,g,C,B){return ea===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ea=!0),JC.getInterpolation(A,this.a,this.b,this.c,I,g,C,B)}getInterpolation(A,I,g,C,B){return JC.getInterpolation(A,this.a,this.b,this.c,I,g,C,B)}containsPoint(A){return JC.containsPoint(A,this.a,this.b,this.c)}isFrontFacing(A){return JC.isFrontFacing(this.a,this.b,this.c,A)}intersectsBox(A){return A.intersectsTriangle(this)}closestPointToPoint(A,I){const g=this.a,C=this.b,B=this.c;let i,E;dE.subVectors(C,g),pE.subVectors(B,g),KD.subVectors(A,g);const e=dE.dot(KD),t=pE.dot(KD);if(e<=0&&t<=0)return I.copy(g);FD.subVectors(A,C);const s=dE.dot(FD),n=pE.dot(FD);if(s>=0&&n<=s)return I.copy(C);const D=e*n-s*t;if(D<=0&&e>=0&&s<=0)return i=e/(e-s),I.copy(g).addScaledVector(dE,i);RD.subVectors(A,B);const r=dE.dot(RD),l=pE.dot(RD);if(l>=0&&r<=l)return I.copy(B);const G=r*t-e*l;if(G<=0&&t>=0&&l<=0)return E=t/(t-l),I.copy(g).addScaledVector(pE,E);const w=s*l-r*n;if(w<=0&&n-s>=0&&r-l>=0)return nG.subVectors(B,C),E=(n-s)/(n-s+(r-l)),I.copy(C).addScaledVector(nG,E);const c=1/(w+G+D);return i=G*c,E=D*c,I.copy(g).addScaledVector(dE,i).addScaledVector(pE,E)}equals(A){return A.a.equals(this.a)&&A.b.equals(this.b)&&A.c.equals(this.c)}}let Vp=0;class bg extends CQ{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vp++}),this.uuid=_C(),this.name="",this.type="Material",this.blending=vi,this.side=XB,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Gh,this.blendDst=Sh,this.blendEquation=Li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ck,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Va,this.stencilZFail=Va,this.stencilZPass=Va,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(A){this._alphaTest>0!=A>0&&this.version++,this._alphaTest=A}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(A){if(A!==void 0)for(const I in A){const g=A[I];if(g===void 0){console.warn(`THREE.Material: parameter '${I}' has value of undefined.`);continue}const C=this[I];if(C===void 0){console.warn(`THREE.Material: '${I}' is not a property of THREE.${this.type}.`);continue}C&&C.isColor?C.set(g):C&&C.isVector3&&g&&g.isVector3?C.copy(g):this[I]=g}}toJSON(A){const I=A===void 0||typeof A=="string";I&&(A={textures:{},images:{}});const g={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};g.uuid=this.uuid,g.type=this.type,this.name!==""&&(g.name=this.name),this.color&&this.color.isColor&&(g.color=this.color.getHex()),this.roughness!==void 0&&(g.roughness=this.roughness),this.metalness!==void 0&&(g.metalness=this.metalness),this.sheen!==void 0&&(g.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(g.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(g.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(g.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(g.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(g.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(g.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(g.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(g.shininess=this.shininess),this.clearcoat!==void 0&&(g.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(g.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(g.clearcoatMap=this.clearcoatMap.toJSON(A).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(g.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(A).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(g.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(A).uuid,g.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(g.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(g.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(g.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(g.iridescenceMap=this.iridescenceMap.toJSON(A).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(g.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(A).uuid),this.map&&this.map.isTexture&&(g.map=this.map.toJSON(A).uuid),this.matcap&&this.matcap.isTexture&&(g.matcap=this.matcap.toJSON(A).uuid),this.alphaMap&&this.alphaMap.isTexture&&(g.alphaMap=this.alphaMap.toJSON(A).uuid),this.lightMap&&this.lightMap.isTexture&&(g.lightMap=this.lightMap.toJSON(A).uuid,g.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(g.aoMap=this.aoMap.toJSON(A).uuid,g.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(g.bumpMap=this.bumpMap.toJSON(A).uuid,g.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(g.normalMap=this.normalMap.toJSON(A).uuid,g.normalMapType=this.normalMapType,g.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(g.displacementMap=this.displacementMap.toJSON(A).uuid,g.displacementScale=this.displacementScale,g.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(g.roughnessMap=this.roughnessMap.toJSON(A).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(g.metalnessMap=this.metalnessMap.toJSON(A).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(g.emissiveMap=this.emissiveMap.toJSON(A).uuid),this.specularMap&&this.specularMap.isTexture&&(g.specularMap=this.specularMap.toJSON(A).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(g.specularIntensityMap=this.specularIntensityMap.toJSON(A).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(g.specularColorMap=this.specularColorMap.toJSON(A).uuid),this.envMap&&this.envMap.isTexture&&(g.envMap=this.envMap.toJSON(A).uuid,this.combine!==void 0&&(g.combine=this.combine)),this.envMapIntensity!==void 0&&(g.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(g.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(g.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(g.gradientMap=this.gradientMap.toJSON(A).uuid),this.transmission!==void 0&&(g.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(g.transmissionMap=this.transmissionMap.toJSON(A).uuid),this.thickness!==void 0&&(g.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(g.thicknessMap=this.thicknessMap.toJSON(A).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(g.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(g.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(g.size=this.size),this.shadowSide!==null&&(g.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(g.sizeAttenuation=this.sizeAttenuation),this.blending!==vi&&(g.blending=this.blending),this.side!==XB&&(g.side=this.side),this.vertexColors&&(g.vertexColors=!0),this.opacity<1&&(g.opacity=this.opacity),this.transparent===!0&&(g.transparent=this.transparent),g.depthFunc=this.depthFunc,g.depthTest=this.depthTest,g.depthWrite=this.depthWrite,g.colorWrite=this.colorWrite,g.stencilWrite=this.stencilWrite,g.stencilWriteMask=this.stencilWriteMask,g.stencilFunc=this.stencilFunc,g.stencilRef=this.stencilRef,g.stencilFuncMask=this.stencilFuncMask,g.stencilFail=this.stencilFail,g.stencilZFail=this.stencilZFail,g.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(g.rotation=this.rotation),this.polygonOffset===!0&&(g.polygonOffset=!0),this.polygonOffsetFactor!==0&&(g.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(g.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(g.linewidth=this.linewidth),this.dashSize!==void 0&&(g.dashSize=this.dashSize),this.gapSize!==void 0&&(g.gapSize=this.gapSize),this.scale!==void 0&&(g.scale=this.scale),this.dithering===!0&&(g.dithering=!0),this.alphaTest>0&&(g.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(g.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(g.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(g.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(g.wireframe=this.wireframe),this.wireframeLinewidth>1&&(g.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(g.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(g.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(g.flatShading=this.flatShading),this.visible===!1&&(g.visible=!1),this.toneMapped===!1&&(g.toneMapped=!1),this.fog===!1&&(g.fog=!1),Object.keys(this.userData).length>0&&(g.userData=this.userData);function C(B){const i=[];for(const E in B){const e=B[E];delete e.metadata,i.push(e)}return i}if(I){const B=C(A.textures),i=C(A.images);B.length>0&&(g.textures=B),i.length>0&&(g.images=i)}return g}clone(){return new this.constructor().copy(this)}copy(A){this.name=A.name,this.blending=A.blending,this.side=A.side,this.vertexColors=A.vertexColors,this.opacity=A.opacity,this.transparent=A.transparent,this.blendSrc=A.blendSrc,this.blendDst=A.blendDst,this.blendEquation=A.blendEquation,this.blendSrcAlpha=A.blendSrcAlpha,this.blendDstAlpha=A.blendDstAlpha,this.blendEquationAlpha=A.blendEquationAlpha,this.depthFunc=A.depthFunc,this.depthTest=A.depthTest,this.depthWrite=A.depthWrite,this.stencilWriteMask=A.stencilWriteMask,this.stencilFunc=A.stencilFunc,this.stencilRef=A.stencilRef,this.stencilFuncMask=A.stencilFuncMask,this.stencilFail=A.stencilFail,this.stencilZFail=A.stencilZFail,this.stencilZPass=A.stencilZPass,this.stencilWrite=A.stencilWrite;const I=A.clippingPlanes;let g=null;if(I!==null){const C=I.length;g=new Array(C);for(let B=0;B!==C;++B)g[B]=I[B].clone()}return this.clippingPlanes=g,this.clipIntersection=A.clipIntersection,this.clipShadows=A.clipShadows,this.shadowSide=A.shadowSide,this.colorWrite=A.colorWrite,this.precision=A.precision,this.polygonOffset=A.polygonOffset,this.polygonOffsetFactor=A.polygonOffsetFactor,this.polygonOffsetUnits=A.polygonOffsetUnits,this.dithering=A.dithering,this.alphaTest=A.alphaTest,this.alphaToCoverage=A.alphaToCoverage,this.premultipliedAlpha=A.premultipliedAlpha,this.forceSinglePass=A.forceSinglePass,this.visible=A.visible,this.toneMapped=A.toneMapped,this.userData=JSON.parse(JSON.stringify(A.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(A){A===!0&&this.version++}}const kk={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},GB={h:0,s:0,l:0},ta={h:0,s:0,l:0};function JD(Q,A,I){return I<0&&(I+=1),I>1&&(I-=1),I<1/6?Q+(A-Q)*6*I:I<1/2?A:I<2/3?Q+(A-Q)*6*(2/3-I):Q}let TA=class{constructor(A,I,g){return this.isColor=!0,this.r=1,this.g=1,this.b=1,I===void 0&&g===void 0?this.set(A):this.setRGB(A,I,g)}set(A){return A&&A.isColor?this.copy(A):typeof A=="number"?this.setHex(A):typeof A=="string"&&this.setStyle(A),this}setScalar(A){return this.r=A,this.g=A,this.b=A,this}setHex(A,I=QI){return A=Math.floor(A),this.r=(A>>16&255)/255,this.g=(A>>8&255)/255,this.b=(A&255)/255,OC.toWorkingColorSpace(this,I),this}setRGB(A,I,g,C=OC.workingColorSpace){return this.r=A,this.g=I,this.b=g,OC.toWorkingColorSpace(this,C),this}setHSL(A,I,g,C=OC.workingColorSpace){if(A=Fh(A,1),I=kg(I,0,1),g=kg(g,0,1),I===0)this.r=this.g=this.b=g;else{const B=g<=.5?g*(1+I):g+I-g*I,i=2*g-B;this.r=JD(i,B,A+1/3),this.g=JD(i,B,A),this.b=JD(i,B,A-1/3)}return OC.toWorkingColorSpace(this,C),this}setStyle(A,I=QI){function g(B){B!==void 0&&parseFloat(B)<1&&console.warn("THREE.Color: Alpha component of "+A+" will be ignored.")}let C;if(C=/^(\w+)\(([^\)]*)\)/.exec(A)){let B;const i=C[1],E=C[2];switch(i){case"rgb":case"rgba":if(B=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(E))return g(B[4]),this.setRGB(Math.min(255,parseInt(B[1],10))/255,Math.min(255,parseInt(B[2],10))/255,Math.min(255,parseInt(B[3],10))/255,I);if(B=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(E))return g(B[4]),this.setRGB(Math.min(100,parseInt(B[1],10))/100,Math.min(100,parseInt(B[2],10))/100,Math.min(100,parseInt(B[3],10))/100,I);break;case"hsl":case"hsla":if(B=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(E))return g(B[4]),this.setHSL(parseFloat(B[1])/360,parseFloat(B[2])/100,parseFloat(B[3])/100,I);break;default:console.warn("THREE.Color: Unknown color model "+A)}}else if(C=/^\#([A-Fa-f\d]+)$/.exec(A)){const B=C[1],i=B.length;if(i===3)return this.setRGB(parseInt(B.charAt(0),16)/15,parseInt(B.charAt(1),16)/15,parseInt(B.charAt(2),16)/15,I);if(i===6)return this.setHex(parseInt(B,16),I);console.warn("THREE.Color: Invalid hex color "+A)}else if(A&&A.length>0)return this.setColorName(A,I);return this}setColorName(A,I=QI){const g=kk[A.toLowerCase()];return g!==void 0?this.setHex(g,I):console.warn("THREE.Color: Unknown color "+A),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(A){return this.r=A.r,this.g=A.g,this.b=A.b,this}copySRGBToLinear(A){return this.r=go(A.r),this.g=go(A.g),this.b=go(A.b),this}copyLinearToSRGB(A){return this.r=lD(A.r),this.g=lD(A.g),this.b=lD(A.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(A=QI){return OC.fromWorkingColorSpace(QC.copy(this),A),Math.round(kg(QC.r*255,0,255))*65536+Math.round(kg(QC.g*255,0,255))*256+Math.round(kg(QC.b*255,0,255))}getHexString(A=QI){return("000000"+this.getHex(A).toString(16)).slice(-6)}getHSL(A,I=OC.workingColorSpace){OC.fromWorkingColorSpace(QC.copy(this),I);const g=QC.r,C=QC.g,B=QC.b,i=Math.max(g,C,B),E=Math.min(g,C,B);let e,t;const s=(E+i)/2;if(E===i)e=0,t=0;else{const n=i-E;switch(t=s<=.5?n/(i+E):n/(2-i-E),i){case g:e=(C-B)/n+(C<B?6:0);break;case C:e=(B-g)/n+2;break;case B:e=(g-C)/n+4;break}e/=6}return A.h=e,A.s=t,A.l=s,A}getRGB(A,I=OC.workingColorSpace){return OC.fromWorkingColorSpace(QC.copy(this),I),A.r=QC.r,A.g=QC.g,A.b=QC.b,A}getStyle(A=QI){OC.fromWorkingColorSpace(QC.copy(this),A);const I=QC.r,g=QC.g,C=QC.b;return A!==QI?`color(${A} ${I.toFixed(3)} ${g.toFixed(3)} ${C.toFixed(3)})`:`rgb(${Math.round(I*255)},${Math.round(g*255)},${Math.round(C*255)})`}offsetHSL(A,I,g){return this.getHSL(GB),GB.h+=A,GB.s+=I,GB.l+=g,this.setHSL(GB.h,GB.s,GB.l),this}add(A){return this.r+=A.r,this.g+=A.g,this.b+=A.b,this}addColors(A,I){return this.r=A.r+I.r,this.g=A.g+I.g,this.b=A.b+I.b,this}addScalar(A){return this.r+=A,this.g+=A,this.b+=A,this}sub(A){return this.r=Math.max(0,this.r-A.r),this.g=Math.max(0,this.g-A.g),this.b=Math.max(0,this.b-A.b),this}multiply(A){return this.r*=A.r,this.g*=A.g,this.b*=A.b,this}multiplyScalar(A){return this.r*=A,this.g*=A,this.b*=A,this}lerp(A,I){return this.r+=(A.r-this.r)*I,this.g+=(A.g-this.g)*I,this.b+=(A.b-this.b)*I,this}lerpColors(A,I,g){return this.r=A.r+(I.r-A.r)*g,this.g=A.g+(I.g-A.g)*g,this.b=A.b+(I.b-A.b)*g,this}lerpHSL(A,I){this.getHSL(GB),A.getHSL(ta);const g=re(GB.h,ta.h,I),C=re(GB.s,ta.s,I),B=re(GB.l,ta.l,I);return this.setHSL(g,C,B),this}setFromVector3(A){return this.r=A.x,this.g=A.y,this.b=A.z,this}applyMatrix3(A){const I=this.r,g=this.g,C=this.b,B=A.elements;return this.r=B[0]*I+B[3]*g+B[6]*C,this.g=B[1]*I+B[4]*g+B[7]*C,this.b=B[2]*I+B[5]*g+B[8]*C,this}equals(A){return A.r===this.r&&A.g===this.g&&A.b===this.b}fromArray(A,I=0){return this.r=A[I],this.g=A[I+1],this.b=A[I+2],this}toArray(A=[],I=0){return A[I]=this.r,A[I+1]=this.g,A[I+2]=this.b,A}fromBufferAttribute(A,I){return this.r=A.getX(I),this.g=A.getY(I),this.b=A.getZ(I),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const QC=new TA;TA.NAMES=kk;class WC extends bg{constructor(A){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new TA(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=xe,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.map=A.map,this.lightMap=A.lightMap,this.lightMapIntensity=A.lightMapIntensity,this.aoMap=A.aoMap,this.aoMapIntensity=A.aoMapIntensity,this.specularMap=A.specularMap,this.alphaMap=A.alphaMap,this.envMap=A.envMap,this.combine=A.combine,this.reflectivity=A.reflectivity,this.refractionRatio=A.refractionRatio,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.wireframeLinecap=A.wireframeLinecap,this.wireframeLinejoin=A.wireframeLinejoin,this.fog=A.fog,this}}const MQ=Xp();function Xp(){const Q=new ArrayBuffer(4),A=new Float32Array(Q),I=new Uint32Array(Q),g=new Uint32Array(512),C=new Uint32Array(512);for(let e=0;e<256;++e){const t=e-127;t<-27?(g[e]=0,g[e|256]=32768,C[e]=24,C[e|256]=24):t<-14?(g[e]=1024>>-t-14,g[e|256]=1024>>-t-14|32768,C[e]=-t-1,C[e|256]=-t-1):t<=15?(g[e]=t+15<<10,g[e|256]=t+15<<10|32768,C[e]=13,C[e|256]=13):t<128?(g[e]=31744,g[e|256]=64512,C[e]=24,C[e|256]=24):(g[e]=31744,g[e|256]=64512,C[e]=13,C[e|256]=13)}const B=new Uint32Array(2048),i=new Uint32Array(64),E=new Uint32Array(64);for(let e=1;e<1024;++e){let t=e<<13,s=0;for(;!(t&8388608);)t<<=1,s-=8388608;t&=-8388609,s+=947912704,B[e]=t|s}for(let e=1024;e<2048;++e)B[e]=939524096+(e-1024<<13);for(let e=1;e<31;++e)i[e]=e<<23;i[31]=1199570944,i[32]=2147483648;for(let e=33;e<63;++e)i[e]=2147483648+(e-32<<23);i[63]=3347054592;for(let e=1;e<64;++e)e!==32&&(E[e]=1024);return{floatView:A,uint32View:I,baseTable:g,shiftTable:C,mantissaTable:B,exponentTable:i,offsetTable:E}}function RC(Q){Math.abs(Q)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),Q=kg(Q,-65504,65504),MQ.floatView[0]=Q;const A=MQ.uint32View[0],I=A>>23&511;return MQ.baseTable[I]+((A&8388607)>>MQ.shiftTable[I])}function te(Q){const A=Q>>10;return MQ.uint32View[0]=MQ.mantissaTable[MQ.offsetTable[A]+(Q&1023)]+MQ.exponentTable[A],MQ.floatView[0]}const zp={toHalfFloat:RC,fromHalfFloat:te},qg=new u,aa=new cA;class PI{constructor(A,I,g=!1){if(Array.isArray(A))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=A,this.itemSize=I,this.count=A!==void 0?A.length/I:0,this.normalized=g,this.usage=Ne,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(A){A===!0&&this.version++}setUsage(A){return this.usage=A,this}copy(A){return this.name=A.name,this.array=new A.array.constructor(A.array),this.itemSize=A.itemSize,this.count=A.count,this.normalized=A.normalized,this.usage=A.usage,this}copyAt(A,I,g){A*=this.itemSize,g*=I.itemSize;for(let C=0,B=this.itemSize;C<B;C++)this.array[A+C]=I.array[g+C];return this}copyArray(A){return this.array.set(A),this}applyMatrix3(A){if(this.itemSize===2)for(let I=0,g=this.count;I<g;I++)aa.fromBufferAttribute(this,I),aa.applyMatrix3(A),this.setXY(I,aa.x,aa.y);else if(this.itemSize===3)for(let I=0,g=this.count;I<g;I++)qg.fromBufferAttribute(this,I),qg.applyMatrix3(A),this.setXYZ(I,qg.x,qg.y,qg.z);return this}applyMatrix4(A){for(let I=0,g=this.count;I<g;I++)qg.fromBufferAttribute(this,I),qg.applyMatrix4(A),this.setXYZ(I,qg.x,qg.y,qg.z);return this}applyNormalMatrix(A){for(let I=0,g=this.count;I<g;I++)qg.fromBufferAttribute(this,I),qg.applyNormalMatrix(A),this.setXYZ(I,qg.x,qg.y,qg.z);return this}transformDirection(A){for(let I=0,g=this.count;I<g;I++)qg.fromBufferAttribute(this,I),qg.transformDirection(A),this.setXYZ(I,qg.x,qg.y,qg.z);return this}set(A,I=0){return this.array.set(A,I),this}getX(A){let I=this.array[A*this.itemSize];return this.normalized&&(I=ZC(I,this.array)),I}setX(A,I){return this.normalized&&(I=NI(I,this.array)),this.array[A*this.itemSize]=I,this}getY(A){let I=this.array[A*this.itemSize+1];return this.normalized&&(I=ZC(I,this.array)),I}setY(A,I){return this.normalized&&(I=NI(I,this.array)),this.array[A*this.itemSize+1]=I,this}getZ(A){let I=this.array[A*this.itemSize+2];return this.normalized&&(I=ZC(I,this.array)),I}setZ(A,I){return this.normalized&&(I=NI(I,this.array)),this.array[A*this.itemSize+2]=I,this}getW(A){let I=this.array[A*this.itemSize+3];return this.normalized&&(I=ZC(I,this.array)),I}setW(A,I){return this.normalized&&(I=NI(I,this.array)),this.array[A*this.itemSize+3]=I,this}setXY(A,I,g){return A*=this.itemSize,this.normalized&&(I=NI(I,this.array),g=NI(g,this.array)),this.array[A+0]=I,this.array[A+1]=g,this}setXYZ(A,I,g,C){return A*=this.itemSize,this.normalized&&(I=NI(I,this.array),g=NI(g,this.array),C=NI(C,this.array)),this.array[A+0]=I,this.array[A+1]=g,this.array[A+2]=C,this}setXYZW(A,I,g,C,B){return A*=this.itemSize,this.normalized&&(I=NI(I,this.array),g=NI(g,this.array),C=NI(C,this.array),B=NI(B,this.array)),this.array[A+0]=I,this.array[A+1]=g,this.array[A+2]=C,this.array[A+3]=B,this}onUpload(A){return this.onUploadCallback=A,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const A={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(A.name=this.name),this.usage!==Ne&&(A.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(A.updateRange=this.updateRange),A}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class $p extends PI{constructor(A,I,g){super(new Int8Array(A),I,g)}}class Af extends PI{constructor(A,I,g){super(new Uint8Array(A),I,g)}}class If extends PI{constructor(A,I,g){super(new Uint8ClampedArray(A),I,g)}}class gf extends PI{constructor(A,I,g){super(new Int16Array(A),I,g)}}class Jh extends PI{constructor(A,I,g){super(new Uint16Array(A),I,g)}}class Cf extends PI{constructor(A,I,g){super(new Int32Array(A),I,g)}}class dh extends PI{constructor(A,I,g){super(new Uint32Array(A),I,g)}}class Bf extends PI{constructor(A,I,g){super(new Uint16Array(A),I,g),this.isFloat16BufferAttribute=!0}getX(A){let I=te(this.array[A*this.itemSize]);return this.normalized&&(I=ZC(I,this.array)),I}setX(A,I){return this.normalized&&(I=NI(I,this.array)),this.array[A*this.itemSize]=RC(I),this}getY(A){let I=te(this.array[A*this.itemSize+1]);return this.normalized&&(I=ZC(I,this.array)),I}setY(A,I){return this.normalized&&(I=NI(I,this.array)),this.array[A*this.itemSize+1]=RC(I),this}getZ(A){let I=te(this.array[A*this.itemSize+2]);return this.normalized&&(I=ZC(I,this.array)),I}setZ(A,I){return this.normalized&&(I=NI(I,this.array)),this.array[A*this.itemSize+2]=RC(I),this}getW(A){let I=te(this.array[A*this.itemSize+3]);return this.normalized&&(I=ZC(I,this.array)),I}setW(A,I){return this.normalized&&(I=NI(I,this.array)),this.array[A*this.itemSize+3]=RC(I),this}setXY(A,I,g){return A*=this.itemSize,this.normalized&&(I=NI(I,this.array),g=NI(g,this.array)),this.array[A+0]=RC(I),this.array[A+1]=RC(g),this}setXYZ(A,I,g,C){return A*=this.itemSize,this.normalized&&(I=NI(I,this.array),g=NI(g,this.array),C=NI(C,this.array)),this.array[A+0]=RC(I),this.array[A+1]=RC(g),this.array[A+2]=RC(C),this}setXYZW(A,I,g,C,B){return A*=this.itemSize,this.normalized&&(I=NI(I,this.array),g=NI(g,this.array),C=NI(C,this.array),B=NI(B,this.array)),this.array[A+0]=RC(I),this.array[A+1]=RC(g),this.array[A+2]=RC(C),this.array[A+3]=RC(B),this}}class jA extends PI{constructor(A,I,g){super(new Float32Array(A),I,g)}}class Qf extends PI{constructor(A,I,g){super(new Float64Array(A),I,g)}}let Ef=0;const QB=new cI,dD=new YI,fE=new u,xC=new dB,Xo=new dB,Zg=new u;class kI extends CQ{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ef++}),this.uuid=_C(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(A){return Array.isArray(A)?this.index=new(yk(A)?dh:Jh)(A,1):this.index=A,this}getAttribute(A){return this.attributes[A]}setAttribute(A,I){return this.attributes[A]=I,this}deleteAttribute(A){return delete this.attributes[A],this}hasAttribute(A){return this.attributes[A]!==void 0}addGroup(A,I,g=0){this.groups.push({start:A,count:I,materialIndex:g})}clearGroups(){this.groups=[]}setDrawRange(A,I){this.drawRange.start=A,this.drawRange.count=I}applyMatrix4(A){const I=this.attributes.position;I!==void 0&&(I.applyMatrix4(A),I.needsUpdate=!0);const g=this.attributes.normal;if(g!==void 0){const B=new mI().getNormalMatrix(A);g.applyNormalMatrix(B),g.needsUpdate=!0}const C=this.attributes.tangent;return C!==void 0&&(C.transformDirection(A),C.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(A){return QB.makeRotationFromQuaternion(A),this.applyMatrix4(QB),this}rotateX(A){return QB.makeRotationX(A),this.applyMatrix4(QB),this}rotateY(A){return QB.makeRotationY(A),this.applyMatrix4(QB),this}rotateZ(A){return QB.makeRotationZ(A),this.applyMatrix4(QB),this}translate(A,I,g){return QB.makeTranslation(A,I,g),this.applyMatrix4(QB),this}scale(A,I,g){return QB.makeScale(A,I,g),this.applyMatrix4(QB),this}lookAt(A){return dD.lookAt(A),dD.updateMatrix(),this.applyMatrix4(dD.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fE).negate(),this.translate(fE.x,fE.y,fE.z),this}setFromPoints(A){const I=[];for(let g=0,C=A.length;g<C;g++){const B=A[g];I.push(B.x,B.y,B.z||0)}return this.setAttribute("position",new jA(I,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dB);const A=this.attributes.position,I=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new u(-1/0,-1/0,-1/0),new u(1/0,1/0,1/0));return}if(A!==void 0){if(this.boundingBox.setFromBufferAttribute(A),I)for(let g=0,C=I.length;g<C;g++){const B=I[g];xC.setFromBufferAttribute(B),this.morphTargetsRelative?(Zg.addVectors(this.boundingBox.min,xC.min),this.boundingBox.expandByPoint(Zg),Zg.addVectors(this.boundingBox.max,xC.max),this.boundingBox.expandByPoint(Zg)):(this.boundingBox.expandByPoint(xC.min),this.boundingBox.expandByPoint(xC.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pB);const A=this.attributes.position,I=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new u,1/0);return}if(A){const g=this.boundingSphere.center;if(xC.setFromBufferAttribute(A),I)for(let B=0,i=I.length;B<i;B++){const E=I[B];Xo.setFromBufferAttribute(E),this.morphTargetsRelative?(Zg.addVectors(xC.min,Xo.min),xC.expandByPoint(Zg),Zg.addVectors(xC.max,Xo.max),xC.expandByPoint(Zg)):(xC.expandByPoint(Xo.min),xC.expandByPoint(Xo.max))}xC.getCenter(g);let C=0;for(let B=0,i=A.count;B<i;B++)Zg.fromBufferAttribute(A,B),C=Math.max(C,g.distanceToSquared(Zg));if(I)for(let B=0,i=I.length;B<i;B++){const E=I[B],e=this.morphTargetsRelative;for(let t=0,s=E.count;t<s;t++)Zg.fromBufferAttribute(E,t),e&&(fE.fromBufferAttribute(A,t),Zg.add(fE)),C=Math.max(C,g.distanceToSquared(Zg))}this.boundingSphere.radius=Math.sqrt(C),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const A=this.index,I=this.attributes;if(A===null||I.position===void 0||I.normal===void 0||I.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const g=A.array,C=I.position.array,B=I.normal.array,i=I.uv.array,E=C.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new PI(new Float32Array(4*E),4));const e=this.getAttribute("tangent").array,t=[],s=[];for(let q=0;q<E;q++)t[q]=new u,s[q]=new u;const n=new u,D=new u,r=new u,l=new cA,G=new cA,w=new cA,c=new u,k=new u;function y(q,W,$){n.fromArray(C,q*3),D.fromArray(C,W*3),r.fromArray(C,$*3),l.fromArray(i,q*2),G.fromArray(i,W*2),w.fromArray(i,$*2),D.sub(n),r.sub(n),G.sub(l),w.sub(l);const H=1/(G.x*w.y-w.x*G.y);isFinite(H)&&(c.copy(D).multiplyScalar(w.y).addScaledVector(r,-G.y).multiplyScalar(H),k.copy(r).multiplyScalar(G.x).addScaledVector(D,-w.x).multiplyScalar(H),t[q].add(c),t[W].add(c),t[$].add(c),s[q].add(k),s[W].add(k),s[$].add(k))}let M=this.groups;M.length===0&&(M=[{start:0,count:g.length}]);for(let q=0,W=M.length;q<W;++q){const $=M[q],H=$.start,x=$.count;for(let IA=H,eA=H+x;IA<eA;IA+=3)y(g[IA+0],g[IA+1],g[IA+2])}const N=new u,R=new u,d=new u,L=new u;function F(q){d.fromArray(B,q*3),L.copy(d);const W=t[q];N.copy(W),N.sub(d.multiplyScalar(d.dot(W))).normalize(),R.crossVectors(L,W);const H=R.dot(s[q])<0?-1:1;e[q*4]=N.x,e[q*4+1]=N.y,e[q*4+2]=N.z,e[q*4+3]=H}for(let q=0,W=M.length;q<W;++q){const $=M[q],H=$.start,x=$.count;for(let IA=H,eA=H+x;IA<eA;IA+=3)F(g[IA+0]),F(g[IA+1]),F(g[IA+2])}}computeVertexNormals(){const A=this.index,I=this.getAttribute("position");if(I!==void 0){let g=this.getAttribute("normal");if(g===void 0)g=new PI(new Float32Array(I.count*3),3),this.setAttribute("normal",g);else for(let D=0,r=g.count;D<r;D++)g.setXYZ(D,0,0,0);const C=new u,B=new u,i=new u,E=new u,e=new u,t=new u,s=new u,n=new u;if(A)for(let D=0,r=A.count;D<r;D+=3){const l=A.getX(D+0),G=A.getX(D+1),w=A.getX(D+2);C.fromBufferAttribute(I,l),B.fromBufferAttribute(I,G),i.fromBufferAttribute(I,w),s.subVectors(i,B),n.subVectors(C,B),s.cross(n),E.fromBufferAttribute(g,l),e.fromBufferAttribute(g,G),t.fromBufferAttribute(g,w),E.add(s),e.add(s),t.add(s),g.setXYZ(l,E.x,E.y,E.z),g.setXYZ(G,e.x,e.y,e.z),g.setXYZ(w,t.x,t.y,t.z)}else for(let D=0,r=I.count;D<r;D+=3)C.fromBufferAttribute(I,D+0),B.fromBufferAttribute(I,D+1),i.fromBufferAttribute(I,D+2),s.subVectors(i,B),n.subVectors(C,B),s.cross(n),g.setXYZ(D+0,s.x,s.y,s.z),g.setXYZ(D+1,s.x,s.y,s.z),g.setXYZ(D+2,s.x,s.y,s.z);this.normalizeNormals(),g.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const A=this.attributes.normal;for(let I=0,g=A.count;I<g;I++)Zg.fromBufferAttribute(A,I),Zg.normalize(),A.setXYZ(I,Zg.x,Zg.y,Zg.z)}toNonIndexed(){function A(E,e){const t=E.array,s=E.itemSize,n=E.normalized,D=new t.constructor(e.length*s);let r=0,l=0;for(let G=0,w=e.length;G<w;G++){E.isInterleavedBufferAttribute?r=e[G]*E.data.stride+E.offset:r=e[G]*s;for(let c=0;c<s;c++)D[l++]=t[r++]}return new PI(D,s,n)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const I=new kI,g=this.index.array,C=this.attributes;for(const E in C){const e=C[E],t=A(e,g);I.setAttribute(E,t)}const B=this.morphAttributes;for(const E in B){const e=[],t=B[E];for(let s=0,n=t.length;s<n;s++){const D=t[s],r=A(D,g);e.push(r)}I.morphAttributes[E]=e}I.morphTargetsRelative=this.morphTargetsRelative;const i=this.groups;for(let E=0,e=i.length;E<e;E++){const t=i[E];I.addGroup(t.start,t.count,t.materialIndex)}return I}toJSON(){const A={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(A.uuid=this.uuid,A.type=this.type,this.name!==""&&(A.name=this.name),Object.keys(this.userData).length>0&&(A.userData=this.userData),this.parameters!==void 0){const e=this.parameters;for(const t in e)e[t]!==void 0&&(A[t]=e[t]);return A}A.data={attributes:{}};const I=this.index;I!==null&&(A.data.index={type:I.array.constructor.name,array:Array.prototype.slice.call(I.array)});const g=this.attributes;for(const e in g){const t=g[e];A.data.attributes[e]=t.toJSON(A.data)}const C={};let B=!1;for(const e in this.morphAttributes){const t=this.morphAttributes[e],s=[];for(let n=0,D=t.length;n<D;n++){const r=t[n];s.push(r.toJSON(A.data))}s.length>0&&(C[e]=s,B=!0)}B&&(A.data.morphAttributes=C,A.data.morphTargetsRelative=this.morphTargetsRelative);const i=this.groups;i.length>0&&(A.data.groups=JSON.parse(JSON.stringify(i)));const E=this.boundingSphere;return E!==null&&(A.data.boundingSphere={center:E.center.toArray(),radius:E.radius}),A}clone(){return new this.constructor().copy(this)}copy(A){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const I={};this.name=A.name;const g=A.index;g!==null&&this.setIndex(g.clone(I));const C=A.attributes;for(const t in C){const s=C[t];this.setAttribute(t,s.clone(I))}const B=A.morphAttributes;for(const t in B){const s=[],n=B[t];for(let D=0,r=n.length;D<r;D++)s.push(n[D].clone(I));this.morphAttributes[t]=s}this.morphTargetsRelative=A.morphTargetsRelative;const i=A.groups;for(let t=0,s=i.length;t<s;t++){const n=i[t];this.addGroup(n.start,n.count,n.materialIndex)}const E=A.boundingBox;E!==null&&(this.boundingBox=E.clone());const e=A.boundingSphere;return e!==null&&(this.boundingSphere=e.clone()),this.drawRange.start=A.drawRange.start,this.drawRange.count=A.drawRange.count,this.userData=A.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const DG=new cI,bB=new Oe,sa=new pB,rG=new u,qE=new u,uE=new u,LE=new u,pD=new u,na=new u,Da=new cA,ra=new cA,ha=new cA,hG=new u,cG=new u,lG=new u,ca=new u,la=new u;class mg extends YI{constructor(A=new kI,I=new WC){super(),this.isMesh=!0,this.type="Mesh",this.geometry=A,this.material=I,this.updateMorphTargets()}copy(A,I){return super.copy(A,I),A.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=A.morphTargetInfluences.slice()),A.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},A.morphTargetDictionary)),this.material=A.material,this.geometry=A.geometry,this}updateMorphTargets(){const I=this.geometry.morphAttributes,g=Object.keys(I);if(g.length>0){const C=I[g[0]];if(C!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let B=0,i=C.length;B<i;B++){const E=C[B].name||String(B);this.morphTargetInfluences.push(0),this.morphTargetDictionary[E]=B}}}}getVertexPosition(A,I){const g=this.geometry,C=g.attributes.position,B=g.morphAttributes.position,i=g.morphTargetsRelative;I.fromBufferAttribute(C,A);const E=this.morphTargetInfluences;if(B&&E){na.set(0,0,0);for(let e=0,t=B.length;e<t;e++){const s=E[e],n=B[e];s!==0&&(pD.fromBufferAttribute(n,A),i?na.addScaledVector(pD,s):na.addScaledVector(pD.sub(I),s))}I.add(na)}return I}raycast(A,I){const g=this.geometry,C=this.material,B=this.matrixWorld;C!==void 0&&(g.boundingSphere===null&&g.computeBoundingSphere(),sa.copy(g.boundingSphere),sa.applyMatrix4(B),bB.copy(A.ray).recast(A.near),!(sa.containsPoint(bB.origin)===!1&&(bB.intersectSphere(sa,rG)===null||bB.origin.distanceToSquared(rG)>(A.far-A.near)**2))&&(DG.copy(B).invert(),bB.copy(A.ray).applyMatrix4(DG),!(g.boundingBox!==null&&bB.intersectsBox(g.boundingBox)===!1)&&this._computeIntersections(A,I)))}_computeIntersections(A,I){let g;const C=this.geometry,B=this.material,i=C.index,E=C.attributes.position,e=C.attributes.uv,t=C.attributes.uv1,s=C.attributes.normal,n=C.groups,D=C.drawRange;if(i!==null)if(Array.isArray(B))for(let r=0,l=n.length;r<l;r++){const G=n[r],w=B[G.materialIndex],c=Math.max(G.start,D.start),k=Math.min(i.count,Math.min(G.start+G.count,D.start+D.count));for(let y=c,M=k;y<M;y+=3){const N=i.getX(y),R=i.getX(y+1),d=i.getX(y+2);g=wa(this,w,A,bB,e,t,s,N,R,d),g&&(g.faceIndex=Math.floor(y/3),g.face.materialIndex=G.materialIndex,I.push(g))}}else{const r=Math.max(0,D.start),l=Math.min(i.count,D.start+D.count);for(let G=r,w=l;G<w;G+=3){const c=i.getX(G),k=i.getX(G+1),y=i.getX(G+2);g=wa(this,B,A,bB,e,t,s,c,k,y),g&&(g.faceIndex=Math.floor(G/3),I.push(g))}}else if(E!==void 0)if(Array.isArray(B))for(let r=0,l=n.length;r<l;r++){const G=n[r],w=B[G.materialIndex],c=Math.max(G.start,D.start),k=Math.min(E.count,Math.min(G.start+G.count,D.start+D.count));for(let y=c,M=k;y<M;y+=3){const N=y,R=y+1,d=y+2;g=wa(this,w,A,bB,e,t,s,N,R,d),g&&(g.faceIndex=Math.floor(y/3),g.face.materialIndex=G.materialIndex,I.push(g))}}else{const r=Math.max(0,D.start),l=Math.min(E.count,D.start+D.count);for(let G=r,w=l;G<w;G+=3){const c=G,k=G+1,y=G+2;g=wa(this,B,A,bB,e,t,s,c,k,y),g&&(g.faceIndex=Math.floor(G/3),I.push(g))}}}}function of(Q,A,I,g,C,B,i,E){let e;if(A.side===wC?e=g.intersectTriangle(i,B,C,!0,E):e=g.intersectTriangle(C,B,i,A.side===XB,E),e===null)return null;la.copy(E),la.applyMatrix4(Q.matrixWorld);const t=I.ray.origin.distanceTo(la);return t<I.near||t>I.far?null:{distance:t,point:la.clone(),object:Q}}function wa(Q,A,I,g,C,B,i,E,e,t){Q.getVertexPosition(E,qE),Q.getVertexPosition(e,uE),Q.getVertexPosition(t,LE);const s=of(Q,A,I,g,qE,uE,LE,ca);if(s){C&&(Da.fromBufferAttribute(C,E),ra.fromBufferAttribute(C,e),ha.fromBufferAttribute(C,t),s.uv=JC.getInterpolation(ca,qE,uE,LE,Da,ra,ha,new cA)),B&&(Da.fromBufferAttribute(B,E),ra.fromBufferAttribute(B,e),ha.fromBufferAttribute(B,t),s.uv1=JC.getInterpolation(ca,qE,uE,LE,Da,ra,ha,new cA),s.uv2=s.uv1),i&&(hG.fromBufferAttribute(i,E),cG.fromBufferAttribute(i,e),lG.fromBufferAttribute(i,t),s.normal=JC.getInterpolation(ca,qE,uE,LE,hG,cG,lG,new u),s.normal.dot(g.direction)>0&&s.normal.multiplyScalar(-1));const n={a:E,b:e,c:t,normal:new u,materialIndex:0};JC.getNormal(qE,uE,LE,n.normal),s.face=n}return s}class JQ extends kI{constructor(A=1,I=1,g=1,C=1,B=1,i=1){super(),this.type="BoxGeometry",this.parameters={width:A,height:I,depth:g,widthSegments:C,heightSegments:B,depthSegments:i};const E=this;C=Math.floor(C),B=Math.floor(B),i=Math.floor(i);const e=[],t=[],s=[],n=[];let D=0,r=0;l("z","y","x",-1,-1,g,I,A,i,B,0),l("z","y","x",1,-1,g,I,-A,i,B,1),l("x","z","y",1,1,A,g,I,C,i,2),l("x","z","y",1,-1,A,g,-I,C,i,3),l("x","y","z",1,-1,A,I,g,C,B,4),l("x","y","z",-1,-1,A,I,-g,C,B,5),this.setIndex(e),this.setAttribute("position",new jA(t,3)),this.setAttribute("normal",new jA(s,3)),this.setAttribute("uv",new jA(n,2));function l(G,w,c,k,y,M,N,R,d,L,F){const q=M/d,W=N/L,$=M/2,H=N/2,x=R/2,IA=d+1,eA=L+1;let CA=0,QA=0;const NA=new u;for(let SA=0;SA<eA;SA++){const HA=SA*W-H;for(let dA=0;dA<IA;dA++){const oA=dA*q-$;NA[G]=oA*k,NA[w]=HA*y,NA[c]=x,t.push(NA.x,NA.y,NA.z),NA[G]=0,NA[w]=0,NA[c]=R>0?1:-1,s.push(NA.x,NA.y,NA.z),n.push(dA/d),n.push(1-SA/L),CA+=1}}for(let SA=0;SA<L;SA++)for(let HA=0;HA<d;HA++){const dA=D+HA+IA*SA,oA=D+HA+IA*(SA+1),lA=D+(HA+1)+IA*(SA+1),pA=D+(HA+1)+IA*SA;e.push(dA,oA,pA),e.push(oA,lA,pA),QA+=6}E.addGroup(r,QA,F),r+=QA,D+=CA}}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new JQ(A.width,A.height,A.depth,A.widthSegments,A.heightSegments,A.depthSegments)}}function oo(Q){const A={};for(const I in Q){A[I]={};for(const g in Q[I]){const C=Q[I][g];C&&(C.isColor||C.isMatrix3||C.isMatrix4||C.isVector2||C.isVector3||C.isVector4||C.isTexture||C.isQuaternion)?C.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),A[I][g]=null):A[I][g]=C.clone():Array.isArray(C)?A[I][g]=C.slice():A[I][g]=C}}return A}function hC(Q){const A={};for(let I=0;I<Q.length;I++){const g=oo(Q[I]);for(const C in g)A[C]=g[C]}return A}function ef(Q){const A=[];for(let I=0;I<Q.length;I++)A.push(Q[I].clone());return A}function Mk(Q){return Q.getRenderTarget()===null?Q.outputColorSpace:sB}const Uk={clone:oo,merge:hC};var tf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,af=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zB extends bg{constructor(A){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tf,this.fragmentShader=af,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,A!==void 0&&this.setValues(A)}copy(A){return super.copy(A),this.fragmentShader=A.fragmentShader,this.vertexShader=A.vertexShader,this.uniforms=oo(A.uniforms),this.uniformsGroups=ef(A.uniformsGroups),this.defines=Object.assign({},A.defines),this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.fog=A.fog,this.lights=A.lights,this.clipping=A.clipping,this.extensions=Object.assign({},A.extensions),this.glslVersion=A.glslVersion,this}toJSON(A){const I=super.toJSON(A);I.glslVersion=this.glslVersion,I.uniforms={};for(const C in this.uniforms){const i=this.uniforms[C].value;i&&i.isTexture?I.uniforms[C]={type:"t",value:i.toJSON(A).uuid}:i&&i.isColor?I.uniforms[C]={type:"c",value:i.getHex()}:i&&i.isVector2?I.uniforms[C]={type:"v2",value:i.toArray()}:i&&i.isVector3?I.uniforms[C]={type:"v3",value:i.toArray()}:i&&i.isVector4?I.uniforms[C]={type:"v4",value:i.toArray()}:i&&i.isMatrix3?I.uniforms[C]={type:"m3",value:i.toArray()}:i&&i.isMatrix4?I.uniforms[C]={type:"m4",value:i.toArray()}:I.uniforms[C]={value:i}}Object.keys(this.defines).length>0&&(I.defines=this.defines),I.vertexShader=this.vertexShader,I.fragmentShader=this.fragmentShader,I.lights=this.lights,I.clipping=this.clipping;const g={};for(const C in this.extensions)this.extensions[C]===!0&&(g[C]=!0);return Object.keys(g).length>0&&(I.extensions=g),I}}class ve extends YI{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new cI,this.projectionMatrix=new cI,this.projectionMatrixInverse=new cI}copy(A,I){return super.copy(A,I),this.matrixWorldInverse.copy(A.matrixWorldInverse),this.projectionMatrix.copy(A.projectionMatrix),this.projectionMatrixInverse.copy(A.projectionMatrixInverse),this}getWorldDirection(A){this.updateWorldMatrix(!0,!1);const I=this.matrixWorld.elements;return A.set(-I[8],-I[9],-I[10]).normalize()}updateMatrixWorld(A){super.updateMatrixWorld(A),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(A,I){super.updateWorldMatrix(A,I),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Mg extends ve{constructor(A=50,I=1,g=.1,C=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=A,this.zoom=1,this.near=g,this.far=C,this.focus=10,this.aspect=I,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(A,I){return super.copy(A,I),this.fov=A.fov,this.zoom=A.zoom,this.near=A.near,this.far=A.far,this.focus=A.focus,this.aspect=A.aspect,this.view=A.view===null?null:Object.assign({},A.view),this.filmGauge=A.filmGauge,this.filmOffset=A.filmOffset,this}setFocalLength(A){const I=.5*this.getFilmHeight()/A;this.fov=Eo*2*Math.atan(I),this.updateProjectionMatrix()}getFocalLength(){const A=Math.tan(Zi*.5*this.fov);return .5*this.getFilmHeight()/A}getEffectiveFOV(){return Eo*2*Math.atan(Math.tan(Zi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(A,I,g,C,B,i){this.aspect=A/I,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=I,this.view.offsetX=g,this.view.offsetY=C,this.view.width=B,this.view.height=i,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=this.near;let I=A*Math.tan(Zi*.5*this.fov)/this.zoom,g=2*I,C=this.aspect*g,B=-.5*C;const i=this.view;if(this.view!==null&&this.view.enabled){const e=i.fullWidth,t=i.fullHeight;B+=i.offsetX*C/e,I-=i.offsetY*g/t,C*=i.width/e,g*=i.height/t}const E=this.filmOffset;E!==0&&(B+=A*E/this.getFilmWidth()),this.projectionMatrix.makePerspective(B,B+C,I,I-g,A,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const I=super.toJSON(A);return I.object.fov=this.fov,I.object.zoom=this.zoom,I.object.near=this.near,I.object.far=this.far,I.object.focus=this.focus,I.object.aspect=this.aspect,this.view!==null&&(I.object.view=Object.assign({},this.view)),I.object.filmGauge=this.filmGauge,I.object.filmOffset=this.filmOffset,I}}const YE=-90,HE=1;class Nk extends YI{constructor(A,I,g){super(),this.type="CubeCamera",this.renderTarget=g;const C=new Mg(YE,HE,A,I);C.layers=this.layers,C.up.set(0,1,0),C.lookAt(1,0,0),this.add(C);const B=new Mg(YE,HE,A,I);B.layers=this.layers,B.up.set(0,1,0),B.lookAt(-1,0,0),this.add(B);const i=new Mg(YE,HE,A,I);i.layers=this.layers,i.up.set(0,0,-1),i.lookAt(0,1,0),this.add(i);const E=new Mg(YE,HE,A,I);E.layers=this.layers,E.up.set(0,0,1),E.lookAt(0,-1,0),this.add(E);const e=new Mg(YE,HE,A,I);e.layers=this.layers,e.up.set(0,1,0),e.lookAt(0,0,1),this.add(e);const t=new Mg(YE,HE,A,I);t.layers=this.layers,t.up.set(0,1,0),t.lookAt(0,0,-1),this.add(t)}update(A,I){this.parent===null&&this.updateMatrixWorld();const g=this.renderTarget,[C,B,i,E,e,t]=this.children,s=A.getRenderTarget(),n=A.toneMapping,D=A.xr.enabled;A.toneMapping=WB,A.xr.enabled=!1;const r=g.texture.generateMipmaps;g.texture.generateMipmaps=!1,A.setRenderTarget(g,0),A.render(I,C),A.setRenderTarget(g,1),A.render(I,B),A.setRenderTarget(g,2),A.render(I,i),A.setRenderTarget(g,3),A.render(I,E),A.setRenderTarget(g,4),A.render(I,e),g.texture.generateMipmaps=r,A.setRenderTarget(g,5),A.render(I,t),A.setRenderTarget(s),A.toneMapping=n,A.xr.enabled=D,g.texture.needsPMREMUpdate=!0}}class Pe extends rg{constructor(A,I,g,C,B,i,E,e,t,s){A=A!==void 0?A:[],I=I!==void 0?I:Ii,super(A,I,g,C,B,i,E,e,t,s),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(A){this.image=A}}class Kk extends JB{constructor(A=1,I={}){super(A,A,I),this.isWebGLCubeRenderTarget=!0;const g={width:A,height:A,depth:1},C=[g,g,g,g,g,g];I.encoding!==void 0&&(he("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),I.colorSpace=I.encoding===FQ?QI:jB),this.texture=new Pe(C,I.mapping,I.wrapS,I.wrapT,I.magFilter,I.minFilter,I.format,I.type,I.anisotropy,I.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=I.generateMipmaps!==void 0?I.generateMipmaps:!1,this.texture.minFilter=I.minFilter!==void 0?I.minFilter:Eg}fromEquirectangularTexture(A,I){this.texture.type=I.type,this.texture.colorSpace=I.colorSpace,this.texture.generateMipmaps=I.generateMipmaps,this.texture.minFilter=I.minFilter,this.texture.magFilter=I.magFilter;const g={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},C=new JQ(5,5,5),B=new zB({name:"CubemapFromEquirect",uniforms:oo(g.uniforms),vertexShader:g.vertexShader,fragmentShader:g.fragmentShader,side:wC,blending:KQ});B.uniforms.tEquirect.value=I;const i=new mg(C,B),E=I.minFilter;return I.minFilter===RB&&(I.minFilter=Eg),new Nk(1,10,this).update(A,i),I.minFilter=E,i.geometry.dispose(),i.material.dispose(),this}clear(A,I,g,C){const B=A.getRenderTarget();for(let i=0;i<6;i++)A.setRenderTarget(this,i),A.clear(I,g,C);A.setRenderTarget(B)}}const fD=new u,sf=new u,nf=new mI;class VQ{constructor(A=new u(1,0,0),I=0){this.isPlane=!0,this.normal=A,this.constant=I}set(A,I){return this.normal.copy(A),this.constant=I,this}setComponents(A,I,g,C){return this.normal.set(A,I,g),this.constant=C,this}setFromNormalAndCoplanarPoint(A,I){return this.normal.copy(A),this.constant=-I.dot(this.normal),this}setFromCoplanarPoints(A,I,g){const C=fD.subVectors(g,I).cross(sf.subVectors(A,I)).normalize();return this.setFromNormalAndCoplanarPoint(C,A),this}copy(A){return this.normal.copy(A.normal),this.constant=A.constant,this}normalize(){const A=1/this.normal.length();return this.normal.multiplyScalar(A),this.constant*=A,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(A){return this.normal.dot(A)+this.constant}distanceToSphere(A){return this.distanceToPoint(A.center)-A.radius}projectPoint(A,I){return I.copy(A).addScaledVector(this.normal,-this.distanceToPoint(A))}intersectLine(A,I){const g=A.delta(fD),C=this.normal.dot(g);if(C===0)return this.distanceToPoint(A.start)===0?I.copy(A.start):null;const B=-(A.start.dot(this.normal)+this.constant)/C;return B<0||B>1?null:I.copy(A.start).addScaledVector(g,B)}intersectsLine(A){const I=this.distanceToPoint(A.start),g=this.distanceToPoint(A.end);return I<0&&g>0||g<0&&I>0}intersectsBox(A){return A.intersectsPlane(this)}intersectsSphere(A){return A.intersectsPlane(this)}coplanarPoint(A){return A.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(A,I){const g=I||nf.getNormalMatrix(A),C=this.coplanarPoint(fD).applyMatrix4(A),B=this.normal.applyMatrix3(g).normalize();return this.constant=-C.dot(B),this}translate(A){return this.constant-=A.dot(this.normal),this}equals(A){return A.normal.equals(this.normal)&&A.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ni=new pB,Ga=new u;class qs{constructor(A=new VQ,I=new VQ,g=new VQ,C=new VQ,B=new VQ,i=new VQ){this.planes=[A,I,g,C,B,i]}set(A,I,g,C,B,i){const E=this.planes;return E[0].copy(A),E[1].copy(I),E[2].copy(g),E[3].copy(C),E[4].copy(B),E[5].copy(i),this}copy(A){const I=this.planes;for(let g=0;g<6;g++)I[g].copy(A.planes[g]);return this}setFromProjectionMatrix(A){const I=this.planes,g=A.elements,C=g[0],B=g[1],i=g[2],E=g[3],e=g[4],t=g[5],s=g[6],n=g[7],D=g[8],r=g[9],l=g[10],G=g[11],w=g[12],c=g[13],k=g[14],y=g[15];return I[0].setComponents(E-C,n-e,G-D,y-w).normalize(),I[1].setComponents(E+C,n+e,G+D,y+w).normalize(),I[2].setComponents(E+B,n+t,G+r,y+c).normalize(),I[3].setComponents(E-B,n-t,G-r,y-c).normalize(),I[4].setComponents(E-i,n-s,G-l,y-k).normalize(),I[5].setComponents(E+i,n+s,G+l,y+k).normalize(),this}intersectsObject(A){if(A.boundingSphere!==void 0)A.boundingSphere===null&&A.computeBoundingSphere(),Ni.copy(A.boundingSphere).applyMatrix4(A.matrixWorld);else{const I=A.geometry;I.boundingSphere===null&&I.computeBoundingSphere(),Ni.copy(I.boundingSphere).applyMatrix4(A.matrixWorld)}return this.intersectsSphere(Ni)}intersectsSprite(A){return Ni.center.set(0,0,0),Ni.radius=.7071067811865476,Ni.applyMatrix4(A.matrixWorld),this.intersectsSphere(Ni)}intersectsSphere(A){const I=this.planes,g=A.center,C=-A.radius;for(let B=0;B<6;B++)if(I[B].distanceToPoint(g)<C)return!1;return!0}intersectsBox(A){const I=this.planes;for(let g=0;g<6;g++){const C=I[g];if(Ga.x=C.normal.x>0?A.max.x:A.min.x,Ga.y=C.normal.y>0?A.max.y:A.min.y,Ga.z=C.normal.z>0?A.max.z:A.min.z,C.distanceToPoint(Ga)<0)return!1}return!0}containsPoint(A){const I=this.planes;for(let g=0;g<6;g++)if(I[g].distanceToPoint(A)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Fk(){let Q=null,A=!1,I=null,g=null;function C(B,i){I(B,i),g=Q.requestAnimationFrame(C)}return{start:function(){A!==!0&&I!==null&&(g=Q.requestAnimationFrame(C),A=!0)},stop:function(){Q.cancelAnimationFrame(g),A=!1},setAnimationLoop:function(B){I=B},setContext:function(B){Q=B}}}function Df(Q,A){const I=A.isWebGL2,g=new WeakMap;function C(t,s){const n=t.array,D=t.usage,r=Q.createBuffer();Q.bindBuffer(s,r),Q.bufferData(s,n,D),t.onUploadCallback();let l;if(n instanceof Float32Array)l=Q.FLOAT;else if(n instanceof Uint16Array)if(t.isFloat16BufferAttribute)if(I)l=Q.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else l=Q.UNSIGNED_SHORT;else if(n instanceof Int16Array)l=Q.SHORT;else if(n instanceof Uint32Array)l=Q.UNSIGNED_INT;else if(n instanceof Int32Array)l=Q.INT;else if(n instanceof Int8Array)l=Q.BYTE;else if(n instanceof Uint8Array)l=Q.UNSIGNED_BYTE;else if(n instanceof Uint8ClampedArray)l=Q.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+n);return{buffer:r,type:l,bytesPerElement:n.BYTES_PER_ELEMENT,version:t.version}}function B(t,s,n){const D=s.array,r=s.updateRange;Q.bindBuffer(n,t),r.count===-1?Q.bufferSubData(n,0,D):(I?Q.bufferSubData(n,r.offset*D.BYTES_PER_ELEMENT,D,r.offset,r.count):Q.bufferSubData(n,r.offset*D.BYTES_PER_ELEMENT,D.subarray(r.offset,r.offset+r.count)),r.count=-1),s.onUploadCallback()}function i(t){return t.isInterleavedBufferAttribute&&(t=t.data),g.get(t)}function E(t){t.isInterleavedBufferAttribute&&(t=t.data);const s=g.get(t);s&&(Q.deleteBuffer(s.buffer),g.delete(t))}function e(t,s){if(t.isGLBufferAttribute){const D=g.get(t);(!D||D.version<t.version)&&g.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version});return}t.isInterleavedBufferAttribute&&(t=t.data);const n=g.get(t);n===void 0?g.set(t,C(t,s)):n.version<t.version&&(B(n.buffer,t,s),n.version=t.version)}return{get:i,remove:E,update:e}}class Go extends kI{constructor(A=1,I=1,g=1,C=1){super(),this.type="PlaneGeometry",this.parameters={width:A,height:I,widthSegments:g,heightSegments:C};const B=A/2,i=I/2,E=Math.floor(g),e=Math.floor(C),t=E+1,s=e+1,n=A/E,D=I/e,r=[],l=[],G=[],w=[];for(let c=0;c<s;c++){const k=c*D-i;for(let y=0;y<t;y++){const M=y*n-B;l.push(M,-k,0),G.push(0,0,1),w.push(y/E),w.push(1-c/e)}}for(let c=0;c<e;c++)for(let k=0;k<E;k++){const y=k+t*c,M=k+t*(c+1),N=k+1+t*(c+1),R=k+1+t*c;r.push(y,M,R),r.push(M,N,R)}this.setIndex(r),this.setAttribute("position",new jA(l,3)),this.setAttribute("normal",new jA(G,3)),this.setAttribute("uv",new jA(w,2))}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new Go(A.width,A.height,A.widthSegments,A.heightSegments)}}var rf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,lf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Gf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sf="vec3 transformed = vec3( position );",yf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Mf=`#ifdef USE_IRIDESCENCE
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
#endif`,Uf=`#ifdef USE_BUMPMAP
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
#endif`,Nf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Kf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ff=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,df=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ff=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,qf=`#define PI 3.141592653589793
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
} // validated`,uf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Lf=`vec3 transformedNormal = objectNormal;
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
#endif`,Yf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tf="gl_FragColor = linearToOutputTexel( gl_FragColor );",xf=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Of=`#ifdef USE_ENVMAP
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
#endif`,vf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Pf=`#ifdef USE_ENVMAP
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
#endif`,Zf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wf=`#ifdef USE_ENVMAP
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
#endif`,_f=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zf=`#ifdef USE_GRADIENTMAP
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
}`,$f=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Aq=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Iq=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gq=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cq=`uniform bool receiveShadow;
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
#endif`,Bq=`#if defined( USE_ENVMAP )
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
#endif`,Qq=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,iq=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Eq=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,oq=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,eq=`PhysicalMaterial material;
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
#endif`,tq=`struct PhysicalMaterial {
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
}`,aq=`
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
#endif`,sq=`#if defined( RE_IndirectDiffuse )
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
#endif`,nq=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Dq=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rq=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hq=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,cq=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,lq=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,wq=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gq=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Sq=`#if defined( USE_POINTS_UV )
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
#endif`,yq=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kq=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mq=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Uq=`#ifdef USE_MORPHNORMALS
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
#endif`,Nq=`#ifdef USE_MORPHTARGETS
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
#endif`,Kq=`#ifdef USE_MORPHTARGETS
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
#endif`,Fq=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,Rq=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Jq=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dq=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pq=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fq=`#ifdef USE_NORMALMAP
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
#endif`,qq=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,uq=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lq=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Yq=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hq=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mq=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,bq=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tq=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xq=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Oq=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vq=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pq=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zq=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wq=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_q=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,jq=`float getShadowMask() {
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
}`,Vq=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xq=`#ifdef USE_SKINNING
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
#endif`,zq=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$q=`#ifdef USE_SKINNING
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
#endif`,Au=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Iu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cu=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bu=`#ifdef USE_TRANSMISSION
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
#endif`,Qu=`#ifdef USE_TRANSMISSION
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
#endif`,iu=`#ifdef USE_UV
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
#endif`,Eu=`#ifdef USE_UV
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
#endif`,ou=`#ifdef USE_UV
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
#endif`,eu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,au=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,su=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nu=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Du=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ru=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,hu=`#include <common>
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
}`,cu=`#if DEPTH_PACKING == 3200
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
}`,lu=`#define DISTANCE
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
}`,wu=`#define DISTANCE
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
}`,Gu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Su=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,yu=`uniform float scale;
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
}`,ku=`uniform vec3 diffuse;
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
}`,Mu=`#include <common>
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
}`,Uu=`uniform vec3 diffuse;
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
}`,Nu=`#define LAMBERT
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
}`,Ku=`#define LAMBERT
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
}`,Fu=`#define MATCAP
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
}`,Ru=`#define MATCAP
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
}`,Ju=`#define NORMAL
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
}`,du=`#define NORMAL
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
}`,pu=`#define PHONG
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
}`,fu=`#define PHONG
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
}`,qu=`#define STANDARD
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
}`,uu=`#define STANDARD
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
}`,Lu=`#define TOON
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
}`,Yu=`#define TOON
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
}`,Hu=`uniform float size;
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
}`,mu=`uniform vec3 diffuse;
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
}`,bu=`#include <common>
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
}`,Tu=`uniform vec3 color;
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
}`,xu=`uniform float rotation;
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
}`,Ou=`uniform vec3 diffuse;
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
}`,UI={alphamap_fragment:rf,alphamap_pars_fragment:hf,alphatest_fragment:cf,alphatest_pars_fragment:lf,aomap_fragment:wf,aomap_pars_fragment:Gf,begin_vertex:Sf,beginnormal_vertex:yf,bsdfs:kf,iridescence_fragment:Mf,bumpmap_pars_fragment:Uf,clipping_planes_fragment:Nf,clipping_planes_pars_fragment:Kf,clipping_planes_pars_vertex:Ff,clipping_planes_vertex:Rf,color_fragment:Jf,color_pars_fragment:df,color_pars_vertex:pf,color_vertex:ff,common:qf,cube_uv_reflection_fragment:uf,defaultnormal_vertex:Lf,displacementmap_pars_vertex:Yf,displacementmap_vertex:Hf,emissivemap_fragment:mf,emissivemap_pars_fragment:bf,encodings_fragment:Tf,encodings_pars_fragment:xf,envmap_fragment:Of,envmap_common_pars_fragment:vf,envmap_pars_fragment:Pf,envmap_pars_vertex:Zf,envmap_physical_pars_fragment:Bq,envmap_vertex:Wf,fog_vertex:_f,fog_pars_vertex:jf,fog_fragment:Vf,fog_pars_fragment:Xf,gradientmap_pars_fragment:zf,lightmap_fragment:$f,lightmap_pars_fragment:Aq,lights_lambert_fragment:Iq,lights_lambert_pars_fragment:gq,lights_pars_begin:Cq,lights_toon_fragment:Qq,lights_toon_pars_fragment:iq,lights_phong_fragment:Eq,lights_phong_pars_fragment:oq,lights_physical_fragment:eq,lights_physical_pars_fragment:tq,lights_fragment_begin:aq,lights_fragment_maps:sq,lights_fragment_end:nq,logdepthbuf_fragment:Dq,logdepthbuf_pars_fragment:rq,logdepthbuf_pars_vertex:hq,logdepthbuf_vertex:cq,map_fragment:lq,map_pars_fragment:wq,map_particle_fragment:Gq,map_particle_pars_fragment:Sq,metalnessmap_fragment:yq,metalnessmap_pars_fragment:kq,morphcolor_vertex:Mq,morphnormal_vertex:Uq,morphtarget_pars_vertex:Nq,morphtarget_vertex:Kq,normal_fragment_begin:Fq,normal_fragment_maps:Rq,normal_pars_fragment:Jq,normal_pars_vertex:dq,normal_vertex:pq,normalmap_pars_fragment:fq,clearcoat_normal_fragment_begin:qq,clearcoat_normal_fragment_maps:uq,clearcoat_pars_fragment:Lq,iridescence_pars_fragment:Yq,output_fragment:Hq,packing:mq,premultiplied_alpha_fragment:bq,project_vertex:Tq,dithering_fragment:xq,dithering_pars_fragment:Oq,roughnessmap_fragment:vq,roughnessmap_pars_fragment:Pq,shadowmap_pars_fragment:Zq,shadowmap_pars_vertex:Wq,shadowmap_vertex:_q,shadowmask_pars_fragment:jq,skinbase_vertex:Vq,skinning_pars_vertex:Xq,skinning_vertex:zq,skinnormal_vertex:$q,specularmap_fragment:Au,specularmap_pars_fragment:Iu,tonemapping_fragment:gu,tonemapping_pars_fragment:Cu,transmission_fragment:Bu,transmission_pars_fragment:Qu,uv_pars_fragment:iu,uv_pars_vertex:Eu,uv_vertex:ou,worldpos_vertex:eu,background_vert:tu,background_frag:au,backgroundCube_vert:su,backgroundCube_frag:nu,cube_vert:Du,cube_frag:ru,depth_vert:hu,depth_frag:cu,distanceRGBA_vert:lu,distanceRGBA_frag:wu,equirect_vert:Gu,equirect_frag:Su,linedashed_vert:yu,linedashed_frag:ku,meshbasic_vert:Mu,meshbasic_frag:Uu,meshlambert_vert:Nu,meshlambert_frag:Ku,meshmatcap_vert:Fu,meshmatcap_frag:Ru,meshnormal_vert:Ju,meshnormal_frag:du,meshphong_vert:pu,meshphong_frag:fu,meshphysical_vert:qu,meshphysical_frag:uu,meshtoon_vert:Lu,meshtoon_frag:Yu,points_vert:Hu,points_frag:mu,shadow_vert:bu,shadow_frag:Tu,sprite_vert:xu,sprite_frag:Ou},YA={common:{diffuse:{value:new TA(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new mI},alphaMap:{value:null},alphaMapTransform:{value:new mI},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new mI}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new mI}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new mI}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new mI},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new mI},normalScale:{value:new cA(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new mI},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new mI}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new mI}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new mI}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new TA(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new TA(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new mI}},sprite:{diffuse:{value:new TA(16777215)},opacity:{value:1},center:{value:new cA(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new mI},alphaMap:{value:null},alphaTest:{value:0}}},MB={basic:{uniforms:hC([YA.common,YA.specularmap,YA.envmap,YA.aomap,YA.lightmap,YA.fog]),vertexShader:UI.meshbasic_vert,fragmentShader:UI.meshbasic_frag},lambert:{uniforms:hC([YA.common,YA.specularmap,YA.envmap,YA.aomap,YA.lightmap,YA.emissivemap,YA.bumpmap,YA.normalmap,YA.displacementmap,YA.fog,YA.lights,{emissive:{value:new TA(0)}}]),vertexShader:UI.meshlambert_vert,fragmentShader:UI.meshlambert_frag},phong:{uniforms:hC([YA.common,YA.specularmap,YA.envmap,YA.aomap,YA.lightmap,YA.emissivemap,YA.bumpmap,YA.normalmap,YA.displacementmap,YA.fog,YA.lights,{emissive:{value:new TA(0)},specular:{value:new TA(1118481)},shininess:{value:30}}]),vertexShader:UI.meshphong_vert,fragmentShader:UI.meshphong_frag},standard:{uniforms:hC([YA.common,YA.envmap,YA.aomap,YA.lightmap,YA.emissivemap,YA.bumpmap,YA.normalmap,YA.displacementmap,YA.roughnessmap,YA.metalnessmap,YA.fog,YA.lights,{emissive:{value:new TA(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:UI.meshphysical_vert,fragmentShader:UI.meshphysical_frag},toon:{uniforms:hC([YA.common,YA.aomap,YA.lightmap,YA.emissivemap,YA.bumpmap,YA.normalmap,YA.displacementmap,YA.gradientmap,YA.fog,YA.lights,{emissive:{value:new TA(0)}}]),vertexShader:UI.meshtoon_vert,fragmentShader:UI.meshtoon_frag},matcap:{uniforms:hC([YA.common,YA.bumpmap,YA.normalmap,YA.displacementmap,YA.fog,{matcap:{value:null}}]),vertexShader:UI.meshmatcap_vert,fragmentShader:UI.meshmatcap_frag},points:{uniforms:hC([YA.points,YA.fog]),vertexShader:UI.points_vert,fragmentShader:UI.points_frag},dashed:{uniforms:hC([YA.common,YA.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:UI.linedashed_vert,fragmentShader:UI.linedashed_frag},depth:{uniforms:hC([YA.common,YA.displacementmap]),vertexShader:UI.depth_vert,fragmentShader:UI.depth_frag},normal:{uniforms:hC([YA.common,YA.bumpmap,YA.normalmap,YA.displacementmap,{opacity:{value:1}}]),vertexShader:UI.meshnormal_vert,fragmentShader:UI.meshnormal_frag},sprite:{uniforms:hC([YA.sprite,YA.fog]),vertexShader:UI.sprite_vert,fragmentShader:UI.sprite_frag},background:{uniforms:{uvTransform:{value:new mI},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:UI.background_vert,fragmentShader:UI.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:UI.backgroundCube_vert,fragmentShader:UI.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:UI.cube_vert,fragmentShader:UI.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:UI.equirect_vert,fragmentShader:UI.equirect_frag},distanceRGBA:{uniforms:hC([YA.common,YA.displacementmap,{referencePosition:{value:new u},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:UI.distanceRGBA_vert,fragmentShader:UI.distanceRGBA_frag},shadow:{uniforms:hC([YA.lights,YA.fog,{color:{value:new TA(0)},opacity:{value:1}}]),vertexShader:UI.shadow_vert,fragmentShader:UI.shadow_frag}};MB.physical={uniforms:hC([MB.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new mI},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new mI},clearcoatNormalScale:{value:new cA(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new mI},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new mI},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new mI},sheen:{value:0},sheenColor:{value:new TA(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new mI},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new mI},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new mI},transmissionSamplerSize:{value:new cA},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new mI},attenuationDistance:{value:0},attenuationColor:{value:new TA(0)},specularColor:{value:new TA(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new mI},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new mI}}]),vertexShader:UI.meshphysical_vert,fragmentShader:UI.meshphysical_frag};const Sa={r:0,b:0,g:0};function vu(Q,A,I,g,C,B,i){const E=new TA(0);let e=B===!0?0:1,t,s,n=null,D=0,r=null;function l(w,c){let k=!1,y=c.isScene===!0?c.background:null;switch(y&&y.isTexture&&(y=(c.backgroundBlurriness>0?I:A).get(y)),y===null?G(E,e):y&&y.isColor&&(G(y,1),k=!0),Q.xr.getEnvironmentBlendMode()){case"opaque":k=!0;break;case"additive":g.buffers.color.setClear(0,0,0,1,i),k=!0;break;case"alpha-blend":g.buffers.color.setClear(0,0,0,0,i),k=!0;break}(Q.autoClear||k)&&Q.clear(Q.autoClearColor,Q.autoClearDepth,Q.autoClearStencil),y&&(y.isCubeTexture||y.mapping===wo)?(s===void 0&&(s=new mg(new JQ(1,1,1),new zB({name:"BackgroundCubeMaterial",uniforms:oo(MB.backgroundCube.uniforms),vertexShader:MB.backgroundCube.vertexShader,fragmentShader:MB.backgroundCube.fragmentShader,side:wC,depthTest:!1,depthWrite:!1,fog:!1})),s.geometry.deleteAttribute("normal"),s.geometry.deleteAttribute("uv"),s.onBeforeRender=function(R,d,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(s.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),C.update(s)),s.material.uniforms.envMap.value=y,s.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,s.material.uniforms.backgroundBlurriness.value=c.backgroundBlurriness,s.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,s.material.toneMapped=y.colorSpace!==QI,(n!==y||D!==y.version||r!==Q.toneMapping)&&(s.material.needsUpdate=!0,n=y,D=y.version,r=Q.toneMapping),s.layers.enableAll(),w.unshift(s,s.geometry,s.material,0,0,null)):y&&y.isTexture&&(t===void 0&&(t=new mg(new Go(2,2),new zB({name:"BackgroundMaterial",uniforms:oo(MB.background.uniforms),vertexShader:MB.background.vertexShader,fragmentShader:MB.background.fragmentShader,side:XB,depthTest:!1,depthWrite:!1,fog:!1})),t.geometry.deleteAttribute("normal"),Object.defineProperty(t.material,"map",{get:function(){return this.uniforms.t2D.value}}),C.update(t)),t.material.uniforms.t2D.value=y,t.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,t.material.toneMapped=y.colorSpace!==QI,y.matrixAutoUpdate===!0&&y.updateMatrix(),t.material.uniforms.uvTransform.value.copy(y.matrix),(n!==y||D!==y.version||r!==Q.toneMapping)&&(t.material.needsUpdate=!0,n=y,D=y.version,r=Q.toneMapping),t.layers.enableAll(),w.unshift(t,t.geometry,t.material,0,0,null))}function G(w,c){w.getRGB(Sa,Mk(Q)),g.buffers.color.setClear(Sa.r,Sa.g,Sa.b,c,i)}return{getClearColor:function(){return E},setClearColor:function(w,c=1){E.set(w),e=c,G(E,e)},getClearAlpha:function(){return e},setClearAlpha:function(w){e=w,G(E,e)},render:l}}function Pu(Q,A,I,g){const C=Q.getParameter(Q.MAX_VERTEX_ATTRIBS),B=g.isWebGL2?null:A.get("OES_vertex_array_object"),i=g.isWebGL2||B!==null,E={},e=w(null);let t=e,s=!1;function n(x,IA,eA,CA,QA){let NA=!1;if(i){const SA=G(CA,eA,IA);t!==SA&&(t=SA,r(t.object)),NA=c(x,CA,eA,QA),NA&&k(x,CA,eA,QA)}else{const SA=IA.wireframe===!0;(t.geometry!==CA.id||t.program!==eA.id||t.wireframe!==SA)&&(t.geometry=CA.id,t.program=eA.id,t.wireframe=SA,NA=!0)}QA!==null&&I.update(QA,Q.ELEMENT_ARRAY_BUFFER),(NA||s)&&(s=!1,L(x,IA,eA,CA),QA!==null&&Q.bindBuffer(Q.ELEMENT_ARRAY_BUFFER,I.get(QA).buffer))}function D(){return g.isWebGL2?Q.createVertexArray():B.createVertexArrayOES()}function r(x){return g.isWebGL2?Q.bindVertexArray(x):B.bindVertexArrayOES(x)}function l(x){return g.isWebGL2?Q.deleteVertexArray(x):B.deleteVertexArrayOES(x)}function G(x,IA,eA){const CA=eA.wireframe===!0;let QA=E[x.id];QA===void 0&&(QA={},E[x.id]=QA);let NA=QA[IA.id];NA===void 0&&(NA={},QA[IA.id]=NA);let SA=NA[CA];return SA===void 0&&(SA=w(D()),NA[CA]=SA),SA}function w(x){const IA=[],eA=[],CA=[];for(let QA=0;QA<C;QA++)IA[QA]=0,eA[QA]=0,CA[QA]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:IA,enabledAttributes:eA,attributeDivisors:CA,object:x,attributes:{},index:null}}function c(x,IA,eA,CA){const QA=t.attributes,NA=IA.attributes;let SA=0;const HA=eA.getAttributes();for(const dA in HA)if(HA[dA].location>=0){const lA=QA[dA];let pA=NA[dA];if(pA===void 0&&(dA==="instanceMatrix"&&x.instanceMatrix&&(pA=x.instanceMatrix),dA==="instanceColor"&&x.instanceColor&&(pA=x.instanceColor)),lA===void 0||lA.attribute!==pA||pA&&lA.data!==pA.data)return!0;SA++}return t.attributesNum!==SA||t.index!==CA}function k(x,IA,eA,CA){const QA={},NA=IA.attributes;let SA=0;const HA=eA.getAttributes();for(const dA in HA)if(HA[dA].location>=0){let lA=NA[dA];lA===void 0&&(dA==="instanceMatrix"&&x.instanceMatrix&&(lA=x.instanceMatrix),dA==="instanceColor"&&x.instanceColor&&(lA=x.instanceColor));const pA={};pA.attribute=lA,lA&&lA.data&&(pA.data=lA.data),QA[dA]=pA,SA++}t.attributes=QA,t.attributesNum=SA,t.index=CA}function y(){const x=t.newAttributes;for(let IA=0,eA=x.length;IA<eA;IA++)x[IA]=0}function M(x){N(x,0)}function N(x,IA){const eA=t.newAttributes,CA=t.enabledAttributes,QA=t.attributeDivisors;eA[x]=1,CA[x]===0&&(Q.enableVertexAttribArray(x),CA[x]=1),QA[x]!==IA&&((g.isWebGL2?Q:A.get("ANGLE_instanced_arrays"))[g.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](x,IA),QA[x]=IA)}function R(){const x=t.newAttributes,IA=t.enabledAttributes;for(let eA=0,CA=IA.length;eA<CA;eA++)IA[eA]!==x[eA]&&(Q.disableVertexAttribArray(eA),IA[eA]=0)}function d(x,IA,eA,CA,QA,NA){g.isWebGL2===!0&&(eA===Q.INT||eA===Q.UNSIGNED_INT)?Q.vertexAttribIPointer(x,IA,eA,QA,NA):Q.vertexAttribPointer(x,IA,eA,CA,QA,NA)}function L(x,IA,eA,CA){if(g.isWebGL2===!1&&(x.isInstancedMesh||CA.isInstancedBufferGeometry)&&A.get("ANGLE_instanced_arrays")===null)return;y();const QA=CA.attributes,NA=eA.getAttributes(),SA=IA.defaultAttributeValues;for(const HA in NA){const dA=NA[HA];if(dA.location>=0){let oA=QA[HA];if(oA===void 0&&(HA==="instanceMatrix"&&x.instanceMatrix&&(oA=x.instanceMatrix),HA==="instanceColor"&&x.instanceColor&&(oA=x.instanceColor)),oA!==void 0){const lA=oA.normalized,pA=oA.itemSize,uA=I.get(oA);if(uA===void 0)continue;const P=uA.buffer,zA=uA.type,AI=uA.bytesPerElement;if(oA.isInterleavedBufferAttribute){const RA=oA.data,LA=RA.stride,yA=oA.offset;if(RA.isInstancedInterleavedBuffer){for(let tA=0;tA<dA.locationSize;tA++)N(dA.location+tA,RA.meshPerAttribute);x.isInstancedMesh!==!0&&CA._maxInstanceCount===void 0&&(CA._maxInstanceCount=RA.meshPerAttribute*RA.count)}else for(let tA=0;tA<dA.locationSize;tA++)M(dA.location+tA);Q.bindBuffer(Q.ARRAY_BUFFER,P);for(let tA=0;tA<dA.locationSize;tA++)d(dA.location+tA,pA/dA.locationSize,zA,lA,LA*AI,(yA+pA/dA.locationSize*tA)*AI)}else{if(oA.isInstancedBufferAttribute){for(let RA=0;RA<dA.locationSize;RA++)N(dA.location+RA,oA.meshPerAttribute);x.isInstancedMesh!==!0&&CA._maxInstanceCount===void 0&&(CA._maxInstanceCount=oA.meshPerAttribute*oA.count)}else for(let RA=0;RA<dA.locationSize;RA++)M(dA.location+RA);Q.bindBuffer(Q.ARRAY_BUFFER,P);for(let RA=0;RA<dA.locationSize;RA++)d(dA.location+RA,pA/dA.locationSize,zA,lA,pA*AI,pA/dA.locationSize*RA*AI)}}else if(SA!==void 0){const lA=SA[HA];if(lA!==void 0)switch(lA.length){case 2:Q.vertexAttrib2fv(dA.location,lA);break;case 3:Q.vertexAttrib3fv(dA.location,lA);break;case 4:Q.vertexAttrib4fv(dA.location,lA);break;default:Q.vertexAttrib1fv(dA.location,lA)}}}}R()}function F(){$();for(const x in E){const IA=E[x];for(const eA in IA){const CA=IA[eA];for(const QA in CA)l(CA[QA].object),delete CA[QA];delete IA[eA]}delete E[x]}}function q(x){if(E[x.id]===void 0)return;const IA=E[x.id];for(const eA in IA){const CA=IA[eA];for(const QA in CA)l(CA[QA].object),delete CA[QA];delete IA[eA]}delete E[x.id]}function W(x){for(const IA in E){const eA=E[IA];if(eA[x.id]===void 0)continue;const CA=eA[x.id];for(const QA in CA)l(CA[QA].object),delete CA[QA];delete eA[x.id]}}function $(){H(),s=!0,t!==e&&(t=e,r(t.object))}function H(){e.geometry=null,e.program=null,e.wireframe=!1}return{setup:n,reset:$,resetDefaultState:H,dispose:F,releaseStatesOfGeometry:q,releaseStatesOfProgram:W,initAttributes:y,enableAttribute:M,disableUnusedAttributes:R}}function Zu(Q,A,I,g){const C=g.isWebGL2;let B;function i(t){B=t}function E(t,s){Q.drawArrays(B,t,s),I.update(s,B,1)}function e(t,s,n){if(n===0)return;let D,r;if(C)D=Q,r="drawArraysInstanced";else if(D=A.get("ANGLE_instanced_arrays"),r="drawArraysInstancedANGLE",D===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}D[r](B,t,s,n),I.update(s,B,n)}this.setMode=i,this.render=E,this.renderInstances=e}function Wu(Q,A,I){let g;function C(){if(g!==void 0)return g;if(A.has("EXT_texture_filter_anisotropic")===!0){const d=A.get("EXT_texture_filter_anisotropic");g=Q.getParameter(d.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else g=0;return g}function B(d){if(d==="highp"){if(Q.getShaderPrecisionFormat(Q.VERTEX_SHADER,Q.HIGH_FLOAT).precision>0&&Q.getShaderPrecisionFormat(Q.FRAGMENT_SHADER,Q.HIGH_FLOAT).precision>0)return"highp";d="mediump"}return d==="mediump"&&Q.getShaderPrecisionFormat(Q.VERTEX_SHADER,Q.MEDIUM_FLOAT).precision>0&&Q.getShaderPrecisionFormat(Q.FRAGMENT_SHADER,Q.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const i=typeof WebGL2RenderingContext<"u"&&Q.constructor.name==="WebGL2RenderingContext";let E=I.precision!==void 0?I.precision:"highp";const e=B(E);e!==E&&(console.warn("THREE.WebGLRenderer:",E,"not supported, using",e,"instead."),E=e);const t=i||A.has("WEBGL_draw_buffers"),s=I.logarithmicDepthBuffer===!0,n=Q.getParameter(Q.MAX_TEXTURE_IMAGE_UNITS),D=Q.getParameter(Q.MAX_VERTEX_TEXTURE_IMAGE_UNITS),r=Q.getParameter(Q.MAX_TEXTURE_SIZE),l=Q.getParameter(Q.MAX_CUBE_MAP_TEXTURE_SIZE),G=Q.getParameter(Q.MAX_VERTEX_ATTRIBS),w=Q.getParameter(Q.MAX_VERTEX_UNIFORM_VECTORS),c=Q.getParameter(Q.MAX_VARYING_VECTORS),k=Q.getParameter(Q.MAX_FRAGMENT_UNIFORM_VECTORS),y=D>0,M=i||A.has("OES_texture_float"),N=y&&M,R=i?Q.getParameter(Q.MAX_SAMPLES):0;return{isWebGL2:i,drawBuffers:t,getMaxAnisotropy:C,getMaxPrecision:B,precision:E,logarithmicDepthBuffer:s,maxTextures:n,maxVertexTextures:D,maxTextureSize:r,maxCubemapSize:l,maxAttributes:G,maxVertexUniforms:w,maxVaryings:c,maxFragmentUniforms:k,vertexTextures:y,floatFragmentTextures:M,floatVertexTextures:N,maxSamples:R}}function _u(Q){const A=this;let I=null,g=0,C=!1,B=!1;const i=new VQ,E=new mI,e={value:null,needsUpdate:!1};this.uniform=e,this.numPlanes=0,this.numIntersection=0,this.init=function(n,D){const r=n.length!==0||D||g!==0||C;return C=D,g=n.length,r},this.beginShadows=function(){B=!0,s(null)},this.endShadows=function(){B=!1},this.setGlobalState=function(n,D){I=s(n,D,0)},this.setState=function(n,D,r){const l=n.clippingPlanes,G=n.clipIntersection,w=n.clipShadows,c=Q.get(n);if(!C||l===null||l.length===0||B&&!w)B?s(null):t();else{const k=B?0:g,y=k*4;let M=c.clippingState||null;e.value=M,M=s(l,D,y,r);for(let N=0;N!==y;++N)M[N]=I[N];c.clippingState=M,this.numIntersection=G?this.numPlanes:0,this.numPlanes+=k}};function t(){e.value!==I&&(e.value=I,e.needsUpdate=g>0),A.numPlanes=g,A.numIntersection=0}function s(n,D,r,l){const G=n!==null?n.length:0;let w=null;if(G!==0){if(w=e.value,l!==!0||w===null){const c=r+G*4,k=D.matrixWorldInverse;E.getNormalMatrix(k),(w===null||w.length<c)&&(w=new Float32Array(c));for(let y=0,M=r;y!==G;++y,M+=4)i.copy(n[y]).applyMatrix4(k,E),i.normal.toArray(w,M),w[M+3]=i.constant}e.value=w,e.needsUpdate=!0}return A.numPlanes=G,A.numIntersection=0,w}}function ju(Q){let A=new WeakMap;function I(i,E){return E===Se?i.mapping=Ii:E===ye&&(i.mapping=gi),i}function g(i){if(i&&i.isTexture&&i.isRenderTargetTexture===!1){const E=i.mapping;if(E===Se||E===ye)if(A.has(i)){const e=A.get(i).texture;return I(e,i.mapping)}else{const e=i.image;if(e&&e.height>0){const t=new Kk(e.height/2);return t.fromEquirectangularTexture(Q,i),A.set(i,t),i.addEventListener("dispose",C),I(t.texture,i.mapping)}else return null}}return i}function C(i){const E=i.target;E.removeEventListener("dispose",C);const e=A.get(E);e!==void 0&&(A.delete(E),e.dispose())}function B(){A=new WeakMap}return{get:g,dispose:B}}class ai extends ve{constructor(A=-1,I=1,g=1,C=-1,B=.1,i=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=A,this.right=I,this.top=g,this.bottom=C,this.near=B,this.far=i,this.updateProjectionMatrix()}copy(A,I){return super.copy(A,I),this.left=A.left,this.right=A.right,this.top=A.top,this.bottom=A.bottom,this.near=A.near,this.far=A.far,this.zoom=A.zoom,this.view=A.view===null?null:Object.assign({},A.view),this}setViewOffset(A,I,g,C,B,i){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=I,this.view.offsetX=g,this.view.offsetY=C,this.view.width=B,this.view.height=i,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=(this.right-this.left)/(2*this.zoom),I=(this.top-this.bottom)/(2*this.zoom),g=(this.right+this.left)/2,C=(this.top+this.bottom)/2;let B=g-A,i=g+A,E=C+I,e=C-I;if(this.view!==null&&this.view.enabled){const t=(this.right-this.left)/this.view.fullWidth/this.zoom,s=(this.top-this.bottom)/this.view.fullHeight/this.zoom;B+=t*this.view.offsetX,i=B+t*this.view.width,E-=s*this.view.offsetY,e=E-s*this.view.height}this.projectionMatrix.makeOrthographic(B,i,E,e,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const I=super.toJSON(A);return I.object.zoom=this.zoom,I.object.left=this.left,I.object.right=this.right,I.object.top=this.top,I.object.bottom=this.bottom,I.object.near=this.near,I.object.far=this.far,this.view!==null&&(I.object.view=Object.assign({},this.view)),I}}const XE=4,wG=[.125,.215,.35,.446,.526,.582],Yi=20,qD=new ai,GG=new TA;let uD=null;const ui=(1+Math.sqrt(5))/2,mE=1/ui,SG=[new u(1,1,1),new u(-1,1,1),new u(1,1,-1),new u(-1,1,-1),new u(0,ui,mE),new u(0,ui,-mE),new u(mE,0,ui),new u(-mE,0,ui),new u(ui,mE,0),new u(-ui,mE,0)];class Pr{constructor(A){this._renderer=A,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(A,I=0,g=.1,C=100){uD=this._renderer.getRenderTarget(),this._setSize(256);const B=this._allocateTargets();return B.depthBuffer=!0,this._sceneToCubeUV(A,g,C,B),I>0&&this._blur(B,0,0,I),this._applyPMREM(B),this._cleanup(B),B}fromEquirectangular(A,I=null){return this._fromTexture(A,I)}fromCubemap(A,I=null){return this._fromTexture(A,I)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=MG(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kG(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(A){this._lodMax=Math.floor(Math.log2(A)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let A=0;A<this._lodPlanes.length;A++)this._lodPlanes[A].dispose()}_cleanup(A){this._renderer.setRenderTarget(uD),A.scissorTest=!1,ya(A,0,0,A.width,A.height)}_fromTexture(A,I){A.mapping===Ii||A.mapping===gi?this._setSize(A.image.length===0?16:A.image[0].width||A.image[0].image.width):this._setSize(A.image.width/4),uD=this._renderer.getRenderTarget();const g=I||this._allocateTargets();return this._textureToCubeUV(A,g),this._applyPMREM(g),this._cleanup(g),g}_allocateTargets(){const A=3*Math.max(this._cubeSize,112),I=4*this._cubeSize,g={magFilter:Eg,minFilter:Eg,generateMipmaps:!1,type:_B,format:Wg,colorSpace:sB,depthBuffer:!1},C=yG(A,I,g);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==A||this._pingPongRenderTarget.height!==I){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yG(A,I,g);const{_lodMax:B}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Vu(B)),this._blurMaterial=Xu(B,A,I)}return C}_compileMaterial(A){const I=new mg(this._lodPlanes[0],A);this._renderer.compile(I,qD)}_sceneToCubeUV(A,I,g,C){const E=new Mg(90,1,I,g),e=[1,-1,1,1,1,1],t=[1,1,1,-1,-1,-1],s=this._renderer,n=s.autoClear,D=s.toneMapping;s.getClearColor(GG),s.toneMapping=WB,s.autoClear=!1;const r=new WC({name:"PMREM.Background",side:wC,depthWrite:!1,depthTest:!1}),l=new mg(new JQ,r);let G=!1;const w=A.background;w?w.isColor&&(r.color.copy(w),A.background=null,G=!0):(r.color.copy(GG),G=!0);for(let c=0;c<6;c++){const k=c%3;k===0?(E.up.set(0,e[c],0),E.lookAt(t[c],0,0)):k===1?(E.up.set(0,0,e[c]),E.lookAt(0,t[c],0)):(E.up.set(0,e[c],0),E.lookAt(0,0,t[c]));const y=this._cubeSize;ya(C,k*y,c>2?y:0,y,y),s.setRenderTarget(C),G&&s.render(l,E),s.render(A,E)}l.geometry.dispose(),l.material.dispose(),s.toneMapping=D,s.autoClear=n,A.background=w}_textureToCubeUV(A,I){const g=this._renderer,C=A.mapping===Ii||A.mapping===gi;C?(this._cubemapMaterial===null&&(this._cubemapMaterial=MG()),this._cubemapMaterial.uniforms.flipEnvMap.value=A.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kG());const B=C?this._cubemapMaterial:this._equirectMaterial,i=new mg(this._lodPlanes[0],B),E=B.uniforms;E.envMap.value=A;const e=this._cubeSize;ya(I,0,0,3*e,2*e),g.setRenderTarget(I),g.render(i,qD)}_applyPMREM(A){const I=this._renderer,g=I.autoClear;I.autoClear=!1;for(let C=1;C<this._lodPlanes.length;C++){const B=Math.sqrt(this._sigmas[C]*this._sigmas[C]-this._sigmas[C-1]*this._sigmas[C-1]),i=SG[(C-1)%SG.length];this._blur(A,C-1,C,B,i)}I.autoClear=g}_blur(A,I,g,C,B){const i=this._pingPongRenderTarget;this._halfBlur(A,i,I,g,C,"latitudinal",B),this._halfBlur(i,A,g,g,C,"longitudinal",B)}_halfBlur(A,I,g,C,B,i,E){const e=this._renderer,t=this._blurMaterial;i!=="latitudinal"&&i!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const s=3,n=new mg(this._lodPlanes[C],t),D=t.uniforms,r=this._sizeLods[g]-1,l=isFinite(B)?Math.PI/(2*r):2*Math.PI/(2*Yi-1),G=B/l,w=isFinite(B)?1+Math.floor(s*G):Yi;w>Yi&&console.warn(`sigmaRadians, ${B}, is too large and will clip, as it requested ${w} samples when the maximum is set to ${Yi}`);const c=[];let k=0;for(let d=0;d<Yi;++d){const L=d/G,F=Math.exp(-L*L/2);c.push(F),d===0?k+=F:d<w&&(k+=2*F)}for(let d=0;d<c.length;d++)c[d]=c[d]/k;D.envMap.value=A.texture,D.samples.value=w,D.weights.value=c,D.latitudinal.value=i==="latitudinal",E&&(D.poleAxis.value=E);const{_lodMax:y}=this;D.dTheta.value=l,D.mipInt.value=y-g;const M=this._sizeLods[C],N=3*M*(C>y-XE?C-y+XE:0),R=4*(this._cubeSize-M);ya(I,N,R,3*M,2*M),e.setRenderTarget(I),e.render(n,qD)}}function Vu(Q){const A=[],I=[],g=[];let C=Q;const B=Q-XE+1+wG.length;for(let i=0;i<B;i++){const E=Math.pow(2,C);I.push(E);let e=1/E;i>Q-XE?e=wG[i-Q+XE-1]:i===0&&(e=0),g.push(e);const t=1/(E-2),s=-t,n=1+t,D=[s,s,n,s,n,n,s,s,n,n,s,n],r=6,l=6,G=3,w=2,c=1,k=new Float32Array(G*l*r),y=new Float32Array(w*l*r),M=new Float32Array(c*l*r);for(let R=0;R<r;R++){const d=R%3*2/3-1,L=R>2?0:-1,F=[d,L,0,d+2/3,L,0,d+2/3,L+1,0,d,L,0,d+2/3,L+1,0,d,L+1,0];k.set(F,G*l*R),y.set(D,w*l*R);const q=[R,R,R,R,R,R];M.set(q,c*l*R)}const N=new kI;N.setAttribute("position",new PI(k,G)),N.setAttribute("uv",new PI(y,w)),N.setAttribute("faceIndex",new PI(M,c)),A.push(N),C>XE&&C--}return{lodPlanes:A,sizeLods:I,sigmas:g}}function yG(Q,A,I){const g=new JB(Q,A,I);return g.texture.mapping=wo,g.texture.name="PMREM.cubeUv",g.scissorTest=!0,g}function ya(Q,A,I,g,C){Q.viewport.set(A,I,g,C),Q.scissor.set(A,I,g,C)}function Xu(Q,A,I){const g=new Float32Array(Yi),C=new u(0,1,0);return new zB({name:"SphericalGaussianBlur",defines:{n:Yi,CUBEUV_TEXEL_WIDTH:1/A,CUBEUV_TEXEL_HEIGHT:1/I,CUBEUV_MAX_MIP:`${Q}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:g},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:C}},vertexShader:ph(),fragmentShader:`

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
		`,blending:KQ,depthTest:!1,depthWrite:!1})}function kG(){return new zB({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ph(),fragmentShader:`

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
		`,blending:KQ,depthTest:!1,depthWrite:!1})}function MG(){return new zB({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:KQ,depthTest:!1,depthWrite:!1})}function ph(){return`

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
	`}function zu(Q){let A=new WeakMap,I=null;function g(E){if(E&&E.isTexture){const e=E.mapping,t=e===Se||e===ye,s=e===Ii||e===gi;if(t||s)if(E.isRenderTargetTexture&&E.needsPMREMUpdate===!0){E.needsPMREMUpdate=!1;let n=A.get(E);return I===null&&(I=new Pr(Q)),n=t?I.fromEquirectangular(E,n):I.fromCubemap(E,n),A.set(E,n),n.texture}else{if(A.has(E))return A.get(E).texture;{const n=E.image;if(t&&n&&n.height>0||s&&n&&C(n)){I===null&&(I=new Pr(Q));const D=t?I.fromEquirectangular(E):I.fromCubemap(E);return A.set(E,D),E.addEventListener("dispose",B),D.texture}else return null}}}return E}function C(E){let e=0;const t=6;for(let s=0;s<t;s++)E[s]!==void 0&&e++;return e===t}function B(E){const e=E.target;e.removeEventListener("dispose",B);const t=A.get(e);t!==void 0&&(A.delete(e),t.dispose())}function i(){A=new WeakMap,I!==null&&(I.dispose(),I=null)}return{get:g,dispose:i}}function $u(Q){const A={};function I(g){if(A[g]!==void 0)return A[g];let C;switch(g){case"WEBGL_depth_texture":C=Q.getExtension("WEBGL_depth_texture")||Q.getExtension("MOZ_WEBGL_depth_texture")||Q.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":C=Q.getExtension("EXT_texture_filter_anisotropic")||Q.getExtension("MOZ_EXT_texture_filter_anisotropic")||Q.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":C=Q.getExtension("WEBGL_compressed_texture_s3tc")||Q.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||Q.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":C=Q.getExtension("WEBGL_compressed_texture_pvrtc")||Q.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:C=Q.getExtension(g)}return A[g]=C,C}return{has:function(g){return I(g)!==null},init:function(g){g.isWebGL2?I("EXT_color_buffer_float"):(I("WEBGL_depth_texture"),I("OES_texture_float"),I("OES_texture_half_float"),I("OES_texture_half_float_linear"),I("OES_standard_derivatives"),I("OES_element_index_uint"),I("OES_vertex_array_object"),I("ANGLE_instanced_arrays")),I("OES_texture_float_linear"),I("EXT_color_buffer_half_float"),I("WEBGL_multisampled_render_to_texture")},get:function(g){const C=I(g);return C===null&&console.warn("THREE.WebGLRenderer: "+g+" extension not supported."),C}}}function AL(Q,A,I,g){const C={},B=new WeakMap;function i(n){const D=n.target;D.index!==null&&A.remove(D.index);for(const l in D.attributes)A.remove(D.attributes[l]);D.removeEventListener("dispose",i),delete C[D.id];const r=B.get(D);r&&(A.remove(r),B.delete(D)),g.releaseStatesOfGeometry(D),D.isInstancedBufferGeometry===!0&&delete D._maxInstanceCount,I.memory.geometries--}function E(n,D){return C[D.id]===!0||(D.addEventListener("dispose",i),C[D.id]=!0,I.memory.geometries++),D}function e(n){const D=n.attributes;for(const l in D)A.update(D[l],Q.ARRAY_BUFFER);const r=n.morphAttributes;for(const l in r){const G=r[l];for(let w=0,c=G.length;w<c;w++)A.update(G[w],Q.ARRAY_BUFFER)}}function t(n){const D=[],r=n.index,l=n.attributes.position;let G=0;if(r!==null){const k=r.array;G=r.version;for(let y=0,M=k.length;y<M;y+=3){const N=k[y+0],R=k[y+1],d=k[y+2];D.push(N,R,R,d,d,N)}}else{const k=l.array;G=l.version;for(let y=0,M=k.length/3-1;y<M;y+=3){const N=y+0,R=y+1,d=y+2;D.push(N,R,R,d,d,N)}}const w=new(yk(D)?dh:Jh)(D,1);w.version=G;const c=B.get(n);c&&A.remove(c),B.set(n,w)}function s(n){const D=B.get(n);if(D){const r=n.index;r!==null&&D.version<r.version&&t(n)}else t(n);return B.get(n)}return{get:E,update:e,getWireframeAttribute:s}}function IL(Q,A,I,g){const C=g.isWebGL2;let B;function i(D){B=D}let E,e;function t(D){E=D.type,e=D.bytesPerElement}function s(D,r){Q.drawElements(B,r,E,D*e),I.update(r,B,1)}function n(D,r,l){if(l===0)return;let G,w;if(C)G=Q,w="drawElementsInstanced";else if(G=A.get("ANGLE_instanced_arrays"),w="drawElementsInstancedANGLE",G===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}G[w](B,r,E,D*e,l),I.update(r,B,l)}this.setMode=i,this.setIndex=t,this.render=s,this.renderInstances=n}function gL(Q){const A={geometries:0,textures:0},I={frame:0,calls:0,triangles:0,points:0,lines:0};function g(B,i,E){switch(I.calls++,i){case Q.TRIANGLES:I.triangles+=E*(B/3);break;case Q.LINES:I.lines+=E*(B/2);break;case Q.LINE_STRIP:I.lines+=E*(B-1);break;case Q.LINE_LOOP:I.lines+=E*B;break;case Q.POINTS:I.points+=E*B;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",i);break}}function C(){I.frame++,I.calls=0,I.triangles=0,I.points=0,I.lines=0}return{memory:A,render:I,programs:null,autoReset:!0,reset:C,update:g}}function CL(Q,A){return Q[0]-A[0]}function BL(Q,A){return Math.abs(A[1])-Math.abs(Q[1])}function QL(Q,A,I){const g={},C=new Float32Array(8),B=new WeakMap,i=new $I,E=[];for(let t=0;t<8;t++)E[t]=[t,0];function e(t,s,n){const D=t.morphTargetInfluences;if(A.isWebGL2===!0){const l=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,G=l!==void 0?l.length:0;let w=B.get(s);if(w===void 0||w.count!==G){let IA=function(){H.dispose(),B.delete(s),s.removeEventListener("dispose",IA)};var r=IA;w!==void 0&&w.texture.dispose();const y=s.morphAttributes.position!==void 0,M=s.morphAttributes.normal!==void 0,N=s.morphAttributes.color!==void 0,R=s.morphAttributes.position||[],d=s.morphAttributes.normal||[],L=s.morphAttributes.color||[];let F=0;y===!0&&(F=1),M===!0&&(F=2),N===!0&&(F=3);let q=s.attributes.position.count*F,W=1;q>A.maxTextureSize&&(W=Math.ceil(q/A.maxTextureSize),q=A.maxTextureSize);const $=new Float32Array(q*W*4*G),H=new ds($,q,W,G);H.type=PC,H.needsUpdate=!0;const x=F*4;for(let eA=0;eA<G;eA++){const CA=R[eA],QA=d[eA],NA=L[eA],SA=q*W*4*eA;for(let HA=0;HA<CA.count;HA++){const dA=HA*x;y===!0&&(i.fromBufferAttribute(CA,HA),$[SA+dA+0]=i.x,$[SA+dA+1]=i.y,$[SA+dA+2]=i.z,$[SA+dA+3]=0),M===!0&&(i.fromBufferAttribute(QA,HA),$[SA+dA+4]=i.x,$[SA+dA+5]=i.y,$[SA+dA+6]=i.z,$[SA+dA+7]=0),N===!0&&(i.fromBufferAttribute(NA,HA),$[SA+dA+8]=i.x,$[SA+dA+9]=i.y,$[SA+dA+10]=i.z,$[SA+dA+11]=NA.itemSize===4?i.w:1)}}w={count:G,texture:H,size:new cA(q,W)},B.set(s,w),s.addEventListener("dispose",IA)}let c=0;for(let y=0;y<D.length;y++)c+=D[y];const k=s.morphTargetsRelative?1:1-c;n.getUniforms().setValue(Q,"morphTargetBaseInfluence",k),n.getUniforms().setValue(Q,"morphTargetInfluences",D),n.getUniforms().setValue(Q,"morphTargetsTexture",w.texture,I),n.getUniforms().setValue(Q,"morphTargetsTextureSize",w.size)}else{const l=D===void 0?0:D.length;let G=g[s.id];if(G===void 0||G.length!==l){G=[];for(let M=0;M<l;M++)G[M]=[M,0];g[s.id]=G}for(let M=0;M<l;M++){const N=G[M];N[0]=M,N[1]=D[M]}G.sort(BL);for(let M=0;M<8;M++)M<l&&G[M][1]?(E[M][0]=G[M][0],E[M][1]=G[M][1]):(E[M][0]=Number.MAX_SAFE_INTEGER,E[M][1]=0);E.sort(CL);const w=s.morphAttributes.position,c=s.morphAttributes.normal;let k=0;for(let M=0;M<8;M++){const N=E[M],R=N[0],d=N[1];R!==Number.MAX_SAFE_INTEGER&&d?(w&&s.getAttribute("morphTarget"+M)!==w[R]&&s.setAttribute("morphTarget"+M,w[R]),c&&s.getAttribute("morphNormal"+M)!==c[R]&&s.setAttribute("morphNormal"+M,c[R]),C[M]=d,k+=d):(w&&s.hasAttribute("morphTarget"+M)===!0&&s.deleteAttribute("morphTarget"+M),c&&s.hasAttribute("morphNormal"+M)===!0&&s.deleteAttribute("morphNormal"+M),C[M]=0)}const y=s.morphTargetsRelative?1:1-k;n.getUniforms().setValue(Q,"morphTargetBaseInfluence",y),n.getUniforms().setValue(Q,"morphTargetInfluences",C)}}return{update:e}}function iL(Q,A,I,g){let C=new WeakMap;function B(e){const t=g.render.frame,s=e.geometry,n=A.get(e,s);return C.get(n)!==t&&(A.update(n),C.set(n,t)),e.isInstancedMesh&&(e.hasEventListener("dispose",E)===!1&&e.addEventListener("dispose",E),I.update(e.instanceMatrix,Q.ARRAY_BUFFER),e.instanceColor!==null&&I.update(e.instanceColor,Q.ARRAY_BUFFER)),n}function i(){C=new WeakMap}function E(e){const t=e.target;t.removeEventListener("dispose",E),I.remove(t.instanceMatrix),t.instanceColor!==null&&I.remove(t.instanceColor)}return{update:B,dispose:i}}const Rk=new rg,Jk=new ds,dk=new ps,pk=new Pe,UG=[],NG=[],KG=new Float32Array(16),FG=new Float32Array(9),RG=new Float32Array(4);function So(Q,A,I){const g=Q[0];if(g<=0||g>0)return Q;const C=A*I;let B=UG[C];if(B===void 0&&(B=new Float32Array(C),UG[C]=B),A!==0){g.toArray(B,0);for(let i=1,E=0;i!==A;++i)E+=I,Q[i].toArray(B,E)}return B}function Tg(Q,A){if(Q.length!==A.length)return!1;for(let I=0,g=Q.length;I<g;I++)if(Q[I]!==A[I])return!1;return!0}function xg(Q,A){for(let I=0,g=A.length;I<g;I++)Q[I]=A[I]}function us(Q,A){let I=NG[A];I===void 0&&(I=new Int32Array(A),NG[A]=I);for(let g=0;g!==A;++g)I[g]=Q.allocateTextureUnit();return I}function EL(Q,A){const I=this.cache;I[0]!==A&&(Q.uniform1f(this.addr,A),I[0]=A)}function oL(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(Q.uniform2f(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(Tg(I,A))return;Q.uniform2fv(this.addr,A),xg(I,A)}}function eL(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(Q.uniform3f(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else if(A.r!==void 0)(I[0]!==A.r||I[1]!==A.g||I[2]!==A.b)&&(Q.uniform3f(this.addr,A.r,A.g,A.b),I[0]=A.r,I[1]=A.g,I[2]=A.b);else{if(Tg(I,A))return;Q.uniform3fv(this.addr,A),xg(I,A)}}function tL(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(Q.uniform4f(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(Tg(I,A))return;Q.uniform4fv(this.addr,A),xg(I,A)}}function aL(Q,A){const I=this.cache,g=A.elements;if(g===void 0){if(Tg(I,A))return;Q.uniformMatrix2fv(this.addr,!1,A),xg(I,A)}else{if(Tg(I,g))return;RG.set(g),Q.uniformMatrix2fv(this.addr,!1,RG),xg(I,g)}}function sL(Q,A){const I=this.cache,g=A.elements;if(g===void 0){if(Tg(I,A))return;Q.uniformMatrix3fv(this.addr,!1,A),xg(I,A)}else{if(Tg(I,g))return;FG.set(g),Q.uniformMatrix3fv(this.addr,!1,FG),xg(I,g)}}function nL(Q,A){const I=this.cache,g=A.elements;if(g===void 0){if(Tg(I,A))return;Q.uniformMatrix4fv(this.addr,!1,A),xg(I,A)}else{if(Tg(I,g))return;KG.set(g),Q.uniformMatrix4fv(this.addr,!1,KG),xg(I,g)}}function DL(Q,A){const I=this.cache;I[0]!==A&&(Q.uniform1i(this.addr,A),I[0]=A)}function rL(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(Q.uniform2i(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(Tg(I,A))return;Q.uniform2iv(this.addr,A),xg(I,A)}}function hL(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(Q.uniform3i(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else{if(Tg(I,A))return;Q.uniform3iv(this.addr,A),xg(I,A)}}function cL(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(Q.uniform4i(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(Tg(I,A))return;Q.uniform4iv(this.addr,A),xg(I,A)}}function lL(Q,A){const I=this.cache;I[0]!==A&&(Q.uniform1ui(this.addr,A),I[0]=A)}function wL(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(Q.uniform2ui(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(Tg(I,A))return;Q.uniform2uiv(this.addr,A),xg(I,A)}}function GL(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(Q.uniform3ui(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else{if(Tg(I,A))return;Q.uniform3uiv(this.addr,A),xg(I,A)}}function SL(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(Q.uniform4ui(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(Tg(I,A))return;Q.uniform4uiv(this.addr,A),xg(I,A)}}function yL(Q,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(Q.uniform1i(this.addr,C),g[0]=C),I.setTexture2D(A||Rk,C)}function kL(Q,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(Q.uniform1i(this.addr,C),g[0]=C),I.setTexture3D(A||dk,C)}function ML(Q,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(Q.uniform1i(this.addr,C),g[0]=C),I.setTextureCube(A||pk,C)}function UL(Q,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(Q.uniform1i(this.addr,C),g[0]=C),I.setTexture2DArray(A||Jk,C)}function NL(Q){switch(Q){case 5126:return EL;case 35664:return oL;case 35665:return eL;case 35666:return tL;case 35674:return aL;case 35675:return sL;case 35676:return nL;case 5124:case 35670:return DL;case 35667:case 35671:return rL;case 35668:case 35672:return hL;case 35669:case 35673:return cL;case 5125:return lL;case 36294:return wL;case 36295:return GL;case 36296:return SL;case 35678:case 36198:case 36298:case 36306:case 35682:return yL;case 35679:case 36299:case 36307:return kL;case 35680:case 36300:case 36308:case 36293:return ML;case 36289:case 36303:case 36311:case 36292:return UL}}function KL(Q,A){Q.uniform1fv(this.addr,A)}function FL(Q,A){const I=So(A,this.size,2);Q.uniform2fv(this.addr,I)}function RL(Q,A){const I=So(A,this.size,3);Q.uniform3fv(this.addr,I)}function JL(Q,A){const I=So(A,this.size,4);Q.uniform4fv(this.addr,I)}function dL(Q,A){const I=So(A,this.size,4);Q.uniformMatrix2fv(this.addr,!1,I)}function pL(Q,A){const I=So(A,this.size,9);Q.uniformMatrix3fv(this.addr,!1,I)}function fL(Q,A){const I=So(A,this.size,16);Q.uniformMatrix4fv(this.addr,!1,I)}function qL(Q,A){Q.uniform1iv(this.addr,A)}function uL(Q,A){Q.uniform2iv(this.addr,A)}function LL(Q,A){Q.uniform3iv(this.addr,A)}function YL(Q,A){Q.uniform4iv(this.addr,A)}function HL(Q,A){Q.uniform1uiv(this.addr,A)}function mL(Q,A){Q.uniform2uiv(this.addr,A)}function bL(Q,A){Q.uniform3uiv(this.addr,A)}function TL(Q,A){Q.uniform4uiv(this.addr,A)}function xL(Q,A,I){const g=this.cache,C=A.length,B=us(I,C);Tg(g,B)||(Q.uniform1iv(this.addr,B),xg(g,B));for(let i=0;i!==C;++i)I.setTexture2D(A[i]||Rk,B[i])}function OL(Q,A,I){const g=this.cache,C=A.length,B=us(I,C);Tg(g,B)||(Q.uniform1iv(this.addr,B),xg(g,B));for(let i=0;i!==C;++i)I.setTexture3D(A[i]||dk,B[i])}function vL(Q,A,I){const g=this.cache,C=A.length,B=us(I,C);Tg(g,B)||(Q.uniform1iv(this.addr,B),xg(g,B));for(let i=0;i!==C;++i)I.setTextureCube(A[i]||pk,B[i])}function PL(Q,A,I){const g=this.cache,C=A.length,B=us(I,C);Tg(g,B)||(Q.uniform1iv(this.addr,B),xg(g,B));for(let i=0;i!==C;++i)I.setTexture2DArray(A[i]||Jk,B[i])}function ZL(Q){switch(Q){case 5126:return KL;case 35664:return FL;case 35665:return RL;case 35666:return JL;case 35674:return dL;case 35675:return pL;case 35676:return fL;case 5124:case 35670:return qL;case 35667:case 35671:return uL;case 35668:case 35672:return LL;case 35669:case 35673:return YL;case 5125:return HL;case 36294:return mL;case 36295:return bL;case 36296:return TL;case 35678:case 36198:case 36298:case 36306:case 35682:return xL;case 35679:case 36299:case 36307:return OL;case 35680:case 36300:case 36308:case 36293:return vL;case 36289:case 36303:case 36311:case 36292:return PL}}class WL{constructor(A,I,g){this.id=A,this.addr=g,this.cache=[],this.setValue=NL(I.type)}}class _L{constructor(A,I,g){this.id=A,this.addr=g,this.cache=[],this.size=I.size,this.setValue=ZL(I.type)}}class jL{constructor(A){this.id=A,this.seq=[],this.map={}}setValue(A,I,g){const C=this.seq;for(let B=0,i=C.length;B!==i;++B){const E=C[B];E.setValue(A,I[E.id],g)}}}const LD=/(\w+)(\])?(\[|\.)?/g;function JG(Q,A){Q.seq.push(A),Q.map[A.id]=A}function VL(Q,A,I){const g=Q.name,C=g.length;for(LD.lastIndex=0;;){const B=LD.exec(g),i=LD.lastIndex;let E=B[1];const e=B[2]==="]",t=B[3];if(e&&(E=E|0),t===void 0||t==="["&&i+2===C){JG(I,t===void 0?new WL(E,Q,A):new _L(E,Q,A));break}else{let n=I.map[E];n===void 0&&(n=new jL(E),JG(I,n)),I=n}}}class Xa{constructor(A,I){this.seq=[],this.map={};const g=A.getProgramParameter(I,A.ACTIVE_UNIFORMS);for(let C=0;C<g;++C){const B=A.getActiveUniform(I,C),i=A.getUniformLocation(I,B.name);VL(B,i,this)}}setValue(A,I,g,C){const B=this.map[I];B!==void 0&&B.setValue(A,g,C)}setOptional(A,I,g){const C=I[g];C!==void 0&&this.setValue(A,g,C)}static upload(A,I,g,C){for(let B=0,i=I.length;B!==i;++B){const E=I[B],e=g[E.id];e.needsUpdate!==!1&&E.setValue(A,e.value,C)}}static seqWithValue(A,I){const g=[];for(let C=0,B=A.length;C!==B;++C){const i=A[C];i.id in I&&g.push(i)}return g}}function dG(Q,A,I){const g=Q.createShader(A);return Q.shaderSource(g,I),Q.compileShader(g),g}let XL=0;function zL(Q,A){const I=Q.split(`
`),g=[],C=Math.max(A-6,0),B=Math.min(A+6,I.length);for(let i=C;i<B;i++){const E=i+1;g.push(`${E===A?">":" "} ${E}: ${I[i]}`)}return g.join(`
`)}function $L(Q){switch(Q){case sB:return["Linear","( value )"];case QI:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",Q),["Linear","( value )"]}}function pG(Q,A,I){const g=Q.getShaderParameter(A,Q.COMPILE_STATUS),C=Q.getShaderInfoLog(A).trim();if(g&&C==="")return"";const B=/ERROR: 0:(\d+)/.exec(C);if(B){const i=parseInt(B[1]);return I.toUpperCase()+`

`+C+`

`+zL(Q.getShaderSource(A),i)}else return C}function AY(Q,A){const I=$L(A);return"vec4 "+Q+"( vec4 value ) { return LinearTo"+I[0]+I[1]+"; }"}function IY(Q,A){let I;switch(A){case _y:I="Linear";break;case jy:I="Reinhard";break;case Vy:I="OptimizedCineon";break;case yh:I="ACESFilmic";break;case Xy:I="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",A),I="Linear"}return"vec3 "+Q+"( vec3 color ) { return "+I+"ToneMapping( color ); }"}function gY(Q){return[Q.extensionDerivatives||Q.envMapCubeUVHeight||Q.bumpMap||Q.normalMapTangentSpace||Q.clearcoatNormalMap||Q.flatShading||Q.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(Q.extensionFragDepth||Q.logarithmicDepthBuffer)&&Q.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",Q.extensionDrawBuffers&&Q.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(Q.extensionShaderTextureLOD||Q.envMap||Q.transmission)&&Q.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ae).join(`
`)}function CY(Q){const A=[];for(const I in Q){const g=Q[I];g!==!1&&A.push("#define "+I+" "+g)}return A.join(`
`)}function BY(Q,A){const I={},g=Q.getProgramParameter(A,Q.ACTIVE_ATTRIBUTES);for(let C=0;C<g;C++){const B=Q.getActiveAttrib(A,C),i=B.name;let E=1;B.type===Q.FLOAT_MAT2&&(E=2),B.type===Q.FLOAT_MAT3&&(E=3),B.type===Q.FLOAT_MAT4&&(E=4),I[i]={type:B.type,location:Q.getAttribLocation(A,i),locationSize:E}}return I}function ae(Q){return Q!==""}function fG(Q,A){const I=A.numSpotLightShadows+A.numSpotLightMaps-A.numSpotLightShadowsWithMaps;return Q.replace(/NUM_DIR_LIGHTS/g,A.numDirLights).replace(/NUM_SPOT_LIGHTS/g,A.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,A.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,I).replace(/NUM_RECT_AREA_LIGHTS/g,A.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,A.numPointLights).replace(/NUM_HEMI_LIGHTS/g,A.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,A.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,A.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,A.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,A.numPointLightShadows)}function qG(Q,A){return Q.replace(/NUM_CLIPPING_PLANES/g,A.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,A.numClippingPlanes-A.numClipIntersection)}const QY=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zr(Q){return Q.replace(QY,iY)}function iY(Q,A){const I=UI[A];if(I===void 0)throw new Error("Can not resolve #include <"+A+">");return Zr(I)}const EY=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uG(Q){return Q.replace(EY,oY)}function oY(Q,A,I,g){let C="";for(let B=parseInt(A);B<parseInt(I);B++)C+=g.replace(/\[\s*i\s*\]/g,"[ "+B+" ]").replace(/UNROLLED_LOOP_INDEX/g,B);return C}function LG(Q){let A="precision "+Q.precision+` float;
precision `+Q.precision+" int;";return Q.precision==="highp"?A+=`
#define HIGH_PRECISION`:Q.precision==="mediump"?A+=`
#define MEDIUM_PRECISION`:Q.precision==="lowp"&&(A+=`
#define LOW_PRECISION`),A}function eY(Q){let A="SHADOWMAP_TYPE_BASIC";return Q.shadowMapType===wh?A="SHADOWMAP_TYPE_PCF":Q.shadowMapType===Ks?A="SHADOWMAP_TYPE_PCF_SOFT":Q.shadowMapType===TB&&(A="SHADOWMAP_TYPE_VSM"),A}function tY(Q){let A="ENVMAP_TYPE_CUBE";if(Q.envMap)switch(Q.envMapMode){case Ii:case gi:A="ENVMAP_TYPE_CUBE";break;case wo:A="ENVMAP_TYPE_CUBE_UV";break}return A}function aY(Q){let A="ENVMAP_MODE_REFLECTION";if(Q.envMap)switch(Q.envMapMode){case gi:A="ENVMAP_MODE_REFRACTION";break}return A}function sY(Q){let A="ENVMAP_BLENDING_NONE";if(Q.envMap)switch(Q.combine){case xe:A="ENVMAP_BLENDING_MULTIPLY";break;case Zy:A="ENVMAP_BLENDING_MIX";break;case Wy:A="ENVMAP_BLENDING_ADD";break}return A}function nY(Q){const A=Q.envMapCubeUVHeight;if(A===null)return null;const I=Math.log2(A)-2,g=1/A;return{texelWidth:1/(3*Math.max(Math.pow(2,I),7*16)),texelHeight:g,maxMip:I}}function DY(Q,A,I,g){const C=Q.getContext(),B=I.defines;let i=I.vertexShader,E=I.fragmentShader;const e=eY(I),t=tY(I),s=aY(I),n=sY(I),D=nY(I),r=I.isWebGL2?"":gY(I),l=CY(B),G=C.createProgram();let w,c,k=I.glslVersion?"#version "+I.glslVersion+`
`:"";I.isRawShaderMaterial?(w=[l].filter(ae).join(`
`),w.length>0&&(w+=`
`),c=[r,l].filter(ae).join(`
`),c.length>0&&(c+=`
`)):(w=[LG(I),"#define SHADER_NAME "+I.shaderName,l,I.instancing?"#define USE_INSTANCING":"",I.instancingColor?"#define USE_INSTANCING_COLOR":"",I.useFog&&I.fog?"#define USE_FOG":"",I.useFog&&I.fogExp2?"#define FOG_EXP2":"",I.map?"#define USE_MAP":"",I.envMap?"#define USE_ENVMAP":"",I.envMap?"#define "+s:"",I.lightMap?"#define USE_LIGHTMAP":"",I.aoMap?"#define USE_AOMAP":"",I.bumpMap?"#define USE_BUMPMAP":"",I.normalMap?"#define USE_NORMALMAP":"",I.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",I.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",I.displacementMap?"#define USE_DISPLACEMENTMAP":"",I.emissiveMap?"#define USE_EMISSIVEMAP":"",I.clearcoatMap?"#define USE_CLEARCOATMAP":"",I.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",I.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",I.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",I.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",I.specularMap?"#define USE_SPECULARMAP":"",I.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",I.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",I.roughnessMap?"#define USE_ROUGHNESSMAP":"",I.metalnessMap?"#define USE_METALNESSMAP":"",I.alphaMap?"#define USE_ALPHAMAP":"",I.transmission?"#define USE_TRANSMISSION":"",I.transmissionMap?"#define USE_TRANSMISSIONMAP":"",I.thicknessMap?"#define USE_THICKNESSMAP":"",I.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",I.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",I.mapUv?"#define MAP_UV "+I.mapUv:"",I.alphaMapUv?"#define ALPHAMAP_UV "+I.alphaMapUv:"",I.lightMapUv?"#define LIGHTMAP_UV "+I.lightMapUv:"",I.aoMapUv?"#define AOMAP_UV "+I.aoMapUv:"",I.emissiveMapUv?"#define EMISSIVEMAP_UV "+I.emissiveMapUv:"",I.bumpMapUv?"#define BUMPMAP_UV "+I.bumpMapUv:"",I.normalMapUv?"#define NORMALMAP_UV "+I.normalMapUv:"",I.displacementMapUv?"#define DISPLACEMENTMAP_UV "+I.displacementMapUv:"",I.metalnessMapUv?"#define METALNESSMAP_UV "+I.metalnessMapUv:"",I.roughnessMapUv?"#define ROUGHNESSMAP_UV "+I.roughnessMapUv:"",I.clearcoatMapUv?"#define CLEARCOATMAP_UV "+I.clearcoatMapUv:"",I.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+I.clearcoatNormalMapUv:"",I.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+I.clearcoatRoughnessMapUv:"",I.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+I.iridescenceMapUv:"",I.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+I.iridescenceThicknessMapUv:"",I.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+I.sheenColorMapUv:"",I.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+I.sheenRoughnessMapUv:"",I.specularMapUv?"#define SPECULARMAP_UV "+I.specularMapUv:"",I.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+I.specularColorMapUv:"",I.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+I.specularIntensityMapUv:"",I.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+I.transmissionMapUv:"",I.thicknessMapUv?"#define THICKNESSMAP_UV "+I.thicknessMapUv:"",I.vertexTangents?"#define USE_TANGENT":"",I.vertexColors?"#define USE_COLOR":"",I.vertexAlphas?"#define USE_COLOR_ALPHA":"",I.vertexUv1s?"#define USE_UV1":"",I.vertexUv2s?"#define USE_UV2":"",I.vertexUv3s?"#define USE_UV3":"",I.pointsUvs?"#define USE_POINTS_UV":"",I.flatShading?"#define FLAT_SHADED":"",I.skinning?"#define USE_SKINNING":"",I.morphTargets?"#define USE_MORPHTARGETS":"",I.morphNormals&&I.flatShading===!1?"#define USE_MORPHNORMALS":"",I.morphColors&&I.isWebGL2?"#define USE_MORPHCOLORS":"",I.morphTargetsCount>0&&I.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",I.morphTargetsCount>0&&I.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+I.morphTextureStride:"",I.morphTargetsCount>0&&I.isWebGL2?"#define MORPHTARGETS_COUNT "+I.morphTargetsCount:"",I.doubleSided?"#define DOUBLE_SIDED":"",I.flipSided?"#define FLIP_SIDED":"",I.shadowMapEnabled?"#define USE_SHADOWMAP":"",I.shadowMapEnabled?"#define "+e:"",I.sizeAttenuation?"#define USE_SIZEATTENUATION":"",I.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",I.logarithmicDepthBuffer&&I.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ae).join(`
`),c=[r,LG(I),"#define SHADER_NAME "+I.shaderName,l,I.useFog&&I.fog?"#define USE_FOG":"",I.useFog&&I.fogExp2?"#define FOG_EXP2":"",I.map?"#define USE_MAP":"",I.matcap?"#define USE_MATCAP":"",I.envMap?"#define USE_ENVMAP":"",I.envMap?"#define "+t:"",I.envMap?"#define "+s:"",I.envMap?"#define "+n:"",D?"#define CUBEUV_TEXEL_WIDTH "+D.texelWidth:"",D?"#define CUBEUV_TEXEL_HEIGHT "+D.texelHeight:"",D?"#define CUBEUV_MAX_MIP "+D.maxMip+".0":"",I.lightMap?"#define USE_LIGHTMAP":"",I.aoMap?"#define USE_AOMAP":"",I.bumpMap?"#define USE_BUMPMAP":"",I.normalMap?"#define USE_NORMALMAP":"",I.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",I.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",I.emissiveMap?"#define USE_EMISSIVEMAP":"",I.clearcoat?"#define USE_CLEARCOAT":"",I.clearcoatMap?"#define USE_CLEARCOATMAP":"",I.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",I.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",I.iridescence?"#define USE_IRIDESCENCE":"",I.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",I.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",I.specularMap?"#define USE_SPECULARMAP":"",I.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",I.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",I.roughnessMap?"#define USE_ROUGHNESSMAP":"",I.metalnessMap?"#define USE_METALNESSMAP":"",I.alphaMap?"#define USE_ALPHAMAP":"",I.alphaTest?"#define USE_ALPHATEST":"",I.sheen?"#define USE_SHEEN":"",I.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",I.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",I.transmission?"#define USE_TRANSMISSION":"",I.transmissionMap?"#define USE_TRANSMISSIONMAP":"",I.thicknessMap?"#define USE_THICKNESSMAP":"",I.vertexTangents?"#define USE_TANGENT":"",I.vertexColors||I.instancingColor?"#define USE_COLOR":"",I.vertexAlphas?"#define USE_COLOR_ALPHA":"",I.vertexUv1s?"#define USE_UV1":"",I.vertexUv2s?"#define USE_UV2":"",I.vertexUv3s?"#define USE_UV3":"",I.pointsUvs?"#define USE_POINTS_UV":"",I.gradientMap?"#define USE_GRADIENTMAP":"",I.flatShading?"#define FLAT_SHADED":"",I.doubleSided?"#define DOUBLE_SIDED":"",I.flipSided?"#define FLIP_SIDED":"",I.shadowMapEnabled?"#define USE_SHADOWMAP":"",I.shadowMapEnabled?"#define "+e:"",I.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",I.useLegacyLights?"#define LEGACY_LIGHTS":"",I.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",I.logarithmicDepthBuffer&&I.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",I.toneMapping!==WB?"#define TONE_MAPPING":"",I.toneMapping!==WB?UI.tonemapping_pars_fragment:"",I.toneMapping!==WB?IY("toneMapping",I.toneMapping):"",I.dithering?"#define DITHERING":"",I.opaque?"#define OPAQUE":"",UI.encodings_pars_fragment,AY("linearToOutputTexel",I.outputColorSpace),I.useDepthPacking?"#define DEPTH_PACKING "+I.depthPacking:"",`
`].filter(ae).join(`
`)),i=Zr(i),i=fG(i,I),i=qG(i,I),E=Zr(E),E=fG(E,I),E=qG(E,I),i=uG(i),E=uG(E),I.isWebGL2&&I.isRawShaderMaterial!==!0&&(k=`#version 300 es
`,w=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+w,c=["#define varying in",I.glslVersion===Or?"":"layout(location = 0) out highp vec4 pc_fragColor;",I.glslVersion===Or?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);const y=k+w+i,M=k+c+E,N=dG(C,C.VERTEX_SHADER,y),R=dG(C,C.FRAGMENT_SHADER,M);if(C.attachShader(G,N),C.attachShader(G,R),I.index0AttributeName!==void 0?C.bindAttribLocation(G,0,I.index0AttributeName):I.morphTargets===!0&&C.bindAttribLocation(G,0,"position"),C.linkProgram(G),Q.debug.checkShaderErrors){const F=C.getProgramInfoLog(G).trim(),q=C.getShaderInfoLog(N).trim(),W=C.getShaderInfoLog(R).trim();let $=!0,H=!0;if(C.getProgramParameter(G,C.LINK_STATUS)===!1)if($=!1,typeof Q.debug.onShaderError=="function")Q.debug.onShaderError(C,G,N,R);else{const x=pG(C,N,"vertex"),IA=pG(C,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+C.getError()+" - VALIDATE_STATUS "+C.getProgramParameter(G,C.VALIDATE_STATUS)+`

Program Info Log: `+F+`
`+x+`
`+IA)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(q===""||W==="")&&(H=!1);H&&(this.diagnostics={runnable:$,programLog:F,vertexShader:{log:q,prefix:w},fragmentShader:{log:W,prefix:c}})}C.deleteShader(N),C.deleteShader(R);let d;this.getUniforms=function(){return d===void 0&&(d=new Xa(C,G)),d};let L;return this.getAttributes=function(){return L===void 0&&(L=BY(C,G)),L},this.destroy=function(){g.releaseStatesOfProgram(this),C.deleteProgram(G),this.program=void 0},this.name=I.shaderName,this.id=XL++,this.cacheKey=A,this.usedTimes=1,this.program=G,this.vertexShader=N,this.fragmentShader=R,this}let rY=0;class hY{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(A){const I=A.vertexShader,g=A.fragmentShader,C=this._getShaderStage(I),B=this._getShaderStage(g),i=this._getShaderCacheForMaterial(A);return i.has(C)===!1&&(i.add(C),C.usedTimes++),i.has(B)===!1&&(i.add(B),B.usedTimes++),this}remove(A){const I=this.materialCache.get(A);for(const g of I)g.usedTimes--,g.usedTimes===0&&this.shaderCache.delete(g.code);return this.materialCache.delete(A),this}getVertexShaderID(A){return this._getShaderStage(A.vertexShader).id}getFragmentShaderID(A){return this._getShaderStage(A.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(A){const I=this.materialCache;let g=I.get(A);return g===void 0&&(g=new Set,I.set(A,g)),g}_getShaderStage(A){const I=this.shaderCache;let g=I.get(A);return g===void 0&&(g=new cY(A),I.set(A,g)),g}}class cY{constructor(A){this.id=rY++,this.code=A,this.usedTimes=0}}function lY(Q,A,I,g,C,B,i){const E=new fs,e=new hY,t=[],s=C.isWebGL2,n=C.logarithmicDepthBuffer,D=C.vertexTextures;let r=C.precision;const l={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function G(F){return F===1?"uv1":F===2?"uv2":F===3?"uv3":"uv"}function w(F,q,W,$,H){const x=$.fog,IA=H.geometry,eA=F.isMeshStandardMaterial?$.environment:null,CA=(F.isMeshStandardMaterial?I:A).get(F.envMap||eA),QA=CA&&CA.mapping===wo?CA.image.height:null,NA=l[F.type];F.precision!==null&&(r=C.getMaxPrecision(F.precision),r!==F.precision&&console.warn("THREE.WebGLProgram.getParameters:",F.precision,"not supported, using",r,"instead."));const SA=IA.morphAttributes.position||IA.morphAttributes.normal||IA.morphAttributes.color,HA=SA!==void 0?SA.length:0;let dA=0;IA.morphAttributes.position!==void 0&&(dA=1),IA.morphAttributes.normal!==void 0&&(dA=2),IA.morphAttributes.color!==void 0&&(dA=3);let oA,lA,pA,uA;if(NA){const VI=MB[NA];oA=VI.vertexShader,lA=VI.fragmentShader}else oA=F.vertexShader,lA=F.fragmentShader,e.update(F),pA=e.getVertexShaderID(F),uA=e.getFragmentShaderID(F);const P=Q.getRenderTarget(),zA=H.isInstancedMesh===!0,AI=!!F.map,RA=!!F.matcap,LA=!!CA,yA=!!F.aoMap,tA=!!F.lightMap,rA=!!F.bumpMap,mA=!!F.normalMap,qA=!!F.displacementMap,ZA=!!F.emissiveMap,gI=!!F.metalnessMap,$A=!!F.roughnessMap,oI=F.clearcoat>0,eI=F.iridescence>0,m=F.sheen>0,f=F.transmission>0,EA=oI&&!!F.clearcoatMap,kA=oI&&!!F.clearcoatNormalMap,KA=oI&&!!F.clearcoatRoughnessMap,_=eI&&!!F.iridescenceMap,T=eI&&!!F.iridescenceThicknessMap,DA=m&&!!F.sheenColorMap,BA=m&&!!F.sheenRoughnessMap,fA=!!F.specularMap,OA=!!F.specularColorMap,_A=!!F.specularIntensityMap,xA=f&&!!F.transmissionMap,WA=f&&!!F.thicknessMap,tI=!!F.gradientMap,aI=!!F.alphaMap,Bg=F.alphaTest>0,Z=!!F.extensions,aA=!!IA.attributes.uv1,FA=!!IA.attributes.uv2,vA=!!IA.attributes.uv3;return{isWebGL2:s,shaderID:NA,shaderName:F.type,vertexShader:oA,fragmentShader:lA,defines:F.defines,customVertexShaderID:pA,customFragmentShaderID:uA,isRawShaderMaterial:F.isRawShaderMaterial===!0,glslVersion:F.glslVersion,precision:r,instancing:zA,instancingColor:zA&&H.instanceColor!==null,supportsVertexTextures:D,outputColorSpace:P===null?Q.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:sB,map:AI,matcap:RA,envMap:LA,envMapMode:LA&&CA.mapping,envMapCubeUVHeight:QA,aoMap:yA,lightMap:tA,bumpMap:rA,normalMap:mA,displacementMap:D&&qA,emissiveMap:ZA,normalMapObjectSpace:mA&&F.normalMapType===hk,normalMapTangentSpace:mA&&F.normalMapType===ti,metalnessMap:gI,roughnessMap:$A,clearcoat:oI,clearcoatMap:EA,clearcoatNormalMap:kA,clearcoatRoughnessMap:KA,iridescence:eI,iridescenceMap:_,iridescenceThicknessMap:T,sheen:m,sheenColorMap:DA,sheenRoughnessMap:BA,specularMap:fA,specularColorMap:OA,specularIntensityMap:_A,transmission:f,transmissionMap:xA,thicknessMap:WA,gradientMap:tI,opaque:F.transparent===!1&&F.blending===vi,alphaMap:aI,alphaTest:Bg,combine:F.combine,mapUv:AI&&G(F.map.channel),aoMapUv:yA&&G(F.aoMap.channel),lightMapUv:tA&&G(F.lightMap.channel),bumpMapUv:rA&&G(F.bumpMap.channel),normalMapUv:mA&&G(F.normalMap.channel),displacementMapUv:qA&&G(F.displacementMap.channel),emissiveMapUv:ZA&&G(F.emissiveMap.channel),metalnessMapUv:gI&&G(F.metalnessMap.channel),roughnessMapUv:$A&&G(F.roughnessMap.channel),clearcoatMapUv:EA&&G(F.clearcoatMap.channel),clearcoatNormalMapUv:kA&&G(F.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:KA&&G(F.clearcoatRoughnessMap.channel),iridescenceMapUv:_&&G(F.iridescenceMap.channel),iridescenceThicknessMapUv:T&&G(F.iridescenceThicknessMap.channel),sheenColorMapUv:DA&&G(F.sheenColorMap.channel),sheenRoughnessMapUv:BA&&G(F.sheenRoughnessMap.channel),specularMapUv:fA&&G(F.specularMap.channel),specularColorMapUv:OA&&G(F.specularColorMap.channel),specularIntensityMapUv:_A&&G(F.specularIntensityMap.channel),transmissionMapUv:xA&&G(F.transmissionMap.channel),thicknessMapUv:WA&&G(F.thicknessMap.channel),alphaMapUv:aI&&G(F.alphaMap.channel),vertexTangents:mA&&!!IA.attributes.tangent,vertexColors:F.vertexColors,vertexAlphas:F.vertexColors===!0&&!!IA.attributes.color&&IA.attributes.color.itemSize===4,vertexUv1s:aA,vertexUv2s:FA,vertexUv3s:vA,pointsUvs:H.isPoints===!0&&!!IA.attributes.uv&&(AI||aI),fog:!!x,useFog:F.fog===!0,fogExp2:x&&x.isFogExp2,flatShading:F.flatShading===!0,sizeAttenuation:F.sizeAttenuation===!0,logarithmicDepthBuffer:n,skinning:H.isSkinnedMesh===!0,morphTargets:IA.morphAttributes.position!==void 0,morphNormals:IA.morphAttributes.normal!==void 0,morphColors:IA.morphAttributes.color!==void 0,morphTargetsCount:HA,morphTextureStride:dA,numDirLights:q.directional.length,numPointLights:q.point.length,numSpotLights:q.spot.length,numSpotLightMaps:q.spotLightMap.length,numRectAreaLights:q.rectArea.length,numHemiLights:q.hemi.length,numDirLightShadows:q.directionalShadowMap.length,numPointLightShadows:q.pointShadowMap.length,numSpotLightShadows:q.spotShadowMap.length,numSpotLightShadowsWithMaps:q.numSpotLightShadowsWithMaps,numClippingPlanes:i.numPlanes,numClipIntersection:i.numIntersection,dithering:F.dithering,shadowMapEnabled:Q.shadowMap.enabled&&W.length>0,shadowMapType:Q.shadowMap.type,toneMapping:F.toneMapped?Q.toneMapping:WB,useLegacyLights:Q.useLegacyLights,premultipliedAlpha:F.premultipliedAlpha,doubleSided:F.side===UB,flipSided:F.side===wC,useDepthPacking:F.depthPacking>=0,depthPacking:F.depthPacking||0,index0AttributeName:F.index0AttributeName,extensionDerivatives:Z&&F.extensions.derivatives===!0,extensionFragDepth:Z&&F.extensions.fragDepth===!0,extensionDrawBuffers:Z&&F.extensions.drawBuffers===!0,extensionShaderTextureLOD:Z&&F.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:s||g.has("EXT_frag_depth"),rendererExtensionDrawBuffers:s||g.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:s||g.has("EXT_shader_texture_lod"),customProgramCacheKey:F.customProgramCacheKey()}}function c(F){const q=[];if(F.shaderID?q.push(F.shaderID):(q.push(F.customVertexShaderID),q.push(F.customFragmentShaderID)),F.defines!==void 0)for(const W in F.defines)q.push(W),q.push(F.defines[W]);return F.isRawShaderMaterial===!1&&(k(q,F),y(q,F),q.push(Q.outputColorSpace)),q.push(F.customProgramCacheKey),q.join()}function k(F,q){F.push(q.precision),F.push(q.outputColorSpace),F.push(q.envMapMode),F.push(q.envMapCubeUVHeight),F.push(q.mapUv),F.push(q.alphaMapUv),F.push(q.lightMapUv),F.push(q.aoMapUv),F.push(q.bumpMapUv),F.push(q.normalMapUv),F.push(q.displacementMapUv),F.push(q.emissiveMapUv),F.push(q.metalnessMapUv),F.push(q.roughnessMapUv),F.push(q.clearcoatMapUv),F.push(q.clearcoatNormalMapUv),F.push(q.clearcoatRoughnessMapUv),F.push(q.iridescenceMapUv),F.push(q.iridescenceThicknessMapUv),F.push(q.sheenColorMapUv),F.push(q.sheenRoughnessMapUv),F.push(q.specularMapUv),F.push(q.specularColorMapUv),F.push(q.specularIntensityMapUv),F.push(q.transmissionMapUv),F.push(q.thicknessMapUv),F.push(q.combine),F.push(q.fogExp2),F.push(q.sizeAttenuation),F.push(q.morphTargetsCount),F.push(q.morphAttributeCount),F.push(q.numDirLights),F.push(q.numPointLights),F.push(q.numSpotLights),F.push(q.numSpotLightMaps),F.push(q.numHemiLights),F.push(q.numRectAreaLights),F.push(q.numDirLightShadows),F.push(q.numPointLightShadows),F.push(q.numSpotLightShadows),F.push(q.numSpotLightShadowsWithMaps),F.push(q.shadowMapType),F.push(q.toneMapping),F.push(q.numClippingPlanes),F.push(q.numClipIntersection),F.push(q.depthPacking)}function y(F,q){E.disableAll(),q.isWebGL2&&E.enable(0),q.supportsVertexTextures&&E.enable(1),q.instancing&&E.enable(2),q.instancingColor&&E.enable(3),q.matcap&&E.enable(4),q.envMap&&E.enable(5),q.normalMapObjectSpace&&E.enable(6),q.normalMapTangentSpace&&E.enable(7),q.clearcoat&&E.enable(8),q.iridescence&&E.enable(9),q.alphaTest&&E.enable(10),q.vertexColors&&E.enable(11),q.vertexAlphas&&E.enable(12),q.vertexUv1s&&E.enable(13),q.vertexUv2s&&E.enable(14),q.vertexUv3s&&E.enable(15),q.vertexTangents&&E.enable(16),F.push(E.mask),E.disableAll(),q.fog&&E.enable(0),q.useFog&&E.enable(1),q.flatShading&&E.enable(2),q.logarithmicDepthBuffer&&E.enable(3),q.skinning&&E.enable(4),q.morphTargets&&E.enable(5),q.morphNormals&&E.enable(6),q.morphColors&&E.enable(7),q.premultipliedAlpha&&E.enable(8),q.shadowMapEnabled&&E.enable(9),q.useLegacyLights&&E.enable(10),q.doubleSided&&E.enable(11),q.flipSided&&E.enable(12),q.useDepthPacking&&E.enable(13),q.dithering&&E.enable(14),q.transmission&&E.enable(15),q.sheen&&E.enable(16),q.opaque&&E.enable(17),q.pointsUvs&&E.enable(18),F.push(E.mask)}function M(F){const q=l[F.type];let W;if(q){const $=MB[q];W=Uk.clone($.uniforms)}else W=F.uniforms;return W}function N(F,q){let W;for(let $=0,H=t.length;$<H;$++){const x=t[$];if(x.cacheKey===q){W=x,++W.usedTimes;break}}return W===void 0&&(W=new DY(Q,q,F,B),t.push(W)),W}function R(F){if(--F.usedTimes===0){const q=t.indexOf(F);t[q]=t[t.length-1],t.pop(),F.destroy()}}function d(F){e.remove(F)}function L(){e.dispose()}return{getParameters:w,getProgramCacheKey:c,getUniforms:M,acquireProgram:N,releaseProgram:R,releaseShaderCache:d,programs:t,dispose:L}}function wY(){let Q=new WeakMap;function A(B){let i=Q.get(B);return i===void 0&&(i={},Q.set(B,i)),i}function I(B){Q.delete(B)}function g(B,i,E){Q.get(B)[i]=E}function C(){Q=new WeakMap}return{get:A,remove:I,update:g,dispose:C}}function GY(Q,A){return Q.groupOrder!==A.groupOrder?Q.groupOrder-A.groupOrder:Q.renderOrder!==A.renderOrder?Q.renderOrder-A.renderOrder:Q.material.id!==A.material.id?Q.material.id-A.material.id:Q.z!==A.z?Q.z-A.z:Q.id-A.id}function YG(Q,A){return Q.groupOrder!==A.groupOrder?Q.groupOrder-A.groupOrder:Q.renderOrder!==A.renderOrder?Q.renderOrder-A.renderOrder:Q.z!==A.z?A.z-Q.z:Q.id-A.id}function HG(){const Q=[];let A=0;const I=[],g=[],C=[];function B(){A=0,I.length=0,g.length=0,C.length=0}function i(n,D,r,l,G,w){let c=Q[A];return c===void 0?(c={id:n.id,object:n,geometry:D,material:r,groupOrder:l,renderOrder:n.renderOrder,z:G,group:w},Q[A]=c):(c.id=n.id,c.object=n,c.geometry=D,c.material=r,c.groupOrder=l,c.renderOrder=n.renderOrder,c.z=G,c.group=w),A++,c}function E(n,D,r,l,G,w){const c=i(n,D,r,l,G,w);r.transmission>0?g.push(c):r.transparent===!0?C.push(c):I.push(c)}function e(n,D,r,l,G,w){const c=i(n,D,r,l,G,w);r.transmission>0?g.unshift(c):r.transparent===!0?C.unshift(c):I.unshift(c)}function t(n,D){I.length>1&&I.sort(n||GY),g.length>1&&g.sort(D||YG),C.length>1&&C.sort(D||YG)}function s(){for(let n=A,D=Q.length;n<D;n++){const r=Q[n];if(r.id===null)break;r.id=null,r.object=null,r.geometry=null,r.material=null,r.group=null}}return{opaque:I,transmissive:g,transparent:C,init:B,push:E,unshift:e,finish:s,sort:t}}function SY(){let Q=new WeakMap;function A(g,C){const B=Q.get(g);let i;return B===void 0?(i=new HG,Q.set(g,[i])):C>=B.length?(i=new HG,B.push(i)):i=B[C],i}function I(){Q=new WeakMap}return{get:A,dispose:I}}function yY(){const Q={};return{get:function(A){if(Q[A.id]!==void 0)return Q[A.id];let I;switch(A.type){case"DirectionalLight":I={direction:new u,color:new TA};break;case"SpotLight":I={position:new u,direction:new u,color:new TA,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":I={position:new u,color:new TA,distance:0,decay:0};break;case"HemisphereLight":I={direction:new u,skyColor:new TA,groundColor:new TA};break;case"RectAreaLight":I={color:new TA,position:new u,halfWidth:new u,halfHeight:new u};break}return Q[A.id]=I,I}}}function kY(){const Q={};return{get:function(A){if(Q[A.id]!==void 0)return Q[A.id];let I;switch(A.type){case"DirectionalLight":I={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new cA};break;case"SpotLight":I={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new cA};break;case"PointLight":I={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new cA,shadowCameraNear:1,shadowCameraFar:1e3};break}return Q[A.id]=I,I}}}let MY=0;function UY(Q,A){return(A.castShadow?2:0)-(Q.castShadow?2:0)+(A.map?1:0)-(Q.map?1:0)}function NY(Q,A){const I=new yY,g=kY(),C={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let s=0;s<9;s++)C.probe.push(new u);const B=new u,i=new cI,E=new cI;function e(s,n){let D=0,r=0,l=0;for(let W=0;W<9;W++)C.probe[W].set(0,0,0);let G=0,w=0,c=0,k=0,y=0,M=0,N=0,R=0,d=0,L=0;s.sort(UY);const F=n===!0?Math.PI:1;for(let W=0,$=s.length;W<$;W++){const H=s[W],x=H.color,IA=H.intensity,eA=H.distance,CA=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)D+=x.r*IA*F,r+=x.g*IA*F,l+=x.b*IA*F;else if(H.isLightProbe)for(let QA=0;QA<9;QA++)C.probe[QA].addScaledVector(H.sh.coefficients[QA],IA);else if(H.isDirectionalLight){const QA=I.get(H);if(QA.color.copy(H.color).multiplyScalar(H.intensity*F),H.castShadow){const NA=H.shadow,SA=g.get(H);SA.shadowBias=NA.bias,SA.shadowNormalBias=NA.normalBias,SA.shadowRadius=NA.radius,SA.shadowMapSize=NA.mapSize,C.directionalShadow[G]=SA,C.directionalShadowMap[G]=CA,C.directionalShadowMatrix[G]=H.shadow.matrix,M++}C.directional[G]=QA,G++}else if(H.isSpotLight){const QA=I.get(H);QA.position.setFromMatrixPosition(H.matrixWorld),QA.color.copy(x).multiplyScalar(IA*F),QA.distance=eA,QA.coneCos=Math.cos(H.angle),QA.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),QA.decay=H.decay,C.spot[c]=QA;const NA=H.shadow;if(H.map&&(C.spotLightMap[d]=H.map,d++,NA.updateMatrices(H),H.castShadow&&L++),C.spotLightMatrix[c]=NA.matrix,H.castShadow){const SA=g.get(H);SA.shadowBias=NA.bias,SA.shadowNormalBias=NA.normalBias,SA.shadowRadius=NA.radius,SA.shadowMapSize=NA.mapSize,C.spotShadow[c]=SA,C.spotShadowMap[c]=CA,R++}c++}else if(H.isRectAreaLight){const QA=I.get(H);QA.color.copy(x).multiplyScalar(IA),QA.halfWidth.set(H.width*.5,0,0),QA.halfHeight.set(0,H.height*.5,0),C.rectArea[k]=QA,k++}else if(H.isPointLight){const QA=I.get(H);if(QA.color.copy(H.color).multiplyScalar(H.intensity*F),QA.distance=H.distance,QA.decay=H.decay,H.castShadow){const NA=H.shadow,SA=g.get(H);SA.shadowBias=NA.bias,SA.shadowNormalBias=NA.normalBias,SA.shadowRadius=NA.radius,SA.shadowMapSize=NA.mapSize,SA.shadowCameraNear=NA.camera.near,SA.shadowCameraFar=NA.camera.far,C.pointShadow[w]=SA,C.pointShadowMap[w]=CA,C.pointShadowMatrix[w]=H.shadow.matrix,N++}C.point[w]=QA,w++}else if(H.isHemisphereLight){const QA=I.get(H);QA.skyColor.copy(H.color).multiplyScalar(IA*F),QA.groundColor.copy(H.groundColor).multiplyScalar(IA*F),C.hemi[y]=QA,y++}}k>0&&(A.isWebGL2||Q.has("OES_texture_float_linear")===!0?(C.rectAreaLTC1=YA.LTC_FLOAT_1,C.rectAreaLTC2=YA.LTC_FLOAT_2):Q.has("OES_texture_half_float_linear")===!0?(C.rectAreaLTC1=YA.LTC_HALF_1,C.rectAreaLTC2=YA.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),C.ambient[0]=D,C.ambient[1]=r,C.ambient[2]=l;const q=C.hash;(q.directionalLength!==G||q.pointLength!==w||q.spotLength!==c||q.rectAreaLength!==k||q.hemiLength!==y||q.numDirectionalShadows!==M||q.numPointShadows!==N||q.numSpotShadows!==R||q.numSpotMaps!==d)&&(C.directional.length=G,C.spot.length=c,C.rectArea.length=k,C.point.length=w,C.hemi.length=y,C.directionalShadow.length=M,C.directionalShadowMap.length=M,C.pointShadow.length=N,C.pointShadowMap.length=N,C.spotShadow.length=R,C.spotShadowMap.length=R,C.directionalShadowMatrix.length=M,C.pointShadowMatrix.length=N,C.spotLightMatrix.length=R+d-L,C.spotLightMap.length=d,C.numSpotLightShadowsWithMaps=L,q.directionalLength=G,q.pointLength=w,q.spotLength=c,q.rectAreaLength=k,q.hemiLength=y,q.numDirectionalShadows=M,q.numPointShadows=N,q.numSpotShadows=R,q.numSpotMaps=d,C.version=MY++)}function t(s,n){let D=0,r=0,l=0,G=0,w=0;const c=n.matrixWorldInverse;for(let k=0,y=s.length;k<y;k++){const M=s[k];if(M.isDirectionalLight){const N=C.directional[D];N.direction.setFromMatrixPosition(M.matrixWorld),B.setFromMatrixPosition(M.target.matrixWorld),N.direction.sub(B),N.direction.transformDirection(c),D++}else if(M.isSpotLight){const N=C.spot[l];N.position.setFromMatrixPosition(M.matrixWorld),N.position.applyMatrix4(c),N.direction.setFromMatrixPosition(M.matrixWorld),B.setFromMatrixPosition(M.target.matrixWorld),N.direction.sub(B),N.direction.transformDirection(c),l++}else if(M.isRectAreaLight){const N=C.rectArea[G];N.position.setFromMatrixPosition(M.matrixWorld),N.position.applyMatrix4(c),E.identity(),i.copy(M.matrixWorld),i.premultiply(c),E.extractRotation(i),N.halfWidth.set(M.width*.5,0,0),N.halfHeight.set(0,M.height*.5,0),N.halfWidth.applyMatrix4(E),N.halfHeight.applyMatrix4(E),G++}else if(M.isPointLight){const N=C.point[r];N.position.setFromMatrixPosition(M.matrixWorld),N.position.applyMatrix4(c),r++}else if(M.isHemisphereLight){const N=C.hemi[w];N.direction.setFromMatrixPosition(M.matrixWorld),N.direction.transformDirection(c),w++}}}return{setup:e,setupView:t,state:C}}function mG(Q,A){const I=new NY(Q,A),g=[],C=[];function B(){g.length=0,C.length=0}function i(n){g.push(n)}function E(n){C.push(n)}function e(n){I.setup(g,n)}function t(n){I.setupView(g,n)}return{init:B,state:{lightsArray:g,shadowsArray:C,lights:I},setupLights:e,setupLightsView:t,pushLight:i,pushShadow:E}}function KY(Q,A){let I=new WeakMap;function g(B,i=0){const E=I.get(B);let e;return E===void 0?(e=new mG(Q,A),I.set(B,[e])):i>=E.length?(e=new mG(Q,A),E.push(e)):e=E[i],e}function C(){I=new WeakMap}return{get:g,dispose:C}}class fh extends bg{constructor(A){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dk,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(A)}copy(A){return super.copy(A),this.depthPacking=A.depthPacking,this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this}}class qh extends bg{constructor(A){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(A)}copy(A){return super.copy(A),this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this}}const FY=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,RY=`uniform sampler2D shadow_pass;
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
`);this.workerSourceURL=URL.createObjectURL(new Blob([i]))}),this.decoderPending}_getWorker(A,I){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const C=new Worker(this.workerSourceURL);C._callbacks={},C._taskCosts={},C._taskLoad=0,C.postMessage({type:"init",decoderConfig:this.decoderConfig}),C.onmessage=function(B){const i=B.data;switch(i.type){case"decode":C._callbacks[i.id].resolve(i);break;case"error":C._callbacks[i.id].reject(i);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+i.type+'"')}},this.workerPool.push(C)}else this.workerPool.sort(function(C,B){return C._taskLoad>B._taskLoad?-1:1});const g=this.workerPool[this.workerPool.length-1];return g._taskCosts[A]=I,g._taskLoad+=I,g})}_releaseTask(A,I){A._taskLoad-=A._taskCosts[I],delete A._callbacks[I],delete A._taskCosts[I]}debug(){console.log("Task load: ",this.workerPool.map(A=>A._taskLoad))}dispose(){for(let A=0;A<this.workerPool.length;++A)this.workerPool[A].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function RT(){let Q,A;onmessage=function(i){const E=i.data;switch(E.type){case"init":Q=E.decoderConfig,A=new Promise(function(s){Q.onModuleLoaded=function(n){s({draco:n})},DracoDecoderModule(Q)});break;case"decode":const e=E.buffer,t=E.taskConfig;A.then(s=>{const n=s.draco,D=new n.Decoder;try{const r=I(n,D,new Int8Array(e),t),l=r.attributes.map(G=>G.array.buffer);r.index&&l.push(r.index.array.buffer),self.postMessage({type:"decode",id:E.id,geometry:r},l)}catch(r){console.error(r),self.postMessage({type:"error",id:E.id,error:r.message})}finally{n.destroy(D)}});break}};function I(i,E,e,t){const s=t.attributeIDs,n=t.attributeTypes;let D,r;const l=E.GetEncodedGeometryType(e);if(l===i.TRIANGULAR_MESH)D=new i.Mesh,r=E.DecodeArrayToMesh(e,e.byteLength,D);else if(l===i.POINT_CLOUD)D=new i.PointCloud,r=E.DecodeArrayToPointCloud(e,e.byteLength,D);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!r.ok()||D.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+r.error_msg());const G={index:null,attributes:[]};for(const w in s){const c=self[n[w]];let k,y;if(t.useUniqueIDs)y=s[w],k=E.GetAttributeByUniqueId(D,y);else{if(y=E.GetAttributeId(D,i[s[w]]),y===-1)continue;k=E.GetAttribute(D,y)}const M=C(i,E,D,w,c,k);w==="color"&&(M.vertexColorSpace=t.vertexColorSpace),G.attributes.push(M)}return l===i.TRIANGULAR_MESH&&(G.index=g(i,E,D)),i.destroy(D),G}function g(i,E,e){const s=e.num_faces()*3,n=s*4,D=i._malloc(n);E.GetTrianglesUInt32Array(e,n,D);const r=new Uint32Array(i.HEAPF32.buffer,D,s).slice();return i._free(D),{array:r,itemSize:1}}function C(i,E,e,t,s,n){const D=n.num_components(),l=e.num_points()*D,G=l*s.BYTES_PER_ELEMENT,w=B(i,s),c=i._malloc(G);E.GetAttributeDataArrayForAllPoints(e,n,w,G,c);const k=new s(i.HEAPF32.buffer,c,l).slice();return i._free(c),{name:t,array:k,itemSize:D}}function B(i,E){switch(E){case Float32Array:return i.DT_FLOAT32;case Int8Array:return i.DT_INT8;case Int16Array:return i.DT_INT16;case Int32Array:return i.DT_INT32;case Uint8Array:return i.DT_UINT8;case Uint16Array:return i.DT_UINT16;case Uint32Array:return i.DT_UINT32}}}function jS(Q,A){if(A===nk)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),Q;if(A===ss||A===Nh){let I=Q.getIndex();if(I===null){const i=[],E=Q.getAttribute("position");if(E!==void 0){for(let e=0;e<E.count;e++)i.push(e);Q.setIndex(i),I=Q.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),Q}const g=I.count-2,C=[];if(A===ss)for(let i=1;i<=g;i++)C.push(I.getX(0)),C.push(I.getX(i)),C.push(I.getX(i+1));else for(let i=0;i<g;i++)i%2===0?(C.push(I.getX(i)),C.push(I.getX(i+1)),C.push(I.getX(i+2))):(C.push(I.getX(i+2)),C.push(I.getX(i+1)),C.push(I.getX(i)));C.length/3!==g&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const B=Q.clone();return B.setIndex(C),B.clearGroups(),B}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",A),Q}class JT extends tC{constructor(A){super(A),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(I){return new uT(I)}),this.register(function(I){return new xT(I)}),this.register(function(I){return new OT(I)}),this.register(function(I){return new vT(I)}),this.register(function(I){return new YT(I)}),this.register(function(I){return new HT(I)}),this.register(function(I){return new mT(I)}),this.register(function(I){return new bT(I)}),this.register(function(I){return new qT(I)}),this.register(function(I){return new TT(I)}),this.register(function(I){return new LT(I)}),this.register(function(I){return new pT(I)}),this.register(function(I){return new PT(I)}),this.register(function(I){return new ZT(I)})}load(A,I,g,C){const B=this;let i;this.resourcePath!==""?i=this.resourcePath:this.path!==""?i=this.path:i=no.extractUrlBase(A),this.manager.itemStart(A);const E=function(t){C?C(t):console.error(t),B.manager.itemError(A),B.manager.itemEnd(A)},e=new oC(this.manager);e.setPath(this.path),e.setResponseType("arraybuffer"),e.setRequestHeader(this.requestHeader),e.setWithCredentials(this.withCredentials),e.load(A,function(t){try{B.parse(t,i,function(s){I(s),B.manager.itemEnd(A)},E)}catch(s){E(s)}},g,E)}setDRACOLoader(A){return this.dracoLoader=A,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(A){return this.ktx2Loader=A,this}setMeshoptDecoder(A){return this.meshoptDecoder=A,this}register(A){return this.pluginCallbacks.indexOf(A)===-1&&this.pluginCallbacks.push(A),this}unregister(A){return this.pluginCallbacks.indexOf(A)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(A),1),this}parse(A,I,g,C){let B;const i={},E={},e=new TextDecoder;if(typeof A=="string")B=JSON.parse(A);else if(A instanceof ArrayBuffer)if(e.decode(new Uint8Array(A,0,4))===D0){try{i[TI.KHR_BINARY_GLTF]=new WT(A)}catch(n){C&&C(n);return}B=JSON.parse(i[TI.KHR_BINARY_GLTF].content)}else B=JSON.parse(e.decode(A));else B=A;if(B.asset===void 0||B.asset.version[0]<2){C&&C(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const t=new i2(B,{path:I||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});t.fileLoader.setRequestHeader(this.requestHeader);for(let s=0;s<this.pluginCallbacks.length;s++){const n=this.pluginCallbacks[s](t);E[n.name]=n,i[n.name]=!0}if(B.extensionsUsed)for(let s=0;s<B.extensionsUsed.length;++s){const n=B.extensionsUsed[s],D=B.extensionsRequired||[];switch(n){case TI.KHR_MATERIALS_UNLIT:i[n]=new fT;break;case TI.KHR_DRACO_MESH_COMPRESSION:i[n]=new _T(B,this.dracoLoader);break;case TI.KHR_TEXTURE_TRANSFORM:i[n]=new jT;break;case TI.KHR_MESH_QUANTIZATION:i[n]=new VT;break;default:D.indexOf(n)>=0&&E[n]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+n+'".')}}t.setExtensions(i),t.setPlugins(E),t.parse(g,C)}parseAsync(A,I){const g=this;return new Promise(function(C,B){g.parse(A,I,C,B)})}}function dT(){let Q={};return{get:function(A){return Q[A]},add:function(A,I){Q[A]=I},remove:function(A){delete Q[A]},removeAll:function(){Q={}}}}const TI={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class pT{constructor(A){this.parser=A,this.name=TI.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const A=this.parser,I=this.parser.json.nodes||[];for(let g=0,C=I.length;g<C;g++){const B=I[g];B.extensions&&B.extensions[this.name]&&B.extensions[this.name].light!==void 0&&A._addNodeRef(this.cache,B.extensions[this.name].light)}}_loadLight(A){const I=this.parser,g="light:"+A;let C=I.cache.get(g);if(C)return C;const B=I.json,e=((B.extensions&&B.extensions[this.name]||{}).lights||[])[A];let t;const s=new TA(16777215);e.color!==void 0&&s.fromArray(e.color);const n=e.range!==void 0?e.range:0;switch(e.type){case"directional":t=new Cc(s),t.target.position.set(0,0,-1),t.add(t.target);break;case"point":t=new gc(s),t.distance=n;break;case"spot":t=new Ic(s),t.distance=n,e.spot=e.spot||{},e.spot.innerConeAngle=e.spot.innerConeAngle!==void 0?e.spot.innerConeAngle:0,e.spot.outerConeAngle=e.spot.outerConeAngle!==void 0?e.spot.outerConeAngle:Math.PI/4,t.angle=e.spot.outerConeAngle,t.penumbra=1-e.spot.innerConeAngle/e.spot.outerConeAngle,t.target.position.set(0,0,-1),t.add(t.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+e.type)}return t.position.set(0,0,0),t.decay=2,XQ(t,e),e.intensity!==void 0&&(t.intensity=e.intensity),t.name=I.createUniqueName(e.name||"light_"+A),C=Promise.resolve(t),I.cache.add(g,C),C}getDependency(A,I){if(A==="light")return this._loadLight(I)}createNodeAttachment(A){const I=this,g=this.parser,B=g.json.nodes[A],E=(B.extensions&&B.extensions[this.name]||{}).light;return E===void 0?null:this._loadLight(E).then(function(e){return g._getNodeRef(I.cache,E,e)})}}class fT{constructor(){this.name=TI.KHR_MATERIALS_UNLIT}getMaterialType(){return WC}extendParams(A,I,g){const C=[];A.color=new TA(1,1,1),A.opacity=1;const B=I.pbrMetallicRoughness;if(B){if(Array.isArray(B.baseColorFactor)){const i=B.baseColorFactor;A.color.fromArray(i),A.opacity=i[3]}B.baseColorTexture!==void 0&&C.push(g.assignTexture(A,"map",B.baseColorTexture,QI))}return Promise.all(C)}}class qT{constructor(A){this.parser=A,this.name=TI.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(A,I){const C=this.parser.json.materials[A];if(!C.extensions||!C.extensions[this.name])return Promise.resolve();const B=C.extensions[this.name].emissiveStrength;return B!==void 0&&(I.emissiveIntensity=B),Promise.resolve()}}class uT{constructor(A){this.parser=A,this.name=TI.KHR_MATERIALS_CLEARCOAT}getMaterialType(A){const g=this.parser.json.materials[A];return!g.extensions||!g.extensions[this.name]?null:pQ}extendMaterialParams(A,I){const g=this.parser,C=g.json.materials[A];if(!C.extensions||!C.extensions[this.name])return Promise.resolve();const B=[],i=C.extensions[this.name];if(i.clearcoatFactor!==void 0&&(I.clearcoat=i.clearcoatFactor),i.clearcoatTexture!==void 0&&B.push(g.assignTexture(I,"clearcoatMap",i.clearcoatTexture)),i.clearcoatRoughnessFactor!==void 0&&(I.clearcoatRoughness=i.clearcoatRoughnessFactor),i.clearcoatRoughnessTexture!==void 0&&B.push(g.assignTexture(I,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture)),i.clearcoatNormalTexture!==void 0&&(B.push(g.assignTexture(I,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0)){const E=i.clearcoatNormalTexture.scale;I.clearcoatNormalScale=new cA(E,E)}return Promise.all(B)}}class LT{constructor(A){this.parser=A,this.name=TI.KHR_MATERIALS_IRIDESCENCE}getMaterialType(A){const g=this.parser.json.materials[A];return!g.extensions||!g.extensions[this.name]?null:pQ}extendMaterialParams(A,I){const g=this.parser,C=g.json.materials[A];if(!C.extensions||!C.extensions[this.name])return Promise.resolve();const B=[],i=C.extensions[this.name];return i.iridescenceFactor!==void 0&&(I.iridescence=i.iridescenceFactor),i.iridescenceTexture!==void 0&&B.push(g.assignTexture(I,"iridescenceMap",i.iridescenceTexture)),i.iridescenceIor!==void 0&&(I.iridescenceIOR=i.iridescenceIor),I.iridescenceThicknessRange===void 0&&(I.iridescenceThicknessRange=[100,400]),i.iridescenceThicknessMinimum!==void 0&&(I.iridescenceThicknessRange[0]=i.iridescenceThicknessMinimum),i.iridescenceThicknessMaximum!==void 0&&(I.iridescenceThicknessRange[1]=i.iridescenceThicknessMaximum),i.iridescenceThicknessTexture!==void 0&&B.push(g.assignTexture(I,"iridescenceThicknessMap",i.iridescenceThicknessTexture)),Promise.all(B)}}class YT{constructor(A){this.parser=A,this.name=TI.KHR_MATERIALS_SHEEN}getMaterialType(A){const g=this.parser.json.materials[A];return!g.extensions||!g.extensions[this.name]?null:pQ}extendMaterialParams(A,I){const g=this.parser,C=g.json.materials[A];if(!C.extensions||!C.extensions[this.name])return Promise.resolve();const B=[];I.sheenColor=new TA(0,0,0),I.sheenRoughness=0,I.sheen=1;const i=C.extensions[this.name];return i.sheenColorFactor!==void 0&&I.sheenColor.fromArray(i.sheenColorFactor),i.sheenRoughnessFactor!==void 0&&(I.sheenRoughness=i.sheenRoughnessFactor),i.sheenColorTexture!==void 0&&B.push(g.assignTexture(I,"sheenColorMap",i.sheenColorTexture,QI)),i.sheenRoughnessTexture!==void 0&&B.push(g.assignTexture(I,"sheenRoughnessMap",i.sheenRoughnessTexture)),Promise.all(B)}}class HT{constructor(A){this.parser=A,this.name=TI.KHR_MATERIALS_TRANSMISSION}getMaterialType(A){const g=this.parser.json.materials[A];return!g.extensions||!g.extensions[this.name]?null:pQ}extendMaterialParams(A,I){const g=this.parser,C=g.json.materials[A];if(!C.extensions||!C.extensions[this.name])return Promise.resolve();const B=[],i=C.extensions[this.name];return i.transmissionFactor!==void 0&&(I.transmission=i.transmissionFactor),i.transmissionTexture!==void 0&&B.push(g.assignTexture(I,"transmissionMap",i.transmissionTexture)),Promise.all(B)}}class mT{constructor(A){this.parser=A,this.name=TI.KHR_MATERIALS_VOLUME}getMaterialType(A){const g=this.parser.json.materials[A];return!g.extensions||!g.extensions[this.name]?null:pQ}extendMaterialParams(A,I){const g=this.parser,C=g.json.materials[A];if(!C.extensions||!C.extensions[this.name])return Promise.resolve();const B=[],i=C.extensions[this.name];I.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0&&B.push(g.assignTexture(I,"thicknessMap",i.thicknessTexture)),I.attenuationDistance=i.attenuationDistance||1/0;const E=i.attenuationColor||[1,1,1];return I.attenuationColor=new TA(E[0],E[1],E[2]),Promise.all(B)}}class bT{constructor(A){this.parser=A,this.name=TI.KHR_MATERIALS_IOR}getMaterialType(A){const g=this.parser.json.materials[A];return!g.extensions||!g.extensions[this.name]?null:pQ}extendMaterialParams(A,I){const C=this.parser.json.materials[A];if(!C.extensions||!C.extensions[this.name])return Promise.resolve();const B=C.extensions[this.name];return I.ior=B.ior!==void 0?B.ior:1.5,Promise.resolve()}}class TT{constructor(A){this.parser=A,this.name=TI.KHR_MATERIALS_SPECULAR}getMaterialType(A){const g=this.parser.json.materials[A];return!g.extensions||!g.extensions[this.name]?null:pQ}extendMaterialParams(A,I){const g=this.parser,C=g.json.materials[A];if(!C.extensions||!C.extensions[this.name])return Promise.resolve();const B=[],i=C.extensions[this.name];I.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0&&B.push(g.assignTexture(I,"specularIntensityMap",i.specularTexture));const E=i.specularColorFactor||[1,1,1];return I.specularColor=new TA(E[0],E[1],E[2]),i.specularColorTexture!==void 0&&B.push(g.assignTexture(I,"specularColorMap",i.specularColorTexture,QI)),Promise.all(B)}}class xT{constructor(A){this.parser=A,this.name=TI.KHR_TEXTURE_BASISU}loadTexture(A){const I=this.parser,g=I.json,C=g.textures[A];if(!C.extensions||!C.extensions[this.name])return null;const B=C.extensions[this.name],i=I.options.ktx2Loader;if(!i){if(g.extensionsRequired&&g.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return I.loadTextureImage(A,B.source,i)}}class OT{constructor(A){this.parser=A,this.name=TI.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(A){const I=this.name,g=this.parser,C=g.json,B=C.textures[A];if(!B.extensions||!B.extensions[I])return null;const i=B.extensions[I],E=C.images[i.source];let e=g.textureLoader;if(E.uri){const t=g.options.manager.getHandler(E.uri);t!==null&&(e=t)}return this.detectSupport().then(function(t){if(t)return g.loadTextureImage(A,i.source,e);if(C.extensionsRequired&&C.extensionsRequired.indexOf(I)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return g.loadTexture(A)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(A){const I=new Image;I.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",I.onload=I.onerror=function(){A(I.height===1)}})),this.isSupported}}class vT{constructor(A){this.parser=A,this.name=TI.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(A){const I=this.name,g=this.parser,C=g.json,B=C.textures[A];if(!B.extensions||!B.extensions[I])return null;const i=B.extensions[I],E=C.images[i.source];let e=g.textureLoader;if(E.uri){const t=g.options.manager.getHandler(E.uri);t!==null&&(e=t)}return this.detectSupport().then(function(t){if(t)return g.loadTextureImage(A,i.source,e);if(C.extensionsRequired&&C.extensionsRequired.indexOf(I)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return g.loadTexture(A)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(A){const I=new Image;I.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",I.onload=I.onerror=function(){A(I.height===1)}})),this.isSupported}}class PT{constructor(A){this.name=TI.EXT_MESHOPT_COMPRESSION,this.parser=A}loadBufferView(A){const I=this.parser.json,g=I.bufferViews[A];if(g.extensions&&g.extensions[this.name]){const C=g.extensions[this.name],B=this.parser.getDependency("buffer",C.buffer),i=this.parser.options.meshoptDecoder;if(!i||!i.supported){if(I.extensionsRequired&&I.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return B.then(function(E){const e=C.byteOffset||0,t=C.byteLength||0,s=C.count,n=C.byteStride,D=new Uint8Array(E,e,t);return i.decodeGltfBufferAsync?i.decodeGltfBufferAsync(s,n,D,C.mode,C.filter).then(function(r){return r.buffer}):i.ready.then(function(){const r=new ArrayBuffer(s*n);return i.decodeGltfBuffer(new Uint8Array(r),s,n,D,C.mode,C.filter),r})})}else return null}}class ZT{constructor(A){this.name=TI.EXT_MESH_GPU_INSTANCING,this.parser=A}createNodeMesh(A){const I=this.parser.json,g=I.nodes[A];if(!g.extensions||!g.extensions[this.name]||g.mesh===void 0)return null;const C=I.meshes[g.mesh];for(const t of C.primitives)if(t.mode!==eB.TRIANGLES&&t.mode!==eB.TRIANGLE_STRIP&&t.mode!==eB.TRIANGLE_FAN&&t.mode!==void 0)return null;const i=g.extensions[this.name].attributes,E=[],e={};for(const t in i)E.push(this.parser.getDependency("accessor",i[t]).then(s=>(e[t]=s,e[t])));return E.length<1?null:(E.push(this.parser.createNodeMesh(A)),Promise.all(E).then(t=>{const s=t.pop(),n=s.isGroup?s.children:[s],D=t[0].count,r=[];for(const l of n){const G=new cI,w=new u,c=new hg,k=new u(1,1,1),y=new mh(l.geometry,l.material,D);for(let M=0;M<D;M++)e.TRANSLATION&&w.fromBufferAttribute(e.TRANSLATION,M),e.ROTATION&&c.fromBufferAttribute(e.ROTATION,M),e.SCALE&&k.fromBufferAttribute(e.SCALE,M),y.setMatrixAt(M,G.compose(w,c,k));for(const M in e)M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&l.geometry.setAttribute(M,e[M]);YI.prototype.copy.call(y,l),this.parser.assignFinalMaterial(y),r.push(y)}return s.isGroup?(s.clear(),s.add(...r),s):r[0]}))}}const D0="glTF",Be=12,VS={JSON:1313821514,BIN:5130562};class WT{constructor(A){this.name=TI.KHR_BINARY_GLTF,this.content=null,this.body=null;const I=new DataView(A,0,Be),g=new TextDecoder;if(this.header={magic:g.decode(new Uint8Array(A.slice(0,4))),version:I.getUint32(4,!0),length:I.getUint32(8,!0)},this.header.magic!==D0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const C=this.header.length-Be,B=new DataView(A,Be);let i=0;for(;i<C;){const E=B.getUint32(i,!0);i+=4;const e=B.getUint32(i,!0);if(i+=4,e===VS.JSON){const t=new Uint8Array(A,Be+i,E);this.content=g.decode(t)}else if(e===VS.BIN){const t=Be+i;this.body=A.slice(t,t+E)}i+=E}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class _T{constructor(A,I){if(!I)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=TI.KHR_DRACO_MESH_COMPRESSION,this.json=A,this.dracoLoader=I,this.dracoLoader.preload()}decodePrimitive(A,I){const g=this.json,C=this.dracoLoader,B=A.extensions[this.name].bufferView,i=A.extensions[this.name].attributes,E={},e={},t={};for(const s in i){const n=ah[s]||s.toLowerCase();E[n]=i[s]}for(const s in A.attributes){const n=ah[s]||s.toLowerCase();if(i[s]!==void 0){const D=g.accessors[A.attributes[s]],r=Co[D.componentType];t[n]=r.name,e[n]=D.normalized===!0}}return I.getDependency("bufferView",B).then(function(s){return new Promise(function(n){C.decodeDracoFile(s,function(D){for(const r in D.attributes){const l=D.attributes[r],G=e[r];G!==void 0&&(l.normalized=G)}n(D)},E,t)})})}}class jT{constructor(){this.name=TI.KHR_TEXTURE_TRANSFORM}extendTexture(A,I){return(I.texCoord===void 0||I.texCoord===A.channel)&&I.offset===void 0&&I.rotation===void 0&&I.scale===void 0||(A=A.clone(),I.texCoord!==void 0&&(A.channel=I.texCoord),I.offset!==void 0&&A.offset.fromArray(I.offset),I.rotation!==void 0&&(A.rotation=I.rotation),I.scale!==void 0&&A.repeat.fromArray(I.scale),A.needsUpdate=!0),A}}class VT{constructor(){this.name=TI.KHR_MESH_QUANTIZATION}}class r0 extends Uo{constructor(A,I,g,C){super(A,I,g,C)}copySampleValue_(A){const I=this.resultBuffer,g=this.sampleValues,C=this.valueSize,B=A*C*3+C;for(let i=0;i!==C;i++)I[i]=g[B+i];return I}interpolate_(A,I,g,C){const B=this.resultBuffer,i=this.sampleValues,E=this.valueSize,e=E*2,t=E*3,s=C-I,n=(g-I)/s,D=n*n,r=D*n,l=A*t,G=l-t,w=-2*r+3*D,c=r-D,k=1-w,y=c-D+n;for(let M=0;M!==E;M++){const N=i[G+M+E],R=i[G+M+e]*s,d=i[l+M+E],L=i[l+M]*s;B[M]=k*N+y*R+w*d+c*L}return B}}const XT=new hg;class zT extends r0{interpolate_(A,I,g,C){const B=super.interpolate_(A,I,g,C);return XT.fromArray(B).normalize().toArray(B),B}}const eB={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Co={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},XS={9728:Sg,9729:Eg,9984:ke,9985:Rs,9986:Io,9987:RB},zS={33071:AC,33648:Qo,10497:Ci},$D={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ah={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},jQ={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},$T={CUBICSPLINE:void 0,LINEAR:Vi,STEP:io},Ar={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function A2(Q){return Q.DefaultMaterial===void 0&&(Q.DefaultMaterial=new it({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:XB})),Q.DefaultMaterial}function Qe(Q,A,I){for(const g in I.extensions)Q[g]===void 0&&(A.userData.gltfExtensions=A.userData.gltfExtensions||{},A.userData.gltfExtensions[g]=I.extensions[g])}function XQ(Q,A){A.extras!==void 0&&(typeof A.extras=="object"?Object.assign(Q.userData,A.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+A.extras))}function I2(Q,A,I){let g=!1,C=!1,B=!1;for(let t=0,s=A.length;t<s;t++){const n=A[t];if(n.POSITION!==void 0&&(g=!0),n.NORMAL!==void 0&&(C=!0),n.COLOR_0!==void 0&&(B=!0),g&&C&&B)break}if(!g&&!C&&!B)return Promise.resolve(Q);const i=[],E=[],e=[];for(let t=0,s=A.length;t<s;t++){const n=A[t];if(g){const D=n.POSITION!==void 0?I.getDependency("accessor",n.POSITION):Q.attributes.position;i.push(D)}if(C){const D=n.NORMAL!==void 0?I.getDependency("accessor",n.NORMAL):Q.attributes.normal;E.push(D)}if(B){const D=n.COLOR_0!==void 0?I.getDependency("accessor",n.COLOR_0):Q.attributes.color;e.push(D)}}return Promise.all([Promise.all(i),Promise.all(E),Promise.all(e)]).then(function(t){const s=t[0],n=t[1],D=t[2];return g&&(Q.morphAttributes.position=s),C&&(Q.morphAttributes.normal=n),B&&(Q.morphAttributes.color=D),Q.morphTargetsRelative=!0,Q})}function g2(Q,A){if(Q.updateMorphTargets(),A.weights!==void 0)for(let I=0,g=A.weights.length;I<g;I++)Q.morphTargetInfluences[I]=A.weights[I];if(A.extras&&Array.isArray(A.extras.targetNames)){const I=A.extras.targetNames;if(Q.morphTargetInfluences.length===I.length){Q.morphTargetDictionary={};for(let g=0,C=I.length;g<C;g++)Q.morphTargetDictionary[I[g]]=g}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function C2(Q){const A=Q.extensions&&Q.extensions[TI.KHR_DRACO_MESH_COMPRESSION];let I;return A?I="draco:"+A.bufferView+":"+A.indices+":"+$S(A.attributes):I=Q.indices+":"+$S(Q.attributes)+":"+Q.mode,I}function $S(Q){let A="";const I=Object.keys(Q).sort();for(let g=0,C=I.length;g<C;g++)A+=I[g]+":"+Q[I[g]]+";";return A}function sh(Q){switch(Q){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function B2(Q){return Q.search(/\.jpe?g($|\?)/i)>0||Q.search(/^data\:image\/jpeg/)===0?"image/jpeg":Q.search(/\.webp($|\?)/i)>0||Q.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const Q2=new cI;class i2{constructor(A={},I={}){this.json=A,this.extensions={},this.plugins={},this.options=I,this.cache=new dT,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let g=!1,C=!1,B=-1;typeof navigator<"u"&&(g=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,C=navigator.userAgent.indexOf("Firefox")>-1,B=C?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||g||C&&B<98?this.textureLoader=new $h(this.options.manager):this.textureLoader=new hM(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new oC(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(A){this.extensions=A}setPlugins(A){this.plugins=A}parse(A,I){const g=this,C=this.json,B=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(i){return i._markDefs&&i._markDefs()}),Promise.all(this._invokeAll(function(i){return i.beforeRoot&&i.beforeRoot()})).then(function(){return Promise.all([g.getDependencies("scene"),g.getDependencies("animation"),g.getDependencies("camera")])}).then(function(i){const E={scene:i[0][C.scene||0],scenes:i[0],animations:i[1],cameras:i[2],asset:C.asset,parser:g,userData:{}};Qe(B,E,C),XQ(E,C),Promise.all(g._invokeAll(function(e){return e.afterRoot&&e.afterRoot(E)})).then(function(){A(E)})}).catch(I)}_markDefs(){const A=this.json.nodes||[],I=this.json.skins||[],g=this.json.meshes||[];for(let C=0,B=I.length;C<B;C++){const i=I[C].joints;for(let E=0,e=i.length;E<e;E++)A[i[E]].isBone=!0}for(let C=0,B=A.length;C<B;C++){const i=A[C];i.mesh!==void 0&&(this._addNodeRef(this.meshCache,i.mesh),i.skin!==void 0&&(g[i.mesh].isSkinnedMesh=!0)),i.camera!==void 0&&this._addNodeRef(this.cameraCache,i.camera)}}_addNodeRef(A,I){I!==void 0&&(A.refs[I]===void 0&&(A.refs[I]=A.uses[I]=0),A.refs[I]++)}_getNodeRef(A,I,g){if(A.refs[I]<=1)return g;const C=g.clone(),B=(i,E)=>{const e=this.associations.get(i);e!=null&&this.associations.set(E,e);for(const[t,s]of i.children.entries())B(s,E.children[t])};return B(g,C),C.name+="_instance_"+A.uses[I]++,C}_invokeOne(A){const I=Object.values(this.plugins);I.push(this);for(let g=0;g<I.length;g++){const C=A(I[g]);if(C)return C}return null}_invokeAll(A){const I=Object.values(this.plugins);I.unshift(this);const g=[];for(let C=0;C<I.length;C++){const B=A(I[C]);B&&g.push(B)}return g}getDependency(A,I){const g=A+":"+I;let C=this.cache.get(g);if(!C){switch(A){case"scene":C=this.loadScene(I);break;case"node":C=this._invokeOne(function(B){return B.loadNode&&B.loadNode(I)});break;case"mesh":C=this._invokeOne(function(B){return B.loadMesh&&B.loadMesh(I)});break;case"accessor":C=this.loadAccessor(I);break;case"bufferView":C=this._invokeOne(function(B){return B.loadBufferView&&B.loadBufferView(I)});break;case"buffer":C=this.loadBuffer(I);break;case"material":C=this._invokeOne(function(B){return B.loadMaterial&&B.loadMaterial(I)});break;case"texture":C=this._invokeOne(function(B){return B.loadTexture&&B.loadTexture(I)});break;case"skin":C=this.loadSkin(I);break;case"animation":C=this._invokeOne(function(B){return B.loadAnimation&&B.loadAnimation(I)});break;case"camera":C=this.loadCamera(I);break;default:if(C=this._invokeOne(function(B){return B!=this&&B.getDependency&&B.getDependency(A,I)}),!C)throw new Error("Unknown type: "+A);break}this.cache.add(g,C)}return C}getDependencies(A){let I=this.cache.get(A);if(!I){const g=this,C=this.json[A+(A==="mesh"?"es":"s")]||[];I=Promise.all(C.map(function(B,i){return g.getDependency(A,i)})),this.cache.add(A,I)}return I}loadBuffer(A){const I=this.json.buffers[A],g=this.fileLoader;if(I.type&&I.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+I.type+" buffer type is not supported.");if(I.uri===void 0&&A===0)return Promise.resolve(this.extensions[TI.KHR_BINARY_GLTF].body);const C=this.options;return new Promise(function(B,i){g.load(no.resolveURL(I.uri,C.path),B,void 0,function(){i(new Error('THREE.GLTFLoader: Failed to load buffer "'+I.uri+'".'))})})}loadBufferView(A){const I=this.json.bufferViews[A];return this.getDependency("buffer",I.buffer).then(function(g){const C=I.byteLength||0,B=I.byteOffset||0;return g.slice(B,B+C)})}loadAccessor(A){const I=this,g=this.json,C=this.json.accessors[A];if(C.bufferView===void 0&&C.sparse===void 0){const i=$D[C.type],E=Co[C.componentType],e=C.normalized===!0,t=new E(C.count*i);return Promise.resolve(new PI(t,i,e))}const B=[];return C.bufferView!==void 0?B.push(this.getDependency("bufferView",C.bufferView)):B.push(null),C.sparse!==void 0&&(B.push(this.getDependency("bufferView",C.sparse.indices.bufferView)),B.push(this.getDependency("bufferView",C.sparse.values.bufferView))),Promise.all(B).then(function(i){const E=i[0],e=$D[C.type],t=Co[C.componentType],s=t.BYTES_PER_ELEMENT,n=s*e,D=C.byteOffset||0,r=C.bufferView!==void 0?g.bufferViews[C.bufferView].byteStride:void 0,l=C.normalized===!0;let G,w;if(r&&r!==n){const c=Math.floor(D/r),k="InterleavedBuffer:"+C.bufferView+":"+C.componentType+":"+c+":"+C.count;let y=I.cache.get(k);y||(G=new t(E,c*r,C.count*r/s),y=new Ze(G,r/s),I.cache.add(k,y)),w=new Bi(y,e,D%r/s,l)}else E===null?G=new t(C.count*e):G=new t(E,D,C.count*e),w=new PI(G,e,l);if(C.sparse!==void 0){const c=$D.SCALAR,k=Co[C.sparse.indices.componentType],y=C.sparse.indices.byteOffset||0,M=C.sparse.values.byteOffset||0,N=new k(i[1],y,C.sparse.count*c),R=new t(i[2],M,C.sparse.count*e);E!==null&&(w=new PI(w.array.slice(),w.itemSize,w.normalized));for(let d=0,L=N.length;d<L;d++){const F=N[d];if(w.setX(F,R[d*e]),e>=2&&w.setY(F,R[d*e+1]),e>=3&&w.setZ(F,R[d*e+2]),e>=4&&w.setW(F,R[d*e+3]),e>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return w})}loadTexture(A){const I=this.json,g=this.options,B=I.textures[A].source,i=I.images[B];let E=this.textureLoader;if(i.uri){const e=g.manager.getHandler(i.uri);e!==null&&(E=e)}return this.loadTextureImage(A,B,E)}loadTextureImage(A,I,g){const C=this,B=this.json,i=B.textures[A],E=B.images[I],e=(E.uri||E.bufferView)+":"+i.sampler;if(this.textureCache[e])return this.textureCache[e];const t=this.loadImageSource(I,g).then(function(s){s.flipY=!1,s.name=i.name||E.name||"",s.name===""&&typeof E.uri=="string"&&E.uri.startsWith("data:image/")===!1&&(s.name=E.uri);const D=(B.samplers||{})[i.sampler]||{};return s.magFilter=XS[D.magFilter]||Eg,s.minFilter=XS[D.minFilter]||RB,s.wrapS=zS[D.wrapS]||Ci,s.wrapT=zS[D.wrapT]||Ci,C.associations.set(s,{textures:A}),s}).catch(function(){return null});return this.textureCache[e]=t,t}loadImageSource(A,I){const g=this,C=this.json,B=this.options;if(this.sourceCache[A]!==void 0)return this.sourceCache[A].then(n=>n.clone());const i=C.images[A],E=self.URL||self.webkitURL;let e=i.uri||"",t=!1;if(i.bufferView!==void 0)e=g.getDependency("bufferView",i.bufferView).then(function(n){t=!0;const D=new Blob([n],{type:i.mimeType});return e=E.createObjectURL(D),e});else if(i.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+A+" is missing URI and bufferView");const s=Promise.resolve(e).then(function(n){return new Promise(function(D,r){let l=D;I.isImageBitmapLoader===!0&&(l=function(G){const w=new rg(G);w.needsUpdate=!0,D(w)}),I.load(no.resolveURL(n,B.path),l,void 0,r)})}).then(function(n){return t===!0&&E.revokeObjectURL(e),n.userData.mimeType=i.mimeType||B2(i.uri),n}).catch(function(n){throw console.error("THREE.GLTFLoader: Couldn't load texture",e),n});return this.sourceCache[A]=s,s}assignTexture(A,I,g,C){const B=this;return this.getDependency("texture",g.index).then(function(i){if(!i)return null;if(g.texCoord!==void 0&&g.texCoord>0&&(i=i.clone(),i.channel=g.texCoord),B.extensions[TI.KHR_TEXTURE_TRANSFORM]){const E=g.extensions!==void 0?g.extensions[TI.KHR_TEXTURE_TRANSFORM]:void 0;if(E){const e=B.associations.get(i);i=B.extensions[TI.KHR_TEXTURE_TRANSFORM].extendTexture(i,E),B.associations.set(i,e)}}return C!==void 0&&(i.colorSpace=C),A[I]=i,i})}assignFinalMaterial(A){const I=A.geometry;let g=A.material;const C=I.attributes.tangent===void 0,B=I.attributes.color!==void 0,i=I.attributes.normal===void 0;if(A.isPoints){const E="PointsMaterial:"+g.uuid;let e=this.cache.get(E);e||(e=new ms,bg.prototype.copy.call(e,g),e.color.copy(g.color),e.map=g.map,e.sizeAttenuation=!1,this.cache.add(E,e)),g=e}else if(A.isLine){const E="LineBasicMaterial:"+g.uuid;let e=this.cache.get(E);e||(e=new eC,bg.prototype.copy.call(e,g),e.color.copy(g.color),e.map=g.map,this.cache.add(E,e)),g=e}if(C||B||i){let E="ClonedMaterial:"+g.uuid+":";C&&(E+="derivative-tangents:"),B&&(E+="vertex-colors:"),i&&(E+="flat-shading:");let e=this.cache.get(E);e||(e=g.clone(),B&&(e.vertexColors=!0),i&&(e.flatShading=!0),C&&(e.normalScale&&(e.normalScale.y*=-1),e.clearcoatNormalScale&&(e.clearcoatNormalScale.y*=-1)),this.cache.add(E,e),this.associations.set(e,this.associations.get(g))),g=e}A.material=g}getMaterialType(){return it}loadMaterial(A){const I=this,g=this.json,C=this.extensions,B=g.materials[A];let i;const E={},e=B.extensions||{},t=[];if(e[TI.KHR_MATERIALS_UNLIT]){const n=C[TI.KHR_MATERIALS_UNLIT];i=n.getMaterialType(),t.push(n.extendParams(E,B,I))}else{const n=B.pbrMetallicRoughness||{};if(E.color=new TA(1,1,1),E.opacity=1,Array.isArray(n.baseColorFactor)){const D=n.baseColorFactor;E.color.fromArray(D),E.opacity=D[3]}n.baseColorTexture!==void 0&&t.push(I.assignTexture(E,"map",n.baseColorTexture,QI)),E.metalness=n.metallicFactor!==void 0?n.metallicFactor:1,E.roughness=n.roughnessFactor!==void 0?n.roughnessFactor:1,n.metallicRoughnessTexture!==void 0&&(t.push(I.assignTexture(E,"metalnessMap",n.metallicRoughnessTexture)),t.push(I.assignTexture(E,"roughnessMap",n.metallicRoughnessTexture))),i=this._invokeOne(function(D){return D.getMaterialType&&D.getMaterialType(A)}),t.push(Promise.all(this._invokeAll(function(D){return D.extendMaterialParams&&D.extendMaterialParams(A,E)})))}B.doubleSided===!0&&(E.side=UB);const s=B.alphaMode||Ar.OPAQUE;if(s===Ar.BLEND?(E.transparent=!0,E.depthWrite=!1):(E.transparent=!1,s===Ar.MASK&&(E.alphaTest=B.alphaCutoff!==void 0?B.alphaCutoff:.5)),B.normalTexture!==void 0&&i!==WC&&(t.push(I.assignTexture(E,"normalMap",B.normalTexture)),E.normalScale=new cA(1,1),B.normalTexture.scale!==void 0)){const n=B.normalTexture.scale;E.normalScale.set(n,n)}return B.occlusionTexture!==void 0&&i!==WC&&(t.push(I.assignTexture(E,"aoMap",B.occlusionTexture)),B.occlusionTexture.strength!==void 0&&(E.aoMapIntensity=B.occlusionTexture.strength)),B.emissiveFactor!==void 0&&i!==WC&&(E.emissive=new TA().fromArray(B.emissiveFactor)),B.emissiveTexture!==void 0&&i!==WC&&t.push(I.assignTexture(E,"emissiveMap",B.emissiveTexture,QI)),Promise.all(t).then(function(){const n=new i(E);return B.name&&(n.name=B.name),XQ(n,B),I.associations.set(n,{materials:A}),B.extensions&&Qe(C,n,B),n})}createUniqueName(A){const I=bI.sanitizeNodeName(A||"");let g=I;for(let C=1;this.nodeNamesUsed[g];++C)g=I+"_"+C;return this.nodeNamesUsed[g]=!0,g}loadGeometries(A){const I=this,g=this.extensions,C=this.primitiveCache;function B(E){return g[TI.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(E,I).then(function(e){return Ay(e,E,I)})}const i=[];for(let E=0,e=A.length;E<e;E++){const t=A[E],s=C2(t),n=C[s];if(n)i.push(n.promise);else{let D;t.extensions&&t.extensions[TI.KHR_DRACO_MESH_COMPRESSION]?D=B(t):D=Ay(new kI,t,I),C[s]={primitive:t,promise:D},i.push(D)}}return Promise.all(i)}loadMesh(A){const I=this,g=this.json,C=this.extensions,B=g.meshes[A],i=B.primitives,E=[];for(let e=0,t=i.length;e<t;e++){const s=i[e].material===void 0?A2(this.cache):this.getDependency("material",i[e].material);E.push(s)}return E.push(I.loadGeometries(i)),Promise.all(E).then(function(e){const t=e.slice(0,e.length-1),s=e[e.length-1],n=[];for(let r=0,l=s.length;r<l;r++){const G=s[r],w=i[r];let c;const k=t[r];if(w.mode===eB.TRIANGLES||w.mode===eB.TRIANGLE_STRIP||w.mode===eB.TRIANGLE_FAN||w.mode===void 0)c=B.isSkinnedMesh===!0?new Hh(G,k):new mg(G,k),c.isSkinnedMesh===!0&&c.normalizeSkinWeights(),w.mode===eB.TRIANGLE_STRIP?c.geometry=jS(c.geometry,Nh):w.mode===eB.TRIANGLE_FAN&&(c.geometry=jS(c.geometry,ss));else if(w.mode===eB.LINES)c=new fB(G,k);else if(w.mode===eB.LINE_STRIP)c=new RQ(G,k);else if(w.mode===eB.LINE_LOOP)c=new bh(G,k);else if(w.mode===eB.POINTS)c=new Th(G,k);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+w.mode);Object.keys(c.geometry.morphAttributes).length>0&&g2(c,B),c.name=I.createUniqueName(B.name||"mesh_"+A),XQ(c,B),w.extensions&&Qe(C,c,w),I.assignFinalMaterial(c),n.push(c)}for(let r=0,l=n.length;r<l;r++)I.associations.set(n[r],{meshes:A,primitives:r});if(n.length===1)return n[0];const D=new NB;I.associations.set(D,{meshes:A});for(let r=0,l=n.length;r<l;r++)D.add(n[r]);return D})}loadCamera(A){let I;const g=this.json.cameras[A],C=g[g.type];if(!C){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return g.type==="perspective"?I=new Mg(Gk.radToDeg(C.yfov),C.aspectRatio||1,C.znear||1,C.zfar||2e6):g.type==="orthographic"&&(I=new ai(-C.xmag,C.xmag,C.ymag,-C.ymag,C.znear,C.zfar)),g.name&&(I.name=this.createUniqueName(g.name)),XQ(I,g),Promise.resolve(I)}loadSkin(A){const I=this.json.skins[A],g=[];for(let C=0,B=I.joints.length;C<B;C++)g.push(this._loadNodeShallow(I.joints[C]));return I.inverseBindMatrices!==void 0?g.push(this.getDependency("accessor",I.inverseBindMatrices)):g.push(null),Promise.all(g).then(function(C){const B=C.pop(),i=C,E=[],e=[];for(let t=0,s=i.length;t<s;t++){const n=i[t];if(n){E.push(n);const D=new cI;B!==null&&D.fromArray(B.array,t*16),e.push(D)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',I.joints[t])}return new We(E,e)})}loadAnimation(A){const g=this.json.animations[A],C=g.name?g.name:"animation_"+A,B=[],i=[],E=[],e=[],t=[];for(let s=0,n=g.channels.length;s<n;s++){const D=g.channels[s],r=g.samplers[D.sampler],l=D.target,G=l.node,w=g.parameters!==void 0?g.parameters[r.input]:r.input,c=g.parameters!==void 0?g.parameters[r.output]:r.output;l.node!==void 0&&(B.push(this.getDependency("node",G)),i.push(this.getDependency("accessor",w)),E.push(this.getDependency("accessor",c)),e.push(r),t.push(l))}return Promise.all([Promise.all(B),Promise.all(i),Promise.all(E),Promise.all(e),Promise.all(t)]).then(function(s){const n=s[0],D=s[1],r=s[2],l=s[3],G=s[4],w=[];for(let c=0,k=n.length;c<k;c++){const y=n[c],M=D[c],N=r[c],R=l[c],d=G[c];if(y===void 0)continue;y.updateMatrix();let L;switch(jQ[d.path]){case jQ.weights:L=to;break;case jQ.rotation:L=Qi;break;case jQ.position:case jQ.scale:default:L=ao;break}const F=y.name?y.name:y.uuid,q=R.interpolation!==void 0?$T[R.interpolation]:Vi,W=[];jQ[d.path]===jQ.weights?y.traverse(function(H){H.morphTargetInfluences&&W.push(H.name?H.name:H.uuid)}):W.push(F);let $=N.array;if(N.normalized){const H=sh($.constructor),x=new Float32Array($.length);for(let IA=0,eA=$.length;IA<eA;IA++)x[IA]=$[IA]*H;$=x}for(let H=0,x=W.length;H<x;H++){const IA=new L(W[H]+"."+jQ[d.path],M.array,$,q);R.interpolation==="CUBICSPLINE"&&(IA.createInterpolant=function(CA){const QA=this instanceof Qi?zT:r0;return new QA(this.times,this.values,this.getValueSize()/3,CA)},IA.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),w.push(IA)}}return new so(C,void 0,w)})}createNodeMesh(A){const I=this.json,g=this,C=I.nodes[A];return C.mesh===void 0?null:g.getDependency("mesh",C.mesh).then(function(B){const i=g._getNodeRef(g.meshCache,C.mesh,B);return C.weights!==void 0&&i.traverse(function(E){if(E.isMesh)for(let e=0,t=C.weights.length;e<t;e++)E.morphTargetInfluences[e]=C.weights[e]}),i})}loadNode(A){const I=this.json,g=this,C=I.nodes[A],B=g._loadNodeShallow(A),i=[],E=C.children||[];for(let t=0,s=E.length;t<s;t++)i.push(g.getDependency("node",E[t]));const e=C.skin===void 0?Promise.resolve(null):g.getDependency("skin",C.skin);return Promise.all([B,Promise.all(i),e]).then(function(t){const s=t[0],n=t[1],D=t[2];D!==null&&s.traverse(function(r){r.isSkinnedMesh&&r.bind(D,Q2)});for(let r=0,l=n.length;r<l;r++)s.add(n[r]);return s})}_loadNodeShallow(A){const I=this.json,g=this.extensions,C=this;if(this.nodeCache[A]!==void 0)return this.nodeCache[A];const B=I.nodes[A],i=B.name?C.createUniqueName(B.name):"",E=[],e=C._invokeOne(function(t){return t.createNodeMesh&&t.createNodeMesh(A)});return e&&E.push(e),B.camera!==void 0&&E.push(C.getDependency("camera",B.camera).then(function(t){return C._getNodeRef(C.cameraCache,B.camera,t)})),C._invokeAll(function(t){return t.createNodeAttachment&&t.createNodeAttachment(A)}).forEach(function(t){E.push(t)}),this.nodeCache[A]=Promise.all(E).then(function(t){let s;if(B.isBone===!0?s=new Hs:t.length>1?s=new NB:t.length===1?s=t[0]:s=new YI,s!==t[0])for(let n=0,D=t.length;n<D;n++)s.add(t[n]);if(B.name&&(s.userData.name=B.name,s.name=i),XQ(s,B),B.extensions&&Qe(g,s,B),B.matrix!==void 0){const n=new cI;n.fromArray(B.matrix),s.applyMatrix4(n)}else B.translation!==void 0&&s.position.fromArray(B.translation),B.rotation!==void 0&&s.quaternion.fromArray(B.rotation),B.scale!==void 0&&s.scale.fromArray(B.scale);return C.associations.has(s)||C.associations.set(s,{}),C.associations.get(s).nodes=A,s}),this.nodeCache[A]}loadScene(A){const I=this.extensions,g=this.json.scenes[A],C=this,B=new NB;g.name&&(B.name=C.createUniqueName(g.name)),XQ(B,g),g.extensions&&Qe(I,B,g);const i=g.nodes||[],E=[];for(let e=0,t=i.length;e<t;e++)E.push(C.getDependency("node",i[e]));return Promise.all(E).then(function(e){for(let s=0,n=e.length;s<n;s++)B.add(e[s]);const t=s=>{const n=new Map;for(const[D,r]of C.associations)(D instanceof bg||D instanceof rg)&&n.set(D,r);return s.traverse(D=>{const r=C.associations.get(D);r!=null&&n.set(D,r)}),n};return C.associations=t(B),B})}}function E2(Q,A,I){const g=A.attributes,C=new dB;if(g.POSITION!==void 0){const E=I.json.accessors[g.POSITION],e=E.min,t=E.max;if(e!==void 0&&t!==void 0){if(C.set(new u(e[0],e[1],e[2]),new u(t[0],t[1],t[2])),E.normalized){const s=sh(Co[E.componentType]);C.min.multiplyScalar(s),C.max.multiplyScalar(s)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const B=A.targets;if(B!==void 0){const E=new u,e=new u;for(let t=0,s=B.length;t<s;t++){const n=B[t];if(n.POSITION!==void 0){const D=I.json.accessors[n.POSITION],r=D.min,l=D.max;if(r!==void 0&&l!==void 0){if(e.setX(Math.max(Math.abs(r[0]),Math.abs(l[0]))),e.setY(Math.max(Math.abs(r[1]),Math.abs(l[1]))),e.setZ(Math.max(Math.abs(r[2]),Math.abs(l[2]))),D.normalized){const G=sh(Co[D.componentType]);e.multiplyScalar(G)}E.max(e)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}C.expandByVector(E)}Q.boundingBox=C;const i=new pB;C.getCenter(i.center),i.radius=C.min.distanceTo(C.max)/2,Q.boundingSphere=i}function Ay(Q,A,I){const g=A.attributes,C=[];function B(i,E){return I.getDependency("accessor",i).then(function(e){Q.setAttribute(E,e)})}for(const i in g){const E=ah[i]||i.toLowerCase();E in Q.attributes||C.push(B(g[i],E))}if(A.indices!==void 0&&!Q.index){const i=I.getDependency("accessor",A.indices).then(function(E){Q.setIndex(E)});C.push(i)}return XQ(Q,A),E2(Q,A,I),Promise.all(C).then(function(){return A.targets!==void 0?I2(Q,A.targets,I):Q})}class o2{constructor(A=4){this.pool=A,this.queue=[],this.workers=[],this.workersResolve=[],this.workerStatus=0}_initWorker(A){if(!this.workers[A]){const I=this.workerCreator();I.addEventListener("message",this._onMessage.bind(this,A)),this.workers[A]=I}}_getIdleWorker(){for(let A=0;A<this.pool;A++)if(!(this.workerStatus&1<<A))return A;return-1}_onMessage(A,I){const g=this.workersResolve[A];if(g&&g(I),this.queue.length){const{resolve:C,msg:B,transfer:i}=this.queue.shift();this.workersResolve[A]=C,this.workers[A].postMessage(B,i)}else this.workerStatus^=1<<A}setWorkerCreator(A){this.workerCreator=A}setWorkerLimit(A){this.pool=A}postMessage(A,I){return new Promise(g=>{const C=this._getIdleWorker();C!==-1?(this._initWorker(C),this.workerStatus|=1<<C,this.workersResolve[C]=g,this.workers[C].postMessage(A,I)):this.queue.push({resolve:g,msg:A,transfer:I})})}dispose(){this.workers.forEach(A=>A.terminate()),this.workersResolve.length=0,this.workers.length=0,this.queue.length=0,this.workerStatus=0}}const e2=0,t2=2,a2=1,s2=2,n2=0,h0=9,dc=15,c0=16,pc=22,l0=37,fc=43,w0=76,G0=83,S0=97,y0=100,k0=103,M0=109;class D2{constructor(){this.vkFormat=0,this.typeSize=1,this.pixelWidth=0,this.pixelHeight=0,this.pixelDepth=0,this.layerCount=0,this.faceCount=1,this.supercompressionScheme=0,this.levels=[],this.dataFormatDescriptor=[{vendorId:0,descriptorType:0,descriptorBlockSize:0,versionNumber:2,colorModel:0,colorPrimaries:1,transferFunction:2,flags:0,texelBlockDimension:[0,0,0,0],bytesPlane:[0,0,0,0,0,0,0,0],samples:[]}],this.keyValue={},this.globalData=null}}class ie{constructor(A,I,g,C){this._dataView=new DataView(A.buffer,A.byteOffset+I,g),this._littleEndian=C,this._offset=0}_nextUint8(){const A=this._dataView.getUint8(this._offset);return this._offset+=1,A}_nextUint16(){const A=this._dataView.getUint16(this._offset,this._littleEndian);return this._offset+=2,A}_nextUint32(){const A=this._dataView.getUint32(this._offset,this._littleEndian);return this._offset+=4,A}_nextUint64(){const A=this._dataView.getUint32(this._offset,this._littleEndian)+4294967296*this._dataView.getUint32(this._offset+4,this._littleEndian);return this._offset+=8,A}_nextInt32(){const A=this._dataView.getInt32(this._offset,this._littleEndian);return this._offset+=4,A}_skip(A){return this._offset+=A,this}_scan(A,I=0){const g=this._offset;let C=0;for(;this._dataView.getUint8(this._offset)!==I&&C<A;)C++,this._offset++;return C<A&&this._offset++,new Uint8Array(this._dataView.buffer,this._dataView.byteOffset+g,C)}}const rC=[171,75,84,88,32,50,48,187,13,10,26,10];function Iy(Q){return typeof TextDecoder<"u"?new TextDecoder().decode(Q):Buffer.from(Q).toString("utf8")}function r2(Q){const A=new Uint8Array(Q.buffer,Q.byteOffset,rC.length);if(A[0]!==rC[0]||A[1]!==rC[1]||A[2]!==rC[2]||A[3]!==rC[3]||A[4]!==rC[4]||A[5]!==rC[5]||A[6]!==rC[6]||A[7]!==rC[7]||A[8]!==rC[8]||A[9]!==rC[9]||A[10]!==rC[10]||A[11]!==rC[11])throw new Error("Missing KTX 2.0 identifier.");const I=new D2,g=17*Uint32Array.BYTES_PER_ELEMENT,C=new ie(Q,rC.length,g,!0);I.vkFormat=C._nextUint32(),I.typeSize=C._nextUint32(),I.pixelWidth=C._nextUint32(),I.pixelHeight=C._nextUint32(),I.pixelDepth=C._nextUint32(),I.layerCount=C._nextUint32(),I.faceCount=C._nextUint32();const B=C._nextUint32();I.supercompressionScheme=C._nextUint32();const i=C._nextUint32(),E=C._nextUint32(),e=C._nextUint32(),t=C._nextUint32(),s=C._nextUint64(),n=C._nextUint64(),D=new ie(Q,rC.length+g,3*B*8,!0);for(let CA=0;CA<B;CA++)I.levels.push({levelData:new Uint8Array(Q.buffer,Q.byteOffset+D._nextUint64(),D._nextUint64()),uncompressedByteLength:D._nextUint64()});const r=new ie(Q,i,E,!0),l={vendorId:r._skip(4)._nextUint16(),descriptorType:r._nextUint16(),versionNumber:r._nextUint16(),descriptorBlockSize:r._nextUint16(),colorModel:r._nextUint8(),colorPrimaries:r._nextUint8(),transferFunction:r._nextUint8(),flags:r._nextUint8(),texelBlockDimension:[r._nextUint8(),r._nextUint8(),r._nextUint8(),r._nextUint8()],bytesPlane:[r._nextUint8(),r._nextUint8(),r._nextUint8(),r._nextUint8(),r._nextUint8(),r._nextUint8(),r._nextUint8(),r._nextUint8()],samples:[]},G=(l.descriptorBlockSize/4-6)/4;for(let CA=0;CA<G;CA++){const QA={bitOffset:r._nextUint16(),bitLength:r._nextUint8(),channelType:r._nextUint8(),samplePosition:[r._nextUint8(),r._nextUint8(),r._nextUint8(),r._nextUint8()],sampleLower:-1/0,sampleUpper:1/0};64&QA.channelType?(QA.sampleLower=r._nextInt32(),QA.sampleUpper=r._nextInt32()):(QA.sampleLower=r._nextUint32(),QA.sampleUpper=r._nextUint32()),l.samples[CA]=QA}I.dataFormatDescriptor.length=0,I.dataFormatDescriptor.push(l);const w=new ie(Q,e,t,!0);for(;w._offset<t;){const CA=w._nextUint32(),QA=w._scan(CA),NA=Iy(QA),SA=w._scan(CA-QA.byteLength);I.keyValue[NA]=NA.match(/^ktx/i)?Iy(SA):SA,w._offset%4&&w._skip(4-w._offset%4)}if(n<=0)return I;const c=new ie(Q,s,n,!0),k=c._nextUint16(),y=c._nextUint16(),M=c._nextUint32(),N=c._nextUint32(),R=c._nextUint32(),d=c._nextUint32(),L=[];for(let CA=0;CA<B;CA++)L.push({imageFlags:c._nextUint32(),rgbSliceByteOffset:c._nextUint32(),rgbSliceByteLength:c._nextUint32(),alphaSliceByteOffset:c._nextUint32(),alphaSliceByteLength:c._nextUint32()});const F=s+c._offset,q=F+M,W=q+N,$=W+R,H=new Uint8Array(Q.buffer,Q.byteOffset+F,M),x=new Uint8Array(Q.buffer,Q.byteOffset+q,N),IA=new Uint8Array(Q.buffer,Q.byteOffset+W,R),eA=new Uint8Array(Q.buffer,Q.byteOffset+$,d);return I.globalData={endpointCount:k,selectorCount:y,imageDescs:L,endpointsData:H,selectorsData:x,tablesData:IA,extendedData:eA},I}let Ir,yQ,nh;const gr={env:{emscripten_notify_memory_growth:function(Q){nh=new Uint8Array(yQ.exports.memory.buffer)}}};class h2{init(){return Ir||(Ir=typeof fetch<"u"?fetch("data:application/wasm;base64,"+gy).then(A=>A.arrayBuffer()).then(A=>WebAssembly.instantiate(A,gr)).then(this._init):WebAssembly.instantiate(Buffer.from(gy,"base64"),gr).then(this._init),Ir)}_init(A){yQ=A.instance,gr.env.emscripten_notify_memory_growth(0)}decode(A,I=0){if(!yQ)throw new Error("ZSTDDecoder: Await .init() before decoding.");const g=A.byteLength,C=yQ.exports.malloc(g);nh.set(A,C),I=I||Number(yQ.exports.ZSTD_findDecompressedSize(C,g));const B=yQ.exports.malloc(I),i=yQ.exports.ZSTD_decompress(B,I,C,g),E=nh.slice(B,B+i);return yQ.exports.free(C),yQ.exports.free(B),E}}const gy="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IAMNACAEQQNxBEADQCACRQ0FIAAgAkF/aiICaiIDIAEgAmotAAA6AAAgA0EDcQ0ACwsgAkEDTQ0AA0AgACACQXxqIgJqIAEgAmooAgA2AgAgAkEDSw0ACwsgAkUNAgNAIAAgAkF/aiICaiABIAJqLQAAOgAAIAINAAsMAgsgAkEDTQ0AIAIhBANAIAMgASgCADYCACABQQRqIQEgA0EEaiEDIARBfGoiBEEDSw0ACyACQQNxIQILIAJFDQADQCADIAEtAAA6AAAgA0EBaiEDIAFBAWohASACQX9qIgINAAsLIAAL8wICAn8BfgJAIAJFDQAgACACaiIDQX9qIAE6AAAgACABOgAAIAJBA0kNACADQX5qIAE6AAAgACABOgABIANBfWogAToAACAAIAE6AAIgAkEHSQ0AIANBfGogAToAACAAIAE6AAMgAkEJSQ0AIABBACAAa0EDcSIEaiIDIAFB/wFxQYGChAhsIgE2AgAgAyACIARrQXxxIgRqIgJBfGogATYCACAEQQlJDQAgAyABNgIIIAMgATYCBCACQXhqIAE2AgAgAkF0aiABNgIAIARBGUkNACADIAE2AhggAyABNgIUIAMgATYCECADIAE2AgwgAkFwaiABNgIAIAJBbGogATYCACACQWhqIAE2AgAgAkFkaiABNgIAIAQgA0EEcUEYciIEayICQSBJDQAgAa0iBUIghiAFhCEFIAMgBGohAQNAIAEgBTcDGCABIAU3AxAgASAFNwMIIAEgBTcDACABQSBqIQEgAkFgaiICQR9LDQALCyAACy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAIajYCACADCy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAFajYCACADCx8AIAAgASACKAIEEAg2AgAgARAEGiAAIAJBCGo2AgQLCAAgAGdBH3MLugUBDX8jAEEQayIKJAACfyAEQQNNBEAgCkEANgIMIApBDGogAyAEEAsaIAAgASACIApBDGpBBBAVIgBBbCAAEAMbIAAgACAESxsMAQsgAEEAIAEoAgBBAXRBAmoQECENQVQgAygAACIGQQ9xIgBBCksNABogAiAAQQVqNgIAIAMgBGoiAkF8aiEMIAJBeWohDiACQXtqIRAgAEEGaiELQQQh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ASIDNgLE4AEgACgCvOABIQQgACABNgK84AEgACABIAJqNgK44AEgACABIAQgA2tqNgLA4AELpgEBAX8gACAAKALs4QEQFjYCyOABIABCADcD+OABIABCADcDuOABIABBwOABakIANwMAIABBqNAAaiIBQYyAgOAANgIAIABBADYCmOIBIABCADcDiOEBIABCAzcDgOEBIABBrNABakHgEikCADcCACAAQbTQAWpB6BIoAgA2AgAgACABNgIMIAAgAEGYIGo2AgggACAAQaAwajYCBCAAIABBEGo2AgALYQEBf0G4fyEDAkAgAUEDSQ0AIAIgABAhIgFBA3YiADYCCCACIAFBAXE2AgQgAiABQQF2QQNxIgM2AgACQCADQX9qIgFBAksNAAJAIAFBAWsOAgEAAgtBbA8LIAAhAwsgAwsMACAAIAEgAkEAEC4LiAQCA38CfiADEBYhBCAAQQBBKBAQIQAgBCACSwRAIAQPCyABRQRAQX8PCwJAAkAgA0EBRg0AIAEoAAAiBkGo6r5pRg0AQXYhAyAGQXBxQdDUtMIBRw0BQQghAyACQQhJDQEgAEEAQSgQECEAIAEoAAQhASAAQQE2AhQgACABrTcDAEEADwsgASACIAMQLyIDIAJLDQAgACADNgIYQXIhAyABIARqIgVBf2otAAAiAkEIcQ0AIAJBIHEiBkUEQEFwIQMgBS0AACIFQacBSw0BIAVBB3GtQgEgBUEDdkEKaq2GIgdCA4h+IAd8IQggBEEBaiEECyACQQZ2IQMgAkECdiEFAkAgAkEDcUF/aiICQQJLBEBBACECDAELAkACQAJAIAJBAWsOAgECAAsgASAEai0AACECIARBAWohBAwCCyABIARqLwAAIQIgBEECaiEEDAELIAEgBGooAAAhAiAEQQRqIQQLIAVBAXEhBQJ+AkACQAJAIANBf2oiA0ECTQRAIANBAWsOAgIDAQtCfyAGRQ0DGiABIARqMQAADAMLIAEgBGovAACtQoACfAwCCyABIARqKAAArQwBCyABIARqKQAACyEHIAAgBTYCICAAIAI2AhwgACAHNwMAQQAhAyAAQQA2AhQgACAHIAggBhsiBzcDCCAAIAdCgIAIIAdCgIAIVBs+AhALIAMLWwEBf0G4fyEDIAIQFiICIAFNBH8gACACakF/ai0AACIAQQNxQQJ0QaAeaigC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C0Egak8NAQsgByAHKQNoNwMQIAcgBykDYDcDCCAEIA0gB0EIaiAHQdwAaiAPIA4gESAQEB4hCwwBCyACIARqIQggBCAKEAcgAkERTwRAIARBEGohAgNAIAIgCkEQaiIKEAcgAkEQaiICIAhJDQALCyAIIAlrIQIgByATNgJcIAkgCCAOa0sEQCAJIAggEWtLBEBBbCELDAILIBAgAiAOayICaiIKIANqIBBNBEAgCCAKIAMQDxoMAgsgCCAKQQAgAmsQDyEIIAcgAiADaiIDNgJkIAggAmshCCAOIQILIAlBEE8EQCADIAhqIQMDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALDAELAkAgCUEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgCUECdCIDQcAeaigCAGoiAhAXIAIgA0HgHmooAgBrIQIgBygCZCEDDAELIAggAhAMCyADQQlJDQAgAyAIaiEDIAhBCGoiCCACQQhqIgJrQQ9MBEADQCAIIAIQDCACQQhqIQIgCEEIaiIIIANJDQAMAgALAAsDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALCyAHQRhqEAQaIAsgDCALEAMiAhshDCAEIAQgC2ogAhshBCAFQX9qIgUNAAsgDBADDQFBbCEMIAdBGGoQBEECSQ0BQQAhCANAIAhBA0cEQCAAIAhBAnQiAmpBrNABaiACIAdqKAJENgIAIAhBAWohCAwBCwsgBygCXCEIC0G6fyEMIA8gCGsiACANIARrSw0AIAQEfyAEIAggABALIABqBUEACyABayEMCyAHQfAAaiQAIAwLkRcCFn8FfiMAQdABayIHJAAgByAAKALw4QEiCDYCvAEgASACaiESIAggACgCgOIBaiETAkACQCAFRQRAIAEhAwwBCyAAKALE4AEhESAAKALA4AEhFSAAKAK84AEhDyAAQQE2AozhAUEAIQgDQCAIQQNHBEAgByAIQQJ0IgJqIAAgAmpBrNABaigCADYCVCAIQQFqIQgMAQsLIAcgETYCZCAHIA82AmAgByABIA9rNgJoQWwhECAHQShqIAMgBBAGEAMNASAFQQQgBUEESBshFyAHQTxqIAdBKGogACgCABATIAdBxABqIAdBKGogACgCCBATIAdBzABqIAdBKGogACgCBBATQQAhBCAHQeAAaiEMIAdB5ABqIQoDQCAHQShqEARBAksgBCAXTnJFBEAgBygCQCAHKAI8QQN0aikCACIdQhCIp0H/AXEhCyAHKAJQIAcoAkxBA3RqKQIAIh5CEIinQf8BcSEJIAcoAkggBygCREEDdGopAgAiH0IgiKchCCAeQiCIISAgHUIgiKchAgJAIB9CEIinQf8BcSIDQQJPBEACQCAGRSADQRlJckUEQCAIIAdBKGogA0EgIAcoAixrIg0gDSADSxsiDRAFIAMgDWsiA3RqIQggB0EoahAEGiADRQ0BIAdBKGogAxAFIAhqIQgMAQsgB0EoaiADEAUgCGohCCAHQShqEAQaCyAHKQJUISEgByAINgJUIAcgITcDWAwBCwJAIANFBEAgAgRAIAcoAlQhCAwDCyAHKAJYIQgMAQsCQAJAIAdBKGpBARAFIAggAkVqaiIDQQNGBEAgBygCVEF/aiIDIANFaiEIDAELIANBAnQgB2ooAlQiCCAIRWohCCADQQFGDQELIAcgBygCWDYCXAsLIAcgBygCVDYCWCAHIAg2AlQLICCnIQMgCQRAIAdBKGogCRAFIANqIQMLIAkgC2pBFE8EQCAHQShqEAQaCyALBEAgB0EoaiALEAUgAmohAgsgB0EoahAEGiAHIAcoAmggAmoiCSADajYCaCAKIAwgCCAJSxsoAgAhDSAHIAdBKGogHUIYiKdB/wFxEAggHadB//8DcWo2AjwgByAHQShqIB5CGIinQf8BcRAIIB6nQf//A3FqNgJMIAdBKGoQBBogB0EoaiAfQhiIp0H/AXEQCCEOIAdB8ABqIARBBHRqIgsgCSANaiAIazYCDCALIAg2AgggCyADNgIEIAsgAjYCACAHIA4gH6dB//8DcWo2AkQgBEEBaiEEDAELCyAEIBdIDQEgEkFgaiEYIAdB4ABqIRogB0HkAGohGyABIQMDQCAHQShqEARBAksgBCAFTnJFBEAgBygCQCAHKAI8QQN0aikCACIdQhCIp0H/AXEhCyAHKAJQIAcoAkxBA3RqKQIAIh5CEIinQf8BcSEIIAcoAkggBygCREEDdGopAgAiH0IgiKchCSAeQiCIISAgHUIgiKchDAJAIB9CEIinQf8BcSICQQJPBEACQCAGRSACQRlJckUEQCAJIAdBKGogAkEgIAcoAixrIgogCiACSxsiChAFIAIgCmsiAnRqIQkgB0EoahAEGiACRQ0BIAdBKGogAhAFIAlqIQkMAQsgB0EoaiACEAUgCWohCSAHQShqEAQaCyAHKQJUISEgByAJNgJUIAcgITcDWAwBCwJAIAJFBEAgDARAIAcoAlQhCQwDCyAHKAJYIQkMAQsCQAJAIAdBKGpBARAFIAkgDEVqaiICQQNGBEAgBygCVEF/aiICIAJFaiEJDAELIAJBAnQgB2ooAlQiCSAJRWohCSACQQFGDQELIAcgBygCWDYCXAsLIAcgBygCVDYCWCAHIAk2AlQLICCnIRQgCARAIAdBKGogCBAFIBRqIRQLIAggC2pBFE8EQCAHQShqEAQaCyALBEAgB0EoaiALEAUgDGohDAsgB0EoahAEGiAHIAcoAmggDGoiGSAUajYCaCAbIBogCSAZSxsoAgAhHCAHIAdBKGogHUIYiKdB/wFxEAggHadB//8DcWo2AjwgByAHQShqIB5CGIinQf8BcRAIIB6nQf//A3FqNgJMIAdBKGoQBBogByAHQShqIB9CGIinQf8BcRAIIB+nQf//A3FqNgJEIAcgB0HwAGogBEEDcUEEdGoiDSkDCCIdNwPIASAHIA0pAwAiHjcDwAECQAJAAkAgBygCvAEiDiAepyICaiIWIBNLDQAgAyAHKALEASIKIAJqIgtqIBhLDQAgEiADayALQSBqTw0BCyAHIAcpA8gBNwMQIAcgBykDwAE3AwggAyASIAdBCGogB0G8AWogEyAPIBUgERAeIQsMAQsgAiADaiEIIAMgDhAHIAJBEU8EQCADQRBqIQIDQCACIA5BEGoiDhAHIAJBEGoiAiAISQ0ACwsgCCAdpyIOayECIAcgFjYCvAEgDiAIIA9rSwRAIA4gCCAVa0sEQEFsIQsMAgsgESACIA9rIgJqIhYgCmogEU0EQCAIIBYgChAPGgwCCyAIIBZBACACaxAPIQggByACIApqIgo2AsQBIAggAmshCCAPIQILIA5BEE8EQCAIIApqIQoDQCAIIAIQByACQRBqIQIgCEEQaiIIIApJDQALDAELAkAgDkEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgDkECdCIKQcAeaigCAGoiAhAXIAIgCkHgHmooAgBrIQIgBygCxAEhCgwBCyAIIAIQDAsgCkEJSQ0AIAggCmohCiAIQQhqIgggAkEIaiICa0EPTARAA0AgCCACEAwgAkEIaiECIAhBCGoiCCAKSQ0ADAIACwALA0AgCCACEAcgAkEQaiECIAhBEGoiCCAKSQ0ACwsgCxADBEAgCyEQDAQFIA0gDDYCACANIBkgHGogCWs2AgwgDSAJNgIIIA0gFDYCBCAEQQFqIQQgAyALaiEDDAILAAsLIAQgBUgNASAEIBdrIQtBACEEA0AgCyAFSARAIAcgB0HwAGogC0EDcUEEdGoiAikDCCIdNwPIASAHIAIpAwAiHjcDwAECQAJAAkAgBygCvAEiDCAepyICaiIKIBNLDQAgAyAHKALEASIJIAJqIhBqIBhLDQAgEiADayAQQSBqTw0BCyAHIAcpA8gBNwMgIAcgBykDwAE3AxggAyASIAdBGGogB0G8AWogEyAPIBUgERAeIRAMAQsgAiADaiEIIAMgDBAHIAJBEU8EQCADQRBqIQIDQCACIAxBEGoiDBAHIAJBEGoiAiAISQ0ACwsgCCAdpyIGayECIAcgCjYCvAEgBiAIIA9rSwRAIAYgCCAVa0sEQEFsIRAMAgsgESACIA9rIgJqIgwgCWogEU0EQCAIIAwgCRAPGgwCCyAIIAxBACACaxAPIQggByACIAlqIgk2AsQBIAggAmshCCAPIQILIAZBEE8EQCAIIAlqIQYDQCAIIAIQByACQRBqIQIgCEEQaiIIIAZJDQALDAELAkAgBkEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgBkECdCIGQcAeaigCAGoiAhAXIAIgBkHgHmooAgBrIQIgBygCxAEhCQwBCyAIIAIQDAsgCUEJSQ0AIAggCWohBiAIQQhqIgggAkEIaiICa0EPTARAA0AgCCACEAwgAkEIaiECIAhBCGoiCCAGSQ0ADAIACwALA0AgCCACEAcgAkEQaiECIAhBEGoiCCAGSQ0ACwsgEBADDQMgC0EBaiELIAMgEGohAwwBCwsDQCAEQQNHBEAgACAEQQJ0IgJqQazQAWogAiAHaigCVDYCACAEQQFqIQQMAQsLIAcoArwBIQgLQbp/IRAgEyAIayIAIBIgA2tLDQAgAwR/IAMgCCAAEAsgAGoFQQALIAFrIRALIAdB0AFqJAAgEAslACAAQgA3AgAgAEEAOwEIIABBADoACyAAIAE2AgwgACACOgAKC7QFAQN/IwBBMGsiBCQAIABB/wFqIgVBfWohBgJAIAMvAQIEQCAEQRhqIAEgAhAGIgIQAw0BIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahASOgAAIAMgBEEIaiAEQRhqEBI6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0FIAEgBEEQaiAEQRhqEBI6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBSABIARBCGogBEEYahASOgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEjoAACABIAJqIABrIQIMAwsgAyAEQRBqIARBGGoQEjoAAiADIARBCGogBEEYahASOgADIANBBGohAwwAAAsACyAEQRhqIAEgAhAGIgIQAw0AIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahAROgAAIAMgBEEIaiAEQRhqEBE6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0EIAEgBEEQaiAEQRhqEBE6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBCABIARBCGogBEEYahAROgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEToAACABIAJqIABrIQIMAgsgAyAEQRBqIARBGGoQEToAAiADIARBCGogBEEYahAROgADIANBBGohAwwAAAsACyAEQTBqJAAgAgtpAQF/An8CQAJAIAJBB00NACABKAAAQbfIwuF+Rw0AIAAgASgABDYCmOIBQWIgAEEQaiABIAIQPiIDEAMNAhogAEKBgICAEDcDiOEBIAAgASADaiACIANrECoMAQsgACABIAIQKgtBAAsLrQMBBn8jAEGAAWsiAyQAQWIhCAJAIAJBCUkNACAAQZjQAGogAUEIaiIEIAJBeGogAEGY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wOABCwutAgIEfwF+IwBBQGoiBCQAAkACQCACQQhJDQAgASgAAEFwcUHQ1LTCAUcNACABIAIQIiEBIABCADcDCCAAQQA2AgQgACABNgIADAELIARBGGogASACEC0iAxADBEAgACADEBoMAQsgAwRAIABBuH8QGgwBCyACIAQoAjAiA2shAiABIANqIQMDQAJAIAAgAyACIARBCGoQLCIFEAMEfyAFBSACIAVBA2oiBU8NAUG4fwsQGgwCCyAGQQFqIQYgAiAFayECIAMgBWohAyAEKAIMRQ0ACyAEKAI4BEAgAkEDTQRAIABBuH8QGgwCCyADQQRqIQMLIAQoAighAiAEKQMYIQcgAEEANgIEIAAgAyABazYCACAAIAIgBmytIAcgB0J/URs3AwgLIARBQGskAAslAQF/IwBBEGsiAiQAIAIgACABEFEgAigCACEAIAJBEGokACAAC30BBH8jAEGQBGsiBCQAIARB/wE2AggCQCAEQRBqIARBCGogBEEMaiABIAIQFSIGEAMEQCAGIQUMAQtBVCEFIAQoAgwiB0EGSw0AIAMgBEEQaiAEKAIIIAcQQSIFEAMNACAAIAEgBmogAiAGayADEDwhBQsgBEGQBGokACAFC4cBAgJ/An5BABAWIQMCQANAIAEgA08EQAJAIAAoAABBcHFB0NS0wgFGBEAgACABECIiAhADRQ0BQn4PCyAAIAEQVSIEQn1WDQMgBCAFfCIFIARUIQJCfiEEIAINAyAAIAEQUiICEAMNAwsgASACayEBIAAgAmohAAwBCwtCfiAFIAEbIQQLIAQLPwIBfwF+IwBBMGsiAiQAAn5CfiACQQhqIAAgARAtDQAaQgAgAigCHEEBRg0AGiACKQMICyEDIAJBMGokACADC40BAQJ/IwBBMGsiASQAAkAgAEUNACAAKAKI4gENACABIABB/OEBaigCADYCKCABIAApAvThATcDICAAEDAgACgCqOIBIQIgASABKAIoNgIYIAEgASkDIDcDECACIAFBEGoQGyAAQQA2AqjiASABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALKgECfyMAQRBrIgAkACAAQQA2AgggAEIANwMAIAAQWCEBIABBEGokACABC4cBAQN/IwBBEGsiAiQAAkAgACgCAEUgACgCBEVzDQAgAiAAKAIINgIIIAIgACkCADcDAAJ/IAIoAgAiAQRAIAIoAghBqOMJIAERBQAMAQtBqOMJECgLIgFFDQAgASAAKQIANwL04QEgAUH84QFqIAAoAgg2AgAgARBZIAEhAwsgAkEQaiQAIAMLywEBAn8jAEEgayIBJAAgAEGBgIDAADYCtOIBIABBADYCiOIBIABBADYC7OEBIABCADcDkOIBIABBADYCpOMJIABBADYC3OIBIABCADcCzOIBIABBADYCvOIBIABBADYCxOABIABCADcCnOIBIABBpOIBakIANwIAIABBrOIBakEANgIAIAFCADcCECABQgA3AhggASABKQMYNwMIIAEgASkDEDcDACABKAIIQQh2QQFxIQIgAEEANgLg4gEgACACNgKM4gEgAUEgaiQAC3YBA38jAEEwayIBJAAgAARAIAEgAEHE0AFqIgIoAgA2AiggASAAKQK80AE3AyAgACgCACEDIAEgAigCADYCGCABIAApArzQATcDECADIAFBEGoQGyABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALzAEBAX8gACABKAK00AE2ApjiASAAIAEoAgQiAjYCwOABIAAgAjYCvOABIAAgAiABKAIIaiICNgK44AEgACACNgLE4AEgASgCuNABBEAgAEKBgICAEDcDiOEBIAAgAUGk0ABqNgIMIAAgAUGUIGo2AgggACABQZwwajYCBCAAIAFBDGo2AgAgAEGs0AFqIAFBqNABaigCADYCACAAQbDQAWogAUGs0AFqKAIANgIAIABBtNABaiABQbDQAWooAgA2AgAPCyAAQgA3A4jhAQs7ACACRQRAQbp/DwsgBEUEQEFsDwsgAiAEEGAEQCAAIAEgAiADIAQgBRBhDwsgACABIAIgAyAEIAUQZQtGAQF/IwBBEGsiBSQAIAVBCGogBBAOAn8gBS0ACQRAIAAgASACIAMgBBAyDAELIAAgASACIAMgBBA0CyEAIAVBEGokACAACzQAIAAgAyAEIAUQNiIFEAMEQCAFDwsgBSAESQR/IAEgAiADIAVqIAQgBWsgABA1BUG4fwsLRgEBfyMAQRBrIgUkACAFQQhqIAQQDgJ/IAUtAAkEQCAAIAEgAiADIAQQYgwBCyAAIAEgAiADIAQQNQshACAFQRBqJAAgAAtZAQF/QQ8hAiABIABJBEAgAUEE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",Cr=new WeakMap;let Br=0,Qr;class ZB extends tC{constructor(A){super(A),this.transcoderPath="",this.transcoderBinary=null,this.transcoderPending=null,this.workerPool=new o2,this.workerSourceURL="",this.workerConfig=null,typeof MSC_TRANSCODER<"u"&&console.warn('THREE.KTX2Loader: Please update to latest "basis_transcoder". "msc_basis_transcoder" is no longer supported in three.js r125+.')}setTranscoderPath(A){return this.transcoderPath=A,this}setWorkerLimit(A){return this.workerPool.setWorkerLimit(A),this}detectSupport(A){return A.isWebGPURenderer===!0?this.workerConfig={astcSupported:A.hasFeature("texture-compression-astc"),etc1Supported:!1,etc2Supported:A.hasFeature("texture-compression-etc2"),dxtSupported:A.hasFeature("texture-compression-bc"),bptcSupported:!1,pvrtcSupported:!1}:(this.workerConfig={astcSupported:A.extensions.has("WEBGL_compressed_texture_astc"),etc1Supported:A.extensions.has("WEBGL_compressed_texture_etc1"),etc2Supported:A.extensions.has("WEBGL_compressed_texture_etc"),dxtSupported:A.extensions.has("WEBGL_compressed_texture_s3tc"),bptcSupported:A.extensions.has("EXT_texture_compression_bptc"),pvrtcSupported:A.extensions.has("WEBGL_compressed_texture_pvrtc")||A.extensions.has("WEBKIT_WEBGL_compressed_texture_pvrtc")},A.capabilities.isWebGL2&&(this.workerConfig.etc1Supported=!1)),this}init(){if(!this.transcoderPending){const A=new oC(this.manager);A.setPath(this.transcoderPath),A.setWithCredentials(this.withCredentials);const I=A.loadAsync("basis_transcoder.js"),g=new oC(this.manager);g.setPath(this.transcoderPath),g.setResponseType("arraybuffer"),g.setWithCredentials(this.withCredentials);const C=g.loadAsync("basis_transcoder.wasm");this.transcoderPending=Promise.all([I,C]).then(([B,i])=>{const E=ZB.BasisWorker.toString(),e=["/* constants */","let _EngineFormat = "+JSON.stringify(ZB.EngineFormat),"let _TranscoderFormat = "+JSON.stringify(ZB.TranscoderFormat),"let _BasisFormat = "+JSON.stringify(ZB.BasisFormat),"/* basis_transcoder.js */",B,"/* worker */",E.substring(E.indexOf("{")+1,E.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([e])),this.transcoderBinary=i,this.workerPool.setWorkerCreator(()=>{const t=new Worker(this.workerSourceURL),s=this.transcoderBinary.slice(0);return t.postMessage({type:"init",config:this.workerConfig,transcoderBinary:s},[s]),t})}),Br>0&&console.warn("THREE.KTX2Loader: Multiple active KTX2 loaders may cause performance issues. Use a single KTX2Loader instance, or call .dispose() on old instances."),Br++}return this.transcoderPending}load(A,I,g,C){if(this.workerConfig===null)throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");const B=new oC(this.manager);B.setResponseType("arraybuffer"),B.setWithCredentials(this.withCredentials),B.load(A,i=>{if(Cr.has(i))return Cr.get(i).promise.then(I).catch(C);this._createTexture(i).then(E=>I?I(E):null).catch(C)},g,C)}_createTextureFrom(A,I){const{mipmaps:g,width:C,height:B,format:i,type:E,error:e,dfdTransferFn:t,dfdFlags:s}=A;if(E==="error")return Promise.reject(e);const n=I.layerCount>1?new bk(g,C,B,I.layerCount,i,EC):new bs(g,C,B,i,EC);return n.minFilter=g.length===1?Eg:RB,n.magFilter=Eg,n.generateMipmaps=!1,n.needsUpdate=!0,n.colorSpace=t===s2?QI:jB,n.premultiplyAlpha=!!(s&a2),n}async _createTexture(A,I={}){const g=r2(new Uint8Array(A));if(g.vkFormat!==n2)return l2(g);const C=I,B=this.init().then(()=>this.workerPool.postMessage({type:"transcode",buffer:A,taskConfig:C},[A])).then(i=>this._createTextureFrom(i.data,g));return Cr.set(A,{promise:B}),B}dispose(){return this.workerPool.dispose(),this.workerSourceURL&&URL.revokeObjectURL(this.workerSourceURL),Br--,this}}ZB.BasisFormat={ETC1S:0,UASTC_4x4:1};ZB.TranscoderFormat={ETC1:0,ETC2:1,BC1:2,BC3:3,BC4:4,BC5:5,BC7_M6_OPAQUE_ONLY:6,BC7_M5:7,PVRTC1_4_RGB:8,PVRTC1_4_RGBA:9,ASTC_4x4:10,ATC_RGB:11,ATC_RGBA_INTERPOLATED_ALPHA:12,RGBA32:13,RGB565:14,BGR565:15,RGBA4444:16};ZB.EngineFormat={RGBAFormat:Wg,RGBA_ASTC_4x4_Format:as,RGBA_BPTC_Format:De,RGBA_ETC2_EAC_Format:ts,RGBA_PVRTC_4BPPV1_Format:os,RGBA_S3TC_DXT5_Format:ne,RGB_ETC1_Format:Mh,RGB_ETC2_Format:es,RGB_PVRTC_4BPPV1_Format:Es,RGB_S3TC_DXT1_Format:se};ZB.BasisWorker=function(){let Q,A,I;const g=_EngineFormat,C=_TranscoderFormat,B=_BasisFormat;self.addEventListener("message",function(l){const G=l.data;switch(G.type){case"init":Q=G.config,i(G.transcoderBinary);break;case"transcode":A.then(()=>{try{const{width:w,height:c,hasAlpha:k,mipmaps:y,format:M,dfdTransferFn:N,dfdFlags:R}=E(G.buffer),d=[];for(let L=0;L<y.length;++L)d.push(y[L].data.buffer);self.postMessage({type:"transcode",id:G.id,width:w,height:c,hasAlpha:k,mipmaps:y,format:M,dfdTransferFn:N,dfdFlags:R},d)}catch(w){console.error(w),self.postMessage({type:"error",id:G.id,error:w.message})}});break}});function i(l){A=new Promise(G=>{I={wasmBinary:l,onRuntimeInitialized:G},BASIS(I)}).then(()=>{I.initializeBasis(),I.KTX2File===void 0&&console.warn("THREE.KTX2Loader: Please update Basis Universal transcoder.")})}function E(l){const G=new I.KTX2File(new Uint8Array(l));function w(){G.close(),G.delete()}if(!G.isValid())throw w(),new Error("THREE.KTX2Loader:	Invalid or unsupported .ktx2 file");const c=G.isUASTC()?B.UASTC_4x4:B.ETC1S,k=G.getWidth(),y=G.getHeight(),M=G.getLayers()||1,N=G.getLevels(),R=G.getHasAlpha(),d=G.getDFDTransferFunc(),L=G.getDFDFlags(),{transcoderFormat:F,engineFormat:q}=n(c,k,y,R);if(!k||!y||!N)throw w(),new Error("THREE.KTX2Loader:	Invalid texture");if(!G.startTranscoding())throw w(),new Error("THREE.KTX2Loader: .startTranscoding failed");const W=[];for(let $=0;$<N;$++){const H=[];let x,IA;for(let eA=0;eA<M;eA++){const CA=G.getImageLevelInfo($,eA,0);x=CA.origWidth<4?CA.origWidth:CA.width,IA=CA.origHeight<4?CA.origHeight:CA.height;const QA=new Uint8Array(G.getImageTranscodedSizeInBytes($,eA,0,F));if(!G.transcodeImage(QA,$,eA,0,F,0,-1,-1))throw w(),new Error("THREE.KTX2Loader: .transcodeImage failed.");H.push(QA)}W.push({data:r(H),width:x,height:IA})}return w(),{width:k,height:y,hasAlpha:R,mipmaps:W,format:q,dfdTransferFn:d,dfdFlags:L}}const e=[{if:"astcSupported",basisFormat:[B.UASTC_4x4],transcoderFormat:[C.ASTC_4x4,C.ASTC_4x4],engineFormat:[g.RGBA_ASTC_4x4_Format,g.RGBA_ASTC_4x4_Format],priorityETC1S:1/0,priorityUASTC:1,needsPowerOfTwo:!1},{if:"bptcSupported",basisFormat:[B.ETC1S,B.UASTC_4x4],transcoderFormat:[C.BC7_M5,C.BC7_M5],engineFormat:[g.RGBA_BPTC_Format,g.RGBA_BPTC_Format],priorityETC1S:3,priorityUASTC:2,needsPowerOfTwo:!1},{if:"dxtSupported",basisFormat:[B.ETC1S,B.UASTC_4x4],transcoderFormat:[C.BC1,C.BC3],engineFormat:[g.RGB_S3TC_DXT1_Format,g.RGBA_S3TC_DXT5_Format],priorityETC1S:4,priorityUASTC:5,needsPowerOfTwo:!1},{if:"etc2Supported",basisFormat:[B.ETC1S,B.UASTC_4x4],transcoderFormat:[C.ETC1,C.ETC2],engineFormat:[g.RGB_ETC2_Format,g.RGBA_ETC2_EAC_Format],priorityETC1S:1,priorityUASTC:3,needsPowerOfTwo:!1},{if:"etc1Supported",basisFormat:[B.ETC1S,B.UASTC_4x4],transcoderFormat:[C.ETC1],engineFormat:[g.RGB_ETC1_Format],priorityETC1S:2,priorityUASTC:4,needsPowerOfTwo:!1},{if:"pvrtcSupported",basisFormat:[B.ETC1S,B.UASTC_4x4],transcoderFormat:[C.PVRTC1_4_RGB,C.PVRTC1_4_RGBA],engineFormat:[g.RGB_PVRTC_4BPPV1_Format,g.RGBA_PVRTC_4BPPV1_Format],priorityETC1S:5,priorityUASTC:6,needsPowerOfTwo:!0}],t=e.sort(function(l,G){return l.priorityETC1S-G.priorityETC1S}),s=e.sort(function(l,G){return l.priorityUASTC-G.priorityUASTC});function n(l,G,w,c){let k,y;const M=l===B.ETC1S?t:s;for(let N=0;N<M.length;N++){const R=M[N];if(Q[R.if]&&R.basisFormat.includes(l)&&!(c&&R.transcoderFormat.length<2)&&!(R.needsPowerOfTwo&&!(D(G)&&D(w))))return k=R.transcoderFormat[c?1:0],y=R.engineFormat[c?1:0],{transcoderFormat:k,engineFormat:y}}return console.warn("THREE.KTX2Loader: No suitable compressed texture format found. Decoding to RGBA32."),k=C.RGBA32,y=g.RGBAFormat,{transcoderFormat:k,engineFormat:y}}function D(l){return l<=2?!0:(l&l-1)===0&&l!==0}function r(l){let G=0;for(let k=0;k<l.length;k++){const y=l[k];G+=y.byteLength}const w=new Uint8Array(G);let c=0;for(let k=0;k<l.length;k++){const y=l[k];w.set(y,c),c+=y.byteLength}return w}};const Cy={[M0]:Wg,[S0]:Wg,[l0]:Wg,[fc]:Wg,[k0]:jE,[G0]:jE,[c0]:jE,[pc]:jE,[y0]:_E,[w0]:_E,[dc]:_E,[h0]:_E},ir={[M0]:PC,[S0]:_B,[l0]:EC,[fc]:EC,[k0]:PC,[G0]:_B,[c0]:EC,[pc]:EC,[y0]:PC,[w0]:_B,[dc]:EC,[h0]:EC},c2={[fc]:QI,[pc]:QI,[dc]:QI};async function l2(Q){const{vkFormat:A,pixelWidth:I,pixelHeight:g,pixelDepth:C}=Q;if(Cy[A]===void 0)throw new Error("THREE.KTX2Loader: Unsupported vkFormat.");const B=Q.levels[0];let i,E;if(Q.supercompressionScheme===e2)i=B.levelData;else if(Q.supercompressionScheme===t2)Qr||(Qr=new Promise(async t=>{const s=new h2;await s.init(),t(s)})),i=(await Qr).decode(B.levelData,B.uncompressedByteLength);else throw new Error("THREE.KTX2Loader: Unsupported supercompressionScheme.");ir[A]===PC?E=new Float32Array(i.buffer,i.byteOffset,i.byteLength/Float32Array.BYTES_PER_ELEMENT):ir[A]===_B?E=new Uint16Array(i.buffer,i.byteOffset,i.byteLength/Uint16Array.BYTES_PER_ELEMENT):E=i;const e=C===0?new Wi(E,I,g):new ps(E,I,g,C);return e.type=ir[A],e.format=Cy[A],e.colorSpace=c2[A]||jB,e.needsUpdate=!0,Promise.resolve(e)}const w2=Q=>{const A={nodes:{},materials:{}};return Q&&Q.traverse(I=>{I.name&&(A.nodes[I.name]=I),I.material&&!A.materials[I.material.name]&&(A.materials[I.material.name]=I.material)}),A};function Cn(Q,A){const{renderer:I}=ni(),g=typeof Q=="string"?A:Q,C=FM(JT,{extend(E){if(g!=null&&g.useDraco){const e=typeof g.useDraco=="string"?g.useDraco:"https://www.gstatic.com/draco/versioned/decoders/1.4.3/",t=new FT().setDecoderPath(e);E.setDRACOLoader(t)}if(g!=null&&g.useMeshopt&&E.setMeshoptDecoder(KT),g!=null&&g.ktxTranscoderPath&&I){const e=new ZB;e.setTranscoderPath(g==null?void 0:g.ktxTranscoderPath),e.detectSupport(I),E.setKTX2Loader(e)}}}),B=E=>C.load(E,{transform(e){return{...e,...w2(e.scene)}}}),i=typeof Q=="string"?Q:void 0;return i?B(i):{load:B}}const By=(Q,A)=>FM($h,A).load(Q),G2=()=>{const Q=gQ();return{hasEventListeners:I=>{const g=Q.$$.callbacks;return I in g&&g[I].length>0}}},st=new u,qc=new u,S2=new u,y2=(Q,A,I)=>{const g=st.setFromMatrixPosition(Q.matrixWorld);g.project(A);const C=I.width/2,B=I.height/2;return[g.x*C+C,-(g.y*B)+B]},k2=(Q,A)=>{const I=st.setFromMatrixPosition(Q.matrixWorld),g=qc.setFromMatrixPosition(A.matrixWorld),C=I.sub(g),B=A.getWorldDirection(S2);return C.angleTo(B)>Math.PI/2},M2=(Q,A,I,g)=>{const C=st.setFromMatrixPosition(Q.matrixWorld),B=C.clone();B.project(A),I.setFromCamera(B,A);const i=I.intersectObjects(g,!0);if(i.length){const E=i[0].distance;return C.distanceTo(I.ray.origin)<E}return!0},U2=(Q,A)=>{if(A instanceof ai)return A.zoom;if(A instanceof Mg){const I=st.setFromMatrixPosition(Q.matrixWorld),g=qc.setFromMatrixPosition(A.matrixWorld),C=A.fov*Math.PI/180,B=I.distanceTo(g);return 1/(2*Math.tan(C/2)*B)}else return 1},N2=(Q,A,I)=>{if(A instanceof Mg||A instanceof ai){const g=st.setFromMatrixPosition(Q.matrixWorld),C=qc.setFromMatrixPosition(A.matrixWorld),B=g.distanceTo(C),i=(I[1]-I[0])/(A.far-A.near),E=I[1]-i*A.far;return Math.round(i*B+E)}},Dh=Q=>Math.abs(Q)<1e-10?0:Q,U0=(Q,A,I="")=>{let g="matrix3d(";for(let C=0;C!==16;C++)g+=Dh(A[C]*Q.elements[C])+(C!==15?",":")");return I+g},K2=(Q=>A=>U0(A,Q))([1,-1,1,1,1,-1,1,1,1,-1,1,1,1,-1,1,1]),F2=(Q=>(A,I)=>U0(A,Q(I),"translate(-50%,-50%)"))(Q=>[1/Q,1/Q,1/Q,1,-1/Q,-1/Q,-1/Q,-1,1/Q,1/Q,1/Q,1,1,1,1,1]),R2=Q=>Q.split(/(?=[A-Z])/).join("-").toLowerCase(),vB=Q=>Object.entries(Q).filter(([A,I])=>!!I).map(([A,I])=>`${R2(A)}: ${I}`).join("; "),iB=(Q,A)=>{Q.update(I=>({...I,...A}))},J2=Q=>({ref:Q[0]&4}),Qy=Q=>({ref:Q[2]});function d2(Q){let A;const I=Q[40].threlte,g=GC(I,Q,Q[46],Qy);return{c(){g&&g.c()},m(C,B){g&&g.m(C,B),A=!0},p(C,B){g&&g.p&&(!A||B[0]&4|B[1]&32768)&&yC(g,I,C,C[46],A?SC(I,C[46],B,J2):kC(C[46]),Qy)},i(C){A||(MA(g,C),A=!0)},o(C){JA(g,C),A=!1},d(C){g&&g.d(C)}}}function p2(Q){let A=Q[1],I,g,C=Q[1]&&Er(Q);return{c(){C&&C.c(),I=IQ()},m(B,i){C&&C.m(B,i),vI(B,I,i),g=!0},p(B,i){B[1]?A?pg(A,B[1])?(C.d(1),C=Er(B),A=B[1],C.c(),C.m(I.parentNode,I)):C.p(B,i):(C=Er(B),A=B[1],C.c(),C.m(I.parentNode,I)):A&&(C.d(1),C=null,A=B[1])},i(B){g||(MA(C),g=!0)},o(B){JA(C),g=!1},d(B){B&&xI(I),C&&C.d(B)}}}function f2(Q){let A=Q[1],I,g,C=Q[1]&&or(Q);return{c(){C&&C.c(),I=IQ()},m(B,i){C&&C.m(B,i),vI(B,I,i),g=!0},p(B,i){B[1]?A?pg(A,B[1])?(C.d(1),C=or(B),A=B[1],C.c(),C.m(I.parentNode,I)):C.p(B,i):(C=or(B),A=B[1],C.c(),C.m(I.parentNode,I)):A&&(C.d(1),C=null,A=B[1])},i(B){g||(MA(C),g=!0)},o(B){JA(C),g=!1},d(B){B&&xI(I),C&&C.d(B)}}}function iy(Q){let A;const I=Q[40].default,g=GC(I,Q,Q[46],null);return{c(){g&&g.c()},m(C,B){g&&g.m(C,B),A=!0},p(C,B){g&&g.p&&(!A||B[1]&32768)&&yC(g,I,C,C[46],A?SC(I,C[46],B,null):kC(C[46]),null)},i(C){A||(MA(g,C),A=!0)},o(C){JA(g,C),A=!1},d(C){g&&g.d(C)}}}function Er(Q){let A,I,g,C,B,i,E,e=Q[6]&&iy(Q),t=[{style:C=vB(Q[11])}],s={};for(let n=0;n<t.length;n+=1)s=FB(s,t[n]);return{c(){A=NQ(Q[1]),I=NQ("div"),e&&e.c(),lC(I,"style",g=vB(Q[12])),Qs(Q[1])(A,s)},m(n,D){vI(n,A,D),rr(A,I),e&&e.m(I,null),Q[45](A),B=!0,i||(E=[Bs(Q[23].call(null,A)),Bs(Q[22].call(null,A))],i=!0)},p(n,D){n[6]?e?(e.p(n,D),D[0]&64&&MA(e,1)):(e=iy(n),e.c(),MA(e,1),e.m(I,null)):e&&(pC(),JA(e,1,1,()=>{e=null}),fC()),(!B||D[0]&4096&&g!==(g=vB(n[12])))&&lC(I,"style",g),Qs(n[1])(A,s=Us(t,[(!B||D[0]&2048&&C!==(C=vB(n[11])))&&{style:C}]))},i(n){B||(MA(e),B=!0)},o(n){JA(e),B=!1},d(n){n&&xI(A),e&&e.d(),Q[45](null),i=!1,IE(E)}}}function Ey(Q){let A;const I=Q[40].default,g=GC(I,Q,Q[46],null);return{c(){g&&g.c()},m(C,B){g&&g.m(C,B),A=!0},p(C,B){g&&g.p&&(!A||B[1]&32768)&&yC(g,I,C,C[46],A?SC(I,C[46],B,null):kC(C[46]),null)},i(C){A||(MA(g,C),A=!0)},o(C){JA(g,C),A=!1},d(C){g&&g.d(C)}}}function or(Q){let A,I,g,C,B,i,E,e,t,s=Q[6]&&Ey(Q),n=[{style:i=vB(Q[8])}],D={};for(let r=0;r<n.length;r+=1)D=FB(D,n[r]);return{c(){A=NQ(Q[1]),I=NQ("div"),g=NQ("div"),s&&s.c(),lC(g,"style",C=vB(Q[10])),lC(I,"style",B=vB(Q[9])),Qs(Q[1])(A,D)},m(r,l){vI(r,A,l),rr(A,I),rr(I,g),s&&s.m(g,null),Q[42](g),Q[43](I),Q[44](A),E=!0,e||(t=Bs(Q[23].call(null,A)),e=!0)},p(r,l){r[6]?s?(s.p(r,l),l[0]&64&&MA(s,1)):(s=Ey(r),s.c(),MA(s,1),s.m(g,null)):s&&(pC(),JA(s,1,1,()=>{s=null}),fC()),(!E||l[0]&1024&&C!==(C=vB(r[10])))&&lC(g,"style",C),(!E||l[0]&512&&B!==(B=vB(r[9])))&&lC(I,"style",B),Qs(r[1])(A,D=Us(n,[(!E||l[0]&256&&i!==(i=vB(r[8])))&&{style:i}]))},i(r){E||(MA(s),E=!0)},o(r){JA(s),E=!1},d(r){r&&xI(A),s&&s.d(),Q[42](null),Q[43](null),Q[44](null),e=!1,t()}}}function q2(Q){let A,I,g,C,B,i;const E=[{is:Q[2]},Q[25]];let e={$$slots:{default:[d2,({ref:D})=>({2:D}),({ref:D})=>[D?4:0]]},$$scope:{ctx:Q}};for(let D=0;D<E.length;D+=1)e=FB(e,E[D]);A=new Ng({props:e}),Q[41](A);const t=[f2,p2],s=[];function n(D,r){return D[0]?0:1}return g=n(Q),C=s[g]=t[g](Q),{c(){hI(A.$$.fragment),I=$g(),C.c(),B=IQ()},m(D,r){DI(A,D,r),vI(D,I,r),s[g].m(D,r),vI(D,B,r),i=!0},p(D,r){const l=r[0]&33554436?Us(E,[r[0]&4&&{is:D[2]},r[0]&33554432&&My(D[25])]):{};r[0]&4|r[1]&32768&&(l.$$scope={dirty:r,ctx:D}),A.$set(l);let G=g;g=n(D),g===G?s[g].p(D,r):(pC(),JA(s[G],1,1,()=>{s[G]=null}),fC(),C=s[g],C?C.p(D,r):(C=s[g]=t[g](D),C.c()),MA(C,1),C.m(B.parentNode,B))},i(D){i||(MA(A.$$.fragment,D),MA(C),i=!0)},o(D){JA(A.$$.fragment,D),JA(C),i=!1},d(D){Q[41](null),rI(A,D),D&&xI(I),s[g].d(D),D&&xI(B)}}}function u2(Q,A,I){const g=["transform","calculatePosition","eps","occlude","zIndexRange","sprite","pointerEvents","center","fullscreen","distanceFactor","as","portal","ref","visible"];let C=Bo(A,g),B,i,E,e,t,s,n,D,r,l,{$$slots:G={},$$scope:w}=A,{transform:c=!1}=A,{calculatePosition:k=y2}=A,{eps:y=.001}=A,{occlude:M=!1}=A,{zIndexRange:N=[16777271,0]}=A,{sprite:R=!1}=A,{pointerEvents:d="auto"}=A,{center:L=!1}=A,{fullscreen:F=!1}=A,{distanceFactor:q=void 0}=A,{as:W="div"}=A,{portal:$=void 0}=A;const H=Et();let{ref:x=new NB}=A;const{renderer:IA,camera:eA,scene:CA,size:QA}=ni();dg(Q,eA,_=>I(50,i=_)),dg(Q,QA,_=>I(37,B=_));const NA=()=>{if(!(i instanceof Mg)&&!(i instanceof ai))throw new Error("Only PerspectiveCamera or OrthographicCamera supported for component <HTML>");return i},SA=new GM;let HA=[0,0],dA=0,{visible:oA=!0}=A,lA=document.createElement(W),pA,uA;const{hasEventListeners:P}=G2();let zA=typeof M=="boolean"&&M===!0?[CA]:Array.isArray(M)?M:void 0;const AI=kB(QA,_=>_.width/2);dg(Q,AI,_=>I(39,e=_));const RA=kB(QA,_=>_.height/2);dg(Q,RA,_=>I(38,E=_));let LA={common:{el:ng({})},transform:{el:ng({position:"absolute",top:"0",left:"0",pointerEvents:"none",overflow:"hidden",display:"block",width:`${B.width}px`,height:`${B.height}px`}),outerRef:ng({position:"absolute",top:"0",left:"0",width:`${B.width}px`,height:`${B.height}px`,transformStyle:"preserve-3d",pointerEvents:"none"}),innerRef:ng({position:"absolute",pointerEvents:d})},noTransform:{el:ng({}),div:ng({position:"absolute",transform:L?"translate3d(-50%,-50%,0)":"none",top:F?`${-E}px`:void 0,left:F?`${-e}px`:void 0,width:F?`${B.width}px`:void 0,height:F?`${B.height}px`:void 0})}};const yA=kB([LA.transform.el,LA.common.el],([_,T])=>({..._,...T}));dg(Q,yA,_=>I(8,s=_));const tA=kB(LA.transform.outerRef,_=>_);dg(Q,tA,_=>I(9,n=_));const rA=kB(LA.transform.innerRef,_=>_);dg(Q,rA,_=>I(10,D=_));const mA=kB(LA.noTransform.el,_=>_);dg(Q,mA,_=>I(11,r=_));const qA=kB(LA.noTransform.div,_=>_);dg(Q,qA,_=>I(12,l=_));const ZA=()=>{let _=!0,T=x.parent;A:for(;T;){if("visible"in T&&!T.visible){_=!1;break A}T=T.parent}return _};let gI=ZA();sc(async()=>{I(6,gI=ZA());const _=NA();_.updateMatrixWorld(),x.updateWorldMatrix(!0,!1);const T=c?HA:k(x,_,B);if(c||Math.abs(dA-_.zoom)>y||Math.abs(HA[0]-T[0])>y||Math.abs(HA[1]-T[1])>y){const DA=k2(x,_),BA=oA;if(zA){const fA=M2(x,_,SA,zA);I(26,oA=fA&&!DA)}else I(26,oA=!DA);if(BA!==oA&&(P("visibilitychange")?H("visibilitychange",oA):iB(LA.common.el,{display:oA?"block":"none"})),iB(LA.common.el,{zIndex:`${N2(x,_,N)}`}),c){const fA=_.projectionMatrix.elements[5]*E,{isOrthographicCamera:OA,top:_A,left:xA,bottom:WA,right:tI}=_;let aI=x.matrixWorld;if(R&&(aI=_.matrixWorldInverse.clone().transpose().copyPosition(aI).scale(x.scale),aI.elements[3]=aI.elements[7]=aI.elements[11]=0,aI.elements[15]=1),iB(LA.transform.el,{perspective:OA?"":`${fA}px`}),pA&&uA){const Bg=OA?`scale(${fA}) translate(${Dh(-(tI+xA)/2)}px,${Dh((_A+WA)/2)}px)`:`translateZ(${fA}px)`,Z=K2(_.matrixWorldInverse);iB(LA.transform.outerRef,{transform:`${Bg}${Z}translate(${e}px, ${E}px)`}),iB(LA.transform.innerRef,{transform:F2(aI,1/((q||10)/400))})}}else{const fA=q===void 0?1:U2(x,_)*q;iB(LA.noTransform.el,{transform:`translate3d(${T[0]}px, ${T[1]}px, 0) scale(${fA})`})}HA=T,dA=_.zoom}},{debugFrameloopMessage:"HTML: tracking parent"});const $A=_=>{if(!x||c)return;CA.updateMatrixWorld();const T=k(x,i,B);iB(LA.noTransform.el,{position:"absolute",top:"0",left:"0",transform:`translate3d(${T[0]}px, ${T[1]}px, 0)`,transformOrigin:"0 0"})},oI=_=>{if(!IA){console.warn("HTML: renderer is undefined. Is this component a child to <Canvas>?");return}const T=$??IA.domElement.parentElement;if(!T){console.warn("HTML: target is undefined.");return}return T.appendChild(_),{destroy:()=>{_.parentNode&&_.parentNode.removeChild(_)}}},eI=RM();dg(Q,eI,_=>I(7,t=_));function m(_){PB[_?"unshift":"push"](()=>{t=_,eI.set(t)})}function f(_){PB[_?"unshift":"push"](()=>{uA=_,I(5,uA)})}function EA(_){PB[_?"unshift":"push"](()=>{pA=_,I(4,pA)})}function kA(_){PB[_?"unshift":"push"](()=>{lA=_,I(3,lA)})}function KA(_){PB[_?"unshift":"push"](()=>{lA=_,I(3,lA)})}return Q.$$set=_=>{A=FB(FB({},A),Cs(_)),I(25,C=Bo(A,g)),"transform"in _&&I(0,c=_.transform),"calculatePosition"in _&&I(27,k=_.calculatePosition),"eps"in _&&I(28,y=_.eps),"occlude"in _&&I(29,M=_.occlude),"zIndexRange"in _&&I(30,N=_.zIndexRange),"sprite"in _&&I(31,R=_.sprite),"pointerEvents"in _&&I(32,d=_.pointerEvents),"center"in _&&I(33,L=_.center),"fullscreen"in _&&I(34,F=_.fullscreen),"distanceFactor"in _&&I(35,q=_.distanceFactor),"as"in _&&I(1,W=_.as),"portal"in _&&I(36,$=_.portal),"ref"in _&&I(2,x=_.ref),"visible"in _&&I(26,oA=_.visible),"$$scope"in _&&I(46,w=_.$$scope)},Q.$$.update=()=>{Q.$$.dirty[0]&536870912&&(zA=typeof M=="boolean"&&M===!0?[CA]:Array.isArray(M)?M:void 0),Q.$$.dirty[1]&64&&iB(LA.transform.el,{width:`${B.width}px`,height:`${B.height}px`}),Q.$$.dirty[1]&64&&iB(LA.transform.outerRef,{width:`${B.width}px`,height:`${B.height}px`}),Q.$$.dirty[1]&2&&iB(LA.transform.innerRef,{pointerEvents:d}),Q.$$.dirty[1]&4&&iB(LA.noTransform.div,{transform:L?"translate3d(-50%, -50%, 0)":"none"}),Q.$$.dirty[1]&456&&iB(LA.noTransform.div,{top:F?`${-E}px`:void 0,left:F?`${-e}px`:void 0,width:F?`${B.width}px`:void 0,height:F?`${B.height}px`:void 0})},[c,W,x,lA,pA,uA,gI,t,s,n,D,r,l,eA,QA,AI,RA,yA,tA,rA,mA,qA,$A,oI,eI,C,oA,k,y,M,N,R,d,L,F,q,$,B,E,e,G,m,f,EA,kA,KA,w]}class L2 extends jg{constructor(A){super(),_g(this,A,u2,q2,pg,{transform:0,calculatePosition:27,eps:28,occlude:29,zIndexRange:30,sprite:31,pointerEvents:32,center:33,fullscreen:34,distanceFactor:35,as:1,portal:36,ref:2,visible:26},null,[-1,-1])}}var Ee=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ks={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ks.exports;(function(Q,A){(function(){var I,g="4.17.21",C=200,B="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",i="Expected a function",E="Invalid `variable` option passed into `_.template`",e="__lodash_hash_undefined__",t=500,s="__lodash_placeholder__",n=1,D=2,r=4,l=1,G=2,w=1,c=2,k=4,y=8,M=16,N=32,R=64,d=128,L=256,F=512,q=30,W="...",$=800,H=16,x=1,IA=2,eA=3,CA=1/0,QA=9007199254740991,NA=17976931348623157e292,SA=0/0,HA=4294967295,dA=HA-1,oA=HA>>>1,lA=[["ary",d],["bind",w],["bindKey",c],["curry",y],["curryRight",M],["flip",F],["partial",N],["partialRight",R],["rearg",L]],pA="[object Arguments]",uA="[object Array]",P="[object AsyncFunction]",zA="[object Boolean]",AI="[object Date]",RA="[object DOMException]",LA="[object Error]",yA="[object Function]",tA="[object GeneratorFunction]",rA="[object Map]",mA="[object Number]",qA="[object Null]",ZA="[object Object]",gI="[object Promise]",$A="[object Proxy]",oI="[object RegExp]",eI="[object Set]",m="[object String]",f="[object Symbol]",EA="[object Undefined]",kA="[object WeakMap]",KA="[object WeakSet]",_="[object ArrayBuffer]",T="[object DataView]",DA="[object Float32Array]",BA="[object Float64Array]",fA="[object Int8Array]",OA="[object Int16Array]",_A="[object Int32Array]",xA="[object Uint8Array]",WA="[object Uint8ClampedArray]",tI="[object Uint16Array]",aI="[object Uint32Array]",Bg=/\b__p \+= '';/g,Z=/\b(__p \+=) '' \+/g,aA=/(__e\(.*?\)|\b__t\)) \+\n'';/g,FA=/&(?:amp|lt|gt|quot|#39);/g,vA=/[&<>"']/g,II=RegExp(FA.source),VI=RegExp(vA.source),XI=/<%-([\s\S]+?)%>/g,vg=/<%([\s\S]+?)%>/g,nB=/<%=([\s\S]+?)%>/g,eg=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,MC=/^\w*$/,jC=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,fQ=/[\\^$.*+?()[\]{}|]/g,Dt=RegExp(fQ.source),Ko=/^\s+/,Bn=/\s/,Qn=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Y=/\{\n\/\* \[wrapped with (.+)\] \*/,gA=/,? & /,sA=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,AA=/[()=,{}\[\]\/\s]/,hA=/\\(\\)?/g,CI=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,BI=/\w*$/,lI=/^[-+]0x[0-9a-f]+$/i,SI=/^0b[01]+$/i,FI=/^\[object .+?Constructor\]$/,RI=/^0o[0-7]+$/i,dI=/^(?:0|[1-9]\d*)$/,WI=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,fg=/($^)/,qC=/['\n\r\u2028\u2029\\]/g,VC="\\ud800-\\udfff",cg="\\u0300-\\u036f",uI="\\ufe20-\\ufe2f",Fo="\\u20d0-\\u20ff",Kg=cg+uI+Fo,LB="\\u2700-\\u27bf",Ro="a-z\\xdf-\\xf6\\xf8-\\xff",Di="\\xac\\xb1\\xd7\\xf7",Jo="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Vg="\\u2000-\\u206f",BQ=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",iE="A-Z\\xc0-\\xd6\\xd8-\\xde",IC="\\ufe0e\\ufe0f",EE=Di+Jo+Vg+BQ,po="['’]",rt="["+VC+"]",Yc="["+EE+"]",ht="["+Kg+"]",Hc="\\d+",F0="["+LB+"]",mc="["+Ro+"]",bc="[^"+VC+EE+Hc+LB+Ro+iE+"]",En="\\ud83c[\\udffb-\\udfff]",R0="(?:"+ht+"|"+En+")",Tc="[^"+VC+"]",on="(?:\\ud83c[\\udde6-\\uddff]){2}",en="[\\ud800-\\udbff][\\udc00-\\udfff]",oE="["+iE+"]",xc="\\u200d",Oc="(?:"+mc+"|"+bc+")",J0="(?:"+oE+"|"+bc+")",vc="(?:"+po+"(?:d|ll|m|re|s|t|ve))?",Pc="(?:"+po+"(?:D|LL|M|RE|S|T|VE))?",Zc=R0+"?",Wc="["+IC+"]?",d0="(?:"+xc+"(?:"+[Tc,on,en].join("|")+")"+Wc+Zc+")*",p0="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",f0="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",_c=Wc+Zc+d0,q0="(?:"+[F0,on,en].join("|")+")"+_c,u0="(?:"+[Tc+ht+"?",ht,on,en,rt].join("|")+")",L0=RegExp(po,"g"),Y0=RegExp(ht,"g"),tn=RegExp(En+"(?="+En+")|"+u0+_c,"g"),H0=RegExp([oE+"?"+mc+"+"+vc+"(?="+[Yc,oE,"$"].join("|")+")",J0+"+"+Pc+"(?="+[Yc,oE+Oc,"$"].join("|")+")",oE+"?"+Oc+"+"+vc,oE+"+"+Pc,f0,p0,Hc,q0].join("|"),"g"),m0=RegExp("["+xc+VC+Kg+IC+"]"),b0=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,T0=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],x0=-1,Qg={};Qg[DA]=Qg[BA]=Qg[fA]=Qg[OA]=Qg[_A]=Qg[xA]=Qg[WA]=Qg[tI]=Qg[aI]=!0,Qg[pA]=Qg[uA]=Qg[_]=Qg[zA]=Qg[T]=Qg[AI]=Qg[LA]=Qg[yA]=Qg[rA]=Qg[mA]=Qg[ZA]=Qg[oI]=Qg[eI]=Qg[m]=Qg[kA]=!1;var gg={};gg[pA]=gg[uA]=gg[_]=gg[T]=gg[zA]=gg[AI]=gg[DA]=gg[BA]=gg[fA]=gg[OA]=gg[_A]=gg[rA]=gg[mA]=gg[ZA]=gg[oI]=gg[eI]=gg[m]=gg[f]=gg[xA]=gg[WA]=gg[tI]=gg[aI]=!0,gg[LA]=gg[yA]=gg[kA]=!1;var O0={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},v0={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},P0={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Z0={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},W0=parseFloat,_0=parseInt,jc=typeof Ee=="object"&&Ee&&Ee.Object===Object&&Ee,j0=typeof self=="object"&&self&&self.Object===Object&&self,Xg=jc||j0||Function("return this")(),an=A&&!A.nodeType&&A,ri=an&&!0&&Q&&!Q.nodeType&&Q,Vc=ri&&ri.exports===an,sn=Vc&&jc.process,XC=function(){try{var j=ri&&ri.require&&ri.require("util").types;return j||sn&&sn.binding&&sn.binding("util")}catch{}}(),Xc=XC&&XC.isArrayBuffer,zc=XC&&XC.isDate,$c=XC&&XC.isMap,Al=XC&&XC.isRegExp,Il=XC&&XC.isSet,gl=XC&&XC.isTypedArray;function uC(j,nA,iA){switch(iA.length){case 0:return j.call(nA);case 1:return j.call(nA,iA[0]);case 2:return j.call(nA,iA[0],iA[1]);case 3:return j.call(nA,iA[0],iA[1],iA[2])}return j.apply(nA,iA)}function V0(j,nA,iA,PA){for(var wI=-1,ZI=j==null?0:j.length;++wI<ZI;){var Lg=j[wI];nA(PA,Lg,iA(Lg),j)}return PA}function zC(j,nA){for(var iA=-1,PA=j==null?0:j.length;++iA<PA&&nA(j[iA],iA,j)!==!1;);return j}function X0(j,nA){for(var iA=j==null?0:j.length;iA--&&nA(j[iA],iA,j)!==!1;);return j}function Cl(j,nA){for(var iA=-1,PA=j==null?0:j.length;++iA<PA;)if(!nA(j[iA],iA,j))return!1;return!0}function qQ(j,nA){for(var iA=-1,PA=j==null?0:j.length,wI=0,ZI=[];++iA<PA;){var Lg=j[iA];nA(Lg,iA,j)&&(ZI[wI++]=Lg)}return ZI}function ct(j,nA){var iA=j==null?0:j.length;return!!iA&&eE(j,nA,0)>-1}function nn(j,nA,iA){for(var PA=-1,wI=j==null?0:j.length;++PA<wI;)if(iA(nA,j[PA]))return!0;return!1}function og(j,nA){for(var iA=-1,PA=j==null?0:j.length,wI=Array(PA);++iA<PA;)wI[iA]=nA(j[iA],iA,j);return wI}function uQ(j,nA){for(var iA=-1,PA=nA.length,wI=j.length;++iA<PA;)j[wI+iA]=nA[iA];return j}function Dn(j,nA,iA,PA){var wI=-1,ZI=j==null?0:j.length;for(PA&&ZI&&(iA=j[++wI]);++wI<ZI;)iA=nA(iA,j[wI],wI,j);return iA}function z0(j,nA,iA,PA){var wI=j==null?0:j.length;for(PA&&wI&&(iA=j[--wI]);wI--;)iA=nA(iA,j[wI],wI,j);return iA}function rn(j,nA){for(var iA=-1,PA=j==null?0:j.length;++iA<PA;)if(nA(j[iA],iA,j))return!0;return!1}var $0=hn("length");function AU(j){return j.split("")}function IU(j){return j.match(sA)||[]}function Bl(j,nA,iA){var PA;return iA(j,function(wI,ZI,Lg){if(nA(wI,ZI,Lg))return PA=ZI,!1}),PA}function lt(j,nA,iA,PA){for(var wI=j.length,ZI=iA+(PA?1:-1);PA?ZI--:++ZI<wI;)if(nA(j[ZI],ZI,j))return ZI;return-1}function eE(j,nA,iA){return nA===nA?nU(j,nA,iA):lt(j,Ql,iA)}function gU(j,nA,iA,PA){for(var wI=iA-1,ZI=j.length;++wI<ZI;)if(PA(j[wI],nA))return wI;return-1}function Ql(j){return j!==j}function il(j,nA){var iA=j==null?0:j.length;return iA?ln(j,nA)/iA:SA}function hn(j){return function(nA){return nA==null?I:nA[j]}}function cn(j){return function(nA){return j==null?I:j[nA]}}function El(j,nA,iA,PA,wI){return wI(j,function(ZI,Lg,Ig){iA=PA?(PA=!1,ZI):nA(iA,ZI,Lg,Ig)}),iA}function CU(j,nA){var iA=j.length;for(j.sort(nA);iA--;)j[iA]=j[iA].value;return j}function ln(j,nA){for(var iA,PA=-1,wI=j.length;++PA<wI;){var ZI=nA(j[PA]);ZI!==I&&(iA=iA===I?ZI:iA+ZI)}return iA}function wn(j,nA){for(var iA=-1,PA=Array(j);++iA<j;)PA[iA]=nA(iA);return PA}function BU(j,nA){return og(nA,function(iA){return[iA,j[iA]]})}function ol(j){return j&&j.slice(0,sl(j)+1).replace(Ko,"")}function LC(j){return function(nA){return j(nA)}}function Gn(j,nA){return og(nA,function(iA){return j[iA]})}function fo(j,nA){return j.has(nA)}function el(j,nA){for(var iA=-1,PA=j.length;++iA<PA&&eE(nA,j[iA],0)>-1;);return iA}function tl(j,nA){for(var iA=j.length;iA--&&eE(nA,j[iA],0)>-1;);return iA}function QU(j,nA){for(var iA=j.length,PA=0;iA--;)j[iA]===nA&&++PA;return PA}var iU=cn(O0),EU=cn(v0);function oU(j){return"\\"+Z0[j]}function eU(j,nA){return j==null?I:j[nA]}function tE(j){return m0.test(j)}function tU(j){return b0.test(j)}function aU(j){for(var nA,iA=[];!(nA=j.next()).done;)iA.push(nA.value);return iA}function Sn(j){var nA=-1,iA=Array(j.size);return j.forEach(function(PA,wI){iA[++nA]=[wI,PA]}),iA}function al(j,nA){return function(iA){return j(nA(iA))}}function LQ(j,nA){for(var iA=-1,PA=j.length,wI=0,ZI=[];++iA<PA;){var Lg=j[iA];(Lg===nA||Lg===s)&&(j[iA]=s,ZI[wI++]=iA)}return ZI}function wt(j){var nA=-1,iA=Array(j.size);return j.forEach(function(PA){iA[++nA]=PA}),iA}function sU(j){var nA=-1,iA=Array(j.size);return j.forEach(function(PA){iA[++nA]=[PA,PA]}),iA}function nU(j,nA,iA){for(var PA=iA-1,wI=j.length;++PA<wI;)if(j[PA]===nA)return PA;return-1}function DU(j,nA,iA){for(var PA=iA+1;PA--;)if(j[PA]===nA)return PA;return PA}function aE(j){return tE(j)?hU(j):$0(j)}function DB(j){return tE(j)?cU(j):AU(j)}function sl(j){for(var nA=j.length;nA--&&Bn.test(j.charAt(nA)););return nA}var rU=cn(P0);function hU(j){for(var nA=tn.lastIndex=0;tn.test(j);)++nA;return nA}function cU(j){return j.match(tn)||[]}function lU(j){return j.match(H0)||[]}var wU=function j(nA){nA=nA==null?Xg:sE.defaults(Xg.Object(),nA,sE.pick(Xg,T0));var iA=nA.Array,PA=nA.Date,wI=nA.Error,ZI=nA.Function,Lg=nA.Math,Ig=nA.Object,yn=nA.RegExp,GU=nA.String,$C=nA.TypeError,Gt=iA.prototype,SU=ZI.prototype,nE=Ig.prototype,St=nA["__core-js_shared__"],yt=SU.toString,zI=nE.hasOwnProperty,yU=0,nl=function(){var o=/[^.]+$/.exec(St&&St.keys&&St.keys.IE_PROTO||"");return o?"Symbol(src)_1."+o:""}(),kt=nE.toString,kU=yt.call(Ig),MU=Xg._,UU=yn("^"+yt.call(zI).replace(fQ,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Mt=Vc?nA.Buffer:I,YQ=nA.Symbol,Ut=nA.Uint8Array,Dl=Mt?Mt.allocUnsafe:I,Nt=al(Ig.getPrototypeOf,Ig),rl=Ig.create,hl=nE.propertyIsEnumerable,Kt=Gt.splice,cl=YQ?YQ.isConcatSpreadable:I,qo=YQ?YQ.iterator:I,hi=YQ?YQ.toStringTag:I,Ft=function(){try{var o=Si(Ig,"defineProperty");return o({},"",{}),o}catch{}}(),NU=nA.clearTimeout!==Xg.clearTimeout&&nA.clearTimeout,KU=PA&&PA.now!==Xg.Date.now&&PA.now,FU=nA.setTimeout!==Xg.setTimeout&&nA.setTimeout,Rt=Lg.ceil,Jt=Lg.floor,kn=Ig.getOwnPropertySymbols,RU=Mt?Mt.isBuffer:I,ll=nA.isFinite,JU=Gt.join,dU=al(Ig.keys,Ig),Yg=Lg.max,gC=Lg.min,pU=PA.now,fU=nA.parseInt,wl=Lg.random,qU=Gt.reverse,Mn=Si(nA,"DataView"),uo=Si(nA,"Map"),Un=Si(nA,"Promise"),DE=Si(nA,"Set"),Lo=Si(nA,"WeakMap"),Yo=Si(Ig,"create"),dt=Lo&&new Lo,rE={},uU=yi(Mn),LU=yi(uo),YU=yi(Un),HU=yi(DE),mU=yi(Lo),pt=YQ?YQ.prototype:I,Ho=pt?pt.valueOf:I,Gl=pt?pt.toString:I;function J(o){if(lg(o)&&!GI(o)&&!(o instanceof LI)){if(o instanceof AB)return o;if(zI.call(o,"__wrapped__"))return Sw(o)}return new AB(o)}var hE=function(){function o(){}return function(a){if(!tg(a))return{};if(rl)return rl(a);o.prototype=a;var h=new o;return o.prototype=I,h}}();function ft(){}function AB(o,a){this.__wrapped__=o,this.__actions__=[],this.__chain__=!!a,this.__index__=0,this.__values__=I}J.templateSettings={escape:XI,evaluate:vg,interpolate:nB,variable:"",imports:{_:J}},J.prototype=ft.prototype,J.prototype.constructor=J,AB.prototype=hE(ft.prototype),AB.prototype.constructor=AB;function LI(o){this.__wrapped__=o,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=HA,this.__views__=[]}function bU(){var o=new LI(this.__wrapped__);return o.__actions__=UC(this.__actions__),o.__dir__=this.__dir__,o.__filtered__=this.__filtered__,o.__iteratees__=UC(this.__iteratees__),o.__takeCount__=this.__takeCount__,o.__views__=UC(this.__views__),o}function TU(){if(this.__filtered__){var o=new LI(this);o.__dir__=-1,o.__filtered__=!0}else o=this.clone(),o.__dir__*=-1;return o}function xU(){var o=this.__wrapped__.value(),a=this.__dir__,h=GI(o),S=a<0,K=h?o.length:0,p=AK(0,K,this.__views__),b=p.start,O=p.end,V=O-b,wA=S?O:b-1,GA=this.__iteratees__,UA=GA.length,bA=0,VA=gC(V,this.__takeCount__);if(!h||!S&&K==V&&VA==V)return vl(o,this.__actions__);var sI=[];A:for(;V--&&bA<VA;){wA+=a;for(var MI=-1,nI=o[wA];++MI<UA;){var fI=GA[MI],HI=fI.iteratee,mC=fI.type,nC=HI(nI);if(mC==IA)nI=nC;else if(!nC){if(mC==x)continue A;break A}}sI[bA++]=nI}return sI}LI.prototype=hE(ft.prototype),LI.prototype.constructor=LI;function ci(o){var a=-1,h=o==null?0:o.length;for(this.clear();++a<h;){var S=o[a];this.set(S[0],S[1])}}function OU(){this.__data__=Yo?Yo(null):{},this.size=0}function vU(o){var a=this.has(o)&&delete this.__data__[o];return this.size-=a?1:0,a}function PU(o){var a=this.__data__;if(Yo){var h=a[o];return h===e?I:h}return zI.call(a,o)?a[o]:I}function ZU(o){var a=this.__data__;return Yo?a[o]!==I:zI.call(a,o)}function WU(o,a){var h=this.__data__;return this.size+=this.has(o)?0:1,h[o]=Yo&&a===I?e:a,this}ci.prototype.clear=OU,ci.prototype.delete=vU,ci.prototype.get=PU,ci.prototype.has=ZU,ci.prototype.set=WU;function QQ(o){var a=-1,h=o==null?0:o.length;for(this.clear();++a<h;){var S=o[a];this.set(S[0],S[1])}}function _U(){this.__data__=[],this.size=0}function jU(o){var a=this.__data__,h=qt(a,o);if(h<0)return!1;var S=a.length-1;return h==S?a.pop():Kt.call(a,h,1),--this.size,!0}function VU(o){var a=this.__data__,h=qt(a,o);return h<0?I:a[h][1]}function XU(o){return qt(this.__data__,o)>-1}function zU(o,a){var h=this.__data__,S=qt(h,o);return S<0?(++this.size,h.push([o,a])):h[S][1]=a,this}QQ.prototype.clear=_U,QQ.prototype.delete=jU,QQ.prototype.get=VU,QQ.prototype.has=XU,QQ.prototype.set=zU;function iQ(o){var a=-1,h=o==null?0:o.length;for(this.clear();++a<h;){var S=o[a];this.set(S[0],S[1])}}function $U(){this.size=0,this.__data__={hash:new ci,map:new(uo||QQ),string:new ci}}function AN(o){var a=Zt(this,o).delete(o);return this.size-=a?1:0,a}function IN(o){return Zt(this,o).get(o)}function gN(o){return Zt(this,o).has(o)}function CN(o,a){var h=Zt(this,o),S=h.size;return h.set(o,a),this.size+=h.size==S?0:1,this}iQ.prototype.clear=$U,iQ.prototype.delete=AN,iQ.prototype.get=IN,iQ.prototype.has=gN,iQ.prototype.set=CN;function li(o){var a=-1,h=o==null?0:o.length;for(this.__data__=new iQ;++a<h;)this.add(o[a])}function BN(o){return this.__data__.set(o,e),this}function QN(o){return this.__data__.has(o)}li.prototype.add=li.prototype.push=BN,li.prototype.has=QN;function rB(o){var a=this.__data__=new QQ(o);this.size=a.size}function iN(){this.__data__=new QQ,this.size=0}function EN(o){var a=this.__data__,h=a.delete(o);return this.size=a.size,h}function oN(o){return this.__data__.get(o)}function eN(o){return this.__data__.has(o)}function tN(o,a){var h=this.__data__;if(h instanceof QQ){var S=h.__data__;if(!uo||S.length<C-1)return S.push([o,a]),this.size=++h.size,this;h=this.__data__=new iQ(S)}return h.set(o,a),this.size=h.size,this}rB.prototype.clear=iN,rB.prototype.delete=EN,rB.prototype.get=oN,rB.prototype.has=eN,rB.prototype.set=tN;function Sl(o,a){var h=GI(o),S=!h&&ki(o),K=!h&&!S&&xQ(o),p=!h&&!S&&!K&&GE(o),b=h||S||K||p,O=b?wn(o.length,GU):[],V=O.length;for(var wA in o)(a||zI.call(o,wA))&&!(b&&(wA=="length"||K&&(wA=="offset"||wA=="parent")||p&&(wA=="buffer"||wA=="byteLength"||wA=="byteOffset")||tQ(wA,V)))&&O.push(wA);return O}function yl(o){var a=o.length;return a?o[Ln(0,a-1)]:I}function aN(o,a){return Wt(UC(o),wi(a,0,o.length))}function sN(o){return Wt(UC(o))}function Nn(o,a,h){(h!==I&&!hB(o[a],h)||h===I&&!(a in o))&&EQ(o,a,h)}function mo(o,a,h){var S=o[a];(!(zI.call(o,a)&&hB(S,h))||h===I&&!(a in o))&&EQ(o,a,h)}function qt(o,a){for(var h=o.length;h--;)if(hB(o[h][0],a))return h;return-1}function nN(o,a,h,S){return HQ(o,function(K,p,b){a(S,K,h(K),b)}),S}function kl(o,a){return o&&HB(a,Pg(a),o)}function DN(o,a){return o&&HB(a,KC(a),o)}function EQ(o,a,h){a=="__proto__"&&Ft?Ft(o,a,{configurable:!0,enumerable:!0,value:h,writable:!0}):o[a]=h}function Kn(o,a){for(var h=-1,S=a.length,K=iA(S),p=o==null;++h<S;)K[h]=p?I:ED(o,a[h]);return K}function wi(o,a,h){return o===o&&(h!==I&&(o=o<=h?o:h),a!==I&&(o=o>=a?o:a)),o}function IB(o,a,h,S,K,p){var b,O=a&n,V=a&D,wA=a&r;if(h&&(b=K?h(o,S,K,p):h(o)),b!==I)return b;if(!tg(o))return o;var GA=GI(o);if(GA){if(b=gK(o),!O)return UC(o,b)}else{var UA=CC(o),bA=UA==yA||UA==tA;if(xQ(o))return Wl(o,O);if(UA==ZA||UA==pA||bA&&!K){if(b=V||bA?{}:sw(o),!O)return V?PN(o,DN(b,o)):vN(o,kl(b,o))}else{if(!gg[UA])return K?o:{};b=CK(o,UA,O)}}p||(p=new rB);var VA=p.get(o);if(VA)return VA;p.set(o,b),Tw(o)?o.forEach(function(nI){b.add(IB(nI,a,h,nI,o,p))}):mw(o)&&o.forEach(function(nI,fI){b.set(fI,IB(nI,a,h,fI,o,p))});var sI=wA?V?Wn:Zn:V?KC:Pg,MI=GA?I:sI(o);return zC(MI||o,function(nI,fI){MI&&(fI=nI,nI=o[fI]),mo(b,fI,IB(nI,a,h,fI,o,p))}),b}function rN(o){var a=Pg(o);return function(h){return Ml(h,o,a)}}function Ml(o,a,h){var S=h.length;if(o==null)return!S;for(o=Ig(o);S--;){var K=h[S],p=a[K],b=o[K];if(b===I&&!(K in o)||!p(b))return!1}return!0}function Ul(o,a,h){if(typeof o!="function")throw new $C(i);return Zo(function(){o.apply(I,h)},a)}function bo(o,a,h,S){var K=-1,p=ct,b=!0,O=o.length,V=[],wA=a.length;if(!O)return V;h&&(a=og(a,LC(h))),S?(p=nn,b=!1):a.length>=C&&(p=fo,b=!1,a=new li(a));A:for(;++K<O;){var GA=o[K],UA=h==null?GA:h(GA);if(GA=S||GA!==0?GA:0,b&&UA===UA){for(var bA=wA;bA--;)if(a[bA]===UA)continue A;V.push(GA)}else p(a,UA,S)||V.push(GA)}return V}var HQ=zl(YB),Nl=zl(Rn,!0);function hN(o,a){var h=!0;return HQ(o,function(S,K,p){return h=!!a(S,K,p),h}),h}function ut(o,a,h){for(var S=-1,K=o.length;++S<K;){var p=o[S],b=a(p);if(b!=null&&(O===I?b===b&&!HC(b):h(b,O)))var O=b,V=p}return V}function cN(o,a,h,S){var K=o.length;for(h=yI(h),h<0&&(h=-h>K?0:K+h),S=S===I||S>K?K:yI(S),S<0&&(S+=K),S=h>S?0:Ow(S);h<S;)o[h++]=a;return o}function Kl(o,a){var h=[];return HQ(o,function(S,K,p){a(S,K,p)&&h.push(S)}),h}function zg(o,a,h,S,K){var p=-1,b=o.length;for(h||(h=QK),K||(K=[]);++p<b;){var O=o[p];a>0&&h(O)?a>1?zg(O,a-1,h,S,K):uQ(K,O):S||(K[K.length]=O)}return K}var Fn=$l(),Fl=$l(!0);function YB(o,a){return o&&Fn(o,a,Pg)}function Rn(o,a){return o&&Fl(o,a,Pg)}function Lt(o,a){return qQ(a,function(h){return aQ(o[h])})}function Gi(o,a){a=bQ(a,o);for(var h=0,S=a.length;o!=null&&h<S;)o=o[mB(a[h++])];return h&&h==S?o:I}function Rl(o,a,h){var S=a(o);return GI(o)?S:uQ(S,h(o))}function aC(o){return o==null?o===I?EA:qA:hi&&hi in Ig(o)?$N(o):sK(o)}function Jn(o,a){return o>a}function lN(o,a){return o!=null&&zI.call(o,a)}function wN(o,a){return o!=null&&a in Ig(o)}function GN(o,a,h){return o>=gC(a,h)&&o<Yg(a,h)}function dn(o,a,h){for(var S=h?nn:ct,K=o[0].length,p=o.length,b=p,O=iA(p),V=1/0,wA=[];b--;){var GA=o[b];b&&a&&(GA=og(GA,LC(a))),V=gC(GA.length,V),O[b]=!h&&(a||K>=120&&GA.length>=120)?new li(b&&GA):I}GA=o[0];var UA=-1,bA=O[0];A:for(;++UA<K&&wA.length<V;){var VA=GA[UA],sI=a?a(VA):VA;if(VA=h||VA!==0?VA:0,!(bA?fo(bA,sI):S(wA,sI,h))){for(b=p;--b;){var MI=O[b];if(!(MI?fo(MI,sI):S(o[b],sI,h)))continue A}bA&&bA.push(sI),wA.push(VA)}}return wA}function SN(o,a,h,S){return YB(o,function(K,p,b){a(S,h(K),p,b)}),S}function To(o,a,h){a=bQ(a,o),o=hw(o,a);var S=o==null?o:o[mB(CB(a))];return S==null?I:uC(S,o,h)}function Jl(o){return lg(o)&&aC(o)==pA}function yN(o){return lg(o)&&aC(o)==_}function kN(o){return lg(o)&&aC(o)==AI}function xo(o,a,h,S,K){return o===a?!0:o==null||a==null||!lg(o)&&!lg(a)?o!==o&&a!==a:MN(o,a,h,S,xo,K)}function MN(o,a,h,S,K,p){var b=GI(o),O=GI(a),V=b?uA:CC(o),wA=O?uA:CC(a);V=V==pA?ZA:V,wA=wA==pA?ZA:wA;var GA=V==ZA,UA=wA==ZA,bA=V==wA;if(bA&&xQ(o)){if(!xQ(a))return!1;b=!0,GA=!1}if(bA&&!GA)return p||(p=new rB),b||GE(o)?ew(o,a,h,S,K,p):XN(o,a,V,h,S,K,p);if(!(h&l)){var VA=GA&&zI.call(o,"__wrapped__"),sI=UA&&zI.call(a,"__wrapped__");if(VA||sI){var MI=VA?o.value():o,nI=sI?a.value():a;return p||(p=new rB),K(MI,nI,h,S,p)}}return bA?(p||(p=new rB),zN(o,a,h,S,K,p)):!1}function UN(o){return lg(o)&&CC(o)==rA}function pn(o,a,h,S){var K=h.length,p=K,b=!S;if(o==null)return!p;for(o=Ig(o);K--;){var O=h[K];if(b&&O[2]?O[1]!==o[O[0]]:!(O[0]in o))return!1}for(;++K<p;){O=h[K];var V=O[0],wA=o[V],GA=O[1];if(b&&O[2]){if(wA===I&&!(V in o))return!1}else{var UA=new rB;if(S)var bA=S(wA,GA,V,o,a,UA);if(!(bA===I?xo(GA,wA,l|G,S,UA):bA))return!1}}return!0}function dl(o){if(!tg(o)||EK(o))return!1;var a=aQ(o)?UU:FI;return a.test(yi(o))}function NN(o){return lg(o)&&aC(o)==oI}function KN(o){return lg(o)&&CC(o)==eI}function FN(o){return lg(o)&&$t(o.length)&&!!Qg[aC(o)]}function pl(o){return typeof o=="function"?o:o==null?FC:typeof o=="object"?GI(o)?ul(o[0],o[1]):ql(o):AG(o)}function fn(o){if(!Po(o))return dU(o);var a=[];for(var h in Ig(o))zI.call(o,h)&&h!="constructor"&&a.push(h);return a}function RN(o){if(!tg(o))return aK(o);var a=Po(o),h=[];for(var S in o)S=="constructor"&&(a||!zI.call(o,S))||h.push(S);return h}function qn(o,a){return o<a}function fl(o,a){var h=-1,S=NC(o)?iA(o.length):[];return HQ(o,function(K,p,b){S[++h]=a(K,p,b)}),S}function ql(o){var a=jn(o);return a.length==1&&a[0][2]?Dw(a[0][0],a[0][1]):function(h){return h===o||pn(h,o,a)}}function ul(o,a){return Xn(o)&&nw(a)?Dw(mB(o),a):function(h){var S=ED(h,o);return S===I&&S===a?oD(h,o):xo(a,S,l|G)}}function Yt(o,a,h,S,K){o!==a&&Fn(a,function(p,b){if(K||(K=new rB),tg(p))JN(o,a,b,h,Yt,S,K);else{var O=S?S($n(o,b),p,b+"",o,a,K):I;O===I&&(O=p),Nn(o,b,O)}},KC)}function JN(o,a,h,S,K,p,b){var O=$n(o,h),V=$n(a,h),wA=b.get(V);if(wA){Nn(o,h,wA);return}var GA=p?p(O,V,h+"",o,a,b):I,UA=GA===I;if(UA){var bA=GI(V),VA=!bA&&xQ(V),sI=!bA&&!VA&&GE(V);GA=V,bA||VA||sI?GI(O)?GA=O:Fg(O)?GA=UC(O):VA?(UA=!1,GA=Wl(V,!0)):sI?(UA=!1,GA=_l(V,!0)):GA=[]:Wo(V)||ki(V)?(GA=O,ki(O)?GA=vw(O):(!tg(O)||aQ(O))&&(GA=sw(V))):UA=!1}UA&&(b.set(V,GA),K(GA,V,S,p,b),b.delete(V)),Nn(o,h,GA)}function Ll(o,a){var h=o.length;if(h)return a+=a<0?h:0,tQ(a,h)?o[a]:I}function Yl(o,a,h){a.length?a=og(a,function(p){return GI(p)?function(b){return Gi(b,p.length===1?p[0]:p)}:p}):a=[FC];var S=-1;a=og(a,LC(iI()));var K=fl(o,function(p,b,O){var V=og(a,function(wA){return wA(p)});return{criteria:V,index:++S,value:p}});return CU(K,function(p,b){return ON(p,b,h)})}function dN(o,a){return Hl(o,a,function(h,S){return oD(o,S)})}function Hl(o,a,h){for(var S=-1,K=a.length,p={};++S<K;){var b=a[S],O=Gi(o,b);h(O,b)&&Oo(p,bQ(b,o),O)}return p}function pN(o){return function(a){return Gi(a,o)}}function un(o,a,h,S){var K=S?gU:eE,p=-1,b=a.length,O=o;for(o===a&&(a=UC(a)),h&&(O=og(o,LC(h)));++p<b;)for(var V=0,wA=a[p],GA=h?h(wA):wA;(V=K(O,GA,V,S))>-1;)O!==o&&Kt.call(O,V,1),Kt.call(o,V,1);return o}function ml(o,a){for(var h=o?a.length:0,S=h-1;h--;){var K=a[h];if(h==S||K!==p){var p=K;tQ(K)?Kt.call(o,K,1):mn(o,K)}}return o}function Ln(o,a){return o+Jt(wl()*(a-o+1))}function fN(o,a,h,S){for(var K=-1,p=Yg(Rt((a-o)/(h||1)),0),b=iA(p);p--;)b[S?p:++K]=o,o+=h;return b}function Yn(o,a){var h="";if(!o||a<1||a>QA)return h;do a%2&&(h+=o),a=Jt(a/2),a&&(o+=o);while(a);return h}function JI(o,a){return AD(rw(o,a,FC),o+"")}function qN(o){return yl(SE(o))}function uN(o,a){var h=SE(o);return Wt(h,wi(a,0,h.length))}function Oo(o,a,h,S){if(!tg(o))return o;a=bQ(a,o);for(var K=-1,p=a.length,b=p-1,O=o;O!=null&&++K<p;){var V=mB(a[K]),wA=h;if(V==="__proto__"||V==="constructor"||V==="prototype")return o;if(K!=b){var GA=O[V];wA=S?S(GA,V,O):I,wA===I&&(wA=tg(GA)?GA:tQ(a[K+1])?[]:{})}mo(O,V,wA),O=O[V]}return o}var bl=dt?function(o,a){return dt.set(o,a),o}:FC,LN=Ft?function(o,a){return Ft(o,"toString",{configurable:!0,enumerable:!1,value:tD(a),writable:!0})}:FC;function YN(o){return Wt(SE(o))}function gB(o,a,h){var S=-1,K=o.length;a<0&&(a=-a>K?0:K+a),h=h>K?K:h,h<0&&(h+=K),K=a>h?0:h-a>>>0,a>>>=0;for(var p=iA(K);++S<K;)p[S]=o[S+a];return p}function HN(o,a){var h;return HQ(o,function(S,K,p){return h=a(S,K,p),!h}),!!h}function Ht(o,a,h){var S=0,K=o==null?S:o.length;if(typeof a=="number"&&a===a&&K<=oA){for(;S<K;){var p=S+K>>>1,b=o[p];b!==null&&!HC(b)&&(h?b<=a:b<a)?S=p+1:K=p}return K}return Hn(o,a,FC,h)}function Hn(o,a,h,S){var K=0,p=o==null?0:o.length;if(p===0)return 0;a=h(a);for(var b=a!==a,O=a===null,V=HC(a),wA=a===I;K<p;){var GA=Jt((K+p)/2),UA=h(o[GA]),bA=UA!==I,VA=UA===null,sI=UA===UA,MI=HC(UA);if(b)var nI=S||sI;else wA?nI=sI&&(S||bA):O?nI=sI&&bA&&(S||!VA):V?nI=sI&&bA&&!VA&&(S||!MI):VA||MI?nI=!1:nI=S?UA<=a:UA<a;nI?K=GA+1:p=GA}return gC(p,dA)}function Tl(o,a){for(var h=-1,S=o.length,K=0,p=[];++h<S;){var b=o[h],O=a?a(b):b;if(!h||!hB(O,V)){var V=O;p[K++]=b===0?0:b}}return p}function xl(o){return typeof o=="number"?o:HC(o)?SA:+o}function YC(o){if(typeof o=="string")return o;if(GI(o))return og(o,YC)+"";if(HC(o))return Gl?Gl.call(o):"";var a=o+"";return a=="0"&&1/o==-CA?"-0":a}function mQ(o,a,h){var S=-1,K=ct,p=o.length,b=!0,O=[],V=O;if(h)b=!1,K=nn;else if(p>=C){var wA=a?null:jN(o);if(wA)return wt(wA);b=!1,K=fo,V=new li}else V=a?[]:O;A:for(;++S<p;){var GA=o[S],UA=a?a(GA):GA;if(GA=h||GA!==0?GA:0,b&&UA===UA){for(var bA=V.length;bA--;)if(V[bA]===UA)continue A;a&&V.push(UA),O.push(GA)}else K(V,UA,h)||(V!==O&&V.push(UA),O.push(GA))}return O}function mn(o,a){return a=bQ(a,o),o=hw(o,a),o==null||delete o[mB(CB(a))]}function Ol(o,a,h,S){return Oo(o,a,h(Gi(o,a)),S)}function mt(o,a,h,S){for(var K=o.length,p=S?K:-1;(S?p--:++p<K)&&a(o[p],p,o););return h?gB(o,S?0:p,S?p+1:K):gB(o,S?p+1:0,S?K:p)}function vl(o,a){var h=o;return h instanceof LI&&(h=h.value()),Dn(a,function(S,K){return K.func.apply(K.thisArg,uQ([S],K.args))},h)}function bn(o,a,h){var S=o.length;if(S<2)return S?mQ(o[0]):[];for(var K=-1,p=iA(S);++K<S;)for(var b=o[K],O=-1;++O<S;)O!=K&&(p[K]=bo(p[K]||b,o[O],a,h));return mQ(zg(p,1),a,h)}function Pl(o,a,h){for(var S=-1,K=o.length,p=a.length,b={};++S<K;){var O=S<p?a[S]:I;h(b,o[S],O)}return b}function Tn(o){return Fg(o)?o:[]}function xn(o){return typeof o=="function"?o:FC}function bQ(o,a){return GI(o)?o:Xn(o,a)?[o]:Gw(_I(o))}var mN=JI;function TQ(o,a,h){var S=o.length;return h=h===I?S:h,!a&&h>=S?o:gB(o,a,h)}var Zl=NU||function(o){return Xg.clearTimeout(o)};function Wl(o,a){if(a)return o.slice();var h=o.length,S=Dl?Dl(h):new o.constructor(h);return o.copy(S),S}function On(o){var a=new o.constructor(o.byteLength);return new Ut(a).set(new Ut(o)),a}function bN(o,a){var h=a?On(o.buffer):o.buffer;return new o.constructor(h,o.byteOffset,o.byteLength)}function TN(o){var a=new o.constructor(o.source,BI.exec(o));return a.lastIndex=o.lastIndex,a}function xN(o){return Ho?Ig(Ho.call(o)):{}}function _l(o,a){var h=a?On(o.buffer):o.buffer;return new o.constructor(h,o.byteOffset,o.length)}function jl(o,a){if(o!==a){var h=o!==I,S=o===null,K=o===o,p=HC(o),b=a!==I,O=a===null,V=a===a,wA=HC(a);if(!O&&!wA&&!p&&o>a||p&&b&&V&&!O&&!wA||S&&b&&V||!h&&V||!K)return 1;if(!S&&!p&&!wA&&o<a||wA&&h&&K&&!S&&!p||O&&h&&K||!b&&K||!V)return-1}return 0}function ON(o,a,h){for(var S=-1,K=o.criteria,p=a.criteria,b=K.length,O=h.length;++S<b;){var V=jl(K[S],p[S]);if(V){if(S>=O)return V;var wA=h[S];return V*(wA=="desc"?-1:1)}}return o.index-a.index}function Vl(o,a,h,S){for(var K=-1,p=o.length,b=h.length,O=-1,V=a.length,wA=Yg(p-b,0),GA=iA(V+wA),UA=!S;++O<V;)GA[O]=a[O];for(;++K<b;)(UA||K<p)&&(GA[h[K]]=o[K]);for(;wA--;)GA[O++]=o[K++];return GA}function Xl(o,a,h,S){for(var K=-1,p=o.length,b=-1,O=h.length,V=-1,wA=a.length,GA=Yg(p-O,0),UA=iA(GA+wA),bA=!S;++K<GA;)UA[K]=o[K];for(var VA=K;++V<wA;)UA[VA+V]=a[V];for(;++b<O;)(bA||K<p)&&(UA[VA+h[b]]=o[K++]);return UA}function UC(o,a){var h=-1,S=o.length;for(a||(a=iA(S));++h<S;)a[h]=o[h];return a}function HB(o,a,h,S){var K=!h;h||(h={});for(var p=-1,b=a.length;++p<b;){var O=a[p],V=S?S(h[O],o[O],O,h,o):I;V===I&&(V=o[O]),K?EQ(h,O,V):mo(h,O,V)}return h}function vN(o,a){return HB(o,Vn(o),a)}function PN(o,a){return HB(o,tw(o),a)}function bt(o,a){return function(h,S){var K=GI(h)?V0:nN,p=a?a():{};return K(h,o,iI(S,2),p)}}function cE(o){return JI(function(a,h){var S=-1,K=h.length,p=K>1?h[K-1]:I,b=K>2?h[2]:I;for(p=o.length>3&&typeof p=="function"?(K--,p):I,b&&sC(h[0],h[1],b)&&(p=K<3?I:p,K=1),a=Ig(a);++S<K;){var O=h[S];O&&o(a,O,S,p)}return a})}function zl(o,a){return function(h,S){if(h==null)return h;if(!NC(h))return o(h,S);for(var K=h.length,p=a?K:-1,b=Ig(h);(a?p--:++p<K)&&S(b[p],p,b)!==!1;);return h}}function $l(o){return function(a,h,S){for(var K=-1,p=Ig(a),b=S(a),O=b.length;O--;){var V=b[o?O:++K];if(h(p[V],V,p)===!1)break}return a}}function ZN(o,a,h){var S=a&w,K=vo(o);function p(){var b=this&&this!==Xg&&this instanceof p?K:o;return b.apply(S?h:this,arguments)}return p}function Aw(o){return function(a){a=_I(a);var h=tE(a)?DB(a):I,S=h?h[0]:a.charAt(0),K=h?TQ(h,1).join(""):a.slice(1);return S[o]()+K}}function lE(o){return function(a){return Dn(zw(Xw(a).replace(L0,"")),o,"")}}function vo(o){return function(){var a=arguments;switch(a.length){case 0:return new o;case 1:return new o(a[0]);case 2:return new o(a[0],a[1]);case 3:return new o(a[0],a[1],a[2]);case 4:return new o(a[0],a[1],a[2],a[3]);case 5:return new o(a[0],a[1],a[2],a[3],a[4]);case 6:return new o(a[0],a[1],a[2],a[3],a[4],a[5]);case 7:return new o(a[0],a[1],a[2],a[3],a[4],a[5],a[6])}var h=hE(o.prototype),S=o.apply(h,a);return tg(S)?S:h}}function WN(o,a,h){var S=vo(o);function K(){for(var p=arguments.length,b=iA(p),O=p,V=wE(K);O--;)b[O]=arguments[O];var wA=p<3&&b[0]!==V&&b[p-1]!==V?[]:LQ(b,V);if(p-=wA.length,p<h)return Qw(o,a,Tt,K.placeholder,I,b,wA,I,I,h-p);var GA=this&&this!==Xg&&this instanceof K?S:o;return uC(GA,this,b)}return K}function Iw(o){return function(a,h,S){var K=Ig(a);if(!NC(a)){var p=iI(h,3);a=Pg(a),h=function(O){return p(K[O],O,K)}}var b=o(a,h,S);return b>-1?K[p?a[b]:b]:I}}function gw(o){return eQ(function(a){var h=a.length,S=h,K=AB.prototype.thru;for(o&&a.reverse();S--;){var p=a[S];if(typeof p!="function")throw new $C(i);if(K&&!b&&Pt(p)=="wrapper")var b=new AB([],!0)}for(S=b?S:h;++S<h;){p=a[S];var O=Pt(p),V=O=="wrapper"?_n(p):I;V&&zn(V[0])&&V[1]==(d|y|N|L)&&!V[4].length&&V[9]==1?b=b[Pt(V[0])].apply(b,V[3]):b=p.length==1&&zn(p)?b[O]():b.thru(p)}return function(){var wA=arguments,GA=wA[0];if(b&&wA.length==1&&GI(GA))return b.plant(GA).value();for(var UA=0,bA=h?a[UA].apply(this,wA):GA;++UA<h;)bA=a[UA].call(this,bA);return bA}})}function Tt(o,a,h,S,K,p,b,O,V,wA){var GA=a&d,UA=a&w,bA=a&c,VA=a&(y|M),sI=a&F,MI=bA?I:vo(o);function nI(){for(var fI=arguments.length,HI=iA(fI),mC=fI;mC--;)HI[mC]=arguments[mC];if(VA)var nC=wE(nI),bC=QU(HI,nC);if(S&&(HI=Vl(HI,S,K,VA)),p&&(HI=Xl(HI,p,b,VA)),fI-=bC,VA&&fI<wA){var Rg=LQ(HI,nC);return Qw(o,a,Tt,nI.placeholder,h,HI,Rg,O,V,wA-fI)}var cB=UA?h:this,nQ=bA?cB[o]:o;return fI=HI.length,O?HI=nK(HI,O):sI&&fI>1&&HI.reverse(),GA&&V<fI&&(HI.length=V),this&&this!==Xg&&this instanceof nI&&(nQ=MI||vo(nQ)),nQ.apply(cB,HI)}return nI}function Cw(o,a){return function(h,S){return SN(h,o,a(S),{})}}function xt(o,a){return function(h,S){var K;if(h===I&&S===I)return a;if(h!==I&&(K=h),S!==I){if(K===I)return S;typeof h=="string"||typeof S=="string"?(h=YC(h),S=YC(S)):(h=xl(h),S=xl(S)),K=o(h,S)}return K}}function vn(o){return eQ(function(a){return a=og(a,LC(iI())),JI(function(h){var S=this;return o(a,function(K){return uC(K,S,h)})})})}function Ot(o,a){a=a===I?" ":YC(a);var h=a.length;if(h<2)return h?Yn(a,o):a;var S=Yn(a,Rt(o/aE(a)));return tE(a)?TQ(DB(S),0,o).join(""):S.slice(0,o)}function _N(o,a,h,S){var K=a&w,p=vo(o);function b(){for(var O=-1,V=arguments.length,wA=-1,GA=S.length,UA=iA(GA+V),bA=this&&this!==Xg&&this instanceof b?p:o;++wA<GA;)UA[wA]=S[wA];for(;V--;)UA[wA++]=arguments[++O];return uC(bA,K?h:this,UA)}return b}function Bw(o){return function(a,h,S){return S&&typeof S!="number"&&sC(a,h,S)&&(h=S=I),a=sQ(a),h===I?(h=a,a=0):h=sQ(h),S=S===I?a<h?1:-1:sQ(S),fN(a,h,S,o)}}function vt(o){return function(a,h){return typeof a=="string"&&typeof h=="string"||(a=BB(a),h=BB(h)),o(a,h)}}function Qw(o,a,h,S,K,p,b,O,V,wA){var GA=a&y,UA=GA?b:I,bA=GA?I:b,VA=GA?p:I,sI=GA?I:p;a|=GA?N:R,a&=~(GA?R:N),a&k||(a&=~(w|c));var MI=[o,a,K,VA,UA,sI,bA,O,V,wA],nI=h.apply(I,MI);return zn(o)&&cw(nI,MI),nI.placeholder=S,lw(nI,o,a)}function Pn(o){var a=Lg[o];return function(h,S){if(h=BB(h),S=S==null?0:gC(yI(S),292),S&&ll(h)){var K=(_I(h)+"e").split("e"),p=a(K[0]+"e"+(+K[1]+S));return K=(_I(p)+"e").split("e"),+(K[0]+"e"+(+K[1]-S))}return a(h)}}var jN=DE&&1/wt(new DE([,-0]))[1]==CA?function(o){return new DE(o)}:nD;function iw(o){return function(a){var h=CC(a);return h==rA?Sn(a):h==eI?sU(a):BU(a,o(a))}}function oQ(o,a,h,S,K,p,b,O){var V=a&c;if(!V&&typeof o!="function")throw new $C(i);var wA=S?S.length:0;if(wA||(a&=~(N|R),S=K=I),b=b===I?b:Yg(yI(b),0),O=O===I?O:yI(O),wA-=K?K.length:0,a&R){var GA=S,UA=K;S=K=I}var bA=V?I:_n(o),VA=[o,a,h,S,K,GA,UA,p,b,O];if(bA&&tK(VA,bA),o=VA[0],a=VA[1],h=VA[2],S=VA[3],K=VA[4],O=VA[9]=VA[9]===I?V?0:o.length:Yg(VA[9]-wA,0),!O&&a&(y|M)&&(a&=~(y|M)),!a||a==w)var sI=ZN(o,a,h);else a==y||a==M?sI=WN(o,a,O):(a==N||a==(w|N))&&!K.length?sI=_N(o,a,h,S):sI=Tt.apply(I,VA);var MI=bA?bl:cw;return lw(MI(sI,VA),o,a)}function Ew(o,a,h,S){return o===I||hB(o,nE[h])&&!zI.call(S,h)?a:o}function ow(o,a,h,S,K,p){return tg(o)&&tg(a)&&(p.set(a,o),Yt(o,a,I,ow,p),p.delete(a)),o}function VN(o){return Wo(o)?I:o}function ew(o,a,h,S,K,p){var b=h&l,O=o.length,V=a.length;if(O!=V&&!(b&&V>O))return!1;var wA=p.get(o),GA=p.get(a);if(wA&&GA)return wA==a&&GA==o;var UA=-1,bA=!0,VA=h&G?new li:I;for(p.set(o,a),p.set(a,o);++UA<O;){var sI=o[UA],MI=a[UA];if(S)var nI=b?S(MI,sI,UA,a,o,p):S(sI,MI,UA,o,a,p);if(nI!==I){if(nI)continue;bA=!1;break}if(VA){if(!rn(a,function(fI,HI){if(!fo(VA,HI)&&(sI===fI||K(sI,fI,h,S,p)))return VA.push(HI)})){bA=!1;break}}else if(!(sI===MI||K(sI,MI,h,S,p))){bA=!1;break}}return p.delete(o),p.delete(a),bA}function XN(o,a,h,S,K,p,b){switch(h){case T:if(o.byteLength!=a.byteLength||o.byteOffset!=a.byteOffset)return!1;o=o.buffer,a=a.buffer;case _:return!(o.byteLength!=a.byteLength||!p(new Ut(o),new Ut(a)));case zA:case AI:case mA:return hB(+o,+a);case LA:return o.name==a.name&&o.message==a.message;case oI:case m:return o==a+"";case rA:var O=Sn;case eI:var V=S&l;if(O||(O=wt),o.size!=a.size&&!V)return!1;var wA=b.get(o);if(wA)return wA==a;S|=G,b.set(o,a);var GA=ew(O(o),O(a),S,K,p,b);return b.delete(o),GA;case f:if(Ho)return Ho.call(o)==Ho.call(a)}return!1}function zN(o,a,h,S,K,p){var b=h&l,O=Zn(o),V=O.length,wA=Zn(a),GA=wA.length;if(V!=GA&&!b)return!1;for(var UA=V;UA--;){var bA=O[UA];if(!(b?bA in a:zI.call(a,bA)))return!1}var VA=p.get(o),sI=p.get(a);if(VA&&sI)return VA==a&&sI==o;var MI=!0;p.set(o,a),p.set(a,o);for(var nI=b;++UA<V;){bA=O[UA];var fI=o[bA],HI=a[bA];if(S)var mC=b?S(HI,fI,bA,a,o,p):S(fI,HI,bA,o,a,p);if(!(mC===I?fI===HI||K(fI,HI,h,S,p):mC)){MI=!1;break}nI||(nI=bA=="constructor")}if(MI&&!nI){var nC=o.constructor,bC=a.constructor;nC!=bC&&"constructor"in o&&"constructor"in a&&!(typeof nC=="function"&&nC instanceof nC&&typeof bC=="function"&&bC instanceof bC)&&(MI=!1)}return p.delete(o),p.delete(a),MI}function eQ(o){return AD(rw(o,I,Mw),o+"")}function Zn(o){return Rl(o,Pg,Vn)}function Wn(o){return Rl(o,KC,tw)}var _n=dt?function(o){return dt.get(o)}:nD;function Pt(o){for(var a=o.name+"",h=rE[a],S=zI.call(rE,a)?h.length:0;S--;){var K=h[S],p=K.func;if(p==null||p==o)return K.name}return a}function wE(o){var a=zI.call(J,"placeholder")?J:o;return a.placeholder}function iI(){var o=J.iteratee||aD;return o=o===aD?pl:o,arguments.length?o(arguments[0],arguments[1]):o}function Zt(o,a){var h=o.__data__;return iK(a)?h[typeof a=="string"?"string":"hash"]:h.map}function jn(o){for(var a=Pg(o),h=a.length;h--;){var S=a[h],K=o[S];a[h]=[S,K,nw(K)]}return a}function Si(o,a){var h=eU(o,a);return dl(h)?h:I}function $N(o){var a=zI.call(o,hi),h=o[hi];try{o[hi]=I;var S=!0}catch{}var K=kt.call(o);return S&&(a?o[hi]=h:delete o[hi]),K}var Vn=kn?function(o){return o==null?[]:(o=Ig(o),qQ(kn(o),function(a){return hl.call(o,a)}))}:DD,tw=kn?function(o){for(var a=[];o;)uQ(a,Vn(o)),o=Nt(o);return a}:DD,CC=aC;(Mn&&CC(new Mn(new ArrayBuffer(1)))!=T||uo&&CC(new uo)!=rA||Un&&CC(Un.resolve())!=gI||DE&&CC(new DE)!=eI||Lo&&CC(new Lo)!=kA)&&(CC=function(o){var a=aC(o),h=a==ZA?o.constructor:I,S=h?yi(h):"";if(S)switch(S){case uU:return T;case LU:return rA;case YU:return gI;case HU:return eI;case mU:return kA}return a});function AK(o,a,h){for(var S=-1,K=h.length;++S<K;){var p=h[S],b=p.size;switch(p.type){case"drop":o+=b;break;case"dropRight":a-=b;break;case"take":a=gC(a,o+b);break;case"takeRight":o=Yg(o,a-b);break}}return{start:o,end:a}}function IK(o){var a=o.match(Y);return a?a[1].split(gA):[]}function aw(o,a,h){a=bQ(a,o);for(var S=-1,K=a.length,p=!1;++S<K;){var b=mB(a[S]);if(!(p=o!=null&&h(o,b)))break;o=o[b]}return p||++S!=K?p:(K=o==null?0:o.length,!!K&&$t(K)&&tQ(b,K)&&(GI(o)||ki(o)))}function gK(o){var a=o.length,h=new o.constructor(a);return a&&typeof o[0]=="string"&&zI.call(o,"index")&&(h.index=o.index,h.input=o.input),h}function sw(o){return typeof o.constructor=="function"&&!Po(o)?hE(Nt(o)):{}}function CK(o,a,h){var S=o.constructor;switch(a){case _:return On(o);case zA:case AI:return new S(+o);case T:return bN(o,h);case DA:case BA:case fA:case OA:case _A:case xA:case WA:case tI:case aI:return _l(o,h);case rA:return new S;case mA:case m:return new S(o);case oI:return TN(o);case eI:return new S;case f:return xN(o)}}function BK(o,a){var h=a.length;if(!h)return o;var S=h-1;return a[S]=(h>1?"& ":"")+a[S],a=a.join(h>2?", ":" "),o.replace(Qn,`{
/* [wrapped with `+a+`] */
`)}function QK(o){return GI(o)||ki(o)||!!(cl&&o&&o[cl])}function tQ(o,a){var h=typeof o;return a=a??QA,!!a&&(h=="number"||h!="symbol"&&dI.test(o))&&o>-1&&o%1==0&&o<a}function sC(o,a,h){if(!tg(h))return!1;var S=typeof a;return(S=="number"?NC(h)&&tQ(a,h.length):S=="string"&&a in h)?hB(h[a],o):!1}function Xn(o,a){if(GI(o))return!1;var h=typeof o;return h=="number"||h=="symbol"||h=="boolean"||o==null||HC(o)?!0:MC.test(o)||!eg.test(o)||a!=null&&o in Ig(a)}function iK(o){var a=typeof o;return a=="string"||a=="number"||a=="symbol"||a=="boolean"?o!=="__proto__":o===null}function zn(o){var a=Pt(o),h=J[a];if(typeof h!="function"||!(a in LI.prototype))return!1;if(o===h)return!0;var S=_n(h);return!!S&&o===S[0]}function EK(o){return!!nl&&nl in o}var oK=St?aQ:rD;function Po(o){var a=o&&o.constructor,h=typeof a=="function"&&a.prototype||nE;return o===h}function nw(o){return o===o&&!tg(o)}function Dw(o,a){return function(h){return h==null?!1:h[o]===a&&(a!==I||o in Ig(h))}}function eK(o){var a=Xt(o,function(S){return h.size===t&&h.clear(),S}),h=a.cache;return a}function tK(o,a){var h=o[1],S=a[1],K=h|S,p=K<(w|c|d),b=S==d&&h==y||S==d&&h==L&&o[7].length<=a[8]||S==(d|L)&&a[7].length<=a[8]&&h==y;if(!(p||b))return o;S&w&&(o[2]=a[2],K|=h&w?0:k);var O=a[3];if(O){var V=o[3];o[3]=V?Vl(V,O,a[4]):O,o[4]=V?LQ(o[3],s):a[4]}return O=a[5],O&&(V=o[5],o[5]=V?Xl(V,O,a[6]):O,o[6]=V?LQ(o[5],s):a[6]),O=a[7],O&&(o[7]=O),S&d&&(o[8]=o[8]==null?a[8]:gC(o[8],a[8])),o[9]==null&&(o[9]=a[9]),o[0]=a[0],o[1]=K,o}function aK(o){var a=[];if(o!=null)for(var h in Ig(o))a.push(h);return a}function sK(o){return kt.call(o)}function rw(o,a,h){return a=Yg(a===I?o.length-1:a,0),function(){for(var S=arguments,K=-1,p=Yg(S.length-a,0),b=iA(p);++K<p;)b[K]=S[a+K];K=-1;for(var O=iA(a+1);++K<a;)O[K]=S[K];return O[a]=h(b),uC(o,this,O)}}function hw(o,a){return a.length<2?o:Gi(o,gB(a,0,-1))}function nK(o,a){for(var h=o.length,S=gC(a.length,h),K=UC(o);S--;){var p=a[S];o[S]=tQ(p,h)?K[p]:I}return o}function $n(o,a){if(!(a==="constructor"&&typeof o[a]=="function")&&a!="__proto__")return o[a]}var cw=ww(bl),Zo=FU||function(o,a){return Xg.setTimeout(o,a)},AD=ww(LN);function lw(o,a,h){var S=a+"";return AD(o,BK(S,DK(IK(S),h)))}function ww(o){var a=0,h=0;return function(){var S=pU(),K=H-(S-h);if(h=S,K>0){if(++a>=$)return arguments[0]}else a=0;return o.apply(I,arguments)}}function Wt(o,a){var h=-1,S=o.length,K=S-1;for(a=a===I?S:a;++h<a;){var p=Ln(h,K),b=o[p];o[p]=o[h],o[h]=b}return o.length=a,o}var Gw=eK(function(o){var a=[];return o.charCodeAt(0)===46&&a.push(""),o.replace(jC,function(h,S,K,p){a.push(K?p.replace(hA,"$1"):S||h)}),a});function mB(o){if(typeof o=="string"||HC(o))return o;var a=o+"";return a=="0"&&1/o==-CA?"-0":a}function yi(o){if(o!=null){try{return yt.call(o)}catch{}try{return o+""}catch{}}return""}function DK(o,a){return zC(lA,function(h){var S="_."+h[0];a&h[1]&&!ct(o,S)&&o.push(S)}),o.sort()}function Sw(o){if(o instanceof LI)return o.clone();var a=new AB(o.__wrapped__,o.__chain__);return a.__actions__=UC(o.__actions__),a.__index__=o.__index__,a.__values__=o.__values__,a}function rK(o,a,h){(h?sC(o,a,h):a===I)?a=1:a=Yg(yI(a),0);var S=o==null?0:o.length;if(!S||a<1)return[];for(var K=0,p=0,b=iA(Rt(S/a));K<S;)b[p++]=gB(o,K,K+=a);return b}function hK(o){for(var a=-1,h=o==null?0:o.length,S=0,K=[];++a<h;){var p=o[a];p&&(K[S++]=p)}return K}function cK(){var o=arguments.length;if(!o)return[];for(var a=iA(o-1),h=arguments[0],S=o;S--;)a[S-1]=arguments[S];return uQ(GI(h)?UC(h):[h],zg(a,1))}var lK=JI(function(o,a){return Fg(o)?bo(o,zg(a,1,Fg,!0)):[]}),wK=JI(function(o,a){var h=CB(a);return Fg(h)&&(h=I),Fg(o)?bo(o,zg(a,1,Fg,!0),iI(h,2)):[]}),GK=JI(function(o,a){var h=CB(a);return Fg(h)&&(h=I),Fg(o)?bo(o,zg(a,1,Fg,!0),I,h):[]});function SK(o,a,h){var S=o==null?0:o.length;return S?(a=h||a===I?1:yI(a),gB(o,a<0?0:a,S)):[]}function yK(o,a,h){var S=o==null?0:o.length;return S?(a=h||a===I?1:yI(a),a=S-a,gB(o,0,a<0?0:a)):[]}function kK(o,a){return o&&o.length?mt(o,iI(a,3),!0,!0):[]}function MK(o,a){return o&&o.length?mt(o,iI(a,3),!0):[]}function UK(o,a,h,S){var K=o==null?0:o.length;return K?(h&&typeof h!="number"&&sC(o,a,h)&&(h=0,S=K),cN(o,a,h,S)):[]}function yw(o,a,h){var S=o==null?0:o.length;if(!S)return-1;var K=h==null?0:yI(h);return K<0&&(K=Yg(S+K,0)),lt(o,iI(a,3),K)}function kw(o,a,h){var S=o==null?0:o.length;if(!S)return-1;var K=S-1;return h!==I&&(K=yI(h),K=h<0?Yg(S+K,0):gC(K,S-1)),lt(o,iI(a,3),K,!0)}function Mw(o){var a=o==null?0:o.length;return a?zg(o,1):[]}function NK(o){var a=o==null?0:o.length;return a?zg(o,CA):[]}function KK(o,a){var h=o==null?0:o.length;return h?(a=a===I?1:yI(a),zg(o,a)):[]}function FK(o){for(var a=-1,h=o==null?0:o.length,S={};++a<h;){var K=o[a];S[K[0]]=K[1]}return S}function Uw(o){return o&&o.length?o[0]:I}function RK(o,a,h){var S=o==null?0:o.length;if(!S)return-1;var K=h==null?0:yI(h);return K<0&&(K=Yg(S+K,0)),eE(o,a,K)}function JK(o){var a=o==null?0:o.length;return a?gB(o,0,-1):[]}var dK=JI(function(o){var a=og(o,Tn);return a.length&&a[0]===o[0]?dn(a):[]}),pK=JI(function(o){var a=CB(o),h=og(o,Tn);return a===CB(h)?a=I:h.pop(),h.length&&h[0]===o[0]?dn(h,iI(a,2)):[]}),fK=JI(function(o){var a=CB(o),h=og(o,Tn);return a=typeof a=="function"?a:I,a&&h.pop(),h.length&&h[0]===o[0]?dn(h,I,a):[]});function qK(o,a){return o==null?"":JU.call(o,a)}function CB(o){var a=o==null?0:o.length;return a?o[a-1]:I}function uK(o,a,h){var S=o==null?0:o.length;if(!S)return-1;var K=S;return h!==I&&(K=yI(h),K=K<0?Yg(S+K,0):gC(K,S-1)),a===a?DU(o,a,K):lt(o,Ql,K,!0)}function LK(o,a){return o&&o.length?Ll(o,yI(a)):I}var YK=JI(Nw);function Nw(o,a){return o&&o.length&&a&&a.length?un(o,a):o}function HK(o,a,h){return o&&o.length&&a&&a.length?un(o,a,iI(h,2)):o}function mK(o,a,h){return o&&o.length&&a&&a.length?un(o,a,I,h):o}var bK=eQ(function(o,a){var h=o==null?0:o.length,S=Kn(o,a);return ml(o,og(a,function(K){return tQ(K,h)?+K:K}).sort(jl)),S});function TK(o,a){var h=[];if(!(o&&o.length))return h;var S=-1,K=[],p=o.length;for(a=iI(a,3);++S<p;){var b=o[S];a(b,S,o)&&(h.push(b),K.push(S))}return ml(o,K),h}function ID(o){return o==null?o:qU.call(o)}function xK(o,a,h){var S=o==null?0:o.length;return S?(h&&typeof h!="number"&&sC(o,a,h)?(a=0,h=S):(a=a==null?0:yI(a),h=h===I?S:yI(h)),gB(o,a,h)):[]}function OK(o,a){return Ht(o,a)}function vK(o,a,h){return Hn(o,a,iI(h,2))}function PK(o,a){var h=o==null?0:o.length;if(h){var S=Ht(o,a);if(S<h&&hB(o[S],a))return S}return-1}function ZK(o,a){return Ht(o,a,!0)}function WK(o,a,h){return Hn(o,a,iI(h,2),!0)}function _K(o,a){var h=o==null?0:o.length;if(h){var S=Ht(o,a,!0)-1;if(hB(o[S],a))return S}return-1}function jK(o){return o&&o.length?Tl(o):[]}function VK(o,a){return o&&o.length?Tl(o,iI(a,2)):[]}function XK(o){var a=o==null?0:o.length;return a?gB(o,1,a):[]}function zK(o,a,h){return o&&o.length?(a=h||a===I?1:yI(a),gB(o,0,a<0?0:a)):[]}function $K(o,a,h){var S=o==null?0:o.length;return S?(a=h||a===I?1:yI(a),a=S-a,gB(o,a<0?0:a,S)):[]}function AF(o,a){return o&&o.length?mt(o,iI(a,3),!1,!0):[]}function IF(o,a){return o&&o.length?mt(o,iI(a,3)):[]}var gF=JI(function(o){return mQ(zg(o,1,Fg,!0))}),CF=JI(function(o){var a=CB(o);return Fg(a)&&(a=I),mQ(zg(o,1,Fg,!0),iI(a,2))}),BF=JI(function(o){var a=CB(o);return a=typeof a=="function"?a:I,mQ(zg(o,1,Fg,!0),I,a)});function QF(o){return o&&o.length?mQ(o):[]}function iF(o,a){return o&&o.length?mQ(o,iI(a,2)):[]}function EF(o,a){return a=typeof a=="function"?a:I,o&&o.length?mQ(o,I,a):[]}function gD(o){if(!(o&&o.length))return[];var a=0;return o=qQ(o,function(h){if(Fg(h))return a=Yg(h.length,a),!0}),wn(a,function(h){return og(o,hn(h))})}function Kw(o,a){if(!(o&&o.length))return[];var h=gD(o);return a==null?h:og(h,function(S){return uC(a,I,S)})}var oF=JI(function(o,a){return Fg(o)?bo(o,a):[]}),eF=JI(function(o){return bn(qQ(o,Fg))}),tF=JI(function(o){var a=CB(o);return Fg(a)&&(a=I),bn(qQ(o,Fg),iI(a,2))}),aF=JI(function(o){var a=CB(o);return a=typeof a=="function"?a:I,bn(qQ(o,Fg),I,a)}),sF=JI(gD);function nF(o,a){return Pl(o||[],a||[],mo)}function DF(o,a){return Pl(o||[],a||[],Oo)}var rF=JI(function(o){var a=o.length,h=a>1?o[a-1]:I;return h=typeof h=="function"?(o.pop(),h):I,Kw(o,h)});function Fw(o){var a=J(o);return a.__chain__=!0,a}function hF(o,a){return a(o),o}function _t(o,a){return a(o)}var cF=eQ(function(o){var a=o.length,h=a?o[0]:0,S=this.__wrapped__,K=function(p){return Kn(p,o)};return a>1||this.__actions__.length||!(S instanceof LI)||!tQ(h)?this.thru(K):(S=S.slice(h,+h+(a?1:0)),S.__actions__.push({func:_t,args:[K],thisArg:I}),new AB(S,this.__chain__).thru(function(p){return a&&!p.length&&p.push(I),p}))});function lF(){return Fw(this)}function wF(){return new AB(this.value(),this.__chain__)}function GF(){this.__values__===I&&(this.__values__=xw(this.value()));var o=this.__index__>=this.__values__.length,a=o?I:this.__values__[this.__index__++];return{done:o,value:a}}function SF(){return this}function yF(o){for(var a,h=this;h instanceof ft;){var S=Sw(h);S.__index__=0,S.__values__=I,a?K.__wrapped__=S:a=S;var K=S;h=h.__wrapped__}return K.__wrapped__=o,a}function kF(){var o=this.__wrapped__;if(o instanceof LI){var a=o;return this.__actions__.length&&(a=new LI(this)),a=a.reverse(),a.__actions__.push({func:_t,args:[ID],thisArg:I}),new AB(a,this.__chain__)}return this.thru(ID)}function MF(){return vl(this.__wrapped__,this.__actions__)}var UF=bt(function(o,a,h){zI.call(o,h)?++o[h]:EQ(o,h,1)});function NF(o,a,h){var S=GI(o)?Cl:hN;return h&&sC(o,a,h)&&(a=I),S(o,iI(a,3))}function KF(o,a){var h=GI(o)?qQ:Kl;return h(o,iI(a,3))}var FF=Iw(yw),RF=Iw(kw);function JF(o,a){return zg(jt(o,a),1)}function dF(o,a){return zg(jt(o,a),CA)}function pF(o,a,h){return h=h===I?1:yI(h),zg(jt(o,a),h)}function Rw(o,a){var h=GI(o)?zC:HQ;return h(o,iI(a,3))}function Jw(o,a){var h=GI(o)?X0:Nl;return h(o,iI(a,3))}var fF=bt(function(o,a,h){zI.call(o,h)?o[h].push(a):EQ(o,h,[a])});function qF(o,a,h,S){o=NC(o)?o:SE(o),h=h&&!S?yI(h):0;var K=o.length;return h<0&&(h=Yg(K+h,0)),Aa(o)?h<=K&&o.indexOf(a,h)>-1:!!K&&eE(o,a,h)>-1}var uF=JI(function(o,a,h){var S=-1,K=typeof a=="function",p=NC(o)?iA(o.length):[];return HQ(o,function(b){p[++S]=K?uC(a,b,h):To(b,a,h)}),p}),LF=bt(function(o,a,h){EQ(o,h,a)});function jt(o,a){var h=GI(o)?og:fl;return h(o,iI(a,3))}function YF(o,a,h,S){return o==null?[]:(GI(a)||(a=a==null?[]:[a]),h=S?I:h,GI(h)||(h=h==null?[]:[h]),Yl(o,a,h))}var HF=bt(function(o,a,h){o[h?0:1].push(a)},function(){return[[],[]]});function mF(o,a,h){var S=GI(o)?Dn:El,K=arguments.length<3;return S(o,iI(a,4),h,K,HQ)}function bF(o,a,h){var S=GI(o)?z0:El,K=arguments.length<3;return S(o,iI(a,4),h,K,Nl)}function TF(o,a){var h=GI(o)?qQ:Kl;return h(o,zt(iI(a,3)))}function xF(o){var a=GI(o)?yl:qN;return a(o)}function OF(o,a,h){(h?sC(o,a,h):a===I)?a=1:a=yI(a);var S=GI(o)?aN:uN;return S(o,a)}function vF(o){var a=GI(o)?sN:YN;return a(o)}function PF(o){if(o==null)return 0;if(NC(o))return Aa(o)?aE(o):o.length;var a=CC(o);return a==rA||a==eI?o.size:fn(o).length}function ZF(o,a,h){var S=GI(o)?rn:HN;return h&&sC(o,a,h)&&(a=I),S(o,iI(a,3))}var WF=JI(function(o,a){if(o==null)return[];var h=a.length;return h>1&&sC(o,a[0],a[1])?a=[]:h>2&&sC(a[0],a[1],a[2])&&(a=[a[0]]),Yl(o,zg(a,1),[])}),Vt=KU||function(){return Xg.Date.now()};function _F(o,a){if(typeof a!="function")throw new $C(i);return o=yI(o),function(){if(--o<1)return a.apply(this,arguments)}}function dw(o,a,h){return a=h?I:a,a=o&&a==null?o.length:a,oQ(o,d,I,I,I,I,a)}function pw(o,a){var h;if(typeof a!="function")throw new $C(i);return o=yI(o),function(){return--o>0&&(h=a.apply(this,arguments)),o<=1&&(a=I),h}}var CD=JI(function(o,a,h){var S=w;if(h.length){var K=LQ(h,wE(CD));S|=N}return oQ(o,S,a,h,K)}),fw=JI(function(o,a,h){var S=w|c;if(h.length){var K=LQ(h,wE(fw));S|=N}return oQ(a,S,o,h,K)});function qw(o,a,h){a=h?I:a;var S=oQ(o,y,I,I,I,I,I,a);return S.placeholder=qw.placeholder,S}function uw(o,a,h){a=h?I:a;var S=oQ(o,M,I,I,I,I,I,a);return S.placeholder=uw.placeholder,S}function Lw(o,a,h){var S,K,p,b,O,V,wA=0,GA=!1,UA=!1,bA=!0;if(typeof o!="function")throw new $C(i);a=BB(a)||0,tg(h)&&(GA=!!h.leading,UA="maxWait"in h,p=UA?Yg(BB(h.maxWait)||0,a):p,bA="trailing"in h?!!h.trailing:bA);function VA(Rg){var cB=S,nQ=K;return S=K=I,wA=Rg,b=o.apply(nQ,cB),b}function sI(Rg){return wA=Rg,O=Zo(fI,a),GA?VA(Rg):b}function MI(Rg){var cB=Rg-V,nQ=Rg-wA,IG=a-cB;return UA?gC(IG,p-nQ):IG}function nI(Rg){var cB=Rg-V,nQ=Rg-wA;return V===I||cB>=a||cB<0||UA&&nQ>=p}function fI(){var Rg=Vt();if(nI(Rg))return HI(Rg);O=Zo(fI,MI(Rg))}function HI(Rg){return O=I,bA&&S?VA(Rg):(S=K=I,b)}function mC(){O!==I&&Zl(O),wA=0,S=V=K=O=I}function nC(){return O===I?b:HI(Vt())}function bC(){var Rg=Vt(),cB=nI(Rg);if(S=arguments,K=this,V=Rg,cB){if(O===I)return sI(V);if(UA)return Zl(O),O=Zo(fI,a),VA(V)}return O===I&&(O=Zo(fI,a)),b}return bC.cancel=mC,bC.flush=nC,bC}var jF=JI(function(o,a){return Ul(o,1,a)}),VF=JI(function(o,a,h){return Ul(o,BB(a)||0,h)});function XF(o){return oQ(o,F)}function Xt(o,a){if(typeof o!="function"||a!=null&&typeof a!="function")throw new $C(i);var h=function(){var S=arguments,K=a?a.apply(this,S):S[0],p=h.cache;if(p.has(K))return p.get(K);var b=o.apply(this,S);return h.cache=p.set(K,b)||p,b};return h.cache=new(Xt.Cache||iQ),h}Xt.Cache=iQ;function zt(o){if(typeof o!="function")throw new $C(i);return function(){var a=arguments;switch(a.length){case 0:return!o.call(this);case 1:return!o.call(this,a[0]);case 2:return!o.call(this,a[0],a[1]);case 3:return!o.call(this,a[0],a[1],a[2])}return!o.apply(this,a)}}function zF(o){return pw(2,o)}var $F=mN(function(o,a){a=a.length==1&&GI(a[0])?og(a[0],LC(iI())):og(zg(a,1),LC(iI()));var h=a.length;return JI(function(S){for(var K=-1,p=gC(S.length,h);++K<p;)S[K]=a[K].call(this,S[K]);return uC(o,this,S)})}),BD=JI(function(o,a){var h=LQ(a,wE(BD));return oQ(o,N,I,a,h)}),Yw=JI(function(o,a){var h=LQ(a,wE(Yw));return oQ(o,R,I,a,h)}),AR=eQ(function(o,a){return oQ(o,L,I,I,I,a)});function IR(o,a){if(typeof o!="function")throw new $C(i);return a=a===I?a:yI(a),JI(o,a)}function gR(o,a){if(typeof o!="function")throw new $C(i);return a=a==null?0:Yg(yI(a),0),JI(function(h){var S=h[a],K=TQ(h,0,a);return S&&uQ(K,S),uC(o,this,K)})}function CR(o,a,h){var S=!0,K=!0;if(typeof o!="function")throw new $C(i);return tg(h)&&(S="leading"in h?!!h.leading:S,K="trailing"in h?!!h.trailing:K),Lw(o,a,{leading:S,maxWait:a,trailing:K})}function BR(o){return dw(o,1)}function QR(o,a){return BD(xn(a),o)}function iR(){if(!arguments.length)return[];var o=arguments[0];return GI(o)?o:[o]}function ER(o){return IB(o,r)}function oR(o,a){return a=typeof a=="function"?a:I,IB(o,r,a)}function eR(o){return IB(o,n|r)}function tR(o,a){return a=typeof a=="function"?a:I,IB(o,n|r,a)}function aR(o,a){return a==null||Ml(o,a,Pg(a))}function hB(o,a){return o===a||o!==o&&a!==a}var sR=vt(Jn),nR=vt(function(o,a){return o>=a}),ki=Jl(function(){return arguments}())?Jl:function(o){return lg(o)&&zI.call(o,"callee")&&!hl.call(o,"callee")},GI=iA.isArray,DR=Xc?LC(Xc):yN;function NC(o){return o!=null&&$t(o.length)&&!aQ(o)}function Fg(o){return lg(o)&&NC(o)}function rR(o){return o===!0||o===!1||lg(o)&&aC(o)==zA}var xQ=RU||rD,hR=zc?LC(zc):kN;function cR(o){return lg(o)&&o.nodeType===1&&!Wo(o)}function lR(o){if(o==null)return!0;if(NC(o)&&(GI(o)||typeof o=="string"||typeof o.splice=="function"||xQ(o)||GE(o)||ki(o)))return!o.length;var a=CC(o);if(a==rA||a==eI)return!o.size;if(Po(o))return!fn(o).length;for(var h in o)if(zI.call(o,h))return!1;return!0}function wR(o,a){return xo(o,a)}function GR(o,a,h){h=typeof h=="function"?h:I;var S=h?h(o,a):I;return S===I?xo(o,a,I,h):!!S}function QD(o){if(!lg(o))return!1;var a=aC(o);return a==LA||a==RA||typeof o.message=="string"&&typeof o.name=="string"&&!Wo(o)}function SR(o){return typeof o=="number"&&ll(o)}function aQ(o){if(!tg(o))return!1;var a=aC(o);return a==yA||a==tA||a==P||a==$A}function Hw(o){return typeof o=="number"&&o==yI(o)}function $t(o){return typeof o=="number"&&o>-1&&o%1==0&&o<=QA}function tg(o){var a=typeof o;return o!=null&&(a=="object"||a=="function")}function lg(o){return o!=null&&typeof o=="object"}var mw=$c?LC($c):UN;function yR(o,a){return o===a||pn(o,a,jn(a))}function kR(o,a,h){return h=typeof h=="function"?h:I,pn(o,a,jn(a),h)}function MR(o){return bw(o)&&o!=+o}function UR(o){if(oK(o))throw new wI(B);return dl(o)}function NR(o){return o===null}function KR(o){return o==null}function bw(o){return typeof o=="number"||lg(o)&&aC(o)==mA}function Wo(o){if(!lg(o)||aC(o)!=ZA)return!1;var a=Nt(o);if(a===null)return!0;var h=zI.call(a,"constructor")&&a.constructor;return typeof h=="function"&&h instanceof h&&yt.call(h)==kU}var iD=Al?LC(Al):NN;function FR(o){return Hw(o)&&o>=-QA&&o<=QA}var Tw=Il?LC(Il):KN;function Aa(o){return typeof o=="string"||!GI(o)&&lg(o)&&aC(o)==m}function HC(o){return typeof o=="symbol"||lg(o)&&aC(o)==f}var GE=gl?LC(gl):FN;function RR(o){return o===I}function JR(o){return lg(o)&&CC(o)==kA}function dR(o){return lg(o)&&aC(o)==KA}var pR=vt(qn),fR=vt(function(o,a){return o<=a});function xw(o){if(!o)return[];if(NC(o))return Aa(o)?DB(o):UC(o);if(qo&&o[qo])return aU(o[qo]());var a=CC(o),h=a==rA?Sn:a==eI?wt:SE;return h(o)}function sQ(o){if(!o)return o===0?o:0;if(o=BB(o),o===CA||o===-CA){var a=o<0?-1:1;return a*NA}return o===o?o:0}function yI(o){var a=sQ(o),h=a%1;return a===a?h?a-h:a:0}function Ow(o){return o?wi(yI(o),0,HA):0}function BB(o){if(typeof o=="number")return o;if(HC(o))return SA;if(tg(o)){var a=typeof o.valueOf=="function"?o.valueOf():o;o=tg(a)?a+"":a}if(typeof o!="string")return o===0?o:+o;o=ol(o);var h=SI.test(o);return h||RI.test(o)?_0(o.slice(2),h?2:8):lI.test(o)?SA:+o}function vw(o){return HB(o,KC(o))}function qR(o){return o?wi(yI(o),-QA,QA):o===0?o:0}function _I(o){return o==null?"":YC(o)}var uR=cE(function(o,a){if(Po(a)||NC(a)){HB(a,Pg(a),o);return}for(var h in a)zI.call(a,h)&&mo(o,h,a[h])}),Pw=cE(function(o,a){HB(a,KC(a),o)}),Ia=cE(function(o,a,h,S){HB(a,KC(a),o,S)}),LR=cE(function(o,a,h,S){HB(a,Pg(a),o,S)}),YR=eQ(Kn);function HR(o,a){var h=hE(o);return a==null?h:kl(h,a)}var mR=JI(function(o,a){o=Ig(o);var h=-1,S=a.length,K=S>2?a[2]:I;for(K&&sC(a[0],a[1],K)&&(S=1);++h<S;)for(var p=a[h],b=KC(p),O=-1,V=b.length;++O<V;){var wA=b[O],GA=o[wA];(GA===I||hB(GA,nE[wA])&&!zI.call(o,wA))&&(o[wA]=p[wA])}return o}),bR=JI(function(o){return o.push(I,ow),uC(Zw,I,o)});function TR(o,a){return Bl(o,iI(a,3),YB)}function xR(o,a){return Bl(o,iI(a,3),Rn)}function OR(o,a){return o==null?o:Fn(o,iI(a,3),KC)}function vR(o,a){return o==null?o:Fl(o,iI(a,3),KC)}function PR(o,a){return o&&YB(o,iI(a,3))}function ZR(o,a){return o&&Rn(o,iI(a,3))}function WR(o){return o==null?[]:Lt(o,Pg(o))}function _R(o){return o==null?[]:Lt(o,KC(o))}function ED(o,a,h){var S=o==null?I:Gi(o,a);return S===I?h:S}function jR(o,a){return o!=null&&aw(o,a,lN)}function oD(o,a){return o!=null&&aw(o,a,wN)}var VR=Cw(function(o,a,h){a!=null&&typeof a.toString!="function"&&(a=kt.call(a)),o[a]=h},tD(FC)),XR=Cw(function(o,a,h){a!=null&&typeof a.toString!="function"&&(a=kt.call(a)),zI.call(o,a)?o[a].push(h):o[a]=[h]},iI),zR=JI(To);function Pg(o){return NC(o)?Sl(o):fn(o)}function KC(o){return NC(o)?Sl(o,!0):RN(o)}function $R(o,a){var h={};return a=iI(a,3),YB(o,function(S,K,p){EQ(h,a(S,K,p),S)}),h}function AJ(o,a){var h={};return a=iI(a,3),YB(o,function(S,K,p){EQ(h,K,a(S,K,p))}),h}var IJ=cE(function(o,a,h){Yt(o,a,h)}),Zw=cE(function(o,a,h,S){Yt(o,a,h,S)}),gJ=eQ(function(o,a){var h={};if(o==null)return h;var S=!1;a=og(a,function(p){return p=bQ(p,o),S||(S=p.length>1),p}),HB(o,Wn(o),h),S&&(h=IB(h,n|D|r,VN));for(var K=a.length;K--;)mn(h,a[K]);return h});function CJ(o,a){return Ww(o,zt(iI(a)))}var BJ=eQ(function(o,a){return o==null?{}:dN(o,a)});function Ww(o,a){if(o==null)return{};var h=og(Wn(o),function(S){return[S]});return a=iI(a),Hl(o,h,function(S,K){return a(S,K[0])})}function QJ(o,a,h){a=bQ(a,o);var S=-1,K=a.length;for(K||(K=1,o=I);++S<K;){var p=o==null?I:o[mB(a[S])];p===I&&(S=K,p=h),o=aQ(p)?p.call(o):p}return o}function iJ(o,a,h){return o==null?o:Oo(o,a,h)}function EJ(o,a,h,S){return S=typeof S=="function"?S:I,o==null?o:Oo(o,a,h,S)}var _w=iw(Pg),jw=iw(KC);function oJ(o,a,h){var S=GI(o),K=S||xQ(o)||GE(o);if(a=iI(a,4),h==null){var p=o&&o.constructor;K?h=S?new p:[]:tg(o)?h=aQ(p)?hE(Nt(o)):{}:h={}}return(K?zC:YB)(o,function(b,O,V){return a(h,b,O,V)}),h}function eJ(o,a){return o==null?!0:mn(o,a)}function tJ(o,a,h){return o==null?o:Ol(o,a,xn(h))}function aJ(o,a,h,S){return S=typeof S=="function"?S:I,o==null?o:Ol(o,a,xn(h),S)}function SE(o){return o==null?[]:Gn(o,Pg(o))}function sJ(o){return o==null?[]:Gn(o,KC(o))}function nJ(o,a,h){return h===I&&(h=a,a=I),h!==I&&(h=BB(h),h=h===h?h:0),a!==I&&(a=BB(a),a=a===a?a:0),wi(BB(o),a,h)}function DJ(o,a,h){return a=sQ(a),h===I?(h=a,a=0):h=sQ(h),o=BB(o),GN(o,a,h)}function rJ(o,a,h){if(h&&typeof h!="boolean"&&sC(o,a,h)&&(a=h=I),h===I&&(typeof a=="boolean"?(h=a,a=I):typeof o=="boolean"&&(h=o,o=I)),o===I&&a===I?(o=0,a=1):(o=sQ(o),a===I?(a=o,o=0):a=sQ(a)),o>a){var S=o;o=a,a=S}if(h||o%1||a%1){var K=wl();return gC(o+K*(a-o+W0("1e-"+((K+"").length-1))),a)}return Ln(o,a)}var hJ=lE(function(o,a,h){return a=a.toLowerCase(),o+(h?Vw(a):a)});function Vw(o){return eD(_I(o).toLowerCase())}function Xw(o){return o=_I(o),o&&o.replace(WI,iU).replace(Y0,"")}function cJ(o,a,h){o=_I(o),a=YC(a);var S=o.length;h=h===I?S:wi(yI(h),0,S);var K=h;return h-=a.length,h>=0&&o.slice(h,K)==a}function lJ(o){return o=_I(o),o&&VI.test(o)?o.replace(vA,EU):o}function wJ(o){return o=_I(o),o&&Dt.test(o)?o.replace(fQ,"\\$&"):o}var GJ=lE(function(o,a,h){return o+(h?"-":"")+a.toLowerCase()}),SJ=lE(function(o,a,h){return o+(h?" ":"")+a.toLowerCase()}),yJ=Aw("toLowerCase");function kJ(o,a,h){o=_I(o),a=yI(a);var S=a?aE(o):0;if(!a||S>=a)return o;var K=(a-S)/2;return Ot(Jt(K),h)+o+Ot(Rt(K),h)}function MJ(o,a,h){o=_I(o),a=yI(a);var S=a?aE(o):0;return a&&S<a?o+Ot(a-S,h):o}function UJ(o,a,h){o=_I(o),a=yI(a);var S=a?aE(o):0;return a&&S<a?Ot(a-S,h)+o:o}function NJ(o,a,h){return h||a==null?a=0:a&&(a=+a),fU(_I(o).replace(Ko,""),a||0)}function KJ(o,a,h){return(h?sC(o,a,h):a===I)?a=1:a=yI(a),Yn(_I(o),a)}function FJ(){var o=arguments,a=_I(o[0]);return o.length<3?a:a.replace(o[1],o[2])}var RJ=lE(function(o,a,h){return o+(h?"_":"")+a.toLowerCase()});function JJ(o,a,h){return h&&typeof h!="number"&&sC(o,a,h)&&(a=h=I),h=h===I?HA:h>>>0,h?(o=_I(o),o&&(typeof a=="string"||a!=null&&!iD(a))&&(a=YC(a),!a&&tE(o))?TQ(DB(o),0,h):o.split(a,h)):[]}var dJ=lE(function(o,a,h){return o+(h?" ":"")+eD(a)});function pJ(o,a,h){return o=_I(o),h=h==null?0:wi(yI(h),0,o.length),a=YC(a),o.slice(h,h+a.length)==a}function fJ(o,a,h){var S=J.templateSettings;h&&sC(o,a,h)&&(a=I),o=_I(o),a=Ia({},a,S,Ew);var K=Ia({},a.imports,S.imports,Ew),p=Pg(K),b=Gn(K,p),O,V,wA=0,GA=a.interpolate||fg,UA="__p += '",bA=yn((a.escape||fg).source+"|"+GA.source+"|"+(GA===nB?CI:fg).source+"|"+(a.evaluate||fg).source+"|$","g"),VA="//# sourceURL="+(zI.call(a,"sourceURL")?(a.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++x0+"]")+`
`;o.replace(bA,function(nI,fI,HI,mC,nC,bC){return HI||(HI=mC),UA+=o.slice(wA,bC).replace(qC,oU),fI&&(O=!0,UA+=`' +
__e(`+fI+`) +
'`),nC&&(V=!0,UA+=`';
`+nC+`;
__p += '`),HI&&(UA+=`' +
((__t = (`+HI+`)) == null ? '' : __t) +
'`),wA=bC+nI.length,nI}),UA+=`';
`;var sI=zI.call(a,"variable")&&a.variable;if(!sI)UA=`with (obj) {
`+UA+`
}
`;else if(AA.test(sI))throw new wI(E);UA=(V?UA.replace(Bg,""):UA).replace(Z,"$1").replace(aA,"$1;"),UA="function("+(sI||"obj")+`) {
`+(sI?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(O?", __e = _.escape":"")+(V?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+UA+`return __p
}`;var MI=$w(function(){return ZI(p,VA+"return "+UA).apply(I,b)});if(MI.source=UA,QD(MI))throw MI;return MI}function qJ(o){return _I(o).toLowerCase()}function uJ(o){return _I(o).toUpperCase()}function LJ(o,a,h){if(o=_I(o),o&&(h||a===I))return ol(o);if(!o||!(a=YC(a)))return o;var S=DB(o),K=DB(a),p=el(S,K),b=tl(S,K)+1;return TQ(S,p,b).join("")}function YJ(o,a,h){if(o=_I(o),o&&(h||a===I))return o.slice(0,sl(o)+1);if(!o||!(a=YC(a)))return o;var S=DB(o),K=tl(S,DB(a))+1;return TQ(S,0,K).join("")}function HJ(o,a,h){if(o=_I(o),o&&(h||a===I))return o.replace(Ko,"");if(!o||!(a=YC(a)))return o;var S=DB(o),K=el(S,DB(a));return TQ(S,K).join("")}function mJ(o,a){var h=q,S=W;if(tg(a)){var K="separator"in a?a.separator:K;h="length"in a?yI(a.length):h,S="omission"in a?YC(a.omission):S}o=_I(o);var p=o.length;if(tE(o)){var b=DB(o);p=b.length}if(h>=p)return o;var O=h-aE(S);if(O<1)return S;var V=b?TQ(b,0,O).join(""):o.slice(0,O);if(K===I)return V+S;if(b&&(O+=V.length-O),iD(K)){if(o.slice(O).search(K)){var wA,GA=V;for(K.global||(K=yn(K.source,_I(BI.exec(K))+"g")),K.lastIndex=0;wA=K.exec(GA);)var UA=wA.index;V=V.slice(0,UA===I?O:UA)}}else if(o.indexOf(YC(K),O)!=O){var bA=V.lastIndexOf(K);bA>-1&&(V=V.slice(0,bA))}return V+S}function bJ(o){return o=_I(o),o&&II.test(o)?o.replace(FA,rU):o}var TJ=lE(function(o,a,h){return o+(h?" ":"")+a.toUpperCase()}),eD=Aw("toUpperCase");function zw(o,a,h){return o=_I(o),a=h?I:a,a===I?tU(o)?lU(o):IU(o):o.match(a)||[]}var $w=JI(function(o,a){try{return uC(o,I,a)}catch(h){return QD(h)?h:new wI(h)}}),xJ=eQ(function(o,a){return zC(a,function(h){h=mB(h),EQ(o,h,CD(o[h],o))}),o});function OJ(o){var a=o==null?0:o.length,h=iI();return o=a?og(o,function(S){if(typeof S[1]!="function")throw new $C(i);return[h(S[0]),S[1]]}):[],JI(function(S){for(var K=-1;++K<a;){var p=o[K];if(uC(p[0],this,S))return uC(p[1],this,S)}})}function vJ(o){return rN(IB(o,n))}function tD(o){return function(){return o}}function PJ(o,a){return o==null||o!==o?a:o}var ZJ=gw(),WJ=gw(!0);function FC(o){return o}function aD(o){return pl(typeof o=="function"?o:IB(o,n))}function _J(o){return ql(IB(o,n))}function jJ(o,a){return ul(o,IB(a,n))}var VJ=JI(function(o,a){return function(h){return To(h,o,a)}}),XJ=JI(function(o,a){return function(h){return To(o,h,a)}});function sD(o,a,h){var S=Pg(a),K=Lt(a,S);h==null&&!(tg(a)&&(K.length||!S.length))&&(h=a,a=o,o=this,K=Lt(a,Pg(a)));var p=!(tg(h)&&"chain"in h)||!!h.chain,b=aQ(o);return zC(K,function(O){var V=a[O];o[O]=V,b&&(o.prototype[O]=function(){var wA=this.__chain__;if(p||wA){var GA=o(this.__wrapped__),UA=GA.__actions__=UC(this.__actions__);return UA.push({func:V,args:arguments,thisArg:o}),GA.__chain__=wA,GA}return V.apply(o,uQ([this.value()],arguments))})}),o}function zJ(){return Xg._===this&&(Xg._=MU),this}function nD(){}function $J(o){return o=yI(o),JI(function(a){return Ll(a,o)})}var Ad=vn(og),Id=vn(Cl),gd=vn(rn);function AG(o){return Xn(o)?hn(mB(o)):pN(o)}function Cd(o){return function(a){return o==null?I:Gi(o,a)}}var Bd=Bw(),Qd=Bw(!0);function DD(){return[]}function rD(){return!1}function id(){return{}}function Ed(){return""}function od(){return!0}function ed(o,a){if(o=yI(o),o<1||o>QA)return[];var h=HA,S=gC(o,HA);a=iI(a),o-=HA;for(var K=wn(S,a);++h<o;)a(h);return K}function td(o){return GI(o)?og(o,mB):HC(o)?[o]:UC(Gw(_I(o)))}function ad(o){var a=++yU;return _I(o)+a}var sd=xt(function(o,a){return o+a},0),nd=Pn("ceil"),Dd=xt(function(o,a){return o/a},1),rd=Pn("floor");function hd(o){return o&&o.length?ut(o,FC,Jn):I}function cd(o,a){return o&&o.length?ut(o,iI(a,2),Jn):I}function ld(o){return il(o,FC)}function wd(o,a){return il(o,iI(a,2))}function Gd(o){return o&&o.length?ut(o,FC,qn):I}function Sd(o,a){return o&&o.length?ut(o,iI(a,2),qn):I}var yd=xt(function(o,a){return o*a},1),kd=Pn("round"),Md=xt(function(o,a){return o-a},0);function Ud(o){return o&&o.length?ln(o,FC):0}function Nd(o,a){return o&&o.length?ln(o,iI(a,2)):0}return J.after=_F,J.ary=dw,J.assign=uR,J.assignIn=Pw,J.assignInWith=Ia,J.assignWith=LR,J.at=YR,J.before=pw,J.bind=CD,J.bindAll=xJ,J.bindKey=fw,J.castArray=iR,J.chain=Fw,J.chunk=rK,J.compact=hK,J.concat=cK,J.cond=OJ,J.conforms=vJ,J.constant=tD,J.countBy=UF,J.create=HR,J.curry=qw,J.curryRight=uw,J.debounce=Lw,J.defaults=mR,J.defaultsDeep=bR,J.defer=jF,J.delay=VF,J.difference=lK,J.differenceBy=wK,J.differenceWith=GK,J.drop=SK,J.dropRight=yK,J.dropRightWhile=kK,J.dropWhile=MK,J.fill=UK,J.filter=KF,J.flatMap=JF,J.flatMapDeep=dF,J.flatMapDepth=pF,J.flatten=Mw,J.flattenDeep=NK,J.flattenDepth=KK,J.flip=XF,J.flow=ZJ,J.flowRight=WJ,J.fromPairs=FK,J.functions=WR,J.functionsIn=_R,J.groupBy=fF,J.initial=JK,J.intersection=dK,J.intersectionBy=pK,J.intersectionWith=fK,J.invert=VR,J.invertBy=XR,J.invokeMap=uF,J.iteratee=aD,J.keyBy=LF,J.keys=Pg,J.keysIn=KC,J.map=jt,J.mapKeys=$R,J.mapValues=AJ,J.matches=_J,J.matchesProperty=jJ,J.memoize=Xt,J.merge=IJ,J.mergeWith=Zw,J.method=VJ,J.methodOf=XJ,J.mixin=sD,J.negate=zt,J.nthArg=$J,J.omit=gJ,J.omitBy=CJ,J.once=zF,J.orderBy=YF,J.over=Ad,J.overArgs=$F,J.overEvery=Id,J.overSome=gd,J.partial=BD,J.partialRight=Yw,J.partition=HF,J.pick=BJ,J.pickBy=Ww,J.property=AG,J.propertyOf=Cd,J.pull=YK,J.pullAll=Nw,J.pullAllBy=HK,J.pullAllWith=mK,J.pullAt=bK,J.range=Bd,J.rangeRight=Qd,J.rearg=AR,J.reject=TF,J.remove=TK,J.rest=IR,J.reverse=ID,J.sampleSize=OF,J.set=iJ,J.setWith=EJ,J.shuffle=vF,J.slice=xK,J.sortBy=WF,J.sortedUniq=jK,J.sortedUniqBy=VK,J.split=JJ,J.spread=gR,J.tail=XK,J.take=zK,J.takeRight=$K,J.takeRightWhile=AF,J.takeWhile=IF,J.tap=hF,J.throttle=CR,J.thru=_t,J.toArray=xw,J.toPairs=_w,J.toPairsIn=jw,J.toPath=td,J.toPlainObject=vw,J.transform=oJ,J.unary=BR,J.union=gF,J.unionBy=CF,J.unionWith=BF,J.uniq=QF,J.uniqBy=iF,J.uniqWith=EF,J.unset=eJ,J.unzip=gD,J.unzipWith=Kw,J.update=tJ,J.updateWith=aJ,J.values=SE,J.valuesIn=sJ,J.without=oF,J.words=zw,J.wrap=QR,J.xor=eF,J.xorBy=tF,J.xorWith=aF,J.zip=sF,J.zipObject=nF,J.zipObjectDeep=DF,J.zipWith=rF,J.entries=_w,J.entriesIn=jw,J.extend=Pw,J.extendWith=Ia,sD(J,J),J.add=sd,J.attempt=$w,J.camelCase=hJ,J.capitalize=Vw,J.ceil=nd,J.clamp=nJ,J.clone=ER,J.cloneDeep=eR,J.cloneDeepWith=tR,J.cloneWith=oR,J.conformsTo=aR,J.deburr=Xw,J.defaultTo=PJ,J.divide=Dd,J.endsWith=cJ,J.eq=hB,J.escape=lJ,J.escapeRegExp=wJ,J.every=NF,J.find=FF,J.findIndex=yw,J.findKey=TR,J.findLast=RF,J.findLastIndex=kw,J.findLastKey=xR,J.floor=rd,J.forEach=Rw,J.forEachRight=Jw,J.forIn=OR,J.forInRight=vR,J.forOwn=PR,J.forOwnRight=ZR,J.get=ED,J.gt=sR,J.gte=nR,J.has=jR,J.hasIn=oD,J.head=Uw,J.identity=FC,J.includes=qF,J.indexOf=RK,J.inRange=DJ,J.invoke=zR,J.isArguments=ki,J.isArray=GI,J.isArrayBuffer=DR,J.isArrayLike=NC,J.isArrayLikeObject=Fg,J.isBoolean=rR,J.isBuffer=xQ,J.isDate=hR,J.isElement=cR,J.isEmpty=lR,J.isEqual=wR,J.isEqualWith=GR,J.isError=QD,J.isFinite=SR,J.isFunction=aQ,J.isInteger=Hw,J.isLength=$t,J.isMap=mw,J.isMatch=yR,J.isMatchWith=kR,J.isNaN=MR,J.isNative=UR,J.isNil=KR,J.isNull=NR,J.isNumber=bw,J.isObject=tg,J.isObjectLike=lg,J.isPlainObject=Wo,J.isRegExp=iD,J.isSafeInteger=FR,J.isSet=Tw,J.isString=Aa,J.isSymbol=HC,J.isTypedArray=GE,J.isUndefined=RR,J.isWeakMap=JR,J.isWeakSet=dR,J.join=qK,J.kebabCase=GJ,J.last=CB,J.lastIndexOf=uK,J.lowerCase=SJ,J.lowerFirst=yJ,J.lt=pR,J.lte=fR,J.max=hd,J.maxBy=cd,J.mean=ld,J.meanBy=wd,J.min=Gd,J.minBy=Sd,J.stubArray=DD,J.stubFalse=rD,J.stubObject=id,J.stubString=Ed,J.stubTrue=od,J.multiply=yd,J.nth=LK,J.noConflict=zJ,J.noop=nD,J.now=Vt,J.pad=kJ,J.padEnd=MJ,J.padStart=UJ,J.parseInt=NJ,J.random=rJ,J.reduce=mF,J.reduceRight=bF,J.repeat=KJ,J.replace=FJ,J.result=QJ,J.round=kd,J.runInContext=j,J.sample=xF,J.size=PF,J.snakeCase=RJ,J.some=ZF,J.sortedIndex=OK,J.sortedIndexBy=vK,J.sortedIndexOf=PK,J.sortedLastIndex=ZK,J.sortedLastIndexBy=WK,J.sortedLastIndexOf=_K,J.startCase=dJ,J.startsWith=pJ,J.subtract=Md,J.sum=Ud,J.sumBy=Nd,J.template=fJ,J.times=ed,J.toFinite=sQ,J.toInteger=yI,J.toLength=Ow,J.toLower=qJ,J.toNumber=BB,J.toSafeInteger=qR,J.toString=_I,J.toUpper=uJ,J.trim=LJ,J.trimEnd=YJ,J.trimStart=HJ,J.truncate=mJ,J.unescape=bJ,J.uniqueId=ad,J.upperCase=TJ,J.upperFirst=eD,J.each=Rw,J.eachRight=Jw,J.first=Uw,sD(J,function(){var o={};return YB(J,function(a,h){zI.call(J.prototype,h)||(o[h]=a)}),o}(),{chain:!1}),J.VERSION=g,zC(["bind","bindKey","curry","curryRight","partial","partialRight"],function(o){J[o].placeholder=J}),zC(["drop","take"],function(o,a){LI.prototype[o]=function(h){h=h===I?1:Yg(yI(h),0);var S=this.__filtered__&&!a?new LI(this):this.clone();return S.__filtered__?S.__takeCount__=gC(h,S.__takeCount__):S.__views__.push({size:gC(h,HA),type:o+(S.__dir__<0?"Right":"")}),S},LI.prototype[o+"Right"]=function(h){return this.reverse()[o](h).reverse()}}),zC(["filter","map","takeWhile"],function(o,a){var h=a+1,S=h==x||h==eA;LI.prototype[o]=function(K){var p=this.clone();return p.__iteratees__.push({iteratee:iI(K,3),type:h}),p.__filtered__=p.__filtered__||S,p}}),zC(["head","last"],function(o,a){var h="take"+(a?"Right":"");LI.prototype[o]=function(){return this[h](1).value()[0]}}),zC(["initial","tail"],function(o,a){var h="drop"+(a?"":"Right");LI.prototype[o]=function(){return this.__filtered__?new LI(this):this[h](1)}}),LI.prototype.compact=function(){return this.filter(FC)},LI.prototype.find=function(o){return this.filter(o).head()},LI.prototype.findLast=function(o){return this.reverse().find(o)},LI.prototype.invokeMap=JI(function(o,a){return typeof o=="function"?new LI(this):this.map(function(h){return To(h,o,a)})}),LI.prototype.reject=function(o){return this.filter(zt(iI(o)))},LI.prototype.slice=function(o,a){o=yI(o);var h=this;return h.__filtered__&&(o>0||a<0)?new LI(h):(o<0?h=h.takeRight(-o):o&&(h=h.drop(o)),a!==I&&(a=yI(a),h=a<0?h.dropRight(-a):h.take(a-o)),h)},LI.prototype.takeRightWhile=function(o){return this.reverse().takeWhile(o).reverse()},LI.prototype.toArray=function(){return this.take(HA)},YB(LI.prototype,function(o,a){var h=/^(?:filter|find|map|reject)|While$/.test(a),S=/^(?:head|last)$/.test(a),K=J[S?"take"+(a=="last"?"Right":""):a],p=S||/^find/.test(a);K&&(J.prototype[a]=function(){var b=this.__wrapped__,O=S?[1]:arguments,V=b instanceof LI,wA=O[0],GA=V||GI(b),UA=function(fI){var HI=K.apply(J,uQ([fI],O));return S&&bA?HI[0]:HI};GA&&h&&typeof wA=="function"&&wA.length!=1&&(V=GA=!1);var bA=this.__chain__,VA=!!this.__actions__.length,sI=p&&!bA,MI=V&&!VA;if(!p&&GA){b=MI?b:new LI(this);var nI=o.apply(b,O);return nI.__actions__.push({func:_t,args:[UA],thisArg:I}),new AB(nI,bA)}return sI&&MI?o.apply(this,O):(nI=this.thru(UA),sI?S?nI.value()[0]:nI.value():nI)})}),zC(["pop","push","shift","sort","splice","unshift"],function(o){var a=Gt[o],h=/^(?:push|sort|unshift)$/.test(o)?"tap":"thru",S=/^(?:pop|shift)$/.test(o);J.prototype[o]=function(){var K=arguments;if(S&&!this.__chain__){var p=this.value();return a.apply(GI(p)?p:[],K)}return this[h](function(b){return a.apply(GI(b)?b:[],K)})}}),YB(LI.prototype,function(o,a){var h=J[a];if(h){var S=h.name+"";zI.call(rE,S)||(rE[S]=[]),rE[S].push({name:a,func:h})}}),rE[Tt(I,c).name]=[{name:"wrapper",func:I}],LI.prototype.clone=bU,LI.prototype.reverse=TU,LI.prototype.value=xU,J.prototype.at=cF,J.prototype.chain=lF,J.prototype.commit=wF,J.prototype.next=GF,J.prototype.plant=yF,J.prototype.reverse=kF,J.prototype.toJSON=J.prototype.valueOf=J.prototype.value=MF,J.prototype.first=J.prototype.head,qo&&(J.prototype[qo]=SF),J},sE=wU();ri?((ri.exports=sE)._=sE,an._=sE):Xg._=sE}).call(Ee)})(ks,ks.exports);ks.exports;const Y2=()=>mb("threlte-controls",{orbitControls:ng(void 0)}),oy={type:"change"},er={type:"start"},ey={type:"end"};let H2=class extends CQ{constructor(A,I){super(),this.object=A,this.domElement=I,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new u,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:fi.ROTATE,MIDDLE:fi.DOLLY,RIGHT:fi.PAN},this.touches={ONE:qi.ROTATE,TWO:qi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return E.phi},this.getAzimuthalAngle=function(){return E.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(T){T.addEventListener("keydown",oI),this._domElementKeyEvents=T},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",oI),this._domElementKeyEvents=null},this.saveState=function(){g.target0.copy(g.target),g.position0.copy(g.object.position),g.zoom0=g.object.zoom},this.reset=function(){g.target.copy(g.target0),g.object.position.copy(g.position0),g.object.zoom=g.zoom0,g.object.updateProjectionMatrix(),g.dispatchEvent(oy),g.update(),B=C.NONE},this.update=function(){const T=new u,DA=new hg().setFromUnitVectors(A.up,new u(0,1,0)),BA=DA.clone().invert(),fA=new u,OA=new hg,_A=2*Math.PI;return function(){const WA=g.object.position;T.copy(WA).sub(g.target),T.applyQuaternion(DA),E.setFromVector3(T),g.autoRotate&&B===C.NONE&&F(d()),g.enableDamping?(E.theta+=e.theta*g.dampingFactor,E.phi+=e.phi*g.dampingFactor):(E.theta+=e.theta,E.phi+=e.phi);let tI=g.minAzimuthAngle,aI=g.maxAzimuthAngle;return isFinite(tI)&&isFinite(aI)&&(tI<-Math.PI?tI+=_A:tI>Math.PI&&(tI-=_A),aI<-Math.PI?aI+=_A:aI>Math.PI&&(aI-=_A),tI<=aI?E.theta=Math.max(tI,Math.min(aI,E.theta)):E.theta=E.theta>(tI+aI)/2?Math.max(tI,E.theta):Math.min(aI,E.theta)),E.phi=Math.max(g.minPolarAngle,Math.min(g.maxPolarAngle,E.phi)),E.makeSafe(),E.radius*=t,E.radius=Math.max(g.minDistance,Math.min(g.maxDistance,E.radius)),g.enableDamping===!0?g.target.addScaledVector(s,g.dampingFactor):g.target.add(s),T.setFromSpherical(E),T.applyQuaternion(BA),WA.copy(g.target).add(T),g.object.lookAt(g.target),g.enableDamping===!0?(e.theta*=1-g.dampingFactor,e.phi*=1-g.dampingFactor,s.multiplyScalar(1-g.dampingFactor)):(e.set(0,0,0),s.set(0,0,0)),t=1,n||fA.distanceToSquared(g.object.position)>i||8*(1-OA.dot(g.object.quaternion))>i?(g.dispatchEvent(oy),fA.copy(g.object.position),OA.copy(g.object.quaternion),n=!1,!0):!1}}(),this.dispose=function(){g.domElement.removeEventListener("contextmenu",f),g.domElement.removeEventListener("pointerdown",rA),g.domElement.removeEventListener("pointercancel",qA),g.domElement.removeEventListener("wheel",$A),g.domElement.removeEventListener("pointermove",mA),g.domElement.removeEventListener("pointerup",qA),g._domElementKeyEvents!==null&&(g._domElementKeyEvents.removeEventListener("keydown",oI),g._domElementKeyEvents=null)};const g=this,C={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let B=C.NONE;const i=1e-6,E=new zr,e=new zr;let t=1;const s=new u;let n=!1;const D=new cA,r=new cA,l=new cA,G=new cA,w=new cA,c=new cA,k=new cA,y=new cA,M=new cA,N=[],R={};function d(){return 2*Math.PI/60/60*g.autoRotateSpeed}function L(){return Math.pow(.95,g.zoomSpeed)}function F(T){e.theta-=T}function q(T){e.phi-=T}const W=function(){const T=new u;return function(BA,fA){T.setFromMatrixColumn(fA,0),T.multiplyScalar(-BA),s.add(T)}}(),$=function(){const T=new u;return function(BA,fA){g.screenSpacePanning===!0?T.setFromMatrixColumn(fA,1):(T.setFromMatrixColumn(fA,0),T.crossVectors(g.object.up,T)),T.multiplyScalar(BA),s.add(T)}}(),H=function(){const T=new u;return function(BA,fA){const OA=g.domElement;if(g.object.isPerspectiveCamera){const _A=g.object.position;T.copy(_A).sub(g.target);let xA=T.length();xA*=Math.tan(g.object.fov/2*Math.PI/180),W(2*BA*xA/OA.clientHeight,g.object.matrix),$(2*fA*xA/OA.clientHeight,g.object.matrix)}else g.object.isOrthographicCamera?(W(BA*(g.object.right-g.object.left)/g.object.zoom/OA.clientWidth,g.object.matrix),$(fA*(g.object.top-g.object.bottom)/g.object.zoom/OA.clientHeight,g.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),g.enablePan=!1)}}();function x(T){g.object.isPerspectiveCamera?t/=T:g.object.isOrthographicCamera?(g.object.zoom=Math.max(g.minZoom,Math.min(g.maxZoom,g.object.zoom*T)),g.object.updateProjectionMatrix(),n=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),g.enableZoom=!1)}function IA(T){g.object.isPerspectiveCamera?t*=T:g.object.isOrthographicCamera?(g.object.zoom=Math.max(g.minZoom,Math.min(g.maxZoom,g.object.zoom/T)),g.object.updateProjectionMatrix(),n=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),g.enableZoom=!1)}function eA(T){D.set(T.clientX,T.clientY)}function CA(T){k.set(T.clientX,T.clientY)}function QA(T){G.set(T.clientX,T.clientY)}function NA(T){r.set(T.clientX,T.clientY),l.subVectors(r,D).multiplyScalar(g.rotateSpeed);const DA=g.domElement;F(2*Math.PI*l.x/DA.clientHeight),q(2*Math.PI*l.y/DA.clientHeight),D.copy(r),g.update()}function SA(T){y.set(T.clientX,T.clientY),M.subVectors(y,k),M.y>0?x(L()):M.y<0&&IA(L()),k.copy(y),g.update()}function HA(T){w.set(T.clientX,T.clientY),c.subVectors(w,G).multiplyScalar(g.panSpeed),H(c.x,c.y),G.copy(w),g.update()}function dA(T){T.deltaY<0?IA(L()):T.deltaY>0&&x(L()),g.update()}function oA(T){let DA=!1;switch(T.code){case g.keys.UP:T.ctrlKey||T.metaKey||T.shiftKey?q(2*Math.PI*g.rotateSpeed/g.domElement.clientHeight):H(0,g.keyPanSpeed),DA=!0;break;case g.keys.BOTTOM:T.ctrlKey||T.metaKey||T.shiftKey?q(-2*Math.PI*g.rotateSpeed/g.domElement.clientHeight):H(0,-g.keyPanSpeed),DA=!0;break;case g.keys.LEFT:T.ctrlKey||T.metaKey||T.shiftKey?F(2*Math.PI*g.rotateSpeed/g.domElement.clientHeight):H(g.keyPanSpeed,0),DA=!0;break;case g.keys.RIGHT:T.ctrlKey||T.metaKey||T.shiftKey?F(-2*Math.PI*g.rotateSpeed/g.domElement.clientHeight):H(-g.keyPanSpeed,0),DA=!0;break}DA&&(T.preventDefault(),g.update())}function lA(){if(N.length===1)D.set(N[0].pageX,N[0].pageY);else{const T=.5*(N[0].pageX+N[1].pageX),DA=.5*(N[0].pageY+N[1].pageY);D.set(T,DA)}}function pA(){if(N.length===1)G.set(N[0].pageX,N[0].pageY);else{const T=.5*(N[0].pageX+N[1].pageX),DA=.5*(N[0].pageY+N[1].pageY);G.set(T,DA)}}function uA(){const T=N[0].pageX-N[1].pageX,DA=N[0].pageY-N[1].pageY,BA=Math.sqrt(T*T+DA*DA);k.set(0,BA)}function P(){g.enableZoom&&uA(),g.enablePan&&pA()}function zA(){g.enableZoom&&uA(),g.enableRotate&&lA()}function AI(T){if(N.length==1)r.set(T.pageX,T.pageY);else{const BA=_(T),fA=.5*(T.pageX+BA.x),OA=.5*(T.pageY+BA.y);r.set(fA,OA)}l.subVectors(r,D).multiplyScalar(g.rotateSpeed);const DA=g.domElement;F(2*Math.PI*l.x/DA.clientHeight),q(2*Math.PI*l.y/DA.clientHeight),D.copy(r)}function RA(T){if(N.length===1)w.set(T.pageX,T.pageY);else{const DA=_(T),BA=.5*(T.pageX+DA.x),fA=.5*(T.pageY+DA.y);w.set(BA,fA)}c.subVectors(w,G).multiplyScalar(g.panSpeed),H(c.x,c.y),G.copy(w)}function LA(T){const DA=_(T),BA=T.pageX-DA.x,fA=T.pageY-DA.y,OA=Math.sqrt(BA*BA+fA*fA);y.set(0,OA),M.set(0,Math.pow(y.y/k.y,g.zoomSpeed)),x(M.y),k.copy(y)}function yA(T){g.enableZoom&&LA(T),g.enablePan&&RA(T)}function tA(T){g.enableZoom&&LA(T),g.enableRotate&&AI(T)}function rA(T){g.enabled!==!1&&(N.length===0&&(g.domElement.setPointerCapture(T.pointerId),g.domElement.addEventListener("pointermove",mA),g.domElement.addEventListener("pointerup",qA)),EA(T),T.pointerType==="touch"?eI(T):ZA(T))}function mA(T){g.enabled!==!1&&(T.pointerType==="touch"?m(T):gI(T))}function qA(T){kA(T),N.length===0&&(g.domElement.releasePointerCapture(T.pointerId),g.domElement.removeEventListener("pointermove",mA),g.domElement.removeEventListener("pointerup",qA)),g.dispatchEvent(ey),B=C.NONE}function ZA(T){let DA;switch(T.button){case 0:DA=g.mouseButtons.LEFT;break;case 1:DA=g.mouseButtons.MIDDLE;break;case 2:DA=g.mouseButtons.RIGHT;break;default:DA=-1}switch(DA){case fi.DOLLY:if(g.enableZoom===!1)return;CA(T),B=C.DOLLY;break;case fi.ROTATE:if(T.ctrlKey||T.metaKey||T.shiftKey){if(g.enablePan===!1)return;QA(T),B=C.PAN}else{if(g.enableRotate===!1)return;eA(T),B=C.ROTATE}break;case fi.PAN:if(T.ctrlKey||T.metaKey||T.shiftKey){if(g.enableRotate===!1)return;eA(T),B=C.ROTATE}else{if(g.enablePan===!1)return;QA(T),B=C.PAN}break;default:B=C.NONE}B!==C.NONE&&g.dispatchEvent(er)}function gI(T){switch(B){case C.ROTATE:if(g.enableRotate===!1)return;NA(T);break;case C.DOLLY:if(g.enableZoom===!1)return;SA(T);break;case C.PAN:if(g.enablePan===!1)return;HA(T);break}}function $A(T){g.enabled===!1||g.enableZoom===!1||B!==C.NONE||(T.preventDefault(),g.dispatchEvent(er),dA(T),g.dispatchEvent(ey))}function oI(T){g.enabled===!1||g.enablePan===!1||oA(T)}function eI(T){switch(KA(T),N.length){case 1:switch(g.touches.ONE){case qi.ROTATE:if(g.enableRotate===!1)return;lA(),B=C.TOUCH_ROTATE;break;case qi.PAN:if(g.enablePan===!1)return;pA(),B=C.TOUCH_PAN;break;default:B=C.NONE}break;case 2:switch(g.touches.TWO){case qi.DOLLY_PAN:if(g.enableZoom===!1&&g.enablePan===!1)return;P(),B=C.TOUCH_DOLLY_PAN;break;case qi.DOLLY_ROTATE:if(g.enableZoom===!1&&g.enableRotate===!1)return;zA(),B=C.TOUCH_DOLLY_ROTATE;break;default:B=C.NONE}break;default:B=C.NONE}B!==C.NONE&&g.dispatchEvent(er)}function m(T){switch(KA(T),B){case C.TOUCH_ROTATE:if(g.enableRotate===!1)return;AI(T),g.update();break;case C.TOUCH_PAN:if(g.enablePan===!1)return;RA(T),g.update();break;case C.TOUCH_DOLLY_PAN:if(g.enableZoom===!1&&g.enablePan===!1)return;yA(T),g.update();break;case C.TOUCH_DOLLY_ROTATE:if(g.enableZoom===!1&&g.enableRotate===!1)return;tA(T),g.update();break;default:B=C.NONE}}function f(T){g.enabled!==!1&&T.preventDefault()}function EA(T){N.push(T)}function kA(T){delete R[T.pointerId];for(let DA=0;DA<N.length;DA++)if(N[DA].pointerId==T.pointerId){N.splice(DA,1);return}}function KA(T){let DA=R[T.pointerId];DA===void 0&&(DA=new cA,R[T.pointerId]=DA),DA.set(T.pageX,T.pageY)}function _(T){const DA=T.pointerId===N[0].pointerId?N[1]:N[0];return R[DA.pointerId]}g.domElement.addEventListener("contextmenu",f),g.domElement.addEventListener("pointerdown",rA),g.domElement.addEventListener("pointercancel",qA),g.domElement.addEventListener("wheel",$A,{passive:!1}),this.update()}};const m2=Q=>({ref:Q&1}),ty=Q=>({ref:Q[0]});function b2(Q){let A;const I=Q[7].default,g=GC(I,Q,Q[10],ty);return{c(){g&&g.c()},m(C,B){g&&g.m(C,B),A=!0},p(C,B){g&&g.p&&(!A||B&1025)&&yC(g,I,C,C[10],A?SC(I,C[10],B,m2):kC(C[10]),ty)},i(C){A||(MA(g,C),A=!0)},o(C){JA(g,C),A=!1},d(C){g&&g.d(C)}}}function T2(Q){let A,I;const g=[{is:Q[0]},Q[6]];let C={$$slots:{default:[b2,({ref:B})=>({0:B}),({ref:B})=>B?1:0]},$$scope:{ctx:Q}};for(let B=0;B<g.length;B+=1)C=FB(C,g[B]);return A=new Ng({props:C}),Q[8](A),A.$on("change",Q[3]),A.$on("create",Q[9]),{c(){hI(A.$$.fragment)},m(B,i){DI(A,B,i),I=!0},p(B,[i]){const E=i&65?Us(g,[i&1&&{is:B[0]},i&64&&My(B[6])]):{};i&1025&&(E.$$scope={dirty:i,ctx:B}),A.$set(E)},i(B){I||(MA(A.$$.fragment,B),I=!0)},o(B){JA(A.$$.fragment,B),I=!1},d(B){Q[8](null),rI(A,B)}}}function x2(Q,A,I){const g=["ref"];let C=Bo(A,g),B,i,{$$slots:E={},$$scope:e}=A;const t=yM();dg(Q,t,y=>I(11,B=y));const{renderer:s,invalidate:n}=ni();if(!s)throw new Error("Threlte Context missing: Is <OrbitControls> a child of <Canvas>?");if(!(B instanceof ve))throw new Error("Parent missing: <OrbitControls> need to be a child of a <Camera>");const D=new H2(B,s.domElement),{start:r,stop:l}=sc(()=>D.update(),{autostart:!1,debugFrameloopMessage:"OrbitControls: updating controls"}),G=RM();dg(Q,G,y=>I(1,i=y));const{orbitControls:w}=Y2();function c(y){PB[y?"unshift":"push"](()=>{i=y,G.set(i)})}const k=({ref:y,cleanup:M})=>{w.set(y),M(()=>{w.set(void 0)})};return Q.$$set=y=>{A=FB(FB({},A),Cs(y)),I(6,C=Bo(A,g)),"$$scope"in y&&I(10,e=y.$$scope)},Q.$$.update=()=>{C.autoRotate||C.enableDamping?r():l()},[D,i,t,n,G,w,C,E,c,k,e]}class O2 extends jg{constructor(A){super(),_g(this,A,x2,T2,pg,{ref:0})}get ref(){return this.$$.ctx[0]}}new cI;new cI;new mg;function oe(Q,A,I){return Math.max(A,Math.min(I,Q))}function v2(Q,A){return(Q%A+A)%A}function tr(Q,A,I){return(1-I)*Q+I*A}const kQ="srgb",uc="srgb-linear",N0="display-p3";class nt{constructor(){nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(A,I,g,C,B,i,E,e,t){const s=this.elements;return s[0]=A,s[1]=C,s[2]=E,s[3]=I,s[4]=B,s[5]=e,s[6]=g,s[7]=i,s[8]=t,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(A){const I=this.elements,g=A.elements;return I[0]=g[0],I[1]=g[1],I[2]=g[2],I[3]=g[3],I[4]=g[4],I[5]=g[5],I[6]=g[6],I[7]=g[7],I[8]=g[8],this}extractBasis(A,I,g){return A.setFromMatrix3Column(this,0),I.setFromMatrix3Column(this,1),g.setFromMatrix3Column(this,2),this}setFromMatrix4(A){const I=A.elements;return this.set(I[0],I[4],I[8],I[1],I[5],I[9],I[2],I[6],I[10]),this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,I){const g=A.elements,C=I.elements,B=this.elements,i=g[0],E=g[3],e=g[6],t=g[1],s=g[4],n=g[7],D=g[2],r=g[5],l=g[8],G=C[0],w=C[3],c=C[6],k=C[1],y=C[4],M=C[7],N=C[2],R=C[5],d=C[8];return B[0]=i*G+E*k+e*N,B[3]=i*w+E*y+e*R,B[6]=i*c+E*M+e*d,B[1]=t*G+s*k+n*N,B[4]=t*w+s*y+n*R,B[7]=t*c+s*M+n*d,B[2]=D*G+r*k+l*N,B[5]=D*w+r*y+l*R,B[8]=D*c+r*M+l*d,this}multiplyScalar(A){const I=this.elements;return I[0]*=A,I[3]*=A,I[6]*=A,I[1]*=A,I[4]*=A,I[7]*=A,I[2]*=A,I[5]*=A,I[8]*=A,this}determinant(){const A=this.elements,I=A[0],g=A[1],C=A[2],B=A[3],i=A[4],E=A[5],e=A[6],t=A[7],s=A[8];return I*i*s-I*E*t-g*B*s+g*E*e+C*B*t-C*i*e}invert(){const A=this.elements,I=A[0],g=A[1],C=A[2],B=A[3],i=A[4],E=A[5],e=A[6],t=A[7],s=A[8],n=s*i-E*t,D=E*e-s*B,r=t*B-i*e,l=I*n+g*D+C*r;if(l===0)return this.set(0,0,0,0,0,0,0,0,0);const G=1/l;return A[0]=n*G,A[1]=(C*t-s*g)*G,A[2]=(E*g-C*i)*G,A[3]=D*G,A[4]=(s*I-C*e)*G,A[5]=(C*B-E*I)*G,A[6]=r*G,A[7]=(g*e-t*I)*G,A[8]=(i*I-g*B)*G,this}transpose(){let A;const I=this.elements;return A=I[1],I[1]=I[3],I[3]=A,A=I[2],I[2]=I[6],I[6]=A,A=I[5],I[5]=I[7],I[7]=A,this}getNormalMatrix(A){return this.setFromMatrix4(A).invert().transpose()}transposeIntoArray(A){const I=this.elements;return A[0]=I[0],A[1]=I[3],A[2]=I[6],A[3]=I[1],A[4]=I[4],A[5]=I[7],A[6]=I[2],A[7]=I[5],A[8]=I[8],this}setUvTransform(A,I,g,C,B,i,E){const e=Math.cos(B),t=Math.sin(B);return this.set(g*e,g*t,-g*(e*i+t*E)+i+A,-C*t,C*e,-C*(-t*i+e*E)+E+I,0,0,1),this}scale(A,I){return this.premultiply(ar.makeScale(A,I)),this}rotate(A){return this.premultiply(ar.makeRotation(-A)),this}translate(A,I){return this.premultiply(ar.makeTranslation(A,I)),this}makeTranslation(A,I){return this.set(1,0,A,0,1,I,0,0,1),this}makeRotation(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,-g,0,g,I,0,0,0,1),this}makeScale(A,I){return this.set(A,0,0,0,I,0,0,0,1),this}equals(A){const I=this.elements,g=A.elements;for(let C=0;C<9;C++)if(I[C]!==g[C])return!1;return!0}fromArray(A,I=0){for(let g=0;g<9;g++)this.elements[g]=A[g+I];return this}toArray(A=[],I=0){const g=this.elements;return A[I]=g[0],A[I+1]=g[1],A[I+2]=g[2],A[I+3]=g[3],A[I+4]=g[4],A[I+5]=g[5],A[I+6]=g[6],A[I+7]=g[7],A[I+8]=g[8],A}clone(){return new this.constructor().fromArray(this.elements)}}const ar=new nt;function sr(Q){return Q<.04045?Q*.0773993808:Math.pow(Q*.9478672986+.0521327014,2.4)}function nr(Q){return Q<.0031308?Q*12.92:1.055*Math.pow(Q,.41666)-.055}const P2=new nt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Z2=new nt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function W2(Q){return Q.convertSRGBToLinear().applyMatrix3(Z2)}function _2(Q){return Q.applyMatrix3(P2).convertLinearToSRGB()}const j2={[uc]:Q=>Q,[kQ]:Q=>Q.convertSRGBToLinear(),[N0]:W2},V2={[uc]:Q=>Q,[kQ]:Q=>Q.convertLinearToSRGB(),[N0]:_2},SB={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(Q){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!Q},get workingColorSpace(){return uc},set workingColorSpace(Q){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(Q,A,I){if(this.enabled===!1||A===I||!A||!I)return Q;const g=j2[A],C=V2[I];if(g===void 0||C===void 0)throw new Error(`Unsupported color space conversion, "${A}" to "${I}".`);return C(g(Q))},fromWorkingColorSpace:function(Q,A){return this.convert(Q,this.workingColorSpace,A)},toWorkingColorSpace:function(Q,A){return this.convert(Q,A,this.workingColorSpace)}},K0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yB={h:0,s:0,l:0},Pa={h:0,s:0,l:0};function Dr(Q,A,I){return I<0&&(I+=1),I>1&&(I-=1),I<1/6?Q+(A-Q)*6*I:I<1/2?A:I<2/3?Q+(A-Q)*6*(2/3-I):Q}class Lc{constructor(A,I,g){return this.isColor=!0,this.r=1,this.g=1,this.b=1,I===void 0&&g===void 0?this.set(A):this.setRGB(A,I,g)}set(A){return A&&A.isColor?this.copy(A):typeof A=="number"?this.setHex(A):typeof A=="string"&&this.setStyle(A),this}setScalar(A){return this.r=A,this.g=A,this.b=A,this}setHex(A,I=kQ){return A=Math.floor(A),this.r=(A>>16&255)/255,this.g=(A>>8&255)/255,this.b=(A&255)/255,SB.toWorkingColorSpace(this,I),this}setRGB(A,I,g,C=SB.workingColorSpace){return this.r=A,this.g=I,this.b=g,SB.toWorkingColorSpace(this,C),this}setHSL(A,I,g,C=SB.workingColorSpace){if(A=v2(A,1),I=oe(I,0,1),g=oe(g,0,1),I===0)this.r=this.g=this.b=g;else{const B=g<=.5?g*(1+I):g+I-g*I,i=2*g-B;this.r=Dr(i,B,A+1/3),this.g=Dr(i,B,A),this.b=Dr(i,B,A-1/3)}return SB.toWorkingColorSpace(this,C),this}setStyle(A,I=kQ){function g(B){B!==void 0&&parseFloat(B)<1&&console.warn("THREE.Color: Alpha component of "+A+" will be ignored.")}let C;if(C=/^(\w+)\(([^\)]*)\)/.exec(A)){let B;const i=C[1],E=C[2];switch(i){case"rgb":case"rgba":if(B=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(E))return g(B[4]),this.setRGB(Math.min(255,parseInt(B[1],10))/255,Math.min(255,parseInt(B[2],10))/255,Math.min(255,parseInt(B[3],10))/255,I);if(B=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(E))return g(B[4]),this.setRGB(Math.min(100,parseInt(B[1],10))/100,Math.min(100,parseInt(B[2],10))/100,Math.min(100,parseInt(B[3],10))/100,I);break;case"hsl":case"hsla":if(B=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(E))return g(B[4]),this.setHSL(parseFloat(B[1])/360,parseFloat(B[2])/100,parseFloat(B[3])/100,I);break;default:console.warn("THREE.Color: Unknown color model "+A)}}else if(C=/^\#([A-Fa-f\d]+)$/.exec(A)){const B=C[1],i=B.length;if(i===3)return this.setRGB(parseInt(B.charAt(0),16)/15,parseInt(B.charAt(1),16)/15,parseInt(B.charAt(2),16)/15,I);if(i===6)return this.setHex(parseInt(B,16),I);console.warn("THREE.Color: Invalid hex color "+A)}else if(A&&A.length>0)return this.setColorName(A,I);return this}setColorName(A,I=kQ){const g=K0[A.toLowerCase()];return g!==void 0?this.setHex(g,I):console.warn("THREE.Color: Unknown color "+A),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(A){return this.r=A.r,this.g=A.g,this.b=A.b,this}copySRGBToLinear(A){return this.r=sr(A.r),this.g=sr(A.g),this.b=sr(A.b),this}copyLinearToSRGB(A){return this.r=nr(A.r),this.g=nr(A.g),this.b=nr(A.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(A=kQ){return SB.fromWorkingColorSpace(iC.copy(this),A),Math.round(oe(iC.r*255,0,255))*65536+Math.round(oe(iC.g*255,0,255))*256+Math.round(oe(iC.b*255,0,255))}getHexString(A=kQ){return("000000"+this.getHex(A).toString(16)).slice(-6)}getHSL(A,I=SB.workingColorSpace){SB.fromWorkingColorSpace(iC.copy(this),I);const g=iC.r,C=iC.g,B=iC.b,i=Math.max(g,C,B),E=Math.min(g,C,B);let e,t;const s=(E+i)/2;if(E===i)e=0,t=0;else{const n=i-E;switch(t=s<=.5?n/(i+E):n/(2-i-E),i){case g:e=(C-B)/n+(C<B?6:0);break;case C:e=(B-g)/n+2;break;case B:e=(g-C)/n+4;break}e/=6}return A.h=e,A.s=t,A.l=s,A}getRGB(A,I=SB.workingColorSpace){return SB.fromWorkingColorSpace(iC.copy(this),I),A.r=iC.r,A.g=iC.g,A.b=iC.b,A}getStyle(A=kQ){SB.fromWorkingColorSpace(iC.copy(this),A);const I=iC.r,g=iC.g,C=iC.b;return A!==kQ?`color(${A} ${I.toFixed(3)} ${g.toFixed(3)} ${C.toFixed(3)})`:`rgb(${Math.round(I*255)},${Math.round(g*255)},${Math.round(C*255)})`}offsetHSL(A,I,g){return this.getHSL(yB),yB.h+=A,yB.s+=I,yB.l+=g,this.setHSL(yB.h,yB.s,yB.l),this}add(A){return this.r+=A.r,this.g+=A.g,this.b+=A.b,this}addColors(A,I){return this.r=A.r+I.r,this.g=A.g+I.g,this.b=A.b+I.b,this}addScalar(A){return this.r+=A,this.g+=A,this.b+=A,this}sub(A){return this.r=Math.max(0,this.r-A.r),this.g=Math.max(0,this.g-A.g),this.b=Math.max(0,this.b-A.b),this}multiply(A){return this.r*=A.r,this.g*=A.g,this.b*=A.b,this}multiplyScalar(A){return this.r*=A,this.g*=A,this.b*=A,this}lerp(A,I){return this.r+=(A.r-this.r)*I,this.g+=(A.g-this.g)*I,this.b+=(A.b-this.b)*I,this}lerpColors(A,I,g){return this.r=A.r+(I.r-A.r)*g,this.g=A.g+(I.g-A.g)*g,this.b=A.b+(I.b-A.b)*g,this}lerpHSL(A,I){this.getHSL(yB),A.getHSL(Pa);const g=tr(yB.h,Pa.h,I),C=tr(yB.s,Pa.s,I),B=tr(yB.l,Pa.l,I);return this.setHSL(g,C,B),this}setFromVector3(A){return this.r=A.x,this.g=A.y,this.b=A.z,this}applyMatrix3(A){const I=this.r,g=this.g,C=this.b,B=A.elements;return this.r=B[0]*I+B[3]*g+B[6]*C,this.g=B[1]*I+B[4]*g+B[7]*C,this.b=B[2]*I+B[5]*g+B[8]*C,this}equals(A){return A.r===this.r&&A.g===this.g&&A.b===this.b}fromArray(A,I=0){return this.r=A[I],this.g=A[I+1],this.b=A[I+2],this}toArray(A=[],I=0){return A[I]=this.r,A[I+1]=this.g,A[I+2]=this.b,A}fromBufferAttribute(A,I){return this.r=A.getX(I),this.g=A.getY(I),this.b=A.getZ(I),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const iC=new Lc;Lc.NAMES=K0;const ee=new u;function EB(Q,A,I,g,C,B){const i=2*Math.PI*C/4,E=Math.max(B-2*C,0),e=Math.PI/4;ee.copy(A),ee[g]=0,ee.normalize();const t=.5*i/(i+E),s=1-ee.angleTo(Q)/e;return Math.sign(ee[I])===1?s*t:E/(i+E)+t+t*(1-s)}class X2 extends JQ{constructor(A=1,I=1,g=1,C=2,B=.1){if(C=C*2+1,B=Math.min(A/2,I/2,g/2,B),super(1,1,1,C,C,C),C===1)return;const i=this.toNonIndexed();this.index=null,this.attributes.position=i.attributes.position,this.attributes.normal=i.attributes.normal,this.attributes.uv=i.attributes.uv;const E=new u,e=new u,t=new u(A,I,g).divideScalar(2).subScalar(B),s=this.attributes.position.array,n=this.attributes.normal.array,D=this.attributes.uv.array,r=s.length/6,l=new u,G=.5/C;for(let w=0,c=0;w<s.length;w+=3,c+=2)switch(E.fromArray(s,w),e.copy(E),e.x-=Math.sign(e.x)*G,e.y-=Math.sign(e.y)*G,e.z-=Math.sign(e.z)*G,e.normalize(),s[w+0]=t.x*Math.sign(E.x)+e.x*B,s[w+1]=t.y*Math.sign(E.y)+e.y*B,s[w+2]=t.z*Math.sign(E.z)+e.z*B,n[w+0]=e.x,n[w+1]=e.y,n[w+2]=e.z,Math.floor(w/r)){case 0:l.set(1,0,0),D[c+0]=EB(l,e,"z","y",B,g),D[c+1]=1-EB(l,e,"y","z",B,I);break;case 1:l.set(-1,0,0),D[c+0]=1-EB(l,e,"z","y",B,g),D[c+1]=1-EB(l,e,"y","z",B,I);break;case 2:l.set(0,1,0),D[c+0]=1-EB(l,e,"x","z",B,A),D[c+1]=EB(l,e,"z","x",B,g);break;case 3:l.set(0,-1,0),D[c+0]=1-EB(l,e,"x","z",B,A),D[c+1]=1-EB(l,e,"z","x",B,g);break;case 4:l.set(0,0,1),D[c+0]=1-EB(l,e,"x","y",B,A),D[c+1]=1-EB(l,e,"y","x",B,I);break;case 5:l.set(0,0,-1),D[c+0]=EB(l,e,"x","y",B,A),D[c+1]=1-EB(l,e,"y","x",B,I);break}}}function ay(Q){Q[1]=Q[3][0],Q[2]=Q[3][1]}function z2(Q){return{c:yg,m:yg,p:yg,i:yg,o:yg,d:yg}}function $2(Q){ay(Q);let A,I;return A=new Ng.MeshPhongMaterial({props:{map:Q[1],normalMap:Q[2],shininess:1e3}}),{c(){hI(A.$$.fragment)},m(g,C){DI(A,g,C),I=!0},p(g,C){ay(g)},i(g){I||(MA(A.$$.fragment,g),I=!0)},o(g){JA(A.$$.fragment,g),I=!1},d(g){rI(A,g)}}}function Ax(Q){return{c:yg,m:yg,p:yg,i:yg,o:yg,d:yg}}function Ix(Q){let A,I,g,C;A=new Ng.RoundedBoxGeometry({props:{args:[50,.75,10,1,1]}});let B={ctx:Q,current:null,token:null,hasCatch:!1,pending:Ax,then:$2,catch:z2,value:3,blocks:[,,,]};return md(Promise.all(Q[0]),B),{c(){hI(A.$$.fragment),I=$g(),g=IQ(),B.block.c()},m(i,E){DI(A,i,E),vI(i,I,E),vI(i,g,E),B.block.m(i,B.anchor=E),B.mount=()=>g.parentNode,B.anchor=g,C=!0},p(i,E){Q=i,bd(B,Q,E)},i(i){C||(MA(A.$$.fragment,i),MA(B.block),C=!0)},o(i){JA(A.$$.fragment,i);for(let E=0;E<3;E+=1){const e=B.blocks[E];JA(e)}C=!1},d(i){rI(A,i),i&&xI(I),i&&xI(g),B.block.d(i),B.token=null,B=null}}}function gx(Q){let A,I;return A=new Ng.Mesh({props:{receiveShadow:!0,$$slots:{default:[Ix]},$$scope:{ctx:Q}}}),{c(){hI(A.$$.fragment)},m(g,C){DI(A,g,C),I=!0},p(g,C){const B={};C&16&&(B.$$scope={dirty:C,ctx:g}),A.$set(B)},i(g){I||(MA(A.$$.fragment,g),I=!0)},o(g){JA(A.$$.fragment,g),I=!1},d(g){rI(A,g)}}}function Cx(Q){let A,I;return A=new at({props:{shape:"cuboid",$$slots:{default:[gx]},$$scope:{ctx:Q}}}),{c(){hI(A.$$.fragment)},m(g,C){DI(A,g,C),I=!0},p(g,C){const B={};C&16&&(B.$$scope={dirty:C,ctx:g}),A.$set(B)},i(g){I||(MA(A.$$.fragment,g),I=!0)},o(g){JA(A.$$.fragment,g),I=!1},d(g){rI(A,g)}}}function Bx(Q){let A,I;return A=new Ng.Group({props:{position:[0,-4,0],$$slots:{default:[Cx]},$$scope:{ctx:Q}}}),{c(){hI(A.$$.fragment)},m(g,C){DI(A,g,C),I=!0},p(g,[C]){const B={};C&16&&(B.$$scope={dirty:C,ctx:g}),A.$set(B)},i(g){I||(MA(A.$$.fragment,g),I=!0)},o(g){JA(A.$$.fragment,g),I=!1},d(g){rI(A,g)}}}function Qx(Q){return Lb({RoundedBoxGeometry:X2}),[[By("wood/Wood09_1K_BaseColor.png"),By("wood/Wood09_1K_Normal.png")]]}class ix extends jg{constructor(A){super(),_g(this,A,Qx,Bx,pg,{})}}function sy(Q){let A,I;return A=new Ng.Group({props:{position:[-2,10,2],rotation:[.3,0,.3],scale:[1,1,1],$$slots:{default:[ex]},$$scope:{ctx:Q}}}),{c(){hI(A.$$.fragment)},m(g,C){DI(A,g,C),I=!0},p(g,C){const B={};C&19&&(B.$$scope={dirty:C,ctx:g}),A.$set(B)},i(g){I||(MA(A.$$.fragment,g),I=!0)},o(g){JA(A.$$.fragment,g),I=!1},d(g){rI(A,g)}}}function Ex(Q){let A,I,g,C,B;A=new Ng.Mesh({props:{castShadow:!0,geometry:Q[1].nodes.Scene.children[0].geometry,material:Q[1].nodes.Scene.children[0].material}});function i(e){Q[3](e)}let E={args:[16753920,2,6.3,1.8],position:[0,.2,0],rotation:[Math.PI/2,0,0]};return Q[0]!==void 0&&(E.ref=Q[0]),g=new Ng.RectAreaLight({props:E}),PB.push(()=>Td(g,"ref",i)),{c(){hI(A.$$.fragment),I=$g(),hI(g.$$.fragment)},m(e,t){DI(A,e,t),vI(e,I,t),DI(g,e,t),B=!0},p(e,t){const s={};t&2&&(s.geometry=e[1].nodes.Scene.children[0].geometry),t&2&&(s.material=e[1].nodes.Scene.children[0].material),A.$set(s);const n={};!C&&t&1&&(C=!0,n.ref=e[0],Ld(()=>C=!1)),g.$set(n)},i(e){B||(MA(A.$$.fragment,e),MA(g.$$.fragment,e),B=!0)},o(e){JA(A.$$.fragment,e),JA(g.$$.fragment,e),B=!1},d(e){rI(A,e),e&&xI(I),rI(g,e)}}}function ox(Q){let A,I;return A=new at({props:{$$slots:{default:[Ex]},$$scope:{ctx:Q}}}),{c(){hI(A.$$.fragment)},m(g,C){DI(A,g,C),I=!0},p(g,C){const B={};C&19&&(B.$$scope={dirty:C,ctx:g}),A.$set(B)},i(g){I||(MA(A.$$.fragment,g),I=!0)},o(g){JA(A.$$.fragment,g),I=!1},d(g){rI(A,g)}}}function ex(Q){let A,I;return A=new gn({props:{$$slots:{default:[ox]},$$scope:{ctx:Q}}}),{c(){hI(A.$$.fragment)},m(g,C){DI(A,g,C),I=!0},p(g,C){const B={};C&19&&(B.$$scope={dirty:C,ctx:g}),A.$set(B)},i(g){I||(MA(A.$$.fragment,g),I=!0)},o(g){JA(A.$$.fragment,g),I=!1},d(g){rI(A,g)}}}function tx(Q){let A,I,g=Q[1]&&sy(Q);return{c(){g&&g.c(),A=IQ()},m(C,B){g&&g.m(C,B),vI(C,A,B),I=!0},p(C,[B]){C[1]?g?(g.p(C,B),B&2&&MA(g,1)):(g=sy(C),g.c(),MA(g,1),g.m(A.parentNode,A)):g&&(pC(),JA(g,1,1,()=>{g=null}),fC())},i(C){I||(MA(g),I=!0)},o(C){JA(g),I=!1},d(C){g&&g.d(C),C&&xI(A)}}}function ax(Q,A,I){let g;const C=Cn("keyboard.glb");dg(Q,C,E=>I(1,g=E));let B;function i(E){B=E,I(0,B)}return[B,g,C,i]}class sx extends jg{constructor(A){super(),_g(this,A,ax,tx,pg,{})}}function ny(Q){let A,I;return A=new Ng.Group({props:{position:[0,0,-3.5],rotation:[0,0,0],scale:[1,1,1],$$slots:{default:[hx]},$$scope:{ctx:Q}}}),{c(){hI(A.$$.fragment)},m(g,C){DI(A,g,C),I=!0},p(g,C){const B={};C&19&&(B.$$scope={dirty:C,ctx:g}),A.$set(B)},i(g){I||(MA(A.$$.fragment,g),I=!0)},o(g){JA(A.$$.fragment,g),I=!1},d(g){rI(A,g)}}}function Dy(Q){let A,I;return A=new L2({props:{transform:!0,position:[0,2.6,-1.7],$$slots:{default:[nx]},$$scope:{ctx:Q}}}),{c(){hI(A.$$.fragment)},m(g,C){DI(A,g,C),I=!0},p(g,C){const B={};C&17&&(B.$$scope={dirty:C,ctx:g}),A.$set(B)},i(g){I||(MA(A.$$.fragment,g),I=!0)},o(g){JA(A.$$.fragment,g),I=!1},d(g){rI(A,g)}}}function ry(Q){let A,I;return{c(){A=NQ("iframe"),lC(A,"class","transform scale-25 origin-top-left"),lC(A,"height","630"),lC(A,"width","1060"),Fd(A.src,I="http://acm.cs.nthu.edu.tw/")||lC(A,"src",I)},m(g,C){vI(g,A,C)},d(g){g&&xI(A)}}}function nx(Q){let A,I=Q[0]>3&&ry();return{c(){A=NQ("div"),I&&I.c(),lC(A,"class","w-66 h-38.9 overflow-hidden bg-blue-600")},m(g,C){vI(g,A,C),I&&I.m(A,null)},p(g,C){g[0]>3?I||(I=ry(),I.c(),I.m(A,null)):I&&(I.d(1),I=null)},d(g){g&&xI(A),I&&I.d()}}}function Dx(Q){let A,I,g,C,B,i,E,e=Q[0]>2&&Dy(Q);return I=new Ng.Mesh({props:{castShadow:!0,geometry:Q[1].nodes.Scene.children[0].geometry,material:Q[1].nodes.Scene.children[0].material}}),C=new Ng.Mesh({props:{castShadow:!0,geometry:Q[1].nodes.Scene.children[1].geometry,material:Q[1].nodes.Scene.children[1].material}}),i=new Ng.RectAreaLight({props:{args:[16777215,3,6.4,3],position:[0,0,0],rotation:[Math.PI/2,0,0]}}),{c(){e&&e.c(),A=$g(),hI(I.$$.fragment),g=$g(),hI(C.$$.fragment),B=$g(),hI(i.$$.fragment)},m(t,s){e&&e.m(t,s),vI(t,A,s),DI(I,t,s),vI(t,g,s),DI(C,t,s),vI(t,B,s),DI(i,t,s),E=!0},p(t,s){t[0]>2?e?(e.p(t,s),s&1&&MA(e,1)):(e=Dy(t),e.c(),MA(e,1),e.m(A.parentNode,A)):e&&(pC(),JA(e,1,1,()=>{e=null}),fC());const n={};s&2&&(n.geometry=t[1].nodes.Scene.children[0].geometry),s&2&&(n.material=t[1].nodes.Scene.children[0].material),I.$set(n);const D={};s&2&&(D.geometry=t[1].nodes.Scene.children[1].geometry),s&2&&(D.material=t[1].nodes.Scene.children[1].material),C.$set(D)},i(t){E||(MA(e),MA(I.$$.fragment,t),MA(C.$$.fragment,t),MA(i.$$.fragment,t),E=!0)},o(t){JA(e),JA(I.$$.fragment,t),JA(C.$$.fragment,t),JA(i.$$.fragment,t),E=!1},d(t){e&&e.d(t),t&&xI(A),rI(I,t),t&&xI(g),rI(C,t),t&&xI(B),rI(i,t)}}}function rx(Q){let A,I;return A=new at({props:{$$slots:{default:[Dx]},$$scope:{ctx:Q}}}),{c(){hI(A.$$.fragment)},m(g,C){DI(A,g,C),I=!0},p(g,C){const B={};C&19&&(B.$$scope={dirty:C,ctx:g}),A.$set(B)},i(g){I||(MA(A.$$.fragment,g),I=!0)},o(g){JA(A.$$.fragment,g),I=!1},d(g){rI(A,g)}}}function hx(Q){let A,I;return A=new gn({props:{$$slots:{default:[rx]},$$scope:{ctx:Q}}}),{c(){hI(A.$$.fragment)},m(g,C){DI(A,g,C),I=!0},p(g,C){const B={};C&19&&(B.$$scope={dirty:C,ctx:g}),A.$set(B)},i(g){I||(MA(A.$$.fragment,g),I=!0)},o(g){JA(A.$$.fragment,g),I=!1},d(g){rI(A,g)}}}function cx(Q){let A,I,g=Q[1]&&ny(Q);return{c(){g&&g.c(),A=IQ()},m(C,B){g&&g.m(C,B),vI(C,A,B),I=!0},p(C,[B]){C[1]?g?(g.p(C,B),B&2&&MA(g,1)):(g=ny(C),g.c(),MA(g,1),g.m(A.parentNode,A)):g&&(pC(),JA(g,1,1,()=>{g=null}),fC())},i(C){I||(MA(g),I=!0)},o(C){JA(g),I=!1},d(C){g&&g.d(C),C&&xI(A)}}}function lx(Q,A,I){let g;const C=Cn("laptop.glb");dg(Q,C,i=>I(1,g=i));let B=0;return setInterval(()=>I(0,B++,B),1e3),[B,g,C]}class wx extends jg{constructor(A){super(),_g(this,A,lx,cx,pg,{})}}function hy(Q){let A,I;return A=new Ng.Group({props:{position:[4,10,2],rotation:[.3,0,.3],scale:[1,1,1],$$slots:{default:[yx]},$$scope:{ctx:Q}}}),{c(){hI(A.$$.fragment)},m(g,C){DI(A,g,C),I=!0},p(g,C){const B={};C&5&&(B.$$scope={dirty:C,ctx:g}),A.$set(B)},i(g){I||(MA(A.$$.fragment,g),I=!0)},o(g){JA(A.$$.fragment,g),I=!1},d(g){rI(A,g)}}}function Gx(Q){let A,I,g,C,B,i;return A=new Ng.Mesh({props:{castShadow:!0,geometry:Q[0].nodes.Scene.children[0].children[0].geometry,material:Q[0].nodes.Scene.children[0].children[0].material}}),g=new Ng.Mesh({props:{castShadow:!0,geometry:Q[0].nodes.Scene.children[0].children[1].geometry,material:Q[0].nodes.Scene.children[0].children[1].material}}),B=new Ng.Mesh({props:{castShadow:!0,geometry:Q[0].nodes.Scene.children[0].children[2].geometry,material:Q[0].nodes.Scene.children[0].children[2].material}}),{c(){hI(A.$$.fragment),I=$g(),hI(g.$$.fragment),C=$g(),hI(B.$$.fragment)},m(E,e){DI(A,E,e),vI(E,I,e),DI(g,E,e),vI(E,C,e),DI(B,E,e),i=!0},p(E,e){const t={};e&1&&(t.geometry=E[0].nodes.Scene.children[0].children[0].geometry),e&1&&(t.material=E[0].nodes.Scene.children[0].children[0].material),A.$set(t);const s={};e&1&&(s.geometry=E[0].nodes.Scene.children[0].children[1].geometry),e&1&&(s.material=E[0].nodes.Scene.children[0].children[1].material),g.$set(s);const n={};e&1&&(n.geometry=E[0].nodes.Scene.children[0].children[2].geometry),e&1&&(n.material=E[0].nodes.Scene.children[0].children[2].material),B.$set(n)},i(E){i||(MA(A.$$.fragment,E),MA(g.$$.fragment,E),MA(B.$$.fragment,E),i=!0)},o(E){JA(A.$$.fragment,E),JA(g.$$.fragment,E),JA(B.$$.fragment,E),i=!1},d(E){rI(A,E),E&&xI(I),rI(g,E),E&&xI(C),rI(B,E)}}}function Sx(Q){let A,I;return A=new at({props:{$$slots:{default:[Gx]},$$scope:{ctx:Q}}}),{c(){hI(A.$$.fragment)},m(g,C){DI(A,g,C),I=!0},p(g,C){const B={};C&5&&(B.$$scope={dirty:C,ctx:g}),A.$set(B)},i(g){I||(MA(A.$$.fragment,g),I=!0)},o(g){JA(A.$$.fragment,g),I=!1},d(g){rI(A,g)}}}function yx(Q){let A,I;return A=new gn({props:{$$slots:{default:[Sx]},$$scope:{ctx:Q}}}),{c(){hI(A.$$.fragment)},m(g,C){DI(A,g,C),I=!0},p(g,C){const B={};C&5&&(B.$$scope={dirty:C,ctx:g}),A.$set(B)},i(g){I||(MA(A.$$.fragment,g),I=!0)},o(g){JA(A.$$.fragment,g),I=!1},d(g){rI(A,g)}}}function kx(Q){let A,I,g=Q[0]&&hy(Q);return{c(){g&&g.c(),A=IQ()},m(C,B){g&&g.m(C,B),vI(C,A,B),I=!0},p(C,[B]){C[0]?g?(g.p(C,B),B&1&&MA(g,1)):(g=hy(C),g.c(),MA(g,1),g.m(A.parentNode,A)):g&&(pC(),JA(g,1,1,()=>{g=null}),fC())},i(C){I||(MA(g),I=!0)},o(C){JA(g),I=!1},d(C){g&&g.d(C),C&&xI(A)}}}function Mx(Q,A,I){let g;const C=Cn("mouse.glb");return dg(Q,C,B=>I(0,g=B)),[g,C]}class Ux extends jg{constructor(A){super(),_g(this,A,Mx,kx,pg,{})}}function cy(Q){let A,I;return A=new Ng.Group({props:{position:[0,-2.5,-.7],rotation:[0,0,0],scale:1.5,$$slots:{default:[Fx]},$$scope:{ctx:Q}}}),{c(){hI(A.$$.fragment)},m(g,C){DI(A,g,C),I=!0},p(g,C){const B={};C&5&&(B.$$scope={dirty:C,ctx:g}),A.$set(B)},i(g){I||(MA(A.$$.fragment,g),I=!0)},o(g){JA(A.$$.fragment,g),I=!1},d(g){rI(A,g)}}}function Nx(Q){let A,I;return A=new Ng.Mesh({props:{castShadow:!0,geometry:Q[0].nodes.Scene.children[0].geometry,material:Q[0].nodes.Scene.children[0].material}}),{c(){hI(A.$$.fragment)},m(g,C){DI(A,g,C),I=!0},p(g,C){const B={};C&1&&(B.geometry=g[0].nodes.Scene.children[0].geometry),C&1&&(B.material=g[0].nodes.Scene.children[0].material),A.$set(B)},i(g){I||(MA(A.$$.fragment,g),I=!0)},o(g){JA(A.$$.fragment,g),I=!1},d(g){rI(A,g)}}}function Kx(Q){let A,I;return A=new at({props:{$$slots:{default:[Nx]},$$scope:{ctx:Q}}}),{c(){hI(A.$$.fragment)},m(g,C){DI(A,g,C),I=!0},p(g,C){const B={};C&5&&(B.$$scope={dirty:C,ctx:g}),A.$set(B)},i(g){I||(MA(A.$$.fragment,g),I=!0)},o(g){JA(A.$$.fragment,g),I=!1},d(g){rI(A,g)}}}function Fx(Q){let A,I;return A=new gn({props:{$$slots:{default:[Kx]},$$scope:{ctx:Q}}}),{c(){hI(A.$$.fragment)},m(g,C){DI(A,g,C),I=!0},p(g,C){const B={};C&5&&(B.$$scope={dirty:C,ctx:g}),A.$set(B)},i(g){I||(MA(A.$$.fragment,g),I=!0)},o(g){JA(A.$$.fragment,g),I=!1},d(g){rI(A,g)}}}function Rx(Q){let A,I,g=Q[0]&&cy(Q);return{c(){g&&g.c(),A=IQ()},m(C,B){g&&g.m(C,B),vI(C,A,B),I=!0},p(C,[B]){C[0]?g?(g.p(C,B),B&1&&MA(g,1)):(g=cy(C),g.c(),MA(g,1),g.m(A.parentNode,A)):g&&(pC(),JA(g,1,1,()=>{g=null}),fC())},i(C){I||(MA(g),I=!0)},o(C){JA(g),I=!1},d(C){g&&g.d(C),C&&xI(A)}}}function Jx(Q,A,I){let g;const C=Cn("stand.glb");return dg(Q,C,B=>I(0,g=B)),[g,C]}class dx extends jg{constructor(A){super(),_g(this,A,Jx,Rx,pg,{})}}function px(Q){let A,I;return A=new O2({}),{c(){hI(A.$$.fragment)},m(g,C){DI(A,g,C),I=!0},i(g){I||(MA(A.$$.fragment,g),I=!0)},o(g){JA(A.$$.fragment,g),I=!1},d(g){rI(A,g)}}}function fx(Q){let A,I,g,C,B,i,E,e,t,s,n,D,r,l,G,w;return A=new Ng.HemisphereLight({props:{args:["#4A4E69","#080820",2]}}),g=new Ng.PointLight({props:{args:["#F2E9E4",3,15],position:[8,4,-2],castShadow:!0}}),B=new Ng.PerspectiveCamera({props:{makeDefault:!0,position:[0,2,14],$$slots:{default:[px]},$$scope:{ctx:Q}}}),E=new sx({}),t=new wx({}),n=new Ux({}),r=new dx({}),G=new ix({}),{c(){hI(A.$$.fragment),I=$g(),hI(g.$$.fragment),C=$g(),hI(B.$$.fragment),i=$g(),hI(E.$$.fragment),e=$g(),hI(t.$$.fragment),s=$g(),hI(n.$$.fragment),D=$g(),hI(r.$$.fragment),l=$g(),hI(G.$$.fragment)},m(c,k){DI(A,c,k),vI(c,I,k),DI(g,c,k),vI(c,C,k),DI(B,c,k),vI(c,i,k),DI(E,c,k),vI(c,e,k),DI(t,c,k),vI(c,s,k),DI(n,c,k),vI(c,D,k),DI(r,c,k),vI(c,l,k),DI(G,c,k),w=!0},p(c,[k]){const y={};k&2&&(y.$$scope={dirty:k,ctx:c}),B.$set(y)},i(c){w||(MA(A.$$.fragment,c),MA(g.$$.fragment,c),MA(B.$$.fragment,c),MA(E.$$.fragment,c),MA(t.$$.fragment,c),MA(n.$$.fragment,c),MA(r.$$.fragment,c),MA(G.$$.fragment,c),w=!0)},o(c){JA(A.$$.fragment,c),JA(g.$$.fragment,c),JA(B.$$.fragment,c),JA(E.$$.fragment,c),JA(t.$$.fragment,c),JA(n.$$.fragment,c),JA(r.$$.fragment,c),JA(G.$$.fragment,c),w=!1},d(c){rI(A,c),c&&xI(I),rI(g,c),c&&xI(C),rI(B,c),c&&xI(i),rI(E,c),c&&xI(e),rI(t,c),c&&xI(s),rI(n,c),c&&xI(D),rI(r,c),c&&xI(l),rI(G,c)}}}function qx(Q){const{scene:A}=ni();return A.background=new Lc("#22223B"),[]}class ux extends jg{constructor(A){super(),_g(this,A,qx,fx,pg,{})}}function Lx(Q){let A,I;return A=new ux({}),{c(){hI(A.$$.fragment)},m(g,C){DI(A,g,C),I=!0},i(g){I||(MA(A.$$.fragment,g),I=!0)},o(g){JA(A.$$.fragment,g),I=!1},d(g){rI(A,g)}}}function Yx(Q){let A,I;return A=new oT({props:{$$slots:{default:[Lx]},$$scope:{ctx:Q}}}),{c(){hI(A.$$.fragment)},m(g,C){DI(A,g,C),I=!0},p(g,C){const B={};C&1&&(B.$$scope={dirty:C,ctx:g}),A.$set(B)},i(g){I||(MA(A.$$.fragment,g),I=!0)},o(g){JA(A.$$.fragment,g),I=!1},d(g){rI(A,g)}}}function Hx(Q){let A,I,g;return I=new ub({props:{$$slots:{default:[Yx]},$$scope:{ctx:Q}}}),{c(){A=NQ("main"),hI(I.$$.fragment),lC(A,"class","w-full h-100vh")},m(C,B){vI(C,A,B),DI(I,A,null),g=!0},p(C,[B]){const i={};B&1&&(i.$$scope={dirty:B,ctx:C}),I.$set(i)},i(C){g||(MA(I.$$.fragment,C),g=!0)},o(C){JA(I.$$.fragment,C),g=!1},d(C){C&&xI(A),rI(I)}}}class mx extends jg{constructor(A){super(),_g(this,A,null,Hx,pg,{})}}new mx({target:document.getElementById("app")});