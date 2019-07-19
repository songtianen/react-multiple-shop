import { combineReducers } from 'redux';

import main from './main_redux';

// reducer 的入口文件
const rootReducer = combineReducers({
  [main.constants.NAME]: main.reducers.mainReducer,
});
export default rootReducer;
