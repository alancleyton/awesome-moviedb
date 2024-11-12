import { useEffect, useCallback, useState, useRef, ChangeEvent } from 'react';
import { useDebounce } from 'use-debounce';
import { Input, Menu, Button } from '@alancleyton67/awesome-ui';
import { useTranslation } from 'react-i18next';
import * as MdIcon from 'react-icons/md';

import { useHeader } from '@/components/ui/header';
import { When } from '@/components/when';
import { useAppDispatch, useAppSelector } from '@/hooks/useStore';
import { search } from '@/store/search/actions';
import { Selection } from '@/types/menu';
import { SearchCategory } from '@/types/search';
import { cn } from '@/utils/cn';
import { SearchSuggestions } from '../search-suggestions';

export const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);
  const [selectedSearchCategory, setSelectedSearchCategory] =
    useState<Selection>(new Set(['multi']));
  const [searchCategory, setSearchCategory] = useState<SearchCategory>('multi');
  const [debouncedSearchQuery] = useDebounce(searchQuery, 500);
  const searchField = useRef<HTMLInputElement>(null);
  const { searchResult } = useAppSelector(state => state.search);
  const dispatch = useAppDispatch();
  const { isSearchBarVisible } = useHeader();
  const { t } = useTranslation();

  const MENU_LABEL = {
    multi: t('search.menu.label.multi'),
    movie: t('search.menu.label.movie'),
    tv: t('search.menu.label.tv'),
    person: t('search.menu.label.person'),
  };

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const fetchSearchResults = useCallback(
    (query: string) => {
      dispatch(search(query, searchCategory));
    },
    [dispatch, searchCategory],
  );

  const clearSearchQuery = () => {
    setSearchQuery('');
    searchField.current?.focus();
  };

  const onSelectSearchCategory = (key: Selection) => {
    const keyValue = [...key].join(', ') as SearchCategory;
    if (keyValue) {
      setSelectedSearchCategory(key);
      setSearchCategory(keyValue);
    }
  };

  useEffect(() => {
    if (debouncedSearchQuery) fetchSearchResults(debouncedSearchQuery);
  }, [fetchSearchResults, debouncedSearchQuery]);

  return (
    <div
      id="searchBar"
      data-testid="searchBar"
      className={cn(
        'w-full bg-white',
        isSearchBarVisible ? 'absolute' : 'hidden',
      )}
    >
      <div id="searchBarForm" className="mx-auto w-full max-w-6xl p-4">
        <form action="/search">
          <Input isFull variant="unstyled">
            <Input.Group addonLeft elementRight>
              <Input.LeftAddon>
                <Menu
                  id="searchCategorySelector"
                  isOpen={open}
                  onOpenChange={setOpen}
                  selectionMode="single"
                  selectedKeys={selectedSearchCategory}
                  defaultSelectedKeys={['multi']}
                  onSelectionChange={onSelectSearchCategory}
                  label={
                    <Button variant="card">
                      {MENU_LABEL[searchCategory]}
                      {open ? (
                        <MdIcon.MdArrowDropUp size={24} />
                      ) : (
                        <MdIcon.MdArrowDropDown size={24} />
                      )}
                    </Button>
                  }
                >
                  <Menu.Item id="multi">
                    <div className="flex items-center gap-5">
                      <MdIcon.MdSearch size={24} />
                      {t('search.menu.items.0.text')}
                    </div>
                  </Menu.Item>
                  <Menu.Item id="movie">
                    <div className="flex items-center gap-5">
                      <MdIcon.MdLocalMovies size={24} />
                      {t('search.menu.items.1.text')}
                    </div>
                  </Menu.Item>
                  <Menu.Item id="tv">
                    <div className="flex items-center gap-5">
                      <MdIcon.MdTv size={24} />
                      {t('search.menu.items.2.text')}
                    </div>
                  </Menu.Item>
                  <Menu.Item id="person">
                    <div className="flex items-center gap-5">
                      <MdIcon.MdPeopleAlt size={24} />
                      {t('search.menu.items.3.text')}
                    </div>
                  </Menu.Item>
                  <Menu.Separator />
                </Menu>
              </Input.LeftAddon>
              <Input.Field
                ref={searchField}
                id="searchField"
                role="searchbox"
                data-testid="searchField"
                placeholder={t('search.search_bar.placeholder')}
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
          </Input>
        </form>
      </div>

      <When condition={searchQuery && searchResult}>
        <SearchSuggestions />
      </When>
    </div>
  );
};
