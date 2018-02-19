import normalize from 'json-api-normalizer';
import build from 'redux-object';
import pluralize from 'pluralize';
import _ from 'lodash';

/**
 * Build a redux-object resource, defaulting with an empty object instead of null
 * @param  {*}      res The arguments to redux-object `build`
 * @return {Object}     The built javascript object
 */
export const buildObj = (...args) => build(...args) || {};

/**
 * Fetch related resources for a hasMany relationship. Necessary because redux-object by default
 * uses the stored values within the relationships object, which can become out of date. This
 * first gets the data from the relationships object, and then also filters through records
 * in the store that might not be on the
 * relationships object
 * @param  {Object} entities    The entities object from redux
 * @param  {String} type        The type of the object that you want to get the relationship for.
 *                              Should be pluralized. e.g. 'patients' in patient.scans
 * @param  {String|Number} id   The id of the object you want to get the relationship for
 * @param  {String} relatedType The type of the relationship. e.g. 'scans' in patient.scans
 * @return {Array}              An array of the related resources that are found within entities
 */
export const buildRelatedObjs = (entities, type, id, relatedType) => {
  const singularType = pluralize.singular(type);

  const relatedResources = buildObj(entities, type, id)[relatedType] || [];
  const relatedIds = relatedResources.map((val) => val.id);

  const additionalRelatedResources = (build(entities, relatedType) || [])
  .filter((resource) => (
    Number(resource[singularType].id) === Number(id)) && !relatedIds.includes(resource.id),
  );

  return relatedResources.concat(additionalRelatedResources);
};

export const buildHasOneObj = (entities, type, id, relatedType) => {
  const singularType = pluralize.singular(type);
  const singularRelType = pluralize.singular(relatedType);

  const relatedResource = buildObj(entities, type, id)[singularRelType];
  if(relatedResource && relatedResource.id) return relatedResource;

  const additionalRelatedResource = (build(entities, relatedType) || [])
  .filter((resource) => Number(resource[singularType].id) === Number(id))[0];

  return additionalRelatedResource;
};

export const buildWhereObjs = (entities, type, whereClause) => (
  (build(entities, type) || []).filter((obj) => {
    let passes = true;

    _.forEach(whereClause, (val, key) => {
      const objVal = _.get(obj, key);

      if(val !== objVal && !(val === true && objVal)) passes = false;
    });

    return passes;
  })
);

/**
 * Map a response to a payload utilizing JSON API formatting
 * @param  {Object} res The JSON API response
 * @return {Object}     The mapped response
 */
export const normalizePayload = (res) => res.json()
.then((json) => ({ entities: normalize(json) }));
