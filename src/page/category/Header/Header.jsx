import React from 'react';
import { connect } from 'react-redux';
import { changeTab, getFilterData } from '../redux/actions/tab_action';
import { TABKEY } from '../config';
import './Header.scss';

class Header extends React.PureComponent {
  constructor(props) {
    super(props);
    this.fetchData();
  }

  componentDidMount() {
    console.log(this.props);
  }

  changeTab = (key) => {
    console.log('key---', key);
    this.props.dispatch(changeTab({ activeKey: key }));
  };

  fetchData = () => {
    this.props.dispatch(getFilterData());
  };

  // 渲染过滤面板
  renderFilter = () => {
    let tabs = this.props.tabs;
    let arr = [];
    for (let key in tabs) {
      let item = tabs[key];
      let cls = `${item.key}-panel`;
      if (item.key === this.props.activeKey) {
        cls += ' current';
      }
      if (item.key === TABKEY.cate) {
        arr.push(
          <ul key={item.key} className={cls}>
            {this.renderCateContent()}
          </ul>,
        );
      } else if (item.key === TABKEY.type) {
        arr.push(
          <ul key={item.key} className={cls}>
            {/* {this.renderTypeContent()} */}
          </ul>,
        );
      } else if (item.key === TABKEY.filter) {
        arr.push(
          <ul key={item.key} className={cls}>
            {/* {this.renderFilterContent()} */}
          </ul>,
        );
      }
    }

    return arr;
  };

  // 渲染cate列表
  renderCateContent = () => {
    let cate = this.props.filterData.category_filter_list || [];
    return cate.map((item, index) => {
      return (
        <li key={index} className='cate-item'>
          <div className='item-title'>
            {item.title}
            <span className='item-count'>{item.quantity}</span>
            <div className='item-content'>
              {this.renderCateInnerContent(item)}
            </div>
          </div>
        </li>
      );
    });
  };

  // 渲染cate列表中的content
  renderCateInnerContent = (items) => {
    console.log(items);
    // console.log('cate-----', item);
    let arr = items.sub_category_list.map((it, index) => {
      let cls = it.active ? 'cate-box-inner active' : 'cate';
      return (
        <div key={index} className='cate-box'>
          {it.name}
          <div className={cls}>{`${it.name}${it.quantity}`}</div>
        </div>
      );
    });
    return arr;
  };

  // 渲染顶部默认tab
  renderTabs = () => {
    let tab = this.props.tabs;
    let arr = [];
    for (let key in tab) {
      let item = tab[key];
      let cls = `${item.key} item`;
      if (item.key === this.props.activeKey) {
        cls += ' current';
      }
      arr.push(
        <div
          className={cls}
          key={item.key}
          onClick={() => this.changeTab(item.key)}
        >
          {item.text}
        </div>,
      );
    }
    return arr;
  };

  render() {
    return (
      <div className='header'>
        <div className='header-top'>{this.renderTabs()}</div>
        <div className='panel'>
          <div className='panel-inner'>{this.renderFilter()}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('state>>', state);
  return {
    tabs: state.tab.tabs,
    activeKey: state.tab.activeKey,
    filterData: state.tab.filterData,
  };
};
export default connect(mapStateToProps)(Header);
