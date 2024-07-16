import { useState } from 'react';
import { Drawer } from '@alancleyton67/awesome-ui';

import { withResize, WithResizeProps } from '../../../hoc/withResize';

import { Topbar } from '../topbar';
import { Sidenav } from '../sidenav';

type HeaderProps = WithResizeProps;

const _Header = ({ windowSize }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const openDrawer = () => setIsOpen(true);
  const closeDrawer = () => setIsOpen(false);
  const drawerSize = windowSize && windowSize <= 768 ? 'sm' : 'full';

  return (
    <header id="amdbHeader" className="amdb-header">
      <Topbar onOpenDrawer={openDrawer} />
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
