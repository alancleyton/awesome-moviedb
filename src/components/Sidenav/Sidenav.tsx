import React from 'react';
import * as MdIcon from 'react-icons/md';

import { Button } from '@/components/button';
import { Drawer } from '@/components/drawer';

import './Sidenav.scss';

type Props = {
  menuOpen: boolean;
  onCloseMenu: () => void;
};

export const Sidenav: React.FC<Props> = ({ menuOpen, onCloseMenu }) => (
  <Drawer.Root open={menuOpen} onClose={onCloseMenu}>
    <Drawer.Content>
      <nav
        className="sidenav"
        role="navigation"
        aria-label="amdb side navigation menu"
      >
        <div className="sidenav-header">
          <Button variant="secondary" rounded onClick={onCloseMenu}>
            <Button.Icon>
              <MdIcon.MdClose size={28} />
            </Button.Icon>
          </Button>
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
              <li className="sidenav-menu-item-link">Filmes mais populares</li>
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
              <li className="sidenav-menu-item-link">Séries mais populares</li>
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
    </Drawer.Content>
    <Drawer.Backdrop />
  </Drawer.Root>
);
