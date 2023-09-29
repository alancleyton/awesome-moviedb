import React from 'react';
import { render } from '@testing-library/react';
import App from './app';

describe('App', () => {
  it('Should render the app correctly', () => {
    const { container } = render(<App />);
    expect(container).toBeTruthy();
  });
});
