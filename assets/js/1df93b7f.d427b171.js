"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[583],{2619:(e,t,n)=>{n.d(t,{A:()=>_});var a=n(8168),l=n(6540),o=n(53);const r={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var c={Prism:n(1258).default,theme:r};function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}var u=/\r\n|\r|\n/,p=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},m=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)};function d(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var y=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),s(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?function(e,t){var n=e.plain,a=Object.create(null),l=e.styles.reduce((function(e,n){var a=n.languages,l=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=i({},e[t],l);e[t]=n})),e}),a);return l.root=n,l.plain=i({},n,{backgroundColor:null}),l}(e.theme,e.language):void 0;return t.themeDict=n})),s(this,"getLineProps",(function(e){var n=e.key,a=e.className,l=e.style,o=i({},d(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),r=t.getThemeDict(t.props);return void 0!==r&&(o.style=r.plain),void 0!==l&&(o.style=void 0!==o.style?i({},o.style,l):l),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),s(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,l=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===l&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===l&&!a)return o[n[0]];var r=a?{display:"inline-block"}:{},c=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[r].concat(c))}})),s(this,"getTokenProps",(function(e){var n=e.key,a=e.className,l=e.style,o=e.token,r=i({},d(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==l&&(r.style=void 0!==r.style?i({},r.style,l):l),void 0!==n&&(r.key=n),a&&(r.className+=" "+a),r})),s(this,"tokenize",(function(e,t,n,a){var l={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",l);var o=l.tokens=e.tokenize(l.code,l.grammar,l.language);return e.hooks.run("after-tokenize",l),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,l=e.children,o=this.getThemeDict(this.props),r=t.languages[n];return l({tokens:function(e){for(var t=[[]],n=[e],a=[0],l=[e.length],o=0,r=0,c=[],s=[c];r>-1;){for(;(o=a[r]++)<l[r];){var i=void 0,d=t[r],y=n[r][o];if("string"==typeof y?(d=r>0?d:["plain"],i=y):(d=m(d,y.type),y.alias&&(d=m(d,y.alias)),i=y.content),"string"==typeof i){var g=i.split(u),h=g.length;c.push({types:d,content:g[0]});for(var b=1;b<h;b++)p(c),s.push(c=[]),c.push({types:d,content:g[b]})}else r++,t.push(d),n.push(i),a.push(0),l.push(i.length)}r--,t.pop(),n.pop(),a.pop(),l.pop()}return p(c),s}(void 0!==r?this.tokenize(t,a,r,n):[a]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(l.Component);const g=y;var h=n(1312),b=n(5965);const f={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]};var v=n(4785);const k=()=>{const{prism:e}=(0,b.pN)(),{isDarkTheme:t}=(0,v.A)(),n=e.theme||f,a=e.darkTheme||n;return t?a:n},E={codeBlockContainer:"codeBlockContainer_K1bP",codeBlockContent:"codeBlockContent_hGly",codeBlockTitle:"codeBlockTitle_eoMF",codeBlock:"codeBlock_23N8",copyButton:"copyButton_Ue-o",codeBlockLines:"codeBlockLines_39YC"};function _(e){let{children:t,className:n,metastring:r,title:s}=e;const{prism:i}=(0,b.pN)(),[u,p]=(0,l.useState)(!1),[m,d]=(0,l.useState)(!1);(0,l.useEffect)((()=>{d(!0)}),[]);const y=(0,b.wt)(r)||s,f=k(),v=Array.isArray(t)?t.join(""):t,_=(0,b.Op)(n)??i.defaultLanguage,{highlightLines:x,code:N}=(0,b.Li)(v,r,_),C=()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;const a=document.createElement("textarea"),l=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";const o=document.getSelection();let r=!1;o.rangeCount>0&&(r=o.getRangeAt(0)),n.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch{}a.remove(),r&&(o.removeAllRanges(),o.addRange(r)),l&&l.focus()}(N),p(!0),setTimeout((()=>p(!1)),2e3)};return l.createElement(g,(0,a.A)({},c,{key:String(m),theme:f,code:N,language:_}),(e=>{let{className:t,style:r,tokens:c,getLineProps:s,getTokenProps:i}=e;return l.createElement("div",{className:(0,o.A)(E.codeBlockContainer,n)},y&&l.createElement("div",{style:r,className:E.codeBlockTitle},y),l.createElement("div",{className:(0,o.A)(E.codeBlockContent,_)},l.createElement("pre",{tabIndex:0,className:(0,o.A)(t,E.codeBlock,"thin-scrollbar"),style:r},l.createElement("code",{className:E.codeBlockLines},c.map(((e,t)=>{1===e.length&&"\n"===e[0].content&&(e[0].content="");const n=s({line:e,key:t});return x.includes(t)&&(n.className+=" docusaurus-highlight-code-line"),l.createElement("span",(0,a.A)({key:t},n),e.map(((e,t)=>l.createElement("span",(0,a.A)({key:t},i({token:e,key:t}))))),l.createElement("br",null))})))),l.createElement("button",{type:"button","aria-label":(0,h.T)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,o.A)(E.copyButton,"clean-btn"),onClick:C},u?l.createElement(h.A,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):l.createElement(h.A,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}},6068:(e,t,n)=>{n.r(t),n.d(t,{default:()=>O});var a,l=n(6540),o=n(53),r=n(5489),c=n(4586),s=n(9360),i=n(8168);function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},u.apply(this,arguments)}const p=e=>{let{title:t,titleId:n,...o}=e;return l.createElement("svg",u({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","aria-labelledby":n},o),t?l.createElement("title",{id:n},t):null,a||(a=l.createElement("path",{d:"M13.3 12.22A4.92 4.92 0 0 0 15 8.5a5 5 0 0 0-10 0 4.92 4.92 0 0 0 1.7 3.72A8 8 0 0 0 2 19.5a1 1 0 0 0 2 0 6 6 0 0 1 12 0 1 1 0 0 0 2 0 8 8 0 0 0-4.7-7.28ZM10 11.5a3 3 0 1 1 3-3 3 3 0 0 1-3 3Zm11.71-2.37a1 1 0 0 0-1.42 0l-2 2-.62-.63a1 1 0 0 0-1.42 0 1 1 0 0 0 0 1.41l1.34 1.34a1 1 0 0 0 1.41 0l2.67-2.67a1 1 0 0 0 .04-1.45Z"})))};var m;function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},d.apply(this,arguments)}const y=e=>{let{title:t,titleId:n,...a}=e;return l.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",viewBox:"0 0 24 24","aria-labelledby":n},a),t?l.createElement("title",{id:n},t):null,m||(m=l.createElement("path",{d:"M10 13H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1Zm-1 6H5v-4h4ZM20 3h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 6h-4V5h4Zm1 7h-2v-2a1 1 0 0 0-2 0v2h-2a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2ZM10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1ZM9 9H5V5h4Z"})))};var g;function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},h.apply(this,arguments)}const b=e=>{let{title:t,titleId:n,...a}=e;return l.createElement("svg",h({xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",viewBox:"0 0 24 24","aria-labelledby":n},a),t?l.createElement("title",{id:n},t):null,g||(g=l.createElement("path",{d:"M17 22H5a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h1a4 4 0 0 1 7.3-2.18A3.86 3.86 0 0 1 14 6h3a1 1 0 0 1 1 1v3a4 4 0 0 1 2.18 7.3A3.86 3.86 0 0 1 18 18v3a1 1 0 0 1-1 1ZM5 8a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11v-3.18a1 1 0 0 1 .42-.82 1 1 0 0 1 .91-.13 1.77 1.77 0 0 0 1.74-.23 2 2 0 0 0 .93-1.37 2 2 0 0 0-.48-1.59 1.89 1.89 0 0 0-2.17-.55 1 1 0 0 1-.91-.13 1 1 0 0 1-.42-.82V8h-3.2a1 1 0 0 1-1-1.33 1.77 1.77 0 0 0-.23-1.74 1.94 1.94 0 0 0-3-.43A2 2 0 0 0 8 6a1.89 1.89 0 0 0 .13.67A1 1 0 0 1 7.18 8Z"})))},f=JSON.parse('{"zh":{"title":"CKibana \u9884\u89c8","subtitle":"CKibana 0.2.0","quick_start_btn_text":"\u5feb\u901f\u5165\u95e8","feature_list":[{"title":"\u6613\u4e8e\u4f7f\u7528","description":"\u4f7f\u7528\u6237\u65b9\u4fbf\u5feb\u6377\u5730\u5b9e\u73b0Clickhouse\u6570\u636e\u53ef\u89c6\u5316\u67e5\u8be2\u4e0e\u5206\u6790\uff0c\u5c24\u5176\u662f\u6709Kibana\u4f7f\u7528\u7ecf\u9a8c\u7684\u7528\u6237","icon":"EasyUseIcon"},{"title":"\u529f\u80fd\u5f3a\u5927","description":"\u5145\u5206\u5229\u7528\u539f\u751fKibana\u5f3a\u5927\u7684\u53ef\u89c6\u5316\u529f\u80fd\u5bf9Clickhouse\u4e2d\u7684\u6570\u636e\u8fdb\u884c\u67e5\u8be2\u4e0e\u5206\u6790","icon":"FeatureRichIcon"},{"title":"\u53ef\u6269\u5c55","description":"\u540e\u7eed\u5982\u679c\u9700\u8981\u652f\u6301\u65b0\u7684ElasticSearch\u8bed\u6cd5,\u53ef\u4ee5\u65b9\u4fbf\u5730\u8fdb\u884c\u6269\u5c55","icon":"ExtensibleIcon"}],"get_started_examples":{"title":"\u5feb\u901f\u5f00\u59cb","description":"\u53ef\u4ee5\u4f7f\u7528docker-compose\u4e00\u884c\u547d\u4ee4\u5c31\u53ef\u4ee5\u62c9\u8d77\u5168\u90e8\u7684\u6d4b\u8bd5\u73af\u5883,\u5305\u62ec\u6709\u5185\u7f6e\u7684\u56fe\u8868\u53ef\u4f9b\u4f7f\u7528","example_shell_text":"\u8bf7\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a","example_shell":"cd ckibana/docker-compose; docker-compose up -d"}},"en":{"title":"CKibana public preview","subtitle":"CKibana 0.2.0","quick_start_btn_text":"Quick Start","feature_list":[{"title":"Easy to Use","description":"Visualizing data in ClickHouse using native Kibana.","icon":"EasyUseIcon"},{"title":"Feature Rich","description":"Fully utilize the powerful visualization features of Kibana to analyze data in ClickHouse.","icon":"FeatureRichIcon"},{"title":"Extensible","description":"If there is a need to support new ElasticSearch syntax in the future, it can be easily extended.","icon":"ExtensibleIcon"}],"get_started_examples":{"title":"Get started in seconds","description":"With just one command using docker-compose, you can launch the entire testing environment, including built-in charts for use.","example_shell_text":"Please run the following command: ","example_shell":"cd ckibana/docker-compose; docker-compose up -d"}}}');var v=n(8478);const k={EasyUse:p,FeatureRich:y,Extensible:b};function E(e){let{title:t,description:n,icon:a}=e;const r=k[a];return l.createElement("div",{className:"col"},l.createElement("div",{className:(0,o.A)("card card--full-height padding--md")},l.createElement("span",{className:"avatar margin-bottom--sm"},r&&l.createElement(r,{"aria-hidden":"true",style:{fill:"currentColor",width:24}}),l.createElement("h3",{className:"margin-bottom--none text--normal"},t)),l.createElement("p",{className:"margin-bottom--none"},n)))}function _(){return l.createElement(v.default,null,(()=>{const{i18n:{defaultLocale:e}}=(0,c.default)(),t=localStorage.getItem("i18n-ckibana-locale")||e,n=f[t].feature_list||[];return l.createElement("section",{className:"margin-bottom--lg"},l.createElement("div",{className:"container"},l.createElement("div",{className:"row"},n.map(((e,t)=>l.createElement(E,(0,i.A)({key:t},e)))))))}))}const x={heroBanner:"heroBanner_1ZBZ",heroSubtitle:"heroSubtitle_3vyS",heroBannerWrapper:"heroBannerWrapper_2WmY"};var N=n(6025),C=n(2619);const w="featureImage_3mlp";const A=function(){return l.createElement(v.default,null,(()=>{const{i18n:{defaultLocale:e}}=(0,c.default)(),t=localStorage.getItem("i18n-ckibana-locale")||e,n=f[t];return l.createElement("div",{className:"container margin-bottom--xl text--left"},l.createElement("div",{className:"card padding--lg"},l.createElement("div",{className:"row"},l.createElement("div",{className:"col col--5"},l.createElement("h2",null,n.get_started_examples.title),l.createElement("p",null,n.get_started_examples.description,l.createElement("br",null),l.createElement("br",null),n.get_started_examples.example_shell_text),l.createElement(C.A,null,n.get_started_examples.example_shell),l.createElement("br",null)),l.createElement("div",{className:"col col--6 col--offset-1"},l.createElement("img",{className:w,alt:"Easy to get started in seconds",src:(0,N.A)("img/index_template.png")})))))}))};function B(){return l.createElement(v.default,null,(()=>{const{siteConfig:e,i18n:{defaultLocale:t}}=(0,c.default)(),n=localStorage.getItem("i18n-ckibana-locale")||t,a=f[n];return l.createElement("header",{className:(0,o.A)("container margin-top--lg margin-bottom--lg",x.heroContent)},l.createElement("div",{className:(0,o.A)(x.heroBanner),style:{backgroundImage:"url('img/banner.jpg')"}},l.createElement("div",{className:x.heroBannerWrapper},l.createElement("h3",{className:(0,o.A)("text--normal padding-left--sm",x.heroSubtitle)},a.title),l.createElement("p",{className:"margin-left--md text--bold"},a.subtitle),l.createElement(r.default,{className:"margin-left--md button button--primary",to:`/${n}/`},a.quick_start_btn_text))))}))}function O(){const{siteConfig:e}=(0,c.default)();return l.createElement(s.A,{title:`${e.title}`,description:"CKibana\u662f\u4e00\u4e2a\u53ef\u4ee5\u5728\u539f\u751fkibana\u4e0a\u76f4\u63a5\u67e5\u8be2Clickhouse\u7684\u4e00\u4e2a\u670d\u52a1"},l.createElement(B,null),l.createElement("main",null,l.createElement(_,null),l.createElement(A,null)))}}}]);