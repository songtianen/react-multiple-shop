import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './Header.scss';

class Header extends React.PureComponent {
  render() {
    return (
      <div className='header'>
        <SearchBar />
        <img
          className='banner-img'
          src='https://f11.baidu.com/it/u=1090114303,2414848395&fm=72'
          alt='img'
        />
      </div>
    );
  }
}

export default Header;
