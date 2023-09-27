import React, { useMemo } from 'react';

import { cn } from '@/utils/cn';

import { type DrawerProps } from './drawer-types';
import { DrawerContext } from './drawer-context';
import { DrawerBackdrop } from './drawer-backdrop';
import { DrawerContent } from './drawer-content';

export const Drawer = ({ children, open, onClose, ...rest }: DrawerProps) => {
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

Drawer.Backdrop = DrawerBackdrop;
Drawer.Content = DrawerContent;
