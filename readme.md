# Bilibili-API-JS

## 简述
包含部分B站API及其返回值的类型定义。
## 安装
```npm i github:KotoriK/bilibili-api-js```
## 用法
```ts
import { getDanmuInfo, GetDanmuInfo_Data } from "bilibili-api-js/live"
import { RequestExecuter } from "bilibili-api-js"
import got from 'got' //举例子而已，实际上拿哪个库应该都行

const performRequest: RequestExcuter = ({ url, options }) => got(url, options).then((resp) => JSON.parse(resp.body))
const { data: { host_list, token } } = performRequest(getDanmuInfo(6655))
```
## 开源协议
```MIT```