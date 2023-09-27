import { ReactNode, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import * as fs from 'fs';

const wrapper = ({ children }: { children: ReactNode }) => <>{children}</>;

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => {
  const view = render(ui, { wrapper, ...options });

  const styles = document.createElement('style');
  styles.innerHTML = fs.readFileSync('test/styles.css', 'utf8');
  document.head.appendChild(styles);

  return view;
};

export * from '@testing-library/react';
export { customRender as render };
