import gateAction from '../actions/gateActions';

export default function category(state, action) {
  if (!state) {
    state = {
      items: [],
    };
  }
  // console.log('action----', action);
  switch (action.type) {
    case gateAction.types.CATEGORY_DATA:
      return {
        ...state,
        items: action.data.primary_filter,
      };
    default:
      return state;
  }
}
