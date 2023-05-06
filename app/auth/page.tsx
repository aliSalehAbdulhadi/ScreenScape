import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import LoadingSpinner from '@/src/components/LoadingComponent/LoadingSpinner/LoadingSpinner';

const AuthPage = dynamic(() => import('@/src/components/AuthPage/AuthPage'));

const page = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <div className="fade-in h-screen bg-primary">
        <AuthPage />
      </div>
    </Suspense>
  );
};

export default page;
