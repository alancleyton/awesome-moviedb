import React, { ComponentProps } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '@/utils/cn';

const menuItemStyles = cva('inline-flex', {
  variants: {
    alignment: {
      left: 'mr-auto',
      right: 'ml-auto',
      center: 'mr-auto ml-auto',
    },
    filled: {
      true: 'w-full',
    },
    collapse: {
      true: 'tablet:flex hidden',
    },
  },
  defaultVariants: {
    filled: false,
    collapse: false,
  },
});

export const MenuItem = ({
  children,
  alignment,
  filled,
  collapse,
  ...rest
}: VariantProps<typeof menuItemStyles> & ComponentProps<'div'>) => (
  <div
    {...rest}
    className={cn(
      menuItemStyles({ alignment, filled, collapse }),
      rest.className,
    )}
  >
    {children}
  </div>
);
