import _ from 'lodash';

import { a } from '../actions';

/**
 * A customizer for the lodash merge. Handles edge cases where merging doesn't work.
 * For mergeWith, if it returns undefined then it does it's normal merge operation.
 * @param  {*}      objValue The original object value for the merge
 * @param  {*}      srcValue The new source value to be merged
 * @return {*}               The merged result
 */
function entitiesMergeCustomizer(objValue, srcValue, key) {
  // If the property value is an array, just replace instead of merging
  // This is necessary because merging [1, 2, 3] with [1, 2] results in [1, 2, 3]
  // We don't want this behavior when, for example, we are removing roles
  if(Array.isArray(srcValue)) return srcValue;
  if(key === 'attributes') return _.assign({}, objValue, srcValue);

  return undefined;
}

/**
 * Remove the entities from the specified type by looping through ids
 * @param  {Object} state The state of the entities store
 * @param  {String} type  The designation of type in the entities store
 * @param  {Array}  ids   An array of ids to delete from the store
 * @return {Object}       The updated state
 */
function removeEntities(state, type, ids) {
  const oldState = _.cloneDeep(state);

  if(oldState[type] !== undefined && Array.isArray(ids)) {
    ids.forEach((id) => delete oldState[type][id]);
  }

  return oldState;
}

/**
 * A store to hold basic entity objects, like users, care teams, and accounts
 * @action {SIGN_OUT_USER} Resets state to initial empty state on user sign out.
 * @action {<any>} Checks for whether the payload has a key of entities. If it does
 *                 then merge the values within entities with the current state
 */
export default function entitiesReducer(state = {}, action) {
  switch(action.type) {
  case a.REMOVE_ENTITIES:
    return removeEntities(state, action.payload.type, action.payload.ids);
  default:
    if(action.payload && action.payload.entities) {
      return _.mergeWith({}, state, action.payload.entities, entitiesMergeCustomizer);
    }

    return state;
  }
}
