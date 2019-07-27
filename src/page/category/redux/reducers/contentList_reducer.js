import actionTypes from '../actions/actionTypes';

export default (state, action) => {
  if (!state) {
    state = {
      items: [],
      filterData: [],
      page: 0,
      isend: false,
    };
  }
  const contentListData = (state, action) => {
    let _listData = [];
    let _filterData = action.filterData || state.filterData;

    let _page = action.toFirstPage ? 0 : state.page;

    let _isend = false;

    if (_page === 0) {
      _listData = action.data.poilist;
    } else {
      _listData.concat(action.data.poilist);
    }
    _page += 1;
    if (_page > 3) {
      _isend = true;
    }

    return {
      ...state,
      items: _listData,
      filterData: _filterData,
      page: _page,
      isend: _isend,
    };
  };
  switch (action.type) {
    case actionTypes.CONTENTLIST_DATA:
      return contentListData(state, action);
    default:
      return state;
  }
};
