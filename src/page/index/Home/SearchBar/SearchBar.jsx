import React from 'react';
import './SearchBar.scss';
/**
 * @constructor <SearchBar/>
 * @description 顶部搜索框
 */

class SearchBar extends React.PureComponent {
  render() {
    return (
      <div className='search-bar'>
        <div className='bar-location'>
          <div className='location-icon' />
          <div className='location-text'>北京</div>
          <div className='location-right' />
        </div>
        <div className='search-btn'>
          <div className='search-right' />
          <p type='text' className='place-holder'>
            美妆
          </p>
        </div>
      </div>
    );
  }
}
export default SearchBar;
