import { useEffect, useCallback, useState, useRef, ChangeEvent } from 'react';
import { useDebounce } from 'use-debounce';
import { Input } from '@alancleyton67/awesome-ui';
import * as MdIcon from 'react-icons/md';

import { useAppDispatch } from '@/hooks/useStore';
import { searchMovies } from '@/store/movies/actions';
import { cn } from '@/utils/cn';

import { SearchBarSuggestions } from './search-bar-suggestions';

interface SearchBarProps {
  isVisible?: boolean;
}

export const SearchBar = ({ isVisible = false }: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [debouncedSearchQuery] = useDebounce(searchQuery, 500);
  const searchField = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const fetchSearchResults = useCallback(
    (query: string) => {
      dispatch(searchMovies(query));
    },
    [dispatch],
  );

  const clearSearchQuery = () => {
    setSearchQuery('');
    searchField.current?.focus();
  };

  useEffect(() => {
    fetchSearchResults(debouncedSearchQuery);
  }, [fetchSearchResults, debouncedSearchQuery]);

  return (
    <div
      id="searchBar"
      className={cn('w-full bg-white', isVisible ? 'absolute' : 'hidden')}
    >
      <div id="searchBarForm" className="mx-auto w-full max-w-6xl p-4">
        <form action="/search">
          <Input.Root isFull variant="unstyled">
            <Input.Group elementRight>
              <Input.Field
                ref={searchField}
                id="searchField"
                placeholder="Buscar Filmes, Séries e Celebridades"
                name="query"
                value={searchQuery}
                onChange={handleOnChange}
              />
              <Input.RightElement>
                <MdIcon.MdClose
                  className="cursor-pointer"
                  size={24}
                  onClick={clearSearchQuery}
                />
              </Input.RightElement>
            </Input.Group>
          </Input.Root>
        </form>
      </div>

      {/* search bar results suggestions */}
      <SearchBarSuggestions />
    </div>
  );
};
