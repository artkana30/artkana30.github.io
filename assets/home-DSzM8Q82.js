import{M as jt,G as Vt,c as qt,a as Kt,b as Zt,o as Jt,t as ht,i as Qt,d as w,e as fe,L as lt,u as en,S as tn,g as nn}from"./index-C0DLRjwM.js";import{D as ct}from"./displayError-CnJEI6un.js";/*! @license DOMPurify 3.2.5 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.5/LICENSE */const{entries:At,setPrototypeOf:ft,isFrozen:on,getPrototypeOf:an,getOwnPropertyDescriptor:rn}=Object;let{freeze:y,seal:b,create:St}=Object,{apply:ve,construct:ke}=typeof Reflect<"u"&&Reflect;y||(y=function(n){return n});b||(b=function(n){return n});ve||(ve=function(n,l,r){return n.apply(l,r)});ke||(ke=function(n,l){return new n(...l)});const ue=L(Array.prototype.forEach),sn=L(Array.prototype.lastIndexOf),ut=L(Array.prototype.pop),q=L(Array.prototype.push),ln=L(Array.prototype.splice),pe=L(String.prototype.toLowerCase),Ie=L(String.prototype.toString),mt=L(String.prototype.match),K=L(String.prototype.replace),cn=L(String.prototype.indexOf),fn=L(String.prototype.trim),D=L(Object.prototype.hasOwnProperty),R=L(RegExp.prototype.test),Z=un(TypeError);function L(a){return function(n){n instanceof RegExp&&(n.lastIndex=0);for(var l=arguments.length,r=new Array(l>1?l-1:0),m=1;m<l;m++)r[m-1]=arguments[m];return ve(a,n,r)}}function un(a){return function(){for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return ke(a,l)}}function s(a,n){let l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:pe;ft&&ft(a,null);let r=n.length;for(;r--;){let m=n[r];if(typeof m=="string"){const E=l(m);E!==m&&(on(n)||(n[r]=E),m=E)}a[m]=!0}return a}function mn(a){for(let n=0;n<a.length;n++)D(a,n)||(a[n]=null);return a}function k(a){const n=St(null);for(const[l,r]of At(a))D(a,l)&&(Array.isArray(r)?n[l]=mn(r):r&&typeof r=="object"&&r.constructor===Object?n[l]=k(r):n[l]=r);return n}function J(a,n){for(;a!==null;){const r=rn(a,n);if(r){if(r.get)return L(r.get);if(typeof r.value=="function")return L(r.value)}a=an(a)}function l(){return null}return l}const pt=y(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Ce=y(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),we=y(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),pn=y(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),xe=y(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),dn=y(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),dt=y(["#text"]),Tt=y(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),Pe=y(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),gt=y(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),me=y(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Tn=b(/\{\{[\w\W]*|[\w\W]*\}\}/gm),gn=b(/<%[\w\W]*|[\w\W]*%>/gm),_n=b(/\$\{[\w\W]*/gm),En=b(/^data-[\-\w.\u00B7-\uFFFF]+$/),hn=b(/^aria-[\-\w]+$/),Rt=b(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),An=b(/^(?:\w+script|data):/i),Sn=b(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),yt=b(/^html$/i),Rn=b(/^[a-z][.\w]*(-[.\w]+)+$/i);var _t=Object.freeze({__proto__:null,ARIA_ATTR:hn,ATTR_WHITESPACE:Sn,CUSTOM_ELEMENT:Rn,DATA_ATTR:En,DOCTYPE_NAME:yt,ERB_EXPR:gn,IS_ALLOWED_URI:Rt,IS_SCRIPT_OR_DATA:An,MUSTACHE_EXPR:Tn,TMPLIT_EXPR:_n});const Q={element:1,text:3,progressingInstruction:7,comment:8,document:9},yn=function(){return typeof window>"u"?null:window},Ln=function(n,l){if(typeof n!="object"||typeof n.createPolicy!="function")return null;let r=null;const m="data-tt-policy-suffix";l&&l.hasAttribute(m)&&(r=l.getAttribute(m));const E="dompurify"+(r?"#"+r:"");try{return n.createPolicy(E,{createHTML(u){return u},createScriptURL(u){return u}})}catch{return console.warn("TrustedTypes policy "+E+" could not be created."),null}},Et=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function Lt(){let a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:yn();const n=i=>Lt(i);if(n.version="3.2.5",n.removed=[],!a||!a.document||a.document.nodeType!==Q.document||!a.Element)return n.isSupported=!1,n;let{document:l}=a;const r=l,m=r.currentScript,{DocumentFragment:E,HTMLTemplateElement:u,Node:x,Element:ee,NodeFilter:P,NamedNodeMap:de=a.NamedNodeMap||a.MozNamedAttrMap,HTMLFormElement:Ot,DOMParser:bt,trustedTypes:te}=a,B=ee.prototype,Dt=J(B,"cloneNode"),Nt=J(B,"remove"),Mt=J(B,"nextSibling"),It=J(B,"childNodes"),ne=J(B,"parentNode");if(typeof u=="function"){const i=l.createElement("template");i.content&&i.content.ownerDocument&&(l=i.content.ownerDocument)}let h,Y="";const{implementation:Te,createNodeIterator:Ct,createDocumentFragment:wt,getElementsByTagName:xt}=l,{importNode:Pt}=r;let A=Et();n.isSupported=typeof At=="function"&&typeof ne=="function"&&Te&&Te.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:ge,ERB_EXPR:_e,TMPLIT_EXPR:Ee,DATA_ATTR:vt,ARIA_ATTR:kt,IS_SCRIPT_OR_DATA:Ut,ATTR_WHITESPACE:Ue,CUSTOM_ELEMENT:Ft}=_t;let{IS_ALLOWED_URI:Fe}=_t,p=null;const He=s({},[...pt,...Ce,...we,...xe,...dt]);let T=null;const ze=s({},[...Tt,...Pe,...gt,...me]);let f=Object.seal(St(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),X=null,he=null,Ge=!0,Ae=!0,We=!1,Be=!0,U=!1,Se=!0,v=!1,Re=!1,ye=!1,F=!1,oe=!1,ie=!1,Ye=!0,Xe=!1;const Ht="user-content-";let Le=!0,$=!1,H={},z=null;const $e=s({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let je=null;const Ve=s({},["audio","video","img","source","image","track"]);let Oe=null;const qe=s({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),ae="http://www.w3.org/1998/Math/MathML",re="http://www.w3.org/2000/svg",I="http://www.w3.org/1999/xhtml";let G=I,be=!1,De=null;const zt=s({},[ae,re,I],Ie);let se=s({},["mi","mo","mn","ms","mtext"]),le=s({},["annotation-xml"]);const Gt=s({},["title","style","font","a","script"]);let j=null;const Wt=["application/xhtml+xml","text/html"],Bt="text/html";let d=null,W=null;const Yt=l.createElement("form"),Ke=function(e){return e instanceof RegExp||e instanceof Function},Ne=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(W&&W===e)){if((!e||typeof e!="object")&&(e={}),e=k(e),j=Wt.indexOf(e.PARSER_MEDIA_TYPE)===-1?Bt:e.PARSER_MEDIA_TYPE,d=j==="application/xhtml+xml"?Ie:pe,p=D(e,"ALLOWED_TAGS")?s({},e.ALLOWED_TAGS,d):He,T=D(e,"ALLOWED_ATTR")?s({},e.ALLOWED_ATTR,d):ze,De=D(e,"ALLOWED_NAMESPACES")?s({},e.ALLOWED_NAMESPACES,Ie):zt,Oe=D(e,"ADD_URI_SAFE_ATTR")?s(k(qe),e.ADD_URI_SAFE_ATTR,d):qe,je=D(e,"ADD_DATA_URI_TAGS")?s(k(Ve),e.ADD_DATA_URI_TAGS,d):Ve,z=D(e,"FORBID_CONTENTS")?s({},e.FORBID_CONTENTS,d):$e,X=D(e,"FORBID_TAGS")?s({},e.FORBID_TAGS,d):{},he=D(e,"FORBID_ATTR")?s({},e.FORBID_ATTR,d):{},H=D(e,"USE_PROFILES")?e.USE_PROFILES:!1,Ge=e.ALLOW_ARIA_ATTR!==!1,Ae=e.ALLOW_DATA_ATTR!==!1,We=e.ALLOW_UNKNOWN_PROTOCOLS||!1,Be=e.ALLOW_SELF_CLOSE_IN_ATTR!==!1,U=e.SAFE_FOR_TEMPLATES||!1,Se=e.SAFE_FOR_XML!==!1,v=e.WHOLE_DOCUMENT||!1,F=e.RETURN_DOM||!1,oe=e.RETURN_DOM_FRAGMENT||!1,ie=e.RETURN_TRUSTED_TYPE||!1,ye=e.FORCE_BODY||!1,Ye=e.SANITIZE_DOM!==!1,Xe=e.SANITIZE_NAMED_PROPS||!1,Le=e.KEEP_CONTENT!==!1,$=e.IN_PLACE||!1,Fe=e.ALLOWED_URI_REGEXP||Rt,G=e.NAMESPACE||I,se=e.MATHML_TEXT_INTEGRATION_POINTS||se,le=e.HTML_INTEGRATION_POINTS||le,f=e.CUSTOM_ELEMENT_HANDLING||{},e.CUSTOM_ELEMENT_HANDLING&&Ke(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(f.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&Ke(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(f.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(f.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),U&&(Ae=!1),oe&&(F=!0),H&&(p=s({},dt),T=[],H.html===!0&&(s(p,pt),s(T,Tt)),H.svg===!0&&(s(p,Ce),s(T,Pe),s(T,me)),H.svgFilters===!0&&(s(p,we),s(T,Pe),s(T,me)),H.mathMl===!0&&(s(p,xe),s(T,gt),s(T,me))),e.ADD_TAGS&&(p===He&&(p=k(p)),s(p,e.ADD_TAGS,d)),e.ADD_ATTR&&(T===ze&&(T=k(T)),s(T,e.ADD_ATTR,d)),e.ADD_URI_SAFE_ATTR&&s(Oe,e.ADD_URI_SAFE_ATTR,d),e.FORBID_CONTENTS&&(z===$e&&(z=k(z)),s(z,e.FORBID_CONTENTS,d)),Le&&(p["#text"]=!0),v&&s(p,["html","head","body"]),p.table&&(s(p,["tbody"]),delete X.tbody),e.TRUSTED_TYPES_POLICY){if(typeof e.TRUSTED_TYPES_POLICY.createHTML!="function")throw Z('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof e.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw Z('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');h=e.TRUSTED_TYPES_POLICY,Y=h.createHTML("")}else h===void 0&&(h=Ln(te,m)),h!==null&&typeof Y=="string"&&(Y=h.createHTML(""));y&&y(e),W=e}},Ze=s({},[...Ce,...we,...pn]),Je=s({},[...xe,...dn]),Xt=function(e){let t=ne(e);(!t||!t.tagName)&&(t={namespaceURI:G,tagName:"template"});const o=pe(e.tagName),c=pe(t.tagName);return De[e.namespaceURI]?e.namespaceURI===re?t.namespaceURI===I?o==="svg":t.namespaceURI===ae?o==="svg"&&(c==="annotation-xml"||se[c]):!!Ze[o]:e.namespaceURI===ae?t.namespaceURI===I?o==="math":t.namespaceURI===re?o==="math"&&le[c]:!!Je[o]:e.namespaceURI===I?t.namespaceURI===re&&!le[c]||t.namespaceURI===ae&&!se[c]?!1:!Je[o]&&(Gt[o]||!Ze[o]):!!(j==="application/xhtml+xml"&&De[e.namespaceURI]):!1},N=function(e){q(n.removed,{element:e});try{ne(e).removeChild(e)}catch{Nt(e)}},ce=function(e,t){try{q(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch{q(n.removed,{attribute:null,from:t})}if(t.removeAttribute(e),e==="is")if(F||oe)try{N(t)}catch{}else try{t.setAttribute(e,"")}catch{}},Qe=function(e){let t=null,o=null;if(ye)e="<remove></remove>"+e;else{const g=mt(e,/^[\r\n\t ]+/);o=g&&g[0]}j==="application/xhtml+xml"&&G===I&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");const c=h?h.createHTML(e):e;if(G===I)try{t=new bt().parseFromString(c,j)}catch{}if(!t||!t.documentElement){t=Te.createDocument(G,"template",null);try{t.documentElement.innerHTML=be?Y:c}catch{}}const _=t.body||t.documentElement;return e&&o&&_.insertBefore(l.createTextNode(o),_.childNodes[0]||null),G===I?xt.call(t,v?"html":"body")[0]:v?t.documentElement:_},et=function(e){return Ct.call(e.ownerDocument||e,e,P.SHOW_ELEMENT|P.SHOW_COMMENT|P.SHOW_TEXT|P.SHOW_PROCESSING_INSTRUCTION|P.SHOW_CDATA_SECTION,null)},Me=function(e){return e instanceof Ot&&(typeof e.nodeName!="string"||typeof e.textContent!="string"||typeof e.removeChild!="function"||!(e.attributes instanceof de)||typeof e.removeAttribute!="function"||typeof e.setAttribute!="function"||typeof e.namespaceURI!="string"||typeof e.insertBefore!="function"||typeof e.hasChildNodes!="function")},tt=function(e){return typeof x=="function"&&e instanceof x};function C(i,e,t){ue(i,o=>{o.call(n,e,t,W)})}const nt=function(e){let t=null;if(C(A.beforeSanitizeElements,e,null),Me(e))return N(e),!0;const o=d(e.nodeName);if(C(A.uponSanitizeElement,e,{tagName:o,allowedTags:p}),e.hasChildNodes()&&!tt(e.firstElementChild)&&R(/<[/\w!]/g,e.innerHTML)&&R(/<[/\w!]/g,e.textContent)||e.nodeType===Q.progressingInstruction||Se&&e.nodeType===Q.comment&&R(/<[/\w]/g,e.data))return N(e),!0;if(!p[o]||X[o]){if(!X[o]&&it(o)&&(f.tagNameCheck instanceof RegExp&&R(f.tagNameCheck,o)||f.tagNameCheck instanceof Function&&f.tagNameCheck(o)))return!1;if(Le&&!z[o]){const c=ne(e)||e.parentNode,_=It(e)||e.childNodes;if(_&&c){const g=_.length;for(let O=g-1;O>=0;--O){const M=Dt(_[O],!0);M.__removalCount=(e.__removalCount||0)+1,c.insertBefore(M,Mt(e))}}}return N(e),!0}return e instanceof ee&&!Xt(e)||(o==="noscript"||o==="noembed"||o==="noframes")&&R(/<\/no(script|embed|frames)/i,e.innerHTML)?(N(e),!0):(U&&e.nodeType===Q.text&&(t=e.textContent,ue([ge,_e,Ee],c=>{t=K(t,c," ")}),e.textContent!==t&&(q(n.removed,{element:e.cloneNode()}),e.textContent=t)),C(A.afterSanitizeElements,e,null),!1)},ot=function(e,t,o){if(Ye&&(t==="id"||t==="name")&&(o in l||o in Yt))return!1;if(!(Ae&&!he[t]&&R(vt,t))){if(!(Ge&&R(kt,t))){if(!T[t]||he[t]){if(!(it(e)&&(f.tagNameCheck instanceof RegExp&&R(f.tagNameCheck,e)||f.tagNameCheck instanceof Function&&f.tagNameCheck(e))&&(f.attributeNameCheck instanceof RegExp&&R(f.attributeNameCheck,t)||f.attributeNameCheck instanceof Function&&f.attributeNameCheck(t))||t==="is"&&f.allowCustomizedBuiltInElements&&(f.tagNameCheck instanceof RegExp&&R(f.tagNameCheck,o)||f.tagNameCheck instanceof Function&&f.tagNameCheck(o))))return!1}else if(!Oe[t]){if(!R(Fe,K(o,Ue,""))){if(!((t==="src"||t==="xlink:href"||t==="href")&&e!=="script"&&cn(o,"data:")===0&&je[e])){if(!(We&&!R(Ut,K(o,Ue,"")))){if(o)return!1}}}}}}return!0},it=function(e){return e!=="annotation-xml"&&mt(e,Ft)},at=function(e){C(A.beforeSanitizeAttributes,e,null);const{attributes:t}=e;if(!t||Me(e))return;const o={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:T,forceKeepAttr:void 0};let c=t.length;for(;c--;){const _=t[c],{name:g,namespaceURI:O,value:M}=_,V=d(g);let S=g==="value"?M:fn(M);if(o.attrName=V,o.attrValue=S,o.keepAttr=!0,o.forceKeepAttr=void 0,C(A.uponSanitizeAttribute,e,o),S=o.attrValue,Xe&&(V==="id"||V==="name")&&(ce(g,e),S=Ht+S),Se&&R(/((--!?|])>)|<\/(style|title)/i,S)){ce(g,e);continue}if(o.forceKeepAttr||(ce(g,e),!o.keepAttr))continue;if(!Be&&R(/\/>/i,S)){ce(g,e);continue}U&&ue([ge,_e,Ee],st=>{S=K(S,st," ")});const rt=d(e.nodeName);if(ot(rt,V,S)){if(h&&typeof te=="object"&&typeof te.getAttributeType=="function"&&!O)switch(te.getAttributeType(rt,V)){case"TrustedHTML":{S=h.createHTML(S);break}case"TrustedScriptURL":{S=h.createScriptURL(S);break}}try{O?e.setAttributeNS(O,g,S):e.setAttribute(g,S),Me(e)?N(e):ut(n.removed)}catch{}}}C(A.afterSanitizeAttributes,e,null)},$t=function i(e){let t=null;const o=et(e);for(C(A.beforeSanitizeShadowDOM,e,null);t=o.nextNode();)C(A.uponSanitizeShadowNode,t,null),nt(t),at(t),t.content instanceof E&&i(t.content);C(A.afterSanitizeShadowDOM,e,null)};return n.sanitize=function(i){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=null,o=null,c=null,_=null;if(be=!i,be&&(i="<!-->"),typeof i!="string"&&!tt(i))if(typeof i.toString=="function"){if(i=i.toString(),typeof i!="string")throw Z("dirty is not a string, aborting")}else throw Z("toString is not a function");if(!n.isSupported)return i;if(Re||Ne(e),n.removed=[],typeof i=="string"&&($=!1),$){if(i.nodeName){const M=d(i.nodeName);if(!p[M]||X[M])throw Z("root node is forbidden and cannot be sanitized in-place")}}else if(i instanceof x)t=Qe("<!---->"),o=t.ownerDocument.importNode(i,!0),o.nodeType===Q.element&&o.nodeName==="BODY"||o.nodeName==="HTML"?t=o:t.appendChild(o);else{if(!F&&!U&&!v&&i.indexOf("<")===-1)return h&&ie?h.createHTML(i):i;if(t=Qe(i),!t)return F?null:ie?Y:""}t&&ye&&N(t.firstChild);const g=et($?i:t);for(;c=g.nextNode();)nt(c),at(c),c.content instanceof E&&$t(c.content);if($)return i;if(F){if(oe)for(_=wt.call(t.ownerDocument);t.firstChild;)_.appendChild(t.firstChild);else _=t;return(T.shadowroot||T.shadowrootmode)&&(_=Pt.call(r,_,!0)),_}let O=v?t.outerHTML:t.innerHTML;return v&&p["!doctype"]&&t.ownerDocument&&t.ownerDocument.doctype&&t.ownerDocument.doctype.name&&R(yt,t.ownerDocument.doctype.name)&&(O="<!DOCTYPE "+t.ownerDocument.doctype.name+`>
`+O),U&&ue([ge,_e,Ee],M=>{O=K(O,M," ")}),h&&ie?h.createHTML(O):O},n.setConfig=function(){let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Ne(i),Re=!0},n.clearConfig=function(){W=null,Re=!1},n.isValidAttribute=function(i,e,t){W||Ne({});const o=d(i),c=d(e);return ot(o,c,t)},n.addHook=function(i,e){typeof e=="function"&&q(A[i],e)},n.removeHook=function(i,e){if(e!==void 0){const t=sn(A[i],e);return t===-1?void 0:ln(A[i],t,1)[0]}return ut(A[i])},n.removeHooks=function(i){A[i]=[]},n.removeAllHooks=function(){A=Et()},n}var On=Lt(),bn=ht("<div class=injected-readme>"),Dn=ht('<article class="about active"><header><h2 class="h2 article-title">About me</h2></header><section class=about-text>');function In(){const{updateTitle:a}=jt.useMeta(),{getRawContent:n}=Vt.useGithub(),[l,r]=qt(null),m=async u=>await n(u.repo,u.file,u.branch),[E]=Kt(async()=>{const u=await m(nn.home);if(u)return u.replaceAll(/<img/g,'<img loading="lazy"').replaceAll(/<a/g,'<a style="text-decoration: none"')});return Zt(()=>{const u=l();if(u){const x=u.attachShadow({mode:"open"});x.innerHTML=On.sanitize(E()||"")}}),Jt(()=>{a("")}),(()=>{var u=Dn(),x=u.firstChild,ee=x.nextSibling;return Qt(ee,w(tn,{get fallback(){return w(lt,{})},get children(){return[w(fe,{get when(){return E.loading},get children(){return w(lt,{})}}),w(fe,{get when(){return E.error},get children(){return w(ct,{message:"Failed to fetch data"})}}),w(fe,{get when(){return E()===void 0},get children(){return w(ct,{message:"No data available"})}}),w(fe,{get when(){return E()!==void 0},get children(){var P=bn();return en(de=>r(de),P),P}})]}})),u})()}export{In as default};
