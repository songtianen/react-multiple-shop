import Axios from 'axios';
import actionType from './actionTypes';
import '../../../mock/orderData';

export const orderAction = (page) => (dispath) => {
  Axios.get('/getorderdata')
    .then((res) => {
      console.log('Axios > res--/', res);
      dispath({
        type: actionType.ORDER_DATA,
        currentPage: page,
        data: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
