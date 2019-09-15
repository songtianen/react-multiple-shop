import actionType from '../actions/actionTypes';
import { TABKEY } from '../../config';

export default function main(state, action) {
  if (!state) {
    state = {
      tabs: [
        {
          name: '首页',
          key: TABKEY.home,
        },
        {
          name: '订单',
          key: TABKEY.order,
        },
        {
          name: '我的',
          key: TABKEY.mine,
        },
      ],
      // 当前激活态
      activeKey: TABKEY.mine,
    };
  }
  switch (action.type) {
    case actionType.CHANEG_TAB:
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
}
