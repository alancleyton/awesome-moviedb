import { Input } from '@alancleyton67/awesome-ui';
import * as MdIcon from 'react-icons/md';

import { useHeaderContext } from '.';

export const HeaderSearchBar = () => {
  const { isSearchBarVisible, onToggleSearchBar } = useHeaderContext();

  return (
    <div
      id="amdbSearchBar"
      className={`${
        isSearchBarVisible ? 'absolute' : 'hidden'
      } w-full bg-white`}
    >
      <div className="mx-auto w-full max-w-6xl p-4">
        <Input.Root isFull variant="unstyled">
          <Input.Group elementLeft elementRight>
            <Input.LeftElement>
              <MdIcon.MdSearch className="text-gray-40" size={24} />
            </Input.LeftElement>
            <Input.Field placeholder="Buscar Filmes, Séries e Celebridades" />
            <Input.RightElement>
              <MdIcon.MdClose
                className="cursor-pointer"
                size={24}
                onClick={onToggleSearchBar}
              />
            </Input.RightElement>
          </Input.Group>
        </Input.Root>
      </div>
    </div>
  );
};
