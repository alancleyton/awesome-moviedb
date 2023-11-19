import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as MdIcon from 'react-icons/md';

import { appImages } from '@/constants';
import { Container, Menu, Button } from '@/components';

import { HeaderNavbarProps } from './header-types';

import HeaderNavbarSearch from './header-navbar-search';

export const HeaderNavbar = ({ onOpen }: HeaderNavbarProps) => {
  const [onMobileSearch, setOnMobileSearch] = useState<boolean>(false);

  return (
    <nav className="bg-dark relative" role="navigation">
      <Container>
        <Menu>
          {!onMobileSearch && (
            <Menu.Item alignment="left">
              <Link to="/">
                <figure className="h-7 w-11 flex items-center justify-center rounded bg-darkSlateBlue">
                  <img src={appImages.LOGO_BRAND_MD} alt="logotipo" />
                </figure>
              </Link>
            </Menu.Item>
          )}

          <Menu.Item alignment="left" filled>
            <HeaderNavbarSearch
              serchOnMobile={onMobileSearch}
              onToggleSerchOnMobile={setOnMobileSearch}
            />
          </Menu.Item>

          <Menu.Item alignment="right" collapse>
            <div className="flex items-center gap-2">
              <Button variant="secondary" size="sm">
                <Link to="/movies">Filmes</Link>
              </Button>

              <Button variant="secondary" size="sm">
                <Link to="/shows">Programas de TV</Link>
              </Button>

              <Button variant="secondary" size="sm">
                <Link to="/people">Celebridades</Link>
              </Button>
            </div>
          </Menu.Item>

          <Menu.Item collapse>
            <span className="h-full w-hr border border-solid border-dark600">
              &nbsp;
            </span>
          </Menu.Item>

          <Menu.Item>
            <Button variant="secondary" size="sm" onClick={onOpen}>
              <Button.Icon>
                <MdIcon.MdMenu size={24} />
              </Button.Icon>
              <span>Menu</span>
            </Button>
          </Menu.Item>
        </Menu>
      </Container>
    </nav>
  );
};
