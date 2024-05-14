'use client';

import { FC, PropsWithChildren, MouseEvent } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const MenuItem: FC<
  PropsWithChildren<{
    onClick?: (e: MouseEvent<HTMLDivElement>) => void;
    href?: string;
  }>
> = ({ children, onClick, href }) => {
  const pathname = usePathname();
  const isActive = !href
    ? false
    : href === '/profile'
      ? pathname === href
      : pathname.startsWith(href);

  if (href) {
    return (
      <Link
        href={href}
        className={`flex border-gray-200 flex-nowrap whitespace-nowrap text-base text-cyan-950 items-center gap-1 px-2 py-2 border-t first:border-0 cursor-pointer hover:bg-cyan-50 ${isActive ? 'bg-cyan-50' : ''}`}
      >
        {children}
      </Link>
    );
  }
  return (
    <div
      className={`flex border-gray-200 flex-nowrap whitespace-nowrap text-base text-cyan-950 items-center gap-1 px-2 py-2 border-t first:border-0 cursor-pointer hover:bg-cyan-50 ${isActive ? 'bg-cyan-50' : ''}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
