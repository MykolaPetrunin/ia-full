import { auth } from '@/config/auth';

export async function getUserId() {
  const session = await auth();
  return session!.user!.id!;
}
