/*! flow-schema-madz (google-flow-card) — fork of schematic-flow-card v0.1.0 — MIT licensed */
function t(t,e,i,o){var r,n=arguments.length,s=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(n<3?r(s):n>3?r(e,i,s):r(e,i))||s);return n>3&&s&&Object.defineProperty(e,i,s),s}"function"==typeof SuppressedError&&SuppressedError;const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),r=new WeakMap;let n=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=r.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&r.set(e,t))}return t}toString(){return this.cssText}};const s=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1],t[0]);return new n(i,t,o)},a=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,o))(e)})(t):t,{is:c,defineProperty:l,getOwnPropertyDescriptor:h,getOwnPropertyNames:d,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,f=globalThis,_=f.trustedTypes,m=_?_.emptyScript:"",g=f.reactiveElementPolyfillSupport,$=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?m:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},v=(t,e)=>!c(t,e),b={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:v};Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;let x=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=b){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(t,i,e);void 0!==o&&l(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){const{get:o,set:r}=h(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:o,set(e){const n=o?.call(this);r?.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty($("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty($("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty($("properties"))){const t=this.properties,e=[...d(t),...p(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,o)=>{if(i)t.adoptedStyleSheets=o.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of o){const o=document.createElement("style"),r=e.litNonce;void 0!==r&&o.setAttribute("nonce",r),o.textContent=i.cssText,t.appendChild(o)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,i);if(void 0!==o&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:y).toAttribute(e,i.type);this._$Em=t,null==r?this.removeAttribute(o):this.setAttribute(o,r),this._$Em=null}}_$AK(t,e){const i=this.constructor,o=i._$Eh.get(t);if(void 0!==o&&this._$Em!==o){const t=i.getPropertyOptions(o),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=o;const n=r.fromAttribute(e,t.type);this[o]=n??this._$Ej?.get(o)??n,this._$Em=null}}requestUpdate(t,e,i,o=!1,r){if(void 0!==t){const n=this.constructor;if(!1===o&&(r=this[t]),i??=n.getPropertyOptions(t),!((i.hasChanged??v)(r,e)||i.useDefault&&i.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:o,wrapped:r},n){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),!0!==r||void 0!==n)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===o&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,o=this[e];!0!==t||this._$AL.has(e)||void 0===o||this.C(e,void 0,i,o)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[$("elementProperties")]=new Map,x[$("finalized")]=new Map,g?.({ReactiveElement:x}),(f.reactiveElementVersions??=[]).push("2.1.2");const w=globalThis,A=t=>t,E=w.trustedTypes,S=E?E.createPolicy("lit-html",{createHTML:t=>t}):void 0,k="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,M="?"+C,P=`<${M}>`,O=document,U=()=>O.createComment(""),H=t=>null===t||"object"!=typeof t&&"function"!=typeof t,N=Array.isArray,T="[ \t\n\f\r]",R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,j=/-->/g,z=/>/g,I=RegExp(`>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),L=/'/g,D=/"/g,B=/^(?:script|style|textarea|title)$/i,W=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),F=W(1),V=W(2),q=Symbol.for("lit-noChange"),G=Symbol.for("lit-nothing"),J=new WeakMap,K=O.createTreeWalker(O,129);function Y(t,e){if(!N(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(e):e}const Z=(t,e)=>{const i=t.length-1,o=[];let r,n=2===e?"<svg>":3===e?"<math>":"",s=R;for(let e=0;e<i;e++){const i=t[e];let a,c,l=-1,h=0;for(;h<i.length&&(s.lastIndex=h,c=s.exec(i),null!==c);)h=s.lastIndex,s===R?"!--"===c[1]?s=j:void 0!==c[1]?s=z:void 0!==c[2]?(B.test(c[2])&&(r=RegExp("</"+c[2],"g")),s=I):void 0!==c[3]&&(s=I):s===I?">"===c[0]?(s=r??R,l=-1):void 0===c[1]?l=-2:(l=s.lastIndex-c[2].length,a=c[1],s=void 0===c[3]?I:'"'===c[3]?D:L):s===D||s===L?s=I:s===j||s===z?s=R:(s=I,r=void 0);const d=s===I&&t[e+1].startsWith("/>")?" ":"";n+=s===R?i+P:l>=0?(o.push(a),i.slice(0,l)+k+i.slice(l)+C+d):i+C+(-2===l?e:d)}return[Y(t,n+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),o]};class Q{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let r=0,n=0;const s=t.length-1,a=this.parts,[c,l]=Z(t,e);if(this.el=Q.createElement(c,i),K.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(o=K.nextNode())&&a.length<s;){if(1===o.nodeType){if(o.hasAttributes())for(const t of o.getAttributeNames())if(t.endsWith(k)){const e=l[n++],i=o.getAttribute(t).split(C),s=/([.?@])?(.*)/.exec(e);a.push({type:1,index:r,name:s[2],strings:i,ctor:"."===s[1]?ot:"?"===s[1]?rt:"@"===s[1]?nt:it}),o.removeAttribute(t)}else t.startsWith(C)&&(a.push({type:6,index:r}),o.removeAttribute(t));if(B.test(o.tagName)){const t=o.textContent.split(C),e=t.length-1;if(e>0){o.textContent=E?E.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],U()),K.nextNode(),a.push({type:2,index:++r});o.append(t[e],U())}}}else if(8===o.nodeType)if(o.data===M)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=o.data.indexOf(C,t+1));)a.push({type:7,index:r}),t+=C.length-1}r++}}static createElement(t,e){const i=O.createElement("template");return i.innerHTML=t,i}}function X(t,e,i=t,o){if(e===q)return e;let r=void 0!==o?i._$Co?.[o]:i._$Cl;const n=H(e)?void 0:e._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),void 0===n?r=void 0:(r=new n(t),r._$AT(t,i,o)),void 0!==o?(i._$Co??=[])[o]=r:i._$Cl=r),void 0!==r&&(e=X(t,r._$AS(t,e.values),r,o)),e}class tt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,o=(t?.creationScope??O).importNode(e,!0);K.currentNode=o;let r=K.nextNode(),n=0,s=0,a=i[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new et(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new st(r,this,t)),this._$AV.push(e),a=i[++s]}n!==a?.index&&(r=K.nextNode(),n++)}return K.currentNode=O,o}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class et{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,o){this.type=2,this._$AH=G,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=X(this,t,e),H(t)?t===G||null==t||""===t?(this._$AH!==G&&this._$AR(),this._$AH=G):t!==this._$AH&&t!==q&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>N(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==G&&H(this._$AH)?this._$AA.nextSibling.data=t:this.T(O.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,o="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=Q.createElement(Y(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(e);else{const t=new tt(o,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=J.get(t.strings);return void 0===e&&J.set(t.strings,e=new Q(t)),e}k(t){N(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,o=0;for(const r of t)o===e.length?e.push(i=new et(this.O(U()),this.O(U()),this,this.options)):i=e[o],i._$AI(r),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=A(t).nextSibling;A(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class it{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,o,r){this.type=1,this._$AH=G,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=G}_$AI(t,e=this,i,o){const r=this.strings;let n=!1;if(void 0===r)t=X(this,t,e,0),n=!H(t)||t!==this._$AH&&t!==q,n&&(this._$AH=t);else{const o=t;let s,a;for(t=r[0],s=0;s<r.length-1;s++)a=X(this,o[i+s],e,s),a===q&&(a=this._$AH[s]),n||=!H(a)||a!==this._$AH[s],a===G?t=G:t!==G&&(t+=(a??"")+r[s+1]),this._$AH[s]=a}n&&!o&&this.j(t)}j(t){t===G?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class ot extends it{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===G?void 0:t}}class rt extends it{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==G)}}class nt extends it{constructor(t,e,i,o,r){super(t,e,i,o,r),this.type=5}_$AI(t,e=this){if((t=X(this,t,e,0)??G)===q)return;const i=this._$AH,o=t===G&&i!==G||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==G&&(i===G||o);o&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class st{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){X(this,t)}}const at=w.litHtmlPolyfillSupport;at?.(Q,et),(w.litHtmlVersions??=[]).push("3.3.2");const ct=globalThis;class lt extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const o=i?.renderBefore??e;let r=o._$litPart$;if(void 0===r){const t=i?.renderBefore??null;o._$litPart$=r=new et(e.insertBefore(U(),t),t,void 0,i??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return q}}lt._$litElement$=!0,lt.finalized=!0,ct.litElementHydrateSupport?.({LitElement:lt});const ht=ct.litElementPolyfillSupport;ht?.({LitElement:lt}),(ct.litElementVersions??=[]).push("4.2.2");const dt=t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},pt={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:v},ut=(t=pt,e,i)=>{const{kind:o,metadata:r}=i;let n=globalThis.litPropertyMetadata.get(r);if(void 0===n&&globalThis.litPropertyMetadata.set(r,n=new Map),"setter"===o&&((t=Object.create(t)).wrapped=!0),n.set(i.name,t),"accessor"===o){const{name:o}=i;return{set(i){const r=e.get.call(this);e.set.call(this,i),this.requestUpdate(o,r,t,!0,i)},init(e){return void 0!==e&&this.C(o,void 0,t,e),e}}}if("setter"===o){const{name:o}=i;return function(i){const r=this[o];e.call(this,i),this.requestUpdate(o,r,t,!0,i)}}throw Error("Unsupported decorator location: "+o)};function ft(t){return(e,i)=>"object"==typeof i?ut(t,e,i):((t,e,i)=>{const o=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),o?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}let _t=class extends lt{setConfig(t){this._config=t,this._config}render(){return F`
      <div class="notice">
        <strong>Visual editor coming soon</strong>
        Edit this card as YAML for now. Use the Layout tab to resize its
        grid cells, and the Visibility tab to gate it on entity state.
      </div>
    `}};_t.styles=s`
    .notice {
      padding: 16px;
      border-radius: 8px;
      background: var(--secondary-background-color, rgba(0, 0, 0, 0.04));
      color: var(--secondary-text-color);
      font-size: 0.9rem;
      line-height: 1.4;
    }
    .notice strong {
      color: var(--primary-text-color);
      display: block;
      margin-bottom: 6px;
    }
  `,t([ft({attribute:!1})],_t.prototype,"hass",void 0),_t=t([dt("google-flow-card-editor")],_t);const mt=s`
  :host {
    display: block;
  }

  /* Let <ha-card> keep its own background, border-radius, and box-shadow
     so the card visually matches the rest of the dashboard. We only lay
     out inner content. */
  ha-card {
    display: flex;
    flex-direction: column;
    height: 100%;
    color: var(--primary-text-color);
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 16px;
    flex: 1;
    min-height: 0;
  }

  .header {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .header__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: color-mix(in srgb, var(--primary-color) 18%, transparent);
    color: var(--primary-color);
    --mdc-icon-size: 22px;
  }

  .header__text {
    flex: 1;
    min-width: 0;
  }

  .header__title {
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.2;
    color: var(--primary-text-color);
  }

  .header__subtitle {
    font-size: 0.8rem;
    color: var(--secondary-text-color);
    line-height: 1.2;
    margin-top: 2px;
  }

  .chips {
    display: flex;
    gap: 8px;
    overflow-x: auto;
    scrollbar-width: none;
    padding-bottom: 2px;
  }
  .chips::-webkit-scrollbar { display: none; }

  .chip {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 12px;
    border-radius: 999px;
    background: var(--ha-card-background, var(--card-background-color));
    border: 1px solid var(--divider-color);
    color: var(--primary-text-color);
    font-size: 0.8rem;
    font-family: inherit;
    cursor: pointer;
    white-space: nowrap;
    transition: background 200ms ease, border-color 200ms ease;
    --chip-accent: var(--primary-color);
  }

  .chip:hover {
    border-color: var(--chip-accent);
    background: color-mix(in srgb, var(--chip-accent) 8%, transparent);
  }

  .chip__icon {
    --mdc-icon-size: 16px;
    color: var(--chip-accent);
  }

  .chip__label {
    color: var(--secondary-text-color);
  }

  .chip__value {
    font-weight: 500;
    color: var(--primary-text-color);
  }

  .diagram {
    width: 100%;
    flex: 1;
    min-height: 0;
    overflow: visible;
    font-family: var(--paper-font-body1_-_font-family, 'Roboto', sans-serif);
  }

  /* <foreignObject> wrapper around HA's <ha-icon> inside a node tile. */
  .node__icon-wrap {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--primary-color);
    --mdc-icon-size: 22px;
  }

  .node--source .node__icon-wrap {
    color: var(--warning-color, #ff9800);
  }

  .node--sink .node__icon-wrap {
    color: var(--info-color, #039be5);
  }

  /* ---------- pipes ---------- */

  .pipe {
    cursor: pointer;
  }

  .pipe__track {
    fill: none;
    stroke: var(--divider-color);
    stroke-width: 10;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .pipe__flow {
    fill: none;
    stroke: var(--primary-color);
    stroke-width: 4;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 6 12;
    transition: stroke 200ms ease, opacity 200ms ease;
  }

  .pipe--animated .pipe__flow {
    animation: flow 2s linear infinite;
  }

  .pipe--inactive .pipe__flow {
    stroke: var(--divider-color) !important;
    animation: none !important;
    opacity: 0.5;
  }

  @keyframes flow {
    to { stroke-dashoffset: -36; }
  }

  .pipe-label__bg {
    fill: var(--card-background-color);
    stroke: var(--divider-color);
    stroke-width: 1;
  }

  .pipe-label__text {
    fill: var(--primary-text-color);
    font-size: 11px;
    font-weight: 500;
  }

  /* ---------- nodes ---------- */

  .node {
    cursor: pointer;
  }

  .node__tile {
    fill: var(--card-background-color);
    stroke: var(--node-border-color, var(--divider-color));
    stroke-width: 1;
    filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.08));
    transition: stroke 200ms ease, fill 200ms ease, filter 200ms ease;
  }

  .node:hover .node__tile {
    stroke: var(--primary-color);
  }

  /* border_width: 0 -> no frame at all and no hover highlight */
  .node--no-border .node__tile,
  .node--no-border:hover .node__tile,
  .node--no-border:focus-within .node__tile {
    stroke: none;
    stroke-width: 0;
  }

  .node__icon-bg {
    fill: color-mix(in srgb, var(--primary-color) 18%, var(--card-background-color));
    transition: fill 200ms ease;
  }

  .node__icon {
    fill: var(--primary-color);
    font-size: 14px;
  }

  .node__label {
    fill: var(--primary-text-color);
    font-size: 13px;
    font-weight: 500;
  }

  .node__value {
    fill: var(--secondary-text-color);
    font-size: 11px;
  }

  .node--source .node__tile {
    fill: color-mix(in srgb, var(--warning-color, #ff9800) 10%, var(--card-background-color));
  }

  .node--sink .node__tile {
    fill: color-mix(in srgb, var(--info-color, #039be5) 10%, var(--card-background-color));
  }

  /* ---------- controls ---------- */

  .control {
    cursor: pointer;
  }

  .control__track {
    fill: var(--divider-color);
    transition: fill 200ms ease;
  }

  .control--on .control__track {
    fill: var(--primary-color);
  }

  .control__thumb {
    fill: #ffffff;
    filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.25));
    transition: cx 200ms ease;
  }

  .control__label {
    fill: var(--secondary-text-color);
    font-size: 11px;
  }

  /* ---------- annotations ---------- */

  .annotation__bg {
    fill: var(--card-background-color);
    stroke: var(--divider-color);
  }

  .annotation__text {
    fill: var(--primary-text-color);
    font-size: 11px;
    font-weight: 500;
  }
`,gt=new Set(["unavailable","unknown","none",""]),$t=["on","open","home","active","playing","heat","cool"],yt={temperature:[{at:10,color:"#3a7bd5"},{at:20,color:"#56b3c7"},{at:30,color:"#f1c40f"},{at:45,color:"#e67e22"},{at:60,color:"#e74c3c"}],electricity:[{at:0,color:"#4a90e2"},{at:2e3,color:"#27ae60"},{at:5e3,color:"#f1c40f"},{at:1e4,color:"#e74c3c"}],flow:[{at:0,color:"var(--divider-color, #c0c0c0)"},{at:50,color:"#56b3c7"},{at:100,color:"#3a7bd5"}]};function vt(t,e){return t&&e?t.states[e]??null:null}function bt(t,e){const i=vt(t,e);if(!i)return null;if(gt.has(i.state))return null;const o=Number(i.state);return Number.isFinite(o)?o:null}function xt(t){if(!t)return null;if(t.stops&&t.stops.length>0)return t.stops;const e="auto"===t.scale||void 0===t.scale?"temperature":t.scale;return yt[e]??null}function wt(t,e){if(null==e||0===e.length)return null;if(null==t||!Number.isFinite(t))return null;if(t<=e[0].at)return e[0].color;const i=e[e.length-1];if(t>=i.at)return i.color;for(let i=0;i<e.length-1;i++){const o=e[i],r=e[i+1];if(t>=o.at&&t<=r.at){const e=(t-o.at)/(r.at-o.at);return At(o.color,r.color,e)}}return i.color}
/* ---------------------------------------------------------------------------
 * flow-schema-madz: optional node styling parameters
 *
 * Each parameter may be given globally on the node (e.g. `body_color: "#fff"`)
 * and/or dynamically inside the node's `color.stops` entries. A stop value
 * wins over the node-level value; when neither is set the card's original
 * fallback styling applies.
 * ------------------------------------------------------------------------- */
const NODE_STYLE_KEYS = [
  "body_color",
  "body_opacity",
  "border_width",
  "border_color",
  "border_radius",
  "icon_color",
  "icon_opacity",
  "icon_bg_color",
  "icon_bg_opacity",
  "icon_color_font",
  "font_size",
  "status_glow",
];

/**
 * Interpolate an arbitrary optional parameter (`key`) from the `stops` array
 * for the numeric value `t` -- the generic counterpart of wt() (color only).
 *
 * - Stops that do not define `key` are ignored, so a parameter may be given on
 *   only some of the stops.
 * - Hex colors are blended with At(); numbers are interpolated linearly;
 *   everything else (CSS vars, "12px", booleans) switches at the midpoint.
 * - Returns null when nothing can be resolved (no stops, no stop defines the
 *   key, entity value missing) so the caller can fall back.
 */
function wt_param(t, stops, key) {
  if (!Array.isArray(stops) || stops.length === 0) return null;
  const defined = stops
    .filter(
      (st) =>
        st &&
        typeof st === "object" &&
        Number.isFinite(Number(st.at)) &&
        st[key] !== undefined &&
        st[key] !== null
    )
    .sort((a, b) => Number(a.at) - Number(b.at));
  if (defined.length === 0) return null;
  if (t == null || !Number.isFinite(t)) return null;
  const first = defined[0];
  if (t <= Number(first.at)) return first[key];
  const last = defined[defined.length - 1];
  if (t >= Number(last.at)) return last[key];
  for (let i = 0; i < defined.length - 1; i++) {
    const lo = defined[i];
    const hi = defined[i + 1];
    const loAt = Number(lo.at);
    const hiAt = Number(hi.at);
    if (t >= loAt && t <= hiAt) {
      const ratio = hiAt === loAt ? 0 : (t - loAt) / (hiAt - loAt);
      return wt_param_mix(lo[key], hi[key], ratio);
    }
  }
  return last[key];
}

/** Blend two stop values according to their type. */
function wt_param_mix(a, b, ratio) {
  if (typeof a === "string" && typeof b === "string" && St(a) && St(b)) {
    return At(a, b, ratio);
  }
  if (typeof a === "number" && typeof b === "number") {
    return a + (b - a) * ratio;
  }
  return ratio < 0.5 ? a : b;
}

/** Clamp an opacity-like value to 0..1; null when not numeric. */
function clamp01(v) {
  const n = typeof v === "string" ? Number(v) : v;
  if (typeof n !== "number" || !Number.isFinite(n)) return null;
  return Math.max(0, Math.min(1, n));
}

/** Numbers become `px`, strings are passed through unchanged. */
function cssLength(v) {
  if (typeof v === "number" && Number.isFinite(v)) {
    return `${Math.round(v * 100) / 100}px`;
  }
  if (typeof v === "string" && v.trim() !== "") return v.trim();
  return null;
}

/** Numeric value in px (plain number or "8px" string); null otherwise. */
function pxNumber(v) {
  if (typeof v === "number" && Number.isFinite(v)) return v;
  if (typeof v === "string") {
    const n = parseFloat(v);
    return Number.isFinite(n) ? n : null;
  }
  return null;
}

/**
 * Resolve all optional style parameters for one node.
 * `value` is the numeric state of the node's color entity, `stops` the
 * node's color stops (null when the node has no `color` block).
 */
function resolveNodeStyle(node, value, stops) {
  const out = {};
  for (const key of NODE_STYLE_KEYS) {
    const dynamic = wt_param(value, stops, key);
    out[key] = dynamic !== null && dynamic !== undefined ? dynamic : node[key] ?? null;
  }
  return out;
}

/** Color used for the neon glow when `status_glow` is not itself a color. */
function glowColor(glow, accent, bodyColor) {
  if (typeof glow === "string") {
    const trimmed = glow.trim();
    const lowered = trimmed.toLowerCase();
    if (["false", "off", "none", "no", "0", ""].includes(lowered)) return null;
    if (["true", "on", "yes", "1"].includes(lowered)) {
      return accent ?? bodyColor ?? "var(--primary-color)";
    }
    return trimmed; // hex, rgb(), or a CSS variable
  }
  if (glow === true) return accent ?? bodyColor ?? "var(--primary-color)";
  return null;
}

/**
 * Turn the resolved parameters into the inline styles / attributes that the
 * node template applies. `accent` is the dynamic color computed by wt().
 */
function nodeStyleStrings(p, accent) {
  const tile = [];
  const iconBg = [];
  const icon = [];
  const text = [];

  // --- body / tile ---------------------------------------------------------
  if (p.body_color) {
    tile.push(`fill: ${p.body_color};`);
  } else if (accent) {
    tile.push(`fill: color-mix(in srgb, ${accent} 15%, var(--card-background-color));`);
  }
  const bodyOpacity = clamp01(p.body_opacity);
  if (bodyOpacity !== null) tile.push(`fill-opacity: ${bodyOpacity};`);

  const borderWidth = pxNumber(p.border_width);
  const noBorder = borderWidth !== null && borderWidth <= 0;
  if (noBorder) {
    tile.push("stroke: none;", "stroke-width: 0;");
  } else {
    if (borderWidth !== null) tile.push(`stroke-width: ${borderWidth};`);
    if (p.border_color) tile.push(`--node-border-color: ${p.border_color};`);
  }

  const glow = glowColor(p.status_glow, accent, p.body_color);
  if (glow) {
    tile.push(`filter: drop-shadow(0 0 4px ${glow}) drop-shadow(0 0 10px ${glow});`);
  }

  const radius = pxNumber(p.border_radius);

  // --- icon circle ---------------------------------------------------------
  if (p.icon_bg_color) {
    iconBg.push(`fill: ${p.icon_bg_color};`);
  } else if (accent) {
    iconBg.push(`fill: ${accent};`);
  }
  const iconBgOpacity = clamp01(p.icon_bg_opacity);
  if (iconBgOpacity !== null) iconBg.push(`fill-opacity: ${iconBgOpacity};`);

  // --- icon ----------------------------------------------------------------
  if (p.icon_color) icon.push(`color: ${p.icon_color};`);
  const iconOpacity = clamp01(p.icon_opacity);
  if (iconOpacity !== null) icon.push(`opacity: ${iconOpacity};`);

  // --- text ----------------------------------------------------------------
  if (p.icon_color_font) text.push(`fill: ${p.icon_color_font};`);
  const fontSize = cssLength(p.font_size);
  if (fontSize) text.push(`font-size: ${fontSize};`);

  return {
    tile: tile.join(" "),
    iconBg: iconBg.join(" "),
    icon: icon.join(" "),
    text: text.join(" "),
    radius: radius !== null && radius >= 0 ? radius : 14,
    noBorder,
  };
}
function At(t,e,i){const o=St(t),r=St(e);if(!o||!r)return i<.5?t:e;const n=Math.round(o[0]+(r[0]-o[0])*i),s=Math.round(o[1]+(r[1]-o[1])*i),a=Math.round(o[2]+(r[2]-o[2])*i);return`#${Et(n)}${Et(s)}${Et(a)}`}function Et(t){const e=Math.max(0,Math.min(255,t)).toString(16);return 1===e.length?`0${e}`:e}function St(t){if(!t.startsWith("#"))return null;const e=t.slice(1);if(3===e.length){const t=parseInt(e[0]+e[0],16),i=parseInt(e[1]+e[1],16),o=parseInt(e[2]+e[2],16);return Number.isFinite(t+i+o)?[t,i,o]:null}if(6===e.length){const t=parseInt(e.slice(0,2),16),i=parseInt(e.slice(2,4),16),o=parseInt(e.slice(4,6),16);return Number.isFinite(t+i+o)?[t,i,o]:null}return null}function kt(t){return t?"string"==typeof t?{entity:t,activeStates:$t}:{entity:t.entity,activeStates:t.active_states??$t}:null}function Ct(t){return"string"==typeof t?{entity:t}:t}function Mt(t,e){if(void 0!==t.unit)return t.unit;const i=vt(e,t.entity),o=i?.attributes?.unit_of_measurement;return"string"==typeof o?o:""}function Pt(t,e){const i=vt(e,t.entity);return!i||gt.has(i.state)?"—":i.state}const Ot=36;function Ut(t){const e=t.height,i=function(t){const e=t.labels?.length??0;return 76+(e>0?4+14*e:0)+(null!=t.control?36:0)+14}(t);return{x:t.x,y:t.y,w:t.width??150,h:null!=e?Math.max(e,i):i}}function Ht(t,e){const i=Ut(t);switch(e){case"left":return[i.x,i.y+i.h/2];case"right":return[i.x+i.w,i.y+i.h/2];case"top":return[i.x+i.w/2,i.y];case"bottom":return[i.x+i.w/2,i.y+i.h];case"center":return[i.x+i.w/2,i.y+i.h/2]}}function Nt(t,e){const i=Ut(t),o=i.x+i.w/2,r=i.y+i.h/2,n=e[0]-o,s=e[1]-r;return Math.abs(n)*i.h>Math.abs(s)*i.w?n>=0?"right":"left":s>=0?"bottom":"top"}function Tt(t){const e=Ut(t);return[e.x+e.w/2,e.y+e.h/2]}function Rt(t,e,i){const o=t.defaults?.pipes??{};return t.pipes.map(r=>{const n={...o,...r},s=t.nodes[n.from],a=t.nodes[n.to];if(!s||!a)return V`<!-- pipe ${n.id} references missing node -->`;const c=function(t,e,i){const o=t.waypoints??[],r=o[0]??Tt(i),n=o[o.length-1]??Tt(e),s=t.from_anchor??Nt(e,r),a=t.to_anchor??Nt(i,n);let c=Ht(e,s),l=Ht(i,a);if(t.from_offset&&(c=[c[0]+t.from_offset[0],c[1]+t.from_offset[1]]),t.to_offset&&(l=[l[0]+t.to_offset[0],l[1]+t.to_offset[1]]),0===o.length){const t=function(t,e,i,o){const r="left"===i||"right"===i,n="left"===o||"right"===o;if(r&&n){const i=(t[0]+e[0])/2;return[[i,t[1]],[i,e[1]]]}if(!r&&!n){const i=(t[1]+e[1])/2;return[[t[0],i],[e[0],i]]}return r?[[e[0],t[1]]]:[[t[0],e[1]]]}(c,l,s,a);return[c,...t,l]}return[c,...o,l]}(n,s,a),l=function(t){if(0===t.length)return"";const[e,...i]=t;return`M ${e[0]} ${e[1]} `+i.map(t=>`L ${t[0]} ${t[1]}`).join(" ")}(c),h=function(t,e){const i=kt(e);if(!i)return!0;const o=vt(t,i.entity);return!!o&&!gt.has(o.state)&&i.activeStates.includes(o.state)}(e,n.gated_by),d=n.color,p=d?.entity??n.animation?.entity,u=bt(e,p),f=xt(d),_=h?wt(u,f)??"var(--primary-color)":"var(--divider-color, #e0e0e0)",m=bt(e,n.animation?.entity),g=h?function(t,e){if(!e)return null;if(null==t||!Number.isFinite(t))return null;const i=e.min??0,o=e.max;return o<=i||t<=i?null:4-(Math.min(t,o)-i)/(o-i)*3.5}(m,n.animation):null,$=null!=g,y=p??n.animation?.entity??kt(n.gated_by)?.entity,v=y?()=>i.onMoreInfo(y):void 0,b=$?`stroke: ${_}; animation-duration: ${g.toFixed(2)}s;`:`stroke: ${_};`;return V`
      <g class="pipe ${$?"pipe--animated":""} ${h?"":"pipe--inactive"}"
         @click=${v}
         role="button"
         tabindex="0">
        <path class="pipe__track" d=${l} />
        <path class="pipe__flow" d=${l} style=${b} />
        ${function(t,e,i){return t.labels&&0!==t.labels.length?t.labels.map(t=>{const o="string"==typeof(r=t)?{entity:r}:r;var r;const n=o.position??"mid",s="start"===n?0:"end"===n?1:"along"===n?o.offset??.5:.5,[a,c]=function(t,e){if(0===t.length)return[0,0];if(1===t.length)return t[0];const i=Math.max(0,Math.min(1,e)),o=[];let r=0;for(let e=0;e<t.length-1;e++){const i=t[e+1][0]-t[e][0],n=t[e+1][1]-t[e][1],s=Math.hypot(i,n);o.push(s),r+=s}if(0===r)return t[0];let n=i*r;for(let e=0;e<o.length;e++){if(n<=o[e]){const i=0===o[e]?0:n/o[e];return[t[e][0]+(t[e+1][0]-t[e][0])*i,t[e][1]+(t[e+1][1]-t[e][1])*i]}n-=o[e]}return t[t.length-1]}(e,s),l="above"===n?-14:"below"===n?18:-14,h=Pt(o,i),d=Mt(o,i);return V`
      <g class="pipe-label" transform="translate(${a}, ${c+l})">
        <rect class="pipe-label__bg" rx="6" ry="6"
              x="-28" y="-11" width="56" height="22" />
        <text class="pipe-label__text" text-anchor="middle" dominant-baseline="central">${d?`${h} ${d}`:h}</text>
      </g>
    `}):G}(n,c,e)}
      </g>
    `})}function jt(t,e,i){return Object.entries(t.nodes).map(([t,o])=>function(t,e,i,o){const r=Ut(e),n=e.kind??"process";let s=null;let nodeValue=null,nodeStops=null;if(e.color){nodeValue=bt(i,e.color.entity),nodeStops=xt(e.color),s=wt(nodeValue,nodeStops)}const S=nodeStyleStrings(resolveNodeStyle(e,nodeValue,nodeStops),s);const a=(g=e.control,g?"string"==typeof g?{entity:g}:g:null),c=e.primary_entity??(e.labels&&e.labels.length>0?Ct(e.labels[0]).entity:a?.entity),l=c?()=>o.onMoreInfo(c):void 0,h=(e.labels??[]).map(t=>{const e=Ct(t),o=Pt(e,i),r=Mt(e,i);return r?`${o} ${r}`:o}),d=e.label??t,p=r.x+r.w/2,u=r.y+14+18,f=r.y+14+Ot+10+8,_=f+8+4+7,m=r.y+r.h-14-14;var g;return V`
    <g class="node node--${n} ${S.noBorder?"node--no-border":""}" data-node-id=${t}>
      <rect class="node__tile"
            x=${r.x} y=${r.y} width=${r.w} height=${r.h}
            rx=${S.radius} ry=${S.radius}
            @click=${l}
            role="button"
            tabindex="0"
            style=${S.tile} />
      <circle class="node__icon-bg"
              cx=${p} cy=${u} r=${18}
              style=${S.iconBg} />
      ${e.icon?V`
          <foreignObject
            x=${p-18}
            y=${u-18}
            width=${Ot}
            height=${Ot}
          >
            <div xmlns="http://www.w3.org/1999/xhtml" class="node__icon-wrap">
              <ha-icon icon=${e.icon} style=${S.icon}></ha-icon>
            </div>
          </foreignObject>`:G}
      <text class="node__label"
            x=${p}
            y=${f}
            text-anchor="middle"
            dominant-baseline="central"
            style=${S.text}>${d}</text>
      ${h.map((t,e)=>V`
          <text class="node__value"
                x=${p}
                y=${_+14*e}
                text-anchor="middle"
                dominant-baseline="central"
                style=${S.text}>${t}</text>
        `)}
      ${a?function(t,e,i,o,r){const n=vt(o,t.entity),s="on"===n?.state;return V`
    <g class="control ${s?"control--on":""}"
       transform="translate(${e}, ${i})"
       @click=${e=>{e.stopPropagation(),r.onToggle(t.entity)}}
       role="switch"
       aria-checked=${s}
       tabindex="0">
      <rect class="control__track" x="-22" y="-12" width="44" height="24" rx="12" ry="12" />
      <circle class="control__thumb" cx=${s?10:-10} cy="0" r="9" />
      ${t.label?V`<text class="control__label" x="0" y="26" text-anchor="middle">${t.label}</text>`:G}
    </g>
  `}(a,p,m,i,o):G}
    </g>
  `}(t,o,e,i))}function zt(t,e,i){return t&&0!==t.length?F`
    <div class="chips">
      ${t.map(t=>{const o=Ct(t),r=function(t,e){const i=vt(t,e);return!!i&&!gt.has(i.state)}(e,o.entity),n=r?Pt(o,e):"—",s=r?Mt(o,e):"",a=o.label??function(t,e){if(t.label)return t.label;const i=vt(e,t.entity);return i?.attributes?.friendly_name??t.entity}(o,e);let c=null;if(o.color){c=wt(bt(e,o.color.entity??o.entity),xt(o.color))}return F`
          <button
            class="chip"
            style=${c?`--chip-accent: ${c};`:""}
            @click=${()=>i.onMoreInfo(o.entity)}
          >
            ${o.icon?F`<ha-icon class="chip__icon" icon=${o.icon}></ha-icon>`:G}
            <span class="chip__label">${a}</span>
            ${o.hide_value?G:F`<span class="chip__value">${n}${s?` ${s}`:""}</span>`}
          </button>
        `})}
    </div>
  `:G}const It=window;It.customCards=It.customCards||[],It.customCards.push({type:"google-flow-card",name:"Google Flow Card",description:"Author P&ID-style flow diagrams with explicit coordinates; works for plumbing, HVAC, electrical, and other domains.",preview:!0}),console.info("%c GOOGLE-FLOW-CARD (flow-schema-madz) %c v0.1.0 ","color: white; background: #3a7bd5; font-weight: 700;","color: #3a7bd5; background: transparent; font-weight: 700;");let Lt=class extends lt{constructor(){super(...arguments),this._handlers={onMoreInfo:t=>this._fireMoreInfo(t),onToggle:t=>{if(!this.hass)return;const e=t.split(".")[0]??"homeassistant";this.hass.callService(e,"toggle",{entity_id:t})}}}setConfig(t){if(!t)throw new Error("Invalid configuration");if(!t.canvas||!t.canvas.width||!t.canvas.height)throw new Error("canvas.width and canvas.height are required");if(!t.nodes||"object"!=typeof t.nodes)throw new Error("nodes must be a map of node id → node config");if(!Array.isArray(t.pipes))throw new Error("pipes must be an array");this._config=t}getCardSize(){return this._config?Math.max(3,Math.round(this._config.canvas.height/100)):3}getGridOptions(){const t=this._config?.canvas,e=t?t.height/t.width:.55;return{columns:"full",rows:Math.max(4,Math.min(20,Math.round(12*e)+2)),min_columns:6,min_rows:3,max_columns:48,max_rows:20}}getLayoutOptions(){const t=this.getGridOptions();return{grid_columns:t.columns,grid_rows:t.rows,grid_min_columns:t.min_columns,grid_min_rows:t.min_rows,grid_max_columns:t.max_columns,grid_max_rows:t.max_rows}}static getConfigElement(){return document.createElement("google-flow-card-editor")}static getStubConfig(){return{type:"custom:google-flow-card",title:"Flow",canvas:{width:600,height:300},nodes:{source:{x:40,y:110,label:"Source",kind:"source",icon:"mdi:water"},sink:{x:420,y:110,label:"Sink",kind:"sink",icon:"mdi:water-off"}},pipes:[{id:"main",from:"source",to:"sink"}]}}_fireMoreInfo(t){const e=new CustomEvent("hass-more-info",{bubbles:!0,composed:!0,detail:{entityId:t}});this.dispatchEvent(e)}render(){if(!this._config)return F`<ha-card></ha-card>`;const t=this._config,e=this.hass??null,{width:i,height:o}=t.canvas;return F`
      <ha-card>
        <div class="content">
          ${this._renderHeader(t)}
          ${zt(t.header_chips,e,this._handlers)}
          <svg
            class="diagram"
            viewBox="0 0 ${i} ${o}"
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
          >
            ${V`
              ${Rt(t,e,this._handlers)}
              ${jt(t,e,this._handlers)}
              ${function(t,e){return t&&0!==t.length?t.map(t=>{const i=Pt(t,e),o=Mt(t,e),r=o?`${i} ${o}`:i;return V`
      <g class="annotation" transform="translate(${t.at[0]}, ${t.at[1]})">
        <rect class="annotation__bg" rx="6" ry="6" x="-30" y="-12" width="60" height="24" />
        <text class="annotation__text" text-anchor="middle" dominant-baseline="central">${r}</text>
      </g>
    `}):G}(t.annotations,e)}
            `}
          </svg>
        </div>
      </ha-card>
    `}_renderHeader(t){return t.title||t.subtitle?F`
      <div class="header">
        <div class="header__icon">
          <ha-icon icon="mdi:pipe"></ha-icon>
        </div>
        <div class="header__text">
          ${t.title?F`<div class="header__title">${t.title}</div>`:G}
          ${t.subtitle?F`<div class="header__subtitle">${t.subtitle}</div>`:G}
        </div>
      </div>
    `:G}};Lt.styles=mt,t([ft({attribute:!1})],Lt.prototype,"hass",void 0),t([function(t){return ft({...t,state:!0,attribute:!1})}()],Lt.prototype,"_config",void 0),Lt=t([dt("google-flow-card")],Lt);export{Lt as GoogleFlowCard};
