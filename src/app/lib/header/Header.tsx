'use client';

import { FC } from 'react';
import { usePathname } from 'next/navigation';
import {titles} from "@/app/lib/header/config/titles";

export const Header: FC = () => {
  const pathname = usePathname();

  return (
    <div className="fixed h-16 left-16 right-0 top-0 flex items-center px-4 border-b z-10 bg-white">
      {titles[pathname] && <h1 className="font-medium text-xl">{titles[pathname]}</h1>}
    </div>
  );
};
