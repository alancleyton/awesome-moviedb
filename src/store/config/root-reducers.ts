import moviesReducer from '../movies/slice';

/**
 * Root reducer with all reducers combined, place the reducers here
 */
const rootReducers = {
  movies: moviesReducer,
};

export default rootReducers;
