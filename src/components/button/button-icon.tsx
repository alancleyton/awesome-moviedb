import { type ButtonIconProps } from './button-types';

export const ButtonIcon = ({ children, ...rest }: ButtonIconProps) => (
  <div {...rest}>{children}</div>
);
