import { takeLatest, all, call, put } from 'redux-saga/effects';

import { getApi } from '@/utils/api';
import { fetchMoviesSuccess, fetchMoviesFailure } from './actions';
import { ActionTypes, FetchMoviesPayloadAction } from './types';

function* fetchMovies(action: FetchMoviesPayloadAction) {
  try {
    const { query } = action.payload;

    const { data } = yield call(getApi, `/3/movie/popular${query}`);

    yield put(fetchMoviesSuccess(data.results));
  } catch (error) {
    fetchMoviesFailure(error);
  }
}

function* moviesSagas() {
  yield all([takeLatest(ActionTypes.FETCH_MOVIES, fetchMovies)]);
}

export default moviesSagas;
