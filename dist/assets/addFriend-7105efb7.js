import{o as a,a as s,b as e,e as c,u as g,r as b,c as f,h as p,m,q as h,v,f as x}from"./index-880d652e.js";function k(n,t){return a(),s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[e("path",{d:"M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"}),e("path",{d:"M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"})])}const _={class:"p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-24 md:mt-16 lg:mt-0"},w={class:"relative mb-6"},y={class:"absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none"},I={__name:"addFriend",setup(n){const t=c(),l=g(),r=b(""),d=f(()=>l.state.loginInfo);function u(){x({method:"post",url:"API/friends",params:{method:"insFriend",loginInfo:d.value},data:{email:r.value}}).then(function(){t.go(0)})}return(V,o)=>(a(),s("div",_,[e("div",w,[e("div",y,[p(m(k),{class:"h-6 w-6"})]),h(e("input",{type:"text",id:"input-group-1","onUpdate:modelValue":o[0]||(o[0]=i=>r.value=i),class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-12 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"name@flowbite.com"},null,512),[[v,r.value]])]),e("button",{type:"button",onClick:u,class:"px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"},"Add")]))}};export{I as default};
