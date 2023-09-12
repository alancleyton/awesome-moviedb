import React from 'react';
import { Container } from '@/components/Container';
import {
  MdLocalMovies,
  MdScreenshotMonitor,
  MdGroups,
  MdMenu,
} from 'react-icons/md';
import logoBrand from '@/assets/images/logo-brand.png';
import './Header.css';

export const Header = (): JSX.Element => (
  <header className="amdb-header">
    <Container>
      <nav className="amdb-navigation">
        <div className="amdb-navigation-logo">
          <a className="amdb-logo" href="/">
            <img src={logoBrand} alt="logotipo" />
          </a>
        </div>

        <div className="amdb-navigation-search">&nbsp;</div>

        <div className="amdb-navigation-items">
          <a className="amdb-navigation-button" href="/movies">
            <MdLocalMovies className="mr-3" size={24} />
            Filmes
          </a>
          <a className="amdb-navigation-button" href="/shows">
            <MdScreenshotMonitor className="mr-3" size={24} />
            Programas de TV
          </a>
          <a className="amdb-navigation-button" href="/peoples">
            <MdGroups className="mr-3" size={24} />
            Celebridades
          </a>
        </div>

        <span className="amdb-navigation-separator">&nbsp;</span>

        <div className="amdb-navigation-menu">
          <a className="amdb-navigation-button" href=" ">
            <MdMenu className="mr-3" size={24} />
            Menu
          </a>
        </div>
      </nav>
    </Container>
  </header>
);
