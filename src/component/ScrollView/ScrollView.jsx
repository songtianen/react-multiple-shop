import React from 'react';
import Loading from '../Loding/Loding';
import './ScrollView.scss';

/**
 * @constructor <ScrollView loadCallBack={function} isend={bool} />
 * @description 滚动加载组件
 */
class ScrollView extends React.PureComponent {
  onloadPage = () => {
    let clientHeight = document.documentElement.clientHeight;
    let scrollHeight = document.body.scrollHeight;
    let scrollTop = document.documentElement.scrollTop;
    let propLoadDis = 30; // 定义一个阈值
    // 判断是否滚动到底部
    if (scrollTop + clientHeight >= scrollHeight - propLoadDis) {
      if (!this.props.isend) {
        // eslint-disable-next-line no-unused-expressions
        this.props.loadCallback && this.props.loadCallback();
      }

      // console.log('clientHeight', clientHeight);
      // console.log('scrollHeight', scrollHeight);
      // console.log('scrollTop', scrollTop);
    }
  };

  componentDidMount() {
    window.addEventListener('scroll', this.onloadPage.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onloadPage.bind(this));
  }

  render() {
    console.log('ScrollView-render');
    return (
      <div className='scrollView'>
        {this.props.children}
        <Loading isend={this.props.isend} />
      </div>
    );
  }
}
export default ScrollView;
