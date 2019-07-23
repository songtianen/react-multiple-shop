import Axios from 'axios';
import actions from './actionTypes';
import '../../../mock/data2';

export const categoryData = () => (dispath) => {
  Axios.get('/postdata1')
    .then((res) => {
      // console.log('res', res);
      dispath({
        type: actions.CATEGORY_DATA,
        data: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
