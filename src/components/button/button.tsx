import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '@/utils/cn';

import { type ButtonProps } from './button-types';

const buttonStyles = cva(
  cn(
    'flex items-center justify-center gap-3',
    'font-sans font-medium text-center',
    'leading-body whitespace-nowrap',
    'transition duration-300 ease-in-out',
    'border border-solid border-transparent',
    'overflow-hidden focus:outline-none',
  ),
  {
    variants: {
      size: {
        sm: 'py-2 px-4 text-sm font-semiBold rounded-md',
        md: 'py-3 px-6 text-md font-semiBold rounded-md',
        lg: 'py-4 px-9 text-lg font-semiBold rounded-md',
      },
      variant: {
        primary: cn(
          'text-dark bg-yellow border-yellow',
          'hover:bg-yellow600 hover:border-yellow600',
          'focus:bg-yellow600 focus:border-yellow600',
          'active:bg-yellow900 active:border-yellow900',
        ),
        secondary: cn(
          'text-gray300 bg-dark border-dark',
          'hover:bg-dark900 hover:border-dark900',
          'focus:bg-dark900 focus:border-dark900',
          'active:bg-dark active:border-dark',
        ),
      },
      rounded: {
        true: 'rounded-full [&.py-2]:p-2 [&.py-3]:p-3 [&.py-4]:p-4',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
);

export const Button: React.FC<
  ButtonProps & VariantProps<typeof buttonStyles>
> = ({ children, variant, size, rounded, ...rest }): JSX.Element => (
  <button
    {...rest}
    className={cn(buttonStyles({ size, variant, rounded }), rest.className)}
  >
    {children}
  </button>
);
