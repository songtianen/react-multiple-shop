// const proxy = require('http-proxy-middleware')
const router = require('../routes/index.js');
// const session = require('express-session')
module.exports = (app) => {
  app.use('/', router);
};
