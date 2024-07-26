import { render, screen } from '@testing-library/react';

import { Loader } from '.';

describe('Loader', () => {
  it('should render correctly with children', () => {
    const { container } = render(
      <Loader>
        <h2>loader</h2>
      </Loader>,
    );

    expect(screen.getByText(/loader/i)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should render loader when isLoader=true', () => {
    render(
      <Loader isLoading>
        <h2>loader</h2>
      </Loader>,
    );

    expect(screen.queryByText(/loader/i)).not.toBeInTheDocument();
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });
});
