import { Loader } from '@/components/loader';
import { useAppSelector } from '@/hooks/useStore';
import { SearchSuggestionMedia } from './search-suggestion-media';

export const SearchSuggestions = () => {
  const { isSearching, searchResult, searchCategory } = useAppSelector(
    state => state.search,
  );

  return (
    <Loader isLoading={isSearching}>
      <ul id="searchSuggestions" data-testid="searchSuggestions" role="listbox">
        {searchResult.map((media, index) => (
          <li
            key={media.id + index}
            id="suggestionsListItem"
            className="list-item hover:bg-gray-10 [&:not(:last-child)]:border-b border-solid border-gray-10"
          >
            <SearchSuggestionMedia media={media} category={searchCategory} />
          </li>
        ))}
      </ul>
    </Loader>
  );
};
