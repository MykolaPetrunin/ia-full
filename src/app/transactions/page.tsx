import { Page } from '@/lib/page/Page';
import { Suspense } from 'react';
import { TransactionsTable } from '@/components/transactionsTable/TransactionsTable';

export default async function Transactions() {
  return (
    <Page>
      <Suspense fallback={<>Loading</>}>
        <TransactionsTable />
      </Suspense>
    </Page>
  );
}
