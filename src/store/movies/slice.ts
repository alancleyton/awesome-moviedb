import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { State, Movie } from './types';

const initialState: State = {
  isLoading: false,
  popularMovies: [],
  error: null,
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    fetchPopularMovies: state => ({
      ...state,
      isLoading: true,
    }),
    fetchPopularMoviesSuccess: (state, action: PayloadAction<Movie[]>) => ({
      ...state,
      isLoading: false,
      popularMovies: action.payload,
    }),
    fetchPopularMoviesFailure: (state, action: PayloadAction<unknown>) => ({
      ...state,
      isLoading: false,
      error: action.payload,
    }),
  },
});

export const {
  fetchPopularMovies,
  fetchPopularMoviesSuccess,
  fetchPopularMoviesFailure,
} = moviesSlice.actions;

export default moviesSlice.reducer;
