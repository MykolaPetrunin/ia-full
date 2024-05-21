'use client';

import { ShareGroup } from '@prisma/client';
import { FC, useState } from 'react';
import { IconButton } from '@/lib/iconButton/IconButton';
import { MdDelete } from 'react-icons/md';
import { deleteUserShareGroup } from '../services/deleteUserShareGroup';

export const UserShareGroupItem: FC<{ item: ShareGroup }> = ({ item }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleDelete = async () => {
    setIsLoading(true);
    await deleteUserShareGroup(item.id);
  };

  return (
    <div className="flex gap-2 items-center">
      <span>{item.name}</span>
      <IconButton onClick={handleDelete} isLoading={isLoading}>
        <MdDelete />
      </IconButton>
    </div>
  );
};
