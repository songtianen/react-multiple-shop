import React from 'react';

import './ListItem.scss';
/**
 * @description 列表单个组件
 * @constructor <OrderListItem />
 */
class OrderListItem extends React.PureComponent {
  // 渲染每个菜品的总计
  renderTotalPrice = (item, data, index) => {
    return (
      <div className='product-item' key={index}>
        <span>...</span>
        <div className='p-total-count'>
          总计 {item.product_count}
          <span className='total-price'>¥ {data.total}</span>
        </div>
      </div>
    );
  };

  // 渲染具体菜品
  renderProduct = (data) => {
    let list = data.product_list;
    list.push({ type: 'more' });
    return list.map((item, index) => {
      if (item.type === 'more') {
        return this.renderTotalPrice(item, data, index);
      }
      return (
        <div className='product-item' key={index}>
          {item.product_name}
          <div className='p-count'>x{item.product_count}</div>
        </div>
      );
    });
  };

  // 渲染评价按钮
  renderComment = (data) => {
    let evaluation = !data.is_comment;
    if (evaluation) {
      return (
        <div className='evaluation clearfix'>
          <div className='evaluation-btn'>评价</div>
        </div>
      );
    }
    return null;
  };

  render() {
    let data = this.props.itemData;
    return (
      <div className='order-item'>
        <div className='order-item-inner'>
          <img className='item-img' src={data.poi_pic} alt='pic' />
          <div className='item-right'>
            <div className='item-top'>
              <p className='order-name one-line'>{data.poi_name}</p>
              <div className='arrow' />
              <div className='order-state'>{data.status_description}</div>
            </div>
            <div className='item-bottom'>{this.renderProduct(data)}</div>
          </div>
        </div>
        {this.renderComment(data)}
      </div>
    );
  }
}
export default OrderListItem;
