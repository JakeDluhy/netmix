import makeActionCreator from './utils/make-action-creator';

export const a = {
  ON_LOAD: 'ON_LOAD',

  // Entities
  ADD_ENTITIES:     'ADD_ENTITIES',
  REMOVE_ENTITIES:  'REMOVE_ENTITIES',
};

export const onLoad = makeActionCreator(a.ON_LOAD);

// Entities
export const addEntities =    makeActionCreator(a.ADD_ENTITIES, 'payload');
export const removeEntities = makeActionCreator(a.REMOVE_ENTITIES, 'payload');
