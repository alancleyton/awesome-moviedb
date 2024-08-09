import { takeLatest, all, call, put } from 'redux-saga/effects';

import { getApi } from '@/utils/api';
import {
  fetchMoviesSuccess,
  fetchMoviesFailure,
  searchMoviesSuccess,
  searchMoviesFailure,
} from './actions';
import {
  ActionTypes,
  FetchMoviesPayloadAction,
  SearchMoviesPayloadAction,
} from './types';

function* fetchMovies(action: FetchMoviesPayloadAction) {
  try {
    const { query } = action.payload;

    const { data } = yield call(getApi, `/3/movie/popular${query}`);

    console.log('~DATA FROM SAGA', data);

    yield put(fetchMoviesSuccess(data.results));
  } catch (error) {
    fetchMoviesFailure(error);
  }
}

function* searchMovies(action: SearchMoviesPayloadAction) {
  try {
    const { query } = action.payload;

    const { data } = yield call(
      getApi,
      `/3/search/movie?language=pt-BR&query=${query}`,
    );

    yield put(searchMoviesSuccess(data.results));
  } catch (error) {
    searchMoviesFailure(error);
  }
}

function* moviesSagas() {
  yield all([takeLatest(ActionTypes.FETCH_MOVIES, fetchMovies)]);
  yield all([takeLatest(ActionTypes.SEARCH_MOVIES, searchMovies)]);
}

export default moviesSagas;
