import { SearchBar } from '@/components/search/search-bar';

import { HeaderNavbar } from './header-navbar';
import { HeaderSidenav } from './header-sidenav';
import { Headerprovider } from '.';

export const Header = () => (
  <Headerprovider>
    <header id="amdbHeader" className="amdb-header">
      <HeaderNavbar />
      <SearchBar />
      <HeaderSidenav />
    </header>
  </Headerprovider>
);
