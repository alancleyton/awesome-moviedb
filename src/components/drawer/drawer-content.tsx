import React, { useContext } from 'react';

import { cn } from '@/utils/cn';

import { type DrawerContentProps } from './drawer-types';
import { DrawerContext } from './drawer-context';

export const DrawerContent = ({ children, ...rest }: DrawerContentProps) => {
  const { open } = useContext(DrawerContext);

  return (
    <div
      className={cn(
        'absolute right-0 h-full w-screen max-w-xs bg-dark shadow-xl transition-all duration-300 ease-in-out transform',
        open && 'translate-x-0',
        !open && 'translate-x-full',
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
