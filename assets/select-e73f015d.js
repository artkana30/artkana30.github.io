import{m as z,c as k,a as g,o as h,d as A,s as ee,b as a,j as S,i as u,f as P,g as te,k as f,S as I,F as B,n as ne,p as le,t as m,q as oe,u as se}from"./index-dcad71c9.js";const re=l=>{const t=z({multiple:!1,disabled:!1,optionToValue:o=>o,isOptionDisabled:o=>!1},l),n=o=>{if(t.multiple&&Array.isArray(o))return o;if(!t.multiple&&!Array.isArray(o))return o!==null?[o]:[];throw new Error(`Incompatible value type for ${t.multiple?"multple":"single"} select.`)},[e,s]=k(t.initialValue!==void 0?n(t.initialValue):[]),r=()=>t.multiple?e():e()[0]||null,i=o=>s(n(o)),p=()=>s([]),D=()=>!!(t.multiple?r().length:r());g(h(e,()=>t.onChange?.(r()),{defer:!0}));const[c,$]=k(""),j=()=>$(""),E=()=>!!c().length;g(h(c,o=>t.onInput?.(o),{defer:!0})),g(h(c,o=>{o&&!d()&&v(!0)},{defer:!0}));const x=typeof t.options=="function"?A(()=>t.options(c()),t.options(c())):()=>t.options,T=()=>x().length,C=o=>{if(t.isOptionDisabled(o))return;const b=t.optionToValue(o);t.multiple?i([...e(),b]):(i(b),V(!1)),v(!1)},[q,V]=k(!1),[d,v]=k(!1),M=()=>v(!d()),[O,F]=k(-1),_=()=>x()[O()],U=o=>o===_(),N=o=>{T()||F(-1);const b=T()-1,Z=o==="next"?1:-1;let w=O()+Z;w>b&&(w=0),w<0&&(w=b),F(w)},G=()=>N("previous"),L=()=>N("next");g(h(x,o=>{d()&&F(Math.min(0,o.length-1))},{defer:!0})),g(h(()=>t.disabled,o=>{o&&d()&&v(!1)})),g(h(d,o=>{o?(O()===-1&&L(),V(!0)):(O()>-1&&F(-1),$(""))},{defer:!0})),g(h(O,o=>{o>-1&&!d()&&v(!0)},{defer:!0}));const H=()=>V(!0),J=()=>{V(!1),v(!1)},Q=o=>o.preventDefault(),W=o=>{!t.disabled&&!E()&&M()},X=o=>{$(o.target.value)},Y=o=>{switch(o.key){case"ArrowDown":L();break;case"ArrowUp":G();break;case"Enter":if(d()&&_()){C(_());break}return;case"Escape":if(d()){v(!1);break}return;case"Delete":case"Backspace":if(c())return;if(t.multiple){const b=r();i([...b.slice(0,-1)])}else p();break;case" ":if(c())return;d()?_()&&C(_()):v(!0);break;case"Tab":if(_()&&d()){C(_());break}return;default:return}o.preventDefault(),o.stopPropagation()};return{options:x,value:r,setValue:i,hasValue:D,clearValue:p,inputValue:c,setInputValue:$,hasInputValue:E,clearInputValue:j,isOpen:d,setIsOpen:v,toggleOpen:M,isActive:q,setIsActive:V,get multiple(){return t.multiple},get disabled(){return t.disabled},pickOption:C,isOptionFocused:U,isOptionDisabled:t.isOptionDisabled,onFocusIn:H,onFocusOut:J,onMouseDown:Q,onClick:W,onInput:X,onKeyDown:Y}},ae=m("<div>"),ie=m('<div class="solid-select-control">'),ue=m('<div class="solid-select-placeholder">'),ce=m('<div class="solid-select-single-value">'),de=m('<div class="solid-select-multi-value"><button type="button" class="solid-select-multi-value-remove">⨯'),fe=m('<input class="solid-select-input" type="text" tabindex="0" autocomplete="off" autocapitalize="none" size="1">'),ve=m('<div class="solid-select-list">'),R=m('<div class="solid-select-list-placeholder">'),ge=m('<div class="solid-select-option">'),K=oe(),y=()=>{const l=se(K);if(!l)throw new Error("No SelectContext found in ancestry.");return l},we=l=>{const[t,n]=ee(z({format:(s,r)=>s,placeholder:"Select...",readonly:typeof l.options!="function",loading:!1,loadingPlaceholder:"Loading...",emptyPlaceholder:"No options"},l),["options","optionToValue","isOptionDisabled","multiple","disabled","onInput","onChange"]),e=re(t);return g(h(()=>n.initialValue,s=>s!==void 0&&e.setValue(s))),a(K.Provider,{value:e,get children(){return a(me,{get class(){return n.class},get children(){return[a(pe,{get id(){return n.id},get name(){return n.name},get format(){return n.format},get placeholder(){return n.placeholder},get autofocus(){return n.autofocus},get readonly(){return n.readonly}}),a(ye,{get loading(){return n.loading},get loadingPlaceholder(){return n.loadingPlaceholder},get emptyPlaceholder(){return n.emptyPlaceholder},get format(){return n.format}})]}})}})},me=l=>{const t=y();return(()=>{const n=ae();return n.$$mousedown=e=>{t.onMouseDown(e),e.currentTarget.getElementsByTagName("input")[0].focus()},S(n,"focusout",t.onFocusOut,!0),S(n,"focusin",t.onFocusIn,!0),u(n,()=>l.children),P(e=>{const s=`solid-select-container ${l.class!==void 0?l.class:""}`,r=t.disabled;return s!==e._v$&&te(n,e._v$=s),r!==e._v$2&&f(n,"data-disabled",e._v$2=r),e},{_v$:void 0,_v$2:void 0}),n})()},pe=l=>{const t=y(),n=e=>{const s=t.value();t.setValue([...s.slice(0,e),...s.slice(e+1)])};return(()=>{const e=ie();return S(e,"click",t.onClick,!0),u(e,a(I,{get when(){return A(()=>!t.hasValue())()&&!t.hasInputValue()},get children(){return a(he,{get children(){return l.placeholder}})}}),null),u(e,a(I,{get when(){return A(()=>!!(t.hasValue()&&!t.multiple))()&&!t.hasInputValue()},get children(){return a($e,{get children(){return l.format(t.value(),"value")}})}}),null),u(e,a(I,{get when(){return t.hasValue()&&t.multiple},get children(){return a(B,{get each(){return t.value()},children:(s,r)=>a(_e,{onRemove:()=>n(r()),get children(){return l.format(s,"value")}})})}}),null),u(e,a(be,{get id(){return l.id},get name(){return l.name},get autofocus(){return l.autofocus},get readonly(){return l.readonly}}),null),P(s=>{const r=t.multiple,i=t.hasValue(),p=t.disabled;return r!==s._v$3&&f(e,"data-multiple",s._v$3=r),i!==s._v$4&&f(e,"data-has-value",s._v$4=i),p!==s._v$5&&f(e,"data-disabled",s._v$5=p),s},{_v$3:void 0,_v$4:void 0,_v$5:void 0}),e})()},he=l=>(()=>{const t=ue();return u(t,()=>l.children),t})(),$e=l=>(()=>{const t=ce();return u(t,()=>l.children),t})(),_e=l=>(y(),(()=>{const t=de(),n=t.firstChild;return u(t,()=>l.children,n),n.$$click=e=>{e.stopPropagation(),l.onRemove()},t})()),be=l=>{const t=y();return(()=>{const n=fe();return n.$$mousedown=e=>{e.stopPropagation()},n.$$keydown=e=>{t.onKeyDown(e),e.defaultPrevented||e.key==="Escape"&&(e.preventDefault(),e.stopPropagation(),e.target.blur())},S(n,"input",t.onInput,!0),P(e=>{const s=l.id,r=l.name,i=t.multiple,p=t.isActive(),D=l.autofocus,c=l.readonly,$=t.disabled;return s!==e._v$6&&f(n,"id",e._v$6=s),r!==e._v$7&&f(n,"name",e._v$7=r),i!==e._v$8&&f(n,"data-multiple",e._v$8=i),p!==e._v$9&&f(n,"data-is-active",e._v$9=p),D!==e._v$10&&(n.autofocus=e._v$10=D),c!==e._v$11&&(n.readOnly=e._v$11=c),$!==e._v$12&&(n.disabled=e._v$12=$),e},{_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0,_v$11:void 0,_v$12:void 0}),P(()=>n.value=t.inputValue()),n})()},ye=l=>{const t=y();return a(I,{get when(){return t.isOpen()},get children(){const n=ve();return u(n,a(I,{get when(){return!l.loading},get fallback(){return(()=>{const e=R();return u(e,()=>l.loadingPlaceholder),e})()},get children(){return a(B,{get each(){return t.options()},get fallback(){return(()=>{const e=R();return u(e,()=>l.emptyPlaceholder),e})()},children:e=>a(Ve,{option:e,get children(){return l.format(e,"option")}})})}})),n}})},Ve=l=>{const t=y(),n=e=>{g(()=>{t.isOptionFocused(l.option)&&e.scrollIntoView({block:"nearest"})})};return(()=>{const e=ge();return e.$$click=()=>t.pickOption(l.option),ne(n,e),u(e,()=>l.children),P(s=>{const r=t.isOptionDisabled(l.option),i=t.isOptionFocused(l.option);return r!==s._v$13&&f(e,"data-disabled",s._v$13=r),i!==s._v$14&&f(e,"data-focused",s._v$14=i),s},{_v$13:void 0,_v$14:void 0}),e})()};le(["focusin","focusout","mousedown","click","input","keydown"]);export{we as S};