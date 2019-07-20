import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import mainredux from '../redux/gateRedux/index_redux';
import BottomBar from '../BottomBar/BottomBar';
import Home from '../Home/Home';
import './Main.scss';

const { add } = mainredux.actions.mainActions;
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
        <Home />
        <BottomBar />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log('state', state);
  return {
    num: state.main.num,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNum: (info) => {
      dispatch(add(info));
    },
  };
};

Main.propTypes = {
  addNum: PropTypes.func.isRequired,
  // num: PropTypes.number.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
