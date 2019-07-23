/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import actionsType from '../actions/actionTypes';

export default (state, action) => {
  if (!state) {
    state = {
      items: [],
    };
  }
  const getListData = (state, action) => {
    // console.log('action.data.poilist,', action.data.poilist);
    if (action.currentPage === 0) {
      return {
        ...state,
        items: action.data.poilist,
      };
    }
    let items = state.items;
    return {
      ...state,
      items: items.concat(action.data.poilist),
    };
  };
  switch (action.type) {
    case actionsType.LIST_DATA:
      return getListData(state, action);

    default:
      return state;
  }
};
