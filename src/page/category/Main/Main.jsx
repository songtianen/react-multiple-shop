import React from 'react';
// import { connect } from 'react-redux';
import NavHeader from 'component/NavHeader/NavHeader';
import ContentList from '../ContentList/ContentList';
import Header from '../Header/Header';
import './Main.scss';

class Main extends React.PureComponent {
  handleClick = () => {
    this.props.addNum();
  };

  componentDidMount() {
    // console.log(this.props);
  }

  render() {
    return (
      <div>
        <NavHeader title=' 分类' />
        <Header />

        <ContentList />
      </div>
    );
  }
}

export default Main;
