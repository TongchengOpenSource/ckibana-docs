"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[45],{4184:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"/build-logging-platform-with-native-kibana-and-clickhouse","metadata":{"permalink":"/ckibana-docs/en/blog/build-logging-platform-with-native-kibana-and-clickhouse","source":"@site/blog/en/build-logging-platform-with-native-kibana-and-clickhouse.md","title":"How to Build a Logging Platform using Native Kibana and ClickHouse","description":"How to Build a Logging Platform using Native Kibana and ClickHouse","date":"2024-08-26T08:13:09.507Z","formattedDate":"August 26, 2024","tags":[{"label":"CKibana","permalink":"/ckibana-docs/en/blog/tags/c-kibana"}],"readingTime":10.515,"truncated":true,"authors":[{"name":"CKibana-Team"}]},"content":"> This article will introduce how to build a logging platform based on native Kibana and Clickhouse.\\r\\n\\r\\n\x3c!--truncate--\x3e\\r\\nIn the rapid development of business, the demand for querying and analyzing various log data leads to a sharp increase in the scale of log storage. Traditional ELK and log systems centered around ElasticSearch subsequently face many challenges in terms of cost, stability, and performance. More and more companies at home and abroad, such as Ctrip, Kuaishou, Bilibili, Cloudflare, and Uber, have been seen switching their storage to ClickHouse, with obvious benefits from their shares. Our log system has also begun to try migrating from ElasticSearch to ClickHouse, exploring and accumulating a set of comprehensive solutions that maximally cater to the existing users\' habits to achieve a smooth transition.\\r\\n\\r\\n## 1  Background Introduction\\r\\n\\r\\nSince the transition from ElasticSearch to Clickhouse in 2020, our company\'s largest log system has seen significant improvements in both cost and stability. It reliably supported over 500 billion logs per day during this year\'s National Day period, with costs reduced to just 30% of the original ElasticSearch solution.\\r\\n\\r\\nBesides this log system, there are many other logging systems within the company, most of which are based on the open-source ELK approach. As scales have increased, issues with costs and stability have gradually emerged, prompting plans to switch all logging system storage foundations to Clickhouse.\\r\\n\\r\\nThe industry has widely shared the selection and usage of Clickhouse for logging scenarios, which will not be the focus of this article. Those interested can search for relevant information on their own.\\r\\n\\r\\nAfter completing the storage switch, the most crucial issue to address is the query UI user experience. While some companies have developed their own query UIs after switching log storage to Clickhouse, accommodating users\' existing habits for a seamless transition from native Kibana to a new platform is challenging. It requires all business colleagues to familiarize themselves with a new set of syntax and UI interactions, inadvertently adding significant costs.\\r\\n\\r\\nTherefore, making it possible for users to migrate to new platform without any learning cost is a rather challenging issue.\\r\\n\\r\\n## 2 Solution Introduction\\r\\n\\r\\nOur approach is actually quite simple and intuitive. We chose to add an additional proxy layer between native Kibana and Elasticsearch. This proxy is responsible for the syntax translation between Elasticsearch and ClickHouse:\\r\\n![Untitled](https://oss.17usoft.com/infra-github/ckibana02.png)\\r\\n\\r\\nWe developed our own Proxy (named CKibana), which translates chart requests into ClickHouse syntax, fetches results from ClickHouse, and then simulates an Elasticsearch response to return to Kibana. This allows us to directly display data from ClickHouse in the native Kibana interface. In addition to the syntax conversion, we also addressed many practical issues encountered during use.\\r\\n\\r\\nConsidering the limitations of ClickHouse\'s query concurrency capabilities, we retained Elasticsearch. This Elasticsearch can be used for advanced features such as result caching and storing metadata related to Kibana, and it is very lightweight.\\r\\n\\r\\n## 3 How to Use CKibana\\r\\n\\r\\n### Components\\r\\n\\r\\n1. Kibana: Used to provide a UI display for business purposes.\\r\\n2. ElasticSearch: Used for storing Kibana metadata and for query caching among other advanced features.\\r\\n3. ClickHouse: The storage system where the actual log data is stored.\\r\\n4. CKibana: Provides Proxy and other advanced functionalities, enabling users to query ClickHouse data directly on the native Kibana.\\r\\n\\r\\n### Getting Started\\r\\n\\r\\n#### Launching CKibana\\r\\n\\r\\nTo start using CKibana, you\'ll first need to configure it with the necessary Elasticsearch details.\\r\\n\\r\\n![Untitled](https://oss.17usoft.com/infra-github/ckibana03.png)\\r\\n\\r\\nOnce you have your configuration set up, ensure that you have JDK 17 or higher installed on your system for CKibana to run. You can then launch CKibana with the following command:\\r\\n\\r\\n`java -jar ckibana.jar`\\r\\n\\r\\n#### Kibana Configuration\\r\\n\\r\\nTo modify the Kibana configuration, change the Elasticsearch address to the CKibana address\uff1a\\r\\n![Untitled](https://oss.17usoft.com/infra-github/ckibana04.png)\\r\\n\\r\\nAt this point, Kibana is fully functional and can use CKibana as an Elasticsearch Proxy\uff1a\\r\\n![Untitled](https://oss.17usoft.com/infra-github/ckibana05.png)\\r\\n\\r\\n#### Configuring ClickHouse Connection Information and Index Whitelist\\r\\n\\r\\nSet up the ClickHouse connection:\\r\\n\\r\\n`curl --location --request POST \'localhost:8080/config/updateCk?url=ckUrl&user=default&pass=default&defaultCkDatabase=ops\'`\\r\\n\\r\\n#### Configure the index to switch to ClickHouse\\r\\n\\r\\n`curl --location --request POST \'localhost:8080/config/updateWhiteIndexList?list=index1,index2\'`\\r\\n\\r\\nThe corresponding relationship between field types in ElasticSearch and ClickHouse is as follows:\\r\\n\\r\\n| es     | ck    |\\r\\n|----------|---------|\\r\\n| keyword  | String  |\\r\\n| text     | String  |\\r\\n| ip       | String(support ipv4 and ipv6)  |\\r\\n| integer  | Int32  |\\r\\n| long     | Int64   |\\r\\n| float    | Float32 |\\r\\n| double   | Float64 |\\r\\n\\r\\n#### Create index pattern\\r\\n![Untitled](https://oss.17usoft.com/infra-github/ckibana06.png)\\r\\n\\r\\nKey Points to Note:\\r\\n\\r\\n1. First, ensure that the input index pattern matches the ClickHouse table exactly; the index pattern and the ClickHouse table name must be an exact match.\\r\\n2. If the corresponding table cannot be selected, you can troubleshoot based on the SQL in the CKibana logs to see if the corresponding table can be queried.\\r\\n3. Pay attention to the time field; otherwise, the time field will not be selectable. The selection logic is as follows:\\r\\n - Fields of the Date type, such as DateTime64, will be considered as time types.\\r\\n - Field names containing \\"time\\", for example (@timestamp UInt64), will be considered as time types.\\r\\n\\r\\nIn either of these two cases, if any one condition is met, the field will be considered a time field. If you are unable to select a time field, it\'s necessary to check whether the fields in the ClickHouse table comply with the matching logic.\\r\\n\\r\\n#### Here we go\\r\\n\\r\\nAfter configuring the index pattern, you can now make full use of Kibana\'s visual analysis capabilities![Untitled](https://oss.17usoft.com/infra-github/ckibana07.png)\\r\\n\\r\\n### Advanced Features\\r\\n\\r\\n#### Sampling\\r\\n\\r\\nMost of Kibana\'s charts focus on trends. When the result set is too large, it consumes more ClickHouse resources. We provide a sampling feature that ensures the chart trends are close to actual trends while effectively controlling the use of ClickHouse resources, especially when dealing with large datasets.\\r\\n\\r\\nNote:\\r\\n- The corresponding ClickHouse table needs to be created according to the ck sampling table requirements.[clickhouse sample](https://clickhouse.com/docs/en/sql-reference/statements/select/sample)\\r\\n- If the sampling threshold is set too low, it can result in a significant difference between the reconstructed values and the true values. We have set our online sampling threshold to 5 million.\\r\\n\\r\\nEnabling sampling requires two steps:\\r\\n1. Configure the tables to be sampled.\\r\\n2. Update the sampling threshold. Sampling is triggered when the result set exceeds this threshold.\\r\\n\\r\\n\\r\\nSampling logic: `Math.max(0.01, Double.parseDouble(String.format(\\"%.5f\\", sampleParam.getSampleCountMaxThreshold() * 1.00 / sampleParam.getSampleTotalCount())))`\\r\\n\\r\\n![Untitled](https://oss.17usoft.com/infra-github/ckibana08.png)\\r\\n\\r\\nExpanding the response from the rate limiter, you can see the sampling value.\\r\\n\\r\\n#### Time Rounding + Caching\\r\\n\\r\\nWhen an issue occurs online, a large number of SRE and business colleagues need to query the nginx logs for troubleshooting, and their query conditions are mostly the same. However, ClickHouse aims to achieve the best query performance by utilizing as many CPUs as possible for computations. This situation leads to ClickHouse\'s CPU usage spiking to full capacity. Moreover, under continuous retries by colleagues, the CPU cannot recover.\\r\\n\\r\\nTherefore, we implemented a feature for time rounding + caching.\\r\\n\\r\\nTime Rounding: For instance, setting rounding to 20s means that the second\'s precision in the query time conditions will be %20, effectively introducing a maximum delay of 20s for data queries.With time rounding in place, a large number of query conditions become identical. At this point, enabling result caching can significantly alleviate the pressure on ClickHouse.\\r\\n\\r\\nSet up time rounding:\\r\\n`curl --location --request POST \'localhost:8080/config/updateRoundAbleMinPeriod?roundAbleMinPeriod=20000\' \u5355\u4f4dms`\\r\\n\\r\\nEnable caching:\\r\\n`curl --location --request POST \'localhost:8080/config/updateUseCache?useCache=true\'`\\r\\n![Untitled](https://oss.17usoft.com/infra-github/ckibana09.png)\\r\\n\\r\\nWhether the cache is hit can be seen in the response structure.\\r\\n\\r\\n#### Query Monitoring + Blacklisting\\r\\n\\r\\nKibana\'s query syntax is relatively flexible, but some queries can consume substantial resources from ClickHouse. Therefore, we have implemented monitoring for all queries and their execution times. This allows us to easily view which queries have been performed and set up blacklisting controls for them. By doing this, we can restrict queries that are not very efficient.\\r\\n\\r\\n\\r\\nEnable monitoring:\\r\\n\\r\\n`curl --location --request POST \'localhost:8080/config/updateEnableMonitoring?enableMonitoring=true\'`\\r\\n\\r\\n![Untitled](https://oss.17usoft.com/infra-github/ckibana10.png)\\r\\n\\r\\nAs shown in the figure above, we can monitor the details, syntax, and execution time of each query.\\r\\n\\r\\n![Untitled](https://oss.17usoft.com/infra-github/ckibana11.png)\\r\\n\\r\\nThis allows us to leverage Kibana\'s powerful built-in chart features for more intuitive analysis.\\r\\n\\r\\n#### Query TimeRange Limits\\r\\n\\r\\nOften, when users want to view the latest trends based on certain conditions, they might directly query data for recent periods, such as the last 7 days. This can lead to significant resource consumption. To manage this, CKibana has implemented a maximum time range for queries, which helps in limiting usage and conserving resources.\\r\\n\\r\\n`curl --location --request POST \'localhost:8080/config/updateMaxTimeRange?maxTimeRange=864000000\' \u5355\u4f4dms`\\r\\n\\r\\n#### keyword Query\\r\\n\\r\\nTo better align with ElasticSearch usage conventions, a `field.keyword` query is equivalent to an exact search on the field, whereas without .keyword it implies a fuzzy search.\\r\\n\\r\\nFor example, `host.keyword:\\"www.baidu.com\\"` when translated into SQL becomes:`host=\\"www.baidu.com\\"`.\\r\\n\\r\\n#### Discover Performance Optimization\\r\\n\\r\\nClickHouse is highly suitable for analytical processing (AP) scenarios, particularly when large time spans are involved in queries. Traditional SQL commands like `select x from table where x order by time desc limit 10` can lead to very low query performance and consume a significant amount of ClickHouse resources.\\r\\n\\r\\nTo address scenarios that involve trend graphs plus details, we have optimized performance to fully leverage ClickHouse\'s AP capabilities. This optimization involves splitting the execution into two steps:\\r\\n1. Leveraging ClickHouse\'s aggregation capabilities to query the number of logs that meet the criteria per minute.\\r\\n2. Based on the number of logs per minute, automatically trimming the log search time span. For instance, if the number of logs within a minute fulfills the requirement, then the query detail time span is automatically reduced to one minute.\\r\\n\\r\\nThis feature of automatically trimming the query time leads to a significant improvement in the query performance of the Discover version and greatly optimizes CPU usage in ClickHouse.\\r\\n\\r\\n![Untitled](https://oss.17usoft.com/infra-github/ckibana15.png)\\r\\n\\r\\nAs illustrated above, a Discover query is divided into three SQL statements:\\r\\n1. Determine whether sampling is needed\\r\\n2. Count the number of logs per minute\\r\\n3. Automatically trim the query time range\\r\\n\\r\\n## 4 Usage scenarios: Nginx logs\\r\\n\\r\\n#### Clickhouse Table\\r\\n\\r\\n``` CREATE TABLE bjops.ops_bjtlblog_local\\r\\n(\\r\\n`@timestamp` UInt64,\\r\\n`X-Request-Id` String,\\r\\n`addr` String,\\r\\n`ap_area` String,\\r\\n`byte` Int64,\\r\\n`bytes_recv` Int64,\\r\\n`Bbtes_sent` Int64,\\r\\n`content-type` String,\\r\\n`content_length` Int64,\\r\\n`crp` String,\\r\\n`csi` String,\\r\\n`cspanid` String,\\r\\n`difftime` Int32,\\r\\n`error_body` String,\\r\\n`error_client` String,\\r\\n`error_host` String,\\r\\n`error_request` String,\\r\\n`error_server` String,\\r\\n`error_upstream` String,\\r\\n`forwarded` String,\\r\\n`host` String,\\r\\n`hostname` String,\\r\\n`idc` LowCardinality(String),\\r\\n`index_name` LowCardinality(String),\\r\\n`ip` String,\\r\\n`logant_idc` LowCardinality(String),\\r\\n`logant_type` LowCardinality(String),\\r\\n`origin_ip` String,\\r\\n`referer` String,\\r\\n`remote_port` String,\\r\\n`request_method` LowCardinality(String),\\r\\n`request_time` Int64,\\r\\n`request_uri` String,\\r\\n`request_url` String,\\r\\n`scheme` String,\\r\\n`server_addr` String,\\r\\n`server_name` String,\\r\\n`server_port` String,\\r\\n`server_protocol` String,\\r\\n`source` String,\\r\\n`sspanid` String,\\r\\n`st` String,\\r\\n`status` Int32,\\r\\n`timeuse` Float64,\\r\\n`traceid` String,\\r\\n`type` String,\\r\\n`ua` String,\\r\\n`up_addr` String,\\r\\n`up_status` Int32,\\r\\n`upstream_name` String,\\r\\n`upstream_response_time` Int32,\\r\\n`worker_pid` String,\\r\\n`ck_assembly_extension` String,\\r\\n`bytes_sent` Int64,\\r\\nINDEX timestamp_index `@timestamp` TYPE minmax GRANULARITY 8192\\r\\n)\\r\\nENGINE = MergeTree\\r\\nPARTITION BY (toYYYYMMDD(toDateTime(`@timestamp` / 1000, \'Asia/Shanghai\')), toHour(toDateTime(`@timestamp` / 1000, \'Asia/Shanghai\')))\\r\\nORDER BY (host, request_uri, intHash64(`@timestamp`))\\r\\nSAMPLE BY intHash64(`@timestamp`)\\r\\nSETTINGS in_memory_parts_enable_wal = 0, index_granularity = 8192\\r\\n```\\r\\n\\r\\nAlways place `host` at the first position in the ORDER BY clause, as most Nginx log queries require sorting based on the `host`.\\r\\n\\r\\n#### CKibana Configuration\\r\\n```\\r\\n{\\r\\n\\t\\"Proxy\\": {\\r\\n\\t\\t\\"ck\\": {\\r\\n\\t\\t\\t\\"url\\": \\"ip:6321\\",\\r\\n\\t\\t\\t\\"user\\": \\"user\\",\\r\\n\\t\\t\\t\\"pass\\": \\"pass\\",\\r\\n\\t\\t\\t\\"defaultCkDatabase\\": \\"db\\"\\r\\n\\t\\t},\\r\\n\\t\\t\\"es\\": {\\r\\n\\t\\t\\t\\"host\\": \\"ip:31940\\"\\r\\n\\t\\t},\\r\\n\\t\\t\\"roundAbleMinPeriod\\": 120000,\\r\\n\\t\\t\\"round\\": 20000,\\r\\n\\t\\t\\"maxTimeRange\\": 86400000,\\r\\n\\t\\t\\"blackIndexList\\": null,\\r\\n\\t\\t\\"whiteIndexList\\": [\\"ops_bjtlblog_all\\", \\"other_index_all\\"],\\r\\n\\t\\t\\"enableMonitoring\\": true\\r\\n\\t},\\r\\n\\t\\"query\\": {\\r\\n\\t\\t\\"sampleIndexPatterns\\": [\\"ops_bjtlblog_all\\"],\\r\\n\\t\\t\\"sampleCountMaxThreshold\\": 5000000,\\r\\n\\t\\t\\"useCache\\": true,\\r\\n\\t\\t\\"maxResultRow\\": 30000\\r\\n\\t},\\r\\n\\t\\"threadPool\\": {\\r\\n\\t\\t\\"msearchProperty\\": {\\r\\n\\t\\t\\t\\"coreSize\\": 4,\\r\\n\\t\\t\\t\\"queueSize\\": 10000\\r\\n\\t\\t},\\r\\n\\t\\t\\"commonProperty\\": {\\r\\n\\t\\t\\t\\"coreSize\\": 4,\\r\\n\\t\\t\\t\\"queueSize\\": 10000\\r\\n\\t\\t}\\r\\n\\t},\\r\\n\\t\\"defaultShard\\": 2\\r\\n}\\r\\n```\\r\\n\\r\\n#### Use Cases\\r\\n![Untitled](https://oss.17usoft.com/infra-github/ckibana12.png)\\r\\n\\r\\n![Untitled](https://oss.17usoft.com/infra-github/ckibana13.png)\\r\\n\\r\\n## 4 Benefits\\r\\n\\r\\nAs of now, by leveraging CKibana\'s core capabilities, we have successfully completed the full migration of all Nginx access logs and business-customized logs from Elasticsearch to Clickhouse, reducing our storage costs to below 30% of the original. Moreover, thanks to ClickHouse\'s distributed table capabilities, log queries remain unaffected even in the event of a single center failure, offering significant improvements over Elasticsearch in both cost and stability. We have also continued to use the flexible and powerful native Kibana as our visualization tool, allowing users to conveniently perform log queries and analyses using their familiar Kibana dashboard.\\r\\n\\r\\n## 5 Finally\\r\\n\\r\\nThroughout the continuous evolution of our logging system, we could not have progressed without the support of many outstanding open-source projects. We are now officially open-sourcing CKibana (ClickHouse Proxy for Kibana & Clickhouse visualization tool), hoping to help more people. We also look forward to collaborating with the community to continuously enhance its functions and features, fully unleashing the power of the Kibana visualization + ClickHouse storage combination in log scenarios, making it smoother for everyone to use. \\r\\n\\r\\nGithub Repo: https://github.com/TongchengOpenSource/ckibana/\\r\\n\\r\\nWe welcome you to go to our GitHub and give us a star, as well as provide feedback and suggestions. Of course, issues and PRs are always welcomed.\\r\\n\\r\\nThanks!"}]}')}}]);