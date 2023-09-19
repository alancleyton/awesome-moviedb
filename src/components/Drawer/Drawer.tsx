import React, { ReactNode } from 'react';

import { cn } from '@/utils/cn';

import './Drawer.scss';

type Props = {
  children: ReactNode;
  open: boolean;
  onClose: (arg: boolean) => void;
};

export const Drawer: React.FC<Props> = ({ children, open, onClose }) => (
  <div
    className={cn('drawer', open && 'drawer-open', !open && 'drawer-close')}
    data-testid="drawer-panel"
  >
    <div
      className={cn(
        'drawer-panel',
        open && 'drawer-panel-open',
        !open && 'drawer-panel-close',
      )}
    >
      {children}
    </div>
    <div
      className={cn('drawer-backdrop', open && 'bg-black bg-opacity-40')}
      role="presentation"
      data-testid="drawer-backdrop"
      onClick={() => {
        onClose(false);
      }}
    />
  </div>
);
