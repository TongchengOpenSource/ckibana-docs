"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[580],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3634:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={},s="Introduce",c={unversionedId:"index",id:"index",title:"Introduce",description:"License",source:"@site/docs/en/index.md",sourceDirName:".",slug:"/",permalink:"/ckibana-docs/zh/en/",editUrl:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"troubleshooting",permalink:"/ckibana-docs/zh/en/troubleshooting"}},p=[{value:"Features",id:"features",children:[{value:"Supported Aggregation Syntax:",id:"supported-aggregation-syntax",children:[],level:4}],level:2},{value:"Get started",id:"get-started",children:[{value:"quick start",id:"quick-start",children:[],level:3},{value:"Local run CKibana",id:"local-run-ckibana",children:[],level:3}],level:2},{value:"TODO",id:"todo",children:[],level:2},{value:"License",id:"license",children:[],level:2}],u={toc:p};function d(e){var t=e.components,o=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduce"},"Introduce"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://opensource.org/licenses/Apache-2.0"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/License-Apache%202.0-blue.svg",alt:"License"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/TongchengOpenSource/ckibana/releases"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/github/release/TongchengOpenSource/ckibana.svg?color=brightgreen&label=Release",alt:"Release"}))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"ClickHouse adapter/proxy for Kibana")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"ClickHouse visualization tool")),(0,i.kt)("p",null,"CKibana is a service for convenient analysis of ClickHouse data using native Kibana."),(0,i.kt)("p",null,"A typical use case is when nginx log storage is migrated from ElasticSearch to ClickHouse,users can seamlessly continue their log query and analysis with Kibana."),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Version Support: Compatible with ElasticSearch and Kibana versions 6.x, 7.x, and 8.x."),(0,i.kt)("li",{parentName:"ul"},"Syntax Support: Compatible with common ElasticSearch syntax (note: ip_range and date_range can only be queried using the querystring syntax in the search box)."),(0,i.kt)("li",{parentName:"ul"},"Sampling Function: For queries with hit results exceeding the threshold, it supports dynamic calculation of sampling and result restoration to improve query performance and ensure that the basic trend of the chart is consistent with the real data trend (the larger the flow control threshold, the closer the real chart trend is)."),(0,i.kt)("li",{parentName:"ul"},"Cache Function: Supports using ElasticSearch to cache results to improve the performance of repeated queries."),(0,i.kt)("li",{parentName:"ul"},"Time Round Function: Supports rounding query time, for example, round 20 seconds (example: if the query time is in seconds 0-19, it will automatically round to 0; if it is in seconds 20-39, it will automatically round to 20 seconds, for example, if the query time is from 01:50:15 to 05:52:47, it will automatically adjust to 01:50:00 to 05:52:40). Used in conjunction with the cache function, it can effectively alleviate the pressure on ClickHouse caused by concurrent queries of the same statement by multiple users."),(0,i.kt)("li",{parentName:"ul"},"Blacklist Function: Supports setting a blacklist to prevent complex statements from causing pressure on ClickHouse."),(0,i.kt)("li",{parentName:"ul"},"Query Template Function: Supports syntax monitoring after removing time to facilitate quick problem location. Used in conjunction with the blacklist function, it can effectively ensure the stability of ClickHouse."),(0,i.kt)("li",{parentName:"ul"},"Query Circuit Breaker: Supports advanced features such as configuring the maximum query time range.")),(0,i.kt)("h4",{id:"supported-aggregation-syntax"},"Supported Aggregation Syntax:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"ES Syntax"),(0,i.kt)("th",{parentName:"tr",align:null},"Note"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"terms"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"sum"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"min"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"max"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"avg"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"percentile_ranks"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"percentiles"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"filters"),(0,i.kt)("td",{parentName:"tr",align:null},"Currently, only the first level of aggregation is supported.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"filter item"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"cardinality"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("h2",{id:"get-started"},"Get started"),(0,i.kt)("h3",{id:"quick-start"},"quick start"),(0,i.kt)("p",null,"To quickly experience Kibana, you can deploy it quickly using docker-compose."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/TongchengOpenSource/ckibana/blob/main/docker-compose/README.md"},"ckibana-quick-start-doc")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# Enter the docker-compose directory.\ncd ckibana/docker-compose\n# Deploy\ndocker-compose up -d\n")),(0,i.kt)("p",null,"After deployment is complete, access Kibana in a browser at\uff1a ",(0,i.kt)("a",{parentName:"p",href:"http://127.0.0.1:5601/"},"http://127.0.0.1:5601/")),(0,i.kt)("p",null,"A process with built-in mock data has been included. After importing the Kibana configuration file (dashboard, index-pattern, etc.), you can start experiencing it!"),(0,i.kt)("p",null,"Configuration file path\uff1adocker-compose/quickstart-export.json\n",(0,i.kt)("img",{src:n(8514).Z}),"\nEffect display\uff1a\n",(0,i.kt)("img",{src:n(7965).Z})),(0,i.kt)("h3",{id:"local-run-ckibana"},"Local run CKibana"),(0,i.kt)("p",null,"CKibana can be run on all major operating systems and requires Java JDK version 17 or higher to be installed. To check, please run:",(0,i.kt)("inlineCode",{parentName:"p"},"java -version"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'$ java -version\njava version "17.0.5" \n')),(0,i.kt)("p",null,"The proxy service depends on the ",(0,i.kt)("strong",{parentName:"p"},"ES, CK, and Kibana services"),", which need to be prepared in advance. The following steps only include querying data from CK and do not include writing data to CK."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"1\uff09Create a database and a table")),(0,i.kt)("p",null,"To initialize database and table structures in ClickHouse, please refer to:",(0,i.kt)("a",{parentName:"p",href:"https://github.com/TongchengOpenSource/ckibana-docs/blob/main/api-docs.md"},"api-docs")," Detailed explanation of creating a table"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"2\uff09Start CKibana")),(0,i.kt)("p",null,"To modify the ES configuration in CKibana, you need to change it to your own ES information. The configuration file path is ",(0,i.kt)("inlineCode",{parentName:"p"},"src/main/resources/application.yml")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"metadata-config:\n  hosts: your es metadata cluster hosts\n  headers:\n    headerKey: yourHeaderValue\n")),(0,i.kt)("p",null,"Package and run or run locally directly ",(0,i.kt)("inlineCode",{parentName:"p"},"com.ly.ckibana.Bootstrap")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"### start ckibana\n$ nohup java -jar ckibana.jar > run.out 2>&1 &\n\n### check whether ckibana is successfully started\n$ tail -f ~/logs/app.log\nTomcat started on port(s): 8080 (http) with context path ''\nStarted Bootstrap in 1.474 seconds\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"3\uff09start kibana")),(0,i.kt)("p",null,"Configure the elasticsearchHosts parameter in Kibana to the CKibana proxy address, so that it can be routed to the proxy service."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"eg\uff1aelasticsearchHosts=http://ip:port\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"4\uff09Configure the index pattern whitelist")),(0,i.kt)("p",null,"Only after configuring the corresponding whitelist can you proceed to create it in the next step ",(0,i.kt)("inlineCode",{parentName:"p"},"index pattern")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"5\uff09Create ",(0,i.kt)("inlineCode",{parentName:"strong"},"index pattern")," in Kibana")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"eg\uff1aIf the CK table name is `table_test`, then create an index pattern `table_test`\n")),(0,i.kt)("p",null,"After completing the above 5 steps, you can create a dashboard and start using it."),(0,i.kt)("h2",{id:"todo"},"TODO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Segmented query: Supports automatically splitting query time, which can fully utilize the cache and improve query performance.")),(0,i.kt)("h2",{id:"license"},"License"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"http://www.apache.org/licenses/LICENSE-2.0.html"},"Apache License, Version 2.0")," Copyright (C) Apache Software Foundation"))}d.isMDXComponent=!0},8514:function(e,t,n){t.Z=n.p+"assets/images/dashboard-import-57535ddd5204d4c2029f1e4499ee1e03.jpg"},7965:function(e,t,n){t.Z=n.p+"assets/images/dashboard-653023ff597452162127fb4b0c1328fe.jpg"}}]);