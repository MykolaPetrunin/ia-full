import { FC, PropsWithChildren, ButtonHTMLAttributes } from 'react';
import { ButtonVariants } from '@/app/lib/button/types/buttonVariants';
import { ButtonSizes } from '@/app/lib/button/types/buttonSizes';
import { ButtonTypes } from '@/app/lib/button/types/buttonTypes';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants;
  size?: ButtonSizes;
  option?: ButtonTypes;
}
export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  variant = ButtonVariants.Contained,
  option = ButtonTypes.Info,
  size = ButtonSizes.MD,
  className,
  ...props
}) => {
  const paddings: Record<ButtonSizes, string> = {
    [ButtonSizes.LG]: 'py-4 px-6',
    [ButtonSizes.MD]: 'py-3 px-4',
    [ButtonSizes.SM]: 'py-2 px-3',
    [ButtonSizes.XL]: 'py-5 px-7',
    [ButtonSizes.XS]: 'py-1 px-2',
  };

  const textSizes: Record<ButtonSizes, string> = {
    [ButtonSizes.LG]: 'text-lg',
    [ButtonSizes.MD]: 'text-base',
    [ButtonSizes.SM]: 'text-sm',
    [ButtonSizes.XL]: 'text-xl',
    [ButtonSizes.XS]: 'text-xs',
  };

  const bg: Record<ButtonTypes, Record<ButtonVariants, string>> = {
    [ButtonTypes.Info]: {
      [ButtonVariants.Contained]: 'bg-blue-500',
      [ButtonVariants.Outlined]: 'bg-transparent',
      [ButtonVariants.Text]: 'bg-transparent',
    },
    [ButtonTypes.Success]: {
      [ButtonVariants.Contained]: 'bg-green-500',
      [ButtonVariants.Outlined]: 'bg-transparent',
      [ButtonVariants.Text]: 'bg-transparent',
    },
    [ButtonTypes.Warning]: {
      [ButtonVariants.Contained]: 'bg-yellow-500',
      [ButtonVariants.Outlined]: 'bg-transparent',
      [ButtonVariants.Text]: 'bg-transparent',
    },
    [ButtonTypes.Error]: {
      [ButtonVariants.Contained]: 'bg-red-500',
      [ButtonVariants.Outlined]: 'bg-transparent',
      [ButtonVariants.Text]: 'bg-transparent',
    },
  };

  const border: Record<ButtonTypes, Record<ButtonVariants, string>> = {
    [ButtonTypes.Info]: {
      [ButtonVariants.Contained]: 'border-blue-500',
      [ButtonVariants.Outlined]: 'border-blue-500',
      [ButtonVariants.Text]: '',
    },
    [ButtonTypes.Success]: {
      [ButtonVariants.Contained]: 'border-green-500',
      [ButtonVariants.Outlined]: 'border-green-500',
      [ButtonVariants.Text]: '',
    },
    [ButtonTypes.Warning]: {
      [ButtonVariants.Contained]: 'border-yellow-500',
      [ButtonVariants.Outlined]: 'border-yellow-500',
      [ButtonVariants.Text]: '',
    },
    [ButtonTypes.Error]: {
      [ButtonVariants.Contained]: 'border-red-500',
      [ButtonVariants.Outlined]: 'border-red-500',
      [ButtonVariants.Text]: '',
    },
  };

  const textColors: Record<ButtonTypes, Record<ButtonVariants, string>> = {
    [ButtonTypes.Info]: {
      [ButtonVariants.Contained]: 'text-white',
      [ButtonVariants.Outlined]: 'text-blue-500',
      [ButtonVariants.Text]: 'text-blue-500',
    },
    [ButtonTypes.Success]: {
      [ButtonVariants.Contained]: 'text-white',
      [ButtonVariants.Outlined]: 'text-green-500',
      [ButtonVariants.Text]: 'text-green-500',
    },
    [ButtonTypes.Warning]: {
      [ButtonVariants.Contained]: 'text-white',
      [ButtonVariants.Outlined]: 'text-yellow-500',
      [ButtonVariants.Text]: 'text-yellow-500',
    },
    [ButtonTypes.Error]: {
      [ButtonVariants.Contained]: 'text-white',
      [ButtonVariants.Outlined]: 'text-red-500',
      [ButtonVariants.Text]: 'text-red-500',
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
      rounded-md transition duration-300 ease-in-out hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-blue-500`}
      {...props}
    >
      {children}
    </button>
  );
};
