import actionsTypes from './actionTypes';

const add = (data) => {
  return { type: actionsTypes.ADD, data };
};
export default {
  add,
};
