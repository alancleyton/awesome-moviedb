import React from 'react';
import { Link } from 'react-router-dom';
import * as MdIcon from 'react-icons/md';

import logoBrand from '@/assets/images/logo-brand.png';

import { Container } from '@/components/Container';
import { Button } from '@/components/button';
import { Field } from '@/components/Form/Field';
import { NavbarMenu } from './navbar-menu';

type Props = {
  onOpenMenu: () => void;
};

export const Navbar = ({ onOpenMenu }: Props) => (
  <nav
    className="h-10 w-full flex items-center bg-dark"
    role="presentation"
    aria-label="amdb navigation menu"
  >
    <Container>
      <NavbarMenu>
        <Link to="/">
          <NavbarMenu.Brand src={logoBrand} />
        </Link>

        <div className="flex-3">
          <Field
            id="searchField"
            type="text"
            placeholder="Buscar filme, série ou pessoa"
            icon={
              <MdIcon.MdSearch
                className="absolute top-2 right-3 text-gray900"
                size={24}
              />
            }
          />
        </div>

        <NavbarMenu.Items className="flex-2">
          <NavbarMenu.Item>
            <Button variant="secondary" size="sm">
              <Link to="/movies">Filmes</Link>
            </Button>
          </NavbarMenu.Item>

          <NavbarMenu.Item>
            <Button variant="secondary" size="sm">
              <Link to="/shows">Programas de TV</Link>
            </Button>
          </NavbarMenu.Item>

          <NavbarMenu.Item>
            <Button variant="secondary" size="sm">
              <Link to="/people">Celebridades</Link>
            </Button>
          </NavbarMenu.Item>
        </NavbarMenu.Items>

        <NavbarMenu.Separator />

        <Button variant="secondary" size="sm" onClick={onOpenMenu}>
          <Button.Icon>
            <MdIcon.MdMenu className="mr-3" size={24} />
          </Button.Icon>
          Menu
        </Button>
      </NavbarMenu>
    </Container>
  </nav>
);
