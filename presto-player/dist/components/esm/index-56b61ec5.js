const NAMESPACE="web-components",BUILD={allRenderFn:!0,appendChildSlotFix:!1,asyncLoading:!0,asyncQueue:!1,attachStyles:!0,cloneNodeFix:!1,cmpDidLoad:!0,cmpDidRender:!0,cmpDidUnload:!1,cmpDidUpdate:!1,cmpShouldUpdate:!1,cmpWillLoad:!0,cmpWillRender:!1,cmpWillUpdate:!1,connectedCallback:!1,constructableCSS:!0,cssAnnotations:!0,devTools:!1,disconnectedCallback:!0,element:!1,event:!0,experimentalScopedSlotChanges:!1,experimentalSlotFixes:!1,formAssociated:!1,hasRenderFn:!0,hostListener:!0,hostListenerTarget:!0,hostListenerTargetBody:!1,hostListenerTargetDocument:!1,hostListenerTargetParent:!1,hostListenerTargetWindow:!0,hotModuleReplacement:!1,hydrateClientSide:!1,hydrateServerSide:!1,hydratedAttribute:!1,hydratedClass:!0,initializeNextTick:!1,invisiblePrehydration:!0,isDebug:!1,isDev:!1,isTesting:!1,lazyLoad:!0,lifecycle:!0,lifecycleDOMEvents:!1,member:!0,method:!0,mode:!1,observeAttribute:!0,profile:!1,prop:!0,propBoolean:!0,propMutable:!0,propNumber:!0,propString:!0,reflect:!0,scoped:!1,scopedSlotTextContentFix:!1,scriptDataOpts:!1,shadowDelegatesFocus:!1,shadowDom:!0,slot:!0,slotChildNodesFix:!1,slotRelocation:!0,state:!0,style:!0,svg:!0,taskQueue:!0,transformTagName:!1,updatable:!0,vdomAttribute:!0,vdomClass:!0,vdomFunctional:!0,vdomKey:!0,vdomListener:!0,vdomPropOrAttr:!0,vdomRef:!0,vdomRender:!0,vdomStyle:!0,vdomText:!0,vdomXlink:!0,watchCallback:!0};let scopeId,contentRef,hostTagName,useNativeShadowDom=!1,checkSlotFallbackVisibility=!1,checkSlotRelocate=!1,isSvgMode=!1,queuePending=!1;const createTime=(e,t="")=>()=>{},uniqueTime=(e,t)=>()=>{},HYDRATED_CSS="{visibility:hidden}.hydrated{visibility:inherit}",SLOT_FB_CSS="slot-fb{display:contents}slot-fb[hidden]{display:none}",XLINK_NS="http://www.w3.org/1999/xlink",EMPTY_OBJ={},SVG_NS="http://www.w3.org/2000/svg",HTML_NS="http://www.w3.org/1999/xhtml",isDef=e=>null!=e,isComplexType=e=>"object"==(e=typeof e)||"function"===e;function queryNonceMetaTagContent(e){var t,s,o;return null!==(o=null===(s=null===(t=e.head)||void 0===t?void 0:t.querySelector('meta[name="csp-nonce"]'))||void 0===s?void 0:s.getAttribute("content"))&&void 0!==o?o:void 0}const h=(e,t,...s)=>{let o=null,n=null,l=null,a=!1,r=!1;const i=[],$=t=>{for(let s=0;s<t.length;s++)o=t[s],Array.isArray(o)?$(o):null!=o&&"boolean"!=typeof o&&((a="function"!=typeof e&&!isComplexType(o))&&(o=String(o)),a&&r?i[i.length-1].$text$+=o:i.push(a?newVNode(null,o):o),r=a)};if($(s),t){t.key&&(n=t.key),t.name&&(l=t.name);{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}}if("function"==typeof e)return e(null===t?{}:t,i,vdomFnUtils);const c=newVNode(e,null);return c.$attrs$=t,i.length>0&&(c.$children$=i),c.$key$=n,c.$name$=l,c},newVNode=(e,t)=>({$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null,$attrs$:null,$key$:null,$name$:null}),Host={},isHost=e=>e&&e.$tag$===Host,vdomFnUtils={forEach:(e,t)=>e.map(convertToPublic).forEach(t),map:(e,t)=>e.map(convertToPublic).map(t).map(convertToPrivate)},convertToPublic=e=>({vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}),convertToPrivate=e=>{if("function"==typeof e.vtag){const t=Object.assign({},e.vattrs);return e.vkey&&(t.key=e.vkey),e.vname&&(t.name=e.vname),h(e.vtag,t,...e.vchildren||[])}const t=newVNode(e.vtag,e.vtext);return t.$attrs$=e.vattrs,t.$children$=e.vchildren,t.$key$=e.vkey,t.$name$=e.vname,t},parsePropertyValue=(e,t)=>null==e||isComplexType(e)?e:4&t?"false"!==e&&(""===e||!!e):2&t?parseFloat(e):1&t?String(e):e,getElement=e=>getHostRef(e).$hostElement$,createEvent=(e,t,s)=>{const o=getElement(e);return{emit:e=>emitEvent(o,t,{bubbles:!!(4&s),composed:!!(2&s),cancelable:!!(1&s),detail:e})}},emitEvent=(e,t,s)=>{const o=plt.ce(t,s);return e.dispatchEvent(o),o},rootAppliedStyles=new WeakMap,registerStyle=(e,t,s)=>{let o=styles.get(e);supportsConstructableStylesheets&&s?(o=o||new CSSStyleSheet,"string"==typeof o?o=t:o.replaceSync(t)):o=t,styles.set(e,o)},addStyle=(e,t,s)=>{var o;const n=getScopeId(t),l=styles.get(n);if(e=11===e.nodeType?e:doc,l)if("string"==typeof l){e=e.head||e;let s,a=rootAppliedStyles.get(e);if(a||rootAppliedStyles.set(e,a=new Set),!a.has(n)){{s=doc.createElement("style"),s.innerHTML=l;const t=null!==(o=plt.$nonce$)&&void 0!==o?o:queryNonceMetaTagContent(doc);null!=t&&s.setAttribute("nonce",t),e.insertBefore(s,e.querySelector("link"))}4&t.$flags$&&(s.innerHTML+=SLOT_FB_CSS),a&&a.add(n)}}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return n},attachStyles=e=>{const t=e.$cmpMeta$,s=e.$hostElement$,o=t.$flags$,n=(t.$tagName$,()=>{}),l=addStyle(s.shadowRoot?s.shadowRoot:s.getRootNode(),t);10&o&&(s["s-sc"]=l,s.classList.add(l+"-h")),n()},getScopeId=(e,t)=>"sc-"+e.$tagName$,setAccessor=(e,t,s,o,n,l)=>{if(s!==o){let a=isMemberInElement(e,t),r=t.toLowerCase();if("class"===t){const t=e.classList,n=parseClassList(s),l=parseClassList(o);t.remove(...n.filter((e=>e&&!l.includes(e)))),t.add(...l.filter((e=>e&&!n.includes(e))))}else if("style"===t){for(const t in s)o&&null!=o[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in o)s&&o[t]===s[t]||(t.includes("-")?e.style.setProperty(t,o[t]):e.style[t]=o[t])}else if("key"===t);else if("ref"===t)o&&o(e);else if(a||"o"!==t[0]||"n"!==t[1]){const i=isComplexType(o);if((a||i&&null!==o)&&!n)try{if(e.tagName.includes("-"))e[t]=o;else{const n=null==o?"":o;"list"===t?a=!1:null!=s&&e[t]==n||(e[t]=n)}}catch(e){}let $=!1;r!==(r=r.replace(/^xlink\:?/,""))&&(t=r,$=!0),null==o||!1===o?!1===o&&""!==e.getAttribute(t)||($?e.removeAttributeNS(XLINK_NS,t):e.removeAttribute(t)):(!a||4&l||n)&&!i&&(o=!0===o?"":o,$?e.setAttributeNS(XLINK_NS,t,o):e.setAttribute(t,o))}else if(t="-"===t[2]?t.slice(3):isMemberInElement(win,r)?r.slice(2):r[2]+t.slice(3),s||o){const n=t.endsWith(CAPTURE_EVENT_SUFFIX);t=t.replace(CAPTURE_EVENT_REGEX,""),s&&plt.rel(e,t,s,n),o&&plt.ael(e,t,o,n)}}},parseClassListRegex=/\s/,parseClassList=e=>e?e.split(parseClassListRegex):[],CAPTURE_EVENT_SUFFIX="Capture",CAPTURE_EVENT_REGEX=new RegExp(CAPTURE_EVENT_SUFFIX+"$"),updateElement=(e,t,s,o)=>{const n=11===t.$elm$.nodeType&&t.$elm$.host?t.$elm$.host:t.$elm$,l=e&&e.$attrs$||EMPTY_OBJ,a=t.$attrs$||EMPTY_OBJ;for(o of sortedAttrNames(Object.keys(l)))o in a||setAccessor(n,o,l[o],void 0,s,t.$flags$);for(o of sortedAttrNames(Object.keys(a)))setAccessor(n,o,l[o],a[o],s,t.$flags$)};function sortedAttrNames(e){return e.includes("ref")?[...e.filter((e=>"ref"!==e)),"ref"]:e}const createElm=(e,t,s,o)=>{var n;const l=t.$children$[s];let a,r,i,$=0;if(useNativeShadowDom||(checkSlotRelocate=!0,"slot"===l.$tag$&&(scopeId&&o.classList.add(scopeId+"-s"),l.$flags$|=l.$children$?2:1)),null!==l.$text$)a=l.$elm$=doc.createTextNode(l.$text$);else if(1&l.$flags$)a=l.$elm$=doc.createTextNode("");else{if(isSvgMode||(isSvgMode="svg"===l.$tag$),a=l.$elm$=doc.createElementNS(isSvgMode?SVG_NS:HTML_NS,2&l.$flags$?"slot-fb":l.$tag$),isSvgMode&&"foreignObject"===l.$tag$&&(isSvgMode=!1),updateElement(null,l,isSvgMode),null!=scopeId&&a["s-si"]!==scopeId&&a.classList.add(a["s-si"]=scopeId),l.$children$)for($=0;$<l.$children$.length;++$)r=createElm(e,l,$,a),r&&a.appendChild(r);"svg"===l.$tag$?isSvgMode=!1:"foreignObject"===a.tagName&&(isSvgMode=!0)}return a["s-hn"]=hostTagName,3&l.$flags$&&(a["s-sr"]=!0,a["s-cr"]=contentRef,a["s-sn"]=l.$name$||"",a["s-rf"]=null===(n=l.$attrs$)||void 0===n?void 0:n.ref,i=e&&e.$children$&&e.$children$[s],i&&i.$tag$===l.$tag$&&e.$elm$&&putBackInOriginalLocation(e.$elm$,!1)),a},putBackInOriginalLocation=(e,t)=>{plt.$flags$|=1;const s=Array.from(e.childNodes);if(e["s-sr"]&&BUILD.experimentalSlotFixes){let t=e;for(;t=t.nextSibling;)t&&t["s-sn"]===e["s-sn"]&&t["s-sh"]===hostTagName&&s.push(t)}for(let e=s.length-1;e>=0;e--){const o=s[e];o["s-hn"]!==hostTagName&&o["s-ol"]&&(parentReferenceNode(o).insertBefore(o,referenceNode(o)),o["s-ol"].remove(),o["s-ol"]=void 0,o["s-sh"]=void 0,checkSlotRelocate=!0),t&&putBackInOriginalLocation(o,t)}plt.$flags$&=-2},addVnodes=(e,t,s,o,n,l)=>{let a,r=e["s-cr"]&&e["s-cr"].parentNode||e;for(r.shadowRoot&&r.tagName===hostTagName&&(r=r.shadowRoot);n<=l;++n)o[n]&&(a=createElm(null,s,n,e),a&&(o[n].$elm$=a,r.insertBefore(a,referenceNode(t))))},removeVnodes=(e,t,s)=>{for(let o=t;o<=s;++o){const t=e[o];if(t){const e=t.$elm$;nullifyVNodeRefs(t),e&&(checkSlotFallbackVisibility=!0,e["s-ol"]?e["s-ol"].remove():putBackInOriginalLocation(e,!0),e.remove())}}},updateChildren=(e,t,s,o,n=!1)=>{let l,a,r=0,i=0,$=0,c=0,d=t.length-1,p=t[0],m=t[d],u=o.length-1,f=o[0],h=o[u];for(;r<=d&&i<=u;)if(null==p)p=t[++r];else if(null==m)m=t[--d];else if(null==f)f=o[++i];else if(null==h)h=o[--u];else if(isSameVnode(p,f,n))patch(p,f,n),p=t[++r],f=o[++i];else if(isSameVnode(m,h,n))patch(m,h,n),m=t[--d],h=o[--u];else if(isSameVnode(p,h,n))"slot"!==p.$tag$&&"slot"!==h.$tag$||putBackInOriginalLocation(p.$elm$.parentNode,!1),patch(p,h,n),e.insertBefore(p.$elm$,m.$elm$.nextSibling),p=t[++r],h=o[--u];else if(isSameVnode(m,f,n))"slot"!==p.$tag$&&"slot"!==h.$tag$||putBackInOriginalLocation(m.$elm$.parentNode,!1),patch(m,f,n),e.insertBefore(m.$elm$,p.$elm$),m=t[--d],f=o[++i];else{for($=-1,c=r;c<=d;++c)if(t[c]&&null!==t[c].$key$&&t[c].$key$===f.$key$){$=c;break}$>=0?(a=t[$],a.$tag$!==f.$tag$?l=createElm(t&&t[i],s,$,e):(patch(a,f,n),t[$]=void 0,l=a.$elm$),f=o[++i]):(l=createElm(t&&t[i],s,i,e),f=o[++i]),l&&parentReferenceNode(p.$elm$).insertBefore(l,referenceNode(p.$elm$))}r>d?addVnodes(e,null==o[u+1]?null:o[u+1].$elm$,s,o,i,u):i>u&&removeVnodes(t,r,d)},isSameVnode=(e,t,s=!1)=>e.$tag$===t.$tag$&&("slot"===e.$tag$?e.$name$===t.$name$:!!s||e.$key$===t.$key$),referenceNode=e=>e&&e["s-ol"]||e,parentReferenceNode=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,patch=(e,t,s=!1)=>{const o=t.$elm$=e.$elm$,n=e.$children$,l=t.$children$,a=t.$tag$,r=t.$text$;let i;null===r?(isSvgMode="svg"===a||"foreignObject"!==a&&isSvgMode,("slot"!==a||useNativeShadowDom)&&updateElement(e,t,isSvgMode),null!==n&&null!==l?updateChildren(o,n,t,l,s):null!==l?(null!==e.$text$&&(o.textContent=""),addVnodes(o,null,t,l,0,l.length-1)):null!==n&&removeVnodes(n,0,n.length-1),isSvgMode&&"svg"===a&&(isSvgMode=!1)):(i=o["s-cr"])?i.parentNode.textContent=r:e.$text$!==r&&(o.data=r)},updateFallbackSlotVisibility=e=>{const t=e.childNodes;for(const e of t)if(1===e.nodeType){if(e["s-sr"]){const s=e["s-sn"];e.hidden=!1;for(const o of t)if(o!==e)if(o["s-hn"]!==e["s-hn"]||""!==s){if(1===o.nodeType&&(s===o.getAttribute("slot")||s===o["s-sn"])){e.hidden=!0;break}}else if(1===o.nodeType||3===o.nodeType&&""!==o.textContent.trim()){e.hidden=!0;break}}updateFallbackSlotVisibility(e)}},relocateNodes=[],markSlotContentForRelocation=e=>{let t,s,o;for(const n of e.childNodes){if(n["s-sr"]&&(t=n["s-cr"])&&t.parentNode){s=t.parentNode.childNodes;const e=n["s-sn"];for(o=s.length-1;o>=0;o--)if(t=s[o],!t["s-cn"]&&!t["s-nr"]&&t["s-hn"]!==n["s-hn"]&&!BUILD.experimentalSlotFixes)if(isNodeLocatedInSlot(t,e)){let s=relocateNodes.find((e=>e.$nodeToRelocate$===t));checkSlotFallbackVisibility=!0,t["s-sn"]=t["s-sn"]||e,s?(s.$nodeToRelocate$["s-sh"]=n["s-hn"],s.$slotRefNode$=n):(t["s-sh"]=n["s-hn"],relocateNodes.push({$slotRefNode$:n,$nodeToRelocate$:t})),t["s-sr"]&&relocateNodes.map((e=>{isNodeLocatedInSlot(e.$nodeToRelocate$,t["s-sn"])&&(s=relocateNodes.find((e=>e.$nodeToRelocate$===t)),s&&!e.$slotRefNode$&&(e.$slotRefNode$=s.$slotRefNode$))}))}else relocateNodes.some((e=>e.$nodeToRelocate$===t))||relocateNodes.push({$nodeToRelocate$:t})}1===n.nodeType&&markSlotContentForRelocation(n)}},isNodeLocatedInSlot=(e,t)=>1===e.nodeType?null===e.getAttribute("slot")&&""===t||e.getAttribute("slot")===t:e["s-sn"]===t||""===t,nullifyVNodeRefs=e=>{e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null),e.$children$&&e.$children$.map(nullifyVNodeRefs)},renderVdom=(e,t,s=!1)=>{var o,n,l,a;const r=e.$hostElement$,i=e.$cmpMeta$,$=e.$vnode$||newVNode(null,null),c=(d=t)&&d.$tag$===Host?t:h(null,null,t);var d;if(hostTagName=r.tagName,i.$attrsToReflect$&&(c.$attrs$=c.$attrs$||{},i.$attrsToReflect$.map((([e,t])=>c.$attrs$[t]=r[e]))),s&&c.$attrs$)for(const e of Object.keys(c.$attrs$))r.hasAttribute(e)&&!["key","ref","style","class"].includes(e)&&(c.$attrs$[e]=r[e]);if(c.$tag$=null,c.$flags$|=4,e.$vnode$=c,c.$elm$=$.$elm$=r.shadowRoot||r,scopeId=r["s-sc"],useNativeShadowDom=0!=(1&i.$flags$),contentRef=r["s-cr"],checkSlotFallbackVisibility=!1,patch($,c,s),plt.$flags$|=1,checkSlotRelocate){markSlotContentForRelocation(c.$elm$);for(const e of relocateNodes){const t=e.$nodeToRelocate$;if(!t["s-ol"]){const e=doc.createTextNode("");e["s-nr"]=t,t.parentNode.insertBefore(t["s-ol"]=e,t)}}for(const e of relocateNodes){const t=e.$nodeToRelocate$,r=e.$slotRefNode$;if(r){const e=r.parentNode;let s=r.nextSibling;{let l=null===(o=t["s-ol"])||void 0===o?void 0:o.previousSibling;for(;l;){let o=null!==(n=l["s-nr"])&&void 0!==n?n:null;if(o&&o["s-sn"]===t["s-sn"]&&e===o.parentNode){for(o=o.nextSibling;o===t||(null==o?void 0:o["s-sr"]);)o=null==o?void 0:o.nextSibling;if(!o||!o["s-nr"]){s=o;break}}l=l.previousSibling}}(!s&&e!==t.parentNode||t.nextSibling!==s)&&t!==s&&(!t["s-hn"]&&t["s-ol"]&&(t["s-hn"]=t["s-ol"].parentNode.nodeName),e.insertBefore(t,s),1===t.nodeType&&(t.hidden=null!==(l=t["s-ih"])&&void 0!==l&&l)),t&&"function"==typeof r["s-rf"]&&r["s-rf"](t)}else 1===t.nodeType&&(s&&(t["s-ih"]=null!==(a=t.hidden)&&void 0!==a&&a),t.hidden=!0)}}checkSlotFallbackVisibility&&updateFallbackSlotVisibility(c.$elm$),plt.$flags$&=-2,relocateNodes.length=0,contentRef=void 0},attachToAncestor=(e,t)=>{t&&!e.$onRenderResolve$&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.$onRenderResolve$=t)))},scheduleUpdate=(e,t)=>{if(e.$flags$|=16,!(4&e.$flags$))return attachToAncestor(e,e.$ancestorComponent$),writeTask((()=>dispatchHooks(e,t)));e.$flags$|=512},dispatchHooks=(e,t)=>{const s=(e.$cmpMeta$.$tagName$,()=>{}),o=e.$lazyInstance$;let n;return t&&(e.$flags$|=256,e.$queuedListeners$&&(e.$queuedListeners$.map((([e,t])=>safeCall(o,e,t))),e.$queuedListeners$=void 0),n=safeCall(o,"componentWillLoad")),s(),enqueue(n,(()=>updateComponent(e,o,t)))},enqueue=(e,t)=>isPromisey(e)?e.then(t):t(),isPromisey=e=>e instanceof Promise||e&&e.then&&"function"==typeof e.then,updateComponent=async(e,t,s)=>{var o;const n=e.$hostElement$,l=(e.$cmpMeta$.$tagName$,()=>{}),a=n["s-rc"];s&&attachStyles(e);const r=(e.$cmpMeta$.$tagName$,()=>{});callRender(e,t,n,s),a&&(a.map((e=>e())),n["s-rc"]=void 0),r(),l();{const t=null!==(o=n["s-p"])&&void 0!==o?o:[],s=()=>postUpdateComponent(e);0===t.length?s():(Promise.all(t).then(s),e.$flags$|=4,t.length=0)}},callRender=(e,t,s,o)=>{try{t=t.render(),e.$flags$&=-17,e.$flags$|=2,renderVdom(e,t,o)}catch(t){consoleError(t,e.$hostElement$)}return null},postUpdateComponent=e=>{e.$cmpMeta$.$tagName$;const t=e.$hostElement$,s=e.$lazyInstance$,o=e.$ancestorComponent$;safeCall(s,"componentDidRender"),64&e.$flags$||(e.$flags$|=64,addHydratedFlag(t),safeCall(s,"componentDidLoad"),e.$onReadyResolve$(t),o||appDidLoad()),e.$onInstanceResolve$(t),e.$onRenderResolve$&&(e.$onRenderResolve$(),e.$onRenderResolve$=void 0),512&e.$flags$&&nextTick((()=>scheduleUpdate(e,!1))),e.$flags$&=-517},appDidLoad=e=>{addHydratedFlag(doc.documentElement),nextTick((()=>emitEvent(win,"appload",{detail:{namespace:NAMESPACE}})))},safeCall=(e,t,s)=>{if(e&&e[t])try{return e[t](s)}catch(e){consoleError(e)}},addHydratedFlag=e=>e.classList.add("hydrated"),getValue=(e,t)=>getHostRef(e).$instanceValues$.get(t),setValue=(e,t,s,o)=>{const n=getHostRef(e),l=n.$hostElement$,a=n.$instanceValues$.get(t),r=n.$flags$,i=n.$lazyInstance$;var $,c;$=s,c=o.$members$[t][0],s=null==$||isComplexType($)?$:4&c?"false"!==$&&(""===$||!!$):2&c?parseFloat($):1&c?String($):$;const d=Number.isNaN(a)&&Number.isNaN(s);if((!(8&r)||void 0===a)&&s!==a&&!d&&(n.$instanceValues$.set(t,s),i)){if(o.$watchers$&&128&r){const e=o.$watchers$[t];e&&e.map((e=>{try{i[e](s,a,t)}catch(e){consoleError(e,l)}}))}2==(18&r)&&scheduleUpdate(n,!1)}},proxyComponent=(e,t,s)=>{var o;const n=e.prototype;if(t.$members$){e.watchers&&(t.$watchers$=e.watchers);const l=Object.entries(t.$members$);if(l.map((([e,[o]])=>{31&o||2&s&&32&o?Object.defineProperty(n,e,{get(){return t=e,getHostRef(this).$instanceValues$.get(t);var t},set(s){setValue(this,e,s,t)},configurable:!0,enumerable:!0}):1&s&&64&o&&Object.defineProperty(n,e,{value(...t){var s;const o=getHostRef(this);return null===(s=null==o?void 0:o.$onInstancePromise$)||void 0===s?void 0:s.then((()=>{var s;return null===(s=o.$lazyInstance$)||void 0===s?void 0:s[e](...t)}))}})})),1&s){const s=new Map;n.attributeChangedCallback=function(e,o,l){plt.jmp((()=>{var a;const r=s.get(e);if(this.hasOwnProperty(r))l=this[r],delete this[r];else{if(n.hasOwnProperty(r)&&"number"==typeof this[r]&&this[r]==l)return;if(null==r){const s=getHostRef(this),n=null==s?void 0:s.$flags$;if(n&&!(8&n)&&128&n&&l!==o){const n=s.$lazyInstance$,r=null===(a=t.$watchers$)||void 0===a?void 0:a[e];null==r||r.forEach((t=>{null!=n[t]&&n[t].call(n,l,o,e)}))}return}}this[r]=(null!==l||"boolean"!=typeof this[r])&&l}))},e.observedAttributes=Array.from(new Set([...Object.keys(null!==(o=t.$watchers$)&&void 0!==o?o:{}),...l.filter((([e,t])=>15&t[0])).map((([e,o])=>{var n;const l=o[1]||e;return s.set(l,e),512&o[0]&&(null===(n=t.$attrsToReflect$)||void 0===n||n.push([e,l])),l}))]))}}return e},initializeComponent=async(e,t,s,o)=>{let n;if(0==(32&t.$flags$)){if(t.$flags$|=32,s.$lazyBundleId$){if(n=loadModule(s),n.then){const e=()=>{};n=await n,e()}n.isProxied||(s.$watchers$=n.watchers,proxyComponent(n,s,2),n.isProxied=!0);const e=(s.$tagName$,()=>{});t.$flags$|=8;try{new n(t)}catch(e){consoleError(e)}t.$flags$&=-9,t.$flags$|=128,e()}else n=e.constructor,customElements.whenDefined(s.$tagName$).then((()=>t.$flags$|=128));if(n.style){let e=n.style;const t=getScopeId(s);if(!styles.has(t)){const o=(s.$tagName$,()=>{});registerStyle(t,e,!!(1&s.$flags$)),o()}}}const l=t.$ancestorComponent$,a=()=>scheduleUpdate(t,!0);l&&l["s-rc"]?l["s-rc"].push(a):a()},fireConnectedCallback=e=>{},connectedCallback=e=>{if(0==(1&plt.$flags$)){const t=getHostRef(e),s=t.$cmpMeta$,o=(s.$tagName$,()=>{});if(1&t.$flags$)addHostEventListeners(e,t,s.$listeners$),(null==t?void 0:t.$lazyInstance$)||(null==t?void 0:t.$onReadyPromise$)&&t.$onReadyPromise$.then((()=>{}));else{t.$flags$|=1,12&s.$flags$&&setContentReference(e);{let s=e;for(;s=s.parentNode||s.host;)if(s["s-p"]){attachToAncestor(t,t.$ancestorComponent$=s);break}}s.$members$&&Object.entries(s.$members$).map((([t,[s]])=>{if(31&s&&e.hasOwnProperty(t)){const s=e[t];delete e[t],e[t]=s}})),initializeComponent(e,t,s)}o()}},setContentReference=e=>{const t=e["s-cr"]=doc.createComment("");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)},disconnectInstance=e=>{safeCall(e,"disconnectedCallback")},disconnectedCallback=async e=>{if(0==(1&plt.$flags$)){const t=getHostRef(e);t.$rmListeners$&&(t.$rmListeners$.map((e=>e())),t.$rmListeners$=void 0),(null==t?void 0:t.$lazyInstance$)?disconnectInstance(t.$lazyInstance$):(null==t?void 0:t.$onReadyPromise$)&&t.$onReadyPromise$.then((()=>disconnectInstance(t.$lazyInstance$)))}},bootstrapLazy=(e,t={})=>{var s;const o=[],n=t.exclude||[],l=win.customElements,a=doc.head,r=a.querySelector("meta[charset]"),i=doc.createElement("style"),$=[];let c,d=!0;Object.assign(plt,t),plt.$resourcesUrl$=new URL(t.resourcesUrl||"./",doc.baseURI).href;let p=!1;if(e.map((e=>{e[1].map((t=>{var s;const a={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};4&a.$flags$&&(p=!0),a.$members$=t[2],a.$listeners$=t[3],a.$attrsToReflect$=[],a.$watchers$=null!==(s=t[4])&&void 0!==s?s:{};const r=a.$tagName$,i=class extends HTMLElement{constructor(e){super(e),registerHost(e=this,a),1&a.$flags$&&e.attachShadow({mode:"open"})}connectedCallback(){c&&(clearTimeout(c),c=null),d?$.push(this):plt.jmp((()=>connectedCallback(this)))}disconnectedCallback(){plt.jmp((()=>disconnectedCallback(this)))}componentOnReady(){return getHostRef(this).$onReadyPromise$}};a.$lazyBundleId$=e[0],n.includes(r)||l.get(r)||(o.push(r),l.define(r,proxyComponent(i,a,1)))}))})),o.length>0&&(p&&(i.textContent+=SLOT_FB_CSS),i.textContent+=o+HYDRATED_CSS,i.innerHTML.length)){i.setAttribute("data-styles","");const e=null!==(s=plt.$nonce$)&&void 0!==s?s:queryNonceMetaTagContent(doc);null!=e&&i.setAttribute("nonce",e),a.insertBefore(i,r?r.nextSibling:a.firstChild)}d=!1,$.length?$.map((e=>e.connectedCallback())):plt.jmp((()=>c=setTimeout(appDidLoad,30)))},addHostEventListeners=(e,t,s,o)=>{s&&s.map((([s,o,n])=>{const l=getHostListenerTarget(e,s),a=hostListenerProxy(t,n),r=hostListenerOpts(s);plt.ael(l,o,a,r),(t.$rmListeners$=t.$rmListeners$||[]).push((()=>plt.rel(l,o,a,r)))}))},hostListenerProxy=(e,t)=>s=>{try{256&e.$flags$?e.$lazyInstance$[t](s):(e.$queuedListeners$=e.$queuedListeners$||[]).push([t,s])}catch(e){consoleError(e)}},getHostListenerTarget=(e,t)=>8&t?win:e,hostListenerOpts=e=>supportsListenerOptions?{passive:0!=(1&e),capture:0!=(2&e)}:0!=(2&e),setNonce=e=>plt.$nonce$=e,hostRefs=new WeakMap,getHostRef=e=>hostRefs.get(e),registerInstance=(e,t)=>hostRefs.set(t.$lazyInstance$=e,t),registerHost=(e,t)=>{const s={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};return s.$onInstancePromise$=new Promise((e=>s.$onInstanceResolve$=e)),s.$onReadyPromise$=new Promise((e=>s.$onReadyResolve$=e)),e["s-p"]=[],e["s-rc"]=[],addHostEventListeners(e,s,t.$listeners$),hostRefs.set(e,s)},isMemberInElement=(e,t)=>t in e,consoleError=(e,t)=>(0,console.error)(e,t),cmpModules=new Map,loadModule=(e,t,s)=>{const o=e.$tagName$.replace(/-/g,"_"),n=e.$lazyBundleId$,l=cmpModules.get(n);return l?l[o]:import(`./${n}.entry.js`).then((e=>(cmpModules.set(n,e),e[o])),consoleError)},styles=new Map,win="undefined"!=typeof window?window:{},doc=win.document||{head:{}},plt={$flags$:0,$resourcesUrl$:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,s,o)=>e.addEventListener(t,s,o),rel:(e,t,s,o)=>e.removeEventListener(t,s,o),ce:(e,t)=>new CustomEvent(e,t)},supportsListenerOptions=(()=>{let e=!1;try{doc.addEventListener("e",null,Object.defineProperty({},"passive",{get(){e=!0}}))}catch(e){}return e})(),promiseResolve=e=>Promise.resolve(e),supportsConstructableStylesheets=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replaceSync}catch(e){}return!1})(),queueDomReads=[],queueDomWrites=[],queueTask=(e,t)=>s=>{e.push(s),queuePending||(queuePending=!0,t&&4&plt.$flags$?nextTick(flush):plt.raf(flush))},consume=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){consoleError(e)}e.length=0},flush=()=>{consume(queueDomReads),consume(queueDomWrites),(queuePending=queueDomReads.length>0)&&plt.raf(flush)},nextTick=e=>promiseResolve().then(e),writeTask=queueTask(queueDomWrites,!0);export{Host as H,bootstrapLazy as b,createEvent as c,getElement as g,h,promiseResolve as p,registerInstance as r,setNonce as s};