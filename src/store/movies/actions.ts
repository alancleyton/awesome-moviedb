import { createAction } from '@reduxjs/toolkit';
import { ActionTypes, Movie } from './types';

export const fetchMovies = createAction(
  ActionTypes.FETCH_MOVIES,
  (query: string) => ({
    payload: {
      query,
    },
  }),
);

export const fetchMoviesSuccess = createAction(
  ActionTypes.FETCH_MOVIES_SUCCESS,
  (movies: Movie[]) => ({
    payload: {
      movies,
    },
  }),
);

export const fetchMoviesFailure = createAction(
  ActionTypes.FETCH_MOVIES_FAILURE,
  (error: unknown) => ({
    payload: {
      error,
    },
  }),
);
