import { takeLatest, all, call, put } from 'redux-saga/effects';

import { getApi } from '@/utils/api';
import { fetchPopularMoviesSuccess, fetchPopularMoviesFailure } from './slice';

function* fetchPopularMovies() {
  try {
    const { data } = yield call(
      getApi,
      '/3/movie/popular?language=pt-BR&page=1',
    );

    yield put(fetchPopularMoviesSuccess(data.results));
  } catch (error) {
    fetchPopularMoviesFailure(error);
  }
}

function* moviesSagas() {
  yield all([takeLatest('movies/fetchPopularMovies', fetchPopularMovies)]);
}

export default moviesSagas;
