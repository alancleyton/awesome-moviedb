import { useState, useEffect } from 'react';
import { Menu } from '@alancleyton67/awesome-ui';
import { useTranslation } from 'react-i18next';

type Key = string | number;

type Selection = 'all' | Iterable<Key>;

const MenuItemRadio = ({ isSelected = false }: { isSelected?: boolean }) => (
  <span className="flex items-center justify-center w-5 h-5 bg-transparent border border-solid border-gray-50 rounded-full">
    {isSelected && (
      <span className="block w-3 h-3 bg-gray-80 rounded-full">&nbsp;</span>
    )}
  </span>
);

export const NavbarLanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<Selection>(
    new Set(['pt']),
  );
  const { i18n } = useTranslation();
  const selectedLanguageValue = [...selectedLanguage].join(', ');
  const labelValue = selectedLanguageValue === 'pt' ? 'PT' : 'EN';

  useEffect(() => {
    i18n.changeLanguage(selectedLanguageValue);
  }, [selectedLanguageValue, i18n]);

  return (
    <Menu
      id="amdbLanguageSelector"
      className="amdb-language-selector"
      label={labelValue}
      variant="secondary"
      selectionMode="single"
      selectedKeys={selectedLanguage}
      defaultSelectedKeys={['pt']}
      onSelectionChange={setSelectedLanguage}
    >
      <Menu.Item id="pt" className="flex items-center gap-3">
        {({ isSelected }) => (
          <>
            <MenuItemRadio isSelected={isSelected} />
            Portugês (Brasil)
          </>
        )}
      </Menu.Item>
      <Menu.Item id="en" className="flex items-center gap-3">
        {({ isSelected }) => (
          <>
            <MenuItemRadio isSelected={isSelected} />
            English (United States)
          </>
        )}
      </Menu.Item>
    </Menu>
  );
};
