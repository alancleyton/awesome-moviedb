import { ReactNode } from 'react';

type Condition = unknown | boolean | (() => boolean);

interface WhenProps {
  children: ReactNode;
  condition: Condition;
}

export const When = ({ children, condition }: WhenProps) => {
  if (typeof condition === 'function' && !condition()) return <></>;
  if (!condition) return <></>;
  return <>{children}</>;
};
