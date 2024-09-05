import * as MdIcon from 'react-icons/md';
import { Button, Drawer } from '@alancleyton67/awesome-ui';
import { useTranslation } from 'react-i18next';

import { useHeader } from '@/components/ui/header';
import { logoImages } from '@/constants/images';
import { withResize, WithResizeProps } from '@/hoc/withResize';

const _Sidenav = ({ windowSize }: WithResizeProps) => {
  const drawerSize = windowSize && windowSize <= 768 ? 'sm' : 'full';
  const { isDrawerOpen, setDrawerOpen } = useHeader();
  const { t } = useTranslation();

  const SIDENAV_ITEMS = [
    {
      title: t('header.sidenav.items.0.title'),
      icon: <MdIcon.MdTv className="mr-4" size={24} />,
      links: [
        {
          name: t('header.sidenav.items.0.links.0.text'),
        },
        {
          name: t('header.sidenav.items.0.links.1.text'),
        },
        {
          name: t('header.sidenav.items.0.links.2.text'),
        },
        {
          name: t('header.sidenav.items.0.links.3.text'),
        },
      ],
    },
    {
      title: t('header.sidenav.items.1.title'),
      icon: <MdIcon.MdLocalMovies className="mr-4" size={24} />,
      links: [
        {
          name: t('header.sidenav.items.1.links.0.text'),
        },
        {
          name: t('header.sidenav.items.1.links.1.text'),
        },
        {
          name: t('header.sidenav.items.1.links.2.text'),
        },
        {
          name: t('header.sidenav.items.1.links.3.text'),
        },
      ],
    },
    {
      title: t('header.sidenav.items.2.title'),
      icon: <MdIcon.MdPeopleAlt className="mr-4" size={24} />,
      links: [
        {
          name: t('header.sidenav.items.2.links.0.text'),
        },
        {
          name: t('header.sidenav.items.2.links.1.text'),
        },
      ],
    },
  ];

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
          id="amdbSidenav"
          className="amdb-sidenav w-full h-full bg-gray-90 overflow-auto"
        >
          <div className="mx-auto w-full max-w-6xl py-8 px-4">
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

export const Sidenav = withResize(_Sidenav);
