import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import mainredux from '../redux/gateRedux/main_redux';
import BottomBar from '../BottomBar/BottomBar';
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
        <svg
          t='1563541536026'
          className='icon'
          viewBox='0 0 1024 1024'
          version='1.1'
          p-id='5041'
        >
          <path
            d='M418.496 645.344l-159.456-90.752a32 32 0 0 0-31.68 55.616l159.456 90.752a32 32 0 0 0 31.68-55.616z'
            p-id='5042'
          />
          <path
            d='M790.208 379.808a32 32 0 0 0-31.616-55.648L508.8 466.336l-249.76-142.144a32 32 0 0 0-31.68 55.616l253.344 144.16V832a32 32 0 1 0 64 0v-309.312c0-0.992-0.48-1.856-0.576-2.848l246.08-140.032z'
            p-id='5043'
          />
          <path
            d='M880.288 232.48L560.192 45.12a95.648 95.648 0 0 0-96.64 0L143.68 232.48A96.64 96.64 0 0 0 96 315.904v397.664c0 34.784 18.624 66.88 48.736 84l320 181.92a95.52 95.52 0 0 0 94.496 0l320-181.92A96.576 96.576 0 0 0 928 713.568V315.904a96.64 96.64 0 0 0-47.712-83.424zM864 713.568c0 11.584-6.208 22.304-16.256 28l-320 181.92a31.776 31.776 0 0 1-31.488 0l-320-181.92A32.192 32.192 0 0 1 160 713.568V315.904c0-11.456 6.048-22.048 15.904-27.808l319.872-187.36a31.84 31.84 0 0 1 32.192 0l320.128 187.392c9.856 5.728 15.904 16.32 15.904 27.776v397.664z'
            p-id='5044'
          />
          <path
            d='M778.656 453.952l-149.344 88.128c-20.608 12.16-37.344 38.944-37.344 59.808v176.416c0 20.864 16.704 27.904 37.344 15.744l149.344-88.128c20.608-12.16 37.344-38.944 37.344-59.808v-176.416c0-20.864-16.704-27.904-37.344-15.744z'
            p-id='5045'
          />
        </svg>
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
