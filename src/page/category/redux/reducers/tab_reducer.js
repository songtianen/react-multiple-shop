import { TABKEY } from '../../config';
import actionTypes from '../actions/actionTypes';

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
      closePanel: true,
    };
  }
  const changeTab = (state, action) => {
    return {
      ...state,
      activeKey: action.obj.activeKey,
      closePanel: action.obj.closePanel,
    };
  };
  const filterData = (state, action) => {
    // console.log('action--', action);
    return {
      ...state,
      filterData: action.filterData,
    };
  };
  const changeFilters = (state, action) => {
    console.log('>>>>>>', action.obj.item);

    // 拷贝此方法不能用做有function的对象
    let _tabs = JSON.parse(JSON.stringify(state.tabs));
    _tabs[action.obj.key] = {
      key: action.obj.key,
      text: action.obj.item.name,
      obj: action.obj.item,
    };
    return {
      ...state,
      tabs: _tabs,
    };
  };
  switch (action.type) {
    case actionTypes.CHANGE_TAB:
      return changeTab(state, action);
    case actionTypes.FILTER_DATA:
      return filterData(state, action);
    case actionTypes.CHANGE_FILTER:
      return changeFilters(state, action);
    default:
      return state;
  }
};
