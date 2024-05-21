import { FC, PropsWithChildren } from 'react';

export const ContentSection: FC<PropsWithChildren<{ title: string }>> = ({
  title,
  children,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="font-medium text-lg">{title}</h2>
      <div>{children}</div>
    </div>
  );
};
