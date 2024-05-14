import { FC, PropsWithChildren } from 'react';

export const Menu: FC<PropsWithChildren> = ({ children }) => {
  return <div className="flex flex-col bg-white border rounded-lg overflow-hidden">{children}</div>;
};
