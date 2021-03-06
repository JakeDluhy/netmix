// @flow
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Authenticated from '../Authenticated';

import '../../styles/routes/root.css';

type Props = {};

type State = {
  hasError: boolean,
  error?: string,
  info?: string,
};

class Root extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = { hasError: false };
  }

  componentDidCatch(error: string, info: string) {
    this.setState({
      hasError: true,
      error,
      info,
    });
  }

  render() {
    return (
      <div className='font-sans leading-normal'>
        {this.state.hasError ? (
          <div className='py-20 px-2 max-w-sm text-center text-2xl mx-auto'>
            Oh noes! It seems that we screwed up, and there's an error in the application.
            Feel free to reach out and tell us about your experience!
          </div>
        ) : (
          <Switch>
            <Route path='/' component={Authenticated} />
          </Switch>
        )}
      </div>
    );
  }
}

export default Root;
