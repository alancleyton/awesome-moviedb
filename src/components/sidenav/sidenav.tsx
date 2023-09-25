import React from 'react';
import * as MdIcon from 'react-icons/md';

import { Button } from '@/components/button';
import { Drawer } from '@/components/drawer';

import { SidenavMenu } from './sidenav-menu';
import { type SidenavProps } from './sidenav-types';

export const Sidenav = ({
  menuOpen,
  onCloseMenu,
}: SidenavProps): JSX.Element => (
  <Drawer open={menuOpen} onClose={onCloseMenu}>
    <Drawer.Content>
      <nav
        className="py-2 px-4 h-full w-full"
        role="navigation"
        aria-label="amdb side navigation menu"
      >
        <div className="h-9 flex items-center mb-6">
          <Button variant="secondary" rounded onClick={onCloseMenu}>
            <Button.Icon>
              <MdIcon.MdClose size={28} />
            </Button.Icon>
          </Button>
        </div>

        <SidenavMenu>
          <SidenavMenu.Item className="mb-8">
            <SidenavMenu.Title className="mb-4">
              <MdIcon.MdLocalMovies className="mr-4" size={24} />
              Filmes
            </SidenavMenu.Title>

            <SidenavMenu.Links>
              <SidenavMenu.Link>Buscar filmes por gênero</SidenavMenu.Link>
              <SidenavMenu.Link>Filmes mais populares</SidenavMenu.Link>
              <SidenavMenu.Link>Filmes em cartaz nos cinemas</SidenavMenu.Link>
              <SidenavMenu.Link>Próximas estreias nos cinemas</SidenavMenu.Link>
            </SidenavMenu.Links>
          </SidenavMenu.Item>

          <SidenavMenu.Item className="mb-8">
            <SidenavMenu.Title className="mb-4">
              <MdIcon.MdTv className="mr-4" size={24} />
              Programas de TV
            </SidenavMenu.Title>

            <SidenavMenu.Links>
              <SidenavMenu.Link>Buscar séries por gênero</SidenavMenu.Link>
              <SidenavMenu.Link>Buscar séries no streaming</SidenavMenu.Link>
              <SidenavMenu.Link>Séries mais populares</SidenavMenu.Link>
              <SidenavMenu.Link>Próximas estreias de séries</SidenavMenu.Link>
            </SidenavMenu.Links>
          </SidenavMenu.Item>

          <SidenavMenu.Item>
            <SidenavMenu.Title className="mb-4">
              <MdIcon.MdPeople className="mr-4" size={24} />
              Celebridades
            </SidenavMenu.Title>

            <SidenavMenu.Links>
              <SidenavMenu.Link>Celebridades nascidas hoje</SidenavMenu.Link>
              <SidenavMenu.Link>Celebridades mais populares</SidenavMenu.Link>
            </SidenavMenu.Links>
          </SidenavMenu.Item>
        </SidenavMenu>
      </nav>
    </Drawer.Content>
    <Drawer.Backdrop />
  </Drawer>
);
