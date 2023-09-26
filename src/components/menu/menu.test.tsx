import React from 'react';
import { render, screen } from '@testing-library/react';

import { Menu } from '.';

// TODO: add collapse Menu Item test
describe('Menu', () => {
  it('should render the Menu correctly', () => {
    render(
      <Menu>
        <p>Navigation Menu</p>
      </Menu>,
    );

    expect(screen.getByText(/navigation menu/i)).toBeInTheDocument();
  });

  it('should render the Menu with Items', () => {
    render(
      <Menu>
        <Menu.Item>Menu Item 1</Menu.Item>
        <Menu.Item>Menu Item 2</Menu.Item>
        <Menu.Item>Menu Item 3</Menu.Item>
      </Menu>,
    );

    expect(screen.getByText(/menu item 1/i)).toBeInTheDocument();
    expect(screen.getByText(/menu item 2/i)).toBeInTheDocument();
    expect(screen.getByText(/menu item 3/i)).toBeInTheDocument();
  });

  it('should render the Menu Item aligned to left', () => {
    render(
      <Menu>
        <Menu.Item alignment="left" data-testid="menu-item">
          Menu Item aligned to left
        </Menu.Item>
      </Menu>,
    );

    const menuItem = screen.getByTestId('menu-item');

    expect(menuItem).toHaveClass('mr-auto');
  });

  it('should render the Menu Item aligned to right', () => {
    render(
      <Menu>
        <Menu.Item alignment="right" data-testid="menu-item">
          Menu Item aligned to right
        </Menu.Item>
      </Menu>,
    );

    const menuItem = screen.getByTestId('menu-item');

    expect(menuItem).toHaveClass('ml-auto');
  });

  it('should render the Menu Item aligned to center', () => {
    render(
      <Menu>
        <Menu.Item alignment="center" data-testid="menu-item">
          Menu Item aligned to right
        </Menu.Item>
      </Menu>,
    );

    const menuItem = screen.getByTestId('menu-item');

    expect(menuItem).toHaveClass('mr-auto ml-auto');
  });

  it('should render the Menu Item filled', () => {
    render(
      <Menu>
        <Menu.Item filled data-testid="menu-item">
          Menu Item aligned to right
        </Menu.Item>
      </Menu>,
    );

    const menuItem = screen.getByTestId('menu-item');

    expect(menuItem).toHaveClass('w-full');
  });
});
