---
sidebar_position: 3
---

# api-docs

## application文件

该文件是一些基本配置，端口、日志等，核心的就是metadata-config参数了。

| 参数名                     | 类型         | 说明                   |
|-------------------------|------------|----------------------|
| metadata-config  | object     | ES元数据集群              |
| hosts | String     | ES元数据集群host          |
| headers | String | ES元数据集群user、pass校验信息 |
```
例子：
metadata-config:
  hosts: your es metadata cluster hosts
  headers:
    Authorization: 'username password'
```


## 建表详解

### 建表说明

建表语句中的字段，时间字段是必需，如表中的@timestamp字段，作为在kibana创建index pattern时的时间选项，其它字段根据本身业务查询条件按需添加。

下面是一个建表语句的例子
```
create database ckibana;
use ckibana;

CREATE TABLE ckibana.table_local
(
    `request_method` LowCardinality(String),
    `request_time` Float64,
    `http_host` String,
    `@timestamp` UInt64,
    `ck_assembly_extension` String,
    INDEX timestamp_index `@timestamp` TYPE minmax GRANULARITY 8192
)
ENGINE = MergeTree
PARTITION BY (toYYYYMMDD(toDateTime(`@timestamp` / 1000, 'Asia/Shanghai')), toHour(toDateTime(`@timestamp` / 1000, 'Asia/Shanghai')))
ORDER BY (`http_host`)
SETTINGS in_memory_parts_enable_wal = 0, index_granularity = 8192;

CREATE TABLE IF NOT EXISTS ckibana.table_all AS ckibana.table_local ENGINE Distributed('clickhouse_cluster', ckibana, table_local, rand());
```

当要使用采样功能时，需要在建表语句中修改`ORDER BY、SAMPLE BY`语句，更详细可以参考[clickhouse官方说明](https://clickhouse.com/docs/en/sql-reference/statements/select/sample) 。

说明：采样字段可以是自己定义的字段，但是字段必须设置为UInt64类型，推荐还是使用@timestamp字段作为采样字段，不用额外创建字段
```
create database ckibana;
use ckibana;

CREATE TABLE ckibana.table_local
(
    `request_method` LowCardinality(String),
    `request_time` Float64,
    `http_host` String,
    `@timestamp` UInt64,
    `ck_assembly_extension` String,
    INDEX timestamp_index `@timestamp` TYPE minmax GRANULARITY 8192
)
ENGINE = MergeTree
PARTITION BY (toYYYYMMDD(toDateTime(`@timestamp` / 1000, 'Asia/Shanghai')), toHour(toDateTime(`@timestamp` / 1000, 'Asia/Shanghai')))
ORDER BY (`http_host`, intHash64(`@timestamp`))
SAMPLE BY intHash64(`@timestamp`)
SETTINGS in_memory_parts_enable_wal = 0, index_granularity = 8192;

CREATE TABLE IF NOT EXISTS ckibana.table_all AS ckibana.table_local ENGINE Distributed('clickhouse_cluster', ckibana, table_local, rand());
```

### es的类型 跟 ck的类型的mapping
| es类型     | ck类型    |
|----------|---------|
| keyword  | String  |
| text     | String  |
| ip       | String(代理自动识别ipv4和ipv6)  |
| integer  | Int32  |
| long     | Int64   |
| float    | Float32 |
| double   | Float64 |



## 相关系统索引

### proxy-settings
默认该索引名为proxy-settings，如您使用一个元数据集群来管理多个kibana proxy，可以利用application.yml的`metadata-config.settingsSuffix`属性。

例如：`metadata-config.settingsSuffix: dev`，那么代理配置的索引名则为：
`proxy-settings-dev`

#### 参数详解

| 参数名                           | 类型      | 是否必须 | 说明                                                                  |
|-------------------------------|---------|------|---------------------------------------------------------------------|
| query.sampleIndexPatterns     | Array   | 否    | 需要开启采样的索引，匹配方式按照前缀匹配，注意如果需要使用采样，则建表语句必须要支持 SAMPLE BY                |
| query.sampleCountMaxThreshold | Int     | 否    | 开启采样的阈值，一个msearch查询到的数据量超过这个阈值，才会开启采样。说明：当数据量比较大时，此值也需要配置稍大，图表才会更接近 |
| query.useCache                | Boolean | 否    | 默认关闭，是否启用缓存，将查询结果缓存进ES                                              |
| proxy.roundAbleMinPeriod      | Long    | 是    | 超过ROUND_ABLE_MIN_PERIOD 支持round.                                    |
| proxy.maxTimeRange            | Long    | 是    | 过长时间周期，默认1天.                                                        |
| proxy.blackIndexList          | Array   | 是    | 黑名单列表，按照前缀匹配，配置的索引不会走ck查询，而是直接查询es                                  |
| proxy.whiteIndexList          | Array   | 是    | 白名单列表，按照前缀匹配，配置的索引会通过ck去查询                                          |
| proxy.es                      | Object  | 否    | 该业务集群组es集群配置，不配置的话默认走使用metadata-config配置的ES                         |
| proxy.ck                      | Object  | 是    | 该业务集群组ck集群配置                                                        |
| proxy.enableMonitoring        | Boolean | 否    | 默认关闭，是否开启查询sql监控                                                    | |


更新ES元数据集群配置，ckibana提供如下接口

**1）更新CK配置**
```
curl --location --request POST 'localhost:8080/config/updateCk?url=ckUrl&user=default&pass=default&defaultCkDatabase=ops'
```

**2）更新ES配置**
```
curl --location --request POST 'localhost:8080/config/updateEs?host=esHost&headers=key:value,key2:value2'
```

**3）更新白名单索引**
```
curl --location --request POST 'localhost:8080/config/updateWhiteIndexList?list=index1,index2'
```

**4）更新黑名单索引**
```
curl --location --request POST 'localhost:8080/config/updateBlackIndexList?list=index1,index2'
```

**5）更新采样索引**
```
curl --location --request POST 'localhost:8080/config/updateSampleIndexList?list=index1,index2'
```

**6）更新sampleCountMaxThreshold**
```
curl --location --request POST 'localhost:8080/config/updateSampleCountMaxThreshold?sampleCountMaxThreshold=1500000'
```

**7）更新useCache**
```
curl --location --request POST 'localhost:8080/config/updateUseCache?useCache=true'
```

**8）更新roundAbleMinPeriod**
```
curl --location --request POST 'localhost:8080/config/updateRoundAbleMinPeriod?roundAbleMinPeriod=1200000'
```

**9）更新maxTimeRange**
```
curl --location --request POST 'localhost:8080/config/updateMaxTimeRange?maxTimeRange=864000000'
```

**10）更新enableMonitoring**
```
curl --location --request POST 'localhost:8080/config/updateEnableMonitoring?enableMonitoring=false'
```

**11）更新msearchThreadPoolCoreSize**
```
curl --location --request POST 'localhost:8080/config/updateMsearchThreadPoolCoreSize?msearchThreadPoolCoreSize=4'
```

**12）获取配置接口**
```
curl --location 'localhost:8080/config/all'
```

**13）全量更新配置接口**
```
curl --location 'localhost:8080/config/all' \
--header 'Content-Type: application/json' \
--data '{
    "query":{
        "sampleIndexPatterns":[
            "index1",
            "index2"
        ],
        "sampleCountMaxThreshold":"1500000",
        "useCache":false
    },
    "proxy":{
        "roundAbleMinPeriod":120000,
        "maxTimeRange":86400000,
        "enableMonitoring":true,
        "blackIndexList":[
            "index1",
            "index2"
        ],
        "whiteIndexList":[
            "index1",
            "index2"
        ],
        "es":{
            "host":"esHost
            "headers":[
                {
                    "Authorization":"yourEsClusterAuthorization"
                }
            ]
        },
        "ck":{
            "url":"ckUrl",
            "user":"default",
            "pass":"default",
            "defaultCkDatabase":"ops"
        }
    }
}'
```

### proxy-monitor
提供监控索引。可以通过配置打开。

可利用该索引进行kibana上的sql监控。


### proxy-black-list
索引查询sql黑名单。可以通过配置打开。

该索引可以通过kibana proxy直接操作：

#### 获取
```
curl --location 'http://localhost:8080/proxy/_black_list'
```


#### 新增
range: 查询间隔（毫秒）

sql: 去除时间范围的条件查询语句，可在monitor日志中获取到
```
curl --location 'http://localhost:8080/proxy/_black_list' \
--header 'Content-Type: application/json' \
--data-raw '{
    "range": "900000",
    "sql": "((`@timestamp` = 1698293120000))"
}'
```

#### 删除
```
curl --location --request DELETE 'http://localhost:8080/proxy/_black_list/{id}'
```


