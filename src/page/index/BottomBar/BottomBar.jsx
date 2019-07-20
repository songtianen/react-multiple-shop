import './BottomBar.scss';

import React from 'react';
import { connect } from 'react-redux';
import mainRedux from '../redux/gateRedux/index_redux';

/**
 * @constructor <BottomBar>
 * @description 首页底部tab栏
 */
const { changeTab } = mainRedux.actions.mainActions;

class BottomBar extends React.PureComponent {
  state = {};

  renderItems = () => {
    const { tabs } = this.props;
    return tabs.map((item, index) => {
      let cls = `${item.key} btn-item`;
      let name = item.name;
      if (item.key === this.props.activeKey) {
        cls += ' active';
      }

      return (
        <div
          className={cls}
          key={index}
          onClick={() => {
            this.onChangeTab(item);
          }}
        >
          <div className='tab-icon' />
          <div className='btn-name'>{name}</div>
        </div>
      );
    });
  };

  componentDidMount() {
    // console.log(this.props);
  }

  onChangeTab = (item) => {
    this.props.dispatch(
      changeTab({
        activeKey: item.key,
      }),
    );
  };

  render() {
    return <div className='bottom-bar'>{this.renderItems()}</div>;
  }
}

const mapStateToProps = (state) => {
  // console.log('state--', state);
  return {
    tabs: state.main.tabs,
    activeKey: state.main.activeKey,
  };
};

export default connect(mapStateToProps)(BottomBar);
