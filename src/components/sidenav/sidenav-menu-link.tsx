import React, { ComponentProps } from 'react';

import { cn } from '@/utils/cn';

export const SidenavMenuLink = ({
  children,
  ...rest
}: ComponentProps<'li'>) => (
  <li
    {...rest}
    className={cn(
      'font-regular text-md font-sans cursor-pointer ml-8 hover:underline',
      rest.className,
    )}
  >
    {children}
  </li>
);
