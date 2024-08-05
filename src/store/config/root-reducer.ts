import { combineReducers } from '@reduxjs/toolkit';

import moviesReducer from '../movies/reducers';

/**
 * Root reducer with all reducers combined, place the reducers here
 */
const rootReducer = combineReducers({
  movies: moviesReducer,
});

export default rootReducer;
