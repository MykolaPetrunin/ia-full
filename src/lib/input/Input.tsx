import { FC, InputHTMLAttributes } from 'react';
import { Typography } from '@/lib/typography/Typography';

export const Input: FC<
  {
    hint?: string;
    error?: boolean;
  } & InputHTMLAttributes<HTMLInputElement>
> = ({ hint, error = false, className, ...props }) => {
  return (
    <div className="inline-flex relative">
      <input
        className={`
      ${` ${className} ` || ''}
      bg-cyan-50 border border-gray-200 text-gray-950 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 p-2.5 outline-none focus-visible:outline-none`}
        {...props}
      />
      {hint && <Typography className="absolute top-full font-light text-xs" type={error ? 'error' : 'info'}>{hint}</Typography>}
    </div>
  );
};
