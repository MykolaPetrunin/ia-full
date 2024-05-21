import { fetchUsersSharesGroups } from '@/components/userSharesGroups/services/fetchUsersSharesGroups';
import { auth } from '@/config/auth';
import { NewUserShareGroupForm } from '@/components/userSharesGroups/components/NewUserShareGroupForm';
import { UserShareGroupItem } from '@/components/userSharesGroups/components/UserShareGroupItem';

export async function UserSharesGroups() {
  const session = await auth();
  const userId = session!.user!.id!;
  const shares = await fetchUsersSharesGroups(userId);

  return (
    <div className="flex gap-2 flex-col">
      {shares.error ? (
        <div>{shares.error}</div>
      ) : (
        <>
          {shares.data.map((share) => (
            <UserShareGroupItem key={share.id} item={share} />
          ))}
          <NewUserShareGroupForm userId={userId} />
        </>
      )}
    </div>
  );
}
