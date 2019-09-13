/* eslint-disable handle-callback-err */
const express = require('express');
const jwt = require('jsonwebtoken');
// const { UserModel } = require('../model/model'); // 引入模型
const { secretKey } = require('../util/md5');
const { success } = require('../lib/responseTemplate');
const { PermissionCheck } = require('../middleware/PermissionCheck');

const {
  // getUserInfo,
  getUserPagelist,
  postEditRoleuser,
  getAllUser,
} = require('../controllers/user');

// const User = UserModel;
const router = express.Router();

// 获取用户列表

// 用户登录接口
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  console.log('用户名，密码', username, password);
  const tokenObj = {
    username: username,
    // isAdmin: user.isAdmin,
    // userId: user._id,
  };
  // 用户登录成功过后生成token返给前端
  let token = jwt.sign(tokenObj, secretKey, {
    expiresIn: '24h', // 授权时效24小时
  });
  return success({ res, data: { accessToken: token } });
});

// 用户注册接口
router.get('/info', (req, res) => {
  console.log('getuserinfo user=====', req.user);
  // getUserInfo({ req, res });
});
router.get('/pagedlist', (req, res) => {
  getUserPagelist({ req, res });
});
router.post(
  '/editroleuser',
  PermissionCheck({
    permission: ['role_user_edit', 'user_role_edit'],
  }),
  (req, res) => {
    postEditRoleuser({ req, res });
  },
);
router.post(
  '/getalluser',
  PermissionCheck({
    permission: ['role_user_edit', 'user_role_edit'],
  }),
  (req, res) => {
    getAllUser({ req, res });
  },
);

module.exports = router;
