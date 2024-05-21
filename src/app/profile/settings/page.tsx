import { Page } from '@/lib/page/Page';
import { ContentSection } from '@/lib/contentSection/ContentSection';
import { Suspense } from 'react';
import { UserSharesGroups } from '@/components/userSharesGroups/UserSharesGroups';

export default async function SettingsPage() {
  return (
    <Page>
      <ContentSection title="Shares groups">
        <Suspense fallback={<>Loading</>}>
          <UserSharesGroups />
        </Suspense>
      </ContentSection>
    </Page>
  );
}
