import { screen, fireEvent, waitFor, cleanup } from '@testing-library/react';
import { EnhancedStore } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';

import { setupStore, RootState } from '@/store/config';
import { renderWithProviders, flushPromises } from '@/test-utils';
import { searchResultMock } from '@/test-utils/__mocks__';
import * as utilsApi from '@/utils/api';

import { SearchBar } from '.';

jest.mock('../../../utils/api');

describe('SearchBar', () => {
  let store: EnhancedStore<RootState>;

  beforeEach(() => {
    jest.clearAllMocks();
    store = setupStore();
  });

  afterEach(cleanup);

  it('should render correctly', () => {
    const { container } = renderWithProviders(<SearchBar />, { store });

    expect(screen.getByTestId('searchBar')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should render suggestions list with search query', () => {
    renderWithProviders(<SearchBar />, { store });

    const input = screen.getByRole('searchbox');
    fireEvent.change(input, { target: { value: 'eragon' } });

    expect(screen.getByRole('listbox')).toBeInTheDocument();
  });

  it('should render loader when is searching', async () => {
    renderWithProviders(<SearchBar />, { store });

    const input = screen.getByRole('searchbox');
    fireEvent.change(input, { target: { value: 'eragon' } });

    await waitFor(
      () => {
        expect(screen.getByRole('alert')).toBeInTheDocument();
      },
      { timeout: 600 },
    );
  });

  it('should render search result when search is successfuly done', async () => {
    jest.spyOn(utilsApi, 'getApi').mockReturnValue(
      Promise.resolve({
        data: searchResultMock,
      } as AxiosResponse),
    );

    renderWithProviders(<SearchBar />, { store });

    const input = screen.getByRole('searchbox');
    fireEvent.change(input, { target: { value: 'eragon' } });

    await waitFor(
      async () => {
        await flushPromises();

        expect(
          screen.getAllByAltText(/Deadpool & Wolverine/i)[0],
        ).toBeInTheDocument();
      },
      { timeout: 600 },
    );
  });
});
