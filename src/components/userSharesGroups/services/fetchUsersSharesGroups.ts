import { prisma } from '@/services/prismaClient';
import { ShareGroup } from '@prisma/client';
import logger from '@/services/logger';

export async function fetchUsersSharesGroups(
  userId: string,
): Promise<{ data: ShareGroup[]; error?: string }> {
  try {
    const shareGroups = await prisma.shareGroup.findMany({
      where: { userId: userId },
    });

    return { data: shareGroups || [] };
  } catch (error) {
    logger.error('Error fetching user share groups:', error);
    return {
      data: [],
      error: 'An error occurred while fetching user share groups',
    };
  }
}
