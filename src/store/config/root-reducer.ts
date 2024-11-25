import { combineReducers } from '@reduxjs/toolkit';

import moviesReducer from '../movies/reducers';
import searchReducer from '../search/reducers';

/**
 * Root reducer with all reducers combined, place the reducers here
 */
const rootReducer = combineReducers({
  movies: moviesReducer,
  search: searchReducer,
});

export default rootReducer;
