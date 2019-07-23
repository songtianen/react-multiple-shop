/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import actionsType from '../actions/actionTypes';

export default (state, action) => {
  if (!state) {
    state = {
      list: [],
    };
  }
  const getorderData = (state, action) => {
    // console.log('getorderData,', action.data);
    if (action.currentPage === 0) {
      return {
        ...state,
        list: action.data.digestlist,
      };
    }
    let list = state.list;
    return {
      ...state,
      list: list.concat(action.data.digestlist),
    };
  };
  switch (action.type) {
    case actionsType.ORDER_DATA:
      return getorderData(state, action);

    default:
      return state;
  }
};
