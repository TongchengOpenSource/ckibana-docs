"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[3089],{6663:function(e,t,a){a.d(t,{Z:function(){return s}});var l=a(7294),n=a(5999);function r(e){return l.createElement("svg",{style:{display:"inline-block",width:"16px",margin:"10px 5px -2px 0 "},width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.createElement("path",{d:"M8.75 0C4.19409 0 0.5 3.675 0.5 8.20357C0.5 11.8286 2.86451 14.9 6.14241 15.9857C6.19397 15.9964 6.23817 16 6.28237 16C6.58806 16 6.70592 15.7821 6.70592 15.5929C6.70592 15.3964 6.69855 14.8821 6.69487 14.1964C6.38549 14.2643 6.10926 14.2929 5.8625 14.2929C4.27511 14.2929 3.91417 13.0964 3.91417 13.0964C3.5385 12.15 2.9971 11.8964 2.9971 11.8964C2.27891 11.4071 2.99342 11.3929 3.04866 11.3929H3.05234C3.88103 11.4643 4.31563 12.2429 4.31563 12.2429C4.72813 12.9429 5.28058 13.1393 5.77411 13.1393C6.16083 13.1393 6.51071 13.0179 6.71696 12.925C6.79063 12.3964 7.00424 12.0357 7.23996 11.8286C5.40949 11.6214 3.48326 10.9179 3.48326 7.775C3.48326 6.87857 3.80368 6.14643 4.33036 5.575C4.24565 5.36786 3.96205 4.53214 4.41138 3.40357C4.41138 3.40357 4.47031 3.38571 4.59554 3.38571C4.89386 3.38571 5.56786 3.49643 6.68013 4.24643C7.3394 4.06429 8.04286 3.975 8.74632 3.97143C9.44609 3.975 10.1532 4.06429 10.8125 4.24643C11.9248 3.49643 12.5988 3.38571 12.8971 3.38571C13.0223 3.38571 13.0813 3.40357 13.0813 3.40357C13.5306 4.53214 13.247 5.36786 13.1623 5.575C13.689 6.15 14.0094 6.88214 14.0094 7.775C14.0094 10.925 12.0795 11.6179 10.2416 11.8214C10.5363 12.075 10.8015 12.575 10.8015 13.3393C10.8015 14.4357 10.7904 15.3214 10.7904 15.5893C10.7904 15.7821 10.9046 16 11.2103 16C11.2545 16 11.306 15.9964 11.3576 15.9857C14.6392 14.9 17 11.825 17 8.20357C17 3.675 13.3059 0 8.75 0Z",fill:"#92A0B3"}))}var i=a(3810);function s(e){var t=e.editUrl;return l.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:i.kM.common.editThisPage},l.createElement(r,null),l.createElement(n.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},7774:function(e,t,a){a.d(t,{Z:function(){return c}});var l=a(7294),n=a(6010),r=a(9960),i="tag_WK-t",s="tagRegular_LXbV",o="tagWithCount_S5Zl";var c=function(e){var t,a=e.permalink,c=e.name,m=e.count;return l.createElement(r.default,{href:a,className:(0,n.Z)(i,(t={},t[s]=!m,t[o]=m,t))},c,m&&l.createElement("span",null,m))}},62:function(e,t,a){a.d(t,{Z:function(){return c}});var l=a(7294),n=a(6010),r=a(5999),i=a(7774),s="tags_NBRY",o="tag_F03v";function c(e){var t=e.tags;return l.createElement(l.Fragment,null,l.createElement("b",null,l.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),l.createElement("ul",{className:(0,n.Z)(s,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return l.createElement("li",{key:a,className:o},l.createElement(i.Z,{name:t,permalink:a}))}))))}},7663:function(e,t,a){a.d(t,{Z:function(){return f}});var l=a(3366),n=a(7294),r=a(6010),i=a(7019),s=a(9960),o="sidebar_q+wC",c="sidebarItemTitle_9G5K",m="sidebarItemList_6T4b",u="sidebarItem_cjdF",d="sidebarItemLink_zyXk",p="sidebarItemLinkActive_wcJs",g=a(5999);function v(e){var t=e.sidebar;return 0===t.items.length?null:n.createElement("nav",{className:(0,r.Z)(o,"thin-scrollbar"),"aria-label":(0,g.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,r.Z)(c,"margin-bottom--md")},t.title),n.createElement("ul",{className:m},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:u},n.createElement(s.default,{isNavLink:!0,to:e.permalink,className:d,activeClassName:p},e.title))}))))}var h={fontSize:"13px",width:"100%",whiteSpace:"nowrap",textOverflow:"ellipsis",display:"inline-block",lineHeight:"20px",height:"20px"};var b=function(e){var t=e.hashTagObj;return n.createElement("aside",{className:"col col--2"},n.createElement("h3",{style:{fontFamily:"New York"}},"All tags"),n.createElement("section",null,Object.values(t).map((function(e){return n.createElement("div",{key:e.permalink},n.createElement(s.default,{href:e.permalink,style:h,className:"tags-link"},e.name,e.count&&n.createElement("span",null,"\u2003[",e.count,"]")))}))))},E=["blogTags","items","sidebar","toc","children"];var f=function(e){var t=e.blogTags,a=void 0===t?"":t,s=e.items,o=e.sidebar,c=e.toc,m=e.children,u=(0,l.Z)(e,E),d=o&&o.items.length>0,p={};if(a){var g=JSON.parse(JSON.stringify(a||{}));Object.keys(g||{}).forEach((function(e){var t,a=null==g?void 0:g[e];p[a.name]={name:a.name,count:null==a||null==(t=a.items)?void 0:t.length,permalink:a.permalink}}))}else null==s||s.forEach((function(e){var t,a;((null==e||null==(t=e.content)||null==(a=t.metadata)?void 0:a.tags)||[]).forEach((function(e){p[e.label]?++p[e.label].count:p[e.label]={name:e.label,count:1,permalink:e.permalink}}))}));return n.createElement(i.Z,u,n.createElement("div",{className:"container margin-vert--lg",style:{maxWidth:"100%"}},n.createElement("div",{className:"row"},d&&s&&n.createElement("aside",{className:"col col--3"},n.createElement(v,{sidebar:o})),n.createElement("main",{className:(0,r.Z)("col",{"col--7":d&&s,"col--9 col--offset-1":!d,"col--10":d&&!s,"col--12":!c&&!s}),itemScope:!0,itemType:"https://schema.org/Blog"},m),d&&s&&n.createElement(b,{hashTagObj:p}),c&&n.createElement("div",{className:"col col--2"},c))))}},7638:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var l=a(7294),n=a(2263),r=a(7663),i=a(1916),s=a(9960),o=a(5999);var c=function(e){var t=e.metadata,a=t.previousPage,n=t.nextPage;return l.createElement("nav",{className:"pagination-nav","aria-label":(0,o.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},l.createElement("div",{className:"pagination-nav__item"},a&&l.createElement(s.default,{className:"pagination-nav__link",to:a},l.createElement("div",{className:"pagination-nav__label"},"\xab"," ",l.createElement(o.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),l.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&l.createElement(s.default,{className:"pagination-nav__link",to:n},l.createElement("div",{className:"pagination-nav__label"},l.createElement(o.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))},m=a(3810);var u=function(e){var t=e.metadata,a=e.items,s=e.sidebar,o=(0,n.default)().siteConfig.title,u=t.blogDescription,d=t.blogTitle,p="/"===t.permalink?o:d;return l.createElement(r.Z,{title:p,description:u,wrapperClassName:m.kM.wrapper.blogPages,pageClassName:m.kM.page.blogListPage,searchMetadata:{tag:"blog_posts_list"},items:a,sidebar:s},a.map((function(e){var t=e.content;return l.createElement(i.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:t.metadata.truncated},l.createElement(t,null))})),l.createElement(c,{metadata:t}))}},1916:function(e,t,a){a.d(t,{Z:function(){return N}});var l=a(7294),n=a(6010),r=a(3905),i=a(5999),s=a(9960),o=a(4996),c=a(3810),m=a(8483),u=a(6663),d="blogPostTitle_RC3s",p="blogPostData_A2Le",g="blogPostDetailsFull_2lop",v=a(62),h="image_9q7L";var b=function(e){var t=e.author,a=t.name,n=t.title,r=t.url,i=t.imageURL;return l.createElement("div",{className:"avatar margin-bottom--sm"},i&&l.createElement(s.default,{className:"avatar__photo-link avatar__photo",href:r},l.createElement("img",{className:h,src:i,alt:a})),a&&l.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},l.createElement("div",{className:"avatar__name"},l.createElement(s.default,{href:r,itemProp:"url"},l.createElement("span",{itemProp:"name"},a))),n&&l.createElement("small",{className:"avatar__subtitle",itemProp:"description"},n)))},E="authorCol_8c0z";function f(e){var t=e.authors,a=e.assets;return 0===t.length?null:l.createElement("div",{className:"row margin-top--md margin-bottom--sm"},t.map((function(e,t){var r;return l.createElement("div",{className:(0,n.Z)("col col--6",E),key:t},l.createElement(b,{author:Object.assign({},e,{imageURL:null!=(r=a.authorsImageUrls[t])?r:e.imageURL})}))})))}var N=function(e){var t,a,h,b,E=(h=(0,c.c2)().selectMessage,function(e){var t=Math.ceil(e);return h(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),N=(0,o.C)().withBaseUrl,_=e.children,k=e.frontMatter,C=e.assets,Z=e.metadata,y=e.truncated,w=e.isBlogPostPage,T=void 0!==w&&w,P=Z.date,A=Z.formattedDate,x=Z.permalink,L=Z.tags,O=Z.readingTime,M=Z.title,j=Z.editUrl,I=Z.authors,B=null!=(t=C.image)?t:k.image,R=!T&&y,U=L.length>0;return l.createElement("article",{className:T?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"https://schema.org/BlogPosting"},(b=T?"h1":"h2",l.createElement("header",null,l.createElement(b,{className:d,itemProp:"headline"},T?M:l.createElement(s.default,{itemProp:"url",to:x},M)),l.createElement("div",{className:(0,n.Z)(p,"margin-vert--md")},l.createElement("time",{dateTime:P,itemProp:"datePublished"},A),void 0!==O&&l.createElement(l.Fragment,null," \xb7 ",E(O),"\xa0",T?l.createElement("label",{id:"umami-post-view-container"}):"")),l.createElement(f,{authors:I,assets:C}))),B&&l.createElement("meta",{itemProp:"image",content:N(B,{absolute:!0})}),l.createElement("div",{className:"markdown",itemProp:"articleBody"},l.createElement(r.Zo,{components:m.Z},_)),(U||y)&&l.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",(a={},a[g]=T,a))},U&&l.createElement("div",{className:(0,n.Z)("col",{"col--9":R})},l.createElement(v.Z,{tags:L})),T&&j&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(u.Z,{editUrl:j})),R&&l.createElement("div",{className:(0,n.Z)("col text--right",{"col--3":U})},l.createElement(s.default,{to:Z.permalink,"aria-label":"Read more about "+M},l.createElement("b",null,l.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},8483:function(e,t,a){var l=a(3366),n=a(7294),r=a(7440),i=a(5935),s=a(9911),o=a(1262),c=["children"],m=["children"],u=function e(t,a,l){var n,r;if(Array.isArray(null==t||null==(n=t.props)?void 0:n.children)&&null!=t&&null!=(r=t.props)&&r.originalType){var i,o,c=l.createElement(null==t||null==(i=t.props)?void 0:i.originalType),m=(0,s.Qc)((0,s.Pz)((null==t?void 0:t.props)||{}));delete m.children,Object.keys(m).forEach((function(e){c.setAttribute(e,m[e])})),a.appendChild(e(null==t||null==(o=t.props)?void 0:o.children,c,l))}else if(Array.isArray(t))t.forEach((function(t){e(t,a,l)}));else{var u;if(null!=t&&null!=(u=t.props)&&u.originalType){var d,p,g=l.createElement(null==t||null==(d=t.props)?void 0:d.originalType),v=(0,s.Qc)((0,s.Pz)((null==t?void 0:t.props)||{}));delete v.children,Object.keys(v).forEach((function(e){g.setAttribute(e,v[e])})),a.appendChild(e(null==t||null==(p=t.props)?void 0:p.children,g,l))}else a.append(t)}return a},d=function(e){var t,a=e.children,r=(0,l.Z)(e,c),s=(null==(t=a[0])?void 0:t.props.children)||(null==a?void 0:a.props.children),o=!Array.isArray(s)||s.every((function(e){return e.props.children})),m=Object.assign({},r),d=o?a:a.slice(1),p=document.createElement("table");Object.keys(m).forEach((function(e){p.setAttribute(e,m[e])})),u(d,p,document);var g=document.createElement("div");g.appendChild(p),g.setAttribute("class","table-wrapper");var v=(0,i.ZP)(g.innerHTML);return n.createElement("div",{className:"table-wrapper"},v)};t.Z=Object.assign({},r.Z,{table:function(e){var t=e.children,a=(0,l.Z)(e,m);return n.createElement(o.default,null,(function(){return d(Object.assign({children:t},a))}))}})}}]);