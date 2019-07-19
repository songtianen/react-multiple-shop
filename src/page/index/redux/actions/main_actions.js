import actionsTypes from './actionTypes';

const changeTab = (data) => {
  return { type: actionsTypes.CHANEG_TAB, data };
};
export default {
  changeTab,
};
