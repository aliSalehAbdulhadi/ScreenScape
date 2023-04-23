'use client';

import { useEffect, useState } from 'react';
import LoadingSpinner from './LoadingSpinner/LoadingSpinner';

const LoadingComponent = ({ children }: { children: React.ReactNode }) => {
  const [isClientSide, setIsClientSide] = useState<boolean>(false);

  useEffect(() => {
    setIsClientSide(true);
  }, []);
  return (
    <div className="w-full h-full z-[2]">
      {isClientSide ? children : <LoadingSpinner />}
    </div>
  );
};

export default LoadingComponent;
