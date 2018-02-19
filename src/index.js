import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './utils/registerServiceWorker';

import Root from './routes/Root';
import './styles/index.css';

ReactDOM.render(
  <Root />,
  document.getElementById('root'),
);

registerServiceWorker();
