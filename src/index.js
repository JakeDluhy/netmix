import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import registerServiceWorker from './utils/register-service-worker';

import { store, history } from './store';

import Root from './routes/Root';
import './styles/index.css';

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store} key='provider'>
        <ConnectedRouter history={history}>
          <Root />
        </ConnectedRouter>
      </Provider>
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
