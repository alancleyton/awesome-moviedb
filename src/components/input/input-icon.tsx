import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '@/utils/cn';

import { type InputIconProps } from './input-types';

const inputIconStyles = cva('absolute w-fit top-1/2 -translate-y-1/2', {
  variants: {
    alignment: {
      left: 'left-3',
      right: 'right-3',
    },
  },
  defaultVariants: {
    alignment: 'left',
  },
});

export const InputIcon = ({
  children,
  alignment,
  ...rest
}: InputIconProps & VariantProps<typeof inputIconStyles>) => (
  <div {...rest} className={cn(inputIconStyles({ alignment }), rest.className)}>
    {children}
  </div>
);
