import LoadingSpinner from '@/src/components/LoadingComponent/LoadingSpinner/LoadingSpinner';
import { Suspense, lazy } from 'react';

const TitleSinglePage = lazy(
  () => import('@/src/components/TitleSinglePage/TitleSinglePage')
);

const page = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <TitleSinglePage />
    </Suspense>
  );
};

export default page;
