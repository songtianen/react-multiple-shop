const express = require('express');
const path = require('path');
const bodyParser = require('body-parser'); // 转化 请求body 为 json格式的数据
const router = require('./routes/index.js');
const expressStaticGzip = require('express-static-gzip');

// -------
const isEnv = process.env.NODE_ENV;
console.log('环境变量', isEnv);
let app = express();

// app.all('*', function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers', 'X-Requested-With');
//   res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
//   res.header('X-Powered-By', ' 3.2.1');
//   res.header('Content-Type', 'application/json;charset=utf-8');
//   next();
// });

app.use(bodyParser.json()); // 请求体 json格式的数据转换成 req.body 格式的数据
app.use(bodyParser.urlencoded({ extended: false })); // form data 格式转换 req.body 格式
if (isEnv === 'production') {
  // app.use('/public/', express.static(path.join(__dirname, '../dist'))); // 静态文件指定对应的请求返回
  app.use('/public/', expressStaticGzip(path.join(__dirname, '../dist')));
  app.use('/api', router);
  app.get('*', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
    // next();
  });
}

if (isEnv === 'development') {
  const devStatic = require('./util/dev-static');
  devStatic(app);
}
// 处理express 抛出错误 的中间件
app.use((error, req, res, next) => {
  // eslint-disable-line
  console.log(error);
  res.status(500).send(error);
});
let host = process.env.HOST || '0.0.0.0'; // eslint-disable-line
let port = process.env.PORT || 2223; // eslint-disable-line
// pm2 start process.yml --env production // eslint-disable-line
app.listen(port, host, () => {
  console.log('server is listening ', port);
});
