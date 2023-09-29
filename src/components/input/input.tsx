import { cn } from '@/utils/cn';

import { type InputProps } from './input-types';

import { InputGroup } from './input-group';
import { InputIcon } from './input-icon';

export const Input = ({ ...rest }: InputProps) => (
  <input
    {...rest}
    className={cn(
      'h-7 w-full py-2 px-3 font-sans font-normal text-sm text-dark text-ellipsis placeholder:text-gray900',
      'border-2 border-solid border-transparent bg-white rounded-md transition duration-300 ease-in-out outline-none',
      'hover:enabled:border-yellow focus:enabled:border-yellow disabled:cursor-not-allowed',
      rest.className,
    )}
  />
);

Input.Group = InputGroup;
Input.Icon = InputIcon;
