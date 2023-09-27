import React, { useContext } from 'react';

import { cn } from '@/utils/cn';

import { type DrawerBackdropProps } from './drawer-types';
import { DrawerContext } from './drawer-context';

export const DrawerBackdrop = ({ ...rest }: DrawerBackdropProps) => {
  const { open, onClose } = useContext(DrawerContext);

  return (
    <div
      className={cn(
        'w-screen h-full cursor-pointer',
        open && 'bg-black bg-opacity-40',
      )}
      role="presentation"
      onClick={onClose}
      {...rest}
    />
  );
};
