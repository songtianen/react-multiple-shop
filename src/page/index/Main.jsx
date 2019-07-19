import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import mainredux from './redux/gateRedux/main_redux';

const { add } = mainredux.actions.mainActions;
class Main extends React.PureComponent {
  handleClick = () => {
    this.props.addNum();
  };

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    let { num } = this.props;
    return (
      <button
        style={{ width: 100, height: 200, background: 'pink' }}
        type='button'
        onClick={this.handleClick}
      >
        {num}song
      </button>
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
  num: PropTypes.number.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
