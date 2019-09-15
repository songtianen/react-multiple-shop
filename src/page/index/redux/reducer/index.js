import { combineReducers } from 'redux';

import main from './main_reducer';

// reducer 的入口文件
const rootReducer = combineReducers({
  main,
});
export default rootReducer;
