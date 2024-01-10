"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[578],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),c=s(n),m=r,k=c["".concat(p,".").concat(m)]||c[m]||u[m]||l;return n?a.createElement(k,i(i({ref:e},d),{},{components:n})):a.createElement(k,i({ref:e},d))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7703:function(t,e,n){n.r(e),n.d(e,{contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return d}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],o={sidebar_position:3},p="api-docs",s={unversionedId:"api-docs",id:"api-docs",title:"api-docs",description:"application.yaml",source:"@site/docs/en/api-docs.md",sourceDirName:".",slug:"/api-docs",permalink:"/ckibana-docs/zh/en/api-docs",editUrl:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"usercase",permalink:"/ckibana-docs/zh/en/UserCase"},next:{title:"troubleshooting",permalink:"/ckibana-docs/zh/en/troubleshooting"}},d=[{value:"application.yaml",id:"applicationyaml",children:[],level:2},{value:"Detailed explanation of table creation",id:"detailed-explanation-of-table-creation",children:[{value:"Table creation instructions",id:"table-creation-instructions",children:[],level:3},{value:"ES data types and CK data types mapping:",id:"es-data-types-and-ck-data-types-mapping",children:[],level:3}],level:2},{value:"system indexes.",id:"system-indexes",children:[{value:"proxy-settings",id:"proxy-settings",children:[{value:"Detailed explanation of parameters",id:"detailed-explanation-of-parameters",children:[],level:4}],level:3},{value:"proxy-monitor",id:"proxy-monitor",children:[],level:3},{value:"proxy-black-list",id:"proxy-black-list",children:[{value:"GET",id:"get",children:[],level:4},{value:"Insert",id:"insert",children:[],level:4},{value:"Delete",id:"delete",children:[],level:4}],level:3}],level:2}],u={toc:d};function c(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"api-docs"},"api-docs"),(0,l.kt)("h2",{id:"applicationyaml"},"application.yaml"),(0,l.kt)("p",null,"This file contains some basic configurations such as ports, logging, etc. The core parameter is the ",(0,l.kt)("inlineCode",{parentName:"p"},"metadata-config")," parameter."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Desc"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"metadata-config"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"Elasticsearch metadata cluster")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hosts"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Elasticsearch metadata cluster host")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"headers"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Elasticsearch metadata cluster user and password authentication information.")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"eg\uff1a\nmetadata-config:\n  hosts: your es metadata cluster hosts\n  headers:\n    Authorization: 'username password'\n")),(0,l.kt)("h2",{id:"detailed-explanation-of-table-creation"},"Detailed explanation of table creation"),(0,l.kt)("h3",{id:"table-creation-instructions"},"Table creation instructions"),(0,l.kt)("p",null,"The time field is required in the table creation statement, such as the ",(0,l.kt)("inlineCode",{parentName:"p"},"@timestamp")," field in the table, which is used as the time option when creating an index pattern in Kibana. Other fields should be added as needed based on the query conditions of the business itself."),(0,l.kt)("p",null,"Here is an example of a table creation statement."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"create database ckibana;\nuse ckibana;\n\nCREATE TABLE ckibana.table_local\n(\n    `request_method` LowCardinality(String),\n    `request_time` Float64,\n    `http_host` String,\n    `@timestamp` UInt64,\n    `ck_assembly_extension` String,\n    INDEX timestamp_index `@timestamp` TYPE minmax GRANULARITY 8192\n)\nENGINE = MergeTree\nPARTITION BY (toYYYYMMDD(toDateTime(`@timestamp` / 1000, 'Asia/Shanghai')), toHour(toDateTime(`@timestamp` / 1000, 'Asia/Shanghai')))\nORDER BY (`http_host`)\nSETTINGS in_memory_parts_enable_wal = 0, index_granularity = 8192;\n\nCREATE TABLE IF NOT EXISTS ckibana.table_all AS ckibana.table_local ENGINE Distributed('clickhouse_cluster', ckibana, table_local, rand());\n")),(0,l.kt)("p",null,"When using the sampling feature, you need to modify the ORDER BY and SAMPLE BY statements in the table creation statement. For more details, please refer to the following resources:",(0,l.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/sql-reference/statements/select/sample"},"clickhouse doc")," \u3002"),(0,l.kt)("p",null,"Note that the sampling field can be a user-defined field, but the field must be of type UInt64. It is recommended to use the @timestamp field as the sampling field instead of creating an additional field."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\ncreate database ckibana;\nuse ckibana;\n\nCREATE TABLE ckibana.table_local\n(\n    `request_method` LowCardinality(String),\n    `request_time` Float64,\n    `http_host` String,\n    `@timestamp` UInt64,\n    `ck_assembly_extension` String,\n    INDEX timestamp_index `@timestamp` TYPE minmax GRANULARITY 8192\n)\nENGINE = MergeTree\nPARTITION BY (toYYYYMMDD(toDateTime(`@timestamp` / 1000, 'Asia/Shanghai')), toHour(toDateTime(`@timestamp` / 1000, 'Asia/Shanghai')))\nORDER BY (`http_host`, intHash64(`@timestamp`))\nSAMPLE BY intHash64(`@timestamp`)\nSETTINGS in_memory_parts_enable_wal = 0, index_granularity = 8192;\n\nCREATE TABLE IF NOT EXISTS ckibana.table_all AS ckibana.table_local ENGINE Distributed('clickhouse_cluster', ckibana, table_local, rand());\n")),(0,l.kt)("h3",{id:"es-data-types-and-ck-data-types-mapping"},"ES data types and CK data types mapping:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"es Type"),(0,l.kt)("th",{parentName:"tr",align:null},"ck Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"keyword"),(0,l.kt)("td",{parentName:"tr",align:null},"String")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"text"),(0,l.kt)("td",{parentName:"tr",align:null},"String")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ip"),(0,l.kt)("td",{parentName:"tr",align:null},"String(Automatic identification of IPv4 and IPv6 for CKibana.)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"Int32")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"long"),(0,l.kt)("td",{parentName:"tr",align:null},"Int64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"Float32")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"double"),(0,l.kt)("td",{parentName:"tr",align:null},"Float64")))),(0,l.kt)("h2",{id:"system-indexes"},"system indexes."),(0,l.kt)("h3",{id:"proxy-settings"},"proxy-settings"),(0,l.kt)("p",null,"By default, the index name for this is ",(0,l.kt)("inlineCode",{parentName:"p"},"proxy-settings"),"."),(0,l.kt)("h4",{id:"detailed-explanation-of-parameters"},"Detailed explanation of parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"desc"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"query.sampleIndexPatterns"),(0,l.kt)("td",{parentName:"tr",align:null},"Array"),(0,l.kt)("td",{parentName:"tr",align:null},"NO"),(0,l.kt)("td",{parentName:"tr",align:null},"Indexes that require sampling need to be matched by prefix. Note that if you need to use sampling, the table creation statement must support SAMPLE BY.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"query.sampleCountMaxThreshold"),(0,l.kt)("td",{parentName:"tr",align:null},"Int"),(0,l.kt)("td",{parentName:"tr",align:null},"NO"),(0,l.kt)("td",{parentName:"tr",align:null},"The threshold for enabling sampling. Sampling will only be enabled if the data volume returned by an msearch query exceeds this threshold. Note that when the data volume is relatively large, this value needs to be set slightly larger in order for the chart to be more accurate")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"query.useCache"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"NO"),(0,l.kt)("td",{parentName:"tr",align:null},"By default, caching is disabled. Do you want to enable caching and cache the query results in Elasticsearch")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"proxy.roundAbleMinPeriod"),(0,l.kt)("td",{parentName:"tr",align:null},"Long"),(0,l.kt)("td",{parentName:"tr",align:null},"YES"),(0,l.kt)("td",{parentName:"tr",align:null},"Precision of rounding time.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"proxy.maxTimeRange"),(0,l.kt)("td",{parentName:"tr",align:null},"Long"),(0,l.kt)("td",{parentName:"tr",align:null},"YES"),(0,l.kt)("td",{parentName:"tr",align:null},"Maximum time range for a query.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"proxy.blackIndexList"),(0,l.kt)("td",{parentName:"tr",align:null},"Array"),(0,l.kt)("td",{parentName:"tr",align:null},"YES"),(0,l.kt)("td",{parentName:"tr",align:null},"Blacklist, matched by prefix. If an index is configured in the blacklist, the query will not go through ClickHouse but will be sent directly to Elasticsearch")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"proxy.whiteIndexList"),(0,l.kt)("td",{parentName:"tr",align:null},"Array"),(0,l.kt)("td",{parentName:"tr",align:null},"YES"),(0,l.kt)("td",{parentName:"tr",align:null},"Whitelist, matched by prefix. If an index is configured in the whitelist, the query will be sent to ClickHouse for processing")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"proxy.es"),(0,l.kt)("td",{parentName:"tr",align:null},"Object"),(0,l.kt)("td",{parentName:"tr",align:null},"NO"),(0,l.kt)("td",{parentName:"tr",align:null},"This business cluster is configured with an Elasticsearch cluster. If it is not configured, the Elasticsearch cluster specified in the metadata-config will be used by default")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"proxy.ck"),(0,l.kt)("td",{parentName:"tr",align:null},"Object"),(0,l.kt)("td",{parentName:"tr",align:null},"YES"),(0,l.kt)("td",{parentName:"tr",align:null},"This business cluster is configured with a ClickHouse cluster")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"proxy.enableMonitoring"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"NO"),(0,l.kt)("td",{parentName:"tr",align:null},'"Off" by default. Do you want to enable SQL query monitoring')))),(0,l.kt)("p",null,"To update the Elasticsearch metadata cluster configuration, the following interface is provided by CKibana."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"1\uff09Updating ClickHouse configuration")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"curl --location --request POST 'localhost:8080/config/updateCk?url=ckUrl&user=default&pass=default&defaultCkDatabase=ops'\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"2\uff09Updating Elasticsearch configuration")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"curl --location --request POST 'localhost:8080/config/updateEs?host=esHost&headers=key:value,key2:value2'\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"3\uff09Updating whitelist index")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"curl --location --request POST 'localhost:8080/config/updateWhiteIndexList?list=index1,index2'\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"4\uff09Updating blacklist index")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"curl --location --request POST 'localhost:8080/config/updateBlackIndexList?list=index1,index2'\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"5\uff09Updating sampling index")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"curl --location --request POST 'localhost:8080/config/updateSampleIndexList?list=index1,index2'\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"6\uff09Updating sampleCountMaxThreshold")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"curl --location --request POST 'localhost:8080/config/updateSampleCountMaxThreshold?sampleCountMaxThreshold=1500000'\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"7\uff09Updating useCache")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"curl --location --request POST 'localhost:8080/config/updateUseCache?useCache=true'\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"8\uff09Updating roundAbleMinPeriod")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"curl --location --request POST 'localhost:8080/config/updateRoundAbleMinPeriod?roundAbleMinPeriod=20000'\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"9\uff09Updating maxTimeRange")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"curl --location --request POST 'localhost:8080/config/updateMaxTimeRange?maxTimeRange=864000000'\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"10\uff09Updating enableMonitoring")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"curl --location --request POST 'localhost:8080/config/updateEnableMonitoring?enableMonitoring=false'\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"11\uff09Updating msearchThreadPoolCoreSize")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"curl --location --request POST 'localhost:8080/config/updateMsearchThreadPoolCoreSize?msearchThreadPoolCoreSize=4'\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"12\uff09Get configuration")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"curl --location 'localhost:8080/config/all'\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"13\uff09Full update configuration interface")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'curl --location \'localhost:8080/config/all\' \\\n--header \'Content-Type: application/json\' \\\n--data \'{\n    "query":{\n        "sampleIndexPatterns":[\n            "index1",\n            "index2"\n        ],\n        "sampleCountMaxThreshold":"1500000",\n        "useCache":false\n    },\n    "proxy":{\n        "roundAbleMinPeriod":120000,\n        "maxTimeRange":86400000,\n        "enableMonitoring":true,\n        "blackIndexList":[\n            "index1",\n            "index2"\n        ],\n        "whiteIndexList":[\n            "index1",\n            "index2"\n        ],\n        "es":{\n            "host":"esHost\n            "headers":[\n                {\n                    "Authorization":"yourEsClusterAuthorization"\n                }\n            ]\n        },\n        "ck":{\n            "url":"ckUrl",\n            "user":"default",\n            "pass":"default",\n            "defaultCkDatabase":"ops"\n        }\n    }\n}\'\n')),(0,l.kt)("h3",{id:"proxy-monitor"},"proxy-monitor"),(0,l.kt)("p",null,"Provide monitoring index. Can be enabled through configuration."),(0,l.kt)("p",null,"This index can be used for SQL monitoring on Kibana."),(0,l.kt)("h3",{id:"proxy-black-list"},"proxy-black-list"),(0,l.kt)("p",null,"Index query SQL blacklist. Can be enabled through configuration."),(0,l.kt)("p",null,"This index can be directly operated through Kibana proxy\uff1a"),(0,l.kt)("h4",{id:"get"},"GET"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"curl --location 'http://localhost:8080/proxy/_black_list'\n")),(0,l.kt)("h4",{id:"insert"},"Insert"),(0,l.kt)("p",null,"range: Query interval (in milliseconds)"),(0,l.kt)("p",null,"sql: Query statement with time range exclusion. Can be obtained in monitor logs."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'curl --location \'http://localhost:8080/proxy/_black_list\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "range": "900000",\n    "sql": "((`@timestamp` = 1698293120000))"\n}\'\n')),(0,l.kt)("h4",{id:"delete"},"Delete"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"curl --location --request DELETE 'http://localhost:8080/proxy/_black_list/{id}'\n")))}c.isMDXComponent=!0}}]);