import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import LoadingSpinner from '@/src/components/LoadingComponent/LoadingSpinner/LoadingSpinner';

const TitleSinglePage = dynamic(
  () => import('@/src/components/TitleSinglePage/TitleSinglePage')
);

const page = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <div className="fade-in min-h-screen bg-primary">
        <TitleSinglePage />
      </div>
    </Suspense>
  );
};

export default page;
