import { takeEvery } from 'redux-saga/effects';

import { fetchEntity, findEntity } from './entities';
import { a } from '../actions';

export default function* moviesSagas() {
  yield takeEvery(a.FETCH_MOVIES_REQ, fetchEntity.bind(fetchEntity, { entity: 'movies' }));
  yield takeEvery(a.FIND_MOVIE_REQ, findEntity.bind(findEntity, { entity: 'movies' }));
}
