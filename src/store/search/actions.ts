import { createAction } from '@reduxjs/toolkit';

import { Media } from '@/types/media';
import { SearchCategory } from '@/types/search';
import { ActionTypes } from './types';

export const search = createAction(
  ActionTypes.SEARCH,
  (query: string, category: SearchCategory) => ({
    payload: {
      query,
      category,
    },
  }),
);

export const searchSuccess = createAction(
  ActionTypes.SEARCH_SUCCESS,
  (result: Media[], category: SearchCategory) => ({
    payload: {
      result,
      category,
    },
  }),
);

export const searchFailure = createAction(
  ActionTypes.SEARCH_FAILURE,
  (error: unknown) => ({
    payload: {
      error,
    },
  }),
);
