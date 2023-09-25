import React, { ComponentProps } from 'react';

import { cn } from '@/utils/cn';

const SidenavMenuTitle = ({ children, ...rest }: ComponentProps<'h4'>) => (
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

const SidenavMenuLinks = ({ children, ...rest }: ComponentProps<'ul'>) => (
  <ul
    {...rest}
    className={cn('flex flex-col items-start gap-4', rest.className)}
  >
    {children}
  </ul>
);

const SidenavMenuLink = ({ children, ...rest }: ComponentProps<'li'>) => (
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

const SidenavMenuItem = ({ children, ...rest }: ComponentProps<'div'>) => (
  <div {...rest}>{children}</div>
);

export const SidenavMenu = ({ children, ...rest }: ComponentProps<'div'>) => (
  <div {...rest} className={cn('flex flex-col', rest.className)}>
    {children}
  </div>
);

SidenavMenu.Item = SidenavMenuItem;
SidenavMenu.Title = SidenavMenuTitle;
SidenavMenu.Links = SidenavMenuLinks;
SidenavMenu.Link = SidenavMenuLink;
