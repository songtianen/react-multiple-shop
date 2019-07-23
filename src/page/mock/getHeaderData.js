import Mock from 'mockjs';

// Mock.setup({
//   timeout: '400',
// });
export default Mock.mock(
  '/getfilterdata',
  'get',
  require('../json/filter.json'),
);
