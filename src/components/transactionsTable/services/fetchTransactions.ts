// fetchTransactions.ts
import logger from '@/services/logger';
import { prisma } from '@/services/prismaClient';
import { Transaction } from '@prisma/client';

interface FetchTransactionsParams {
  userId: string;
  page: number;
  pageSize: number;
}

export async function fetchTransactions({
  userId,
  page,
  pageSize,
}: FetchTransactionsParams): Promise<{
  transactions: Transaction[];
  total: number;
  error?: string;
}> {
  try {
    const [transactions, total] = await Promise.all([
      prisma.transaction.findMany({
        where: { userId: userId },
        skip: (page - 1) * pageSize,
        take: pageSize,
        orderBy: {
          timestamp: 'desc',
        },
      }),
      prisma.transaction.count({
        where: { userId: userId },
      }),
    ]);

    return { transactions: transactions || [], total };
  } catch (error) {
    logger.error('Error fetching transactions:', error);

    return {
      transactions: [],
      total: 0,
      error: 'An error occurred while fetching user share groups',
    };
  }
}
