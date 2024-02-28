import type { ReactElement } from 'react';

import DefaultLayout from '@/components/layout/DefaultLayout';

export function useDefaultLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
}