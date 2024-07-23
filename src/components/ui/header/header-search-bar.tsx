import { SearchForm, SearchSuggestions } from '@/components/search';

import { useHeaderContext } from '.';

export const HeaderSearchBar = () => {
  const { isSearchBarVisible, onToggleSearchBar } = useHeaderContext();
  const isVisible = isSearchBarVisible ? 'absolute' : 'hidden';

  return (
    <div id="amdbSearchBar" className={`${isVisible} w-full bg-white`}>
      <SearchForm onClose={onToggleSearchBar} />
      <SearchSuggestions />
    </div>
  );
};
