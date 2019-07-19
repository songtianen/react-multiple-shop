import getActions from '../actions/gateActions';

export default function app(state, action) {
  // console.log('///', action);
  if (!state) {
    state = { num: 0 };
  }
  switch (action.type) {
    case getActions.types.ADD:
      return {
        ...state,
        num: state.num + 1,
      };
    default:
      return state;
  }
}
