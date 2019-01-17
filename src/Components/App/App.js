import React, { Component } from 'react';
import {HashRouter, Switch, Route } from 'react-router-dom';
import NewForm from '../../Container/NewForm/NewForm';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={NewForm} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
