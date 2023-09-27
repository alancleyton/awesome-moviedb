import { Link } from 'react-router-dom';
import * as MdIcon from 'react-icons/md';

import { Container, Menu, Drawer, Field, Button } from '@/components';

import logoBrand from '@/assets/images/logo-brand.png';
import { useState } from 'react';

export const Header = () => {
  const [toggleDrawer, setToggleDrawer] = useState<boolean>(false);
  const onOpenDrawer = () => setToggleDrawer(true);
  const onCloseDrawer = () => setToggleDrawer(false);

  return (
    <header>
      <nav className="bg-dark" role="navigation">
        <Container>
          <Menu>
            <Menu.Item alignment="left" collapse>
              <Link to="/">
                <figure className="h-7 w-11 flex items-center justify-center rounded bg-darkSlateBlue">
                  <img src={logoBrand} alt="logotipo" />
                </figure>
              </Link>
            </Menu.Item>

            <Menu.Item alignment="left" filled>
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
              <Button variant="secondary" size="sm" onClick={onOpenDrawer}>
                <Button.Icon>
                  <MdIcon.MdMenu size={24} />
                </Button.Icon>
                <span className="tablet:block hidden">Menu</span>
              </Button>
            </Menu.Item>
          </Menu>
        </Container>
      </nav>

      <Drawer open={toggleDrawer} onClose={onCloseDrawer}>
        <Drawer.Content>
          <nav className="py-2 px-4 h-full w-full" role="navigation">
            <div className="h-9 flex items-center mb-6">
              <Button variant="secondary" rounded onClick={onCloseDrawer}>
                <Button.Icon>
                  <MdIcon.MdClose size={28} />
                </Button.Icon>
              </Button>
            </div>

            <div className="flex flex-col">
              <div className="mb-8">
                <h4 className="flex items-center font-semiBold text-lg font-heading text-yellow mb-4">
                  <MdIcon.MdLocalMovies className="mr-4" size={24} />
                  Programas de TV
                </h4>

                <ul className="flex flex-col items-start gap-4">
                  <li className="font-regular text-md font-sans cursor-pointer ml-8 hover:underline">
                    Buscar filmes por gênero
                  </li>
                  <li className="font-regular text-md font-sans cursor-pointer ml-8 hover:underline">
                    Filmes mais populares
                  </li>
                  <li className="font-regular text-md font-sans cursor-pointer ml-8 hover:underline">
                    Filmes em cartaz nos cinemas
                  </li>
                  <li className="font-regular text-md font-sans cursor-pointer ml-8 hover:underline">
                    Próximas estreias nos cinemas
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="flex items-center font-semiBold text-lg font-heading text-yellow mb-4">
                  <MdIcon.MdTv className="mr-4" size={24} />
                  Filmes
                </h4>

                <ul className="flex flex-col items-start gap-4">
                  <li className="font-regular text-md font-sans cursor-pointer ml-8 hover:underline">
                    Buscar séries por gênero
                  </li>
                  <li className="font-regular text-md font-sans cursor-pointer ml-8 hover:underline">
                    Buscar séries no streaming
                  </li>
                  <li className="font-regular text-md font-sans cursor-pointer ml-8 hover:underline">
                    Séries mais populares
                  </li>
                  <li className="font-regular text-md font-sans cursor-pointer ml-8 hover:underline">
                    Próximas estreias de séries
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="flex items-center font-semiBold text-lg font-heading text-yellow mb-4">
                  <MdIcon.MdPeople className="mr-4" size={24} />
                  Celebridades
                </h4>

                <ul className="flex flex-col items-start gap-4">
                  <li className="font-regular text-md font-sans cursor-pointer ml-8 hover:underline">
                    Celebridades nascidas hoje{' '}
                  </li>
                  <li className="font-regular text-md font-sans cursor-pointer ml-8 hover:underline">
                    Celebridades mais populares{' '}
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </Drawer.Content>
        <Drawer.Backdrop />
      </Drawer>
    </header>
  );
};
