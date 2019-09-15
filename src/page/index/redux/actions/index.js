import actions from './actionTypes';

export const changeTab = (data) => {
  return {
    type: actions.CHANEG_TAB,
    data,
  };
};
