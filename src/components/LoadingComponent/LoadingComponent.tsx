'use client';

import { useEffect, useState } from 'react';
import LoadingCard from './LoadingCard/LoadingCard';
import GridComp from '../GridComp/GridComp';
import LoadingSpinner from './LoadingSpinner/LoadingSpinner';

const LoadingComponent = ({ children }: { children: React.ReactNode }) => {
  const [isClientSide, setIsClientSide] = useState<boolean>(false);

  useEffect(() => {
    setIsClientSide(true);
  }, []);
  return (
    <div className="w-full h-full">
      {isClientSide ? children : <LoadingSpinner />}
    </div>
  );
};

export default LoadingComponent;
