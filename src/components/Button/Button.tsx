import React, { ReactNode, ButtonHTMLAttributes } from 'react';

import { cn } from '@/utils/cn';

import './Button.scss';

type Props = {
  children: ReactNode | string;
  variant?: 'primary' | 'secondary' | 'neutral';
  size?: 'small' | 'medium' | 'large';
  block?: boolean;
  rounded?: boolean;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<Props> = ({
  className,
  children,
  variant,
  size,
  block,
  rounded,
  ...rest
}) => (
  <button
    className={cn(
      `${className} button`,
      variant === 'primary' && 'button-primary',
      variant === 'secondary' && 'button-secondary',
      variant === 'neutral' && 'button-neutral',
      size === 'small' && 'button-small',
      size === 'medium' && 'button-medium',
      size === 'large' && 'button-large',
      block && 'button-block',
      rounded && 'button-rounded',
    )}
    {...rest}
  >
    {children}
  </button>
);

Button.defaultProps = {
  className: '',
  variant: 'primary',
  size: 'medium',
  block: false,
  rounded: false,
};
