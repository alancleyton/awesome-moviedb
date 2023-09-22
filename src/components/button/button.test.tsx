import React from 'react';
import { render, screen } from '@testing-library/react';
import * as MdIcon from 'react-icons/md';

import { Button } from '.';

describe('Button', () => {
  it('should render the root Button correctly', () => {
    render(<Button.Root>Submit</Button.Root>);

    const button = screen.getByRole('button', { name: /submit/i });

    expect(button).toBeInTheDocument();
  });

  it('should render the primary button by default', () => {
    render(<Button.Root>Submit</Button.Root>);

    const button = screen.getByRole('button', { name: /submit/i });

    expect(button).toHaveClass('text-dark bg-yellow border-yellow');
  });

  it('should render the button with the provided variant', () => {
    render(<Button.Root variant="secondary">Submit</Button.Root>);

    const button = screen.getByRole('button', { name: /submit/i });

    expect(button).toHaveClass('text-gray300 bg-dark border-dark');
  });

  it('should render the medium button by default', () => {
    render(<Button.Root>Submit</Button.Root>);

    const button = screen.getByRole('button', { name: /submit/i });

    expect(button).toHaveClass('py-3 px-6 text-md font-semiBold rounded-md');
  });

  it('should render the button with the provided size', () => {
    render(<Button.Root size="lg">Submit</Button.Root>);

    const button = screen.getByRole('button', { name: /submit/i });

    expect(button).toHaveClass('py-4 px-9 text-lg font-semiBold rounded-md');
  });

  it('Should render the button with the provided class names', () => {
    render(
      <Button.Root className="my-class" size="lg">
        Submit
      </Button.Root>,
    );

    const button = screen.getByRole('button', { name: /submit/i });

    expect(button).toHaveClass(
      'my-class flex items-center justify-center gap-3',
    );
  });

  it('should render the rounded button', () => {
    render(
      <Button.Root size="lg" rounded>
        Submit
      </Button.Root>,
    );

    const button = screen.getByRole('button', { name: /submit/i });

    expect(button).toHaveClass('rounded-full');
  });

  it('should render the icon button', () => {
    render(
      <Button.Root>
        <Button.Icon>
          <MdIcon.MdArrowForward data-testid="button-icon" />
        </Button.Icon>
        Submit
      </Button.Root>,
    );

    const button = screen.getByRole('button', { name: /submit/i });
    const buttonIcon = screen.getByTestId('button-icon');

    expect(button).toBeInTheDocument();
    expect(buttonIcon).toBeInTheDocument();
  });
});
