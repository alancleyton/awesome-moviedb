import { ReactNode, ButtonHTMLAttributes, ComponentProps } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode | string;
}

export interface ButtonIconProps extends ComponentProps<'div'> {
  children: ReactNode;
}
