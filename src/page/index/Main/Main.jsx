import React from 'react';
import { connect } from 'react-redux';
// import BottomBar from '../BottomBar/BottomBar';
import Router from '../routers/index';
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
        <Router />
        {/* <BottomBar /> */}
      </div>
    );
  }
}

export default connect()(Main);
