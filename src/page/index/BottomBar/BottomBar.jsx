import './BottomBar.scss';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { changeTab } from '../redux/actions/index';

/**
 * @constructor <BottomBar>
 * @description 首页底部tab栏
 */

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
        <div className={cls} key={index}>
          <div
            onClick={() => {
              this.onChangeTab(item);
            }}
          >
            <div className='tab-icon' />
            <div className='btn-name'>{name}</div>
          </div>
        </div>
      );
    });
  };

  componentDidMount() {
    console.log('bottomBar render');
  }

  onChangeTab = (item) => {
    this.props.dispatch(
      changeTab({
        activeKey: item.key,
      }),
    );
    this.props.history.replace(item.key);
  };

  render() {
    return <div className='bottom-bar'>{this.renderItems()}</div>;
  }
}

const mapStateToProps = (state) => {
  console.log('state--', state);
  return {
    tabs: state.main.tabs,
    activeKey: state.main.activeKey,
  };
};

export default withRouter(connect(mapStateToProps)(BottomBar));
