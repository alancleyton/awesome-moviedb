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
      } w-full bg-gray-90`}
    >
      <div className="mx-auto w-full max-w-6xl p-4">
        <Input.Root isFull variant="info">
          <Input.Group elementRight>
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
