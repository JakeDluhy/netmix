// @flow
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// import logo from '../../assets/logo.svg';
import '../../styles/routes/root.css';

class Root extends Component {
  constructor(props) {
    super(props);

    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
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
            <Route path='/' component={() => <div />} />
          </Switch>
        )}
      </div>
    );
  }
}

export default Root;
