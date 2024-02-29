"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[789],{5680:(e,a,n)=>{n.d(a,{xA:()=>g,yg:()=>d});var t=n(6540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=t.createContext({}),c=function(e){var a=t.useContext(p),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},g=function(e){var a=c(e.components);return t.createElement(p.Provider,{value:a},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},y=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),s=c(n),y=r,d=s["".concat(p,".").concat(y)]||s[y]||u[y]||l;return n?t.createElement(d,i(i({ref:a},g),{},{components:n})):t.createElement(d,i({ref:a},g))}));function d(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=y;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=e,o[s]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}y.displayName="MDXCreateElement"},9452:(e,a,n)=>{n.r(a),n.d(a,{contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var t=n(8168),r=(n(6540),n(5680));n(1873);const l={},i="\u7b80\u4ecb",o={unversionedId:"index",id:"index",title:"\u7b80\u4ecb",description:"License",source:"@site/docs/zh/index.md",sourceDirName:".",slug:"/",permalink:"/ckibana-docs/zh/",editUrl:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"troubleshooting",permalink:"/ckibana-docs/zh/troubleshooting"}},p=[{value:"\u529f\u80fd\u7279\u6027",id:"\u529f\u80fd\u7279\u6027",children:[{value:"\u652f\u6301\u7684\u805a\u5408\u8bed\u6cd5\uff1a",id:"\u652f\u6301\u7684\u805a\u5408\u8bed\u6cd5",children:[],level:4}],level:2},{value:"Get started",id:"get-started",children:[{value:"quick start",id:"quick-start",children:[],level:3},{value:"\u672c\u5730\u8fd0\u884c ckibana",id:"\u672c\u5730\u8fd0\u884c-ckibana",children:[],level:3}],level:2},{value:"TODO",id:"todo",children:[],level:2},{value:"\u6587\u6863\u5730\u5740",id:"\u6587\u6863\u5730\u5740",children:[],level:2},{value:"Contact",id:"contact",children:[],level:2},{value:"License",id:"license",children:[],level:2}],c={toc:p},g="wrapper";function s(e){let{components:a,...l}=e;return(0,r.yg)(g,(0,t.A)({},c,l,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://opensource.org/licenses/Apache-2.0"},(0,r.yg)("img",{parentName:"a",src:"https://img.shields.io/badge/License-Apache%202.0-blue.svg",alt:"License"})),"\n",(0,r.yg)("a",{parentName:"p",href:"https://github.com/TongchengOpenSource/ckibana/releases"},(0,r.yg)("img",{parentName:"a",src:"https://img.shields.io/github/release/TongchengOpenSource/ckibana.svg?color=brightgreen&label=Release",alt:"Release"}))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"ClickHouse adapter/proxy for Kibana")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"ClickHouse visualization tool")),(0,r.yg)("p",null,"CKibana\u662f\u4e00\u4e2a\u4e3a\u4e86\u80fd\u591f\u5728\u539f\u751fkibana\u4e0a\u76f4\u63a5\u4f7f\u7528ElasticSearch\u8bed\u6cd5\u67e5\u8be2ClickHouse\u7684\u670d\u52a1\u3002\u5e38\u89c1\u4f7f\u7528\u573a\u666f\u5982:nginx\u65e5\u5fd7\u4eceElasticSearch\u8fc1\u79fb\u5230ClickHouse\u540e,\u4e0d\u9700\u8981\u4e1a\u52a1\u8c03\u6574\u4f7f\u7528\u4e60\u60ef\u5c31\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u3002"),(0,r.yg)("h2",{id:"\u529f\u80fd\u7279\u6027"},"\u529f\u80fd\u7279\u6027"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u7248\u672c\u652f\u6301: \u517c\u5bb9ElasticSearch\u8ddfkibana 6.x\u30017.x\u30018.x \u7248\u672c"),(0,r.yg)("li",{parentName:"ul"},"\u8bed\u6cd5\u652f\u6301: \u517c\u5bb9ElasticSearch\u5e38\u7528\u8bed\u6cd5(\u6ce8: ip_range\u8ddfdate_range\u4ec5\u53ef\u5728\u641c\u7d22\u6846\u4e2d\u4f7f\u7528querystring\u8bed\u6cd5\u67e5\u8be2)"),(0,r.yg)("li",{parentName:"ul"},"\u91c7\u6837\u529f\u80fd: \u5bf9\u4e8e\u547d\u4e2d\u7ed3\u679c\u8d85\u8fc7\u9608\u503c\u7684\u67e5\u8be2,\u652f\u6301\u52a8\u6001\u8ba1\u7b97\u91c7\u6837+\u8fd8\u539f\u7ed3\u679c,\u63d0\u9ad8\u67e5\u8be2\u6027\u80fd\u4e14\u4fdd\u969c\u56fe\u8868\u8d8b\u52bf\u57fa\u672c\u8ddf\u771f\u5b9e\u6570\u636e\u8d8b\u52bf\u4e00\u81f4(\u9650\u6d41\u9608\u503c\u8d8a\u5927\u8ddf\u771f\u5b9e\u56fe\u8868\u8d8b\u52bf\u8d8a\u63a5\u8fd1)\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u7f13\u5b58\u529f\u80fd: \u652f\u6301\u4f7f\u7528ElasticSearch\u6765\u505a\u7ed3\u679c\u7f13\u5b58,\u6765\u63d0\u5347\u91cd\u590d\u67e5\u8be2\u7684\u6027\u80fd"),(0,r.yg)("li",{parentName:"ul"},"\u65f6\u95f4Round\u529f\u80fd: \u652f\u6301round\u67e5\u8be2\u65f6\u95f4,\u6bd4\u598220s\u7684round(\u4f8b\u5b50: \u67e5\u8be2\u65f6\u95f4\u79d2\u57280-19s\u5219\u81ea\u52a8round\u52300,20s-39s\u81ea\u52a8round\u523020s,\u6bd4\u5982\u67e5\u8be2\u65f6\u95f4\u662f\u4ece01:50:15\u523005:52:47,\u5219\u81ea\u52a8\u8c03\u6574\u4e3a\u4ece01:\n50:00\u523005:52:40),\u914d\u5408\u7f13\u5b58\u529f\u80fd\u4f7f\u7528\u53ef\u4ee5\u5f88\u597d\u7684\u7f13\u89e3\u591a\u4e2a\u7528\u6237\u5e76\u53d1\u67e5\u8be2\u76f8\u540c\u8bed\u53e5\u9020\u6210ClickHouse\u7684\u538b\u529b"),(0,r.yg)("li",{parentName:"ul"},"\u9ed1\u540d\u5355\u529f\u80fd: \u652f\u6301\u8bbe\u7f6e\u9ed1\u540d\u5355\u6765\u9632\u6b62\u590d\u6742\u8bed\u53e5\u9020\u6210ClickHouse\u538b\u529b"),(0,r.yg)("li",{parentName:"ul"},"\u67e5\u8be2\u6a21\u677f\u529f\u80fd: \u652f\u6301\u6309\u7167\u53bb\u9664\u65f6\u95f4\u540e\u7684\u8bed\u6cd5\u76d1\u63a7,\u65b9\u4fbf\u5feb\u901f\u5b9a\u4f4d\u95ee\u9898,\u914d\u5408\u9ed1\u540d\u5355\u529f\u80fd\u4e00\u8d77\u4f7f\u7528\u53ef\u4ee5\u5f88\u597d\u7684\u4fdd\u969cClickHouse"),(0,r.yg)("li",{parentName:"ul"},"\u67e5\u8be2\u7194\u65ad: \u652f\u6301\u914d\u7f6e\u6700\u5927\u67e5\u8be2\u65f6\u95f4\u8303\u56f4\u7b49\u9ad8\u7ea7\u529f\u80fd")),(0,r.yg)("h4",{id:"\u652f\u6301\u7684\u805a\u5408\u8bed\u6cd5"},"\u652f\u6301\u7684\u805a\u5408\u8bed\u6cd5\uff1a"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"ES\u8bed\u6cd5"),(0,r.yg)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"terms"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sum"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"min"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"max"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"avg"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"percentile_ranks"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"percentiles"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"filters"),(0,r.yg)("td",{parentName:"tr",align:null},"\u76ee\u524d\u4ec5\u652f\u6301\u7b2c\u4e00\u5c42\u805a\u5408")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"filter item"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"cardinality"),(0,r.yg)("td",{parentName:"tr",align:null})))),(0,r.yg)("h2",{id:"get-started"},"Get started"),(0,r.yg)("h3",{id:"quick-start"},"quick start"),(0,r.yg)("p",null,"\u8981\u5feb\u901f\u4f53\u9a8cckibana\uff0c\u53ef\u4ee5\u901a\u8fc7docker-compose\u8fdb\u884c\u5feb\u901f\u90e8\u7f72"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/TongchengOpenSource/ckibana/blob/main/docker-compose/README.md"},"ckibana-quick-start\u6587\u6863")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"# \u8fdb\u5165docker-compose\u76ee\u5f55\ncd ckibana/docker-compose\n# \u90e8\u7f72\ndocker-compose up -d\n")),(0,r.yg)("p",null,"\u90e8\u7f72\u5b8c\u6210\u540e\uff0c\u5728\u6d4f\u89c8\u5668\u8bbf\u95eekibana\uff1a",(0,r.yg)("a",{parentName:"p",href:"http://127.0.0.1:5601/"},"http://127.0.0.1:5601/")),(0,r.yg)("p",null,"\u5df2\u5185\u7f6e\u4e86mock\u6570\u636e\u7684\u6d41\u7a0b\uff0c\u5bfc\u5165kibana\u914d\u7f6e\u6587\u4ef6\uff08\u5927\u76d8\u3001index-pattern\u7b49\uff09\uff0c\u5c31\u53ef\u4ee5\u5f00\u59cb\u4f53\u9a8c\u4e86\uff01"),(0,r.yg)("p",null,"\u914d\u7f6e\u6587\u4ef6\u8def\u5f84\uff1adocker-compose/quickstart-export.json\n",(0,r.yg)("img",{src:n(8049).A}),"\n\u6548\u679c\u5c55\u793a\uff1a\n",(0,r.yg)("img",{src:n(427).A})),(0,r.yg)("h3",{id:"\u672c\u5730\u8fd0\u884c-ckibana"},"\u672c\u5730\u8fd0\u884c ckibana"),(0,r.yg)("p",null,"ckibana\u53ef\u4ee5\u5728\u6240\u6709\u4e3b\u8981\u64cd\u4f5c\u7cfb\u7edf\u4e0a\u8fd0\u884c\uff0c\u9700\u8981\u5b89\u88c5Java JDK\u7248\u672c17\u6216\u66f4\u9ad8\u7248\u672c\u3002\u8981\u68c0\u67e5\uff0c\u8bf7\u8fd0\u884c\n",(0,r.yg)("inlineCode",{parentName:"p"},"java -version"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'$ java -version\njava version "17.0.5" \n')),(0,r.yg)("p",null,"\u4ee3\u7406\u670d\u52a1\u4f9d\u8d56",(0,r.yg)("strong",{parentName:"p"},"ES\u3001CK\u3001Kibana"),"\u670d\u52a1\uff0c\u9700\u8981\u63d0\u524d\u51c6\u5907\u597d\u3002\u4ee5\u4e0b\u53ea\u5305\u542b\u4ececk\u67e5\u8be2\u6570\u636e\u6b65\u9aa4\uff0c\u4e0d\u5305\u542b\u5199\u6570\u636e\u5230ck\u7684\u6b65\u9aa4\u3002"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"1\uff09\u5efa\u5e93\u3001\u5efa\u8868")),(0,r.yg)("p",null,"\u5728ck\u4e2d\u521d\u59cb\u5316\u5e93\u3001\u8868\u7ed3\u6784\uff0c\u53ef\u4ee5\u53c2\u8003",(0,r.yg)("a",{parentName:"p",href:"https://github.com/TongchengOpenSource/ckibana-docs/blob/main/api-docs.md"},"api-docs")," \u5efa\u8868\u8be6\u89e3\u90e8\u5206"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"2\uff09\u542f\u52a8ckibana")),(0,r.yg)("p",null,"\u4fee\u6539ckibana\u4e2d\u7684ES\u914d\u7f6e\uff0c\u9700\u8981\u6539\u4e3a\u81ea\u8eab\u7684ES\u4fe1\u606f\uff0c\u914d\u7f6e\u6587\u4ef6\u8def\u5f84\u4e3a",(0,r.yg)("inlineCode",{parentName:"p"},"src/main/resources/application.yml")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"metadata-config:\n  hosts: your es metadata cluster hosts\n  headers:\n    headerKey: yourHeaderValue\n")),(0,r.yg)("p",null,"\u6253\u5305\u8fd0\u884c \u6216\u8005 \u672c\u5730\u8fd0\u884c\u76f4\u63a5com.ly.ckibana.Bootstrap\u7c7b\u5373\u53ef"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"### start ckibana\n$ nohup java -jar ckibana.jar > run.out 2>&1 &\n\n### check whether ckibana is successfully started\n$ tail -f ~/logs/app.log\nTomcat started on port(s): 8080 (http) with context path ''\nStarted Bootstrap in 1.474 seconds\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"3\uff09\u542f\u52a8kibana")),(0,r.yg)("p",null,"kibana\u7684elasticsearchHosts\u53c2\u6570\u914d\u7f6e\u4e3ackibana\u4ee3\u7406\u5730\u5740\uff0c\u8fd9\u6837\u5c31\u80fd\u8d70\u5230\u4ee3\u7406\u670d\u52a1\u4e2d\u6765"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"eg\uff1aelasticsearchHosts=http://ip:port\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"4\uff09\u914d\u7f6eindex pattern\u767d\u540d\u5355")),(0,r.yg)("p",null,"\u914d\u7f6e\u4e86\u5bf9\u5e94\u7684\u767d\u540d\u5355\uff0c\u624d\u53ef\u4ee5\u5728\u4e0b\u4e00\u6b65\u521b\u5efaindex pattern\uff0c",(0,r.yg)("strong",{parentName:"p"},"\u914d\u7f6e\u7684\u767d\u540d\u5355\u9700\u8981\u8ddf\u8868\u540d\u4e00\u81f4"),"\uff0c\u53ef\u4ee5\u53c2\u8003",(0,r.yg)("a",{parentName:"p",href:"https://github.com/TongchengOpenSource/ckibana-docs/blob/main/api-docs.md"},"api-docs")," \u66f4\u65b0\u767d\u540d\u5355\u7d22\u5f15\u63a5\u53e3"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"5\uff09\u5728kibana\u4e2d\u521b\u5efaindex pattern")),(0,r.yg)("p",null,"\u5728kibana\u9875\u9762\u521b\u5efaindex pattern\uff0c\u540d\u5b57\u8ddf1\uff09\u7684\u8868\u540d\u4e00\u81f4\uff0c\u4e144\uff09\u4e2d\u914d\u7f6e\u767d\u540d\u5355\uff0c\u7136\u540e\u5c31\u53ef\u4ee5\u5728kibana\u4e2d\u8fdb\u884c\u67e5\u8be2\u4e86"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"eg\uff1a\u5982\u679cck\u8868\u540d\u662ftable_test\uff0c\u5219\u521b\u5efaindex pattern\u7684\u540d\u5b57\u5c31\u662ftable_test\n")),(0,r.yg)("p",null,"\u4ee5\u4e0a5\u6b65\u90fd\u64cd\u4f5c\u5b8c\u4ee5\u540e\uff0c\u5c31\u53ef\u4ee5\u521b\u5efa\u5927\u76d8\uff0c\u5f00\u59cb\u8fdb\u884c\u4f7f\u7528\u4e86"),(0,r.yg)("h2",{id:"todo"},"TODO"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u5206\u6bb5\u67e5\u8be2: \u652f\u6301\u81ea\u52a8\u62c6\u5206\u67e5\u8be2\u65f6\u95f4,\u53ef\u4ee5\u5145\u5206\u5229\u7528\u7f13\u5b58,\u63d0\u5347\u67e5\u8be2\u6027\u80fd"),(0,r.yg)("li",{parentName:"ul"},"IDS\u67e5\u8be2: \u76ee\u524dv8\u7248\u672c\u51e0\u5904\u6682\u672a\u652f\u6301\u6570\u636eJson\u5c55\u793a\u4e0eDoc View\uff0c\u4f8b\u5982\uff1aJson\u3001Single document\u3001Surrounding documents\u7b49\u3002")),(0,r.yg)("h2",{id:"\u6587\u6863\u5730\u5740"},"\u6587\u6863\u5730\u5740"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/TongchengOpenSource/ckibana-docs"},"CKibane-docs")),(0,r.yg)("h2",{id:"contact"},"Contact"),(0,r.yg)("p",null,"\u613f\u610f\u53c2\u4e0e\u6784\u5efaCKibana\u6216\u8005\u662f\u9700\u8981\u4ea4\u6d41\u95ee\u9898\u53ef\u4ee5\u52a0\u5165\u5fae\u4fe1\u7fa4(\u4f01\u4e1a\u7248\u5fae\u4fe1\u548c\u4e2a\u4eba\u7248\u672c\u5fae\u4fe1\u5747\u53ef)\n",(0,r.yg)("img",{parentName:"p",src:"http://oss.17usoft.com/infra-github/ckibana/join-us.png",alt:null})),(0,r.yg)("h2",{id:"license"},"License"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"http://www.apache.org/licenses/LICENSE-2.0.html"},"Apache License, Version 2.0")," Copyright (C) Apache Software Foundation"))}s.isMDXComponent=!0},8049:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/dashboard-import-57535ddd5204d4c2029f1e4499ee1e03.jpg"},427:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/dashboard-653023ff597452162127fb4b0c1328fe.jpg"},1873:(e,a,n)=>{n(6540)}}]);