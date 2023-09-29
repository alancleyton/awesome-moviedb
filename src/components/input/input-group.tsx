import { cn } from '@/utils/cn';

import { type InputGroupProps } from './input-types';

export const InputGroup = ({ children, ...rest }: InputGroupProps) => (
  <div {...rest} className={cn('flex relative h-full w-full', rest.className)}>
    {children}
  </div>
);
