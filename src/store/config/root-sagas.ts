import { all } from 'redux-saga/effects';
import moviesSagas from '../movies/sagas';
import searchSagas from '../search/sagas';

/**
 * Root sagas with all sagas combined, place the sagas here
 */
export default function* rootSagas() {
  yield all([moviesSagas(), searchSagas()]);
}
