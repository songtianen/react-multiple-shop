import React from 'react';
import './Order.scss';
import { connect } from 'react-redux';
import { orderAction } from '../../redux/actions/order_action';
import OrderListItem from './ListItem/ListItem';
import ScrollView from '../../../../component/ScrollView/ScrollView';

class Order extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isend: false,
    };
    this.fetchData(this.page);
  }

  page = 0;

  fetchData = (page) => {
    this.props.dispatch(orderAction(page));
  };

  onloadPage = () => {
    this.page++;
    if (this.page > 3) {
      this.setState({
        isend: true,
      });
      return;
    }
    this.fetchData(this.page);
  };

  renderOrderlist() {
    let list = this.props.list;
    return list.map((item, index) => {
      return <OrderListItem itemData={item} key={index} />;
    });
  }

  render() {
    return (
      <div className='order'>
        <div className='header'>订单</div>
        <ScrollView loadCallback={this.onloadPage} isend={this.state.isend}>
          <div className='orderList'>{this.renderOrderlist()}</div>
        </ScrollView>
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
