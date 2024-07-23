import { Input } from '@alancleyton67/awesome-ui';
import * as MdIcon from 'react-icons/md';

interface SearchFormProps {
  onClose: () => void;
}

export const SearchForm = ({ onClose }: SearchFormProps) => (
  <div id="searchForm" className="mx-auto w-full max-w-6xl p-4">
    <form>
      <Input.Root isFull variant="unstyled">
        <Input.Group elementRight>
          <Input.Field
            id="searchField"
            placeholder="Buscar Filmes, Séries e Celebridades"
            name="query"
          />
          <Input.RightElement>
            <MdIcon.MdClose
              className="cursor-pointer"
              size={24}
              onClick={onClose}
            />
          </Input.RightElement>
        </Input.Group>
      </Input.Root>
    </form>
  </div>
);
