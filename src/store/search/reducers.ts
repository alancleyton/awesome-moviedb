import { createReducer } from '@reduxjs/toolkit';

import { search, searchSuccess, searchFailure } from './actions';
import { State } from './types';

export const initialState: State = {
  isSearching: false,
  searchCategory: 'multi',
  searchResult: [],
  error: null,
};

const searchReducer = createReducer(initialState, builder => {
  builder.addCase(search, state => ({
    ...state,
    isSearching: true,
  }));

  builder.addCase(searchSuccess, (state, action) => ({
    ...state,
    isSearching: false,
    searchCategory: action.payload.category,
    searchResult: action.payload.result,
  }));

  builder.addCase(searchFailure, (state, action) => ({
    ...state,
    isSearching: false,
    error: action.payload.error,
  }));

  builder.addDefaultCase(state => state);
});

export default searchReducer;
