(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const _ of document.querySelectorAll('link[rel="modulepreload"]'))r(_);new MutationObserver(_=>{for(const s of _)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(_){const s={};return _.integrity&&(s.integrity=_.integrity),_.referrerPolicy&&(s.referrerPolicy=_.referrerPolicy),_.crossOrigin==="use-credentials"?s.credentials="include":_.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(_){if(_.ep)return;_.ep=!0;const s=n(_);fetch(_.href,s)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const z=globalThis,Tt=z.ShadowRoot&&(z.ShadyCSS===void 0||z.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,dt=Symbol(),At=new WeakMap;let Xt=class{constructor(t,n,r){if(this._$cssResult$=!0,r!==dt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(Tt&&t===void 0){const r=n!==void 0&&n.length===1;r&&(t=At.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&At.set(n,t))}return t}toString(){return this.cssText}};const g0=e=>new Xt(typeof e=="string"?e:e+"",void 0,dt),W=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((r,_,s)=>r+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(_)+e[s+1],e[0]);return new Xt(n,e,dt)},m0=(e,t)=>{if(Tt)e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of t){const r=document.createElement("style"),_=z.litNonce;_!==void 0&&r.setAttribute("nonce",_),r.textContent=n.cssText,e.appendChild(r)}},Nt=Tt?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const r of t.cssRules)n+=r.cssText;return g0(n)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:a0,defineProperty:c0,getOwnPropertyDescriptor:P0,getOwnPropertyNames:h0,getOwnPropertySymbols:l0,getPrototypeOf:T0}=Object,d=globalThis,wt=d.trustedTypes,d0=wt?wt.emptyScript:"",Q=d.reactiveElementPolyfillSupport,O=(e,t)=>e,X={toAttribute(e,t){switch(t){case Boolean:e=e?d0:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},ut=(e,t)=>!a0(e,t),xt={attribute:!0,type:String,converter:X,reflect:!1,hasChanged:ut};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),d.litPropertyMetadata??(d.litPropertyMetadata=new WeakMap);class A extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=xt){if(n.state&&(n.attribute=!1),this._$Ei(),this.elementProperties.set(t,n),!n.noAccessor){const r=Symbol(),_=this.getPropertyDescriptor(t,r,n);_!==void 0&&c0(this.prototype,t,_)}}static getPropertyDescriptor(t,n,r){const{get:_,set:s}=P0(this.prototype,t)??{get(){return this[n]},set(i){this[n]=i}};return{get(){return _==null?void 0:_.call(this)},set(i){const o=_==null?void 0:_.call(this);s.call(this,i),this.requestUpdate(t,o,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??xt}static _$Ei(){if(this.hasOwnProperty(O("elementProperties")))return;const t=T0(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(O("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(O("properties"))){const n=this.properties,r=[...h0(n),...l0(n)];for(const _ of r)this.createProperty(_,n[_])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[r,_]of n)this.elementProperties.set(r,_)}this._$Eh=new Map;for(const[n,r]of this.elementProperties){const _=this._$Eu(n,r);_!==void 0&&this._$Eh.set(_,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const _ of r)n.unshift(Nt(_))}else t!==void 0&&n.push(Nt(t));return n}static _$Eu(t,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(n=>n(this))}addController(t){var n;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)==null||n.call(t))}removeController(t){var n;(n=this._$EO)==null||n.delete(t)}_$E_(){const t=new Map,n=this.constructor.elementProperties;for(const r of n.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return m0(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(n=>{var r;return(r=n.hostConnected)==null?void 0:r.call(n)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(n=>{var r;return(r=n.hostDisconnected)==null?void 0:r.call(n)})}attributeChangedCallback(t,n,r){this._$AK(t,r)}_$EC(t,n){var s;const r=this.constructor.elementProperties.get(t),_=this.constructor._$Eu(t,r);if(_!==void 0&&r.reflect===!0){const i=(((s=r.converter)==null?void 0:s.toAttribute)!==void 0?r.converter:X).toAttribute(n,r.type);this._$Em=t,i==null?this.removeAttribute(_):this.setAttribute(_,i),this._$Em=null}}_$AK(t,n){var s;const r=this.constructor,_=r._$Eh.get(t);if(_!==void 0&&this._$Em!==_){const i=r.getPropertyOptions(_),o=typeof i.converter=="function"?{fromAttribute:i.converter}:((s=i.converter)==null?void 0:s.fromAttribute)!==void 0?i.converter:X;this._$Em=_,this[_]=o.fromAttribute(n,i.type),this._$Em=null}}requestUpdate(t,n,r){if(t!==void 0){if(r??(r=this.constructor.getPropertyOptions(t)),!(r.hasChanged??ut)(this[t],n))return;this.P(t,n,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,n,r){this._$AL.has(t)||this._$AL.set(t,n),r.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,i]of this._$Ep)this[s]=i;this._$Ep=void 0}const _=this.constructor.elementProperties;if(_.size>0)for(const[s,i]of _)i.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.P(s,this[s],i)}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(r=this._$EO)==null||r.forEach(_=>{var s;return(s=_.hostUpdate)==null?void 0:s.call(_)}),this.update(n)):this._$EU()}catch(_){throw t=!1,this._$EU(),_}t&&this._$AE(n)}willUpdate(t){}_$AE(t){var n;(n=this._$EO)==null||n.forEach(r=>{var _;return(_=r.hostUpdated)==null?void 0:_.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(n=>this._$EC(n,this[n]))),this._$EU()}updated(t){}firstUpdated(t){}}A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[O("elementProperties")]=new Map,A[O("finalized")]=new Map,Q==null||Q({ReactiveElement:A}),(d.reactiveElementVersions??(d.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const C=globalThis,B=C.trustedTypes,St=B?B.createPolicy("lit-html",{createHTML:e=>e}):void 0,Bt="$lit$",T=`lit$${Math.random().toFixed(9).slice(2)}$`,Vt="?"+T,u0=`<${Vt}>`,b=document,U=()=>b.createComment(""),M=e=>e===null||typeof e!="object"&&typeof e!="function",ft=Array.isArray,f0=e=>ft(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",tt=`[ 	
\f\r]`,S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Et=/-->/g,Ot=/>/g,f=RegExp(`>|${tt}(?:([^\\s"'>=/]+)(${tt}*=${tt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ct=/'/g,Ut=/"/g,qt=/^(?:script|style|textarea|title)$/i,$0=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),h=$0(1),N=Symbol.for("lit-noChange"),a=Symbol.for("lit-nothing"),Mt=new WeakMap,y=b.createTreeWalker(b,129);function Wt(e,t){if(!ft(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return St!==void 0?St.createHTML(t):t}const y0=(e,t)=>{const n=e.length-1,r=[];let _,s=t===2?"<svg>":t===3?"<math>":"",i=S;for(let o=0;o<n;o++){const p=e[o];let m,c,g=-1,P=0;for(;P<p.length&&(i.lastIndex=P,c=i.exec(p),c!==null);)P=i.lastIndex,i===S?c[1]==="!--"?i=Et:c[1]!==void 0?i=Ot:c[2]!==void 0?(qt.test(c[2])&&(_=RegExp("</"+c[2],"g")),i=f):c[3]!==void 0&&(i=f):i===f?c[0]===">"?(i=_??S,g=-1):c[1]===void 0?g=-2:(g=i.lastIndex-c[2].length,m=c[1],i=c[3]===void 0?f:c[3]==='"'?Ut:Ct):i===Ut||i===Ct?i=f:i===Et||i===Ot?i=S:(i=f,_=void 0);const l=i===f&&e[o+1].startsWith("/>")?" ":"";s+=i===S?p+u0:g>=0?(r.push(m),p.slice(0,g)+Bt+p.slice(g)+T+l):p+T+(g===-2?o:l)}return[Wt(e,s+(e[n]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class I{constructor({strings:t,_$litType$:n},r){let _;this.parts=[];let s=0,i=0;const o=t.length-1,p=this.parts,[m,c]=y0(t,n);if(this.el=I.createElement(m,r),y.currentNode=this.el.content,n===2||n===3){const g=this.el.content.firstChild;g.replaceWith(...g.childNodes)}for(;(_=y.nextNode())!==null&&p.length<o;){if(_.nodeType===1){if(_.hasAttributes())for(const g of _.getAttributeNames())if(g.endsWith(Bt)){const P=c[i++],l=_.getAttribute(g).split(T),k=/([.?@])?(.*)/.exec(P);p.push({type:1,index:s,name:k[2],strings:l,ctor:k[1]==="."?F0:k[1]==="?"?v0:k[1]==="@"?A0:G}),_.removeAttribute(g)}else g.startsWith(T)&&(p.push({type:6,index:s}),_.removeAttribute(g));if(qt.test(_.tagName)){const g=_.textContent.split(T),P=g.length-1;if(P>0){_.textContent=B?B.emptyScript:"";for(let l=0;l<P;l++)_.append(g[l],U()),y.nextNode(),p.push({type:2,index:++s});_.append(g[P],U())}}}else if(_.nodeType===8)if(_.data===Vt)p.push({type:2,index:s});else{let g=-1;for(;(g=_.data.indexOf(T,g+1))!==-1;)p.push({type:7,index:s}),g+=T.length-1}s++}}static createElement(t,n){const r=b.createElement("template");return r.innerHTML=t,r}}function w(e,t,n=e,r){var i,o;if(t===N)return t;let _=r!==void 0?(i=n._$Co)==null?void 0:i[r]:n._$Cl;const s=M(t)?void 0:t._$litDirective$;return(_==null?void 0:_.constructor)!==s&&((o=_==null?void 0:_._$AO)==null||o.call(_,!1),s===void 0?_=void 0:(_=new s(e),_._$AT(e,n,r)),r!==void 0?(n._$Co??(n._$Co=[]))[r]=_:n._$Cl=_),_!==void 0&&(t=w(e,_._$AS(e,t.values),_,r)),t}class b0{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:r}=this._$AD,_=((t==null?void 0:t.creationScope)??b).importNode(n,!0);y.currentNode=_;let s=y.nextNode(),i=0,o=0,p=r[0];for(;p!==void 0;){if(i===p.index){let m;p.type===2?m=new H(s,s.nextSibling,this,t):p.type===1?m=new p.ctor(s,p.name,p.strings,this,t):p.type===6&&(m=new N0(s,this,t)),this._$AV.push(m),p=r[++o]}i!==(p==null?void 0:p.index)&&(s=y.nextNode(),i++)}return y.currentNode=b,_}p(t){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,n),n+=r.strings.length-2):r._$AI(t[n])),n++}}class H{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,n,r,_){this.type=2,this._$AH=a,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=r,this.options=_,this._$Cv=(_==null?void 0:_.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=w(this,t,n),M(t)?t===a||t==null||t===""?(this._$AH!==a&&this._$AR(),this._$AH=a):t!==this._$AH&&t!==N&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):f0(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==a&&M(this._$AH)?this._$AA.nextSibling.data=t:this.T(b.createTextNode(t)),this._$AH=t}$(t){var s;const{values:n,_$litType$:r}=t,_=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=I.createElement(Wt(r.h,r.h[0]),this.options)),r);if(((s=this._$AH)==null?void 0:s._$AD)===_)this._$AH.p(n);else{const i=new b0(_,this),o=i.u(this.options);i.p(n),this.T(o),this._$AH=i}}_$AC(t){let n=Mt.get(t.strings);return n===void 0&&Mt.set(t.strings,n=new I(t)),n}k(t){ft(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,_=0;for(const s of t)_===n.length?n.push(r=new H(this.O(U()),this.O(U()),this,this.options)):r=n[_],r._$AI(s),_++;_<n.length&&(this._$AR(r&&r._$AB.nextSibling,_),n.length=_)}_$AR(t=this._$AA.nextSibling,n){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,n);t&&t!==this._$AB;){const _=t.nextSibling;t.remove(),t=_}}setConnected(t){var n;this._$AM===void 0&&(this._$Cv=t,(n=this._$AP)==null||n.call(this,t))}}class G{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,r,_,s){this.type=1,this._$AH=a,this._$AN=void 0,this.element=t,this.name=n,this._$AM=_,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=a}_$AI(t,n=this,r,_){const s=this.strings;let i=!1;if(s===void 0)t=w(this,t,n,0),i=!M(t)||t!==this._$AH&&t!==N,i&&(this._$AH=t);else{const o=t;let p,m;for(t=s[0],p=0;p<s.length-1;p++)m=w(this,o[r+p],n,p),m===N&&(m=this._$AH[p]),i||(i=!M(m)||m!==this._$AH[p]),m===a?t=a:t!==a&&(t+=(m??"")+s[p+1]),this._$AH[p]=m}i&&!_&&this.j(t)}j(t){t===a?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class F0 extends G{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===a?void 0:t}}class v0 extends G{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==a)}}class A0 extends G{constructor(t,n,r,_,s){super(t,n,r,_,s),this.type=5}_$AI(t,n=this){if((t=w(this,t,n,0)??a)===N)return;const r=this._$AH,_=t===a&&r!==a||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,s=t!==a&&(r===a||_);_&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var n;typeof this._$AH=="function"?this._$AH.call(((n=this.options)==null?void 0:n.host)??this.element,t):this._$AH.handleEvent(t)}}class N0{constructor(t,n,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){w(this,t)}}const et=C.litHtmlPolyfillSupport;et==null||et(I,H),(C.litHtmlVersions??(C.litHtmlVersions=[])).push("3.2.1");const w0=(e,t,n)=>{const r=(n==null?void 0:n.renderBefore)??t;let _=r._$litPart$;if(_===void 0){const s=(n==null?void 0:n.renderBefore)??null;r._$litPart$=_=new H(t.insertBefore(U(),s),s,void 0,n??{})}return _._$AI(e),_};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let u=class extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var n;const t=super.createRenderRoot();return(n=this.renderOptions).renderBefore??(n.renderBefore=t.firstChild),t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=w0(n,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return N}};var zt;u._$litElement$=!0,u.finalized=!0,(zt=globalThis.litElementHydrateSupport)==null||zt.call(globalThis,{LitElement:u});const nt=globalThis.litElementPolyfillSupport;nt==null||nt({LitElement:u});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const K=e=>(t,n)=>{n!==void 0?n.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const x0={attribute:!0,type:String,converter:X,reflect:!1,hasChanged:ut},S0=(e=x0,t,n)=>{const{kind:r,metadata:_}=n;let s=globalThis.litPropertyMetadata.get(_);if(s===void 0&&globalThis.litPropertyMetadata.set(_,s=new Map),s.set(n.name,e),r==="accessor"){const{name:i}=n;return{set(o){const p=t.get.call(this);t.set.call(this,o),this.requestUpdate(i,p,e)},init(o){return o!==void 0&&this.P(i,void 0,e),o}}}if(r==="setter"){const{name:i}=n;return function(o){const p=this[i];t.call(this,o),this.requestUpdate(i,p,e)}}throw Error("Unsupported decorator location: "+r)};function J(e){return(t,n)=>typeof n=="object"?S0(e,t,n):((r,_,s)=>{const i=_.hasOwnProperty(s);return _.constructor.createProperty(s,i?{...r,wrapped:!0}:r),i?Object.getOwnPropertyDescriptor(_,s):void 0})(e,t,n)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Gt(e){return J({...e,state:!0,attribute:!1})}var E0=Object.defineProperty,O0=Object.getOwnPropertyDescriptor,Kt=(e,t,n,r)=>{for(var _=r>1?void 0:r?O0(t,n):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(_=(r?i(t,n,_):i(_))||_);return r&&_&&E0(t,n,_),_};let V=class extends u{constructor(){super(...arguments),this.items=["https://via.placeholder.com/150","https://via.placeholder.com/150","https://via.placeholder.com/150","https://via.placeholder.com/150","https://via.placeholder.com/150","https://via.placeholder.com/150","https://via.placeholder.com/150","https://via.placeholder.com/150","https://via.placeholder.com/150"],this._currentIndex=0,this._startX=0,this._currentX=0,this._isDragging=!1}render(){return h`
      <div class="container">
      <maptcha-header></maptcha-header>
      <div class="swipe-area">
        ${this.items.length>this._currentIndex?h`
              <div
                class="card"
                @pointerdown=${this._onPointerDown}
                @pointermove=${this._onPointerMove}
                @pointerup=${this._onPointerUp}
                style=${this._getTransformStyle()}
              >
                <img src=${this.items[this._currentIndex]} />
              </div>

            `:h`<p>No more items!</p>`}
        </div>
        <p>Swipe right if the red outline covers the building</p>
        <div class='buttons'>
          <button @click=${this._clickAgree} class="disagree">Disagree</button>
          <button @click=${this._clickDisagree} class="agree">Agree</button>
        </div>
      </div>
    `}_onPointerDown(e){var n;this._startX=e.clientX,this._currentX=this._startX,this._isDragging=!0;const t=(n=this.shadowRoot)==null?void 0:n.querySelector(".card");t==null||t.classList.add("dragging"),e.preventDefault()}_onPointerMove(e){this._isDragging&&(this._currentX=e.clientX,this.requestUpdate())}_onPointerUp(e){var _;if(!this._isDragging)return;this._isDragging=!1;const t=this._currentX-this._startX,n=this.offsetWidth/4,r=(_=this.shadowRoot)==null?void 0:_.querySelector(".card");r&&r.classList.remove("dragging"),t>n?this._swipe("right"):t<-n?this._swipe("left"):this._resetPosition()}_clickAgree(){this._currentIndex++,this.requestUpdate()}_clickDisagree(){this._currentIndex++,this.requestUpdate()}_swipe(e){var n;const t=(n=this.shadowRoot)==null?void 0:n.querySelector(".card");t&&(t.style.transform=`translateX(${e==="right"?"100%":"-100%"})`),setTimeout(()=>{this._currentIndex++,this.requestUpdate()},300)}_resetPosition(){this._currentX=0,this.requestUpdate()}_getTransformStyle(){if(!this._isDragging)return"";const e=this._currentX-this._startX,t=e/20;return`transform: translateX(${e}px) rotate(${t}deg);`}};V.styles=W`
    :host {
      display: block;
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
      background-color:white;
      min-height:560px;
      min-width:320px;
      box-sizing:border-box;
      padding:20px;
      font-family: Arial, sans-serif;
      color:darkgrey;
    }
    .container{
      display:flex;
      flex-direction:column;
      width:100%;
      height:500px;
      
    }
    .swipe-area{
      flex:1;
      height: 438px;
    }
    .card {
      position: absolute;
      width: 90%;
      max-width: 400px;
      height:300px;
      background-color: #fff;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-size: 24px;
      cursor: grab;
      user-select: none;
      color:grey;
      transition: transform 0.3s ease-in-out;
    }
    .card.dragging {
      transition: none;
    }
    .card img{
      width: 300px
    } 
    button{
      padding:10px 20px;
      box-sizing:border-box;
      color:white;
      border-radius: 10px;
      border:0px;
      font-weight:bold;
      width:40%;
      cursor:pointer;
    }
    .agree{
      background-color:green
    }
    .disagree{
      background-color:red
    }
    .buttons{
      display:flex;
      flex-direction:row;
      justify-content:space-between;
    }
  `;Kt([J({type:Array})],V.prototype,"items",2);V=Kt([K("maptcha-swipe")],V);var C0=Object.defineProperty,U0=Object.getOwnPropertyDescriptor,$t=(e,t,n,r)=>{for(var _=r>1?void 0:r?U0(t,n):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(_=(r?i(t,n,_):i(_))||_);return r&&_&&C0(t,n,_),_};let j=class extends u{constructor(){super(...arguments),this.images=["https://via.placeholder.com/150","https://via.placeholder.com/150","https://via.placeholder.com/150","https://via.placeholder.com/150","https://via.placeholder.com/150","https://via.placeholder.com/150","https://via.placeholder.com/150","https://via.placeholder.com/150","https://via.placeholder.com/150"],this.selectedIndexes=[]}toggleSelection(e){this.selectedIndexes.includes(e)?this.selectedIndexes=this.selectedIndexes.filter(t=>t!==e):this.selectedIndexes=[...this.selectedIndexes,e]}submitCaptcha(){const e=new CustomEvent("captcha-submit",{detail:{selectedIndexes:this.selectedIndexes},bubbles:!0,composed:!0});this.selectedIndexes=[],this.dispatchEvent(e)}render(){return h`
      <div class="container">
        <maptcha-header></maptcha-header>
        <div class="grid">
          ${this.images.map((e,t)=>h`
              <img
                src="${e}"
                class="${this.selectedIndexes.includes(t)?"selected":""}"
                @click="${()=>this.toggleSelection(t)}"
                alt="Captcha option"
              />
            `)}
        </div>
        <p>Click all of the images where the red outline covers the buildings</p>
        <button class="submit-btn" @click="${this.submitCaptcha}">Submit</button>
      </div>
    `}};j.styles=W`
    :host {
      display: block;
      max-width: 400px;
      margin: 0 auto;
      font-family: Arial, sans-serif;
      color:darkgrey;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 5px;
    }
    .grid img {
      width: 100%;
      height: auto;
      border: 2px solid transparent;
      cursor: pointer;
      border-radius: 4px;
      box-sizing:border-box;
    }
    .grid img.selected {
      border: 3px solid #491053;
    }
    .submit-btn {
      display: block;
      width: 100%;
      margin-top: 10px;
      padding: 10px;
      font-size: 1rem;
      background-color: #007BFF;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    .submit-btn:hover {
      background-color: #0056b3;
    }
    .container{
      background-color:white;
      padding:20px;
      border-radius:4px;
      display:flex;
      flex-direction:column;
    }
  `;$t([J({type:Array})],j.prototype,"images",2);$t([J({type:Array})],j.prototype,"selectedIndexes",2);j=$t([K("maptcha-grid")],j);var L=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function M0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var It=1/0,Jt=9007199254740991,I0=17976931348623157e292,jt=NaN,j0=4294967295,R0="[object Arguments]",H0="[object Function]",D0="[object GeneratorFunction]",it="[object Map]",k0="[object Object]",Rt="[object Promise]",pt="[object Set]",L0="[object String]",z0="[object Symbol]",Ht="[object WeakMap]",Dt="[object DataView]",X0=/[\\^$.*+?()[\]{}|]/g,B0=/^\s+|\s+$/g,V0=/^[-+]0x[0-9a-f]+$/i,q0=/^0b[01]+$/i,W0=/^\[object .+?Constructor\]$/,G0=/^0o[0-7]+$/i,K0=/^(?:0|[1-9]\d*)$/,yt="\\ud800-\\udfff",Zt="\\u0300-\\u036f\\ufe20-\\ufe23",Yt="\\u20d0-\\u20f0",Qt="\\ufe0e\\ufe0f",J0="["+yt+"]",ot="["+Zt+Yt+"]",gt="\\ud83c[\\udffb-\\udfff]",Z0="(?:"+ot+"|"+gt+")",t0="[^"+yt+"]",e0="(?:\\ud83c[\\udde6-\\uddff]){2}",n0="[\\ud800-\\udbff][\\udc00-\\udfff]",_0="\\u200d",r0=Z0+"?",s0="["+Qt+"]?",Y0="(?:"+_0+"(?:"+[t0,e0,n0].join("|")+")"+s0+r0+")*",Q0=s0+r0+Y0,te="(?:"+[t0+ot+"?",ot,e0,n0,J0].join("|")+")",ee=RegExp(gt+"(?="+gt+")|"+te+Q0,"g"),ne=RegExp("["+_0+yt+Zt+Yt+Qt+"]"),_e=parseInt,re=typeof L=="object"&&L&&L.Object===Object&&L,se=typeof self=="object"&&self&&self.Object===Object&&self,F=re||se||Function("return this")();function ie(e,t){for(var n=-1,r=e?e.length:0,_=Array(r);++n<r;)_[n]=t(e[n],n,e);return _}function pe(e){return e.split("")}function oe(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}function ge(e,t){return ie(t,function(n){return e[n]})}function me(e,t){return e==null?void 0:e[t]}function ae(e){return ne.test(e)}function ce(e){var t=!1;if(e!=null&&typeof e.toString!="function")try{t=!!(e+"")}catch{}return t}function Pe(e){for(var t,n=[];!(t=e.next()).done;)n.push(t.value);return n}function he(e){var t=-1,n=Array(e.size);return e.forEach(function(r,_){n[++t]=[_,r]}),n}function le(e,t){return function(n){return e(t(n))}}function Te(e){var t=-1,n=Array(e.size);return e.forEach(function(r){n[++t]=r}),n}function de(e){return ae(e)?ue(e):pe(e)}function ue(e){return e.match(ee)||[]}var fe=Function.prototype,Z=Object.prototype,_t=F["__core-js_shared__"],kt=function(){var e=/[^.]+$/.exec(_t&&_t.keys&&_t.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),i0=fe.toString,Y=Z.hasOwnProperty,x=Z.toString,$e=RegExp("^"+i0.call(Y).replace(X0,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Lt=F.Symbol,rt=Lt?Lt.iterator:void 0,ye=Z.propertyIsEnumerable,be=Math.floor,Fe=le(Object.keys,Object),ve=Math.random,mt=D(F,"DataView"),at=D(F,"Map"),ct=D(F,"Promise"),Pt=D(F,"Set"),ht=D(F,"WeakMap"),Ae=v(mt),Ne=v(at),we=v(ct),xe=v(Pt),Se=v(ht);function Ee(e,t){var n=p0(e)||ze(e)?oe(e.length,String):[],r=n.length,_=!!r;for(var s in e)Y.call(e,s)&&!(_&&(s=="length"||Re(s,r)))&&n.push(s);return n}function Oe(e,t,n){return e===e&&(n!==void 0&&(e=e<=n?e:n),e=e>=t?e:t),e}function Ce(e){return x.call(e)}function Ue(e){if(!q(e)||He(e))return!1;var t=o0(e)||ce(e)?$e:W0;return t.test(v(e))}function Me(e){if(!De(e))return Fe(e);var t=[];for(var n in Object(e))Y.call(e,n)&&n!="constructor"&&t.push(n);return t}function Ie(e,t){return e+be(ve()*(t-e+1))}function je(e,t){var n=-1,r=e.length;for(t||(t=Array(r));++n<r;)t[n]=e[n];return t}function D(e,t){var n=me(e,t);return Ue(n)?n:void 0}var $=Ce;(mt&&$(new mt(new ArrayBuffer(1)))!=Dt||at&&$(new at)!=it||ct&&$(ct.resolve())!=Rt||Pt&&$(new Pt)!=pt||ht&&$(new ht)!=Ht)&&($=function(e){var t=x.call(e),n=t==k0?e.constructor:void 0,r=n?v(n):void 0;if(r)switch(r){case Ae:return Dt;case Ne:return it;case we:return Rt;case xe:return pt;case Se:return Ht}return t});function Re(e,t){return t=t??Jt,!!t&&(typeof e=="number"||K0.test(e))&&e>-1&&e%1==0&&e<t}function He(e){return!!kt&&kt in e}function De(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||Z;return e===n}function v(e){if(e!=null){try{return i0.call(e)}catch{}try{return e+""}catch{}}return""}function ke(e,t,n){var r=-1,_=We(e),s=_.length,i=s-1;for(t===void 0?t=1:t=Oe(Ke(t),0,s);++r<t;){var o=Ie(r,i),p=_[o];_[o]=_[r],_[r]=p}return _.length=t,_}function Le(e){return ke(e,j0)}function ze(e){return Xe(e)&&Y.call(e,"callee")&&(!ye.call(e,"callee")||x.call(e)==R0)}var p0=Array.isArray;function bt(e){return e!=null&&Be(e.length)&&!o0(e)}function Xe(e){return Ft(e)&&bt(e)}function o0(e){var t=q(e)?x.call(e):"";return t==H0||t==D0}function Be(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Jt}function q(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function Ft(e){return!!e&&typeof e=="object"}function Ve(e){return typeof e=="string"||!p0(e)&&Ft(e)&&x.call(e)==L0}function qe(e){return typeof e=="symbol"||Ft(e)&&x.call(e)==z0}function We(e){if(!e)return[];if(bt(e))return Ve(e)?de(e):je(e);if(rt&&e[rt])return Pe(e[rt]());var t=$(e),n=t==it?he:t==pt?Te:Ye;return n(e)}function Ge(e){if(!e)return e===0?e:0;if(e=Je(e),e===It||e===-It){var t=e<0?-1:1;return t*I0}return e===e?e:0}function Ke(e){var t=Ge(e),n=t%1;return t===t?n?t-n:t:0}function Je(e){if(typeof e=="number")return e;if(qe(e))return jt;if(q(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=q(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(B0,"");var n=q0.test(e);return n||G0.test(e)?_e(e.slice(2),n?2:8):V0.test(e)?jt:+e}function Ze(e){return bt(e)?Ee(e):Me(e)}function Ye(e){return e?ge(e,Ze(e)):[]}var Qe=Le;const E=M0(Qe),tn=["TP_m102_0000.png","TP_m102_0101.png","TP_m114_0017.png","TP_m158_0037.png","TP_m166_0018.png","TP_m51_0027.png","TP_m102_0001.png","TP_m102_0102.png","TP_m114_0021.png","TP_m158_0038.png","TP_m166_0019.png","TP_m51_0028.png","TP_m102_0002.png","TP_m102_0103.png","TP_m114_0022.png","TP_m158_0039.png","TP_m166_0020.png","TP_m51_0029.png","TP_m102_0003.png","TP_m102_0104.png","TP_m114_0023.png","TP_m158_0042.png","TP_m166_0021.png","TP_m51_0030.png","TP_m102_0004.png","TP_m102_0105.png","TP_m114_0024.png","TP_m158_0043.png","TP_m166_0022.png","TP_m51_0031.png","TP_m102_0006.png","TP_m102_0106.png","TP_m114_0025.png","TP_m158_0044.png","TP_m166_0023.png","TP_m51_0032.png","TP_m102_0007.png","TP_m102_0107.png","TP_m114_0026.png","TP_m158_0045.png","TP_m166_0024.png","TP_m51_0033.png","TP_m102_0008.png","TP_m102_0108.png","TP_m114_0027.png","TP_m158_0046.png","TP_m166_0025.png","TP_m51_0034.png","TP_m102_0009.png","TP_m102_0109.png","TP_m114_0028.png","TP_m158_0047.png","TP_m166_0027.png","TP_m51_0035.png","TP_m102_0010.png","TP_m102_0110.png","TP_m114_0029.png","TP_m158_0048.png","TP_m166_0028.png","TP_m51_0036.png","TP_m102_0011.png","TP_m102_0111.png","TP_m114_0030.png","TP_m158_0049.png","TP_m166_0029.png","TP_m51_0037.png","TP_m102_0012.png","TP_m102_0112.png","TP_m114_0031.png","TP_m158_0050.png","TP_m166_0030.png","TP_m51_0038.png","TP_m102_0013.png","TP_m102_0113.png","TP_m114_0032.png","TP_m158_0051.png","TP_m166_0031.png","TP_m51_0039.png","TP_m102_0014.png","TP_m102_0114.png","TP_m114_0033.png","TP_m158_0055.png","TP_m166_0032.png","TP_m51_0040.png","TP_m102_0015.png","TP_m102_0115.png","TP_m136_0000.png","TP_m158_0057.png","TP_m166_0033.png","TP_m51_0041.png","TP_m102_0016.png","TP_m102_0116.png","TP_m136_0002.png","TP_m158_0058.png","TP_m166_0034.png","TP_m51_0042.png","TP_m102_0017.png","TP_m102_0117.png","TP_m136_0003.png","TP_m158_0063.png","TP_m166_0035.png","TP_m51_0043.png","TP_m102_0018.png","TP_m102_0118.png","TP_m136_0004.png","TP_m158_0064.png","TP_m166_0036.png","TP_m51_0044.png","TP_m102_0019.png","TP_m102_0119.png","TP_m136_0005.png","TP_m158_0065.png","TP_m166_0037.png","TP_m51_0045.png","TP_m102_0020.png","TP_m102_0120.png","TP_m136_0006.png","TP_m158_0066.png","TP_m166_0038.png","TP_m51_0046.png","TP_m102_0021.png","TP_m102_0121.png","TP_m136_0007.png","TP_m158_0067.png","TP_m166_0039.png","TP_m51_0047.png","TP_m102_0022.png","TP_m102_0122.png","TP_m136_0008.png","TP_m164_0000.png","TP_m166_0040.png","TP_m51_0048.png","TP_m102_0023.png","TP_m102_0123.png","TP_m136_0009.png","TP_m164_0001.png","TP_m166_0042.png","TP_m51_0049.png","TP_m102_0024.png","TP_m102_0124.png","TP_m136_0010.png","TP_m164_0002.png","TP_m166_0043.png","TP_m51_0050.png","TP_m102_0025.png","TP_m102_0125.png","TP_m136_0011.png","TP_m164_0003.png","TP_m166_0044.png","TP_m51_0051.png","TP_m102_0026.png","TP_m102_0126.png","TP_m149_0001.png","TP_m164_0004.png","TP_m166_0045.png","TP_m51_0053.png","TP_m102_0027.png","TP_m102_0127.png","TP_m149_0002.png","TP_m164_0005.png","TP_m166_0046.png","TP_m51_0054.png","TP_m102_0028.png","TP_m102_0128.png","TP_m149_0003.png","TP_m164_0006.png","TP_m166_0047.png","TP_m51_0055.png","TP_m102_0029.png","TP_m102_0129.png","TP_m149_0004.png","TP_m164_0007.png","TP_m166_0048.png","TP_m51_0056.png","TP_m102_0031.png","TP_m102_0130.png","TP_m149_0005.png","TP_m164_0008.png","TP_m166_0049.png","TP_m51_0057.png","TP_m102_0032.png","TP_m102_0131.png","TP_m149_0006.png","TP_m164_0009.png","TP_m166_0050.png","TP_m51_0058.png","TP_m102_0033.png","TP_m102_0133.png","TP_m149_0007.png","TP_m164_0010.png","TP_m166_0051.png","TP_m51_0060.png","TP_m102_0034.png","TP_m102_0134.png","TP_m149_0008.png","TP_m164_0012.png","TP_m166_0052.png","TP_m51_0061.png","TP_m102_0035.png","TP_m102_0135.png","TP_m149_0009.png","TP_m164_0013.png","TP_m166_0053.png","TP_m51_0062.png","TP_m102_0036.png","TP_m102_0136.png","TP_m149_0010.png","TP_m164_0014.png","TP_m166_0054.png","TP_m51_0063.png","TP_m102_0037.png","TP_m102_0137.png","TP_m149_0011.png","TP_m164_0015.png","TP_m166_0056.png","TP_m51_0065.png","TP_m102_0038.png","TP_m102_0138.png","TP_m149_0012.png","TP_m164_0016.png","TP_m166_0057.png","TP_m51_0067.png","TP_m102_0039.png","TP_m102_0139.png","TP_m149_0013.png","TP_m164_0017.png","TP_m166_0059.png","TP_m51_0068.png","TP_m102_0040.png","TP_m102_0140.png","TP_m149_0014.png","TP_m164_0018.png","TP_m166_0060.png","TP_m51_0069.png","TP_m102_0041.png","TP_m102_0141.png","TP_m149_0016.png","TP_m164_0019.png","TP_m166_0061.png","TP_m51_0070.png","TP_m102_0042.png","TP_m102_0142.png","TP_m149_0018.png","TP_m164_0020.png","TP_m166_0062.png","TP_m51_0072.png","TP_m102_0043.png","TP_m102_0143.png","TP_m149_0021.png","TP_m164_0021.png","TP_m166_0063.png","TP_m51_0073.png","TP_m102_0044.png","TP_m102_0144.png","TP_m149_0022.png","TP_m164_0023.png","TP_m166_0064.png","TP_m51_0074.png","TP_m102_0045.png","TP_m102_0145.png","TP_m149_0023.png","TP_m164_0025.png","TP_m166_0065.png","TP_m51_0075.png","TP_m102_0046.png","TP_m102_0146.png","TP_m149_0024.png","TP_m164_0026.png","TP_m166_0066.png","TP_m51_0076.png","TP_m102_0047.png","TP_m102_0147.png","TP_m149_0025.png","TP_m164_0028.png","TP_m166_0067.png","TP_m51_0077.png","TP_m102_0048.png","TP_m102_0148.png","TP_m149_0026.png","TP_m164_0029.png","TP_m166_0069.png","TP_m51_0078.png","TP_m102_0049.png","TP_m102_0149.png","TP_m149_0027.png","TP_m164_0030.png","TP_m166_0071.png","TP_m51_0079.png","TP_m102_0050.png","TP_m102_0150.png","TP_m149_0028.png","TP_m164_0031.png","TP_m166_0074.png","TP_m51_0080.png","TP_m102_0052.png","TP_m102_0151.png","TP_m149_0029.png","TP_m164_0032.png","TP_m166_0078.png","TP_m51_0081.png","TP_m102_0053.png","TP_m102_0152.png","TP_m149_0030.png","TP_m164_0033.png","TP_m166_0080.png","TP_m51_0082.png","TP_m102_0054.png","TP_m102_0153.png","TP_m149_0031.png","TP_m164_0034.png","TP_m166_0081.png","TP_m51_0083.png","TP_m102_0055.png","TP_m102_0154.png","TP_m149_0032.png","TP_m164_0035.png","TP_m166_0083.png","TP_m51_0084.png","TP_m102_0056.png","TP_m102_0156.png","TP_m149_0033.png","TP_m164_0036.png","TP_m166_0086.png","TP_m51_0085.png","TP_m102_0057.png","TP_m102_0157.png","TP_m149_0034.png","TP_m164_0037.png","TP_m166_0087.png","TP_m51_0086.png","TP_m102_0058.png","TP_m102_0158.png","TP_m149_0035.png","TP_m164_0040.png","TP_m166_0088.png","TP_m51_0087.png","TP_m102_0059.png","TP_m102_0159.png","TP_m149_0036.png","TP_m164_0042.png","TP_m166_0089.png","TP_m51_0088.png","TP_m102_0060.png","TP_m102_0162.png","TP_m149_0037.png","TP_m164_0043.png","TP_m166_0090.png","TP_m51_0089.png","TP_m102_0061.png","TP_m113_0000.png","TP_m149_0038.png","TP_m164_0044.png","TP_m166_0091.png","TP_m51_0090.png","TP_m102_0062.png","TP_m113_0001.png","TP_m149_0040.png","TP_m164_0045.png","TP_m166_0092.png","TP_m51_0091.png","TP_m102_0063.png","TP_m113_0002.png","TP_m149_0042.png","TP_m164_0046.png","TP_m166_0093.png","TP_m51_0092.png","TP_m102_0064.png","TP_m113_0003.png","TP_m149_0043.png","TP_m164_0047.png","TP_m166_0094.png","TP_m51_0093.png","TP_m102_0065.png","TP_m113_0004.png","TP_m149_0044.png","TP_m164_0048.png","TP_m166_0095.png","TP_m51_0094.png","TP_m102_0066.png","TP_m113_0005.png","TP_m158_0000.png","TP_m164_0049.png","TP_m166_0096.png","TP_m51_0095.png","TP_m102_0067.png","TP_m113_0006.png","TP_m158_0002.png","TP_m164_0050.png","TP_m166_0097.png","TP_m51_0096.png","TP_m102_0069.png","TP_m113_0007.png","TP_m158_0005.png","TP_m164_0051.png","TP_m166_0098.png","TP_m51_0097.png","TP_m102_0070.png","TP_m113_0008.png","TP_m158_0006.png","TP_m164_0052.png","TP_m166_0099.png","TP_m51_0098.png","TP_m102_0071.png","TP_m113_0009.png","TP_m158_0007.png","TP_m164_0053.png","TP_m51_0000.png","TP_m51_0099.png","TP_m102_0072.png","TP_m113_0010.png","TP_m158_0008.png","TP_m164_0054.png","TP_m51_0001.png","TP_m51_0100.png","TP_m102_0073.png","TP_m113_0012.png","TP_m158_0010.png","TP_m164_0055.png","TP_m51_0002.png","TP_m51_0101.png","TP_m102_0074.png","TP_m113_0014.png","TP_m158_0011.png","TP_m164_0056.png","TP_m51_0003.png","TP_m51_0102.png","TP_m102_0075.png","TP_m113_0015.png","TP_m158_0012.png","TP_m164_0057.png","TP_m51_0004.png","TP_m51_0103.png","TP_m102_0076.png","TP_m113_0016.png","TP_m158_0013.png","TP_m164_0058.png","TP_m51_0005.png","TP_m51_0104.png","TP_m102_0077.png","TP_m113_0017.png","TP_m158_0014.png","TP_m164_0059.png","TP_m51_0006.png","TP_m51_0105.png","TP_m102_0078.png","TP_m113_0018.png","TP_m158_0016.png","TP_m164_0060.png","TP_m51_0007.png","TP_m51_0106.png","TP_m102_0079.png","TP_m113_0019.png","TP_m158_0017.png","TP_m164_0061.png","TP_m51_0008.png","TP_m51_0107.png","TP_m102_0080.png","TP_m114_0000.png","TP_m158_0019.png","TP_m164_0062.png","TP_m51_0009.png","TP_m51_0108.png","TP_m102_0081.png","TP_m114_0001.png","TP_m158_0020.png","TP_m164_0063.png","TP_m51_0011.png","TP_m51_0109.png","TP_m102_0082.png","TP_m114_0002.png","TP_m158_0021.png","TP_m164_0064.png","TP_m51_0012.png","TP_m51_0110.png","TP_m102_0083.png","TP_m114_0003.png","TP_m158_0022.png","TP_m164_0065.png","TP_m51_0013.png","TP_m51_0111.png","TP_m102_0084.png","TP_m114_0005.png","TP_m158_0023.png","TP_m164_0067.png","TP_m51_0014.png","TP_m51_0112.png","TP_m102_0085.png","TP_m114_0006.png","TP_m158_0024.png","TP_m166_0001.png","TP_m51_0015.png","TP_m51_0113.png","TP_m102_0086.png","TP_m114_0007.png","TP_m158_0025.png","TP_m166_0003.png","TP_m51_0016.png","TP_m51_0114.png","TP_m102_0087.png","TP_m114_0008.png","TP_m158_0026.png","TP_m166_0004.png","TP_m51_0017.png","TP_m51_0115.png","TP_m102_0088.png","TP_m114_0009.png","TP_m158_0027.png","TP_m166_0005.png","TP_m51_0018.png","TP_m51_0116.png","TP_m102_0089.png","TP_m114_0010.png","TP_m158_0028.png","TP_m166_0006.png","TP_m51_0019.png","TP_m51_0117.png","TP_m102_0090.png","TP_m114_0011.png","TP_m158_0029.png","TP_m166_0007.png","TP_m51_0020.png","TP_m51_0118.png","TP_m102_0091.png","TP_m114_0012.png","TP_m158_0031.png","TP_m166_0008.png","TP_m51_0021.png","TP_m51_0120.png","TP_m102_0097.png","TP_m114_0013.png","TP_m158_0032.png","TP_m166_0009.png","TP_m51_0022.png","TP_m102_0098.png","TP_m114_0014.png","TP_m158_0033.png","TP_m166_0010.png","TP_m51_0024.png","TP_m102_0099.png","TP_m114_0015.png","TP_m158_0035.png","TP_m166_0016.png","TP_m51_0025.png","TP_m102_0100.png","TP_m114_0016.png","TP_m158_0036.png","TP_m166_0017.png","TP_m51_0026.png"],en=["FN_m102_0163.png","FN_m102_0179.png","FN_m114_0044.png","FN_m149_0057.png","FN_m164_0076.png","FN_m166_0105.png","FN_m102_0164.png","FN_m102_0180.png","FN_m114_0045.png","FN_m158_0068.png","FN_m164_0077.png","FN_m166_0106.png","FN_m102_0165.png","FN_m102_0181.png","FN_m136_0012.png","FN_m158_0069.png","FN_m164_0078.png","FN_m51_0121.png","FN_m102_0166.png","FN_m113_0020.png","FN_m136_0013.png","FN_m158_0070.png","FN_m164_0079.png","FN_m51_0122.png","FN_m102_0167.png","FN_m113_0021.png","FN_m149_0045.png","FN_m158_0071.png","FN_m164_0080.png","FN_m51_0123.png","FN_m102_0168.png","FN_m113_0022.png","FN_m149_0046.png","FN_m158_0072.png","FN_m164_0081.png","FN_m51_0124.png","FN_m102_0169.png","FN_m114_0034.png","FN_m149_0047.png","FN_m158_0073.png","FN_m164_0082.png","FN_m51_0125.png","FN_m102_0170.png","FN_m114_0035.png","FN_m149_0048.png","FN_m158_0074.png","FN_m164_0083.png","FN_m51_0126.png","FN_m102_0171.png","FN_m114_0036.png","FN_m149_0049.png","FN_m164_0068.png","FN_m164_0084.png","FN_m51_0127.png","FN_m102_0172.png","FN_m114_0037.png","FN_m149_0050.png","FN_m164_0069.png","FN_m164_0085.png","FN_m51_0128.png","FN_m102_0173.png","FN_m114_0038.png","FN_m149_0051.png","FN_m164_0070.png","FN_m164_0086.png","FN_m51_0129.png","FN_m102_0174.png","FN_m114_0039.png","FN_m149_0052.png","FN_m164_0071.png","FN_m166_0100.png","FN_m102_0175.png","FN_m114_0040.png","FN_m149_0053.png","FN_m164_0072.png","FN_m166_0101.png","FN_m102_0176.png","FN_m114_0041.png","FN_m149_0054.png","FN_m164_0073.png","FN_m166_0102.png","FN_m102_0177.png","FN_m114_0042.png","FN_m149_0055.png","FN_m164_0074.png","FN_m166_0103.png","FN_m102_0178.png","FN_m114_0043.png","FN_m149_0056.png","FN_m164_0075.png","FN_m166_0104.png"],nn=["TN_m102_0182.png","TN_m136_0014.png","TN_m158_0075.png","TN_m166_0107.png","TN_m166_0110.png","TN_m51_0132.png","TN_m113_0023.png","TN_m136_0015.png","TN_m158_0076.png","TN_m166_0108.png","TN_m51_0130.png","TN_m114_0046.png","TN_m149_0058.png","TN_m164_0087.png","TN_m166_0109.png","TN_m51_0131.png"],_n=["FP_m102_0005.png","FP_m113_0013.png","FP_m158_0003.png","FP_m158_0060.png","FP_m166_0012.png","FP_m166_0077.png","FP_m102_0030.png","FP_m114_0004.png","FP_m158_0004.png","FP_m158_0061.png","FP_m166_0013.png","FP_m166_0079.png","FP_m102_0051.png","FP_m114_0018.png","FP_m158_0009.png","FP_m158_0062.png","FP_m166_0014.png","FP_m166_0082.png","FP_m102_0068.png","FP_m114_0019.png","FP_m158_0015.png","FP_m164_0011.png","FP_m166_0015.png","FP_m166_0084.png","FP_m102_0092.png","FP_m114_0020.png","FP_m158_0018.png","FP_m164_0022.png","FP_m166_0026.png","FP_m166_0085.png","FP_m102_0093.png","FP_m136_0001.png","FP_m158_0030.png","FP_m164_0024.png","FP_m166_0041.png","FP_m51_0010.png","FP_m102_0094.png","FP_m149_0000.png","FP_m158_0034.png","FP_m164_0027.png","FP_m166_0055.png","FP_m51_0023.png","FP_m102_0095.png","FP_m149_0015.png","FP_m158_0040.png","FP_m164_0038.png","FP_m166_0058.png","FP_m51_0052.png","FP_m102_0096.png","FP_m149_0017.png","FP_m158_0041.png","FP_m164_0039.png","FP_m166_0068.png","FP_m51_0059.png","FP_m102_0132.png","FP_m149_0019.png","FP_m158_0052.png","FP_m164_0041.png","FP_m166_0070.png","FP_m51_0064.png","FP_m102_0155.png","FP_m149_0020.png","FP_m158_0053.png","FP_m164_0066.png","FP_m166_0072.png","FP_m51_0066.png","FP_m102_0160.png","FP_m149_0039.png","FP_m158_0054.png","FP_m166_0000.png","FP_m166_0073.png","FP_m51_0071.png","FP_m102_0161.png","FP_m149_0041.png","FP_m158_0056.png","FP_m166_0002.png","FP_m166_0075.png","FP_m51_0119.png","FP_m113_0011.png","FP_m158_0001.png","FP_m158_0059.png","FP_m166_0011.png","FP_m166_0076.png"];function st(e,t){let n=[];return e==="TP"&&(n=E(tn)),e==="FP"&&(n=E(_n)),e==="TN"&&(n=E(nn)),e==="FN"&&(n=E(en)),n.slice(0,t).map(r=>`https://allofthedata.s3.us-west-2.amazonaws.com/maptcha/data/${e}/${r}`)}var rn=Object.defineProperty,sn=Object.getOwnPropertyDescriptor,vt=(e,t,n,r)=>{for(var _=r>1?void 0:r?sn(t,n):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(_=(r?i(t,n,_):i(_))||_);return r&&_&&rn(t,n,_),_};let R=class extends u{constructor(){super(...arguments),this.images=[],this.selectedTab="grid"}_randomImages(){let e=st("TP",3),t=st("FP",3),n=st("TN",3);return E([...e,...t,...n])}connectedCallback(){super.connectedCallback(),console.log("connected"),this.images=this._randomImages(),console.log(images)}selectGrid(){this.selectedTab="grid"}selectSwipe(){this.selectedTab="swipe"}_submitted(){this.images=this._randomImages()}render(){return h`
     <div class="testing">
      <div class='tabs'>
         <button class=${this.selectedTab==="grid"?"selected":""} @click="${this.selectGrid}">Grid</button>
         <button class=${this.selectedTab==="swipe"?"selected":""} @click="${this.selectSwipe}">Swipe</button>
      </div>

      <div class='content'>
        ${this.selectedTab==="grid"?h`
            <maptcha-grid .images="${this.images}" @captcha-submit=${this._submitted}>
            </maptcha-grid>
          `:h`
            <maptcha-swipe .items="${this.images}">
            </maptcha-swipe>
          `}

      </div>
     </div> 
    `}};R.styles=W`
    .testing{
      display:flex;
      flex-direction:column;
    }

    .tabs{
      display:flex;
      flex-direction:row;
      
    }
    .tabs button{
      flex:1;
      background-color: white;
      color: black;
      border: 1px solid darkgray;
      padding: 10px;
      cursor:pointer;
    }
    .tabs button.selected{
      background-color: #1a5310;
      color:white;

    }
  `;vt([Gt()],R.prototype,"images",2);vt([Gt()],R.prototype,"selectedTab",2);R=vt([K("maptcha-testing")],R);const pn="/maptcha_dev/assets/maptcha_logo-CUo1xCWg.webp";var on=Object.defineProperty,gn=Object.getOwnPropertyDescriptor,mn=(e,t,n,r)=>{for(var _=r>1?void 0:r?gn(t,n):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(_=(r?i(t,n,_):i(_))||_);return r&&_&&on(t,n,_),_};let lt=class extends u{render(){return h`
        <header class="header">
          <img src=${pn} />
          <h2>Maptcha</h2>
        </header>
    `}};lt.styles=W`
    .header{
      display: flex;
      flex-direction:row;
      justify-content: space-between;
      algin-items:center;
      padding:10px 0px;
      color:darkgrey;
    }
    .header img{
      width: 5rem;
    }
  `;lt=mn([K("maptcha-header")],lt);
