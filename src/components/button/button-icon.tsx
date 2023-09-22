import React from 'react';
import { type ButtonIconProps } from './button-types';

export const ButtonIcon: React.FC<ButtonIconProps> = ({
  children,
  ...rest
}): JSX.Element => <div {...rest}>{children}</div>;
