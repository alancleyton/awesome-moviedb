import React, { ComponentProps } from 'react';

import { NavbarMenuBrand } from './navbar-menu-brand';
import { NavbarMenuItems } from './navbar-menu-items';
import { NavbarMenuItem } from './navbar-menu-item';
import { NavbarMenuSeparator } from './navbar-menu-separator';

export const NavbarMenu = ({ children }: ComponentProps<'div'>) => (
  <div className="flex items-center justify-between gap-6">{children}</div>
);

NavbarMenu.Brand = NavbarMenuBrand;
NavbarMenu.Items = NavbarMenuItems;
NavbarMenu.Item = NavbarMenuItem;
NavbarMenu.Separator = NavbarMenuSeparator;
