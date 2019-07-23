import { combineReducers } from 'redux';

import category from './index_redux';

// reducer 的入口文件
const rootReducer = combineReducers({
  [category.constants.TAB]: category.reducers.tabReducer,
});
export default rootReducer;
