import React, { useMemo } from 'react';

import { cn } from '@/utils/cn';

import { DrawerContext } from './drawer-context';

import { type DrawerProps } from './drawer-types';

export const Drawer: React.FC<DrawerProps> = ({
  children,
  open,
  onClose,
  ...rest
}): JSX.Element => {
  const drawerCtxValue = useMemo(() => ({ open, onClose }), [open, onClose]);

  return (
    <DrawerContext.Provider value={drawerCtxValue}>
      <div
        className={cn(
          'fixed overflow-hidden z-10 inset-0 transform ease-in-out',
          open && 'transition-opacity opacity-100 duration-500 translate-x-0',
          !open && 'transition-all delay-500 opacity-0 translate-x-full',
        )}
        {...rest}
      >
        {children}
      </div>
    </DrawerContext.Provider>
  );
};
