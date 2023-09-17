import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as MdIcon from 'react-icons/md';

import logoBrand from '@/assets/images/logo-brand.png';

import { Container } from '@/components/Container';
import { Drawer } from '@/components/Drawer';

import './Header.scss';

export const Header = (): JSX.Element => {
  const [toggleDrawer, setToggleDrawer] = useState<boolean>(false);

  const onOpenDrawer = () => setToggleDrawer(true);
  const onCloseDrawer = () => setToggleDrawer(false);

  return (
    <nav
      className="navbar"
      role="presentation"
      aria-label="amdb navigation menu"
    >
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
            onClick={onOpenDrawer}
          >
            <MdIcon.MdMenu className="mr-3" size={24} />
            Menu
          </button>
        </div>
      </Container>

      <Drawer open={toggleDrawer} onClose={onCloseDrawer}>
        <nav
          className="sidenav"
          role="navigation"
          aria-label="amdb side navigation menu"
        >
          <div className="sidenav-header">
            <button
              className="sidenav-header-close-button"
              type="button"
              onClick={onCloseDrawer}
            >
              <MdIcon.MdClose size={28} />
            </button>
          </div>

          <div className="sidenav-menu">
            <div className="sidenav-menu-item">
              <h4 className="sidenav-menu-item-title">
                <MdIcon.MdLocalMovies className="mr-4" size={28} />
                Filmes
              </h4>
              <ul className="sidenav-menu-item-links">
                <li className="sidenav-menu-item-link">
                  Buscar filmes por gênero
                </li>
                <li className="sidenav-menu-item-link">
                  Filmes mais populares
                </li>
                <li className="sidenav-menu-item-link">
                  Filmes em cartaz nos cinemas
                </li>
                <li className="sidenav-menu-item-link">
                  Próximas estreias nos cinemas
                </li>
              </ul>
            </div>

            <div className="sidenav-menu-item">
              <h4 className="sidenav-menu-item-title">
                <MdIcon.MdTv className="mr-4" size={28} />
                Programas de TV
              </h4>
              <ul className="sidenav-menu-item-links">
                <li className="sidenav-menu-item-link">
                  Buscar séries por gênero
                </li>
                <li className="sidenav-menu-item-link">
                  Buscar séries no streaming
                </li>
                <li className="sidenav-menu-item-link">
                  Séries mais populares
                </li>
                <li className="sidenav-menu-item-link">
                  Próximas estreias de séries
                </li>
              </ul>
            </div>

            <div className="sidenav-menu-item">
              <h4 className="sidenav-menu-item-title">
                <MdIcon.MdPeople className="mr-4" size={28} />
                Celebridades
              </h4>
              <ul className="sidenav-menu-item-links">
                <li className="sidenav-menu-item-link">
                  Celebridades nascidas hoje
                </li>
                <li className="sidenav-menu-item-link">
                  Celebridades mais populares
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </Drawer>
    </nav>
  );
};
