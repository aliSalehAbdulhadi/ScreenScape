import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';

const AuthPage = dynamic(() => import('@/src/components/AuthPage/AuthPage'));

const page = () => {
  return (
    <Suspense>
      <div className="fade-in">
        <AuthPage />
      </div>
    </Suspense>
  );
};

export default page;
