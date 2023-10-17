import React, { useState } from 'react';
import * as MdIcon from 'react-icons/md';

import { Input } from '@/components';
import { HeaderNavbarSearchSuggestions } from './header-navbar-search-suggestions';

export const HeaderNavbarSearch = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const showSearchSuggestions = searchValue && isFocused;

  return (
    <form action="submit" className="relative w-full">
      <Input.Group>
        <Input.Icon alignment="left">
          <MdIcon.MdSearch className="text-gray900" size={24} />
        </Input.Icon>

        <Input
          className="pl-7"
          type="text"
          placeholder="Busque filmes, séries de TV, celebridades, e mais..."
          value={searchValue}
          onChange={event => setSearchValue(event.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </Input.Group>

      {showSearchSuggestions && <HeaderNavbarSearchSuggestions />}
    </form>
  );
};
