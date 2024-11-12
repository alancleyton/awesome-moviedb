import { createAction } from '@reduxjs/toolkit';

import { Media } from '@/types/media';

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
  (movies: Media[]) => ({
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
