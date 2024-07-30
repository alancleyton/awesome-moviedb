import { render, screen } from '@testing-library/react';

import { When } from '.';

describe('When', () => {
  it('should render children when condition is satisfied', () => {
    render(
      <When condition>
        <p>Hello world</p>
      </When>,
    );

    expect(screen.getByText(/hello world/i)).toBeInTheDocument();
  });

  it('should render fragment when condition is not satisfied', () => {
    render(
      <When condition={false}>
        <p>Hello world</p>
      </When>,
    );

    expect(screen.queryByText(/hello world/i)).not.toBeInTheDocument();
  });

  it('should handle condition as a function', () => {
    render(
      <When condition={() => true}>
        <p>Hello world</p>
      </When>,
    );

    expect(screen.getByText(/hello world/i)).toBeInTheDocument();
  });
});
