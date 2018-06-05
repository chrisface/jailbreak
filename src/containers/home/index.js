import React from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  decrement
} from '../../modules/counter';

const Home = props => (
  <div>
    <h1>Home</h1>
    <Link to="/jail">GO TO JAIL</Link>
    <p> Some description of what will happen going on</p>
  </div>
);

const mapStateToProps = state => ({
  count: state.counter.count
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      decrement
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
