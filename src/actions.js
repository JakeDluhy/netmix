import makeActionCreator from './utils/make-action-creator';

export const a = {
  ON_LOAD: 'ON_LOAD',

  // Entities
  ADD_ENTITIES:     'ADD_ENTITIES',
  REMOVE_ENTITIES:  'REMOVE_ENTITIES',
  FETCH_MOVIES_REQ: 'FETCH_MOVIES_REQ',
  FETCH_MOVIES_RES: 'FETCH_MOVIES_RES',
  FIND_MOVIE_REQ:   'FIND_MOVIE_REQ',
  FIND_MOVIE_RES:   'FIND_MOVIE_RES',
};

export const onLoad = makeActionCreator(a.ON_LOAD);

// Entities
export const addEntities =    makeActionCreator(a.ADD_ENTITIES, 'payload');
export const removeEntities = makeActionCreator(a.REMOVE_ENTITIES, 'payload');
export const fetchMoviesReq = makeActionCreator(a.FETCH_MOVIES_REQ, 'payload');
export const findMovieReq =   makeActionCreator(a.FIND_MOVIE_REQ, 'payload');
