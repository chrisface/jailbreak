import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  increment,
  escape
} from '../../modules/counter';

// import DeviceOrientation, { Orientation } from 'react-screen-orientation';

class Jail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      alpha: 0,
      beta: 0,
      gamma: 0
    };
  }

  componentDidMount() {
    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', (event) => {
        this.setState({
          ...this.state,
          alpha: event.alpha,
          beta: event.beta,
          gamma: event.gamma
        });
      });
    }

    this.props.increment();
    this.props.increment();
    this.props.increment();
    this.props.increment();
  }

  render() {
    return (
      <div>
        <h1>Jail Page</h1>
        <p>You are in Jail!</p>
        <p>Count: {this.props.count}</p>
        <p>Alpha: {this.state.alpha}</p>
        <p>Beta: {this.state.beta}</p>
        <p>Gama: {this.state.gamma}</p>
        <p>
          <button onClick={this.props.increment}>
            Increment
          </button>
        </p>
        { this.props.count > 5 ? escapeButton(this.props.escape) : null }
      </div>
    );
  }
}

const escapeButton = (action) => {
  return <button onClick={() => action()} > GET OUTTA HERE </button>;
}

const mapStateToProps = state => ({
  count: state.counter.count
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      increment,
      escape
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Jail);
