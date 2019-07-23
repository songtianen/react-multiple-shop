import React from 'react';
import { connect } from 'react-redux';
import { categoryData } from '../../redux/actions/category_action';

import './Category.scss';
/**
 * @constructor<Category/>
 * @description 种类
 */
class Category extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(categoryData());
  }

  renderItem() {
    let items = this.props.items;
    items = items.splice(0, 8);
    return items.map((item, index) => {
      return (
        <div key={index} className='category-item'>
          <img className='item-icon' src={item.url} alt='' />
          <p className='item-name'>{item.name}</p>
        </div>
      );
    });
  }

  render() {
    return <div className='category-content clearfix'>{this.renderItem()}</div>;
  }
}
const mapStateToProps = (state) => {
  return {
    items: state.category.items,
  };
};
export default connect(mapStateToProps)(Category);
