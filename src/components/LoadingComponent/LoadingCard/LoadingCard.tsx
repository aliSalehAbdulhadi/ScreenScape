import React from 'react';

const LoadingCard = ({ className }: { className?: string }) => {
  return (
    <div className={`w-full  h-full  ${className}`}>
      <div className="bg-gray-800 rounded shadow-lg overflow-hidden h-[4.5rem] xxxs:h-[5rem] semiSm:h-[8rem] xxxl:h-[11rem]">
        <div className="relative pb-2/3">
          <div className="absolute inset-0">
            <div className="w-full h-full bg-gray-800 animate-pulse"></div>
          </div>
        </div>
        <div className="px-4 py-2">
          <div className="h-2 xxxs:h-4 bg-gray-900 rounded w-3/4 mb-2 animate-pulse"></div>
          <div className="h-2 xxxs:h-4 bg-gray-900 rounded w-5/6 mb-2 animate-pulse"></div>
          <div className="h-2 xxxs:h-4 bg-gray-900 rounded w-3/4 mb-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingCard;
