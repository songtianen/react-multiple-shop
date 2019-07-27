import Mock from 'mockjs';

Mock.setup({
  timeout: '400',
});

export default Mock.mock(
  '/fetch_home_list',
  'get',
  require('../json/listparams.json'),
);
