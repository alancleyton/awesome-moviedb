import React from 'react';
import { Link } from 'react-router-dom';
import * as MdIcon from 'react-icons/md';

import logoBrand from '@/assets/images/logo-brand.png';

import { Container } from '@/components/Container';
import { Button } from '@/components/Button';

import './Navbar.scss';

type Props = {
  onOpenMenu: () => void;
};

export const Navbar: React.FC<Props> = ({ onOpenMenu }): JSX.Element => (
  <nav className="navbar" role="presentation" aria-label="amdb navigation menu">
    <Container>
      <div className="navbar-navigation">
        <div className="navbar-navigation-brand">
          <Link className="navbar-brand" to="/">
            <img src={logoBrand} alt="logotipo" />
          </Link>
        </div>

        <div className="navbar-navigation-search">&nbsp;</div>

        <div className="navbar-navigation-menu colapsed">
          <Button className="mx-2" variant="neutral" size="small">
            <Link to="/movies">Filmes</Link>
          </Button>

          <Button className="mx-2" variant="neutral" size="small">
            <Link to="/shows">Programas de TV</Link>
          </Button>

          <Button className="mx-2" variant="neutral" size="small">
            <Link to="/peoples">Celebridades</Link>
          </Button>
        </div>

        <span className="navbar-separator">&nbsp;</span>

        <Button variant="neutral" size="small" onClick={onOpenMenu}>
          <MdIcon.MdMenu className="mr-3" size={24} />
          Menu
        </Button>
      </div>
    </Container>
  </nav>
);
