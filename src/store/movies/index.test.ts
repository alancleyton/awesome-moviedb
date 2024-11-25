import { moviesMock, errorMock } from '@/test-utils/__mocks__';
import moviesReducer, { initialState } from './reducers';
import { fetchMovies, fetchMoviesSuccess, fetchMoviesFailure } from './actions';

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
      movies: moviesMock,
    };

    const state = moviesReducer(before, fetchMoviesSuccess(moviesMock));

    expect(state).toStrictEqual(after);
  });

  it('should handle movies/FETCH_MOVIES_FAILURE', async () => {
    const before = initialState;

    const after = {
      ...before,
      isLoading: false,
      error: errorMock,
    };

    const state = moviesReducer(before, fetchMoviesFailure(errorMock));

    expect(state).toStrictEqual(after);
  });
});
