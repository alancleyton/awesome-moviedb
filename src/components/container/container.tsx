import React, { ComponentProps } from 'react';

export const Container = ({ children }: ComponentProps<'div'>) => (
  <div className="py-2 px-4 mx-auto w-full max-w-6xl">{children}</div>
);
