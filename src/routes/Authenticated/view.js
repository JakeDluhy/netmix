// @flow
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '../../components/partials/Header';

import MoviesIndex from '../movies/MoviesIndex';
import MoviesShow from '../movies/MoviesShow';

export default () => [
  <Header key='A' />,

  <div key='B' className='max-w-xl mx-auto p-4 lg:px-0'>
    <Switch key='B'>
      <Route exact path='/' component={MoviesIndex} />
      <Route exact path='/movies/:id' component={MoviesShow} />
    </Switch>
  </div>
];
