import actionType from '../actions/actionTypes';
import { TABKEY } from '../../config';

let tabs = {};
tabs[TABKEY.cate] = {
  key: TABKEY.cate,
  text: '全部分类',
  obj: {},
};
tabs[TABKEY.type] = {
  key: TABKEY.type,
  text: '综合排序',
  obj: {},
};
tabs[TABKEY.filter] = {
  key: TABKEY.filter,
  text: '筛选',
  obj: {},
};

export default (state, action) => {
  // console.log('///', action);
  if (!state) {
    state = {
      tabs,
      activeKey: TABKEY.cate,
      filterData: {},
    };
  }
  const changeTab = (state, action) => {
    return {
      ...state,
      activeKey: action.obj.activeKey,
    };
  };
  const filterData = (state, action) => {
    console.log('action--', action);
    return {
      ...state,
      filterData: action.filterData,
    };
  };
  switch (action.type) {
    case actionType.CHANEG_TAB:
      return changeTab(state, action);
    case actionType.FILTER_DATA:
      return filterData(state, action);
    default:
      return state;
  }
};
