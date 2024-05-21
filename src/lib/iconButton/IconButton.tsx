import { FC, PropsWithChildren, ButtonHTMLAttributes } from 'react';
import { IconButtonVariants } from './types/iconButtonVariants';
import { IconButtonSizes } from './types/iconButtonSizes';
import { IconButtonTypes } from './types/iconButtonTypes';
import {FaSpinner} from "react-icons/fa6";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: IconButtonVariants;
  size?: IconButtonSizes;
  option?: IconButtonTypes;
  isLoading?: boolean;
}
export const IconButton: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  variant = 'contained',
  option = 'info',
  size = 'md',
  className,
  isLoading = false,
  ...props
}) => {
  const paddings: Record<IconButtonSizes, string> = {
    xs: 'p-0.5',
    sm: 'p-1',
    md: 'p-1',
    lg: 'p-1',
    xl: 'p-1',
  };

  const textSizes: Record<IconButtonSizes, string> = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
  };

  const bg: Record<IconButtonTypes, Record<IconButtonVariants, string>> = {
    info: {
      contained: 'bg-cyan-700',
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

  const border: Record<IconButtonTypes, Record<IconButtonVariants, string>> = {
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

  const textColors: Record<
    IconButtonTypes,
    Record<IconButtonVariants, string>
  > = {
    info: {
      contained: 'text-white',
      outlined: 'text-cyan-700',
      text: 'text-cyan-700',
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
      flex flex-nowrap rounded-full whitespace-nowrap active:outline-none items-center gap-1 transition duration-300 ease-in-out hover:opacity-80 focus:outline-none`}
      {...props}
    >
      {isLoading ? <FaSpinner className="animate-spin" /> : children}
    </button>
  );
};
