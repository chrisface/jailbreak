import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../home';
import Jail from '../jail';

const App = () => (
  <div>
    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/jail" component={Jail} />
    </main>
  </div>
);

export default App;
