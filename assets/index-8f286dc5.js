import{u as x,C as w,c as d,a as v,b as s,i as o,d as k,t as C}from"./index-dcad71c9.js";import{A as E}from"./AuthLayout-dcc2a522.js";import{C as i,A as u}from"./CustomButton-67892f68.js";import{G as y}from"./GridData-194cd78e.js";const D=C('<div class="w-full mt-12">'),F=()=>{const t=x(w),[c,g]=d([]),[a,f]=d(!1),n=[{field:"id",headerName:"ID"},{field:"email"},{field:"role"}];v(()=>{f(t.loading())});const r=async(e=!1)=>{e&&t.updateData("loading",!0),await u.get({url:"user",name:"User",token:t.token(),success:l=>{const h=l.data;g(h.data)}}),e&&t.updateData("loading",!1)},m=async()=>{t.updateData("loading",!0),await r(),t.updateData("loading",!1)},b=()=>{u.post({url:"user/excel",name:"User",token:t.token(),server:"export",data:{fields:n.map(e=>e.field==="action"?"":e.field)}})},p=()=>{u.post({url:"user/csv",name:"User",token:t.token(),server:"export",data:{fields:n.map(e=>e.field==="action"?"":e.field)}})};return s(E,{onFinish:m,canAccess:"admin",get children(){const e=D();return o(e,s(i,{title:"Export Excel",get disabled(){return a()},onClick:b,class:"ms-2 inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-1/8 mb-2"}),null),o(e,s(i,{title:"Export Csv",get disabled(){return a()},onClick:p,class:"ms-2 inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-1/8 mb-2"}),null),o(e,s(i,{title:"Refresh",get disabled(){return a()},onClick:()=>r(!0),class:"ms-2 inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-1/8 mb-2"}),null),o(e,(()=>{const l=k(()=>!!a());return()=>l()?null:s(y,{get data(){return c()},field:n})})(),null),e}})};export{F as default};