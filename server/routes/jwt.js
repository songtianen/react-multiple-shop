const expressJwt = require('express-jwt');
const { secretKey } = require('../util/md5');

const jwtAuth = expressJwt({
  secret: secretKey,
  credentialsRequired: false, // 设置为false就不进行校验了，游客也可以访问
}).unless({
  path: ['/api/user/login', '/api/user/register'],
});

module.exports = jwtAuth;
