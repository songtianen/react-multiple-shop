import React from 'react';
import { connect } from 'react-redux';
import ScrollView from 'component/ScrollView/ScrollView';
import ListItem from './ListItem/ListItem';
import { contentListData } from '../../redux/actions/contentList_action';
import './ContentList.scss';
/**
 * @constructor<ContentList/>
 * @description 列表
 */

class ContentList extends React.PureComponent {
  state = {
    // 标识页面是否可以滚动
    isend: false,
  };

  page = 0;

  fetchData = (data) => {
    this.props.dispatch(contentListData(data));
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

  renderItem() {
    let items = this.props.items;

    return items.map((item, index) => {
      return <ListItem key={index} itemData={item} />;
    });
  }

  componentDidMount() {
    this.fetchData(this.page);
  }

  render() {
    return (
      <div className='list-content'>
        <h5 className='list-title'>
          <span className='title-line' />
          <span>附近商家</span>
          <span className='title-line' />
        </h5>
        <ScrollView loadCallback={this.onloadPage} isend={this.state.isend}>
          {this.renderItem()}
        </ScrollView>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    items: state.contentList.items,
  };
};
export default connect(mapStateToProps)(ContentList);
