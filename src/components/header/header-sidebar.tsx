import * as MdIcon from 'react-icons/md';

import { Drawer, Button } from '@/components';

import { HeaderSidebarProps } from './header-types';

export const HeaderSidebar = ({ isOpen, onClose }: HeaderSidebarProps) => (
  <Drawer open={isOpen} onClose={onClose}>
    <Drawer.Content>
      <nav
        className="py-2 px-4 h-full w-full overflow-x-auto"
        role="navigation"
      >
        <div className="h-9 flex items-center mb-6">
          <Button variant="secondary" rounded onClick={onClose}>
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
              <li className="font-regular text-md font-sans text-gray300 hover:text-white cursor-pointer ml-8  hover:underline">
                Buscar filmes por gênero
              </li>
              <li className="font-regular text-md font-sans text-gray300 hover:text-white cursor-pointer ml-8 hover:underline">
                Filmes mais populares
              </li>
              <li className="font-regular text-md font-sans text-gray300 hover:text-white cursor-pointer ml-8 hover:underline">
                Filmes em cartaz nos cinemas
              </li>
              <li className="font-regular text-md font-sans text-gray300 hover:text-white cursor-pointer ml-8 hover:underline">
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
              <li className="font-regular text-md font-sans text-gray300 hover:text-white cursor-pointer ml-8 hover:underline">
                Buscar séries por gênero
              </li>
              <li className="font-regular text-md font-sans text-gray300 hover:text-white cursor-pointer ml-8 hover:underline">
                Buscar séries no streaming
              </li>
              <li className="font-regular text-md font-sans text-gray300 hover:text-white cursor-pointer ml-8 hover:underline">
                Séries mais populares
              </li>
              <li className="font-regular text-md font-sans text-gray300 hover:text-white cursor-pointer ml-8 hover:underline">
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
              <li className="font-regular text-md font-sans text-gray300 hover:text-white cursor-pointer ml-8 hover:underline">
                Celebridades nascidas hoje{' '}
              </li>
              <li className="font-regular text-md font-sans text-gray300 hover:text-white cursor-pointer ml-8 hover:underline">
                Celebridades mais populares{' '}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Drawer.Content>
    <Drawer.Backdrop />
  </Drawer>
);
