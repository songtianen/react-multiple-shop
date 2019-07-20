import gateAction from '../actions/gateActions';
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
      activeKey: TABKEY.home,
    };
  }
  switch (action.type) {
    case gateAction.types.CHANEG_TAB:
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
}
