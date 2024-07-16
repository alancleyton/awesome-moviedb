import { Navbar, Button } from '@alancleyton67/awesome-ui';
import * as MdIcon from 'react-icons/md';

import { logoImages } from '@/constants/images';

interface TopbarProps {
  onOpenDrawer: () => void;
}

export const Topbar = ({ onOpenDrawer }: TopbarProps) => (
  <div id="amdbTopbar" className="amdb-topbar bg-gray-90">
    <div className="mx-auto w-full max-w-6xl">
      <Navbar.Root variant="secondary">
        <Navbar.Brand href="/">
          <figure className="h-7 w-11 flex items-center justify-center rounded bg-slate">
            <img src={logoImages.LOGO_BRAND_MD} alt="logotipo" />
          </figure>
        </Navbar.Brand>

        {/* search button, used to show hidden input at navbar bottom  */}
        <Navbar.Nav>
          <Navbar.NavItems>
            <Navbar.NavItem>
              <Button variant="secondary">
                <MdIcon.MdSearch className="text-gray900" size={24} />
              </Button>
            </Navbar.NavItem>
          </Navbar.NavItems>
        </Navbar.Nav>

        <Navbar.Toggler alignment="right" onClick={onOpenDrawer}>
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
              <Button variant="secondary" onPress={onOpenDrawer}>
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
