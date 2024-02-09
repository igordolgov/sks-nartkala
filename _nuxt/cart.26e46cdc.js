import{u as _}from"./cart.57da5ccc.js";import{G as a,P as t,u as o,Q as r,W as i,X as d,L as n,F as l}from"./swiper-vue.0a23894d.js";import"./entry.646eb140.js";const m={class:"cart-page"},p=t("head",null,[t("title",null,"SKSAVIA - Корзина")],-1),u={class:"container-lg sm_px-4"},h={key:0,class:"cart-full mx-auto bg-white md_w-3/4 lg_w-2/4"},x={class:"py-2 text-xl text-center font-semibold"},b={class:"table-auto mx-auto w-full mt-2 text-sm sm_text-lg"},f=t("thead",{class:"bg-neutral-200 border-y-2 border-stone-400"},[t("tr",null,[t("th",{class:"px-3"},[r("Название"),t("span",{class:"text-sm font-normal"}," / Цена")]),t("th",null,"Кол-во"),t("th",{class:"px-3"},"Сумма"),t("th")])],-1),y={class:"pl-4 pr-3 py-1 md_text-md text-left font-semibold"},g={class:"font-light span-size block sm_inline"},v={class:"py-3 flex justify-center"},w=["onClick"],k={class:"bg-white"},C=["onClick"],F={class:"pr-3 py-2 text-right"},I=["onClick"],N=t("svg",{class:"w-6 h-6 mx-auto cursor-pointer hover_text-red-600",fill:"currentColor",viewbox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[t("path",{"fill-rule":"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z","clip-rule":"evenodd"})],-1),V=[N],z={class:"flex-col bg-amber-200 sticky z-10 inset-x-0 bottom-1 ml-auto mt-1 mr-3 sm_mr-0 px-4 py-2 border border-gray-500 rounded-lg w-[250px]"},S={class:"flex justify-between"},j=t("div",{class:"shipping"},"Сумма доставки:",-1),A={class:"pr-[2px]"},B={class:"flex justify-between"},L=t("div",{class:"summary font-bold"},"Итого:",-1),$={class:"font-bold"},E={key:1,class:"cart-empty text-center my-auto text-4xl text-stone-300 font-bold grid place-items-center"},Q={__name:"cart",setup(H){const e=_();return(M,D)=>(l(),a("div",m,[p,t("div",u,[o(e).isEmpty?(l(),a("div",E,"Корзина пуста")):(l(),a("div",h,[t("h1",x,[r("Корзина"),t("table",b,[f,(l(!0),a(i,null,d(o(e).items,s=>(l(),a("tbody",{class:"bg-neutral-50 border-y border-stone-400 px-3 py-2 sm_px-4",key:s.id},[t("tr",null,[t("td",y,[r(n(s.name)+" ",1),t("span",g,"/ "+n(Intl.NumberFormat("ru").format(s.price))+" ₽",1)]),t("td",v,[t("button",{class:"px-2 m-0",onClick:c=>o(e).decrement(s)},"-",8,w),t("span",k,n(s.amount),1),t("button",{class:"pr-3 pl-2 m-0",onClick:c=>o(e).increment(s)},"+",8,C)]),t("td",F,n(Intl.NumberFormat("ru").format(s.price*s.amount))+" ₽",1),t("td",{class:"text-gray-400",onClick:c=>o(e).clearItem(s.name)},V,8,I)])]))),128))])]),t("div",z,[t("div",S,[j,t("span",A,n(Intl.NumberFormat("ru").format(o(e).shipping))+" ₽",1)]),t("div",B,[L,t("span",$,n(Intl.NumberFormat("ru").format(o(e).total))+" ₽",1)])])]))])]))}};export{Q as default};
