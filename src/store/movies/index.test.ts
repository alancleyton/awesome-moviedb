import moviesReducer, { initialState } from './reducers';
import {
  fetchMovies,
  fetchMoviesSuccess,
  fetchMoviesFailure,
  searchMovies,
  searchMoviesSuccess,
  searchMoviesFailure,
} from './actions';
import * as moviesMock from './__mocks__';

describe('Movies store', () => {
  it('should initialize reducer with initialState', () => {
    const reducer = moviesReducer(initialState, { type: 'unknown' });
    expect(reducer).toBe(initialState);
  });

  it('should handle movies/FETCH_MOVIES', async () => {
    const before = initialState;

    const after = {
      ...before,
      isLoading: true,
    };

    const state = moviesReducer(before, fetchMovies('?page=1'));

    expect(state).toStrictEqual(after);
  });

  it('should handle movies/FETCH_MOVIES_SUCCESS', async () => {
    const before = initialState;

    const after = {
      ...before,
      isLoading: false,
      movies: moviesMock.movies,
    };

    const state = moviesReducer(before, fetchMoviesSuccess(moviesMock.movies));

    expect(state).toStrictEqual(after);
  });

  it('should handle movies/FETCH_MOVIES_FAILURE', async () => {
    const before = initialState;

    const after = {
      ...before,
      isLoading: false,
      error: moviesMock.error,
    };

    const state = moviesReducer(before, fetchMoviesFailure(moviesMock.error));

    expect(state).toStrictEqual(after);
  });

  it('should handle movies/SEARCH_MOVIES', async () => {
    const before = initialState;

    const after = {
      ...before,
      isSearching: true,
    };

    const state = moviesReducer(before, searchMovies('transformers'));

    expect(state).toStrictEqual(after);
  });

  it('should handle movies/SEARCH_MOVIES_SUCCESS', async () => {
    const before = initialState;

    const after = {
      ...before,
      isSearching: false,
      searchResult: moviesMock.movies,
    };

    const state = moviesReducer(before, searchMoviesSuccess(moviesMock.movies));

    expect(state).toStrictEqual(after);
  });

  it('should handle movies/SEARCH_MOVIES_FAILURE', async () => {
    const before = initialState;

    const after = {
      ...before,
      isSearching: false,
      error: moviesMock.error,
    };

    const state = moviesReducer(before, searchMoviesFailure(moviesMock.error));

    expect(state).toStrictEqual(after);
  });
});
