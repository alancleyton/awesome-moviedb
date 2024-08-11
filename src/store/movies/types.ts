import { PayloadAction } from '@reduxjs/toolkit';
import { Movie } from '@/types/movies';

export interface State {
  isLoading: boolean;
  isSearching: boolean;
  movies: Movie[];
  searchResult: Movie[];
  error: unknown | null;
}

export enum ActionTypes {
  FETCH_MOVIES = 'movies/FETCH_MOVIES',
  FETCH_MOVIES_SUCCESS = 'movies/FETCH_MOVIES_SUCCESS',
  FETCH_MOVIES_FAILURE = 'movies/FETCH_MOVIES_FAILURE',
  SEARCH_MOVIES = 'movies/SEARCH_MOVIES',
  SEARCH_MOVIES_SUCCESS = 'movies/SEARCH_MOVIES_SUCCESS',
  SEARCH_MOVIES_FAILURE = 'movies/SEARCH_MOVIES_FAILURE',
}

export type FetchMoviesPayloadAction = PayloadAction<{ query: string }>;
export type SearchMoviesPayloadAction = PayloadAction<{ query: string }>;
