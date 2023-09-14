import React, { ReactNode } from 'react';
import './Drawer.scss';

type Props = {
  children: ReactNode;
  open: boolean;
  onClose: (arg: boolean) => void;
};

export const Drawer: React.FC<Props> = ({ children, open, onClose }) => (
  <aside
    className={`drawer ${open ? 'drawer-open' : 'drawer-close'}`}
    data-testid="drawer-panel"
  >
    <div
      className={`drawer-panel ${
        open ? 'drawer-panel-open' : 'drawer-panel-close'
      }`}
    >
      {children}
    </div>

    <div
      className="drawer-backdrop"
      role="presentation"
      data-testid="drawer-backdrop"
      onClick={() => {
        onClose(false);
      }}
    />
  </aside>
);
