/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { connect } from 'react-redux';
import {
  changeTab,
  getFilterData,
  changeFilter,
} from '../redux/actions/tab_action';
import { fetchContentListData } from '../redux/actions/contentList_action';
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
    // console.log('key---', key);
    let closePanel = false;
    // 如果前后点击的是同一个tab，就关闭panel
    if (this.props.activeKey === key && !this.props.closePanel) {
      closePanel = true;
    }
    this.props.dispatch(changeTab({ activeKey: key, closePanel }));
  };

  fetchData = () => {
    this.props.dispatch(getFilterData());
  };

  // 变化点击的当前item的状态，同时发起filter的请求
  // eslint-disable-next-line no-unused-vars
  changeDoFilter = (item, key, dataList) => {
    this.revertActive(key, dataList);
    item.active = true;
    this.props.dispatch(
      changeFilter({
        item,
        key,
      }),
    );
    this.props.dispatch(
      fetchContentListData({
        // 当前点击状态所有内容
        filterData: item,
        toFirstPage: true,
      }),
    );
  };

  /**
   * 充值其他item的active状态
   */
  revertActive(key, dataList) {
    if (key === TABKEY.cate) {
      for (let i = 0; i < dataList.length; i++) {
        for (let j = 0; j < dataList[i].sub_category_list.length; j++) {
          dataList[i].sub_category_list[j].active = false;
        }
      }
    } else if (key === TABKEY.type) {
      for (let x = 0; x < dataList.length; x++) {
        dataList[x].active = false;
      }
    } else {
      for (let k = 0; k < dataList.length; k++) {
        for (let o = 0; o < dataList[k].items.length; o++) {
          dataList[k].items[o].active = false;
        }
      }
    }
  }

  // 渲染filter过滤面板
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
            {this.renderTypeContent()}
          </ul>,
        );
      } else if (item.key === TABKEY.filter) {
        arr.push(
          <ul key={item.key} className={cls}>
            {this.renderFilterContent()}
          </ul>,
        );
      }
    }

    return arr;
  };

  // 渲染filter分类列表
  renderFilterContent = () => {
    let filterList = this.props.filterData.activity_filter_list || [];
    return filterList.map((item, index) => {
      return (
        <li key={index} className='filter-item clearfix'>
          <p className='filter-title'>{item.group_title}</p>
          <div className='item-content '>
            {this.filterInnerContent(item.items, filterList)}
          </div>
        </li>
      );
    });
  };

  // 渲染全部分类filter内部分类列表
  filterInnerContent = (items, filterList) => {
    return items.map((item, index) => {
      let cls = item.icon ? 'cate-box-inner has-icon' : 'cate-box-inner';
      if (item.active) {
        cls += ' active';
      }
      return (
        <div
          key={index}
          onClick={() => this.changeDoFilter(item, TABKEY.filter, filterList)}
          className='cate-box'
        >
          <div className={cls}>
            {item.icon ? <img src={item.icon} alt='' /> : null}
            {item.name}
          </div>
        </div>
      );
    });
  };

  // 渲染cate列表(全部分类外类目)
  renderCateContent = () => {
    let cate = this.props.filterData.category_filter_list || [];
    return cate.map((item, index) => {
      return (
        <li key={index} className='cate-item'>
          <p className='item-title'>
            {item.name}
            <span className='item-count'>{item.quantity}</span>
          </p>
          <div className='item-content clearfix'>
            {this.renderCateInnerContent(item, cate)}
          </div>
        </li>
      );
    });
  };

  // 渲染cate列表中的content(全部分类内类目)
  renderCateInnerContent = (items, cateList) => {
    // console.log('cate-----', item);
    let arr = items.sub_category_list.map((it, index) => {
      let cls = it.active ? 'cate-box-inner active' : 'cate-box-inner';
      return (
        <div
          key={index}
          onClick={() => this.changeDoFilter(it, TABKEY.cate, cateList)}
          className='cate-box'
        >
          <div className={cls}>{`${it.name}(${it.quantity})`}</div>
        </div>
      );
    });
    return arr;
  };

  // 渲染综合排序
  renderTypeContent = () => {
    let type = this.props.filterData.sort_type_list || [];
    // console.log('type//', type);

    return type.map((item, index) => {
      let cls = item.active ? 'type-item active' : 'type-item';
      return (
        <li
          key={index}
          onClick={() => this.changeDoFilter(item, TABKEY.type, type)}
          className={cls}
        >
          {item.name}
        </li>
      );
    });
  };

  // 渲染顶部默认tab
  renderTabs = () => {
    let tab = this.props.tabs;
    let arr = [];
    for (let key in tab) {
      let item = tab[key];
      let cls = `${item.key} item`;
      if (item.key === this.props.activeKey && !this.props.closePanel) {
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
    let cls = 'panel';
    if (!this.props.closePanel) {
      cls += ' show';
    } else {
      cls = 'panel';
    }
    return (
      <div className='header'>
        <div className='header-top'>{this.renderTabs()}</div>
        <div className={cls}>
          <div className='panel-inner'>{this.renderFilter()}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log('state>>', state);
  return {
    tabs: state.tab.tabs,
    activeKey: state.tab.activeKey,
    filterData: state.tab.filterData,
    closePanel: state.tab.closePanel,
  };
};
export default connect(mapStateToProps)(Header);
