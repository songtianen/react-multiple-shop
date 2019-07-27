import React from 'react';
import { connect } from 'react-redux';
import ScrollView from 'component/ScrollView/ScrollView';
import ListItem from 'component/ListItem/ListItem';
import { fetchContentListData } from '../redux/actions/contentList_action';
import './ContentList.scss';
/**
 * @constructor<ContentList/>
 * @description 列表
 */

class ContentList extends React.PureComponent {
  fetchData = (data) => {
    this.props.dispatch(fetchContentListData(data));
  };

  onloadPage = () => {
    if (this.props.page < 3) {
      this.fetchData({});
    }
  };

  renderItem() {
    let items = this.props.items;
    return items.map((item, index) => {
      return <ListItem key={index} itemData={item} />;
    });
  }

  componentDidMount() {
    this.fetchData({});
  }

  render() {
    return (
      <div className='list-content'>
        <ScrollView loadCallback={this.onloadPage} isend={this.props.isend}>
          {this.renderItem()}
        </ScrollView>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log('contentList', state);
  return {
    items: state.category_contentList.items,
    page: state.category_contentList.page,
    isend: state.category_contentList.isend,
  };
};
export default connect(mapStateToProps)(ContentList);
