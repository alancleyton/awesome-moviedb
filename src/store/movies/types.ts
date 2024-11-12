import { PayloadAction } from '@reduxjs/toolkit';
import { Media } from '@/types/media';

export interface State {
  isLoading: boolean;
  isSearching: boolean;
  movies: Media[];
  error: unknown | null;
}

export enum ActionTypes {
  FETCH_MOVIES = 'movies/FETCH_MOVIES',
  FETCH_MOVIES_SUCCESS = 'movies/FETCH_MOVIES_SUCCESS',
  FETCH_MOVIES_FAILURE = 'movies/FETCH_MOVIES_FAILURE',
}

export type FetchMoviesPayloadAction = PayloadAction<{ query: string }>;
