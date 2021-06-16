import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import loginPage from './pages/Login';
import Wallet from './pages/Wallet';

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route to="/" component={ loginPage } />
        <Route to="/carteira" component={ Wallet } />
      </Switch>
    );
  }
}
