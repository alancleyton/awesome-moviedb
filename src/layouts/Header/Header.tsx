import React, { useState } from 'react';

import { Navbar } from '@/components/Navbar';
import { Sidenav } from '@/components/Sidenav';

export const Header = (): JSX.Element => {
  const [toggleSideMenu, setToggleSideMenu] = useState<boolean>(false);
  const onOpenSideMenu = () => setToggleSideMenu(true);
  const onCloseSideMenu = () => setToggleSideMenu(false);

  return (
    <header>
      <Navbar onOpenMenu={onOpenSideMenu} />
      <Sidenav menuOpen={toggleSideMenu} onCloseMenu={onCloseSideMenu} />
    </header>
  );
};
