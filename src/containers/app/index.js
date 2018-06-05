import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../home';
import Jail from '../jail';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  getAuthAsync
} from '../../modules/user';

class App extends React.Component {
  componentDidMount() {
    // this.props.getAuthAsync()
  }
  render() {
    return (
      <div>
        <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/jail" component={Jail} />
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getAuthAsync
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(App);

// export default App
