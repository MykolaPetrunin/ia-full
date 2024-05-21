'use server';

import { revalidatePath } from 'next/cache';
import { prisma } from '@/services/prismaClient';

export async function deleteUserShareGroup(id: string) {
  try {
    await prisma.shareGroup.delete({
      where: { id },
    });
    revalidatePath('/profile/settings');
    return { message: 'User share group deleted.' };
  } catch (error) {
    console.error('Failed to delete user share group:', error);
    return { message: 'Failed to delete user share group.' };
  }
}
