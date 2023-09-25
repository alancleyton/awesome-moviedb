import React, { ComponentProps } from 'react';

import { cn } from '@/utils/cn';

export const SidenavMenuTitle = ({
  children,
  ...rest
}: ComponentProps<'h4'>) => (
  <h4
    {...rest}
    className={cn(
      'flex items-center font-semiBold text-lg font-heading text-yellow',
      rest.className,
    )}
  >
    {children}
  </h4>
);
