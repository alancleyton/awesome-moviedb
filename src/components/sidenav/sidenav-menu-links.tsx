import React, { ComponentProps } from 'react';

import { cn } from '@/utils/cn';

export const SidenavMenuLinks = ({
  children,
  ...rest
}: ComponentProps<'ul'>) => (
  <ul
    {...rest}
    className={cn('flex flex-col items-start gap-4', rest.className)}
  >
    {children}
  </ul>
);
