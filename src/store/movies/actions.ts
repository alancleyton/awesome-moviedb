import { createAction } from '@reduxjs/toolkit';

import { Movie } from '@/types/movies';

import { ActionTypes } from './types';

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

export const searchMovies = createAction(
  ActionTypes.SEARCH_MOVIES,
  (query: string) => ({
    payload: {
      query,
    },
  }),
);

export const searchMoviesSuccess = createAction(
  ActionTypes.SEARCH_MOVIES_SUCCESS,
  (movies: Movie[]) => ({
    payload: {
      movies,
    },
  }),
);

export const searchMoviesFailure = createAction(
  ActionTypes.SEARCH_MOVIES_FAILURE,
  (error: unknown) => ({
    payload: {
      error,
    },
  }),
);
