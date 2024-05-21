'use server';

import { z, ZodIssue } from 'zod';
import { revalidatePath } from 'next/cache';
import { prisma } from '@/services/prismaClient';

const CreateUserShareGroup = z.object({
  name: z.string().min(1, 'Please enter a group name.'),
  userId: z.string().min(1, 'Please select a user.'),
});

export type ErrorState =
  | { errors: ZodIssue[]; message: undefined }
  | { message: string; errors?: undefined }
  | undefined;

export async function createUserShareGroup(
  prevState: ErrorState,
  formData: FormData,
) {
  const validatedFields = CreateUserShareGroup.safeParse({
    name: formData.get('name'),
    userId: formData.get('userId'),
  });

  if (!validatedFields.success) {
    return { errors: validatedFields.error.errors };
  }

  try {
    await prisma.shareGroup.create({
      data: {
        name: validatedFields.data.name,
        userId: validatedFields.data.userId,
      },
    });
    revalidatePath('/profile/settings');
    return {};
  } catch (error) {
    console.error('Failed to create user share group:', error);
    return { message: 'Failed to create user share group.' };
  }
}
