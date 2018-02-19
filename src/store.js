import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import createHistory from 'history/createBrowserHistory';

import { reducer } from './reducers';
import rootSaga from './sagas';

export const history = createHistory();
const sagaMiddleware = createSagaMiddleware();

const createEnhancer = () => {
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      /* istanbul ignore next */
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) :
      compose;

  const navMiddleware = routerMiddleware(history);

  return composeEnhancers(
    applyMiddleware(navMiddleware, sagaMiddleware),
    /* if needed, other store enhancers go here */
  );
};

const enhancer = createEnhancer();
export const store = createStore(reducer, {}, enhancer);

sagaMiddleware.run(rootSaga);
