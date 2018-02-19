// @flow
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '../../components/partials/Header';

export default () => [
  <Header />,

  <Switch key='B'>
    <Route path='/' component={() => <div />} />
  </Switch>
];
