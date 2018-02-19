import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import registerServiceWorker from './utils/registerServiceWorker';

import Root from './routes/Root';
import './styles/index.css';

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Root />
    </AppContainer>,
    document.getElementById('root'),
  );
};

// Render the application and register the service worker
render();
registerServiceWorker();

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./routes/Root', render);
}
