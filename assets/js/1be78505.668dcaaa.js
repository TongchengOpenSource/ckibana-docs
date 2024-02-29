"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[714,90],{6234:(e,t,a)=>{a.r(t),a.d(t,{default:()=>O});var n=a(6540),o=a(5680),l=a(5920),r=a(9360),c=a(53),i=a(5965),s=a(9312),d=a(1773),m=a(8168);const u=e=>n.createElement("svg",(0,m.A)({width:"20",height:"20","aria-hidden":"true"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})));var p=a(1312),b=a(5489),h=a(6654),E=a(3679);const f={menuLinkText:"menuLinkText_1J2g"},A=(e,t)=>"link"===e.type?(0,i.ys)(e.href,t):"category"===e.type&&e.items.some((e=>A(e,t))),g=(0,n.memo)((function(e){let{items:t,...a}=e;return n.createElement(n.Fragment,null,t.map(((e,t)=>n.createElement(v,(0,m.A)({key:t,item:e},a)))))}));function v(e){let{item:t,...a}=e;return"category"===t.type?0===t.items.length?null:n.createElement(N,(0,m.A)({item:t},a)):n.createElement(_,(0,m.A)({item:t},a))}function N(e){let{item:t,onItemClick:a,activePath:o,level:l,...r}=e;const{items:s,label:d,collapsible:u,className:p}=t,b=A(t,o),{collapsed:h,setCollapsed:E,toggleCollapsed:v}=(0,i.uW)({initialState:()=>!!u&&(!b&&t.collapsed)});return function(e){let{isActive:t,collapsed:a,setCollapsed:o}=e;const l=(0,i.ZC)(t);(0,n.useEffect)((()=>{t&&!l&&a&&o(!1)}),[t,l,a,o])}({isActive:b,collapsed:h,setCollapsed:E}),n.createElement("li",{className:(0,c.A)(i.GN.docs.docSidebarItemCategory,i.GN.docs.docSidebarItemCategoryLevel(l),"menu__list-item",{"menu__list-item--collapsed":h},p)},n.createElement("a",(0,m.A)({className:(0,c.A)("menu__link",{"menu__link--sublist":u,"menu__link--active":u&&b,[f.menuLinkText]:!u}),onClick:u?e=>{e.preventDefault(),v()}:void 0,href:u?"#":void 0},r),d),n.createElement(i.Nt,{lazy:!0,as:"ul",className:"menu__list",collapsed:h},n.createElement(g,{items:s,tabIndex:h?-1:0,onItemClick:a,activePath:o,level:l+1})))}function _(e){let{item:t,onItemClick:a,activePath:o,level:l,...r}=e;const{href:s,label:d,className:u}=t,p=A(t,o);return n.createElement("li",{className:(0,c.A)(i.GN.docs.docSidebarItemLink,i.GN.docs.docSidebarItemLinkLevel(l),"menu__list-item",u),key:d},n.createElement(b.default,(0,m.A)({className:(0,c.A)("menu__link",{"menu__link--active":p}),"aria-current":p?"page":void 0,to:s},(0,h.A)(s)&&{onClick:a},r),(0,h.A)(s)?d:n.createElement("span",null,d,n.createElement(E.A,null))))}const k={sidebar:"sidebar_15mo",sidebarWithHideableNavbar:"sidebarWithHideableNavbar_267A",sidebarHidden:"sidebarHidden_2kNb",sidebarLogo:"sidebarLogo_3h0W",menu:"menu_Bmed",menuWithAnnouncementBar:"menuWithAnnouncementBar_2WvA",collapseSidebarButton:"collapseSidebarButton_1CGd",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_3E-R",sidebarMenuIcon:"sidebarMenuIcon_fgN0",sidebarMenuCloseIcon:"sidebarMenuCloseIcon_1lpH"};function C(e){let{onClick:t}=e;return n.createElement("button",{type:"button",title:(0,p.T)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,p.T)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,c.A)("button button--secondary button--outline",k.collapseSidebarButton),onClick:t},n.createElement(u,{className:k.collapseSidebarButtonIcon}))}function T(e){let{path:t,sidebar:a,onCollapse:o,isHidden:l}=e;const r=function(){const{isActive:e}=(0,i.Mj)(),[t,a]=(0,n.useState)(e);return(0,i.Mq)((t=>{let{scrollY:n}=t;e&&a(0===n)}),[e]),e&&t}(),{navbar:{hideOnScroll:s},hideableSidebar:m}=(0,i.pN)();return n.createElement("div",{className:(0,c.A)(k.sidebar,{[k.sidebarWithHideableNavbar]:s,[k.sidebarHidden]:l})},s&&n.createElement(d.A,{tabIndex:-1,className:k.sidebarLogo}),n.createElement("nav",{className:(0,c.A)("menu thin-scrollbar",k.menu,{[k.menuWithAnnouncementBar]:r})},n.createElement("ul",{className:(0,c.A)(i.GN.docs.docSidebarMenu,"menu__list")},n.createElement(g,{items:a,activePath:t,level:1}))),m&&n.createElement(C,{onClick:o}))}const S=e=>{let{toggleSidebar:t,sidebar:a,path:o}=e;return n.createElement("ul",{className:(0,c.A)(i.GN.docs.docSidebarMenu,"menu__list")},n.createElement(g,{items:a,activePath:o,onItemClick:()=>t(),level:1}))};function y(e){return n.createElement(i.Gh,{component:S,props:e})}const I=n.memo(T),M=n.memo(y);function B(e){const t=(0,s.A)(),a="desktop"===t||"ssr"===t,o="mobile"===t;return n.createElement(n.Fragment,null,a&&n.createElement(I,e),o&&n.createElement(M,e))}function w(e){return n.createElement(n.Fragment,null,n.createElement(B,e))}var L=a(9057),x=a(9090);const H="backToTopButton_35hR",W="backToTopButtonShow_18ls",F=!1;function P(){const e=(0,n.useRef)(null);return{smoothScrollTop:function(){e.current=F?(window.scrollTo({top:0,behavior:"smooth"}),()=>{}):function(){let e=null;return function t(){const a=document.documentElement.scrollTop;a>0&&(e=requestAnimationFrame(t),window.scrollTo(0,Math.floor(.85*a)))}(),()=>e&&cancelAnimationFrame(e)}()},cancelScrollToTop:()=>e.current?.()}}const G=function(){const[e,t]=(0,n.useState)(!1),a=(0,n.useRef)(!1),{smoothScrollTop:o,cancelScrollToTop:l}=P();return(0,i.Mq)(((e,n)=>{let{scrollY:o}=e;const r=n?.scrollY;if(!r)return;if(a.current)return void(a.current=!1);const c=o<r;if(c||l(),o<300)t(!1);else if(c){const e=document.documentElement.scrollHeight;o+window.innerHeight<e&&t(!0)}else t(!1)})),(0,i.$G)((e=>{e.location.hash&&(a.current=!0,t(!1))})),n.createElement("button",{"aria-label":(0,p.T)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,c.A)("clean-btn",i.GN.common.backToTopButton,H,{[W]:e}),type:"button",onClick:()=>o()})};var R=a(2681);const D={docPage:"docPage_31aa",docMainContainer:"docMainContainer_3ufF",docSidebarContainer:"docSidebarContainer_3Kbt",docMainContainerEnhanced:"docMainContainerEnhanced_3NYZ",docSidebarContainerHidden:"docSidebarContainerHidden_3pA8",collapsedDocSidebar:"collapsedDocSidebar_2JMH",expandSidebarButtonIcon:"expandSidebarButtonIcon_1naQ",docItemWrapperEnhanced:"docItemWrapperEnhanced_2vyJ"};var q=a(8895);function j(e){let{currentDocRoute:t,versionMetadata:a,children:l}=e;const{pluginId:s,version:d}=a,m=t.sidebar,b=m?a.docsSidebars[m]:void 0,[h,E]=(0,n.useState)(!1),[f,A]=(0,n.useState)(!1),g=(0,n.useCallback)((()=>{f&&A(!1),E((e=>!e))}),[f]);return n.createElement(r.A,{wrapperClassName:i.GN.wrapper.docsPages,pageClassName:i.GN.page.docsDocPage,searchMetadata:{version:d,tag:(0,i.tU)(s,d)}},n.createElement("div",{className:D.docPage},n.createElement(G,null),b&&n.createElement("aside",{className:(0,c.A)(D.docSidebarContainer,{[D.docSidebarContainerHidden]:h}),onTransitionEnd:e=>{e.currentTarget.classList.contains(D.docSidebarContainer)&&h&&A(!0)}},n.createElement(w,{key:m,sidebar:b,path:t.path,onCollapse:g,isHidden:f}),f&&n.createElement("div",{className:D.collapsedDocSidebar,title:(0,p.T)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,p.T)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:g,onClick:g},n.createElement(u,{className:D.expandSidebarButtonIcon}))),n.createElement("main",{className:(0,c.A)(D.docMainContainer,{[D.docMainContainerEnhanced]:h||!b})},n.createElement("div",{className:(0,c.A)("container padding-top--md padding-bottom--lg",D.docItemWrapper,{[D.docItemWrapperEnhanced]:h})},n.createElement(o.xA,{components:L.A},l)))))}const O=function(e){const{route:{routes:t},versionMetadata:a,location:o}=e,r=t.find((e=>(0,R.B6)(o.pathname,e)));return r?n.createElement(n.Fragment,null,n.createElement(q.default,null,n.createElement("html",{className:a.className})),n.createElement(j,{currentDocRoute:r,versionMetadata:a},(0,l.A)(t,{versionMetadata:a}))):n.createElement(x.default,null)}},9090:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});var n=a(6540),o=a(9360),l=a(1312);const r=function(){return n.createElement(o.A,{title:(0,l.T)({id:"theme.NotFound.title",message:"Page Not Found"})},n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(l.A,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.createElement("p",null,n.createElement(l.A,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.createElement("p",null,n.createElement(l.A,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},9057:(e,t,a)=>{a.d(t,{A:()=>s});var n=a(6540),o=a(9409),l=a(5232),r=a(1284),c=a(8478);const i=(e,t,a)=>{if(Array.isArray(e?.props?.children)&&e?.props?.originalType){let n=a.createElement(e?.props?.originalType);const o=(0,r.qg)((0,r.As)(e?.props||{}));delete o.children,Object.keys(o).forEach((e=>{n.setAttribute(e,o[e])})),t.appendChild(i(e?.props?.children,n,a))}else if(Array.isArray(e))e.forEach((e=>{i(e,t,a)}));else if(e?.props?.originalType){let n=a.createElement(e?.props?.originalType);const o=(0,r.qg)((0,r.As)(e?.props||{}));delete o.children,Object.keys(o).forEach((e=>{n.setAttribute(e,o[e])})),t.appendChild(i(e?.props?.children,n,a))}else t.append(e);return t},s={...o.A,table:e=>{let{children:t,...a}=e;return n.createElement(c.default,null,(()=>(e=>{let{children:t,...a}=e;const o=t[0]?.props.children||t?.props.children,r=!Array.isArray(o)||o.every((e=>{let{props:t}=e;return t.children})),c={...a},s=r?t:t.slice(1),d=document.createElement("table");Object.keys(c).forEach((e=>{d.setAttribute(e,c[e])})),i(s,d,document);const m=document.createElement("div");m.appendChild(d),m.setAttribute("class","table-wrapper");const u=(0,l.Ay)(m.innerHTML);return n.createElement("div",{className:"table-wrapper"},u)})({children:t,...a})))}}}}]);