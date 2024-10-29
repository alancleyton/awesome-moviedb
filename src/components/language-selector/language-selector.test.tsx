import { screen, fireEvent } from '@testing-library/react';

import { renderWithProviders } from '@/test-utils';

import { LanguageSelector } from '.';

describe('LanguageSelector', () => {
  it('should render menu button with default label', () => {
    renderWithProviders(<LanguageSelector />);

    const defaultMenuButton = screen.getByRole('button', { name: /pt/i });

    expect(defaultMenuButton).toBeInTheDocument();
  });

  it('should change menu button label when language is selected', () => {
    renderWithProviders(<LanguageSelector />);

    const defaultMenuButton = screen.getByRole('button', { name: /pt/i });

    fireEvent.click(defaultMenuButton);

    const items = screen.getAllByRole('menuitemradio');

    fireEvent.click(items[0]);

    const menuButton = screen.getByRole('button', { name: /en/i });

    expect(menuButton).toBeInTheDocument();
  });

  it('should render menu button with storage selected language', async () => {
    localStorage.setItem('amdb:lng', 'en-US');

    renderWithProviders(<LanguageSelector />);

    const menuButton = screen.getByRole('button', { name: /en/i });

    expect(localStorage.getItem('amdb:lng')).toBe('en-US');
    expect(menuButton).toBeInTheDocument();
  });
});
