"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[8182],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),k=c(n),d=l,m=k["".concat(u,".").concat(d)]||k[d]||s[d]||i;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=k;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},1654:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return s}});var a=n(7462),l=n(3366),i=(n(7294),n(3905)),r=["components"],o={title:"\u5982\u4f55\u57fa\u4e8e\u539f\u751fKibana+Clickhouse\u6784\u5efa\u65e5\u5fd7\u5e73\u53f0",author:"\u57fa\u7840\u67b6\u6784\u7814\u53d1\u90e8\u2014\u5468\u795d\u7fa4",keywords:["CKibana"],description:"\u5982\u4f55\u57fa\u4e8e\u539f\u751fKibana+Clickhouse\u6784\u5efa\u65e5\u5fd7\u5e73\u53f0",tags:["CKibana"]},u=void 0,c={permalink:"/ckibana-docs/zh/blog/build-logging-platform-with-native-kibana-and-clickhouse",source:"@site/blog/zh/build-logging-platform-with-native-kibana-and-clickhouse.md",title:"\u5982\u4f55\u57fa\u4e8e\u539f\u751fKibana+Clickhouse\u6784\u5efa\u65e5\u5fd7\u5e73\u53f0",description:"\u5982\u4f55\u57fa\u4e8e\u539f\u751fKibana+Clickhouse\u6784\u5efa\u65e5\u5fd7\u5e73\u53f0",date:"2024-08-26T07:53:36.320Z",formattedDate:"August 26, 2024",tags:[{label:"CKibana",permalink:"/ckibana-docs/zh/blog/tags/c-kibana"}],readingTime:13.985,truncated:!0,authors:[{name:"\u57fa\u7840\u67b6\u6784\u7814\u53d1\u90e8\u2014\u5468\u795d\u7fa4"}],nextItem:{title:"\u5982\u4f55\u57fa\u4e8e\u539f\u751fKibana+Clickhouse\u6784\u5efa\u65e5\u5fd7\u5e73\u53f0",permalink:"/ckibana-docs/zh/blog/1"}},p={authorsImageUrls:[void 0]},s=[{value:"1 \u80cc\u666f\u4ecb\u7ecd",id:"1-\u80cc\u666f\u4ecb\u7ecd",children:[],level:2},{value:"2 \u65b9\u6848\u4ecb\u7ecd",id:"2-\u65b9\u6848\u4ecb\u7ecd",children:[],level:2},{value:"3 CKibana\u4f7f\u7528",id:"3-ckibana\u4f7f\u7528",children:[{value:"\u51c6\u5907\u73af\u5883",id:"\u51c6\u5907\u73af\u5883",children:[],level:3},{value:"\u5f00\u59cb\u4f7f\u7528",id:"\u5f00\u59cb\u4f7f\u7528",children:[{value:"\u542f\u52a8CKibana",id:"\u542f\u52a8ckibana",children:[],level:4},{value:"\u4fee\u6539Kibana",id:"\u4fee\u6539kibana",children:[],level:4},{value:"\u914d\u7f6eClickHouse\u8fde\u63a5\u4fe1\u606f\u4e0e\u7d22\u5f15\u767d\u540d\u5355",id:"\u914d\u7f6eclickhouse\u8fde\u63a5\u4fe1\u606f\u4e0e\u7d22\u5f15\u767d\u540d\u5355",children:[],level:4},{value:"\u914d\u7f6e\u9700\u8981\u5207\u6362\u5230ClickHouse\u7684index",id:"\u914d\u7f6e\u9700\u8981\u5207\u6362\u5230clickhouse\u7684index",children:[],level:4},{value:"\u521b\u5efaindex pattern",id:"\u521b\u5efaindex-pattern",children:[],level:4},{value:"\u5f00\u59cb\u4f7f\u7528",id:"\u5f00\u59cb\u4f7f\u7528-1",children:[],level:4}],level:3},{value:"\u9ad8\u7ea7\u529f\u80fd",id:"\u9ad8\u7ea7\u529f\u80fd",children:[{value:"\u91c7\u6837",id:"\u91c7\u6837",children:[],level:4},{value:"\u65f6\u95f4round+\u7f13\u5b58",id:"\u65f6\u95f4round\u7f13\u5b58",children:[],level:4},{value:"\u67e5\u8be2\u76d1\u63a7 + \u9ed1\u540d\u5355",id:"\u67e5\u8be2\u76d1\u63a7--\u9ed1\u540d\u5355",children:[],level:4},{value:"\u67e5\u8be2\u65f6\u95f4\u9650\u5236",id:"\u67e5\u8be2\u65f6\u95f4\u9650\u5236",children:[],level:4},{value:"keyword\u67e5\u8be2",id:"keyword\u67e5\u8be2",children:[],level:4},{value:"Discover\u6027\u80fd\u4f18\u5316",id:"discover\u6027\u80fd\u4f18\u5316",children:[],level:4}],level:3}],level:2},{value:"4 Nginx\u65e5\u5fd7\u76f8\u5173\u4f7f\u7528\u6848\u4f8b",id:"4-nginx\u65e5\u5fd7\u76f8\u5173\u4f7f\u7528\u6848\u4f8b",children:[{value:"Clickhouse\u8868\u7ed3\u6784",id:"clickhouse\u8868\u7ed3\u6784",children:[],level:4},{value:"CKibana\u6240\u6709\u914d\u7f6e",id:"ckibana\u6240\u6709\u914d\u7f6e",children:[],level:4},{value:"\u7ebf\u4e0a\u6548\u679c\u56fe",id:"\u7ebf\u4e0a\u6548\u679c\u56fe",children:[],level:4}],level:2},{value:"4 \u6536\u76ca",id:"4-\u6536\u76ca",children:[],level:2},{value:"5 \u6700\u540e",id:"5-\u6700\u540e",children:[],level:2}],k={toc:s};function d(e){var t=e.components,n=(0,l.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u5c06\u4ecb\u7ecd\u5982\u4f55\u57fa\u4e8e\u539f\u751fKibana+Clickhouse\u6784\u5efa\u65e5\u5fd7\u5e73\u53f0")),(0,i.kt)("p",null,"\u4e1a\u52a1\u5feb\u901f\u53d1\u5c55\u8fc7\u7a0b\u4e2d\u5bf9\u4e8e\u5404\u79cd\u65e5\u5fd7\u6570\u636e\u7684\u67e5\u8be2\u5206\u6790\u9700\u6c42\u4f1a\u5bfc\u81f4\u65e5\u5fd7\u5b58\u50a8\u89c4\u6a21\u6025\u5267\u589e\u957f\uff0c\u4f20\u7edfELK\u548c\u4ee5ElasticSearch\u4e3a\u6838\u5fc3\u5b58\u50a8\u7684\u65e5\u5fd7\u7cfb\u7edf\u968f\u4e4b\u4f1a\u9762\u4e34\u6210\u672c\u3001\u7a33\u5b9a\u6027\u4ee5\u53ca\u6027\u80fd\u7b49\u8bf8\u591a\u6311\u6218\uff0c\u4e1a\u754c\u4e5f\u770b\u5230\u8d8a\u6765\u8d8a\u591a\u7684\u56fd\u5185\u5916\u516c\u53f8\u5c06\u5b58\u50a8\u5207\u6362\u5230ClickHouse\uff0c\u6bd4\u5982\u643a\u7a0b\u3001\u5feb\u624b\u3001B\u7ad9\u3001Cloudflare\u548cUber\u7b49\uff0c\u4ece\u4ed6\u4eec\u7684\u5206\u4eab\u4e2d\u770b\u5230\u6536\u76ca\u90fd\u5f88\u660e\u663e\uff0c\u6211\u4eec\u7684\u65e5\u5fd7\u7cfb\u7edf\u4e5f\u5f00\u59cb\u5c1d\u8bd5\u4eceElasticSearch\u8fc1\u79fb\u5230ClickHouse\uff0c\u5e76\u5728\u8fc7\u7a0b\u4e2d\u63a2\u7d22\u548c\u79ef\u7d2f\u4e86\u4e00\u5957\u6700\u5927\u7a0b\u5ea6\u7167\u987e\u539f\u6709\u7528\u6237\u4f7f\u7528\u4e60\u60ef\u5b9e\u73b0\u5e73\u6ed1\u5207\u6362\u7684\u6574\u4f53\u65b9\u6848\u3002"),(0,i.kt)("h2",{id:"1-\u80cc\u666f\u4ecb\u7ecd"},"1 \u80cc\u666f\u4ecb\u7ecd"),(0,i.kt)("p",null,"\u516c\u53f8\u5185\u6d41\u91cf\u6700\u5927\u7684\u901a\u7528\u65e5\u5fd7\u7cfb\u7edf\u5e95\u5c42\u5b58\u50a8\u81ea\u4ece2020\u5e74\u7531ElasticSearch\u9010\u6b65\u5207\u6362\u5230Clickhouse\u4e4b\u540e\u5728\u6210\u672c\u4ee5\u53ca\u7a33\u5b9a\u6027\u7b49\u65b9\u9762\u5747\u6709\u663e\u8457\u63d0\u5347\u3002\u5728\u4eca\u5e74\u56fd\u5e86\u671f\u95f4\u7a33\u5b9a\u652f\u6491\u4e86\u8d85\u8fc75000\u4ebf\u6761/\u5929\u7684\u65e5\u5fd7\u91cf\uff0c\u800c\u6210\u672c\u4e5f\u4ec5\u4ec5\u662f\u539f\u5148ElasticSearch\u65b9\u6848\u768430%\u3002"),(0,i.kt)("p",null,"\u9664\u4e86\u8be5\u65e5\u5fd7\u7cfb\u7edf\u5916\uff0c\u516c\u53f8\u5185\u8fd8\u5b58\u5728\u5f88\u591a\u65e5\u5fd7\u7cfb\u7edf\uff0c\u5927\u591a\u57fa\u4e8e\u5f00\u6e90\u4e3b\u6d41ELK\u65b9\u5f0f\u3002\u5728\u89c4\u6a21\u8d8a\u6765\u8d8a\u5927\u540e\uff0c\u6210\u672c\u8ddf\u7a33\u5b9a\u6027\u65b9\u9762\u7684\u95ee\u9898\u4e5f\u5c31\u9010\u6e10\u66b4\u9732\u4e86\uff0c\u6240\u4ee5\u8ba1\u5212\u5c06\u6240\u6709\u65e5\u5fd7\u7cfb\u7edf\u7684\u5e95\u5c42\u5b58\u50a8\u5168\u90e8\u5207\u6362\u6210ClickHouse\u3002"),(0,i.kt)("p",null,"\u5173\u4e8e\u65e5\u5fd7\u573a\u666f\u4e0bClickhouse\u7684\u9009\u578b\u4e0e\u7528\u6cd5\u4e1a\u754c\u5df2\u7ecf\u6709\u5f88\u591a\u7684\u516c\u5f00\u5206\u4eab\uff0c\u4e0d\u4f5c\u4e3a\u672c\u6587\u91cd\u70b9\uff0c\u6709\u5174\u8da3\u53ef\u81ea\u884c\u641c\u7d22\u4e0b\u76f8\u5173\u8d44\u6599\u3002"),(0,i.kt)("p",null,"\u5728\u5b58\u50a8\u5207\u6362\u5b8c\u6210\u4e4b\u540e\u6700\u91cd\u8981\u7684\u662f\u89e3\u51b3\u67e5\u8be2UI\u7528\u6237\u4f53\u9a8c\u95ee\u9898\uff0c\u4e5f\u770b\u5230\u6709\u516c\u53f8\u5728\u628a\u65e5\u5fd7\u5b58\u50a8\u5207\u5230Clickhouse\u540e\u9009\u62e9\u81ea\u7814\u4e00\u5957\u67e5\u8be2UI\uff0c\u4f46\u60f3\u8981\u7167\u987e\u7528\u6237\u539f\u5148\u6240\u6709\u4f7f\u7528\u4e60\u60ef\u4ece\u539f\u751fKibana\u65e0\u7f1d\u5207\u6362\u5230\u65b0\u5e73\u53f0\u662f\u4e0d\u592a\u5b9e\u73b0\u7684\uff0c\u9700\u8981\u6240\u6709\u4e1a\u52a1\u540c\u4e8b\u719f\u6089\u4e00\u5957\u65b0\u7684\u8bed\u6cd5\u8ddfUI\u4ea4\u4e92\uff0c\u65e0\u5f62\u4e2d\u7ed9\u4ed6\u4eec\u52a0\u4e86\u5f88\u5927\u7684\u6210\u672c\u3002"),(0,i.kt)("p",null,"\u6240\u4ee5\uff0c\u600e\u4e48\u80fd\u591f\u8ba9\u4e1a\u52a1\u7528\u6237\u4ee5\u96f6\u5b66\u4e60\u6210\u672c\u4f7f\u7528\u65b0\u5e73\u53f0\uff0c\u8fd9\u662f\u4e00\u4e2a\u6700\u68d8\u624b\u7684\u95ee\u9898\u3002"),(0,i.kt)("h2",{id:"2-\u65b9\u6848\u4ecb\u7ecd"},"2 \u65b9\u6848\u4ecb\u7ecd"),(0,i.kt)("p",null,"\u6211\u4eec\u7684\u601d\u8def\u5176\u5b9e\u4e5f\u6bd4\u8f83\u5bfb\u5e38\uff0c\u6211\u4eec\u9009\u62e9\u5728\u539f\u751fKibana\u8ddfElasticSearch\u4e4b\u95f4\u65b0\u589e\u4e00\u5c42Proxy\uff0c\u8be5Proxy\u6765\u505aElasticSearch\u8ddfClickHouse\u7684\u8bed\u6cd5\u8f6c\u6362\uff0c\u5982\u56fe:\n",(0,i.kt)("img",{parentName:"p",src:"https://oss.17usoft.com/infra-github/ckibana02.png",alt:"Untitled"})),(0,i.kt)("p",null,"\u6211\u4eec\u81ea\u7814\u4e86\u4e00\u5957Proxy\uff08\u53d6\u540dCKibana\uff09\uff0c\u8be5Proxy\u8d1f\u8d23\u5c06\u56fe\u8868\u8bf7\u6c42\u8f6c\u6362\u6210ClickHouse\u8bed\u6cd5\u67e5\u8be2\u5230ClickHouse\u7ed3\u679c\u540e\u6a21\u62df\u6210ElasticSearch\u54cd\u5e94\u8fd4\u56de\u7ed9Kibana\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u76f4\u63a5\u5728\u539f\u751fKibana\u4e0a\u9762\u5c55\u793aClickHouse\u4e2d\u7684\u6570\u636e\uff0c\u9664\u4e86\u8bed\u6cd5\u8f6c\u6362\uff0c\u6211\u4eec\u8fd8\u89e3\u51b3\u4e86\u5f88\u591a\u5b9e\u9645\u4f7f\u7528\u8fc7\u7a0b\u4e2d\u9047\u5230\u7684\u95ee\u9898\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"CKibana: \u73b0\u5df2\u6b63\u5f0f\u5f00\u6e90\uff0chttps://github.com/TongchengOpenSource/ckibana")),(0,i.kt)("p",null,"\u4ecb\u4e8eClickHouse\u7684\u67e5\u8be2\u5e76\u53d1\u80fd\u529b\u9650\u5236\uff0c\u6211\u4eec\u4fdd\u7559\u4e86ElasticSearch\uff0c\u8be5ElasticSearch\u53ef\u4ee5\u7528\u6765\u505a\u7ed3\u679c\u7684\u7f13\u5b58\u7b49\u9ad8\u7ea7\u7279\u6027\u4ee5\u53ca\u4fdd\u5b58Kibana\u76f8\u5173\u7684\u5143\u6570\u636e\uff0c\u672c\u8eab\u975e\u5e38\u8f7b\u91cf\u3002"),(0,i.kt)("h2",{id:"3-ckibana\u4f7f\u7528"},"3 CKibana\u4f7f\u7528"),(0,i.kt)("h3",{id:"\u51c6\u5907\u73af\u5883"},"\u51c6\u5907\u73af\u5883"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Kibana: \u7528\u6765\u63d0\u4f9b\u7ed9\u4e1a\u52a1\u505aUI\u5c55\u793a"),(0,i.kt)("li",{parentName:"ol"},"ElasticSearch: \u7528\u6765\u505akibana\u5143\u6570\u636e\u5b58\u50a8+\u67e5\u8be2\u7f13\u5b58\u7b49\u9ad8\u7ea7\u7279\u6027"),(0,i.kt)("li",{parentName:"ol"},"ClickHouse: \u771f\u5b9e\u5b58\u65e5\u5fd7\u6570\u636e\u7684\u5b58\u50a8"),(0,i.kt)("li",{parentName:"ol"},"CKibana: \u63d0\u4f9bProxy\u7b49\u9ad8\u7ea7\u529f\u80fd\uff0c\u5b9e\u73b0\u8ba9\u7528\u6237\u76f4\u63a5\u5728\u539f\u751fKibana\u4e0a\u67e5\u8be2ClickHouse\u6570\u636e")),(0,i.kt)("h3",{id:"\u5f00\u59cb\u4f7f\u7528"},"\u5f00\u59cb\u4f7f\u7528"),(0,i.kt)("h4",{id:"\u542f\u52a8ckibana"},"\u542f\u52a8CKibana"),(0,i.kt)("p",null,"\u914d\u7f6eElasticSearch\u76f8\u5173\u4fe1\u606f"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://oss.17usoft.com/infra-github/ckibana03.png",alt:"Untitled"})),(0,i.kt)("p",null,"\u542f\u52a8\uff0c\u9700\u8981JDK17+"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"java -jar ckibana.jar")),(0,i.kt)("h4",{id:"\u4fee\u6539kibana"},"\u4fee\u6539Kibana"),(0,i.kt)("p",null,"\u4fee\u6539Kibana\u914d\u7f6e\uff0c\u5c06ElasticSearch\u5730\u5740\u6539\u4e3aCKibana\u5730\u5740"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://oss.17usoft.com/infra-github/ckibana04.png",alt:"Untitled"})),(0,i.kt)("p",null,"\u6b64\u65f6\uff0cKibana\u529f\u80fd\u5b8c\u5168\u53ef\u7528\uff0c\u53ef\u4ee5\u5c06CKibana\u5f53\u6210\u4e00\u4e2aElasticSearch Proxy\n",(0,i.kt)("img",{parentName:"p",src:"https://oss.17usoft.com/infra-github/ckibana05.png",alt:"Untitled"})),(0,i.kt)("h4",{id:"\u914d\u7f6eclickhouse\u8fde\u63a5\u4fe1\u606f\u4e0e\u7d22\u5f15\u767d\u540d\u5355"},"\u914d\u7f6eClickHouse\u8fde\u63a5\u4fe1\u606f\u4e0e\u7d22\u5f15\u767d\u540d\u5355"),(0,i.kt)("p",null,"\u8bbe\u7f6eClickHouse\u8fde\u63a5\u4fe1\u606f:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"curl --location --request POST 'localhost:8080/config/updateCk?url=ckUrl&user=default&pass=default&defaultCkDatabase=ops'")),(0,i.kt)("h4",{id:"\u914d\u7f6e\u9700\u8981\u5207\u6362\u5230clickhouse\u7684index"},"\u914d\u7f6e\u9700\u8981\u5207\u6362\u5230ClickHouse\u7684index"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"curl --location --request POST 'localhost:8080/config/updateWhiteIndexList?list=index1,index2'")),(0,i.kt)("p",null,"ClickHouse\u5b57\u6bb5\u8ddfElasticSearch\u5b57\u6bb5\u7684\u5173\u7cfb"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"es\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:null},"ck\u7c7b\u578b"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"keyword"),(0,i.kt)("td",{parentName:"tr",align:null},"String")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"text"),(0,i.kt)("td",{parentName:"tr",align:null},"String")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ip"),(0,i.kt)("td",{parentName:"tr",align:null},"String(\u4ee3\u7406\u81ea\u52a8\u8bc6\u522bipv4\u548cipv6)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"integer"),(0,i.kt)("td",{parentName:"tr",align:null},"Int32")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"long"),(0,i.kt)("td",{parentName:"tr",align:null},"Int64")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"float"),(0,i.kt)("td",{parentName:"tr",align:null},"Float32")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"double"),(0,i.kt)("td",{parentName:"tr",align:null},"Float64")))),(0,i.kt)("h4",{id:"\u521b\u5efaindex-pattern"},"\u521b\u5efaindex pattern"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://oss.17usoft.com/infra-github/ckibana06.png",alt:"Untitled"})),(0,i.kt)("p",null,"\u6ce8\u610f\u70b9:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u9996\u5148\u786e\u5b9a\u8f93\u5165\u7684index pattern\u8ddfClickHouse\u8868\u662f\u5426\u4e00\u81f4\uff0cindex pattern\u8ddf\u8ddfClickHouse\u8868\u540d\u662f\u7cbe\u786e\u5339\u914d"),(0,i.kt)("li",{parentName:"ol"},"\u5982\u679c\u4e0d\u80fd\u6652\u9009\u5230\u5bf9\u5e94\u7684\u8868\u683c\uff0c\u53ef\u4ee5\u57fa\u4e8eCKibana\u65e5\u5fd7\u4e2d\u7684sql\u6392\u67e5\uff0c\u662f\u5426\u53ef\u67e5\u8be2\u5230\u5bf9\u5e94\u7684\u8868"),(0,i.kt)("li",{parentName:"ol"},"\u6ce8\u610f\u65f6\u95f4\u5b57\u6bb5\uff0c\u5426\u5219\u4f1a\u7b5b\u9009\u4e0d\u4e86\u65f6\u95f4\u5b57\u6bb5\uff0c\u7b5b\u9009\u903b\u8f91\u5982\u4e0b:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5b57\u6bb5\u4e3aDate\u7c7b\u578b\uff0c\u6bd4\u5982DateTime64\u7c7b\u578b\uff0c\u4f1a\u88ab\u8ba4\u4e3a\u662f\u65f6\u95f4\u7c7b\u578b"),(0,i.kt)("li",{parentName:"ul"},"\u5b57\u6bb5\u540d\u4e2d\u5305\u542btime\uff0c\u6bd4\u5982\uff08@timestamp UInt64\uff09\uff0c\u4f1a\u88ab\u8ba4\u4e3a\u662f\u65f6\u95f4\u7c7b\u578b")),(0,i.kt)("p",null,"\u8fd9\u4e24\u79cd\u60c5\u51b5\u4e0b\u6ee1\u8db3\u4efb\u610f\u4e00\u4e2a\uff0c\u5b57\u6bb5\u90fd\u4f1a\u88ab\u8ba4\u4e3a\u662f\u65f6\u95f4\u5b57\u6bb5\uff0c\u5982\u679c\u9009\u62e9\u4e0d\u4e86\u65f6\u95f4\u5b57\u6bb5\uff0c\u9700\u8981\u68c0\u67e5\u4e0bClickHouse\u8868\u4e2d\u5b57\u6bb5\u662f\u5426\u7b26\u5408\u5339\u914d\u903b\u8f91\u3002"),(0,i.kt)("h4",{id:"\u5f00\u59cb\u4f7f\u7528-1"},"\u5f00\u59cb\u4f7f\u7528"),(0,i.kt)("p",null,"\u914d\u7f6e\u5b8c\u6210index pattern\u540e\uff0c\u5c31\u53ef\u4ee5\u6b63\u5e38\u7684\u4f7f\u7528Kibana\u7684\u56fe\u8868\u529f\u80fd\u4e86\n",(0,i.kt)("img",{parentName:"p",src:"https://oss.17usoft.com/infra-github/ckibana07.png",alt:"Untitled"})),(0,i.kt)("h3",{id:"\u9ad8\u7ea7\u529f\u80fd"},"\u9ad8\u7ea7\u529f\u80fd"),(0,i.kt)("h4",{id:"\u91c7\u6837"},"\u91c7\u6837"),(0,i.kt)("p",null,"Kibana\u7684\u56fe\u8868\u5927\u90e8\u5206\u90fd\u662f\u5173\u6ce8\u8d8b\u52bf\uff0c\u5f53\u547d\u4e2d\u7ed3\u679c\u96c6\u592a\u5927\u65f6\u5019\uff0c\u6d88\u8017\u7684ClickHouse\u7684\u8d44\u6e90\u4e5f\u8f83\u591a\u3002\u6211\u4eec\u63d0\u4f9b\u4e86\u91c7\u6837\u529f\u80fd\uff0c\u5728\u6570\u636e\u96c6\u8f83\u5927\u7684\u65f6\u5019\uff0c\u80fd\u591f\u4fdd\u969c\u56fe\u8868\u8d8b\u52bf\u8ddf\u5b9e\u9645\u7684\u5dee\u4e0d\u591a\uff0c\u800c\u4e14\u53ef\u4ee5\u5f88\u597d\u7684\u63a7\u5236ClickHouse\u7684\u8d44\u6e90\u4f7f\u7528\u3002"),(0,i.kt)("p",null,"`- \u6ce8: \u5bf9\u5e94\u7684ClickHouse\u7684\u8868\u9700\u8981\u6309\u7167ck\u7684\u91c7\u6837\u8868\u521b\u5efa ",(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/sql-reference/statements/select/sample"},"clickhouse sample")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u91c7\u6837\u9608\u503c\u8bbe\u7f6e\u7684\u8fc7\u5c0f\uff0c\u4f1a\u5bfc\u81f4\u8fd8\u539f\u51fa\u6765\u7684\u503c\u8ddf\u771f\u5b9e\u503c\u5dee\u5f02\u8f83\u5927\uff0c\u6211\u4eec\u7ebf\u4e0a\u8bbe\u7f6e\u7684\u91c7\u6837\u503c\u4e3a500w`")),(0,i.kt)("p",null,"\u5f00\u542f\u91c7\u6837\u9700\u8981\u4e24\u6b65:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u914d\u7f6e\u9700\u8981\u91c7\u6837\u7684\u8868"),(0,i.kt)("li",{parentName:"ol"},"\u66f4\u65b0\u91c7\u6837\u9608\u503c\uff0c\u5f53\u547d\u4e2d\u7ed3\u679c\u96c6\u8d85\u8fc7\u9608\u503c\u65f6\uff0c\u4f1a\u89e6\u53d1\u91c7\u6837")),(0,i.kt)("p",null,"\u91c7\u6837\u903b\u8f91 ",(0,i.kt)("inlineCode",{parentName:"p"},'Math.max(0.01, Double.parseDouble(String.format("%.5f", sampleParam.getSampleCountMaxThreshold() * 1.00 / sampleParam.getSampleTotalCount())))')),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://oss.17usoft.com/infra-github/ckibana08.png",alt:"Untitled"})),(0,i.kt)("p",null,"\u5c55\u5f00\u6d41\u91cf\u5668\u7684\u54cd\u5e94\u7ed3\u679c\uff0c\u53ef\u4ee5\u770b\u5230\u91c7\u6837\u503c"),(0,i.kt)("h4",{id:"\u65f6\u95f4round\u7f13\u5b58"},"\u65f6\u95f4round+\u7f13\u5b58"),(0,i.kt)("p",null,"\u5f53\u7ebf\u4e0a\u51fa\u73b0\u4e00\u4e2a\u6545\u969c\u65f6\u5019\uff0c\u6709\u5927\u91cf\u7684sre\u540c\u5b66\u8ddf\u4e1a\u52a1\u540c\u5b66\u90fd\u9700\u8981\u901a\u8fc7nginx\u65e5\u5fd7\u6765\u67e5\u8be2\u95ee\u9898\uff0c\u800c\u4e14\u67e5\u8be2\u7684\u6761\u4ef6\u57fa\u672c\u90fd\u76f8\u540c\uff0c\u4f46\u662fClickHouse\u4e3a\u4e86\u4f7f\u5f97\u67e5\u8be2\u6027\u80fd\u6700\u597d\uff0c\u800c\u5c3d\u91cf\u7684\u4f7f\u7528\u66f4\u591a\u7684cpu\u6765\u53c2\u52a0\u8ba1\u7b97\uff0c\u8fd9\u6837\u5bfc\u81f4\u8fd9\u4e9b\u573a\u666f\u4e0bClickHouse\u7684cpu\u4f1a\u76f4\u63a5\u8dd1\u6ee1\u3002\u4e14\u5728\u540c\u5b66\u4eec\u7684\u4e0d\u65adretry\u4e0b\uff0ccpu\u4e0d\u80fd\u6062\u590d\u3002"),(0,i.kt)("p",null,"\u6240\u4ee5\u6211\u4eec\u505a\u4e86\u4e00\u4e2a\u65f6\u95f4round+\u7f13\u5b58\u529f\u80fd\u3002"),(0,i.kt)("p",null,"\u65f6\u95f4round: \u6bd4\u5982\u8bbe\u7f6eround\u4e3a20s\uff0c\u5219\u67e5\u8be2\u65f6\u95f4\u6761\u4ef6\u4e2d\u7684s\u7684\u7cbe\u5ea6\u4f1a",(0,i.kt)("inlineCode",{parentName:"p"},"%20"),"\uff0c\u76f8\u5f53\u4e8e\u6700\u591a\u5ef6\u8fdf\u4e8620s\u6765\u67e5\u8be2\u6570\u636e\u3002"),(0,i.kt)("p",null,"\u6709\u4e86\u65f6\u95f4round\u540e\uff0c\u5219\u5927\u91cf\u7684\u67e5\u8be2\u6761\u4ef6\u5c31\u4e00\u81f4\u4e86\uff0c\u8fd9\u4e2a\u65f6\u5019\u53ea\u9700\u8981\u5f00\u542f\u7ed3\u679c\u7f13\u5b58\uff0c\u5219\u5c31\u53ef\u4ee5\u5f88\u597d\u7684\u7f13\u89e3ClickHouse\u7684\u538b\u529b\u3002"),(0,i.kt)("p",null,"\u8bbe\u7f6e\u65f6\u95f4round:\n",(0,i.kt)("inlineCode",{parentName:"p"},"curl --location --request POST 'localhost:8080/config/updateRoundAbleMinPeriod?roundAbleMinPeriod=20000' \u5355\u4f4dms")),(0,i.kt)("p",null,"\u8bbe\u7f6e\u6253\u5f00\u7f13\u5b58:\n",(0,i.kt)("inlineCode",{parentName:"p"},"curl --location --request POST 'localhost:8080/config/updateUseCache?useCache=true'"),"\n",(0,i.kt)("img",{parentName:"p",src:"https://oss.17usoft.com/infra-github/ckibana09.png",alt:"Untitled"})),(0,i.kt)("p",null,"\u662f\u5426\u547d\u4e2d\u7f13\u5b58\uff0c\u5728\u54cd\u5e94\u7ed3\u6784\u91cc\u9762\u53ef\u4ee5\u770b\u5230"),(0,i.kt)("h4",{id:"\u67e5\u8be2\u76d1\u63a7--\u9ed1\u540d\u5355"},"\u67e5\u8be2\u76d1\u63a7 + \u9ed1\u540d\u5355"),(0,i.kt)("p",null,"Kibana\u7684\u67e5\u8be2\u8bed\u6cd5\u76f8\u5bf9\u6bd4\u8f83\u968f\u610f\uff0c\u4e00\u4e9b\u67e5\u8be2\u5bf9ClickHouse\u7684\u8d44\u6e90\u6d88\u8017\u4f1a\u6bd4\u8f83\u5927\uff0c\u6240\u4ee5\u6211\u4eec\u5c06\u6240\u6709\u7684\u67e5\u8be2\u4ee5\u53ca\u8017\u65f6\u90fd\u505a\u4e86\u76d1\u63a7\uff0c\u8fd9\u6837\u53ef\u4ee5\u6bd4\u8f83\u65b9\u4fbf\u7684\u67e5\u770b\u90fd\u505a\u4e86\u54ea\u4e9b\u67e5\u8be2\uff0c\u8bbe\u7f6e\u53ef\u4ee5\u5bf9\u67e5\u8be2\u505a\u9ed1\u540d\u5355\u7684\u63a7\u5236\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u9650\u5236\u4e0d\u592a\u53cb\u597d\u7684\u67e5\u8be2"),(0,i.kt)("p",null,"\u5f00\u542f\u76d1\u63a7:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"curl --location --request POST 'localhost:8080/config/updateEnableMonitoring?enableMonitoring=true'")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://oss.17usoft.com/infra-github/ckibana10.png",alt:"Untitled"})),(0,i.kt)("p",null,"\u5982\u4e0a\u56fe\uff0c\u6211\u4eec\u53ef\u4ee5\u76d1\u63a7\u6bcf\u4e2a\u67e5\u8be2\u7684\u8be6\u60c5\uff0c\u8bed\u6cd5\u4ee5\u53ca\u8017\u65f6\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://oss.17usoft.com/infra-github/ckibana11.png",alt:"Untitled"})),(0,i.kt)("p",null,"\u5982\u4e0a\u56fe\uff0c\u53ef\u4ee5\u57fa\u4e8ekibana\u56fe\u8868\u529f\u80fd\uff0c\u505a\u66f4\u76f4\u89c2\u7684\u5206\u6790\u3002"),(0,i.kt)("h4",{id:"\u67e5\u8be2\u65f6\u95f4\u9650\u5236"},"\u67e5\u8be2\u65f6\u95f4\u9650\u5236"),(0,i.kt)("p",null,"\u5f88\u591a\u65f6\u5019\uff0c\u6709\u4eba\u60f3\u8981\u67e5\u770b\u67d0\u4e2a\u6761\u4ef6\u6700\u8fd1\u7684\u8d8b\u52bf\uff0c\u76f4\u63a5\u67e5\u8be2\u6700\u8fd17\u5929\u7b49\u7b49\uff0c\u8fd9\u6837\u4f1a\u5bfc\u81f4\u8d44\u6e90\u6d88\u8017\u6bd4\u8f83\u5927\uff0c\u6240\u4ee5CKibana\u652f\u6301\u4e86\u6700\u957f\u65f6\u95f4\u67e5\u8be2\u8303\u56f4\uff0c\u6765\u9650\u5236\u4f7f\u7528\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"curl --location --request POST 'localhost:8080/config/updateMaxTimeRange?maxTimeRange=864000000' \u5355\u4f4dms")),(0,i.kt)("h4",{id:"keyword\u67e5\u8be2"},"keyword\u67e5\u8be2"),(0,i.kt)("p",null,"\u4e3a\u4e86\u66f4\u597d\u7684\u5339\u914dElasticSearch\u7684\u4f7f\u7528\u4e60\u60ef\u3002 ",(0,i.kt)("inlineCode",{parentName:"p"},"field.keyword")," \u67e5\u8be2\u76f8\u5f53\u4e8e\u5bf9field\u7684\u7cbe\u786e\u67e5\u8be2\uff0c\u5426\u5219\u4e3a\u6a21\u7cca\u641c\u7d22"),(0,i.kt)("p",null,"\u6bd4\u5982 ",(0,i.kt)("inlineCode",{parentName:"p"},'host.keyword:"www.baidu.com"')," \u6362\u6210sql\u4e3a: ",(0,i.kt)("inlineCode",{parentName:"p"},'host="www.baidu.com"')),(0,i.kt)("h4",{id:"discover\u6027\u80fd\u4f18\u5316"},"Discover\u6027\u80fd\u4f18\u5316"),(0,i.kt)("p",null,"ClickHouse\u7684\u5f3a\u9879\u5728AP\u573a\u666f,\u5f53\u67e5\u8be2\u65f6\u95f4\u8de8\u5ea6\u6bd4\u8f83\u5927\u65f6,\u4f20\u7edf\u7684SQL:",(0,i.kt)("inlineCode",{parentName:"p"},"select x from table where x order by time desc limit 10")," \u8fd9\u79cd\u65b9\u5f0f\u4f1a\u5bfc\u81f4\u67e5\u8be2\u6027\u80fd\u975e\u5e38\u4f4e,\u800c\u4e14\u6d88\u8017\u5927\u91cf\u7684ClickHouse\u8d44\u6e90\u3002\n\u9488\u5bf9\u8fd9\u79cd\u5e26\u8d8b\u52bf\u56fe+\u660e\u7ec6\u7684\u573a\u666f\u6211\u4eec\u505a\u4e86\u6027\u80fd\u4f18\u5316,\u5145\u5206\u53d1\u6325ClickHouse\u7684AP\u80fd\u529b\u3002\u4f1a\u5c06\u6267\u884c\u62c6\u5206\u4e3a\u4e24\u6b65:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u57fa\u4e8eCk \u805a\u5408\u80fd\u529b,\u67e5\u8be2\u51fa\u6bcf\u5206\u949f\u6ee1\u8db3\u6761\u4ef6\u7684\u65e5\u5fd7\u6570\u91cf"),(0,i.kt)("li",{parentName:"ol"},"\u57fa\u4e8e\u6bcf\u5206\u949f\u7684\u65e5\u5fd7\u6570\u91cf\u81ea\u52a8\u88c1\u526a\u65e5\u5fd7\u641c\u7d22\u7684\u65f6\u95f4\u8de8\u5ea6,\u6bd4\u5982\u4e00\u5206\u949f\u5185\u7684\u65e5\u5fd7\u6761\u6570\u5c31\u6ee1\u8db3\u4e86\u8981\u6c42,\u5219\u67e5\u8be2\u660e\u7ec6\u65f6\u81ea\u52a8\u7f29\u51cf\u52301\u5206\u949f\u7684\u8de8\u5ea6\u3002")),(0,i.kt)("p",null,"\u57fa\u4e8e\u67e5\u8be2\u65f6\u95f4\u7684\u81ea\u52a8\u88c1\u526a\u529f\u80fd,\u4f1a\u4f7f\u5f97Discover\u7248\u672c\u67e5\u8be2\u6027\u80fd\u6709\u8d28\u7684\u63d0\u5347\u4e14\u5bf9ClickHouse\u7684cpu\u5360\u7528\u6709\u5f88\u5927\u7684\u4f18\u5316\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://oss.17usoft.com/infra-github/ckibana15.png",alt:"Untitled"})),(0,i.kt)("p",null,"\u5982\u4e0a\u56fe,\u4e00\u4e2aDiscover\u67e5\u8be2\u62c6\u6210\u4e863\u4e2asql:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u8ba1\u7b97\u662f\u5426\u9700\u8981\u91c7\u6837"),(0,i.kt)("li",{parentName:"ol"},"\u7edf\u8ba1\u6bcf\u5206\u949f\u7684\u65e5\u5fd7\u6570"),(0,i.kt)("li",{parentName:"ol"},"\u81ea\u52a8\u88c1\u526a\u67e5\u8be2\u65f6\u95f4\u8303\u56f4")),(0,i.kt)("h2",{id:"4-nginx\u65e5\u5fd7\u76f8\u5173\u4f7f\u7528\u6848\u4f8b"},"4 Nginx\u65e5\u5fd7\u76f8\u5173\u4f7f\u7528\u6848\u4f8b"),(0,i.kt)("h4",{id:"clickhouse\u8868\u7ed3\u6784"},"Clickhouse\u8868\u7ed3\u6784"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-CREATE",metastring:"TABLE bjops.ops_bjtlblog_local",TABLE:!0,"bjops.ops_bjtlblog_local":!0},"(\n`@timestamp` UInt64,\n`X-Request-Id` String,\n`addr` String,\n`ap_area` String,\n`byte` Int64,\n`bytes_recv` Int64,\n`Bbtes_sent` Int64,\n`content-type` String,\n`content_length` Int64,\n`crp` String,\n`csi` String,\n`cspanid` String,\n`difftime` Int32,\n`error_body` String,\n`error_client` String,\n`error_host` String,\n`error_request` String,\n`error_server` String,\n`error_upstream` String,\n`forwarded` String,\n`host` String,\n`hostname` String,\n`idc` LowCardinality(String),\n`index_name` LowCardinality(String),\n`ip` String,\n`logant_idc` LowCardinality(String),\n`logant_type` LowCardinality(String),\n`origin_ip` String,\n`referer` String,\n`remote_port` String,\n`request_method` LowCardinality(String),\n`request_time` Int64,\n`request_uri` String,\n`request_url` String,\n`scheme` String,\n`server_addr` String,\n`server_name` String,\n`server_port` String,\n`server_protocol` String,\n`source` String,\n`sspanid` String,\n`st` String,\n`status` Int32,\n`timeuse` Float64,\n`traceid` String,\n`type` String,\n`ua` String,\n`up_addr` String,\n`up_status` Int32,\n`upstream_name` String,\n`upstream_response_time` Int32,\n`worker_pid` String,\n`ck_assembly_extension` String,\n`bytes_sent` Int64,\nINDEX timestamp_index `@timestamp` TYPE minmax GRANULARITY 8192\n)\nENGINE = MergeTree\nPARTITION BY (toYYYYMMDD(toDateTime(`@timestamp` / 1000, 'Asia/Shanghai')), toHour(toDateTime(`@timestamp` / 1000, 'Asia/Shanghai')))\nORDER BY (host, request_uri, intHash64(`@timestamp`))\nSAMPLE BY intHash64(`@timestamp`)\nSETTINGS in_memory_parts_enable_wal = 0, index_granularity = 8192\n")),(0,i.kt)("p",null,"\u5207\u8bb0\u5c06",(0,i.kt)("inlineCode",{parentName:"p"},"host"),"\u653e\u7f6e\u5728order by\u7684\u7b2c\u4e00\u4f4d\u3002\u56e0\u4e3a\u67e5Nginx\u65e5\u5fd7\u5927\u591a\u6570\u60c5\u51b5\u4e0b\u9700\u8981\u6839\u636e",(0,i.kt)("inlineCode",{parentName:"p"},"host"),"\u67e5\u8be2\u3002"),(0,i.kt)("h4",{id:"ckibana\u6240\u6709\u914d\u7f6e"},"CKibana\u6240\u6709\u914d\u7f6e"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n    "Proxy": {\n        "ck": {\n            "url": "ip:6321",\n            "user": "user",\n            "pass": "pass",\n            "defaultCkDatabase": "db"\n        },\n        "es": {\n            "host": "ip:31940"\n        },\n        "roundAbleMinPeriod": 120000,\n        "round": 20000,\n        "maxTimeRange": 86400000,\n        "blackIndexList": null,\n        "whiteIndexList": ["ops_bjtlblog_all", "other_index_all"],\n        "enableMonitoring": true\n    },\n    "query": {\n        "sampleIndexPatterns": ["ops_bjtlblog_all"],\n        "sampleCountMaxThreshold": 5000000,\n        "useCache": true,\n        "maxResultRow": 30000\n    },\n    "threadPool": {\n        "msearchProperty": {\n            "coreSize": 4,\n            "queueSize": 10000\n        },\n        "commonProperty": {\n            "coreSize": 4,\n            "queueSize": 10000\n        }\n    },\n    "defaultShard": 2\n}\n')),(0,i.kt)("h4",{id:"\u7ebf\u4e0a\u6548\u679c\u56fe"},"\u7ebf\u4e0a\u6548\u679c\u56fe"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://oss.17usoft.com/infra-github/ckibana12.png",alt:"Untitled"})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://oss.17usoft.com/infra-github/ckibana13.png",alt:"Untitled"})),(0,i.kt)("h2",{id:"4-\u6536\u76ca"},"4 \u6536\u76ca"),(0,i.kt)("p",null,"\u622a\u6b62\u5230\u76ee\u524d\uff0c\u501f\u52a9CKibana\u7684\u6838\u5fc3\u80fd\u529b\uff0c\u6211\u4eec\u5df2\u7ecf\u5b8c\u6210\u4e86\u6240\u6709Nginx\u8bbf\u95ee\u65e5\u5fd7\u548c\u4e1a\u52a1\u81ea\u5b9a\u4e49\u65e5\u5fd7\u5168\u91cf\u4eceElasticSearch\u5207\u6362\u5230Clickhouse\uff0c\u5b58\u50a8\u6210\u672c\u964d\u4e3a\u539f\u6765\u768430%\u4ee5\u5185\u3002\u540c\u65f6\u57fa\u4e8eClickHouse\u7684\u5206\u5e03\u5f0f\u8868\u80fd\u529b\u53ef\u4ee5\u505a\u5230\u5373\u4f7f\u5728\u5355\u4e2d\u5fc3\u6545\u969c\u65f6\u65e5\u5fd7\u67e5\u8be2\u4e5f\u4e0d\u53d7\u4efb\u4f55\u5f71\u54cd\uff0c\u65e0\u8bba\u5728\u6210\u672c\u8fd8\u662f\u7a33\u5b9a\u6027\u65b9\u9762\u76f8\u6bd4ElasticSearch\u90fd\u6709\u4e86\u8f83\u5927\u7684\u63d0\u5347\uff0c\u5e76\u6cbf\u7528\u4e86\u7075\u6d3b\u5f3a\u5927\u7684\u539f\u751fKibana\u4f5c\u4e3a\u53ef\u89c6\u5316\u5de5\u5177\uff0c\u53ef\u4ee5\u8ba9\u7528\u6237\u7ee7\u7eed\u4f7f\u7528\u81ea\u5df1\u4e60\u60ef\u7684Kibana\u9762\u677f\u4fbf\u6377\u5730\u8fdb\u884c\u65e5\u5fd7\u67e5\u8be2\u548c\u5206\u6790\u3002"),(0,i.kt)("h2",{id:"5-\u6700\u540e"},"5 \u6700\u540e"),(0,i.kt)("p",null,"\u5728\u6211\u4eec\u65e5\u5fd7\u7cfb\u7edf\u4e0d\u65ad\u6f14\u8fdb\u7684\u8fc7\u7a0b\u4e2d\u79bb\u4e0d\u5f00\u4f17\u591a\u4f18\u79c0\u7684\u5f00\u6e90\u9879\u76ee\uff0c\u73b0\u5728\u6211\u4eec\u4e5f\u5c06CKibana (ClickHouse Proxy for Kibana & Clickhouse visualization tool) \u6b63\u5f0f\u5f00\u6e90\u4e86\uff0c\u5e0c\u671b\u80fd\u591f\u5e2e\u52a9\u5230\u66f4\u591a\u7684\u4eba\u540c\u65f6\u4e5f\u671f\u671b\u80fd\u8ddf\u793e\u533a\u4e00\u8d77\u5171\u5efa\u4e0d\u65ad\u5b8c\u5584\u529f\u80fd\u4e0e\u7279\u6027\uff0c\u5145\u5206\u53d1\u6325\u65e5\u5fd7\u573a\u666f\u4e0bKibana\u53ef\u89c6\u5316+ClickHouse\u5b58\u50a8\u8fd9\u5bf9\u7ec4\u5408\u7684\u5a01\u529b\uff0c\u8ba9\u5927\u5bb6\u7528\u8d77\u6765\u66f4\u52a0\u4e1d\u6ed1\uff0c\u6b22\u8fceStar\u548c\u7ed9\u6211\u4eec\u63d0ISSUE\u3002"),(0,i.kt)("p",null,"\u9879\u76eeGithub\u5730\u5740: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/TongchengOpenSource/ckibana"},"https://github.com/TongchengOpenSource/ckibana")))}d.isMDXComponent=!0}}]);