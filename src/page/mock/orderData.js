// 使用 Mock
import Mock from 'mockjs';

Mock.setup({
  timeout: '400',
});

export default Mock.mock(
  '/getorderdata',
  'get',
  require('../json/orders.json'),
);
