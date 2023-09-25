import React, { ComponentProps } from 'react';

import { cn } from '@/utils/cn';

export const NavbarMenuSeparator = ({ ...rest }: ComponentProps<'span'>) => (
  <span
    {...rest}
    className={cn(
      'tablet:block h-full w-hr border border-solid border-dark600 hidden',
      rest.className,
    )}
  >
    &nbsp;
  </span>
);
