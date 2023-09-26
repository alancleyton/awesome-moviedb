import React, { ComponentProps } from 'react';

import { cn } from '@/utils/cn';

import { MenuItem } from './menu-item';

export const Menu = ({ children, ...rest }: ComponentProps<'div'>) => (
  <div
    {...rest}
    className={cn('py-4 px-2 flex items-center gap-4 w-full', rest.className)}
  >
    {children}
  </div>
);

Menu.Item = MenuItem;
