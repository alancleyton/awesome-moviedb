import React, { ReactNode } from 'react';
import './Drawer.scss';

type Props = {
  children: ReactNode;
  open: boolean;
  onClose: (arg: boolean) => void;
};

export const Drawer: React.FC<Props> = ({ children, open, onClose }) => {
  const drawerOpen = open ? 'drawer-open' : 'drawer-close';
  const drawerPanelOpen = open ? 'drawer-panel-open' : 'drawer-panel-close';
  const drawerBackdropOpacity = open ? 'bg-black bg-opacity-40' : '';

  return (
    <div className={`drawer ${drawerOpen}`} data-testid="drawer-panel">
      <div className={`drawer-panel ${drawerPanelOpen}`}>{children}</div>
      <div
        className={`drawer-backdrop ${drawerBackdropOpacity}`}
        role="presentation"
        data-testid="drawer-backdrop"
        onClick={() => {
          onClose(false);
        }}
      />
    </div>
  );
};
