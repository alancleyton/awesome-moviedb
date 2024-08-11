import {
  useState,
  useMemo,
  useCallback,
  useContext,
  createContext,
  ReactNode,
} from 'react';

interface HeaderContextValue {
  isSearchBarVisible: boolean;
  setSearchBarVisible: (isVisible: boolean) => void;
  isDrawerOpen: boolean;
  setDrawerOpen: (isOpen: boolean) => void;
}

const HeaderContext = createContext<HeaderContextValue>({
  isSearchBarVisible: false,
  setSearchBarVisible: () => {},
  isDrawerOpen: false,
  setDrawerOpen: () => {},
});

export const useHeader = () => useContext(HeaderContext);

export const Headerprovider = ({ children }: { children: ReactNode }) => {
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
      {children}
    </HeaderContext.Provider>
  );
};
