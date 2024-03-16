import type { ReactElement } from 'react';

import DefaultLayout from '@/components/layout/DefaultLayout';

export function useDefaultLayout(page: ReactElement) {
  if(typeof window !== 'undefined') {
    return <DefaultLayout>{page}</DefaultLayout>;
  }
}