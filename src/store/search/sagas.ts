import { takeLatest, all, call, put } from 'redux-saga/effects';

import { getApi } from '@/utils/api';
import { searchFailure, searchSuccess } from './actions';
import { ActionTypes, SearchPayloadAction } from './types';

function* search(action: SearchPayloadAction) {
  try {
    const { query, category } = action.payload;
    const language = window.localStorage.getItem('amdb:lng');

    const { data } = yield call(
      getApi,
      `/3/search/${category}?language=${language}&query=${query}`,
    );

    yield put(searchSuccess(data.results, category));
  } catch (error) {
    searchFailure(error);
  }
}

function* searchSagas() {
  yield all([takeLatest(ActionTypes.SEARCH, search)]);
}

export default searchSagas;
