import { SearchForm, SearchSuggestions } from '@/components/search';

import { useHeaderContext } from '.';

export const HeaderSearchBar = () => {
  const { isSearchBarVisible } = useHeaderContext();
  const isVisible = isSearchBarVisible ? 'absolute' : 'hidden';

  return (
    <div id="amdbSearchBar" className={`${isVisible} w-full bg-white`}>
      <SearchForm />
      <SearchSuggestions />
    </div>
  );
};
