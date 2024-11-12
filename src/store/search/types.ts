import { PayloadAction } from '@reduxjs/toolkit';
import { Media } from '@/types/media';

import { SearchCategory } from '@/types/search';

export interface State {
  isSearching: boolean;
  searchCategory: SearchCategory;
  searchResult: Media[];
  error: unknown | null;
}

export enum ActionTypes {
  SEARCH = 'search/SEARCH',
  SEARCH_SUCCESS = 'search/SEARCH_SUCCESS',
  SEARCH_FAILURE = 'search/SEARCH_FAILURE',
}

export type SearchPayloadAction = PayloadAction<{
  query: string;
  category: SearchCategory;
}>;
