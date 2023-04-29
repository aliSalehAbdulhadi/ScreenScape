import LoadingSpinner from '@/src/components/LoadingComponent/LoadingSpinner/LoadingSpinner';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const TitleSinglePage = dynamic(
  () => import('@/src/components/TitleSinglePage/TitleSinglePage')
);

const page = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <div className="fade-in">
        <TitleSinglePage />
      </div>
    </Suspense>
  );
};

export default page;
