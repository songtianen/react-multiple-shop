import Mock from 'mockjs';

export default Mock.mock(
  '/getlistdata',
  'get',
  require('../json/listparams.json'),
);
