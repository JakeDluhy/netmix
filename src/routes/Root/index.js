import React, { Component } from 'react';

import logo from '../../assets/logo.svg';
import '../../styles/routes/root.css';

class Root extends Component {
  render() {
    return (
      <div className='text-center'>
        <header className="h-48 pt-8 text-white bg-black">
          <img src={logo} className="App-logo h-16" alt="logo" />
          <h1 className="pt-4 text-2xl">Welcome to React</h1>
        </header>
        <p className="pt-4">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Root;
