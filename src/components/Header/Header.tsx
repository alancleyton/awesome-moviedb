import React from 'react';
import { Link } from 'react-router-dom';
import * as MdIcon from 'react-icons/md';

import logoBrand from '@/assets/images/logo-brand.png';

import { Container } from '@/components/Container';

import './Header.scss';

export const Header = (): JSX.Element => (
  <header className="amdb header">
    <Container>
      <nav className="amdb navigation">
        <div className="amdb navigation-logo">
          <Link className="amdb logo" to="/">
            <img src={logoBrand} alt="logotipo" />
          </Link>
        </div>

        <div className="amdb navigation-search">&nbsp;</div>

        <div className="amdb navigation-items colapsed">
          <Link className="amdb navigation-button" to="/movies">
            Filmes
          </Link>
          <Link className="amdb navigation-button" to="/shows">
            Programas de TV
          </Link>
          <Link className="amdb navigation-button" to="/peoples">
            Celebridades
          </Link>
        </div>

        <span className="amdb navigation-separator">&nbsp;</span>

        <div className="amdb navigation-menu">
          <button className="amdb navigation-button" type="button">
            <MdIcon.MdMenu className="mr-3" size={24} />
            Menu
          </button>
        </div>
      </nav>
    </Container>
  </header>
);
