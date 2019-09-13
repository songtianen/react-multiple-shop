import Axios from 'axios';
import actionsTypes from './actionTypes';

export const fetchContentListData = (obj) => async (dispatch, getState) => {
  let url = '/fetch_content_list';
  if (obj.filterData || getState().category_contentList.filterData) {
    url = '/fetch_content_list';
  }
  let res = await Axios.get(url);
  console.log('filterData', res);
  dispatch({
    type: actionsTypes.CONTENTLIST_DATA,
    page: obj.page,
    filterData: obj.filterData,
    toFirstPage: obj.toFirstPage,
    data: res.data.data,
  });
};
