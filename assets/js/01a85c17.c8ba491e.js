"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[13],{7774:function(e,t,a){a.d(t,{Z:function(){return m}});var l=a(7294),n=a(6010),r=a(9960),c="tag_WK-t",s="tagRegular_LXbV",i="tagWithCount_S5Zl";var m=function(e){var t,a=e.permalink,m=e.name,o=e.count;return l.createElement(r.default,{href:a,className:(0,n.Z)(c,(t={},t[s]=!o,t[i]=o,t))},m,o&&l.createElement("span",null,o))}},7663:function(e,t,a){a.d(t,{Z:function(){return h}});var l=a(3366),n=a(7294),r=a(6010),c=a(7019),s=a(9960),i="sidebar_q+wC",m="sidebarItemTitle_9G5K",o="sidebarItemList_6T4b",u="sidebarItem_cjdF",d="sidebarItemLink_zyXk",g="sidebarItemLinkActive_wcJs",b=a(5999);function p(e){var t=e.sidebar;return 0===t.items.length?null:n.createElement("nav",{className:(0,r.Z)(i,"thin-scrollbar"),"aria-label":(0,b.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,r.Z)(m,"margin-bottom--md")},t.title),n.createElement("ul",{className:o},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:u},n.createElement(s.default,{isNavLink:!0,to:e.permalink,className:d,activeClassName:g},e.title))}))))}var f={fontSize:"13px",width:"100%",whiteSpace:"nowrap",textOverflow:"ellipsis",display:"inline-block",lineHeight:"20px",height:"20px"};var v=function(e){var t=e.hashTagObj;return n.createElement("aside",{className:"col col--2"},n.createElement("h3",{style:{fontFamily:"New York"}},"All tags"),n.createElement("section",null,Object.values(t).map((function(e){return n.createElement("div",{key:e.permalink},n.createElement(s.default,{href:e.permalink,style:f,className:"tags-link"},e.name,e.count&&n.createElement("span",null,"\u2003[",e.count,"]")))}))))},E=["blogTags","items","sidebar","toc","children"];var h=function(e){var t=e.blogTags,a=void 0===t?"":t,s=e.items,i=e.sidebar,m=e.toc,o=e.children,u=(0,l.Z)(e,E),d=i&&i.items.length>0,g={};if(a){var b=JSON.parse(JSON.stringify(a||{}));Object.keys(b||{}).forEach((function(e){var t,a=null==b?void 0:b[e];g[a.name]={name:a.name,count:null==a||null==(t=a.items)?void 0:t.length,permalink:a.permalink}}))}else null==s||s.forEach((function(e){var t,a;((null==e||null==(t=e.content)||null==(a=t.metadata)?void 0:a.tags)||[]).forEach((function(e){g[e.label]?++g[e.label].count:g[e.label]={name:e.label,count:1,permalink:e.permalink}}))}));return n.createElement(c.Z,u,n.createElement("div",{className:"container margin-vert--lg",style:{maxWidth:"100%"}},n.createElement("div",{className:"row"},d&&s&&n.createElement("aside",{className:"col col--3"},n.createElement(p,{sidebar:i})),n.createElement("main",{className:(0,r.Z)("col",{"col--7":d&&s,"col--9 col--offset-1":!d,"col--10":d&&!s,"col--12":!m&&!s}),itemScope:!0,itemType:"https://schema.org/Blog"},o),d&&s&&n.createElement(v,{hashTagObj:g}),m&&n.createElement("div",{className:"col col--2"},m))))}},5534:function(e,t,a){a.r(t),a.d(t,{default:function(){return o}});var l=a(7294),n=a(7663),r=a(7774),c=a(3810),s="tag_7kA+";function i(e){var t=e.letterEntry;return l.createElement("article",null,l.createElement("h2",null,t.letter),l.createElement("ul",{className:"padding--none"},t.tags.map((function(e){return l.createElement("li",{key:e.permalink,className:s},l.createElement(r.Z,e))}))),l.createElement("hr",null))}var m=function(e){var t=e.tags,a=(0,c.PZ)(t);return l.createElement("section",{className:"margin-vert--lg"},a.map((function(e){return l.createElement(i,{key:e.letter,letterEntry:e})})))};var o=function(e){var t=e.tags,a=e.sidebar,r=(0,c.MA)();return l.createElement(n.Z,{title:r,wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogTagsListPage,searchMetadata:{tag:"blog_tags_list"},sidebar:a},l.createElement("h1",null,r),l.createElement(m,{tags:Object.values(t)}))}}}]);