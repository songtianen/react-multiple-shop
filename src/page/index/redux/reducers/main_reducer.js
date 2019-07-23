import actionType from '../actions/actionTypes';
import { TABKEY } from '../../config';

export default function main(state, action) {
  // console.log('///', action);
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
