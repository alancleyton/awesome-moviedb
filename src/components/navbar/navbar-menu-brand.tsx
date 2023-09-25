import React, { ComponentProps } from 'react';

import { cn } from '@/utils/cn';

import { NavbarMenuBrandProps } from './navbar-types';

export const NavbarMenuBrand = ({
  src,
  ...rest
}: NavbarMenuBrandProps & ComponentProps<'div'>) => (
  <div {...rest} className={cn('tablet:block hidden', rest.className)}>
    <figure className="h-8 w-11 flex items-center justify-center rounded bg-darkSlateBlue">
      <img src={src} alt="logotipo" />
    </figure>
  </div>
);
