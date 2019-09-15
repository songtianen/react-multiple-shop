import React from 'react';
import './Order.scss';
import { connect } from 'react-redux';

class Order extends React.PureComponent {
  render() {
    return (
      <div className='order'>
        <div className='header'>订单</div>
      </div>
    );
  }
}

const mapStateToprops = (state) => {
  console.log(state);
  return {
    list: state.order.list,
  };
};

export default connect(mapStateToprops)(Order);
