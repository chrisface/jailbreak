import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  increment,
  escape
} from '../../modules/counter';

const Jail = props =>

(
  <div>
    <h1>Jail Page</h1>
    <p>You are in Jail!</p>
    <p>Count: {props.count}</p>
    <p>
      <button onClick={props.increment}>
        Increment
      </button>
    </p>
    { props.count > 5 ? escapeButton(props.escape) : null }
  </div>
);

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
