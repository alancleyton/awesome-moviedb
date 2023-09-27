import React, { ComponentProps } from 'react';

type ButtonIconProps = ComponentProps<'div'>;

export const ButtonIcon = ({ children, ...rest }: ButtonIconProps) => (
  <div {...rest}>{children}</div>
);
