import React from 'react';
import { render, screen } from '@testing-library/react';

import { Button } from './Button';

// TODO: ensure the button variants have the correct styles

describe('<Button />', () => {
  it('should render the Button correctly', () => {
    render(<Button>Hello Button</Button>);

    const button = screen.getByRole('button', { name: /hello button/i });

    expect(button).toBeInTheDocument();
  });

  it('should render the primary button by default', () => {
    render(<Button>Hello Button</Button>);

    const button = screen.getByRole('button', { name: /hello button/i });

    expect(button).toHaveClass('button-primary');
  });

  it('should render the button with the provided variant', () => {
    render(<Button variant="neutral">Hello Button</Button>);

    const button = screen.getByRole('button', { name: /hello button/i });

    expect(button).toHaveClass('button-neutral');
  });

  it('should render the medium button by default', () => {
    render(<Button>Hello Button</Button>);

    const button = screen.getByRole('button', { name: /hello button/i });

    expect(button).toHaveClass('button-medium');
  });

  it('should render the button with the provided sze', () => {
    render(<Button size="small">Hello Button</Button>);

    const button = screen.getByRole('button', { name: /hello button/i });

    expect(button).toHaveClass('button-small');
  });

  it('should render the blocked button', () => {
    render(
      <Button size="small" block>
        Hello Button
      </Button>,
    );

    const button = screen.getByRole('button', { name: /hello button/i });

    expect(button).toHaveClass('button-block');
  });

  it('should render the rounded button', () => {
    render(
      <Button size="small" rounded>
        Hello Button
      </Button>,
    );

    const button = screen.getByRole('button', { name: /hello button/i });

    expect(button).toHaveClass('button-rounded');
  });

  it('Should render the button with the provided class names', () => {
    render(
      <Button className="py-4 px-4" size="small" rounded>
        Hello Button
      </Button>,
    );

    const button = screen.getByRole('button', { name: /hello button/i });

    expect(button).toHaveClass(
      'py-4 px-4 button button-primary button-small button-rounded',
    );
  });
});
