import { put } from 'redux-saga/effects';
import pluralize from 'pluralize';
import _ from 'lodash';

import fetchWrapper from '../utils/fetch-wrapper';
import { normalizePayload } from '../utils/entities-helpers';
import { a } from '../actions';

export function* fetchEntity({ entity }, { payload = {} }) {
  const { query = '' } = payload;

  const upperSnaked = _.snakeCase(entity).toUpperCase();
  const path = `/${_.kebabCase(entity)}${query}`;

  try {
    const resPayload = yield fetchWrapper.get(path).then(normalizePayload);
    yield put({
      type:    a[`FETCH_${upperSnaked}_RES`],
      payload: resPayload,
    });
  } catch(e) {
    console.log(e);
  }
}

export function* findEntity({ entity }, { payload = {} }) {
  const { id, query = '' } = payload;

  const upperSnaked = _.snakeCase(pluralize.singular(entity)).toUpperCase();
  const path = `/${_.kebabCase(entity)}/${id}${query}`;

  try {
    const resPayload = yield fetchWrapper.get(path).then(normalizePayload);
    yield put({
      type:    a[`FIND_${upperSnaked}_RES`],
      payload: resPayload,
    });
  } catch(e) {
    console.log(e);
  }
}
