import { FC, PropsWithChildren } from 'react';
import { TypographyTypes } from '@/lib/typography/types/typographyTypes';

const TEXT_COLORS: Record<TypographyTypes, string> = {
  info: 'text-cyan-950',
  success: 'text-green-500',
  warning: 'text-yellow-500',
  error: 'text-red-500',
};

export const Typography: FC<
  PropsWithChildren<{
    type?: TypographyTypes;
    className?: string;
  }>
> = ({ children, type = 'info', className }) => {
  return <p className={` ${TEXT_COLORS[type]}${className?` ${className} `:''}`}>{children}</p>;
};
