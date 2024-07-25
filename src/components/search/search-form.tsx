import { useEffect, useCallback, useState, ChangeEvent } from 'react';
import { useDebounce } from 'use-debounce';
import { Input } from '@alancleyton67/awesome-ui';
import * as MdIcon from 'react-icons/md';

import { useAppDispatch } from '@/hooks/useStore';
import { searchMovies } from '@/store/movies/actions';

interface SearchFormProps {
  onClose: () => void;
}

export const SearchForm = ({ onClose }: SearchFormProps) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [debouncedSearchQuery] = useDebounce(searchQuery, 500);
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

  useEffect(() => {
    if (debouncedSearchQuery) fetchSearchResults(debouncedSearchQuery);
  }, [fetchSearchResults, debouncedSearchQuery]);

  return (
    <div id="searchForm" className="mx-auto w-full max-w-6xl p-4">
      <form action="/search">
        <Input.Root isFull variant="unstyled">
          <Input.Group elementRight>
            <Input.Field
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
                onClick={onClose}
              />
            </Input.RightElement>
          </Input.Group>
        </Input.Root>
      </form>
    </div>
  );
};
