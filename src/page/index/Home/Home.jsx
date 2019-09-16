import React from 'react';
import Header from './Header/Header';
// import Category from './Category/Category';
// import ContentList from './ContentList/ContentList';
/**
 * @constructor<Home/>
 * @description 首页代码
 */

class Home extends React.PureComponent {
  render() {
    return (
      <div className='home'>
        <Header />
      </div>
    );
  }
}
export default Home;
