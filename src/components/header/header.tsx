import { useState } from 'react';

import { HeaderNavbar } from './header-navbar';
import { HeaderSidebar } from './header-sidebar';

export const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  const onOpenSidebar = () => setOpen(true);
  const onCloseSidebar = () => setOpen(false);

  return (
    <header>
      <HeaderNavbar onOpen={onOpenSidebar} />
      <HeaderSidebar isOpen={open} onClose={onCloseSidebar} />
    </header>
  );
};
