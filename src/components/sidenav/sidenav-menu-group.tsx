import React, { ComponentProps } from 'react';

export const SidenavMenuGroup = ({
  children,
  ...rest
}: ComponentProps<'div'>) => <div {...rest}>{children}</div>;
