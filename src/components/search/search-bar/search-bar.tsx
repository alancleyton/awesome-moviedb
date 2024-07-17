import { Input } from '@alancleyton67/awesome-ui';
import * as MdIcon from 'react-icons/md';

interface SearchBarProps {
  isVisible?: boolean;
  onCloseSearchBar: () => void;
}

export const SearchBar = ({ isVisible, onCloseSearchBar }: SearchBarProps) => (
  <div
    id="amdbSearchBar"
    className={`${isVisible ? 'absolute' : 'hidden'} w-full bg-gray-90`}
  >
    <div className="mx-auto w-full max-w-6xl p-4">
      <Input.Root isFull variant="info">
        <Input.Group elementRight>
          <Input.Field placeholder="Buscar Filmes, Séries e Celebridades" />
          <Input.RightElement>
            <MdIcon.MdClose
              className="cursor-pointer"
              size={24}
              onClick={onCloseSearchBar}
            />
          </Input.RightElement>
        </Input.Group>
      </Input.Root>
    </div>
  </div>
);

SearchBar.defaultProps = {
  isVisible: false,
};
