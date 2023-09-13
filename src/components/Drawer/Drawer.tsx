import React, { ReactNode } from 'react';
import './Drawer.scss';

type Props = {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: (arg: boolean) => void;
};

export const Drawer: React.FC<Props> = ({ children, isOpen, setIsOpen }) => (
  <aside
    className={`amdb drawer ${isOpen ? 'drawer-open' : 'drawer-close'}`}
    data-testid="drawer-panel"
  >
    <div
      className={`amdb drawer-panel ${
        isOpen ? 'drawer-panel-open' : 'drawer-panel-close'
      }`}
    >
      {children}
    </div>

    <div
      className="amdb drawer-backdrop"
      role="presentation"
      data-testid="drawer-backdrop"
      onClick={() => {
        setIsOpen(false);
      }}
    />
  </aside>
);
