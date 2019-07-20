import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import actions from '../../redux/actions/gateActions';
import '../../../mock/data2';

import './Category.scss';
/**
 * @constructor<Category/>
 * @description 种类
 */
const { categoryData } = actions.categoryActions;
class Category extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  getcategoryData = () => {
    axios
      .get('/postdata1')
      .then((res) => {
        this.props.dispatch(categoryData(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getcategoryData();
  }

  renderItem() {
    let items = this.props.items;
    return items.map((item, index) => {
      return <div key={index}>{item.name}</div>;
    });
  }

  render() {
    return <div>{this.renderItem()}</div>;
  }
}
const mapStateToProps = (state) => {
  return {
    items: state.category.items,
  };
};
export default connect(mapStateToProps)(Category);
