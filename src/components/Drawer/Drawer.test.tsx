import React, { useState } from 'react';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';

import { Drawer } from './Drawer';

describe('<Drawer />', () => {
  it('should render the Drawer correctly', () => {
    render(
      <Drawer open={false} onClose={() => null}>
        <p>hello drawer</p>
      </Drawer>,
    );

    expect(screen.getByText('hello drawer')).toBeInTheDocument();
  });

  it('should contain "drawer-open" class when isOpen is true', () => {
    render(
      <Drawer open onClose={() => null}>
        <p>hello drawer</p>
      </Drawer>,
    );

    expect(screen.getByTestId('drawer-panel')).toHaveClass('drawer-open');
  });

  it('should contain "drawer-close" class when isOpen is false', () => {
    render(
      <Drawer open={false} onClose={() => null}>
        <p>hello drawer</p>
      </Drawer>,
    );

    expect(screen.getByTestId('drawer-panel')).toHaveClass('drawer-close');
  });

  it("should close drawer when drawer's backdrop has been clicked", async () => {
    const DrawerWrapper = () => {
      const [open, setOpen] = useState<boolean>(true);
      return (
        <Drawer open={open} onClose={() => setOpen(false)}>
          <p>hello drawer</p>
        </Drawer>
      );
    };

    render(<DrawerWrapper />);

    await user.click(screen.getByTestId('drawer-backdrop'));

    expect(screen.getByTestId('drawer-panel')).toHaveClass('drawer-close');
  });
});
