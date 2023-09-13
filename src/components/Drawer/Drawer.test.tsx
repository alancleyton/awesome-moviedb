import React from 'react';
import { render, screen } from '@testing-library/react';

import { Drawer } from './Drawer';

describe('<App />', () => {
  it('should render the Drawer correctly', () => {
    render(
      <Drawer isOpen={false} setIsOpen={() => null}>
        <p>hello drawer</p>
      </Drawer>,
    );

    expect(screen.getByText('hello drawer')).toBeInTheDocument();
  });

  it('should contain "drawer-open" class when isOpen is true', () => {
    render(
      <Drawer isOpen setIsOpen={() => null}>
        <p>hello drawer</p>
      </Drawer>,
    );

    expect(screen.getByTestId('drawer-panel')).toHaveClass('drawer-open');
  });

  it('should contain "drawer-close" class when isOpen is false', () => {
    render(
      <Drawer isOpen={false} setIsOpen={() => null}>
        <p>hello drawer</p>
      </Drawer>,
    );

    expect(screen.getByTestId('drawer-panel')).toHaveClass('drawer-close');
  });
});
