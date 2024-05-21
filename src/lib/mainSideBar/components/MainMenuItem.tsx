'use client';

import Link from 'next/link';
import { FC, PropsWithChildren } from 'react';
import {usePathname} from "next/navigation";

export const MainMenuItem: FC<
  PropsWithChildren<{
    title: string;
    href: string;
  }>
> = ({ title, href, children }) => {
  const pathname = usePathname();
  const isActive = href === "/" ? pathname === href : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={`text-cyan-950 rounded w-12 h-12 flex items-center justify-center hover:bg-cyan-50 text-xl ${isActive ? 'bg-cyan-50' : ''}`}
      title={title}
    >
      {children}
    </Link>
  );
};
