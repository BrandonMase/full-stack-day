import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Login from './components/Login';
import AccountContainer from './components/AccountContainer';

export default <React.Fragment>
  <Route exact path="/" component={Login} />
  <Route path="/account" component={AccountContainer} />
</React.Fragment>