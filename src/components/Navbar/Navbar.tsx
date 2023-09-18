import React from 'react';
import { Link } from 'react-router-dom';
import * as MdIcon from 'react-icons/md';

import logoBrand from '@/assets/images/logo-brand.png';

import { Container } from '@/components/Container';

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
          <Link className="navbar-navigation-menu-item" to="/movies">
            Filmes
          </Link>
          <Link className="navbar-navigation-menu-item" to="/shows">
            Programas de TV
          </Link>
          <Link className="navbar-navigation-menu-item" to="/peoples">
            Celebridades
          </Link>
        </div>

        <span className="navbar-separator">&nbsp;</span>

        <button
          className="navbar-navigation-menu-item"
          type="button"
          onClick={onOpenMenu}
        >
          <MdIcon.MdMenu className="mr-3" size={24} />
          Menu
        </button>
      </div>
    </Container>
  </nav>
);
