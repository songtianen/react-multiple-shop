import Axios from 'axios';
import actionsTypes from './actionTypes';
import '../../../mock/getHeaderData';

export const changeTab = (obj) => (dispatch) => {
  dispatch({ type: actionsTypes.CHANEG_TAB, obj });
};
// eslint-disable-next-line no-unused-vars
export const getFilterData = (obj) => async (dispatch) => {
  let data = await Axios.get('/getfilterdata');

  console.log('filterData', data);
  dispatch({
    type: actionsTypes.FILTER_DATA,
    obj,
    filterData: data.data.data,
  });
};
