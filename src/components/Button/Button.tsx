import React, { ReactNode, ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';

import './Button.scss';

type Props = {
  children: ReactNode | string;
  variant?: 'primary' | 'secondary' | 'neutral';
  size?: 'small' | 'medium' | 'large';
  block?: boolean;
  rounded?: boolean;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<Props> = ({
  children,
  variant,
  size,
  block,
  rounded,
  className,
  ...rest
}) => {
  const buttonClasses = classNames({
    button: true,
    'button-primary': variant === 'primary',
    'button-secondary': variant === 'secondary',
    'button-neutral': variant === 'neutral',
    'button-small': size === 'small',
    'button-medium': size === 'medium',
    'button-large': size === 'large',
    'button-block': block,
    'button-rounded': rounded,
  });

  return (
    <button className={`${className} ${buttonClasses}`} {...rest}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  variant: 'primary',
  size: 'medium',
  block: false,
  rounded: false,
  className: '',
};
