import{_ as b,o as a,a as s,b as t,D as i,d as l,w as g,l as h,t as c}from"./index-880d652e.js";const f={name:"modal",props:{openShow:{type:Boolean},size:{type:String,default:"Regular"},hideFooter:{type:Boolean,default:!1},hideHeader:{type:Boolean,default:!1},hideConfirm:{type:Boolean,default:!1},title:{type:String},content:{type:String,default:""}},data(){return{zhTitle:"",buttonName:"",buttonColor:""}},created(){var e=this;switch(e.title){case"add":e.zhTitle="新增",e.buttonName="SAVE",e.buttonColor="success";break;case"del":e.zhTitle="刪除",e.buttonName="DELETE",e.buttonColor="danger";break;case"upd":e.zhTitle="修改",e.buttonName="UPDATE",e.buttonColor="primary";break;default:e.zhTitle=e.title,e.buttonName="OK",e.buttonColor="success";break}},methods:{clickclose(){this.$emit("close")},confirm(){this.$emit("confirm"),this.$emit("close")}}},m={key:0,id:"staticModal","data-modal-backdrop":"static",tabindex:"-1","aria-hidden":"true",class:"flex items-center justify-center bg-slate-300 bg-opacity-40 fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"},y={class:"relative w-full max-w-2xl max-h-full"},k={class:"relative bg-white rounded-lg shadow dark:bg-gray-700"},x={class:"flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600"},p={key:0,class:"text-xl font-semibold text-gray-900 dark:text-white"},v=t("svg",{class:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14"},[t("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})],-1),w=t("span",{class:"sr-only"},"Close modal",-1),_=[v,w],C={class:"p-6 space-y-6"},z={class:"text-base leading-relaxed text-gray-500 dark:text-gray-400"},M={key:0,class:"flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600"},N=["variant"];function T(e,o,r,B,d,n){return r.openShow?(a(),s("div",m,[t("div",y,[t("div",k,[t("div",x,[r.hideHeader?l("",!0):(a(),s("h3",p,[i(e.$slots,"header",{},()=>[h(c(d.zhTitle),1)])])),t("button",{onClick:o[0]||(o[0]=g(u=>n.clickclose(),["self"])),type:"button",class:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white","data-modal-hide":"staticModal"},_)]),t("div",C,[t("p",z,[i(e.$slots,"body",{},()=>[h(c(r.content),1)])])]),i(e.$slots,"footer",{},()=>[r.hideFooter?l("",!0):(a(),s("div",M,[r.hideConfirm?l("",!0):(a(),s("button",{key:0,onClick:o[1]||(o[1]=u=>n.confirm()),variant:d.buttonColor,"data-modal-hide":"staticModal",type:"button",class:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"},c(d.buttonName),9,N)),t("button",{onClick:o[2]||(o[2]=u=>n.clickclose()),"data-modal-hide":"staticModal",type:"button",class:"text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"},"Cancel")]))])])])])):l("",!0)}const E=b(f,[["render",T]]);export{E as M};
