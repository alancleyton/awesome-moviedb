import React, { ReactNode, InputHTMLAttributes } from 'react';

import './Field.scss';

type Props = {
  icon?: ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;

export const Field: React.FC<Props> = ({ icon, ...rest }) => (
  <div className="field">
    <input type="text" {...rest} />
    {icon && icon}
  </div>
);

Field.defaultProps = {
  icon: undefined,
};
