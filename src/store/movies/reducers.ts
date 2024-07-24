import { createReducer } from '@reduxjs/toolkit';

import {
  fetchMovies,
  fetchMoviesSuccess,
  fetchMoviesFailure,
  searchMovies,
  searchMoviesSuccess,
  searchMoviesFailure,
} from './actions';

import { State } from './types';

export const initialState: State = {
  isLoading: false,
  isSearching: false,
  movies: [],
  searchResult: [],
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

  builder.addCase(searchMovies, state => ({
    ...state,
    isSearching: true,
  }));

  builder.addCase(searchMoviesSuccess, (state, action) => ({
    ...state,
    isSearching: false,
    searchResult: action.payload.movies,
  }));

  builder.addCase(searchMoviesFailure, (state, action) => ({
    ...state,
    isSearching: false,
    error: action.payload.error,
  }));

  builder.addDefaultCase(state => state);
});

export default moviesReducer;
