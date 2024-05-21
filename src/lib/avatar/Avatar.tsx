import { FC } from 'react';
import Image from 'next/image';
import { IoPersonCircleOutline } from 'react-icons/io5';

export const Avatar: FC<{
  size?: number;
  src?: string | null;
  alt?: string;
  hoverable?: boolean;
}> = ({ size = 40, src, alt = 'avatar', hoverable }) => {
  return (
    <div
      className={`rounded-full overflow-hidden border-2 border-gray-200${hoverable ? ' hover:border-cyan-400' : ''}`}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      {src ? (
        <Image alt={alt} src={src} width={size} height={size} />
      ) : (
        <IoPersonCircleOutline
          size="size"
          className="text-gray-400"
        />
      )}
    </div>
  );
};
