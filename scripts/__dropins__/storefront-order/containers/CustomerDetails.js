import{jsx as r,jsxs as o,Fragment as w}from"@dropins/tools/preact-jsx-runtime.js";import{Slot as F,classes as b}from"@dropins/tools/lib.js";import{useState as k,useEffect as x,useCallback as H,useMemo as V}from"@dropins/tools/preact-hooks.js";import{events as K}from"@dropins/tools/event-bus.js";import{c as G}from"../chunks/convertCase.js";import{g as J}from"../chunks/getAttributesForm.js";import{Icon as Q,Price as U,Card as X,Header as Y}from"@dropins/tools/components.js";import"../chunks/OrderCancelReasonsForm.js";import*as d from"@dropins/tools/preact-compat.js";import{f as ee}from"../chunks/returnOrdersHelper.js";import{f as te}from"../chunks/formatDateToLocale.js";import{D as re}from"../chunks/OrderLoaders.js";import"@dropins/tools/preact.js";import{Text as ne,useText as ie}from"@dropins/tools/i18n.js";import"../chunks/network-error.js";import"../chunks/fetch-graphql.js";import"@dropins/tools/fetch-graphql.js";const oe=a=>d.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...a},d.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M17.93 14.8V18.75H5.97C4.75 18.75 3.75 17.97 3.75 17V6.5M3.75 6.5C3.75 5.53 4.74 4.75 5.97 4.75H15.94V8.25H5.97C4.75 8.25 3.75 7.47 3.75 6.5Z",stroke:"currentColor",strokeWidth:1,strokeLinecap:"round",strokeLinejoin:"round"}),d.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M19.35 11.64H14.04V14.81H19.35V11.64Z",stroke:"currentColor",strokeWidth:1,strokeLinecap:"round",strokeLinejoin:"round"}),d.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M17.9304 11.64V8.25H15.1504",stroke:"currentColor",strokeWidth:1,strokeLinecap:"round",strokeLinejoin:"round"})),se=a=>d.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...a},d.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M2.00718 5H22.1507C22.7047 5 23.1579 5.45323 23.1579 6.00718V7.51794C23.1579 7.51794 1.01007 7.58844 1 7.55823V6.00718C1 5.45323 1.45323 5 2.00718 5Z",stroke:"currentColor",strokeWidth:1}),d.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M23.1579 9.78409V18.3451C23.1579 18.899 22.7047 19.3523 22.1507 19.3523H2.00718C1.45323 19.3523 1 18.899 1 18.3451V9.78409H23.1579Z",stroke:"currentColor",strokeWidth:1}),d.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M3.01465 15.9682H8.40305",stroke:"currentColor",strokeWidth:1,strokeLinecap:"round"}),d.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M17.6192 17.5897C18.4535 17.5897 19.1299 16.9133 19.1299 16.0789C19.1299 15.2446 18.4535 14.5682 17.6192 14.5682C16.7848 14.5682 16.1084 15.2446 16.1084 16.0789C16.1084 16.9133 16.7848 17.5897 17.6192 17.5897Z",stroke:"currentColor",strokeWidth:1}),d.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M19.8848 17.5897C20.7192 17.5897 21.3956 16.9133 21.3956 16.0789C21.3956 15.2446 20.7192 14.5682 19.8848 14.5682C19.0504 14.5682 18.374 15.2446 18.374 16.0789C18.374 16.9133 19.0504 17.5897 19.8848 17.5897Z",stroke:"currentColor",strokeWidth:1})),ce=["firstname","lastname","city","company","country_code","region","region_code","region_id","telephone","id","vat_id","postcode","street","street_2","default_shipping","default_billing"],de=({orderData:a})=>{const[t,g]=k(!0),[l,p]=k(a),[u,e]=k([]);x(()=>{const n=K.on("order/data",m=>{p(m)},{eager:!0});return()=>{n==null||n.off()}},[]),x(()=>{J("shortRequest").then(n=>{if(n){const m=n.map(({name:i,orderNumber:_,label:C})=>({name:G(i),orderNumber:_,label:ce.includes(i)?null:C}));e(m)}}).finally(()=>{g(!1)})},[]);const s=H(n=>{if(!u.length||!l||!l[n])return[];const m=Object.fromEntries(Object.entries(l[n]).map(([i,_])=>[i.toLowerCase(),_]));return u.filter(({name:i})=>m[i.toLowerCase()]).map(i=>({name:i.name,orderNumber:i.orderNumber,value:m[i.name.toLowerCase()],label:i.label}))},[u,l]),h=V(()=>({billingAddress:s("billingAddress"),shippingAddress:s("shippingAddress")}),[s]);return{order:l,normalizeAddress:h,loading:t}},ae=({loading:a,order:t,withHeader:g=!0,title:l,paymentIconsMap:p={},normalizeAddress:u,translations:e,slots:s})=>{var D,M,L,O,E,T;const h=!!(t!=null&&t.returnNumber),n=(D=t==null?void 0:t.returns)==null?void 0:D[0],m=V(()=>({checkmo:oe,card:se,...p}),[p]),i=H(B=>{var S;return(S=u[B])==null?void 0:S.map((c,q)=>r("p",{children:c.label?`${c.label}: ${Array.isArray(c.value)?c.value.join(" "):c==null?void 0:c.value}`:Array.isArray(c.value)?c.value.join(" "):c==null?void 0:c.value},q))},[u]);if(!t||a)return r(re,{});const _=(t==null?void 0:t.email)??"",C=(M=t==null?void 0:t.shipping)==null?void 0:M.code,A=(L=t==null?void 0:t.shipping)==null?void 0:L.amount,j=(O=t==null?void 0:t.shipping)==null?void 0:O.currency,f=t==null?void 0:t.payments,v=f&&f.length>0,N=v?(E=f[0])==null?void 0:E.name:"",y=v?(T=f[0])==null?void 0:T.code:"",R=v&&N!=="",W=o("div",{className:"order-customer-details-content__container-email",children:[r("div",{className:"order-customer-details-content__container-title",children:e==null?void 0:e.emailTitle}),r("p",{children:_})]}),I=o("div",{className:"order-customer-details-content__container-return-information",children:[r("div",{className:"order-customer-details-content__container-title",children:e==null?void 0:e.returnInformationTitle}),r("div",{className:"order-customer-details-content__container-description",children:s!=null&&s.OrderReturnInformation?r(F,{"data-testid":"OrderReturnInformation",name:"OrderReturnInformation",slot:s==null?void 0:s.OrderReturnInformation,context:n}):o(w,{children:[o("p",{children:[e.createdReturnAt,r("span",{children:te(n==null?void 0:n.createdReturnAt)})]}),o("p",{children:[e.returnStatusLabel,r(ne,{id:`Order.CustomerDetails.returnStatus.${ee(n==null?void 0:n.returnStatus)}`})]}),o("p",{children:[e.orderNumberLabel,r("span",{children:n==null?void 0:n.orderNumber})]})]})})]}),P=o("div",{className:"order-customer-details-content__container-shipping_address",children:[r("div",{className:"order-customer-details-content__container-title",children:e==null?void 0:e.shippingAddressTitle}),r("div",{className:"order-customer-details-content__container-description",children:i("shippingAddress")})]}),Z=o("div",{className:"order-customer-details-content__container-billing_address",children:[r("div",{className:"order-customer-details-content__container-title",children:e==null?void 0:e.billingAddressTitle}),r("div",{className:"order-customer-details-content__container-description",children:i("billingAddress")})]}),$=o("div",{className:"order-customer-details-content__container-payment_methods",children:[r("div",{className:"order-customer-details-content__container-title",children:e==null?void 0:e.paymentMethodsTitle}),R&&o("p",{"data-testid":"payment_methods_description",className:b([["order-customer-details-content__container-payment_methods--icon",!!m[y]]]),children:[r(Q,{source:m[y]}),N]})]}),z=o("div",{className:"order-customer-details-content__container-shipping_methods",children:[r("div",{className:"order-customer-details-content__container-title",children:e==null?void 0:e.shippingMethodsTitle}),C?r(w,{children:A?o("p",{"data-testid":"shipping_methods_price",children:[r(U,{amount:A,currency:j})," ",C]}):r("p",{"data-testid":"shipping_methods_placeholder",children:e==null?void 0:e.freeShipping})}):null]});return o(X,{"data-testid":"order-details",variant:"secondary",className:b(["order-customer-details-content"]),children:[g?r(Y,{title:l??(e==null?void 0:e.headerText)}):null,o("div",{className:"order-customer-details-content__container",children:[W,P,h?I:Z,h?null:z,h?null:$]})]})},Me=({paymentIconsMap:a,orderData:t,title:g,className:l,slots:p})=>{const u=ie({emailTitle:"Order.CustomerDetails.email.title",shippingAddressTitle:"Order.CustomerDetails.shippingAddress.title",shippingMethodsTitle:"Order.CustomerDetails.shippingMethods.title",billingAddressTitle:"Order.CustomerDetails.billingAddress.title",paymentMethodsTitle:"Order.CustomerDetails.paymentMethods.title",returnInformationTitle:"Order.CustomerDetails.returnInformation.title",headerText:"Order.CustomerDetails.headerText",freeShipping:"Order.CustomerDetails.freeShipping",createdReturnAt:"Order.CustomerDetails.orderReturnLabels.createdReturnAt",orderNumberLabel:"Order.CustomerDetails.orderReturnLabels.orderNumberLabel",returnStatusLabel:"Order.CustomerDetails.orderReturnLabels.returnStatusLabel"}),{order:e,normalizeAddress:s,loading:h}=de({orderData:t});return r("div",{className:b(["order-customer-details",l]),children:r(ae,{slots:p,loading:h,order:e,title:g,paymentIconsMap:a,normalizeAddress:s,translations:u})})};export{Me as CustomerDetails,Me as default};
