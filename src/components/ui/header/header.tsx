import { useState } from 'react';
import { Drawer } from '@alancleyton67/awesome-ui';

import { withResize, WithResizeProps } from '../../../hoc/withResize';

import { Topbar } from '../topbar';
import { Sidenav } from '../sidenav';
import { SearchBar } from '../../search/search-bar';

type HeaderProps = WithResizeProps;

const _Header = ({ windowSize }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isSearchBarVisible, setIsSearchBarVisible] = useState<boolean>(false);
  const drawerSize = windowSize && windowSize <= 768 ? 'sm' : 'full';

  const openDrawer = () => setIsOpen(true);

  const closeDrawer = () => setIsOpen(false);

  const toggleSearchBar = () => {
    setIsSearchBarVisible(!isSearchBarVisible);
  };

  return (
    <header id="amdbHeader" className="amdb-header">
      <Topbar
        onOpenDrawer={openDrawer}
        onToggleSearchBar={toggleSearchBar}
        isSearchBarVisible={isSearchBarVisible}
      />
      <SearchBar
        isVisible={isSearchBarVisible}
        onCloseSearchBar={() => setIsSearchBarVisible(false)}
      />
      <Drawer.Root
        open={isOpen}
        onClose={closeDrawer}
        placement="right"
        size={drawerSize}
      >
        <Drawer.Content>
          <Sidenav onCloseDrawer={closeDrawer} />
        </Drawer.Content>
      </Drawer.Root>
    </header>
  );
};

export const Header = withResize(_Header);
