import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../home';
import Jail from '../jail';
import Freedom from '../freedom';

const App = () => (
  <div>
    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/jail" component={Jail} />
      <Route exact path="/freedom" component={Freedom} />
    </main>
  </div>
);

export default App;
