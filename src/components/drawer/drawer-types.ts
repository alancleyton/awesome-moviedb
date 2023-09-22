import { ReactNode, ComponentProps } from 'react';

export interface DrawerProps extends ComponentProps<'div'> {
  children: ReactNode | string;
  open: boolean;
  onClose?: () => void;
}

export interface DrawerContentProps extends ComponentProps<'div'> {
  children: ReactNode | string;
}

export type DrawerContextType = Pick<DrawerProps, 'open' | 'onClose'>;
