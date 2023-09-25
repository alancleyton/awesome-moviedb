import React, { ComponentProps } from 'react';

export const NavbarMenuItem = ({ children, ...rest }: ComponentProps<'li'>) => (
  <li {...rest}>{children}</li>
);
