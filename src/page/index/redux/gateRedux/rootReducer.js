import { combineReducers } from 'redux';

import index from './index_redux';

// reducer 的入口文件
const rootReducer = combineReducers({
  [index.constants.NAME]: index.reducers.mainReducer,
  [index.constants.CATEGORY_DATA]: index.reducers.categoryReducer,
});
export default rootReducer;
