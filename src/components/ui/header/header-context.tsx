import { useContext, createContext } from 'react';

export interface HeaderContextValue {
  isSearchBarVisible: boolean;
  setSearchBarVisible: (isVisible: boolean) => void;
  isDrawerOpen: boolean;
  setDrawerOpen: (isOpen: boolean) => void;
}

export const HeaderContext = createContext<HeaderContextValue>({
  isSearchBarVisible: false,
  setSearchBarVisible: () => {},
  isDrawerOpen: false,
  setDrawerOpen: () => {},
});

export const useHeader = () => useContext(HeaderContext);
