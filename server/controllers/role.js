// // 角色
// const roleService = require('../services/roleService');
// // import menuService from '../services/memuService';
// // import functionService from '../services/functionService';
// const responseTemplate = require('../lib/responseTemplate');

// module.exports = {
//   getRolePagedList: async ({ req, res }) => {
//     console.log('获取用户列表', req.query);
//     let pageIndex = req.query.pageIndex;
//     let pageSize = req.query.pageSize;
//     let sortBy = req.query.sortBy;
//     let descending = req.query.descending;
//     let filter = JSON.parse(req.query.filter);
//     let pagedList = await roleService.getRolePagedList(
//       pageIndex,
//       pageSize,
//       sortBy,
//       descending,
//       filter,
//     );
//     // console.log('请求角色', pagedList);
//     responseTemplate.success({ res, data: pagedList });
//   },
//   saveRole: ({ req, res }) => {
//     let func = req.body;
//     console.log('编辑角色', func);
//     if (func.name === '') {
//       return responseTemplate.businessError(res, '名称不能为空!');
//     }
//     if (func.code === '') {
//       return responseTemplate.businessError(res, '编码不能为空!');
//     }
//     roleService
//       .saveRole(func)
//       .then((result) => {
//         // console.log('角色保存', result);

//         if (!result.success) {
//           return responseTemplate.businessError(res, result.msg);
//         } else {
//           return responseTemplate.success({
//             res,
//             data: '',
//             msg: '数据库保存成功!!!',
//           });
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//         return responseTemplate.businessError(res, '数据库保存失败');
//       });
//   },

//   delRole: async ({ req, res }) => {
//     let id = req.body.id;
//     await roleService.delRole(id);
//     return responseTemplate.success({ res, msg: '删除成功' });
//   },

//   delRoles: async ({ req, res }) => {
//     let ids = JSON.parse(req.body.ids);
//     for (let id of ids) {
//       await roleService.delRole(id);
//     }
//     return responseTemplate.success({ res, msg: '多条删除成功' });
//   },
//   savePermission: async ({ req, res }) => {
//     let { moduleId, roleId, permissions } = req.body;
//     let db = await roleService.savePermission(moduleId, roleId, permissions);
//     if (db) {
//       return responseTemplate.success({ res, msg: '角色权限保存成功' });
//     }
//     responseTemplate.businessError(res, '数据库保存失败!');
//   },
// };
