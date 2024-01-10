"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[890],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),k=a,f=d["".concat(c,".").concat(k)]||d[k]||s[k]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},380:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={sidebar_position:4},c="troubleshooting",p={unversionedId:"troubleshooting",id:"troubleshooting",title:"troubleshooting",description:"1\u3001CKibana\u542f\u52a8\u6210\u529f\u4e14\u6ca1\u62a5\u9519\uff0c\u4f46\u662f\u8bbf\u95eekibana\u51fa\u73b0\u5982\u4e0b\u9519\u8bef",source:"@site/docs/zh/troubleshooting.md",sourceDirName:".",slug:"/troubleshooting",permalink:"/ckibana-docs/zh/troubleshooting",editUrl:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"api-docs",permalink:"/ckibana-docs/zh/api-docs"},next:{title:"\u7b80\u4ecb",permalink:"/ckibana-docs/zh/"}},u=[{value:"1\u3001CKibana\u542f\u52a8\u6210\u529f\u4e14\u6ca1\u62a5\u9519\uff0c\u4f46\u662f\u8bbf\u95eekibana\u51fa\u73b0\u5982\u4e0b\u9519\u8bef",id:"1ckibana\u542f\u52a8\u6210\u529f\u4e14\u6ca1\u62a5\u9519\u4f46\u662f\u8bbf\u95eekibana\u51fa\u73b0\u5982\u4e0b\u9519\u8bef",children:[],level:2},{value:"2\u3001\u521b\u5efa\u4e0d\u4e86index pattern",id:"2\u521b\u5efa\u4e0d\u4e86index-pattern",children:[{value:"\u6392\u67e5\u6b65\u9aa4\u5982\u4e0b",id:"\u6392\u67e5\u6b65\u9aa4\u5982\u4e0b",children:[],level:3}],level:2},{value:"3\u3001\u521b\u5efaindex pattern\u65f6\u5019\uff0c\u9009\u4e0d\u4e86\u65f6\u95f4\u5b57\u6bb5",id:"3\u521b\u5efaindex-pattern\u65f6\u5019\u9009\u4e0d\u4e86\u65f6\u95f4\u5b57\u6bb5",children:[],level:2},{value:"4\u3001\u67e5\u4e0d\u51fa\u6765\u6570\u636e",id:"4\u67e5\u4e0d\u51fa\u6765\u6570\u636e",children:[],level:2},{value:"5\u3001ClickHouse cpu\u5360\u7528\u8fc7\u9ad8",id:"5clickhouse-cpu\u5360\u7528\u8fc7\u9ad8",children:[],level:2}],s={toc:u};function d(e){var t=e.components,l=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"troubleshooting"},"troubleshooting"),(0,i.kt)("h2",{id:"1ckibana\u542f\u52a8\u6210\u529f\u4e14\u6ca1\u62a5\u9519\u4f46\u662f\u8bbf\u95eekibana\u51fa\u73b0\u5982\u4e0b\u9519\u8bef"},"1\u3001CKibana\u542f\u52a8\u6210\u529f\u4e14\u6ca1\u62a5\u9519\uff0c\u4f46\u662f\u8bbf\u95eekibana\u51fa\u73b0\u5982\u4e0b\u9519\u8bef"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(1069).Z})),(0,i.kt)("p",null,"\u62a5\u6b64\u9519\u8bef\u5927\u6982\u7387\u662f\u521d\u59cb\u5316\u7684\u914d\u7f6e\u4e0d\u6b63\u5e38"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"1\uff09\u68c0\u67e5\u914d\u7f6e\u7684\u5143\u6570\u636e\u96c6\u7fa4\u662f\u5426\u6b63\u786e")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"2\uff09\u68c0\u67e5kibana\u914d\u7f6e\u7684elasticsearchHosts\u53c2\u6570\uff0c\u4ee3\u7406\u5730\u5740\u662f\u5426\u6b63\u786e\uff0c\u80fd\u5426\u8bbf\u95ee\u51fa\u73b0\u5982\u4e0b\u4fe1\u606f\uff0c\u6709\u5982\u4e0b\u4fe1\u606f\u624d\u8868\u793a\u4ee3\u7406\u914d\u7f6e\u6b63\u5e38")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(4937).Z})),(0,i.kt)("h2",{id:"2\u521b\u5efa\u4e0d\u4e86index-pattern"},"2\u3001\u521b\u5efa\u4e0d\u4e86index pattern"),(0,i.kt)("p",null,"\u5982\u56fe\uff0c\u7ea2\u6846\u5904\u5728\u521b\u5efaindex pattern\u7684\u65f6\u5019\uff0c\u5982\u679c\u6ca1\u6709\u9009\u9879\u53ef\u4ee5\u521b\u5efaindex pattern\uff0c\u6b63\u5e38indices\u6570\u91cf\u662f\u5927\u4e8e0\u7684"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(8434).Z})),(0,i.kt)("h3",{id:"\u6392\u67e5\u6b65\u9aa4\u5982\u4e0b"},"\u6392\u67e5\u6b65\u9aa4\u5982\u4e0b"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"1\uff09\u9996\u5148\u786e\u5b9a\u8f93\u5165\u7684index pattern\u8ddfck\u8868\u662f\u5426\u4e00\u81f4\uff0cindex pattern\u8ddf\u8ddfck\u8868\u540d\u662f\u7cbe\u786e\u5339\u914d")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"2\uff09\u68c0\u67e5ck\u914d\u7f6e\u662f\u5426\u6b63\u5e38")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"3\uff09\u4f7f\u7528\u65e5\u5fd7\u4e2d\u8f93\u51fa\u7684sql\uff0c\u5728ck\u4e2d\u662f\u5426\u80fd\u67e5\u8be2\u5230\u5bf9\u5e94\u8868")),(0,i.kt)("h2",{id:"3\u521b\u5efaindex-pattern\u65f6\u5019\u9009\u4e0d\u4e86\u65f6\u95f4\u5b57\u6bb5"},"3\u3001\u521b\u5efaindex pattern\u65f6\u5019\uff0c\u9009\u4e0d\u4e86\u65f6\u95f4\u5b57\u6bb5"),(0,i.kt)("p",null,"\u5339\u914d\u65f6\u95f4\u5b57\u6bb5\u7684\u903b\u8f91\u662f\uff1a"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"1\uff09\u5b57\u6bb5\u4e3aDate\u7c7b\u578b\uff0c\u6bd4\u5982DateTime64\u7c7b\u578b\uff0c\u4f1a\u88ab\u8ba4\u4e3a\u662f\u65f6\u95f4\u7c7b\u578b")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"2\uff09\u6216\u8005\u5b57\u6bb5\u540d\u4e2d\u5305\u542btime\uff0c\u6bd4\u5982\uff08",(0,i.kt)("inlineCode",{parentName:"strong"},"@timestamp")," UInt64\uff09\uff0c\u4f1a\u88ab\u8ba4\u4e3a\u662f\u65f6\u95f4\u7c7b\u578b")),(0,i.kt)("p",null,"\u8fd9\u4e24\u79cd\u60c5\u51b5\u4e0b\u6ee1\u8db3\u4efb\u610f\u4e00\u4e2a\uff0c\u5b57\u6bb5\u90fd\u4f1a\u88ab\u8ba4\u4e3a\u662f\u65f6\u95f4\u5b57\u6bb5\uff0c\u5982\u679c\u9009\u62e9\u4e0d\u4e86\u65f6\u95f4\u5b57\u6bb5\uff0c\u9700\u8981\u68c0\u67e5\u4e0bck\u8868\u4e2d\u5b57\u6bb5\u662f\u5426\u7b26\u5408\u5339\u914d\u903b\u8f91"),(0,i.kt)("h2",{id:"4\u67e5\u4e0d\u51fa\u6765\u6570\u636e"},"4\u3001\u67e5\u4e0d\u51fa\u6765\u6570\u636e"),(0,i.kt)("p",null,"\u6253\u5f00f12,\u53ef\u4ee5\u770b\u5230\u54cd\u5e94\u7684\u91cc\u9762\u6709sql,\u53ef\u4ee5\u770b\u5230\u5177\u4f53\u7684\u6267\u884csql\n",(0,i.kt)("img",{src:n(6736).Z})),(0,i.kt)("h2",{id:"5clickhouse-cpu\u5360\u7528\u8fc7\u9ad8"},"5\u3001ClickHouse cpu\u5360\u7528\u8fc7\u9ad8"),(0,i.kt)("p",null,"\u53ef\u4ee5\u57fa\u4e8eClickHouse\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"system.query_log")," \u6765\u505a\u5177\u4f53\u5206\u6790,\u91cd\u70b9\u5173\u6ce8",(0,i.kt)("inlineCode",{parentName:"p"},"read_rows"),"\u8ddf",(0,i.kt)("inlineCode",{parentName:"p"},"read_bytes"),"2\u4e2a\u6307\u6807\n\u5904\u7406\u65b9\u6848\u5305\u62ec:"),(0,i.kt)("p",null,"**1\uff09\u627e\u5230\u5bf9\u5e94sql\u52a0\u5165CKibana\u9ed1\u540d\u5355"),(0,i.kt)("p",null,"**2\uff09\u8c03\u6574\u5bf9\u5e94\u7684\u56fe\u8868"))}d.isMDXComponent=!0},8434:function(e,t,n){t.Z=n.p+"assets/images/img01-aa99af9a331d76742dd18077e7ec3ae6.png"},1069:function(e,t,n){t.Z=n.p+"assets/images/img02-866ea913c621c0783cbccec13fa22125.png"},4937:function(e,t,n){t.Z=n.p+"assets/images/img03-9a602c7078790aa3b2503dbe6f810cb3.png"},6736:function(e,t,n){t.Z=n.p+"assets/images/troubleshooting01-978f5c98da7d4607eb4ac57d4e4fab15.png"}}]);