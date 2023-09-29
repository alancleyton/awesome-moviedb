import { render, screen } from '@testing-library/react';
import * as MdIcon from 'react-icons/md';

import { Input } from './input';

describe('Input', () => {
  it('should render the Input', () => {
    render(<Input type="text" placeholder="full name" data-testid="input" />);

    expect(screen.getByTestId('input')).toBeInTheDocument();
  });

  it('should render the disabled Input', () => {
    render(
      <Input
        type="text"
        placeholder="full name"
        data-testid="input"
        disabled
      />,
    );

    expect(screen.getByTestId('input')).toBeDisabled();
  });

  it('should render the Input with Group', () => {
    render(
      <Input.Group data-testid="input-group">
        <Input type="text" placeholder="full name" data-testid="input" />
      </Input.Group>,
    );

    expect(screen.getByTestId('input-group')).toBeInTheDocument();
    expect(screen.getByTestId('input')).toBeInTheDocument();
  });

  it('should render the Input with Icon', () => {
    render(
      <Input.Group>
        <Input.Icon data-testid="input-icon">
          <MdIcon.MdSearch data-testid="icon" />
        </Input.Icon>
        <Input type="text" placeholder="full name" data-testid="input" />
      </Input.Group>,
    );

    expect(screen.getByTestId('input-icon')).toBeInTheDocument();
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('should render the Input with Icon aligned to left by default', () => {
    render(
      <Input.Group>
        <Input.Icon data-testid="input-icon">
          <MdIcon.MdSearch data-testid="icon" />
        </Input.Icon>
        <Input type="text" placeholder="full name" data-testid="input" />
      </Input.Group>,
    );

    expect(screen.getByTestId('input-icon')).toHaveClass('left-3');
  });

  it('should render the Input with Icon aligned to right', () => {
    render(
      <Input.Group>
        <Input.Icon data-testid="input-icon" alignment="right">
          <MdIcon.MdSearch data-testid="icon" />
        </Input.Icon>
        <Input type="text" placeholder="full name" data-testid="input" />
      </Input.Group>,
    );

    expect(screen.getByTestId('input-icon')).toHaveClass('right-3');
  });
});
