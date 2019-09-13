import Axios from 'axios';
import actionsTypes from './actionTypes';

export const changeTab = (obj) => (dispatch) => {
  // console.log('changeTab');
  dispatch({ type: actionsTypes.CHANGE_TAB, obj });
};
// eslint-disable-next-line no-unused-vars
export const getFilterData = (obj) => async (dispatch) => {
  let data = await Axios.get('/getfilterdata');
  // console.log('filterData', data);
  dispatch({
    type: actionsTypes.FILTER_DATA,
    obj,
    filterData: data.data.data,
  });
};
export const changeFilter = (obj) => (dispatch) => {
  dispatch({
    type: actionsTypes.CHANGE_FILTER,
    obj,
  });
  dispatch({
    type: actionsTypes.CHANGE_TAB,
    obj: {
      closePanel: true,
    },
  });
};
