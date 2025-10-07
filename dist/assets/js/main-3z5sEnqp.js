/* empty css              */import{i as Ni}from"./_events-yOhS0nq3.js";import{i as Bi}from"./_scroll-DY9uY1hI.js";import{i as Hi}from"./_catalog-CYLiia3I.js";import{i as Ui}from"./_clickOutside-B1yAIRCC.js";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nt=globalThis,be=Nt.ShadowRoot&&(Nt.ShadyCSS===void 0||Nt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,we=Symbol(),Me=new WeakMap;let ri=class{constructor(e,i,s){if(this._$cssResult$=!0,s!==we)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=i}get styleSheet(){let e=this.o;const i=this.t;if(be&&e===void 0){const s=i!==void 0&&i.length===1;s&&(e=Me.get(i)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&Me.set(i,e))}return e}toString(){return this.cssText}};const Ii=t=>new ri(typeof t=="string"?t:t+"",void 0,we),Z=(t,...e)=>{const i=t.length===1?t[0]:e.reduce(((s,o,n)=>s+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[n+1]),t[0]);return new ri(i,t,we)},Vi=(t,e)=>{if(be)t.adoptedStyleSheets=e.map((i=>i instanceof CSSStyleSheet?i:i.styleSheet));else for(const i of e){const s=document.createElement("style"),o=Nt.litNonce;o!==void 0&&s.setAttribute("nonce",o),s.textContent=i.cssText,t.appendChild(s)}},ze=be?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let i="";for(const s of e.cssRules)i+=s.cssText;return Ii(i)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Wi,defineProperty:Fi,getOwnPropertyDescriptor:ji,getOwnPropertyNames:qi,getOwnPropertySymbols:Ki,getPrototypeOf:Xi}=Object,Gt=globalThis,De=Gt.trustedTypes,Yi=De?De.emptyScript:"",Gi=Gt.reactiveElementPolyfillSupport,At=(t,e)=>t,Ut={toAttribute(t,e){switch(e){case Boolean:t=t?Yi:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=t!==null;break;case Number:i=t===null?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch{i=null}}return i}},xe=(t,e)=>!Wi(t,e),Ne={attribute:!0,type:String,converter:Ut,reflect:!1,useDefault:!1,hasChanged:xe};Symbol.metadata??=Symbol("metadata"),Gt.litPropertyMetadata??=new WeakMap;let ft=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,i=Ne){if(i.state&&(i.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((i=Object.create(i)).wrapped=!0),this.elementProperties.set(e,i),!i.noAccessor){const s=Symbol(),o=this.getPropertyDescriptor(e,s,i);o!==void 0&&Fi(this.prototype,e,o)}}static getPropertyDescriptor(e,i,s){const{get:o,set:n}=ji(this.prototype,e)??{get(){return this[i]},set(r){this[i]=r}};return{get:o,set(r){const a=o?.call(this);n?.call(this,r),this.requestUpdate(e,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ne}static _$Ei(){if(this.hasOwnProperty(At("elementProperties")))return;const e=Xi(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(At("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(At("properties"))){const i=this.properties,s=[...qi(i),...Ki(i)];for(const o of s)this.createProperty(o,i[o])}const e=this[Symbol.metadata];if(e!==null){const i=litPropertyMetadata.get(e);if(i!==void 0)for(const[s,o]of i)this.elementProperties.set(s,o)}this._$Eh=new Map;for(const[i,s]of this.elementProperties){const o=this._$Eu(i,s);o!==void 0&&this._$Eh.set(o,i)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const i=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const o of s)i.unshift(ze(o))}else e!==void 0&&i.push(ze(e));return i}static _$Eu(e,i){const s=i.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,i=this.constructor.elementProperties;for(const s of i.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Vi(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,i,s){this._$AK(e,s)}_$ET(e,i){const s=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,s);if(o!==void 0&&s.reflect===!0){const n=(s.converter?.toAttribute!==void 0?s.converter:Ut).toAttribute(i,s.type);this._$Em=e,n==null?this.removeAttribute(o):this.setAttribute(o,n),this._$Em=null}}_$AK(e,i){const s=this.constructor,o=s._$Eh.get(e);if(o!==void 0&&this._$Em!==o){const n=s.getPropertyOptions(o),r=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:Ut;this._$Em=o;const a=r.fromAttribute(i,n.type);this[o]=a??this._$Ej?.get(o)??a,this._$Em=null}}requestUpdate(e,i,s){if(e!==void 0){const o=this.constructor,n=this[e];if(s??=o.getPropertyOptions(e),!((s.hasChanged??xe)(n,i)||s.useDefault&&s.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(o._$Eu(e,s))))return;this.C(e,i,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,i,{useDefault:s,reflect:o,wrapped:n},r){s&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,r??i??this[e]),n!==!0||r!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(i=void 0),this._$AL.set(e,i)),o===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(i){Promise.reject(i)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[o,n]of s){const{wrapped:r}=n,a=this[o];r!==!0||this._$AL.has(o)||a===void 0||this.C(o,void 0,n,a)}}let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),this._$EO?.forEach((s=>s.hostUpdate?.())),this.update(i)):this._$EM()}catch(s){throw e=!1,this._$EM(),s}e&&this._$AE(i)}willUpdate(e){}_$AE(e){this._$EO?.forEach((i=>i.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach((i=>this._$ET(i,this[i]))),this._$EM()}updated(e){}firstUpdated(e){}};ft.elementStyles=[],ft.shadowRootOptions={mode:"open"},ft[At("elementProperties")]=new Map,ft[At("finalized")]=new Map,Gi?.({ReactiveElement:ft}),(Gt.reactiveElementVersions??=[]).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _e=globalThis,It=_e.trustedTypes,Be=It?It.createPolicy("lit-html",{createHTML:t=>t}):void 0,ai="$lit$",it=`lit$${Math.random().toFixed(9).slice(2)}$`,li="?"+it,Zi=`<${li}>`,dt=document,Et=()=>dt.createComment(""),kt=t=>t===null||typeof t!="object"&&typeof t!="function",$e=Array.isArray,Ji=t=>$e(t)||typeof t?.[Symbol.iterator]=="function",re=`[ 	
\f\r]`,_t=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,He=/-->/g,Ue=/>/g,lt=RegExp(`>|${re}(?:([^\\s"'>=/]+)(${re}*=${re}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ie=/'/g,Ve=/"/g,ci=/^(?:script|style|textarea|title)$/i,Qi=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),B=Qi(1),ut=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),We=new WeakMap,ht=dt.createTreeWalker(dt,129);function hi(t,e){if(!$e(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Be!==void 0?Be.createHTML(e):e}const ts=(t,e)=>{const i=t.length-1,s=[];let o,n=e===2?"<svg>":e===3?"<math>":"",r=_t;for(let a=0;a<i;a++){const l=t[a];let c,h,d=-1,f=0;for(;f<l.length&&(r.lastIndex=f,h=r.exec(l),h!==null);)f=r.lastIndex,r===_t?h[1]==="!--"?r=He:h[1]!==void 0?r=Ue:h[2]!==void 0?(ci.test(h[2])&&(o=RegExp("</"+h[2],"g")),r=lt):h[3]!==void 0&&(r=lt):r===lt?h[0]===">"?(r=o??_t,d=-1):h[1]===void 0?d=-2:(d=r.lastIndex-h[2].length,c=h[1],r=h[3]===void 0?lt:h[3]==='"'?Ve:Ie):r===Ve||r===Ie?r=lt:r===He||r===Ue?r=_t:(r=lt,o=void 0);const u=r===lt&&t[a+1].startsWith("/>")?" ":"";n+=r===_t?l+Zi:d>=0?(s.push(c),l.slice(0,d)+ai+l.slice(d)+it+u):l+it+(d===-2?a:u)}return[hi(t,n+(t[i]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]};class Pt{constructor({strings:e,_$litType$:i},s){let o;this.parts=[];let n=0,r=0;const a=e.length-1,l=this.parts,[c,h]=ts(e,i);if(this.el=Pt.createElement(c,s),ht.currentNode=this.el.content,i===2||i===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(o=ht.nextNode())!==null&&l.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(const d of o.getAttributeNames())if(d.endsWith(ai)){const f=h[r++],u=o.getAttribute(d).split(it),m=/([.?@])?(.*)/.exec(f);l.push({type:1,index:n,name:m[2],strings:u,ctor:m[1]==="."?is:m[1]==="?"?ss:m[1]==="@"?os:Zt}),o.removeAttribute(d)}else d.startsWith(it)&&(l.push({type:6,index:n}),o.removeAttribute(d));if(ci.test(o.tagName)){const d=o.textContent.split(it),f=d.length-1;if(f>0){o.textContent=It?It.emptyScript:"";for(let u=0;u<f;u++)o.append(d[u],Et()),ht.nextNode(),l.push({type:2,index:++n});o.append(d[f],Et())}}}else if(o.nodeType===8)if(o.data===li)l.push({type:2,index:n});else{let d=-1;for(;(d=o.data.indexOf(it,d+1))!==-1;)l.push({type:7,index:n}),d+=it.length-1}n++}}static createElement(e,i){const s=dt.createElement("template");return s.innerHTML=e,s}}function vt(t,e,i=t,s){if(e===ut)return e;let o=s!==void 0?i._$Co?.[s]:i._$Cl;const n=kt(e)?void 0:e._$litDirective$;return o?.constructor!==n&&(o?._$AO?.(!1),n===void 0?o=void 0:(o=new n(t),o._$AT(t,i,s)),s!==void 0?(i._$Co??=[])[s]=o:i._$Cl=o),o!==void 0&&(e=vt(t,o._$AS(t,e.values),o,s)),e}class es{constructor(e,i){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:i},parts:s}=this._$AD,o=(e?.creationScope??dt).importNode(i,!0);ht.currentNode=o;let n=ht.nextNode(),r=0,a=0,l=s[0];for(;l!==void 0;){if(r===l.index){let c;l.type===2?c=new Tt(n,n.nextSibling,this,e):l.type===1?c=new l.ctor(n,l.name,l.strings,this,e):l.type===6&&(c=new ns(n,this,e)),this._$AV.push(c),l=s[++a]}r!==l?.index&&(n=ht.nextNode(),r++)}return ht.currentNode=dt,o}p(e){let i=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,i),i+=s.strings.length-2):s._$AI(e[i])),i++}}class Tt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,i,s,o){this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=e,this._$AB=i,this._$AM=s,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&e?.nodeType===11&&(e=i.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,i=this){e=vt(this,e,i),kt(e)?e===A||e==null||e===""?(this._$AH!==A&&this._$AR(),this._$AH=A):e!==this._$AH&&e!==ut&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ji(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==A&&kt(this._$AH)?this._$AA.nextSibling.data=e:this.T(dt.createTextNode(e)),this._$AH=e}$(e){const{values:i,_$litType$:s}=e,o=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=Pt.createElement(hi(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===o)this._$AH.p(i);else{const n=new es(o,this),r=n.u(this.options);n.p(i),this.T(r),this._$AH=n}}_$AC(e){let i=We.get(e.strings);return i===void 0&&We.set(e.strings,i=new Pt(e)),i}k(e){$e(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,o=0;for(const n of e)o===i.length?i.push(s=new Tt(this.O(Et()),this.O(Et()),this,this.options)):s=i[o],s._$AI(n),o++;o<i.length&&(this._$AR(s&&s._$AB.nextSibling,o),i.length=o)}_$AR(e=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class Zt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,i,s,o,n){this.type=1,this._$AH=A,this._$AN=void 0,this.element=e,this.name=i,this._$AM=o,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A}_$AI(e,i=this,s,o){const n=this.strings;let r=!1;if(n===void 0)e=vt(this,e,i,0),r=!kt(e)||e!==this._$AH&&e!==ut,r&&(this._$AH=e);else{const a=e;let l,c;for(e=n[0],l=0;l<n.length-1;l++)c=vt(this,a[s+l],i,l),c===ut&&(c=this._$AH[l]),r||=!kt(c)||c!==this._$AH[l],c===A?e=A:e!==A&&(e+=(c??"")+n[l+1]),this._$AH[l]=c}r&&!o&&this.j(e)}j(e){e===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class is extends Zt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===A?void 0:e}}class ss extends Zt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==A)}}class os extends Zt{constructor(e,i,s,o,n){super(e,i,s,o,n),this.type=5}_$AI(e,i=this){if((e=vt(this,e,i,0)??A)===ut)return;const s=this._$AH,o=e===A&&s!==A||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,n=e!==A&&(s===A||o);o&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ns{constructor(e,i,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){vt(this,e)}}const rs=_e.litHtmlPolyfillSupport;rs?.(Pt,Tt),(_e.litHtmlVersions??=[]).push("3.3.1");const as=(t,e,i)=>{const s=i?.renderBefore??e;let o=s._$litPart$;if(o===void 0){const n=i?.renderBefore??null;s._$litPart$=o=new Tt(e.insertBefore(Et(),n),n,void 0,i??{})}return o._$AI(t),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ae=globalThis;let Ct=class extends ft{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=as(i,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ut}};Ct._$litElement$=!0,Ct.finalized=!0,Ae.litElementHydrateSupport?.({LitElement:Ct});const ls=Ae.litElementPolyfillSupport;ls?.({LitElement:Ct});(Ae.litElementVersions??=[]).push("4.2.1");var cs=Z`
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    text-align: start;
    white-space: normal;
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`,hs=Z`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`;const pe=new Set,mt=new Map;let ct,Ce="ltr",Se="en";const di=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(di){const t=new MutationObserver(pi);Ce=document.documentElement.dir||"ltr",Se=document.documentElement.lang||navigator.language,t.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function ui(...t){t.map(e=>{const i=e.$code.toLowerCase();mt.has(i)?mt.set(i,Object.assign(Object.assign({},mt.get(i)),e)):mt.set(i,e),ct||(ct=e)}),pi()}function pi(){di&&(Ce=document.documentElement.dir||"ltr",Se=document.documentElement.lang||navigator.language),[...pe.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}let ds=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){pe.add(this.host)}hostDisconnected(){pe.delete(this.host)}dir(){return`${this.host.dir||Ce}`.toLowerCase()}lang(){return`${this.host.lang||Se}`.toLowerCase()}getTranslationData(e){var i,s;const o=new Intl.Locale(e.replace(/_/g,"-")),n=o?.language.toLowerCase(),r=(s=(i=o?.region)===null||i===void 0?void 0:i.toLowerCase())!==null&&s!==void 0?s:"",a=mt.get(`${n}-${r}`),l=mt.get(n);return{locale:o,language:n,region:r,primary:a,secondary:l}}exists(e,i){var s;const{primary:o,secondary:n}=this.getTranslationData((s=i.lang)!==null&&s!==void 0?s:this.lang());return i=Object.assign({includeFallback:!1},i),!!(o&&o[e]||n&&n[e]||i.includeFallback&&ct&&ct[e])}term(e,...i){const{primary:s,secondary:o}=this.getTranslationData(this.lang());let n;if(s&&s[e])n=s[e];else if(o&&o[e])n=o[e];else if(ct&&ct[e])n=ct[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof n=="function"?n(...i):n}date(e,i){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),i).format(e)}number(e,i){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),i).format(e)}relativeTime(e,i,s){return new Intl.RelativeTimeFormat(this.lang(),s).format(e,i)}};var fi={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>t===0?"No options selected":t===1?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"};ui(fi);var us=fi,Rt=class extends ds{};ui(us);var rt=Z`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,mi=Object.defineProperty,ps=Object.defineProperties,fs=Object.getOwnPropertyDescriptor,ms=Object.getOwnPropertyDescriptors,Fe=Object.getOwnPropertySymbols,gs=Object.prototype.hasOwnProperty,vs=Object.prototype.propertyIsEnumerable,ae=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),Ee=t=>{throw TypeError(t)},je=(t,e,i)=>e in t?mi(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,Jt=(t,e)=>{for(var i in e||(e={}))gs.call(e,i)&&je(t,i,e[i]);if(Fe)for(var i of Fe(e))vs.call(e,i)&&je(t,i,e[i]);return t},gi=(t,e)=>ps(t,ms(e)),p=(t,e,i,s)=>{for(var o=s>1?void 0:s?fs(e,i):e,n=t.length-1,r;n>=0;n--)(r=t[n])&&(o=(s?r(e,i,o):r(o))||o);return s&&o&&mi(e,i,o),o},vi=(t,e,i)=>e.has(t)||Ee("Cannot "+i),ys=(t,e,i)=>(vi(t,e,"read from private field"),e.get(t)),bs=(t,e,i)=>e.has(t)?Ee("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),ws=(t,e,i,s)=>(vi(t,e,"write to private field"),e.set(t,i),i),xs=function(t,e){this[0]=t,this[1]=e},_s=t=>{var e=t[ae("asyncIterator")],i=!1,s,o={};return e==null?(e=t[ae("iterator")](),s=n=>o[n]=r=>e[n](r)):(e=e.call(t),s=n=>o[n]=r=>{if(i){if(i=!1,n==="throw")throw r;return r}return i=!0,{done:!1,value:new xs(new Promise(a=>{var l=e[n](r);l instanceof Object||Ee("Object expected"),a(l)}),1)}}),o[ae("iterator")]=()=>o,s("next"),"throw"in e?s("throw"):o.throw=n=>{throw n},"return"in e&&s("return"),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $s={attribute:!0,type:String,converter:Ut,reflect:!1,hasChanged:xe},As=(t=$s,e,i)=>{const{kind:s,metadata:o}=i;let n=globalThis.litPropertyMetadata.get(o);if(n===void 0&&globalThis.litPropertyMetadata.set(o,n=new Map),s==="setter"&&((t=Object.create(t)).wrapped=!0),n.set(i.name,t),s==="accessor"){const{name:r}=i;return{set(a){const l=e.get.call(this);e.set.call(this,a),this.requestUpdate(r,l,t)},init(a){return a!==void 0&&this.C(r,void 0,t,a),a}}}if(s==="setter"){const{name:r}=i;return function(a){const l=this[r];e.call(this,a),this.requestUpdate(r,l,t)}}throw Error("Unsupported decorator location: "+s)};function g(t){return(e,i)=>typeof i=="object"?As(t,e,i):((s,o,n)=>{const r=o.hasOwnProperty(n);return o.constructor.createProperty(n,s),r?Object.getOwnPropertyDescriptor(o,n):void 0})(t,e,i)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Cs(t){return g({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ss=(t,e,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,i),i);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function I(t,e){return(i,s,o)=>{const n=r=>r.renderRoot?.querySelector(t)??null;return Ss(i,s,{get(){return n(this)}})}}var Bt,M=class extends Ct{constructor(){super(),bs(this,Bt,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([t,e])=>{this.constructor.define(t,e)})}emit(t,e){const i=new CustomEvent(t,Jt({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(i),i}static define(t,e=this,i={}){const s=customElements.get(t);if(!s){try{customElements.define(t,e,i)}catch{customElements.define(t,class extends e{},i)}return}let o=" (unknown version)",n=o;"version"in e&&e.version&&(o=" v"+e.version),"version"in s&&s.version&&(n=" v"+s.version),!(o&&n&&o===n)&&console.warn(`Attempted to register <${t}>${o}, but <${t}>${n} has already been registered.`)}attributeChangedCallback(t,e,i){ys(this,Bt)||(this.constructor.elementProperties.forEach((s,o)=>{s.reflect&&this[o]!=null&&this.initialReflectedProperties.set(o,this[o])}),ws(this,Bt,!0)),super.attributeChangedCallback(t,e,i)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach((e,i)=>{t.has(i)&&this[i]==null&&(this[i]=e)})}};Bt=new WeakMap;M.version="2.20.1";M.dependencies={};p([g()],M.prototype,"dir",2);p([g()],M.prototype,"lang",2);const st=Math.min,O=Math.max,Vt=Math.round,zt=Math.floor,F=t=>({x:t,y:t}),Es={left:"right",right:"left",bottom:"top",top:"bottom"},ks={start:"end",end:"start"};function fe(t,e,i){return O(t,st(e,i))}function bt(t,e){return typeof t=="function"?t(e):t}function ot(t){return t.split("-")[0]}function wt(t){return t.split("-")[1]}function yi(t){return t==="x"?"y":"x"}function ke(t){return t==="y"?"height":"width"}const Ps=new Set(["top","bottom"]);function G(t){return Ps.has(ot(t))?"y":"x"}function Pe(t){return yi(G(t))}function Os(t,e,i){i===void 0&&(i=!1);const s=wt(t),o=Pe(t),n=ke(o);let r=o==="x"?s===(i?"end":"start")?"right":"left":s==="start"?"bottom":"top";return e.reference[n]>e.floating[n]&&(r=Wt(r)),[r,Wt(r)]}function Ls(t){const e=Wt(t);return[me(t),e,me(e)]}function me(t){return t.replace(/start|end/g,e=>ks[e])}const qe=["left","right"],Ke=["right","left"],Ts=["top","bottom"],Rs=["bottom","top"];function Ms(t,e,i){switch(t){case"top":case"bottom":return i?e?Ke:qe:e?qe:Ke;case"left":case"right":return e?Ts:Rs;default:return[]}}function zs(t,e,i,s){const o=wt(t);let n=Ms(ot(t),i==="start",s);return o&&(n=n.map(r=>r+"-"+o),e&&(n=n.concat(n.map(me)))),n}function Wt(t){return t.replace(/left|right|bottom|top/g,e=>Es[e])}function Ds(t){return{top:0,right:0,bottom:0,left:0,...t}}function bi(t){return typeof t!="number"?Ds(t):{top:t,right:t,bottom:t,left:t}}function Ft(t){const{x:e,y:i,width:s,height:o}=t;return{width:s,height:o,top:i,left:e,right:e+s,bottom:i+o,x:e,y:i}}function Xe(t,e,i){let{reference:s,floating:o}=t;const n=G(e),r=Pe(e),a=ke(r),l=ot(e),c=n==="y",h=s.x+s.width/2-o.width/2,d=s.y+s.height/2-o.height/2,f=s[a]/2-o[a]/2;let u;switch(l){case"top":u={x:h,y:s.y-o.height};break;case"bottom":u={x:h,y:s.y+s.height};break;case"right":u={x:s.x+s.width,y:d};break;case"left":u={x:s.x-o.width,y:d};break;default:u={x:s.x,y:s.y}}switch(wt(e)){case"start":u[r]-=f*(i&&c?-1:1);break;case"end":u[r]+=f*(i&&c?-1:1);break}return u}const Ns=async(t,e,i)=>{const{placement:s="bottom",strategy:o="absolute",middleware:n=[],platform:r}=i,a=n.filter(Boolean),l=await(r.isRTL==null?void 0:r.isRTL(e));let c=await r.getElementRects({reference:t,floating:e,strategy:o}),{x:h,y:d}=Xe(c,s,l),f=s,u={},m=0;for(let v=0;v<a.length;v++){const{name:b,fn:y}=a[v],{x:w,y:_,data:C,reset:$}=await y({x:h,y:d,initialPlacement:s,placement:f,strategy:o,middlewareData:u,rects:c,platform:r,elements:{reference:t,floating:e}});h=w??h,d=_??d,u={...u,[b]:{...u[b],...C}},$&&m<=50&&(m++,typeof $=="object"&&($.placement&&(f=$.placement),$.rects&&(c=$.rects===!0?await r.getElementRects({reference:t,floating:e,strategy:o}):$.rects),{x:h,y:d}=Xe(c,f,l)),v=-1)}return{x:h,y:d,placement:f,strategy:o,middlewareData:u}};async function Oe(t,e){var i;e===void 0&&(e={});const{x:s,y:o,platform:n,rects:r,elements:a,strategy:l}=t,{boundary:c="clippingAncestors",rootBoundary:h="viewport",elementContext:d="floating",altBoundary:f=!1,padding:u=0}=bt(e,t),m=bi(u),b=a[f?d==="floating"?"reference":"floating":d],y=Ft(await n.getClippingRect({element:(i=await(n.isElement==null?void 0:n.isElement(b)))==null||i?b:b.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(a.floating)),boundary:c,rootBoundary:h,strategy:l})),w=d==="floating"?{x:s,y:o,width:r.floating.width,height:r.floating.height}:r.reference,_=await(n.getOffsetParent==null?void 0:n.getOffsetParent(a.floating)),C=await(n.isElement==null?void 0:n.isElement(_))?await(n.getScale==null?void 0:n.getScale(_))||{x:1,y:1}:{x:1,y:1},$=Ft(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:w,offsetParent:_,strategy:l}):w);return{top:(y.top-$.top+m.top)/C.y,bottom:($.bottom-y.bottom+m.bottom)/C.y,left:(y.left-$.left+m.left)/C.x,right:($.right-y.right+m.right)/C.x}}const Bs=t=>({name:"arrow",options:t,async fn(e){const{x:i,y:s,placement:o,rects:n,platform:r,elements:a,middlewareData:l}=e,{element:c,padding:h=0}=bt(t,e)||{};if(c==null)return{};const d=bi(h),f={x:i,y:s},u=Pe(o),m=ke(u),v=await r.getDimensions(c),b=u==="y",y=b?"top":"left",w=b?"bottom":"right",_=b?"clientHeight":"clientWidth",C=n.reference[m]+n.reference[u]-f[u]-n.floating[m],$=f[u]-n.reference[u],z=await(r.getOffsetParent==null?void 0:r.getOffsetParent(c));let E=z?z[_]:0;(!E||!await(r.isElement==null?void 0:r.isElement(z)))&&(E=a.floating[_]||n.floating[m]);const X=C/2-$/2,V=E/2-v[m]/2-1,R=st(d[y],V),Q=st(d[w],V),W=R,tt=E-v[m]-Q,P=E/2-v[m]/2+X,at=fe(W,P,tt),Y=!l.arrow&&wt(o)!=null&&P!==at&&n.reference[m]/2-(P<W?R:Q)-v[m]/2<0,D=Y?P<W?P-W:P-tt:0;return{[u]:f[u]+D,data:{[u]:at,centerOffset:P-at-D,...Y&&{alignmentOffset:D}},reset:Y}}}),Hs=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var i,s;const{placement:o,middlewareData:n,rects:r,initialPlacement:a,platform:l,elements:c}=e,{mainAxis:h=!0,crossAxis:d=!0,fallbackPlacements:f,fallbackStrategy:u="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:v=!0,...b}=bt(t,e);if((i=n.arrow)!=null&&i.alignmentOffset)return{};const y=ot(o),w=G(a),_=ot(a)===a,C=await(l.isRTL==null?void 0:l.isRTL(c.floating)),$=f||(_||!v?[Wt(a)]:Ls(a)),z=m!=="none";!f&&z&&$.push(...zs(a,v,m,C));const E=[a,...$],X=await Oe(e,b),V=[];let R=((s=n.flip)==null?void 0:s.overflows)||[];if(h&&V.push(X[y]),d){const P=Os(o,r,C);V.push(X[P[0]],X[P[1]])}if(R=[...R,{placement:o,overflows:V}],!V.every(P=>P<=0)){var Q,W;const P=(((Q=n.flip)==null?void 0:Q.index)||0)+1,at=E[P];if(at&&(!(d==="alignment"?w!==G(at):!1)||R.every(N=>G(N.placement)===w?N.overflows[0]>0:!0)))return{data:{index:P,overflows:R},reset:{placement:at}};let Y=(W=R.filter(D=>D.overflows[0]<=0).sort((D,N)=>D.overflows[1]-N.overflows[1])[0])==null?void 0:W.placement;if(!Y)switch(u){case"bestFit":{var tt;const D=(tt=R.filter(N=>{if(z){const et=G(N.placement);return et===w||et==="y"}return!0}).map(N=>[N.placement,N.overflows.filter(et=>et>0).reduce((et,Di)=>et+Di,0)]).sort((N,et)=>N[1]-et[1])[0])==null?void 0:tt[0];D&&(Y=D);break}case"initialPlacement":Y=a;break}if(o!==Y)return{reset:{placement:Y}}}return{}}}},Us=new Set(["left","top"]);async function Is(t,e){const{placement:i,platform:s,elements:o}=t,n=await(s.isRTL==null?void 0:s.isRTL(o.floating)),r=ot(i),a=wt(i),l=G(i)==="y",c=Us.has(r)?-1:1,h=n&&l?-1:1,d=bt(e,t);let{mainAxis:f,crossAxis:u,alignmentAxis:m}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return a&&typeof m=="number"&&(u=a==="end"?m*-1:m),l?{x:u*h,y:f*c}:{x:f*c,y:u*h}}const Vs=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var i,s;const{x:o,y:n,placement:r,middlewareData:a}=e,l=await Is(e,t);return r===((i=a.offset)==null?void 0:i.placement)&&(s=a.arrow)!=null&&s.alignmentOffset?{}:{x:o+l.x,y:n+l.y,data:{...l,placement:r}}}}},Ws=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:i,y:s,placement:o}=e,{mainAxis:n=!0,crossAxis:r=!1,limiter:a={fn:b=>{let{x:y,y:w}=b;return{x:y,y:w}}},...l}=bt(t,e),c={x:i,y:s},h=await Oe(e,l),d=G(ot(o)),f=yi(d);let u=c[f],m=c[d];if(n){const b=f==="y"?"top":"left",y=f==="y"?"bottom":"right",w=u+h[b],_=u-h[y];u=fe(w,u,_)}if(r){const b=d==="y"?"top":"left",y=d==="y"?"bottom":"right",w=m+h[b],_=m-h[y];m=fe(w,m,_)}const v=a.fn({...e,[f]:u,[d]:m});return{...v,data:{x:v.x-i,y:v.y-s,enabled:{[f]:n,[d]:r}}}}}},Fs=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var i,s;const{placement:o,rects:n,platform:r,elements:a}=e,{apply:l=()=>{},...c}=bt(t,e),h=await Oe(e,c),d=ot(o),f=wt(o),u=G(o)==="y",{width:m,height:v}=n.floating;let b,y;d==="top"||d==="bottom"?(b=d,y=f===(await(r.isRTL==null?void 0:r.isRTL(a.floating))?"start":"end")?"left":"right"):(y=d,b=f==="end"?"top":"bottom");const w=v-h.top-h.bottom,_=m-h.left-h.right,C=st(v-h[b],w),$=st(m-h[y],_),z=!e.middlewareData.shift;let E=C,X=$;if((i=e.middlewareData.shift)!=null&&i.enabled.x&&(X=_),(s=e.middlewareData.shift)!=null&&s.enabled.y&&(E=w),z&&!f){const R=O(h.left,0),Q=O(h.right,0),W=O(h.top,0),tt=O(h.bottom,0);u?X=m-2*(R!==0||Q!==0?R+Q:O(h.left,h.right)):E=v-2*(W!==0||tt!==0?W+tt:O(h.top,h.bottom))}await l({...e,availableWidth:X,availableHeight:E});const V=await r.getDimensions(a.floating);return m!==V.width||v!==V.height?{reset:{rects:!0}}:{}}}};function Qt(){return typeof window<"u"}function xt(t){return wi(t)?(t.nodeName||"").toLowerCase():"#document"}function L(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function q(t){var e;return(e=(wi(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function wi(t){return Qt()?t instanceof Node||t instanceof L(t).Node:!1}function H(t){return Qt()?t instanceof Element||t instanceof L(t).Element:!1}function j(t){return Qt()?t instanceof HTMLElement||t instanceof L(t).HTMLElement:!1}function Ye(t){return!Qt()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof L(t).ShadowRoot}const js=new Set(["inline","contents"]);function Mt(t){const{overflow:e,overflowX:i,overflowY:s,display:o}=U(t);return/auto|scroll|overlay|hidden|clip/.test(e+s+i)&&!js.has(o)}const qs=new Set(["table","td","th"]);function Ks(t){return qs.has(xt(t))}const Xs=[":popover-open",":modal"];function te(t){return Xs.some(e=>{try{return t.matches(e)}catch{return!1}})}const Ys=["transform","translate","scale","rotate","perspective"],Gs=["transform","translate","scale","rotate","perspective","filter"],Zs=["paint","layout","strict","content"];function ee(t){const e=Le(),i=H(t)?U(t):t;return Ys.some(s=>i[s]?i[s]!=="none":!1)||(i.containerType?i.containerType!=="normal":!1)||!e&&(i.backdropFilter?i.backdropFilter!=="none":!1)||!e&&(i.filter?i.filter!=="none":!1)||Gs.some(s=>(i.willChange||"").includes(s))||Zs.some(s=>(i.contain||"").includes(s))}function Js(t){let e=nt(t);for(;j(e)&&!yt(e);){if(ee(e))return e;if(te(e))return null;e=nt(e)}return null}function Le(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const Qs=new Set(["html","body","#document"]);function yt(t){return Qs.has(xt(t))}function U(t){return L(t).getComputedStyle(t)}function ie(t){return H(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function nt(t){if(xt(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Ye(t)&&t.host||q(t);return Ye(e)?e.host:e}function xi(t){const e=nt(t);return yt(e)?t.ownerDocument?t.ownerDocument.body:t.body:j(e)&&Mt(e)?e:xi(e)}function Ot(t,e,i){var s;e===void 0&&(e=[]),i===void 0&&(i=!0);const o=xi(t),n=o===((s=t.ownerDocument)==null?void 0:s.body),r=L(o);if(n){const a=ge(r);return e.concat(r,r.visualViewport||[],Mt(o)?o:[],a&&i?Ot(a):[])}return e.concat(o,Ot(o,[],i))}function ge(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function _i(t){const e=U(t);let i=parseFloat(e.width)||0,s=parseFloat(e.height)||0;const o=j(t),n=o?t.offsetWidth:i,r=o?t.offsetHeight:s,a=Vt(i)!==n||Vt(s)!==r;return a&&(i=n,s=r),{width:i,height:s,$:a}}function Te(t){return H(t)?t:t.contextElement}function gt(t){const e=Te(t);if(!j(e))return F(1);const i=e.getBoundingClientRect(),{width:s,height:o,$:n}=_i(e);let r=(n?Vt(i.width):i.width)/s,a=(n?Vt(i.height):i.height)/o;return(!r||!Number.isFinite(r))&&(r=1),(!a||!Number.isFinite(a))&&(a=1),{x:r,y:a}}const to=F(0);function $i(t){const e=L(t);return!Le()||!e.visualViewport?to:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function eo(t,e,i){return e===void 0&&(e=!1),!i||e&&i!==L(t)?!1:e}function pt(t,e,i,s){e===void 0&&(e=!1),i===void 0&&(i=!1);const o=t.getBoundingClientRect(),n=Te(t);let r=F(1);e&&(s?H(s)&&(r=gt(s)):r=gt(t));const a=eo(n,i,s)?$i(n):F(0);let l=(o.left+a.x)/r.x,c=(o.top+a.y)/r.y,h=o.width/r.x,d=o.height/r.y;if(n){const f=L(n),u=s&&H(s)?L(s):s;let m=f,v=ge(m);for(;v&&s&&u!==m;){const b=gt(v),y=v.getBoundingClientRect(),w=U(v),_=y.left+(v.clientLeft+parseFloat(w.paddingLeft))*b.x,C=y.top+(v.clientTop+parseFloat(w.paddingTop))*b.y;l*=b.x,c*=b.y,h*=b.x,d*=b.y,l+=_,c+=C,m=L(v),v=ge(m)}}return Ft({width:h,height:d,x:l,y:c})}function se(t,e){const i=ie(t).scrollLeft;return e?e.left+i:pt(q(t)).left+i}function Ai(t,e){const i=t.getBoundingClientRect(),s=i.left+e.scrollLeft-se(t,i),o=i.top+e.scrollTop;return{x:s,y:o}}function io(t){let{elements:e,rect:i,offsetParent:s,strategy:o}=t;const n=o==="fixed",r=q(s),a=e?te(e.floating):!1;if(s===r||a&&n)return i;let l={scrollLeft:0,scrollTop:0},c=F(1);const h=F(0),d=j(s);if((d||!d&&!n)&&((xt(s)!=="body"||Mt(r))&&(l=ie(s)),j(s))){const u=pt(s);c=gt(s),h.x=u.x+s.clientLeft,h.y=u.y+s.clientTop}const f=r&&!d&&!n?Ai(r,l):F(0);return{width:i.width*c.x,height:i.height*c.y,x:i.x*c.x-l.scrollLeft*c.x+h.x+f.x,y:i.y*c.y-l.scrollTop*c.y+h.y+f.y}}function so(t){return Array.from(t.getClientRects())}function oo(t){const e=q(t),i=ie(t),s=t.ownerDocument.body,o=O(e.scrollWidth,e.clientWidth,s.scrollWidth,s.clientWidth),n=O(e.scrollHeight,e.clientHeight,s.scrollHeight,s.clientHeight);let r=-i.scrollLeft+se(t);const a=-i.scrollTop;return U(s).direction==="rtl"&&(r+=O(e.clientWidth,s.clientWidth)-o),{width:o,height:n,x:r,y:a}}const Ge=25;function no(t,e){const i=L(t),s=q(t),o=i.visualViewport;let n=s.clientWidth,r=s.clientHeight,a=0,l=0;if(o){n=o.width,r=o.height;const h=Le();(!h||h&&e==="fixed")&&(a=o.offsetLeft,l=o.offsetTop)}const c=se(s);if(c<=0){const h=s.ownerDocument,d=h.body,f=getComputedStyle(d),u=h.compatMode==="CSS1Compat"&&parseFloat(f.marginLeft)+parseFloat(f.marginRight)||0,m=Math.abs(s.clientWidth-d.clientWidth-u);m<=Ge&&(n-=m)}else c<=Ge&&(n+=c);return{width:n,height:r,x:a,y:l}}const ro=new Set(["absolute","fixed"]);function ao(t,e){const i=pt(t,!0,e==="fixed"),s=i.top+t.clientTop,o=i.left+t.clientLeft,n=j(t)?gt(t):F(1),r=t.clientWidth*n.x,a=t.clientHeight*n.y,l=o*n.x,c=s*n.y;return{width:r,height:a,x:l,y:c}}function Ze(t,e,i){let s;if(e==="viewport")s=no(t,i);else if(e==="document")s=oo(q(t));else if(H(e))s=ao(e,i);else{const o=$i(t);s={x:e.x-o.x,y:e.y-o.y,width:e.width,height:e.height}}return Ft(s)}function Ci(t,e){const i=nt(t);return i===e||!H(i)||yt(i)?!1:U(i).position==="fixed"||Ci(i,e)}function lo(t,e){const i=e.get(t);if(i)return i;let s=Ot(t,[],!1).filter(a=>H(a)&&xt(a)!=="body"),o=null;const n=U(t).position==="fixed";let r=n?nt(t):t;for(;H(r)&&!yt(r);){const a=U(r),l=ee(r);!l&&a.position==="fixed"&&(o=null),(n?!l&&!o:!l&&a.position==="static"&&!!o&&ro.has(o.position)||Mt(r)&&!l&&Ci(t,r))?s=s.filter(h=>h!==r):o=a,r=nt(r)}return e.set(t,s),s}function co(t){let{element:e,boundary:i,rootBoundary:s,strategy:o}=t;const r=[...i==="clippingAncestors"?te(e)?[]:lo(e,this._c):[].concat(i),s],a=r[0],l=r.reduce((c,h)=>{const d=Ze(e,h,o);return c.top=O(d.top,c.top),c.right=st(d.right,c.right),c.bottom=st(d.bottom,c.bottom),c.left=O(d.left,c.left),c},Ze(e,a,o));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function ho(t){const{width:e,height:i}=_i(t);return{width:e,height:i}}function uo(t,e,i){const s=j(e),o=q(e),n=i==="fixed",r=pt(t,!0,n,e);let a={scrollLeft:0,scrollTop:0};const l=F(0);function c(){l.x=se(o)}if(s||!s&&!n)if((xt(e)!=="body"||Mt(o))&&(a=ie(e)),s){const u=pt(e,!0,n,e);l.x=u.x+e.clientLeft,l.y=u.y+e.clientTop}else o&&c();n&&!s&&o&&c();const h=o&&!s&&!n?Ai(o,a):F(0),d=r.left+a.scrollLeft-l.x-h.x,f=r.top+a.scrollTop-l.y-h.y;return{x:d,y:f,width:r.width,height:r.height}}function le(t){return U(t).position==="static"}function Je(t,e){if(!j(t)||U(t).position==="fixed")return null;if(e)return e(t);let i=t.offsetParent;return q(t)===i&&(i=i.ownerDocument.body),i}function Si(t,e){const i=L(t);if(te(t))return i;if(!j(t)){let o=nt(t);for(;o&&!yt(o);){if(H(o)&&!le(o))return o;o=nt(o)}return i}let s=Je(t,e);for(;s&&Ks(s)&&le(s);)s=Je(s,e);return s&&yt(s)&&le(s)&&!ee(s)?i:s||Js(t)||i}const po=async function(t){const e=this.getOffsetParent||Si,i=this.getDimensions,s=await i(t.floating);return{reference:uo(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:s.width,height:s.height}}};function fo(t){return U(t).direction==="rtl"}const Ht={convertOffsetParentRelativeRectToViewportRelativeRect:io,getDocumentElement:q,getClippingRect:co,getOffsetParent:Si,getElementRects:po,getClientRects:so,getDimensions:ho,getScale:gt,isElement:H,isRTL:fo};function Ei(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function mo(t,e){let i=null,s;const o=q(t);function n(){var a;clearTimeout(s),(a=i)==null||a.disconnect(),i=null}function r(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),n();const c=t.getBoundingClientRect(),{left:h,top:d,width:f,height:u}=c;if(a||e(),!f||!u)return;const m=zt(d),v=zt(o.clientWidth-(h+f)),b=zt(o.clientHeight-(d+u)),y=zt(h),_={rootMargin:-m+"px "+-v+"px "+-b+"px "+-y+"px",threshold:O(0,st(1,l))||1};let C=!0;function $(z){const E=z[0].intersectionRatio;if(E!==l){if(!C)return r();E?r(!1,E):s=setTimeout(()=>{r(!1,1e-7)},1e3)}E===1&&!Ei(c,t.getBoundingClientRect())&&r(),C=!1}try{i=new IntersectionObserver($,{..._,root:o.ownerDocument})}catch{i=new IntersectionObserver($,_)}i.observe(t)}return r(!0),n}function go(t,e,i,s){s===void 0&&(s={});const{ancestorScroll:o=!0,ancestorResize:n=!0,elementResize:r=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=s,c=Te(t),h=o||n?[...c?Ot(c):[],...Ot(e)]:[];h.forEach(y=>{o&&y.addEventListener("scroll",i,{passive:!0}),n&&y.addEventListener("resize",i)});const d=c&&a?mo(c,i):null;let f=-1,u=null;r&&(u=new ResizeObserver(y=>{let[w]=y;w&&w.target===c&&u&&(u.unobserve(e),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var _;(_=u)==null||_.observe(e)})),i()}),c&&!l&&u.observe(c),u.observe(e));let m,v=l?pt(t):null;l&&b();function b(){const y=pt(t);v&&!Ei(v,y)&&i(),v=y,m=requestAnimationFrame(b)}return i(),()=>{var y;h.forEach(w=>{o&&w.removeEventListener("scroll",i),n&&w.removeEventListener("resize",i)}),d?.(),(y=u)==null||y.disconnect(),u=null,l&&cancelAnimationFrame(m)}}const vo=Vs,yo=Ws,bo=Hs,Qe=Fs,wo=Bs,xo=(t,e,i)=>{const s=new Map,o={platform:Ht,...i},n={...o.platform,_c:s};return Ns(t,e,{...o,platform:n})};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ki={ATTRIBUTE:1,CHILD:2},Pi=t=>(...e)=>({_$litDirective$:t,values:e});let Oi=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,i,s){this._$Ct=e,this._$AM=i,this._$Ci=s}_$AS(e,i){return this.update(e,i)}update(e,i){return this.render(...i)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Lt=Pi(class extends Oi{constructor(t){if(super(t),t.type!==ki.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((s=>s!==""))));for(const s in e)e[s]&&!this.nt?.has(s)&&this.st.add(s);return this.render(e)}const i=t.element.classList;for(const s of this.st)s in e||(i.remove(s),this.st.delete(s));for(const s in e){const o=!!e[s];o===this.st.has(s)||this.nt?.has(s)||(o?(i.add(s),this.st.add(s)):(i.remove(s),this.st.delete(s)))}return ut}});function _o(t){return $o(t)}function ce(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function $o(t){for(let e=t;e;e=ce(e))if(e instanceof Element&&getComputedStyle(e).display==="none")return null;for(let e=ce(t);e;e=ce(e)){if(!(e instanceof Element))continue;const i=getComputedStyle(e);if(i.display!=="contents"&&(i.position!=="static"||ee(i)||e.tagName==="BODY"))return e}return null}function Ao(t){return t!==null&&typeof t=="object"&&"getBoundingClientRect"in t&&("contextElement"in t?t.contextElement instanceof Element:!0)}var x=class extends M{constructor(){super(...arguments),this.localize=new Rt(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const t=this.anchorEl.getBoundingClientRect(),e=this.popup.getBoundingClientRect(),i=this.placement.includes("top")||this.placement.includes("bottom");let s=0,o=0,n=0,r=0,a=0,l=0,c=0,h=0;i?t.top<e.top?(s=t.left,o=t.bottom,n=t.right,r=t.bottom,a=e.left,l=e.top,c=e.right,h=e.top):(s=e.left,o=e.bottom,n=e.right,r=e.bottom,a=t.left,l=t.top,c=t.right,h=t.top):t.left<e.left?(s=t.right,o=t.top,n=e.left,r=e.top,a=t.right,l=t.bottom,c=e.left,h=e.bottom):(s=e.right,o=e.top,n=t.left,r=t.top,a=e.right,l=e.bottom,c=t.left,h=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${s}px`),this.style.setProperty("--hover-bridge-top-left-y",`${o}px`),this.style.setProperty("--hover-bridge-top-right-x",`${n}px`),this.style.setProperty("--hover-bridge-top-right-y",`${r}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${l}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${h}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||Ao(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){!this.anchorEl||!this.active||(this.cleanup=go(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl)return;const t=[vo({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(Qe({apply:({rects:i})=>{const s=this.sync==="width"||this.sync==="both",o=this.sync==="height"||this.sync==="both";this.popup.style.width=s?`${i.reference.width}px`:"",this.popup.style.height=o?`${i.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(bo({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(yo({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push(Qe({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:i,availableHeight:s})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${s}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${i}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(wo({element:this.arrowEl,padding:this.arrowPadding}));const e=this.strategy==="absolute"?i=>Ht.getOffsetParent(i,_o):Ht.getOffsetParent;xo(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy,platform:gi(Jt({},Ht),{getOffsetParent:e})}).then(({x:i,y:s,middlewareData:o,placement:n})=>{const r=this.localize.dir()==="rtl",a={top:"bottom",right:"left",bottom:"top",left:"right"}[n.split("-")[0]];if(this.setAttribute("data-current-placement",n),Object.assign(this.popup.style,{left:`${i}px`,top:`${s}px`}),this.arrow){const l=o.arrow.x,c=o.arrow.y;let h="",d="",f="",u="";if(this.arrowPlacement==="start"){const m=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";h=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",d=r?m:"",u=r?"":m}else if(this.arrowPlacement==="end"){const m=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";d=r?"":m,u=r?m:"",f=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(u=typeof l=="number"?"calc(50% - var(--arrow-size-diagonal))":"",h=typeof c=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(u=typeof l=="number"?`${l}px`:"",h=typeof c=="number"?`${c}px`:"");Object.assign(this.arrowEl.style,{top:h,right:d,bottom:f,left:u,[a]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return B`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${Lt({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${Lt({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?B`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};x.styles=[rt,hs];p([I(".popup")],x.prototype,"popup",2);p([I(".popup__arrow")],x.prototype,"arrowEl",2);p([g()],x.prototype,"anchor",2);p([g({type:Boolean,reflect:!0})],x.prototype,"active",2);p([g({reflect:!0})],x.prototype,"placement",2);p([g({reflect:!0})],x.prototype,"strategy",2);p([g({type:Number})],x.prototype,"distance",2);p([g({type:Number})],x.prototype,"skidding",2);p([g({type:Boolean})],x.prototype,"arrow",2);p([g({attribute:"arrow-placement"})],x.prototype,"arrowPlacement",2);p([g({attribute:"arrow-padding",type:Number})],x.prototype,"arrowPadding",2);p([g({type:Boolean})],x.prototype,"flip",2);p([g({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(e=>e.trim()).filter(e=>e!==""),toAttribute:t=>t.join(" ")}})],x.prototype,"flipFallbackPlacements",2);p([g({attribute:"flip-fallback-strategy"})],x.prototype,"flipFallbackStrategy",2);p([g({type:Object})],x.prototype,"flipBoundary",2);p([g({attribute:"flip-padding",type:Number})],x.prototype,"flipPadding",2);p([g({type:Boolean})],x.prototype,"shift",2);p([g({type:Object})],x.prototype,"shiftBoundary",2);p([g({attribute:"shift-padding",type:Number})],x.prototype,"shiftPadding",2);p([g({attribute:"auto-size"})],x.prototype,"autoSize",2);p([g()],x.prototype,"sync",2);p([g({type:Object})],x.prototype,"autoSizeBoundary",2);p([g({attribute:"auto-size-padding",type:Number})],x.prototype,"autoSizePadding",2);p([g({attribute:"hover-bridge",type:Boolean})],x.prototype,"hoverBridge",2);var Li=new Map,Co=new WeakMap;function So(t){return t??{keyframes:[],options:{duration:0}}}function ti(t,e){return e.toLowerCase()==="rtl"?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function oe(t,e){Li.set(t,So(e))}function jt(t,e,i){const s=Co.get(t);if(s?.[e])return ti(s[e],i.dir);const o=Li.get(e);return o?ti(o,i.dir):{keyframes:[],options:{duration:0}}}function qt(t,e){return new Promise(i=>{function s(o){o.target===t&&(t.removeEventListener(e,s),i())}t.addEventListener(e,s)})}function Kt(t,e,i){return new Promise(s=>{if(i?.duration===1/0)throw new Error("Promise-based animations must be finite.");const o=t.animate(e,gi(Jt({},i),{duration:Eo()?0:i.duration}));o.addEventListener("cancel",s,{once:!0}),o.addEventListener("finish",s,{once:!0})})}function ei(t){return t=t.toString().toLowerCase(),t.indexOf("ms")>-1?parseFloat(t):t.indexOf("s")>-1?parseFloat(t)*1e3:parseFloat(t)}function Eo(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Xt(t){return Promise.all(t.getAnimations().map(e=>new Promise(i=>{e.cancel(),requestAnimationFrame(i)})))}function K(t,e){const i=Jt({waitUntilFirstUpdate:!1},e);return(s,o)=>{const{update:n}=s,r=Array.isArray(t)?t:[t];s.update=function(a){r.forEach(l=>{const c=l;if(a.has(c)){const h=a.get(c),d=this[c];h!==d&&(!i.waitUntilFirstUpdate||this.hasUpdated)&&this[o](h,d)}}),n.call(this,a)}}}var S=class extends M{constructor(){super(),this.localize=new Rt(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=t=>{t.key==="Escape"&&(t.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const t=ei(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),t)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const t=ei(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),t)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(t){return this.trigger.split(" ").includes(t)}async handleOpenChange(){var t,e;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await Xt(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:i,options:s}=jt(this,"tooltip.show",{dir:this.localize.dir()});await Kt(this.popup.popup,i,s),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await Xt(this.body);const{keyframes:i,options:s}=jt(this,"tooltip.hide",{dir:this.localize.dir()});await Kt(this.popup.popup,i,s),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,qt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,qt(this,"sl-after-hide")}render(){return B`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${Lt({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
        hover-bridge
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?"polite":"off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `}};S.styles=[rt,cs];S.dependencies={"sl-popup":x};p([I("slot:not([name])")],S.prototype,"defaultSlot",2);p([I(".tooltip__body")],S.prototype,"body",2);p([I("sl-popup")],S.prototype,"popup",2);p([g()],S.prototype,"content",2);p([g()],S.prototype,"placement",2);p([g({type:Boolean,reflect:!0})],S.prototype,"disabled",2);p([g({type:Number})],S.prototype,"distance",2);p([g({type:Boolean,reflect:!0})],S.prototype,"open",2);p([g({type:Number})],S.prototype,"skidding",2);p([g()],S.prototype,"trigger",2);p([g({type:Boolean})],S.prototype,"hoist",2);p([K("open",{waitUntilFirstUpdate:!0})],S.prototype,"handleOpenChange",1);p([K(["content","distance","hoist","placement","skidding"])],S.prototype,"handleOptionsChange",1);p([K("disabled")],S.prototype,"handleDisabledChange",1);oe("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});oe("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});S.define("sl-tooltip");var ko=Z`
  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    border-radius: var(--sl-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`;function*Ti(t=document.activeElement){t!=null&&(yield t,"shadowRoot"in t&&t.shadowRoot&&t.shadowRoot.mode!=="closed"&&(yield*_s(Ti(t.shadowRoot.activeElement))))}function Po(){return[...Ti()].pop()}var ii=new WeakMap;function Ri(t){let e=ii.get(t);return e||(e=window.getComputedStyle(t,null),ii.set(t,e)),e}function Oo(t){if(typeof t.checkVisibility=="function")return t.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const e=Ri(t);return e.visibility!=="hidden"&&e.display!=="none"}function Lo(t){const e=Ri(t),{overflowY:i,overflowX:s}=e;return i==="scroll"||s==="scroll"?!0:i!=="auto"||s!=="auto"?!1:t.scrollHeight>t.clientHeight&&i==="auto"||t.scrollWidth>t.clientWidth&&s==="auto"}function To(t){const e=t.tagName.toLowerCase(),i=Number(t.getAttribute("tabindex"));if(t.hasAttribute("tabindex")&&(isNaN(i)||i<=-1)||t.hasAttribute("disabled")||t.closest("[inert]"))return!1;if(e==="input"&&t.getAttribute("type")==="radio"){const n=t.getRootNode(),r=`input[type='radio'][name="${t.getAttribute("name")}"]`,a=n.querySelector(`${r}:checked`);return a?a===t:n.querySelector(r)===t}return Oo(t)?(e==="audio"||e==="video")&&t.hasAttribute("controls")||t.hasAttribute("tabindex")||t.hasAttribute("contenteditable")&&t.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(e)?!0:Lo(t):!1}function Ro(t){var e,i;const s=zo(t),o=(e=s[0])!=null?e:null,n=(i=s[s.length-1])!=null?i:null;return{start:o,end:n}}function Mo(t,e){var i;return((i=t.getRootNode({composed:!0}))==null?void 0:i.host)!==e}function zo(t){const e=new WeakMap,i=[];function s(o){if(o instanceof Element){if(o.hasAttribute("inert")||o.closest("[inert]")||e.has(o))return;e.set(o,!0),!i.includes(o)&&To(o)&&i.push(o),o instanceof HTMLSlotElement&&Mo(o,t)&&o.assignedElements({flatten:!0}).forEach(n=>{s(n)}),o.shadowRoot!==null&&o.shadowRoot.mode==="open"&&s(o.shadowRoot)}for(const n of o.children)s(n)}return s(t),i.sort((o,n)=>{const r=Number(o.getAttribute("tabindex"))||0;return(Number(n.getAttribute("tabindex"))||0)-r})}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Do=t=>t??A;var k=class extends M{constructor(){super(...arguments),this.localize=new Rt(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=t=>{this.open&&t.key==="Escape"&&(t.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=t=>{var e;if(t.key==="Escape"&&this.open&&!this.closeWatcher){t.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(t.key==="Tab"){if(this.open&&((e=document.activeElement)==null?void 0:e.tagName.toLowerCase())==="sl-menu-item"){t.preventDefault(),this.hide(),this.focusOnTrigger();return}const i=(s,o)=>{if(!s)return null;const n=s.closest(o);if(n)return n;const r=s.getRootNode();return r instanceof ShadowRoot?i(r.host,o):null};setTimeout(()=>{var s;const o=((s=this.containingElement)==null?void 0:s.getRootNode())instanceof ShadowRoot?Po():document.activeElement;(!this.containingElement||i(o,this.containingElement.tagName.toLowerCase())!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=t=>{const e=t.composedPath();this.containingElement&&!e.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=t=>{const e=t.target;!this.stayOpenOnSelect&&e.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const t=this.trigger.assignedElements({flatten:!0})[0];typeof t?.focus=="function"&&t.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(t=>t.tagName.toLowerCase()==="sl-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(t){if([" ","Enter"].includes(t.key)){t.preventDefault(),this.handleTriggerClick();return}const e=this.getMenu();if(e){const i=e.getAllItems(),s=i[0],o=i[i.length-1];["ArrowDown","ArrowUp","Home","End"].includes(t.key)&&(t.preventDefault(),this.open||(this.show(),await this.updateComplete),i.length>0&&this.updateComplete.then(()=>{(t.key==="ArrowDown"||t.key==="Home")&&(e.setCurrentItem(s),s.focus()),(t.key==="ArrowUp"||t.key==="End")&&(e.setCurrentItem(o),o.focus())}))}}handleTriggerKeyUp(t){t.key===" "&&t.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const e=this.trigger.assignedElements({flatten:!0}).find(s=>Ro(s).start);let i;if(e){switch(e.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":i=e.button;break;default:i=e}i.setAttribute("aria-haspopup","true"),i.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,qt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,qt(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){var t;this.panel.addEventListener("sl-select",this.handlePanelSelect),"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){var t;this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),(t=this.closeWatcher)==null||t.destroy()}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await Xt(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:t,options:e}=jt(this,"dropdown.show",{dir:this.localize.dir()});await Kt(this.popup.popup,t,e),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await Xt(this);const{keyframes:t,options:e}=jt(this,"dropdown.hide",{dir:this.localize.dir()});await Kt(this.popup.popup,t,e),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return B`
      <sl-popup
        part="base"
        exportparts="popup:base__popup"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        sync=${Do(this.sync?this.sync:void 0)}
        class=${Lt({dropdown:!0,"dropdown--open":this.open})}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <div aria-hidden=${this.open?"false":"true"} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </sl-popup>
    `}};k.styles=[rt,ko];k.dependencies={"sl-popup":x};p([I(".dropdown")],k.prototype,"popup",2);p([I(".dropdown__trigger")],k.prototype,"trigger",2);p([I(".dropdown__panel")],k.prototype,"panel",2);p([g({type:Boolean,reflect:!0})],k.prototype,"open",2);p([g({reflect:!0})],k.prototype,"placement",2);p([g({type:Boolean,reflect:!0})],k.prototype,"disabled",2);p([g({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],k.prototype,"stayOpenOnSelect",2);p([g({attribute:!1})],k.prototype,"containingElement",2);p([g({type:Number})],k.prototype,"distance",2);p([g({type:Number})],k.prototype,"skidding",2);p([g({type:Boolean})],k.prototype,"hoist",2);p([g({reflect:!0})],k.prototype,"sync",2);p([K("open",{waitUntilFirstUpdate:!0})],k.prototype,"handleOpenChange",1);oe("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});oe("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});k.define("sl-dropdown");var No=Z`
  :host {
    display: block;
    position: relative;
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`,Re=class extends M{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(t){const e=["menuitem","menuitemcheckbox"],i=t.composedPath(),s=i.find(a=>{var l;return e.includes(((l=a?.getAttribute)==null?void 0:l.call(a,"role"))||"")});if(!s||i.find(a=>{var l;return((l=a?.getAttribute)==null?void 0:l.call(a,"role"))==="menu"})!==this)return;const r=s;r.type==="checkbox"&&(r.checked=!r.checked),this.emit("sl-select",{detail:{item:r}})}handleKeyDown(t){if(t.key==="Enter"||t.key===" "){const e=this.getCurrentItem();t.preventDefault(),t.stopPropagation(),e?.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(t.key)){const e=this.getAllItems(),i=this.getCurrentItem();let s=i?e.indexOf(i):0;e.length>0&&(t.preventDefault(),t.stopPropagation(),t.key==="ArrowDown"?s++:t.key==="ArrowUp"?s--:t.key==="Home"?s=0:t.key==="End"&&(s=e.length-1),s<0&&(s=e.length-1),s>e.length-1&&(s=0),this.setCurrentItem(e[s]),e[s].focus())}}handleMouseDown(t){const e=t.target;this.isMenuItem(e)&&this.setCurrentItem(e)}handleSlotChange(){const t=this.getAllItems();t.length>0&&this.setCurrentItem(t[0])}isMenuItem(t){var e;return t.tagName.toLowerCase()==="sl-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes((e=t.getAttribute("role"))!=null?e:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>!(t.inert||!this.isMenuItem(t)))}getCurrentItem(){return this.getAllItems().find(t=>t.getAttribute("tabindex")==="0")}setCurrentItem(t){this.getAllItems().forEach(i=>{i.setAttribute("tabindex",i===t?"0":"-1")})}render(){return B`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};Re.styles=[rt,No];p([I("slot")],Re.prototype,"defaultSlot",2);Re.define("sl-menu");var Bo=Z`
  :host {
    --submenu-offset: -2px;

    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item.menu-item--loading {
    outline: none;
    cursor: wait;
  }

  .menu-item.menu-item--loading *:not(sl-spinner) {
    opacity: 0.5;
  }

  .menu-item--loading sl-spinner {
    --indicator-color: currentColor;
    --track-width: 1px;
    position: absolute;
    font-size: 0.75em;
    top: calc(50% - 0.5em);
    left: 0.65rem;
    opacity: 1;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /* Safe triangle */
  .menu-item--submenu-expanded::after {
    content: '';
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--safe-triangle-cursor-x, 0) var(--safe-triangle-cursor-y, 0),
      var(--safe-triangle-submenu-start-x, 0) var(--safe-triangle-submenu-start-y, 0),
      var(--safe-triangle-submenu-end-x, 0) var(--safe-triangle-submenu-end-y, 0)
    );
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item,
  .menu-item--submenu-expanded {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  :host(:focus-visible) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  /* Add elevation and z-index to submenus */
  sl-popup::part(popup) {
    box-shadow: var(--sl-shadow-large);
    z-index: var(--sl-z-index-dropdown);
    margin-left: var(--submenu-offset);
  }

  .menu-item--rtl sl-popup::part(popup) {
    margin-left: calc(-1 * var(--submenu-offset));
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }

  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ho=(t,e)=>t?._$litType$!==void 0,Uo=t=>t.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const St=(t,e)=>{const i=t._$AN;if(i===void 0)return!1;for(const s of i)s._$AO?.(e,!1),St(s,e);return!0},Yt=t=>{let e,i;do{if((e=t._$AM)===void 0)break;i=e._$AN,i.delete(t),t=e}while(i?.size===0)},Mi=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(i===void 0)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),Wo(e)}};function Io(t){this._$AN!==void 0?(Yt(this),this._$AM=t,Mi(this)):this._$AM=t}function Vo(t,e=!1,i=0){const s=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(e)if(Array.isArray(s))for(let n=i;n<s.length;n++)St(s[n],!1),Yt(s[n]);else s!=null&&(St(s,!1),Yt(s));else St(this,t)}const Wo=t=>{t.type==ki.CHILD&&(t._$AP??=Vo,t._$AQ??=Io)};class Fo extends Oi{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,i,s){super._$AT(e,i,s),Mi(this),this.isConnected=e._$AU}_$AO(e,i=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),i&&(St(this,e),Yt(this))}setValue(e){if(Uo(this._$Ct))this._$Ct._$AI(e,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=e,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const jo=()=>new qo;class qo{}const he=new WeakMap,Ko=Pi(class extends Fo{render(t){return A}update(t,[e]){const i=e!==this.G;return i&&this.G!==void 0&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),A}rt(t){if(this.isConnected||(t=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let i=he.get(e);i===void 0&&(i=new WeakMap,he.set(e,i)),i.get(this.G)!==void 0&&this.G.call(this.ht,void 0),i.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return typeof this.G=="function"?he.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var Xo=class{constructor(t,e){this.popupRef=jo(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=i=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${i.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${i.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=i=>{switch(i.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":i.target!==this.host&&(i.preventDefault(),i.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(i);break}},this.handleClick=i=>{var s;i.target===this.host?(i.preventDefault(),i.stopPropagation()):i.target instanceof Element&&(i.target.tagName==="sl-menu-item"||(s=i.target.role)!=null&&s.startsWith("menuitem"))&&this.disableSubmenu()},this.handleFocusOut=i=>{i.relatedTarget&&i.relatedTarget instanceof Element&&this.host.contains(i.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=i=>{i.stopPropagation()},this.handlePopupReposition=()=>{const i=this.host.renderRoot.querySelector("slot[name='submenu']"),s=i?.assignedElements({flatten:!0}).filter(c=>c.localName==="sl-menu")[0],o=getComputedStyle(this.host).direction==="rtl";if(!s)return;const{left:n,top:r,width:a,height:l}=s.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${o?n+a:n}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${r}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${o?n+a:n}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${r+l}px`)},(this.host=t).addController(this),this.hasSlotController=e}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(t){const e=this.host.renderRoot.querySelector("slot[name='submenu']");if(!e){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let i=null;for(const s of e.assignedElements())if(i=s.querySelectorAll("sl-menu-item, [role^='menuitem']"),i.length!==0)break;if(!(!i||i.length===0)){i[0].setAttribute("tabindex","0");for(let s=1;s!==i.length;++s)i[s].setAttribute("tabindex","-1");this.popupRef.value&&(t.preventDefault(),t.stopPropagation(),this.popupRef.value.active?i[0]instanceof HTMLElement&&i[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{i[0]instanceof HTMLElement&&i[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(t){this.popupRef.value&&this.popupRef.value.active!==t&&(this.popupRef.value.active=t,this.host.requestUpdate())}enableSubmenu(t=!0){t?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var t;if(!((t=this.host.parentElement)!=null&&t.computedStyleMap))return;const e=this.host.parentElement.computedStyleMap(),s=["padding-top","border-top-width","margin-top"].reduce((o,n)=>{var r;const a=(r=e.get(n))!=null?r:new CSSUnitValue(0,"px"),c=(a instanceof CSSUnitValue?a:new CSSUnitValue(0,"px")).to("px");return o-c.value},0);this.skidding=s}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){const t=getComputedStyle(this.host).direction==="rtl";return this.isConnected?B`
      <sl-popup
        ${Ko(this.popupRef)}
        placement=${t?"left-start":"right-start"}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        strategy="fixed"
        auto-size="vertical"
        auto-size-padding="10"
      >
        <slot name="submenu"></slot>
      </sl-popup>
    `:B` <slot name="submenu" hidden></slot> `}},Yo=Z`
  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }
`,zi=class extends M{constructor(){super(...arguments),this.localize=new Rt(this)}render(){return B`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};zi.styles=[rt,Yo];var Go=class{constructor(t,...e){this.slotNames=[],this.handleSlotChange=i=>{const s=i.target;(this.slotNames.includes("[default]")&&!s.name||s.name&&this.slotNames.includes(s.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=e}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===t.ELEMENT_NODE){const e=t;if(e.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function Zo(t){if(!t)return"";const e=t.assignedNodes({flatten:!0});let i="";return[...e].forEach(s=>{s.nodeType===Node.TEXT_NODE&&(i+=s.textContent)}),i}var ve="";function si(t){ve=t}function Jo(t=""){if(!ve){const e=[...document.getElementsByTagName("script")],i=e.find(s=>s.hasAttribute("data-shoelace"));if(i)si(i.getAttribute("data-shoelace"));else{const s=e.find(n=>/shoelace(\.min)?\.js($|\?)/.test(n.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(n.src));let o="";s&&(o=s.getAttribute("src")),si(o.split("/").slice(0,-1).join("/"))}}return ve.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}var Qo={name:"default",resolver:t=>Jo(`assets/icons/${t}.svg`)},tn=Qo,oi={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},en={name:"system",resolver:t=>t in oi?`data:image/svg+xml,${encodeURIComponent(oi[t])}`:""},sn=en,on=[tn,sn],ye=[];function nn(t){ye.push(t)}function rn(t){ye=ye.filter(e=>e!==t)}function ni(t){return on.find(e=>e.name===t)}var an=Z`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`,$t=Symbol(),Dt=Symbol(),de,ue=new Map,J=class extends M{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(t,e){var i;let s;if(e?.spriteSheet)return this.svg=B`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`,this.svg;try{if(s=await fetch(t,{mode:"cors"}),!s.ok)return s.status===410?$t:Dt}catch{return Dt}try{const o=document.createElement("div");o.innerHTML=await s.text();const n=o.firstElementChild;if(((i=n?.tagName)==null?void 0:i.toLowerCase())!=="svg")return $t;de||(de=new DOMParser);const a=de.parseFromString(n.outerHTML,"text/html").body.querySelector("svg");return a?(a.part.add("svg"),document.adoptNode(a)):$t}catch{return $t}}connectedCallback(){super.connectedCallback(),nn(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),rn(this)}getIconSource(){const t=ni(this.library);return this.name&&t?{url:t.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;const{url:e,fromLibrary:i}=this.getIconSource(),s=i?ni(this.library):void 0;if(!e){this.svg=null;return}let o=ue.get(e);if(o||(o=this.resolveIcon(e,s),ue.set(e,o)),!this.initialRender)return;const n=await o;if(n===Dt&&ue.delete(e),e===this.getIconSource().url){if(Ho(n)){if(this.svg=n,s){await this.updateComplete;const r=this.shadowRoot.querySelector("[part='svg']");typeof s.mutator=="function"&&r&&s.mutator(r)}return}switch(n){case Dt:case $t:this.svg=null,this.emit("sl-error");break;default:this.svg=n.cloneNode(!0),(t=s?.mutator)==null||t.call(s,this.svg),this.emit("sl-load")}}}render(){return this.svg}};J.styles=[rt,an];p([Cs()],J.prototype,"svg",2);p([g({reflect:!0})],J.prototype,"name",2);p([g()],J.prototype,"src",2);p([g()],J.prototype,"label",2);p([g({reflect:!0})],J.prototype,"library",2);p([K("label")],J.prototype,"handleLabelChange",1);p([K(["name","src","library"])],J.prototype,"setIcon",1);var T=class extends M{constructor(){super(...arguments),this.localize=new Rt(this),this.type="normal",this.checked=!1,this.value="",this.loading=!1,this.disabled=!1,this.hasSlotController=new Go(this,"submenu"),this.submenuController=new Xo(this,this.hasSlotController),this.handleHostClick=t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())},this.handleMouseOver=t=>{this.focus(),t.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){const t=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=t;return}t!==this.cachedTextLabel&&(this.cachedTextLabel=t,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return Zo(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const t=this.localize.dir()==="rtl",e=this.submenuController.isExpanded();return B`
      <div
        id="anchor"
        part="base"
        class=${Lt({"menu-item":!0,"menu-item--rtl":t,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":e})}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${!!e}"
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <sl-icon name=${t?"chevron-left":"chevron-right"} library="system" aria-hidden="true"></sl-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
        ${this.loading?B` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `:""}
      </div>
    `}};T.styles=[rt,Bo];T.dependencies={"sl-icon":J,"sl-popup":x,"sl-spinner":zi};p([I("slot:not([name])")],T.prototype,"defaultSlot",2);p([I(".menu-item")],T.prototype,"menuItem",2);p([g()],T.prototype,"type",2);p([g({type:Boolean,reflect:!0})],T.prototype,"checked",2);p([g()],T.prototype,"value",2);p([g({type:Boolean,reflect:!0})],T.prototype,"loading",2);p([g({type:Boolean,reflect:!0})],T.prototype,"disabled",2);p([K("checked")],T.prototype,"handleCheckedChange",1);p([K("disabled")],T.prototype,"handleDisabledChange",1);p([K("type")],T.prototype,"handleTypeChange",1);T.define("sl-menu-item");var ln=Z`
  :host {
    --color: var(--sl-panel-border-color);
    --width: var(--sl-panel-border-width);
    --spacing: var(--sl-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`,ne=class extends M{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};ne.styles=[rt,ln];p([g({type:Boolean,reflect:!0})],ne.prototype,"vertical",2);p([K("vertical")],ne.prototype,"handleVerticalChange",1);ne.define("sl-divider");document.addEventListener("DOMContentLoaded",()=>{Ni(),Bi(),Hi(),Ui()});
