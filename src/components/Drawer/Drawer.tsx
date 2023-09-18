import React, { ReactNode } from 'react';
import classNames from 'classnames';

import './Drawer.scss';

type Props = {
  children: ReactNode;
  open: boolean;
  onClose: (arg: boolean) => void;
};

export const Drawer: React.FC<Props> = ({ children, open, onClose }) => {
  const drawerClasses = classNames({
    drawer: true,
    'drawer-open': open,
    'drawer-close': !open,
  });

  const drawerPanelClasses = classNames({
    'drawer-panel': true,
    'drawer-panel-open': open,
    'drawer-panel-close': !open,
  });

  const drawerBackdropClasses = classNames({
    'drawer-backdrop': true,
    'bg-black bg-opacity-40': open,
  });

  return (
    <div className={drawerClasses} data-testid="drawer-panel">
      <div className={drawerPanelClasses}>{children}</div>
      <div
        className={drawerBackdropClasses}
        role="presentation"
        data-testid="drawer-backdrop"
        onClick={() => {
          onClose(false);
        }}
      />
    </div>
  );
};
