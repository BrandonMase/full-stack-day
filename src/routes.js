import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Login from './components/Login';
import Account from './components/Account';

export default <React.Fragment>
  <Route exact path="/" component={Login} />
  <Route path="/account" component={Account} />
</React.Fragment>