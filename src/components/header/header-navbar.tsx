import { Link } from 'react-router-dom';
import * as MdIcon from 'react-icons/md';

import { appImages } from '@/constants';
import { Container, Menu, Input, Button } from '@/components';

import { HeaderNavbarProps } from './header-types';

export const HeaderNavbar = ({ onOpen }: HeaderNavbarProps) => (
  <nav className="bg-dark" role="navigation">
    <Container>
      <Menu>
        <Menu.Item alignment="left" collapse>
          <Link to="/">
            <figure className="h-7 w-11 flex items-center justify-center rounded bg-darkSlateBlue">
              <img src={appImages.LOGO_BRAND_MD} alt="logotipo" />
            </figure>
          </Link>
        </Menu.Item>

        <Menu.Item alignment="left" filled>
          <Input.Group>
            <Input.Icon alignment="left">
              <MdIcon.MdSearch className="text-gray900" size={24} />
            </Input.Icon>
            <Input
              className="pl-7"
              type="text"
              placeholder="Busque filmes, séries de TV, celebridades, e mais..."
            />
          </Input.Group>
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
            <span className="tablet:block hidden">Menu</span>
          </Button>
        </Menu.Item>
      </Menu>
    </Container>
  </nav>
);
