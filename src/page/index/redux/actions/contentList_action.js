import Axios from 'axios';
import actions from './actionTypes';
import '../../../mock/contentListData';

export const contentListData = (page) => (dispath) => {
  Axios.get('/getlistdata')
    .then((res) => {
      // console.log('res--/', res);
      dispath({
        type: actions.LIST_DATA,
        currentPage: page,
        data: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
