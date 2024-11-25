import { screen } from '@testing-library/react';

import { renderWithProviders, PreloadedState } from '@/test-utils';
import { searchResultMock } from '@/test-utils/__mocks__';
import { SearchSuggestions } from '.';

const stateWithResults = {
  search: {
    isSearching: false,
    searchCategory: 'multi',
    searchResult: searchResultMock,
    error: null,
  },
} as PreloadedState;

describe('SearchSuggestions', () => {
  it('should render correctly', () => {
    renderWithProviders(<SearchSuggestions />);

    expect(screen.getByTestId('searchSuggestions')).toBeInTheDocument();
  });

  it('should render with suggestions', () => {
    renderWithProviders(<SearchSuggestions />, {
      preloadedState: stateWithResults,
    });

    expect(
      screen.getByText(/Venom: Tempo de Carnificina/i),
    ).toBeInTheDocument();
  });

  it('should show media original title with diferent original language', () => {
    renderWithProviders(<SearchSuggestions />, {
      preloadedState: stateWithResults,
    });

    expect(screen.getAllByRole('subtitle')[0]).toBeInTheDocument();
  });

  it('should not show original title with original language', () => {
    renderWithProviders(<SearchSuggestions />, {
      preloadedState: {
        search: {
          ...stateWithResults.search,
          searchResult: searchResultMock.slice(1),
        },
      } as PreloadedState,
    });

    expect(screen.queryByRole('subtitle')).not.toBeInTheDocument();
  });

  it('should render suggestion with fallback without media poster', () => {
    renderWithProviders(<SearchSuggestions />, {
      preloadedState: stateWithResults,
    });

    expect(screen.getAllByRole('fallbackicon')[0]).toBeInTheDocument();
  });

  it('should render suggestion with year if media is a movie', () => {
    renderWithProviders(<SearchSuggestions />, {
      preloadedState: stateWithResults,
    });

    expect(screen.getByText(/2021/i)).toBeInTheDocument();
  });

  it('should render suggestion with person known for list if media is a person', () => {
    renderWithProviders(<SearchSuggestions />, {
      preloadedState: stateWithResults,
    });

    expect(screen.getAllByText(/Transformers/i)[0]).toBeInTheDocument();
  });
});
