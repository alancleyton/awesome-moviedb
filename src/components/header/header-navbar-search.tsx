import { useState } from 'react';
import * as MdIcon from 'react-icons/md';

import { withResize } from '@/hoc/withResize';
import { cn } from '@/utils/cn';
import { Input, Button } from '@/components';
import { HeaderNavbarSearchSuggestions } from './header-navbar-search-suggestions';

interface HeaderNavbarSearchProps {
  // eslint-disable-next-line
  windowSize?: number;
  serchOnMobile: boolean;
  onToggleSerchOnMobile: (param: boolean) => void;
}

const HeaderNavbarSearch = ({
  windowSize,
  serchOnMobile,
  onToggleSerchOnMobile,
}: HeaderNavbarSearchProps) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const showSearchSuggestions = searchValue && isFocused;

  return (
    <form
      className={cn(
        'w-full',
        windowSize &&
          windowSize <= 768 &&
          serchOnMobile &&
          'absolute top-5 left-0',
      )}
    >
      {windowSize && windowSize <= 768 && (
        <Button
          type="button"
          className={serchOnMobile ? 'hidden' : 'ml-auto'}
          variant="secondary"
          size="sm"
          onClick={() => onToggleSerchOnMobile(true)}
        >
          <Button.Icon>
            <MdIcon.MdSearch size={24} />
          </Button.Icon>
        </Button>
      )}

      <div
        className={
          (windowSize && windowSize >= 768) || serchOnMobile
            ? 'relative'
            : 'hidden'
        }
      >
        <Input.Group>
          {!serchOnMobile && (
            <Input.Icon
              alignment="left"
              onClick={() => onToggleSerchOnMobile(false)}
            >
              <MdIcon.MdSearch className="text-gray900" size={24} />
            </Input.Icon>
          )}

          {windowSize && windowSize <= 768 && serchOnMobile && (
            <Input.Icon alignment="right" className="cursor-pointer">
              <Button
                variant="secondary"
                size="sm"
                rounded
                onClick={() => onToggleSerchOnMobile(false)}
              >
                <Button.Icon>
                  <MdIcon.MdClose size={24} />
                </Button.Icon>
              </Button>
            </Input.Icon>
          )}

          <Input
            className={
              windowSize && windowSize <= 768 && serchOnMobile
                ? 'border-none bg-dark text-gray900'
                : 'pl-7'
            }
            type="text"
            placeholder="Busque filmes, séries de TV e celebridades"
            value={searchValue}
            onChange={event => setSearchValue(event.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </Input.Group>

        {showSearchSuggestions && <HeaderNavbarSearchSuggestions />}
      </div>
    </form>
  );
};

export default withResize(HeaderNavbarSearch);
