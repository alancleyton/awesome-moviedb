import { searchResultMock, errorMock } from '@/test-utils/__mocks__';
import searchReducer, { initialState } from './reducers';
import { search, searchSuccess, searchFailure } from './actions';
import { State } from './types';

describe('Search store', () => {
  it('should initialize reducer with initialState', () => {
    const reducer = searchReducer(initialState, { type: 'unknown' });
    expect(reducer).toBe(initialState);
  });

  it('should handle search/SEARCH', async () => {
    const before = initialState;

    const after = {
      ...before,
      isSearching: true,
    } as State;

    const state = searchReducer(before, search('Johnny', 'multi'));

    expect(state).toStrictEqual(after);
  });

  it('should handle search/SEARCH_SUCCESS', async () => {
    const before = initialState;

    const after = {
      ...before,
      isSearching: false,
      searchCategory: 'multi',
      searchResult: searchResultMock.results,
    } as State;

    const state = searchReducer(
      before,
      searchSuccess(searchResultMock.results, 'multi'),
    );

    expect(state).toStrictEqual(after);
  });

  it('should handle movies/SEARCH_FAILURE', async () => {
    const before = initialState;

    const after = {
      ...before,
      isSearching: false,
      error: errorMock,
    } as State;

    const state = searchReducer(before, searchFailure(errorMock));

    expect(state).toStrictEqual(after);
  });
});
