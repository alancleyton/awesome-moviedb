import { useState, useMemo, useCallback } from 'react';

import { SearchBar } from '@/components/search/search-bar';
import { Navbar } from '@/components/ui/navbar';
import { Sidenav } from '@/components/ui/sidenav';

import { HeaderContext, HeaderContextValue } from '.';

export const Header = () => {
  const [isSearchBarVisible, setIsSearchBarVisible] = useState<boolean>(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const setSearchBarVisible = useCallback((isVisible: boolean) => {
    setIsSearchBarVisible(isVisible);
  }, []);

  const setDrawerOpen = useCallback((isOpen: boolean) => {
    setIsDrawerOpen(isOpen);
  }, []);

  const contextValue = useMemo<HeaderContextValue>(
    () => ({
      isSearchBarVisible,
      setSearchBarVisible,
      isDrawerOpen,
      setDrawerOpen,
    }),
    [isSearchBarVisible, setSearchBarVisible, isDrawerOpen, setDrawerOpen],
  );

  return (
    <HeaderContext.Provider value={contextValue}>
      <header id="amdbHeader" className="amdb-header">
        <Navbar />
        <SearchBar />
        <Sidenav />
      </header>
    </HeaderContext.Provider>
  );
};
