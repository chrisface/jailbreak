import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { increment, escape } from '../../modules/counter';

// import DeviceOrientation, { Orientation } from 'react-screen-orientation';

class Jail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spins: 10,
      rotationStatus: {
        0: false,
        1: false,
        2: false,
        3: false
      }
    };
  }

  componentDidMount() {
    if (window.DeviceOrientationEvent) {
      this.setState({
        ...this.state,
        orientationListener: window.addEventListener(
          'deviceorientation',
          this.throttled(10, this.orientationHandler.bind(this))
        )
      });
    }
  }

  componentWillUnmount() {
    window.removeEventListener(
      'deviceorientation',
      this.state.orientationListener
    );
  }

  orientationHandler(event) {
    let alpha = event.alpha;
    let rotationStatus = {
      0: this.state.rotationStatus[0] || (alpha >= 1 && alpha < 90),
      1: this.state.rotationStatus[1] || (alpha >= 90 && alpha < 180),
      2: this.state.rotationStatus[2] || (alpha >= 180 && alpha < 270),
      3: this.state.rotationStatus[3] || (alpha >= 270 && alpha < 360)
    };

    if (
      rotationStatus[0] === true &&
      rotationStatus[1] === true &&
      rotationStatus[2] === true &&
      rotationStatus[3] === true
    ) {
      this.props.increment();

      this.checkFreedom();

      rotationStatus = {
        0: false,
        1: false,
        2: false,
        3: false
      };
    }

    this.setState({
      ...this.state,
      rotationStatus: rotationStatus
    });
  }

  checkFreedom() {
    if (this.props.count >= this.state.spins) {
      this.props.escape();
    }
  }

  throttled(delay, fn) {
    let lastCall = 0;
    return function(...args) {
      const now = new Date().getTime();
      if (now - lastCall < delay) {
        return;
      }
      lastCall = now;
      return fn(...args);
    };
  }

  render() {
    return (
      <div className="injail">
        <div className="card_injail">
          <img src="static/injail.png" width="136" />

          <h2>You are in jail!</h2>
          <p>
            To escape you must spin around in circles {this.state.spins} times.<br />
            <br />
            Times spun: {this.props.count}
          </p>

          <div className="divider white" />

          {/* }<div className="mercy_text">
      			<p>Mercy timer<br />
      			5 min remaining</p>
      		</div>
          */}
          <button
            onClick={() => {
              this.props.increment();
              this.checkFreedom();
            }}>
            Increment
          </button>
        </div>

        {/*}
        <p>Count: {this.props.count}</p>
        <p>Quadrant 1: { this.state.rotationStatus[0].toString() }</p>
        <p>Quadrant 2: { this.state.rotationStatus[1].toString() }</p>
        <p>Quadrant 3: { this.state.rotationStatus[2].toString() }</p>
        <p>Quadrant 4: { this.state.rotationStatus[3].toString() }</p>
        <p>
          <button onClick={this.props.increment}>
            Increment
          </button>
        </p>
        { this.props.count > 5 ? escapeButton(this.props.escape) : null }
        */}
      </div>
    );
  }
}

const escapeButton = action => {
  return <button onClick={() => action()}> GET OUTTA HERE </button>;
};

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
