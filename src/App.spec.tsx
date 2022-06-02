import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '@/App';

describe('App', () => {
  it('should render with "Hello World" title', () => {
    render(<App />);
    const title = screen.getByRole('heading', { name: /Hello World!/i });
    expect(title).toBeInTheDocument();
  });
});
