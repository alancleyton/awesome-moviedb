import { cn } from '@/utils/cn';

import { type MenuProps } from './menu-types';
import { MenuItem } from './menu-item';

export const Menu = ({ children, ...rest }: MenuProps) => (
  <div
    {...rest}
    className={cn('py-4 px-2 flex items-center gap-4 w-full', rest.className)}
  >
    {children}
  </div>
);

Menu.Item = MenuItem;
