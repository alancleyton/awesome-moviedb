import { createReducer } from '@reduxjs/toolkit';

import { fetchMovies, fetchMoviesSuccess, fetchMoviesFailure } from './actions';

import { State } from './types';

const initialState: State = {
  isLoading: false,
  movies: [],
  error: null,
};

const moviesReducer = createReducer(initialState, builder => {
  builder.addCase(fetchMovies, state => ({
    ...state,
    isLoading: true,
  }));

  builder.addCase(fetchMoviesSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    movies: action.payload.movies,
  }));

  builder.addCase(fetchMoviesFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.payload.error,
  }));

  builder.addDefaultCase(() => {});
});

export default moviesReducer;
