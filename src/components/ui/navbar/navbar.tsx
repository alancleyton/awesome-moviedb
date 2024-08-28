import { Navbar as AweNavbar, Button } from '@alancleyton67/awesome-ui';
import * as MdIcon from 'react-icons/md';

import { logoImages } from '@/constants/images';
import { useHeader } from '@/components/ui/header';

import { NavbarLanguageSelector } from './navbar-language-selector';

const ToggleSearchBarButtonIcon = ({ isVisible }: { isVisible: boolean }) => {
  if (isVisible) {
    return <MdIcon.MdClose size={24} />;
  }
  return <MdIcon.MdSearch size={24} />;
};

export const Navbar = () => {
  const {
    isSearchBarVisible,
    setSearchBarVisible,
    isDrawerOpen,
    setDrawerOpen,
  } = useHeader();

  const toggleSearchBar = () => setSearchBarVisible(!isSearchBarVisible);

  const toggleDrawer = () => setDrawerOpen(!isDrawerOpen);

  return (
    <div id="amdbNavbar" className="amdb-navbar bg-gray-90">
      <div className="mx-auto w-full max-w-6xl">
        <AweNavbar variant="secondary">
          <AweNavbar.Brand href="/">
            <figure className="h-7 w-11 flex items-center justify-center rounded bg-slate">
              <img src={logoImages.LOGO_BRAND_MD} alt="logotipo" />
            </figure>
          </AweNavbar.Brand>

          <AweNavbar.Nav>
            <AweNavbar.NavItems>
              <AweNavbar.NavItem>
                <Button
                  className="px-3"
                  variant="secondary"
                  onPress={toggleSearchBar}
                >
                  <ToggleSearchBarButtonIcon isVisible={isSearchBarVisible} />
                </Button>
              </AweNavbar.NavItem>
              <AweNavbar.NavItem>
                <NavbarLanguageSelector />
              </AweNavbar.NavItem>
            </AweNavbar.NavItems>
          </AweNavbar.Nav>

          <AweNavbar.Toggler alignment="right" onClick={toggleDrawer}>
            <MdIcon.MdMenu size={24} />
          </AweNavbar.Toggler>

          <AweNavbar.Nav collapse alignment="right">
            <AweNavbar.NavItems>
              <AweNavbar.NavItem>
                <Button variant="secondary">Filmes</Button>
              </AweNavbar.NavItem>
              <AweNavbar.NavItem>
                <Button variant="secondary">Programas de TV</Button>
              </AweNavbar.NavItem>
              <AweNavbar.NavItem>
                <Button variant="secondary">Celebridades</Button>
              </AweNavbar.NavItem>
            </AweNavbar.NavItems>
          </AweNavbar.Nav>

          <AweNavbar.Nav collapse>
            <span className="h-full w-hr border border-solid border-gray-70">
              &nbsp;
            </span>
          </AweNavbar.Nav>

          <AweNavbar.Nav collapse>
            <AweNavbar.NavItems>
              <AweNavbar.NavItem>
                <Button variant="secondary" onPress={toggleDrawer}>
                  <MdIcon.MdMenu size={24} />
                  Menu
                </Button>
              </AweNavbar.NavItem>
            </AweNavbar.NavItems>
          </AweNavbar.Nav>
        </AweNavbar>
      </div>
    </div>
  );
};
