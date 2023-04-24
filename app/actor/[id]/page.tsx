import LoadingSpinner from '@/src/components/LoadingComponent/LoadingSpinner/LoadingSpinner';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const ActorSinglePage = dynamic(
  () => import('@/src/components/ActorSinglePage/ActorSinglePage')
);

const page = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <div className="fade-in">
        <ActorSinglePage />
      </div>
    </Suspense>
  );
};

export default page;
