import { ComponentProps } from 'react';

export interface DrawerProps extends ComponentProps<'div'> {
  open: boolean;
  onClose?: () => void;
}

export type DrawerContextType = Pick<DrawerProps, 'open' | 'onClose'>;

export type DrawerBackdropProps = ComponentProps<'div'>;

export type DrawerContentProps = ComponentProps<'div'>;
