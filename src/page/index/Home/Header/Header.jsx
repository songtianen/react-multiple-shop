import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './Header.scss';
/**
 * @constructor<Header/>
 * @description 顶部banner
 */

class Header extends React.PureComponent {
  render() {
    return (
      <div className='header'>
        {/* <img className='banner-img' src={require()} alt='' /> */}
        <SearchBar />
        <div className='banner-img'>img</div>
      </div>
    );
  }
}
export default Header;
