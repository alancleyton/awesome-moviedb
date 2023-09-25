import React, { ComponentProps } from 'react';

import { cn } from '@/utils/cn';

export const NavbarMenuItems = ({
  children,
  ...rest
}: ComponentProps<'ul'>) => (
  <ul
    {...rest}
    className={cn(
      'tablet:flex items-center justify-end gap-3 hidden',
      rest.className,
    )}
  >
    {children}
  </ul>
);
