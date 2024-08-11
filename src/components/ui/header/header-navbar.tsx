import { Navbar, Button } from '@alancleyton67/awesome-ui';
import * as MdIcon from 'react-icons/md';

import { logoImages } from '@/constants/images';

import { useHeader } from '.';

interface ToggleSearchBarButtonIconProps {
  isVisible: boolean;
}

const ToggleSearchBarButtonIcon = ({
  isVisible,
}: ToggleSearchBarButtonIconProps) => {
  if (isVisible) {
    return <MdIcon.MdClose size={24} />;
  }
  return <MdIcon.MdSearch size={24} />;
};

export const HeaderNavbar = () => {
  const {
    isSearchBarVisible,
    setSearchBarVisible,
    isDrawerOpen,
    setDrawerOpen,
  } = useHeader();

  const toggleSearchBar = () => setSearchBarVisible(!isSearchBarVisible);

  const toggleDrawer = () => setDrawerOpen(!isDrawerOpen);

  return (
    <div id="amdbHeaderNavbar" className="amdb-header-navbar bg-gray-90">
      <div className="mx-auto w-full max-w-6xl">
        <Navbar.Root variant="secondary">
          <Navbar.Brand href="/">
            <figure className="h-7 w-11 flex items-center justify-center rounded bg-slate">
              <img src={logoImages.LOGO_BRAND_MD} alt="logotipo" />
            </figure>
          </Navbar.Brand>

          {/* navbar action buttons */}
          <Navbar.Nav>
            <Navbar.NavItems>
              <Navbar.NavItem>
                <Button
                  className="px-3"
                  variant="secondary"
                  onPress={toggleSearchBar}
                >
                  <ToggleSearchBarButtonIcon isVisible={isSearchBarVisible} />
                </Button>
              </Navbar.NavItem>
              <Navbar.NavItem>
                <Button className="px-3" variant="secondary">
                  PT
                </Button>
              </Navbar.NavItem>
            </Navbar.NavItems>
          </Navbar.Nav>

          <Navbar.Toggler alignment="right" onClick={toggleDrawer}>
            <MdIcon.MdMenu size={24} />
          </Navbar.Toggler>

          <Navbar.Nav collapse alignment="right">
            <Navbar.NavItems>
              <Navbar.NavItem>
                <Button variant="secondary">Filmes</Button>
              </Navbar.NavItem>
              <Navbar.NavItem>
                <Button variant="secondary">Programas de TV</Button>
              </Navbar.NavItem>
              <Navbar.NavItem>
                <Button variant="secondary">Celebridades</Button>
              </Navbar.NavItem>
            </Navbar.NavItems>
          </Navbar.Nav>

          {/* navbar vertical divider */}
          <Navbar.Nav collapse>
            <span className="h-full w-hr border border-solid border-gray-70">
              &nbsp;
            </span>
          </Navbar.Nav>

          <Navbar.Nav collapse>
            <Navbar.NavItems>
              <Navbar.NavItem>
                <Button variant="secondary" onPress={toggleDrawer}>
                  <MdIcon.MdMenu size={24} />
                  Menu
                </Button>
              </Navbar.NavItem>
            </Navbar.NavItems>
          </Navbar.Nav>
        </Navbar.Root>
      </div>
    </div>
  );
};
