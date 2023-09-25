import React, { ComponentProps } from 'react';

import { cn } from '@/utils/cn';

import { SidenavMenuGroup } from './sidenav-menu-group';
import { SidenavMenuTitle } from './sidenav-title';
import { SidenavMenuLinks } from './sidenav-menu-links';
import { SidenavMenuLink } from './sidenav-menu-link';

export const SidenavMenu = ({ children, ...rest }: ComponentProps<'div'>) => (
  <div {...rest} className={cn('flex flex-col', rest.className)}>
    {children}
  </div>
);

SidenavMenu.Group = SidenavMenuGroup;
SidenavMenu.Title = SidenavMenuTitle;
SidenavMenu.Links = SidenavMenuLinks;
SidenavMenu.Link = SidenavMenuLink;
