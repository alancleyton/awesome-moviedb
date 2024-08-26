import * as MdIcon from 'react-icons/md';
import { Button, Drawer } from '@alancleyton67/awesome-ui';

import { logoImages } from '@/constants/images';
import { withResize, WithResizeProps } from '@/hoc/withResize';

import { useHeader } from '.';

type HeaderSidenavProps = WithResizeProps;

const SIDENAV_ITEMS = [
  {
    title: 'Séries',
    icon: <MdIcon.MdTv className="mr-4" size={24} />,
    links: [
      {
        name: 'Séries Populares',
      },
      {
        name: 'Séries em exibição hoje',
      },
      {
        name: 'Séries Na TV',
      },
      {
        name: 'Séries mais bem avaliadas',
      },
    ],
  },
  {
    title: 'Filmes',
    icon: <MdIcon.MdLocalMovies className="mr-4" size={24} />,
    links: [
      {
        name: 'Filmes Populares',
      },
      {
        name: 'Filmes em cartaz',
      },
      {
        name: 'Próximas estreias',
      },
      {
        name: 'Filmes mais bem avaliados',
      },
    ],
  },
  {
    title: 'Celebridades',
    icon: <MdIcon.MdPeopleAlt className="mr-4" size={24} />,
    links: [
      {
        name: 'Celebridades populares',
      },
      {
        name: 'Celebridades nascidas hoje',
      },
    ],
  },
];

const _HeaderSidenav = ({ windowSize }: HeaderSidenavProps) => {
  const drawerSize = windowSize && windowSize <= 768 ? 'sm' : 'full';
  const { isDrawerOpen, setDrawerOpen } = useHeader();

  const closeDrawer = () => setDrawerOpen(false);

  return (
    <Drawer
      open={isDrawerOpen}
      onClose={closeDrawer}
      placement="right"
      size={drawerSize}
    >
      <Drawer.Content>
        <aside
          id="amdbHeaderSidenav"
          className="amdb-header-sidenav w-full h-full bg-gray-90 overflow-auto"
        >
          <div className="mx-auto w-full max-w-6xl py-8 px-4">
            {/* sidenav header */}
            <div className="flex items-center">
              {windowSize && windowSize >= 768 && (
                <a href="/" className="mr-auto">
                  <figure className="h-9 w-12 flex items-center justify-center rounded bg-slate">
                    <img src={logoImages.LOGO_BRAND_MD} alt="logotipo" />
                  </figure>
                </a>
              )}

              <Button
                className="ml-auto"
                variant="secondary"
                onPress={closeDrawer}
              >
                <MdIcon.MdClose size={28} />
              </Button>
            </div>

            {/* sidenav items */}
            <div className="mt-7">
              <div className="flex items-start flex-wrap gap-10">
                {SIDENAV_ITEMS.map(item => (
                  <div key={item.title}>
                    <h4 className="flex items-center font-semiBold text-xl font-oswald text-yellow mb-4">
                      {item.icon}
                      {item.title}
                    </h4>

                    <ul className="flex flex-col items-start gap-4">
                      {item.links.map(link => (
                        <li
                          className="font-normal text-lg font-roboto text-gray-20 hover:text-white cursor-pointer ml-8  hover:underline"
                          key={link.name}
                        >
                          {link.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </Drawer.Content>
    </Drawer>
  );
};

export const HeaderSidenav = withResize(_HeaderSidenav);
