import { ReactNode } from 'react';
import className from 'classnames';

interface Props {
  children: ReactNode;
  primary?: boolean;
  secondary?: boolean;
  success?: boolean;
  warning?: boolean;
  danger?: boolean;
  outline?: boolean;
  rounded?: boolean;
  buttonClass?: string
}

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}: Props) {
  const classes = className(
    rest.buttonClass,
    'flex items-center px-3 py-1.5 border transition',
    {
      'border-blue-500 bg-blue-500 text-white hover:bg-blue-600': primary,
      'border-gray-800 bg-gray-800 text-white hover:bg-gray-900': secondary,
      'border-green-500 bg-green-500 text-white hover:bg-green-600': success,
      'border-yellow-500 bg-yellow-500 text-white hover:bg-yellow-600': warning,
      'border-red-500 bg-red-500 text-white hover:bg-red-600': danger,
      'rounded-full': rounded,
      'bg-white': outline,
      'text-blue-500': outline && primary,
      'text-gray-800': outline && secondary,
      'text-green-500': outline && success,
      'text-yellow-500': outline && warning,
      'text-red-500': outline && danger,
    }
  );

  if (
    Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger) >
    1
  ) {
    return (
      <button className={classes}>Please select only one variation!!!</button>
    );
  }

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

export default Button;
