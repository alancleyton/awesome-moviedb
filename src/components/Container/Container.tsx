import React, { ReactNode } from 'react';
import './Container.css';

type Props = {
  children: ReactNode;
};

export const Container: React.FC<Props> = ({ children }) => (
  <div className="container">{children}</div>
);
