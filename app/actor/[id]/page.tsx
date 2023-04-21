import LoadingSpinner from '@/src/components/LoadingComponent/LoadingSpinner/LoadingSpinner';
import { Suspense, lazy } from 'react';

const ActorSinglePage = lazy(
  () => import('@/src/components/ActorSinglePage/ActorSinglePage')
);

const page = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <ActorSinglePage />;
    </Suspense>
  );
};

export default page;
