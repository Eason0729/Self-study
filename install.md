# 安裝教學

## 安裝node.js

至[node.js網站](https://nodejs.org/zh-tw/download)下載，
需要包含**Node Package Manager**以及**node js版本大於15.0.0**

## 安裝node.js modules

```batch
npm install
```
## 補上缺少的sconfig.json

範例:
```json
{
  "init": {
    "mongodb": {
      "uri": "mongodb+srv://<username>:<password>@cluster0.meejr.mongodb.net/........."
    }
  },
  "unstable": { "roomlist": ["room1"] }
}
```

## 初始化資料庫

因為要降低mongodb的權限需求，所以初始化要手動

|-/chat2<br>
|-----/auth<br>
```json
{"name":"name","encoded_password":"password","right":2}
```
|-----/chat2<br>
```json
{"type":"var","next_id":0}
```

## 執行

```batch
node server.js
```

至(localhost:8080/index.html)[http://localhost:8080/index.html]看