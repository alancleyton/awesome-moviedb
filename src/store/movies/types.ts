import { PayloadAction } from '@reduxjs/toolkit';

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface State {
  isLoading: boolean;
  movies: Movie[];
  error: unknown | null;
}

export enum ActionTypes {
  FETCH_MOVIES = 'movies/FETCH_MOVIES',
  FETCH_MOVIES_SUCCESS = 'movies/FETCH_MOVIES_SUCCESS',
  FETCH_MOVIES_FAILURE = 'movies/FETCH_MOVIES_FAILURE',
}

export type FetchMoviesPayloadAction = PayloadAction<{ query: string }>;
