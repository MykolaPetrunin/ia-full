import { fetchTransactions } from '@/components/transactionsTable/services/fetchTransactions';
import { getUserId } from '@/services/getUserId';

export async function TransactionsTable() {
  const userId = await getUserId();

  const data = fetchTransactions({ userId: userId, page: 0, pageSize: 10 });

    console.log(data, 'data');
    return (
    <div>
      <h1>Transactions Table</h1>
    </div>
  );
}
