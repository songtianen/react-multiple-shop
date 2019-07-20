import actions from './actionTypes';

export const categoryData = (data) => {
  return {
    type: actions.CATEGORY_DATA,
    ...data,
  };
};
