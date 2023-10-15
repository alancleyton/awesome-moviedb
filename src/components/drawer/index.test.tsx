import React, { useState } from 'react';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';

import { Drawer } from '.';

describe('Drawer component', () => {
  it('should render the Drawer correctly', () => {
    render(
      <Drawer open data-testid="drawer">
        <Drawer.Content>
          <p>My drawer content</p>
        </Drawer.Content>
      </Drawer>,
    );

    const drawer = screen.getByTestId('drawer');

    expect(drawer).toBeInTheDocument();
  });

  it('should render the open Drawer', () => {
    render(
      <Drawer open data-testid="open-drawer">
        <Drawer.Content>
          <p>opned drawer</p>
        </Drawer.Content>
      </Drawer>,
    );

    const drawer = screen.getByTestId('open-drawer');

    expect(drawer).toHaveClass(
      'transition-opacity opacity-100 duration-500 translate-x-0',
    );
  });

  it('should render the close Drawer', () => {
    render(
      <Drawer open={false} data-testid="close-drawer">
        <Drawer.Content>
          <p>closed drawer</p>
        </Drawer.Content>
      </Drawer>,
    );

    const drawer = screen.getByTestId('close-drawer');

    expect(drawer).toHaveClass(
      'transition-all delay-500 opacity-0 translate-x-full',
    );
  });

  it('should close Drawer when backdrop has been clicked with provided onClose prop', async () => {
    const DrawerWrapper = () => {
      const [open, setOpen] = useState<boolean>(true);
      return (
        <Drawer open={open} onClose={() => setOpen(false)} data-testid="drawer">
          <Drawer.Content>
            <p>hello drawer</p>
          </Drawer.Content>
          <Drawer.Backdrop data-testid="drawer-backdrop" />
        </Drawer>
      );
    };

    render(<DrawerWrapper />);

    const drawer = screen.getByTestId('drawer');
    const drawerBackdrop = screen.getByTestId('drawer-backdrop');

    await user.click(drawerBackdrop);

    expect(drawer).toHaveClass(
      'transition-all delay-500 opacity-0 translate-x-full',
    );
  });
});
