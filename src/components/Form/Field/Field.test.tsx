import React from 'react';
import { render, screen } from '@testing-library/react';
import * as MdIcon from 'react-icons/md';

import { Field } from './Field';

describe('<Field />', () => {
  it('should render the Field correctly', () => {
    render(<Field type="text" placeholder="full name" data-testid="field" />);

    expect(screen.getByTestId('field')).toBeInTheDocument();
  });

  it('should render the Field with icon', () => {
    render(
      <Field
        type="text"
        placeholder="full name"
        data-testid="field"
        icon={<MdIcon.MdSearch data-testid="field-icon" size={24} />}
      />,
    );

    expect(screen.getByTestId('field')).toBeInTheDocument();
    expect(screen.getByTestId('field-icon')).toBeInTheDocument();
  });
});
