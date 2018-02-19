import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import entities from './entities';

export const reducer = combineReducers({
  entities,
  routing: routerReducer,
});

export default reducer;
