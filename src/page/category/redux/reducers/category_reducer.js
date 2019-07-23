import actionsType from '../actions/actionTypes';

export default function category(state, action) {
  if (!state) {
    state = {
      items: [],
    };
  }
  // console.log('action----', action);
  switch (action.type) {
    case actionsType.CATEGORY_DATA:
      return {
        ...state,
        items: action.data.primary_filter,
      };
    default:
      return state;
  }
}
