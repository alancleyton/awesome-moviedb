import React, { useContext, ComponentProps } from 'react';

import { cn } from '@/utils/cn';

import { DrawerContext } from './drawer-context';

export const DrawerBackdrop: React.FC<ComponentProps<'div'>> = ({
  ...rest
}): JSX.Element => {
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
