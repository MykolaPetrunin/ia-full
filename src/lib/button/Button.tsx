import { FC, PropsWithChildren, ButtonHTMLAttributes } from 'react';
import { ButtonVariants } from './types/buttonVariants';
import { ButtonSizes } from './types/buttonSizes';
import { ButtonTypes } from './types/buttonTypes';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants;
  size?: ButtonSizes;
  option?: ButtonTypes;
}
export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  variant = 'contained',
  option = 'info',
  size = 'md',
  className,
  ...props
}) => {
  const paddings: Record<ButtonSizes, string> = {
    xs: 'py-1 px-2',
    sm: 'py-2 px-3',
    md: 'py-3 px-4',
    lg: 'py-4 px-6',
    xl: 'py-5 px-7',
  };

  const textSizes: Record<ButtonSizes, string> = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
  };

  const bg: Record<ButtonTypes, Record<ButtonVariants, string>> = {
    info: {
      contained: 'bg-blue-500',
      outlined: 'bg-transparent',
      text: 'bg-transparent',
    },
    success: {
      contained: 'bg-green-500',
      outlined: 'bg-transparent',
      text: 'bg-transparent',
    },
    warning: {
      contained: 'bg-yellow-500',
      outlined: 'bg-transparent',
      text: 'bg-transparent',
    },
    error: {
      contained: 'bg-red-500',
      outlined: 'bg-transparent',
      text: 'bg-transparent',
    },
  };

  const border: Record<ButtonTypes, Record<ButtonVariants, string>> = {
    info: {
      contained: 'border-blue-500',
      outlined: 'border-blue-500',
      text: '',
    },
    success: {
      contained: 'border-green-500',
      outlined: 'border-green-500',
      text: '',
    },
    warning: {
      contained: 'border-yellow-500',
      outlined: 'border-yellow-500',
      text: '',
    },
    error: {
      contained: 'border-red-500',
      outlined: 'border-red-500',
      text: '',
    },
  };

  const textColors: Record<ButtonTypes, Record<ButtonVariants, string>> = {
    info: {
      contained: 'text-white',
      outlined: 'text-cyan-700',
      text: 'text-cyan-700'
    },
    success: {
      contained: 'text-white',
      outlined: 'text-green-500',
      text: 'text-green-500',
    },
    warning: {
      contained: 'text-white',
      outlined: 'text-yellow-500',
      text: 'text-yellow-500',
    },
    error: {
      contained: 'text-white',
      outlined: 'text-red-500',
      text: 'text-red-500',
    },
  };

  return (
    <button
      className={`
      ${className || ''}
      ${paddings[size]} 
      ${textSizes[size]} 
      ${bg[option][variant]} 
      ${border[option][variant]} 
      ${textColors[option][variant]} 
      flex flex-nowrap whitespace-nowrap active:outline-none items-center gap-1 rounded-md transition duration-300 ease-in-out hover:opacity-80 focus:outline-none`}
      {...props}
    >
      {children}
    </button>
  );
};
