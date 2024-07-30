import {
  useState,
  createContext,
  useContext,
  useMemo,
  useCallback,
} from 'react';
import { Drawer } from '@alancleyton67/awesome-ui';

import { SearchBar } from '@/components/search/search-bar';
import { withResize, WithResizeProps } from '@/hoc/withResize';

import { HeaderNavbar } from './header-navbar';
import { HeaderSidenav } from './header-sidenav';

type HeaderProps = WithResizeProps;

interface HeaderContextProps {
  isSearchBarVisible: boolean;
  onToggleSearchBar: () => void;
  isDrawerOpen: boolean;
  onToggleDrawer: () => void;
}

const HeaderContext = createContext<HeaderContextProps>({
  isSearchBarVisible: false,
  onToggleSearchBar: () => {},
  isDrawerOpen: false,
  onToggleDrawer: () => {},
});

export const useHeaderContext = () => useContext(HeaderContext);

const _Header = ({ windowSize }: HeaderProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [isSearchBarVisible, setIsSearchBarVisible] = useState<boolean>(false);
  const drawerSize = windowSize && windowSize <= 768 ? 'sm' : 'full';

  const onToggleSearchBar = useCallback(() => {
    setIsSearchBarVisible(!isSearchBarVisible);
  }, [setIsSearchBarVisible, isSearchBarVisible]);

  const onToggleDrawer = useCallback(() => {
    setIsDrawerOpen(!isDrawerOpen);
  }, [setIsDrawerOpen, isDrawerOpen]);

  const contextValue = useMemo(
    () => ({
      isSearchBarVisible,
      isDrawerOpen,
      onToggleSearchBar,
      onToggleDrawer,
    }),
    [isSearchBarVisible, isDrawerOpen, onToggleSearchBar, onToggleDrawer],
  );

  return (
    <HeaderContext.Provider value={contextValue}>
      <header id="amdbHeader" className="amdb-header">
        <HeaderNavbar />
        <SearchBar isVisible={isSearchBarVisible} />
        <Drawer.Root
          open={isDrawerOpen}
          onClose={onToggleDrawer}
          placement="right"
          size={drawerSize}
        >
          <Drawer.Content>
            <HeaderSidenav />
          </Drawer.Content>
        </Drawer.Root>
      </header>
    </HeaderContext.Provider>
  );
};

export const Header = withResize(_Header);
